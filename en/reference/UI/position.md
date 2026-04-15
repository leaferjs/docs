# position

Element position properties, representing absolute positioning relative to the parent element.

## Key Properties

### x: `number`

Position on the x-axis.

Note that [offsetX](./offset.md) and [around](./around.md) will affect the actual position of the element.

### y: `number`

Position on the y-axis.

Note that [offsetY](./offset.md) and [around](./around.md) will affect the actual position of the element.

## Key Methods

### move ( addX: `number` | [`IPointData`](../interface/math/Math#ipointdata), addY = 0, transition?: [`ITranstion`](./transition.md#transition-itranstion) )

Move the element <badge>incremental operation</badge>. Supports directly passing a [point object](../interface/math/Math.md#ipointdata).

The `transition` parameter indicates whether to apply [animation](../../guide/plugin/animate.md) transition.

```ts
// Move 10px along both X and Y axis
rect.move(10, 10)

// Use point object to move 10px along both axes
rect.move({ x: 10, y: 10 })

// Move with animation
rect.move(10, 10, true)

rect.move(10, 10, 2) // transition for 2 seconds
```

### moveInner ( addX: `number` | [`IPointData`](../interface/math/Math#ipointdata), addY = 0, transition?: [`ITranstion`](./transition.md#transition-itranstion) )

Move the element in the [local coordinate system](../../guide/advanced/coordinate.md) <badge>incremental operation</badge>. Supports directly passing a [point object](../interface/math/Math.md#ipointdata).

### moveWorld ( addWorldX: `number` | [`IPointData`](../interface/math/Math#ipointdata), addWorldY = 0, transition?: [`ITranstion`](./transition.md#transition-itranstion) )

Move the element in the [world coordinate system](../../guide/advanced/coordinate.md#world-world-coordinate-system) <badge>incremental operation</badge>. Supports directly passing a [point object](../interface/math/Math.md#ipointdata).

## Belongs to

### [UI Element](../display/UI.md)

## Example

### Move element using move()

::: code-group
<<< @/code/property/move/move.ts [Leafer]
<<< @/code/property/move/app/move.ts [App]
:::

### Move element with animation transition

::: code-group
<<< @/code/property/move/transition.ts [Leafer]
<<< @/code/property/move/app/transition.ts [App]
:::
