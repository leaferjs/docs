# Interface: IStateModule

## Table of contents

### Properties

- [canAnimate](IStateModule.md#cananimate)
- [animateExcludes](IStateModule.md#animateexcludes)

### Methods

- [isState](IStateModule.md#isstate)
- [isSelected](IStateModule.md#isselected)
- [isDisabled](IStateModule.md#isdisabled)
- [isFocus](IStateModule.md#isfocus)
- [isHover](IStateModule.md#ishover)
- [isPress](IStateModule.md#ispress)
- [isPlacehold](IStateModule.md#isplacehold)
- [isDrag](IStateModule.md#isdrag)
- [setStyleName](IStateModule.md#setstylename)
- [set](IStateModule.md#set)
- [getStyle](IStateModule.md#getstyle)
- [updateStyle](IStateModule.md#updatestyle)
- [updateEventStyle](IStateModule.md#updateeventstyle)

## Properties

### canAnimate

• **canAnimate**: `boolean`

#### Defined in

[src/ui/packages/interface/src/module/IState.ts:5](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/interface/src/module/IState.ts#L5)

___

### animateExcludes

• **animateExcludes**: [`IObject`](IObject.md)

#### Defined in

[src/ui/packages/interface/src/module/IState.ts:6](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/interface/src/module/IState.ts#L6)

## Methods

### isState

▸ **isState**(`state`, `leaf`, `button?`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `state` | `string` |
| `leaf` | [`ILeaf`](ILeaf.md) |
| `button?` | `boolean` \| [`ILeaf`](ILeaf.md) |

#### Returns

`boolean`

#### Defined in

[src/ui/packages/interface/src/module/IState.ts:8](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/interface/src/module/IState.ts#L8)

___

### isSelected

▸ **isSelected**(`leaf`, `button?`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `leaf` | [`ILeaf`](ILeaf.md) |
| `button?` | `boolean` \| [`ILeaf`](ILeaf.md) |

#### Returns

`boolean`

#### Defined in

[src/ui/packages/interface/src/module/IState.ts:9](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/interface/src/module/IState.ts#L9)

___

### isDisabled

▸ **isDisabled**(`leaf`, `button?`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `leaf` | [`ILeaf`](ILeaf.md) |
| `button?` | `boolean` \| [`ILeaf`](ILeaf.md) |

#### Returns

`boolean`

#### Defined in

[src/ui/packages/interface/src/module/IState.ts:10](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/interface/src/module/IState.ts#L10)

___

### isFocus

▸ **isFocus**(`leaf`, `button?`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `leaf` | [`ILeaf`](ILeaf.md) |
| `button?` | `boolean` \| [`ILeaf`](ILeaf.md) |

#### Returns

`boolean`

#### Defined in

[src/ui/packages/interface/src/module/IState.ts:12](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/interface/src/module/IState.ts#L12)

___

### isHover

▸ **isHover**(`leaf`, `button?`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `leaf` | [`ILeaf`](ILeaf.md) |
| `button?` | `boolean` \| [`ILeaf`](ILeaf.md) |

#### Returns

`boolean`

#### Defined in

[src/ui/packages/interface/src/module/IState.ts:13](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/interface/src/module/IState.ts#L13)

___

### isPress

▸ **isPress**(`leaf`, `button?`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `leaf` | [`ILeaf`](ILeaf.md) |
| `button?` | `boolean` \| [`ILeaf`](ILeaf.md) |

#### Returns

`boolean`

#### Defined in

[src/ui/packages/interface/src/module/IState.ts:14](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/interface/src/module/IState.ts#L14)

___

### isPlacehold

▸ **isPlacehold**(`leaf`, `button?`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `leaf` | [`ILeaf`](ILeaf.md) |
| `button?` | `boolean` \| [`ILeaf`](ILeaf.md) |

#### Returns

`boolean`

#### Defined in

[src/ui/packages/interface/src/module/IState.ts:15](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/interface/src/module/IState.ts#L15)

___

### isDrag

▸ **isDrag**(`leaf`, `button?`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `leaf` | [`ILeaf`](ILeaf.md) |
| `button?` | `boolean` \| [`ILeaf`](ILeaf.md) |

#### Returns

`boolean`

#### Defined in

[src/ui/packages/interface/src/module/IState.ts:17](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/interface/src/module/IState.ts#L17)

___

### setStyleName

▸ **setStyleName**(`leaf`, `styleName`, `value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `leaf` | [`ILeaf`](ILeaf.md) |
| `styleName` | `string` |
| `value` | `boolean` |

#### Returns

`void`

#### Defined in

[src/ui/packages/interface/src/module/IState.ts:19](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/interface/src/module/IState.ts#L19)

___

### set

▸ **set**(`leaf`, `stateName`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `leaf` | [`ILeaf`](ILeaf.md) |
| `stateName` | `string` |

#### Returns

`void`

#### Defined in

[src/ui/packages/interface/src/module/IState.ts:20](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/interface/src/module/IState.ts#L20)

___

### getStyle

▸ **getStyle**(`leaf`): [`IStateStyle`](IStateStyle.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `leaf` | [`ILeaf`](ILeaf.md) |

#### Returns

[`IStateStyle`](IStateStyle.md)

#### Defined in

[src/ui/packages/interface/src/module/IState.ts:22](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/interface/src/module/IState.ts#L22)

___

### updateStyle

▸ **updateStyle**(`leaf`, `style?`, `type?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `leaf` | [`ILeaf`](ILeaf.md) |
| `style?` | [`IStateStyle`](IStateStyle.md) |
| `type?` | ``"in"`` \| ``"out"`` |

#### Returns

`void`

#### Defined in

[src/ui/packages/interface/src/module/IState.ts:24](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/interface/src/module/IState.ts#L24)

___

### updateEventStyle

▸ **updateEventStyle**(`leaf`, `eventType`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `leaf` | [`ILeaf`](ILeaf.md) |
| `eventType` | `string` |

#### Returns

`void`

#### Defined in

[src/ui/packages/interface/src/module/IState.ts:25](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/interface/src/module/IState.ts#L25)
