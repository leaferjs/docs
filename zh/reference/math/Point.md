# Point

Point 坐标类。

## 关键属性

### x: `number`

x 轴坐标。

### y: `number`

y 轴坐标。

## 关键方法

返回 [`Point`](/api/classes/Point.md) 时，可以支持连贯操作。

### set ( x: `number` | [`IPointData`](/api/interfaces/IPointData.md) = 0, y = 0 ): [`Point`](/api/classes/Point.md)

设置坐标数据，与 new Point() 的参数一样， 默认为 0,0。

### get (): [`IPointData`](/api/interfaces/IPointData.md)

获取坐标数据对象 {x,y}。

### clone (): [`Point`](/api/classes/Point.md)

克隆一个 Point 对象。

### move ( x: `number` | [`IPointData`](/api/interfaces/IPointData.md), y: `number`): [`Point`](/api/classes/Point.md)

移动坐标。

### 缩放

### scale ( scaleX: `number`, scaleY = scaleX ): [`Point`](/api/classes/Point.md)

围绕原点（0，0）缩放当前 坐标。

### scaleOf ( origin: [`IPointData`](/api/interfaces/IPointData.md), scaleX: `number`, scaleY = scaleX ): [`Point`](/api/classes/Point.md)

围绕原点 origin 缩放当前 坐标。

### 旋转

### rotate ( rotation: `number` ): [`Point`](/api/classes/Point.md)

围绕原点（0，0）[旋转](/reference/interface/math/Math.md) 坐标。

### rotateOf ( origin: [`IPointData`](/api/interfaces/IPointData.md), rotation: `number` ): [`Point`](/api/classes/Point.md)

围绕原点 origin [旋转](/reference/interface/math/Math.md) 坐标。

### getRotation ( origin: [`IPointData`](/api/interfaces/IPointData.md), to: [`IPointData`](/api/interfaces/IPointData.md) ): `number`

以 origin 为中心点，获取 当前坐标 到 目标点 to 的 [旋转角度](/reference/interface/math/Math.md) ， 顺时针为正数，逆时针为负数。

### atan2

### getAngle ( to: [`IPointData`](/api/interfaces/IPointData.md) ): `number`

以当前坐标为原点，获取到目标点 to 的 atan2 [坐标角度](/reference/interface/math/Math.md)。

### getAtan2 ( to: [`IPointData`](/api/interfaces/IPointData.md) ): `number`

以当前坐标为原点，获取到目标点 to 的 atan2 [坐标弧度](/reference/interface/math/Math.md)。

### 距离

### getCenter ( to: [`IPointData`](/api/interfaces/IPointData.md) ): [`Point`](/api/classes/Point.md)

获取到目标点 to 的中心点坐标。

### getDistance ( to: [`IPointData`](/api/interfaces/IPointData.md) ): `number`

获取到目标点 to 的距离。

### getDistancePoint ( to: [`IPointData`](/api/interfaces/IPointData.md), distance: `number`, changeTo: `boolean`, fromTo: `boolean`) [`Point`](/api/classes/Point.md)

获取到目标点 to 之间指定距离的一个坐标点， 支持获取延长线上的坐标点。

changeTo 表示返回结果赋值到 to 上，节省创建 point 对象开销。

fromTo 表示 distance 从 to 的位置开始算起（默认从当前点开始算起）。

### isSame ( point: [`IPointData`](/api/interfaces/IPointData.md) ): `boolean`

判断是否与另一个 point 相等。

### reset ():[`Point`](/api/classes/Point.md)

重置坐标。

## Matrix 方法

### toInnerOf ( matrix: [`IMatrixData`](/api/interfaces/IMatrixData.md) ): [`Point`](/api/classes/Point.md)

转换为 matrix 的内部坐标 （假设当前为外部坐标）。

### toOuterOf ( matrix: [`IMatrixData`](/api/interfaces/IMatrixData.md) ): [`Point`](/api/classes/Point.md)

转换为 matrix 的外部坐标，（假设当前为内部坐标）。

## 示例

### 通过属性值创建

```ts
import { Point } from 'leafer-ui'

const point = new Point(100, 100)
```

### 通过数据对象创建

```ts
const pointData = { x: 100, y: 100 }

const point = new Point(pointData)
```

### 连贯操作

```ts
const point = new Point()

point.set(100, 100).getDistance({ x: 200, y: 100 }) // 100
```

## API

### [Point](/api/classes/Point.md)
