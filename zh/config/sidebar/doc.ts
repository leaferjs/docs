import { DefaultTheme } from 'vitepress'

export const docSidebar: DefaultTheme.SidebarItem[] = [
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
    {
        text: '',
        items: [
            { text: '&nbsp;' },
            { text: '元素参考', link: '#' }
        ],
    },
    {
        text: '🍉 应用与引擎',
        items: [
            { text: 'App', link: '/reference/display/App' },
            { text: 'Leafer', link: '/reference/display/Leafer' },
        ],
    },
    {
        text: '🥥 组元素',
        items: [
            { text: 'Group', link: '/reference/display/Group' },
            { text: 'Box', link: '/reference/display/Box' },
            { text: 'Frame', link: '/reference/display/Frame' }
        ],
    },
    {
        text: '🍊 元素',
        items: [
            { text: 'Rect', link: '/reference/display/Rect' },
            { text: 'Ellipse', link: '/reference/display/Ellipse' },
            { text: 'Line', link: '/reference/display/Line' },
            { text: 'Polygon', link: '/reference/display/Polygon' },
            { text: 'Star', link: '/reference/display/Star' },
            { text: 'Path', link: '/reference/display/Path' },
            { text: 'Pen', link: '/reference/display/Pen' },
            { text: 'Image', link: '/reference/display/Image' },
            { text: 'SVG', link: '/reference/display/SVG' },
            { text: 'Canvas', link: '/reference/display/Canvas' },
            { text: 'Text', link: '/reference/display/Text' },
            { text: 'UI', link: '/reference/display/UI' },
        ],
    },
    {
        text: '🥝 自定义元素',
        items: [
            {
                text: '基础',
                items: [
                    { text: '注册元素', link: '/reference/display/custom/base/register.md' },
                    { text: '注册数据', link: '/reference/display/custom/base/data.md' },
                    { text: '添加属性', link: '/reference/display/custom/base/attr.md' },
                    { text: '添加方法', link: '/reference/display/custom/base/method.md' },
                ],
                collapsed: true
            },
            {
                text: '高级',
                items: [
                    { text: '继承元素', link: '/reference/display/custom/extends.md' },
                    { text: '绘制路径', link: '/reference/display/custom/path.md' },
                    { text: 'context', link: '/reference/display/custom/context.md' }
                ],
                collapsed: true
            },
        ],
    },
    {
        text: '',
        items: [
            { text: '&nbsp;' },
            { text: '元素通用功能', link: '#' }
        ],
    },
    {
        text: '🎞️  数据',
        items: [
            {
                text: 'id /  name',
                items: [
                    { text: 'id', link: '/reference/UI/id' },
                    { text: 'tag', link: '/reference/UI/tag' },
                    { text: 'name', link: '/reference/UI/name' },
                    { text: 'className', link: '/reference/UI/className' },
                    { text: 'innerId', link: '/reference/UI/innerId' },
                    { text: 'innerName', link: '/reference/UI/innerName' },
                ],
                collapsed: true
            },
            {
                text: 'parent / leafer',
                items: [
                    { text: 'parent', link: '/reference/UI/parent' },
                    { text: 'leafer', link: '/reference/UI/leafer' },
                ],
                collapsed: true
            },
            {
                text: '数据 / 克隆',
                items: [
                    { text: 'data', link: '/reference/UI/data' },
                    { text: 'proxyData', link: '/reference/UI/proxy' },
                    { text: 'clone()', link: '/reference/UI/clone' },
                ],
                collapsed: true
            },
            {
                text: '路径数据',
                items: [
                    { text: 'getPath()', link: '/reference/UI/getPath.md' },
                    { text: 'getPathString()', link: '/reference/UI/getPathString.md' },
                    { text: 'path', link: '/reference/UI/path' },
                ],
                collapsed: true
            },
            {
                text: '导入导出',
                items: [
                    { text: 'export()', link: '/reference/UI/export.md' },
                    { text: 'toJSON()', link: '/reference/UI/json.md' }
                ],
                collapsed: true
            },

            {
                text: '移除 / 销毁',
                items: [
                    { text: 'remove()', link: '/reference/UI/remove' },
                    { text: 'destroy()', link: '/reference/UI/destroy' },
                ],
                collapsed: true
            },

        ],
    },

    {
        text: '📐 布局',
        items: [
            {
                text: '位置 / 缩放 / 旋转',
                items: [
                    { text: 'position', link: '/reference/UI/position' },
                    { text: 'size', link: '/reference/UI/size' },
                    { text: 'scale', link: '/reference/UI/scale' },
                    { text: 'scaleFixed', link: '/reference/UI/scaleFixed' },
                    { text: 'flip()', link: '/reference/UI/flip' },
                    { text: 'rotation', link: '/reference/UI/rotation' },
                    { text: 'skew', link: '/reference/UI/skew' },
                ],
                collapsed: true
            },
            {
                text: '偏移 / resize',
                items: [
                    { text: 'offset', link: '/reference/UI/offset' },
                    { text: 'resize', link: '/reference/UI/resize' }
                ],
                collapsed: true
            },
            {
                text: '围绕中心',
                items: [
                    { text: 'origin', link: '/reference/UI/origin' },
                    { text: 'around', link: '/reference/UI/around' }
                ],
                collapsed: true
            },
            {
                text: '包围盒 / 变换',
                items: [
                    { text: 'bounds', link: '/reference/UI/bounds' },
                    { text: 'transform', link: '/reference/UI/transform' }
                ],
                collapsed: true
            },
            {
                text: '转换坐标',
                items: [
                    { text: '转换坐标', link: '/reference/UI/point/' },
                    { text: '快速转换', link: '/reference/UI/point/high' }
                ],
                collapsed: true
            },
            {
                text: '层叠 / 放置',
                items: [
                    { text: 'zIndex', link: '/reference/UI/zIndex' },
                    { text: 'dropTo()', link: '/reference/UI/dropTo' }
                ],
                collapsed: true
            },

        ],
    },

    {
        text: '🏼  外观',
        items: [
            {
                text: '透明 / 隐藏',
                items: [
                    { text: 'opacity', link: '/reference/UI/opacity' },
                    { text: 'visible', link: '/reference/UI/visible' },
                ],
                collapsed: true
            },
            {
                text: '填充 / 描边',
                items: [
                    { text: 'fill', link: '/reference/UI/fill' },
                    { text: 'stroke', link: '/reference/UI/stroke' }
                ],
                collapsed: true
            },

            {
                text: '渐变 / 图像',
                items: [
                    { text: 'linear', link: '/reference/UI/paint/linear' },
                    { text: 'radial', link: '/reference/UI/paint/radial' },
                    { text: 'angular', link: '/reference/UI/paint/angular' },
                    { text: 'solid', link: '/reference/UI/paint/solid' },
                    { text: 'image', link: '/reference/UI/paint/image' }
                ],
                collapsed: true
            },
            {
                text: '内外阴影',
                items: [
                    { text: 'shadow', link: '/reference/UI/shadow' },
                    { text: 'innerShadow', link: '/reference/UI/innerShadow' },
                ],
                collapsed: true
            },

            // {
            //     text: '模糊',
            //     items: [
            //         { text: 'blur', link: '/reference/UI/blur' },
            //         { text: 'backgroundBlur', link: '/reference/UI/backgroundBlur' }
            //     ],
            //     collapsed: true
            // },

            {
                text: '淡化 / 突出',
                items: [
                    { text: 'dim', link: '/reference/UI/dim' },
                    { text: 'bright', link: '/reference/UI/bright' },
                ],
                collapsed: true
            },
            {
                text: '裁剪 / 擦除',
                items: [
                    { text: 'clip', link: '/reference/UI/clip' },
                    { text: 'mask', link: '/reference/UI/mask' },
                    { text: 'eraser', link: '/reference/UI/eraser' }
                ],
                collapsed: true
            },
            {
                text: '混合模式',
                items: [
                    { text: 'blendMode', link: '/reference/UI/blendMode' }
                ],
                collapsed: true
            },
        ],
    },

    {
        text: '🖱  交互',
        items: [
            {
                text: '可交互性',
                items: [
                    { text: 'hittable', link: '/reference/UI/hit' },
                    { text: 'hitChildren', link: '/reference/UI/hitChildren' },
                    { text: 'hitSelf', link: '/reference/UI/hitSelf' },
                    { text: 'hitFill', link: '/reference/UI/hitFill' },
                    { text: 'hitStroke', link: '/reference/UI/hitStroke' },

                ],
                collapsed: true
            },
            {
                text: '编辑 / 拖拽',
                items: [
                    { text: 'editable', link: '/reference/UI/editable' },
                    { text: 'draggable', link: '/reference/UI/draggable' },
                ],
                collapsed: true
            },
            {
                text: '光标样式',
                items: [
                    { text: 'cursor', link: '/reference/UI/cursor' },
                ],
                collapsed: true
            },
            {
                text: '交互状态',
                items: [
                    { text: 'state', link: '/reference/UI/state/state.md' },
                    { text: 'hover', link: '/reference/UI/state/hover.md' },
                    { text: 'press', link: '/reference/UI/state/press.md' },
                    { text: 'focus', link: '/reference/UI/state/focus.md' },
                    { text: 'selected', link: '/reference/UI/state/selected.md' },
                    { text: 'disabled', link: '/reference/UI/state/disabled.md' },
                ],
                collapsed: true
            },

            {
                text: '事件处理',
                items: [
                    { text: 'on() / once()', link: '/reference/UI/on' },
                    { text: 'off()', link: '/reference/UI/off' },
                    { text: 'emit()', link: '/reference/UI/emit' },
                    { text: '命名', link: '/reference/event/name' },
                    { text: '捕获/冒泡', link: '/reference/event/flow' },
                    { text: '模拟交互', link: '/reference/event/simulation' },
                ],
                collapsed: true
            },
        ],
    },

    {
        text: '🐆  动画',
        items: [
            {
                text: '动画',
                items: [
                    { text: 'animation', link: '/reference/UI/animation' },
                    { text: 'animate()', link: '/reference/UI/animate' },
                ],
                collapsed: true
            },
            {
                text: '过渡',
                items: [
                    { text: 'transition', link: '/reference/UI/transition' },
                ],
                collapsed: true
            },

            {
                text: '运动路径',
                items: [
                    { text: 'motionPath', link: '/reference/UI/motionPath' },
                    { text: 'motion', link: '/reference/UI/motion' },
                    { text: 'getMotionTotal()', link: '/reference/UI/getMotionTotal' },
                    { text: 'getMotionPoint()', link: '/reference/UI/getMotionPoint' },
                ],
                collapsed: true
            },
        ]
    },

    {
        text: '🌴 高级',
        items: [
            {
                text: '限制拖动范围',
                items: [
                    { text: 'dragBounds', link: '/reference/UI/dragBounds.md' },
                ],
                collapsed: true
            },
            {
                text: '强制渲染',
                items: [
                    { text: 'forceUpdate()', link: '/reference/UI/forceUpdate.md' },
                    { text: 'forceRender()', link: '/reference/UI/forceRender.md' },
                    { text: 'nextRender()', link: '/reference/UI/nextRender.md' },
                ],
                collapsed: true
            },
            {
                text: '查找拾取',
                items: [
                    { text: 'find()', link: '/reference/UI/find.md' },
                    { text: 'findOne()', link: '/reference/UI/findOne.md' },
                    { text: 'pick()', link: '/reference/UI/pick.md' },
                ],
                collapsed: true
            },

            {
                text: '自定义属性',
                items: [
                    { text: 'changeAttr()', link: '/reference/UI/custom/changeAttr.md' },
                    { text: 'addAttr()', link: '/reference/UI/custom/addAttr.md' }
                ],
                collapsed: true
            }
        ],
    },

    {
        text: '',
        items: [
            { text: '&nbsp;' },
            { text: '常用功能', link: '#' }
        ],
    },

    {
        text: '🌲 事件',
        items: [
            {
                text: '交互事件',
                items: [
                    { text: 'PointerEvent', link: '/reference/event/ui/Pointer' },
                    { text: 'DragEvent', link: '/reference/event/ui/Drag' },
                    { text: 'DropEvent', link: '/reference/event/ui/Drop' },
                    { text: 'SwipeEvent', link: '/reference/event/ui/Swipe' },
                    { text: 'MoveEvent', link: '/reference/event/ui/Move' },
                    { text: 'ZoomEvent', link: '/reference/event/ui/Zoom' },
                    { text: 'RotateEvent', link: '/reference/event/ui/Rotate' },
                    { text: 'KeyEvent', link: '/reference/event/ui/Key' }
                ],
                collapsed: true
            },
            {
                text: '元素事件',
                items: [
                    { text: 'ImageEvent', link: '/reference/event/basic/Image' },
                    { text: 'ChildEvent', link: '/reference/event/basic/Child' },
                    { text: 'PropertyEvent', link: '/reference/event/basic/Property' },
                    { text: 'BoundsEvent', link: '/reference/event/basic/Bounds.md' }
                ],
                collapsed: true
            },
            {
                text: '平台事件',
                items: [
                    { text: 'LeaferEvent', link: '/reference/event/basic/Leafer' },
                    { text: 'ResizeEvent', link: '/reference/event/basic/Resize' },
                    { text: 'RenderEvent', link: '/reference/event/basic/Render' },
                    { text: 'LayoutEvent', link: '/reference/event/basic/Layout' },
                    { text: 'WatchEvent', link: '/reference/event/basic/Watch' },
                ],
                collapsed: true
            },
            {
                text: '基础事件',
                items: [
                    { text: 'Event', link: '/reference/event/basic/Event' },
                    { text: 'UIEvent', link: '/reference/event/ui/UIEvent' }
                ],
                collapsed: true
            }
        ],
    },
    {
        text: '🌷 实用', //
        items: [
            {
                text: '数学',
                items: [
                    { text: 'Point', link: '/reference/math/Point.md' },
                    { text: 'Bounds', link: '/reference/math/Bounds.md' },
                    { text: 'Matrix', link: '/reference/math/Matrix.md' },
                ],
                collapsed: true
            },
            {
                text: '列表',
                items: [
                    { text: 'LeafList', link: '/reference/list/LeafList.md' },
                ],
                collapsed: true
            },
            {
                text: '资源',
                items: [
                    { text: 'Resource', link: '/reference/resource/Resource.md' }
                ],
                collapsed: true
            },
        ],
    },
    {
        text: '🛠 开发',
        items: [
            { text: '调试模式', link: '/reference/debug/basic' },
            { text: '开发插件', link: '/plugin/dev.md' },
        ],
    },

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