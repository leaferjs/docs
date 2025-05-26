# Bounds

Bounds 边界类

## 关键属性

### x: `number`

x 轴坐标。

### y: `number`

y 轴坐标。

### width: `number`

宽度，可能为负数。

### height: `number`

高度，可能为负数。

## 只读属性

### minX: `number`

最小 x 轴坐标。

### minY: `number`

最小 y 轴坐标。

### maxX: `number`

最大 x 轴坐标。

### maxY: `number`

最大 y 轴坐标。

## 关键方法

返回 [`Bounds`](/api/classes/Bounds.md) 时，可以支持连贯操作。

### set ( x: `number` | [`IBoundsData`](/api/interfaces/IBoundsData.md) = 0, y = 0, width = 0, height = 0 ): [`Bounds`](/api/classes/Bounds.md)

设置 边界数据，与 new Bounds() 的参数一样， 默认为 0,0,0,0。

### get ( ): [`IBoundsData`](/api/interfaces/IBoundsData.md)

获取 边界数据对象 {x,y,width,height} 。

### clone ( ): [`Bounds`](/api/classes/Bounds.md)

克隆一个 Bounds 对象。

### put ( put: [`IBoundsData`](/api/interfaces/IBoundsData.md), align: [`IAlign`](/api/modules.md#ialign) = 'center', putScale?: `IPutScale` )

将一个包围盒放入到指定位置，并会自动修改对齐缩放后 put 的位置及大小。

align 表示对齐位置，默认居中放置，putScale 表示缩放大小，默认为 1。

![方向图](/svg/deriction.svg)

```ts
// 方位
type IAlign =
  | 'top-left'
  | 'top'
  | 'top-right'
  | 'right'
  | 'bottom-right'
  | 'bottom'
  | 'bottom-left'
  | 'left'
  | 'center'
```

```ts
type IPutScale =
  | number // 指定缩放比例
  | 'cover' // 覆盖（相当于background-size: cover）
  | 'fit' // 适应 (相当于background-size: contain)
```

### 缩放

### scale ( scaleX: `number`, scaleY = scaleX, onlySize?: `boolean` ): [`Bounds`](/api/classes/Bounds.md)

围绕原点（0，0）缩放当前 Bounds。

onlySize 为 true 时只缩放宽高。

### scaleOf ( origin: [`IPointData`](/api/interfaces/IPointData.md), scaleX: `number`, scaleY = scaleX ): [`Bounds`](/api/classes/Bounds.md)

围绕原点 origin 缩放当前 Bounds。

### 修整

### spread ( fourNumber: [IFourNumber](/reference/interface/math/Math.md#ifournumber) ): [`Bounds`](/api/classes/Bounds.md)

向四周扩张边界。

### shrink ( fourNumber: [IFourNumber](/reference/interface/math/Math.md#ifournumber) ): [`Bounds`](/api/classes/Bounds.md)

从四周收缩边界。

### ceil ( ): [`Bounds`](/api/classes/Bounds.md)

向上取整边界， 使 x,y,width,height 都变为整数，确保包含之前的 Bounds。

### unsign ( ): [`Bounds`](/api/classes/Bounds.md)

将可能为负数宽高的边界，转换为正数宽高，会影响 x,y 。

### 添加

### add ( bounds:[`IBoundsData`](/api/interfaces/IBoundsData.md) ): [`Bounds`](/api/classes/Bounds.md)

添加一个 bounds。

### addList ( boundsList: [`IBoundsData`](/api/interfaces/IBoundsData.md)[] ): [`Bounds`](/api/classes/Bounds.md)

添加 bounds 列表。

### setList ( boundsList: [`IBoundsData`](/api/interfaces/IBoundsData.md)[] ): [`Bounds`](/api/classes/Bounds.md)

设置 边界数据， 来源于 bounds 列表。

### addListWithFn ( list: [`IObject`](/api/interfaces/IObject.md)[], boundsDataFn: [`IBoundsDataFn`](/api/interfaces/IBoundsDataFn.md) ): [`Bounds`](/api/classes/Bounds.md)

遍历函数添加 bounds 列表, 遍历 list 时， 通过调用 boundsDataFn 返回实际的 BoundsData。
:::tip 应用场景
列表 item 本身不是 Bounds, item 的某个属性为 Bounds 的情况。
:::

### setListWithFn ( list: [`IObject`](/api/interfaces/IObject.md)[], boundsDataFn: [`IBoundsDataFn`](/api/interfaces/IBoundsDataFn.md) ): [`Bounds`](/api/classes/Bounds.md)

