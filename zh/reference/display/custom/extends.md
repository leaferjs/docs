# Custom

通过继承其他元素自定义图形（推荐）。

适合于想为元素增加自定义数据属性的场景。绘制复杂的效果，可通过继承 [Pen](/reference/display/Pen.md) / [Group](/reference/display/Group.md) 实现。

## 示例

### 继承 Rect

<<< @/code/display/Custom/Rect/index.ts

### 继承 Pen

<<< @/code/display/Custom/Pen/index.ts

### 继承 Group

自定义元素的情况下，可能不需要导出子级 JSON, 可设置 [childlessJSON](/reference/display/Group.md#childlessjson-boolean) 属性为 `true`。

<<< @/code/display/Custom/Group/index.ts

## 下一步

### [绘制路径](/reference/display/custom/path.md)
