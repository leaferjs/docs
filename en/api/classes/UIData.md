# Class: UIData

## Hierarchy

- [`LeafData`](LeafData.md)

  ↳ **`UIData`**

  ↳↳ [`GroupData`](GroupData.md)

  ↳↳ [`LineData`](LineData.md)

  ↳↳ [`RectData`](RectData.md)

  ↳↳ [`EllipseData`](EllipseData.md)

  ↳↳ [`StarData`](StarData.md)

  ↳↳ [`PathData`](PathData.md)

  ↳↳ [`TextData`](TextData.md)

  ↳↳ [`RobotData`](RobotData.md)

## Implements

- [`IUIData`](../interfaces/IUIData.md)

## Table of contents

### Constructors

- [constructor](UIData.md#constructor)

### Properties

- [\_\_input](UIData.md#__input)
- [\_\_middle](UIData.md#__middle)
- [\_\_single](UIData.md#__single)
- [\_\_naturalWidth](UIData.md#__naturalwidth)
- [\_\_naturalHeight](UIData.md#__naturalheight)
- [\_\_pathForRender](UIData.md#__pathforrender)
- [\_\_useStroke](UIData.md#__usestroke)
- [\_\_leaf](UIData.md#__leaf)
- [\_\_blendLayer](UIData.md#__blendlayer)
- [\_\_isFills](UIData.md#__isfills)
- [\_\_isStrokes](UIData.md#__isstrokes)
- [\_\_hasMultiStrokeStyle](UIData.md#__hasmultistrokestyle)
- [\_\_isAlphaPixelFill](UIData.md#__isalphapixelfill)
- [\_\_isAlphaPixelStroke](UIData.md#__isalphapixelstroke)
- [\_\_isTransparentFill](UIData.md#__istransparentfill)
- [\_\_isTransparentStroke](UIData.md#__istransparentstroke)
- [\_\_needComputePaint](UIData.md#__needcomputepaint)
- [\_visible](UIData.md#_visible)
- [\_width](UIData.md#_width)
- [\_height](UIData.md#_height)
- [\_fill](UIData.md#_fill)
- [\_stroke](UIData.md#_stroke)
- [\_path](UIData.md#_path)
- [\_shadow](UIData.md#_shadow)
- [\_innerShadow](UIData.md#_innershadow)

### Accessors

- [\_\_useNaturalRatio](UIData.md#__usenaturalratio)
- [\_\_isLinePath](UIData.md#__islinepath)
- [\_\_usePathBox](UIData.md#__usepathbox)
- [\_\_blendMode](UIData.md#__blendmode)
- [scale](UIData.md#scale)
- [\_\_strokeWidth](UIData.md#__strokewidth)
- [\_\_maxStrokeWidth](UIData.md#__maxstrokewidth)
- [\_\_hasMultiPaint](UIData.md#__hasmultipaint)
- [\_\_clipAfterFill](UIData.md#__clipafterfill)
- [\_\_hasSurface](UIData.md#__hassurface)
- [\_\_autoWidth](UIData.md#__autowidth)
- [\_\_autoHeight](UIData.md#__autoheight)
- [\_\_autoSide](UIData.md#__autoside)
- [\_\_autoSize](UIData.md#__autosize)

### Methods

- [\_\_get](UIData.md#__get)
- [\_\_getData](UIData.md#__getdata)
- [\_\_setInput](UIData.md#__setinput)
- [\_\_getInput](UIData.md#__getinput)
- [\_\_removeInput](UIData.md#__removeinput)
- [\_\_getInputData](UIData.md#__getinputdata)
- [\_\_setMiddle](UIData.md#__setmiddle)
- [\_\_getMiddle](UIData.md#__getmiddle)
- [\_\_checkSingle](UIData.md#__checksingle)
- [\_\_removeNaturalSize](UIData.md#__removenaturalsize)
- [destroy](UIData.md#destroy)
- [setVisible](UIData.md#setvisible)
- [setWidth](UIData.md#setwidth)
- [setHeight](UIData.md#setheight)
- [setFill](UIData.md#setfill)
- [setStroke](UIData.md#setstroke)
- [setPath](UIData.md#setpath)
- [setShadow](UIData.md#setshadow)
- [setInnerShadow](UIData.md#setinnershadow)
- [setFilter](UIData.md#setfilter)
- [\_\_computePaint](UIData.md#__computepaint)
- [\_\_getRealStrokeWidth](UIData.md#__getrealstrokewidth)
- [\_\_setPaint](UIData.md#__setpaint)
- [\_\_removePaint](UIData.md#__removepaint)

## Constructors

### constructor

• **new UIData**(`leaf`): [`UIData`](UIData.md)

#### Parameters

| Name   | Type                              |
| :----- | :-------------------------------- |
| `leaf` | [`ILeaf`](../interfaces/ILeaf.md) |

#### Returns

[`UIData`](UIData.md)

#### Inherited from

[LeafData](LeafData.md).[constructor](LeafData.md#constructor)

#### Defined in

[src/leafer/packages/display-module/data/src/LeafData.ts:36](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/display-module/data/src/LeafData.ts#L36)

## Properties

### \_\_input

• **\_\_input**: [`IObject`](../interfaces/IObject.md)

#### Implementation of

[IUIData](../interfaces/IUIData.md).[__input](../interfaces/IUIData.md#__input)

#### Inherited from

[LeafData](LeafData.md).[__input](LeafData.md#__input)

#### Defined in

[src/leafer/packages/display-module/data/src/LeafData.ts:8](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/display-module/data/src/LeafData.ts#L8)

___

### \_\_middle

• **\_\_middle**: [`IObject`](../interfaces/IObject.md)

#### Implementation of

[IUIData](../interfaces/IUIData.md).[__middle](../interfaces/IUIData.md#__middle)

#### Inherited from

[LeafData](LeafData.md).[__middle](LeafData.md#__middle)

#### Defined in

[src/leafer/packages/display-module/data/src/LeafData.ts:9](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/display-module/data/src/LeafData.ts#L9)

___

### \_\_single

• **\_\_single**: `boolean`

#### Implementation of

[IUIData](../interfaces/IUIData.md).[__single](../interfaces/IUIData.md#__single)

#### Inherited from

[LeafData](LeafData.md).[__single](LeafData.md#__single)

#### Defined in

[src/leafer/packages/display-module/data/src/LeafData.ts:11](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/display-module/data/src/LeafData.ts#L11)

___

### \_\_naturalWidth

• `Optional` **\_\_naturalWidth**: `number`

#### Implementation of

[IUIData](../interfaces/IUIData.md).[__naturalWidth](../interfaces/IUIData.md#__naturalwidth)

#### Inherited from

[LeafData](LeafData.md).[__naturalWidth](LeafData.md#__naturalwidth)

#### Defined in

[src/leafer/packages/display-module/data/src/LeafData.ts:13](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/display-module/data/src/LeafData.ts#L13)

___

### \_\_naturalHeight

• `Optional` **\_\_naturalHeight**: `number`

#### Implementation of

[IUIData](../interfaces/IUIData.md).[__naturalHeight](../interfaces/IUIData.md#__naturalheight)

#### Inherited from

[LeafData](LeafData.md).[__naturalHeight](LeafData.md#__naturalheight)

#### Defined in

[src/leafer/packages/display-module/data/src/LeafData.ts:14](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/display-module/data/src/LeafData.ts#L14)

___

### \_\_pathForRender

• `Optional` **\_\_pathForRender**: [`IPathCommandData`](../modules.md#ipathcommanddata)

#### Implementation of

[IUIData](../interfaces/IUIData.md).[__pathForRender](../interfaces/IUIData.md#__pathforrender)

#### Inherited from

[LeafData](LeafData.md).[__pathForRender](LeafData.md#__pathforrender)

#### Defined in

[src/leafer/packages/display-module/data/src/LeafData.ts:16](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/display-module/data/src/LeafData.ts#L16)

___

### \_\_useStroke

• `Optional` **\_\_useStroke**: `boolean`

#### Implementation of

[IUIData](../interfaces/IUIData.md).[__useStroke](../interfaces/IUIData.md#__usestroke)

#### Inherited from

[LeafData](LeafData.md).[__useStroke](LeafData.md#__usestroke)

#### Defined in

[src/leafer/packages/display-module/data/src/LeafData.ts:18](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/display-module/data/src/LeafData.ts#L18)

___

### \_\_leaf

• **\_\_leaf**: [`IUI`](../interfaces/IUI.md)

#### Implementation of

[IUIData](../interfaces/IUIData.md).[__leaf](../interfaces/IUIData.md#__leaf)

#### Overrides

[LeafData](LeafData.md).[__leaf](LeafData.md#__leaf)

#### Defined in

[src/ui/packages/display-module/data/src/UIData.ts:14](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/display-module/data/src/UIData.ts#L14)

___

### \_\_blendLayer

• `Optional` **\_\_blendLayer**: `boolean`

#### Implementation of

[IUIData](../interfaces/IUIData.md).[__blendLayer](../interfaces/IUIData.md#__blendlayer)

#### Defined in

[src/ui/packages/display-module/data/src/UIData.ts:18](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/display-module/data/src/UIData.ts#L18)

___

### \_\_isFills

• `Optional` **\_\_isFills**: `boolean`

#### Implementation of

[IUIData](../interfaces/IUIData.md).[__isFills](../interfaces/IUIData.md#__isfills)

#### Defined in

[src/ui/packages/display-module/data/src/UIData.ts:20](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/display-module/data/src/UIData.ts#L20)

___

### \_\_isStrokes

• `Optional` **\_\_isStrokes**: `boolean`

#### Implementation of

[IUIData](../interfaces/IUIData.md).[__isStrokes](../interfaces/IUIData.md#__isstrokes)

#### Defined in

[src/ui/packages/display-module/data/src/UIData.ts:21](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/display-module/data/src/UIData.ts#L21)

___

### \_\_hasMultiStrokeStyle

• `Optional` **\_\_hasMultiStrokeStyle**: `number`

#### Implementation of

[IUIData](../interfaces/IUIData.md).[__hasMultiStrokeStyle](../interfaces/IUIData.md#__hasmultistrokestyle)

#### Defined in

[src/ui/packages/display-module/data/src/UIData.ts:27](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/display-module/data/src/UIData.ts#L27)

___

### \_\_isAlphaPixelFill

• `Optional` **\_\_isAlphaPixelFill**: `boolean`

#### Implementation of

[IUIData](../interfaces/IUIData.md).[__isAlphaPixelFill](../interfaces/IUIData.md#__isalphapixelfill)

#### Defined in

[src/ui/packages/display-module/data/src/UIData.ts:31](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/display-module/data/src/UIData.ts#L31)

___

### \_\_isAlphaPixelStroke

• `Optional` **\_\_isAlphaPixelStroke**: `boolean`

#### Implementation of

[IUIData](../interfaces/IUIData.md).[__isAlphaPixelStroke](../interfaces/IUIData.md#__isalphapixelstroke)

#### Defined in

[src/ui/packages/display-module/data/src/UIData.ts:32](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/display-module/data/src/UIData.ts#L32)

___

### \_\_isTransparentFill

• `Optional` **\_\_isTransparentFill**: `boolean`

#### Implementation of

[IUIData](../interfaces/IUIData.md).[__isTransparentFill](../interfaces/IUIData.md#__istransparentfill)

#### Defined in

[src/ui/packages/display-module/data/src/UIData.ts:34](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/display-module/data/src/UIData.ts#L34)

___

### \_\_isTransparentStroke

• `Optional` **\_\_isTransparentStroke**: `boolean`

#### Implementation of

[IUIData](../interfaces/IUIData.md).[__isTransparentStroke](../interfaces/IUIData.md#__istransparentstroke)

#### Defined in

[src/ui/packages/display-module/data/src/UIData.ts:35](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/display-module/data/src/UIData.ts#L35)

___

### \_\_needComputePaint

• **\_\_needComputePaint**: `boolean`

#### Implementation of

[IUIData](../interfaces/IUIData.md).[__needComputePaint](../interfaces/IUIData.md#__needcomputepaint)

#### Defined in

[src/ui/packages/display-module/data/src/UIData.ts:40](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/display-module/data/src/UIData.ts#L40)

___

### \_visible

• `Protected` `Optional` **\_visible**: `boolean`

#### Defined in

[src/ui/packages/display-module/data/src/UIData.ts:42](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/display-module/data/src/UIData.ts#L42)

___

### \_width

• `Protected` `Optional` **\_width**: `number`

#### Defined in

[src/ui/packages/display-module/data/src/UIData.ts:44](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/display-module/data/src/UIData.ts#L44)

___

### \_height

• `Protected` `Optional` **\_height**: `number`

#### Defined in

[src/ui/packages/display-module/data/src/UIData.ts:45](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/display-module/data/src/UIData.ts#L45)

___

### \_fill

• `Protected` `Optional` **\_fill**: [`IValue`](../modules.md#ivalue)

#### Defined in

[src/ui/packages/display-module/data/src/UIData.ts:47](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/display-module/data/src/UIData.ts#L47)

___

### \_stroke

• `Protected` `Optional` **\_stroke**: [`IValue`](../modules.md#ivalue)

#### Defined in

[src/ui/packages/display-module/data/src/UIData.ts:48](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/display-module/data/src/UIData.ts#L48)

___

### \_path

• `Protected` **\_path**: [`IPathCommandData`](../modules.md#ipathcommanddata)

#### Defined in

[src/ui/packages/display-module/data/src/UIData.ts:50](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/display-module/data/src/UIData.ts#L50)

___

### \_shadow

• `Protected` `Optional` **\_shadow**: [`IValue`](../modules.md#ivalue)

#### Defined in

[src/ui/packages/display-module/data/src/UIData.ts:52](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/display-module/data/src/UIData.ts#L52)

___

### \_innerShadow

• `Protected` `Optional` **\_innerShadow**: [`IValue`](../modules.md#ivalue)

#### Defined in

[src/ui/packages/display-module/data/src/UIData.ts:53](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/display-module/data/src/UIData.ts#L53)

## Accessors

### \_\_useNaturalRatio

• `get` **__useNaturalRatio**(): `boolean`

#### Returns

`boolean`

#### Implementation of

[IUIData](../interfaces/IUIData.md).[__useNaturalRatio](../interfaces/IUIData.md#__usenaturalratio)

#### Inherited from

LeafData.\_\_useNaturalRatio

#### Defined in

[src/leafer/packages/display-module/data/src/LeafData.ts:19](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/display-module/data/src/LeafData.ts#L19)

___

### \_\_isLinePath

• `get` **__isLinePath**(): `boolean`

#### Returns

`boolean`

#### Implementation of

[IUIData](../interfaces/IUIData.md).[__isLinePath](../interfaces/IUIData.md#__islinepath)

#### Inherited from

LeafData.\_\_isLinePath

#### Defined in

[src/leafer/packages/display-module/data/src/LeafData.ts:21](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/display-module/data/src/LeafData.ts#L21)

___

### \_\_usePathBox

• `get` **__usePathBox**(): `boolean`

#### Returns

`boolean`

#### Implementation of

[IUIData](../interfaces/IUIData.md).[__usePathBox](../interfaces/IUIData.md#__usepathbox)

#### Inherited from

LeafData.\_\_usePathBox

#### Defined in

[src/leafer/packages/display-module/data/src/LeafData.ts:26](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/display-module/data/src/LeafData.ts#L26)

___

### \_\_blendMode

• `get` **__blendMode**(): `string`

#### Returns

`string`

#### Implementation of

[IUIData](../interfaces/IUIData.md).[__blendMode](../interfaces/IUIData.md#__blendmode)

#### Inherited from

LeafData.\_\_blendMode

#### Defined in

[src/leafer/packages/display-module/data/src/LeafData.ts:30](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/display-module/data/src/LeafData.ts#L30)

___

### scale

• `get` **scale**(): `number` \| [`IPointData`](../interfaces/IPointData.md)

#### Returns

`number` \| [`IPointData`](../interfaces/IPointData.md)

#### Implementation of

[IUIData](../interfaces/IUIData.md).[scale](../interfaces/IUIData.md#scale)

#### Defined in

[src/ui/packages/display-module/data/src/UIData.ts:16](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/display-module/data/src/UIData.ts#L16)

___

### \_\_strokeWidth

• `get` **__strokeWidth**(): `number`

#### Returns

`number`

#### Implementation of

[IUIData](../interfaces/IUIData.md).[__strokeWidth](../interfaces/IUIData.md#__strokewidth)

#### Defined in

[src/ui/packages/display-module/data/src/UIData.ts:23](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/display-module/data/src/UIData.ts#L23)

___

### \_\_maxStrokeWidth

• `get` **__maxStrokeWidth**(): `number`

#### Returns

`number`

#### Implementation of

[IUIData](../interfaces/IUIData.md).[__maxStrokeWidth](../interfaces/IUIData.md#__maxstrokewidth)

#### Defined in

[src/ui/packages/display-module/data/src/UIData.ts:25](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/display-module/data/src/UIData.ts#L25)

___

### \_\_hasMultiPaint

• `get` **__hasMultiPaint**(): `boolean`

#### Returns

`boolean`

#### Implementation of

[IUIData](../interfaces/IUIData.md).[__hasMultiPaint](../interfaces/IUIData.md#__hasmultipaint)

#### Defined in

[src/ui/packages/display-module/data/src/UIData.ts:29](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/display-module/data/src/UIData.ts#L29)

___

### \_\_clipAfterFill

• `get` **__clipAfterFill**(): `boolean`

#### Returns

`boolean`

#### Implementation of

[IUIData](../interfaces/IUIData.md).[__clipAfterFill](../interfaces/IUIData.md#__clipafterfill)

#### Defined in

[src/ui/packages/display-module/data/src/UIData.ts:37](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/display-module/data/src/UIData.ts#L37)

___

### \_\_hasSurface

• `get` **__hasSurface**(): `boolean`

#### Returns

`boolean`

#### Implementation of

[IUIData](../interfaces/IUIData.md).[__hasSurface](../interfaces/IUIData.md#__hassurface)

#### Defined in

[src/ui/packages/display-module/data/src/UIData.ts:38](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/display-module/data/src/UIData.ts#L38)

___

### \_\_autoWidth

• `get` **__autoWidth**(): `boolean`

#### Returns

`boolean`

#### Implementation of

[IUIData](../interfaces/IUIData.md).[__autoWidth](../interfaces/IUIData.md#__autowidth)

#### Defined in

[src/ui/packages/display-module/data/src/UIData.ts:55](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/display-module/data/src/UIData.ts#L55)

___

### \_\_autoHeight

• `get` **__autoHeight**(): `boolean`

#### Returns

`boolean`

#### Implementation of

[IUIData](../interfaces/IUIData.md).[__autoHeight](../interfaces/IUIData.md#__autoheight)

#### Defined in

[src/ui/packages/display-module/data/src/UIData.ts:56](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/display-module/data/src/UIData.ts#L56)

___

### \_\_autoSide

• `get` **__autoSide**(): `boolean`

#### Returns

`boolean`

#### Implementation of

[IUIData](../interfaces/IUIData.md).[__autoSide](../interfaces/IUIData.md#__autoside)

#### Defined in

[src/ui/packages/display-module/data/src/UIData.ts:57](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/display-module/data/src/UIData.ts#L57)

___

### \_\_autoSize

• `get` **__autoSize**(): `boolean`

#### Returns

`boolean`

#### Implementation of

[IUIData](../interfaces/IUIData.md).[__autoSize](../interfaces/IUIData.md#__autosize)

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

[IUIData](../interfaces/IUIData.md).[__get](../interfaces/IUIData.md#__get)

#### Inherited from

[LeafData](LeafData.md).[__get](LeafData.md#__get)

#### Defined in

[src/leafer/packages/display-module/data/src/LeafData.ts:40](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/display-module/data/src/LeafData.ts#L40)

___

### \_\_getData

▸ **__getData**(): [`IObject`](../interfaces/IObject.md)

#### Returns

[`IObject`](../interfaces/IObject.md)

#### Implementation of

[IUIData](../interfaces/IUIData.md).[__getData](../interfaces/IUIData.md#__getdata)

#### Inherited from

[LeafData](LeafData.md).[__getData](LeafData.md#__getdata)

#### Defined in

[src/leafer/packages/display-module/data/src/LeafData.ts:48](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/display-module/data/src/LeafData.ts#L48)

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

[IUIData](../interfaces/IUIData.md).[__setInput](../interfaces/IUIData.md#__setinput)

#### Inherited from

[LeafData](LeafData.md).[__setInput](LeafData.md#__setinput)

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

[IUIData](../interfaces/IUIData.md).[__getInput](../interfaces/IUIData.md#__getinput)

#### Inherited from

[LeafData](LeafData.md).[__getInput](LeafData.md#__getinput)

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

[IUIData](../interfaces/IUIData.md).[__removeInput](../interfaces/IUIData.md#__removeinput)

#### Inherited from

[LeafData](LeafData.md).[__removeInput](LeafData.md#__removeinput)

#### Defined in

[src/leafer/packages/display-module/data/src/LeafData.ts:76](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/display-module/data/src/LeafData.ts#L76)

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

[IUIData](../interfaces/IUIData.md).[__getInputData](../interfaces/IUIData.md#__getinputdata)

#### Inherited from

[LeafData](LeafData.md).[__getInputData](LeafData.md#__getinputdata)

#### Defined in

[src/leafer/packages/display-module/data/src/LeafData.ts:80](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/display-module/data/src/LeafData.ts#L80)

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

[IUIData](../interfaces/IUIData.md).[__setMiddle](../interfaces/IUIData.md#__setmiddle)

#### Inherited from

[LeafData](LeafData.md).[__setMiddle](LeafData.md#__setmiddle)

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

[IUIData](../interfaces/IUIData.md).[__getMiddle](../interfaces/IUIData.md#__getmiddle)

#### Inherited from

[LeafData](LeafData.md).[__getMiddle](LeafData.md#__getmiddle)

#### Defined in

[src/leafer/packages/display-module/data/src/LeafData.ts:125](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/display-module/data/src/LeafData.ts#L125)

___

### \_\_checkSingle

▸ **__checkSingle**(): `void`

#### Returns

`void`

#### Implementation of

[IUIData](../interfaces/IUIData.md).[__checkSingle](../interfaces/IUIData.md#__checksingle)

#### Inherited from

[LeafData](LeafData.md).[__checkSingle](LeafData.md#__checksingle)

#### Defined in

[src/leafer/packages/display-module/data/src/LeafData.ts:129](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/display-module/data/src/LeafData.ts#L129)

___

### \_\_removeNaturalSize

▸ **__removeNaturalSize**(): `void`

#### Returns

`void`

#### Implementation of

[IUIData](../interfaces/IUIData.md).[__removeNaturalSize](../interfaces/IUIData.md#__removenaturalsize)

#### Inherited from

[LeafData](LeafData.md).[__removeNaturalSize](LeafData.md#__removenaturalsize)

#### Defined in

[src/leafer/packages/display-module/data/src/LeafData.ts:143](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/display-module/data/src/LeafData.ts#L143)

___

### destroy

▸ **destroy**(): `void`

#### Returns

`void`

#### Implementation of

[IUIData](../interfaces/IUIData.md).[destroy](../interfaces/IUIData.md#destroy)

#### Inherited from

[LeafData](LeafData.md).[destroy](LeafData.md#destroy)

#### Defined in

[src/leafer/packages/display-module/data/src/LeafData.ts:147](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/display-module/data/src/LeafData.ts#L147)

___

### setVisible

▸ **setVisible**(`value`): `void`

#### Parameters

| Name    | Type      |
| :------ | :-------- |
| `value` | `boolean` |

#### Returns

`void`

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

#### Defined in

[src/ui/packages/display-module/data/src/UIData.ts:127](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/display-module/data/src/UIData.ts#L127)

___

### \_\_computePaint

▸ **__computePaint**(): `void`

#### Returns

`void`

#### Implementation of

[IUIData](../interfaces/IUIData.md).[__computePaint](../interfaces/IUIData.md#__computepaint)

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

[IUIData](../interfaces/IUIData.md).[__getRealStrokeWidth](../interfaces/IUIData.md#__getrealstrokewidth)

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

[IUIData](../interfaces/IUIData.md).[__setPaint](../interfaces/IUIData.md#__setpaint)

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

[IUIData](../interfaces/IUIData.md).[__removePaint](../interfaces/IUIData.md#__removepaint)

#### Defined in

[src/ui/packages/display-module/data/src/UIData.ts:170](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/display-module/data/src/UIData.ts#L170)
