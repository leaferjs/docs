# Interface: IFilmDecoder

## Table of contents

### Properties

- [width](IFilmDecoder.md#width)
- [height](IFilmDecoder.md#height)
- [total](IFilmDecoder.md#total)
- [loop](IFilmDecoder.md#loop)
- [frames](IFilmDecoder.md#frames)
- [atlas](IFilmDecoder.md#atlas)
- [atlasContext](IFilmDecoder.md#atlascontext)
- [atlasGrid](IFilmDecoder.md#atlasgrid)
- [decoder](IFilmDecoder.md#decoder)
- [bufferCanvas](IFilmDecoder.md#buffercanvas)
- [bufferContext](IFilmDecoder.md#buffercontext)

### Methods

- [createAtlas](IFilmDecoder.md#createatlas)
- [decodeHeader](IFilmDecoder.md#decodeheader)
- [decodeFrame](IFilmDecoder.md#decodeframe)
- [decodeOneFrame](IFilmDecoder.md#decodeoneframe)
- [mergeFrame](IFilmDecoder.md#mergeframe)
- [render](IFilmDecoder.md#render)
- [destoryFrame](IFilmDecoder.md#destoryframe)
- [destoryFrameImage](IFilmDecoder.md#destoryframeimage)
- [destroyDecoder](IFilmDecoder.md#destroydecoder)
- [close](IFilmDecoder.md#close)

## Properties

### width

• **width**: `number`

#### Defined in

[src/leafer/packages/interface/src/image/ILeaferFilm.ts:15](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/image/ILeaferFilm.ts#L15)

___

### height

• **height**: `number`

#### Defined in

[src/leafer/packages/interface/src/image/ILeaferFilm.ts:16](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/image/ILeaferFilm.ts#L16)

___

### total

• **total**: `number`

#### Defined in

[src/leafer/packages/interface/src/image/ILeaferFilm.ts:18](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/image/ILeaferFilm.ts#L18)

___

### loop

• **loop**: `number`

#### Defined in

[src/leafer/packages/interface/src/image/ILeaferFilm.ts:19](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/image/ILeaferFilm.ts#L19)

___

### frames

• **frames**: [`IFilmFrame`](IFilmFrame.md)[]

#### Defined in

[src/leafer/packages/interface/src/image/ILeaferFilm.ts:20](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/image/ILeaferFilm.ts#L20)

___

### atlas

• `Optional` **atlas**: `any`

#### Defined in

[src/leafer/packages/interface/src/image/ILeaferFilm.ts:22](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/image/ILeaferFilm.ts#L22)

___

### atlasContext

• `Optional` **atlasContext**: `any`

#### Defined in

[src/leafer/packages/interface/src/image/ILeaferFilm.ts:23](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/image/ILeaferFilm.ts#L23)

___

### atlasGrid

• `Optional` **atlasGrid**: [`IPointData`](IPointData.md)

#### Defined in

[src/leafer/packages/interface/src/image/ILeaferFilm.ts:24](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/image/ILeaferFilm.ts#L24)

___

### decoder

• **decoder**: `any`

#### Defined in

[src/leafer/packages/interface/src/image/ILeaferFilm.ts:26](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/image/ILeaferFilm.ts#L26)

___

### bufferCanvas

• `Optional` **bufferCanvas**: `any`

#### Defined in

[src/leafer/packages/interface/src/image/ILeaferFilm.ts:28](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/image/ILeaferFilm.ts#L28)

___

### bufferContext

• `Optional` **bufferContext**: [`ICanvasContext2D`](ICanvasContext2D.md)

#### Defined in

[src/leafer/packages/interface/src/image/ILeaferFilm.ts:29](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/image/ILeaferFilm.ts#L29)

## Methods

### createAtlas

▸ **createAtlas**(): `void`

#### Returns

`void`

#### Defined in

[src/leafer/packages/interface/src/image/ILeaferFilm.ts:31](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/image/ILeaferFilm.ts#L31)

___

### decodeHeader

▸ **decodeHeader**(`data`, `type`): `Promise`\<`void`\>

#### Parameters

| Name   | Type          |
| :----- | :------------ |
| `data` | `ArrayBuffer` |
| `type` | `string`      |

#### Returns

`Promise`\<`void`\>

#### Defined in

[src/leafer/packages/interface/src/image/ILeaferFilm.ts:32](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/image/ILeaferFilm.ts#L32)

___

### decodeFrame

▸ **decodeFrame**(`frameIndex`): `Promise`\<[`IFilmFrame`](IFilmFrame.md)\>

#### Parameters

| Name         | Type     |
| :----------- | :------- |
| `frameIndex` | `number` |

#### Returns

`Promise`\<[`IFilmFrame`](IFilmFrame.md)\>

#### Defined in

[src/leafer/packages/interface/src/image/ILeaferFilm.ts:33](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/image/ILeaferFilm.ts#L33)

___

### decodeOneFrame

▸ **decodeOneFrame**(`frameIndex`): `Promise`\<[`IFilmFrame`](IFilmFrame.md)\>

#### Parameters

| Name         | Type     |
| :----------- | :------- |
| `frameIndex` | `number` |

#### Returns

`Promise`\<[`IFilmFrame`](IFilmFrame.md)\>

#### Defined in

[src/leafer/packages/interface/src/image/ILeaferFilm.ts:34](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/image/ILeaferFilm.ts#L34)

___

### mergeFrame

▸ **mergeFrame**(`frameIndex`, `destoryFrameImage`): `void`

#### Parameters

| Name                | Type      |
| :------------------ | :-------- |
| `frameIndex`        | `number`  |
| `destoryFrameImage` | `boolean` |

#### Returns

`void`

#### Defined in

[src/leafer/packages/interface/src/image/ILeaferFilm.ts:35](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/image/ILeaferFilm.ts#L35)

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

#### Defined in

[src/leafer/packages/interface/src/image/ILeaferFilm.ts:37](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/image/ILeaferFilm.ts#L37)

___

### destoryFrame

▸ **destoryFrame**(`frameIndex`, `deleteIndex`): `void`

#### Parameters

| Name          | Type      |
| :------------ | :-------- |
| `frameIndex`  | `number`  |
| `deleteIndex` | `boolean` |

#### Returns

`void`

#### Defined in

[src/leafer/packages/interface/src/image/ILeaferFilm.ts:39](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/image/ILeaferFilm.ts#L39)

___

### destoryFrameImage

▸ **destoryFrameImage**(`frame`): `void`

#### Parameters

| Name    | Type                          |
| :------ | :---------------------------- |
| `frame` | [`IFilmFrame`](IFilmFrame.md) |

#### Returns

`void`

#### Defined in

[src/leafer/packages/interface/src/image/ILeaferFilm.ts:40](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/image/ILeaferFilm.ts#L40)

___

### destroyDecoder

▸ **destroyDecoder**(): `void`

#### Returns

`void`

#### Defined in

[src/leafer/packages/interface/src/image/ILeaferFilm.ts:41](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/image/ILeaferFilm.ts#L41)

___

### close

▸ **close**(): `void`

#### Returns

`void`

#### Defined in

[src/leafer/packages/interface/src/image/ILeaferFilm.ts:42](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/image/ILeaferFilm.ts#L42)
