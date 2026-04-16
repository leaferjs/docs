# skew

The skew (shear) properties of an element.

## Key Properties

### skewX: `number`

Skew angle on the x-axis, ranging from `-90` to `90`.

### skewY: `number`

Skew angle on the y-axis, ranging from `-90` to `90`.

## Key Methods

:::tip Note
The following methods are incremental operations, mainly designed for graphic editing scenarios.

In animation and game scenarios, you can use [origin](./origin.md) / [around](./around.md) + skew for simpler center-based skewing.
:::

### skewOf ( origin: [`IAlign`](../interface/math/Math.md#ialign) | [`IPointData`](../interface/math/Math#ipointdata), addSkewX: `number`, addSkewY = 0, resize?: `boolean`, transition?: [`ITranstion`](./transition.md#transition-itranstion) )

Skew the element around a given origin (in [box coordinate system](../../guide/advanced/coordinate.md#box-coordinate-system)) as an <badge>incremental operation</badge>. The `transition` parameter enables [animation](../../guide/plugin/animate.md) transition.

```ts
// Skew X axis by 45° around center
rect.skewOf('center', 45)

// To skew to an absolute value, subtract current skewX:
rect.skewOf({ x: 50, y: 50 }, 45 - rect.skewX)

// Animation transition
rect.skewOf('center', 45, 0, true)

rect.skewOf('center', 45, 0, 2) // 2s transition
```

### skewOfWorld ( worldOrigin: [`IPointData`](../interface/math/Math#ipointdata), addSkewX: `number`, addSkewY = 0, resize?: `boolean`, transition?: [`ITranstion`](./transition.md#transition-itranstion) )

Skew the element around a given origin in the [world coordinate system](../../guide/advanced/coordinate.md#world-world-coordinate-system) as an <badge>incremental operation</badge>. The `transition` parameter enables animation.

## 归属

### [UI Element](../display/UI.md)

## Example

### Skew element using skewOf()

:::code-group
<<< @/code/property/skew/skew.ts [Leafer]
<<< @/code/property/skew/app/skew.ts [App]
:::

### Skew element with animation

:::code-group
<<< @/code/property/skew/transition.ts [Leafer]
<<< @/code/property/skew/app/skew.ts [App]
:::
