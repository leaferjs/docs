# ChildEvent

Child events.

The dispatch order for add/remove events is: child element → parent element → Leafer instance. These are also observed during the [render lifecycle](../../../guide/life/render.md).

Events are only dispatched after [`leafer.ready`](./Leafer.md). Want to [handle related events before ready](../../UI/parent.md#waitparent-item-function-bind-object)?

::: tip Inheritance
ChildEvent  >  [Event](../basic/Event.md)
:::

## Event Names

### ChildEvent.ADD

Element is added.

`child.add`

### ChildEvent.REMOVE

Element is removed.

`child.remove`

### Events dispatched only on the element itself

### ChildEvent.CREATED

Element is created.

`created`

### ChildEvent.MOUNTED

Element is mounted to Leafer.

`mounted`

### ChildEvent.UNMOUNTED

Element is unmounted from Leafer.

`unmounted`

### ChildEvent.DESTROY

Element is destroyed.

`destroy`

## Key Properties

### child: [`ILeaf`](../../../api/interfaces/ILeaf.md)

Child element.

### parent: [`ILeaf`](../../../api/interfaces/ILeaf.md)

Parent element.

## Inherited Events

### ChildEvent &nbsp;>&nbsp; [Event](../basic/Event.md)

<!-- ## API

### [ChildEvent](../../../api/classes/ChildEvent.md) -->

## Example

::: code-group
<<< @/code/event/leafer/child.ts
<<< @/code/event/leafer/child.js
:::
