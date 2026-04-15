# EditorSkewEvent

Editor skew events, listened via `app.editor.on()`.

The editor can modify skew data via the [beforeSkew](../config/event.md#beforeskew-ieditorbeforeskew) hook.

## Event Properties

### worldOrigin: [`IPointData`](../../../../api/interfaces/IPointData.md)

The center point used for transformation (world coordinates).

### skewX: `number`

Skew value on the X axis (incremental).

### skewY: `number`

Skew value on the Y axis (incremental).

### transform?: [`IMatrixData`](../../../../api/interfaces/IMatrixData.md)

Transform data (incremental). When multiple elements are skewed, the editor internally applies transformations via transform operations.

## Event Names

### EditorSkewEvent.BEFORE_SKEW

Before skew event.

`editor.before_skew`

### EditorSkewEvent.SKEW

Skew event.

`editor.skew`

## Helper

[editor.editBox.dragPoint](../EditBox.md#dragpoint-editpoint) indicates the control point currently being operated.

## Inherited Events

### [Event](../../../../reference/event/basic/Event.md)

## Example

### Element skew event

<<< @/code/plugin/editor/event/skew.ts
