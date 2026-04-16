# visible

The visibility of an element, used to hide elements.

## Key Properties

### visible: `boolean` | `number`

Whether the element is visible, defaults to true.

Setting it to false will hide the element, but it will still occupy layout space.

Setting it to 0 will make it not occupy layout space, similar to CSS `display: none`.

## 归属

### [UI Elements](../display/UI.md)

## Example

### Hide element

:::code-group
<<< @/code/property/visible/visible.ts [Leafer]
<<< @/code/property/visible/app/visible.ts [App]
:::

### 隐藏元素，且不占空间

:::code-group
<<< @/code/property/visible/none.ts [Leafer]
<<< @/code/property/visible/app/none.ts [App]
:::
