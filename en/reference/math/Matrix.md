# Matrix

Matrix class, similar to CSS transform.

Matrix operations affect the Outer view, while the Inner view remains unchanged.

![内外视图](/svg/outer-inner.svg)

## Key Properties

### a: `number`

scaleX combined with rotation value, default is 1.

### b: `number`

Default is 0.

### c: `number`

Default is 0.

### d: `number`

scaleY combined with rotation value, default is 1.

### e: `number`

x-axis coordinate (matrix origin), default is 0.

### f: `number`

y-axis coordinate (matrix origin), default is 0.

## Key Methods

When returning [`Matrix`](../../api/classes/Matrix.md), chained operations are supported.

### set ( a: `number` | [`IMatrixData`](../../api/interfaces/IMatrixData.md) = 1, b = 0, c = 0 , d = 1, e = 0, f = 0 ): [`Matrix`](../../api/classes/Matrix.md)

Set matrix data, same parameters as new Matrix(), default is 1,0,0,1,0,0.

### get (): [`IMatrixData`](../../api/interfaces/IMatrixData.md)

Get matrix data object {a,b,c,d,e,f}.

### clone (): [`Matrix`](../../api/classes/Matrix.md)

Clone a Matrix object.

### Movement

### translate ( x: `number`, y: `number` ): [`Matrix`](../../api/classes/Matrix.md)

Move the matrix origin from the outer view, directly incrementing e and f.

### translateInner ( x: `number`, y: `number` ): [`Matrix`](../../api/classes/Matrix.md)

Move the matrix origin from the inner view, converting to outer view movement distance, then incrementing e and f, affected by a, b, c, d.

### Scaling

### scale ( scaleX: `number`, scaleY = scaleX ): [`Matrix`](../../api/classes/Matrix.md)

Scale the matrix from the outer view, directly modifying a, b, c, d.

### pixelScale( pixelRatio: `number`): [`Matrix`](../../api/classes/Matrix.md)

Scale by pixelRatio, multiplying a, b, c, d, e, f by pixelRatio, typically used to normalize canvas pixel ratio differences.

### scaleOfOuter ( origin: [`IPointData`](../../api/interfaces/IPointData.md), scaleX: `number`, scaleY = scaleX ): [`Matrix`](../../api/classes/Matrix.md)

Scale the matrix using outer view coordinate origin as the pivot.

### scaleOfInner ( origin: [`IPointData`](../../api/interfaces/IPointData.md), scaleX: `number`, scaleY = scaleX ): [`Matrix`](../../api/classes/Matrix.md)

Scale the matrix using inner view coordinate origin as the pivot.

### Rotation

### rotate ( rotation: `number` ): [`Matrix`](../../api/classes/Matrix.md)

Rotate the matrix from the outer view, in degrees.

### rotateOfOuter ( origin: [`IPointData`](../../api/interfaces/IPointData.md), rotation: `number` ): [`Matrix`](../../api/classes/Matrix.md)

Rotate the matrix using outer view coordinate origin as the pivot.

### rotateOfInner ( origin: [`IPointData`](../../api/interfaces/IPointData.md), rotation: `number` ): [`Matrix`](../../api/classes/Matrix.md)

Rotate the matrix using inner view coordinate origin as the pivot.

### Skew

### skew ( skewX: `number`, skewY = 0 ): [`Matrix`](../../api/classes/Matrix.md)

Skew the matrix from the outer view, in degrees.

### skewOfOuter ( origin: [`IPointData`](../../api/interfaces/IPointData.md), skewX: `number`, skewY = 0 ): [`Matrix`](../../api/classes/Matrix.md)

Skew the matrix using outer view coordinate origin as the pivot.

### skewOfInner ( origin: [`IPointData`](../../api/interfaces/IPointData.md), skewX: `number`, skewY = 0 ): [`Matrix`](../../api/classes/Matrix.md)

Skew the matrix using inner view coordinate origin as the pivot.

### Multiplication

### multiply ( child: [`IMatrixData`](../../api/interfaces/IMatrixData.md) ): [`Matrix`](../../api/classes/Matrix.md)

Multiply by a child matrix.

### multiplyParent ( parent: [`IMatrixData`](../../api/interfaces/IMatrixData.md) ): [`Matrix`](../../api/classes/Matrix.md)

Multiply by a parent matrix.

### Division

### divide ( child: [`IMatrixData`](../../api/interfaces/IMatrixData.md) ): [`Matrix`](../../api/classes/Matrix.md)

Divide by a child matrix.

### divideParent ( parent: [`IMatrixData`](../../api/interfaces/IMatrixData.md) ): [`Matrix`](../../api/classes/Matrix.md)

Divide by a parent matrix.

### invert (): [`Matrix`](../../api/classes/Matrix.md)

Invert the matrix.

### Coordinate Transformation

### toOuterPoint ( inner: [`IPointData`](../../api/interfaces/IPointData.md), to?:[`IPointData`](../../api/interfaces/IPointData.md), distance?: `boolean` )

Convert to outer view coordinates. If to exists, the result will be assigned to to. distance indicates converting distance/length.

### toInnerPoint ( outer: [`IPointData`](../../api/interfaces/IPointData.md), to?:[`IPointData`](../../api/interfaces/IPointData.md), distance?: `boolean` )

Convert to inner view coordinates. If to exists, the result will be assigned to to. distance indicates converting distance/length.

### Layout Data

### setLayout ( layout: [`ILayoutData`](../../api/interfaces/ILayoutData.md), origin?: [`IPointData`](../../api/interfaces/IPointData.md), around?: [`IPointData`](../../api/interfaces/IPointData.md) ): [`Matrix`](../../api/classes/Matrix.md)

Set matrix data from layout data {x,y, scaleX,scaleY,rotation, skewX, skewY}, supports setting [origin](../UI/origin.md) and [around](../UI/around.md).

The composition order of the matrix is: rotate -> skew -> scale -> translate.

### getLayout ( origin?: [`IPointData`](../../api/interfaces/IPointData.md), around?: [`IPointData`](../../api/interfaces/IPointData.md), firstSkewY?: `boolean` ): [`ILayoutData`](../../api/interfaces/ILayoutData.md)

Decompose the matrix to get layout data {x,y, scaleX,scaleY,rotation, skewX, skewY}, supports applying [origin](../UI/origin.md) and [around](../UI/around.md) before conversion. firstSkewY indicates prioritizing skewY decomposition.

### withScale ( scaleX?: `number`, scaleY = scaleX ): [`IMatrixWithScaleData`](../../api/interfaces/IMatrixWithScaleData.md)

Temporarily add scaleX and scaleY properties to the matrix. If not provided, scaleX and scaleY will be automatically decomposed.

Typically used for temporarily applying [matrix options](../../api/interfaces/IRenderOptions.md) when rendering elements.

### reset (): void

Reset the current matrix.

## Examples

### Create via property values

```ts
import { Matrix } from 'leafer-ui'

const matrix = new Matrix(2, 0, 0, 2, 100, 100)
```

### Create via data object

```ts
const matrixData = { a: 2, b: 0, c: 0, d: 2, e: 100, f: 100 }

const matrix = new Matrix(matrixData)
```

### Chained operations

```ts
const matrix = new Matrix()

matrix.set(2, 0, 0, 2, 100, 100).scale(0.5) // { a: 1, b: 0, c: 0, d: 1, e: 100, f: 100 }
```

## API

### [Matrix](../../api/classes/Matrix.md)
