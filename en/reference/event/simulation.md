# Simulated Interaction

Can be used for automated testing, replaying user actions, and more.

Interact with the engine like operating an input device, automatically triggering composite events. For example, `pointerDown` followed by `pointerUp` triggers a `tap` event, and `pointerDown` followed by `pointerMove` triggers a `drag` event.

If you only want to trigger a simple interaction event, you can use the element’s [emit()](../UI/emit.md) method.

## Key Methods

All simulation methods are available on the `leafer.interaction` instance.

### pointerDown ( data: [`IPointerEvent`](../../api/interfaces/IPointerEvent.md) )

Press pointer.

### pointerMove ( data: [`IPointerEvent`](../../api/interfaces/IPointerEvent.md) )

Move pointer.

### pointerUp ( data?: [`IPointerEvent`](../../api/interfaces/IPointerEvent.md) )

Release pointer.

### zoom ( data: [`IZoomEvent`](../../api/interfaces/IZoomEvent.md) )

Zoom action.

### move ( data: [`IMoveEvent`](../../api/interfaces/IMoveEvent.md) )

Pan action.

### rotate ( data: [`IRotateEvent`](../../api/interfaces/IRotateEvent.md) )

Rotate action.

## Example

### Simulate click

Simulate left, middle, and right mouse clicks in sequence, which will automatically trigger a `tap` event.

<<< @/code/interaction/pointer-down.ts

### Simulate drag event

<<< @/code/interaction/drag.ts

### Simulate zoom

<<< @/code/interaction/zoom.ts

### Simulate move

<<< @/code/interaction/move.ts

### Simulate rotation

::: code-group
<<< @/code/interaction/rotate.ts
<<< @/code/interaction/rotate.js
:::
