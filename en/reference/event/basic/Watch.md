# WatchEvent

Watch event.

To understand the event trigger order, please refer to the [render lifecycle](../../../guide/life/render.md) diagram.

::: tip Inheritance
WatchEvent  >  [Event](../basic/Event.md)
:::

## Event Names

### WatchEvent.REQUEST

Request watch data.

`watch.request`

### WatchEvent.DATA

Emit watch data.

`watch.data`

## Key Properties

### data: [`IWatchEventData`](../../../api/interfaces/IWatchEventData.md)

Watch data.

## Inherited Events

### WatchEvent  >  [Event](../basic/Event.md)

<!--
## API

### [WatchEvent](../../../api/classes/WatchEvent.md) -->

## Example

::: code-group
<<< @/code/event/leafer/watch.ts
<<< @/code/event/leafer/watch.js
:::
