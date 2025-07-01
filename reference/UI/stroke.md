<script setup>
import Case from '/component/Case.vue'
</script>

# stroke

描边，类似于 HTML5 中的 border-color。

<case name="Stroke" editor=false></case>

## 关键属性

### stroke: `string` | [`Paint`](../interface/ui/Paint) ｜ [`Paint`](../interface/ui/Paint.md)[]

描边。

支持 [纯色](/reference/UI/paint/solid.md)、 [线性渐变](/reference/UI/paint/linear.md)、[径向渐变](/reference/UI/paint/radial.md)、[角度渐变](/reference/UI/paint/angular.md)、[图案](/reference/UI/paint/image.md) 等类型， 支持多个描边同时叠加。

:::danger 描边方式

[UI](/reference/display/UI.md) 和闭合类图形 默认为 内描边，[Path](../display/Path.md) / [Line](../display/Line.md) 默认为 居中描边, [Text](../display/Text.md) 默认为 外描边。
:::

## 描边样式属性

### strokeAlign?: `StrokeAlign`

描边的对齐方式，[UI](/reference/display/UI.md) 和闭合类图形 默认为 inside，[Path](../display/Path.md) / [Line](../display/Line.md) 默认为 center, [Text](../display/Text.md) 默认为 outside。

```tsx
type StrokeAlign = 'inside' | 'center' | 'outside' //  内部  |  居中 ｜ 外部
```

### strokeWidth?: `number`

描边的宽度, 默认为 1。

### strokeWidthFixed?: `boolean`

是否固定线宽，默认为 false。

固定线宽后，当画面放大时，线宽不会跟随放大，画面缩小时仍会跟随缩小（防止堆成一团）。

在此场景下，建议 strokeAlign 使用高性能的居中描边， 另 [hitFill](/reference/UI/hit.md#hitfill-ihittype) 为 all 可节省填充操作。

### strokeCap?: `StrokeCap`

描边的端点形状，默认为 none。

```ts
type StrokeCap = 'none' | 'round' | 'square' // 无 | 圆形 | 方形
```

### strokeJoin?: `StrokeJoin`

描边的拐角处理，默认为 miter 。

```ts
type StrokeJoin =  'miter' ｜ 'bevel' | 'round' //  直角 ｜ 平角 ｜ 圆角
```

### dashPattern?: `number`[]

虚线描边的数值。

```ts
rect.dashPattern = [20, 10] // [线段，间隙]
```

### dashOffset: `number`

虚线描边的起点偏移值。

## 子描边属性

当为元素设置多个描边时，可设置子描边样式 `style` ，用于覆盖 [主描边样式](/reference/UI/stroke.md#描边样式属性)。

可形成蚂蚁线、模拟内中外三层描边等各种效果。

[纯色](/reference/UI/paint/solid.md#子描边属性)、 [线性渐变](/reference/UI/paint/linear.md#子描边属性)、[径向渐变](/reference/UI/paint/radial.md#子描边属性)、[角度渐变](/reference/UI/paint/angular.md#子描边属性)、[图案](/reference/UI/paint/image.md#子描边属性) 等类型均支持子描边样式。

```ts
interface IStrokeStyle {
    strokeWidth?: number // 描边的宽度
    strokeWidthFixed?: boolean // 是否固定线宽，不随画布视图放大
    strokeCap?: 'none' | 'round' | 'square' // 无 | 圆形 | 方形 (描边的端点形状)
    strokeJoin?: 'miter' ｜ 'bevel' | 'round' //  直角 ｜ 平角 ｜ 圆角 (描边的拐角处理)
    dashPattern?: number[] // 虚线描边的数值
    dashOffset?: number // 虚线描边的起点偏移值
}

// 蚂蚁线效果
rect.stroke = [
    {type: 'solid', color: 'white'}, // 第二个描边为虚线
    {type: 'solid', color: 'black', style: {  dashPattern: [3, 3] }}
]

// 模拟内中外三层描边效果
rect.stroke = [
    {type: 'solid', color: 'white'}, // 多个描边宽度
    {type: 'solid', color: 'black', style: {  strokeWidth: 5 }},
    {type: 'solid', color: 'blue', style: {  strokeWidth: 10 }}
]
```

## 归属

### [UI 元素](/reference/display/UI.md)

## 示例

<case name="SolidStroke" index=0  editor=false></case>

### 纯色描边

<<< @/code/property/stroke/solid/a.ts

<case name="GradientStroke" index=0  editor=false></case>

### 渐变描边

支持 [线性渐变](./paint/linear.md)、[径向渐变](./paint/radial.md)、[角度渐变](./paint/angular.md) 等类型。

<<< @/code/property/stroke/linear/a.ts

<case name="ImageStroke" index=0  editor=false></case>

### 图案描边

[图案描边](./paint/image.md) 支持 覆盖、适应、裁剪、平铺等模式。

<<< @/code/property/stroke/image/a.ts

<case name="Strokes" index=0  editor=false></case>

### 多个描边叠加

描边的 opacity 暂时仅针对 [颜色对象](/reference/interface/ui/Color.md#rgb) 和图片有效。

<<< @/code/property/stroke/mutil/a.ts

<case name="Stroke" index=3  editor=false></case>

### 绘制虚线

<<< @/code/property/stroke/dash/a.ts
