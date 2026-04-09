# Class: Bounds

## Implements

- [`IBounds`](../interfaces/IBounds.md)

## Table of contents

### Constructors

- [constructor](Bounds.md#constructor)

### Properties

- [x](Bounds.md#x)
- [y](Bounds.md#y)
- [width](Bounds.md#width)
- [height](Bounds.md#height)

### Accessors

- [minX](Bounds.md#minx)
- [minY](Bounds.md#miny)
- [maxX](Bounds.md#maxx)
- [maxY](Bounds.md#maxy)

### Methods

- [set](Bounds.md#set)
- [get](Bounds.md#get)
- [clone](Bounds.md#clone)
- [move](Bounds.md#move)
- [scale](Bounds.md#scale)
- [scaleOf](Bounds.md#scaleof)
- [toOuterOf](Bounds.md#toouterof)
- [toInnerOf](Bounds.md#toinnerof)
- [getFitMatrix](Bounds.md#getfitmatrix)
- [put](Bounds.md#put)
- [spread](Bounds.md#spread)
- [shrink](Bounds.md#shrink)
- [ceil](Bounds.md#ceil)
- [unsign](Bounds.md#unsign)
- [float](Bounds.md#float)
- [add](Bounds.md#add)
- [addList](Bounds.md#addlist)
- [setList](Bounds.md#setlist)
- [addListWithFn](Bounds.md#addlistwithfn)
- [setListWithFn](Bounds.md#setlistwithfn)
- [setPoint](Bounds.md#setpoint)
- [setPoints](Bounds.md#setpoints)
- [addPoint](Bounds.md#addpoint)
- [getPoints](Bounds.md#getpoints)
- [getPoint](Bounds.md#getpoint)
- [hitPoint](Bounds.md#hitpoint)
- [hitRadiusPoint](Bounds.md#hitradiuspoint)
- [hit](Bounds.md#hit)
- [includes](Bounds.md#includes)
- [intersect](Bounds.md#intersect)
- [getIntersect](Bounds.md#getintersect)
- [isSame](Bounds.md#issame)
- [isEmpty](Bounds.md#isempty)
- [reset](Bounds.md#reset)

## Constructors

### constructor

• **new Bounds**(`x?`, `y?`, `width?`, `height?`): [`Bounds`](Bounds.md)

#### Parameters

| Name      | Type                                                        |
| :-------- | :---------------------------------------------------------- |
| `x?`      | `number` \\| [`IBoundsData`](../interfaces/IBoundsData.md) |
| `y?`      | `number`                                                    |
| `width?`  | `number`                                                    |
| `height?` | `number`                                                    |

#### Returns

[`Bounds`](Bounds.md)

#### Defined in

[src/leafer/packages/math/src/Bounds.ts:19](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/math/src/Bounds.ts#L19)

## Properties

### x

• **x**: `number`

#### Implementation of

[IBounds](../interfaces/IBounds.md).[x](../interfaces/IBounds.md#x)

#### Defined in

[src/leafer/packages/math/src/Bounds.ts:9](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/math/src/Bounds.ts#L9)

___

### y

• **y**: `number`

#### Implementation of

[IBounds](../interfaces/IBounds.md).[y](../interfaces/IBounds.md#y)

#### Defined in

[src/leafer/packages/math/src/Bounds.ts:10](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/math/src/Bounds.ts#L10)

___

### width

• **width**: `number`

#### Implementation of

[IBounds](../interfaces/IBounds.md).[width](../interfaces/IBounds.md#width)

#### Defined in

[src/leafer/packages/math/src/Bounds.ts:11](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/math/src/Bounds.ts#L11)

___

### height

• **height**: `number`

#### Implementation of

[IBounds](../interfaces/IBounds.md).[height](../interfaces/IBounds.md#height)

#### Defined in

[src/leafer/packages/math/src/Bounds.ts:12](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/math/src/Bounds.ts#L12)

## Accessors

### minX

• `get` **minX**(): `number`

#### Returns

`number`

#### Implementation of

[IBounds](../interfaces/IBounds.md).[minX](../interfaces/IBounds.md#minx)

#### Defined in

[src/leafer/packages/math/src/Bounds.ts:14](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/math/src/Bounds.ts#L14)

___

### minY

• `get` **minY**(): `number`

#### Returns

`number`

#### Implementation of

[IBounds](../interfaces/IBounds.md).[minY](../interfaces/IBounds.md#miny)

#### Defined in

[src/leafer/packages/math/src/Bounds.ts:15](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/math/src/Bounds.ts#L15)

___

### maxX

• `get` **maxX**(): `number`

#### Returns

`number`

#### Implementation of

[IBounds](../interfaces/IBounds.md).[maxX](../interfaces/IBounds.md#maxx)

#### Defined in

[src/leafer/packages/math/src/Bounds.ts:16](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/math/src/Bounds.ts#L16)

___

### maxY

• `get` **maxY**(): `number`

#### Returns

`number`

#### Implementation of

[IBounds](../interfaces/IBounds.md).[maxY](../interfaces/IBounds.md#maxy)

#### Defined in

[src/leafer/packages/math/src/Bounds.ts:17](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/math/src/Bounds.ts#L17)

## Methods

### set

▸ **set**(`x?`, `y?`, `width?`, `height?`): [`IBounds`](../interfaces/IBounds.md)

#### Parameters

| Name      | Type                                                        |
| :-------- | :---------------------------------------------------------- |
| `x?`      | `number` \\| [`IBoundsData`](../interfaces/IBoundsData.md) |
| `y?`      | `number`                                                    |
| `width?`  | `number`                                                    |
| `height?` | `number`                                                    |

#### Returns

[`IBounds`](../interfaces/IBounds.md)

#### Implementation of

[IBounds](../interfaces/IBounds.md).[set](../interfaces/IBounds.md#set)

#### Defined in

[src/leafer/packages/math/src/Bounds.ts:23](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/math/src/Bounds.ts#L23)

___

### get

▸ **get**(): [`IBoundsData`](../interfaces/IBoundsData.md)

#### Returns

[`IBoundsData`](../interfaces/IBoundsData.md)

#### Implementation of

[IBounds](../interfaces/IBounds.md).[get](../interfaces/IBounds.md#get)

#### Defined in

[src/leafer/packages/math/src/Bounds.ts:28](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/math/src/Bounds.ts#L28)

___

### clone

▸ **clone**(): [`IBounds`](../interfaces/IBounds.md)

#### Returns

[`IBounds`](../interfaces/IBounds.md)

#### Implementation of

[IBounds](../interfaces/IBounds.md).[clone](../interfaces/IBounds.md#clone)

#### Defined in

[src/leafer/packages/math/src/Bounds.ts:33](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/math/src/Bounds.ts#L33)

___

### move

▸ **move**(`x`, `y`): [`IBounds`](../interfaces/IBounds.md)

#### Parameters

| Name | Type     |
| :--- | :------- |
| `x`  | `number` |
| `y`  | `number` |

#### Returns

[`IBounds`](../interfaces/IBounds.md)

#### Implementation of

[IBounds](../interfaces/IBounds.md).[move](../interfaces/IBounds.md#move)

#### Defined in

[src/leafer/packages/math/src/Bounds.ts:38](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/math/src/Bounds.ts#L38)

___

### scale

▸ **scale**(`scaleX`, `scaleY?`, `onlySize?`): [`IBounds`](../interfaces/IBounds.md)

#### Parameters

| Name        | Type      |
| :---------- | :-------- |
| `scaleX`    | `number`  |
| `scaleY?`   | `number`  |
| `onlySize?` | `boolean` |

#### Returns

[`IBounds`](../interfaces/IBounds.md)

#### Implementation of

[IBounds](../interfaces/IBounds.md).[scale](../interfaces/IBounds.md#scale)

#### Defined in

[src/leafer/packages/math/src/Bounds.ts:43](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/math/src/Bounds.ts#L43)

___

### scaleOf

▸ **scaleOf**(`origin`, `scaleX`, `scaleY?`): [`IBounds`](../interfaces/IBounds.md)

#### Parameters

| Name      | Type                                        |
| :-------- | :------------------------------------------ |
| `origin`  | [`IPointData`](../interfaces/IPointData.md) |
| `scaleX`  | `number`                                    |
| `scaleY?` | `number`                                    |

#### Returns

[`IBounds`](../interfaces/IBounds.md)

#### Implementation of

[IBounds](../interfaces/IBounds.md).[scaleOf](../interfaces/IBounds.md#scaleof)

#### Defined in

[src/leafer/packages/math/src/Bounds.ts:48](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/math/src/Bounds.ts#L48)

___

### toOuterOf

▸ **toOuterOf**(`matrix`, `to?`): [`IBounds`](../interfaces/IBounds.md)

#### Parameters

| Name     | Type                                          |
| :------- | :-------------------------------------------- |
| `matrix` | [`IMatrixData`](../interfaces/IMatrixData.md) |
| `to?`    | [`IBoundsData`](../interfaces/IBoundsData.md) |

#### Returns

[`IBounds`](../interfaces/IBounds.md)

#### Implementation of

[IBounds](../interfaces/IBounds.md).[toOuterOf](../interfaces/IBounds.md#toouterof)

#### Defined in

[src/leafer/packages/math/src/Bounds.ts:53](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/math/src/Bounds.ts#L53)

___

### toInnerOf

▸ **toInnerOf**(`matrix`, `to?`): [`IBounds`](../interfaces/IBounds.md)

#### Parameters

| Name     | Type                                          |
| :------- | :-------------------------------------------- |
| `matrix` | [`IMatrixData`](../interfaces/IMatrixData.md) |
| `to?`    | [`IBoundsData`](../interfaces/IBoundsData.md) |

#### Returns

[`IBounds`](../interfaces/IBounds.md)

#### Implementation of

[IBounds](../interfaces/IBounds.md).[toInnerOf](../interfaces/IBounds.md#toinnerof)

#### Defined in

[src/leafer/packages/math/src/Bounds.ts:58](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/math/src/Bounds.ts#L58)

___

### getFitMatrix

▸ **getFitMatrix**(`put`, `baseScale?`): [`IMatrix`](../interfaces/IMatrix.md)

#### Parameters

| Name         | Type                                          |
| :----------- | :-------------------------------------------- |
| `put`        | [`IBoundsData`](../interfaces/IBoundsData.md) |
| `baseScale?` | `number`                                      |

#### Returns

[`IMatrix`](../interfaces/IMatrix.md)

#### Implementation of

[IBounds](../interfaces/IBounds.md).[getFitMatrix](../interfaces/IBounds.md#getfitmatrix)

#### Defined in

[src/leafer/packages/math/src/Bounds.ts:63](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/math/src/Bounds.ts#L63)

___

### put

▸ **put**(`put`, `align?`, `putScale?`): `void`

#### Parameters

| Name        | Type                                          |
| :---------- | :-------------------------------------------- |
| `put`       | [`IBoundsData`](../interfaces/IBoundsData.md) |
| `align?`    | [`IDirection`](../modules.md#idirection)      |
| `putScale?` | `number` \\| `"fit"` \\| `"cover"`          |

#### Returns

`void`

#### Implementation of

[IBounds](../interfaces/IBounds.md).[put](../interfaces/IBounds.md#put)

#### Defined in

[src/leafer/packages/math/src/Bounds.ts:67](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/math/src/Bounds.ts#L67)

___

### spread

▸ **spread**(`fourNumber`, `side?`): [`IBounds`](../interfaces/IBounds.md)

#### Parameters

| Name         | Type                                       |
| :----------- | :----------------------------------------- |
| `fourNumber` | [`IFourNumber`](../modules.md#ifournumber) |
| `side?`      | [`ISide`](../modules.md#iside)             |

#### Returns

[`IBounds`](../interfaces/IBounds.md)

#### Implementation of

[IBounds](../interfaces/IBounds.md).[spread](../interfaces/IBounds.md#spread)

#### Defined in

[src/leafer/packages/math/src/Bounds.ts:71](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/math/src/Bounds.ts#L71)

___

### shrink

▸ **shrink**(`fourNumber`, `side?`): [`IBounds`](../interfaces/IBounds.md)

#### Parameters

| Name         | Type                                       |
| :----------- | :----------------------------------------- |
| `fourNumber` | [`IFourNumber`](../modules.md#ifournumber) |
| `side?`      | [`ISide`](../modules.md#iside)             |

#### Returns

[`IBounds`](../interfaces/IBounds.md)

#### Implementation of

[IBounds](../interfaces/IBounds.md).[shrink](../interfaces/IBounds.md#shrink)

#### Defined in

[src/leafer/packages/math/src/Bounds.ts:76](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/math/src/Bounds.ts#L76)

___

### ceil

▸ **ceil**(): [`IBounds`](../interfaces/IBounds.md)

#### Returns

[`IBounds`](../interfaces/IBounds.md)

#### Implementation of

[IBounds](../interfaces/IBounds.md).[ceil](../interfaces/IBounds.md#ceil)

#### Defined in

[src/leafer/packages/math/src/Bounds.ts:81](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/math/src/Bounds.ts#L81)

___

### unsign

▸ **unsign**(): [`IBounds`](../interfaces/IBounds.md)

#### Returns

[`IBounds`](../interfaces/IBounds.md)

#### Implementation of

[IBounds](../interfaces/IBounds.md).[unsign](../interfaces/IBounds.md#unsign)

#### Defined in

[src/leafer/packages/math/src/Bounds.ts:86](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/math/src/Bounds.ts#L86)

___

### float

▸ **float**(`maxLength?`): [`IBounds`](../interfaces/IBounds.md)

#### Parameters

| Name         | Type     |
| :----------- | :------- |
| `maxLength?` | `number` |

#### Returns

[`IBounds`](../interfaces/IBounds.md)

#### Implementation of

[IBounds](../interfaces/IBounds.md).[float](../interfaces/IBounds.md#float)

#### Defined in

[src/leafer/packages/math/src/Bounds.ts:91](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/math/src/Bounds.ts#L91)

___

### add

▸ **add**(`bounds`): [`IBounds`](../interfaces/IBounds.md)

#### Parameters

| Name     | Type                                          |
| :------- | :-------------------------------------------- |
| `bounds` | [`IBoundsData`](../interfaces/IBoundsData.md) |

#### Returns

[`IBounds`](../interfaces/IBounds.md)

#### Implementation of

[IBounds](../interfaces/IBounds.md).[add](../interfaces/IBounds.md#add)

#### Defined in

[src/leafer/packages/math/src/Bounds.ts:97](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/math/src/Bounds.ts#L97)

___

### addList

▸ **addList**(`boundsList`): [`IBounds`](../interfaces/IBounds.md)

#### Parameters

| Name         | Type                                                                                                |
| :----------- | :-------------------------------------------------------------------------------------------------- |
| `boundsList` | [`IBoundsData`](../interfaces/IBoundsData.md)[] |

#### Returns

[`IBounds`](../interfaces/IBounds.md)

#### Implementation of

[IBounds](../interfaces/IBounds.md).[addList](../interfaces/IBounds.md#addlist)

#### Defined in

[src/leafer/packages/math/src/Bounds.ts:102](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/math/src/Bounds.ts#L102)

___

### setList

▸ **setList**(`boundsList`): [`IBounds`](../interfaces/IBounds.md)

#### Parameters

| Name         | Type                                                                                                |
| :----------- | :-------------------------------------------------------------------------------------------------- |
| `boundsList` | [`IBoundsData`](../interfaces/IBoundsData.md)[] |

#### Returns

[`IBounds`](../interfaces/IBounds.md)

#### Implementation of

[IBounds](../interfaces/IBounds.md).[setList](../interfaces/IBounds.md#setlist)

#### Defined in

[src/leafer/packages/math/src/Bounds.ts:107](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/math/src/Bounds.ts#L107)

___

### addListWithFn

▸ **addListWithFn**(`list`, `boundsDataFn`): [`IBounds`](../interfaces/IBounds.md)

#### Parameters

| Name           | Type                                                                                        |
| :------------- | :------------------------------------------------------------------------------------------ |
| `list`         | [`IObject`](../interfaces/IObject.md)[] |
| `boundsDataFn` | [`IBoundsDataFn`](../interfaces/IBoundsDataFn.md)                                           |

#### Returns

[`IBounds`](../interfaces/IBounds.md)

#### Implementation of

[IBounds](../interfaces/IBounds.md).[addListWithFn](../interfaces/IBounds.md#addlistwithfn)

#### Defined in

[src/leafer/packages/math/src/Bounds.ts:112](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/math/src/Bounds.ts#L112)

___

### setListWithFn

▸ **setListWithFn**(`list`, `boundsDataFn`): [`IBounds`](../interfaces/IBounds.md)

#### Parameters

| Name           | Type                                                                                        |
| :------------- | :------------------------------------------------------------------------------------------ |
| `list`         | [`IObject`](../interfaces/IObject.md)[] |
| `boundsDataFn` | [`IBoundsDataFn`](../interfaces/IBoundsDataFn.md)                                           |

#### Returns

[`IBounds`](../interfaces/IBounds.md)

#### Implementation of

[IBounds](../interfaces/IBounds.md).[setListWithFn](../interfaces/IBounds.md#setlistwithfn)

#### Defined in

[src/leafer/packages/math/src/Bounds.ts:117](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/math/src/Bounds.ts#L117)

___

### setPoint

▸ **setPoint**(`point`): [`IBounds`](../interfaces/IBounds.md)

#### Parameters

| Name    | Type                                        |
| :------ | :------------------------------------------ |
| `point` | [`IPointData`](../interfaces/IPointData.md) |

#### Returns

[`IBounds`](../interfaces/IBounds.md)

#### Implementation of

[IBounds](../interfaces/IBounds.md).[setPoint](../interfaces/IBounds.md#setpoint)

#### Defined in

[src/leafer/packages/math/src/Bounds.ts:123](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/math/src/Bounds.ts#L123)

___

### setPoints

▸ **setPoints**(`points`): [`IBounds`](../interfaces/IBounds.md)

#### Parameters

| Name     | Type                                                                                              |
| :------- | :------------------------------------------------------------------------------------------------ |
| `points` | [`IPointData`](../interfaces/IPointData.md)[] |

#### Returns

[`IBounds`](../interfaces/IBounds.md)

#### Implementation of

[IBounds](../interfaces/IBounds.md).[setPoints](../interfaces/IBounds.md#setpoints)

#### Defined in

[src/leafer/packages/math/src/Bounds.ts:128](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/math/src/Bounds.ts#L128)

___

### addPoint

▸ **addPoint**(`point`): [`IBounds`](../interfaces/IBounds.md)

#### Parameters

| Name    | Type                                        |
| :------ | :------------------------------------------ |
| `point` | [`IPointData`](../interfaces/IPointData.md) |

#### Returns

[`IBounds`](../interfaces/IBounds.md)

#### Implementation of

[IBounds](../interfaces/IBounds.md).[addPoint](../interfaces/IBounds.md#addpoint)

#### Defined in

[src/leafer/packages/math/src/Bounds.ts:133](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/math/src/Bounds.ts#L133)

___

### getPoints

▸ **getPoints**(): [`IPointData`](../interfaces/IPointData.md)[]

#### Returns

[`IPointData`](../interfaces/IPointData.md)[]

#### Implementation of

[IBounds](../interfaces/IBounds.md).[getPoints](../interfaces/IBounds.md#getpoints)

#### Defined in

[src/leafer/packages/math/src/Bounds.ts:138](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/math/src/Bounds.ts#L138)

___

### getPoint

▸ **getPoint**(`around`, `onlyBoxSize?`, `to?`): [`IPointData`](../interfaces/IPointData.md)

#### Parameters

| Name           | Type                                        |
| :------------- | :------------------------------------------ |
| `around`       | [`IAround`](../modules.md#iaround)          |
| `onlyBoxSize?` | `boolean`                                   |
| `to?`          | [`IPointData`](../interfaces/IPointData.md) |

#### Returns

[`IPointData`](../interfaces/IPointData.md)

#### Implementation of

[IBounds](../interfaces/IBounds.md).[getPoint](../interfaces/IBounds.md#getpoint)

#### Defined in

[src/leafer/packages/math/src/Bounds.ts:142](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/math/src/Bounds.ts#L142)

___

### hitPoint

▸ **hitPoint**(`point`, `pointMatrix?`): `boolean`

#### Parameters

| Name           | Type                                          |
| :------------- | :-------------------------------------------- |
| `point`        | [`IPointData`](../interfaces/IPointData.md)   |
| `pointMatrix?` | [`IMatrixData`](../interfaces/IMatrixData.md) |

#### Returns

`boolean`

#### Implementation of

[IBounds](../interfaces/IBounds.md).[hitPoint](../interfaces/IBounds.md#hitpoint)

#### Defined in

[src/leafer/packages/math/src/Bounds.ts:147](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/math/src/Bounds.ts#L147)

___

### hitRadiusPoint

▸ **hitRadiusPoint**(`point`, `pointMatrix?`): `boolean`

#### Parameters

| Name           | Type                                                              |
| :------------- | :---------------------------------------------------------------- |
| `point`        | [`IRadiusPointData`](../interfaces/IRadiusPointData.md)           |
| `pointMatrix?` | [`IMatrixWithLayoutData`](../interfaces/IMatrixWithLayoutData.md) |

#### Returns

`boolean`

#### Implementation of

[IBounds](../interfaces/IBounds.md).[hitRadiusPoint](../interfaces/IBounds.md#hitradiuspoint)

#### Defined in

[src/leafer/packages/math/src/Bounds.ts:151](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/math/src/Bounds.ts#L151)

___

### hit

▸ **hit**(`bounds`, `boundsMatrix?`): `boolean`

#### Parameters

| Name            | Type                                          |
| :-------------- | :-------------------------------------------- |
| `bounds`        | [`IBoundsData`](../interfaces/IBoundsData.md) |
| `boundsMatrix?` | [`IMatrixData`](../interfaces/IMatrixData.md) |

#### Returns

`boolean`

#### Implementation of

[IBounds](../interfaces/IBounds.md).[hit](../interfaces/IBounds.md#hit)

#### Defined in

[src/leafer/packages/math/src/Bounds.ts:155](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/math/src/Bounds.ts#L155)

___

### includes

▸ **includes**(`bounds`, `boundsMatrix?`): `boolean`

#### Parameters

| Name            | Type                                          |
| :-------------- | :-------------------------------------------- |
| `bounds`        | [`IBoundsData`](../interfaces/IBoundsData.md) |
| `boundsMatrix?` | [`IMatrixData`](../interfaces/IMatrixData.md) |

#### Returns

`boolean`

#### Implementation of

[IBounds](../interfaces/IBounds.md).[includes](../interfaces/IBounds.md#includes)

#### Defined in

[src/leafer/packages/math/src/Bounds.ts:159](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/math/src/Bounds.ts#L159)

___

### intersect

▸ **intersect**(`bounds`, `boundsMatrix?`): [`IBounds`](../interfaces/IBounds.md)

#### Parameters

| Name            | Type                                          |
| :-------------- | :-------------------------------------------- |
| `bounds`        | [`IBoundsData`](../interfaces/IBoundsData.md) |
| `boundsMatrix?` | [`IMatrixData`](../interfaces/IMatrixData.md) |

#### Returns

[`IBounds`](../interfaces/IBounds.md)

#### Implementation of

[IBounds](../interfaces/IBounds.md).[intersect](../interfaces/IBounds.md#intersect)

#### Defined in

[src/leafer/packages/math/src/Bounds.ts:164](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/math/src/Bounds.ts#L164)

___

### getIntersect

▸ **getIntersect**(`bounds`, `boundsMatrix?`): [`IBounds`](../interfaces/IBounds.md)

#### Parameters

| Name            | Type                                          |
| :-------------- | :-------------------------------------------- |
| `bounds`        | [`IBoundsData`](../interfaces/IBoundsData.md) |
| `boundsMatrix?` | [`IMatrixData`](../interfaces/IMatrixData.md) |

#### Returns

[`IBounds`](../interfaces/IBounds.md)

#### Implementation of

[IBounds](../interfaces/IBounds.md).[getIntersect](../interfaces/IBounds.md#getintersect)

#### Defined in

[src/leafer/packages/math/src/Bounds.ts:169](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/math/src/Bounds.ts#L169)

___

### isSame

▸ **isSame**(`bounds`): `boolean`

#### Parameters

| Name     | Type                                          |
| :------- | :-------------------------------------------- |
| `bounds` | [`IBoundsData`](../interfaces/IBoundsData.md) |

#### Returns

`boolean`

#### Implementation of

[IBounds](../interfaces/IBounds.md).[isSame](../interfaces/IBounds.md#issame)

#### Defined in

[src/leafer/packages/math/src/Bounds.ts:174](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/math/src/Bounds.ts#L174)

___

### isEmpty

▸ **isEmpty**(): `boolean`

#### Returns

`boolean`

#### Implementation of

[IBounds](../interfaces/IBounds.md).[isEmpty](../interfaces/IBounds.md#isempty)

#### Defined in

[src/leafer/packages/math/src/Bounds.ts:178](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/math/src/Bounds.ts#L178)

___

### reset

▸ **reset**(): `void`

#### Returns

`void`

#### Implementation of

[IBounds](../interfaces/IBounds.md).[reset](../interfaces/IBounds.md#reset)

#### Defined in

[src/leafer/packages/math/src/Bounds.ts:182](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/math/src/Bounds.ts#L182)
