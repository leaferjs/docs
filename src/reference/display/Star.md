<script setup>
import Case from '/component/Case.vue'
</script>

# Star

绘制车标、星光、五角星、多角星形。

<case name="Star" editor=false></case>

## 关键属性

### width: `number`

星形的宽度。

### height: `number`

星形的高度。

### corners: `number`

星形的角数，取值范围为 >=3。

内部逻辑：在内外圆上每 (360 / corners) 度取一个点，再将点连成线，组成一个多角星形。

### innerRadius: `number`

内半径比例，默认 0.382，取值范围为 0.0 ～ 1.0。

```ts
// 五角星
corners: 5
innerRadius: 0.382
```

## 圆角属性

### cornerRadius: `number`

圆角大小，使图形拐角处变的圆滑。

## 继承

### [UI](./UI.md)

<!-- ## API

### [Star](/api/classes/Star.md) -->

## 示例

<case name="Star" index=0 editor=false></case>

### 绘制车标

<<< @/code/display/Star/three.ts

<case name="Star" index=1 editor=false></case>

### 绘制星光

<<< @/code/display/Star/light.ts

<case name="Star" index=2 editor=false></case>

### 绘制五角星

<<< @/code/display/Star/star.ts

<case name="Star" index=5 editor=false></case>

### 绘制圆角星形

<<< @/code/display/Star/corner.ts
