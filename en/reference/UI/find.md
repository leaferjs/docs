# find

Element search functionality (selector), returns an array of elements.

If you want to get a single element, use [findOne()](./findOne.md).

::: tip Note
Requires the [find plugin](../../plugin/in/find/index.md), or install [leafer-game](../../guide/install/game/start.md) / [leafer-editor](../../guide/install/editor/start.md) (both already include the find plugin).
:::

## Key Methods

### find(condition: `number` | `string` | `IFindMethod`): [`UI`](../display/UI.md)[]

Find elements by [id](./id.md), [innerId](./innerId.md), [className](./className.md), [tag](./tag.md), or a custom function condition. Returns an array of matched elements.

### findTag(tag: `number` | `number[]`): [`UI`](../display/UI.md)[]

Find elements by tag. Supports passing an array to search multiple tags at once. Returns an array of matched elements.

## Belongs to

### [UI Element](../display/UI.md)

## Examples

### Find by id

::: code-group
<<< @/code/property/find/id.ts [Leafer]
<<< @/code/property/find/app/id.ts [App]
:::

### Find by innerId

::: code-group
<<< @/code/property/find/innerId.ts [Leafer]
<<< @/code/property/find/app/innerId.ts [App]
:::

### Find by className

::: code-group
<<< @/code/property/find/className.ts [Leafer]
<<< @/code/property/find/app/className.ts [App]
:::

### Find by tag

::: code-group
<<< @/code/property/find/tag.ts [Leafer]
<<< @/code/property/find/app/tag.ts [App]
:::

### Find by function

::: code-group
<<< @/code/property/find/method.ts [Leafer]
<<< @/code/property/find/app/method.ts [App]
:::
