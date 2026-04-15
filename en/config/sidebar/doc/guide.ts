import { DefaultTheme } from 'vitepress'

export const guideSidebar: DefaultTheme.SidebarItem[] = [
    {
        text: 'Getting Started',
        items: [
            { text: 'Overview', link: '/guide/' },
            {
                text: 'Quick Install',
                items: [
                    { text: 'Web Version', link: '/guide/install/ui/start', },
                    { text: 'Worker Version', link: '/guide/install/ui/worker/start', },
                    { text: 'Node Version', link: '/guide/install/ui/node/start', },
                    { text: 'Mini Program Version', link: '/guide/install/ui/miniapp/start', },
                    { text: 'Cross-platform Core Package', link: '/guide/install/ui/core/' },
                ],
                collapsed: true
            },
            { text: 'Quick Update', link: '/guide/update' },
            {
                text: 'More Scenarios',
                items: [
                    { text: 'Multiple Product Forms', link: '/guide/install/' },
                    {
                        text: 'leafer-draw',
                        items: [
                            { text: 'Web Version', link: '/guide/install/draw/start', },
                            { text: 'Worker Version', link: '/guide/install/draw/worker/start', },
                            { text: 'Node Version', link: '/guide/install/draw/node/start', },
                            { text: 'Mini Program Version', link: '/guide/install/draw/miniapp/start', }
                        ],
                        collapsed: true
                    },
                    {
                        text: 'leafer-game',
                        items: [
                            { text: 'Web Version', link: '/guide/install/game/start', },
                            { text: 'Worker Version', link: '/guide/install/game/worker/start', },
                            { text: 'Node Version', link: '/guide/install/game/node/start', },
                            { text: 'Mini Program Version', link: '/guide/install/game/miniapp/start', }
                        ],
                        collapsed: true
                    },
                    {
                        text: 'leafer-editor',
                        items: [
                            { text: 'Web Version', link: '/guide/install/editor/start', },
                            { text: 'Worker Version', link: '/guide/install/editor/worker/start', },
                            { text: 'Node Version', link: '/guide/install/editor/node/start', },
                            { text: 'Mini Program Version', link: '/guide/install/editor/miniapp/start', }
                        ],
                        collapsed: true
                    },
                    {
                        text: 'leafer',
                        items: [
                            { text: 'Web Version', link: '/guide/install/leafer/start', },
                            { text: 'Worker Version', link: '/guide/install/leafer/worker/start', },
                            { text: 'Node Version', link: '/guide/install/leafer/node/start', },
                            { text: 'Mini Program Version', link: '/guide/install/leafer/miniapp/start', }
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
            { text: 'Quick Start', link: '#' }
        ],
    },
    {
        text: '🧬 Basics',
        items: [
            { text: 'Create Leafer Engine', link: '/guide/basic/leafer' },
            { text: 'Create Elements', link: '/guide/basic/display' },
            { text: 'Set Styles', link: '/guide/basic/style' },
            { text: 'Event Handling', link: '/guide/basic/event' },
            { text: 'Remove Elements', link: '/guide/basic/remove' },
            { text: 'Export Elements', link: '/guide/basic/export' },
            {
                text: 'Vue / React', collapsed: true, items: [
                    {
                        text: 'Frontend Environment',
                        items: [
                            { text: 'Vue', link: '/guide/framework/vue/' },
                            { text: 'React', link: '/guide/framework/react/' },
                            { text: 'HTML', link: '/guide/framework/html' },
                        ]
                    },
                    {
                        text: 'Server-side Rendering',
                        items: [
                            { text: 'Nuxt.js', link: '/guide/framework/nuxt/' },
                            { text: 'VitePress', link: '/guide/framework/vitepress/' },
                            { text: 'Next.js', link: '/guide/framework/next/' },
                        ]
                    },
                    {
                        text: 'Component-based Development (Community Provided)',
                        items: [
                            { text: 'leafer-vue', link: 'https://leafer-vue.netlify.app' },
                        ],
                    },
                ]
            },
        ],
    },
    {
        text: '🧲 Fun',
        items: [
            { text: 'Animation', link: '/guide/plugin/animate' },
            { text: 'Interactive State', link: '/guide/plugin/state' },
            { text: 'Motion Path', link: '/guide/plugin/motion-path' },
            { text: 'Robot Game Element', link: '/guide/plugin/robot' },
            { text: 'Auto Layout', link: '/guide/plugin/flow' },
            { text: 'Graphic Editor', link: '/guide/plugin/editor' },
        ],
    },
    {
        text: '😎 Advanced',
        items: [
            { text: 'Create App Application', link: '/guide/advanced/app' },
            { text: 'Zoom & Pan View', link: '/guide/advanced/viewport' },
            { text: 'Coordinate Transformation', link: '/guide/advanced/coordinate' },
            { text: 'Get Bounding Box', link: '/guide/advanced/bounds' },
            { text: 'Partial Rendering', link: '/guide/advanced/partRender' },
            {
                text: 'Lifecycle',
                items: [
                    { text: 'Element Lifecycle', link: '/guide/life/ui.md' },
                    { text: 'Engine Lifecycle', link: '/guide/life/leafer' },
                    { text: 'Render Lifecycle', link: '/guide/life/render.md' },
                ],
                collapsed: true
            },
            {
                text: 'App & Engine Configuration', items: [
                    { text: 'Base', link: '/reference/config/app/base.md' },
                    { text: 'Viewport Type', link: '/reference/config/app/type.md' },
                    { text: 'Canvas', link: '/reference/config/app/canvas.md' },
                    { text: 'Pointer Interaction', link: '/reference/config/app/pointer.md' },
                    { text: 'Touch Interaction', link: '/reference/config/app/touch.md' },
                    { text: 'Multi-touch', link: '/reference/config/app/multiTouch.md' },
                    { text: 'Wheel Interaction', link: '/reference/config/app/wheel.md' },
                    { text: 'Pan View', link: '/reference/config/app/move.md' },
                    { text: 'Zoom View', link: '/reference/config/app/zoom.md' },
                ],
                collapsed: true
            },
        ],
    },
]