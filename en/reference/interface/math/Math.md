# Math

Mathematics related

## Rotation

Rotation angle / coordinate angle (Angle)

Coordinate angle: take any coordinate as the origin and draw a circle. The x-axis is the horizontal line, with the far right as 0 degrees. Observing clockwise, below the horizontal line is 0 ~ 180 degrees, and above the horizontal line is -180 ~ 0 (or 180 ~ 360) degrees.

Conversion with radians: Angle = Radian \* (180 / Math.PI).

## Radian

Radian

Conversion with angle: Radian = Angle \* (Math.PI / 180).

## IFourNumber

Four-direction numbers: `number` | `number`[]

Commonly used to represent padding, margin, spread, shrink, radius, etc. in four directions.

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

Point data.

```ts
interface IPointData {
  x: number
  y: number
}
```

## IBoundsData

Bounds data.

```ts
interface IBoundsData {
  x: number
  y: number
  width: number
  height: number
}
```

## IMatrixData

Transform matrix data.

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

Alignment point, usually relative to the actual content of the element.

![Direction diagram](/svg/deriction.svg)

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
