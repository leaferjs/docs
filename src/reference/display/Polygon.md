<script setup>
import Case from '/component/Case.vue'
</script>

# Polygon

绘制三角形、菱形、五边形、正多边形、自由多边形、平滑多变形。

<case name="Polygon" editor=false></case>

<br/>

::: tip 继承
Polygon &nbsp;>&nbsp; [UI](./UI.md)
:::

## 关键属性

### width: `number`

正多边形的宽度。

### height: `number`

正多边形的高度。

### sides: `number`

正多边形的边数，取值范围为 >=3。

内部逻辑：在一个圆上每 (360 / sides) 度取一个点，再将点连成线，组成一个正多边形。

```ts
// 五边形
sides: 5
```

## points 模式

可通过 points 定义自由多边形。

### points: `number`[] | [IPointData](../interface/math/Math#ipointdata)[]

可通过坐标数组 [ x1,y1, x2,y2, ...] 绘制自由多边形（高性能）。

或通过坐标对象数组 [ {x, y}, {x, y} ...] 绘制自由多边形 （可读性高，性能一般）。

### curve: `boolean` | `number`

是否转换为平滑路径，默认为 false。

可设置 0 ～ 1 控制曲率，默认为 0.5。

## 路径模式

### [path 优先模式](/reference/property/path.md)

## 圆角属性

### cornerRadius: `number`

圆角大小，使图形拐角处变的圆滑。

<!-- ## 继承元素

### [UI](./UI.md) -->

<!-- ## API

### [Polygon](/api/classes/Polygon.md) -->

## 示例

<case name="Polygon" index=0 editor=false></case>

### 绘制三角形

<<< @/code/display/Polygon/triangle.ts

<case name="Polygon" index=1 editor=false></case>

### 绘制五边形

<<< @/code/display/Polygon/pentagon.ts

<case name="Polygon" index=2 editor=false></case>

### 绘制圆角六边形

<<< @/code/display/Polygon/corner.ts

<case name="Polygon" index=3 editor=false></case>

### 绘制自由多边形

<<< @/code/display/Polygon/points.ts

<case name="Polygon" index=4 editor=false></case>

### 绘制平滑多边形

<<< @/code/display/Polygon/curve.ts

<case name="Polygon" index=6 editor=false></case>

### 绘制 0.2 曲率的平滑多边形

<<< @/code/display/Polygon/curve-number.ts

<case name="Polygon" index=5 editor=false></case>

### 绘制趋势图

<<< @/code/display/Polygon/chart.ts
