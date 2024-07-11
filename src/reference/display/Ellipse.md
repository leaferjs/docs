<script setup>
import Case from '/component/Case.vue'
</script>

# Ellipse

绘制圆、圆环、扇形圆环、扇形、弧线、椭圆，想从中心点绘制，可以了解 [around](/reference/property/around.md)。

<case name="Ellipse" editor=false></case>

## 关键属性

### width: `number`

X 轴直径。

### height: `number`

Y 轴直径。

```ts
// 圆
width: 100
height: 100

// 椭圆
width: 50
height: 100
```

### startAngle: `number`

弧形的起始[角度](../interface/math/Math#rotation), 取值范围为 -180 ～ 180。

### endAngle: `number`

弧形的结束[角度](../interface/math/Math#rotation), 取值范围为 -180 ～ 180。

### innerRadius: `number`

内半径比例, 取值范围为 0.0 ～ 1.0。

```ts
// 扇形
startAngle: -60
endAngle: 180

// 圆环
innerRadius: 0.5
```

## 继承

### [UI](./UI.md)

## API

### [Ellipse](/api/classes/Ellipse.md)

## 示例

<case name="Ellipse" index=0 editor=false></case>

### 绘制圆

圆心位于 `width` / 2, `height` / 2 处。

<<< @/code/display/Ellipse/circle.ts

<case name="Ellipse" index=1 editor=false></case>

### 绘制圆环

<<< @/code/display/Ellipse/ring.ts

<case name="Ellipse" index=2 editor=false></case>

### 绘制扇形圆环

<<< @/code/display/Ellipse/sectorRing.ts

<case name="Ellipse" index=3 editor=false></case>

### 绘制扇形

<<< @/code/display/Ellipse/sector.ts

<case name="Ellipse" index=4 editor=false></case>

### 绘制圆角弧线

<<< @/code/display/Ellipse/arc.ts

<case name="Ellipse" index=5 editor=false></case>

### 绘制椭圆

<<< @/code/display/Ellipse/ellipse.ts
