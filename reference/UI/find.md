# find

查找元素功能（选择器），获取一个数组。

想获取一个元素，请使用 [findOne()](./findOne.md)。

::: tip 注意事项
需安装 [查找元素插件](/plugin/in/find/index.md) 才能使用，或直接安装 [leafer-game](/guide/install/game/start.md)、 [leafer-editor](/guide/install/editor/start.md) （已集成查找元素插件）
:::

## 关键方法

### find ( condition: `number` | `string` | `IFindMethod` ): [`UI`](/reference/display/UI.md)[]

通过 [id](/reference/UI/id.md)、[innerId](/reference/UI/innerId.md)、[className](/reference/UI/className.md)、[tag](/reference/UI/tag.md)、函数条件查找元素，返回一个数组。

### findTag( tag: `number` | `number`[] ): [`UI`](/reference/display/UI.md)[]

查找 tag，支持通过数组查找多个 tag，返回一个数组。

## 归属

### [UI 元素](/reference/display/UI.md)

## 示例

### 通过 id 查找

<<< @/code/property/find/id.ts

### 通过 innerId 查找

<<< @/code/property/find/innerId.ts

### 通过 className 查找

<<< @/code/property/find/className.ts

### 通过 tag 查找

<<< @/code/property/find/tag.ts

### 通过 函数 查找

<<< @/code/property/find/method.ts
