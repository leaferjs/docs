<script setup>
import Case from '/component/Case.vue'
</script>

# 编辑器事件

## [EditorEvent](/api/classes/EditorEvent.md)

基础事件。

继承 [Event](/reference/event/basic/Event.md) 事件。

### 事件属性

### editor: [`Editor`](/plugin/in/editor/index.md)

编辑器对象。

### value：[`UI`](/reference/display/UI.md) | [`UI`](/reference/display/UI.md)[]

选中 / hover 元素。

### oldValue：[`UI`](/reference/display/UI.md) | [`UI`](/reference/display/UI.md)[]

旧的选中 / hover 元素。

### list： [`UI`](/reference/display/UI.md)[]

选中 / hover 元素列表，没有时为空数组。

### oldList： [`UI`](/reference/display/UI.md)[]

旧的选中 / hover 元素列表，没有时为空数组。

### 事件名称

### EditorEvent.SELECT

选择元素事件。

选择和取消都会触发， 通过 [editor.target](/plugin/in/editor/index.md#target-ui-ui) 获取选中的元素。

`editor.select`

### EditorEvent.HOVER

hover 元素事件。

选择和取消都会触发， 通过 [editor.hoverTarget](/plugin/in/editor/index.md#hovertarget-ui) 获取选中的元素列表。

`editor.hover`

## [EditorMoveEvent](/api/classes/EditorMoveEvent.md)

移动事件。

继承 [EditorEvent](#editorevent) 事件。

### 事件属性

### moveX: `number`

X 轴移动距离（世界坐标）

### moveY: `number`

Y 轴移动距离（世界坐标）

### 事件名称

### EditorMoveEvent.MOVE

移动元素事件。

`editor.move`

## [EditorScaleEvent](/api/classes/EditorScaleEvent.md)

缩放大小事件。

继承 [EditorEvent](#editorevent) 事件。

### 事件属性

### worldOrigin: [`IPointData`](/api/interfaces/IPointData.md)

围绕的中心点（世界坐标）。

### scaleX: `number`

X 轴的缩放值

### scaleY: `number`

Y 轴的缩放值

### transform?: [`IMatrixData`](/api/interfaces/IMatrixData.md)

变换属性，当选择多个元素进行缩放大小时，内部会通过 transform 操作元素进行变换。

### 事件名称

### EditorScaleEvent.SCALE

缩放大小事件（调整元素大小）。

`editor.scale`

## [EditorRotateEvent](/api/classes/EditorRotateEvent.md)

旋转事件。

继承 [EditorEvent](#editorevent) 事件。

### 事件属性

### rotation: number

旋转角度。

### transform?: [`IMatrixData`](/api/interfaces/IMatrixData.md)

变换属性，当选择多个元素进行旋转时，内部会通过 transform 操作元素进行变换。

### 事件名称

### EditorRotateEvent.ROTATE

旋转元素事件。

`editor.rotate`

## [EditorSkewEvent](/api/classes/EditorSkewEvent.md)

倾斜事件。

继承 [EditorEvent](#editorevent) 事件。

### 事件属性

### worldOrigin: [`IPointData`](/api/interfaces/IPointData.md)

围绕的中心点（世界坐标）。

### skewX: `number`

X 轴倾斜值。

### skewY: `number`

Y 轴倾斜值。

### transform?: [`IMatrixData`](/api/interfaces/IMatrixData.md)

变换属性，当选择多个元素进行倾斜时，内部会通过 transform 操作元素进行变换。

### 事件名称

### EditorSkewEvent.SKEW

倾斜元素事件。

`editor.skew`

## 示例

### 监听选择事件

<<< @/code/plugin/editor/event/select.ts
