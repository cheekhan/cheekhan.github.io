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
          items: [
            { text: "首页", link: "/cst/" },
            { text: "测试", link: "/cst/demo" },
          ],
        },
      ],
      "/personal/": [
        {
          text: "个人",
          items: [{ text: "首页", link: "/personal/" }],
        },
      ],
      "/work/": [
        {
          text: "工作",
          items: [{ text: "首页", link: "/work/" }],
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
      provider: 'local'
    }
  },
});
