# Remove Event

## Key Method

### off ( type?: `string` | `string`[], listener?: `IEventListener`, options?: [`IEventListenerOptions`](../../api/interfaces/IEventListenerOptions.md) | `boolean` )

Remove event listeners.

Supports removing all events (when `type` is not provided), or removing a specific type of event (when `listener` is not provided).

## New Method

### off\_ ( id: [`IEventListenerId`](../../api/interfaces/IEventListenerId.md) | [`IEventListenerId`](../../api/interfaces/IEventListenerId.md)[] )

Remove events. Used together with [on\_()](./on.md#on_).

## 归属

### [UI Element](../display/UI.md)

## Example

### Remove a single event

:::code-group
<<< @/code/event/off/one.ts
<<< @/code/event/off/one.js
:::

### Remove multiple events

Array form:

:::code-group
<<< @/code/event/off/constMore.ts
<<< @/code/event/off/constMore.js
:::

String form:

:::code-group
<<< @/code/event/off/more.ts
<<< @/code/event/off/more.js
:::
