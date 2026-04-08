# Interface: ISkiaNAPICanvas

## Table of contents

### Methods

- [encodeSync](ISkiaNAPICanvas.md#encodesync)
- [encode](ISkiaNAPICanvas.md#encode)
- [toBuffer](ISkiaNAPICanvas.md#tobuffer)
- [toDataURL](ISkiaNAPICanvas.md#todataurl)
- [toDataURLAsync](ISkiaNAPICanvas.md#todataurlasync)

## Methods

### encodeSync

▸ **encodeSync**(`format`, `quality?`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `format` | ``"webp"`` \| ``"jpeg"`` |
| `quality?` | `number` |

#### Returns

`any`

#### Defined in

[src/leafer/packages/interface/src/canvas/ISkiaCanvas.ts:30](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/canvas/ISkiaCanvas.ts#L30)

▸ **encodeSync**(`format`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `format` | ``"png"`` |

#### Returns

`any`

#### Defined in

[src/leafer/packages/interface/src/canvas/ISkiaCanvas.ts:31](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/canvas/ISkiaCanvas.ts#L31)

___

### encode

▸ **encode**(`format`, `quality?`): `Promise`\<`any`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `format` | `string` |
| `quality?` | `number` |

#### Returns

`Promise`\<`any`\>

#### Defined in

[src/leafer/packages/interface/src/canvas/ISkiaCanvas.ts:33](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/canvas/ISkiaCanvas.ts#L33)

▸ **encode**(`format`): `Promise`\<`any`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `format` | ``"png"`` |

#### Returns

`Promise`\<`any`\>

#### Defined in

[src/leafer/packages/interface/src/canvas/ISkiaCanvas.ts:34](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/canvas/ISkiaCanvas.ts#L34)

___

### toBuffer

▸ **toBuffer**(`mime`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `mime` | ``"image/png"`` |

#### Returns

`any`

#### Defined in

[src/leafer/packages/interface/src/canvas/ISkiaCanvas.ts:36](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/canvas/ISkiaCanvas.ts#L36)

▸ **toBuffer**(`mime`, `quality?`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `mime` | `string` |
| `quality?` | `number` |

#### Returns

`any`

#### Defined in

[src/leafer/packages/interface/src/canvas/ISkiaCanvas.ts:37](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/canvas/ISkiaCanvas.ts#L37)

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

[src/leafer/packages/interface/src/canvas/ISkiaCanvas.ts:39](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/canvas/ISkiaCanvas.ts#L39)

▸ **toDataURL**(`mime`, `quality?`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `mime` | `string` |
| `quality?` | `number` |

#### Returns

`string`

#### Defined in

[src/leafer/packages/interface/src/canvas/ISkiaCanvas.ts:40](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/canvas/ISkiaCanvas.ts#L40)

___

### toDataURLAsync

▸ **toDataURLAsync**(`mime?`): `Promise`\<`string`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `mime?` | ``"image/png"`` |

#### Returns

`Promise`\<`string`\>

#### Defined in

[src/leafer/packages/interface/src/canvas/ISkiaCanvas.ts:42](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/canvas/ISkiaCanvas.ts#L42)

▸ **toDataURLAsync**(`mime`, `quality?`): `Promise`\<`string`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `mime` | `string` |
| `quality?` | `number` |

#### Returns

`Promise`\<`string`\>

#### Defined in

[src/leafer/packages/interface/src/canvas/ISkiaCanvas.ts:43](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/canvas/ISkiaCanvas.ts#L43)
