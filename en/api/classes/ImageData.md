# Class: ImageData

## Hierarchy

- [`RectData`](RectData.md)

  ↳ **`ImageData`**

  ↳↳ [`HTMLTextData`](HTMLTextData.md)

## Implements

- [`IImageData`](../interfaces/IImageData.md)

## Table of contents

### Constructors

- [constructor](ImageData.md#constructor)

### Properties

- [\_\_input](ImageData.md#__input)
- [\_\_middle](ImageData.md#__middle)
- [\_\_single](ImageData.md#__single)
- [\_\_naturalWidth](ImageData.md#__naturalwidth)
- [\_\_naturalHeight](ImageData.md#__naturalheight)
- [\_\_pathForRender](ImageData.md#__pathforrender)
- [\_\_useStroke](ImageData.md#__usestroke)
- [\_\_leaf](ImageData.md#__leaf)
- [\_url](ImageData.md#_url)
- [\_\_blendLayer](ImageData.md#__blendlayer)
- [\_\_isFills](ImageData.md#__isfills)
- [\_\_isStrokes](ImageData.md#__isstrokes)
- [\_\_hasMultiStrokeStyle](ImageData.md#__hasmultistrokestyle)
- [\_\_isAlphaPixelFill](ImageData.md#__isalphapixelfill)
- [\_\_isAlphaPixelStroke](ImageData.md#__isalphapixelstroke)
- [\_\_isTransparentFill](ImageData.md#__istransparentfill)
- [\_\_isTransparentStroke](ImageData.md#__istransparentstroke)
- [\_\_needComputePaint](ImageData.md#__needcomputepaint)
- [\_visible](ImageData.md#_visible)
- [\_width](ImageData.md#_width)
- [\_height](ImageData.md#_height)
- [\_fill](ImageData.md#_fill)
- [\_stroke](ImageData.md#_stroke)
- [\_path](ImageData.md#_path)
- [\_shadow](ImageData.md#_shadow)
- [\_innerShadow](ImageData.md#_innershadow)

### Accessors

- [\_\_useNaturalRatio](ImageData.md#__usenaturalratio)
- [\_\_isLinePath](ImageData.md#__islinepath)
- [\_\_usePathBox](ImageData.md#__usepathbox)
- [\_\_blendMode](ImageData.md#__blendmode)
- [\_\_urlType](ImageData.md#__urltype)
- [\_\_boxStroke](ImageData.md#__boxstroke)
- [scale](ImageData.md#scale)
- [\_\_strokeWidth](ImageData.md#__strokewidth)
- [\_\_maxStrokeWidth](ImageData.md#__maxstrokewidth)
- [\_\_hasMultiPaint](ImageData.md#__hasmultipaint)
- [\_\_clipAfterFill](ImageData.md#__clipafterfill)
- [\_\_hasSurface](ImageData.md#__hassurface)
- [\_\_autoWidth](ImageData.md#__autowidth)
- [\_\_autoHeight](ImageData.md#__autoheight)
- [\_\_autoSide](ImageData.md#__autoside)
- [\_\_autoSize](ImageData.md#__autosize)

### Methods

- [\_\_get](ImageData.md#__get)
- [\_\_setInput](ImageData.md#__setinput)
- [\_\_getInput](ImageData.md#__getinput)
- [\_\_removeInput](ImageData.md#__removeinput)
- [\_\_setMiddle](ImageData.md#__setmiddle)
- [\_\_getMiddle](ImageData.md#__getmiddle)
- [\_\_checkSingle](ImageData.md#__checksingle)
- [\_\_removeNaturalSize](ImageData.md#__removenaturalsize)
- [destroy](ImageData.md#destroy)
- [setUrl](ImageData.md#seturl)
- [\_\_setImageFill](ImageData.md#__setimagefill)
- [\_\_getData](ImageData.md#__getdata)
- [\_\_getInputData](ImageData.md#__getinputdata)
- [setVisible](ImageData.md#setvisible)
- [setWidth](ImageData.md#setwidth)
- [setHeight](ImageData.md#setheight)
- [setFill](ImageData.md#setfill)
- [setStroke](ImageData.md#setstroke)
- [setPath](ImageData.md#setpath)
- [setShadow](ImageData.md#setshadow)
- [setInnerShadow](ImageData.md#setinnershadow)
- [setFilter](ImageData.md#setfilter)
- [\_\_computePaint](ImageData.md#__computepaint)
- [\_\_getRealStrokeWidth](ImageData.md#__getrealstrokewidth)
- [\_\_setPaint](ImageData.md#__setpaint)
- [\_\_removePaint](ImageData.md#__removepaint)

## Constructors

### constructor

• **new ImageData**(`leaf`): [`ImageData`](ImageData.md)

#### Parameters

| Name   | Type                              |
| :----- | :-------------------------------- |
| `leaf` | [`ILeaf`](../interfaces/ILeaf.md) |

#### Returns

[`ImageData`](ImageData.md)

#### Inherited from

[RectData](RectData.md).[constructor](RectData.md#constructor)

#### Defined in

[src/leafer/packages/display-module/data/src/LeafData.ts:36](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/display-module/data/src/LeafData.ts#L36)

## Properties

### \_\_input

• **\_\_input**: [`IObject`](../interfaces/IObject.md)

#### Implementation of

[IImageData](../interfaces/IImageData.md).[__input](../interfaces/IImageData.md#__input)

#### Inherited from

[RectData](RectData.md).[__input](RectData.md#__input)

#### Defined in

[src/leafer/packages/display-module/data/src/LeafData.ts:8](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/display-module/data/src/LeafData.ts#L8)

___

### \_\_middle

• **\_\_middle**: [`IObject`](../interfaces/IObject.md)

#### Implementation of

[IImageData](../interfaces/IImageData.md).[__middle](../interfaces/IImageData.md#__middle)

#### Inherited from

[RectData](RectData.md).[__middle](RectData.md#__middle)

#### Defined in

[src/leafer/packages/display-module/data/src/LeafData.ts:9](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/display-module/data/src/LeafData.ts#L9)

___

### \_\_single

• **\_\_single**: `boolean`

#### Implementation of

[IImageData](../interfaces/IImageData.md).[__single](../interfaces/IImageData.md#__single)

#### Inherited from

[RectData](RectData.md).[__single](RectData.md#__single)

#### Defined in

[src/leafer/packages/display-module/data/src/LeafData.ts:11](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/display-module/data/src/LeafData.ts#L11)

___

### \_\_naturalWidth

• `Optional` **\_\_naturalWidth**: `number`

#### Implementation of

[IImageData](../interfaces/IImageData.md).[__naturalWidth](../interfaces/IImageData.md#__naturalwidth)

#### Inherited from

[RectData](RectData.md).[__naturalWidth](RectData.md#__naturalwidth)

#### Defined in

[src/leafer/packages/display-module/data/src/LeafData.ts:13](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/display-module/data/src/LeafData.ts#L13)

___

### \_\_naturalHeight

• `Optional` **\_\_naturalHeight**: `number`

#### Implementation of

[IImageData](../interfaces/IImageData.md).[__naturalHeight](../interfaces/IImageData.md#__naturalheight)

#### Inherited from

[RectData](RectData.md).[__naturalHeight](RectData.md#__naturalheight)

#### Defined in

[src/leafer/packages/display-module/data/src/LeafData.ts:14](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/display-module/data/src/LeafData.ts#L14)

___

### \_\_pathForRender

• `Optional` **\_\_pathForRender**: [`IPathCommandData`](../modules.md#ipathcommanddata)

#### Implementation of

[IImageData](../interfaces/IImageData.md).[__pathForRender](../interfaces/IImageData.md#__pathforrender)

#### Inherited from

[RectData](RectData.md).[__pathForRender](RectData.md#__pathforrender)

#### Defined in

[src/leafer/packages/display-module/data/src/LeafData.ts:16](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/display-module/data/src/LeafData.ts#L16)

___

### \_\_useStroke

• `Optional` **\_\_useStroke**: `boolean`

#### Implementation of

[IImageData](../interfaces/IImageData.md).[__useStroke](../interfaces/IImageData.md#__usestroke)

#### Inherited from

[RectData](RectData.md).[__useStroke](RectData.md#__usestroke)

#### Defined in

[src/leafer/packages/display-module/data/src/LeafData.ts:18](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/display-module/data/src/LeafData.ts#L18)

___

### \_\_leaf

• **\_\_leaf**: [`IImage`](../interfaces/IImage.md)

#### Implementation of

[IImageData](../interfaces/IImageData.md).[__leaf](../interfaces/IImageData.md#__leaf)

#### Overrides

[RectData](RectData.md).[__leaf](RectData.md#__leaf)

#### Defined in

[src/ui/packages/display-module/data/src/ImageData.ts:9](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/display-module/data/src/ImageData.ts#L9)

___

### \_url

• `Protected` **\_url**: `string`

#### Defined in

[src/ui/packages/display-module/data/src/ImageData.ts:13](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/display-module/data/src/ImageData.ts#L13)

___

### \_\_blendLayer

• `Optional` **\_\_blendLayer**: `boolean`

#### Implementation of

[IImageData](../interfaces/IImageData.md).[__blendLayer](../interfaces/IImageData.md#__blendlayer)

#### Inherited from

[RectData](RectData.md).[__blendLayer](RectData.md#__blendlayer)

#### Defined in

[src/ui/packages/display-module/data/src/UIData.ts:18](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/display-module/data/src/UIData.ts#L18)

___

### \_\_isFills

• `Optional` **\_\_isFills**: `boolean`

#### Implementation of

[IImageData](../interfaces/IImageData.md).[__isFills](../interfaces/IImageData.md#__isfills)

#### Inherited from

[RectData](RectData.md).[__isFills](RectData.md#__isfills)

#### Defined in

[src/ui/packages/display-module/data/src/UIData.ts:20](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/display-module/data/src/UIData.ts#L20)

___

### \_\_isStrokes

• `Optional` **\_\_isStrokes**: `boolean`

#### Implementation of

[IImageData](../interfaces/IImageData.md).[__isStrokes](../interfaces/IImageData.md#__isstrokes)

#### Inherited from

[RectData](RectData.md).[__isStrokes](RectData.md#__isstrokes)

#### Defined in

[src/ui/packages/display-module/data/src/UIData.ts:21](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/display-module/data/src/UIData.ts#L21)

___

### \_\_hasMultiStrokeStyle

• `Optional` **\_\_hasMultiStrokeStyle**: `number`

#### Implementation of

[IImageData](../interfaces/IImageData.md).[__hasMultiStrokeStyle](../interfaces/IImageData.md#__hasmultistrokestyle)

#### Inherited from

[RectData](RectData.md).[__hasMultiStrokeStyle](RectData.md#__hasmultistrokestyle)

#### Defined in

[src/ui/packages/display-module/data/src/UIData.ts:27](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/display-module/data/src/UIData.ts#L27)

___

### \_\_isAlphaPixelFill

• `Optional` **\_\_isAlphaPixelFill**: `boolean`

#### Implementation of

[IImageData](../interfaces/IImageData.md).[__isAlphaPixelFill](../interfaces/IImageData.md#__isalphapixelfill)

#### Inherited from

[RectData](RectData.md).[__isAlphaPixelFill](RectData.md#__isalphapixelfill)

#### Defined in

[src/ui/packages/display-module/data/src/UIData.ts:31](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/display-module/data/src/UIData.ts#L31)

___

### \_\_isAlphaPixelStroke

• `Optional` **\_\_isAlphaPixelStroke**: `boolean`

#### Implementation of

[IImageData](../interfaces/IImageData.md).[__isAlphaPixelStroke](../interfaces/IImageData.md#__isalphapixelstroke)

#### Inherited from

[RectData](RectData.md).[__isAlphaPixelStroke](RectData.md#__isalphapixelstroke)

#### Defined in

[src/ui/packages/display-module/data/src/UIData.ts:32](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/display-module/data/src/UIData.ts#L32)

___

### \_\_isTransparentFill

• `Optional` **\_\_isTransparentFill**: `boolean`

#### Implementation of

[IImageData](../interfaces/IImageData.md).[__isTransparentFill](../interfaces/IImageData.md#__istransparentfill)

#### Inherited from

[RectData](RectData.md).[__isTransparentFill](RectData.md#__istransparentfill)

#### Defined in

[src/ui/packages/display-module/data/src/UIData.ts:34](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/display-module/data/src/UIData.ts#L34)

___

### \_\_isTransparentStroke

• `Optional` **\_\_isTransparentStroke**: `boolean`

#### Implementation of

[IImageData](../interfaces/IImageData.md).[__isTransparentStroke](../interfaces/IImageData.md#__istransparentstroke)

#### Inherited from

[RectData](RectData.md).[__isTransparentStroke](RectData.md#__istransparentstroke)

#### Defined in

[src/ui/packages/display-module/data/src/UIData.ts:35](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/display-module/data/src/UIData.ts#L35)

___

### \_\_needComputePaint

• **\_\_needComputePaint**: `boolean`

#### Implementation of

[IImageData](../interfaces/IImageData.md).[__needComputePaint](../interfaces/IImageData.md#__needcomputepaint)

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

[IImageData](../interfaces/IImageData.md).[__useNaturalRatio](../interfaces/IImageData.md#__usenaturalratio)

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

[IImageData](../interfaces/IImageData.md).[__isLinePath](../interfaces/IImageData.md#__islinepath)

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

[IImageData](../interfaces/IImageData.md).[__usePathBox](../interfaces/IImageData.md#__usepathbox)

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

[IImageData](../interfaces/IImageData.md).[__blendMode](../interfaces/IImageData.md#__blendmode)

#### Inherited from

RectData.\_\_blendMode

#### Defined in

[src/leafer/packages/display-module/data/src/LeafData.ts:30](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/display-module/data/src/LeafData.ts#L30)

___

### \_\_urlType

• `get` **__urlType**(): [`IMultimediaType`](../modules.md#imultimediatype)

#### Returns

[`IMultimediaType`](../modules.md#imultimediatype)

#### Implementation of

[IImageData](../interfaces/IImageData.md).[__urlType](../interfaces/IImageData.md#__urltype)

#### Defined in

[src/ui/packages/display-module/data/src/ImageData.ts:11](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/display-module/data/src/ImageData.ts#L11)

___

### \_\_boxStroke

• `get` **__boxStroke**(): `boolean`

#### Returns

`boolean`

#### Implementation of

[IImageData](../interfaces/IImageData.md).[__boxStroke](../interfaces/IImageData.md#__boxstroke)

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

[IImageData](../interfaces/IImageData.md).[scale](../interfaces/IImageData.md#scale)

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

[IImageData](../interfaces/IImageData.md).[__strokeWidth](../interfaces/IImageData.md#__strokewidth)

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

[IImageData](../interfaces/IImageData.md).[__maxStrokeWidth](../interfaces/IImageData.md#__maxstrokewidth)

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

[IImageData](../interfaces/IImageData.md).[__hasMultiPaint](../interfaces/IImageData.md#__hasmultipaint)

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

[IImageData](../interfaces/IImageData.md).[__clipAfterFill](../interfaces/IImageData.md#__clipafterfill)

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

[IImageData](../interfaces/IImageData.md).[__hasSurface](../interfaces/IImageData.md#__hassurface)

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

[IImageData](../interfaces/IImageData.md).[__autoWidth](../interfaces/IImageData.md#__autowidth)

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

[IImageData](../interfaces/IImageData.md).[__autoHeight](../interfaces/IImageData.md#__autoheight)

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

[IImageData](../interfaces/IImageData.md).[__autoSide](../interfaces/IImageData.md#__autoside)

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

[IImageData](../interfaces/IImageData.md).[__autoSize](../interfaces/IImageData.md#__autosize)

#### Inherited from

RectData.\_\_autoSize

#### Defined in

[src/ui/packages/display-module/data/src/UIData.ts:58](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/display-module/data/src/UIData.ts#L58)

## Methods

### \_\_get

▸ **__get**(`name`): `any`

#### Parameters

| Name   | Type     |
| :----- | :------- |
| `name` | `string` |

#### Returns

`any`

#### Implementation of

[IImageData](../interfaces/IImageData.md).[__get](../interfaces/IImageData.md#__get)

#### Inherited from

[RectData](RectData.md).[__get](RectData.md#__get)

#### Defined in

[src/leafer/packages/display-module/data/src/LeafData.ts:40](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/display-module/data/src/LeafData.ts#L40)

___

### \_\_setInput

▸ **__setInput**(`name`, `value`): `void`

#### Parameters

| Name    | Type     |
| :------ | :------- |
| `name`  | `string` |
| `value` | `any`    |

#### Returns

`void`

#### Implementation of

[IImageData](../interfaces/IImageData.md).[__setInput](../interfaces/IImageData.md#__setinput)

#### Inherited from

[RectData](RectData.md).[__setInput](RectData.md#__setinput)

#### Defined in

[src/leafer/packages/display-module/data/src/LeafData.ts:60](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/display-module/data/src/LeafData.ts#L60)

___

### \_\_getInput

▸ **__getInput**(`name`): `any`

#### Parameters

| Name   | Type     |
| :----- | :------- |
| `name` | `string` |

#### Returns

`any`

#### Implementation of

[IImageData](../interfaces/IImageData.md).[__getInput](../interfaces/IImageData.md#__getinput)

#### Inherited from

[RectData](RectData.md).[__getInput](RectData.md#__getinput)

#### Defined in

[src/leafer/packages/display-module/data/src/LeafData.ts:65](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/display-module/data/src/LeafData.ts#L65)

___

### \_\_removeInput

▸ **__removeInput**(`name`): `void`

#### Parameters

| Name   | Type     |
| :----- | :------- |
| `name` | `string` |

#### Returns

`void`

#### Implementation of

[IImageData](../interfaces/IImageData.md).[__removeInput](../interfaces/IImageData.md#__removeinput)

#### Inherited from

[RectData](RectData.md).[__removeInput](RectData.md#__removeinput)

#### Defined in

[src/leafer/packages/display-module/data/src/LeafData.ts:76](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/display-module/data/src/LeafData.ts#L76)

___

### \_\_setMiddle

▸ **__setMiddle**(`name`, `value`): `void`

#### Parameters

| Name    | Type     |
| :------ | :------- |
| `name`  | `string` |
| `value` | `any`    |

#### Returns

`void`

#### Implementation of

[IImageData](../interfaces/IImageData.md).[__setMiddle](../interfaces/IImageData.md#__setmiddle)

#### Inherited from

[RectData](RectData.md).[__setMiddle](RectData.md#__setmiddle)

#### Defined in

[src/leafer/packages/display-module/data/src/LeafData.ts:120](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/display-module/data/src/LeafData.ts#L120)

___

### \_\_getMiddle

▸ **__getMiddle**(`name`): `any`

#### Parameters

| Name   | Type     |
| :----- | :------- |
| `name` | `string` |

#### Returns

`any`

#### Implementation of

[IImageData](../interfaces/IImageData.md).[__getMiddle](../interfaces/IImageData.md#__getmiddle)

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

[IImageData](../interfaces/IImageData.md).[__checkSingle](../interfaces/IImageData.md#__checksingle)

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

[IImageData](../interfaces/IImageData.md).[__removeNaturalSize](../interfaces/IImageData.md#__removenaturalsize)

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

[IImageData](../interfaces/IImageData.md).[destroy](../interfaces/IImageData.md#destroy)

#### Inherited from

[RectData](RectData.md).[destroy](RectData.md#destroy)

#### Defined in

[src/leafer/packages/display-module/data/src/LeafData.ts:147](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/display-module/data/src/LeafData.ts#L147)

___

### setUrl

▸ **setUrl**(`value`): `void`

#### Parameters

| Name    | Type     |
| :------ | :------- |
| `value` | `string` |

#### Returns

`void`

#### Defined in

[src/ui/packages/display-module/data/src/ImageData.ts:15](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/display-module/data/src/ImageData.ts#L15)

___

### \_\_setImageFill

▸ **__setImageFill**(`value`): `void`

#### Parameters

| Name    | Type     |
| :------ | :------- |
| `value` | `string` |

#### Returns

`void`

#### Implementation of

[IImageData](../interfaces/IImageData.md).[__setImageFill](../interfaces/IImageData.md#__setimagefill)

#### Defined in

[src/ui/packages/display-module/data/src/ImageData.ts:20](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/display-module/data/src/ImageData.ts#L20)

___

### \_\_getData

▸ **__getData**(): [`IObject`](../interfaces/IObject.md)

#### Returns

[`IObject`](../interfaces/IObject.md)

#### Implementation of

[IImageData](../interfaces/IImageData.md).[__getData](../interfaces/IImageData.md#__getdata)

#### Overrides

[RectData](RectData.md).[__getData](RectData.md#__getdata)

#### Defined in

[src/ui/packages/display-module/data/src/ImageData.ts:24](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/display-module/data/src/ImageData.ts#L24)

___

### \_\_getInputData

▸ **__getInputData**(`names?`, `options?`): [`IObject`](../interfaces/IObject.md)

#### Parameters

| Name       | Type                                                                                                      |
| :--------- | :-------------------------------------------------------------------------------------------------------- |
| `names?`   | `string`[] \\| [`IObject`](../interfaces/IObject.md) |
| `options?` | [`IJSONOptions`](../interfaces/IJSONOptions.md)                                                           |

#### Returns

[`IObject`](../interfaces/IObject.md)

#### Implementation of

[IImageData](../interfaces/IImageData.md).[__getInputData](../interfaces/IImageData.md#__getinputdata)

#### Overrides

[RectData](RectData.md).[__getInputData](RectData.md#__getinputdata)

#### Defined in

[src/ui/packages/display-module/data/src/ImageData.ts:30](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/display-module/data/src/ImageData.ts#L30)

___

### setVisible

▸ **setVisible**(`value`): `void`

#### Parameters

| Name    | Type      |
| :------ | :-------- |
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

| Name    | Type     |
| :------ | :------- |
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

| Name    | Type     |
| :------ | :------- |
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

| Name    | Type                             |
| :------ | :------------------------------- |
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

| Name    | Type                             |
| :------ | :------------------------------- |
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

| Name    | Type                                                                                                                                                                                                                                                                                                   |
| :------ | :----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `value` | `string` \\| [`IPathCommandData`](../modules.md#ipathcommanddata) \\| [`IPathCommandNode`](../modules.md#ipathcommandnode)[] \\| [`IPathCommandObject`](../modules.md#ipathcommandobject)[] |

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

| Name    | Type                             |
| :------ | :------------------------------- |
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

| Name    | Type                             |
| :------ | :------------------------------- |
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

| Name    | Type                             |
| :------ | :------------------------------- |
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

[IImageData](../interfaces/IImageData.md).[__computePaint](../interfaces/IImageData.md#__computepaint)

#### Inherited from

[RectData](RectData.md).[__computePaint](RectData.md#__computepaint)

#### Defined in

[src/ui/packages/display-module/data/src/UIData.ts:134](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/display-module/data/src/UIData.ts#L134)

___

### \_\_getRealStrokeWidth

▸ **__getRealStrokeWidth**(`childStyle?`): `number`

#### Parameters

| Name          | Type                                                            |
| :------------ | :-------------------------------------------------------------- |
| `childStyle?` | [`IStrokeComputedStyle`](../interfaces/IStrokeComputedStyle.md) |

#### Returns

`number`

#### Implementation of

[IImageData](../interfaces/IImageData.md).[__getRealStrokeWidth](../interfaces/IImageData.md#__getrealstrokewidth)

#### Inherited from

[RectData](RectData.md).[__getRealStrokeWidth](RectData.md#__getrealstrokewidth)

#### Defined in

[src/ui/packages/display-module/data/src/UIData.ts:142](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/display-module/data/src/UIData.ts#L142)

___

### \_\_setPaint

▸ **__setPaint**(`attrName`, `value`): `void`

#### Parameters

| Name       | Type                             |
| :--------- | :------------------------------- |
| `attrName` | `"fill"` \\| `"stroke"`         |
| `value`    | [`IValue`](../modules.md#ivalue) |

#### Returns

`void`

#### Implementation of

[IImageData](../interfaces/IImageData.md).[__setPaint](../interfaces/IImageData.md#__setpaint)

#### Inherited from

[RectData](RectData.md).[__setPaint](RectData.md#__setpaint)

#### Defined in

[src/ui/packages/display-module/data/src/UIData.ts:158](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/display-module/data/src/UIData.ts#L158)

___

### \_\_removePaint

▸ **__removePaint**(`attrName`, `removeInput?`): `void`

#### Parameters

| Name           | Type                     |
| :------------- | :----------------------- |
| `attrName`     | `"fill"` \\| `"stroke"` |
| `removeInput?` | `boolean`                |

#### Returns

`void`

#### Implementation of

[IImageData](../interfaces/IImageData.md).[__removePaint](../interfaces/IImageData.md#__removepaint)

#### Inherited from

[RectData](RectData.md).[__removePaint](RectData.md#__removepaint)

#### Defined in

[src/ui/packages/display-module/data/src/UIData.ts:170](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/display-module/data/src/UIData.ts#L170)
