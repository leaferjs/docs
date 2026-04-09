# Interface: IImageManager

## Table of contents

### Properties

- [maxRecycled](IImageManager.md#maxrecycled)
- [recycledList](IImageManager.md#recycledlist)
- [patternTasker](IImageManager.md#patterntasker)
- [patternLocked](IImageManager.md#patternlocked)

### Methods

- [get](IImageManager.md#get)
- [recycle](IImageManager.md#recycle)
- [recyclePaint](IImageManager.md#recyclepaint)
- [clearRecycled](IImageManager.md#clearrecycled)
- [clearLevels](IImageManager.md#clearlevels)
- [hasAlphaPixel](IImageManager.md#hasalphapixel)
- [isFormat](IImageManager.md#isformat)
- [destroy](IImageManager.md#destroy)

## Properties

### maxRecycled

• **maxRecycled**: `number`

#### Defined in

[src/leafer/packages/interface/src/image/IImageManager.ts:7](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/image/IImageManager.ts#L7)

___

### recycledList

• **recycledList**: [`ILeaferImage`](ILeaferImage.md)[]

#### Defined in

[src/leafer/packages/interface/src/image/IImageManager.ts:8](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/image/IImageManager.ts#L8)

___

### patternTasker

• **patternTasker**: [`ITaskProcessor`](ITaskProcessor.md)

#### Defined in

[src/leafer/packages/interface/src/image/IImageManager.ts:10](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/image/IImageManager.ts#L10)

___

### patternLocked

• `Optional` **patternLocked**: `boolean`

#### Defined in

[src/leafer/packages/interface/src/image/IImageManager.ts:11](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/image/IImageManager.ts#L11)

## Methods

### get

▸ **get**(`config`, `type?`): [`ILeaferImage`](ILeaferImage.md)

#### Parameters

| Name     | Type                                               |
| :------- | :------------------------------------------------- |
| `config` | [`ILeaferImageConfig`](ILeaferImageConfig.md)      |
| `type?`  | [`IMultimediaType`](../modules.md#imultimediatype) |

#### Returns

[`ILeaferImage`](ILeaferImage.md)

#### Defined in

[src/leafer/packages/interface/src/image/IImageManager.ts:13](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/image/IImageManager.ts#L13)

___

### recycle

▸ **recycle**(`image`): `void`

#### Parameters

| Name    | Type                              |
| :------ | :-------------------------------- |
| `image` | [`ILeaferImage`](ILeaferImage.md) |

#### Returns

`void`

#### Defined in

[src/leafer/packages/interface/src/image/IImageManager.ts:14](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/image/IImageManager.ts#L14)

___

### recyclePaint

▸ **recyclePaint**(`paint`): `void`

#### Parameters

| Name    | Type  |
| :------ | :---- |
| `paint` | `any` |

#### Returns

`void`

#### Defined in

[src/leafer/packages/interface/src/image/IImageManager.ts:16](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/image/IImageManager.ts#L16)

___

### clearRecycled

▸ **clearRecycled**(`force?`): `void`

#### Parameters

| Name     | Type      |
| :------- | :-------- |
| `force?` | `boolean` |

#### Returns

`void`

#### Defined in

[src/leafer/packages/interface/src/image/IImageManager.ts:18](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/image/IImageManager.ts#L18)

___

### clearLevels

▸ **clearLevels**(): `void`

#### Returns

`void`

#### Defined in

[src/leafer/packages/interface/src/image/IImageManager.ts:19](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/image/IImageManager.ts#L19)

___

### hasAlphaPixel

▸ **hasAlphaPixel**(`config`): `boolean`

#### Parameters

| Name     | Type                                          |
| :------- | :-------------------------------------------- |
| `config` | [`ILeaferImageConfig`](ILeaferImageConfig.md) |

#### Returns

`boolean`

#### Defined in

[src/leafer/packages/interface/src/image/IImageManager.ts:21](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/image/IImageManager.ts#L21)

___

### isFormat

▸ **isFormat**(`format`, `config`): `boolean`

#### Parameters

| Name     | Type                                               |
| :------- | :------------------------------------------------- |
| `format` | [`IExportFileType`](../modules.md#iexportfiletype) |
| `config` | [`ILeaferImageConfig`](ILeaferImageConfig.md)      |

#### Returns

`boolean`

#### Defined in

[src/leafer/packages/interface/src/image/IImageManager.ts:22](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/image/IImageManager.ts#L22)

___

### destroy

▸ **destroy**(): `void`

#### Returns

`void`

#### Defined in

[src/leafer/packages/interface/src/image/IImageManager.ts:24](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/image/IImageManager.ts#L24)
