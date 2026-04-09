# Interface: IBranch

## Hierarchy

- [`ILeaf`](ILeaf.md)

  ↳ **`IBranch`**

  ↳↳ [`IZoomView`](IZoomView.md)

## Table of contents

### Properties

- [children](IBranch.md#children)
- [id](IBranch.md#id)
- [name](IBranch.md#name)
- [className](IBranch.md#classname)
- [blendMode](IBranch.md#blendmode)
- [opacity](IBranch.md#opacity)
- [visible](IBranch.md#visible)
- [selected](IBranch.md#selected)
- [disabled](IBranch.md#disabled)
- [locked](IBranch.md#locked)
- [zIndex](IBranch.md#zindex)
- [dim](IBranch.md#dim)
- [dimskip](IBranch.md#dimskip)
- [bright](IBranch.md#bright)
- [mask](IBranch.md#mask)
- [eraser](IBranch.md#eraser)
- [filter](IBranch.md#filter)
- [complex](IBranch.md#complex)
- [x](IBranch.md#x)
- [y](IBranch.md#y)
- [width](IBranch.md#width)
- [height](IBranch.md#height)
- [scaleX](IBranch.md#scalex)
- [scaleY](IBranch.md#scaley)
- [scaleFixed](IBranch.md#scalefixed)
- [rotation](IBranch.md#rotation)
- [skewX](IBranch.md#skewx)
- [skewY](IBranch.md#skewy)
- [scale](IBranch.md#scale)
- [offsetX](IBranch.md#offsetx)
- [offsetY](IBranch.md#offsety)
- [scrollX](IBranch.md#scrollx)
- [scrollY](IBranch.md#scrolly)
- [origin](IBranch.md#origin)
- [around](IBranch.md#around)
- [lazy](IBranch.md#lazy)
- [pixelRatio](IBranch.md#pixelratio)
- [renderSpread](IBranch.md#renderspread)
- [path](IBranch.md#path)
- [windingRule](IBranch.md#windingrule)
- [closed](IBranch.md#closed)
- [flow](IBranch.md#flow)
- [padding](IBranch.md#padding)
- [gap](IBranch.md#gap)
- [flowAlign](IBranch.md#flowalign)
- [flowWrap](IBranch.md#flowwrap)
- [itemBox](IBranch.md#itembox)
- [inFlow](IBranch.md#inflow)
- [autoWidth](IBranch.md#autowidth)
- [autoHeight](IBranch.md#autoheight)
- [lockRatio](IBranch.md#lockratio)
- [autoBox](IBranch.md#autobox)
- [widthRange](IBranch.md#widthrange)
- [heightRange](IBranch.md#heightrange)
- [draggable](IBranch.md#draggable)
- [dragBounds](IBranch.md#dragbounds)
- [dragBoundsType](IBranch.md#dragboundstype)
- [editable](IBranch.md#editable)
- [hittable](IBranch.md#hittable)
- [hitFill](IBranch.md#hitfill)
- [hitStroke](IBranch.md#hitstroke)
- [hitBox](IBranch.md#hitbox)
- [hitChildren](IBranch.md#hitchildren)
- [hitSelf](IBranch.md#hitself)
- [hitRadius](IBranch.md#hitradius)
- [button](IBranch.md#button)
- [cursor](IBranch.md#cursor)
- [motionPath](IBranch.md#motionpath)
- [motionPrecision](IBranch.md#motionprecision)
- [motion](IBranch.md#motion)
- [motionRotation](IBranch.md#motionrotation)
- [normalStyle](IBranch.md#normalstyle)
- [event](IBranch.md#event)
- [data](IBranch.md#data)
- [tag](IBranch.md#tag)
- [\_\_tag](IBranch.md#__tag)
- [innerName](IBranch.md#innername)
- [\_\_DataProcessor](IBranch.md#__dataprocessor)
- [\_\_LayoutProcessor](IBranch.md#__layoutprocessor)
- [app](IBranch.md#app)
- [leafer](IBranch.md#leafer)
- [parent](IBranch.md#parent)
- [zoomLayer](IBranch.md#zoomlayer)
- [leaferIsCreated](IBranch.md#leaferiscreated)
- [leaferIsReady](IBranch.md#leaferisready)
- [isApp](IBranch.md#isapp)
- [isLeafer](IBranch.md#isleafer)
- [isBranch](IBranch.md#isbranch)
- [isBranchLeaf](IBranch.md#isbranchleaf)
- [isOutside](IBranch.md#isoutside)
- [\_\_](IBranch.md#__)
- [proxyData](IBranch.md#proxydata)
- [\_\_proxyData](IBranch.md#__proxydata)
- [skipJSON](IBranch.md#skipjson)
- [syncEventer](IBranch.md#synceventer)
- [lockNormalStyle](IBranch.md#locknormalstyle)
- [\_\_layout](IBranch.md#__layout)
- [\_\_world](IBranch.md#__world)
- [\_\_local](IBranch.md#__local)
- [\_\_nowWorld](IBranch.md#__nowworld)
- [\_\_cameraWorld](IBranch.md#__cameraworld)
- [\_\_nowWorldShapeBounds](IBranch.md#__nowworldshapebounds)
- [\_\_localMatrix](IBranch.md#__localmatrix)
- [\_\_localBoxBounds](IBranch.md#__localboxbounds)
- [\_\_worldOpacity](IBranch.md#__worldopacity)
- [worldTransform](IBranch.md#worldtransform)
- [localTransform](IBranch.md#localtransform)
- [\_\_scrollWorld](IBranch.md#__scrollworld)
- [scrollWorldTransform](IBranch.md#scrollworldtransform)
- [boxBounds](IBranch.md#boxbounds)
- [renderBounds](IBranch.md#renderbounds)
- [worldBoxBounds](IBranch.md#worldboxbounds)
- [worldStrokeBounds](IBranch.md#worldstrokebounds)
- [worldRenderBounds](IBranch.md#worldrenderbounds)
- [worldOpacity](IBranch.md#worldopacity)
- [\_\_level](IBranch.md#__level)
- [\_\_tempNumber](IBranch.md#__tempnumber)
- [\_\_worldFlipped](IBranch.md#__worldflipped)
- [animation](IBranch.md#animation)
- [animationOut](IBranch.md#animationout)
- [\_\_hasAutoLayout](IBranch.md#__hasautolayout)
- [\_\_hasMotionPath](IBranch.md#__hasmotionpath)
- [\_\_hasComplex](IBranch.md#__hascomplex)
- [\_\_hasMask](IBranch.md#__hasmask)
- [\_\_hasEraser](IBranch.md#__haseraser)
- [\_\_hitCanvas](IBranch.md#__hitcanvas)
- [\_\_flowBounds](IBranch.md#__flowbounds)
- [\_\_widthGrow](IBranch.md#__widthgrow)
- [\_\_heightGrow](IBranch.md#__heightgrow)
- [\_\_hasGrow](IBranch.md#__hasgrow)
- [\_\_onlyHitMask](IBranch.md#__onlyhitmask)
- [\_\_ignoreHitWorld](IBranch.md#__ignorehitworld)
- [\_\_inLazyBounds](IBranch.md#__inlazybounds)
- [pathInputed](IBranch.md#pathinputed)
- [isAutoWidth](IBranch.md#isautowidth)
- [isAutoHeight](IBranch.md#isautoheight)
- [destroyed](IBranch.md#destroyed)
- [topChildren](IBranch.md#topchildren)
- [innerId](IBranch.md#innerid)
- [\_\_captureMap](IBranch.md#__capturemap)
- [\_\_bubbleMap](IBranch.md#__bubblemap)
- [\_\_hasLocalEvent](IBranch.md#__haslocalevent)
- [\_\_hasWorldEvent](IBranch.md#__hasworldevent)

### Methods

- [\_\_renderBranch](IBranch.md#__renderbranch)
- [addMany](IBranch.md#addmany)
- [removeAll](IBranch.md#removeall)
- [clear](IBranch.md#clear)
- [reset](IBranch.md#reset)
- [resetCustom](IBranch.md#resetcustom)
- [waitParent](IBranch.md#waitparent)
- [waitLeafer](IBranch.md#waitleafer)
- [nextRender](IBranch.md#nextrender)
- [removeNextRender](IBranch.md#removenextrender)
- [\_\_bindLeafer](IBranch.md#__bindleafer)
- [set](IBranch.md#set)
- [get](IBranch.md#get)
- [setAttr](IBranch.md#setattr)
- [getAttr](IBranch.md#getattr)
- [getComputedAttr](IBranch.md#getcomputedattr)
- [toJSON](IBranch.md#tojson)
- [toString](IBranch.md#tostring)
- [toSVG](IBranch.md#tosvg)
- [\_\_SVG](IBranch.md#__svg)
- [toHTML](IBranch.md#tohtml)
- [clone](IBranch.md#clone)
- [animate](IBranch.md#animate)
- [\_\_setAttr](IBranch.md#__setattr)
- [\_\_getAttr](IBranch.md#__getattr)
- [setProxyAttr](IBranch.md#setproxyattr)
- [getProxyAttr](IBranch.md#getproxyattr)
- [find](IBranch.md#find)
- [findTag](IBranch.md#findtag)
- [findOne](IBranch.md#findone)
- [findId](IBranch.md#findid)
- [focus](IBranch.md#focus)
- [updateState](IBranch.md#updatestate)
- [updateLayout](IBranch.md#updatelayout)
- [forceUpdate](IBranch.md#forceupdate)
- [forceRender](IBranch.md#forcerender)
- [\_\_extraUpdate](IBranch.md#__extraupdate)
- [\_\_updateWorldMatrix](IBranch.md#__updateworldmatrix)
- [\_\_updateLocalMatrix](IBranch.md#__updatelocalmatrix)
- [\_\_updateWorldBounds](IBranch.md#__updateworldbounds)
- [\_\_updateLocalBounds](IBranch.md#__updatelocalbounds)
- [\_\_updateLocalBoxBounds](IBranch.md#__updatelocalboxbounds)
- [\_\_updateLocalStrokeBounds](IBranch.md#__updatelocalstrokebounds)
- [\_\_updateLocalRenderBounds](IBranch.md#__updatelocalrenderbounds)
- [\_\_updateContentBounds](IBranch.md#__updatecontentbounds)
- [\_\_updateBoxBounds](IBranch.md#__updateboxbounds)
- [\_\_updateStrokeBounds](IBranch.md#__updatestrokebounds)
- [\_\_updateRenderBounds](IBranch.md#__updaterenderbounds)
- [\_\_updateAutoLayout](IBranch.md#__updateautolayout)
- [\_\_updateFlowLayout](IBranch.md#__updateflowlayout)
- [\_\_updateNaturalSize](IBranch.md#__updatenaturalsize)
- [\_\_updateStrokeSpread](IBranch.md#__updatestrokespread)
- [\_\_updateRenderSpread](IBranch.md#__updaterenderspread)
- [\_\_onUpdateSize](IBranch.md#__onupdatesize)
- [\_\_updateEraser](IBranch.md#__updateeraser)
- [\_\_updateMask](IBranch.md#__updatemask)
- [\_\_renderMask](IBranch.md#__rendermask)
- [\_\_renderEraser](IBranch.md#__rendereraser)
- [\_\_getNowWorld](IBranch.md#__getnowworld)
- [getClampRenderScale](IBranch.md#getclamprenderscale)
- [getRenderScaleData](IBranch.md#getrenderscaledata)
- [getTransform](IBranch.md#gettransform)
- [getBounds](IBranch.md#getbounds)
- [getLayoutBounds](IBranch.md#getlayoutbounds)
- [getLayoutPoints](IBranch.md#getlayoutpoints)
- [getWorldBounds](IBranch.md#getworldbounds)
- [worldToLocal](IBranch.md#worldtolocal)
- [localToWorld](IBranch.md#localtoworld)
- [worldToInner](IBranch.md#worldtoinner)
- [innerToWorld](IBranch.md#innertoworld)
- [getBoxPoint](IBranch.md#getboxpoint)
- [getBoxPointByInner](IBranch.md#getboxpointbyinner)
- [getInnerPoint](IBranch.md#getinnerpoint)
- [getInnerPointByBox](IBranch.md#getinnerpointbybox)
- [getInnerPointByLocal](IBranch.md#getinnerpointbylocal)
- [getLocalPoint](IBranch.md#getlocalpoint)
- [getLocalPointByInner](IBranch.md#getlocalpointbyinner)
- [getPagePoint](IBranch.md#getpagepoint)
- [getWorldPoint](IBranch.md#getworldpoint)
- [getWorldPointByBox](IBranch.md#getworldpointbybox)
- [getWorldPointByLocal](IBranch.md#getworldpointbylocal)
- [getWorldPointByPage](IBranch.md#getworldpointbypage)
- [setTransform](IBranch.md#settransform)
- [transform](IBranch.md#transform)
- [move](IBranch.md#move)
- [moveInner](IBranch.md#moveinner)
- [scaleOf](IBranch.md#scaleof)
- [rotateOf](IBranch.md#rotateof)
- [skewOf](IBranch.md#skewof)
- [transformWorld](IBranch.md#transformworld)
- [moveWorld](IBranch.md#moveworld)
- [scaleOfWorld](IBranch.md#scaleofworld)
- [rotateOfWorld](IBranch.md#rotateofworld)
- [skewOfWorld](IBranch.md#skewofworld)
- [flip](IBranch.md#flip)
- [scaleResize](IBranch.md#scaleresize)
- [\_\_scaleResize](IBranch.md#__scaleresize)
- [resizeWidth](IBranch.md#resizewidth)
- [resizeHeight](IBranch.md#resizeheight)
- [hit](IBranch.md#hit)
- [\_\_hitWorld](IBranch.md#__hitworld)
- [\_\_hit](IBranch.md#__hit)
- [\_\_hitFill](IBranch.md#__hitfill)
- [\_\_hitStroke](IBranch.md#__hitstroke)
- [\_\_hitPixel](IBranch.md#__hitpixel)
- [\_\_drawHitPath](IBranch.md#__drawhitpath)
- [\_\_updateHitCanvas](IBranch.md#__updatehitcanvas)
- [\_\_render](IBranch.md#__render)
- [\_\_drawFast](IBranch.md#__drawfast)
- [\_\_draw](IBranch.md#__draw)
- [\_\_clip](IBranch.md#__clip)
- [\_\_renderShape](IBranch.md#__rendershape)
- [\_\_drawShape](IBranch.md#__drawshape)
- [\_\_updateWorldOpacity](IBranch.md#__updateworldopacity)
- [\_\_updateChange](IBranch.md#__updatechange)
- [\_\_drawPath](IBranch.md#__drawpath)
- [\_\_drawRenderPath](IBranch.md#__drawrenderpath)
- [\_\_updatePath](IBranch.md#__updatepath)
- [\_\_updateRenderPath](IBranch.md#__updaterenderpath)
- [getMotionPathData](IBranch.md#getmotionpathdata)
- [getMotionPoint](IBranch.md#getmotionpoint)
- [getMotionTotal](IBranch.md#getmotiontotal)
- [\_\_updateMotionPath](IBranch.md#__updatemotionpath)
- [\_\_runAnimation](IBranch.md#__runanimation)
- [\_\_emitLifeEvent](IBranch.md#__emitlifeevent)
- [\_\_updateSortChildren](IBranch.md#__updatesortchildren)
- [add](IBranch.md#add)
- [remove](IBranch.md#remove)
- [dropTo](IBranch.md#dropto)
- [\_\_realSetAttr](IBranch.md#__realsetattr)
- [emitPropertyEvent](IBranch.md#emitpropertyevent)
- [destroyEventer](IBranch.md#destroyeventer)
- [on](IBranch.md#on)
- [off](IBranch.md#off)
- [on\_](IBranch.md#on_)
- [off\_](IBranch.md#off_)
- [once](IBranch.md#once)
- [emit](IBranch.md#emit)
- [emitEvent](IBranch.md#emitevent)
- [hasEvent](IBranch.md#hasevent)
- [destroy](IBranch.md#destroy)

## Properties

### children

• **children**: [`ILeaf`](ILeaf.md)[]

#### Overrides

[ILeaf](ILeaf.md).[children](ILeaf.md#children)

#### Defined in

[src/leafer/packages/interface/src/display/IBranch.ts:6](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/display/IBranch.ts#L6)

___

### id

• `Optional` **id**: `string`

#### Inherited from

[ILeaf](ILeaf.md).[id](ILeaf.md#id)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:221](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/display/ILeaf.ts#L221)

___

### name

• `Optional` **name**: `string`

#### Inherited from

[ILeaf](ILeaf.md).[name](ILeaf.md#name)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:222](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/display/ILeaf.ts#L222)

___

### className

• `Optional` **className**: `string`

#### Inherited from

[ILeaf](ILeaf.md).[className](ILeaf.md#classname)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:223](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/display/ILeaf.ts#L223)

___

### blendMode

• `Optional` **blendMode**: [`IBlendMode`](../modules.md#iblendmode)

#### Inherited from

[ILeaf](ILeaf.md).[blendMode](ILeaf.md#blendmode)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:225](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/display/ILeaf.ts#L225)

___

### opacity

• `Optional` **opacity**: `number`

#### Inherited from

[ILeaf](ILeaf.md).[opacity](ILeaf.md#opacity)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:227](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/display/ILeaf.ts#L227)

___

### visible

• `Optional` **visible**: `boolean` \| `0`

#### Inherited from

[ILeaf](ILeaf.md).[visible](ILeaf.md#visible)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:228](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/display/ILeaf.ts#L228)

___

### selected

• `Optional` **selected**: `boolean`

#### Inherited from

[ILeaf](ILeaf.md).[selected](ILeaf.md#selected)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:229](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/display/ILeaf.ts#L229)

___

### disabled

• `Optional` **disabled**: `boolean`

#### Inherited from

[ILeaf](ILeaf.md).[disabled](ILeaf.md#disabled)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:230](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/display/ILeaf.ts#L230)

___

### locked

• `Optional` **locked**: `boolean`

#### Inherited from

[ILeaf](ILeaf.md).[locked](ILeaf.md#locked)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:231](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/display/ILeaf.ts#L231)

___

### zIndex

• `Optional` **zIndex**: `number`

#### Inherited from

[ILeaf](ILeaf.md).[zIndex](ILeaf.md#zindex)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:232](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/display/ILeaf.ts#L232)

___

### dim

• `Optional` **dim**: `number` \| `boolean`

#### Inherited from

[ILeaf](ILeaf.md).[dim](ILeaf.md#dim)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:234](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/display/ILeaf.ts#L234)

___

### dimskip

• `Optional` **dimskip**: `boolean`

#### Inherited from

[ILeaf](ILeaf.md).[dimskip](ILeaf.md#dimskip)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:235](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/display/ILeaf.ts#L235)

___

### bright

• `Optional` **bright**: `boolean`

#### Inherited from

[ILeaf](ILeaf.md).[bright](ILeaf.md#bright)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:236](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/display/ILeaf.ts#L236)

___

### mask

• `Optional` **mask**: `boolean` \| [`IMaskType`](../modules.md#imasktype)

#### Inherited from

[ILeaf](ILeaf.md).[mask](ILeaf.md#mask)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:238](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/display/ILeaf.ts#L238)

___

### eraser

• `Optional` **eraser**: `boolean` \| [`IEraserType`](../modules.md#ierasertype)

#### Inherited from

[ILeaf](ILeaf.md).[eraser](ILeaf.md#eraser)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:239](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/display/ILeaf.ts#L239)

___

### filter

• `Optional` **filter**: [`IFilter`](IFilter.md) \| [`IFilter`](IFilter.md)[]

#### Inherited from

[ILeaf](ILeaf.md).[filter](ILeaf.md#filter)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:240](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/display/ILeaf.ts#L240)

___

### complex

• `Optional` **complex**: `boolean`

#### Inherited from

[ILeaf](ILeaf.md).[complex](ILeaf.md#complex)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:241](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/display/ILeaf.ts#L241)

___

### x

• `Optional` **x**: `number`

#### Inherited from

[ILeaf](ILeaf.md).[x](ILeaf.md#x)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:244](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/display/ILeaf.ts#L244)

___

### y

• `Optional` **y**: `number`

#### Inherited from

[ILeaf](ILeaf.md).[y](ILeaf.md#y)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:245](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/display/ILeaf.ts#L245)

___

### width

• `Optional` **width**: `number`

#### Inherited from

[ILeaf](ILeaf.md).[width](ILeaf.md#width)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:246](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/display/ILeaf.ts#L246)

___

### height

• `Optional` **height**: `number`

#### Inherited from

[ILeaf](ILeaf.md).[height](ILeaf.md#height)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:247](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/display/ILeaf.ts#L247)

___

### scaleX

• `Optional` **scaleX**: `number`

#### Inherited from

[ILeaf](ILeaf.md).[scaleX](ILeaf.md#scalex)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:248](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/display/ILeaf.ts#L248)

___

### scaleY

• `Optional` **scaleY**: `number`

#### Inherited from

[ILeaf](ILeaf.md).[scaleY](ILeaf.md#scaley)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:249](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/display/ILeaf.ts#L249)

___

### scaleFixed

• `Optional` **scaleFixed**: [`IScaleFixed`](../modules.md#iscalefixed)

#### Inherited from

[ILeaf](ILeaf.md).[scaleFixed](ILeaf.md#scalefixed)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:250](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/display/ILeaf.ts#L250)

___

### rotation

• `Optional` **rotation**: `number`

#### Inherited from

[ILeaf](ILeaf.md).[rotation](ILeaf.md#rotation)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:251](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/display/ILeaf.ts#L251)

___

### skewX

• `Optional` **skewX**: `number`

#### Inherited from

[ILeaf](ILeaf.md).[skewX](ILeaf.md#skewx)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:252](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/display/ILeaf.ts#L252)

___

### skewY

• `Optional` **skewY**: `number`

#### Inherited from

[ILeaf](ILeaf.md).[skewY](ILeaf.md#skewy)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:253](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/display/ILeaf.ts#L253)

___

### scale

• `Optional` **scale**: `number` \| [`IPointData`](IPointData.md)

#### Inherited from

[ILeaf](ILeaf.md).[scale](ILeaf.md#scale)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:255](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/display/ILeaf.ts#L255)

___

### offsetX

• `Optional` **offsetX**: `number`

#### Inherited from

[ILeaf](ILeaf.md).[offsetX](ILeaf.md#offsetx)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:257](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/display/ILeaf.ts#L257)

___

### offsetY

• `Optional` **offsetY**: `number`

#### Inherited from

[ILeaf](ILeaf.md).[offsetY](ILeaf.md#offsety)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:258](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/display/ILeaf.ts#L258)

___

### scrollX

• `Optional` **scrollX**: `number`

#### Inherited from

[ILeaf](ILeaf.md).[scrollX](ILeaf.md#scrollx)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:259](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/display/ILeaf.ts#L259)

___

### scrollY

• `Optional` **scrollY**: `number`

#### Inherited from

[ILeaf](ILeaf.md).[scrollY](ILeaf.md#scrolly)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:260](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/display/ILeaf.ts#L260)

___

### origin

• `Optional` **origin**: [`IUnitPointData`](IUnitPointData.md) \| [`IDirection`](../modules.md#idirection)

#### Inherited from

[ILeaf](ILeaf.md).[origin](ILeaf.md#origin)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:262](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/display/ILeaf.ts#L262)

___

### around

• `Optional` **around**: [`IUnitPointData`](IUnitPointData.md) \| [`IDirection`](../modules.md#idirection)

#### Inherited from

[ILeaf](ILeaf.md).[around](ILeaf.md#around)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:263](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/display/ILeaf.ts#L263)

___

### lazy

• `Optional` **lazy**: `boolean`

#### Inherited from

[ILeaf](ILeaf.md).[lazy](ILeaf.md#lazy)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:265](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/display/ILeaf.ts#L265)

___

### pixelRatio

• `Optional` **pixelRatio**: `number`

#### Inherited from

[ILeaf](ILeaf.md).[pixelRatio](ILeaf.md#pixelratio)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:266](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/display/ILeaf.ts#L266)

___

### renderSpread

• `Optional` **renderSpread**: [`IFourNumber`](../modules.md#ifournumber)

#### Inherited from

[ILeaf](ILeaf.md).[renderSpread](ILeaf.md#renderspread)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:268](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/display/ILeaf.ts#L268)

___

### path

• `Optional` **path**: `string` \| [`IPathCommandData`](../modules.md#ipathcommanddata) \| [`IPathCommandNode`](../modules.md#ipathcommandnode)[] \| [`IPathCommandObject`](../modules.md#ipathcommandobject)[]

#### Inherited from

[ILeaf](ILeaf.md).[path](ILeaf.md#path)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:270](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/display/ILeaf.ts#L270)

___

### windingRule

• `Optional` **windingRule**: [`IWindingRule`](../modules.md#iwindingrule)

#### Inherited from

[ILeaf](ILeaf.md).[windingRule](ILeaf.md#windingrule)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:271](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/display/ILeaf.ts#L271)

___

### closed

• `Optional` **closed**: `boolean`

#### Inherited from

[ILeaf](ILeaf.md).[closed](ILeaf.md#closed)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:272](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/display/ILeaf.ts#L272)

___

### flow

• `Optional` **flow**: [`IFlowType`](../modules.md#iflowtype)

#### Inherited from

[ILeaf](ILeaf.md).[flow](ILeaf.md#flow)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:275](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/display/ILeaf.ts#L275)

___

### padding

• `Optional` **padding**: [`IFourNumber`](../modules.md#ifournumber)

#### Inherited from

[ILeaf](ILeaf.md).[padding](ILeaf.md#padding)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:276](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/display/ILeaf.ts#L276)

___

### gap

• `Optional` **gap**: [`IGap`](../modules.md#igap) \| [`IPointGap`](IPointGap.md)

#### Inherited from

[ILeaf](ILeaf.md).[gap](ILeaf.md#gap)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:277](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/display/ILeaf.ts#L277)

___

### flowAlign

• `Optional` **flowAlign**: [`IFlowAxisAlign`](IFlowAxisAlign.md) \| [`IFlowAlign`](../modules.md#iflowalign)

#### Inherited from

[ILeaf](ILeaf.md).[flowAlign](ILeaf.md#flowalign)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:278](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/display/ILeaf.ts#L278)

___

### flowWrap

• `Optional` **flowWrap**: [`IFlowWrap`](../modules.md#iflowwrap)

#### Inherited from

[ILeaf](ILeaf.md).[flowWrap](ILeaf.md#flowwrap)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:279](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/display/ILeaf.ts#L279)

___

### itemBox

• `Optional` **itemBox**: [`IFlowBoxType`](../modules.md#iflowboxtype)

#### Inherited from

[ILeaf](ILeaf.md).[itemBox](ILeaf.md#itembox)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:280](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/display/ILeaf.ts#L280)

___

### inFlow

• `Optional` **inFlow**: `boolean`

#### Inherited from

[ILeaf](ILeaf.md).[inFlow](ILeaf.md#inflow)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:282](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/display/ILeaf.ts#L282)

___

### autoWidth

• `Optional` **autoWidth**: [`IAutoSize`](../modules.md#iautosize)

#### Inherited from

[ILeaf](ILeaf.md).[autoWidth](ILeaf.md#autowidth)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:283](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/display/ILeaf.ts#L283)

___

### autoHeight

• `Optional` **autoHeight**: [`IAutoSize`](../modules.md#iautosize)

#### Inherited from

[ILeaf](ILeaf.md).[autoHeight](ILeaf.md#autoheight)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:284](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/display/ILeaf.ts#L284)

___

### lockRatio

• `Optional` **lockRatio**: `boolean`

#### Inherited from

[ILeaf](ILeaf.md).[lockRatio](ILeaf.md#lockratio)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:285](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/display/ILeaf.ts#L285)

___

### autoBox

• `Optional` **autoBox**: [`IAutoBoxData`](IAutoBoxData.md) \| [`IConstraint`](IConstraint.md)

#### Inherited from

[ILeaf](ILeaf.md).[autoBox](ILeaf.md#autobox)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:286](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/display/ILeaf.ts#L286)

___

### widthRange

• `Optional` **widthRange**: [`IRangeSize`](IRangeSize.md)

#### Inherited from

[ILeaf](ILeaf.md).[widthRange](ILeaf.md#widthrange)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:288](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/display/ILeaf.ts#L288)

___

### heightRange

• `Optional` **heightRange**: [`IRangeSize`](IRangeSize.md)

#### Inherited from

[ILeaf](ILeaf.md).[heightRange](ILeaf.md#heightrange)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:289](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/display/ILeaf.ts#L289)

___

### draggable

• `Optional` **draggable**: `boolean` \| [`IAxis`](../modules.md#iaxis)

#### Inherited from

[ILeaf](ILeaf.md).[draggable](ILeaf.md#draggable)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:292](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/display/ILeaf.ts#L292)

___

### dragBounds

• `Optional` **dragBounds**: `"parent"` \| [`IBoundsData`](IBoundsData.md)

#### Inherited from

[ILeaf](ILeaf.md).[dragBounds](ILeaf.md#dragbounds)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:293](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/display/ILeaf.ts#L293)

___

### dragBoundsType

• `Optional` **dragBoundsType**: [`IDragBoundsType`](../modules.md#idragboundstype)

#### Inherited from

[ILeaf](ILeaf.md).[dragBoundsType](ILeaf.md#dragboundstype)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:294](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/display/ILeaf.ts#L294)

___

### editable

• `Optional` **editable**: `boolean`

#### Inherited from

[ILeaf](ILeaf.md).[editable](ILeaf.md#editable)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:296](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/display/ILeaf.ts#L296)

___

### hittable

• `Optional` **hittable**: `boolean`

#### Inherited from

[ILeaf](ILeaf.md).[hittable](ILeaf.md#hittable)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:298](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/display/ILeaf.ts#L298)

___

### hitFill

• `Optional` **hitFill**: [`IHitType`](../modules.md#ihittype)

#### Inherited from

[ILeaf](ILeaf.md).[hitFill](ILeaf.md#hitfill)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:299](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/display/ILeaf.ts#L299)

___

### hitStroke

• `Optional` **hitStroke**: [`IHitType`](../modules.md#ihittype)

#### Inherited from

[ILeaf](ILeaf.md).[hitStroke](ILeaf.md#hitstroke)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:300](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/display/ILeaf.ts#L300)

___

### hitBox

• `Optional` **hitBox**: `boolean`

#### Inherited from

[ILeaf](ILeaf.md).[hitBox](ILeaf.md#hitbox)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:301](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/display/ILeaf.ts#L301)

___

### hitChildren

• `Optional` **hitChildren**: `boolean`

#### Inherited from

[ILeaf](ILeaf.md).[hitChildren](ILeaf.md#hitchildren)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:302](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/display/ILeaf.ts#L302)

___

### hitSelf

• `Optional` **hitSelf**: `boolean`

#### Inherited from

[ILeaf](ILeaf.md).[hitSelf](ILeaf.md#hitself)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:303](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/display/ILeaf.ts#L303)

___

### hitRadius

• `Optional` **hitRadius**: `number`

#### Inherited from

[ILeaf](ILeaf.md).[hitRadius](ILeaf.md#hitradius)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:304](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/display/ILeaf.ts#L304)

___

### button

• `Optional` **button**: `boolean`

#### Inherited from

[ILeaf](ILeaf.md).[button](ILeaf.md#button)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:306](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/display/ILeaf.ts#L306)

___

### cursor

• `Optional` **cursor**: [`ICursorType`](../modules.md#icursortype) \| [`ICursorType`](../modules.md#icursortype)[]

#### Inherited from

[ILeaf](ILeaf.md).[cursor](ILeaf.md#cursor)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:307](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/display/ILeaf.ts#L307)

___

### motionPath

• `Optional` **motionPath**: `boolean`

#### Inherited from

[ILeaf](ILeaf.md).[motionPath](ILeaf.md#motionpath)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:309](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/display/ILeaf.ts#L309)

___

### motionPrecision

• `Optional` **motionPrecision**: `number`

#### Inherited from

[ILeaf](ILeaf.md).[motionPrecision](ILeaf.md#motionprecision)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:310](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/display/ILeaf.ts#L310)

___

### motion

• `Optional` **motion**: `number` \| [`IUnitData`](IUnitData.md)

#### Inherited from

[ILeaf](ILeaf.md).[motion](ILeaf.md#motion)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:312](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/display/ILeaf.ts#L312)

___

### motionRotation

• `Optional` **motionRotation**: `number` \| `boolean`

#### Inherited from

[ILeaf](ILeaf.md).[motionRotation](ILeaf.md#motionrotation)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:313](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/display/ILeaf.ts#L313)

___

### normalStyle

• `Optional` **normalStyle**: [`IObject`](IObject.md)

#### Inherited from

[ILeaf](ILeaf.md).[normalStyle](ILeaf.md#normalstyle)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:315](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/display/ILeaf.ts#L315)

___

### event

• `Optional` **event**: [`IEventParamsMap`](IEventParamsMap.md)

#### Inherited from

[ILeaf](ILeaf.md).[event](ILeaf.md#event)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:317](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/display/ILeaf.ts#L317)

___

### data

• `Optional` **data**: [`IObject`](IObject.md)

#### Inherited from

[ILeaf](ILeaf.md).[data](ILeaf.md#data)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:320](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/display/ILeaf.ts#L320)

___

### tag

• **tag**: `string`

#### Inherited from

[ILeaf](ILeaf.md).[tag](ILeaf.md#tag)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:467](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/display/ILeaf.ts#L467)

___

### \_\_tag

• `Readonly` **\_\_tag**: `string`

#### Inherited from

[ILeaf](ILeaf.md).[__tag](ILeaf.md#__tag)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:468](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/display/ILeaf.ts#L468)

___

### innerName

• `Readonly` **innerName**: `string`

#### Inherited from

[ILeaf](ILeaf.md).[innerName](ILeaf.md#innername)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:469](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/display/ILeaf.ts#L469)

___

### \_\_DataProcessor

• `Readonly` **\_\_DataProcessor**: [`IObject`](IObject.md)

#### Inherited from

[ILeaf](ILeaf.md).[__DataProcessor](ILeaf.md#__dataprocessor)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:471](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/display/ILeaf.ts#L471)

___

### \_\_LayoutProcessor

• `Readonly` **\_\_LayoutProcessor**: [`IObject`](IObject.md)

#### Inherited from

[ILeaf](ILeaf.md).[__LayoutProcessor](ILeaf.md#__layoutprocessor)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:472](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/display/ILeaf.ts#L472)

___

### app

• `Optional` `Readonly` **app**: [`ILeaferBase`](ILeaferBase.md)

#### Inherited from

[ILeaf](ILeaf.md).[app](ILeaf.md#app)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:474](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/display/ILeaf.ts#L474)

___

### leafer

• `Optional` **leafer**: [`ILeaferBase`](ILeaferBase.md)

#### Inherited from

[ILeaf](ILeaf.md).[leafer](ILeaf.md#leafer)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:475](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/display/ILeaf.ts#L475)

___

### parent

• `Optional` **parent**: [`ILeaf`](ILeaf.md)

#### Inherited from

[ILeaf](ILeaf.md).[parent](ILeaf.md#parent)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:476](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/display/ILeaf.ts#L476)

___

### zoomLayer

• `Optional` **zoomLayer**: [`ILeaf`](ILeaf.md)

#### Inherited from

[ILeaf](ILeaf.md).[zoomLayer](ILeaf.md#zoomlayer)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:477](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/display/ILeaf.ts#L477)

___

### leaferIsCreated

• `Readonly` **leaferIsCreated**: `boolean`

#### Inherited from

[ILeaf](ILeaf.md).[leaferIsCreated](ILeaf.md#leaferiscreated)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:479](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/display/ILeaf.ts#L479)

___

### leaferIsReady

• `Readonly` **leaferIsReady**: `boolean`

#### Inherited from

[ILeaf](ILeaf.md).[leaferIsReady](ILeaf.md#leaferisready)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:480](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/display/ILeaf.ts#L480)

___

### isApp

• `Optional` `Readonly` **isApp**: `boolean`

#### Inherited from

[ILeaf](ILeaf.md).[isApp](ILeaf.md#isapp)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:482](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/display/ILeaf.ts#L482)

___

### isLeafer

• `Optional` `Readonly` **isLeafer**: `boolean`

#### Inherited from

[ILeaf](ILeaf.md).[isLeafer](ILeaf.md#isleafer)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:483](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/display/ILeaf.ts#L483)

___

### isBranch

• `Optional` `Readonly` **isBranch**: `boolean`

#### Inherited from

[ILeaf](ILeaf.md).[isBranch](ILeaf.md#isbranch)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:484](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/display/ILeaf.ts#L484)

___

### isBranchLeaf

• `Optional` `Readonly` **isBranchLeaf**: `boolean`

#### Inherited from

[ILeaf](ILeaf.md).[isBranchLeaf](ILeaf.md#isbranchleaf)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:485](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/display/ILeaf.ts#L485)

___

### isOutside

• `Optional` `Readonly` **isOutside**: `boolean`

#### Inherited from

[ILeaf](ILeaf.md).[isOutside](ILeaf.md#isoutside)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:486](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/display/ILeaf.ts#L486)

___

### \_\_

• **\_\_**: [`ILeafData`](ILeafData.md)

#### Inherited from

[ILeaf](ILeaf.md).[__](ILeaf.md#__)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:488](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/display/ILeaf.ts#L488)

___

### proxyData

• `Optional` **proxyData**: [`ILeafInputData`](ILeafInputData.md)

#### Inherited from

[ILeaf](ILeaf.md).[proxyData](ILeaf.md#proxydata)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:490](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/display/ILeaf.ts#L490)

___

### \_\_proxyData

• `Optional` **\_\_proxyData**: [`ILeafInputData`](ILeafInputData.md)

#### Inherited from

[ILeaf](ILeaf.md).[__proxyData](ILeaf.md#__proxydata)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:491](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/display/ILeaf.ts#L491)

___

### skipJSON

• `Optional` **skipJSON**: `boolean`

#### Inherited from

[ILeaf](ILeaf.md).[skipJSON](ILeaf.md#skipjson)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:493](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/display/ILeaf.ts#L493)

___

### syncEventer

• `Optional` **syncEventer**: [`ILeaf`](ILeaf.md)

#### Inherited from

[ILeaf](ILeaf.md).[syncEventer](ILeaf.md#synceventer)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:494](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/display/ILeaf.ts#L494)

___

### lockNormalStyle

• `Optional` **lockNormalStyle**: `boolean`

#### Inherited from

[ILeaf](ILeaf.md).[lockNormalStyle](ILeaf.md#locknormalstyle)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:495](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/display/ILeaf.ts#L495)

___

### \_\_layout

• **\_\_layout**: [`ILeafLayout`](ILeafLayout.md)

#### Inherited from

[ILeaf](ILeaf.md).[__layout](ILeaf.md#__layout)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:497](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/display/ILeaf.ts#L497)

___

### \_\_world

• **\_\_world**: [`IMatrixWithBoundsScaleData`](IMatrixWithBoundsScaleData.md)

#### Inherited from

[ILeaf](ILeaf.md).[__world](ILeaf.md#__world)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:499](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/display/ILeaf.ts#L499)

___

### \_\_local

• `Optional` **\_\_local**: [`IMatrixWithBoundsData`](IMatrixWithBoundsData.md)

#### Inherited from

[ILeaf](ILeaf.md).[__local](ILeaf.md#__local)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:500](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/display/ILeaf.ts#L500)

___

### \_\_nowWorld

• `Optional` **\_\_nowWorld**: [`IMatrixWithBoundsScaleData`](IMatrixWithBoundsScaleData.md)

#### Inherited from

[ILeaf](ILeaf.md).[__nowWorld](ILeaf.md#__nowworld)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:502](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/display/ILeaf.ts#L502)

___

### \_\_cameraWorld

• `Optional` **\_\_cameraWorld**: [`IMatrixWithBoundsScaleData`](IMatrixWithBoundsScaleData.md)

#### Inherited from

[ILeaf](ILeaf.md).[__cameraWorld](ILeaf.md#__cameraworld)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:503](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/display/ILeaf.ts#L503)

___

### \_\_nowWorldShapeBounds

• `Optional` **\_\_nowWorldShapeBounds**: [`IBoundsData`](IBoundsData.md)

#### Inherited from

[ILeaf](ILeaf.md).[__nowWorldShapeBounds](ILeaf.md#__nowworldshapebounds)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:505](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/display/ILeaf.ts#L505)

___

### \_\_localMatrix

• `Readonly` **\_\_localMatrix**: [`IMatrixData`](IMatrixData.md)

#### Inherited from

[ILeaf](ILeaf.md).[__localMatrix](ILeaf.md#__localmatrix)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:507](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/display/ILeaf.ts#L507)

___

### \_\_localBoxBounds

• `Readonly` **\_\_localBoxBounds**: [`IBoundsData`](IBoundsData.md)

#### Inherited from

[ILeaf](ILeaf.md).[__localBoxBounds](ILeaf.md#__localboxbounds)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:508](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/display/ILeaf.ts#L508)

___

### \_\_worldOpacity

• **\_\_worldOpacity**: `number`

#### Inherited from

[ILeaf](ILeaf.md).[__worldOpacity](ILeaf.md#__worldopacity)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:510](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/display/ILeaf.ts#L510)

___

### worldTransform

• `Readonly` **worldTransform**: [`IMatrixWithScaleData`](IMatrixWithScaleData.md)

#### Inherited from

[ILeaf](ILeaf.md).[worldTransform](ILeaf.md#worldtransform)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:512](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/display/ILeaf.ts#L512)

___

### localTransform

• `Readonly` **localTransform**: [`IMatrixData`](IMatrixData.md)

#### Inherited from

[ILeaf](ILeaf.md).[localTransform](ILeaf.md#localtransform)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:513](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/display/ILeaf.ts#L513)

___

### \_\_scrollWorld

• `Optional` **\_\_scrollWorld**: [`IMatrixWithBoundsScaleData`](IMatrixWithBoundsScaleData.md)

#### Inherited from

[ILeaf](ILeaf.md).[__scrollWorld](ILeaf.md#__scrollworld)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:515](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/display/ILeaf.ts#L515)

___

### scrollWorldTransform

• `Readonly` **scrollWorldTransform**: [`IMatrixWithScaleData`](IMatrixWithScaleData.md)

#### Inherited from

[ILeaf](ILeaf.md).[scrollWorldTransform](ILeaf.md#scrollworldtransform)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:516](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/display/ILeaf.ts#L516)

___

### boxBounds

• `Readonly` **boxBounds**: [`IBoundsData`](IBoundsData.md)

#### Inherited from

[ILeaf](ILeaf.md).[boxBounds](ILeaf.md#boxbounds)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:518](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/display/ILeaf.ts#L518)

___

### renderBounds

• `Readonly` **renderBounds**: [`IBoundsData`](IBoundsData.md)

#### Inherited from

[ILeaf](ILeaf.md).[renderBounds](ILeaf.md#renderbounds)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:519](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/display/ILeaf.ts#L519)

___

### worldBoxBounds

• `Readonly` **worldBoxBounds**: [`IBoundsData`](IBoundsData.md)

#### Inherited from

[ILeaf](ILeaf.md).[worldBoxBounds](ILeaf.md#worldboxbounds)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:520](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/display/ILeaf.ts#L520)

___

### worldStrokeBounds

• `Readonly` **worldStrokeBounds**: [`IBoundsData`](IBoundsData.md)

#### Inherited from

[ILeaf](ILeaf.md).[worldStrokeBounds](ILeaf.md#worldstrokebounds)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:521](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/display/ILeaf.ts#L521)

___

### worldRenderBounds

• `Readonly` **worldRenderBounds**: [`IBoundsData`](IBoundsData.md)

#### Inherited from

[ILeaf](ILeaf.md).[worldRenderBounds](ILeaf.md#worldrenderbounds)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:522](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/display/ILeaf.ts#L522)

___

### worldOpacity

• `Readonly` **worldOpacity**: `number`

#### Inherited from

[ILeaf](ILeaf.md).[worldOpacity](ILeaf.md#worldopacity)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:524](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/display/ILeaf.ts#L524)

___

### \_\_level

• **\_\_level**: `number`

#### Inherited from

[ILeaf](ILeaf.md).[__level](ILeaf.md#__level)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:526](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/display/ILeaf.ts#L526)

___

### \_\_tempNumber

• `Optional` **\_\_tempNumber**: `number`

#### Inherited from

[ILeaf](ILeaf.md).[__tempNumber](ILeaf.md#__tempnumber)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:527](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/display/ILeaf.ts#L527)

___

### \_\_worldFlipped

• `Readonly` **\_\_worldFlipped**: `boolean`

#### Inherited from

[ILeaf](ILeaf.md).[__worldFlipped](ILeaf.md#__worldflipped)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:529](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/display/ILeaf.ts#L529)

___

### animation

• `Optional` **animation**: [`IObject`](IObject.md) \| [`IObject`](IObject.md)[]

#### Inherited from

[ILeaf](ILeaf.md).[animation](ILeaf.md#animation)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:531](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/display/ILeaf.ts#L531)

___

### animationOut

• `Optional` **animationOut**: [`IObject`](IObject.md) \| [`IObject`](IObject.md)[]

#### Inherited from

[ILeaf](ILeaf.md).[animationOut](ILeaf.md#animationout)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:532](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/display/ILeaf.ts#L532)

___

### \_\_hasAutoLayout

• `Optional` **\_\_hasAutoLayout**: `boolean`

#### Inherited from

[ILeaf](ILeaf.md).[__hasAutoLayout](ILeaf.md#__hasautolayout)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:534](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/display/ILeaf.ts#L534)

___

### \_\_hasMotionPath

• `Optional` **\_\_hasMotionPath**: `boolean`

#### Inherited from

[ILeaf](ILeaf.md).[__hasMotionPath](ILeaf.md#__hasmotionpath)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:535](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/display/ILeaf.ts#L535)

___

### \_\_hasComplex

• `Optional` **\_\_hasComplex**: `boolean`

#### Inherited from

[ILeaf](ILeaf.md).[__hasComplex](ILeaf.md#__hascomplex)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:536](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/display/ILeaf.ts#L536)

___

### \_\_hasMask

• `Optional` **\_\_hasMask**: `boolean`

#### Inherited from

[ILeaf](ILeaf.md).[__hasMask](ILeaf.md#__hasmask)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:538](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/display/ILeaf.ts#L538)

___

### \_\_hasEraser

• `Optional` **\_\_hasEraser**: `boolean`

#### Inherited from

[ILeaf](ILeaf.md).[__hasEraser](ILeaf.md#__haseraser)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:539](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/display/ILeaf.ts#L539)

___

### \_\_hitCanvas

• `Optional` **\_\_hitCanvas**: [`IHitCanvas`](IHitCanvas.md)

#### Inherited from

[ILeaf](ILeaf.md).[__hitCanvas](ILeaf.md#__hitcanvas)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:540](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/display/ILeaf.ts#L540)

___

### \_\_flowBounds

• `Optional` **\_\_flowBounds**: [`IBoundsData`](IBoundsData.md)

#### Inherited from

[ILeaf](ILeaf.md).[__flowBounds](ILeaf.md#__flowbounds)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:542](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/display/ILeaf.ts#L542)

___

### \_\_widthGrow

• `Optional` **\_\_widthGrow**: `number`

#### Inherited from

[ILeaf](ILeaf.md).[__widthGrow](ILeaf.md#__widthgrow)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:543](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/display/ILeaf.ts#L543)

___

### \_\_heightGrow

• `Optional` **\_\_heightGrow**: `number`

#### Inherited from

[ILeaf](ILeaf.md).[__heightGrow](ILeaf.md#__heightgrow)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:544](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/display/ILeaf.ts#L544)

___

### \_\_hasGrow

• `Optional` **\_\_hasGrow**: `boolean`

#### Inherited from

[ILeaf](ILeaf.md).[__hasGrow](ILeaf.md#__hasgrow)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:545](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/display/ILeaf.ts#L545)

___

### \_\_onlyHitMask

• `Readonly` **\_\_onlyHitMask**: `boolean`

#### Inherited from

[ILeaf](ILeaf.md).[__onlyHitMask](ILeaf.md#__onlyhitmask)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:547](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/display/ILeaf.ts#L547)

___

### \_\_ignoreHitWorld

• `Readonly` **\_\_ignoreHitWorld**: `boolean`

#### Inherited from

[ILeaf](ILeaf.md).[__ignoreHitWorld](ILeaf.md#__ignorehitworld)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:548](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/display/ILeaf.ts#L548)

___

### \_\_inLazyBounds

• `Readonly` **\_\_inLazyBounds**: `boolean`

#### Inherited from

[ILeaf](ILeaf.md).[__inLazyBounds](ILeaf.md#__inlazybounds)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:549](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/display/ILeaf.ts#L549)

___

### pathInputed

• `Readonly` **pathInputed**: `boolean`

#### Inherited from

[ILeaf](ILeaf.md).[pathInputed](ILeaf.md#pathinputed)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:551](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/display/ILeaf.ts#L551)

___

### isAutoWidth

• `Optional` `Readonly` **isAutoWidth**: `boolean`

#### Inherited from

[ILeaf](ILeaf.md).[isAutoWidth](ILeaf.md#isautowidth)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:553](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/display/ILeaf.ts#L553)

___

### isAutoHeight

• `Optional` `Readonly` **isAutoHeight**: `boolean`

#### Inherited from

[ILeaf](ILeaf.md).[isAutoHeight](ILeaf.md#isautoheight)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:554](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/display/ILeaf.ts#L554)

___

### destroyed

• **destroyed**: `boolean`

#### Inherited from

[ILeaf](ILeaf.md).[destroyed](ILeaf.md#destroyed)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:556](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/display/ILeaf.ts#L556)

___

### topChildren

• `Optional` **topChildren**: [`ILeaf`](ILeaf.md)[]

#### Inherited from

[ILeaf](ILeaf.md).[topChildren](ILeaf.md#topchildren)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:733](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/display/ILeaf.ts#L733)

___

### innerId

• `Readonly` **innerId**: `number`

#### Inherited from

[ILeaf](ILeaf.md).[innerId](ILeaf.md#innerid)

#### Defined in

[src/leafer/packages/interface/src/event/IEventer.ts:41](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/event/IEventer.ts#L41)

___

### \_\_captureMap

• `Optional` **\_\_captureMap**: [`IEventListenerMap`](IEventListenerMap.md)

#### Inherited from

[ILeaf](ILeaf.md).[__captureMap](ILeaf.md#__capturemap)

#### Defined in

[src/leafer/packages/interface/src/event/IEventer.ts:42](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/event/IEventer.ts#L42)

___

### \_\_bubbleMap

• `Optional` **\_\_bubbleMap**: [`IEventListenerMap`](IEventListenerMap.md)

#### Inherited from

[ILeaf](ILeaf.md).[__bubbleMap](ILeaf.md#__bubblemap)

#### Defined in

[src/leafer/packages/interface/src/event/IEventer.ts:43](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/event/IEventer.ts#L43)

___

### \_\_hasLocalEvent

• `Optional` **\_\_hasLocalEvent**: `boolean`

#### Inherited from

[ILeaf](ILeaf.md).[__hasLocalEvent](ILeaf.md#__haslocalevent)

#### Defined in

[src/leafer/packages/interface/src/event/IEventer.ts:44](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/event/IEventer.ts#L44)

___

### \_\_hasWorldEvent

• `Optional` **\_\_hasWorldEvent**: `boolean`

#### Inherited from

[ILeaf](ILeaf.md).[__hasWorldEvent](ILeaf.md#__hasworldevent)

#### Defined in

[src/leafer/packages/interface/src/event/IEventer.ts:45](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/event/IEventer.ts#L45)

## Methods

### \_\_renderBranch

▸ **__renderBranch**(`canvas`, `options`): `void`

#### Parameters

| Name      | Type                                  |
| :-------- | :------------------------------------ |
| `canvas`  | [`ILeaferCanvas`](ILeaferCanvas.md)   |
| `options` | [`IRenderOptions`](IRenderOptions.md) |

#### Returns

`void`

#### Defined in

[src/leafer/packages/interface/src/display/IBranch.ts:7](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/display/IBranch.ts#L7)

___

### addMany

▸ **addMany**(`...children`): `void`

#### Parameters

| Name          | Type                                                                                                                                                                       |
| :------------ | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `...children` | [`ILeaf`](ILeaf.md)[] \\| [`ILeafInputData`](ILeafInputData.md)[] |

#### Returns

`void`

#### Defined in

[src/leafer/packages/interface/src/display/IBranch.ts:8](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/display/IBranch.ts#L8)

___

### removeAll

▸ **removeAll**(`destroy?`): `void`

#### Parameters

| Name       | Type      |
| :--------- | :-------- |
| `destroy?` | `boolean` |

#### Returns

`void`

#### Defined in

[src/leafer/packages/interface/src/display/IBranch.ts:9](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/display/IBranch.ts#L9)

___

### clear

▸ **clear**(): `void`

#### Returns

`void`

#### Defined in

[src/leafer/packages/interface/src/display/IBranch.ts:10](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/display/IBranch.ts#L10)

___

### reset

▸ **reset**(`data?`): `void`

#### Parameters

| Name    | Type                                  |
| :------ | :------------------------------------ |
| `data?` | [`ILeafInputData`](ILeafInputData.md) |

#### Returns

`void`

#### Inherited from

[ILeaf](ILeaf.md).[reset](ILeaf.md#reset)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:558](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/display/ILeaf.ts#L558)

___

### resetCustom

▸ **resetCustom**(): `void`

#### Returns

`void`

#### Inherited from

[ILeaf](ILeaf.md).[resetCustom](ILeaf.md#resetcustom)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:559](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/display/ILeaf.ts#L559)

___

### waitParent

▸ **waitParent**(`item`, `bind?`): `void`

#### Parameters

| Name    | Type                        |
| :------ | :-------------------------- |
| `item`  | [`IFunction`](IFunction.md) |
| `bind?` | [`IObject`](IObject.md)     |

#### Returns

`void`

#### Inherited from

[ILeaf](ILeaf.md).[waitParent](ILeaf.md#waitparent)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:561](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/display/ILeaf.ts#L561)

___

### waitLeafer

▸ **waitLeafer**(`item`, `bind?`): `void`

#### Parameters

| Name    | Type                        |
| :------ | :-------------------------- |
| `item`  | [`IFunction`](IFunction.md) |
| `bind?` | [`IObject`](IObject.md)     |

#### Returns

`void`

#### Inherited from

[ILeaf](ILeaf.md).[waitLeafer](ILeaf.md#waitleafer)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:562](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/display/ILeaf.ts#L562)

___

### nextRender

▸ **nextRender**(`item`, `bind?`, `off?`): `void`

#### Parameters

| Name    | Type                        |
| :------ | :-------------------------- |
| `item`  | [`IFunction`](IFunction.md) |
| `bind?` | [`IObject`](IObject.md)     |
| `off?`  | `"off"`                     |

#### Returns

`void`

#### Inherited from

[ILeaf](ILeaf.md).[nextRender](ILeaf.md#nextrender)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:563](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/display/ILeaf.ts#L563)

___

### removeNextRender

▸ **removeNextRender**(`item`): `void`

#### Parameters

| Name   | Type                        |
| :----- | :-------------------------- |
| `item` | [`IFunction`](IFunction.md) |

#### Returns

`void`

#### Inherited from

[ILeaf](ILeaf.md).[removeNextRender](ILeaf.md#removenextrender)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:564](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/display/ILeaf.ts#L564)

___

### \_\_bindLeafer

▸ **__bindLeafer**(`leafer`): `void`

#### Parameters

| Name     | Type                            |
| :------- | :------------------------------ |
| `leafer` | [`ILeaferBase`](ILeaferBase.md) |

#### Returns

`void`

#### Inherited from

[ILeaf](ILeaf.md).[__bindLeafer](ILeaf.md#__bindleafer)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:566](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/display/ILeaf.ts#L566)

___

### set

▸ **set**(`data`, `transition?`): `void`

#### Parameters

| Name          | Type                                       |
| :------------ | :----------------------------------------- |
| `data`        | [`IObject`](IObject.md)                    |
| `transition?` | [`ITransition`](../modules.md#itransition) |

#### Returns

`void`

#### Inherited from

[ILeaf](ILeaf.md).[set](ILeaf.md#set)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:568](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/display/ILeaf.ts#L568)

___

### get

▸ **get**\<`K`\>(`name`): [`IBranch`](IBranch.md)[`K`]

#### Type parameters

| Name | Type                                  |
| :--- | :------------------------------------ |
| `K`  | extends keyof [`IBranch`](IBranch.md) |

#### Parameters

| Name   | Type |
| :----- | :--- |
| `name` | `K`  |

#### Returns

[`IBranch`](IBranch.md)[`K`]

#### Inherited from

[ILeaf](ILeaf.md).[get](ILeaf.md#get)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:569](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/display/ILeaf.ts#L569)

▸ **get**\<`K`\>(`name?`): [`ILeafInputData`](ILeafInputData.md)

#### Type parameters

| Name | Type                                  |
| :--- | :------------------------------------ |
| `K`  | extends keyof [`IBranch`](IBranch.md) |

#### Parameters

| Name    | Type                                                                                                 |
| :------ | :--------------------------------------------------------------------------------------------------- |
| `name?` | [`ILeafInputData`](ILeafInputData.md) \\| `K`[] |

#### Returns

[`ILeafInputData`](ILeafInputData.md)

#### Inherited from

[ILeaf](ILeaf.md).[get](ILeaf.md#get)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:570](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/display/ILeaf.ts#L570)

___

### setAttr

▸ **setAttr**(`name`, `value`): `void`

#### Parameters

| Name    | Type     |
| :------ | :------- |
| `name`  | `string` |
| `value` | `any`    |

#### Returns

`void`

#### Inherited from

[ILeaf](ILeaf.md).[setAttr](ILeaf.md#setattr)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:571](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/display/ILeaf.ts#L571)

___

### getAttr

▸ **getAttr**(`name`): `any`

#### Parameters

| Name   | Type     |
| :----- | :------- |
| `name` | `string` |

#### Returns

`any`

#### Inherited from

[ILeaf](ILeaf.md).[getAttr](ILeaf.md#getattr)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:572](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/display/ILeaf.ts#L572)

___

### getComputedAttr

▸ **getComputedAttr**(`name`): `any`

#### Parameters

| Name   | Type     |
| :----- | :------- |
| `name` | `string` |

#### Returns

`any`

#### Inherited from

[ILeaf](ILeaf.md).[getComputedAttr](ILeaf.md#getcomputedattr)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:573](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/display/ILeaf.ts#L573)

___

### toJSON

▸ **toJSON**(`options?`): [`IObject`](IObject.md)

#### Parameters

| Name       | Type                              |
| :--------- | :-------------------------------- |
| `options?` | [`IJSONOptions`](IJSONOptions.md) |

#### Returns

[`IObject`](IObject.md)

#### Inherited from

[ILeaf](ILeaf.md).[toJSON](ILeaf.md#tojson)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:575](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/display/ILeaf.ts#L575)

___

### toString

▸ **toString**(`options?`): `string`

#### Parameters

| Name       | Type                              |
| :--------- | :-------------------------------- |
| `options?` | [`IJSONOptions`](IJSONOptions.md) |

#### Returns

`string`

#### Inherited from

[ILeaf](ILeaf.md).[toString](ILeaf.md#tostring)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:576](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/display/ILeaf.ts#L576)

___

### toSVG

▸ **toSVG**(): `string`

#### Returns

`string`

#### Inherited from

[ILeaf](ILeaf.md).[toSVG](ILeaf.md#tosvg)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:577](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/display/ILeaf.ts#L577)

___

### \_\_SVG

▸ **__SVG**(`data`): `void`

#### Parameters

| Name   | Type                    |
| :----- | :---------------------- |
| `data` | [`IObject`](IObject.md) |

#### Returns

`void`

#### Inherited from

[ILeaf](ILeaf.md).[__SVG](ILeaf.md#__svg)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:578](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/display/ILeaf.ts#L578)

___

### toHTML

▸ **toHTML**(): `string`

#### Returns

`string`

#### Inherited from

[ILeaf](ILeaf.md).[toHTML](ILeaf.md#tohtml)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:579](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/display/ILeaf.ts#L579)

___

### clone

▸ **clone**(`data?`): [`ILeaf`](ILeaf.md)

#### Parameters

| Name    | Type                                  |
| :------ | :------------------------------------ |
| `data?` | [`ILeafInputData`](ILeafInputData.md) |

#### Returns

[`ILeaf`](ILeaf.md)

#### Inherited from

[ILeaf](ILeaf.md).[clone](ILeaf.md#clone)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:580](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/display/ILeaf.ts#L580)

___

### animate

▸ **animate**(`_keyframe?`, `_options?`, `_type?`, `_isTemp?`): `any`

#### Parameters

| Name         | Type      |
| :----------- | :-------- |
| `_keyframe?` | `any`     |
| `_options?`  | `any`     |
| `_type?`     | `any`     |
| `_isTemp?`   | `boolean` |

#### Returns

`any`

#### Inherited from

[ILeaf](ILeaf.md).[animate](ILeaf.md#animate)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:582](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/display/ILeaf.ts#L582)

___

### \_\_setAttr

▸ **__setAttr**(`attrName`, `newValue`, `checkFiniteNumber?`): `boolean`

#### Parameters

| Name                 | Type                             |
| :------------------- | :------------------------------- |
| `attrName`           | `string`                         |
| `newValue`           | [`IValue`](../modules.md#ivalue) |
| `checkFiniteNumber?` | `boolean`                        |

#### Returns

`boolean`

#### Inherited from

[ILeaf](ILeaf.md).[__setAttr](ILeaf.md#__setattr)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:585](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/display/ILeaf.ts#L585)

___

### \_\_getAttr

▸ **__getAttr**(`attrName`): [`IValue`](../modules.md#ivalue)

#### Parameters

| Name       | Type     |
| :--------- | :------- |
| `attrName` | `string` |

#### Returns

[`IValue`](../modules.md#ivalue)

#### Inherited from

[ILeaf](ILeaf.md).[__getAttr](ILeaf.md#__getattr)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:586](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/display/ILeaf.ts#L586)

___

### setProxyAttr

▸ **setProxyAttr**(`name`, `newValue`): `void`

#### Parameters

| Name       | Type                             |
| :--------- | :------------------------------- |
| `name`     | `string`                         |
| `newValue` | [`IValue`](../modules.md#ivalue) |

#### Returns

`void`

#### Inherited from

[ILeaf](ILeaf.md).[setProxyAttr](ILeaf.md#setproxyattr)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:587](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/display/ILeaf.ts#L587)

___

### getProxyAttr

▸ **getProxyAttr**(`name`): [`IValue`](../modules.md#ivalue)

#### Parameters

| Name   | Type     |
| :----- | :------- |
| `name` | `string` |

#### Returns

[`IValue`](../modules.md#ivalue)

#### Inherited from

[ILeaf](ILeaf.md).[getProxyAttr](ILeaf.md#getproxyattr)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:588](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/display/ILeaf.ts#L588)

___

### find

▸ **find**(`condition`, `options?`): [`ILeaf`](ILeaf.md)[]

#### Parameters

| Name        | Type                                                        |
| :---------- | :---------------------------------------------------------- |
| `condition` | `string` \\| `number` \\| [`IFindMethod`](IFindMethod.md) |
| `options?`  | `any`                                                       |

#### Returns

[`ILeaf`](ILeaf.md)[]

#### Inherited from

[ILeaf](ILeaf.md).[find](ILeaf.md#find)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:591](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/display/ILeaf.ts#L591)

___

### findTag

▸ **findTag**(`tag`): [`ILeaf`](ILeaf.md)[]

#### Parameters

| Name  | Type                                                                         |
| :---- | :--------------------------------------------------------------------------- |
| `tag` | `string` \\| `string`[] |

#### Returns

[`ILeaf`](ILeaf.md)[]

#### Inherited from

[ILeaf](ILeaf.md).[findTag](ILeaf.md#findtag)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:592](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/display/ILeaf.ts#L592)

___

### findOne

▸ **findOne**(`condition`, `options?`): [`ILeaf`](ILeaf.md)

#### Parameters

| Name        | Type                                                        |
| :---------- | :---------------------------------------------------------- |
| `condition` | `string` \\| `number` \\| [`IFindMethod`](IFindMethod.md) |
| `options?`  | `any`                                                       |

#### Returns

[`ILeaf`](ILeaf.md)

#### Inherited from

[ILeaf](ILeaf.md).[findOne](ILeaf.md#findone)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:593](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/display/ILeaf.ts#L593)

___

### findId

▸ **findId**(`id`): [`ILeaf`](ILeaf.md)

#### Parameters

| Name | Type                   |
| :--- | :--------------------- |
| `id` | `string` \\| `number` |

#### Returns

[`ILeaf`](ILeaf.md)

#### Inherited from

[ILeaf](ILeaf.md).[findId](ILeaf.md#findid)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:594](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/display/ILeaf.ts#L594)

___

### focus

▸ **focus**(`value?`): `void`

#### Parameters

| Name     | Type      |
| :------- | :-------- |
| `value?` | `boolean` |

#### Returns

`void`

#### Inherited from

[ILeaf](ILeaf.md).[focus](ILeaf.md#focus)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:596](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/display/ILeaf.ts#L596)

___

### updateState

▸ **updateState**(): `void`

#### Returns

`void`

#### Inherited from

[ILeaf](ILeaf.md).[updateState](ILeaf.md#updatestate)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:598](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/display/ILeaf.ts#L598)

___

### updateLayout

▸ **updateLayout**(): `void`

#### Returns

`void`

#### Inherited from

[ILeaf](ILeaf.md).[updateLayout](ILeaf.md#updatelayout)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:599](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/display/ILeaf.ts#L599)

___

### forceUpdate

▸ **forceUpdate**(`attrName?`): `void`

#### Parameters

| Name        | Type     |
| :---------- | :------- |
| `attrName?` | `string` |

#### Returns

`void`

#### Inherited from

[ILeaf](ILeaf.md).[forceUpdate](ILeaf.md#forceupdate)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:600](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/display/ILeaf.ts#L600)

___

### forceRender

▸ **forceRender**(`bounds?`, `sync?`): `void`

#### Parameters

| Name      | Type                            |
| :-------- | :------------------------------ |
| `bounds?` | [`IBoundsData`](IBoundsData.md) |
| `sync?`   | `boolean`                       |

#### Returns

`void`

#### Inherited from

[ILeaf](ILeaf.md).[forceRender](ILeaf.md#forcerender)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:601](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/display/ILeaf.ts#L601)

___

### \_\_extraUpdate

▸ **__extraUpdate**(): `void`

#### Returns

`void`

#### Inherited from

[ILeaf](ILeaf.md).[__extraUpdate](ILeaf.md#__extraupdate)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:603](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/display/ILeaf.ts#L603)

___

### \_\_updateWorldMatrix

▸ **__updateWorldMatrix**(): `void`

#### Returns

`void`

#### Inherited from

[ILeaf](ILeaf.md).[__updateWorldMatrix](ILeaf.md#__updateworldmatrix)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:606](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/display/ILeaf.ts#L606)

___

### \_\_updateLocalMatrix

▸ **__updateLocalMatrix**(): `void`

#### Returns

`void`

#### Inherited from

[ILeaf](ILeaf.md).[__updateLocalMatrix](ILeaf.md#__updatelocalmatrix)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:607](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/display/ILeaf.ts#L607)

___

### \_\_updateWorldBounds

▸ **__updateWorldBounds**(): `void`

#### Returns

`void`

#### Inherited from

[ILeaf](ILeaf.md).[__updateWorldBounds](ILeaf.md#__updateworldbounds)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:610](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/display/ILeaf.ts#L610)

___

### \_\_updateLocalBounds

▸ **__updateLocalBounds**(): `void`

#### Returns

`void`

#### Inherited from

[ILeaf](ILeaf.md).[__updateLocalBounds](ILeaf.md#__updatelocalbounds)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:611](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/display/ILeaf.ts#L611)

___

### \_\_updateLocalBoxBounds

▸ **__updateLocalBoxBounds**(): `void`

#### Returns

`void`

#### Inherited from

[ILeaf](ILeaf.md).[__updateLocalBoxBounds](ILeaf.md#__updatelocalboxbounds)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:613](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/display/ILeaf.ts#L613)

___

### \_\_updateLocalStrokeBounds

▸ **__updateLocalStrokeBounds**(): `void`

#### Returns

`void`

#### Inherited from

[ILeaf](ILeaf.md).[__updateLocalStrokeBounds](ILeaf.md#__updatelocalstrokebounds)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:614](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/display/ILeaf.ts#L614)

___

### \_\_updateLocalRenderBounds

▸ **__updateLocalRenderBounds**(): `void`

#### Returns

`void`

#### Inherited from

[ILeaf](ILeaf.md).[__updateLocalRenderBounds](ILeaf.md#__updatelocalrenderbounds)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:615](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/display/ILeaf.ts#L615)

___

### \_\_updateContentBounds

▸ **__updateContentBounds**(): `void`

#### Returns

`void`

#### Inherited from

[ILeaf](ILeaf.md).[__updateContentBounds](ILeaf.md#__updatecontentbounds)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:617](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/display/ILeaf.ts#L617)

___

### \_\_updateBoxBounds

▸ **__updateBoxBounds**(`secondLayout?`, `bounds?`): `void`

#### Parameters

| Name            | Type                            |
| :-------------- | :------------------------------ |
| `secondLayout?` | `boolean`                       |
| `bounds?`       | [`IBoundsData`](IBoundsData.md) |

#### Returns

`void`

#### Inherited from

[ILeaf](ILeaf.md).[__updateBoxBounds](ILeaf.md#__updateboxbounds)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:618](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/display/ILeaf.ts#L618)

___

### \_\_updateStrokeBounds

▸ **__updateStrokeBounds**(`bounds?`): `void`

#### Parameters

| Name      | Type                            |
| :-------- | :------------------------------ |
| `bounds?` | [`IBoundsData`](IBoundsData.md) |

#### Returns

`void`

#### Inherited from

[ILeaf](ILeaf.md).[__updateStrokeBounds](ILeaf.md#__updatestrokebounds)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:619](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/display/ILeaf.ts#L619)

___

### \_\_updateRenderBounds

▸ **__updateRenderBounds**(`bounds?`): `void`

#### Parameters

| Name      | Type                            |
| :-------- | :------------------------------ |
| `bounds?` | [`IBoundsData`](IBoundsData.md) |

#### Returns

`void`

#### Inherited from

[ILeaf](ILeaf.md).[__updateRenderBounds](ILeaf.md#__updaterenderbounds)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:620](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/display/ILeaf.ts#L620)

___

### \_\_updateAutoLayout

▸ **__updateAutoLayout**(): `void`

#### Returns

`void`

#### Inherited from

[ILeaf](ILeaf.md).[__updateAutoLayout](ILeaf.md#__updateautolayout)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:622](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/display/ILeaf.ts#L622)

___

### \_\_updateFlowLayout

▸ **__updateFlowLayout**(): `void`

#### Returns

`void`

#### Inherited from

[ILeaf](ILeaf.md).[__updateFlowLayout](ILeaf.md#__updateflowlayout)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:623](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/display/ILeaf.ts#L623)

___

### \_\_updateNaturalSize

▸ **__updateNaturalSize**(): `void`

#### Returns

`void`

#### Inherited from

[ILeaf](ILeaf.md).[__updateNaturalSize](ILeaf.md#__updatenaturalsize)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:624](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/display/ILeaf.ts#L624)

___

### \_\_updateStrokeSpread

▸ **__updateStrokeSpread**(): [`IFourNumber`](../modules.md#ifournumber)

#### Returns

[`IFourNumber`](../modules.md#ifournumber)

#### Inherited from

[ILeaf](ILeaf.md).[__updateStrokeSpread](ILeaf.md#__updatestrokespread)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:626](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/display/ILeaf.ts#L626)

___

### \_\_updateRenderSpread

▸ **__updateRenderSpread**(): [`IFourNumber`](../modules.md#ifournumber)

#### Returns

[`IFourNumber`](../modules.md#ifournumber)

#### Inherited from

[ILeaf](ILeaf.md).[__updateRenderSpread](ILeaf.md#__updaterenderspread)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:627](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/display/ILeaf.ts#L627)

___

### \_\_onUpdateSize

▸ **__onUpdateSize**(): `void`

#### Returns

`void`

#### Inherited from

[ILeaf](ILeaf.md).[__onUpdateSize](ILeaf.md#__onupdatesize)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:629](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/display/ILeaf.ts#L629)

___

### \_\_updateEraser

▸ **__updateEraser**(`value?`): `void`

#### Parameters

| Name     | Type      |
| :------- | :-------- |
| `value?` | `boolean` |

#### Returns

`void`

#### Inherited from

[ILeaf](ILeaf.md).[__updateEraser](ILeaf.md#__updateeraser)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:632](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/display/ILeaf.ts#L632)

___

### \_\_updateMask

▸ **__updateMask**(`value?`): `void`

#### Parameters

| Name     | Type      |
| :------- | :-------- |
| `value?` | `boolean` |

#### Returns

`void`

#### Inherited from

[ILeaf](ILeaf.md).[__updateMask](ILeaf.md#__updatemask)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:633](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/display/ILeaf.ts#L633)

___

### \_\_renderMask

▸ **__renderMask**(`canvas`, `options`): `void`

#### Parameters

| Name      | Type                                  |
| :-------- | :------------------------------------ |
| `canvas`  | [`ILeaferCanvas`](ILeaferCanvas.md)   |
| `options` | [`IRenderOptions`](IRenderOptions.md) |

#### Returns

`void`

#### Inherited from

[ILeaf](ILeaf.md).[__renderMask](ILeaf.md#__rendermask)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:634](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/display/ILeaf.ts#L634)

___

### \_\_renderEraser

▸ **__renderEraser**(`canvas`, `options`): `void`

#### Parameters

| Name      | Type                                  |
| :-------- | :------------------------------------ |
| `canvas`  | [`ILeaferCanvas`](ILeaferCanvas.md)   |
| `options` | [`IRenderOptions`](IRenderOptions.md) |

#### Returns

`void`

#### Inherited from

[ILeaf](ILeaf.md).[__renderEraser](ILeaf.md#__rendereraser)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:635](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/display/ILeaf.ts#L635)

___

### \_\_getNowWorld

▸ **__getNowWorld**(`options`): [`IMatrixWithBoundsScaleData`](IMatrixWithBoundsScaleData.md)

#### Parameters

| Name      | Type                                  |
| :-------- | :------------------------------------ |
| `options` | [`IRenderOptions`](IRenderOptions.md) |

#### Returns

[`IMatrixWithBoundsScaleData`](IMatrixWithBoundsScaleData.md)

#### Inherited from

[ILeaf](ILeaf.md).[__getNowWorld](ILeaf.md#__getnowworld)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:638](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/display/ILeaf.ts#L638)

___

### getClampRenderScale

▸ **getClampRenderScale**(): `number`

#### Returns

`number`

#### Inherited from

[ILeaf](ILeaf.md).[getClampRenderScale](ILeaf.md#getclamprenderscale)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:639](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/display/ILeaf.ts#L639)

___

### getRenderScaleData

▸ **getRenderScaleData**(`abs?`, `scaleFixed?`, `unscale?`): [`IScaleData`](IScaleData.md)

#### Parameters

| Name          | Type                                       |
| :------------ | :----------------------------------------- |
| `abs?`        | `boolean`                                  |
| `scaleFixed?` | [`IScaleFixed`](../modules.md#iscalefixed) |
| `unscale?`    | `boolean`                                  |

#### Returns

[`IScaleData`](IScaleData.md)

#### Inherited from

[ILeaf](ILeaf.md).[getRenderScaleData](ILeaf.md#getrenderscaledata)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:640](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/display/ILeaf.ts#L640)

___

### getTransform

▸ **getTransform**(`relative?`): [`IMatrixData`](IMatrixData.md)

#### Parameters

| Name        | Type                                                                    |
| :---------- | :---------------------------------------------------------------------- |
| `relative?` | [`ILeaf`](ILeaf.md) \\| [`ILocationType`](../modules.md#ilocationtype) |

#### Returns

[`IMatrixData`](IMatrixData.md)

#### Inherited from

[ILeaf](ILeaf.md).[getTransform](ILeaf.md#gettransform)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:642](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/display/ILeaf.ts#L642)

___

### getBounds

▸ **getBounds**(`type?`, `relative?`): [`IBoundsData`](IBoundsData.md)

#### Parameters

| Name        | Type                                                                    |
| :---------- | :---------------------------------------------------------------------- |
| `type?`     | [`IBoundsType`](../modules.md#iboundstype)                              |
| `relative?` | [`ILeaf`](ILeaf.md) \\| [`ILocationType`](../modules.md#ilocationtype) |

#### Returns

[`IBoundsData`](IBoundsData.md)

#### Inherited from

[ILeaf](ILeaf.md).[getBounds](ILeaf.md#getbounds)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:644](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/display/ILeaf.ts#L644)

___

### getLayoutBounds

▸ **getLayoutBounds**(`type?`, `relative?`, `unscale?`): [`ILayoutBoundsData`](ILayoutBoundsData.md)

#### Parameters

| Name        | Type                                                                    |
| :---------- | :---------------------------------------------------------------------- |
| `type?`     | [`IBoundsType`](../modules.md#iboundstype)                              |
| `relative?` | [`ILeaf`](ILeaf.md) \\| [`ILocationType`](../modules.md#ilocationtype) |
| `unscale?`  | `boolean`                                                               |

#### Returns

[`ILayoutBoundsData`](ILayoutBoundsData.md)

#### Inherited from

[ILeaf](ILeaf.md).[getLayoutBounds](ILeaf.md#getlayoutbounds)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:645](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/display/ILeaf.ts#L645)

___

### getLayoutPoints

▸ **getLayoutPoints**(`type?`, `relative?`): [`IPointData`](IPointData.md)[]

#### Parameters

| Name        | Type                                                                    |
| :---------- | :---------------------------------------------------------------------- |
| `type?`     | [`IBoundsType`](../modules.md#iboundstype)                              |
| `relative?` | [`ILeaf`](ILeaf.md) \\| [`ILocationType`](../modules.md#ilocationtype) |

#### Returns

[`IPointData`](IPointData.md)[]

#### Inherited from

[ILeaf](ILeaf.md).[getLayoutPoints](ILeaf.md#getlayoutpoints)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:646](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/display/ILeaf.ts#L646)

___

### getWorldBounds

▸ **getWorldBounds**(`inner`, `relative?`, `change?`): [`IBoundsData`](IBoundsData.md)

#### Parameters

| Name        | Type                            |
| :---------- | :------------------------------ |
| `inner`     | [`IBoundsData`](IBoundsData.md) |
| `relative?` | [`ILeaf`](ILeaf.md)             |
| `change?`   | `boolean`                       |

#### Returns

[`IBoundsData`](IBoundsData.md)

#### Inherited from

[ILeaf](ILeaf.md).[getWorldBounds](ILeaf.md#getworldbounds)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:648](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/display/ILeaf.ts#L648)

___

### worldToLocal

▸ **worldToLocal**(`world`, `to?`, `distance?`, `relative?`): `void`

#### Parameters

| Name        | Type                          |
| :---------- | :---------------------------- |
| `world`     | [`IPointData`](IPointData.md) |
| `to?`       | [`IPointData`](IPointData.md) |
| `distance?` | `boolean`                     |
| `relative?` | [`ILeaf`](ILeaf.md)           |

#### Returns

`void`

#### Inherited from

[ILeaf](ILeaf.md).[worldToLocal](ILeaf.md#worldtolocal)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:650](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/display/ILeaf.ts#L650)

___

### localToWorld

▸ **localToWorld**(`local`, `to?`, `distance?`, `relative?`): `void`

#### Parameters

| Name        | Type                          |
| :---------- | :---------------------------- |
| `local`     | [`IPointData`](IPointData.md) |
| `to?`       | [`IPointData`](IPointData.md) |
| `distance?` | `boolean`                     |
| `relative?` | [`ILeaf`](ILeaf.md)           |

#### Returns

`void`

#### Inherited from

[ILeaf](ILeaf.md).[localToWorld](ILeaf.md#localtoworld)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:651](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/display/ILeaf.ts#L651)

___

### worldToInner

▸ **worldToInner**(`world`, `to?`, `distance?`, `relative?`): `void`

#### Parameters

| Name        | Type                          |
| :---------- | :---------------------------- |
| `world`     | [`IPointData`](IPointData.md) |
| `to?`       | [`IPointData`](IPointData.md) |
| `distance?` | `boolean`                     |
| `relative?` | [`ILeaf`](ILeaf.md)           |

#### Returns

`void`

#### Inherited from

[ILeaf](ILeaf.md).[worldToInner](ILeaf.md#worldtoinner)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:652](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/display/ILeaf.ts#L652)

___

### innerToWorld

▸ **innerToWorld**(`inner`, `to?`, `distance?`, `relative?`): `void`

#### Parameters

| Name        | Type                          |
| :---------- | :---------------------------- |
| `inner`     | [`IPointData`](IPointData.md) |
| `to?`       | [`IPointData`](IPointData.md) |
| `distance?` | `boolean`                     |
| `relative?` | [`ILeaf`](ILeaf.md)           |

#### Returns

`void`

#### Inherited from

[ILeaf](ILeaf.md).[innerToWorld](ILeaf.md#innertoworld)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:653](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/display/ILeaf.ts#L653)

___

### getBoxPoint

▸ **getBoxPoint**(`world`, `relative?`, `distance?`, `change?`): [`IPointData`](IPointData.md)

#### Parameters

| Name        | Type                          |
| :---------- | :---------------------------- |
| `world`     | [`IPointData`](IPointData.md) |
| `relative?` | [`ILeaf`](ILeaf.md)           |
| `distance?` | `boolean`                     |
| `change?`   | `boolean`                     |

#### Returns

[`IPointData`](IPointData.md)

#### Inherited from

[ILeaf](ILeaf.md).[getBoxPoint](ILeaf.md#getboxpoint)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:655](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/display/ILeaf.ts#L655)

___

### getBoxPointByInner

▸ **getBoxPointByInner**(`inner`, `relative?`, `distance?`, `change?`): [`IPointData`](IPointData.md)

#### Parameters

| Name        | Type                          |
| :---------- | :---------------------------- |
| `inner`     | [`IPointData`](IPointData.md) |
| `relative?` | [`ILeaf`](ILeaf.md)           |
| `distance?` | `boolean`                     |
| `change?`   | `boolean`                     |

#### Returns

[`IPointData`](IPointData.md)

#### Inherited from

[ILeaf](ILeaf.md).[getBoxPointByInner](ILeaf.md#getboxpointbyinner)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:656](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/display/ILeaf.ts#L656)

___

### getInnerPoint

▸ **getInnerPoint**(`world`, `relative?`, `distance?`, `change?`): [`IPointData`](IPointData.md)

#### Parameters

| Name        | Type                          |
| :---------- | :---------------------------- |
| `world`     | [`IPointData`](IPointData.md) |
| `relative?` | [`ILeaf`](ILeaf.md)           |
| `distance?` | `boolean`                     |
| `change?`   | `boolean`                     |

#### Returns

[`IPointData`](IPointData.md)

#### Inherited from

[ILeaf](ILeaf.md).[getInnerPoint](ILeaf.md#getinnerpoint)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:657](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/display/ILeaf.ts#L657)

___

### getInnerPointByBox

▸ **getInnerPointByBox**(`box`, `relative?`, `distance?`, `change?`): [`IPointData`](IPointData.md)

#### Parameters

| Name        | Type                          |
| :---------- | :---------------------------- |
| `box`       | [`IPointData`](IPointData.md) |
| `relative?` | [`ILeaf`](ILeaf.md)           |
| `distance?` | `boolean`                     |
| `change?`   | `boolean`                     |

#### Returns

[`IPointData`](IPointData.md)

#### Inherited from

[ILeaf](ILeaf.md).[getInnerPointByBox](ILeaf.md#getinnerpointbybox)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:658](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/display/ILeaf.ts#L658)

___

### getInnerPointByLocal

▸ **getInnerPointByLocal**(`local`, `relative?`, `distance?`, `change?`): [`IPointData`](IPointData.md)

#### Parameters

| Name        | Type                          |
| :---------- | :---------------------------- |
| `local`     | [`IPointData`](IPointData.md) |
| `relative?` | [`ILeaf`](ILeaf.md)           |
| `distance?` | `boolean`                     |
| `change?`   | `boolean`                     |

#### Returns

[`IPointData`](IPointData.md)

#### Inherited from

[ILeaf](ILeaf.md).[getInnerPointByLocal](ILeaf.md#getinnerpointbylocal)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:659](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/display/ILeaf.ts#L659)

___

### getLocalPoint

▸ **getLocalPoint**(`world`, `relative?`, `distance?`, `change?`): [`IPointData`](IPointData.md)

#### Parameters

| Name        | Type                          |
| :---------- | :---------------------------- |
| `world`     | [`IPointData`](IPointData.md) |
| `relative?` | [`ILeaf`](ILeaf.md)           |
| `distance?` | `boolean`                     |
| `change?`   | `boolean`                     |

#### Returns

[`IPointData`](IPointData.md)

#### Inherited from

[ILeaf](ILeaf.md).[getLocalPoint](ILeaf.md#getlocalpoint)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:660](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/display/ILeaf.ts#L660)

___

### getLocalPointByInner

▸ **getLocalPointByInner**(`inner`, `relative?`, `distance?`, `change?`): [`IPointData`](IPointData.md)

#### Parameters

| Name        | Type                          |
| :---------- | :---------------------------- |
| `inner`     | [`IPointData`](IPointData.md) |
| `relative?` | [`ILeaf`](ILeaf.md)           |
| `distance?` | `boolean`                     |
| `change?`   | `boolean`                     |

#### Returns

[`IPointData`](IPointData.md)

#### Inherited from

[ILeaf](ILeaf.md).[getLocalPointByInner](ILeaf.md#getlocalpointbyinner)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:661](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/display/ILeaf.ts#L661)

___

### getPagePoint

▸ **getPagePoint**(`world`, `relative?`, `distance?`, `change?`): [`IPointData`](IPointData.md)

#### Parameters

| Name        | Type                          |
| :---------- | :---------------------------- |
| `world`     | [`IPointData`](IPointData.md) |
| `relative?` | [`ILeaf`](ILeaf.md)           |
| `distance?` | `boolean`                     |
| `change?`   | `boolean`                     |

#### Returns

[`IPointData`](IPointData.md)

#### Inherited from

[ILeaf](ILeaf.md).[getPagePoint](ILeaf.md#getpagepoint)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:662](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/display/ILeaf.ts#L662)

___

### getWorldPoint

▸ **getWorldPoint**(`inner`, `relative?`, `distance?`, `change?`): [`IPointData`](IPointData.md)

#### Parameters

| Name        | Type                          |
| :---------- | :---------------------------- |
| `inner`     | [`IPointData`](IPointData.md) |
| `relative?` | [`ILeaf`](ILeaf.md)           |
| `distance?` | `boolean`                     |
| `change?`   | `boolean`                     |

#### Returns

[`IPointData`](IPointData.md)

#### Inherited from

[ILeaf](ILeaf.md).[getWorldPoint](ILeaf.md#getworldpoint)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:663](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/display/ILeaf.ts#L663)

___

### getWorldPointByBox

▸ **getWorldPointByBox**(`box`, `relative?`, `distance?`, `change?`): [`IPointData`](IPointData.md)

#### Parameters

| Name        | Type                          |
| :---------- | :---------------------------- |
| `box`       | [`IPointData`](IPointData.md) |
| `relative?` | [`ILeaf`](ILeaf.md)           |
| `distance?` | `boolean`                     |
| `change?`   | `boolean`                     |

#### Returns

[`IPointData`](IPointData.md)

#### Inherited from

[ILeaf](ILeaf.md).[getWorldPointByBox](ILeaf.md#getworldpointbybox)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:664](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/display/ILeaf.ts#L664)

___

### getWorldPointByLocal

▸ **getWorldPointByLocal**(`local`, `relative?`, `distance?`, `change?`): [`IPointData`](IPointData.md)

#### Parameters

| Name        | Type                          |
| :---------- | :---------------------------- |
| `local`     | [`IPointData`](IPointData.md) |
| `relative?` | [`ILeaf`](ILeaf.md)           |
| `distance?` | `boolean`                     |
| `change?`   | `boolean`                     |

#### Returns

[`IPointData`](IPointData.md)

#### Inherited from

[ILeaf](ILeaf.md).[getWorldPointByLocal](ILeaf.md#getworldpointbylocal)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:665](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/display/ILeaf.ts#L665)

___

### getWorldPointByPage

▸ **getWorldPointByPage**(`page`, `relative?`, `distance?`, `change?`): [`IPointData`](IPointData.md)

#### Parameters

| Name        | Type                          |
| :---------- | :---------------------------- |
| `page`      | [`IPointData`](IPointData.md) |
| `relative?` | [`ILeaf`](ILeaf.md)           |
| `distance?` | `boolean`                     |
| `change?`   | `boolean`                     |

#### Returns

[`IPointData`](IPointData.md)

#### Inherited from

[ILeaf](ILeaf.md).[getWorldPointByPage](ILeaf.md#getworldpointbypage)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:666](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/display/ILeaf.ts#L666)

___

### setTransform

▸ **setTransform**(`transform?`, `resize?`, `transition?`): `void`

#### Parameters

| Name          | Type                                       |
| :------------ | :----------------------------------------- |
| `transform?`  | [`IMatrixData`](IMatrixData.md)            |
| `resize?`     | `boolean`                                  |
| `transition?` | [`ITransition`](../modules.md#itransition) |

#### Returns

`void`

#### Inherited from

[ILeaf](ILeaf.md).[setTransform](ILeaf.md#settransform)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:669](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/display/ILeaf.ts#L669)

___

### transform

▸ **transform**(`transform?`, `resize?`, `transition?`): `void`

#### Parameters

| Name          | Type                                       |
| :------------ | :----------------------------------------- |
| `transform?`  | [`IMatrixData`](IMatrixData.md)            |
| `resize?`     | `boolean`                                  |
| `transition?` | [`ITransition`](../modules.md#itransition) |

#### Returns

`void`

#### Inherited from

[ILeaf](ILeaf.md).[transform](ILeaf.md#transform)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:670](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/display/ILeaf.ts#L670)

___

### move

▸ **move**(`x`, `y?`, `transition?`): `void`

#### Parameters

| Name          | Type                                        |
| :------------ | :------------------------------------------ |
| `x`           | `number` \\| [`IPointData`](IPointData.md) |
| `y?`          | `number`                                    |
| `transition?` | [`ITransition`](../modules.md#itransition)  |

#### Returns

`void`

#### Inherited from

[ILeaf](ILeaf.md).[move](ILeaf.md#move)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:671](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/display/ILeaf.ts#L671)

___

### moveInner

▸ **moveInner**(`x`, `y?`, `transition?`): `void`

#### Parameters

| Name          | Type                                        |
| :------------ | :------------------------------------------ |
| `x`           | `number` \\| [`IPointData`](IPointData.md) |
| `y?`          | `number`                                    |
| `transition?` | [`ITransition`](../modules.md#itransition)  |

#### Returns

`void`

#### Inherited from

[ILeaf](ILeaf.md).[moveInner](ILeaf.md#moveinner)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:673](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/display/ILeaf.ts#L673)

___

### scaleOf

▸ **scaleOf**(`origin`, `scaleX`, `scaleY?`, `resize?`, `transition?`): `void`

#### Parameters

| Name          | Type                                                                        |
| :------------ | :-------------------------------------------------------------------------- |
| `origin`      | [`IPointData`](IPointData.md) \\| [`IDirection`](../modules.md#idirection) |
| `scaleX`      | `number`                                                                    |
| `scaleY?`     | [`ITransition`](../modules.md#itransition)                                  |
| `resize?`     | `boolean`                                                                   |
| `transition?` | [`ITransition`](../modules.md#itransition)                                  |

#### Returns

`void`

#### Inherited from

[ILeaf](ILeaf.md).[scaleOf](ILeaf.md#scaleof)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:674](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/display/ILeaf.ts#L674)

___

### rotateOf

▸ **rotateOf**(`origin`, `rotation`, `transition?`): `void`

#### Parameters

| Name          | Type                                                                        |
| :------------ | :-------------------------------------------------------------------------- |
| `origin`      | [`IPointData`](IPointData.md) \\| [`IDirection`](../modules.md#idirection) |
| `rotation`    | `number`                                                                    |
| `transition?` | [`ITransition`](../modules.md#itransition)                                  |

#### Returns

`void`

#### Inherited from

[ILeaf](ILeaf.md).[rotateOf](ILeaf.md#rotateof)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:675](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/display/ILeaf.ts#L675)

___

### skewOf

▸ **skewOf**(`origin`, `skewX`, `skewY?`, `resize?`, `transition?`): `void`

#### Parameters

| Name          | Type                                                                        |
| :------------ | :-------------------------------------------------------------------------- |
| `origin`      | [`IPointData`](IPointData.md) \\| [`IDirection`](../modules.md#idirection) |
| `skewX`       | `number`                                                                    |
| `skewY?`      | `number`                                                                    |
| `resize?`     | `boolean`                                                                   |
| `transition?` | [`ITransition`](../modules.md#itransition)                                  |

#### Returns

`void`

#### Inherited from

[ILeaf](ILeaf.md).[skewOf](ILeaf.md#skewof)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:676](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/display/ILeaf.ts#L676)

___

### transformWorld

▸ **transformWorld**(`worldTransform?`, `resize?`, `transition?`): `void`

#### Parameters

| Name              | Type                                       |
| :---------------- | :----------------------------------------- |
| `worldTransform?` | [`IMatrixData`](IMatrixData.md)            |
| `resize?`         | `boolean`                                  |
| `transition?`     | [`ITransition`](../modules.md#itransition) |

#### Returns

`void`

#### Inherited from

[ILeaf](ILeaf.md).[transformWorld](ILeaf.md#transformworld)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:678](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/display/ILeaf.ts#L678)

___

### moveWorld

▸ **moveWorld**(`x`, `y?`, `transition?`): `void`

#### Parameters

| Name          | Type                                        |
| :------------ | :------------------------------------------ |
| `x`           | `number` \\| [`IPointData`](IPointData.md) |
| `y?`          | `number`                                    |
| `transition?` | [`ITransition`](../modules.md#itransition)  |

#### Returns

`void`

#### Inherited from

[ILeaf](ILeaf.md).[moveWorld](ILeaf.md#moveworld)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:679](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/display/ILeaf.ts#L679)

___

### scaleOfWorld

▸ **scaleOfWorld**(`worldOrigin`, `scaleX`, `scaleY?`, `resize?`, `transition?`): `void`

#### Parameters

| Name          | Type                                       |
| :------------ | :----------------------------------------- |
| `worldOrigin` | [`IPointData`](IPointData.md)              |
| `scaleX`      | `number`                                   |
| `scaleY?`     | [`ITransition`](../modules.md#itransition) |
| `resize?`     | `boolean`                                  |
| `transition?` | [`ITransition`](../modules.md#itransition) |

#### Returns

`void`

#### Inherited from

[ILeaf](ILeaf.md).[scaleOfWorld](ILeaf.md#scaleofworld)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:680](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/display/ILeaf.ts#L680)

___

### rotateOfWorld

▸ **rotateOfWorld**(`worldOrigin`, `rotation`, `transition?`): `void`

#### Parameters

| Name          | Type                                       |
| :------------ | :----------------------------------------- |
| `worldOrigin` | [`IPointData`](IPointData.md)              |
| `rotation`    | `number`                                   |
| `transition?` | [`ITransition`](../modules.md#itransition) |

#### Returns

`void`

#### Inherited from

[ILeaf](ILeaf.md).[rotateOfWorld](ILeaf.md#rotateofworld)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:681](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/display/ILeaf.ts#L681)

___

### skewOfWorld

▸ **skewOfWorld**(`worldOrigin`, `skewX`, `skewY?`, `resize?`, `transition?`): `void`

#### Parameters

| Name          | Type                                       |
| :------------ | :----------------------------------------- |
| `worldOrigin` | [`IPointData`](IPointData.md)              |
| `skewX`       | `number`                                   |
| `skewY?`      | `number`                                   |
| `resize?`     | `boolean`                                  |
| `transition?` | [`ITransition`](../modules.md#itransition) |

#### Returns

`void`

#### Inherited from

[ILeaf](ILeaf.md).[skewOfWorld](ILeaf.md#skewofworld)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:682](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/display/ILeaf.ts#L682)

___

### flip

▸ **flip**(`axis`, `transition?`): `void`

#### Parameters

| Name          | Type                                       |
| :------------ | :----------------------------------------- |
| `axis`        | [`IAxis`](../modules.md#iaxis)             |
| `transition?` | [`ITransition`](../modules.md#itransition) |

#### Returns

`void`

#### Inherited from

[ILeaf](ILeaf.md).[flip](ILeaf.md#flip)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:684](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/display/ILeaf.ts#L684)

___

### scaleResize

▸ **scaleResize**(`scaleX`, `scaleY`, `noResize?`): `void`

#### Parameters

| Name        | Type      |
| :---------- | :-------- |
| `scaleX`    | `number`  |
| `scaleY`    | `number`  |
| `noResize?` | `boolean` |

#### Returns

`void`

#### Inherited from

[ILeaf](ILeaf.md).[scaleResize](ILeaf.md#scaleresize)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:686](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/display/ILeaf.ts#L686)

___

### \_\_scaleResize

▸ **__scaleResize**(`scaleX`, `scaleY`): `void`

#### Parameters

| Name     | Type     |
| :------- | :------- |
| `scaleX` | `number` |
| `scaleY` | `number` |

#### Returns

`void`

#### Inherited from

[ILeaf](ILeaf.md).[__scaleResize](ILeaf.md#__scaleresize)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:687](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/display/ILeaf.ts#L687)

___

### resizeWidth

▸ **resizeWidth**(`width`): `void`

#### Parameters

| Name    | Type     |
| :------ | :------- |
| `width` | `number` |

#### Returns

`void`

#### Inherited from

[ILeaf](ILeaf.md).[resizeWidth](ILeaf.md#resizewidth)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:689](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/display/ILeaf.ts#L689)

___

### resizeHeight

▸ **resizeHeight**(`height`): `void`

#### Parameters

| Name     | Type     |
| :------- | :------- |
| `height` | `number` |

#### Returns

`void`

#### Inherited from

[ILeaf](ILeaf.md).[resizeHeight](ILeaf.md#resizeheight)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:690](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/display/ILeaf.ts#L690)

___

### hit

▸ **hit**(`world`, `hitRadius?`): `boolean`

#### Parameters

| Name         | Type                          |
| :----------- | :---------------------------- |
| `world`      | [`IPointData`](IPointData.md) |
| `hitRadius?` | `number`                      |

#### Returns

`boolean`

#### Inherited from

[ILeaf](ILeaf.md).[hit](ILeaf.md#hit)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:693](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/display/ILeaf.ts#L693)

___

### \_\_hitWorld

▸ **__hitWorld**(`point`, `forceHitFill?`): `boolean`

#### Parameters

| Name            | Type                                      |
| :-------------- | :---------------------------------------- |
| `point`         | [`IRadiusPointData`](IRadiusPointData.md) |
| `forceHitFill?` | `boolean`                                 |

#### Returns

`boolean`

#### Inherited from

[ILeaf](ILeaf.md).[__hitWorld](ILeaf.md#__hitworld)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:694](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/display/ILeaf.ts#L694)

___

### \_\_hit

▸ **__hit**(`local`, `forceHitFill?`): `boolean`

#### Parameters

| Name            | Type                                      |
| :-------------- | :---------------------------------------- |
| `local`         | [`IRadiusPointData`](IRadiusPointData.md) |
| `forceHitFill?` | `boolean`                                 |

#### Returns

`boolean`

#### Inherited from

[ILeaf](ILeaf.md).[__hit](ILeaf.md#__hit)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:695](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/display/ILeaf.ts#L695)

___

### \_\_hitFill

▸ **__hitFill**(`inner`): `boolean`

#### Parameters

| Name    | Type                                      |
| :------ | :---------------------------------------- |
| `inner` | [`IRadiusPointData`](IRadiusPointData.md) |

#### Returns

`boolean`

#### Inherited from

[ILeaf](ILeaf.md).[__hitFill](ILeaf.md#__hitfill)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:696](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/display/ILeaf.ts#L696)

___

### \_\_hitStroke

▸ **__hitStroke**(`inner`, `strokeWidth`): `boolean`

#### Parameters

| Name          | Type                                      |
| :------------ | :---------------------------------------- |
| `inner`       | [`IRadiusPointData`](IRadiusPointData.md) |
| `strokeWidth` | `number`                                  |

#### Returns

`boolean`

#### Inherited from

[ILeaf](ILeaf.md).[__hitStroke](ILeaf.md#__hitstroke)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:697](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/display/ILeaf.ts#L697)

___

### \_\_hitPixel

▸ **__hitPixel**(`inner`): `boolean`

#### Parameters

| Name    | Type                                      |
| :------ | :---------------------------------------- |
| `inner` | [`IRadiusPointData`](IRadiusPointData.md) |

#### Returns

`boolean`

#### Inherited from

[ILeaf](ILeaf.md).[__hitPixel](ILeaf.md#__hitpixel)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:698](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/display/ILeaf.ts#L698)

___

### \_\_drawHitPath

▸ **__drawHitPath**(`canvas`): `void`

#### Parameters

| Name     | Type                                |
| :------- | :---------------------------------- |
| `canvas` | [`ILeaferCanvas`](ILeaferCanvas.md) |

#### Returns

`void`

#### Inherited from

[ILeaf](ILeaf.md).[__drawHitPath](ILeaf.md#__drawhitpath)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:699](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/display/ILeaf.ts#L699)

___

### \_\_updateHitCanvas

▸ **__updateHitCanvas**(): `void`

#### Returns

`void`

#### Inherited from

[ILeaf](ILeaf.md).[__updateHitCanvas](ILeaf.md#__updatehitcanvas)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:700](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/display/ILeaf.ts#L700)

___

### \_\_render

▸ **__render**(`canvas`, `options`): `void`

#### Parameters

| Name      | Type                                  |
| :-------- | :------------------------------------ |
| `canvas`  | [`ILeaferCanvas`](ILeaferCanvas.md)   |
| `options` | [`IRenderOptions`](IRenderOptions.md) |

#### Returns

`void`

#### Inherited from

[ILeaf](ILeaf.md).[__render](ILeaf.md#__render)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:703](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/display/ILeaf.ts#L703)

___

### \_\_drawFast

▸ **__drawFast**(`canvas`, `options`): `void`

#### Parameters

| Name      | Type                                  |
| :-------- | :------------------------------------ |
| `canvas`  | [`ILeaferCanvas`](ILeaferCanvas.md)   |
| `options` | [`IRenderOptions`](IRenderOptions.md) |

#### Returns

`void`

#### Inherited from

[ILeaf](ILeaf.md).[__drawFast](ILeaf.md#__drawfast)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:704](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/display/ILeaf.ts#L704)

___

### \_\_draw

▸ **__draw**(`canvas`, `options`, `originCanvas?`): `void`

#### Parameters

| Name            | Type                                  |
| :-------------- | :------------------------------------ |
| `canvas`        | [`ILeaferCanvas`](ILeaferCanvas.md)   |
| `options`       | [`IRenderOptions`](IRenderOptions.md) |
| `originCanvas?` | [`ILeaferCanvas`](ILeaferCanvas.md)   |

#### Returns

`void`

#### Inherited from

[ILeaf](ILeaf.md).[__draw](ILeaf.md#__draw)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:705](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/display/ILeaf.ts#L705)

___

### \_\_clip

▸ **__clip**(`canvas`, `options`): `void`

#### Parameters

| Name      | Type                                  |
| :-------- | :------------------------------------ |
| `canvas`  | [`ILeaferCanvas`](ILeaferCanvas.md)   |
| `options` | [`IRenderOptions`](IRenderOptions.md) |

#### Returns

`void`

#### Inherited from

[ILeaf](ILeaf.md).[__clip](ILeaf.md#__clip)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:707](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/display/ILeaf.ts#L707)

___

### \_\_renderShape

▸ **__renderShape**(`canvas`, `options`): `void`

#### Parameters

| Name      | Type                                  |
| :-------- | :------------------------------------ |
| `canvas`  | [`ILeaferCanvas`](ILeaferCanvas.md)   |
| `options` | [`IRenderOptions`](IRenderOptions.md) |

#### Returns

`void`

#### Inherited from

[ILeaf](ILeaf.md).[__renderShape](ILeaf.md#__rendershape)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:708](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/display/ILeaf.ts#L708)

___

### \_\_drawShape

▸ **__drawShape**(`canvas`, `options`): `void`

#### Parameters

| Name      | Type                                  |
| :-------- | :------------------------------------ |
| `canvas`  | [`ILeaferCanvas`](ILeaferCanvas.md)   |
| `options` | [`IRenderOptions`](IRenderOptions.md) |

#### Returns

`void`

#### Inherited from

[ILeaf](ILeaf.md).[__drawShape](ILeaf.md#__drawshape)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:709](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/display/ILeaf.ts#L709)

___

### \_\_updateWorldOpacity

▸ **__updateWorldOpacity**(): `void`

#### Returns

`void`

#### Inherited from

[ILeaf](ILeaf.md).[__updateWorldOpacity](ILeaf.md#__updateworldopacity)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:711](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/display/ILeaf.ts#L711)

___

### \_\_updateChange

▸ **__updateChange**(): `void`

#### Returns

`void`

#### Inherited from

[ILeaf](ILeaf.md).[__updateChange](ILeaf.md#__updatechange)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:712](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/display/ILeaf.ts#L712)

___

### \_\_drawPath

▸ **__drawPath**(`canvas`): `void`

#### Parameters

| Name     | Type                                |
| :------- | :---------------------------------- |
| `canvas` | [`ILeaferCanvas`](ILeaferCanvas.md) |

#### Returns

`void`

#### Inherited from

[ILeaf](ILeaf.md).[__drawPath](ILeaf.md#__drawpath)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:715](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/display/ILeaf.ts#L715)

___

### \_\_drawRenderPath

▸ **__drawRenderPath**(`canvas`): `void`

#### Parameters

| Name     | Type                                |
| :------- | :---------------------------------- |
| `canvas` | [`ILeaferCanvas`](ILeaferCanvas.md) |

#### Returns

`void`

#### Inherited from

[ILeaf](ILeaf.md).[__drawRenderPath](ILeaf.md#__drawrenderpath)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:716](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/display/ILeaf.ts#L716)

___

### \_\_updatePath

▸ **__updatePath**(): `void`

#### Returns

`void`

#### Inherited from

[ILeaf](ILeaf.md).[__updatePath](ILeaf.md#__updatepath)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:717](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/display/ILeaf.ts#L717)

___

### \_\_updateRenderPath

▸ **__updateRenderPath**(`updateCache?`): `void`

#### Parameters

| Name           | Type      |
| :------------- | :-------- |
| `updateCache?` | `boolean` |

#### Returns

`void`

#### Inherited from

[ILeaf](ILeaf.md).[__updateRenderPath](ILeaf.md#__updaterenderpath)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:718](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/display/ILeaf.ts#L718)

___

### getMotionPathData

▸ **getMotionPathData**(): [`IMotionPathData`](IMotionPathData.md)

#### Returns

[`IMotionPathData`](IMotionPathData.md)

#### Inherited from

[ILeaf](ILeaf.md).[getMotionPathData](ILeaf.md#getmotionpathdata)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:721](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/display/ILeaf.ts#L721)

___

### getMotionPoint

▸ **getMotionPoint**(`motionDistance`): [`IRotationPointData`](IRotationPointData.md)

#### Parameters

| Name             | Type                                      |
| :--------------- | :---------------------------------------- |
| `motionDistance` | `number` \\| [`IUnitData`](IUnitData.md) |

#### Returns

[`IRotationPointData`](IRotationPointData.md)

#### Inherited from

[ILeaf](ILeaf.md).[getMotionPoint](ILeaf.md#getmotionpoint)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:722](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/display/ILeaf.ts#L722)

___

### getMotionTotal

▸ **getMotionTotal**(): `number`

#### Returns

`number`

#### Inherited from

[ILeaf](ILeaf.md).[getMotionTotal](ILeaf.md#getmotiontotal)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:723](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/display/ILeaf.ts#L723)

___

### \_\_updateMotionPath

▸ **__updateMotionPath**(): `void`

#### Returns

`void`

#### Inherited from

[ILeaf](ILeaf.md).[__updateMotionPath](ILeaf.md#__updatemotionpath)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:725](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/display/ILeaf.ts#L725)

___

### \_\_runAnimation

▸ **__runAnimation**(`type`, `complete?`): `void`

#### Parameters

| Name        | Type                        |
| :---------- | :-------------------------- |
| `type`      | `"in"` \\| `"out"`         |
| `complete?` | [`IFunction`](IFunction.md) |

#### Returns

`void`

#### Inherited from

[ILeaf](ILeaf.md).[__runAnimation](ILeaf.md#__runanimation)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:727](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/display/ILeaf.ts#L727)

___

### \_\_emitLifeEvent

▸ **__emitLifeEvent**(`type`): `void`

#### Parameters

| Name   | Type     |
| :----- | :------- |
| `type` | `string` |

#### Returns

`void`

#### Inherited from

[ILeaf](ILeaf.md).[__emitLifeEvent](ILeaf.md#__emitlifeevent)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:729](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/display/ILeaf.ts#L729)

___

### \_\_updateSortChildren

▸ **__updateSortChildren**(): `void`

#### Returns

`void`

#### Inherited from

[ILeaf](ILeaf.md).[__updateSortChildren](ILeaf.md#__updatesortchildren)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:735](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/display/ILeaf.ts#L735)

___

### add

▸ **add**(`child`, `index?`): `void`

#### Parameters

| Name     | Type                                                                                                                                                                                                                                           |
| :------- | :--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `child`  | [`ILeaf`](ILeaf.md) \\| [`ILeaf`](ILeaf.md)[] \\| [`ILeafInputData`](ILeafInputData.md) \\| [`ILeafInputData`](ILeafInputData.md)[] |
| `index?` | `number`                                                                                                                                                                                                                                       |

#### Returns

`void`

#### Inherited from

[ILeaf](ILeaf.md).[add](ILeaf.md#add)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:736](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/display/ILeaf.ts#L736)

___

### remove

▸ **remove**(`child?`, `destroy?`): `void`

#### Parameters

| Name       | Type                                                                                 |
| :--------- | :----------------------------------------------------------------------------------- |
| `child?`   | `string` \\| `number` \\| [`ILeaf`](ILeaf.md) \\| [`IFindMethod`](IFindMethod.md) |
| `destroy?` | `boolean`                                                                            |

#### Returns

`void`

#### Inherited from

[ILeaf](ILeaf.md).[remove](ILeaf.md#remove)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:737](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/display/ILeaf.ts#L737)

___

### dropTo

▸ **dropTo**(`parent`, `index?`, `resize?`): `void`

#### Parameters

| Name      | Type                |
| :-------- | :------------------ |
| `parent`  | [`ILeaf`](ILeaf.md) |
| `index?`  | `number`            |
| `resize?` | `boolean`           |

#### Returns

`void`

#### Inherited from

[ILeaf](ILeaf.md).[dropTo](ILeaf.md#dropto)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:738](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/display/ILeaf.ts#L738)

___

### \_\_realSetAttr

▸ **__realSetAttr**(`name`, `newValue`): `void`

#### Parameters

| Name       | Type                             |
| :--------- | :------------------------------- |
| `name`     | `string`                         |
| `newValue` | [`IValue`](../modules.md#ivalue) |

#### Returns

`void`

#### Inherited from

[ILeaf](ILeaf.md).[__realSetAttr](ILeaf.md#__realsetattr)

#### Defined in

[src/leafer/packages/interface/src/display/module/ILeafDataProxy.ts:9](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/display/module/ILeafDataProxy.ts#L9)

___

### emitPropertyEvent

▸ **emitPropertyEvent**(`type`, `attrName`, `oldValue`, `newValue`): `void`

#### Parameters

| Name       | Type      |
| :--------- | :-------- |
| `type`     | `string`  |
| `attrName` | `string`  |
| `oldValue` | `unknown` |
| `newValue` | `unknown` |

#### Returns

`void`

#### Inherited from

[ILeaf](ILeaf.md).[emitPropertyEvent](ILeaf.md#emitpropertyevent)

#### Defined in

[src/leafer/packages/interface/src/display/module/ILeafDataProxy.ts:10](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/display/module/ILeafDataProxy.ts#L10)

___

### destroyEventer

▸ **destroyEventer**(): `void`

#### Returns

`void`

#### Inherited from

[ILeaf](ILeaf.md).[destroyEventer](ILeaf.md#destroyeventer)

#### Defined in

[src/leafer/packages/interface/src/display/module/ILeafEventer.ts:18](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/display/module/ILeafEventer.ts#L18)

___

### on

▸ **on**(`type`, `listener?`, `options?`): `void`

#### Parameters

| Name        | Type                                                                                                                                                                                                                              |
| :---------- | :-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `type`      | `string` \\| `string`[] \\| [`IEventParamsMap`](IEventParamsMap.md) \\| [`IEventParams`](../modules.md#ieventparams)[] |
| `listener?` | [`IFunction`](IFunction.md)                                                                                                                                                                                                       |
| `options?`  | [`IEventOption`](../modules.md#ieventoption)                                                                                                                                                                                      |

#### Returns

`void`

#### Inherited from

[ILeaf](ILeaf.md).[on](ILeaf.md#on)

#### Defined in

[src/leafer/packages/interface/src/event/IEventer.ts:49](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/event/IEventer.ts#L49)

___

### off

▸ **off**(`type?`, `listener?`, `options?`): `void`

#### Parameters

| Name        | Type                                                                         |
| :---------- | :--------------------------------------------------------------------------- |
| `type?`     | `string` \\| `string`[] |
| `listener?` | [`IFunction`](IFunction.md)                                                  |
| `options?`  | [`IEventOption`](../modules.md#ieventoption)                                 |

#### Returns

`void`

#### Inherited from

[ILeaf](ILeaf.md).[off](ILeaf.md#off)

#### Defined in

[src/leafer/packages/interface/src/event/IEventer.ts:50](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/event/IEventer.ts#L50)

___

### on\_

▸ **on_**(`type`, `listener?`, `bind?`, `options?`): [`IEventListenerId`](IEventListenerId.md)

#### Parameters

| Name        | Type                                                                                                                                                                                 |
| :---------- | :----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `type`      | `string` \\| `string`[] \\| [`IEventParams`](../modules.md#ieventparams)[] |
| `listener?` | [`IFunction`](IFunction.md)                                                                                                                                                          |
| `bind?`     | [`IObject`](IObject.md)                                                                                                                                                              |
| `options?`  | [`IEventOption`](../modules.md#ieventoption)                                                                                                                                         |

#### Returns

[`IEventListenerId`](IEventListenerId.md)

#### Inherited from

[ILeaf](ILeaf.md).[on_](ILeaf.md#on_)

#### Defined in

[src/leafer/packages/interface/src/event/IEventer.ts:51](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/event/IEventer.ts#L51)

___

### off\_

▸ **off_**(`id`): `void`

#### Parameters

| Name | Type                                                                                                                                           |
| :--- | :--------------------------------------------------------------------------------------------------------------------------------------------- |
| `id` | [`IEventListenerId`](IEventListenerId.md) \\| [`IEventListenerId`](IEventListenerId.md)[] |

#### Returns

`void`

#### Inherited from

[ILeaf](ILeaf.md).[off_](ILeaf.md#off_)

#### Defined in

[src/leafer/packages/interface/src/event/IEventer.ts:52](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/event/IEventer.ts#L52)

___

### once

▸ **once**(`type`, `listener?`, `captureOrBind?`, `capture?`): `void`

#### Parameters

| Name             | Type                                                                                                                                                                                 |
| :--------------- | :----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `type`           | `string` \\| `string`[] \\| [`IEventParams`](../modules.md#ieventparams)[] |
| `listener?`      | [`IFunction`](IFunction.md)                                                                                                                                                          |
| `captureOrBind?` | `boolean` \\| [`IObject`](IObject.md)                                                                                                                                               |
| `capture?`       | `boolean`                                                                                                                                                                            |

#### Returns

`void`

#### Inherited from

[ILeaf](ILeaf.md).[once](ILeaf.md#once)

#### Defined in

[src/leafer/packages/interface/src/event/IEventer.ts:53](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/event/IEventer.ts#L53)

___

### emit

▸ **emit**(`type`, `event?`, `capture?`): `void`

#### Parameters

| Name       | Type                                               |
| :--------- | :------------------------------------------------- |
| `type`     | `string`                                           |
| `event?`   | [`IObject`](IObject.md) \\| [`IEvent`](IEvent.md) |
| `capture?` | `boolean`                                          |

#### Returns

`void`

#### Inherited from

[ILeaf](ILeaf.md).[emit](ILeaf.md#emit)

#### Defined in

[src/leafer/packages/interface/src/event/IEventer.ts:54](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/event/IEventer.ts#L54)

___

### emitEvent

▸ **emitEvent**(`event?`, `capture?`): `void`

#### Parameters

| Name       | Type                  |
| :--------- | :-------------------- |
| `event?`   | [`IEvent`](IEvent.md) |
| `capture?` | `boolean`             |

#### Returns

`void`

#### Inherited from

[ILeaf](ILeaf.md).[emitEvent](ILeaf.md#emitevent)

#### Defined in

[src/leafer/packages/interface/src/event/IEventer.ts:55](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/event/IEventer.ts#L55)

___

### hasEvent

▸ **hasEvent**(`type`, `capture?`): `boolean`

#### Parameters

| Name       | Type      |
| :--------- | :-------- |
| `type`     | `string`  |
| `capture?` | `boolean` |

#### Returns

`boolean`

#### Inherited from

[ILeaf](ILeaf.md).[hasEvent](ILeaf.md#hasevent)

#### Defined in

[src/leafer/packages/interface/src/event/IEventer.ts:56](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/event/IEventer.ts#L56)

___

### destroy

▸ **destroy**(): `void`

#### Returns

`void`

#### Inherited from

[ILeaf](ILeaf.md).[destroy](ILeaf.md#destroy)

#### Defined in

[src/leafer/packages/interface/src/event/IEventer.ts:58](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/event/IEventer.ts#L58)
