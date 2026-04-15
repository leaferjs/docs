# dropTo

Drop an element into a container.

## Key Methods

### dropTo ( parent: [`Group`](../display/Group.md), index?: `number`)

Move an element into another parent container while keeping its visual position unchanged in world coordinates.
`index` specifies the target stacking order (z-index position).

## Belongs to

### [UI Elements](../display/UI.md)

## Examples

### Drop an element into a Group

::: code-group
<<< @/code/event-ui/drop/simple.ts
<<< @/code/event-ui/drop/simple.js
:::
