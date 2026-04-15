# Quick Conversion

Quick conversion between [world coordinates](../../../guide/advanced/coordinate.md#world-世界坐标系), [local coordinates](../../../guide/advanced/coordinate.md#local-本地坐标系), and [inner coordinates](../../../guide/advanced/coordinate.md#inner-内部坐标系). The input coordinates are modified directly. Methods for [simple conversion](./index.md) are also provided.

Supports [converting movement distance](#转换移动距离).

## Key Methods

### worldToInner ( worldPoint:[`IPointData`](../../interface/math/Math.md#ipointdata) )

Convert [world coordinates](../../../guide/advanced/coordinate.md#world-世界坐标系) to [inner coordinates](../../../guide/advanced/coordinate.md#inner-内部坐标系), directly modifies world.

### worldToLocal ( worldPoint: [`IPointData`](../../interface/math/Math.md#ipointdata) )

Convert [world coordinates](../../../guide/advanced/coordinate.md#world-世界坐标系) to [local coordinates](../../../guide/advanced/coordinate.md#local-本地坐标系), directly modifies world.

### innerToWorld ( innerPoint: [`IPointData`](../../interface/math/Math.md#ipointdata) )

Convert [inner coordinates](../../../guide/advanced/coordinate.md#inner-内部坐标系) to [world coordinates](../../../guide/advanced/coordinate.md#world-世界坐标系), directly modifies inner.

### localToWorld ( localPoint: [`IPointData`](../../interface/math/Math.md#ipointdata) )

Convert [local coordinates](../../../guide/advanced/coordinate.md#local-本地坐标系) to [world coordinates](../../../guide/advanced/coordinate.md#world-世界坐标系), directly modifies local.

## Optional Parameters

All conversion methods support the following.

### Do not modify coordinates directly

Second optional parameter: to?: [`IPointData`](../../interface/math/Math.md#ipointdata), used to store the converted result.

### Convert movement distance

Third optional parameter: distance?: `boolean`

### Relative element

Fourth optional parameter: relative?: [`UI`](../../display/UI.md)

Treat the relative element as the world coordinate system, enabling conversion between a child and any parent coordinate system.

## Belongs To

### [UI Element](../../display/UI.md)

## Examples

### Convert to local coordinates

<<< @/code/basic/coordinate/to.ts

### Convert movement distance to local

<<< @/code/basic/coordinate/move.ts
