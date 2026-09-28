# parent

The parent node of the element.

## Read-only Property

### parent: [`Group`](../display/Group.md)

The parent element.

## Helper Method

### waitParent ( item: `function`, bind?: `object` )

Wait until the element has a [`parent`](./parent.md) property, then execute the `item` callback. You can bind `this` via the `bind` parameter.

If it already exists, it will be executed immediately.

### waitParentChange ( item: `function` )

Waits for the element's [`parent`](./parent.md) property to change before executing the `item` function. Note that the `item` function remains in the listener queue (the same function is automatically deduplicated).

If the parent already exists, the function is executed immediately.

## Belongs to

### [UI Element](../display/UI.md)

## Example

### Execute a callback when the element is added to a parent

::: code-group
<<< @/code/property/parent/wait.ts [Leafer]
<<< @/code/property/parent/app/wait.ts [App]
:::
