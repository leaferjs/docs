# Interface: ILeaferImage

## Hierarchy

- **`ILeaferImage`**

  ↳ [`ILeaferFilm`](ILeaferFilm.md)

  ↳ [`ILeaferVideo`](ILeaferVideo.md)

## Implemented by

- [`LeaferImage`](../classes/LeaferImage.md)

## Table of contents

### Properties

- [innerId](ILeaferImage.md#innerid)
- [url](ILeaferImage.md#url)
- [lod](ILeaferImage.md#lod)
- [crossOrigin](ILeaferImage.md#crossorigin)
- [view](ILeaferImage.md#view)
- [width](ILeaferImage.md#width)
- [height](ILeaferImage.md#height)
- [isSVG](ILeaferImage.md#issvg)
- [hasAlphaPixel](ILeaferImage.md#hasalphapixel)
- [completed](ILeaferImage.md#completed)
- [ready](ILeaferImage.md#ready)
- [error](ILeaferImage.md#error)
- [loading](ILeaferImage.md#loading)
- [isPlacehold](ILeaferImage.md#isplacehold)
- [parent](ILeaferImage.md#parent)
- [childrenMap](ILeaferImage.md#childrenmap)
- [filter](ILeaferImage.md#filter)
- [filterKey](ILeaferImage.md#filterkey)
- [largeThumb](ILeaferImage.md#largethumb)
- [thumb](ILeaferImage.md#thumb)
- [levels](ILeaferImage.md#levels)
- [levelsRange](ILeaferImage.md#levelsrange)
- [minLevel](ILeaferImage.md#minlevel)
- [loadId](ILeaferImage.md#loadid)
- [progress](ILeaferImage.md#progress)
- [use](ILeaferImage.md#use)
- [config](ILeaferImage.md#config)

### Methods

- [load](ILeaferImage.md#load)
- [unload](ILeaferImage.md#unload)
- [getFull](ILeaferImage.md#getfull)
- [getCanvas](ILeaferImage.md#getcanvas)
- [getPattern](ILeaferImage.md#getpattern)
- [render](ILeaferImage.md#render)
- [getLoadUrl](ILeaferImage.md#getloadurl)
- [setThumbView](ILeaferImage.md#setthumbview)
- [getThumbSize](ILeaferImage.md#getthumbsize)
- [getMinLevel](ILeaferImage.md#getminlevel)
- [getLevelData](ILeaferImage.md#getleveldata)
- [clearLevels](ILeaferImage.md#clearlevels)
- [destroyFilter](ILeaferImage.md#destroyfilter)
- [destroy](ILeaferImage.md#destroy)

## Properties

### innerId

• `Readonly` **innerId**: `number`

#### Defined in

[src/leafer/packages/interface/src/image/ILeaferImage.ts:86](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/image/ILeaferImage.ts#L86)

___

### url

• `Readonly` **url**: `string`

#### Defined in

[src/leafer/packages/interface/src/image/ILeaferImage.ts:87](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/image/ILeaferImage.ts#L87)

___

### lod

• `Optional` **lod**: [`IImageLOD`](IImageLOD.md)

#### Defined in

[src/leafer/packages/interface/src/image/ILeaferImage.ts:88](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/image/ILeaferImage.ts#L88)

___

### crossOrigin

• `Readonly` **crossOrigin**: [`IImageCrossOrigin`](../modules.md#iimagecrossorigin)

#### Defined in

[src/leafer/packages/interface/src/image/ILeaferImage.ts:89](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/image/ILeaferImage.ts#L89)

___

### view

• **view**: `any`

#### Defined in

[src/leafer/packages/interface/src/image/ILeaferImage.ts:91](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/image/ILeaferImage.ts#L91)

___

### width

• **width**: `number`

#### Defined in

[src/leafer/packages/interface/src/image/ILeaferImage.ts:92](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/image/ILeaferImage.ts#L92)

___

### height

• **height**: `number`

#### Defined in

[src/leafer/packages/interface/src/image/ILeaferImage.ts:93](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/image/ILeaferImage.ts#L93)

___

### isSVG

• **isSVG**: `boolean`

#### Defined in

[src/leafer/packages/interface/src/image/ILeaferImage.ts:95](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/image/ILeaferImage.ts#L95)

___

### hasAlphaPixel

• **hasAlphaPixel**: `boolean`

#### Defined in

[src/leafer/packages/interface/src/image/ILeaferImage.ts:96](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/image/ILeaferImage.ts#L96)

___

### completed

• `Readonly` **completed**: `boolean`

#### Defined in

[src/leafer/packages/interface/src/image/ILeaferImage.ts:98](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/image/ILeaferImage.ts#L98)

___

### ready

• **ready**: `boolean`

#### Defined in

[src/leafer/packages/interface/src/image/ILeaferImage.ts:99](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/image/ILeaferImage.ts#L99)

___

### error

• **error**: [`IObject`](IObject.md)

#### Defined in

[src/leafer/packages/interface/src/image/ILeaferImage.ts:100](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/image/ILeaferImage.ts#L100)

___

### loading

• **loading**: `boolean`

#### Defined in

[src/leafer/packages/interface/src/image/ILeaferImage.ts:101](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/image/ILeaferImage.ts#L101)

___

### isPlacehold

• `Optional` **isPlacehold**: `boolean`

#### Defined in

[src/leafer/packages/interface/src/image/ILeaferImage.ts:103](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/image/ILeaferImage.ts#L103)

___

### parent

• `Optional` **parent**: [`ILeaferImage`](ILeaferImage.md)

#### Defined in

[src/leafer/packages/interface/src/image/ILeaferImage.ts:106](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/image/ILeaferImage.ts#L106)

___

### childrenMap

• `Optional` **childrenMap**: [`ILeaferImageMap`](ILeaferImageMap.md)

#### Defined in

[src/leafer/packages/interface/src/image/ILeaferImage.ts:107](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/image/ILeaferImage.ts#L107)

___

### filter

• `Optional` **filter**: `any`[]

#### Defined in

[src/leafer/packages/interface/src/image/ILeaferImage.ts:109](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/image/ILeaferImage.ts#L109)

___

### filterKey

• `Optional` **filterKey**: `string`

#### Defined in

[src/leafer/packages/interface/src/image/ILeaferImage.ts:110](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/image/ILeaferImage.ts#L110)

___

### largeThumb

• `Optional` **largeThumb**: [`ILeaferImageLevel`](ILeaferImageLevel.md)

#### Defined in

[src/leafer/packages/interface/src/image/ILeaferImage.ts:113](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/image/ILeaferImage.ts#L113)

___

### thumb

• `Optional` **thumb**: [`ILeaferImageLevel`](ILeaferImageLevel.md)

#### Defined in

[src/leafer/packages/interface/src/image/ILeaferImage.ts:114](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/image/ILeaferImage.ts#L114)

___

### levels

• `Optional` **levels**: [`ILeaferImageLevel`](ILeaferImageLevel.md)[]

#### Defined in

[src/leafer/packages/interface/src/image/ILeaferImage.ts:115](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/image/ILeaferImage.ts#L115)

___

### levelsRange

• `Optional` **levelsRange**: [`IRangeSize`](IRangeSize.md)

#### Defined in

[src/leafer/packages/interface/src/image/ILeaferImage.ts:116](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/image/ILeaferImage.ts#L116)

___

### minLevel

• `Optional` **minLevel**: `number`

#### Defined in

[src/leafer/packages/interface/src/image/ILeaferImage.ts:117](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/image/ILeaferImage.ts#L117)

___

### loadId

• `Optional` **loadId**: [`ITaskItem`](ITaskItem.md)

#### Defined in

[src/leafer/packages/interface/src/image/ILeaferImage.ts:118](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/image/ILeaferImage.ts#L118)

___

### progress

• `Optional` **progress**: [`IProgressData`](IProgressData.md)

#### Defined in

[src/leafer/packages/interface/src/image/ILeaferImage.ts:120](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/image/ILeaferImage.ts#L120)

___

### use

• **use**: `number`

#### Defined in

[src/leafer/packages/interface/src/image/ILeaferImage.ts:122](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/image/ILeaferImage.ts#L122)

___

### config

• **config**: [`ILeaferImageConfig`](ILeaferImageConfig.md)

#### Defined in

[src/leafer/packages/interface/src/image/ILeaferImage.ts:123](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/image/ILeaferImage.ts#L123)

## Methods

### load

▸ **load**(`onSuccess?`, `onError?`, `thumbSize?`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `onSuccess?` | [`ILeaferImageOnLoaded`](ILeaferImageOnLoaded.md) |
| `onError?` | [`ILeaferImageOnError`](ILeaferImageOnError.md) |
| `thumbSize?` | [`ISizeData`](ISizeData.md) |

#### Returns

`number`

#### Defined in

[src/leafer/packages/interface/src/image/ILeaferImage.ts:125](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/image/ILeaferImage.ts#L125)

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

#### Defined in

[src/leafer/packages/interface/src/image/ILeaferImage.ts:126](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/image/ILeaferImage.ts#L126)

___

### getFull

▸ **getFull**(`filters?`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `filters?` | [`IObject`](IObject.md) |

#### Returns

`any`

#### Defined in

[src/leafer/packages/interface/src/image/ILeaferImage.ts:127](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/image/ILeaferImage.ts#L127)

___

### getCanvas

▸ **getCanvas**(`width`, `height`, `opacity?`, `filters?`, `xGap?`, `yGap?`, `smooth?`, `interlace?`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `width` | `number` |
| `height` | `number` |
| `opacity?` | `number` |
| `filters?` | [`IObject`](IObject.md) |
| `xGap?` | `number` |
| `yGap?` | `number` |
| `smooth?` | `boolean` |
| `interlace?` | [`IInterlace`](IInterlace.md) |

#### Returns

`any`

#### Defined in

[src/leafer/packages/interface/src/image/ILeaferImage.ts:128](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/image/ILeaferImage.ts#L128)

___

### getPattern

▸ **getPattern**(`canvas`, `repeat`, `transform?`, `paint?`): `CanvasPattern`

#### Parameters

| Name | Type |
| :------ | :------ |
| `canvas` | `any` |
| `repeat` | `string` |
| `transform?` | [`IMatrixData`](IMatrixData.md) |
| `paint?` | [`IObject`](IObject.md) |

#### Returns

`CanvasPattern`

#### Defined in

[src/leafer/packages/interface/src/image/ILeaferImage.ts:129](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/image/ILeaferImage.ts#L129)

___

### render

▸ **render**(`canvas`, `x`, `y`, `width`, `height`, `leaf`, `paint`, `imageScaleX`, `imageScaleY`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `canvas` | `any` |
| `x` | `number` |
| `y` | `number` |
| `width` | `number` |
| `height` | `number` |
| `leaf` | [`ILeaf`](ILeaf.md) |
| `paint` | `any` |
| `imageScaleX` | `number` |
| `imageScaleY` | `number` |

#### Returns

`void`

#### Defined in

[src/leafer/packages/interface/src/image/ILeaferImage.ts:131](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/image/ILeaferImage.ts#L131)

___

### getLoadUrl

▸ **getLoadUrl**(`thumbSize?`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `thumbSize?` | [`ISizeData`](ISizeData.md) |

#### Returns

`string`

#### Defined in

[src/leafer/packages/interface/src/image/ILeaferImage.ts:133](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/image/ILeaferImage.ts#L133)

___

### setThumbView

▸ **setThumbView**(`view`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `view` | `number` |

#### Returns

`void`

#### Defined in

[src/leafer/packages/interface/src/image/ILeaferImage.ts:134](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/image/ILeaferImage.ts#L134)

___

### getThumbSize

▸ **getThumbSize**(`lod?`): [`ISizeData`](ISizeData.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `lod?` | [`IImageLOD`](IImageLOD.md) |

#### Returns

[`ISizeData`](ISizeData.md)

#### Defined in

[src/leafer/packages/interface/src/image/ILeaferImage.ts:135](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/image/ILeaferImage.ts#L135)

___

### getMinLevel

▸ **getMinLevel**(): `number`

#### Returns

`number`

#### Defined in

[src/leafer/packages/interface/src/image/ILeaferImage.ts:137](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/image/ILeaferImage.ts#L137)

___

### getLevelData

▸ **getLevelData**(`level`, `width?`, `height?`): [`ILeaferImageLevel`](ILeaferImageLevel.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `level` | `number` |
| `width?` | `number` |
| `height?` | `number` |

#### Returns

[`ILeaferImageLevel`](ILeaferImageLevel.md)

#### Defined in

[src/leafer/packages/interface/src/image/ILeaferImage.ts:138](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/image/ILeaferImage.ts#L138)

___

### clearLevels

▸ **clearLevels**(`checkUse?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `checkUse?` | `boolean` |

#### Returns

`void`

#### Defined in

[src/leafer/packages/interface/src/image/ILeaferImage.ts:139](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/image/ILeaferImage.ts#L139)

___

### destroyFilter

▸ **destroyFilter**(): `void`

#### Returns

`void`

#### Defined in

[src/leafer/packages/interface/src/image/ILeaferImage.ts:141](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/image/ILeaferImage.ts#L141)

___

### destroy

▸ **destroy**(): `void`

#### Returns

`void`

#### Defined in

[src/leafer/packages/interface/src/image/ILeaferImage.ts:142](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/image/ILeaferImage.ts#L142)
