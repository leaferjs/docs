# ChildEvent

Child 事件。

[`leafer.ready`](./Leafer.md) 事件之后才会派发此事件，想在 ready 前 [执行相关事件](/reference/property/layer.md#waitparent)？

事件派发的顺序为：子元素、父元素、Leafer 实例，[渲染生命周期](/guide/life/render.md) 中会监听此事件。

## 事件名称

### ChildEvent.ADD

添加元素。

`child.add`

### ChildEvent.REMOVE

删除元素。

`child.remove`

### ChildEvent.DESTROY

销毁元素 （仅派发给元素自身）。

`child.destroy`

## 关键属性

### child: [`ILeaf`](/api/interfaces/ILeaf.md)

子元素。

### parent: [`ILeaf`](/api/interfaces/ILeaf.md)

父元素。

## 继承

### [Event](./Event.md)

## API

### [ChildEvent](/api/classes/ChildEvent.md)

## 示例

<<< @/code/event/leafer/child.ts
