<script setup>
import Case from '/component/Case.vue'
</script>

# 设置样式

<case name="Rect" index=8 editor=false></case>

## 初始化样式

创建一个带虚线边框样式的矩形。

<<< @/code/basic/style/border.ts

## 修改样式

::: danger 注意事项
元素只能检测到 **第一层级属性** 的变化，如：修改 rect.fill.url = url 是不会渲染更新的。
:::

```ts
// #修改样式 [标准修改]
rect.stroke = 'blue'
rect.strokeWidth = 4
```

## 简洁修改

```ts
// #修改样式 [简洁修改]
rect.set({
  stroke: 'blue',
  strokeWidth: 4,
})
```

## 重置样式

```ts
// #修改样式 [重置样式]
rect.reset()

// 重置为新样式
rect.reset({
  stroke: 'blue',
  strokeWidth: 4,
})
```

## 使用 JSON

<<< @/code/property/json/set.ts

## 了解元素外观样式

### [fill](/reference/property/fill.md)

填充，类似于 HTML5 中的 background-color，或文字的 color。

支持 [纯色](/reference/property/paint/solid.md)、 [线性渐变](/reference/property/paint/linear.md)、[径向渐变](/reference/property/paint/radial.md)、[角度渐变](/reference/property/paint/angular.md)、[图案填充](/reference/property/paint/image.md) 等类型， 支持多个填充同时叠加。

<case name="Fill"  editor=false></case>

<case name="ImageFill" editor=false></case>

<<< @/code/property/fill/linear/a.ts

### [stroke](/reference/property/stroke.md)

描边，类似于 HTML5 中的 border-color。

支持 [纯色](/reference/property/paint/solid.md)、 [线性渐变](/reference/property/paint/linear.md)、[径向渐变](/reference/property/paint/radial.md)、[角度渐变](/reference/property/paint/angular.md)、[图案](/reference/property/paint/image.md) 等类型， 支持多个描边同时叠加。

<case name="Stroke" editor=false></case>

<<< @/code/property/stroke/linear/a.ts

支持进一步设置描边样式。

| 名称                                                                    | 描述                             | 值                                |
| ----------------------------------------------------------------------- | -------------------------------- | --------------------------------- |
| [strokeAlign](/reference/property/stroke#strokealign-strokealign)       | 描边的对齐方式                   | 'inside' 、 'center' 、 'outside' |
| [strokeWidth](/reference/property/stroke#strokewidth-number)            | 描边的宽度                       | `number`                          |
| [strokeWidthFixed](/reference/property/stroke#strokewidthfixed-boolean) | 是否固定线宽（不受视图放大影响） | `boolean`                         |
| [strokeCap](/reference/property/stroke#strokecap-strokecap)             | 描边的端点形状                   | 'none' 、 'round' 、'square'      |
| [strokeJoin](/reference/property/stroke#strokejoin-strokejoin)          | 描边的拐角处理                   | 'miter' 、 'bevel' 、 'round'     |
| [dashPattern](/reference/property/stroke#dashpattern-number)            | 虚线描边                         | `number`[]                        |
| [dashOffset](/reference/property/stroke#dashoffset-number)              | 虚线描边的起点偏移值             | `number`                          |

<<< @/code/basic/style/stroke-options.ts

### [shadow](/reference/property/shadow)

元素的外阴影，支持多个阴影叠加、boxShadow 效果。

<case name="Shadow" editor=false></case>

<<< @/code/property/shadow/offset.ts

### [innerShadow](/reference/property/innerShadow)

元素的内阴影，支持多个内阴影叠加。

<case name="InnerShadow" editor=false></case>

<<< @/code/property/innerShadow/blur.ts

### [mask](/reference/property/mask)

遮罩功能，将 Group 内的某个元素指定为遮罩，可以实现复杂的裁剪效果， 支持 5 种遮罩类型。

<case name="Mask" editor=false></case>

<<< @/code/property/mask/ui.ts

### [eraser](/reference/property/eraser)

擦除功能，将 Group 内的某个元素指定为橡皮擦，可实现复杂的擦除效果，支持 2 种擦除类型。

<case name="Eraser" editor=false></case>

<<< @/code/property/eraser/ui.ts

## 元素可见性

### [visible](/reference/property/visible)

元素的可见性，可用于隐藏元素。

```ts
// #隐藏元素
rect.visible = false
```

### [opacity](/reference/property/opacity)

元素的不透明度。

```ts
// #设置不透明度
rect.opacity = 0.5
```

## 高级定位属性

### [origin](/reference/property/origin)

围绕原点旋转、缩放元素，同 CSS 的 [transform-origin](https://developer.mozilla.org/zh-CN/docs/Web/CSS/transform-origin)。

<case name="Around"   editor=false></case>

<<< @/code/property/origin/rotate.ts

### [around](/reference/property/around)

围绕 around 点绘制元素，类似于游戏引擎中的 anchor 锚点功能。

与 [origin](/reference/property/origin) 的区别： 多了一个步骤，会把元素内部的 around 点移动到元素的 (x,y) 坐标。

![围绕中心点绘制](/svg/around.svg?d=0131)

<<< @/code/property/around/rotate.ts

## 了解元素通用属性

<!--@include: ../../reference/api/UI/property.md-->

## 了解元素通用方法

<!--@include: ../..//reference/api/UI/method.md-->

## 下一步

### [事件处理](/guide/basic/event)
