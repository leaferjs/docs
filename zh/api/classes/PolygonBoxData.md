# Class: PolygonBoxData

## Hierarchy

- [`BoxData`](BoxData.md)

  ↳ **`PolygonBoxData`**

## Implements

- [`IPolygonBoxData`](../interfaces/IPolygonBoxData.md)

## Table of contents

### Constructors

- [constructor](PolygonBoxData.md#constructor)

### Properties

- [\_\_input](PolygonBoxData.md#__input)
- [\_\_middle](PolygonBoxData.md#__middle)
- [\_\_single](PolygonBoxData.md#__single)
- [\_\_naturalWidth](PolygonBoxData.md#__naturalwidth)
- [\_\_naturalHeight](PolygonBoxData.md#__naturalheight)
- [\_\_pathForRender](PolygonBoxData.md#__pathforrender)
- [\_\_useStroke](PolygonBoxData.md#__usestroke)
- [\_\_leaf](PolygonBoxData.md#__leaf)
- [\_\_blendLayer](PolygonBoxData.md#__blendlayer)
- [\_\_isFills](PolygonBoxData.md#__isfills)
- [\_\_isStrokes](PolygonBoxData.md#__isstrokes)
- [\_\_hasMultiStrokeStyle](PolygonBoxData.md#__hasmultistrokestyle)
- [\_\_isAlphaPixelFill](PolygonBoxData.md#__isalphapixelfill)
- [\_\_isAlphaPixelStroke](PolygonBoxData.md#__isalphapixelstroke)
- [\_\_isTransparentFill](PolygonBoxData.md#__istransparentfill)
- [\_\_isTransparentStroke](PolygonBoxData.md#__istransparentstroke)
- [\_\_needComputePaint](PolygonBoxData.md#__needcomputepaint)
- [\_visible](PolygonBoxData.md#_visible)
- [\_width](PolygonBoxData.md#_width)
- [\_height](PolygonBoxData.md#_height)
- [\_fill](PolygonBoxData.md#_fill)
- [\_stroke](PolygonBoxData.md#_stroke)
- [\_path](PolygonBoxData.md#_path)
- [\_shadow](PolygonBoxData.md#_shadow)
- [\_innerShadow](PolygonBoxData.md#_innershadow)

### Accessors

- [\_\_usePathBox](PolygonBoxData.md#__usepathbox)
- [\_\_useNaturalRatio](PolygonBoxData.md#__usenaturalratio)
- [\_\_isLinePath](PolygonBoxData.md#__islinepath)
- [\_\_blendMode](PolygonBoxData.md#__blendmode)
- [\_\_boxStroke](PolygonBoxData.md#__boxstroke)
- [\_\_drawAfterFill](PolygonBoxData.md#__drawafterfill)
- [\_\_clipAfterFill](PolygonBoxData.md#__clipafterfill)
- [scale](PolygonBoxData.md#scale)
- [\_\_strokeWidth](PolygonBoxData.md#__strokewidth)
- [\_\_maxStrokeWidth](PolygonBoxData.md#__maxstrokewidth)
- [\_\_hasMultiPaint](PolygonBoxData.md#__hasmultipaint)
- [\_\_hasSurface](PolygonBoxData.md#__hassurface)
- [\_\_autoWidth](PolygonBoxData.md#__autowidth)
- [\_\_autoHeight](PolygonBoxData.md#__autoheight)
- [\_\_autoSide](PolygonBoxData.md#__autoside)
- [\_\_autoSize](PolygonBoxData.md#__autosize)

### Methods

- [\_\_get](PolygonBoxData.md#__get)
- [\_\_getData](PolygonBoxData.md#__getdata)
- [\_\_setInput](PolygonBoxData.md#__setinput)
- [\_\_getInput](PolygonBoxData.md#__getinput)
- [\_\_removeInput](PolygonBoxData.md#__removeinput)
- [\_\_getInputData](PolygonBoxData.md#__getinputdata)
- [\_\_setMiddle](PolygonBoxData.md#__setmiddle)
- [\_\_getMiddle](PolygonBoxData.md#__getmiddle)
- [\_\_checkSingle](PolygonBoxData.md#__checksingle)
- [\_\_removeNaturalSize](PolygonBoxData.md#__removenaturalsize)
- [destroy](PolygonBoxData.md#destroy)
- [setVisible](PolygonBoxData.md#setvisible)
- [setWidth](PolygonBoxData.md#setwidth)
- [setHeight](PolygonBoxData.md#setheight)
- [setFill](PolygonBoxData.md#setfill)
- [setStroke](PolygonBoxData.md#setstroke)
- [setPath](PolygonBoxData.md#setpath)
- [setShadow](PolygonBoxData.md#setshadow)
- [setInnerShadow](PolygonBoxData.md#setinnershadow)
- [setFilter](PolygonBoxData.md#setfilter)
- [\_\_computePaint](PolygonBoxData.md#__computepaint)
- [\_\_getRealStrokeWidth](PolygonBoxData.md#__getrealstrokewidth)
- [\_\_setPaint](PolygonBoxData.md#__setpaint)
- [\_\_removePaint](PolygonBoxData.md#__removepaint)

## Constructors

### constructor

• **new PolygonBoxData**(`leaf`): [`PolygonBoxData`](PolygonBoxData.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `leaf` | [`ILeaf`](../interfaces/ILeaf.md) |

#### Returns

[`PolygonBoxData`](PolygonBoxData.md)

#### Inherited from

[BoxData](BoxData.md).[constructor](BoxData.md#constructor)

#### Defined in

[src/leafer/packages/display-module/data/src/LeafData.ts:36](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/display-module/data/src/LeafData.ts#L36)

## Properties

### \_\_input

• **\_\_input**: [`IObject`](../interfaces/IObject.md)

#### Implementation of

[IPolygonBoxData](../interfaces/IPolygonBoxData.md).[__input](../interfaces/IPolygonBoxData.md#__input)

#### Inherited from

[BoxData](BoxData.md).[__input](BoxData.md#__input)

#### Defined in

[src/leafer/packages/display-module/data/src/LeafData.ts:8](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/display-module/data/src/LeafData.ts#L8)

___

### \_\_middle

• **\_\_middle**: [`IObject`](../interfaces/IObject.md)

#### Implementation of

[IPolygonBoxData](../interfaces/IPolygonBoxData.md).[__middle](../interfaces/IPolygonBoxData.md#__middle)

#### Inherited from

[BoxData](BoxData.md).[__middle](BoxData.md#__middle)

#### Defined in

[src/leafer/packages/display-module/data/src/LeafData.ts:9](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/display-module/data/src/LeafData.ts#L9)

___

### \_\_single

• **\_\_single**: `boolean`

#### Implementation of

[IPolygonBoxData](../interfaces/IPolygonBoxData.md).[__single](../interfaces/IPolygonBoxData.md#__single)

#### Inherited from

[BoxData](BoxData.md).[__single](BoxData.md#__single)

#### Defined in

[src/leafer/packages/display-module/data/src/LeafData.ts:11](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/display-module/data/src/LeafData.ts#L11)

___

### \_\_naturalWidth

• `Optional` **\_\_naturalWidth**: `number`

#### Implementation of

[IPolygonBoxData](../interfaces/IPolygonBoxData.md).[__naturalWidth](../interfaces/IPolygonBoxData.md#__naturalwidth)

#### Inherited from

[BoxData](BoxData.md).[__naturalWidth](BoxData.md#__naturalwidth)

#### Defined in

[src/leafer/packages/display-module/data/src/LeafData.ts:13](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/display-module/data/src/LeafData.ts#L13)

___

### \_\_naturalHeight

• `Optional` **\_\_naturalHeight**: `number`

#### Implementation of

[IPolygonBoxData](../interfaces/IPolygonBoxData.md).[__naturalHeight](../interfaces/IPolygonBoxData.md#__naturalheight)

#### Inherited from

[BoxData](BoxData.md).[__naturalHeight](BoxData.md#__naturalheight)

#### Defined in

[src/leafer/packages/display-module/data/src/LeafData.ts:14](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/display-module/data/src/LeafData.ts#L14)

___

### \_\_pathForRender

• `Optional` **\_\_pathForRender**: [`IPathCommandData`](../modules.md#ipathcommanddata)

#### Implementation of

[IPolygonBoxData](../interfaces/IPolygonBoxData.md).[__pathForRender](../interfaces/IPolygonBoxData.md#__pathforrender)

#### Inherited from

[BoxData](BoxData.md).[__pathForRender](BoxData.md#__pathforrender)

#### Defined in

[src/leafer/packages/display-module/data/src/LeafData.ts:16](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/display-module/data/src/LeafData.ts#L16)

___

### \_\_useStroke

• `Optional` **\_\_useStroke**: `boolean`

#### Implementation of

[IPolygonBoxData](../interfaces/IPolygonBoxData.md).[__useStroke](../interfaces/IPolygonBoxData.md#__usestroke)

#### Inherited from

[BoxData](BoxData.md).[__useStroke](BoxData.md#__usestroke)

#### Defined in

[src/leafer/packages/display-module/data/src/LeafData.ts:18](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/display-module/data/src/LeafData.ts#L18)

___

### \_\_leaf

• **\_\_leaf**: [`IUI`](../interfaces/IUI.md)

#### Implementation of

[IPolygonBoxData](../interfaces/IPolygonBoxData.md).[__leaf](../interfaces/IPolygonBoxData.md#__leaf)

#### Inherited from

[BoxData](BoxData.md).[__leaf](BoxData.md#__leaf)

#### Defined in

[src/ui/packages/display-module/data/src/UIData.ts:14](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/display-module/data/src/UIData.ts#L14)

___

### \_\_blendLayer

• `Optional` **\_\_blendLayer**: `boolean`

#### Implementation of

[IPolygonBoxData](../interfaces/IPolygonBoxData.md).[__blendLayer](../interfaces/IPolygonBoxData.md#__blendlayer)

#### Inherited from

[BoxData](BoxData.md).[__blendLayer](BoxData.md#__blendlayer)

#### Defined in

[src/ui/packages/display-module/data/src/UIData.ts:18](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/display-module/data/src/UIData.ts#L18)

___

### \_\_isFills

• `Optional` **\_\_isFills**: `boolean`

#### Implementation of

[IPolygonBoxData](../interfaces/IPolygonBoxData.md).[__isFills](../interfaces/IPolygonBoxData.md#__isfills)

#### Inherited from

[BoxData](BoxData.md).[__isFills](BoxData.md#__isfills)

#### Defined in

[src/ui/packages/display-module/data/src/UIData.ts:20](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/display-module/data/src/UIData.ts#L20)

___

### \_\_isStrokes

• `Optional` **\_\_isStrokes**: `boolean`

#### Implementation of

[IPolygonBoxData](../interfaces/IPolygonBoxData.md).[__isStrokes](../interfaces/IPolygonBoxData.md#__isstrokes)

#### Inherited from

[BoxData](BoxData.md).[__isStrokes](BoxData.md#__isstrokes)

#### Defined in

[src/ui/packages/display-module/data/src/UIData.ts:21](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/display-module/data/src/UIData.ts#L21)

___

### \_\_hasMultiStrokeStyle

• `Optional` **\_\_hasMultiStrokeStyle**: `number`

#### Implementation of

[IPolygonBoxData](../interfaces/IPolygonBoxData.md).[__hasMultiStrokeStyle](../interfaces/IPolygonBoxData.md#__hasmultistrokestyle)

#### Inherited from

[BoxData](BoxData.md).[__hasMultiStrokeStyle](BoxData.md#__hasmultistrokestyle)

#### Defined in

[src/ui/packages/display-module/data/src/UIData.ts:27](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/display-module/data/src/UIData.ts#L27)

___

### \_\_isAlphaPixelFill

• `Optional` **\_\_isAlphaPixelFill**: `boolean`

#### Implementation of

[IPolygonBoxData](../interfaces/IPolygonBoxData.md).[__isAlphaPixelFill](../interfaces/IPolygonBoxData.md#__isalphapixelfill)

#### Inherited from

[BoxData](BoxData.md).[__isAlphaPixelFill](BoxData.md#__isalphapixelfill)

#### Defined in

[src/ui/packages/display-module/data/src/UIData.ts:31](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/display-module/data/src/UIData.ts#L31)

___

### \_\_isAlphaPixelStroke

• `Optional` **\_\_isAlphaPixelStroke**: `boolean`

#### Implementation of

[IPolygonBoxData](../interfaces/IPolygonBoxData.md).[__isAlphaPixelStroke](../interfaces/IPolygonBoxData.md#__isalphapixelstroke)

#### Inherited from

[BoxData](BoxData.md).[__isAlphaPixelStroke](BoxData.md#__isalphapixelstroke)

#### Defined in

[src/ui/packages/display-module/data/src/UIData.ts:32](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/display-module/data/src/UIData.ts#L32)

___

### \_\_isTransparentFill

• `Optional` **\_\_isTransparentFill**: `boolean`

#### Implementation of

[IPolygonBoxData](../interfaces/IPolygonBoxData.md).[__isTransparentFill](../interfaces/IPolygonBoxData.md#__istransparentfill)

#### Inherited from

[BoxData](BoxData.md).[__isTransparentFill](BoxData.md#__istransparentfill)

#### Defined in

[src/ui/packages/display-module/data/src/UIData.ts:34](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/display-module/data/src/UIData.ts#L34)

___

### \_\_isTransparentStroke

• `Optional` **\_\_isTransparentStroke**: `boolean`

#### Implementation of

[IPolygonBoxData](../interfaces/IPolygonBoxData.md).[__isTransparentStroke](../interfaces/IPolygonBoxData.md#__istransparentstroke)

#### Inherited from

[BoxData](BoxData.md).[__isTransparentStroke](BoxData.md#__istransparentstroke)

#### Defined in

[src/ui/packages/display-module/data/src/UIData.ts:35](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/display-module/data/src/UIData.ts#L35)

___

### \_\_needComputePaint

• **\_\_needComputePaint**: `boolean`

#### Implementation of

[IPolygonBoxData](../interfaces/IPolygonBoxData.md).[__needComputePaint](../interfaces/IPolygonBoxData.md#__needcomputepaint)

#### Inherited from

[BoxData](BoxData.md).[__needComputePaint](BoxData.md#__needcomputepaint)

#### Defined in

[src/ui/packages/display-module/data/src/UIData.ts:40](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/display-module/data/src/UIData.ts#L40)

___

### \_visible

• `Protected` `Optional` **\_visible**: `boolean`

#### Inherited from

[BoxData](BoxData.md).[_visible](BoxData.md#_visible)

#### Defined in

[src/ui/packages/display-module/data/src/UIData.ts:42](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/display-module/data/src/UIData.ts#L42)

___

### \_width

• `Protected` `Optional` **\_width**: `number`

#### Inherited from

[BoxData](BoxData.md).[_width](BoxData.md#_width)

#### Defined in

[src/ui/packages/display-module/data/src/UIData.ts:44](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/display-module/data/src/UIData.ts#L44)

___

### \_height

• `Protected` `Optional` **\_height**: `number`

#### Inherited from

[BoxData](BoxData.md).[_height](BoxData.md#_height)

#### Defined in

[src/ui/packages/display-module/data/src/UIData.ts:45](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/display-module/data/src/UIData.ts#L45)

___

### \_fill

• `Protected` `Optional` **\_fill**: [`IValue`](../modules.md#ivalue)

#### Inherited from

[BoxData](BoxData.md).[_fill](BoxData.md#_fill)

#### Defined in

[src/ui/packages/display-module/data/src/UIData.ts:47](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/display-module/data/src/UIData.ts#L47)

___

### \_stroke

• `Protected` `Optional` **\_stroke**: [`IValue`](../modules.md#ivalue)

#### Inherited from

[BoxData](BoxData.md).[_stroke](BoxData.md#_stroke)

#### Defined in

[src/ui/packages/display-module/data/src/UIData.ts:48](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/display-module/data/src/UIData.ts#L48)

___

### \_path

• `Protected` **\_path**: [`IPathCommandData`](../modules.md#ipathcommanddata)

#### Inherited from

[BoxData](BoxData.md).[_path](BoxData.md#_path)

#### Defined in

[src/ui/packages/display-module/data/src/UIData.ts:50](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/display-module/data/src/UIData.ts#L50)

___

### \_shadow

• `Protected` `Optional` **\_shadow**: [`IValue`](../modules.md#ivalue)

#### Inherited from

[BoxData](BoxData.md).[_shadow](BoxData.md#_shadow)

#### Defined in

[src/ui/packages/display-module/data/src/UIData.ts:52](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/display-module/data/src/UIData.ts#L52)

___

### \_innerShadow

• `Protected` `Optional` **\_innerShadow**: [`IValue`](../modules.md#ivalue)

#### Inherited from

[BoxData](BoxData.md).[_innerShadow](BoxData.md#_innershadow)

#### Defined in

[src/ui/packages/display-module/data/src/UIData.ts:53](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/display-module/data/src/UIData.ts#L53)

## Accessors

### \_\_usePathBox

• `get` **__usePathBox**(): `boolean`

#### Returns

`boolean`

#### Implementation of

[IPolygonBoxData](../interfaces/IPolygonBoxData.md).[__usePathBox](../interfaces/IPolygonBoxData.md#__usepathbox)

#### Overrides

BoxData.\_\_usePathBox

#### Defined in

[src/in/packages/box/src/data/PolygonBoxData.ts:7](https://github.com/leaferjs/leafer-in/blob/d97f6888a45310d40717e43f47796d4f7d0dce1d/packages/box/src/data/PolygonBoxData.ts#L7)

___

### \_\_useNaturalRatio

• `get` **__useNaturalRatio**(): `boolean`

#### Returns

`boolean`

#### Implementation of

[IPolygonBoxData](../interfaces/IPolygonBoxData.md).[__useNaturalRatio](../interfaces/IPolygonBoxData.md#__usenaturalratio)

#### Inherited from

BoxData.\_\_useNaturalRatio

#### Defined in

[src/leafer/packages/display-module/data/src/LeafData.ts:19](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/display-module/data/src/LeafData.ts#L19)

___

### \_\_isLinePath

• `get` **__isLinePath**(): `boolean`

#### Returns

`boolean`

#### Implementation of

[IPolygonBoxData](../interfaces/IPolygonBoxData.md).[__isLinePath](../interfaces/IPolygonBoxData.md#__islinepath)

#### Inherited from

BoxData.\_\_isLinePath

#### Defined in

[src/leafer/packages/display-module/data/src/LeafData.ts:21](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/display-module/data/src/LeafData.ts#L21)

___

### \_\_blendMode

• `get` **__blendMode**(): `string`

#### Returns

`string`

#### Implementation of

[IPolygonBoxData](../interfaces/IPolygonBoxData.md).[__blendMode](../interfaces/IPolygonBoxData.md#__blendmode)

#### Inherited from

BoxData.\_\_blendMode

#### Defined in

[src/leafer/packages/display-module/data/src/LeafData.ts:30](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/display-module/data/src/LeafData.ts#L30)

___

### \_\_boxStroke

• `get` **__boxStroke**(): `boolean`

#### Returns

`boolean`

#### Implementation of

[IPolygonBoxData](../interfaces/IPolygonBoxData.md).[__boxStroke](../interfaces/IPolygonBoxData.md#__boxstroke)

#### Inherited from

BoxData.\_\_boxStroke

#### Defined in

[src/ui/packages/display-module/data/src/BoxData.ts:8](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/display-module/data/src/BoxData.ts#L8)

___

### \_\_drawAfterFill

• `get` **__drawAfterFill**(): `boolean`

#### Returns

`boolean`

#### Implementation of

[IPolygonBoxData](../interfaces/IPolygonBoxData.md).[__drawAfterFill](../interfaces/IPolygonBoxData.md#__drawafterfill)

#### Inherited from

BoxData.\_\_drawAfterFill

#### Defined in

[src/ui/packages/display-module/data/src/BoxData.ts:11](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/display-module/data/src/BoxData.ts#L11)

___

### \_\_clipAfterFill

• `get` **__clipAfterFill**(): `boolean`

#### Returns

`boolean`

#### Implementation of

[IPolygonBoxData](../interfaces/IPolygonBoxData.md).[__clipAfterFill](../interfaces/IPolygonBoxData.md#__clipafterfill)

#### Inherited from

BoxData.\_\_clipAfterFill

#### Defined in

[src/ui/packages/display-module/data/src/BoxData.ts:13](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/display-module/data/src/BoxData.ts#L13)

___

### scale

• `get` **scale**(): `number` \| [`IPointData`](../interfaces/IPointData.md)

#### Returns

`number` \| [`IPointData`](../interfaces/IPointData.md)

#### Implementation of

[IPolygonBoxData](../interfaces/IPolygonBoxData.md).[scale](../interfaces/IPolygonBoxData.md#scale)

#### Inherited from

BoxData.scale

#### Defined in

[src/ui/packages/display-module/data/src/UIData.ts:16](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/display-module/data/src/UIData.ts#L16)

___

### \_\_strokeWidth

• `get` **__strokeWidth**(): `number`

#### Returns

`number`

#### Implementation of

[IPolygonBoxData](../interfaces/IPolygonBoxData.md).[__strokeWidth](../interfaces/IPolygonBoxData.md#__strokewidth)

#### Inherited from

BoxData.\_\_strokeWidth

#### Defined in

[src/ui/packages/display-module/data/src/UIData.ts:23](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/display-module/data/src/UIData.ts#L23)

___

### \_\_maxStrokeWidth

• `get` **__maxStrokeWidth**(): `number`

#### Returns

`number`

#### Implementation of

[IPolygonBoxData](../interfaces/IPolygonBoxData.md).[__maxStrokeWidth](../interfaces/IPolygonBoxData.md#__maxstrokewidth)

#### Inherited from

BoxData.\_\_maxStrokeWidth

#### Defined in

[src/ui/packages/display-module/data/src/UIData.ts:25](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/display-module/data/src/UIData.ts#L25)

___

### \_\_hasMultiPaint

• `get` **__hasMultiPaint**(): `boolean`

#### Returns

`boolean`

#### Implementation of

[IPolygonBoxData](../interfaces/IPolygonBoxData.md).[__hasMultiPaint](../interfaces/IPolygonBoxData.md#__hasmultipaint)

#### Inherited from

BoxData.\_\_hasMultiPaint

#### Defined in

[src/ui/packages/display-module/data/src/UIData.ts:29](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/display-module/data/src/UIData.ts#L29)

___

### \_\_hasSurface

• `get` **__hasSurface**(): `boolean`

#### Returns

`boolean`

#### Implementation of

[IPolygonBoxData](../interfaces/IPolygonBoxData.md).[__hasSurface](../interfaces/IPolygonBoxData.md#__hassurface)

#### Inherited from

BoxData.\_\_hasSurface

#### Defined in

[src/ui/packages/display-module/data/src/UIData.ts:38](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/display-module/data/src/UIData.ts#L38)

___

### \_\_autoWidth

• `get` **__autoWidth**(): `boolean`

#### Returns

`boolean`

#### Implementation of

[IPolygonBoxData](../interfaces/IPolygonBoxData.md).[__autoWidth](../interfaces/IPolygonBoxData.md#__autowidth)

#### Inherited from

BoxData.\_\_autoWidth

#### Defined in

[src/ui/packages/display-module/data/src/UIData.ts:55](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/display-module/data/src/UIData.ts#L55)

___

### \_\_autoHeight

• `get` **__autoHeight**(): `boolean`

#### Returns

`boolean`

#### Implementation of

[IPolygonBoxData](../interfaces/IPolygonBoxData.md).[__autoHeight](../interfaces/IPolygonBoxData.md#__autoheight)

#### Inherited from

BoxData.\_\_autoHeight

#### Defined in

[src/ui/packages/display-module/data/src/UIData.ts:56](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/display-module/data/src/UIData.ts#L56)

___

### \_\_autoSide

• `get` **__autoSide**(): `boolean`

#### Returns

`boolean`

#### Implementation of

[IPolygonBoxData](../interfaces/IPolygonBoxData.md).[__autoSide](../interfaces/IPolygonBoxData.md#__autoside)

#### Inherited from

BoxData.\_\_autoSide

#### Defined in

[src/ui/packages/display-module/data/src/UIData.ts:57](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/display-module/data/src/UIData.ts#L57)

___

### \_\_autoSize

• `get` **__autoSize**(): `boolean`

#### Returns

`boolean`

#### Implementation of

[IPolygonBoxData](../interfaces/IPolygonBoxData.md).[__autoSize](../interfaces/IPolygonBoxData.md#__autosize)

#### Inherited from

BoxData.\_\_autoSize

#### Defined in

[src/ui/packages/display-module/data/src/UIData.ts:58](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/display-module/data/src/UIData.ts#L58)

## Methods

### \_\_get

▸ **__get**(`name`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |

#### Returns

`any`

#### Implementation of

[IPolygonBoxData](../interfaces/IPolygonBoxData.md).[__get](../interfaces/IPolygonBoxData.md#__get)

#### Inherited from

[BoxData](BoxData.md).[__get](BoxData.md#__get)

#### Defined in

[src/leafer/packages/display-module/data/src/LeafData.ts:40](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/display-module/data/src/LeafData.ts#L40)

___

### \_\_getData

▸ **__getData**(): [`IObject`](../interfaces/IObject.md)

#### Returns

[`IObject`](../interfaces/IObject.md)

#### Implementation of

[IPolygonBoxData](../interfaces/IPolygonBoxData.md).[__getData](../interfaces/IPolygonBoxData.md#__getdata)

#### Inherited from

[BoxData](BoxData.md).[__getData](BoxData.md#__getdata)

#### Defined in

[src/leafer/packages/display-module/data/src/LeafData.ts:48](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/display-module/data/src/LeafData.ts#L48)

___

### \_\_setInput

▸ **__setInput**(`name`, `value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |
| `value` | `any` |

#### Returns

`void`

#### Implementation of

[IPolygonBoxData](../interfaces/IPolygonBoxData.md).[__setInput](../interfaces/IPolygonBoxData.md#__setinput)

#### Inherited from

[BoxData](BoxData.md).[__setInput](BoxData.md#__setinput)

#### Defined in

[src/leafer/packages/display-module/data/src/LeafData.ts:60](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/display-module/data/src/LeafData.ts#L60)

___

### \_\_getInput

▸ **__getInput**(`name`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |

#### Returns

`any`

#### Implementation of

[IPolygonBoxData](../interfaces/IPolygonBoxData.md).[__getInput](../interfaces/IPolygonBoxData.md#__getinput)

#### Inherited from

[BoxData](BoxData.md).[__getInput](BoxData.md#__getinput)

#### Defined in

[src/leafer/packages/display-module/data/src/LeafData.ts:65](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/display-module/data/src/LeafData.ts#L65)

___

### \_\_removeInput

▸ **__removeInput**(`name`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |

#### Returns

`void`

#### Implementation of

[IPolygonBoxData](../interfaces/IPolygonBoxData.md).[__removeInput](../interfaces/IPolygonBoxData.md#__removeinput)

#### Inherited from

[BoxData](BoxData.md).[__removeInput](BoxData.md#__removeinput)

#### Defined in

[src/leafer/packages/display-module/data/src/LeafData.ts:76](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/display-module/data/src/LeafData.ts#L76)

___

### \_\_getInputData

▸ **__getInputData**(`names?`, `options?`): [`IObject`](../interfaces/IObject.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `names?` | `string`[] \| [`IObject`](../interfaces/IObject.md) |
| `options?` | [`IJSONOptions`](../interfaces/IJSONOptions.md) |

#### Returns

[`IObject`](../interfaces/IObject.md)

#### Implementation of

[IPolygonBoxData](../interfaces/IPolygonBoxData.md).[__getInputData](../interfaces/IPolygonBoxData.md#__getinputdata)

#### Inherited from

[BoxData](BoxData.md).[__getInputData](BoxData.md#__getinputdata)

#### Defined in

[src/leafer/packages/display-module/data/src/LeafData.ts:80](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/display-module/data/src/LeafData.ts#L80)

___

### \_\_setMiddle

▸ **__setMiddle**(`name`, `value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |
| `value` | `any` |

#### Returns

`void`

#### Implementation of

[IPolygonBoxData](../interfaces/IPolygonBoxData.md).[__setMiddle](../interfaces/IPolygonBoxData.md#__setmiddle)

#### Inherited from

[BoxData](BoxData.md).[__setMiddle](BoxData.md#__setmiddle)

#### Defined in

[src/leafer/packages/display-module/data/src/LeafData.ts:120](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/display-module/data/src/LeafData.ts#L120)

___

### \_\_getMiddle

▸ **__getMiddle**(`name`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |

#### Returns

`any`

#### Implementation of

[IPolygonBoxData](../interfaces/IPolygonBoxData.md).[__getMiddle](../interfaces/IPolygonBoxData.md#__getmiddle)

#### Inherited from

[BoxData](BoxData.md).[__getMiddle](BoxData.md#__getmiddle)

#### Defined in

[src/leafer/packages/display-module/data/src/LeafData.ts:125](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/display-module/data/src/LeafData.ts#L125)

___

### \_\_checkSingle

▸ **__checkSingle**(): `void`

#### Returns

`void`

#### Implementation of

[IPolygonBoxData](../interfaces/IPolygonBoxData.md).[__checkSingle](../interfaces/IPolygonBoxData.md#__checksingle)

#### Inherited from

[BoxData](BoxData.md).[__checkSingle](BoxData.md#__checksingle)

#### Defined in

[src/leafer/packages/display-module/data/src/LeafData.ts:129](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/display-module/data/src/LeafData.ts#L129)

___

### \_\_removeNaturalSize

▸ **__removeNaturalSize**(): `void`

#### Returns

`void`

#### Implementation of

[IPolygonBoxData](../interfaces/IPolygonBoxData.md).[__removeNaturalSize](../interfaces/IPolygonBoxData.md#__removenaturalsize)

#### Inherited from

[BoxData](BoxData.md).[__removeNaturalSize](BoxData.md#__removenaturalsize)

#### Defined in

[src/leafer/packages/display-module/data/src/LeafData.ts:143](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/display-module/data/src/LeafData.ts#L143)

___

### destroy

▸ **destroy**(): `void`

#### Returns

`void`

#### Implementation of

[IPolygonBoxData](../interfaces/IPolygonBoxData.md).[destroy](../interfaces/IPolygonBoxData.md#destroy)

#### Inherited from

[BoxData](BoxData.md).[destroy](BoxData.md#destroy)

#### Defined in

[src/leafer/packages/display-module/data/src/LeafData.ts:147](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/display-module/data/src/LeafData.ts#L147)

___

### setVisible

▸ **setVisible**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `boolean` |

#### Returns

`void`

#### Inherited from

[BoxData](BoxData.md).[setVisible](BoxData.md#setvisible)

#### Defined in

[src/ui/packages/display-module/data/src/UIData.ts:61](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/display-module/data/src/UIData.ts#L61)

___

### setWidth

▸ **setWidth**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `number` |

#### Returns

`void`

#### Inherited from

[BoxData](BoxData.md).[setWidth](BoxData.md#setwidth)

#### Defined in

[src/ui/packages/display-module/data/src/UIData.ts:68](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/display-module/data/src/UIData.ts#L68)

___

### setHeight

▸ **setHeight**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `number` |

#### Returns

`void`

#### Inherited from

[BoxData](BoxData.md).[setHeight](BoxData.md#setheight)

#### Defined in

[src/ui/packages/display-module/data/src/UIData.ts:76](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/display-module/data/src/UIData.ts#L76)

___

### setFill

▸ **setFill**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | [`IValue`](../modules.md#ivalue) |

#### Returns

`void`

#### Inherited from

[BoxData](BoxData.md).[setFill](BoxData.md#setfill)

#### Defined in

[src/ui/packages/display-module/data/src/UIData.ts:85](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/display-module/data/src/UIData.ts#L85)

___

### setStroke

▸ **setStroke**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | [`IValue`](../modules.md#ivalue) |

#### Returns

`void`

#### Inherited from

[BoxData](BoxData.md).[setStroke](BoxData.md#setstroke)

#### Defined in

[src/ui/packages/display-module/data/src/UIData.ts:96](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/display-module/data/src/UIData.ts#L96)

___

### setPath

▸ **setPath**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `string` \| [`IPathCommandData`](../modules.md#ipathcommanddata) \| [`IPathCommandNode`](../modules.md#ipathcommandnode)[] \| [`IPathCommandObject`](../modules.md#ipathcommandobject)[] |

#### Returns

`void`

#### Inherited from

[BoxData](BoxData.md).[setPath](BoxData.md#setpath)

#### Defined in

[src/ui/packages/display-module/data/src/UIData.ts:107](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/display-module/data/src/UIData.ts#L107)

___

### setShadow

▸ **setShadow**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | [`IValue`](../modules.md#ivalue) |

#### Returns

`void`

#### Inherited from

[BoxData](BoxData.md).[setShadow](BoxData.md#setshadow)

#### Defined in

[src/ui/packages/display-module/data/src/UIData.ts:119](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/display-module/data/src/UIData.ts#L119)

___

### setInnerShadow

▸ **setInnerShadow**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | [`IValue`](../modules.md#ivalue) |

#### Returns

`void`

#### Inherited from

[BoxData](BoxData.md).[setInnerShadow](BoxData.md#setinnershadow)

#### Defined in

[src/ui/packages/display-module/data/src/UIData.ts:123](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/display-module/data/src/UIData.ts#L123)

___

### setFilter

▸ **setFilter**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | [`IValue`](../modules.md#ivalue) |

#### Returns

`void`

#### Inherited from

[BoxData](BoxData.md).[setFilter](BoxData.md#setfilter)

#### Defined in

[src/ui/packages/display-module/data/src/UIData.ts:127](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/display-module/data/src/UIData.ts#L127)

___

### \_\_computePaint

▸ **__computePaint**(): `void`

#### Returns

`void`

#### Implementation of

[IPolygonBoxData](../interfaces/IPolygonBoxData.md).[__computePaint](../interfaces/IPolygonBoxData.md#__computepaint)

#### Inherited from

[BoxData](BoxData.md).[__computePaint](BoxData.md#__computepaint)

#### Defined in

[src/ui/packages/display-module/data/src/UIData.ts:134](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/display-module/data/src/UIData.ts#L134)

___

### \_\_getRealStrokeWidth

▸ **__getRealStrokeWidth**(`childStyle?`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `childStyle?` | [`IStrokeComputedStyle`](../interfaces/IStrokeComputedStyle.md) |

#### Returns

`number`

#### Implementation of

[IPolygonBoxData](../interfaces/IPolygonBoxData.md).[__getRealStrokeWidth](../interfaces/IPolygonBoxData.md#__getrealstrokewidth)

#### Inherited from

[BoxData](BoxData.md).[__getRealStrokeWidth](BoxData.md#__getrealstrokewidth)

#### Defined in

[src/ui/packages/display-module/data/src/UIData.ts:142](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/display-module/data/src/UIData.ts#L142)

___

### \_\_setPaint

▸ **__setPaint**(`attrName`, `value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `attrName` | ``"fill"`` \| ``"stroke"`` |
| `value` | [`IValue`](../modules.md#ivalue) |

#### Returns

`void`

#### Implementation of

[IPolygonBoxData](../interfaces/IPolygonBoxData.md).[__setPaint](../interfaces/IPolygonBoxData.md#__setpaint)

#### Inherited from

[BoxData](BoxData.md).[__setPaint](BoxData.md#__setpaint)

#### Defined in

[src/ui/packages/display-module/data/src/UIData.ts:158](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/display-module/data/src/UIData.ts#L158)

___

### \_\_removePaint

▸ **__removePaint**(`attrName`, `removeInput?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `attrName` | ``"fill"`` \| ``"stroke"`` |
| `removeInput?` | `boolean` |

#### Returns

`void`

#### Implementation of

[IPolygonBoxData](../interfaces/IPolygonBoxData.md).[__removePaint](../interfaces/IPolygonBoxData.md#__removepaint)

#### Inherited from

[BoxData](BoxData.md).[__removePaint](BoxData.md#__removepaint)

#### Defined in

[src/ui/packages/display-module/data/src/UIData.ts:170](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/display-module/data/src/UIData.ts#L170)
