# 转换坐标

[世界坐标](/guide/basic/coordinate.md#world) 与 [page 坐标](/guide/basic/coordinate.md#page)、
[本地坐标](/guide/basic/coordinate.md#local)、[内部坐标](/guide/basic/coordinate.md#inner)、[box 坐标](/guide/basic/coordinate.md#box) 的互相转换。

支持 [转换移动距离](#转换移动距离)、 在 Leafer 中 [转换浏览器坐标](/reference/display/Leafer.md#getworldpointbyclient-clientpoint-iclientpointdata-update-boolean-ipointdata)。另提供了 [快速转换](./high.md) 的高性能方法。

## 转换世界坐标

### getPagePoint ( worldPoint: [`IPointData`](/reference/interface/math/Math.md#ipointdata), relative?: [`UI`](/reference/display/UI.md), distance?: `boolean` ): [`IPointData`](/reference/interface/math/Math.md#ipointdata)

获取 page 坐标（ [世界坐标](/guide/basic/coordinate.md#world) 转 [page 坐标](/guide/basic/coordinate.md#page) ）。

### getLocalPoint ( worldPoint: [`IPointData`](/reference/interface/math/Math.md#ipointdata), relative?: [`UI`](/reference/display/UI.md), distance?: `boolean` ): [`IPointData`](/reference/interface/math/Math.md#ipointdata)

获取本地坐标（ [世界坐标](/guide/basic/coordinate.md#world) 转 [本地坐标](/guide/basic/coordinate.md#local) ）。

### getInnerPoint ( worldPoint: [`IPointData`](/reference/interface/math/Math.md#ipointdata), relative?: [`UI`](/reference/display/UI.md), distance?: `boolean` ): [`IPointData`](/reference/interface/math/Math.md#ipointdata)

获取内部坐标（ [世界坐标](/guide/basic/coordinate.md#world) 转 [内部坐标](/guide/basic/coordinate.md#inner) ）。

### getBoxPoint ( worldPoint: [`IPointData`](/reference/interface/math/Math.md#ipointdata), relative?: [`UI`](/reference/display/UI.md), distance?: `boolean` ): [`IPointData`](/reference/interface/math/Math.md#ipointdata)

获取 box 坐标（ [世界坐标](/guide/basic/coordinate.md#world) 转 [box 坐标](/guide/basic/coordinate.md#box) ）。

## 转换 page 坐标

### getWorldPointByPage ( point: [`IPointData`](/reference/interface/math/Math.md#ipointdata), relative?: [`UI`](/reference/display/UI.md), distance?: `boolean` ): [`IPointData`](/reference/interface/math/Math.md#ipointdata)

获取世界坐标（ [page 坐标](/guide/basic/coordinate.md#page) 转 [世界坐标](/guide/basic/coordinate.md#world) ）。

## 转换本地坐标

### getWorldPointByLocal ( point: [`IPointData`](/reference/interface/math/Math.md#ipointdata), relative?: [`UI`](/reference/display/UI.md), distance?: `boolean` ): [`IPointData`](/reference/interface/math/Math.md#ipointdata)

获取世界坐标（ [本地坐标](/guide/basic/coordinate.md#local) 转 [世界坐标](/guide/basic/coordinate.md#world) ）。

### getInnerPointByLocal ( point: [`IPointData`](/reference/interface/math/Math.md#ipointdata), relative?: [`UI`](/reference/display/UI.md), distance?: `boolean` ): [`IPointData`](/reference/interface/math/Math.md#ipointdata)

获取内部坐标（ [本地坐标](/guide/basic/coordinate.md#local) 转 [内部坐标](/guide/basic/coordinate.md#inner) ）。

## 转换内部坐标

### getWorldPoint ( innerPoint: [`IPointData`](/reference/interface/math/Math.md#ipointdata), relative?: [`UI`](/reference/display/UI.md), distance?: `boolean` ): [`IPointData`](/reference/interface/math/Math.md#ipointdata)

获取世界坐标（ [内部坐标](/guide/basic/coordinate.md#inner) 转 [世界坐标](/guide/basic/coordinate.md#world) ）。

### getLocalPointByInner ( point: [`IPointData`](/reference/interface/math/Math.md#ipointdata), relative?: [`UI`](/reference/display/UI.md), distance?: `boolean` ): [`IPointData`](/reference/interface/math/Math.md#ipointdata)

获取本地坐标（ [内部坐标](/guide/basic/coordinate.md#inner) 转 [本地坐标](/guide/basic/coordinate.md#local) ）。

### getBoxPointByInner ( point: [`IPointData`](/reference/interface/math/Math.md#ipointdata), relative?: [`UI`](/reference/display/UI.md), distance?: `boolean` ): [`IPointData`](/reference/interface/math/Math.md#ipointdata)

获取 box 坐标（ [内部坐标](/guide/basic/coordinate.md#inner) 转 [box 坐标](/guide/basic/coordinate.md#box) ）。

## 转换 box 坐标

### getWorldPointByBox ( point: [`IPointData`](/reference/interface/math/Math.md#ipointdata), relative?: [`UI`](/reference/display/UI.md), distance?: `boolean` ): [`IPointData`](/reference/interface/math/Math.md#ipointdata)

获取世界坐标（ [box 坐标](/guide/basic/coordinate.md#box) 转 [世界坐标](/guide/basic/coordinate.md#world) ）。

### getInnerPointByBox ( point: [`IPointData`](/reference/interface/math/Math.md#ipointdata), relative?: [`UI`](/reference/display/UI.md), distance?: `boolean` ): [`IPointData`](/reference/interface/math/Math.md#ipointdata)

获取内部坐标（ [box 坐标](/guide/basic/coordinate.md#box) 转 [内部坐标](/guide/basic/coordinate.md#inner) ）。

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

### [UI](/reference/display/UI.md)

## 示例

### 获取内部坐标

```ts
const rect = new Rect({ x: 50, y: 50, scale: 5 })

const worldPoint = { x: 100, y: 100 }
const innerPoint = rect.getInnerPoint(worldPoint) // {x: 10, y: 10}
```

### 获取 frame 坐标

使用第二个可选参数：relative?: [`UI`](/reference/display/UI.md)

将 relative 元素假设为世界坐标系，可以实现子级到任意一个父级坐标系之间的转换。

```ts
const frame = new Frame({ x: 200, y: 100, width: 600, height: 800 })

const rect = new Rect({ x: 50, y: 50, scale: 5 })
frame.add(rect)

const innerPoint = { x: 10, y: 10 }
const worldPoint = rect.getWorldPoint(innerPoint) //  {x: 300, y: 200}
const framePoint = rect.getWorldPoint(innerPoint, frame) //  {x: 100, y: 100}
```

### 获取内部移动距离

使用第三个可选参数： distance?: `boolean`

可以转换移动距离、长度。

```ts
const rect = new Rect({ x: 50, y: 50, scale: 5 })

const worldMove = { x: 100, y: 100 }
const innerMove = rect.getInnerPoint(worldMove, null, true) // {x: 20, y: 20}
```
