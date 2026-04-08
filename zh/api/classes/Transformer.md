# Class: Transformer

## Table of contents

### Constructors

- [constructor](Transformer.md#constructor)

### Properties

- [moveData](Transformer.md#movedata)
- [zoomData](Transformer.md#zoomdata)
- [rotateData](Transformer.md#rotatedata)
- [interaction](Transformer.md#interaction)
- [transformTimer](Transformer.md#transformtimer)

### Accessors

- [transforming](Transformer.md#transforming)
- [moving](Transformer.md#moving)
- [zooming](Transformer.md#zooming)
- [rotating](Transformer.md#rotating)

### Methods

- [move](Transformer.md#move)
- [zoom](Transformer.md#zoom)
- [rotate](Transformer.md#rotate)
- [setPath](Transformer.md#setpath)
- [transformEndWait](Transformer.md#transformendwait)
- [transformEnd](Transformer.md#transformend)
- [reset](Transformer.md#reset)
- [destroy](Transformer.md#destroy)

## Constructors

### constructor

• **new Transformer**(`interaction`): [`Transformer`](Transformer.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `interaction` | [`InteractionBase`](InteractionBase.md) |

#### Returns

[`Transformer`](Transformer.md)

#### Defined in

[src/in/packages/viewport/src/interaction/Transformer.ts:22](https://github.com/leaferjs/leafer-in/blob/d97f6888a45310d40717e43f47796d4f7d0dce1d/packages/viewport/src/interaction/Transformer.ts#L22)

## Properties

### moveData

• **moveData**: [`IMoveEvent`](../interfaces/IMoveEvent.md)

#### Defined in

[src/in/packages/viewport/src/interaction/Transformer.ts:15](https://github.com/leaferjs/leafer-in/blob/d97f6888a45310d40717e43f47796d4f7d0dce1d/packages/viewport/src/interaction/Transformer.ts#L15)

___

### zoomData

• **zoomData**: [`IZoomEvent`](../interfaces/IZoomEvent.md)

#### Defined in

[src/in/packages/viewport/src/interaction/Transformer.ts:16](https://github.com/leaferjs/leafer-in/blob/d97f6888a45310d40717e43f47796d4f7d0dce1d/packages/viewport/src/interaction/Transformer.ts#L16)

___

### rotateData

• **rotateData**: [`IRotateEvent`](../interfaces/IRotateEvent.md)

#### Defined in

[src/in/packages/viewport/src/interaction/Transformer.ts:17](https://github.com/leaferjs/leafer-in/blob/d97f6888a45310d40717e43f47796d4f7d0dce1d/packages/viewport/src/interaction/Transformer.ts#L17)

___

### interaction

• `Protected` **interaction**: [`InteractionBase`](InteractionBase.md)

#### Defined in

[src/in/packages/viewport/src/interaction/Transformer.ts:19](https://github.com/leaferjs/leafer-in/blob/d97f6888a45310d40717e43f47796d4f7d0dce1d/packages/viewport/src/interaction/Transformer.ts#L19)

___

### transformTimer

• `Protected` **transformTimer**: `any`

#### Defined in

[src/in/packages/viewport/src/interaction/Transformer.ts:20](https://github.com/leaferjs/leafer-in/blob/d97f6888a45310d40717e43f47796d4f7d0dce1d/packages/viewport/src/interaction/Transformer.ts#L20)

## Accessors

### transforming

• `get` **transforming**(): `boolean`

#### Returns

`boolean`

#### Defined in

[src/in/packages/viewport/src/interaction/Transformer.ts:10](https://github.com/leaferjs/leafer-in/blob/d97f6888a45310d40717e43f47796d4f7d0dce1d/packages/viewport/src/interaction/Transformer.ts#L10)

___

### moving

• `get` **moving**(): `boolean`

#### Returns

`boolean`

#### Defined in

[src/in/packages/viewport/src/interaction/Transformer.ts:11](https://github.com/leaferjs/leafer-in/blob/d97f6888a45310d40717e43f47796d4f7d0dce1d/packages/viewport/src/interaction/Transformer.ts#L11)

___

### zooming

• `get` **zooming**(): `boolean`

#### Returns

`boolean`

#### Defined in

[src/in/packages/viewport/src/interaction/Transformer.ts:12](https://github.com/leaferjs/leafer-in/blob/d97f6888a45310d40717e43f47796d4f7d0dce1d/packages/viewport/src/interaction/Transformer.ts#L12)

___

### rotating

• `get` **rotating**(): `boolean`

#### Returns

`boolean`

#### Defined in

[src/in/packages/viewport/src/interaction/Transformer.ts:13](https://github.com/leaferjs/leafer-in/blob/d97f6888a45310d40717e43f47796d4f7d0dce1d/packages/viewport/src/interaction/Transformer.ts#L13)

## Methods

### move

▸ **move**(`data`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | [`IMoveEvent`](../interfaces/IMoveEvent.md) |

#### Returns

`void`

#### Defined in

[src/in/packages/viewport/src/interaction/Transformer.ts:26](https://github.com/leaferjs/leafer-in/blob/d97f6888a45310d40717e43f47796d4f7d0dce1d/packages/viewport/src/interaction/Transformer.ts#L26)

___

### zoom

▸ **zoom**(`data`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | [`IZoomEvent`](../interfaces/IZoomEvent.md) |

#### Returns

`void`

#### Defined in

[src/in/packages/viewport/src/interaction/Transformer.ts:46](https://github.com/leaferjs/leafer-in/blob/d97f6888a45310d40717e43f47796d4f7d0dce1d/packages/viewport/src/interaction/Transformer.ts#L46)

___

### rotate

▸ **rotate**(`data`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | [`IRotateEvent`](../interfaces/IRotateEvent.md) |

#### Returns

`void`

#### Defined in

[src/in/packages/viewport/src/interaction/Transformer.ts:64](https://github.com/leaferjs/leafer-in/blob/d97f6888a45310d40717e43f47796d4f7d0dce1d/packages/viewport/src/interaction/Transformer.ts#L64)

___

### setPath

▸ **setPath**(`data`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

`void`

#### Defined in

[src/in/packages/viewport/src/interaction/Transformer.ts:82](https://github.com/leaferjs/leafer-in/blob/d97f6888a45310d40717e43f47796d4f7d0dce1d/packages/viewport/src/interaction/Transformer.ts#L82)

___

### transformEndWait

▸ **transformEndWait**(): `void`

#### Returns

`void`

#### Defined in

[src/in/packages/viewport/src/interaction/Transformer.ts:89](https://github.com/leaferjs/leafer-in/blob/d97f6888a45310d40717e43f47796d4f7d0dce1d/packages/viewport/src/interaction/Transformer.ts#L89)

___

### transformEnd

▸ **transformEnd**(): `void`

#### Returns

`void`

#### Defined in

[src/in/packages/viewport/src/interaction/Transformer.ts:96](https://github.com/leaferjs/leafer-in/blob/d97f6888a45310d40717e43f47796d4f7d0dce1d/packages/viewport/src/interaction/Transformer.ts#L96)

___

### reset

▸ **reset**(): `void`

#### Returns

`void`

#### Defined in

[src/in/packages/viewport/src/interaction/Transformer.ts:104](https://github.com/leaferjs/leafer-in/blob/d97f6888a45310d40717e43f47796d4f7d0dce1d/packages/viewport/src/interaction/Transformer.ts#L104)

___

### destroy

▸ **destroy**(): `void`

#### Returns

`void`

#### Defined in

[src/in/packages/viewport/src/interaction/Transformer.ts:108](https://github.com/leaferjs/leafer-in/blob/d97f6888a45310d40717e43f47796d4f7d0dce1d/packages/viewport/src/interaction/Transformer.ts#L108)
