<script setup>
import Case from '/component/Case.vue'
</script>

# Pen Element

Like drawing by hand, quickly create different styled path combinations. Supports Canvas 2D-style path APIs.

<case name="Pen" editor=false></case>

<br/>

::: tip Inheritance
Pen  >  [Group](./Group.md)  >  [UI](./UI.md)
:::

## Key Properties

### pathElement: [`Path`](./Path.md)

Current sub-path element. Created automatically by `setStyle()`.

## Key Methods

### setStyle ( data: `IPathInputData`)

Set pen style. Internally creates a [sub-path](./Path.md) for drawing.

You should set style first, then draw paths. Supports all properties from [Path](./Path.md) and [UI](./UI.md).

### add ( ui: [`UI`](./UI.md))

Add a UI element.

### clear ( )

Clear all drawn content (remove + destroy).

## Path Drawing APIs

Similar to Canvas 2D path APIs. All angle values use degrees from -180 to 180.

### clearPath ( )

Clear current path data (only clears the latest path after the most recent `setStyle()` call; previous paths are not affected). Alias of `beginPath()`.

### moveTo ( )

moveTo(x, y)

Move the starting point to (x, y).

### lineTo ( )

lineTo(x, y)

Draw a line from the previous point to (x, y).

### bezierCurveTo ( )

bezierCurveTo(x1, y1, x2, y2, x, y)

Draw a cubic Bézier curve from the previous point to (x, y), using (x1, y1) and (x2, y2) as control points.

### quadraticCurveTo ( )

quadraticCurveTo(x1, y1, x, y)

Draw a quadratic Bézier curve from the previous point to (x, y), using (x1, y1) as the control point.

### rect ( )

rect(x, y, width, height)

Draw a rectangle.

### roundRect ( )

roundRect(x, y, width, height, cornerRadius: `number` | `number[]`)

Draw a rounded rectangle.

### ellipse ( )

ellipse(x, y, radiusX, radiusY, rotation?, startAngle?, endAngle?, anticlockwise?: `boolean`)

Draw an ellipse or elliptical arc. Center is at (x, y), radii are (radiusX, radiusY). Direction follows `anticlockwise` (default clockwise). If angles are omitted, a full ellipse is drawn.

### arc ( )

arc(x, y, radius, startAngle?, endAngle?, anticlockwise?: `boolean`)

Draw a circle or circular arc. Center is at (x, y). If angles are omitted, a full circle is drawn.

### arcTo ( )

arcTo(x1, y1, x2, y2, radius)

Draw a tangent arc between two lines defined by the previous point, (x1, y1), and (x2, y2).

### closePath ( )

Close the current path.

## New Methods

### drawEllipse ( ) <Badge type="tip" text="new" />

drawEllipse(x, y, radiusX, radiusY, rotation?, startAngle?, endAngle?, anticlockwise?)

Move to the start point first, then draw an ellipse. Ensures the ellipse is disconnected from previous paths, keeping it independent.

### drawArc ( ) <Badge type="tip" text="new" />

drawArc(x, y, radius, startAngle?, endAngle?, anticlockwise?)

Move to the start point first, then draw an arc. Ensures independence from previous paths.

### drawPoints ( ) <Badge type="tip" text="new" />

drawPoints(points, curve?, close?)

Draw polyline from points array:

- `[x, y, x, y, ...]` or
- `[{x, y}, {x, y} ...]`

`curve` enables smoothing (0–1 or `true` = 0.5).
`close` indicates whether to close the path.

## Inheritance

### Pen  >  [Group](./Group.md)  >  [UI](./UI.md)

<!--
## API

### [Pen](../../api/classes/Pen.md) -->

## Examples

<case name="Pen" index=0 editor=false></case>

### Draw Shapes with Different Colors

::: code-group
<<< @/code/display/Pen/color.ts [Leafer]
<<< @/code/display/Pen/app/color.ts [App]
:::

<case name="Pen" index=2 editor=false></case>

### Draw Curves

::: code-group
<<< @/code/display/Pen/line.ts [Leafer]
<<< @/code/display/Pen/app/line.ts [App]
:::

<case name="Pen" index=3 editor=false></case>

### Combine with UI Components

::: code-group
<<< @/code/display/Pen/add.ts [Leafer]
<<< @/code/display/Pen/app/add.ts [App]
:::

<case name="Pen" index=4 editor=false></case>

### Combine with Images

::: code-group
<<< @/code/display/Pen/image.ts [Leafer]
<<< @/code/display/Pen/app/image.ts [App]
:::

<case name="Pen" index=5 editor=false></case>

### Combine with Text

::: code-group
<<< @/code/display/Pen/text.ts [Leafer]
<<< @/code/display/Pen/app/text.ts [App]
:::