设置 边界数据， 来源于遍历函数的 bounds 列表

### 坐标

### setPoint ( point: [`IPointData`](/api/interfaces/IPointData.md)): [`Bounds`](/api/classes/Bounds.md)

设置 边界数据， 来源于一个坐标，宽高将为 0。

### addPoint ( point: [`IPointData`](/api/interfaces/IPointData.md)): [`Bounds`](/api/classes/Bounds.md)

添加一个坐标。

### setPoints ( points: [`IPointData`](/api/interfaces/IPointData.md)[] ): [`Bounds`](/api/classes/Bounds.md)

设置 边界数据， 来源于一组坐标。

### getPoints ( ): [`IPointData`](/api/interfaces/IPointData.md)[]

获取 [topLeft, topRight, bottomRight, bottomLeft] 4 个坐标点。

### 碰撞检测

### hitPoint ( point: [`IPointData`](/api/interfaces/IPointData.md), pointMatrix?: [`IMatrixData`](/api/interfaces/IMatrixData.md) ): `boolean`

检测是否与坐标点 point 有碰撞，传入的 point 支持临时应用一个矩阵 pointMatrix。

### hitRadiusPoint ( point: [`IRadiusPointData`](/api/interfaces/IRadiusPointData.md), pointMatrix?: [`IMatrixWithScaleData`](/api/interfaces/IMatrixWithLayoutData.md) ):`boolean`

检测是否与带 radius 的坐标点 point 有碰撞，传入的 point 支持临时应用一个矩阵 pointMatrix（需要带 scaleX、scaleY 属性），一般用于光标拾取元素。

### hit ( bounds: [`IBoundsData`](/api/interfaces/IBoundsData.md), boundsMatrix?: [`IMatrixData`](/api/interfaces/IMatrixData.md) ): `boolean`

检测是否与另一个 bounds 有碰撞， 传入的 bounds 支持临时应用一个矩阵 boundsMatrix。

### includes ( bounds: [`IBoundsData`](/api/interfaces/IBoundsData.md), boundsMatrix?: [`IMatrixData`](/api/interfaces/IMatrixData.md) ): `boolean`

检测是否包含另一个 bounds，传入的 bounds 支持临时应用一个矩阵 boundsMatrix。

### 交集

### intersect ( bounds: [`IBoundsData`](/api/interfaces/IBoundsData.md), boundsMatrix?: [`IMatrixData`](/api/interfaces/IMatrixData.md) ): [`Bounds`](/api/classes/Bounds.md)

与另一个 bounds 进行交集操作，只保存重合的部分，传入的 bounds 支持临时应用一个矩阵 boundsMatrix。

### getIntersect ( bounds: [`IBoundsData`](/api/interfaces/IBoundsData.md), boundsMatrix?: [`IMatrixData`](/api/interfaces/IMatrixData.md) ): [`Bounds`](/api/classes/Bounds.md)

获取与另一个 bounds 的交集，传入的 bounds 支持临时应用一个矩阵 boundsMatrix。

### 判断

### isSame ( bounds: [`IBoundsData`](/api/interfaces/IBoundsData.md) ): `boolean`

判断是否与另一个 bounds 相等。

### isEmpty ( ): `boolean`

判断是否为空 bounds, 所有属性均为 0。

### reset ( ): void

重置边界。

## Matrix 方法

### toOuterOf ( matrix: [`IMatrixData`](/api/interfaces/IMatrixData.md) , to?: [`IBoundsData`](/api/interfaces/IBoundsData.md) ): [`Bounds`](/api/classes/Bounds.md)

转换为 matrix 的外部 [AABB 包围盒](/reference/UI/bounds.md) bounds（假设当前为内部 bounds），如果存在 to, 则将结果设置给 to 。

### getFitMatrix ( put: [`IBoundsData`](/api/interfaces/IBoundsData.md) ): [`IMatrix`](/api/interfaces/IMatrix.md)

将另一个 bounds 放置到当前的 bounds 中，返回一个最佳 fit 矩阵。

## 示例

### 通过属性值创建

```ts
import { Bounds } from 'leafer-ui'

const bounds = new Bounds(0, 0, 100, 100)
```

### 通过数据对象创建

```ts
const boundsData = { x: 0, y: 0, width: 100, height: 100 }

const bounds = new Bounds(boundsData)
```

### 连贯操作

```ts
const bounds = new Bounds()

bounds.set(0, 0, 100, 100).hitPoint({ x: 50, y: 50 }) // true
```

## API

### [Bounds](/api/classes/Bounds.md)
