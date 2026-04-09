# Class: HTMLTextData

## Hierarchy

- [`ImageData`](ImageData.md)

  ↳ **`HTMLTextData`**

## Implements

- [`IHTMLTextData`](../interfaces/IHTMLTextData.md)

## Table of contents

### Constructors

- [constructor](HTMLTextData.md#constructor)

### Properties

- [\_text](HTMLTextData.md#_text)
- [\_\_htmlChanged](HTMLTextData.md#__htmlchanged)
- [\_\_input](HTMLTextData.md#__input)
- [\_\_middle](HTMLTextData.md#__middle)
- [\_\_single](HTMLTextData.md#__single)
- [\_\_naturalWidth](HTMLTextData.md#__naturalwidth)
- [\_\_naturalHeight](HTMLTextData.md#__naturalheight)
- [\_\_pathForRender](HTMLTextData.md#__pathforrender)
- [\_\_useStroke](HTMLTextData.md#__usestroke)
- [\_\_leaf](HTMLTextData.md#__leaf)
- [\_url](HTMLTextData.md#_url)
- [\_\_blendLayer](HTMLTextData.md#__blendlayer)
- [\_\_isFills](HTMLTextData.md#__isfills)
- [\_\_isStrokes](HTMLTextData.md#__isstrokes)
- [\_\_hasMultiStrokeStyle](HTMLTextData.md#__hasmultistrokestyle)
- [\_\_isAlphaPixelFill](HTMLTextData.md#__isalphapixelfill)
- [\_\_isAlphaPixelStroke](HTMLTextData.md#__isalphapixelstroke)
- [\_\_isTransparentFill](HTMLTextData.md#__istransparentfill)
- [\_\_isTransparentStroke](HTMLTextData.md#__istransparentstroke)
- [\_\_needComputePaint](HTMLTextData.md#__needcomputepaint)
- [\_visible](HTMLTextData.md#_visible)
- [\_width](HTMLTextData.md#_width)
- [\_height](HTMLTextData.md#_height)
- [\_fill](HTMLTextData.md#_fill)
- [\_stroke](HTMLTextData.md#_stroke)
- [\_path](HTMLTextData.md#_path)
- [\_shadow](HTMLTextData.md#_shadow)
- [\_innerShadow](HTMLTextData.md#_innershadow)

### Accessors

- [\_\_useNaturalRatio](HTMLTextData.md#__usenaturalratio)
- [\_\_isLinePath](HTMLTextData.md#__islinepath)
- [\_\_usePathBox](HTMLTextData.md#__usepathbox)
- [\_\_blendMode](HTMLTextData.md#__blendmode)
- [\_\_urlType](HTMLTextData.md#__urltype)
- [\_\_boxStroke](HTMLTextData.md#__boxstroke)
- [scale](HTMLTextData.md#scale)
- [\_\_strokeWidth](HTMLTextData.md#__strokewidth)
- [\_\_maxStrokeWidth](HTMLTextData.md#__maxstrokewidth)
- [\_\_hasMultiPaint](HTMLTextData.md#__hasmultipaint)
- [\_\_clipAfterFill](HTMLTextData.md#__clipafterfill)
- [\_\_hasSurface](HTMLTextData.md#__hassurface)
- [\_\_autoWidth](HTMLTextData.md#__autowidth)
- [\_\_autoHeight](HTMLTextData.md#__autoheight)
- [\_\_autoSide](HTMLTextData.md#__autoside)
- [\_\_autoSize](HTMLTextData.md#__autosize)

### Methods

- [setText](HTMLTextData.md#settext)
- [\_\_get](HTMLTextData.md#__get)
- [\_\_setInput](HTMLTextData.md#__setinput)
- [\_\_getInput](HTMLTextData.md#__getinput)
- [\_\_removeInput](HTMLTextData.md#__removeinput)
- [\_\_setMiddle](HTMLTextData.md#__setmiddle)
- [\_\_getMiddle](HTMLTextData.md#__getmiddle)
- [\_\_checkSingle](HTMLTextData.md#__checksingle)
- [\_\_removeNaturalSize](HTMLTextData.md#__removenaturalsize)
- [destroy](HTMLTextData.md#destroy)
- [setUrl](HTMLTextData.md#seturl)
- [\_\_setImageFill](HTMLTextData.md#__setimagefill)
- [\_\_getData](HTMLTextData.md#__getdata)
- [\_\_getInputData](HTMLTextData.md#__getinputdata)
- [setVisible](HTMLTextData.md#setvisible)
- [setWidth](HTMLTextData.md#setwidth)
- [setHeight](HTMLTextData.md#setheight)
- [setFill](HTMLTextData.md#setfill)
- [setStroke](HTMLTextData.md#setstroke)
- [setPath](HTMLTextData.md#setpath)
- [setShadow](HTMLTextData.md#setshadow)
- [setInnerShadow](HTMLTextData.md#setinnershadow)
- [setFilter](HTMLTextData.md#setfilter)
- [\_\_computePaint](HTMLTextData.md#__computepaint)
- [\_\_getRealStrokeWidth](HTMLTextData.md#__getrealstrokewidth)
- [\_\_setPaint](HTMLTextData.md#__setpaint)
- [\_\_removePaint](HTMLTextData.md#__removepaint)

## Constructors

### constructor

• **new HTMLTextData**(`leaf`): [`HTMLTextData`](HTMLTextData.md)

#### Parameters

| Name   | Type                              |
| :----- | :-------------------------------- |
| `leaf` | [`ILeaf`](../interfaces/ILeaf.md) |

#### Returns

[`HTMLTextData`](HTMLTextData.md)

#### Inherited from

[ImageData](ImageData.md).[constructor](ImageData.md#constructor)

#### Defined in

[src/leafer/packages/display-module/data/src/LeafData.ts:36](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/display-module/data/src/LeafData.ts#L36)

## Properties

### \_text

• **\_text**: `string`

#### Defined in

[src/in/packages/html/src/data/HTMLTextData.ts:9](https://github.com/leaferjs/leafer-in/blob/d97f6888a45310d40717e43f47796d4f7d0dce1d/packages/html/src/data/HTMLTextData.ts#L9)

___

### \_\_htmlChanged

• **\_\_htmlChanged**: `boolean`

#### Implementation of

[IHTMLTextData](../interfaces/IHTMLTextData.md).[__htmlChanged](../interfaces/IHTMLTextData.md#__htmlchanged)

#### Defined in

[src/in/packages/html/src/data/HTMLTextData.ts:10](https://github.com/leaferjs/leafer-in/blob/d97f6888a45310d40717e43f47796d4f7d0dce1d/packages/html/src/data/HTMLTextData.ts#L10)

___

### \_\_input

• **\_\_input**: [`IObject`](../interfaces/IObject.md)

#### Implementation of

[IHTMLTextData](../interfaces/IHTMLTextData.md).[__input](../interfaces/IHTMLTextData.md#__input)

#### Inherited from

[ImageData](ImageData.md).[__input](ImageData.md#__input)

#### Defined in

[src/leafer/packages/display-module/data/src/LeafData.ts:8](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/display-module/data/src/LeafData.ts#L8)

___

### \_\_middle

• **\_\_middle**: [`IObject`](../interfaces/IObject.md)

#### Implementation of

[IHTMLTextData](../interfaces/IHTMLTextData.md).[__middle](../interfaces/IHTMLTextData.md#__middle)

#### Inherited from

[ImageData](ImageData.md).[__middle](ImageData.md#__middle)

#### Defined in

[src/leafer/packages/display-module/data/src/LeafData.ts:9](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/display-module/data/src/LeafData.ts#L9)

___

### \_\_single

• **\_\_single**: `boolean`

#### Implementation of

[IHTMLTextData](../interfaces/IHTMLTextData.md).[__single](../interfaces/IHTMLTextData.md#__single)

#### Inherited from

[ImageData](ImageData.md).[__single](ImageData.md#__single)

#### Defined in

[src/leafer/packages/display-module/data/src/LeafData.ts:11](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/display-module/data/src/LeafData.ts#L11)

___

### \_\_naturalWidth

• `Optional` **\_\_naturalWidth**: `number`

#### Implementation of

[IHTMLTextData](../interfaces/IHTMLTextData.md).[__naturalWidth](../interfaces/IHTMLTextData.md#__naturalwidth)

#### Inherited from

[ImageData](ImageData.md).[__naturalWidth](ImageData.md#__naturalwidth)

#### Defined in

[src/leafer/packages/display-module/data/src/LeafData.ts:13](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/display-module/data/src/LeafData.ts#L13)

___

### \_\_naturalHeight

• `Optional` **\_\_naturalHeight**: `number`

#### Implementation of

[IHTMLTextData](../interfaces/IHTMLTextData.md).[__naturalHeight](../interfaces/IHTMLTextData.md#__naturalheight)

#### Inherited from

[ImageData](ImageData.md).[__naturalHeight](ImageData.md#__naturalheight)

#### Defined in

[src/leafer/packages/display-module/data/src/LeafData.ts:14](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/display-module/data/src/LeafData.ts#L14)

___

### \_\_pathForRender

• `Optional` **\_\_pathForRender**: [`IPathCommandData`](../modules.md#ipathcommanddata)

#### Implementation of

[IHTMLTextData](../interfaces/IHTMLTextData.md).[__pathForRender](../interfaces/IHTMLTextData.md#__pathforrender)

#### Inherited from

[ImageData](ImageData.md).[__pathForRender](ImageData.md#__pathforrender)

#### Defined in

[src/leafer/packages/display-module/data/src/LeafData.ts:16](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/display-module/data/src/LeafData.ts#L16)

___

### \_\_useStroke

• `Optional` **\_\_useStroke**: `boolean`

#### Implementation of

[IHTMLTextData](../interfaces/IHTMLTextData.md).[__useStroke](../interfaces/IHTMLTextData.md#__usestroke)

#### Inherited from

[ImageData](ImageData.md).[__useStroke](ImageData.md#__usestroke)

#### Defined in

[src/leafer/packages/display-module/data/src/LeafData.ts:18](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/display-module/data/src/LeafData.ts#L18)

___

### \_\_leaf

• **\_\_leaf**: [`IImage`](../interfaces/IImage.md)

#### Implementation of

[IHTMLTextData](../interfaces/IHTMLTextData.md).[__leaf](../interfaces/IHTMLTextData.md#__leaf)

#### Inherited from

[ImageData](ImageData.md).[__leaf](ImageData.md#__leaf)

#### Defined in

[src/ui/packages/display-module/data/src/ImageData.ts:9](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/display-module/data/src/ImageData.ts#L9)

___

### \_url

• `Protected` **\_url**: `string`

#### Inherited from

[ImageData](ImageData.md).[_url](ImageData.md#_url)

#### Defined in

[src/ui/packages/display-module/data/src/ImageData.ts:13](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/display-module/data/src/ImageData.ts#L13)

___

### \_\_blendLayer

• `Optional` **\_\_blendLayer**: `boolean`

#### Implementation of

[IHTMLTextData](../interfaces/IHTMLTextData.md).[__blendLayer](../interfaces/IHTMLTextData.md#__blendlayer)

#### Inherited from

[ImageData](ImageData.md).[__blendLayer](ImageData.md#__blendlayer)

#### Defined in

[src/ui/packages/display-module/data/src/UIData.ts:18](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/display-module/data/src/UIData.ts#L18)

___

### \_\_isFills

• `Optional` **\_\_isFills**: `boolean`

#### Implementation of

[IHTMLTextData](../interfaces/IHTMLTextData.md).[__isFills](../interfaces/IHTMLTextData.md#__isfills)

#### Inherited from

[ImageData](ImageData.md).[__isFills](ImageData.md#__isfills)

#### Defined in

[src/ui/packages/display-module/data/src/UIData.ts:20](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/display-module/data/src/UIData.ts#L20)

___

### \_\_isStrokes

• `Optional` **\_\_isStrokes**: `boolean`

#### Implementation of

[IHTMLTextData](../interfaces/IHTMLTextData.md).[__isStrokes](../interfaces/IHTMLTextData.md#__isstrokes)

#### Inherited from

[ImageData](ImageData.md).[__isStrokes](ImageData.md#__isstrokes)

#### Defined in

[src/ui/packages/display-module/data/src/UIData.ts:21](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/display-module/data/src/UIData.ts#L21)

___

### \_\_hasMultiStrokeStyle

• `Optional` **\_\_hasMultiStrokeStyle**: `number`

#### Implementation of

[IHTMLTextData](../interfaces/IHTMLTextData.md).[__hasMultiStrokeStyle](../interfaces/IHTMLTextData.md#__hasmultistrokestyle)

#### Inherited from

[ImageData](ImageData.md).[__hasMultiStrokeStyle](ImageData.md#__hasmultistrokestyle)

#### Defined in

[src/ui/packages/display-module/data/src/UIData.ts:27](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/display-module/data/src/UIData.ts#L27)

___

### \_\_isAlphaPixelFill

• `Optional` **\_\_isAlphaPixelFill**: `boolean`

#### Implementation of

[IHTMLTextData](../interfaces/IHTMLTextData.md).[__isAlphaPixelFill](../interfaces/IHTMLTextData.md#__isalphapixelfill)

#### Inherited from

[ImageData](ImageData.md).[__isAlphaPixelFill](ImageData.md#__isalphapixelfill)

#### Defined in

[src/ui/packages/display-module/data/src/UIData.ts:31](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/display-module/data/src/UIData.ts#L31)

___

### \_\_isAlphaPixelStroke

• `Optional` **\_\_isAlphaPixelStroke**: `boolean`

#### Implementation of

[IHTMLTextData](../interfaces/IHTMLTextData.md).[__isAlphaPixelStroke](../interfaces/IHTMLTextData.md#__isalphapixelstroke)

#### Inherited from

[ImageData](ImageData.md).[__isAlphaPixelStroke](ImageData.md#__isalphapixelstroke)

#### Defined in

[src/ui/packages/display-module/data/src/UIData.ts:32](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/display-module/data/src/UIData.ts#L32)

___

### \_\_isTransparentFill

• `Optional` **\_\_isTransparentFill**: `boolean`

#### Implementation of

[IHTMLTextData](../interfaces/IHTMLTextData.md).[__isTransparentFill](../interfaces/IHTMLTextData.md#__istransparentfill)

#### Inherited from

[ImageData](ImageData.md).[__isTransparentFill](ImageData.md#__istransparentfill)

#### Defined in

[src/ui/packages/display-module/data/src/UIData.ts:34](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/display-module/data/src/UIData.ts#L34)

___

### \_\_isTransparentStroke

• `Optional` **\_\_isTransparentStroke**: `boolean`

#### Implementation of

[IHTMLTextData](../interfaces/IHTMLTextData.md).[__isTransparentStroke](../interfaces/IHTMLTextData.md#__istransparentstroke)

#### Inherited from

[ImageData](ImageData.md).[__isTransparentStroke](ImageData.md#__istransparentstroke)

#### Defined in

[src/ui/packages/display-module/data/src/UIData.ts:35](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/display-module/data/src/UIData.ts#L35)

___

### \_\_needComputePaint

• **\_\_needComputePaint**: `boolean`

#### Implementation of

[IHTMLTextData](../interfaces/IHTMLTextData.md).[__needComputePaint](../interfaces/IHTMLTextData.md#__needcomputepaint)

#### Inherited from

[ImageData](ImageData.md).[__needComputePaint](ImageData.md#__needcomputepaint)

#### Defined in

[src/ui/packages/display-module/data/src/UIData.ts:40](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/display-module/data/src/UIData.ts#L40)

___

### \_visible

• `Protected` `Optional` **\_visible**: `boolean`

#### Inherited from

[ImageData](ImageData.md).[_visible](ImageData.md#_visible)

#### Defined in

[src/ui/packages/display-module/data/src/UIData.ts:42](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/display-module/data/src/UIData.ts#L42)

___

### \_width

• `Protected` `Optional` **\_width**: `number`

#### Inherited from

[ImageData](ImageData.md).[_width](ImageData.md#_width)

#### Defined in

[src/ui/packages/display-module/data/src/UIData.ts:44](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/display-module/data/src/UIData.ts#L44)

___

### \_height

• `Protected` `Optional` **\_height**: `number`

#### Inherited from

[ImageData](ImageData.md).[_height](ImageData.md#_height)

#### Defined in

[src/ui/packages/display-module/data/src/UIData.ts:45](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/display-module/data/src/UIData.ts#L45)

___

### \_fill

• `Protected` `Optional` **\_fill**: [`IValue`](../modules.md#ivalue)

#### Inherited from

[ImageData](ImageData.md).[_fill](ImageData.md#_fill)

#### Defined in

[src/ui/packages/display-module/data/src/UIData.ts:47](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/display-module/data/src/UIData.ts#L47)

___

### \_stroke

• `Protected` `Optional` **\_stroke**: [`IValue`](../modules.md#ivalue)

#### Inherited from

[ImageData](ImageData.md).[_stroke](ImageData.md#_stroke)

#### Defined in

[src/ui/packages/display-module/data/src/UIData.ts:48](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/display-module/data/src/UIData.ts#L48)

___

### \_path

• `Protected` **\_path**: [`IPathCommandData`](../modules.md#ipathcommanddata)

#### Inherited from

[ImageData](ImageData.md).[_path](ImageData.md#_path)

#### Defined in

[src/ui/packages/display-module/data/src/UIData.ts:50](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/display-module/data/src/UIData.ts#L50)

___

### \_shadow

• `Protected` `Optional` **\_shadow**: [`IValue`](../modules.md#ivalue)

#### Inherited from

[ImageData](ImageData.md).[_shadow](ImageData.md#_shadow)

#### Defined in

[src/ui/packages/display-module/data/src/UIData.ts:52](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/display-module/data/src/UIData.ts#L52)

___

### \_innerShadow

• `Protected` `Optional` **\_innerShadow**: [`IValue`](../modules.md#ivalue)

#### Inherited from

[ImageData](ImageData.md).[_innerShadow](ImageData.md#_innershadow)

#### Defined in

[src/ui/packages/display-module/data/src/UIData.ts:53](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/display-module/data/src/UIData.ts#L53)

## Accessors

### \_\_useNaturalRatio

• `get` **__useNaturalRatio**(): `boolean`

#### Returns

`boolean`

#### Implementation of

[IHTMLTextData](../interfaces/IHTMLTextData.md).[__useNaturalRatio](../interfaces/IHTMLTextData.md#__usenaturalratio)

#### Inherited from

ImageData.\_\_useNaturalRatio

#### Defined in

[src/leafer/packages/display-module/data/src/LeafData.ts:19](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/display-module/data/src/LeafData.ts#L19)

___

### \_\_isLinePath

• `get` **__isLinePath**(): `boolean`

#### Returns

`boolean`

#### Implementation of

[IHTMLTextData](../interfaces/IHTMLTextData.md).[__isLinePath](../interfaces/IHTMLTextData.md#__islinepath)

#### Inherited from

ImageData.\_\_isLinePath

#### Defined in

[src/leafer/packages/display-module/data/src/LeafData.ts:21](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/display-module/data/src/LeafData.ts#L21)

___

### \_\_usePathBox

• `get` **__usePathBox**(): `boolean`

#### Returns

`boolean`

#### Implementation of

[IHTMLTextData](../interfaces/IHTMLTextData.md).[__usePathBox](../interfaces/IHTMLTextData.md#__usepathbox)

#### Inherited from

ImageData.\_\_usePathBox

#### Defined in

[src/leafer/packages/display-module/data/src/LeafData.ts:26](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/display-module/data/src/LeafData.ts#L26)

___

### \_\_blendMode

• `get` **__blendMode**(): `string`

#### Returns

`string`

#### Implementation of

[IHTMLTextData](../interfaces/IHTMLTextData.md).[__blendMode](../interfaces/IHTMLTextData.md#__blendmode)

#### Inherited from

ImageData.\_\_blendMode

#### Defined in

[src/leafer/packages/display-module/data/src/LeafData.ts:30](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/display-module/data/src/LeafData.ts#L30)

___

### \_\_urlType

• `get` **__urlType**(): [`IMultimediaType`](../modules.md#imultimediatype)

#### Returns

[`IMultimediaType`](../modules.md#imultimediatype)

#### Implementation of

[IHTMLTextData](../interfaces/IHTMLTextData.md).[__urlType](../interfaces/IHTMLTextData.md#__urltype)

#### Inherited from

ImageData.\_\_urlType

#### Defined in

[src/ui/packages/display-module/data/src/ImageData.ts:11](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/display-module/data/src/ImageData.ts#L11)

___

### \_\_boxStroke

• `get` **__boxStroke**(): `boolean`

#### Returns

`boolean`

#### Implementation of

[IHTMLTextData](../interfaces/IHTMLTextData.md).[__boxStroke](../interfaces/IHTMLTextData.md#__boxstroke)

#### Inherited from

ImageData.\_\_boxStroke

#### Defined in

[src/ui/packages/display-module/data/src/RectData.ts:7](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/display-module/data/src/RectData.ts#L7)

___

### scale

• `get` **scale**(): `number` \| [`IPointData`](../interfaces/IPointData.md)

#### Returns

`number` \| [`IPointData`](../interfaces/IPointData.md)

#### Implementation of

[IHTMLTextData](../interfaces/IHTMLTextData.md).[scale](../interfaces/IHTMLTextData.md#scale)

#### Inherited from

ImageData.scale

#### Defined in

[src/ui/packages/display-module/data/src/UIData.ts:16](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/display-module/data/src/UIData.ts#L16)

___

### \_\_strokeWidth

• `get` **__strokeWidth**(): `number`

#### Returns

`number`

#### Implementation of

[IHTMLTextData](../interfaces/IHTMLTextData.md).[__strokeWidth](../interfaces/IHTMLTextData.md#__strokewidth)

#### Inherited from

ImageData.\_\_strokeWidth

#### Defined in

[src/ui/packages/display-module/data/src/UIData.ts:23](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/display-module/data/src/UIData.ts#L23)

___

### \_\_maxStrokeWidth

• `get` **__maxStrokeWidth**(): `number`

#### Returns

`number`

#### Implementation of

[IHTMLTextData](../interfaces/IHTMLTextData.md).[__maxStrokeWidth](../interfaces/IHTMLTextData.md#__maxstrokewidth)

#### Inherited from

ImageData.\_\_maxStrokeWidth

#### Defined in

[src/ui/packages/display-module/data/src/UIData.ts:25](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/display-module/data/src/UIData.ts#L25)

___

### \_\_hasMultiPaint

• `get` **__hasMultiPaint**(): `boolean`

#### Returns

`boolean`

#### Implementation of

[IHTMLTextData](../interfaces/IHTMLTextData.md).[__hasMultiPaint](../interfaces/IHTMLTextData.md#__hasmultipaint)

#### Inherited from

ImageData.\_\_hasMultiPaint

#### Defined in

[src/ui/packages/display-module/data/src/UIData.ts:29](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/display-module/data/src/UIData.ts#L29)

___

### \_\_clipAfterFill

• `get` **__clipAfterFill**(): `boolean`

#### Returns

`boolean`

#### Implementation of

[IHTMLTextData](../interfaces/IHTMLTextData.md).[__clipAfterFill](../interfaces/IHTMLTextData.md#__clipafterfill)

#### Inherited from

ImageData.\_\_clipAfterFill

#### Defined in

[src/ui/packages/display-module/data/src/UIData.ts:37](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/display-module/data/src/UIData.ts#L37)

___

### \_\_hasSurface

• `get` **__hasSurface**(): `boolean`

#### Returns

`boolean`

#### Implementation of

[IHTMLTextData](../interfaces/IHTMLTextData.md).[__hasSurface](../interfaces/IHTMLTextData.md#__hassurface)

#### Inherited from

ImageData.\_\_hasSurface

#### Defined in

[src/ui/packages/display-module/data/src/UIData.ts:38](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/display-module/data/src/UIData.ts#L38)

___

### \_\_autoWidth

• `get` **__autoWidth**(): `boolean`

#### Returns

`boolean`

#### Implementation of

[IHTMLTextData](../interfaces/IHTMLTextData.md).[__autoWidth](../interfaces/IHTMLTextData.md#__autowidth)

#### Inherited from

ImageData.\_\_autoWidth

#### Defined in

[src/ui/packages/display-module/data/src/UIData.ts:55](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/display-module/data/src/UIData.ts#L55)

___

### \_\_autoHeight

• `get` **__autoHeight**(): `boolean`

#### Returns

`boolean`

#### Implementation of

[IHTMLTextData](../interfaces/IHTMLTextData.md).[__autoHeight](../interfaces/IHTMLTextData.md#__autoheight)

#### Inherited from

ImageData.\_\_autoHeight

#### Defined in

[src/ui/packages/display-module/data/src/UIData.ts:56](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/display-module/data/src/UIData.ts#L56)

___

### \_\_autoSide

• `get` **__autoSide**(): `boolean`

#### Returns

`boolean`

#### Implementation of

[IHTMLTextData](../interfaces/IHTMLTextData.md).[__autoSide](../interfaces/IHTMLTextData.md#__autoside)

#### Inherited from

ImageData.\_\_autoSide

#### Defined in

[src/ui/packages/display-module/data/src/UIData.ts:57](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/display-module/data/src/UIData.ts#L57)

___

### \_\_autoSize

• `get` **__autoSize**(): `boolean`

#### Returns

`boolean`

#### Implementation of

[IHTMLTextData](../interfaces/IHTMLTextData.md).[__autoSize](../interfaces/IHTMLTextData.md#__autosize)

#### Inherited from

ImageData.\_\_autoSize

#### Defined in

[src/ui/packages/display-module/data/src/UIData.ts:58](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/display-module/data/src/UIData.ts#L58)

## Methods

### setText

▸ **setText**(`value`): `void`

#### Parameters

| Name    | Type     |
| :------ | :------- |
| `value` | `string` |

#### Returns

`void`

#### Defined in

[src/in/packages/html/src/data/HTMLTextData.ts:12](https://github.com/leaferjs/leafer-in/blob/d97f6888a45310d40717e43f47796d4f7d0dce1d/packages/html/src/data/HTMLTextData.ts#L12)

___

### \_\_get

▸ **__get**(`name`): `any`

#### Parameters

| Name   | Type     |
| :----- | :------- |
| `name` | `string` |

#### Returns

`any`

#### Implementation of

[IHTMLTextData](../interfaces/IHTMLTextData.md).[__get](../interfaces/IHTMLTextData.md#__get)

#### Inherited from

[ImageData](ImageData.md).[__get](ImageData.md#__get)

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

[IHTMLTextData](../interfaces/IHTMLTextData.md).[__setInput](../interfaces/IHTMLTextData.md#__setinput)

#### Inherited from

[ImageData](ImageData.md).[__setInput](ImageData.md#__setinput)

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

[IHTMLTextData](../interfaces/IHTMLTextData.md).[__getInput](../interfaces/IHTMLTextData.md#__getinput)

#### Inherited from

[ImageData](ImageData.md).[__getInput](ImageData.md#__getinput)

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

[IHTMLTextData](../interfaces/IHTMLTextData.md).[__removeInput](../interfaces/IHTMLTextData.md#__removeinput)

#### Inherited from

[ImageData](ImageData.md).[__removeInput](ImageData.md#__removeinput)

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

[IHTMLTextData](../interfaces/IHTMLTextData.md).[__setMiddle](../interfaces/IHTMLTextData.md#__setmiddle)

#### Inherited from

[ImageData](ImageData.md).[__setMiddle](ImageData.md#__setmiddle)

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

[IHTMLTextData](../interfaces/IHTMLTextData.md).[__getMiddle](../interfaces/IHTMLTextData.md#__getmiddle)

#### Inherited from

[ImageData](ImageData.md).[__getMiddle](ImageData.md#__getmiddle)

#### Defined in

[src/leafer/packages/display-module/data/src/LeafData.ts:125](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/display-module/data/src/LeafData.ts#L125)

___

### \_\_checkSingle

▸ **__checkSingle**(): `void`

#### Returns

`void`

#### Implementation of

[IHTMLTextData](../interfaces/IHTMLTextData.md).[__checkSingle](../interfaces/IHTMLTextData.md#__checksingle)

#### Inherited from

[ImageData](ImageData.md).[__checkSingle](ImageData.md#__checksingle)

#### Defined in

[src/leafer/packages/display-module/data/src/LeafData.ts:129](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/display-module/data/src/LeafData.ts#L129)

___

### \_\_removeNaturalSize

▸ **__removeNaturalSize**(): `void`

#### Returns

`void`

#### Implementation of

[IHTMLTextData](../interfaces/IHTMLTextData.md).[__removeNaturalSize](../interfaces/IHTMLTextData.md#__removenaturalsize)

#### Inherited from

[ImageData](ImageData.md).[__removeNaturalSize](ImageData.md#__removenaturalsize)

#### Defined in

[src/leafer/packages/display-module/data/src/LeafData.ts:143](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/display-module/data/src/LeafData.ts#L143)

___

### destroy

▸ **destroy**(): `void`

#### Returns

`void`

#### Implementation of

[IHTMLTextData](../interfaces/IHTMLTextData.md).[destroy](../interfaces/IHTMLTextData.md#destroy)

#### Inherited from

[ImageData](ImageData.md).[destroy](ImageData.md#destroy)

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

#### Inherited from

[ImageData](ImageData.md).[setUrl](ImageData.md#seturl)

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

[IHTMLTextData](../interfaces/IHTMLTextData.md).[__setImageFill](../interfaces/IHTMLTextData.md#__setimagefill)

#### Inherited from

[ImageData](ImageData.md).[__setImageFill](ImageData.md#__setimagefill)

#### Defined in

[src/ui/packages/display-module/data/src/ImageData.ts:20](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/display-module/data/src/ImageData.ts#L20)

___

### \_\_getData

▸ **__getData**(): [`IObject`](../interfaces/IObject.md)

#### Returns

[`IObject`](../interfaces/IObject.md)

#### Implementation of

[IHTMLTextData](../interfaces/IHTMLTextData.md).[__getData](../interfaces/IHTMLTextData.md#__getdata)

#### Inherited from

[ImageData](ImageData.md).[__getData](ImageData.md#__getdata)

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

[IHTMLTextData](../interfaces/IHTMLTextData.md).[__getInputData](../interfaces/IHTMLTextData.md#__getinputdata)

#### Inherited from

[ImageData](ImageData.md).[__getInputData](ImageData.md#__getinputdata)

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

[ImageData](ImageData.md).[setVisible](ImageData.md#setvisible)

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

[ImageData](ImageData.md).[setWidth](ImageData.md#setwidth)

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

[ImageData](ImageData.md).[setHeight](ImageData.md#setheight)

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

[ImageData](ImageData.md).[setFill](ImageData.md#setfill)

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

[ImageData](ImageData.md).[setStroke](ImageData.md#setstroke)

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

[ImageData](ImageData.md).[setPath](ImageData.md#setpath)

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

[ImageData](ImageData.md).[setShadow](ImageData.md#setshadow)

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

[ImageData](ImageData.md).[setInnerShadow](ImageData.md#setinnershadow)

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

[ImageData](ImageData.md).[setFilter](ImageData.md#setfilter)

#### Defined in

[src/ui/packages/display-module/data/src/UIData.ts:127](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/display-module/data/src/UIData.ts#L127)

___

### \_\_computePaint

▸ **__computePaint**(): `void`

#### Returns

`void`

#### Implementation of

[IHTMLTextData](../interfaces/IHTMLTextData.md).[__computePaint](../interfaces/IHTMLTextData.md#__computepaint)

#### Inherited from

[ImageData](ImageData.md).[__computePaint](ImageData.md#__computepaint)

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

[IHTMLTextData](../interfaces/IHTMLTextData.md).[__getRealStrokeWidth](../interfaces/IHTMLTextData.md#__getrealstrokewidth)

#### Inherited from

[ImageData](ImageData.md).[__getRealStrokeWidth](ImageData.md#__getrealstrokewidth)

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

[IHTMLTextData](../interfaces/IHTMLTextData.md).[__setPaint](../interfaces/IHTMLTextData.md#__setpaint)

#### Inherited from

[ImageData](ImageData.md).[__setPaint](ImageData.md#__setpaint)

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

[IHTMLTextData](../interfaces/IHTMLTextData.md).[__removePaint](../interfaces/IHTMLTextData.md#__removepaint)

#### Inherited from

[ImageData](ImageData.md).[__removePaint](ImageData.md#__removepaint)

#### Defined in

[src/ui/packages/display-module/data/src/UIData.ts:170](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/display-module/data/src/UIData.ts#L170)
