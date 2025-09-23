# MoveEvent

移动事件，一般用于[视口交互](/guide/advanced/viewport.md)中平移 视图 或 元素。

1. 移动端/触摸板: 双指滑动。
2. 鼠标: 滚轮（纵向滚动），Shift + 滚轮（横向滚动）。

::: tip 继承
MoveEvent &nbsp;>&nbsp; [DragEvent](./Drag) &nbsp;>&nbsp; [PointerEvent](./Pointer) &nbsp;>&nbsp; [UIEvent](./UIEvent.md) &nbsp;>&nbsp; [Event](../basic/Event.md)

<br/>

需安装 [视口插件](/plugin/in/viewport/index.md) 才能使用， 或直接安装 [leafer-editor](/guide/install/editor/start.md)（已集成此插件）。
:::

## 事件名称

### MoveEvent.START

开始移动事件。

`move.start`

### MoveEvent.MOVE

移动事件。

`move`

### MoveEvent.END

结束移动事件。

`move.end`

## 关键属性

### moveType: `'move'` | `'drag'`

移动视图的类型，drag 表示通过拖拽事件移动，move 表示通过滚轮、双指滑动事件移动。

### moveX: `number`

此次移动事件偏移的 X 轴距离（世界坐标）。

### moveY: `number`

此次移动事件偏移的 Y 轴距离（世界坐标）。

### totalX: `number`

本轮移动事件偏移的 X 轴总距离（世界坐标）。

### totalY: `number`

本轮移动事件偏移的 Y 轴总距离（世界坐标）。

### multiTouch: `boolean`

是否为多点触屏派发。

## 转换坐标方法

moveX, moveY 属性的转换。

### getPageMove ( ): [`IPointData`](/reference/interface/math/Math.md#ipointdata)

获取事件在 page 坐标系中的偏移距离。

### getInnerMove ( relative?: [`UI`](/reference/display/UI.md)): [`IPointData`](/reference/interface/math/Math.md#ipointdata)

获取事件相对于 relative 元素 [内部坐标](/guide/advanced/coordinate.md#inner-内部坐标系) 的偏移距离，relative 元素不存在时为当前侦听元素。

### getLocalMove ( relative?: [`UI`](/reference/display/UI.md)): [`IPointData`](/reference/interface/math/Math.md#ipointdata)

获取事件相对于 relative 元素 [本地坐标](/guide/advanced/coordinate.md#local-本地坐标系) 的偏移距离，relative 元素不存在时为当前侦听元素。

### 移动总距离

totalX, totalY 属性的转换。

### getPageTotal ( ): [`IPointData`](/reference/interface/math/Math.md#ipointdata)

获取事件在 page 坐标系中的总偏移距离。

### getInnerTotal ( relative?: [`UI`](/reference/display/UI.md)): [`IPointData`](/reference/interface/math/Math.md#ipointdata)

获取事件相对于 relative 元素 [内部坐标](/guide/advanced/coordinate.md#inner-内部坐标系) 的总偏移距离，relative 元素不存在时为当前侦听元素。

### getLocalTotal ( relative: [`UI`](/reference/display/UI.md)): [`IPointData`](/reference/interface/math/Math.md#ipointdata)

获取事件相对于 relative 元素 [本地坐标](/guide/advanced/coordinate.md#local-本地坐标系) 的总偏移距离，relative 元素不存在时为当前侦听元素。

<!-- ## 继承事件

### [DragEvent](./Drag) -->

<!-- ## API

### [MoveEvent](/api/classes/MoveEvent.md) -->

## 示例

::: code-group
<<< @/code/event-ui/move/simple.ts
<<< @/code/event-ui/move/simple.js
:::
