# Class: LeaferCanvas

## Hierarchy

- [`LeaferCanvasBase`](LeaferCanvasBase.md)

  ↳ **`LeaferCanvas`**

## Table of contents

### Constructors

- [constructor](LeaferCanvas.md#constructor)

### Properties

- [view](LeaferCanvas.md#view)
- [parentView](LeaferCanvas.md#parentview)
- [resizeObserver](LeaferCanvas.md#resizeobserver)
- [autoBounds](LeaferCanvas.md#autobounds)
- [resizeListener](LeaferCanvas.md#resizelistener)
- [windowListener](LeaferCanvas.md#windowlistener)
- [context](LeaferCanvas.md#context)
- [smooth](LeaferCanvas.md#smooth)
- [smoothLevel](LeaferCanvas.md#smoothlevel)
- [opacity](LeaferCanvas.md#opacity)
- [fillStyle](LeaferCanvas.md#fillstyle)
- [strokeStyle](LeaferCanvas.md#strokestyle)
- [strokeWidth](LeaferCanvas.md#strokewidth)
- [strokeCap](LeaferCanvas.md#strokecap)
- [strokeJoin](LeaferCanvas.md#strokejoin)
- [dashOffset](LeaferCanvas.md#dashoffset)
- [miterLimit](LeaferCanvas.md#miterlimit)
- [shadowBlur](LeaferCanvas.md#shadowblur)
- [shadowColor](LeaferCanvas.md#shadowcolor)
- [shadowOffsetX](LeaferCanvas.md#shadowoffsetx)
- [shadowOffsetY](LeaferCanvas.md#shadowoffsety)
- [filter](LeaferCanvas.md#filter)
- [font](LeaferCanvas.md#font)
- [fontKerning](LeaferCanvas.md#fontkerning)
- [fontStretch](LeaferCanvas.md#fontstretch)
- [fontVariantCaps](LeaferCanvas.md#fontvariantcaps)
- [textAlign](LeaferCanvas.md#textalign)
- [textBaseline](LeaferCanvas.md#textbaseline)
- [textRendering](LeaferCanvas.md#textrendering)
- [wordSpacing](LeaferCanvas.md#wordspacing)
- [letterSpacing](LeaferCanvas.md#letterspacing)
- [direction](LeaferCanvas.md#direction)
- [innerId](LeaferCanvas.md#innerid)
- [name](LeaferCanvas.md#name)
- [manager](LeaferCanvas.md#manager)
- [size](LeaferCanvas.md#size)
- [bounds](LeaferCanvas.md#bounds)
- [clientBounds](LeaferCanvas.md#clientbounds)
- [config](LeaferCanvas.md#config)
- [autoLayout](LeaferCanvas.md#autolayout)
- [unreal](LeaferCanvas.md#unreal)
- [recycled](LeaferCanvas.md#recycled)
- [worldTransform](LeaferCanvas.md#worldtransform)
- [savedBlendMode](LeaferCanvas.md#savedblendmode)

### Accessors

- [zIndex](LeaferCanvas.md#zindex)
- [childIndex](LeaferCanvas.md#childindex)
- [backgroundColor](LeaferCanvas.md#backgroundcolor)
- [hittable](LeaferCanvas.md#hittable)
- [blendMode](LeaferCanvas.md#blendmode)
- [dashPattern](LeaferCanvas.md#dashpattern)
- [width](LeaferCanvas.md#width)
- [height](LeaferCanvas.md#height)
- [pixelRatio](LeaferCanvas.md#pixelratio)
- [pixelWidth](LeaferCanvas.md#pixelwidth)
- [pixelHeight](LeaferCanvas.md#pixelheight)
- [pixelSnap](LeaferCanvas.md#pixelsnap)
- [allowBackgroundColor](LeaferCanvas.md#allowbackgroundcolor)

### Methods

- [init](LeaferCanvas.md#init)
- [\_\_createView](LeaferCanvas.md#__createview)
- [\_\_createViewFrom](LeaferCanvas.md#__createviewfrom)
- [setAbsolute](LeaferCanvas.md#setabsolute)
- [updateViewSize](LeaferCanvas.md#updateviewsize)
- [updateClientBounds](LeaferCanvas.md#updateclientbounds)
- [startAutoLayout](LeaferCanvas.md#startautolayout)
- [imitateResizeObserver](LeaferCanvas.md#imitateresizeobserver)
- [listenPixelRatio](LeaferCanvas.md#listenpixelratio)
- [stopListenPixelRatio](LeaferCanvas.md#stoplistenpixelratio)
- [checkAutoBounds](LeaferCanvas.md#checkautobounds)
- [stopAutoLayout](LeaferCanvas.md#stopautolayout)
- [emitResize](LeaferCanvas.md#emitresize)
- [unrealCanvas](LeaferCanvas.md#unrealcanvas)
- [destroy](LeaferCanvas.md#destroy)
- [\_\_bindContext](LeaferCanvas.md#__bindcontext)
- [setTransform](LeaferCanvas.md#settransform)
- [resetTransform](LeaferCanvas.md#resettransform)
- [getTransform](LeaferCanvas.md#gettransform)
- [save](LeaferCanvas.md#save)
- [restore](LeaferCanvas.md#restore)
- [transform](LeaferCanvas.md#transform)
- [translate](LeaferCanvas.md#translate)
- [scale](LeaferCanvas.md#scale)
- [rotate](LeaferCanvas.md#rotate)
- [fill](LeaferCanvas.md#fill)
- [stroke](LeaferCanvas.md#stroke)
- [clip](LeaferCanvas.md#clip)
- [fillRect](LeaferCanvas.md#fillrect)
- [strokeRect](LeaferCanvas.md#strokerect)
- [clearRect](LeaferCanvas.md#clearrect)
- [drawImage](LeaferCanvas.md#drawimage)
- [beginPath](LeaferCanvas.md#beginpath)
- [moveTo](LeaferCanvas.md#moveto)
- [lineTo](LeaferCanvas.md#lineto)
- [bezierCurveTo](LeaferCanvas.md#beziercurveto)
- [quadraticCurveTo](LeaferCanvas.md#quadraticcurveto)
- [closePath](LeaferCanvas.md#closepath)
- [arc](LeaferCanvas.md#arc)
- [arcTo](LeaferCanvas.md#arcto)
- [ellipse](LeaferCanvas.md#ellipse)
- [rect](LeaferCanvas.md#rect)
- [roundRect](LeaferCanvas.md#roundrect)
- [createConicGradient](LeaferCanvas.md#createconicgradient)
- [createLinearGradient](LeaferCanvas.md#createlineargradient)
- [createPattern](LeaferCanvas.md#createpattern)
- [createRadialGradient](LeaferCanvas.md#createradialgradient)
- [fillText](LeaferCanvas.md#filltext)
- [measureText](LeaferCanvas.md#measuretext)
- [strokeText](LeaferCanvas.md#stroketext)
- [\_\_createContext](LeaferCanvas.md#__createcontext)
- [export](LeaferCanvas.md#export)
- [toBlob](LeaferCanvas.md#toblob)
- [toDataURL](LeaferCanvas.md#todataurl)
- [saveAs](LeaferCanvas.md#saveas)
- [resize](LeaferCanvas.md#resize)
- [getClientBounds](LeaferCanvas.md#getclientbounds)
- [setCursor](LeaferCanvas.md#setcursor)
- [setWorld](LeaferCanvas.md#setworld)
- [useWorldTransform](LeaferCanvas.md#useworldtransform)
- [setStroke](LeaferCanvas.md#setstroke)
- [setStrokeOptions](LeaferCanvas.md#setstrokeoptions)
- [saveBlendMode](LeaferCanvas.md#saveblendmode)
- [restoreBlendMode](LeaferCanvas.md#restoreblendmode)
- [hitFill](LeaferCanvas.md#hitfill)
- [hitStroke](LeaferCanvas.md#hitstroke)
- [hitPixel](LeaferCanvas.md#hitpixel)
- [setWorldShadow](LeaferCanvas.md#setworldshadow)
- [setWorldBlur](LeaferCanvas.md#setworldblur)
- [copyWorld](LeaferCanvas.md#copyworld)
- [copyWorldToInner](LeaferCanvas.md#copyworldtoinner)
- [copyWorldByReset](LeaferCanvas.md#copyworldbyreset)
- [useGrayscaleAlpha](LeaferCanvas.md#usegrayscalealpha)
- [useMask](LeaferCanvas.md#usemask)
- [useEraser](LeaferCanvas.md#useeraser)
- [fillWorld](LeaferCanvas.md#fillworld)
- [strokeWorld](LeaferCanvas.md#strokeworld)
- [clipWorld](LeaferCanvas.md#clipworld)
- [clipUI](LeaferCanvas.md#clipui)
- [clearWorld](LeaferCanvas.md#clearworld)
- [clear](LeaferCanvas.md#clear)
- [setTempPixelBounds](LeaferCanvas.md#settemppixelbounds)
- [setTempPixelBounds2](LeaferCanvas.md#settemppixelbounds2)
- [copyToPixelBounds](LeaferCanvas.md#copytopixelbounds)
- [isSameSize](LeaferCanvas.md#issamesize)
- [getSameCanvas](LeaferCanvas.md#getsamecanvas)
- [recycle](LeaferCanvas.md#recycle)
- [updateRender](LeaferCanvas.md#updaterender)

## Constructors

### constructor

• **new LeaferCanvas**(`config?`, `manager?`): [`LeaferCanvas`](LeaferCanvas.md)

#### Parameters

| Name       | Type                                                          |
| :--------- | :------------------------------------------------------------ |
| `config?`  | [`ILeaferCanvasConfig`](../interfaces/ILeaferCanvasConfig.md) |
| `manager?` | [`ICanvasManager`](../interfaces/ICanvasManager.md)           |

#### Returns

[`LeaferCanvas`](LeaferCanvas.md)

#### Inherited from

[LeaferCanvasBase](LeaferCanvasBase.md).[constructor](LeaferCanvasBase.md#constructor)

#### Defined in

[src/leafer/packages/canvas/canvas/src/LeaferCanvasBase.ts:54](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/canvas/canvas/src/LeaferCanvasBase.ts#L54)

## Properties

### view

• **view**: `HTMLCanvasElement`

#### Overrides

[LeaferCanvasBase](LeaferCanvasBase.md).[view](LeaferCanvasBase.md#view)

#### Defined in

[src/leafer/packages/canvas/canvas-web/src/LeaferCanvas.ts:9](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/canvas/canvas-web/src/LeaferCanvas.ts#L9)

___

### parentView

• **parentView**: `HTMLElement`

#### Overrides

[LeaferCanvasBase](LeaferCanvasBase.md).[parentView](LeaferCanvasBase.md#parentview)

#### Defined in

[src/leafer/packages/canvas/canvas-web/src/LeaferCanvas.ts:10](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/canvas/canvas-web/src/LeaferCanvas.ts#L10)

___

### resizeObserver

• `Protected` **resizeObserver**: `ResizeObserver`

#### Defined in

[src/leafer/packages/canvas/canvas-web/src/LeaferCanvas.ts:31](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/canvas/canvas-web/src/LeaferCanvas.ts#L31)

___

### autoBounds

• `Protected` **autoBounds**: [`IAutoBounds`](../interfaces/IAutoBounds.md)

#### Defined in

[src/leafer/packages/canvas/canvas-web/src/LeaferCanvas.ts:32](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/canvas/canvas-web/src/LeaferCanvas.ts#L32)

___

### resizeListener

• `Protected` **resizeListener**: [`IResizeEventListener`](../interfaces/IResizeEventListener.md)

#### Defined in

[src/leafer/packages/canvas/canvas-web/src/LeaferCanvas.ts:33](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/canvas/canvas-web/src/LeaferCanvas.ts#L33)

___

### windowListener

• `Protected` **windowListener**: [`IFunction`](../interfaces/IFunction.md)

#### Defined in

[src/leafer/packages/canvas/canvas-web/src/LeaferCanvas.ts:34](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/canvas/canvas-web/src/LeaferCanvas.ts#L34)

___

### context

• **context**: [`ICanvasContext2D`](../interfaces/ICanvasContext2D.md)

#### Inherited from

[LeaferCanvasBase](LeaferCanvasBase.md).[context](LeaferCanvasBase.md#context)

#### Defined in

[src/leafer/packages/canvas/canvas/src/Canvas.ts:31](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/canvas/canvas/src/Canvas.ts#L31)

___

### smooth

• **smooth**: `boolean`

#### Inherited from

[LeaferCanvasBase](LeaferCanvasBase.md).[smooth](LeaferCanvasBase.md#smooth)

#### Defined in

[src/leafer/packages/canvas/canvas/src/Canvas.ts:36](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/canvas/canvas/src/Canvas.ts#L36)

___

### smoothLevel

• **smoothLevel**: `ImageSmoothingQuality`

#### Inherited from

[LeaferCanvasBase](LeaferCanvasBase.md).[smoothLevel](LeaferCanvasBase.md#smoothlevel)

#### Defined in

[src/leafer/packages/canvas/canvas/src/Canvas.ts:39](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/canvas/canvas/src/Canvas.ts#L39)

___

### opacity

• **opacity**: `number`

#### Inherited from

[LeaferCanvasBase](LeaferCanvasBase.md).[opacity](LeaferCanvasBase.md#opacity)

#### Defined in

[src/leafer/packages/canvas/canvas/src/Canvas.ts:42](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/canvas/canvas/src/Canvas.ts#L42)

___

### fillStyle

• **fillStyle**: `string` \| `object`

#### Inherited from

[LeaferCanvasBase](LeaferCanvasBase.md).[fillStyle](LeaferCanvasBase.md#fillstyle)

#### Defined in

[src/leafer/packages/canvas/canvas/src/Canvas.ts:54](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/canvas/canvas/src/Canvas.ts#L54)

___

### strokeStyle

• **strokeStyle**: `string` \| `object`

#### Inherited from

[LeaferCanvasBase](LeaferCanvasBase.md).[strokeStyle](LeaferCanvasBase.md#strokestyle)

#### Defined in

[src/leafer/packages/canvas/canvas/src/Canvas.ts:57](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/canvas/canvas/src/Canvas.ts#L57)

___

### strokeWidth

• **strokeWidth**: `number`

#### Inherited from

[LeaferCanvasBase](LeaferCanvasBase.md).[strokeWidth](LeaferCanvasBase.md#strokewidth)

#### Defined in

[src/leafer/packages/canvas/canvas/src/Canvas.ts:61](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/canvas/canvas/src/Canvas.ts#L61)

___

### strokeCap

• **strokeCap**: `string`

#### Inherited from

[LeaferCanvasBase](LeaferCanvasBase.md).[strokeCap](LeaferCanvasBase.md#strokecap)

#### Defined in

[src/leafer/packages/canvas/canvas/src/Canvas.ts:64](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/canvas/canvas/src/Canvas.ts#L64)

___

### strokeJoin

• **strokeJoin**: `string`

#### Inherited from

[LeaferCanvasBase](LeaferCanvasBase.md).[strokeJoin](LeaferCanvasBase.md#strokejoin)

#### Defined in

[src/leafer/packages/canvas/canvas/src/Canvas.ts:67](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/canvas/canvas/src/Canvas.ts#L67)

___

### dashOffset

• **dashOffset**: `number`

#### Inherited from

[LeaferCanvasBase](LeaferCanvasBase.md).[dashOffset](LeaferCanvasBase.md#dashoffset)

#### Defined in

[src/leafer/packages/canvas/canvas/src/Canvas.ts:77](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/canvas/canvas/src/Canvas.ts#L77)

___

### miterLimit

• **miterLimit**: `number`

#### Inherited from

[LeaferCanvasBase](LeaferCanvasBase.md).[miterLimit](LeaferCanvasBase.md#miterlimit)

#### Defined in

[src/leafer/packages/canvas/canvas/src/Canvas.ts:80](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/canvas/canvas/src/Canvas.ts#L80)

___

### shadowBlur

• **shadowBlur**: `number`

#### Inherited from

[LeaferCanvasBase](LeaferCanvasBase.md).[shadowBlur](LeaferCanvasBase.md#shadowblur)

#### Defined in

[src/leafer/packages/canvas/canvas/src/Canvas.ts:84](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/canvas/canvas/src/Canvas.ts#L84)

___

### shadowColor

• **shadowColor**: `string`

#### Inherited from

[LeaferCanvasBase](LeaferCanvasBase.md).[shadowColor](LeaferCanvasBase.md#shadowcolor)

#### Defined in

[src/leafer/packages/canvas/canvas/src/Canvas.ts:87](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/canvas/canvas/src/Canvas.ts#L87)

___

### shadowOffsetX

• **shadowOffsetX**: `number`

#### Inherited from

[LeaferCanvasBase](LeaferCanvasBase.md).[shadowOffsetX](LeaferCanvasBase.md#shadowoffsetx)

#### Defined in

[src/leafer/packages/canvas/canvas/src/Canvas.ts:90](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/canvas/canvas/src/Canvas.ts#L90)

___

### shadowOffsetY

• **shadowOffsetY**: `number`

#### Inherited from

[LeaferCanvasBase](LeaferCanvasBase.md).[shadowOffsetY](LeaferCanvasBase.md#shadowoffsety)

#### Defined in

[src/leafer/packages/canvas/canvas/src/Canvas.ts:93](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/canvas/canvas/src/Canvas.ts#L93)

___

### filter

• **filter**: `string`

#### Inherited from

[LeaferCanvasBase](LeaferCanvasBase.md).[filter](LeaferCanvasBase.md#filter)

#### Defined in

[src/leafer/packages/canvas/canvas/src/Canvas.ts:96](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/canvas/canvas/src/Canvas.ts#L96)

___

### font

• **font**: `string`

#### Inherited from

[LeaferCanvasBase](LeaferCanvasBase.md).[font](LeaferCanvasBase.md#font)

#### Defined in

[src/leafer/packages/canvas/canvas/src/Canvas.ts:100](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/canvas/canvas/src/Canvas.ts#L100)

___

### fontKerning

• **fontKerning**: `string`

#### Inherited from

[LeaferCanvasBase](LeaferCanvasBase.md).[fontKerning](LeaferCanvasBase.md#fontkerning)

#### Defined in

[src/leafer/packages/canvas/canvas/src/Canvas.ts:103](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/canvas/canvas/src/Canvas.ts#L103)

___

### fontStretch

• **fontStretch**: `string`

#### Inherited from

[LeaferCanvasBase](LeaferCanvasBase.md).[fontStretch](LeaferCanvasBase.md#fontstretch)

#### Defined in

[src/leafer/packages/canvas/canvas/src/Canvas.ts:106](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/canvas/canvas/src/Canvas.ts#L106)

___

### fontVariantCaps

• **fontVariantCaps**: `string`

#### Inherited from

[LeaferCanvasBase](LeaferCanvasBase.md).[fontVariantCaps](LeaferCanvasBase.md#fontvariantcaps)

#### Defined in

[src/leafer/packages/canvas/canvas/src/Canvas.ts:109](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/canvas/canvas/src/Canvas.ts#L109)

___

### textAlign

• **textAlign**: `string`

#### Inherited from

[LeaferCanvasBase](LeaferCanvasBase.md).[textAlign](LeaferCanvasBase.md#textalign)

#### Defined in

[src/leafer/packages/canvas/canvas/src/Canvas.ts:113](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/canvas/canvas/src/Canvas.ts#L113)

___

### textBaseline

• **textBaseline**: `string`

#### Inherited from

[LeaferCanvasBase](LeaferCanvasBase.md).[textBaseline](LeaferCanvasBase.md#textbaseline)

#### Defined in

[src/leafer/packages/canvas/canvas/src/Canvas.ts:116](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/canvas/canvas/src/Canvas.ts#L116)

___

### textRendering

• **textRendering**: `string`

#### Inherited from

[LeaferCanvasBase](LeaferCanvasBase.md).[textRendering](LeaferCanvasBase.md#textrendering)

#### Defined in

[src/leafer/packages/canvas/canvas/src/Canvas.ts:119](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/canvas/canvas/src/Canvas.ts#L119)

___

### wordSpacing

• **wordSpacing**: `string`

#### Inherited from

[LeaferCanvasBase](LeaferCanvasBase.md).[wordSpacing](LeaferCanvasBase.md#wordspacing)

#### Defined in

[src/leafer/packages/canvas/canvas/src/Canvas.ts:122](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/canvas/canvas/src/Canvas.ts#L122)

___

### letterSpacing

• **letterSpacing**: `string`

#### Inherited from

[LeaferCanvasBase](LeaferCanvasBase.md).[letterSpacing](LeaferCanvasBase.md#letterspacing)

#### Defined in

[src/leafer/packages/canvas/canvas/src/Canvas.ts:125](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/canvas/canvas/src/Canvas.ts#L125)

___

### direction

• **direction**: `string`

#### Inherited from

[LeaferCanvasBase](LeaferCanvasBase.md).[direction](LeaferCanvasBase.md#direction)

#### Defined in

[src/leafer/packages/canvas/canvas/src/Canvas.ts:129](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/canvas/canvas/src/Canvas.ts#L129)

___

### innerId

• `Readonly` **innerId**: `number`

#### Inherited from

[LeaferCanvasBase](LeaferCanvasBase.md).[innerId](LeaferCanvasBase.md#innerid)

#### Defined in

[src/leafer/packages/canvas/canvas/src/LeaferCanvasBase.ts:16](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/canvas/canvas/src/LeaferCanvasBase.ts#L16)

___

### name

• **name**: `string`

#### Inherited from

[LeaferCanvasBase](LeaferCanvasBase.md).[name](LeaferCanvasBase.md#name)

#### Defined in

[src/leafer/packages/canvas/canvas/src/LeaferCanvasBase.ts:18](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/canvas/canvas/src/LeaferCanvasBase.ts#L18)

___

### manager

• **manager**: [`ICanvasManager`](../interfaces/ICanvasManager.md)

#### Inherited from

[LeaferCanvasBase](LeaferCanvasBase.md).[manager](LeaferCanvasBase.md#manager)

#### Defined in

[src/leafer/packages/canvas/canvas/src/LeaferCanvasBase.ts:20](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/canvas/canvas/src/LeaferCanvasBase.ts#L20)

___

### size

• **size**: [`IScreenSizeData`](../interfaces/IScreenSizeData.md)

#### Inherited from

[LeaferCanvasBase](LeaferCanvasBase.md).[size](LeaferCanvasBase.md#size)

#### Defined in

[src/leafer/packages/canvas/canvas/src/LeaferCanvasBase.ts:22](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/canvas/canvas/src/LeaferCanvasBase.ts#L22)

___

### bounds

• **bounds**: [`IBounds`](../interfaces/IBounds.md)

#### Inherited from

[LeaferCanvasBase](LeaferCanvasBase.md).[bounds](LeaferCanvasBase.md#bounds)

#### Defined in

[src/leafer/packages/canvas/canvas/src/LeaferCanvasBase.ts:36](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/canvas/canvas/src/LeaferCanvasBase.ts#L36)

___

### clientBounds

• **clientBounds**: [`IBoundsData`](../interfaces/IBoundsData.md)

#### Inherited from

[LeaferCanvasBase](LeaferCanvasBase.md).[clientBounds](LeaferCanvasBase.md#clientbounds)

#### Defined in

[src/leafer/packages/canvas/canvas/src/LeaferCanvasBase.ts:37](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/canvas/canvas/src/LeaferCanvasBase.ts#L37)

___

### config

• **config**: [`ILeaferCanvasConfig`](../interfaces/ILeaferCanvasConfig.md)

#### Inherited from

[LeaferCanvasBase](LeaferCanvasBase.md).[config](LeaferCanvasBase.md#config)

#### Defined in

[src/leafer/packages/canvas/canvas/src/LeaferCanvasBase.ts:39](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/canvas/canvas/src/LeaferCanvasBase.ts#L39)

___

### autoLayout

• **autoLayout**: `boolean`

#### Inherited from

[LeaferCanvasBase](LeaferCanvasBase.md).[autoLayout](LeaferCanvasBase.md#autolayout)

#### Defined in

[src/leafer/packages/canvas/canvas/src/LeaferCanvasBase.ts:41](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/canvas/canvas/src/LeaferCanvasBase.ts#L41)

___

### unreal

• `Optional` **unreal**: `boolean`

#### Inherited from

[LeaferCanvasBase](LeaferCanvasBase.md).[unreal](LeaferCanvasBase.md#unreal)

#### Defined in

[src/leafer/packages/canvas/canvas/src/LeaferCanvasBase.ts:46](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/canvas/canvas/src/LeaferCanvasBase.ts#L46)

___

### recycled

• `Optional` **recycled**: `boolean`

#### Inherited from

[LeaferCanvasBase](LeaferCanvasBase.md).[recycled](LeaferCanvasBase.md#recycled)

#### Defined in

[src/leafer/packages/canvas/canvas/src/LeaferCanvasBase.ts:48](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/canvas/canvas/src/LeaferCanvasBase.ts#L48)

___

### worldTransform

• **worldTransform**: [`IMatrixData`](../interfaces/IMatrixData.md)

#### Inherited from

[LeaferCanvasBase](LeaferCanvasBase.md).[worldTransform](LeaferCanvasBase.md#worldtransform)

#### Defined in

[src/leafer/packages/canvas/canvas/src/LeaferCanvasBase.ts:50](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/canvas/canvas/src/LeaferCanvasBase.ts#L50)

___

### savedBlendMode

• `Protected` **savedBlendMode**: [`IBlendMode`](../modules.md#iblendmode)

#### Inherited from

[LeaferCanvasBase](LeaferCanvasBase.md).[savedBlendMode](LeaferCanvasBase.md#savedblendmode)

#### Defined in

[src/leafer/packages/canvas/canvas/src/LeaferCanvasBase.ts:52](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/canvas/canvas/src/LeaferCanvasBase.ts#L52)

## Accessors

### zIndex

• `set` **zIndex**(`zIndex`): `void`

#### Parameters

| Name     | Type     |
| :------- | :------- |
| `zIndex` | `number` |

#### Returns

`void`

#### Defined in

[src/leafer/packages/canvas/canvas-web/src/LeaferCanvas.ts:12](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/canvas/canvas-web/src/LeaferCanvas.ts#L12)

___

### childIndex

• `set` **childIndex**(`index`): `void`

#### Parameters

| Name    | Type     |
| :------ | :------- |
| `index` | `number` |

#### Returns

`void`

#### Defined in

[src/leafer/packages/canvas/canvas-web/src/LeaferCanvas.ts:18](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/canvas/canvas-web/src/LeaferCanvas.ts#L18)

___

### backgroundColor

• `get` **backgroundColor**(): `string`

#### Returns

`string`

#### Defined in

[src/leafer/packages/canvas/canvas-web/src/LeaferCanvas.ts:62](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/canvas/canvas-web/src/LeaferCanvas.ts#L62)

• `set` **backgroundColor**(`color`): `void`

#### Parameters

| Name    | Type     |
| :------ | :------- |
| `color` | `string` |

#### Returns

`void`

#### Defined in

[src/leafer/packages/canvas/canvas-web/src/LeaferCanvas.ts:61](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/canvas/canvas-web/src/LeaferCanvas.ts#L61)

___

### hittable

• `get` **hittable**(): `boolean`

#### Returns

`boolean`

#### Defined in

[src/leafer/packages/canvas/canvas-web/src/LeaferCanvas.ts:65](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/canvas/canvas-web/src/LeaferCanvas.ts#L65)

• `set` **hittable**(`hittable`): `void`

#### Parameters

| Name       | Type      |
| :--------- | :-------- |
| `hittable` | `boolean` |

#### Returns

`void`

#### Defined in

[src/leafer/packages/canvas/canvas-web/src/LeaferCanvas.ts:64](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/canvas/canvas-web/src/LeaferCanvas.ts#L64)

___

### blendMode

• `get` **blendMode**(): [`IBlendMode`](../modules.md#iblendmode)

#### Returns

[`IBlendMode`](../modules.md#iblendmode)

#### Inherited from

LeaferCanvasBase.blendMode

#### Defined in

[src/leafer/packages/canvas/canvas/src/Canvas.ts:49](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/canvas/canvas/src/Canvas.ts#L49)

• `set` **blendMode**(`value`): `void`

#### Parameters

| Name    | Type                                     |
| :------ | :--------------------------------------- |
| `value` | [`IBlendMode`](../modules.md#iblendmode) |

#### Returns

`void`

#### Inherited from

LeaferCanvasBase.blendMode

#### Defined in

[src/leafer/packages/canvas/canvas/src/Canvas.ts:44](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/canvas/canvas/src/Canvas.ts#L44)

___

### dashPattern

• `get` **dashPattern**(): `number`[]

#### Returns

`number`[]

#### Inherited from

LeaferCanvasBase.dashPattern

#### Defined in

[src/leafer/packages/canvas/canvas/src/Canvas.ts:72](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/canvas/canvas/src/Canvas.ts#L72)

• `set` **dashPattern**(`value`): `void`

#### Parameters

| Name    | Type                                                           |
| :------ | :------------------------------------------------------------- |
| `value` | `number`[] |

#### Returns

`void`

#### Inherited from

LeaferCanvasBase.dashPattern

#### Defined in

[src/leafer/packages/canvas/canvas/src/Canvas.ts:69](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/canvas/canvas/src/Canvas.ts#L69)

___

### width

• `get` **width**(): `number`

#### Returns

`number`

#### Inherited from

LeaferCanvasBase.width

#### Defined in

[src/leafer/packages/canvas/canvas/src/LeaferCanvasBase.ts:24](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/canvas/canvas/src/LeaferCanvasBase.ts#L24)

___

### height

• `get` **height**(): `number`

#### Returns

`number`

#### Inherited from

LeaferCanvasBase.height

#### Defined in

[src/leafer/packages/canvas/canvas/src/LeaferCanvasBase.ts:25](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/canvas/canvas/src/LeaferCanvasBase.ts#L25)

___

### pixelRatio

• `get` **pixelRatio**(): `number`

#### Returns

`number`

#### Inherited from

LeaferCanvasBase.pixelRatio

#### Defined in

[src/leafer/packages/canvas/canvas/src/LeaferCanvasBase.ts:27](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/canvas/canvas/src/LeaferCanvasBase.ts#L27)

___

### pixelWidth

• `get` **pixelWidth**(): `number`

#### Returns

`number`

#### Inherited from

LeaferCanvasBase.pixelWidth

#### Defined in

[src/leafer/packages/canvas/canvas/src/LeaferCanvasBase.ts:28](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/canvas/canvas/src/LeaferCanvasBase.ts#L28)

___

### pixelHeight

• `get` **pixelHeight**(): `number`

#### Returns

`number`

#### Inherited from

LeaferCanvasBase.pixelHeight

#### Defined in

[src/leafer/packages/canvas/canvas/src/LeaferCanvasBase.ts:29](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/canvas/canvas/src/LeaferCanvasBase.ts#L29)

___

### pixelSnap

• `get` **pixelSnap**(): `boolean`

#### Returns

`boolean`

#### Inherited from

LeaferCanvasBase.pixelSnap

#### Defined in

[src/leafer/packages/canvas/canvas/src/LeaferCanvasBase.ts:31](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/canvas/canvas/src/LeaferCanvasBase.ts#L31)

• `set` **pixelSnap**(`value`): `void`

#### Parameters

| Name    | Type      |
| :------ | :-------- |
| `value` | `boolean` |

#### Returns

`void`

#### Inherited from

LeaferCanvasBase.pixelSnap

#### Defined in

[src/leafer/packages/canvas/canvas/src/LeaferCanvasBase.ts:32](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/canvas/canvas/src/LeaferCanvasBase.ts#L32)

___

### allowBackgroundColor

• `get` **allowBackgroundColor**(): `boolean`

#### Returns

`boolean`

#### Inherited from

LeaferCanvasBase.allowBackgroundColor

#### Defined in

[src/leafer/packages/canvas/canvas/src/LeaferCanvasBase.ts:34](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/canvas/canvas/src/LeaferCanvasBase.ts#L34)

## Methods

### init

▸ **init**(): `void`

#### Returns

`void`

#### Overrides

[LeaferCanvasBase](LeaferCanvasBase.md).[init](LeaferCanvasBase.md#init)

#### Defined in

[src/leafer/packages/canvas/canvas-web/src/LeaferCanvas.ts:36](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/canvas/canvas-web/src/LeaferCanvas.ts#L36)

___

### \_\_createView

▸ **__createView**(): `void`

#### Returns

`void`

#### Defined in

[src/leafer/packages/canvas/canvas-web/src/LeaferCanvas.ts:67](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/canvas/canvas-web/src/LeaferCanvas.ts#L67)

___

### \_\_createViewFrom

▸ **__createViewFrom**(`inputView`): `void`

#### Parameters

| Name        | Type                   |
| :---------- | :--------------------- |
| `inputView` | `string` \\| `object` |

#### Returns

`void`

#### Defined in

[src/leafer/packages/canvas/canvas-web/src/LeaferCanvas.ts:71](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/canvas/canvas-web/src/LeaferCanvas.ts#L71)

___

### setAbsolute

▸ **setAbsolute**(`view`): `void`

#### Parameters

| Name   | Type                |
| :----- | :------------------ |
| `view` | `HTMLCanvasElement` |

#### Returns

`void`

#### Defined in

[src/leafer/packages/canvas/canvas-web/src/LeaferCanvas.ts:106](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/canvas/canvas-web/src/LeaferCanvas.ts#L106)

___

### updateViewSize

▸ **updateViewSize**(): `void`

#### Returns

`void`

#### Overrides

[LeaferCanvasBase](LeaferCanvasBase.md).[updateViewSize](LeaferCanvasBase.md#updateviewsize)

#### Defined in

[src/leafer/packages/canvas/canvas-web/src/LeaferCanvas.ts:112](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/canvas/canvas-web/src/LeaferCanvas.ts#L112)

___

### updateClientBounds

▸ **updateClientBounds**(): `void`

#### Returns

`void`

#### Overrides

[LeaferCanvasBase](LeaferCanvasBase.md).[updateClientBounds](LeaferCanvasBase.md#updateclientbounds)

#### Defined in

[src/leafer/packages/canvas/canvas-web/src/LeaferCanvas.ts:126](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/canvas/canvas-web/src/LeaferCanvas.ts#L126)

___

### startAutoLayout

▸ **startAutoLayout**(`autoBounds`, `listener`): `void`

#### Parameters

| Name         | Type                                                            |
| :----------- | :-------------------------------------------------------------- |
| `autoBounds` | [`IAutoBounds`](../interfaces/IAutoBounds.md)                   |
| `listener`   | [`IResizeEventListener`](../interfaces/IResizeEventListener.md) |

#### Returns

`void`

#### Overrides

[LeaferCanvasBase](LeaferCanvasBase.md).[startAutoLayout](LeaferCanvasBase.md#startautolayout)

#### Defined in

[src/leafer/packages/canvas/canvas-web/src/LeaferCanvas.ts:130](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/canvas/canvas-web/src/LeaferCanvas.ts#L130)

___

### imitateResizeObserver

▸ **imitateResizeObserver**(): `void`

#### Returns

`void`

#### Defined in

[src/leafer/packages/canvas/canvas-web/src/LeaferCanvas.ts:172](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/canvas/canvas-web/src/LeaferCanvas.ts#L172)

___

### listenPixelRatio

▸ **listenPixelRatio**(): `void`

#### Returns

`void`

#### Defined in

[src/leafer/packages/canvas/canvas-web/src/LeaferCanvas.ts:181](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/canvas/canvas-web/src/LeaferCanvas.ts#L181)

___

### stopListenPixelRatio

▸ **stopListenPixelRatio**(): `void`

#### Returns

`void`

#### Defined in

[src/leafer/packages/canvas/canvas-web/src/LeaferCanvas.ts:191](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/canvas/canvas-web/src/LeaferCanvas.ts#L191)

___

### checkAutoBounds

▸ **checkAutoBounds**(`parentSize`): `void`

#### Parameters

| Name         | Type                                      |
| :----------- | :---------------------------------------- |
| `parentSize` | [`ISizeData`](../interfaces/ISizeData.md) |

#### Returns

`void`

#### Defined in

[src/leafer/packages/canvas/canvas-web/src/LeaferCanvas.ts:198](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/canvas/canvas-web/src/LeaferCanvas.ts#L198)

___

### stopAutoLayout

▸ **stopAutoLayout**(): `void`

#### Returns

`void`

#### Overrides

[LeaferCanvasBase](LeaferCanvasBase.md).[stopAutoLayout](LeaferCanvasBase.md#stopautolayout)

#### Defined in

[src/leafer/packages/canvas/canvas-web/src/LeaferCanvas.ts:210](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/canvas/canvas-web/src/LeaferCanvas.ts#L210)

___

### emitResize

▸ **emitResize**(`size`): `void`

#### Parameters

| Name   | Type                                                  |
| :----- | :---------------------------------------------------- |
| `size` | [`IScreenSizeData`](../interfaces/IScreenSizeData.md) |

#### Returns

`void`

#### Defined in

[src/leafer/packages/canvas/canvas-web/src/LeaferCanvas.ts:216](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/canvas/canvas-web/src/LeaferCanvas.ts#L216)

___

### unrealCanvas

▸ **unrealCanvas**(): `void`

#### Returns

`void`

#### Overrides

[LeaferCanvasBase](LeaferCanvasBase.md).[unrealCanvas](LeaferCanvasBase.md#unrealcanvas)

#### Defined in

[src/leafer/packages/canvas/canvas-web/src/LeaferCanvas.ts:224](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/canvas/canvas-web/src/LeaferCanvas.ts#L224)

___

### destroy

▸ **destroy**(): `void`

#### Returns

`void`

#### Overrides

[LeaferCanvasBase](LeaferCanvasBase.md).[destroy](LeaferCanvasBase.md#destroy)

#### Defined in

[src/leafer/packages/canvas/canvas-web/src/LeaferCanvas.ts:237](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/canvas/canvas-web/src/LeaferCanvas.ts#L237)

___

### \_\_bindContext

▸ **__bindContext**(): `void`

#### Returns

`void`

#### Inherited from

[LeaferCanvasBase](LeaferCanvasBase.md).[__bindContext](LeaferCanvasBase.md#__bindcontext)

#### Defined in

[src/leafer/packages/canvas/canvas/src/Canvas.ts:133](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/canvas/canvas/src/Canvas.ts#L133)

___

### setTransform

▸ **setTransform**(`_a`, `_b?`, `_c?`, `_d?`, `_e?`, `_f?`): `void`

#### Parameters

| Name  | Type                                                        |
| :---- | :---------------------------------------------------------- |
| `_a`  | `number` \\| [`IMatrixData`](../interfaces/IMatrixData.md) |
| `_b?` | `number`                                                    |
| `_c?` | `number`                                                    |
| `_d?` | `number`                                                    |
| `_e?` | `number`                                                    |
| `_f?` | `number`                                                    |

#### Returns

`void`

#### Inherited from

[LeaferCanvasBase](LeaferCanvasBase.md).[setTransform](LeaferCanvasBase.md#settransform)

#### Defined in

[src/leafer/packages/canvas/canvas/src/Canvas.ts:145](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/canvas/canvas/src/Canvas.ts#L145)

___

### resetTransform

▸ **resetTransform**(): `void`

#### Returns

`void`

#### Inherited from

[LeaferCanvasBase](LeaferCanvasBase.md).[resetTransform](LeaferCanvasBase.md#resettransform)

#### Defined in

[src/leafer/packages/canvas/canvas/src/Canvas.ts:148](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/canvas/canvas/src/Canvas.ts#L148)

___

### getTransform

▸ **getTransform**(): [`IMatrixData`](../interfaces/IMatrixData.md)

#### Returns

[`IMatrixData`](../interfaces/IMatrixData.md)

#### Inherited from

[LeaferCanvasBase](LeaferCanvasBase.md).[getTransform](LeaferCanvasBase.md#gettransform)

#### Defined in

[src/leafer/packages/canvas/canvas/src/Canvas.ts:151](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/canvas/canvas/src/Canvas.ts#L151)

___

### save

▸ **save**(): `void`

#### Returns

`void`

#### Inherited from

[LeaferCanvasBase](LeaferCanvasBase.md).[save](LeaferCanvasBase.md#save)

#### Defined in

[src/leafer/packages/canvas/canvas/src/Canvas.ts:154](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/canvas/canvas/src/Canvas.ts#L154)

___

### restore

▸ **restore**(): `void`

#### Returns

`void`

#### Inherited from

[LeaferCanvasBase](LeaferCanvasBase.md).[restore](LeaferCanvasBase.md#restore)

#### Defined in

[src/leafer/packages/canvas/canvas/src/Canvas.ts:157](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/canvas/canvas/src/Canvas.ts#L157)

___

### transform

▸ **transform**(`a`, `b?`, `c?`, `d?`, `e?`, `f?`): `void`

#### Parameters

| Name | Type                                                        |
| :--- | :---------------------------------------------------------- |
| `a`  | `number` \\| [`IMatrixData`](../interfaces/IMatrixData.md) |
| `b?` | `number`                                                    |
| `c?` | `number`                                                    |
| `d?` | `number`                                                    |
| `e?` | `number`                                                    |
| `f?` | `number`                                                    |

#### Returns

`void`

#### Inherited from

[LeaferCanvasBase](LeaferCanvasBase.md).[transform](LeaferCanvasBase.md#transform)

#### Defined in

[src/leafer/packages/canvas/canvas/src/Canvas.ts:159](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/canvas/canvas/src/Canvas.ts#L159)

___

### translate

▸ **translate**(`_x`, `_y`): `void`

#### Parameters

| Name | Type     |
| :--- | :------- |
| `_x` | `number` |
| `_y` | `number` |

#### Returns

`void`

#### Inherited from

[LeaferCanvasBase](LeaferCanvasBase.md).[translate](LeaferCanvasBase.md#translate)

#### Defined in

[src/leafer/packages/canvas/canvas/src/Canvas.ts:168](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/canvas/canvas/src/Canvas.ts#L168)

___

### scale

▸ **scale**(`_x`, `_y`): `void`

#### Parameters

| Name | Type     |
| :--- | :------- |
| `_x` | `number` |
| `_y` | `number` |

#### Returns

`void`

#### Inherited from

[LeaferCanvasBase](LeaferCanvasBase.md).[scale](LeaferCanvasBase.md#scale)

#### Defined in

[src/leafer/packages/canvas/canvas/src/Canvas.ts:171](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/canvas/canvas/src/Canvas.ts#L171)

___

### rotate

▸ **rotate**(`_angle`): `void`

#### Parameters

| Name     | Type     |
| :------- | :------- |
| `_angle` | `number` |

#### Returns

`void`

#### Inherited from

[LeaferCanvasBase](LeaferCanvasBase.md).[rotate](LeaferCanvasBase.md#rotate)

#### Defined in

[src/leafer/packages/canvas/canvas/src/Canvas.ts:174](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/canvas/canvas/src/Canvas.ts#L174)

___

### fill

▸ **fill**(`_path2d?`, `_rule?`): `void`

#### Parameters

| Name       | Type                                                                                    |
| :--------- | :-------------------------------------------------------------------------------------- |
| `_path2d?` | [`IWindingRule`](../modules.md#iwindingrule) \\| [`IPath2D`](../interfaces/IPath2D.md) |
| `_rule?`   | [`IWindingRule`](../modules.md#iwindingrule)                                            |

#### Returns

`void`

#### Inherited from

[LeaferCanvasBase](LeaferCanvasBase.md).[fill](LeaferCanvasBase.md#fill)

#### Defined in

[src/leafer/packages/canvas/canvas/src/Canvas.ts:177](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/canvas/canvas/src/Canvas.ts#L177)

___

### stroke

▸ **stroke**(`_path2d?`): `void`

#### Parameters

| Name       | Type                                  |
| :--------- | :------------------------------------ |
| `_path2d?` | [`IPath2D`](../interfaces/IPath2D.md) |

#### Returns

`void`

#### Inherited from

[LeaferCanvasBase](LeaferCanvasBase.md).[stroke](LeaferCanvasBase.md#stroke)

#### Defined in

[src/leafer/packages/canvas/canvas/src/Canvas.ts:180](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/canvas/canvas/src/Canvas.ts#L180)

___

### clip

▸ **clip**(`_path2d?`, `_rule?`): `void`

#### Parameters

| Name       | Type                                                                                    |
| :--------- | :-------------------------------------------------------------------------------------- |
| `_path2d?` | [`IWindingRule`](../modules.md#iwindingrule) \\| [`IPath2D`](../interfaces/IPath2D.md) |
| `_rule?`   | [`IWindingRule`](../modules.md#iwindingrule)                                            |

#### Returns

`void`

#### Inherited from

[LeaferCanvasBase](LeaferCanvasBase.md).[clip](LeaferCanvasBase.md#clip)

#### Defined in

[src/leafer/packages/canvas/canvas/src/Canvas.ts:183](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/canvas/canvas/src/Canvas.ts#L183)

___

### fillRect

▸ **fillRect**(`_x`, `_y`, `_width`, `_height`): `void`

#### Parameters

| Name      | Type     |
| :-------- | :------- |
| `_x`      | `number` |
| `_y`      | `number` |
| `_width`  | `number` |
| `_height` | `number` |

#### Returns

`void`

#### Inherited from

[LeaferCanvasBase](LeaferCanvasBase.md).[fillRect](LeaferCanvasBase.md#fillrect)

#### Defined in

[src/leafer/packages/canvas/canvas/src/Canvas.ts:186](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/canvas/canvas/src/Canvas.ts#L186)

___

### strokeRect

▸ **strokeRect**(`_x`, `_y`, `_width`, `_height`): `void`

#### Parameters

| Name      | Type     |
| :-------- | :------- |
| `_x`      | `number` |
| `_y`      | `number` |
| `_width`  | `number` |
| `_height` | `number` |

#### Returns

`void`

#### Inherited from

[LeaferCanvasBase](LeaferCanvasBase.md).[strokeRect](LeaferCanvasBase.md#strokerect)

#### Defined in

[src/leafer/packages/canvas/canvas/src/Canvas.ts:189](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/canvas/canvas/src/Canvas.ts#L189)

___

### clearRect

▸ **clearRect**(`_x`, `_y`, `_width`, `_height`): `void`

#### Parameters

| Name      | Type     |
| :-------- | :------- |
| `_x`      | `number` |
| `_y`      | `number` |
| `_width`  | `number` |
| `_height` | `number` |

#### Returns

`void`

#### Inherited from

[LeaferCanvasBase](LeaferCanvasBase.md).[clearRect](LeaferCanvasBase.md#clearrect)

#### Defined in

[src/leafer/packages/canvas/canvas/src/Canvas.ts:192](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/canvas/canvas/src/Canvas.ts#L192)

___

### drawImage

▸ **drawImage**(`image`, `sx`, `sy`, `sw?`, `sh?`, `dx?`, `dy?`, `dw?`, `dh?`): `void`

#### Parameters

| Name    | Type                |
| :------ | :------------------ |
| `image` | `CanvasImageSource` |
| `sx`    | `number`            |
| `sy`    | `number`            |
| `sw?`   | `number`            |
| `sh?`   | `number`            |
| `dx?`   | `number`            |
| `dy?`   | `number`            |
| `dw?`   | `number`            |
| `dh?`   | `number`            |

#### Returns

`void`

#### Inherited from

[LeaferCanvasBase](LeaferCanvasBase.md).[drawImage](LeaferCanvasBase.md#drawimage)

#### Defined in

[src/leafer/packages/canvas/canvas/src/Canvas.ts:194](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/canvas/canvas/src/Canvas.ts#L194)

___

### beginPath

▸ **beginPath**(): `void`

#### Returns

`void`

#### Inherited from

[LeaferCanvasBase](LeaferCanvasBase.md).[beginPath](LeaferCanvasBase.md#beginpath)

#### Defined in

[src/leafer/packages/canvas/canvas/src/Canvas.ts:228](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/canvas/canvas/src/Canvas.ts#L228)

___

### moveTo

▸ **moveTo**(`_x`, `_y`): `void`

#### Parameters

| Name | Type     |
| :--- | :------- |
| `_x` | `number` |
| `_y` | `number` |

#### Returns

`void`

#### Inherited from

[LeaferCanvasBase](LeaferCanvasBase.md).[moveTo](LeaferCanvasBase.md#moveto)

#### Defined in

[src/leafer/packages/canvas/canvas/src/Canvas.ts:231](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/canvas/canvas/src/Canvas.ts#L231)

___

### lineTo

▸ **lineTo**(`_x`, `_y`): `void`

#### Parameters

| Name | Type     |
| :--- | :------- |
| `_x` | `number` |
| `_y` | `number` |

#### Returns

`void`

#### Inherited from

[LeaferCanvasBase](LeaferCanvasBase.md).[lineTo](LeaferCanvasBase.md#lineto)

#### Defined in

[src/leafer/packages/canvas/canvas/src/Canvas.ts:234](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/canvas/canvas/src/Canvas.ts#L234)

___

### bezierCurveTo

▸ **bezierCurveTo**(`_cp1x`, `_cp1y`, `_cp2x`, `_cp2y`, `_x`, `_y`): `void`

#### Parameters

| Name    | Type     |
| :------ | :------- |
| `_cp1x` | `number` |
| `_cp1y` | `number` |
| `_cp2x` | `number` |
| `_cp2y` | `number` |
| `_x`    | `number` |
| `_y`    | `number` |

#### Returns

`void`

#### Inherited from

[LeaferCanvasBase](LeaferCanvasBase.md).[bezierCurveTo](LeaferCanvasBase.md#beziercurveto)

#### Defined in

[src/leafer/packages/canvas/canvas/src/Canvas.ts:237](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/canvas/canvas/src/Canvas.ts#L237)

___

### quadraticCurveTo

▸ **quadraticCurveTo**(`_cpx`, `_cpy`, `_x`, `_y`): `void`

#### Parameters

| Name   | Type     |
| :----- | :------- |
| `_cpx` | `number` |
| `_cpy` | `number` |
| `_x`   | `number` |
| `_y`   | `number` |

#### Returns

`void`

#### Inherited from

[LeaferCanvasBase](LeaferCanvasBase.md).[quadraticCurveTo](LeaferCanvasBase.md#quadraticcurveto)

#### Defined in

[src/leafer/packages/canvas/canvas/src/Canvas.ts:240](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/canvas/canvas/src/Canvas.ts#L240)

___

### closePath

▸ **closePath**(): `void`

#### Returns

`void`

#### Inherited from

[LeaferCanvasBase](LeaferCanvasBase.md).[closePath](LeaferCanvasBase.md#closepath)

#### Defined in

[src/leafer/packages/canvas/canvas/src/Canvas.ts:243](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/canvas/canvas/src/Canvas.ts#L243)

___

### arc

▸ **arc**(`_x`, `_y`, `_radius`, `_startAngle`, `_endAngle`, `_anticlockwise?`): `void`

#### Parameters

| Name              | Type      |
| :---------------- | :-------- |
| `_x`              | `number`  |
| `_y`              | `number`  |
| `_radius`         | `number`  |
| `_startAngle`     | `number`  |
| `_endAngle`       | `number`  |
| `_anticlockwise?` | `boolean` |

#### Returns

`void`

#### Inherited from

[LeaferCanvasBase](LeaferCanvasBase.md).[arc](LeaferCanvasBase.md#arc)

#### Defined in

[src/leafer/packages/canvas/canvas/src/Canvas.ts:246](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/canvas/canvas/src/Canvas.ts#L246)

___

### arcTo

▸ **arcTo**(`_x1`, `_y1`, `_x2`, `_y2`, `_radius`): `void`

#### Parameters

| Name      | Type     |
| :-------- | :------- |
| `_x1`     | `number` |
| `_y1`     | `number` |
| `_x2`     | `number` |
| `_y2`     | `number` |
| `_radius` | `number` |

#### Returns

`void`

#### Inherited from

[LeaferCanvasBase](LeaferCanvasBase.md).[arcTo](LeaferCanvasBase.md#arcto)

#### Defined in

[src/leafer/packages/canvas/canvas/src/Canvas.ts:249](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/canvas/canvas/src/Canvas.ts#L249)

___

### ellipse

▸ **ellipse**(`_x`, `_y`, `_radiusX`, `_radiusY`, `_rotation`, `_startAngle`, `_endAngle`, `_anticlockwise?`): `void`

#### Parameters

| Name              | Type      |
| :---------------- | :-------- |
| `_x`              | `number`  |
| `_y`              | `number`  |
| `_radiusX`        | `number`  |
| `_radiusY`        | `number`  |
| `_rotation`       | `number`  |
| `_startAngle`     | `number`  |
| `_endAngle`       | `number`  |
| `_anticlockwise?` | `boolean` |

#### Returns

`void`

#### Inherited from

[LeaferCanvasBase](LeaferCanvasBase.md).[ellipse](LeaferCanvasBase.md#ellipse)

#### Defined in

[src/leafer/packages/canvas/canvas/src/Canvas.ts:252](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/canvas/canvas/src/Canvas.ts#L252)

___

### rect

▸ **rect**(`_x`, `_y`, `_width`, `_height`): `void`

#### Parameters

| Name      | Type     |
| :-------- | :------- |
| `_x`      | `number` |
| `_y`      | `number` |
| `_width`  | `number` |
| `_height` | `number` |

#### Returns

`void`

#### Inherited from

[LeaferCanvasBase](LeaferCanvasBase.md).[rect](LeaferCanvasBase.md#rect)

#### Defined in

[src/leafer/packages/canvas/canvas/src/Canvas.ts:255](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/canvas/canvas/src/Canvas.ts#L255)

___

### roundRect

▸ **roundRect**(`_x`, `_y`, `_width`, `_height`, `_radius?`): `void`

#### Parameters

| Name       | Type                                                                         |
| :--------- | :--------------------------------------------------------------------------- |
| `_x`       | `number`                                                                     |
| `_y`       | `number`                                                                     |
| `_width`   | `number`                                                                     |
| `_height`  | `number`                                                                     |
| `_radius?` | `number` \\| `number`[] |

#### Returns

`void`

#### Inherited from

[LeaferCanvasBase](LeaferCanvasBase.md).[roundRect](LeaferCanvasBase.md#roundrect)

#### Defined in

[src/leafer/packages/canvas/canvas/src/Canvas.ts:258](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/canvas/canvas/src/Canvas.ts#L258)

___

### createConicGradient

▸ **createConicGradient**(`_startAngle`, `_x`, `_y`): `CanvasGradient`

#### Parameters

| Name          | Type     |
| :------------ | :------- |
| `_startAngle` | `number` |
| `_x`          | `number` |
| `_y`          | `number` |

#### Returns

`CanvasGradient`

#### Inherited from

[LeaferCanvasBase](LeaferCanvasBase.md).[createConicGradient](LeaferCanvasBase.md#createconicgradient)

#### Defined in

[src/leafer/packages/canvas/canvas/src/Canvas.ts:265](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/canvas/canvas/src/Canvas.ts#L265)

___

### createLinearGradient

▸ **createLinearGradient**(`_x0`, `_y0`, `_x1`, `_y1`): `CanvasGradient`

#### Parameters

| Name  | Type     |
| :---- | :------- |
| `_x0` | `number` |
| `_y0` | `number` |
| `_x1` | `number` |
| `_y1` | `number` |

#### Returns

`CanvasGradient`

#### Inherited from

[LeaferCanvasBase](LeaferCanvasBase.md).[createLinearGradient](LeaferCanvasBase.md#createlineargradient)

#### Defined in

[src/leafer/packages/canvas/canvas/src/Canvas.ts:268](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/canvas/canvas/src/Canvas.ts#L268)

___

### createPattern

▸ **createPattern**(`_image`, `_repetition`): `CanvasPattern`

#### Parameters

| Name          | Type                |
| :------------ | :------------------ |
| `_image`      | `CanvasImageSource` |
| `_repetition` | `string`            |

#### Returns

`CanvasPattern`

#### Inherited from

[LeaferCanvasBase](LeaferCanvasBase.md).[createPattern](LeaferCanvasBase.md#createpattern)

#### Defined in

[src/leafer/packages/canvas/canvas/src/Canvas.ts:271](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/canvas/canvas/src/Canvas.ts#L271)

___

### createRadialGradient

▸ **createRadialGradient**(`_x0`, `_y0`, `_r0`, `_x1`, `_y1`, `_r1`): `CanvasGradient`

#### Parameters

| Name  | Type     |
| :---- | :------- |
| `_x0` | `number` |
| `_y0` | `number` |
| `_r0` | `number` |
| `_x1` | `number` |
| `_y1` | `number` |
| `_r1` | `number` |

#### Returns

`CanvasGradient`

#### Inherited from

[LeaferCanvasBase](LeaferCanvasBase.md).[createRadialGradient](LeaferCanvasBase.md#createradialgradient)

#### Defined in

[src/leafer/packages/canvas/canvas/src/Canvas.ts:274](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/canvas/canvas/src/Canvas.ts#L274)

___

### fillText

▸ **fillText**(`_text`, `_x`, `_y`, `_maxWidth?`): `void`

#### Parameters

| Name         | Type     |
| :----------- | :------- |
| `_text`      | `string` |
| `_x`         | `number` |
| `_y`         | `number` |
| `_maxWidth?` | `number` |

#### Returns

`void`

#### Inherited from

[LeaferCanvasBase](LeaferCanvasBase.md).[fillText](LeaferCanvasBase.md#filltext)

#### Defined in

[src/leafer/packages/canvas/canvas/src/Canvas.ts:278](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/canvas/canvas/src/Canvas.ts#L278)

___

### measureText

▸ **measureText**(`_text`): [`ITextMetrics`](../interfaces/ITextMetrics.md)

#### Parameters

| Name    | Type     |
| :------ | :------- |
| `_text` | `string` |

#### Returns

[`ITextMetrics`](../interfaces/ITextMetrics.md)

#### Inherited from

[LeaferCanvasBase](LeaferCanvasBase.md).[measureText](LeaferCanvasBase.md#measuretext)

#### Defined in

[src/leafer/packages/canvas/canvas/src/Canvas.ts:281](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/canvas/canvas/src/Canvas.ts#L281)

___

### strokeText

▸ **strokeText**(`_text`, `_x`, `_y`, `_maxWidth?`): `void`

#### Parameters

| Name         | Type     |
| :----------- | :------- |
| `_text`      | `string` |
| `_x`         | `number` |
| `_y`         | `number` |
| `_maxWidth?` | `number` |

#### Returns

`void`

#### Inherited from

[LeaferCanvasBase](LeaferCanvasBase.md).[strokeText](LeaferCanvasBase.md#stroketext)

#### Defined in

[src/leafer/packages/canvas/canvas/src/Canvas.ts:284](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/canvas/canvas/src/Canvas.ts#L284)

___

### \_\_createContext

▸ **__createContext**(): `void`

#### Returns

`void`

#### Inherited from

[LeaferCanvasBase](LeaferCanvasBase.md).[__createContext](LeaferCanvasBase.md#__createcontext)

#### Defined in

[src/leafer/packages/canvas/canvas/src/LeaferCanvasBase.ts:72](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/canvas/canvas/src/LeaferCanvasBase.ts#L72)

___

### export

▸ **export**(`_filename`, `_options?`): `string` \| `Promise`\<`any`\>

#### Parameters

| Name        | Type                                                                             |
| :---------- | :------------------------------------------------------------------------------- |
| `_filename` | `string`                                                                         |
| `_options?` | `number` \\| `boolean` \\| [`IExportOptions`](../interfaces/IExportOptions.md) |

#### Returns

`string` \| `Promise`\<`any`\>

#### Inherited from

[LeaferCanvasBase](LeaferCanvasBase.md).[export](LeaferCanvasBase.md#export)

#### Defined in

[src/leafer/packages/canvas/canvas/src/LeaferCanvasBase.ts:81](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/canvas/canvas/src/LeaferCanvasBase.ts#L81)

___

### toBlob

▸ **toBlob**(`_type?`, `_quality?`): `Promise`\<`any`\>

#### Parameters

| Name        | Type                                               |
| :---------- | :------------------------------------------------- |
| `_type?`    | [`IExportFileType`](../modules.md#iexportfiletype) |
| `_quality?` | `number`                                           |

#### Returns

`Promise`\<`any`\>

#### Inherited from

[LeaferCanvasBase](LeaferCanvasBase.md).[toBlob](LeaferCanvasBase.md#toblob)

#### Defined in

[src/leafer/packages/canvas/canvas/src/LeaferCanvasBase.ts:83](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/canvas/canvas/src/LeaferCanvasBase.ts#L83)

___

### toDataURL

▸ **toDataURL**(`_type?`, `_quality?`): `string` \| `Promise`\<`string`\>

#### Parameters

| Name        | Type                                                 |
| :---------- | :--------------------------------------------------- |
| `_type?`    | [`IExportImageType`](../modules.md#iexportimagetype) |
| `_quality?` | `number`                                             |

#### Returns

`string` \| `Promise`\<`string`\>

#### Inherited from

[LeaferCanvasBase](LeaferCanvasBase.md).[toDataURL](LeaferCanvasBase.md#todataurl)

#### Defined in

[src/leafer/packages/canvas/canvas/src/LeaferCanvasBase.ts:85](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/canvas/canvas/src/LeaferCanvasBase.ts#L85)

___

### saveAs

▸ **saveAs**(`_filename`, `_quality?`): `Promise`\<`boolean`\>

#### Parameters

| Name        | Type     |
| :---------- | :------- |
| `_filename` | `string` |
| `_quality?` | `number` |

#### Returns

`Promise`\<`boolean`\>

#### Inherited from

[LeaferCanvasBase](LeaferCanvasBase.md).[saveAs](LeaferCanvasBase.md#saveas)

#### Defined in

[src/leafer/packages/canvas/canvas/src/LeaferCanvasBase.ts:87](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/canvas/canvas/src/LeaferCanvasBase.ts#L87)

___

### resize

▸ **resize**(`size`, `safeResize?`): `void`

#### Parameters

| Name         | Type                                                  | Default value |
| :----------- | :---------------------------------------------------- | :------------ |
| `size`       | [`IScreenSizeData`](../interfaces/IScreenSizeData.md) | `undefined`   |
| `safeResize` | `boolean`                                             | `true`        |

#### Returns

`void`

#### Inherited from

[LeaferCanvasBase](LeaferCanvasBase.md).[resize](LeaferCanvasBase.md#resize)

#### Defined in

[src/leafer/packages/canvas/canvas/src/LeaferCanvasBase.ts:91](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/canvas/canvas/src/LeaferCanvasBase.ts#L91)

___

### getClientBounds

▸ **getClientBounds**(`update?`): [`IBoundsData`](../interfaces/IBoundsData.md)

#### Parameters

| Name      | Type      |
| :-------- | :-------- |
| `update?` | `boolean` |

#### Returns

[`IBoundsData`](../interfaces/IBoundsData.md)

#### Inherited from

[LeaferCanvasBase](LeaferCanvasBase.md).[getClientBounds](LeaferCanvasBase.md#getclientbounds)

#### Defined in

[src/leafer/packages/canvas/canvas/src/LeaferCanvasBase.ts:125](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/canvas/canvas/src/LeaferCanvasBase.ts#L125)

___

### setCursor

▸ **setCursor**(`_cursor`): `void`

#### Parameters

| Name      | Type                                                                                                                                             |
| :-------- | :----------------------------------------------------------------------------------------------------------------------------------------------- |
| `_cursor` | [`ICursorType`](../modules.md#icursortype) \\| [`ICursorType`](../modules.md#icursortype)[] |

#### Returns

`void`

#### Inherited from

[LeaferCanvasBase](LeaferCanvasBase.md).[setCursor](LeaferCanvasBase.md#setcursor)

#### Defined in

[src/leafer/packages/canvas/canvas/src/LeaferCanvasBase.ts:133](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/canvas/canvas/src/LeaferCanvasBase.ts#L133)

___

### setWorld

▸ **setWorld**(`matrix`, `parentMatrix?`): `void`

#### Parameters

| Name            | Type                                                                      |
| :-------------- | :------------------------------------------------------------------------ |
| `matrix`        | [`IMatrixWithOptionHalfData`](../interfaces/IMatrixWithOptionHalfData.md) |
| `parentMatrix?` | [`IMatrixData`](../interfaces/IMatrixData.md)                             |

#### Returns

`void`

#### Inherited from

[LeaferCanvasBase](LeaferCanvasBase.md).[setWorld](LeaferCanvasBase.md#setworld)

#### Defined in

[src/leafer/packages/canvas/canvas/src/LeaferCanvasBase.ts:135](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/canvas/canvas/src/LeaferCanvasBase.ts#L135)

___

### useWorldTransform

▸ **useWorldTransform**(`worldTransform?`): `void`

#### Parameters

| Name              | Type                                          |
| :---------------- | :-------------------------------------------- |
| `worldTransform?` | [`IMatrixData`](../interfaces/IMatrixData.md) |

#### Returns

`void`

#### Inherited from

[LeaferCanvasBase](LeaferCanvasBase.md).[useWorldTransform](LeaferCanvasBase.md#useworldtransform)

#### Defined in

[src/leafer/packages/canvas/canvas/src/LeaferCanvasBase.ts:149](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/canvas/canvas/src/LeaferCanvasBase.ts#L149)

___

### setStroke

▸ **setStroke**(`color`, `strokeWidth`, `options?`, `childOptions?`): `void`

#### Parameters

| Name            | Type                                                            |
| :-------------- | :-------------------------------------------------------------- |
| `color`         | `string` \\| `object`                                          |
| `strokeWidth`   | `number`                                                        |
| `options?`      | [`ICanvasStrokeOptions`](../interfaces/ICanvasStrokeOptions.md) |
| `childOptions?` | [`ICanvasStrokeOptions`](../interfaces/ICanvasStrokeOptions.md) |

#### Returns

`void`

#### Inherited from

[LeaferCanvasBase](LeaferCanvasBase.md).[setStroke](LeaferCanvasBase.md#setstroke)

#### Defined in

[src/leafer/packages/canvas/canvas/src/LeaferCanvasBase.ts:155](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/canvas/canvas/src/LeaferCanvasBase.ts#L155)

___

### setStrokeOptions

▸ **setStrokeOptions**(`options`, `childOptions?`): `void`

#### Parameters

| Name            | Type                                                            |
| :-------------- | :-------------------------------------------------------------- |
| `options`       | [`ICanvasStrokeOptions`](../interfaces/ICanvasStrokeOptions.md) |
| `childOptions?` | [`ICanvasStrokeOptions`](../interfaces/ICanvasStrokeOptions.md) |

#### Returns

`void`

#### Inherited from

[LeaferCanvasBase](LeaferCanvasBase.md).[setStrokeOptions](LeaferCanvasBase.md#setstrokeoptions)

#### Defined in

[src/leafer/packages/canvas/canvas/src/LeaferCanvasBase.ts:161](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/canvas/canvas/src/LeaferCanvasBase.ts#L161)

___

### saveBlendMode

▸ **saveBlendMode**(`blendMode`): `void`

#### Parameters

| Name        | Type                                     |
| :---------- | :--------------------------------------- |
| `blendMode` | [`IBlendMode`](../modules.md#iblendmode) |

#### Returns

`void`

#### Inherited from

[LeaferCanvasBase](LeaferCanvasBase.md).[saveBlendMode](LeaferCanvasBase.md#saveblendmode)

#### Defined in

[src/leafer/packages/canvas/canvas/src/LeaferCanvasBase.ts:177](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/canvas/canvas/src/LeaferCanvasBase.ts#L177)

___

### restoreBlendMode

▸ **restoreBlendMode**(): `void`

#### Returns

`void`

#### Inherited from

[LeaferCanvasBase](LeaferCanvasBase.md).[restoreBlendMode](LeaferCanvasBase.md#restoreblendmode)

#### Defined in

[src/leafer/packages/canvas/canvas/src/LeaferCanvasBase.ts:182](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/canvas/canvas/src/LeaferCanvasBase.ts#L182)

___

### hitFill

▸ **hitFill**(`_point`, `_fillRule?`): `boolean`

#### Parameters

| Name         | Type                                         |
| :----------- | :------------------------------------------- |
| `_point`     | [`IPointData`](../interfaces/IPointData.md)  |
| `_fillRule?` | [`IWindingRule`](../modules.md#iwindingrule) |

#### Returns

`boolean`

#### Inherited from

[LeaferCanvasBase](LeaferCanvasBase.md).[hitFill](LeaferCanvasBase.md#hitfill)

#### Defined in

[src/leafer/packages/canvas/canvas/src/LeaferCanvasBase.ts:188](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/canvas/canvas/src/LeaferCanvasBase.ts#L188)

___

### hitStroke

▸ **hitStroke**(`_point`, `_strokeWidth?`): `boolean`

#### Parameters

| Name            | Type                                        |
| :-------------- | :------------------------------------------ |
| `_point`        | [`IPointData`](../interfaces/IPointData.md) |
| `_strokeWidth?` | `number`                                    |

#### Returns

`boolean`

#### Inherited from

[LeaferCanvasBase](LeaferCanvasBase.md).[hitStroke](LeaferCanvasBase.md#hitstroke)

#### Defined in

[src/leafer/packages/canvas/canvas/src/LeaferCanvasBase.ts:190](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/canvas/canvas/src/LeaferCanvasBase.ts#L190)

___

### hitPixel

▸ **hitPixel**(`_radiusPoint`, `_offset?`, `_scale?`): `boolean`

#### Parameters

| Name           | Type                                                    | Default value |
| :------------- | :------------------------------------------------------ | :------------ |
| `_radiusPoint` | [`IRadiusPointData`](../interfaces/IRadiusPointData.md) | `undefined`   |
| `_offset?`     | [`IPointData`](../interfaces/IPointData.md)             | `undefined`   |
| `_scale`       | `number`                                                | `1`           |

#### Returns

`boolean`

#### Inherited from

[LeaferCanvasBase](LeaferCanvasBase.md).[hitPixel](LeaferCanvasBase.md#hitpixel)

#### Defined in

[src/leafer/packages/canvas/canvas/src/LeaferCanvasBase.ts:192](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/canvas/canvas/src/LeaferCanvasBase.ts#L192)

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

[LeaferCanvasBase](LeaferCanvasBase.md).[setWorldShadow](LeaferCanvasBase.md#setworldshadow)

#### Defined in

[src/leafer/packages/canvas/canvas/src/LeaferCanvasBase.ts:196](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/canvas/canvas/src/LeaferCanvasBase.ts#L196)

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

[LeaferCanvasBase](LeaferCanvasBase.md).[setWorldBlur](LeaferCanvasBase.md#setworldblur)

#### Defined in

[src/leafer/packages/canvas/canvas/src/LeaferCanvasBase.ts:204](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/canvas/canvas/src/LeaferCanvasBase.ts#L204)

___

### copyWorld

▸ **copyWorld**(`canvas`, `from?`, `to?`, `blendMode?`, `ceilPixel?`): `void`

#### Parameters

| Name         | Type                                              |
| :----------- | :------------------------------------------------ |
| `canvas`     | [`ILeaferCanvas`](../interfaces/ILeaferCanvas.md) |
| `from?`      | [`IBoundsData`](../interfaces/IBoundsData.md)     |
| `to?`        | [`IBoundsData`](../interfaces/IBoundsData.md)     |
| `blendMode?` | [`IBlendMode`](../modules.md#iblendmode)          |
| `ceilPixel?` | `boolean`                                         |

#### Returns

`void`

#### Inherited from

[LeaferCanvasBase](LeaferCanvasBase.md).[copyWorld](LeaferCanvasBase.md#copyworld)

#### Defined in

[src/leafer/packages/canvas/canvas/src/LeaferCanvasBase.ts:210](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/canvas/canvas/src/LeaferCanvasBase.ts#L210)

___

### copyWorldToInner

▸ **copyWorldToInner**(`canvas`, `fromWorld`, `toInnerBounds`, `blendMode?`, `ceilPixel?`): `void`

#### Parameters

| Name            | Type                                                              |
| :-------------- | :---------------------------------------------------------------- |
| `canvas`        | [`ILeaferCanvas`](../interfaces/ILeaferCanvas.md)                 |
| `fromWorld`     | [`IMatrixWithBoundsData`](../interfaces/IMatrixWithBoundsData.md) |
| `toInnerBounds` | [`IBoundsData`](../interfaces/IBoundsData.md)                     |
| `blendMode?`    | [`IBlendMode`](../modules.md#iblendmode)                          |
| `ceilPixel?`    | `boolean`                                                         |

#### Returns

`void`

#### Inherited from

[LeaferCanvasBase](LeaferCanvasBase.md).[copyWorldToInner](LeaferCanvasBase.md#copyworldtoinner)

#### Defined in

[src/leafer/packages/canvas/canvas/src/LeaferCanvasBase.ts:224](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/canvas/canvas/src/LeaferCanvasBase.ts#L224)

___

### copyWorldByReset

▸ **copyWorldByReset**(`canvas`, `from?`, `to?`, `blendMode?`, `onlyResetTransform?`, `ceilPixel?`): `void`

#### Parameters

| Name                  | Type                                              |
| :-------------------- | :------------------------------------------------ |
| `canvas`              | [`ILeaferCanvas`](../interfaces/ILeaferCanvas.md) |
| `from?`               | [`IBoundsData`](../interfaces/IBoundsData.md)     |
| `to?`                 | [`IBoundsData`](../interfaces/IBoundsData.md)     |
| `blendMode?`          | [`IBlendMode`](../modules.md#iblendmode)          |
| `onlyResetTransform?` | `boolean`                                         |
| `ceilPixel?`          | `boolean`                                         |

#### Returns

`void`

#### Inherited from

[LeaferCanvasBase](LeaferCanvasBase.md).[copyWorldByReset](LeaferCanvasBase.md#copyworldbyreset)

#### Defined in

[src/leafer/packages/canvas/canvas/src/LeaferCanvasBase.ts:238](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/canvas/canvas/src/LeaferCanvasBase.ts#L238)

___

### useGrayscaleAlpha

▸ **useGrayscaleAlpha**(`bounds`): `void`

#### Parameters

| Name     | Type                                          |
| :------- | :-------------------------------------------- |
| `bounds` | [`IBoundsData`](../interfaces/IBoundsData.md) |

#### Returns

`void`

#### Inherited from

[LeaferCanvasBase](LeaferCanvasBase.md).[useGrayscaleAlpha](LeaferCanvasBase.md#usegrayscalealpha)

#### Defined in

[src/leafer/packages/canvas/canvas/src/LeaferCanvasBase.ts:244](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/canvas/canvas/src/LeaferCanvasBase.ts#L244)

___

### useMask

▸ **useMask**(`maskCanvas`, `fromBounds?`, `toBounds?`): `void`

#### Parameters

| Name          | Type                                              |
| :------------ | :------------------------------------------------ |
| `maskCanvas`  | [`ILeaferCanvas`](../interfaces/ILeaferCanvas.md) |
| `fromBounds?` | [`IBoundsData`](../interfaces/IBoundsData.md)     |
| `toBounds?`   | [`IBoundsData`](../interfaces/IBoundsData.md)     |

#### Returns

`void`

#### Inherited from

[LeaferCanvasBase](LeaferCanvasBase.md).[useMask](LeaferCanvasBase.md#usemask)

#### Defined in

[src/leafer/packages/canvas/canvas/src/LeaferCanvasBase.ts:258](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/canvas/canvas/src/LeaferCanvasBase.ts#L258)

___

### useEraser

▸ **useEraser**(`eraserCanvas`, `fromBounds?`, `toBounds?`): `void`

#### Parameters

| Name           | Type                                              |
| :------------- | :------------------------------------------------ |
| `eraserCanvas` | [`ILeaferCanvas`](../interfaces/ILeaferCanvas.md) |
| `fromBounds?`  | [`IBoundsData`](../interfaces/IBoundsData.md)     |
| `toBounds?`    | [`IBoundsData`](../interfaces/IBoundsData.md)     |

#### Returns

`void`

#### Inherited from

[LeaferCanvasBase](LeaferCanvasBase.md).[useEraser](LeaferCanvasBase.md#useeraser)

#### Defined in

[src/leafer/packages/canvas/canvas/src/LeaferCanvasBase.ts:262](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/canvas/canvas/src/LeaferCanvasBase.ts#L262)

___

### fillWorld

▸ **fillWorld**(`bounds`, `color`, `blendMode?`, `ceilPixel?`): `void`

#### Parameters

| Name         | Type                                          |
| :----------- | :-------------------------------------------- |
| `bounds`     | [`IBoundsData`](../interfaces/IBoundsData.md) |
| `color`      | `string` \\| `object`                        |
| `blendMode?` | [`IBlendMode`](../modules.md#iblendmode)      |
| `ceilPixel?` | `boolean`                                     |

#### Returns

`void`

#### Inherited from

[LeaferCanvasBase](LeaferCanvasBase.md).[fillWorld](LeaferCanvasBase.md#fillworld)

#### Defined in

[src/leafer/packages/canvas/canvas/src/LeaferCanvasBase.ts:266](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/canvas/canvas/src/LeaferCanvasBase.ts#L266)

___

### strokeWorld

▸ **strokeWorld**(`bounds`, `color`, `blendMode?`, `ceilPixel?`): `void`

#### Parameters

| Name         | Type                                          |
| :----------- | :-------------------------------------------- |
| `bounds`     | [`IBoundsData`](../interfaces/IBoundsData.md) |
| `color`      | `string` \\| `object`                        |
| `blendMode?` | [`IBlendMode`](../modules.md#iblendmode)      |
| `ceilPixel?` | `boolean`                                     |

#### Returns

`void`

#### Inherited from

[LeaferCanvasBase](LeaferCanvasBase.md).[strokeWorld](LeaferCanvasBase.md#strokeworld)

#### Defined in

[src/leafer/packages/canvas/canvas/src/LeaferCanvasBase.ts:274](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/canvas/canvas/src/LeaferCanvasBase.ts#L274)

___

### clipWorld

▸ **clipWorld**(`bounds`, `ceilPixel?`): `void`

#### Parameters

| Name        | Type                                          | Default value |
| :---------- | :-------------------------------------------- | :------------ |
| `bounds`    | [`IBoundsData`](../interfaces/IBoundsData.md) | `undefined`   |
| `ceilPixel` | `boolean`                                     | `true`        |

#### Returns

`void`

#### Inherited from

[LeaferCanvasBase](LeaferCanvasBase.md).[clipWorld](LeaferCanvasBase.md#clipworld)

#### Defined in

[src/leafer/packages/canvas/canvas/src/LeaferCanvasBase.ts:282](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/canvas/canvas/src/LeaferCanvasBase.ts#L282)

___

### clipUI

▸ **clipUI**(`ruleData`): `void`

#### Parameters

| Name       | Type                                                    |
| :--------- | :------------------------------------------------------ |
| `ruleData` | [`IWindingRuleData`](../interfaces/IWindingRuleData.md) |

#### Returns

`void`

#### Inherited from

[LeaferCanvasBase](LeaferCanvasBase.md).[clipUI](LeaferCanvasBase.md#clipui)

#### Defined in

[src/leafer/packages/canvas/canvas/src/LeaferCanvasBase.ts:290](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/canvas/canvas/src/LeaferCanvasBase.ts#L290)

___

### clearWorld

▸ **clearWorld**(`bounds`, `ceilPixel?`): `void`

#### Parameters

| Name        | Type                                          | Default value |
| :---------- | :-------------------------------------------- | :------------ |
| `bounds`    | [`IBoundsData`](../interfaces/IBoundsData.md) | `undefined`   |
| `ceilPixel` | `boolean`                                     | `true`        |

#### Returns

`void`

#### Inherited from

[LeaferCanvasBase](LeaferCanvasBase.md).[clearWorld](LeaferCanvasBase.md#clearworld)

#### Defined in

[src/leafer/packages/canvas/canvas/src/LeaferCanvasBase.ts:294](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/canvas/canvas/src/LeaferCanvasBase.ts#L294)

___

### clear

▸ **clear**(): `void`

#### Returns

`void`

#### Inherited from

[LeaferCanvasBase](LeaferCanvasBase.md).[clear](LeaferCanvasBase.md#clear)

#### Defined in

[src/leafer/packages/canvas/canvas/src/LeaferCanvasBase.ts:299](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/canvas/canvas/src/LeaferCanvasBase.ts#L299)

___

### setTempPixelBounds

▸ **setTempPixelBounds**(`bounds`, `ceil?`, `intersect?`): `void`

#### Parameters

| Name         | Type                                          |
| :----------- | :-------------------------------------------- |
| `bounds`     | [`IBoundsData`](../interfaces/IBoundsData.md) |
| `ceil?`      | `boolean`                                     |
| `intersect?` | `boolean`                                     |

#### Returns

`void`

#### Inherited from

[LeaferCanvasBase](LeaferCanvasBase.md).[setTempPixelBounds](LeaferCanvasBase.md#settemppixelbounds)

#### Defined in

[src/leafer/packages/canvas/canvas/src/LeaferCanvasBase.ts:307](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/canvas/canvas/src/LeaferCanvasBase.ts#L307)

___

### setTempPixelBounds2

▸ **setTempPixelBounds2**(`bounds`, `ceil?`, `intersect?`): `void`

#### Parameters

| Name         | Type                                          |
| :----------- | :-------------------------------------------- |
| `bounds`     | [`IBoundsData`](../interfaces/IBoundsData.md) |
| `ceil?`      | `boolean`                                     |
| `intersect?` | `boolean`                                     |

#### Returns

`void`

#### Inherited from

[LeaferCanvasBase](LeaferCanvasBase.md).[setTempPixelBounds2](LeaferCanvasBase.md#settemppixelbounds2)

#### Defined in

[src/leafer/packages/canvas/canvas/src/LeaferCanvasBase.ts:311](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/canvas/canvas/src/LeaferCanvasBase.ts#L311)

___

### copyToPixelBounds

▸ **copyToPixelBounds**(`pixelBounds`, `bounds`, `ceil?`, `intersect?`): `void`

#### Parameters

| Name          | Type                                          |
| :------------ | :-------------------------------------------- |
| `pixelBounds` | [`IBounds`](../interfaces/IBounds.md)         |
| `bounds`      | [`IBoundsData`](../interfaces/IBoundsData.md) |
| `ceil?`       | `boolean`                                     |
| `intersect?`  | `boolean`                                     |

#### Returns

`void`

#### Inherited from

[LeaferCanvasBase](LeaferCanvasBase.md).[copyToPixelBounds](LeaferCanvasBase.md#copytopixelbounds)

#### Defined in

[src/leafer/packages/canvas/canvas/src/LeaferCanvasBase.ts:315](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/canvas/canvas/src/LeaferCanvasBase.ts#L315)

___

### isSameSize

▸ **isSameSize**(`size`): `boolean`

#### Parameters

| Name   | Type                                                  |
| :----- | :---------------------------------------------------- |
| `size` | [`IScreenSizeData`](../interfaces/IScreenSizeData.md) |

#### Returns

`boolean`

#### Inherited from

[LeaferCanvasBase](LeaferCanvasBase.md).[isSameSize](LeaferCanvasBase.md#issamesize)

#### Defined in

[src/leafer/packages/canvas/canvas/src/LeaferCanvasBase.ts:322](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/canvas/canvas/src/LeaferCanvasBase.ts#L322)

___

### getSameCanvas

▸ **getSameCanvas**(`useSameWorldTransform?`, `useSameSmooth?`): [`ILeaferCanvas`](../interfaces/ILeaferCanvas.md)

#### Parameters

| Name                     | Type      |
| :----------------------- | :-------- |
| `useSameWorldTransform?` | `boolean` |
| `useSameSmooth?`         | `boolean` |

#### Returns

[`ILeaferCanvas`](../interfaces/ILeaferCanvas.md)

#### Inherited from

[LeaferCanvasBase](LeaferCanvasBase.md).[getSameCanvas](LeaferCanvasBase.md#getsamecanvas)

#### Defined in

[src/leafer/packages/canvas/canvas/src/LeaferCanvasBase.ts:327](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/canvas/canvas/src/LeaferCanvasBase.ts#L327)

___

### recycle

▸ **recycle**(`clearBounds?`): `void`

#### Parameters

| Name           | Type                                          |
| :------------- | :-------------------------------------------- |
| `clearBounds?` | [`IBoundsData`](../interfaces/IBoundsData.md) |

#### Returns

`void`

#### Inherited from

[LeaferCanvasBase](LeaferCanvasBase.md).[recycle](LeaferCanvasBase.md#recycle)

#### Defined in

[src/leafer/packages/canvas/canvas/src/LeaferCanvasBase.ts:338](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/canvas/canvas/src/LeaferCanvasBase.ts#L338)

___

### updateRender

▸ **updateRender**(`_bounds?`): `void`

#### Parameters

| Name       | Type                                          |
| :--------- | :-------------------------------------------- |
| `_bounds?` | [`IBoundsData`](../interfaces/IBoundsData.md) |

#### Returns

`void`

#### Inherited from

[LeaferCanvasBase](LeaferCanvasBase.md).[updateRender](LeaferCanvasBase.md#updaterender)

#### Defined in

[src/leafer/packages/canvas/canvas/src/LeaferCanvasBase.ts:346](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/canvas/canvas/src/LeaferCanvasBase.ts#L346)
