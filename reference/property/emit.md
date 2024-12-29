# 派发事件

## 关键方法

### emit ( type: `string`, event?: [`IEvent`](/api/interfaces/IEvent.md) | `IObject`, capture?: `boolean` )

手动派发事件, event 参数可以为一个自定义的 object 数据对象, UI 事件会自动生成， 如： leaf.emit(`PointEvent.DOWN`)。

### emitEvent ( event?: [`IEvent`](/api/interfaces/IEvent.md) , capture?: `boolean` )

手动派发事件，event 参数必须为 IEvent 对象，会自动绑定 current。

## 归属

### [UI](/reference/display/UI.md)

## 示例

### 派发自定义事件

<<< @/code/event/emit/custom.ts

### 模拟派发交互事件

::: code-group
<<< @/code/event/emit/ui.ts
<<< @/code/event/emit/ui.js
:::
