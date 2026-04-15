import { DefaultTheme } from 'vitepress'

export const referenceSidebar: DefaultTheme.SidebarItem[] = [
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
]