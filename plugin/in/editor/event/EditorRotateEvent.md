# EditorRotateEvent

编辑器的旋转事件，通过 `app.editor.on()` 监听。

## 事件属性

### rotation: `number`

旋转角度（增量）。

### transform?: [`IMatrixData`](/api/interfaces/IMatrixData.md)

变换属性（增量），当选择多个元素进行旋转时，内部会通过 transform 操作元素进行变换。

## 事件名称

### EditorRotateEvent.ROTATE

旋转元素事件。

`editor.rotate`

## 辅助

[editor.editBox.enterPoint](../EditBox.md#enterpoint-editpoint) 表示当前正在操作的控制点。

## 继承事件

### [Event](/reference/event/basic/Event.md)

<!-- ## API

### [EditorRotateEvent](/api/classes/EditorRotateEvent.md) -->
