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
            { text: "决策稿", link: "/about" },
            // { text: "指南", link: "/阴阳五行/index" },
            // {text: "天干地支", link: "/天干地支/index"},
            // {text: "大六壬", link: "/大六壬/index"},
            // {text: "子平八字", link: "/子平八字/index"},
            // {text: "六爻", link: "/六爻/index"},
        ],
        // 侧边栏
        /**
         * {
         *     text:''
         *     link:"/路径"
         *     items:[
         *         { text:"",link:""}
         *     ]
         * }
         */
        sidebar: [
            {
                text: "决策稿",
                link: "/about"
            },
            {
                text: "理学下的世界观",
                items: [
                    {
                        text: "造化",
                        link: "/理学下的世界观/1、造化"
                    },
                    {
                        text: "世界开始运转",
                        link: "/理学下的世界观/2、世界开始运转"
                    },
                ]
            },
            {
                text: "卜的基础",
                items: [
                    {
                        text: '1、地支学的运算',
                        link: "/卜的基础/1、地支学的运算",
                    },
                    {
                        text: "2、气的流转",
                        link: "/卜的基础/2、气的流转"
                    }
                ]
            },
            {
                text: "大六壬初级",
                items: [
                    {
                        text: "1、起课",
                        link: "/大六壬初级/1、起课"
                    },
                    {
                        text: "2、九宗门概述",
                        link: "/大六壬初级/2、九宗门概述"
                    },
                    {
                        text: "3、起课参考",
                        link: "/大六壬初级/3、起课参考"
                    },
                    {
                        text: "4、 十二天神",
                        collapsed: true,
                        // link: "/大六壬初级/4、 十二天神"
                        items: [
                            { text: "亥", link: "/大六壬初级/4-1、亥" },
                            { text: "戌", link: "/大六壬初级/4-2、戌" },
                            { text: "酉", link: "/大六壬初级/4-3、酉" },
                            { text: "申", link: "/大六壬初级/4-4、申" },
                            { text: "未", link: "/大六壬初级/4-5、未" },
                            { text: "午", link: "/大六壬初级/4-6、午" },
                            { text: "巳", link: "/大六壬初级/4-7、巳" },
                            { text: "辰", link: "/大六壬初级/4-8、辰" },
                            { text: "卯", link: "/大六壬初级/4-9、卯" },
                            { text: "寅", link: "/大六壬初级/4-10、寅" },
                            { text: "丑", link: "/大六壬初级/4-11、丑" },
                            { text: "子", link: "/大六壬初级/4-12、子" },
                        ]
                    },
                    {
                        text: "5、 十二天将",
                        collapsed: true,
                        // link: "/大六壬初级/4、 十二天神"
                        items: [
                            { text: "贵人", link: "/大六壬初级/5-1、贵人" },
                            { text: "螣蛇", link: "/大六壬初级/5-2、螣蛇" },
                            { text: "朱雀", link: "/大六壬初级/5-3、朱雀" },
                            { text: "六合", link: "/大六壬初级/5-4、六合" },
                            { text: "勾陈", link: "/大六壬初级/5-5、勾陈" },
                            { text: "青龙", link: "/大六壬初级/5-6、青龙" },
                            { text: "天空", link: "/大六壬初级/5-7、天空" },
                            { text: "白虎", link: "/大六壬初级/5-8、白虎" },
                            { text: "太常", link: "/大六壬初级/5-9、太常" },
                            { text: "玄武", link: "/大六壬初级/5-10、玄武" },
                            { text: "太阴", link: "/大六壬初级/5-11、太阴" },
                            { text: "天后", link: "/大六壬初级/5-12、天后" },
                        ]
                    },
                    {
                        text: "6、神煞",
                        link: "/大六壬初级/6、神煞"
                    },
                    {
                        text: "7、十二长生",
                        link: "/大六壬初级/7、十二长生"
                    },
                ]
            },
        ],
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
        toc: {
            level: [1, 2, 3, 4],
            shouldAllowNested: true,
        },
    },
    srcExclude: ["./src-tauri"],
});
