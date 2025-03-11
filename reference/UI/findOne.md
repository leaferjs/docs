# findOne

查找元素功能（选择器），只获取一个元素。

想获取一个数组，请使用 [find()](./find.md)。

::: tip 注意事项
需安装 [查找元素插件](/plugin/in/find/index.md) 才能使用，或直接安装 [leafer-game](/guide/install/game/start.md)、 [leafer-editor](/guide/install/editor/start.md) （已集成查找元素插件）
:::

## 关键方法

### findOne ( condition: `number` | `string` | `IFindMethod` ): [`UI`](/reference/display/UI.md)

通过 [id](/reference/UI/id.md)、[innerId](/reference/UI/innerId.md)、[className](/reference/UI/className.md)、[tag](/reference/UI/tag.md)、函数条件查找元素，只返回一个元素。

### findId ( id: `number` | `string` ): [`UI`](/reference/display/UI.md)

查找 id, 支持查找数字类型的 id（必须原始 id 类型为数字）。

## 归属

### [UI 元素](/reference/display/UI.md)

## 示例

### 通过 id 查找

<<< @/code/property/findOne/id.ts

### 通过 innerId 查找

<<< @/code/property/findOne/innerId.ts

### 通过 className 查找

<<< @/code/property/findOne/className.ts

### 通过 tag 查找

<<< @/code/property/findOne/tag.ts

### 通过 函数 查找

<<< @/code/property/findOne/method.ts
