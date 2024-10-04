<script setup>
import Case from '/component/Case.vue'
</script>

# around

围绕 around 点绘制元素，类似游戏引擎中的 anchor 锚点功能。

相比 [origin](./origin.md) 多一个步骤，会把元素内容的 around 点移动到起始坐标。

图中将元素内容的 around 点 ， 移动到元素的起始坐标对齐放置并旋转 30 度。

![围绕中心点绘制](/svg/around.svg)

## 关键属性

### around: [`IAlign`](/api/modules.md#ialign) | [`IUnitPointData`](/api/interfaces/IUnitPointData.md)

元素的 around 点，相对元素的实际内容定位，基础元素及 Group 均支持。

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

rect.around = 'center'

// 坐标点
interface IUnitPointData {
  type?: 'percent' | 'px'
  x: number
  y: number
}

rect.around = {
  type: 'percent',
  x: 0.5, // 50% width  百分比坐标点
  y: 0.5, // 50% height
}

rect.around = {
  x: 50, // 50px 像素值坐标点
  y: 50, // 50px
}
```

## 归属

### [UI](/reference/display/UI.md#围绕中心点)

## 示例

<case name="Around" index=0  editor=false></case>

### 围绕坐标(50,50) 为中心进行绘制

<<< @/code/property/around/center.ts

<case name="Around" index=1 editor=false></case>

### 旋转 45 度

<<< @/code/property/around/rotate.ts

<case name="Around" index=2 editor=false></case>

### around 点在矩形右下角

<<< @/code/property/around/right.ts
