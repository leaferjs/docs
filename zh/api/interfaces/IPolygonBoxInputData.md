# Interface: IPolygonBoxInputData

## Hierarchy

- `IPolygonAttrData`

- [`IBoxInputData`](IBoxInputData.md)

  ↳ **`IPolygonBoxInputData`**

## Table of contents

### Properties

- [id](IPolygonBoxInputData.md#id)
- [name](IPolygonBoxInputData.md#name)
- [className](IPolygonBoxInputData.md#classname)
- [blendMode](IPolygonBoxInputData.md#blendmode)
- [opacity](IPolygonBoxInputData.md#opacity)
- [visible](IPolygonBoxInputData.md#visible)
- [selected](IPolygonBoxInputData.md#selected)
- [disabled](IPolygonBoxInputData.md#disabled)
- [locked](IPolygonBoxInputData.md#locked)
- [zIndex](IPolygonBoxInputData.md#zindex)
- [dim](IPolygonBoxInputData.md#dim)
- [dimskip](IPolygonBoxInputData.md#dimskip)
- [bright](IPolygonBoxInputData.md#bright)
- [mask](IPolygonBoxInputData.md#mask)
- [eraser](IPolygonBoxInputData.md#eraser)
- [filter](IPolygonBoxInputData.md#filter)
- [complex](IPolygonBoxInputData.md#complex)
- [x](IPolygonBoxInputData.md#x)
- [y](IPolygonBoxInputData.md#y)
- [width](IPolygonBoxInputData.md#width)
- [height](IPolygonBoxInputData.md#height)
- [scaleX](IPolygonBoxInputData.md#scalex)
- [scaleY](IPolygonBoxInputData.md#scaley)
- [scaleFixed](IPolygonBoxInputData.md#scalefixed)
- [rotation](IPolygonBoxInputData.md#rotation)
- [skewX](IPolygonBoxInputData.md#skewx)
- [skewY](IPolygonBoxInputData.md#skewy)
- [scale](IPolygonBoxInputData.md#scale)
- [offsetX](IPolygonBoxInputData.md#offsetx)
- [offsetY](IPolygonBoxInputData.md#offsety)
- [scrollX](IPolygonBoxInputData.md#scrollx)
- [scrollY](IPolygonBoxInputData.md#scrolly)
- [origin](IPolygonBoxInputData.md#origin)
- [around](IPolygonBoxInputData.md#around)
- [lazy](IPolygonBoxInputData.md#lazy)
- [pixelRatio](IPolygonBoxInputData.md#pixelratio)
- [renderSpread](IPolygonBoxInputData.md#renderspread)
- [path](IPolygonBoxInputData.md#path)
- [windingRule](IPolygonBoxInputData.md#windingrule)
- [closed](IPolygonBoxInputData.md#closed)
- [flow](IPolygonBoxInputData.md#flow)
- [padding](IPolygonBoxInputData.md#padding)
- [gap](IPolygonBoxInputData.md#gap)
- [flowAlign](IPolygonBoxInputData.md#flowalign)
- [flowWrap](IPolygonBoxInputData.md#flowwrap)
- [itemBox](IPolygonBoxInputData.md#itembox)
- [inFlow](IPolygonBoxInputData.md#inflow)
- [autoWidth](IPolygonBoxInputData.md#autowidth)
- [autoHeight](IPolygonBoxInputData.md#autoheight)
- [lockRatio](IPolygonBoxInputData.md#lockratio)
- [autoBox](IPolygonBoxInputData.md#autobox)
- [widthRange](IPolygonBoxInputData.md#widthrange)
- [heightRange](IPolygonBoxInputData.md#heightrange)
- [draggable](IPolygonBoxInputData.md#draggable)
- [dragBounds](IPolygonBoxInputData.md#dragbounds)
- [dragBoundsType](IPolygonBoxInputData.md#dragboundstype)
- [editable](IPolygonBoxInputData.md#editable)
- [hittable](IPolygonBoxInputData.md#hittable)
- [hitFill](IPolygonBoxInputData.md#hitfill)
- [hitStroke](IPolygonBoxInputData.md#hitstroke)
- [hitBox](IPolygonBoxInputData.md#hitbox)
- [hitChildren](IPolygonBoxInputData.md#hitchildren)
- [hitSelf](IPolygonBoxInputData.md#hitself)
- [hitRadius](IPolygonBoxInputData.md#hitradius)
- [button](IPolygonBoxInputData.md#button)
- [cursor](IPolygonBoxInputData.md#cursor)
- [motionPath](IPolygonBoxInputData.md#motionpath)
- [motionPrecision](IPolygonBoxInputData.md#motionprecision)
- [motion](IPolygonBoxInputData.md#motion)
- [motionRotation](IPolygonBoxInputData.md#motionrotation)
- [normalStyle](IPolygonBoxInputData.md#normalstyle)
- [event](IPolygonBoxInputData.md#event)
- [data](IPolygonBoxInputData.md#data)
- [tag](IPolygonBoxInputData.md#tag)
- [cornerRadius](IPolygonBoxInputData.md#cornerradius)
- [cornerSmoothing](IPolygonBoxInputData.md#cornersmoothing)
- [fill](IPolygonBoxInputData.md#fill)
- [stroke](IPolygonBoxInputData.md#stroke)
- [startArrow](IPolygonBoxInputData.md#startarrow)
- [endArrow](IPolygonBoxInputData.md#endarrow)
- [strokeAlign](IPolygonBoxInputData.md#strokealign)
- [strokeWidth](IPolygonBoxInputData.md#strokewidth)
- [strokeScaleFixed](IPolygonBoxInputData.md#strokescalefixed)
- [strokeCap](IPolygonBoxInputData.md#strokecap)
- [strokeJoin](IPolygonBoxInputData.md#strokejoin)
- [dashPattern](IPolygonBoxInputData.md#dashpattern)
- [dashOffset](IPolygonBoxInputData.md#dashoffset)
- [miterLimit](IPolygonBoxInputData.md#miterlimit)
- [fontFamily](IPolygonBoxInputData.md#fontfamily)
- [fontSize](IPolygonBoxInputData.md#fontsize)
- [fontWeight](IPolygonBoxInputData.md#fontweight)
- [italic](IPolygonBoxInputData.md#italic)
- [textCase](IPolygonBoxInputData.md#textcase)
- [textDecoration](IPolygonBoxInputData.md#textdecoration)
- [letterSpacing](IPolygonBoxInputData.md#letterspacing)
- [lineHeight](IPolygonBoxInputData.md#lineheight)
- [paraIndent](IPolygonBoxInputData.md#paraindent)
- [paraSpacing](IPolygonBoxInputData.md#paraspacing)
- [writingMode](IPolygonBoxInputData.md#writingmode)
- [textAlign](IPolygonBoxInputData.md#textalign)
- [verticalAlign](IPolygonBoxInputData.md#verticalalign)
- [autoSizeAlign](IPolygonBoxInputData.md#autosizealign)
- [textWrap](IPolygonBoxInputData.md#textwrap)
- [textOverflow](IPolygonBoxInputData.md#textoverflow)
- [shadow](IPolygonBoxInputData.md#shadow)
- [innerShadow](IPolygonBoxInputData.md#innershadow)
- [blur](IPolygonBoxInputData.md#blur)
- [backgroundBlur](IPolygonBoxInputData.md#backgroundblur)
- [grayscale](IPolygonBoxInputData.md#grayscale)
- [sides](IPolygonBoxInputData.md#sides)
- [points](IPolygonBoxInputData.md#points)
- [curve](IPolygonBoxInputData.md#curve)
- [overflow](IPolygonBoxInputData.md#overflow)
- [scrollConfig](IPolygonBoxInputData.md#scrollconfig)
- [resizeChildren](IPolygonBoxInputData.md#resizechildren)
- [textBox](IPolygonBoxInputData.md#textbox)
- [animation](IPolygonBoxInputData.md#animation)
- [animationOut](IPolygonBoxInputData.md#animationout)
- [transition](IPolygonBoxInputData.md#transition)
- [transitionOut](IPolygonBoxInputData.md#transitionout)
- [states](IPolygonBoxInputData.md#states)
- [state](IPolygonBoxInputData.md#state)
- [hoverStyle](IPolygonBoxInputData.md#hoverstyle)
- [pressStyle](IPolygonBoxInputData.md#pressstyle)
- [focusStyle](IPolygonBoxInputData.md#focusstyle)
- [selectedStyle](IPolygonBoxInputData.md#selectedstyle)
- [disabledStyle](IPolygonBoxInputData.md#disabledstyle)
- [placeholderStyle](IPolygonBoxInputData.md#placeholderstyle)
- [placeholderColor](IPolygonBoxInputData.md#placeholdercolor)
- [placeholderDelay](IPolygonBoxInputData.md#placeholderdelay)
- [editConfig](IPolygonBoxInputData.md#editconfig)
- [editOuter](IPolygonBoxInputData.md#editouter)
- [editInner](IPolygonBoxInputData.md#editinner)
- [children](IPolygonBoxInputData.md#children)

## Properties

### id

• `Optional` **id**: `string`

#### Inherited from

[IBoxInputData](IBoxInputData.md).[id](IBoxInputData.md#id)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:221](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/display/ILeaf.ts#L221)

___

### name

• `Optional` **name**: `string`

#### Inherited from

[IBoxInputData](IBoxInputData.md).[name](IBoxInputData.md#name)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:222](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/display/ILeaf.ts#L222)

___

### className

• `Optional` **className**: `string`

#### Inherited from

[IBoxInputData](IBoxInputData.md).[className](IBoxInputData.md#classname)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:223](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/display/ILeaf.ts#L223)

___

### blendMode

• `Optional` **blendMode**: [`IBlendMode`](../modules.md#iblendmode)

#### Inherited from

[IBoxInputData](IBoxInputData.md).[blendMode](IBoxInputData.md#blendmode)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:225](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/display/ILeaf.ts#L225)

___

### opacity

• `Optional` **opacity**: `number`

#### Inherited from

[IBoxInputData](IBoxInputData.md).[opacity](IBoxInputData.md#opacity)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:227](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/display/ILeaf.ts#L227)

___

### visible

• `Optional` **visible**: `boolean` \| ``0``

#### Inherited from

[IBoxInputData](IBoxInputData.md).[visible](IBoxInputData.md#visible)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:228](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/display/ILeaf.ts#L228)

___

### selected

• `Optional` **selected**: `boolean`

#### Inherited from

[IBoxInputData](IBoxInputData.md).[selected](IBoxInputData.md#selected)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:229](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/display/ILeaf.ts#L229)

___

### disabled

• `Optional` **disabled**: `boolean`

#### Inherited from

[IBoxInputData](IBoxInputData.md).[disabled](IBoxInputData.md#disabled)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:230](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/display/ILeaf.ts#L230)

___

### locked

• `Optional` **locked**: `boolean`

#### Inherited from

[IBoxInputData](IBoxInputData.md).[locked](IBoxInputData.md#locked)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:231](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/display/ILeaf.ts#L231)

___

### zIndex

• `Optional` **zIndex**: `number`

#### Inherited from

[IBoxInputData](IBoxInputData.md).[zIndex](IBoxInputData.md#zindex)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:232](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/display/ILeaf.ts#L232)

___

### dim

• `Optional` **dim**: `number` \| `boolean`

#### Inherited from

[IBoxInputData](IBoxInputData.md).[dim](IBoxInputData.md#dim)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:234](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/display/ILeaf.ts#L234)

___

### dimskip

• `Optional` **dimskip**: `boolean`

#### Inherited from

[IBoxInputData](IBoxInputData.md).[dimskip](IBoxInputData.md#dimskip)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:235](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/display/ILeaf.ts#L235)

___

### bright

• `Optional` **bright**: `boolean`

#### Inherited from

[IBoxInputData](IBoxInputData.md).[bright](IBoxInputData.md#bright)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:236](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/display/ILeaf.ts#L236)

___

### mask

• `Optional` **mask**: `boolean` \| [`IMaskType`](../modules.md#imasktype)

#### Inherited from

[IBoxInputData](IBoxInputData.md).[mask](IBoxInputData.md#mask)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:238](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/display/ILeaf.ts#L238)

___

### eraser

• `Optional` **eraser**: `boolean` \| [`IEraserType`](../modules.md#ierasertype)

#### Inherited from

[IBoxInputData](IBoxInputData.md).[eraser](IBoxInputData.md#eraser)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:239](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/display/ILeaf.ts#L239)

___

### filter

• `Optional` **filter**: [`IFilter`](IFilter.md) \| [`IFilter`](IFilter.md)[]

#### Inherited from

[IBoxInputData](IBoxInputData.md).[filter](IBoxInputData.md#filter)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:240](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/display/ILeaf.ts#L240)

___

### complex

• `Optional` **complex**: `boolean`

#### Inherited from

[IBoxInputData](IBoxInputData.md).[complex](IBoxInputData.md#complex)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:241](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/display/ILeaf.ts#L241)

___

### x

• `Optional` **x**: `number`

#### Inherited from

[IBoxInputData](IBoxInputData.md).[x](IBoxInputData.md#x)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:244](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/display/ILeaf.ts#L244)

___

### y

• `Optional` **y**: `number`

#### Inherited from

[IBoxInputData](IBoxInputData.md).[y](IBoxInputData.md#y)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:245](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/display/ILeaf.ts#L245)

___

### width

• `Optional` **width**: `number`

#### Inherited from

[IBoxInputData](IBoxInputData.md).[width](IBoxInputData.md#width)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:246](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/display/ILeaf.ts#L246)

___

### height

• `Optional` **height**: `number`

#### Inherited from

[IBoxInputData](IBoxInputData.md).[height](IBoxInputData.md#height)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:247](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/display/ILeaf.ts#L247)

___

### scaleX

• `Optional` **scaleX**: `number`

#### Inherited from

[IBoxInputData](IBoxInputData.md).[scaleX](IBoxInputData.md#scalex)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:248](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/display/ILeaf.ts#L248)

___

### scaleY

• `Optional` **scaleY**: `number`

#### Inherited from

[IBoxInputData](IBoxInputData.md).[scaleY](IBoxInputData.md#scaley)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:249](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/display/ILeaf.ts#L249)

___

### scaleFixed

• `Optional` **scaleFixed**: [`IScaleFixed`](../modules.md#iscalefixed)

#### Inherited from

[IBoxInputData](IBoxInputData.md).[scaleFixed](IBoxInputData.md#scalefixed)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:250](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/display/ILeaf.ts#L250)

___

### rotation

• `Optional` **rotation**: `number`

#### Inherited from

[IBoxInputData](IBoxInputData.md).[rotation](IBoxInputData.md#rotation)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:251](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/display/ILeaf.ts#L251)

___

### skewX

• `Optional` **skewX**: `number`

#### Inherited from

[IBoxInputData](IBoxInputData.md).[skewX](IBoxInputData.md#skewx)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:252](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/display/ILeaf.ts#L252)

___

### skewY

• `Optional` **skewY**: `number`

#### Inherited from

[IBoxInputData](IBoxInputData.md).[skewY](IBoxInputData.md#skewy)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:253](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/display/ILeaf.ts#L253)

___

### scale

• `Optional` **scale**: `number` \| [`IPointData`](IPointData.md)

#### Inherited from

[IBoxInputData](IBoxInputData.md).[scale](IBoxInputData.md#scale)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:255](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/display/ILeaf.ts#L255)

___

### offsetX

• `Optional` **offsetX**: `number`

#### Inherited from

[IBoxInputData](IBoxInputData.md).[offsetX](IBoxInputData.md#offsetx)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:257](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/display/ILeaf.ts#L257)

___

### offsetY

• `Optional` **offsetY**: `number`

#### Inherited from

[IBoxInputData](IBoxInputData.md).[offsetY](IBoxInputData.md#offsety)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:258](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/display/ILeaf.ts#L258)

___

### scrollX

• `Optional` **scrollX**: `number`

#### Inherited from

[IBoxInputData](IBoxInputData.md).[scrollX](IBoxInputData.md#scrollx)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:259](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/display/ILeaf.ts#L259)

___

### scrollY

• `Optional` **scrollY**: `number`

#### Inherited from

[IBoxInputData](IBoxInputData.md).[scrollY](IBoxInputData.md#scrolly)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:260](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/display/ILeaf.ts#L260)

___

### origin

• `Optional` **origin**: [`IUnitPointData`](IUnitPointData.md) \| [`IDirection`](../modules.md#idirection)

#### Inherited from

[IBoxInputData](IBoxInputData.md).[origin](IBoxInputData.md#origin)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:262](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/display/ILeaf.ts#L262)

___

### around

• `Optional` **around**: [`IUnitPointData`](IUnitPointData.md) \| [`IDirection`](../modules.md#idirection)

#### Inherited from

[IBoxInputData](IBoxInputData.md).[around](IBoxInputData.md#around)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:263](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/display/ILeaf.ts#L263)

___

### lazy

• `Optional` **lazy**: `boolean`

#### Inherited from

[IBoxInputData](IBoxInputData.md).[lazy](IBoxInputData.md#lazy)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:265](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/display/ILeaf.ts#L265)

___

### pixelRatio

• `Optional` **pixelRatio**: `number`

#### Inherited from

[IBoxInputData](IBoxInputData.md).[pixelRatio](IBoxInputData.md#pixelratio)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:266](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/display/ILeaf.ts#L266)

___

### renderSpread

• `Optional` **renderSpread**: [`IFourNumber`](../modules.md#ifournumber)

#### Inherited from

[IBoxInputData](IBoxInputData.md).[renderSpread](IBoxInputData.md#renderspread)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:268](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/display/ILeaf.ts#L268)

___

### path

• `Optional` **path**: `string` \| [`IPathCommandData`](../modules.md#ipathcommanddata) \| [`IPathCommandNode`](../modules.md#ipathcommandnode)[] \| [`IPathCommandObject`](../modules.md#ipathcommandobject)[]

#### Inherited from

[IBoxInputData](IBoxInputData.md).[path](IBoxInputData.md#path)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:270](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/display/ILeaf.ts#L270)

___

### windingRule

• `Optional` **windingRule**: [`IWindingRule`](../modules.md#iwindingrule)

#### Inherited from

[IBoxInputData](IBoxInputData.md).[windingRule](IBoxInputData.md#windingrule)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:271](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/display/ILeaf.ts#L271)

___

### closed

• `Optional` **closed**: `boolean`

#### Inherited from

[IBoxInputData](IBoxInputData.md).[closed](IBoxInputData.md#closed)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:272](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/display/ILeaf.ts#L272)

___

### flow

• `Optional` **flow**: [`IFlowType`](../modules.md#iflowtype)

#### Inherited from

[IBoxInputData](IBoxInputData.md).[flow](IBoxInputData.md#flow)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:275](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/display/ILeaf.ts#L275)

___

### padding

• `Optional` **padding**: [`IFourNumber`](../modules.md#ifournumber)

#### Inherited from

[IBoxInputData](IBoxInputData.md).[padding](IBoxInputData.md#padding)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:276](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/display/ILeaf.ts#L276)

___

### gap

• `Optional` **gap**: [`IGap`](../modules.md#igap) \| [`IPointGap`](IPointGap.md)

#### Inherited from

[IBoxInputData](IBoxInputData.md).[gap](IBoxInputData.md#gap)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:277](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/display/ILeaf.ts#L277)

___

### flowAlign

• `Optional` **flowAlign**: [`IFlowAxisAlign`](IFlowAxisAlign.md) \| [`IFlowAlign`](../modules.md#iflowalign)

#### Inherited from

[IBoxInputData](IBoxInputData.md).[flowAlign](IBoxInputData.md#flowalign)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:278](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/display/ILeaf.ts#L278)

___

### flowWrap

• `Optional` **flowWrap**: [`IFlowWrap`](../modules.md#iflowwrap)

#### Inherited from

[IBoxInputData](IBoxInputData.md).[flowWrap](IBoxInputData.md#flowwrap)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:279](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/display/ILeaf.ts#L279)

___

### itemBox

• `Optional` **itemBox**: [`IFlowBoxType`](../modules.md#iflowboxtype)

#### Inherited from

[IBoxInputData](IBoxInputData.md).[itemBox](IBoxInputData.md#itembox)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:280](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/display/ILeaf.ts#L280)

___

### inFlow

• `Optional` **inFlow**: `boolean`

#### Inherited from

[IBoxInputData](IBoxInputData.md).[inFlow](IBoxInputData.md#inflow)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:282](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/display/ILeaf.ts#L282)

___

### autoWidth

• `Optional` **autoWidth**: [`IAutoSize`](../modules.md#iautosize)

#### Inherited from

[IBoxInputData](IBoxInputData.md).[autoWidth](IBoxInputData.md#autowidth)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:283](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/display/ILeaf.ts#L283)

___

### autoHeight

• `Optional` **autoHeight**: [`IAutoSize`](../modules.md#iautosize)

#### Inherited from

[IBoxInputData](IBoxInputData.md).[autoHeight](IBoxInputData.md#autoheight)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:284](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/display/ILeaf.ts#L284)

___

### lockRatio

• `Optional` **lockRatio**: `boolean`

#### Inherited from

[IBoxInputData](IBoxInputData.md).[lockRatio](IBoxInputData.md#lockratio)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:285](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/display/ILeaf.ts#L285)

___

### autoBox

• `Optional` **autoBox**: [`IAutoBoxData`](IAutoBoxData.md) \| [`IConstraint`](IConstraint.md)

#### Inherited from

[IBoxInputData](IBoxInputData.md).[autoBox](IBoxInputData.md#autobox)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:286](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/display/ILeaf.ts#L286)

___

### widthRange

• `Optional` **widthRange**: [`IRangeSize`](IRangeSize.md)

#### Inherited from

[IBoxInputData](IBoxInputData.md).[widthRange](IBoxInputData.md#widthrange)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:288](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/display/ILeaf.ts#L288)

___

### heightRange

• `Optional` **heightRange**: [`IRangeSize`](IRangeSize.md)

#### Inherited from

[IBoxInputData](IBoxInputData.md).[heightRange](IBoxInputData.md#heightrange)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:289](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/display/ILeaf.ts#L289)

___

### draggable

• `Optional` **draggable**: `boolean` \| [`IAxis`](../modules.md#iaxis)

#### Inherited from

[IBoxInputData](IBoxInputData.md).[draggable](IBoxInputData.md#draggable)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:292](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/display/ILeaf.ts#L292)

___

### dragBounds

• `Optional` **dragBounds**: ``"parent"`` \| [`IBoundsData`](IBoundsData.md)

#### Inherited from

[IBoxInputData](IBoxInputData.md).[dragBounds](IBoxInputData.md#dragbounds)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:293](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/display/ILeaf.ts#L293)

___

### dragBoundsType

• `Optional` **dragBoundsType**: [`IDragBoundsType`](../modules.md#idragboundstype)

#### Inherited from

[IBoxInputData](IBoxInputData.md).[dragBoundsType](IBoxInputData.md#dragboundstype)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:294](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/display/ILeaf.ts#L294)

___

### editable

• `Optional` **editable**: `boolean`

#### Inherited from

[IBoxInputData](IBoxInputData.md).[editable](IBoxInputData.md#editable)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:296](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/display/ILeaf.ts#L296)

___

### hittable

• `Optional` **hittable**: `boolean`

#### Inherited from

[IBoxInputData](IBoxInputData.md).[hittable](IBoxInputData.md#hittable)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:298](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/display/ILeaf.ts#L298)

___

### hitFill

• `Optional` **hitFill**: [`IHitType`](../modules.md#ihittype)

#### Inherited from

[IBoxInputData](IBoxInputData.md).[hitFill](IBoxInputData.md#hitfill)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:299](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/display/ILeaf.ts#L299)

___

### hitStroke

• `Optional` **hitStroke**: [`IHitType`](../modules.md#ihittype)

#### Inherited from

[IBoxInputData](IBoxInputData.md).[hitStroke](IBoxInputData.md#hitstroke)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:300](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/display/ILeaf.ts#L300)

___

### hitBox

• `Optional` **hitBox**: `boolean`

#### Inherited from

[IBoxInputData](IBoxInputData.md).[hitBox](IBoxInputData.md#hitbox)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:301](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/display/ILeaf.ts#L301)

___

### hitChildren

• `Optional` **hitChildren**: `boolean`

#### Inherited from

[IBoxInputData](IBoxInputData.md).[hitChildren](IBoxInputData.md#hitchildren)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:302](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/display/ILeaf.ts#L302)

___

### hitSelf

• `Optional` **hitSelf**: `boolean`

#### Inherited from

[IBoxInputData](IBoxInputData.md).[hitSelf](IBoxInputData.md#hitself)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:303](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/display/ILeaf.ts#L303)

___

### hitRadius

• `Optional` **hitRadius**: `number`

#### Inherited from

[IBoxInputData](IBoxInputData.md).[hitRadius](IBoxInputData.md#hitradius)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:304](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/display/ILeaf.ts#L304)

___

### button

• `Optional` **button**: `boolean`

#### Inherited from

[IBoxInputData](IBoxInputData.md).[button](IBoxInputData.md#button)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:306](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/display/ILeaf.ts#L306)

___

### cursor

• `Optional` **cursor**: [`ICursorType`](../modules.md#icursortype) \| [`ICursorType`](../modules.md#icursortype)[]

#### Inherited from

[IBoxInputData](IBoxInputData.md).[cursor](IBoxInputData.md#cursor)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:307](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/display/ILeaf.ts#L307)

___

### motionPath

• `Optional` **motionPath**: `boolean`

#### Inherited from

[IBoxInputData](IBoxInputData.md).[motionPath](IBoxInputData.md#motionpath)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:309](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/display/ILeaf.ts#L309)

___

### motionPrecision

• `Optional` **motionPrecision**: `number`

#### Inherited from

[IBoxInputData](IBoxInputData.md).[motionPrecision](IBoxInputData.md#motionprecision)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:310](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/display/ILeaf.ts#L310)

___

### motion

• `Optional` **motion**: `number` \| [`IUnitData`](IUnitData.md)

#### Inherited from

[IBoxInputData](IBoxInputData.md).[motion](IBoxInputData.md#motion)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:312](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/display/ILeaf.ts#L312)

___

### motionRotation

• `Optional` **motionRotation**: `number` \| `boolean`

#### Inherited from

[IBoxInputData](IBoxInputData.md).[motionRotation](IBoxInputData.md#motionrotation)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:313](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/display/ILeaf.ts#L313)

___

### normalStyle

• `Optional` **normalStyle**: [`IObject`](IObject.md)

#### Inherited from

[IBoxInputData](IBoxInputData.md).[normalStyle](IBoxInputData.md#normalstyle)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:315](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/display/ILeaf.ts#L315)

___

### event

• `Optional` **event**: [`IEventParamsMap`](IEventParamsMap.md)

#### Inherited from

[IBoxInputData](IBoxInputData.md).[event](IBoxInputData.md#event)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:317](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/display/ILeaf.ts#L317)

___

### data

• `Optional` **data**: [`IObject`](IObject.md)

#### Inherited from

[IBoxInputData](IBoxInputData.md).[data](IBoxInputData.md#data)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:320](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/display/ILeaf.ts#L320)

___

### tag

• `Optional` **tag**: `string`

#### Inherited from

[IBoxInputData](IBoxInputData.md).[tag](IBoxInputData.md#tag)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:324](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/display/ILeaf.ts#L324)

___

### cornerRadius

• `Optional` **cornerRadius**: `string` \| [`IFourNumber`](../modules.md#ifournumber)

#### Inherited from

[IBoxInputData](IBoxInputData.md).[cornerRadius](IBoxInputData.md#cornerradius)

#### Defined in

[src/ui/packages/interface/src/ICommonAttr.ts:13](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/interface/src/ICommonAttr.ts#L13)

___

### cornerSmoothing

• `Optional` **cornerSmoothing**: `number`

#### Inherited from

[IBoxInputData](IBoxInputData.md).[cornerSmoothing](IBoxInputData.md#cornersmoothing)

#### Defined in

[src/ui/packages/interface/src/ICommonAttr.ts:14](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/interface/src/ICommonAttr.ts#L14)

___

### fill

• `Optional` **fill**: [`IFill`](../modules.md#ifill)

#### Inherited from

[IBoxInputData](IBoxInputData.md).[fill](IBoxInputData.md#fill)

#### Defined in

[src/ui/packages/interface/src/ICommonAttr.ts:26](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/interface/src/ICommonAttr.ts#L26)

___

### stroke

• `Optional` **stroke**: [`IStroke`](../modules.md#istroke)

#### Inherited from

[IBoxInputData](IBoxInputData.md).[stroke](IBoxInputData.md#stroke)

#### Defined in

[src/ui/packages/interface/src/ICommonAttr.ts:47](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/interface/src/ICommonAttr.ts#L47)

___

### startArrow

• `Optional` **startArrow**: [`IArrowStyle`](../modules.md#iarrowstyle)

#### Inherited from

[IBoxInputData](IBoxInputData.md).[startArrow](IBoxInputData.md#startarrow)

#### Defined in

[src/ui/packages/interface/src/ICommonAttr.ts:49](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/interface/src/ICommonAttr.ts#L49)

___

### endArrow

• `Optional` **endArrow**: [`IArrowStyle`](../modules.md#iarrowstyle)

#### Inherited from

[IBoxInputData](IBoxInputData.md).[endArrow](IBoxInputData.md#endarrow)

#### Defined in

[src/ui/packages/interface/src/ICommonAttr.ts:50](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/interface/src/ICommonAttr.ts#L50)

___

### strokeAlign

• `Optional` **strokeAlign**: [`IStrokeAlign`](../modules.md#istrokealign)

#### Inherited from

[IBoxInputData](IBoxInputData.md).[strokeAlign](IBoxInputData.md#strokealign)

#### Defined in

[src/ui/packages/interface/src/ICommonAttr.ts:54](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/interface/src/ICommonAttr.ts#L54)

___

### strokeWidth

• `Optional` **strokeWidth**: `string` \| [`IFourNumber`](../modules.md#ifournumber)

#### Inherited from

[IBoxInputData](IBoxInputData.md).[strokeWidth](IBoxInputData.md#strokewidth)

#### Defined in

[src/ui/packages/interface/src/ICommonAttr.ts:55](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/interface/src/ICommonAttr.ts#L55)

___

### strokeScaleFixed

• `Optional` **strokeScaleFixed**: [`IScaleFixed`](../modules.md#iscalefixed)

#### Inherited from

[IBoxInputData](IBoxInputData.md).[strokeScaleFixed](IBoxInputData.md#strokescalefixed)

#### Defined in

[src/ui/packages/interface/src/ICommonAttr.ts:56](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/interface/src/ICommonAttr.ts#L56)

___

### strokeCap

• `Optional` **strokeCap**: [`IStrokeCap`](../modules.md#istrokecap)

#### Inherited from

[IBoxInputData](IBoxInputData.md).[strokeCap](IBoxInputData.md#strokecap)

#### Defined in

[src/ui/packages/interface/src/ICommonAttr.ts:57](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/interface/src/ICommonAttr.ts#L57)

___

### strokeJoin

• `Optional` **strokeJoin**: [`IStrokeJoin`](../modules.md#istrokejoin)

#### Inherited from

[IBoxInputData](IBoxInputData.md).[strokeJoin](IBoxInputData.md#strokejoin)

#### Defined in

[src/ui/packages/interface/src/ICommonAttr.ts:58](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/interface/src/ICommonAttr.ts#L58)

___

### dashPattern

• `Optional` **dashPattern**: `string` \| `number`[]

#### Inherited from

[IBoxInputData](IBoxInputData.md).[dashPattern](IBoxInputData.md#dashpattern)

#### Defined in

[src/ui/packages/interface/src/ICommonAttr.ts:59](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/interface/src/ICommonAttr.ts#L59)

___

### dashOffset

• `Optional` **dashOffset**: `number`

#### Inherited from

[IBoxInputData](IBoxInputData.md).[dashOffset](IBoxInputData.md#dashoffset)

#### Defined in

[src/ui/packages/interface/src/ICommonAttr.ts:60](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/interface/src/ICommonAttr.ts#L60)

___

### miterLimit

• `Optional` **miterLimit**: `number`

#### Inherited from

[IBoxInputData](IBoxInputData.md).[miterLimit](IBoxInputData.md#miterlimit)

#### Defined in

[src/ui/packages/interface/src/ICommonAttr.ts:61](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/interface/src/ICommonAttr.ts#L61)

___

### fontFamily

• `Optional` **fontFamily**: `string`

#### Inherited from

[IBoxInputData](IBoxInputData.md).[fontFamily](IBoxInputData.md#fontfamily)

#### Defined in

[src/ui/packages/interface/src/ICommonAttr.ts:106](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/interface/src/ICommonAttr.ts#L106)

___

### fontSize

• `Optional` **fontSize**: `number`

#### Inherited from

[IBoxInputData](IBoxInputData.md).[fontSize](IBoxInputData.md#fontsize)

#### Defined in

[src/ui/packages/interface/src/ICommonAttr.ts:107](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/interface/src/ICommonAttr.ts#L107)

___

### fontWeight

• `Optional` **fontWeight**: [`IFontWeight`](../modules.md#ifontweight)

#### Inherited from

[IBoxInputData](IBoxInputData.md).[fontWeight](IBoxInputData.md#fontweight)

#### Defined in

[src/ui/packages/interface/src/ICommonAttr.ts:108](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/interface/src/ICommonAttr.ts#L108)

___

### italic

• `Optional` **italic**: `boolean`

#### Inherited from

[IBoxInputData](IBoxInputData.md).[italic](IBoxInputData.md#italic)

#### Defined in

[src/ui/packages/interface/src/ICommonAttr.ts:109](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/interface/src/ICommonAttr.ts#L109)

___

### textCase

• `Optional` **textCase**: [`ITextCase`](../modules.md#itextcase)

#### Inherited from

[IBoxInputData](IBoxInputData.md).[textCase](IBoxInputData.md#textcase)

#### Defined in

[src/ui/packages/interface/src/ICommonAttr.ts:110](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/interface/src/ICommonAttr.ts#L110)

___

### textDecoration

• `Optional` **textDecoration**: [`ITextDecoration`](../modules.md#itextdecoration)

#### Inherited from

[IBoxInputData](IBoxInputData.md).[textDecoration](IBoxInputData.md#textdecoration)

#### Defined in

[src/ui/packages/interface/src/ICommonAttr.ts:111](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/interface/src/ICommonAttr.ts#L111)

___

### letterSpacing

• `Optional` **letterSpacing**: `number` \| [`IUnitData`](IUnitData.md)

#### Inherited from

[IBoxInputData](IBoxInputData.md).[letterSpacing](IBoxInputData.md#letterspacing)

#### Defined in

[src/ui/packages/interface/src/ICommonAttr.ts:112](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/interface/src/ICommonAttr.ts#L112)

___

### lineHeight

• `Optional` **lineHeight**: `number` \| [`IUnitData`](IUnitData.md)

#### Inherited from

[IBoxInputData](IBoxInputData.md).[lineHeight](IBoxInputData.md#lineheight)

#### Defined in

[src/ui/packages/interface/src/ICommonAttr.ts:113](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/interface/src/ICommonAttr.ts#L113)

___

### paraIndent

• `Optional` **paraIndent**: `number`

#### Inherited from

[IBoxInputData](IBoxInputData.md).[paraIndent](IBoxInputData.md#paraindent)

#### Defined in

[src/ui/packages/interface/src/ICommonAttr.ts:115](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/interface/src/ICommonAttr.ts#L115)

___

### paraSpacing

• `Optional` **paraSpacing**: `number`

#### Inherited from

[IBoxInputData](IBoxInputData.md).[paraSpacing](IBoxInputData.md#paraspacing)

#### Defined in

[src/ui/packages/interface/src/ICommonAttr.ts:116](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/interface/src/ICommonAttr.ts#L116)

___

### writingMode

• `Optional` **writingMode**: [`IWritingMode`](../modules.md#iwritingmode)

#### Inherited from

[IBoxInputData](IBoxInputData.md).[writingMode](IBoxInputData.md#writingmode)

#### Defined in

[src/ui/packages/interface/src/ICommonAttr.ts:118](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/interface/src/ICommonAttr.ts#L118)

___

### textAlign

• `Optional` **textAlign**: [`ITextAlign`](../modules.md#itextalign)

#### Inherited from

[IBoxInputData](IBoxInputData.md).[textAlign](IBoxInputData.md#textalign)

#### Defined in

[src/ui/packages/interface/src/ICommonAttr.ts:119](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/interface/src/ICommonAttr.ts#L119)

___

### verticalAlign

• `Optional` **verticalAlign**: [`IVerticalAlign`](../modules.md#iverticalalign)

#### Inherited from

[IBoxInputData](IBoxInputData.md).[verticalAlign](IBoxInputData.md#verticalalign)

#### Defined in

[src/ui/packages/interface/src/ICommonAttr.ts:120](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/interface/src/ICommonAttr.ts#L120)

___

### autoSizeAlign

• `Optional` **autoSizeAlign**: `boolean`

#### Inherited from

[IBoxInputData](IBoxInputData.md).[autoSizeAlign](IBoxInputData.md#autosizealign)

#### Defined in

[src/ui/packages/interface/src/ICommonAttr.ts:121](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/interface/src/ICommonAttr.ts#L121)

___

### textWrap

• `Optional` **textWrap**: [`ITextWrap`](../modules.md#itextwrap)

#### Inherited from

[IBoxInputData](IBoxInputData.md).[textWrap](IBoxInputData.md#textwrap)

#### Defined in

[src/ui/packages/interface/src/ICommonAttr.ts:123](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/interface/src/ICommonAttr.ts#L123)

___

### textOverflow

• `Optional` **textOverflow**: [`ITextOverflow`](../modules.md#itextoverflow)

#### Inherited from

[IBoxInputData](IBoxInputData.md).[textOverflow](IBoxInputData.md#textoverflow)

#### Defined in

[src/ui/packages/interface/src/ICommonAttr.ts:124](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/interface/src/ICommonAttr.ts#L124)

___

### shadow

• `Optional` **shadow**: `string` \| [`IShadowEffect`](IShadowEffect.md) \| [`IShadowEffect`](IShadowEffect.md)[]

#### Inherited from

[IBoxInputData](IBoxInputData.md).[shadow](IBoxInputData.md#shadow)

#### Defined in

[src/ui/packages/interface/src/ICommonAttr.ts:157](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/interface/src/ICommonAttr.ts#L157)

___

### innerShadow

• `Optional` **innerShadow**: `string` \| [`IShadowEffect`](IShadowEffect.md) \| [`IShadowEffect`](IShadowEffect.md)[]

#### Inherited from

[IBoxInputData](IBoxInputData.md).[innerShadow](IBoxInputData.md#innershadow)

#### Defined in

[src/ui/packages/interface/src/ICommonAttr.ts:158](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/interface/src/ICommonAttr.ts#L158)

___

### blur

• `Optional` **blur**: `number` \| [`IBlurEffect`](IBlurEffect.md)

#### Inherited from

[IBoxInputData](IBoxInputData.md).[blur](IBoxInputData.md#blur)

#### Defined in

[src/ui/packages/interface/src/ICommonAttr.ts:159](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/interface/src/ICommonAttr.ts#L159)

___

### backgroundBlur

• `Optional` **backgroundBlur**: `number` \| [`IBlurEffect`](IBlurEffect.md)

#### Inherited from

[IBoxInputData](IBoxInputData.md).[backgroundBlur](IBoxInputData.md#backgroundblur)

#### Defined in

[src/ui/packages/interface/src/ICommonAttr.ts:160](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/interface/src/ICommonAttr.ts#L160)

___

### grayscale

• `Optional` **grayscale**: `number` \| [`IGrayscaleEffect`](IGrayscaleEffect.md)

#### Inherited from

[IBoxInputData](IBoxInputData.md).[grayscale](IBoxInputData.md#grayscale)

#### Defined in

[src/ui/packages/interface/src/ICommonAttr.ts:161](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/interface/src/ICommonAttr.ts#L161)

___

### sides

• `Optional` **sides**: `number`

#### Inherited from

IPolygonAttrData.sides

#### Defined in

[src/ui/packages/interface/src/IUI.ts:131](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/interface/src/IUI.ts#L131)

___

### points

• `Optional` **points**: `number`[] \| [`IPointData`](IPointData.md)[]

#### Inherited from

IPolygonAttrData.points

#### Defined in

[src/ui/packages/interface/src/IUI.ts:132](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/interface/src/IUI.ts#L132)

___

### curve

• `Optional` **curve**: `number` \| `boolean`

#### Inherited from

IPolygonAttrData.curve

#### Defined in

[src/ui/packages/interface/src/IUI.ts:133](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/interface/src/IUI.ts#L133)

___

### overflow

• `Optional` **overflow**: [`IOverflow`](../modules.md#ioverflow)

#### Inherited from

[IBoxInputData](IBoxInputData.md).[overflow](IBoxInputData.md#overflow)

#### Defined in

[src/ui/packages/interface/src/IUI.ts:410](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/interface/src/IUI.ts#L410)

___

### scrollConfig

• `Optional` **scrollConfig**: [`IScrollConfig`](IScrollConfig.md)

#### Inherited from

[IBoxInputData](IBoxInputData.md).[scrollConfig](IBoxInputData.md#scrollconfig)

#### Defined in

[src/ui/packages/interface/src/IUI.ts:411](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/interface/src/IUI.ts#L411)

___

### resizeChildren

• `Optional` **resizeChildren**: `boolean`

#### Inherited from

[IBoxInputData](IBoxInputData.md).[resizeChildren](IBoxInputData.md#resizechildren)

#### Defined in

[src/ui/packages/interface/src/IUI.ts:412](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/interface/src/IUI.ts#L412)

___

### textBox

• `Optional` **textBox**: `boolean`

#### Inherited from

[IBoxInputData](IBoxInputData.md).[textBox](IBoxInputData.md#textbox)

#### Defined in

[src/ui/packages/interface/src/IUI.ts:413](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/interface/src/IUI.ts#L413)

___

### animation

• `Optional` **animation**: [`IAnimation`](../modules.md#ianimation) \| [`IAnimation`](../modules.md#ianimation)[]

#### Inherited from

[IBoxInputData](IBoxInputData.md).[animation](IBoxInputData.md#animation)

#### Defined in

[src/ui/packages/interface/src/IUI.ts:563](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/interface/src/IUI.ts#L563)

___

### animationOut

• `Optional` **animationOut**: [`IAnimation`](../modules.md#ianimation) \| [`IAnimation`](../modules.md#ianimation)[]

#### Inherited from

[IBoxInputData](IBoxInputData.md).[animationOut](IBoxInputData.md#animationout)

#### Defined in

[src/ui/packages/interface/src/IUI.ts:564](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/interface/src/IUI.ts#L564)

___

### transition

• `Optional` **transition**: [`ITransition`](../modules.md#itransition)

#### Inherited from

[IBoxInputData](IBoxInputData.md).[transition](IBoxInputData.md#transition)

#### Defined in

[src/ui/packages/interface/src/IUI.ts:566](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/interface/src/IUI.ts#L566)

___

### transitionOut

• `Optional` **transitionOut**: [`ITransition`](../modules.md#itransition)

#### Inherited from

[IBoxInputData](IBoxInputData.md).[transitionOut](IBoxInputData.md#transitionout)

#### Defined in

[src/ui/packages/interface/src/IUI.ts:567](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/interface/src/IUI.ts#L567)

___

### states

• `Optional` **states**: [`IStates`](IStates.md)

#### Inherited from

[IBoxInputData](IBoxInputData.md).[states](IBoxInputData.md#states)

#### Defined in

[src/ui/packages/interface/src/IUI.ts:569](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/interface/src/IUI.ts#L569)

___

### state

• `Optional` **state**: `string`

#### Inherited from

[IBoxInputData](IBoxInputData.md).[state](IBoxInputData.md#state)

#### Defined in

[src/ui/packages/interface/src/IUI.ts:570](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/interface/src/IUI.ts#L570)

___

### hoverStyle

• `Optional` **hoverStyle**: [`IStateStyle`](IStateStyle.md)

#### Inherited from

[IBoxInputData](IBoxInputData.md).[hoverStyle](IBoxInputData.md#hoverstyle)

#### Defined in

[src/ui/packages/interface/src/IUI.ts:572](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/interface/src/IUI.ts#L572)

___

### pressStyle

• `Optional` **pressStyle**: [`IStateStyle`](IStateStyle.md)

#### Inherited from

[IBoxInputData](IBoxInputData.md).[pressStyle](IBoxInputData.md#pressstyle)

#### Defined in

[src/ui/packages/interface/src/IUI.ts:573](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/interface/src/IUI.ts#L573)

___

### focusStyle

• `Optional` **focusStyle**: [`IStateStyle`](IStateStyle.md)

#### Inherited from

[IBoxInputData](IBoxInputData.md).[focusStyle](IBoxInputData.md#focusstyle)

#### Defined in

[src/ui/packages/interface/src/IUI.ts:574](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/interface/src/IUI.ts#L574)

___

### selectedStyle

• `Optional` **selectedStyle**: [`IStateStyle`](IStateStyle.md)

#### Inherited from

[IBoxInputData](IBoxInputData.md).[selectedStyle](IBoxInputData.md#selectedstyle)

#### Defined in

[src/ui/packages/interface/src/IUI.ts:575](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/interface/src/IUI.ts#L575)

___

### disabledStyle

• `Optional` **disabledStyle**: [`IStateStyle`](IStateStyle.md)

#### Inherited from

[IBoxInputData](IBoxInputData.md).[disabledStyle](IBoxInputData.md#disabledstyle)

#### Defined in

[src/ui/packages/interface/src/IUI.ts:576](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/interface/src/IUI.ts#L576)

___

### placeholderStyle

• `Optional` **placeholderStyle**: [`IStateStyle`](IStateStyle.md)

#### Inherited from

[IBoxInputData](IBoxInputData.md).[placeholderStyle](IBoxInputData.md#placeholderstyle)

#### Defined in

[src/ui/packages/interface/src/IUI.ts:577](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/interface/src/IUI.ts#L577)

___

### placeholderColor

• `Optional` **placeholderColor**: `string`

#### Inherited from

[IBoxInputData](IBoxInputData.md).[placeholderColor](IBoxInputData.md#placeholdercolor)

#### Defined in

[src/ui/packages/interface/src/IUI.ts:578](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/interface/src/IUI.ts#L578)

___

### placeholderDelay

• `Optional` **placeholderDelay**: `number`

#### Inherited from

[IBoxInputData](IBoxInputData.md).[placeholderDelay](IBoxInputData.md#placeholderdelay)

#### Defined in

[src/ui/packages/interface/src/IUI.ts:579](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/interface/src/IUI.ts#L579)

___

### editConfig

• `Optional` **editConfig**: [`IEditorConfig`](IEditorConfig.md)

#### Inherited from

[IBoxInputData](IBoxInputData.md).[editConfig](IBoxInputData.md#editconfig)

#### Defined in

[src/ui/packages/interface/src/IUI.ts:581](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/interface/src/IUI.ts#L581)

___

### editOuter

• `Optional` **editOuter**: `string`

#### Inherited from

[IBoxInputData](IBoxInputData.md).[editOuter](IBoxInputData.md#editouter)

#### Defined in

[src/ui/packages/interface/src/IUI.ts:582](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/interface/src/IUI.ts#L582)

___

### editInner

• `Optional` **editInner**: `string`

#### Inherited from

[IBoxInputData](IBoxInputData.md).[editInner](IBoxInputData.md#editinner)

#### Defined in

[src/ui/packages/interface/src/IUI.ts:583](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/interface/src/IUI.ts#L583)

___

### children

• `Optional` **children**: [`IUIInputData`](IUIInputData.md)[]

#### Inherited from

[IBoxInputData](IBoxInputData.md).[children](IBoxInputData.md#children)

#### Defined in

[src/ui/packages/interface/src/IUI.ts:639](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/interface/src/IUI.ts#L639)
