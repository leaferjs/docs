# Editor State

## Key Properties

### visible: `boolean`

Whether the editor is visible. Default is true.

When hidden, interaction is also disabled.

### hittable: `boolean`

Whether the editor responds to interaction events. Default is true.

When set to false, all editor interactions are disabled.

### single: `boolean`

Whether a single element is selected.

### multiple: `boolean`

Whether multiple elements are selected.

### editing: `boolean`

Whether the editor is in editing state. Entered after selecting an element.

### innerEditing: `boolean`

Whether the editor is in internal editing state. Entered by double-clicking a single element (when an internal editor exists).

### groupOpening: `boolean`

Whether a group is currently opened. Double-clicking a group enters this state, allowing easier selection of elements inside the group.

### dragging: `boolean`

Whether the editor is being dragged, including control points and edges.

### gesturing: `boolean`

Whether the editor is being manipulated via mobile gestures (drag, zoom, rotate).

### moving: `boolean`

Whether the editor is being moved.

### resizing: `boolean`

Whether the editor is being resized.

### rotating: `boolean`

Whether the editor is being rotated.

### skewing: `boolean`

Whether the editor is being skewed.

## 归属

### [Editor Element](../index.md#editor-元素)

## Example

### Create shape mode

:::code-group
<<< @/code/plugin/editor/create-mode.ts
<<< @/code/plugin/editor/create-mode.js
:::
