/** 阴阳五行的类型声明 */
export enum YinYang {
  Yin,
  Yang,
}

export enum WuXing {
  Jin,
  Shui,
  Mu,
  Huo,
  Tu,
}

/**
 * 生克关系
 */

export enum ShengKe {
  Sheng = "生",
  Ke = "克",
  BeiSheng = "被生",
  BeiKe = "被克",
  BiHe = "相同",
}

/**
 * 干支的类型定义
 */
export type ZhiName =
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
export type GanName =
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
/**
 * 十二神将
 */
export type GuiRen =
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

export type GuiRenList = [
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

/** 地支基类 */
export abstract class EarthlyBranch {
  abstract wuXing: WuXing;
  abstract yinYang: YinYang;
  abstract value: ZhiName;
  abstract id: number;

  // 六合
  abstract getLiuHe(target: EarthlyBranch): boolean;

  // 三合
  abstract getSanHe(
    target1: EarthlyBranch,
    target2: EarthlyBranch,
  ): Promise<WuXing>;

  // 相冲
  abstract getChong(target: EarthlyBranch): boolean;

  // 相刑
  abstract getXing(target: EarthlyBranch): boolean;

  // 相害
  abstract getHai(target: EarthlyBranch): boolean;

  // 相破
  abstract getPo(target: EarthlyBranch): boolean;

  // 计算五行生克
  getFiveRel(target: EarthlyBranch): ShengKe {
    return EarthlyBranch.wuXingRel(this.wuXing, target.wuXing);
  }

  static wuXingRel(src: WuXing, tar: WuXing): ShengKe {
    type relationMap = Record<WuXing, Record<WuXing, ShengKe>>;
    const relMap: relationMap = {
      //ShengKe.Sheng | ShengKe.Ke | ShengKe.BeiSheng | ShengKe.BeiKe | ShengKe.BiHe;
      [WuXing.Jin]: {
        [WuXing.Jin]: ShengKe.BiHe,
        [WuXing.Shui]: ShengKe.Sheng,
        [WuXing.Mu]: ShengKe.Ke,
        [WuXing.Huo]: ShengKe.BeiKe,
        [WuXing.Tu]: ShengKe.BeiSheng,
      },
      [WuXing.Shui]: {
        [WuXing.Jin]: ShengKe.BeiSheng,
        [WuXing.Shui]: ShengKe.BiHe,
        [WuXing.Mu]: ShengKe.Sheng,
        [WuXing.Huo]: ShengKe.Ke,
        [WuXing.Tu]: ShengKe.BeiKe,
      },
      [WuXing.Mu]: {
        [WuXing.Jin]: ShengKe.BeiKe,
        [WuXing.Shui]: ShengKe.BeiSheng,
        [WuXing.Mu]: ShengKe.BiHe,
        [WuXing.Huo]: ShengKe.Sheng,
        [WuXing.Tu]: ShengKe.Ke,
      },
      [WuXing.Huo]: {
        [WuXing.Jin]: ShengKe.Ke,
        [WuXing.Shui]: ShengKe.BeiKe,
        [WuXing.Mu]: ShengKe.BeiSheng,
        [WuXing.Huo]: ShengKe.BiHe,
        [WuXing.Tu]: ShengKe.Sheng,
      },
      [WuXing.Tu]: {
        [WuXing.Jin]: ShengKe.Sheng,
        [WuXing.Shui]: ShengKe.Ke,
        [WuXing.Mu]: ShengKe.BeiKe,
        [WuXing.Huo]: ShengKe.BeiSheng,
        [WuXing.Tu]: ShengKe.BiHe,
      },
    };
    return relMap[src][tar];
  }
}
// 固定长度的地支列表
export type DiZhiList = [
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

/** 地支基类 */
export abstract class HeavenlyStem {
  abstract wuXing: WuXing;
  abstract yinYang: YinYang;
  abstract value: GanName;
  abstract id: number;

  abstract getLiuHe(target: HeavenlyStem): boolean;

  static wuXingRel(src: WuXing, tar: WuXing): ShengKe {
    type relationMap = Record<WuXing, Record<WuXing, ShengKe>>;
    const relMap: relationMap = {
      //ShengKe.Sheng | ShengKe.Ke | ShengKe.BeiSheng | ShengKe.BeiKe | ShengKe.BiHe;
      [WuXing.Jin]: {
        [WuXing.Jin]: ShengKe.BiHe,
        [WuXing.Shui]: ShengKe.Sheng,
        [WuXing.Mu]: ShengKe.Ke,
        [WuXing.Huo]: ShengKe.BeiKe,
        [WuXing.Tu]: ShengKe.BeiSheng,
      },
      [WuXing.Shui]: {
        [WuXing.Jin]: ShengKe.BeiSheng,
        [WuXing.Shui]: ShengKe.BiHe,
        [WuXing.Mu]: ShengKe.Sheng,
        [WuXing.Huo]: ShengKe.Ke,
        [WuXing.Tu]: ShengKe.BeiKe,
      },
      [WuXing.Mu]: {
        [WuXing.Jin]: ShengKe.BeiKe,
        [WuXing.Shui]: ShengKe.BeiSheng,
        [WuXing.Mu]: ShengKe.BiHe,
        [WuXing.Huo]: ShengKe.Sheng,
        [WuXing.Tu]: ShengKe.Ke,
      },
      [WuXing.Huo]: {
        [WuXing.Jin]: ShengKe.Ke,
        [WuXing.Shui]: ShengKe.BeiKe,
        [WuXing.Mu]: ShengKe.BeiSheng,
        [WuXing.Huo]: ShengKe.BiHe,
        [WuXing.Tu]: ShengKe.Sheng,
      },
      [WuXing.Tu]: {
        [WuXing.Jin]: ShengKe.Sheng,
        [WuXing.Shui]: ShengKe.Ke,
        [WuXing.Mu]: ShengKe.BeiKe,
        [WuXing.Huo]: ShengKe.BeiSheng,
        [WuXing.Tu]: ShengKe.BiHe,
      },
    };
    return relMap[src][tar];
  }
}

export type TianGanList = [
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
