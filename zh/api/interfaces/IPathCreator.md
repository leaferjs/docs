# Interface: IPathCreator

## Hierarchy

- [`IPathDrawer`](IPathDrawer.md)

  ↳ **`IPathCreator`**

  ↳↳ [`IPen`](IPen.md)

## Implemented by

- [`PathCreator`](../classes/PathCreator.md)

## Table of contents

### Properties

- [path](IPathCreator.md#path)
- [\_\_path](IPathCreator.md#__path)

### Methods

- [beginPath](IPathCreator.md#beginpath)
- [moveTo](IPathCreator.md#moveto)
- [lineTo](IPathCreator.md#lineto)
- [bezierCurveTo](IPathCreator.md#beziercurveto)
- [quadraticCurveTo](IPathCreator.md#quadraticcurveto)
- [closePath](IPathCreator.md#closepath)
- [arc](IPathCreator.md#arc)
- [arcTo](IPathCreator.md#arcto)
- [ellipse](IPathCreator.md#ellipse)
- [rect](IPathCreator.md#rect)
- [roundRect](IPathCreator.md#roundrect)
- [drawEllipse](IPathCreator.md#drawellipse)
- [drawArc](IPathCreator.md#drawarc)
- [drawPoints](IPathCreator.md#drawpoints)
- [clearPath](IPathCreator.md#clearpath)

## Properties

### path

• **path**: [`IPathCommandData`](../modules.md#ipathcommanddata)

#### Defined in

[src/leafer/packages/interface/src/path/IPathDrawer.ts:21](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/path/IPathDrawer.ts#L21)

___

### \_\_path

• **\_\_path**: [`IPathCommandData`](../modules.md#ipathcommanddata)

#### Defined in

[src/leafer/packages/interface/src/path/IPathDrawer.ts:22](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/path/IPathDrawer.ts#L22)

## Methods

### beginPath

▸ **beginPath**(): [`IPathCreator`](IPathCreator.md)

#### Returns

[`IPathCreator`](IPathCreator.md)

#### Overrides

[IPathDrawer](IPathDrawer.md).[beginPath](IPathDrawer.md#beginpath)

#### Defined in

[src/leafer/packages/interface/src/path/IPathDrawer.ts:24](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/path/IPathDrawer.ts#L24)

___

### moveTo

▸ **moveTo**(`x`, `y`): [`IPathCreator`](IPathCreator.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `x` | `number` |
| `y` | `number` |

#### Returns

[`IPathCreator`](IPathCreator.md)

#### Overrides

[IPathDrawer](IPathDrawer.md).[moveTo](IPathDrawer.md#moveto)

#### Defined in

[src/leafer/packages/interface/src/path/IPathDrawer.ts:26](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/path/IPathDrawer.ts#L26)

___

### lineTo

▸ **lineTo**(`x`, `y`): [`IPathCreator`](IPathCreator.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `x` | `number` |
| `y` | `number` |

#### Returns

[`IPathCreator`](IPathCreator.md)

#### Overrides

[IPathDrawer](IPathDrawer.md).[lineTo](IPathDrawer.md#lineto)

#### Defined in

[src/leafer/packages/interface/src/path/IPathDrawer.ts:27](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/path/IPathDrawer.ts#L27)

___

### bezierCurveTo

▸ **bezierCurveTo**(`x1`, `y1`, `x2`, `y2`, `x`, `y`): [`IPathCreator`](IPathCreator.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `x1` | `number` |
| `y1` | `number` |
| `x2` | `number` |
| `y2` | `number` |
| `x` | `number` |
| `y` | `number` |

#### Returns

[`IPathCreator`](IPathCreator.md)

#### Overrides

[IPathDrawer](IPathDrawer.md).[bezierCurveTo](IPathDrawer.md#beziercurveto)

#### Defined in

[src/leafer/packages/interface/src/path/IPathDrawer.ts:28](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/path/IPathDrawer.ts#L28)

___

### quadraticCurveTo

▸ **quadraticCurveTo**(`x1`, `y1`, `x`, `y`): [`IPathCreator`](IPathCreator.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `x1` | `number` |
| `y1` | `number` |
| `x` | `number` |
| `y` | `number` |

#### Returns

[`IPathCreator`](IPathCreator.md)

#### Overrides

[IPathDrawer](IPathDrawer.md).[quadraticCurveTo](IPathDrawer.md#quadraticcurveto)

#### Defined in

[src/leafer/packages/interface/src/path/IPathDrawer.ts:29](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/path/IPathDrawer.ts#L29)

___

### closePath

▸ **closePath**(): [`IPathCreator`](IPathCreator.md)

#### Returns

[`IPathCreator`](IPathCreator.md)

#### Overrides

[IPathDrawer](IPathDrawer.md).[closePath](IPathDrawer.md#closepath)

#### Defined in

[src/leafer/packages/interface/src/path/IPathDrawer.ts:30](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/path/IPathDrawer.ts#L30)

___

### arc

▸ **arc**(`x`, `y`, `radius`, `startAngle?`, `endAngle?`, `anticlockwise?`): [`IPathCreator`](IPathCreator.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `x` | `number` |
| `y` | `number` |
| `radius` | `number` |
| `startAngle?` | `number` |
| `endAngle?` | `number` |
| `anticlockwise?` | `boolean` |

#### Returns

[`IPathCreator`](IPathCreator.md)

#### Overrides

[IPathDrawer](IPathDrawer.md).[arc](IPathDrawer.md#arc)

#### Defined in

[src/leafer/packages/interface/src/path/IPathDrawer.ts:32](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/path/IPathDrawer.ts#L32)

___

### arcTo

▸ **arcTo**(`x1`, `y1`, `x2`, `y2`, `radius`): [`IPathCreator`](IPathCreator.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `x1` | `number` |
| `y1` | `number` |
| `x2` | `number` |
| `y2` | `number` |
| `radius` | `number` |

#### Returns

[`IPathCreator`](IPathCreator.md)

#### Overrides

[IPathDrawer](IPathDrawer.md).[arcTo](IPathDrawer.md#arcto)

#### Defined in

[src/leafer/packages/interface/src/path/IPathDrawer.ts:33](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/path/IPathDrawer.ts#L33)

___

### ellipse

▸ **ellipse**(`x`, `y`, `radiusX`, `radiusY`, `rotation?`, `startAngle?`, `endAngle?`, `anticlockwise?`): [`IPathCreator`](IPathCreator.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `x` | `number` |
| `y` | `number` |
| `radiusX` | `number` |
| `radiusY` | `number` |
| `rotation?` | `number` |
| `startAngle?` | `number` |
| `endAngle?` | `number` |
| `anticlockwise?` | `boolean` |

#### Returns

[`IPathCreator`](IPathCreator.md)

#### Overrides

[IPathDrawer](IPathDrawer.md).[ellipse](IPathDrawer.md#ellipse)

#### Defined in

[src/leafer/packages/interface/src/path/IPathDrawer.ts:34](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/path/IPathDrawer.ts#L34)

___

### rect

▸ **rect**(`x`, `y`, `width`, `height`): [`IPathCreator`](IPathCreator.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `x` | `number` |
| `y` | `number` |
| `width` | `number` |
| `height` | `number` |

#### Returns

[`IPathCreator`](IPathCreator.md)

#### Overrides

[IPathDrawer](IPathDrawer.md).[rect](IPathDrawer.md#rect)

#### Defined in

[src/leafer/packages/interface/src/path/IPathDrawer.ts:36](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/path/IPathDrawer.ts#L36)

___

### roundRect

▸ **roundRect**(`x`, `y`, `width`, `height`, `radius?`): [`IPathCreator`](IPathCreator.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `x` | `number` |
| `y` | `number` |
| `width` | `number` |
| `height` | `number` |
| `radius?` | `number` \| `number`[] |

#### Returns

[`IPathCreator`](IPathCreator.md)

#### Overrides

[IPathDrawer](IPathDrawer.md).[roundRect](IPathDrawer.md#roundrect)

#### Defined in

[src/leafer/packages/interface/src/path/IPathDrawer.ts:37](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/path/IPathDrawer.ts#L37)

___

### drawEllipse

▸ **drawEllipse**(`x`, `y`, `radiusX`, `radiusY`, `rotation?`, `startAngle?`, `endAngle?`, `anticlockwise?`): [`IPathCreator`](IPathCreator.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `x` | `number` |
| `y` | `number` |
| `radiusX` | `number` |
| `radiusY` | `number` |
| `rotation?` | `number` |
| `startAngle?` | `number` |
| `endAngle?` | `number` |
| `anticlockwise?` | `boolean` |

#### Returns

[`IPathCreator`](IPathCreator.md)

#### Defined in

[src/leafer/packages/interface/src/path/IPathDrawer.ts:40](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/path/IPathDrawer.ts#L40)

___

### drawArc

▸ **drawArc**(`x`, `y`, `radius`, `startAngle?`, `endAngle?`, `anticlockwise?`): [`IPathCreator`](IPathCreator.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `x` | `number` |
| `y` | `number` |
| `radius` | `number` |
| `startAngle?` | `number` |
| `endAngle?` | `number` |
| `anticlockwise?` | `boolean` |

#### Returns

[`IPathCreator`](IPathCreator.md)

#### Defined in

[src/leafer/packages/interface/src/path/IPathDrawer.ts:41](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/path/IPathDrawer.ts#L41)

___

### drawPoints

▸ **drawPoints**(`points`, `curve?`, `close?`): [`IPathCreator`](IPathCreator.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `points` | `number`[] \| [`IPointData`](IPointData.md)[] |
| `curve?` | `number` \| `boolean` |
| `close?` | `boolean` |

#### Returns

[`IPathCreator`](IPathCreator.md)

#### Defined in

[src/leafer/packages/interface/src/path/IPathDrawer.ts:42](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/path/IPathDrawer.ts#L42)

___

### clearPath

▸ **clearPath**(): [`IPathCreator`](IPathCreator.md)

#### Returns

[`IPathCreator`](IPathCreator.md)

#### Defined in

[src/leafer/packages/interface/src/path/IPathDrawer.ts:44](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/path/IPathDrawer.ts#L44)
