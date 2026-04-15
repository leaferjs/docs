# DragEvent

Drag event.

::: tip Inheritance
DragEvent  >  [PointerEvent](./Pointer)  >  [UIEvent](./UIEvent.md)  >  [Event](../basic/Event.md)

<br/>

When imported via a `<script>` tag, use the alias **MyDragEvent** instead.
:::

## Event Names

### DragEvent.START

Start dragging event.

`drag.start`

### DragEvent.DRAG

Dragging in progress.

`drag`

### DragEvent.END

End dragging event.

`drag.end`

### State Events

These events are triggered by elements encountered during dragging. They can be used with [DropEvent](./Drop.md) to implement enter/leave effects before `drop`.

### DragEvent.OVER

Dragged element over another element.

`drag.over`

### DragEvent.OUT

Dragged element out of another element.

`drag.out`

### DragEvent.ENTER

Dragged element enters another element.

`drag.enter`

### DragEvent.LEAVE

Dragged element leaves another element.

`drag.leave`

## Key Properties

### moveX: `number`

X-axis offset of the drag event (world coordinates).

### moveY: `number`

Y-axis offset of the drag event (world coordinates).

### totalX: `number`

Total X-axis movement of the current drag session (world coordinates).

### totalY: `number`

Total Y-axis movement of the current drag session (world coordinates).

## Coordinate Conversion Methods

### Move distance

Conversion methods for `moveX`, `moveY`.

### getPageMove ( ): [`IPointData`](../../interface/math/Math.md#ipointdata)

Get movement offset in page coordinate space.

### getInnerMove ( relative?: [`UI`](../../display/UI.md)): [`IPointData`](../../interface/math/Math.md#ipointdata)

Get movement relative to the inner coordinate system of a given element. If `relative` is not provided, defaults to the current listening element.

### getLocalMove ( relative: [`UI`](../../display/UI.md)): [`IPointData`](../../interface/math/Math.md#ipointdata)

Get movement relative to the local coordinate system of a given element. If `relative` is not provided, defaults to the current listening element.

### Total movement

Conversion methods for `totalX`, `totalY`.

### getPageTotal ( ): [`IPointData`](../../interface/math/Math.md#ipointdata)

Get total movement in page coordinate space.

### getInnerTotal ( relative?: [`UI`](../../display/UI.md)): [`IPointData`](../../interface/math/Math.md#ipointdata)

Get total movement relative to the inner coordinate system of a given element.

### getLocalTotal ( relative: [`UI`](../../display/UI.md)): [`IPointData`](../../interface/math/Math.md#ipointdata)

Get total movement relative to the local coordinate system of a given element.

### Drag area

### getPageBounds ( ): [`IBoundsData`](../../interface/math/Math.md#iboundsdata)

Get the drag area in page coordinate space. Useful for quickly [creating shapes](../../../plugin/in/editor/index.md#creating-shapes-mode).

## Static Methods

### DragEvent.setList ( list: [`ILeaf`](../../../api/interfaces/ILeaf.md) | [`ILeaf`](../../../api/interfaces/ILeaf.md)[] | [`ILeafList`](../../../api/interfaces/ILeafList.md) )

Manually set the list of draggable objects (they will follow the pointer movement). Automatically reset after the [`drop`](./Drop.md) event is triggered.

### DragEvent.setData ( data: [`IObject`](../../../api/interfaces/IObject.md) )

Set drag data. Automatically reset after the [`drop`](./Drop.md) event is triggered.

## Inherited Events

### DragEvent  >  [PointerEvent](./Pointer)  >  [UIEvent](./UIEvent.md)  >  [Event](../basic/Event.md)

<!-- ## API

### [DragEvent](../../../api/classes/DragEvent.md) -->

## Example

### Manual dragging of elements

Elements with default [draggable](../../UI/draggable.md) enabled or set via [DragEvent.setList()](./Drag.md#static-methods) will be automatically draggable.

::: code-group
<<< @/code/event-ui/drag/simple.ts
<<< @/code/event-ui/drag/simple.js
:::

### Check if an element is being dragged

```ts
leafer.interaction.isDrag(leaf)
```

### Pen tool

Start drawing lines by dragging with the mouse. The canvas can still be zoomed and panned.

::: code-group
<<< @/code/display/Pen/draw.ts
<<< @/code/display/Pen/draw.js
:::
