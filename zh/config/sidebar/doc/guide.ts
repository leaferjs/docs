import { DefaultTheme } from 'vitepress'

export const guideSidebar: DefaultTheme.SidebarItem[] = [
    {
        text: '快速上手',
        items: [
            { text: '概览', link: '/guide/' },
            {
                text: '快速安装',
                items: [
                    { text: 'web 版', link: '/guide/install/ui/start', },
                    { text: 'worker 版', link: '/guide/install/ui/worker/start', },
                    { text: 'node 版', link: '/guide/install/ui/node/start', },
                    { text: '小程序版', link: '/guide/install/ui/miniapp/start', },
                    { text: '跨平台核心包', link: '/guide/install/ui/core/' },
                ],
                collapsed: true
            },
            { text: '快速更新', link: '/guide/update' },
            {
                text: '更多场景',
                items: [
                    { text: '多产品形态', link: '/guide/install/' },
                    {
                        text: 'leafer-draw',
                        items: [
                            { text: 'web 版', link: '/guide/install/draw/start', },
                            { text: 'worker 版', link: '/guide/install/draw/worker/start', },
                            { text: 'node 版', link: '/guide/install/draw/node/start', },
                            { text: '小程序版', link: '/guide/install/draw/miniapp/start', }
                        ],
                        collapsed: true
                    },
                    {
                        text: 'leafer-game',
                        items: [
                            { text: 'web 版', link: '/guide/install/game/start', },
                            { text: 'worker 版', link: '/guide/install/game/worker/start', },
                            { text: 'node 版', link: '/guide/install/game/node/start', },
                            { text: '小程序版', link: '/guide/install/game/miniapp/start', }
                        ],
                        collapsed: true
                    },
                    {
                        text: 'leafer-editor',
                        items: [
                            { text: 'web 版', link: '/guide/install/editor/start', },
                            { text: 'worker 版', link: '/guide/install/editor/worker/start', },
                            { text: 'node 版', link: '/guide/install/editor/node/start', },
                            { text: '小程序版', link: '/guide/install/editor/miniapp/start', }
                        ],
                        collapsed: true
                    },
                    {
                        text: 'leafer',
                        items: [
                            { text: 'web 版', link: '/guide/install/leafer/start', },
                            { text: 'worker 版', link: '/guide/install/leafer/worker/start', },
                            { text: 'node 版', link: '/guide/install/leafer/node/start', },
                            { text: '小程序版', link: '/guide/install/leafer/miniapp/start', }
                        ],
                        collapsed: true
                    }
                ],
                collapsed: true
            },
        ],
    },

    {
        text: '',
        items: [
            { text: '&nbsp;' },
            { text: '快速入门', link: '#' }
        ],
    },
    {
        text: '🧬 基础',
        items: [
            { text: '创建 Leafer 引擎', link: '/guide/basic/leafer' },
            { text: '创建元素', link: '/guide/basic/display' },
            { text: '设置样式', link: '/guide/basic/style' },
            { text: '事件处理', link: '/guide/basic/event' },
            { text: '移除元素', link: '/guide/basic/remove' },
            { text: '导出元素', link: '/guide/basic/export' },
            {
                text: 'Vue / React', collapsed: true, items: [
                    {
                        text: '前端环境',
                        items: [
                            { text: 'Vue', link: '/guide/framework/vue/' },
                            { text: 'React', link: '/guide/framework/react/' },
                            { text: 'HTML', link: '/guide/framework/html' },
                        ]
                    },
                    {
                        text: '服务端渲染',
                        items: [
                            { text: 'Nuxt.js', link: '/guide/framework/nuxt/' },
                            { text: 'VitePress', link: '/guide/framework/vitepress/' },
                            { text: 'Next.js', link: '/guide/framework/next/' },
                        ]
                    },
                    {
                        text: '组件式开发（社区提供）',
                        items: [
                            { text: 'leafer-vue', link: 'https://leafer-vue.netlify.app' },
                        ],
                    },
                ]
            },
        ],
    },
    {
        text: '🧲 好玩',
        items: [
            { text: '动画', link: '/guide/plugin/animate' },
            { text: '交互状态', link: '/guide/plugin/state' },
            { text: '运动路径', link: '/guide/plugin/motion-path' },
            { text: 'Robot 游戏元素', link: '/guide/plugin/robot' },
            { text: '自动布局', link: '/guide/plugin/flow' },
            { text: '图形编辑器', link: '/guide/plugin/editor' },
        ],
    },
    {
        text: '😎 进阶',
        items: [
            { text: '创建 App 应用', link: '/guide/advanced/app' },
            { text: '缩放平移视图', link: '/guide/advanced/viewport' },
            { text: '转换坐标', link: '/guide/advanced/coordinate' },
            { text: '获取包围盒', link: '/guide/advanced/bounds' },
            { text: '局部渲染', link: '/guide/advanced/partRender' },
            {
                text: '生命周期',
                items: [
                    { text: '元素生命周期', link: '/guide/life/ui.md' },
                    { text: '引擎生命周期', link: '/guide/life/leafer' },
                    { text: '渲染生命周期', link: '/guide/life/render.md' },
                ],
                collapsed: true
            },
            {
                text: '应用与引擎配置', items: [
                    { text: '基础', link: '/reference/config/app/base.md' },
                    { text: '视口类型', link: '/reference/config/app/type.md' },
                    { text: '画布', link: '/reference/config/app/canvas.md' },
                    { text: '点按操作', link: '/reference/config/app/pointer.md' },
                    { text: '触屏操作', link: '/reference/config/app/touch.md' },
                    { text: '多点触屏', link: '/reference/config/app/multiTouch.md' },
                    { text: '滚轮操作', link: '/reference/config/app/wheel.md' },
                    { text: '平移视图', link: '/reference/config/app/move.md' },
                    { text: '缩放视图', link: '/reference/config/app/zoom.md' },
                ],
                collapsed: true
            },
        ],
    },
]
