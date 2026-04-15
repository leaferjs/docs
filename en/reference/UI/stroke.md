<script setup>
import Case from '/component/Case.vue'
</script>

# stroke

Stroke (outline), similar to `border-color` in HTML5.

<case name="Stroke" editor=false></case>

## Key Property

### stroke: `string` | [`Paint`](../interface/ui/Paint) | [`Paint`](../interface/ui/Paint.md)[]

Defines the stroke style.

Supports [solid color](./paint/solid.md), [linear gradient](./paint/linear.md), [radial gradient](./paint/radial.md), [angular gradient](./paint/angular.md), [image pattern](./paint/image.md), etc. Multiple strokes can be layered together.

::: danger Stroke rendering modes

[UI](../display/UI.md) and closed shapes use **inside stroke** by default.
[Path](../display/Path.md) / [Line](../display/Line.md) use **center stroke** by default.
[Text](../display/Text.md) uses **outside stroke** by default.
:::

## Stroke Style Properties

### strokeAlign?: `StrokeAlign`

Alignment of the stroke.

UI and closed shapes default to `inside`, Path / Line default to `center`, Text defaults to `outside`.

```ts
type StrokeAlign = 'inside' | 'center' | 'outside' // inside | center | outside
```

### strokeWidth?: `number`

Stroke width. Defaults to `1`.

### strokeScaleFixed?: `'zoom-in'` | `number` | `boolean`

<del>strokeWidthFixed?: `'zoom-in'` | `false`</del>

Fixes stroke width under global scaling. Defaults to `false`.

When set to `true`, stroke width will not scale with the viewport. Use with caution when stroke width is large (may cause rendering artifacts).

When set to `'zoom-in'` or `1`, stroke width will not scale when zooming in, but will still scale down when zooming out (to prevent overcrowding).

When set to a value between `0` and `1`, stroke width will start scaling down only after the zoom level drops below that threshold.

In this case, it is recommended to use `center` stroke alignment for better performance, and set [hitFill](./hit.md#hitfill-ihittype) to `all` to reduce fill hit testing cost.

### strokeCap?: `StrokeCap`

Stroke line cap style. Defaults to `none`.

```ts
type StrokeCap = 'none' | 'round' | 'square' // none | round | square
```

### strokeJoin?: `StrokeJoin`

Stroke corner join style. Defaults to `miter`.

```ts
type StrokeJoin = 'miter' | 'bevel' | 'round' // miter | bevel | round
```

### dashPattern?: `number[]`

Dash pattern for stroke.

```ts
rect.dashPattern = [20, 10] // [dash length, gap length]
```

### dashOffset: `number`

Offset of the dash pattern.

## Sub-stroke Properties

When multiple strokes are applied, you can use `style` in each stroke item to override the main stroke style.

This enables effects such as marching ants or multi-layer stroke rendering.

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

## Belongs to

### [UI Element](../display/UI.md)

## Example

<case name="SolidStroke" index=0 editor=false></case>

### Solid stroke

::: code-group
<<< @/code/property/stroke/solid/a.ts [Leafer]
<<< @/code/property/stroke/solid/app/a.ts [App]
:::

<case name="GradientStroke" index=0 editor=false></case>

### Gradient stroke

Supports [linear](./paint/linear.md), [radial](./paint/radial.md), [angular](./paint/angular.md) gradients.

::: code-group
<<< @/code/property/stroke/linear/a.ts [Leafer]
<<< @/code/property/stroke/linear/app/a.ts [App]
:::

<case name="ImageStroke" index=0 editor=false></case>

### Image stroke

Image stroke supports cover, contain, crop, and tile modes.

::: code-group
<<< @/code/property/stroke/image/a.ts [Leafer]
<<< @/code/property/stroke/image/app/a.ts [App]
:::

<case name="Strokes" index=0 editor=false></case>

### Multiple strokes

Stroke opacity currently only applies to [color objects](../interface/ui/Color.md#rgb) and images.

::: code-group
<<< @/code/property/stroke/mutil/a.ts [Leafer]
<<< @/code/property/stroke/mutil/app/a.ts [App]
:::

<case name="Stroke" index=3 editor=false></case>

### Dashed stroke

::: code-group
<<< @/code/property/stroke/dash/a.ts [Leafer]
<<< @/code/property/stroke/dash/app/a.ts [App]
:::
