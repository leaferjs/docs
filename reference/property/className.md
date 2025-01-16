# layer

元素的分类名称，同 HTML 的 className，可通过 [find()](/reference/property/find.md) / [findOne()](/reference/property/findOne.md) 查找。

## 关键属性

### className: `string`

分类名称，暂时只支持设置 1 个，默认为空。

## 归属

### [UI](/reference/display/UI.md)

## 示例

### 通过 className 查找

::: tip 注意事项
需安装 [查找元素插件](/plugin/in/find/index.md) 才能使用，或直接安装 [leafer-game](/guide/install/game/start.md)、 [leafer-editor](/guide/install/editor/start.md) （已集成查找元素插件）
:::

<<< @/code/property/find/className.ts
