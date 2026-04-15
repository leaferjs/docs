# Point

Point coordinate class.

## Key Properties

### x: `number`

x-axis coordinate.

### y: `number`

y-axis coordinate.

## Key Methods

When returning [`Point`](../../api/classes/Point.md), chained operations are supported.

### set ( x: `number` | [`IPointData`](../../api/interfaces/IPointData.md) = 0, y = 0 ): [`Point`](../../api/classes/Point.md)

Set coordinate data, same parameters as new Point(), default is 0,0.

### get (): [`IPointData`](../../api/interfaces/IPointData.md)

Get coordinate data object {x,y}.

### clone (): [`Point`](../../api/classes/Point.md)

Clone a Point object.

### move ( x: `number` | [`IPointData`](../../api/interfaces/IPointData.md), y: `number`): [`Point`](../../api/classes/Point.md)

Move the coordinate.

### Scaling

### scale ( scaleX: `number`, scaleY = scaleX ): [`Point`](../../api/classes/Point.md)

Scale the current coordinate around the origin (0, 0).

### scaleOf ( origin: [`IPointData`](../../api/interfaces/IPointData.md), scaleX: `number`, scaleY = scaleX ): [`Point`](../../api/classes/Point.md)

Scale the current coordinate around the origin point.

### Rotation

### rotate ( rotation: `number` ): [`Point`](../../api/classes/Point.md)

Rotate the coordinate around the origin (0, 0).

### rotateOf ( origin: [`IPointData`](../../api/interfaces/IPointData.md), rotation: `number` ): [`Point`](../../api/classes/Point.md)

Rotate the coordinate around the origin point.

### getRotation ( origin: [`IPointData`](../../api/interfaces/IPointData.md), to: [`IPointData`](../../api/interfaces/IPointData.md) ): `number`

Using origin as the center point, get the rotation angle from the current coordinate to the target point to. Clockwise is positive, counterclockwise is negative.

### atan2

### getAngle ( to: [`IPointData`](../../api/interfaces/IPointData.md) ): `number`

Using the current coordinate as the origin, get the atan2 coordinate angle to the target point to.

### getAtan2 ( to: [`IPointData`](../../api/interfaces/IPointData.md) ): `number`

Using the current coordinate as the origin, get the atan2 coordinate radian to the target point to.

### Distance

### getCenter ( to: [`IPointData`](../../api/interfaces/IPointData.md) ): [`Point`](../../api/classes/Point.md)

Get the center point coordinate between the current point and the target point to.

### getDistance ( to: [`IPointData`](../../api/interfaces/IPointData.md) ): `number`

Get the distance to the target point to.

### getDistancePoint ( to: [`IPointData`](../../api/interfaces/IPointData.md), distance: `number`, changeTo: `boolean`, fromTo: `boolean`) [`Point`](../../api/classes/Point.md)

Get a coordinate point at a specified distance toward the target point to, supports getting a point on the extension line.

changeTo means assigning the result to to, saving the overhead of creating a new point object.

fromTo means the distance starts from the position of to (default starts from the current point).

### isSame ( point: [`IPointData`](../../api/interfaces/IPointData.md) ): `boolean`

Check whether it is equal to another point.

### reset ():[`Point`](../../api/classes/Point.md)

Reset the coordinate.

## Matrix Methods

### toInnerOf ( matrix: [`IMatrixData`](../../api/interfaces/IMatrixData.md) ): [`Point`](../../api/classes/Point.md)

Convert to the inner coordinate of the matrix (assuming current is outer coordinate).

### toOuterOf ( matrix: [`IMatrixData`](../../api/interfaces/IMatrixData.md) ): [`Point`](../../api/classes/Point.md)

Convert to the outer coordinate of the matrix (assuming current is inner coordinate).

## Examples

### Create via property values

```ts
import { Point } from 'leafer-ui'

const point = new Point(100, 100)
```

### Create via data object

```ts
const pointData = { x: 100, y: 100 }

const point = new Point(pointData)
```

### Chained operations

```ts
const point = new Point()

point.set(100, 100).getDistance({ x: 200, y: 100 }) // 100
```

## API

### [Point](../../api/classes/Point.md)
