# Interface: IPlatform

## Table of contents

### Properties

- [name](IPlatform.md#name)
- [os](IPlatform.md#os)
- [canvas](IPlatform.md#canvas)
- [renderCanvas](IPlatform.md#rendercanvas)
- [canvasType](IPlatform.md#canvastype)
- [isWorker](IPlatform.md#isworker)
- [isMobile](IPlatform.md#ismobile)
- [devicePixelRatio](IPlatform.md#devicepixelratio)
- [intWheelDeltaY](IPlatform.md#intwheeldeltay)
- [conicGradientSupport](IPlatform.md#conicgradientsupport)
- [conicGradientRotate90](IPlatform.md#conicgradientrotate90)
- [fullImageShadow](IPlatform.md#fullimageshadow)
- [syncDomFont](IPlatform.md#syncdomfont)
- [selector](IPlatform.md#selector)
- [origin](IPlatform.md#origin)
- [roundRectPatch](IPlatform.md#roundrectpatch)
- [ellipseToCurve](IPlatform.md#ellipsetocurve)
- [backgrounder](IPlatform.md#backgrounder)
- [event](IPlatform.md#event)
- [miniapp](IPlatform.md#miniapp)
- [image](IPlatform.md#image)
- [canCreateImageBitmap](IPlatform.md#cancreateimagebitmap)
- [canClipImageBitmap](IPlatform.md#canclipimagebitmap)

### Methods

- [toURL](IPlatform.md#tourl)
- [requestRender](IPlatform.md#requestrender)
- [getSelector](IPlatform.md#getselector)
- [layout](IPlatform.md#layout)
- [render](IPlatform.md#render)

## Properties

### name

• `Optional` **name**: ``"miniapp"`` \| ``"web"`` \| ``"node"``

#### Defined in

[src/leafer/packages/interface/src/platform/IPlatform.ts:17](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/platform/IPlatform.ts#L17)

___

### os

• `Optional` **os**: ``"Mac"`` \| ``"Windows"`` \| ``"Linux"``

#### Defined in

[src/leafer/packages/interface/src/platform/IPlatform.ts:18](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/platform/IPlatform.ts#L18)

___

### canvas

• `Optional` **canvas**: [`ILeaferCanvas`](ILeaferCanvas.md)

#### Defined in

[src/leafer/packages/interface/src/platform/IPlatform.ts:22](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/platform/IPlatform.ts#L22)

___

### renderCanvas

• `Optional` **renderCanvas**: [`ILeaferCanvas`](ILeaferCanvas.md)

#### Defined in

[src/leafer/packages/interface/src/platform/IPlatform.ts:23](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/platform/IPlatform.ts#L23)

___

### canvasType

• `Optional` **canvasType**: [`ICanvasType`](../modules.md#icanvastype)

#### Defined in

[src/leafer/packages/interface/src/platform/IPlatform.ts:24](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/platform/IPlatform.ts#L24)

___

### isWorker

• `Optional` **isWorker**: `boolean`

#### Defined in

[src/leafer/packages/interface/src/platform/IPlatform.ts:26](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/platform/IPlatform.ts#L26)

___

### isMobile

• `Optional` **isMobile**: `boolean`

#### Defined in

[src/leafer/packages/interface/src/platform/IPlatform.ts:27](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/platform/IPlatform.ts#L27)

___

### devicePixelRatio

• `Optional` `Readonly` **devicePixelRatio**: `number`

#### Defined in

[src/leafer/packages/interface/src/platform/IPlatform.ts:29](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/platform/IPlatform.ts#L29)

___

### intWheelDeltaY

• `Optional` **intWheelDeltaY**: `boolean`

#### Defined in

[src/leafer/packages/interface/src/platform/IPlatform.ts:31](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/platform/IPlatform.ts#L31)

___

### conicGradientSupport

• `Optional` **conicGradientSupport**: `boolean`

#### Defined in

[src/leafer/packages/interface/src/platform/IPlatform.ts:32](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/platform/IPlatform.ts#L32)

___

### conicGradientRotate90

• `Optional` **conicGradientRotate90**: `boolean`

#### Defined in

[src/leafer/packages/interface/src/platform/IPlatform.ts:33](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/platform/IPlatform.ts#L33)

___

### fullImageShadow

• `Optional` **fullImageShadow**: `boolean`

#### Defined in

[src/leafer/packages/interface/src/platform/IPlatform.ts:34](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/platform/IPlatform.ts#L34)

___

### syncDomFont

• `Optional` **syncDomFont**: `boolean`

#### Defined in

[src/leafer/packages/interface/src/platform/IPlatform.ts:35](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/platform/IPlatform.ts#L35)

___

### selector

• `Optional` **selector**: [`ISelector`](ISelector.md)

#### Defined in

[src/leafer/packages/interface/src/platform/IPlatform.ts:37](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/platform/IPlatform.ts#L37)

___

### origin

• `Optional` **origin**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `createCanvas` | (`width`: `number`, `height`: `number`, `format?`: ``"svg"`` \| ``"pdf"``) => `any` |
| `createOffscreenCanvas?` | (`width`: `number`, `height`: `number`, `format?`: ``"svg"`` \| ``"pdf"``) => `any` |
| `canvasToDataURL` | (`canvas`: `any`, `type?`: [`IExportImageType`](../modules.md#iexportimagetype), `quality?`: `number`) => `string` \| `Promise`\<`string`\> |
| `canvasToBolb` | (`canvas`: `any`, `type?`: [`IExportFileType`](../modules.md#iexportfiletype), `quality?`: `number`) => `Promise`\<`any`\> |
| `canvasSaveAs` | (`canvas`: `any`, `filename`: `string`, `quality?`: `number`) => `Promise`\<`void`\> |
| `download` | (`url`: `string`, `filename`: `string`) => `Promise`\<`void`\> |
| `loadImage` | (`url`: `string`, `crossOrigin?`: [`IImageCrossOrigin`](../modules.md#iimagecrossorigin), `leaferImage?`: [`ILeaferImage`](ILeaferImage.md)) => `Promise`\<`any`\> |
| `loadFilm?` | (`url`: `string`, `crossOrigin?`: [`IImageCrossOrigin`](../modules.md#iimagecrossorigin), `leaferFilm?`: [`ILeaferFilm`](ILeaferFilm.md)) => `Promise`\<`any`\> |
| `loadVideo?` | (`url`: `string`, `crossOrigin?`: [`IImageCrossOrigin`](../modules.md#iimagecrossorigin), `leaferVideo?`: [`ILeaferVideo`](ILeaferVideo.md)) => `Promise`\<`any`\> |
| `loadContent` | (`url`: `string`, `responseType`: [`IResponseType`](../modules.md#iresponsetype)) => `Promise`\<`any`\> |
| `noRepeat?` | `string` |
| `Image?` | `any` |
| `PointerEvent?` | `any` |
| `DragEvent?` | `any` |

#### Defined in

[src/leafer/packages/interface/src/platform/IPlatform.ts:42](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/platform/IPlatform.ts#L42)

___

### roundRectPatch

• `Optional` **roundRectPatch**: `boolean`

#### Defined in

[src/leafer/packages/interface/src/platform/IPlatform.ts:59](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/platform/IPlatform.ts#L59)

___

### ellipseToCurve

• `Optional` **ellipseToCurve**: `boolean`

#### Defined in

[src/leafer/packages/interface/src/platform/IPlatform.ts:60](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/platform/IPlatform.ts#L60)

___

### backgrounder

• `Optional` **backgrounder**: `boolean`

#### Defined in

[src/leafer/packages/interface/src/platform/IPlatform.ts:61](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/platform/IPlatform.ts#L61)

___

### event

• `Optional` **event**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `stopDefault` | (`origin`: [`IObject`](IObject.md)) => `void` |
| `stopNow` | (`origin`: [`IObject`](IObject.md)) => `void` |
| `stop` | (`origin`: [`IObject`](IObject.md)) => `void` |

#### Defined in

[src/leafer/packages/interface/src/platform/IPlatform.ts:63](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/platform/IPlatform.ts#L63)

___

### miniapp

• `Optional` **miniapp**: [`IMiniapp`](IMiniapp.md)

#### Defined in

[src/leafer/packages/interface/src/platform/IPlatform.ts:69](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/platform/IPlatform.ts#L69)

___

### image

• **image**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `hitCanvasSize` | `number` |
| `maxCacheSize` | `number` |
| `maxPatternSize` | `number` |
| `prefix?` | `string` |
| `suffix?` | `string` |
| `crossOrigin` | [`IImageCrossOrigin`](../modules.md#iimagecrossorigin) |
| `isLarge` | (`size`: [`ISizeData`](ISizeData.md), `scaleX?`: `number`, `scaleY?`: `number`, `largeSize?`: `number`) => `boolean` |
| `isSuperLarge` | (`size`: [`ISizeData`](ISizeData.md), `scaleX?`: `number`, `scaleY?`: `number`) => `boolean` |
| `getRealURL` | [`IStringFunction`](IStringFunction.md) |
| `resize` | (`image`: `any`, `width`: `number`, `height`: `number`, `xGap?`: `number`, `yGap?`: `number`, `clip?`: [`IBoundsData`](IBoundsData.md), `smooth?`: `boolean`, `opacity?`: `number`, `filters?`: [`IObject`](IObject.md), `interlace?`: [`IInterlace`](IInterlace.md)) => `any` |
| `canUse` | (`image`: `any`) => `boolean` |
| `setPatternTransform` | (`pattern`: `CanvasPattern`, `transform?`: [`IMatrixData`](IMatrixData.md), `paint?`: [`IObject`](IObject.md)) => `void` |
| `applyFilter?` | (`canvas`: `any`, `image`: `any`, `filter`: `any`[]) => `void` |

#### Defined in

[src/leafer/packages/interface/src/platform/IPlatform.ts:71](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/platform/IPlatform.ts#L71)

___

### canCreateImageBitmap

• `Optional` **canCreateImageBitmap**: `boolean`

#### Defined in

[src/leafer/packages/interface/src/platform/IPlatform.ts:87](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/platform/IPlatform.ts#L87)

___

### canClipImageBitmap

• `Optional` **canClipImageBitmap**: `boolean`

#### Defined in

[src/leafer/packages/interface/src/platform/IPlatform.ts:88](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/platform/IPlatform.ts#L88)

## Methods

### toURL

▸ **toURL**(`text`, `fileType?`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `text` | `string` |
| `fileType?` | ``"svg"`` \| ``"text"`` |

#### Returns

`string`

#### Defined in

[src/leafer/packages/interface/src/platform/IPlatform.ts:19](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/platform/IPlatform.ts#L19)

___

### requestRender

▸ **requestRender**(`render`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `render` | [`IFunction`](IFunction.md) |

#### Returns

`void`

#### Defined in

[src/leafer/packages/interface/src/platform/IPlatform.ts:21](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/platform/IPlatform.ts#L21)

___

### getSelector

▸ **getSelector**(`leaf`): [`ISelector`](ISelector.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `leaf` | [`ILeaf`](ILeaf.md) |

#### Returns

[`ISelector`](ISelector.md)

#### Defined in

[src/leafer/packages/interface/src/platform/IPlatform.ts:38](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/platform/IPlatform.ts#L38)

___

### layout

▸ **layout**(`target`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `target` | [`ILeaf`](ILeaf.md) |

#### Returns

`void`

#### Defined in

[src/leafer/packages/interface/src/platform/IPlatform.ts:39](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/platform/IPlatform.ts#L39)

___

### render

▸ **render**(`target`, `canvas`, `options`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `target` | [`ILeaf`](ILeaf.md) |
| `canvas` | [`ILeaferCanvas`](ILeaferCanvas.md) |
| `options` | [`IRenderOptions`](IRenderOptions.md) |

#### Returns

`void`

#### Defined in

[src/leafer/packages/interface/src/platform/IPlatform.ts:40](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/platform/IPlatform.ts#L40)
