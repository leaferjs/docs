# 转换坐标

[世界坐标](/guide/advanced/coordinate.md#world-世界坐标系) 与 [page 坐标](/guide/advanced/coordinate.md#page-场景坐标系)、
[本地坐标](/guide/advanced/coordinate.md#local-本地坐标系)、[内部坐标](/guide/advanced/coordinate.md#inner-内部坐标系)、[box 坐标](/guide/advanced/coordinate.md#box-坐标系) 的互相转换。

支持 [转换移动距离](#转换移动距离)、 在 Leafer 中 [转换浏览器坐标](/reference/display/Leafer.md#getworldpointbyclient-clientpoint-iclientpointdata-update-boolean-ipointdata)。另提供了 [快速转换](./high.md) 的高性能方法。

## 转换世界坐标

### getPagePoint ( worldPoint: [`IPointData`](/reference/interface/math/Math.md#ipointdata), relative?: [`UI`](/reference/display/UI.md), distance?: `boolean` ): [`IPointData`](/reference/interface/math/Math.md#ipointdata)

获取 page 坐标（ [世界坐标](/guide/advanced/coordinate.md#world-世界坐标系) 转 [page 坐标](/guide/advanced/coordinate.md#page-场景坐标系) ）。

### getLocalPoint ( worldPoint: [`IPointData`](/reference/interface/math/Math.md#ipointdata), relative?: [`UI`](/reference/display/UI.md), distance?: `boolean` ): [`IPointData`](/reference/interface/math/Math.md#ipointdata)

获取本地坐标（ [世界坐标](/guide/advanced/coordinate.md#world-世界坐标系) 转 [本地坐标](/guide/advanced/coordinate.md#local-本地坐标系) ）。

### getInnerPoint ( worldPoint: [`IPointData`](/reference/interface/math/Math.md#ipointdata), relative?: [`UI`](/reference/display/UI.md), distance?: `boolean` ): [`IPointData`](/reference/interface/math/Math.md#ipointdata)

获取内部坐标（ [世界坐标](/guide/advanced/coordinate.md#world-世界坐标系) 转 [内部坐标](/guide/advanced/coordinate.md#inner-内部坐标系) ）。

### getBoxPoint ( worldPoint: [`IPointData`](/reference/interface/math/Math.md#ipointdata), relative?: [`UI`](/reference/display/UI.md), distance?: `boolean` ): [`IPointData`](/reference/interface/math/Math.md#ipointdata)

获取 box 坐标（ [世界坐标](/guide/advanced/coordinate.md#world-世界坐标系) 转 [box 坐标](/guide/advanced/coordinate.md#box-坐标系) ）。

## 转换 page 坐标

### getWorldPointByPage ( point: [`IPointData`](/reference/interface/math/Math.md#ipointdata), relative?: [`UI`](/reference/display/UI.md), distance?: `boolean` ): [`IPointData`](/reference/interface/math/Math.md#ipointdata)

获取世界坐标（ [page 坐标](/guide/advanced/coordinate.md#page-场景坐标系) 转 [世界坐标](/guide/advanced/coordinate.md#world-世界坐标系) ）。

## 转换本地坐标

### getWorldPointByLocal ( point: [`IPointData`](/reference/interface/math/Math.md#ipointdata), relative?: [`UI`](/reference/display/UI.md), distance?: `boolean` ): [`IPointData`](/reference/interface/math/Math.md#ipointdata)

获取世界坐标（ [本地坐标](/guide/advanced/coordinate.md#local-本地坐标系) 转 [世界坐标](/guide/advanced/coordinate.md#world-世界坐标系) ）。

### getInnerPointByLocal ( point: [`IPointData`](/reference/interface/math/Math.md#ipointdata), relative?: [`UI`](/reference/display/UI.md), distance?: `boolean` ): [`IPointData`](/reference/interface/math/Math.md#ipointdata)

获取内部坐标（ [本地坐标](/guide/advanced/coordinate.md#local-本地坐标系) 转 [内部坐标](/guide/advanced/coordinate.md#inner-内部坐标系) ）。

## 转换内部坐标

### getWorldPoint ( innerPoint: [`IPointData`](/reference/interface/math/Math.md#ipointdata), relative?: [`UI`](/reference/display/UI.md), distance?: `boolean` ): [`IPointData`](/reference/interface/math/Math.md#ipointdata)

获取世界坐标（ [内部坐标](/guide/advanced/coordinate.md#inner-内部坐标系) 转 [世界坐标](/guide/advanced/coordinate.md#world-世界坐标系) ）。

### getLocalPointByInner ( point: [`IPointData`](/reference/interface/math/Math.md#ipointdata), relative?: [`UI`](/reference/display/UI.md), distance?: `boolean` ): [`IPointData`](/reference/interface/math/Math.md#ipointdata)

获取本地坐标（ [内部坐标](/guide/advanced/coordinate.md#inner-内部坐标系) 转 [本地坐标](/guide/advanced/coordinate.md#local-本地坐标系) ）。

### getBoxPointByInner ( point: [`IPointData`](/reference/interface/math/Math.md#ipointdata), relative?: [`UI`](/reference/display/UI.md), distance?: `boolean` ): [`IPointData`](/reference/interface/math/Math.md#ipointdata)

获取 box 坐标（ [内部坐标](/guide/advanced/coordinate.md#inner-内部坐标系) 转 [box 坐标](/guide/advanced/coordinate.md#box-坐标系) ）。

## 转换 box 坐标

### getWorldPointByBox ( point: [`IPointData`](/reference/interface/math/Math.md#ipointdata), relative?: [`UI`](/reference/display/UI.md), distance?: `boolean` ): [`IPointData`](/reference/interface/math/Math.md#ipointdata)

获取世界坐标（ [box 坐标](/guide/advanced/coordinate.md#box-坐标系) 转 [世界坐标](/guide/advanced/coordinate.md#world-世界坐标系) ）。

### getInnerPointByBox ( point: [`IPointData`](/reference/interface/math/Math.md#ipointdata), relative?: [`UI`](/reference/display/UI.md), distance?: `boolean` ): [`IPointData`](/reference/interface/math/Math.md#ipointdata)

获取内部坐标（ [box 坐标](/guide/advanced/coordinate.md#box-坐标系) 转 [内部坐标](/guide/advanced/coordinate.md#inner-内部坐标系) ）。

## 可选参数说明

### 相对元素

第二个可选参数：relative?: [`UI`](/reference/display/UI.md)

将 relative 元素假设为世界坐标系，可以实现子级到任意一个父级坐标系之间的转换。

### 转换移动距离

第三个可选参数： distance?: `boolean`

### 直接修改坐标

第四个可选参数：change?: `boolean`

直接修改传入的坐标返回，可以节省创建新对象的开销。

## 相关

### 在 Leafer 中 [转换浏览器坐标](/reference/display/Leafer.md#getworldpointbyclient-clientpoint-iclientpointdata-update-boolean-ipointdata)

## 归属

### [UI 元素](/reference/display/UI.md)

## 示例

### 世界坐标转内部坐标

<<< @/code/property/point/inner.ts

### 获取 frame 坐标

使用第二个可选参数：relative?: [`UI`](/reference/display/UI.md)

将 relative 元素假设为世界坐标系，可以实现子级到任意一个父级坐标系之间的转换。

<<< @/code/property/point/frame.ts

### 获取内部移动距离

使用第三个可选参数： distance?: `boolean`

可以转换移动距离、长度。

<<< @/code/property/point/move.ts

### 拖拽创建图形

拖拽 dom 元素到画布中创建图形，需要使用浏览器原生坐标转换

::: code-group
<<< @/code/advanced/coordinate/browser/drop.ts [添加到 tree]
<<< @/code/advanced/coordinate/browser/drop-frame.ts [添加到 Frame]
:::
