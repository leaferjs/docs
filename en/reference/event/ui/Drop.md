# DropEvent

Drag and drop event.

::: tip Inheritance
DropEvent  >  [PointerEvent](./Pointer)  >  [UIEvent](./UIEvent.md)  >  [Event](../basic/Event.md)
:::

## Event Names

### DropEvent.DROP

Drop target event.

`drop`

## Key Properties

### list: [`ILeafList`](../../../api/interfaces/ILeafList.md)

List of objects to be dropped. This represents the currently dragged objects. Can be additionally set via [DragEvent.setList()](./Drag.md#static-methods).

### data?: `IObject`

Custom data set via [DragEvent.setData()](./Drag.md#static-methods).

## Inherited Events

### DropEvent  >  [PointerEvent](./Pointer)  >  [UIEvent](./UIEvent.md)  >  [Event](../basic/Event.md)

<!--
## API

### [DropEvent](../../../api/classes/DropEvent.md) -->

## Example

### Drop element into a Group

::: code-group
<<< @/code/event-ui/drop/simple.ts
<<< @/code/event-ui/drop/simple.js
:::
