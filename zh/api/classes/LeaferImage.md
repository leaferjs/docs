# Class: LeaferImage

## Hierarchy

- **`LeaferImage`**

  ↳ [`LeaferFilm`](LeaferFilm.md)

  ↳ [`LeaferVideo`](LeaferVideo.md)

## Implements

- [`ILeaferImage`](../interfaces/ILeaferImage.md)

## Table of contents

### Constructors

- [constructor](LeaferImage.md#constructor)

### Properties

- [innerId](LeaferImage.md#innerid)
- [lod](LeaferImage.md#lod)
- [view](LeaferImage.md#view)
- [width](LeaferImage.md#width)
- [height](LeaferImage.md#height)
- [isSVG](LeaferImage.md#issvg)
- [hasAlphaPixel](LeaferImage.md#hasalphapixel)
- [ready](LeaferImage.md#ready)
- [error](LeaferImage.md#error)
- [loading](LeaferImage.md#loading)
- [use](LeaferImage.md#use)
- [config](LeaferImage.md#config)
- [waitComplete](LeaferImage.md#waitcomplete)
- [cache](LeaferImage.md#cache)

### Accessors

- [tag](LeaferImage.md#tag)
- [url](LeaferImage.md#url)
- [crossOrigin](LeaferImage.md#crossorigin)
- [completed](LeaferImage.md#completed)

### Methods

- [load](LeaferImage.md#load)
- [unload](LeaferImage.md#unload)
- [setView](LeaferImage.md#setview)
- [onComplete](LeaferImage.md#oncomplete)
- [getFull](LeaferImage.md#getfull)
- [getCanvas](LeaferImage.md#getcanvas)
- [getPattern](LeaferImage.md#getpattern)
- [render](LeaferImage.md#render)
- [getLoadUrl](LeaferImage.md#getloadurl)
- [setThumbView](LeaferImage.md#setthumbview)
- [getThumbSize](LeaferImage.md#getthumbsize)
- [getMinLevel](LeaferImage.md#getminlevel)
- [getLevelData](LeaferImage.md#getleveldata)
- [clearLevels](LeaferImage.md#clearlevels)
- [destroyFilter](LeaferImage.md#destroyfilter)
- [destroy](LeaferImage.md#destroy)

## Constructors

### constructor

• **new LeaferImage**(`config`): [`LeaferImage`](LeaferImage.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `config` | [`ILeaferImageConfig`](../interfaces/ILeaferImageConfig.md) |

#### Returns

[`LeaferImage`](LeaferImage.md)

#### Defined in

[src/leafer/packages/image/image/src/LeaferImage.ts:43](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/image/image/src/LeaferImage.ts#L43)

## Properties

### innerId

• `Readonly` **innerId**: `number`

#### Implementation of

[ILeaferImage](../interfaces/ILeaferImage.md).[innerId](../interfaces/ILeaferImage.md#innerid)

#### Defined in

[src/leafer/packages/image/image/src/LeaferImage.ts:14](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/image/image/src/LeaferImage.ts#L14)

___

### lod

• `Optional` **lod**: [`IImageLOD`](../interfaces/IImageLOD.md)

#### Implementation of

[ILeaferImage](../interfaces/ILeaferImage.md).[lod](../interfaces/ILeaferImage.md#lod)

#### Defined in

[src/leafer/packages/image/image/src/LeaferImage.ts:18](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/image/image/src/LeaferImage.ts#L18)

___

### view

• **view**: `any`

#### Implementation of

[ILeaferImage](../interfaces/ILeaferImage.md).[view](../interfaces/ILeaferImage.md#view)

#### Defined in

[src/leafer/packages/image/image/src/LeaferImage.ts:21](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/image/image/src/LeaferImage.ts#L21)

___

### width

• **width**: `number`

#### Implementation of

[ILeaferImage](../interfaces/ILeaferImage.md).[width](../interfaces/ILeaferImage.md#width)

#### Defined in

[src/leafer/packages/image/image/src/LeaferImage.ts:23](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/image/image/src/LeaferImage.ts#L23)

___

### height

• **height**: `number`

#### Implementation of

[ILeaferImage](../interfaces/ILeaferImage.md).[height](../interfaces/ILeaferImage.md#height)

#### Defined in

[src/leafer/packages/image/image/src/LeaferImage.ts:24](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/image/image/src/LeaferImage.ts#L24)

___

### isSVG

• **isSVG**: `boolean`

#### Implementation of

[ILeaferImage](../interfaces/ILeaferImage.md).[isSVG](../interfaces/ILeaferImage.md#issvg)

#### Defined in

[src/leafer/packages/image/image/src/LeaferImage.ts:26](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/image/image/src/LeaferImage.ts#L26)

___

### hasAlphaPixel

• **hasAlphaPixel**: `boolean`

#### Implementation of

[ILeaferImage](../interfaces/ILeaferImage.md).[hasAlphaPixel](../interfaces/ILeaferImage.md#hasalphapixel)

#### Defined in

[src/leafer/packages/image/image/src/LeaferImage.ts:27](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/image/image/src/LeaferImage.ts#L27)

___

### ready

• **ready**: `boolean`

#### Implementation of

[ILeaferImage](../interfaces/ILeaferImage.md).[ready](../interfaces/ILeaferImage.md#ready)

#### Defined in

[src/leafer/packages/image/image/src/LeaferImage.ts:31](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/image/image/src/LeaferImage.ts#L31)

___

### error

• **error**: [`IObject`](../interfaces/IObject.md)

#### Implementation of

[ILeaferImage](../interfaces/ILeaferImage.md).[error](../interfaces/ILeaferImage.md#error)

#### Defined in

[src/leafer/packages/image/image/src/LeaferImage.ts:32](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/image/image/src/LeaferImage.ts#L32)

___

### loading

• **loading**: `boolean`

#### Implementation of

[ILeaferImage](../interfaces/ILeaferImage.md).[loading](../interfaces/ILeaferImage.md#loading)

#### Defined in

[src/leafer/packages/image/image/src/LeaferImage.ts:33](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/image/image/src/LeaferImage.ts#L33)

___

### use

• **use**: `number` = `0`

#### Implementation of

[ILeaferImage](../interfaces/ILeaferImage.md).[use](../interfaces/ILeaferImage.md#use)

#### Defined in

[src/leafer/packages/image/image/src/LeaferImage.ts:35](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/image/image/src/LeaferImage.ts#L35)

___

### config

• **config**: [`ILeaferImageConfig`](../interfaces/ILeaferImageConfig.md)

#### Implementation of

[ILeaferImage](../interfaces/ILeaferImage.md).[config](../interfaces/ILeaferImage.md#config)

#### Defined in

[src/leafer/packages/image/image/src/LeaferImage.ts:37](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/image/image/src/LeaferImage.ts#L37)

___

### waitComplete

• `Protected` **waitComplete**: [`IFunction`](../interfaces/IFunction.md)[] = `[]`

#### Defined in

[src/leafer/packages/image/image/src/LeaferImage.ts:39](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/image/image/src/LeaferImage.ts#L39)

___

### cache

• `Protected` **cache**: [`ILeaferImageCacheCanvas`](../interfaces/ILeaferImageCacheCanvas.md)

#### Defined in

[src/leafer/packages/image/image/src/LeaferImage.ts:41](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/image/image/src/LeaferImage.ts#L41)

## Accessors

### tag

• `get` **tag**(): `string`

#### Returns

`string`

#### Defined in

[src/leafer/packages/image/image/src/LeaferImage.ts:15](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/image/image/src/LeaferImage.ts#L15)

___

### url

• `get` **url**(): `string`

#### Returns

`string`

#### Implementation of

[ILeaferImage](../interfaces/ILeaferImage.md).[url](../interfaces/ILeaferImage.md#url)

#### Defined in

[src/leafer/packages/image/image/src/LeaferImage.ts:17](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/image/image/src/LeaferImage.ts#L17)

___

### crossOrigin

• `get` **crossOrigin**(): [`IImageCrossOrigin`](../modules.md#iimagecrossorigin)

#### Returns

[`IImageCrossOrigin`](../modules.md#iimagecrossorigin)

#### Implementation of

[ILeaferImage](../interfaces/ILeaferImage.md).[crossOrigin](../interfaces/ILeaferImage.md#crossorigin)

#### Defined in

[src/leafer/packages/image/image/src/LeaferImage.ts:19](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/image/image/src/LeaferImage.ts#L19)

___

### completed

• `get` **completed**(): `boolean`

#### Returns

`boolean`

#### Implementation of

[ILeaferImage](../interfaces/ILeaferImage.md).[completed](../interfaces/ILeaferImage.md#completed)

#### Defined in

[src/leafer/packages/image/image/src/LeaferImage.ts:29](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/image/image/src/LeaferImage.ts#L29)

## Methods

### load

▸ **load**(`onSuccess?`, `onError?`, `thumbSize?`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `onSuccess?` | [`IFunction`](../interfaces/IFunction.md) |
| `onError?` | [`IFunction`](../interfaces/IFunction.md) |
| `thumbSize?` | [`ISizeData`](../interfaces/ISizeData.md) |

#### Returns

`number`

#### Implementation of

[ILeaferImage](../interfaces/ILeaferImage.md).[load](../interfaces/ILeaferImage.md#load)

#### Defined in

[src/leafer/packages/image/image/src/LeaferImage.ts:55](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/image/image/src/LeaferImage.ts#L55)

___

### unload

▸ **unload**(`index`, `stopEvent?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `index` | `number` |
| `stopEvent?` | `boolean` |

#### Returns

`void`

#### Implementation of

[ILeaferImage](../interfaces/ILeaferImage.md).[unload](../interfaces/ILeaferImage.md#unload)

#### Defined in

[src/leafer/packages/image/image/src/LeaferImage.ts:70](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/image/image/src/LeaferImage.ts#L70)

___

### setView

▸ **setView**(`img`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `img` | `any` |

#### Returns

`void`

#### Defined in

[src/leafer/packages/image/image/src/LeaferImage.ts:79](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/image/image/src/LeaferImage.ts#L79)

___

### onComplete

▸ **onComplete**(`isSuccess`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `isSuccess` | `boolean` |

#### Returns

`void`

#### Defined in

[src/leafer/packages/image/image/src/LeaferImage.ts:89](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/image/image/src/LeaferImage.ts#L89)

___

### getFull

▸ **getFull**(`_filters?`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `_filters?` | [`IObject`](../interfaces/IObject.md) |

#### Returns

`any`

#### Implementation of

[ILeaferImage](../interfaces/ILeaferImage.md).[getFull](../interfaces/ILeaferImage.md#getfull)

#### Defined in

[src/leafer/packages/image/image/src/LeaferImage.ts:105](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/image/image/src/LeaferImage.ts#L105)

___

### getCanvas

▸ **getCanvas**(`width`, `height`, `opacity?`, `filters?`, `xGap?`, `yGap?`, `smooth?`, `interlace?`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `width` | `number` |
| `height` | `number` |
| `opacity?` | `number` |
| `filters?` | [`IObject`](../interfaces/IObject.md) |
| `xGap?` | `number` |
| `yGap?` | `number` |
| `smooth?` | `boolean` |
| `interlace?` | [`IInterlace`](../interfaces/IInterlace.md) |

#### Returns

`any`

#### Implementation of

[ILeaferImage](../interfaces/ILeaferImage.md).[getCanvas](../interfaces/ILeaferImage.md#getcanvas)

#### Defined in

[src/leafer/packages/image/image/src/LeaferImage.ts:109](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/image/image/src/LeaferImage.ts#L109)

___

### getPattern

▸ **getPattern**(`canvas`, `repeat`, `transform?`, `paint?`): `CanvasPattern`

#### Parameters

| Name | Type |
| :------ | :------ |
| `canvas` | `any` |
| `repeat` | `string` |
| `transform?` | [`IMatrixData`](../interfaces/IMatrixData.md) |
| `paint?` | [`ILeaferImagePatternPaint`](../interfaces/ILeaferImagePatternPaint.md) |

#### Returns

`CanvasPattern`

#### Implementation of

[ILeaferImage](../interfaces/ILeaferImage.md).[getPattern](../interfaces/ILeaferImage.md#getpattern)

#### Defined in

[src/leafer/packages/image/image/src/LeaferImage.ts:126](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/image/image/src/LeaferImage.ts#L126)

___

### render

▸ **render**(`canvas`, `x`, `y`, `width`, `height`, `_leaf`, `_paint`, `_imageScaleX`, `_imageScaleY`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `canvas` | `any` |
| `x` | `number` |
| `y` | `number` |
| `width` | `number` |
| `height` | `number` |
| `_leaf` | [`ILeaf`](../interfaces/ILeaf.md) |
| `_paint` | `any` |
| `_imageScaleX` | `number` |
| `_imageScaleY` | `number` |

#### Returns

`void`

#### Implementation of

[ILeaferImage](../interfaces/ILeaferImage.md).[render](../interfaces/ILeaferImage.md#render)

#### Defined in

[src/leafer/packages/image/image/src/LeaferImage.ts:132](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/image/image/src/LeaferImage.ts#L132)

___

### getLoadUrl

▸ **getLoadUrl**(`_thumbSize?`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `_thumbSize?` | [`ISizeData`](../interfaces/ISizeData.md) |

#### Returns

`string`

#### Implementation of

[ILeaferImage](../interfaces/ILeaferImage.md).[getLoadUrl](../interfaces/ILeaferImage.md#getloadurl)

#### Defined in

[src/leafer/packages/image/image/src/LeaferImage.ts:137](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/image/image/src/LeaferImage.ts#L137)

___

### setThumbView

▸ **setThumbView**(`_view`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `_view` | `number` |

#### Returns

`void`

#### Implementation of

[ILeaferImage](../interfaces/ILeaferImage.md).[setThumbView](../interfaces/ILeaferImage.md#setthumbview)

#### Defined in

[src/leafer/packages/image/image/src/LeaferImage.ts:138](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/image/image/src/LeaferImage.ts#L138)

___

### getThumbSize

▸ **getThumbSize**(`_lod?`): [`ISizeData`](../interfaces/ISizeData.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `_lod?` | [`IImageLOD`](../interfaces/IImageLOD.md) |

#### Returns

[`ISizeData`](../interfaces/ISizeData.md)

#### Implementation of

[ILeaferImage](../interfaces/ILeaferImage.md).[getThumbSize](../interfaces/ILeaferImage.md#getthumbsize)

#### Defined in

[src/leafer/packages/image/image/src/LeaferImage.ts:139](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/image/image/src/LeaferImage.ts#L139)

___

### getMinLevel

▸ **getMinLevel**(): `number`

#### Returns

`number`

#### Implementation of

[ILeaferImage](../interfaces/ILeaferImage.md).[getMinLevel](../interfaces/ILeaferImage.md#getminlevel)

#### Defined in

[src/leafer/packages/image/image/src/LeaferImage.ts:141](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/image/image/src/LeaferImage.ts#L141)

___

### getLevelData

▸ **getLevelData**(`_level`, `_width?`, `_height?`): [`ILeaferImageLevel`](../interfaces/ILeaferImageLevel.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `_level` | `number` |
| `_width?` | `number` |
| `_height?` | `number` |

#### Returns

[`ILeaferImageLevel`](../interfaces/ILeaferImageLevel.md)

#### Implementation of

[ILeaferImage](../interfaces/ILeaferImage.md).[getLevelData](../interfaces/ILeaferImage.md#getleveldata)

#### Defined in

[src/leafer/packages/image/image/src/LeaferImage.ts:142](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/image/image/src/LeaferImage.ts#L142)

___

### clearLevels

▸ **clearLevels**(`_checkUse?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `_checkUse?` | `boolean` |

#### Returns

`void`

#### Implementation of

[ILeaferImage](../interfaces/ILeaferImage.md).[clearLevels](../interfaces/ILeaferImage.md#clearlevels)

#### Defined in

[src/leafer/packages/image/image/src/LeaferImage.ts:143](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/image/image/src/LeaferImage.ts#L143)

___

### destroyFilter

▸ **destroyFilter**(): `void`

#### Returns

`void`

#### Implementation of

[ILeaferImage](../interfaces/ILeaferImage.md).[destroyFilter](../interfaces/ILeaferImage.md#destroyfilter)

#### Defined in

[src/leafer/packages/image/image/src/LeaferImage.ts:145](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/image/image/src/LeaferImage.ts#L145)

___

### destroy

▸ **destroy**(): `void`

#### Returns

`void`

#### Implementation of

[ILeaferImage](../interfaces/ILeaferImage.md).[destroy](../interfaces/ILeaferImage.md#destroy)

#### Defined in

[src/leafer/packages/image/image/src/LeaferImage.ts:147](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/image/image/src/LeaferImage.ts#L147)
