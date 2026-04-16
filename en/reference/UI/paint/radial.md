<script setup>
import Case from '/component/Case.vue'
</script>

# RadialGradient Object

Radial gradient object, can be assigned to the [fill](../fill.md) or [stroke](../stroke.md) property.

<case name="Radial" editor=false></case>

## Key Properties

### type: `string`

The fill type is `radial`.

### from?: [`IAlign`](../../../api/modules.md#ialign) | [`IUnitPointData`](../../../api/interfaces/IUnitPointData.md)

The starting control point of the gradient, positioned relative to the actual content of the element. Default is center.

<!-- ```ts
from: {x: 0.5, y: 0.5} // 中心
``` -->

![Direction Diagram](/svg/deriction.svg)

```ts
// Alignment
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

// Coordinate point
interface IUnitPointData {
  type?: 'percent' | 'px'
  x: number
  y: number
}

from: {
  type: 'percent',
  x: 0.5, // 50% width  percentage coordinate point
  y: 0.5, // 50% height
}

from: {
  x: 50, // 50px pixel coordinate point
  y: 50, // 50px
}
```

### to?: [`IAlign`](../../../api/modules.md#ialign) | [`IUnitPointData`](../../../api/interfaces/IUnitPointData.md)

The ending control point of the gradient, positioned relative to the actual content of the element. Default is bottom.

<!-- ```ts
to: {x: 0.5, y: 1} // 底部居中
``` -->

### stretch: `number`

Stretch perpendicular to from -> to, relative to the width ratio of the shape, forming an elliptical gradient. Default is 1.

### stops: [`ColorStop`](../../interface/ui/Color.md#colorstop)[] ｜ [`StringColor`](../../interface/ui/Color.md#stringcolor)[]

Array of gradient color stops.

If an array of pure string colors is provided, the offset will be calculated automatically.

## Basic Properties

### blendMode?: [`BlendMode`](../blendMode.md)

Blend mode, default is normal.

### visible?: `boolean`

Whether it is visible, default is true.

### opacity?: `number`

Opacity, default is 1. If the color in gradient stops is not a [color object](../../interface/ui/Color.md#rgb), the [color plugin](/plugin/in/color/) must be installed to take effect.

## Sub-stroke Properties

### style?: [`IStrokeStyle`](../../../api/interfaces/IStrokeStyle.md)

When multiple strokes are set for an element, you can configure the sub-stroke style `style` to override the [main stroke style](../stroke.md#描边样式属性).

This can create effects such as dashed lines, or simulate inner, middle, and outer triple strokes. [Learn more](../stroke.md#子描边属性).

## 归属

### [UI Element](../../display/UI.md)

## Examples

<case name="Radial" index=0 editor=false></case>

### Default Direction

Gradient drawn vertically from center -> bottom center.

:::code-group
<<< @/code/property/fill/radial/a.ts [Leafer]
<<< @/code/property/fill/radial/app/a.ts [App]
:::

<case name="Radial" index=1 editor=false></case>

### Control Direction

Gradient drawn at 45 degrees from top-left -> bottom-right.

:::code-group
<<< @/code/property/fill/radial/from.ts [Leafer]
<<< @/code/property/fill/radial/app/from.ts [App]
:::

<case name="Radial" index=2 editor=false></case>

### Stretch Gradient

Gradient drawn at 45 degrees from center -> bottom-right, with a stretch ratio of 0.5.

:::code-group
<<< @/code/property/fill/radial/stretch.ts [Leafer]
<<< @/code/property/fill/radial/app/stretch.ts [App]
:::

<case name="Radial" index=6 editor=false></case>

### Set Opacity

Generally used for stacking multiple fills.

When color is a [color object](../../interface/ui/Color.md#rgb), opacity takes effect directly. If it is not a [color object](../../interface/ui/Color.md#rgb), the [color plugin](/plugin/in/color/) must be installed, or directly use a string color like `rgba(255,75,75,0,5)`.

:::code-group
<<< @/code/property/fill/radial/opacity.ts [Leafer]
<<< @/code/property/fill/radial/app/opacity.ts [App]
:::
