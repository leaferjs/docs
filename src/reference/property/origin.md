<script setup>
import Case from '/component/Case.vue'
</script>

# origin

围绕原点旋转、缩放元素，同 CSS 的 [transform-origin](https://developer.mozilla.org/zh-CN/docs/Web/CSS/transform-origin)。

想围绕中心点绘制元素，请使用 [around](./around.md)（优先级高）。

暂时与 [图形编辑功能](/plugin/in/editor/) 不能同时使用。

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

## 归属

### [UI](/reference/display/UI.md#围绕中心点)
