# visible

元素的可见性，可用于隐藏元素。

## 关键属性

### visible: `boolean` | `number`

元素是否可见， 默认为 true。

设为 false 将会隐藏元素，此时元素仍会占用布局空间。

设为 0 时可不占用布局空间，类似 css 的 `display: none`。

## 归属

### [UI 元素](/reference/display/UI.md)

## 示例

### 隐藏元素

<<< @/code/property/visible/visible.ts

### 隐藏元素，且不占空间

<<< @/code/property/visible/none.ts
