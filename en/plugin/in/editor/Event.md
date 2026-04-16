<script setup>
import Case from '/component/Case.vue'
</script>

# Editor Events

## [EditorEvent](../../../api/classes/EditorEvent.md)

Base event.

Inherits [Event](../../../reference/event/basic/Event.md).

### Event Properties

### editor: [`Editor`](./index.md)

编辑器对象。

### value: [`UI`](../../../reference/display/UI.md) | [`UI`](../../../reference/display/UI.md)[]

Selected / hovered elements.

### oldValue: [`UI`](../../../reference/display/UI.md) | [`UI`](../../../reference/display/UI.md)[]

Previous selected / hovered elements.

### list: [`UI`](../../../reference/display/UI.md)[]

Current selected / hovered element list. Empty if none.

### oldList: [`UI`](../../../reference/display/UI.md)[]

Previous selected / hovered element list. Empty if none.

### Event Names

### EditorEvent.SELECT

Select event.

Triggered on both select and deselect. Use [editor.target](./index.md#target-ui-ui) to get selected elements.

`editor.select`

### EditorEvent.HOVER

hover 元素事件。

Triggered on both hover and un-hover. Use [editor.hoverTarget](./index.md#hovertarget-ui) to get hovered elements.

`editor.hover`

## [EditorMoveEvent](../../../api/classes/EditorMoveEvent.md)

Move event.

Inherits [EditorEvent](#editorevent).

### Event Properties

### moveX: `number`

Movement distance on the X axis (world coordinates).

### moveY: `number`

Movement distance on the Y axis (world coordinates).

### Event Names

### EditorMoveEvent.MOVE

Move element event.

`editor.move`

## [EditorScaleEvent](../../../api/classes/EditorScaleEvent.md)

Scale (resize) event.

Inherits [EditorEvent](#editorevent).

### Event Properties

### worldOrigin: [`IPointData`](../../../api/interfaces/IPointData.md)

Center point of transformation (world coordinates).

### scaleX: `number`

Scale value on X axis.

### scaleY: `number`

Scale value on Y axis.

### transform?: [`IMatrixData`](../../../api/interfaces/IMatrixData.md)

变换属性，当选择多个元素进行缩放大小时，内部会通过 transform 操作元素进行变换。

### Event Names

### EditorScaleEvent.SCALE

Scale event (resize elements).

`editor.scale`

## [EditorRotateEvent](../../../api/classes/EditorRotateEvent.md)

Rotate event.

Inherits [EditorEvent](#editorevent).

### Event Properties

### rotation: number

Rotation angle.

### transform?: [`IMatrixData`](../../../api/interfaces/IMatrixData.md)

Transform data. When multiple elements are rotated, internal transform operations are applied.

### Event Names

### EditorRotateEvent.ROTATE

Rotate element event.

`editor.rotate`

## [EditorSkewEvent](../../../api/classes/EditorSkewEvent.md)

Skew event.

Inherits [EditorEvent](#editorevent).

### Event Properties

### worldOrigin: [`IPointData`](../../../api/interfaces/IPointData.md)

Center point of transformation (world coordinates).

### skewX: `number`

Skew value on X axis.

### skewY: `number`

Skew value on Y axis.

### transform?: [`IMatrixData`](../../../api/interfaces/IMatrixData.md)

Transform data. When multiple elements are skewed, internal transform operations are applied.

### Event Names

### EditorSkewEvent.SKEW

Skew element event.

`editor.skew`

## Example

### Listen to selection events

<<< @/code/plugin/editor/event/select.ts
