# findOne

查找元素功能（选择器），只获取一个元素。

想获取一个数组，请使用 [find()](./find.md)。

:::tip 注意事项
需安装 [查找元素插件](../../plugin/in/find/index.md) 才能使用，或直接安装 [leafer-game](../../guide/install/game/start.md)、 [leafer-editor](../../guide/install/editor/start.md) （已集成查找元素插件）
:::

## 关键方法

### findOne ( condition: `number` | `string` | `IFindMethod` ): [`UI`](../display/UI.md)

通过 [id](./id.md)、[innerId](./innerId.md)、[className](./className.md)、[tag](./tag.md)、函数条件查找元素，只返回一个元素。

### findId ( id: `number` | `string` ): [`UI`](../display/UI.md)

查找 id, 支持查找数字类型的 id（必须原始 id 类型为数字）。

## 归属

### [UI 元素](../display/UI.md)

## 示例

### 通过 id 查找

:::code-group
<<< @/code/property/findOne/id.ts [Leafer]
<<< @/code/property/findOne/app/id.ts [App]
:::

### 通过 innerId 查找

:::code-group
<<< @/code/property/findOne/innerId.ts [Leafer]
<<< @/code/property/findOne/app/innerId.ts [App]
:::

### 通过 className 查找

:::code-group
<<< @/code/property/findOne/className.ts [Leafer]
<<< @/code/property/findOne/app/className.ts [App]
:::

### 通过 tag 查找

:::code-group
<<< @/code/property/findOne/tag.ts [Leafer]
<<< @/code/property/findOne/app/tag.ts [App]
:::

### 通过 函数 查找

:::code-group
<<< @/code/property/findOne/method.ts [Leafer]
<<< @/code/property/findOne/app/method.ts [App]
:::
