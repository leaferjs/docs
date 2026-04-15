<script setup>
import Case from '/component/Case.vue'
</script>

# Star Element

Draw car logos, star highlights, five-point stars, and multi-point star shapes.

<case name="Star" editor=false></case>

<br/>

::: tip Inheritance
Star  >  [UI](./UI.md)
:::

## Key Properties

### width: `number`

Width of the star shape.

### height: `number`

Height of the star shape.

### corners: `number`

Number of star points. Must be ≥ 3.

Internal logic: points are distributed between inner and outer circles every `(360 / corners)` degrees, then connected to form a star shape.

### startAngle: `number`

Starting angle offset. Default is `0`. Range: -180 to 180.

### innerRadius: `number`

Inner radius ratio. Default is `0.382`. Range: 0.0 to 1.0.

```ts
// five-point star
corners: 5
innerRadius: 0.382
```

## Corner Properties

### cornerRadius: `number`

Corner radius that smooths the star’s sharp edges.

## Box Element

### [StarBox](../../plugin/in/box/StarBox.md)

## Inheritance

### Star  >  [UI](./UI.md)

<!-- ## API

### [Star](../../api/classes/Star.md) -->

## Examples

<case name="Star" index=0 editor=false></case>

### Draw Car Logo

::: code-group
<<< @/code/display/Star/three.ts [Leafer]
<<< @/code/display/Star/app/three.ts [App]
:::

<case name="Star" index=1 editor=false></case>

### Draw Star Light

::: code-group
<<< @/code/display/Star/light.ts [Leafer]
<<< @/code/display/Star/app/light.ts [App]
:::

<case name="Star" index=2 editor=false></case>

### Draw Five-Point Star

::: code-group
<<< @/code/display/Star/star.ts [Leafer]
<<< @/code/display/Star/app/star.ts [App]
:::

<case name="Star" index=5 editor=false></case>

### Draw Rounded Star Shape

::: code-group
<<< @/code/display/Star/corner.ts [Leafer]
<<< @/code/display/Star/app/corner.ts [App]
:::
