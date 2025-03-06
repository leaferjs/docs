# 选择元素

## 关键方法

### select ( target：[`UI`](/reference/display/UI.md) | [`UI`](/reference/display/UI.md)[] )

选中元素。

### cancel ( )

取消选中元素。

### hasItem ( item: [`UI`](/reference/display/UI.md) ): `boolean`

是否已选中某个元素。

### addItem ( item: [`UI`](/reference/display/UI.md) )

新增一个元素到选中列表。

### removeItem ( item:[`UI`](/reference/display/UI.md) )

从选中列表中移出元素。

## 归属

### [Editor 元素](/plugin/in/editor/index.md#editor-元素)

## 示例

### 手动选择元素

<<< @/code/plugin/editor/editor/select.ts
