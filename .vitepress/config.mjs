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
      { text: "首页", link: "/" },
      { text: "大六壬", link: "/personal/" },
      { text: "六爻", link: "/liuyao/" },
      { text: "课例", link: "/LiurenCase/" },
      { text: "排盘", link: "/Bootstrap/" },
    ],
    // 侧边栏
    sidebar: {
      "/personal/": [
        {
          text: "个人介绍",
          link: "/personal/index",
        },
        {
          text: "六壬基础",
          items: [
            { text: "前置概念", link: "/personal/MindReader/base" },
            { text: "起课排传", link: "/personal/MindReader/setup" },
            { text: "九宗门", link: "/personal/MindReader/九宗门" },
            { text: "月将", link: "/personal/MindReader/月将" },
            { text: "天将", link: "/personal/MindReader/十二天将" },
            { text: "十二长生", link: "/personal/MindReader/十二长生" },
            { text: "神煞", link: "/personal/MindReader/神煞" },
          ],
        },
      ],
      "/liuyao/": [
        {
          text: "参考",
          link: "/liuyao/参考",
        },
        {
          text: "入门",
          items: [
            {
              text: "点卦断卦",
              link: "/liuyao/index",
            },
          ],
        },
        {
          text: "案例",
          items: [],
        },
      ],
      "/LiurenCase/": [
        {
          text: "课例",
          items: [{ text: "谋望", link: "/LiurenCase/谋望/case01.md" }],
        },
      ],
      "/Bootstrap/": [
        {
          text: "排盘",
          link: "/Bootstrap/index",
        },
      ],
      "/": [
        {
          text: "首页",
          link: "/",
        },
      ],
    },
    socialLinks: [
      {
        icon: "github",
        link: "https://github.com/cheekhan/cheekhan.github.io",
      },
    ],
    lastUpdated: true,
    search: {
      provider: "local",
    },
  },
  markdown: {
    container: {
      infoLabel: "口诀：",
    },
  },
});
