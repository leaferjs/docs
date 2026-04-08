# Interface: IExportModule

## Table of contents

### Properties

- [running](IExportModule.md#running)

### Methods

- [export](IExportModule.md#export)
- [syncExport](IExportModule.md#syncexport)

## Properties

### running

• `Optional` **running**: `boolean`

#### Defined in

[src/ui/packages/interface/src/module/IExport.ts:5](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/interface/src/module/IExport.ts#L5)

## Methods

### export

▸ **export**(`leaf`, `filename`, `options?`): `Promise`\<[`IExportResult`](IExportResult.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `leaf` | [`ILeaf`](ILeaf.md) |
| `filename` | `string` |
| `options?` | `number` \| `boolean` \| [`IExportOptions`](IExportOptions.md) |

#### Returns

`Promise`\<[`IExportResult`](IExportResult.md)\>

#### Defined in

[src/ui/packages/interface/src/module/IExport.ts:6](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/interface/src/module/IExport.ts#L6)

___

### syncExport

▸ **syncExport**(`leaf`, `filename`, `options?`): [`IExportResult`](IExportResult.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `leaf` | [`ILeaf`](ILeaf.md) |
| `filename` | `string` |
| `options?` | `number` \| `boolean` \| [`IExportOptions`](IExportOptions.md) |

#### Returns

[`IExportResult`](IExportResult.md)

#### Defined in

[src/ui/packages/interface/src/module/IExport.ts:7](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/interface/src/module/IExport.ts#L7)
