# Interface: ICanvasContext2D

## Hierarchy

- `CanvasCompositing`

- `CanvasDrawImage`

- `CanvasDrawPath`

- `CanvasFillStrokeStyles`

- `CanvasFilters`

- `CanvasImageData`

- `CanvasImageSmoothing`

- `CanvasPath`

- `CanvasPathDrawingStyles`

- `CanvasRect`

- `CanvasShadowStyles`

- `CanvasState`

- `CanvasText`

- `CanvasTextDrawingStyles`

- `CanvasTransform`

- `CanvasUserInterface`

  ↳ **`ICanvasContext2D`**

## Table of contents

### Properties

- [globalAlpha](ICanvasContext2D.md#globalalpha)
- [globalCompositeOperation](ICanvasContext2D.md#globalcompositeoperation)
- [fillStyle](ICanvasContext2D.md#fillstyle)
- [strokeStyle](ICanvasContext2D.md#strokestyle)
- [filter](ICanvasContext2D.md#filter)
- [imageSmoothingEnabled](ICanvasContext2D.md#imagesmoothingenabled)
- [imageSmoothingQuality](ICanvasContext2D.md#imagesmoothingquality)
- [lineCap](ICanvasContext2D.md#linecap)
- [lineDashOffset](ICanvasContext2D.md#linedashoffset)
- [lineJoin](ICanvasContext2D.md#linejoin)
- [lineWidth](ICanvasContext2D.md#linewidth)
- [miterLimit](ICanvasContext2D.md#miterlimit)
- [canvas](ICanvasContext2D.md#canvas)
- [shadowBlur](ICanvasContext2D.md#shadowblur)
- [shadowColor](ICanvasContext2D.md#shadowcolor)
- [shadowOffsetX](ICanvasContext2D.md#shadowoffsetx)
- [shadowOffsetY](ICanvasContext2D.md#shadowoffsety)
- [direction](ICanvasContext2D.md#direction)
- [font](ICanvasContext2D.md#font)
- [textAlign](ICanvasContext2D.md#textalign)
- [textBaseline](ICanvasContext2D.md#textbaseline)

### Methods

- [drawImage](ICanvasContext2D.md#drawimage)
- [beginPath](ICanvasContext2D.md#beginpath)
- [clip](ICanvasContext2D.md#clip)
- [fill](ICanvasContext2D.md#fill)
- [isPointInPath](ICanvasContext2D.md#ispointinpath)
- [isPointInStroke](ICanvasContext2D.md#ispointinstroke)
- [stroke](ICanvasContext2D.md#stroke)
- [createConicGradient](ICanvasContext2D.md#createconicgradient)
- [createLinearGradient](ICanvasContext2D.md#createlineargradient)
- [createPattern](ICanvasContext2D.md#createpattern)
- [createRadialGradient](ICanvasContext2D.md#createradialgradient)
- [createImageData](ICanvasContext2D.md#createimagedata)
- [getImageData](ICanvasContext2D.md#getimagedata)
- [putImageData](ICanvasContext2D.md#putimagedata)
- [arc](ICanvasContext2D.md#arc)
- [arcTo](ICanvasContext2D.md#arcto)
- [bezierCurveTo](ICanvasContext2D.md#beziercurveto)
- [closePath](ICanvasContext2D.md#closepath)
- [ellipse](ICanvasContext2D.md#ellipse)
- [lineTo](ICanvasContext2D.md#lineto)
- [moveTo](ICanvasContext2D.md#moveto)
- [quadraticCurveTo](ICanvasContext2D.md#quadraticcurveto)
- [rect](ICanvasContext2D.md#rect)
- [roundRect](ICanvasContext2D.md#roundrect)
- [getLineDash](ICanvasContext2D.md#getlinedash)
- [setLineDash](ICanvasContext2D.md#setlinedash)
- [clearRect](ICanvasContext2D.md#clearrect)
- [fillRect](ICanvasContext2D.md#fillrect)
- [strokeRect](ICanvasContext2D.md#strokerect)
- [getContextAttributes](ICanvasContext2D.md#getcontextattributes)
- [restore](ICanvasContext2D.md#restore)
- [save](ICanvasContext2D.md#save)
- [drawFocusIfNeeded](ICanvasContext2D.md#drawfocusifneeded)
- [fillText](ICanvasContext2D.md#filltext)
- [measureText](ICanvasContext2D.md#measuretext)
- [strokeText](ICanvasContext2D.md#stroketext)
- [getTransform](ICanvasContext2D.md#gettransform)
- [resetTransform](ICanvasContext2D.md#resettransform)
- [rotate](ICanvasContext2D.md#rotate)
- [scale](ICanvasContext2D.md#scale)
- [setTransform](ICanvasContext2D.md#settransform)
- [transform](ICanvasContext2D.md#transform)
- [translate](ICanvasContext2D.md#translate)

## Properties

### globalAlpha

• **globalAlpha**: `number`

#### Inherited from

CanvasCompositing.globalAlpha

#### Defined in

[src/leafer/packages/interface/src/canvas/ICanvas.ts:23](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/canvas/ICanvas.ts#L23)

___

### globalCompositeOperation

• **globalCompositeOperation**: `GlobalCompositeOperation`

#### Inherited from

CanvasCompositing.globalCompositeOperation

#### Defined in

[src/leafer/packages/interface/src/canvas/ICanvas.ts:24](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/canvas/ICanvas.ts#L24)

___

### fillStyle

• **fillStyle**: `string` \| `CanvasGradient` \| `CanvasPattern`

#### Inherited from

CanvasFillStrokeStyles.fillStyle

#### Defined in

[src/leafer/packages/interface/src/canvas/ICanvas.ts:49](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/canvas/ICanvas.ts#L49)

___

### strokeStyle

• **strokeStyle**: `string` \| `CanvasGradient` \| `CanvasPattern`

#### Inherited from

CanvasFillStrokeStyles.strokeStyle

#### Defined in

[src/leafer/packages/interface/src/canvas/ICanvas.ts:50](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/canvas/ICanvas.ts#L50)

___

### filter

• **filter**: `string`

#### Inherited from

CanvasFilters.filter

#### Defined in

[src/leafer/packages/interface/src/canvas/ICanvas.ts:58](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/canvas/ICanvas.ts#L58)

___

### imageSmoothingEnabled

• **imageSmoothingEnabled**: `boolean`

#### Inherited from

CanvasImageSmoothing.imageSmoothingEnabled

#### Defined in

[src/leafer/packages/interface/src/canvas/ICanvas.ts:83](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/canvas/ICanvas.ts#L83)

___

### imageSmoothingQuality

• **imageSmoothingQuality**: `ImageSmoothingQuality`

#### Inherited from

CanvasImageSmoothing.imageSmoothingQuality

#### Defined in

[src/leafer/packages/interface/src/canvas/ICanvas.ts:84](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/canvas/ICanvas.ts#L84)

___

### lineCap

• **lineCap**: `CanvasLineCap`

#### Inherited from

CanvasPathDrawingStyles.lineCap

#### Defined in

[src/leafer/packages/interface/src/canvas/ICanvas.ts:101](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/canvas/ICanvas.ts#L101)

___

### lineDashOffset

• **lineDashOffset**: `number`

#### Inherited from

CanvasPathDrawingStyles.lineDashOffset

#### Defined in

[src/leafer/packages/interface/src/canvas/ICanvas.ts:102](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/canvas/ICanvas.ts#L102)

___

### lineJoin

• **lineJoin**: `CanvasLineJoin`

#### Inherited from

CanvasPathDrawingStyles.lineJoin

#### Defined in

[src/leafer/packages/interface/src/canvas/ICanvas.ts:103](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/canvas/ICanvas.ts#L103)

___

### lineWidth

• **lineWidth**: `number`

#### Inherited from

CanvasPathDrawingStyles.lineWidth

#### Defined in

[src/leafer/packages/interface/src/canvas/ICanvas.ts:104](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/canvas/ICanvas.ts#L104)

___

### miterLimit

• **miterLimit**: `number`

#### Inherited from

CanvasPathDrawingStyles.miterLimit

#### Defined in

[src/leafer/packages/interface/src/canvas/ICanvas.ts:105](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/canvas/ICanvas.ts#L105)

___

### canvas

• `Readonly` **canvas**: `HTMLCanvasElement`

#### Defined in

[src/leafer/packages/interface/src/canvas/ICanvas.ts:138](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/canvas/ICanvas.ts#L138)

___

### shadowBlur

• **shadowBlur**: `number`

#### Inherited from

CanvasShadowStyles.shadowBlur

#### Defined in

[src/leafer/packages/interface/src/canvas/ICanvas.ts:148](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/canvas/ICanvas.ts#L148)

___

### shadowColor

• **shadowColor**: `string`

#### Inherited from

CanvasShadowStyles.shadowColor

#### Defined in

[src/leafer/packages/interface/src/canvas/ICanvas.ts:149](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/canvas/ICanvas.ts#L149)

___

### shadowOffsetX

• **shadowOffsetX**: `number`

#### Inherited from

CanvasShadowStyles.shadowOffsetX

#### Defined in

[src/leafer/packages/interface/src/canvas/ICanvas.ts:150](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/canvas/ICanvas.ts#L150)

___

### shadowOffsetY

• **shadowOffsetY**: `number`

#### Inherited from

CanvasShadowStyles.shadowOffsetY

#### Defined in

[src/leafer/packages/interface/src/canvas/ICanvas.ts:151](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/canvas/ICanvas.ts#L151)

___

### direction

• **direction**: `CanvasDirection`

#### Inherited from

CanvasTextDrawingStyles.direction

#### Defined in

[src/leafer/packages/interface/src/canvas/ICanvas.ts:194](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/canvas/ICanvas.ts#L194)

___

### font

• **font**: `string`

#### Inherited from

CanvasTextDrawingStyles.font

#### Defined in

[src/leafer/packages/interface/src/canvas/ICanvas.ts:195](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/canvas/ICanvas.ts#L195)

___

### textAlign

• **textAlign**: `CanvasTextAlign`

#### Inherited from

CanvasTextDrawingStyles.textAlign

#### Defined in

[src/leafer/packages/interface/src/canvas/ICanvas.ts:196](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/canvas/ICanvas.ts#L196)

___

### textBaseline

• **textBaseline**: `CanvasTextBaseline`

#### Inherited from

CanvasTextDrawingStyles.textBaseline

#### Defined in

[src/leafer/packages/interface/src/canvas/ICanvas.ts:197](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/canvas/ICanvas.ts#L197)

## Methods

### drawImage

▸ **drawImage**(`image`, `dx`, `dy`): `void`

#### Parameters

| Name    | Type     |
| :------ | :------- |
| `image` | `any`    |
| `dx`    | `number` |
| `dy`    | `number` |

#### Returns

`void`

#### Inherited from

CanvasDrawImage.drawImage

#### Defined in

[src/leafer/packages/interface/src/canvas/ICanvas.ts:29](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/canvas/ICanvas.ts#L29)

▸ **drawImage**(`image`, `dx`, `dy`, `dw`, `dh`): `void`

#### Parameters

| Name    | Type     |
| :------ | :------- |
| `image` | `any`    |
| `dx`    | `number` |
| `dy`    | `number` |
| `dw`    | `number` |
| `dh`    | `number` |

#### Returns

`void`

#### Inherited from

CanvasDrawImage.drawImage

#### Defined in

[src/leafer/packages/interface/src/canvas/ICanvas.ts:30](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/canvas/ICanvas.ts#L30)

▸ **drawImage**(`image`, `sx`, `sy`, `sw`, `sh`, `dx`, `dy`, `dw`, `dh`): `void`

#### Parameters

| Name    | Type     |
| :------ | :------- |
| `image` | `any`    |
| `sx`    | `number` |
| `sy`    | `number` |
| `sw`    | `number` |
| `sh`    | `number` |
| `dx`    | `number` |
| `dy`    | `number` |
| `dw`    | `number` |
| `dh`    | `number` |

#### Returns

`void`

#### Inherited from

CanvasDrawImage.drawImage

#### Defined in

[src/leafer/packages/interface/src/canvas/ICanvas.ts:31](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/canvas/ICanvas.ts#L31)

___

### beginPath

▸ **beginPath**(): `void`

#### Returns

`void`

#### Inherited from

CanvasDrawPath.beginPath

#### Defined in

[src/leafer/packages/interface/src/canvas/ICanvas.ts:35](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/canvas/ICanvas.ts#L35)

___

### clip

▸ **clip**(`fillRule?`): `void`

#### Parameters

| Name        | Type                                         |
| :---------- | :------------------------------------------- |
| `fillRule?` | [`IWindingRule`](../modules.md#iwindingrule) |

#### Returns

`void`

#### Inherited from

CanvasDrawPath.clip

#### Defined in

[src/leafer/packages/interface/src/canvas/ICanvas.ts:36](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/canvas/ICanvas.ts#L36)

▸ **clip**(`path`, `fillRule?`): `void`

#### Parameters

| Name        | Type                                         |
| :---------- | :------------------------------------------- |
| `path`      | [`IPath2D`](IPath2D.md)                      |
| `fillRule?` | [`IWindingRule`](../modules.md#iwindingrule) |

#### Returns

`void`

#### Inherited from

CanvasDrawPath.clip

#### Defined in

[src/leafer/packages/interface/src/canvas/ICanvas.ts:37](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/canvas/ICanvas.ts#L37)

___

### fill

▸ **fill**(`fillRule?`): `void`

#### Parameters

| Name        | Type                                         |
| :---------- | :------------------------------------------- |
| `fillRule?` | [`IWindingRule`](../modules.md#iwindingrule) |

#### Returns

`void`

#### Inherited from

CanvasDrawPath.fill

#### Defined in

[src/leafer/packages/interface/src/canvas/ICanvas.ts:38](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/canvas/ICanvas.ts#L38)

▸ **fill**(`path`, `fillRule?`): `void`

#### Parameters

| Name        | Type                                         |
| :---------- | :------------------------------------------- |
| `path`      | [`IPath2D`](IPath2D.md)                      |
| `fillRule?` | [`IWindingRule`](../modules.md#iwindingrule) |

#### Returns

`void`

#### Inherited from

CanvasDrawPath.fill

#### Defined in

[src/leafer/packages/interface/src/canvas/ICanvas.ts:39](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/canvas/ICanvas.ts#L39)

___

### isPointInPath

▸ **isPointInPath**(`x`, `y`, `fillRule?`): `boolean`

#### Parameters

| Name        | Type                                         |
| :---------- | :------------------------------------------- |
| `x`         | `number`                                     |
| `y`         | `number`                                     |
| `fillRule?` | [`IWindingRule`](../modules.md#iwindingrule) |

#### Returns

`boolean`

#### Inherited from

CanvasDrawPath.isPointInPath

#### Defined in

[src/leafer/packages/interface/src/canvas/ICanvas.ts:40](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/canvas/ICanvas.ts#L40)

▸ **isPointInPath**(`path`, `x`, `y`, `fillRule?`): `boolean`

#### Parameters

| Name        | Type                                         |
| :---------- | :------------------------------------------- |
| `path`      | [`IPath2D`](IPath2D.md)                      |
| `x`         | `number`                                     |
| `y`         | `number`                                     |
| `fillRule?` | [`IWindingRule`](../modules.md#iwindingrule) |

#### Returns

`boolean`

#### Inherited from

CanvasDrawPath.isPointInPath

#### Defined in

[src/leafer/packages/interface/src/canvas/ICanvas.ts:41](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/canvas/ICanvas.ts#L41)

___

### isPointInStroke

▸ **isPointInStroke**(`x`, `y`): `boolean`

#### Parameters

| Name | Type     |
| :--- | :------- |
| `x`  | `number` |
| `y`  | `number` |

#### Returns

`boolean`

#### Inherited from

CanvasDrawPath.isPointInStroke

#### Defined in

[src/leafer/packages/interface/src/canvas/ICanvas.ts:42](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/canvas/ICanvas.ts#L42)

▸ **isPointInStroke**(`path`, `x`, `y`): `boolean`

#### Parameters

| Name   | Type                    |
| :----- | :---------------------- |
| `path` | [`IPath2D`](IPath2D.md) |
| `x`    | `number`                |
| `y`    | `number`                |

#### Returns

`boolean`

#### Inherited from

CanvasDrawPath.isPointInStroke

#### Defined in

[src/leafer/packages/interface/src/canvas/ICanvas.ts:43](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/canvas/ICanvas.ts#L43)

___

### stroke

▸ **stroke**(): `void`

#### Returns

`void`

#### Inherited from

CanvasDrawPath.stroke

#### Defined in

[src/leafer/packages/interface/src/canvas/ICanvas.ts:44](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/canvas/ICanvas.ts#L44)

▸ **stroke**(`path`): `void`

#### Parameters

| Name   | Type                    |
| :----- | :---------------------- |
| `path` | [`IPath2D`](IPath2D.md) |

#### Returns

`void`

#### Inherited from

CanvasDrawPath.stroke

#### Defined in

[src/leafer/packages/interface/src/canvas/ICanvas.ts:45](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/canvas/ICanvas.ts#L45)

___

### createConicGradient

▸ **createConicGradient**(`startAngle`, `x`, `y`): `CanvasGradient`

#### Parameters

| Name         | Type     |
| :----------- | :------- |
| `startAngle` | `number` |
| `x`          | `number` |
| `y`          | `number` |

#### Returns

`CanvasGradient`

#### Inherited from

CanvasFillStrokeStyles.createConicGradient

#### Defined in

[src/leafer/packages/interface/src/canvas/ICanvas.ts:51](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/canvas/ICanvas.ts#L51)

___

### createLinearGradient

▸ **createLinearGradient**(`x0`, `y0`, `x1`, `y1`): `CanvasGradient`

#### Parameters

| Name | Type     |
| :--- | :------- |
| `x0` | `number` |
| `y0` | `number` |
| `x1` | `number` |
| `y1` | `number` |

#### Returns

`CanvasGradient`

#### Inherited from

CanvasFillStrokeStyles.createLinearGradient

#### Defined in

[src/leafer/packages/interface/src/canvas/ICanvas.ts:52](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/canvas/ICanvas.ts#L52)

___

### createPattern

▸ **createPattern**(`image`, `repetition`): `CanvasPattern`

#### Parameters

| Name         | Type     |
| :----------- | :------- |
| `image`      | `any`    |
| `repetition` | `string` |

#### Returns

`CanvasPattern`

#### Inherited from

CanvasFillStrokeStyles.createPattern

#### Defined in

[src/leafer/packages/interface/src/canvas/ICanvas.ts:53](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/canvas/ICanvas.ts#L53)

___

### createRadialGradient

▸ **createRadialGradient**(`x0`, `y0`, `r0`, `x1`, `y1`, `r1`): `CanvasGradient`

#### Parameters

| Name | Type     |
| :--- | :------- |
| `x0` | `number` |
| `y0` | `number` |
| `r0` | `number` |
| `x1` | `number` |
| `y1` | `number` |
| `r1` | `number` |

#### Returns

`CanvasGradient`

#### Inherited from

CanvasFillStrokeStyles.createRadialGradient

#### Defined in

[src/leafer/packages/interface/src/canvas/ICanvas.ts:54](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/canvas/ICanvas.ts#L54)

___

### createImageData

▸ **createImageData**(`sw`, `sh`, `settings?`): `ImageData`

#### Parameters

| Name        | Type                |
| :---------- | :------------------ |
| `sw`        | `number`            |
| `sh`        | `number`            |
| `settings?` | `ImageDataSettings` |

#### Returns

`ImageData`

#### Inherited from

CanvasImageData.createImageData

#### Defined in

[src/leafer/packages/interface/src/canvas/ICanvas.ts:75](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/canvas/ICanvas.ts#L75)

▸ **createImageData**(`imagedata`): `ImageData`

#### Parameters

| Name        | Type        |
| :---------- | :---------- |
| `imagedata` | `ImageData` |

#### Returns

`ImageData`

#### Inherited from

CanvasImageData.createImageData

#### Defined in

[src/leafer/packages/interface/src/canvas/ICanvas.ts:76](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/canvas/ICanvas.ts#L76)

___

### getImageData

▸ **getImageData**(`sx`, `sy`, `sw`, `sh`, `settings?`): `ImageData`

#### Parameters

| Name        | Type                |
| :---------- | :------------------ |
| `sx`        | `number`            |
| `sy`        | `number`            |
| `sw`        | `number`            |
| `sh`        | `number`            |
| `settings?` | `ImageDataSettings` |

#### Returns

`ImageData`

#### Inherited from

CanvasImageData.getImageData

#### Defined in

[src/leafer/packages/interface/src/canvas/ICanvas.ts:77](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/canvas/ICanvas.ts#L77)

___

### putImageData

▸ **putImageData**(`imagedata`, `dx`, `dy`): `void`

#### Parameters

| Name        | Type        |
| :---------- | :---------- |
| `imagedata` | `ImageData` |
| `dx`        | `number`    |
| `dy`        | `number`    |

#### Returns

`void`

#### Inherited from

CanvasImageData.putImageData

#### Defined in

[src/leafer/packages/interface/src/canvas/ICanvas.ts:78](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/canvas/ICanvas.ts#L78)

▸ **putImageData**(`imagedata`, `dx`, `dy`, `dirtyX`, `dirtyY`, `dirtyWidth`, `dirtyHeight`): `void`

#### Parameters

| Name          | Type        |
| :------------ | :---------- |
| `imagedata`   | `ImageData` |
| `dx`          | `number`    |
| `dy`          | `number`    |
| `dirtyX`      | `number`    |
| `dirtyY`      | `number`    |
| `dirtyWidth`  | `number`    |
| `dirtyHeight` | `number`    |

#### Returns

`void`

#### Inherited from

CanvasImageData.putImageData

#### Defined in

[src/leafer/packages/interface/src/canvas/ICanvas.ts:79](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/canvas/ICanvas.ts#L79)

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

___

### getLineDash

▸ **getLineDash**(): `number`[]

#### Returns

`number`[]

#### Inherited from

CanvasPathDrawingStyles.getLineDash

#### Defined in

[src/leafer/packages/interface/src/canvas/ICanvas.ts:106](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/canvas/ICanvas.ts#L106)

___

### setLineDash

▸ **setLineDash**(`segments`): `void`

#### Parameters

| Name       | Type                                                           |
| :--------- | :------------------------------------------------------------- |
| `segments` | `number`[] |

#### Returns

`void`

#### Inherited from

CanvasPathDrawingStyles.setLineDash

#### Defined in

[src/leafer/packages/interface/src/canvas/ICanvas.ts:107](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/canvas/ICanvas.ts#L107)

___

### clearRect

▸ **clearRect**(`x`, `y`, `w`, `h`): `void`

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

CanvasRect.clearRect

#### Defined in

[src/leafer/packages/interface/src/canvas/ICanvas.ts:122](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/canvas/ICanvas.ts#L122)

___

### fillRect

▸ **fillRect**(`x`, `y`, `w`, `h`): `void`

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

CanvasRect.fillRect

#### Defined in

[src/leafer/packages/interface/src/canvas/ICanvas.ts:123](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/canvas/ICanvas.ts#L123)

___

### strokeRect

▸ **strokeRect**(`x`, `y`, `w`, `h`): `void`

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

CanvasRect.strokeRect

#### Defined in

[src/leafer/packages/interface/src/canvas/ICanvas.ts:124](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/canvas/ICanvas.ts#L124)

___

### getContextAttributes

▸ **getContextAttributes**(): `ICanvasRenderingContext2DSettings`

#### Returns

`ICanvasRenderingContext2DSettings`

#### Defined in

[src/leafer/packages/interface/src/canvas/ICanvas.ts:139](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/canvas/ICanvas.ts#L139)

___

### restore

▸ **restore**(): `void`

#### Returns

`void`

#### Inherited from

CanvasState.restore

#### Defined in

[src/leafer/packages/interface/src/canvas/ICanvas.ts:155](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/canvas/ICanvas.ts#L155)

___

### save

▸ **save**(): `void`

#### Returns

`void`

#### Inherited from

CanvasState.save

#### Defined in

[src/leafer/packages/interface/src/canvas/ICanvas.ts:156](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/canvas/ICanvas.ts#L156)

___

### drawFocusIfNeeded

▸ **drawFocusIfNeeded**(`element`): `void`

#### Parameters

| Name      | Type  |
| :-------- | :---- |
| `element` | `any` |

#### Returns

`void`

#### Inherited from

CanvasUserInterface.drawFocusIfNeeded

#### Defined in

[src/leafer/packages/interface/src/canvas/ICanvas.ts:160](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/canvas/ICanvas.ts#L160)

▸ **drawFocusIfNeeded**(`path`, `element`): `void`

#### Parameters

| Name      | Type                    |
| :-------- | :---------------------- |
| `path`    | [`IPath2D`](IPath2D.md) |
| `element` | `any`                   |

#### Returns

`void`

#### Inherited from

CanvasUserInterface.drawFocusIfNeeded

#### Defined in

[src/leafer/packages/interface/src/canvas/ICanvas.ts:161](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/canvas/ICanvas.ts#L161)

___

### fillText

▸ **fillText**(`text`, `x`, `y`, `maxWidth?`): `void`

#### Parameters

| Name        | Type     |
| :---------- | :------- |
| `text`      | `string` |
| `x`         | `number` |
| `y`         | `number` |
| `maxWidth?` | `number` |

#### Returns

`void`

#### Inherited from

CanvasText.fillText

#### Defined in

[src/leafer/packages/interface/src/canvas/ICanvas.ts:188](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/canvas/ICanvas.ts#L188)

___

### measureText

▸ **measureText**(`text`): [`ITextMetrics`](ITextMetrics.md)

#### Parameters

| Name   | Type     |
| :----- | :------- |
| `text` | `string` |

#### Returns

[`ITextMetrics`](ITextMetrics.md)

#### Inherited from

CanvasText.measureText

#### Defined in

[src/leafer/packages/interface/src/canvas/ICanvas.ts:189](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/canvas/ICanvas.ts#L189)

___

### strokeText

▸ **strokeText**(`text`, `x`, `y`, `maxWidth?`): `void`

#### Parameters

| Name        | Type     |
| :---------- | :------- |
| `text`      | `string` |
| `x`         | `number` |
| `y`         | `number` |
| `maxWidth?` | `number` |

#### Returns

`void`

#### Inherited from

CanvasText.strokeText

#### Defined in

[src/leafer/packages/interface/src/canvas/ICanvas.ts:190](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/canvas/ICanvas.ts#L190)

___

### getTransform

▸ **getTransform**(): `DOMMatrix`

#### Returns

`DOMMatrix`

#### Inherited from

CanvasTransform.getTransform

#### Defined in

[src/leafer/packages/interface/src/canvas/ICanvas.ts:201](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/canvas/ICanvas.ts#L201)

___

### resetTransform

▸ **resetTransform**(): `void`

#### Returns

`void`

#### Inherited from

CanvasTransform.resetTransform

#### Defined in

[src/leafer/packages/interface/src/canvas/ICanvas.ts:202](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/canvas/ICanvas.ts#L202)

___

### rotate

▸ **rotate**(`angle`): `void`

#### Parameters

| Name    | Type     |
| :------ | :------- |
| `angle` | `number` |

#### Returns

`void`

#### Inherited from

CanvasTransform.rotate

#### Defined in

[src/leafer/packages/interface/src/canvas/ICanvas.ts:203](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/canvas/ICanvas.ts#L203)

___

### scale

▸ **scale**(`x`, `y`): `void`

#### Parameters

| Name | Type     |
| :--- | :------- |
| `x`  | `number` |
| `y`  | `number` |

#### Returns

`void`

#### Inherited from

CanvasTransform.scale

#### Defined in

[src/leafer/packages/interface/src/canvas/ICanvas.ts:204](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/canvas/ICanvas.ts#L204)

___

### setTransform

▸ **setTransform**(`a`, `b`, `c`, `d`, `e`, `f`): `void`

#### Parameters

| Name | Type     |
| :--- | :------- |
| `a`  | `number` |
| `b`  | `number` |
| `c`  | `number` |
| `d`  | `number` |
| `e`  | `number` |
| `f`  | `number` |

#### Returns

`void`

#### Inherited from

CanvasTransform.setTransform

#### Defined in

[src/leafer/packages/interface/src/canvas/ICanvas.ts:205](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/canvas/ICanvas.ts#L205)

▸ **setTransform**(`transform?`): `void`

#### Parameters

| Name         | Type              |
| :----------- | :---------------- |
| `transform?` | `DOMMatrix2DInit` |

#### Returns

`void`

#### Inherited from

CanvasTransform.setTransform

#### Defined in

[src/leafer/packages/interface/src/canvas/ICanvas.ts:206](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/canvas/ICanvas.ts#L206)

___

### transform

▸ **transform**(`a`, `b`, `c`, `d`, `e`, `f`): `void`

#### Parameters

| Name | Type     |
| :--- | :------- |
| `a`  | `number` |
| `b`  | `number` |
| `c`  | `number` |
| `d`  | `number` |
| `e`  | `number` |
| `f`  | `number` |

#### Returns

`void`

#### Inherited from

CanvasTransform.transform

#### Defined in

[src/leafer/packages/interface/src/canvas/ICanvas.ts:207](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/canvas/ICanvas.ts#L207)

___

### translate

▸ **translate**(`x`, `y`): `void`

#### Parameters

| Name | Type     |
| :--- | :------- |
| `x`  | `number` |
| `y`  | `number` |

#### Returns

`void`

#### Inherited from

CanvasTransform.translate

#### Defined in

[src/leafer/packages/interface/src/canvas/ICanvas.ts:208](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/canvas/ICanvas.ts#L208)
