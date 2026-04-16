# EditorScaleEvent

Editor resize (scale) events, listened via `app.editor.on()`.

The editor can modify scale data via the [beforeScale](../config/event.md#beforescale-ieditorbeforescale) hook.

## Event Properties

### worldOrigin: [`IPointData`](../../../../api/interfaces/IPointData.md)

The center point used for scaling (world coordinates).

### scaleX: `number`

Scale value on the X axis (incremental).

### scaleY: `number`

Scale value on the Y axis (incremental).

### transform?: [`IMatrixData`](../../../../api/interfaces/IMatrixData.md)

变换属性（增量），当选择多个元素进行缩放大小时，内部会通过 transform 操作元素进行变换。

## Event Names

### EditorScaleEvent.BEFORE_SCALE

Before scale event (before resizing elements).

`editor.before_scale`

### EditorScaleEvent.SCALE

Scale event (resizing elements).

`editor.scale`

## Helper

[editor.editBox.dragPoint](../EditBox.md#dragpoint-editpoint) indicates the control point currently being operated.

## Inherited Events

### [Event](../../../../reference/event/basic/Event.md)

<!-- ## API

### [EditorScaleEvent](../../../../api/classes/EditorScaleEvent.md) -->

## Example

### Element scale (resize) event

<<< @/code/plugin/editor/event/scale.ts
