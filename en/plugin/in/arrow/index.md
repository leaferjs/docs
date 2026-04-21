<script setup>
import Case from '/component/Case.vue'
</script>

# Arrow Element

Arrow element used to add start/end arrowheads to lines. It provides 12 built-in arrow styles and supports custom definitions.

<case name="Arrow" editor=false></case>

::: tip Inheritance
Arrow  >  [Line](../../../reference/display/Line.md)  >  [UI](../../../reference/display/UI.md)
:::

## Install Plugin

You need to install the arrow plugin to use it. [Click here to visit the Github repository](https://github.com/leaferjs/leafer-in/tree/main/packages/arrow).

::: code-group

```sh [npm]
npm install @leafer-in/arrow
```

```sh [pnpm]
pnpm add @leafer-in/arrow
```

```sh [yarn]
yarn add @leafer-in/arrow
```

```sh [bun]
bun add @leafer-in/arrow
```

:::

Or include via script tag and access plugin features using the global variable `LeaferIN.arrow`.

::: code-group

```html [arrow.min]
<script src="https://unpkg.com/@leafer-in/arrow@2.0.9/dist/arrow.min.js"></script>
<script>
  const { Arrow } = LeaferIN.arrow
</script>
```

```html [arrow]
<script src="https://unpkg.com/@leafer-in/arrow@2.0.9/dist/arrow.js"></script>
<script>
  const { Arrow } = LeaferIN.arrow
</script>
```

<!-- https://unpkg.com can be replaced with https://cdn.jsdelivr.net/npm if inaccessible -->

:::

## Key Properties

### startArrow: `IArrowType`

Start arrow. Default is none.

Supports custom arrow styles. [Line](../../../reference/display/Leaf.md) / [Path](../../../reference/display/Path.md) elements also support this property (requires this plugin).

### endArrow: `IArrowType`

End arrow. Default is angle.

Supports custom arrow styles. [Line](../../../reference/display/Leaf.md) / [Path](../../../reference/display/Path.md) elements also support this property (requires this plugin).

```ts
type IArrowType =
  | 'none'
  | 'angle' // angle arrow (high performance)
  | 'angle-side' // single-side angle arrow
  | 'arrow' // standard arrow
  | 'triangle' // triangle arrow
  | 'triangle-flip' // flipped triangle arrow
  | 'circle' // circle arrow
  | 'circle-line' // circle line arrow
  | 'square' // square arrow
  | 'square-line' // square line arrow
  | 'diamond' // diamond arrow
  | 'diamond-line' // diamond line arrow
  | 'mark' // mark arrow
  | IArrowTypeData // arrow object
  | string // custom arrow

interface IArrowTypeData {
  type: IArrowType // arrow type
  scale?: number // scale factor, avoid overly large values (may cause artifacts)
  rotation?: number // additional rotation angle
}
```

## Points Mode

Use `points` to define a polyline.

### points: `number[]`

Draw polyline using coordinate array `[x1, y1, x2, y2, ...]`.

### curve: `boolean | number`

Whether to convert to a smooth path. Default is `false`.

Can be set from `0 ~ 1` to control curvature. Default is `0.5`.

## Path Mode

### [Path priority mode](../../../reference/UI/path.md)

## Corner Radius

### cornerRadius: `number`

Corner radius for smoothing polyline corners.

## Static Method

### registerArrow ( name: `string`, data: [`IPathDataArrow`](../../../api/interfaces/IPathDataArrow.md) )

Register a custom arrow style. [See example](#register-custom-arrow-style).

Designed based on line width = 1. Imagine the arrow placed from left to right, with the endpoint at (0,0). Scaling and rotation are handled automatically.

```ts
interface IPathDataArrow {
  connect?: IPathDataArrowOffset // connection point with line
  offset?: IPathDataArrowOffset // offset to align with endpoint
  path: IPathCommandData // supports M, L, C, Q, O commands only
  fill?: boolean // since v2.0.9, supports filled arrows (stroke must not be transparent; use opacity instead)
}

interface IPathDataArrowOffset {
  x?: number // x-axis offset
  bevelJoin?: number // offset when strokeJoin is bevel
  roundJoin?: number // offset when strokeJoin is round
}
```

## Inheritance

### Arrow  >  [Line](../../../reference/display/Line.md)  >  [UI](../../../reference/display/UI.md)

## Examples

<case name="Arrow" index=6 editor=false></case>

### Angle arrow

<<< @/code/plugin/arrow/angle.ts

<case name="Arrow" index=7 editor=false></case>

Make arrow larger

<<< @/code/plugin/arrow/angle/square.ts

<case name="Arrow" index=9 editor=false></case>

Smooth [strokeJoin](../../../reference/UI/stroke.md#strokejoin-strokejoin)

<<< @/code/plugin/arrow/angle/round-cap.ts

<case name="Arrow" index=10 editor=false></case>

Smooth [strokeCap](../../../reference/UI/stroke.md#strokecap-strokecap)

<<< @/code/plugin/arrow/angle/round-join.ts

<case name="Arrow" index=8 editor=false></case>

Smooth [strokeCap](../../../reference/UI/stroke.md#strokecap-strokecap) / [strokeJoin](../../../reference/UI/stroke.md#strokejoin-strokejoin)

<<< @/code/plugin/arrow/angle/round.ts

<case name="Arrow" index=11 count=2 editor=false></case>

### Single-side angle arrow

<<< @/code/plugin/arrow/angle-side.ts

<case name="Arrow" index=13 editor=false></case>

### Standard arrow

<<< @/code/plugin/arrow/arrow.ts

<case name="Arrow" index=23 editor=false></case>

Smooth strokeCap / strokeJoin

<<< @/code/plugin/arrow/arrow-round.ts

<case name="Arrow" index=14 editor=false></case>

### Triangle arrow

<<< @/code/plugin/arrow/triangle.ts

<case name="Arrow" index=15 editor=false></case>

### Flipped triangle arrow

<<< @/code/plugin/arrow/triangle-flip.ts

<case name="Arrow" index=16 editor=false></case>

### Circle arrow

<<< @/code/plugin/arrow/circle.ts

<case name="Arrow" index=17 editor=false></case>

### Circle line arrow

<<< @/code/plugin/arrow/circle-line.ts

<case name="Arrow" index=18 editor=false></case>

### Square arrow

<<< @/code/plugin/arrow/square.ts

<case name="Arrow" index=19 editor=false></case>

### Square line arrow

<<< @/code/plugin/arrow/square-line.ts

<case name="Arrow" index=20 editor=false></case>

### Diamond arrow

<<< @/code/plugin/arrow/diamond.ts

<case name="Arrow" index=21 editor=false></case>

### Diamond line arrow

<<< @/code/plugin/arrow/diamond-line.ts

<case name="Arrow" index=22 editor=false></case>

### Mark arrow

<<< @/code/plugin/arrow/mark.ts

<case name="Arrow" index=24 editor=false></case>

### Dashed arrow animation

<<< @/code/plugin/arrow/animate.ts

### Arrow scale x2

<<< @/code/plugin/arrow/scale.ts

### Arrow rotation +30 degrees

<<< @/code/plugin/arrow/rotation.ts

### Register custom arrow style

The `path()` method creates a `PathCreator` instance, similar to Canvas 2D API, for quickly [drawing paths](../../../reference/path/PathCreator.md).

<<< @/code/plugin/arrow/custom/index.ts
