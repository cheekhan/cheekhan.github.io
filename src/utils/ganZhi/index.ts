export {
  BranchZi,
  BranchChou,
  BranchYin,
  BranchMao,
  BranchChen,
  BranchSi,
  BranchWu,
  BranchWei,
  BranchShen,
  BranchYou,
  BranchXu,
  BranchHai,
  useDizhiList,
} from "./diZhi";

export {
  StemJia,
  StemYi,
  StemBing,
  StemDing,
  StemWu,
  StemJi,
  StemGeng,
  StemXin,
  StemRen,
  StemGui,
  useTianganList,
} from "./tianGan";

export { useYmdhInfo } from "./timeToConfig";

export { linkRoot, findNext } from "./utils";

export {
  YinYang,
  WuXing,
  ShengKe,
  EarthlyBranch,
  HeavenlyStem,
  type DiZhiList,
  type TianGanList,
  type GuiRen,
  type GuiRenList,
} from "./types";

import type { GuiRenList } from "./types";

/**
 * 获取贵人列表
 * @param asc boolean，true为正序，false倒序
 */
export function useGuiRenList(asc: boolean = true): GuiRenList {
  const arr: GuiRenList = [
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
  if (!asc) {
    const head = arr[0];
    arr.shift();
    arr.reverse();
    arr.unshift(head);
  }
  return arr;
}
