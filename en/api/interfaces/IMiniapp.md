# Interface: IMiniapp

## Table of contents

### Methods

- [select](IMiniapp.md#select)
- [getBounds](IMiniapp.md#getbounds)
- [getSizeView](IMiniapp.md#getsizeview)
- [onWindowResize](IMiniapp.md#onwindowresize)
- [offWindowResize](IMiniapp.md#offwindowresize)
- [saveToAlbum](IMiniapp.md#savetoalbum)

## Methods

### select

▸ **select**(`name`): [`IMiniappSelect`](IMiniappSelect.md)

#### Parameters

| Name   | Type     |
| :----- | :------- |
| `name` | `string` |

#### Returns

[`IMiniappSelect`](IMiniappSelect.md)

#### Defined in

[src/leafer/packages/interface/src/platform/IPlatform.ts:101](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/platform/IPlatform.ts#L101)

___

### getBounds

▸ **getBounds**(`select`): `Promise`\<[`IBoundsData`](IBoundsData.md)\>

#### Parameters

| Name     | Type                                  |
| :------- | :------------------------------------ |
| `select` | [`IMiniappSelect`](IMiniappSelect.md) |

#### Returns

`Promise`\<[`IBoundsData`](IBoundsData.md)\>

#### Defined in

[src/leafer/packages/interface/src/platform/IPlatform.ts:102](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/platform/IPlatform.ts#L102)

___

### getSizeView

▸ **getSizeView**(`select`): `Promise`\<[`IMiniappSizeView`](IMiniappSizeView.md)\>

#### Parameters

| Name     | Type                                  |
| :------- | :------------------------------------ |
| `select` | [`IMiniappSelect`](IMiniappSelect.md) |

#### Returns

`Promise`\<[`IMiniappSizeView`](IMiniappSizeView.md)\>

#### Defined in

[src/leafer/packages/interface/src/platform/IPlatform.ts:103](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/platform/IPlatform.ts#L103)

___

### onWindowResize

▸ **onWindowResize**(`fun`): `void`

#### Parameters

| Name  | Type                        |
| :---- | :-------------------------- |
| `fun` | [`IFunction`](IFunction.md) |

#### Returns

`void`

#### Defined in

[src/leafer/packages/interface/src/platform/IPlatform.ts:104](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/platform/IPlatform.ts#L104)

___

### offWindowResize

▸ **offWindowResize**(`fun`): `void`

#### Parameters

| Name  | Type                        |
| :---- | :-------------------------- |
| `fun` | [`IFunction`](IFunction.md) |

#### Returns

`void`

#### Defined in

[src/leafer/packages/interface/src/platform/IPlatform.ts:105](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/platform/IPlatform.ts#L105)

___

### saveToAlbum

▸ **saveToAlbum**(`path`): `Promise`\<`any`\>

#### Parameters

| Name   | Type     |
| :----- | :------- |
| `path` | `string` |

#### Returns

`Promise`\<`any`\>

#### Defined in

[src/leafer/packages/interface/src/platform/IPlatform.ts:106](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/platform/IPlatform.ts#L106)
