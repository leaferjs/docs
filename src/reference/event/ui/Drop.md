# DropEvent

拖放事件。

## 事件名称

### DropEvent.DROP

放置对象事件。

`drop`

## 关键属性

### list: [`ILeafList`](/api/interfaces/ILeafList.md)

待放置的对象列表，当前正在拖拽的对象列表，可通过 [DragEvent.setList()](./Drag.md#静态方法) 另外设置。

### data?: `IObject`

自定义数据，通过 [DragEvent.setData()](./Drag.md#静态方法) 设置。

## 继承

### [PointerEvent](./Pointer)

## API

### [DropEvent](/api/classes/DropEvent.md)

## 示例

### 将元素放置到 Group 中

::: code-group
<<< @/code/event-ui/drop/simple.ts
<<< @/code/event-ui/drop/simple.js
:::
