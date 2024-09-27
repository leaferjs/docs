# 坐标转换

[世界坐标](/guide/basic/coordinate.md#world) 与 [page 坐标](/guide/basic/coordinate.md#page)、
[本地坐标](/guide/basic/coordinate.md#local)、[内部坐标](/guide/basic/coordinate.md#inner)、[box 坐标](/guide/basic/coordinate.md#box) 的互相转换。

支持 [转换移动距离](#转换移动距离)、 在 Leafer 中 [转换浏览器坐标](/reference/display/Leafer.md#getworldpointbyclient-clientpoint-iclientpointdata-update-boolean-ipointdata)。另提供了 [快速转换](./high.md) 的高性能方法。

## 关键方法

### page 坐标

### getPagePoint ( worldPoint: [`IPointData`](/reference/interface/math/Math.md#ipointdata) ): [`IPointData`](/reference/interface/math/Math.md#ipointdata)

获取 page 坐标（传入一个 [世界坐标](/guide/basic/coordinate.md#world) 转换）。

### getWorldPointByPage ( pagePoint: [`IPointData`](/reference/interface/math/Math.md#ipointdata) ): [`IPointData`](/reference/interface/math/Math.md#ipointdata)

获取世界坐标（传入一个 [page 坐标](/guide/basic/coordinate.md#page) 转换）。

### box 坐标

### getBoxPoint ( worldPoint: [`IPointData`](/reference/interface/math/Math.md#ipointdata) ): [`IPointData`](/reference/interface/math/Math.md#ipointdata)

获取 box 坐标（传入一个 [世界坐标](/guide/basic/coordinate.md#world) 转换）。

### getBoxPointByInner ( innerPoint: [`IPointData`](/reference/interface/math/Math.md#ipointdata) ): [`IPointData`](/reference/interface/math/Math.md#ipointdata)

获取 box 坐标（传入一个 [内部坐标](/guide/basic/coordinate.md#inner) 转换）。

### 内部坐标

### getInnerPoint ( worldPoint: [`IPointData`](/reference/interface/math/Math.md#ipointdata) ): [`IPointData`](/reference/interface/math/Math.md#ipointdata)

获取内部坐标（传入一个 [世界坐标](/guide/basic/coordinate.md#world) 转换）。

### getInnerPointByLocal ( localPoint: [`IPointData`](/reference/interface/math/Math.md#ipointdata) ): [`IPointData`](/reference/interface/math/Math.md#ipointdata)

获取内部坐标（传入一个 [本地坐标](/guide/basic/coordinate.md#local) 转换）。

### getInnerPointByBox ( boxPoint: [`IPointData`](/reference/interface/math/Math.md#ipointdata) ): [`IPointData`](/reference/interface/math/Math.md#ipointdata)

获取内部坐标（传入一个 [box 坐标](/guide/basic/coordinate.md#box) 转换）。

### 本地坐标

### getLocalPoint ( worldPoint: [`IPointData`](/reference/interface/math/Math.md#ipointdata) ): [`IPointData`](/reference/interface/math/Math.md#ipointdata)

获取本地坐标（传入一个 [世界坐标](/guide/basic/coordinate.md#world) 转换）。

### getLocalPointByInner ( innerPoint: [`IPointData`](/reference/interface/math/Math.md#ipointdata) ): [`IPointData`](/reference/interface/math/Math.md#ipointdata)

获取本地坐标（传入一个 [内部坐标](/guide/basic/coordinate.md#inner) 转换）。

### 世界坐标

### getWorldPoint ( innerPoint: [`IPointData`](/reference/interface/math/Math.md#ipointdata) ): [`IPointData`](/reference/interface/math/Math.md#ipointdata)

获取世界坐标（传入 [内部坐标](/guide/basic/coordinate.md#inner) 转换）。

### getWorldPointByLocal ( localPoint: [`IPointData`](/reference/interface/math/Math.md#ipointdata) ): [`IPointData`](/reference/interface/math/Math.md#ipointdata)

获取世界坐标（传入 [本地坐标](/guide/basic/coordinate.md#local) 转换）。

### getWorldPointByBox ( boxPoint: [`IPointData`](/reference/interface/math/Math.md#ipointdata) ): [`IPointData`](/reference/interface/math/Math.md#ipointdata)

获取世界坐标（传入 [box 坐标](/guide/basic/coordinate.md#box) 转换）。

## 可选参数

所有转换方法都支持。

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

### [UI](/reference/display/UI.md#坐标)

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
