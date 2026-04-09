# Interface: ICanvasManager

## Hierarchy

- **`ICanvasManager`**

  ↳ [`IHitCanvasManager`](IHitCanvasManager.md)

## Implemented by

- [`CanvasManager`](../classes/CanvasManager.md)

## Table of contents

### Methods

- [add](ICanvasManager.md#add)
- [get](ICanvasManager.md#get)
- [recycle](ICanvasManager.md#recycle)
- [clearRecycled](ICanvasManager.md#clearrecycled)
- [clear](ICanvasManager.md#clear)
- [destroy](ICanvasManager.md#destroy)

## Methods

### add

▸ **add**(`canvas`): `void`

#### Parameters

| Name     | Type                                |
| :------- | :---------------------------------- |
| `canvas` | [`ILeaferCanvas`](ILeaferCanvas.md) |

#### Returns

`void`

#### Defined in

[src/leafer/packages/interface/src/canvas/ICanvasManager.ts:4](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/canvas/ICanvasManager.ts#L4)

___

### get

▸ **get**(`size`): [`ILeaferCanvas`](ILeaferCanvas.md)

#### Parameters

| Name   | Type                                    |
| :----- | :-------------------------------------- |
| `size` | [`IScreenSizeData`](IScreenSizeData.md) |

#### Returns

[`ILeaferCanvas`](ILeaferCanvas.md)

#### Defined in

[src/leafer/packages/interface/src/canvas/ICanvasManager.ts:5](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/canvas/ICanvasManager.ts#L5)

___

### recycle

▸ **recycle**(`old`): `void`

#### Parameters

| Name  | Type                                |
| :---- | :---------------------------------- |
| `old` | [`ILeaferCanvas`](ILeaferCanvas.md) |

#### Returns

`void`

#### Defined in

[src/leafer/packages/interface/src/canvas/ICanvasManager.ts:6](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/canvas/ICanvasManager.ts#L6)

___

### clearRecycled

▸ **clearRecycled**(): `void`

#### Returns

`void`

#### Defined in

[src/leafer/packages/interface/src/canvas/ICanvasManager.ts:7](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/canvas/ICanvasManager.ts#L7)

___

### clear

▸ **clear**(): `void`

#### Returns

`void`

#### Defined in

[src/leafer/packages/interface/src/canvas/ICanvasManager.ts:8](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/canvas/ICanvasManager.ts#L8)

___

### destroy

▸ **destroy**(): `void`

#### Returns

`void`

#### Defined in

[src/leafer/packages/interface/src/canvas/ICanvasManager.ts:9](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/canvas/ICanvasManager.ts#L9)
