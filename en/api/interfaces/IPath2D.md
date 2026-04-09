# Interface: IPath2D

## Hierarchy

- `CanvasPath`

  ↳ **`IPath2D`**

## Table of contents

### Methods

- [addPath](IPath2D.md#addpath)
- [arc](IPath2D.md#arc)
- [arcTo](IPath2D.md#arcto)
- [bezierCurveTo](IPath2D.md#beziercurveto)
- [closePath](IPath2D.md#closepath)
- [ellipse](IPath2D.md#ellipse)
- [lineTo](IPath2D.md#lineto)
- [moveTo](IPath2D.md#moveto)
- [quadraticCurveTo](IPath2D.md#quadraticcurveto)
- [rect](IPath2D.md#rect)
- [roundRect](IPath2D.md#roundrect)

## Methods

### addPath

▸ **addPath**(`path`, `transform?`): `void`

#### Parameters

| Name         | Type                    |
| :----------- | :---------------------- |
| `path`       | [`IPath2D`](IPath2D.md) |
| `transform?` | `DOMMatrix2DInit`       |

#### Returns

`void`

#### Defined in

[src/leafer/packages/interface/src/canvas/ICanvas.ts:14](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/canvas/ICanvas.ts#L14)

___

### arc

▸ **arc**(`x`, `y`, `radius`, `startAngle`, `endAngle`, `anticlockwise?`): `void`

#### Parameters

| Name             | Type      |
| :--------------- | :-------- |
| `x`              | `number`  |
| `y`              | `number`  |
| `radius`         | `number`  |
| `startAngle`     | `number`  |
| `endAngle`       | `number`  |
| `anticlockwise?` | `boolean` |

#### Returns

`void`

#### Inherited from

CanvasPath.arc

#### Defined in

[src/leafer/packages/interface/src/canvas/ICanvas.ts:88](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/canvas/ICanvas.ts#L88)

___

### arcTo

▸ **arcTo**(`x1`, `y1`, `x2`, `y2`, `radius`): `void`

#### Parameters

| Name     | Type     |
| :------- | :------- |
| `x1`     | `number` |
| `y1`     | `number` |
| `x2`     | `number` |
| `y2`     | `number` |
| `radius` | `number` |

#### Returns

`void`

#### Inherited from

CanvasPath.arcTo

#### Defined in

[src/leafer/packages/interface/src/canvas/ICanvas.ts:89](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/canvas/ICanvas.ts#L89)

___

### bezierCurveTo

▸ **bezierCurveTo**(`cp1x`, `cp1y`, `cp2x`, `cp2y`, `x`, `y`): `void`

#### Parameters

| Name   | Type     |
| :----- | :------- |
| `cp1x` | `number` |
| `cp1y` | `number` |
| `cp2x` | `number` |
| `cp2y` | `number` |
| `x`    | `number` |
| `y`    | `number` |

#### Returns

`void`

#### Inherited from

CanvasPath.bezierCurveTo

#### Defined in

[src/leafer/packages/interface/src/canvas/ICanvas.ts:90](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/canvas/ICanvas.ts#L90)

___

### closePath

▸ **closePath**(): `void`

#### Returns

`void`

#### Inherited from

CanvasPath.closePath

#### Defined in

[src/leafer/packages/interface/src/canvas/ICanvas.ts:91](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/canvas/ICanvas.ts#L91)

___

### ellipse

▸ **ellipse**(`x`, `y`, `radiusX`, `radiusY`, `rotation`, `startAngle`, `endAngle`, `anticlockwise?`): `void`

#### Parameters

| Name             | Type      |
| :--------------- | :-------- |
| `x`              | `number`  |
| `y`              | `number`  |
| `radiusX`        | `number`  |
| `radiusY`        | `number`  |
| `rotation`       | `number`  |
| `startAngle`     | `number`  |
| `endAngle`       | `number`  |
| `anticlockwise?` | `boolean` |

#### Returns

`void`

#### Inherited from

CanvasPath.ellipse

#### Defined in

[src/leafer/packages/interface/src/canvas/ICanvas.ts:92](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/canvas/ICanvas.ts#L92)

___

### lineTo

▸ **lineTo**(`x`, `y`): `void`

#### Parameters

| Name | Type     |
| :--- | :------- |
| `x`  | `number` |
| `y`  | `number` |

#### Returns

`void`

#### Inherited from

CanvasPath.lineTo

#### Defined in

[src/leafer/packages/interface/src/canvas/ICanvas.ts:93](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/canvas/ICanvas.ts#L93)

___

### moveTo

▸ **moveTo**(`x`, `y`): `void`

#### Parameters

| Name | Type     |
| :--- | :------- |
| `x`  | `number` |
| `y`  | `number` |

#### Returns

`void`

#### Inherited from

CanvasPath.moveTo

#### Defined in

[src/leafer/packages/interface/src/canvas/ICanvas.ts:94](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/canvas/ICanvas.ts#L94)

___

### quadraticCurveTo

▸ **quadraticCurveTo**(`cpx`, `cpy`, `x`, `y`): `void`

#### Parameters

| Name  | Type     |
| :---- | :------- |
| `cpx` | `number` |
| `cpy` | `number` |
| `x`   | `number` |
| `y`   | `number` |

#### Returns

`void`

#### Inherited from

CanvasPath.quadraticCurveTo

#### Defined in

[src/leafer/packages/interface/src/canvas/ICanvas.ts:95](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/canvas/ICanvas.ts#L95)

___

### rect

▸ **rect**(`x`, `y`, `w`, `h`): `void`

#### Parameters

| Name | Type     |
| :--- | :------- |
| `x`  | `number` |
| `y`  | `number` |
| `w`  | `number` |
| `h`  | `number` |

#### Returns

`void`

#### Inherited from

CanvasPath.rect

#### Defined in

[src/leafer/packages/interface/src/canvas/ICanvas.ts:96](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/canvas/ICanvas.ts#L96)

___

### roundRect

▸ **roundRect**(`x`, `y`, `width`, `height`, `radius?`): `void`

#### Parameters

| Name      | Type                                                                         |
| :-------- | :--------------------------------------------------------------------------- |
| `x`       | `number`                                                                     |
| `y`       | `number`                                                                     |
| `width`   | `number`                                                                     |
| `height`  | `number`                                                                     |
| `radius?` | `number` \\| `number`[] |

#### Returns

`void`

#### Inherited from

CanvasPath.roundRect

#### Defined in

[src/leafer/packages/interface/src/canvas/ICanvas.ts:97](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/canvas/ICanvas.ts#L97)
