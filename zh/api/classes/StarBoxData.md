# Class: StarBoxData

## Hierarchy

- [`BoxData`](BoxData.md)

  ↳ **`StarBoxData`**

## Implements

- [`IStarBoxData`](../interfaces/IStarBoxData.md)

## Table of contents

### Constructors

- [constructor](StarBoxData.md#constructor)

### Properties

- [\_\_input](StarBoxData.md#__input)
- [\_\_middle](StarBoxData.md#__middle)
- [\_\_single](StarBoxData.md#__single)
- [\_\_naturalWidth](StarBoxData.md#__naturalwidth)
- [\_\_naturalHeight](StarBoxData.md#__naturalheight)
- [\_\_pathForRender](StarBoxData.md#__pathforrender)
- [\_\_useStroke](StarBoxData.md#__usestroke)
- [\_\_leaf](StarBoxData.md#__leaf)
- [\_\_blendLayer](StarBoxData.md#__blendlayer)
- [\_\_isFills](StarBoxData.md#__isfills)
- [\_\_isStrokes](StarBoxData.md#__isstrokes)
- [\_\_hasMultiStrokeStyle](StarBoxData.md#__hasmultistrokestyle)
- [\_\_isAlphaPixelFill](StarBoxData.md#__isalphapixelfill)
- [\_\_isAlphaPixelStroke](StarBoxData.md#__isalphapixelstroke)
- [\_\_isTransparentFill](StarBoxData.md#__istransparentfill)
- [\_\_isTransparentStroke](StarBoxData.md#__istransparentstroke)
- [\_\_needComputePaint](StarBoxData.md#__needcomputepaint)
- [\_visible](StarBoxData.md#_visible)
- [\_width](StarBoxData.md#_width)
- [\_height](StarBoxData.md#_height)
- [\_fill](StarBoxData.md#_fill)
- [\_stroke](StarBoxData.md#_stroke)
- [\_path](StarBoxData.md#_path)
- [\_shadow](StarBoxData.md#_shadow)
- [\_innerShadow](StarBoxData.md#_innershadow)

### Accessors

- [\_\_useNaturalRatio](StarBoxData.md#__usenaturalratio)
- [\_\_isLinePath](StarBoxData.md#__islinepath)
- [\_\_usePathBox](StarBoxData.md#__usepathbox)
- [\_\_blendMode](StarBoxData.md#__blendmode)
- [\_\_boxStroke](StarBoxData.md#__boxstroke)
- [\_\_drawAfterFill](StarBoxData.md#__drawafterfill)
- [\_\_clipAfterFill](StarBoxData.md#__clipafterfill)
- [scale](StarBoxData.md#scale)
- [\_\_strokeWidth](StarBoxData.md#__strokewidth)
- [\_\_maxStrokeWidth](StarBoxData.md#__maxstrokewidth)
- [\_\_hasMultiPaint](StarBoxData.md#__hasmultipaint)
- [\_\_hasSurface](StarBoxData.md#__hassurface)
- [\_\_autoWidth](StarBoxData.md#__autowidth)
- [\_\_autoHeight](StarBoxData.md#__autoheight)
- [\_\_autoSide](StarBoxData.md#__autoside)
- [\_\_autoSize](StarBoxData.md#__autosize)

### Methods

- [\_\_get](StarBoxData.md#__get)
- [\_\_getData](StarBoxData.md#__getdata)
- [\_\_setInput](StarBoxData.md#__setinput)
- [\_\_getInput](StarBoxData.md#__getinput)
- [\_\_removeInput](StarBoxData.md#__removeinput)
- [\_\_getInputData](StarBoxData.md#__getinputdata)
- [\_\_setMiddle](StarBoxData.md#__setmiddle)
- [\_\_getMiddle](StarBoxData.md#__getmiddle)
- [\_\_checkSingle](StarBoxData.md#__checksingle)
- [\_\_removeNaturalSize](StarBoxData.md#__removenaturalsize)
- [destroy](StarBoxData.md#destroy)
- [setVisible](StarBoxData.md#setvisible)
- [setWidth](StarBoxData.md#setwidth)
- [setHeight](StarBoxData.md#setheight)
- [setFill](StarBoxData.md#setfill)
- [setStroke](StarBoxData.md#setstroke)
- [setPath](StarBoxData.md#setpath)
- [setShadow](StarBoxData.md#setshadow)
- [setInnerShadow](StarBoxData.md#setinnershadow)
- [setFilter](StarBoxData.md#setfilter)
- [\_\_computePaint](StarBoxData.md#__computepaint)
- [\_\_getRealStrokeWidth](StarBoxData.md#__getrealstrokewidth)
- [\_\_setPaint](StarBoxData.md#__setpaint)
- [\_\_removePaint](StarBoxData.md#__removepaint)

## Constructors

### constructor

• **new StarBoxData**(`leaf`): [`StarBoxData`](StarBoxData.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `leaf` | [`ILeaf`](../interfaces/ILeaf.md) |

#### Returns

[`StarBoxData`](StarBoxData.md)

#### Inherited from

[BoxData](BoxData.md).[constructor](BoxData.md#constructor)

#### Defined in

[src/leafer/packages/display-module/data/src/LeafData.ts:36](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/display-module/data/src/LeafData.ts#L36)

## Properties

### \_\_input

• **\_\_input**: [`IObject`](../interfaces/IObject.md)

#### Implementation of

[IStarBoxData](../interfaces/IStarBoxData.md).[__input](../interfaces/IStarBoxData.md#__input)

#### Inherited from

[BoxData](BoxData.md).[__input](BoxData.md#__input)

#### Defined in

[src/leafer/packages/display-module/data/src/LeafData.ts:8](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/display-module/data/src/LeafData.ts#L8)

___

### \_\_middle

• **\_\_middle**: [`IObject`](../interfaces/IObject.md)

#### Implementation of

[IStarBoxData](../interfaces/IStarBoxData.md).[__middle](../interfaces/IStarBoxData.md#__middle)

#### Inherited from

[BoxData](BoxData.md).[__middle](BoxData.md#__middle)

#### Defined in

[src/leafer/packages/display-module/data/src/LeafData.ts:9](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/display-module/data/src/LeafData.ts#L9)

___

### \_\_single

• **\_\_single**: `boolean`

#### Implementation of

[IStarBoxData](../interfaces/IStarBoxData.md).[__single](../interfaces/IStarBoxData.md#__single)

#### Inherited from

[BoxData](BoxData.md).[__single](BoxData.md#__single)

#### Defined in

[src/leafer/packages/display-module/data/src/LeafData.ts:11](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/display-module/data/src/LeafData.ts#L11)

___

### \_\_naturalWidth

• `Optional` **\_\_naturalWidth**: `number`

#### Implementation of

[IStarBoxData](../interfaces/IStarBoxData.md).[__naturalWidth](../interfaces/IStarBoxData.md#__naturalwidth)

#### Inherited from

[BoxData](BoxData.md).[__naturalWidth](BoxData.md#__naturalwidth)

#### Defined in

[src/leafer/packages/display-module/data/src/LeafData.ts:13](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/display-module/data/src/LeafData.ts#L13)

___

### \_\_naturalHeight

• `Optional` **\_\_naturalHeight**: `number`

#### Implementation of

[IStarBoxData](../interfaces/IStarBoxData.md).[__naturalHeight](../interfaces/IStarBoxData.md#__naturalheight)

#### Inherited from

[BoxData](BoxData.md).[__naturalHeight](BoxData.md#__naturalheight)

#### Defined in

[src/leafer/packages/display-module/data/src/LeafData.ts:14](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/display-module/data/src/LeafData.ts#L14)

___

### \_\_pathForRender

• `Optional` **\_\_pathForRender**: [`IPathCommandData`](../modules.md#ipathcommanddata)

#### Implementation of

[IStarBoxData](../interfaces/IStarBoxData.md).[__pathForRender](../interfaces/IStarBoxData.md#__pathforrender)

#### Inherited from

[BoxData](BoxData.md).[__pathForRender](BoxData.md#__pathforrender)

#### Defined in

[src/leafer/packages/display-module/data/src/LeafData.ts:16](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/display-module/data/src/LeafData.ts#L16)

___

### \_\_useStroke

• `Optional` **\_\_useStroke**: `boolean`

#### Implementation of

[IStarBoxData](../interfaces/IStarBoxData.md).[__useStroke](../interfaces/IStarBoxData.md#__usestroke)

#### Inherited from

[BoxData](BoxData.md).[__useStroke](BoxData.md#__usestroke)

#### Defined in

[src/leafer/packages/display-module/data/src/LeafData.ts:18](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/display-module/data/src/LeafData.ts#L18)

___

### \_\_leaf

• **\_\_leaf**: [`IUI`](../interfaces/IUI.md)

#### Implementation of

[IStarBoxData](../interfaces/IStarBoxData.md).[__leaf](../interfaces/IStarBoxData.md#__leaf)

#### Inherited from

[BoxData](BoxData.md).[__leaf](BoxData.md#__leaf)

#### Defined in

[src/ui/packages/display-module/data/src/UIData.ts:14](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/display-module/data/src/UIData.ts#L14)

___

### \_\_blendLayer

• `Optional` **\_\_blendLayer**: `boolean`

#### Implementation of

[IStarBoxData](../interfaces/IStarBoxData.md).[__blendLayer](../interfaces/IStarBoxData.md#__blendlayer)

#### Inherited from

[BoxData](BoxData.md).[__blendLayer](BoxData.md#__blendlayer)

#### Defined in

[src/ui/packages/display-module/data/src/UIData.ts:18](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/display-module/data/src/UIData.ts#L18)

___

### \_\_isFills

• `Optional` **\_\_isFills**: `boolean`

#### Implementation of

[IStarBoxData](../interfaces/IStarBoxData.md).[__isFills](../interfaces/IStarBoxData.md#__isfills)

#### Inherited from

[BoxData](BoxData.md).[__isFills](BoxData.md#__isfills)

#### Defined in

[src/ui/packages/display-module/data/src/UIData.ts:20](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/display-module/data/src/UIData.ts#L20)

___

### \_\_isStrokes

• `Optional` **\_\_isStrokes**: `boolean`

#### Implementation of

[IStarBoxData](../interfaces/IStarBoxData.md).[__isStrokes](../interfaces/IStarBoxData.md#__isstrokes)

#### Inherited from

[BoxData](BoxData.md).[__isStrokes](BoxData.md#__isstrokes)

#### Defined in

[src/ui/packages/display-module/data/src/UIData.ts:21](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/display-module/data/src/UIData.ts#L21)

___

### \_\_hasMultiStrokeStyle

• `Optional` **\_\_hasMultiStrokeStyle**: `number`

#### Implementation of

[IStarBoxData](../interfaces/IStarBoxData.md).[__hasMultiStrokeStyle](../interfaces/IStarBoxData.md#__hasmultistrokestyle)

#### Inherited from

[BoxData](BoxData.md).[__hasMultiStrokeStyle](BoxData.md#__hasmultistrokestyle)

#### Defined in

[src/ui/packages/display-module/data/src/UIData.ts:27](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/display-module/data/src/UIData.ts#L27)

___

### \_\_isAlphaPixelFill

• `Optional` **\_\_isAlphaPixelFill**: `boolean`

#### Implementation of

[IStarBoxData](../interfaces/IStarBoxData.md).[__isAlphaPixelFill](../interfaces/IStarBoxData.md#__isalphapixelfill)

#### Inherited from

[BoxData](BoxData.md).[__isAlphaPixelFill](BoxData.md#__isalphapixelfill)

#### Defined in

[src/ui/packages/display-module/data/src/UIData.ts:31](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/display-module/data/src/UIData.ts#L31)

___

### \_\_isAlphaPixelStroke

• `Optional` **\_\_isAlphaPixelStroke**: `boolean`

#### Implementation of

[IStarBoxData](../interfaces/IStarBoxData.md).[__isAlphaPixelStroke](../interfaces/IStarBoxData.md#__isalphapixelstroke)

#### Inherited from

[BoxData](BoxData.md).[__isAlphaPixelStroke](BoxData.md#__isalphapixelstroke)

#### Defined in

[src/ui/packages/display-module/data/src/UIData.ts:32](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/display-module/data/src/UIData.ts#L32)

___

### \_\_isTransparentFill

• `Optional` **\_\_isTransparentFill**: `boolean`

#### Implementation of

[IStarBoxData](../interfaces/IStarBoxData.md).[__isTransparentFill](../interfaces/IStarBoxData.md#__istransparentfill)

#### Inherited from

[BoxData](BoxData.md).[__isTransparentFill](BoxData.md#__istransparentfill)

#### Defined in

[src/ui/packages/display-module/data/src/UIData.ts:34](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/display-module/data/src/UIData.ts#L34)

___

### \_\_isTransparentStroke

• `Optional` **\_\_isTransparentStroke**: `boolean`

#### Implementation of

[IStarBoxData](../interfaces/IStarBoxData.md).[__isTransparentStroke](../interfaces/IStarBoxData.md#__istransparentstroke)

#### Inherited from

[BoxData](BoxData.md).[__isTransparentStroke](BoxData.md#__istransparentstroke)

#### Defined in

[src/ui/packages/display-module/data/src/UIData.ts:35](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/display-module/data/src/UIData.ts#L35)

___

### \_\_needComputePaint

• **\_\_needComputePaint**: `boolean`

#### Implementation of

[IStarBoxData](../interfaces/IStarBoxData.md).[__needComputePaint](../interfaces/IStarBoxData.md#__needcomputepaint)

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

### \_\_useNaturalRatio

• `get` **__useNaturalRatio**(): `boolean`

#### Returns

`boolean`

#### Implementation of

[IStarBoxData](../interfaces/IStarBoxData.md).[__useNaturalRatio](../interfaces/IStarBoxData.md#__usenaturalratio)

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

[IStarBoxData](../interfaces/IStarBoxData.md).[__isLinePath](../interfaces/IStarBoxData.md#__islinepath)

#### Inherited from

BoxData.\_\_isLinePath

#### Defined in

[src/leafer/packages/display-module/data/src/LeafData.ts:21](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/display-module/data/src/LeafData.ts#L21)

___

### \_\_usePathBox

• `get` **__usePathBox**(): `boolean`

#### Returns

`boolean`

#### Implementation of

[IStarBoxData](../interfaces/IStarBoxData.md).[__usePathBox](../interfaces/IStarBoxData.md#__usepathbox)

#### Inherited from

BoxData.\_\_usePathBox

#### Defined in

[src/leafer/packages/display-module/data/src/LeafData.ts:26](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/display-module/data/src/LeafData.ts#L26)

___

### \_\_blendMode

• `get` **__blendMode**(): `string`

#### Returns

`string`

#### Implementation of

[IStarBoxData](../interfaces/IStarBoxData.md).[__blendMode](../interfaces/IStarBoxData.md#__blendmode)

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

[IStarBoxData](../interfaces/IStarBoxData.md).[__boxStroke](../interfaces/IStarBoxData.md#__boxstroke)

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

[IStarBoxData](../interfaces/IStarBoxData.md).[__drawAfterFill](../interfaces/IStarBoxData.md#__drawafterfill)

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

[IStarBoxData](../interfaces/IStarBoxData.md).[__clipAfterFill](../interfaces/IStarBoxData.md#__clipafterfill)

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

[IStarBoxData](../interfaces/IStarBoxData.md).[scale](../interfaces/IStarBoxData.md#scale)

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

[IStarBoxData](../interfaces/IStarBoxData.md).[__strokeWidth](../interfaces/IStarBoxData.md#__strokewidth)

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

[IStarBoxData](../interfaces/IStarBoxData.md).[__maxStrokeWidth](../interfaces/IStarBoxData.md#__maxstrokewidth)

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

[IStarBoxData](../interfaces/IStarBoxData.md).[__hasMultiPaint](../interfaces/IStarBoxData.md#__hasmultipaint)

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

[IStarBoxData](../interfaces/IStarBoxData.md).[__hasSurface](../interfaces/IStarBoxData.md#__hassurface)

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

[IStarBoxData](../interfaces/IStarBoxData.md).[__autoWidth](../interfaces/IStarBoxData.md#__autowidth)

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

[IStarBoxData](../interfaces/IStarBoxData.md).[__autoHeight](../interfaces/IStarBoxData.md#__autoheight)

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

[IStarBoxData](../interfaces/IStarBoxData.md).[__autoSide](../interfaces/IStarBoxData.md#__autoside)

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

[IStarBoxData](../interfaces/IStarBoxData.md).[__autoSize](../interfaces/IStarBoxData.md#__autosize)

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

[IStarBoxData](../interfaces/IStarBoxData.md).[__get](../interfaces/IStarBoxData.md#__get)

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

[IStarBoxData](../interfaces/IStarBoxData.md).[__getData](../interfaces/IStarBoxData.md#__getdata)

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

[IStarBoxData](../interfaces/IStarBoxData.md).[__setInput](../interfaces/IStarBoxData.md#__setinput)

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

[IStarBoxData](../interfaces/IStarBoxData.md).[__getInput](../interfaces/IStarBoxData.md#__getinput)

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

[IStarBoxData](../interfaces/IStarBoxData.md).[__removeInput](../interfaces/IStarBoxData.md#__removeinput)

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

[IStarBoxData](../interfaces/IStarBoxData.md).[__getInputData](../interfaces/IStarBoxData.md#__getinputdata)

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

[IStarBoxData](../interfaces/IStarBoxData.md).[__setMiddle](../interfaces/IStarBoxData.md#__setmiddle)

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

[IStarBoxData](../interfaces/IStarBoxData.md).[__getMiddle](../interfaces/IStarBoxData.md#__getmiddle)

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

[IStarBoxData](../interfaces/IStarBoxData.md).[__checkSingle](../interfaces/IStarBoxData.md#__checksingle)

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

[IStarBoxData](../interfaces/IStarBoxData.md).[__removeNaturalSize](../interfaces/IStarBoxData.md#__removenaturalsize)

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

[IStarBoxData](../interfaces/IStarBoxData.md).[destroy](../interfaces/IStarBoxData.md#destroy)

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

[IStarBoxData](../interfaces/IStarBoxData.md).[__computePaint](../interfaces/IStarBoxData.md#__computepaint)

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

[IStarBoxData](../interfaces/IStarBoxData.md).[__getRealStrokeWidth](../interfaces/IStarBoxData.md#__getrealstrokewidth)

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

[IStarBoxData](../interfaces/IStarBoxData.md).[__setPaint](../interfaces/IStarBoxData.md#__setpaint)

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

[IStarBoxData](../interfaces/IStarBoxData.md).[__removePaint](../interfaces/IStarBoxData.md#__removepaint)

#### Inherited from

[BoxData](BoxData.md).[__removePaint](BoxData.md#__removepaint)

#### Defined in

[src/ui/packages/display-module/data/src/UIData.ts:170](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/display-module/data/src/UIData.ts#L170)
