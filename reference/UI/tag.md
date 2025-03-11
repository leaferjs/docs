# tag

元素标签名（即元素的类名），如 `Rect` 、 `Box`，可通过 [find()](/reference/UI/find.md) / [findOne()](/reference/UI/findOne.md) 查找。

未来可用于像 HTML 的标签方式创建元素。

## 只读属性

### tag: `string`

元素标签名（即元素的类名）。

## 归属

### [UI 元素](/reference/display/UI.md)

## 示例

### 通过 tag 查找

::: tip 注意事项
需安装 [查找元素插件](/plugin/in/find/index.md) 才能使用，或直接安装 [leafer-game](/guide/install/game/start.md)、 [leafer-editor](/guide/install/editor/start.md) （已集成查找元素插件）
:::

<<< @/code/property/find/tag.ts
