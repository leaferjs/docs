# Application and Engine Configuration

### [Basics](./base.md)     [Viewport Type](./type.md)     [Canvas](./canvas.md)     Tap     [Multi-touch](./multiTouch.md)     [Touch](./touch.md)     [Wheel](./wheel.md)     [Panning View](./move.md)     [Zoom View](./zoom.md)

##

Tap interaction related configuration. Changes made during engine runtime will take effect immediately via [app.config.pointer](../../display/Leafer.md#config-ileaferconfig).

:::tip Note
Under the [App structure](../../../guide/advanced/app.md), settings can only be configured on the [App](../../display/App.md) config.
:::

## Key Properties

### pointer.type: `'mouse'` | `'pointer'` | `'touch'`

Which native event type is used to trigger [PointerEvent](../../event/ui/Pointer.md) events. Default is 'pointer'.

'mouse' means native MouseEvent, 'touch' means native TouchEvent.

### pointer.snap: `boolean`

Whether to round interaction coordinates to integers to avoid decimals. Default is true.

### pointer.hitRadius: `number`

Collision radius of the pointer. Default is 5.

### pointer.through: `boolean`

Whether click events include a [through path](../../event/ui/UIEvent.md#throughpath-ileaflist), which allows access to underlying elements covered by the current element.

### pointer.tapMore: `boolean`

Whether `tap`, `double_tap`, and `long_tap` events can be triggered simultaneously. Default is false (only one is triggered).

### pointer.tapTime: `number`

Maximum interval for double-tap detection between clicks. Default is 120ms.

A double-tap must be completed within 120ms + 120ms interval + 120ms; otherwise it will not be recognized.

### pointer.longPressTime: `number`

Minimum duration required to trigger a long-press event. Default is 800ms.

### pointer.transformTime: `number`

When zoom/scroll/rotation events stop triggering, an end event is automatically fired after a delay. Default is 500ms.

Since mouse wheel and trackpad do not provide explicit end events, this is simulated.

### pointer.hover: `boolean`

Whether to dispatch `pointer.over`, `pointer.out`, `pointer.enter`, and `pointer.leave` events. Default is true.

Can be set to false for mobile devices.

### pointer.dragHover: `boolean`

Whether to dispatch `pointer.over`, `pointer.out`, `pointer.enter`, and `pointer.leave` events during dragging. Default is true.

### pointer.dragLimitAnimate: `boolean` | `number`

Whether elements constrained by [dragBounds](../../UI/dragBounds.md) animate back into place after dragging ends. Default is false (real-time constraint).

A value between 0.1 and 0.9 can be set to control animation speed. true uses a default speed of 0.3.

### pointer.dragDistance: `number`

Minimum movement distance required to trigger a drag event, used to prevent accidental activation. Default is 2.

### pointer.swipeDistance: `number`

Minimum movement distance required to trigger a swipe event. Default is 20.

### pointer.preventDefault: `boolean`

Whether to prevent the browser's default behavior. Default is false.

### pointer.preventDefaultMenu: `boolean`

Whether to prevent the browser's default context menu. Default is false.

## Example

### Disable pointer hit radius

::: code-group
<<< @/code/app/config/hitRadius.ts [Leafer]

<<< @/code/app/config/app/hitRadius.ts [App]
:::

### Get through path

::: code-group
<<< @/code/app/config/throughPath.ts [Leafer]

<<< @/code/app/config/app/throughPath.ts [App]
:::
