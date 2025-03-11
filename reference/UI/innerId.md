# innerId

运行时创建的临时 id（递增），用于快速识别元素，可通过 [findOne()](/reference/UI/findOne.md) 查找。

## 只读属性

### innerId: `number`

运行时创建的临时 id（递增），不能用于远程存储。

## 归属

### [UI 元素](/reference/display/UI.md)

## 示例

### 通过 innerId 查找

::: tip 注意事项
需安装 [查找元素插件](/plugin/in/find/index.md) 才能使用，或直接安装 [leafer-game](/guide/install/game/start.md)、 [leafer-editor](/guide/install/editor/start.md) （已集成查找元素插件）
:::

<<< @/code/property/findOne/innerId.ts
