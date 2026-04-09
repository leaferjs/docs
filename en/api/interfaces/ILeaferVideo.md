# Interface: ILeaferVideo

## Hierarchy

- [`ILeaferImage`](ILeaferImage.md)

  ↳ **`ILeaferVideo`**

## Implemented by

- [`LeaferVideo`](../classes/LeaferVideo.md)

## Table of contents

### Properties

- [innerId](ILeaferVideo.md#innerid)
- [url](ILeaferVideo.md#url)
- [lod](ILeaferVideo.md#lod)
- [crossOrigin](ILeaferVideo.md#crossorigin)
- [view](ILeaferVideo.md#view)
- [width](ILeaferVideo.md#width)
- [height](ILeaferVideo.md#height)
- [isSVG](ILeaferVideo.md#issvg)
- [hasAlphaPixel](ILeaferVideo.md#hasalphapixel)
- [completed](ILeaferVideo.md#completed)
- [ready](ILeaferVideo.md#ready)
- [error](ILeaferVideo.md#error)
- [loading](ILeaferVideo.md#loading)
- [isPlacehold](ILeaferVideo.md#isplacehold)
- [parent](ILeaferVideo.md#parent)
- [childrenMap](ILeaferVideo.md#childrenmap)
- [filter](ILeaferVideo.md#filter)
- [filterKey](ILeaferVideo.md#filterkey)
- [largeThumb](ILeaferVideo.md#largethumb)
- [thumb](ILeaferVideo.md#thumb)
- [levels](ILeaferVideo.md#levels)
- [levelsRange](ILeaferVideo.md#levelsrange)
- [minLevel](ILeaferVideo.md#minlevel)
- [loadId](ILeaferVideo.md#loadid)
- [progress](ILeaferVideo.md#progress)
- [use](ILeaferVideo.md#use)
- [config](ILeaferVideo.md#config)

### Methods

- [load](ILeaferVideo.md#load)
- [unload](ILeaferVideo.md#unload)
- [getFull](ILeaferVideo.md#getfull)
- [getCanvas](ILeaferVideo.md#getcanvas)
- [getPattern](ILeaferVideo.md#getpattern)
- [render](ILeaferVideo.md#render)
- [getLoadUrl](ILeaferVideo.md#getloadurl)
- [setThumbView](ILeaferVideo.md#setthumbview)
- [getThumbSize](ILeaferVideo.md#getthumbsize)
- [getMinLevel](ILeaferVideo.md#getminlevel)
- [getLevelData](ILeaferVideo.md#getleveldata)
- [clearLevels](ILeaferVideo.md#clearlevels)
- [destroyFilter](ILeaferVideo.md#destroyfilter)
- [destroy](ILeaferVideo.md#destroy)

## Properties

### innerId

• `Readonly` **innerId**: `number`

#### Inherited from

[ILeaferImage](ILeaferImage.md).[innerId](ILeaferImage.md#innerid)

#### Defined in

[src/leafer/packages/interface/src/image/ILeaferImage.ts:86](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/image/ILeaferImage.ts#L86)

___

### url

• `Readonly` **url**: `string`

#### Inherited from

[ILeaferImage](ILeaferImage.md).[url](ILeaferImage.md#url)

#### Defined in

[src/leafer/packages/interface/src/image/ILeaferImage.ts:87](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/image/ILeaferImage.ts#L87)

___

### lod

• `Optional` **lod**: [`IImageLOD`](IImageLOD.md)

#### Inherited from

[ILeaferImage](ILeaferImage.md).[lod](ILeaferImage.md#lod)

#### Defined in

[src/leafer/packages/interface/src/image/ILeaferImage.ts:88](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/image/ILeaferImage.ts#L88)

___

### crossOrigin

• `Readonly` **crossOrigin**: [`IImageCrossOrigin`](../modules.md#iimagecrossorigin)

#### Inherited from

[ILeaferImage](ILeaferImage.md).[crossOrigin](ILeaferImage.md#crossorigin)

#### Defined in

[src/leafer/packages/interface/src/image/ILeaferImage.ts:89](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/image/ILeaferImage.ts#L89)

___

### view

• **view**: `any`

#### Inherited from

[ILeaferImage](ILeaferImage.md).[view](ILeaferImage.md#view)

#### Defined in

[src/leafer/packages/interface/src/image/ILeaferImage.ts:91](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/image/ILeaferImage.ts#L91)

___

### width

• **width**: `number`

#### Inherited from

[ILeaferImage](ILeaferImage.md).[width](ILeaferImage.md#width)

#### Defined in

[src/leafer/packages/interface/src/image/ILeaferImage.ts:92](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/image/ILeaferImage.ts#L92)

___

### height

• **height**: `number`

#### Inherited from

[ILeaferImage](ILeaferImage.md).[height](ILeaferImage.md#height)

#### Defined in

[src/leafer/packages/interface/src/image/ILeaferImage.ts:93](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/image/ILeaferImage.ts#L93)

___

### isSVG

• **isSVG**: `boolean`

#### Inherited from

[ILeaferImage](ILeaferImage.md).[isSVG](ILeaferImage.md#issvg)

#### Defined in

[src/leafer/packages/interface/src/image/ILeaferImage.ts:95](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/image/ILeaferImage.ts#L95)

___

### hasAlphaPixel

• **hasAlphaPixel**: `boolean`

#### Inherited from

[ILeaferImage](ILeaferImage.md).[hasAlphaPixel](ILeaferImage.md#hasalphapixel)

#### Defined in

[src/leafer/packages/interface/src/image/ILeaferImage.ts:96](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/image/ILeaferImage.ts#L96)

___

### completed

• `Readonly` **completed**: `boolean`

#### Inherited from

[ILeaferImage](ILeaferImage.md).[completed](ILeaferImage.md#completed)

#### Defined in

[src/leafer/packages/interface/src/image/ILeaferImage.ts:98](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/image/ILeaferImage.ts#L98)

___

### ready

• **ready**: `boolean`

#### Inherited from

[ILeaferImage](ILeaferImage.md).[ready](ILeaferImage.md#ready)

#### Defined in

[src/leafer/packages/interface/src/image/ILeaferImage.ts:99](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/image/ILeaferImage.ts#L99)

___

### error

• **error**: [`IObject`](IObject.md)

#### Inherited from

[ILeaferImage](ILeaferImage.md).[error](ILeaferImage.md#error)

#### Defined in

[src/leafer/packages/interface/src/image/ILeaferImage.ts:100](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/image/ILeaferImage.ts#L100)

___

### loading

• **loading**: `boolean`

#### Inherited from

[ILeaferImage](ILeaferImage.md).[loading](ILeaferImage.md#loading)

#### Defined in

[src/leafer/packages/interface/src/image/ILeaferImage.ts:101](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/image/ILeaferImage.ts#L101)

___

### isPlacehold

• `Optional` **isPlacehold**: `boolean`

#### Inherited from

[ILeaferImage](ILeaferImage.md).[isPlacehold](ILeaferImage.md#isplacehold)

#### Defined in

[src/leafer/packages/interface/src/image/ILeaferImage.ts:103](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/image/ILeaferImage.ts#L103)

___

### parent

• `Optional` **parent**: [`ILeaferImage`](ILeaferImage.md)

#### Inherited from

[ILeaferImage](ILeaferImage.md).[parent](ILeaferImage.md#parent)

#### Defined in

[src/leafer/packages/interface/src/image/ILeaferImage.ts:106](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/image/ILeaferImage.ts#L106)

___

### childrenMap

• `Optional` **childrenMap**: [`ILeaferImageMap`](ILeaferImageMap.md)

#### Inherited from

[ILeaferImage](ILeaferImage.md).[childrenMap](ILeaferImage.md#childrenmap)

#### Defined in

[src/leafer/packages/interface/src/image/ILeaferImage.ts:107](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/image/ILeaferImage.ts#L107)

___

### filter

• `Optional` **filter**: `any`[]

#### Inherited from

[ILeaferImage](ILeaferImage.md).[filter](ILeaferImage.md#filter)

#### Defined in

[src/leafer/packages/interface/src/image/ILeaferImage.ts:109](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/image/ILeaferImage.ts#L109)

___

### filterKey

• `Optional` **filterKey**: `string`

#### Inherited from

[ILeaferImage](ILeaferImage.md).[filterKey](ILeaferImage.md#filterkey)

#### Defined in

[src/leafer/packages/interface/src/image/ILeaferImage.ts:110](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/image/ILeaferImage.ts#L110)

___

### largeThumb

• `Optional` **largeThumb**: [`ILeaferImageLevel`](ILeaferImageLevel.md)

#### Inherited from

[ILeaferImage](ILeaferImage.md).[largeThumb](ILeaferImage.md#largethumb)

#### Defined in

[src/leafer/packages/interface/src/image/ILeaferImage.ts:113](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/image/ILeaferImage.ts#L113)

___

### thumb

• `Optional` **thumb**: [`ILeaferImageLevel`](ILeaferImageLevel.md)

#### Inherited from

[ILeaferImage](ILeaferImage.md).[thumb](ILeaferImage.md#thumb)

#### Defined in

[src/leafer/packages/interface/src/image/ILeaferImage.ts:114](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/image/ILeaferImage.ts#L114)

___

### levels

• `Optional` **levels**: [`ILeaferImageLevel`](ILeaferImageLevel.md)[]

#### Inherited from

[ILeaferImage](ILeaferImage.md).[levels](ILeaferImage.md#levels)

#### Defined in

[src/leafer/packages/interface/src/image/ILeaferImage.ts:115](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/image/ILeaferImage.ts#L115)

___

### levelsRange

• `Optional` **levelsRange**: [`IRangeSize`](IRangeSize.md)

#### Inherited from

[ILeaferImage](ILeaferImage.md).[levelsRange](ILeaferImage.md#levelsrange)

#### Defined in

[src/leafer/packages/interface/src/image/ILeaferImage.ts:116](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/image/ILeaferImage.ts#L116)

___

### minLevel

• `Optional` **minLevel**: `number`

#### Inherited from

[ILeaferImage](ILeaferImage.md).[minLevel](ILeaferImage.md#minlevel)

#### Defined in

[src/leafer/packages/interface/src/image/ILeaferImage.ts:117](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/image/ILeaferImage.ts#L117)

___

### loadId

• `Optional` **loadId**: [`ITaskItem`](ITaskItem.md)

#### Inherited from

[ILeaferImage](ILeaferImage.md).[loadId](ILeaferImage.md#loadid)

#### Defined in

[src/leafer/packages/interface/src/image/ILeaferImage.ts:118](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/image/ILeaferImage.ts#L118)

___

### progress

• `Optional` **progress**: [`IProgressData`](IProgressData.md)

#### Inherited from

[ILeaferImage](ILeaferImage.md).[progress](ILeaferImage.md#progress)

#### Defined in

[src/leafer/packages/interface/src/image/ILeaferImage.ts:120](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/image/ILeaferImage.ts#L120)

___

### use

• **use**: `number`

#### Inherited from

[ILeaferImage](ILeaferImage.md).[use](ILeaferImage.md#use)

#### Defined in

[src/leafer/packages/interface/src/image/ILeaferImage.ts:122](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/image/ILeaferImage.ts#L122)

___

### config

• **config**: [`ILeaferImageConfig`](ILeaferImageConfig.md)

#### Inherited from

[ILeaferImage](ILeaferImage.md).[config](ILeaferImage.md#config)

#### Defined in

[src/leafer/packages/interface/src/image/ILeaferImage.ts:123](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/image/ILeaferImage.ts#L123)

## Methods

### load

▸ **load**(`onSuccess?`, `onError?`, `thumbSize?`): `number`

#### Parameters

| Name         | Type                                              |
| :----------- | :------------------------------------------------ |
| `onSuccess?` | [`ILeaferImageOnLoaded`](ILeaferImageOnLoaded.md) |
| `onError?`   | [`ILeaferImageOnError`](ILeaferImageOnError.md)   |
| `thumbSize?` | [`ISizeData`](ISizeData.md)                       |

#### Returns

`number`

#### Inherited from

[ILeaferImage](ILeaferImage.md).[load](ILeaferImage.md#load)

#### Defined in

[src/leafer/packages/interface/src/image/ILeaferImage.ts:125](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/image/ILeaferImage.ts#L125)

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

#### Inherited from

[ILeaferImage](ILeaferImage.md).[unload](ILeaferImage.md#unload)

#### Defined in

[src/leafer/packages/interface/src/image/ILeaferImage.ts:126](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/image/ILeaferImage.ts#L126)

___

### getFull

▸ **getFull**(`filters?`): `any`

#### Parameters

| Name       | Type                    |
| :--------- | :---------------------- |
| `filters?` | [`IObject`](IObject.md) |

#### Returns

`any`

#### Inherited from

[ILeaferImage](ILeaferImage.md).[getFull](ILeaferImage.md#getfull)

#### Defined in

[src/leafer/packages/interface/src/image/ILeaferImage.ts:127](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/image/ILeaferImage.ts#L127)

___

### getCanvas

▸ **getCanvas**(`width`, `height`, `opacity?`, `filters?`, `xGap?`, `yGap?`, `smooth?`, `interlace?`): `any`

#### Parameters

| Name         | Type                          |
| :----------- | :---------------------------- |
| `width`      | `number`                      |
| `height`     | `number`                      |
| `opacity?`   | `number`                      |
| `filters?`   | [`IObject`](IObject.md)       |
| `xGap?`      | `number`                      |
| `yGap?`      | `number`                      |
| `smooth?`    | `boolean`                     |
| `interlace?` | [`IInterlace`](IInterlace.md) |

#### Returns

`any`

#### Inherited from

[ILeaferImage](ILeaferImage.md).[getCanvas](ILeaferImage.md#getcanvas)

#### Defined in

[src/leafer/packages/interface/src/image/ILeaferImage.ts:128](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/image/ILeaferImage.ts#L128)

___

### getPattern

▸ **getPattern**(`canvas`, `repeat`, `transform?`, `paint?`): `CanvasPattern`

#### Parameters

| Name         | Type                            |
| :----------- | :------------------------------ |
| `canvas`     | `any`                           |
| `repeat`     | `string`                        |
| `transform?` | [`IMatrixData`](IMatrixData.md) |
| `paint?`     | [`IObject`](IObject.md)         |

#### Returns

`CanvasPattern`

#### Inherited from

[ILeaferImage](ILeaferImage.md).[getPattern](ILeaferImage.md#getpattern)

#### Defined in

[src/leafer/packages/interface/src/image/ILeaferImage.ts:129](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/image/ILeaferImage.ts#L129)

___

### render

▸ **render**(`canvas`, `x`, `y`, `width`, `height`, `leaf`, `paint`, `imageScaleX`, `imageScaleY`): `void`

#### Parameters

| Name          | Type                |
| :------------ | :------------------ |
| `canvas`      | `any`               |
| `x`           | `number`            |
| `y`           | `number`            |
| `width`       | `number`            |
| `height`      | `number`            |
| `leaf`        | [`ILeaf`](ILeaf.md) |
| `paint`       | `any`               |
| `imageScaleX` | `number`            |
| `imageScaleY` | `number`            |

#### Returns

`void`

#### Inherited from

[ILeaferImage](ILeaferImage.md).[render](ILeaferImage.md#render)

#### Defined in

[src/leafer/packages/interface/src/image/ILeaferImage.ts:131](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/image/ILeaferImage.ts#L131)

___

### getLoadUrl

▸ **getLoadUrl**(`thumbSize?`): `string`

#### Parameters

| Name         | Type                        |
| :----------- | :-------------------------- |
| `thumbSize?` | [`ISizeData`](ISizeData.md) |

#### Returns

`string`

#### Inherited from

[ILeaferImage](ILeaferImage.md).[getLoadUrl](ILeaferImage.md#getloadurl)

#### Defined in

[src/leafer/packages/interface/src/image/ILeaferImage.ts:133](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/image/ILeaferImage.ts#L133)

___

### setThumbView

▸ **setThumbView**(`view`): `void`

#### Parameters

| Name   | Type     |
| :----- | :------- |
| `view` | `number` |

#### Returns

`void`

#### Inherited from

[ILeaferImage](ILeaferImage.md).[setThumbView](ILeaferImage.md#setthumbview)

#### Defined in

[src/leafer/packages/interface/src/image/ILeaferImage.ts:134](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/image/ILeaferImage.ts#L134)

___

### getThumbSize

▸ **getThumbSize**(`lod?`): [`ISizeData`](ISizeData.md)

#### Parameters

| Name   | Type                        |
| :----- | :-------------------------- |
| `lod?` | [`IImageLOD`](IImageLOD.md) |

#### Returns

[`ISizeData`](ISizeData.md)

#### Inherited from

[ILeaferImage](ILeaferImage.md).[getThumbSize](ILeaferImage.md#getthumbsize)

#### Defined in

[src/leafer/packages/interface/src/image/ILeaferImage.ts:135](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/image/ILeaferImage.ts#L135)

___

### getMinLevel

▸ **getMinLevel**(): `number`

#### Returns

`number`

#### Inherited from

[ILeaferImage](ILeaferImage.md).[getMinLevel](ILeaferImage.md#getminlevel)

#### Defined in

[src/leafer/packages/interface/src/image/ILeaferImage.ts:137](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/image/ILeaferImage.ts#L137)

___

### getLevelData

▸ **getLevelData**(`level`, `width?`, `height?`): [`ILeaferImageLevel`](ILeaferImageLevel.md)

#### Parameters

| Name      | Type     |
| :-------- | :------- |
| `level`   | `number` |
| `width?`  | `number` |
| `height?` | `number` |

#### Returns

[`ILeaferImageLevel`](ILeaferImageLevel.md)

#### Inherited from

[ILeaferImage](ILeaferImage.md).[getLevelData](ILeaferImage.md#getleveldata)

#### Defined in

[src/leafer/packages/interface/src/image/ILeaferImage.ts:138](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/image/ILeaferImage.ts#L138)

___

### clearLevels

▸ **clearLevels**(`checkUse?`): `void`

#### Parameters

| Name        | Type      |
| :---------- | :-------- |
| `checkUse?` | `boolean` |

#### Returns

`void`

#### Inherited from

[ILeaferImage](ILeaferImage.md).[clearLevels](ILeaferImage.md#clearlevels)

#### Defined in

[src/leafer/packages/interface/src/image/ILeaferImage.ts:139](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/image/ILeaferImage.ts#L139)

___

### destroyFilter

▸ **destroyFilter**(): `void`

#### Returns

`void`

#### Inherited from

[ILeaferImage](ILeaferImage.md).[destroyFilter](ILeaferImage.md#destroyfilter)

#### Defined in

[src/leafer/packages/interface/src/image/ILeaferImage.ts:141](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/image/ILeaferImage.ts#L141)

___

### destroy

▸ **destroy**(): `void`

#### Returns

`void`

#### Inherited from

[ILeaferImage](ILeaferImage.md).[destroy](ILeaferImage.md#destroy)

#### Defined in

[src/leafer/packages/interface/src/image/ILeaferImage.ts:142](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/image/ILeaferImage.ts#L142)
