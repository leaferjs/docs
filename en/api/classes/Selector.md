# Class: Selector

## Implements

- [`ISelector`](../interfaces/ISelector.md)

## Table of contents

### Constructors

- [constructor](Selector.md#constructor)

### Properties

- [target](Selector.md#target)
- [proxy](Selector.md#proxy)
- [config](Selector.md#config)
- [picker](Selector.md#picker)
- [finder](Selector.md#finder)

### Methods

- [getByPoint](Selector.md#getbypoint)
- [hitPoint](Selector.md#hitpoint)
- [getBy](Selector.md#getby)
- [destroy](Selector.md#destroy)

## Constructors

### constructor

• **new Selector**(`target`, `userConfig?`): [`Selector`](Selector.md)

#### Parameters

| Name          | Type                                                  |
| :------------ | :---------------------------------------------------- |
| `target`      | [`ILeaf`](../interfaces/ILeaf.md)                     |
| `userConfig?` | [`ISelectorConfig`](../interfaces/ISelectorConfig.md) |

#### Returns

[`Selector`](Selector.md)

#### Defined in

[src/leafer/packages/partner/selector/src/Selector.ts:17](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/partner/selector/src/Selector.ts#L17)

## Properties

### target

• `Optional` **target**: [`ILeaf`](../interfaces/ILeaf.md)

#### Implementation of

[ISelector](../interfaces/ISelector.md).[target](../interfaces/ISelector.md#target)

#### Defined in

[src/leafer/packages/partner/selector/src/Selector.ts:9](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/partner/selector/src/Selector.ts#L9)

___

### proxy

• `Optional` **proxy**: [`ISelectorProxy`](../interfaces/ISelectorProxy.md)

#### Implementation of

[ISelector](../interfaces/ISelector.md).[proxy](../interfaces/ISelector.md#proxy)

#### Defined in

[src/leafer/packages/partner/selector/src/Selector.ts:10](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/partner/selector/src/Selector.ts#L10)

___

### config

• **config**: [`ISelectorConfig`](../interfaces/ISelectorConfig.md) = `{}`

#### Implementation of

[ISelector](../interfaces/ISelector.md).[config](../interfaces/ISelector.md#config)

#### Defined in

[src/leafer/packages/partner/selector/src/Selector.ts:12](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/partner/selector/src/Selector.ts#L12)

___

### picker

• **picker**: [`IPicker`](../interfaces/IPicker.md)

#### Implementation of

[ISelector](../interfaces/ISelector.md).[picker](../interfaces/ISelector.md#picker)

#### Defined in

[src/leafer/packages/partner/selector/src/Selector.ts:14](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/partner/selector/src/Selector.ts#L14)

___

### finder

• `Optional` **finder**: [`IFinder`](../interfaces/IFinder.md)

#### Implementation of

[ISelector](../interfaces/ISelector.md).[finder](../interfaces/ISelector.md#finder)

#### Defined in

[src/leafer/packages/partner/selector/src/Selector.ts:15](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/partner/selector/src/Selector.ts#L15)

## Methods

### getByPoint

▸ **getByPoint**(`hitPoint`, `hitRadius`, `options?`): [`IPickResult`](../interfaces/IPickResult.md)

#### Parameters

| Name        | Type                                            |
| :---------- | :---------------------------------------------- |
| `hitPoint`  | [`IPointData`](../interfaces/IPointData.md)     |
| `hitRadius` | `number`                                        |
| `options?`  | [`IPickOptions`](../interfaces/IPickOptions.md) |

#### Returns

[`IPickResult`](../interfaces/IPickResult.md)

#### Implementation of

[ISelector](../interfaces/ISelector.md).[getByPoint](../interfaces/ISelector.md#getbypoint)

#### Defined in

[src/leafer/packages/partner/selector/src/Selector.ts:23](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/partner/selector/src/Selector.ts#L23)

___

### hitPoint

▸ **hitPoint**(`hitPoint`, `hitRadius`, `options?`): `boolean`

#### Parameters

| Name        | Type                                            |
| :---------- | :---------------------------------------------- |
| `hitPoint`  | [`IPointData`](../interfaces/IPointData.md)     |
| `hitRadius` | `number`                                        |
| `options?`  | [`IPickOptions`](../interfaces/IPickOptions.md) |

#### Returns

`boolean`

#### Implementation of

[ISelector](../interfaces/ISelector.md).[hitPoint](../interfaces/ISelector.md#hitpoint)

#### Defined in

[src/leafer/packages/partner/selector/src/Selector.ts:29](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/partner/selector/src/Selector.ts#L29)

___

### getBy

▸ **getBy**(`condition`, `branch?`, `one?`, `options?`): [`ILeaf`](../interfaces/ILeaf.md) \| [`ILeaf`](../interfaces/ILeaf.md)[]

#### Parameters

| Name        | Type                                                                                                                               |
| :---------- | :--------------------------------------------------------------------------------------------------------------------------------- |
| `condition` | `string` \\| `number` \\| [`IFindCondition`](../interfaces/IFindCondition.md) \\| [`IFindMethod`](../interfaces/IFindMethod.md) |
| `branch?`   | [`ILeaf`](../interfaces/ILeaf.md)                                                                                                  |
| `one?`      | `boolean`                                                                                                                          |
| `options?`  | `any`                                                                                                                              |

#### Returns

[`ILeaf`](../interfaces/ILeaf.md) \| [`ILeaf`](../interfaces/ILeaf.md)[]

#### Implementation of

[ISelector](../interfaces/ISelector.md).[getBy](../interfaces/ISelector.md#getby)

#### Defined in

[src/leafer/packages/partner/selector/src/Selector.ts:34](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/partner/selector/src/Selector.ts#L34)

___

### destroy

▸ **destroy**(): `void`

#### Returns

`void`

#### Implementation of

[ISelector](../interfaces/ISelector.md).[destroy](../interfaces/ISelector.md#destroy)

#### Defined in

[src/leafer/packages/partner/selector/src/Selector.ts:38](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/partner/selector/src/Selector.ts#L38)
