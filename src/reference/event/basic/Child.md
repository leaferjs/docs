# ChildEvent

Child 事件。

添加 / 移除事件的派发顺序为：子元素、父元素、Leafer 实例，[渲染生命周期](/guide/life/render.md) 中会监听。

[`leafer.ready`](./Leafer.md) 事件之后才会派发添加 / 移除事件，想在 ready 前 [执行相关事件](/reference/property/layer.md#waitparent-item-function-bind-object)？

## 事件名称

### ChildEvent.ADD

添加元素。

`child.add`

### ChildEvent.REMOVE

删除元素。

`child.remove`

### 仅派发给元素自身的事件

### ChildEvent.CREATED

创建元素。

`created`

### ChildEvent.MOUNTED

挂载元素到 Leafer 上。

`mounted`

### ChildEvent.UNMOUNTED

从 Leafer 上卸载元素。

`unmounted`

### ChildEvent.DESTROY

销毁元素。

`destroy`

## 关键属性

### child: [`ILeaf`](/api/interfaces/ILeaf.md)

子元素。

### parent: [`ILeaf`](/api/interfaces/ILeaf.md)

父元素。

## 继承

### [Event](./Event.md)

<!-- ## API

### [ChildEvent](/api/classes/ChildEvent.md) -->

## 示例

::: code-group
<<< @/code/event/leafer/child.ts
<<< @/code/event/leafer/child.js
:::
