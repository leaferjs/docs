<script setup>
import Case from '/component/Case.vue'
</script>

# AngularGradient 对象

角度渐变对象, 可设置给 [fill](/reference/UI/fill.md) 或 [stroke](/reference/UI/stroke.md) 属性，暂需浏览器支持`createConicGradient()`方法。

<case name="Angular"  editor=false></case>

## 关键属性

### type: `string`

填充类型为 `radial`。

### from?: [`IAlign`](/api/modules.md#ialign) | [`IUnitPointData`](/api/interfaces/IUnitPointData.md)

渐变的起始控制点, 相对元素的实际内容定位， 默认为 center。

<!-- ```ts
from: {x: 0.5, y: 0.5} // 中心
``` -->

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

from: 'center'

// 坐标点
interface IUnitPointData {
  type?: 'percent' | 'px'
  x: number
  y: number
}

from: {
  type: 'percent',
  x: 0.5, // 50% width  百分比坐标点
  y: 0.5, // 50% height
}

from: {
  x: 50, // 50px 像素值坐标点
  y: 50, // 50px
}
```

### to?: [`IAlign`](/api/modules.md#ialign) | [`IUnitPointData`](/api/interfaces/IUnitPointData.md)

渐变的末端控制点，相对元素的实际内容定位， 默认为 bottom。

<!-- ```ts
to: {x: 0.5, y: 1} // 底部居中
``` -->

### stretch?: `number`

垂直于 from -> to 拉伸，相对图形的宽度比例， 使渐变形成椭圆形， 默认为 1。

### stops: [`ColorStop`](/reference/interface/ui/Color.md#colorstop)[] ｜ [`StringColor`](/reference/interface/ui/Color.md#stringcolor)[]

渐变色标数组。

如果设置纯字符串颜色的数组，将会自动计算 offset。

## 基础属性

### blendMode?: [`BlendMode`](/reference/UI/blendMode.md)

混合模式，默认为 normal。

### visible?: `boolean`

是否可见，默认为 true。

### opacity?: `number`

不透明度，默认为 1，暂时仅针对渐变色标中 color 为 [颜色对象](/reference/interface/ui/Color.md#rgb) 有效。

## 子描边属性

### style?: [`IStrokeStyle`](/api/interfaces/IStrokeStyle.md)

当为元素设置多个描边时，可设置子描边样式 `style` ，用于覆盖 [主描边样式](/reference/UI/stroke.md#描边样式属性)。

可形成蚂蚁线、模拟内中外三层描边等各种效果，[了解具体设置](/reference/UI/stroke.md#子描边属性)。

## 归属

### [UI 元素](/reference/display/UI.md)

## 示例

<case name="Angular" index=0 editor=false></case>

### 默认方向

从中心 -> 底部居中垂直绘制的渐变

<<< @/code/property/fill/angular/a.ts

<case name="Angular" index=2 editor=false></case>

### 控制方向

从左上角 -> 中心呈 45 度绘制的渐变。

<<< @/code/property/fill/angular/from.ts

<case name="Angular" index=1 editor=false></case>

### 拉伸渐变

从中心 -> 右下角 呈 45 度, 且拉伸比例为 0.1 绘制的渐变。

<<< @/code/property/fill/angular/stretch.ts

<case name="Angular" index=6 editor=false></case>

### 设置透明度

一般用于多个填充做叠加效果。

opacity 暂时只对 color 为 [颜色对象](/reference/interface/ui/Color.md#rgb) 有效， 或直接使用 `rgba(255,75,75,0,5)` 字符串颜色。

<<< @/code/property/fill/angular/opacity.ts
