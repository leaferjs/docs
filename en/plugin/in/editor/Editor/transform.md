# Transform

By default, the editor allows visual manipulation of elements (move, scale, rotate). You can also manually control them using the methods below.

## Key Methods

You can also directly use the layout property methods of the [element](../index.md#element-ui) to move and transform the editor frame.

### move(x: `number` | [`IPointData`](../../../../reference/interface/math/Math.md#ipointdata), y = 0): void

Translate selected elements as an <badge>incremental operation</badge>. Supports passing a [point object](../../../../reference/interface/math/Math.md#ipointdata).

### flip(axis: `'x'` | `'y'`)

Mirror/flip selected elements along the specified axis (in [world coordinate system](../../../../guide/advanced/coordinate.md#world-世界坐标系)).

### scaleOf(origin: [`IAlign`](../../../../reference/interface/math/Math.md#ialign) | [`IPointData`](../../../../reference/interface/math/Math.md#ipointdata), multiplyScaleX: `number`, multiplyScaleY = scaleX)

Scale selected elements around the origin of the [element](../index.md#element-ui) (in [box coordinates](../../../../guide/advanced/coordinate.md#box-坐标系)) as an <badge>incremental operation</badge>.

### rotateOf(origin: [`IAlign`](../../../../reference/interface/math/Math.md#ialign) | [`IPointData`](../../../../reference/interface/math/Math.md#ipointdata), addRotation: `number`)

Rotate selected elements around the origin of the [element](../index.md#element-ui) (in [box coordinates](../../../../guide/advanced/coordinate.md#box-坐标系)) as an <badge>incremental operation</badge>.

### skewOf(origin: [`IAlign`](../../../../reference/interface/math/Math.md#ialign) | [`IPointData`](../../../../reference/interface/math/Math.md#ipointdata), addSkewX: `number`, addSkewY = 0)

Skew selected elements around the origin of the [element](../index.md#element-ui) (in [box coordinates](../../../../guide/advanced/coordinate.md#box-坐标系)) as an <badge>incremental operation</badge>.

```ts
// current selected element
const { element } = app.editor

// To scale to a target scale, divide by current scale:
app.editor.scaleOf('center', 1.5 / element.scale)

// To rotate to a target rotation, subtract current rotation:
app.editor.rotateOf('center', 45 - element.rotation)

// To skew to a target skewX, subtract current skewX:
app.editor.skewOf('center', 45 - element.skewX)
```

## Belongs to

### [Editor Element](../index.md#editor-元素)

## Example

### Manually rotate element

<<< @/code/plugin/editor/rotate.ts
