# id

The unique id of an element. It can be used with [findId()](./findOne.md) / [findOne()](./findOne.md) for searching.

## Key Property

### id: `string`

The unique id of the element. Defaults to an empty string.

## Belongs to

### [UI Element](../display/UI.md)

## Example

### Find by id

::: tip Note
The [Find Element Plugin](../../plugin/in/find/index.md) must be installed to use this feature, or you can directly install [leafer-game](../../guide/install/game/start.md) or [leafer-editor](../../guide/install/editor/start.md) (both already include the find element plugin).
:::

::: code-group
<<< @/code/property/findOne/id.ts [Leafer]
<<< @/code/property/findOne/app/id.ts [App]
:::
