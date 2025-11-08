import { defineConfig } from "vitepress";
import { withPwa } from '@vite-pwa/vitepress'

// https://vitepress.dev/reference/site-config
export default withPwa(defineConfig({
    base: "/",
    lang: "zh-CN",
    title: "CheeKhan",
    description: "cheekhan,占卜",
    themeConfig: {
        // 导航栏
        logo: "/icon.jpg",
        nav: [
            { text: "决策稿", link: "/about" },
        ],
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
            {
                text: "壬归精粹",
                items: [
                    {
                        text: '断课总结',
                        link: "/壬归精粹/0、断课总结",
                    },
                    {
                        text: '四课',
                        link: "/壬归精粹/1、四课",
                    },
                    {
                        text: '发用',
                        link: "/壬归精粹/2、发用",
                    },
                    {
                        text: '三传',
                        link: "/壬归精粹/3、三传",
                    },
                    {
                        text: '天官',
                        link: "/壬归精粹/4、天官",
                    },
                    {
                        text: '八煞',
                        link: "/壬归精粹/5、八煞",
                    },
                    {
                        text: '求财占',
                        link: "/壬归精粹/6、求财占",
                    },
                    {
                        text: '谋望占',
                        link: "/壬归精粹/7、谋望占",
                    },
                ]
            },
            {
                text: "案例",
                items: [
                    {
                        text: '自占',
                        items: []
                    },
                    {
                        text: '壬占汇选',
                        items: []
                    }
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
    pwa: {
        // PWA 配置区，重点来了！
        base: '/',
        scope: '/',
        includeAssets: ['favicon.ico', 'logo.jpg', 'images/**/*'], // 告诉插件，这些静态资源要缓存起来
        registerType: 'prompt', // 有更新别偷偷刷新，得问问我（用户）同不同意
        injectRegister: 'auto',
        // 开发环境专用，关掉烦人的警告
        devOptions: {
            enabled: true,
            suppressWarnings: true, // 开发时警告太多，眼花，先屏蔽
            navigateFallback: '/',
            type: 'module'
        },
        // Service Worker 配置，缓存策略的灵魂
        workbox: {
            globPatterns: ['**/*.{js,css,html,ico,png,jpg,jpeg,gif,svg,woff2}'], // 需要缓存哪些类型的文件
            cleanupOutdatedCaches: true, // 老缓存？清理掉！别占地方
            clientsClaim: true, // 新的Service Worker来了，立刻接管页面
            skipWaiting: true, // 新SW别等了，赶紧干活
            maximumFileSizeToCacheInBytes: 10 * 1024 * 1024, // 单个文件最大10MB，再大就不缓存了

            // 针对不同资源，用不同缓存策略（这里踩过坑）
            runtimeCaching: [
                // Google Fonts这类外部字体：缓存优先，存久点（一年），反正不常变
                {
                    urlPattern: /^https:\/\/fonts\.googleapis\.com\/.*/i,
                    handler: 'CacheFirst',
                    options: {
                        cacheName: 'google-fonts-cache',
                        expiration: {
                            maxEntries: 10,
                            maxAgeSeconds: 60 * 60 * 24 * 365
                        }
                    }
                },
                // 图片：也缓存优先，但别存太久（30天），万一我换了图呢？
                {
                    urlPattern: /\.(?:png|jpg|jpeg|svg|gif)$/,
                    handler: 'CacheFirst',
                    options: {
                        cacheName: 'images-cache',
                        expiration: {
                            maxEntries: 100,
                            maxAgeSeconds: 60 * 60 * 24 * 30
                        }
                    }
                }
                // 注意：JS/CSS/HTML Workbox默认会处理，通常用 StaleWhileRevalidate 策略（缓存优先，后台更新）
            ]
        },
        manifest: {
            id: "cheekhan",
            name: '决策稿', // 完整名
            short_name: '决策稿', // 桌面图标下面显示的短名，太长显示不全
            description: 'cheekhan 的决策稿',
            theme_color: '#ffffff', // 主题色，影响状态栏、启动画面背景
            background_color: '#ffffff', // 启动画面背景色
            display: 'standalone', // 独立显示模式（全屏，无浏览器UI） 
            start_url: '/', // 点开图标从哪开始
            icons: [ // 图标！重中之重！
                {
                    src: '/logo-192.png',
                    sizes: '192x192',
                    type: 'image/png'
                },
                {
                    src: '/logo-512.png',
                    sizes: '512x512',
                    type: 'image/png'
                },
            ]
        }
    }
}))
