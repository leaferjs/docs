# Interface: ILeafList

## Implemented by

- [`LeafList`](../classes/LeafList.md)

## Table of contents

### Properties

- [list](ILeafList.md#list)
- [keys](ILeafList.md#keys)
- [length](ILeafList.md#length)
- [needUpdate](ILeafList.md#needupdate)

### Methods

- [has](ILeafList.md#has)
- [indexAt](ILeafList.md#indexat)
- [indexOf](ILeafList.md#indexof)
- [add](ILeafList.md#add)
- [addAt](ILeafList.md#addat)
- [addList](ILeafList.md#addlist)
- [remove](ILeafList.md#remove)
- [forEach](ILeafList.md#foreach)
- [sort](ILeafList.md#sort)
- [clone](ILeafList.md#clone)
- [update](ILeafList.md#update)
- [reset](ILeafList.md#reset)
- [destroy](ILeafList.md#destroy)

## Properties

### list

• **list**: [`ILeaf`](ILeaf.md)[]

#### Defined in

[src/leafer/packages/interface/src/data/IList.ts:15](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/data/IList.ts#L15)

___

### keys

• **keys**: [`INumberMap`](INumberMap.md)

#### Defined in

[src/leafer/packages/interface/src/data/IList.ts:16](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/data/IList.ts#L16)

___

### length

• `Readonly` **length**: `number`

#### Defined in

[src/leafer/packages/interface/src/data/IList.ts:17](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/data/IList.ts#L17)

___

### needUpdate

• `Optional` **needUpdate**: `boolean`

#### Defined in

[src/leafer/packages/interface/src/data/IList.ts:19](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/data/IList.ts#L19)

## Methods

### has

▸ **has**(`leaf`): `boolean`

#### Parameters

| Name   | Type                |
| :----- | :------------------ |
| `leaf` | [`ILeaf`](ILeaf.md) |

#### Returns

`boolean`

#### Defined in

[src/leafer/packages/interface/src/data/IList.ts:21](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/data/IList.ts#L21)

___

### indexAt

▸ **indexAt**(`index`): [`ILeaf`](ILeaf.md)

#### Parameters

| Name    | Type     |
| :------ | :------- |
| `index` | `number` |

#### Returns

[`ILeaf`](ILeaf.md)

#### Defined in

[src/leafer/packages/interface/src/data/IList.ts:22](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/data/IList.ts#L22)

___

### indexOf

▸ **indexOf**(`leaf`): `number`

#### Parameters

| Name   | Type                |
| :----- | :------------------ |
| `leaf` | [`ILeaf`](ILeaf.md) |

#### Returns

`number`

#### Defined in

[src/leafer/packages/interface/src/data/IList.ts:23](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/data/IList.ts#L23)

___

### add

▸ **add**(`leaf`): `void`

#### Parameters

| Name   | Type                |
| :----- | :------------------ |
| `leaf` | [`ILeaf`](ILeaf.md) |

#### Returns

`void`

#### Defined in

[src/leafer/packages/interface/src/data/IList.ts:25](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/data/IList.ts#L25)

___

### addAt

▸ **addAt**(`leaf`, `index`): `void`

#### Parameters

| Name    | Type                |
| :------ | :------------------ |
| `leaf`  | [`ILeaf`](ILeaf.md) |
| `index` | `number`            |

#### Returns

`void`

#### Defined in

[src/leafer/packages/interface/src/data/IList.ts:26](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/data/IList.ts#L26)

___

### addList

▸ **addList**(`list`): `void`

#### Parameters

| Name   | Type                                                                      |
| :----- | :------------------------------------------------------------------------ |
| `list` | [`ILeaf`](ILeaf.md)[] |

#### Returns

`void`

#### Defined in

[src/leafer/packages/interface/src/data/IList.ts:27](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/data/IList.ts#L27)

___

### remove

▸ **remove**(`leaf`): `void`

#### Parameters

| Name   | Type                |
| :----- | :------------------ |
| `leaf` | [`ILeaf`](ILeaf.md) |

#### Returns

`void`

#### Defined in

[src/leafer/packages/interface/src/data/IList.ts:28](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/data/IList.ts#L28)

___

### forEach

▸ **forEach**(`itemCallback`): `void`

#### Parameters

| Name           | Type                                                           |
| :------------- | :------------------------------------------------------------- |
| `itemCallback` | [`ILeafListItemCallback`](../modules.md#ileaflistitemcallback) |

#### Returns

`void`

#### Defined in

[src/leafer/packages/interface/src/data/IList.ts:30](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/data/IList.ts#L30)

___

### sort

▸ **sort**(`reverse?`): `void`

#### Parameters

| Name       | Type      |
| :--------- | :-------- |
| `reverse?` | `boolean` |

#### Returns

`void`

#### Defined in

[src/leafer/packages/interface/src/data/IList.ts:31](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/data/IList.ts#L31)

___

### clone

▸ **clone**(): [`ILeafList`](ILeafList.md)

#### Returns

[`ILeafList`](ILeafList.md)

#### Defined in

[src/leafer/packages/interface/src/data/IList.ts:32](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/data/IList.ts#L32)

___

### update

▸ **update**(): `void`

#### Returns

`void`

#### Defined in

[src/leafer/packages/interface/src/data/IList.ts:33](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/data/IList.ts#L33)

___

### reset

▸ **reset**(): `void`

#### Returns

`void`

#### Defined in

[src/leafer/packages/interface/src/data/IList.ts:34](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/data/IList.ts#L34)

___

### destroy

▸ **destroy**(): `void`

#### Returns

`void`

#### Defined in

[src/leafer/packages/interface/src/data/IList.ts:35](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/data/IList.ts#L35)
