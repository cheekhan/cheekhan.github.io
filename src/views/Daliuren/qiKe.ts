import {GanZhi} from "@cheekhan/utils";

const {useDizhiList} = GanZhi;

export type BranchType = GanZhi.EarthlyBranch;
export type BranchChain = {
    data: BranchType;
    next?: BranchChain;
    prev?: BranchChain;
};

export class QiKe {
    private root: BranchChain;
    private diHead: BranchChain;
    private tianHead: BranchChain;
    private guiHead: BranchChain;

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
        // console.log(this.diHead.data);
        // console.log(this.tianHead.data);
        // console.log(this.guiHead.data);
        // 生成天盘、贵人，列表
        // this.useList()
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
            head.next = {
                data: e,
            };
            const temp = head
            head = head.next;
            head.prev = temp;
        });
        head.next = root;
        return root;
    }

    private searchCircle(id: number) {
        let count = 12;
        let head = this.root

        while (count >= 0) {
            if (head.data.id === id) {
                return head;
            } else {
                if (head.next) {
                    head = head.next
                    count--;
                } else {
                    throw new Error('链出现了 next 为空的节点')
                }
            }
        }
    }

    /**
     * 移动指针
     * @param target
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
     * 获取数据
     */
    useList() {
        // 贵人原始数组，没有纠正数组的头和尾
        // 贵人所临，到地盘指针的距离，用 11相减，就是地盘指针到贵人所临的距离
        const x = this.guiHead.data.id - this.tianHead.data.id;
        //  x <= 0 所临，在月将后面，>0，在月将前面
        const id = (this.diHead.data.id + x) % 12; // 临的地盘 id
        // console.log(`贵人所临和加时的距离：${x},计算出临的地盘 id：${id}`)
        const useArcGuiRenList: GanZhi.GuiRenList = GanZhi.useGuiRenList(id >= 4 && id <= 9); // 顺序或者逆序
        // 把指针对齐到子，来计算天盘列表
        const tianList = this.circleToList(this.tianHead);
        //     把地盘对齐到子,修改了所有的指针
        while (true) {
            if (this.diHead.data.id === 1) {
                break;
            } else {
                if (this.diHead.next) this.diHead = this.diHead.next;
                if (this.tianHead.next) this.tianHead = this.tianHead.next;
                if (this.guiHead.next) this.guiHead = this.guiHead.next;
            }
            // 遍历环，此过程不停的从顶部弹出，添加到尾部
            const firstBranch = tianList.shift()
            if (firstBranch) {
                tianList.push(firstBranch);
            }
        }
        //     天盘列表计算完成
        // 虚拟的贵人列表，通过操作数字，形成最后的数组，然后去贵人列表按照 id 取值赋值
        const guiRenIndexList = new Array<number>(12).fill(1).map((_, i) => i);
        // console.log(useArcGuiRenList);
        // console.log(guiRenIndexList);
        let guiRenLinHead = this.searchCircle(id)
        if (!guiRenLinHead) throw new Error(`按 id 取地支错误:${id}`)
        while (true) {
            if (guiRenLinHead.data.id === 1) {
                break
            } else {
                if (guiRenLinHead.next) guiRenLinHead = guiRenLinHead.next
            }
            const firstIndex = guiRenIndexList.shift();
            if (firstIndex !== undefined) {
                guiRenIndexList.push(firstIndex);
            }
        }
        // console.log(guiRenIndexList);
        //     对齐完成，再按照数组元素的 id，去 取值
        const guiRenList: Array<string> = [];
        guiRenIndexList.forEach((e) => {
            const i = useArcGuiRenList[e]
            if (i) {
                guiRenList.push(i)
            } else {
                guiRenList.push('未知')
            }
        })
        return GanZhi.useDizhiList().map<[GanZhi.EarthlyBranch, GanZhi.EarthlyBranch | undefined, string | undefined]>
        ((e, i) => {
            return [
                e, tianList[i], guiRenList[i]
            ]
        })
    }


    /**
     * 将地盘和天盘，转为数组
     * @param root
     */
    private circleToList(root: BranchChain): Array<BranchType> {
        let head = root;
        const startID = head.data.id;
        const arr = [];
        while (true) {
            arr.push(head.data);
            if (!head.next) throw new Error("环遍历出错");
            head = head.next;
            if (startID === head.data.id) {
                return arr;
            }
        }
    }


}
