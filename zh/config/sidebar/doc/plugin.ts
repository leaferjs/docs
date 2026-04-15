import { DefaultTheme } from 'vitepress'

export const pluginSidebar: DefaultTheme.SidebarItem[] = [
    {
        text: '',
        items: [
            { text: '&nbsp;' },
            { text: '插件', link: '#' }
        ],
    },
    {
        text: '🎨 图形编辑器',
        items: [
            { text: 'Editor', link: '/plugin/in/editor/' },
            {
                text: '编辑器属性', items: [
                    { text: '状态', link: '/plugin/in/editor/Editor/state.md' },
                    { text: '列表', link: '/plugin/in/editor/Editor/list.md' },
                    { text: '显示元素', link: '/plugin/in/editor/Editor/display.md' },
                ],
                collapsed: true
            },
            {
                text: '编辑器功能', items: [
                    { text: '选择', link: '/plugin/in/editor/Editor/select.md' },
                    { text: '编组', link: '/plugin/in/editor/Editor/group.md' },
                    { text: '内部编辑', link: '/plugin/in/editor/Editor/innerEditor.md' },
                    { text: '锁定', link: '/plugin/in/editor/Editor/lock.md' },
                    { text: '层级', link: '/plugin/in/editor/Editor/zIndex.md' },
                    { text: '更新', link: '/plugin/in/editor/Editor/update.md' },
                    { text: '变换', link: '/plugin/in/editor/Editor/transform.md' },
                    { text: '快捷键', link: '/plugin/in/editor/Editor/shortcut.md' },
                    { text: '历史记录', link: '/plugin/in/editor/Editor/history.md' }
                ],
                collapsed: true
            },
            {
                text: '编辑器配置', items: [
                    { text: '基础', link: '/plugin/in/editor/config/base.md' },
                    { text: '事件', link: '/plugin/in/editor/config/event.md' },
                    { text: '样式', link: '/plugin/in/editor/config/style.md' },
                    { text: '按钮组', link: '/plugin/in/editor/config/buttons.md' },
                    { text: '光标', link: '/plugin/in/editor/config/cursor.md' },
                    { text: '选择', link: '/plugin/in/editor/config/select.md' },
                    { text: '控制', link: '/plugin/in/editor/config/control.md' },
                    { text: '启用', link: '/plugin/in/editor/config/enable.md' },
                    { text: '内部编辑器', link: '/plugin/in/editor/config/innerEditor.md' },
                ],
                collapsed: true
            },
            {
                text: '编辑器事件',
                items: [
                    { text: 'EditorEvent', link: '/plugin/in/editor/event/EditorEvent.md' },
                    { text: 'EditorMoveEvent', link: '/plugin/in/editor/event/EditorMoveEvent.md' },
                    { text: 'EditorScaleEvent', link: '/plugin/in/editor/event/EditorScaleEvent.md' },
                    { text: 'EditorRotateEvent', link: '/plugin/in/editor/event/EditorRotateEvent.md' },
                    { text: 'EditorSkewEvent', link: '/plugin/in/editor/event/EditorSkewEvent.md' },
                    { text: 'EditorGroupEvent', link: '/plugin/in/editor/event/EditorGroupEvent.md' },
                    { text: 'InnerEditorEvent', link: '/plugin/in/editor/event/InnerEditorEvent.md' },
                ],
                collapsed: true
            },
            {
                text: '编辑工具',
                items: [
                    { text: 'EditTool', link: '/plugin/in/editor/EditTool.md' },
                    { text: '注册', link: '/plugin/in/editor/editOuter/register.md' },
                    { text: '控制点', link: '/plugin/in/editor/editOuter/load.md' },
                    { text: '使用', link: '/plugin/in/editor/editOuter/use.md' }
                ],
                collapsed: true
            },
            {
                text: '内部编辑器',
                items: [
                    { text: 'InnerEditor', link: '/plugin/in/editor/InnerEditor.md' },
                    { text: '注册', link: '/plugin/in/editor/editInner/register.md' },
                    { text: '控制点', link: '/plugin/in/editor/editInner/load.md' },
                    { text: '使用', link: '/plugin/in/editor/editInner/use.md' }
                ],
                collapsed: true
            }

        ]
    },
    {
        text: '🫧 自动布局', items: [
            { text: 'Flow', link: '/plugin/in/flow/' },
            {
                text: '布局属性', items: [
                    { text: '布局方向', link: '/plugin/in/flow/Flow/flow.md' },
                    { text: '自动换行', link: '/plugin/in/flow/Flow/flowWrap.md' },
                    { text: '对齐', link: '/plugin/in/flow/Flow/flowAlign.md' },
                    { text: '间距', link: '/plugin/in/flow/Flow/gap.md' },
                    { text: '内边距', link: '/plugin/in/flow/Flow/padding.md' },
                    { text: '盒类型', link: '/plugin/in/flow/Flow/itemBox.md' },
                ],
                collapsed: true
            },
            {
                text: '子元素属性', items: [
                    { text: '加入布局', link: '/plugin/in/flow/Flow/inFlow.md' },
                    { text: '自动宽度', link: '/plugin/in/flow/Flow/autoWidth.md' },
                    { text: '自动高度', link: '/plugin/in/flow/Flow/autoHeight.md' },
                    { text: '限制宽度', link: '/plugin/in/flow/Flow/widthRange.md' },
                    { text: '限制高度', link: '/plugin/in/flow/Flow/heightRange.md' },
                    { text: '锁定比例', link: '/plugin/in/flow/Flow/lockRatio.md' },
                ],
                collapsed: true
            },
        ]
    },
    {
        text: '🐆 动画', items: [
            { text: 'Animate', link: '/plugin/in/animate/' },
            {
                text: '动画选项', items: [
                    { text: '缓动方式', link: '/plugin/in/animate/options/easing.md' },
                    { text: '延迟', link: '/plugin/in/animate/options/delay.md' },
                    { text: '时长', link: '/plugin/in/animate/options/duration.md' },
                    { text: '速度', link: '/plugin/in/animate/options/speed.md' },
                    { text: '反向', link: '/plugin/in/animate/options/reverse.md' },
                    { text: '循环', link: '/plugin/in/animate/options/loop.md' },
                    { text: '结束样式', link: '/plugin/in/animate/options/ending.md' },
                    { text: '加入关键帧', link: '/plugin/in/animate/options/join.md' },
                    { text: '自动播放', link: '/plugin/in/animate/options/autoplay.md' },
                    { text: '过渡属性', link: '/plugin/in/animate/options/attrs.md' },
                    { text: '事件', link: '/plugin/in/animate/options/event.md' },
                ],
                collapsed: true
            },
            {
                text: '动画属性', items: [
                    { text: '状态', link: '/plugin/in/animate/Animate/state.md' },
                    { text: '计时', link: '/plugin/in/animate/Animate/time.md' },
                    { text: '样式', link: '/plugin/in/animate/Animate/style.md' },
                ],
                collapsed: true
            },
            {
                text: '动画功能', items: [
                    { text: '播放', link: '/plugin/in/animate/Animate/play.md' },
                    { text: '暂停', link: '/plugin/in/animate/Animate/pause.md' },
                    { text: '停止', link: '/plugin/in/animate/Animate/stop.md' },
                    { text: '定位', link: '/plugin/in/animate/Animate/seek.md' },
                    { text: 'kill', link: '/plugin/in/animate/Animate/kill.md' },
                    { text: '销毁', link: '/plugin/in/animate/Animate/destroy.md' },
                ],
                collapsed: true
            },
            {
                text: '动画事件', items: [
                    { text: 'AnimateEvent', link: '/plugin/in/animate/event/AnimateEvent.md' },
                ],
                collapsed: true
            },
        ]
    },
    {
        text: '🫐 官方插件',
        items: [
            {
                text: '视口', link: '/plugin/in/viewport/'
            },
            {
                text: '视图控制', link: '/plugin/in/view/'
            },
            {
                text: '滚动条', link: '/plugin/in/scroll/'
            },
            {
                text: '箭头', link: '/plugin/in/arrow/'
            },
            {
                text: 'HTML', link: '/plugin/in/html/'
            },
            {
                text: '文本编辑', link: '/plugin/in/text-editor/'
            },
            {
                text: '运动路径', link: '/plugin/in/motion-path/'
            },
            {
                text: 'Robot', link: '/plugin/in/robot/'
            },
            {
                text: '交互状态', link: '/plugin/in/state/'
            },
            {
                text: '查找元素', link: '/plugin/in/find/'
            },
            {
                text: '导出元素', link: '/plugin/in/export/'
            },
            {
                text: '滤镜', link: '/plugin/in/filter/'
            },
            {
                text: 'color', link: '/plugin/in/color/'
            },
            {
                text: 'resize', link: '/plugin/in/resize/'
            },
            {
                text: '突出显示元素', link: '/plugin/in/bright/'
            },
            {
                text: 'scale-fixed', link: '/plugin/in/scale-fixed/'
            },

            {
                text: 'box元素', link: '/plugin/in/box/'
            },

            {
                text: '路径圆角', link: '/plugin/in/corner/'
            },

        ],
    },

    {
        text: '🍇 社区免费插件',
        items: [
            { text: 'echarts插件', link: 'https://www.npmjs.com/package/leafer-x-echarts' },
            { text: '无限点阵插件', link: 'https://www.npmjs.com/package/leafer-x-dotwuxian' },
            { text: '视频播放 player', link: 'https://www.npmjs.com/package/leafer-canvas-player' },
            { text: '连线插件(加强版)', link: 'https://www.npmjs.com/package/leafer-connector' },
            { text: '特效文字', link: 'https://www.npmjs.com/package/leafer-x-effect-text' },
            { text: 'leafer-unified', link: 'https://www.npmjs.com/package/leafer-unified' },
            { text: '折线编辑', link: 'https://www.npmjs.com/package/leafer-x-polyline-editor' },
            { text: '吸附插件(加强版)', link: 'https://www.npmjs.com/package/leafer-x-easy-snap' },
            { text: '简易版图片裁剪编辑器', link: 'https://www.npmjs.com/package/leafer-x-clip-resize-inner-editor' },
            { text: '骨骼动画', link: 'https://www.npmjs.com/package/leafer-x-spine' },
            { text: 'path-editor', link: 'https://www.npmjs.com/package/leafer-x-path-editor' },
            { text: '吸附插件', link: 'https://www.npmjs.com/package/leafer-x-snap' },

            { text: 'leafer-vue', link: 'https://leafer-vue.netlify.app' },
            { text: 'toolbar', link: 'https://www.npmjs.com/package/leafer-x-edit-toolbar' },
            { text: '点阵背景', link: 'https://www.npmjs.com/package/leafer-x-dot-matrix' },
            { text: '连线', link: 'https://www.npmjs.com/package/leafer-x-connector' },
            { text: '标尺线', link: 'https://www.npmjs.com/package/leafer-x-ruler' },
            { text: 'Tooltip (dom)', link: 'https://www.npmjs.com/package/leafer-x-tooltip' },
            { text: 'Tooltip (canvas)', link: 'https://www.npmjs.com/package/leafer-x-tooltip-canvas' },
        ],
    },

    {
        text: '🍇 社区免费AI插件',
        items: [
            { text: 'leafer-x-design-system', link: 'https://www.npmjs.com/package/leafer-x-design-system' },
        ],
    },

    {
        text: '🍇 社区付费插件',
        items: [
            { text: 'PxGrow 解决方案', link: 'https://www.pxgrow.com' },
            { text: '富文本编辑器', link: 'https://chenyomi.github.io/leafer-htmltext-edit-website/' },
            { text: '吸附线插件', link: 'http://afdian.com/item/d2f62a74b13611ef99b75254001e7c00' },
        ],
    }
]
