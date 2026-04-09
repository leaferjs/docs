# Interface: ILinkerData

## Hierarchy

- `ILinkerAttrData`

- [`ILineData`](ILineData.md)

  ↳ **`ILinkerData`**

## Table of contents

### Properties

- [\_\_leaf](ILinkerData.md#__leaf)
- [\_\_input](ILinkerData.md#__input)
- [\_\_middle](ILinkerData.md#__middle)
- [\_\_single](ILinkerData.md#__single)
- [\_\_willDestroy](ILinkerData.md#__willdestroy)
- [id](ILinkerData.md#id)
- [name](ILinkerData.md#name)
- [className](ILinkerData.md#classname)
- [blendMode](ILinkerData.md#blendmode)
- [opacity](ILinkerData.md#opacity)
- [visible](ILinkerData.md#visible)
- [selected](ILinkerData.md#selected)
- [disabled](ILinkerData.md#disabled)
- [locked](ILinkerData.md#locked)
- [zIndex](ILinkerData.md#zindex)
- [dim](ILinkerData.md#dim)
- [dimskip](ILinkerData.md#dimskip)
- [bright](ILinkerData.md#bright)
- [mask](ILinkerData.md#mask)
- [eraser](ILinkerData.md#eraser)
- [filter](ILinkerData.md#filter)
- [complex](ILinkerData.md#complex)
- [x](ILinkerData.md#x)
- [y](ILinkerData.md#y)
- [width](ILinkerData.md#width)
- [height](ILinkerData.md#height)
- [scaleX](ILinkerData.md#scalex)
- [scaleY](ILinkerData.md#scaley)
- [scaleFixed](ILinkerData.md#scalefixed)
- [rotation](ILinkerData.md#rotation)
- [skewX](ILinkerData.md#skewx)
- [skewY](ILinkerData.md#skewy)
- [offsetX](ILinkerData.md#offsetx)
- [offsetY](ILinkerData.md#offsety)
- [scrollX](ILinkerData.md#scrollx)
- [scrollY](ILinkerData.md#scrolly)
- [origin](ILinkerData.md#origin)
- [around](ILinkerData.md#around)
- [lazy](ILinkerData.md#lazy)
- [pixelRatio](ILinkerData.md#pixelratio)
- [renderSpread](ILinkerData.md#renderspread)
- [path](ILinkerData.md#path)
- [windingRule](ILinkerData.md#windingrule)
- [closed](ILinkerData.md#closed)
- [flow](ILinkerData.md#flow)
- [padding](ILinkerData.md#padding)
- [gap](ILinkerData.md#gap)
- [flowAlign](ILinkerData.md#flowalign)
- [flowWrap](ILinkerData.md#flowwrap)
- [itemBox](ILinkerData.md#itembox)
- [inFlow](ILinkerData.md#inflow)
- [autoWidth](ILinkerData.md#autowidth)
- [autoHeight](ILinkerData.md#autoheight)
- [lockRatio](ILinkerData.md#lockratio)
- [autoBox](ILinkerData.md#autobox)
- [widthRange](ILinkerData.md#widthrange)
- [heightRange](ILinkerData.md#heightrange)
- [draggable](ILinkerData.md#draggable)
- [dragBounds](ILinkerData.md#dragbounds)
- [dragBoundsType](ILinkerData.md#dragboundstype)
- [editable](ILinkerData.md#editable)
- [hittable](ILinkerData.md#hittable)
- [hitFill](ILinkerData.md#hitfill)
- [hitStroke](ILinkerData.md#hitstroke)
- [hitBox](ILinkerData.md#hitbox)
- [hitChildren](ILinkerData.md#hitchildren)
- [hitSelf](ILinkerData.md#hitself)
- [hitRadius](ILinkerData.md#hitradius)
- [button](ILinkerData.md#button)
- [cursor](ILinkerData.md#cursor)
- [motionPath](ILinkerData.md#motionpath)
- [motionPrecision](ILinkerData.md#motionprecision)
- [motion](ILinkerData.md#motion)
- [motionRotation](ILinkerData.md#motionrotation)
- [normalStyle](ILinkerData.md#normalstyle)
- [data](ILinkerData.md#data)
- [\_\_childBranchNumber](ILinkerData.md#__childbranchnumber)
- [\_\_complex](ILinkerData.md#__complex)
- [\_\_complexData](ILinkerData.md#__complexdata)
- [\_\_naturalWidth](ILinkerData.md#__naturalwidth)
- [\_\_naturalHeight](ILinkerData.md#__naturalheight)
- [\_\_autoWidth](ILinkerData.md#__autowidth)
- [\_\_autoHeight](ILinkerData.md#__autoheight)
- [\_\_autoSide](ILinkerData.md#__autoside)
- [\_\_autoSize](ILinkerData.md#__autosize)
- [\_\_useNaturalRatio](ILinkerData.md#__usenaturalratio)
- [\_\_isLinePath](ILinkerData.md#__islinepath)
- [\_\_blendMode](ILinkerData.md#__blendmode)
- [\_\_useStroke](ILinkerData.md#__usestroke)
- [\_\_useArrow](ILinkerData.md#__usearrow)
- [\_\_useEffect](ILinkerData.md#__useeffect)
- [\_\_usePathBox](ILinkerData.md#__usepathbox)
- [\_\_useDim](ILinkerData.md#__usedim)
- [\_\_pathInputed](ILinkerData.md#__pathinputed)
- [\_\_pathForRender](ILinkerData.md#__pathforrender)
- [\_\_path2DForRender](ILinkerData.md#__path2dforrender)
- [\_\_startArrowPath](ILinkerData.md#__startarrowpath)
- [\_\_endArrowPath](ILinkerData.md#__endarrowpath)
- [\_\_pathForMotion](ILinkerData.md#__pathformotion)
- [cornerRadius](ILinkerData.md#cornerradius)
- [cornerSmoothing](ILinkerData.md#cornersmoothing)
- [fill](ILinkerData.md#fill)
- [borderWidth](ILinkerData.md#borderwidth)
- [borderRadius](ILinkerData.md#borderradius)
- [stroke](ILinkerData.md#stroke)
- [startArrow](ILinkerData.md#startarrow)
- [endArrow](ILinkerData.md#endarrow)
- [strokeAlign](ILinkerData.md#strokealign)
- [strokeWidth](ILinkerData.md#strokewidth)
- [strokeWidths](ILinkerData.md#strokewidths)
- [strokeScaleFixed](ILinkerData.md#strokescalefixed)
- [strokeCap](ILinkerData.md#strokecap)
- [strokeJoin](ILinkerData.md#strokejoin)
- [dashPattern](ILinkerData.md#dashpattern)
- [dashOffset](ILinkerData.md#dashoffset)
- [miterLimit](ILinkerData.md#miterlimit)
- [fontFamily](ILinkerData.md#fontfamily)
- [fontSize](ILinkerData.md#fontsize)
- [fontWeight](ILinkerData.md#fontweight)
- [italic](ILinkerData.md#italic)
- [textCase](ILinkerData.md#textcase)
- [textDecoration](ILinkerData.md#textdecoration)
- [letterSpacing](ILinkerData.md#letterspacing)
- [lineHeight](ILinkerData.md#lineheight)
- [paraIndent](ILinkerData.md#paraindent)
- [paraSpacing](ILinkerData.md#paraspacing)
- [writingMode](ILinkerData.md#writingmode)
- [textAlign](ILinkerData.md#textalign)
- [verticalAlign](ILinkerData.md#verticalalign)
- [autoSizeAlign](ILinkerData.md#autosizealign)
- [textWrap](ILinkerData.md#textwrap)
- [textOverflow](ILinkerData.md#textoverflow)
- [shadow](ILinkerData.md#shadow)
- [innerShadow](ILinkerData.md#innershadow)
- [blur](ILinkerData.md#blur)
- [backgroundBlur](ILinkerData.md#backgroundblur)
- [grayscale](ILinkerData.md#grayscale)
- [toPoint](ILinkerData.md#topoint)
- [points](ILinkerData.md#points)
- [curve](ILinkerData.md#curve)
- [startPoint](ILinkerData.md#startpoint)
- [endPoint](ILinkerData.md#endpoint)
- [animation](ILinkerData.md#animation)
- [animationOut](ILinkerData.md#animationout)
- [transition](ILinkerData.md#transition)
- [transitionOut](ILinkerData.md#transitionout)
- [states](ILinkerData.md#states)
- [state](ILinkerData.md#state)
- [hoverStyle](ILinkerData.md#hoverstyle)
- [pressStyle](ILinkerData.md#pressstyle)
- [focusStyle](ILinkerData.md#focusstyle)
- [selectedStyle](ILinkerData.md#selectedstyle)
- [disabledStyle](ILinkerData.md#disabledstyle)
- [placeholderStyle](ILinkerData.md#placeholderstyle)
- [placeholderColor](ILinkerData.md#placeholdercolor)
- [placeholderDelay](ILinkerData.md#placeholderdelay)
- [editConfig](ILinkerData.md#editconfig)
- [editOuter](ILinkerData.md#editouter)
- [editInner](ILinkerData.md#editinner)
- [scale](ILinkerData.md#scale)
- [\_\_isFills](ILinkerData.md#__isfills)
- [\_\_isStrokes](ILinkerData.md#__isstrokes)
- [\_\_strokeWidth](ILinkerData.md#__strokewidth)
- [\_\_maxStrokeWidth](ILinkerData.md#__maxstrokewidth)
- [\_\_strokeWidthCache](ILinkerData.md#__strokewidthcache)
- [\_\_hasMultiStrokeStyle](ILinkerData.md#__hasmultistrokestyle)
- [\_\_hasMultiPaint](ILinkerData.md#__hasmultipaint)
- [\_\_isAlphaPixelFill](ILinkerData.md#__isalphapixelfill)
- [\_\_isAlphaPixelStroke](ILinkerData.md#__isalphapixelstroke)
- [\_\_isTransparentFill](ILinkerData.md#__istransparentfill)
- [\_\_isTransparentStroke](ILinkerData.md#__istransparentstroke)
- [\_\_isHitPixel](ILinkerData.md#__ishitpixel)
- [\_\_isCanvas](ILinkerData.md#__iscanvas)
- [\_\_isFastShadow](ILinkerData.md#__isfastshadow)
- [\_\_fillAfterStroke](ILinkerData.md#__fillafterstroke)
- [\_\_drawAfterFill](ILinkerData.md#__drawafterfill)
- [\_\_clipAfterFill](ILinkerData.md#__clipafterfill)
- [\_\_hasSurface](ILinkerData.md#__hassurface)
- [\_\_blendLayer](ILinkerData.md#__blendlayer)
- [\_\_boxStroke](ILinkerData.md#__boxstroke)
- [\_\_font](ILinkerData.md#__font)
- [\_\_textDrawData](ILinkerData.md#__textdrawdata)
- [\_\_needComputePaint](ILinkerData.md#__needcomputepaint)

### Methods

- [\_\_get](ILinkerData.md#__get)
- [\_\_getData](ILinkerData.md#__getdata)
- [\_\_setInput](ILinkerData.md#__setinput)
- [\_\_getInput](ILinkerData.md#__getinput)
- [\_\_removeInput](ILinkerData.md#__removeinput)
- [\_\_getInputData](ILinkerData.md#__getinputdata)
- [\_\_setMiddle](ILinkerData.md#__setmiddle)
- [\_\_getMiddle](ILinkerData.md#__getmiddle)
- [destroy](ILinkerData.md#destroy)
- [\_\_checkSingle](ILinkerData.md#__checksingle)
- [\_\_removeNaturalSize](ILinkerData.md#__removenaturalsize)
- [\_\_computePaint](ILinkerData.md#__computepaint)
- [\_\_getRealStrokeWidth](ILinkerData.md#__getrealstrokewidth)
- [\_\_setPaint](ILinkerData.md#__setpaint)
- [\_\_removePaint](ILinkerData.md#__removepaint)

## Properties

### \_\_leaf

• **\_\_leaf**: [`ILeaf`](ILeaf.md)

#### Inherited from

[ILineData](ILineData.md).[__leaf](ILineData.md#__leaf)

#### Defined in

[src/leafer/packages/interface/src/data/ILeafData.ts:6](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/data/ILeafData.ts#L6)

___

### \_\_input

• **\_\_input**: [`IObject`](IObject.md)

#### Inherited from

[ILineData](ILineData.md).[__input](ILineData.md#__input)

#### Defined in

[src/leafer/packages/interface/src/data/ILeafData.ts:7](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/data/ILeafData.ts#L7)

___

### \_\_middle

• **\_\_middle**: [`IObject`](IObject.md)

#### Inherited from

[ILineData](ILineData.md).[__middle](ILineData.md#__middle)

#### Defined in

[src/leafer/packages/interface/src/data/ILeafData.ts:8](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/data/ILeafData.ts#L8)

___

### \_\_single

• `Optional` **\_\_single**: `boolean`

#### Inherited from

[ILineData](ILineData.md).[__single](ILineData.md#__single)

#### Defined in

[src/leafer/packages/interface/src/data/ILeafData.ts:30](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/data/ILeafData.ts#L30)

___

### \_\_willDestroy

• `Optional` **\_\_willDestroy**: `boolean`

#### Inherited from

[ILineData](ILineData.md).[__willDestroy](ILineData.md#__willdestroy)

#### Defined in

[src/leafer/packages/interface/src/data/ILeafData.ts:32](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/data/ILeafData.ts#L32)

___

### id

• `Optional` **id**: `string`

#### Inherited from

[ILineData](ILineData.md).[id](ILineData.md#id)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:331](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/display/ILeaf.ts#L331)

___

### name

• `Optional` **name**: `string`

#### Inherited from

[ILineData](ILineData.md).[name](ILineData.md#name)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:332](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/display/ILeaf.ts#L332)

___

### className

• `Optional` **className**: `string`

#### Inherited from

[ILineData](ILineData.md).[className](ILineData.md#classname)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:333](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/display/ILeaf.ts#L333)

___

### blendMode

• `Optional` **blendMode**: [`IBlendMode`](../modules.md#iblendmode)

#### Inherited from

[ILineData](ILineData.md).[blendMode](ILineData.md#blendmode)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:335](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/display/ILeaf.ts#L335)

___

### opacity

• `Optional` **opacity**: `number`

#### Inherited from

[ILineData](ILineData.md).[opacity](ILineData.md#opacity)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:336](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/display/ILeaf.ts#L336)

___

### visible

• `Optional` **visible**: `boolean` \| `0`

#### Inherited from

[ILineData](ILineData.md).[visible](ILineData.md#visible)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:337](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/display/ILeaf.ts#L337)

___

### selected

• `Optional` **selected**: `boolean`

#### Inherited from

[ILineData](ILineData.md).[selected](ILineData.md#selected)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:338](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/display/ILeaf.ts#L338)

___

### disabled

• `Optional` **disabled**: `boolean`

#### Inherited from

[ILineData](ILineData.md).[disabled](ILineData.md#disabled)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:339](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/display/ILeaf.ts#L339)

___

### locked

• `Optional` **locked**: `boolean`

#### Inherited from

[ILineData](ILineData.md).[locked](ILineData.md#locked)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:340](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/display/ILeaf.ts#L340)

___

### zIndex

• `Optional` **zIndex**: `number`

#### Inherited from

[ILineData](ILineData.md).[zIndex](ILineData.md#zindex)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:341](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/display/ILeaf.ts#L341)

___

### dim

• `Optional` **dim**: `number` \| `boolean`

#### Inherited from

[ILineData](ILineData.md).[dim](ILineData.md#dim)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:343](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/display/ILeaf.ts#L343)

___

### dimskip

• `Optional` **dimskip**: `boolean`

#### Inherited from

[ILineData](ILineData.md).[dimskip](ILineData.md#dimskip)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:344](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/display/ILeaf.ts#L344)

___

### bright

• `Optional` **bright**: `boolean`

#### Inherited from

[ILineData](ILineData.md).[bright](ILineData.md#bright)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:345](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/display/ILeaf.ts#L345)

___

### mask

• `Optional` **mask**: `boolean` \| [`IMaskType`](../modules.md#imasktype)

#### Inherited from

[ILineData](ILineData.md).[mask](ILineData.md#mask)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:347](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/display/ILeaf.ts#L347)

___

### eraser

• `Optional` **eraser**: `boolean` \| [`IEraserType`](../modules.md#ierasertype)

#### Inherited from

[ILineData](ILineData.md).[eraser](ILineData.md#eraser)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:348](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/display/ILeaf.ts#L348)

___

### filter

• `Optional` **filter**: [`IFilter`](IFilter.md)[]

#### Inherited from

[ILineData](ILineData.md).[filter](ILineData.md#filter)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:349](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/display/ILeaf.ts#L349)

___

### complex

• `Optional` **complex**: `boolean`

#### Inherited from

[ILineData](ILineData.md).[complex](ILineData.md#complex)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:350](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/display/ILeaf.ts#L350)

___

### x

• `Optional` **x**: `number`

#### Inherited from

[ILineData](ILineData.md).[x](ILineData.md#x)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:353](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/display/ILeaf.ts#L353)

___

### y

• `Optional` **y**: `number`

#### Inherited from

[ILineData](ILineData.md).[y](ILineData.md#y)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:354](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/display/ILeaf.ts#L354)

___

### width

• `Optional` **width**: `number`

#### Inherited from

[ILineData](ILineData.md).[width](ILineData.md#width)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:355](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/display/ILeaf.ts#L355)

___

### height

• `Optional` **height**: `number`

#### Inherited from

[ILineData](ILineData.md).[height](ILineData.md#height)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:356](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/display/ILeaf.ts#L356)

___

### scaleX

• `Optional` **scaleX**: `number`

#### Inherited from

[ILineData](ILineData.md).[scaleX](ILineData.md#scalex)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:357](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/display/ILeaf.ts#L357)

___

### scaleY

• `Optional` **scaleY**: `number`

#### Inherited from

[ILineData](ILineData.md).[scaleY](ILineData.md#scaley)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:358](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/display/ILeaf.ts#L358)

___

### scaleFixed

• `Optional` **scaleFixed**: [`IScaleFixed`](../modules.md#iscalefixed)

#### Inherited from

[ILineData](ILineData.md).[scaleFixed](ILineData.md#scalefixed)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:359](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/display/ILeaf.ts#L359)

___

### rotation

• `Optional` **rotation**: `number`

#### Inherited from

[ILineData](ILineData.md).[rotation](ILineData.md#rotation)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:360](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/display/ILeaf.ts#L360)

___

### skewX

• `Optional` **skewX**: `number`

#### Inherited from

[ILineData](ILineData.md).[skewX](ILineData.md#skewx)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:361](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/display/ILeaf.ts#L361)

___

### skewY

• `Optional` **skewY**: `number`

#### Inherited from

[ILineData](ILineData.md).[skewY](ILineData.md#skewy)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:362](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/display/ILeaf.ts#L362)

___

### offsetX

• `Optional` **offsetX**: `number`

#### Inherited from

[ILineData](ILineData.md).[offsetX](ILineData.md#offsetx)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:364](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/display/ILeaf.ts#L364)

___

### offsetY

• `Optional` **offsetY**: `number`

#### Inherited from

[ILineData](ILineData.md).[offsetY](ILineData.md#offsety)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:365](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/display/ILeaf.ts#L365)

___

### scrollX

• `Optional` **scrollX**: `number`

#### Inherited from

[ILineData](ILineData.md).[scrollX](ILineData.md#scrollx)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:366](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/display/ILeaf.ts#L366)

___

### scrollY

• `Optional` **scrollY**: `number`

#### Inherited from

[ILineData](ILineData.md).[scrollY](ILineData.md#scrolly)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:367](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/display/ILeaf.ts#L367)

___

### origin

• `Optional` **origin**: [`IUnitPointData`](IUnitPointData.md) \| [`IDirection`](../modules.md#idirection)

#### Inherited from

[ILineData](ILineData.md).[origin](ILineData.md#origin)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:369](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/display/ILeaf.ts#L369)

___

### around

• `Optional` **around**: [`IUnitPointData`](IUnitPointData.md) \| [`IDirection`](../modules.md#idirection)

#### Inherited from

[ILineData](ILineData.md).[around](ILineData.md#around)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:370](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/display/ILeaf.ts#L370)

___

### lazy

• `Optional` **lazy**: `boolean`

#### Inherited from

[ILineData](ILineData.md).[lazy](ILineData.md#lazy)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:372](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/display/ILeaf.ts#L372)

___

### pixelRatio

• `Optional` **pixelRatio**: `number`

#### Inherited from

[ILineData](ILineData.md).[pixelRatio](ILineData.md#pixelratio)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:373](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/display/ILeaf.ts#L373)

___

### renderSpread

• `Optional` **renderSpread**: [`IFourNumber`](../modules.md#ifournumber)

#### Inherited from

[ILineData](ILineData.md).[renderSpread](ILineData.md#renderspread)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:375](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/display/ILeaf.ts#L375)

___

### path

• `Optional` **path**: [`IPathCommandData`](../modules.md#ipathcommanddata)

#### Inherited from

[ILineData](ILineData.md).[path](ILineData.md#path)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:377](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/display/ILeaf.ts#L377)

___

### windingRule

• `Optional` **windingRule**: [`IWindingRule`](../modules.md#iwindingrule)

#### Inherited from

[ILineData](ILineData.md).[windingRule](ILineData.md#windingrule)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:378](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/display/ILeaf.ts#L378)

___

### closed

• `Optional` **closed**: `boolean`

#### Inherited from

[ILineData](ILineData.md).[closed](ILineData.md#closed)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:379](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/display/ILeaf.ts#L379)

___

### flow

• `Optional` **flow**: [`IFlowType`](../modules.md#iflowtype)

#### Inherited from

[ILineData](ILineData.md).[flow](ILineData.md#flow)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:382](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/display/ILeaf.ts#L382)

___

### padding

• `Optional` **padding**: [`IFourNumber`](../modules.md#ifournumber)

#### Inherited from

[ILineData](ILineData.md).[padding](ILineData.md#padding)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:383](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/display/ILeaf.ts#L383)

___

### gap

• `Optional` **gap**: [`IGap`](../modules.md#igap) \| [`IPointGap`](IPointGap.md)

#### Inherited from

[ILineData](ILineData.md).[gap](ILineData.md#gap)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:384](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/display/ILeaf.ts#L384)

___

### flowAlign

• `Optional` **flowAlign**: [`IFlowAxisAlign`](IFlowAxisAlign.md) \| [`IFlowAlign`](../modules.md#iflowalign)

#### Inherited from

[ILineData](ILineData.md).[flowAlign](ILineData.md#flowalign)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:385](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/display/ILeaf.ts#L385)

___

### flowWrap

• `Optional` **flowWrap**: [`IFlowWrap`](../modules.md#iflowwrap)

#### Inherited from

[ILineData](ILineData.md).[flowWrap](ILineData.md#flowwrap)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:386](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/display/ILeaf.ts#L386)

___

### itemBox

• `Optional` **itemBox**: [`IFlowBoxType`](../modules.md#iflowboxtype)

#### Inherited from

[ILineData](ILineData.md).[itemBox](ILineData.md#itembox)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:387](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/display/ILeaf.ts#L387)

___

### inFlow

• `Optional` **inFlow**: `boolean`

#### Inherited from

[ILineData](ILineData.md).[inFlow](ILineData.md#inflow)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:389](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/display/ILeaf.ts#L389)

___

### autoWidth

• `Optional` **autoWidth**: [`IAutoSize`](../modules.md#iautosize)

#### Inherited from

[ILineData](ILineData.md).[autoWidth](ILineData.md#autowidth)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:390](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/display/ILeaf.ts#L390)

___

### autoHeight

• `Optional` **autoHeight**: [`IAutoSize`](../modules.md#iautosize)

#### Inherited from

[ILineData](ILineData.md).[autoHeight](ILineData.md#autoheight)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:391](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/display/ILeaf.ts#L391)

___

### lockRatio

• `Optional` **lockRatio**: `boolean`

#### Inherited from

[ILineData](ILineData.md).[lockRatio](ILineData.md#lockratio)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:392](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/display/ILeaf.ts#L392)

___

### autoBox

• `Optional` **autoBox**: [`IAutoBoxData`](IAutoBoxData.md) \| [`IConstraint`](IConstraint.md)

#### Inherited from

[ILineData](ILineData.md).[autoBox](ILineData.md#autobox)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:393](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/display/ILeaf.ts#L393)

___

### widthRange

• `Optional` **widthRange**: [`IRangeSize`](IRangeSize.md)

#### Inherited from

[ILineData](ILineData.md).[widthRange](ILineData.md#widthrange)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:395](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/display/ILeaf.ts#L395)

___

### heightRange

• `Optional` **heightRange**: [`IRangeSize`](IRangeSize.md)

#### Inherited from

[ILineData](ILineData.md).[heightRange](ILineData.md#heightrange)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:396](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/display/ILeaf.ts#L396)

___

### draggable

• `Optional` **draggable**: `boolean` \| [`IAxis`](../modules.md#iaxis)

#### Inherited from

[ILineData](ILineData.md).[draggable](ILineData.md#draggable)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:399](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/display/ILeaf.ts#L399)

___

### dragBounds

• `Optional` **dragBounds**: `"parent"` \| [`IBoundsData`](IBoundsData.md)

#### Inherited from

[ILineData](ILineData.md).[dragBounds](ILineData.md#dragbounds)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:400](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/display/ILeaf.ts#L400)

___

### dragBoundsType

• `Optional` **dragBoundsType**: [`IDragBoundsType`](../modules.md#idragboundstype)

#### Inherited from

[ILineData](ILineData.md).[dragBoundsType](ILineData.md#dragboundstype)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:401](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/display/ILeaf.ts#L401)

___

### editable

• `Optional` **editable**: `boolean`

#### Inherited from

[ILineData](ILineData.md).[editable](ILineData.md#editable)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:403](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/display/ILeaf.ts#L403)

___

### hittable

• `Optional` **hittable**: `boolean`

#### Inherited from

[ILineData](ILineData.md).[hittable](ILineData.md#hittable)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:405](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/display/ILeaf.ts#L405)

___

### hitFill

• `Optional` **hitFill**: [`IHitType`](../modules.md#ihittype)

#### Inherited from

[ILineData](ILineData.md).[hitFill](ILineData.md#hitfill)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:406](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/display/ILeaf.ts#L406)

___

### hitStroke

• `Optional` **hitStroke**: [`IHitType`](../modules.md#ihittype)

#### Inherited from

[ILineData](ILineData.md).[hitStroke](ILineData.md#hitstroke)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:407](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/display/ILeaf.ts#L407)

___

### hitBox

• `Optional` **hitBox**: `boolean`

#### Inherited from

[ILineData](ILineData.md).[hitBox](ILineData.md#hitbox)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:408](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/display/ILeaf.ts#L408)

___

### hitChildren

• `Optional` **hitChildren**: `boolean`

#### Inherited from

[ILineData](ILineData.md).[hitChildren](ILineData.md#hitchildren)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:409](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/display/ILeaf.ts#L409)

___

### hitSelf

• `Optional` **hitSelf**: `boolean`

#### Inherited from

[ILineData](ILineData.md).[hitSelf](ILineData.md#hitself)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:410](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/display/ILeaf.ts#L410)

___

### hitRadius

• `Optional` **hitRadius**: `number`

#### Inherited from

[ILineData](ILineData.md).[hitRadius](ILineData.md#hitradius)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:411](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/display/ILeaf.ts#L411)

___

### button

• `Optional` **button**: `boolean`

#### Inherited from

[ILineData](ILineData.md).[button](ILineData.md#button)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:413](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/display/ILeaf.ts#L413)

___

### cursor

• `Optional` **cursor**: [`ICursorType`](../modules.md#icursortype) \| [`ICursorType`](../modules.md#icursortype)[]

#### Inherited from

[ILineData](ILineData.md).[cursor](ILineData.md#cursor)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:414](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/display/ILeaf.ts#L414)

___

### motionPath

• `Optional` **motionPath**: `boolean`

#### Inherited from

[ILineData](ILineData.md).[motionPath](ILineData.md#motionpath)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:416](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/display/ILeaf.ts#L416)

___

### motionPrecision

• `Optional` **motionPrecision**: `number`

#### Inherited from

[ILineData](ILineData.md).[motionPrecision](ILineData.md#motionprecision)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:417](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/display/ILeaf.ts#L417)

___

### motion

• `Optional` **motion**: `number` \| [`IUnitData`](IUnitData.md)

#### Inherited from

[ILineData](ILineData.md).[motion](ILineData.md#motion)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:419](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/display/ILeaf.ts#L419)

___

### motionRotation

• `Optional` **motionRotation**: `number` \| `boolean`

#### Inherited from

[ILineData](ILineData.md).[motionRotation](ILineData.md#motionrotation)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:420](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/display/ILeaf.ts#L420)

___

### normalStyle

• `Optional` **normalStyle**: [`IObject`](IObject.md)

#### Inherited from

[ILineData](ILineData.md).[normalStyle](ILineData.md#normalstyle)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:422](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/display/ILeaf.ts#L422)

___

### data

• `Optional` **data**: [`IObject`](IObject.md)

#### Inherited from

[ILineData](ILineData.md).[data](ILineData.md#data)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:425](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/display/ILeaf.ts#L425)

___

### \_\_childBranchNumber

• `Optional` **\_\_childBranchNumber**: `number`

#### Inherited from

[ILineData](ILineData.md).[__childBranchNumber](ILineData.md#__childbranchnumber)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:428](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/display/ILeaf.ts#L428)

___

### \_\_complex

• `Optional` **\_\_complex**: `boolean`

#### Inherited from

[ILineData](ILineData.md).[__complex](ILineData.md#__complex)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:429](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/display/ILeaf.ts#L429)

___

### \_\_complexData

• `Optional` **\_\_complexData**: [`ILeafComplexCachedData`](ILeafComplexCachedData.md)

#### Inherited from

[ILineData](ILineData.md).[__complexData](ILineData.md#__complexdata)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:430](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/display/ILeaf.ts#L430)

___

### \_\_naturalWidth

• `Optional` **\_\_naturalWidth**: `number`

#### Inherited from

[ILineData](ILineData.md).[__naturalWidth](ILineData.md#__naturalwidth)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:432](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/display/ILeaf.ts#L432)

___

### \_\_naturalHeight

• `Optional` **\_\_naturalHeight**: `number`

#### Inherited from

[ILineData](ILineData.md).[__naturalHeight](ILineData.md#__naturalheight)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:433](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/display/ILeaf.ts#L433)

___

### \_\_autoWidth

• `Optional` `Readonly` **\_\_autoWidth**: `boolean`

#### Inherited from

[ILineData](ILineData.md).[__autoWidth](ILineData.md#__autowidth)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:435](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/display/ILeaf.ts#L435)

___

### \_\_autoHeight

• `Optional` `Readonly` **\_\_autoHeight**: `boolean`

#### Inherited from

[ILineData](ILineData.md).[__autoHeight](ILineData.md#__autoheight)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:436](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/display/ILeaf.ts#L436)

___

### \_\_autoSide

• `Optional` `Readonly` **\_\_autoSide**: `boolean`

#### Inherited from

[ILineData](ILineData.md).[__autoSide](ILineData.md#__autoside)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:437](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/display/ILeaf.ts#L437)

___

### \_\_autoSize

• `Optional` `Readonly` **\_\_autoSize**: `boolean`

#### Inherited from

[ILineData](ILineData.md).[__autoSize](ILineData.md#__autosize)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:438](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/display/ILeaf.ts#L438)

___

### \_\_useNaturalRatio

• `Readonly` **\_\_useNaturalRatio**: `boolean`

#### Inherited from

[ILineData](ILineData.md).[__useNaturalRatio](ILineData.md#__usenaturalratio)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:440](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/display/ILeaf.ts#L440)

___

### \_\_isLinePath

• `Readonly` **\_\_isLinePath**: `boolean`

#### Inherited from

[ILineData](ILineData.md).[__isLinePath](ILineData.md#__islinepath)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:441](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/display/ILeaf.ts#L441)

___

### \_\_blendMode

• `Readonly` **\_\_blendMode**: `string`

#### Inherited from

[ILineData](ILineData.md).[__blendMode](ILineData.md#__blendmode)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:442](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/display/ILeaf.ts#L442)

___

### \_\_useStroke

• `Optional` **\_\_useStroke**: `boolean`

#### Inherited from

[ILineData](ILineData.md).[__useStroke](ILineData.md#__usestroke)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:444](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/display/ILeaf.ts#L444)

___

### \_\_useArrow

• `Optional` **\_\_useArrow**: `boolean`

#### Inherited from

[ILineData](ILineData.md).[__useArrow](ILineData.md#__usearrow)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:445](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/display/ILeaf.ts#L445)

___

### \_\_useEffect

• `Optional` **\_\_useEffect**: `boolean`

#### Inherited from

[ILineData](ILineData.md).[__useEffect](ILineData.md#__useeffect)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:446](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/display/ILeaf.ts#L446)

___

### \_\_usePathBox

• `Optional` **\_\_usePathBox**: `boolean`

#### Inherited from

[ILineData](ILineData.md).[__usePathBox](ILineData.md#__usepathbox)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:447](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/display/ILeaf.ts#L447)

___

### \_\_useDim

• `Optional` **\_\_useDim**: `boolean`

#### Inherited from

[ILineData](ILineData.md).[__useDim](ILineData.md#__usedim)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:448](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/display/ILeaf.ts#L448)

___

### \_\_pathInputed

• `Optional` **\_\_pathInputed**: `number`

#### Inherited from

[ILineData](ILineData.md).[__pathInputed](ILineData.md#__pathinputed)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:450](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/display/ILeaf.ts#L450)

___

### \_\_pathForRender

• `Optional` **\_\_pathForRender**: [`IPathCommandData`](../modules.md#ipathcommanddata)

#### Inherited from

[ILineData](ILineData.md).[__pathForRender](ILineData.md#__pathforrender)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:451](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/display/ILeaf.ts#L451)

___

### \_\_path2DForRender

• `Optional` **\_\_path2DForRender**: [`IPath2D`](IPath2D.md)

#### Inherited from

[ILineData](ILineData.md).[__path2DForRender](ILineData.md#__path2dforrender)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:452](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/display/ILeaf.ts#L452)

___

### \_\_startArrowPath

• `Optional` **\_\_startArrowPath**: [`IArrowPathData`](IArrowPathData.md)

#### Inherited from

[ILineData](ILineData.md).[__startArrowPath](ILineData.md#__startarrowpath)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:454](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/display/ILeaf.ts#L454)

___

### \_\_endArrowPath

• `Optional` **\_\_endArrowPath**: [`IArrowPathData`](IArrowPathData.md)

#### Inherited from

[ILineData](ILineData.md).[__endArrowPath](ILineData.md#__endarrowpath)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:455](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/display/ILeaf.ts#L455)

___

### \_\_pathForMotion

• `Optional` **\_\_pathForMotion**: [`IMotionPathData`](IMotionPathData.md)

#### Inherited from

[ILineData](ILineData.md).[__pathForMotion](ILineData.md#__pathformotion)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:456](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/display/ILeaf.ts#L456)

___

### cornerRadius

• `Optional` **cornerRadius**: `number`

#### Inherited from

[ILineData](ILineData.md).[cornerRadius](ILineData.md#cornerradius)

#### Defined in

[src/ui/packages/interface/src/ICommonAttr.ts:17](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/interface/src/ICommonAttr.ts#L17)

___

### cornerSmoothing

• `Optional` **cornerSmoothing**: `number`

#### Inherited from

[ILineData](ILineData.md).[cornerSmoothing](ILineData.md#cornersmoothing)

#### Defined in

[src/ui/packages/interface/src/ICommonAttr.ts:18](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/interface/src/ICommonAttr.ts#L18)

___

### fill

• `Optional` **fill**: `string` \| [`ILeafPaint`](ILeafPaint.md)[]

#### Inherited from

[ILineData](ILineData.md).[fill](ILineData.md#fill)

#### Defined in

[src/ui/packages/interface/src/ICommonAttr.ts:29](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/interface/src/ICommonAttr.ts#L29)

___

### borderWidth

• `Optional` **borderWidth**: `number` \| `number`[]

#### Inherited from

[ILineData](ILineData.md).[borderWidth](ILineData.md#borderwidth)

#### Defined in

[src/ui/packages/interface/src/ICommonAttr.ts:34](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/interface/src/ICommonAttr.ts#L34)

___

### borderRadius

• `Optional` **borderRadius**: `number` \| `number`[]

#### Inherited from

[ILineData](ILineData.md).[borderRadius](ILineData.md#borderradius)

#### Defined in

[src/ui/packages/interface/src/ICommonAttr.ts:35](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/interface/src/ICommonAttr.ts#L35)

___

### stroke

• `Optional` **stroke**: `string` \| [`ILeafStrokePaint`](ILeafStrokePaint.md)[]

#### Inherited from

[ILineData](ILineData.md).[stroke](ILineData.md#stroke)

#### Defined in

[src/ui/packages/interface/src/ICommonAttr.ts:65](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/interface/src/ICommonAttr.ts#L65)

___

### startArrow

• `Optional` **startArrow**: [`IArrowStyle`](../modules.md#iarrowstyle)

#### Inherited from

[ILineData](ILineData.md).[startArrow](ILineData.md#startarrow)

#### Defined in

[src/ui/packages/interface/src/ICommonAttr.ts:67](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/interface/src/ICommonAttr.ts#L67)

___

### endArrow

• `Optional` **endArrow**: [`IArrowStyle`](../modules.md#iarrowstyle)

#### Inherited from

[ILineData](ILineData.md).[endArrow](ILineData.md#endarrow)

#### Defined in

[src/ui/packages/interface/src/ICommonAttr.ts:68](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/interface/src/ICommonAttr.ts#L68)

___

### strokeAlign

• `Optional` **strokeAlign**: [`IStrokeAlign`](../modules.md#istrokealign)

#### Inherited from

[ILineData](ILineData.md).[strokeAlign](ILineData.md#strokealign)

#### Defined in

[src/ui/packages/interface/src/ICommonAttr.ts:72](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/interface/src/ICommonAttr.ts#L72)

___

### strokeWidth

• `Optional` **strokeWidth**: `number`

#### Inherited from

[ILineData](ILineData.md).[strokeWidth](ILineData.md#strokewidth)

#### Defined in

[src/ui/packages/interface/src/ICommonAttr.ts:73](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/interface/src/ICommonAttr.ts#L73)

___

### strokeWidths

• `Optional` **strokeWidths**: `number`[]

#### Inherited from

[ILineData](ILineData.md).[strokeWidths](ILineData.md#strokewidths)

#### Defined in

[src/ui/packages/interface/src/ICommonAttr.ts:74](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/interface/src/ICommonAttr.ts#L74)

___

### strokeScaleFixed

• `Optional` **strokeScaleFixed**: [`IScaleFixed`](../modules.md#iscalefixed)

#### Inherited from

[ILineData](ILineData.md).[strokeScaleFixed](ILineData.md#strokescalefixed)

#### Defined in

[src/ui/packages/interface/src/ICommonAttr.ts:75](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/interface/src/ICommonAttr.ts#L75)

___

### strokeCap

• `Optional` **strokeCap**: [`IStrokeCap`](../modules.md#istrokecap)

#### Inherited from

[ILineData](ILineData.md).[strokeCap](ILineData.md#strokecap)

#### Defined in

[src/ui/packages/interface/src/ICommonAttr.ts:76](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/interface/src/ICommonAttr.ts#L76)

___

### strokeJoin

• `Optional` **strokeJoin**: [`IStrokeJoin`](../modules.md#istrokejoin)

#### Inherited from

[ILineData](ILineData.md).[strokeJoin](ILineData.md#strokejoin)

#### Defined in

[src/ui/packages/interface/src/ICommonAttr.ts:77](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/interface/src/ICommonAttr.ts#L77)

___

### dashPattern

• `Optional` **dashPattern**: `number`[]

#### Inherited from

[ILineData](ILineData.md).[dashPattern](ILineData.md#dashpattern)

#### Defined in

[src/ui/packages/interface/src/ICommonAttr.ts:78](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/interface/src/ICommonAttr.ts#L78)

___

### dashOffset

• `Optional` **dashOffset**: `number`

#### Inherited from

[ILineData](ILineData.md).[dashOffset](ILineData.md#dashoffset)

#### Defined in

[src/ui/packages/interface/src/ICommonAttr.ts:79](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/interface/src/ICommonAttr.ts#L79)

___

### miterLimit

• `Optional` **miterLimit**: `number`

#### Inherited from

[ILineData](ILineData.md).[miterLimit](ILineData.md#miterlimit)

#### Defined in

[src/ui/packages/interface/src/ICommonAttr.ts:80](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/interface/src/ICommonAttr.ts#L80)

___

### fontFamily

• `Optional` **fontFamily**: `string`

#### Inherited from

[ILineData](ILineData.md).[fontFamily](ILineData.md#fontfamily)

#### Defined in

[src/ui/packages/interface/src/ICommonAttr.ts:127](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/interface/src/ICommonAttr.ts#L127)

___

### fontSize

• `Optional` **fontSize**: `number`

#### Inherited from

[ILineData](ILineData.md).[fontSize](ILineData.md#fontsize)

#### Defined in

[src/ui/packages/interface/src/ICommonAttr.ts:128](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/interface/src/ICommonAttr.ts#L128)

___

### fontWeight

• `Optional` **fontWeight**: [`IFontWeight`](../modules.md#ifontweight)

#### Inherited from

[ILineData](ILineData.md).[fontWeight](ILineData.md#fontweight)

#### Defined in

[src/ui/packages/interface/src/ICommonAttr.ts:129](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/interface/src/ICommonAttr.ts#L129)

___

### italic

• `Optional` **italic**: `boolean`

#### Inherited from

[ILineData](ILineData.md).[italic](ILineData.md#italic)

#### Defined in

[src/ui/packages/interface/src/ICommonAttr.ts:130](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/interface/src/ICommonAttr.ts#L130)

___

### textCase

• `Optional` **textCase**: [`ITextCase`](../modules.md#itextcase)

#### Inherited from

[ILineData](ILineData.md).[textCase](ILineData.md#textcase)

#### Defined in

[src/ui/packages/interface/src/ICommonAttr.ts:131](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/interface/src/ICommonAttr.ts#L131)

___

### textDecoration

• `Optional` **textDecoration**: [`ITextDecoration`](../modules.md#itextdecoration)

#### Inherited from

[ILineData](ILineData.md).[textDecoration](ILineData.md#textdecoration)

#### Defined in

[src/ui/packages/interface/src/ICommonAttr.ts:132](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/interface/src/ICommonAttr.ts#L132)

___

### letterSpacing

• `Optional` **letterSpacing**: `number`

#### Inherited from

[ILineData](ILineData.md).[letterSpacing](ILineData.md#letterspacing)

#### Defined in

[src/ui/packages/interface/src/ICommonAttr.ts:133](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/interface/src/ICommonAttr.ts#L133)

___

### lineHeight

• `Optional` **lineHeight**: `number`

#### Inherited from

[ILineData](ILineData.md).[lineHeight](ILineData.md#lineheight)

#### Defined in

[src/ui/packages/interface/src/ICommonAttr.ts:134](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/interface/src/ICommonAttr.ts#L134)

___

### paraIndent

• `Optional` **paraIndent**: `number`

#### Inherited from

[ILineData](ILineData.md).[paraIndent](ILineData.md#paraindent)

#### Defined in

[src/ui/packages/interface/src/ICommonAttr.ts:136](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/interface/src/ICommonAttr.ts#L136)

___

### paraSpacing

• `Optional` **paraSpacing**: `number`

#### Inherited from

[ILineData](ILineData.md).[paraSpacing](ILineData.md#paraspacing)

#### Defined in

[src/ui/packages/interface/src/ICommonAttr.ts:137](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/interface/src/ICommonAttr.ts#L137)

___

### writingMode

• `Optional` **writingMode**: [`IWritingMode`](../modules.md#iwritingmode)

#### Inherited from

[ILineData](ILineData.md).[writingMode](ILineData.md#writingmode)

#### Defined in

[src/ui/packages/interface/src/ICommonAttr.ts:139](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/interface/src/ICommonAttr.ts#L139)

___

### textAlign

• `Optional` **textAlign**: [`ITextAlign`](../modules.md#itextalign)

#### Inherited from

[ILineData](ILineData.md).[textAlign](ILineData.md#textalign)

#### Defined in

[src/ui/packages/interface/src/ICommonAttr.ts:140](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/interface/src/ICommonAttr.ts#L140)

___

### verticalAlign

• `Optional` **verticalAlign**: [`IVerticalAlign`](../modules.md#iverticalalign)

#### Inherited from

[ILineData](ILineData.md).[verticalAlign](ILineData.md#verticalalign)

#### Defined in

[src/ui/packages/interface/src/ICommonAttr.ts:141](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/interface/src/ICommonAttr.ts#L141)

___

### autoSizeAlign

• `Optional` **autoSizeAlign**: `boolean`

#### Inherited from

[ILineData](ILineData.md).[autoSizeAlign](ILineData.md#autosizealign)

#### Defined in

[src/ui/packages/interface/src/ICommonAttr.ts:142](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/interface/src/ICommonAttr.ts#L142)

___

### textWrap

• `Optional` **textWrap**: [`ITextWrap`](../modules.md#itextwrap)

#### Inherited from

[ILineData](ILineData.md).[textWrap](ILineData.md#textwrap)

#### Defined in

[src/ui/packages/interface/src/ICommonAttr.ts:144](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/interface/src/ICommonAttr.ts#L144)

___

### textOverflow

• `Optional` **textOverflow**: [`ITextOverflow`](../modules.md#itextoverflow)

#### Inherited from

[ILineData](ILineData.md).[textOverflow](ILineData.md#textoverflow)

#### Defined in

[src/ui/packages/interface/src/ICommonAttr.ts:145](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/interface/src/ICommonAttr.ts#L145)

___

### shadow

• `Optional` **shadow**: [`ILeafShadowEffect`](ILeafShadowEffect.md)[]

#### Inherited from

[ILineData](ILineData.md).[shadow](ILineData.md#shadow)

#### Defined in

[src/ui/packages/interface/src/ICommonAttr.ts:164](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/interface/src/ICommonAttr.ts#L164)

___

### innerShadow

• `Optional` **innerShadow**: [`ILeafShadowEffect`](ILeafShadowEffect.md)[]

#### Inherited from

[ILineData](ILineData.md).[innerShadow](ILineData.md#innershadow)

#### Defined in

[src/ui/packages/interface/src/ICommonAttr.ts:165](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/interface/src/ICommonAttr.ts#L165)

___

### blur

• `Optional` **blur**: `number`

#### Inherited from

[ILineData](ILineData.md).[blur](ILineData.md#blur)

#### Defined in

[src/ui/packages/interface/src/ICommonAttr.ts:166](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/interface/src/ICommonAttr.ts#L166)

___

### backgroundBlur

• `Optional` **backgroundBlur**: `number`

#### Inherited from

[ILineData](ILineData.md).[backgroundBlur](ILineData.md#backgroundblur)

#### Defined in

[src/ui/packages/interface/src/ICommonAttr.ts:167](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/interface/src/ICommonAttr.ts#L167)

___

### grayscale

• `Optional` **grayscale**: `number`

#### Inherited from

[ILineData](ILineData.md).[grayscale](ILineData.md#grayscale)

#### Defined in

[src/ui/packages/interface/src/ICommonAttr.ts:168](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/interface/src/ICommonAttr.ts#L168)

___

### toPoint

• `Optional` **toPoint**: [`IPointData`](IPointData.md)

#### Inherited from

[ILineData](ILineData.md).[toPoint](ILineData.md#topoint)

#### Defined in

[src/ui/packages/interface/src/IUI.ts:26](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/interface/src/IUI.ts#L26)

___

### points

• `Optional` **points**: `number`[] \| [`IPointData`](IPointData.md)[]

#### Inherited from

[ILineData](ILineData.md).[points](ILineData.md#points)

#### Defined in

[src/ui/packages/interface/src/IUI.ts:27](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/interface/src/IUI.ts#L27)

___

### curve

• `Optional` **curve**: `number` \| `boolean`

#### Inherited from

[ILineData](ILineData.md).[curve](ILineData.md#curve)

#### Defined in

[src/ui/packages/interface/src/IUI.ts:28](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/interface/src/IUI.ts#L28)

___

### startPoint

• `Optional` **startPoint**: `string` \| [`IUI`](IUI.md) \| [`ILinkerPointData`](ILinkerPointData.md)

#### Inherited from

ILinkerAttrData.startPoint

#### Defined in

[src/ui/packages/interface/src/IUI.ts:86](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/interface/src/IUI.ts#L86)

___

### endPoint

• `Optional` **endPoint**: `string` \| [`IUI`](IUI.md) \| [`ILinkerPointData`](ILinkerPointData.md)

#### Inherited from

ILinkerAttrData.endPoint

#### Defined in

[src/ui/packages/interface/src/IUI.ts:87](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/interface/src/IUI.ts#L87)

___

### animation

• `Optional` **animation**: [`IAnimation`](../modules.md#ianimation) \| [`IAnimation`](../modules.md#ianimation)[]

#### Inherited from

[ILineData](ILineData.md).[animation](ILineData.md#animation)

#### Defined in

[src/ui/packages/interface/src/IUI.ts:563](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/interface/src/IUI.ts#L563)

___

### animationOut

• `Optional` **animationOut**: [`IAnimation`](../modules.md#ianimation) \| [`IAnimation`](../modules.md#ianimation)[]

#### Inherited from

[ILineData](ILineData.md).[animationOut](ILineData.md#animationout)

#### Defined in

[src/ui/packages/interface/src/IUI.ts:564](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/interface/src/IUI.ts#L564)

___

### transition

• `Optional` **transition**: [`ITransition`](../modules.md#itransition)

#### Inherited from

[ILineData](ILineData.md).[transition](ILineData.md#transition)

#### Defined in

[src/ui/packages/interface/src/IUI.ts:566](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/interface/src/IUI.ts#L566)

___

### transitionOut

• `Optional` **transitionOut**: [`ITransition`](../modules.md#itransition)

#### Inherited from

[ILineData](ILineData.md).[transitionOut](ILineData.md#transitionout)

#### Defined in

[src/ui/packages/interface/src/IUI.ts:567](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/interface/src/IUI.ts#L567)

___

### states

• `Optional` **states**: [`IStates`](IStates.md)

#### Inherited from

[ILineData](ILineData.md).[states](ILineData.md#states)

#### Defined in

[src/ui/packages/interface/src/IUI.ts:569](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/interface/src/IUI.ts#L569)

___

### state

• `Optional` **state**: `string`

#### Inherited from

[ILineData](ILineData.md).[state](ILineData.md#state)

#### Defined in

[src/ui/packages/interface/src/IUI.ts:570](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/interface/src/IUI.ts#L570)

___

### hoverStyle

• `Optional` **hoverStyle**: [`IStateStyle`](IStateStyle.md)

#### Inherited from

[ILineData](ILineData.md).[hoverStyle](ILineData.md#hoverstyle)

#### Defined in

[src/ui/packages/interface/src/IUI.ts:572](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/interface/src/IUI.ts#L572)

___

### pressStyle

• `Optional` **pressStyle**: [`IStateStyle`](IStateStyle.md)

#### Inherited from

[ILineData](ILineData.md).[pressStyle](ILineData.md#pressstyle)

#### Defined in

[src/ui/packages/interface/src/IUI.ts:573](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/interface/src/IUI.ts#L573)

___

### focusStyle

• `Optional` **focusStyle**: [`IStateStyle`](IStateStyle.md)

#### Inherited from

[ILineData](ILineData.md).[focusStyle](ILineData.md#focusstyle)

#### Defined in

[src/ui/packages/interface/src/IUI.ts:574](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/interface/src/IUI.ts#L574)

___

### selectedStyle

• `Optional` **selectedStyle**: [`IStateStyle`](IStateStyle.md)

#### Inherited from

[ILineData](ILineData.md).[selectedStyle](ILineData.md#selectedstyle)

#### Defined in

[src/ui/packages/interface/src/IUI.ts:575](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/interface/src/IUI.ts#L575)

___

### disabledStyle

• `Optional` **disabledStyle**: [`IStateStyle`](IStateStyle.md)

#### Inherited from

[ILineData](ILineData.md).[disabledStyle](ILineData.md#disabledstyle)

#### Defined in

[src/ui/packages/interface/src/IUI.ts:576](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/interface/src/IUI.ts#L576)

___

### placeholderStyle

• `Optional` **placeholderStyle**: [`IStateStyle`](IStateStyle.md)

#### Inherited from

[ILineData](ILineData.md).[placeholderStyle](ILineData.md#placeholderstyle)

#### Defined in

[src/ui/packages/interface/src/IUI.ts:577](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/interface/src/IUI.ts#L577)

___

### placeholderColor

• `Optional` **placeholderColor**: `string`

#### Inherited from

[ILineData](ILineData.md).[placeholderColor](ILineData.md#placeholdercolor)

#### Defined in

[src/ui/packages/interface/src/IUI.ts:578](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/interface/src/IUI.ts#L578)

___

### placeholderDelay

• `Optional` **placeholderDelay**: `number`

#### Inherited from

[ILineData](ILineData.md).[placeholderDelay](ILineData.md#placeholderdelay)

#### Defined in

[src/ui/packages/interface/src/IUI.ts:579](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/interface/src/IUI.ts#L579)

___

### editConfig

• `Optional` **editConfig**: [`IEditorConfig`](IEditorConfig.md)

#### Inherited from

[ILineData](ILineData.md).[editConfig](ILineData.md#editconfig)

#### Defined in

[src/ui/packages/interface/src/IUI.ts:581](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/interface/src/IUI.ts#L581)

___

### editOuter

• `Optional` **editOuter**: `string`

#### Inherited from

[ILineData](ILineData.md).[editOuter](ILineData.md#editouter)

#### Defined in

[src/ui/packages/interface/src/IUI.ts:582](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/interface/src/IUI.ts#L582)

___

### editInner

• `Optional` **editInner**: `string`

#### Inherited from

[ILineData](ILineData.md).[editInner](ILineData.md#editinner)

#### Defined in

[src/ui/packages/interface/src/IUI.ts:583](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/interface/src/IUI.ts#L583)

___

### scale

• `Readonly` **scale**: `number` \| [`IPointData`](IPointData.md)

#### Inherited from

[ILineData](ILineData.md).[scale](ILineData.md#scale)

#### Defined in

[src/ui/packages/interface/src/IUI.ts:592](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/interface/src/IUI.ts#L592)

___

### \_\_isFills

• `Optional` **\_\_isFills**: `boolean`

#### Inherited from

[ILineData](ILineData.md).[__isFills](ILineData.md#__isfills)

#### Defined in

[src/ui/packages/interface/src/IUI.ts:595](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/interface/src/IUI.ts#L595)

___

### \_\_isStrokes

• `Optional` **\_\_isStrokes**: `boolean`

#### Inherited from

[ILineData](ILineData.md).[__isStrokes](ILineData.md#__isstrokes)

#### Defined in

[src/ui/packages/interface/src/IUI.ts:596](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/interface/src/IUI.ts#L596)

___

### \_\_strokeWidth

• `Readonly` **\_\_strokeWidth**: `number`

#### Inherited from

[ILineData](ILineData.md).[__strokeWidth](ILineData.md#__strokewidth)

#### Defined in

[src/ui/packages/interface/src/IUI.ts:598](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/interface/src/IUI.ts#L598)

___

### \_\_maxStrokeWidth

• `Readonly` **\_\_maxStrokeWidth**: `number`

#### Inherited from

[ILineData](ILineData.md).[__maxStrokeWidth](ILineData.md#__maxstrokewidth)

#### Defined in

[src/ui/packages/interface/src/IUI.ts:599](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/interface/src/IUI.ts#L599)

___

### \_\_strokeWidthCache

• `Optional` **\_\_strokeWidthCache**: `number`

#### Inherited from

[ILineData](ILineData.md).[__strokeWidthCache](ILineData.md#__strokewidthcache)

#### Defined in

[src/ui/packages/interface/src/IUI.ts:600](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/interface/src/IUI.ts#L600)

___

### \_\_hasMultiStrokeStyle

• `Optional` **\_\_hasMultiStrokeStyle**: `number`

#### Inherited from

[ILineData](ILineData.md).[__hasMultiStrokeStyle](ILineData.md#__hasmultistrokestyle)

#### Defined in

[src/ui/packages/interface/src/IUI.ts:601](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/interface/src/IUI.ts#L601)

___

### \_\_hasMultiPaint

• `Optional` `Readonly` **\_\_hasMultiPaint**: `boolean`

#### Inherited from

[ILineData](ILineData.md).[__hasMultiPaint](ILineData.md#__hasmultipaint)

#### Defined in

[src/ui/packages/interface/src/IUI.ts:602](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/interface/src/IUI.ts#L602)

___

### \_\_isAlphaPixelFill

• `Optional` **\_\_isAlphaPixelFill**: `boolean`

#### Inherited from

[ILineData](ILineData.md).[__isAlphaPixelFill](ILineData.md#__isalphapixelfill)

#### Defined in

[src/ui/packages/interface/src/IUI.ts:604](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/interface/src/IUI.ts#L604)

___

### \_\_isAlphaPixelStroke

• `Optional` **\_\_isAlphaPixelStroke**: `boolean`

#### Inherited from

[ILineData](ILineData.md).[__isAlphaPixelStroke](ILineData.md#__isalphapixelstroke)

#### Defined in

[src/ui/packages/interface/src/IUI.ts:605](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/interface/src/IUI.ts#L605)

___

### \_\_isTransparentFill

• `Optional` **\_\_isTransparentFill**: `boolean`

#### Inherited from

[ILineData](ILineData.md).[__isTransparentFill](ILineData.md#__istransparentfill)

#### Defined in

[src/ui/packages/interface/src/IUI.ts:607](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/interface/src/IUI.ts#L607)

___

### \_\_isTransparentStroke

• `Optional` **\_\_isTransparentStroke**: `boolean`

#### Inherited from

[ILineData](ILineData.md).[__isTransparentStroke](ILineData.md#__istransparentstroke)

#### Defined in

[src/ui/packages/interface/src/IUI.ts:608](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/interface/src/IUI.ts#L608)

___

### \_\_isHitPixel

• `Optional` **\_\_isHitPixel**: `boolean`

#### Inherited from

[ILineData](ILineData.md).[__isHitPixel](ILineData.md#__ishitpixel)

#### Defined in

[src/ui/packages/interface/src/IUI.ts:610](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/interface/src/IUI.ts#L610)

___

### \_\_isCanvas

• `Optional` **\_\_isCanvas**: `boolean`

#### Inherited from

[ILineData](ILineData.md).[__isCanvas](ILineData.md#__iscanvas)

#### Defined in

[src/ui/packages/interface/src/IUI.ts:611](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/interface/src/IUI.ts#L611)

___

### \_\_isFastShadow

• `Optional` **\_\_isFastShadow**: `boolean`

#### Inherited from

[ILineData](ILineData.md).[__isFastShadow](ILineData.md#__isfastshadow)

#### Defined in

[src/ui/packages/interface/src/IUI.ts:612](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/interface/src/IUI.ts#L612)

___

### \_\_fillAfterStroke

• `Optional` **\_\_fillAfterStroke**: `boolean`

#### Inherited from

[ILineData](ILineData.md).[__fillAfterStroke](ILineData.md#__fillafterstroke)

#### Defined in

[src/ui/packages/interface/src/IUI.ts:614](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/interface/src/IUI.ts#L614)

___

### \_\_drawAfterFill

• `Optional` **\_\_drawAfterFill**: `boolean`

#### Inherited from

[ILineData](ILineData.md).[__drawAfterFill](ILineData.md#__drawafterfill)

#### Defined in

[src/ui/packages/interface/src/IUI.ts:615](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/interface/src/IUI.ts#L615)

___

### \_\_clipAfterFill

• `Optional` `Readonly` **\_\_clipAfterFill**: `boolean`

#### Inherited from

[ILineData](ILineData.md).[__clipAfterFill](ILineData.md#__clipafterfill)

#### Defined in

[src/ui/packages/interface/src/IUI.ts:616](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/interface/src/IUI.ts#L616)

___

### \_\_hasSurface

• `Optional` `Readonly` **\_\_hasSurface**: `boolean`

#### Inherited from

[ILineData](ILineData.md).[__hasSurface](ILineData.md#__hassurface)

#### Defined in

[src/ui/packages/interface/src/IUI.ts:617](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/interface/src/IUI.ts#L617)

___

### \_\_blendLayer

• `Optional` **\_\_blendLayer**: `boolean`

#### Inherited from

[ILineData](ILineData.md).[__blendLayer](ILineData.md#__blendlayer)

#### Defined in

[src/ui/packages/interface/src/IUI.ts:619](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/interface/src/IUI.ts#L619)

___

### \_\_boxStroke

• `Optional` **\_\_boxStroke**: `boolean`

#### Inherited from

[ILineData](ILineData.md).[__boxStroke](ILineData.md#__boxstroke)

#### Defined in

[src/ui/packages/interface/src/IUI.ts:621](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/interface/src/IUI.ts#L621)

___

### \_\_font

• `Optional` **\_\_font**: `string`

#### Inherited from

[ILineData](ILineData.md).[__font](ILineData.md#__font)

#### Defined in

[src/ui/packages/interface/src/IUI.ts:624](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/interface/src/IUI.ts#L624)

___

### \_\_textDrawData

• `Optional` **\_\_textDrawData**: [`ITextDrawData`](ITextDrawData.md)

#### Inherited from

[ILineData](ILineData.md).[__textDrawData](ILineData.md#__textdrawdata)

#### Defined in

[src/ui/packages/interface/src/IUI.ts:625](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/interface/src/IUI.ts#L625)

___

### \_\_needComputePaint

• `Optional` **\_\_needComputePaint**: `boolean`

#### Inherited from

[ILineData](ILineData.md).[__needComputePaint](ILineData.md#__needcomputepaint)

#### Defined in

[src/ui/packages/interface/src/IUI.ts:627](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/interface/src/IUI.ts#L627)

## Methods

### \_\_get

▸ **__get**(`name`): `any`

#### Parameters

| Name   | Type     |
| :----- | :------- |
| `name` | `string` |

#### Returns

`any`

#### Inherited from

[ILineData](ILineData.md).[__get](ILineData.md#__get)

#### Defined in

[src/leafer/packages/interface/src/data/ILeafData.ts:10](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/data/ILeafData.ts#L10)

___

### \_\_getData

▸ **__getData**(): [`IObject`](IObject.md)

#### Returns

[`IObject`](IObject.md)

#### Inherited from

[ILineData](ILineData.md).[__getData](ILineData.md#__getdata)

#### Defined in

[src/leafer/packages/interface/src/data/ILeafData.ts:11](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/data/ILeafData.ts#L11)

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

#### Inherited from

[ILineData](ILineData.md).[__setInput](ILineData.md#__setinput)

#### Defined in

[src/leafer/packages/interface/src/data/ILeafData.ts:13](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/data/ILeafData.ts#L13)

___

### \_\_getInput

▸ **__getInput**(`name`): `any`

#### Parameters

| Name   | Type     |
| :----- | :------- |
| `name` | `string` |

#### Returns

`any`

#### Inherited from

[ILineData](ILineData.md).[__getInput](ILineData.md#__getinput)

#### Defined in

[src/leafer/packages/interface/src/data/ILeafData.ts:14](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/data/ILeafData.ts#L14)

___

### \_\_removeInput

▸ **__removeInput**(`name`): `void`

#### Parameters

| Name   | Type     |
| :----- | :------- |
| `name` | `string` |

#### Returns

`void`

#### Inherited from

[ILineData](ILineData.md).[__removeInput](ILineData.md#__removeinput)

#### Defined in

[src/leafer/packages/interface/src/data/ILeafData.ts:15](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/data/ILeafData.ts#L15)

___

### \_\_getInputData

▸ **__getInputData**(`names?`, `options?`): [`IObject`](IObject.md)

#### Parameters

| Name       | Type                                                                                        |
| :--------- | :------------------------------------------------------------------------------------------ |
| `names?`   | `string`[] \\| [`IObject`](IObject.md) |
| `options?` | [`IJSONOptions`](IJSONOptions.md)                                                           |

#### Returns

[`IObject`](IObject.md)

#### Inherited from

[ILineData](ILineData.md).[__getInputData](ILineData.md#__getinputdata)

#### Defined in

[src/leafer/packages/interface/src/data/ILeafData.ts:16](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/data/ILeafData.ts#L16)

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

#### Inherited from

[ILineData](ILineData.md).[__setMiddle](ILineData.md#__setmiddle)

#### Defined in

[src/leafer/packages/interface/src/data/ILeafData.ts:18](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/data/ILeafData.ts#L18)

___

### \_\_getMiddle

▸ **__getMiddle**(`name`): `any`

#### Parameters

| Name   | Type     |
| :----- | :------- |
| `name` | `string` |

#### Returns

`any`

#### Inherited from

[ILineData](ILineData.md).[__getMiddle](ILineData.md#__getmiddle)

#### Defined in

[src/leafer/packages/interface/src/data/ILeafData.ts:19](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/data/ILeafData.ts#L19)

___

### destroy

▸ **destroy**(): `void`

#### Returns

`void`

#### Inherited from

[ILineData](ILineData.md).[destroy](ILineData.md#destroy)

#### Defined in

[src/leafer/packages/interface/src/data/ILeafData.ts:21](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/data/ILeafData.ts#L21)

___

### \_\_checkSingle

▸ **__checkSingle**(): `void`

#### Returns

`void`

#### Inherited from

[ILineData](ILineData.md).[__checkSingle](ILineData.md#__checksingle)

#### Defined in

[src/leafer/packages/interface/src/data/ILeafData.ts:33](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/data/ILeafData.ts#L33)

___

### \_\_removeNaturalSize

▸ **__removeNaturalSize**(): `void`

#### Returns

`void`

#### Inherited from

[ILineData](ILineData.md).[__removeNaturalSize](ILineData.md#__removenaturalsize)

#### Defined in

[src/leafer/packages/interface/src/data/ILeafData.ts:34](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/data/ILeafData.ts#L34)

___

### \_\_computePaint

▸ **__computePaint**(): `void`

#### Returns

`void`

#### Inherited from

[ILineData](ILineData.md).[__computePaint](ILineData.md#__computepaint)

#### Defined in

[src/ui/packages/interface/src/IUI.ts:628](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/interface/src/IUI.ts#L628)

___

### \_\_getRealStrokeWidth

▸ **__getRealStrokeWidth**(`childStyle?`): `number`

#### Parameters

| Name          | Type                                              |
| :------------ | :------------------------------------------------ |
| `childStyle?` | [`IStrokeComputedStyle`](IStrokeComputedStyle.md) |

#### Returns

`number`

#### Inherited from

[ILineData](ILineData.md).[__getRealStrokeWidth](ILineData.md#__getrealstrokewidth)

#### Defined in

[src/ui/packages/interface/src/IUI.ts:629](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/interface/src/IUI.ts#L629)

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

#### Inherited from

[ILineData](ILineData.md).[__setPaint](ILineData.md#__setpaint)

#### Defined in

[src/ui/packages/interface/src/IUI.ts:631](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/interface/src/IUI.ts#L631)

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

#### Inherited from

[ILineData](ILineData.md).[__removePaint](ILineData.md#__removepaint)

#### Defined in

[src/ui/packages/interface/src/IUI.ts:632](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/interface/src/IUI.ts#L632)
