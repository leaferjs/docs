# Interface: IGradientPaint

## Hierarchy

- [`IPaintBase`](IPaintBase.md)

  ↳ **`IGradientPaint`**

  ↳↳ [`IStrokeGradientPaint`](IStrokeGradientPaint.md)

## Table of contents

### Properties

- [blendMode](IGradientPaint.md#blendmode)
- [visible](IGradientPaint.md#visible)
- [opacity](IGradientPaint.md#opacity)
- [style](IGradientPaint.md#style)
- [editing](IGradientPaint.md#editing)
- [scaleFixed](IGradientPaint.md#scalefixed)
- [type](IGradientPaint.md#type)
- [from](IGradientPaint.md#from)
- [to](IGradientPaint.md#to)
- [rotation](IGradientPaint.md#rotation)
- [stretch](IGradientPaint.md#stretch)
- [stops](IGradientPaint.md#stops)

## Properties

### blendMode

• `Optional` **blendMode**: [`IBlendMode`](../modules.md#iblendmode)

#### Inherited from

[IPaintBase](IPaintBase.md).[blendMode](IPaintBase.md#blendmode)

#### Defined in

[src/ui/packages/interface/src/type/IType.ts:17](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/interface/src/type/IType.ts#L17)

___

### visible

• `Optional` **visible**: `boolean`

#### Inherited from

[IPaintBase](IPaintBase.md).[visible](IPaintBase.md#visible)

#### Defined in

[src/ui/packages/interface/src/type/IType.ts:18](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/interface/src/type/IType.ts#L18)

___

### opacity

• `Optional` **opacity**: `number`

#### Inherited from

[IPaintBase](IPaintBase.md).[opacity](IPaintBase.md#opacity)

#### Defined in

[src/ui/packages/interface/src/type/IType.ts:19](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/interface/src/type/IType.ts#L19)

___

### style

• `Optional` **style**: [`IStrokeStyle`](IStrokeStyle.md)

#### Inherited from

[IPaintBase](IPaintBase.md).[style](IPaintBase.md#style)

#### Defined in

[src/ui/packages/interface/src/type/IType.ts:21](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/interface/src/type/IType.ts#L21)

___

### editing

• `Optional` **editing**: `boolean`

#### Inherited from

[IPaintBase](IPaintBase.md).[editing](IPaintBase.md#editing)

#### Defined in

[src/ui/packages/interface/src/type/IType.ts:22](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/interface/src/type/IType.ts#L22)

___

### scaleFixed

• `Optional` **scaleFixed**: [`IScaleFixed`](../modules.md#iscalefixed)

#### Inherited from

[IPaintBase](IPaintBase.md).[scaleFixed](IPaintBase.md#scalefixed)

#### Defined in

[src/ui/packages/interface/src/type/IType.ts:23](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/interface/src/type/IType.ts#L23)

___

### type

• **type**: [`IGradientType`](../modules.md#igradienttype)

#### Overrides

[IPaintBase](IPaintBase.md).[type](IPaintBase.md#type)

#### Defined in

[src/ui/packages/interface/src/type/IType.ts:57](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/interface/src/type/IType.ts#L57)

___

### from

• `Optional` **from**: [`IUnitPointData`](IUnitPointData.md) \| [`IDirection`](../modules.md#idirection)

#### Defined in

[src/ui/packages/interface/src/type/IType.ts:58](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/interface/src/type/IType.ts#L58)

___

### to

• `Optional` **to**: [`IUnitPointData`](IUnitPointData.md) \| [`IDirection`](../modules.md#idirection)

#### Defined in

[src/ui/packages/interface/src/type/IType.ts:59](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/interface/src/type/IType.ts#L59)

___

### rotation

• `Optional` **rotation**: `number`

#### Defined in

[src/ui/packages/interface/src/type/IType.ts:60](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/interface/src/type/IType.ts#L60)

___

### stretch

• `Optional` **stretch**: `number`

#### Defined in

[src/ui/packages/interface/src/type/IType.ts:61](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/interface/src/type/IType.ts#L61)

___

### stops

• **stops**: `string`[] \| [`IColorStop`](IColorStop.md)[]

#### Defined in

[src/ui/packages/interface/src/type/IType.ts:62](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/interface/src/type/IType.ts#L62)
