# Class: Picker

## Implements

- [`IPicker`](../interfaces/IPicker.md)

## Table of contents

### Constructors

- [constructor](Picker.md#constructor)

### Properties

- [target](Picker.md#target)
- [selector](Picker.md#selector)
- [findList](Picker.md#findlist)
- [exclude](Picker.md#exclude)
- [point](Picker.md#point)

### Methods

- [getByPoint](Picker.md#getbypoint)
- [hitPoint](Picker.md#hitpoint)
- [getBestMatchLeaf](Picker.md#getbestmatchleaf)
- [getPath](Picker.md#getpath)
- [getHitablePath](Picker.md#gethitablepath)
- [getThroughPath](Picker.md#getthroughpath)
- [hitBranch](Picker.md#hitbranch)
- [eachFind](Picker.md#eachfind)
- [hitChild](Picker.md#hitchild)
- [clear](Picker.md#clear)
- [destroy](Picker.md#destroy)

## Constructors

### constructor

• **new Picker**(`target`, `selector`): [`Picker`](Picker.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `target` | [`ILeaf`](../interfaces/ILeaf.md) |
| `selector` | [`ISelector`](../interfaces/ISelector.md) |

#### Returns

[`Picker`](Picker.md)

#### Defined in

[src/leafer/packages/partner/selector/src/Picker.ts:20](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/partner/selector/src/Picker.ts#L20)

## Properties

### target

• `Protected` `Optional` **target**: [`ILeaf`](../interfaces/ILeaf.md)

#### Defined in

[src/leafer/packages/partner/selector/src/Picker.ts:12](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/partner/selector/src/Picker.ts#L12)

___

### selector

• `Protected` **selector**: [`ISelector`](../interfaces/ISelector.md)

#### Defined in

[src/leafer/packages/partner/selector/src/Picker.ts:13](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/partner/selector/src/Picker.ts#L13)

___

### findList

• `Protected` **findList**: [`ILeafList`](../interfaces/ILeafList.md)

#### Defined in

[src/leafer/packages/partner/selector/src/Picker.ts:15](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/partner/selector/src/Picker.ts#L15)

___

### exclude

• `Protected` **exclude**: [`ILeafList`](../interfaces/ILeafList.md)

#### Defined in

[src/leafer/packages/partner/selector/src/Picker.ts:16](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/partner/selector/src/Picker.ts#L16)

___

### point

• `Protected` **point**: [`IRadiusPointData`](../interfaces/IRadiusPointData.md)

#### Defined in

[src/leafer/packages/partner/selector/src/Picker.ts:18](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/partner/selector/src/Picker.ts#L18)

## Methods

### getByPoint

▸ **getByPoint**(`hitPoint`, `hitRadius`, `options?`): [`IPickResult`](../interfaces/IPickResult.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `hitPoint` | [`IPointData`](../interfaces/IPointData.md) |
| `hitRadius` | `number` |
| `options?` | [`IPickOptions`](../interfaces/IPickOptions.md) |

#### Returns

[`IPickResult`](../interfaces/IPickResult.md)

#### Implementation of

[IPicker](../interfaces/IPicker.md).[getByPoint](../interfaces/IPicker.md#getbypoint)

#### Defined in

[src/leafer/packages/partner/selector/src/Picker.ts:25](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/partner/selector/src/Picker.ts#L25)

___

### hitPoint

▸ **hitPoint**(`hitPoint`, `hitRadius`, `options?`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `hitPoint` | [`IPointData`](../interfaces/IPointData.md) |
| `hitRadius` | `number` |
| `options?` | [`IPickOptions`](../interfaces/IPickOptions.md) |

#### Returns

`boolean`

#### Implementation of

[IPicker](../interfaces/IPicker.md).[hitPoint](../interfaces/IPicker.md#hitpoint)

#### Defined in

[src/leafer/packages/partner/selector/src/Picker.ts:49](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/partner/selector/src/Picker.ts#L49)

___

### getBestMatchLeaf

▸ **getBestMatchLeaf**(`list`, `bottomList`, `ignoreHittable`, `allowNull?`): [`ILeaf`](../interfaces/ILeaf.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `list` | [`ILeaf`](../interfaces/ILeaf.md)[] |
| `bottomList` | [`IPickBottom`](../interfaces/IPickBottom.md)[] |
| `ignoreHittable` | `boolean` |
| `allowNull?` | `boolean` |

#### Returns

[`ILeaf`](../interfaces/ILeaf.md)

#### Defined in

[src/leafer/packages/partner/selector/src/Picker.ts:53](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/partner/selector/src/Picker.ts#L53)

___

### getPath

▸ **getPath**(`leaf`): [`LeafList`](LeafList.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `leaf` | [`ILeaf`](../interfaces/ILeaf.md) |

#### Returns

[`LeafList`](LeafList.md)

#### Defined in

[src/leafer/packages/partner/selector/src/Picker.ts:86](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/partner/selector/src/Picker.ts#L86)

___

### getHitablePath

▸ **getHitablePath**(`leaf`): [`LeafList`](LeafList.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `leaf` | [`ILeaf`](../interfaces/ILeaf.md) |

#### Returns

[`LeafList`](LeafList.md)

#### Defined in

[src/leafer/packages/partner/selector/src/Picker.ts:111](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/partner/selector/src/Picker.ts#L111)

___

### getThroughPath

▸ **getThroughPath**(`list`): [`LeafList`](LeafList.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `list` | [`ILeaf`](../interfaces/ILeaf.md)[] |

#### Returns

[`LeafList`](LeafList.md)

#### Defined in

[src/leafer/packages/partner/selector/src/Picker.ts:123](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/partner/selector/src/Picker.ts#L123)

___

### hitBranch

▸ **hitBranch**(`branch`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `branch` | [`ILeaf`](../interfaces/ILeaf.md) |

#### Returns

`void`

#### Defined in

[src/leafer/packages/partner/selector/src/Picker.ts:144](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/partner/selector/src/Picker.ts#L144)

___

### eachFind

▸ **eachFind**(`children`, `hitMask`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `children` | [`ILeaf`](../interfaces/ILeaf.md)[] |
| `hitMask` | `boolean` |

#### Returns

`void`

#### Defined in

[src/leafer/packages/partner/selector/src/Picker.ts:148](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/partner/selector/src/Picker.ts#L148)

___

### hitChild

▸ **hitChild**(`child`, `point`, `proxy?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `child` | [`ILeaf`](../interfaces/ILeaf.md) |
| `point` | [`IRadiusPointData`](../interfaces/IRadiusPointData.md) |
| `proxy?` | [`ILeaf`](../interfaces/ILeaf.md) |

#### Returns

`void`

#### Defined in

[src/leafer/packages/partner/selector/src/Picker.ts:169](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/partner/selector/src/Picker.ts#L169)

___

### clear

▸ **clear**(): `void`

#### Returns

`void`

#### Defined in

[src/leafer/packages/partner/selector/src/Picker.ts:192](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/partner/selector/src/Picker.ts#L192)

___

### destroy

▸ **destroy**(): `void`

#### Returns

`void`

#### Implementation of

[IPicker](../interfaces/IPicker.md).[destroy](../interfaces/IPicker.md#destroy)

#### Defined in

[src/leafer/packages/partner/selector/src/Picker.ts:198](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/partner/selector/src/Picker.ts#L198)
