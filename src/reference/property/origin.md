<script setup>
import Case from '/component/Case.vue'
</script>

# origin

围绕原点旋转、缩放元素，同 CSS 的 [transform-origin](https://developer.mozilla.org/zh-CN/docs/Web/CSS/transform-origin)。

想围绕中心点绘制元素，请使用 [around](./around.md)（优先级高）。

## 关键属性

### origin: [`IAlign`](/api/modules.md#ialign) | [`IUnitPointData`](/api/interfaces/IUnitPointData.md)

元素旋转、缩放的原点，相对元素的实际内容定位，基础元素及 Group 均支持。

![方向图](/svg/deriction.svg)

```ts
// 方位
type IAlign =
  | 'top-left'
  | 'top'
  | 'top-right'
  | 'right'
  | 'bottom-right'
  | 'bottom'
  | 'bottom-left'
  | 'left'
  | 'center'

rect.origin = 'center'

// 坐标点
interface IUnitPointData {
  type?: 'percent' | 'px'
  x: number
  y: number
}

rect.origin = {
  type: 'percent',
  x: 0.5, // 50% width  百分比坐标点
  y: 0.5, // 50% height
}

rect.origin = {
  x: 50, // 50px 像素值坐标点
  y: 50, // 50px
}
```

## 示例

<case name="Around" index=0  editor=false></case>

### 设置原点在中心

<<< @/code/property/origin/center.ts

<case name="Around" index=1 editor=false></case>

### 围绕原点缩放 1.5 倍

<<< @/code/property/origin/scale.ts

<case name="Around" index=2 editor=false></case>

### 围绕原点旋转 45 度

<<< @/code/property/origin/rotate.ts

<case name="Around" index=3 editor=false></case>

### 围绕原点倾斜 45 度

<<< @/code/property/origin/skew.ts

## 归属

### [UI](/reference/display/UI.md)
