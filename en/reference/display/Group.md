# Group Element

Create a Group. It is used to combine multiple child elements. It has no visual styles such as fill or stroke. It supports properties like x, y, scale, rotation, etc. Child elements are positioned relative to it, and it can be nested continuously.

::: tip Inheritance
Group  >  [UI](./UI.md)

<br/>

Note: The actual width and height depend on child elements. `width` / `height` cannot be set. Use [bounds](../UI/bounds.md) to get actual size information.
:::

## Key Properties (readonly)

### children: [`UI`](./UI.md)[]

List of child elements. Cannot be modified directly.

When used in the [graph editor](../../plugin/in/editor/index.md#grouping), you must set [hitChildren](../UI/hitChildren.md) to `false`. Child elements can only be edited by double-clicking into the group.

## Editor Properties

### resizeChildren: `boolean`

Whether child elements resize along with the Group. Defaults to `true`.

## Auxiliary Properties

### childlessJSON: `boolean`

Whether to exclude child elements when exporting JSON (usually used for custom elements). Defaults to `false`.

## Key Methods

### add ( child: [`UI`](./UI.md) | [`UI`](./UI.md)[] )

Add child elements. Multiple elements can be added at once: `add([child, child, ...])`.

### remove ( child: [`UI`](./UI.md), destroy?: `boolean` )

Remove the specified child element. If `destroy` is `true`, the removed element will also be destroyed.

### remove ( )

Remove the current element.

### destroy ( )

Remove and destroy the current element, including all its children.

### clear ( )

Clear all child elements (remove and destroy them).

## Helper Methods

### addAt ( child: [`UI`](./UI.md) | [`UI`](./UI.md)[], index: `number` )

Add child elements at a specified index.

### addBefore ( child: [`UI`](./UI.md) | [`UI`](./UI.md)[], before: [`UI`](./UI.md) )

Add child elements before the specified element.

### addAfter ( child: [`UI`](./UI.md) | [`UI`](./UI.md)[], after: [`UI`](./UI.md) )

Add child elements after the specified element.

## Inheritance

### Group  >  [UI](./UI.md)

<!-- ## API

### [Group](../../api/classes/Group.md) -->

## Examples

### Add via add method

::: code-group
<<< @/code/display/Group/create.ts [Leafer]
<<< @/code/display/Group/app/create.ts [App]
:::

### Add via children property

::: code-group
<<< @/code/display/Group/children.ts [Leafer]
<<< @/code/display/Group/app/children.ts [App]
:::

### Create via tag object

<<< @/code/basic/display/tag.ts

### Conditional removal

Supports all [find()](../UI/find.md) query parameters.

<<< @/code/basic/remove/remove-tag.ts
