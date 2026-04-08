# Interface: IImageBoxData

## Hierarchy

- `IImageAttrData`

- [`IBoxData`](IBoxData.md)

  ↳ **`IImageBoxData`**

## Implemented by

- [`ImageBoxData`](../classes/ImageBoxData.md)

## Table of contents

### Properties

- [\_\_leaf](IImageBoxData.md#__leaf)
- [\_\_input](IImageBoxData.md#__input)
- [\_\_middle](IImageBoxData.md#__middle)
- [\_\_single](IImageBoxData.md#__single)
- [\_\_willDestroy](IImageBoxData.md#__willdestroy)
- [id](IImageBoxData.md#id)
- [name](IImageBoxData.md#name)
- [className](IImageBoxData.md#classname)
- [blendMode](IImageBoxData.md#blendmode)
- [opacity](IImageBoxData.md#opacity)
- [visible](IImageBoxData.md#visible)
- [selected](IImageBoxData.md#selected)
- [disabled](IImageBoxData.md#disabled)
- [locked](IImageBoxData.md#locked)
- [zIndex](IImageBoxData.md#zindex)
- [dim](IImageBoxData.md#dim)
- [dimskip](IImageBoxData.md#dimskip)
- [bright](IImageBoxData.md#bright)
- [mask](IImageBoxData.md#mask)
- [eraser](IImageBoxData.md#eraser)
- [filter](IImageBoxData.md#filter)
- [complex](IImageBoxData.md#complex)
- [x](IImageBoxData.md#x)
- [y](IImageBoxData.md#y)
- [width](IImageBoxData.md#width)
- [height](IImageBoxData.md#height)
- [scaleX](IImageBoxData.md#scalex)
- [scaleY](IImageBoxData.md#scaley)
- [scaleFixed](IImageBoxData.md#scalefixed)
- [rotation](IImageBoxData.md#rotation)
- [skewX](IImageBoxData.md#skewx)
- [skewY](IImageBoxData.md#skewy)
- [offsetX](IImageBoxData.md#offsetx)
- [offsetY](IImageBoxData.md#offsety)
- [scrollX](IImageBoxData.md#scrollx)
- [scrollY](IImageBoxData.md#scrolly)
- [origin](IImageBoxData.md#origin)
- [around](IImageBoxData.md#around)
- [lazy](IImageBoxData.md#lazy)
- [pixelRatio](IImageBoxData.md#pixelratio)
- [renderSpread](IImageBoxData.md#renderspread)
- [path](IImageBoxData.md#path)
- [windingRule](IImageBoxData.md#windingrule)
- [closed](IImageBoxData.md#closed)
- [flow](IImageBoxData.md#flow)
- [padding](IImageBoxData.md#padding)
- [gap](IImageBoxData.md#gap)
- [flowAlign](IImageBoxData.md#flowalign)
- [flowWrap](IImageBoxData.md#flowwrap)
- [itemBox](IImageBoxData.md#itembox)
- [inFlow](IImageBoxData.md#inflow)
- [autoWidth](IImageBoxData.md#autowidth)
- [autoHeight](IImageBoxData.md#autoheight)
- [lockRatio](IImageBoxData.md#lockratio)
- [autoBox](IImageBoxData.md#autobox)
- [widthRange](IImageBoxData.md#widthrange)
- [heightRange](IImageBoxData.md#heightrange)
- [draggable](IImageBoxData.md#draggable)
- [dragBounds](IImageBoxData.md#dragbounds)
- [dragBoundsType](IImageBoxData.md#dragboundstype)
- [editable](IImageBoxData.md#editable)
- [hittable](IImageBoxData.md#hittable)
- [hitFill](IImageBoxData.md#hitfill)
- [hitStroke](IImageBoxData.md#hitstroke)
- [hitBox](IImageBoxData.md#hitbox)
- [hitChildren](IImageBoxData.md#hitchildren)
- [hitSelf](IImageBoxData.md#hitself)
- [hitRadius](IImageBoxData.md#hitradius)
- [button](IImageBoxData.md#button)
- [cursor](IImageBoxData.md#cursor)
- [motionPath](IImageBoxData.md#motionpath)
- [motionPrecision](IImageBoxData.md#motionprecision)
- [motion](IImageBoxData.md#motion)
- [motionRotation](IImageBoxData.md#motionrotation)
- [normalStyle](IImageBoxData.md#normalstyle)
- [data](IImageBoxData.md#data)
- [\_\_childBranchNumber](IImageBoxData.md#__childbranchnumber)
- [\_\_complex](IImageBoxData.md#__complex)
- [\_\_complexData](IImageBoxData.md#__complexdata)
- [\_\_naturalWidth](IImageBoxData.md#__naturalwidth)
- [\_\_naturalHeight](IImageBoxData.md#__naturalheight)
- [\_\_autoWidth](IImageBoxData.md#__autowidth)
- [\_\_autoHeight](IImageBoxData.md#__autoheight)
- [\_\_autoSide](IImageBoxData.md#__autoside)
- [\_\_autoSize](IImageBoxData.md#__autosize)
- [\_\_useNaturalRatio](IImageBoxData.md#__usenaturalratio)
- [\_\_isLinePath](IImageBoxData.md#__islinepath)
- [\_\_blendMode](IImageBoxData.md#__blendmode)
- [\_\_useStroke](IImageBoxData.md#__usestroke)
- [\_\_useArrow](IImageBoxData.md#__usearrow)
- [\_\_useEffect](IImageBoxData.md#__useeffect)
- [\_\_usePathBox](IImageBoxData.md#__usepathbox)
- [\_\_useDim](IImageBoxData.md#__usedim)
- [\_\_pathInputed](IImageBoxData.md#__pathinputed)
- [\_\_pathForRender](IImageBoxData.md#__pathforrender)
- [\_\_path2DForRender](IImageBoxData.md#__path2dforrender)
- [\_\_startArrowPath](IImageBoxData.md#__startarrowpath)
- [\_\_endArrowPath](IImageBoxData.md#__endarrowpath)
- [\_\_pathForMotion](IImageBoxData.md#__pathformotion)
- [cornerRadius](IImageBoxData.md#cornerradius)
- [cornerSmoothing](IImageBoxData.md#cornersmoothing)
- [fill](IImageBoxData.md#fill)
- [borderWidth](IImageBoxData.md#borderwidth)
- [borderRadius](IImageBoxData.md#borderradius)
- [stroke](IImageBoxData.md#stroke)
- [startArrow](IImageBoxData.md#startarrow)
- [endArrow](IImageBoxData.md#endarrow)
- [strokeAlign](IImageBoxData.md#strokealign)
- [strokeWidth](IImageBoxData.md#strokewidth)
- [strokeWidths](IImageBoxData.md#strokewidths)
- [strokeScaleFixed](IImageBoxData.md#strokescalefixed)
- [strokeCap](IImageBoxData.md#strokecap)
- [strokeJoin](IImageBoxData.md#strokejoin)
- [dashPattern](IImageBoxData.md#dashpattern)
- [dashOffset](IImageBoxData.md#dashoffset)
- [miterLimit](IImageBoxData.md#miterlimit)
- [fontFamily](IImageBoxData.md#fontfamily)
- [fontSize](IImageBoxData.md#fontsize)
- [fontWeight](IImageBoxData.md#fontweight)
- [italic](IImageBoxData.md#italic)
- [textCase](IImageBoxData.md#textcase)
- [textDecoration](IImageBoxData.md#textdecoration)
- [letterSpacing](IImageBoxData.md#letterspacing)
- [lineHeight](IImageBoxData.md#lineheight)
- [paraIndent](IImageBoxData.md#paraindent)
- [paraSpacing](IImageBoxData.md#paraspacing)
- [writingMode](IImageBoxData.md#writingmode)
- [textAlign](IImageBoxData.md#textalign)
- [verticalAlign](IImageBoxData.md#verticalalign)
- [autoSizeAlign](IImageBoxData.md#autosizealign)
- [textWrap](IImageBoxData.md#textwrap)
- [textOverflow](IImageBoxData.md#textoverflow)
- [shadow](IImageBoxData.md#shadow)
- [innerShadow](IImageBoxData.md#innershadow)
- [blur](IImageBoxData.md#blur)
- [backgroundBlur](IImageBoxData.md#backgroundblur)
- [grayscale](IImageBoxData.md#grayscale)
- [url](IImageBoxData.md#url)
- [foreground](IImageBoxData.md#foreground)
- [background](IImageBoxData.md#background)
- [overflow](IImageBoxData.md#overflow)
- [scrollConfig](IImageBoxData.md#scrollconfig)
- [resizeChildren](IImageBoxData.md#resizechildren)
- [textBox](IImageBoxData.md#textbox)
- [\_\_urlType](IImageBoxData.md#__urltype)
- [animation](IImageBoxData.md#animation)
- [animationOut](IImageBoxData.md#animationout)
- [transition](IImageBoxData.md#transition)
- [transitionOut](IImageBoxData.md#transitionout)
- [states](IImageBoxData.md#states)
- [state](IImageBoxData.md#state)
- [hoverStyle](IImageBoxData.md#hoverstyle)
- [pressStyle](IImageBoxData.md#pressstyle)
- [focusStyle](IImageBoxData.md#focusstyle)
- [selectedStyle](IImageBoxData.md#selectedstyle)
- [disabledStyle](IImageBoxData.md#disabledstyle)
- [placeholderStyle](IImageBoxData.md#placeholderstyle)
- [placeholderColor](IImageBoxData.md#placeholdercolor)
- [placeholderDelay](IImageBoxData.md#placeholderdelay)
- [editConfig](IImageBoxData.md#editconfig)
- [editOuter](IImageBoxData.md#editouter)
- [editInner](IImageBoxData.md#editinner)
- [scale](IImageBoxData.md#scale)
- [\_\_isFills](IImageBoxData.md#__isfills)
- [\_\_isStrokes](IImageBoxData.md#__isstrokes)
- [\_\_strokeWidth](IImageBoxData.md#__strokewidth)
- [\_\_maxStrokeWidth](IImageBoxData.md#__maxstrokewidth)
- [\_\_strokeWidthCache](IImageBoxData.md#__strokewidthcache)
- [\_\_hasMultiStrokeStyle](IImageBoxData.md#__hasmultistrokestyle)
- [\_\_hasMultiPaint](IImageBoxData.md#__hasmultipaint)
- [\_\_isAlphaPixelFill](IImageBoxData.md#__isalphapixelfill)
- [\_\_isAlphaPixelStroke](IImageBoxData.md#__isalphapixelstroke)
- [\_\_isTransparentFill](IImageBoxData.md#__istransparentfill)
- [\_\_isTransparentStroke](IImageBoxData.md#__istransparentstroke)
- [\_\_isHitPixel](IImageBoxData.md#__ishitpixel)
- [\_\_isCanvas](IImageBoxData.md#__iscanvas)
- [\_\_isFastShadow](IImageBoxData.md#__isfastshadow)
- [\_\_fillAfterStroke](IImageBoxData.md#__fillafterstroke)
- [\_\_drawAfterFill](IImageBoxData.md#__drawafterfill)
- [\_\_clipAfterFill](IImageBoxData.md#__clipafterfill)
- [\_\_hasSurface](IImageBoxData.md#__hassurface)
- [\_\_blendLayer](IImageBoxData.md#__blendlayer)
- [\_\_boxStroke](IImageBoxData.md#__boxstroke)
- [\_\_font](IImageBoxData.md#__font)
- [\_\_textDrawData](IImageBoxData.md#__textdrawdata)
- [\_\_needComputePaint](IImageBoxData.md#__needcomputepaint)

### Methods

- [\_\_get](IImageBoxData.md#__get)
- [\_\_getData](IImageBoxData.md#__getdata)
- [\_\_setInput](IImageBoxData.md#__setinput)
- [\_\_getInput](IImageBoxData.md#__getinput)
- [\_\_removeInput](IImageBoxData.md#__removeinput)
- [\_\_getInputData](IImageBoxData.md#__getinputdata)
- [\_\_setMiddle](IImageBoxData.md#__setmiddle)
- [\_\_getMiddle](IImageBoxData.md#__getmiddle)
- [destroy](IImageBoxData.md#destroy)
- [\_\_checkSingle](IImageBoxData.md#__checksingle)
- [\_\_removeNaturalSize](IImageBoxData.md#__removenaturalsize)
- [\_\_setImageFill](IImageBoxData.md#__setimagefill)
- [\_\_computePaint](IImageBoxData.md#__computepaint)
- [\_\_getRealStrokeWidth](IImageBoxData.md#__getrealstrokewidth)
- [\_\_setPaint](IImageBoxData.md#__setpaint)
- [\_\_removePaint](IImageBoxData.md#__removepaint)

## Properties

### \_\_leaf

• **\_\_leaf**: [`ILeaf`](ILeaf.md)

#### Inherited from

[IBoxData](IBoxData.md).[__leaf](IBoxData.md#__leaf)

#### Defined in

[src/leafer/packages/interface/src/data/ILeafData.ts:6](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/data/ILeafData.ts#L6)

___

### \_\_input

• **\_\_input**: [`IObject`](IObject.md)

#### Inherited from

[IBoxData](IBoxData.md).[__input](IBoxData.md#__input)

#### Defined in

[src/leafer/packages/interface/src/data/ILeafData.ts:7](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/data/ILeafData.ts#L7)

___

### \_\_middle

• **\_\_middle**: [`IObject`](IObject.md)

#### Inherited from

[IBoxData](IBoxData.md).[__middle](IBoxData.md#__middle)

#### Defined in

[src/leafer/packages/interface/src/data/ILeafData.ts:8](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/data/ILeafData.ts#L8)

___

### \_\_single

• `Optional` **\_\_single**: `boolean`

#### Inherited from

[IBoxData](IBoxData.md).[__single](IBoxData.md#__single)

#### Defined in

[src/leafer/packages/interface/src/data/ILeafData.ts:30](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/data/ILeafData.ts#L30)

___

### \_\_willDestroy

• `Optional` **\_\_willDestroy**: `boolean`

#### Inherited from

[IBoxData](IBoxData.md).[__willDestroy](IBoxData.md#__willdestroy)

#### Defined in

[src/leafer/packages/interface/src/data/ILeafData.ts:32](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/data/ILeafData.ts#L32)

___

### id

• `Optional` **id**: `string`

#### Inherited from

[IBoxData](IBoxData.md).[id](IBoxData.md#id)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:331](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/display/ILeaf.ts#L331)

___

### name

• `Optional` **name**: `string`

#### Inherited from

[IBoxData](IBoxData.md).[name](IBoxData.md#name)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:332](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/display/ILeaf.ts#L332)

___

### className

• `Optional` **className**: `string`

#### Inherited from

[IBoxData](IBoxData.md).[className](IBoxData.md#classname)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:333](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/display/ILeaf.ts#L333)

___

### blendMode

• `Optional` **blendMode**: [`IBlendMode`](../modules.md#iblendmode)

#### Inherited from

[IBoxData](IBoxData.md).[blendMode](IBoxData.md#blendmode)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:335](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/display/ILeaf.ts#L335)

___

### opacity

• `Optional` **opacity**: `number`

#### Inherited from

[IBoxData](IBoxData.md).[opacity](IBoxData.md#opacity)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:336](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/display/ILeaf.ts#L336)

___

### visible

• `Optional` **visible**: `boolean` \| ``0``

#### Inherited from

[IBoxData](IBoxData.md).[visible](IBoxData.md#visible)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:337](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/display/ILeaf.ts#L337)

___

### selected

• `Optional` **selected**: `boolean`

#### Inherited from

[IBoxData](IBoxData.md).[selected](IBoxData.md#selected)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:338](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/display/ILeaf.ts#L338)

___

### disabled

• `Optional` **disabled**: `boolean`

#### Inherited from

[IBoxData](IBoxData.md).[disabled](IBoxData.md#disabled)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:339](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/display/ILeaf.ts#L339)

___

### locked

• `Optional` **locked**: `boolean`

#### Inherited from

[IBoxData](IBoxData.md).[locked](IBoxData.md#locked)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:340](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/display/ILeaf.ts#L340)

___

### zIndex

• `Optional` **zIndex**: `number`

#### Inherited from

[IBoxData](IBoxData.md).[zIndex](IBoxData.md#zindex)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:341](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/display/ILeaf.ts#L341)

___

### dim

• `Optional` **dim**: `number` \| `boolean`

#### Inherited from

[IBoxData](IBoxData.md).[dim](IBoxData.md#dim)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:343](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/display/ILeaf.ts#L343)

___

### dimskip

• `Optional` **dimskip**: `boolean`

#### Inherited from

[IBoxData](IBoxData.md).[dimskip](IBoxData.md#dimskip)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:344](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/display/ILeaf.ts#L344)

___

### bright

• `Optional` **bright**: `boolean`

#### Inherited from

[IBoxData](IBoxData.md).[bright](IBoxData.md#bright)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:345](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/display/ILeaf.ts#L345)

___

### mask

• `Optional` **mask**: `boolean` \| [`IMaskType`](../modules.md#imasktype)

#### Inherited from

[IBoxData](IBoxData.md).[mask](IBoxData.md#mask)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:347](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/display/ILeaf.ts#L347)

___

### eraser

• `Optional` **eraser**: `boolean` \| [`IEraserType`](../modules.md#ierasertype)

#### Inherited from

[IBoxData](IBoxData.md).[eraser](IBoxData.md#eraser)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:348](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/display/ILeaf.ts#L348)

___

### filter

• `Optional` **filter**: [`IFilter`](IFilter.md)[]

#### Inherited from

[IBoxData](IBoxData.md).[filter](IBoxData.md#filter)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:349](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/display/ILeaf.ts#L349)

___

### complex

• `Optional` **complex**: `boolean`

#### Inherited from

[IBoxData](IBoxData.md).[complex](IBoxData.md#complex)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:350](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/display/ILeaf.ts#L350)

___

### x

• `Optional` **x**: `number`

#### Inherited from

[IBoxData](IBoxData.md).[x](IBoxData.md#x)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:353](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/display/ILeaf.ts#L353)

___

### y

• `Optional` **y**: `number`

#### Inherited from

[IBoxData](IBoxData.md).[y](IBoxData.md#y)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:354](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/display/ILeaf.ts#L354)

___

### width

• `Optional` **width**: `number`

#### Inherited from

[IBoxData](IBoxData.md).[width](IBoxData.md#width)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:355](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/display/ILeaf.ts#L355)

___

### height

• `Optional` **height**: `number`

#### Inherited from

[IBoxData](IBoxData.md).[height](IBoxData.md#height)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:356](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/display/ILeaf.ts#L356)

___

### scaleX

• `Optional` **scaleX**: `number`

#### Inherited from

[IBoxData](IBoxData.md).[scaleX](IBoxData.md#scalex)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:357](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/display/ILeaf.ts#L357)

___

### scaleY

• `Optional` **scaleY**: `number`

#### Inherited from

[IBoxData](IBoxData.md).[scaleY](IBoxData.md#scaley)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:358](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/display/ILeaf.ts#L358)

___

### scaleFixed

• `Optional` **scaleFixed**: [`IScaleFixed`](../modules.md#iscalefixed)

#### Inherited from

[IBoxData](IBoxData.md).[scaleFixed](IBoxData.md#scalefixed)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:359](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/display/ILeaf.ts#L359)

___

### rotation

• `Optional` **rotation**: `number`

#### Inherited from

[IBoxData](IBoxData.md).[rotation](IBoxData.md#rotation)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:360](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/display/ILeaf.ts#L360)

___

### skewX

• `Optional` **skewX**: `number`

#### Inherited from

[IBoxData](IBoxData.md).[skewX](IBoxData.md#skewx)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:361](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/display/ILeaf.ts#L361)

___

### skewY

• `Optional` **skewY**: `number`

#### Inherited from

[IBoxData](IBoxData.md).[skewY](IBoxData.md#skewy)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:362](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/display/ILeaf.ts#L362)

___

### offsetX

• `Optional` **offsetX**: `number`

#### Inherited from

[IBoxData](IBoxData.md).[offsetX](IBoxData.md#offsetx)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:364](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/display/ILeaf.ts#L364)

___

### offsetY

• `Optional` **offsetY**: `number`

#### Inherited from

[IBoxData](IBoxData.md).[offsetY](IBoxData.md#offsety)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:365](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/display/ILeaf.ts#L365)

___

### scrollX

• `Optional` **scrollX**: `number`

#### Inherited from

[IBoxData](IBoxData.md).[scrollX](IBoxData.md#scrollx)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:366](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/display/ILeaf.ts#L366)

___

### scrollY

• `Optional` **scrollY**: `number`

#### Inherited from

[IBoxData](IBoxData.md).[scrollY](IBoxData.md#scrolly)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:367](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/display/ILeaf.ts#L367)

___

### origin

• `Optional` **origin**: [`IUnitPointData`](IUnitPointData.md) \| [`IDirection`](../modules.md#idirection)

#### Inherited from

[IBoxData](IBoxData.md).[origin](IBoxData.md#origin)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:369](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/display/ILeaf.ts#L369)

___

### around

• `Optional` **around**: [`IUnitPointData`](IUnitPointData.md) \| [`IDirection`](../modules.md#idirection)

#### Inherited from

[IBoxData](IBoxData.md).[around](IBoxData.md#around)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:370](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/display/ILeaf.ts#L370)

___

### lazy

• `Optional` **lazy**: `boolean`

#### Inherited from

[IBoxData](IBoxData.md).[lazy](IBoxData.md#lazy)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:372](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/display/ILeaf.ts#L372)

___

### pixelRatio

• `Optional` **pixelRatio**: `number`

#### Inherited from

[IBoxData](IBoxData.md).[pixelRatio](IBoxData.md#pixelratio)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:373](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/display/ILeaf.ts#L373)

___

### renderSpread

• `Optional` **renderSpread**: [`IFourNumber`](../modules.md#ifournumber)

#### Inherited from

[IBoxData](IBoxData.md).[renderSpread](IBoxData.md#renderspread)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:375](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/display/ILeaf.ts#L375)

___

### path

• `Optional` **path**: [`IPathCommandData`](../modules.md#ipathcommanddata)

#### Inherited from

[IBoxData](IBoxData.md).[path](IBoxData.md#path)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:377](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/display/ILeaf.ts#L377)

___

### windingRule

• `Optional` **windingRule**: [`IWindingRule`](../modules.md#iwindingrule)

#### Inherited from

[IBoxData](IBoxData.md).[windingRule](IBoxData.md#windingrule)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:378](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/display/ILeaf.ts#L378)

___

### closed

• `Optional` **closed**: `boolean`

#### Inherited from

[IBoxData](IBoxData.md).[closed](IBoxData.md#closed)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:379](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/display/ILeaf.ts#L379)

___

### flow

• `Optional` **flow**: [`IFlowType`](../modules.md#iflowtype)

#### Inherited from

[IBoxData](IBoxData.md).[flow](IBoxData.md#flow)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:382](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/display/ILeaf.ts#L382)

___

### padding

• `Optional` **padding**: [`IFourNumber`](../modules.md#ifournumber)

#### Inherited from

[IBoxData](IBoxData.md).[padding](IBoxData.md#padding)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:383](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/display/ILeaf.ts#L383)

___

### gap

• `Optional` **gap**: [`IGap`](../modules.md#igap) \| [`IPointGap`](IPointGap.md)

#### Inherited from

[IBoxData](IBoxData.md).[gap](IBoxData.md#gap)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:384](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/display/ILeaf.ts#L384)

___

### flowAlign

• `Optional` **flowAlign**: [`IFlowAxisAlign`](IFlowAxisAlign.md) \| [`IFlowAlign`](../modules.md#iflowalign)

#### Inherited from

[IBoxData](IBoxData.md).[flowAlign](IBoxData.md#flowalign)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:385](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/display/ILeaf.ts#L385)

___

### flowWrap

• `Optional` **flowWrap**: [`IFlowWrap`](../modules.md#iflowwrap)

#### Inherited from

[IBoxData](IBoxData.md).[flowWrap](IBoxData.md#flowwrap)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:386](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/display/ILeaf.ts#L386)

___

### itemBox

• `Optional` **itemBox**: [`IFlowBoxType`](../modules.md#iflowboxtype)

#### Inherited from

[IBoxData](IBoxData.md).[itemBox](IBoxData.md#itembox)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:387](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/display/ILeaf.ts#L387)

___

### inFlow

• `Optional` **inFlow**: `boolean`

#### Inherited from

[IBoxData](IBoxData.md).[inFlow](IBoxData.md#inflow)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:389](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/display/ILeaf.ts#L389)

___

### autoWidth

• `Optional` **autoWidth**: [`IAutoSize`](../modules.md#iautosize)

#### Inherited from

[IBoxData](IBoxData.md).[autoWidth](IBoxData.md#autowidth)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:390](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/display/ILeaf.ts#L390)

___

### autoHeight

• `Optional` **autoHeight**: [`IAutoSize`](../modules.md#iautosize)

#### Inherited from

[IBoxData](IBoxData.md).[autoHeight](IBoxData.md#autoheight)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:391](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/display/ILeaf.ts#L391)

___

### lockRatio

• `Optional` **lockRatio**: `boolean`

#### Inherited from

[IBoxData](IBoxData.md).[lockRatio](IBoxData.md#lockratio)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:392](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/display/ILeaf.ts#L392)

___

### autoBox

• `Optional` **autoBox**: [`IAutoBoxData`](IAutoBoxData.md) \| [`IConstraint`](IConstraint.md)

#### Inherited from

[IBoxData](IBoxData.md).[autoBox](IBoxData.md#autobox)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:393](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/display/ILeaf.ts#L393)

___

### widthRange

• `Optional` **widthRange**: [`IRangeSize`](IRangeSize.md)

#### Inherited from

[IBoxData](IBoxData.md).[widthRange](IBoxData.md#widthrange)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:395](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/display/ILeaf.ts#L395)

___

### heightRange

• `Optional` **heightRange**: [`IRangeSize`](IRangeSize.md)

#### Inherited from

[IBoxData](IBoxData.md).[heightRange](IBoxData.md#heightrange)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:396](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/display/ILeaf.ts#L396)

___

### draggable

• `Optional` **draggable**: `boolean` \| [`IAxis`](../modules.md#iaxis)

#### Inherited from

[IBoxData](IBoxData.md).[draggable](IBoxData.md#draggable)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:399](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/display/ILeaf.ts#L399)

___

### dragBounds

• `Optional` **dragBounds**: ``"parent"`` \| [`IBoundsData`](IBoundsData.md)

#### Inherited from

[IBoxData](IBoxData.md).[dragBounds](IBoxData.md#dragbounds)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:400](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/display/ILeaf.ts#L400)

___

### dragBoundsType

• `Optional` **dragBoundsType**: [`IDragBoundsType`](../modules.md#idragboundstype)

#### Inherited from

[IBoxData](IBoxData.md).[dragBoundsType](IBoxData.md#dragboundstype)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:401](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/display/ILeaf.ts#L401)

___

### editable

• `Optional` **editable**: `boolean`

#### Inherited from

[IBoxData](IBoxData.md).[editable](IBoxData.md#editable)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:403](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/display/ILeaf.ts#L403)

___

### hittable

• `Optional` **hittable**: `boolean`

#### Inherited from

[IBoxData](IBoxData.md).[hittable](IBoxData.md#hittable)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:405](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/display/ILeaf.ts#L405)

___

### hitFill

• `Optional` **hitFill**: [`IHitType`](../modules.md#ihittype)

#### Inherited from

[IBoxData](IBoxData.md).[hitFill](IBoxData.md#hitfill)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:406](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/display/ILeaf.ts#L406)

___

### hitStroke

• `Optional` **hitStroke**: [`IHitType`](../modules.md#ihittype)

#### Inherited from

[IBoxData](IBoxData.md).[hitStroke](IBoxData.md#hitstroke)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:407](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/display/ILeaf.ts#L407)

___

### hitBox

• `Optional` **hitBox**: `boolean`

#### Inherited from

[IBoxData](IBoxData.md).[hitBox](IBoxData.md#hitbox)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:408](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/display/ILeaf.ts#L408)

___

### hitChildren

• `Optional` **hitChildren**: `boolean`

#### Inherited from

[IBoxData](IBoxData.md).[hitChildren](IBoxData.md#hitchildren)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:409](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/display/ILeaf.ts#L409)

___

### hitSelf

• `Optional` **hitSelf**: `boolean`

#### Inherited from

[IBoxData](IBoxData.md).[hitSelf](IBoxData.md#hitself)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:410](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/display/ILeaf.ts#L410)

___

### hitRadius

• `Optional` **hitRadius**: `number`

#### Inherited from

[IBoxData](IBoxData.md).[hitRadius](IBoxData.md#hitradius)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:411](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/display/ILeaf.ts#L411)

___

### button

• `Optional` **button**: `boolean`

#### Inherited from

[IBoxData](IBoxData.md).[button](IBoxData.md#button)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:413](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/display/ILeaf.ts#L413)

___

### cursor

• `Optional` **cursor**: [`ICursorType`](../modules.md#icursortype) \| [`ICursorType`](../modules.md#icursortype)[]

#### Inherited from

[IBoxData](IBoxData.md).[cursor](IBoxData.md#cursor)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:414](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/display/ILeaf.ts#L414)

___

### motionPath

• `Optional` **motionPath**: `boolean`

#### Inherited from

[IBoxData](IBoxData.md).[motionPath](IBoxData.md#motionpath)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:416](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/display/ILeaf.ts#L416)

___

### motionPrecision

• `Optional` **motionPrecision**: `number`

#### Inherited from

[IBoxData](IBoxData.md).[motionPrecision](IBoxData.md#motionprecision)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:417](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/display/ILeaf.ts#L417)

___

### motion

• `Optional` **motion**: `number` \| [`IUnitData`](IUnitData.md)

#### Inherited from

[IBoxData](IBoxData.md).[motion](IBoxData.md#motion)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:419](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/display/ILeaf.ts#L419)

___

### motionRotation

• `Optional` **motionRotation**: `number` \| `boolean`

#### Inherited from

[IBoxData](IBoxData.md).[motionRotation](IBoxData.md#motionrotation)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:420](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/display/ILeaf.ts#L420)

___

### normalStyle

• `Optional` **normalStyle**: [`IObject`](IObject.md)

#### Inherited from

[IBoxData](IBoxData.md).[normalStyle](IBoxData.md#normalstyle)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:422](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/display/ILeaf.ts#L422)

___

### data

• `Optional` **data**: [`IObject`](IObject.md)

#### Inherited from

[IBoxData](IBoxData.md).[data](IBoxData.md#data)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:425](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/display/ILeaf.ts#L425)

___

### \_\_childBranchNumber

• `Optional` **\_\_childBranchNumber**: `number`

#### Inherited from

[IBoxData](IBoxData.md).[__childBranchNumber](IBoxData.md#__childbranchnumber)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:428](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/display/ILeaf.ts#L428)

___

### \_\_complex

• `Optional` **\_\_complex**: `boolean`

#### Inherited from

[IBoxData](IBoxData.md).[__complex](IBoxData.md#__complex)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:429](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/display/ILeaf.ts#L429)

___

### \_\_complexData

• `Optional` **\_\_complexData**: [`ILeafComplexCachedData`](ILeafComplexCachedData.md)

#### Inherited from

[IBoxData](IBoxData.md).[__complexData](IBoxData.md#__complexdata)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:430](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/display/ILeaf.ts#L430)

___

### \_\_naturalWidth

• `Optional` **\_\_naturalWidth**: `number`

#### Inherited from

[IBoxData](IBoxData.md).[__naturalWidth](IBoxData.md#__naturalwidth)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:432](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/display/ILeaf.ts#L432)

___

### \_\_naturalHeight

• `Optional` **\_\_naturalHeight**: `number`

#### Inherited from

[IBoxData](IBoxData.md).[__naturalHeight](IBoxData.md#__naturalheight)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:433](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/display/ILeaf.ts#L433)

___

### \_\_autoWidth

• `Optional` `Readonly` **\_\_autoWidth**: `boolean`

#### Inherited from

[IBoxData](IBoxData.md).[__autoWidth](IBoxData.md#__autowidth)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:435](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/display/ILeaf.ts#L435)

___

### \_\_autoHeight

• `Optional` `Readonly` **\_\_autoHeight**: `boolean`

#### Inherited from

[IBoxData](IBoxData.md).[__autoHeight](IBoxData.md#__autoheight)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:436](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/display/ILeaf.ts#L436)

___

### \_\_autoSide

• `Optional` `Readonly` **\_\_autoSide**: `boolean`

#### Inherited from

[IBoxData](IBoxData.md).[__autoSide](IBoxData.md#__autoside)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:437](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/display/ILeaf.ts#L437)

___

### \_\_autoSize

• `Optional` `Readonly` **\_\_autoSize**: `boolean`

#### Inherited from

[IBoxData](IBoxData.md).[__autoSize](IBoxData.md#__autosize)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:438](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/display/ILeaf.ts#L438)

___

### \_\_useNaturalRatio

• `Readonly` **\_\_useNaturalRatio**: `boolean`

#### Inherited from

[IBoxData](IBoxData.md).[__useNaturalRatio](IBoxData.md#__usenaturalratio)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:440](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/display/ILeaf.ts#L440)

___

### \_\_isLinePath

• `Readonly` **\_\_isLinePath**: `boolean`

#### Inherited from

[IBoxData](IBoxData.md).[__isLinePath](IBoxData.md#__islinepath)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:441](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/display/ILeaf.ts#L441)

___

### \_\_blendMode

• `Readonly` **\_\_blendMode**: `string`

#### Inherited from

[IBoxData](IBoxData.md).[__blendMode](IBoxData.md#__blendmode)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:442](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/display/ILeaf.ts#L442)

___

### \_\_useStroke

• `Optional` **\_\_useStroke**: `boolean`

#### Inherited from

[IBoxData](IBoxData.md).[__useStroke](IBoxData.md#__usestroke)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:444](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/display/ILeaf.ts#L444)

___

### \_\_useArrow

• `Optional` **\_\_useArrow**: `boolean`

#### Inherited from

[IBoxData](IBoxData.md).[__useArrow](IBoxData.md#__usearrow)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:445](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/display/ILeaf.ts#L445)

___

### \_\_useEffect

• `Optional` **\_\_useEffect**: `boolean`

#### Inherited from

[IBoxData](IBoxData.md).[__useEffect](IBoxData.md#__useeffect)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:446](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/display/ILeaf.ts#L446)

___

### \_\_usePathBox

• `Optional` **\_\_usePathBox**: `boolean`

#### Inherited from

[IBoxData](IBoxData.md).[__usePathBox](IBoxData.md#__usepathbox)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:447](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/display/ILeaf.ts#L447)

___

### \_\_useDim

• `Optional` **\_\_useDim**: `boolean`

#### Inherited from

[IBoxData](IBoxData.md).[__useDim](IBoxData.md#__usedim)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:448](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/display/ILeaf.ts#L448)

___

### \_\_pathInputed

• `Optional` **\_\_pathInputed**: `number`

#### Inherited from

[IBoxData](IBoxData.md).[__pathInputed](IBoxData.md#__pathinputed)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:450](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/display/ILeaf.ts#L450)

___

### \_\_pathForRender

• `Optional` **\_\_pathForRender**: [`IPathCommandData`](../modules.md#ipathcommanddata)

#### Inherited from

[IBoxData](IBoxData.md).[__pathForRender](IBoxData.md#__pathforrender)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:451](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/display/ILeaf.ts#L451)

___

### \_\_path2DForRender

• `Optional` **\_\_path2DForRender**: [`IPath2D`](IPath2D.md)

#### Inherited from

[IBoxData](IBoxData.md).[__path2DForRender](IBoxData.md#__path2dforrender)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:452](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/display/ILeaf.ts#L452)

___

### \_\_startArrowPath

• `Optional` **\_\_startArrowPath**: [`IArrowPathData`](IArrowPathData.md)

#### Inherited from

[IBoxData](IBoxData.md).[__startArrowPath](IBoxData.md#__startarrowpath)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:454](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/display/ILeaf.ts#L454)

___

### \_\_endArrowPath

• `Optional` **\_\_endArrowPath**: [`IArrowPathData`](IArrowPathData.md)

#### Inherited from

[IBoxData](IBoxData.md).[__endArrowPath](IBoxData.md#__endarrowpath)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:455](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/display/ILeaf.ts#L455)

___

### \_\_pathForMotion

• `Optional` **\_\_pathForMotion**: [`IMotionPathData`](IMotionPathData.md)

#### Inherited from

[IBoxData](IBoxData.md).[__pathForMotion](IBoxData.md#__pathformotion)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:456](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/display/ILeaf.ts#L456)

___

### cornerRadius

• `Optional` **cornerRadius**: `number`

#### Inherited from

[IBoxData](IBoxData.md).[cornerRadius](IBoxData.md#cornerradius)

#### Defined in

[src/ui/packages/interface/src/ICommonAttr.ts:17](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/interface/src/ICommonAttr.ts#L17)

___

### cornerSmoothing

• `Optional` **cornerSmoothing**: `number`

#### Inherited from

[IBoxData](IBoxData.md).[cornerSmoothing](IBoxData.md#cornersmoothing)

#### Defined in

[src/ui/packages/interface/src/ICommonAttr.ts:18](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/interface/src/ICommonAttr.ts#L18)

___

### fill

• `Optional` **fill**: `string` \| [`ILeafPaint`](ILeafPaint.md)[]

#### Inherited from

[IBoxData](IBoxData.md).[fill](IBoxData.md#fill)

#### Defined in

[src/ui/packages/interface/src/ICommonAttr.ts:29](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/interface/src/ICommonAttr.ts#L29)

___

### borderWidth

• `Optional` **borderWidth**: `number` \| `number`[]

#### Inherited from

[IBoxData](IBoxData.md).[borderWidth](IBoxData.md#borderwidth)

#### Defined in

[src/ui/packages/interface/src/ICommonAttr.ts:34](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/interface/src/ICommonAttr.ts#L34)

___

### borderRadius

• `Optional` **borderRadius**: `number` \| `number`[]

#### Inherited from

[IBoxData](IBoxData.md).[borderRadius](IBoxData.md#borderradius)

#### Defined in

[src/ui/packages/interface/src/ICommonAttr.ts:35](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/interface/src/ICommonAttr.ts#L35)

___

### stroke

• `Optional` **stroke**: `string` \| [`ILeafStrokePaint`](ILeafStrokePaint.md)[]

#### Inherited from

[IBoxData](IBoxData.md).[stroke](IBoxData.md#stroke)

#### Defined in

[src/ui/packages/interface/src/ICommonAttr.ts:65](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/interface/src/ICommonAttr.ts#L65)

___

### startArrow

• `Optional` **startArrow**: [`IArrowStyle`](../modules.md#iarrowstyle)

#### Inherited from

[IBoxData](IBoxData.md).[startArrow](IBoxData.md#startarrow)

#### Defined in

[src/ui/packages/interface/src/ICommonAttr.ts:67](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/interface/src/ICommonAttr.ts#L67)

___

### endArrow

• `Optional` **endArrow**: [`IArrowStyle`](../modules.md#iarrowstyle)

#### Inherited from

[IBoxData](IBoxData.md).[endArrow](IBoxData.md#endarrow)

#### Defined in

[src/ui/packages/interface/src/ICommonAttr.ts:68](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/interface/src/ICommonAttr.ts#L68)

___

### strokeAlign

• `Optional` **strokeAlign**: [`IStrokeAlign`](../modules.md#istrokealign)

#### Inherited from

[IBoxData](IBoxData.md).[strokeAlign](IBoxData.md#strokealign)

#### Defined in

[src/ui/packages/interface/src/ICommonAttr.ts:72](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/interface/src/ICommonAttr.ts#L72)

___

### strokeWidth

• `Optional` **strokeWidth**: `number`

#### Inherited from

[IBoxData](IBoxData.md).[strokeWidth](IBoxData.md#strokewidth)

#### Defined in

[src/ui/packages/interface/src/ICommonAttr.ts:73](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/interface/src/ICommonAttr.ts#L73)

___

### strokeWidths

• `Optional` **strokeWidths**: `number`[]

#### Inherited from

[IBoxData](IBoxData.md).[strokeWidths](IBoxData.md#strokewidths)

#### Defined in

[src/ui/packages/interface/src/ICommonAttr.ts:74](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/interface/src/ICommonAttr.ts#L74)

___

### strokeScaleFixed

• `Optional` **strokeScaleFixed**: [`IScaleFixed`](../modules.md#iscalefixed)

#### Inherited from

[IBoxData](IBoxData.md).[strokeScaleFixed](IBoxData.md#strokescalefixed)

#### Defined in

[src/ui/packages/interface/src/ICommonAttr.ts:75](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/interface/src/ICommonAttr.ts#L75)

___

### strokeCap

• `Optional` **strokeCap**: [`IStrokeCap`](../modules.md#istrokecap)

#### Inherited from

[IBoxData](IBoxData.md).[strokeCap](IBoxData.md#strokecap)

#### Defined in

[src/ui/packages/interface/src/ICommonAttr.ts:76](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/interface/src/ICommonAttr.ts#L76)

___

### strokeJoin

• `Optional` **strokeJoin**: [`IStrokeJoin`](../modules.md#istrokejoin)

#### Inherited from

[IBoxData](IBoxData.md).[strokeJoin](IBoxData.md#strokejoin)

#### Defined in

[src/ui/packages/interface/src/ICommonAttr.ts:77](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/interface/src/ICommonAttr.ts#L77)

___

### dashPattern

• `Optional` **dashPattern**: `number`[]

#### Inherited from

[IBoxData](IBoxData.md).[dashPattern](IBoxData.md#dashpattern)

#### Defined in

[src/ui/packages/interface/src/ICommonAttr.ts:78](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/interface/src/ICommonAttr.ts#L78)

___

### dashOffset

• `Optional` **dashOffset**: `number`

#### Inherited from

[IBoxData](IBoxData.md).[dashOffset](IBoxData.md#dashoffset)

#### Defined in

[src/ui/packages/interface/src/ICommonAttr.ts:79](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/interface/src/ICommonAttr.ts#L79)

___

### miterLimit

• `Optional` **miterLimit**: `number`

#### Inherited from

[IBoxData](IBoxData.md).[miterLimit](IBoxData.md#miterlimit)

#### Defined in

[src/ui/packages/interface/src/ICommonAttr.ts:80](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/interface/src/ICommonAttr.ts#L80)

___

### fontFamily

• `Optional` **fontFamily**: `string`

#### Inherited from

[IBoxData](IBoxData.md).[fontFamily](IBoxData.md#fontfamily)

#### Defined in

[src/ui/packages/interface/src/ICommonAttr.ts:127](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/interface/src/ICommonAttr.ts#L127)

___

### fontSize

• `Optional` **fontSize**: `number`

#### Inherited from

[IBoxData](IBoxData.md).[fontSize](IBoxData.md#fontsize)

#### Defined in

[src/ui/packages/interface/src/ICommonAttr.ts:128](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/interface/src/ICommonAttr.ts#L128)

___

### fontWeight

• `Optional` **fontWeight**: [`IFontWeight`](../modules.md#ifontweight)

#### Inherited from

[IBoxData](IBoxData.md).[fontWeight](IBoxData.md#fontweight)

#### Defined in

[src/ui/packages/interface/src/ICommonAttr.ts:129](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/interface/src/ICommonAttr.ts#L129)

___

### italic

• `Optional` **italic**: `boolean`

#### Inherited from

[IBoxData](IBoxData.md).[italic](IBoxData.md#italic)

#### Defined in

[src/ui/packages/interface/src/ICommonAttr.ts:130](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/interface/src/ICommonAttr.ts#L130)

___

### textCase

• `Optional` **textCase**: [`ITextCase`](../modules.md#itextcase)

#### Inherited from

[IBoxData](IBoxData.md).[textCase](IBoxData.md#textcase)

#### Defined in

[src/ui/packages/interface/src/ICommonAttr.ts:131](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/interface/src/ICommonAttr.ts#L131)

___

### textDecoration

• `Optional` **textDecoration**: [`ITextDecoration`](../modules.md#itextdecoration)

#### Inherited from

[IBoxData](IBoxData.md).[textDecoration](IBoxData.md#textdecoration)

#### Defined in

[src/ui/packages/interface/src/ICommonAttr.ts:132](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/interface/src/ICommonAttr.ts#L132)

___

### letterSpacing

• `Optional` **letterSpacing**: `number`

#### Inherited from

[IBoxData](IBoxData.md).[letterSpacing](IBoxData.md#letterspacing)

#### Defined in

[src/ui/packages/interface/src/ICommonAttr.ts:133](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/interface/src/ICommonAttr.ts#L133)

___

### lineHeight

• `Optional` **lineHeight**: `number`

#### Inherited from

[IBoxData](IBoxData.md).[lineHeight](IBoxData.md#lineheight)

#### Defined in

[src/ui/packages/interface/src/ICommonAttr.ts:134](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/interface/src/ICommonAttr.ts#L134)

___

### paraIndent

• `Optional` **paraIndent**: `number`

#### Inherited from

[IBoxData](IBoxData.md).[paraIndent](IBoxData.md#paraindent)

#### Defined in

[src/ui/packages/interface/src/ICommonAttr.ts:136](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/interface/src/ICommonAttr.ts#L136)

___

### paraSpacing

• `Optional` **paraSpacing**: `number`

#### Inherited from

[IBoxData](IBoxData.md).[paraSpacing](IBoxData.md#paraspacing)

#### Defined in

[src/ui/packages/interface/src/ICommonAttr.ts:137](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/interface/src/ICommonAttr.ts#L137)

___

### writingMode

• `Optional` **writingMode**: [`IWritingMode`](../modules.md#iwritingmode)

#### Inherited from

[IBoxData](IBoxData.md).[writingMode](IBoxData.md#writingmode)

#### Defined in

[src/ui/packages/interface/src/ICommonAttr.ts:139](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/interface/src/ICommonAttr.ts#L139)

___

### textAlign

• `Optional` **textAlign**: [`ITextAlign`](../modules.md#itextalign)

#### Inherited from

[IBoxData](IBoxData.md).[textAlign](IBoxData.md#textalign)

#### Defined in

[src/ui/packages/interface/src/ICommonAttr.ts:140](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/interface/src/ICommonAttr.ts#L140)

___

### verticalAlign

• `Optional` **verticalAlign**: [`IVerticalAlign`](../modules.md#iverticalalign)

#### Inherited from

[IBoxData](IBoxData.md).[verticalAlign](IBoxData.md#verticalalign)

#### Defined in

[src/ui/packages/interface/src/ICommonAttr.ts:141](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/interface/src/ICommonAttr.ts#L141)

___

### autoSizeAlign

• `Optional` **autoSizeAlign**: `boolean`

#### Inherited from

[IBoxData](IBoxData.md).[autoSizeAlign](IBoxData.md#autosizealign)

#### Defined in

[src/ui/packages/interface/src/ICommonAttr.ts:142](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/interface/src/ICommonAttr.ts#L142)

___

### textWrap

• `Optional` **textWrap**: [`ITextWrap`](../modules.md#itextwrap)

#### Inherited from

[IBoxData](IBoxData.md).[textWrap](IBoxData.md#textwrap)

#### Defined in

[src/ui/packages/interface/src/ICommonAttr.ts:144](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/interface/src/ICommonAttr.ts#L144)

___

### textOverflow

• `Optional` **textOverflow**: [`ITextOverflow`](../modules.md#itextoverflow)

#### Inherited from

[IBoxData](IBoxData.md).[textOverflow](IBoxData.md#textoverflow)

#### Defined in

[src/ui/packages/interface/src/ICommonAttr.ts:145](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/interface/src/ICommonAttr.ts#L145)

___

### shadow

• `Optional` **shadow**: [`ILeafShadowEffect`](ILeafShadowEffect.md)[]

#### Inherited from

[IBoxData](IBoxData.md).[shadow](IBoxData.md#shadow)

#### Defined in

[src/ui/packages/interface/src/ICommonAttr.ts:164](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/interface/src/ICommonAttr.ts#L164)

___

### innerShadow

• `Optional` **innerShadow**: [`ILeafShadowEffect`](ILeafShadowEffect.md)[]

#### Inherited from

[IBoxData](IBoxData.md).[innerShadow](IBoxData.md#innershadow)

#### Defined in

[src/ui/packages/interface/src/ICommonAttr.ts:165](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/interface/src/ICommonAttr.ts#L165)

___

### blur

• `Optional` **blur**: `number`

#### Inherited from

[IBoxData](IBoxData.md).[blur](IBoxData.md#blur)

#### Defined in

[src/ui/packages/interface/src/ICommonAttr.ts:166](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/interface/src/ICommonAttr.ts#L166)

___

### backgroundBlur

• `Optional` **backgroundBlur**: `number`

#### Inherited from

[IBoxData](IBoxData.md).[backgroundBlur](IBoxData.md#backgroundblur)

#### Defined in

[src/ui/packages/interface/src/ICommonAttr.ts:167](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/interface/src/ICommonAttr.ts#L167)

___

### grayscale

• `Optional` **grayscale**: `number`

#### Inherited from

[IBoxData](IBoxData.md).[grayscale](IBoxData.md#grayscale)

#### Defined in

[src/ui/packages/interface/src/ICommonAttr.ts:168](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/interface/src/ICommonAttr.ts#L168)

___

### url

• `Optional` **url**: `string`

#### Inherited from

IImageAttrData.url

#### Defined in

[src/ui/packages/interface/src/IUI.ts:258](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/interface/src/IUI.ts#L258)

___

### foreground

• `Optional` **foreground**: [`IFill`](../modules.md#ifill)

#### Inherited from

IImageAttrData.foreground

#### Defined in

[src/ui/packages/interface/src/IUI.ts:259](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/interface/src/IUI.ts#L259)

___

### background

• `Optional` **background**: [`IFill`](../modules.md#ifill)

#### Inherited from

IImageAttrData.background

#### Defined in

[src/ui/packages/interface/src/IUI.ts:260](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/interface/src/IUI.ts#L260)

___

### overflow

• `Optional` **overflow**: [`IOverflow`](../modules.md#ioverflow)

#### Inherited from

[IBoxData](IBoxData.md).[overflow](IBoxData.md#overflow)

#### Defined in

[src/ui/packages/interface/src/IUI.ts:410](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/interface/src/IUI.ts#L410)

___

### scrollConfig

• `Optional` **scrollConfig**: [`IScrollConfig`](IScrollConfig.md)

#### Inherited from

[IBoxData](IBoxData.md).[scrollConfig](IBoxData.md#scrollconfig)

#### Defined in

[src/ui/packages/interface/src/IUI.ts:411](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/interface/src/IUI.ts#L411)

___

### resizeChildren

• `Optional` **resizeChildren**: `boolean`

#### Inherited from

[IBoxData](IBoxData.md).[resizeChildren](IBoxData.md#resizechildren)

#### Defined in

[src/ui/packages/interface/src/IUI.ts:412](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/interface/src/IUI.ts#L412)

___

### textBox

• `Optional` **textBox**: `boolean`

#### Inherited from

[IBoxData](IBoxData.md).[textBox](IBoxData.md#textbox)

#### Defined in

[src/ui/packages/interface/src/IUI.ts:413](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/interface/src/IUI.ts#L413)

___

### \_\_urlType

• `Readonly` **\_\_urlType**: [`IMultimediaType`](../modules.md#imultimediatype)

#### Defined in

[src/ui/packages/interface/src/IUI.ts:457](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/interface/src/IUI.ts#L457)

___

### animation

• `Optional` **animation**: [`IAnimation`](../modules.md#ianimation) \| [`IAnimation`](../modules.md#ianimation)[]

#### Inherited from

[IBoxData](IBoxData.md).[animation](IBoxData.md#animation)

#### Defined in

[src/ui/packages/interface/src/IUI.ts:563](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/interface/src/IUI.ts#L563)

___

### animationOut

• `Optional` **animationOut**: [`IAnimation`](../modules.md#ianimation) \| [`IAnimation`](../modules.md#ianimation)[]

#### Inherited from

[IBoxData](IBoxData.md).[animationOut](IBoxData.md#animationout)

#### Defined in

[src/ui/packages/interface/src/IUI.ts:564](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/interface/src/IUI.ts#L564)

___

### transition

• `Optional` **transition**: [`ITransition`](../modules.md#itransition)

#### Inherited from

[IBoxData](IBoxData.md).[transition](IBoxData.md#transition)

#### Defined in

[src/ui/packages/interface/src/IUI.ts:566](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/interface/src/IUI.ts#L566)

___

### transitionOut

• `Optional` **transitionOut**: [`ITransition`](../modules.md#itransition)

#### Inherited from

[IBoxData](IBoxData.md).[transitionOut](IBoxData.md#transitionout)

#### Defined in

[src/ui/packages/interface/src/IUI.ts:567](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/interface/src/IUI.ts#L567)

___

### states

• `Optional` **states**: [`IStates`](IStates.md)

#### Inherited from

[IBoxData](IBoxData.md).[states](IBoxData.md#states)

#### Defined in

[src/ui/packages/interface/src/IUI.ts:569](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/interface/src/IUI.ts#L569)

___

### state

• `Optional` **state**: `string`

#### Inherited from

[IBoxData](IBoxData.md).[state](IBoxData.md#state)

#### Defined in

[src/ui/packages/interface/src/IUI.ts:570](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/interface/src/IUI.ts#L570)

___

### hoverStyle

• `Optional` **hoverStyle**: [`IStateStyle`](IStateStyle.md)

#### Inherited from

[IBoxData](IBoxData.md).[hoverStyle](IBoxData.md#hoverstyle)

#### Defined in

[src/ui/packages/interface/src/IUI.ts:572](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/interface/src/IUI.ts#L572)

___

### pressStyle

• `Optional` **pressStyle**: [`IStateStyle`](IStateStyle.md)

#### Inherited from

[IBoxData](IBoxData.md).[pressStyle](IBoxData.md#pressstyle)

#### Defined in

[src/ui/packages/interface/src/IUI.ts:573](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/interface/src/IUI.ts#L573)

___

### focusStyle

• `Optional` **focusStyle**: [`IStateStyle`](IStateStyle.md)

#### Inherited from

[IBoxData](IBoxData.md).[focusStyle](IBoxData.md#focusstyle)

#### Defined in

[src/ui/packages/interface/src/IUI.ts:574](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/interface/src/IUI.ts#L574)

___

### selectedStyle

• `Optional` **selectedStyle**: [`IStateStyle`](IStateStyle.md)

#### Inherited from

[IBoxData](IBoxData.md).[selectedStyle](IBoxData.md#selectedstyle)

#### Defined in

[src/ui/packages/interface/src/IUI.ts:575](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/interface/src/IUI.ts#L575)

___

### disabledStyle

• `Optional` **disabledStyle**: [`IStateStyle`](IStateStyle.md)

#### Inherited from

[IBoxData](IBoxData.md).[disabledStyle](IBoxData.md#disabledstyle)

#### Defined in

[src/ui/packages/interface/src/IUI.ts:576](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/interface/src/IUI.ts#L576)

___

### placeholderStyle

• `Optional` **placeholderStyle**: [`IStateStyle`](IStateStyle.md)

#### Inherited from

[IBoxData](IBoxData.md).[placeholderStyle](IBoxData.md#placeholderstyle)

#### Defined in

[src/ui/packages/interface/src/IUI.ts:577](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/interface/src/IUI.ts#L577)

___

### placeholderColor

• `Optional` **placeholderColor**: `string`

#### Inherited from

[IBoxData](IBoxData.md).[placeholderColor](IBoxData.md#placeholdercolor)

#### Defined in

[src/ui/packages/interface/src/IUI.ts:578](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/interface/src/IUI.ts#L578)

___

### placeholderDelay

• `Optional` **placeholderDelay**: `number`

#### Inherited from

[IBoxData](IBoxData.md).[placeholderDelay](IBoxData.md#placeholderdelay)

#### Defined in

[src/ui/packages/interface/src/IUI.ts:579](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/interface/src/IUI.ts#L579)

___

### editConfig

• `Optional` **editConfig**: [`IEditorConfig`](IEditorConfig.md)

#### Inherited from

[IBoxData](IBoxData.md).[editConfig](IBoxData.md#editconfig)

#### Defined in

[src/ui/packages/interface/src/IUI.ts:581](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/interface/src/IUI.ts#L581)

___

### editOuter

• `Optional` **editOuter**: `string`

#### Inherited from

[IBoxData](IBoxData.md).[editOuter](IBoxData.md#editouter)

#### Defined in

[src/ui/packages/interface/src/IUI.ts:582](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/interface/src/IUI.ts#L582)

___

### editInner

• `Optional` **editInner**: `string`

#### Inherited from

[IBoxData](IBoxData.md).[editInner](IBoxData.md#editinner)

#### Defined in

[src/ui/packages/interface/src/IUI.ts:583](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/interface/src/IUI.ts#L583)

___

### scale

• `Readonly` **scale**: `number` \| [`IPointData`](IPointData.md)

#### Inherited from

[IBoxData](IBoxData.md).[scale](IBoxData.md#scale)

#### Defined in

[src/ui/packages/interface/src/IUI.ts:592](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/interface/src/IUI.ts#L592)

___

### \_\_isFills

• `Optional` **\_\_isFills**: `boolean`

#### Inherited from

[IBoxData](IBoxData.md).[__isFills](IBoxData.md#__isfills)

#### Defined in

[src/ui/packages/interface/src/IUI.ts:595](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/interface/src/IUI.ts#L595)

___

### \_\_isStrokes

• `Optional` **\_\_isStrokes**: `boolean`

#### Inherited from

[IBoxData](IBoxData.md).[__isStrokes](IBoxData.md#__isstrokes)

#### Defined in

[src/ui/packages/interface/src/IUI.ts:596](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/interface/src/IUI.ts#L596)

___

### \_\_strokeWidth

• `Readonly` **\_\_strokeWidth**: `number`

#### Inherited from

[IBoxData](IBoxData.md).[__strokeWidth](IBoxData.md#__strokewidth)

#### Defined in

[src/ui/packages/interface/src/IUI.ts:598](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/interface/src/IUI.ts#L598)

___

### \_\_maxStrokeWidth

• `Readonly` **\_\_maxStrokeWidth**: `number`

#### Inherited from

[IBoxData](IBoxData.md).[__maxStrokeWidth](IBoxData.md#__maxstrokewidth)

#### Defined in

[src/ui/packages/interface/src/IUI.ts:599](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/interface/src/IUI.ts#L599)

___

### \_\_strokeWidthCache

• `Optional` **\_\_strokeWidthCache**: `number`

#### Inherited from

[IBoxData](IBoxData.md).[__strokeWidthCache](IBoxData.md#__strokewidthcache)

#### Defined in

[src/ui/packages/interface/src/IUI.ts:600](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/interface/src/IUI.ts#L600)

___

### \_\_hasMultiStrokeStyle

• `Optional` **\_\_hasMultiStrokeStyle**: `number`

#### Inherited from

[IBoxData](IBoxData.md).[__hasMultiStrokeStyle](IBoxData.md#__hasmultistrokestyle)

#### Defined in

[src/ui/packages/interface/src/IUI.ts:601](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/interface/src/IUI.ts#L601)

___

### \_\_hasMultiPaint

• `Optional` `Readonly` **\_\_hasMultiPaint**: `boolean`

#### Inherited from

[IBoxData](IBoxData.md).[__hasMultiPaint](IBoxData.md#__hasmultipaint)

#### Defined in

[src/ui/packages/interface/src/IUI.ts:602](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/interface/src/IUI.ts#L602)

___

### \_\_isAlphaPixelFill

• `Optional` **\_\_isAlphaPixelFill**: `boolean`

#### Inherited from

[IBoxData](IBoxData.md).[__isAlphaPixelFill](IBoxData.md#__isalphapixelfill)

#### Defined in

[src/ui/packages/interface/src/IUI.ts:604](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/interface/src/IUI.ts#L604)

___

### \_\_isAlphaPixelStroke

• `Optional` **\_\_isAlphaPixelStroke**: `boolean`

#### Inherited from

[IBoxData](IBoxData.md).[__isAlphaPixelStroke](IBoxData.md#__isalphapixelstroke)

#### Defined in

[src/ui/packages/interface/src/IUI.ts:605](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/interface/src/IUI.ts#L605)

___

### \_\_isTransparentFill

• `Optional` **\_\_isTransparentFill**: `boolean`

#### Inherited from

[IBoxData](IBoxData.md).[__isTransparentFill](IBoxData.md#__istransparentfill)

#### Defined in

[src/ui/packages/interface/src/IUI.ts:607](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/interface/src/IUI.ts#L607)

___

### \_\_isTransparentStroke

• `Optional` **\_\_isTransparentStroke**: `boolean`

#### Inherited from

[IBoxData](IBoxData.md).[__isTransparentStroke](IBoxData.md#__istransparentstroke)

#### Defined in

[src/ui/packages/interface/src/IUI.ts:608](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/interface/src/IUI.ts#L608)

___

### \_\_isHitPixel

• `Optional` **\_\_isHitPixel**: `boolean`

#### Inherited from

[IBoxData](IBoxData.md).[__isHitPixel](IBoxData.md#__ishitpixel)

#### Defined in

[src/ui/packages/interface/src/IUI.ts:610](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/interface/src/IUI.ts#L610)

___

### \_\_isCanvas

• `Optional` **\_\_isCanvas**: `boolean`

#### Inherited from

[IBoxData](IBoxData.md).[__isCanvas](IBoxData.md#__iscanvas)

#### Defined in

[src/ui/packages/interface/src/IUI.ts:611](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/interface/src/IUI.ts#L611)

___

### \_\_isFastShadow

• `Optional` **\_\_isFastShadow**: `boolean`

#### Inherited from

[IBoxData](IBoxData.md).[__isFastShadow](IBoxData.md#__isfastshadow)

#### Defined in

[src/ui/packages/interface/src/IUI.ts:612](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/interface/src/IUI.ts#L612)

___

### \_\_fillAfterStroke

• `Optional` **\_\_fillAfterStroke**: `boolean`

#### Inherited from

[IBoxData](IBoxData.md).[__fillAfterStroke](IBoxData.md#__fillafterstroke)

#### Defined in

[src/ui/packages/interface/src/IUI.ts:614](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/interface/src/IUI.ts#L614)

___

### \_\_drawAfterFill

• `Optional` **\_\_drawAfterFill**: `boolean`

#### Inherited from

[IBoxData](IBoxData.md).[__drawAfterFill](IBoxData.md#__drawafterfill)

#### Defined in

[src/ui/packages/interface/src/IUI.ts:615](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/interface/src/IUI.ts#L615)

___

### \_\_clipAfterFill

• `Optional` `Readonly` **\_\_clipAfterFill**: `boolean`

#### Inherited from

[IBoxData](IBoxData.md).[__clipAfterFill](IBoxData.md#__clipafterfill)

#### Defined in

[src/ui/packages/interface/src/IUI.ts:616](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/interface/src/IUI.ts#L616)

___

### \_\_hasSurface

• `Optional` `Readonly` **\_\_hasSurface**: `boolean`

#### Inherited from

[IBoxData](IBoxData.md).[__hasSurface](IBoxData.md#__hassurface)

#### Defined in

[src/ui/packages/interface/src/IUI.ts:617](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/interface/src/IUI.ts#L617)

___

### \_\_blendLayer

• `Optional` **\_\_blendLayer**: `boolean`

#### Inherited from

[IBoxData](IBoxData.md).[__blendLayer](IBoxData.md#__blendlayer)

#### Defined in

[src/ui/packages/interface/src/IUI.ts:619](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/interface/src/IUI.ts#L619)

___

### \_\_boxStroke

• `Optional` **\_\_boxStroke**: `boolean`

#### Inherited from

[IBoxData](IBoxData.md).[__boxStroke](IBoxData.md#__boxstroke)

#### Defined in

[src/ui/packages/interface/src/IUI.ts:621](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/interface/src/IUI.ts#L621)

___

### \_\_font

• `Optional` **\_\_font**: `string`

#### Inherited from

[IBoxData](IBoxData.md).[__font](IBoxData.md#__font)

#### Defined in

[src/ui/packages/interface/src/IUI.ts:624](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/interface/src/IUI.ts#L624)

___

### \_\_textDrawData

• `Optional` **\_\_textDrawData**: [`ITextDrawData`](ITextDrawData.md)

#### Inherited from

[IBoxData](IBoxData.md).[__textDrawData](IBoxData.md#__textdrawdata)

#### Defined in

[src/ui/packages/interface/src/IUI.ts:625](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/interface/src/IUI.ts#L625)

___

### \_\_needComputePaint

• `Optional` **\_\_needComputePaint**: `boolean`

#### Inherited from

[IBoxData](IBoxData.md).[__needComputePaint](IBoxData.md#__needcomputepaint)

#### Defined in

[src/ui/packages/interface/src/IUI.ts:627](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/interface/src/IUI.ts#L627)

## Methods

### \_\_get

▸ **__get**(`name`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |

#### Returns

`any`

#### Inherited from

[IBoxData](IBoxData.md).[__get](IBoxData.md#__get)

#### Defined in

[src/leafer/packages/interface/src/data/ILeafData.ts:10](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/data/ILeafData.ts#L10)

___

### \_\_getData

▸ **__getData**(): [`IObject`](IObject.md)

#### Returns

[`IObject`](IObject.md)

#### Inherited from

[IBoxData](IBoxData.md).[__getData](IBoxData.md#__getdata)

#### Defined in

[src/leafer/packages/interface/src/data/ILeafData.ts:11](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/data/ILeafData.ts#L11)

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

#### Inherited from

[IBoxData](IBoxData.md).[__setInput](IBoxData.md#__setinput)

#### Defined in

[src/leafer/packages/interface/src/data/ILeafData.ts:13](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/data/ILeafData.ts#L13)

___

### \_\_getInput

▸ **__getInput**(`name`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |

#### Returns

`any`

#### Inherited from

[IBoxData](IBoxData.md).[__getInput](IBoxData.md#__getinput)

#### Defined in

[src/leafer/packages/interface/src/data/ILeafData.ts:14](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/data/ILeafData.ts#L14)

___

### \_\_removeInput

▸ **__removeInput**(`name`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |

#### Returns

`void`

#### Inherited from

[IBoxData](IBoxData.md).[__removeInput](IBoxData.md#__removeinput)

#### Defined in

[src/leafer/packages/interface/src/data/ILeafData.ts:15](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/data/ILeafData.ts#L15)

___

### \_\_getInputData

▸ **__getInputData**(`names?`, `options?`): [`IObject`](IObject.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `names?` | `string`[] \| [`IObject`](IObject.md) |
| `options?` | [`IJSONOptions`](IJSONOptions.md) |

#### Returns

[`IObject`](IObject.md)

#### Inherited from

[IBoxData](IBoxData.md).[__getInputData](IBoxData.md#__getinputdata)

#### Defined in

[src/leafer/packages/interface/src/data/ILeafData.ts:16](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/data/ILeafData.ts#L16)

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

#### Inherited from

[IBoxData](IBoxData.md).[__setMiddle](IBoxData.md#__setmiddle)

#### Defined in

[src/leafer/packages/interface/src/data/ILeafData.ts:18](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/data/ILeafData.ts#L18)

___

### \_\_getMiddle

▸ **__getMiddle**(`name`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |

#### Returns

`any`

#### Inherited from

[IBoxData](IBoxData.md).[__getMiddle](IBoxData.md#__getmiddle)

#### Defined in

[src/leafer/packages/interface/src/data/ILeafData.ts:19](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/data/ILeafData.ts#L19)

___

### destroy

▸ **destroy**(): `void`

#### Returns

`void`

#### Inherited from

[IBoxData](IBoxData.md).[destroy](IBoxData.md#destroy)

#### Defined in

[src/leafer/packages/interface/src/data/ILeafData.ts:21](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/data/ILeafData.ts#L21)

___

### \_\_checkSingle

▸ **__checkSingle**(): `void`

#### Returns

`void`

#### Inherited from

[IBoxData](IBoxData.md).[__checkSingle](IBoxData.md#__checksingle)

#### Defined in

[src/leafer/packages/interface/src/data/ILeafData.ts:33](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/data/ILeafData.ts#L33)

___

### \_\_removeNaturalSize

▸ **__removeNaturalSize**(): `void`

#### Returns

`void`

#### Inherited from

[IBoxData](IBoxData.md).[__removeNaturalSize](IBoxData.md#__removenaturalsize)

#### Defined in

[src/leafer/packages/interface/src/data/ILeafData.ts:34](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/data/ILeafData.ts#L34)

___

### \_\_setImageFill

▸ **__setImageFill**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `string` |

#### Returns

`void`

#### Defined in

[src/ui/packages/interface/src/IUI.ts:458](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/interface/src/IUI.ts#L458)

___

### \_\_computePaint

▸ **__computePaint**(): `void`

#### Returns

`void`

#### Inherited from

[IBoxData](IBoxData.md).[__computePaint](IBoxData.md#__computepaint)

#### Defined in

[src/ui/packages/interface/src/IUI.ts:628](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/interface/src/IUI.ts#L628)

___

### \_\_getRealStrokeWidth

▸ **__getRealStrokeWidth**(`childStyle?`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `childStyle?` | [`IStrokeComputedStyle`](IStrokeComputedStyle.md) |

#### Returns

`number`

#### Inherited from

[IBoxData](IBoxData.md).[__getRealStrokeWidth](IBoxData.md#__getrealstrokewidth)

#### Defined in

[src/ui/packages/interface/src/IUI.ts:629](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/interface/src/IUI.ts#L629)

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

#### Inherited from

[IBoxData](IBoxData.md).[__setPaint](IBoxData.md#__setpaint)

#### Defined in

[src/ui/packages/interface/src/IUI.ts:631](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/interface/src/IUI.ts#L631)

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

#### Inherited from

[IBoxData](IBoxData.md).[__removePaint](IBoxData.md#__removepaint)

#### Defined in

[src/ui/packages/interface/src/IUI.ts:632](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/interface/src/IUI.ts#L632)
