# Interface: IPathCommandNodeBase

## Hierarchy

- **`IPathCommandNodeBase`**

  ↳ [`MoveToCommandNode`](MoveToCommandNode.md)

  ↳ [`LineToCommandNode`](LineToCommandNode.md)

  ↳ [`BezierCurveToCommandNode`](BezierCurveToCommandNode.md)

## Table of contents

### Properties

- [name](IPathCommandNodeBase.md#name)
- [x](IPathCommandNodeBase.md#x)
- [y](IPathCommandNodeBase.md#y)
- [a](IPathCommandNodeBase.md#a)
- [b](IPathCommandNodeBase.md#b)
- [ab](IPathCommandNodeBase.md#ab)

## Properties

### name

• **name**: `"M^"` \| `"L^"` \| `"C^"` \| `"Z^"`

#### Defined in

[src/leafer/packages/interface/src/path/IPathCommand.ts:95](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/path/IPathCommand.ts#L95)

___

### x

• **x**: `number`

#### Defined in

[src/leafer/packages/interface/src/path/IPathCommand.ts:96](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/path/IPathCommand.ts#L96)

___

### y

• **y**: `number`

#### Defined in

[src/leafer/packages/interface/src/path/IPathCommand.ts:97](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/path/IPathCommand.ts#L97)

___

### a

• `Optional` **a**: [`IPointData`](IPointData.md)

#### Defined in

[src/leafer/packages/interface/src/path/IPathCommand.ts:98](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/path/IPathCommand.ts#L98)

___

### b

• `Optional` **b**: [`IPointData`](IPointData.md)

#### Defined in

[src/leafer/packages/interface/src/path/IPathCommand.ts:99](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/path/IPathCommand.ts#L99)

___

### ab

• `Optional` **ab**: [`PathNodeHandleType`](../enums/PathNodeHandleType.md)

#### Defined in

[src/leafer/packages/interface/src/path/IPathCommand.ts:100](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/path/IPathCommand.ts#L100)
