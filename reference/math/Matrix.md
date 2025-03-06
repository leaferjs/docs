# Matrix

Matrix 矩阵类， 类似 CSS 的 transform。

矩阵操作会影响 Outer 外部视图，Inner 内部视图始终不变。

![内外视图](/svg/outer-inner.svg)

## 关键属性

### a: `number`

scaleX 结合旋转值，默认为 1。

### b: `number`

默认为 0。

### c: `number`

默认为 0。

### d: `number`

scaleY 结合旋转值，默认为 1。

### e: `number`

x 轴坐标（矩阵原点），默认为 0。

### f: `number`

y 轴坐标（矩阵原点），默认为 0。

## 关键方法

返回 [`Matrix`](/api/classes/Matrix.md) 时，可以支持连贯操作。

### set ( a: `number` | [`IMatrixData`](/api/interfaces/IMatrixData.md) = 1, b = 0, c = 0 , d = 1, e = 0, f = 0 ): [`Matrix`](/api/classes/Matrix.md)

设置 矩阵数据，与 new Matrix() 的参数一样， 默认为 1,0,0,1,0,0。

### get (): [`IMatrixData`](/api/interfaces/IMatrixData.md)

获取 矩阵数据对象 {a,b,c,d,e,f}。

### clone (): [`Matrix`](/api/classes/Matrix.md)

克隆一个 Matrix 对象。

### 移动

### translate ( x: `number`, y: `number` ): [`Matrix`](/api/classes/Matrix.md)

从外部视图移动矩阵原点， 直接递增 e,f 属性。

### translateInner ( x: `number`, y: `number` ): [`Matrix`](/api/classes/Matrix.md)

从内部视图移动矩阵原点，会转换为外部视图的移动距离，再递增 e,f 属性，受 a,b,c,d 影响。

### 缩放

### scale ( scaleX: `number`, scaleY = scaleX ): [`Matrix`](/api/classes/Matrix.md)

从外部视图缩放矩阵， 直接修改 a,b,c,d。

### scaleOfOuter ( origin: [`IPointData`](/api/interfaces/IPointData.md), scaleX: `number`, scaleY = scaleX ): [`Matrix`](/api/classes/Matrix.md)

以外部视图坐标 origin 为原点，缩放矩阵。

### scaleOfInner ( origin: [`IPointData`](/api/interfaces/IPointData.md), scaleX: `number`, scaleY = scaleX ): [`Matrix`](/api/classes/Matrix.md)

以内部视图坐标 origin 为原点，缩放矩阵。

### 旋转

### rotate ( rotation: `number` ): [`Matrix`](/api/classes/Matrix.md)

从外部视图 [旋转](/reference/interface/math/Math.md) 矩阵，以角度为单位。

### rotateOfOuter ( origin: [`IPointData`](/api/interfaces/IPointData.md), rotation: `number` ): [`Matrix`](/api/classes/Matrix.md)

以外部视图坐标 origin 为原点， [旋转](/reference/interface/math/Math.md) 矩阵。

### rotateOfInner ( origin: [`IPointData`](/api/interfaces/IPointData.md), rotation: `number` ): [`Matrix`](/api/classes/Matrix.md)

以内部视图坐标 origin 为原点， [旋转](/reference/interface/math/Math.md) 矩阵。

### 倾斜

### skew ( skewX: `number`, skewY = 0 ): [`Matrix`](/api/classes/Matrix.md)

从外部视图倾斜矩阵，以角度为单位。

### skewOfOuter ( origin: [`IPointData`](/api/interfaces/IPointData.md), skewX: `number`, skewY = 0 ): [`Matrix`](/api/classes/Matrix.md)

以外部视图坐标 origin 为原点，倾斜矩阵。

### skewOfInner ( origin: [`IPointData`](/api/interfaces/IPointData.md), skewX: `number`, skewY = 0 ): [`Matrix`](/api/classes/Matrix.md)

以内部视图坐标 origin 为原点，倾斜矩阵。

### 相乘

### multiply ( child: [`IMatrixData`](/api/interfaces/IMatrixData.md) ): [`Matrix`](/api/classes/Matrix.md)

乘以子矩阵。

### multiplyParent ( parent: [`IMatrixData`](/api/interfaces/IMatrixData.md) ): [`Matrix`](/api/classes/Matrix.md)

乘以父矩阵。

### 相除

### divide ( child: [`IMatrixData`](/api/interfaces/IMatrixData.md) ): [`Matrix`](/api/classes/Matrix.md)

除以子矩阵。

### divideParent ( parent: [`IMatrixData`](/api/interfaces/IMatrixData.md) ): [`Matrix`](/api/classes/Matrix.md)

除以父矩阵。

### invert (): [`Matrix`](/api/classes/Matrix.md)

反转矩阵。

### 转换坐标

### toOuterPoint ( inner: [`IPointData`](/api/interfaces/IPointData.md), to?:[`IPointData`](/api/interfaces/IPointData.md), distance?: `boolean` )

转换为外部视图坐标， 如果存在 to, 则将结果设置给 to ， distance 表示转换距离、长度。

### toInnerPoint ( outer: [`IPointData`](/api/interfaces/IPointData.md), to?:[`IPointData`](/api/interfaces/IPointData.md), distance?: `boolean` )

转换为内部视图坐标， 如果存在 to, 则将结果设置给 to ， distance 表示转换距离、长度。

### 布局数据

### setLayout ( layout: [`ILayoutData`](/api/interfaces/ILayoutData.md), origin?: [`IPointData`](/api/interfaces/IPointData.md), around?: [`IPointData`](/api/interfaces/IPointData.md) ): [`Matrix`](/api/classes/Matrix.md)

设置矩阵数据，来源于布局数据 {x,y, scaleX,scaleY,rotation, skewX, skewY}，支持设置 [origin](/reference/UI/origin.md)、[around](/reference/UI/around.md)。

### getLayout ( origin?: [`IPointData`](/api/interfaces/IPointData.md), around?: [`IPointData`](/api/interfaces/IPointData.md), firstSkewY?: `boolean` ): [`ILayoutData`](/api/interfaces/ILayoutData.md)

分解矩阵，获取布局数据 {x,y, scaleX,scaleY,rotation, skewX, skewY}, 支持设置 [origin](/reference/UI/origin.md)、[around](/reference/UI/around.md) 再转换, firstSkewY 表示优先转换 skewY。

### withScale ( scaleX?: `number`, scaleY = scaleX ): [`IMatrixWithScaleData`](/api/interfaces/IMatrixWithScaleData.md)

给矩阵临时添加 scaleX、scaleY 属性，不传入参数时将自动分解出 scaleX、scaleY 属性。

一般用于临时叠加 [matrix 选项](/api/interfaces/IRenderOptions.md) 渲染元素。

### reset (): void

重置当前矩阵。

## 示例

### 通过属性值创建

```ts
import { Matrix } from 'leafer-ui'

const matrix = new Matrix(2, 0, 0, 2, 100, 100)
```

### 通过数据对象创建

```ts
const matrixData = { a: 2, b: 0, c: 0, d: 2, e: 100, f: 100 }

const matrix = new Matrix(matrixData)
```

### 连贯操作

```ts
const matrix = new Matrix()

matrix.set(2, 0, 0, 2, 100, 100).scale(0.5) // { a: 1, b: 0, c: 0, d: 1, e: 100, f: 100 }
```

## API

### [Matrix](/api/classes/Matrix.md)
