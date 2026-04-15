# Grouping

## Key Methods

### group(custom: [`IGroup`](../../../../reference/display/Group.md) | [`IGroupInputData`](../../../../api/interfaces/IGroupInputData.md)): [`IGroup`](../../../../reference/display/Group.md)

Groups the selected elements. You can pass in a custom Group instance or a JSON object.

The new group will include the following additional properties:

```ts
group.editable = true
group.hitChildren = false
```

### ungroup(): [`UI`](../../../../reference/display/UI.md)[]

Ungroups the selected elements.

Note that [Box](../../../../reference/display/Box.md) / [Frame](../../../../reference/display/Frame.md) elements do not support ungrouping to prevent issues. If you need grouping/ungrouping, please use Group elements instead.

### Group control

### openGroup([`IGroup`](../../../../reference/display/Group.md))

Opens a group, simulating the behavior of double-clicking to enter a group.

### closeGroup([`IGroup`](../../../../reference/display/Group.md))

Closes a group.

## Belongs to

### [Editor Element](../index.md#editor-元素)

## Example

### Manually group elements

<<< @/code/plugin/editor/editor/group.ts
