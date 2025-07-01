<script setup>
import Case from '/component/Case.vue'
</script>

# SolidPaint 对象

纯色填充对象, 可设置给 [fill](/reference/UI/fill.md) 或 [stroke](/reference/UI/stroke.md) 属性。

<case name="SolidFill"  editor=false></case>

## 关键属性

### type: `string`

填充类型为 `solid`。

### color: [`Color`](/reference/interface/ui/Color.md)

颜色。

## 基础属性

### blendMode?: [`BlendMode`](/reference/UI/blendMode.md)

混合模式，默认为 normal。

### visible?: `boolean`

是否可见，默认为 true。

### opacity?: `number`

不透明度，默认为 1，暂时仅针对 color 为 [颜色对象](/reference/interface/ui/Color.md#rgb) 有效。

## 子描边属性

### style?: `IStrokeStyle`

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

<case name="SolidFill" index=0 editor=false></case>

<<< @/code/property/fill/solid/a.ts
