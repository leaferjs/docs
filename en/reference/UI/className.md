# layer

The classification name of an element, similar to `className` in HTML. It can be queried using [find()](./find.md) / [findOne()](./findOne.md).

## Key Properties

### className: `string`

The classification name. Currently only one value is supported. Default is empty.

## Belongs to

### [UI Elements](../display/UI.md)

## Examples

### Find by className

::: tip Note
You need to install the [find plugin](../../plugin/in/find/index.md) to use this feature, or directly install [leafer-game](../../guide/install/game/start.md) or [leafer-editor](../../guide/install/editor/start.md) (which already include the find plugin).
:::

::: code-group
<<< @/code/property/find/className.ts [Leafer]
<<< @/code/property/find/app/className.ts [App]
:::
