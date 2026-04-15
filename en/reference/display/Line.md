<script setup>
import Case from '/component/Case.vue'
</script>

# Line Element

Draw horizontal lines, diagonal lines, vertical lines, polylines, smooth curves, and trend charts.

<case name="Line" editor=false></case>

<br/>

::: tip Inheritance
Line  >  [UI](./UI.md)
:::

## Key Properties

### width: `number`

Length of the line.

### rotation: `number`

[Rotation angle](../interface/math/Math#rotation). Range: -180 to 180.

```ts
// vertical line
width: 100
rotation: 90
```

## Computed Property

### toPoint: [IPointData](../interface/math/Math#ipointdata)

Target point **(calculated in the Line’s local coordinate system)**. Automatically converts to `width` and `rotation`.

::: danger Note
If `toPoint` does not behave as expected, simply subtract the Line’s `x` and `y` position, because `toPoint` is based on the [inner coordinate system](../../guide/advanced/coordinate.md#inner-coordinate-system).
:::

```ts
line.toPoint = { x: 200, y: 100 }

console.log(line.toPoint) // {x: 200, y: 100} Automatically recalculated based on width & rotation
```

## Points Mode

Polylines can be defined via `points`.

### points: `number[]` | [IPointData](../interface/math/Math#ipointdata)[]

Define polyline using coordinate array `[x1, y1, x2, y2, ...]` (high performance),

or coordinate objects `[{x, y}, {x, y} ...]` (more readable, slightly lower performance).

### curve: `boolean` | `number`

Whether to convert into a smooth path. Defaults to `false`.

Can be set from `0 ~ 1` to control curvature. Default is `0.5`.

### closed: `boolean`

Whether to close the path automatically. Defaults to `false`.

## Path Mode

### [Path priority mode](../UI/path.md)

## Corner Properties

### cornerRadius: `number`

Corner radius that smooths polyline joints.

## Inheritance

### Line  >  [UI](./UI.md)

<!--
## API

### [Line](../../api/classes/Line.md) -->

## Examples

<case name="Line" index=0 editor=false></case>

### Draw Horizontal Line

::: code-group
<<< @/code/display/Line/horizontal.ts [Leafer]
<<< @/code/display/Line/app/horizontal.ts [App]
:::

<case name="Line" x = 5 index=1 editor=false></case>

### Draw Line to Target Point

::: code-group
<<< @/code/display/Line/lineto.ts [Leafer]
<<< @/code/display/Line/app/lineto.ts [App]
:::

<case name="Line" x = 5 index=2 editor=false></case>

### Draw Diagonal Line

::: code-group
<<< @/code/display/Line/line.ts [Leafer]
<<< @/code/display/Line/app/line.ts [App]
:::

<case name="Line" x = 5 index=6 editor=false></case>

### Draw Vertical Line

::: code-group
<<< @/code/display/Line/vertical.ts [Leafer]
<<< @/code/display/Line/app/vertical.ts [App]
:::

<case name="Line" x = 5 index=8 editor=false></case>

### Draw Polyline

::: code-group
<<< @/code/display/Line/points.ts [Leafer]
<<< @/code/display/Line/app/points.ts [App]
:::

<case name="Line" x = 5 index=3 editor=false></case>

### Draw Rounded Polyline

::: code-group
<<< @/code/display/Line/corner.ts [Leafer]
<<< @/code/display/Line/corner.ts [App]
:::

<case name="Line" x = 5 index=4 editor=false></case>

### Draw Curve

::: code-group
<<< @/code/display/Line/curve.ts [Leafer]
<<< @/code/display/Line/app/curve.ts [App]
:::

<case name="Line" x = 5 index=7 editor=false></case>

### Draw Curve (0.2 curvature)

::: code-group
<<< @/code/display/Line/curve-number.ts [Leafer]
<<< @/code/display/Line/app/curve-number.ts [App]
:::

<case name="Line" x = 5 index=5 editor=false></case>

### Draw Trend Chart

::: code-group
<<< @/code/display/Line/chart.ts [Leafer]
<<< @/code/display/Line/app/chart.ts [App]
:::
