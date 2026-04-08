# Class: HitCanvasManager

## Hierarchy

- [`CanvasManager`](CanvasManager.md)

  ↳ **`HitCanvasManager`**

## Implements

- [`IHitCanvasManager`](../interfaces/IHitCanvasManager.md)

## Table of contents

### Constructors

- [constructor](HitCanvasManager.md#constructor)

### Properties

- [list](HitCanvasManager.md#list)
- [maxTotal](HitCanvasManager.md#maxtotal)
- [pathList](HitCanvasManager.md#pathlist)
- [pixelList](HitCanvasManager.md#pixellist)

### Methods

- [add](HitCanvasManager.md#add)
- [get](HitCanvasManager.md#get)
- [recycle](HitCanvasManager.md#recycle)
- [clearRecycled](HitCanvasManager.md#clearrecycled)
- [destroy](HitCanvasManager.md#destroy)
- [getPixelType](HitCanvasManager.md#getpixeltype)
- [getPathType](HitCanvasManager.md#getpathtype)
- [clearImageType](HitCanvasManager.md#clearimagetype)
- [clearPathType](HitCanvasManager.md#clearpathtype)
- [\_\_clearLeafList](HitCanvasManager.md#__clearleaflist)
- [\_\_autoClear](HitCanvasManager.md#__autoclear)
- [clear](HitCanvasManager.md#clear)

## Constructors

### constructor

• **new HitCanvasManager**(): [`HitCanvasManager`](HitCanvasManager.md)

#### Returns

[`HitCanvasManager`](HitCanvasManager.md)

#### Inherited from

[CanvasManager](CanvasManager.md).[constructor](CanvasManager.md#constructor)

## Properties

### list

• **list**: [`ILeaferCanvas`](../interfaces/ILeaferCanvas.md)[] = `[]`

#### Inherited from

[CanvasManager](CanvasManager.md).[list](CanvasManager.md#list)

#### Defined in

[src/leafer/packages/canvas/canvas/src/CanvasManager.ts:6](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/canvas/canvas/src/CanvasManager.ts#L6)

___

### maxTotal

• **maxTotal**: `number` = `1000`

#### Implementation of

[IHitCanvasManager](../interfaces/IHitCanvasManager.md).[maxTotal](../interfaces/IHitCanvasManager.md#maxtotal)

#### Defined in

[src/ui/packages/hit/src/HitCanvasManager.ts:7](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/hit/src/HitCanvasManager.ts#L7)

___

### pathList

• `Protected` **pathList**: [`ILeafList`](../interfaces/ILeafList.md)

#### Defined in

[src/ui/packages/hit/src/HitCanvasManager.ts:9](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/hit/src/HitCanvasManager.ts#L9)

___

### pixelList

• `Protected` **pixelList**: [`ILeafList`](../interfaces/ILeafList.md)

#### Defined in

[src/ui/packages/hit/src/HitCanvasManager.ts:10](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/hit/src/HitCanvasManager.ts#L10)

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

[IHitCanvasManager](../interfaces/IHitCanvasManager.md).[add](../interfaces/IHitCanvasManager.md#add)

#### Inherited from

[CanvasManager](CanvasManager.md).[add](CanvasManager.md#add)

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

[IHitCanvasManager](../interfaces/IHitCanvasManager.md).[get](../interfaces/IHitCanvasManager.md#get)

#### Inherited from

[CanvasManager](CanvasManager.md).[get](CanvasManager.md#get)

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

[IHitCanvasManager](../interfaces/IHitCanvasManager.md).[recycle](../interfaces/IHitCanvasManager.md#recycle)

#### Inherited from

[CanvasManager](CanvasManager.md).[recycle](CanvasManager.md#recycle)

#### Defined in

[src/leafer/packages/canvas/canvas/src/CanvasManager.ts:30](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/canvas/canvas/src/CanvasManager.ts#L30)

___

### clearRecycled

▸ **clearRecycled**(): `void`

#### Returns

`void`

#### Implementation of

[IHitCanvasManager](../interfaces/IHitCanvasManager.md).[clearRecycled](../interfaces/IHitCanvasManager.md#clearrecycled)

#### Inherited from

[CanvasManager](CanvasManager.md).[clearRecycled](CanvasManager.md#clearrecycled)

#### Defined in

[src/leafer/packages/canvas/canvas/src/CanvasManager.ts:34](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/canvas/canvas/src/CanvasManager.ts#L34)

___

### destroy

▸ **destroy**(): `void`

#### Returns

`void`

#### Implementation of

[IHitCanvasManager](../interfaces/IHitCanvasManager.md).[destroy](../interfaces/IHitCanvasManager.md#destroy)

#### Inherited from

[CanvasManager](CanvasManager.md).[destroy](CanvasManager.md#destroy)

#### Defined in

[src/leafer/packages/canvas/canvas/src/CanvasManager.ts:49](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/canvas/canvas/src/CanvasManager.ts#L49)

___

### getPixelType

▸ **getPixelType**(`leaf`, `config?`): [`IHitCanvas`](../interfaces/IHitCanvas.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `leaf` | [`ILeaf`](../interfaces/ILeaf.md) |
| `config?` | [`ILeaferCanvasConfig`](../interfaces/ILeaferCanvasConfig.md) |

#### Returns

[`IHitCanvas`](../interfaces/IHitCanvas.md)

#### Implementation of

[IHitCanvasManager](../interfaces/IHitCanvasManager.md).[getPixelType](../interfaces/IHitCanvasManager.md#getpixeltype)

#### Defined in

[src/ui/packages/hit/src/HitCanvasManager.ts:12](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/hit/src/HitCanvasManager.ts#L12)

___

### getPathType

▸ **getPathType**(`leaf`): [`IHitCanvas`](../interfaces/IHitCanvas.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `leaf` | [`ILeaf`](../interfaces/ILeaf.md) |

#### Returns

[`IHitCanvas`](../interfaces/IHitCanvas.md)

#### Implementation of

[IHitCanvasManager](../interfaces/IHitCanvasManager.md).[getPathType](../interfaces/IHitCanvasManager.md#getpathtype)

#### Defined in

[src/ui/packages/hit/src/HitCanvasManager.ts:18](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/hit/src/HitCanvasManager.ts#L18)

___

### clearImageType

▸ **clearImageType**(): `void`

#### Returns

`void`

#### Defined in

[src/ui/packages/hit/src/HitCanvasManager.ts:24](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/hit/src/HitCanvasManager.ts#L24)

___

### clearPathType

▸ **clearPathType**(): `void`

#### Returns

`void`

#### Defined in

[src/ui/packages/hit/src/HitCanvasManager.ts:28](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/hit/src/HitCanvasManager.ts#L28)

___

### \_\_clearLeafList

▸ **__clearLeafList**(`leafList`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `leafList` | [`ILeafList`](../interfaces/ILeafList.md) |

#### Returns

`void`

#### Defined in

[src/ui/packages/hit/src/HitCanvasManager.ts:32](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/hit/src/HitCanvasManager.ts#L32)

___

### \_\_autoClear

▸ **__autoClear**(): `void`

#### Returns

`void`

#### Defined in

[src/ui/packages/hit/src/HitCanvasManager.ts:44](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/hit/src/HitCanvasManager.ts#L44)

___

### clear

▸ **clear**(): `void`

#### Returns

`void`

#### Implementation of

[IHitCanvasManager](../interfaces/IHitCanvasManager.md).[clear](../interfaces/IHitCanvasManager.md#clear)

#### Overrides

[CanvasManager](CanvasManager.md).[clear](CanvasManager.md#clear)

#### Defined in

[src/ui/packages/hit/src/HitCanvasManager.ts:48](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/hit/src/HitCanvasManager.ts#L48)
