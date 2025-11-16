var YinYang = /* @__PURE__ */ ((YinYang2) => {
  YinYang2[YinYang2["Yin"] = 0] = "Yin";
  YinYang2[YinYang2["Yang"] = 1] = "Yang";
  return YinYang2;
})(YinYang || {});
var WuXing = /* @__PURE__ */ ((WuXing2) => {
  WuXing2[WuXing2["Jin"] = 0] = "Jin";
  WuXing2[WuXing2["Shui"] = 1] = "Shui";
  WuXing2[WuXing2["Mu"] = 2] = "Mu";
  WuXing2[WuXing2["Huo"] = 3] = "Huo";
  WuXing2[WuXing2["Tu"] = 4] = "Tu";
  return WuXing2;
})(WuXing || {});
var ShengKe = /* @__PURE__ */ ((ShengKe2) => {
  ShengKe2["Sheng"] = "生";
  ShengKe2["Ke"] = "克";
  ShengKe2["BeiSheng"] = "被生";
  ShengKe2["BeiKe"] = "被克";
  ShengKe2["BiHe"] = "相同";
  return ShengKe2;
})(ShengKe || {});
class EarthlyBranch {
  // 计算五行生克
  getFiveRel(target) {
    return EarthlyBranch.wuXingRel(this.wuXing, target.wuXing);
  }
  static wuXingRel(src, tar) {
    const relMap = {
      //ShengKe.Sheng | ShengKe.Ke | ShengKe.BeiSheng | ShengKe.BeiKe | ShengKe.BiHe;
      [WuXing.Jin]: {
        [WuXing.Jin]: ShengKe.BiHe,
        [WuXing.Shui]: ShengKe.Sheng,
        [WuXing.Mu]: ShengKe.Ke,
        [WuXing.Huo]: ShengKe.BeiKe,
        [WuXing.Tu]: ShengKe.BeiSheng
      },
      [WuXing.Shui]: {
        [WuXing.Jin]: ShengKe.BeiSheng,
        [WuXing.Shui]: ShengKe.BiHe,
        [WuXing.Mu]: ShengKe.Sheng,
        [WuXing.Huo]: ShengKe.Ke,
        [WuXing.Tu]: ShengKe.BeiKe
      },
      [WuXing.Mu]: {
        [WuXing.Jin]: ShengKe.BeiKe,
        [WuXing.Shui]: ShengKe.BeiSheng,
        [WuXing.Mu]: ShengKe.BiHe,
        [WuXing.Huo]: ShengKe.Sheng,
        [WuXing.Tu]: ShengKe.Ke
      },
      [WuXing.Huo]: {
        [WuXing.Jin]: ShengKe.Ke,
        [WuXing.Shui]: ShengKe.BeiKe,
        [WuXing.Mu]: ShengKe.BeiSheng,
        [WuXing.Huo]: ShengKe.BiHe,
        [WuXing.Tu]: ShengKe.Sheng
      },
      [WuXing.Tu]: {
        [WuXing.Jin]: ShengKe.Sheng,
        [WuXing.Shui]: ShengKe.Ke,
        [WuXing.Mu]: ShengKe.BeiKe,
        [WuXing.Huo]: ShengKe.BeiSheng,
        [WuXing.Tu]: ShengKe.BiHe
      }
    };
    return relMap[src][tar];
  }
}
class BranchZi extends EarthlyBranch {
  wuXing = WuXing.Shui;
  yinYang = YinYang.Yang;
  value = "子";
  id = 1;
  getLiuHe(target) {
    return target.value === "丑";
  }
  getSanHe(target1, target2) {
    if (target1.value === "申" && target2.value === "辰" || target1.value === "辰" && target2.value === "申") {
      return Promise.resolve(WuXing.Shui);
    } else {
      return Promise.reject("不合");
    }
  }
  getChong(target) {
    return target.value === "午";
  }
  getXing(target) {
    return target.value === "卯";
  }
  getHai(target) {
    return target.value === "未";
  }
  getPo(target) {
    return target.value === "酉";
  }
}
class BranchChou extends EarthlyBranch {
  wuXing = WuXing.Tu;
  yinYang = YinYang.Yin;
  value = "丑";
  id = 2;
  getLiuHe(target) {
    return target.value === "子";
  }
  getSanHe(target1, target2) {
    if (target1.value === "酉" && target2.value === "巳" || target1.value === "巳" && target2.value === "酉") {
      return Promise.resolve(WuXing.Jin);
    } else {
      return Promise.reject("不合");
    }
  }
  getChong(target) {
    throw new Error("Method not implemented.");
  }
  getXing(target) {
    throw new Error("Method not implemented.");
  }
  getHai(target) {
    throw new Error("Method not implemented.");
  }
  getPo(target) {
    throw new Error("Method not implemented.");
  }
}
class BranchYin extends EarthlyBranch {
  wuXing = WuXing.Mu;
  yinYang = YinYang.Yang;
  value = "寅";
  id = 3;
  getLiuHe(target) {
    return target.value === "亥";
  }
  getSanHe(target1, target2) {
    if (target1.value === "戌" && target2.value === "午" || target1.value === "午" && target2.value === "戌") {
      return Promise.resolve(WuXing.Huo);
    } else {
      return Promise.reject("不合");
    }
  }
  getChong(target) {
    return target.value === "申";
  }
  getXing(target) {
    return target.value === "巳";
  }
  getHai(target) {
    return target.value === "巳";
  }
  getPo(target) {
    return target.value === "亥";
  }
}
class BranchMao extends EarthlyBranch {
  wuXing = WuXing.Mu;
  yinYang = YinYang.Yin;
  value = "卯";
  id = 4;
  getLiuHe(target) {
    return target.value === "子";
  }
  getSanHe(target1, target2) {
    if (target1.value === "酉" && target2.value === "巳" || target1.value === "巳" && target2.value === "酉") {
      return Promise.resolve(WuXing.Jin);
    } else {
      return Promise.reject("不合");
    }
  }
  getChong(target) {
    throw new Error("Method not implemented.");
  }
  getXing(target) {
    throw new Error("Method not implemented.");
  }
  getHai(target) {
    throw new Error("Method not implemented.");
  }
  getPo(target) {
    throw new Error("Method not implemented.");
  }
}
class BranchChen extends EarthlyBranch {
  wuXing = WuXing.Tu;
  yinYang = YinYang.Yang;
  value = "辰";
  id = 5;
  getLiuHe(target) {
    return target.value === "子";
  }
  getSanHe(target1, target2) {
    if (target1.value === "酉" && target2.value === "巳" || target1.value === "巳" && target2.value === "酉") {
      return Promise.resolve(WuXing.Jin);
    } else {
      return Promise.reject("不合");
    }
  }
  getChong(target) {
    throw new Error("Method not implemented.");
  }
  getXing(target) {
    throw new Error("Method not implemented.");
  }
  getHai(target) {
    throw new Error("Method not implemented.");
  }
  getPo(target) {
    throw new Error("Method not implemented.");
  }
}
class BranchSi extends EarthlyBranch {
  wuXing = WuXing.Huo;
  yinYang = YinYang.Yin;
  value = "巳";
  id = 6;
  getLiuHe(target) {
    return target.value === "子";
  }
  getSanHe(target1, target2) {
    if (target1.value === "酉" && target2.value === "巳" || target1.value === "巳" && target2.value === "酉") {
      return Promise.resolve(WuXing.Jin);
    } else {
      return Promise.reject("不合");
    }
  }
  getChong(target) {
    throw new Error("Method not implemented.");
  }
  getXing(target) {
    throw new Error("Method not implemented.");
  }
  getHai(target) {
    throw new Error("Method not implemented.");
  }
  getPo(target) {
    throw new Error("Method not implemented.");
  }
}
class BranchWu extends EarthlyBranch {
  wuXing = WuXing.Huo;
  yinYang = YinYang.Yang;
  value = "午";
  id = 7;
  getLiuHe(target) {
    return target.value === "子";
  }
  getSanHe(target1, target2) {
    if (target1.value === "酉" && target2.value === "巳" || target1.value === "巳" && target2.value === "酉") {
      return Promise.resolve(WuXing.Jin);
    } else {
      return Promise.reject("不合");
    }
  }
  getChong(target) {
    throw new Error("Method not implemented.");
  }
  getXing(target) {
    throw new Error("Method not implemented.");
  }
  getHai(target) {
    throw new Error("Method not implemented.");
  }
  getPo(target) {
    throw new Error("Method not implemented.");
  }
}
class BranchWei extends EarthlyBranch {
  wuXing = WuXing.Tu;
  yinYang = YinYang.Yin;
  value = "未";
  id = 8;
  getLiuHe(target) {
    return target.value === "子";
  }
  getSanHe(target1, target2) {
    if (target1.value === "酉" && target2.value === "巳" || target1.value === "巳" && target2.value === "酉") {
      return Promise.resolve(WuXing.Jin);
    } else {
      return Promise.reject("不合");
    }
  }
  getChong(target) {
    throw new Error("Method not implemented.");
  }
  getXing(target) {
    throw new Error("Method not implemented.");
  }
  getHai(target) {
    throw new Error("Method not implemented.");
  }
  getPo(target) {
    throw new Error("Method not implemented.");
  }
}
class BranchShen extends EarthlyBranch {
  wuXing = WuXing.Jin;
  yinYang = YinYang.Yang;
  value = "申";
  id = 9;
  getLiuHe(target) {
    return target.value === "子";
  }
  getSanHe(target1, target2) {
    if (target1.value === "酉" && target2.value === "巳" || target1.value === "巳" && target2.value === "酉") {
      return Promise.resolve(WuXing.Jin);
    } else {
      return Promise.reject("不合");
    }
  }
  getChong(target) {
    throw new Error("Method not implemented.");
  }
  getXing(target) {
    throw new Error("Method not implemented.");
  }
  getHai(target) {
    throw new Error("Method not implemented.");
  }
  getPo(target) {
    throw new Error("Method not implemented.");
  }
}
class BranchYou extends EarthlyBranch {
  wuXing = WuXing.Jin;
  yinYang = YinYang.Yin;
  value = "酉";
  id = 10;
  getLiuHe(target) {
    return target.value === "子";
  }
  getSanHe(target1, target2) {
    if (target1.value === "酉" && target2.value === "巳" || target1.value === "巳" && target2.value === "酉") {
      return Promise.resolve(WuXing.Jin);
    } else {
      return Promise.reject("不合");
    }
  }
  getChong(target) {
    throw new Error("Method not implemented.");
  }
  getXing(target) {
    throw new Error("Method not implemented.");
  }
  getHai(target) {
    throw new Error("Method not implemented.");
  }
  getPo(target) {
    throw new Error("Method not implemented.");
  }
}
class BranchXu extends EarthlyBranch {
  wuXing = WuXing.Tu;
  yinYang = YinYang.Yang;
  value = "戌";
  id = 11;
  getLiuHe(target) {
    return target.value === "子";
  }
  getSanHe(target1, target2) {
    if (target1.value === "酉" && target2.value === "巳" || target1.value === "巳" && target2.value === "酉") {
      return Promise.resolve(WuXing.Jin);
    } else {
      return Promise.reject("不合");
    }
  }
  getChong(target) {
    throw new Error("Method not implemented.");
  }
  getXing(target) {
    throw new Error("Method not implemented.");
  }
  getHai(target) {
    throw new Error("Method not implemented.");
  }
  getPo(target) {
    throw new Error("Method not implemented.");
  }
}
class BranchHai extends EarthlyBranch {
  wuXing = WuXing.Shui;
  yinYang = YinYang.Yin;
  value = "亥";
  id = 12;
  getLiuHe(target) {
    return target.value === "子";
  }
  getSanHe(target1, target2) {
    if (target1.value === "酉" && target2.value === "巳" || target1.value === "巳" && target2.value === "酉") {
      return Promise.resolve(WuXing.Jin);
    } else {
      return Promise.reject("不合");
    }
  }
  getChong(target) {
    throw new Error("Method not implemented.");
  }
  getXing(target) {
    throw new Error("Method not implemented.");
  }
  getHai(target) {
    throw new Error("Method not implemented.");
  }
  getPo(target) {
    throw new Error("Method not implemented.");
  }
}
const branches = [
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
  new BranchHai()
];
function useDizhiList(start) {
  const _arr = [
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
    new BranchHai()
  ];
  const step = (start?.id || 1) - 1;
  const end = _arr.splice(0, step);
  return [..._arr, ...end];
}
class HeavenlyStem {
  static wuXingRel(src, tar) {
    const relMap = {
      //ShengKe.Sheng | ShengKe.Ke | ShengKe.BeiSheng | ShengKe.BeiKe | ShengKe.BiHe;
      [WuXing.Jin]: {
        [WuXing.Jin]: ShengKe.BiHe,
        [WuXing.Shui]: ShengKe.Sheng,
        [WuXing.Mu]: ShengKe.Ke,
        [WuXing.Huo]: ShengKe.BeiKe,
        [WuXing.Tu]: ShengKe.BeiSheng
      },
      [WuXing.Shui]: {
        [WuXing.Jin]: ShengKe.BeiSheng,
        [WuXing.Shui]: ShengKe.BiHe,
        [WuXing.Mu]: ShengKe.Sheng,
        [WuXing.Huo]: ShengKe.Ke,
        [WuXing.Tu]: ShengKe.BeiKe
      },
      [WuXing.Mu]: {
        [WuXing.Jin]: ShengKe.BeiKe,
        [WuXing.Shui]: ShengKe.BeiSheng,
        [WuXing.Mu]: ShengKe.BiHe,
        [WuXing.Huo]: ShengKe.Sheng,
        [WuXing.Tu]: ShengKe.Ke
      },
      [WuXing.Huo]: {
        [WuXing.Jin]: ShengKe.Ke,
        [WuXing.Shui]: ShengKe.BeiKe,
        [WuXing.Mu]: ShengKe.BeiSheng,
        [WuXing.Huo]: ShengKe.BiHe,
        [WuXing.Tu]: ShengKe.Sheng
      },
      [WuXing.Tu]: {
        [WuXing.Jin]: ShengKe.Sheng,
        [WuXing.Shui]: ShengKe.Ke,
        [WuXing.Mu]: ShengKe.BeiKe,
        [WuXing.Huo]: ShengKe.BeiSheng,
        [WuXing.Tu]: ShengKe.BiHe
      }
    };
    return relMap[src][tar];
  }
}
class StemJia extends HeavenlyStem {
  wuXing = WuXing.Huo;
  yinYang = YinYang.Yang;
  value = "甲";
  id = 1;
  getLiuHe(target) {
    throw new Error("Method not implemented.");
  }
}
class StemYi extends HeavenlyStem {
  wuXing = WuXing.Huo;
  yinYang = YinYang.Yang;
  value = "乙";
  id = 2;
  getLiuHe(target) {
    throw new Error("Method not implemented.");
  }
}
class StemBing extends HeavenlyStem {
  wuXing = WuXing.Huo;
  yinYang = YinYang.Yang;
  value = "丙";
  id = 3;
  getLiuHe(target) {
    throw new Error("Method not implemented.");
  }
}
class StemDing extends HeavenlyStem {
  wuXing = WuXing.Huo;
  yinYang = YinYang.Yang;
  value = "丁";
  id = 4;
  getLiuHe(target) {
    throw new Error("Method not implemented.");
  }
}
class StemWu extends HeavenlyStem {
  wuXing = WuXing.Huo;
  yinYang = YinYang.Yang;
  value = "戊";
  id = 5;
  getLiuHe(target) {
    throw new Error("Method not implemented.");
  }
}
class StemJi extends HeavenlyStem {
  wuXing = WuXing.Huo;
  yinYang = YinYang.Yang;
  value = "己";
  id = 6;
  getLiuHe(target) {
    throw new Error("Method not implemented.");
  }
}
class StemGeng extends HeavenlyStem {
  wuXing = WuXing.Huo;
  yinYang = YinYang.Yang;
  value = "庚";
  id = 7;
  getLiuHe(target) {
    throw new Error("Method not implemented.");
  }
}
class StemXin extends HeavenlyStem {
  wuXing = WuXing.Huo;
  yinYang = YinYang.Yang;
  value = "辛";
  id = 8;
  getLiuHe(target) {
    throw new Error("Method not implemented.");
  }
}
class StemRen extends HeavenlyStem {
  wuXing = WuXing.Huo;
  yinYang = YinYang.Yang;
  value = "壬";
  id = 9;
  getLiuHe(target) {
    throw new Error("Method not implemented.");
  }
}
class StemGui extends HeavenlyStem {
  wuXing = WuXing.Huo;
  yinYang = YinYang.Yang;
  value = "癸";
  id = 10;
  getLiuHe(target) {
    throw new Error("Method not implemented.");
  }
}
const stems = [
  new StemJia(),
  new StemYi(),
  new StemBing(),
  new StemDing(),
  new StemWu(),
  new StemJi(),
  new StemGeng(),
  new StemXin(),
  new StemRen(),
  new StemGui()
];
function useTianganList(start) {
  const _arr = [
    new StemJia(),
    new StemYi(),
    new StemBing(),
    new StemDing(),
    new StemWu(),
    new StemJi(),
    new StemGeng(),
    new StemXin(),
    new StemRen(),
    new StemGui()
  ];
  const step = (start?.id || 1) - 1;
  const end = _arr.splice(0, step);
  return [..._arr, ...end];
}
const _createLink = () => {
  let root = { data: [stems[0], branches[0]], next: null };
  let i = 0;
  let head = null;
  let s = 1, b = 1;
  while (i < 60) {
    if (s >= 10) s = 0;
    if (b >= 12) b = 0;
    if (head) {
      const node = {
        next: null,
        data: [stems[s], branches[b]]
      };
      head.next = node;
      head = node;
    } else {
      root = head = {
        data: [stems[s], branches[b]],
        next: null
      };
    }
    s += 1;
    b += 1;
    i += 1;
  }
  return root;
};
const linkRoot = _createLink();
function findNext(stem, branch, step = 1) {
  let head = linkRoot;
  if (head) {
    while (head) {
      if (head.data[0].value === stem.value && head.data[1].value === branch.value) {
        break;
      }
      head = head.next;
    }
  }
  if (head === null) {
    throw new Error(`甲子组合错误：${stem.value},${branch.value}`);
  }
  while (step > 0) {
    if (head && head.next) {
      head = head.next;
    } else {
      head = linkRoot;
    }
    step -= 1;
  }
  return head;
}
const yearStartDate = ["2025-01-29", "2026-02-17"];
const jieqiGroupByYear = {
  2025: [
    ["2025-02-18", branches[11]],
    ["2025-03-20", branches[10]],
    ["2025-04-20", branches[9]],
    ["2025-05-21", branches[8]],
    ["2025-06-21", branches[7]],
    ["2025-07-22", branches[6]],
    ["2025-08-23", branches[5]],
    ["2025-09-23", branches[4]],
    ["2025-10-23", branches[3]],
    ["2025-11-22", branches[2]],
    ["2025-12-21", branches[1]]
  ],
  2026: [
    ["2026-01-20", branches[0]],
    ["2026-02-18", branches[11]],
    ["2026-03-20", branches[10]],
    ["2026-04-20", branches[9]],
    ["2026-05-21", branches[8]],
    ["2026-06-21", branches[7]],
    ["2026-07-23", branches[6]],
    ["2026-08-23", branches[5]],
    ["2026-09-23", branches[4]],
    ["2026-10-23", branches[3]],
    ["2026-11-22", branches[2]],
    ["2026-12-22", branches[1]]
  ]
};
const yearGanzhiIndex = [stems[1], branches[5]];
const dayGanzhiIndex = [stems[4], branches[10]];
function useYmdhInfo(date) {
  let yearInfo = linkRoot;
  const monthInfo = linkRoot;
  let dayInfo = linkRoot;
  const hourInfo = linkRoot;
  let yuejiangInfo = branches[10];
  let current = new Date(date ? date : /* @__PURE__ */ new Date());
  if (isNaN(current.valueOf())) {
    console.log(`使用【${date}】格式化日期错误`);
    current = /* @__PURE__ */ new Date();
  }
  yearStartDate.some((y, i) => {
    const yd = new Date(y);
    if (current >= yd) {
      yearInfo = findNext(yearGanzhiIndex[0], yearGanzhiIndex[1], i);
      return true;
    }
  });
  const dayStart = /* @__PURE__ */ new Date("2025-01-29T23:59:59+08:00");
  dayInfo = findNext(
    dayGanzhiIndex[0],
    dayGanzhiIndex[1],
    Math.ceil((current.getTime() - dayStart.getTime()) / (1e3 * 60 * 60 * 24))
  );
  const hours = current.getHours();
  const hourGan = _dayToHour(dayInfo);
  if (hours < 1) {
    hourInfo.data = [hourGan[0], branches[0]];
  } else if (hours < 3) {
    hourInfo.data = [hourGan[1], branches[1]];
  } else if (hours < 5) {
    hourInfo.data = [hourGan[2], branches[2]];
  } else if (hours < 7) {
    hourInfo.data = [hourGan[3], branches[3]];
  } else if (hours < 9) {
    hourInfo.data = [hourGan[4], branches[4]];
  } else if (hours < 11) {
    hourInfo.data = [hourGan[5], branches[5]];
  } else if (hours < 13) {
    hourInfo.data = [hourGan[6], branches[6]];
  } else if (hours < 15) {
    hourInfo.data = [hourGan[7], branches[7]];
  } else if (hours < 17) {
    hourInfo.data = [hourGan[8], branches[8]];
  } else if (hours < 19) {
    hourInfo.data = [hourGan[9], branches[9]];
  } else if (hours < 21) {
    hourInfo.data = [hourGan[10], branches[10]];
  } else if (hours < 23) {
    hourInfo.data = [hourGan[11], branches[11]];
  } else {
    hourInfo.data = [hourGan[0], branches[0]];
  }
  jieqiGroupByYear[current.getFullYear()].some((j) => {
    if (current.valueOf() > new Date(j[0]).valueOf()) {
      yuejiangInfo = j[1];
    } else {
      return true;
    }
  });
  return {
    y: yearInfo.data,
    m: monthInfo.data,
    d: dayInfo.data,
    h: hourInfo.data,
    yuejiang: yuejiangInfo,
    current
  };
}
function _dayToHour(d) {
  let arr = [];
  if (d.data[0].value === "甲" || d.data[0].value === "己") {
    arr = useTianganList(new StemJia());
  } else if (d.data[0].value === "乙" || d.data[0].value === "庚") {
    arr = useTianganList(new StemBing());
  } else if (d.data[0].value === "丙" || d.data[0].value === "辛") {
    arr = useTianganList(new StemWu());
  } else if (d.data[0].value === "丁" || d.data[0].value === "壬") {
    arr = useTianganList(new StemGeng());
  } else if (d.data[0].value === "戊" || d.data[0].value === "癸") {
    arr = useTianganList(new StemRen());
  } else {
    throw new Error(`日干判断错误：${d.data[0].value}`);
  }
  arr.push(arr[0], arr[1]);
  return arr;
}
const index = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  BranchChen,
  BranchChou,
  BranchHai,
  BranchMao,
  BranchShen,
  BranchSi,
  BranchWei,
  BranchWu,
  BranchXu,
  BranchYin,
  BranchYou,
  BranchZi,
  EarthlyBranch,
  HeavenlyStem,
  ShengKe,
  StemBing,
  StemDing,
  StemGeng,
  StemGui,
  StemJi,
  StemJia,
  StemRen,
  StemWu,
  StemXin,
  StemYi,
  WuXing,
  YinYang,
  findNext,
  linkRoot,
  useDizhiList,
  useTianganList,
  useYmdhInfo
}, Symbol.toStringTag, { value: "Module" }));
export {
  index as GanZhi
};
//# sourceMappingURL=index.js.map
