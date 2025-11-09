/** 阴阳五行的类型声明 */
const enum YinYang {
    Yin,
    Yang,
}

const enum WuXing {
    Jin,
    Shui,
    Mu,
    Huo,
    Tu,
}

/**
 * 生克关系
 */

const enum ShengKe {
    Sheng = "生",
    Ke = "克",
    BeiSheng = "被生",
    BeiKe = "被克",
    BiHe = "相同"
}

export {YinYang, WuXing, ShengKe};

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

export type GanName = '甲' | "乙" | "丙" | "丁" | "戊" | "己" | "庚" | "辛" | "壬" | "癸"

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
export const guiRenList: Array<GuiRen> = [
    "贵人",
    "螣蛇",
    "朱雀",
    "六合",
    "勾陈",
    "青龙",
    "天空",
    "白虎",
    "太常",
    "玄武",
    "太阴",
    "天后",
];