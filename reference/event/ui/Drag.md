# DragEvent

拖动事件。

::: tip 继承
DragEvent &nbsp;>&nbsp; [PointerEvent](./Pointer) &nbsp;>&nbsp; [UIEvent](./UIEvent.md) &nbsp;>&nbsp; [Event](../basic/Event.md)

<br/>

[ script 标签引入](/guide/install/ui/start.md#通过-script-标签引入) 需用别名 **MyDragEvent** 代替。
:::

## 事件名称

### DragEvent.START

开始拖动事件

`drag.start`

### DragEvent.DRAG

拖动事件中

`drag`

### DragEvent.END

结束拖动事件

`drag.end`

### 状态事件

拖动中途径的元素触发，可配合 [DropEvent](./Drop.md) 实现 `drop` 前的 移入移出效果。

### DragEvent.OVER

拖动元素 over。

`drag.over`

### DragEvent.OUT

拖动元素 out。

`drag.out`

### DragEvent.ENTER

拖动元素进入。

`drag.enter`

### DragEvent.LEAVE

拖动元素离开。

`drag.leave`

## 关键属性

### moveX: `number`

拖动事件偏移的 X 轴距离（世界坐标）

### moveY: `number`

拖动事件偏移的 Y 轴距离（世界坐标）

### totalX: `number`

本轮拖动事件偏移的 X 轴总距离（世界坐标）

### totalY: `number`

本轮拖动事件偏移的 Y 轴总距离（世界坐标）

## 转换坐标方法

### 移动距离

moveX, moveY 属性的坐标转换。

### getPageMove ( ): [`IPointData`](/reference/interface/math/Math#ipointdata)

获取在 page 坐标系中的偏移距离。

### getInnerMove ( relative?: [`UI`](/reference/display/UI.md)): [`IPointData`](/reference/interface/math/Math#ipointdata)

获取相对于 relative [内部坐标](/guide/basic/coordinate.md#inner) 的偏移距离，relative 不存在时为当前侦听元素。

### getLocalMove ( relative: [`UI`](/reference/display/UI.md)): [`IPointData`](/reference/interface/math/Math#ipointdata)

获取相对于 relative [本地坐标](/guide/basic/coordinate.md#local) 的偏移距离，relative 不存在时为当前侦听元素。

### 移动总距离

totalX, totalY 属性的坐标转换。

### getPageTotal ( ): [`IPointData`](/reference/interface/math/Math#ipointdata)

获取在 page 坐标系中的总偏移距离。

### getInnerTotal ( relative?: [`UI`](/reference/display/UI.md)): [`IPointData`](/reference/interface/math/Math#ipointdata)

获取相对于 relative [内部坐标](/guide/basic/coordinate.md#inner) 的总偏移距离，relative 不存在时为当前侦听元素。

### getLocalTotal ( relative: [`UI`](/reference/display/UI.md)): [`IPointData`](/reference/interface/math/Math#ipointdata)

获取相对于 relative [本地坐标](/guide/basic/coordinate.md#local) 的总偏移距离，relative 不存在时为当前侦听元素。

### 拖拽区域

### getPageBounds ( ): [`IBoundsData`](/reference/interface/math/Math#iboundsdata)

获取在 page 坐标系中形成的拖拽区域，可用于快速 [创建图形](/plugin/in/editor/Editor.md#创建图形模式)。

## 静态方法

### DragEvent.setList ( list: [`ILeaf`](/api/interfaces/ILeaf.md) |[`ILeaf`](/api/interfaces/ILeaf.md)[] | [`ILeafList`](/api/interfaces/ILeafList.md) )

另外设置拖拽的对象列表（会跟随鼠标移动），[`drop`](./Drop.md) 事件触发后自动重置。

### DragEvent.setData ( data: [`IObject`](/api/interfaces/IObject.md) )

设置拖拽数据，[`drop`](./Drop.md) 事件触发后自动重置。

<!-- ## 继承事件

### [PointerEvent](./Pointer) -->

<!-- ## API

### [DragEvent](/api/classes/DragEvent.md) -->

## 示例

### 手动拖拽元素

默认 [drggable](/reference/property/draggable.md) 为 true 或 [DragEvent.setList()](./Drag.md#静态方法) 的元素会自动拖拽。

::: code-group
<<< @/code/event-ui/drag/simple.ts
<<< @/code/event-ui/drag/simple.js
:::

### 检查元素是否正在被拖拽

```ts
leafer.interaction.isDrag(leaf)
```

### 画笔工具

按下鼠标拖动开始画线， 可以缩放平移画面

::: code-group
<<< @/code/display/Pen/draw.ts
<<< @/code/display/Pen/draw.js
:::
