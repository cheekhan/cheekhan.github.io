export namespace GanZhi {
  enum YinYang {
    Yin,
    Yang,
  }

  enum WuXing {
    Jin,
    Shui,
    Mu,
    Huo,
    Tu,
  }

  enum ShengKe {
    Sheng = "生",
    Ke = "克",
    BeiSheng = "被生",
    BeiKe = "被克",
    BiHe = "相同",
  }

  type ZhiName =
    | "子"
    | "丑"
    | "寅"
    | "卯"
    | "辰"
    | "巳"
    | "午"
    | "未"
    | "申"
    | "酉"
    | "戌"
    | "亥";
  type GanName =
    | "甲"
    | "乙"
    | "丙"
    | "丁"
    | "戊"
    | "己"
    | "庚"
    | "辛"
    | "壬"
    | "癸";

  // 地支类型
  abstract class EarthlyBranch {
    abstract wuXing: WuXing;
    abstract yinYang: YinYang;
    abstract value: ZhiName;
    abstract id: number;

    /** 计算相冲 */
    abstract getChong(target: EarthlyBranch): boolean;

    /** 相刑 */
    abstract getXing(target: EarthlyBranch): boolean;

    /** 相害 */
    abstract getHai(target: EarthlyBranch): boolean;

    /** 相破 */
    abstract getPo(target: EarthlyBranch): boolean;

    /** 计算五行生克 */
    getFiveRel(target: EarthlyBranch): ShengKe;
  }

  class BranchZi extends EarthlyBranch {}

  class BranchChou extends EarthlyBranch {}

  class BranchYin extends EarthlyBranch {}

  class BranchMao extends EarthlyBranch {}

  class BranchChen extends EarthlyBranch {}

  class BranchSi extends EarthlyBranch {}

  class BranchWu extends EarthlyBranch {}

  class BranchWei extends EarthlyBranch {}

  class BranchShen extends EarthlyBranch {}

  class BranchYou extends EarthlyBranch {}

  class BranchXu extends EarthlyBranch {}

  class BranchHai extends EarthlyBranch {}
  type DiZhiList = [
    EarthlyBranch,
    EarthlyBranch,
    EarthlyBranch,
    EarthlyBranch,
    EarthlyBranch,
    EarthlyBranch,
    EarthlyBranch,
    EarthlyBranch,
    EarthlyBranch,
    EarthlyBranch,
    EarthlyBranch,
    EarthlyBranch,
  ];

  /** 获取没有副作用的数组 */
  function useDizhiList(start?: EarthlyBranch): DiZhiList;

  // 天干类型
  abstract class HeavenlyStem {
    abstract wuXing: WuXing;
    abstract yinYang: YinYang;
    abstract value: GanName;
    abstract id: number;

    abstract getLiuHe(target: HeavenlyStem): boolean;

    static wuXingRel(src: WuXing, tar: WuXing): ShengKe;
  }

  class StemJia extends HeavenlyStem {}

  class StemYi extends HeavenlyStem {}

  class StemBing extends HeavenlyStem {}

  class StemDing extends HeavenlyStem {}

  class StemWu extends HeavenlyStem {}

  class StemJi extends HeavenlyStem {}

  class StemGeng extends HeavenlyStem {}

  class StemXin extends HeavenlyStem {}

  class StemRen extends HeavenlyStem {}

  class StemGui extends HeavenlyStem {}
  type TianGanList = [
    HeavenlyStem,
    HeavenlyStem,
    HeavenlyStem,
    HeavenlyStem,
    HeavenlyStem,
    HeavenlyStem,
    HeavenlyStem,
    HeavenlyStem,
    HeavenlyStem,
    HeavenlyStem,
  ];
  type GuiRen =
    | "贵人"
    | "螣蛇"
    | "朱雀"
    | "六合"
    | "勾陈"
    | "青龙"
    | "天空"
    | "白虎"
    | "太常"
    | "玄武"
    | "太阴"
    | "天后";
  type GuiRenList = [
    GuiRen,
    GuiRen,
    GuiRen,
    GuiRen,
    GuiRen,
    GuiRen,
    GuiRen,
    GuiRen,
    GuiRen,
    GuiRen,
    GuiRen,
    GuiRen,
  ];
  /**
   * 获取贵人列表
   * @param asc boolean，true为正序，false倒序
   */
  function useGuiRenList(asc?: boolean): GuiRenList;

  /** 获取没有副作用的数组 */
  function useTianganList(start?: HeavenlyStem): TianGanList;

  /** 获取当前时间的四柱信息 */
  function useYmdhInfo(date?: string): {
    y: [HeavenlyStem, EarthlyBranch];
    m: [HeavenlyStem, EarthlyBranch];
    d: [HeavenlyStem, EarthlyBranch];
    h: [HeavenlyStem, EarthlyBranch];
    yuejiang: EarthlyBranch;
    current: Date;
  };

  // 干支链表节点
  type JiaziLinkType = {
    data: [HeavenlyStem, EarthlyBranch];
    next: JiaziLinkType | null;
  };
  // 干支链表根节点
  const linkRoot: JiaziLinkType;

  /** 获取下一个干支组合 */
  function findNext(
    stem: HeavenlyStem,
    branch: EarthlyBranch,
    step?: number,
  ): JiaziLinkType;
}
