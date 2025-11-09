import {YinYang, WuXing, ShengKe, GanName} from "./types"


/**
 * 天干
 * 抛出天干的基类、天干的十个实例
 */


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

export class StemJia extends HeavenlyStem {
    wuXing: WuXing = WuXing.Huo
    yinYang: YinYang = YinYang.Yang
    value: GanName = '甲'
    id: number = 1

    getLiuHe(target: HeavenlyStem): boolean {
        throw new Error("Method not implemented.");
    }
}

export class StemYi extends HeavenlyStem {
    wuXing: WuXing = WuXing.Huo
    yinYang: YinYang = YinYang.Yang
    value: GanName = '乙'
    id: number = 2

    getLiuHe(target: HeavenlyStem): boolean {
        throw new Error("Method not implemented.");
    }
}

export class StemBing extends HeavenlyStem {
    wuXing: WuXing = WuXing.Huo
    yinYang: YinYang = YinYang.Yang
    value: GanName = '丙'
    id: number = 3

    getLiuHe(target: HeavenlyStem): boolean {
        throw new Error("Method not implemented.");
    }
}

export class StemDing extends HeavenlyStem {
    wuXing: WuXing = WuXing.Huo
    yinYang: YinYang = YinYang.Yang
    value: GanName = '丁'
    id: number = 4

    getLiuHe(target: HeavenlyStem): boolean {
        throw new Error("Method not implemented.");
    }
}

export class StemWu extends HeavenlyStem {
    wuXing: WuXing = WuXing.Huo
    yinYang: YinYang = YinYang.Yang
    value: GanName = '戊'
    id: number = 5

    getLiuHe(target: HeavenlyStem): boolean {
        throw new Error("Method not implemented.");
    }
}

export class StemJi extends HeavenlyStem {
    wuXing: WuXing = WuXing.Huo
    yinYang: YinYang = YinYang.Yang
    value: GanName = '己'
    id: number = 6

    getLiuHe(target: HeavenlyStem): boolean {
        throw new Error("Method not implemented.");
    }
}

export class StemGeng extends HeavenlyStem {
    wuXing: WuXing = WuXing.Huo
    yinYang: YinYang = YinYang.Yang
    value: GanName = '庚'
    id: number = 7

    getLiuHe(target: HeavenlyStem): boolean {
        throw new Error("Method not implemented.");
    }
}

export class StemXin extends HeavenlyStem {
    wuXing: WuXing = WuXing.Huo
    yinYang: YinYang = YinYang.Yang
    value: GanName = '辛'
    id: number = 8

    getLiuHe(target: HeavenlyStem): boolean {
        throw new Error("Method not implemented.");
    }
}

export class StemRen extends HeavenlyStem {
    wuXing: WuXing = WuXing.Huo
    yinYang: YinYang = YinYang.Yang
    value: GanName = '壬'
    id: number = 9

    getLiuHe(target: HeavenlyStem): boolean {
        throw new Error("Method not implemented.");
    }
}

export class StemGui extends HeavenlyStem {
    wuXing: WuXing = WuXing.Huo
    yinYang: YinYang = YinYang.Yang
    value: GanName = '癸'
    id: number = 10

    getLiuHe(target: HeavenlyStem): boolean {
        throw new Error("Method not implemented.");
    }
}

export default [
    new StemJia(),
    new StemYi(),
    new StemBing(),
    new StemDing(),
    new StemWu(),
    new StemJi(),
    new StemGeng(),
    new StemXin(),
    new StemRen(),
    new StemGui(),
]