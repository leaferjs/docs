# Class: LeaferFilm

## Hierarchy

- [`LeaferImage`](LeaferImage.md)

  ↳ **`LeaferFilm`**

## Implements

- [`ILeaferFilm`](../interfaces/ILeaferFilm.md)

## Table of contents

### Constructors

- [constructor](LeaferFilm.md#constructor)

### Properties

- [innerId](LeaferFilm.md#innerid)
- [lod](LeaferFilm.md#lod)
- [view](LeaferFilm.md#view)
- [width](LeaferFilm.md#width)
- [height](LeaferFilm.md#height)
- [isSVG](LeaferFilm.md#issvg)
- [hasAlphaPixel](LeaferFilm.md#hasalphapixel)
- [ready](LeaferFilm.md#ready)
- [error](LeaferFilm.md#error)
- [loading](LeaferFilm.md#loading)
- [use](LeaferFilm.md#use)
- [config](LeaferFilm.md#config)
- [waitComplete](LeaferFilm.md#waitcomplete)
- [cache](LeaferFilm.md#cache)

### Accessors

- [tag](LeaferFilm.md#tag)
- [url](LeaferFilm.md#url)
- [crossOrigin](LeaferFilm.md#crossorigin)
- [completed](LeaferFilm.md#completed)

### Methods

- [load](LeaferFilm.md#load)
- [unload](LeaferFilm.md#unload)
- [setView](LeaferFilm.md#setview)
- [onComplete](LeaferFilm.md#oncomplete)
- [getFull](LeaferFilm.md#getfull)
- [getCanvas](LeaferFilm.md#getcanvas)
- [getPattern](LeaferFilm.md#getpattern)
- [render](LeaferFilm.md#render)
- [getLoadUrl](LeaferFilm.md#getloadurl)
- [setThumbView](LeaferFilm.md#setthumbview)
- [getThumbSize](LeaferFilm.md#getthumbsize)
- [getMinLevel](LeaferFilm.md#getminlevel)
- [getLevelData](LeaferFilm.md#getleveldata)
- [clearLevels](LeaferFilm.md#clearlevels)
- [destroyFilter](LeaferFilm.md#destroyfilter)
- [destroy](LeaferFilm.md#destroy)

## Constructors

### constructor

• **new LeaferFilm**(`config`): [`LeaferFilm`](LeaferFilm.md)

#### Parameters

| Name     | Type                                                        |
| :------- | :---------------------------------------------------------- |
| `config` | [`ILeaferImageConfig`](../interfaces/ILeaferImageConfig.md) |

#### Returns

[`LeaferFilm`](LeaferFilm.md)

#### Inherited from

[LeaferImage](LeaferImage.md).[constructor](LeaferImage.md#constructor)

#### Defined in

[src/leafer/packages/image/image/src/LeaferImage.ts:43](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/image/image/src/LeaferImage.ts#L43)

## Properties

### innerId

• `Readonly` **innerId**: `number`

#### Implementation of

[ILeaferFilm](../interfaces/ILeaferFilm.md).[innerId](../interfaces/ILeaferFilm.md#innerid)

#### Inherited from

[LeaferImage](LeaferImage.md).[innerId](LeaferImage.md#innerid)

#### Defined in

[src/leafer/packages/image/image/src/LeaferImage.ts:14](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/image/image/src/LeaferImage.ts#L14)

___

### lod

• `Optional` **lod**: [`IImageLOD`](../interfaces/IImageLOD.md)

#### Implementation of

[ILeaferFilm](../interfaces/ILeaferFilm.md).[lod](../interfaces/ILeaferFilm.md#lod)

#### Inherited from

[LeaferImage](LeaferImage.md).[lod](LeaferImage.md#lod)

#### Defined in

[src/leafer/packages/image/image/src/LeaferImage.ts:18](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/image/image/src/LeaferImage.ts#L18)

___

### view

• **view**: `any`

#### Implementation of

[ILeaferFilm](../interfaces/ILeaferFilm.md).[view](../interfaces/ILeaferFilm.md#view)

#### Inherited from

[LeaferImage](LeaferImage.md).[view](LeaferImage.md#view)

#### Defined in

[src/leafer/packages/image/image/src/LeaferImage.ts:21](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/image/image/src/LeaferImage.ts#L21)

___

### width

• **width**: `number`

#### Implementation of

[ILeaferFilm](../interfaces/ILeaferFilm.md).[width](../interfaces/ILeaferFilm.md#width)

#### Inherited from

[LeaferImage](LeaferImage.md).[width](LeaferImage.md#width)

#### Defined in

[src/leafer/packages/image/image/src/LeaferImage.ts:23](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/image/image/src/LeaferImage.ts#L23)

___

### height

• **height**: `number`

#### Implementation of

[ILeaferFilm](../interfaces/ILeaferFilm.md).[height](../interfaces/ILeaferFilm.md#height)

#### Inherited from

[LeaferImage](LeaferImage.md).[height](LeaferImage.md#height)

#### Defined in

[src/leafer/packages/image/image/src/LeaferImage.ts:24](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/image/image/src/LeaferImage.ts#L24)

___

### isSVG

• **isSVG**: `boolean`

#### Implementation of

[ILeaferFilm](../interfaces/ILeaferFilm.md).[isSVG](../interfaces/ILeaferFilm.md#issvg)

#### Inherited from

[LeaferImage](LeaferImage.md).[isSVG](LeaferImage.md#issvg)

#### Defined in

[src/leafer/packages/image/image/src/LeaferImage.ts:26](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/image/image/src/LeaferImage.ts#L26)

___

### hasAlphaPixel

• **hasAlphaPixel**: `boolean`

#### Implementation of

[ILeaferFilm](../interfaces/ILeaferFilm.md).[hasAlphaPixel](../interfaces/ILeaferFilm.md#hasalphapixel)

#### Inherited from

[LeaferImage](LeaferImage.md).[hasAlphaPixel](LeaferImage.md#hasalphapixel)

#### Defined in

[src/leafer/packages/image/image/src/LeaferImage.ts:27](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/image/image/src/LeaferImage.ts#L27)

___

### ready

• **ready**: `boolean`

#### Implementation of

[ILeaferFilm](../interfaces/ILeaferFilm.md).[ready](../interfaces/ILeaferFilm.md#ready)

#### Inherited from

[LeaferImage](LeaferImage.md).[ready](LeaferImage.md#ready)

#### Defined in

[src/leafer/packages/image/image/src/LeaferImage.ts:31](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/image/image/src/LeaferImage.ts#L31)

___

### error

• **error**: [`IObject`](../interfaces/IObject.md)

#### Implementation of

[ILeaferFilm](../interfaces/ILeaferFilm.md).[error](../interfaces/ILeaferFilm.md#error)

#### Inherited from

[LeaferImage](LeaferImage.md).[error](LeaferImage.md#error)

#### Defined in

[src/leafer/packages/image/image/src/LeaferImage.ts:32](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/image/image/src/LeaferImage.ts#L32)

___

### loading

• **loading**: `boolean`

#### Implementation of

[ILeaferFilm](../interfaces/ILeaferFilm.md).[loading](../interfaces/ILeaferFilm.md#loading)

#### Inherited from

[LeaferImage](LeaferImage.md).[loading](LeaferImage.md#loading)

#### Defined in

[src/leafer/packages/image/image/src/LeaferImage.ts:33](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/image/image/src/LeaferImage.ts#L33)

___

### use

• **use**: `number` = `0`

#### Implementation of

[ILeaferFilm](../interfaces/ILeaferFilm.md).[use](../interfaces/ILeaferFilm.md#use)

#### Inherited from

[LeaferImage](LeaferImage.md).[use](LeaferImage.md#use)

#### Defined in

[src/leafer/packages/image/image/src/LeaferImage.ts:35](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/image/image/src/LeaferImage.ts#L35)

___

### config

• **config**: [`ILeaferImageConfig`](../interfaces/ILeaferImageConfig.md)

#### Implementation of

[ILeaferFilm](../interfaces/ILeaferFilm.md).[config](../interfaces/ILeaferFilm.md#config)

#### Inherited from

[LeaferImage](LeaferImage.md).[config](LeaferImage.md#config)

#### Defined in

[src/leafer/packages/image/image/src/LeaferImage.ts:37](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/image/image/src/LeaferImage.ts#L37)

___

### waitComplete

• `Protected` **waitComplete**: [`IFunction`](../interfaces/IFunction.md)[] = `[]`

#### Inherited from

[LeaferImage](LeaferImage.md).[waitComplete](LeaferImage.md#waitcomplete)

#### Defined in

[src/leafer/packages/image/image/src/LeaferImage.ts:39](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/image/image/src/LeaferImage.ts#L39)

___

### cache

• `Protected` **cache**: [`ILeaferImageCacheCanvas`](../interfaces/ILeaferImageCacheCanvas.md)

#### Inherited from

[LeaferImage](LeaferImage.md).[cache](LeaferImage.md#cache)

#### Defined in

[src/leafer/packages/image/image/src/LeaferImage.ts:41](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/image/image/src/LeaferImage.ts#L41)

## Accessors

### tag

• `get` **tag**(): `string`

#### Returns

`string`

#### Overrides

LeaferImage.tag

#### Defined in

[src/leafer/packages/image/image/src/LeaferFilm.ts:8](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/image/image/src/LeaferFilm.ts#L8)

___

### url

• `get` **url**(): `string`

#### Returns

`string`

#### Implementation of

[ILeaferFilm](../interfaces/ILeaferFilm.md).[url](../interfaces/ILeaferFilm.md#url)

#### Inherited from

LeaferImage.url

#### Defined in

[src/leafer/packages/image/image/src/LeaferImage.ts:17](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/image/image/src/LeaferImage.ts#L17)

___

### crossOrigin

• `get` **crossOrigin**(): [`IImageCrossOrigin`](../modules.md#iimagecrossorigin)

#### Returns

[`IImageCrossOrigin`](../modules.md#iimagecrossorigin)

#### Implementation of

[ILeaferFilm](../interfaces/ILeaferFilm.md).[crossOrigin](../interfaces/ILeaferFilm.md#crossorigin)

#### Inherited from

LeaferImage.crossOrigin

#### Defined in

[src/leafer/packages/image/image/src/LeaferImage.ts:19](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/image/image/src/LeaferImage.ts#L19)

___

### completed

• `get` **completed**(): `boolean`

#### Returns

`boolean`

#### Implementation of

[ILeaferFilm](../interfaces/ILeaferFilm.md).[completed](../interfaces/ILeaferFilm.md#completed)

#### Inherited from

LeaferImage.completed

#### Defined in

[src/leafer/packages/image/image/src/LeaferImage.ts:29](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/image/image/src/LeaferImage.ts#L29)

## Methods

### load

▸ **load**(`onSuccess?`, `onError?`, `thumbSize?`): `number`

#### Parameters

| Name         | Type                                      |
| :----------- | :---------------------------------------- |
| `onSuccess?` | [`IFunction`](../interfaces/IFunction.md) |
| `onError?`   | [`IFunction`](../interfaces/IFunction.md) |
| `thumbSize?` | [`ISizeData`](../interfaces/ISizeData.md) |

#### Returns

`number`

#### Implementation of

[ILeaferFilm](../interfaces/ILeaferFilm.md).[load](../interfaces/ILeaferFilm.md#load)

#### Inherited from

[LeaferImage](LeaferImage.md).[load](LeaferImage.md#load)

#### Defined in

[src/leafer/packages/image/image/src/LeaferImage.ts:55](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/image/image/src/LeaferImage.ts#L55)

___

### unload

▸ **unload**(`index`, `stopEvent?`): `void`

#### Parameters

| Name         | Type      |
| :----------- | :-------- |
| `index`      | `number`  |
| `stopEvent?` | `boolean` |

#### Returns

`void`

#### Implementation of

[ILeaferFilm](../interfaces/ILeaferFilm.md).[unload](../interfaces/ILeaferFilm.md#unload)

#### Inherited from

[LeaferImage](LeaferImage.md).[unload](LeaferImage.md#unload)

#### Defined in

[src/leafer/packages/image/image/src/LeaferImage.ts:70](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/image/image/src/LeaferImage.ts#L70)

___

### setView

▸ **setView**(`img`): `void`

#### Parameters

| Name  | Type  |
| :---- | :---- |
| `img` | `any` |

#### Returns

`void`

#### Inherited from

[LeaferImage](LeaferImage.md).[setView](LeaferImage.md#setview)

#### Defined in

[src/leafer/packages/image/image/src/LeaferImage.ts:79](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/image/image/src/LeaferImage.ts#L79)

___

### onComplete

▸ **onComplete**(`isSuccess`): `void`

#### Parameters

| Name        | Type      |
| :---------- | :-------- |
| `isSuccess` | `boolean` |

#### Returns

`void`

#### Inherited from

[LeaferImage](LeaferImage.md).[onComplete](LeaferImage.md#oncomplete)

#### Defined in

[src/leafer/packages/image/image/src/LeaferImage.ts:89](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/image/image/src/LeaferImage.ts#L89)

___

### getFull

▸ **getFull**(`_filters?`): `any`

#### Parameters

| Name        | Type                                  |
| :---------- | :------------------------------------ |
| `_filters?` | [`IObject`](../interfaces/IObject.md) |

#### Returns

`any`

#### Implementation of

[ILeaferFilm](../interfaces/ILeaferFilm.md).[getFull](../interfaces/ILeaferFilm.md#getfull)

#### Inherited from

[LeaferImage](LeaferImage.md).[getFull](LeaferImage.md#getfull)

#### Defined in

[src/leafer/packages/image/image/src/LeaferImage.ts:105](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/image/image/src/LeaferImage.ts#L105)

___

### getCanvas

▸ **getCanvas**(`width`, `height`, `opacity?`, `filters?`, `xGap?`, `yGap?`, `smooth?`, `interlace?`): `any`

#### Parameters

| Name         | Type                                        |
| :----------- | :------------------------------------------ |
| `width`      | `number`                                    |
| `height`     | `number`                                    |
| `opacity?`   | `number`                                    |
| `filters?`   | [`IObject`](../interfaces/IObject.md)       |
| `xGap?`      | `number`                                    |
| `yGap?`      | `number`                                    |
| `smooth?`    | `boolean`                                   |
| `interlace?` | [`IInterlace`](../interfaces/IInterlace.md) |

#### Returns

`any`

#### Implementation of

[ILeaferFilm](../interfaces/ILeaferFilm.md).[getCanvas](../interfaces/ILeaferFilm.md#getcanvas)

#### Inherited from

[LeaferImage](LeaferImage.md).[getCanvas](LeaferImage.md#getcanvas)

#### Defined in

[src/leafer/packages/image/image/src/LeaferImage.ts:109](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/image/image/src/LeaferImage.ts#L109)

___

### getPattern

▸ **getPattern**(`canvas`, `repeat`, `transform?`, `paint?`): `CanvasPattern`

#### Parameters

| Name         | Type                                                                    |
| :----------- | :---------------------------------------------------------------------- |
| `canvas`     | `any`                                                                   |
| `repeat`     | `string`                                                                |
| `transform?` | [`IMatrixData`](../interfaces/IMatrixData.md)                           |
| `paint?`     | [`ILeaferImagePatternPaint`](../interfaces/ILeaferImagePatternPaint.md) |

#### Returns

`CanvasPattern`

#### Implementation of

[ILeaferFilm](../interfaces/ILeaferFilm.md).[getPattern](../interfaces/ILeaferFilm.md#getpattern)

#### Inherited from

[LeaferImage](LeaferImage.md).[getPattern](LeaferImage.md#getpattern)

#### Defined in

[src/leafer/packages/image/image/src/LeaferImage.ts:126](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/image/image/src/LeaferImage.ts#L126)

___

### render

▸ **render**(`canvas`, `x`, `y`, `width`, `height`, `_leaf`, `_paint`, `_imageScaleX`, `_imageScaleY`): `void`

#### Parameters

| Name           | Type                              |
| :------------- | :-------------------------------- |
| `canvas`       | `any`                             |
| `x`            | `number`                          |
| `y`            | `number`                          |
| `width`        | `number`                          |
| `height`       | `number`                          |
| `_leaf`        | [`ILeaf`](../interfaces/ILeaf.md) |
| `_paint`       | `any`                             |
| `_imageScaleX` | `number`                          |
| `_imageScaleY` | `number`                          |

#### Returns

`void`

#### Implementation of

[ILeaferFilm](../interfaces/ILeaferFilm.md).[render](../interfaces/ILeaferFilm.md#render)

#### Inherited from

[LeaferImage](LeaferImage.md).[render](LeaferImage.md#render)

#### Defined in

[src/leafer/packages/image/image/src/LeaferImage.ts:132](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/image/image/src/LeaferImage.ts#L132)

___

### getLoadUrl

▸ **getLoadUrl**(`_thumbSize?`): `string`

#### Parameters

| Name          | Type                                      |
| :------------ | :---------------------------------------- |
| `_thumbSize?` | [`ISizeData`](../interfaces/ISizeData.md) |

#### Returns

`string`

#### Implementation of

[ILeaferFilm](../interfaces/ILeaferFilm.md).[getLoadUrl](../interfaces/ILeaferFilm.md#getloadurl)

#### Inherited from

[LeaferImage](LeaferImage.md).[getLoadUrl](LeaferImage.md#getloadurl)

#### Defined in

[src/leafer/packages/image/image/src/LeaferImage.ts:137](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/image/image/src/LeaferImage.ts#L137)

___

### setThumbView

▸ **setThumbView**(`_view`): `void`

#### Parameters

| Name    | Type     |
| :------ | :------- |
| `_view` | `number` |

#### Returns

`void`

#### Implementation of

[ILeaferFilm](../interfaces/ILeaferFilm.md).[setThumbView](../interfaces/ILeaferFilm.md#setthumbview)

#### Inherited from

[LeaferImage](LeaferImage.md).[setThumbView](LeaferImage.md#setthumbview)

#### Defined in

[src/leafer/packages/image/image/src/LeaferImage.ts:138](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/image/image/src/LeaferImage.ts#L138)

___

### getThumbSize

▸ **getThumbSize**(`_lod?`): [`ISizeData`](../interfaces/ISizeData.md)

#### Parameters

| Name    | Type                                      |
| :------ | :---------------------------------------- |
| `_lod?` | [`IImageLOD`](../interfaces/IImageLOD.md) |

#### Returns

[`ISizeData`](../interfaces/ISizeData.md)

#### Implementation of

[ILeaferFilm](../interfaces/ILeaferFilm.md).[getThumbSize](../interfaces/ILeaferFilm.md#getthumbsize)

#### Inherited from

[LeaferImage](LeaferImage.md).[getThumbSize](LeaferImage.md#getthumbsize)

#### Defined in

[src/leafer/packages/image/image/src/LeaferImage.ts:139](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/image/image/src/LeaferImage.ts#L139)

___

### getMinLevel

▸ **getMinLevel**(): `number`

#### Returns

`number`

#### Implementation of

[ILeaferFilm](../interfaces/ILeaferFilm.md).[getMinLevel](../interfaces/ILeaferFilm.md#getminlevel)

#### Inherited from

[LeaferImage](LeaferImage.md).[getMinLevel](LeaferImage.md#getminlevel)

#### Defined in

[src/leafer/packages/image/image/src/LeaferImage.ts:141](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/image/image/src/LeaferImage.ts#L141)

___

### getLevelData

▸ **getLevelData**(`_level`, `_width?`, `_height?`): [`ILeaferImageLevel`](../interfaces/ILeaferImageLevel.md)

#### Parameters

| Name       | Type     |
| :--------- | :------- |
| `_level`   | `number` |
| `_width?`  | `number` |
| `_height?` | `number` |

#### Returns

[`ILeaferImageLevel`](../interfaces/ILeaferImageLevel.md)

#### Implementation of

[ILeaferFilm](../interfaces/ILeaferFilm.md).[getLevelData](../interfaces/ILeaferFilm.md#getleveldata)

#### Inherited from

[LeaferImage](LeaferImage.md).[getLevelData](LeaferImage.md#getleveldata)

#### Defined in

[src/leafer/packages/image/image/src/LeaferImage.ts:142](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/image/image/src/LeaferImage.ts#L142)

___

### clearLevels

▸ **clearLevels**(`_checkUse?`): `void`

#### Parameters

| Name         | Type      |
| :----------- | :-------- |
| `_checkUse?` | `boolean` |

#### Returns

`void`

#### Implementation of

[ILeaferFilm](../interfaces/ILeaferFilm.md).[clearLevels](../interfaces/ILeaferFilm.md#clearlevels)

#### Inherited from

[LeaferImage](LeaferImage.md).[clearLevels](LeaferImage.md#clearlevels)

#### Defined in

[src/leafer/packages/image/image/src/LeaferImage.ts:143](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/image/image/src/LeaferImage.ts#L143)

___

### destroyFilter

▸ **destroyFilter**(): `void`

#### Returns

`void`

#### Implementation of

[ILeaferFilm](../interfaces/ILeaferFilm.md).[destroyFilter](../interfaces/ILeaferFilm.md#destroyfilter)

#### Inherited from

[LeaferImage](LeaferImage.md).[destroyFilter](LeaferImage.md#destroyfilter)

#### Defined in

[src/leafer/packages/image/image/src/LeaferImage.ts:145](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/image/image/src/LeaferImage.ts#L145)

___

### destroy

▸ **destroy**(): `void`

#### Returns

`void`

#### Implementation of

[ILeaferFilm](../interfaces/ILeaferFilm.md).[destroy](../interfaces/ILeaferFilm.md#destroy)

#### Inherited from

[LeaferImage](LeaferImage.md).[destroy](LeaferImage.md#destroy)

#### Defined in

[src/leafer/packages/image/image/src/LeaferImage.ts:147](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/image/image/src/LeaferImage.ts#L147)
