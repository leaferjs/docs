# 转换坐标

当你 [缩放平移视图](/guide/advanced/viewport.md) 后，想在画布中用鼠标创建图形，会发现将 [事件坐标 x, y](/reference/event/ui/Pointer.md#x-number) 给到图形，位置已经不对了，此时就需要用到 [转换坐标](/reference/UI/point/index.md) 的功能。

## 先了解一下坐标系的原理

我们的应用是一个多层级的树状结构，层层嵌套，每个层级都有独立的 x、y、scaleX、scaleY、rotation、skewX、skewY 属性，这些属性因子构成了一个个独立起点的房间（坐标系）。

<br/>

![坐标体系](/svg/coordinate.svg)

<br/>

[转换坐标](/reference/UI/point/index.md) 的原理就是转换不同层级间的这些属性因子关系，省去手动计算。

<br/>

![坐标体系透视图](/svg/coordinate-3d.svg)

<br/>

<!--
以小圆作为参照物，从 3D 视角俯视，由下到上，依次为小圆的内部坐标系、本地坐标系、page 坐标系、世界坐标系。 -->

### world 世界坐标系

在画布上的坐标，类似 HTML 的 client 坐标系，以画布左上角为起点。

<!-- ，交互事件中的 x,y 都是世界坐标系，可以把画布想象成游戏世界，内部坐标想转换为世界坐标，会受元素及中间层级元素的 x、y、scaleX、scaleY、rotation 影响。 -->

### page 场景坐标系

在 leafer 或 app.tree 内的坐标， 类似 HTML 的 page 坐标系，以 [缩放层](/reference/display/Leafer.md#zoomlayer-group) 为起点。

<!-- ，一般是 leafer 自身， 第一层元素添加在这个坐标系中。 -->

### local 本地坐标系

相对父元素的坐标，类似 HTML 的 offset 坐标系，以父元素为起点。

<!-- ，可以把父元素想象成房子所在的小区，内部坐标想转换为本地坐标，会受元素的 x、y、scaleX、scaleY、rotation 影响。 -->

### inner 内部坐标系

在元素、组元素内的坐标，以元素的 x,y 位置为起点。

<!-- ， 如路径元素 Line、Path 中的坐标点，可以把元素想象成一个房间，房间内不受元素的 x、y、scaleX、scaleY、rotation 影响。 -->

### box 坐标系

在元素、组元素 [box 包围盒](/reference/UI/bounds.md#boxbounds-iboundsdata) 内的坐标，以元素实际内容的左上角为起点。

<!--
，一般情况下和 inner 坐标一样，当元素内容的起点不是从 inner 坐标（0，0）开始时会有差异，如路径 Path 经常不是从 0,0 开始绘制的。 -->

## 示例

### 我们通过 画笔工具 的例子， 来了解 [转换坐标](/reference/UI/point/index.md) 的作用

按下鼠标拖动开始画线，抬起结束，当缩放平移视图后，仍然可以准确绘制新的线条。

::: code-group
<<< @/code/display/Pen/draw.ts
<<< @/code/display/Pen/draw.js
:::

### 拖拽创建图形

拖拽 dom 元素到画布中创建图形，需要使用浏览器原生坐标转换

::: code-group
<<< @/code/advanced/coordinate/browser/drop.ts [添加到 tree]
<<< @/code/advanced/coordinate/browser/drop-frame.ts [添加到 Frame]
:::

<!-- ## 应用示例

### [transform](/reference/UI/transform.md)

### [元素转换坐标](/reference/UI/point/index.md) -->

## 转换方法

### 事件中的坐标转换方法

### [UIEvent](/reference/event/ui/UIEvent.md#转换坐标方法) &nbsp; &nbsp; [PointerEvent](/reference/event/ui/Pointer.md#转换坐标方法) &nbsp; &nbsp; [DragEvent](/reference/event/ui/Drag.md#转换坐标方法) &nbsp; &nbsp; [MoveEvent](/reference/event/ui/Move.md#转换坐标方法)

### 元素上的坐标转换方法

| 名称                                                                             | 描述                                                                                                                               |
| -------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- |
| [worldTransform](/reference/UI/transform.md#worldtransform-imatrixwithscaledata) | 相对于世界坐标的变换矩阵, 包含 scaleX、scaleY 属性，转换坐标的因子                                                                 |
| [localTransform](/reference/UI/transform.md#localtransform-imatrixdata)          | 相对于父元素的变换矩阵，转换坐标的因子                                                                                             |
| [getPagePoint()](/reference/UI/point/index.md#转换世界坐标)                      | 获取 page 坐标（ [世界坐标](/guide/basic/coordinate.md#world) 转 [page 坐标](/guide/basic/coordinate.md#page) ），支持转换移动距离 |
| [getLocalPoint()](/reference/UI/point/index.md#转换世界坐标)                     | 获取本地坐标（ [世界坐标](/guide/basic/coordinate.md#world) 转 [本地坐标](/guide/basic/coordinate.md#local) ），支持转换移动距离   |
| [getInnerPoint()](/reference/UI/point/index.md#转换世界坐标)                     | 获取内部坐标（ [世界坐标](/guide/basic/coordinate.md#world) 转 [内部坐标](/guide/basic/coordinate.md#inner) ），支持转换移动距离   |
| [getBoxPoint()](/reference/UI/point/index.md#转换世界坐标)                       | 获取 box 坐标（ [世界坐标](/guide/basic/coordinate.md#world) 转 [box 坐标](/guide/basic/coordinate.md#box) ），支持转换移动距离    |
| [getWorldPointByPage()](/reference/UI/point/index.md#转换-page-坐标)             | 获取世界坐标（ [page 坐标](/guide/basic/coordinate.md#page) 转 [世界坐标](/guide/basic/coordinate.md#world) ），支持转换移动距离   |
| [getWorldPointByLocal()](/reference/UI/point/index.md#转换本地坐标)              | 获取世界坐标（ [本地坐标](/guide/basic/coordinate.md#local) 转 [世界坐标](/guide/basic/coordinate.md#world) ），支持转换移动距离   |
| [getInnerPointByLocal()](/reference/UI/point/index.md#转换本地坐标)              | 获取内部坐标（ [本地坐标](/guide/basic/coordinate.md#local) 转 [内部坐标](/guide/basic/coordinate.md#inner) ），支持转换移动距离   |
| [getWorldPoint()](/reference/UI/point/index.md#转换内部坐标)                     | 获取世界坐标（ [内部坐标](/guide/basic/coordinate.md#inner) 转 [世界坐标](/guide/basic/coordinate.md#world) ），支持转换移动距离   |
| [getLocalPointByInner()](/reference/UI/point/index.md#转换内部坐标)              | 获取本地坐标（ [内部坐标](/guide/basic/coordinate.md#inner) 转 [本地坐标](/guide/basic/coordinate.md#local) ），支持转换移动距离   |
| [getBoxPointByInner()](/reference/UI/point/index.md#转换内部坐标)                | 获取 box 坐标（ [内部坐标](/guide/basic/coordinate.md#inner) 转 [box 坐标](/guide/basic/coordinate.md#box) ），支持转换移动距离    |
| [getWorldPointByBox()](/reference/UI/point/index.md#转换内部坐标)                | 获取世界坐标（ [box 坐标](/guide/basic/coordinate.md#box) 转 [世界坐标](/guide/basic/coordinate.md#world) ），支持转换移动距离     |
| [getInnerPointByBox()](/reference/UI/point/index.md#转换内部坐标)                | 获取内部坐标（ [box 坐标](/guide/basic/coordinate.md#box) 转 [内部坐标](/guide/basic/coordinate.md#inner) ），支持转换移动距离     |

### 浏览器原生事件的坐标转换方法

| 名称                                                                                                                                 | 描述                                                                                                                                                                      |
| ------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [getWorldPointByClient()](/reference/display/Leafer.md#getworldpointbyclient-clientpoint-iclientpointdata-update-boolean-ipointdata) | 获取 [世界坐标](/guide/basic/coordinate.md#world)（浏览器原生事件的 client 坐标 转 [世界坐标](/guide/basic/coordinate.md#world)），只能在 App 或 Leafer 实例上调用此方法  |
| [getPagePointByClient()](/reference/display/Leafer.md#getworldpointbyclient-clientpoint-iclientpointdata-update-boolean-ipointdata)  | 获取 [page 坐标](/guide/basic/coordinate.md#world)（浏览器原生事件的 client 坐标 转 [page 坐标](/guide/basic/coordinate.md#page)），只能在 App 或 Leafer 实例上调用此方法 |

### 数学计算

### [Matrix 类](/reference/math/Matrix.md) &nbsp; &nbsp; [Point 类](/reference/math/Point.md)

## 下一步

### [获取包围盒](/guide/advanced/bounds.md)
