# Class: AutoBounds

## Implements

- [`IAutoBounds`](../interfaces/IAutoBounds.md)

## Table of contents

### Constructors

- [constructor](AutoBounds.md#constructor)

### Properties

- [top](AutoBounds.md#top)
- [right](AutoBounds.md#right)
- [bottom](AutoBounds.md#bottom)
- [left](AutoBounds.md#left)
- [width](AutoBounds.md#width)
- [height](AutoBounds.md#height)

### Methods

- [set](AutoBounds.md#set)
- [copy](AutoBounds.md#copy)
- [getBoundsFrom](AutoBounds.md#getboundsfrom)

## Constructors

### constructor

• **new AutoBounds**(`top?`, `right?`, `bottom?`, `left?`, `width?`, `height?`): [`AutoBounds`](AutoBounds.md)

#### Parameters

| Name      | Type                                                                |
| :-------- | :------------------------------------------------------------------ |
| `top?`    | `number` \\| [`IAutoBoundsData`](../interfaces/IAutoBoundsData.md) |
| `right?`  | `number`                                                            |
| `bottom?` | `number`                                                            |
| `left?`   | `number`                                                            |
| `width?`  | `number`                                                            |
| `height?` | `number`                                                            |

#### Returns

[`AutoBounds`](AutoBounds.md)

#### Defined in

[src/leafer/packages/math/src/AutoBounds.ts:17](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/math/src/AutoBounds.ts#L17)

## Properties

### top

• **top**: `number`

#### Implementation of

[IAutoBounds](../interfaces/IAutoBounds.md).[top](../interfaces/IAutoBounds.md#top)

#### Defined in

[src/leafer/packages/math/src/AutoBounds.ts:9](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/math/src/AutoBounds.ts#L9)

___

### right

• **right**: `number`

#### Implementation of

[IAutoBounds](../interfaces/IAutoBounds.md).[right](../interfaces/IAutoBounds.md#right)

#### Defined in

[src/leafer/packages/math/src/AutoBounds.ts:10](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/math/src/AutoBounds.ts#L10)

___

### bottom

• **bottom**: `number`

#### Implementation of

[IAutoBounds](../interfaces/IAutoBounds.md).[bottom](../interfaces/IAutoBounds.md#bottom)

#### Defined in

[src/leafer/packages/math/src/AutoBounds.ts:11](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/math/src/AutoBounds.ts#L11)

___

### left

• **left**: `number`

#### Implementation of

[IAutoBounds](../interfaces/IAutoBounds.md).[left](../interfaces/IAutoBounds.md#left)

#### Defined in

[src/leafer/packages/math/src/AutoBounds.ts:12](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/math/src/AutoBounds.ts#L12)

___

### width

• **width**: `number`

#### Implementation of

[IAutoBounds](../interfaces/IAutoBounds.md).[width](../interfaces/IAutoBounds.md#width)

#### Defined in

[src/leafer/packages/math/src/AutoBounds.ts:14](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/math/src/AutoBounds.ts#L14)

___

### height

• **height**: `number`

#### Implementation of

[IAutoBounds](../interfaces/IAutoBounds.md).[height](../interfaces/IAutoBounds.md#height)

#### Defined in

[src/leafer/packages/math/src/AutoBounds.ts:15](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/math/src/AutoBounds.ts#L15)

## Methods

### set

▸ **set**(`top?`, `right?`, `bottom?`, `left?`, `width?`, `height?`): `void`

#### Parameters

| Name     | Type     | Default value |
| :------- | :------- | :------------ |
| `top`    | `number` | `0`           |
| `right`  | `number` | `0`           |
| `bottom` | `number` | `0`           |
| `left`   | `number` | `0`           |
| `width`  | `number` | `0`           |
| `height` | `number` | `0`           |

#### Returns

`void`

#### Implementation of

[IAutoBounds](../interfaces/IAutoBounds.md).[set](../interfaces/IAutoBounds.md#set)

#### Defined in

[src/leafer/packages/math/src/AutoBounds.ts:21](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/math/src/AutoBounds.ts#L21)

___

### copy

▸ **copy**(`autoSize`): `void`

#### Parameters

| Name       | Type                                                  |
| :--------- | :---------------------------------------------------- |
| `autoSize` | [`IAutoBoundsData`](../interfaces/IAutoBoundsData.md) |

#### Returns

`void`

#### Implementation of

[IAutoBounds](../interfaces/IAutoBounds.md).[copy](../interfaces/IAutoBounds.md#copy)

#### Defined in

[src/leafer/packages/math/src/AutoBounds.ts:30](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/math/src/AutoBounds.ts#L30)

___

### getBoundsFrom

▸ **getBoundsFrom**(`parent`): [`IBounds`](../interfaces/IBounds.md)

#### Parameters

| Name     | Type                                      |
| :------- | :---------------------------------------- |
| `parent` | [`ISizeData`](../interfaces/ISizeData.md) |

#### Returns

[`IBounds`](../interfaces/IBounds.md)

#### Implementation of

[IAutoBounds](../interfaces/IAutoBounds.md).[getBoundsFrom](../interfaces/IAutoBounds.md#getboundsfrom)

#### Defined in

[src/leafer/packages/math/src/AutoBounds.ts:35](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/math/src/AutoBounds.ts#L35)
