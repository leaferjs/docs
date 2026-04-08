# Interface: IRobotData

## Hierarchy

- `IRobotAttrData`

- [`IRectData`](IRectData.md)

  ↳ **`IRobotData`**

## Table of contents

### Properties

- [\_\_leaf](IRobotData.md#__leaf)
- [\_\_input](IRobotData.md#__input)
- [\_\_middle](IRobotData.md#__middle)
- [\_\_single](IRobotData.md#__single)
- [\_\_willDestroy](IRobotData.md#__willdestroy)
- [id](IRobotData.md#id)
- [name](IRobotData.md#name)
- [className](IRobotData.md#classname)
- [blendMode](IRobotData.md#blendmode)
- [opacity](IRobotData.md#opacity)
- [visible](IRobotData.md#visible)
- [selected](IRobotData.md#selected)
- [disabled](IRobotData.md#disabled)
- [locked](IRobotData.md#locked)
- [zIndex](IRobotData.md#zindex)
- [dim](IRobotData.md#dim)
- [dimskip](IRobotData.md#dimskip)
- [bright](IRobotData.md#bright)
- [mask](IRobotData.md#mask)
- [eraser](IRobotData.md#eraser)
- [filter](IRobotData.md#filter)
- [complex](IRobotData.md#complex)
- [x](IRobotData.md#x)
- [y](IRobotData.md#y)
- [width](IRobotData.md#width)
- [height](IRobotData.md#height)
- [scaleX](IRobotData.md#scalex)
- [scaleY](IRobotData.md#scaley)
- [scaleFixed](IRobotData.md#scalefixed)
- [rotation](IRobotData.md#rotation)
- [skewX](IRobotData.md#skewx)
- [skewY](IRobotData.md#skewy)
- [offsetX](IRobotData.md#offsetx)
- [offsetY](IRobotData.md#offsety)
- [scrollX](IRobotData.md#scrollx)
- [scrollY](IRobotData.md#scrolly)
- [origin](IRobotData.md#origin)
- [around](IRobotData.md#around)
- [lazy](IRobotData.md#lazy)
- [pixelRatio](IRobotData.md#pixelratio)
- [renderSpread](IRobotData.md#renderspread)
- [path](IRobotData.md#path)
- [windingRule](IRobotData.md#windingrule)
- [closed](IRobotData.md#closed)
- [flow](IRobotData.md#flow)
- [padding](IRobotData.md#padding)
- [gap](IRobotData.md#gap)
- [flowAlign](IRobotData.md#flowalign)
- [flowWrap](IRobotData.md#flowwrap)
- [itemBox](IRobotData.md#itembox)
- [inFlow](IRobotData.md#inflow)
- [autoWidth](IRobotData.md#autowidth)
- [autoHeight](IRobotData.md#autoheight)
- [lockRatio](IRobotData.md#lockratio)
- [autoBox](IRobotData.md#autobox)
- [widthRange](IRobotData.md#widthrange)
- [heightRange](IRobotData.md#heightrange)
- [draggable](IRobotData.md#draggable)
- [dragBounds](IRobotData.md#dragbounds)
- [dragBoundsType](IRobotData.md#dragboundstype)
- [editable](IRobotData.md#editable)
- [hittable](IRobotData.md#hittable)
- [hitFill](IRobotData.md#hitfill)
- [hitStroke](IRobotData.md#hitstroke)
- [hitBox](IRobotData.md#hitbox)
- [hitChildren](IRobotData.md#hitchildren)
- [hitSelf](IRobotData.md#hitself)
- [hitRadius](IRobotData.md#hitradius)
- [button](IRobotData.md#button)
- [cursor](IRobotData.md#cursor)
- [motionPath](IRobotData.md#motionpath)
- [motionPrecision](IRobotData.md#motionprecision)
- [motion](IRobotData.md#motion)
- [motionRotation](IRobotData.md#motionrotation)
- [normalStyle](IRobotData.md#normalstyle)
- [data](IRobotData.md#data)
- [\_\_childBranchNumber](IRobotData.md#__childbranchnumber)
- [\_\_complex](IRobotData.md#__complex)
- [\_\_complexData](IRobotData.md#__complexdata)
- [\_\_naturalWidth](IRobotData.md#__naturalwidth)
- [\_\_naturalHeight](IRobotData.md#__naturalheight)
- [\_\_autoWidth](IRobotData.md#__autowidth)
- [\_\_autoHeight](IRobotData.md#__autoheight)
- [\_\_autoSide](IRobotData.md#__autoside)
- [\_\_autoSize](IRobotData.md#__autosize)
- [\_\_useNaturalRatio](IRobotData.md#__usenaturalratio)
- [\_\_isLinePath](IRobotData.md#__islinepath)
- [\_\_blendMode](IRobotData.md#__blendmode)
- [\_\_useStroke](IRobotData.md#__usestroke)
- [\_\_useArrow](IRobotData.md#__usearrow)
- [\_\_useEffect](IRobotData.md#__useeffect)
- [\_\_usePathBox](IRobotData.md#__usepathbox)
- [\_\_useDim](IRobotData.md#__usedim)
- [\_\_pathInputed](IRobotData.md#__pathinputed)
- [\_\_pathForRender](IRobotData.md#__pathforrender)
- [\_\_path2DForRender](IRobotData.md#__path2dforrender)
- [\_\_startArrowPath](IRobotData.md#__startarrowpath)
- [\_\_endArrowPath](IRobotData.md#__endarrowpath)
- [\_\_pathForMotion](IRobotData.md#__pathformotion)
- [cornerRadius](IRobotData.md#cornerradius)
- [cornerSmoothing](IRobotData.md#cornersmoothing)
- [fill](IRobotData.md#fill)
- [borderWidth](IRobotData.md#borderwidth)
- [borderRadius](IRobotData.md#borderradius)
- [stroke](IRobotData.md#stroke)
- [startArrow](IRobotData.md#startarrow)
- [endArrow](IRobotData.md#endarrow)
- [strokeAlign](IRobotData.md#strokealign)
- [strokeWidth](IRobotData.md#strokewidth)
- [strokeWidths](IRobotData.md#strokewidths)
- [strokeScaleFixed](IRobotData.md#strokescalefixed)
- [strokeCap](IRobotData.md#strokecap)
- [strokeJoin](IRobotData.md#strokejoin)
- [dashPattern](IRobotData.md#dashpattern)
- [dashOffset](IRobotData.md#dashoffset)
- [miterLimit](IRobotData.md#miterlimit)
- [fontFamily](IRobotData.md#fontfamily)
- [fontSize](IRobotData.md#fontsize)
- [fontWeight](IRobotData.md#fontweight)
- [italic](IRobotData.md#italic)
- [textCase](IRobotData.md#textcase)
- [textDecoration](IRobotData.md#textdecoration)
- [letterSpacing](IRobotData.md#letterspacing)
- [lineHeight](IRobotData.md#lineheight)
- [paraIndent](IRobotData.md#paraindent)
- [paraSpacing](IRobotData.md#paraspacing)
- [writingMode](IRobotData.md#writingmode)
- [textAlign](IRobotData.md#textalign)
- [verticalAlign](IRobotData.md#verticalalign)
- [autoSizeAlign](IRobotData.md#autosizealign)
- [textWrap](IRobotData.md#textwrap)
- [textOverflow](IRobotData.md#textoverflow)
- [shadow](IRobotData.md#shadow)
- [innerShadow](IRobotData.md#innershadow)
- [blur](IRobotData.md#blur)
- [backgroundBlur](IRobotData.md#backgroundblur)
- [grayscale](IRobotData.md#grayscale)
- [robot](IRobotData.md#robot)
- [actions](IRobotData.md#actions)
- [action](IRobotData.md#action)
- [now](IRobotData.md#now)
- [FPS](IRobotData.md#fps)
- [loop](IRobotData.md#loop)
- [animation](IRobotData.md#animation)
- [animationOut](IRobotData.md#animationout)
- [transition](IRobotData.md#transition)
- [transitionOut](IRobotData.md#transitionout)
- [states](IRobotData.md#states)
- [state](IRobotData.md#state)
- [hoverStyle](IRobotData.md#hoverstyle)
- [pressStyle](IRobotData.md#pressstyle)
- [focusStyle](IRobotData.md#focusstyle)
- [selectedStyle](IRobotData.md#selectedstyle)
- [disabledStyle](IRobotData.md#disabledstyle)
- [placeholderStyle](IRobotData.md#placeholderstyle)
- [placeholderColor](IRobotData.md#placeholdercolor)
- [placeholderDelay](IRobotData.md#placeholderdelay)
- [editConfig](IRobotData.md#editconfig)
- [editOuter](IRobotData.md#editouter)
- [editInner](IRobotData.md#editinner)
- [scale](IRobotData.md#scale)
- [\_\_isFills](IRobotData.md#__isfills)
- [\_\_isStrokes](IRobotData.md#__isstrokes)
- [\_\_strokeWidth](IRobotData.md#__strokewidth)
- [\_\_maxStrokeWidth](IRobotData.md#__maxstrokewidth)
- [\_\_strokeWidthCache](IRobotData.md#__strokewidthcache)
- [\_\_hasMultiStrokeStyle](IRobotData.md#__hasmultistrokestyle)
- [\_\_hasMultiPaint](IRobotData.md#__hasmultipaint)
- [\_\_isAlphaPixelFill](IRobotData.md#__isalphapixelfill)
- [\_\_isAlphaPixelStroke](IRobotData.md#__isalphapixelstroke)
- [\_\_isTransparentFill](IRobotData.md#__istransparentfill)
- [\_\_isTransparentStroke](IRobotData.md#__istransparentstroke)
- [\_\_isHitPixel](IRobotData.md#__ishitpixel)
- [\_\_isCanvas](IRobotData.md#__iscanvas)
- [\_\_isFastShadow](IRobotData.md#__isfastshadow)
- [\_\_fillAfterStroke](IRobotData.md#__fillafterstroke)
- [\_\_drawAfterFill](IRobotData.md#__drawafterfill)
- [\_\_clipAfterFill](IRobotData.md#__clipafterfill)
- [\_\_hasSurface](IRobotData.md#__hassurface)
- [\_\_blendLayer](IRobotData.md#__blendlayer)
- [\_\_boxStroke](IRobotData.md#__boxstroke)
- [\_\_font](IRobotData.md#__font)
- [\_\_textDrawData](IRobotData.md#__textdrawdata)
- [\_\_needComputePaint](IRobotData.md#__needcomputepaint)

### Methods

- [\_\_get](IRobotData.md#__get)
- [\_\_getData](IRobotData.md#__getdata)
- [\_\_setInput](IRobotData.md#__setinput)
- [\_\_getInput](IRobotData.md#__getinput)
- [\_\_removeInput](IRobotData.md#__removeinput)
- [\_\_getInputData](IRobotData.md#__getinputdata)
- [\_\_setMiddle](IRobotData.md#__setmiddle)
- [\_\_getMiddle](IRobotData.md#__getmiddle)
- [destroy](IRobotData.md#destroy)
- [\_\_checkSingle](IRobotData.md#__checksingle)
- [\_\_removeNaturalSize](IRobotData.md#__removenaturalsize)
- [\_\_computePaint](IRobotData.md#__computepaint)
- [\_\_getRealStrokeWidth](IRobotData.md#__getrealstrokewidth)
- [\_\_setPaint](IRobotData.md#__setpaint)
- [\_\_removePaint](IRobotData.md#__removepaint)

## Properties

### \_\_leaf

• **\_\_leaf**: [`ILeaf`](ILeaf.md)

#### Inherited from

[IRectData](IRectData.md).[__leaf](IRectData.md#__leaf)

#### Defined in

[src/leafer/packages/interface/src/data/ILeafData.ts:6](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/data/ILeafData.ts#L6)

___

### \_\_input

• **\_\_input**: [`IObject`](IObject.md)

#### Inherited from

[IRectData](IRectData.md).[__input](IRectData.md#__input)

#### Defined in

[src/leafer/packages/interface/src/data/ILeafData.ts:7](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/data/ILeafData.ts#L7)

___

### \_\_middle

• **\_\_middle**: [`IObject`](IObject.md)

#### Inherited from

[IRectData](IRectData.md).[__middle](IRectData.md#__middle)

#### Defined in

[src/leafer/packages/interface/src/data/ILeafData.ts:8](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/data/ILeafData.ts#L8)

___

### \_\_single

• `Optional` **\_\_single**: `boolean`

#### Inherited from

[IRectData](IRectData.md).[__single](IRectData.md#__single)

#### Defined in

[src/leafer/packages/interface/src/data/ILeafData.ts:30](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/data/ILeafData.ts#L30)

___

### \_\_willDestroy

• `Optional` **\_\_willDestroy**: `boolean`

#### Inherited from

[IRectData](IRectData.md).[__willDestroy](IRectData.md#__willdestroy)

#### Defined in

[src/leafer/packages/interface/src/data/ILeafData.ts:32](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/data/ILeafData.ts#L32)

___

### id

• `Optional` **id**: `string`

#### Inherited from

[IRectData](IRectData.md).[id](IRectData.md#id)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:331](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/display/ILeaf.ts#L331)

___

### name

• `Optional` **name**: `string`

#### Inherited from

[IRectData](IRectData.md).[name](IRectData.md#name)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:332](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/display/ILeaf.ts#L332)

___

### className

• `Optional` **className**: `string`

#### Inherited from

[IRectData](IRectData.md).[className](IRectData.md#classname)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:333](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/display/ILeaf.ts#L333)

___

### blendMode

• `Optional` **blendMode**: [`IBlendMode`](../modules.md#iblendmode)

#### Inherited from

[IRectData](IRectData.md).[blendMode](IRectData.md#blendmode)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:335](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/display/ILeaf.ts#L335)

___

### opacity

• `Optional` **opacity**: `number`

#### Inherited from

[IRectData](IRectData.md).[opacity](IRectData.md#opacity)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:336](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/display/ILeaf.ts#L336)

___

### visible

• `Optional` **visible**: `boolean` \| ``0``

#### Inherited from

[IRectData](IRectData.md).[visible](IRectData.md#visible)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:337](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/display/ILeaf.ts#L337)

___

### selected

• `Optional` **selected**: `boolean`

#### Inherited from

[IRectData](IRectData.md).[selected](IRectData.md#selected)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:338](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/display/ILeaf.ts#L338)

___

### disabled

• `Optional` **disabled**: `boolean`

#### Inherited from

[IRectData](IRectData.md).[disabled](IRectData.md#disabled)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:339](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/display/ILeaf.ts#L339)

___

### locked

• `Optional` **locked**: `boolean`

#### Inherited from

[IRectData](IRectData.md).[locked](IRectData.md#locked)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:340](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/display/ILeaf.ts#L340)

___

### zIndex

• `Optional` **zIndex**: `number`

#### Inherited from

[IRectData](IRectData.md).[zIndex](IRectData.md#zindex)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:341](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/display/ILeaf.ts#L341)

___

### dim

• `Optional` **dim**: `number` \| `boolean`

#### Inherited from

[IRectData](IRectData.md).[dim](IRectData.md#dim)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:343](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/display/ILeaf.ts#L343)

___

### dimskip

• `Optional` **dimskip**: `boolean`

#### Inherited from

[IRectData](IRectData.md).[dimskip](IRectData.md#dimskip)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:344](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/display/ILeaf.ts#L344)

___

### bright

• `Optional` **bright**: `boolean`

#### Inherited from

[IRectData](IRectData.md).[bright](IRectData.md#bright)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:345](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/display/ILeaf.ts#L345)

___

### mask

• `Optional` **mask**: `boolean` \| [`IMaskType`](../modules.md#imasktype)

#### Inherited from

[IRectData](IRectData.md).[mask](IRectData.md#mask)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:347](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/display/ILeaf.ts#L347)

___

### eraser

• `Optional` **eraser**: `boolean` \| [`IEraserType`](../modules.md#ierasertype)

#### Inherited from

[IRectData](IRectData.md).[eraser](IRectData.md#eraser)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:348](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/display/ILeaf.ts#L348)

___

### filter

• `Optional` **filter**: [`IFilter`](IFilter.md)[]

#### Inherited from

[IRectData](IRectData.md).[filter](IRectData.md#filter)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:349](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/display/ILeaf.ts#L349)

___

### complex

• `Optional` **complex**: `boolean`

#### Inherited from

[IRectData](IRectData.md).[complex](IRectData.md#complex)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:350](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/display/ILeaf.ts#L350)

___

### x

• `Optional` **x**: `number`

#### Inherited from

[IRectData](IRectData.md).[x](IRectData.md#x)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:353](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/display/ILeaf.ts#L353)

___

### y

• `Optional` **y**: `number`

#### Inherited from

[IRectData](IRectData.md).[y](IRectData.md#y)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:354](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/display/ILeaf.ts#L354)

___

### width

• `Optional` **width**: `number`

#### Inherited from

[IRectData](IRectData.md).[width](IRectData.md#width)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:355](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/display/ILeaf.ts#L355)

___

### height

• `Optional` **height**: `number`

#### Inherited from

[IRectData](IRectData.md).[height](IRectData.md#height)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:356](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/display/ILeaf.ts#L356)

___

### scaleX

• `Optional` **scaleX**: `number`

#### Inherited from

[IRectData](IRectData.md).[scaleX](IRectData.md#scalex)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:357](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/display/ILeaf.ts#L357)

___

### scaleY

• `Optional` **scaleY**: `number`

#### Inherited from

[IRectData](IRectData.md).[scaleY](IRectData.md#scaley)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:358](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/display/ILeaf.ts#L358)

___

### scaleFixed

• `Optional` **scaleFixed**: [`IScaleFixed`](../modules.md#iscalefixed)

#### Inherited from

[IRectData](IRectData.md).[scaleFixed](IRectData.md#scalefixed)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:359](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/display/ILeaf.ts#L359)

___

### rotation

• `Optional` **rotation**: `number`

#### Inherited from

[IRectData](IRectData.md).[rotation](IRectData.md#rotation)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:360](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/display/ILeaf.ts#L360)

___

### skewX

• `Optional` **skewX**: `number`

#### Inherited from

[IRectData](IRectData.md).[skewX](IRectData.md#skewx)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:361](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/display/ILeaf.ts#L361)

___

### skewY

• `Optional` **skewY**: `number`

#### Inherited from

[IRectData](IRectData.md).[skewY](IRectData.md#skewy)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:362](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/display/ILeaf.ts#L362)

___

### offsetX

• `Optional` **offsetX**: `number`

#### Inherited from

[IRectData](IRectData.md).[offsetX](IRectData.md#offsetx)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:364](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/display/ILeaf.ts#L364)

___

### offsetY

• `Optional` **offsetY**: `number`

#### Inherited from

[IRectData](IRectData.md).[offsetY](IRectData.md#offsety)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:365](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/display/ILeaf.ts#L365)

___

### scrollX

• `Optional` **scrollX**: `number`

#### Inherited from

[IRectData](IRectData.md).[scrollX](IRectData.md#scrollx)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:366](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/display/ILeaf.ts#L366)

___

### scrollY

• `Optional` **scrollY**: `number`

#### Inherited from

[IRectData](IRectData.md).[scrollY](IRectData.md#scrolly)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:367](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/display/ILeaf.ts#L367)

___

### origin

• `Optional` **origin**: [`IUnitPointData`](IUnitPointData.md) \| [`IDirection`](../modules.md#idirection)

#### Inherited from

[IRectData](IRectData.md).[origin](IRectData.md#origin)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:369](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/display/ILeaf.ts#L369)

___

### around

• `Optional` **around**: [`IUnitPointData`](IUnitPointData.md) \| [`IDirection`](../modules.md#idirection)

#### Inherited from

[IRectData](IRectData.md).[around](IRectData.md#around)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:370](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/display/ILeaf.ts#L370)

___

### lazy

• `Optional` **lazy**: `boolean`

#### Inherited from

[IRectData](IRectData.md).[lazy](IRectData.md#lazy)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:372](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/display/ILeaf.ts#L372)

___

### pixelRatio

• `Optional` **pixelRatio**: `number`

#### Inherited from

[IRectData](IRectData.md).[pixelRatio](IRectData.md#pixelratio)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:373](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/display/ILeaf.ts#L373)

___

### renderSpread

• `Optional` **renderSpread**: [`IFourNumber`](../modules.md#ifournumber)

#### Inherited from

[IRectData](IRectData.md).[renderSpread](IRectData.md#renderspread)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:375](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/display/ILeaf.ts#L375)

___

### path

• `Optional` **path**: [`IPathCommandData`](../modules.md#ipathcommanddata)

#### Inherited from

[IRectData](IRectData.md).[path](IRectData.md#path)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:377](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/display/ILeaf.ts#L377)

___

### windingRule

• `Optional` **windingRule**: [`IWindingRule`](../modules.md#iwindingrule)

#### Inherited from

[IRectData](IRectData.md).[windingRule](IRectData.md#windingrule)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:378](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/display/ILeaf.ts#L378)

___

### closed

• `Optional` **closed**: `boolean`

#### Inherited from

[IRectData](IRectData.md).[closed](IRectData.md#closed)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:379](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/display/ILeaf.ts#L379)

___

### flow

• `Optional` **flow**: [`IFlowType`](../modules.md#iflowtype)

#### Inherited from

[IRectData](IRectData.md).[flow](IRectData.md#flow)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:382](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/display/ILeaf.ts#L382)

___

### padding

• `Optional` **padding**: [`IFourNumber`](../modules.md#ifournumber)

#### Inherited from

[IRectData](IRectData.md).[padding](IRectData.md#padding)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:383](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/display/ILeaf.ts#L383)

___

### gap

• `Optional` **gap**: [`IGap`](../modules.md#igap) \| [`IPointGap`](IPointGap.md)

#### Inherited from

[IRectData](IRectData.md).[gap](IRectData.md#gap)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:384](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/display/ILeaf.ts#L384)

___

### flowAlign

• `Optional` **flowAlign**: [`IFlowAxisAlign`](IFlowAxisAlign.md) \| [`IFlowAlign`](../modules.md#iflowalign)

#### Inherited from

[IRectData](IRectData.md).[flowAlign](IRectData.md#flowalign)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:385](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/display/ILeaf.ts#L385)

___

### flowWrap

• `Optional` **flowWrap**: [`IFlowWrap`](../modules.md#iflowwrap)

#### Inherited from

[IRectData](IRectData.md).[flowWrap](IRectData.md#flowwrap)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:386](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/display/ILeaf.ts#L386)

___

### itemBox

• `Optional` **itemBox**: [`IFlowBoxType`](../modules.md#iflowboxtype)

#### Inherited from

[IRectData](IRectData.md).[itemBox](IRectData.md#itembox)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:387](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/display/ILeaf.ts#L387)

___

### inFlow

• `Optional` **inFlow**: `boolean`

#### Inherited from

[IRectData](IRectData.md).[inFlow](IRectData.md#inflow)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:389](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/display/ILeaf.ts#L389)

___

### autoWidth

• `Optional` **autoWidth**: [`IAutoSize`](../modules.md#iautosize)

#### Inherited from

[IRectData](IRectData.md).[autoWidth](IRectData.md#autowidth)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:390](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/display/ILeaf.ts#L390)

___

### autoHeight

• `Optional` **autoHeight**: [`IAutoSize`](../modules.md#iautosize)

#### Inherited from

[IRectData](IRectData.md).[autoHeight](IRectData.md#autoheight)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:391](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/display/ILeaf.ts#L391)

___

### lockRatio

• `Optional` **lockRatio**: `boolean`

#### Inherited from

[IRectData](IRectData.md).[lockRatio](IRectData.md#lockratio)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:392](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/display/ILeaf.ts#L392)

___

### autoBox

• `Optional` **autoBox**: [`IAutoBoxData`](IAutoBoxData.md) \| [`IConstraint`](IConstraint.md)

#### Inherited from

[IRectData](IRectData.md).[autoBox](IRectData.md#autobox)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:393](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/display/ILeaf.ts#L393)

___

### widthRange

• `Optional` **widthRange**: [`IRangeSize`](IRangeSize.md)

#### Inherited from

[IRectData](IRectData.md).[widthRange](IRectData.md#widthrange)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:395](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/display/ILeaf.ts#L395)

___

### heightRange

• `Optional` **heightRange**: [`IRangeSize`](IRangeSize.md)

#### Inherited from

[IRectData](IRectData.md).[heightRange](IRectData.md#heightrange)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:396](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/display/ILeaf.ts#L396)

___

### draggable

• `Optional` **draggable**: `boolean` \| [`IAxis`](../modules.md#iaxis)

#### Inherited from

[IRectData](IRectData.md).[draggable](IRectData.md#draggable)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:399](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/display/ILeaf.ts#L399)

___

### dragBounds

• `Optional` **dragBounds**: ``"parent"`` \| [`IBoundsData`](IBoundsData.md)

#### Inherited from

[IRectData](IRectData.md).[dragBounds](IRectData.md#dragbounds)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:400](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/display/ILeaf.ts#L400)

___

### dragBoundsType

• `Optional` **dragBoundsType**: [`IDragBoundsType`](../modules.md#idragboundstype)

#### Inherited from

[IRectData](IRectData.md).[dragBoundsType](IRectData.md#dragboundstype)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:401](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/display/ILeaf.ts#L401)

___

### editable

• `Optional` **editable**: `boolean`

#### Inherited from

[IRectData](IRectData.md).[editable](IRectData.md#editable)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:403](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/display/ILeaf.ts#L403)

___

### hittable

• `Optional` **hittable**: `boolean`

#### Inherited from

[IRectData](IRectData.md).[hittable](IRectData.md#hittable)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:405](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/display/ILeaf.ts#L405)

___

### hitFill

• `Optional` **hitFill**: [`IHitType`](../modules.md#ihittype)

#### Inherited from

[IRectData](IRectData.md).[hitFill](IRectData.md#hitfill)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:406](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/display/ILeaf.ts#L406)

___

### hitStroke

• `Optional` **hitStroke**: [`IHitType`](../modules.md#ihittype)

#### Inherited from

[IRectData](IRectData.md).[hitStroke](IRectData.md#hitstroke)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:407](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/display/ILeaf.ts#L407)

___

### hitBox

• `Optional` **hitBox**: `boolean`

#### Inherited from

[IRectData](IRectData.md).[hitBox](IRectData.md#hitbox)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:408](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/display/ILeaf.ts#L408)

___

### hitChildren

• `Optional` **hitChildren**: `boolean`

#### Inherited from

[IRectData](IRectData.md).[hitChildren](IRectData.md#hitchildren)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:409](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/display/ILeaf.ts#L409)

___

### hitSelf

• `Optional` **hitSelf**: `boolean`

#### Inherited from

[IRectData](IRectData.md).[hitSelf](IRectData.md#hitself)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:410](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/display/ILeaf.ts#L410)

___

### hitRadius

• `Optional` **hitRadius**: `number`

#### Inherited from

[IRectData](IRectData.md).[hitRadius](IRectData.md#hitradius)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:411](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/display/ILeaf.ts#L411)

___

### button

• `Optional` **button**: `boolean`

#### Inherited from

[IRectData](IRectData.md).[button](IRectData.md#button)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:413](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/display/ILeaf.ts#L413)

___

### cursor

• `Optional` **cursor**: [`ICursorType`](../modules.md#icursortype) \| [`ICursorType`](../modules.md#icursortype)[]

#### Inherited from

[IRectData](IRectData.md).[cursor](IRectData.md#cursor)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:414](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/display/ILeaf.ts#L414)

___

### motionPath

• `Optional` **motionPath**: `boolean`

#### Inherited from

[IRectData](IRectData.md).[motionPath](IRectData.md#motionpath)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:416](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/display/ILeaf.ts#L416)

___

### motionPrecision

• `Optional` **motionPrecision**: `number`

#### Inherited from

[IRectData](IRectData.md).[motionPrecision](IRectData.md#motionprecision)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:417](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/display/ILeaf.ts#L417)

___

### motion

• `Optional` **motion**: `number` \| [`IUnitData`](IUnitData.md)

#### Inherited from

[IRectData](IRectData.md).[motion](IRectData.md#motion)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:419](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/display/ILeaf.ts#L419)

___

### motionRotation

• `Optional` **motionRotation**: `number` \| `boolean`

#### Inherited from

[IRectData](IRectData.md).[motionRotation](IRectData.md#motionrotation)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:420](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/display/ILeaf.ts#L420)

___

### normalStyle

• `Optional` **normalStyle**: [`IObject`](IObject.md)

#### Inherited from

[IRectData](IRectData.md).[normalStyle](IRectData.md#normalstyle)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:422](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/display/ILeaf.ts#L422)

___

### data

• `Optional` **data**: [`IObject`](IObject.md)

#### Inherited from

[IRectData](IRectData.md).[data](IRectData.md#data)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:425](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/display/ILeaf.ts#L425)

___

### \_\_childBranchNumber

• `Optional` **\_\_childBranchNumber**: `number`

#### Inherited from

[IRectData](IRectData.md).[__childBranchNumber](IRectData.md#__childbranchnumber)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:428](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/display/ILeaf.ts#L428)

___

### \_\_complex

• `Optional` **\_\_complex**: `boolean`

#### Inherited from

[IRectData](IRectData.md).[__complex](IRectData.md#__complex)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:429](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/display/ILeaf.ts#L429)

___

### \_\_complexData

• `Optional` **\_\_complexData**: [`ILeafComplexCachedData`](ILeafComplexCachedData.md)

#### Inherited from

[IRectData](IRectData.md).[__complexData](IRectData.md#__complexdata)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:430](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/display/ILeaf.ts#L430)

___

### \_\_naturalWidth

• `Optional` **\_\_naturalWidth**: `number`

#### Inherited from

[IRectData](IRectData.md).[__naturalWidth](IRectData.md#__naturalwidth)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:432](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/display/ILeaf.ts#L432)

___

### \_\_naturalHeight

• `Optional` **\_\_naturalHeight**: `number`

#### Inherited from

[IRectData](IRectData.md).[__naturalHeight](IRectData.md#__naturalheight)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:433](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/display/ILeaf.ts#L433)

___

### \_\_autoWidth

• `Optional` `Readonly` **\_\_autoWidth**: `boolean`

#### Inherited from

[IRectData](IRectData.md).[__autoWidth](IRectData.md#__autowidth)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:435](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/display/ILeaf.ts#L435)

___

### \_\_autoHeight

• `Optional` `Readonly` **\_\_autoHeight**: `boolean`

#### Inherited from

[IRectData](IRectData.md).[__autoHeight](IRectData.md#__autoheight)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:436](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/display/ILeaf.ts#L436)

___

### \_\_autoSide

• `Optional` `Readonly` **\_\_autoSide**: `boolean`

#### Inherited from

[IRectData](IRectData.md).[__autoSide](IRectData.md#__autoside)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:437](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/display/ILeaf.ts#L437)

___

### \_\_autoSize

• `Optional` `Readonly` **\_\_autoSize**: `boolean`

#### Inherited from

[IRectData](IRectData.md).[__autoSize](IRectData.md#__autosize)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:438](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/display/ILeaf.ts#L438)

___

### \_\_useNaturalRatio

• `Readonly` **\_\_useNaturalRatio**: `boolean`

#### Inherited from

[IRectData](IRectData.md).[__useNaturalRatio](IRectData.md#__usenaturalratio)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:440](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/display/ILeaf.ts#L440)

___

### \_\_isLinePath

• `Readonly` **\_\_isLinePath**: `boolean`

#### Inherited from

[IRectData](IRectData.md).[__isLinePath](IRectData.md#__islinepath)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:441](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/display/ILeaf.ts#L441)

___

### \_\_blendMode

• `Readonly` **\_\_blendMode**: `string`

#### Inherited from

[IRectData](IRectData.md).[__blendMode](IRectData.md#__blendmode)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:442](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/display/ILeaf.ts#L442)

___

### \_\_useStroke

• `Optional` **\_\_useStroke**: `boolean`

#### Inherited from

[IRectData](IRectData.md).[__useStroke](IRectData.md#__usestroke)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:444](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/display/ILeaf.ts#L444)

___

### \_\_useArrow

• `Optional` **\_\_useArrow**: `boolean`

#### Inherited from

[IRectData](IRectData.md).[__useArrow](IRectData.md#__usearrow)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:445](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/display/ILeaf.ts#L445)

___

### \_\_useEffect

• `Optional` **\_\_useEffect**: `boolean`

#### Inherited from

[IRectData](IRectData.md).[__useEffect](IRectData.md#__useeffect)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:446](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/display/ILeaf.ts#L446)

___

### \_\_usePathBox

• `Optional` **\_\_usePathBox**: `boolean`

#### Inherited from

[IRectData](IRectData.md).[__usePathBox](IRectData.md#__usepathbox)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:447](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/display/ILeaf.ts#L447)

___

### \_\_useDim

• `Optional` **\_\_useDim**: `boolean`

#### Inherited from

[IRectData](IRectData.md).[__useDim](IRectData.md#__usedim)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:448](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/display/ILeaf.ts#L448)

___

### \_\_pathInputed

• `Optional` **\_\_pathInputed**: `number`

#### Inherited from

[IRectData](IRectData.md).[__pathInputed](IRectData.md#__pathinputed)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:450](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/display/ILeaf.ts#L450)

___

### \_\_pathForRender

• `Optional` **\_\_pathForRender**: [`IPathCommandData`](../modules.md#ipathcommanddata)

#### Inherited from

[IRectData](IRectData.md).[__pathForRender](IRectData.md#__pathforrender)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:451](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/display/ILeaf.ts#L451)

___

### \_\_path2DForRender

• `Optional` **\_\_path2DForRender**: [`IPath2D`](IPath2D.md)

#### Inherited from

[IRectData](IRectData.md).[__path2DForRender](IRectData.md#__path2dforrender)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:452](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/display/ILeaf.ts#L452)

___

### \_\_startArrowPath

• `Optional` **\_\_startArrowPath**: [`IArrowPathData`](IArrowPathData.md)

#### Inherited from

[IRectData](IRectData.md).[__startArrowPath](IRectData.md#__startarrowpath)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:454](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/display/ILeaf.ts#L454)

___

### \_\_endArrowPath

• `Optional` **\_\_endArrowPath**: [`IArrowPathData`](IArrowPathData.md)

#### Inherited from

[IRectData](IRectData.md).[__endArrowPath](IRectData.md#__endarrowpath)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:455](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/display/ILeaf.ts#L455)

___

### \_\_pathForMotion

• `Optional` **\_\_pathForMotion**: [`IMotionPathData`](IMotionPathData.md)

#### Inherited from

[IRectData](IRectData.md).[__pathForMotion](IRectData.md#__pathformotion)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:456](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/display/ILeaf.ts#L456)

___

### cornerRadius

• `Optional` **cornerRadius**: `number`

#### Inherited from

[IRectData](IRectData.md).[cornerRadius](IRectData.md#cornerradius)

#### Defined in

[src/ui/packages/interface/src/ICommonAttr.ts:17](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/interface/src/ICommonAttr.ts#L17)

___

### cornerSmoothing

• `Optional` **cornerSmoothing**: `number`

#### Inherited from

[IRectData](IRectData.md).[cornerSmoothing](IRectData.md#cornersmoothing)

#### Defined in

[src/ui/packages/interface/src/ICommonAttr.ts:18](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/interface/src/ICommonAttr.ts#L18)

___

### fill

• `Optional` **fill**: `string` \| [`ILeafPaint`](ILeafPaint.md)[]

#### Inherited from

[IRectData](IRectData.md).[fill](IRectData.md#fill)

#### Defined in

[src/ui/packages/interface/src/ICommonAttr.ts:29](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/interface/src/ICommonAttr.ts#L29)

___

### borderWidth

• `Optional` **borderWidth**: `number` \| `number`[]

#### Inherited from

[IRectData](IRectData.md).[borderWidth](IRectData.md#borderwidth)

#### Defined in

[src/ui/packages/interface/src/ICommonAttr.ts:34](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/interface/src/ICommonAttr.ts#L34)

___

### borderRadius

• `Optional` **borderRadius**: `number` \| `number`[]

#### Inherited from

[IRectData](IRectData.md).[borderRadius](IRectData.md#borderradius)

#### Defined in

[src/ui/packages/interface/src/ICommonAttr.ts:35](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/interface/src/ICommonAttr.ts#L35)

___

### stroke

• `Optional` **stroke**: `string` \| [`ILeafStrokePaint`](ILeafStrokePaint.md)[]

#### Inherited from

[IRectData](IRectData.md).[stroke](IRectData.md#stroke)

#### Defined in

[src/ui/packages/interface/src/ICommonAttr.ts:65](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/interface/src/ICommonAttr.ts#L65)

___

### startArrow

• `Optional` **startArrow**: [`IArrowStyle`](../modules.md#iarrowstyle)

#### Inherited from

[IRectData](IRectData.md).[startArrow](IRectData.md#startarrow)

#### Defined in

[src/ui/packages/interface/src/ICommonAttr.ts:67](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/interface/src/ICommonAttr.ts#L67)

___

### endArrow

• `Optional` **endArrow**: [`IArrowStyle`](../modules.md#iarrowstyle)

#### Inherited from

[IRectData](IRectData.md).[endArrow](IRectData.md#endarrow)

#### Defined in

[src/ui/packages/interface/src/ICommonAttr.ts:68](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/interface/src/ICommonAttr.ts#L68)

___

### strokeAlign

• `Optional` **strokeAlign**: [`IStrokeAlign`](../modules.md#istrokealign)

#### Inherited from

[IRectData](IRectData.md).[strokeAlign](IRectData.md#strokealign)

#### Defined in

[src/ui/packages/interface/src/ICommonAttr.ts:72](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/interface/src/ICommonAttr.ts#L72)

___

### strokeWidth

• `Optional` **strokeWidth**: `number`

#### Inherited from

[IRectData](IRectData.md).[strokeWidth](IRectData.md#strokewidth)

#### Defined in

[src/ui/packages/interface/src/ICommonAttr.ts:73](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/interface/src/ICommonAttr.ts#L73)

___

### strokeWidths

• `Optional` **strokeWidths**: `number`[]

#### Inherited from

[IRectData](IRectData.md).[strokeWidths](IRectData.md#strokewidths)

#### Defined in

[src/ui/packages/interface/src/ICommonAttr.ts:74](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/interface/src/ICommonAttr.ts#L74)

___

### strokeScaleFixed

• `Optional` **strokeScaleFixed**: [`IScaleFixed`](../modules.md#iscalefixed)

#### Inherited from

[IRectData](IRectData.md).[strokeScaleFixed](IRectData.md#strokescalefixed)

#### Defined in

[src/ui/packages/interface/src/ICommonAttr.ts:75](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/interface/src/ICommonAttr.ts#L75)

___

### strokeCap

• `Optional` **strokeCap**: [`IStrokeCap`](../modules.md#istrokecap)

#### Inherited from

[IRectData](IRectData.md).[strokeCap](IRectData.md#strokecap)

#### Defined in

[src/ui/packages/interface/src/ICommonAttr.ts:76](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/interface/src/ICommonAttr.ts#L76)

___

### strokeJoin

• `Optional` **strokeJoin**: [`IStrokeJoin`](../modules.md#istrokejoin)

#### Inherited from

[IRectData](IRectData.md).[strokeJoin](IRectData.md#strokejoin)

#### Defined in

[src/ui/packages/interface/src/ICommonAttr.ts:77](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/interface/src/ICommonAttr.ts#L77)

___

### dashPattern

• `Optional` **dashPattern**: `number`[]

#### Inherited from

[IRectData](IRectData.md).[dashPattern](IRectData.md#dashpattern)

#### Defined in

[src/ui/packages/interface/src/ICommonAttr.ts:78](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/interface/src/ICommonAttr.ts#L78)

___

### dashOffset

• `Optional` **dashOffset**: `number`

#### Inherited from

[IRectData](IRectData.md).[dashOffset](IRectData.md#dashoffset)

#### Defined in

[src/ui/packages/interface/src/ICommonAttr.ts:79](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/interface/src/ICommonAttr.ts#L79)

___

### miterLimit

• `Optional` **miterLimit**: `number`

#### Inherited from

[IRectData](IRectData.md).[miterLimit](IRectData.md#miterlimit)

#### Defined in

[src/ui/packages/interface/src/ICommonAttr.ts:80](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/interface/src/ICommonAttr.ts#L80)

___

### fontFamily

• `Optional` **fontFamily**: `string`

#### Inherited from

[IRectData](IRectData.md).[fontFamily](IRectData.md#fontfamily)

#### Defined in

[src/ui/packages/interface/src/ICommonAttr.ts:127](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/interface/src/ICommonAttr.ts#L127)

___

### fontSize

• `Optional` **fontSize**: `number`

#### Inherited from

[IRectData](IRectData.md).[fontSize](IRectData.md#fontsize)

#### Defined in

[src/ui/packages/interface/src/ICommonAttr.ts:128](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/interface/src/ICommonAttr.ts#L128)

___

### fontWeight

• `Optional` **fontWeight**: [`IFontWeight`](../modules.md#ifontweight)

#### Inherited from

[IRectData](IRectData.md).[fontWeight](IRectData.md#fontweight)

#### Defined in

[src/ui/packages/interface/src/ICommonAttr.ts:129](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/interface/src/ICommonAttr.ts#L129)

___

### italic

• `Optional` **italic**: `boolean`

#### Inherited from

[IRectData](IRectData.md).[italic](IRectData.md#italic)

#### Defined in

[src/ui/packages/interface/src/ICommonAttr.ts:130](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/interface/src/ICommonAttr.ts#L130)

___

### textCase

• `Optional` **textCase**: [`ITextCase`](../modules.md#itextcase)

#### Inherited from

[IRectData](IRectData.md).[textCase](IRectData.md#textcase)

#### Defined in

[src/ui/packages/interface/src/ICommonAttr.ts:131](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/interface/src/ICommonAttr.ts#L131)

___

### textDecoration

• `Optional` **textDecoration**: [`ITextDecoration`](../modules.md#itextdecoration)

#### Inherited from

[IRectData](IRectData.md).[textDecoration](IRectData.md#textdecoration)

#### Defined in

[src/ui/packages/interface/src/ICommonAttr.ts:132](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/interface/src/ICommonAttr.ts#L132)

___

### letterSpacing

• `Optional` **letterSpacing**: `number`

#### Inherited from

[IRectData](IRectData.md).[letterSpacing](IRectData.md#letterspacing)

#### Defined in

[src/ui/packages/interface/src/ICommonAttr.ts:133](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/interface/src/ICommonAttr.ts#L133)

___

### lineHeight

• `Optional` **lineHeight**: `number`

#### Inherited from

[IRectData](IRectData.md).[lineHeight](IRectData.md#lineheight)

#### Defined in

[src/ui/packages/interface/src/ICommonAttr.ts:134](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/interface/src/ICommonAttr.ts#L134)

___

### paraIndent

• `Optional` **paraIndent**: `number`

#### Inherited from

[IRectData](IRectData.md).[paraIndent](IRectData.md#paraindent)

#### Defined in

[src/ui/packages/interface/src/ICommonAttr.ts:136](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/interface/src/ICommonAttr.ts#L136)

___

### paraSpacing

• `Optional` **paraSpacing**: `number`

#### Inherited from

[IRectData](IRectData.md).[paraSpacing](IRectData.md#paraspacing)

#### Defined in

[src/ui/packages/interface/src/ICommonAttr.ts:137](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/interface/src/ICommonAttr.ts#L137)

___

### writingMode

• `Optional` **writingMode**: [`IWritingMode`](../modules.md#iwritingmode)

#### Inherited from

[IRectData](IRectData.md).[writingMode](IRectData.md#writingmode)

#### Defined in

[src/ui/packages/interface/src/ICommonAttr.ts:139](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/interface/src/ICommonAttr.ts#L139)

___

### textAlign

• `Optional` **textAlign**: [`ITextAlign`](../modules.md#itextalign)

#### Inherited from

[IRectData](IRectData.md).[textAlign](IRectData.md#textalign)

#### Defined in

[src/ui/packages/interface/src/ICommonAttr.ts:140](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/interface/src/ICommonAttr.ts#L140)

___

### verticalAlign

• `Optional` **verticalAlign**: [`IVerticalAlign`](../modules.md#iverticalalign)

#### Inherited from

[IRectData](IRectData.md).[verticalAlign](IRectData.md#verticalalign)

#### Defined in

[src/ui/packages/interface/src/ICommonAttr.ts:141](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/interface/src/ICommonAttr.ts#L141)

___

### autoSizeAlign

• `Optional` **autoSizeAlign**: `boolean`

#### Inherited from

[IRectData](IRectData.md).[autoSizeAlign](IRectData.md#autosizealign)

#### Defined in

[src/ui/packages/interface/src/ICommonAttr.ts:142](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/interface/src/ICommonAttr.ts#L142)

___

### textWrap

• `Optional` **textWrap**: [`ITextWrap`](../modules.md#itextwrap)

#### Inherited from

[IRectData](IRectData.md).[textWrap](IRectData.md#textwrap)

#### Defined in

[src/ui/packages/interface/src/ICommonAttr.ts:144](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/interface/src/ICommonAttr.ts#L144)

___

### textOverflow

• `Optional` **textOverflow**: [`ITextOverflow`](../modules.md#itextoverflow)

#### Inherited from

[IRectData](IRectData.md).[textOverflow](IRectData.md#textoverflow)

#### Defined in

[src/ui/packages/interface/src/ICommonAttr.ts:145](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/interface/src/ICommonAttr.ts#L145)

___

### shadow

• `Optional` **shadow**: [`ILeafShadowEffect`](ILeafShadowEffect.md)[]

#### Inherited from

[IRectData](IRectData.md).[shadow](IRectData.md#shadow)

#### Defined in

[src/ui/packages/interface/src/ICommonAttr.ts:164](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/interface/src/ICommonAttr.ts#L164)

___

### innerShadow

• `Optional` **innerShadow**: [`ILeafShadowEffect`](ILeafShadowEffect.md)[]

#### Inherited from

[IRectData](IRectData.md).[innerShadow](IRectData.md#innershadow)

#### Defined in

[src/ui/packages/interface/src/ICommonAttr.ts:165](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/interface/src/ICommonAttr.ts#L165)

___

### blur

• `Optional` **blur**: `number`

#### Inherited from

[IRectData](IRectData.md).[blur](IRectData.md#blur)

#### Defined in

[src/ui/packages/interface/src/ICommonAttr.ts:166](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/interface/src/ICommonAttr.ts#L166)

___

### backgroundBlur

• `Optional` **backgroundBlur**: `number`

#### Inherited from

[IRectData](IRectData.md).[backgroundBlur](IRectData.md#backgroundblur)

#### Defined in

[src/ui/packages/interface/src/ICommonAttr.ts:167](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/interface/src/ICommonAttr.ts#L167)

___

### grayscale

• `Optional` **grayscale**: `number`

#### Inherited from

[IRectData](IRectData.md).[grayscale](IRectData.md#grayscale)

#### Defined in

[src/ui/packages/interface/src/ICommonAttr.ts:168](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/interface/src/ICommonAttr.ts#L168)

___

### robot

• `Optional` **robot**: [`IRobotKeyframe`](IRobotKeyframe.md) \| [`IRobotKeyframe`](IRobotKeyframe.md)[]

#### Inherited from

IRobotAttrData.robot

#### Defined in

[src/ui/packages/interface/src/IUI.ts:333](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/interface/src/IUI.ts#L333)

___

### actions

• `Optional` **actions**: [`IRobotActions`](IRobotActions.md)

#### Inherited from

IRobotAttrData.actions

#### Defined in

[src/ui/packages/interface/src/IUI.ts:334](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/interface/src/IUI.ts#L334)

___

### action

• `Optional` **action**: `string`

#### Inherited from

IRobotAttrData.action

#### Defined in

[src/ui/packages/interface/src/IUI.ts:335](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/interface/src/IUI.ts#L335)

___

### now

• `Optional` **now**: `number`

#### Inherited from

IRobotAttrData.now

#### Defined in

[src/ui/packages/interface/src/IUI.ts:336](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/interface/src/IUI.ts#L336)

___

### FPS

• `Optional` **FPS**: `number`

#### Inherited from

IRobotAttrData.FPS

#### Defined in

[src/ui/packages/interface/src/IUI.ts:337](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/interface/src/IUI.ts#L337)

___

### loop

• `Optional` **loop**: `number` \| `boolean`

#### Inherited from

IRobotAttrData.loop

#### Defined in

[src/ui/packages/interface/src/IUI.ts:338](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/interface/src/IUI.ts#L338)

___

### animation

• `Optional` **animation**: [`IAnimation`](../modules.md#ianimation) \| [`IAnimation`](../modules.md#ianimation)[]

#### Inherited from

[IRectData](IRectData.md).[animation](IRectData.md#animation)

#### Defined in

[src/ui/packages/interface/src/IUI.ts:563](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/interface/src/IUI.ts#L563)

___

### animationOut

• `Optional` **animationOut**: [`IAnimation`](../modules.md#ianimation) \| [`IAnimation`](../modules.md#ianimation)[]

#### Inherited from

[IRectData](IRectData.md).[animationOut](IRectData.md#animationout)

#### Defined in

[src/ui/packages/interface/src/IUI.ts:564](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/interface/src/IUI.ts#L564)

___

### transition

• `Optional` **transition**: [`ITransition`](../modules.md#itransition)

#### Inherited from

[IRectData](IRectData.md).[transition](IRectData.md#transition)

#### Defined in

[src/ui/packages/interface/src/IUI.ts:566](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/interface/src/IUI.ts#L566)

___

### transitionOut

• `Optional` **transitionOut**: [`ITransition`](../modules.md#itransition)

#### Inherited from

[IRectData](IRectData.md).[transitionOut](IRectData.md#transitionout)

#### Defined in

[src/ui/packages/interface/src/IUI.ts:567](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/interface/src/IUI.ts#L567)

___

### states

• `Optional` **states**: [`IStates`](IStates.md)

#### Inherited from

[IRectData](IRectData.md).[states](IRectData.md#states)

#### Defined in

[src/ui/packages/interface/src/IUI.ts:569](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/interface/src/IUI.ts#L569)

___

### state

• `Optional` **state**: `string`

#### Inherited from

[IRectData](IRectData.md).[state](IRectData.md#state)

#### Defined in

[src/ui/packages/interface/src/IUI.ts:570](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/interface/src/IUI.ts#L570)

___

### hoverStyle

• `Optional` **hoverStyle**: [`IStateStyle`](IStateStyle.md)

#### Inherited from

[IRectData](IRectData.md).[hoverStyle](IRectData.md#hoverstyle)

#### Defined in

[src/ui/packages/interface/src/IUI.ts:572](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/interface/src/IUI.ts#L572)

___

### pressStyle

• `Optional` **pressStyle**: [`IStateStyle`](IStateStyle.md)

#### Inherited from

[IRectData](IRectData.md).[pressStyle](IRectData.md#pressstyle)

#### Defined in

[src/ui/packages/interface/src/IUI.ts:573](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/interface/src/IUI.ts#L573)

___

### focusStyle

• `Optional` **focusStyle**: [`IStateStyle`](IStateStyle.md)

#### Inherited from

[IRectData](IRectData.md).[focusStyle](IRectData.md#focusstyle)

#### Defined in

[src/ui/packages/interface/src/IUI.ts:574](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/interface/src/IUI.ts#L574)

___

### selectedStyle

• `Optional` **selectedStyle**: [`IStateStyle`](IStateStyle.md)

#### Inherited from

[IRectData](IRectData.md).[selectedStyle](IRectData.md#selectedstyle)

#### Defined in

[src/ui/packages/interface/src/IUI.ts:575](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/interface/src/IUI.ts#L575)

___

### disabledStyle

• `Optional` **disabledStyle**: [`IStateStyle`](IStateStyle.md)

#### Inherited from

[IRectData](IRectData.md).[disabledStyle](IRectData.md#disabledstyle)

#### Defined in

[src/ui/packages/interface/src/IUI.ts:576](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/interface/src/IUI.ts#L576)

___

### placeholderStyle

• `Optional` **placeholderStyle**: [`IStateStyle`](IStateStyle.md)

#### Inherited from

[IRectData](IRectData.md).[placeholderStyle](IRectData.md#placeholderstyle)

#### Defined in

[src/ui/packages/interface/src/IUI.ts:577](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/interface/src/IUI.ts#L577)

___

### placeholderColor

• `Optional` **placeholderColor**: `string`

#### Inherited from

[IRectData](IRectData.md).[placeholderColor](IRectData.md#placeholdercolor)

#### Defined in

[src/ui/packages/interface/src/IUI.ts:578](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/interface/src/IUI.ts#L578)

___

### placeholderDelay

• `Optional` **placeholderDelay**: `number`

#### Inherited from

[IRectData](IRectData.md).[placeholderDelay](IRectData.md#placeholderdelay)

#### Defined in

[src/ui/packages/interface/src/IUI.ts:579](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/interface/src/IUI.ts#L579)

___

### editConfig

• `Optional` **editConfig**: [`IEditorConfig`](IEditorConfig.md)

#### Inherited from

[IRectData](IRectData.md).[editConfig](IRectData.md#editconfig)

#### Defined in

[src/ui/packages/interface/src/IUI.ts:581](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/interface/src/IUI.ts#L581)

___

### editOuter

• `Optional` **editOuter**: `string`

#### Inherited from

[IRectData](IRectData.md).[editOuter](IRectData.md#editouter)

#### Defined in

[src/ui/packages/interface/src/IUI.ts:582](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/interface/src/IUI.ts#L582)

___

### editInner

• `Optional` **editInner**: `string`

#### Inherited from

[IRectData](IRectData.md).[editInner](IRectData.md#editinner)

#### Defined in

[src/ui/packages/interface/src/IUI.ts:583](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/interface/src/IUI.ts#L583)

___

### scale

• `Readonly` **scale**: `number` \| [`IPointData`](IPointData.md)

#### Inherited from

[IRectData](IRectData.md).[scale](IRectData.md#scale)

#### Defined in

[src/ui/packages/interface/src/IUI.ts:592](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/interface/src/IUI.ts#L592)

___

### \_\_isFills

• `Optional` **\_\_isFills**: `boolean`

#### Inherited from

[IRectData](IRectData.md).[__isFills](IRectData.md#__isfills)

#### Defined in

[src/ui/packages/interface/src/IUI.ts:595](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/interface/src/IUI.ts#L595)

___

### \_\_isStrokes

• `Optional` **\_\_isStrokes**: `boolean`

#### Inherited from

[IRectData](IRectData.md).[__isStrokes](IRectData.md#__isstrokes)

#### Defined in

[src/ui/packages/interface/src/IUI.ts:596](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/interface/src/IUI.ts#L596)

___

### \_\_strokeWidth

• `Readonly` **\_\_strokeWidth**: `number`

#### Inherited from

[IRectData](IRectData.md).[__strokeWidth](IRectData.md#__strokewidth)

#### Defined in

[src/ui/packages/interface/src/IUI.ts:598](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/interface/src/IUI.ts#L598)

___

### \_\_maxStrokeWidth

• `Readonly` **\_\_maxStrokeWidth**: `number`

#### Inherited from

[IRectData](IRectData.md).[__maxStrokeWidth](IRectData.md#__maxstrokewidth)

#### Defined in

[src/ui/packages/interface/src/IUI.ts:599](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/interface/src/IUI.ts#L599)

___

### \_\_strokeWidthCache

• `Optional` **\_\_strokeWidthCache**: `number`

#### Inherited from

[IRectData](IRectData.md).[__strokeWidthCache](IRectData.md#__strokewidthcache)

#### Defined in

[src/ui/packages/interface/src/IUI.ts:600](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/interface/src/IUI.ts#L600)

___

### \_\_hasMultiStrokeStyle

• `Optional` **\_\_hasMultiStrokeStyle**: `number`

#### Inherited from

[IRectData](IRectData.md).[__hasMultiStrokeStyle](IRectData.md#__hasmultistrokestyle)

#### Defined in

[src/ui/packages/interface/src/IUI.ts:601](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/interface/src/IUI.ts#L601)

___

### \_\_hasMultiPaint

• `Optional` `Readonly` **\_\_hasMultiPaint**: `boolean`

#### Inherited from

[IRectData](IRectData.md).[__hasMultiPaint](IRectData.md#__hasmultipaint)

#### Defined in

[src/ui/packages/interface/src/IUI.ts:602](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/interface/src/IUI.ts#L602)

___

### \_\_isAlphaPixelFill

• `Optional` **\_\_isAlphaPixelFill**: `boolean`

#### Inherited from

[IRectData](IRectData.md).[__isAlphaPixelFill](IRectData.md#__isalphapixelfill)

#### Defined in

[src/ui/packages/interface/src/IUI.ts:604](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/interface/src/IUI.ts#L604)

___

### \_\_isAlphaPixelStroke

• `Optional` **\_\_isAlphaPixelStroke**: `boolean`

#### Inherited from

[IRectData](IRectData.md).[__isAlphaPixelStroke](IRectData.md#__isalphapixelstroke)

#### Defined in

[src/ui/packages/interface/src/IUI.ts:605](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/interface/src/IUI.ts#L605)

___

### \_\_isTransparentFill

• `Optional` **\_\_isTransparentFill**: `boolean`

#### Inherited from

[IRectData](IRectData.md).[__isTransparentFill](IRectData.md#__istransparentfill)

#### Defined in

[src/ui/packages/interface/src/IUI.ts:607](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/interface/src/IUI.ts#L607)

___

### \_\_isTransparentStroke

• `Optional` **\_\_isTransparentStroke**: `boolean`

#### Inherited from

[IRectData](IRectData.md).[__isTransparentStroke](IRectData.md#__istransparentstroke)

#### Defined in

[src/ui/packages/interface/src/IUI.ts:608](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/interface/src/IUI.ts#L608)

___

### \_\_isHitPixel

• `Optional` **\_\_isHitPixel**: `boolean`

#### Inherited from

[IRectData](IRectData.md).[__isHitPixel](IRectData.md#__ishitpixel)

#### Defined in

[src/ui/packages/interface/src/IUI.ts:610](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/interface/src/IUI.ts#L610)

___

### \_\_isCanvas

• `Optional` **\_\_isCanvas**: `boolean`

#### Inherited from

[IRectData](IRectData.md).[__isCanvas](IRectData.md#__iscanvas)

#### Defined in

[src/ui/packages/interface/src/IUI.ts:611](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/interface/src/IUI.ts#L611)

___

### \_\_isFastShadow

• `Optional` **\_\_isFastShadow**: `boolean`

#### Inherited from

[IRectData](IRectData.md).[__isFastShadow](IRectData.md#__isfastshadow)

#### Defined in

[src/ui/packages/interface/src/IUI.ts:612](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/interface/src/IUI.ts#L612)

___

### \_\_fillAfterStroke

• `Optional` **\_\_fillAfterStroke**: `boolean`

#### Inherited from

[IRectData](IRectData.md).[__fillAfterStroke](IRectData.md#__fillafterstroke)

#### Defined in

[src/ui/packages/interface/src/IUI.ts:614](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/interface/src/IUI.ts#L614)

___

### \_\_drawAfterFill

• `Optional` **\_\_drawAfterFill**: `boolean`

#### Inherited from

[IRectData](IRectData.md).[__drawAfterFill](IRectData.md#__drawafterfill)

#### Defined in

[src/ui/packages/interface/src/IUI.ts:615](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/interface/src/IUI.ts#L615)

___

### \_\_clipAfterFill

• `Optional` `Readonly` **\_\_clipAfterFill**: `boolean`

#### Inherited from

[IRectData](IRectData.md).[__clipAfterFill](IRectData.md#__clipafterfill)

#### Defined in

[src/ui/packages/interface/src/IUI.ts:616](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/interface/src/IUI.ts#L616)

___

### \_\_hasSurface

• `Optional` `Readonly` **\_\_hasSurface**: `boolean`

#### Inherited from

[IRectData](IRectData.md).[__hasSurface](IRectData.md#__hassurface)

#### Defined in

[src/ui/packages/interface/src/IUI.ts:617](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/interface/src/IUI.ts#L617)

___

### \_\_blendLayer

• `Optional` **\_\_blendLayer**: `boolean`

#### Inherited from

[IRectData](IRectData.md).[__blendLayer](IRectData.md#__blendlayer)

#### Defined in

[src/ui/packages/interface/src/IUI.ts:619](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/interface/src/IUI.ts#L619)

___

### \_\_boxStroke

• `Optional` **\_\_boxStroke**: `boolean`

#### Inherited from

[IRectData](IRectData.md).[__boxStroke](IRectData.md#__boxstroke)

#### Defined in

[src/ui/packages/interface/src/IUI.ts:621](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/interface/src/IUI.ts#L621)

___

### \_\_font

• `Optional` **\_\_font**: `string`

#### Inherited from

[IRectData](IRectData.md).[__font](IRectData.md#__font)

#### Defined in

[src/ui/packages/interface/src/IUI.ts:624](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/interface/src/IUI.ts#L624)

___

### \_\_textDrawData

• `Optional` **\_\_textDrawData**: [`ITextDrawData`](ITextDrawData.md)

#### Inherited from

[IRectData](IRectData.md).[__textDrawData](IRectData.md#__textdrawdata)

#### Defined in

[src/ui/packages/interface/src/IUI.ts:625](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/interface/src/IUI.ts#L625)

___

### \_\_needComputePaint

• `Optional` **\_\_needComputePaint**: `boolean`

#### Inherited from

[IRectData](IRectData.md).[__needComputePaint](IRectData.md#__needcomputepaint)

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

[IRectData](IRectData.md).[__get](IRectData.md#__get)

#### Defined in

[src/leafer/packages/interface/src/data/ILeafData.ts:10](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/data/ILeafData.ts#L10)

___

### \_\_getData

▸ **__getData**(): [`IObject`](IObject.md)

#### Returns

[`IObject`](IObject.md)

#### Inherited from

[IRectData](IRectData.md).[__getData](IRectData.md#__getdata)

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

[IRectData](IRectData.md).[__setInput](IRectData.md#__setinput)

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

[IRectData](IRectData.md).[__getInput](IRectData.md#__getinput)

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

[IRectData](IRectData.md).[__removeInput](IRectData.md#__removeinput)

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

[IRectData](IRectData.md).[__getInputData](IRectData.md#__getinputdata)

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

[IRectData](IRectData.md).[__setMiddle](IRectData.md#__setmiddle)

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

[IRectData](IRectData.md).[__getMiddle](IRectData.md#__getmiddle)

#### Defined in

[src/leafer/packages/interface/src/data/ILeafData.ts:19](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/data/ILeafData.ts#L19)

___

### destroy

▸ **destroy**(): `void`

#### Returns

`void`

#### Inherited from

[IRectData](IRectData.md).[destroy](IRectData.md#destroy)

#### Defined in

[src/leafer/packages/interface/src/data/ILeafData.ts:21](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/data/ILeafData.ts#L21)

___

### \_\_checkSingle

▸ **__checkSingle**(): `void`

#### Returns

`void`

#### Inherited from

[IRectData](IRectData.md).[__checkSingle](IRectData.md#__checksingle)

#### Defined in

[src/leafer/packages/interface/src/data/ILeafData.ts:33](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/data/ILeafData.ts#L33)

___

### \_\_removeNaturalSize

▸ **__removeNaturalSize**(): `void`

#### Returns

`void`

#### Inherited from

[IRectData](IRectData.md).[__removeNaturalSize](IRectData.md#__removenaturalsize)

#### Defined in

[src/leafer/packages/interface/src/data/ILeafData.ts:34](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/data/ILeafData.ts#L34)

___

### \_\_computePaint

▸ **__computePaint**(): `void`

#### Returns

`void`

#### Inherited from

[IRectData](IRectData.md).[__computePaint](IRectData.md#__computepaint)

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

[IRectData](IRectData.md).[__getRealStrokeWidth](IRectData.md#__getrealstrokewidth)

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

[IRectData](IRectData.md).[__setPaint](IRectData.md#__setpaint)

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

[IRectData](IRectData.md).[__removePaint](IRectData.md#__removepaint)

#### Defined in

[src/ui/packages/interface/src/IUI.ts:632](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/interface/src/IUI.ts#L632)
