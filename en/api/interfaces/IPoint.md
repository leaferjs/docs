# Interface: IPoint

## Hierarchy

- [`IPointData`](IPointData.md)

  ↳ **`IPoint`**

## Implemented by

- [`Point`](../classes/Point.md)

## Table of contents

### Properties

- [x](IPoint.md#x)
- [y](IPoint.md#y)

### Methods

- [set](IPoint.md#set)
- [get](IPoint.md#get)
- [clone](IPoint.md#clone)
- [move](IPoint.md#move)
- [scale](IPoint.md#scale)
- [scaleOf](IPoint.md#scaleof)
- [rotate](IPoint.md#rotate)
- [rotateOf](IPoint.md#rotateof)
- [getRotation](IPoint.md#getrotation)
- [toInnerOf](IPoint.md#toinnerof)
- [toOuterOf](IPoint.md#toouterof)
- [getCenter](IPoint.md#getcenter)
- [getDistance](IPoint.md#getdistance)
- [getDistancePoint](IPoint.md#getdistancepoint)
- [getAngle](IPoint.md#getangle)
- [getAtan2](IPoint.md#getatan2)
- [isSame](IPoint.md#issame)
- [reset](IPoint.md#reset)

## Properties

### x

• **x**: `number`

#### Inherited from

[IPointData](IPointData.md).[x](IPointData.md#x)

#### Defined in

[src/leafer/packages/interface/src/math/IMath.ts:5](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/math/IMath.ts#L5)

___

### y

• **y**: `number`

#### Inherited from

[IPointData](IPointData.md).[y](IPointData.md#y)

#### Defined in

[src/leafer/packages/interface/src/math/IMath.ts:6](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/math/IMath.ts#L6)

## Methods

### set

▸ **set**(`x?`, `y?`): [`IPoint`](IPoint.md)

#### Parameters

| Name | Type                                        |
| :--- | :------------------------------------------ |
| `x?` | `number` \\| [`IPointData`](IPointData.md) |
| `y?` | `number`                                    |

#### Returns

[`IPoint`](IPoint.md)

#### Defined in

[src/leafer/packages/interface/src/math/IMath.ts:38](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/math/IMath.ts#L38)

___

### get

▸ **get**(): [`IPointData`](IPointData.md)

#### Returns

[`IPointData`](IPointData.md)

#### Defined in

[src/leafer/packages/interface/src/math/IMath.ts:39](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/math/IMath.ts#L39)

___

### clone

▸ **clone**(): [`IPoint`](IPoint.md)

#### Returns

[`IPoint`](IPoint.md)

#### Defined in

[src/leafer/packages/interface/src/math/IMath.ts:40](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/math/IMath.ts#L40)

___

### move

▸ **move**(`x`, `y?`): [`IPoint`](IPoint.md)

#### Parameters

| Name | Type                                        |
| :--- | :------------------------------------------ |
| `x`  | `number` \\| [`IPointData`](IPointData.md) |
| `y?` | `number`                                    |

#### Returns

[`IPoint`](IPoint.md)

#### Defined in

[src/leafer/packages/interface/src/math/IMath.ts:42](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/math/IMath.ts#L42)

___

### scale

▸ **scale**(`scaleX`, `scaleY?`): [`IPoint`](IPoint.md)

#### Parameters

| Name      | Type     |
| :-------- | :------- |
| `scaleX`  | `number` |
| `scaleY?` | `number` |

#### Returns

[`IPoint`](IPoint.md)

#### Defined in

[src/leafer/packages/interface/src/math/IMath.ts:43](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/math/IMath.ts#L43)

___

### scaleOf

▸ **scaleOf**(`origin`, `scaleX`, `scaleY?`): [`IPoint`](IPoint.md)

#### Parameters

| Name      | Type                          |
| :-------- | :---------------------------- |
| `origin`  | [`IPointData`](IPointData.md) |
| `scaleX`  | `number`                      |
| `scaleY?` | `number`                      |

#### Returns

[`IPoint`](IPoint.md)

#### Defined in

[src/leafer/packages/interface/src/math/IMath.ts:44](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/math/IMath.ts#L44)

___

### rotate

▸ **rotate**(`rotation`, `origin?`): [`IPoint`](IPoint.md)

#### Parameters

| Name       | Type                          |
| :--------- | :---------------------------- |
| `rotation` | `number`                      |
| `origin?`  | [`IPointData`](IPointData.md) |

#### Returns

[`IPoint`](IPoint.md)

#### Defined in

[src/leafer/packages/interface/src/math/IMath.ts:45](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/math/IMath.ts#L45)

___

### rotateOf

▸ **rotateOf**(`origin`, `rotation`): [`IPoint`](IPoint.md)

#### Parameters

| Name       | Type                          |
| :--------- | :---------------------------- |
| `origin`   | [`IPointData`](IPointData.md) |
| `rotation` | `number`                      |

#### Returns

[`IPoint`](IPoint.md)

#### Defined in

[src/leafer/packages/interface/src/math/IMath.ts:46](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/math/IMath.ts#L46)

___

### getRotation

▸ **getRotation**(`origin`, `to`, `toOrigin?`): `number`

#### Parameters

| Name        | Type                          |
| :---------- | :---------------------------- |
| `origin`    | [`IPointData`](IPointData.md) |
| `to`        | [`IPointData`](IPointData.md) |
| `toOrigin?` | [`IPointData`](IPointData.md) |

#### Returns

`number`

#### Defined in

[src/leafer/packages/interface/src/math/IMath.ts:47](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/math/IMath.ts#L47)

___

### toInnerOf

▸ **toInnerOf**(`matrix`, `to?`): [`IPoint`](IPoint.md)

#### Parameters

| Name     | Type                            |
| :------- | :------------------------------ |
| `matrix` | [`IMatrixData`](IMatrixData.md) |
| `to?`    | [`IPointData`](IPointData.md)   |

#### Returns

[`IPoint`](IPoint.md)

#### Defined in

[src/leafer/packages/interface/src/math/IMath.ts:49](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/math/IMath.ts#L49)

___

### toOuterOf

▸ **toOuterOf**(`matrix`, `to?`): [`IPoint`](IPoint.md)

#### Parameters

| Name     | Type                            |
| :------- | :------------------------------ |
| `matrix` | [`IMatrixData`](IMatrixData.md) |
| `to?`    | [`IPointData`](IPointData.md)   |

#### Returns

[`IPoint`](IPoint.md)

#### Defined in

[src/leafer/packages/interface/src/math/IMath.ts:50](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/math/IMath.ts#L50)

___

### getCenter

▸ **getCenter**(`to`): [`IPoint`](IPoint.md)

#### Parameters

| Name | Type                          |
| :--- | :---------------------------- |
| `to` | [`IPointData`](IPointData.md) |

#### Returns

[`IPoint`](IPoint.md)

#### Defined in

[src/leafer/packages/interface/src/math/IMath.ts:52](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/math/IMath.ts#L52)

___

### getDistance

▸ **getDistance**(`to`): `number`

#### Parameters

| Name | Type                          |
| :--- | :---------------------------- |
| `to` | [`IPointData`](IPointData.md) |

#### Returns

`number`

#### Defined in

[src/leafer/packages/interface/src/math/IMath.ts:53](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/math/IMath.ts#L53)

___

### getDistancePoint

▸ **getDistancePoint**(`to`, `distance`, `changeTo?`): [`IPoint`](IPoint.md)

#### Parameters

| Name        | Type                          |
| :---------- | :---------------------------- |
| `to`        | [`IPointData`](IPointData.md) |
| `distance`  | `number`                      |
| `changeTo?` | `boolean`                     |

#### Returns

[`IPoint`](IPoint.md)

#### Defined in

[src/leafer/packages/interface/src/math/IMath.ts:54](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/math/IMath.ts#L54)

___

### getAngle

▸ **getAngle**(`to`): `number`

#### Parameters

| Name | Type                          |
| :--- | :---------------------------- |
| `to` | [`IPointData`](IPointData.md) |

#### Returns

`number`

#### Defined in

[src/leafer/packages/interface/src/math/IMath.ts:56](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/math/IMath.ts#L56)

___

### getAtan2

▸ **getAtan2**(`to`): `number`

#### Parameters

| Name | Type                          |
| :--- | :---------------------------- |
| `to` | [`IPointData`](IPointData.md) |

#### Returns

`number`

#### Defined in

[src/leafer/packages/interface/src/math/IMath.ts:57](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/math/IMath.ts#L57)

___

### isSame

▸ **isSame**(`point`, `quick?`): `boolean`

#### Parameters

| Name     | Type                          |
| :------- | :---------------------------- |
| `point`  | [`IPointData`](IPointData.md) |
| `quick?` | `boolean`                     |

#### Returns

`boolean`

#### Defined in

[src/leafer/packages/interface/src/math/IMath.ts:59](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/math/IMath.ts#L59)

___

### reset

▸ **reset**(): [`IPoint`](IPoint.md)

#### Returns

[`IPoint`](IPoint.md)

#### Defined in

[src/leafer/packages/interface/src/math/IMath.ts:61](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/math/IMath.ts#L61)
