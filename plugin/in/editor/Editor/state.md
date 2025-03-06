# 编辑器状态

## 关键属性

### visible: `boolean`

是否显示编辑器， 默认为 true。

隐藏后，交互功能也将禁用。

### hittable: `boolean`

编辑器是否响应交互事件，默认为 true。

设为 false 后，将禁用编辑器交互。

### single: `boolean`

是否只选中了单个元素。

### multiple: `boolean`

是否选中了多个元素。

### editing: `boolean`

是否处于编辑状态，选择元素后即进入编辑状态。

### innerEditing: `boolean`

是否处于内部编辑状态，双击单个元素进入内部编辑状态（有内部编辑器的情况）。

### groupOpening: `boolean`

是否处于打开组状态，双击组可进入打开状态，方便选择组内元素。

### dragging: `boolean`

是否正在拖拽编辑器，包含拖拽控制点、边。

## 归属

### [Editor 元素](/plugin/in/editor/index.md#editor-元素)

## 示例

### 创建图形模式

::: code-group
<<< @/code/plugin/editor/create-mode.ts
<<< @/code/plugin/editor/create-mode.js
:::
