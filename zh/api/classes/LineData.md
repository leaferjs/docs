# Class: LineData

## Hierarchy

- [`UIData`](UIData.md)

  ↳ **`LineData`**

  ↳↳ [`PolygonData`](PolygonData.md)

  ↳↳ [`ArrowData`](ArrowData.md)

## Implements

- [`ILineData`](../interfaces/ILineData.md)

## Table of contents

### Constructors

- [constructor](LineData.md#constructor)

### Properties

- [\_\_input](LineData.md#__input)
- [\_\_middle](LineData.md#__middle)
- [\_\_single](LineData.md#__single)
- [\_\_naturalWidth](LineData.md#__naturalwidth)
- [\_\_naturalHeight](LineData.md#__naturalheight)
- [\_\_pathForRender](LineData.md#__pathforrender)
- [\_\_useStroke](LineData.md#__usestroke)
- [\_\_leaf](LineData.md#__leaf)
- [\_\_blendLayer](LineData.md#__blendlayer)
- [\_\_isFills](LineData.md#__isfills)
- [\_\_isStrokes](LineData.md#__isstrokes)
- [\_\_hasMultiStrokeStyle](LineData.md#__hasmultistrokestyle)
- [\_\_isAlphaPixelFill](LineData.md#__isalphapixelfill)
- [\_\_isAlphaPixelStroke](LineData.md#__isalphapixelstroke)
- [\_\_isTransparentFill](LineData.md#__istransparentfill)
- [\_\_isTransparentStroke](LineData.md#__istransparentstroke)
- [\_\_needComputePaint](LineData.md#__needcomputepaint)
- [\_visible](LineData.md#_visible)
- [\_width](LineData.md#_width)
- [\_height](LineData.md#_height)
- [\_fill](LineData.md#_fill)
- [\_stroke](LineData.md#_stroke)
- [\_path](LineData.md#_path)
- [\_shadow](LineData.md#_shadow)
- [\_innerShadow](LineData.md#_innershadow)

### Accessors

- [\_\_useNaturalRatio](LineData.md#__usenaturalratio)
- [\_\_isLinePath](LineData.md#__islinepath)
- [\_\_blendMode](LineData.md#__blendmode)
- [\_\_usePathBox](LineData.md#__usepathbox)
- [scale](LineData.md#scale)
- [\_\_strokeWidth](LineData.md#__strokewidth)
- [\_\_maxStrokeWidth](LineData.md#__maxstrokewidth)
- [\_\_hasMultiPaint](LineData.md#__hasmultipaint)
- [\_\_clipAfterFill](LineData.md#__clipafterfill)
- [\_\_hasSurface](LineData.md#__hassurface)
- [\_\_autoWidth](LineData.md#__autowidth)
- [\_\_autoHeight](LineData.md#__autoheight)
- [\_\_autoSide](LineData.md#__autoside)
- [\_\_autoSize](LineData.md#__autosize)

### Methods

- [\_\_get](LineData.md#__get)
- [\_\_getData](LineData.md#__getdata)
- [\_\_setInput](LineData.md#__setinput)
- [\_\_getInput](LineData.md#__getinput)
- [\_\_removeInput](LineData.md#__removeinput)
- [\_\_getInputData](LineData.md#__getinputdata)
- [\_\_setMiddle](LineData.md#__setmiddle)
- [\_\_getMiddle](LineData.md#__getmiddle)
- [\_\_checkSingle](LineData.md#__checksingle)
- [\_\_removeNaturalSize](LineData.md#__removenaturalsize)
- [destroy](LineData.md#destroy)
- [setVisible](LineData.md#setvisible)
- [setWidth](LineData.md#setwidth)
- [setHeight](LineData.md#setheight)
- [setFill](LineData.md#setfill)
- [setStroke](LineData.md#setstroke)
- [setPath](LineData.md#setpath)
- [setShadow](LineData.md#setshadow)
- [setInnerShadow](LineData.md#setinnershadow)
- [setFilter](LineData.md#setfilter)
- [\_\_computePaint](LineData.md#__computepaint)
- [\_\_getRealStrokeWidth](LineData.md#__getrealstrokewidth)
- [\_\_setPaint](LineData.md#__setpaint)
- [\_\_removePaint](LineData.md#__removepaint)

## Constructors

### constructor

• **new LineData**(`leaf`): [`LineData`](LineData.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `leaf` | [`ILeaf`](../interfaces/ILeaf.md) |

#### Returns

[`LineData`](LineData.md)

#### Inherited from

[UIData](UIData.md).[constructor](UIData.md#constructor)

#### Defined in

[src/leafer/packages/display-module/data/src/LeafData.ts:36](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/display-module/data/src/LeafData.ts#L36)

## Properties

### \_\_input

• **\_\_input**: [`IObject`](../interfaces/IObject.md)

#### Implementation of

[ILineData](../interfaces/ILineData.md).[__input](../interfaces/ILineData.md#__input)

#### Inherited from

[UIData](UIData.md).[__input](UIData.md#__input)

#### Defined in

[src/leafer/packages/display-module/data/src/LeafData.ts:8](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/display-module/data/src/LeafData.ts#L8)

___

### \_\_middle

• **\_\_middle**: [`IObject`](../interfaces/IObject.md)

#### Implementation of

[ILineData](../interfaces/ILineData.md).[__middle](../interfaces/ILineData.md#__middle)

#### Inherited from

[UIData](UIData.md).[__middle](UIData.md#__middle)

#### Defined in

[src/leafer/packages/display-module/data/src/LeafData.ts:9](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/display-module/data/src/LeafData.ts#L9)

___

### \_\_single

• **\_\_single**: `boolean`

#### Implementation of

[ILineData](../interfaces/ILineData.md).[__single](../interfaces/ILineData.md#__single)

#### Inherited from

[UIData](UIData.md).[__single](UIData.md#__single)

#### Defined in

[src/leafer/packages/display-module/data/src/LeafData.ts:11](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/display-module/data/src/LeafData.ts#L11)

___

### \_\_naturalWidth

• `Optional` **\_\_naturalWidth**: `number`

#### Implementation of

[ILineData](../interfaces/ILineData.md).[__naturalWidth](../interfaces/ILineData.md#__naturalwidth)

#### Inherited from

[UIData](UIData.md).[__naturalWidth](UIData.md#__naturalwidth)

#### Defined in

[src/leafer/packages/display-module/data/src/LeafData.ts:13](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/display-module/data/src/LeafData.ts#L13)

___

### \_\_naturalHeight

• `Optional` **\_\_naturalHeight**: `number`

#### Implementation of

[ILineData](../interfaces/ILineData.md).[__naturalHeight](../interfaces/ILineData.md#__naturalheight)

#### Inherited from

[UIData](UIData.md).[__naturalHeight](UIData.md#__naturalheight)

#### Defined in

[src/leafer/packages/display-module/data/src/LeafData.ts:14](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/display-module/data/src/LeafData.ts#L14)

___

### \_\_pathForRender

• `Optional` **\_\_pathForRender**: [`IPathCommandData`](../modules.md#ipathcommanddata)

#### Implementation of

[ILineData](../interfaces/ILineData.md).[__pathForRender](../interfaces/ILineData.md#__pathforrender)

#### Inherited from

[UIData](UIData.md).[__pathForRender](UIData.md#__pathforrender)

#### Defined in

[src/leafer/packages/display-module/data/src/LeafData.ts:16](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/display-module/data/src/LeafData.ts#L16)

___

### \_\_useStroke

• `Optional` **\_\_useStroke**: `boolean`

#### Implementation of

[ILineData](../interfaces/ILineData.md).[__useStroke](../interfaces/ILineData.md#__usestroke)

#### Inherited from

[UIData](UIData.md).[__useStroke](UIData.md#__usestroke)

#### Defined in

[src/leafer/packages/display-module/data/src/LeafData.ts:18](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/display-module/data/src/LeafData.ts#L18)

___

### \_\_leaf

• **\_\_leaf**: [`IUI`](../interfaces/IUI.md)

#### Implementation of

[ILineData](../interfaces/ILineData.md).[__leaf](../interfaces/ILineData.md#__leaf)

#### Inherited from

[UIData](UIData.md).[__leaf](UIData.md#__leaf)

#### Defined in

[src/ui/packages/display-module/data/src/UIData.ts:14](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/display-module/data/src/UIData.ts#L14)

___

### \_\_blendLayer

• `Optional` **\_\_blendLayer**: `boolean`

#### Implementation of

[ILineData](../interfaces/ILineData.md).[__blendLayer](../interfaces/ILineData.md#__blendlayer)

#### Inherited from

[UIData](UIData.md).[__blendLayer](UIData.md#__blendlayer)

#### Defined in

[src/ui/packages/display-module/data/src/UIData.ts:18](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/display-module/data/src/UIData.ts#L18)

___

### \_\_isFills

• `Optional` **\_\_isFills**: `boolean`

#### Implementation of

[ILineData](../interfaces/ILineData.md).[__isFills](../interfaces/ILineData.md#__isfills)

#### Inherited from

[UIData](UIData.md).[__isFills](UIData.md#__isfills)

#### Defined in

[src/ui/packages/display-module/data/src/UIData.ts:20](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/display-module/data/src/UIData.ts#L20)

___

### \_\_isStrokes

• `Optional` **\_\_isStrokes**: `boolean`

#### Implementation of

[ILineData](../interfaces/ILineData.md).[__isStrokes](../interfaces/ILineData.md#__isstrokes)

#### Inherited from

[UIData](UIData.md).[__isStrokes](UIData.md#__isstrokes)

#### Defined in

[src/ui/packages/display-module/data/src/UIData.ts:21](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/display-module/data/src/UIData.ts#L21)

___

### \_\_hasMultiStrokeStyle

• `Optional` **\_\_hasMultiStrokeStyle**: `number`

#### Implementation of

[ILineData](../interfaces/ILineData.md).[__hasMultiStrokeStyle](../interfaces/ILineData.md#__hasmultistrokestyle)

#### Inherited from

[UIData](UIData.md).[__hasMultiStrokeStyle](UIData.md#__hasmultistrokestyle)

#### Defined in

[src/ui/packages/display-module/data/src/UIData.ts:27](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/display-module/data/src/UIData.ts#L27)

___

### \_\_isAlphaPixelFill

• `Optional` **\_\_isAlphaPixelFill**: `boolean`

#### Implementation of

[ILineData](../interfaces/ILineData.md).[__isAlphaPixelFill](../interfaces/ILineData.md#__isalphapixelfill)

#### Inherited from

[UIData](UIData.md).[__isAlphaPixelFill](UIData.md#__isalphapixelfill)

#### Defined in

[src/ui/packages/display-module/data/src/UIData.ts:31](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/display-module/data/src/UIData.ts#L31)

___

### \_\_isAlphaPixelStroke

• `Optional` **\_\_isAlphaPixelStroke**: `boolean`

#### Implementation of

[ILineData](../interfaces/ILineData.md).[__isAlphaPixelStroke](../interfaces/ILineData.md#__isalphapixelstroke)

#### Inherited from

[UIData](UIData.md).[__isAlphaPixelStroke](UIData.md#__isalphapixelstroke)

#### Defined in

[src/ui/packages/display-module/data/src/UIData.ts:32](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/display-module/data/src/UIData.ts#L32)

___

### \_\_isTransparentFill

• `Optional` **\_\_isTransparentFill**: `boolean`

#### Implementation of

[ILineData](../interfaces/ILineData.md).[__isTransparentFill](../interfaces/ILineData.md#__istransparentfill)

#### Inherited from

[UIData](UIData.md).[__isTransparentFill](UIData.md#__istransparentfill)

#### Defined in

[src/ui/packages/display-module/data/src/UIData.ts:34](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/display-module/data/src/UIData.ts#L34)

___

### \_\_isTransparentStroke

• `Optional` **\_\_isTransparentStroke**: `boolean`

#### Implementation of

[ILineData](../interfaces/ILineData.md).[__isTransparentStroke](../interfaces/ILineData.md#__istransparentstroke)

#### Inherited from

[UIData](UIData.md).[__isTransparentStroke](UIData.md#__istransparentstroke)

#### Defined in

[src/ui/packages/display-module/data/src/UIData.ts:35](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/display-module/data/src/UIData.ts#L35)

___

### \_\_needComputePaint

• **\_\_needComputePaint**: `boolean`

#### Implementation of

[ILineData](../interfaces/ILineData.md).[__needComputePaint](../interfaces/ILineData.md#__needcomputepaint)

#### Inherited from

[UIData](UIData.md).[__needComputePaint](UIData.md#__needcomputepaint)

#### Defined in

[src/ui/packages/display-module/data/src/UIData.ts:40](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/display-module/data/src/UIData.ts#L40)

___

### \_visible

• `Protected` `Optional` **\_visible**: `boolean`

#### Inherited from

[UIData](UIData.md).[_visible](UIData.md#_visible)

#### Defined in

[src/ui/packages/display-module/data/src/UIData.ts:42](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/display-module/data/src/UIData.ts#L42)

___

### \_width

• `Protected` `Optional` **\_width**: `number`

#### Inherited from

[UIData](UIData.md).[_width](UIData.md#_width)

#### Defined in

[src/ui/packages/display-module/data/src/UIData.ts:44](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/display-module/data/src/UIData.ts#L44)

___

### \_height

• `Protected` `Optional` **\_height**: `number`

#### Inherited from

[UIData](UIData.md).[_height](UIData.md#_height)

#### Defined in

[src/ui/packages/display-module/data/src/UIData.ts:45](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/display-module/data/src/UIData.ts#L45)

___

### \_fill

• `Protected` `Optional` **\_fill**: [`IValue`](../modules.md#ivalue)

#### Inherited from

[UIData](UIData.md).[_fill](UIData.md#_fill)

#### Defined in

[src/ui/packages/display-module/data/src/UIData.ts:47](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/display-module/data/src/UIData.ts#L47)

___

### \_stroke

• `Protected` `Optional` **\_stroke**: [`IValue`](../modules.md#ivalue)

#### Inherited from

[UIData](UIData.md).[_stroke](UIData.md#_stroke)

#### Defined in

[src/ui/packages/display-module/data/src/UIData.ts:48](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/display-module/data/src/UIData.ts#L48)

___

### \_path

• `Protected` **\_path**: [`IPathCommandData`](../modules.md#ipathcommanddata)

#### Inherited from

[UIData](UIData.md).[_path](UIData.md#_path)

#### Defined in

[src/ui/packages/display-module/data/src/UIData.ts:50](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/display-module/data/src/UIData.ts#L50)

___

### \_shadow

• `Protected` `Optional` **\_shadow**: [`IValue`](../modules.md#ivalue)

#### Inherited from

[UIData](UIData.md).[_shadow](UIData.md#_shadow)

#### Defined in

[src/ui/packages/display-module/data/src/UIData.ts:52](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/display-module/data/src/UIData.ts#L52)

___

### \_innerShadow

• `Protected` `Optional` **\_innerShadow**: [`IValue`](../modules.md#ivalue)

#### Inherited from

[UIData](UIData.md).[_innerShadow](UIData.md#_innershadow)

#### Defined in

[src/ui/packages/display-module/data/src/UIData.ts:53](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/display-module/data/src/UIData.ts#L53)

## Accessors

### \_\_useNaturalRatio

• `get` **__useNaturalRatio**(): `boolean`

#### Returns

`boolean`

#### Implementation of

[ILineData](../interfaces/ILineData.md).[__useNaturalRatio](../interfaces/ILineData.md#__usenaturalratio)

#### Inherited from

UIData.\_\_useNaturalRatio

#### Defined in

[src/leafer/packages/display-module/data/src/LeafData.ts:19](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/display-module/data/src/LeafData.ts#L19)

___

### \_\_isLinePath

• `get` **__isLinePath**(): `boolean`

#### Returns

`boolean`

#### Implementation of

[ILineData](../interfaces/ILineData.md).[__isLinePath](../interfaces/ILineData.md#__islinepath)

#### Inherited from

UIData.\_\_isLinePath

#### Defined in

[src/leafer/packages/display-module/data/src/LeafData.ts:21](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/display-module/data/src/LeafData.ts#L21)

___

### \_\_blendMode

• `get` **__blendMode**(): `string`

#### Returns

`string`

#### Implementation of

[ILineData](../interfaces/ILineData.md).[__blendMode](../interfaces/ILineData.md#__blendmode)

#### Inherited from

UIData.\_\_blendMode

#### Defined in

[src/leafer/packages/display-module/data/src/LeafData.ts:30](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/display-module/data/src/LeafData.ts#L30)

___

### \_\_usePathBox

• `get` **__usePathBox**(): `boolean`

#### Returns

`boolean`

#### Implementation of

[ILineData](../interfaces/ILineData.md).[__usePathBox](../interfaces/ILineData.md#__usepathbox)

#### Overrides

UIData.\_\_usePathBox

#### Defined in

[src/ui/packages/display-module/data/src/LineData.ts:8](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/display-module/data/src/LineData.ts#L8)

___

### scale

• `get` **scale**(): `number` \| [`IPointData`](../interfaces/IPointData.md)

#### Returns

`number` \| [`IPointData`](../interfaces/IPointData.md)

#### Implementation of

[ILineData](../interfaces/ILineData.md).[scale](../interfaces/ILineData.md#scale)

#### Inherited from

UIData.scale

#### Defined in

[src/ui/packages/display-module/data/src/UIData.ts:16](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/display-module/data/src/UIData.ts#L16)

___

### \_\_strokeWidth

• `get` **__strokeWidth**(): `number`

#### Returns

`number`

#### Implementation of

[ILineData](../interfaces/ILineData.md).[__strokeWidth](../interfaces/ILineData.md#__strokewidth)

#### Inherited from

UIData.\_\_strokeWidth

#### Defined in

[src/ui/packages/display-module/data/src/UIData.ts:23](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/display-module/data/src/UIData.ts#L23)

___

### \_\_maxStrokeWidth

• `get` **__maxStrokeWidth**(): `number`

#### Returns

`number`

#### Implementation of

[ILineData](../interfaces/ILineData.md).[__maxStrokeWidth](../interfaces/ILineData.md#__maxstrokewidth)

#### Inherited from

UIData.\_\_maxStrokeWidth

#### Defined in

[src/ui/packages/display-module/data/src/UIData.ts:25](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/display-module/data/src/UIData.ts#L25)

___

### \_\_hasMultiPaint

• `get` **__hasMultiPaint**(): `boolean`

#### Returns

`boolean`

#### Implementation of

[ILineData](../interfaces/ILineData.md).[__hasMultiPaint](../interfaces/ILineData.md#__hasmultipaint)

#### Inherited from

UIData.\_\_hasMultiPaint

#### Defined in

[src/ui/packages/display-module/data/src/UIData.ts:29](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/display-module/data/src/UIData.ts#L29)

___

### \_\_clipAfterFill

• `get` **__clipAfterFill**(): `boolean`

#### Returns

`boolean`

#### Implementation of

[ILineData](../interfaces/ILineData.md).[__clipAfterFill](../interfaces/ILineData.md#__clipafterfill)

#### Inherited from

UIData.\_\_clipAfterFill

#### Defined in

[src/ui/packages/display-module/data/src/UIData.ts:37](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/display-module/data/src/UIData.ts#L37)

___

### \_\_hasSurface

• `get` **__hasSurface**(): `boolean`

#### Returns

`boolean`

#### Implementation of

[ILineData](../interfaces/ILineData.md).[__hasSurface](../interfaces/ILineData.md#__hassurface)

#### Inherited from

UIData.\_\_hasSurface

#### Defined in

[src/ui/packages/display-module/data/src/UIData.ts:38](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/display-module/data/src/UIData.ts#L38)

___

### \_\_autoWidth

• `get` **__autoWidth**(): `boolean`

#### Returns

`boolean`

#### Implementation of

[ILineData](../interfaces/ILineData.md).[__autoWidth](../interfaces/ILineData.md#__autowidth)

#### Inherited from

UIData.\_\_autoWidth

#### Defined in

[src/ui/packages/display-module/data/src/UIData.ts:55](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/display-module/data/src/UIData.ts#L55)

___

### \_\_autoHeight

• `get` **__autoHeight**(): `boolean`

#### Returns

`boolean`

#### Implementation of

[ILineData](../interfaces/ILineData.md).[__autoHeight](../interfaces/ILineData.md#__autoheight)

#### Inherited from

UIData.\_\_autoHeight

#### Defined in

[src/ui/packages/display-module/data/src/UIData.ts:56](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/display-module/data/src/UIData.ts#L56)

___

### \_\_autoSide

• `get` **__autoSide**(): `boolean`

#### Returns

`boolean`

#### Implementation of

[ILineData](../interfaces/ILineData.md).[__autoSide](../interfaces/ILineData.md#__autoside)

#### Inherited from

UIData.\_\_autoSide

#### Defined in

[src/ui/packages/display-module/data/src/UIData.ts:57](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/display-module/data/src/UIData.ts#L57)

___

### \_\_autoSize

• `get` **__autoSize**(): `boolean`

#### Returns

`boolean`

#### Implementation of

[ILineData](../interfaces/ILineData.md).[__autoSize](../interfaces/ILineData.md#__autosize)

#### Inherited from

UIData.\_\_autoSize

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

[ILineData](../interfaces/ILineData.md).[__get](../interfaces/ILineData.md#__get)

#### Inherited from

[UIData](UIData.md).[__get](UIData.md#__get)

#### Defined in

[src/leafer/packages/display-module/data/src/LeafData.ts:40](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/display-module/data/src/LeafData.ts#L40)

___

### \_\_getData

▸ **__getData**(): [`IObject`](../interfaces/IObject.md)

#### Returns

[`IObject`](../interfaces/IObject.md)

#### Implementation of

[ILineData](../interfaces/ILineData.md).[__getData](../interfaces/ILineData.md#__getdata)

#### Inherited from

[UIData](UIData.md).[__getData](UIData.md#__getdata)

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

[ILineData](../interfaces/ILineData.md).[__setInput](../interfaces/ILineData.md#__setinput)

#### Inherited from

[UIData](UIData.md).[__setInput](UIData.md#__setinput)

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

[ILineData](../interfaces/ILineData.md).[__getInput](../interfaces/ILineData.md#__getinput)

#### Inherited from

[UIData](UIData.md).[__getInput](UIData.md#__getinput)

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

[ILineData](../interfaces/ILineData.md).[__removeInput](../interfaces/ILineData.md#__removeinput)

#### Inherited from

[UIData](UIData.md).[__removeInput](UIData.md#__removeinput)

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

[ILineData](../interfaces/ILineData.md).[__getInputData](../interfaces/ILineData.md#__getinputdata)

#### Inherited from

[UIData](UIData.md).[__getInputData](UIData.md#__getinputdata)

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

[ILineData](../interfaces/ILineData.md).[__setMiddle](../interfaces/ILineData.md#__setmiddle)

#### Inherited from

[UIData](UIData.md).[__setMiddle](UIData.md#__setmiddle)

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

[ILineData](../interfaces/ILineData.md).[__getMiddle](../interfaces/ILineData.md#__getmiddle)

#### Inherited from

[UIData](UIData.md).[__getMiddle](UIData.md#__getmiddle)

#### Defined in

[src/leafer/packages/display-module/data/src/LeafData.ts:125](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/display-module/data/src/LeafData.ts#L125)

___

### \_\_checkSingle

▸ **__checkSingle**(): `void`

#### Returns

`void`

#### Implementation of

[ILineData](../interfaces/ILineData.md).[__checkSingle](../interfaces/ILineData.md#__checksingle)

#### Inherited from

[UIData](UIData.md).[__checkSingle](UIData.md#__checksingle)

#### Defined in

[src/leafer/packages/display-module/data/src/LeafData.ts:129](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/display-module/data/src/LeafData.ts#L129)

___

### \_\_removeNaturalSize

▸ **__removeNaturalSize**(): `void`

#### Returns

`void`

#### Implementation of

[ILineData](../interfaces/ILineData.md).[__removeNaturalSize](../interfaces/ILineData.md#__removenaturalsize)

#### Inherited from

[UIData](UIData.md).[__removeNaturalSize](UIData.md#__removenaturalsize)

#### Defined in

[src/leafer/packages/display-module/data/src/LeafData.ts:143](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/display-module/data/src/LeafData.ts#L143)

___

### destroy

▸ **destroy**(): `void`

#### Returns

`void`

#### Implementation of

[ILineData](../interfaces/ILineData.md).[destroy](../interfaces/ILineData.md#destroy)

#### Inherited from

[UIData](UIData.md).[destroy](UIData.md#destroy)

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

[UIData](UIData.md).[setVisible](UIData.md#setvisible)

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

[UIData](UIData.md).[setWidth](UIData.md#setwidth)

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

[UIData](UIData.md).[setHeight](UIData.md#setheight)

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

[UIData](UIData.md).[setFill](UIData.md#setfill)

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

[UIData](UIData.md).[setStroke](UIData.md#setstroke)

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

[UIData](UIData.md).[setPath](UIData.md#setpath)

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

[UIData](UIData.md).[setShadow](UIData.md#setshadow)

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

[UIData](UIData.md).[setInnerShadow](UIData.md#setinnershadow)

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

[UIData](UIData.md).[setFilter](UIData.md#setfilter)

#### Defined in

[src/ui/packages/display-module/data/src/UIData.ts:127](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/display-module/data/src/UIData.ts#L127)

___

### \_\_computePaint

▸ **__computePaint**(): `void`

#### Returns

`void`

#### Implementation of

[ILineData](../interfaces/ILineData.md).[__computePaint](../interfaces/ILineData.md#__computepaint)

#### Inherited from

[UIData](UIData.md).[__computePaint](UIData.md#__computepaint)

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

[ILineData](../interfaces/ILineData.md).[__getRealStrokeWidth](../interfaces/ILineData.md#__getrealstrokewidth)

#### Inherited from

[UIData](UIData.md).[__getRealStrokeWidth](UIData.md#__getrealstrokewidth)

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

[ILineData](../interfaces/ILineData.md).[__setPaint](../interfaces/ILineData.md#__setpaint)

#### Inherited from

[UIData](UIData.md).[__setPaint](UIData.md#__setpaint)

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

[ILineData](../interfaces/ILineData.md).[__removePaint](../interfaces/ILineData.md#__removepaint)

#### Inherited from

[UIData](UIData.md).[__removePaint](UIData.md#__removepaint)

#### Defined in

[src/ui/packages/display-module/data/src/UIData.ts:170](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/display-module/data/src/UIData.ts#L170)
