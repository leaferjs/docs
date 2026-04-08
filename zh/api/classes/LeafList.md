# Class: LeafList

## Implements

- [`ILeafList`](../interfaces/ILeafList.md)

## Table of contents

### Constructors

- [constructor](LeafList.md#constructor)

### Properties

- [list](LeafList.md#list)
- [keys](LeafList.md#keys)

### Accessors

- [length](LeafList.md#length)

### Methods

- [has](LeafList.md#has)
- [indexAt](LeafList.md#indexat)
- [indexOf](LeafList.md#indexof)
- [add](LeafList.md#add)
- [addAt](LeafList.md#addat)
- [addList](LeafList.md#addlist)
- [remove](LeafList.md#remove)
- [sort](LeafList.md#sort)
- [forEach](LeafList.md#foreach)
- [clone](LeafList.md#clone)
- [update](LeafList.md#update)
- [reset](LeafList.md#reset)
- [destroy](LeafList.md#destroy)

## Constructors

### constructor

• **new LeafList**(`item?`): [`LeafList`](LeafList.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `item?` | [`ILeaf`](../interfaces/ILeaf.md) \| [`ILeaf`](../interfaces/ILeaf.md)[] |

#### Returns

[`LeafList`](LeafList.md)

#### Defined in

[src/leafer/packages/list/src/LeafList.ts:11](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/list/src/LeafList.ts#L11)

## Properties

### list

• **list**: [`ILeaf`](../interfaces/ILeaf.md)[]

#### Implementation of

[ILeafList](../interfaces/ILeafList.md).[list](../interfaces/ILeafList.md#list)

#### Defined in

[src/leafer/packages/list/src/LeafList.ts:6](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/list/src/LeafList.ts#L6)

___

### keys

• **keys**: [`INumberMap`](../interfaces/INumberMap.md)

#### Implementation of

[ILeafList](../interfaces/ILeafList.md).[keys](../interfaces/ILeafList.md#keys)

#### Defined in

[src/leafer/packages/list/src/LeafList.ts:7](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/list/src/LeafList.ts#L7)

## Accessors

### length

• `get` **length**(): `number`

#### Returns

`number`

#### Implementation of

[ILeafList](../interfaces/ILeafList.md).[length](../interfaces/ILeafList.md#length)

#### Defined in

[src/leafer/packages/list/src/LeafList.ts:9](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/list/src/LeafList.ts#L9)

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

[ILeafList](../interfaces/ILeafList.md).[has](../interfaces/ILeafList.md#has)

#### Defined in

[src/leafer/packages/list/src/LeafList.ts:16](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/list/src/LeafList.ts#L16)

___

### indexAt

▸ **indexAt**(`index`): [`ILeaf`](../interfaces/ILeaf.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `index` | `number` |

#### Returns

[`ILeaf`](../interfaces/ILeaf.md)

#### Implementation of

[ILeafList](../interfaces/ILeafList.md).[indexAt](../interfaces/ILeafList.md#indexat)

#### Defined in

[src/leafer/packages/list/src/LeafList.ts:20](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/list/src/LeafList.ts#L20)

___

### indexOf

▸ **indexOf**(`leaf`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `leaf` | [`ILeaf`](../interfaces/ILeaf.md) |

#### Returns

`number`

#### Implementation of

[ILeafList](../interfaces/ILeafList.md).[indexOf](../interfaces/ILeafList.md#indexof)

#### Defined in

[src/leafer/packages/list/src/LeafList.ts:24](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/list/src/LeafList.ts#L24)

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

[ILeafList](../interfaces/ILeafList.md).[add](../interfaces/ILeafList.md#add)

#### Defined in

[src/leafer/packages/list/src/LeafList.ts:30](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/list/src/LeafList.ts#L30)

___

### addAt

▸ **addAt**(`leaf`, `index?`): `void`

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `leaf` | [`ILeaf`](../interfaces/ILeaf.md) | `undefined` |
| `index` | `number` | `0` |

#### Returns

`void`

#### Implementation of

[ILeafList](../interfaces/ILeafList.md).[addAt](../interfaces/ILeafList.md#addat)

#### Defined in

[src/leafer/packages/list/src/LeafList.ts:38](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/list/src/LeafList.ts#L38)

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

[ILeafList](../interfaces/ILeafList.md).[addList](../interfaces/ILeafList.md#addlist)

#### Defined in

[src/leafer/packages/list/src/LeafList.ts:53](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/list/src/LeafList.ts#L53)

___

### remove

▸ **remove**(`leaf`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `leaf` | [`ILeaf`](../interfaces/ILeaf.md) |

#### Returns

`void`

#### Implementation of

[ILeafList](../interfaces/ILeafList.md).[remove](../interfaces/ILeafList.md#remove)

#### Defined in

[src/leafer/packages/list/src/LeafList.ts:58](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/list/src/LeafList.ts#L58)

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

[ILeafList](../interfaces/ILeafList.md).[sort](../interfaces/ILeafList.md#sort)

#### Defined in

[src/leafer/packages/list/src/LeafList.ts:74](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/list/src/LeafList.ts#L74)

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

[ILeafList](../interfaces/ILeafList.md).[forEach](../interfaces/ILeafList.md#foreach)

#### Defined in

[src/leafer/packages/list/src/LeafList.ts:83](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/list/src/LeafList.ts#L83)

___

### clone

▸ **clone**(): [`ILeafList`](../interfaces/ILeafList.md)

#### Returns

[`ILeafList`](../interfaces/ILeafList.md)

#### Implementation of

[ILeafList](../interfaces/ILeafList.md).[clone](../interfaces/ILeafList.md#clone)

#### Defined in

[src/leafer/packages/list/src/LeafList.ts:87](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/list/src/LeafList.ts#L87)

___

### update

▸ **update**(): `void`

#### Returns

`void`

#### Implementation of

[ILeafList](../interfaces/ILeafList.md).[update](../interfaces/ILeafList.md#update)

#### Defined in

[src/leafer/packages/list/src/LeafList.ts:95](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/list/src/LeafList.ts#L95)

___

### reset

▸ **reset**(): `void`

#### Returns

`void`

#### Implementation of

[ILeafList](../interfaces/ILeafList.md).[reset](../interfaces/ILeafList.md#reset)

#### Defined in

[src/leafer/packages/list/src/LeafList.ts:101](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/list/src/LeafList.ts#L101)

___

### destroy

▸ **destroy**(): `void`

#### Returns

`void`

#### Implementation of

[ILeafList](../interfaces/ILeafList.md).[destroy](../interfaces/ILeafList.md#destroy)

#### Defined in

[src/leafer/packages/list/src/LeafList.ts:106](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/list/src/LeafList.ts#L106)
