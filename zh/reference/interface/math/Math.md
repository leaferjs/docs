# Math

数学相关

## Rotation

旋转角度 / 坐标角度 （Angle）

坐标角度：以任意坐标为相对原点，画一个圆， x 轴为水平线，最右端为 0 度，按顺时针方向查看，水平线下方为 0 ～ 180 度， 水平线上方为 -180 ～ 0（或 180 ～ 360）度。

与弧度的转换关系：Angle = Radian \* （ 180 / Math.PI）。

## Radian

弧度

与角度的转换关系：Radian = Angle \* （Math.PI / 180）。

## IFourNumber

4 个方向的数字： `number` | `number`[]

一般用来表示四个方向上的 padding、margin、spread、shrink、radius 等。

```ts
padding: [20, 10, 20, 10] // [top, right, bottom, left]
padding: [20, 10, 20] // [top, (right-left), bottom]
padding: [20, 10] // [ (top-bottom), (right-left)]
padding: 20 // all
```

```ts
cornerRadius: [20, 10, 20, 10] // [topLeft, topRight, bottomRight, bottomLeft]
cornerRadius: [20, 10, 20] // [topLeft, (topRight-bottomLeft), bottomRight]
cornerRadius: [20, 10] // [ (topLeft-bottomRight), (topRight-bottomLeft)]
cornerRadius: 20 // all
```

## IPointData

坐标数据。

```ts
interface IPointData {
  x: number
  y: number
}
```

## IBoundsData

边界数据。

```ts
interface IBoundsData {
  x: number
  y: number
  width: number
  height: number
}
```

## IMatrixData

变换矩阵数据。

```ts
interface IMatrixData {
  a: number
  b: number
  c: number
  d: number
  e: number // tx
  f: number // ty
}
```

## IAlign

对齐点，一般相对元素的实际内容。

![方向图](/svg/deriction.svg)

```ts
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
