import {defineConfig} from "vitepress";

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
            {text: "首页", link: "/"},
            {text: "指南", link: "/阴阳五行/index"},
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
                text: "阴阳五行",
                items: [
                    {
                        text: "介绍",
                        link: "/阴阳五行/index"
                    },
                    {
                        text: "阴阳",
                        link: "/阴阳五行/阴阳"
                    },
                    {
                        text: "五行",
                        link: "/阴阳五行/五行"
                    },
                    {
                        text: "取象",
                        link: "/阴阳五行/取象"
                    }
                ]
            },
            {
                text: "天干地支",
                items: [
                    {
                        text: '介绍',
                        link: "/天干地支/index",
                    },
                    {
                        text: "天干",
                        link: "/天干地支/天干"
                    },
                    {
                        text: "地支",
                        link: "/天干地支/地支"
                    },
                    {
                        text: "干支纪年",
                        link: "/天干地支/干支纪年"
                    },
                    {
                        text: "四时五气",
                        link: "/天干地支/四时五气"
                    },
                    {
                        text: "十二长生",
                        link: "/天干地支/十二长生"
                    },
                ]
            },
            {
                text: "大六壬",
                items: [
                    {
                        text: "介绍",
                        link: "/大六壬/index"
                    },
                    {
                        text: "起课",
                        link: "/大六壬/起课"
                    },
                    {
                        text: "排传",
                        link: "/大六壬/排传"
                    },
                    {
                        text: "神煞",
                        link: "/大六壬/神煞"
                    },
                    {
                        text: "十二天神",
                        link: "/大六壬/十二天神"
                    },
                    {
                        text: "十二天将",
                        link: "/大六壬/十二天将"
                    },
                ]
            },
            {
                text: '子平八字',
                items: [
                    {
                        text: '介绍',
                        link: "/子平八字/index",
                    },
                ]
            },
            {
                text: "六爻",
                items: [
                    {
                        text: '介绍',
                        link: "/六爻/index",
                    },
                ]
            }
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
