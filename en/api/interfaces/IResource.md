# Interface: IResource

## Table of contents

### Properties

- [map](IResource.md#map)
- [tasker](IResource.md#tasker)
- [queue](IResource.md#queue)
- [isComplete](IResource.md#iscomplete)

### Methods

- [set](IResource.md#set)
- [get](IResource.md#get)
- [remove](IResource.md#remove)
- [setImage](IResource.md#setimage)
- [loadImage](IResource.md#loadimage)
- [loadFilm](IResource.md#loadfilm)
- [loadVideo](IResource.md#loadvideo)
- [destroy](IResource.md#destroy)

## Properties

### map

• **map**: `any`

#### Defined in

[src/leafer/packages/interface/src/file/IResource.ts:11](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/file/IResource.ts#L11)

___

### tasker

• **tasker**: [`ITaskProcessor`](ITaskProcessor.md)

#### Defined in

[src/leafer/packages/interface/src/file/IResource.ts:13](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/file/IResource.ts#L13)

___

### queue

• **queue**: [`ITaskProcessor`](ITaskProcessor.md)

#### Defined in

[src/leafer/packages/interface/src/file/IResource.ts:14](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/file/IResource.ts#L14)

___

### isComplete

• `Readonly` **isComplete**: `boolean`

#### Defined in

[src/leafer/packages/interface/src/file/IResource.ts:16](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/file/IResource.ts#L16)

## Methods

### set

▸ **set**(`key`, `value`): `void`

#### Parameters

| Name    | Type     |
| :------ | :------- |
| `key`   | `string` |
| `value` | `any`    |

#### Returns

`void`

#### Defined in

[src/leafer/packages/interface/src/file/IResource.ts:18](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/file/IResource.ts#L18)

___

### get

▸ **get**(`key`): `any`

#### Parameters

| Name  | Type     |
| :---- | :------- |
| `key` | `string` |

#### Returns

`any`

#### Defined in

[src/leafer/packages/interface/src/file/IResource.ts:19](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/file/IResource.ts#L19)

___

### remove

▸ **remove**(`key`): `void`

#### Parameters

| Name  | Type     |
| :---- | :------- |
| `key` | `string` |

#### Returns

`void`

#### Defined in

[src/leafer/packages/interface/src/file/IResource.ts:20](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/file/IResource.ts#L20)

___

### setImage

▸ **setImage**(`key`, `value`, `format?`): [`ILeaferImage`](ILeaferImage.md)

#### Parameters

| Name      | Type                                                                                                                  |
| :-------- | :-------------------------------------------------------------------------------------------------------------------- |
| `key`     | `string`                                                                                                              |
| `value`   | `string` \\| [`IObject`](IObject.md) \\| [`ILeaferCanvas`](ILeaferCanvas.md) \\| [`ILeaferImage`](ILeaferImage.md) |
| `format?` | [`IExportFileType`](../modules.md#iexportfiletype)                                                                    |

#### Returns

[`ILeaferImage`](ILeaferImage.md)

#### Defined in

[src/leafer/packages/interface/src/file/IResource.ts:22](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/file/IResource.ts#L22)

___

### loadImage

▸ **loadImage**(`key`, `format?`): `Promise`\<[`ILeaferImage`](ILeaferImage.md)\>

#### Parameters

| Name      | Type                                               |
| :-------- | :------------------------------------------------- |
| `key`     | `string`                                           |
| `format?` | [`IExportFileType`](../modules.md#iexportfiletype) |

#### Returns

`Promise`\<[`ILeaferImage`](ILeaferImage.md)\>

#### Defined in

[src/leafer/packages/interface/src/file/IResource.ts:23](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/file/IResource.ts#L23)

___

### loadFilm

▸ **loadFilm**(`key`, `format?`): `Promise`\<[`ILeaferFilm`](ILeaferFilm.md)\>

#### Parameters

| Name      | Type                                           |
| :-------- | :--------------------------------------------- |
| `key`     | `string`                                       |
| `format?` | [`IFilmFileType`](../modules.md#ifilmfiletype) |

#### Returns

`Promise`\<[`ILeaferFilm`](ILeaferFilm.md)\>

#### Defined in

[src/leafer/packages/interface/src/file/IResource.ts:25](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/file/IResource.ts#L25)

___

### loadVideo

▸ **loadVideo**(`key`, `format?`): `Promise`\<[`ILeaferVideo`](ILeaferVideo.md)\>

#### Parameters

| Name      | Type                                             |
| :-------- | :----------------------------------------------- |
| `key`     | `string`                                         |
| `format?` | [`IVideoFileType`](../modules.md#ivideofiletype) |

#### Returns

`Promise`\<[`ILeaferVideo`](ILeaferVideo.md)\>

#### Defined in

[src/leafer/packages/interface/src/file/IResource.ts:26](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/file/IResource.ts#L26)

___

### destroy

▸ **destroy**(): `void`

#### Returns

`void`

#### Defined in

[src/leafer/packages/interface/src/file/IResource.ts:28](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/file/IResource.ts#L28)
