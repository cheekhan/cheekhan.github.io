import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: "/",
  lang: "zh-CN",
  title: "CheeKhan",
  description: "cheekhan,占卜",
  themeConfig: {
    // 导航栏
    logo: "/icon.jpg",
    nav: [
      { text: "会计", link: "/会计" },
      { text: "数学", link: "/数学" },
      { text: "计算机", link: "/计算机" },
      { text: "大六壬", link: "/大六壬/古代哲学范畴/世界观" },
      { text: "英语", link: "英语" },
    ],
    sidebar: {
      "/会计/": [],
      "/数学/": [],
      "/计算机/": [],
      "/大六壬/": [
        {
          text: "古代哲学范畴",
          items: [
            {
              text: "世界观",
              link: "/大六壬/古代哲学范畴/世界观",
            },
            {
              text: "体用",
              link: "/大六壬/古代哲学范畴/体用",
            },
            {
              text: "三才",
              link: "/大六壬/古代哲学范畴/三才",
            },
          ],
        },
        {
          text: "卜的基础",
          items: [
            {
              text: "参天量地的工具",
              link: "/大六壬/卜的基础/参天量地的工具",
            },
            {
              text: "地支学的运算",
              link: "/大六壬/卜的基础/地支学的运算",
            },
            {
              text: "气的流转",
              link: "/大六壬/卜的基础/气的流转",
            },
          ],
        },
        {
          text: "大六壬初级",
          items: [
            {
              text: "起课",
              link: "/大六壬/大六壬基础/1、起课",
            },
            {
              text: "九宗门概述",
              link: "/大六壬/大六壬基础/2、九宗门概述",
            },
            {
              text: "起课参考",
              link: "/大六壬/大六壬基础/3、起课参考",
            },
            {
              text: "十二天神",
              collapsed: true,
              // link: "/大六壬/大六壬基础/4、 十二天神"
              items: [
                { text: "亥", link: "/大六壬/大六壬基础/4-1、亥" },
                { text: "戌", link: "/大六壬/大六壬基础/4-2、戌" },
                { text: "酉", link: "/大六壬/大六壬基础/4-3、酉" },
                { text: "申", link: "/大六壬/大六壬基础/4-4、申" },
                { text: "未", link: "/大六壬/大六壬基础/4-5、未" },
                { text: "午", link: "/大六壬/大六壬基础/4-6、午" },
                { text: "巳", link: "/大六壬/大六壬基础/4-7、巳" },
                { text: "辰", link: "/大六壬/大六壬基础/4-8、辰" },
                { text: "卯", link: "/大六壬/大六壬基础/4-9、卯" },
                { text: "寅", link: "/大六壬/大六壬基础/4-10、寅" },
                { text: "丑", link: "/大六壬/大六壬基础/4-11、丑" },
                { text: "子", link: "/大六壬/大六壬基础/4-12、子" },
              ],
            },
            {
              text: "十二天将",
              collapsed: true,
              // link: "/大六壬/大六壬基础/5、 十二天将"
              items: [
                { text: "贵人", link: "/大六壬/大六壬基础/5-1、贵人" },
                { text: "螣蛇", link: "/大六壬/大六壬基础/5-2、螣蛇" },
                { text: "朱雀", link: "/大六壬/大六壬基础/5-3、朱雀" },
                { text: "六合", link: "/大六壬/大六壬基础/5-4、六合" },
                { text: "勾陈", link: "/大六壬/大六壬基础/5-5、勾陈" },
                { text: "青龙", link: "/大六壬/大六壬基础/5-6、青龙" },
                { text: "天空", link: "/大六壬/大六壬基础/5-7、天空" },
                { text: "白虎", link: "/大六壬/大六壬基础/5-8、白虎" },
                { text: "太常", link: "/大六壬/大六壬基础/5-9、太常" },
                { text: "玄武", link: "/大六壬/大六壬基础/5-10、玄武" },
                { text: "太阴", link: "/大六壬/大六壬基础/5-11、太阴" },
                { text: "天后", link: "/大六壬/大六壬基础/5-12、天后" },
              ],
            },
            {
              text: "神煞",
              link: "/大六壬/大六壬基础/6、神煞",
            },
            {
              text: "十二长生",
              link: "/大六壬/大六壬基础/7、十二长生",
            },
          ],
        },
        {
          text: "壬归精粹",
          items: [
            {
              text: "四课",
              link: "/大六壬/壬归/1、四课",
            },
            {
              text: "发用",
              link: "/大六壬/壬归/2、发用",
            },
            {
              text: "三传",
              link: "/大六壬/壬归/3、三传",
            },
            {
              text: "天官",
              link: "/大六壬/壬归/4、天官",
            },
            {
              text: "八煞",
              link: "/大六壬/壬归/5、八煞",
            },
            {
              text: "求财占",
              link: "/大六壬/壬归/6、求财占",
            },
            {
              text: "谋望占",
              link: "/大六壬/壬归/7、谋望占",
            },
          ],
        },
      ],
      "/英语/": [],
    },
    // ],
    socialLinks: [
      {
        icon: "github",
        link: "https://github.com/cheekhan/cheekhan.github.io",
      },
    ],
    lastUpdated: {
      text: "更新于",
      formatOptions: {
        dateStyle: "full",
        timeStyle: "medium",
      },
    },
    search: {
      provider: "local",
    },
  },
});
