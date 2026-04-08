# Interface: ITransformer

## Table of contents

### Properties

- [transforming](ITransformer.md#transforming)
- [moving](ITransformer.md#moving)
- [zooming](ITransformer.md#zooming)
- [rotating](ITransformer.md#rotating)

### Methods

- [move](ITransformer.md#move)
- [zoom](ITransformer.md#zoom)
- [rotate](ITransformer.md#rotate)
- [transformEnd](ITransformer.md#transformend)
- [destroy](ITransformer.md#destroy)

## Properties

### transforming

• `Readonly` **transforming**: `boolean`

#### Defined in

[src/leafer/packages/interface/src/interaction/ITransformer.ts:4](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/interaction/ITransformer.ts#L4)

___

### moving

• `Readonly` **moving**: `boolean`

#### Defined in

[src/leafer/packages/interface/src/interaction/ITransformer.ts:5](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/interaction/ITransformer.ts#L5)

___

### zooming

• `Readonly` **zooming**: `boolean`

#### Defined in

[src/leafer/packages/interface/src/interaction/ITransformer.ts:6](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/interaction/ITransformer.ts#L6)

___

### rotating

• `Readonly` **rotating**: `boolean`

#### Defined in

[src/leafer/packages/interface/src/interaction/ITransformer.ts:7](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/interaction/ITransformer.ts#L7)

## Methods

### move

▸ **move**(`data`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | [`IMoveEvent`](IMoveEvent.md) |

#### Returns

`void`

#### Defined in

[src/leafer/packages/interface/src/interaction/ITransformer.ts:8](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/interaction/ITransformer.ts#L8)

___

### zoom

▸ **zoom**(`data`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | [`IZoomEvent`](IZoomEvent.md) |

#### Returns

`void`

#### Defined in

[src/leafer/packages/interface/src/interaction/ITransformer.ts:9](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/interaction/ITransformer.ts#L9)

___

### rotate

▸ **rotate**(`data`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | [`IRotateEvent`](IRotateEvent.md) |

#### Returns

`void`

#### Defined in

[src/leafer/packages/interface/src/interaction/ITransformer.ts:10](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/interaction/ITransformer.ts#L10)

___

### transformEnd

▸ **transformEnd**(): `void`

#### Returns

`void`

#### Defined in

[src/leafer/packages/interface/src/interaction/ITransformer.ts:11](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/interaction/ITransformer.ts#L11)

___

### destroy

▸ **destroy**(): `void`

#### Returns

`void`

#### Defined in

[src/leafer/packages/interface/src/interaction/ITransformer.ts:12](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/interaction/ITransformer.ts#L12)
