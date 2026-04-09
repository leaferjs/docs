# Interface: IUIData

## Hierarchy

- `IUIAttrData`

- `IUIComputedData`

- [`ILeafData`](ILeafData.md)

  ↳ **`IUIData`**

  ↳↳ [`ILineData`](ILineData.md)

  ↳↳ [`IRectData`](IRectData.md)

  ↳↳ [`IEllipseData`](IEllipseData.md)

  ↳↳ [`IPolygonData`](IPolygonData.md)

  ↳↳ [`IStarData`](IStarData.md)

  ↳↳ [`IPathData`](IPathData.md)

  ↳↳ [`ITextData`](ITextData.md)

  ↳↳ [`IGroupData`](IGroupData.md)

## Implemented by

- [`UIData`](../classes/UIData.md)

## Table of contents

### Properties

- [\_\_leaf](IUIData.md#__leaf)
- [\_\_input](IUIData.md#__input)
- [\_\_middle](IUIData.md#__middle)
- [\_\_single](IUIData.md#__single)
- [\_\_willDestroy](IUIData.md#__willdestroy)
- [id](IUIData.md#id)
- [name](IUIData.md#name)
- [className](IUIData.md#classname)
- [blendMode](IUIData.md#blendmode)
- [opacity](IUIData.md#opacity)
- [visible](IUIData.md#visible)
- [selected](IUIData.md#selected)
- [disabled](IUIData.md#disabled)
- [locked](IUIData.md#locked)
- [zIndex](IUIData.md#zindex)
- [dim](IUIData.md#dim)
- [dimskip](IUIData.md#dimskip)
- [bright](IUIData.md#bright)
- [mask](IUIData.md#mask)
- [eraser](IUIData.md#eraser)
- [filter](IUIData.md#filter)
- [complex](IUIData.md#complex)
- [x](IUIData.md#x)
- [y](IUIData.md#y)
- [width](IUIData.md#width)
- [height](IUIData.md#height)
- [scaleX](IUIData.md#scalex)
- [scaleY](IUIData.md#scaley)
- [scaleFixed](IUIData.md#scalefixed)
- [rotation](IUIData.md#rotation)
- [skewX](IUIData.md#skewx)
- [skewY](IUIData.md#skewy)
- [offsetX](IUIData.md#offsetx)
- [offsetY](IUIData.md#offsety)
- [scrollX](IUIData.md#scrollx)
- [scrollY](IUIData.md#scrolly)
- [origin](IUIData.md#origin)
- [around](IUIData.md#around)
- [lazy](IUIData.md#lazy)
- [pixelRatio](IUIData.md#pixelratio)
- [renderSpread](IUIData.md#renderspread)
- [path](IUIData.md#path)
- [windingRule](IUIData.md#windingrule)
- [closed](IUIData.md#closed)
- [flow](IUIData.md#flow)
- [padding](IUIData.md#padding)
- [gap](IUIData.md#gap)
- [flowAlign](IUIData.md#flowalign)
- [flowWrap](IUIData.md#flowwrap)
- [itemBox](IUIData.md#itembox)
- [inFlow](IUIData.md#inflow)
- [autoWidth](IUIData.md#autowidth)
- [autoHeight](IUIData.md#autoheight)
- [lockRatio](IUIData.md#lockratio)
- [autoBox](IUIData.md#autobox)
- [widthRange](IUIData.md#widthrange)
- [heightRange](IUIData.md#heightrange)
- [draggable](IUIData.md#draggable)
- [dragBounds](IUIData.md#dragbounds)
- [dragBoundsType](IUIData.md#dragboundstype)
- [editable](IUIData.md#editable)
- [hittable](IUIData.md#hittable)
- [hitFill](IUIData.md#hitfill)
- [hitStroke](IUIData.md#hitstroke)
- [hitBox](IUIData.md#hitbox)
- [hitChildren](IUIData.md#hitchildren)
- [hitSelf](IUIData.md#hitself)
- [hitRadius](IUIData.md#hitradius)
- [button](IUIData.md#button)
- [cursor](IUIData.md#cursor)
- [motionPath](IUIData.md#motionpath)
- [motionPrecision](IUIData.md#motionprecision)
- [motion](IUIData.md#motion)
- [motionRotation](IUIData.md#motionrotation)
- [normalStyle](IUIData.md#normalstyle)
- [data](IUIData.md#data)
- [\_\_childBranchNumber](IUIData.md#__childbranchnumber)
- [\_\_complex](IUIData.md#__complex)
- [\_\_complexData](IUIData.md#__complexdata)
- [\_\_naturalWidth](IUIData.md#__naturalwidth)
- [\_\_naturalHeight](IUIData.md#__naturalheight)
- [\_\_autoWidth](IUIData.md#__autowidth)
- [\_\_autoHeight](IUIData.md#__autoheight)
- [\_\_autoSide](IUIData.md#__autoside)
- [\_\_autoSize](IUIData.md#__autosize)
- [\_\_useNaturalRatio](IUIData.md#__usenaturalratio)
- [\_\_isLinePath](IUIData.md#__islinepath)
- [\_\_blendMode](IUIData.md#__blendmode)
- [\_\_useStroke](IUIData.md#__usestroke)
- [\_\_useArrow](IUIData.md#__usearrow)
- [\_\_useEffect](IUIData.md#__useeffect)
- [\_\_usePathBox](IUIData.md#__usepathbox)
- [\_\_useDim](IUIData.md#__usedim)
- [\_\_pathInputed](IUIData.md#__pathinputed)
- [\_\_pathForRender](IUIData.md#__pathforrender)
- [\_\_path2DForRender](IUIData.md#__path2dforrender)
- [\_\_startArrowPath](IUIData.md#__startarrowpath)
- [\_\_endArrowPath](IUIData.md#__endarrowpath)
- [\_\_pathForMotion](IUIData.md#__pathformotion)
- [cornerRadius](IUIData.md#cornerradius)
- [cornerSmoothing](IUIData.md#cornersmoothing)
- [fill](IUIData.md#fill)
- [borderWidth](IUIData.md#borderwidth)
- [borderRadius](IUIData.md#borderradius)
- [stroke](IUIData.md#stroke)
- [startArrow](IUIData.md#startarrow)
- [endArrow](IUIData.md#endarrow)
- [strokeAlign](IUIData.md#strokealign)
- [strokeWidth](IUIData.md#strokewidth)
- [strokeWidths](IUIData.md#strokewidths)
- [strokeScaleFixed](IUIData.md#strokescalefixed)
- [strokeCap](IUIData.md#strokecap)
- [strokeJoin](IUIData.md#strokejoin)
- [dashPattern](IUIData.md#dashpattern)
- [dashOffset](IUIData.md#dashoffset)
- [miterLimit](IUIData.md#miterlimit)
- [fontFamily](IUIData.md#fontfamily)
- [fontSize](IUIData.md#fontsize)
- [fontWeight](IUIData.md#fontweight)
- [italic](IUIData.md#italic)
- [textCase](IUIData.md#textcase)
- [textDecoration](IUIData.md#textdecoration)
- [letterSpacing](IUIData.md#letterspacing)
- [lineHeight](IUIData.md#lineheight)
- [paraIndent](IUIData.md#paraindent)
- [paraSpacing](IUIData.md#paraspacing)
- [writingMode](IUIData.md#writingmode)
- [textAlign](IUIData.md#textalign)
- [verticalAlign](IUIData.md#verticalalign)
- [autoSizeAlign](IUIData.md#autosizealign)
- [textWrap](IUIData.md#textwrap)
- [textOverflow](IUIData.md#textoverflow)
- [shadow](IUIData.md#shadow)
- [innerShadow](IUIData.md#innershadow)
- [blur](IUIData.md#blur)
- [backgroundBlur](IUIData.md#backgroundblur)
- [grayscale](IUIData.md#grayscale)
- [animation](IUIData.md#animation)
- [animationOut](IUIData.md#animationout)
- [transition](IUIData.md#transition)
- [transitionOut](IUIData.md#transitionout)
- [states](IUIData.md#states)
- [state](IUIData.md#state)
- [hoverStyle](IUIData.md#hoverstyle)
- [pressStyle](IUIData.md#pressstyle)
- [focusStyle](IUIData.md#focusstyle)
- [selectedStyle](IUIData.md#selectedstyle)
- [disabledStyle](IUIData.md#disabledstyle)
- [placeholderStyle](IUIData.md#placeholderstyle)
- [placeholderColor](IUIData.md#placeholdercolor)
- [placeholderDelay](IUIData.md#placeholderdelay)
- [editConfig](IUIData.md#editconfig)
- [editOuter](IUIData.md#editouter)
- [editInner](IUIData.md#editinner)
- [scale](IUIData.md#scale)
- [\_\_isFills](IUIData.md#__isfills)
- [\_\_isStrokes](IUIData.md#__isstrokes)
- [\_\_strokeWidth](IUIData.md#__strokewidth)
- [\_\_maxStrokeWidth](IUIData.md#__maxstrokewidth)
- [\_\_strokeWidthCache](IUIData.md#__strokewidthcache)
- [\_\_hasMultiStrokeStyle](IUIData.md#__hasmultistrokestyle)
- [\_\_hasMultiPaint](IUIData.md#__hasmultipaint)
- [\_\_isAlphaPixelFill](IUIData.md#__isalphapixelfill)
- [\_\_isAlphaPixelStroke](IUIData.md#__isalphapixelstroke)
- [\_\_isTransparentFill](IUIData.md#__istransparentfill)
- [\_\_isTransparentStroke](IUIData.md#__istransparentstroke)
- [\_\_isHitPixel](IUIData.md#__ishitpixel)
- [\_\_isCanvas](IUIData.md#__iscanvas)
- [\_\_isFastShadow](IUIData.md#__isfastshadow)
- [\_\_fillAfterStroke](IUIData.md#__fillafterstroke)
- [\_\_drawAfterFill](IUIData.md#__drawafterfill)
- [\_\_clipAfterFill](IUIData.md#__clipafterfill)
- [\_\_hasSurface](IUIData.md#__hassurface)
- [\_\_blendLayer](IUIData.md#__blendlayer)
- [\_\_boxStroke](IUIData.md#__boxstroke)
- [\_\_font](IUIData.md#__font)
- [\_\_textDrawData](IUIData.md#__textdrawdata)
- [\_\_needComputePaint](IUIData.md#__needcomputepaint)

### Methods

- [\_\_get](IUIData.md#__get)
- [\_\_getData](IUIData.md#__getdata)
- [\_\_setInput](IUIData.md#__setinput)
- [\_\_getInput](IUIData.md#__getinput)
- [\_\_removeInput](IUIData.md#__removeinput)
- [\_\_getInputData](IUIData.md#__getinputdata)
- [\_\_setMiddle](IUIData.md#__setmiddle)
- [\_\_getMiddle](IUIData.md#__getmiddle)
- [destroy](IUIData.md#destroy)
- [\_\_checkSingle](IUIData.md#__checksingle)
- [\_\_removeNaturalSize](IUIData.md#__removenaturalsize)
- [\_\_computePaint](IUIData.md#__computepaint)
- [\_\_getRealStrokeWidth](IUIData.md#__getrealstrokewidth)
- [\_\_setPaint](IUIData.md#__setpaint)
- [\_\_removePaint](IUIData.md#__removepaint)

## Properties

### \_\_leaf

• **\_\_leaf**: [`ILeaf`](ILeaf.md)

#### Inherited from

[ILeafData](ILeafData.md).[__leaf](ILeafData.md#__leaf)

#### Defined in

[src/leafer/packages/interface/src/data/ILeafData.ts:6](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/data/ILeafData.ts#L6)

___

### \_\_input

• **\_\_input**: [`IObject`](IObject.md)

#### Inherited from

[ILeafData](ILeafData.md).[__input](ILeafData.md#__input)

#### Defined in

[src/leafer/packages/interface/src/data/ILeafData.ts:7](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/data/ILeafData.ts#L7)

___

### \_\_middle

• **\_\_middle**: [`IObject`](IObject.md)

#### Inherited from

[ILeafData](ILeafData.md).[__middle](ILeafData.md#__middle)

#### Defined in

[src/leafer/packages/interface/src/data/ILeafData.ts:8](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/data/ILeafData.ts#L8)

___

### \_\_single

• `Optional` **\_\_single**: `boolean`

#### Inherited from

[ILeafData](ILeafData.md).[__single](ILeafData.md#__single)

#### Defined in

[src/leafer/packages/interface/src/data/ILeafData.ts:30](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/data/ILeafData.ts#L30)

___

### \_\_willDestroy

• `Optional` **\_\_willDestroy**: `boolean`

#### Inherited from

[ILeafData](ILeafData.md).[__willDestroy](ILeafData.md#__willdestroy)

#### Defined in

[src/leafer/packages/interface/src/data/ILeafData.ts:32](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/data/ILeafData.ts#L32)

___

### id

• `Optional` **id**: `string`

#### Inherited from

[ILeafData](ILeafData.md).[id](ILeafData.md#id)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:331](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/display/ILeaf.ts#L331)

___

### name

• `Optional` **name**: `string`

#### Inherited from

[ILeafData](ILeafData.md).[name](ILeafData.md#name)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:332](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/display/ILeaf.ts#L332)

___

### className

• `Optional` **className**: `string`

#### Inherited from

[ILeafData](ILeafData.md).[className](ILeafData.md#classname)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:333](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/display/ILeaf.ts#L333)

___

### blendMode

• `Optional` **blendMode**: [`IBlendMode`](../modules.md#iblendmode)

#### Inherited from

[ILeafData](ILeafData.md).[blendMode](ILeafData.md#blendmode)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:335](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/display/ILeaf.ts#L335)

___

### opacity

• `Optional` **opacity**: `number`

#### Inherited from

[ILeafData](ILeafData.md).[opacity](ILeafData.md#opacity)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:336](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/display/ILeaf.ts#L336)

___

### visible

• `Optional` **visible**: `boolean` \| `0`

#### Inherited from

[ILeafData](ILeafData.md).[visible](ILeafData.md#visible)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:337](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/display/ILeaf.ts#L337)

___

### selected

• `Optional` **selected**: `boolean`

#### Inherited from

[ILeafData](ILeafData.md).[selected](ILeafData.md#selected)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:338](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/display/ILeaf.ts#L338)

___

### disabled

• `Optional` **disabled**: `boolean`

#### Inherited from

[ILeafData](ILeafData.md).[disabled](ILeafData.md#disabled)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:339](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/display/ILeaf.ts#L339)

___

### locked

• `Optional` **locked**: `boolean`

#### Inherited from

[ILeafData](ILeafData.md).[locked](ILeafData.md#locked)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:340](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/display/ILeaf.ts#L340)

___

### zIndex

• `Optional` **zIndex**: `number`

#### Inherited from

[ILeafData](ILeafData.md).[zIndex](ILeafData.md#zindex)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:341](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/display/ILeaf.ts#L341)

___

### dim

• `Optional` **dim**: `number` \| `boolean`

#### Inherited from

[ILeafData](ILeafData.md).[dim](ILeafData.md#dim)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:343](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/display/ILeaf.ts#L343)

___

### dimskip

• `Optional` **dimskip**: `boolean`

#### Inherited from

[ILeafData](ILeafData.md).[dimskip](ILeafData.md#dimskip)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:344](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/display/ILeaf.ts#L344)

___

### bright

• `Optional` **bright**: `boolean`

#### Inherited from

[ILeafData](ILeafData.md).[bright](ILeafData.md#bright)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:345](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/display/ILeaf.ts#L345)

___

### mask

• `Optional` **mask**: `boolean` \| [`IMaskType`](../modules.md#imasktype)

#### Inherited from

[ILeafData](ILeafData.md).[mask](ILeafData.md#mask)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:347](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/display/ILeaf.ts#L347)

___

### eraser

• `Optional` **eraser**: `boolean` \| [`IEraserType`](../modules.md#ierasertype)

#### Inherited from

[ILeafData](ILeafData.md).[eraser](ILeafData.md#eraser)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:348](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/display/ILeaf.ts#L348)

___

### filter

• `Optional` **filter**: [`IFilter`](IFilter.md)[]

#### Inherited from

[ILeafData](ILeafData.md).[filter](ILeafData.md#filter)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:349](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/display/ILeaf.ts#L349)

___

### complex

• `Optional` **complex**: `boolean`

#### Inherited from

[ILeafData](ILeafData.md).[complex](ILeafData.md#complex)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:350](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/display/ILeaf.ts#L350)

___

### x

• `Optional` **x**: `number`

#### Inherited from

[ILeafData](ILeafData.md).[x](ILeafData.md#x)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:353](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/display/ILeaf.ts#L353)

___

### y

• `Optional` **y**: `number`

#### Inherited from

[ILeafData](ILeafData.md).[y](ILeafData.md#y)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:354](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/display/ILeaf.ts#L354)

___

### width

• `Optional` **width**: `number`

#### Inherited from

[ILeafData](ILeafData.md).[width](ILeafData.md#width)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:355](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/display/ILeaf.ts#L355)

___

### height

• `Optional` **height**: `number`

#### Inherited from

[ILeafData](ILeafData.md).[height](ILeafData.md#height)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:356](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/display/ILeaf.ts#L356)

___

### scaleX

• `Optional` **scaleX**: `number`

#### Inherited from

[ILeafData](ILeafData.md).[scaleX](ILeafData.md#scalex)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:357](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/display/ILeaf.ts#L357)

___

### scaleY

• `Optional` **scaleY**: `number`

#### Inherited from

[ILeafData](ILeafData.md).[scaleY](ILeafData.md#scaley)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:358](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/display/ILeaf.ts#L358)

___

### scaleFixed

• `Optional` **scaleFixed**: [`IScaleFixed`](../modules.md#iscalefixed)

#### Inherited from

[ILeafData](ILeafData.md).[scaleFixed](ILeafData.md#scalefixed)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:359](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/display/ILeaf.ts#L359)

___

### rotation

• `Optional` **rotation**: `number`

#### Inherited from

[ILeafData](ILeafData.md).[rotation](ILeafData.md#rotation)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:360](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/display/ILeaf.ts#L360)

___

### skewX

• `Optional` **skewX**: `number`

#### Inherited from

[ILeafData](ILeafData.md).[skewX](ILeafData.md#skewx)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:361](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/display/ILeaf.ts#L361)

___

### skewY

• `Optional` **skewY**: `number`

#### Inherited from

[ILeafData](ILeafData.md).[skewY](ILeafData.md#skewy)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:362](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/display/ILeaf.ts#L362)

___

### offsetX

• `Optional` **offsetX**: `number`

#### Inherited from

[ILeafData](ILeafData.md).[offsetX](ILeafData.md#offsetx)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:364](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/display/ILeaf.ts#L364)

___

### offsetY

• `Optional` **offsetY**: `number`

#### Inherited from

[ILeafData](ILeafData.md).[offsetY](ILeafData.md#offsety)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:365](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/display/ILeaf.ts#L365)

___

### scrollX

• `Optional` **scrollX**: `number`

#### Inherited from

[ILeafData](ILeafData.md).[scrollX](ILeafData.md#scrollx)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:366](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/display/ILeaf.ts#L366)

___

### scrollY

• `Optional` **scrollY**: `number`

#### Inherited from

[ILeafData](ILeafData.md).[scrollY](ILeafData.md#scrolly)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:367](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/display/ILeaf.ts#L367)

___

### origin

• `Optional` **origin**: [`IUnitPointData`](IUnitPointData.md) \| [`IDirection`](../modules.md#idirection)

#### Inherited from

[ILeafData](ILeafData.md).[origin](ILeafData.md#origin)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:369](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/display/ILeaf.ts#L369)

___

### around

• `Optional` **around**: [`IUnitPointData`](IUnitPointData.md) \| [`IDirection`](../modules.md#idirection)

#### Inherited from

[ILeafData](ILeafData.md).[around](ILeafData.md#around)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:370](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/display/ILeaf.ts#L370)

___

### lazy

• `Optional` **lazy**: `boolean`

#### Inherited from

[ILeafData](ILeafData.md).[lazy](ILeafData.md#lazy)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:372](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/display/ILeaf.ts#L372)

___

### pixelRatio

• `Optional` **pixelRatio**: `number`

#### Inherited from

[ILeafData](ILeafData.md).[pixelRatio](ILeafData.md#pixelratio)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:373](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/display/ILeaf.ts#L373)

___

### renderSpread

• `Optional` **renderSpread**: [`IFourNumber`](../modules.md#ifournumber)

#### Inherited from

[ILeafData](ILeafData.md).[renderSpread](ILeafData.md#renderspread)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:375](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/display/ILeaf.ts#L375)

___

### path

• `Optional` **path**: [`IPathCommandData`](../modules.md#ipathcommanddata)

#### Inherited from

[ILeafData](ILeafData.md).[path](ILeafData.md#path)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:377](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/display/ILeaf.ts#L377)

___

### windingRule

• `Optional` **windingRule**: [`IWindingRule`](../modules.md#iwindingrule)

#### Inherited from

[ILeafData](ILeafData.md).[windingRule](ILeafData.md#windingrule)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:378](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/display/ILeaf.ts#L378)

___

### closed

• `Optional` **closed**: `boolean`

#### Inherited from

[ILeafData](ILeafData.md).[closed](ILeafData.md#closed)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:379](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/display/ILeaf.ts#L379)

___

### flow

• `Optional` **flow**: [`IFlowType`](../modules.md#iflowtype)

#### Inherited from

[ILeafData](ILeafData.md).[flow](ILeafData.md#flow)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:382](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/display/ILeaf.ts#L382)

___

### padding

• `Optional` **padding**: [`IFourNumber`](../modules.md#ifournumber)

#### Inherited from

[ILeafData](ILeafData.md).[padding](ILeafData.md#padding)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:383](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/display/ILeaf.ts#L383)

___

### gap

• `Optional` **gap**: [`IGap`](../modules.md#igap) \| [`IPointGap`](IPointGap.md)

#### Inherited from

[ILeafData](ILeafData.md).[gap](ILeafData.md#gap)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:384](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/display/ILeaf.ts#L384)

___

### flowAlign

• `Optional` **flowAlign**: [`IFlowAxisAlign`](IFlowAxisAlign.md) \| [`IFlowAlign`](../modules.md#iflowalign)

#### Inherited from

[ILeafData](ILeafData.md).[flowAlign](ILeafData.md#flowalign)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:385](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/display/ILeaf.ts#L385)

___

### flowWrap

• `Optional` **flowWrap**: [`IFlowWrap`](../modules.md#iflowwrap)

#### Inherited from

[ILeafData](ILeafData.md).[flowWrap](ILeafData.md#flowwrap)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:386](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/display/ILeaf.ts#L386)

___

### itemBox

• `Optional` **itemBox**: [`IFlowBoxType`](../modules.md#iflowboxtype)

#### Inherited from

[ILeafData](ILeafData.md).[itemBox](ILeafData.md#itembox)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:387](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/display/ILeaf.ts#L387)

___

### inFlow

• `Optional` **inFlow**: `boolean`

#### Inherited from

[ILeafData](ILeafData.md).[inFlow](ILeafData.md#inflow)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:389](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/display/ILeaf.ts#L389)

___

### autoWidth

• `Optional` **autoWidth**: [`IAutoSize`](../modules.md#iautosize)

#### Inherited from

[ILeafData](ILeafData.md).[autoWidth](ILeafData.md#autowidth)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:390](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/display/ILeaf.ts#L390)

___

### autoHeight

• `Optional` **autoHeight**: [`IAutoSize`](../modules.md#iautosize)

#### Inherited from

[ILeafData](ILeafData.md).[autoHeight](ILeafData.md#autoheight)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:391](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/display/ILeaf.ts#L391)

___

### lockRatio

• `Optional` **lockRatio**: `boolean`

#### Inherited from

[ILeafData](ILeafData.md).[lockRatio](ILeafData.md#lockratio)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:392](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/display/ILeaf.ts#L392)

___

### autoBox

• `Optional` **autoBox**: [`IAutoBoxData`](IAutoBoxData.md) \| [`IConstraint`](IConstraint.md)

#### Inherited from

[ILeafData](ILeafData.md).[autoBox](ILeafData.md#autobox)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:393](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/display/ILeaf.ts#L393)

___

### widthRange

• `Optional` **widthRange**: [`IRangeSize`](IRangeSize.md)

#### Inherited from

[ILeafData](ILeafData.md).[widthRange](ILeafData.md#widthrange)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:395](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/display/ILeaf.ts#L395)

___

### heightRange

• `Optional` **heightRange**: [`IRangeSize`](IRangeSize.md)

#### Inherited from

[ILeafData](ILeafData.md).[heightRange](ILeafData.md#heightrange)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:396](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/display/ILeaf.ts#L396)

___

### draggable

• `Optional` **draggable**: `boolean` \| [`IAxis`](../modules.md#iaxis)

#### Inherited from

[ILeafData](ILeafData.md).[draggable](ILeafData.md#draggable)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:399](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/display/ILeaf.ts#L399)

___

### dragBounds

• `Optional` **dragBounds**: `"parent"` \| [`IBoundsData`](IBoundsData.md)

#### Inherited from

[ILeafData](ILeafData.md).[dragBounds](ILeafData.md#dragbounds)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:400](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/display/ILeaf.ts#L400)

___

### dragBoundsType

• `Optional` **dragBoundsType**: [`IDragBoundsType`](../modules.md#idragboundstype)

#### Inherited from

[ILeafData](ILeafData.md).[dragBoundsType](ILeafData.md#dragboundstype)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:401](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/display/ILeaf.ts#L401)

___

### editable

• `Optional` **editable**: `boolean`

#### Inherited from

[ILeafData](ILeafData.md).[editable](ILeafData.md#editable)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:403](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/display/ILeaf.ts#L403)

___

### hittable

• `Optional` **hittable**: `boolean`

#### Inherited from

[ILeafData](ILeafData.md).[hittable](ILeafData.md#hittable)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:405](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/display/ILeaf.ts#L405)

___

### hitFill

• `Optional` **hitFill**: [`IHitType`](../modules.md#ihittype)

#### Inherited from

[ILeafData](ILeafData.md).[hitFill](ILeafData.md#hitfill)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:406](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/display/ILeaf.ts#L406)

___

### hitStroke

• `Optional` **hitStroke**: [`IHitType`](../modules.md#ihittype)

#### Inherited from

[ILeafData](ILeafData.md).[hitStroke](ILeafData.md#hitstroke)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:407](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/display/ILeaf.ts#L407)

___

### hitBox

• `Optional` **hitBox**: `boolean`

#### Inherited from

[ILeafData](ILeafData.md).[hitBox](ILeafData.md#hitbox)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:408](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/display/ILeaf.ts#L408)

___

### hitChildren

• `Optional` **hitChildren**: `boolean`

#### Inherited from

[ILeafData](ILeafData.md).[hitChildren](ILeafData.md#hitchildren)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:409](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/display/ILeaf.ts#L409)

___

### hitSelf

• `Optional` **hitSelf**: `boolean`

#### Inherited from

[ILeafData](ILeafData.md).[hitSelf](ILeafData.md#hitself)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:410](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/display/ILeaf.ts#L410)

___

### hitRadius

• `Optional` **hitRadius**: `number`

#### Inherited from

[ILeafData](ILeafData.md).[hitRadius](ILeafData.md#hitradius)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:411](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/display/ILeaf.ts#L411)

___

### button

• `Optional` **button**: `boolean`

#### Inherited from

[ILeafData](ILeafData.md).[button](ILeafData.md#button)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:413](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/display/ILeaf.ts#L413)

___

### cursor

• `Optional` **cursor**: [`ICursorType`](../modules.md#icursortype) \| [`ICursorType`](../modules.md#icursortype)[]

#### Inherited from

[ILeafData](ILeafData.md).[cursor](ILeafData.md#cursor)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:414](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/display/ILeaf.ts#L414)

___

### motionPath

• `Optional` **motionPath**: `boolean`

#### Inherited from

[ILeafData](ILeafData.md).[motionPath](ILeafData.md#motionpath)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:416](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/display/ILeaf.ts#L416)

___

### motionPrecision

• `Optional` **motionPrecision**: `number`

#### Inherited from

[ILeafData](ILeafData.md).[motionPrecision](ILeafData.md#motionprecision)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:417](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/display/ILeaf.ts#L417)

___

### motion

• `Optional` **motion**: `number` \| [`IUnitData`](IUnitData.md)

#### Inherited from

[ILeafData](ILeafData.md).[motion](ILeafData.md#motion)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:419](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/display/ILeaf.ts#L419)

___

### motionRotation

• `Optional` **motionRotation**: `number` \| `boolean`

#### Inherited from

[ILeafData](ILeafData.md).[motionRotation](ILeafData.md#motionrotation)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:420](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/display/ILeaf.ts#L420)

___

### normalStyle

• `Optional` **normalStyle**: [`IObject`](IObject.md)

#### Inherited from

[ILeafData](ILeafData.md).[normalStyle](ILeafData.md#normalstyle)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:422](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/display/ILeaf.ts#L422)

___

### data

• `Optional` **data**: [`IObject`](IObject.md)

#### Inherited from

[ILeafData](ILeafData.md).[data](ILeafData.md#data)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:425](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/display/ILeaf.ts#L425)

___

### \_\_childBranchNumber

• `Optional` **\_\_childBranchNumber**: `number`

#### Inherited from

[ILeafData](ILeafData.md).[__childBranchNumber](ILeafData.md#__childbranchnumber)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:428](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/display/ILeaf.ts#L428)

___

### \_\_complex

• `Optional` **\_\_complex**: `boolean`

#### Inherited from

[ILeafData](ILeafData.md).[__complex](ILeafData.md#__complex)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:429](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/display/ILeaf.ts#L429)

___

### \_\_complexData

• `Optional` **\_\_complexData**: [`ILeafComplexCachedData`](ILeafComplexCachedData.md)

#### Inherited from

[ILeafData](ILeafData.md).[__complexData](ILeafData.md#__complexdata)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:430](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/display/ILeaf.ts#L430)

___

### \_\_naturalWidth

• `Optional` **\_\_naturalWidth**: `number`

#### Inherited from

[ILeafData](ILeafData.md).[__naturalWidth](ILeafData.md#__naturalwidth)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:432](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/display/ILeaf.ts#L432)

___

### \_\_naturalHeight

• `Optional` **\_\_naturalHeight**: `number`

#### Inherited from

[ILeafData](ILeafData.md).[__naturalHeight](ILeafData.md#__naturalheight)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:433](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/display/ILeaf.ts#L433)

___

### \_\_autoWidth

• `Optional` `Readonly` **\_\_autoWidth**: `boolean`

#### Inherited from

[ILeafData](ILeafData.md).[__autoWidth](ILeafData.md#__autowidth)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:435](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/display/ILeaf.ts#L435)

___

### \_\_autoHeight

• `Optional` `Readonly` **\_\_autoHeight**: `boolean`

#### Inherited from

[ILeafData](ILeafData.md).[__autoHeight](ILeafData.md#__autoheight)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:436](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/display/ILeaf.ts#L436)

___

### \_\_autoSide

• `Optional` `Readonly` **\_\_autoSide**: `boolean`

#### Inherited from

[ILeafData](ILeafData.md).[__autoSide](ILeafData.md#__autoside)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:437](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/display/ILeaf.ts#L437)

___

### \_\_autoSize

• `Optional` `Readonly` **\_\_autoSize**: `boolean`

#### Inherited from

[ILeafData](ILeafData.md).[__autoSize](ILeafData.md#__autosize)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:438](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/display/ILeaf.ts#L438)

___

### \_\_useNaturalRatio

• `Readonly` **\_\_useNaturalRatio**: `boolean`

#### Inherited from

[ILeafData](ILeafData.md).[__useNaturalRatio](ILeafData.md#__usenaturalratio)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:440](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/display/ILeaf.ts#L440)

___

### \_\_isLinePath

• `Readonly` **\_\_isLinePath**: `boolean`

#### Inherited from

[ILeafData](ILeafData.md).[__isLinePath](ILeafData.md#__islinepath)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:441](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/display/ILeaf.ts#L441)

___

### \_\_blendMode

• `Readonly` **\_\_blendMode**: `string`

#### Inherited from

[ILeafData](ILeafData.md).[__blendMode](ILeafData.md#__blendmode)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:442](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/display/ILeaf.ts#L442)

___

### \_\_useStroke

• `Optional` **\_\_useStroke**: `boolean`

#### Inherited from

[ILeafData](ILeafData.md).[__useStroke](ILeafData.md#__usestroke)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:444](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/display/ILeaf.ts#L444)

___

### \_\_useArrow

• `Optional` **\_\_useArrow**: `boolean`

#### Inherited from

[ILeafData](ILeafData.md).[__useArrow](ILeafData.md#__usearrow)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:445](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/display/ILeaf.ts#L445)

___

### \_\_useEffect

• `Optional` **\_\_useEffect**: `boolean`

#### Inherited from

[ILeafData](ILeafData.md).[__useEffect](ILeafData.md#__useeffect)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:446](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/display/ILeaf.ts#L446)

___

### \_\_usePathBox

• `Optional` **\_\_usePathBox**: `boolean`

#### Inherited from

[ILeafData](ILeafData.md).[__usePathBox](ILeafData.md#__usepathbox)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:447](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/display/ILeaf.ts#L447)

___

### \_\_useDim

• `Optional` **\_\_useDim**: `boolean`

#### Inherited from

[ILeafData](ILeafData.md).[__useDim](ILeafData.md#__usedim)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:448](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/display/ILeaf.ts#L448)

___

### \_\_pathInputed

• `Optional` **\_\_pathInputed**: `number`

#### Inherited from

[ILeafData](ILeafData.md).[__pathInputed](ILeafData.md#__pathinputed)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:450](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/display/ILeaf.ts#L450)

___

### \_\_pathForRender

• `Optional` **\_\_pathForRender**: [`IPathCommandData`](../modules.md#ipathcommanddata)

#### Inherited from

[ILeafData](ILeafData.md).[__pathForRender](ILeafData.md#__pathforrender)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:451](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/display/ILeaf.ts#L451)

___

### \_\_path2DForRender

• `Optional` **\_\_path2DForRender**: [`IPath2D`](IPath2D.md)

#### Inherited from

[ILeafData](ILeafData.md).[__path2DForRender](ILeafData.md#__path2dforrender)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:452](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/display/ILeaf.ts#L452)

___

### \_\_startArrowPath

• `Optional` **\_\_startArrowPath**: [`IArrowPathData`](IArrowPathData.md)

#### Inherited from

[ILeafData](ILeafData.md).[__startArrowPath](ILeafData.md#__startarrowpath)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:454](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/display/ILeaf.ts#L454)

___

### \_\_endArrowPath

• `Optional` **\_\_endArrowPath**: [`IArrowPathData`](IArrowPathData.md)

#### Inherited from

[ILeafData](ILeafData.md).[__endArrowPath](ILeafData.md#__endarrowpath)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:455](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/display/ILeaf.ts#L455)

___

### \_\_pathForMotion

• `Optional` **\_\_pathForMotion**: [`IMotionPathData`](IMotionPathData.md)

#### Inherited from

[ILeafData](ILeafData.md).[__pathForMotion](ILeafData.md#__pathformotion)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:456](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/display/ILeaf.ts#L456)

___

### cornerRadius

• `Optional` **cornerRadius**: `number`

#### Inherited from

IUIComputedData.cornerRadius

#### Defined in

[src/ui/packages/interface/src/ICommonAttr.ts:17](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/interface/src/ICommonAttr.ts#L17)

___

### cornerSmoothing

• `Optional` **cornerSmoothing**: `number`

#### Inherited from

IUIComputedData.cornerSmoothing

#### Defined in

[src/ui/packages/interface/src/ICommonAttr.ts:18](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/interface/src/ICommonAttr.ts#L18)

___

### fill

• `Optional` **fill**: `string` \| [`ILeafPaint`](ILeafPaint.md)[]

#### Inherited from

IUIComputedData.fill

#### Defined in

[src/ui/packages/interface/src/ICommonAttr.ts:29](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/interface/src/ICommonAttr.ts#L29)

___

### borderWidth

• `Optional` **borderWidth**: `number` \| `number`[]

#### Inherited from

IUIComputedData.borderWidth

#### Defined in

[src/ui/packages/interface/src/ICommonAttr.ts:34](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/interface/src/ICommonAttr.ts#L34)

___

### borderRadius

• `Optional` **borderRadius**: `number` \| `number`[]

#### Inherited from

IUIComputedData.borderRadius

#### Defined in

[src/ui/packages/interface/src/ICommonAttr.ts:35](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/interface/src/ICommonAttr.ts#L35)

___

### stroke

• `Optional` **stroke**: `string` \| [`ILeafStrokePaint`](ILeafStrokePaint.md)[]

#### Inherited from

IUIComputedData.stroke

#### Defined in

[src/ui/packages/interface/src/ICommonAttr.ts:65](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/interface/src/ICommonAttr.ts#L65)

___

### startArrow

• `Optional` **startArrow**: [`IArrowStyle`](../modules.md#iarrowstyle)

#### Inherited from

IUIComputedData.startArrow

#### Defined in

[src/ui/packages/interface/src/ICommonAttr.ts:67](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/interface/src/ICommonAttr.ts#L67)

___

### endArrow

• `Optional` **endArrow**: [`IArrowStyle`](../modules.md#iarrowstyle)

#### Inherited from

IUIComputedData.endArrow

#### Defined in

[src/ui/packages/interface/src/ICommonAttr.ts:68](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/interface/src/ICommonAttr.ts#L68)

___

### strokeAlign

• `Optional` **strokeAlign**: [`IStrokeAlign`](../modules.md#istrokealign)

#### Inherited from

IUIComputedData.strokeAlign

#### Defined in

[src/ui/packages/interface/src/ICommonAttr.ts:72](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/interface/src/ICommonAttr.ts#L72)

___

### strokeWidth

• `Optional` **strokeWidth**: `number`

#### Inherited from

IUIComputedData.strokeWidth

#### Defined in

[src/ui/packages/interface/src/ICommonAttr.ts:73](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/interface/src/ICommonAttr.ts#L73)

___

### strokeWidths

• `Optional` **strokeWidths**: `number`[]

#### Inherited from

IUIComputedData.strokeWidths

#### Defined in

[src/ui/packages/interface/src/ICommonAttr.ts:74](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/interface/src/ICommonAttr.ts#L74)

___

### strokeScaleFixed

• `Optional` **strokeScaleFixed**: [`IScaleFixed`](../modules.md#iscalefixed)

#### Inherited from

IUIComputedData.strokeScaleFixed

#### Defined in

[src/ui/packages/interface/src/ICommonAttr.ts:75](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/interface/src/ICommonAttr.ts#L75)

___

### strokeCap

• `Optional` **strokeCap**: [`IStrokeCap`](../modules.md#istrokecap)

#### Inherited from

IUIComputedData.strokeCap

#### Defined in

[src/ui/packages/interface/src/ICommonAttr.ts:76](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/interface/src/ICommonAttr.ts#L76)

___

### strokeJoin

• `Optional` **strokeJoin**: [`IStrokeJoin`](../modules.md#istrokejoin)

#### Inherited from

IUIComputedData.strokeJoin

#### Defined in

[src/ui/packages/interface/src/ICommonAttr.ts:77](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/interface/src/ICommonAttr.ts#L77)

___

### dashPattern

• `Optional` **dashPattern**: `number`[]

#### Inherited from

IUIComputedData.dashPattern

#### Defined in

[src/ui/packages/interface/src/ICommonAttr.ts:78](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/interface/src/ICommonAttr.ts#L78)

___

### dashOffset

• `Optional` **dashOffset**: `number`

#### Inherited from

IUIComputedData.dashOffset

#### Defined in

[src/ui/packages/interface/src/ICommonAttr.ts:79](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/interface/src/ICommonAttr.ts#L79)

___

### miterLimit

• `Optional` **miterLimit**: `number`

#### Inherited from

IUIComputedData.miterLimit

#### Defined in

[src/ui/packages/interface/src/ICommonAttr.ts:80](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/interface/src/ICommonAttr.ts#L80)

___

### fontFamily

• `Optional` **fontFamily**: `string`

#### Inherited from

IUIComputedData.fontFamily

#### Defined in

[src/ui/packages/interface/src/ICommonAttr.ts:127](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/interface/src/ICommonAttr.ts#L127)

___

### fontSize

• `Optional` **fontSize**: `number`

#### Inherited from

IUIComputedData.fontSize

#### Defined in

[src/ui/packages/interface/src/ICommonAttr.ts:128](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/interface/src/ICommonAttr.ts#L128)

___

### fontWeight

• `Optional` **fontWeight**: [`IFontWeight`](../modules.md#ifontweight)

#### Inherited from

IUIComputedData.fontWeight

#### Defined in

[src/ui/packages/interface/src/ICommonAttr.ts:129](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/interface/src/ICommonAttr.ts#L129)

___

### italic

• `Optional` **italic**: `boolean`

#### Inherited from

IUIComputedData.italic

#### Defined in

[src/ui/packages/interface/src/ICommonAttr.ts:130](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/interface/src/ICommonAttr.ts#L130)

___

### textCase

• `Optional` **textCase**: [`ITextCase`](../modules.md#itextcase)

#### Inherited from

IUIComputedData.textCase

#### Defined in

[src/ui/packages/interface/src/ICommonAttr.ts:131](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/interface/src/ICommonAttr.ts#L131)

___

### textDecoration

• `Optional` **textDecoration**: [`ITextDecoration`](../modules.md#itextdecoration)

#### Inherited from

IUIComputedData.textDecoration

#### Defined in

[src/ui/packages/interface/src/ICommonAttr.ts:132](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/interface/src/ICommonAttr.ts#L132)

___

### letterSpacing

• `Optional` **letterSpacing**: `number`

#### Inherited from

IUIComputedData.letterSpacing

#### Defined in

[src/ui/packages/interface/src/ICommonAttr.ts:133](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/interface/src/ICommonAttr.ts#L133)

___

### lineHeight

• `Optional` **lineHeight**: `number`

#### Inherited from

IUIComputedData.lineHeight

#### Defined in

[src/ui/packages/interface/src/ICommonAttr.ts:134](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/interface/src/ICommonAttr.ts#L134)

___

### paraIndent

• `Optional` **paraIndent**: `number`

#### Inherited from

IUIComputedData.paraIndent

#### Defined in

[src/ui/packages/interface/src/ICommonAttr.ts:136](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/interface/src/ICommonAttr.ts#L136)

___

### paraSpacing

• `Optional` **paraSpacing**: `number`

#### Inherited from

IUIComputedData.paraSpacing

#### Defined in

[src/ui/packages/interface/src/ICommonAttr.ts:137](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/interface/src/ICommonAttr.ts#L137)

___

### writingMode

• `Optional` **writingMode**: [`IWritingMode`](../modules.md#iwritingmode)

#### Inherited from

IUIComputedData.writingMode

#### Defined in

[src/ui/packages/interface/src/ICommonAttr.ts:139](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/interface/src/ICommonAttr.ts#L139)

___

### textAlign

• `Optional` **textAlign**: [`ITextAlign`](../modules.md#itextalign)

#### Inherited from

IUIComputedData.textAlign

#### Defined in

[src/ui/packages/interface/src/ICommonAttr.ts:140](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/interface/src/ICommonAttr.ts#L140)

___

### verticalAlign

• `Optional` **verticalAlign**: [`IVerticalAlign`](../modules.md#iverticalalign)

#### Inherited from

IUIComputedData.verticalAlign

#### Defined in

[src/ui/packages/interface/src/ICommonAttr.ts:141](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/interface/src/ICommonAttr.ts#L141)

___

### autoSizeAlign

• `Optional` **autoSizeAlign**: `boolean`

#### Inherited from

IUIComputedData.autoSizeAlign

#### Defined in

[src/ui/packages/interface/src/ICommonAttr.ts:142](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/interface/src/ICommonAttr.ts#L142)

___

### textWrap

• `Optional` **textWrap**: [`ITextWrap`](../modules.md#itextwrap)

#### Inherited from

IUIComputedData.textWrap

#### Defined in

[src/ui/packages/interface/src/ICommonAttr.ts:144](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/interface/src/ICommonAttr.ts#L144)

___

### textOverflow

• `Optional` **textOverflow**: [`ITextOverflow`](../modules.md#itextoverflow)

#### Inherited from

IUIComputedData.textOverflow

#### Defined in

[src/ui/packages/interface/src/ICommonAttr.ts:145](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/interface/src/ICommonAttr.ts#L145)

___

### shadow

• `Optional` **shadow**: [`ILeafShadowEffect`](ILeafShadowEffect.md)[]

#### Inherited from

IUIComputedData.shadow

#### Defined in

[src/ui/packages/interface/src/ICommonAttr.ts:164](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/interface/src/ICommonAttr.ts#L164)

___

### innerShadow

• `Optional` **innerShadow**: [`ILeafShadowEffect`](ILeafShadowEffect.md)[]

#### Inherited from

IUIComputedData.innerShadow

#### Defined in

[src/ui/packages/interface/src/ICommonAttr.ts:165](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/interface/src/ICommonAttr.ts#L165)

___

### blur

• `Optional` **blur**: `number`

#### Inherited from

IUIComputedData.blur

#### Defined in

[src/ui/packages/interface/src/ICommonAttr.ts:166](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/interface/src/ICommonAttr.ts#L166)

___

### backgroundBlur

• `Optional` **backgroundBlur**: `number`

#### Inherited from

IUIComputedData.backgroundBlur

#### Defined in

[src/ui/packages/interface/src/ICommonAttr.ts:167](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/interface/src/ICommonAttr.ts#L167)

___

### grayscale

• `Optional` **grayscale**: `number`

#### Inherited from

IUIComputedData.grayscale

#### Defined in

[src/ui/packages/interface/src/ICommonAttr.ts:168](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/interface/src/ICommonAttr.ts#L168)

___

### animation

• `Optional` **animation**: [`IAnimation`](../modules.md#ianimation) \| [`IAnimation`](../modules.md#ianimation)[]

#### Inherited from

IUIAttrData.animation

#### Defined in

[src/ui/packages/interface/src/IUI.ts:563](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/interface/src/IUI.ts#L563)

___

### animationOut

• `Optional` **animationOut**: [`IAnimation`](../modules.md#ianimation) \| [`IAnimation`](../modules.md#ianimation)[]

#### Inherited from

IUIAttrData.animationOut

#### Defined in

[src/ui/packages/interface/src/IUI.ts:564](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/interface/src/IUI.ts#L564)

___

### transition

• `Optional` **transition**: [`ITransition`](../modules.md#itransition)

#### Inherited from

IUIAttrData.transition

#### Defined in

[src/ui/packages/interface/src/IUI.ts:566](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/interface/src/IUI.ts#L566)

___

### transitionOut

• `Optional` **transitionOut**: [`ITransition`](../modules.md#itransition)

#### Inherited from

IUIAttrData.transitionOut

#### Defined in

[src/ui/packages/interface/src/IUI.ts:567](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/interface/src/IUI.ts#L567)

___

### states

• `Optional` **states**: [`IStates`](IStates.md)

#### Inherited from

IUIAttrData.states

#### Defined in

[src/ui/packages/interface/src/IUI.ts:569](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/interface/src/IUI.ts#L569)

___

### state

• `Optional` **state**: `string`

#### Inherited from

IUIAttrData.state

#### Defined in

[src/ui/packages/interface/src/IUI.ts:570](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/interface/src/IUI.ts#L570)

___

### hoverStyle

• `Optional` **hoverStyle**: [`IStateStyle`](IStateStyle.md)

#### Inherited from

IUIAttrData.hoverStyle

#### Defined in

[src/ui/packages/interface/src/IUI.ts:572](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/interface/src/IUI.ts#L572)

___

### pressStyle

• `Optional` **pressStyle**: [`IStateStyle`](IStateStyle.md)

#### Inherited from

IUIAttrData.pressStyle

#### Defined in

[src/ui/packages/interface/src/IUI.ts:573](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/interface/src/IUI.ts#L573)

___

### focusStyle

• `Optional` **focusStyle**: [`IStateStyle`](IStateStyle.md)

#### Inherited from

IUIAttrData.focusStyle

#### Defined in

[src/ui/packages/interface/src/IUI.ts:574](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/interface/src/IUI.ts#L574)

___

### selectedStyle

• `Optional` **selectedStyle**: [`IStateStyle`](IStateStyle.md)

#### Inherited from

IUIAttrData.selectedStyle

#### Defined in

[src/ui/packages/interface/src/IUI.ts:575](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/interface/src/IUI.ts#L575)

___

### disabledStyle

• `Optional` **disabledStyle**: [`IStateStyle`](IStateStyle.md)

#### Inherited from

IUIAttrData.disabledStyle

#### Defined in

[src/ui/packages/interface/src/IUI.ts:576](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/interface/src/IUI.ts#L576)

___

### placeholderStyle

• `Optional` **placeholderStyle**: [`IStateStyle`](IStateStyle.md)

#### Inherited from

IUIAttrData.placeholderStyle

#### Defined in

[src/ui/packages/interface/src/IUI.ts:577](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/interface/src/IUI.ts#L577)

___

### placeholderColor

• `Optional` **placeholderColor**: `string`

#### Inherited from

IUIAttrData.placeholderColor

#### Defined in

[src/ui/packages/interface/src/IUI.ts:578](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/interface/src/IUI.ts#L578)

___

### placeholderDelay

• `Optional` **placeholderDelay**: `number`

#### Inherited from

IUIAttrData.placeholderDelay

#### Defined in

[src/ui/packages/interface/src/IUI.ts:579](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/interface/src/IUI.ts#L579)

___

### editConfig

• `Optional` **editConfig**: [`IEditorConfig`](IEditorConfig.md)

#### Inherited from

IUIAttrData.editConfig

#### Defined in

[src/ui/packages/interface/src/IUI.ts:581](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/interface/src/IUI.ts#L581)

___

### editOuter

• `Optional` **editOuter**: `string`

#### Inherited from

IUIAttrData.editOuter

#### Defined in

[src/ui/packages/interface/src/IUI.ts:582](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/interface/src/IUI.ts#L582)

___

### editInner

• `Optional` **editInner**: `string`

#### Inherited from

IUIAttrData.editInner

#### Defined in

[src/ui/packages/interface/src/IUI.ts:583](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/interface/src/IUI.ts#L583)

___

### scale

• `Readonly` **scale**: `number` \| [`IPointData`](IPointData.md)

#### Defined in

[src/ui/packages/interface/src/IUI.ts:592](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/interface/src/IUI.ts#L592)

___

### \_\_isFills

• `Optional` **\_\_isFills**: `boolean`

#### Defined in

[src/ui/packages/interface/src/IUI.ts:595](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/interface/src/IUI.ts#L595)

___

### \_\_isStrokes

• `Optional` **\_\_isStrokes**: `boolean`

#### Defined in

[src/ui/packages/interface/src/IUI.ts:596](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/interface/src/IUI.ts#L596)

___

### \_\_strokeWidth

• `Readonly` **\_\_strokeWidth**: `number`

#### Defined in

[src/ui/packages/interface/src/IUI.ts:598](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/interface/src/IUI.ts#L598)

___

### \_\_maxStrokeWidth

• `Readonly` **\_\_maxStrokeWidth**: `number`

#### Defined in

[src/ui/packages/interface/src/IUI.ts:599](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/interface/src/IUI.ts#L599)

___

### \_\_strokeWidthCache

• `Optional` **\_\_strokeWidthCache**: `number`

#### Defined in

[src/ui/packages/interface/src/IUI.ts:600](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/interface/src/IUI.ts#L600)

___

### \_\_hasMultiStrokeStyle

• `Optional` **\_\_hasMultiStrokeStyle**: `number`

#### Defined in

[src/ui/packages/interface/src/IUI.ts:601](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/interface/src/IUI.ts#L601)

___

### \_\_hasMultiPaint

• `Optional` `Readonly` **\_\_hasMultiPaint**: `boolean`

#### Overrides

[ILeafData](ILeafData.md).[__hasMultiPaint](ILeafData.md#__hasmultipaint)

#### Defined in

[src/ui/packages/interface/src/IUI.ts:602](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/interface/src/IUI.ts#L602)

___

### \_\_isAlphaPixelFill

• `Optional` **\_\_isAlphaPixelFill**: `boolean`

#### Defined in

[src/ui/packages/interface/src/IUI.ts:604](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/interface/src/IUI.ts#L604)

___

### \_\_isAlphaPixelStroke

• `Optional` **\_\_isAlphaPixelStroke**: `boolean`

#### Defined in

[src/ui/packages/interface/src/IUI.ts:605](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/interface/src/IUI.ts#L605)

___

### \_\_isTransparentFill

• `Optional` **\_\_isTransparentFill**: `boolean`

#### Defined in

[src/ui/packages/interface/src/IUI.ts:607](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/interface/src/IUI.ts#L607)

___

### \_\_isTransparentStroke

• `Optional` **\_\_isTransparentStroke**: `boolean`

#### Defined in

[src/ui/packages/interface/src/IUI.ts:608](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/interface/src/IUI.ts#L608)

___

### \_\_isHitPixel

• `Optional` **\_\_isHitPixel**: `boolean`

#### Defined in

[src/ui/packages/interface/src/IUI.ts:610](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/interface/src/IUI.ts#L610)

___

### \_\_isCanvas

• `Optional` **\_\_isCanvas**: `boolean`

#### Defined in

[src/ui/packages/interface/src/IUI.ts:611](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/interface/src/IUI.ts#L611)

___

### \_\_isFastShadow

• `Optional` **\_\_isFastShadow**: `boolean`

#### Defined in

[src/ui/packages/interface/src/IUI.ts:612](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/interface/src/IUI.ts#L612)

___

### \_\_fillAfterStroke

• `Optional` **\_\_fillAfterStroke**: `boolean`

#### Defined in

[src/ui/packages/interface/src/IUI.ts:614](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/interface/src/IUI.ts#L614)

___

### \_\_drawAfterFill

• `Optional` **\_\_drawAfterFill**: `boolean`

#### Defined in

[src/ui/packages/interface/src/IUI.ts:615](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/interface/src/IUI.ts#L615)

___

### \_\_clipAfterFill

• `Optional` `Readonly` **\_\_clipAfterFill**: `boolean`

#### Overrides

[ILeafData](ILeafData.md).[__clipAfterFill](ILeafData.md#__clipafterfill)

#### Defined in

[src/ui/packages/interface/src/IUI.ts:616](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/interface/src/IUI.ts#L616)

___

### \_\_hasSurface

• `Optional` `Readonly` **\_\_hasSurface**: `boolean`

#### Defined in

[src/ui/packages/interface/src/IUI.ts:617](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/interface/src/IUI.ts#L617)

___

### \_\_blendLayer

• `Optional` **\_\_blendLayer**: `boolean`

#### Defined in

[src/ui/packages/interface/src/IUI.ts:619](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/interface/src/IUI.ts#L619)

___

### \_\_boxStroke

• `Optional` **\_\_boxStroke**: `boolean`

#### Defined in

[src/ui/packages/interface/src/IUI.ts:621](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/interface/src/IUI.ts#L621)

___

### \_\_font

• `Optional` **\_\_font**: `string`

#### Defined in

[src/ui/packages/interface/src/IUI.ts:624](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/interface/src/IUI.ts#L624)

___

### \_\_textDrawData

• `Optional` **\_\_textDrawData**: [`ITextDrawData`](ITextDrawData.md)

#### Defined in

[src/ui/packages/interface/src/IUI.ts:625](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/interface/src/IUI.ts#L625)

___

### \_\_needComputePaint

• `Optional` **\_\_needComputePaint**: `boolean`

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

[ILeafData](ILeafData.md).[__get](ILeafData.md#__get)

#### Defined in

[src/leafer/packages/interface/src/data/ILeafData.ts:10](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/data/ILeafData.ts#L10)

___

### \_\_getData

▸ **__getData**(): [`IObject`](IObject.md)

#### Returns

[`IObject`](IObject.md)

#### Inherited from

[ILeafData](ILeafData.md).[__getData](ILeafData.md#__getdata)

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

[ILeafData](ILeafData.md).[__setInput](ILeafData.md#__setinput)

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

[ILeafData](ILeafData.md).[__getInput](ILeafData.md#__getinput)

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

[ILeafData](ILeafData.md).[__removeInput](ILeafData.md#__removeinput)

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

[ILeafData](ILeafData.md).[__getInputData](ILeafData.md#__getinputdata)

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

[ILeafData](ILeafData.md).[__setMiddle](ILeafData.md#__setmiddle)

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

[ILeafData](ILeafData.md).[__getMiddle](ILeafData.md#__getmiddle)

#### Defined in

[src/leafer/packages/interface/src/data/ILeafData.ts:19](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/data/ILeafData.ts#L19)

___

### destroy

▸ **destroy**(): `void`

#### Returns

`void`

#### Inherited from

[ILeafData](ILeafData.md).[destroy](ILeafData.md#destroy)

#### Defined in

[src/leafer/packages/interface/src/data/ILeafData.ts:21](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/data/ILeafData.ts#L21)

___

### \_\_checkSingle

▸ **__checkSingle**(): `void`

#### Returns

`void`

#### Inherited from

[ILeafData](ILeafData.md).[__checkSingle](ILeafData.md#__checksingle)

#### Defined in

[src/leafer/packages/interface/src/data/ILeafData.ts:33](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/data/ILeafData.ts#L33)

___

### \_\_removeNaturalSize

▸ **__removeNaturalSize**(): `void`

#### Returns

`void`

#### Inherited from

[ILeafData](ILeafData.md).[__removeNaturalSize](ILeafData.md#__removenaturalsize)

#### Defined in

[src/leafer/packages/interface/src/data/ILeafData.ts:34](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/data/ILeafData.ts#L34)

___

### \_\_computePaint

▸ **__computePaint**(): `void`

#### Returns

`void`

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

#### Defined in

[src/ui/packages/interface/src/IUI.ts:632](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/interface/src/IUI.ts#L632)
