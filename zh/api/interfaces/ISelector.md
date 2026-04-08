# Interface: ISelector

## Implemented by

- [`Selector`](../classes/Selector.md)

## Table of contents

### Properties

- [target](ISelector.md#target)
- [proxy](ISelector.md#proxy)
- [config](ISelector.md#config)
- [picker](ISelector.md#picker)
- [finder](ISelector.md#finder)

### Methods

- [getByPoint](ISelector.md#getbypoint)
- [hitPoint](ISelector.md#hitpoint)
- [getBy](ISelector.md#getby)
- [destroy](ISelector.md#destroy)

## Properties

### target

• `Optional` **target**: [`ILeaf`](ILeaf.md)

#### Defined in

[src/leafer/packages/interface/src/selector/ISelector.ts:50](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/selector/ISelector.ts#L50)

___

### proxy

• `Optional` **proxy**: [`ISelectorProxy`](ISelectorProxy.md)

#### Defined in

[src/leafer/packages/interface/src/selector/ISelector.ts:51](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/selector/ISelector.ts#L51)

___

### config

• **config**: [`ISelectorConfig`](ISelectorConfig.md)

#### Defined in

[src/leafer/packages/interface/src/selector/ISelector.ts:53](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/selector/ISelector.ts#L53)

___

### picker

• **picker**: [`IPicker`](IPicker.md)

#### Defined in

[src/leafer/packages/interface/src/selector/ISelector.ts:55](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/selector/ISelector.ts#L55)

___

### finder

• `Optional` **finder**: [`IFinder`](IFinder.md)

#### Defined in

[src/leafer/packages/interface/src/selector/ISelector.ts:56](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/selector/ISelector.ts#L56)

## Methods

### getByPoint

▸ **getByPoint**(`hitPoint`, `hitRadius`, `options?`): [`IPickResult`](IPickResult.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `hitPoint` | [`IPointData`](IPointData.md) |
| `hitRadius` | `number` |
| `options?` | [`IPickOptions`](IPickOptions.md) |

#### Returns

[`IPickResult`](IPickResult.md)

#### Defined in

[src/leafer/packages/interface/src/selector/ISelector.ts:58](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/selector/ISelector.ts#L58)

___

### hitPoint

▸ **hitPoint**(`hitPoint`, `hitRadius`, `options?`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `hitPoint` | [`IPointData`](IPointData.md) |
| `hitRadius` | `number` |
| `options?` | [`IPickOptions`](IPickOptions.md) |

#### Returns

`boolean`

#### Defined in

[src/leafer/packages/interface/src/selector/ISelector.ts:59](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/selector/ISelector.ts#L59)

___

### getBy

▸ **getBy**(`condition`, `branch?`, `one?`, `options?`): [`ILeaf`](ILeaf.md) \| [`ILeaf`](ILeaf.md)[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `condition` | `string` \| `number` \| [`IFindCondition`](IFindCondition.md) \| [`IFindMethod`](IFindMethod.md) |
| `branch?` | [`ILeaf`](ILeaf.md) |
| `one?` | `boolean` |
| `options?` | `any` |

#### Returns

[`ILeaf`](ILeaf.md) \| [`ILeaf`](ILeaf.md)[]

#### Defined in

[src/leafer/packages/interface/src/selector/ISelector.ts:60](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/selector/ISelector.ts#L60)

___

### destroy

▸ **destroy**(): `void`

#### Returns

`void`

#### Defined in

[src/leafer/packages/interface/src/selector/ISelector.ts:61](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/selector/ISelector.ts#L61)
