# resize

Adjust the bounding box size of an element or Group.

It resizes the bounding box by modifying width/height, paths, font size, etc., instead of using scale.

The [resize plugin](../../plugin/in/resize/index.md) is required. The [graphic editor](../../plugin/in/editor/index.md) and [auto layout](../../plugin/in/flow/index.md) will install this plugin automatically.

## Key Methods

### resizeWidth ( width: `number` )

Resize the bounding box width of an element or Group.

If the element’s [lockRatio](./editable.md#lockratio-boolean) is `true`, the height will be adjusted proportionally.

### resizeHeight ( height: `number` )

Resize the bounding box height of an element or Group.

If the element’s [lockRatio](./editable.md#lockratio-boolean) is `true`, the width will be adjusted proportionally.

## Helper Method

### scaleResize ( scaleX: `number`, scaleY = scaleX )

Convert scale operations into width/height changes <badge>incremental operation</badge>.

The [graphic editor plugin](../../plugin/in/editor/index.md) uses this method when resizing elements.

## Box / Frame Elements

### resizeChildren: `boolean`

Whether children of Box / Frame follow resize. Defaults to `false`.

Group 会强制子元素跟随 resize，不用设置此参数。

## Text Element

### resizeFontSize: `boolean`

Whether auto-sized text resizes by changing font size. Defaults to `false`.

## Helper Property

### lockRatio: `boolean`

Whether to lock the aspect ratio of the element. Defaults to `false`.

## Other Resize Methods

The following methods support an optional `resize: boolean` parameter, which converts scale operations into width/height adjustments.

### [setTransform ()](./transform.md#key-methods)

### [transform ()](./transform.md#key-methods)

### [scaleOf ()](./scale.md#key-methods)

### [skewOf ()](./skew.md#key-methods)

### [transformWorld ()](./transform.md#world-coordinate-system)

### [scaleOfWorld ()](./scale.md#key-methods)

### [skewOfWorld ()](./skew.md#key-methods)

### [dropTo ()](./dropTo.md)

Convert scaling into width/height operations.

## 归属

### [UI Element](../display/UI.md)

## Example

### Resize a Group without using the scale property

:::code-group
<<< @/code/property/resize/group.ts [Leafer]
<<< @/code/property/resize/group.ts [App]
:::

### Add resize parameter to scaleOf

<<< @/code/plugin/editor/resize/scale.ts
