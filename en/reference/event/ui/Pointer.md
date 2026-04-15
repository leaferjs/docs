# PointerEvent

Pointer events for mouse, pen, and touch input, supporting [context menu](#context-menu-1) events.

When native PointerEvent is not available, fallback priority for native events is:

PointerEvent > TouchEvent > MouseEvent

::: tip Inheritance
PointerEvent  >  [UIEvent](./UIEvent.md)  >  [Event](../basic/Event.md)

<br/>

When imported via a `<script>` tag, use the alias **MyPointerEvent** instead.
:::

## New Features

### Only one of multiple tap events is triggered

When listening to `tap`, `double_tap`, and `long_press` / `long_tap` simultaneously, only the most appropriate one is triggered by default. This behavior can be [configured](./Pointer.md#dispatch-multiple-tap-events-simultaneously) to trigger multiple events.

### Paired event triggering

After an element triggers `pointer.down`, it is guaranteed to trigger `pointer.up`, avoiding mismatched pairs caused by dragging or event cancellation.

### New properties

[left](./UIEvent.md#left-boolean), [middle](./UIEvent.md#left-boolean), [right](./UIEvent.md#left-boolean), [spaceKey](./UIEvent.md#spacekey-boolean).

### Context menu

[PointerEvent.MENU](#context-menu-1)

## Event Names

### Basic Events

### PointerEvent.DOWN

Pointer down event.

`pointer.down`

### PointerEvent.MOVE

Pointer move event.

`pointer.move`

### PointerEvent.UP

Pointer up event.

`pointer.up`

### PointerEvent.OVER

Over event.

`pointer.over`

### PointerEvent.OUT

Out event.

`pointer.out`

### PointerEvent.ENTER

Enter event.

`pointer.enter`

### PointerEvent.LEAVE

Leave event.

`pointer.leave`

### Composite Events

### PointerEvent.TAP

Tap event.

`tap`

### PointerEvent.DOUBLE_TAP

Double tap event.

`double_tap`

### PointerEvent.LONG_PRESS

Long press event (triggered during press).

`long_press`

### PointerEvent.LONG_TAP

Long tap event (triggered immediately after release following a long press).

`long_tap`

### PointerEvent.CLICK

Click event. Recommended to use `tap` instead.

`click`

### PointerEvent.DOUBLE_CLICK

Double click event. Recommended to use `double_tap` instead.

`double_click`

## Context Menu

### PointerEvent.MENU

Context menu event, equivalent to HTML `contextmenu`, triggered on press.

`pointer.menu`

### PointerEvent.MENU_TAP

Context menu tap event, triggered on release.

`pointer.menu_tap`

## Key Properties

### x: `number`

X position in the [world coordinate system](../../../guide/advanced/coordinate.md#world-world-coordinate-system).

### y: `number`

Y position in the [world coordinate system](../../../guide/advanced/coordinate.md#world-world-coordinate-system).

### width: `number`

Width of the contact area.

### height: `number`

Height of the contact area.

### pointerType: `string`

Type of input device:

- "mouse"
- "pen"
- "touch"

### multiTouch: `boolean`

Whether the event is from multi-touch input. Requires enabling [app.config.pointer.touch](../../config/app/pointer.md#pointer-touch-boolean) (except in mini program environments).

### pressure: `number`

Pressure value, range: 0–1.

### tangentialPressure?: `number`

Tangential pressure for pen input, range: -1 to 1.

Only available when `pointerType` is 'pen'.

### tiltX?: `number`

Angle between the plane formed by the pen and the y-axis and the y-z plane. Range: -90 to 90.

### tiltY?: `number`

Angle between the plane formed by the pen and the x-axis and the x-z plane. Range: -90 to 90.

### twist?: `number`

Clockwise rotation angle of the pen around its main axis. Range: 0–359 degrees.

### isCancel: `boolean`

Whether this is a canceled `PointerEvent.UP` event (triggered by native `pointer.cancel` or other cancellation).

## Auxiliary Properties

### dragging: `boolean`

Whether currently in dragging state (only for PointerEvent.MOVE).

### moving: `boolean`

Whether currently moving the viewport (only for PointerEvent.MOVE).

## Coordinate Conversion Methods

Conversion methods for `x`, `y`.

### getPagePoint ( ): [`IPointData`](../../interface/math/Math.md#ipointdata)

Get position in page coordinate system.

### getBoxPoint ( relative?: [`UI`](../../display/UI.md)): [`IPointData`](../../interface/math/Math.md#ipointdata)

Get position relative to the box coordinate system of a given element. Defaults to the current listener if `relative` is not provided.

### getInnerPoint ( relative?: [`UI`](../../display/UI.md)): [`IPointData`](../../interface/math/Math.md#ipointdata)

Get position relative to the inner coordinate system of a given element. Defaults to the current listener if `relative` is not provided.

### getLocalPoint ( relative?: [`UI`](../../display/UI.md)): [`IPointData`](../../interface/math/Math.md#ipointdata)

Get position relative to the local coordinate system of a given element. Defaults to the current listener if `relative` is not provided.

## Inherited Events

### PointerEvent  >  [UIEvent](./UIEvent.md)  >  [Event](../basic/Event.md)

<!-- ## API

### [PointerEvent](../../../api/classes/PointerEvent.md) -->

## Example

### Only one of multiple tap events is triggered

When listening to `tap`, `double_tap`, and `long_tap`, only one will be triggered by default.

<<< @/code/event-ui/pointer/tap.ts

### Dispatch multiple tap events simultaneously

Set `pointer.tapMore` to true, and `tap`, `double_tap`, and `long_tap` will all be triggered.

<<< @/code/event-ui/pointer/tapMulti.ts

### Show context menu in graphic editor

::: code-group
<<< @/code/event-ui/pointer/editor-menu.ts
<<< @/code/event-ui/pointer/editor-menu.js
:::
