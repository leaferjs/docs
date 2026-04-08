# Interface: ILeaferCanvas

## Hierarchy

- [`ICanvasAttr`](ICanvasAttr.md)

- `ICanvasMethod`

- [`IPathDrawer`](IPathDrawer.md)

  ↳ **`ILeaferCanvas`**

  ↳↳ [`IHitCanvas`](IHitCanvas.md)

  ↳↳ [`IInteractionCanvas`](IInteractionCanvas.md)

## Implemented by

- [`LeaferCanvasBase`](../classes/LeaferCanvasBase.md)

## Table of contents

### Properties

- [strokeAlign](ILeaferCanvas.md#strokealign)
- [strokeCap](ILeaferCanvas.md#strokecap)
- [strokeJoin](ILeaferCanvas.md#strokejoin)
- [dashPattern](ILeaferCanvas.md#dashpattern)
- [dashOffset](ILeaferCanvas.md#dashoffset)
- [miterLimit](ILeaferCanvas.md#miterlimit)
- [smooth](ILeaferCanvas.md#smooth)
- [smoothLevel](ILeaferCanvas.md#smoothlevel)
- [opacity](ILeaferCanvas.md#opacity)
- [blendMode](ILeaferCanvas.md#blendmode)
- [fillStyle](ILeaferCanvas.md#fillstyle)
- [strokeStyle](ILeaferCanvas.md#strokestyle)
- [strokeWidth](ILeaferCanvas.md#strokewidth)
- [shadowBlur](ILeaferCanvas.md#shadowblur)
- [shadowColor](ILeaferCanvas.md#shadowcolor)
- [shadowOffsetX](ILeaferCanvas.md#shadowoffsetx)
- [shadowOffsetY](ILeaferCanvas.md#shadowoffsety)
- [filter](ILeaferCanvas.md#filter)
- [font](ILeaferCanvas.md#font)
- [fontKerning](ILeaferCanvas.md#fontkerning)
- [fontStretch](ILeaferCanvas.md#fontstretch)
- [fontVariantCaps](ILeaferCanvas.md#fontvariantcaps)
- [textAlign](ILeaferCanvas.md#textalign)
- [textBaseline](ILeaferCanvas.md#textbaseline)
- [textRendering](ILeaferCanvas.md#textrendering)
- [wordSpacing](ILeaferCanvas.md#wordspacing)
- [letterSpacing](ILeaferCanvas.md#letterspacing)
- [direction](ILeaferCanvas.md#direction)
- [innerId](ILeaferCanvas.md#innerid)
- [name](ILeaferCanvas.md#name)
- [manager](ILeaferCanvas.md#manager)
- [width](ILeaferCanvas.md#width)
- [height](ILeaferCanvas.md#height)
- [pixelRatio](ILeaferCanvas.md#pixelratio)
- [pixelWidth](ILeaferCanvas.md#pixelwidth)
- [pixelHeight](ILeaferCanvas.md#pixelheight)
- [pixelSnap](ILeaferCanvas.md#pixelsnap)
- [allowBackgroundColor](ILeaferCanvas.md#allowbackgroundcolor)
- [backgroundColor](ILeaferCanvas.md#backgroundcolor)
- [hittable](ILeaferCanvas.md#hittable)
- [zIndex](ILeaferCanvas.md#zindex)
- [childIndex](ILeaferCanvas.md#childindex)
- [bounds](ILeaferCanvas.md#bounds)
- [clientBounds](ILeaferCanvas.md#clientbounds)
- [config](ILeaferCanvas.md#config)
- [autoLayout](ILeaferCanvas.md#autolayout)
- [view](ILeaferCanvas.md#view)
- [parentView](ILeaferCanvas.md#parentview)
- [unreal](ILeaferCanvas.md#unreal)
- [context](ILeaferCanvas.md#context)
- [recycled](ILeaferCanvas.md#recycled)
- [worldTransform](ILeaferCanvas.md#worldtransform)

### Methods

- [save](ILeaferCanvas.md#save)
- [restore](ILeaferCanvas.md#restore)
- [fill](ILeaferCanvas.md#fill)
- [stroke](ILeaferCanvas.md#stroke)
- [clip](ILeaferCanvas.md#clip)
- [fillRect](ILeaferCanvas.md#fillrect)
- [strokeRect](ILeaferCanvas.md#strokerect)
- [clearRect](ILeaferCanvas.md#clearrect)
- [transform](ILeaferCanvas.md#transform)
- [translate](ILeaferCanvas.md#translate)
- [scale](ILeaferCanvas.md#scale)
- [rotate](ILeaferCanvas.md#rotate)
- [drawImage](ILeaferCanvas.md#drawimage)
- [setTransform](ILeaferCanvas.md#settransform)
- [getTransform](ILeaferCanvas.md#gettransform)
- [resetTransform](ILeaferCanvas.md#resettransform)
- [createConicGradient](ILeaferCanvas.md#createconicgradient)
- [createLinearGradient](ILeaferCanvas.md#createlineargradient)
- [createPattern](ILeaferCanvas.md#createpattern)
- [createRadialGradient](ILeaferCanvas.md#createradialgradient)
- [fillText](ILeaferCanvas.md#filltext)
- [measureText](ILeaferCanvas.md#measuretext)
- [strokeText](ILeaferCanvas.md#stroketext)
- [saveBlendMode](ILeaferCanvas.md#saveblendmode)
- [restoreBlendMode](ILeaferCanvas.md#restoreblendmode)
- [hitFill](ILeaferCanvas.md#hitfill)
- [hitStroke](ILeaferCanvas.md#hitstroke)
- [hitPixel](ILeaferCanvas.md#hitpixel)
- [setStroke](ILeaferCanvas.md#setstroke)
- [setStrokeOptions](ILeaferCanvas.md#setstrokeoptions)
- [setWorld](ILeaferCanvas.md#setworld)
- [useWorldTransform](ILeaferCanvas.md#useworldtransform)
- [setWorldShadow](ILeaferCanvas.md#setworldshadow)
- [setWorldBlur](ILeaferCanvas.md#setworldblur)
- [copyWorld](ILeaferCanvas.md#copyworld)
- [copyWorldByReset](ILeaferCanvas.md#copyworldbyreset)
- [copyWorldToInner](ILeaferCanvas.md#copyworldtoinner)
- [useGrayscaleAlpha](ILeaferCanvas.md#usegrayscalealpha)
- [useMask](ILeaferCanvas.md#usemask)
- [useEraser](ILeaferCanvas.md#useeraser)
- [fillWorld](ILeaferCanvas.md#fillworld)
- [strokeWorld](ILeaferCanvas.md#strokeworld)
- [clipWorld](ILeaferCanvas.md#clipworld)
- [clipUI](ILeaferCanvas.md#clipui)
- [clearWorld](ILeaferCanvas.md#clearworld)
- [clear](ILeaferCanvas.md#clear)
- [init](ILeaferCanvas.md#init)
- [export](ILeaferCanvas.md#export)
- [toBlob](ILeaferCanvas.md#toblob)
- [toDataURL](ILeaferCanvas.md#todataurl)
- [saveAs](ILeaferCanvas.md#saveas)
- [startAutoLayout](ILeaferCanvas.md#startautolayout)
- [stopAutoLayout](ILeaferCanvas.md#stopautolayout)
- [resize](ILeaferCanvas.md#resize)
- [updateViewSize](ILeaferCanvas.md#updateviewsize)
- [updateClientBounds](ILeaferCanvas.md#updateclientbounds)
- [getClientBounds](ILeaferCanvas.md#getclientbounds)
- [isSameSize](ILeaferCanvas.md#issamesize)
- [getSameCanvas](ILeaferCanvas.md#getsamecanvas)
- [recycle](ILeaferCanvas.md#recycle)
- [updateRender](ILeaferCanvas.md#updaterender)
- [unrealCanvas](ILeaferCanvas.md#unrealcanvas)
- [destroy](ILeaferCanvas.md#destroy)
- [beginPath](ILeaferCanvas.md#beginpath)
- [moveTo](ILeaferCanvas.md#moveto)
- [lineTo](ILeaferCanvas.md#lineto)
- [bezierCurveTo](ILeaferCanvas.md#beziercurveto)
- [quadraticCurveTo](ILeaferCanvas.md#quadraticcurveto)
- [closePath](ILeaferCanvas.md#closepath)
- [arc](ILeaferCanvas.md#arc)
- [arcTo](ILeaferCanvas.md#arcto)
- [ellipse](ILeaferCanvas.md#ellipse)
- [rect](ILeaferCanvas.md#rect)
- [roundRect](ILeaferCanvas.md#roundrect)

## Properties

### strokeAlign

• `Optional` **strokeAlign**: `string`

#### Inherited from

[ICanvasAttr](ICanvasAttr.md).[strokeAlign](ICanvasAttr.md#strokealign)

#### Defined in

[src/leafer/packages/interface/src/canvas/ILeaferCanvas.ts:28](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/canvas/ILeaferCanvas.ts#L28)

___

### strokeCap

• `Optional` **strokeCap**: `string`

#### Inherited from

[ICanvasAttr](ICanvasAttr.md).[strokeCap](ICanvasAttr.md#strokecap)

#### Defined in

[src/leafer/packages/interface/src/canvas/ILeaferCanvas.ts:30](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/canvas/ILeaferCanvas.ts#L30)

___

### strokeJoin

• `Optional` **strokeJoin**: `string`

#### Inherited from

[ICanvasAttr](ICanvasAttr.md).[strokeJoin](ICanvasAttr.md#strokejoin)

#### Defined in

[src/leafer/packages/interface/src/canvas/ILeaferCanvas.ts:31](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/canvas/ILeaferCanvas.ts#L31)

___

### dashPattern

• `Optional` **dashPattern**: `number`[]

#### Inherited from

[ICanvasAttr](ICanvasAttr.md).[dashPattern](ICanvasAttr.md#dashpattern)

#### Defined in

[src/leafer/packages/interface/src/canvas/ILeaferCanvas.ts:32](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/canvas/ILeaferCanvas.ts#L32)

___

### dashOffset

• `Optional` **dashOffset**: `number`

#### Inherited from

[ICanvasAttr](ICanvasAttr.md).[dashOffset](ICanvasAttr.md#dashoffset)

#### Defined in

[src/leafer/packages/interface/src/canvas/ILeaferCanvas.ts:33](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/canvas/ILeaferCanvas.ts#L33)

___

### miterLimit

• `Optional` **miterLimit**: `number`

#### Inherited from

[ICanvasAttr](ICanvasAttr.md).[miterLimit](ICanvasAttr.md#miterlimit)

#### Defined in

[src/leafer/packages/interface/src/canvas/ILeaferCanvas.ts:34](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/canvas/ILeaferCanvas.ts#L34)

___

### smooth

• **smooth**: `boolean`

#### Inherited from

[ICanvasAttr](ICanvasAttr.md).[smooth](ICanvasAttr.md#smooth)

#### Defined in

[src/leafer/packages/interface/src/canvas/ILeaferCanvas.ts:44](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/canvas/ILeaferCanvas.ts#L44)

___

### smoothLevel

• **smoothLevel**: `string`

#### Inherited from

[ICanvasAttr](ICanvasAttr.md).[smoothLevel](ICanvasAttr.md#smoothlevel)

#### Defined in

[src/leafer/packages/interface/src/canvas/ILeaferCanvas.ts:45](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/canvas/ILeaferCanvas.ts#L45)

___

### opacity

• **opacity**: `number`

#### Inherited from

[ICanvasAttr](ICanvasAttr.md).[opacity](ICanvasAttr.md#opacity)

#### Defined in

[src/leafer/packages/interface/src/canvas/ILeaferCanvas.ts:46](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/canvas/ILeaferCanvas.ts#L46)

___

### blendMode

• **blendMode**: `string`

#### Inherited from

[ICanvasAttr](ICanvasAttr.md).[blendMode](ICanvasAttr.md#blendmode)

#### Defined in

[src/leafer/packages/interface/src/canvas/ILeaferCanvas.ts:47](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/canvas/ILeaferCanvas.ts#L47)

___

### fillStyle

• **fillStyle**: `string` \| `object`

#### Inherited from

[ICanvasAttr](ICanvasAttr.md).[fillStyle](ICanvasAttr.md#fillstyle)

#### Defined in

[src/leafer/packages/interface/src/canvas/ILeaferCanvas.ts:49](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/canvas/ILeaferCanvas.ts#L49)

___

### strokeStyle

• **strokeStyle**: `string` \| `object`

#### Inherited from

[ICanvasAttr](ICanvasAttr.md).[strokeStyle](ICanvasAttr.md#strokestyle)

#### Defined in

[src/leafer/packages/interface/src/canvas/ILeaferCanvas.ts:51](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/canvas/ILeaferCanvas.ts#L51)

___

### strokeWidth

• **strokeWidth**: `number`

#### Inherited from

[ICanvasAttr](ICanvasAttr.md).[strokeWidth](ICanvasAttr.md#strokewidth)

#### Defined in

[src/leafer/packages/interface/src/canvas/ILeaferCanvas.ts:52](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/canvas/ILeaferCanvas.ts#L52)

___

### shadowBlur

• **shadowBlur**: `number`

#### Inherited from

[ICanvasAttr](ICanvasAttr.md).[shadowBlur](ICanvasAttr.md#shadowblur)

#### Defined in

[src/leafer/packages/interface/src/canvas/ILeaferCanvas.ts:54](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/canvas/ILeaferCanvas.ts#L54)

___

### shadowColor

• **shadowColor**: `string`

#### Inherited from

[ICanvasAttr](ICanvasAttr.md).[shadowColor](ICanvasAttr.md#shadowcolor)

#### Defined in

[src/leafer/packages/interface/src/canvas/ILeaferCanvas.ts:55](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/canvas/ILeaferCanvas.ts#L55)

___

### shadowOffsetX

• **shadowOffsetX**: `number`

#### Inherited from

[ICanvasAttr](ICanvasAttr.md).[shadowOffsetX](ICanvasAttr.md#shadowoffsetx)

#### Defined in

[src/leafer/packages/interface/src/canvas/ILeaferCanvas.ts:56](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/canvas/ILeaferCanvas.ts#L56)

___

### shadowOffsetY

• **shadowOffsetY**: `number`

#### Inherited from

[ICanvasAttr](ICanvasAttr.md).[shadowOffsetY](ICanvasAttr.md#shadowoffsety)

#### Defined in

[src/leafer/packages/interface/src/canvas/ILeaferCanvas.ts:57](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/canvas/ILeaferCanvas.ts#L57)

___

### filter

• **filter**: `string`

#### Inherited from

[ICanvasAttr](ICanvasAttr.md).[filter](ICanvasAttr.md#filter)

#### Defined in

[src/leafer/packages/interface/src/canvas/ILeaferCanvas.ts:59](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/canvas/ILeaferCanvas.ts#L59)

___

### font

• **font**: `string`

#### Inherited from

[ICanvasAttr](ICanvasAttr.md).[font](ICanvasAttr.md#font)

#### Defined in

[src/leafer/packages/interface/src/canvas/ILeaferCanvas.ts:61](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/canvas/ILeaferCanvas.ts#L61)

___

### fontKerning

• **fontKerning**: `string`

#### Inherited from

[ICanvasAttr](ICanvasAttr.md).[fontKerning](ICanvasAttr.md#fontkerning)

#### Defined in

[src/leafer/packages/interface/src/canvas/ILeaferCanvas.ts:62](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/canvas/ILeaferCanvas.ts#L62)

___

### fontStretch

• **fontStretch**: `string`

#### Inherited from

[ICanvasAttr](ICanvasAttr.md).[fontStretch](ICanvasAttr.md#fontstretch)

#### Defined in

[src/leafer/packages/interface/src/canvas/ILeaferCanvas.ts:63](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/canvas/ILeaferCanvas.ts#L63)

___

### fontVariantCaps

• **fontVariantCaps**: `string`

#### Inherited from

[ICanvasAttr](ICanvasAttr.md).[fontVariantCaps](ICanvasAttr.md#fontvariantcaps)

#### Defined in

[src/leafer/packages/interface/src/canvas/ILeaferCanvas.ts:64](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/canvas/ILeaferCanvas.ts#L64)

___

### textAlign

• **textAlign**: `string`

#### Inherited from

[ICanvasAttr](ICanvasAttr.md).[textAlign](ICanvasAttr.md#textalign)

#### Defined in

[src/leafer/packages/interface/src/canvas/ILeaferCanvas.ts:66](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/canvas/ILeaferCanvas.ts#L66)

___

### textBaseline

• **textBaseline**: `string`

#### Inherited from

[ICanvasAttr](ICanvasAttr.md).[textBaseline](ICanvasAttr.md#textbaseline)

#### Defined in

[src/leafer/packages/interface/src/canvas/ILeaferCanvas.ts:67](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/canvas/ILeaferCanvas.ts#L67)

___

### textRendering

• **textRendering**: `string`

#### Inherited from

[ICanvasAttr](ICanvasAttr.md).[textRendering](ICanvasAttr.md#textrendering)

#### Defined in

[src/leafer/packages/interface/src/canvas/ILeaferCanvas.ts:68](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/canvas/ILeaferCanvas.ts#L68)

___

### wordSpacing

• **wordSpacing**: `string`

#### Inherited from

[ICanvasAttr](ICanvasAttr.md).[wordSpacing](ICanvasAttr.md#wordspacing)

#### Defined in

[src/leafer/packages/interface/src/canvas/ILeaferCanvas.ts:69](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/canvas/ILeaferCanvas.ts#L69)

___

### letterSpacing

• **letterSpacing**: `string`

#### Inherited from

[ICanvasAttr](ICanvasAttr.md).[letterSpacing](ICanvasAttr.md#letterspacing)

#### Defined in

[src/leafer/packages/interface/src/canvas/ILeaferCanvas.ts:70](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/canvas/ILeaferCanvas.ts#L70)

___

### direction

• **direction**: `string`

#### Inherited from

[ICanvasAttr](ICanvasAttr.md).[direction](ICanvasAttr.md#direction)

#### Defined in

[src/leafer/packages/interface/src/canvas/ILeaferCanvas.ts:72](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/canvas/ILeaferCanvas.ts#L72)

___

### innerId

• `Readonly` **innerId**: `number`

#### Defined in

[src/leafer/packages/interface/src/canvas/ILeaferCanvas.ts:151](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/canvas/ILeaferCanvas.ts#L151)

___

### name

• **name**: `string`

#### Defined in

[src/leafer/packages/interface/src/canvas/ILeaferCanvas.ts:152](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/canvas/ILeaferCanvas.ts#L152)

___

### manager

• **manager**: [`ICanvasManager`](ICanvasManager.md)

#### Defined in

[src/leafer/packages/interface/src/canvas/ILeaferCanvas.ts:154](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/canvas/ILeaferCanvas.ts#L154)

___

### width

• `Readonly` **width**: `number`

#### Defined in

[src/leafer/packages/interface/src/canvas/ILeaferCanvas.ts:156](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/canvas/ILeaferCanvas.ts#L156)

___

### height

• `Readonly` **height**: `number`

#### Defined in

[src/leafer/packages/interface/src/canvas/ILeaferCanvas.ts:157](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/canvas/ILeaferCanvas.ts#L157)

___

### pixelRatio

• `Readonly` **pixelRatio**: `number`

#### Defined in

[src/leafer/packages/interface/src/canvas/ILeaferCanvas.ts:159](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/canvas/ILeaferCanvas.ts#L159)

___

### pixelWidth

• `Readonly` **pixelWidth**: `number`

#### Defined in

[src/leafer/packages/interface/src/canvas/ILeaferCanvas.ts:160](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/canvas/ILeaferCanvas.ts#L160)

___

### pixelHeight

• `Readonly` **pixelHeight**: `number`

#### Defined in

[src/leafer/packages/interface/src/canvas/ILeaferCanvas.ts:161](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/canvas/ILeaferCanvas.ts#L161)

___

### pixelSnap

• **pixelSnap**: `boolean`

#### Defined in

[src/leafer/packages/interface/src/canvas/ILeaferCanvas.ts:163](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/canvas/ILeaferCanvas.ts#L163)

___

### allowBackgroundColor

• `Optional` `Readonly` **allowBackgroundColor**: `boolean`

#### Defined in

[src/leafer/packages/interface/src/canvas/ILeaferCanvas.ts:165](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/canvas/ILeaferCanvas.ts#L165)

___

### backgroundColor

• `Optional` **backgroundColor**: `string`

#### Defined in

[src/leafer/packages/interface/src/canvas/ILeaferCanvas.ts:166](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/canvas/ILeaferCanvas.ts#L166)

___

### hittable

• `Optional` **hittable**: `boolean`

#### Defined in

[src/leafer/packages/interface/src/canvas/ILeaferCanvas.ts:167](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/canvas/ILeaferCanvas.ts#L167)

___

### zIndex

• `Optional` **zIndex**: `number`

#### Defined in

[src/leafer/packages/interface/src/canvas/ILeaferCanvas.ts:169](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/canvas/ILeaferCanvas.ts#L169)

___

### childIndex

• `Optional` **childIndex**: `number`

#### Defined in

[src/leafer/packages/interface/src/canvas/ILeaferCanvas.ts:170](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/canvas/ILeaferCanvas.ts#L170)

___

### bounds

• **bounds**: [`IBounds`](IBounds.md)

#### Defined in

[src/leafer/packages/interface/src/canvas/ILeaferCanvas.ts:172](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/canvas/ILeaferCanvas.ts#L172)

___

### clientBounds

• **clientBounds**: [`IBoundsData`](IBoundsData.md)

#### Defined in

[src/leafer/packages/interface/src/canvas/ILeaferCanvas.ts:173](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/canvas/ILeaferCanvas.ts#L173)

___

### config

• **config**: [`ILeaferCanvasConfig`](ILeaferCanvasConfig.md)

#### Defined in

[src/leafer/packages/interface/src/canvas/ILeaferCanvas.ts:175](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/canvas/ILeaferCanvas.ts#L175)

___

### autoLayout

• **autoLayout**: `boolean`

#### Defined in

[src/leafer/packages/interface/src/canvas/ILeaferCanvas.ts:177](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/canvas/ILeaferCanvas.ts#L177)

___

### view

• **view**: `any`

#### Defined in

[src/leafer/packages/interface/src/canvas/ILeaferCanvas.ts:179](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/canvas/ILeaferCanvas.ts#L179)

___

### parentView

• **parentView**: `any`

#### Defined in

[src/leafer/packages/interface/src/canvas/ILeaferCanvas.ts:180](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/canvas/ILeaferCanvas.ts#L180)

___

### unreal

• `Optional` **unreal**: `boolean`

#### Defined in

[src/leafer/packages/interface/src/canvas/ILeaferCanvas.ts:182](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/canvas/ILeaferCanvas.ts#L182)

___

### context

• **context**: [`ICanvasContext2D`](ICanvasContext2D.md)

#### Defined in

[src/leafer/packages/interface/src/canvas/ILeaferCanvas.ts:184](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/canvas/ILeaferCanvas.ts#L184)

___

### recycled

• `Optional` **recycled**: `boolean`

#### Defined in

[src/leafer/packages/interface/src/canvas/ILeaferCanvas.ts:186](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/canvas/ILeaferCanvas.ts#L186)

___

### worldTransform

• **worldTransform**: [`IMatrixData`](IMatrixData.md)

#### Defined in

[src/leafer/packages/interface/src/canvas/ILeaferCanvas.ts:188](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/canvas/ILeaferCanvas.ts#L188)

## Methods

### save

▸ **save**(): `void`

#### Returns

`void`

#### Inherited from

ICanvasMethod.save

#### Defined in

[src/leafer/packages/interface/src/canvas/ILeaferCanvas.ts:76](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/canvas/ILeaferCanvas.ts#L76)

___

### restore

▸ **restore**(): `void`

#### Returns

`void`

#### Inherited from

ICanvasMethod.restore

#### Defined in

[src/leafer/packages/interface/src/canvas/ILeaferCanvas.ts:77](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/canvas/ILeaferCanvas.ts#L77)

___

### fill

▸ **fill**(`path?`, `rule?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `path?` | [`IWindingRule`](../modules.md#iwindingrule) \| [`IPath2D`](IPath2D.md) |
| `rule?` | [`IWindingRule`](../modules.md#iwindingrule) |

#### Returns

`void`

#### Inherited from

ICanvasMethod.fill

#### Defined in

[src/leafer/packages/interface/src/canvas/ILeaferCanvas.ts:79](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/canvas/ILeaferCanvas.ts#L79)

___

### stroke

▸ **stroke**(`path?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `path?` | [`IPath2D`](IPath2D.md) |

#### Returns

`void`

#### Inherited from

ICanvasMethod.stroke

#### Defined in

[src/leafer/packages/interface/src/canvas/ILeaferCanvas.ts:80](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/canvas/ILeaferCanvas.ts#L80)

___

### clip

▸ **clip**(`path?`, `rule?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `path?` | [`IWindingRule`](../modules.md#iwindingrule) \| [`IPath2D`](IPath2D.md) |
| `rule?` | [`IWindingRule`](../modules.md#iwindingrule) |

#### Returns

`void`

#### Inherited from

ICanvasMethod.clip

#### Defined in

[src/leafer/packages/interface/src/canvas/ILeaferCanvas.ts:81](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/canvas/ILeaferCanvas.ts#L81)

___

### fillRect

▸ **fillRect**(`x`, `y`, `width`, `height`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `x` | `number` |
| `y` | `number` |
| `width` | `number` |
| `height` | `number` |

#### Returns

`void`

#### Inherited from

ICanvasMethod.fillRect

#### Defined in

[src/leafer/packages/interface/src/canvas/ILeaferCanvas.ts:83](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/canvas/ILeaferCanvas.ts#L83)

___

### strokeRect

▸ **strokeRect**(`x`, `y`, `width`, `height`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `x` | `number` |
| `y` | `number` |
| `width` | `number` |
| `height` | `number` |

#### Returns

`void`

#### Inherited from

ICanvasMethod.strokeRect

#### Defined in

[src/leafer/packages/interface/src/canvas/ILeaferCanvas.ts:84](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/canvas/ILeaferCanvas.ts#L84)

___

### clearRect

▸ **clearRect**(`x`, `y`, `width`, `height`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `x` | `number` |
| `y` | `number` |
| `width` | `number` |
| `height` | `number` |

#### Returns

`void`

#### Inherited from

ICanvasMethod.clearRect

#### Defined in

[src/leafer/packages/interface/src/canvas/ILeaferCanvas.ts:85](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/canvas/ILeaferCanvas.ts#L85)

___

### transform

▸ **transform**(`a`, `b?`, `c?`, `d?`, `e?`, `f?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | `number` \| [`IMatrixData`](IMatrixData.md) |
| `b?` | `number` |
| `c?` | `number` |
| `d?` | `number` |
| `e?` | `number` |
| `f?` | `number` |

#### Returns

`void`

#### Inherited from

ICanvasMethod.transform

#### Defined in

[src/leafer/packages/interface/src/canvas/ILeaferCanvas.ts:87](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/canvas/ILeaferCanvas.ts#L87)

___

### translate

▸ **translate**(`x`, `y`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `x` | `number` |
| `y` | `number` |

#### Returns

`void`

#### Inherited from

ICanvasMethod.translate

#### Defined in

[src/leafer/packages/interface/src/canvas/ILeaferCanvas.ts:88](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/canvas/ILeaferCanvas.ts#L88)

___

### scale

▸ **scale**(`x`, `y`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `x` | `number` |
| `y` | `number` |

#### Returns

`void`

#### Inherited from

ICanvasMethod.scale

#### Defined in

[src/leafer/packages/interface/src/canvas/ILeaferCanvas.ts:89](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/canvas/ILeaferCanvas.ts#L89)

___

### rotate

▸ **rotate**(`angle`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `angle` | `number` |

#### Returns

`void`

#### Inherited from

ICanvasMethod.rotate

#### Defined in

[src/leafer/packages/interface/src/canvas/ILeaferCanvas.ts:90](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/canvas/ILeaferCanvas.ts#L90)

___

### drawImage

▸ **drawImage**(`image`, `dx`, `dy`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `image` | `CanvasImageSource` |
| `dx` | `number` |
| `dy` | `number` |

#### Returns

`void`

#### Inherited from

ICanvasMethod.drawImage

#### Defined in

[src/leafer/packages/interface/src/canvas/ILeaferCanvas.ts:92](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/canvas/ILeaferCanvas.ts#L92)

▸ **drawImage**(`image`, `dx`, `dy`, `dw`, `dh`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `image` | `CanvasImageSource` |
| `dx` | `number` |
| `dy` | `number` |
| `dw` | `number` |
| `dh` | `number` |

#### Returns

`void`

#### Inherited from

ICanvasMethod.drawImage

#### Defined in

[src/leafer/packages/interface/src/canvas/ILeaferCanvas.ts:93](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/canvas/ILeaferCanvas.ts#L93)

▸ **drawImage**(`image`, `sx`, `sy`, `sw`, `sh`, `dx`, `dy`, `dw`, `dh`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `image` | `CanvasImageSource` |
| `sx` | `number` |
| `sy` | `number` |
| `sw` | `number` |
| `sh` | `number` |
| `dx` | `number` |
| `dy` | `number` |
| `dw` | `number` |
| `dh` | `number` |

#### Returns

`void`

#### Inherited from

ICanvasMethod.drawImage

#### Defined in

[src/leafer/packages/interface/src/canvas/ILeaferCanvas.ts:94](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/canvas/ILeaferCanvas.ts#L94)

___

### setTransform

▸ **setTransform**(`a`, `b?`, `c?`, `d?`, `e?`, `f?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | `number` \| [`IMatrixData`](IMatrixData.md) |
| `b?` | `number` |
| `c?` | `number` |
| `d?` | `number` |
| `e?` | `number` |
| `f?` | `number` |

#### Returns

`void`

#### Inherited from

ICanvasMethod.setTransform

#### Defined in

[src/leafer/packages/interface/src/canvas/ILeaferCanvas.ts:96](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/canvas/ILeaferCanvas.ts#L96)

___

### getTransform

▸ **getTransform**(): [`IMatrixData`](IMatrixData.md)

#### Returns

[`IMatrixData`](IMatrixData.md)

#### Inherited from

ICanvasMethod.getTransform

#### Defined in

[src/leafer/packages/interface/src/canvas/ILeaferCanvas.ts:97](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/canvas/ILeaferCanvas.ts#L97)

___

### resetTransform

▸ **resetTransform**(): `void`

#### Returns

`void`

#### Inherited from

ICanvasMethod.resetTransform

#### Defined in

[src/leafer/packages/interface/src/canvas/ILeaferCanvas.ts:98](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/canvas/ILeaferCanvas.ts#L98)

___

### createConicGradient

▸ **createConicGradient**(`startAngle`, `x`, `y`): `CanvasGradient`

#### Parameters

| Name | Type |
| :------ | :------ |
| `startAngle` | `number` |
| `x` | `number` |
| `y` | `number` |

#### Returns

`CanvasGradient`

#### Inherited from

ICanvasMethod.createConicGradient

#### Defined in

[src/leafer/packages/interface/src/canvas/ILeaferCanvas.ts:100](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/canvas/ILeaferCanvas.ts#L100)

___

### createLinearGradient

▸ **createLinearGradient**(`x0`, `y0`, `x1`, `y1`): `CanvasGradient`

#### Parameters

| Name | Type |
| :------ | :------ |
| `x0` | `number` |
| `y0` | `number` |
| `x1` | `number` |
| `y1` | `number` |

#### Returns

`CanvasGradient`

#### Inherited from

ICanvasMethod.createLinearGradient

#### Defined in

[src/leafer/packages/interface/src/canvas/ILeaferCanvas.ts:101](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/canvas/ILeaferCanvas.ts#L101)

___

### createPattern

▸ **createPattern**(`image`, `repetition`): `CanvasPattern`

#### Parameters

| Name | Type |
| :------ | :------ |
| `image` | `CanvasImageSource` |
| `repetition` | `string` |

#### Returns

`CanvasPattern`

#### Inherited from

ICanvasMethod.createPattern

#### Defined in

[src/leafer/packages/interface/src/canvas/ILeaferCanvas.ts:102](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/canvas/ILeaferCanvas.ts#L102)

___

### createRadialGradient

▸ **createRadialGradient**(`x0`, `y0`, `r0`, `x1`, `y1`, `r1`): `CanvasGradient`

#### Parameters

| Name | Type |
| :------ | :------ |
| `x0` | `number` |
| `y0` | `number` |
| `r0` | `number` |
| `x1` | `number` |
| `y1` | `number` |
| `r1` | `number` |

#### Returns

`CanvasGradient`

#### Inherited from

ICanvasMethod.createRadialGradient

#### Defined in

[src/leafer/packages/interface/src/canvas/ILeaferCanvas.ts:103](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/canvas/ILeaferCanvas.ts#L103)

___

### fillText

▸ **fillText**(`text`, `x`, `y`, `maxWidth?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `text` | `string` |
| `x` | `number` |
| `y` | `number` |
| `maxWidth?` | `number` |

#### Returns

`void`

#### Inherited from

ICanvasMethod.fillText

#### Defined in

[src/leafer/packages/interface/src/canvas/ILeaferCanvas.ts:107](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/canvas/ILeaferCanvas.ts#L107)

___

### measureText

▸ **measureText**(`text`): [`ITextMetrics`](ITextMetrics.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `text` | `string` |

#### Returns

[`ITextMetrics`](ITextMetrics.md)

#### Inherited from

ICanvasMethod.measureText

#### Defined in

[src/leafer/packages/interface/src/canvas/ILeaferCanvas.ts:108](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/canvas/ILeaferCanvas.ts#L108)

___

### strokeText

▸ **strokeText**(`text`, `x`, `y`, `maxWidth?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `text` | `string` |
| `x` | `number` |
| `y` | `number` |
| `maxWidth?` | `number` |

#### Returns

`void`

#### Inherited from

ICanvasMethod.strokeText

#### Defined in

[src/leafer/packages/interface/src/canvas/ILeaferCanvas.ts:109](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/canvas/ILeaferCanvas.ts#L109)

___

### saveBlendMode

▸ **saveBlendMode**(`blendMode?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `blendMode?` | `string` |

#### Returns

`void`

#### Inherited from

ICanvasMethod.saveBlendMode

#### Defined in

[src/leafer/packages/interface/src/canvas/ILeaferCanvas.ts:113](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/canvas/ILeaferCanvas.ts#L113)

___

### restoreBlendMode

▸ **restoreBlendMode**(): `void`

#### Returns

`void`

#### Inherited from

ICanvasMethod.restoreBlendMode

#### Defined in

[src/leafer/packages/interface/src/canvas/ILeaferCanvas.ts:114](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/canvas/ILeaferCanvas.ts#L114)

___

### hitFill

▸ **hitFill**(`point`, `fillRule?`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `point` | [`IPointData`](IPointData.md) |
| `fillRule?` | `string` |

#### Returns

`boolean`

#### Inherited from

ICanvasMethod.hitFill

#### Defined in

[src/leafer/packages/interface/src/canvas/ILeaferCanvas.ts:116](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/canvas/ILeaferCanvas.ts#L116)

___

### hitStroke

▸ **hitStroke**(`point`, `strokeWidth?`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `point` | [`IPointData`](IPointData.md) |
| `strokeWidth?` | `number` |

#### Returns

`boolean`

#### Inherited from

ICanvasMethod.hitStroke

#### Defined in

[src/leafer/packages/interface/src/canvas/ILeaferCanvas.ts:117](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/canvas/ILeaferCanvas.ts#L117)

___

### hitPixel

▸ **hitPixel**(`radiusPoint`, `offset?`, `scale?`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `radiusPoint` | [`IRadiusPointData`](IRadiusPointData.md) |
| `offset?` | [`IPointData`](IPointData.md) |
| `scale?` | `number` |

#### Returns

`boolean`

#### Inherited from

ICanvasMethod.hitPixel

#### Defined in

[src/leafer/packages/interface/src/canvas/ILeaferCanvas.ts:118](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/canvas/ILeaferCanvas.ts#L118)

___

### setStroke

▸ **setStroke**(`strokeStyle`, `strokeWidth`, `options?`, `childOptions?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `strokeStyle` | `string` \| `object` |
| `strokeWidth` | `number` |
| `options?` | [`ICanvasStrokeOptions`](ICanvasStrokeOptions.md) |
| `childOptions?` | [`ICanvasStrokeOptions`](ICanvasStrokeOptions.md) |

#### Returns

`void`

#### Inherited from

ICanvasMethod.setStroke

#### Defined in

[src/leafer/packages/interface/src/canvas/ILeaferCanvas.ts:121](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/canvas/ILeaferCanvas.ts#L121)

___

### setStrokeOptions

▸ **setStrokeOptions**(`options`, `childOptions?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | [`ICanvasStrokeOptions`](ICanvasStrokeOptions.md) |
| `childOptions?` | [`ICanvasStrokeOptions`](ICanvasStrokeOptions.md) |

#### Returns

`void`

#### Inherited from

ICanvasMethod.setStrokeOptions

#### Defined in

[src/leafer/packages/interface/src/canvas/ILeaferCanvas.ts:122](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/canvas/ILeaferCanvas.ts#L122)

___

### setWorld

▸ **setWorld**(`matrix`, `parentMatrix?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `matrix` | [`IMatrixData`](IMatrixData.md) |
| `parentMatrix?` | [`IMatrixData`](IMatrixData.md) |

#### Returns

`void`

#### Inherited from

ICanvasMethod.setWorld

#### Defined in

[src/leafer/packages/interface/src/canvas/ILeaferCanvas.ts:124](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/canvas/ILeaferCanvas.ts#L124)

___

### useWorldTransform

▸ **useWorldTransform**(`worldTransform?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `worldTransform?` | [`IMatrixData`](IMatrixData.md) |

#### Returns

`void`

#### Inherited from

ICanvasMethod.useWorldTransform

#### Defined in

[src/leafer/packages/interface/src/canvas/ILeaferCanvas.ts:125](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/canvas/ILeaferCanvas.ts#L125)

___

### setWorldShadow

▸ **setWorldShadow**(`x`, `y`, `blur`, `color?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `x` | `number` |
| `y` | `number` |
| `blur` | `number` |
| `color?` | `string` |

#### Returns

`void`

#### Inherited from

ICanvasMethod.setWorldShadow

#### Defined in

[src/leafer/packages/interface/src/canvas/ILeaferCanvas.ts:127](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/canvas/ILeaferCanvas.ts#L127)

___

### setWorldBlur

▸ **setWorldBlur**(`blur`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `blur` | `number` |

#### Returns

`void`

#### Inherited from

ICanvasMethod.setWorldBlur

#### Defined in

[src/leafer/packages/interface/src/canvas/ILeaferCanvas.ts:128](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/canvas/ILeaferCanvas.ts#L128)

___

### copyWorld

▸ **copyWorld**(`canvas`, `fromBounds?`, `toBounds?`, `blendMode?`, `ceilPixel?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `canvas` | [`ILeaferCanvas`](ILeaferCanvas.md) |
| `fromBounds?` | [`IBoundsData`](IBoundsData.md) |
| `toBounds?` | [`IBoundsData`](IBoundsData.md) |
| `blendMode?` | `string` |
| `ceilPixel?` | `boolean` |

#### Returns

`void`

#### Inherited from

ICanvasMethod.copyWorld

#### Defined in

[src/leafer/packages/interface/src/canvas/ILeaferCanvas.ts:130](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/canvas/ILeaferCanvas.ts#L130)

___

### copyWorldByReset

▸ **copyWorldByReset**(`canvas`, `from?`, `to?`, `blendMode?`, `onlyResetTransform?`, `ceilPixel?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `canvas` | [`ILeaferCanvas`](ILeaferCanvas.md) |
| `from?` | [`IBoundsData`](IBoundsData.md) |
| `to?` | [`IBoundsData`](IBoundsData.md) |
| `blendMode?` | `string` |
| `onlyResetTransform?` | `boolean` |
| `ceilPixel?` | `boolean` |

#### Returns

`void`

#### Inherited from

ICanvasMethod.copyWorldByReset

#### Defined in

[src/leafer/packages/interface/src/canvas/ILeaferCanvas.ts:131](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/canvas/ILeaferCanvas.ts#L131)

___

### copyWorldToInner

▸ **copyWorldToInner**(`canvas`, `fromWorld`, `toInnerBounds`, `blendMode?`, `ceilPixel?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `canvas` | [`ILeaferCanvas`](ILeaferCanvas.md) |
| `fromWorld` | [`IMatrixWithBoundsData`](IMatrixWithBoundsData.md) |
| `toInnerBounds` | [`IBoundsData`](IBoundsData.md) |
| `blendMode?` | `string` |
| `ceilPixel?` | `boolean` |

#### Returns

`void`

#### Inherited from

ICanvasMethod.copyWorldToInner

#### Defined in

[src/leafer/packages/interface/src/canvas/ILeaferCanvas.ts:132](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/canvas/ILeaferCanvas.ts#L132)

___

### useGrayscaleAlpha

▸ **useGrayscaleAlpha**(`bounds`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `bounds` | [`IBoundsData`](IBoundsData.md) |

#### Returns

`void`

#### Inherited from

ICanvasMethod.useGrayscaleAlpha

#### Defined in

[src/leafer/packages/interface/src/canvas/ILeaferCanvas.ts:134](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/canvas/ILeaferCanvas.ts#L134)

___

### useMask

▸ **useMask**(`maskCanvas`, `fromBounds?`, `toBounds?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `maskCanvas` | [`ILeaferCanvas`](ILeaferCanvas.md) |
| `fromBounds?` | [`IBoundsData`](IBoundsData.md) |
| `toBounds?` | [`IBoundsData`](IBoundsData.md) |

#### Returns

`void`

#### Inherited from

ICanvasMethod.useMask

#### Defined in

[src/leafer/packages/interface/src/canvas/ILeaferCanvas.ts:135](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/canvas/ILeaferCanvas.ts#L135)

___

### useEraser

▸ **useEraser**(`eraserCanvas`, `fromBounds?`, `toBounds?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `eraserCanvas` | [`ILeaferCanvas`](ILeaferCanvas.md) |
| `fromBounds?` | [`IBoundsData`](IBoundsData.md) |
| `toBounds?` | [`IBoundsData`](IBoundsData.md) |

#### Returns

`void`

#### Inherited from

ICanvasMethod.useEraser

#### Defined in

[src/leafer/packages/interface/src/canvas/ILeaferCanvas.ts:136](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/canvas/ILeaferCanvas.ts#L136)

___

### fillWorld

▸ **fillWorld**(`bounds`, `color`, `blendMode?`, `ceilPixel?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `bounds` | [`IBoundsData`](IBoundsData.md) |
| `color` | `string` \| `object` |
| `blendMode?` | `string` |
| `ceilPixel?` | `boolean` |

#### Returns

`void`

#### Inherited from

ICanvasMethod.fillWorld

#### Defined in

[src/leafer/packages/interface/src/canvas/ILeaferCanvas.ts:138](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/canvas/ILeaferCanvas.ts#L138)

___

### strokeWorld

▸ **strokeWorld**(`bounds`, `color`, `blendMode?`, `ceilPixel?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `bounds` | [`IBoundsData`](IBoundsData.md) |
| `color` | `string` \| `object` |
| `blendMode?` | `string` |
| `ceilPixel?` | `boolean` |

#### Returns

`void`

#### Inherited from

ICanvasMethod.strokeWorld

#### Defined in

[src/leafer/packages/interface/src/canvas/ILeaferCanvas.ts:139](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/canvas/ILeaferCanvas.ts#L139)

___

### clipWorld

▸ **clipWorld**(`bounds`, `ceilPixel?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `bounds` | [`IBoundsData`](IBoundsData.md) |
| `ceilPixel?` | `boolean` |

#### Returns

`void`

#### Inherited from

ICanvasMethod.clipWorld

#### Defined in

[src/leafer/packages/interface/src/canvas/ILeaferCanvas.ts:140](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/canvas/ILeaferCanvas.ts#L140)

___

### clipUI

▸ **clipUI**(`ruleData`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `ruleData` | [`IWindingRuleData`](IWindingRuleData.md) |

#### Returns

`void`

#### Inherited from

ICanvasMethod.clipUI

#### Defined in

[src/leafer/packages/interface/src/canvas/ILeaferCanvas.ts:141](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/canvas/ILeaferCanvas.ts#L141)

___

### clearWorld

▸ **clearWorld**(`bounds`, `ceilPixel?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `bounds` | [`IBoundsData`](IBoundsData.md) |
| `ceilPixel?` | `boolean` |

#### Returns

`void`

#### Inherited from

ICanvasMethod.clearWorld

#### Defined in

[src/leafer/packages/interface/src/canvas/ILeaferCanvas.ts:143](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/canvas/ILeaferCanvas.ts#L143)

___

### clear

▸ **clear**(): `void`

#### Returns

`void`

#### Inherited from

ICanvasMethod.clear

#### Defined in

[src/leafer/packages/interface/src/canvas/ILeaferCanvas.ts:144](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/canvas/ILeaferCanvas.ts#L144)

___

### init

▸ **init**(): `void`

#### Returns

`void`

#### Defined in

[src/leafer/packages/interface/src/canvas/ILeaferCanvas.ts:190](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/canvas/ILeaferCanvas.ts#L190)

___

### export

▸ **export**(`filename`, `options?`): `string` \| `Promise`\<`any`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `filename` | `string` |
| `options?` | `number` \| `boolean` \| [`IExportOptions`](IExportOptions.md) |

#### Returns

`string` \| `Promise`\<`any`\>

#### Defined in

[src/leafer/packages/interface/src/canvas/ILeaferCanvas.ts:192](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/canvas/ILeaferCanvas.ts#L192)

___

### toBlob

▸ **toBlob**(`type?`, `quality?`): `Promise`\<`any`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `type?` | `string` |
| `quality?` | `number` |

#### Returns

`Promise`\<`any`\>

#### Defined in

[src/leafer/packages/interface/src/canvas/ILeaferCanvas.ts:193](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/canvas/ILeaferCanvas.ts#L193)

___

### toDataURL

▸ **toDataURL**(`type?`, `quality?`): `string` \| `Promise`\<`string`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `type?` | `string` |
| `quality?` | `number` |

#### Returns

`string` \| `Promise`\<`string`\>

#### Defined in

[src/leafer/packages/interface/src/canvas/ILeaferCanvas.ts:194](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/canvas/ILeaferCanvas.ts#L194)

___

### saveAs

▸ **saveAs**(`filename`, `quality?`): `Promise`\<`boolean`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `filename` | `string` |
| `quality?` | `number` |

#### Returns

`Promise`\<`boolean`\>

#### Defined in

[src/leafer/packages/interface/src/canvas/ILeaferCanvas.ts:195](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/canvas/ILeaferCanvas.ts#L195)

___

### startAutoLayout

▸ **startAutoLayout**(`autoBounds`, `listener`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `autoBounds` | [`IAutoBounds`](IAutoBounds.md) |
| `listener` | [`IResizeEventListener`](IResizeEventListener.md) |

#### Returns

`void`

#### Defined in

[src/leafer/packages/interface/src/canvas/ILeaferCanvas.ts:197](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/canvas/ILeaferCanvas.ts#L197)

___

### stopAutoLayout

▸ **stopAutoLayout**(): `void`

#### Returns

`void`

#### Defined in

[src/leafer/packages/interface/src/canvas/ILeaferCanvas.ts:198](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/canvas/ILeaferCanvas.ts#L198)

___

### resize

▸ **resize**(`size`, `safeResize?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `size` | [`IScreenSizeData`](IScreenSizeData.md) |
| `safeResize?` | `boolean` |

#### Returns

`void`

#### Defined in

[src/leafer/packages/interface/src/canvas/ILeaferCanvas.ts:200](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/canvas/ILeaferCanvas.ts#L200)

___

### updateViewSize

▸ **updateViewSize**(): `void`

#### Returns

`void`

#### Defined in

[src/leafer/packages/interface/src/canvas/ILeaferCanvas.ts:201](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/canvas/ILeaferCanvas.ts#L201)

___

### updateClientBounds

▸ **updateClientBounds**(): `void`

#### Returns

`void`

#### Defined in

[src/leafer/packages/interface/src/canvas/ILeaferCanvas.ts:202](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/canvas/ILeaferCanvas.ts#L202)

___

### getClientBounds

▸ **getClientBounds**(`update?`): [`IBoundsData`](IBoundsData.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `update?` | `boolean` |

#### Returns

[`IBoundsData`](IBoundsData.md)

#### Defined in

[src/leafer/packages/interface/src/canvas/ILeaferCanvas.ts:203](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/canvas/ILeaferCanvas.ts#L203)

___

### isSameSize

▸ **isSameSize**(`canvas`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `canvas` | [`IScreenSizeData`](IScreenSizeData.md) |

#### Returns

`boolean`

#### Defined in

[src/leafer/packages/interface/src/canvas/ILeaferCanvas.ts:206](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/canvas/ILeaferCanvas.ts#L206)

___

### getSameCanvas

▸ **getSameCanvas**(`useSameWorldTransform?`, `useSameSmooth?`): [`ILeaferCanvas`](ILeaferCanvas.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `useSameWorldTransform?` | `boolean` |
| `useSameSmooth?` | `boolean` |

#### Returns

[`ILeaferCanvas`](ILeaferCanvas.md)

#### Defined in

[src/leafer/packages/interface/src/canvas/ILeaferCanvas.ts:207](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/canvas/ILeaferCanvas.ts#L207)

___

### recycle

▸ **recycle**(`clearBounds?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `clearBounds?` | [`IBoundsData`](IBoundsData.md) |

#### Returns

`void`

#### Defined in

[src/leafer/packages/interface/src/canvas/ILeaferCanvas.ts:208](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/canvas/ILeaferCanvas.ts#L208)

___

### updateRender

▸ **updateRender**(`bounds`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `bounds` | [`IBoundsData`](IBoundsData.md) |

#### Returns

`void`

#### Defined in

[src/leafer/packages/interface/src/canvas/ILeaferCanvas.ts:210](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/canvas/ILeaferCanvas.ts#L210)

___

### unrealCanvas

▸ **unrealCanvas**(): `void`

#### Returns

`void`

#### Defined in

[src/leafer/packages/interface/src/canvas/ILeaferCanvas.ts:211](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/canvas/ILeaferCanvas.ts#L211)

___

### destroy

▸ **destroy**(): `void`

#### Returns

`void`

#### Defined in

[src/leafer/packages/interface/src/canvas/ILeaferCanvas.ts:212](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/canvas/ILeaferCanvas.ts#L212)

___

### beginPath

▸ **beginPath**(): `void`

#### Returns

`void`

#### Inherited from

[IPathDrawer](IPathDrawer.md).[beginPath](IPathDrawer.md#beginpath)

#### Defined in

[src/leafer/packages/interface/src/path/IPathDrawer.ts:4](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/path/IPathDrawer.ts#L4)

___

### moveTo

▸ **moveTo**(`x`, `y`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `x` | `number` |
| `y` | `number` |

#### Returns

`void`

#### Inherited from

[IPathDrawer](IPathDrawer.md).[moveTo](IPathDrawer.md#moveto)

#### Defined in

[src/leafer/packages/interface/src/path/IPathDrawer.ts:6](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/path/IPathDrawer.ts#L6)

___

### lineTo

▸ **lineTo**(`x`, `y`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `x` | `number` |
| `y` | `number` |

#### Returns

`void`

#### Inherited from

[IPathDrawer](IPathDrawer.md).[lineTo](IPathDrawer.md#lineto)

#### Defined in

[src/leafer/packages/interface/src/path/IPathDrawer.ts:7](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/path/IPathDrawer.ts#L7)

___

### bezierCurveTo

▸ **bezierCurveTo**(`x1`, `y1`, `x2`, `y2`, `x`, `y`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `x1` | `number` |
| `y1` | `number` |
| `x2` | `number` |
| `y2` | `number` |
| `x` | `number` |
| `y` | `number` |

#### Returns

`void`

#### Inherited from

[IPathDrawer](IPathDrawer.md).[bezierCurveTo](IPathDrawer.md#beziercurveto)

#### Defined in

[src/leafer/packages/interface/src/path/IPathDrawer.ts:8](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/path/IPathDrawer.ts#L8)

___

### quadraticCurveTo

▸ **quadraticCurveTo**(`x1`, `y1`, `x`, `y`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `x1` | `number` |
| `y1` | `number` |
| `x` | `number` |
| `y` | `number` |

#### Returns

`void`

#### Inherited from

[IPathDrawer](IPathDrawer.md).[quadraticCurveTo](IPathDrawer.md#quadraticcurveto)

#### Defined in

[src/leafer/packages/interface/src/path/IPathDrawer.ts:9](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/path/IPathDrawer.ts#L9)

___

### closePath

▸ **closePath**(): `void`

#### Returns

`void`

#### Inherited from

[IPathDrawer](IPathDrawer.md).[closePath](IPathDrawer.md#closepath)

#### Defined in

[src/leafer/packages/interface/src/path/IPathDrawer.ts:10](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/path/IPathDrawer.ts#L10)

___

### arc

▸ **arc**(`x`, `y`, `radius`, `startAngle`, `endAngle`, `anticlockwise?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `x` | `number` |
| `y` | `number` |
| `radius` | `number` |
| `startAngle` | `number` |
| `endAngle` | `number` |
| `anticlockwise?` | `boolean` |

#### Returns

`void`

#### Inherited from

[IPathDrawer](IPathDrawer.md).[arc](IPathDrawer.md#arc)

#### Defined in

[src/leafer/packages/interface/src/path/IPathDrawer.ts:12](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/path/IPathDrawer.ts#L12)

___

### arcTo

▸ **arcTo**(`x1`, `y1`, `x2`, `y2`, `radius`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `x1` | `number` |
| `y1` | `number` |
| `x2` | `number` |
| `y2` | `number` |
| `radius` | `number` |

#### Returns

`void`

#### Inherited from

[IPathDrawer](IPathDrawer.md).[arcTo](IPathDrawer.md#arcto)

#### Defined in

[src/leafer/packages/interface/src/path/IPathDrawer.ts:13](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/path/IPathDrawer.ts#L13)

___

### ellipse

▸ **ellipse**(`x`, `y`, `radiusX`, `radiusY`, `rotation`, `startAngle`, `endAngle`, `anticlockwise?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `x` | `number` |
| `y` | `number` |
| `radiusX` | `number` |
| `radiusY` | `number` |
| `rotation` | `number` |
| `startAngle` | `number` |
| `endAngle` | `number` |
| `anticlockwise?` | `boolean` |

#### Returns

`void`

#### Inherited from

[IPathDrawer](IPathDrawer.md).[ellipse](IPathDrawer.md#ellipse)

#### Defined in

[src/leafer/packages/interface/src/path/IPathDrawer.ts:14](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/path/IPathDrawer.ts#L14)

___

### rect

▸ **rect**(`x`, `y`, `width`, `height`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `x` | `number` |
| `y` | `number` |
| `width` | `number` |
| `height` | `number` |

#### Returns

`void`

#### Inherited from

[IPathDrawer](IPathDrawer.md).[rect](IPathDrawer.md#rect)

#### Defined in

[src/leafer/packages/interface/src/path/IPathDrawer.ts:16](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/path/IPathDrawer.ts#L16)

___

### roundRect

▸ **roundRect**(`x`, `y`, `width`, `height`, `radius?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `x` | `number` |
| `y` | `number` |
| `width` | `number` |
| `height` | `number` |
| `radius?` | `number` \| `number`[] |

#### Returns

`void`

#### Inherited from

[IPathDrawer](IPathDrawer.md).[roundRect](IPathDrawer.md#roundrect)

#### Defined in

[src/leafer/packages/interface/src/path/IPathDrawer.ts:17](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/path/IPathDrawer.ts#L17)
