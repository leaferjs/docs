# tag

The element tag name (i.e. the class name of the element), such as `Rect` or `Box`. It can be used with [find()](./find.md) / [findOne()](./findOne.md) for searching elements.

In the future, it may also be used to create elements in an HTML-like syntax.

## Read-only Property

### tag: `string`

The tag name of the element (i.e. the class name).

## Belongs to

### [UI Element](../display/UI.md)

## Example

### Find elements by tag

::: tip Note
The [find element plugin](../../plugin/in/find/index.md) is required, or you can install [leafer-game](../../guide/install/game/start.md) or [leafer-editor](../../guide/install/editor/start.md), which already include the find plugin.
:::

::: code-group
<<< @/code/property/find/tag.ts [Leafer]
<<< @/code/property/find/app/tag.ts [App]
:::
