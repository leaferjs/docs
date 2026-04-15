# EditorMoveEvent

Editor move events, listened via `app.editor.on()`.

The editor can modify movement data via the [beforeMove](../config/event.md#beforemove-ieditorbeforemove) hook.

## Event Properties

### moveX: `number`

Movement distance on the X axis (world coordinates).

### moveY: `number`

Movement distance on the Y axis (world coordinates).

## Event Names

### EditorMoveEvent.BEFORE_MOVE

Before move event.

`editor.before_move`

### EditorMoveEvent.MOVE

Move event.

`editor.move`

## Inherited Events

### [Event](../../../../reference/event/basic/Event.md)

## Example

### Element move events

<<< @/code/plugin/editor/event/move.ts
