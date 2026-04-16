# size

The width and height size properties of an element.

## Key Properties

### width: `number`

The width of the element. Only some elements support direct assignment.

For unsupported elements and Groups, use [resizeWidth()](./resize.md) to adjust the width, and use [boxBounds](./bounds.md#boxbounds-iboundsdata) to get the actual width.

:::tip
当宽度为负数时，为让程序继续运行，将重置为正数，并使用 -scaleX 镜像代替，开发环境中会发出一个警告。
:::

### height: `number`

The height of the element. Only some elements support direct assignment.

For unsupported elements and Groups, use [resizeHeight()](./resize.md) to adjust the height, and use [boxBounds](./bounds.md#boxbounds-iboundsdata) to get the actual height.

:::tip
当高度为负数时，为让程序继续运行，将重置为正数，并使用 -scaleY 镜像代替，开发环境中会发出一个警告。
:::

## Read-only Properties

### isAutoWidth: `boolean`

Whether the height is auto-sized.

### isAutoHeight: `boolean`

Whether the width is auto-sized.

## 归属

### [UI Element](../display/UI.md)

## Example

### Create a rectangle and set width and height

:::code-group
<<< @/code/display/Rect/rect.ts [Leafer]
<<< @/code/display/Rect/app/rect.ts [App]
:::

### Resize Group without using scale

:::code-group
<<< @/code/property/resize/group.ts [Leafer]
<<< @/code/property/resize/app/group.ts [App]
:::
