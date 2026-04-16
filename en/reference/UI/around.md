<script setup>
import Case from '/component/Case.vue'
</script>

# around

Draw elements around the `around` point, similar to the anchor point feature in game engines.

![Draw around center point](/svg/around.svg?d=0131)

In the diagram, the internal `around` coordinate point of the element (center position) is moved so that it aligns with the element’s `(x, y)` position, and then rotated by 30 degrees.

Difference from [origin](./origin.md): there is an extra step where the internal `around` point is moved to the element’s `(x, y)` coordinate.

## Key Properties

### around: [`IAlign`](../../api/modules.md#ialialign) | [`IUnitPointData`](../../api/interfaces/IUnitPointData.md)

The internal `around` point of the element, positioned relative to the element’s actual content. Supported by basic elements and Group.

![Direction diagram](/svg/deriction.svg)

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

rect.around = 'center'

// Coordinate point
interface IUnitPointData {
  type?: 'percent' | 'px'
  x: number
  y: number
}

rect.around = {
  type: 'percent',
  x: 0.5, // 50% width (percentage coordinate)
  y: 0.5, // 50% height
}

rect.around = {
  x: 50, // 50px coordinate
  y: 50, // 50px
}
```

**Keep position unchanged when switching the `around` point: [localTransform](./transform.md#localtransform-imatrixdata), [setTransform()](./transform.md#settransform-matrix-imatrixdata-resize-boolean-transition-itranstion)**

```ts
// original around of polygon
polygon.around = 'center'

// switch around point
const transform = { ...polygon.localTransform } // capture transform

polygon.around = 'right'

polygon.setTransform(transform) // reset transform, automatically handles around changes
```

## 归属

### [UI Elements](../display/UI.md)

## Examples

<case name="Around" index=0 editor=false></case>

### Draw centered at coordinate (50,50)

:::code-group
<<< @/code/property/around/center.ts [Leafer]
<<< @/code/property/around/app/center.ts [App]
:::

<case name="Around" index=1 editor=false></case>

### Scale 1.5x around coordinate (50,50)

:::code-group
<<< @/code/property/around/scale.ts [Leafer]
<<< @/code/property/around/app/scale.ts [App]
:::

<case name="Around" index=2 editor=false></case>

### Rotate 45° around coordinate (50,50)

:::code-group
<<< @/code/property/around/rotate.ts [Leafer]
<<< @/code/property/around/app/rotate.ts [App]
:::

<case name="Around" index=3 editor=false></case>

### Skew 45° around coordinate (50,50)

:::code-group
<<< @/code/property/around/skew.ts [Leafer]
<<< @/code/property/around/app/skew.ts [App]
:::

<case name="Around" index=4 editor=false></case>

### around point (50,50) at bottom-right of rectangle

:::code-group
<<< @/code/property/around/right.ts [Leafer]
<<< @/code/property/around/app/right.ts [App]
:::
