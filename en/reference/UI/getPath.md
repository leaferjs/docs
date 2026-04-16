# getPath

Get the numeric path.

## Key Method

### getPath ( curve?: `boolean`, pathForRender?: `boolean`): [`IPathCommandData`](../interface/ui/PathData.md)

Gets the numeric path of the element (Canvas [drawing commands](../interface/ui/PathData.md#canvas-commands)).

`curve` indicates whether to convert the path into curve commands (M, L, C, Z).
`pathForRender` indicates whether to get the final rendered path (including corner radius properties).

### asPath ( curve?: `boolean`, pathForRender?: `boolean`): [`IPathCommandData`](../interface/ui/PathData.md)

Forcibly convert the element into a path. Equivalent to `rect.path = rect.getPath()`.
You can learn more about the implementation in [path priority mode](./path.md).

## 归属

### [UI Element](../display/UI.md)

## Example

### Get the numeric path of an element

:::code-group
<<< @/code/property/getPath/get.ts [Leafer]
<<< @/code/property/getPath/app/get.ts [App]
:::
