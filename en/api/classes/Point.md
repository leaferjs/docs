# Class: Point

## Implements

- [`IPoint`](../interfaces/IPoint.md)

## Table of contents

### Constructors

- [constructor](Point.md#constructor)

### Properties

- [x](Point.md#x)
- [y](Point.md#y)

### Methods

- [set](Point.md#set)
- [get](Point.md#get)
- [clone](Point.md#clone)
- [move](Point.md#move)
- [scale](Point.md#scale)
- [scaleOf](Point.md#scaleof)
- [rotate](Point.md#rotate)
- [rotateOf](Point.md#rotateof)
- [getRotation](Point.md#getrotation)
- [toInnerOf](Point.md#toinnerof)
- [toOuterOf](Point.md#toouterof)
- [getCenter](Point.md#getcenter)
- [getDistance](Point.md#getdistance)
- [getDistancePoint](Point.md#getdistancepoint)
- [getAngle](Point.md#getangle)
- [getAtan2](Point.md#getatan2)
- [isSame](Point.md#issame)
- [reset](Point.md#reset)

## Constructors

### constructor

• **new Point**(`x?`, `y?`): [`Point`](Point.md)

#### Parameters

| Name | Type                                                      |
| :--- | :-------------------------------------------------------- |
| `x?` | `number` \\| [`IPointData`](../interfaces/IPointData.md) |
| `y?` | `number`                                                  |

#### Returns

[`Point`](Point.md)

#### Defined in

[src/leafer/packages/math/src/Point.ts:11](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/math/src/Point.ts#L11)

## Properties

### x

• **x**: `number`

#### Implementation of

[IPoint](../interfaces/IPoint.md).[x](../interfaces/IPoint.md#x)

#### Defined in

[src/leafer/packages/math/src/Point.ts:8](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/math/src/Point.ts#L8)

___

### y

• **y**: `number`

#### Implementation of

[IPoint](../interfaces/IPoint.md).[y](../interfaces/IPoint.md#y)

#### Defined in

[src/leafer/packages/math/src/Point.ts:9](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/math/src/Point.ts#L9)

## Methods

### set

▸ **set**(`x?`, `y?`): [`IPoint`](../interfaces/IPoint.md)

#### Parameters

| Name | Type                                                      |
| :--- | :-------------------------------------------------------- |
| `x?` | `number` \\| [`IPointData`](../interfaces/IPointData.md) |
| `y?` | `number`                                                  |

#### Returns

[`IPoint`](../interfaces/IPoint.md)

#### Implementation of

[IPoint](../interfaces/IPoint.md).[set](../interfaces/IPoint.md#set)

#### Defined in

[src/leafer/packages/math/src/Point.ts:15](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/math/src/Point.ts#L15)

___

### get

▸ **get**(): [`IPointData`](../interfaces/IPointData.md)

#### Returns

[`IPointData`](../interfaces/IPointData.md)

#### Implementation of

[IPoint](../interfaces/IPoint.md).[get](../interfaces/IPoint.md#get)

#### Defined in

[src/leafer/packages/math/src/Point.ts:20](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/math/src/Point.ts#L20)

___

### clone

▸ **clone**(): [`IPoint`](../interfaces/IPoint.md)

#### Returns

[`IPoint`](../interfaces/IPoint.md)

#### Implementation of

[IPoint](../interfaces/IPoint.md).[clone](../interfaces/IPoint.md#clone)

#### Defined in

[src/leafer/packages/math/src/Point.ts:26](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/math/src/Point.ts#L26)

___

### move

▸ **move**(`x`, `y?`): [`IPoint`](../interfaces/IPoint.md)

#### Parameters

| Name | Type                                                      |
| :--- | :-------------------------------------------------------- |
| `x`  | `number` \\| [`IPointData`](../interfaces/IPointData.md) |
| `y?` | `number`                                                  |

#### Returns

[`IPoint`](../interfaces/IPoint.md)

#### Implementation of

[IPoint](../interfaces/IPoint.md).[move](../interfaces/IPoint.md#move)

#### Defined in

[src/leafer/packages/math/src/Point.ts:31](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/math/src/Point.ts#L31)

___

### scale

▸ **scale**(`scaleX`, `scaleY?`): [`IPoint`](../interfaces/IPoint.md)

#### Parameters

| Name      | Type     |
| :-------- | :------- |
| `scaleX`  | `number` |
| `scaleY?` | `number` |

#### Returns

[`IPoint`](../interfaces/IPoint.md)

#### Implementation of

[IPoint](../interfaces/IPoint.md).[scale](../interfaces/IPoint.md#scale)

#### Defined in

[src/leafer/packages/math/src/Point.ts:36](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/math/src/Point.ts#L36)

___

### scaleOf

▸ **scaleOf**(`origin`, `scaleX`, `scaleY?`): [`IPoint`](../interfaces/IPoint.md)

#### Parameters

| Name      | Type                                        |
| :-------- | :------------------------------------------ |
| `origin`  | [`IPointData`](../interfaces/IPointData.md) |
| `scaleX`  | `number`                                    |
| `scaleY?` | `number`                                    |

#### Returns

[`IPoint`](../interfaces/IPoint.md)

#### Implementation of

[IPoint](../interfaces/IPoint.md).[scaleOf](../interfaces/IPoint.md#scaleof)

#### Defined in

[src/leafer/packages/math/src/Point.ts:41](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/math/src/Point.ts#L41)

___

### rotate

▸ **rotate**(`rotation`, `origin?`): [`IPoint`](../interfaces/IPoint.md)

#### Parameters

| Name       | Type                                        |
| :--------- | :------------------------------------------ |
| `rotation` | `number`                                    |
| `origin?`  | [`IPointData`](../interfaces/IPointData.md) |

#### Returns

[`IPoint`](../interfaces/IPoint.md)

#### Implementation of

[IPoint](../interfaces/IPoint.md).[rotate](../interfaces/IPoint.md#rotate)

#### Defined in

[src/leafer/packages/math/src/Point.ts:46](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/math/src/Point.ts#L46)

___

### rotateOf

▸ **rotateOf**(`origin`, `rotation`): [`IPoint`](../interfaces/IPoint.md)

#### Parameters

| Name       | Type                                        |
| :--------- | :------------------------------------------ |
| `origin`   | [`IPointData`](../interfaces/IPointData.md) |
| `rotation` | `number`                                    |

#### Returns

[`IPoint`](../interfaces/IPoint.md)

#### Implementation of

[IPoint](../interfaces/IPoint.md).[rotateOf](../interfaces/IPoint.md#rotateof)

#### Defined in

[src/leafer/packages/math/src/Point.ts:51](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/math/src/Point.ts#L51)

___

### getRotation

▸ **getRotation**(`origin`, `to`, `toOrigin?`): `number`

#### Parameters

| Name        | Type                                        |
| :---------- | :------------------------------------------ |
| `origin`    | [`IPointData`](../interfaces/IPointData.md) |
| `to`        | [`IPointData`](../interfaces/IPointData.md) |
| `toOrigin?` | [`IPointData`](../interfaces/IPointData.md) |

#### Returns

`number`

#### Implementation of

[IPoint](../interfaces/IPoint.md).[getRotation](../interfaces/IPoint.md#getrotation)

#### Defined in

[src/leafer/packages/math/src/Point.ts:56](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/math/src/Point.ts#L56)

___

### toInnerOf

▸ **toInnerOf**(`matrix`, `to?`): [`IPoint`](../interfaces/IPoint.md)

#### Parameters

| Name     | Type                                          |
| :------- | :-------------------------------------------- |
| `matrix` | [`IMatrixData`](../interfaces/IMatrixData.md) |
| `to?`    | [`IPointData`](../interfaces/IPointData.md)   |

#### Returns

[`IPoint`](../interfaces/IPoint.md)

#### Implementation of

[IPoint](../interfaces/IPoint.md).[toInnerOf](../interfaces/IPoint.md#toinnerof)

#### Defined in

[src/leafer/packages/math/src/Point.ts:61](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/math/src/Point.ts#L61)

___

### toOuterOf

▸ **toOuterOf**(`matrix`, `to?`): [`IPoint`](../interfaces/IPoint.md)

#### Parameters

| Name     | Type                                          |
| :------- | :-------------------------------------------- |
| `matrix` | [`IMatrixData`](../interfaces/IMatrixData.md) |
| `to?`    | [`IPointData`](../interfaces/IPointData.md)   |

#### Returns

[`IPoint`](../interfaces/IPoint.md)

#### Implementation of

[IPoint](../interfaces/IPoint.md).[toOuterOf](../interfaces/IPoint.md#toouterof)

#### Defined in

[src/leafer/packages/math/src/Point.ts:66](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/math/src/Point.ts#L66)

___

### getCenter

▸ **getCenter**(`to`): [`IPoint`](../interfaces/IPoint.md)

#### Parameters

| Name | Type                                        |
| :--- | :------------------------------------------ |
| `to` | [`IPointData`](../interfaces/IPointData.md) |

#### Returns

[`IPoint`](../interfaces/IPoint.md)

#### Implementation of

[IPoint](../interfaces/IPoint.md).[getCenter](../interfaces/IPoint.md#getcenter)

#### Defined in

[src/leafer/packages/math/src/Point.ts:72](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/math/src/Point.ts#L72)

___

### getDistance

▸ **getDistance**(`to`): `number`

#### Parameters

| Name | Type                                        |
| :--- | :------------------------------------------ |
| `to` | [`IPointData`](../interfaces/IPointData.md) |

#### Returns

`number`

#### Implementation of

[IPoint](../interfaces/IPoint.md).[getDistance](../interfaces/IPoint.md#getdistance)

#### Defined in

[src/leafer/packages/math/src/Point.ts:76](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/math/src/Point.ts#L76)

___

### getDistancePoint

▸ **getDistancePoint**(`to`, `distance`, `changeTo?`, `fromTo?`): [`IPoint`](../interfaces/IPoint.md)

#### Parameters

| Name        | Type                                        |
| :---------- | :------------------------------------------ |
| `to`        | [`IPointData`](../interfaces/IPointData.md) |
| `distance`  | `number`                                    |
| `changeTo?` | `boolean`                                   |
| `fromTo?`   | `boolean`                                   |

#### Returns

[`IPoint`](../interfaces/IPoint.md)

#### Implementation of

[IPoint](../interfaces/IPoint.md).[getDistancePoint](../interfaces/IPoint.md#getdistancepoint)

#### Defined in

[src/leafer/packages/math/src/Point.ts:80](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/math/src/Point.ts#L80)

___

### getAngle

▸ **getAngle**(`to`): `number`

#### Parameters

| Name | Type                                        |
| :--- | :------------------------------------------ |
| `to` | [`IPointData`](../interfaces/IPointData.md) |

#### Returns

`number`

#### Implementation of

[IPoint](../interfaces/IPoint.md).[getAngle](../interfaces/IPoint.md#getangle)

#### Defined in

[src/leafer/packages/math/src/Point.ts:84](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/math/src/Point.ts#L84)

___

### getAtan2

▸ **getAtan2**(`to`): `number`

#### Parameters

| Name | Type                                        |
| :--- | :------------------------------------------ |
| `to` | [`IPointData`](../interfaces/IPointData.md) |

#### Returns

`number`

#### Implementation of

[IPoint](../interfaces/IPoint.md).[getAtan2](../interfaces/IPoint.md#getatan2)

#### Defined in

[src/leafer/packages/math/src/Point.ts:88](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/math/src/Point.ts#L88)

___

### isSame

▸ **isSame**(`point`, `quick?`): `boolean`

#### Parameters

| Name     | Type                                        |
| :------- | :------------------------------------------ |
| `point`  | [`IPointData`](../interfaces/IPointData.md) |
| `quick?` | `boolean`                                   |

#### Returns

`boolean`

#### Implementation of

[IPoint](../interfaces/IPoint.md).[isSame](../interfaces/IPoint.md#issame)

#### Defined in

[src/leafer/packages/math/src/Point.ts:92](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/math/src/Point.ts#L92)

___

### reset

▸ **reset**(): [`IPoint`](../interfaces/IPoint.md)

#### Returns

[`IPoint`](../interfaces/IPoint.md)

#### Implementation of

[IPoint](../interfaces/IPoint.md).[reset](../interfaces/IPoint.md#reset)

#### Defined in

[src/leafer/packages/math/src/Point.ts:96](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/math/src/Point.ts#L96)
