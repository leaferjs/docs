# EditorSkewEvent

编辑器的倾斜事件，通过 `app.editor.on()` 监听。

## 事件属性

### worldOrigin: [`IPointData`](/api/interfaces/IPointData.md)

围绕的中心点（世界坐标）。

### skewX: `number`

X 轴倾斜值（增量）。

### skewY: `number`

Y 轴倾斜值（增量）。

### transform?: [`IMatrixData`](/api/interfaces/IMatrixData.md)

变换属性（增量），当选择多个元素进行倾斜时，内部会通过 transform 操作元素进行变换。

## 事件名称

### EditorSkewEvent.SKEW

倾斜元素事件。

`editor.skew`

## 辅助

[editor.editBox.enterPoint](../EditBox.md#enterpoint-editpoint) 表示当前正在操作的控制点。

## 继承事件

### [Event](/reference/event/basic/Event.md)

<!-- ## API

### [EditorSkewEvent](/api/classes/EditorSkewEvent.md) -->
