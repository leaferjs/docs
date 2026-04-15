# Coordinate Conversion

Conversion between [world coordinates](../../../guide/advanced/coordinate.md#world-世界坐标系) and [page coordinates](../../../guide/advanced/coordinate.md#page-场景坐标系),
[local coordinates](../../../guide/advanced/coordinate.md#local-本地坐标系), [inner coordinates](../../../guide/advanced/coordinate.md#inner-内部坐标系), and [box coordinates](../../../guide/advanced/coordinate.md#box-坐标系).

Supports [converting movement distance](#转换移动距离), and [converting browser coordinates](../../display/Leafer.md#getworldpointbyclient-clientpoint-iclientpointdata-update-boolean-ipointdata) in Leafer. Also provides a high-performance [quick conversion](./high.md) method.

## Convert World Coordinates

### getPagePoint ( worldPoint: [`IPointData`](../../interface/math/Math.md#ipointdata), relative?: [`UI`](../../display/UI.md), distance?: `boolean` ): [`IPointData`](../../interface/math/Math.md#ipointdata)

Get page coordinates (convert [world coordinates](../../../guide/advanced/coordinate.md#world-世界坐标系) to [page coordinates](../../../guide/advanced/coordinate.md#page-场景坐标系)).

### getLocalPoint ( worldPoint: [`IPointData`](../../interface/math/Math.md#ipointdata), relative?: [`UI`](../../display/UI.md), distance?: `boolean` ): [`IPointData`](../../interface/math/Math.md#ipointdata)

Get local coordinates (convert [world coordinates](../../../guide/advanced/coordinate.md#world-世界坐标系) to [local coordinates](../../../guide/advanced/coordinate.md#local-本地坐标系)).

### getInnerPoint ( worldPoint: [`IPointData`](../../interface/math/Math.md#ipointdata), relative?: [`UI`](../../display/UI.md), distance?: `boolean` ): [`IPointData`](../../interface/math/Math.md#ipointdata)

Get inner coordinates (convert [world coordinates](../../../guide/advanced/coordinate.md#world-世界坐标系) to [inner coordinates](../../../guide/advanced/coordinate.md#inner-内部坐标系)).

### getBoxPoint ( worldPoint: [`IPointData`](../../interface/math/Math.md#ipointdata), relative?: [`UI`](../../display/UI.md), distance?: `boolean` ): [`IPointData`](../../interface/math/Math.md#ipointdata)

Get box coordinates (convert [world coordinates](../../../guide/advanced/coordinate.md#world-世界坐标系) to [box coordinates](../../../guide/advanced/coordinate.md#box-坐标系)).

## Convert Page Coordinates

### getWorldPointByPage ( point: [`IPointData`](../../interface/math/Math.md#ipointdata), relative?: [`UI`](../../display/UI.md), distance?: `boolean` ): [`IPointData`](../../interface/math/Math.md#ipointdata)

Get world coordinates (convert [page coordinates](../../../guide/advanced/coordinate.md#page-场景坐标系) to [world coordinates](../../../guide/advanced/coordinate.md#world-世界坐标系)).

## Convert Local Coordinates

### getWorldPointByLocal ( point: [`IPointData`](../../interface/math/Math.md#ipointdata), relative?: [`UI`](../../display/UI.md), distance?: `boolean` ): [`IPointData`](../../interface/math/Math.md#ipointdata)

Get world coordinates (convert [local coordinates](../../../guide/advanced/coordinate.md#local-本地坐标系) to [world coordinates](../../../guide/advanced/coordinate.md#world-世界坐标系)).

### getInnerPointByLocal ( point: [`IPointData`](../../interface/math/Math.md#ipointdata), relative?: [`UI`](../../display/UI.md), distance?: `boolean` ): [`IPointData`](../../interface/math/Math.md#ipointdata)

Get inner coordinates (convert [local coordinates](../../../guide/advanced/coordinate.md#local-本地坐标系) to [inner coordinates](../../../guide/advanced/coordinate.md#inner-内部坐标系)).

## Convert Inner Coordinates

### getWorldPoint ( innerPoint: [`IPointData`](../../interface/math/Math.md#ipointdata), relative?: [`UI`](../../display/UI.md), distance?: `boolean` ): [`IPointData`](../../interface/math/Math.md#ipointdata)

Get world coordinates (convert [inner coordinates](../../../guide/advanced/coordinate.md#inner-内部坐标系) to [world coordinates](../../../guide/advanced/coordinate.md#world-世界坐标系)).

### getLocalPointByInner ( point: [`IPointData`](../../interface/math/Math.md#ipointdata), relative?: [`UI`](../../display/UI.md), distance?: `boolean` ): [`IPointData`](../../interface/math/Math.md#ipointdata)

Get local coordinates (convert [inner coordinates](../../../guide/advanced/coordinate.md#inner-内部坐标系) to [local coordinates](../../../guide/advanced/coordinate.md#local-本地坐标系)).

### getBoxPointByInner ( point: [`IPointData`](../../interface/math/Math.md#ipointdata), relative?: [`UI`](../../display/UI.md), distance?: `boolean` ): [`IPointData`](../../interface/math/Math.md#ipointdata)

Get box coordinates (convert [inner coordinates](../../../guide/advanced/coordinate.md#inner-内部坐标系) to [box coordinates](../../../guide/advanced/coordinate.md#box-坐标系)).

## Convert Box Coordinates

### getWorldPointByBox ( point: [`IPointData`](../../interface/math/Math.md#ipointdata), relative?: [`UI`](../../display/UI.md), distance?: `boolean` ): [`IPointData`](../../interface/math/Math.md#ipointdata)

Get world coordinates (convert [box coordinates](../../../guide/advanced/coordinate.md#box-坐标系) to [world coordinates](../../../guide/advanced/coordinate.md#world-世界坐标系)).

### getInnerPointByBox ( point: [`IPointData`](../../interface/math/Math.md#ipointdata), relative?: [`UI`](../../display/UI.md), distance?: `boolean` ): [`IPointData`](../../interface/math/Math.md#ipointdata)

Get inner coordinates (convert [box coordinates](../../../guide/advanced/coordinate.md#box-坐标系) to [inner coordinates](../../../guide/advanced/coordinate.md#inner-内部坐标系)).

## Optional Parameters

### Relative element

Second optional parameter: relative?: [`UI`](../../display/UI.md)

Treat the relative element as the world coordinate system, enabling conversion between a child and any parent coordinate system.

### Convert movement distance

Third optional parameter: distance?: `boolean`

### Modify coordinates directly

Fourth optional parameter: change?: `boolean`

Directly modifies the input coordinates and returns them, reducing the overhead of creating new objects.

## Related

### [Convert browser coordinates in Leafer](../../display/Leafer.md#getworldpointbyclient-clientpoint-iclientpointdata-update-boolean-ipointdata)

## Belongs To

### [UI Element](../../display/UI.md)

## Examples

### Convert world coordinates to inner coordinates

<<< @/code/property/point/inner.ts

### Get frame coordinates

Use the second optional parameter: relative?: [`UI`](../../display/UI.md)

Treat the relative element as the world coordinate system, enabling conversion between a child and any parent coordinate system.

<<< @/code/property/point/frame.ts

### Get inner movement distance

Use the third optional parameter: distance?: `boolean`

Can convert movement distance and length.

<<< @/code/property/point/move.ts

### Drag to create shapes

Dragging DOM elements onto the canvas to create shapes requires using native browser coordinate conversion.

::: code-group
<<< @/code/advanced/coordinate/browser/drop.ts [Add to tree]
<<< @/code/advanced/coordinate/browser/drop-frame.ts [Add to Frame]
:::
