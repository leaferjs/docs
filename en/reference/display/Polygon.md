<script setup>
import Case from '/component/Case.vue'
</script>

# Polygon Element

Draw triangles, diamonds, pentagons, regular polygons, free polygons, smooth polygons, and trend charts.

<case name="Polygon" editor=false></case>

<br/>

::: tip Inheritance
Polygon  >  [UI](./UI.md)
:::

## Key Properties

### width: `number`

Width of the regular polygon.

### height: `number`

Height of the regular polygon.

### sides: `number`

Number of sides of the regular polygon. Must be ≥ 3.

Internal logic: points are evenly distributed on a circle every `(360 / sides)` degrees, then connected to form a regular polygon.

```ts
// pentagon
sides: 5
```

### startAngle: `number`

Starting angle offset. Default is `0`. Range: -180 to 180.

## Points Mode

You can define a free-form polygon using `points`.

### points: `number[]` | [IPointData](../interface/math/Math#ipointdata)[]

Define polygon using coordinate array `[x1, y1, x2, y2, ...]` (high performance),

or coordinate objects `[{x, y}, {x, y} ...]` (more readable, slightly lower performance).

### curve: `boolean` | `number`

Whether to convert into a smooth path. Defaults to `false`.

Can be set from `0 ~ 1` to control curvature. Default is `0.5`.

## Path Mode

### [Path priority mode](../UI/path.md)

## Corner Properties

### cornerRadius: `number`

Corner radius that smooths polygon vertices.

## Box Element

### [PolygonBox](../../plugin/in/box/PolygonBox.md)

## Inheritance

### Polygon  >  [UI](./UI.md)

<!-- ## API

### [Polygon](../../api/classes/Polygon.md) -->

## Examples

<case name="Polygon" index=0 editor=false></case>

### Draw Triangle

::: code-group
<<< @/code/display/Polygon/triangle.ts [Leafer]
<<< @/code/display/Polygon/app/triangle.ts [App]
:::

<case name="Polygon" index=1 editor=false></case>

### Draw Pentagon

::: code-group
<<< @/code/display/Polygon/pentagon.ts [Leafer]
<<< @/code/display/Polygon/app/pentagon.ts [App]
:::

<case name="Polygon" index=2 editor=false></case>

### Draw Rounded Hexagon

::: code-group
<<< @/code/display/Polygon/corner.ts [Leafer]
<<< @/code/display/Polygon/app/corner.ts [App]
:::

<case name="Polygon" index=3 editor=false></case>

### Draw Free Polygon

::: code-group
<<< @/code/display/Polygon/points.ts [Leafer]
<<< @/code/display/Polygon/app/points.ts [App]
:::

<case name="Polygon" index=4 editor=false></case>

### Draw Smooth Polygon

::: code-group
<<< @/code/display/Polygon/curve.ts [Leafer]
<<< @/code/display/Polygon/app/curve.ts [App]
:::

<case name="Polygon" index=6 editor=false></case>

### Draw Smooth Polygon (0.2 curvature)

::: code-group
<<< @/code/display/Polygon/curve-number.ts [Leafer]
<<< @/code/display/Polygon/app/curve-number.ts [App]
:::

<case name="Polygon" index=5 editor=false></case>

### Draw Trend Chart

::: code-group
<<< @/code/display/Polygon/chart.ts [Leafer]
<<< @/code/display/Polygon/app/chart.ts [App]
:::
