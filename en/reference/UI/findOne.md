# findOne

Element search (selector) that returns a single matched element.

If you want to get multiple results, use [find()](./find.md).

:::tip Note
Requires the [find plugin](../../plugin/in/find/index.md), or install [leafer-game](../../guide/install/game/start.md) / [leafer-editor](../../guide/install/editor/start.md) (both already include the find plugin).
:::

## Key Methods

### findOne(condition: `number` | `string` | `IFindMethod`): [`UI`](../display/UI.md)

Find an element by [id](./id.md), [innerId](./innerId.md), [className](./className.md), [tag](./tag.md), or a custom function condition. Returns a single matched element.

### findId(id: `number` | `string`): [`UI`](../display/UI.md)

Find element by id. Supports numeric id lookup (only when the original id type is a number).

## 归属

### [UI Element](../display/UI.md)

## Examples

### Find by id

:::code-group
<<< @/code/property/findOne/id.ts [Leafer]
<<< @/code/property/findOne/app/id.ts [App]
:::

### Find by innerId

:::code-group
<<< @/code/property/findOne/innerId.ts [Leafer]
<<< @/code/property/findOne/app/innerId.ts [App]
:::

### Find by className

:::code-group
<<< @/code/property/findOne/className.ts [Leafer]
<<< @/code/property/findOne/app/className.ts [App]
:::

### Find by tag

:::code-group
<<< @/code/property/findOne/tag.ts [Leafer]
<<< @/code/property/findOne/app/tag.ts [App]
:::

### Find by function

:::code-group
<<< @/code/property/findOne/method.ts [Leafer]
<<< @/code/property/findOne/app/method.ts [App]
:::
