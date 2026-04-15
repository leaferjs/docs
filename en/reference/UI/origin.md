<script setup>
import Case from '/component/Case.vue'
</script>

# origin

Rotate and scale elements around an origin point, similar to CSS [`transform-origin`](https://developer.mozilla.org/en-US/docs/Web/CSS/transform-origin).

To draw elements around the center point, use [around](./around.md) instead (it has higher priority).

## Key Property

### origin: [`IAlign`](../../api/modules.md#ialign) | [`IUnitPointData`](../../api/interfaces/IUnitPointData.md)

The origin point for element rotation and scaling, positioned relative to the element’s actual content. Supported by basic elements and Group.

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

rect.origin = 'center'

// Coordinate point
interface IUnitPointData {
  type?: 'percent' | 'px'
  x: number
  y: number
}

rect.origin = {
  type: 'percent',
  x: 0.5, // 50% width (percentage coordinate)
  y: 0.5, // 50% height
}

rect.origin = {
  x: 50, // 50px coordinate
  y: 50, // 50px
}
```

**To keep the element in place while changing the origin point, use [localTransform](./transform.md#localtransform-imatrixdata) or [setTransform()](./transform.md#settransform-matrix-imatrixdata-resize-boolean-transition-itranstion).**

```ts
// Original origin of polygon
polygon.origin = 'center'

// Save current transform
const transform = { ...polygon.localTransform }

// Change origin point
polygon.origin = 'right'

// Restore transform (system will automatically handle origin change)
polygon.setTransform(transform)
```

## Belongs to

### [UI Element](../display/UI.md)

## Example

<case name="Around" index=0 editor=false></case>

### Set origin to center

::: code-group
<<< @/code/property/origin/center.ts [Leafer]
<<< @/code/property/origin/app/center.ts [App]
:::

<case name="Around" index=1 editor=false></case>

### Scale 1.5x around origin

::: code-group
<<< @/code/property/origin/scale.ts [Leafer]
<<< @/code/property/origin/app/scale.ts [App]
:::

<case name="Around" index=2 editor=false></case>

### Rotate 45° around origin

::: code-group
<<< @/code/property/origin/rotate.ts [Leafer]
<<< @/code/property/origin/app/rotate.ts [App]
:::

<case name="Around" index=3 editor=false></case>

### Skew 45° around origin

::: code-group
<<< @/code/property/origin/skew.ts [Leafer]
<<< @/code/property/origin/app/skew.ts [App]
:::
