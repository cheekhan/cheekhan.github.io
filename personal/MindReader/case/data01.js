import CaseInfo from "./utils";

const case01 = new CaseInfo();
case01.title = "徐学士四十一岁占前程";
case01.dateTimeZh = {
  Y: "戊申",
  M: "未知",
  D: "甲子",
  H: "巳",
  m: "亥",
};
case01.user = {
  root: "戊辰",
  flow: "未知",
};
case01.stemIndex = 7;
case01.godsIndex = 8;
case01.godsLayout = false;
case01.sike = {
  1: {
    bottom: "甲", // 下
    top: "申", // 上
    god: "龙", // 官
    bottomAttr: "阳木", // 五行
    topAttr: "阳金", // 五行
  },
  2: {
    bottom: "申", // 下
    top: "寅", // 上
    god: "后", // 官
    bottomAttr: "阳金", // 五行
    topAttr: "阳土", // 五行
  },
  3: {
    bottom: "子", // 下
    top: "午", // 上
    god: "虎", // 官
    bottomAttr: "阳水", // 五行
    topAttr: "阳火", // 五行
  },
  4: {
    bottom: "午", // 下
    top: "子", // 上
    god: "蛇", // 官
    bottomAttr: "阳火", // 五行
    topAttr: "阳水", // 五行
  },
};
case01.sanchuan = {
  1: {
    lq: "兄", // 六亲
    dun: "丙", // 遁干
    chuan: "寅", // 传
    god: "后", // 乘
    isEmpty: false, // 空
    sha: "无", // 煞
    wu: "无", // 五气
    shier: "无", // 十二
  },
  2: {
    lq: "官", // 六亲
    dun: "壬", // 遁干
    chuan: "申", // 传
    god: "龙", // 乘
    isEmpty: false, // 空
    sha: "无", // 煞
    wu: "无", // 五气
    shier: "无", // 十二
  },
  3: {
    lq: "兄", // 六亲
    dun: "丙", // 遁干
    chuan: "寅", // 传
    god: "后", // 乘
    isEmpty: false, // 空
    sha: "无", // 煞
    wu: "无", // 五气
    shier: "无", // 十二
  },
};
export default {
  case01,
};
