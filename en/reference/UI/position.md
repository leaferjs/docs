# position

Element position properties, representing absolute positioning relative to the parent element.

## Key Properties

### x: `number`

Position on the x-axis.

Note that [offsetX](./offset.md) and [around](./around.md) will affect the actual position of the element.

### y: `number`

Position on the y-axis.

Note that [offsetY](./offset.md) and [around](./around.md) will affect the actual position of the element.

### position: [`IAlign`](../../api/modules.md#ialign) | `IInset`

Position layout — positions an element relative to its parent using directional alignment or edge offsets. Requires the [position plugin](../../plugin/in/position/index.md) to be installed.

Automatically updates the element's `x`, `y`, `width`, and `height` properties. The parent must be a [Box](../display/Box.md) or [Frame](../display/Frame.md) element with width and height properties.

![Direction diagram](/svg/deriction.svg)

```ts
// Position relative to the parent using directional alignment
type IAlign =
  | 'top-left'
  | 'top'
  | 'top-right'
  | 'right'
  | 'bottom-right'
  | 'bottom'
  | 'bottom-left'
  | 'left'
  | 'center'

rect.position = 'center' // Displays the element at the center of its parent, automatically updating the element's x and y properties

// Position relative to the parent's edges, similar to CSS absolute positioning
interface IInset {
  top?: number | IUnitData
  left?: number | IUnitData
  bottom?: number | IUnitData
  right?: number | IUnitData
}

rect.position = { top: 20, right: 20, bottom: 20, left: 20 } // 20px from all four edges of the parent; automatically updates the element's x, y, width, and height properties
rect.position = { left: 20, right: 20 } // 20px from the left and right edges of the parent; automatically updates the element's x and width properties
rect.position = { top: 20, bottom: 20 } // 20px from the top and bottom edges of the parent; automatically updates the element's y and height properties
rect.position = { right: 20 } // 20px from the right edge of the parent; automatically updates the element's x property
rect.position = { bottom: 20 } // 20px from the bottom edge of the parent; automatically updates the element's y property

// Use percentages
interface IUnitData {
  type: 'percent' | 'px'
  value: number
}

rect.position = { bottom: { value: 0.2, type: 'percent' } } // 20% from the bottom edge of the parent; automatically updates the element's y property
```

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
