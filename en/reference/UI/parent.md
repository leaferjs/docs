# parent

The parent node of the element.

## Read-only Property

### parent: [`Group`](../display/Group.md)

The parent element.

## Helper Method

### waitParent ( item: `function`, bind?: `object` )

Wait until the element has a [`parent`](./parent.md) property, then execute the `item` callback. You can bind `this` via the `bind` parameter.

If it already exists, it will be executed immediately.

## Belongs to

### [UI Element](../display/UI.md)

## Example

### Execute a callback when the element is added to a parent

::: code-group
<<< @/code/property/parent/wait.ts [Leafer]
<<< @/code/property/parent/app/wait.ts [App]
:::
