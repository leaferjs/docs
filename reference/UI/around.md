<script setup>
import Case from '/component/Case.vue'
</script>

# around

围绕 around 点绘制元素，类似于游戏引擎中的 anchor 锚点功能。

![围绕中心点绘制](/svg/around.svg?d=0131)

图中将元素内部的 around 坐标点(中心位置) ， 移动到元素的 (x,y) 坐标对齐放置并旋转 30 度。

与 [origin](/reference/UI/origin.md) 的区别： 多了一个步骤，会把元素内部的 around 点移动到元素的 (x,y) 坐标。

## 关键属性

### around: [`IAlign`](/api/modules.md#ialign) | [`IUnitPointData`](/api/interfaces/IUnitPointData.md)

元素内部的 around 点，相对元素的实际内容定位，基础元素及 Group 均支持。

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

**保持原位不动，切换元素的 around 点： [localTransform](/reference/UI/transform.md#localtransform-imatrixdata) 、[setTransform()](/reference/UI/transform.md#settransform-matrix-imatrixdata)**

```ts
// 多边形原始 around
polygon.around = 'center'

// 切换 around 点
const transform = { ...polygon.localTransform } // 采集  transform

polygon.around = 'right'

polygon.setTransform(transform) // 重设 transform，会自动处理 around 的变化
```

## 归属

### [UI 元素](/reference/display/UI.md)

## 示例

<case name="Around" index=0  editor=false></case>

### 围绕坐标(50,50) 为中心进行绘制

<<< @/code/property/around/center.ts

<case name="Around" index=1 editor=false></case>

### 围绕坐标(50,50) 为中心缩放 1.5 倍

<<< @/code/property/around/scale.ts

<case name="Around" index=2 editor=false></case>

### 围绕坐标(50,50) 为中心旋转 45 度

<<< @/code/property/around/rotate.ts

<case name="Around" index=3 editor=false></case>

### 围绕坐标(50,50) 为中心倾斜 45 度

<<< @/code/property/around/skew.ts

<case name="Around" index=4 editor=false></case>

### around 坐标点(50,50) 在矩形的右下角

<<< @/code/property/around/right.ts
