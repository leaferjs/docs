# Listen Events

## Key Property

### event: [`IEventListenerMap`](../../api/interfaces/IEventListenerMap.md)

Only supports passing event listeners during initialization (cannot be exported to JSON).

```ts
export interface IEventListenerMap {
  [name: string]: IEventListener | [IEventListener, IEventOption]
}

// Example
new Rect({
  fill: '#32cd79',
  event: {
    tap: function () {
      console.log('tap')
    },
    [PointerEvent.DOWN]: [
      function () {
        console.log('pointer.down')
      },
      'once', // Same as the second parameter in on()
    ],
  },
})
```

## Key Methods

### on ( type: `string` | `string`[], listener: `IEventListener`, options?: [`IEventOption`](../../api/modules.md#ieventoption) )

Listen to events. When `options` is `boolean`, it indicates whether it is a [capture type](../event/flow.md).

Supports multi-dimensional array syntax, e.g. `on([ [type, listener, options?], ... ])`.

### once ( type: `string` | `string`[], listener: `IEventListener`, capture?: `boolean` )

Listen to an event only once. `capture` indicates whether it is a [capture type](../event/flow.md).

Supports multi-dimensional array syntax, e.g. `once([ [type, listener, capture?], ... ])`.

## New Method

### on\_ ( type: `string` | `string`[], listener: `IEventListener`, bind?: `IObject`, options?: [`IEventOption`](../../api/modules.md#ieventoption) ): [`IEventListenerId`](../../api/interfaces/IEventListenerId.md)

Listen to events. Supports passing `bind` as the `this` context of the listener, and returns an event id, which is used together with [off\_()](./off.md#off).

Supports multi-dimensional array syntax, e.g. `on_([ [type, listener, bind?, options?], ... ])`.

<<< @/code/event/on/simple.ts

## Belongs to

### [UI Element](../display/UI.md)

## Example

### Listen to a single event

::: code-group
<<< @/code/event/on/one.ts
<<< @/code/event/on/one.js
:::

### Listen to multiple events

Array form:

::: code-group
<<< @/code/event/on/constMore.ts
<<< @/code/event/on/constMore.js
:::

String form:

::: code-group
<<< @/code/event/on/more.ts
<<< @/code/event/on/more.js
:::

### Listen to an event only once

::: code-group
<<< @/code/event/on/once.ts
<<< @/code/event/on/once.js
:::
