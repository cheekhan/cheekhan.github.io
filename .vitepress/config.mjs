import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  lang: "zh-CN",
  title: "大脑副本",
  description: "cheekhan,占卜",
  themeConfig: {
    // 导航栏
    logo: "/icon.jpg",
    nav: [
      { text: "首页", link: "/" },
      { text: "工作", link: "/work/" },
      { text: "计算机", link: "/cst/" },
      { text: "个人", link: "/personal/" },
    ],
    // 侧边栏
    sidebar: {
      "/cst/": [
        {
          text: "计算机科学与技术",
          items: [{ text: "首页", link: "/cst/" }],
        },
      ],
      "/personal/": [
        {
          text: "个人",
          items: [
            { text: "我是哪个小饼干", link: "/personal/index.md" },
            {
              text: "大六壬",
              items: [
                { text: "前置概念", link: "/personal/MindReader/base.md" },
                { text: "起课排传", link: "/personal/MindReader/setup.md" },
                { text: "九宗门", link: "/personal/MindReader/九宗门.md" },
                { text: "月将", link: "/personal/MindReader/月将.md" },
                { text: "天将", link: "/personal/MindReader/十二天将.md" },
                { text: "十二长生", link: "/personal/MindReader/十二长生.md" },
                { text: "神煞", link: "/personal/MindReader/神煞.md" },
              ],
            },
          ],
        },
      ],
      "/work/": [
        {
          text: "工作",
          items: [
            { text: "常用工具", link: "/work/" },
            {
              text: "博客",
              items: [
                { text: "rollup构建参数", link: "/work/blog/rollupOptions.md" },
                { text: "跨域处理", link: "/work/blog/cors.md" },
              ],
            },
          ],
        },
      ],
      "/": [
        {
          text: "首页",
          items: [{ text: "首页", link: "/" }],
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
