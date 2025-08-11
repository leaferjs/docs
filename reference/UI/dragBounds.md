# dragBounds

限制拖动范围。

## 关键属性

### dragBounds?: [`IBoundsData`](/api/interfaces/IBoundsData.md) | `'parent'`

限制元素的拖动范围，`'parent'`表示限制在父元素中拖动（仅允许 [Box](/reference/display/Box.md) / [Frame](/reference/display/Frame.md) 父元素）。

[图形编辑器](/plugin/in/editor/index.md) 还支持 [widthRange](/reference/UI/editable.md#widthrange-irangesize) / [heightRange](/reference/UI/editable.md#heightrange-irangesize) 属性限制元素自身的宽高范围。

### dragBoundsType?: [`IDragBoundsType`](/api/modules.md#idragboundstype)

拖动范围是在元素的外面还是里面，默认为 `'auto'`，自动判断。

```ts
type IDragBoundsType =
  | 'auto' // 自动判断，元素比 dragBounds 小时为 outer, 大时为 inner
  | 'outer' // 拖动范围在元素的外面，此时操作元素会限制在 dragBounds 内
  | 'inner' // 拖动范围在元素的里面，此时操作元素会始终覆盖住 dragBounds
```

## 归属

### [UI 元素](/reference/display/UI.md)

## 示例

### 限制元素在 Frame 内拖动

<<< @/code/property/dragBounds/frame.ts
