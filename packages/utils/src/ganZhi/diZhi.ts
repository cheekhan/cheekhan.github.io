import {YinYang, WuXing, ShengKe, ZhiName} from "./types"

/**
 * 地支：
 * 抛出了地支类、地支实例
 */


/** 地支基类 */
abstract class EarthlyBranch {
    abstract wuXing: WuXing;
    abstract yinYang: YinYang;
    abstract value: ZhiName;
    abstract id: number;

    // 六合
    abstract getLiuHe(target: EarthlyBranch): boolean;

    // 三合
    abstract getSanHe(
        target1: EarthlyBranch,
        target2: EarthlyBranch
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

export class BranchZi extends EarthlyBranch {
    wuXing: WuXing = WuXing.Shui;
    yinYang: YinYang = YinYang.Yang;
    value: ZhiName = "子";
    id: number = 1;

    getLiuHe(target: EarthlyBranch): boolean {
        return target.value === "丑";
    }

    getSanHe(
        target1: EarthlyBranch,
        target2: EarthlyBranch
    ): Promise<WuXing> {
        if (
            (target1.value === "申" && target2.value === "辰") ||
            (target1.value === "辰" && target2.value === "申")
        ) {
            return Promise.resolve(WuXing.Shui);
        } else {
            return Promise.reject("不合");
        }
    }

    getChong(target: EarthlyBranch): boolean {
        return target.value === "午";
    }

    getXing(target: EarthlyBranch): boolean {
        return target.value === "卯";
    }

    getHai(target: EarthlyBranch): boolean {
        return target.value === "未";
    }

    getPo(target: EarthlyBranch): boolean {
        return target.value === "酉";
    }
}

export class BranchChou extends EarthlyBranch {
    wuXing: WuXing = WuXing.Tu;
    yinYang: YinYang = YinYang.Yin;
    value: ZhiName = "丑";
    id: number = 2;

    getLiuHe(target: EarthlyBranch): boolean {
        return target.value === "子";
    }

    getSanHe(
        target1: EarthlyBranch,
        target2: EarthlyBranch
    ): Promise<WuXing> {
        if (
            (target1.value === "酉" && target2.value === "巳") ||
            (target1.value === "巳" && target2.value === "酉")
        ) {
            return Promise.resolve(WuXing.Jin);
        } else {
            return Promise.reject("不合");
        }
    }

    getChong(target: EarthlyBranch): boolean {
        throw new Error("Method not implemented.");
    }

    getXing(target: EarthlyBranch): boolean {
        throw new Error("Method not implemented.");
    }

    getHai(target: EarthlyBranch): boolean {
        throw new Error("Method not implemented.");
    }

    getPo(target: EarthlyBranch): boolean {
        throw new Error("Method not implemented.");
    }
}

export class BranchYin extends EarthlyBranch {
    wuXing: WuXing = WuXing.Mu;
    yinYang: YinYang = YinYang.Yang;
    value: ZhiName = "寅";
    id: number = 3;

    getLiuHe(target: EarthlyBranch): boolean {
        return target.value === "亥";
    }

    getSanHe(
        target1: EarthlyBranch,
        target2: EarthlyBranch
    ): Promise<WuXing> {
        if (
            (target1.value === "戌" && target2.value === "午") ||
            (target1.value === "午" && target2.value === "戌")
        ) {
            return Promise.resolve(WuXing.Huo);
        } else {
            return Promise.reject("不合");
        }
    }

    getChong(target: EarthlyBranch): boolean {
        return target.value === "申";
    }

    getXing(target: EarthlyBranch): boolean {
        return target.value === "巳";
    }

    getHai(target: EarthlyBranch): boolean {
        return target.value === "巳";
    }

    getPo(target: EarthlyBranch): boolean {
        return target.value === "亥";
    }
}

export class BranchMao extends EarthlyBranch {
    wuXing: WuXing = WuXing.Mu;
    yinYang: YinYang = YinYang.Yin;
    value: ZhiName = "卯";
    id: number = 4;

    getLiuHe(target: EarthlyBranch): boolean {
        return target.value === "子";
    }

    getSanHe(
        target1: EarthlyBranch,
        target2: EarthlyBranch
    ): Promise<WuXing> {
        if (
            (target1.value === "酉" && target2.value === "巳") ||
            (target1.value === "巳" && target2.value === "酉")
        ) {
            return Promise.resolve(WuXing.Jin);
        } else {
            return Promise.reject("不合");
        }
    }

    getChong(target: EarthlyBranch): boolean {
        throw new Error("Method not implemented.");
    }

    getXing(target: EarthlyBranch): boolean {
        throw new Error("Method not implemented.");
    }

    getHai(target: EarthlyBranch): boolean {
        throw new Error("Method not implemented.");
    }

    getPo(target: EarthlyBranch): boolean {
        throw new Error("Method not implemented.");
    }
}

export class BranchChen extends EarthlyBranch {
    wuXing: WuXing = WuXing.Tu;
    yinYang: YinYang = YinYang.Yang;
    value: ZhiName = "辰";
    id: number = 5;

    getLiuHe(target: EarthlyBranch): boolean {
        return target.value === "子";
    }

    getSanHe(
        target1: EarthlyBranch,
        target2: EarthlyBranch
    ): Promise<WuXing> {
        if (
            (target1.value === "酉" && target2.value === "巳") ||
            (target1.value === "巳" && target2.value === "酉")
        ) {
            return Promise.resolve(WuXing.Jin);
        } else {
            return Promise.reject("不合");
        }
    }

    getChong(target: EarthlyBranch): boolean {
        throw new Error("Method not implemented.");
    }

    getXing(target: EarthlyBranch): boolean {
        throw new Error("Method not implemented.");
    }

    getHai(target: EarthlyBranch): boolean {
        throw new Error("Method not implemented.");
    }

    getPo(target: EarthlyBranch): boolean {
        throw new Error("Method not implemented.");
    }
}

export class BranchSi extends EarthlyBranch {
    wuXing: WuXing = WuXing.Huo;
    yinYang: YinYang = YinYang.Yin;
    value: ZhiName = "巳";
    id: number = 6;

    getLiuHe(target: EarthlyBranch): boolean {
        return target.value === "子";
    }

    getSanHe(
        target1: EarthlyBranch,
        target2: EarthlyBranch
    ): Promise<WuXing> {
        if (
            (target1.value === "酉" && target2.value === "巳") ||
            (target1.value === "巳" && target2.value === "酉")
        ) {
            return Promise.resolve(WuXing.Jin);
        } else {
            return Promise.reject("不合");
        }
    }

    getChong(target: EarthlyBranch): boolean {
        throw new Error("Method not implemented.");
    }

    getXing(target: EarthlyBranch): boolean {
        throw new Error("Method not implemented.");
    }

    getHai(target: EarthlyBranch): boolean {
        throw new Error("Method not implemented.");
    }

    getPo(target: EarthlyBranch): boolean {
        throw new Error("Method not implemented.");
    }
}

export class BranchWu extends EarthlyBranch {
    wuXing: WuXing = WuXing.Huo;
    yinYang: YinYang = YinYang.Yang;
    value: ZhiName = "午";
    id: number = 7;

    getLiuHe(target: EarthlyBranch): boolean {
        return target.value === "子";
    }

    getSanHe(
        target1: EarthlyBranch,
        target2: EarthlyBranch
    ): Promise<WuXing> {
        if (
            (target1.value === "酉" && target2.value === "巳") ||
            (target1.value === "巳" && target2.value === "酉")
        ) {
            return Promise.resolve(WuXing.Jin);
        } else {
            return Promise.reject("不合");
        }
    }

    getChong(target: EarthlyBranch): boolean {
        throw new Error("Method not implemented.");
    }

    getXing(target: EarthlyBranch): boolean {
        throw new Error("Method not implemented.");
    }

    getHai(target: EarthlyBranch): boolean {
        throw new Error("Method not implemented.");
    }

    getPo(target: EarthlyBranch): boolean {
        throw new Error("Method not implemented.");
    }
}

export class BranchWei extends EarthlyBranch {
    wuXing: WuXing = WuXing.Tu;
    yinYang: YinYang = YinYang.Yin;
    value: ZhiName = "未";
    id: number = 8;

    getLiuHe(target: EarthlyBranch): boolean {
        return target.value === "子";
    }

    getSanHe(
        target1: EarthlyBranch,
        target2: EarthlyBranch
    ): Promise<WuXing> {
        if (
            (target1.value === "酉" && target2.value === "巳") ||
            (target1.value === "巳" && target2.value === "酉")
        ) {
            return Promise.resolve(WuXing.Jin);
        } else {
            return Promise.reject("不合");
        }
    }

    getChong(target: EarthlyBranch): boolean {
        throw new Error("Method not implemented.");
    }

    getXing(target: EarthlyBranch): boolean {
        throw new Error("Method not implemented.");
    }

    getHai(target: EarthlyBranch): boolean {
        throw new Error("Method not implemented.");
    }

    getPo(target: EarthlyBranch): boolean {
        throw new Error("Method not implemented.");
    }
}

export class BranchShen extends EarthlyBranch {
    wuXing: WuXing = WuXing.Jin;
    yinYang: YinYang = YinYang.Yang;
    value: ZhiName = "申";
    id: number = 9;

    getLiuHe(target: EarthlyBranch): boolean {
        return target.value === "子";
    }

    getSanHe(
        target1: EarthlyBranch,
        target2: EarthlyBranch
    ): Promise<WuXing> {
        if (
            (target1.value === "酉" && target2.value === "巳") ||
            (target1.value === "巳" && target2.value === "酉")
        ) {
            return Promise.resolve(WuXing.Jin);
        } else {
            return Promise.reject("不合");
        }
    }

    getChong(target: EarthlyBranch): boolean {
        throw new Error("Method not implemented.");
    }

    getXing(target: EarthlyBranch): boolean {
        throw new Error("Method not implemented.");
    }

    getHai(target: EarthlyBranch): boolean {
        throw new Error("Method not implemented.");
    }

    getPo(target: EarthlyBranch): boolean {
        throw new Error("Method not implemented.");
    }
}

export class BranchYou extends EarthlyBranch {
    wuXing: WuXing = WuXing.Jin;
    yinYang: YinYang = YinYang.Yin;
    value: ZhiName = "酉";
    id: number = 10;

    getLiuHe(target: EarthlyBranch): boolean {
        return target.value === "子";
    }

    getSanHe(
        target1: EarthlyBranch,
        target2: EarthlyBranch
    ): Promise<WuXing> {
        if (
            (target1.value === "酉" && target2.value === "巳") ||
            (target1.value === "巳" && target2.value === "酉")
        ) {
            return Promise.resolve(WuXing.Jin);
        } else {
            return Promise.reject("不合");
        }
    }

    getChong(target: EarthlyBranch): boolean {
        throw new Error("Method not implemented.");
    }

    getXing(target: EarthlyBranch): boolean {
        throw new Error("Method not implemented.");
    }

    getHai(target: EarthlyBranch): boolean {
        throw new Error("Method not implemented.");
    }

    getPo(target: EarthlyBranch): boolean {
        throw new Error("Method not implemented.");
    }
}

export class BranchXu extends EarthlyBranch {
    wuXing: WuXing = WuXing.Tu;
    yinYang: YinYang = YinYang.Yang;
    value: ZhiName = "戌";
    id: number = 11;

    getLiuHe(target: EarthlyBranch): boolean {
        return target.value === "子";
    }

    getSanHe(
        target1: EarthlyBranch,
        target2: EarthlyBranch
    ): Promise<WuXing> {
        if (
            (target1.value === "酉" && target2.value === "巳") ||
            (target1.value === "巳" && target2.value === "酉")
        ) {
            return Promise.resolve(WuXing.Jin);
        } else {
            return Promise.reject("不合");
        }
    }

    getChong(target: EarthlyBranch): boolean {
        throw new Error("Method not implemented.");
    }

    getXing(target: EarthlyBranch): boolean {
        throw new Error("Method not implemented.");
    }

    getHai(target: EarthlyBranch): boolean {
        throw new Error("Method not implemented.");
    }

    getPo(target: EarthlyBranch): boolean {
        throw new Error("Method not implemented.");
    }
}

export class BranchHai extends EarthlyBranch {
    wuXing: WuXing = WuXing.Shui;
    yinYang: YinYang = YinYang.Yin;
    value: ZhiName = "亥";
    id: number = 12;

    getLiuHe(target: EarthlyBranch): boolean {
        return target.value === "子";
    }

    getSanHe(
        target1: EarthlyBranch,
        target2: EarthlyBranch
    ): Promise<WuXing> {
        if (
            (target1.value === "酉" && target2.value === "巳") ||
            (target1.value === "巳" && target2.value === "酉")
        ) {
            return Promise.resolve(WuXing.Jin);
        } else {
            return Promise.reject("不合");
        }
    }

    getChong(target: EarthlyBranch): boolean {
        throw new Error("Method not implemented.");
    }

    getXing(target: EarthlyBranch): boolean {
        throw new Error("Method not implemented.");
    }

    getHai(target: EarthlyBranch): boolean {
        throw new Error("Method not implemented.");
    }

    getPo(target: EarthlyBranch): boolean {
        throw new Error("Method not implemented.");
    }
}

export {EarthlyBranch};

export default [
    new BranchZi(),
    new BranchChou(),
    new BranchYin(),
    new BranchMao(),
    new BranchChen(),
    new BranchSi(),
    new BranchWu(),
    new BranchWei(),
    new BranchShen(),
    new BranchYou(),
    new BranchXu(),
    new BranchHai(),
];

