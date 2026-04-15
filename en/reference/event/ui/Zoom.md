# ZoomEvent

Zoom event, typically used to scale the view or elements in [viewport interaction](../../../guide/advanced/viewport.md).

1. Mobile / touchpad: pinch with two fingers.
2. Mouse: Ctrl / Command + scroll wheel.

::: tip Inheritance
ZoomEvent  >  [PointerEvent](./Pointer)  >  [UIEvent](./UIEvent.md)  >  [Event](../basic/Event.md)

<br/>

Requires installing the [viewport plugin](../../../plugin/in/viewport/index.md), or directly installing [leafer-editor](../../../guide/install/editor/start.md) (which already includes this plugin).
:::

## Event Names

### ZoomEvent.START

Start zoom event.

`zoom.start`

### ZoomEvent.ZOOM

Zoom event.

`zoom`

### ZoomEvent.END

End zoom event.

`zoom.end`

## Key Properties

### scale: `number`

Scale change in this zoom event.

### totalScale: `number`

Total accumulated scale change in the current session.

### multiTouch: `boolean`

Whether the event is triggered by multi-touch input.

## Inherited Events

### ZoomEvent  >  [PointerEvent](./Pointer)  >  [UIEvent](./UIEvent.md)  >  [Event](../basic/Event.md)

<!-- ## API

### [ZoomEvent](../../../api/classes/ZoomEvent.md) -->

## Example

::: code-group
<<< @/code/event-ui/zoom/simple.ts
<<< @/code/event-ui/zoom/simple.js
:::
