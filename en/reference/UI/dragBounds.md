# dragBounds

限制拖动范围。

## Key Properties

### dragBounds?: [`IBoundsData`](../../api/interfaces/IBoundsData.md) | `'parent'`

Defines the draggable boundary of the element.
`'parent'` means the element can only be dragged within its parent (only supported when the parent is a [Box](../display/Box.md) / [Frame](../display/Frame.md)).

The [graphic editor](../../plugin/in/editor/index.md) also supports [widthRange](./editable.md#widthrange-irangesize) / [heightRange](./editable.md#heightrange-irangesize) to constrain the element’s own size range.

### dragBoundsType?: [`IDragBoundsType`](../../api/modules.md#idragboundstype)

Defines whether the drag bounds are calculated from inside or outside the element. Default is `'auto'`.

```ts
type IDragBoundsType =
  | 'auto' // Automatically determined: outer when element is smaller than dragBounds, inner when larger
  | 'outer' // Drag range is outside the element; element is constrained within dragBounds
  | 'inner' // Drag range is inside the element; element always covers dragBounds
```

## 归属

### [UI Elements](../display/UI.md)

## Examples

### Restrict dragging inside a Frame

:::code-group
<<< @/code/property/dragBounds/frame.ts [Leafer]
<<< @/code/property/dragBounds/app/frame.ts [App]
:::
