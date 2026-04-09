# Interface: IHitCanvas

## Hierarchy

- [`ILeaferCanvas`](ILeaferCanvas.md)

  ↳ **`IHitCanvas`**

## Table of contents

### Properties

- [strokeAlign](IHitCanvas.md#strokealign)
- [strokeCap](IHitCanvas.md#strokecap)
- [strokeJoin](IHitCanvas.md#strokejoin)
- [dashPattern](IHitCanvas.md#dashpattern)
- [dashOffset](IHitCanvas.md#dashoffset)
- [miterLimit](IHitCanvas.md#miterlimit)
- [smooth](IHitCanvas.md#smooth)
- [smoothLevel](IHitCanvas.md#smoothlevel)
- [opacity](IHitCanvas.md#opacity)
- [blendMode](IHitCanvas.md#blendmode)
- [fillStyle](IHitCanvas.md#fillstyle)
- [strokeStyle](IHitCanvas.md#strokestyle)
- [strokeWidth](IHitCanvas.md#strokewidth)
- [shadowBlur](IHitCanvas.md#shadowblur)
- [shadowColor](IHitCanvas.md#shadowcolor)
- [shadowOffsetX](IHitCanvas.md#shadowoffsetx)
- [shadowOffsetY](IHitCanvas.md#shadowoffsety)
- [filter](IHitCanvas.md#filter)
- [font](IHitCanvas.md#font)
- [fontKerning](IHitCanvas.md#fontkerning)
- [fontStretch](IHitCanvas.md#fontstretch)
- [fontVariantCaps](IHitCanvas.md#fontvariantcaps)
- [textAlign](IHitCanvas.md#textalign)
- [textBaseline](IHitCanvas.md#textbaseline)
- [textRendering](IHitCanvas.md#textrendering)
- [wordSpacing](IHitCanvas.md#wordspacing)
- [letterSpacing](IHitCanvas.md#letterspacing)
- [direction](IHitCanvas.md#direction)
- [innerId](IHitCanvas.md#innerid)
- [name](IHitCanvas.md#name)
- [manager](IHitCanvas.md#manager)
- [width](IHitCanvas.md#width)
- [height](IHitCanvas.md#height)
- [pixelRatio](IHitCanvas.md#pixelratio)
- [pixelWidth](IHitCanvas.md#pixelwidth)
- [pixelHeight](IHitCanvas.md#pixelheight)
- [pixelSnap](IHitCanvas.md#pixelsnap)
- [allowBackgroundColor](IHitCanvas.md#allowbackgroundcolor)
- [backgroundColor](IHitCanvas.md#backgroundcolor)
- [hittable](IHitCanvas.md#hittable)
- [zIndex](IHitCanvas.md#zindex)
- [childIndex](IHitCanvas.md#childindex)
- [bounds](IHitCanvas.md#bounds)
- [clientBounds](IHitCanvas.md#clientbounds)
- [config](IHitCanvas.md#config)
- [autoLayout](IHitCanvas.md#autolayout)
- [view](IHitCanvas.md#view)
- [parentView](IHitCanvas.md#parentview)
- [unreal](IHitCanvas.md#unreal)
- [context](IHitCanvas.md#context)
- [recycled](IHitCanvas.md#recycled)
- [worldTransform](IHitCanvas.md#worldtransform)
- [hitScale](IHitCanvas.md#hitscale)

### Methods

- [save](IHitCanvas.md#save)
- [restore](IHitCanvas.md#restore)
- [fill](IHitCanvas.md#fill)
- [stroke](IHitCanvas.md#stroke)
- [clip](IHitCanvas.md#clip)
- [fillRect](IHitCanvas.md#fillrect)
- [strokeRect](IHitCanvas.md#strokerect)
- [clearRect](IHitCanvas.md#clearrect)
- [transform](IHitCanvas.md#transform)
- [translate](IHitCanvas.md#translate)
- [scale](IHitCanvas.md#scale)
- [rotate](IHitCanvas.md#rotate)
- [drawImage](IHitCanvas.md#drawimage)
- [setTransform](IHitCanvas.md#settransform)
- [getTransform](IHitCanvas.md#gettransform)
- [resetTransform](IHitCanvas.md#resettransform)
- [createConicGradient](IHitCanvas.md#createconicgradient)
- [createLinearGradient](IHitCanvas.md#createlineargradient)
- [createPattern](IHitCanvas.md#createpattern)
- [createRadialGradient](IHitCanvas.md#createradialgradient)
- [fillText](IHitCanvas.md#filltext)
- [measureText](IHitCanvas.md#measuretext)
- [strokeText](IHitCanvas.md#stroketext)
- [saveBlendMode](IHitCanvas.md#saveblendmode)
- [restoreBlendMode](IHitCanvas.md#restoreblendmode)
- [hitFill](IHitCanvas.md#hitfill)
- [hitStroke](IHitCanvas.md#hitstroke)
- [hitPixel](IHitCanvas.md#hitpixel)
- [setStroke](IHitCanvas.md#setstroke)
- [setStrokeOptions](IHitCanvas.md#setstrokeoptions)
- [setWorld](IHitCanvas.md#setworld)
- [useWorldTransform](IHitCanvas.md#useworldtransform)
- [setWorldShadow](IHitCanvas.md#setworldshadow)
- [setWorldBlur](IHitCanvas.md#setworldblur)
- [copyWorld](IHitCanvas.md#copyworld)
- [copyWorldByReset](IHitCanvas.md#copyworldbyreset)
- [copyWorldToInner](IHitCanvas.md#copyworldtoinner)
- [useGrayscaleAlpha](IHitCanvas.md#usegrayscalealpha)
- [useMask](IHitCanvas.md#usemask)
- [useEraser](IHitCanvas.md#useeraser)
- [fillWorld](IHitCanvas.md#fillworld)
- [strokeWorld](IHitCanvas.md#strokeworld)
- [clipWorld](IHitCanvas.md#clipworld)
- [clipUI](IHitCanvas.md#clipui)
- [clearWorld](IHitCanvas.md#clearworld)
- [clear](IHitCanvas.md#clear)
- [init](IHitCanvas.md#init)
- [export](IHitCanvas.md#export)
- [toBlob](IHitCanvas.md#toblob)
- [toDataURL](IHitCanvas.md#todataurl)
- [saveAs](IHitCanvas.md#saveas)
- [startAutoLayout](IHitCanvas.md#startautolayout)
- [stopAutoLayout](IHitCanvas.md#stopautolayout)
- [resize](IHitCanvas.md#resize)
- [updateViewSize](IHitCanvas.md#updateviewsize)
- [updateClientBounds](IHitCanvas.md#updateclientbounds)
- [getClientBounds](IHitCanvas.md#getclientbounds)
- [isSameSize](IHitCanvas.md#issamesize)
- [getSameCanvas](IHitCanvas.md#getsamecanvas)
- [recycle](IHitCanvas.md#recycle)
- [updateRender](IHitCanvas.md#updaterender)
- [unrealCanvas](IHitCanvas.md#unrealcanvas)
- [destroy](IHitCanvas.md#destroy)
- [beginPath](IHitCanvas.md#beginpath)
- [moveTo](IHitCanvas.md#moveto)
- [lineTo](IHitCanvas.md#lineto)
- [bezierCurveTo](IHitCanvas.md#beziercurveto)
- [quadraticCurveTo](IHitCanvas.md#quadraticcurveto)
- [closePath](IHitCanvas.md#closepath)
- [arc](IHitCanvas.md#arc)
- [arcTo](IHitCanvas.md#arcto)
- [ellipse](IHitCanvas.md#ellipse)
- [rect](IHitCanvas.md#rect)
- [roundRect](IHitCanvas.md#roundrect)

## Properties

### strokeAlign

• `Optional` **strokeAlign**: `string`

#### Inherited from

[ILeaferCanvas](ILeaferCanvas.md).[strokeAlign](ILeaferCanvas.md#strokealign)

#### Defined in

[src/leafer/packages/interface/src/canvas/ILeaferCanvas.ts:28](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/canvas/ILeaferCanvas.ts#L28)

___

### strokeCap

• `Optional` **strokeCap**: `string`

#### Inherited from

[ILeaferCanvas](ILeaferCanvas.md).[strokeCap](ILeaferCanvas.md#strokecap)

#### Defined in

[src/leafer/packages/interface/src/canvas/ILeaferCanvas.ts:30](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/canvas/ILeaferCanvas.ts#L30)

___

### strokeJoin

• `Optional` **strokeJoin**: `string`

#### Inherited from

[ILeaferCanvas](ILeaferCanvas.md).[strokeJoin](ILeaferCanvas.md#strokejoin)

#### Defined in

[src/leafer/packages/interface/src/canvas/ILeaferCanvas.ts:31](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/canvas/ILeaferCanvas.ts#L31)

___

### dashPattern

• `Optional` **dashPattern**: `number`[]

#### Inherited from

[ILeaferCanvas](ILeaferCanvas.md).[dashPattern](ILeaferCanvas.md#dashpattern)

#### Defined in

[src/leafer/packages/interface/src/canvas/ILeaferCanvas.ts:32](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/canvas/ILeaferCanvas.ts#L32)

___

### dashOffset

• `Optional` **dashOffset**: `number`

#### Inherited from

[ILeaferCanvas](ILeaferCanvas.md).[dashOffset](ILeaferCanvas.md#dashoffset)

#### Defined in

[src/leafer/packages/interface/src/canvas/ILeaferCanvas.ts:33](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/canvas/ILeaferCanvas.ts#L33)

___

### miterLimit

• `Optional` **miterLimit**: `number`

#### Inherited from

[ILeaferCanvas](ILeaferCanvas.md).[miterLimit](ILeaferCanvas.md#miterlimit)

#### Defined in

[src/leafer/packages/interface/src/canvas/ILeaferCanvas.ts:34](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/canvas/ILeaferCanvas.ts#L34)

___

### smooth

• **smooth**: `boolean`

#### Inherited from

[ILeaferCanvas](ILeaferCanvas.md).[smooth](ILeaferCanvas.md#smooth)

#### Defined in

[src/leafer/packages/interface/src/canvas/ILeaferCanvas.ts:44](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/canvas/ILeaferCanvas.ts#L44)

___

### smoothLevel

• **smoothLevel**: `string`

#### Inherited from

[ILeaferCanvas](ILeaferCanvas.md).[smoothLevel](ILeaferCanvas.md#smoothlevel)

#### Defined in

[src/leafer/packages/interface/src/canvas/ILeaferCanvas.ts:45](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/canvas/ILeaferCanvas.ts#L45)

___

### opacity

• **opacity**: `number`

#### Inherited from

[ILeaferCanvas](ILeaferCanvas.md).[opacity](ILeaferCanvas.md#opacity)

#### Defined in

[src/leafer/packages/interface/src/canvas/ILeaferCanvas.ts:46](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/canvas/ILeaferCanvas.ts#L46)

___

### blendMode

• **blendMode**: `string`

#### Inherited from

[ILeaferCanvas](ILeaferCanvas.md).[blendMode](ILeaferCanvas.md#blendmode)

#### Defined in

[src/leafer/packages/interface/src/canvas/ILeaferCanvas.ts:47](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/canvas/ILeaferCanvas.ts#L47)

___

### fillStyle

• **fillStyle**: `string` \| `object`

#### Inherited from

[ILeaferCanvas](ILeaferCanvas.md).[fillStyle](ILeaferCanvas.md#fillstyle)

#### Defined in

[src/leafer/packages/interface/src/canvas/ILeaferCanvas.ts:49](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/canvas/ILeaferCanvas.ts#L49)

___

### strokeStyle

• **strokeStyle**: `string` \| `object`

#### Inherited from

[ILeaferCanvas](ILeaferCanvas.md).[strokeStyle](ILeaferCanvas.md#strokestyle)

#### Defined in

[src/leafer/packages/interface/src/canvas/ILeaferCanvas.ts:51](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/canvas/ILeaferCanvas.ts#L51)

___

### strokeWidth

• **strokeWidth**: `number`

#### Inherited from

[ILeaferCanvas](ILeaferCanvas.md).[strokeWidth](ILeaferCanvas.md#strokewidth)

#### Defined in

[src/leafer/packages/interface/src/canvas/ILeaferCanvas.ts:52](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/canvas/ILeaferCanvas.ts#L52)

___

### shadowBlur

• **shadowBlur**: `number`

#### Inherited from

[ILeaferCanvas](ILeaferCanvas.md).[shadowBlur](ILeaferCanvas.md#shadowblur)

#### Defined in

[src/leafer/packages/interface/src/canvas/ILeaferCanvas.ts:54](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/canvas/ILeaferCanvas.ts#L54)

___

### shadowColor

• **shadowColor**: `string`

#### Inherited from

[ILeaferCanvas](ILeaferCanvas.md).[shadowColor](ILeaferCanvas.md#shadowcolor)

#### Defined in

[src/leafer/packages/interface/src/canvas/ILeaferCanvas.ts:55](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/canvas/ILeaferCanvas.ts#L55)

___

### shadowOffsetX

• **shadowOffsetX**: `number`

#### Inherited from

[ILeaferCanvas](ILeaferCanvas.md).[shadowOffsetX](ILeaferCanvas.md#shadowoffsetx)

#### Defined in

[src/leafer/packages/interface/src/canvas/ILeaferCanvas.ts:56](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/canvas/ILeaferCanvas.ts#L56)

___

### shadowOffsetY

• **shadowOffsetY**: `number`

#### Inherited from

[ILeaferCanvas](ILeaferCanvas.md).[shadowOffsetY](ILeaferCanvas.md#shadowoffsety)

#### Defined in

[src/leafer/packages/interface/src/canvas/ILeaferCanvas.ts:57](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/canvas/ILeaferCanvas.ts#L57)

___

### filter

• **filter**: `string`

#### Inherited from

[ILeaferCanvas](ILeaferCanvas.md).[filter](ILeaferCanvas.md#filter)

#### Defined in

[src/leafer/packages/interface/src/canvas/ILeaferCanvas.ts:59](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/canvas/ILeaferCanvas.ts#L59)

___

### font

• **font**: `string`

#### Inherited from

[ILeaferCanvas](ILeaferCanvas.md).[font](ILeaferCanvas.md#font)

#### Defined in

[src/leafer/packages/interface/src/canvas/ILeaferCanvas.ts:61](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/canvas/ILeaferCanvas.ts#L61)

___

### fontKerning

• **fontKerning**: `string`

#### Inherited from

[ILeaferCanvas](ILeaferCanvas.md).[fontKerning](ILeaferCanvas.md#fontkerning)

#### Defined in

[src/leafer/packages/interface/src/canvas/ILeaferCanvas.ts:62](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/canvas/ILeaferCanvas.ts#L62)

___

### fontStretch

• **fontStretch**: `string`

#### Inherited from

[ILeaferCanvas](ILeaferCanvas.md).[fontStretch](ILeaferCanvas.md#fontstretch)

#### Defined in

[src/leafer/packages/interface/src/canvas/ILeaferCanvas.ts:63](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/canvas/ILeaferCanvas.ts#L63)

___

### fontVariantCaps

• **fontVariantCaps**: `string`

#### Inherited from

[ILeaferCanvas](ILeaferCanvas.md).[fontVariantCaps](ILeaferCanvas.md#fontvariantcaps)

#### Defined in

[src/leafer/packages/interface/src/canvas/ILeaferCanvas.ts:64](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/canvas/ILeaferCanvas.ts#L64)

___

### textAlign

• **textAlign**: `string`

#### Inherited from

[ILeaferCanvas](ILeaferCanvas.md).[textAlign](ILeaferCanvas.md#textalign)

#### Defined in

[src/leafer/packages/interface/src/canvas/ILeaferCanvas.ts:66](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/canvas/ILeaferCanvas.ts#L66)

___

### textBaseline

• **textBaseline**: `string`

#### Inherited from

[ILeaferCanvas](ILeaferCanvas.md).[textBaseline](ILeaferCanvas.md#textbaseline)

#### Defined in

[src/leafer/packages/interface/src/canvas/ILeaferCanvas.ts:67](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/canvas/ILeaferCanvas.ts#L67)

___

### textRendering

• **textRendering**: `string`

#### Inherited from

[ILeaferCanvas](ILeaferCanvas.md).[textRendering](ILeaferCanvas.md#textrendering)

#### Defined in

[src/leafer/packages/interface/src/canvas/ILeaferCanvas.ts:68](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/canvas/ILeaferCanvas.ts#L68)

___

### wordSpacing

• **wordSpacing**: `string`

#### Inherited from

[ILeaferCanvas](ILeaferCanvas.md).[wordSpacing](ILeaferCanvas.md#wordspacing)

#### Defined in

[src/leafer/packages/interface/src/canvas/ILeaferCanvas.ts:69](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/canvas/ILeaferCanvas.ts#L69)

___

### letterSpacing

• **letterSpacing**: `string`

#### Inherited from

[ILeaferCanvas](ILeaferCanvas.md).[letterSpacing](ILeaferCanvas.md#letterspacing)

#### Defined in

[src/leafer/packages/interface/src/canvas/ILeaferCanvas.ts:70](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/canvas/ILeaferCanvas.ts#L70)

___

### direction

• **direction**: `string`

#### Inherited from

[ILeaferCanvas](ILeaferCanvas.md).[direction](ILeaferCanvas.md#direction)

#### Defined in

[src/leafer/packages/interface/src/canvas/ILeaferCanvas.ts:72](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/canvas/ILeaferCanvas.ts#L72)

___

### innerId

• `Readonly` **innerId**: `number`

#### Inherited from

[ILeaferCanvas](ILeaferCanvas.md).[innerId](ILeaferCanvas.md#innerid)

#### Defined in

[src/leafer/packages/interface/src/canvas/ILeaferCanvas.ts:151](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/canvas/ILeaferCanvas.ts#L151)

___

### name

• **name**: `string`

#### Inherited from

[ILeaferCanvas](ILeaferCanvas.md).[name](ILeaferCanvas.md#name)

#### Defined in

[src/leafer/packages/interface/src/canvas/ILeaferCanvas.ts:152](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/canvas/ILeaferCanvas.ts#L152)

___

### manager

• **manager**: [`ICanvasManager`](ICanvasManager.md)

#### Inherited from

[ILeaferCanvas](ILeaferCanvas.md).[manager](ILeaferCanvas.md#manager)

#### Defined in

[src/leafer/packages/interface/src/canvas/ILeaferCanvas.ts:154](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/canvas/ILeaferCanvas.ts#L154)

___

### width

• `Readonly` **width**: `number`

#### Inherited from

[ILeaferCanvas](ILeaferCanvas.md).[width](ILeaferCanvas.md#width)

#### Defined in

[src/leafer/packages/interface/src/canvas/ILeaferCanvas.ts:156](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/canvas/ILeaferCanvas.ts#L156)

___

### height

• `Readonly` **height**: `number`

#### Inherited from

[ILeaferCanvas](ILeaferCanvas.md).[height](ILeaferCanvas.md#height)

#### Defined in

[src/leafer/packages/interface/src/canvas/ILeaferCanvas.ts:157](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/canvas/ILeaferCanvas.ts#L157)

___

### pixelRatio

• `Readonly` **pixelRatio**: `number`

#### Inherited from

[ILeaferCanvas](ILeaferCanvas.md).[pixelRatio](ILeaferCanvas.md#pixelratio)

#### Defined in

[src/leafer/packages/interface/src/canvas/ILeaferCanvas.ts:159](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/canvas/ILeaferCanvas.ts#L159)

___

### pixelWidth

• `Readonly` **pixelWidth**: `number`

#### Inherited from

[ILeaferCanvas](ILeaferCanvas.md).[pixelWidth](ILeaferCanvas.md#pixelwidth)

#### Defined in

[src/leafer/packages/interface/src/canvas/ILeaferCanvas.ts:160](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/canvas/ILeaferCanvas.ts#L160)

___

### pixelHeight

• `Readonly` **pixelHeight**: `number`

#### Inherited from

[ILeaferCanvas](ILeaferCanvas.md).[pixelHeight](ILeaferCanvas.md#pixelheight)

#### Defined in

[src/leafer/packages/interface/src/canvas/ILeaferCanvas.ts:161](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/canvas/ILeaferCanvas.ts#L161)

___

### pixelSnap

• **pixelSnap**: `boolean`

#### Inherited from

[ILeaferCanvas](ILeaferCanvas.md).[pixelSnap](ILeaferCanvas.md#pixelsnap)

#### Defined in

[src/leafer/packages/interface/src/canvas/ILeaferCanvas.ts:163](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/canvas/ILeaferCanvas.ts#L163)

___

### allowBackgroundColor

• `Optional` `Readonly` **allowBackgroundColor**: `boolean`

#### Inherited from

[ILeaferCanvas](ILeaferCanvas.md).[allowBackgroundColor](ILeaferCanvas.md#allowbackgroundcolor)

#### Defined in

[src/leafer/packages/interface/src/canvas/ILeaferCanvas.ts:165](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/canvas/ILeaferCanvas.ts#L165)

___

### backgroundColor

• `Optional` **backgroundColor**: `string`

#### Inherited from

[ILeaferCanvas](ILeaferCanvas.md).[backgroundColor](ILeaferCanvas.md#backgroundcolor)

#### Defined in

[src/leafer/packages/interface/src/canvas/ILeaferCanvas.ts:166](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/canvas/ILeaferCanvas.ts#L166)

___

### hittable

• `Optional` **hittable**: `boolean`

#### Inherited from

[ILeaferCanvas](ILeaferCanvas.md).[hittable](ILeaferCanvas.md#hittable)

#### Defined in

[src/leafer/packages/interface/src/canvas/ILeaferCanvas.ts:167](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/canvas/ILeaferCanvas.ts#L167)

___

### zIndex

• `Optional` **zIndex**: `number`

#### Inherited from

[ILeaferCanvas](ILeaferCanvas.md).[zIndex](ILeaferCanvas.md#zindex)

#### Defined in

[src/leafer/packages/interface/src/canvas/ILeaferCanvas.ts:169](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/canvas/ILeaferCanvas.ts#L169)

___

### childIndex

• `Optional` **childIndex**: `number`

#### Inherited from

[ILeaferCanvas](ILeaferCanvas.md).[childIndex](ILeaferCanvas.md#childindex)

#### Defined in

[src/leafer/packages/interface/src/canvas/ILeaferCanvas.ts:170](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/canvas/ILeaferCanvas.ts#L170)

___

### bounds

• **bounds**: [`IBounds`](IBounds.md)

#### Inherited from

[ILeaferCanvas](ILeaferCanvas.md).[bounds](ILeaferCanvas.md#bounds)

#### Defined in

[src/leafer/packages/interface/src/canvas/ILeaferCanvas.ts:172](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/canvas/ILeaferCanvas.ts#L172)

___

### clientBounds

• **clientBounds**: [`IBoundsData`](IBoundsData.md)

#### Inherited from

[ILeaferCanvas](ILeaferCanvas.md).[clientBounds](ILeaferCanvas.md#clientbounds)

#### Defined in

[src/leafer/packages/interface/src/canvas/ILeaferCanvas.ts:173](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/canvas/ILeaferCanvas.ts#L173)

___

### config

• **config**: [`ILeaferCanvasConfig`](ILeaferCanvasConfig.md)

#### Inherited from

[ILeaferCanvas](ILeaferCanvas.md).[config](ILeaferCanvas.md#config)

#### Defined in

[src/leafer/packages/interface/src/canvas/ILeaferCanvas.ts:175](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/canvas/ILeaferCanvas.ts#L175)

___

### autoLayout

• **autoLayout**: `boolean`

#### Inherited from

[ILeaferCanvas](ILeaferCanvas.md).[autoLayout](ILeaferCanvas.md#autolayout)

#### Defined in

[src/leafer/packages/interface/src/canvas/ILeaferCanvas.ts:177](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/canvas/ILeaferCanvas.ts#L177)

___

### view

• **view**: `any`

#### Inherited from

[ILeaferCanvas](ILeaferCanvas.md).[view](ILeaferCanvas.md#view)

#### Defined in

[src/leafer/packages/interface/src/canvas/ILeaferCanvas.ts:179](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/canvas/ILeaferCanvas.ts#L179)

___

### parentView

• **parentView**: `any`

#### Inherited from

[ILeaferCanvas](ILeaferCanvas.md).[parentView](ILeaferCanvas.md#parentview)

#### Defined in

[src/leafer/packages/interface/src/canvas/ILeaferCanvas.ts:180](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/canvas/ILeaferCanvas.ts#L180)

___

### unreal

• `Optional` **unreal**: `boolean`

#### Inherited from

[ILeaferCanvas](ILeaferCanvas.md).[unreal](ILeaferCanvas.md#unreal)

#### Defined in

[src/leafer/packages/interface/src/canvas/ILeaferCanvas.ts:182](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/canvas/ILeaferCanvas.ts#L182)

___

### context

• **context**: [`ICanvasContext2D`](ICanvasContext2D.md)

#### Inherited from

[ILeaferCanvas](ILeaferCanvas.md).[context](ILeaferCanvas.md#context)

#### Defined in

[src/leafer/packages/interface/src/canvas/ILeaferCanvas.ts:184](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/canvas/ILeaferCanvas.ts#L184)

___

### recycled

• `Optional` **recycled**: `boolean`

#### Inherited from

[ILeaferCanvas](ILeaferCanvas.md).[recycled](ILeaferCanvas.md#recycled)

#### Defined in

[src/leafer/packages/interface/src/canvas/ILeaferCanvas.ts:186](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/canvas/ILeaferCanvas.ts#L186)

___

### worldTransform

• **worldTransform**: [`IMatrixData`](IMatrixData.md)

#### Inherited from

[ILeaferCanvas](ILeaferCanvas.md).[worldTransform](ILeaferCanvas.md#worldtransform)

#### Defined in

[src/leafer/packages/interface/src/canvas/ILeaferCanvas.ts:188](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/canvas/ILeaferCanvas.ts#L188)

___

### hitScale

• `Optional` **hitScale**: `number`

#### Defined in

[src/leafer/packages/interface/src/canvas/ILeaferCanvas.ts:219](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/canvas/ILeaferCanvas.ts#L219)

## Methods

### save

▸ **save**(): `void`

#### Returns

`void`

#### Inherited from

[ILeaferCanvas](ILeaferCanvas.md).[save](ILeaferCanvas.md#save)

#### Defined in

[src/leafer/packages/interface/src/canvas/ILeaferCanvas.ts:76](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/canvas/ILeaferCanvas.ts#L76)

___

### restore

▸ **restore**(): `void`

#### Returns

`void`

#### Inherited from

[ILeaferCanvas](ILeaferCanvas.md).[restore](ILeaferCanvas.md#restore)

#### Defined in

[src/leafer/packages/interface/src/canvas/ILeaferCanvas.ts:77](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/canvas/ILeaferCanvas.ts#L77)

___

### fill

▸ **fill**(`path?`, `rule?`): `void`

#### Parameters

| Name    | Type                                                                      |
| :------ | :------------------------------------------------------------------------ |
| `path?` | [`IWindingRule`](../modules.md#iwindingrule) \\| [`IPath2D`](IPath2D.md) |
| `rule?` | [`IWindingRule`](../modules.md#iwindingrule)                              |

#### Returns

`void`

#### Inherited from

[ILeaferCanvas](ILeaferCanvas.md).[fill](ILeaferCanvas.md#fill)

#### Defined in

[src/leafer/packages/interface/src/canvas/ILeaferCanvas.ts:79](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/canvas/ILeaferCanvas.ts#L79)

___

### stroke

▸ **stroke**(`path?`): `void`

#### Parameters

| Name    | Type                    |
| :------ | :---------------------- |
| `path?` | [`IPath2D`](IPath2D.md) |

#### Returns

`void`

#### Inherited from

[ILeaferCanvas](ILeaferCanvas.md).[stroke](ILeaferCanvas.md#stroke)

#### Defined in

[src/leafer/packages/interface/src/canvas/ILeaferCanvas.ts:80](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/canvas/ILeaferCanvas.ts#L80)

___

### clip

▸ **clip**(`path?`, `rule?`): `void`

#### Parameters

| Name    | Type                                                                      |
| :------ | :------------------------------------------------------------------------ |
| `path?` | [`IWindingRule`](../modules.md#iwindingrule) \\| [`IPath2D`](IPath2D.md) |
| `rule?` | [`IWindingRule`](../modules.md#iwindingrule)                              |

#### Returns

`void`

#### Inherited from

[ILeaferCanvas](ILeaferCanvas.md).[clip](ILeaferCanvas.md#clip)

#### Defined in

[src/leafer/packages/interface/src/canvas/ILeaferCanvas.ts:81](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/canvas/ILeaferCanvas.ts#L81)

___

### fillRect

▸ **fillRect**(`x`, `y`, `width`, `height`): `void`

#### Parameters

| Name     | Type     |
| :------- | :------- |
| `x`      | `number` |
| `y`      | `number` |
| `width`  | `number` |
| `height` | `number` |

#### Returns

`void`

#### Inherited from

[ILeaferCanvas](ILeaferCanvas.md).[fillRect](ILeaferCanvas.md#fillrect)

#### Defined in

[src/leafer/packages/interface/src/canvas/ILeaferCanvas.ts:83](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/canvas/ILeaferCanvas.ts#L83)

___

### strokeRect

▸ **strokeRect**(`x`, `y`, `width`, `height`): `void`

#### Parameters

| Name     | Type     |
| :------- | :------- |
| `x`      | `number` |
| `y`      | `number` |
| `width`  | `number` |
| `height` | `number` |

#### Returns

`void`

#### Inherited from

[ILeaferCanvas](ILeaferCanvas.md).[strokeRect](ILeaferCanvas.md#strokerect)

#### Defined in

[src/leafer/packages/interface/src/canvas/ILeaferCanvas.ts:84](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/canvas/ILeaferCanvas.ts#L84)

___

### clearRect

▸ **clearRect**(`x`, `y`, `width`, `height`): `void`

#### Parameters

| Name     | Type     |
| :------- | :------- |
| `x`      | `number` |
| `y`      | `number` |
| `width`  | `number` |
| `height` | `number` |

#### Returns

`void`

#### Inherited from

[ILeaferCanvas](ILeaferCanvas.md).[clearRect](ILeaferCanvas.md#clearrect)

#### Defined in

[src/leafer/packages/interface/src/canvas/ILeaferCanvas.ts:85](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/canvas/ILeaferCanvas.ts#L85)

___

### transform

▸ **transform**(`a`, `b?`, `c?`, `d?`, `e?`, `f?`): `void`

#### Parameters

| Name | Type                                          |
| :--- | :-------------------------------------------- |
| `a`  | `number` \\| [`IMatrixData`](IMatrixData.md) |
| `b?` | `number`                                      |
| `c?` | `number`                                      |
| `d?` | `number`                                      |
| `e?` | `number`                                      |
| `f?` | `number`                                      |

#### Returns

`void`

#### Inherited from

[ILeaferCanvas](ILeaferCanvas.md).[transform](ILeaferCanvas.md#transform)

#### Defined in

[src/leafer/packages/interface/src/canvas/ILeaferCanvas.ts:87](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/canvas/ILeaferCanvas.ts#L87)

___

### translate

▸ **translate**(`x`, `y`): `void`

#### Parameters

| Name | Type     |
| :--- | :------- |
| `x`  | `number` |
| `y`  | `number` |

#### Returns

`void`

#### Inherited from

[ILeaferCanvas](ILeaferCanvas.md).[translate](ILeaferCanvas.md#translate)

#### Defined in

[src/leafer/packages/interface/src/canvas/ILeaferCanvas.ts:88](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/canvas/ILeaferCanvas.ts#L88)

___

### scale

▸ **scale**(`x`, `y`): `void`

#### Parameters

| Name | Type     |
| :--- | :------- |
| `x`  | `number` |
| `y`  | `number` |

#### Returns

`void`

#### Inherited from

[ILeaferCanvas](ILeaferCanvas.md).[scale](ILeaferCanvas.md#scale)

#### Defined in

[src/leafer/packages/interface/src/canvas/ILeaferCanvas.ts:89](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/canvas/ILeaferCanvas.ts#L89)

___

### rotate

▸ **rotate**(`angle`): `void`

#### Parameters

| Name    | Type     |
| :------ | :------- |
| `angle` | `number` |

#### Returns

`void`

#### Inherited from

[ILeaferCanvas](ILeaferCanvas.md).[rotate](ILeaferCanvas.md#rotate)

#### Defined in

[src/leafer/packages/interface/src/canvas/ILeaferCanvas.ts:90](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/canvas/ILeaferCanvas.ts#L90)

___

### drawImage

▸ **drawImage**(`image`, `dx`, `dy`): `void`

#### Parameters

| Name    | Type                |
| :------ | :------------------ |
| `image` | `CanvasImageSource` |
| `dx`    | `number`            |
| `dy`    | `number`            |

#### Returns

`void`

#### Inherited from

[ILeaferCanvas](ILeaferCanvas.md).[drawImage](ILeaferCanvas.md#drawimage)

#### Defined in

[src/leafer/packages/interface/src/canvas/ILeaferCanvas.ts:92](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/canvas/ILeaferCanvas.ts#L92)

▸ **drawImage**(`image`, `dx`, `dy`, `dw`, `dh`): `void`

#### Parameters

| Name    | Type                |
| :------ | :------------------ |
| `image` | `CanvasImageSource` |
| `dx`    | `number`            |
| `dy`    | `number`            |
| `dw`    | `number`            |
| `dh`    | `number`            |

#### Returns

`void`

#### Inherited from

[ILeaferCanvas](ILeaferCanvas.md).[drawImage](ILeaferCanvas.md#drawimage)

#### Defined in

[src/leafer/packages/interface/src/canvas/ILeaferCanvas.ts:93](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/canvas/ILeaferCanvas.ts#L93)

▸ **drawImage**(`image`, `sx`, `sy`, `sw`, `sh`, `dx`, `dy`, `dw`, `dh`): `void`

#### Parameters

| Name    | Type                |
| :------ | :------------------ |
| `image` | `CanvasImageSource` |
| `sx`    | `number`            |
| `sy`    | `number`            |
| `sw`    | `number`            |
| `sh`    | `number`            |
| `dx`    | `number`            |
| `dy`    | `number`            |
| `dw`    | `number`            |
| `dh`    | `number`            |

#### Returns

`void`

#### Inherited from

[ILeaferCanvas](ILeaferCanvas.md).[drawImage](ILeaferCanvas.md#drawimage)

#### Defined in

[src/leafer/packages/interface/src/canvas/ILeaferCanvas.ts:94](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/canvas/ILeaferCanvas.ts#L94)

___

### setTransform

▸ **setTransform**(`a`, `b?`, `c?`, `d?`, `e?`, `f?`): `void`

#### Parameters

| Name | Type                                          |
| :--- | :-------------------------------------------- |
| `a`  | `number` \\| [`IMatrixData`](IMatrixData.md) |
| `b?` | `number`                                      |
| `c?` | `number`                                      |
| `d?` | `number`                                      |
| `e?` | `number`                                      |
| `f?` | `number`                                      |

#### Returns

`void`

#### Inherited from

[ILeaferCanvas](ILeaferCanvas.md).[setTransform](ILeaferCanvas.md#settransform)

#### Defined in

[src/leafer/packages/interface/src/canvas/ILeaferCanvas.ts:96](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/canvas/ILeaferCanvas.ts#L96)

___

### getTransform

▸ **getTransform**(): [`IMatrixData`](IMatrixData.md)

#### Returns

[`IMatrixData`](IMatrixData.md)

#### Inherited from

[ILeaferCanvas](ILeaferCanvas.md).[getTransform](ILeaferCanvas.md#gettransform)

#### Defined in

[src/leafer/packages/interface/src/canvas/ILeaferCanvas.ts:97](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/canvas/ILeaferCanvas.ts#L97)

___

### resetTransform

▸ **resetTransform**(): `void`

#### Returns

`void`

#### Inherited from

[ILeaferCanvas](ILeaferCanvas.md).[resetTransform](ILeaferCanvas.md#resettransform)

#### Defined in

[src/leafer/packages/interface/src/canvas/ILeaferCanvas.ts:98](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/canvas/ILeaferCanvas.ts#L98)

___

### createConicGradient

▸ **createConicGradient**(`startAngle`, `x`, `y`): `CanvasGradient`

#### Parameters

| Name         | Type     |
| :----------- | :------- |
| `startAngle` | `number` |
| `x`          | `number` |
| `y`          | `number` |

#### Returns

`CanvasGradient`

#### Inherited from

[ILeaferCanvas](ILeaferCanvas.md).[createConicGradient](ILeaferCanvas.md#createconicgradient)

#### Defined in

[src/leafer/packages/interface/src/canvas/ILeaferCanvas.ts:100](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/canvas/ILeaferCanvas.ts#L100)

___

### createLinearGradient

▸ **createLinearGradient**(`x0`, `y0`, `x1`, `y1`): `CanvasGradient`

#### Parameters

| Name | Type     |
| :--- | :------- |
| `x0` | `number` |
| `y0` | `number` |
| `x1` | `number` |
| `y1` | `number` |

#### Returns

`CanvasGradient`

#### Inherited from

[ILeaferCanvas](ILeaferCanvas.md).[createLinearGradient](ILeaferCanvas.md#createlineargradient)

#### Defined in

[src/leafer/packages/interface/src/canvas/ILeaferCanvas.ts:101](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/canvas/ILeaferCanvas.ts#L101)

___

### createPattern

▸ **createPattern**(`image`, `repetition`): `CanvasPattern`

#### Parameters

| Name         | Type                |
| :----------- | :------------------ |
| `image`      | `CanvasImageSource` |
| `repetition` | `string`            |

#### Returns

`CanvasPattern`

#### Inherited from

[ILeaferCanvas](ILeaferCanvas.md).[createPattern](ILeaferCanvas.md#createpattern)

#### Defined in

[src/leafer/packages/interface/src/canvas/ILeaferCanvas.ts:102](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/canvas/ILeaferCanvas.ts#L102)

___

### createRadialGradient

▸ **createRadialGradient**(`x0`, `y0`, `r0`, `x1`, `y1`, `r1`): `CanvasGradient`

#### Parameters

| Name | Type     |
| :--- | :------- |
| `x0` | `number` |
| `y0` | `number` |
| `r0` | `number` |
| `x1` | `number` |
| `y1` | `number` |
| `r1` | `number` |

#### Returns

`CanvasGradient`

#### Inherited from

[ILeaferCanvas](ILeaferCanvas.md).[createRadialGradient](ILeaferCanvas.md#createradialgradient)

#### Defined in

[src/leafer/packages/interface/src/canvas/ILeaferCanvas.ts:103](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/canvas/ILeaferCanvas.ts#L103)

___

### fillText

▸ **fillText**(`text`, `x`, `y`, `maxWidth?`): `void`

#### Parameters

| Name        | Type     |
| :---------- | :------- |
| `text`      | `string` |
| `x`         | `number` |
| `y`         | `number` |
| `maxWidth?` | `number` |

#### Returns

`void`

#### Inherited from

[ILeaferCanvas](ILeaferCanvas.md).[fillText](ILeaferCanvas.md#filltext)

#### Defined in

[src/leafer/packages/interface/src/canvas/ILeaferCanvas.ts:107](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/canvas/ILeaferCanvas.ts#L107)

___

### measureText

▸ **measureText**(`text`): [`ITextMetrics`](ITextMetrics.md)

#### Parameters

| Name   | Type     |
| :----- | :------- |
| `text` | `string` |

#### Returns

[`ITextMetrics`](ITextMetrics.md)

#### Inherited from

[ILeaferCanvas](ILeaferCanvas.md).[measureText](ILeaferCanvas.md#measuretext)

#### Defined in

[src/leafer/packages/interface/src/canvas/ILeaferCanvas.ts:108](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/canvas/ILeaferCanvas.ts#L108)

___

### strokeText

▸ **strokeText**(`text`, `x`, `y`, `maxWidth?`): `void`

#### Parameters

| Name        | Type     |
| :---------- | :------- |
| `text`      | `string` |
| `x`         | `number` |
| `y`         | `number` |
| `maxWidth?` | `number` |

#### Returns

`void`

#### Inherited from

[ILeaferCanvas](ILeaferCanvas.md).[strokeText](ILeaferCanvas.md#stroketext)

#### Defined in

[src/leafer/packages/interface/src/canvas/ILeaferCanvas.ts:109](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/canvas/ILeaferCanvas.ts#L109)

___

### saveBlendMode

▸ **saveBlendMode**(`blendMode?`): `void`

#### Parameters

| Name         | Type     |
| :----------- | :------- |
| `blendMode?` | `string` |

#### Returns

`void`

#### Inherited from

[ILeaferCanvas](ILeaferCanvas.md).[saveBlendMode](ILeaferCanvas.md#saveblendmode)

#### Defined in

[src/leafer/packages/interface/src/canvas/ILeaferCanvas.ts:113](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/canvas/ILeaferCanvas.ts#L113)

___

### restoreBlendMode

▸ **restoreBlendMode**(): `void`

#### Returns

`void`

#### Inherited from

[ILeaferCanvas](ILeaferCanvas.md).[restoreBlendMode](ILeaferCanvas.md#restoreblendmode)

#### Defined in

[src/leafer/packages/interface/src/canvas/ILeaferCanvas.ts:114](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/canvas/ILeaferCanvas.ts#L114)

___

### hitFill

▸ **hitFill**(`point`, `fillRule?`): `boolean`

#### Parameters

| Name        | Type                          |
| :---------- | :---------------------------- |
| `point`     | [`IPointData`](IPointData.md) |
| `fillRule?` | `string`                      |

#### Returns

`boolean`

#### Inherited from

[ILeaferCanvas](ILeaferCanvas.md).[hitFill](ILeaferCanvas.md#hitfill)

#### Defined in

[src/leafer/packages/interface/src/canvas/ILeaferCanvas.ts:116](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/canvas/ILeaferCanvas.ts#L116)

___

### hitStroke

▸ **hitStroke**(`point`, `strokeWidth?`): `boolean`

#### Parameters

| Name           | Type                          |
| :------------- | :---------------------------- |
| `point`        | [`IPointData`](IPointData.md) |
| `strokeWidth?` | `number`                      |

#### Returns

`boolean`

#### Inherited from

[ILeaferCanvas](ILeaferCanvas.md).[hitStroke](ILeaferCanvas.md#hitstroke)

#### Defined in

[src/leafer/packages/interface/src/canvas/ILeaferCanvas.ts:117](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/canvas/ILeaferCanvas.ts#L117)

___

### hitPixel

▸ **hitPixel**(`radiusPoint`, `offset?`, `scale?`): `boolean`

#### Parameters

| Name          | Type                                      |
| :------------ | :---------------------------------------- |
| `radiusPoint` | [`IRadiusPointData`](IRadiusPointData.md) |
| `offset?`     | [`IPointData`](IPointData.md)             |
| `scale?`      | `number`                                  |

#### Returns

`boolean`

#### Inherited from

[ILeaferCanvas](ILeaferCanvas.md).[hitPixel](ILeaferCanvas.md#hitpixel)

#### Defined in

[src/leafer/packages/interface/src/canvas/ILeaferCanvas.ts:118](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/canvas/ILeaferCanvas.ts#L118)

___

### setStroke

▸ **setStroke**(`strokeStyle`, `strokeWidth`, `options?`, `childOptions?`): `void`

#### Parameters

| Name            | Type                                              |
| :-------------- | :------------------------------------------------ |
| `strokeStyle`   | `string` \\| `object`                            |
| `strokeWidth`   | `number`                                          |
| `options?`      | [`ICanvasStrokeOptions`](ICanvasStrokeOptions.md) |
| `childOptions?` | [`ICanvasStrokeOptions`](ICanvasStrokeOptions.md) |

#### Returns

`void`

#### Inherited from

[ILeaferCanvas](ILeaferCanvas.md).[setStroke](ILeaferCanvas.md#setstroke)

#### Defined in

[src/leafer/packages/interface/src/canvas/ILeaferCanvas.ts:121](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/canvas/ILeaferCanvas.ts#L121)

___

### setStrokeOptions

▸ **setStrokeOptions**(`options`, `childOptions?`): `void`

#### Parameters

| Name            | Type                                              |
| :-------------- | :------------------------------------------------ |
| `options`       | [`ICanvasStrokeOptions`](ICanvasStrokeOptions.md) |
| `childOptions?` | [`ICanvasStrokeOptions`](ICanvasStrokeOptions.md) |

#### Returns

`void`

#### Inherited from

[ILeaferCanvas](ILeaferCanvas.md).[setStrokeOptions](ILeaferCanvas.md#setstrokeoptions)

#### Defined in

[src/leafer/packages/interface/src/canvas/ILeaferCanvas.ts:122](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/canvas/ILeaferCanvas.ts#L122)

___

### setWorld

▸ **setWorld**(`matrix`, `parentMatrix?`): `void`

#### Parameters

| Name            | Type                            |
| :-------------- | :------------------------------ |
| `matrix`        | [`IMatrixData`](IMatrixData.md) |
| `parentMatrix?` | [`IMatrixData`](IMatrixData.md) |

#### Returns

`void`

#### Inherited from

[ILeaferCanvas](ILeaferCanvas.md).[setWorld](ILeaferCanvas.md#setworld)

#### Defined in

[src/leafer/packages/interface/src/canvas/ILeaferCanvas.ts:124](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/canvas/ILeaferCanvas.ts#L124)

___

### useWorldTransform

▸ **useWorldTransform**(`worldTransform?`): `void`

#### Parameters

| Name              | Type                            |
| :---------------- | :------------------------------ |
| `worldTransform?` | [`IMatrixData`](IMatrixData.md) |

#### Returns

`void`

#### Inherited from

[ILeaferCanvas](ILeaferCanvas.md).[useWorldTransform](ILeaferCanvas.md#useworldtransform)

#### Defined in

[src/leafer/packages/interface/src/canvas/ILeaferCanvas.ts:125](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/canvas/ILeaferCanvas.ts#L125)

___

### setWorldShadow

▸ **setWorldShadow**(`x`, `y`, `blur`, `color?`): `void`

#### Parameters

| Name     | Type     |
| :------- | :------- |
| `x`      | `number` |
| `y`      | `number` |
| `blur`   | `number` |
| `color?` | `string` |

#### Returns

`void`

#### Inherited from

[ILeaferCanvas](ILeaferCanvas.md).[setWorldShadow](ILeaferCanvas.md#setworldshadow)

#### Defined in

[src/leafer/packages/interface/src/canvas/ILeaferCanvas.ts:127](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/canvas/ILeaferCanvas.ts#L127)

___

### setWorldBlur

▸ **setWorldBlur**(`blur`): `void`

#### Parameters

| Name   | Type     |
| :----- | :------- |
| `blur` | `number` |

#### Returns

`void`

#### Inherited from

[ILeaferCanvas](ILeaferCanvas.md).[setWorldBlur](ILeaferCanvas.md#setworldblur)

#### Defined in

[src/leafer/packages/interface/src/canvas/ILeaferCanvas.ts:128](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/canvas/ILeaferCanvas.ts#L128)

___

### copyWorld

▸ **copyWorld**(`canvas`, `fromBounds?`, `toBounds?`, `blendMode?`, `ceilPixel?`): `void`

#### Parameters

| Name          | Type                                |
| :------------ | :---------------------------------- |
| `canvas`      | [`ILeaferCanvas`](ILeaferCanvas.md) |
| `fromBounds?` | [`IBoundsData`](IBoundsData.md)     |
| `toBounds?`   | [`IBoundsData`](IBoundsData.md)     |
| `blendMode?`  | `string`                            |
| `ceilPixel?`  | `boolean`                           |

#### Returns

`void`

#### Inherited from

[ILeaferCanvas](ILeaferCanvas.md).[copyWorld](ILeaferCanvas.md#copyworld)

#### Defined in

[src/leafer/packages/interface/src/canvas/ILeaferCanvas.ts:130](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/canvas/ILeaferCanvas.ts#L130)

___

### copyWorldByReset

▸ **copyWorldByReset**(`canvas`, `from?`, `to?`, `blendMode?`, `onlyResetTransform?`, `ceilPixel?`): `void`

#### Parameters

| Name                  | Type                                |
| :-------------------- | :---------------------------------- |
| `canvas`              | [`ILeaferCanvas`](ILeaferCanvas.md) |
| `from?`               | [`IBoundsData`](IBoundsData.md)     |
| `to?`                 | [`IBoundsData`](IBoundsData.md)     |
| `blendMode?`          | `string`                            |
| `onlyResetTransform?` | `boolean`                           |
| `ceilPixel?`          | `boolean`                           |

#### Returns

`void`

#### Inherited from

[ILeaferCanvas](ILeaferCanvas.md).[copyWorldByReset](ILeaferCanvas.md#copyworldbyreset)

#### Defined in

[src/leafer/packages/interface/src/canvas/ILeaferCanvas.ts:131](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/canvas/ILeaferCanvas.ts#L131)

___

### copyWorldToInner

▸ **copyWorldToInner**(`canvas`, `fromWorld`, `toInnerBounds`, `blendMode?`, `ceilPixel?`): `void`

#### Parameters

| Name            | Type                                                |
| :-------------- | :-------------------------------------------------- |
| `canvas`        | [`ILeaferCanvas`](ILeaferCanvas.md)                 |
| `fromWorld`     | [`IMatrixWithBoundsData`](IMatrixWithBoundsData.md) |
| `toInnerBounds` | [`IBoundsData`](IBoundsData.md)                     |
| `blendMode?`    | `string`                                            |
| `ceilPixel?`    | `boolean`                                           |

#### Returns

`void`

#### Inherited from

[ILeaferCanvas](ILeaferCanvas.md).[copyWorldToInner](ILeaferCanvas.md#copyworldtoinner)

#### Defined in

[src/leafer/packages/interface/src/canvas/ILeaferCanvas.ts:132](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/canvas/ILeaferCanvas.ts#L132)

___

### useGrayscaleAlpha

▸ **useGrayscaleAlpha**(`bounds`): `void`

#### Parameters

| Name     | Type                            |
| :------- | :------------------------------ |
| `bounds` | [`IBoundsData`](IBoundsData.md) |

#### Returns

`void`

#### Inherited from

[ILeaferCanvas](ILeaferCanvas.md).[useGrayscaleAlpha](ILeaferCanvas.md#usegrayscalealpha)

#### Defined in

[src/leafer/packages/interface/src/canvas/ILeaferCanvas.ts:134](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/canvas/ILeaferCanvas.ts#L134)

___

### useMask

▸ **useMask**(`maskCanvas`, `fromBounds?`, `toBounds?`): `void`

#### Parameters

| Name          | Type                                |
| :------------ | :---------------------------------- |
| `maskCanvas`  | [`ILeaferCanvas`](ILeaferCanvas.md) |
| `fromBounds?` | [`IBoundsData`](IBoundsData.md)     |
| `toBounds?`   | [`IBoundsData`](IBoundsData.md)     |

#### Returns

`void`

#### Inherited from

[ILeaferCanvas](ILeaferCanvas.md).[useMask](ILeaferCanvas.md#usemask)

#### Defined in

[src/leafer/packages/interface/src/canvas/ILeaferCanvas.ts:135](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/canvas/ILeaferCanvas.ts#L135)

___

### useEraser

▸ **useEraser**(`eraserCanvas`, `fromBounds?`, `toBounds?`): `void`

#### Parameters

| Name           | Type                                |
| :------------- | :---------------------------------- |
| `eraserCanvas` | [`ILeaferCanvas`](ILeaferCanvas.md) |
| `fromBounds?`  | [`IBoundsData`](IBoundsData.md)     |
| `toBounds?`    | [`IBoundsData`](IBoundsData.md)     |

#### Returns

`void`

#### Inherited from

[ILeaferCanvas](ILeaferCanvas.md).[useEraser](ILeaferCanvas.md#useeraser)

#### Defined in

[src/leafer/packages/interface/src/canvas/ILeaferCanvas.ts:136](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/canvas/ILeaferCanvas.ts#L136)

___

### fillWorld

▸ **fillWorld**(`bounds`, `color`, `blendMode?`, `ceilPixel?`): `void`

#### Parameters

| Name         | Type                            |
| :----------- | :------------------------------ |
| `bounds`     | [`IBoundsData`](IBoundsData.md) |
| `color`      | `string` \\| `object`          |
| `blendMode?` | `string`                        |
| `ceilPixel?` | `boolean`                       |

#### Returns

`void`

#### Inherited from

[ILeaferCanvas](ILeaferCanvas.md).[fillWorld](ILeaferCanvas.md#fillworld)

#### Defined in

[src/leafer/packages/interface/src/canvas/ILeaferCanvas.ts:138](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/canvas/ILeaferCanvas.ts#L138)

___

### strokeWorld

▸ **strokeWorld**(`bounds`, `color`, `blendMode?`, `ceilPixel?`): `void`

#### Parameters

| Name         | Type                            |
| :----------- | :------------------------------ |
| `bounds`     | [`IBoundsData`](IBoundsData.md) |
| `color`      | `string` \\| `object`          |
| `blendMode?` | `string`                        |
| `ceilPixel?` | `boolean`                       |

#### Returns

`void`

#### Inherited from

[ILeaferCanvas](ILeaferCanvas.md).[strokeWorld](ILeaferCanvas.md#strokeworld)

#### Defined in

[src/leafer/packages/interface/src/canvas/ILeaferCanvas.ts:139](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/canvas/ILeaferCanvas.ts#L139)

___

### clipWorld

▸ **clipWorld**(`bounds`, `ceilPixel?`): `void`

#### Parameters

| Name         | Type                            |
| :----------- | :------------------------------ |
| `bounds`     | [`IBoundsData`](IBoundsData.md) |
| `ceilPixel?` | `boolean`                       |

#### Returns

`void`

#### Inherited from

[ILeaferCanvas](ILeaferCanvas.md).[clipWorld](ILeaferCanvas.md#clipworld)

#### Defined in

[src/leafer/packages/interface/src/canvas/ILeaferCanvas.ts:140](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/canvas/ILeaferCanvas.ts#L140)

___

### clipUI

▸ **clipUI**(`ruleData`): `void`

#### Parameters

| Name       | Type                                      |
| :--------- | :---------------------------------------- |
| `ruleData` | [`IWindingRuleData`](IWindingRuleData.md) |

#### Returns

`void`

#### Inherited from

[ILeaferCanvas](ILeaferCanvas.md).[clipUI](ILeaferCanvas.md#clipui)

#### Defined in

[src/leafer/packages/interface/src/canvas/ILeaferCanvas.ts:141](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/canvas/ILeaferCanvas.ts#L141)

___

### clearWorld

▸ **clearWorld**(`bounds`, `ceilPixel?`): `void`

#### Parameters

| Name         | Type                            |
| :----------- | :------------------------------ |
| `bounds`     | [`IBoundsData`](IBoundsData.md) |
| `ceilPixel?` | `boolean`                       |

#### Returns

`void`

#### Inherited from

[ILeaferCanvas](ILeaferCanvas.md).[clearWorld](ILeaferCanvas.md#clearworld)

#### Defined in

[src/leafer/packages/interface/src/canvas/ILeaferCanvas.ts:143](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/canvas/ILeaferCanvas.ts#L143)

___

### clear

▸ **clear**(): `void`

#### Returns

`void`

#### Inherited from

[ILeaferCanvas](ILeaferCanvas.md).[clear](ILeaferCanvas.md#clear)

#### Defined in

[src/leafer/packages/interface/src/canvas/ILeaferCanvas.ts:144](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/canvas/ILeaferCanvas.ts#L144)

___

### init

▸ **init**(): `void`

#### Returns

`void`

#### Inherited from

[ILeaferCanvas](ILeaferCanvas.md).[init](ILeaferCanvas.md#init)

#### Defined in

[src/leafer/packages/interface/src/canvas/ILeaferCanvas.ts:190](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/canvas/ILeaferCanvas.ts#L190)

___

### export

▸ **export**(`filename`, `options?`): `string` \| `Promise`\<`any`\>

#### Parameters

| Name       | Type                                                               |
| :--------- | :----------------------------------------------------------------- |
| `filename` | `string`                                                           |
| `options?` | `number` \\| `boolean` \\| [`IExportOptions`](IExportOptions.md) |

#### Returns

`string` \| `Promise`\<`any`\>

#### Inherited from

[ILeaferCanvas](ILeaferCanvas.md).[export](ILeaferCanvas.md#export)

#### Defined in

[src/leafer/packages/interface/src/canvas/ILeaferCanvas.ts:192](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/canvas/ILeaferCanvas.ts#L192)

___

### toBlob

▸ **toBlob**(`type?`, `quality?`): `Promise`\<`any`\>

#### Parameters

| Name       | Type     |
| :--------- | :------- |
| `type?`    | `string` |
| `quality?` | `number` |

#### Returns

`Promise`\<`any`\>

#### Inherited from

[ILeaferCanvas](ILeaferCanvas.md).[toBlob](ILeaferCanvas.md#toblob)

#### Defined in

[src/leafer/packages/interface/src/canvas/ILeaferCanvas.ts:193](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/canvas/ILeaferCanvas.ts#L193)

___

### toDataURL

▸ **toDataURL**(`type?`, `quality?`): `string` \| `Promise`\<`string`\>

#### Parameters

| Name       | Type     |
| :--------- | :------- |
| `type?`    | `string` |
| `quality?` | `number` |

#### Returns

`string` \| `Promise`\<`string`\>

#### Inherited from

[ILeaferCanvas](ILeaferCanvas.md).[toDataURL](ILeaferCanvas.md#todataurl)

#### Defined in

[src/leafer/packages/interface/src/canvas/ILeaferCanvas.ts:194](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/canvas/ILeaferCanvas.ts#L194)

___

### saveAs

▸ **saveAs**(`filename`, `quality?`): `Promise`\<`boolean`\>

#### Parameters

| Name       | Type     |
| :--------- | :------- |
| `filename` | `string` |
| `quality?` | `number` |

#### Returns

`Promise`\<`boolean`\>

#### Inherited from

[ILeaferCanvas](ILeaferCanvas.md).[saveAs](ILeaferCanvas.md#saveas)

#### Defined in

[src/leafer/packages/interface/src/canvas/ILeaferCanvas.ts:195](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/canvas/ILeaferCanvas.ts#L195)

___

### startAutoLayout

▸ **startAutoLayout**(`autoBounds`, `listener`): `void`

#### Parameters

| Name         | Type                                              |
| :----------- | :------------------------------------------------ |
| `autoBounds` | [`IAutoBounds`](IAutoBounds.md)                   |
| `listener`   | [`IResizeEventListener`](IResizeEventListener.md) |

#### Returns

`void`

#### Inherited from

[ILeaferCanvas](ILeaferCanvas.md).[startAutoLayout](ILeaferCanvas.md#startautolayout)

#### Defined in

[src/leafer/packages/interface/src/canvas/ILeaferCanvas.ts:197](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/canvas/ILeaferCanvas.ts#L197)

___

### stopAutoLayout

▸ **stopAutoLayout**(): `void`

#### Returns

`void`

#### Inherited from

[ILeaferCanvas](ILeaferCanvas.md).[stopAutoLayout](ILeaferCanvas.md#stopautolayout)

#### Defined in

[src/leafer/packages/interface/src/canvas/ILeaferCanvas.ts:198](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/canvas/ILeaferCanvas.ts#L198)

___

### resize

▸ **resize**(`size`, `safeResize?`): `void`

#### Parameters

| Name          | Type                                    |
| :------------ | :-------------------------------------- |
| `size`        | [`IScreenSizeData`](IScreenSizeData.md) |
| `safeResize?` | `boolean`                               |

#### Returns

`void`

#### Inherited from

[ILeaferCanvas](ILeaferCanvas.md).[resize](ILeaferCanvas.md#resize)

#### Defined in

[src/leafer/packages/interface/src/canvas/ILeaferCanvas.ts:200](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/canvas/ILeaferCanvas.ts#L200)

___

### updateViewSize

▸ **updateViewSize**(): `void`

#### Returns

`void`

#### Inherited from

[ILeaferCanvas](ILeaferCanvas.md).[updateViewSize](ILeaferCanvas.md#updateviewsize)

#### Defined in

[src/leafer/packages/interface/src/canvas/ILeaferCanvas.ts:201](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/canvas/ILeaferCanvas.ts#L201)

___

### updateClientBounds

▸ **updateClientBounds**(): `void`

#### Returns

`void`

#### Inherited from

[ILeaferCanvas](ILeaferCanvas.md).[updateClientBounds](ILeaferCanvas.md#updateclientbounds)

#### Defined in

[src/leafer/packages/interface/src/canvas/ILeaferCanvas.ts:202](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/canvas/ILeaferCanvas.ts#L202)

___

### getClientBounds

▸ **getClientBounds**(`update?`): [`IBoundsData`](IBoundsData.md)

#### Parameters

| Name      | Type      |
| :-------- | :-------- |
| `update?` | `boolean` |

#### Returns

[`IBoundsData`](IBoundsData.md)

#### Inherited from

[ILeaferCanvas](ILeaferCanvas.md).[getClientBounds](ILeaferCanvas.md#getclientbounds)

#### Defined in

[src/leafer/packages/interface/src/canvas/ILeaferCanvas.ts:203](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/canvas/ILeaferCanvas.ts#L203)

___

### isSameSize

▸ **isSameSize**(`canvas`): `boolean`

#### Parameters

| Name     | Type                                    |
| :------- | :-------------------------------------- |
| `canvas` | [`IScreenSizeData`](IScreenSizeData.md) |

#### Returns

`boolean`

#### Inherited from

[ILeaferCanvas](ILeaferCanvas.md).[isSameSize](ILeaferCanvas.md#issamesize)

#### Defined in

[src/leafer/packages/interface/src/canvas/ILeaferCanvas.ts:206](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/canvas/ILeaferCanvas.ts#L206)

___

### getSameCanvas

▸ **getSameCanvas**(`useSameWorldTransform?`, `useSameSmooth?`): [`ILeaferCanvas`](ILeaferCanvas.md)

#### Parameters

| Name                     | Type      |
| :----------------------- | :-------- |
| `useSameWorldTransform?` | `boolean` |
| `useSameSmooth?`         | `boolean` |

#### Returns

[`ILeaferCanvas`](ILeaferCanvas.md)

#### Inherited from

[ILeaferCanvas](ILeaferCanvas.md).[getSameCanvas](ILeaferCanvas.md#getsamecanvas)

#### Defined in

[src/leafer/packages/interface/src/canvas/ILeaferCanvas.ts:207](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/canvas/ILeaferCanvas.ts#L207)

___

### recycle

▸ **recycle**(`clearBounds?`): `void`

#### Parameters

| Name           | Type                            |
| :------------- | :------------------------------ |
| `clearBounds?` | [`IBoundsData`](IBoundsData.md) |

#### Returns

`void`

#### Inherited from

[ILeaferCanvas](ILeaferCanvas.md).[recycle](ILeaferCanvas.md#recycle)

#### Defined in

[src/leafer/packages/interface/src/canvas/ILeaferCanvas.ts:208](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/canvas/ILeaferCanvas.ts#L208)

___

### updateRender

▸ **updateRender**(`bounds`): `void`

#### Parameters

| Name     | Type                            |
| :------- | :------------------------------ |
| `bounds` | [`IBoundsData`](IBoundsData.md) |

#### Returns

`void`

#### Inherited from

[ILeaferCanvas](ILeaferCanvas.md).[updateRender](ILeaferCanvas.md#updaterender)

#### Defined in

[src/leafer/packages/interface/src/canvas/ILeaferCanvas.ts:210](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/canvas/ILeaferCanvas.ts#L210)

___

### unrealCanvas

▸ **unrealCanvas**(): `void`

#### Returns

`void`

#### Inherited from

[ILeaferCanvas](ILeaferCanvas.md).[unrealCanvas](ILeaferCanvas.md#unrealcanvas)

#### Defined in

[src/leafer/packages/interface/src/canvas/ILeaferCanvas.ts:211](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/canvas/ILeaferCanvas.ts#L211)

___

### destroy

▸ **destroy**(): `void`

#### Returns

`void`

#### Inherited from

[ILeaferCanvas](ILeaferCanvas.md).[destroy](ILeaferCanvas.md#destroy)

#### Defined in

[src/leafer/packages/interface/src/canvas/ILeaferCanvas.ts:212](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/canvas/ILeaferCanvas.ts#L212)

___

### beginPath

▸ **beginPath**(): `void`

#### Returns

`void`

#### Inherited from

[ILeaferCanvas](ILeaferCanvas.md).[beginPath](ILeaferCanvas.md#beginpath)

#### Defined in

[src/leafer/packages/interface/src/path/IPathDrawer.ts:4](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/path/IPathDrawer.ts#L4)

___

### moveTo

▸ **moveTo**(`x`, `y`): `void`

#### Parameters

| Name | Type     |
| :--- | :------- |
| `x`  | `number` |
| `y`  | `number` |

#### Returns

`void`

#### Inherited from

[ILeaferCanvas](ILeaferCanvas.md).[moveTo](ILeaferCanvas.md#moveto)

#### Defined in

[src/leafer/packages/interface/src/path/IPathDrawer.ts:6](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/path/IPathDrawer.ts#L6)

___

### lineTo

▸ **lineTo**(`x`, `y`): `void`

#### Parameters

| Name | Type     |
| :--- | :------- |
| `x`  | `number` |
| `y`  | `number` |

#### Returns

`void`

#### Inherited from

[ILeaferCanvas](ILeaferCanvas.md).[lineTo](ILeaferCanvas.md#lineto)

#### Defined in

[src/leafer/packages/interface/src/path/IPathDrawer.ts:7](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/path/IPathDrawer.ts#L7)

___

### bezierCurveTo

▸ **bezierCurveTo**(`x1`, `y1`, `x2`, `y2`, `x`, `y`): `void`

#### Parameters

| Name | Type     |
| :--- | :------- |
| `x1` | `number` |
| `y1` | `number` |
| `x2` | `number` |
| `y2` | `number` |
| `x`  | `number` |
| `y`  | `number` |

#### Returns

`void`

#### Inherited from

[ILeaferCanvas](ILeaferCanvas.md).[bezierCurveTo](ILeaferCanvas.md#beziercurveto)

#### Defined in

[src/leafer/packages/interface/src/path/IPathDrawer.ts:8](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/path/IPathDrawer.ts#L8)

___

### quadraticCurveTo

▸ **quadraticCurveTo**(`x1`, `y1`, `x`, `y`): `void`

#### Parameters

| Name | Type     |
| :--- | :------- |
| `x1` | `number` |
| `y1` | `number` |
| `x`  | `number` |
| `y`  | `number` |

#### Returns

`void`

#### Inherited from

[ILeaferCanvas](ILeaferCanvas.md).[quadraticCurveTo](ILeaferCanvas.md#quadraticcurveto)

#### Defined in

[src/leafer/packages/interface/src/path/IPathDrawer.ts:9](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/path/IPathDrawer.ts#L9)

___

### closePath

▸ **closePath**(): `void`

#### Returns

`void`

#### Inherited from

[ILeaferCanvas](ILeaferCanvas.md).[closePath](ILeaferCanvas.md#closepath)

#### Defined in

[src/leafer/packages/interface/src/path/IPathDrawer.ts:10](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/path/IPathDrawer.ts#L10)

___

### arc

▸ **arc**(`x`, `y`, `radius`, `startAngle`, `endAngle`, `anticlockwise?`): `void`

#### Parameters

| Name             | Type      |
| :--------------- | :-------- |
| `x`              | `number`  |
| `y`              | `number`  |
| `radius`         | `number`  |
| `startAngle`     | `number`  |
| `endAngle`       | `number`  |
| `anticlockwise?` | `boolean` |

#### Returns

`void`

#### Inherited from

[ILeaferCanvas](ILeaferCanvas.md).[arc](ILeaferCanvas.md#arc)

#### Defined in

[src/leafer/packages/interface/src/path/IPathDrawer.ts:12](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/path/IPathDrawer.ts#L12)

___

### arcTo

▸ **arcTo**(`x1`, `y1`, `x2`, `y2`, `radius`): `void`

#### Parameters

| Name     | Type     |
| :------- | :------- |
| `x1`     | `number` |
| `y1`     | `number` |
| `x2`     | `number` |
| `y2`     | `number` |
| `radius` | `number` |

#### Returns

`void`

#### Inherited from

[ILeaferCanvas](ILeaferCanvas.md).[arcTo](ILeaferCanvas.md#arcto)

#### Defined in

[src/leafer/packages/interface/src/path/IPathDrawer.ts:13](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/path/IPathDrawer.ts#L13)

___

### ellipse

▸ **ellipse**(`x`, `y`, `radiusX`, `radiusY`, `rotation`, `startAngle`, `endAngle`, `anticlockwise?`): `void`

#### Parameters

| Name             | Type      |
| :--------------- | :-------- |
| `x`              | `number`  |
| `y`              | `number`  |
| `radiusX`        | `number`  |
| `radiusY`        | `number`  |
| `rotation`       | `number`  |
| `startAngle`     | `number`  |
| `endAngle`       | `number`  |
| `anticlockwise?` | `boolean` |

#### Returns

`void`

#### Inherited from

[ILeaferCanvas](ILeaferCanvas.md).[ellipse](ILeaferCanvas.md#ellipse)

#### Defined in

[src/leafer/packages/interface/src/path/IPathDrawer.ts:14](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/path/IPathDrawer.ts#L14)

___

### rect

▸ **rect**(`x`, `y`, `width`, `height`): `void`

#### Parameters

| Name     | Type     |
| :------- | :------- |
| `x`      | `number` |
| `y`      | `number` |
| `width`  | `number` |
| `height` | `number` |

#### Returns

`void`

#### Inherited from

[ILeaferCanvas](ILeaferCanvas.md).[rect](ILeaferCanvas.md#rect)

#### Defined in

[src/leafer/packages/interface/src/path/IPathDrawer.ts:16](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/path/IPathDrawer.ts#L16)

___

### roundRect

▸ **roundRect**(`x`, `y`, `width`, `height`, `radius?`): `void`

#### Parameters

| Name      | Type                                                                         |
| :-------- | :--------------------------------------------------------------------------- |
| `x`       | `number`                                                                     |
| `y`       | `number`                                                                     |
| `width`   | `number`                                                                     |
| `height`  | `number`                                                                     |
| `radius?` | `number` \\| `number`[] |

#### Returns

`void`

#### Inherited from

[ILeaferCanvas](ILeaferCanvas.md).[roundRect](ILeaferCanvas.md#roundrect)

#### Defined in

[src/leafer/packages/interface/src/path/IPathDrawer.ts:17](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/path/IPathDrawer.ts#L17)
