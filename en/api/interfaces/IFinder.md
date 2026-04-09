# Interface: IFinder

## Implemented by

- [`Finder`](../classes/Finder.md)

## Table of contents

### Methods

- [getBy](IFinder.md#getby)
- [getByInnerId](IFinder.md#getbyinnerid)
- [getById](IFinder.md#getbyid)
- [getByClassName](IFinder.md#getbyclassname)
- [getByTag](IFinder.md#getbytag)
- [getByMethod](IFinder.md#getbymethod)
- [destroy](IFinder.md#destroy)

## Methods

### getBy

▸ **getBy**(`condition`, `branch?`, `one?`, `options?`): [`ILeaf`](ILeaf.md) \| [`ILeaf`](ILeaf.md)[]

#### Parameters

| Name        | Type                                                                                                   |
| :---------- | :----------------------------------------------------------------------------------------------------- |
| `condition` | `string` \\| `number` \\| [`IFindCondition`](IFindCondition.md) \\| [`IFindMethod`](IFindMethod.md) |
| `branch?`   | [`ILeaf`](ILeaf.md)                                                                                    |
| `one?`      | `boolean`                                                                                              |
| `options?`  | `any`                                                                                                  |

#### Returns

[`ILeaf`](ILeaf.md) \| [`ILeaf`](ILeaf.md)[]

#### Defined in

[src/leafer/packages/interface/src/selector/ISelector.ts:72](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/selector/ISelector.ts#L72)

___

### getByInnerId

▸ **getByInnerId**(`innerId`, `branch?`): [`ILeaf`](ILeaf.md)

#### Parameters

| Name      | Type                |
| :-------- | :------------------ |
| `innerId` | `number`            |
| `branch?` | [`ILeaf`](ILeaf.md) |

#### Returns

[`ILeaf`](ILeaf.md)

#### Defined in

[src/leafer/packages/interface/src/selector/ISelector.ts:73](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/selector/ISelector.ts#L73)

___

### getById

▸ **getById**(`id`, `branch?`): [`ILeaf`](ILeaf.md)

#### Parameters

| Name      | Type                |
| :-------- | :------------------ |
| `id`      | `string`            |
| `branch?` | [`ILeaf`](ILeaf.md) |

#### Returns

[`ILeaf`](ILeaf.md)

#### Defined in

[src/leafer/packages/interface/src/selector/ISelector.ts:74](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/selector/ISelector.ts#L74)

___

### getByClassName

▸ **getByClassName**(`className`, `branch?`): [`ILeaf`](ILeaf.md)[]

#### Parameters

| Name        | Type                |
| :---------- | :------------------ |
| `className` | `string`            |
| `branch?`   | [`ILeaf`](ILeaf.md) |

#### Returns

[`ILeaf`](ILeaf.md)[]

#### Defined in

[src/leafer/packages/interface/src/selector/ISelector.ts:75](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/selector/ISelector.ts#L75)

___

### getByTag

▸ **getByTag**(`tag`, `branch?`): [`ILeaf`](ILeaf.md)[]

#### Parameters

| Name      | Type                |
| :-------- | :------------------ |
| `tag`     | `string`            |
| `branch?` | [`ILeaf`](ILeaf.md) |

#### Returns

[`ILeaf`](ILeaf.md)[]

#### Defined in

[src/leafer/packages/interface/src/selector/ISelector.ts:76](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/selector/ISelector.ts#L76)

___

### getByMethod

▸ **getByMethod**(`method`, `branch?`, `one?`, `options?`): [`ILeaf`](ILeaf.md) \| [`ILeaf`](ILeaf.md)[]

#### Parameters

| Name       | Type                            |
| :--------- | :------------------------------ |
| `method`   | [`IFindMethod`](IFindMethod.md) |
| `branch?`  | [`ILeaf`](ILeaf.md)             |
| `one?`     | `boolean`                       |
| `options?` | `any`                           |

#### Returns

[`ILeaf`](ILeaf.md) \| [`ILeaf`](ILeaf.md)[]

#### Defined in

[src/leafer/packages/interface/src/selector/ISelector.ts:77](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/selector/ISelector.ts#L77)

___

### destroy

▸ **destroy**(): `void`

#### Returns

`void`

#### Defined in

[src/leafer/packages/interface/src/selector/ISelector.ts:78](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/selector/ISelector.ts#L78)
