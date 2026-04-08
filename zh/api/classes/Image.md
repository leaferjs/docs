# Class: Image\<TInputData\>

## Type parameters

| Name | Type |
| :------ | :------ |
| `TInputData` | [`IImageInputData`](../interfaces/IImageInputData.md) |

## Hierarchy

- [`Rect`](Rect.md)\<`TInputData`\>

  ↳ **`Image`**

  ↳↳ [`HTMLText`](HTMLText.md)

## Implements

- [`IImage`](../interfaces/IImage.md)

## Table of contents

### Constructors

- [constructor](Image.md#constructor)

### Properties

- [innerId](Image.md#innerid)
- [skipJSON](Image.md#skipjson)
- [syncEventer](Image.md#synceventer)
- [lockNormalStyle](Image.md#locknormalstyle)
- [\_\_layout](Image.md#__layout)
- [\_\_world](Image.md#__world)
- [\_\_local](Image.md#__local)
- [\_\_nowWorld](Image.md#__nowworld)
- [\_\_cameraWorld](Image.md#__cameraworld)
- [\_\_worldOpacity](Image.md#__worldopacity)
- [\_\_scrollWorld](Image.md#__scrollworld)
- [\_\_level](Image.md#__level)
- [\_\_tempNumber](Image.md#__tempnumber)
- [\_\_hasAutoLayout](Image.md#__hasautolayout)
- [\_\_hasMask](Image.md#__hasmask)
- [\_\_hasEraser](Image.md#__haseraser)
- [\_\_hitCanvas](Image.md#__hitcanvas)
- [\_\_captureMap](Image.md#__capturemap)
- [\_\_bubbleMap](Image.md#__bubblemap)
- [\_\_hasLocalEvent](Image.md#__haslocalevent)
- [\_\_hasWorldEvent](Image.md#__hasworldevent)
- [topChildren](Image.md#topchildren)
- [destroyed](Image.md#destroyed)
- [\_\_](Image.md#__)
- [url](Image.md#url)
- [proxyData](Image.md#proxydata)
- [\_\_proxyData](Image.md#__proxydata)
- [leafer](Image.md#leafer)
- [parent](Image.md#parent)
- [zoomLayer](Image.md#zoomlayer)
- [children](Image.md#children)
- [startLinker](Image.md#startlinker)
- [endLinker](Image.md#endlinker)
- [id](Image.md#id)
- [name](Image.md#name)
- [className](Image.md#classname)
- [blendMode](Image.md#blendmode)
- [opacity](Image.md#opacity)
- [visible](Image.md#visible)
- [locked](Image.md#locked)
- [dim](Image.md#dim)
- [dimskip](Image.md#dimskip)
- [bright](Image.md#bright)
- [zIndex](Image.md#zindex)
- [mask](Image.md#mask)
- [eraser](Image.md#eraser)
- [x](Image.md#x)
- [y](Image.md#y)
- [width](Image.md#width)
- [height](Image.md#height)
- [scaleX](Image.md#scalex)
- [scaleY](Image.md#scaley)
- [scaleFixed](Image.md#scalefixed)
- [rotation](Image.md#rotation)
- [skewX](Image.md#skewx)
- [skewY](Image.md#skewy)
- [offsetX](Image.md#offsetx)
- [offsetY](Image.md#offsety)
- [scrollX](Image.md#scrollx)
- [scrollY](Image.md#scrolly)
- [origin](Image.md#origin)
- [around](Image.md#around)
- [lazy](Image.md#lazy)
- [pixelRatio](Image.md#pixelratio)
- [renderSpread](Image.md#renderspread)
- [path](Image.md#path)
- [windingRule](Image.md#windingrule)
- [closed](Image.md#closed)
- [flow](Image.md#flow)
- [padding](Image.md#padding)
- [gap](Image.md#gap)
- [flowAlign](Image.md#flowalign)
- [flowWrap](Image.md#flowwrap)
- [itemBox](Image.md#itembox)
- [inFlow](Image.md#inflow)
- [autoWidth](Image.md#autowidth)
- [autoHeight](Image.md#autoheight)
- [lockRatio](Image.md#lockratio)
- [autoBox](Image.md#autobox)
- [widthRange](Image.md#widthrange)
- [heightRange](Image.md#heightrange)
- [draggable](Image.md#draggable)
- [dragBounds](Image.md#dragbounds)
- [dragBoundsType](Image.md#dragboundstype)
- [editable](Image.md#editable)
- [hittable](Image.md#hittable)
- [hitFill](Image.md#hitfill)
- [hitStroke](Image.md#hitstroke)
- [hitBox](Image.md#hitbox)
- [hitChildren](Image.md#hitchildren)
- [hitSelf](Image.md#hitself)
- [hitRadius](Image.md#hitradius)
- [cursor](Image.md#cursor)
- [fill](Image.md#fill)
- [stroke](Image.md#stroke)
- [strokeAlign](Image.md#strokealign)
- [strokeWidth](Image.md#strokewidth)
- [strokeScaleFixed](Image.md#strokescalefixed)
- [strokeCap](Image.md#strokecap)
- [strokeJoin](Image.md#strokejoin)
- [dashPattern](Image.md#dashpattern)
- [dashOffset](Image.md#dashoffset)
- [miterLimit](Image.md#miterlimit)
- [startArrow](Image.md#startarrow)
- [endArrow](Image.md#endarrow)
- [cornerRadius](Image.md#cornerradius)
- [cornerSmoothing](Image.md#cornersmoothing)
- [shadow](Image.md#shadow)
- [innerShadow](Image.md#innershadow)
- [blur](Image.md#blur)
- [backgroundBlur](Image.md#backgroundblur)
- [grayscale](Image.md#grayscale)
- [filter](Image.md#filter)
- [complex](Image.md#complex)
- [animation](Image.md#animation)
- [animationOut](Image.md#animationout)
- [transition](Image.md#transition)
- [transitionOut](Image.md#transitionout)
- [motionPath](Image.md#motionpath)
- [motionPrecision](Image.md#motionprecision)
- [motion](Image.md#motion)
- [motionRotation](Image.md#motionrotation)
- [states](Image.md#states)
- [state](Image.md#state)
- [selected](Image.md#selected)
- [disabled](Image.md#disabled)
- [normalStyle](Image.md#normalstyle)
- [hoverStyle](Image.md#hoverstyle)
- [pressStyle](Image.md#pressstyle)
- [focusStyle](Image.md#focusstyle)
- [selectedStyle](Image.md#selectedstyle)
- [disabledStyle](Image.md#disabledstyle)
- [placeholderStyle](Image.md#placeholderstyle)
- [placeholderColor](Image.md#placeholdercolor)
- [placeholderDelay](Image.md#placeholderdelay)
- [button](Image.md#button)
- [editConfig](Image.md#editconfig)
- [editOuter](Image.md#editouter)
- [editInner](Image.md#editinner)
- [data](Image.md#data)
- [useFastShadow](Image.md#usefastshadow)
- [\_\_box](Image.md#__box)
- [\_\_animate](Image.md#__animate)

### Accessors

- [tag](Image.md#tag)
- [innerName](Image.md#innername)
- [\_\_DataProcessor](Image.md#__dataprocessor)
- [\_\_LayoutProcessor](Image.md#__layoutprocessor)
- [leaferIsCreated](Image.md#leaferiscreated)
- [leaferIsReady](Image.md#leaferisready)
- [isLeafer](Image.md#isleafer)
- [isBranch](Image.md#isbranch)
- [isBranchLeaf](Image.md#isbranchleaf)
- [\_\_localMatrix](Image.md#__localmatrix)
- [\_\_localBoxBounds](Image.md#__localboxbounds)
- [worldTransform](Image.md#worldtransform)
- [localTransform](Image.md#localtransform)
- [scrollWorldTransform](Image.md#scrollworldtransform)
- [boxBounds](Image.md#boxbounds)
- [renderBounds](Image.md#renderbounds)
- [worldBoxBounds](Image.md#worldboxbounds)
- [worldStrokeBounds](Image.md#worldstrokebounds)
- [worldRenderBounds](Image.md#worldrenderbounds)
- [worldOpacity](Image.md#worldopacity)
- [\_\_worldFlipped](Image.md#__worldflipped)
- [\_\_onlyHitMask](Image.md#__onlyhitmask)
- [\_\_ignoreHitWorld](Image.md#__ignorehitworld)
- [\_\_inLazyBounds](Image.md#__inlazybounds)
- [pathInputed](Image.md#pathinputed)
- [event](Image.md#event)
- [\_\_tag](Image.md#__tag)
- [ready](Image.md#ready)
- [image](Image.md#image)
- [app](Image.md#app)
- [isFrame](Image.md#isframe)
- [strokeWidthFixed](Image.md#strokewidthfixed)
- [scale](Image.md#scale)
- [isAutoWidth](Image.md#isautowidth)
- [isAutoHeight](Image.md#isautoheight)
- [pen](Image.md#pen)

### Methods

- [resetCustom](Image.md#resetcustom)
- [waitParent](Image.md#waitparent)
- [waitLeafer](Image.md#waitleafer)
- [nextRender](Image.md#nextrender)
- [removeNextRender](Image.md#removenextrender)
- [\_\_bindLeafer](Image.md#__bindleafer)
- [setAttr](Image.md#setattr)
- [getAttr](Image.md#getattr)
- [getComputedAttr](Image.md#getcomputedattr)
- [toJSON](Image.md#tojson)
- [toString](Image.md#tostring)
- [toSVG](Image.md#tosvg)
- [\_\_SVG](Image.md#__svg)
- [toHTML](Image.md#tohtml)
- [\_\_setAttr](Image.md#__setattr)
- [\_\_getAttr](Image.md#__getattr)
- [setProxyAttr](Image.md#setproxyattr)
- [getProxyAttr](Image.md#getproxyattr)
- [focus](Image.md#focus)
- [updateState](Image.md#updatestate)
- [updateLayout](Image.md#updatelayout)
- [forceUpdate](Image.md#forceupdate)
- [forceRender](Image.md#forcerender)
- [\_\_extraUpdate](Image.md#__extraupdate)
- [\_\_updateWorldMatrix](Image.md#__updateworldmatrix)
- [\_\_updateLocalMatrix](Image.md#__updatelocalmatrix)
- [\_\_updateWorldBounds](Image.md#__updateworldbounds)
- [\_\_updateLocalBounds](Image.md#__updatelocalbounds)
- [\_\_updateLocalBoxBounds](Image.md#__updatelocalboxbounds)
- [\_\_updateLocalStrokeBounds](Image.md#__updatelocalstrokebounds)
- [\_\_updateLocalRenderBounds](Image.md#__updatelocalrenderbounds)
- [\_\_updateBoxBounds](Image.md#__updateboxbounds)
- [\_\_updateContentBounds](Image.md#__updatecontentbounds)
- [\_\_updateStrokeBounds](Image.md#__updatestrokebounds)
- [\_\_updateRenderBounds](Image.md#__updaterenderbounds)
- [\_\_updateAutoLayout](Image.md#__updateautolayout)
- [\_\_updateFlowLayout](Image.md#__updateflowlayout)
- [\_\_updateNaturalSize](Image.md#__updatenaturalsize)
- [\_\_updateStrokeSpread](Image.md#__updatestrokespread)
- [\_\_updateRenderSpread](Image.md#__updaterenderspread)
- [\_\_updateEraser](Image.md#__updateeraser)
- [\_\_renderEraser](Image.md#__rendereraser)
- [\_\_updateMask](Image.md#__updatemask)
- [\_\_renderMask](Image.md#__rendermask)
- [\_\_getNowWorld](Image.md#__getnowworld)
- [getClampRenderScale](Image.md#getclamprenderscale)
- [getRenderScaleData](Image.md#getrenderscaledata)
- [getTransform](Image.md#gettransform)
- [getBounds](Image.md#getbounds)
- [getLayoutBounds](Image.md#getlayoutbounds)
- [getLayoutPoints](Image.md#getlayoutpoints)
- [getWorldBounds](Image.md#getworldbounds)
- [worldToLocal](Image.md#worldtolocal)
- [localToWorld](Image.md#localtoworld)
- [worldToInner](Image.md#worldtoinner)
- [innerToWorld](Image.md#innertoworld)
- [getBoxPoint](Image.md#getboxpoint)
- [getBoxPointByInner](Image.md#getboxpointbyinner)
- [getInnerPoint](Image.md#getinnerpoint)
- [getInnerPointByBox](Image.md#getinnerpointbybox)
- [getInnerPointByLocal](Image.md#getinnerpointbylocal)
- [getLocalPoint](Image.md#getlocalpoint)
- [getLocalPointByInner](Image.md#getlocalpointbyinner)
- [getPagePoint](Image.md#getpagepoint)
- [getWorldPoint](Image.md#getworldpoint)
- [getWorldPointByBox](Image.md#getworldpointbybox)
- [getWorldPointByLocal](Image.md#getworldpointbylocal)
- [getWorldPointByPage](Image.md#getworldpointbypage)
- [setTransform](Image.md#settransform)
- [transform](Image.md#transform)
- [move](Image.md#move)
- [moveInner](Image.md#moveinner)
- [scaleOf](Image.md#scaleof)
- [rotateOf](Image.md#rotateof)
- [skewOf](Image.md#skewof)
- [transformWorld](Image.md#transformworld)
- [moveWorld](Image.md#moveworld)
- [scaleOfWorld](Image.md#scaleofworld)
- [rotateOfWorld](Image.md#rotateofworld)
- [skewOfWorld](Image.md#skewofworld)
- [flip](Image.md#flip)
- [scaleResize](Image.md#scaleresize)
- [\_\_scaleResize](Image.md#__scaleresize)
- [resizeWidth](Image.md#resizewidth)
- [resizeHeight](Image.md#resizeheight)
- [hit](Image.md#hit)
- [\_\_hitWorld](Image.md#__hitworld)
- [\_\_hit](Image.md#__hit)
- [\_\_hitFill](Image.md#__hitfill)
- [\_\_hitStroke](Image.md#__hitstroke)
- [\_\_hitPixel](Image.md#__hitpixel)
- [\_\_drawHitPath](Image.md#__drawhitpath)
- [\_\_updateHitCanvas](Image.md#__updatehitcanvas)
- [\_\_render](Image.md#__render)
- [\_\_drawFast](Image.md#__drawfast)
- [\_\_draw](Image.md#__draw)
- [\_\_clip](Image.md#__clip)
- [\_\_renderShape](Image.md#__rendershape)
- [\_\_drawShape](Image.md#__drawshape)
- [\_\_updateWorldOpacity](Image.md#__updateworldopacity)
- [\_\_updateChange](Image.md#__updatechange)
- [\_\_updatePath](Image.md#__updatepath)
- [getMotionPathData](Image.md#getmotionpathdata)
- [getMotionPoint](Image.md#getmotionpoint)
- [getMotionTotal](Image.md#getmotiontotal)
- [\_\_updateMotionPath](Image.md#__updatemotionpath)
- [\_\_runAnimation](Image.md#__runanimation)
- [\_\_updateSortChildren](Image.md#__updatesortchildren)
- [add](Image.md#add)
- [remove](Image.md#remove)
- [dropTo](Image.md#dropto)
- [on](Image.md#on)
- [off](Image.md#off)
- [on\_](Image.md#on_)
- [off\_](Image.md#off_)
- [once](Image.md#once)
- [emit](Image.md#emit)
- [emitEvent](Image.md#emitevent)
- [hasEvent](Image.md#hasevent)
- [changeAttr](Image.md#changeattr)
- [addAttr](Image.md#addattr)
- [\_\_emitLifeEvent](Image.md#__emitlifeevent)
- [reset](Image.md#reset)
- [set](Image.md#set)
- [get](Image.md#get)
- [createProxyData](Image.md#createproxydata)
- [clearProxyData](Image.md#clearproxydata)
- [find](Image.md#find)
- [findTag](Image.md#findtag)
- [findOne](Image.md#findone)
- [findId](Image.md#findid)
- [getPath](Image.md#getpath)
- [getPathString](Image.md#getpathstring)
- [asPath](Image.md#aspath)
- [load](Image.md#load)
- [\_\_onUpdateSize](Image.md#__onupdatesize)
- [\_\_updateRenderPath](Image.md#__updaterenderpath)
- [\_\_drawRenderPath](Image.md#__drawrenderpath)
- [\_\_drawPath](Image.md#__drawpath)
- [\_\_drawPathByData](Image.md#__drawpathbydata)
- [\_\_drawPathByBox](Image.md#__drawpathbybox)
- [drawImagePlaceholder](Image.md#drawimageplaceholder)
- [animate](Image.md#animate)
- [killAnimate](Image.md#killanimate)
- [export](Image.md#export)
- [syncExport](Image.md#syncexport)
- [clone](Image.md#clone)
- [one](Image.md#one)
- [registerUI](Image.md#registerui)
- [registerData](Image.md#registerdata)
- [setEditConfig](Image.md#seteditconfig)
- [setEditOuter](Image.md#seteditouter)
- [setEditInner](Image.md#seteditinner)
- [destroy](Image.md#destroy)

## Constructors

### constructor

• **new Image**\<`TInputData`\>(`data?`): [`Image`](Image.md)\<`TInputData`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TInputData` | [`IImageInputData`](../interfaces/IImageInputData.md) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `TInputData` |

#### Returns

[`Image`](Image.md)\<`TInputData`\>

#### Inherited from

[Rect](Rect.md).[constructor](Rect.md#constructor)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:116](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/display/src/Leaf.ts#L116)

## Properties

### innerId

• `Readonly` **innerId**: `number`

#### Implementation of

[IImage](../interfaces/IImage.md).[innerId](../interfaces/IImage.md#innerid)

#### Inherited from

[Rect](Rect.md).[innerId](Rect.md#innerid)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:33](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/display/src/Leaf.ts#L33)

___

### skipJSON

• `Optional` **skipJSON**: `boolean`

#### Implementation of

[IImage](../interfaces/IImage.md).[skipJSON](../interfaces/IImage.md#skipjson)

#### Inherited from

[Rect](Rect.md).[skipJSON](Rect.md#skipjson)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:49](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/display/src/Leaf.ts#L49)

___

### syncEventer

• `Optional` **syncEventer**: [`ILeaf`](../interfaces/ILeaf.md)

#### Implementation of

[IImage](../interfaces/IImage.md).[syncEventer](../interfaces/IImage.md#synceventer)

#### Inherited from

[Rect](Rect.md).[syncEventer](Rect.md#synceventer)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:50](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/display/src/Leaf.ts#L50)

___

### lockNormalStyle

• `Optional` **lockNormalStyle**: `boolean`

#### Implementation of

[IImage](../interfaces/IImage.md).[lockNormalStyle](../interfaces/IImage.md#locknormalstyle)

#### Inherited from

[Rect](Rect.md).[lockNormalStyle](Rect.md#locknormalstyle)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:51](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/display/src/Leaf.ts#L51)

___

### \_\_layout

• **\_\_layout**: [`ILeafLayout`](../interfaces/ILeafLayout.md)

#### Implementation of

[IImage](../interfaces/IImage.md).[__layout](../interfaces/IImage.md#__layout)

#### Inherited from

[Rect](Rect.md).[__layout](Rect.md#__layout)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:54](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/display/src/Leaf.ts#L54)

___

### \_\_world

• **\_\_world**: [`IMatrixWithBoundsScaleData`](../interfaces/IMatrixWithBoundsScaleData.md)

#### Implementation of

[IImage](../interfaces/IImage.md).[__world](../interfaces/IImage.md#__world)

#### Inherited from

[Rect](Rect.md).[__world](Rect.md#__world)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:56](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/display/src/Leaf.ts#L56)

___

### \_\_local

• `Optional` **\_\_local**: [`IMatrixWithBoundsData`](../interfaces/IMatrixWithBoundsData.md)

#### Implementation of

[IImage](../interfaces/IImage.md).[__local](../interfaces/IImage.md#__local)

#### Inherited from

[Rect](Rect.md).[__local](Rect.md#__local)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:57](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/display/src/Leaf.ts#L57)

___

### \_\_nowWorld

• `Optional` **\_\_nowWorld**: [`IMatrixWithBoundsScaleData`](../interfaces/IMatrixWithBoundsScaleData.md)

#### Implementation of

[IImage](../interfaces/IImage.md).[__nowWorld](../interfaces/IImage.md#__nowworld)

#### Inherited from

[Rect](Rect.md).[__nowWorld](Rect.md#__nowworld)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:59](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/display/src/Leaf.ts#L59)

___

### \_\_cameraWorld

• `Optional` **\_\_cameraWorld**: [`IMatrixWithBoundsScaleData`](../interfaces/IMatrixWithBoundsScaleData.md)

#### Implementation of

[IImage](../interfaces/IImage.md).[__cameraWorld](../interfaces/IImage.md#__cameraworld)

#### Inherited from

[Rect](Rect.md).[__cameraWorld](Rect.md#__cameraworld)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:60](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/display/src/Leaf.ts#L60)

___

### \_\_worldOpacity

• **\_\_worldOpacity**: `number`

#### Implementation of

[IImage](../interfaces/IImage.md).[__worldOpacity](../interfaces/IImage.md#__worldopacity)

#### Inherited from

[Rect](Rect.md).[__worldOpacity](Rect.md#__worldopacity)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:65](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/display/src/Leaf.ts#L65)

___

### \_\_scrollWorld

• `Optional` **\_\_scrollWorld**: [`IMatrixWithBoundsScaleData`](../interfaces/IMatrixWithBoundsScaleData.md)

#### Implementation of

[IImage](../interfaces/IImage.md).[__scrollWorld](../interfaces/IImage.md#__scrollworld)

#### Inherited from

[Rect](Rect.md).[__scrollWorld](Rect.md#__scrollworld)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:71](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/display/src/Leaf.ts#L71)

___

### \_\_level

• **\_\_level**: `number`

#### Implementation of

[IImage](../interfaces/IImage.md).[__level](../interfaces/IImage.md#__level)

#### Inherited from

[Rect](Rect.md).[__level](Rect.md#__level)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:84](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/display/src/Leaf.ts#L84)

___

### \_\_tempNumber

• **\_\_tempNumber**: `number`

#### Implementation of

[IImage](../interfaces/IImage.md).[__tempNumber](../interfaces/IImage.md#__tempnumber)

#### Inherited from

[Rect](Rect.md).[__tempNumber](Rect.md#__tempnumber)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:85](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/display/src/Leaf.ts#L85)

___

### \_\_hasAutoLayout

• `Optional` **\_\_hasAutoLayout**: `boolean`

#### Implementation of

[IImage](../interfaces/IImage.md).[__hasAutoLayout](../interfaces/IImage.md#__hasautolayout)

#### Inherited from

[Rect](Rect.md).[__hasAutoLayout](Rect.md#__hasautolayout)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:89](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/display/src/Leaf.ts#L89)

___

### \_\_hasMask

• `Optional` **\_\_hasMask**: `boolean`

#### Implementation of

[IImage](../interfaces/IImage.md).[__hasMask](../interfaces/IImage.md#__hasmask)

#### Inherited from

[Rect](Rect.md).[__hasMask](Rect.md#__hasmask)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:90](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/display/src/Leaf.ts#L90)

___

### \_\_hasEraser

• `Optional` **\_\_hasEraser**: `boolean`

#### Implementation of

[IImage](../interfaces/IImage.md).[__hasEraser](../interfaces/IImage.md#__haseraser)

#### Inherited from

[Rect](Rect.md).[__hasEraser](Rect.md#__haseraser)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:91](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/display/src/Leaf.ts#L91)

___

### \_\_hitCanvas

• `Optional` **\_\_hitCanvas**: [`IHitCanvas`](../interfaces/IHitCanvas.md)

#### Implementation of

[IImage](../interfaces/IImage.md).[__hitCanvas](../interfaces/IImage.md#__hitcanvas)

#### Inherited from

[Rect](Rect.md).[__hitCanvas](Rect.md#__hitcanvas)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:92](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/display/src/Leaf.ts#L92)

___

### \_\_captureMap

• `Optional` **\_\_captureMap**: [`IEventListenerMap`](../interfaces/IEventListenerMap.md)

#### Implementation of

[IImage](../interfaces/IImage.md).[__captureMap](../interfaces/IImage.md#__capturemap)

#### Inherited from

[Rect](Rect.md).[__captureMap](Rect.md#__capturemap)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:103](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/display/src/Leaf.ts#L103)

___

### \_\_bubbleMap

• `Optional` **\_\_bubbleMap**: [`IEventListenerMap`](../interfaces/IEventListenerMap.md)

#### Implementation of

[IImage](../interfaces/IImage.md).[__bubbleMap](../interfaces/IImage.md#__bubblemap)

#### Inherited from

[Rect](Rect.md).[__bubbleMap](Rect.md#__bubblemap)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:104](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/display/src/Leaf.ts#L104)

___

### \_\_hasLocalEvent

• `Optional` **\_\_hasLocalEvent**: `boolean`

#### Implementation of

[IImage](../interfaces/IImage.md).[__hasLocalEvent](../interfaces/IImage.md#__haslocalevent)

#### Inherited from

[Rect](Rect.md).[__hasLocalEvent](Rect.md#__haslocalevent)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:106](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/display/src/Leaf.ts#L106)

___

### \_\_hasWorldEvent

• `Optional` **\_\_hasWorldEvent**: `boolean`

#### Implementation of

[IImage](../interfaces/IImage.md).[__hasWorldEvent](../interfaces/IImage.md#__hasworldevent)

#### Inherited from

[Rect](Rect.md).[__hasWorldEvent](Rect.md#__hasworldevent)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:107](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/display/src/Leaf.ts#L107)

___

### topChildren

• `Optional` **topChildren**: [`ILeaf`](../interfaces/ILeaf.md)[]

#### Implementation of

[IImage](../interfaces/IImage.md).[topChildren](../interfaces/IImage.md#topchildren)

#### Inherited from

[Rect](Rect.md).[topChildren](Rect.md#topchildren)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:111](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/display/src/Leaf.ts#L111)

___

### destroyed

• **destroyed**: `boolean`

#### Implementation of

[IImage](../interfaces/IImage.md).[destroyed](../interfaces/IImage.md#destroyed)

#### Inherited from

[Rect](Rect.md).[destroyed](Rect.md#destroyed)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:113](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/display/src/Leaf.ts#L113)

___

### \_\_

• **\_\_**: [`IImageData`](../interfaces/IImageData.md)

#### Implementation of

[IImage](../interfaces/IImage.md).[__](../interfaces/IImage.md#__)

#### Overrides

[Rect](Rect.md).[__](Rect.md#__)

#### Defined in

[src/ui/packages/display/src/Image.ts:16](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/display/src/Image.ts#L16)

___

### url

• **url**: `string`

#### Implementation of

[IImage](../interfaces/IImage.md).[url](../interfaces/IImage.md#url)

#### Defined in

[src/ui/packages/display/src/Image.ts:19](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/display/src/Image.ts#L19)

___

### proxyData

• `Optional` **proxyData**: [`IUIInputData`](../interfaces/IUIInputData.md)

#### Implementation of

[IImage](../interfaces/IImage.md).[proxyData](../interfaces/IImage.md#proxydata)

#### Inherited from

[Rect](Rect.md).[proxyData](Rect.md#proxydata)

#### Defined in

[src/ui/packages/display/src/UI.ts:21](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/display/src/UI.ts#L21)

___

### \_\_proxyData

• `Optional` **\_\_proxyData**: [`IUIInputData`](../interfaces/IUIInputData.md)

#### Implementation of

[IImage](../interfaces/IImage.md).[__proxyData](../interfaces/IImage.md#__proxydata)

#### Inherited from

[Rect](Rect.md).[__proxyData](Rect.md#__proxydata)

#### Defined in

[src/ui/packages/display/src/UI.ts:22](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/display/src/UI.ts#L22)

___

### leafer

• `Optional` **leafer**: [`ILeafer`](../interfaces/ILeafer.md)

#### Implementation of

[IImage](../interfaces/IImage.md).[leafer](../interfaces/IImage.md#leafer)

#### Inherited from

[Rect](Rect.md).[leafer](Rect.md#leafer)

#### Defined in

[src/ui/packages/display/src/UI.ts:26](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/display/src/UI.ts#L26)

___

### parent

• `Optional` **parent**: [`IGroup`](../interfaces/IGroup.md)

#### Implementation of

[IImage](../interfaces/IImage.md).[parent](../interfaces/IImage.md#parent)

#### Inherited from

[Rect](Rect.md).[parent](Rect.md#parent)

#### Defined in

[src/ui/packages/display/src/UI.ts:27](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/display/src/UI.ts#L27)

___

### zoomLayer

• **zoomLayer**: [`IGroup`](../interfaces/IGroup.md)

#### Implementation of

[IImage](../interfaces/IImage.md).[zoomLayer](../interfaces/IImage.md#zoomlayer)

#### Inherited from

[Rect](Rect.md).[zoomLayer](Rect.md#zoomlayer)

#### Defined in

[src/ui/packages/display/src/UI.ts:30](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/display/src/UI.ts#L30)

___

### children

• `Optional` **children**: [`IUI`](../interfaces/IUI.md)[]

#### Implementation of

[IImage](../interfaces/IImage.md).[children](../interfaces/IImage.md#children)

#### Inherited from

[Rect](Rect.md).[children](Rect.md#children)

#### Defined in

[src/ui/packages/display/src/UI.ts:34](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/display/src/UI.ts#L34)

___

### startLinker

• `Optional` **startLinker**: [`ILinker`](../interfaces/ILinker.md)[]

#### Implementation of

[IImage](../interfaces/IImage.md).[startLinker](../interfaces/IImage.md#startlinker)

#### Inherited from

[Rect](Rect.md).[startLinker](Rect.md#startlinker)

#### Defined in

[src/ui/packages/display/src/UI.ts:37](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/display/src/UI.ts#L37)

___

### endLinker

• `Optional` **endLinker**: [`ILinker`](../interfaces/ILinker.md)[]

#### Implementation of

[IImage](../interfaces/IImage.md).[endLinker](../interfaces/IImage.md#endlinker)

#### Inherited from

[Rect](Rect.md).[endLinker](Rect.md#endlinker)

#### Defined in

[src/ui/packages/display/src/UI.ts:38](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/display/src/UI.ts#L38)

___

### id

• `Optional` **id**: `string`

#### Implementation of

[IImage](../interfaces/IImage.md).[id](../interfaces/IImage.md#id)

#### Inherited from

[Rect](Rect.md).[id](Rect.md#id)

#### Defined in

[src/ui/packages/display/src/UI.ts:44](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/display/src/UI.ts#L44)

___

### name

• `Optional` **name**: `string`

#### Implementation of

[IImage](../interfaces/IImage.md).[name](../interfaces/IImage.md#name)

#### Inherited from

[Rect](Rect.md).[name](Rect.md#name)

#### Defined in

[src/ui/packages/display/src/UI.ts:47](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/display/src/UI.ts#L47)

___

### className

• `Optional` **className**: `string`

#### Implementation of

[IImage](../interfaces/IImage.md).[className](../interfaces/IImage.md#classname)

#### Inherited from

[Rect](Rect.md).[className](Rect.md#classname)

#### Defined in

[src/ui/packages/display/src/UI.ts:50](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/display/src/UI.ts#L50)

___

### blendMode

• `Optional` **blendMode**: [`IBlendMode`](../modules.md#iblendmode)

#### Implementation of

[IImage](../interfaces/IImage.md).[blendMode](../interfaces/IImage.md#blendmode)

#### Inherited from

[Rect](Rect.md).[blendMode](Rect.md#blendmode)

#### Defined in

[src/ui/packages/display/src/UI.ts:55](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/display/src/UI.ts#L55)

___

### opacity

• `Optional` **opacity**: `number`

#### Implementation of

[IImage](../interfaces/IImage.md).[opacity](../interfaces/IImage.md#opacity)

#### Inherited from

[Rect](Rect.md).[opacity](Rect.md#opacity)

#### Defined in

[src/ui/packages/display/src/UI.ts:58](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/display/src/UI.ts#L58)

___

### visible

• `Optional` **visible**: `boolean` \| ``0``

#### Implementation of

[IImage](../interfaces/IImage.md).[visible](../interfaces/IImage.md#visible)

#### Inherited from

[Rect](Rect.md).[visible](Rect.md#visible)

#### Defined in

[src/ui/packages/display/src/UI.ts:61](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/display/src/UI.ts#L61)

___

### locked

• `Optional` **locked**: `boolean`

#### Implementation of

[IImage](../interfaces/IImage.md).[locked](../interfaces/IImage.md#locked)

#### Inherited from

[Rect](Rect.md).[locked](Rect.md#locked)

#### Defined in

[src/ui/packages/display/src/UI.ts:65](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/display/src/UI.ts#L65)

___

### dim

• `Optional` **dim**: `number` \| `boolean`

#### Implementation of

[IImage](../interfaces/IImage.md).[dim](../interfaces/IImage.md#dim)

#### Inherited from

[Rect](Rect.md).[dim](Rect.md#dim)

#### Defined in

[src/ui/packages/display/src/UI.ts:71](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/display/src/UI.ts#L71)

___

### dimskip

• `Optional` **dimskip**: `boolean`

#### Implementation of

[IImage](../interfaces/IImage.md).[dimskip](../interfaces/IImage.md#dimskip)

#### Inherited from

[Rect](Rect.md).[dimskip](Rect.md#dimskip)

#### Defined in

[src/ui/packages/display/src/UI.ts:74](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/display/src/UI.ts#L74)

___

### bright

• `Optional` **bright**: `boolean`

#### Implementation of

[IImage](../interfaces/IImage.md).[bright](../interfaces/IImage.md#bright)

#### Inherited from

[Rect](Rect.md).[bright](Rect.md#bright)

#### Defined in

[src/ui/packages/display/src/UI.ts:76](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/display/src/UI.ts#L76)

___

### zIndex

• `Optional` **zIndex**: `number`

#### Implementation of

[IImage](../interfaces/IImage.md).[zIndex](../interfaces/IImage.md#zindex)

#### Inherited from

[Rect](Rect.md).[zIndex](Rect.md#zindex)

#### Defined in

[src/ui/packages/display/src/UI.ts:80](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/display/src/UI.ts#L80)

___

### mask

• `Optional` **mask**: `boolean` \| [`IMaskType`](../modules.md#imasktype)

#### Implementation of

[IImage](../interfaces/IImage.md).[mask](../interfaces/IImage.md#mask)

#### Inherited from

[Rect](Rect.md).[mask](Rect.md#mask)

#### Defined in

[src/ui/packages/display/src/UI.ts:84](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/display/src/UI.ts#L84)

___

### eraser

• `Optional` **eraser**: `boolean` \| [`IEraserType`](../modules.md#ierasertype)

#### Implementation of

[IImage](../interfaces/IImage.md).[eraser](../interfaces/IImage.md#eraser)

#### Inherited from

[Rect](Rect.md).[eraser](Rect.md#eraser)

#### Defined in

[src/ui/packages/display/src/UI.ts:87](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/display/src/UI.ts#L87)

___

### x

• `Optional` **x**: `number`

#### Implementation of

[IImage](../interfaces/IImage.md).[x](../interfaces/IImage.md#x)

#### Inherited from

[Rect](Rect.md).[x](Rect.md#x)

#### Defined in

[src/ui/packages/display/src/UI.ts:92](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/display/src/UI.ts#L92)

___

### y

• `Optional` **y**: `number`

#### Implementation of

[IImage](../interfaces/IImage.md).[y](../interfaces/IImage.md#y)

#### Inherited from

[Rect](Rect.md).[y](Rect.md#y)

#### Defined in

[src/ui/packages/display/src/UI.ts:95](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/display/src/UI.ts#L95)

___

### width

• `Optional` **width**: `number`

#### Implementation of

[IImage](../interfaces/IImage.md).[width](../interfaces/IImage.md#width)

#### Inherited from

[Rect](Rect.md).[width](Rect.md#width)

#### Defined in

[src/ui/packages/display/src/UI.ts:99](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/display/src/UI.ts#L99)

___

### height

• `Optional` **height**: `number`

#### Implementation of

[IImage](../interfaces/IImage.md).[height](../interfaces/IImage.md#height)

#### Inherited from

[Rect](Rect.md).[height](Rect.md#height)

#### Defined in

[src/ui/packages/display/src/UI.ts:102](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/display/src/UI.ts#L102)

___

### scaleX

• `Optional` **scaleX**: `number`

#### Implementation of

[IImage](../interfaces/IImage.md).[scaleX](../interfaces/IImage.md#scalex)

#### Inherited from

[Rect](Rect.md).[scaleX](Rect.md#scalex)

#### Defined in

[src/ui/packages/display/src/UI.ts:106](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/display/src/UI.ts#L106)

___

### scaleY

• `Optional` **scaleY**: `number`

#### Implementation of

[IImage](../interfaces/IImage.md).[scaleY](../interfaces/IImage.md#scaley)

#### Inherited from

[Rect](Rect.md).[scaleY](Rect.md#scaley)

#### Defined in

[src/ui/packages/display/src/UI.ts:109](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/display/src/UI.ts#L109)

___

### scaleFixed

• `Optional` **scaleFixed**: [`IScaleFixed`](../modules.md#iscalefixed)

#### Implementation of

[IImage](../interfaces/IImage.md).[scaleFixed](../interfaces/IImage.md#scalefixed)

#### Inherited from

[Rect](Rect.md).[scaleFixed](Rect.md#scalefixed)

#### Defined in

[src/ui/packages/display/src/UI.ts:112](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/display/src/UI.ts#L112)

___

### rotation

• `Optional` **rotation**: `number`

#### Implementation of

[IImage](../interfaces/IImage.md).[rotation](../interfaces/IImage.md#rotation)

#### Inherited from

[Rect](Rect.md).[rotation](Rect.md#rotation)

#### Defined in

[src/ui/packages/display/src/UI.ts:116](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/display/src/UI.ts#L116)

___

### skewX

• `Optional` **skewX**: `number`

#### Implementation of

[IImage](../interfaces/IImage.md).[skewX](../interfaces/IImage.md#skewx)

#### Inherited from

[Rect](Rect.md).[skewX](Rect.md#skewx)

#### Defined in

[src/ui/packages/display/src/UI.ts:120](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/display/src/UI.ts#L120)

___

### skewY

• `Optional` **skewY**: `number`

#### Implementation of

[IImage](../interfaces/IImage.md).[skewY](../interfaces/IImage.md#skewy)

#### Inherited from

[Rect](Rect.md).[skewY](Rect.md#skewy)

#### Defined in

[src/ui/packages/display/src/UI.ts:123](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/display/src/UI.ts#L123)

___

### offsetX

• `Optional` **offsetX**: `number`

#### Implementation of

[IImage](../interfaces/IImage.md).[offsetX](../interfaces/IImage.md#offsetx)

#### Inherited from

[Rect](Rect.md).[offsetX](Rect.md#offsetx)

#### Defined in

[src/ui/packages/display/src/UI.ts:128](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/display/src/UI.ts#L128)

___

### offsetY

• `Optional` **offsetY**: `number`

#### Implementation of

[IImage](../interfaces/IImage.md).[offsetY](../interfaces/IImage.md#offsety)

#### Inherited from

[Rect](Rect.md).[offsetY](Rect.md#offsety)

#### Defined in

[src/ui/packages/display/src/UI.ts:131](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/display/src/UI.ts#L131)

___

### scrollX

• `Optional` **scrollX**: `number`

#### Implementation of

[IImage](../interfaces/IImage.md).[scrollX](../interfaces/IImage.md#scrollx)

#### Inherited from

[Rect](Rect.md).[scrollX](Rect.md#scrollx)

#### Defined in

[src/ui/packages/display/src/UI.ts:135](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/display/src/UI.ts#L135)

___

### scrollY

• `Optional` **scrollY**: `number`

#### Implementation of

[IImage](../interfaces/IImage.md).[scrollY](../interfaces/IImage.md#scrolly)

#### Inherited from

[Rect](Rect.md).[scrollY](Rect.md#scrolly)

#### Defined in

[src/ui/packages/display/src/UI.ts:138](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/display/src/UI.ts#L138)

___

### origin

• `Optional` **origin**: [`IUnitPointData`](../interfaces/IUnitPointData.md) \| [`IDirection`](../modules.md#idirection)

#### Implementation of

[IImage](../interfaces/IImage.md).[origin](../interfaces/IImage.md#origin)

#### Inherited from

[Rect](Rect.md).[origin](Rect.md#origin)

#### Defined in

[src/ui/packages/display/src/UI.ts:143](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/display/src/UI.ts#L143)

___

### around

• `Optional` **around**: [`IUnitPointData`](../interfaces/IUnitPointData.md) \| [`IDirection`](../modules.md#idirection)

#### Implementation of

[IImage](../interfaces/IImage.md).[around](../interfaces/IImage.md#around)

#### Inherited from

[Rect](Rect.md).[around](Rect.md#around)

#### Defined in

[src/ui/packages/display/src/UI.ts:146](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/display/src/UI.ts#L146)

___

### lazy

• `Optional` **lazy**: `boolean`

#### Implementation of

[IImage](../interfaces/IImage.md).[lazy](../interfaces/IImage.md#lazy)

#### Inherited from

[Rect](Rect.md).[lazy](Rect.md#lazy)

#### Defined in

[src/ui/packages/display/src/UI.ts:151](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/display/src/UI.ts#L151)

___

### pixelRatio

• `Optional` **pixelRatio**: `number`

#### Implementation of

[IImage](../interfaces/IImage.md).[pixelRatio](../interfaces/IImage.md#pixelratio)

#### Inherited from

[Rect](Rect.md).[pixelRatio](Rect.md#pixelratio)

#### Defined in

[src/ui/packages/display/src/UI.ts:154](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/display/src/UI.ts#L154)

___

### renderSpread

• `Optional` **renderSpread**: [`IFourNumber`](../modules.md#ifournumber)

#### Implementation of

[IImage](../interfaces/IImage.md).[renderSpread](../interfaces/IImage.md#renderspread)

#### Inherited from

[Rect](Rect.md).[renderSpread](Rect.md#renderspread)

#### Defined in

[src/ui/packages/display/src/UI.ts:158](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/display/src/UI.ts#L158)

___

### path

• `Optional` **path**: `string` \| [`IPathCommandData`](../modules.md#ipathcommanddata) \| [`IPathCommandNode`](../modules.md#ipathcommandnode)[] \| [`IPathCommandObject`](../modules.md#ipathcommandobject)[]

#### Implementation of

[IImage](../interfaces/IImage.md).[path](../interfaces/IImage.md#path)

#### Inherited from

[Rect](Rect.md).[path](Rect.md#path)

#### Defined in

[src/ui/packages/display/src/UI.ts:163](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/display/src/UI.ts#L163)

___

### windingRule

• `Optional` **windingRule**: [`IWindingRule`](../modules.md#iwindingrule)

#### Implementation of

[IImage](../interfaces/IImage.md).[windingRule](../interfaces/IImage.md#windingrule)

#### Inherited from

[Rect](Rect.md).[windingRule](Rect.md#windingrule)

#### Defined in

[src/ui/packages/display/src/UI.ts:166](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/display/src/UI.ts#L166)

___

### closed

• `Optional` **closed**: `boolean`

#### Implementation of

[IImage](../interfaces/IImage.md).[closed](../interfaces/IImage.md#closed)

#### Inherited from

[Rect](Rect.md).[closed](Rect.md#closed)

#### Defined in

[src/ui/packages/display/src/UI.ts:169](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/display/src/UI.ts#L169)

___

### flow

• `Optional` **flow**: [`IFlowType`](../modules.md#iflowtype)

#### Implementation of

[IImage](../interfaces/IImage.md).[flow](../interfaces/IImage.md#flow)

#### Inherited from

[Rect](Rect.md).[flow](Rect.md#flow)

#### Defined in

[src/ui/packages/display/src/UI.ts:173](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/display/src/UI.ts#L173)

___

### padding

• `Optional` **padding**: [`IFourNumber`](../modules.md#ifournumber)

#### Implementation of

[IImage](../interfaces/IImage.md).[padding](../interfaces/IImage.md#padding)

#### Inherited from

[Rect](Rect.md).[padding](Rect.md#padding)

#### Defined in

[src/ui/packages/display/src/UI.ts:176](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/display/src/UI.ts#L176)

___

### gap

• `Optional` **gap**: [`IGap`](../modules.md#igap) \| [`IPointGap`](../interfaces/IPointGap.md)

#### Implementation of

[IImage](../interfaces/IImage.md).[gap](../interfaces/IImage.md#gap)

#### Inherited from

[Rect](Rect.md).[gap](Rect.md#gap)

#### Defined in

[src/ui/packages/display/src/UI.ts:178](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/display/src/UI.ts#L178)

___

### flowAlign

• `Optional` **flowAlign**: [`IFlowAxisAlign`](../interfaces/IFlowAxisAlign.md) \| [`IFlowAlign`](../modules.md#iflowalign)

#### Implementation of

[IImage](../interfaces/IImage.md).[flowAlign](../interfaces/IImage.md#flowalign)

#### Inherited from

[Rect](Rect.md).[flowAlign](Rect.md#flowalign)

#### Defined in

[src/ui/packages/display/src/UI.ts:180](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/display/src/UI.ts#L180)

___

### flowWrap

• `Optional` **flowWrap**: [`IFlowWrap`](../modules.md#iflowwrap)

#### Implementation of

[IImage](../interfaces/IImage.md).[flowWrap](../interfaces/IImage.md#flowwrap)

#### Inherited from

[Rect](Rect.md).[flowWrap](Rect.md#flowwrap)

#### Defined in

[src/ui/packages/display/src/UI.ts:182](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/display/src/UI.ts#L182)

___

### itemBox

• `Optional` **itemBox**: [`IFlowBoxType`](../modules.md#iflowboxtype)

#### Implementation of

[IImage](../interfaces/IImage.md).[itemBox](../interfaces/IImage.md#itembox)

#### Inherited from

[Rect](Rect.md).[itemBox](Rect.md#itembox)

#### Defined in

[src/ui/packages/display/src/UI.ts:185](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/display/src/UI.ts#L185)

___

### inFlow

• `Optional` **inFlow**: `boolean`

#### Implementation of

[IImage](../interfaces/IImage.md).[inFlow](../interfaces/IImage.md#inflow)

#### Inherited from

[Rect](Rect.md).[inFlow](Rect.md#inflow)

#### Defined in

[src/ui/packages/display/src/UI.ts:187](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/display/src/UI.ts#L187)

___

### autoWidth

• `Optional` **autoWidth**: [`IAutoSize`](../modules.md#iautosize)

#### Implementation of

[IImage](../interfaces/IImage.md).[autoWidth](../interfaces/IImage.md#autowidth)

#### Inherited from

[Rect](Rect.md).[autoWidth](Rect.md#autowidth)

#### Defined in

[src/ui/packages/display/src/UI.ts:190](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/display/src/UI.ts#L190)

___

### autoHeight

• `Optional` **autoHeight**: [`IAutoSize`](../modules.md#iautosize)

#### Implementation of

[IImage](../interfaces/IImage.md).[autoHeight](../interfaces/IImage.md#autoheight)

#### Inherited from

[Rect](Rect.md).[autoHeight](Rect.md#autoheight)

#### Defined in

[src/ui/packages/display/src/UI.ts:192](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/display/src/UI.ts#L192)

___

### lockRatio

• `Optional` **lockRatio**: `boolean`

#### Implementation of

[IImage](../interfaces/IImage.md).[lockRatio](../interfaces/IImage.md#lockratio)

#### Inherited from

[Rect](Rect.md).[lockRatio](Rect.md#lockratio)

#### Defined in

[src/ui/packages/display/src/UI.ts:195](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/display/src/UI.ts#L195)

___

### autoBox

• `Optional` **autoBox**: [`IAutoBoxData`](../interfaces/IAutoBoxData.md) \| [`IConstraint`](../interfaces/IConstraint.md)

#### Implementation of

[IImage](../interfaces/IImage.md).[autoBox](../interfaces/IImage.md#autobox)

#### Inherited from

[Rect](Rect.md).[autoBox](Rect.md#autobox)

#### Defined in

[src/ui/packages/display/src/UI.ts:197](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/display/src/UI.ts#L197)

___

### widthRange

• `Optional` **widthRange**: [`IRangeSize`](../interfaces/IRangeSize.md)

#### Implementation of

[IImage](../interfaces/IImage.md).[widthRange](../interfaces/IImage.md#widthrange)

#### Inherited from

[Rect](Rect.md).[widthRange](Rect.md#widthrange)

#### Defined in

[src/ui/packages/display/src/UI.ts:200](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/display/src/UI.ts#L200)

___

### heightRange

• `Optional` **heightRange**: [`IRangeSize`](../interfaces/IRangeSize.md)

#### Implementation of

[IImage](../interfaces/IImage.md).[heightRange](../interfaces/IImage.md#heightrange)

#### Inherited from

[Rect](Rect.md).[heightRange](Rect.md#heightrange)

#### Defined in

[src/ui/packages/display/src/UI.ts:203](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/display/src/UI.ts#L203)

___

### draggable

• `Optional` **draggable**: `boolean` \| [`IAxis`](../modules.md#iaxis)

#### Implementation of

[IImage](../interfaces/IImage.md).[draggable](../interfaces/IImage.md#draggable)

#### Inherited from

[Rect](Rect.md).[draggable](Rect.md#draggable)

#### Defined in

[src/ui/packages/display/src/UI.ts:208](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/display/src/UI.ts#L208)

___

### dragBounds

• `Optional` **dragBounds**: ``"parent"`` \| [`IBoundsData`](../interfaces/IBoundsData.md)

#### Implementation of

[IImage](../interfaces/IImage.md).[dragBounds](../interfaces/IImage.md#dragbounds)

#### Inherited from

[Rect](Rect.md).[dragBounds](Rect.md#dragbounds)

#### Defined in

[src/ui/packages/display/src/UI.ts:211](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/display/src/UI.ts#L211)

___

### dragBoundsType

• `Optional` **dragBoundsType**: [`IDragBoundsType`](../modules.md#idragboundstype)

#### Implementation of

[IImage](../interfaces/IImage.md).[dragBoundsType](../interfaces/IImage.md#dragboundstype)

#### Inherited from

[Rect](Rect.md).[dragBoundsType](Rect.md#dragboundstype)

#### Defined in

[src/ui/packages/display/src/UI.ts:214](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/display/src/UI.ts#L214)

___

### editable

• `Optional` **editable**: `boolean`

#### Implementation of

[IImage](../interfaces/IImage.md).[editable](../interfaces/IImage.md#editable)

#### Inherited from

[Rect](Rect.md).[editable](Rect.md#editable)

#### Defined in

[src/ui/packages/display/src/UI.ts:218](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/display/src/UI.ts#L218)

___

### hittable

• `Optional` **hittable**: `boolean`

#### Implementation of

[IImage](../interfaces/IImage.md).[hittable](../interfaces/IImage.md#hittable)

#### Inherited from

[Rect](Rect.md).[hittable](Rect.md#hittable)

#### Defined in

[src/ui/packages/display/src/UI.ts:223](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/display/src/UI.ts#L223)

___

### hitFill

• `Optional` **hitFill**: [`IHitType`](../modules.md#ihittype)

#### Implementation of

[IImage](../interfaces/IImage.md).[hitFill](../interfaces/IImage.md#hitfill)

#### Inherited from

[Rect](Rect.md).[hitFill](Rect.md#hitfill)

#### Defined in

[src/ui/packages/display/src/UI.ts:226](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/display/src/UI.ts#L226)

___

### hitStroke

• `Optional` **hitStroke**: [`IHitType`](../modules.md#ihittype)

#### Implementation of

[IImage](../interfaces/IImage.md).[hitStroke](../interfaces/IImage.md#hitstroke)

#### Inherited from

[Rect](Rect.md).[hitStroke](Rect.md#hitstroke)

#### Defined in

[src/ui/packages/display/src/UI.ts:229](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/display/src/UI.ts#L229)

___

### hitBox

• `Optional` **hitBox**: `boolean`

#### Implementation of

[IImage](../interfaces/IImage.md).[hitBox](../interfaces/IImage.md#hitbox)

#### Inherited from

[Rect](Rect.md).[hitBox](Rect.md#hitbox)

#### Defined in

[src/ui/packages/display/src/UI.ts:232](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/display/src/UI.ts#L232)

___

### hitChildren

• `Optional` **hitChildren**: `boolean`

#### Implementation of

[IImage](../interfaces/IImage.md).[hitChildren](../interfaces/IImage.md#hitchildren)

#### Inherited from

[Rect](Rect.md).[hitChildren](Rect.md#hitchildren)

#### Defined in

[src/ui/packages/display/src/UI.ts:235](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/display/src/UI.ts#L235)

___

### hitSelf

• `Optional` **hitSelf**: `boolean`

#### Implementation of

[IImage](../interfaces/IImage.md).[hitSelf](../interfaces/IImage.md#hitself)

#### Inherited from

[Rect](Rect.md).[hitSelf](Rect.md#hitself)

#### Defined in

[src/ui/packages/display/src/UI.ts:238](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/display/src/UI.ts#L238)

___

### hitRadius

• `Optional` **hitRadius**: `number`

#### Implementation of

[IImage](../interfaces/IImage.md).[hitRadius](../interfaces/IImage.md#hitradius)

#### Inherited from

[Rect](Rect.md).[hitRadius](Rect.md#hitradius)

#### Defined in

[src/ui/packages/display/src/UI.ts:241](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/display/src/UI.ts#L241)

___

### cursor

• `Optional` **cursor**: [`ICursorType`](../modules.md#icursortype) \| [`ICursorType`](../modules.md#icursortype)[]

#### Implementation of

[IImage](../interfaces/IImage.md).[cursor](../interfaces/IImage.md#cursor)

#### Inherited from

[Rect](Rect.md).[cursor](Rect.md#cursor)

#### Defined in

[src/ui/packages/display/src/UI.ts:244](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/display/src/UI.ts#L244)

___

### fill

• `Optional` **fill**: [`IFill`](../modules.md#ifill)

#### Implementation of

[IImage](../interfaces/IImage.md).[fill](../interfaces/IImage.md#fill)

#### Inherited from

[Rect](Rect.md).[fill](Rect.md#fill)

#### Defined in

[src/ui/packages/display/src/UI.ts:252](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/display/src/UI.ts#L252)

___

### stroke

• `Optional` **stroke**: [`IStroke`](../modules.md#istroke)

#### Implementation of

[IImage](../interfaces/IImage.md).[stroke](../interfaces/IImage.md#stroke)

#### Inherited from

[Rect](Rect.md).[stroke](Rect.md#stroke)

#### Defined in

[src/ui/packages/display/src/UI.ts:257](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/display/src/UI.ts#L257)

___

### strokeAlign

• `Optional` **strokeAlign**: [`IStrokeAlign`](../modules.md#istrokealign)

#### Implementation of

[IImage](../interfaces/IImage.md).[strokeAlign](../interfaces/IImage.md#strokealign)

#### Inherited from

[Rect](Rect.md).[strokeAlign](Rect.md#strokealign)

#### Defined in

[src/ui/packages/display/src/UI.ts:260](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/display/src/UI.ts#L260)

___

### strokeWidth

• `Optional` **strokeWidth**: `string` \| [`IFourNumber`](../modules.md#ifournumber)

#### Implementation of

[IImage](../interfaces/IImage.md).[strokeWidth](../interfaces/IImage.md#strokewidth)

#### Inherited from

[Rect](Rect.md).[strokeWidth](Rect.md#strokewidth)

#### Defined in

[src/ui/packages/display/src/UI.ts:263](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/display/src/UI.ts#L263)

___

### strokeScaleFixed

• `Optional` **strokeScaleFixed**: [`IScaleFixed`](../modules.md#iscalefixed)

#### Implementation of

[IImage](../interfaces/IImage.md).[strokeScaleFixed](../interfaces/IImage.md#strokescalefixed)

#### Inherited from

[Rect](Rect.md).[strokeScaleFixed](Rect.md#strokescalefixed)

#### Defined in

[src/ui/packages/display/src/UI.ts:266](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/display/src/UI.ts#L266)

___

### strokeCap

• `Optional` **strokeCap**: [`IStrokeCap`](../modules.md#istrokecap)

#### Implementation of

[IImage](../interfaces/IImage.md).[strokeCap](../interfaces/IImage.md#strokecap)

#### Inherited from

[Rect](Rect.md).[strokeCap](Rect.md#strokecap)

#### Defined in

[src/ui/packages/display/src/UI.ts:273](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/display/src/UI.ts#L273)

___

### strokeJoin

• `Optional` **strokeJoin**: [`IStrokeJoin`](../modules.md#istrokejoin)

#### Implementation of

[IImage](../interfaces/IImage.md).[strokeJoin](../interfaces/IImage.md#strokejoin)

#### Inherited from

[Rect](Rect.md).[strokeJoin](Rect.md#strokejoin)

#### Defined in

[src/ui/packages/display/src/UI.ts:276](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/display/src/UI.ts#L276)

___

### dashPattern

• `Optional` **dashPattern**: `string` \| `number`[]

#### Implementation of

[IImage](../interfaces/IImage.md).[dashPattern](../interfaces/IImage.md#dashpattern)

#### Inherited from

[Rect](Rect.md).[dashPattern](Rect.md#dashpattern)

#### Defined in

[src/ui/packages/display/src/UI.ts:279](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/display/src/UI.ts#L279)

___

### dashOffset

• `Optional` **dashOffset**: `number`

#### Implementation of

[IImage](../interfaces/IImage.md).[dashOffset](../interfaces/IImage.md#dashoffset)

#### Inherited from

[Rect](Rect.md).[dashOffset](Rect.md#dashoffset)

#### Defined in

[src/ui/packages/display/src/UI.ts:282](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/display/src/UI.ts#L282)

___

### miterLimit

• `Optional` **miterLimit**: `number`

#### Implementation of

[IImage](../interfaces/IImage.md).[miterLimit](../interfaces/IImage.md#miterlimit)

#### Inherited from

[Rect](Rect.md).[miterLimit](Rect.md#miterlimit)

#### Defined in

[src/ui/packages/display/src/UI.ts:285](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/display/src/UI.ts#L285)

___

### startArrow

• `Optional` **startArrow**: [`IArrowStyle`](../modules.md#iarrowstyle)

#### Implementation of

[IImage](../interfaces/IImage.md).[startArrow](../interfaces/IImage.md#startarrow)

#### Inherited from

[Rect](Rect.md).[startArrow](Rect.md#startarrow)

#### Defined in

[src/ui/packages/display/src/UI.ts:290](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/display/src/UI.ts#L290)

___

### endArrow

• `Optional` **endArrow**: [`IArrowStyle`](../modules.md#iarrowstyle)

#### Implementation of

[IImage](../interfaces/IImage.md).[endArrow](../interfaces/IImage.md#endarrow)

#### Inherited from

[Rect](Rect.md).[endArrow](Rect.md#endarrow)

#### Defined in

[src/ui/packages/display/src/UI.ts:292](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/display/src/UI.ts#L292)

___

### cornerRadius

• `Optional` **cornerRadius**: `string` \| [`IFourNumber`](../modules.md#ifournumber)

#### Implementation of

[IImage](../interfaces/IImage.md).[cornerRadius](../interfaces/IImage.md#cornerradius)

#### Inherited from

[Rect](Rect.md).[cornerRadius](Rect.md#cornerradius)

#### Defined in

[src/ui/packages/display/src/UI.ts:297](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/display/src/UI.ts#L297)

___

### cornerSmoothing

• `Optional` **cornerSmoothing**: `number`

#### Implementation of

[IImage](../interfaces/IImage.md).[cornerSmoothing](../interfaces/IImage.md#cornersmoothing)

#### Inherited from

[Rect](Rect.md).[cornerSmoothing](Rect.md#cornersmoothing)

#### Defined in

[src/ui/packages/display/src/UI.ts:300](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/display/src/UI.ts#L300)

___

### shadow

• `Optional` **shadow**: `string` \| [`IShadowEffect`](../interfaces/IShadowEffect.md) \| [`IShadowEffect`](../interfaces/IShadowEffect.md)[]

#### Implementation of

[IImage](../interfaces/IImage.md).[shadow](../interfaces/IImage.md#shadow)

#### Inherited from

[Rect](Rect.md).[shadow](Rect.md#shadow)

#### Defined in

[src/ui/packages/display/src/UI.ts:305](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/display/src/UI.ts#L305)

___

### innerShadow

• `Optional` **innerShadow**: `string` \| [`IShadowEffect`](../interfaces/IShadowEffect.md) \| [`IShadowEffect`](../interfaces/IShadowEffect.md)[]

#### Implementation of

[IImage](../interfaces/IImage.md).[innerShadow](../interfaces/IImage.md#innershadow)

#### Inherited from

[Rect](Rect.md).[innerShadow](Rect.md#innershadow)

#### Defined in

[src/ui/packages/display/src/UI.ts:308](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/display/src/UI.ts#L308)

___

### blur

• `Optional` **blur**: `number` \| [`IBlurEffect`](../interfaces/IBlurEffect.md)

#### Implementation of

[IImage](../interfaces/IImage.md).[blur](../interfaces/IImage.md#blur)

#### Inherited from

[Rect](Rect.md).[blur](Rect.md#blur)

#### Defined in

[src/ui/packages/display/src/UI.ts:311](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/display/src/UI.ts#L311)

___

### backgroundBlur

• `Optional` **backgroundBlur**: `number` \| [`IBlurEffect`](../interfaces/IBlurEffect.md)

#### Implementation of

[IImage](../interfaces/IImage.md).[backgroundBlur](../interfaces/IImage.md#backgroundblur)

#### Inherited from

[Rect](Rect.md).[backgroundBlur](Rect.md#backgroundblur)

#### Defined in

[src/ui/packages/display/src/UI.ts:314](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/display/src/UI.ts#L314)

___

### grayscale

• `Optional` **grayscale**: `number` \| [`IGrayscaleEffect`](../interfaces/IGrayscaleEffect.md)

#### Implementation of

[IImage](../interfaces/IImage.md).[grayscale](../interfaces/IImage.md#grayscale)

#### Inherited from

[Rect](Rect.md).[grayscale](Rect.md#grayscale)

#### Defined in

[src/ui/packages/display/src/UI.ts:317](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/display/src/UI.ts#L317)

___

### filter

• `Optional` **filter**: [`IFilter`](../interfaces/IFilter.md) \| [`IFilter`](../interfaces/IFilter.md)[]

#### Implementation of

[IImage](../interfaces/IImage.md).[filter](../interfaces/IImage.md#filter)

#### Inherited from

[Rect](Rect.md).[filter](Rect.md#filter)

#### Defined in

[src/ui/packages/display/src/UI.ts:320](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/display/src/UI.ts#L320)

___

### complex

• `Optional` **complex**: `boolean`

#### Implementation of

[IImage](../interfaces/IImage.md).[complex](../interfaces/IImage.md#complex)

#### Inherited from

[Rect](Rect.md).[complex](Rect.md#complex)

#### Defined in

[src/ui/packages/display/src/UI.ts:325](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/display/src/UI.ts#L325)

___

### animation

• `Optional` **animation**: [`IAnimation`](../modules.md#ianimation) \| [`IAnimation`](../modules.md#ianimation)[]

#### Implementation of

[IImage](../interfaces/IImage.md).[animation](../interfaces/IImage.md#animation)

#### Inherited from

[Rect](Rect.md).[animation](Rect.md#animation)

#### Defined in

[src/ui/packages/display/src/UI.ts:330](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/display/src/UI.ts#L330)

___

### animationOut

• `Optional` **animationOut**: [`IAnimation`](../modules.md#ianimation) \| [`IAnimation`](../modules.md#ianimation)[]

#### Implementation of

[IImage](../interfaces/IImage.md).[animationOut](../interfaces/IImage.md#animationout)

#### Inherited from

[Rect](Rect.md).[animationOut](Rect.md#animationout)

#### Defined in

[src/ui/packages/display/src/UI.ts:332](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/display/src/UI.ts#L332)

___

### transition

• `Optional` **transition**: [`ITransition`](../modules.md#itransition)

#### Implementation of

[IImage](../interfaces/IImage.md).[transition](../interfaces/IImage.md#transition)

#### Inherited from

[Rect](Rect.md).[transition](Rect.md#transition)

#### Defined in

[src/ui/packages/display/src/UI.ts:335](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/display/src/UI.ts#L335)

___

### transitionOut

• `Optional` **transitionOut**: [`ITransition`](../modules.md#itransition)

#### Implementation of

[IImage](../interfaces/IImage.md).[transitionOut](../interfaces/IImage.md#transitionout)

#### Inherited from

[Rect](Rect.md).[transitionOut](Rect.md#transitionout)

#### Defined in

[src/ui/packages/display/src/UI.ts:337](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/display/src/UI.ts#L337)

___

### motionPath

• `Optional` **motionPath**: `boolean`

#### Implementation of

[IImage](../interfaces/IImage.md).[motionPath](../interfaces/IImage.md#motionpath)

#### Inherited from

[Rect](Rect.md).[motionPath](Rect.md#motionpath)

#### Defined in

[src/ui/packages/display/src/UI.ts:342](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/display/src/UI.ts#L342)

___

### motionPrecision

• `Optional` **motionPrecision**: `number`

#### Implementation of

[IImage](../interfaces/IImage.md).[motionPrecision](../interfaces/IImage.md#motionprecision)

#### Inherited from

[Rect](Rect.md).[motionPrecision](Rect.md#motionprecision)

#### Defined in

[src/ui/packages/display/src/UI.ts:344](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/display/src/UI.ts#L344)

___

### motion

• `Optional` **motion**: `number` \| [`IUnitData`](../interfaces/IUnitData.md)

#### Implementation of

[IImage](../interfaces/IImage.md).[motion](../interfaces/IImage.md#motion)

#### Inherited from

[Rect](Rect.md).[motion](Rect.md#motion)

#### Defined in

[src/ui/packages/display/src/UI.ts:347](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/display/src/UI.ts#L347)

___

### motionRotation

• `Optional` **motionRotation**: `number` \| `boolean`

#### Implementation of

[IImage](../interfaces/IImage.md).[motionRotation](../interfaces/IImage.md#motionrotation)

#### Inherited from

[Rect](Rect.md).[motionRotation](Rect.md#motionrotation)

#### Defined in

[src/ui/packages/display/src/UI.ts:349](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/display/src/UI.ts#L349)

___

### states

• `Optional` **states**: [`IStates`](../interfaces/IStates.md)

#### Implementation of

[IImage](../interfaces/IImage.md).[states](../interfaces/IImage.md#states)

#### Inherited from

[Rect](Rect.md).[states](Rect.md#states)

#### Defined in

[src/ui/packages/display/src/UI.ts:354](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/display/src/UI.ts#L354)

___

### state

• `Optional` **state**: `string`

#### Implementation of

[IImage](../interfaces/IImage.md).[state](../interfaces/IImage.md#state)

#### Inherited from

[Rect](Rect.md).[state](Rect.md#state)

#### Defined in

[src/ui/packages/display/src/UI.ts:356](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/display/src/UI.ts#L356)

___

### selected

• `Optional` **selected**: `boolean`

#### Implementation of

[IImage](../interfaces/IImage.md).[selected](../interfaces/IImage.md#selected)

#### Inherited from

[Rect](Rect.md).[selected](Rect.md#selected)

#### Defined in

[src/ui/packages/display/src/UI.ts:359](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/display/src/UI.ts#L359)

___

### disabled

• `Optional` **disabled**: `boolean`

#### Implementation of

[IImage](../interfaces/IImage.md).[disabled](../interfaces/IImage.md#disabled)

#### Inherited from

[Rect](Rect.md).[disabled](Rect.md#disabled)

#### Defined in

[src/ui/packages/display/src/UI.ts:361](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/display/src/UI.ts#L361)

___

### normalStyle

• `Optional` **normalStyle**: [`IStateStyle`](../interfaces/IStateStyle.md)

#### Implementation of

[IImage](../interfaces/IImage.md).[normalStyle](../interfaces/IImage.md#normalstyle)

#### Inherited from

[Rect](Rect.md).[normalStyle](Rect.md#normalstyle)

#### Defined in

[src/ui/packages/display/src/UI.ts:364](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/display/src/UI.ts#L364)

___

### hoverStyle

• `Optional` **hoverStyle**: [`IStateStyle`](../interfaces/IStateStyle.md)

#### Implementation of

[IImage](../interfaces/IImage.md).[hoverStyle](../interfaces/IImage.md#hoverstyle)

#### Inherited from

[Rect](Rect.md).[hoverStyle](Rect.md#hoverstyle)

#### Defined in

[src/ui/packages/display/src/UI.ts:366](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/display/src/UI.ts#L366)

___

### pressStyle

• `Optional` **pressStyle**: [`IStateStyle`](../interfaces/IStateStyle.md)

#### Implementation of

[IImage](../interfaces/IImage.md).[pressStyle](../interfaces/IImage.md#pressstyle)

#### Inherited from

[Rect](Rect.md).[pressStyle](Rect.md#pressstyle)

#### Defined in

[src/ui/packages/display/src/UI.ts:368](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/display/src/UI.ts#L368)

___

### focusStyle

• `Optional` **focusStyle**: [`IStateStyle`](../interfaces/IStateStyle.md)

#### Implementation of

[IImage](../interfaces/IImage.md).[focusStyle](../interfaces/IImage.md#focusstyle)

#### Inherited from

[Rect](Rect.md).[focusStyle](Rect.md#focusstyle)

#### Defined in

[src/ui/packages/display/src/UI.ts:370](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/display/src/UI.ts#L370)

___

### selectedStyle

• `Optional` **selectedStyle**: [`IStateStyle`](../interfaces/IStateStyle.md)

#### Implementation of

[IImage](../interfaces/IImage.md).[selectedStyle](../interfaces/IImage.md#selectedstyle)

#### Inherited from

[Rect](Rect.md).[selectedStyle](Rect.md#selectedstyle)

#### Defined in

[src/ui/packages/display/src/UI.ts:372](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/display/src/UI.ts#L372)

___

### disabledStyle

• `Optional` **disabledStyle**: [`IStateStyle`](../interfaces/IStateStyle.md)

#### Implementation of

[IImage](../interfaces/IImage.md).[disabledStyle](../interfaces/IImage.md#disabledstyle)

#### Inherited from

[Rect](Rect.md).[disabledStyle](Rect.md#disabledstyle)

#### Defined in

[src/ui/packages/display/src/UI.ts:374](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/display/src/UI.ts#L374)

___

### placeholderStyle

• `Optional` **placeholderStyle**: [`IStateStyle`](../interfaces/IStateStyle.md)

#### Implementation of

[IImage](../interfaces/IImage.md).[placeholderStyle](../interfaces/IImage.md#placeholderstyle)

#### Inherited from

[Rect](Rect.md).[placeholderStyle](Rect.md#placeholderstyle)

#### Defined in

[src/ui/packages/display/src/UI.ts:377](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/display/src/UI.ts#L377)

___

### placeholderColor

• `Optional` **placeholderColor**: `string`

#### Implementation of

[IImage](../interfaces/IImage.md).[placeholderColor](../interfaces/IImage.md#placeholdercolor)

#### Inherited from

[Rect](Rect.md).[placeholderColor](Rect.md#placeholdercolor)

#### Defined in

[src/ui/packages/display/src/UI.ts:380](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/display/src/UI.ts#L380)

___

### placeholderDelay

• `Optional` **placeholderDelay**: `number`

#### Implementation of

[IImage](../interfaces/IImage.md).[placeholderDelay](../interfaces/IImage.md#placeholderdelay)

#### Inherited from

[Rect](Rect.md).[placeholderDelay](Rect.md#placeholderdelay)

#### Defined in

[src/ui/packages/display/src/UI.ts:383](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/display/src/UI.ts#L383)

___

### button

• `Optional` **button**: `boolean`

#### Implementation of

[IImage](../interfaces/IImage.md).[button](../interfaces/IImage.md#button)

#### Inherited from

[Rect](Rect.md).[button](Rect.md#button)

#### Defined in

[src/ui/packages/display/src/UI.ts:386](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/display/src/UI.ts#L386)

___

### editConfig

• **editConfig**: [`IEditorConfig`](../interfaces/IEditorConfig.md)

#### Implementation of

[IImage](../interfaces/IImage.md).[editConfig](../interfaces/IImage.md#editconfig)

#### Inherited from

[Rect](Rect.md).[editConfig](Rect.md#editconfig)

#### Defined in

[src/ui/packages/display/src/UI.ts:391](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/display/src/UI.ts#L391)

___

### editOuter

• **editOuter**: `string`

#### Implementation of

[IImage](../interfaces/IImage.md).[editOuter](../interfaces/IImage.md#editouter)

#### Inherited from

[Rect](Rect.md).[editOuter](Rect.md#editouter)

#### Defined in

[src/ui/packages/display/src/UI.ts:393](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/display/src/UI.ts#L393)

___

### editInner

• **editInner**: `string`

#### Implementation of

[IImage](../interfaces/IImage.md).[editInner](../interfaces/IImage.md#editinner)

#### Inherited from

[Rect](Rect.md).[editInner](Rect.md#editinner)

#### Defined in

[src/ui/packages/display/src/UI.ts:395](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/display/src/UI.ts#L395)

___

### data

• **data**: [`IObject`](../interfaces/IObject.md)

#### Implementation of

[IImage](../interfaces/IImage.md).[data](../interfaces/IImage.md#data)

#### Inherited from

[Rect](Rect.md).[data](Rect.md#data)

#### Defined in

[src/ui/packages/display/src/UI.ts:400](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/display/src/UI.ts#L400)

___

### useFastShadow

• `Optional` **useFastShadow**: `boolean`

#### Implementation of

[IImage](../interfaces/IImage.md).[useFastShadow](../interfaces/IImage.md#usefastshadow)

#### Inherited from

[Rect](Rect.md).[useFastShadow](Rect.md#usefastshadow)

#### Defined in

[src/ui/packages/display/src/UI.ts:409](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/display/src/UI.ts#L409)

___

### \_\_box

• `Optional` **\_\_box**: [`IUI`](../interfaces/IUI.md)

#### Implementation of

[IImage](../interfaces/IImage.md).[__box](../interfaces/IImage.md#__box)

#### Inherited from

[Rect](Rect.md).[__box](Rect.md#__box)

#### Defined in

[src/ui/packages/display/src/UI.ts:411](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/display/src/UI.ts#L411)

___

### \_\_animate

• `Optional` **\_\_animate**: [`IAnimate`](../interfaces/IAnimate.md) \| [`IAnimateList`](../interfaces/IAnimateList.md)

#### Implementation of

[IImage](../interfaces/IImage.md).[__animate](../interfaces/IImage.md#__animate)

#### Inherited from

[Rect](Rect.md).[__animate](Rect.md#__animate)

#### Defined in

[src/ui/packages/display/src/UI.ts:412](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/display/src/UI.ts#L412)

## Accessors

### tag

• `get` **tag**(): `string`

#### Returns

`string`

#### Implementation of

[IImage](../interfaces/IImage.md).[tag](../interfaces/IImage.md#tag)

#### Inherited from

Rect.tag

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:28](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/display/src/Leaf.ts#L28)

• `set` **tag**(`_value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `_value` | `string` |

#### Returns

`void`

#### Implementation of

[IImage](../interfaces/IImage.md).[tag](../interfaces/IImage.md#tag)

#### Inherited from

Rect.tag

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:29](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/display/src/Leaf.ts#L29)

___

### innerName

• `get` **innerName**(): `string`

#### Returns

`string`

#### Implementation of

[IImage](../interfaces/IImage.md).[innerName](../interfaces/IImage.md#innername)

#### Inherited from

Rect.innerName

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:34](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/display/src/Leaf.ts#L34)

___

### \_\_DataProcessor

• `get` **__DataProcessor**(): typeof [`LeafData`](LeafData.md)

#### Returns

typeof [`LeafData`](LeafData.md)

#### Implementation of

[IImage](../interfaces/IImage.md).[__DataProcessor](../interfaces/IImage.md#__dataprocessor)

#### Inherited from

Rect.\_\_DataProcessor

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:36](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/display/src/Leaf.ts#L36)

___

### \_\_LayoutProcessor

• `get` **__LayoutProcessor**(): typeof [`LeafLayout`](LeafLayout.md)

#### Returns

typeof [`LeafLayout`](LeafLayout.md)

#### Implementation of

[IImage](../interfaces/IImage.md).[__LayoutProcessor](../interfaces/IImage.md#__layoutprocessor)

#### Inherited from

Rect.\_\_LayoutProcessor

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:37](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/display/src/Leaf.ts#L37)

___

### leaferIsCreated

• `get` **leaferIsCreated**(): `boolean`

#### Returns

`boolean`

#### Implementation of

[IImage](../interfaces/IImage.md).[leaferIsCreated](../interfaces/IImage.md#leaferiscreated)

#### Inherited from

Rect.leaferIsCreated

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:42](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/display/src/Leaf.ts#L42)

___

### leaferIsReady

• `get` **leaferIsReady**(): `boolean`

#### Returns

`boolean`

#### Implementation of

[IImage](../interfaces/IImage.md).[leaferIsReady](../interfaces/IImage.md#leaferisready)

#### Inherited from

Rect.leaferIsReady

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:43](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/display/src/Leaf.ts#L43)

___

### isLeafer

• `get` **isLeafer**(): `boolean`

#### Returns

`boolean`

#### Implementation of

[IImage](../interfaces/IImage.md).[isLeafer](../interfaces/IImage.md#isleafer)

#### Inherited from

Rect.isLeafer

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:45](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/display/src/Leaf.ts#L45)

___

### isBranch

• `get` **isBranch**(): `boolean`

#### Returns

`boolean`

#### Implementation of

[IImage](../interfaces/IImage.md).[isBranch](../interfaces/IImage.md#isbranch)

#### Inherited from

Rect.isBranch

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:46](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/display/src/Leaf.ts#L46)

___

### isBranchLeaf

• `get` **isBranchLeaf**(): `boolean`

#### Returns

`boolean`

#### Implementation of

[IImage](../interfaces/IImage.md).[isBranchLeaf](../interfaces/IImage.md#isbranchleaf)

#### Inherited from

Rect.isBranchLeaf

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:47](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/display/src/Leaf.ts#L47)

___

### \_\_localMatrix

• `get` **__localMatrix**(): [`IMatrixData`](../interfaces/IMatrixData.md)

#### Returns

[`IMatrixData`](../interfaces/IMatrixData.md)

#### Implementation of

[IImage](../interfaces/IImage.md).[__localMatrix](../interfaces/IImage.md#__localmatrix)

#### Inherited from

Rect.\_\_localMatrix

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:62](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/display/src/Leaf.ts#L62)

___

### \_\_localBoxBounds

• `get` **__localBoxBounds**(): [`IBoundsData`](../interfaces/IBoundsData.md)

#### Returns

[`IBoundsData`](../interfaces/IBoundsData.md)

#### Implementation of

[IImage](../interfaces/IImage.md).[__localBoxBounds](../interfaces/IImage.md#__localboxbounds)

#### Inherited from

Rect.\_\_localBoxBounds

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:63](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/display/src/Leaf.ts#L63)

___

### worldTransform

• `get` **worldTransform**(): [`IMatrixWithScaleData`](../interfaces/IMatrixWithScaleData.md)

#### Returns

[`IMatrixWithScaleData`](../interfaces/IMatrixWithScaleData.md)

#### Implementation of

[IImage](../interfaces/IImage.md).[worldTransform](../interfaces/IImage.md#worldtransform)

#### Inherited from

Rect.worldTransform

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:68](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/display/src/Leaf.ts#L68)

___

### localTransform

• `get` **localTransform**(): [`IMatrixData`](../interfaces/IMatrixData.md)

#### Returns

[`IMatrixData`](../interfaces/IMatrixData.md)

#### Implementation of

[IImage](../interfaces/IImage.md).[localTransform](../interfaces/IImage.md#localtransform)

#### Inherited from

Rect.localTransform

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:69](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/display/src/Leaf.ts#L69)

___

### scrollWorldTransform

• `get` **scrollWorldTransform**(): [`IMatrixWithScaleData`](../interfaces/IMatrixWithScaleData.md)

#### Returns

[`IMatrixWithScaleData`](../interfaces/IMatrixWithScaleData.md)

#### Implementation of

[IImage](../interfaces/IImage.md).[scrollWorldTransform](../interfaces/IImage.md#scrollworldtransform)

#### Inherited from

Rect.scrollWorldTransform

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:72](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/display/src/Leaf.ts#L72)

___

### boxBounds

• `get` **boxBounds**(): [`IBoundsData`](../interfaces/IBoundsData.md)

#### Returns

[`IBoundsData`](../interfaces/IBoundsData.md)

#### Implementation of

[IImage](../interfaces/IImage.md).[boxBounds](../interfaces/IImage.md#boxbounds)

#### Inherited from

Rect.boxBounds

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:75](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/display/src/Leaf.ts#L75)

___

### renderBounds

• `get` **renderBounds**(): [`IBoundsData`](../interfaces/IBoundsData.md)

#### Returns

[`IBoundsData`](../interfaces/IBoundsData.md)

#### Implementation of

[IImage](../interfaces/IImage.md).[renderBounds](../interfaces/IImage.md#renderbounds)

#### Inherited from

Rect.renderBounds

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:76](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/display/src/Leaf.ts#L76)

___

### worldBoxBounds

• `get` **worldBoxBounds**(): [`IBoundsData`](../interfaces/IBoundsData.md)

#### Returns

[`IBoundsData`](../interfaces/IBoundsData.md)

#### Implementation of

[IImage](../interfaces/IImage.md).[worldBoxBounds](../interfaces/IImage.md#worldboxbounds)

#### Inherited from

Rect.worldBoxBounds

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:77](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/display/src/Leaf.ts#L77)

___

### worldStrokeBounds

• `get` **worldStrokeBounds**(): [`IBoundsData`](../interfaces/IBoundsData.md)

#### Returns

[`IBoundsData`](../interfaces/IBoundsData.md)

#### Implementation of

[IImage](../interfaces/IImage.md).[worldStrokeBounds](../interfaces/IImage.md#worldstrokebounds)

#### Inherited from

Rect.worldStrokeBounds

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:78](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/display/src/Leaf.ts#L78)

___

### worldRenderBounds

• `get` **worldRenderBounds**(): [`IBoundsData`](../interfaces/IBoundsData.md)

#### Returns

[`IBoundsData`](../interfaces/IBoundsData.md)

#### Implementation of

[IImage](../interfaces/IImage.md).[worldRenderBounds](../interfaces/IImage.md#worldrenderbounds)

#### Inherited from

Rect.worldRenderBounds

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:79](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/display/src/Leaf.ts#L79)

___

### worldOpacity

• `get` **worldOpacity**(): `number`

#### Returns

`number`

#### Implementation of

[IImage](../interfaces/IImage.md).[worldOpacity](../interfaces/IImage.md#worldopacity)

#### Inherited from

Rect.worldOpacity

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:82](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/display/src/Leaf.ts#L82)

___

### \_\_worldFlipped

• `get` **__worldFlipped**(): `boolean`

#### Returns

`boolean`

#### Implementation of

[IImage](../interfaces/IImage.md).[__worldFlipped](../interfaces/IImage.md#__worldflipped)

#### Inherited from

Rect.\_\_worldFlipped

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:87](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/display/src/Leaf.ts#L87)

___

### \_\_onlyHitMask

• `get` **__onlyHitMask**(): `boolean`

#### Returns

`boolean`

#### Implementation of

[IImage](../interfaces/IImage.md).[__onlyHitMask](../interfaces/IImage.md#__onlyhitmask)

#### Inherited from

Rect.\_\_onlyHitMask

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:94](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/display/src/Leaf.ts#L94)

___

### \_\_ignoreHitWorld

• `get` **__ignoreHitWorld**(): `boolean`

#### Returns

`boolean`

#### Implementation of

[IImage](../interfaces/IImage.md).[__ignoreHitWorld](../interfaces/IImage.md#__ignorehitworld)

#### Inherited from

Rect.\_\_ignoreHitWorld

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:95](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/display/src/Leaf.ts#L95)

___

### \_\_inLazyBounds

• `get` **__inLazyBounds**(): `boolean`

#### Returns

`boolean`

#### Implementation of

[IImage](../interfaces/IImage.md).[__inLazyBounds](../interfaces/IImage.md#__inlazybounds)

#### Inherited from

Rect.\_\_inLazyBounds

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:96](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/display/src/Leaf.ts#L96)

___

### pathInputed

• `get` **pathInputed**(): `boolean`

#### Returns

`boolean`

#### Implementation of

[IImage](../interfaces/IImage.md).[pathInputed](../interfaces/IImage.md#pathinputed)

#### Inherited from

Rect.pathInputed

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:98](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/display/src/Leaf.ts#L98)

___

### event

• `set` **event**(`map`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `map` | [`IEventParamsMap`](../interfaces/IEventParamsMap.md) |

#### Returns

`void`

#### Implementation of

[IImage](../interfaces/IImage.md).[event](../interfaces/IImage.md#event)

#### Inherited from

Rect.event

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:101](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/display/src/Leaf.ts#L101)

___

### \_\_tag

• `get` **__tag**(): `string`

#### Returns

`string`

#### Implementation of

[IImage](../interfaces/IImage.md).[__tag](../interfaces/IImage.md#__tag)

#### Overrides

Rect.\_\_tag

#### Defined in

[src/ui/packages/display/src/Image.ts:13](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/display/src/Image.ts#L13)

___

### ready

• `get` **ready**(): `boolean`

#### Returns

`boolean`

#### Implementation of

[IImage](../interfaces/IImage.md).[ready](../interfaces/IImage.md#ready)

#### Defined in

[src/ui/packages/display/src/Image.ts:21](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/display/src/Image.ts#L21)

___

### image

• `get` **image**(): [`ILeaferImage`](../interfaces/ILeaferImage.md)

#### Returns

[`ILeaferImage`](../interfaces/ILeaferImage.md)

#### Implementation of

[IImage](../interfaces/IImage.md).[image](../interfaces/IImage.md#image)

#### Defined in

[src/ui/packages/display/src/Image.ts:23](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/display/src/Image.ts#L23)

___

### app

• `get` **app**(): [`ILeafer`](../interfaces/ILeafer.md)

#### Returns

[`ILeafer`](../interfaces/ILeafer.md)

#### Implementation of

[IImage](../interfaces/IImage.md).[app](../interfaces/IImage.md#app)

#### Inherited from

Rect.app

#### Defined in

[src/ui/packages/display/src/UI.ts:24](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/display/src/UI.ts#L24)

___

### isFrame

• `get` **isFrame**(): `boolean`

#### Returns

`boolean`

#### Implementation of

[IImage](../interfaces/IImage.md).[isFrame](../interfaces/IImage.md#isframe)

#### Inherited from

Rect.isFrame

#### Defined in

[src/ui/packages/display/src/UI.ts:32](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/display/src/UI.ts#L32)

___

### strokeWidthFixed

• `get` **strokeWidthFixed**(): [`IScaleFixed`](../modules.md#iscalefixed)

#### Returns

[`IScaleFixed`](../modules.md#iscalefixed)

#### Inherited from

Rect.strokeWidthFixed

#### Defined in

[src/ui/packages/display/src/UI.ts:270](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/display/src/UI.ts#L270)

• `set` **strokeWidthFixed**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | [`IScaleFixed`](../modules.md#iscalefixed) |

#### Returns

`void`

#### Inherited from

Rect.strokeWidthFixed

#### Defined in

[src/ui/packages/display/src/UI.ts:269](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/display/src/UI.ts#L269)

___

### scale

• `get` **scale**(): `number` \| [`IPointData`](../interfaces/IPointData.md)

#### Returns

`number` \| [`IPointData`](../interfaces/IPointData.md)

#### Implementation of

[IImage](../interfaces/IImage.md).[scale](../interfaces/IImage.md#scale)

#### Inherited from

Rect.scale

#### Defined in

[src/ui/packages/display/src/UI.ts:404](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/display/src/UI.ts#L404)

• `set` **scale**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `number` \| [`IPointData`](../interfaces/IPointData.md) |

#### Returns

`void`

#### Implementation of

[IImage](../interfaces/IImage.md).[scale](../interfaces/IImage.md#scale)

#### Inherited from

Rect.scale

#### Defined in

[src/ui/packages/display/src/UI.ts:403](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/display/src/UI.ts#L403)

___

### isAutoWidth

• `get` **isAutoWidth**(): `boolean`

#### Returns

`boolean`

#### Implementation of

[IImage](../interfaces/IImage.md).[isAutoWidth](../interfaces/IImage.md#isautowidth)

#### Inherited from

Rect.isAutoWidth

#### Defined in

[src/ui/packages/display/src/UI.ts:406](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/display/src/UI.ts#L406)

___

### isAutoHeight

• `get` **isAutoHeight**(): `boolean`

#### Returns

`boolean`

#### Implementation of

[IImage](../interfaces/IImage.md).[isAutoHeight](../interfaces/IImage.md#isautoheight)

#### Inherited from

Rect.isAutoHeight

#### Defined in

[src/ui/packages/display/src/UI.ts:407](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/display/src/UI.ts#L407)

___

### pen

• `get` **pen**(): [`IPathCreator`](../interfaces/IPathCreator.md)

#### Returns

[`IPathCreator`](../interfaces/IPathCreator.md)

#### Implementation of

[IImage](../interfaces/IImage.md).[pen](../interfaces/IImage.md#pen)

#### Inherited from

Rect.pen

#### Defined in

[src/ui/packages/display/src/UI.ts:414](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/display/src/UI.ts#L414)

## Methods

### resetCustom

▸ **resetCustom**(): `void`

#### Returns

`void`

#### Implementation of

[IImage](../interfaces/IImage.md).[resetCustom](../interfaces/IImage.md#resetcustom)

#### Inherited from

[Rect](Rect.md).[resetCustom](Rect.md#resetcustom)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:143](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/display/src/Leaf.ts#L143)

___

### waitParent

▸ **waitParent**(`item`, `bind?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `item` | [`IFunction`](../interfaces/IFunction.md) |
| `bind?` | [`IObject`](../interfaces/IObject.md) |

#### Returns

`void`

#### Implementation of

[IImage](../interfaces/IImage.md).[waitParent](../interfaces/IImage.md#waitparent)

#### Inherited from

[Rect](Rect.md).[waitParent](Rect.md#waitparent)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:149](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/display/src/Leaf.ts#L149)

___

### waitLeafer

▸ **waitLeafer**(`item`, `bind?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `item` | [`IFunction`](../interfaces/IFunction.md) |
| `bind?` | [`IObject`](../interfaces/IObject.md) |

#### Returns

`void`

#### Implementation of

[IImage](../interfaces/IImage.md).[waitLeafer](../interfaces/IImage.md#waitleafer)

#### Inherited from

[Rect](Rect.md).[waitLeafer](Rect.md#waitleafer)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:154](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/display/src/Leaf.ts#L154)

___

### nextRender

▸ **nextRender**(`item`, `bind?`, `off?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `item` | [`IFunction`](../interfaces/IFunction.md) |
| `bind?` | [`IObject`](../interfaces/IObject.md) |
| `off?` | ``"off"`` |

#### Returns

`void`

#### Implementation of

[IImage](../interfaces/IImage.md).[nextRender](../interfaces/IImage.md#nextrender)

#### Inherited from

[Rect](Rect.md).[nextRender](Rect.md#nextrender)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:159](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/display/src/Leaf.ts#L159)

___

### removeNextRender

▸ **removeNextRender**(`item`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `item` | [`IFunction`](../interfaces/IFunction.md) |

#### Returns

`void`

#### Implementation of

[IImage](../interfaces/IImage.md).[removeNextRender](../interfaces/IImage.md#removenextrender)

#### Inherited from

[Rect](Rect.md).[removeNextRender](Rect.md#removenextrender)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:163](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/display/src/Leaf.ts#L163)

___

### \_\_bindLeafer

▸ **__bindLeafer**(`leafer`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `leafer` | [`ILeaferBase`](../interfaces/ILeaferBase.md) |

#### Returns

`void`

#### Implementation of

[IImage](../interfaces/IImage.md).[__bindLeafer](../interfaces/IImage.md#__bindleafer)

#### Inherited from

[Rect](Rect.md).[__bindLeafer](Rect.md#__bindleafer)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:167](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/display/src/Leaf.ts#L167)

___

### setAttr

▸ **setAttr**(`name`, `value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |
| `value` | `any` |

#### Returns

`void`

#### Implementation of

[IImage](../interfaces/IImage.md).[setAttr](../interfaces/IImage.md#setattr)

#### Inherited from

[Rect](Rect.md).[setAttr](Rect.md#setattr)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:198](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/display/src/Leaf.ts#L198)

___

### getAttr

▸ **getAttr**(`name`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |

#### Returns

`any`

#### Implementation of

[IImage](../interfaces/IImage.md).[getAttr](../interfaces/IImage.md#getattr)

#### Inherited from

[Rect](Rect.md).[getAttr](Rect.md#getattr)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:199](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/display/src/Leaf.ts#L199)

___

### getComputedAttr

▸ **getComputedAttr**(`name`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |

#### Returns

`any`

#### Implementation of

[IImage](../interfaces/IImage.md).[getComputedAttr](../interfaces/IImage.md#getcomputedattr)

#### Inherited from

[Rect](Rect.md).[getComputedAttr](Rect.md#getcomputedattr)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:201](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/display/src/Leaf.ts#L201)

___

### toJSON

▸ **toJSON**(`options?`): [`IObject`](../interfaces/IObject.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | [`IJSONOptions`](../interfaces/IJSONOptions.md) |

#### Returns

[`IObject`](../interfaces/IObject.md)

#### Implementation of

[IImage](../interfaces/IImage.md).[toJSON](../interfaces/IImage.md#tojson)

#### Inherited from

[Rect](Rect.md).[toJSON](Rect.md#tojson)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:203](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/display/src/Leaf.ts#L203)

___

### toString

▸ **toString**(`options?`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | [`IJSONOptions`](../interfaces/IJSONOptions.md) |

#### Returns

`string`

#### Implementation of

[IImage](../interfaces/IImage.md).[toString](../interfaces/IImage.md#tostring)

#### Inherited from

[Rect](Rect.md).[toString](Rect.md#tostring)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:208](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/display/src/Leaf.ts#L208)

___

### toSVG

▸ **toSVG**(): `string`

#### Returns

`string`

#### Implementation of

[IImage](../interfaces/IImage.md).[toSVG](../interfaces/IImage.md#tosvg)

#### Inherited from

[Rect](Rect.md).[toSVG](Rect.md#tosvg)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:212](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/display/src/Leaf.ts#L212)

___

### \_\_SVG

▸ **__SVG**(`_data`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `_data` | [`IObject`](../interfaces/IObject.md) |

#### Returns

`void`

#### Implementation of

[IImage](../interfaces/IImage.md).[__SVG](../interfaces/IImage.md#__svg)

#### Inherited from

[Rect](Rect.md).[__SVG](Rect.md#__svg)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:214](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/display/src/Leaf.ts#L214)

___

### toHTML

▸ **toHTML**(): `string`

#### Returns

`string`

#### Implementation of

[IImage](../interfaces/IImage.md).[toHTML](../interfaces/IImage.md#tohtml)

#### Inherited from

[Rect](Rect.md).[toHTML](Rect.md#tohtml)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:216](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/display/src/Leaf.ts#L216)

___

### \_\_setAttr

▸ **__setAttr**(`_attrName`, `_newValue`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `_attrName` | `string` |
| `_newValue` | [`IValue`](../modules.md#ivalue) |

#### Returns

`boolean`

#### Implementation of

[IImage](../interfaces/IImage.md).[__setAttr](../interfaces/IImage.md#__setattr)

#### Inherited from

[Rect](Rect.md).[__setAttr](Rect.md#__setattr)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:220](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/display/src/Leaf.ts#L220)

___

### \_\_getAttr

▸ **__getAttr**(`_attrName`): [`IValue`](../modules.md#ivalue)

#### Parameters

| Name | Type |
| :------ | :------ |
| `_attrName` | `string` |

#### Returns

[`IValue`](../modules.md#ivalue)

#### Implementation of

[IImage](../interfaces/IImage.md).[__getAttr](../interfaces/IImage.md#__getattr)

#### Inherited from

[Rect](Rect.md).[__getAttr](Rect.md#__getattr)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:222](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/display/src/Leaf.ts#L222)

___

### setProxyAttr

▸ **setProxyAttr**(`_attrName`, `_newValue`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `_attrName` | `string` |
| `_newValue` | [`IValue`](../modules.md#ivalue) |

#### Returns

`void`

#### Implementation of

[IImage](../interfaces/IImage.md).[setProxyAttr](../interfaces/IImage.md#setproxyattr)

#### Inherited from

[Rect](Rect.md).[setProxyAttr](Rect.md#setproxyattr)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:224](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/display/src/Leaf.ts#L224)

___

### getProxyAttr

▸ **getProxyAttr**(`_attrName`): [`IValue`](../modules.md#ivalue)

#### Parameters

| Name | Type |
| :------ | :------ |
| `_attrName` | `string` |

#### Returns

[`IValue`](../modules.md#ivalue)

#### Implementation of

[IImage](../interfaces/IImage.md).[getProxyAttr](../interfaces/IImage.md#getproxyattr)

#### Inherited from

[Rect](Rect.md).[getProxyAttr](Rect.md#getproxyattr)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:226](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/display/src/Leaf.ts#L226)

___

### focus

▸ **focus**(`_value?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `_value?` | `boolean` |

#### Returns

`void`

#### Implementation of

[IImage](../interfaces/IImage.md).[focus](../interfaces/IImage.md#focus)

#### Inherited from

[Rect](Rect.md).[focus](Rect.md#focus)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:246](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/display/src/Leaf.ts#L246)

___

### updateState

▸ **updateState**(): `void`

#### Returns

`void`

#### Implementation of

[IImage](../interfaces/IImage.md).[updateState](../interfaces/IImage.md#updatestate)

#### Inherited from

[Rect](Rect.md).[updateState](Rect.md#updatestate)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:248](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/display/src/Leaf.ts#L248)

___

### updateLayout

▸ **updateLayout**(): `void`

#### Returns

`void`

#### Implementation of

[IImage](../interfaces/IImage.md).[updateLayout](../interfaces/IImage.md#updatelayout)

#### Inherited from

[Rect](Rect.md).[updateLayout](Rect.md#updatelayout)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:253](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/display/src/Leaf.ts#L253)

___

### forceUpdate

▸ **forceUpdate**(`attrName?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `attrName?` | `string` |

#### Returns

`void`

#### Implementation of

[IImage](../interfaces/IImage.md).[forceUpdate](../interfaces/IImage.md#forceupdate)

#### Inherited from

[Rect](Rect.md).[forceUpdate](Rect.md#forceupdate)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:257](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/display/src/Leaf.ts#L257)

___

### forceRender

▸ **forceRender**(`_bounds?`, `_sync?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `_bounds?` | [`IBoundsData`](../interfaces/IBoundsData.md) |
| `_sync?` | `boolean` |

#### Returns

`void`

#### Implementation of

[IImage](../interfaces/IImage.md).[forceRender](../interfaces/IImage.md#forcerender)

#### Inherited from

[Rect](Rect.md).[forceRender](Rect.md#forcerender)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:265](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/display/src/Leaf.ts#L265)

___

### \_\_extraUpdate

▸ **__extraUpdate**(): `void`

#### Returns

`void`

#### Implementation of

[IImage](../interfaces/IImage.md).[__extraUpdate](../interfaces/IImage.md#__extraupdate)

#### Inherited from

[Rect](Rect.md).[__extraUpdate](Rect.md#__extraupdate)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:269](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/display/src/Leaf.ts#L269)

___

### \_\_updateWorldMatrix

▸ **__updateWorldMatrix**(): `void`

#### Returns

`void`

#### Implementation of

[IImage](../interfaces/IImage.md).[__updateWorldMatrix](../interfaces/IImage.md#__updateworldmatrix)

#### Inherited from

[Rect](Rect.md).[__updateWorldMatrix](Rect.md#__updateworldmatrix)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:275](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/display/src/Leaf.ts#L275)

___

### \_\_updateLocalMatrix

▸ **__updateLocalMatrix**(): `void`

#### Returns

`void`

#### Implementation of

[IImage](../interfaces/IImage.md).[__updateLocalMatrix](../interfaces/IImage.md#__updatelocalmatrix)

#### Inherited from

[Rect](Rect.md).[__updateLocalMatrix](Rect.md#__updatelocalmatrix)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:277](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/display/src/Leaf.ts#L277)

___

### \_\_updateWorldBounds

▸ **__updateWorldBounds**(): `void`

#### Returns

`void`

#### Implementation of

[IImage](../interfaces/IImage.md).[__updateWorldBounds](../interfaces/IImage.md#__updateworldbounds)

#### Inherited from

[Rect](Rect.md).[__updateWorldBounds](Rect.md#__updateworldbounds)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:283](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/display/src/Leaf.ts#L283)

___

### \_\_updateLocalBounds

▸ **__updateLocalBounds**(): `void`

#### Returns

`void`

#### Implementation of

[IImage](../interfaces/IImage.md).[__updateLocalBounds](../interfaces/IImage.md#__updatelocalbounds)

#### Inherited from

[Rect](Rect.md).[__updateLocalBounds](Rect.md#__updatelocalbounds)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:285](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/display/src/Leaf.ts#L285)

___

### \_\_updateLocalBoxBounds

▸ **__updateLocalBoxBounds**(): `void`

#### Returns

`void`

#### Implementation of

[IImage](../interfaces/IImage.md).[__updateLocalBoxBounds](../interfaces/IImage.md#__updatelocalboxbounds)

#### Inherited from

[Rect](Rect.md).[__updateLocalBoxBounds](Rect.md#__updatelocalboxbounds)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:288](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/display/src/Leaf.ts#L288)

___

### \_\_updateLocalStrokeBounds

▸ **__updateLocalStrokeBounds**(): `void`

#### Returns

`void`

#### Implementation of

[IImage](../interfaces/IImage.md).[__updateLocalStrokeBounds](../interfaces/IImage.md#__updatelocalstrokebounds)

#### Inherited from

[Rect](Rect.md).[__updateLocalStrokeBounds](Rect.md#__updatelocalstrokebounds)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:290](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/display/src/Leaf.ts#L290)

___

### \_\_updateLocalRenderBounds

▸ **__updateLocalRenderBounds**(): `void`

#### Returns

`void`

#### Implementation of

[IImage](../interfaces/IImage.md).[__updateLocalRenderBounds](../interfaces/IImage.md#__updatelocalrenderbounds)

#### Inherited from

[Rect](Rect.md).[__updateLocalRenderBounds](Rect.md#__updatelocalrenderbounds)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:292](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/display/src/Leaf.ts#L292)

___

### \_\_updateBoxBounds

▸ **__updateBoxBounds**(`_secondLayout?`, `_bounds?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `_secondLayout?` | `boolean` |
| `_bounds?` | [`IBoundsData`](../interfaces/IBoundsData.md) |

#### Returns

`void`

#### Implementation of

[IImage](../interfaces/IImage.md).[__updateBoxBounds](../interfaces/IImage.md#__updateboxbounds)

#### Inherited from

[Rect](Rect.md).[__updateBoxBounds](Rect.md#__updateboxbounds)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:296](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/display/src/Leaf.ts#L296)

___

### \_\_updateContentBounds

▸ **__updateContentBounds**(): `void`

#### Returns

`void`

#### Implementation of

[IImage](../interfaces/IImage.md).[__updateContentBounds](../interfaces/IImage.md#__updatecontentbounds)

#### Inherited from

[Rect](Rect.md).[__updateContentBounds](Rect.md#__updatecontentbounds)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:298](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/display/src/Leaf.ts#L298)

___

### \_\_updateStrokeBounds

▸ **__updateStrokeBounds**(`_bounds?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `_bounds?` | [`IBoundsData`](../interfaces/IBoundsData.md) |

#### Returns

`void`

#### Implementation of

[IImage](../interfaces/IImage.md).[__updateStrokeBounds](../interfaces/IImage.md#__updatestrokebounds)

#### Inherited from

[Rect](Rect.md).[__updateStrokeBounds](Rect.md#__updatestrokebounds)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:300](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/display/src/Leaf.ts#L300)

___

### \_\_updateRenderBounds

▸ **__updateRenderBounds**(`_bounds?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `_bounds?` | [`IBoundsData`](../interfaces/IBoundsData.md) |

#### Returns

`void`

#### Implementation of

[IImage](../interfaces/IImage.md).[__updateRenderBounds](../interfaces/IImage.md#__updaterenderbounds)

#### Inherited from

[Rect](Rect.md).[__updateRenderBounds](Rect.md#__updaterenderbounds)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:302](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/display/src/Leaf.ts#L302)

___

### \_\_updateAutoLayout

▸ **__updateAutoLayout**(): `void`

#### Returns

`void`

#### Implementation of

[IImage](../interfaces/IImage.md).[__updateAutoLayout](../interfaces/IImage.md#__updateautolayout)

#### Inherited from

[Rect](Rect.md).[__updateAutoLayout](Rect.md#__updateautolayout)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:305](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/display/src/Leaf.ts#L305)

___

### \_\_updateFlowLayout

▸ **__updateFlowLayout**(): `void`

#### Returns

`void`

#### Implementation of

[IImage](../interfaces/IImage.md).[__updateFlowLayout](../interfaces/IImage.md#__updateflowlayout)

#### Inherited from

[Rect](Rect.md).[__updateFlowLayout](Rect.md#__updateflowlayout)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:307](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/display/src/Leaf.ts#L307)

___

### \_\_updateNaturalSize

▸ **__updateNaturalSize**(): `void`

#### Returns

`void`

#### Implementation of

[IImage](../interfaces/IImage.md).[__updateNaturalSize](../interfaces/IImage.md#__updatenaturalsize)

#### Inherited from

[Rect](Rect.md).[__updateNaturalSize](Rect.md#__updatenaturalsize)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:309](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/display/src/Leaf.ts#L309)

___

### \_\_updateStrokeSpread

▸ **__updateStrokeSpread**(): [`IFourNumber`](../modules.md#ifournumber)

#### Returns

[`IFourNumber`](../modules.md#ifournumber)

#### Implementation of

[IImage](../interfaces/IImage.md).[__updateStrokeSpread](../interfaces/IImage.md#__updatestrokespread)

#### Inherited from

[Rect](Rect.md).[__updateStrokeSpread](Rect.md#__updatestrokespread)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:312](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/display/src/Leaf.ts#L312)

___

### \_\_updateRenderSpread

▸ **__updateRenderSpread**(): [`IFourNumber`](../modules.md#ifournumber)

#### Returns

[`IFourNumber`](../modules.md#ifournumber)

#### Implementation of

[IImage](../interfaces/IImage.md).[__updateRenderSpread](../interfaces/IImage.md#__updaterenderspread)

#### Inherited from

[Rect](Rect.md).[__updateRenderSpread](Rect.md#__updaterenderspread)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:314](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/display/src/Leaf.ts#L314)

___

### \_\_updateEraser

▸ **__updateEraser**(`value?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value?` | `boolean` |

#### Returns

`void`

#### Implementation of

[IImage](../interfaces/IImage.md).[__updateEraser](../interfaces/IImage.md#__updateeraser)

#### Inherited from

[Rect](Rect.md).[__updateEraser](Rect.md#__updateeraser)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:321](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/display/src/Leaf.ts#L321)

___

### \_\_renderEraser

▸ **__renderEraser**(`canvas`, `options`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `canvas` | [`ILeaferCanvas`](../interfaces/ILeaferCanvas.md) |
| `options` | [`IRenderOptions`](../interfaces/IRenderOptions.md) |

#### Returns

`void`

#### Implementation of

[IImage](../interfaces/IImage.md).[__renderEraser](../interfaces/IImage.md#__rendereraser)

#### Inherited from

[Rect](Rect.md).[__renderEraser](Rect.md#__rendereraser)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:325](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/display/src/Leaf.ts#L325)

___

### \_\_updateMask

▸ **__updateMask**(`_value?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `_value?` | `boolean` |

#### Returns

`void`

#### Implementation of

[IImage](../interfaces/IImage.md).[__updateMask](../interfaces/IImage.md#__updatemask)

#### Inherited from

[Rect](Rect.md).[__updateMask](Rect.md#__updatemask)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:333](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/display/src/Leaf.ts#L333)

___

### \_\_renderMask

▸ **__renderMask**(`_canvas`, `_options`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `_canvas` | [`ILeaferCanvas`](../interfaces/ILeaferCanvas.md) |
| `_options` | [`IRenderOptions`](../interfaces/IRenderOptions.md) |

#### Returns

`void`

#### Implementation of

[IImage](../interfaces/IImage.md).[__renderMask](../interfaces/IImage.md#__rendermask)

#### Inherited from

[Rect](Rect.md).[__renderMask](Rect.md#__rendermask)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:339](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/display/src/Leaf.ts#L339)

___

### \_\_getNowWorld

▸ **__getNowWorld**(`options`): [`IMatrixWithBoundsScaleData`](../interfaces/IMatrixWithBoundsScaleData.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | [`IRenderOptions`](../interfaces/IRenderOptions.md) |

#### Returns

[`IMatrixWithBoundsScaleData`](../interfaces/IMatrixWithBoundsScaleData.md)

#### Implementation of

[IImage](../interfaces/IImage.md).[__getNowWorld](../interfaces/IImage.md#__getnowworld)

#### Inherited from

[Rect](Rect.md).[__getNowWorld](Rect.md#__getnowworld)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:347](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/display/src/Leaf.ts#L347)

___

### getClampRenderScale

▸ **getClampRenderScale**(): `number`

#### Returns

`number`

#### Implementation of

[IImage](../interfaces/IImage.md).[getClampRenderScale](../interfaces/IImage.md#getclamprenderscale)

#### Inherited from

[Rect](Rect.md).[getClampRenderScale](Rect.md#getclamprenderscale)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:361](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/display/src/Leaf.ts#L361)

___

### getRenderScaleData

▸ **getRenderScaleData**(`abs?`, `scaleFixed?`, `unscale?`): [`IScaleData`](../interfaces/IScaleData.md)

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `abs?` | `boolean` | `undefined` |
| `scaleFixed?` | [`IScaleFixed`](../modules.md#iscalefixed) | `undefined` |
| `unscale` | `boolean` | `true` |

#### Returns

[`IScaleData`](../interfaces/IScaleData.md)

#### Implementation of

[IImage](../interfaces/IImage.md).[getRenderScaleData](../interfaces/IImage.md#getrenderscaledata)

#### Inherited from

[Rect](Rect.md).[getRenderScaleData](Rect.md#getrenderscaledata)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:367](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/display/src/Leaf.ts#L367)

___

### getTransform

▸ **getTransform**(`relative?`): [`IMatrixData`](../interfaces/IMatrixData.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `relative?` | [`ILeaf`](../interfaces/ILeaf.md) \| [`ILocationType`](../modules.md#ilocationtype) |

#### Returns

[`IMatrixData`](../interfaces/IMatrixData.md)

#### Implementation of

[IImage](../interfaces/IImage.md).[getTransform](../interfaces/IImage.md#gettransform)

#### Inherited from

[Rect](Rect.md).[getTransform](Rect.md#gettransform)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:371](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/display/src/Leaf.ts#L371)

___

### getBounds

▸ **getBounds**(`type?`, `relative?`): [`IBoundsData`](../interfaces/IBoundsData.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `type?` | [`IBoundsType`](../modules.md#iboundstype) |
| `relative?` | [`ILeaf`](../interfaces/ILeaf.md) \| [`ILocationType`](../modules.md#ilocationtype) |

#### Returns

[`IBoundsData`](../interfaces/IBoundsData.md)

#### Implementation of

[IImage](../interfaces/IImage.md).[getBounds](../interfaces/IImage.md#getbounds)

#### Inherited from

[Rect](Rect.md).[getBounds](Rect.md#getbounds)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:376](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/display/src/Leaf.ts#L376)

___

### getLayoutBounds

▸ **getLayoutBounds**(`type?`, `relative?`, `unscale?`): [`ILayoutBoundsData`](../interfaces/ILayoutBoundsData.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `type?` | [`IBoundsType`](../modules.md#iboundstype) |
| `relative?` | [`ILeaf`](../interfaces/ILeaf.md) \| [`ILocationType`](../modules.md#ilocationtype) |
| `unscale?` | `boolean` |

#### Returns

[`ILayoutBoundsData`](../interfaces/ILayoutBoundsData.md)

#### Implementation of

[IImage](../interfaces/IImage.md).[getLayoutBounds](../interfaces/IImage.md#getlayoutbounds)

#### Inherited from

[Rect](Rect.md).[getLayoutBounds](Rect.md#getlayoutbounds)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:380](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/display/src/Leaf.ts#L380)

___

### getLayoutPoints

▸ **getLayoutPoints**(`type?`, `relative?`): [`IPointData`](../interfaces/IPointData.md)[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `type?` | [`IBoundsType`](../modules.md#iboundstype) |
| `relative?` | [`ILeaf`](../interfaces/ILeaf.md) \| [`ILocationType`](../modules.md#ilocationtype) |

#### Returns

[`IPointData`](../interfaces/IPointData.md)[]

#### Implementation of

[IImage](../interfaces/IImage.md).[getLayoutPoints](../interfaces/IImage.md#getlayoutpoints)

#### Inherited from

[Rect](Rect.md).[getLayoutPoints](Rect.md#getlayoutpoints)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:384](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/display/src/Leaf.ts#L384)

___

### getWorldBounds

▸ **getWorldBounds**(`inner`, `relative?`, `change?`): [`IBoundsData`](../interfaces/IBoundsData.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `inner` | [`IBoundsData`](../interfaces/IBoundsData.md) |
| `relative?` | [`ILeaf`](../interfaces/ILeaf.md) |
| `change?` | `boolean` |

#### Returns

[`IBoundsData`](../interfaces/IBoundsData.md)

#### Implementation of

[IImage](../interfaces/IImage.md).[getWorldBounds](../interfaces/IImage.md#getworldbounds)

#### Inherited from

[Rect](Rect.md).[getWorldBounds](Rect.md#getworldbounds)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:389](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/display/src/Leaf.ts#L389)

___

### worldToLocal

▸ **worldToLocal**(`world`, `to?`, `distance?`, `relative?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `world` | [`IPointData`](../interfaces/IPointData.md) |
| `to?` | [`IPointData`](../interfaces/IPointData.md) |
| `distance?` | `boolean` |
| `relative?` | [`ILeaf`](../interfaces/ILeaf.md) |

#### Returns

`void`

#### Implementation of

[IImage](../interfaces/IImage.md).[worldToLocal](../interfaces/IImage.md#worldtolocal)

#### Inherited from

[Rect](Rect.md).[worldToLocal](Rect.md#worldtolocal)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:397](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/display/src/Leaf.ts#L397)

___

### localToWorld

▸ **localToWorld**(`local`, `to?`, `distance?`, `relative?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `local` | [`IPointData`](../interfaces/IPointData.md) |
| `to?` | [`IPointData`](../interfaces/IPointData.md) |
| `distance?` | `boolean` |
| `relative?` | [`ILeaf`](../interfaces/ILeaf.md) |

#### Returns

`void`

#### Implementation of

[IImage](../interfaces/IImage.md).[localToWorld](../interfaces/IImage.md#localtoworld)

#### Inherited from

[Rect](Rect.md).[localToWorld](Rect.md#localtoworld)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:405](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/display/src/Leaf.ts#L405)

___

### worldToInner

▸ **worldToInner**(`world`, `to?`, `distance?`, `relative?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `world` | [`IPointData`](../interfaces/IPointData.md) |
| `to?` | [`IPointData`](../interfaces/IPointData.md) |
| `distance?` | `boolean` |
| `relative?` | [`ILeaf`](../interfaces/ILeaf.md) |

#### Returns

`void`

#### Implementation of

[IImage](../interfaces/IImage.md).[worldToInner](../interfaces/IImage.md#worldtoinner)

#### Inherited from

[Rect](Rect.md).[worldToInner](Rect.md#worldtoinner)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:413](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/display/src/Leaf.ts#L413)

___

### innerToWorld

▸ **innerToWorld**(`inner`, `to?`, `distance?`, `relative?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `inner` | [`IPointData`](../interfaces/IPointData.md) |
| `to?` | [`IPointData`](../interfaces/IPointData.md) |
| `distance?` | `boolean` |
| `relative?` | [`ILeaf`](../interfaces/ILeaf.md) |

#### Returns

`void`

#### Implementation of

[IImage](../interfaces/IImage.md).[innerToWorld](../interfaces/IImage.md#innertoworld)

#### Inherited from

[Rect](Rect.md).[innerToWorld](Rect.md#innertoworld)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:421](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/display/src/Leaf.ts#L421)

___

### getBoxPoint

▸ **getBoxPoint**(`world`, `relative?`, `distance?`, `change?`): [`IPointData`](../interfaces/IPointData.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `world` | [`IPointData`](../interfaces/IPointData.md) |
| `relative?` | [`ILeaf`](../interfaces/ILeaf.md) |
| `distance?` | `boolean` |
| `change?` | `boolean` |

#### Returns

[`IPointData`](../interfaces/IPointData.md)

#### Implementation of

[IImage](../interfaces/IImage.md).[getBoxPoint](../interfaces/IImage.md#getboxpoint)

#### Inherited from

[Rect](Rect.md).[getBoxPoint](Rect.md#getboxpoint)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:428](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/display/src/Leaf.ts#L428)

___

### getBoxPointByInner

▸ **getBoxPointByInner**(`inner`, `_relative?`, `_distance?`, `change?`): [`IPointData`](../interfaces/IPointData.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `inner` | [`IPointData`](../interfaces/IPointData.md) |
| `_relative?` | [`ILeaf`](../interfaces/ILeaf.md) |
| `_distance?` | `boolean` |
| `change?` | `boolean` |

#### Returns

[`IPointData`](../interfaces/IPointData.md)

#### Implementation of

[IImage](../interfaces/IImage.md).[getBoxPointByInner](../interfaces/IImage.md#getboxpointbyinner)

#### Inherited from

[Rect](Rect.md).[getBoxPointByInner](Rect.md#getboxpointbyinner)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:434](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/display/src/Leaf.ts#L434)

___

### getInnerPoint

▸ **getInnerPoint**(`world`, `relative?`, `distance?`, `change?`): [`IPointData`](../interfaces/IPointData.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `world` | [`IPointData`](../interfaces/IPointData.md) |
| `relative?` | [`ILeaf`](../interfaces/ILeaf.md) |
| `distance?` | `boolean` |
| `change?` | `boolean` |

#### Returns

[`IPointData`](../interfaces/IPointData.md)

#### Implementation of

[IImage](../interfaces/IImage.md).[getInnerPoint](../interfaces/IImage.md#getinnerpoint)

#### Inherited from

[Rect](Rect.md).[getInnerPoint](Rect.md#getinnerpoint)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:440](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/display/src/Leaf.ts#L440)

___

### getInnerPointByBox

▸ **getInnerPointByBox**(`box`, `_relative?`, `_distance?`, `change?`): [`IPointData`](../interfaces/IPointData.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `box` | [`IPointData`](../interfaces/IPointData.md) |
| `_relative?` | [`ILeaf`](../interfaces/ILeaf.md) |
| `_distance?` | `boolean` |
| `change?` | `boolean` |

#### Returns

[`IPointData`](../interfaces/IPointData.md)

#### Implementation of

[IImage](../interfaces/IImage.md).[getInnerPointByBox](../interfaces/IImage.md#getinnerpointbybox)

#### Inherited from

[Rect](Rect.md).[getInnerPointByBox](Rect.md#getinnerpointbybox)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:446](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/display/src/Leaf.ts#L446)

___

### getInnerPointByLocal

▸ **getInnerPointByLocal**(`local`, `_relative?`, `distance?`, `change?`): [`IPointData`](../interfaces/IPointData.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `local` | [`IPointData`](../interfaces/IPointData.md) |
| `_relative?` | [`ILeaf`](../interfaces/ILeaf.md) |
| `distance?` | `boolean` |
| `change?` | `boolean` |

#### Returns

[`IPointData`](../interfaces/IPointData.md)

#### Implementation of

[IImage](../interfaces/IImage.md).[getInnerPointByLocal](../interfaces/IImage.md#getinnerpointbylocal)

#### Inherited from

[Rect](Rect.md).[getInnerPointByLocal](Rect.md#getinnerpointbylocal)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:452](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/display/src/Leaf.ts#L452)

___

### getLocalPoint

▸ **getLocalPoint**(`world`, `relative?`, `distance?`, `change?`): [`IPointData`](../interfaces/IPointData.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `world` | [`IPointData`](../interfaces/IPointData.md) |
| `relative?` | [`ILeaf`](../interfaces/ILeaf.md) |
| `distance?` | `boolean` |
| `change?` | `boolean` |

#### Returns

[`IPointData`](../interfaces/IPointData.md)

#### Implementation of

[IImage](../interfaces/IImage.md).[getLocalPoint](../interfaces/IImage.md#getlocalpoint)

#### Inherited from

[Rect](Rect.md).[getLocalPoint](Rect.md#getlocalpoint)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:456](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/display/src/Leaf.ts#L456)

___

### getLocalPointByInner

▸ **getLocalPointByInner**(`inner`, `_relative?`, `distance?`, `change?`): [`IPointData`](../interfaces/IPointData.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `inner` | [`IPointData`](../interfaces/IPointData.md) |
| `_relative?` | [`ILeaf`](../interfaces/ILeaf.md) |
| `distance?` | `boolean` |
| `change?` | `boolean` |

#### Returns

[`IPointData`](../interfaces/IPointData.md)

#### Implementation of

[IImage](../interfaces/IImage.md).[getLocalPointByInner](../interfaces/IImage.md#getlocalpointbyinner)

#### Inherited from

[Rect](Rect.md).[getLocalPointByInner](Rect.md#getlocalpointbyinner)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:462](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/display/src/Leaf.ts#L462)

___

### getPagePoint

▸ **getPagePoint**(`world`, `relative?`, `distance?`, `change?`): [`IPointData`](../interfaces/IPointData.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `world` | [`IPointData`](../interfaces/IPointData.md) |
| `relative?` | [`ILeaf`](../interfaces/ILeaf.md) |
| `distance?` | `boolean` |
| `change?` | `boolean` |

#### Returns

[`IPointData`](../interfaces/IPointData.md)

#### Implementation of

[IImage](../interfaces/IImage.md).[getPagePoint](../interfaces/IImage.md#getpagepoint)

#### Inherited from

[Rect](Rect.md).[getPagePoint](Rect.md#getpagepoint)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:466](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/display/src/Leaf.ts#L466)

___

### getWorldPoint

▸ **getWorldPoint**(`inner`, `relative?`, `distance?`, `change?`): [`IPointData`](../interfaces/IPointData.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `inner` | [`IPointData`](../interfaces/IPointData.md) |
| `relative?` | [`ILeaf`](../interfaces/ILeaf.md) |
| `distance?` | `boolean` |
| `change?` | `boolean` |

#### Returns

[`IPointData`](../interfaces/IPointData.md)

#### Implementation of

[IImage](../interfaces/IImage.md).[getWorldPoint](../interfaces/IImage.md#getworldpoint)

#### Inherited from

[Rect](Rect.md).[getWorldPoint](Rect.md#getworldpoint)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:471](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/display/src/Leaf.ts#L471)

___

### getWorldPointByBox

▸ **getWorldPointByBox**(`box`, `relative?`, `distance?`, `change?`): [`IPointData`](../interfaces/IPointData.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `box` | [`IPointData`](../interfaces/IPointData.md) |
| `relative?` | [`ILeaf`](../interfaces/ILeaf.md) |
| `distance?` | `boolean` |
| `change?` | `boolean` |

#### Returns

[`IPointData`](../interfaces/IPointData.md)

#### Implementation of

[IImage](../interfaces/IImage.md).[getWorldPointByBox](../interfaces/IImage.md#getworldpointbybox)

#### Inherited from

[Rect](Rect.md).[getWorldPointByBox](Rect.md#getworldpointbybox)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:477](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/display/src/Leaf.ts#L477)

___

### getWorldPointByLocal

▸ **getWorldPointByLocal**(`local`, `relative?`, `distance?`, `change?`): [`IPointData`](../interfaces/IPointData.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `local` | [`IPointData`](../interfaces/IPointData.md) |
| `relative?` | [`ILeaf`](../interfaces/ILeaf.md) |
| `distance?` | `boolean` |
| `change?` | `boolean` |

#### Returns

[`IPointData`](../interfaces/IPointData.md)

#### Implementation of

[IImage](../interfaces/IImage.md).[getWorldPointByLocal](../interfaces/IImage.md#getworldpointbylocal)

#### Inherited from

[Rect](Rect.md).[getWorldPointByLocal](Rect.md#getworldpointbylocal)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:481](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/display/src/Leaf.ts#L481)

___

### getWorldPointByPage

▸ **getWorldPointByPage**(`page`, `relative?`, `distance?`, `change?`): [`IPointData`](../interfaces/IPointData.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `page` | [`IPointData`](../interfaces/IPointData.md) |
| `relative?` | [`ILeaf`](../interfaces/ILeaf.md) |
| `distance?` | `boolean` |
| `change?` | `boolean` |

#### Returns

[`IPointData`](../interfaces/IPointData.md)

#### Implementation of

[IImage](../interfaces/IImage.md).[getWorldPointByPage](../interfaces/IImage.md#getworldpointbypage)

#### Inherited from

[Rect](Rect.md).[getWorldPointByPage](Rect.md#getworldpointbypage)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:487](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/display/src/Leaf.ts#L487)

___

### setTransform

▸ **setTransform**(`matrix`, `resize?`, `transition?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `matrix` | [`IMatrixData`](../interfaces/IMatrixData.md) |
| `resize?` | `boolean` |
| `transition?` | [`ITransition`](../modules.md#itransition) |

#### Returns

`void`

#### Implementation of

[IImage](../interfaces/IImage.md).[setTransform](../interfaces/IImage.md#settransform)

#### Inherited from

[Rect](Rect.md).[setTransform](Rect.md#settransform)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:495](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/display/src/Leaf.ts#L495)

___

### transform

▸ **transform**(`matrix`, `resize?`, `transition?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `matrix` | [`IMatrixData`](../interfaces/IMatrixData.md) |
| `resize?` | `boolean` |
| `transition?` | [`ITransition`](../modules.md#itransition) |

#### Returns

`void`

#### Implementation of

[IImage](../interfaces/IImage.md).[transform](../interfaces/IImage.md#transform)

#### Inherited from

[Rect](Rect.md).[transform](Rect.md#transform)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:499](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/display/src/Leaf.ts#L499)

___

### move

▸ **move**(`x`, `y?`, `transition?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `x` | `number` \| [`IPointData`](../interfaces/IPointData.md) |
| `y?` | `number` |
| `transition?` | [`ITransition`](../modules.md#itransition) |

#### Returns

`void`

#### Implementation of

[IImage](../interfaces/IImage.md).[move](../interfaces/IImage.md#move)

#### Inherited from

[Rect](Rect.md).[move](Rect.md#move)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:503](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/display/src/Leaf.ts#L503)

___

### moveInner

▸ **moveInner**(`x`, `y?`, `transition?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `x` | `number` \| [`IPointData`](../interfaces/IPointData.md) |
| `y?` | `number` |
| `transition?` | [`ITransition`](../modules.md#itransition) |

#### Returns

`void`

#### Implementation of

[IImage](../interfaces/IImage.md).[moveInner](../interfaces/IImage.md#moveinner)

#### Inherited from

[Rect](Rect.md).[moveInner](Rect.md#moveinner)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:508](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/display/src/Leaf.ts#L508)

___

### scaleOf

▸ **scaleOf**(`origin`, `scaleX`, `scaleY?`, `resize?`, `transition?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `origin` | [`IPointData`](../interfaces/IPointData.md) \| [`IDirection`](../modules.md#idirection) |
| `scaleX` | `number` |
| `scaleY?` | [`ITransition`](../modules.md#itransition) |
| `resize?` | `boolean` |
| `transition?` | [`ITransition`](../modules.md#itransition) |

#### Returns

`void`

#### Implementation of

[IImage](../interfaces/IImage.md).[scaleOf](../interfaces/IImage.md#scaleof)

#### Inherited from

[Rect](Rect.md).[scaleOf](Rect.md#scaleof)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:512](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/display/src/Leaf.ts#L512)

___

### rotateOf

▸ **rotateOf**(`origin`, `rotation`, `transition?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `origin` | [`IPointData`](../interfaces/IPointData.md) \| [`IDirection`](../modules.md#idirection) |
| `rotation` | `number` |
| `transition?` | [`ITransition`](../modules.md#itransition) |

#### Returns

`void`

#### Implementation of

[IImage](../interfaces/IImage.md).[rotateOf](../interfaces/IImage.md#rotateof)

#### Inherited from

[Rect](Rect.md).[rotateOf](Rect.md#rotateof)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:516](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/display/src/Leaf.ts#L516)

___

### skewOf

▸ **skewOf**(`origin`, `skewX`, `skewY?`, `resize?`, `transition?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `origin` | [`IPointData`](../interfaces/IPointData.md) \| [`IDirection`](../modules.md#idirection) |
| `skewX` | `number` |
| `skewY?` | `number` |
| `resize?` | `boolean` |
| `transition?` | [`ITransition`](../modules.md#itransition) |

#### Returns

`void`

#### Implementation of

[IImage](../interfaces/IImage.md).[skewOf](../interfaces/IImage.md#skewof)

#### Inherited from

[Rect](Rect.md).[skewOf](Rect.md#skewof)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:520](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/display/src/Leaf.ts#L520)

___

### transformWorld

▸ **transformWorld**(`worldTransform?`, `resize?`, `transition?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `worldTransform?` | [`IMatrixData`](../interfaces/IMatrixData.md) |
| `resize?` | `boolean` |
| `transition?` | [`ITransition`](../modules.md#itransition) |

#### Returns

`void`

#### Implementation of

[IImage](../interfaces/IImage.md).[transformWorld](../interfaces/IImage.md#transformworld)

#### Inherited from

[Rect](Rect.md).[transformWorld](Rect.md#transformworld)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:525](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/display/src/Leaf.ts#L525)

___

### moveWorld

▸ **moveWorld**(`x`, `y?`, `transition?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `x` | `number` \| [`IPointData`](../interfaces/IPointData.md) |
| `y?` | `number` |
| `transition?` | [`ITransition`](../modules.md#itransition) |

#### Returns

`void`

#### Implementation of

[IImage](../interfaces/IImage.md).[moveWorld](../interfaces/IImage.md#moveworld)

#### Inherited from

[Rect](Rect.md).[moveWorld](Rect.md#moveworld)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:529](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/display/src/Leaf.ts#L529)

___

### scaleOfWorld

▸ **scaleOfWorld**(`worldOrigin`, `scaleX`, `scaleY?`, `resize?`, `transition?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `worldOrigin` | [`IPointData`](../interfaces/IPointData.md) |
| `scaleX` | `number` |
| `scaleY?` | [`ITransition`](../modules.md#itransition) |
| `resize?` | `boolean` |
| `transition?` | [`ITransition`](../modules.md#itransition) |

#### Returns

`void`

#### Implementation of

[IImage](../interfaces/IImage.md).[scaleOfWorld](../interfaces/IImage.md#scaleofworld)

#### Inherited from

[Rect](Rect.md).[scaleOfWorld](Rect.md#scaleofworld)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:533](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/display/src/Leaf.ts#L533)

___

### rotateOfWorld

▸ **rotateOfWorld**(`worldOrigin`, `rotation`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `worldOrigin` | [`IPointData`](../interfaces/IPointData.md) |
| `rotation` | `number` |

#### Returns

`void`

#### Implementation of

[IImage](../interfaces/IImage.md).[rotateOfWorld](../interfaces/IImage.md#rotateofworld)

#### Inherited from

[Rect](Rect.md).[rotateOfWorld](Rect.md#rotateofworld)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:537](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/display/src/Leaf.ts#L537)

___

### skewOfWorld

▸ **skewOfWorld**(`worldOrigin`, `skewX`, `skewY?`, `resize?`, `transition?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `worldOrigin` | [`IPointData`](../interfaces/IPointData.md) |
| `skewX` | `number` |
| `skewY?` | `number` |
| `resize?` | `boolean` |
| `transition?` | [`ITransition`](../modules.md#itransition) |

#### Returns

`void`

#### Implementation of

[IImage](../interfaces/IImage.md).[skewOfWorld](../interfaces/IImage.md#skewofworld)

#### Inherited from

[Rect](Rect.md).[skewOfWorld](Rect.md#skewofworld)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:541](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/display/src/Leaf.ts#L541)

___

### flip

▸ **flip**(`axis`, `transition?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `axis` | [`IAxis`](../modules.md#iaxis) |
| `transition?` | [`ITransition`](../modules.md#itransition) |

#### Returns

`void`

#### Implementation of

[IImage](../interfaces/IImage.md).[flip](../interfaces/IImage.md#flip)

#### Inherited from

[Rect](Rect.md).[flip](Rect.md#flip)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:545](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/display/src/Leaf.ts#L545)

___

### scaleResize

▸ **scaleResize**(`scaleX`, `scaleY?`, `_noResize?`): `void`

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `scaleX` | `number` | `undefined` |
| `scaleY` | `number` | `scaleX` |
| `_noResize?` | `boolean` | `undefined` |

#### Returns

`void`

#### Implementation of

[IImage](../interfaces/IImage.md).[scaleResize](../interfaces/IImage.md#scaleresize)

#### Inherited from

[Rect](Rect.md).[scaleResize](Rect.md#scaleresize)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:552](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/display/src/Leaf.ts#L552)

___

### \_\_scaleResize

▸ **__scaleResize**(`_scaleX`, `_scaleY`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `_scaleX` | `number` |
| `_scaleY` | `number` |

#### Returns

`void`

#### Implementation of

[IImage](../interfaces/IImage.md).[__scaleResize](../interfaces/IImage.md#__scaleresize)

#### Inherited from

[Rect](Rect.md).[__scaleResize](Rect.md#__scaleresize)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:557](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/display/src/Leaf.ts#L557)

___

### resizeWidth

▸ **resizeWidth**(`_width`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `_width` | `number` |

#### Returns

`void`

#### Implementation of

[IImage](../interfaces/IImage.md).[resizeWidth](../interfaces/IImage.md#resizewidth)

#### Inherited from

[Rect](Rect.md).[resizeWidth](Rect.md#resizewidth)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:560](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/display/src/Leaf.ts#L560)

___

### resizeHeight

▸ **resizeHeight**(`_height`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `_height` | `number` |

#### Returns

`void`

#### Implementation of

[IImage](../interfaces/IImage.md).[resizeHeight](../interfaces/IImage.md#resizeheight)

#### Inherited from

[Rect](Rect.md).[resizeHeight](Rect.md#resizeheight)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:562](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/display/src/Leaf.ts#L562)

___

### hit

▸ **hit**(`_world`, `_hitRadius?`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `_world` | [`IPointData`](../interfaces/IPointData.md) |
| `_hitRadius?` | `number` |

#### Returns

`boolean`

#### Implementation of

[IImage](../interfaces/IImage.md).[hit](../interfaces/IImage.md#hit)

#### Inherited from

[Rect](Rect.md).[hit](Rect.md#hit)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:567](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/display/src/Leaf.ts#L567)

___

### \_\_hitWorld

▸ **__hitWorld**(`_point`, `_forceHitFill?`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `_point` | [`IRadiusPointData`](../interfaces/IRadiusPointData.md) |
| `_forceHitFill?` | `boolean` |

#### Returns

`boolean`

#### Implementation of

[IImage](../interfaces/IImage.md).[__hitWorld](../interfaces/IImage.md#__hitworld)

#### Inherited from

[Rect](Rect.md).[__hitWorld](Rect.md#__hitworld)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:569](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/display/src/Leaf.ts#L569)

___

### \_\_hit

▸ **__hit**(`_local`, `_forceHitFill?`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `_local` | [`IRadiusPointData`](../interfaces/IRadiusPointData.md) |
| `_forceHitFill?` | `boolean` |

#### Returns

`boolean`

#### Implementation of

[IImage](../interfaces/IImage.md).[__hit](../interfaces/IImage.md#__hit)

#### Inherited from

[Rect](Rect.md).[__hit](Rect.md#__hit)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:571](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/display/src/Leaf.ts#L571)

___

### \_\_hitFill

▸ **__hitFill**(`_inner`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `_inner` | [`IRadiusPointData`](../interfaces/IRadiusPointData.md) |

#### Returns

`boolean`

#### Implementation of

[IImage](../interfaces/IImage.md).[__hitFill](../interfaces/IImage.md#__hitfill)

#### Inherited from

[Rect](Rect.md).[__hitFill](Rect.md#__hitfill)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:573](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/display/src/Leaf.ts#L573)

___

### \_\_hitStroke

▸ **__hitStroke**(`_inner`, `_strokeWidth`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `_inner` | [`IRadiusPointData`](../interfaces/IRadiusPointData.md) |
| `_strokeWidth` | `number` |

#### Returns

`boolean`

#### Implementation of

[IImage](../interfaces/IImage.md).[__hitStroke](../interfaces/IImage.md#__hitstroke)

#### Inherited from

[Rect](Rect.md).[__hitStroke](Rect.md#__hitstroke)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:575](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/display/src/Leaf.ts#L575)

___

### \_\_hitPixel

▸ **__hitPixel**(`_inner`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `_inner` | [`IRadiusPointData`](../interfaces/IRadiusPointData.md) |

#### Returns

`boolean`

#### Implementation of

[IImage](../interfaces/IImage.md).[__hitPixel](../interfaces/IImage.md#__hitpixel)

#### Inherited from

[Rect](Rect.md).[__hitPixel](Rect.md#__hitpixel)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:577](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/display/src/Leaf.ts#L577)

___

### \_\_drawHitPath

▸ **__drawHitPath**(`_canvas`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `_canvas` | [`ILeaferCanvas`](../interfaces/ILeaferCanvas.md) |

#### Returns

`void`

#### Implementation of

[IImage](../interfaces/IImage.md).[__drawHitPath](../interfaces/IImage.md#__drawhitpath)

#### Inherited from

[Rect](Rect.md).[__drawHitPath](Rect.md#__drawhitpath)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:579](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/display/src/Leaf.ts#L579)

___

### \_\_updateHitCanvas

▸ **__updateHitCanvas**(): `void`

#### Returns

`void`

#### Implementation of

[IImage](../interfaces/IImage.md).[__updateHitCanvas](../interfaces/IImage.md#__updatehitcanvas)

#### Inherited from

[Rect](Rect.md).[__updateHitCanvas](Rect.md#__updatehitcanvas)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:581](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/display/src/Leaf.ts#L581)

___

### \_\_render

▸ **__render**(`_canvas`, `_options`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `_canvas` | [`ILeaferCanvas`](../interfaces/ILeaferCanvas.md) |
| `_options` | [`IRenderOptions`](../interfaces/IRenderOptions.md) |

#### Returns

`void`

#### Implementation of

[IImage](../interfaces/IImage.md).[__render](../interfaces/IImage.md#__render)

#### Inherited from

[Rect](Rect.md).[__render](Rect.md#__render)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:588](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/display/src/Leaf.ts#L588)

___

### \_\_drawFast

▸ **__drawFast**(`_canvas`, `_options`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `_canvas` | [`ILeaferCanvas`](../interfaces/ILeaferCanvas.md) |
| `_options` | [`IRenderOptions`](../interfaces/IRenderOptions.md) |

#### Returns

`void`

#### Implementation of

[IImage](../interfaces/IImage.md).[__drawFast](../interfaces/IImage.md#__drawfast)

#### Inherited from

[Rect](Rect.md).[__drawFast](Rect.md#__drawfast)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:590](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/display/src/Leaf.ts#L590)

___

### \_\_draw

▸ **__draw**(`_canvas`, `_options`, `_originCanvas?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `_canvas` | [`ILeaferCanvas`](../interfaces/ILeaferCanvas.md) |
| `_options` | [`IRenderOptions`](../interfaces/IRenderOptions.md) |
| `_originCanvas?` | [`ILeaferCanvas`](../interfaces/ILeaferCanvas.md) |

#### Returns

`void`

#### Implementation of

[IImage](../interfaces/IImage.md).[__draw](../interfaces/IImage.md#__draw)

#### Inherited from

[Rect](Rect.md).[__draw](Rect.md#__draw)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:592](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/display/src/Leaf.ts#L592)

___

### \_\_clip

▸ **__clip**(`_canvas`, `_options`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `_canvas` | [`ILeaferCanvas`](../interfaces/ILeaferCanvas.md) |
| `_options` | [`IRenderOptions`](../interfaces/IRenderOptions.md) |

#### Returns

`void`

#### Implementation of

[IImage](../interfaces/IImage.md).[__clip](../interfaces/IImage.md#__clip)

#### Inherited from

[Rect](Rect.md).[__clip](Rect.md#__clip)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:595](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/display/src/Leaf.ts#L595)

___

### \_\_renderShape

▸ **__renderShape**(`_canvas`, `_options`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `_canvas` | [`ILeaferCanvas`](../interfaces/ILeaferCanvas.md) |
| `_options` | [`IRenderOptions`](../interfaces/IRenderOptions.md) |

#### Returns

`void`

#### Implementation of

[IImage](../interfaces/IImage.md).[__renderShape](../interfaces/IImage.md#__rendershape)

#### Inherited from

[Rect](Rect.md).[__renderShape](Rect.md#__rendershape)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:597](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/display/src/Leaf.ts#L597)

___

### \_\_drawShape

▸ **__drawShape**(`_canvas`, `_options`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `_canvas` | [`ILeaferCanvas`](../interfaces/ILeaferCanvas.md) |
| `_options` | [`IRenderOptions`](../interfaces/IRenderOptions.md) |

#### Returns

`void`

#### Implementation of

[IImage](../interfaces/IImage.md).[__drawShape](../interfaces/IImage.md#__drawshape)

#### Inherited from

[Rect](Rect.md).[__drawShape](Rect.md#__drawshape)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:599](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/display/src/Leaf.ts#L599)

___

### \_\_updateWorldOpacity

▸ **__updateWorldOpacity**(): `void`

#### Returns

`void`

#### Implementation of

[IImage](../interfaces/IImage.md).[__updateWorldOpacity](../interfaces/IImage.md#__updateworldopacity)

#### Inherited from

[Rect](Rect.md).[__updateWorldOpacity](Rect.md#__updateworldopacity)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:602](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/display/src/Leaf.ts#L602)

___

### \_\_updateChange

▸ **__updateChange**(): `void`

#### Returns

`void`

#### Implementation of

[IImage](../interfaces/IImage.md).[__updateChange](../interfaces/IImage.md#__updatechange)

#### Inherited from

[Rect](Rect.md).[__updateChange](Rect.md#__updatechange)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:604](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/display/src/Leaf.ts#L604)

___

### \_\_updatePath

▸ **__updatePath**(): `void`

#### Returns

`void`

#### Implementation of

[IImage](../interfaces/IImage.md).[__updatePath](../interfaces/IImage.md#__updatepath)

#### Inherited from

[Rect](Rect.md).[__updatePath](Rect.md#__updatepath)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:615](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/display/src/Leaf.ts#L615)

___

### getMotionPathData

▸ **getMotionPathData**(): [`IMotionPathData`](../interfaces/IMotionPathData.md)

#### Returns

[`IMotionPathData`](../interfaces/IMotionPathData.md)

#### Implementation of

[IImage](../interfaces/IImage.md).[getMotionPathData](../interfaces/IImage.md#getmotionpathdata)

#### Inherited from

[Rect](Rect.md).[getMotionPathData](Rect.md#getmotionpathdata)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:624](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/display/src/Leaf.ts#L624)

___

### getMotionPoint

▸ **getMotionPoint**(`_motionDistance`): [`IRotationPointData`](../interfaces/IRotationPointData.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `_motionDistance` | `number` \| [`IUnitData`](../interfaces/IUnitData.md) |

#### Returns

[`IRotationPointData`](../interfaces/IRotationPointData.md)

#### Implementation of

[IImage](../interfaces/IImage.md).[getMotionPoint](../interfaces/IImage.md#getmotionpoint)

#### Inherited from

[Rect](Rect.md).[getMotionPoint](Rect.md#getmotionpoint)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:628](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/display/src/Leaf.ts#L628)

___

### getMotionTotal

▸ **getMotionTotal**(): `number`

#### Returns

`number`

#### Implementation of

[IImage](../interfaces/IImage.md).[getMotionTotal](../interfaces/IImage.md#getmotiontotal)

#### Inherited from

[Rect](Rect.md).[getMotionTotal](Rect.md#getmotiontotal)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:632](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/display/src/Leaf.ts#L632)

___

### \_\_updateMotionPath

▸ **__updateMotionPath**(): `void`

#### Returns

`void`

#### Implementation of

[IImage](../interfaces/IImage.md).[__updateMotionPath](../interfaces/IImage.md#__updatemotionpath)

#### Inherited from

[Rect](Rect.md).[__updateMotionPath](Rect.md#__updatemotionpath)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:636](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/display/src/Leaf.ts#L636)

___

### \_\_runAnimation

▸ **__runAnimation**(`_type`, `_complete?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `_type` | ``"in"`` \| ``"out"`` |
| `_complete?` | [`IFunction`](../interfaces/IFunction.md) |

#### Returns

`void`

#### Implementation of

[IImage](../interfaces/IImage.md).[__runAnimation](../interfaces/IImage.md#__runanimation)

#### Inherited from

[Rect](Rect.md).[__runAnimation](Rect.md#__runanimation)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:642](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/display/src/Leaf.ts#L642)

___

### \_\_updateSortChildren

▸ **__updateSortChildren**(): `void`

#### Returns

`void`

#### Implementation of

[IImage](../interfaces/IImage.md).[__updateSortChildren](../interfaces/IImage.md#__updatesortchildren)

#### Inherited from

[Rect](Rect.md).[__updateSortChildren](Rect.md#__updatesortchildren)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:647](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/display/src/Leaf.ts#L647)

___

### add

▸ **add**(`_child`, `_index?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `_child` | [`ILeaf`](../interfaces/ILeaf.md) \| [`ILeaf`](../interfaces/ILeaf.md)[] \| [`ILeafInputData`](../interfaces/ILeafInputData.md) \| [`ILeafInputData`](../interfaces/ILeafInputData.md)[] |
| `_index?` | `number` |

#### Returns

`void`

#### Implementation of

[IImage](../interfaces/IImage.md).[add](../interfaces/IImage.md#add)

#### Inherited from

[Rect](Rect.md).[add](Rect.md#add)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:649](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/display/src/Leaf.ts#L649)

___

### remove

▸ **remove**(`_child?`, `destroy?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `_child?` | `string` \| `number` \| [`ILeaf`](../interfaces/ILeaf.md) \| [`IFindMethod`](../interfaces/IFindMethod.md) |
| `destroy?` | `boolean` |

#### Returns

`void`

#### Implementation of

[IImage](../interfaces/IImage.md).[remove](../interfaces/IImage.md#remove)

#### Inherited from

[Rect](Rect.md).[remove](Rect.md#remove)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:651](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/display/src/Leaf.ts#L651)

___

### dropTo

▸ **dropTo**(`parent`, `index?`, `resize?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `parent` | [`ILeaf`](../interfaces/ILeaf.md) |
| `index?` | `number` |
| `resize?` | `boolean` |

#### Returns

`void`

#### Implementation of

[IImage](../interfaces/IImage.md).[dropTo](../interfaces/IImage.md#dropto)

#### Inherited from

[Rect](Rect.md).[dropTo](Rect.md#dropto)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:655](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/display/src/Leaf.ts#L655)

___

### on

▸ **on**(`_type`, `_listener?`, `_options?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `_type` | `string` \| `string`[] \| [`IEventParamsMap`](../interfaces/IEventParamsMap.md) \| [`IEventParams`](../modules.md#ieventparams)[] |
| `_listener?` | [`IFunction`](../interfaces/IFunction.md) |
| `_options?` | [`IEventOption`](../modules.md#ieventoption) |

#### Returns

`void`

#### Implementation of

[IImage](../interfaces/IImage.md).[on](../interfaces/IImage.md#on)

#### Inherited from

[Rect](Rect.md).[on](Rect.md#on)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:664](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/display/src/Leaf.ts#L664)

___

### off

▸ **off**(`_type?`, `_listener?`, `_options?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `_type?` | `string` \| `string`[] |
| `_listener?` | [`IFunction`](../interfaces/IFunction.md) |
| `_options?` | [`IEventOption`](../modules.md#ieventoption) |

#### Returns

`void`

#### Implementation of

[IImage](../interfaces/IImage.md).[off](../interfaces/IImage.md#off)

#### Inherited from

[Rect](Rect.md).[off](Rect.md#off)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:666](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/display/src/Leaf.ts#L666)

___

### on\_

▸ **on_**(`_type`, `_listener?`, `_bind?`, `_options?`): [`IEventListenerId`](../interfaces/IEventListenerId.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `_type` | `string` \| `string`[] \| [`IEventParams`](../modules.md#ieventparams)[] |
| `_listener?` | [`IFunction`](../interfaces/IFunction.md) |
| `_bind?` | [`IObject`](../interfaces/IObject.md) |
| `_options?` | [`IEventOption`](../modules.md#ieventoption) |

#### Returns

[`IEventListenerId`](../interfaces/IEventListenerId.md)

#### Implementation of

[IImage](../interfaces/IImage.md).[on_](../interfaces/IImage.md#on_)

#### Inherited from

[Rect](Rect.md).[on_](Rect.md#on_)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:668](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/display/src/Leaf.ts#L668)

___

### off\_

▸ **off_**(`_id`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `_id` | [`IEventListenerId`](../interfaces/IEventListenerId.md) \| [`IEventListenerId`](../interfaces/IEventListenerId.md)[] |

#### Returns

`void`

#### Implementation of

[IImage](../interfaces/IImage.md).[off_](../interfaces/IImage.md#off_)

#### Inherited from

[Rect](Rect.md).[off_](Rect.md#off_)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:670](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/display/src/Leaf.ts#L670)

___

### once

▸ **once**(`_type`, `_listener?`, `_captureOrBind?`, `_capture?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `_type` | `string` \| `string`[] \| [`IEventParams`](../modules.md#ieventparams)[] |
| `_listener?` | [`IFunction`](../interfaces/IFunction.md) |
| `_captureOrBind?` | `boolean` \| [`IObject`](../interfaces/IObject.md) |
| `_capture?` | `boolean` |

#### Returns

`void`

#### Implementation of

[IImage](../interfaces/IImage.md).[once](../interfaces/IImage.md#once)

#### Inherited from

[Rect](Rect.md).[once](Rect.md#once)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:672](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/display/src/Leaf.ts#L672)

___

### emit

▸ **emit**(`_type`, `_event?`, `_capture?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `_type` | `string` |
| `_event?` | [`IObject`](../interfaces/IObject.md) \| [`IEvent`](../interfaces/IEvent.md) |
| `_capture?` | `boolean` |

#### Returns

`void`

#### Implementation of

[IImage](../interfaces/IImage.md).[emit](../interfaces/IImage.md#emit)

#### Inherited from

[Rect](Rect.md).[emit](Rect.md#emit)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:674](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/display/src/Leaf.ts#L674)

___

### emitEvent

▸ **emitEvent**(`_event?`, `_capture?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `_event?` | [`IEvent`](../interfaces/IEvent.md) |
| `_capture?` | `boolean` |

#### Returns

`void`

#### Implementation of

[IImage](../interfaces/IImage.md).[emitEvent](../interfaces/IImage.md#emitevent)

#### Inherited from

[Rect](Rect.md).[emitEvent](Rect.md#emitevent)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:676](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/display/src/Leaf.ts#L676)

___

### hasEvent

▸ **hasEvent**(`_type`, `_capture?`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `_type` | `string` |
| `_capture?` | `boolean` |

#### Returns

`boolean`

#### Implementation of

[IImage](../interfaces/IImage.md).[hasEvent](../interfaces/IImage.md#hasevent)

#### Inherited from

[Rect](Rect.md).[hasEvent](Rect.md#hasevent)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:678](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/display/src/Leaf.ts#L678)

___

### changeAttr

▸ **changeAttr**(`attrName`, `defaultValue`, `fn?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `attrName` | `string` |
| `defaultValue` | [`IValueFunction`](../interfaces/IValueFunction.md) \| [`IValue`](../modules.md#ivalue) |
| `fn?` | [`IAttrDecorator`](../interfaces/IAttrDecorator.md) |

#### Returns

`void`

#### Inherited from

[Rect](Rect.md).[changeAttr](Rect.md#changeattr)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:682](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/display/src/Leaf.ts#L682)

___

### addAttr

▸ **addAttr**(`attrName`, `defaultValue`, `fn?`, `helpValue?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `attrName` | `string` |
| `defaultValue` | [`IValueFunction`](../interfaces/IValueFunction.md) \| [`IValue`](../modules.md#ivalue) |
| `fn?` | [`IAttrDecorator`](../interfaces/IAttrDecorator.md) |
| `helpValue?` | [`IValue`](../modules.md#ivalue) |

#### Returns

`void`

#### Inherited from

[Rect](Rect.md).[addAttr](Rect.md#addattr)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:686](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/display/src/Leaf.ts#L686)

___

### \_\_emitLifeEvent

▸ **__emitLifeEvent**(`type`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | `string` |

#### Returns

`void`

#### Implementation of

[IImage](../interfaces/IImage.md).[__emitLifeEvent](../interfaces/IImage.md#__emitlifeevent)

#### Inherited from

[Rect](Rect.md).[__emitLifeEvent](Rect.md#__emitlifeevent)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:692](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/display/src/Leaf.ts#L692)

___

### reset

▸ **reset**(`_data?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `_data?` | [`IUIInputData`](../interfaces/IUIInputData.md) |

#### Returns

`void`

#### Implementation of

[IImage](../interfaces/IImage.md).[reset](../interfaces/IImage.md#reset)

#### Inherited from

[Rect](Rect.md).[reset](Rect.md#reset)

#### Defined in

[src/ui/packages/display/src/UI.ts:425](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/display/src/UI.ts#L425)

___

### set

▸ **set**(`data`, `_transition?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | [`IUIInputData`](../interfaces/IUIInputData.md) |
| `_transition?` | [`ITransition`](../modules.md#itransition) \| ``"temp"`` |

#### Returns

`void`

#### Implementation of

[IImage](../interfaces/IImage.md).[set](../interfaces/IImage.md#set)

#### Inherited from

[Rect](Rect.md).[set](Rect.md#set)

#### Defined in

[src/ui/packages/display/src/UI.ts:430](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/display/src/UI.ts#L430)

___

### get

▸ **get**\<`K`\>(`name?`): [`IUIInputData`](../interfaces/IUIInputData.md) \| [`Image`](Image.md)\<`TInputData`\>[`K`]

#### Type parameters

| Name | Type |
| :------ | :------ |
| `K` | extends keyof [`Image`](Image.md)\<`TInputData`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `name?` | [`IUIInputData`](../interfaces/IUIInputData.md) \| `K` \| `K`[] |

#### Returns

[`IUIInputData`](../interfaces/IUIInputData.md) \| [`Image`](Image.md)\<`TInputData`\>[`K`]

#### Implementation of

[IImage](../interfaces/IImage.md).[get](../interfaces/IImage.md#get)

#### Inherited from

[Rect](Rect.md).[get](Rect.md#get)

#### Defined in

[src/ui/packages/display/src/UI.ts:434](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/display/src/UI.ts#L434)

___

### createProxyData

▸ **createProxyData**(): [`IUIInputData`](../interfaces/IUIInputData.md)

#### Returns

[`IUIInputData`](../interfaces/IUIInputData.md)

#### Implementation of

[IImage](../interfaces/IImage.md).[createProxyData](../interfaces/IImage.md#createproxydata)

#### Inherited from

[Rect](Rect.md).[createProxyData](Rect.md#createproxydata)

#### Defined in

[src/ui/packages/display/src/UI.ts:438](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/display/src/UI.ts#L438)

___

### clearProxyData

▸ **clearProxyData**(): `void`

#### Returns

`void`

#### Implementation of

[IImage](../interfaces/IImage.md).[clearProxyData](../interfaces/IImage.md#clearproxydata)

#### Inherited from

[Rect](Rect.md).[clearProxyData](Rect.md#clearproxydata)

#### Defined in

[src/ui/packages/display/src/UI.ts:439](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/display/src/UI.ts#L439)

___

### find

▸ **find**(`_condition`, `_options?`): [`IUI`](../interfaces/IUI.md)[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `_condition` | `string` \| `number` \| [`IFindCondition`](../interfaces/IFindCondition.md) \| [`IFindUIMethod`](../interfaces/IFindUIMethod.md) |
| `_options?` | `any` |

#### Returns

[`IUI`](../interfaces/IUI.md)[]

#### Implementation of

[IImage](../interfaces/IImage.md).[find](../interfaces/IImage.md#find)

#### Inherited from

[Rect](Rect.md).[find](Rect.md#find)

#### Defined in

[src/ui/packages/display/src/UI.ts:444](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/display/src/UI.ts#L444)

___

### findTag

▸ **findTag**(`tag`): [`IUI`](../interfaces/IUI.md)[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `tag` | `string` \| `string`[] |

#### Returns

[`IUI`](../interfaces/IUI.md)[]

#### Implementation of

[IImage](../interfaces/IImage.md).[findTag](../interfaces/IImage.md#findtag)

#### Inherited from

[Rect](Rect.md).[findTag](Rect.md#findtag)

#### Defined in

[src/ui/packages/display/src/UI.ts:446](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/display/src/UI.ts#L446)

___

### findOne

▸ **findOne**(`_condition`, `_options?`): [`IUI`](../interfaces/IUI.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `_condition` | `string` \| `number` \| [`IFindCondition`](../interfaces/IFindCondition.md) \| [`IFindUIMethod`](../interfaces/IFindUIMethod.md) |
| `_options?` | `any` |

#### Returns

[`IUI`](../interfaces/IUI.md)

#### Implementation of

[IImage](../interfaces/IImage.md).[findOne](../interfaces/IImage.md#findone)

#### Inherited from

[Rect](Rect.md).[findOne](Rect.md#findone)

#### Defined in

[src/ui/packages/display/src/UI.ts:448](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/display/src/UI.ts#L448)

___

### findId

▸ **findId**(`id`): [`IUI`](../interfaces/IUI.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `string` \| `number` |

#### Returns

[`IUI`](../interfaces/IUI.md)

#### Implementation of

[IImage](../interfaces/IImage.md).[findId](../interfaces/IImage.md#findid)

#### Inherited from

[Rect](Rect.md).[findId](Rect.md#findid)

#### Defined in

[src/ui/packages/display/src/UI.ts:450](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/display/src/UI.ts#L450)

___

### getPath

▸ **getPath**(`curve?`, `pathForRender?`): [`IPathCommandData`](../modules.md#ipathcommanddata)

#### Parameters

| Name | Type |
| :------ | :------ |
| `curve?` | `boolean` |
| `pathForRender?` | `boolean` |

#### Returns

[`IPathCommandData`](../modules.md#ipathcommanddata)

#### Implementation of

[IImage](../interfaces/IImage.md).[getPath](../interfaces/IImage.md#getpath)

#### Inherited from

[Rect](Rect.md).[getPath](Rect.md#getpath)

#### Defined in

[src/ui/packages/display/src/UI.ts:455](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/display/src/UI.ts#L455)

___

### getPathString

▸ **getPathString**(`curve?`, `pathForRender?`, `floatLength?`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `curve?` | `boolean` |
| `pathForRender?` | `boolean` |
| `floatLength?` | `number` |

#### Returns

`string`

#### Implementation of

[IImage](../interfaces/IImage.md).[getPathString](../interfaces/IImage.md#getpathstring)

#### Inherited from

[Rect](Rect.md).[getPathString](Rect.md#getpathstring)

#### Defined in

[src/ui/packages/display/src/UI.ts:462](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/display/src/UI.ts#L462)

___

### asPath

▸ **asPath**(`curve?`, `pathForRender?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `curve?` | `boolean` |
| `pathForRender?` | `boolean` |

#### Returns

`void`

#### Implementation of

[IImage](../interfaces/IImage.md).[asPath](../interfaces/IImage.md#aspath)

#### Inherited from

[Rect](Rect.md).[asPath](Rect.md#aspath)

#### Defined in

[src/ui/packages/display/src/UI.ts:466](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/display/src/UI.ts#L466)

___

### load

▸ **load**(): `void`

#### Returns

`void`

#### Implementation of

[IImage](../interfaces/IImage.md).[load](../interfaces/IImage.md#load)

#### Inherited from

[Rect](Rect.md).[load](Rect.md#load)

#### Defined in

[src/ui/packages/display/src/UI.ts:470](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/display/src/UI.ts#L470)

___

### \_\_onUpdateSize

▸ **__onUpdateSize**(): `void`

#### Returns

`void`

#### Implementation of

[IImage](../interfaces/IImage.md).[__onUpdateSize](../interfaces/IImage.md#__onupdatesize)

#### Inherited from

[Rect](Rect.md).[__onUpdateSize](Rect.md#__onupdatesize)

#### Defined in

[src/ui/packages/display/src/UI.ts:474](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/display/src/UI.ts#L474)

___

### \_\_updateRenderPath

▸ **__updateRenderPath**(`updateCache?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `updateCache?` | `boolean` |

#### Returns

`void`

#### Implementation of

[IImage](../interfaces/IImage.md).[__updateRenderPath](../interfaces/IImage.md#__updaterenderpath)

#### Inherited from

[Rect](Rect.md).[__updateRenderPath](Rect.md#__updaterenderpath)

#### Defined in

[src/ui/packages/display/src/UI.ts:481](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/display/src/UI.ts#L481)

___

### \_\_drawRenderPath

▸ **__drawRenderPath**(`canvas`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `canvas` | [`ILeaferCanvas`](../interfaces/ILeaferCanvas.md) |

#### Returns

`void`

#### Implementation of

[IImage](../interfaces/IImage.md).[__drawRenderPath](../interfaces/IImage.md#__drawrenderpath)

#### Inherited from

[Rect](Rect.md).[__drawRenderPath](Rect.md#__drawrenderpath)

#### Defined in

[src/ui/packages/display/src/UI.ts:489](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/display/src/UI.ts#L489)

___

### \_\_drawPath

▸ **__drawPath**(`canvas`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `canvas` | [`ILeaferCanvas`](../interfaces/ILeaferCanvas.md) |

#### Returns

`void`

#### Implementation of

[IImage](../interfaces/IImage.md).[__drawPath](../interfaces/IImage.md#__drawpath)

#### Inherited from

[Rect](Rect.md).[__drawPath](Rect.md#__drawpath)

#### Defined in

[src/ui/packages/display/src/UI.ts:496](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/display/src/UI.ts#L496)

___

### \_\_drawPathByData

▸ **__drawPathByData**(`drawer`, `data`, `ignoreCornerRadius?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `drawer` | [`IPathDrawer`](../interfaces/IPathDrawer.md) |
| `data` | [`IPathCommandData`](../modules.md#ipathcommanddata) |
| `ignoreCornerRadius?` | `boolean` |

#### Returns

`void`

#### Implementation of

[IImage](../interfaces/IImage.md).[__drawPathByData](../interfaces/IImage.md#__drawpathbydata)

#### Inherited from

[Rect](Rect.md).[__drawPathByData](Rect.md#__drawpathbydata)

#### Defined in

[src/ui/packages/display/src/UI.ts:501](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/display/src/UI.ts#L501)

___

### \_\_drawPathByBox

▸ **__drawPathByBox**(`drawer`, `ignoreCornerRadius?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `drawer` | [`IPathDrawer`](../interfaces/IPathDrawer.md) |
| `ignoreCornerRadius?` | `boolean` |

#### Returns

`void`

#### Implementation of

[IImage](../interfaces/IImage.md).[__drawPathByBox](../interfaces/IImage.md#__drawpathbybox)

#### Inherited from

[Rect](Rect.md).[__drawPathByBox](Rect.md#__drawpathbybox)

#### Defined in

[src/ui/packages/display/src/UI.ts:505](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/display/src/UI.ts#L505)

___

### drawImagePlaceholder

▸ **drawImagePlaceholder**(`_paint`, `canvas`, `renderOptions`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `_paint` | [`ILeafPaint`](../interfaces/ILeafPaint.md) |
| `canvas` | [`ILeaferCanvas`](../interfaces/ILeaferCanvas.md) |
| `renderOptions` | [`IRenderOptions`](../interfaces/IRenderOptions.md) |

#### Returns

`void`

#### Implementation of

[IImage](../interfaces/IImage.md).[drawImagePlaceholder](../interfaces/IImage.md#drawimageplaceholder)

#### Inherited from

[Rect](Rect.md).[drawImagePlaceholder](Rect.md#drawimageplaceholder)

#### Defined in

[src/ui/packages/display/src/UI.ts:514](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/display/src/UI.ts#L514)

___

### animate

▸ **animate**(`keyframe?`, `_options?`, `_type?`, `_isTemp?`): [`IAnimate`](../interfaces/IAnimate.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `keyframe?` | [`IAnimation`](../modules.md#ianimation) \| [`IUIInputData`](../interfaces/IUIInputData.md) \| [`IKeyframe`](../modules.md#ikeyframe)[] \| [`IAnimation`](../modules.md#ianimation)[] |
| `_options?` | [`ITransition`](../modules.md#itransition) |
| `_type?` | [`IAnimateType`](../modules.md#ianimatetype) |
| `_isTemp?` | `boolean` |

#### Returns

[`IAnimate`](../interfaces/IAnimate.md)

#### Implementation of

[IImage](../interfaces/IImage.md).[animate](../interfaces/IImage.md#animate)

#### Inherited from

[Rect](Rect.md).[animate](Rect.md#animate)

#### Defined in

[src/ui/packages/display/src/UI.ts:520](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/display/src/UI.ts#L520)

___

### killAnimate

▸ **killAnimate**(`_type?`, `_nextStyle?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `_type?` | [`IAnimateType`](../modules.md#ianimatetype) |
| `_nextStyle?` | [`IUIInputData`](../interfaces/IUIInputData.md) |

#### Returns

`void`

#### Implementation of

[IImage](../interfaces/IImage.md).[killAnimate](../interfaces/IImage.md#killanimate)

#### Inherited from

[Rect](Rect.md).[killAnimate](Rect.md#killanimate)

#### Defined in

[src/ui/packages/display/src/UI.ts:525](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/display/src/UI.ts#L525)

___

### export

▸ **export**(`_filename`, `_options?`): `Promise`\<[`IExportResult`](../interfaces/IExportResult.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `_filename` | `string` |
| `_options?` | `number` \| `boolean` \| [`IExportOptions`](../interfaces/IExportOptions.md) |

#### Returns

`Promise`\<[`IExportResult`](../interfaces/IExportResult.md)\>

#### Implementation of

[IImage](../interfaces/IImage.md).[export](../interfaces/IImage.md#export)

#### Inherited from

[Rect](Rect.md).[export](Rect.md#export)

#### Defined in

[src/ui/packages/display/src/UI.ts:531](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/display/src/UI.ts#L531)

___

### syncExport

▸ **syncExport**(`_filename`, `_options?`): [`IExportResult`](../interfaces/IExportResult.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `_filename` | `string` |
| `_options?` | `number` \| `boolean` \| [`IExportOptions`](../interfaces/IExportOptions.md) |

#### Returns

[`IExportResult`](../interfaces/IExportResult.md)

#### Implementation of

[IImage](../interfaces/IImage.md).[syncExport](../interfaces/IImage.md#syncexport)

#### Inherited from

[Rect](Rect.md).[syncExport](Rect.md#syncexport)

#### Defined in

[src/ui/packages/display/src/UI.ts:535](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/display/src/UI.ts#L535)

___

### clone

▸ **clone**(`data?`): `this`

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IUIInputData`](../interfaces/IUIInputData.md) |

#### Returns

`this`

#### Implementation of

[IImage](../interfaces/IImage.md).[clone](../interfaces/IImage.md#clone)

#### Inherited from

[Rect](Rect.md).[clone](Rect.md#clone)

#### Defined in

[src/ui/packages/display/src/UI.ts:539](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/display/src/UI.ts#L539)

___

### one

▸ **one**\<`T`\>(`this`, `data`, `x?`, `y?`, `width?`, `height?`): `T`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`UI`](UI.md)\<[`IUIInputData`](../interfaces/IUIInputData.md)\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `this` | (...`args`: `any`[]) => `T` |
| `data` | [`IUIInputData`](../interfaces/IUIInputData.md) |
| `x?` | `number` |
| `y?` | `number` |
| `width?` | `number` |
| `height?` | `number` |

#### Returns

`T`

#### Inherited from

[Rect](Rect.md).[one](Rect.md#one)

#### Defined in

[src/ui/packages/display/src/UI.ts:546](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/display/src/UI.ts#L546)

___

### registerUI

▸ **registerUI**(): `void`

#### Returns

`void`

#### Inherited from

[Rect](Rect.md).[registerUI](Rect.md#registerui)

#### Defined in

[src/ui/packages/display/src/UI.ts:550](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/display/src/UI.ts#L550)

___

### registerData

▸ **registerData**(`data`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | [`IUIData`](../interfaces/IUIData.md) |

#### Returns

`void`

#### Inherited from

[Rect](Rect.md).[registerData](Rect.md#registerdata)

#### Defined in

[src/ui/packages/display/src/UI.ts:554](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/display/src/UI.ts#L554)

___

### setEditConfig

▸ **setEditConfig**(`_config`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `_config` | [`IEditorConfig`](../interfaces/IEditorConfig.md) \| [`IEditorConfigFunction`](../interfaces/IEditorConfigFunction.md) |

#### Returns

`void`

#### Inherited from

[Rect](Rect.md).[setEditConfig](Rect.md#seteditconfig)

#### Defined in

[src/ui/packages/display/src/UI.ts:561](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/display/src/UI.ts#L561)

___

### setEditOuter

▸ **setEditOuter**(`_toolName`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `_toolName` | `string` \| [`IEditToolFunction`](../interfaces/IEditToolFunction.md) |

#### Returns

`void`

#### Inherited from

[Rect](Rect.md).[setEditOuter](Rect.md#seteditouter)

#### Defined in

[src/ui/packages/display/src/UI.ts:563](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/display/src/UI.ts#L563)

___

### setEditInner

▸ **setEditInner**(`_editorName`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `_editorName` | `string` \| [`IEditToolFunction`](../interfaces/IEditToolFunction.md) |

#### Returns

`void`

#### Inherited from

[Rect](Rect.md).[setEditInner](Rect.md#seteditinner)

#### Defined in

[src/ui/packages/display/src/UI.ts:565](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/display/src/UI.ts#L565)

___

### destroy

▸ **destroy**(): `void`

#### Returns

`void`

#### Implementation of

[IImage](../interfaces/IImage.md).[destroy](../interfaces/IImage.md#destroy)

#### Inherited from

[Rect](Rect.md).[destroy](Rect.md#destroy)

#### Defined in

[src/ui/packages/display/src/UI.ts:568](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/display/src/UI.ts#L568)
