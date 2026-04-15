# innerId

A temporary runtime-generated id (incremental), used for quickly identifying elements. It can be used with [findOne()](./findOne.md).

## Read-only Property

### innerId: `number`

A temporary runtime-generated id (incremental). It cannot be used for remote storage.

## Belongs to

### [UI Element](../display/UI.md)

## Example

### Find by innerId

::: tip Note
The [Find Element Plugin](../../plugin/in/find/index.md) must be installed to use this feature, or you can directly install [leafer-game](../../guide/install/game/start.md) or [leafer-editor](../../guide/install/editor/start.md) (both already include the find element plugin).
:::

::: code-group
<<< @/code/property/findOne/innerId.ts [Leafer]
<<< @/code/property/findOne/app/innerId.ts [App]
:::
