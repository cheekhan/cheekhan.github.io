export default class CaseInfo {
  title = "案例说明";
  // 时间：年月日时分
  dateTime = {
    Y: 2025,
    M: 1,
    D: 1,
    H: 23,
    m: 59,
  };
  // 时间：干支转换
  dateTimeZh = {
    Y: "乙巳",
    M: "乙巳",
    D: "乙巳",
    H: "巳",
    m: "戌", // 月将
  };
  // 用户本命，行年
  user = {
    root: "乙巳",
    flow: "巳",
  };

  stemIndex = 1; // 天神开始排的坐标

  godsIndex = 1; // 天官开始排的坐标
  godsLayout = true; // 是否顺行
  sike = {
    // 四课
    1: {
      bottom: "子", // 下
      top: "子", // 上
      god: "贵", // 官
      bottomAttr: "阴土", // 五行
      topAttr: "阳土", // 五行
    },
    2: {
      bottom: "",
      top: "",
      god: "",
      bottomAttr: "",
      topAttr: "",
    },
    3: {
      bottom: "",
      top: "",
      god: "",
      bottomAttr: "",
      topAttr: "",
    },
    4: {
      bottom: "",
      top: "",
      god: "",
      bottomAttr: "",
      topAttr: "",
    },
  };
  sanchuan = {
    1: {
      lq: "", // 六亲
      dun: "", // 遁干
      chuan: "", // 传
      god: "", // 乘
      isEmpty: false, // 空
      sha: "", // 煞
      wu: "", // 五气
      shier: "", // 十二
    },
    2: {
      lq: "", // 六亲
      dun: "", // 遁干
      chuan: "", // 传
      god: "", // 乘
      isEmpty: false, // 空
      sha: "", // 煞
      wu: "", // 五气
      shier: "", // 十二
    },
    3: {
      lq: "", // 六亲
      dun: "", // 遁干
      chuan: "", // 传
      god: "", // 乘
      isEmpty: false, // 空
      sha: "", // 煞
      wu: "", // 五气
      shier: "", // 十二
    },
  };
  result = "wu"; // 断语
}
