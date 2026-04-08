# Class: ImageBoxData

## Hierarchy

- [`BoxData`](BoxData.md)

  ↳ **`ImageBoxData`**

## Implements

- [`IImageBoxData`](../interfaces/IImageBoxData.md)

## Table of contents

### Constructors

- [constructor](ImageBoxData.md#constructor)

### Properties

- [\_\_leaf](ImageBoxData.md#__leaf)
- [\_url](ImageBoxData.md#_url)
- [\_\_input](ImageBoxData.md#__input)
- [\_\_middle](ImageBoxData.md#__middle)
- [\_\_single](ImageBoxData.md#__single)
- [\_\_naturalWidth](ImageBoxData.md#__naturalwidth)
- [\_\_naturalHeight](ImageBoxData.md#__naturalheight)
- [\_\_pathForRender](ImageBoxData.md#__pathforrender)
- [\_\_useStroke](ImageBoxData.md#__usestroke)
- [\_\_blendLayer](ImageBoxData.md#__blendlayer)
- [\_\_isFills](ImageBoxData.md#__isfills)
- [\_\_isStrokes](ImageBoxData.md#__isstrokes)
- [\_\_hasMultiStrokeStyle](ImageBoxData.md#__hasmultistrokestyle)
- [\_\_isAlphaPixelFill](ImageBoxData.md#__isalphapixelfill)
- [\_\_isAlphaPixelStroke](ImageBoxData.md#__isalphapixelstroke)
- [\_\_isTransparentFill](ImageBoxData.md#__istransparentfill)
- [\_\_isTransparentStroke](ImageBoxData.md#__istransparentstroke)
- [\_\_needComputePaint](ImageBoxData.md#__needcomputepaint)
- [\_visible](ImageBoxData.md#_visible)
- [\_width](ImageBoxData.md#_width)
- [\_height](ImageBoxData.md#_height)
- [\_fill](ImageBoxData.md#_fill)
- [\_stroke](ImageBoxData.md#_stroke)
- [\_path](ImageBoxData.md#_path)
- [\_shadow](ImageBoxData.md#_shadow)
- [\_innerShadow](ImageBoxData.md#_innershadow)

### Accessors

- [\_\_urlType](ImageBoxData.md#__urltype)
- [\_\_useNaturalRatio](ImageBoxData.md#__usenaturalratio)
- [\_\_isLinePath](ImageBoxData.md#__islinepath)
- [\_\_usePathBox](ImageBoxData.md#__usepathbox)
- [\_\_blendMode](ImageBoxData.md#__blendmode)
- [\_\_boxStroke](ImageBoxData.md#__boxstroke)
- [\_\_drawAfterFill](ImageBoxData.md#__drawafterfill)
- [\_\_clipAfterFill](ImageBoxData.md#__clipafterfill)
- [scale](ImageBoxData.md#scale)
- [\_\_strokeWidth](ImageBoxData.md#__strokewidth)
- [\_\_maxStrokeWidth](ImageBoxData.md#__maxstrokewidth)
- [\_\_hasMultiPaint](ImageBoxData.md#__hasmultipaint)
- [\_\_hasSurface](ImageBoxData.md#__hassurface)
- [\_\_autoWidth](ImageBoxData.md#__autowidth)
- [\_\_autoHeight](ImageBoxData.md#__autoheight)
- [\_\_autoSide](ImageBoxData.md#__autoside)
- [\_\_autoSize](ImageBoxData.md#__autosize)

### Methods

- [setUrl](ImageBoxData.md#seturl)
- [\_\_setImageFill](ImageBoxData.md#__setimagefill)
- [\_\_getData](ImageBoxData.md#__getdata)
- [\_\_getInputData](ImageBoxData.md#__getinputdata)
- [\_\_get](ImageBoxData.md#__get)
- [\_\_setInput](ImageBoxData.md#__setinput)
- [\_\_getInput](ImageBoxData.md#__getinput)
- [\_\_removeInput](ImageBoxData.md#__removeinput)
- [\_\_setMiddle](ImageBoxData.md#__setmiddle)
- [\_\_getMiddle](ImageBoxData.md#__getmiddle)
- [\_\_checkSingle](ImageBoxData.md#__checksingle)
- [\_\_removeNaturalSize](ImageBoxData.md#__removenaturalsize)
- [destroy](ImageBoxData.md#destroy)
- [setVisible](ImageBoxData.md#setvisible)
- [setWidth](ImageBoxData.md#setwidth)
- [setHeight](ImageBoxData.md#setheight)
- [setFill](ImageBoxData.md#setfill)
- [setStroke](ImageBoxData.md#setstroke)
- [setPath](ImageBoxData.md#setpath)
- [setShadow](ImageBoxData.md#setshadow)
- [setInnerShadow](ImageBoxData.md#setinnershadow)
- [setFilter](ImageBoxData.md#setfilter)
- [\_\_computePaint](ImageBoxData.md#__computepaint)
- [\_\_getRealStrokeWidth](ImageBoxData.md#__getrealstrokewidth)
- [\_\_setPaint](ImageBoxData.md#__setpaint)
- [\_\_removePaint](ImageBoxData.md#__removepaint)

## Constructors

### constructor

• **new ImageBoxData**(`leaf`): [`ImageBoxData`](ImageBoxData.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `leaf` | [`ILeaf`](../interfaces/ILeaf.md) |

#### Returns

[`ImageBoxData`](ImageBoxData.md)

#### Inherited from

[BoxData](BoxData.md).[constructor](BoxData.md#constructor)

#### Defined in

[src/leafer/packages/display-module/data/src/LeafData.ts:36](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/display-module/data/src/LeafData.ts#L36)

## Properties

### \_\_leaf

• **\_\_leaf**: [`IImage`](../interfaces/IImage.md)

#### Implementation of

[IImageBoxData](../interfaces/IImageBoxData.md).[__leaf](../interfaces/IImageBoxData.md#__leaf)

#### Overrides

[BoxData](BoxData.md).[__leaf](BoxData.md#__leaf)

#### Defined in

[src/in/packages/box/src/data/ImageBoxData.ts:6](https://github.com/leaferjs/leafer-in/blob/d97f6888a45310d40717e43f47796d4f7d0dce1d/packages/box/src/data/ImageBoxData.ts#L6)

___

### \_url

• `Protected` **\_url**: `string`

#### Defined in

[src/in/packages/box/src/data/ImageBoxData.ts:10](https://github.com/leaferjs/leafer-in/blob/d97f6888a45310d40717e43f47796d4f7d0dce1d/packages/box/src/data/ImageBoxData.ts#L10)

___

### \_\_input

• **\_\_input**: [`IObject`](../interfaces/IObject.md)

#### Implementation of

[IImageBoxData](../interfaces/IImageBoxData.md).[__input](../interfaces/IImageBoxData.md#__input)

#### Inherited from

[BoxData](BoxData.md).[__input](BoxData.md#__input)

#### Defined in

[src/leafer/packages/display-module/data/src/LeafData.ts:8](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/display-module/data/src/LeafData.ts#L8)

___

### \_\_middle

• **\_\_middle**: [`IObject`](../interfaces/IObject.md)

#### Implementation of

[IImageBoxData](../interfaces/IImageBoxData.md).[__middle](../interfaces/IImageBoxData.md#__middle)

#### Inherited from

[BoxData](BoxData.md).[__middle](BoxData.md#__middle)

#### Defined in

[src/leafer/packages/display-module/data/src/LeafData.ts:9](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/display-module/data/src/LeafData.ts#L9)

___

### \_\_single

• **\_\_single**: `boolean`

#### Implementation of

[IImageBoxData](../interfaces/IImageBoxData.md).[__single](../interfaces/IImageBoxData.md#__single)

#### Inherited from

[BoxData](BoxData.md).[__single](BoxData.md#__single)

#### Defined in

[src/leafer/packages/display-module/data/src/LeafData.ts:11](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/display-module/data/src/LeafData.ts#L11)

___

### \_\_naturalWidth

• `Optional` **\_\_naturalWidth**: `number`

#### Implementation of

[IImageBoxData](../interfaces/IImageBoxData.md).[__naturalWidth](../interfaces/IImageBoxData.md#__naturalwidth)

#### Inherited from

[BoxData](BoxData.md).[__naturalWidth](BoxData.md#__naturalwidth)

#### Defined in

[src/leafer/packages/display-module/data/src/LeafData.ts:13](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/display-module/data/src/LeafData.ts#L13)

___

### \_\_naturalHeight

• `Optional` **\_\_naturalHeight**: `number`

#### Implementation of

[IImageBoxData](../interfaces/IImageBoxData.md).[__naturalHeight](../interfaces/IImageBoxData.md#__naturalheight)

#### Inherited from

[BoxData](BoxData.md).[__naturalHeight](BoxData.md#__naturalheight)

#### Defined in

[src/leafer/packages/display-module/data/src/LeafData.ts:14](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/display-module/data/src/LeafData.ts#L14)

___

### \_\_pathForRender

• `Optional` **\_\_pathForRender**: [`IPathCommandData`](../modules.md#ipathcommanddata)

#### Implementation of

[IImageBoxData](../interfaces/IImageBoxData.md).[__pathForRender](../interfaces/IImageBoxData.md#__pathforrender)

#### Inherited from

[BoxData](BoxData.md).[__pathForRender](BoxData.md#__pathforrender)

#### Defined in

[src/leafer/packages/display-module/data/src/LeafData.ts:16](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/display-module/data/src/LeafData.ts#L16)

___

### \_\_useStroke

• `Optional` **\_\_useStroke**: `boolean`

#### Implementation of

[IImageBoxData](../interfaces/IImageBoxData.md).[__useStroke](../interfaces/IImageBoxData.md#__usestroke)

#### Inherited from

[BoxData](BoxData.md).[__useStroke](BoxData.md#__usestroke)

#### Defined in

[src/leafer/packages/display-module/data/src/LeafData.ts:18](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/display-module/data/src/LeafData.ts#L18)

___

### \_\_blendLayer

• `Optional` **\_\_blendLayer**: `boolean`

#### Implementation of

[IImageBoxData](../interfaces/IImageBoxData.md).[__blendLayer](../interfaces/IImageBoxData.md#__blendlayer)

#### Inherited from

[BoxData](BoxData.md).[__blendLayer](BoxData.md#__blendlayer)

#### Defined in

[src/ui/packages/display-module/data/src/UIData.ts:18](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/display-module/data/src/UIData.ts#L18)

___

### \_\_isFills

• `Optional` **\_\_isFills**: `boolean`

#### Implementation of

[IImageBoxData](../interfaces/IImageBoxData.md).[__isFills](../interfaces/IImageBoxData.md#__isfills)

#### Inherited from

[BoxData](BoxData.md).[__isFills](BoxData.md#__isfills)

#### Defined in

[src/ui/packages/display-module/data/src/UIData.ts:20](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/display-module/data/src/UIData.ts#L20)

___

### \_\_isStrokes

• `Optional` **\_\_isStrokes**: `boolean`

#### Implementation of

[IImageBoxData](../interfaces/IImageBoxData.md).[__isStrokes](../interfaces/IImageBoxData.md#__isstrokes)

#### Inherited from

[BoxData](BoxData.md).[__isStrokes](BoxData.md#__isstrokes)

#### Defined in

[src/ui/packages/display-module/data/src/UIData.ts:21](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/display-module/data/src/UIData.ts#L21)

___

### \_\_hasMultiStrokeStyle

• `Optional` **\_\_hasMultiStrokeStyle**: `number`

#### Implementation of

[IImageBoxData](../interfaces/IImageBoxData.md).[__hasMultiStrokeStyle](../interfaces/IImageBoxData.md#__hasmultistrokestyle)

#### Inherited from

[BoxData](BoxData.md).[__hasMultiStrokeStyle](BoxData.md#__hasmultistrokestyle)

#### Defined in

[src/ui/packages/display-module/data/src/UIData.ts:27](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/display-module/data/src/UIData.ts#L27)

___

### \_\_isAlphaPixelFill

• `Optional` **\_\_isAlphaPixelFill**: `boolean`

#### Implementation of

[IImageBoxData](../interfaces/IImageBoxData.md).[__isAlphaPixelFill](../interfaces/IImageBoxData.md#__isalphapixelfill)

#### Inherited from

[BoxData](BoxData.md).[__isAlphaPixelFill](BoxData.md#__isalphapixelfill)

#### Defined in

[src/ui/packages/display-module/data/src/UIData.ts:31](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/display-module/data/src/UIData.ts#L31)

___

### \_\_isAlphaPixelStroke

• `Optional` **\_\_isAlphaPixelStroke**: `boolean`

#### Implementation of

[IImageBoxData](../interfaces/IImageBoxData.md).[__isAlphaPixelStroke](../interfaces/IImageBoxData.md#__isalphapixelstroke)

#### Inherited from

[BoxData](BoxData.md).[__isAlphaPixelStroke](BoxData.md#__isalphapixelstroke)

#### Defined in

[src/ui/packages/display-module/data/src/UIData.ts:32](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/display-module/data/src/UIData.ts#L32)

___

### \_\_isTransparentFill

• `Optional` **\_\_isTransparentFill**: `boolean`

#### Implementation of

[IImageBoxData](../interfaces/IImageBoxData.md).[__isTransparentFill](../interfaces/IImageBoxData.md#__istransparentfill)

#### Inherited from

[BoxData](BoxData.md).[__isTransparentFill](BoxData.md#__istransparentfill)

#### Defined in

[src/ui/packages/display-module/data/src/UIData.ts:34](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/display-module/data/src/UIData.ts#L34)

___

### \_\_isTransparentStroke

• `Optional` **\_\_isTransparentStroke**: `boolean`

#### Implementation of

[IImageBoxData](../interfaces/IImageBoxData.md).[__isTransparentStroke](../interfaces/IImageBoxData.md#__istransparentstroke)

#### Inherited from

[BoxData](BoxData.md).[__isTransparentStroke](BoxData.md#__istransparentstroke)

#### Defined in

[src/ui/packages/display-module/data/src/UIData.ts:35](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/display-module/data/src/UIData.ts#L35)

___

### \_\_needComputePaint

• **\_\_needComputePaint**: `boolean`

#### Implementation of

[IImageBoxData](../interfaces/IImageBoxData.md).[__needComputePaint](../interfaces/IImageBoxData.md#__needcomputepaint)

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

### \_\_urlType

• `get` **__urlType**(): [`IMultimediaType`](../modules.md#imultimediatype)

#### Returns

[`IMultimediaType`](../modules.md#imultimediatype)

#### Implementation of

[IImageBoxData](../interfaces/IImageBoxData.md).[__urlType](../interfaces/IImageBoxData.md#__urltype)

#### Defined in

[src/in/packages/box/src/data/ImageBoxData.ts:8](https://github.com/leaferjs/leafer-in/blob/d97f6888a45310d40717e43f47796d4f7d0dce1d/packages/box/src/data/ImageBoxData.ts#L8)

___

### \_\_useNaturalRatio

• `get` **__useNaturalRatio**(): `boolean`

#### Returns

`boolean`

#### Implementation of

[IImageBoxData](../interfaces/IImageBoxData.md).[__useNaturalRatio](../interfaces/IImageBoxData.md#__usenaturalratio)

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

[IImageBoxData](../interfaces/IImageBoxData.md).[__isLinePath](../interfaces/IImageBoxData.md#__islinepath)

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

[IImageBoxData](../interfaces/IImageBoxData.md).[__usePathBox](../interfaces/IImageBoxData.md#__usepathbox)

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

[IImageBoxData](../interfaces/IImageBoxData.md).[__blendMode](../interfaces/IImageBoxData.md#__blendmode)

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

[IImageBoxData](../interfaces/IImageBoxData.md).[__boxStroke](../interfaces/IImageBoxData.md#__boxstroke)

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

[IImageBoxData](../interfaces/IImageBoxData.md).[__drawAfterFill](../interfaces/IImageBoxData.md#__drawafterfill)

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

[IImageBoxData](../interfaces/IImageBoxData.md).[__clipAfterFill](../interfaces/IImageBoxData.md#__clipafterfill)

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

[IImageBoxData](../interfaces/IImageBoxData.md).[scale](../interfaces/IImageBoxData.md#scale)

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

[IImageBoxData](../interfaces/IImageBoxData.md).[__strokeWidth](../interfaces/IImageBoxData.md#__strokewidth)

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

[IImageBoxData](../interfaces/IImageBoxData.md).[__maxStrokeWidth](../interfaces/IImageBoxData.md#__maxstrokewidth)

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

[IImageBoxData](../interfaces/IImageBoxData.md).[__hasMultiPaint](../interfaces/IImageBoxData.md#__hasmultipaint)

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

[IImageBoxData](../interfaces/IImageBoxData.md).[__hasSurface](../interfaces/IImageBoxData.md#__hassurface)

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

[IImageBoxData](../interfaces/IImageBoxData.md).[__autoWidth](../interfaces/IImageBoxData.md#__autowidth)

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

[IImageBoxData](../interfaces/IImageBoxData.md).[__autoHeight](../interfaces/IImageBoxData.md#__autoheight)

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

[IImageBoxData](../interfaces/IImageBoxData.md).[__autoSide](../interfaces/IImageBoxData.md#__autoside)

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

[IImageBoxData](../interfaces/IImageBoxData.md).[__autoSize](../interfaces/IImageBoxData.md#__autosize)

#### Inherited from

BoxData.\_\_autoSize

#### Defined in

[src/ui/packages/display-module/data/src/UIData.ts:58](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/display-module/data/src/UIData.ts#L58)

## Methods

### setUrl

▸ **setUrl**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `string` |

#### Returns

`void`

#### Defined in

[src/in/packages/box/src/data/ImageBoxData.ts:12](https://github.com/leaferjs/leafer-in/blob/d97f6888a45310d40717e43f47796d4f7d0dce1d/packages/box/src/data/ImageBoxData.ts#L12)

___

### \_\_setImageFill

▸ **__setImageFill**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `string` |

#### Returns

`void`

#### Implementation of

[IImageBoxData](../interfaces/IImageBoxData.md).[__setImageFill](../interfaces/IImageBoxData.md#__setimagefill)

#### Defined in

[src/in/packages/box/src/data/ImageBoxData.ts:17](https://github.com/leaferjs/leafer-in/blob/d97f6888a45310d40717e43f47796d4f7d0dce1d/packages/box/src/data/ImageBoxData.ts#L17)

___

### \_\_getData

▸ **__getData**(): [`IObject`](../interfaces/IObject.md)

#### Returns

[`IObject`](../interfaces/IObject.md)

#### Implementation of

[IImageBoxData](../interfaces/IImageBoxData.md).[__getData](../interfaces/IImageBoxData.md#__getdata)

#### Overrides

[BoxData](BoxData.md).[__getData](BoxData.md#__getdata)

#### Defined in

[src/in/packages/box/src/data/ImageBoxData.ts:21](https://github.com/leaferjs/leafer-in/blob/d97f6888a45310d40717e43f47796d4f7d0dce1d/packages/box/src/data/ImageBoxData.ts#L21)

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

[IImageBoxData](../interfaces/IImageBoxData.md).[__getInputData](../interfaces/IImageBoxData.md#__getinputdata)

#### Overrides

[BoxData](BoxData.md).[__getInputData](BoxData.md#__getinputdata)

#### Defined in

[src/in/packages/box/src/data/ImageBoxData.ts:27](https://github.com/leaferjs/leafer-in/blob/d97f6888a45310d40717e43f47796d4f7d0dce1d/packages/box/src/data/ImageBoxData.ts#L27)

___

### \_\_get

▸ **__get**(`name`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |

#### Returns

`any`

#### Implementation of

[IImageBoxData](../interfaces/IImageBoxData.md).[__get](../interfaces/IImageBoxData.md#__get)

#### Inherited from

[BoxData](BoxData.md).[__get](BoxData.md#__get)

#### Defined in

[src/leafer/packages/display-module/data/src/LeafData.ts:40](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/display-module/data/src/LeafData.ts#L40)

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

[IImageBoxData](../interfaces/IImageBoxData.md).[__setInput](../interfaces/IImageBoxData.md#__setinput)

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

[IImageBoxData](../interfaces/IImageBoxData.md).[__getInput](../interfaces/IImageBoxData.md#__getinput)

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

[IImageBoxData](../interfaces/IImageBoxData.md).[__removeInput](../interfaces/IImageBoxData.md#__removeinput)

#### Inherited from

[BoxData](BoxData.md).[__removeInput](BoxData.md#__removeinput)

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

[IImageBoxData](../interfaces/IImageBoxData.md).[__setMiddle](../interfaces/IImageBoxData.md#__setmiddle)

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

[IImageBoxData](../interfaces/IImageBoxData.md).[__getMiddle](../interfaces/IImageBoxData.md#__getmiddle)

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

[IImageBoxData](../interfaces/IImageBoxData.md).[__checkSingle](../interfaces/IImageBoxData.md#__checksingle)

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

[IImageBoxData](../interfaces/IImageBoxData.md).[__removeNaturalSize](../interfaces/IImageBoxData.md#__removenaturalsize)

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

[IImageBoxData](../interfaces/IImageBoxData.md).[destroy](../interfaces/IImageBoxData.md#destroy)

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

[IImageBoxData](../interfaces/IImageBoxData.md).[__computePaint](../interfaces/IImageBoxData.md#__computepaint)

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

[IImageBoxData](../interfaces/IImageBoxData.md).[__getRealStrokeWidth](../interfaces/IImageBoxData.md#__getrealstrokewidth)

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

[IImageBoxData](../interfaces/IImageBoxData.md).[__setPaint](../interfaces/IImageBoxData.md#__setpaint)

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

[IImageBoxData](../interfaces/IImageBoxData.md).[__removePaint](../interfaces/IImageBoxData.md#__removepaint)

#### Inherited from

[BoxData](BoxData.md).[__removePaint](BoxData.md#__removepaint)

#### Defined in

[src/ui/packages/display-module/data/src/UIData.ts:170](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/display-module/data/src/UIData.ts#L170)
