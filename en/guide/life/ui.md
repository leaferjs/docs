# Element Lifecycle

元素从创建、添加、挂载，到移除、解除挂载、销毁的全过程，可在初始化事件中监听。

<br/>

![Lifecycle](/svg/ui_life.svg)

<br/>

## Example

Different states in the lifecycle are notified through [ChildEvent](../../reference/event/basic/Child.md) and [PropertyEvent](../../reference/event/basic/Property.md).

### Listening to element lifecycle events

Listen during initialization

<<< @/code/life/ui/index.ts

Listen via `on`

<<< @/code/life/ui/on.ts

## Next Step

### [Engine Lifecycle](./leafer.md)
