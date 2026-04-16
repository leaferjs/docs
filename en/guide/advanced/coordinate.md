# Coordinate Transformation

When you [zoom and pan the viewport](./viewport.md), and try to create shapes with the mouse on the canvas, you may find that directly passing the [event coordinates x, y](../../reference/event/ui/Pointer.md#x-number) into the shape results in incorrect positioning. In this case, you need the [coordinate transformation](../../reference/UI/point/index.md) feature.

## First, understand how the coordinate system works

Our engine is a multi-layer tree structure. Each layer has its own independent `x`, `y`, `scaleX`, `scaleY`, `rotation`, `skewX`, `skewY` properties. These properties form independent coordinate systems, like rooms with their own origins.

<br/>

![Coordinate System](/svg/coordinate.svg)

<br/>

The principle of [coordinate transformation](../../reference/UI/point/index.md) is to convert the relationships between these hierarchical transformation properties, eliminating the need for manual calculations.

<br/>

![3D Coordinate System Perspective](/svg/coordinate-3d.svg)

<br/>

<!--
以小圆作为参照物，从 3D 视角俯视，由下到上，依次为小圆的内部坐标系、本地坐标系、page 坐标系、世界坐标系。 -->

### world coordinate system

Coordinates on the canvas, similar to the HTML client coordinate system, with the top-left corner of the canvas as the origin.

<!-- ，交互事件中的 x,y 都是世界坐标系，可以把画布想象成游戏世界，内部坐标想转换为世界坐标，会受元素及中间层级元素的 x、y、scaleX、scaleY、rotation 影响。 -->

### page coordinate system

Coordinates inside Leafer or `app.tree`, similar to the HTML page coordinate system, with the [zoom layer](../../reference/display/Leafer.md#zoomlayer-group) as the origin.

<!-- ，一般是 leafer 自身， 第一层元素添加在这个坐标系中。 -->

### local coordinate system

Coordinates relative to the parent element, similar to the HTML offset coordinate system, with the parent element as the origin.

<!-- ，可以把父元素想象成房子所在的小区，内部坐标想转换为本地坐标，会受元素的 x、y、scaleX、scaleY、rotation 影响。 -->

### inner coordinate system

Coordinates inside an element or group, with the element’s `x, y` position as the origin.

<!-- ， 如路径元素 Line、Path 中的坐标点，可以把元素想象成一个房间，房间内不受元素的 x、y、scaleX、scaleY、rotation 影响。 -->

### box coordinate system

Coordinates inside the element or group [box bounds](../../reference/UI/bounds.md#boxbounds-iboundsdata), with the top-left corner of the actual content as the origin.

<!--
，一般情况下和 inner 坐标一样，当元素内容的起点不是从 inner 坐标（0，0）开始时会有差异，如路径 Path 经常不是从 0,0 开始绘制的。 -->

## Examples

### We use a pen tool example to understand the role of [coordinate transformation](../../reference/UI/point/index.md)

Press and drag the mouse to draw a line, release to finish. After zooming or panning the view, new lines can still be drawn accurately.

:::code-group
<<< @/code/display/Pen/draw.ts
<<< @/code/display/Pen/draw.js
:::

### Drag to create shapes

When dragging a DOM element into the canvas to create shapes, browser native coordinate conversion is required.

:::code-group
<<< @/code/advanced/coordinate/browser/drop.ts [add to tree]
<<< @/code/advanced/coordinate/browser/drop-frame.ts [add to Frame]
:::

<!-- ## 应用示例

### [transform](../../reference/UI/transform.md)

### [元素转换坐标](../../reference/UI/point/index.md) -->

## Transformation methods

### Coordinate transformation methods in events

### [UIEvent](../../reference/event/ui/UIEvent.md#coordinate-transformation-methods)     [PointerEvent](../../reference/event/ui/Pointer.md#coordinate-transformation-methods)     [DragEvent](../../reference/event/ui/Drag.md#coordinate-transformation-methods)     [MoveEvent](../../reference/event/ui/Move.md#coordinate-transformation-methods)

### Coordinate transformation methods on elements

| Name                                                                                                     | Description                                                                                                                  |
| -------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- |
| [worldTransform](../../reference/UI/transform.md#worldtransform-imatrixwithscaledata)                    | Transformation matrix relative to world coordinates, including `scaleX`, `scaleY`, used as factors for coordinate conversion |
| [localTransform](../../reference/UI/transform.md#localtransform-imatrixdata)                             | Transformation matrix relative to parent element, used as factors for coordinate conversion                                  |
| [getPagePoint()](../../reference/UI/point/index.md#convert-world-coordinates)         | Get page coordinates (world → page), supports distance conversion                                         |
| [getLocalPoint()](../../reference/UI/point/index.md#convert-world-coordinates)        | Get local coordinates (world → local), supports distance conversion                                       |
| [getInnerPoint()](../../reference/UI/point/index.md#convert-world-coordinates)        | Get inner coordinates (world → inner), supports distance conversion                                       |
| [getBoxPoint()](../../reference/UI/point/index.md#convert-world-coordinates)          | Get box coordinates (world → box), supports distance conversion                                           |
| [getWorldPointByPage()](../../reference/UI/point/index.md#convert-page-coordinates)   | Get world coordinates (page → world), supports distance conversion                                        |
| [getWorldPointByLocal()](../../reference/UI/point/index.md#convert-local-coordinates) | Get world coordinates (local → world), supports distance conversion                                       |
| [getInnerPointByLocal()](../../reference/UI/point/index.md#convert-local-coordinates) | Get inner coordinates (local → inner), supports distance conversion                                       |
| [getWorldPoint()](../../reference/UI/point/index.md#convert-inner-coordinates)        | Get world coordinates (inner → world), supports distance conversion                                       |
| [getLocalPointByInner()](../../reference/UI/point/index.md#convert-inner-coordinates) | Get local coordinates (inner → local), supports distance conversion                                       |
| [getBoxPointByInner()](../../reference/UI/point/index.md#convert-inner-coordinates)   | Get box coordinates (inner → box), supports distance conversion                                           |
| [getWorldPointByBox()](../../reference/UI/point/index.md#convert-box-coordinates)     | Get world coordinates (box → world), supports distance conversion                                         |
| [getInnerPointByBox()](../../reference/UI/point/index.md#convert-box-coordinates)     | Get inner coordinates (box → inner), supports distance conversion                                         |

### Browser native event coordinate methods

| Name                                                                                                                                                         | Description                                                                                                  |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ |
| [getWorldPointByClient()](../../reference/display/Leafer.md#getworldpointbyclient-clientpoint-iclientpointdata-update-boolean-ipointdata) | Get world coordinates (browser client → world), only available on App or Leafer instances |
| [getPagePointByClient()](../../reference/display/Leafer.md#getworldpointbyclient-clientpoint-iclientpointdata-update-boolean-ipointdata)  | Get page coordinates (browser client → page), only available on App or Leafer instances   |

### Math utilities

### [Matrix Class](../../reference/math/Matrix.md)     [Point Class](../../reference/math/Point.md)

## Next Step

### [Get Bounding Box](./bounds.md)
