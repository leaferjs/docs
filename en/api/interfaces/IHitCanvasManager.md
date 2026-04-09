# Interface: IHitCanvasManager

## Hierarchy

- [`ICanvasManager`](ICanvasManager.md)

  ↳ **`IHitCanvasManager`**

## Implemented by

- [`HitCanvasManager`](../classes/HitCanvasManager.md)

## Table of contents

### Properties

- [maxTotal](IHitCanvasManager.md#maxtotal)

### Methods

- [add](IHitCanvasManager.md#add)
- [get](IHitCanvasManager.md#get)
- [recycle](IHitCanvasManager.md#recycle)
- [clearRecycled](IHitCanvasManager.md#clearrecycled)
- [clear](IHitCanvasManager.md#clear)
- [destroy](IHitCanvasManager.md#destroy)
- [getPathType](IHitCanvasManager.md#getpathtype)
- [getPixelType](IHitCanvasManager.md#getpixeltype)

## Properties

### maxTotal

• **maxTotal**: `number`

#### Defined in

[src/leafer/packages/interface/src/canvas/IHitCanvasManager.ts:6](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/canvas/IHitCanvasManager.ts#L6)

## Methods

### add

▸ **add**(`canvas`): `void`

#### Parameters

| Name     | Type                                |
| :------- | :---------------------------------- |
| `canvas` | [`ILeaferCanvas`](ILeaferCanvas.md) |

#### Returns

`void`

#### Inherited from

[ICanvasManager](ICanvasManager.md).[add](ICanvasManager.md#add)

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

#### Inherited from

[ICanvasManager](ICanvasManager.md).[get](ICanvasManager.md#get)

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

#### Inherited from

[ICanvasManager](ICanvasManager.md).[recycle](ICanvasManager.md#recycle)

#### Defined in

[src/leafer/packages/interface/src/canvas/ICanvasManager.ts:6](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/canvas/ICanvasManager.ts#L6)

___

### clearRecycled

▸ **clearRecycled**(): `void`

#### Returns

`void`

#### Inherited from

[ICanvasManager](ICanvasManager.md).[clearRecycled](ICanvasManager.md#clearrecycled)

#### Defined in

[src/leafer/packages/interface/src/canvas/ICanvasManager.ts:7](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/canvas/ICanvasManager.ts#L7)

___

### clear

▸ **clear**(): `void`

#### Returns

`void`

#### Inherited from

[ICanvasManager](ICanvasManager.md).[clear](ICanvasManager.md#clear)

#### Defined in

[src/leafer/packages/interface/src/canvas/ICanvasManager.ts:8](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/canvas/ICanvasManager.ts#L8)

___

### destroy

▸ **destroy**(): `void`

#### Returns

`void`

#### Inherited from

[ICanvasManager](ICanvasManager.md).[destroy](ICanvasManager.md#destroy)

#### Defined in

[src/leafer/packages/interface/src/canvas/ICanvasManager.ts:9](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/canvas/ICanvasManager.ts#L9)

___

### getPathType

▸ **getPathType**(`leaf`): [`IHitCanvas`](IHitCanvas.md)

#### Parameters

| Name   | Type                |
| :----- | :------------------ |
| `leaf` | [`ILeaf`](ILeaf.md) |

#### Returns

[`IHitCanvas`](IHitCanvas.md)

#### Defined in

[src/leafer/packages/interface/src/canvas/IHitCanvasManager.ts:7](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/canvas/IHitCanvasManager.ts#L7)

___

### getPixelType

▸ **getPixelType**(`leaf`, `config?`): [`IHitCanvas`](IHitCanvas.md)

#### Parameters

| Name      | Type                                            |
| :-------- | :---------------------------------------------- |
| `leaf`    | [`ILeaf`](ILeaf.md)                             |
| `config?` | [`ILeaferCanvasConfig`](ILeaferCanvasConfig.md) |

#### Returns

[`IHitCanvas`](IHitCanvas.md)

#### Defined in

[src/leafer/packages/interface/src/canvas/IHitCanvasManager.ts:8](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/canvas/IHitCanvasManager.ts#L8)
