# getPathString

Get a string path (SVG path).

## Key Property

### getPathString ( curve?: `boolean`, pathForRender?: `boolean`, toFixed?: `number`): [`IPathString`](../interface/ui/PathData.md#ipathstring)

Gets the string path of the element (Canvas [drawing commands](../interface/ui/PathData.md#canvas-commands), including non-SVG drawing commands).

`curve` indicates whether to convert the path into SVG curve commands (M, L, C, Z).
`pathForRender` indicates whether to get the final rendered path (including corner radius properties).

`toFixed` is used to set the number of decimal places to keep.

## 归属

### [UI Element](../display/UI.md)

## Example

### Get the string path of an element

:::code-group
<<< @/code/property/getPathString/get.ts [Leafer]
<<< @/code/property/getPathString/app/get.ts [App]
:::
