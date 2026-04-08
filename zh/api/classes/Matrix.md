# Class: Matrix

## Implements

- [`IMatrix`](../interfaces/IMatrix.md)

## Table of contents

### Constructors

- [constructor](Matrix.md#constructor)

### Properties

- [a](Matrix.md#a)
- [b](Matrix.md#b)
- [c](Matrix.md#c)
- [d](Matrix.md#d)
- [e](Matrix.md#e)
- [f](Matrix.md#f)
- [scaleX](Matrix.md#scalex)
- [scaleY](Matrix.md#scaley)

### Methods

- [set](Matrix.md#set)
- [setWith](Matrix.md#setwith)
- [get](Matrix.md#get)
- [clone](Matrix.md#clone)
- [translate](Matrix.md#translate)
- [translateInner](Matrix.md#translateinner)
- [scale](Matrix.md#scale)
- [scaleWith](Matrix.md#scalewith)
- [pixelScale](Matrix.md#pixelscale)
- [scaleOfOuter](Matrix.md#scaleofouter)
- [scaleOfInner](Matrix.md#scaleofinner)
- [rotate](Matrix.md#rotate)
- [rotateOfOuter](Matrix.md#rotateofouter)
- [rotateOfInner](Matrix.md#rotateofinner)
- [skew](Matrix.md#skew)
- [skewOfOuter](Matrix.md#skewofouter)
- [skewOfInner](Matrix.md#skewofinner)
- [multiply](Matrix.md#multiply)
- [multiplyParent](Matrix.md#multiplyparent)
- [divide](Matrix.md#divide)
- [divideParent](Matrix.md#divideparent)
- [invert](Matrix.md#invert)
- [invertWith](Matrix.md#invertwith)
- [toOuterPoint](Matrix.md#toouterpoint)
- [toInnerPoint](Matrix.md#toinnerpoint)
- [setLayout](Matrix.md#setlayout)
- [getLayout](Matrix.md#getlayout)
- [withScale](Matrix.md#withscale)
- [reset](Matrix.md#reset)

## Constructors

### constructor

• **new Matrix**(`a?`, `b?`, `c?`, `d?`, `e?`, `f?`): [`Matrix`](Matrix.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `a?` | `number` \| [`IMatrixData`](../interfaces/IMatrixData.md) |
| `b?` | `number` |
| `c?` | `number` |
| `d?` | `number` |
| `e?` | `number` |
| `f?` | `number` |

#### Returns

[`Matrix`](Matrix.md)

#### Defined in

[src/leafer/packages/math/src/Matrix.ts:19](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/math/src/Matrix.ts#L19)

## Properties

### a

• **a**: `number`

#### Implementation of

[IMatrix](../interfaces/IMatrix.md).[a](../interfaces/IMatrix.md#a)

#### Defined in

[src/leafer/packages/math/src/Matrix.ts:9](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/math/src/Matrix.ts#L9)

___

### b

• **b**: `number`

#### Implementation of

[IMatrix](../interfaces/IMatrix.md).[b](../interfaces/IMatrix.md#b)

#### Defined in

[src/leafer/packages/math/src/Matrix.ts:10](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/math/src/Matrix.ts#L10)

___

### c

• **c**: `number`

#### Implementation of

[IMatrix](../interfaces/IMatrix.md).[c](../interfaces/IMatrix.md#c)

#### Defined in

[src/leafer/packages/math/src/Matrix.ts:11](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/math/src/Matrix.ts#L11)

___

### d

• **d**: `number`

#### Implementation of

[IMatrix](../interfaces/IMatrix.md).[d](../interfaces/IMatrix.md#d)

#### Defined in

[src/leafer/packages/math/src/Matrix.ts:12](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/math/src/Matrix.ts#L12)

___

### e

• **e**: `number`

#### Implementation of

[IMatrix](../interfaces/IMatrix.md).[e](../interfaces/IMatrix.md#e)

#### Defined in

[src/leafer/packages/math/src/Matrix.ts:13](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/math/src/Matrix.ts#L13)

___

### f

• **f**: `number`

#### Implementation of

[IMatrix](../interfaces/IMatrix.md).[f](../interfaces/IMatrix.md#f)

#### Defined in

[src/leafer/packages/math/src/Matrix.ts:14](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/math/src/Matrix.ts#L14)

___

### scaleX

• **scaleX**: `number`

#### Implementation of

[IMatrix](../interfaces/IMatrix.md).[scaleX](../interfaces/IMatrix.md#scalex)

#### Defined in

[src/leafer/packages/math/src/Matrix.ts:16](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/math/src/Matrix.ts#L16)

___

### scaleY

• **scaleY**: `number`

#### Implementation of

[IMatrix](../interfaces/IMatrix.md).[scaleY](../interfaces/IMatrix.md#scaley)

#### Defined in

[src/leafer/packages/math/src/Matrix.ts:17](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/math/src/Matrix.ts#L17)

## Methods

### set

▸ **set**(`a?`, `b?`, `c?`, `d?`, `e?`, `f?`): [`IMatrix`](../interfaces/IMatrix.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `a?` | `number` \| [`IMatrixData`](../interfaces/IMatrixData.md) |
| `b?` | `number` |
| `c?` | `number` |
| `d?` | `number` |
| `e?` | `number` |
| `f?` | `number` |

#### Returns

[`IMatrix`](../interfaces/IMatrix.md)

#### Implementation of

[IMatrix](../interfaces/IMatrix.md).[set](../interfaces/IMatrix.md#set)

#### Defined in

[src/leafer/packages/math/src/Matrix.ts:23](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/math/src/Matrix.ts#L23)

___

### setWith

▸ **setWith**(`dataWithScale`): [`IMatrix`](../interfaces/IMatrix.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `dataWithScale` | [`IMatrixWithScaleData`](../interfaces/IMatrixWithScaleData.md) |

#### Returns

[`IMatrix`](../interfaces/IMatrix.md)

#### Implementation of

[IMatrix](../interfaces/IMatrix.md).[setWith](../interfaces/IMatrix.md#setwith)

#### Defined in

[src/leafer/packages/math/src/Matrix.ts:28](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/math/src/Matrix.ts#L28)

___

### get

▸ **get**(): [`IMatrixData`](../interfaces/IMatrixData.md)

#### Returns

[`IMatrixData`](../interfaces/IMatrixData.md)

#### Implementation of

[IMatrix](../interfaces/IMatrix.md).[get](../interfaces/IMatrix.md#get)

#### Defined in

[src/leafer/packages/math/src/Matrix.ts:35](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/math/src/Matrix.ts#L35)

___

### clone

▸ **clone**(): [`IMatrix`](../interfaces/IMatrix.md)

#### Returns

[`IMatrix`](../interfaces/IMatrix.md)

#### Implementation of

[IMatrix](../interfaces/IMatrix.md).[clone](../interfaces/IMatrix.md#clone)

#### Defined in

[src/leafer/packages/math/src/Matrix.ts:40](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/math/src/Matrix.ts#L40)

___

### translate

▸ **translate**(`x`, `y`): [`IMatrix`](../interfaces/IMatrix.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `x` | `number` |
| `y` | `number` |

#### Returns

[`IMatrix`](../interfaces/IMatrix.md)

#### Implementation of

[IMatrix](../interfaces/IMatrix.md).[translate](../interfaces/IMatrix.md#translate)

#### Defined in

[src/leafer/packages/math/src/Matrix.ts:45](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/math/src/Matrix.ts#L45)

___

### translateInner

▸ **translateInner**(`x`, `y`): [`IMatrix`](../interfaces/IMatrix.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `x` | `number` |
| `y` | `number` |

#### Returns

[`IMatrix`](../interfaces/IMatrix.md)

#### Implementation of

[IMatrix](../interfaces/IMatrix.md).[translateInner](../interfaces/IMatrix.md#translateinner)

#### Defined in

[src/leafer/packages/math/src/Matrix.ts:50](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/math/src/Matrix.ts#L50)

___

### scale

▸ **scale**(`x`, `y?`): [`IMatrix`](../interfaces/IMatrix.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `x` | `number` |
| `y?` | `number` |

#### Returns

[`IMatrix`](../interfaces/IMatrix.md)

#### Implementation of

[IMatrix](../interfaces/IMatrix.md).[scale](../interfaces/IMatrix.md#scale)

#### Defined in

[src/leafer/packages/math/src/Matrix.ts:55](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/math/src/Matrix.ts#L55)

___

### scaleWith

▸ **scaleWith**(`x`, `y?`): [`IMatrix`](../interfaces/IMatrix.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `x` | `number` |
| `y?` | `number` |

#### Returns

[`IMatrix`](../interfaces/IMatrix.md)

#### Implementation of

[IMatrix](../interfaces/IMatrix.md).[scaleWith](../interfaces/IMatrix.md#scalewith)

#### Defined in

[src/leafer/packages/math/src/Matrix.ts:60](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/math/src/Matrix.ts#L60)

___

### pixelScale

▸ **pixelScale**(`pixelRatio`): [`IMatrix`](../interfaces/IMatrix.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `pixelRatio` | `number` |

#### Returns

[`IMatrix`](../interfaces/IMatrix.md)

#### Implementation of

[IMatrix](../interfaces/IMatrix.md).[pixelScale](../interfaces/IMatrix.md#pixelscale)

#### Defined in

[src/leafer/packages/math/src/Matrix.ts:67](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/math/src/Matrix.ts#L67)

___

### scaleOfOuter

▸ **scaleOfOuter**(`origin`, `x`, `y?`): [`IMatrix`](../interfaces/IMatrix.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `origin` | [`IPointData`](../interfaces/IPointData.md) |
| `x` | `number` |
| `y?` | `number` |

#### Returns

[`IMatrix`](../interfaces/IMatrix.md)

#### Implementation of

[IMatrix](../interfaces/IMatrix.md).[scaleOfOuter](../interfaces/IMatrix.md#scaleofouter)

#### Defined in

[src/leafer/packages/math/src/Matrix.ts:72](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/math/src/Matrix.ts#L72)

___

### scaleOfInner

▸ **scaleOfInner**(`origin`, `x`, `y?`): [`IMatrix`](../interfaces/IMatrix.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `origin` | [`IPointData`](../interfaces/IPointData.md) |
| `x` | `number` |
| `y?` | `number` |

#### Returns

[`IMatrix`](../interfaces/IMatrix.md)

#### Implementation of

[IMatrix](../interfaces/IMatrix.md).[scaleOfInner](../interfaces/IMatrix.md#scaleofinner)

#### Defined in

[src/leafer/packages/math/src/Matrix.ts:76](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/math/src/Matrix.ts#L76)

___

### rotate

▸ **rotate**(`angle`): [`IMatrix`](../interfaces/IMatrix.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `angle` | `number` |

#### Returns

[`IMatrix`](../interfaces/IMatrix.md)

#### Implementation of

[IMatrix](../interfaces/IMatrix.md).[rotate](../interfaces/IMatrix.md#rotate)

#### Defined in

[src/leafer/packages/math/src/Matrix.ts:81](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/math/src/Matrix.ts#L81)

___

### rotateOfOuter

▸ **rotateOfOuter**(`origin`, `angle`): [`IMatrix`](../interfaces/IMatrix.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `origin` | [`IPointData`](../interfaces/IPointData.md) |
| `angle` | `number` |

#### Returns

[`IMatrix`](../interfaces/IMatrix.md)

#### Implementation of

[IMatrix](../interfaces/IMatrix.md).[rotateOfOuter](../interfaces/IMatrix.md#rotateofouter)

#### Defined in

[src/leafer/packages/math/src/Matrix.ts:86](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/math/src/Matrix.ts#L86)

___

### rotateOfInner

▸ **rotateOfInner**(`origin`, `angle`): [`IMatrix`](../interfaces/IMatrix.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `origin` | [`IPointData`](../interfaces/IPointData.md) |
| `angle` | `number` |

#### Returns

[`IMatrix`](../interfaces/IMatrix.md)

#### Implementation of

[IMatrix](../interfaces/IMatrix.md).[rotateOfInner](../interfaces/IMatrix.md#rotateofinner)

#### Defined in

[src/leafer/packages/math/src/Matrix.ts:91](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/math/src/Matrix.ts#L91)

___

### skew

▸ **skew**(`x`, `y?`): [`IMatrix`](../interfaces/IMatrix.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `x` | `number` |
| `y?` | `number` |

#### Returns

[`IMatrix`](../interfaces/IMatrix.md)

#### Implementation of

[IMatrix](../interfaces/IMatrix.md).[skew](../interfaces/IMatrix.md#skew)

#### Defined in

[src/leafer/packages/math/src/Matrix.ts:97](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/math/src/Matrix.ts#L97)

___

### skewOfOuter

▸ **skewOfOuter**(`origin`, `x`, `y?`): [`IMatrix`](../interfaces/IMatrix.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `origin` | [`IPointData`](../interfaces/IPointData.md) |
| `x` | `number` |
| `y?` | `number` |

#### Returns

[`IMatrix`](../interfaces/IMatrix.md)

#### Implementation of

[IMatrix](../interfaces/IMatrix.md).[skewOfOuter](../interfaces/IMatrix.md#skewofouter)

#### Defined in

[src/leafer/packages/math/src/Matrix.ts:102](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/math/src/Matrix.ts#L102)

___

### skewOfInner

▸ **skewOfInner**(`origin`, `x`, `y?`): [`IMatrix`](../interfaces/IMatrix.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `origin` | [`IPointData`](../interfaces/IPointData.md) |
| `x` | `number` |
| `y?` | `number` |

#### Returns

[`IMatrix`](../interfaces/IMatrix.md)

#### Implementation of

[IMatrix](../interfaces/IMatrix.md).[skewOfInner](../interfaces/IMatrix.md#skewofinner)

#### Defined in

[src/leafer/packages/math/src/Matrix.ts:107](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/math/src/Matrix.ts#L107)

___

### multiply

▸ **multiply**(`child`): [`IMatrix`](../interfaces/IMatrix.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `child` | [`IMatrixData`](../interfaces/IMatrixData.md) |

#### Returns

[`IMatrix`](../interfaces/IMatrix.md)

#### Implementation of

[IMatrix](../interfaces/IMatrix.md).[multiply](../interfaces/IMatrix.md#multiply)

#### Defined in

[src/leafer/packages/math/src/Matrix.ts:113](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/math/src/Matrix.ts#L113)

___

### multiplyParent

▸ **multiplyParent**(`parent`): [`IMatrix`](../interfaces/IMatrix.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `parent` | [`IMatrixData`](../interfaces/IMatrixData.md) |

#### Returns

[`IMatrix`](../interfaces/IMatrix.md)

#### Implementation of

[IMatrix](../interfaces/IMatrix.md).[multiplyParent](../interfaces/IMatrix.md#multiplyparent)

#### Defined in

[src/leafer/packages/math/src/Matrix.ts:118](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/math/src/Matrix.ts#L118)

___

### divide

▸ **divide**(`child`): [`IMatrix`](../interfaces/IMatrix.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `child` | [`IMatrixData`](../interfaces/IMatrixData.md) |

#### Returns

[`IMatrix`](../interfaces/IMatrix.md)

#### Implementation of

[IMatrix](../interfaces/IMatrix.md).[divide](../interfaces/IMatrix.md#divide)

#### Defined in

[src/leafer/packages/math/src/Matrix.ts:124](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/math/src/Matrix.ts#L124)

___

### divideParent

▸ **divideParent**(`parent`): [`IMatrix`](../interfaces/IMatrix.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `parent` | [`IMatrixData`](../interfaces/IMatrixData.md) |

#### Returns

[`IMatrix`](../interfaces/IMatrix.md)

#### Implementation of

[IMatrix](../interfaces/IMatrix.md).[divideParent](../interfaces/IMatrix.md#divideparent)

#### Defined in

[src/leafer/packages/math/src/Matrix.ts:129](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/math/src/Matrix.ts#L129)

___

### invert

▸ **invert**(): [`IMatrix`](../interfaces/IMatrix.md)

#### Returns

[`IMatrix`](../interfaces/IMatrix.md)

#### Implementation of

[IMatrix](../interfaces/IMatrix.md).[invert](../interfaces/IMatrix.md#invert)

#### Defined in

[src/leafer/packages/math/src/Matrix.ts:134](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/math/src/Matrix.ts#L134)

___

### invertWith

▸ **invertWith**(): [`IMatrix`](../interfaces/IMatrix.md)

#### Returns

[`IMatrix`](../interfaces/IMatrix.md)

#### Implementation of

[IMatrix](../interfaces/IMatrix.md).[invertWith](../interfaces/IMatrix.md#invertwith)

#### Defined in

[src/leafer/packages/math/src/Matrix.ts:139](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/math/src/Matrix.ts#L139)

___

### toOuterPoint

▸ **toOuterPoint**(`inner`, `to?`, `distance?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `inner` | [`IPointData`](../interfaces/IPointData.md) |
| `to?` | [`IPointData`](../interfaces/IPointData.md) |
| `distance?` | `boolean` |

#### Returns

`void`

#### Implementation of

[IMatrix](../interfaces/IMatrix.md).[toOuterPoint](../interfaces/IMatrix.md#toouterpoint)

#### Defined in

[src/leafer/packages/math/src/Matrix.ts:147](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/math/src/Matrix.ts#L147)

___

### toInnerPoint

▸ **toInnerPoint**(`outer`, `to?`, `distance?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `outer` | [`IPointData`](../interfaces/IPointData.md) |
| `to?` | [`IPointData`](../interfaces/IPointData.md) |
| `distance?` | `boolean` |

#### Returns

`void`

#### Implementation of

[IMatrix](../interfaces/IMatrix.md).[toInnerPoint](../interfaces/IMatrix.md#toinnerpoint)

#### Defined in

[src/leafer/packages/math/src/Matrix.ts:151](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/math/src/Matrix.ts#L151)

___

### setLayout

▸ **setLayout**(`data`, `origin?`, `around?`): [`IMatrix`](../interfaces/IMatrix.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | [`ILayoutData`](../interfaces/ILayoutData.md) |
| `origin?` | [`IPointData`](../interfaces/IPointData.md) |
| `around?` | [`IPointData`](../interfaces/IPointData.md) |

#### Returns

[`IMatrix`](../interfaces/IMatrix.md)

#### Implementation of

[IMatrix](../interfaces/IMatrix.md).[setLayout](../interfaces/IMatrix.md#setlayout)

#### Defined in

[src/leafer/packages/math/src/Matrix.ts:156](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/math/src/Matrix.ts#L156)

___

### getLayout

▸ **getLayout**(`origin?`, `around?`, `firstSkewY?`): [`ILayoutData`](../interfaces/ILayoutData.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `origin?` | [`IPointData`](../interfaces/IPointData.md) |
| `around?` | [`IPointData`](../interfaces/IPointData.md) |
| `firstSkewY?` | `boolean` |

#### Returns

[`ILayoutData`](../interfaces/ILayoutData.md)

#### Implementation of

[IMatrix](../interfaces/IMatrix.md).[getLayout](../interfaces/IMatrix.md#getlayout)

#### Defined in

[src/leafer/packages/math/src/Matrix.ts:161](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/math/src/Matrix.ts#L161)

___

### withScale

▸ **withScale**(`scaleX?`, `scaleY?`): [`IMatrixWithScaleData`](../interfaces/IMatrixWithScaleData.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `scaleX?` | `number` |
| `scaleY?` | `number` |

#### Returns

[`IMatrixWithScaleData`](../interfaces/IMatrixWithScaleData.md)

#### Implementation of

[IMatrix](../interfaces/IMatrix.md).[withScale](../interfaces/IMatrix.md#withscale)

#### Defined in

[src/leafer/packages/math/src/Matrix.ts:165](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/math/src/Matrix.ts#L165)

___

### reset

▸ **reset**(): `void`

#### Returns

`void`

#### Implementation of

[IMatrix](../interfaces/IMatrix.md).[reset](../interfaces/IMatrix.md#reset)

#### Defined in

[src/leafer/packages/math/src/Matrix.ts:169](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/math/src/Matrix.ts#L169)
