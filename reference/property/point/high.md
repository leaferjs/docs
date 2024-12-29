# 快速转换

[世界坐标](/guide/basic/coordinate.md#world)与[本地坐标](/guide/basic/coordinate.md#local)、[内部坐标](/guide/basic/coordinate.md#inner)的快速转换， 直接修改传入的坐标，另提供了 [简易转换](./index.md) 的方法。

支持 [转换移动距离](#转换移动距离)。

## 关键方法

### worldToInner ( worldPoint:[`IPointData`](/reference/interface/math/Math.md#ipointdata) )

[世界坐标](/guide/basic/coordinate.md#world) 转 [内部坐标](/guide/basic/coordinate.md#inner)， 直接修改 world。

### worldToLocal ( worldPoint: [`IPointData`](/reference/interface/math/Math.md#ipointdata) )

[世界坐标](/guide/basic/coordinate.md#world) 转 [本地坐标](/guide/basic/coordinate.md#local)， 直接修改 world。

### innerToWorld ( innerPoint: [`IPointData`](/reference/interface/math/Math.md#ipointdata) )

[内部坐标](/guide/basic/coordinate.md#inner) 转 [世界坐标](/guide/basic/coordinate.md#world) ， 直接修改 inner。

### localToWorld ( localPoint: [`IPointData`](/reference/interface/math/Math.md#ipointdata) )

[本地坐标](/guide/basic/coordinate.md#local) 转 [世界坐标](/guide/basic/coordinate.md#world)， 直接修改 local。

## 可选参数

所有转换方法都支持。

### 不直接修改坐标

第二个可选参数：to?: [`IPointData`](/reference/interface/math/Math.md#ipointdata) 用于存储转换后的结果

### 转换移动距离

第三个可选参数： distance?: `boolean`

### 相对元素

第四个可选参数：relative?: [`UI`](/reference/display/UI.md)

将 relative 元素假设为世界坐标系，可以实现子级到任意一个父级坐标系之间的转换。

## 归属

### [UI](/reference/display/UI.md)

## 示例

### 转换为本地坐标

<<< @/code/basic/coordinate/to.ts

### 转换为本地移动距离

<<< @/code/basic/coordinate/move.ts
