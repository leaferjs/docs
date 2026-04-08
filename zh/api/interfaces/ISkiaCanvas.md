# Interface: ISkiaCanvas

## Table of contents

### Methods

- [toBuffer](ISkiaCanvas.md#tobuffer)
- [toBufferSync](ISkiaCanvas.md#tobuffersync)
- [toDataURL](ISkiaCanvas.md#todataurl)
- [toDataURLSync](ISkiaCanvas.md#todataurlsync)
- [toURLSync](ISkiaCanvas.md#tourlsync)
- [saveAs](ISkiaCanvas.md#saveas)
- [saveAsSync](ISkiaCanvas.md#saveassync)

## Methods

### toBuffer

▸ **toBuffer**(`format`, `config`): `Promise`\<`any`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `format` | [`IExportFileType`](../modules.md#iexportfiletype) |
| `config` | [`ISkiaCanvasExportConfig`](ISkiaCanvasExportConfig.md) |

#### Returns

`Promise`\<`any`\>

#### Defined in

[src/leafer/packages/interface/src/canvas/ISkiaCanvas.ts:7](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/canvas/ISkiaCanvas.ts#L7)

___

### toBufferSync

▸ **toBufferSync**(`format`, `config`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `format` | [`IExportFileType`](../modules.md#iexportfiletype) |
| `config` | [`ISkiaCanvasExportConfig`](ISkiaCanvasExportConfig.md) |

#### Returns

`any`

#### Defined in

[src/leafer/packages/interface/src/canvas/ISkiaCanvas.ts:8](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/canvas/ISkiaCanvas.ts#L8)

___

### toDataURL

▸ **toDataURL**(`mime?`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `mime?` | ``"image/png"`` |

#### Returns

`string`

#### Defined in

[src/leafer/packages/interface/src/canvas/ISkiaCanvas.ts:10](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/canvas/ISkiaCanvas.ts#L10)

▸ **toDataURL**(`mime`, `quality?`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `mime` | `string` |
| `quality?` | `number` |

#### Returns

`string`

#### Defined in

[src/leafer/packages/interface/src/canvas/ISkiaCanvas.ts:11](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/canvas/ISkiaCanvas.ts#L11)

___

### toDataURLSync

▸ **toDataURLSync**(`format`, `config`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `format` | [`IExportImageType`](../modules.md#iexportimagetype) |
| `config` | [`ISkiaCanvasExportConfig`](ISkiaCanvasExportConfig.md) |

#### Returns

`string`

#### Defined in

[src/leafer/packages/interface/src/canvas/ISkiaCanvas.ts:13](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/canvas/ISkiaCanvas.ts#L13)

___

### toURLSync

▸ **toURLSync**(`format`, `config`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `format` | [`IExportImageType`](../modules.md#iexportimagetype) |
| `config` | [`ISkiaCanvasExportConfig`](ISkiaCanvasExportConfig.md) |

#### Returns

`string`

#### Defined in

[src/leafer/packages/interface/src/canvas/ISkiaCanvas.ts:14](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/canvas/ISkiaCanvas.ts#L14)

___

### saveAs

▸ **saveAs**(`filename`, `config`): `Promise`\<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `filename` | `string` |
| `config` | [`ISkiaCanvasExportConfig`](ISkiaCanvasExportConfig.md) |

#### Returns

`Promise`\<`void`\>

#### Defined in

[src/leafer/packages/interface/src/canvas/ISkiaCanvas.ts:16](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/canvas/ISkiaCanvas.ts#L16)

___

### saveAsSync

▸ **saveAsSync**(`filename`, `config`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `filename` | `string` |
| `config` | [`ISkiaCanvasExportConfig`](ISkiaCanvasExportConfig.md) |

#### Returns

`void`

#### Defined in

[src/leafer/packages/interface/src/canvas/ISkiaCanvas.ts:17](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/canvas/ISkiaCanvas.ts#L17)
