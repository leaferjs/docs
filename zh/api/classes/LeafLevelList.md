# Class: LeafLevelList

## Implements

- [`ILeafLevelList`](../interfaces/ILeafLevelList.md)

## Table of contents

### Constructors

- [constructor](LeafLevelList.md#constructor)

### Properties

- [levelMap](LeafLevelList.md#levelmap)
- [keys](LeafLevelList.md#keys)
- [levels](LeafLevelList.md#levels)
- [\_length](LeafLevelList.md#_length)

### Accessors

- [length](LeafLevelList.md#length)

### Methods

- [has](LeafLevelList.md#has)
- [without](LeafLevelList.md#without)
- [sort](LeafLevelList.md#sort)
- [addList](LeafLevelList.md#addlist)
- [add](LeafLevelList.md#add)
- [forEach](LeafLevelList.md#foreach)
- [reset](LeafLevelList.md#reset)
- [destroy](LeafLevelList.md#destroy)

## Constructors

### constructor

• **new LeafLevelList**(`item?`): [`LeafLevelList`](LeafLevelList.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `item?` | [`ILeaf`](../interfaces/ILeaf.md) \| [`ILeaf`](../interfaces/ILeaf.md)[] |

#### Returns

[`LeafLevelList`](LeafLevelList.md)

#### Defined in

[src/leafer/packages/list/src/LeafLevelList.ts:13](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/list/src/LeafLevelList.ts#L13)

## Properties

### levelMap

• **levelMap**: [`ILeafArrayMap`](../interfaces/ILeafArrayMap.md)

#### Implementation of

[ILeafLevelList](../interfaces/ILeafLevelList.md).[levelMap](../interfaces/ILeafLevelList.md#levelmap)

#### Defined in

[src/leafer/packages/list/src/LeafLevelList.ts:6](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/list/src/LeafLevelList.ts#L6)

___

### keys

• **keys**: [`INumberMap`](../interfaces/INumberMap.md)

#### Implementation of

[ILeafLevelList](../interfaces/ILeafLevelList.md).[keys](../interfaces/ILeafLevelList.md#keys)

#### Defined in

[src/leafer/packages/list/src/LeafLevelList.ts:7](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/list/src/LeafLevelList.ts#L7)

___

### levels

• **levels**: `number`[]

#### Implementation of

[ILeafLevelList](../interfaces/ILeafLevelList.md).[levels](../interfaces/ILeafLevelList.md#levels)

#### Defined in

[src/leafer/packages/list/src/LeafLevelList.ts:8](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/list/src/LeafLevelList.ts#L8)

___

### \_length

• `Private` **\_length**: `number` = `0`

#### Defined in

[src/leafer/packages/list/src/LeafLevelList.ts:11](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/list/src/LeafLevelList.ts#L11)

## Accessors

### length

• `get` **length**(): `number`

#### Returns

`number`

#### Implementation of

[ILeafLevelList](../interfaces/ILeafLevelList.md).[length](../interfaces/ILeafLevelList.md#length)

#### Defined in

[src/leafer/packages/list/src/LeafLevelList.ts:10](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/list/src/LeafLevelList.ts#L10)

## Methods

### has

▸ **has**(`leaf`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `leaf` | [`ILeaf`](../interfaces/ILeaf.md) |

#### Returns

`boolean`

#### Implementation of

[ILeafLevelList](../interfaces/ILeafLevelList.md).[has](../interfaces/ILeafLevelList.md#has)

#### Defined in

[src/leafer/packages/list/src/LeafLevelList.ts:18](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/list/src/LeafLevelList.ts#L18)

___

### without

▸ **without**(`leaf`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `leaf` | [`ILeaf`](../interfaces/ILeaf.md) |

#### Returns

`boolean`

#### Implementation of

[ILeafLevelList](../interfaces/ILeafLevelList.md).[without](../interfaces/ILeafLevelList.md#without)

#### Defined in

[src/leafer/packages/list/src/LeafLevelList.ts:22](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/list/src/LeafLevelList.ts#L22)

___

### sort

▸ **sort**(`reverse?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `reverse?` | `boolean` |

#### Returns

`void`

#### Implementation of

[ILeafLevelList](../interfaces/ILeafLevelList.md).[sort](../interfaces/ILeafLevelList.md#sort)

#### Defined in

[src/leafer/packages/list/src/LeafLevelList.ts:26](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/list/src/LeafLevelList.ts#L26)

___

### addList

▸ **addList**(`list`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `list` | [`ILeaf`](../interfaces/ILeaf.md)[] |

#### Returns

`void`

#### Implementation of

[ILeafLevelList](../interfaces/ILeafLevelList.md).[addList](../interfaces/ILeafLevelList.md#addlist)

#### Defined in

[src/leafer/packages/list/src/LeafLevelList.ts:35](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/list/src/LeafLevelList.ts#L35)

___

### add

▸ **add**(`leaf`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `leaf` | [`ILeaf`](../interfaces/ILeaf.md) |

#### Returns

`void`

#### Implementation of

[ILeafLevelList](../interfaces/ILeafLevelList.md).[add](../interfaces/ILeafLevelList.md#add)

#### Defined in

[src/leafer/packages/list/src/LeafLevelList.ts:39](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/list/src/LeafLevelList.ts#L39)

___

### forEach

▸ **forEach**(`itemCallback`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `itemCallback` | [`ILeafListItemCallback`](../modules.md#ileaflistitemcallback) |

#### Returns

`void`

#### Implementation of

[ILeafLevelList](../interfaces/ILeafLevelList.md).[forEach](../interfaces/ILeafLevelList.md#foreach)

#### Defined in

[src/leafer/packages/list/src/LeafLevelList.ts:53](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/list/src/LeafLevelList.ts#L53)

___

### reset

▸ **reset**(): `void`

#### Returns

`void`

#### Implementation of

[ILeafLevelList](../interfaces/ILeafLevelList.md).[reset](../interfaces/ILeafLevelList.md#reset)

#### Defined in

[src/leafer/packages/list/src/LeafLevelList.ts:63](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/list/src/LeafLevelList.ts#L63)

___

### destroy

▸ **destroy**(): `void`

#### Returns

`void`

#### Implementation of

[ILeafLevelList](../interfaces/ILeafLevelList.md).[destroy](../interfaces/ILeafLevelList.md#destroy)

#### Defined in

[src/leafer/packages/list/src/LeafLevelList.ts:70](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/list/src/LeafLevelList.ts#L70)
