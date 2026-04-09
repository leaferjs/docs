# Class: Debug

## Table of contents

### Constructors

- [constructor](Debug.md#constructor)

### Properties

- [enable](Debug.md#enable)
- [filterList](Debug.md#filterlist)
- [excludeList](Debug.md#excludelist)
- [showWarn](Debug.md#showwarn)
- [showRepaint](Debug.md#showrepaint)
- [showBounds](Debug.md#showbounds)
- [name](Debug.md#name)
- [repeatMap](Debug.md#repeatmap)

### Accessors

- [filter](Debug.md#filter)
- [exclude](Debug.md#exclude)

### Methods

- [get](Debug.md#get)
- [drawRepaint](Debug.md#drawrepaint)
- [drawBounds](Debug.md#drawbounds)
- [log](Debug.md#log)
- [tip](Debug.md#tip)
- [warn](Debug.md#warn)
- [repeat](Debug.md#repeat)
- [error](Debug.md#error)

## Constructors

### constructor

• **new Debug**(`name`): [`Debug`](Debug.md)

#### Parameters

| Name   | Type     |
| :----- | :------- |
| `name` | `string` |

#### Returns

[`Debug`](Debug.md)

#### Defined in

[src/leafer/packages/debug/src/Debug.ts:23](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/debug/src/Debug.ts#L23)

## Properties

### enable

▪ `Static` **enable**: `boolean`

#### Defined in

[src/leafer/packages/debug/src/Debug.ts:9](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/debug/src/Debug.ts#L9)

___

### filterList

▪ `Static` **filterList**: `string`[] = `[]`

#### Defined in

[src/leafer/packages/debug/src/Debug.ts:11](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/debug/src/Debug.ts#L11)

___

### excludeList

▪ `Static` **excludeList**: `string`[] = `[]`

#### Defined in

[src/leafer/packages/debug/src/Debug.ts:12](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/debug/src/Debug.ts#L12)

___

### showWarn

▪ `Static` **showWarn**: `boolean` = `true`

#### Defined in

[src/leafer/packages/debug/src/Debug.ts:15](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/debug/src/Debug.ts#L15)

___

### showRepaint

▪ `Static` **showRepaint**: `string` \| `boolean`

#### Defined in

[src/leafer/packages/debug/src/Debug.ts:16](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/debug/src/Debug.ts#L16)

___

### showBounds

▪ `Static` **showBounds**: `string` \| `boolean`

#### Defined in

[src/leafer/packages/debug/src/Debug.ts:17](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/debug/src/Debug.ts#L17)

___

### name

• **name**: `string`

#### Defined in

[src/leafer/packages/debug/src/Debug.ts:19](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/debug/src/Debug.ts#L19)

___

### repeatMap

• **repeatMap**: [`IBooleanMap`](../interfaces/IBooleanMap.md) = `{}`

#### Defined in

[src/leafer/packages/debug/src/Debug.ts:21](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/debug/src/Debug.ts#L21)

## Accessors

### filter

• `set` **filter**(`name`): `void`

#### Parameters

| Name   | Type                                                                         |
| :----- | :--------------------------------------------------------------------------- |
| `name` | `string` \\| `string`[] |

#### Returns

`void`

#### Defined in

[src/leafer/packages/debug/src/Debug.ts:31](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/debug/src/Debug.ts#L31)

___

### exclude

• `set` **exclude**(`name`): `void`

#### Parameters

| Name   | Type                                                                         |
| :----- | :--------------------------------------------------------------------------- |
| `name` | `string` \\| `string`[] |

#### Returns

`void`

#### Defined in

[src/leafer/packages/debug/src/Debug.ts:35](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/debug/src/Debug.ts#L35)

## Methods

### get

▸ **get**(`name`): [`Debug`](Debug.md)

#### Parameters

| Name   | Type     |
| :----- | :------- |
| `name` | `string` |

#### Returns

[`Debug`](Debug.md)

#### Defined in

[src/leafer/packages/debug/src/Debug.ts:27](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/debug/src/Debug.ts#L27)

___

### drawRepaint

▸ **drawRepaint**(`canvas`, `bounds`): `void`

#### Parameters

| Name     | Type                                              |
| :------- | :------------------------------------------------ |
| `canvas` | [`ILeaferCanvas`](../interfaces/ILeaferCanvas.md) |
| `bounds` | [`IBoundsData`](../interfaces/IBoundsData.md)     |

#### Returns

`void`

#### Defined in

[src/leafer/packages/debug/src/Debug.ts:39](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/debug/src/Debug.ts#L39)

___

### drawBounds

▸ **drawBounds**(`leaf`, `canvas`, `_options`): `void`

#### Parameters

| Name       | Type                                                |
| :--------- | :-------------------------------------------------- |
| `leaf`     | [`ILeaf`](../interfaces/ILeaf.md)                   |
| `canvas`   | [`ILeaferCanvas`](../interfaces/ILeaferCanvas.md)   |
| `_options` | [`IRenderOptions`](../interfaces/IRenderOptions.md) |

#### Returns

`void`

#### Defined in

[src/leafer/packages/debug/src/Debug.ts:45](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/debug/src/Debug.ts#L45)

___

### log

▸ **log**(`...messages`): `void`

#### Parameters

| Name          | Type                                                            |
| :------------ | :-------------------------------------------------------------- |
| `...messages` | `unknown`[] |

#### Returns

`void`

#### Defined in

[src/leafer/packages/debug/src/Debug.ts:55](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/debug/src/Debug.ts#L55)

___

### tip

▸ **tip**(`...messages`): `void`

#### Parameters

| Name          | Type                                                            |
| :------------ | :-------------------------------------------------------------- |
| `...messages` | `unknown`[] |

#### Returns

`void`

#### Defined in

[src/leafer/packages/debug/src/Debug.ts:63](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/debug/src/Debug.ts#L63)

___

### warn

▸ **warn**(`...messages`): `void`

#### Parameters

| Name          | Type                                                            |
| :------------ | :-------------------------------------------------------------- |
| `...messages` | `unknown`[] |

#### Returns

`void`

#### Defined in

[src/leafer/packages/debug/src/Debug.ts:67](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/debug/src/Debug.ts#L67)

___

### repeat

▸ **repeat**(`name`, `...messages`): `void`

#### Parameters

| Name          | Type                                                            |
| :------------ | :-------------------------------------------------------------- |
| `name`        | `string`                                                        |
| `...messages` | `unknown`[] |

#### Returns

`void`

#### Defined in

[src/leafer/packages/debug/src/Debug.ts:71](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/debug/src/Debug.ts#L71)

___

### error

▸ **error**(`...messages`): `void`

#### Parameters

| Name          | Type                                                            |
| :------------ | :-------------------------------------------------------------- |
| `...messages` | `unknown`[] |

#### Returns

`void`

#### Defined in

[src/leafer/packages/debug/src/Debug.ts:78](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/debug/src/Debug.ts#L78)
