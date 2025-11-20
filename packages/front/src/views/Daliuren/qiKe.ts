import { GanZhi } from "@cheekhan/utils";

const { useDizhiList } = GanZhi;

export type BranchType = GanZhi.EarthlyBranch;
export type BranchChain = {
  data: BranchType;
  next?: BranchChain;
};

export class QiKe {
  private root: BranchChain;
  private diHead: BranchChain;
  private tianHead: BranchChain;
  private guiHead: BranchChain;
  private guiRenList: Array<GanZhi.GuiRen>;
  constructor(
    indexDi: BranchType,
    indexTian: BranchType,
    indexGui: BranchType,
  ) {
    this.root = this.genCircle();
    // 初始化指针
    this.diHead = this.moveHead(indexDi);
    this.tianHead = this.moveHead(indexTian);
    this.guiHead = this.moveHead(indexGui);
    // 对齐地盘到子
    this.walkCircle();
    // 生成将的列表
    this.guiRenList = this.genGui(indexGui);
  }
  /**
   * 生成一个环
   * @returns
   */
  private genCircle() {
    const diZhiList = useDizhiList();

    const root: BranchChain = {
      data: diZhiList[0],
    };
    let head: BranchChain = root;
    diZhiList.shift();
    diZhiList.forEach((e) => {
      const n: BranchChain = {
        data: e,
      };
      head.next = n;
      head = head.next;
    });
    head.next = root;
    return root;
  }
  /**
   * 移动指针
   * @param target
   * @param head
   * @returns
   */
  private moveHead(target: BranchType): BranchChain {
    let head = this.root;
    while (true) {
      if (head.data.id === target.id) {
        return head;
      } else {
        if (head.next) head = head.next;
      }
    }
  }
  /**
   * 对齐地盘，将其余盘的指针挪动到地盘子所临
   * @returns
   */
  private walkCircle() {
    // 依次循环环，直到地盘对齐了子
    while (true) {
      if (this.diHead.data.id === 1) {
        return;
      } else {
        if (this.diHead.next) this.diHead = this.diHead.next;
        if (this.tianHead.next) this.tianHead = this.tianHead.next;
        if (this.guiHead.next) this.guiHead = this.guiHead.next;
      }
    }
  }
  /**
   * 判断贵人顺逆，获取列表
   * @returns
   */
  private genGui(indexGui: BranchType): Array<GanZhi.GuiRen> {
    // 将盘，对齐到indexGui，即乘临所在时，看地盘
    let diHead = this.diHead;
    let guiHead = this.guiHead;
    while (true) {
      if (guiHead.data.id === indexGui.id) {
        break;
      } else {
        if (diHead.next) diHead = diHead.next;
        if (guiHead.next) guiHead = guiHead.next;
      }
    }
    const arr = GanZhi.useGuiRenList(
      diHead.data.id >= 4 && diHead.data.id <= 9,
    );
    // 对齐了乘临，继续往下走，每次走，都将列表弹出，直到地盘在此对齐子，
    // 把弹出来的，拼到列表后面
    while (true) {
      if (diHead.data.id === 1) {
        break;
      } else {
        const node = arr.shift();
        if (node) arr.push(node);
        if (diHead.next) diHead = diHead.next;
        if (guiHead.next) guiHead = guiHead.next;
      }
    }
    return arr;
  }
  useData() {
    console.log(this.diHead);
    console.log(this.tianHead);
    console.log(this.guiHead);
    console.log(this.guiRenList);
  }
}
