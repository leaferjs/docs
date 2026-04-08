# Class: CanvasManager

## Hierarchy

- **`CanvasManager`**

  ↳ [`HitCanvasManager`](HitCanvasManager.md)

## Implements

- [`ICanvasManager`](../interfaces/ICanvasManager.md)

## Table of contents

### Constructors

- [constructor](CanvasManager.md#constructor)

### Properties

- [list](CanvasManager.md#list)

### Methods

- [add](CanvasManager.md#add)
- [get](CanvasManager.md#get)
- [recycle](CanvasManager.md#recycle)
- [clearRecycled](CanvasManager.md#clearrecycled)
- [clear](CanvasManager.md#clear)
- [destroy](CanvasManager.md#destroy)

## Constructors

### constructor

• **new CanvasManager**(): [`CanvasManager`](CanvasManager.md)

#### Returns

[`CanvasManager`](CanvasManager.md)

## Properties

### list

• **list**: [`ILeaferCanvas`](../interfaces/ILeaferCanvas.md)[] = `[]`

#### Defined in

[src/leafer/packages/canvas/canvas/src/CanvasManager.ts:6](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/canvas/canvas/src/CanvasManager.ts#L6)

## Methods

### add

▸ **add**(`canvas`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `canvas` | [`ILeaferCanvas`](../interfaces/ILeaferCanvas.md) |

#### Returns

`void`

#### Implementation of

[ICanvasManager](../interfaces/ICanvasManager.md).[add](../interfaces/ICanvasManager.md#add)

#### Defined in

[src/leafer/packages/canvas/canvas/src/CanvasManager.ts:8](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/canvas/canvas/src/CanvasManager.ts#L8)

___

### get

▸ **get**(`size`): [`ILeaferCanvas`](../interfaces/ILeaferCanvas.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `size` | [`IScreenSizeData`](../interfaces/IScreenSizeData.md) |

#### Returns

[`ILeaferCanvas`](../interfaces/ILeaferCanvas.md)

#### Implementation of

[ICanvasManager](../interfaces/ICanvasManager.md).[get](../interfaces/ICanvasManager.md#get)

#### Defined in

[src/leafer/packages/canvas/canvas/src/CanvasManager.ts:13](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/canvas/canvas/src/CanvasManager.ts#L13)

___

### recycle

▸ **recycle**(`old`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `old` | [`ILeaferCanvas`](../interfaces/ILeaferCanvas.md) |

#### Returns

`void`

#### Implementation of

[ICanvasManager](../interfaces/ICanvasManager.md).[recycle](../interfaces/ICanvasManager.md#recycle)

#### Defined in

[src/leafer/packages/canvas/canvas/src/CanvasManager.ts:30](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/canvas/canvas/src/CanvasManager.ts#L30)

___

### clearRecycled

▸ **clearRecycled**(): `void`

#### Returns

`void`

#### Implementation of

[ICanvasManager](../interfaces/ICanvasManager.md).[clearRecycled](../interfaces/ICanvasManager.md#clearrecycled)

#### Defined in

[src/leafer/packages/canvas/canvas/src/CanvasManager.ts:34](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/canvas/canvas/src/CanvasManager.ts#L34)

___

### clear

▸ **clear**(): `void`

#### Returns

`void`

#### Implementation of

[ICanvasManager](../interfaces/ICanvasManager.md).[clear](../interfaces/ICanvasManager.md#clear)

#### Defined in

[src/leafer/packages/canvas/canvas/src/CanvasManager.ts:44](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/canvas/canvas/src/CanvasManager.ts#L44)

___

### destroy

▸ **destroy**(): `void`

#### Returns

`void`

#### Implementation of

[ICanvasManager](../interfaces/ICanvasManager.md).[destroy](../interfaces/ICanvasManager.md#destroy)

#### Defined in

[src/leafer/packages/canvas/canvas/src/CanvasManager.ts:49](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/canvas/canvas/src/CanvasManager.ts#L49)
