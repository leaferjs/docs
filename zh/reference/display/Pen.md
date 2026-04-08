<script setup>
import Case from '/component/Case.vue'
</script>

# Pen 元素

像绘画一样，快速画出不同样式的路径组合，支持 Canvas 2D 绘制路径的 [API 方法](/reference/display/Pen.md#绘制路径)。

<case name="Pen" editor=false></case>

<br/>

::: tip 继承
Pen &nbsp;>&nbsp; [Group](./Group.md) &nbsp;>&nbsp; [UI](./UI.md)
:::

## 关键属性

### pathElement：[`Path`](./Path.md)

当前子路径元素，setStyle() 自动创建。

## 关键方法

### setStyle ( data: `IPathInputData`)

设置画笔的样式，实际上是创建了一条 [子路径](./Path.md) 待用。

先为画笔设置样式，再绘制路径，支持 [Path](./Path.md) 和 [UI](./UI.md) 的所有属性样式。

### add ( ui: [`UI`](./UI.md))

添加图形元素。

### clear ( )

清空所有绘制的内容（移除 + 销毁）。

## 绘制路径

类似 Canvas 2D 绘制路径的方法， 涉及到角度单位，统一使用度数 -180 ～ 180（0 ～ 360）

### clearPath ( )

用于清空当前的路径数据（Pen 只清空最近一次 setStyle() 之后的路径数据，之前的路径不受影响），是 beginPath() 的别名，更具语义化一些。

### moveTo ( )

moveTo(x, y)

起点: 将起始点移动到 (x, y) 坐标。

### lineTo ( )

lineTo(x, y)

画直线: 从上一个点连接到 (x, y) 坐标。

### bezierCurveTo ( )

bezierCurveTo(x1, y1, x2, y2, x, y)

画三次贝赛尔曲线: 从上一个点连接到 (x, y) 坐标。(x1, y1)、(x2, y2)为第一个和第二个控制点。

### quadraticCurveTo ( )

quadraticCurveTo(x1, y1, x, y)

画二次贝赛尔曲线: 从上一个点连接到 (x, y) 坐标。(x1, y1) 为控制点。

### rect ( )

rect(x, y, width, height)

画矩形。

### roundRect ( )

roundRect(x, y, width, height, cornerRadius: `number` | `number`[])

画圆角矩形。

### ellipse ( )

ellipse(x, y, radiusX, radiusY, rotation?, startAngle?, endAngle?, anticlockwise?: `boolean`)

画椭圆、椭圆弧: 圆心在（x, y）坐标，半径为 (radiusX, radiusY)，按 anticlockwise（默认为顺时针） 方向，从起始角度 [startAngle](../interface/math/Math.md#rotation) 绘制到结束角度 [endAngle](../interface/math/Math.md#rotation), 若省略角度，将创建椭圆。

### arc ( )

arc(x, y, radius, startAngle?, endAngle?, anticlockwise?: `boolean`)

画圆、圆弧: 圆心在（x, y）坐标，半径为 radius，按 anticlockwise（默认为顺时针） 方向，从起始角度 [startAngle](../interface/math/Math.md#rotation) 绘制到结束角度 [endAngle](../interface/math/Math.md#rotation)，若省略角度，将创建圆。

### arcTo ( )

arcTo(x1, y1, x2, y2, radius)

画切线圆弧: 在控制点 1 (x1, y1) 与上一个点 、控制点 1 (x1, y1) 与控制点 2 (x2, y2)构成的两条切线之间画出半径为 radius 的圆弧。

### closePath ( )

闭合路径。

### 新增方法

### drawEllipse ( ) <Badge type="tip" text="new" />

drawEllipse(x, y, radiusX, radiusY, rotation?, startAngle?, endAngle?, anticlockwise?)

先 moveTo 至椭圆起始点，再 [ellipse()](#ellipse)，使之断开与前面路径的连接， 保持 ellipse 的独立性。

### drawArc ( ) <Badge type="tip" text="new" />

drawArc(x, y, radius, startAngle?, endAngle?, anticlockwise?)

先 moveTo 至圆弧起始点，再 [arc()](#arc)，使之断开与前面路径的连接， 保持 arc 的独立性。

### drawPoints ( ) <Badge type="tip" text="new" />

drawPoints(points, curve?, close?)

通过坐标组 points [ x,y, x,y, x,y ...] 或 [ {x, y}, {x, y} ...] 绘制折线。

curve 表示转换为平滑曲线，设置 0 ～ 1 控制曲率，或设置 true 代表 0.5。

close 表示是否闭合折线。

<!-- ## 继承元素

### [Group](./Group.md) -->

<!--
## API

### [Pen](/api/classes/Pen.md) -->

## 示例

<case name="Pen" index=0 editor=false></case>

### 画出不同颜色的形状

::: code-group
<<< @/code/display/Pen/color.ts [Leafer]
<<< @/code/display/Pen/app/color.ts [App]
:::

<case name="Pen" index=2 editor=false></case>

### 画曲线

::: code-group
<<< @/code/display/Pen/line.ts [Leafer]
<<< @/code/display/Pen/app/line.ts [App]
:::

<case name="Pen" index=3 editor=false></case>

### 结合图形组件

::: code-group
<<< @/code/display/Pen/add.ts [Leafer]
<<< @/code/display/Pen/app/add.ts [App]
:::

<case name="Pen" index=4 editor=false></case>

### 结合图片

::: code-group
<<< @/code/display/Pen/image.ts [Leafer]
<<< @/code/display/Pen/app/image.ts [App]
:::

<case name="Pen" index=5 editor=false></case>

### 结合文字

::: code-group
<<< @/code/display/Pen/text.ts [Leafer]
<<< @/code/display/Pen/app/text.ts [App]
:::
