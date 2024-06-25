<script setup>
import Case from '/component/Case.vue'
</script>

# Line

绘制横线、斜线、竖线、折线、平滑曲线。

<case name="Line"></case>

## 关键属性

### width: `number`

直线的长度。

### rotation: `number`

[旋转角度](../interface/math/Math#rotation)， 取值范围: -180 ～ 180。

```ts
// 竖线
width: 100
rotation: 90
```

### 计算属性

### toPoint: [IPointData](../interface/math/Math#ipointdata)

目标点（相对元素 **起点** 的坐标）， 自动换算出 `width` 与 `rotation`。

```ts
line.toPoint = { x: 0, y: 100 }

console.log(line.toPoint) // {x: 0, y: 100})  会根据 width 与 rotation 自动换算
```

## points 模式

可通过 points 定义折线。

### points: `number`[]

通过坐标组 [ x1,y1, x2,y2, ...] 绘制折线。

### curve: `boolean` | `number`

是否转换为平滑路径，默认为 false。

可设置 0 ～ 1 控制曲率，默认为 0.5。

### closed: `boolean`

是否自动闭合路径，默认为 false

## 路径模式

### [path 优先模式](/reference/property/path.md)

## 圆角属性

### cornerRadius: `number`

圆角大小，使折线拐角处变的圆滑。

## 继承

### [UI](./UI.md)

## API

### [Line](/api/classes/Line.md)

## 示例

<case name="Line" index=0></case>

### 绘制横线

<<< @/code/display/Line/horizontal.ts

<case name="Line" x = 5 index=1></case>

### 绘制到目标点的直线

<<< @/code/display/Line/lineto.ts

<case name="Line" x = 5 index=2></case>

### 绘制斜线

<<< @/code/display/Line/line.ts

<case name="Line" x = 5 index=6></case>

### 绘制竖线

<<< @/code/display/Line/vertical.ts

<case name="Line" x = 5 index=8></case>

### 绘制折线

<<< @/code/display/Line/points.ts

<case name="Line" x = 5 index=3></case>

### 绘制圆角折线

<<< @/code/display/Line/corner.ts

<case name="Line" x = 5 index=4></case>

### 绘制曲线

<<< @/code/display/Line/curve.ts

<case name="Line" x = 5 index=7></case>

### 绘制 0.2 曲率的曲线

<<< @/code/display/Line/curve-number.ts

<case name="Line" x = 5 index=5></case>

### 绘制趋势图

<<< @/code/display/Line/chart.ts
