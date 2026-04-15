# Event

Base class for all events.

## Key Properties

### type: `string`

Event type.

### current: [`ILeaf`](../../../api/interfaces/ILeaf.md)

The current object that is listening to the event. Useful for distinguishing when multiple objects share the same event handler.

Equivalent to `currentTarget`.

### target: [`ILeaf`](../../../api/interfaces/ILeaf.md)

The target object defined when dispatching the event / the deepest target object.

### bubbles: `boolean`

Whether the event bubbles.

### phase: `number`

Indicates which phase of event flow is currently being processed:

- 0 No event is being processed.
- 1 Capturing phase: the event is being processed by ancestor objects of the target element. Triggered when `capture: true` is set during registration.
- 2 Target phase: the event has reached the target object.
- 3 Bubbling phase: the event is propagating back up from the target’s ancestors, starting from the parent.

Equivalent to `eventPhase`.

### isStop: `boolean`

Whether event propagation has been stopped.

### isStopDefault: `boolean`

Whether the default action has been prevented.

### origin: `object`

Native event object.

## Key Methods

### stop ( )

Stops event propagation. If multiple listeners exist on the same element, they will still execute before propagation is stopped (prevents bubbling to parent nodes).

Also calls the native `stopPropagation()`.

::: tip Note
Composite events like `click` are internally synthesized and cannot stop native events with the same name.

Additionally, `PointEvent` does not block native `MouseEvent` by default. You must change [app.config.pointer.type](../../config/app/pointer.md#pointer-type-mouse-pointer-touch).
:::

### stopNow ( )

Immediately stops event propagation, preventing both parent and sibling handlers from being triggered.

Also calls the native `stopImmediatePropagation()`.

::: tip Note
Composite events like `click` are internally synthesized and cannot stop native events with the same name.

Additionally, `PointEvent` does not block native `MouseEvent` by default. You must change [app.config.pointer.type](../../config/app/pointer.md#pointer-type-mouse-pointer-touch).
:::

### stopDefault ( )

Prevents the default browser behavior.

Also calls the native `preventDefault()`.

::: tip Note
Composite events like `click` are internally synthesized and cannot stop native events with the same name.

Additionally, `PointEvent` does not block native `MouseEvent` by default. You must change [app.config.pointer.type](../../config/app/pointer.md#pointer-type-mouse-pointer-touch).
:::

<!--
## API

### [Event](../../../api/classes/Event.md) -->

## Example

### Stop event propagation

::: code-group
<<< @/code/event/stop.ts
<<< @/code/event/stop.js
:::

### Immediately stop event propagation

::: code-group
<<< @/code/event/stopNow.ts
<<< @/code/event/stopNow.js
:::
