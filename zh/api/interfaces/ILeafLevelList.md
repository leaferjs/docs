# Interface: ILeafLevelList

## Implemented by

- [`LeafLevelList`](../classes/LeafLevelList.md)

## Table of contents

### Properties

- [levelMap](ILeafLevelList.md#levelmap)
- [keys](ILeafLevelList.md#keys)
- [levels](ILeafLevelList.md#levels)
- [length](ILeafLevelList.md#length)

### Methods

- [has](ILeafLevelList.md#has)
- [without](ILeafLevelList.md#without)
- [sort](ILeafLevelList.md#sort)
- [addList](ILeafLevelList.md#addlist)
- [add](ILeafLevelList.md#add)
- [forEach](ILeafLevelList.md#foreach)
- [reset](ILeafLevelList.md#reset)
- [destroy](ILeafLevelList.md#destroy)

## Properties

### levelMap

• **levelMap**: [`ILeafArrayMap`](ILeafArrayMap.md)

#### Defined in

[src/leafer/packages/interface/src/data/IList.ts:39](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/data/IList.ts#L39)

___

### keys

• **keys**: [`INumberMap`](INumberMap.md)

#### Defined in

[src/leafer/packages/interface/src/data/IList.ts:40](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/data/IList.ts#L40)

___

### levels

• **levels**: `number`[]

#### Defined in

[src/leafer/packages/interface/src/data/IList.ts:41](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/data/IList.ts#L41)

___

### length

• `Readonly` **length**: `number`

#### Defined in

[src/leafer/packages/interface/src/data/IList.ts:42](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/data/IList.ts#L42)

## Methods

### has

▸ **has**(`leaf`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `leaf` | [`ILeaf`](ILeaf.md) |

#### Returns

`boolean`

#### Defined in

[src/leafer/packages/interface/src/data/IList.ts:43](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/data/IList.ts#L43)

___

### without

▸ **without**(`leaf`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `leaf` | [`ILeaf`](ILeaf.md) |

#### Returns

`boolean`

#### Defined in

[src/leafer/packages/interface/src/data/IList.ts:44](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/data/IList.ts#L44)

___

### sort

▸ **sort**(`reverse?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `reverse?` | `boolean` |

#### Returns

`void`

#### Defined in

[src/leafer/packages/interface/src/data/IList.ts:45](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/data/IList.ts#L45)

___

### addList

▸ **addList**(`list`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `list` | [`ILeaf`](ILeaf.md)[] |

#### Returns

`void`

#### Defined in

[src/leafer/packages/interface/src/data/IList.ts:46](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/data/IList.ts#L46)

___

### add

▸ **add**(`leaf`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `leaf` | [`ILeaf`](ILeaf.md) |

#### Returns

`void`

#### Defined in

[src/leafer/packages/interface/src/data/IList.ts:47](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/data/IList.ts#L47)

___

### forEach

▸ **forEach**(`itemCallback`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `itemCallback` | [`ILeafListItemCallback`](../modules.md#ileaflistitemcallback) |

#### Returns

`void`

#### Defined in

[src/leafer/packages/interface/src/data/IList.ts:48](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/data/IList.ts#L48)

___

### reset

▸ **reset**(): `void`

#### Returns

`void`

#### Defined in

[src/leafer/packages/interface/src/data/IList.ts:49](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/data/IList.ts#L49)

___

### destroy

▸ **destroy**(): `void`

#### Returns

`void`

#### Defined in

[src/leafer/packages/interface/src/data/IList.ts:50](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/data/IList.ts#L50)
