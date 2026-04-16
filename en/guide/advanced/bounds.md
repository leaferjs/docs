# Get Bounding Box

When drawing shapes with the mouse, or performing alignment and rectangle collision detection, we need to obtain the actual position and size of an element (its bounding box) for subsequent operations.

## Bounding Box Model

The diagram shows different types of bounding boxes formed from inside to outside of an element. Each bounding box includes position (x, y) and size (width, height), similar to the CSS box model.

![Box Model](/svg/bounds.svg)

### margin bounding box

**Outer boundary:** base bounds + margin.

### render bounding box

**Render boundary:** stroke bounds + shadow, etc.

### stroke bounding box

**Stroke boundary:** base bounds + stroke, defines the interactive hit area.

### box bounding box

**Base boundary:** includes padding, and serves as the reference for inward and outward expansion.

### content bounding box

**Content boundary:** bounds of the filled content, excluding padding. Typically used to measure the actual text size of [Text](../../reference/display/Text.md).

## OBB and AABB

When an element is rotated, different OBB and AABB bounding boxes are formed in [different coordinate systems](./coordinate.md).

![Bounding Box](/svg/obb-aabb.svg)

<!--
### 内部坐标系边界

以元素自身为起点（0，0），由元素的宽高、路径形成的内部边界。

已提供了 [获取属性](../../reference/UI/bounds.md#boxbounds-iboundsdata) 与 [获取方法](../../reference/UI/bounds.md#关键方法)。

### 本地坐标系边界

以父元素为起点（0，0），将内部边界与 [localTransform](../../reference/UI/transform.md#localtransform-imatrixdata) 相乘而来，会受元素的 x、y、scaleX、scaleY、rotation 影响。

已提供了[获取方法](../../reference/UI/bounds.md#关键方法)。

### 世界坐标系边界

以画布左上角为起点（0，0），将内部边界与 [worldTransform](../../reference/UI/transform.md#worldtransform-imatrixdata) 相乘而来，会受元素及中间层级元素的 x、y、scaleX、scaleY、rotation 影响。

已提供了 [获取属性](../../reference/UI/bounds.md#boxbounds-iboundsdata) 与 [获取方法](../../reference/UI/bounds.md#关键方法)。 -->

## Examples

### We use a shape creation example to understand the interaction between bounding boxes and coordinate systems

Press and drag the mouse to start drawing a rectangle, release to finish. After zooming or panning the view, new rectangles can still be drawn accurately.

:::code-group
<<< @/code/plugin/editor/create-mode.ts
<<< @/code/plugin/editor/create-mode.js
:::

### Detect whether bounding boxes of elements collide

<<< @/code/advanced/bounds/test.ts

## Access Methods

### Access via events

[DragEvent](../../reference/event/ui/Drag.md#drag-area)

### Access via element properties

| Name                                                                                                                                                                        | Description                                                                                                                                                               |
| --------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [boxBounds](../../reference/UI/bounds.md#boxbounds-iboundsdata)                                                                                                             | Base bounds of the element in [inner coordinate system](./coordinate.md) ([OBB](../../reference/UI/bounds.md) bounding box)                            |
| [renderBounds](../../reference/UI/bounds.md#renderbounds-iboundsdata)                                                                                                       | Render bounds of the element in [inner coordinate system](./coordinate.md) ([AABB](../../reference/UI/bounds.md) bounding box)                         |
| [worldBoxBounds](../../reference/UI/bounds.md#worldboxbounds-iboundsdata)                                                                                                   | Base bounds of the element in [world coordinate system](./coordinate.md#world-coordinate-system) ([AABB](../../reference/UI/bounds.md) bounding box)   |
| [worldRenderBounds](../../reference/UI/bounds.md#worldrenderbounds-iboundsdata)                                                                                             | Render bounds of the element in [world coordinate system](./coordinate.md#world-coordinate-system) ([AABB](../../reference/UI/bounds.md) bounding box) |
| [getBounds()](../../reference/UI/bounds.md#getbounds-type-iboundstype-box-relative-ilocationtype-ui-world-iboundsdata)                                   | Get [AABB](../../reference/UI/bounds.md) bounding box                                                                                                                     |
| [getLayoutBounds()](../../reference/UI/bounds.md#getlayoutbounds-type-iboundstype-box-relative-ilocationtype-ui-world-unscale-boolean-ilayoutboundsdata) | Get [OBB](../../reference/UI/bounds.md) bounding box, including scale, rotation and layout transforms                                                                     |
| [getLayoutPoints()](../../reference/UI/bounds.md#getlayoutpoints-type-iboundstype-box-relative-ilocationtype-ui-world-ipointdata)                        | Get the four corner points of the [OBB](../../reference/UI/bounds.md) bounding box                                                                                        |

### Math utilities

### [Bounds Class](../../reference/math/Bounds.md)

## Next Step

### [Partial Rendering](./partRender.md)
