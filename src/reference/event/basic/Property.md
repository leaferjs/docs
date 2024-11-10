# PropertyEvent

元素属性事件，[`leafer.ready`](./Leafer.md) 事件之后才会派发此事件。

事件派发的顺序为：元素自身、Leafer 实例，[渲染生命周期](/guide/life/render.md) 中会监听此事件。

## 事件名称

### PropertyEvent.CHANGE

同时派发给元素自身、Leafer 实例。

`property.change`

### PropertyEvent.LEAFER_CHANGE

只派发给 Leafer 实例自身。

`property.leafer_change`

## 关键属性

### target: [`ILeaf`](/api/interfaces/ILeaf.md)

目标对象

### attrName: `string`

属性名称。

### oldValue: `IValue`

旧的值。

### newValue: `IValue`

新的值。

## 继承事件

### [Event](./Event.md)

<!-- ## API

### [PropertyEvent](/api/classes/PropertyEvent.md) -->

## 示例

::: code-group
<<< @/code/event/leafer/property.ts
<<< @/code/event/leafer/property.js
:::
