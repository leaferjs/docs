# RotateEvent

Rotation event, typically used to rotate the view or elements in [viewport interaction](../../../guide/advanced/viewport.md).

1. Mobile: two-finger rotation
2. Touchpad: two-finger rotation (Safari only)

::: tip Inheritance
RotateEvent  >  [PointerEvent](./Pointer)  >  [UIEvent](./UIEvent.md)  >  [Event](../basic/Event.md)

<br/>

Requires installing the [viewport plugin](../../../plugin/in/viewport/index.md), or directly installing [leafer-editor](../../../guide/install/editor/start.md) (which already includes this plugin).
:::

## Event Names

### RotateEvent.START

Start rotation event.

`rotate.start`

### RotateEvent.ROTATE

Rotation event.

`rotate`

### RotateEvent.END

End rotation event.

`rotate.end`

## Key Properties

### rotation: `number`

Angle change in this rotation event.

### totalRotation: `number`

Total accumulated rotation in the current session.

### multiTouch: `boolean`

Whether the event is triggered by multi-touch input.

## Inherited Events

### RotateEvent  >  [PointerEvent](./Pointer)  >  [UIEvent](./UIEvent.md)  >  [Event](../basic/Event.md)

<!-- ## API

### [RotateEvent](../../../api/classes/RotateEvent.md) -->

## Example

::: code-group
<<< @/code/event-ui/rotate/simple.ts
<<< @/code/event-ui/rotate/simple.js
:::
