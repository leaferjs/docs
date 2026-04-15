# scale

The scaling properties of an element.

## Key Properties

### scaleX: `number`

Scale factor on the x-axis. A negative value represents mirroring along the x-axis.

### scaleY: `number`

Scale factor on the y-axis. A negative value represents mirroring along the y-axis.

## Computed Property

### scale: `number` | [`IPointData`](../interface/math/Math.md#ipointdata)

Quickly set / get `scaleX` and `scaleY`.

```ts
rect.scale = 2 // scaleX = 2, scaleY = 2
console.log(rect.scale) // 2

rect.scale = { x: 1, y: 2 } // scaleX = 1, scaleY = 2
console.log(rect.scale) // {x: 1, y: 2}
```

## Key Methods

::: tip Note
The following methods are incremental operations and modify the element’s initial coordinates. They are mainly designed for graphic editing scenarios.

In animation and game scenarios, you can use [origin](./origin.md) / [around](./around.md) + scale for simpler center-based scaling.
:::

### scaleOf ( origin: [`IAlign`](../interface/math/Math.md#ialign) | [`IPointData`](../interface/math/Math#ipointdata), multiplyScaleX: `number`, multiplyScaleY?: `number` | [`ITranstion`](./transition.md#transition-itranstion), resize?: `boolean`, transition?: [`ITranstion`](./transition.md#transition-itranstion) )

Scale the element around a given origin (in [box coordinate system](../../guide/advanced/coordinate.md#box-coordinate-system)) as an <badge>incremental operation</badge>.

The `resize` parameter converts scaling into width/height changes. The `transition` parameter enables [animation](../../guide/plugin/animate.md) transition.

```ts
// Scale 1.5x around center
rect.scaleOf('center', 1.5)

// To scale to a target value, divide by current scale:
rect.scaleOf({ x: 50, y: 50 }, 1.5 / rect.scale)

// Animation transition
rect.scaleOf('center', 1.5, true)
// = rect.scaleOf('center', 1.5, 1.5, false, true)

rect.scaleOf('center', 1.5, { duration: 2 }) // 2s transition
// = rect.scaleOf('center', 1.5, 1.5, false, 2)
```

### scaleOfWorld ( worldOrigin: [`IPointData`](../interface/math/Math#ipointdata), multiplyScaleX: `number`, multiplyScaleY?: `number` | [`ITranstion`](./transition.md#transition-itranstion), resize?: `boolean`, transition?: [`ITranstion`](./transition.md#transition-itranstion) )

Scale the element around a given origin in the [world coordinate system](../../guide/advanced/coordinate.md#world-world-coordinate-system) as an <badge>incremental operation</badge>.

The `resize` parameter converts scaling into width/height changes. The `transition` parameter enables animation.

## Belongs to

### [UI Element](../display/UI.md)

## Example

### Scale element using scaleOf()

::: code-group
<<< @/code/property/scale/scale.ts [Leafer]
<<< @/code/property/scale/app/scale.ts [App]
:::

### Scale element with animation

::: code-group
<<< @/code/property/scale/transition.ts [Leafer]
<<< @/code/property/scale/app/transition.ts [App]
:::
