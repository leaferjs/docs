# Emit Events

## Key Methods

### emit ( type: `string`, event?: [`IEvent`](../../api/interfaces/IEvent.md) | `IObject`, capture?: `boolean` )

Manually emit an event. The `event` parameter can be a custom object. UI events will be generated automatically, e.g. `leaf.emit(\`PointEvent.DOWN`)`.

### emitEvent ( event?: [`IEvent`](../../api/interfaces/IEvent.md), capture?: `boolean` )

Manually emit an event. The `event` parameter must be an `IEvent` object, and `current` will be automatically bound.

## 归属

### [UI Elements](../display/UI.md)

## Examples

### Emit a custom event

<<< @/code/event/emit/custom.ts

### Simulate UI interaction events

:::code-group
<<< @/code/event/emit/ui.ts
<<< @/code/event/emit/ui.js
:::
