# Class: CanvasData

## Hierarchy

- [`RectData`](RectData.md)

  ↳ **`CanvasData`**

## Implements

- [`ICanvasData`](../interfaces/ICanvasData.md)

## Table of contents

### Constructors

- [constructor](CanvasData.md#constructor)

### Properties

- [\_\_input](CanvasData.md#__input)
- [\_\_middle](CanvasData.md#__middle)
- [\_\_single](CanvasData.md#__single)
- [\_\_naturalWidth](CanvasData.md#__naturalwidth)
- [\_\_naturalHeight](CanvasData.md#__naturalheight)
- [\_\_pathForRender](CanvasData.md#__pathforrender)
- [\_\_useStroke](CanvasData.md#__usestroke)
- [\_\_leaf](CanvasData.md#__leaf)
- [\_\_blendLayer](CanvasData.md#__blendlayer)
- [\_\_isFills](CanvasData.md#__isfills)
- [\_\_isStrokes](CanvasData.md#__isstrokes)
- [\_\_hasMultiStrokeStyle](CanvasData.md#__hasmultistrokestyle)
- [\_\_isAlphaPixelFill](CanvasData.md#__isalphapixelfill)
- [\_\_isAlphaPixelStroke](CanvasData.md#__isalphapixelstroke)
- [\_\_isTransparentFill](CanvasData.md#__istransparentfill)
- [\_\_isTransparentStroke](CanvasData.md#__istransparentstroke)
- [\_\_needComputePaint](CanvasData.md#__needcomputepaint)
- [\_visible](CanvasData.md#_visible)
- [\_width](CanvasData.md#_width)
- [\_height](CanvasData.md#_height)
- [\_fill](CanvasData.md#_fill)
- [\_stroke](CanvasData.md#_stroke)
- [\_path](CanvasData.md#_path)
- [\_shadow](CanvasData.md#_shadow)
- [\_innerShadow](CanvasData.md#_innershadow)

### Accessors

- [\_\_useNaturalRatio](CanvasData.md#__usenaturalratio)
- [\_\_isLinePath](CanvasData.md#__islinepath)
- [\_\_usePathBox](CanvasData.md#__usepathbox)
- [\_\_blendMode](CanvasData.md#__blendmode)
- [\_\_isCanvas](CanvasData.md#__iscanvas)
- [\_\_drawAfterFill](CanvasData.md#__drawafterfill)
- [\_\_boxStroke](CanvasData.md#__boxstroke)
- [scale](CanvasData.md#scale)
- [\_\_strokeWidth](CanvasData.md#__strokewidth)
- [\_\_maxStrokeWidth](CanvasData.md#__maxstrokewidth)
- [\_\_hasMultiPaint](CanvasData.md#__hasmultipaint)
- [\_\_clipAfterFill](CanvasData.md#__clipafterfill)
- [\_\_hasSurface](CanvasData.md#__hassurface)
- [\_\_autoWidth](CanvasData.md#__autowidth)
- [\_\_autoHeight](CanvasData.md#__autoheight)
- [\_\_autoSide](CanvasData.md#__autoside)
- [\_\_autoSize](CanvasData.md#__autosize)

### Methods

- [\_\_get](CanvasData.md#__get)
- [\_\_getData](CanvasData.md#__getdata)
- [\_\_setInput](CanvasData.md#__setinput)
- [\_\_getInput](CanvasData.md#__getinput)
- [\_\_removeInput](CanvasData.md#__removeinput)
- [\_\_setMiddle](CanvasData.md#__setmiddle)
- [\_\_getMiddle](CanvasData.md#__getmiddle)
- [\_\_checkSingle](CanvasData.md#__checksingle)
- [\_\_removeNaturalSize](CanvasData.md#__removenaturalsize)
- [destroy](CanvasData.md#destroy)
- [\_\_getInputData](CanvasData.md#__getinputdata)
- [setVisible](CanvasData.md#setvisible)
- [setWidth](CanvasData.md#setwidth)
- [setHeight](CanvasData.md#setheight)
- [setFill](CanvasData.md#setfill)
- [setStroke](CanvasData.md#setstroke)
- [setPath](CanvasData.md#setpath)
- [setShadow](CanvasData.md#setshadow)
- [setInnerShadow](CanvasData.md#setinnershadow)
- [setFilter](CanvasData.md#setfilter)
- [\_\_computePaint](CanvasData.md#__computepaint)
- [\_\_getRealStrokeWidth](CanvasData.md#__getrealstrokewidth)
- [\_\_setPaint](CanvasData.md#__setpaint)
- [\_\_removePaint](CanvasData.md#__removepaint)

## Constructors

### constructor

• **new CanvasData**(`leaf`): [`CanvasData`](CanvasData.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `leaf` | [`ILeaf`](../interfaces/ILeaf.md) |

#### Returns

[`CanvasData`](CanvasData.md)

#### Inherited from

[RectData](RectData.md).[constructor](RectData.md#constructor)

#### Defined in

[src/leafer/packages/display-module/data/src/LeafData.ts:36](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/display-module/data/src/LeafData.ts#L36)

## Properties

### \_\_input

• **\_\_input**: [`IObject`](../interfaces/IObject.md)

#### Implementation of

[ICanvasData](../interfaces/ICanvasData.md).[__input](../interfaces/ICanvasData.md#__input)

#### Inherited from

[RectData](RectData.md).[__input](RectData.md#__input)

#### Defined in

[src/leafer/packages/display-module/data/src/LeafData.ts:8](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/display-module/data/src/LeafData.ts#L8)

___

### \_\_middle

• **\_\_middle**: [`IObject`](../interfaces/IObject.md)

#### Implementation of

[ICanvasData](../interfaces/ICanvasData.md).[__middle](../interfaces/ICanvasData.md#__middle)

#### Inherited from

[RectData](RectData.md).[__middle](RectData.md#__middle)

#### Defined in

[src/leafer/packages/display-module/data/src/LeafData.ts:9](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/display-module/data/src/LeafData.ts#L9)

___

### \_\_single

• **\_\_single**: `boolean`

#### Implementation of

[ICanvasData](../interfaces/ICanvasData.md).[__single](../interfaces/ICanvasData.md#__single)

#### Inherited from

[RectData](RectData.md).[__single](RectData.md#__single)

#### Defined in

[src/leafer/packages/display-module/data/src/LeafData.ts:11](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/display-module/data/src/LeafData.ts#L11)

___

### \_\_naturalWidth

• `Optional` **\_\_naturalWidth**: `number`

#### Implementation of

[ICanvasData](../interfaces/ICanvasData.md).[__naturalWidth](../interfaces/ICanvasData.md#__naturalwidth)

#### Inherited from

[RectData](RectData.md).[__naturalWidth](RectData.md#__naturalwidth)

#### Defined in

[src/leafer/packages/display-module/data/src/LeafData.ts:13](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/display-module/data/src/LeafData.ts#L13)

___

### \_\_naturalHeight

• `Optional` **\_\_naturalHeight**: `number`

#### Implementation of

[ICanvasData](../interfaces/ICanvasData.md).[__naturalHeight](../interfaces/ICanvasData.md#__naturalheight)

#### Inherited from

[RectData](RectData.md).[__naturalHeight](RectData.md#__naturalheight)

#### Defined in

[src/leafer/packages/display-module/data/src/LeafData.ts:14](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/display-module/data/src/LeafData.ts#L14)

___

### \_\_pathForRender

• `Optional` **\_\_pathForRender**: [`IPathCommandData`](../modules.md#ipathcommanddata)

#### Implementation of

[ICanvasData](../interfaces/ICanvasData.md).[__pathForRender](../interfaces/ICanvasData.md#__pathforrender)

#### Inherited from

[RectData](RectData.md).[__pathForRender](RectData.md#__pathforrender)

#### Defined in

[src/leafer/packages/display-module/data/src/LeafData.ts:16](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/display-module/data/src/LeafData.ts#L16)

___

### \_\_useStroke

• `Optional` **\_\_useStroke**: `boolean`

#### Implementation of

[ICanvasData](../interfaces/ICanvasData.md).[__useStroke](../interfaces/ICanvasData.md#__usestroke)

#### Inherited from

[RectData](RectData.md).[__useStroke](RectData.md#__usestroke)

#### Defined in

[src/leafer/packages/display-module/data/src/LeafData.ts:18](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/display-module/data/src/LeafData.ts#L18)

___

### \_\_leaf

• **\_\_leaf**: [`IUI`](../interfaces/IUI.md)

#### Implementation of

[ICanvasData](../interfaces/ICanvasData.md).[__leaf](../interfaces/ICanvasData.md#__leaf)

#### Inherited from

[RectData](RectData.md).[__leaf](RectData.md#__leaf)

#### Defined in

[src/ui/packages/display-module/data/src/UIData.ts:14](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/display-module/data/src/UIData.ts#L14)

___

### \_\_blendLayer

• `Optional` **\_\_blendLayer**: `boolean`

#### Implementation of

[ICanvasData](../interfaces/ICanvasData.md).[__blendLayer](../interfaces/ICanvasData.md#__blendlayer)

#### Inherited from

[RectData](RectData.md).[__blendLayer](RectData.md#__blendlayer)

#### Defined in

[src/ui/packages/display-module/data/src/UIData.ts:18](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/display-module/data/src/UIData.ts#L18)

___

### \_\_isFills

• `Optional` **\_\_isFills**: `boolean`

#### Implementation of

[ICanvasData](../interfaces/ICanvasData.md).[__isFills](../interfaces/ICanvasData.md#__isfills)

#### Inherited from

[RectData](RectData.md).[__isFills](RectData.md#__isfills)

#### Defined in

[src/ui/packages/display-module/data/src/UIData.ts:20](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/display-module/data/src/UIData.ts#L20)

___

### \_\_isStrokes

• `Optional` **\_\_isStrokes**: `boolean`

#### Implementation of

[ICanvasData](../interfaces/ICanvasData.md).[__isStrokes](../interfaces/ICanvasData.md#__isstrokes)

#### Inherited from

[RectData](RectData.md).[__isStrokes](RectData.md#__isstrokes)

#### Defined in

[src/ui/packages/display-module/data/src/UIData.ts:21](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/display-module/data/src/UIData.ts#L21)

___

### \_\_hasMultiStrokeStyle

• `Optional` **\_\_hasMultiStrokeStyle**: `number`

#### Implementation of

[ICanvasData](../interfaces/ICanvasData.md).[__hasMultiStrokeStyle](../interfaces/ICanvasData.md#__hasmultistrokestyle)

#### Inherited from

[RectData](RectData.md).[__hasMultiStrokeStyle](RectData.md#__hasmultistrokestyle)

#### Defined in

[src/ui/packages/display-module/data/src/UIData.ts:27](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/display-module/data/src/UIData.ts#L27)

___

### \_\_isAlphaPixelFill

• `Optional` **\_\_isAlphaPixelFill**: `boolean`

#### Implementation of

[ICanvasData](../interfaces/ICanvasData.md).[__isAlphaPixelFill](../interfaces/ICanvasData.md#__isalphapixelfill)

#### Inherited from

[RectData](RectData.md).[__isAlphaPixelFill](RectData.md#__isalphapixelfill)

#### Defined in

[src/ui/packages/display-module/data/src/UIData.ts:31](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/display-module/data/src/UIData.ts#L31)

___

### \_\_isAlphaPixelStroke

• `Optional` **\_\_isAlphaPixelStroke**: `boolean`

#### Implementation of

[ICanvasData](../interfaces/ICanvasData.md).[__isAlphaPixelStroke](../interfaces/ICanvasData.md#__isalphapixelstroke)

#### Inherited from

[RectData](RectData.md).[__isAlphaPixelStroke](RectData.md#__isalphapixelstroke)

#### Defined in

[src/ui/packages/display-module/data/src/UIData.ts:32](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/display-module/data/src/UIData.ts#L32)

___

### \_\_isTransparentFill

• `Optional` **\_\_isTransparentFill**: `boolean`

#### Implementation of

[ICanvasData](../interfaces/ICanvasData.md).[__isTransparentFill](../interfaces/ICanvasData.md#__istransparentfill)

#### Inherited from

[RectData](RectData.md).[__isTransparentFill](RectData.md#__istransparentfill)

#### Defined in

[src/ui/packages/display-module/data/src/UIData.ts:34](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/display-module/data/src/UIData.ts#L34)

___

### \_\_isTransparentStroke

• `Optional` **\_\_isTransparentStroke**: `boolean`

#### Implementation of

[ICanvasData](../interfaces/ICanvasData.md).[__isTransparentStroke](../interfaces/ICanvasData.md#__istransparentstroke)

#### Inherited from

[RectData](RectData.md).[__isTransparentStroke](RectData.md#__istransparentstroke)

#### Defined in

[src/ui/packages/display-module/data/src/UIData.ts:35](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/display-module/data/src/UIData.ts#L35)

___

### \_\_needComputePaint

• **\_\_needComputePaint**: `boolean`

#### Implementation of

[ICanvasData](../interfaces/ICanvasData.md).[__needComputePaint](../interfaces/ICanvasData.md#__needcomputepaint)

#### Inherited from

[RectData](RectData.md).[__needComputePaint](RectData.md#__needcomputepaint)

#### Defined in

[src/ui/packages/display-module/data/src/UIData.ts:40](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/display-module/data/src/UIData.ts#L40)

___

### \_visible

• `Protected` `Optional` **\_visible**: `boolean`

#### Inherited from

[RectData](RectData.md).[_visible](RectData.md#_visible)

#### Defined in

[src/ui/packages/display-module/data/src/UIData.ts:42](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/display-module/data/src/UIData.ts#L42)

___

### \_width

• `Protected` `Optional` **\_width**: `number`

#### Inherited from

[RectData](RectData.md).[_width](RectData.md#_width)

#### Defined in

[src/ui/packages/display-module/data/src/UIData.ts:44](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/display-module/data/src/UIData.ts#L44)

___

### \_height

• `Protected` `Optional` **\_height**: `number`

#### Inherited from

[RectData](RectData.md).[_height](RectData.md#_height)

#### Defined in

[src/ui/packages/display-module/data/src/UIData.ts:45](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/display-module/data/src/UIData.ts#L45)

___

### \_fill

• `Protected` `Optional` **\_fill**: [`IValue`](../modules.md#ivalue)

#### Inherited from

[RectData](RectData.md).[_fill](RectData.md#_fill)

#### Defined in

[src/ui/packages/display-module/data/src/UIData.ts:47](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/display-module/data/src/UIData.ts#L47)

___

### \_stroke

• `Protected` `Optional` **\_stroke**: [`IValue`](../modules.md#ivalue)

#### Inherited from

[RectData](RectData.md).[_stroke](RectData.md#_stroke)

#### Defined in

[src/ui/packages/display-module/data/src/UIData.ts:48](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/display-module/data/src/UIData.ts#L48)

___

### \_path

• `Protected` **\_path**: [`IPathCommandData`](../modules.md#ipathcommanddata)

#### Inherited from

[RectData](RectData.md).[_path](RectData.md#_path)

#### Defined in

[src/ui/packages/display-module/data/src/UIData.ts:50](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/display-module/data/src/UIData.ts#L50)

___

### \_shadow

• `Protected` `Optional` **\_shadow**: [`IValue`](../modules.md#ivalue)

#### Inherited from

[RectData](RectData.md).[_shadow](RectData.md#_shadow)

#### Defined in

[src/ui/packages/display-module/data/src/UIData.ts:52](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/display-module/data/src/UIData.ts#L52)

___

### \_innerShadow

• `Protected` `Optional` **\_innerShadow**: [`IValue`](../modules.md#ivalue)

#### Inherited from

[RectData](RectData.md).[_innerShadow](RectData.md#_innershadow)

#### Defined in

[src/ui/packages/display-module/data/src/UIData.ts:53](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/display-module/data/src/UIData.ts#L53)

## Accessors

### \_\_useNaturalRatio

• `get` **__useNaturalRatio**(): `boolean`

#### Returns

`boolean`

#### Implementation of

[ICanvasData](../interfaces/ICanvasData.md).[__useNaturalRatio](../interfaces/ICanvasData.md#__usenaturalratio)

#### Inherited from

RectData.\_\_useNaturalRatio

#### Defined in

[src/leafer/packages/display-module/data/src/LeafData.ts:19](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/display-module/data/src/LeafData.ts#L19)

___

### \_\_isLinePath

• `get` **__isLinePath**(): `boolean`

#### Returns

`boolean`

#### Implementation of

[ICanvasData](../interfaces/ICanvasData.md).[__isLinePath](../interfaces/ICanvasData.md#__islinepath)

#### Inherited from

RectData.\_\_isLinePath

#### Defined in

[src/leafer/packages/display-module/data/src/LeafData.ts:21](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/display-module/data/src/LeafData.ts#L21)

___

### \_\_usePathBox

• `get` **__usePathBox**(): `boolean`

#### Returns

`boolean`

#### Implementation of

[ICanvasData](../interfaces/ICanvasData.md).[__usePathBox](../interfaces/ICanvasData.md#__usepathbox)

#### Inherited from

RectData.\_\_usePathBox

#### Defined in

[src/leafer/packages/display-module/data/src/LeafData.ts:26](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/display-module/data/src/LeafData.ts#L26)

___

### \_\_blendMode

• `get` **__blendMode**(): `string`

#### Returns

`string`

#### Implementation of

[ICanvasData](../interfaces/ICanvasData.md).[__blendMode](../interfaces/ICanvasData.md#__blendmode)

#### Inherited from

RectData.\_\_blendMode

#### Defined in

[src/leafer/packages/display-module/data/src/LeafData.ts:30](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/display-module/data/src/LeafData.ts#L30)

___

### \_\_isCanvas

• `get` **__isCanvas**(): `boolean`

#### Returns

`boolean`

#### Implementation of

[ICanvasData](../interfaces/ICanvasData.md).[__isCanvas](../interfaces/ICanvasData.md#__iscanvas)

#### Defined in

[src/ui/packages/display-module/data/src/CanvasData.ts:8](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/display-module/data/src/CanvasData.ts#L8)

___

### \_\_drawAfterFill

• `get` **__drawAfterFill**(): `boolean`

#### Returns

`boolean`

#### Implementation of

[ICanvasData](../interfaces/ICanvasData.md).[__drawAfterFill](../interfaces/ICanvasData.md#__drawafterfill)

#### Defined in

[src/ui/packages/display-module/data/src/CanvasData.ts:9](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/display-module/data/src/CanvasData.ts#L9)

___

### \_\_boxStroke

• `get` **__boxStroke**(): `boolean`

#### Returns

`boolean`

#### Implementation of

[ICanvasData](../interfaces/ICanvasData.md).[__boxStroke](../interfaces/ICanvasData.md#__boxstroke)

#### Inherited from

RectData.\_\_boxStroke

#### Defined in

[src/ui/packages/display-module/data/src/RectData.ts:7](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/display-module/data/src/RectData.ts#L7)

___

### scale

• `get` **scale**(): `number` \| [`IPointData`](../interfaces/IPointData.md)

#### Returns

`number` \| [`IPointData`](../interfaces/IPointData.md)

#### Implementation of

[ICanvasData](../interfaces/ICanvasData.md).[scale](../interfaces/ICanvasData.md#scale)

#### Inherited from

RectData.scale

#### Defined in

[src/ui/packages/display-module/data/src/UIData.ts:16](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/display-module/data/src/UIData.ts#L16)

___

### \_\_strokeWidth

• `get` **__strokeWidth**(): `number`

#### Returns

`number`

#### Implementation of

[ICanvasData](../interfaces/ICanvasData.md).[__strokeWidth](../interfaces/ICanvasData.md#__strokewidth)

#### Inherited from

RectData.\_\_strokeWidth

#### Defined in

[src/ui/packages/display-module/data/src/UIData.ts:23](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/display-module/data/src/UIData.ts#L23)

___

### \_\_maxStrokeWidth

• `get` **__maxStrokeWidth**(): `number`

#### Returns

`number`

#### Implementation of

[ICanvasData](../interfaces/ICanvasData.md).[__maxStrokeWidth](../interfaces/ICanvasData.md#__maxstrokewidth)

#### Inherited from

RectData.\_\_maxStrokeWidth

#### Defined in

[src/ui/packages/display-module/data/src/UIData.ts:25](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/display-module/data/src/UIData.ts#L25)

___

### \_\_hasMultiPaint

• `get` **__hasMultiPaint**(): `boolean`

#### Returns

`boolean`

#### Implementation of

[ICanvasData](../interfaces/ICanvasData.md).[__hasMultiPaint](../interfaces/ICanvasData.md#__hasmultipaint)

#### Inherited from

RectData.\_\_hasMultiPaint

#### Defined in

[src/ui/packages/display-module/data/src/UIData.ts:29](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/display-module/data/src/UIData.ts#L29)

___

### \_\_clipAfterFill

• `get` **__clipAfterFill**(): `boolean`

#### Returns

`boolean`

#### Implementation of

[ICanvasData](../interfaces/ICanvasData.md).[__clipAfterFill](../interfaces/ICanvasData.md#__clipafterfill)

#### Inherited from

RectData.\_\_clipAfterFill

#### Defined in

[src/ui/packages/display-module/data/src/UIData.ts:37](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/display-module/data/src/UIData.ts#L37)

___

### \_\_hasSurface

• `get` **__hasSurface**(): `boolean`

#### Returns

`boolean`

#### Implementation of

[ICanvasData](../interfaces/ICanvasData.md).[__hasSurface](../interfaces/ICanvasData.md#__hassurface)

#### Inherited from

RectData.\_\_hasSurface

#### Defined in

[src/ui/packages/display-module/data/src/UIData.ts:38](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/display-module/data/src/UIData.ts#L38)

___

### \_\_autoWidth

• `get` **__autoWidth**(): `boolean`

#### Returns

`boolean`

#### Implementation of

[ICanvasData](../interfaces/ICanvasData.md).[__autoWidth](../interfaces/ICanvasData.md#__autowidth)

#### Inherited from

RectData.\_\_autoWidth

#### Defined in

[src/ui/packages/display-module/data/src/UIData.ts:55](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/display-module/data/src/UIData.ts#L55)

___

### \_\_autoHeight

• `get` **__autoHeight**(): `boolean`

#### Returns

`boolean`

#### Implementation of

[ICanvasData](../interfaces/ICanvasData.md).[__autoHeight](../interfaces/ICanvasData.md#__autoheight)

#### Inherited from

RectData.\_\_autoHeight

#### Defined in

[src/ui/packages/display-module/data/src/UIData.ts:56](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/display-module/data/src/UIData.ts#L56)

___

### \_\_autoSide

• `get` **__autoSide**(): `boolean`

#### Returns

`boolean`

#### Implementation of

[ICanvasData](../interfaces/ICanvasData.md).[__autoSide](../interfaces/ICanvasData.md#__autoside)

#### Inherited from

RectData.\_\_autoSide

#### Defined in

[src/ui/packages/display-module/data/src/UIData.ts:57](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/display-module/data/src/UIData.ts#L57)

___

### \_\_autoSize

• `get` **__autoSize**(): `boolean`

#### Returns

`boolean`

#### Implementation of

[ICanvasData](../interfaces/ICanvasData.md).[__autoSize](../interfaces/ICanvasData.md#__autosize)

#### Inherited from

RectData.\_\_autoSize

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

[ICanvasData](../interfaces/ICanvasData.md).[__get](../interfaces/ICanvasData.md#__get)

#### Inherited from

[RectData](RectData.md).[__get](RectData.md#__get)

#### Defined in

[src/leafer/packages/display-module/data/src/LeafData.ts:40](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/display-module/data/src/LeafData.ts#L40)

___

### \_\_getData

▸ **__getData**(): [`IObject`](../interfaces/IObject.md)

#### Returns

[`IObject`](../interfaces/IObject.md)

#### Implementation of

[ICanvasData](../interfaces/ICanvasData.md).[__getData](../interfaces/ICanvasData.md#__getdata)

#### Inherited from

[RectData](RectData.md).[__getData](RectData.md#__getdata)

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

[ICanvasData](../interfaces/ICanvasData.md).[__setInput](../interfaces/ICanvasData.md#__setinput)

#### Inherited from

[RectData](RectData.md).[__setInput](RectData.md#__setinput)

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

[ICanvasData](../interfaces/ICanvasData.md).[__getInput](../interfaces/ICanvasData.md#__getinput)

#### Inherited from

[RectData](RectData.md).[__getInput](RectData.md#__getinput)

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

[ICanvasData](../interfaces/ICanvasData.md).[__removeInput](../interfaces/ICanvasData.md#__removeinput)

#### Inherited from

[RectData](RectData.md).[__removeInput](RectData.md#__removeinput)

#### Defined in

[src/leafer/packages/display-module/data/src/LeafData.ts:76](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/display-module/data/src/LeafData.ts#L76)

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

[ICanvasData](../interfaces/ICanvasData.md).[__setMiddle](../interfaces/ICanvasData.md#__setmiddle)

#### Inherited from

[RectData](RectData.md).[__setMiddle](RectData.md#__setmiddle)

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

[ICanvasData](../interfaces/ICanvasData.md).[__getMiddle](../interfaces/ICanvasData.md#__getmiddle)

#### Inherited from

[RectData](RectData.md).[__getMiddle](RectData.md#__getmiddle)

#### Defined in

[src/leafer/packages/display-module/data/src/LeafData.ts:125](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/display-module/data/src/LeafData.ts#L125)

___

### \_\_checkSingle

▸ **__checkSingle**(): `void`

#### Returns

`void`

#### Implementation of

[ICanvasData](../interfaces/ICanvasData.md).[__checkSingle](../interfaces/ICanvasData.md#__checksingle)

#### Inherited from

[RectData](RectData.md).[__checkSingle](RectData.md#__checksingle)

#### Defined in

[src/leafer/packages/display-module/data/src/LeafData.ts:129](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/display-module/data/src/LeafData.ts#L129)

___

### \_\_removeNaturalSize

▸ **__removeNaturalSize**(): `void`

#### Returns

`void`

#### Implementation of

[ICanvasData](../interfaces/ICanvasData.md).[__removeNaturalSize](../interfaces/ICanvasData.md#__removenaturalsize)

#### Inherited from

[RectData](RectData.md).[__removeNaturalSize](RectData.md#__removenaturalsize)

#### Defined in

[src/leafer/packages/display-module/data/src/LeafData.ts:143](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/display-module/data/src/LeafData.ts#L143)

___

### destroy

▸ **destroy**(): `void`

#### Returns

`void`

#### Implementation of

[ICanvasData](../interfaces/ICanvasData.md).[destroy](../interfaces/ICanvasData.md#destroy)

#### Inherited from

[RectData](RectData.md).[destroy](RectData.md#destroy)

#### Defined in

[src/leafer/packages/display-module/data/src/LeafData.ts:147](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/display-module/data/src/LeafData.ts#L147)

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

[ICanvasData](../interfaces/ICanvasData.md).[__getInputData](../interfaces/ICanvasData.md#__getinputdata)

#### Overrides

[RectData](RectData.md).[__getInputData](RectData.md#__getinputdata)

#### Defined in

[src/ui/packages/display-module/data/src/CanvasData.ts:11](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/display-module/data/src/CanvasData.ts#L11)

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

[RectData](RectData.md).[setVisible](RectData.md#setvisible)

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

[RectData](RectData.md).[setWidth](RectData.md#setwidth)

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

[RectData](RectData.md).[setHeight](RectData.md#setheight)

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

[RectData](RectData.md).[setFill](RectData.md#setfill)

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

[RectData](RectData.md).[setStroke](RectData.md#setstroke)

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

[RectData](RectData.md).[setPath](RectData.md#setpath)

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

[RectData](RectData.md).[setShadow](RectData.md#setshadow)

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

[RectData](RectData.md).[setInnerShadow](RectData.md#setinnershadow)

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

[RectData](RectData.md).[setFilter](RectData.md#setfilter)

#### Defined in

[src/ui/packages/display-module/data/src/UIData.ts:127](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/display-module/data/src/UIData.ts#L127)

___

### \_\_computePaint

▸ **__computePaint**(): `void`

#### Returns

`void`

#### Implementation of

[ICanvasData](../interfaces/ICanvasData.md).[__computePaint](../interfaces/ICanvasData.md#__computepaint)

#### Inherited from

[RectData](RectData.md).[__computePaint](RectData.md#__computepaint)

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

[ICanvasData](../interfaces/ICanvasData.md).[__getRealStrokeWidth](../interfaces/ICanvasData.md#__getrealstrokewidth)

#### Inherited from

[RectData](RectData.md).[__getRealStrokeWidth](RectData.md#__getrealstrokewidth)

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

[ICanvasData](../interfaces/ICanvasData.md).[__setPaint](../interfaces/ICanvasData.md#__setpaint)

#### Inherited from

[RectData](RectData.md).[__setPaint](RectData.md#__setpaint)

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

[ICanvasData](../interfaces/ICanvasData.md).[__removePaint](../interfaces/ICanvasData.md#__removepaint)

#### Inherited from

[RectData](RectData.md).[__removePaint](RectData.md#__removepaint)

#### Defined in

[src/ui/packages/display-module/data/src/UIData.ts:170](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/display-module/data/src/UIData.ts#L170)
