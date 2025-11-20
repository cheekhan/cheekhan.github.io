import { YinYang, WuXing, HeavenlyStem, GanName, TianGanList } from "./types";

/**
 * 天干
 * 抛出天干的基类、天干的十个实例
 */

export class StemJia extends HeavenlyStem {
  wuXing: WuXing = WuXing.Huo;
  yinYang: YinYang = YinYang.Yang;
  value: GanName = "甲";
  id: number = 1;

  getLiuHe(target: HeavenlyStem): boolean {
    throw new Error("Method not implemented.");
  }
}

export class StemYi extends HeavenlyStem {
  wuXing: WuXing = WuXing.Huo;
  yinYang: YinYang = YinYang.Yang;
  value: GanName = "乙";
  id: number = 2;

  getLiuHe(target: HeavenlyStem): boolean {
    throw new Error("Method not implemented.");
  }
}

export class StemBing extends HeavenlyStem {
  wuXing: WuXing = WuXing.Huo;
  yinYang: YinYang = YinYang.Yang;
  value: GanName = "丙";
  id: number = 3;

  getLiuHe(target: HeavenlyStem): boolean {
    throw new Error("Method not implemented.");
  }
}

export class StemDing extends HeavenlyStem {
  wuXing: WuXing = WuXing.Huo;
  yinYang: YinYang = YinYang.Yang;
  value: GanName = "丁";
  id: number = 4;

  getLiuHe(target: HeavenlyStem): boolean {
    throw new Error("Method not implemented.");
  }
}

export class StemWu extends HeavenlyStem {
  wuXing: WuXing = WuXing.Huo;
  yinYang: YinYang = YinYang.Yang;
  value: GanName = "戊";
  id: number = 5;

  getLiuHe(target: HeavenlyStem): boolean {
    throw new Error("Method not implemented.");
  }
}

export class StemJi extends HeavenlyStem {
  wuXing: WuXing = WuXing.Huo;
  yinYang: YinYang = YinYang.Yang;
  value: GanName = "己";
  id: number = 6;

  getLiuHe(target: HeavenlyStem): boolean {
    throw new Error("Method not implemented.");
  }
}

export class StemGeng extends HeavenlyStem {
  wuXing: WuXing = WuXing.Huo;
  yinYang: YinYang = YinYang.Yang;
  value: GanName = "庚";
  id: number = 7;

  getLiuHe(target: HeavenlyStem): boolean {
    throw new Error("Method not implemented.");
  }
}

export class StemXin extends HeavenlyStem {
  wuXing: WuXing = WuXing.Huo;
  yinYang: YinYang = YinYang.Yang;
  value: GanName = "辛";
  id: number = 8;

  getLiuHe(target: HeavenlyStem): boolean {
    throw new Error("Method not implemented.");
  }
}

export class StemRen extends HeavenlyStem {
  wuXing: WuXing = WuXing.Huo;
  yinYang: YinYang = YinYang.Yang;
  value: GanName = "壬";
  id: number = 9;

  getLiuHe(target: HeavenlyStem): boolean {
    throw new Error("Method not implemented.");
  }
}

export class StemGui extends HeavenlyStem {
  wuXing: WuXing = WuXing.Huo;
  yinYang: YinYang = YinYang.Yang;
  value: GanName = "癸";
  id: number = 10;

  getLiuHe(target: HeavenlyStem): boolean {
    throw new Error("Method not implemented.");
  }
}

/** 获取没有副作用的数组 */
export function useTianganList(start?: HeavenlyStem): TianGanList {
  const _arr: TianGanList = [
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
  ];
  const step = (start?.id || 1) - 1; // 默认从甲开始
  const end = _arr.splice(0, step);
  _arr.push(...end);
  return _arr;
}
