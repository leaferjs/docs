# Interface: IBounds

## Hierarchy

- [`IBoundsData`](IBoundsData.md)

- [`ITwoPointBoundsData`](ITwoPointBoundsData.md)

  ↳ **`IBounds`**

## Implemented by

- [`Bounds`](../classes/Bounds.md)

## Table of contents

### Properties

- [x](IBounds.md#x)
- [y](IBounds.md#y)
- [width](IBounds.md#width)
- [height](IBounds.md#height)
- [minX](IBounds.md#minx)
- [minY](IBounds.md#miny)
- [maxX](IBounds.md#maxx)
- [maxY](IBounds.md#maxy)

### Methods

- [set](IBounds.md#set)
- [get](IBounds.md#get)
- [clone](IBounds.md#clone)
- [move](IBounds.md#move)
- [scale](IBounds.md#scale)
- [scaleOf](IBounds.md#scaleof)
- [toOuterOf](IBounds.md#toouterof)
- [toInnerOf](IBounds.md#toinnerof)
- [getFitMatrix](IBounds.md#getfitmatrix)
- [put](IBounds.md#put)
- [spread](IBounds.md#spread)
- [shrink](IBounds.md#shrink)
- [ceil](IBounds.md#ceil)
- [unsign](IBounds.md#unsign)
- [float](IBounds.md#float)
- [add](IBounds.md#add)
- [addList](IBounds.md#addlist)
- [setList](IBounds.md#setlist)
- [addListWithFn](IBounds.md#addlistwithfn)
- [setListWithFn](IBounds.md#setlistwithfn)
- [setPoint](IBounds.md#setpoint)
- [setPoints](IBounds.md#setpoints)
- [addPoint](IBounds.md#addpoint)
- [getPoints](IBounds.md#getpoints)
- [getPoint](IBounds.md#getpoint)
- [hitPoint](IBounds.md#hitpoint)
- [hitRadiusPoint](IBounds.md#hitradiuspoint)
- [hit](IBounds.md#hit)
- [includes](IBounds.md#includes)
- [intersect](IBounds.md#intersect)
- [getIntersect](IBounds.md#getintersect)
- [isSame](IBounds.md#issame)
- [isEmpty](IBounds.md#isempty)
- [reset](IBounds.md#reset)

## Properties

### x

• **x**: `number`

#### Inherited from

[IBoundsData](IBoundsData.md).[x](IBoundsData.md#x)

#### Defined in

[src/leafer/packages/interface/src/math/IMath.ts:5](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/math/IMath.ts#L5)

___

### y

• **y**: `number`

#### Inherited from

[IBoundsData](IBoundsData.md).[y](IBoundsData.md#y)

#### Defined in

[src/leafer/packages/interface/src/math/IMath.ts:6](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/math/IMath.ts#L6)

___

### width

• **width**: `number`

#### Inherited from

[IBoundsData](IBoundsData.md).[width](IBoundsData.md#width)

#### Defined in

[src/leafer/packages/interface/src/math/IMath.ts:70](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/math/IMath.ts#L70)

___

### height

• **height**: `number`

#### Inherited from

[IBoundsData](IBoundsData.md).[height](IBoundsData.md#height)

#### Defined in

[src/leafer/packages/interface/src/math/IMath.ts:71](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/math/IMath.ts#L71)

___

### minX

• **minX**: `number`

#### Inherited from

[ITwoPointBoundsData](ITwoPointBoundsData.md).[minX](ITwoPointBoundsData.md#minx)

#### Defined in

[src/leafer/packages/interface/src/math/IMath.ts:147](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/math/IMath.ts#L147)

___

### minY

• **minY**: `number`

#### Inherited from

[ITwoPointBoundsData](ITwoPointBoundsData.md).[minY](ITwoPointBoundsData.md#miny)

#### Defined in

[src/leafer/packages/interface/src/math/IMath.ts:148](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/math/IMath.ts#L148)

___

### maxX

• **maxX**: `number`

#### Inherited from

[ITwoPointBoundsData](ITwoPointBoundsData.md).[maxX](ITwoPointBoundsData.md#maxx)

#### Defined in

[src/leafer/packages/interface/src/math/IMath.ts:149](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/math/IMath.ts#L149)

___

### maxY

• **maxY**: `number`

#### Inherited from

[ITwoPointBoundsData](ITwoPointBoundsData.md).[maxY](ITwoPointBoundsData.md#maxy)

#### Defined in

[src/leafer/packages/interface/src/math/IMath.ts:150](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/math/IMath.ts#L150)

## Methods

### set

▸ **set**(`x?`, `y?`, `width?`, `height?`): [`IBounds`](IBounds.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `x?` | `number` \| [`IBoundsData`](IBoundsData.md) |
| `y?` | `number` |
| `width?` | `number` |
| `height?` | `number` |

#### Returns

[`IBounds`](IBounds.md)

#### Defined in

[src/leafer/packages/interface/src/math/IMath.ts:103](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/math/IMath.ts#L103)

___

### get

▸ **get**(): [`IBoundsData`](IBoundsData.md)

#### Returns

[`IBoundsData`](IBoundsData.md)

#### Defined in

[src/leafer/packages/interface/src/math/IMath.ts:104](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/math/IMath.ts#L104)

___

### clone

▸ **clone**(): [`IBounds`](IBounds.md)

#### Returns

[`IBounds`](IBounds.md)

#### Defined in

[src/leafer/packages/interface/src/math/IMath.ts:105](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/math/IMath.ts#L105)

___

### move

▸ **move**(`x`, `y`): [`IBounds`](IBounds.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `x` | `number` |
| `y` | `number` |

#### Returns

[`IBounds`](IBounds.md)

#### Defined in

[src/leafer/packages/interface/src/math/IMath.ts:107](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/math/IMath.ts#L107)

___

### scale

▸ **scale**(`scaleX`, `scaleY?`, `onlySize?`): [`IBounds`](IBounds.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `scaleX` | `number` |
| `scaleY?` | `number` |
| `onlySize?` | `boolean` |

#### Returns

[`IBounds`](IBounds.md)

#### Defined in

[src/leafer/packages/interface/src/math/IMath.ts:108](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/math/IMath.ts#L108)

___

### scaleOf

▸ **scaleOf**(`origin`, `scaleX`, `scaleY?`): [`IBounds`](IBounds.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `origin` | [`IPointData`](IPointData.md) |
| `scaleX` | `number` |
| `scaleY?` | `number` |

#### Returns

[`IBounds`](IBounds.md)

#### Defined in

[src/leafer/packages/interface/src/math/IMath.ts:109](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/math/IMath.ts#L109)

___

### toOuterOf

▸ **toOuterOf**(`matrix`, `to?`): [`IBounds`](IBounds.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `matrix` | [`IMatrixData`](IMatrixData.md) |
| `to?` | [`IBoundsData`](IBoundsData.md) |

#### Returns

[`IBounds`](IBounds.md)

#### Defined in

[src/leafer/packages/interface/src/math/IMath.ts:110](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/math/IMath.ts#L110)

___

### toInnerOf

▸ **toInnerOf**(`matrix`, `to?`): [`IBounds`](IBounds.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `matrix` | [`IMatrixData`](IMatrixData.md) |
| `to?` | [`IBoundsData`](IBoundsData.md) |

#### Returns

[`IBounds`](IBounds.md)

#### Defined in

[src/leafer/packages/interface/src/math/IMath.ts:111](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/math/IMath.ts#L111)

___

### getFitMatrix

▸ **getFitMatrix**(`put`, `baseScale?`): [`IMatrix`](IMatrix.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `put` | [`IBoundsData`](IBoundsData.md) |
| `baseScale?` | `number` |

#### Returns

[`IMatrix`](IMatrix.md)

#### Defined in

[src/leafer/packages/interface/src/math/IMath.ts:112](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/math/IMath.ts#L112)

___

### put

▸ **put**(`put`, `align?`, `putScale?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `put` | [`IBoundsData`](IBoundsData.md) |
| `align?` | [`IDirection`](../modules.md#idirection) |
| `putScale?` | `number` \| ``"fit"`` \| ``"cover"`` |

#### Returns

`void`

#### Defined in

[src/leafer/packages/interface/src/math/IMath.ts:113](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/math/IMath.ts#L113)

___

### spread

▸ **spread**(`fourNumber`, `side?`): [`IBounds`](IBounds.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `fourNumber` | [`IFourNumber`](../modules.md#ifournumber) |
| `side?` | [`ISide`](../modules.md#iside) |

#### Returns

[`IBounds`](IBounds.md)

#### Defined in

[src/leafer/packages/interface/src/math/IMath.ts:115](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/math/IMath.ts#L115)

___

### shrink

▸ **shrink**(`fourNumber`, `side?`): [`IBounds`](IBounds.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `fourNumber` | [`IFourNumber`](../modules.md#ifournumber) |
| `side?` | [`ISide`](../modules.md#iside) |

#### Returns

[`IBounds`](IBounds.md)

#### Defined in

[src/leafer/packages/interface/src/math/IMath.ts:116](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/math/IMath.ts#L116)

___

### ceil

▸ **ceil**(): [`IBounds`](IBounds.md)

#### Returns

[`IBounds`](IBounds.md)

#### Defined in

[src/leafer/packages/interface/src/math/IMath.ts:117](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/math/IMath.ts#L117)

___

### unsign

▸ **unsign**(): [`IBounds`](IBounds.md)

#### Returns

[`IBounds`](IBounds.md)

#### Defined in

[src/leafer/packages/interface/src/math/IMath.ts:118](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/math/IMath.ts#L118)

___

### float

▸ **float**(`maxLength?`): [`IBounds`](IBounds.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `maxLength?` | `number` |

#### Returns

[`IBounds`](IBounds.md)

#### Defined in

[src/leafer/packages/interface/src/math/IMath.ts:119](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/math/IMath.ts#L119)

___

### add

▸ **add**(`bounds`): [`IBounds`](IBounds.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bounds` | [`IBoundsData`](IBoundsData.md) |

#### Returns

[`IBounds`](IBounds.md)

#### Defined in

[src/leafer/packages/interface/src/math/IMath.ts:121](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/math/IMath.ts#L121)

___

### addList

▸ **addList**(`boundsList`): [`IBounds`](IBounds.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `boundsList` | [`IBoundsData`](IBoundsData.md)[] |

#### Returns

[`IBounds`](IBounds.md)

#### Defined in

[src/leafer/packages/interface/src/math/IMath.ts:122](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/math/IMath.ts#L122)

___

### setList

▸ **setList**(`boundsList`): [`IBounds`](IBounds.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `boundsList` | [`IBoundsData`](IBoundsData.md)[] |

#### Returns

[`IBounds`](IBounds.md)

#### Defined in

[src/leafer/packages/interface/src/math/IMath.ts:123](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/math/IMath.ts#L123)

___

### addListWithFn

▸ **addListWithFn**(`list`, `boundsDataHandle`): [`IBounds`](IBounds.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `list` | [`IObject`](IObject.md)[] |
| `boundsDataHandle` | [`IBoundsDataFn`](IBoundsDataFn.md) |

#### Returns

[`IBounds`](IBounds.md)

#### Defined in

[src/leafer/packages/interface/src/math/IMath.ts:124](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/math/IMath.ts#L124)

___

### setListWithFn

▸ **setListWithFn**(`list`, `boundsDataHandle`): [`IBounds`](IBounds.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `list` | [`IObject`](IObject.md)[] |
| `boundsDataHandle` | [`IBoundsDataFn`](IBoundsDataFn.md) |

#### Returns

[`IBounds`](IBounds.md)

#### Defined in

[src/leafer/packages/interface/src/math/IMath.ts:125](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/math/IMath.ts#L125)

___

### setPoint

▸ **setPoint**(`point`): [`IBounds`](IBounds.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `point` | [`IPointData`](IPointData.md) |

#### Returns

[`IBounds`](IBounds.md)

#### Defined in

[src/leafer/packages/interface/src/math/IMath.ts:127](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/math/IMath.ts#L127)

___

### setPoints

▸ **setPoints**(`points`): [`IBounds`](IBounds.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `points` | [`IPointData`](IPointData.md)[] |

#### Returns

[`IBounds`](IBounds.md)

#### Defined in

[src/leafer/packages/interface/src/math/IMath.ts:128](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/math/IMath.ts#L128)

___

### addPoint

▸ **addPoint**(`point`): [`IBounds`](IBounds.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `point` | [`IPointData`](IPointData.md) |

#### Returns

[`IBounds`](IBounds.md)

#### Defined in

[src/leafer/packages/interface/src/math/IMath.ts:129](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/math/IMath.ts#L129)

___

### getPoints

▸ **getPoints**(): [`IPointData`](IPointData.md)[]

#### Returns

[`IPointData`](IPointData.md)[]

#### Defined in

[src/leafer/packages/interface/src/math/IMath.ts:130](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/math/IMath.ts#L130)

___

### getPoint

▸ **getPoint**(`around`, `onlyBoxSize?`, `to?`): [`IPointData`](IPointData.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `around` | [`IAround`](../modules.md#iaround) |
| `onlyBoxSize?` | `boolean` |
| `to?` | [`IPointData`](IPointData.md) |

#### Returns

[`IPointData`](IPointData.md)

#### Defined in

[src/leafer/packages/interface/src/math/IMath.ts:131](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/math/IMath.ts#L131)

___

### hitPoint

▸ **hitPoint**(`point`, `pointMatrix?`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `point` | [`IPointData`](IPointData.md) |
| `pointMatrix?` | [`IMatrixData`](IMatrixData.md) |

#### Returns

`boolean`

#### Defined in

[src/leafer/packages/interface/src/math/IMath.ts:133](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/math/IMath.ts#L133)

___

### hitRadiusPoint

▸ **hitRadiusPoint**(`point`, `pointMatrix?`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `point` | [`IRadiusPointData`](IRadiusPointData.md) |
| `pointMatrix?` | [`IMatrixWithLayoutData`](IMatrixWithLayoutData.md) |

#### Returns

`boolean`

#### Defined in

[src/leafer/packages/interface/src/math/IMath.ts:134](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/math/IMath.ts#L134)

___

### hit

▸ **hit**(`bounds`, `boundsMatrix?`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `bounds` | [`IBoundsData`](IBoundsData.md) |
| `boundsMatrix?` | [`IMatrixData`](IMatrixData.md) |

#### Returns

`boolean`

#### Defined in

[src/leafer/packages/interface/src/math/IMath.ts:135](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/math/IMath.ts#L135)

___

### includes

▸ **includes**(`bounds`, `boundsMatrix?`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `bounds` | [`IBoundsData`](IBoundsData.md) |
| `boundsMatrix?` | [`IMatrixData`](IMatrixData.md) |

#### Returns

`boolean`

#### Defined in

[src/leafer/packages/interface/src/math/IMath.ts:136](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/math/IMath.ts#L136)

___

### intersect

▸ **intersect**(`bounds`, `boundsMatrix?`): [`IBounds`](IBounds.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bounds` | [`IBoundsData`](IBoundsData.md) |
| `boundsMatrix?` | [`IMatrixData`](IMatrixData.md) |

#### Returns

[`IBounds`](IBounds.md)

#### Defined in

[src/leafer/packages/interface/src/math/IMath.ts:138](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/math/IMath.ts#L138)

___

### getIntersect

▸ **getIntersect**(`bounds`, `boundsMatrix?`): [`IBounds`](IBounds.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bounds` | [`IBoundsData`](IBoundsData.md) |
| `boundsMatrix?` | [`IMatrixData`](IMatrixData.md) |

#### Returns

[`IBounds`](IBounds.md)

#### Defined in

[src/leafer/packages/interface/src/math/IMath.ts:139](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/math/IMath.ts#L139)

___

### isSame

▸ **isSame**(`bounds`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `bounds` | [`IBoundsData`](IBoundsData.md) |

#### Returns

`boolean`

#### Defined in

[src/leafer/packages/interface/src/math/IMath.ts:141](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/math/IMath.ts#L141)

___

### isEmpty

▸ **isEmpty**(): `boolean`

#### Returns

`boolean`

#### Defined in

[src/leafer/packages/interface/src/math/IMath.ts:142](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/math/IMath.ts#L142)

___

### reset

▸ **reset**(): `void`

#### Returns

`void`

#### Defined in

[src/leafer/packages/interface/src/math/IMath.ts:143](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/math/IMath.ts#L143)
