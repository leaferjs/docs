<script setup>
import Case from '/component/Case.vue'
</script>

# stroke

Stroke (outline), similar to `border-color` in HTML5.

<case name="Stroke" editor=false></case>

## Key Property

### stroke: `string` | [`Paint`](../interface/ui/Paint) | [`Paint`](../interface/ui/Paint.md)[]

描边。

Supports [solid color](./paint/solid.md), [linear gradient](./paint/linear.md), [radial gradient](./paint/radial.md), [angular gradient](./paint/angular.md), [image pattern](./paint/image.md), etc. Multiple strokes can be layered together.

:::danger Stroke rendering modes

[UI](../display/UI.md) and closed shapes use **inside stroke** by default.
[Path](../display/Path.md) / [Line](../display/Line.md) use **center stroke** by default.
[Text](../display/Text.md) uses **outside stroke** by default.
:::

## Stroke Style Properties

### strokeAlign?: `StrokeAlign`

UI and closed shapes default to `inside`, Path / Line default to `center`, Text defaults to `outside`.

```tsx
type StrokeAlign = 'inside' | 'center' | 'outside' // inside | center | outside
```

### strokeWidth?: `number`

Stroke width. Defaults to `1`.

### strokeScaleFixed?: `'zoom-in'` | `number` | `boolean`

<del>strokeWidthFixed?: `'zoom-in'` | `false`</del>

Fixes stroke width under global scaling. Defaults to `false`.

When set to `true`, stroke width will not scale with the viewport. Use with caution when stroke width is large (may cause rendering artifacts).

When set to `'zoom-in'` or `1`, stroke width will not scale when zooming in, but will still scale down when zooming out (to prevent overcrowding).

设置 0～1 之间的小数时，表示在画面缩小到这个缩放值的时候，线宽才开始变小。

在此场景下，建议 strokeAlign 使用高性能的居中描边， 另 [hitFill](./hit.md#hitfill-ihittype) 为 all 可节省填充操作。

### strokeCap?: `StrokeCap`

描边的端点形状，默认为 none。

```ts
type StrokeCap = 'none' | 'round' | 'square' // none | round | square
```

### strokeJoin?: `StrokeJoin`

Stroke corner join style. Defaults to `miter`.

```ts
type StrokeJoin = 'miter' | 'bevel' | 'round' // miter | bevel | round
```

### dashPattern?: `number[]`

虚线描边的数值。

```ts
rect.dashPattern = [20, 10] // [dash length, gap length]
```

### dashOffset: `number`

虚线描边的起点偏移值。

## Sub-stroke Properties

当为元素设置多个描边时，可设置子描边样式 `style` ，用于覆盖 [主描边样式](./stroke.md#描边样式属性)。

可形成蚂蚁线、模拟内中外三层描边等各种效果。

All stroke types support sub-style overrides: [solid](./paint/solid.md#sub-stroke-properties), [linear](./paint/linear.md#sub-stroke-properties), [radial](./paint/radial.md#sub-stroke-properties), [angular](./paint/angular.md#sub-stroke-properties), [image](./paint/image.md#sub-stroke-properties).

```ts
interface IStrokeStyle {
  strokeWidth?: number
  strokeScaleFixed?: false
  strokeCap?: 'none' | 'round' | 'square'
  strokeJoin?: 'miter' | 'bevel' | 'round'
  dashPattern?: number[]
  dashOffset?: number
}

// marching ants effect
rect.stroke = [
  { type: 'solid', color: 'white' },
  { type: 'solid', color: 'black', style: { dashPattern: [3, 3] } },
]

// simulate multi-layer stroke
rect.stroke = [
  { type: 'solid', color: 'blue', style: { strokeWidth: 10 } },
  { type: 'solid', color: 'black', style: { strokeWidth: 5 } },
  { type: 'solid', color: 'white' },
]
```

## 归属

### [UI Element](../display/UI.md)

## Example

<case name="SolidStroke" index=0 editor=false></case>

### 纯色描边

:::code-group
<<< @/code/property/stroke/solid/a.ts [Leafer]
<<< @/code/property/stroke/solid/app/a.ts [App]
:::

<case name="GradientStroke" index=0 editor=false></case>

### Gradient stroke

Supports [linear](./paint/linear.md), [radial](./paint/radial.md), [angular](./paint/angular.md) gradients.

:::code-group
<<< @/code/property/stroke/linear/a.ts [Leafer]
<<< @/code/property/stroke/linear/app/a.ts [App]
:::

<case name="ImageStroke" index=0 editor=false></case>

### 图案描边

[图案描边](./paint/image.md) 支持 覆盖、适应、裁剪、平铺等模式。

:::code-group
<<< @/code/property/stroke/image/a.ts [Leafer]
<<< @/code/property/stroke/image/app/a.ts [App]
:::

<case name="Strokes" index=0 editor=false></case>

### Multiple strokes

Stroke opacity currently only applies to [color objects](../interface/ui/Color.md#rgb) and images.

:::code-group
<<< @/code/property/stroke/mutil/a.ts [Leafer]
<<< @/code/property/stroke/mutil/app/a.ts [App]
:::

<case name="Stroke" index=3 editor=false></case>

### 绘制虚线

:::code-group
<<< @/code/property/stroke/dash/a.ts [Leafer]
<<< @/code/property/stroke/dash/app/a.ts [App]
:::
