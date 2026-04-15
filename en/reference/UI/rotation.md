# rotation

The rotation property of an element.

## Key Property

### rotation: `number`

[Rotation angle](../interface/math/Math.md#rotation), ranging from `-180` to `180`.

## Key Methods

::: tip Note
The following methods are incremental operations, mainly designed for graphic editing scenarios.

In animation and game scenarios, you can use [origin](./origin.md) / [around](./around.md) + `rotation` for simpler center-based rotation.
:::

### rotateOf ( origin: [`IAlign`](../interface/math/Math.md#ialign) | [`IPointData`](../interface/math/Math#ipointdata), addRotation: `number`, transition?: [`ITranstion`](./transition.md#transition-itranstion) )

Rotate the element around a given origin (in [box coordinate system](../../guide/advanced/coordinate.md#box-coordinate-system)) as an <badge>incremental operation</badge>. The `transition` parameter controls whether to apply [animation](../../guide/plugin/animate.md) transition.

```ts
// Rotate 45° around center
rect.rotateOf('center', 45)

// To rotate to an absolute rotation value, subtract current rotation:
rect.rotateOf({ x: 50, y: 50 }, 45 - rect.rotation)

// Animation transition
rect.rotateOf('center', 45, true)

rect.rotateOf('center', 45, 2) // transition for 2 seconds
```

### rotateOfWorld ( worldOrigin: [`IPointData`](../interface/math/Math#ipointdata), addRotation: `number`, transition?: [`ITranstion`](./transition.md#transition-itranstion) )

Rotate the element around a given origin in the [world coordinate system](../../guide/advanced/coordinate.md#world-world-coordinate-system) as an <badge>incremental operation</badge>. The `transition` parameter controls whether to apply animation.

## Belongs to

### [UI Element](../display/UI.md)

## Example

### Rotate element using rotateOf()

::: code-group
<<< @/code/property/rotate/rotate.ts [Leafer]
<<< @/code/property/rotate/app/rotate.ts [App]
:::

### Rotate element with animation

::: code-group
<<< @/code/property/rotate/transition.ts [Leafer]
<<< @/code/property/rotate/app/transition.ts [App]
:::
