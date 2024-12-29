# UI

基础元素（所有元素的基类），展示所有元素通用的属性方法。

除了 API 列表之外，我们还提供了简单的 [分类方式](#分类) 来快速了解 API 的构成。

## 📃 API

### 所有属性

| 名称                                                                                | 描述                                                                                                                                                                                                                                                                                                                                         |
| ----------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [id](/reference/property/id)                                                        | 元素的唯一 id                                                                                                                                                                                                                                                                                                                                |
| [tag](/reference/property/tag)                                                      | 元素标签名（即元素的类名）                                                                                                                                                                                                                                                                                                                   |
| [name](/reference/property/name)                                                    | 元素的名称                                                                                                                                                                                                                                                                                                                                   |
| [className](/reference/property/className)                                          | 分类名称，暂时只支持设置 1 个                                                                                                                                                                                                                                                                                                                |
| [innerId](/reference/property/innerId)                                              | 运行时创建的临时 id（递增），不能用于远程存储                                                                                                                                                                                                                                                                                                |
| [innerName](/reference/property/innerName)                                          | 运行时创建的临时名称，用于快速识别元素                                                                                                                                                                                                                                                                                                       |
| [x](/reference/property/position#x-number)                                          | x 轴位置                                                                                                                                                                                                                                                                                                                                     |
| [y](/reference/property/position#y-number)                                          | y 轴位置                                                                                                                                                                                                                                                                                                                                     |
| [width](/reference/property/size#width-number)                                      | 宽度                                                                                                                                                                                                                                                                                                                                         |
| [height](/reference/property/size#height-number)                                    | 高度                                                                                                                                                                                                                                                                                                                                         |
| [lockRatio](/reference/property/resize#lockratio-boolean)                           | 是否锁定元素的宽高比例，需安装 [resize 插件](/plugin/in/resize/index.md)                                                                                                                                                                                                                                                                     |
| [scaleX](/reference/property/scale#scalex-number)                                   | x 轴缩放比例， 为负数时表示镜像 X 轴                                                                                                                                                                                                                                                                                                         |
| [scaleY](/reference/property/scale#scaley-number)                                   | y 轴缩放比例，为负数时表示镜像 Y 轴                                                                                                                                                                                                                                                                                                          |
| [scale](/reference/property/scale#scale)                                            | 快速设置 / 获取 scaleX, scaleY                                                                                                                                                                                                                                                                                                               |
| [rotation](/reference/property/rotation)                                            | [旋转角度](../interface/math/Math.md#rotation)                                                                                                                                                                                                                                                                                               |
| [skewX](/reference/property/skew#skewx-number)                                      | x 轴倾斜角度                                                                                                                                                                                                                                                                                                                                 |
| [skewY](/reference/property/skew#skewy-number)                                      | y 轴倾斜角度                                                                                                                                                                                                                                                                                                                                 |
| [offsetX](/reference/property/offset#offsetx-number)                                | x 轴偏移量                                                                                                                                                                                                                                                                                                                                   |
| [offsetY](/reference/property/offset#offsety-number)                                | y 轴偏移量                                                                                                                                                                                                                                                                                                                                   |
| [origin](/reference/property/origin)                                                | 围绕原点旋转、缩放元素，同 CSS 的 [transform-origin](https://developer.mozilla.org/zh-CN/docs/Web/CSS/transform-origin)                                                                                                                                                                                                                      |
| [around](/reference/property/around)                                                | 围绕 around 点绘制元素，类似于游戏引擎中的 anchor 锚点功能                                                                                                                                                                                                                                                                                   |
| [boxBounds](/reference/property/bounds#boxbounds-iboundsdata)                       | 相对 [内部坐标系](/guide/basic/coordinate.md) 的基础边界（[OBB](/reference/property/bounds) 包围盒）                                                                                                                                                                                                                                         |
| [renderBounds](/reference/property/bounds#renderbounds-iboundsdata)                 | 相对 [内部坐标系](/guide/basic/coordinate.md) 的渲染边界（[AABB](/reference/property/bounds) 包围盒）                                                                                                                                                                                                                                        |
| [worldBoxBounds](/reference/property/bounds#worldboxbounds-iboundsdata)             | 相对 [世界坐标系](/guide/basic/coordinate.md#world) 的基础边界（[AABB](/reference/property/bounds) 包围盒）                                                                                                                                                                                                                                  |
| [worldRenderBounds](/reference/property/bounds#worldrenderbounds-iboundsdata)       | 相对 [世界坐标系](/guide/basic/coordinate.md#world) 的渲染边界（[AABB](/reference/property/bounds) 包围盒）                                                                                                                                                                                                                                  |
| [worldTransform](/reference/property/transform#worldtransform-imatrixwithscaledata) | 相对于世界坐标的变换矩阵, 包含 scaleX、scaleY 属性                                                                                                                                                                                                                                                                                           |
| [localTransform](/reference/property/transform#localtransform-imatrixdata)          | 相对于父元素的变换矩阵                                                                                                                                                                                                                                                                                                                       |
| [zIndex](/reference/property/zIndex)                                                | 在父元素中的层叠顺序                                                                                                                                                                                                                                                                                                                         |
| [opacity](/reference/property/opacity)                                              | 不透明度                                                                                                                                                                                                                                                                                                                                     |
| [worldOpacity](/reference/property/opacity)                                         | 元素在全局视图中的不透明度（会受父元素影响）                                                                                                                                                                                                                                                                                                 |
| [visible](/reference/property/visible)                                              | 元素的可见性，可用于隐藏元素                                                                                                                                                                                                                                                                                                                 |
| [fill](/reference/property/fill)                                                    | 填充，类似于 HTML5 中的 background-color，或文字的 color，支持 [纯色](/reference/property/paint/solid.md)、 [线性渐变](/reference/property/paint/linear.md)、[径向渐变](/reference/property/paint/radial.md)、[角度渐变](/reference/property/paint/angular.md)、[图案填充](/reference/property/paint/image.md) 等类型， 支持多个填充同时叠加 |
| [stroke](/reference/property/stroke)                                                | 描边，类似于 HTML5 中的 border-color，支持 [纯色](/reference/property/paint/solid.md)、 [线性渐变](/reference/property/paint/linear.md)、[径向渐变](/reference/property/paint/radial.md)、[角度渐变](/reference/property/paint/angular.md)、[图案](/reference/property/paint/image.md) 等类型， 支持多个描边同时叠加                         |
| [strokeAlign](/reference/property/stroke#strokealign-strokealign)                   | 描边的对齐方式                                                                                                                                                                                                                                                                                                                               |
| [strokeWidth](/reference/property/stroke#strokewidth-number)                        | 描边的宽度                                                                                                                                                                                                                                                                                                                                   |
| [strokeWidthFixed](/reference/property/stroke#strokewidthfixed-boolean)             | 是否固定线宽（不受视图放大影响）                                                                                                                                                                                                                                                                                                             |
| [strokeCap](/reference/property/stroke#strokecap-strokecap)                         | 描边的端点形状                                                                                                                                                                                                                                                                                                                               |
| [strokeJoin](/reference/property/stroke#strokejoin-strokejoin)                      | 描边的拐角处理                                                                                                                                                                                                                                                                                                                               |
| [dashPattern](/reference/property/stroke#dashpattern-number)                        | 虚线描边                                                                                                                                                                                                                                                                                                                                     |
| [dashOffset](/reference/property/stroke#dashoffset-number)                          | 虚线描边的起点偏移值                                                                                                                                                                                                                                                                                                                         |
| [shadow](/reference/property/shadow)                                                | 外阴影， 支持多个阴影叠加、boxShadow 效果                                                                                                                                                                                                                                                                                                    |
| [innerShadow](/reference/property/innerShadow)                                      | 内阴影， 支持多个内阴影叠加                                                                                                                                                                                                                                                                                                                  |
| [mask](/reference/property/mask)                                                    | 设为遮罩                                                                                                                                                                                                                                                                                                                                     |
| [eraser](/reference/property/eraser)                                                | 设为橡皮擦                                                                                                                                                                                                                                                                                                                                   |
| [blendMode](/reference/property/blendMode)                                          | 混合模式                                                                                                                                                                                                                                                                                                                                     |
| [hittable](/reference/property/hit)                                                 | 元素是否响应鼠标、触摸或其他指针设备的交互事件，类似 CSS 的 pointer-events 属性                                                                                                                                                                                                                                                              |
| [hitChildren](/reference/property/hitChildren)                                      | 进一步定义元素子级的可交互性                                                                                                                                                                                                                                                                                                                 |
| [hitSelf](/reference/property/hitSelf)                                              | 进一步定义自身（不含子元素）的可交互性                                                                                                                                                                                                                                                                                                       |
| [hitFill](/reference/property/hitFill)                                              | 进一步定义元素 [fill](/reference/property/fill.md) 的可交互性，设置 pixel 可以进行 PNG / SVG 图片的像素级检测，过滤掉透明像素                                                                                                                                                                                                                |
| [hitStroke](/reference/property/hitStroke)                                          | 进一步定义元素 [stroke](/reference/property/stroke.md) 的可交互性                                                                                                                                                                                                                                                                            |
| [editable](/reference/property/editable)                                            | 是否允许编辑，需安装 [图形编辑器插件](/plugin/in/editor/)                                                                                                                                                                                                                                                                                    |
| [draggable](/reference/property/draggable)                                          | 是否允许拖拽                                                                                                                                                                                                                                                                                                                                 |
| [dragBounds](/reference/property/dragBounds.md)                                     | 限制元素的拖动范围                                                                                                                                                                                                                                                                                                                           |
| [cursor](/reference/property/cursor)                                                | hover 到元素上时，显示的光标样式，支持所有 [CSS 的光标名称](https://developer.mozilla.org/zh-CN/docs/Web/CSS/cursor)                                                                                                                                                                                                                         |
| [states](/reference/property/state/state.md#states-istates)                         | 状态列表，可预设复杂多样的元素、游戏状态，用于随时切换， 支持添加 [过渡效果](/reference/property/transition.md)，需安装 [交互状态插件](/plugin/in/state/index.md)                                                                                                                                                                            |
| [state](/reference/property/state/state.md#state-string)                            | 当前状态，需安装 [交互状态插件](/plugin/in/state/index.md)                                                                                                                                                                                                                                                                                   |
| [button](/reference/property/state/state.md#button-boolean)                         | 设为按钮，子元素将自动同步交互状态，如 state、hover、press...，需安装 [交互状态插件](/plugin/in/state/index.md)                                                                                                                                                                                                                              |
| [hoverStyle](/reference/property/state/hover.md#hoverstyle-iuiinputdata)            | 光标移入时的交互样式， 移出后自动还原，需安装 [交互状态插件](/plugin/in/state/index.md)                                                                                                                                                                                                                                                      |
| [pressStyle](/reference/property/state/press.md#pressstyle-iuiinputdata)            | 光标按下时的交互样式， 抬起后自动还原，需安装 [交互状态插件](/plugin/in/state/index.md)                                                                                                                                                                                                                                                      |
| [focusStyle](/reference/property/state/focus.md#focusstyle-iuiinputdata)            | 元素 focus() 时的聚焦样式， 失去焦点后自动还原，需安装 [交互状态插件](/plugin/in/state/index.md)                                                                                                                                                                                                                                             |
| [selected](/reference/property/state/selected.md#selected-boolean)                  | 是否选中，需安装 [交互状态插件](/plugin/in/state/index.md)                                                                                                                                                                                                                                                                                   |
| [selectedStyle](/reference/property/state/selected.md#selectedstyle-iuiinputdata)   | 元素 `selected` 设为 true 时的选中样式， `selected` 设为 false 后自动还原，需安装 [交互状态插件](/plugin/in/state/index.md)                                                                                                                                                                                                                  |
| [disabled](/reference/property/state/disabled.md#disabled-boolean)                  | 是否禁用，需安装 [交互状态插件](/plugin/in/state/index.md)                                                                                                                                                                                                                                                                                   |
| [disabledStyle](/reference/property/state/disabled.md#disabledstyle-iuiinputdata)   | 元素 `disabled` 设为 true 时的禁用样式， `disabled` 设为 false 后自动还原，需安装 [交互状态插件](/plugin/in/state/index.md)                                                                                                                                                                                                                  |
| [animation](/reference/property/animation)                                          | 动画属性，支持延时、循环和 seek，可制作过渡动画、摇摆动画、关键帧动画、路径动画，需安装 [动画插件](/plugin/in/animate/index.md)                                                                                                                                                                                                              |
| [transition](/reference/property/transition)                                        | 状态过渡 / 进入状态过渡效果，需安装 [动画插件](/plugin/in/animate/index.md)                                                                                                                                                                                                                                                                  |
| [transitionOut](/reference/property/transition)                                     | 退出状态时的过渡效果，未设置时使用 transition，需安装 [动画插件](/plugin/in/animate/index.md)                                                                                                                                                                                                                                                |
| [motionPath](/reference/property/motionPath)                                        | 设为运动路径，需安装 [运动路径插件](/plugin/in/motion-path/)                                                                                                                                                                                                                                                                                 |
| [motionPrecision](/reference/property/motionPath)                                   | 设置运动路径的精度值，用于控制提取运动路径上指定点的精度，需安装 [运动路径插件](/plugin/in/motion-path/)                                                                                                                                                                                                                                     |
| [motion](/reference/property/motion)                                                | 定位元素在 [运动路径](/reference/property/motionPath.md) 上的位置，可使用百分比类型，需安装 [运动路径插件](/plugin/in/motion-path/)                                                                                                                                                                                                          |
| [motionRotation](/reference/property/motion)                                        | 在 [运动路径](/reference/property/motionPath.md) 产生的自动角度上偏移一个角度，需安装 [运动路径插件](/plugin/in/motion-path/)                                                                                                                                                                                                                |
| [parent](/reference/property/parent)                                                | 父元素                                                                                                                                                                                                                                                                                                                                       |
| [leafer](/reference/property/leafer)                                                | 元素所在的 Leafer 实例                                                                                                                                                                                                                                                                                                                       |
| [app](/reference/property/leafer#app-app-leafer)                                    | 元素所在的 App 实例（根应用），非 App 结构时为 Leafer                                                                                                                                                                                                                                                                                        |
| [isLeafer](/reference/property/leafer#isleafer-boolean)                             | 元素是否为 Leafer 实例                                                                                                                                                                                                                                                                                                                       |
| [leaferIsCreated](/reference/property/leafer#leaferiscreated-boolean)               | Leafer 实例及子元素 [创建完成](/reference/display/Leafer.md#created-boolean)（完成首次创建）                                                                                                                                                                                                                                                 |
| [leaferIsReady](/reference/property/leafer#leaferisready-boolean)                   | Leafer 实例是否 [准备就绪](/reference/display/Leafer.md#ready-boolean)（完成首次布局）                                                                                                                                                                                                                                                       |
| [zoomLayer](/reference/property/leafer#zoomlayer-group)                             | Leafer 实例的 [缩放平移视图层](/reference/display/Leafer.md#zoomlayer-group)                                                                                                                                                                                                                                                                 |
| [data](/reference/property/data)                                                    | 预留给用户的自定义数据对象，我们永远不会占用， 默认为空对象 {}                                                                                                                                                                                                                                                                               |
| [\_\_](/reference/property/data#iuiinputdata)                                       | 内部数据处理实例（两个下划线的变量）                                                                                                                                                                                                                                                                                                         |
| [proxyData](/reference/property/proxy)                                              | 让元素在 Vue / React 等前端框架 中支持响应式数据                                                                                                                                                                                                                                                                                             |
| [path](/reference/property/path)                                                    | 路径数据，支持 SVG 与 Cavnas [绘图命令](/reference/interface/ui/PathData.md) （元素可进入路径优先模式）                                                                                                                                                                                                                                      |

### 所有方法

| 名称                                                                                                                                                   | 描述                                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [move()](/reference/property/position#move-addx-number-ipointdata-addy-0-transition-itranstion)                                                        | 位移元素 <badge>增量操作</badge>，可选 [动画](/guide/plugin/animate.md) 过渡                                                                                                            |
| [moveInner()](/reference/property/position#moveinner-addx-number-ipointdata-addy-0-transition-itranstion)                                              | 在 [内部坐标系](/guide/basic/coordinate.md) 中位移元素 <badge>增量操作</badge>，可选 [动画](/guide/plugin/animate.md) 过渡                                                              |
| [moveWorld()](/reference/property/position#moveworld-addworldx-number-ipointdata-addworldy-0-transition-itranstion)                                    | 在 [世界坐标系](/guide/basic/coordinate.md#world) 中位移元素 <badge>增量操作</badge>，可选 [动画](/guide/plugin/animate.md) 过渡                                                        |
| [resizeWidth()](/reference/property/resize#resizewidth-width-number)                                                                                   | resize 元素/组元素的包围盒宽度，需安装 [resize 插件](/plugin/in/resize/index.md)                                                                                                        |
| [resizeHeight()](/reference/property/resize#resizeheight-height-number)                                                                                | resize 元素/组元素的包围盒高度，需安装 [resize 插件](/plugin/in/resize/index.md)                                                                                                        |
| [scaleResize()](/reference/property/resize#scaleresize-scalex-number-scaley-scalex)                                                                    | 缩放操作转换为宽高值 <badge>增量操作</badge>，需安装 [resize 插件](/plugin/in/resize/index.md)                                                                                          |
| [scaleOf()](/reference/property/scale.md#scaleof-origin-ialign-ipointdata-multiplyscalex-number-multiplyscaley-multiplyscalex-resize-boolean)          | 围绕原点 origin（ [box 坐标](/guide/basic/coordinate.md#box) ）缩放元素 <badge>增量操作</badge>                                                                                         |
| [scaleOfWorld()](/reference/property/scale.md#scaleofworld-worldorigin-ipointdata-multiplyscalex-number-multiplyscaley-addscalex-resize-boolean)       | 围绕原点 worldOrigin（ [世界坐标](/guide/basic/coordinate.md#world) ）缩放元素 <badge>增量操作</badge>                                                                                  |
| [flip()](/reference/property/flip)                                                                                                                     | 在 [世界坐标系](/guide/basic/coordinate.md#world) 中， 按轴方向 镜像/翻转元素                                                                                                           |
| [rotateOf()](/reference/property/rotation.md#rotateof-origin-ialign-ipointdata-addrotation-number)                                                     | 围绕原点 origin（ [box 坐标](/guide/basic/coordinate.md#box) ）旋转元素 <badge>增量操作</badge>                                                                                         |
| [rotateOfWorld()](/reference/property/rotation.md#rotateofworld-worldorigin-ipointdata-addrotation-number)                                             | 围绕原点 worldOrigin（ [世界坐标](/guide/basic/coordinate.md#world) ）旋转元素 <badge>增量操作</badge>                                                                                  |
| [skewOf()](/reference/property/skew#skewof-origin-ialign-ipointdata-addskewx-number-addskewy-0-resize-boolean)                                         | 围绕原点 origin（ [box 坐标](/guide/basic/coordinate.md#box) ）倾斜元素 <badge>增量操作</badge>                                                                                         |
| [skewOfWorld()](/reference/property/skew#skewofworld-worldorigin-ipointdata-addskewx-number-addskewy-0-resize-boolean)                                 | 围绕原点 worldOrigin（ [世界坐标](/guide/basic/coordinate.md#world) ）倾斜元素 <badge>增量操作</badge>                                                                                  |
| [getBounds()](/reference/property/bounds#getbounds-type-iboundstype-box-relative-ilocationtype-ui-world-iboundsdata)                                   | 获取 [AABB](/reference/property/bounds) 包围盒（边界）                                                                                                                                  |
| [getLayoutBounds()](/reference/property/bounds#getlayoutbounds-type-iboundstype-box-relative-ilocationtype-ui-world-unscale-boolean-ilayoutboundsdata) | 获取 [OBB](/reference/property/bounds) 包围盒（边界），含缩放、旋转等布局属性                                                                                                           |
| [getLayoutPoints()](/reference/property/bounds#getlayoutpoints-type-iboundstype-box-relative-ilocationtype-ui-world-ipointdata)                        | 获取 [OBB](/reference/property/bounds) 包围盒（边界）的四个坐标点）                                                                                                                     |
| [setTransform()](/reference/property/transform.md#settransform-matrix-imatrixdata)                                                                     | 设置本地变换矩阵，会自动分解为元素的布局属性                                                                                                                                            |
| [getTransform()](/reference/property/transform.md#gettransform-relative-ilocationtype-ui-local-imatrixdata)                                            | 获取变换矩阵, 支持获取相对任意父元素 `relative` 的相对矩阵                                                                                                                              |
| [transform()](/reference/property/transform.md#transform-matrix-imatrixdata)                                                                           | 变换操作，会自动分解为布局属性 <badge>增量操作</badge>                                                                                                                                  |
| [transformWorld()](/reference/property/transform.md#transformworld-worldtransform-imatrixdata)                                                         | transform() 在 [世界坐标系](/guide/basic/coordinate.md#world) 中操作                                                                                                                    |
| [getPagePoint()](/reference/property/point/index.md#转换世界坐标)                                                                                      | 获取 page 坐标（ [世界坐标](/guide/basic/coordinate.md#world) 转 [page 坐标](/guide/basic/coordinate.md#page) ），支持转换移动距离                                                      |
| [getLocalPoint()](/reference/property/point/index.md#转换世界坐标)                                                                                     | 获取本地坐标（ [世界坐标](/guide/basic/coordinate.md#world) 转 [本地坐标](/guide/basic/coordinate.md#local) ），支持转换移动距离                                                        |
| [getInnerPoint()](/reference/property/point/index.md#转换世界坐标)                                                                                     | 获取内部坐标（ [世界坐标](/guide/basic/coordinate.md#world) 转 [内部坐标](/guide/basic/coordinate.md#inner) ），支持转换移动距离                                                        |
| [getBoxPoint()](/reference/property/point/index.md#转换世界坐标)                                                                                       | 获取 box 坐标（ [世界坐标](/guide/basic/coordinate.md#world) 转 [box 坐标](/guide/basic/coordinate.md#box) ），支持转换移动距离                                                         |
| [getWorldPointByPage()](/reference/property/point/index.md#转换-page-坐标)                                                                             | 获取世界坐标（ [page 坐标](/guide/basic/coordinate.md#page) 转 [世界坐标](/guide/basic/coordinate.md#world) ），支持转换移动距离                                                        |
| [getWorldPointByLocal()](/reference/property/point/index.md#转换本地坐标)                                                                              | 获取世界坐标（ [本地坐标](/guide/basic/coordinate.md#local) 转 [世界坐标](/guide/basic/coordinate.md#world) ），支持转换移动距离                                                        |
| [getInnerPointByLocal()](/reference/property/point/index.md#转换本地坐标)                                                                              | 获取内部坐标（ [本地坐标](/guide/basic/coordinate.md#local) 转 [内部坐标](/guide/basic/coordinate.md#inner) ），支持转换移动距离                                                        |
| [getWorldPoint()](/reference/property/point/index.md#转换内部坐标)                                                                                     | 获取世界坐标（ [内部坐标](/guide/basic/coordinate.md#inner) 转 [世界坐标](/guide/basic/coordinate.md#world) ），支持转换移动距离                                                        |
| [getLocalPointByInner()](/reference/property/point/index.md#转换内部坐标)                                                                              | 获取本地坐标（ [内部坐标](/guide/basic/coordinate.md#inner) 转 [本地坐标](/guide/basic/coordinate.md#local) ），支持转换移动距离                                                        |
| [getBoxPointByInner()](/reference/property/point/index.md#转换内部坐标)                                                                                | 获取 box 坐标（ [内部坐标](/guide/basic/coordinate.md#inner) 转 [box 坐标](/guide/basic/coordinate.md#box) ），支持转换移动距离                                                         |
| [getWorldPointByBox()](/reference/property/point/index.md#转换内部坐标)                                                                                | 获取世界坐标（ [box 坐标](/guide/basic/coordinate.md#box) 转 [世界坐标](/guide/basic/coordinate.md#world) ），支持转换移动距离                                                          |
| [getInnerPointByBox()](/reference/property/point/index.md#转换内部坐标)                                                                                | 获取内部坐标（ [box 坐标](/guide/basic/coordinate.md#box) 转 [内部坐标](/guide/basic/coordinate.md#inner) ），支持转换移动距离                                                          |
| [dropTo()](/reference/property/dropTo)                                                                                                                 | 将元素拖拽放置到另一个父容器中                                                                                                                                                          |
| [focus()](/reference/property/state/focus.md#focus-value-boolean)                                                                                      | 聚焦元素操作，单个 App 只能同时有一个元素聚焦，当一个元素聚焦时，之前元素会失焦，需安装 [交互状态插件](/plugin/in/state/index.md)                                                       |
| [animate()](/reference/property/animate)                                                                                                               | 执行动画方法，并返回 [动画实例](/plugin/in/animate/Animate.md)，需安装 [动画插件](/plugin/in/animate/index.md)                                                                          |
| [getMotionTotal()](/reference/property/getMotionTotal)                                                                                                 | 获取运动路径的总长度，需安装 [运动路径插件](/plugin/in/motion-path/)                                                                                                                    |
| [getMotionPoint()](/reference/property/getMotionPoint)                                                                                                 | 获取运动路径上指定位置的 坐标点, 返回一个包含 rotation 的 坐标点，需安装 [运动路径插件](/plugin/in/motion-path/)                                                                        |
| [on()](/reference/property/on#on-type-string-string-listener-ieventlistener-options-ieventoption)                                                      | 侦听事件                                                                                                                                                                                |
| [on\_()](/reference/property/on#on-type-string-string-listener-ieventlistener-bind-iobject-options-ieventoption-ieventlistenerid)                      | 侦听事件，支持传入 bind 作为 listener 的 this 对象，并返回事件 id，与 [off\_()](/reference/property/off.md#off) 配套使用                                                                |
| [once()](/reference/property/on#once-type-string-string-listener-ieventlistener-capture-boolean)                                                       | 只侦听一次事件                                                                                                                                                                          |
| [off()](/reference/property/off)                                                                                                                       | 移除事件                                                                                                                                                                                |
| [off\_()](/reference/property/off)                                                                                                                     | 移除事件， 与 [on\_()](/reference/property/on.md#on_) 配套使用                                                                                                                          |
| [emit()](/reference/property/emit)                                                                                                                     | 手动派发事件                                                                                                                                                                            |
| [emitEvent()](/reference/property/emit)                                                                                                                | 手动派发事件，参数必须为 IEvent 对象                                                                                                                                                    |
| [forceUpdate()](/reference/property/forceUpdate.md)                                                                                                    | 强制更新元素（异步），默认会更新元素的布局与渲染                                                                                                                                        |
| [forceRender()](/reference/property/forceRender.md)                                                                                                    | 强制渲染元素（异步），只会重新渲染，不会更新布局。                                                                                                                                      |
| [nextRender()](/reference/property/nextRender.md)                                                                                                      | 等待下一次渲染帧执行函数                                                                                                                                                                |
| [removeNextRender()](/reference/property/nextRender.md)                                                                                                | 移除 nextRender() 监听的函数                                                                                                                                                            |
| [find()](/reference/property/find.md)                                                                                                                  | 通过 [id](/reference/property/id)、[innerId](/reference/property/innerId)、[className](/reference/property/className)、[tag](/reference/property/tag)、函数条件查找元素，返回一个数组   |
| [findTag()](/reference/property/find.md)                                                                                                               | 查找 tag，支持通过数组查找多个 tag，返回一个数组                                                                                                                                        |
| [findOne()](/reference/property/findOne.md)                                                                                                            | 通过 [id](/reference/property/id)、[innerId](/reference/property/innerId)、[className](/reference/property/className)、[tag](/reference/property/tag)、函数条件查找元素，只返回一个元素 |
| [findId()](/reference/property/findOne.md)                                                                                                             | 查找 id, 支持查找数字类型的 id（必须原始 id 类型为数字）                                                                                                                                |
| [pick()](/reference/property/pick.md)                                                                                                                  | 通过坐标点（相对世界坐标）拾取元素，支持获取穿透路径，返回拾取到的目标元素和路径                                                                                                        |
| [waitParent()](/reference/property/parent#waitparent-item-function-bind-object)                                                                        | 等待元素有 [`parent`](/reference/property/parent) 属性时执行                                                                                                                            |
| [waitLeafer()](/reference/property/leafer#waitleafer-item-function-bind-object)                                                                        | 等待元素有 [`leafer`](/reference/property/leafer) 属性时执行                                                                                                                            |
| [set()](/reference/property/data#set-data-iuiinputdata-transition-itranstion)                                                                          | 设置元素样式，可选 [动画](/guide/plugin/animate.md) 过渡。                                                                                                                              |
| [reset()](/reference/property/data#reset-data-iuiinputdata)                                                                                            | 重置元素样式, 支持传入一个新的样式                                                                                                                                                      |
| [get()](/reference/property/data#get-iuiinputdata)                                                                                                     | 获取设置过的属性数据                                                                                                                                                                    |
| [setAttr()](/reference/property/data#setattr-name-string-value-any)                                                                                    | 设置属性值                                                                                                                                                                              |
| [getAttr()](/reference/property/data#getattr-name-string-any)                                                                                          | 获取属性值                                                                                                                                                                              |
| [getComputedAttr()](/reference/property/data#getcomputedattr-name-string-any)                                                                          | 获取计算属性值                                                                                                                                                                          |
| [clone()](/reference/property/clone)                                                                                                                   | 克隆当前元素， 可以增加新样式                                                                                                                                                           |
| [getPath()](/reference/property/getPath.md)                                                                                                            | 获取元素的数字路径（Canvas [绘图命令](../interface/ui/PathData.md#canvas-命令)）                                                                                                        |
| [getPathString()](/reference/property/getPathString.md)                                                                                                | 获取元素的字符串路径（Canvas [绘图命令](../interface/ui/PathData.md#canvas-命令)，包含非 SVG 绘图命令）                                                                                 |
| [export()](/reference/property/export.md)                                                                                                              | 导出元素为图片、json、画布，支持截图、切片，可直接下载                                                                                                                                  |
| [toJSON()](/reference/property/json.md)                                                                                                                | 导出 JSON 对象                                                                                                                                                                          |
| [toString()](/reference/property/json.md#tostring-options-ijsonoptions-string)                                                                         | 导出 JSON 字符串                                                                                                                                                                        |
| [remove()](/reference/property/remove)                                                                                                                 | 移除当前元素                                                                                                                                                                            |
| [destroy()](/reference/property/destroy)                                                                                                               | 销毁当前元素                                                                                                                                                                            |

### 静态方法

| 名称                                                     | 描述                              |
| -------------------------------------------------------- | --------------------------------- |
| [changeAttr()](/reference/property/custom/changeAttr.md) | 修改元素属性的默认值 （全局操作） |
| [addAttr()](/reference/property/custom/addAttr.md)       | 新增元素属性（全局操作）          |

##

# 分类

我们还提供了简单的 分类方式 来快速了解 API 的构成， 如下：

## 🎞️ 数据

### id / name

[id](/reference/property/id) &nbsp; &nbsp; [tag](/reference/property/tag) &nbsp; &nbsp; [name](/reference/property/name) &nbsp; &nbsp; [className](/reference/property/className) &nbsp; &nbsp; [innerId](/reference/property/innerId) &nbsp; &nbsp; [innerName](/reference/property/innerName)

### parent / leafer

[parent](/reference/property/parent) &nbsp; &nbsp; [leafer](/reference/property/leafer)

### 数据 / 克隆

[data](/reference/property/data) &nbsp; &nbsp; [proxyData](/reference/property/proxy) &nbsp; &nbsp; [clone()](/reference/property/clone)

### 路径数据

[getPath()](/reference/property/getPath.md) &nbsp; &nbsp; [getPathString()](/reference/property/getPathString.md) &nbsp; &nbsp; [path](/reference/property/path)

### 导入导出

[export()](/reference/property/export.md) &nbsp; &nbsp; [toJSON()](/reference/property/json.md) &nbsp; &nbsp; [toString](/reference/property/json.md#tostring-string)

### 移除 / 销毁

[remove()](/reference/property/remove) &nbsp; &nbsp; [destroy()](/reference/property/destroy)

## 📐 布局

### 定位 / 布局

[position](/reference/property/position) &nbsp; &nbsp; [size](/reference/property/size) &nbsp; &nbsp; [scale](/reference/property/scale) &nbsp; &nbsp; [flip()](/reference/property/flip) &nbsp; &nbsp; [rotation](/reference/property/rotation) &nbsp; &nbsp; [skew](/reference/property/skew)

### 偏移 / resize

[offset](/reference/property/offset) &nbsp; &nbsp; [resize](/reference/property/resize)

### 围绕中心

[origin](/reference/property/origin) &nbsp; &nbsp; [around](/reference/property/around)

### 包围盒 / 变换

[bounds](/reference/property/bounds) &nbsp; &nbsp; [transform](/reference/property/transform)

### 转换坐标

[转换坐标](/reference/property/point/) &nbsp; &nbsp; [快速转换](/reference/property/point/high)

### 层叠 / 放置

[zIndex](/reference/property/zIndex) &nbsp; &nbsp; [dropTo()](/reference/property/dropTo)

## 🏼 外观

### 透明 / 隐藏

[opacity](/reference/property/opacity) &nbsp; &nbsp; [visible](/reference/property/visible)

### 填充 / 描边

[fill](/reference/property/fill) &nbsp; &nbsp; [stroke](/reference/property/stroke)

### 渐变 / 图像

[linear](/reference/property/paint/linear) &nbsp; &nbsp; [radial](/reference/property/paint/radial) &nbsp; &nbsp; [angular](/reference/property/paint/angular) &nbsp; &nbsp; [solid](/reference/property/paint/solid) &nbsp; &nbsp; [image](/reference/property/paint/image)

### 内外阴影

[shadow](/reference/property/shadow) &nbsp; &nbsp; [innerShadow](/reference/property/innerShadow)

### 裁剪 / 擦除

[clip](/reference/property/clip) &nbsp; &nbsp; [mask](/reference/property/mask) &nbsp; &nbsp; [eraser](/reference/property/eraser)

### 混合模式

[blendMode](/reference/property/blendMode)

## 🖱 交互

### 可交互性

[hittable](/reference/property/hit) &nbsp; &nbsp; [hitChildren](/reference/property/hitChildren) &nbsp; &nbsp; [hitSelf](/reference/property/hitSelf) &nbsp; &nbsp; [hitFill](/reference/property/hitFill) &nbsp; &nbsp; [hitStroke](/reference/property/hitStroke)

### 编辑 / 拖拽

[editable](/reference/property/editable) &nbsp; &nbsp; [draggable](/reference/property/draggable)

### 光标样式

[cursor](/reference/property/cursor)

### 交互状态

[state](/reference/property/state/state.md) &nbsp; &nbsp; [hover](/reference/property/state/hover.md) &nbsp; &nbsp; [press](/reference/property/state/press.md) &nbsp; &nbsp; [focus](/reference/property/state/focus.md) &nbsp; &nbsp; [selected](/reference/property/state/selected.md) &nbsp; &nbsp; [disabled](/reference/property/state/disabled.md)

### 事件处理

[on() / once()](/reference/property/on) &nbsp; &nbsp; [off()](/reference/property/off) &nbsp; &nbsp; [emit()](/reference/property/emit) &nbsp; &nbsp; [命名](/reference/event/name) &nbsp; &nbsp; [捕获/冒泡](/reference/event/flow) &nbsp; &nbsp; [模拟交互](/reference/event/simulation)

## 🐆 动画

### 动画

[animation](/reference/property/animation) &nbsp; &nbsp; [animate()](/reference/property/animate)

### 过渡

[transition](/reference/property/transition)

### 运动路径

[motionPath](/reference/property/motionPath) &nbsp; &nbsp; [motion](/reference/property/motion) &nbsp; &nbsp; [getMotionTotal()](/reference/property/getMotionTotal) &nbsp; &nbsp; [getMotionPoint()](/reference/property/getMotionPoint)

## 🪜 高级

### 限制拖动范围

[dragBounds](/reference/property/dragBounds.md)

### 强制渲染

[forceUpdate()](/reference/property/forceUpdate.md) &nbsp; &nbsp; [forceRender()](/reference/property/forceRender.md) &nbsp; &nbsp; [nextRender()](/reference/property/nextRender.md)

### 查找拾取

[find()](/reference/property/find.md) &nbsp; &nbsp; [findOne()](/reference/property/findOne.md) &nbsp; &nbsp; [pick()](/reference/property/pick.md)

### 自定义属性

[changeAttr()](/reference/property/custom/changeAttr.md) &nbsp; &nbsp; [addAttr()](/reference/property/custom/addAttr.md)
