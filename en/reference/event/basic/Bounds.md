# BoundsEvent

Element bounding box change event.

::: tip Inheritance
BoundsEvent  >  [Event](../basic/Event.md)

<br/>

Since bounding box changes occur very frequently, to avoid performance overhead, the engine only dispatches notifications without creating event instances.

An internal optimization is applied: the engine quickly checks whether any Bounds event listeners are registered. If none are found, events will not be dispatched at all to avoid unnecessary cost.
:::

## Event Names

### BoundsEvent.RESIZE

Triggered when the element’s bounding box in the [inner coordinate system](../../../guide/advanced/coordinate.md#inner-internal-coordinate-system) changes, including its own scale.

This includes changes to width, height, path, and scale properties. Supported by Group, Box, and other grouped elements.

`bounds.resize`

### BoundsEvent.INNER

Triggered when the element’s bounding box in the [inner coordinate system](../../../guide/advanced/coordinate.md#inner-internal-coordinate-system) changes.

Includes width, height, and path changes. Supported by Group, Box, and other grouped elements.

`bounds.inner`

### BoundsEvent.LOCAL

Triggered when the element’s bounding box in the [local coordinate system](../../../guide/advanced/coordinate.md#local-local-coordinate-system) changes.

Includes position, width, height, path, scale, rotation, and skew changes. Supported by Group, Box, and other grouped elements.

`bounds.local`

### BoundsEvent.WORLD

Triggered when the element’s bounding box in the [world coordinate system](../../../guide/advanced/coordinate.md#world-world-coordinate-system) changes.

Fires when the element’s rendered position or size in the viewport changes, such as viewport panning/zooming or changes in parent elements. Supported by Group, Box, and other grouped elements.

`bounds.world`

## Inherited Events

### BoundsEvent  >  [Event](../basic/Event.md)

## Example

::: code-group
<<< @/code/event/bounds/rect.ts
<<< @/code/event/bounds/rect.js
:::
