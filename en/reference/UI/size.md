# size

The width and height size properties of an element.

## Key Properties

### width: `number`

The width of the element. Only some elements support direct assignment.

For unsupported elements and Groups, use [resizeWidth()](./resize.md) to adjust the width, and use [boxBounds](./bounds.md#boxbounds-iboundsdata) to get the actual width.

### height: `number`

The height of the element. Only some elements support direct assignment.

For unsupported elements and Groups, use [resizeHeight()](./resize.md) to adjust the height, and use [boxBounds](./bounds.md#boxbounds-iboundsdata) to get the actual height.

## Read-only Properties

### isAutoWidth: `boolean`

Whether the width is auto-sized.

### isAutoHeight: `boolean`

Whether the height is auto-sized.

## Belongs to

### [UI Element](../display/UI.md)

## Example

### Create a rectangle and set width and height

::: code-group
<<< @/code/display/Rect/rect.ts [Leafer]
<<< @/code/display/Rect/app/rect.ts [App]
:::

### Resize Group without using scale

::: code-group
<<< @/code/property/resize/group.ts [Leafer]
<<< @/code/property/resize/app/group.ts [App]
:::
