# EditorRotateEvent

Editor rotation events, listened via `app.editor.on()`.

The editor can modify rotation data via the [beforeRotate](../config/event.md#beforerotate-ieditorbeforerotate) hook.

## Event Properties

### rotation: `number`

Rotation angle (incremental).

### transform?: [`IMatrixData`](../../../../api/interfaces/IMatrixData.md)

Transform data (incremental). When multiple elements are selected and rotated, the editor applies transformations internally via transform operations.

## Event Names

### EditorRotateEvent.BEFORE_ROTATE

Before rotate event.

`editor.before_rotate`

### EditorRotateEvent.ROTATE

Rotate event.

`editor.rotate`

## Helper

[editor.editBox.dragPoint](../EditBox.md#dragpoint-editpoint) indicates the control point currently being operated.

## Inherited Events

### [Event](../../../../reference/event/basic/Event.md)

## Example

### Element rotation event

<<< @/code/plugin/editor/event/rotate.ts
