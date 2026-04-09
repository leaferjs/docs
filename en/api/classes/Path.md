# Class: Path\<TInputData\>

## Type parameters

| Name         | Type                                                |
| :----------- | :-------------------------------------------------- |
| `TInputData` | [`IPathInputData`](../interfaces/IPathInputData.md) |

## Hierarchy

- [`UI`](UI.md)\<`TInputData`\>

  ↳ **`Path`**

## Implements

- [`IPath`](../interfaces/IPath.md)

## Table of contents

### Constructors

- [constructor](Path.md#constructor)

### Properties

- [innerId](Path.md#innerid)
- [skipJSON](Path.md#skipjson)
- [syncEventer](Path.md#synceventer)
- [lockNormalStyle](Path.md#locknormalstyle)
- [\_\_layout](Path.md#__layout)
- [\_\_world](Path.md#__world)
- [\_\_local](Path.md#__local)
- [\_\_nowWorld](Path.md#__nowworld)
- [\_\_cameraWorld](Path.md#__cameraworld)
- [\_\_worldOpacity](Path.md#__worldopacity)
- [\_\_scrollWorld](Path.md#__scrollworld)
- [\_\_level](Path.md#__level)
- [\_\_tempNumber](Path.md#__tempnumber)
- [\_\_hasAutoLayout](Path.md#__hasautolayout)
- [\_\_hasMask](Path.md#__hasmask)
- [\_\_hasEraser](Path.md#__haseraser)
- [\_\_hitCanvas](Path.md#__hitcanvas)
- [\_\_captureMap](Path.md#__capturemap)
- [\_\_bubbleMap](Path.md#__bubblemap)
- [\_\_hasLocalEvent](Path.md#__haslocalevent)
- [\_\_hasWorldEvent](Path.md#__hasworldevent)
- [topChildren](Path.md#topchildren)
- [destroyed](Path.md#destroyed)
- [\_\_](Path.md#__)
- [strokeAlign](Path.md#strokealign)
- [proxyData](Path.md#proxydata)
- [\_\_proxyData](Path.md#__proxydata)
- [leafer](Path.md#leafer)
- [parent](Path.md#parent)
- [zoomLayer](Path.md#zoomlayer)
- [children](Path.md#children)
- [startLinker](Path.md#startlinker)
- [endLinker](Path.md#endlinker)
- [id](Path.md#id)
- [name](Path.md#name)
- [className](Path.md#classname)
- [blendMode](Path.md#blendmode)
- [opacity](Path.md#opacity)
- [visible](Path.md#visible)
- [locked](Path.md#locked)
- [dim](Path.md#dim)
- [dimskip](Path.md#dimskip)
- [bright](Path.md#bright)
- [zIndex](Path.md#zindex)
- [mask](Path.md#mask)
- [eraser](Path.md#eraser)
- [x](Path.md#x)
- [y](Path.md#y)
- [width](Path.md#width)
- [height](Path.md#height)
- [scaleX](Path.md#scalex)
- [scaleY](Path.md#scaley)
- [scaleFixed](Path.md#scalefixed)
- [rotation](Path.md#rotation)
- [skewX](Path.md#skewx)
- [skewY](Path.md#skewy)
- [offsetX](Path.md#offsetx)
- [offsetY](Path.md#offsety)
- [scrollX](Path.md#scrollx)
- [scrollY](Path.md#scrolly)
- [origin](Path.md#origin)
- [around](Path.md#around)
- [lazy](Path.md#lazy)
- [pixelRatio](Path.md#pixelratio)
- [renderSpread](Path.md#renderspread)
- [path](Path.md#path)
- [windingRule](Path.md#windingrule)
- [closed](Path.md#closed)
- [flow](Path.md#flow)
- [padding](Path.md#padding)
- [gap](Path.md#gap)
- [flowAlign](Path.md#flowalign)
- [flowWrap](Path.md#flowwrap)
- [itemBox](Path.md#itembox)
- [inFlow](Path.md#inflow)
- [autoWidth](Path.md#autowidth)
- [autoHeight](Path.md#autoheight)
- [lockRatio](Path.md#lockratio)
- [autoBox](Path.md#autobox)
- [widthRange](Path.md#widthrange)
- [heightRange](Path.md#heightrange)
- [draggable](Path.md#draggable)
- [dragBounds](Path.md#dragbounds)
- [dragBoundsType](Path.md#dragboundstype)
- [editable](Path.md#editable)
- [hittable](Path.md#hittable)
- [hitFill](Path.md#hitfill)
- [hitStroke](Path.md#hitstroke)
- [hitBox](Path.md#hitbox)
- [hitChildren](Path.md#hitchildren)
- [hitSelf](Path.md#hitself)
- [hitRadius](Path.md#hitradius)
- [cursor](Path.md#cursor)
- [fill](Path.md#fill)
- [stroke](Path.md#stroke)
- [strokeWidth](Path.md#strokewidth)
- [strokeScaleFixed](Path.md#strokescalefixed)
- [strokeCap](Path.md#strokecap)
- [strokeJoin](Path.md#strokejoin)
- [dashPattern](Path.md#dashpattern)
- [dashOffset](Path.md#dashoffset)
- [miterLimit](Path.md#miterlimit)
- [startArrow](Path.md#startarrow)
- [endArrow](Path.md#endarrow)
- [cornerRadius](Path.md#cornerradius)
- [cornerSmoothing](Path.md#cornersmoothing)
- [shadow](Path.md#shadow)
- [innerShadow](Path.md#innershadow)
- [blur](Path.md#blur)
- [backgroundBlur](Path.md#backgroundblur)
- [grayscale](Path.md#grayscale)
- [filter](Path.md#filter)
- [complex](Path.md#complex)
- [animation](Path.md#animation)
- [animationOut](Path.md#animationout)
- [transition](Path.md#transition)
- [transitionOut](Path.md#transitionout)
- [motionPath](Path.md#motionpath)
- [motionPrecision](Path.md#motionprecision)
- [motion](Path.md#motion)
- [motionRotation](Path.md#motionrotation)
- [states](Path.md#states)
- [state](Path.md#state)
- [selected](Path.md#selected)
- [disabled](Path.md#disabled)
- [normalStyle](Path.md#normalstyle)
- [hoverStyle](Path.md#hoverstyle)
- [pressStyle](Path.md#pressstyle)
- [focusStyle](Path.md#focusstyle)
- [selectedStyle](Path.md#selectedstyle)
- [disabledStyle](Path.md#disabledstyle)
- [placeholderStyle](Path.md#placeholderstyle)
- [placeholderColor](Path.md#placeholdercolor)
- [placeholderDelay](Path.md#placeholderdelay)
- [button](Path.md#button)
- [editConfig](Path.md#editconfig)
- [editOuter](Path.md#editouter)
- [editInner](Path.md#editinner)
- [data](Path.md#data)
- [useFastShadow](Path.md#usefastshadow)
- [\_\_box](Path.md#__box)
- [\_\_animate](Path.md#__animate)

### Accessors

- [tag](Path.md#tag)
- [innerName](Path.md#innername)
- [\_\_DataProcessor](Path.md#__dataprocessor)
- [\_\_LayoutProcessor](Path.md#__layoutprocessor)
- [leaferIsCreated](Path.md#leaferiscreated)
- [leaferIsReady](Path.md#leaferisready)
- [isLeafer](Path.md#isleafer)
- [isBranch](Path.md#isbranch)
- [isBranchLeaf](Path.md#isbranchleaf)
- [\_\_localMatrix](Path.md#__localmatrix)
- [\_\_localBoxBounds](Path.md#__localboxbounds)
- [worldTransform](Path.md#worldtransform)
- [localTransform](Path.md#localtransform)
- [scrollWorldTransform](Path.md#scrollworldtransform)
- [boxBounds](Path.md#boxbounds)
- [renderBounds](Path.md#renderbounds)
- [worldBoxBounds](Path.md#worldboxbounds)
- [worldStrokeBounds](Path.md#worldstrokebounds)
- [worldRenderBounds](Path.md#worldrenderbounds)
- [worldOpacity](Path.md#worldopacity)
- [\_\_worldFlipped](Path.md#__worldflipped)
- [\_\_onlyHitMask](Path.md#__onlyhitmask)
- [\_\_ignoreHitWorld](Path.md#__ignorehitworld)
- [\_\_inLazyBounds](Path.md#__inlazybounds)
- [pathInputed](Path.md#pathinputed)
- [event](Path.md#event)
- [\_\_tag](Path.md#__tag)
- [app](Path.md#app)
- [isFrame](Path.md#isframe)
- [strokeWidthFixed](Path.md#strokewidthfixed)
- [scale](Path.md#scale)
- [isAutoWidth](Path.md#isautowidth)
- [isAutoHeight](Path.md#isautoheight)
- [pen](Path.md#pen)

### Methods

- [resetCustom](Path.md#resetcustom)
- [waitParent](Path.md#waitparent)
- [waitLeafer](Path.md#waitleafer)
- [nextRender](Path.md#nextrender)
- [removeNextRender](Path.md#removenextrender)
- [\_\_bindLeafer](Path.md#__bindleafer)
- [setAttr](Path.md#setattr)
- [getAttr](Path.md#getattr)
- [getComputedAttr](Path.md#getcomputedattr)
- [toJSON](Path.md#tojson)
- [toString](Path.md#tostring)
- [toSVG](Path.md#tosvg)
- [\_\_SVG](Path.md#__svg)
- [toHTML](Path.md#tohtml)
- [\_\_setAttr](Path.md#__setattr)
- [\_\_getAttr](Path.md#__getattr)
- [setProxyAttr](Path.md#setproxyattr)
- [getProxyAttr](Path.md#getproxyattr)
- [focus](Path.md#focus)
- [updateState](Path.md#updatestate)
- [updateLayout](Path.md#updatelayout)
- [forceUpdate](Path.md#forceupdate)
- [forceRender](Path.md#forcerender)
- [\_\_extraUpdate](Path.md#__extraupdate)
- [\_\_updateWorldMatrix](Path.md#__updateworldmatrix)
- [\_\_updateLocalMatrix](Path.md#__updatelocalmatrix)
- [\_\_updateWorldBounds](Path.md#__updateworldbounds)
- [\_\_updateLocalBounds](Path.md#__updatelocalbounds)
- [\_\_updateLocalBoxBounds](Path.md#__updatelocalboxbounds)
- [\_\_updateLocalStrokeBounds](Path.md#__updatelocalstrokebounds)
- [\_\_updateLocalRenderBounds](Path.md#__updatelocalrenderbounds)
- [\_\_updateBoxBounds](Path.md#__updateboxbounds)
- [\_\_updateContentBounds](Path.md#__updatecontentbounds)
- [\_\_updateStrokeBounds](Path.md#__updatestrokebounds)
- [\_\_updateRenderBounds](Path.md#__updaterenderbounds)
- [\_\_updateAutoLayout](Path.md#__updateautolayout)
- [\_\_updateFlowLayout](Path.md#__updateflowlayout)
- [\_\_updateNaturalSize](Path.md#__updatenaturalsize)
- [\_\_updateStrokeSpread](Path.md#__updatestrokespread)
- [\_\_updateRenderSpread](Path.md#__updaterenderspread)
- [\_\_updateEraser](Path.md#__updateeraser)
- [\_\_renderEraser](Path.md#__rendereraser)
- [\_\_updateMask](Path.md#__updatemask)
- [\_\_renderMask](Path.md#__rendermask)
- [\_\_getNowWorld](Path.md#__getnowworld)
- [getClampRenderScale](Path.md#getclamprenderscale)
- [getRenderScaleData](Path.md#getrenderscaledata)
- [getTransform](Path.md#gettransform)
- [getBounds](Path.md#getbounds)
- [getLayoutBounds](Path.md#getlayoutbounds)
- [getLayoutPoints](Path.md#getlayoutpoints)
- [getWorldBounds](Path.md#getworldbounds)
- [worldToLocal](Path.md#worldtolocal)
- [localToWorld](Path.md#localtoworld)
- [worldToInner](Path.md#worldtoinner)
- [innerToWorld](Path.md#innertoworld)
- [getBoxPoint](Path.md#getboxpoint)
- [getBoxPointByInner](Path.md#getboxpointbyinner)
- [getInnerPoint](Path.md#getinnerpoint)
- [getInnerPointByBox](Path.md#getinnerpointbybox)
- [getInnerPointByLocal](Path.md#getinnerpointbylocal)
- [getLocalPoint](Path.md#getlocalpoint)
- [getLocalPointByInner](Path.md#getlocalpointbyinner)
- [getPagePoint](Path.md#getpagepoint)
- [getWorldPoint](Path.md#getworldpoint)
- [getWorldPointByBox](Path.md#getworldpointbybox)
- [getWorldPointByLocal](Path.md#getworldpointbylocal)
- [getWorldPointByPage](Path.md#getworldpointbypage)
- [setTransform](Path.md#settransform)
- [transform](Path.md#transform)
- [move](Path.md#move)
- [moveInner](Path.md#moveinner)
- [scaleOf](Path.md#scaleof)
- [rotateOf](Path.md#rotateof)
- [skewOf](Path.md#skewof)
- [transformWorld](Path.md#transformworld)
- [moveWorld](Path.md#moveworld)
- [scaleOfWorld](Path.md#scaleofworld)
- [rotateOfWorld](Path.md#rotateofworld)
- [skewOfWorld](Path.md#skewofworld)
- [flip](Path.md#flip)
- [scaleResize](Path.md#scaleresize)
- [\_\_scaleResize](Path.md#__scaleresize)
- [resizeWidth](Path.md#resizewidth)
- [resizeHeight](Path.md#resizeheight)
- [hit](Path.md#hit)
- [\_\_hitWorld](Path.md#__hitworld)
- [\_\_hit](Path.md#__hit)
- [\_\_hitFill](Path.md#__hitfill)
- [\_\_hitStroke](Path.md#__hitstroke)
- [\_\_hitPixel](Path.md#__hitpixel)
- [\_\_drawHitPath](Path.md#__drawhitpath)
- [\_\_updateHitCanvas](Path.md#__updatehitcanvas)
- [\_\_render](Path.md#__render)
- [\_\_drawFast](Path.md#__drawfast)
- [\_\_draw](Path.md#__draw)
- [\_\_clip](Path.md#__clip)
- [\_\_renderShape](Path.md#__rendershape)
- [\_\_drawShape](Path.md#__drawshape)
- [\_\_updateWorldOpacity](Path.md#__updateworldopacity)
- [\_\_updateChange](Path.md#__updatechange)
- [\_\_updatePath](Path.md#__updatepath)
- [getMotionPathData](Path.md#getmotionpathdata)
- [getMotionPoint](Path.md#getmotionpoint)
- [getMotionTotal](Path.md#getmotiontotal)
- [\_\_updateMotionPath](Path.md#__updatemotionpath)
- [\_\_runAnimation](Path.md#__runanimation)
- [\_\_updateSortChildren](Path.md#__updatesortchildren)
- [add](Path.md#add)
- [remove](Path.md#remove)
- [dropTo](Path.md#dropto)
- [on](Path.md#on)
- [off](Path.md#off)
- [on\_](Path.md#on_)
- [off\_](Path.md#off_)
- [once](Path.md#once)
- [emit](Path.md#emit)
- [emitEvent](Path.md#emitevent)
- [hasEvent](Path.md#hasevent)
- [changeAttr](Path.md#changeattr)
- [addAttr](Path.md#addattr)
- [\_\_emitLifeEvent](Path.md#__emitlifeevent)
- [reset](Path.md#reset)
- [set](Path.md#set)
- [get](Path.md#get)
- [createProxyData](Path.md#createproxydata)
- [clearProxyData](Path.md#clearproxydata)
- [find](Path.md#find)
- [findTag](Path.md#findtag)
- [findOne](Path.md#findone)
- [findId](Path.md#findid)
- [getPath](Path.md#getpath)
- [getPathString](Path.md#getpathstring)
- [asPath](Path.md#aspath)
- [load](Path.md#load)
- [\_\_onUpdateSize](Path.md#__onupdatesize)
- [\_\_updateRenderPath](Path.md#__updaterenderpath)
- [\_\_drawRenderPath](Path.md#__drawrenderpath)
- [\_\_drawPath](Path.md#__drawpath)
- [\_\_drawPathByData](Path.md#__drawpathbydata)
- [\_\_drawPathByBox](Path.md#__drawpathbybox)
- [drawImagePlaceholder](Path.md#drawimageplaceholder)
- [animate](Path.md#animate)
- [killAnimate](Path.md#killanimate)
- [export](Path.md#export)
- [syncExport](Path.md#syncexport)
- [clone](Path.md#clone)
- [one](Path.md#one)
- [registerUI](Path.md#registerui)
- [registerData](Path.md#registerdata)
- [setEditConfig](Path.md#seteditconfig)
- [setEditOuter](Path.md#seteditouter)
- [setEditInner](Path.md#seteditinner)
- [destroy](Path.md#destroy)

## Constructors

### constructor

• **new Path**\<`TInputData`\>(`data?`): [`Path`](Path.md)\<`TInputData`\>

#### Type parameters

| Name         | Type                                                |
| :----------- | :-------------------------------------------------- |
| `TInputData` | [`IPathInputData`](../interfaces/IPathInputData.md) |

#### Parameters

| Name    | Type         |
| :------ | :----------- |
| `data?` | `TInputData` |

#### Returns

[`Path`](Path.md)\<`TInputData`\>

#### Inherited from

[UI](UI.md).[constructor](UI.md#constructor)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:116](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/display/src/Leaf.ts#L116)

## Properties

### innerId

• `Readonly` **innerId**: `number`

#### Implementation of

[IPath](../interfaces/IPath.md).[innerId](../interfaces/IPath.md#innerid)

#### Inherited from

[UI](UI.md).[innerId](UI.md#innerid)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:33](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/display/src/Leaf.ts#L33)

___

### skipJSON

• `Optional` **skipJSON**: `boolean`

#### Implementation of

[IPath](../interfaces/IPath.md).[skipJSON](../interfaces/IPath.md#skipjson)

#### Inherited from

[UI](UI.md).[skipJSON](UI.md#skipjson)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:49](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/display/src/Leaf.ts#L49)

___

### syncEventer

• `Optional` **syncEventer**: [`ILeaf`](../interfaces/ILeaf.md)

#### Implementation of

[IPath](../interfaces/IPath.md).[syncEventer](../interfaces/IPath.md#synceventer)

#### Inherited from

[UI](UI.md).[syncEventer](UI.md#synceventer)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:50](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/display/src/Leaf.ts#L50)

___

### lockNormalStyle

• `Optional` **lockNormalStyle**: `boolean`

#### Implementation of

[IPath](../interfaces/IPath.md).[lockNormalStyle](../interfaces/IPath.md#locknormalstyle)

#### Inherited from

[UI](UI.md).[lockNormalStyle](UI.md#locknormalstyle)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:51](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/display/src/Leaf.ts#L51)

___

### \_\_layout

• **\_\_layout**: [`ILeafLayout`](../interfaces/ILeafLayout.md)

#### Implementation of

[IPath](../interfaces/IPath.md).[__layout](../interfaces/IPath.md#__layout)

#### Inherited from

[UI](UI.md).[__layout](UI.md#__layout)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:54](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/display/src/Leaf.ts#L54)

___

### \_\_world

• **\_\_world**: [`IMatrixWithBoundsScaleData`](../interfaces/IMatrixWithBoundsScaleData.md)

#### Implementation of

[IPath](../interfaces/IPath.md).[__world](../interfaces/IPath.md#__world)

#### Inherited from

[UI](UI.md).[__world](UI.md#__world)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:56](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/display/src/Leaf.ts#L56)

___

### \_\_local

• `Optional` **\_\_local**: [`IMatrixWithBoundsData`](../interfaces/IMatrixWithBoundsData.md)

#### Implementation of

[IPath](../interfaces/IPath.md).[__local](../interfaces/IPath.md#__local)

#### Inherited from

[UI](UI.md).[__local](UI.md#__local)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:57](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/display/src/Leaf.ts#L57)

___

### \_\_nowWorld

• `Optional` **\_\_nowWorld**: [`IMatrixWithBoundsScaleData`](../interfaces/IMatrixWithBoundsScaleData.md)

#### Implementation of

[IPath](../interfaces/IPath.md).[__nowWorld](../interfaces/IPath.md#__nowworld)

#### Inherited from

[UI](UI.md).[__nowWorld](UI.md#__nowworld)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:59](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/display/src/Leaf.ts#L59)

___

### \_\_cameraWorld

• `Optional` **\_\_cameraWorld**: [`IMatrixWithBoundsScaleData`](../interfaces/IMatrixWithBoundsScaleData.md)

#### Implementation of

[IPath](../interfaces/IPath.md).[__cameraWorld](../interfaces/IPath.md#__cameraworld)

#### Inherited from

[UI](UI.md).[__cameraWorld](UI.md#__cameraworld)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:60](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/display/src/Leaf.ts#L60)

___

### \_\_worldOpacity

• **\_\_worldOpacity**: `number`

#### Implementation of

[IPath](../interfaces/IPath.md).[__worldOpacity](../interfaces/IPath.md#__worldopacity)

#### Inherited from

[UI](UI.md).[__worldOpacity](UI.md#__worldopacity)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:65](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/display/src/Leaf.ts#L65)

___

### \_\_scrollWorld

• `Optional` **\_\_scrollWorld**: [`IMatrixWithBoundsScaleData`](../interfaces/IMatrixWithBoundsScaleData.md)

#### Implementation of

[IPath](../interfaces/IPath.md).[__scrollWorld](../interfaces/IPath.md#__scrollworld)

#### Inherited from

[UI](UI.md).[__scrollWorld](UI.md#__scrollworld)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:71](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/display/src/Leaf.ts#L71)

___

### \_\_level

• **\_\_level**: `number`

#### Implementation of

[IPath](../interfaces/IPath.md).[__level](../interfaces/IPath.md#__level)

#### Inherited from

[UI](UI.md).[__level](UI.md#__level)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:84](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/display/src/Leaf.ts#L84)

___

### \_\_tempNumber

• **\_\_tempNumber**: `number`

#### Implementation of

[IPath](../interfaces/IPath.md).[__tempNumber](../interfaces/IPath.md#__tempnumber)

#### Inherited from

[UI](UI.md).[__tempNumber](UI.md#__tempnumber)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:85](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/display/src/Leaf.ts#L85)

___

### \_\_hasAutoLayout

• `Optional` **\_\_hasAutoLayout**: `boolean`

#### Implementation of

[IPath](../interfaces/IPath.md).[__hasAutoLayout](../interfaces/IPath.md#__hasautolayout)

#### Inherited from

[UI](UI.md).[__hasAutoLayout](UI.md#__hasautolayout)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:89](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/display/src/Leaf.ts#L89)

___

### \_\_hasMask

• `Optional` **\_\_hasMask**: `boolean`

#### Implementation of

[IPath](../interfaces/IPath.md).[__hasMask](../interfaces/IPath.md#__hasmask)

#### Inherited from

[UI](UI.md).[__hasMask](UI.md#__hasmask)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:90](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/display/src/Leaf.ts#L90)

___

### \_\_hasEraser

• `Optional` **\_\_hasEraser**: `boolean`

#### Implementation of

[IPath](../interfaces/IPath.md).[__hasEraser](../interfaces/IPath.md#__haseraser)

#### Inherited from

[UI](UI.md).[__hasEraser](UI.md#__haseraser)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:91](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/display/src/Leaf.ts#L91)

___

### \_\_hitCanvas

• `Optional` **\_\_hitCanvas**: [`IHitCanvas`](../interfaces/IHitCanvas.md)

#### Implementation of

[IPath](../interfaces/IPath.md).[__hitCanvas](../interfaces/IPath.md#__hitcanvas)

#### Inherited from

[UI](UI.md).[__hitCanvas](UI.md#__hitcanvas)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:92](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/display/src/Leaf.ts#L92)

___

### \_\_captureMap

• `Optional` **\_\_captureMap**: [`IEventListenerMap`](../interfaces/IEventListenerMap.md)

#### Implementation of

[IPath](../interfaces/IPath.md).[__captureMap](../interfaces/IPath.md#__capturemap)

#### Inherited from

[UI](UI.md).[__captureMap](UI.md#__capturemap)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:103](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/display/src/Leaf.ts#L103)

___

### \_\_bubbleMap

• `Optional` **\_\_bubbleMap**: [`IEventListenerMap`](../interfaces/IEventListenerMap.md)

#### Implementation of

[IPath](../interfaces/IPath.md).[__bubbleMap](../interfaces/IPath.md#__bubblemap)

#### Inherited from

[UI](UI.md).[__bubbleMap](UI.md#__bubblemap)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:104](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/display/src/Leaf.ts#L104)

___

### \_\_hasLocalEvent

• `Optional` **\_\_hasLocalEvent**: `boolean`

#### Implementation of

[IPath](../interfaces/IPath.md).[__hasLocalEvent](../interfaces/IPath.md#__haslocalevent)

#### Inherited from

[UI](UI.md).[__hasLocalEvent](UI.md#__haslocalevent)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:106](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/display/src/Leaf.ts#L106)

___

### \_\_hasWorldEvent

• `Optional` **\_\_hasWorldEvent**: `boolean`

#### Implementation of

[IPath](../interfaces/IPath.md).[__hasWorldEvent](../interfaces/IPath.md#__hasworldevent)

#### Inherited from

[UI](UI.md).[__hasWorldEvent](UI.md#__hasworldevent)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:107](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/display/src/Leaf.ts#L107)

___

### topChildren

• `Optional` **topChildren**: [`ILeaf`](../interfaces/ILeaf.md)[]

#### Implementation of

[IPath](../interfaces/IPath.md).[topChildren](../interfaces/IPath.md#topchildren)

#### Inherited from

[UI](UI.md).[topChildren](UI.md#topchildren)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:111](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/display/src/Leaf.ts#L111)

___

### destroyed

• **destroyed**: `boolean`

#### Implementation of

[IPath](../interfaces/IPath.md).[destroyed](../interfaces/IPath.md#destroyed)

#### Inherited from

[UI](UI.md).[destroyed](UI.md#destroyed)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:113](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/display/src/Leaf.ts#L113)

___

### \_\_

• **\_\_**: [`IPathData`](../interfaces/IPathData.md)

#### Implementation of

[IPath](../interfaces/IPath.md).[__](../interfaces/IPath.md#__)

#### Overrides

[UI](UI.md).[__](UI.md#__)

#### Defined in

[src/ui/packages/display/src/Path.ts:15](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/display/src/Path.ts#L15)

___

### strokeAlign

• `Optional` **strokeAlign**: [`IStrokeAlign`](../modules.md#istrokealign)

#### Implementation of

[IPath](../interfaces/IPath.md).[strokeAlign](../interfaces/IPath.md#strokealign)

#### Overrides

[UI](UI.md).[strokeAlign](UI.md#strokealign)

#### Defined in

[src/ui/packages/display/src/Path.ts:18](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/display/src/Path.ts#L18)

___

### proxyData

• `Optional` **proxyData**: [`IUIInputData`](../interfaces/IUIInputData.md)

#### Implementation of

[IPath](../interfaces/IPath.md).[proxyData](../interfaces/IPath.md#proxydata)

#### Inherited from

[UI](UI.md).[proxyData](UI.md#proxydata)

#### Defined in

[src/ui/packages/display/src/UI.ts:21](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/display/src/UI.ts#L21)

___

### \_\_proxyData

• `Optional` **\_\_proxyData**: [`IUIInputData`](../interfaces/IUIInputData.md)

#### Implementation of

[IPath](../interfaces/IPath.md).[__proxyData](../interfaces/IPath.md#__proxydata)

#### Inherited from

[UI](UI.md).[__proxyData](UI.md#__proxydata)

#### Defined in

[src/ui/packages/display/src/UI.ts:22](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/display/src/UI.ts#L22)

___

### leafer

• `Optional` **leafer**: [`ILeafer`](../interfaces/ILeafer.md)

#### Implementation of

[IPath](../interfaces/IPath.md).[leafer](../interfaces/IPath.md#leafer)

#### Inherited from

[UI](UI.md).[leafer](UI.md#leafer)

#### Defined in

[src/ui/packages/display/src/UI.ts:26](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/display/src/UI.ts#L26)

___

### parent

• `Optional` **parent**: [`IGroup`](../interfaces/IGroup.md)

#### Implementation of

[IPath](../interfaces/IPath.md).[parent](../interfaces/IPath.md#parent)

#### Inherited from

[UI](UI.md).[parent](UI.md#parent)

#### Defined in

[src/ui/packages/display/src/UI.ts:27](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/display/src/UI.ts#L27)

___

### zoomLayer

• **zoomLayer**: [`IGroup`](../interfaces/IGroup.md)

#### Implementation of

[IPath](../interfaces/IPath.md).[zoomLayer](../interfaces/IPath.md#zoomlayer)

#### Inherited from

[UI](UI.md).[zoomLayer](UI.md#zoomlayer)

#### Defined in

[src/ui/packages/display/src/UI.ts:30](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/display/src/UI.ts#L30)

___

### children

• `Optional` **children**: [`IUI`](../interfaces/IUI.md)[]

#### Implementation of

[IPath](../interfaces/IPath.md).[children](../interfaces/IPath.md#children)

#### Inherited from

[UI](UI.md).[children](UI.md#children)

#### Defined in

[src/ui/packages/display/src/UI.ts:34](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/display/src/UI.ts#L34)

___

### startLinker

• `Optional` **startLinker**: [`ILinker`](../interfaces/ILinker.md)[]

#### Implementation of

[IPath](../interfaces/IPath.md).[startLinker](../interfaces/IPath.md#startlinker)

#### Inherited from

[UI](UI.md).[startLinker](UI.md#startlinker)

#### Defined in

[src/ui/packages/display/src/UI.ts:37](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/display/src/UI.ts#L37)

___

### endLinker

• `Optional` **endLinker**: [`ILinker`](../interfaces/ILinker.md)[]

#### Implementation of

[IPath](../interfaces/IPath.md).[endLinker](../interfaces/IPath.md#endlinker)

#### Inherited from

[UI](UI.md).[endLinker](UI.md#endlinker)

#### Defined in

[src/ui/packages/display/src/UI.ts:38](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/display/src/UI.ts#L38)

___

### id

• `Optional` **id**: `string`

#### Implementation of

[IPath](../interfaces/IPath.md).[id](../interfaces/IPath.md#id)

#### Inherited from

[UI](UI.md).[id](UI.md#id)

#### Defined in

[src/ui/packages/display/src/UI.ts:44](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/display/src/UI.ts#L44)

___

### name

• `Optional` **name**: `string`

#### Implementation of

[IPath](../interfaces/IPath.md).[name](../interfaces/IPath.md#name)

#### Inherited from

[UI](UI.md).[name](UI.md#name)

#### Defined in

[src/ui/packages/display/src/UI.ts:47](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/display/src/UI.ts#L47)

___

### className

• `Optional` **className**: `string`

#### Implementation of

[IPath](../interfaces/IPath.md).[className](../interfaces/IPath.md#classname)

#### Inherited from

[UI](UI.md).[className](UI.md#classname)

#### Defined in

[src/ui/packages/display/src/UI.ts:50](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/display/src/UI.ts#L50)

___

### blendMode

• `Optional` **blendMode**: [`IBlendMode`](../modules.md#iblendmode)

#### Implementation of

[IPath](../interfaces/IPath.md).[blendMode](../interfaces/IPath.md#blendmode)

#### Inherited from

[UI](UI.md).[blendMode](UI.md#blendmode)

#### Defined in

[src/ui/packages/display/src/UI.ts:55](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/display/src/UI.ts#L55)

___

### opacity

• `Optional` **opacity**: `number`

#### Implementation of

[IPath](../interfaces/IPath.md).[opacity](../interfaces/IPath.md#opacity)

#### Inherited from

[UI](UI.md).[opacity](UI.md#opacity)

#### Defined in

[src/ui/packages/display/src/UI.ts:58](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/display/src/UI.ts#L58)

___

### visible

• `Optional` **visible**: `boolean` \| `0`

#### Implementation of

[IPath](../interfaces/IPath.md).[visible](../interfaces/IPath.md#visible)

#### Inherited from

[UI](UI.md).[visible](UI.md#visible)

#### Defined in

[src/ui/packages/display/src/UI.ts:61](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/display/src/UI.ts#L61)

___

### locked

• `Optional` **locked**: `boolean`

#### Implementation of

[IPath](../interfaces/IPath.md).[locked](../interfaces/IPath.md#locked)

#### Inherited from

[UI](UI.md).[locked](UI.md#locked)

#### Defined in

[src/ui/packages/display/src/UI.ts:65](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/display/src/UI.ts#L65)

___

### dim

• `Optional` **dim**: `number` \| `boolean`

#### Implementation of

[IPath](../interfaces/IPath.md).[dim](../interfaces/IPath.md#dim)

#### Inherited from

[UI](UI.md).[dim](UI.md#dim)

#### Defined in

[src/ui/packages/display/src/UI.ts:71](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/display/src/UI.ts#L71)

___

### dimskip

• `Optional` **dimskip**: `boolean`

#### Implementation of

[IPath](../interfaces/IPath.md).[dimskip](../interfaces/IPath.md#dimskip)

#### Inherited from

[UI](UI.md).[dimskip](UI.md#dimskip)

#### Defined in

[src/ui/packages/display/src/UI.ts:74](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/display/src/UI.ts#L74)

___

### bright

• `Optional` **bright**: `boolean`

#### Implementation of

[IPath](../interfaces/IPath.md).[bright](../interfaces/IPath.md#bright)

#### Inherited from

[UI](UI.md).[bright](UI.md#bright)

#### Defined in

[src/ui/packages/display/src/UI.ts:76](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/display/src/UI.ts#L76)

___

### zIndex

• `Optional` **zIndex**: `number`

#### Implementation of

[IPath](../interfaces/IPath.md).[zIndex](../interfaces/IPath.md#zindex)

#### Inherited from

[UI](UI.md).[zIndex](UI.md#zindex)

#### Defined in

[src/ui/packages/display/src/UI.ts:80](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/display/src/UI.ts#L80)

___

### mask

• `Optional` **mask**: `boolean` \| [`IMaskType`](../modules.md#imasktype)

#### Implementation of

[IPath](../interfaces/IPath.md).[mask](../interfaces/IPath.md#mask)

#### Inherited from

[UI](UI.md).[mask](UI.md#mask)

#### Defined in

[src/ui/packages/display/src/UI.ts:84](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/display/src/UI.ts#L84)

___

### eraser

• `Optional` **eraser**: `boolean` \| [`IEraserType`](../modules.md#ierasertype)

#### Implementation of

[IPath](../interfaces/IPath.md).[eraser](../interfaces/IPath.md#eraser)

#### Inherited from

[UI](UI.md).[eraser](UI.md#eraser)

#### Defined in

[src/ui/packages/display/src/UI.ts:87](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/display/src/UI.ts#L87)

___

### x

• `Optional` **x**: `number`

#### Implementation of

[IPath](../interfaces/IPath.md).[x](../interfaces/IPath.md#x)

#### Inherited from

[UI](UI.md).[x](UI.md#x)

#### Defined in

[src/ui/packages/display/src/UI.ts:92](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/display/src/UI.ts#L92)

___

### y

• `Optional` **y**: `number`

#### Implementation of

[IPath](../interfaces/IPath.md).[y](../interfaces/IPath.md#y)

#### Inherited from

[UI](UI.md).[y](UI.md#y)

#### Defined in

[src/ui/packages/display/src/UI.ts:95](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/display/src/UI.ts#L95)

___

### width

• `Optional` **width**: `number`

#### Implementation of

[IPath](../interfaces/IPath.md).[width](../interfaces/IPath.md#width)

#### Inherited from

[UI](UI.md).[width](UI.md#width)

#### Defined in

[src/ui/packages/display/src/UI.ts:99](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/display/src/UI.ts#L99)

___

### height

• `Optional` **height**: `number`

#### Implementation of

[IPath](../interfaces/IPath.md).[height](../interfaces/IPath.md#height)

#### Inherited from

[UI](UI.md).[height](UI.md#height)

#### Defined in

[src/ui/packages/display/src/UI.ts:102](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/display/src/UI.ts#L102)

___

### scaleX

• `Optional` **scaleX**: `number`

#### Implementation of

[IPath](../interfaces/IPath.md).[scaleX](../interfaces/IPath.md#scalex)

#### Inherited from

[UI](UI.md).[scaleX](UI.md#scalex)

#### Defined in

[src/ui/packages/display/src/UI.ts:106](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/display/src/UI.ts#L106)

___

### scaleY

• `Optional` **scaleY**: `number`

#### Implementation of

[IPath](../interfaces/IPath.md).[scaleY](../interfaces/IPath.md#scaley)

#### Inherited from

[UI](UI.md).[scaleY](UI.md#scaley)

#### Defined in

[src/ui/packages/display/src/UI.ts:109](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/display/src/UI.ts#L109)

___

### scaleFixed

• `Optional` **scaleFixed**: [`IScaleFixed`](../modules.md#iscalefixed)

#### Implementation of

[IPath](../interfaces/IPath.md).[scaleFixed](../interfaces/IPath.md#scalefixed)

#### Inherited from

[UI](UI.md).[scaleFixed](UI.md#scalefixed)

#### Defined in

[src/ui/packages/display/src/UI.ts:112](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/display/src/UI.ts#L112)

___

### rotation

• `Optional` **rotation**: `number`

#### Implementation of

[IPath](../interfaces/IPath.md).[rotation](../interfaces/IPath.md#rotation)

#### Inherited from

[UI](UI.md).[rotation](UI.md#rotation)

#### Defined in

[src/ui/packages/display/src/UI.ts:116](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/display/src/UI.ts#L116)

___

### skewX

• `Optional` **skewX**: `number`

#### Implementation of

[IPath](../interfaces/IPath.md).[skewX](../interfaces/IPath.md#skewx)

#### Inherited from

[UI](UI.md).[skewX](UI.md#skewx)

#### Defined in

[src/ui/packages/display/src/UI.ts:120](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/display/src/UI.ts#L120)

___

### skewY

• `Optional` **skewY**: `number`

#### Implementation of

[IPath](../interfaces/IPath.md).[skewY](../interfaces/IPath.md#skewy)

#### Inherited from

[UI](UI.md).[skewY](UI.md#skewy)

#### Defined in

[src/ui/packages/display/src/UI.ts:123](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/display/src/UI.ts#L123)

___

### offsetX

• `Optional` **offsetX**: `number`

#### Implementation of

[IPath](../interfaces/IPath.md).[offsetX](../interfaces/IPath.md#offsetx)

#### Inherited from

[UI](UI.md).[offsetX](UI.md#offsetx)

#### Defined in

[src/ui/packages/display/src/UI.ts:128](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/display/src/UI.ts#L128)

___

### offsetY

• `Optional` **offsetY**: `number`

#### Implementation of

[IPath](../interfaces/IPath.md).[offsetY](../interfaces/IPath.md#offsety)

#### Inherited from

[UI](UI.md).[offsetY](UI.md#offsety)

#### Defined in

[src/ui/packages/display/src/UI.ts:131](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/display/src/UI.ts#L131)

___

### scrollX

• `Optional` **scrollX**: `number`

#### Implementation of

[IPath](../interfaces/IPath.md).[scrollX](../interfaces/IPath.md#scrollx)

#### Inherited from

[UI](UI.md).[scrollX](UI.md#scrollx)

#### Defined in

[src/ui/packages/display/src/UI.ts:135](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/display/src/UI.ts#L135)

___

### scrollY

• `Optional` **scrollY**: `number`

#### Implementation of

[IPath](../interfaces/IPath.md).[scrollY](../interfaces/IPath.md#scrolly)

#### Inherited from

[UI](UI.md).[scrollY](UI.md#scrolly)

#### Defined in

[src/ui/packages/display/src/UI.ts:138](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/display/src/UI.ts#L138)

___

### origin

• `Optional` **origin**: [`IUnitPointData`](../interfaces/IUnitPointData.md) \| [`IDirection`](../modules.md#idirection)

#### Implementation of

[IPath](../interfaces/IPath.md).[origin](../interfaces/IPath.md#origin)

#### Inherited from

[UI](UI.md).[origin](UI.md#origin)

#### Defined in

[src/ui/packages/display/src/UI.ts:143](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/display/src/UI.ts#L143)

___

### around

• `Optional` **around**: [`IUnitPointData`](../interfaces/IUnitPointData.md) \| [`IDirection`](../modules.md#idirection)

#### Implementation of

[IPath](../interfaces/IPath.md).[around](../interfaces/IPath.md#around)

#### Inherited from

[UI](UI.md).[around](UI.md#around)

#### Defined in

[src/ui/packages/display/src/UI.ts:146](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/display/src/UI.ts#L146)

___

### lazy

• `Optional` **lazy**: `boolean`

#### Implementation of

[IPath](../interfaces/IPath.md).[lazy](../interfaces/IPath.md#lazy)

#### Inherited from

[UI](UI.md).[lazy](UI.md#lazy)

#### Defined in

[src/ui/packages/display/src/UI.ts:151](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/display/src/UI.ts#L151)

___

### pixelRatio

• `Optional` **pixelRatio**: `number`

#### Implementation of

[IPath](../interfaces/IPath.md).[pixelRatio](../interfaces/IPath.md#pixelratio)

#### Inherited from

[UI](UI.md).[pixelRatio](UI.md#pixelratio)

#### Defined in

[src/ui/packages/display/src/UI.ts:154](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/display/src/UI.ts#L154)

___

### renderSpread

• `Optional` **renderSpread**: [`IFourNumber`](../modules.md#ifournumber)

#### Implementation of

[IPath](../interfaces/IPath.md).[renderSpread](../interfaces/IPath.md#renderspread)

#### Inherited from

[UI](UI.md).[renderSpread](UI.md#renderspread)

#### Defined in

[src/ui/packages/display/src/UI.ts:158](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/display/src/UI.ts#L158)

___

### path

• `Optional` **path**: `string` \| [`IPathCommandData`](../modules.md#ipathcommanddata) \| [`IPathCommandNode`](../modules.md#ipathcommandnode)[] \| [`IPathCommandObject`](../modules.md#ipathcommandobject)[]

#### Implementation of

[IPath](../interfaces/IPath.md).[path](../interfaces/IPath.md#path)

#### Inherited from

[UI](UI.md).[path](UI.md#path)

#### Defined in

[src/ui/packages/display/src/UI.ts:163](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/display/src/UI.ts#L163)

___

### windingRule

• `Optional` **windingRule**: [`IWindingRule`](../modules.md#iwindingrule)

#### Implementation of

[IPath](../interfaces/IPath.md).[windingRule](../interfaces/IPath.md#windingrule)

#### Inherited from

[UI](UI.md).[windingRule](UI.md#windingrule)

#### Defined in

[src/ui/packages/display/src/UI.ts:166](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/display/src/UI.ts#L166)

___

### closed

• `Optional` **closed**: `boolean`

#### Implementation of

[IPath](../interfaces/IPath.md).[closed](../interfaces/IPath.md#closed)

#### Inherited from

[UI](UI.md).[closed](UI.md#closed)

#### Defined in

[src/ui/packages/display/src/UI.ts:169](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/display/src/UI.ts#L169)

___

### flow

• `Optional` **flow**: [`IFlowType`](../modules.md#iflowtype)

#### Implementation of

[IPath](../interfaces/IPath.md).[flow](../interfaces/IPath.md#flow)

#### Inherited from

[UI](UI.md).[flow](UI.md#flow)

#### Defined in

[src/ui/packages/display/src/UI.ts:173](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/display/src/UI.ts#L173)

___

### padding

• `Optional` **padding**: [`IFourNumber`](../modules.md#ifournumber)

#### Implementation of

[IPath](../interfaces/IPath.md).[padding](../interfaces/IPath.md#padding)

#### Inherited from

[UI](UI.md).[padding](UI.md#padding)

#### Defined in

[src/ui/packages/display/src/UI.ts:176](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/display/src/UI.ts#L176)

___

### gap

• `Optional` **gap**: [`IGap`](../modules.md#igap) \| [`IPointGap`](../interfaces/IPointGap.md)

#### Implementation of

[IPath](../interfaces/IPath.md).[gap](../interfaces/IPath.md#gap)

#### Inherited from

[UI](UI.md).[gap](UI.md#gap)

#### Defined in

[src/ui/packages/display/src/UI.ts:178](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/display/src/UI.ts#L178)

___

### flowAlign

• `Optional` **flowAlign**: [`IFlowAxisAlign`](../interfaces/IFlowAxisAlign.md) \| [`IFlowAlign`](../modules.md#iflowalign)

#### Implementation of

[IPath](../interfaces/IPath.md).[flowAlign](../interfaces/IPath.md#flowalign)

#### Inherited from

[UI](UI.md).[flowAlign](UI.md#flowalign)

#### Defined in

[src/ui/packages/display/src/UI.ts:180](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/display/src/UI.ts#L180)

___

### flowWrap

• `Optional` **flowWrap**: [`IFlowWrap`](../modules.md#iflowwrap)

#### Implementation of

[IPath](../interfaces/IPath.md).[flowWrap](../interfaces/IPath.md#flowwrap)

#### Inherited from

[UI](UI.md).[flowWrap](UI.md#flowwrap)

#### Defined in

[src/ui/packages/display/src/UI.ts:182](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/display/src/UI.ts#L182)

___

### itemBox

• `Optional` **itemBox**: [`IFlowBoxType`](../modules.md#iflowboxtype)

#### Implementation of

[IPath](../interfaces/IPath.md).[itemBox](../interfaces/IPath.md#itembox)

#### Inherited from

[UI](UI.md).[itemBox](UI.md#itembox)

#### Defined in

[src/ui/packages/display/src/UI.ts:185](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/display/src/UI.ts#L185)

___

### inFlow

• `Optional` **inFlow**: `boolean`

#### Implementation of

[IPath](../interfaces/IPath.md).[inFlow](../interfaces/IPath.md#inflow)

#### Inherited from

[UI](UI.md).[inFlow](UI.md#inflow)

#### Defined in

[src/ui/packages/display/src/UI.ts:187](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/display/src/UI.ts#L187)

___

### autoWidth

• `Optional` **autoWidth**: [`IAutoSize`](../modules.md#iautosize)

#### Implementation of

[IPath](../interfaces/IPath.md).[autoWidth](../interfaces/IPath.md#autowidth)

#### Inherited from

[UI](UI.md).[autoWidth](UI.md#autowidth)

#### Defined in

[src/ui/packages/display/src/UI.ts:190](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/display/src/UI.ts#L190)

___

### autoHeight

• `Optional` **autoHeight**: [`IAutoSize`](../modules.md#iautosize)

#### Implementation of

[IPath](../interfaces/IPath.md).[autoHeight](../interfaces/IPath.md#autoheight)

#### Inherited from

[UI](UI.md).[autoHeight](UI.md#autoheight)

#### Defined in

[src/ui/packages/display/src/UI.ts:192](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/display/src/UI.ts#L192)

___

### lockRatio

• `Optional` **lockRatio**: `boolean`

#### Implementation of

[IPath](../interfaces/IPath.md).[lockRatio](../interfaces/IPath.md#lockratio)

#### Inherited from

[UI](UI.md).[lockRatio](UI.md#lockratio)

#### Defined in

[src/ui/packages/display/src/UI.ts:195](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/display/src/UI.ts#L195)

___

### autoBox

• `Optional` **autoBox**: [`IAutoBoxData`](../interfaces/IAutoBoxData.md) \| [`IConstraint`](../interfaces/IConstraint.md)

#### Implementation of

[IPath](../interfaces/IPath.md).[autoBox](../interfaces/IPath.md#autobox)

#### Inherited from

[UI](UI.md).[autoBox](UI.md#autobox)

#### Defined in

[src/ui/packages/display/src/UI.ts:197](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/display/src/UI.ts#L197)

___

### widthRange

• `Optional` **widthRange**: [`IRangeSize`](../interfaces/IRangeSize.md)

#### Implementation of

[IPath](../interfaces/IPath.md).[widthRange](../interfaces/IPath.md#widthrange)

#### Inherited from

[UI](UI.md).[widthRange](UI.md#widthrange)

#### Defined in

[src/ui/packages/display/src/UI.ts:200](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/display/src/UI.ts#L200)

___

### heightRange

• `Optional` **heightRange**: [`IRangeSize`](../interfaces/IRangeSize.md)

#### Implementation of

[IPath](../interfaces/IPath.md).[heightRange](../interfaces/IPath.md#heightrange)

#### Inherited from

[UI](UI.md).[heightRange](UI.md#heightrange)

#### Defined in

[src/ui/packages/display/src/UI.ts:203](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/display/src/UI.ts#L203)

___

### draggable

• `Optional` **draggable**: `boolean` \| [`IAxis`](../modules.md#iaxis)

#### Implementation of

[IPath](../interfaces/IPath.md).[draggable](../interfaces/IPath.md#draggable)

#### Inherited from

[UI](UI.md).[draggable](UI.md#draggable)

#### Defined in

[src/ui/packages/display/src/UI.ts:208](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/display/src/UI.ts#L208)

___

### dragBounds

• `Optional` **dragBounds**: `"parent"` \| [`IBoundsData`](../interfaces/IBoundsData.md)

#### Implementation of

[IPath](../interfaces/IPath.md).[dragBounds](../interfaces/IPath.md#dragbounds)

#### Inherited from

[UI](UI.md).[dragBounds](UI.md#dragbounds)

#### Defined in

[src/ui/packages/display/src/UI.ts:211](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/display/src/UI.ts#L211)

___

### dragBoundsType

• `Optional` **dragBoundsType**: [`IDragBoundsType`](../modules.md#idragboundstype)

#### Implementation of

[IPath](../interfaces/IPath.md).[dragBoundsType](../interfaces/IPath.md#dragboundstype)

#### Inherited from

[UI](UI.md).[dragBoundsType](UI.md#dragboundstype)

#### Defined in

[src/ui/packages/display/src/UI.ts:214](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/display/src/UI.ts#L214)

___

### editable

• `Optional` **editable**: `boolean`

#### Implementation of

[IPath](../interfaces/IPath.md).[editable](../interfaces/IPath.md#editable)

#### Inherited from

[UI](UI.md).[editable](UI.md#editable)

#### Defined in

[src/ui/packages/display/src/UI.ts:218](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/display/src/UI.ts#L218)

___

### hittable

• `Optional` **hittable**: `boolean`

#### Implementation of

[IPath](../interfaces/IPath.md).[hittable](../interfaces/IPath.md#hittable)

#### Inherited from

[UI](UI.md).[hittable](UI.md#hittable)

#### Defined in

[src/ui/packages/display/src/UI.ts:223](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/display/src/UI.ts#L223)

___

### hitFill

• `Optional` **hitFill**: [`IHitType`](../modules.md#ihittype)

#### Implementation of

[IPath](../interfaces/IPath.md).[hitFill](../interfaces/IPath.md#hitfill)

#### Inherited from

[UI](UI.md).[hitFill](UI.md#hitfill)

#### Defined in

[src/ui/packages/display/src/UI.ts:226](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/display/src/UI.ts#L226)

___

### hitStroke

• `Optional` **hitStroke**: [`IHitType`](../modules.md#ihittype)

#### Implementation of

[IPath](../interfaces/IPath.md).[hitStroke](../interfaces/IPath.md#hitstroke)

#### Inherited from

[UI](UI.md).[hitStroke](UI.md#hitstroke)

#### Defined in

[src/ui/packages/display/src/UI.ts:229](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/display/src/UI.ts#L229)

___

### hitBox

• `Optional` **hitBox**: `boolean`

#### Implementation of

[IPath](../interfaces/IPath.md).[hitBox](../interfaces/IPath.md#hitbox)

#### Inherited from

[UI](UI.md).[hitBox](UI.md#hitbox)

#### Defined in

[src/ui/packages/display/src/UI.ts:232](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/display/src/UI.ts#L232)

___

### hitChildren

• `Optional` **hitChildren**: `boolean`

#### Implementation of

[IPath](../interfaces/IPath.md).[hitChildren](../interfaces/IPath.md#hitchildren)

#### Inherited from

[UI](UI.md).[hitChildren](UI.md#hitchildren)

#### Defined in

[src/ui/packages/display/src/UI.ts:235](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/display/src/UI.ts#L235)

___

### hitSelf

• `Optional` **hitSelf**: `boolean`

#### Implementation of

[IPath](../interfaces/IPath.md).[hitSelf](../interfaces/IPath.md#hitself)

#### Inherited from

[UI](UI.md).[hitSelf](UI.md#hitself)

#### Defined in

[src/ui/packages/display/src/UI.ts:238](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/display/src/UI.ts#L238)

___

### hitRadius

• `Optional` **hitRadius**: `number`

#### Implementation of

[IPath](../interfaces/IPath.md).[hitRadius](../interfaces/IPath.md#hitradius)

#### Inherited from

[UI](UI.md).[hitRadius](UI.md#hitradius)

#### Defined in

[src/ui/packages/display/src/UI.ts:241](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/display/src/UI.ts#L241)

___

### cursor

• `Optional` **cursor**: [`ICursorType`](../modules.md#icursortype) \| [`ICursorType`](../modules.md#icursortype)[]

#### Implementation of

[IPath](../interfaces/IPath.md).[cursor](../interfaces/IPath.md#cursor)

#### Inherited from

[UI](UI.md).[cursor](UI.md#cursor)

#### Defined in

[src/ui/packages/display/src/UI.ts:244](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/display/src/UI.ts#L244)

___

### fill

• `Optional` **fill**: [`IFill`](../modules.md#ifill)

#### Implementation of

[IPath](../interfaces/IPath.md).[fill](../interfaces/IPath.md#fill)

#### Inherited from

[UI](UI.md).[fill](UI.md#fill)

#### Defined in

[src/ui/packages/display/src/UI.ts:252](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/display/src/UI.ts#L252)

___

### stroke

• `Optional` **stroke**: [`IStroke`](../modules.md#istroke)

#### Implementation of

[IPath](../interfaces/IPath.md).[stroke](../interfaces/IPath.md#stroke)

#### Inherited from

[UI](UI.md).[stroke](UI.md#stroke)

#### Defined in

[src/ui/packages/display/src/UI.ts:257](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/display/src/UI.ts#L257)

___

### strokeWidth

• `Optional` **strokeWidth**: `string` \| [`IFourNumber`](../modules.md#ifournumber)

#### Implementation of

[IPath](../interfaces/IPath.md).[strokeWidth](../interfaces/IPath.md#strokewidth)

#### Inherited from

[UI](UI.md).[strokeWidth](UI.md#strokewidth)

#### Defined in

[src/ui/packages/display/src/UI.ts:263](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/display/src/UI.ts#L263)

___

### strokeScaleFixed

• `Optional` **strokeScaleFixed**: [`IScaleFixed`](../modules.md#iscalefixed)

#### Implementation of

[IPath](../interfaces/IPath.md).[strokeScaleFixed](../interfaces/IPath.md#strokescalefixed)

#### Inherited from

[UI](UI.md).[strokeScaleFixed](UI.md#strokescalefixed)

#### Defined in

[src/ui/packages/display/src/UI.ts:266](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/display/src/UI.ts#L266)

___

### strokeCap

• `Optional` **strokeCap**: [`IStrokeCap`](../modules.md#istrokecap)

#### Implementation of

[IPath](../interfaces/IPath.md).[strokeCap](../interfaces/IPath.md#strokecap)

#### Inherited from

[UI](UI.md).[strokeCap](UI.md#strokecap)

#### Defined in

[src/ui/packages/display/src/UI.ts:273](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/display/src/UI.ts#L273)

___

### strokeJoin

• `Optional` **strokeJoin**: [`IStrokeJoin`](../modules.md#istrokejoin)

#### Implementation of

[IPath](../interfaces/IPath.md).[strokeJoin](../interfaces/IPath.md#strokejoin)

#### Inherited from

[UI](UI.md).[strokeJoin](UI.md#strokejoin)

#### Defined in

[src/ui/packages/display/src/UI.ts:276](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/display/src/UI.ts#L276)

___

### dashPattern

• `Optional` **dashPattern**: `string` \| `number`[]

#### Implementation of

[IPath](../interfaces/IPath.md).[dashPattern](../interfaces/IPath.md#dashpattern)

#### Inherited from

[UI](UI.md).[dashPattern](UI.md#dashpattern)

#### Defined in

[src/ui/packages/display/src/UI.ts:279](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/display/src/UI.ts#L279)

___

### dashOffset

• `Optional` **dashOffset**: `number`

#### Implementation of

[IPath](../interfaces/IPath.md).[dashOffset](../interfaces/IPath.md#dashoffset)

#### Inherited from

[UI](UI.md).[dashOffset](UI.md#dashoffset)

#### Defined in

[src/ui/packages/display/src/UI.ts:282](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/display/src/UI.ts#L282)

___

### miterLimit

• `Optional` **miterLimit**: `number`

#### Implementation of

[IPath](../interfaces/IPath.md).[miterLimit](../interfaces/IPath.md#miterlimit)

#### Inherited from

[UI](UI.md).[miterLimit](UI.md#miterlimit)

#### Defined in

[src/ui/packages/display/src/UI.ts:285](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/display/src/UI.ts#L285)

___

### startArrow

• `Optional` **startArrow**: [`IArrowStyle`](../modules.md#iarrowstyle)

#### Implementation of

[IPath](../interfaces/IPath.md).[startArrow](../interfaces/IPath.md#startarrow)

#### Inherited from

[UI](UI.md).[startArrow](UI.md#startarrow)

#### Defined in

[src/ui/packages/display/src/UI.ts:290](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/display/src/UI.ts#L290)

___

### endArrow

• `Optional` **endArrow**: [`IArrowStyle`](../modules.md#iarrowstyle)

#### Implementation of

[IPath](../interfaces/IPath.md).[endArrow](../interfaces/IPath.md#endarrow)

#### Inherited from

[UI](UI.md).[endArrow](UI.md#endarrow)

#### Defined in

[src/ui/packages/display/src/UI.ts:292](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/display/src/UI.ts#L292)

___

### cornerRadius

• `Optional` **cornerRadius**: `string` \| [`IFourNumber`](../modules.md#ifournumber)

#### Implementation of

[IPath](../interfaces/IPath.md).[cornerRadius](../interfaces/IPath.md#cornerradius)

#### Inherited from

[UI](UI.md).[cornerRadius](UI.md#cornerradius)

#### Defined in

[src/ui/packages/display/src/UI.ts:297](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/display/src/UI.ts#L297)

___

### cornerSmoothing

• `Optional` **cornerSmoothing**: `number`

#### Implementation of

[IPath](../interfaces/IPath.md).[cornerSmoothing](../interfaces/IPath.md#cornersmoothing)

#### Inherited from

[UI](UI.md).[cornerSmoothing](UI.md#cornersmoothing)

#### Defined in

[src/ui/packages/display/src/UI.ts:300](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/display/src/UI.ts#L300)

___

### shadow

• `Optional` **shadow**: `string` \| [`IShadowEffect`](../interfaces/IShadowEffect.md) \| [`IShadowEffect`](../interfaces/IShadowEffect.md)[]

#### Implementation of

[IPath](../interfaces/IPath.md).[shadow](../interfaces/IPath.md#shadow)

#### Inherited from

[UI](UI.md).[shadow](UI.md#shadow)

#### Defined in

[src/ui/packages/display/src/UI.ts:305](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/display/src/UI.ts#L305)

___

### innerShadow

• `Optional` **innerShadow**: `string` \| [`IShadowEffect`](../interfaces/IShadowEffect.md) \| [`IShadowEffect`](../interfaces/IShadowEffect.md)[]

#### Implementation of

[IPath](../interfaces/IPath.md).[innerShadow](../interfaces/IPath.md#innershadow)

#### Inherited from

[UI](UI.md).[innerShadow](UI.md#innershadow)

#### Defined in

[src/ui/packages/display/src/UI.ts:308](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/display/src/UI.ts#L308)

___

### blur

• `Optional` **blur**: `number` \| [`IBlurEffect`](../interfaces/IBlurEffect.md)

#### Implementation of

[IPath](../interfaces/IPath.md).[blur](../interfaces/IPath.md#blur)

#### Inherited from

[UI](UI.md).[blur](UI.md#blur)

#### Defined in

[src/ui/packages/display/src/UI.ts:311](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/display/src/UI.ts#L311)

___

### backgroundBlur

• `Optional` **backgroundBlur**: `number` \| [`IBlurEffect`](../interfaces/IBlurEffect.md)

#### Implementation of

[IPath](../interfaces/IPath.md).[backgroundBlur](../interfaces/IPath.md#backgroundblur)

#### Inherited from

[UI](UI.md).[backgroundBlur](UI.md#backgroundblur)

#### Defined in

[src/ui/packages/display/src/UI.ts:314](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/display/src/UI.ts#L314)

___

### grayscale

• `Optional` **grayscale**: `number` \| [`IGrayscaleEffect`](../interfaces/IGrayscaleEffect.md)

#### Implementation of

[IPath](../interfaces/IPath.md).[grayscale](../interfaces/IPath.md#grayscale)

#### Inherited from

[UI](UI.md).[grayscale](UI.md#grayscale)

#### Defined in

[src/ui/packages/display/src/UI.ts:317](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/display/src/UI.ts#L317)

___

### filter

• `Optional` **filter**: [`IFilter`](../interfaces/IFilter.md) \| [`IFilter`](../interfaces/IFilter.md)[]

#### Implementation of

[IPath](../interfaces/IPath.md).[filter](../interfaces/IPath.md#filter)

#### Inherited from

[UI](UI.md).[filter](UI.md#filter)

#### Defined in

[src/ui/packages/display/src/UI.ts:320](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/display/src/UI.ts#L320)

___

### complex

• `Optional` **complex**: `boolean`

#### Implementation of

[IPath](../interfaces/IPath.md).[complex](../interfaces/IPath.md#complex)

#### Inherited from

[UI](UI.md).[complex](UI.md#complex)

#### Defined in

[src/ui/packages/display/src/UI.ts:325](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/display/src/UI.ts#L325)

___

### animation

• `Optional` **animation**: [`IAnimation`](../modules.md#ianimation) \| [`IAnimation`](../modules.md#ianimation)[]

#### Implementation of

[IPath](../interfaces/IPath.md).[animation](../interfaces/IPath.md#animation)

#### Inherited from

[UI](UI.md).[animation](UI.md#animation)

#### Defined in

[src/ui/packages/display/src/UI.ts:330](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/display/src/UI.ts#L330)

___

### animationOut

• `Optional` **animationOut**: [`IAnimation`](../modules.md#ianimation) \| [`IAnimation`](../modules.md#ianimation)[]

#### Implementation of

[IPath](../interfaces/IPath.md).[animationOut](../interfaces/IPath.md#animationout)

#### Inherited from

[UI](UI.md).[animationOut](UI.md#animationout)

#### Defined in

[src/ui/packages/display/src/UI.ts:332](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/display/src/UI.ts#L332)

___

### transition

• `Optional` **transition**: [`ITransition`](../modules.md#itransition)

#### Implementation of

[IPath](../interfaces/IPath.md).[transition](../interfaces/IPath.md#transition)

#### Inherited from

[UI](UI.md).[transition](UI.md#transition)

#### Defined in

[src/ui/packages/display/src/UI.ts:335](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/display/src/UI.ts#L335)

___

### transitionOut

• `Optional` **transitionOut**: [`ITransition`](../modules.md#itransition)

#### Implementation of

[IPath](../interfaces/IPath.md).[transitionOut](../interfaces/IPath.md#transitionout)

#### Inherited from

[UI](UI.md).[transitionOut](UI.md#transitionout)

#### Defined in

[src/ui/packages/display/src/UI.ts:337](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/display/src/UI.ts#L337)

___

### motionPath

• `Optional` **motionPath**: `boolean`

#### Implementation of

[IPath](../interfaces/IPath.md).[motionPath](../interfaces/IPath.md#motionpath)

#### Inherited from

[UI](UI.md).[motionPath](UI.md#motionpath)

#### Defined in

[src/ui/packages/display/src/UI.ts:342](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/display/src/UI.ts#L342)

___

### motionPrecision

• `Optional` **motionPrecision**: `number`

#### Implementation of

[IPath](../interfaces/IPath.md).[motionPrecision](../interfaces/IPath.md#motionprecision)

#### Inherited from

[UI](UI.md).[motionPrecision](UI.md#motionprecision)

#### Defined in

[src/ui/packages/display/src/UI.ts:344](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/display/src/UI.ts#L344)

___

### motion

• `Optional` **motion**: `number` \| [`IUnitData`](../interfaces/IUnitData.md)

#### Implementation of

[IPath](../interfaces/IPath.md).[motion](../interfaces/IPath.md#motion)

#### Inherited from

[UI](UI.md).[motion](UI.md#motion)

#### Defined in

[src/ui/packages/display/src/UI.ts:347](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/display/src/UI.ts#L347)

___

### motionRotation

• `Optional` **motionRotation**: `number` \| `boolean`

#### Implementation of

[IPath](../interfaces/IPath.md).[motionRotation](../interfaces/IPath.md#motionrotation)

#### Inherited from

[UI](UI.md).[motionRotation](UI.md#motionrotation)

#### Defined in

[src/ui/packages/display/src/UI.ts:349](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/display/src/UI.ts#L349)

___

### states

• `Optional` **states**: [`IStates`](../interfaces/IStates.md)

#### Implementation of

[IPath](../interfaces/IPath.md).[states](../interfaces/IPath.md#states)

#### Inherited from

[UI](UI.md).[states](UI.md#states)

#### Defined in

[src/ui/packages/display/src/UI.ts:354](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/display/src/UI.ts#L354)

___

### state

• `Optional` **state**: `string`

#### Implementation of

[IPath](../interfaces/IPath.md).[state](../interfaces/IPath.md#state)

#### Inherited from

[UI](UI.md).[state](UI.md#state)

#### Defined in

[src/ui/packages/display/src/UI.ts:356](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/display/src/UI.ts#L356)

___

### selected

• `Optional` **selected**: `boolean`

#### Implementation of

[IPath](../interfaces/IPath.md).[selected](../interfaces/IPath.md#selected)

#### Inherited from

[UI](UI.md).[selected](UI.md#selected)

#### Defined in

[src/ui/packages/display/src/UI.ts:359](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/display/src/UI.ts#L359)

___

### disabled

• `Optional` **disabled**: `boolean`

#### Implementation of

[IPath](../interfaces/IPath.md).[disabled](../interfaces/IPath.md#disabled)

#### Inherited from

[UI](UI.md).[disabled](UI.md#disabled)

#### Defined in

[src/ui/packages/display/src/UI.ts:361](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/display/src/UI.ts#L361)

___

### normalStyle

• `Optional` **normalStyle**: [`IStateStyle`](../interfaces/IStateStyle.md)

#### Implementation of

[IPath](../interfaces/IPath.md).[normalStyle](../interfaces/IPath.md#normalstyle)

#### Inherited from

[UI](UI.md).[normalStyle](UI.md#normalstyle)

#### Defined in

[src/ui/packages/display/src/UI.ts:364](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/display/src/UI.ts#L364)

___

### hoverStyle

• `Optional` **hoverStyle**: [`IStateStyle`](../interfaces/IStateStyle.md)

#### Implementation of

[IPath](../interfaces/IPath.md).[hoverStyle](../interfaces/IPath.md#hoverstyle)

#### Inherited from

[UI](UI.md).[hoverStyle](UI.md#hoverstyle)

#### Defined in

[src/ui/packages/display/src/UI.ts:366](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/display/src/UI.ts#L366)

___

### pressStyle

• `Optional` **pressStyle**: [`IStateStyle`](../interfaces/IStateStyle.md)

#### Implementation of

[IPath](../interfaces/IPath.md).[pressStyle](../interfaces/IPath.md#pressstyle)

#### Inherited from

[UI](UI.md).[pressStyle](UI.md#pressstyle)

#### Defined in

[src/ui/packages/display/src/UI.ts:368](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/display/src/UI.ts#L368)

___

### focusStyle

• `Optional` **focusStyle**: [`IStateStyle`](../interfaces/IStateStyle.md)

#### Implementation of

[IPath](../interfaces/IPath.md).[focusStyle](../interfaces/IPath.md#focusstyle)

#### Inherited from

[UI](UI.md).[focusStyle](UI.md#focusstyle)

#### Defined in

[src/ui/packages/display/src/UI.ts:370](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/display/src/UI.ts#L370)

___

### selectedStyle

• `Optional` **selectedStyle**: [`IStateStyle`](../interfaces/IStateStyle.md)

#### Implementation of

[IPath](../interfaces/IPath.md).[selectedStyle](../interfaces/IPath.md#selectedstyle)

#### Inherited from

[UI](UI.md).[selectedStyle](UI.md#selectedstyle)

#### Defined in

[src/ui/packages/display/src/UI.ts:372](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/display/src/UI.ts#L372)

___

### disabledStyle

• `Optional` **disabledStyle**: [`IStateStyle`](../interfaces/IStateStyle.md)

#### Implementation of

[IPath](../interfaces/IPath.md).[disabledStyle](../interfaces/IPath.md#disabledstyle)

#### Inherited from

[UI](UI.md).[disabledStyle](UI.md#disabledstyle)

#### Defined in

[src/ui/packages/display/src/UI.ts:374](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/display/src/UI.ts#L374)

___

### placeholderStyle

• `Optional` **placeholderStyle**: [`IStateStyle`](../interfaces/IStateStyle.md)

#### Implementation of

[IPath](../interfaces/IPath.md).[placeholderStyle](../interfaces/IPath.md#placeholderstyle)

#### Inherited from

[UI](UI.md).[placeholderStyle](UI.md#placeholderstyle)

#### Defined in

[src/ui/packages/display/src/UI.ts:377](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/display/src/UI.ts#L377)

___

### placeholderColor

• `Optional` **placeholderColor**: `string`

#### Implementation of

[IPath](../interfaces/IPath.md).[placeholderColor](../interfaces/IPath.md#placeholdercolor)

#### Inherited from

[UI](UI.md).[placeholderColor](UI.md#placeholdercolor)

#### Defined in

[src/ui/packages/display/src/UI.ts:380](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/display/src/UI.ts#L380)

___

### placeholderDelay

• `Optional` **placeholderDelay**: `number`

#### Implementation of

[IPath](../interfaces/IPath.md).[placeholderDelay](../interfaces/IPath.md#placeholderdelay)

#### Inherited from

[UI](UI.md).[placeholderDelay](UI.md#placeholderdelay)

#### Defined in

[src/ui/packages/display/src/UI.ts:383](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/display/src/UI.ts#L383)

___

### button

• `Optional` **button**: `boolean`

#### Implementation of

[IPath](../interfaces/IPath.md).[button](../interfaces/IPath.md#button)

#### Inherited from

[UI](UI.md).[button](UI.md#button)

#### Defined in

[src/ui/packages/display/src/UI.ts:386](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/display/src/UI.ts#L386)

___

### editConfig

• **editConfig**: [`IEditorConfig`](../interfaces/IEditorConfig.md)

#### Implementation of

[IPath](../interfaces/IPath.md).[editConfig](../interfaces/IPath.md#editconfig)

#### Inherited from

[UI](UI.md).[editConfig](UI.md#editconfig)

#### Defined in

[src/ui/packages/display/src/UI.ts:391](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/display/src/UI.ts#L391)

___

### editOuter

• **editOuter**: `string`

#### Implementation of

[IPath](../interfaces/IPath.md).[editOuter](../interfaces/IPath.md#editouter)

#### Inherited from

[UI](UI.md).[editOuter](UI.md#editouter)

#### Defined in

[src/ui/packages/display/src/UI.ts:393](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/display/src/UI.ts#L393)

___

### editInner

• **editInner**: `string`

#### Implementation of

[IPath](../interfaces/IPath.md).[editInner](../interfaces/IPath.md#editinner)

#### Inherited from

[UI](UI.md).[editInner](UI.md#editinner)

#### Defined in

[src/ui/packages/display/src/UI.ts:395](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/display/src/UI.ts#L395)

___

### data

• **data**: [`IObject`](../interfaces/IObject.md)

#### Implementation of

[IPath](../interfaces/IPath.md).[data](../interfaces/IPath.md#data)

#### Inherited from

[UI](UI.md).[data](UI.md#data)

#### Defined in

[src/ui/packages/display/src/UI.ts:400](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/display/src/UI.ts#L400)

___

### useFastShadow

• `Optional` **useFastShadow**: `boolean`

#### Implementation of

[IPath](../interfaces/IPath.md).[useFastShadow](../interfaces/IPath.md#usefastshadow)

#### Inherited from

[UI](UI.md).[useFastShadow](UI.md#usefastshadow)

#### Defined in

[src/ui/packages/display/src/UI.ts:409](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/display/src/UI.ts#L409)

___

### \_\_box

• `Optional` **\_\_box**: [`IUI`](../interfaces/IUI.md)

#### Implementation of

[IPath](../interfaces/IPath.md).[__box](../interfaces/IPath.md#__box)

#### Inherited from

[UI](UI.md).[__box](UI.md#__box)

#### Defined in

[src/ui/packages/display/src/UI.ts:411](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/display/src/UI.ts#L411)

___

### \_\_animate

• `Optional` **\_\_animate**: [`IAnimate`](../interfaces/IAnimate.md) \| [`IAnimateList`](../interfaces/IAnimateList.md)

#### Implementation of

[IPath](../interfaces/IPath.md).[__animate](../interfaces/IPath.md#__animate)

#### Inherited from

[UI](UI.md).[__animate](UI.md#__animate)

#### Defined in

[src/ui/packages/display/src/UI.ts:412](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/display/src/UI.ts#L412)

## Accessors

### tag

• `get` **tag**(): `string`

#### Returns

`string`

#### Implementation of

[IPath](../interfaces/IPath.md).[tag](../interfaces/IPath.md#tag)

#### Inherited from

UI.tag

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:28](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/display/src/Leaf.ts#L28)

• `set` **tag**(`_value`): `void`

#### Parameters

| Name     | Type     |
| :------- | :------- |
| `_value` | `string` |

#### Returns

`void`

#### Implementation of

[IPath](../interfaces/IPath.md).[tag](../interfaces/IPath.md#tag)

#### Inherited from

UI.tag

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:29](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/display/src/Leaf.ts#L29)

___

### innerName

• `get` **innerName**(): `string`

#### Returns

`string`

#### Implementation of

[IPath](../interfaces/IPath.md).[innerName](../interfaces/IPath.md#innername)

#### Inherited from

UI.innerName

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:34](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/display/src/Leaf.ts#L34)

___

### \_\_DataProcessor

• `get` **__DataProcessor**(): typeof [`LeafData`](LeafData.md)

#### Returns

typeof [`LeafData`](LeafData.md)

#### Implementation of

[IPath](../interfaces/IPath.md).[__DataProcessor](../interfaces/IPath.md#__dataprocessor)

#### Inherited from

UI.\_\_DataProcessor

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:36](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/display/src/Leaf.ts#L36)

___

### \_\_LayoutProcessor

• `get` **__LayoutProcessor**(): typeof [`LeafLayout`](LeafLayout.md)

#### Returns

typeof [`LeafLayout`](LeafLayout.md)

#### Implementation of

[IPath](../interfaces/IPath.md).[__LayoutProcessor](../interfaces/IPath.md#__layoutprocessor)

#### Inherited from

UI.\_\_LayoutProcessor

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:37](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/display/src/Leaf.ts#L37)

___

### leaferIsCreated

• `get` **leaferIsCreated**(): `boolean`

#### Returns

`boolean`

#### Implementation of

[IPath](../interfaces/IPath.md).[leaferIsCreated](../interfaces/IPath.md#leaferiscreated)

#### Inherited from

UI.leaferIsCreated

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:42](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/display/src/Leaf.ts#L42)

___

### leaferIsReady

• `get` **leaferIsReady**(): `boolean`

#### Returns

`boolean`

#### Implementation of

[IPath](../interfaces/IPath.md).[leaferIsReady](../interfaces/IPath.md#leaferisready)

#### Inherited from

UI.leaferIsReady

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:43](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/display/src/Leaf.ts#L43)

___

### isLeafer

• `get` **isLeafer**(): `boolean`

#### Returns

`boolean`

#### Implementation of

[IPath](../interfaces/IPath.md).[isLeafer](../interfaces/IPath.md#isleafer)

#### Inherited from

UI.isLeafer

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:45](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/display/src/Leaf.ts#L45)

___

### isBranch

• `get` **isBranch**(): `boolean`

#### Returns

`boolean`

#### Implementation of

[IPath](../interfaces/IPath.md).[isBranch](../interfaces/IPath.md#isbranch)

#### Inherited from

UI.isBranch

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:46](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/display/src/Leaf.ts#L46)

___

### isBranchLeaf

• `get` **isBranchLeaf**(): `boolean`

#### Returns

`boolean`

#### Implementation of

[IPath](../interfaces/IPath.md).[isBranchLeaf](../interfaces/IPath.md#isbranchleaf)

#### Inherited from

UI.isBranchLeaf

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:47](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/display/src/Leaf.ts#L47)

___

### \_\_localMatrix

• `get` **__localMatrix**(): [`IMatrixData`](../interfaces/IMatrixData.md)

#### Returns

[`IMatrixData`](../interfaces/IMatrixData.md)

#### Implementation of

[IPath](../interfaces/IPath.md).[__localMatrix](../interfaces/IPath.md#__localmatrix)

#### Inherited from

UI.\_\_localMatrix

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:62](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/display/src/Leaf.ts#L62)

___

### \_\_localBoxBounds

• `get` **__localBoxBounds**(): [`IBoundsData`](../interfaces/IBoundsData.md)

#### Returns

[`IBoundsData`](../interfaces/IBoundsData.md)

#### Implementation of

[IPath](../interfaces/IPath.md).[__localBoxBounds](../interfaces/IPath.md#__localboxbounds)

#### Inherited from

UI.\_\_localBoxBounds

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:63](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/display/src/Leaf.ts#L63)

___

### worldTransform

• `get` **worldTransform**(): [`IMatrixWithScaleData`](../interfaces/IMatrixWithScaleData.md)

#### Returns

[`IMatrixWithScaleData`](../interfaces/IMatrixWithScaleData.md)

#### Implementation of

[IPath](../interfaces/IPath.md).[worldTransform](../interfaces/IPath.md#worldtransform)

#### Inherited from

UI.worldTransform

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:68](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/display/src/Leaf.ts#L68)

___

### localTransform

• `get` **localTransform**(): [`IMatrixData`](../interfaces/IMatrixData.md)

#### Returns

[`IMatrixData`](../interfaces/IMatrixData.md)

#### Implementation of

[IPath](../interfaces/IPath.md).[localTransform](../interfaces/IPath.md#localtransform)

#### Inherited from

UI.localTransform

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:69](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/display/src/Leaf.ts#L69)

___

### scrollWorldTransform

• `get` **scrollWorldTransform**(): [`IMatrixWithScaleData`](../interfaces/IMatrixWithScaleData.md)

#### Returns

[`IMatrixWithScaleData`](../interfaces/IMatrixWithScaleData.md)

#### Implementation of

[IPath](../interfaces/IPath.md).[scrollWorldTransform](../interfaces/IPath.md#scrollworldtransform)

#### Inherited from

UI.scrollWorldTransform

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:72](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/display/src/Leaf.ts#L72)

___

### boxBounds

• `get` **boxBounds**(): [`IBoundsData`](../interfaces/IBoundsData.md)

#### Returns

[`IBoundsData`](../interfaces/IBoundsData.md)

#### Implementation of

[IPath](../interfaces/IPath.md).[boxBounds](../interfaces/IPath.md#boxbounds)

#### Inherited from

UI.boxBounds

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:75](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/display/src/Leaf.ts#L75)

___

### renderBounds

• `get` **renderBounds**(): [`IBoundsData`](../interfaces/IBoundsData.md)

#### Returns

[`IBoundsData`](../interfaces/IBoundsData.md)

#### Implementation of

[IPath](../interfaces/IPath.md).[renderBounds](../interfaces/IPath.md#renderbounds)

#### Inherited from

UI.renderBounds

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:76](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/display/src/Leaf.ts#L76)

___

### worldBoxBounds

• `get` **worldBoxBounds**(): [`IBoundsData`](../interfaces/IBoundsData.md)

#### Returns

[`IBoundsData`](../interfaces/IBoundsData.md)

#### Implementation of

[IPath](../interfaces/IPath.md).[worldBoxBounds](../interfaces/IPath.md#worldboxbounds)

#### Inherited from

UI.worldBoxBounds

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:77](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/display/src/Leaf.ts#L77)

___

### worldStrokeBounds

• `get` **worldStrokeBounds**(): [`IBoundsData`](../interfaces/IBoundsData.md)

#### Returns

[`IBoundsData`](../interfaces/IBoundsData.md)

#### Implementation of

[IPath](../interfaces/IPath.md).[worldStrokeBounds](../interfaces/IPath.md#worldstrokebounds)

#### Inherited from

UI.worldStrokeBounds

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:78](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/display/src/Leaf.ts#L78)

___

### worldRenderBounds

• `get` **worldRenderBounds**(): [`IBoundsData`](../interfaces/IBoundsData.md)

#### Returns

[`IBoundsData`](../interfaces/IBoundsData.md)

#### Implementation of

[IPath](../interfaces/IPath.md).[worldRenderBounds](../interfaces/IPath.md#worldrenderbounds)

#### Inherited from

UI.worldRenderBounds

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:79](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/display/src/Leaf.ts#L79)

___

### worldOpacity

• `get` **worldOpacity**(): `number`

#### Returns

`number`

#### Implementation of

[IPath](../interfaces/IPath.md).[worldOpacity](../interfaces/IPath.md#worldopacity)

#### Inherited from

UI.worldOpacity

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:82](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/display/src/Leaf.ts#L82)

___

### \_\_worldFlipped

• `get` **__worldFlipped**(): `boolean`

#### Returns

`boolean`

#### Implementation of

[IPath](../interfaces/IPath.md).[__worldFlipped](../interfaces/IPath.md#__worldflipped)

#### Inherited from

UI.\_\_worldFlipped

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:87](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/display/src/Leaf.ts#L87)

___

### \_\_onlyHitMask

• `get` **__onlyHitMask**(): `boolean`

#### Returns

`boolean`

#### Implementation of

[IPath](../interfaces/IPath.md).[__onlyHitMask](../interfaces/IPath.md#__onlyhitmask)

#### Inherited from

UI.\_\_onlyHitMask

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:94](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/display/src/Leaf.ts#L94)

___

### \_\_ignoreHitWorld

• `get` **__ignoreHitWorld**(): `boolean`

#### Returns

`boolean`

#### Implementation of

[IPath](../interfaces/IPath.md).[__ignoreHitWorld](../interfaces/IPath.md#__ignorehitworld)

#### Inherited from

UI.\_\_ignoreHitWorld

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:95](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/display/src/Leaf.ts#L95)

___

### \_\_inLazyBounds

• `get` **__inLazyBounds**(): `boolean`

#### Returns

`boolean`

#### Implementation of

[IPath](../interfaces/IPath.md).[__inLazyBounds](../interfaces/IPath.md#__inlazybounds)

#### Inherited from

UI.\_\_inLazyBounds

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:96](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/display/src/Leaf.ts#L96)

___

### pathInputed

• `get` **pathInputed**(): `boolean`

#### Returns

`boolean`

#### Implementation of

[IPath](../interfaces/IPath.md).[pathInputed](../interfaces/IPath.md#pathinputed)

#### Inherited from

UI.pathInputed

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:98](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/display/src/Leaf.ts#L98)

___

### event

• `set` **event**(`map`): `void`

#### Parameters

| Name  | Type                                                  |
| :---- | :---------------------------------------------------- |
| `map` | [`IEventParamsMap`](../interfaces/IEventParamsMap.md) |

#### Returns

`void`

#### Implementation of

[IPath](../interfaces/IPath.md).[event](../interfaces/IPath.md#event)

#### Inherited from

UI.event

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:101](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/display/src/Leaf.ts#L101)

___

### \_\_tag

• `get` **__tag**(): `string`

#### Returns

`string`

#### Implementation of

[IPath](../interfaces/IPath.md).[__tag](../interfaces/IPath.md#__tag)

#### Overrides

UI.\_\_tag

#### Defined in

[src/ui/packages/display/src/Path.ts:12](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/display/src/Path.ts#L12)

___

### app

• `get` **app**(): [`ILeafer`](../interfaces/ILeafer.md)

#### Returns

[`ILeafer`](../interfaces/ILeafer.md)

#### Implementation of

[IPath](../interfaces/IPath.md).[app](../interfaces/IPath.md#app)

#### Inherited from

UI.app

#### Defined in

[src/ui/packages/display/src/UI.ts:24](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/display/src/UI.ts#L24)

___

### isFrame

• `get` **isFrame**(): `boolean`

#### Returns

`boolean`

#### Implementation of

[IPath](../interfaces/IPath.md).[isFrame](../interfaces/IPath.md#isframe)

#### Inherited from

UI.isFrame

#### Defined in

[src/ui/packages/display/src/UI.ts:32](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/display/src/UI.ts#L32)

___

### strokeWidthFixed

• `get` **strokeWidthFixed**(): [`IScaleFixed`](../modules.md#iscalefixed)

#### Returns

[`IScaleFixed`](../modules.md#iscalefixed)

#### Inherited from

UI.strokeWidthFixed

#### Defined in

[src/ui/packages/display/src/UI.ts:270](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/display/src/UI.ts#L270)

• `set` **strokeWidthFixed**(`value`): `void`

#### Parameters

| Name    | Type                                       |
| :------ | :----------------------------------------- |
| `value` | [`IScaleFixed`](../modules.md#iscalefixed) |

#### Returns

`void`

#### Inherited from

UI.strokeWidthFixed

#### Defined in

[src/ui/packages/display/src/UI.ts:269](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/display/src/UI.ts#L269)

___

### scale

• `get` **scale**(): `number` \| [`IPointData`](../interfaces/IPointData.md)

#### Returns

`number` \| [`IPointData`](../interfaces/IPointData.md)

#### Implementation of

[IPath](../interfaces/IPath.md).[scale](../interfaces/IPath.md#scale)

#### Inherited from

UI.scale

#### Defined in

[src/ui/packages/display/src/UI.ts:404](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/display/src/UI.ts#L404)

• `set` **scale**(`value`): `void`

#### Parameters

| Name    | Type                                                      |
| :------ | :-------------------------------------------------------- |
| `value` | `number` \\| [`IPointData`](../interfaces/IPointData.md) |

#### Returns

`void`

#### Implementation of

[IPath](../interfaces/IPath.md).[scale](../interfaces/IPath.md#scale)

#### Inherited from

UI.scale

#### Defined in

[src/ui/packages/display/src/UI.ts:403](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/display/src/UI.ts#L403)

___

### isAutoWidth

• `get` **isAutoWidth**(): `boolean`

#### Returns

`boolean`

#### Implementation of

[IPath](../interfaces/IPath.md).[isAutoWidth](../interfaces/IPath.md#isautowidth)

#### Inherited from

UI.isAutoWidth

#### Defined in

[src/ui/packages/display/src/UI.ts:406](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/display/src/UI.ts#L406)

___

### isAutoHeight

• `get` **isAutoHeight**(): `boolean`

#### Returns

`boolean`

#### Implementation of

[IPath](../interfaces/IPath.md).[isAutoHeight](../interfaces/IPath.md#isautoheight)

#### Inherited from

UI.isAutoHeight

#### Defined in

[src/ui/packages/display/src/UI.ts:407](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/display/src/UI.ts#L407)

___

### pen

• `get` **pen**(): [`IPathCreator`](../interfaces/IPathCreator.md)

#### Returns

[`IPathCreator`](../interfaces/IPathCreator.md)

#### Implementation of

[IPath](../interfaces/IPath.md).[pen](../interfaces/IPath.md#pen)

#### Inherited from

UI.pen

#### Defined in

[src/ui/packages/display/src/UI.ts:414](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/display/src/UI.ts#L414)

## Methods

### resetCustom

▸ **resetCustom**(): `void`

#### Returns

`void`

#### Implementation of

[IPath](../interfaces/IPath.md).[resetCustom](../interfaces/IPath.md#resetcustom)

#### Inherited from

[UI](UI.md).[resetCustom](UI.md#resetcustom)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:143](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/display/src/Leaf.ts#L143)

___

### waitParent

▸ **waitParent**(`item`, `bind?`): `void`

#### Parameters

| Name    | Type                                      |
| :------ | :---------------------------------------- |
| `item`  | [`IFunction`](../interfaces/IFunction.md) |
| `bind?` | [`IObject`](../interfaces/IObject.md)     |

#### Returns

`void`

#### Implementation of

[IPath](../interfaces/IPath.md).[waitParent](../interfaces/IPath.md#waitparent)

#### Inherited from

[UI](UI.md).[waitParent](UI.md#waitparent)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:149](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/display/src/Leaf.ts#L149)

___

### waitLeafer

▸ **waitLeafer**(`item`, `bind?`): `void`

#### Parameters

| Name    | Type                                      |
| :------ | :---------------------------------------- |
| `item`  | [`IFunction`](../interfaces/IFunction.md) |
| `bind?` | [`IObject`](../interfaces/IObject.md)     |

#### Returns

`void`

#### Implementation of

[IPath](../interfaces/IPath.md).[waitLeafer](../interfaces/IPath.md#waitleafer)

#### Inherited from

[UI](UI.md).[waitLeafer](UI.md#waitleafer)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:154](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/display/src/Leaf.ts#L154)

___

### nextRender

▸ **nextRender**(`item`, `bind?`, `off?`): `void`

#### Parameters

| Name    | Type                                      |
| :------ | :---------------------------------------- |
| `item`  | [`IFunction`](../interfaces/IFunction.md) |
| `bind?` | [`IObject`](../interfaces/IObject.md)     |
| `off?`  | `"off"`                                   |

#### Returns

`void`

#### Implementation of

[IPath](../interfaces/IPath.md).[nextRender](../interfaces/IPath.md#nextrender)

#### Inherited from

[UI](UI.md).[nextRender](UI.md#nextrender)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:159](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/display/src/Leaf.ts#L159)

___

### removeNextRender

▸ **removeNextRender**(`item`): `void`

#### Parameters

| Name   | Type                                      |
| :----- | :---------------------------------------- |
| `item` | [`IFunction`](../interfaces/IFunction.md) |

#### Returns

`void`

#### Implementation of

[IPath](../interfaces/IPath.md).[removeNextRender](../interfaces/IPath.md#removenextrender)

#### Inherited from

[UI](UI.md).[removeNextRender](UI.md#removenextrender)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:163](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/display/src/Leaf.ts#L163)

___

### \_\_bindLeafer

▸ **__bindLeafer**(`leafer`): `void`

#### Parameters

| Name     | Type                                          |
| :------- | :-------------------------------------------- |
| `leafer` | [`ILeaferBase`](../interfaces/ILeaferBase.md) |

#### Returns

`void`

#### Implementation of

[IPath](../interfaces/IPath.md).[__bindLeafer](../interfaces/IPath.md#__bindleafer)

#### Inherited from

[UI](UI.md).[__bindLeafer](UI.md#__bindleafer)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:167](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/display/src/Leaf.ts#L167)

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

#### Implementation of

[IPath](../interfaces/IPath.md).[setAttr](../interfaces/IPath.md#setattr)

#### Inherited from

[UI](UI.md).[setAttr](UI.md#setattr)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:198](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/display/src/Leaf.ts#L198)

___

### getAttr

▸ **getAttr**(`name`): `any`

#### Parameters

| Name   | Type     |
| :----- | :------- |
| `name` | `string` |

#### Returns

`any`

#### Implementation of

[IPath](../interfaces/IPath.md).[getAttr](../interfaces/IPath.md#getattr)

#### Inherited from

[UI](UI.md).[getAttr](UI.md#getattr)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:199](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/display/src/Leaf.ts#L199)

___

### getComputedAttr

▸ **getComputedAttr**(`name`): `any`

#### Parameters

| Name   | Type     |
| :----- | :------- |
| `name` | `string` |

#### Returns

`any`

#### Implementation of

[IPath](../interfaces/IPath.md).[getComputedAttr](../interfaces/IPath.md#getcomputedattr)

#### Inherited from

[UI](UI.md).[getComputedAttr](UI.md#getcomputedattr)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:201](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/display/src/Leaf.ts#L201)

___

### toJSON

▸ **toJSON**(`options?`): [`IObject`](../interfaces/IObject.md)

#### Parameters

| Name       | Type                                            |
| :--------- | :---------------------------------------------- |
| `options?` | [`IJSONOptions`](../interfaces/IJSONOptions.md) |

#### Returns

[`IObject`](../interfaces/IObject.md)

#### Implementation of

[IPath](../interfaces/IPath.md).[toJSON](../interfaces/IPath.md#tojson)

#### Inherited from

[UI](UI.md).[toJSON](UI.md#tojson)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:203](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/display/src/Leaf.ts#L203)

___

### toString

▸ **toString**(`options?`): `string`

#### Parameters

| Name       | Type                                            |
| :--------- | :---------------------------------------------- |
| `options?` | [`IJSONOptions`](../interfaces/IJSONOptions.md) |

#### Returns

`string`

#### Implementation of

[IPath](../interfaces/IPath.md).[toString](../interfaces/IPath.md#tostring)

#### Inherited from

[UI](UI.md).[toString](UI.md#tostring)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:208](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/display/src/Leaf.ts#L208)

___

### toSVG

▸ **toSVG**(): `string`

#### Returns

`string`

#### Implementation of

[IPath](../interfaces/IPath.md).[toSVG](../interfaces/IPath.md#tosvg)

#### Inherited from

[UI](UI.md).[toSVG](UI.md#tosvg)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:212](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/display/src/Leaf.ts#L212)

___

### \_\_SVG

▸ **__SVG**(`_data`): `void`

#### Parameters

| Name    | Type                                  |
| :------ | :------------------------------------ |
| `_data` | [`IObject`](../interfaces/IObject.md) |

#### Returns

`void`

#### Implementation of

[IPath](../interfaces/IPath.md).[__SVG](../interfaces/IPath.md#__svg)

#### Inherited from

[UI](UI.md).[__SVG](UI.md#__svg)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:214](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/display/src/Leaf.ts#L214)

___

### toHTML

▸ **toHTML**(): `string`

#### Returns

`string`

#### Implementation of

[IPath](../interfaces/IPath.md).[toHTML](../interfaces/IPath.md#tohtml)

#### Inherited from

[UI](UI.md).[toHTML](UI.md#tohtml)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:216](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/display/src/Leaf.ts#L216)

___

### \_\_setAttr

▸ **__setAttr**(`_attrName`, `_newValue`): `boolean`

#### Parameters

| Name        | Type                             |
| :---------- | :------------------------------- |
| `_attrName` | `string`                         |
| `_newValue` | [`IValue`](../modules.md#ivalue) |

#### Returns

`boolean`

#### Implementation of

[IPath](../interfaces/IPath.md).[__setAttr](../interfaces/IPath.md#__setattr)

#### Inherited from

[UI](UI.md).[__setAttr](UI.md#__setattr)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:220](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/display/src/Leaf.ts#L220)

___

### \_\_getAttr

▸ **__getAttr**(`_attrName`): [`IValue`](../modules.md#ivalue)

#### Parameters

| Name        | Type     |
| :---------- | :------- |
| `_attrName` | `string` |

#### Returns

[`IValue`](../modules.md#ivalue)

#### Implementation of

[IPath](../interfaces/IPath.md).[__getAttr](../interfaces/IPath.md#__getattr)

#### Inherited from

[UI](UI.md).[__getAttr](UI.md#__getattr)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:222](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/display/src/Leaf.ts#L222)

___

### setProxyAttr

▸ **setProxyAttr**(`_attrName`, `_newValue`): `void`

#### Parameters

| Name        | Type                             |
| :---------- | :------------------------------- |
| `_attrName` | `string`                         |
| `_newValue` | [`IValue`](../modules.md#ivalue) |

#### Returns

`void`

#### Implementation of

[IPath](../interfaces/IPath.md).[setProxyAttr](../interfaces/IPath.md#setproxyattr)

#### Inherited from

[UI](UI.md).[setProxyAttr](UI.md#setproxyattr)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:224](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/display/src/Leaf.ts#L224)

___

### getProxyAttr

▸ **getProxyAttr**(`_attrName`): [`IValue`](../modules.md#ivalue)

#### Parameters

| Name        | Type     |
| :---------- | :------- |
| `_attrName` | `string` |

#### Returns

[`IValue`](../modules.md#ivalue)

#### Implementation of

[IPath](../interfaces/IPath.md).[getProxyAttr](../interfaces/IPath.md#getproxyattr)

#### Inherited from

[UI](UI.md).[getProxyAttr](UI.md#getproxyattr)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:226](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/display/src/Leaf.ts#L226)

___

### focus

▸ **focus**(`_value?`): `void`

#### Parameters

| Name      | Type      |
| :-------- | :-------- |
| `_value?` | `boolean` |

#### Returns

`void`

#### Implementation of

[IPath](../interfaces/IPath.md).[focus](../interfaces/IPath.md#focus)

#### Inherited from

[UI](UI.md).[focus](UI.md#focus)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:246](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/display/src/Leaf.ts#L246)

___

### updateState

▸ **updateState**(): `void`

#### Returns

`void`

#### Implementation of

[IPath](../interfaces/IPath.md).[updateState](../interfaces/IPath.md#updatestate)

#### Inherited from

[UI](UI.md).[updateState](UI.md#updatestate)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:248](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/display/src/Leaf.ts#L248)

___

### updateLayout

▸ **updateLayout**(): `void`

#### Returns

`void`

#### Implementation of

[IPath](../interfaces/IPath.md).[updateLayout](../interfaces/IPath.md#updatelayout)

#### Inherited from

[UI](UI.md).[updateLayout](UI.md#updatelayout)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:253](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/display/src/Leaf.ts#L253)

___

### forceUpdate

▸ **forceUpdate**(`attrName?`): `void`

#### Parameters

| Name        | Type     |
| :---------- | :------- |
| `attrName?` | `string` |

#### Returns

`void`

#### Implementation of

[IPath](../interfaces/IPath.md).[forceUpdate](../interfaces/IPath.md#forceupdate)

#### Inherited from

[UI](UI.md).[forceUpdate](UI.md#forceupdate)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:257](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/display/src/Leaf.ts#L257)

___

### forceRender

▸ **forceRender**(`_bounds?`, `_sync?`): `void`

#### Parameters

| Name       | Type                                          |
| :--------- | :-------------------------------------------- |
| `_bounds?` | [`IBoundsData`](../interfaces/IBoundsData.md) |
| `_sync?`   | `boolean`                                     |

#### Returns

`void`

#### Implementation of

[IPath](../interfaces/IPath.md).[forceRender](../interfaces/IPath.md#forcerender)

#### Inherited from

[UI](UI.md).[forceRender](UI.md#forcerender)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:265](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/display/src/Leaf.ts#L265)

___

### \_\_extraUpdate

▸ **__extraUpdate**(): `void`

#### Returns

`void`

#### Implementation of

[IPath](../interfaces/IPath.md).[__extraUpdate](../interfaces/IPath.md#__extraupdate)

#### Inherited from

[UI](UI.md).[__extraUpdate](UI.md#__extraupdate)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:269](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/display/src/Leaf.ts#L269)

___

### \_\_updateWorldMatrix

▸ **__updateWorldMatrix**(): `void`

#### Returns

`void`

#### Implementation of

[IPath](../interfaces/IPath.md).[__updateWorldMatrix](../interfaces/IPath.md#__updateworldmatrix)

#### Inherited from

[UI](UI.md).[__updateWorldMatrix](UI.md#__updateworldmatrix)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:275](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/display/src/Leaf.ts#L275)

___

### \_\_updateLocalMatrix

▸ **__updateLocalMatrix**(): `void`

#### Returns

`void`

#### Implementation of

[IPath](../interfaces/IPath.md).[__updateLocalMatrix](../interfaces/IPath.md#__updatelocalmatrix)

#### Inherited from

[UI](UI.md).[__updateLocalMatrix](UI.md#__updatelocalmatrix)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:277](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/display/src/Leaf.ts#L277)

___

### \_\_updateWorldBounds

▸ **__updateWorldBounds**(): `void`

#### Returns

`void`

#### Implementation of

[IPath](../interfaces/IPath.md).[__updateWorldBounds](../interfaces/IPath.md#__updateworldbounds)

#### Inherited from

[UI](UI.md).[__updateWorldBounds](UI.md#__updateworldbounds)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:283](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/display/src/Leaf.ts#L283)

___

### \_\_updateLocalBounds

▸ **__updateLocalBounds**(): `void`

#### Returns

`void`

#### Implementation of

[IPath](../interfaces/IPath.md).[__updateLocalBounds](../interfaces/IPath.md#__updatelocalbounds)

#### Inherited from

[UI](UI.md).[__updateLocalBounds](UI.md#__updatelocalbounds)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:285](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/display/src/Leaf.ts#L285)

___

### \_\_updateLocalBoxBounds

▸ **__updateLocalBoxBounds**(): `void`

#### Returns

`void`

#### Implementation of

[IPath](../interfaces/IPath.md).[__updateLocalBoxBounds](../interfaces/IPath.md#__updatelocalboxbounds)

#### Inherited from

[UI](UI.md).[__updateLocalBoxBounds](UI.md#__updatelocalboxbounds)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:288](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/display/src/Leaf.ts#L288)

___

### \_\_updateLocalStrokeBounds

▸ **__updateLocalStrokeBounds**(): `void`

#### Returns

`void`

#### Implementation of

[IPath](../interfaces/IPath.md).[__updateLocalStrokeBounds](../interfaces/IPath.md#__updatelocalstrokebounds)

#### Inherited from

[UI](UI.md).[__updateLocalStrokeBounds](UI.md#__updatelocalstrokebounds)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:290](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/display/src/Leaf.ts#L290)

___

### \_\_updateLocalRenderBounds

▸ **__updateLocalRenderBounds**(): `void`

#### Returns

`void`

#### Implementation of

[IPath](../interfaces/IPath.md).[__updateLocalRenderBounds](../interfaces/IPath.md#__updatelocalrenderbounds)

#### Inherited from

[UI](UI.md).[__updateLocalRenderBounds](UI.md#__updatelocalrenderbounds)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:292](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/display/src/Leaf.ts#L292)

___

### \_\_updateBoxBounds

▸ **__updateBoxBounds**(`_secondLayout?`, `_bounds?`): `void`

#### Parameters

| Name             | Type                                          |
| :--------------- | :-------------------------------------------- |
| `_secondLayout?` | `boolean`                                     |
| `_bounds?`       | [`IBoundsData`](../interfaces/IBoundsData.md) |

#### Returns

`void`

#### Implementation of

[IPath](../interfaces/IPath.md).[__updateBoxBounds](../interfaces/IPath.md#__updateboxbounds)

#### Inherited from

[UI](UI.md).[__updateBoxBounds](UI.md#__updateboxbounds)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:296](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/display/src/Leaf.ts#L296)

___

### \_\_updateContentBounds

▸ **__updateContentBounds**(): `void`

#### Returns

`void`

#### Implementation of

[IPath](../interfaces/IPath.md).[__updateContentBounds](../interfaces/IPath.md#__updatecontentbounds)

#### Inherited from

[UI](UI.md).[__updateContentBounds](UI.md#__updatecontentbounds)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:298](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/display/src/Leaf.ts#L298)

___

### \_\_updateStrokeBounds

▸ **__updateStrokeBounds**(`_bounds?`): `void`

#### Parameters

| Name       | Type                                          |
| :--------- | :-------------------------------------------- |
| `_bounds?` | [`IBoundsData`](../interfaces/IBoundsData.md) |

#### Returns

`void`

#### Implementation of

[IPath](../interfaces/IPath.md).[__updateStrokeBounds](../interfaces/IPath.md#__updatestrokebounds)

#### Inherited from

[UI](UI.md).[__updateStrokeBounds](UI.md#__updatestrokebounds)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:300](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/display/src/Leaf.ts#L300)

___

### \_\_updateRenderBounds

▸ **__updateRenderBounds**(`_bounds?`): `void`

#### Parameters

| Name       | Type                                          |
| :--------- | :-------------------------------------------- |
| `_bounds?` | [`IBoundsData`](../interfaces/IBoundsData.md) |

#### Returns

`void`

#### Implementation of

[IPath](../interfaces/IPath.md).[__updateRenderBounds](../interfaces/IPath.md#__updaterenderbounds)

#### Inherited from

[UI](UI.md).[__updateRenderBounds](UI.md#__updaterenderbounds)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:302](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/display/src/Leaf.ts#L302)

___

### \_\_updateAutoLayout

▸ **__updateAutoLayout**(): `void`

#### Returns

`void`

#### Implementation of

[IPath](../interfaces/IPath.md).[__updateAutoLayout](../interfaces/IPath.md#__updateautolayout)

#### Inherited from

[UI](UI.md).[__updateAutoLayout](UI.md#__updateautolayout)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:305](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/display/src/Leaf.ts#L305)

___

### \_\_updateFlowLayout

▸ **__updateFlowLayout**(): `void`

#### Returns

`void`

#### Implementation of

[IPath](../interfaces/IPath.md).[__updateFlowLayout](../interfaces/IPath.md#__updateflowlayout)

#### Inherited from

[UI](UI.md).[__updateFlowLayout](UI.md#__updateflowlayout)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:307](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/display/src/Leaf.ts#L307)

___

### \_\_updateNaturalSize

▸ **__updateNaturalSize**(): `void`

#### Returns

`void`

#### Implementation of

[IPath](../interfaces/IPath.md).[__updateNaturalSize](../interfaces/IPath.md#__updatenaturalsize)

#### Inherited from

[UI](UI.md).[__updateNaturalSize](UI.md#__updatenaturalsize)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:309](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/display/src/Leaf.ts#L309)

___

### \_\_updateStrokeSpread

▸ **__updateStrokeSpread**(): [`IFourNumber`](../modules.md#ifournumber)

#### Returns

[`IFourNumber`](../modules.md#ifournumber)

#### Implementation of

[IPath](../interfaces/IPath.md).[__updateStrokeSpread](../interfaces/IPath.md#__updatestrokespread)

#### Inherited from

[UI](UI.md).[__updateStrokeSpread](UI.md#__updatestrokespread)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:312](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/display/src/Leaf.ts#L312)

___

### \_\_updateRenderSpread

▸ **__updateRenderSpread**(): [`IFourNumber`](../modules.md#ifournumber)

#### Returns

[`IFourNumber`](../modules.md#ifournumber)

#### Implementation of

[IPath](../interfaces/IPath.md).[__updateRenderSpread](../interfaces/IPath.md#__updaterenderspread)

#### Inherited from

[UI](UI.md).[__updateRenderSpread](UI.md#__updaterenderspread)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:314](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/display/src/Leaf.ts#L314)

___

### \_\_updateEraser

▸ **__updateEraser**(`value?`): `void`

#### Parameters

| Name     | Type      |
| :------- | :-------- |
| `value?` | `boolean` |

#### Returns

`void`

#### Implementation of

[IPath](../interfaces/IPath.md).[__updateEraser](../interfaces/IPath.md#__updateeraser)

#### Inherited from

[UI](UI.md).[__updateEraser](UI.md#__updateeraser)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:321](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/display/src/Leaf.ts#L321)

___

### \_\_renderEraser

▸ **__renderEraser**(`canvas`, `options`): `void`

#### Parameters

| Name      | Type                                                |
| :-------- | :-------------------------------------------------- |
| `canvas`  | [`ILeaferCanvas`](../interfaces/ILeaferCanvas.md)   |
| `options` | [`IRenderOptions`](../interfaces/IRenderOptions.md) |

#### Returns

`void`

#### Implementation of

[IPath](../interfaces/IPath.md).[__renderEraser](../interfaces/IPath.md#__rendereraser)

#### Inherited from

[UI](UI.md).[__renderEraser](UI.md#__rendereraser)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:325](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/display/src/Leaf.ts#L325)

___

### \_\_updateMask

▸ **__updateMask**(`_value?`): `void`

#### Parameters

| Name      | Type      |
| :-------- | :-------- |
| `_value?` | `boolean` |

#### Returns

`void`

#### Implementation of

[IPath](../interfaces/IPath.md).[__updateMask](../interfaces/IPath.md#__updatemask)

#### Inherited from

[UI](UI.md).[__updateMask](UI.md#__updatemask)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:333](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/display/src/Leaf.ts#L333)

___

### \_\_renderMask

▸ **__renderMask**(`_canvas`, `_options`): `void`

#### Parameters

| Name       | Type                                                |
| :--------- | :-------------------------------------------------- |
| `_canvas`  | [`ILeaferCanvas`](../interfaces/ILeaferCanvas.md)   |
| `_options` | [`IRenderOptions`](../interfaces/IRenderOptions.md) |

#### Returns

`void`

#### Implementation of

[IPath](../interfaces/IPath.md).[__renderMask](../interfaces/IPath.md#__rendermask)

#### Inherited from

[UI](UI.md).[__renderMask](UI.md#__rendermask)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:339](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/display/src/Leaf.ts#L339)

___

### \_\_getNowWorld

▸ **__getNowWorld**(`options`): [`IMatrixWithBoundsScaleData`](../interfaces/IMatrixWithBoundsScaleData.md)

#### Parameters

| Name      | Type                                                |
| :-------- | :-------------------------------------------------- |
| `options` | [`IRenderOptions`](../interfaces/IRenderOptions.md) |

#### Returns

[`IMatrixWithBoundsScaleData`](../interfaces/IMatrixWithBoundsScaleData.md)

#### Implementation of

[IPath](../interfaces/IPath.md).[__getNowWorld](../interfaces/IPath.md#__getnowworld)

#### Inherited from

[UI](UI.md).[__getNowWorld](UI.md#__getnowworld)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:347](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/display/src/Leaf.ts#L347)

___

### getClampRenderScale

▸ **getClampRenderScale**(): `number`

#### Returns

`number`

#### Implementation of

[IPath](../interfaces/IPath.md).[getClampRenderScale](../interfaces/IPath.md#getclamprenderscale)

#### Inherited from

[UI](UI.md).[getClampRenderScale](UI.md#getclamprenderscale)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:361](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/display/src/Leaf.ts#L361)

___

### getRenderScaleData

▸ **getRenderScaleData**(`abs?`, `scaleFixed?`, `unscale?`): [`IScaleData`](../interfaces/IScaleData.md)

#### Parameters

| Name          | Type                                       | Default value |
| :------------ | :----------------------------------------- | :------------ |
| `abs?`        | `boolean`                                  | `undefined`   |
| `scaleFixed?` | [`IScaleFixed`](../modules.md#iscalefixed) | `undefined`   |
| `unscale`     | `boolean`                                  | `true`        |

#### Returns

[`IScaleData`](../interfaces/IScaleData.md)

#### Implementation of

[IPath](../interfaces/IPath.md).[getRenderScaleData](../interfaces/IPath.md#getrenderscaledata)

#### Inherited from

[UI](UI.md).[getRenderScaleData](UI.md#getrenderscaledata)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:367](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/display/src/Leaf.ts#L367)

___

### getTransform

▸ **getTransform**(`relative?`): [`IMatrixData`](../interfaces/IMatrixData.md)

#### Parameters

| Name        | Type                                                                                  |
| :---------- | :------------------------------------------------------------------------------------ |
| `relative?` | [`ILeaf`](../interfaces/ILeaf.md) \\| [`ILocationType`](../modules.md#ilocationtype) |

#### Returns

[`IMatrixData`](../interfaces/IMatrixData.md)

#### Implementation of

[IPath](../interfaces/IPath.md).[getTransform](../interfaces/IPath.md#gettransform)

#### Inherited from

[UI](UI.md).[getTransform](UI.md#gettransform)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:371](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/display/src/Leaf.ts#L371)

___

### getBounds

▸ **getBounds**(`type?`, `relative?`): [`IBoundsData`](../interfaces/IBoundsData.md)

#### Parameters

| Name        | Type                                                                                  |
| :---------- | :------------------------------------------------------------------------------------ |
| `type?`     | [`IBoundsType`](../modules.md#iboundstype)                                            |
| `relative?` | [`ILeaf`](../interfaces/ILeaf.md) \\| [`ILocationType`](../modules.md#ilocationtype) |

#### Returns

[`IBoundsData`](../interfaces/IBoundsData.md)

#### Implementation of

[IPath](../interfaces/IPath.md).[getBounds](../interfaces/IPath.md#getbounds)

#### Inherited from

[UI](UI.md).[getBounds](UI.md#getbounds)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:376](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/display/src/Leaf.ts#L376)

___

### getLayoutBounds

▸ **getLayoutBounds**(`type?`, `relative?`, `unscale?`): [`ILayoutBoundsData`](../interfaces/ILayoutBoundsData.md)

#### Parameters

| Name        | Type                                                                                  |
| :---------- | :------------------------------------------------------------------------------------ |
| `type?`     | [`IBoundsType`](../modules.md#iboundstype)                                            |
| `relative?` | [`ILeaf`](../interfaces/ILeaf.md) \\| [`ILocationType`](../modules.md#ilocationtype) |
| `unscale?`  | `boolean`                                                                             |

#### Returns

[`ILayoutBoundsData`](../interfaces/ILayoutBoundsData.md)

#### Implementation of

[IPath](../interfaces/IPath.md).[getLayoutBounds](../interfaces/IPath.md#getlayoutbounds)

#### Inherited from

[UI](UI.md).[getLayoutBounds](UI.md#getlayoutbounds)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:380](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/display/src/Leaf.ts#L380)

___

### getLayoutPoints

▸ **getLayoutPoints**(`type?`, `relative?`): [`IPointData`](../interfaces/IPointData.md)[]

#### Parameters

| Name        | Type                                                                                  |
| :---------- | :------------------------------------------------------------------------------------ |
| `type?`     | [`IBoundsType`](../modules.md#iboundstype)                                            |
| `relative?` | [`ILeaf`](../interfaces/ILeaf.md) \\| [`ILocationType`](../modules.md#ilocationtype) |

#### Returns

[`IPointData`](../interfaces/IPointData.md)[]

#### Implementation of

[IPath](../interfaces/IPath.md).[getLayoutPoints](../interfaces/IPath.md#getlayoutpoints)

#### Inherited from

[UI](UI.md).[getLayoutPoints](UI.md#getlayoutpoints)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:384](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/display/src/Leaf.ts#L384)

___

### getWorldBounds

▸ **getWorldBounds**(`inner`, `relative?`, `change?`): [`IBoundsData`](../interfaces/IBoundsData.md)

#### Parameters

| Name        | Type                                          |
| :---------- | :-------------------------------------------- |
| `inner`     | [`IBoundsData`](../interfaces/IBoundsData.md) |
| `relative?` | [`ILeaf`](../interfaces/ILeaf.md)             |
| `change?`   | `boolean`                                     |

#### Returns

[`IBoundsData`](../interfaces/IBoundsData.md)

#### Implementation of

[IPath](../interfaces/IPath.md).[getWorldBounds](../interfaces/IPath.md#getworldbounds)

#### Inherited from

[UI](UI.md).[getWorldBounds](UI.md#getworldbounds)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:389](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/display/src/Leaf.ts#L389)

___

### worldToLocal

▸ **worldToLocal**(`world`, `to?`, `distance?`, `relative?`): `void`

#### Parameters

| Name        | Type                                        |
| :---------- | :------------------------------------------ |
| `world`     | [`IPointData`](../interfaces/IPointData.md) |
| `to?`       | [`IPointData`](../interfaces/IPointData.md) |
| `distance?` | `boolean`                                   |
| `relative?` | [`ILeaf`](../interfaces/ILeaf.md)           |

#### Returns

`void`

#### Implementation of

[IPath](../interfaces/IPath.md).[worldToLocal](../interfaces/IPath.md#worldtolocal)

#### Inherited from

[UI](UI.md).[worldToLocal](UI.md#worldtolocal)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:397](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/display/src/Leaf.ts#L397)

___

### localToWorld

▸ **localToWorld**(`local`, `to?`, `distance?`, `relative?`): `void`

#### Parameters

| Name        | Type                                        |
| :---------- | :------------------------------------------ |
| `local`     | [`IPointData`](../interfaces/IPointData.md) |
| `to?`       | [`IPointData`](../interfaces/IPointData.md) |
| `distance?` | `boolean`                                   |
| `relative?` | [`ILeaf`](../interfaces/ILeaf.md)           |

#### Returns

`void`

#### Implementation of

[IPath](../interfaces/IPath.md).[localToWorld](../interfaces/IPath.md#localtoworld)

#### Inherited from

[UI](UI.md).[localToWorld](UI.md#localtoworld)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:405](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/display/src/Leaf.ts#L405)

___

### worldToInner

▸ **worldToInner**(`world`, `to?`, `distance?`, `relative?`): `void`

#### Parameters

| Name        | Type                                        |
| :---------- | :------------------------------------------ |
| `world`     | [`IPointData`](../interfaces/IPointData.md) |
| `to?`       | [`IPointData`](../interfaces/IPointData.md) |
| `distance?` | `boolean`                                   |
| `relative?` | [`ILeaf`](../interfaces/ILeaf.md)           |

#### Returns

`void`

#### Implementation of

[IPath](../interfaces/IPath.md).[worldToInner](../interfaces/IPath.md#worldtoinner)

#### Inherited from

[UI](UI.md).[worldToInner](UI.md#worldtoinner)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:413](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/display/src/Leaf.ts#L413)

___

### innerToWorld

▸ **innerToWorld**(`inner`, `to?`, `distance?`, `relative?`): `void`

#### Parameters

| Name        | Type                                        |
| :---------- | :------------------------------------------ |
| `inner`     | [`IPointData`](../interfaces/IPointData.md) |
| `to?`       | [`IPointData`](../interfaces/IPointData.md) |
| `distance?` | `boolean`                                   |
| `relative?` | [`ILeaf`](../interfaces/ILeaf.md)           |

#### Returns

`void`

#### Implementation of

[IPath](../interfaces/IPath.md).[innerToWorld](../interfaces/IPath.md#innertoworld)

#### Inherited from

[UI](UI.md).[innerToWorld](UI.md#innertoworld)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:421](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/display/src/Leaf.ts#L421)

___

### getBoxPoint

▸ **getBoxPoint**(`world`, `relative?`, `distance?`, `change?`): [`IPointData`](../interfaces/IPointData.md)

#### Parameters

| Name        | Type                                        |
| :---------- | :------------------------------------------ |
| `world`     | [`IPointData`](../interfaces/IPointData.md) |
| `relative?` | [`ILeaf`](../interfaces/ILeaf.md)           |
| `distance?` | `boolean`                                   |
| `change?`   | `boolean`                                   |

#### Returns

[`IPointData`](../interfaces/IPointData.md)

#### Implementation of

[IPath](../interfaces/IPath.md).[getBoxPoint](../interfaces/IPath.md#getboxpoint)

#### Inherited from

[UI](UI.md).[getBoxPoint](UI.md#getboxpoint)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:428](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/display/src/Leaf.ts#L428)

___

### getBoxPointByInner

▸ **getBoxPointByInner**(`inner`, `_relative?`, `_distance?`, `change?`): [`IPointData`](../interfaces/IPointData.md)

#### Parameters

| Name         | Type                                        |
| :----------- | :------------------------------------------ |
| `inner`      | [`IPointData`](../interfaces/IPointData.md) |
| `_relative?` | [`ILeaf`](../interfaces/ILeaf.md)           |
| `_distance?` | `boolean`                                   |
| `change?`    | `boolean`                                   |

#### Returns

[`IPointData`](../interfaces/IPointData.md)

#### Implementation of

[IPath](../interfaces/IPath.md).[getBoxPointByInner](../interfaces/IPath.md#getboxpointbyinner)

#### Inherited from

[UI](UI.md).[getBoxPointByInner](UI.md#getboxpointbyinner)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:434](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/display/src/Leaf.ts#L434)

___

### getInnerPoint

▸ **getInnerPoint**(`world`, `relative?`, `distance?`, `change?`): [`IPointData`](../interfaces/IPointData.md)

#### Parameters

| Name        | Type                                        |
| :---------- | :------------------------------------------ |
| `world`     | [`IPointData`](../interfaces/IPointData.md) |
| `relative?` | [`ILeaf`](../interfaces/ILeaf.md)           |
| `distance?` | `boolean`                                   |
| `change?`   | `boolean`                                   |

#### Returns

[`IPointData`](../interfaces/IPointData.md)

#### Implementation of

[IPath](../interfaces/IPath.md).[getInnerPoint](../interfaces/IPath.md#getinnerpoint)

#### Inherited from

[UI](UI.md).[getInnerPoint](UI.md#getinnerpoint)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:440](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/display/src/Leaf.ts#L440)

___

### getInnerPointByBox

▸ **getInnerPointByBox**(`box`, `_relative?`, `_distance?`, `change?`): [`IPointData`](../interfaces/IPointData.md)

#### Parameters

| Name         | Type                                        |
| :----------- | :------------------------------------------ |
| `box`        | [`IPointData`](../interfaces/IPointData.md) |
| `_relative?` | [`ILeaf`](../interfaces/ILeaf.md)           |
| `_distance?` | `boolean`                                   |
| `change?`    | `boolean`                                   |

#### Returns

[`IPointData`](../interfaces/IPointData.md)

#### Implementation of

[IPath](../interfaces/IPath.md).[getInnerPointByBox](../interfaces/IPath.md#getinnerpointbybox)

#### Inherited from

[UI](UI.md).[getInnerPointByBox](UI.md#getinnerpointbybox)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:446](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/display/src/Leaf.ts#L446)

___

### getInnerPointByLocal

▸ **getInnerPointByLocal**(`local`, `_relative?`, `distance?`, `change?`): [`IPointData`](../interfaces/IPointData.md)

#### Parameters

| Name         | Type                                        |
| :----------- | :------------------------------------------ |
| `local`      | [`IPointData`](../interfaces/IPointData.md) |
| `_relative?` | [`ILeaf`](../interfaces/ILeaf.md)           |
| `distance?`  | `boolean`                                   |
| `change?`    | `boolean`                                   |

#### Returns

[`IPointData`](../interfaces/IPointData.md)

#### Implementation of

[IPath](../interfaces/IPath.md).[getInnerPointByLocal](../interfaces/IPath.md#getinnerpointbylocal)

#### Inherited from

[UI](UI.md).[getInnerPointByLocal](UI.md#getinnerpointbylocal)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:452](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/display/src/Leaf.ts#L452)

___

### getLocalPoint

▸ **getLocalPoint**(`world`, `relative?`, `distance?`, `change?`): [`IPointData`](../interfaces/IPointData.md)

#### Parameters

| Name        | Type                                        |
| :---------- | :------------------------------------------ |
| `world`     | [`IPointData`](../interfaces/IPointData.md) |
| `relative?` | [`ILeaf`](../interfaces/ILeaf.md)           |
| `distance?` | `boolean`                                   |
| `change?`   | `boolean`                                   |

#### Returns

[`IPointData`](../interfaces/IPointData.md)

#### Implementation of

[IPath](../interfaces/IPath.md).[getLocalPoint](../interfaces/IPath.md#getlocalpoint)

#### Inherited from

[UI](UI.md).[getLocalPoint](UI.md#getlocalpoint)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:456](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/display/src/Leaf.ts#L456)

___

### getLocalPointByInner

▸ **getLocalPointByInner**(`inner`, `_relative?`, `distance?`, `change?`): [`IPointData`](../interfaces/IPointData.md)

#### Parameters

| Name         | Type                                        |
| :----------- | :------------------------------------------ |
| `inner`      | [`IPointData`](../interfaces/IPointData.md) |
| `_relative?` | [`ILeaf`](../interfaces/ILeaf.md)           |
| `distance?`  | `boolean`                                   |
| `change?`    | `boolean`                                   |

#### Returns

[`IPointData`](../interfaces/IPointData.md)

#### Implementation of

[IPath](../interfaces/IPath.md).[getLocalPointByInner](../interfaces/IPath.md#getlocalpointbyinner)

#### Inherited from

[UI](UI.md).[getLocalPointByInner](UI.md#getlocalpointbyinner)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:462](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/display/src/Leaf.ts#L462)

___

### getPagePoint

▸ **getPagePoint**(`world`, `relative?`, `distance?`, `change?`): [`IPointData`](../interfaces/IPointData.md)

#### Parameters

| Name        | Type                                        |
| :---------- | :------------------------------------------ |
| `world`     | [`IPointData`](../interfaces/IPointData.md) |
| `relative?` | [`ILeaf`](../interfaces/ILeaf.md)           |
| `distance?` | `boolean`                                   |
| `change?`   | `boolean`                                   |

#### Returns

[`IPointData`](../interfaces/IPointData.md)

#### Implementation of

[IPath](../interfaces/IPath.md).[getPagePoint](../interfaces/IPath.md#getpagepoint)

#### Inherited from

[UI](UI.md).[getPagePoint](UI.md#getpagepoint)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:466](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/display/src/Leaf.ts#L466)

___

### getWorldPoint

▸ **getWorldPoint**(`inner`, `relative?`, `distance?`, `change?`): [`IPointData`](../interfaces/IPointData.md)

#### Parameters

| Name        | Type                                        |
| :---------- | :------------------------------------------ |
| `inner`     | [`IPointData`](../interfaces/IPointData.md) |
| `relative?` | [`ILeaf`](../interfaces/ILeaf.md)           |
| `distance?` | `boolean`                                   |
| `change?`   | `boolean`                                   |

#### Returns

[`IPointData`](../interfaces/IPointData.md)

#### Implementation of

[IPath](../interfaces/IPath.md).[getWorldPoint](../interfaces/IPath.md#getworldpoint)

#### Inherited from

[UI](UI.md).[getWorldPoint](UI.md#getworldpoint)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:471](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/display/src/Leaf.ts#L471)

___

### getWorldPointByBox

▸ **getWorldPointByBox**(`box`, `relative?`, `distance?`, `change?`): [`IPointData`](../interfaces/IPointData.md)

#### Parameters

| Name        | Type                                        |
| :---------- | :------------------------------------------ |
| `box`       | [`IPointData`](../interfaces/IPointData.md) |
| `relative?` | [`ILeaf`](../interfaces/ILeaf.md)           |
| `distance?` | `boolean`                                   |
| `change?`   | `boolean`                                   |

#### Returns

[`IPointData`](../interfaces/IPointData.md)

#### Implementation of

[IPath](../interfaces/IPath.md).[getWorldPointByBox](../interfaces/IPath.md#getworldpointbybox)

#### Inherited from

[UI](UI.md).[getWorldPointByBox](UI.md#getworldpointbybox)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:477](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/display/src/Leaf.ts#L477)

___

### getWorldPointByLocal

▸ **getWorldPointByLocal**(`local`, `relative?`, `distance?`, `change?`): [`IPointData`](../interfaces/IPointData.md)

#### Parameters

| Name        | Type                                        |
| :---------- | :------------------------------------------ |
| `local`     | [`IPointData`](../interfaces/IPointData.md) |
| `relative?` | [`ILeaf`](../interfaces/ILeaf.md)           |
| `distance?` | `boolean`                                   |
| `change?`   | `boolean`                                   |

#### Returns

[`IPointData`](../interfaces/IPointData.md)

#### Implementation of

[IPath](../interfaces/IPath.md).[getWorldPointByLocal](../interfaces/IPath.md#getworldpointbylocal)

#### Inherited from

[UI](UI.md).[getWorldPointByLocal](UI.md#getworldpointbylocal)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:481](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/display/src/Leaf.ts#L481)

___

### getWorldPointByPage

▸ **getWorldPointByPage**(`page`, `relative?`, `distance?`, `change?`): [`IPointData`](../interfaces/IPointData.md)

#### Parameters

| Name        | Type                                        |
| :---------- | :------------------------------------------ |
| `page`      | [`IPointData`](../interfaces/IPointData.md) |
| `relative?` | [`ILeaf`](../interfaces/ILeaf.md)           |
| `distance?` | `boolean`                                   |
| `change?`   | `boolean`                                   |

#### Returns

[`IPointData`](../interfaces/IPointData.md)

#### Implementation of

[IPath](../interfaces/IPath.md).[getWorldPointByPage](../interfaces/IPath.md#getworldpointbypage)

#### Inherited from

[UI](UI.md).[getWorldPointByPage](UI.md#getworldpointbypage)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:487](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/display/src/Leaf.ts#L487)

___

### setTransform

▸ **setTransform**(`matrix`, `resize?`, `transition?`): `void`

#### Parameters

| Name          | Type                                          |
| :------------ | :-------------------------------------------- |
| `matrix`      | [`IMatrixData`](../interfaces/IMatrixData.md) |
| `resize?`     | `boolean`                                     |
| `transition?` | [`ITransition`](../modules.md#itransition)    |

#### Returns

`void`

#### Implementation of

[IPath](../interfaces/IPath.md).[setTransform](../interfaces/IPath.md#settransform)

#### Inherited from

[UI](UI.md).[setTransform](UI.md#settransform)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:495](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/display/src/Leaf.ts#L495)

___

### transform

▸ **transform**(`matrix`, `resize?`, `transition?`): `void`

#### Parameters

| Name          | Type                                          |
| :------------ | :-------------------------------------------- |
| `matrix`      | [`IMatrixData`](../interfaces/IMatrixData.md) |
| `resize?`     | `boolean`                                     |
| `transition?` | [`ITransition`](../modules.md#itransition)    |

#### Returns

`void`

#### Implementation of

[IPath](../interfaces/IPath.md).[transform](../interfaces/IPath.md#transform)

#### Inherited from

[UI](UI.md).[transform](UI.md#transform)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:499](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/display/src/Leaf.ts#L499)

___

### move

▸ **move**(`x`, `y?`, `transition?`): `void`

#### Parameters

| Name          | Type                                                      |
| :------------ | :-------------------------------------------------------- |
| `x`           | `number` \\| [`IPointData`](../interfaces/IPointData.md) |
| `y?`          | `number`                                                  |
| `transition?` | [`ITransition`](../modules.md#itransition)                |

#### Returns

`void`

#### Implementation of

[IPath](../interfaces/IPath.md).[move](../interfaces/IPath.md#move)

#### Inherited from

[UI](UI.md).[move](UI.md#move)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:503](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/display/src/Leaf.ts#L503)

___

### moveInner

▸ **moveInner**(`x`, `y?`, `transition?`): `void`

#### Parameters

| Name          | Type                                                      |
| :------------ | :-------------------------------------------------------- |
| `x`           | `number` \\| [`IPointData`](../interfaces/IPointData.md) |
| `y?`          | `number`                                                  |
| `transition?` | [`ITransition`](../modules.md#itransition)                |

#### Returns

`void`

#### Implementation of

[IPath](../interfaces/IPath.md).[moveInner](../interfaces/IPath.md#moveinner)

#### Inherited from

[UI](UI.md).[moveInner](UI.md#moveinner)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:508](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/display/src/Leaf.ts#L508)

___

### scaleOf

▸ **scaleOf**(`origin`, `scaleX`, `scaleY?`, `resize?`, `transition?`): `void`

#### Parameters

| Name          | Type                                                                                      |
| :------------ | :---------------------------------------------------------------------------------------- |
| `origin`      | [`IPointData`](../interfaces/IPointData.md) \\| [`IDirection`](../modules.md#idirection) |
| `scaleX`      | `number`                                                                                  |
| `scaleY?`     | [`ITransition`](../modules.md#itransition)                                                |
| `resize?`     | `boolean`                                                                                 |
| `transition?` | [`ITransition`](../modules.md#itransition)                                                |

#### Returns

`void`

#### Implementation of

[IPath](../interfaces/IPath.md).[scaleOf](../interfaces/IPath.md#scaleof)

#### Inherited from

[UI](UI.md).[scaleOf](UI.md#scaleof)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:512](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/display/src/Leaf.ts#L512)

___

### rotateOf

▸ **rotateOf**(`origin`, `rotation`, `transition?`): `void`

#### Parameters

| Name          | Type                                                                                      |
| :------------ | :---------------------------------------------------------------------------------------- |
| `origin`      | [`IPointData`](../interfaces/IPointData.md) \\| [`IDirection`](../modules.md#idirection) |
| `rotation`    | `number`                                                                                  |
| `transition?` | [`ITransition`](../modules.md#itransition)                                                |

#### Returns

`void`

#### Implementation of

[IPath](../interfaces/IPath.md).[rotateOf](../interfaces/IPath.md#rotateof)

#### Inherited from

[UI](UI.md).[rotateOf](UI.md#rotateof)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:516](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/display/src/Leaf.ts#L516)

___

### skewOf

▸ **skewOf**(`origin`, `skewX`, `skewY?`, `resize?`, `transition?`): `void`

#### Parameters

| Name          | Type                                                                                      |
| :------------ | :---------------------------------------------------------------------------------------- |
| `origin`      | [`IPointData`](../interfaces/IPointData.md) \\| [`IDirection`](../modules.md#idirection) |
| `skewX`       | `number`                                                                                  |
| `skewY?`      | `number`                                                                                  |
| `resize?`     | `boolean`                                                                                 |
| `transition?` | [`ITransition`](../modules.md#itransition)                                                |

#### Returns

`void`

#### Implementation of

[IPath](../interfaces/IPath.md).[skewOf](../interfaces/IPath.md#skewof)

#### Inherited from

[UI](UI.md).[skewOf](UI.md#skewof)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:520](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/display/src/Leaf.ts#L520)

___

### transformWorld

▸ **transformWorld**(`worldTransform?`, `resize?`, `transition?`): `void`

#### Parameters

| Name              | Type                                          |
| :---------------- | :-------------------------------------------- |
| `worldTransform?` | [`IMatrixData`](../interfaces/IMatrixData.md) |
| `resize?`         | `boolean`                                     |
| `transition?`     | [`ITransition`](../modules.md#itransition)    |

#### Returns

`void`

#### Implementation of

[IPath](../interfaces/IPath.md).[transformWorld](../interfaces/IPath.md#transformworld)

#### Inherited from

[UI](UI.md).[transformWorld](UI.md#transformworld)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:525](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/display/src/Leaf.ts#L525)

___

### moveWorld

▸ **moveWorld**(`x`, `y?`, `transition?`): `void`

#### Parameters

| Name          | Type                                                      |
| :------------ | :-------------------------------------------------------- |
| `x`           | `number` \\| [`IPointData`](../interfaces/IPointData.md) |
| `y?`          | `number`                                                  |
| `transition?` | [`ITransition`](../modules.md#itransition)                |

#### Returns

`void`

#### Implementation of

[IPath](../interfaces/IPath.md).[moveWorld](../interfaces/IPath.md#moveworld)

#### Inherited from

[UI](UI.md).[moveWorld](UI.md#moveworld)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:529](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/display/src/Leaf.ts#L529)

___

### scaleOfWorld

▸ **scaleOfWorld**(`worldOrigin`, `scaleX`, `scaleY?`, `resize?`, `transition?`): `void`

#### Parameters

| Name          | Type                                        |
| :------------ | :------------------------------------------ |
| `worldOrigin` | [`IPointData`](../interfaces/IPointData.md) |
| `scaleX`      | `number`                                    |
| `scaleY?`     | [`ITransition`](../modules.md#itransition)  |
| `resize?`     | `boolean`                                   |
| `transition?` | [`ITransition`](../modules.md#itransition)  |

#### Returns

`void`

#### Implementation of

[IPath](../interfaces/IPath.md).[scaleOfWorld](../interfaces/IPath.md#scaleofworld)

#### Inherited from

[UI](UI.md).[scaleOfWorld](UI.md#scaleofworld)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:533](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/display/src/Leaf.ts#L533)

___

### rotateOfWorld

▸ **rotateOfWorld**(`worldOrigin`, `rotation`): `void`

#### Parameters

| Name          | Type                                        |
| :------------ | :------------------------------------------ |
| `worldOrigin` | [`IPointData`](../interfaces/IPointData.md) |
| `rotation`    | `number`                                    |

#### Returns

`void`

#### Implementation of

[IPath](../interfaces/IPath.md).[rotateOfWorld](../interfaces/IPath.md#rotateofworld)

#### Inherited from

[UI](UI.md).[rotateOfWorld](UI.md#rotateofworld)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:537](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/display/src/Leaf.ts#L537)

___

### skewOfWorld

▸ **skewOfWorld**(`worldOrigin`, `skewX`, `skewY?`, `resize?`, `transition?`): `void`

#### Parameters

| Name          | Type                                        |
| :------------ | :------------------------------------------ |
| `worldOrigin` | [`IPointData`](../interfaces/IPointData.md) |
| `skewX`       | `number`                                    |
| `skewY?`      | `number`                                    |
| `resize?`     | `boolean`                                   |
| `transition?` | [`ITransition`](../modules.md#itransition)  |

#### Returns

`void`

#### Implementation of

[IPath](../interfaces/IPath.md).[skewOfWorld](../interfaces/IPath.md#skewofworld)

#### Inherited from

[UI](UI.md).[skewOfWorld](UI.md#skewofworld)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:541](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/display/src/Leaf.ts#L541)

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

#### Implementation of

[IPath](../interfaces/IPath.md).[flip](../interfaces/IPath.md#flip)

#### Inherited from

[UI](UI.md).[flip](UI.md#flip)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:545](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/display/src/Leaf.ts#L545)

___

### scaleResize

▸ **scaleResize**(`scaleX`, `scaleY?`, `_noResize?`): `void`

#### Parameters

| Name         | Type      | Default value |
| :----------- | :-------- | :------------ |
| `scaleX`     | `number`  | `undefined`   |
| `scaleY`     | `number`  | `scaleX`      |
| `_noResize?` | `boolean` | `undefined`   |

#### Returns

`void`

#### Implementation of

[IPath](../interfaces/IPath.md).[scaleResize](../interfaces/IPath.md#scaleresize)

#### Inherited from

[UI](UI.md).[scaleResize](UI.md#scaleresize)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:552](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/display/src/Leaf.ts#L552)

___

### \_\_scaleResize

▸ **__scaleResize**(`_scaleX`, `_scaleY`): `void`

#### Parameters

| Name      | Type     |
| :-------- | :------- |
| `_scaleX` | `number` |
| `_scaleY` | `number` |

#### Returns

`void`

#### Implementation of

[IPath](../interfaces/IPath.md).[__scaleResize](../interfaces/IPath.md#__scaleresize)

#### Inherited from

[UI](UI.md).[__scaleResize](UI.md#__scaleresize)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:557](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/display/src/Leaf.ts#L557)

___

### resizeWidth

▸ **resizeWidth**(`_width`): `void`

#### Parameters

| Name     | Type     |
| :------- | :------- |
| `_width` | `number` |

#### Returns

`void`

#### Implementation of

[IPath](../interfaces/IPath.md).[resizeWidth](../interfaces/IPath.md#resizewidth)

#### Inherited from

[UI](UI.md).[resizeWidth](UI.md#resizewidth)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:560](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/display/src/Leaf.ts#L560)

___

### resizeHeight

▸ **resizeHeight**(`_height`): `void`

#### Parameters

| Name      | Type     |
| :-------- | :------- |
| `_height` | `number` |

#### Returns

`void`

#### Implementation of

[IPath](../interfaces/IPath.md).[resizeHeight](../interfaces/IPath.md#resizeheight)

#### Inherited from

[UI](UI.md).[resizeHeight](UI.md#resizeheight)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:562](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/display/src/Leaf.ts#L562)

___

### hit

▸ **hit**(`_world`, `_hitRadius?`): `boolean`

#### Parameters

| Name          | Type                                        |
| :------------ | :------------------------------------------ |
| `_world`      | [`IPointData`](../interfaces/IPointData.md) |
| `_hitRadius?` | `number`                                    |

#### Returns

`boolean`

#### Implementation of

[IPath](../interfaces/IPath.md).[hit](../interfaces/IPath.md#hit)

#### Inherited from

[UI](UI.md).[hit](UI.md#hit)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:567](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/display/src/Leaf.ts#L567)

___

### \_\_hitWorld

▸ **__hitWorld**(`_point`, `_forceHitFill?`): `boolean`

#### Parameters

| Name             | Type                                                    |
| :--------------- | :------------------------------------------------------ |
| `_point`         | [`IRadiusPointData`](../interfaces/IRadiusPointData.md) |
| `_forceHitFill?` | `boolean`                                               |

#### Returns

`boolean`

#### Implementation of

[IPath](../interfaces/IPath.md).[__hitWorld](../interfaces/IPath.md#__hitworld)

#### Inherited from

[UI](UI.md).[__hitWorld](UI.md#__hitworld)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:569](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/display/src/Leaf.ts#L569)

___

### \_\_hit

▸ **__hit**(`_local`, `_forceHitFill?`): `boolean`

#### Parameters

| Name             | Type                                                    |
| :--------------- | :------------------------------------------------------ |
| `_local`         | [`IRadiusPointData`](../interfaces/IRadiusPointData.md) |
| `_forceHitFill?` | `boolean`                                               |

#### Returns

`boolean`

#### Implementation of

[IPath](../interfaces/IPath.md).[__hit](../interfaces/IPath.md#__hit)

#### Inherited from

[UI](UI.md).[__hit](UI.md#__hit)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:571](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/display/src/Leaf.ts#L571)

___

### \_\_hitFill

▸ **__hitFill**(`_inner`): `boolean`

#### Parameters

| Name     | Type                                                    |
| :------- | :------------------------------------------------------ |
| `_inner` | [`IRadiusPointData`](../interfaces/IRadiusPointData.md) |

#### Returns

`boolean`

#### Implementation of

[IPath](../interfaces/IPath.md).[__hitFill](../interfaces/IPath.md#__hitfill)

#### Inherited from

[UI](UI.md).[__hitFill](UI.md#__hitfill)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:573](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/display/src/Leaf.ts#L573)

___

### \_\_hitStroke

▸ **__hitStroke**(`_inner`, `_strokeWidth`): `boolean`

#### Parameters

| Name           | Type                                                    |
| :------------- | :------------------------------------------------------ |
| `_inner`       | [`IRadiusPointData`](../interfaces/IRadiusPointData.md) |
| `_strokeWidth` | `number`                                                |

#### Returns

`boolean`

#### Implementation of

[IPath](../interfaces/IPath.md).[__hitStroke](../interfaces/IPath.md#__hitstroke)

#### Inherited from

[UI](UI.md).[__hitStroke](UI.md#__hitstroke)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:575](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/display/src/Leaf.ts#L575)

___

### \_\_hitPixel

▸ **__hitPixel**(`_inner`): `boolean`

#### Parameters

| Name     | Type                                                    |
| :------- | :------------------------------------------------------ |
| `_inner` | [`IRadiusPointData`](../interfaces/IRadiusPointData.md) |

#### Returns

`boolean`

#### Implementation of

[IPath](../interfaces/IPath.md).[__hitPixel](../interfaces/IPath.md#__hitpixel)

#### Inherited from

[UI](UI.md).[__hitPixel](UI.md#__hitpixel)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:577](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/display/src/Leaf.ts#L577)

___

### \_\_drawHitPath

▸ **__drawHitPath**(`_canvas`): `void`

#### Parameters

| Name      | Type                                              |
| :-------- | :------------------------------------------------ |
| `_canvas` | [`ILeaferCanvas`](../interfaces/ILeaferCanvas.md) |

#### Returns

`void`

#### Implementation of

[IPath](../interfaces/IPath.md).[__drawHitPath](../interfaces/IPath.md#__drawhitpath)

#### Inherited from

[UI](UI.md).[__drawHitPath](UI.md#__drawhitpath)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:579](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/display/src/Leaf.ts#L579)

___

### \_\_updateHitCanvas

▸ **__updateHitCanvas**(): `void`

#### Returns

`void`

#### Implementation of

[IPath](../interfaces/IPath.md).[__updateHitCanvas](../interfaces/IPath.md#__updatehitcanvas)

#### Inherited from

[UI](UI.md).[__updateHitCanvas](UI.md#__updatehitcanvas)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:581](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/display/src/Leaf.ts#L581)

___

### \_\_render

▸ **__render**(`_canvas`, `_options`): `void`

#### Parameters

| Name       | Type                                                |
| :--------- | :-------------------------------------------------- |
| `_canvas`  | [`ILeaferCanvas`](../interfaces/ILeaferCanvas.md)   |
| `_options` | [`IRenderOptions`](../interfaces/IRenderOptions.md) |

#### Returns

`void`

#### Implementation of

[IPath](../interfaces/IPath.md).[__render](../interfaces/IPath.md#__render)

#### Inherited from

[UI](UI.md).[__render](UI.md#__render)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:588](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/display/src/Leaf.ts#L588)

___

### \_\_drawFast

▸ **__drawFast**(`_canvas`, `_options`): `void`

#### Parameters

| Name       | Type                                                |
| :--------- | :-------------------------------------------------- |
| `_canvas`  | [`ILeaferCanvas`](../interfaces/ILeaferCanvas.md)   |
| `_options` | [`IRenderOptions`](../interfaces/IRenderOptions.md) |

#### Returns

`void`

#### Implementation of

[IPath](../interfaces/IPath.md).[__drawFast](../interfaces/IPath.md#__drawfast)

#### Inherited from

[UI](UI.md).[__drawFast](UI.md#__drawfast)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:590](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/display/src/Leaf.ts#L590)

___

### \_\_draw

▸ **__draw**(`_canvas`, `_options`, `_originCanvas?`): `void`

#### Parameters

| Name             | Type                                                |
| :--------------- | :-------------------------------------------------- |
| `_canvas`        | [`ILeaferCanvas`](../interfaces/ILeaferCanvas.md)   |
| `_options`       | [`IRenderOptions`](../interfaces/IRenderOptions.md) |
| `_originCanvas?` | [`ILeaferCanvas`](../interfaces/ILeaferCanvas.md)   |

#### Returns

`void`

#### Implementation of

[IPath](../interfaces/IPath.md).[__draw](../interfaces/IPath.md#__draw)

#### Inherited from

[UI](UI.md).[__draw](UI.md#__draw)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:592](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/display/src/Leaf.ts#L592)

___

### \_\_clip

▸ **__clip**(`_canvas`, `_options`): `void`

#### Parameters

| Name       | Type                                                |
| :--------- | :-------------------------------------------------- |
| `_canvas`  | [`ILeaferCanvas`](../interfaces/ILeaferCanvas.md)   |
| `_options` | [`IRenderOptions`](../interfaces/IRenderOptions.md) |

#### Returns

`void`

#### Implementation of

[IPath](../interfaces/IPath.md).[__clip](../interfaces/IPath.md#__clip)

#### Inherited from

[UI](UI.md).[__clip](UI.md#__clip)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:595](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/display/src/Leaf.ts#L595)

___

### \_\_renderShape

▸ **__renderShape**(`_canvas`, `_options`): `void`

#### Parameters

| Name       | Type                                                |
| :--------- | :-------------------------------------------------- |
| `_canvas`  | [`ILeaferCanvas`](../interfaces/ILeaferCanvas.md)   |
| `_options` | [`IRenderOptions`](../interfaces/IRenderOptions.md) |

#### Returns

`void`

#### Implementation of

[IPath](../interfaces/IPath.md).[__renderShape](../interfaces/IPath.md#__rendershape)

#### Inherited from

[UI](UI.md).[__renderShape](UI.md#__rendershape)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:597](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/display/src/Leaf.ts#L597)

___

### \_\_drawShape

▸ **__drawShape**(`_canvas`, `_options`): `void`

#### Parameters

| Name       | Type                                                |
| :--------- | :-------------------------------------------------- |
| `_canvas`  | [`ILeaferCanvas`](../interfaces/ILeaferCanvas.md)   |
| `_options` | [`IRenderOptions`](../interfaces/IRenderOptions.md) |

#### Returns

`void`

#### Implementation of

[IPath](../interfaces/IPath.md).[__drawShape](../interfaces/IPath.md#__drawshape)

#### Inherited from

[UI](UI.md).[__drawShape](UI.md#__drawshape)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:599](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/display/src/Leaf.ts#L599)

___

### \_\_updateWorldOpacity

▸ **__updateWorldOpacity**(): `void`

#### Returns

`void`

#### Implementation of

[IPath](../interfaces/IPath.md).[__updateWorldOpacity](../interfaces/IPath.md#__updateworldopacity)

#### Inherited from

[UI](UI.md).[__updateWorldOpacity](UI.md#__updateworldopacity)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:602](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/display/src/Leaf.ts#L602)

___

### \_\_updateChange

▸ **__updateChange**(): `void`

#### Returns

`void`

#### Implementation of

[IPath](../interfaces/IPath.md).[__updateChange](../interfaces/IPath.md#__updatechange)

#### Inherited from

[UI](UI.md).[__updateChange](UI.md#__updatechange)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:604](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/display/src/Leaf.ts#L604)

___

### \_\_updatePath

▸ **__updatePath**(): `void`

#### Returns

`void`

#### Implementation of

[IPath](../interfaces/IPath.md).[__updatePath](../interfaces/IPath.md#__updatepath)

#### Inherited from

[UI](UI.md).[__updatePath](UI.md#__updatepath)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:615](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/display/src/Leaf.ts#L615)

___

### getMotionPathData

▸ **getMotionPathData**(): [`IMotionPathData`](../interfaces/IMotionPathData.md)

#### Returns

[`IMotionPathData`](../interfaces/IMotionPathData.md)

#### Implementation of

[IPath](../interfaces/IPath.md).[getMotionPathData](../interfaces/IPath.md#getmotionpathdata)

#### Inherited from

[UI](UI.md).[getMotionPathData](UI.md#getmotionpathdata)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:624](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/display/src/Leaf.ts#L624)

___

### getMotionPoint

▸ **getMotionPoint**(`_motionDistance`): [`IRotationPointData`](../interfaces/IRotationPointData.md)

#### Parameters

| Name              | Type                                                    |
| :---------------- | :------------------------------------------------------ |
| `_motionDistance` | `number` \\| [`IUnitData`](../interfaces/IUnitData.md) |

#### Returns

[`IRotationPointData`](../interfaces/IRotationPointData.md)

#### Implementation of

[IPath](../interfaces/IPath.md).[getMotionPoint](../interfaces/IPath.md#getmotionpoint)

#### Inherited from

[UI](UI.md).[getMotionPoint](UI.md#getmotionpoint)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:628](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/display/src/Leaf.ts#L628)

___

### getMotionTotal

▸ **getMotionTotal**(): `number`

#### Returns

`number`

#### Implementation of

[IPath](../interfaces/IPath.md).[getMotionTotal](../interfaces/IPath.md#getmotiontotal)

#### Inherited from

[UI](UI.md).[getMotionTotal](UI.md#getmotiontotal)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:632](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/display/src/Leaf.ts#L632)

___

### \_\_updateMotionPath

▸ **__updateMotionPath**(): `void`

#### Returns

`void`

#### Implementation of

[IPath](../interfaces/IPath.md).[__updateMotionPath](../interfaces/IPath.md#__updatemotionpath)

#### Inherited from

[UI](UI.md).[__updateMotionPath](UI.md#__updatemotionpath)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:636](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/display/src/Leaf.ts#L636)

___

### \_\_runAnimation

▸ **__runAnimation**(`_type`, `_complete?`): `void`

#### Parameters

| Name         | Type                                      |
| :----------- | :---------------------------------------- |
| `_type`      | `"in"` \\| `"out"`                       |
| `_complete?` | [`IFunction`](../interfaces/IFunction.md) |

#### Returns

`void`

#### Implementation of

[IPath](../interfaces/IPath.md).[__runAnimation](../interfaces/IPath.md#__runanimation)

#### Inherited from

[UI](UI.md).[__runAnimation](UI.md#__runanimation)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:642](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/display/src/Leaf.ts#L642)

___

### \_\_updateSortChildren

▸ **__updateSortChildren**(): `void`

#### Returns

`void`

#### Implementation of

[IPath](../interfaces/IPath.md).[__updateSortChildren](../interfaces/IPath.md#__updatesortchildren)

#### Inherited from

[UI](UI.md).[__updateSortChildren](UI.md#__updatesortchildren)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:647](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/display/src/Leaf.ts#L647)

___

### add

▸ **add**(`_child`, `_index?`): `void`

#### Parameters

| Name      | Type                                                                                                                                                                                                                                                                                                   |
| :-------- | :----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `_child`  | [`ILeaf`](../interfaces/ILeaf.md) \\| [`ILeaf`](../interfaces/ILeaf.md)[] \\| [`ILeafInputData`](../interfaces/ILeafInputData.md) \\| [`ILeafInputData`](../interfaces/ILeafInputData.md)[] |
| `_index?` | `number`                                                                                                                                                                                                                                                                                               |

#### Returns

`void`

#### Implementation of

[IPath](../interfaces/IPath.md).[add](../interfaces/IPath.md#add)

#### Inherited from

[UI](UI.md).[add](UI.md#add)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:649](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/display/src/Leaf.ts#L649)

___

### remove

▸ **remove**(`_child?`, `destroy?`): `void`

#### Parameters

| Name       | Type                                                                                                             |
| :--------- | :--------------------------------------------------------------------------------------------------------------- |
| `_child?`  | `string` \\| `number` \\| [`ILeaf`](../interfaces/ILeaf.md) \\| [`IFindMethod`](../interfaces/IFindMethod.md) |
| `destroy?` | `boolean`                                                                                                        |

#### Returns

`void`

#### Implementation of

[IPath](../interfaces/IPath.md).[remove](../interfaces/IPath.md#remove)

#### Inherited from

[UI](UI.md).[remove](UI.md#remove)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:651](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/display/src/Leaf.ts#L651)

___

### dropTo

▸ **dropTo**(`parent`, `index?`, `resize?`): `void`

#### Parameters

| Name      | Type                              |
| :-------- | :-------------------------------- |
| `parent`  | [`ILeaf`](../interfaces/ILeaf.md) |
| `index?`  | `number`                          |
| `resize?` | `boolean`                         |

#### Returns

`void`

#### Implementation of

[IPath](../interfaces/IPath.md).[dropTo](../interfaces/IPath.md#dropto)

#### Inherited from

[UI](UI.md).[dropTo](UI.md#dropto)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:655](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/display/src/Leaf.ts#L655)

___

### on

▸ **on**(`_type`, `_listener?`, `_options?`): `void`

#### Parameters

| Name         | Type                                                                                                                                                                                                                                            |
| :----------- | :---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `_type`      | `string` \\| `string`[] \\| [`IEventParamsMap`](../interfaces/IEventParamsMap.md) \\| [`IEventParams`](../modules.md#ieventparams)[] |
| `_listener?` | [`IFunction`](../interfaces/IFunction.md)                                                                                                                                                                                                       |
| `_options?`  | [`IEventOption`](../modules.md#ieventoption)                                                                                                                                                                                                    |

#### Returns

`void`

#### Implementation of

[IPath](../interfaces/IPath.md).[on](../interfaces/IPath.md#on)

#### Inherited from

[UI](UI.md).[on](UI.md#on)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:664](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/display/src/Leaf.ts#L664)

___

### off

▸ **off**(`_type?`, `_listener?`, `_options?`): `void`

#### Parameters

| Name         | Type                                                                         |
| :----------- | :--------------------------------------------------------------------------- |
| `_type?`     | `string` \\| `string`[] |
| `_listener?` | [`IFunction`](../interfaces/IFunction.md)                                    |
| `_options?`  | [`IEventOption`](../modules.md#ieventoption)                                 |

#### Returns

`void`

#### Implementation of

[IPath](../interfaces/IPath.md).[off](../interfaces/IPath.md#off)

#### Inherited from

[UI](UI.md).[off](UI.md#off)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:666](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/display/src/Leaf.ts#L666)

___

### on\_

▸ **on_**(`_type`, `_listener?`, `_bind?`, `_options?`): [`IEventListenerId`](../interfaces/IEventListenerId.md)

#### Parameters

| Name         | Type                                                                                                                                                                                 |
| :----------- | :----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `_type`      | `string` \\| `string`[] \\| [`IEventParams`](../modules.md#ieventparams)[] |
| `_listener?` | [`IFunction`](../interfaces/IFunction.md)                                                                                                                                            |
| `_bind?`     | [`IObject`](../interfaces/IObject.md)                                                                                                                                                |
| `_options?`  | [`IEventOption`](../modules.md#ieventoption)                                                                                                                                         |

#### Returns

[`IEventListenerId`](../interfaces/IEventListenerId.md)

#### Implementation of

[IPath](../interfaces/IPath.md).[on_](../interfaces/IPath.md#on_)

#### Inherited from

[UI](UI.md).[on_](UI.md#on_)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:668](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/display/src/Leaf.ts#L668)

___

### off\_

▸ **off_**(`_id`): `void`

#### Parameters

| Name  | Type                                                                                                                                                                       |
| :---- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `_id` | [`IEventListenerId`](../interfaces/IEventListenerId.md) \\| [`IEventListenerId`](../interfaces/IEventListenerId.md)[] |

#### Returns

`void`

#### Implementation of

[IPath](../interfaces/IPath.md).[off_](../interfaces/IPath.md#off_)

#### Inherited from

[UI](UI.md).[off_](UI.md#off_)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:670](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/display/src/Leaf.ts#L670)

___

### once

▸ **once**(`_type`, `_listener?`, `_captureOrBind?`, `_capture?`): `void`

#### Parameters

| Name              | Type                                                                                                                                                                                 |
| :---------------- | :----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `_type`           | `string` \\| `string`[] \\| [`IEventParams`](../modules.md#ieventparams)[] |
| `_listener?`      | [`IFunction`](../interfaces/IFunction.md)                                                                                                                                            |
| `_captureOrBind?` | `boolean` \\| [`IObject`](../interfaces/IObject.md)                                                                                                                                 |
| `_capture?`       | `boolean`                                                                                                                                                                            |

#### Returns

`void`

#### Implementation of

[IPath](../interfaces/IPath.md).[once](../interfaces/IPath.md#once)

#### Inherited from

[UI](UI.md).[once](UI.md#once)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:672](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/display/src/Leaf.ts#L672)

___

### emit

▸ **emit**(`_type`, `_event?`, `_capture?`): `void`

#### Parameters

| Name        | Type                                                                           |
| :---------- | :----------------------------------------------------------------------------- |
| `_type`     | `string`                                                                       |
| `_event?`   | [`IObject`](../interfaces/IObject.md) \\| [`IEvent`](../interfaces/IEvent.md) |
| `_capture?` | `boolean`                                                                      |

#### Returns

`void`

#### Implementation of

[IPath](../interfaces/IPath.md).[emit](../interfaces/IPath.md#emit)

#### Inherited from

[UI](UI.md).[emit](UI.md#emit)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:674](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/display/src/Leaf.ts#L674)

___

### emitEvent

▸ **emitEvent**(`_event?`, `_capture?`): `void`

#### Parameters

| Name        | Type                                |
| :---------- | :---------------------------------- |
| `_event?`   | [`IEvent`](../interfaces/IEvent.md) |
| `_capture?` | `boolean`                           |

#### Returns

`void`

#### Implementation of

[IPath](../interfaces/IPath.md).[emitEvent](../interfaces/IPath.md#emitevent)

#### Inherited from

[UI](UI.md).[emitEvent](UI.md#emitevent)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:676](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/display/src/Leaf.ts#L676)

___

### hasEvent

▸ **hasEvent**(`_type`, `_capture?`): `boolean`

#### Parameters

| Name        | Type      |
| :---------- | :-------- |
| `_type`     | `string`  |
| `_capture?` | `boolean` |

#### Returns

`boolean`

#### Implementation of

[IPath](../interfaces/IPath.md).[hasEvent](../interfaces/IPath.md#hasevent)

#### Inherited from

[UI](UI.md).[hasEvent](UI.md#hasevent)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:678](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/display/src/Leaf.ts#L678)

___

### changeAttr

▸ **changeAttr**(`attrName`, `defaultValue`, `fn?`): `void`

#### Parameters

| Name           | Type                                                                                      |
| :------------- | :---------------------------------------------------------------------------------------- |
| `attrName`     | `string`                                                                                  |
| `defaultValue` | [`IValueFunction`](../interfaces/IValueFunction.md) \\| [`IValue`](../modules.md#ivalue) |
| `fn?`          | [`IAttrDecorator`](../interfaces/IAttrDecorator.md)                                       |

#### Returns

`void`

#### Inherited from

[UI](UI.md).[changeAttr](UI.md#changeattr)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:682](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/display/src/Leaf.ts#L682)

___

### addAttr

▸ **addAttr**(`attrName`, `defaultValue`, `fn?`, `helpValue?`): `void`

#### Parameters

| Name           | Type                                                                                      |
| :------------- | :---------------------------------------------------------------------------------------- |
| `attrName`     | `string`                                                                                  |
| `defaultValue` | [`IValueFunction`](../interfaces/IValueFunction.md) \\| [`IValue`](../modules.md#ivalue) |
| `fn?`          | [`IAttrDecorator`](../interfaces/IAttrDecorator.md)                                       |
| `helpValue?`   | [`IValue`](../modules.md#ivalue)                                                          |

#### Returns

`void`

#### Inherited from

[UI](UI.md).[addAttr](UI.md#addattr)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:686](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/display/src/Leaf.ts#L686)

___

### \_\_emitLifeEvent

▸ **__emitLifeEvent**(`type`): `void`

#### Parameters

| Name   | Type     |
| :----- | :------- |
| `type` | `string` |

#### Returns

`void`

#### Implementation of

[IPath](../interfaces/IPath.md).[__emitLifeEvent](../interfaces/IPath.md#__emitlifeevent)

#### Inherited from

[UI](UI.md).[__emitLifeEvent](UI.md#__emitlifeevent)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:692](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/display/src/Leaf.ts#L692)

___

### reset

▸ **reset**(`_data?`): `void`

#### Parameters

| Name     | Type                                            |
| :------- | :---------------------------------------------- |
| `_data?` | [`IUIInputData`](../interfaces/IUIInputData.md) |

#### Returns

`void`

#### Implementation of

[IPath](../interfaces/IPath.md).[reset](../interfaces/IPath.md#reset)

#### Inherited from

[UI](UI.md).[reset](UI.md#reset)

#### Defined in

[src/ui/packages/display/src/UI.ts:425](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/display/src/UI.ts#L425)

___

### set

▸ **set**(`data`, `_transition?`): `void`

#### Parameters

| Name           | Type                                                     |
| :------------- | :------------------------------------------------------- |
| `data`         | [`IUIInputData`](../interfaces/IUIInputData.md)          |
| `_transition?` | [`ITransition`](../modules.md#itransition) \\| `"temp"` |

#### Returns

`void`

#### Implementation of

[IPath](../interfaces/IPath.md).[set](../interfaces/IPath.md#set)

#### Inherited from

[UI](UI.md).[set](UI.md#set)

#### Defined in

[src/ui/packages/display/src/UI.ts:430](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/display/src/UI.ts#L430)

___

### get

▸ **get**\<`K`\>(`name?`): [`IUIInputData`](../interfaces/IUIInputData.md) \| [`Path`](Path.md)\<`TInputData`\>[`K`]

#### Type parameters

| Name | Type                                                                       |
| :--- | :------------------------------------------------------------------------- |
| `K`  | extends keyof [`Path`](Path.md)\<`TInputData`\> |

#### Parameters

| Name    | Type                                                                                                                    |
| :------ | :---------------------------------------------------------------------------------------------------------------------- |
| `name?` | [`IUIInputData`](../interfaces/IUIInputData.md) \\| `K` \\| `K`[] |

#### Returns

[`IUIInputData`](../interfaces/IUIInputData.md) \| [`Path`](Path.md)\<`TInputData`\>[`K`]

#### Implementation of

[IPath](../interfaces/IPath.md).[get](../interfaces/IPath.md#get)

#### Inherited from

[UI](UI.md).[get](UI.md#get)

#### Defined in

[src/ui/packages/display/src/UI.ts:434](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/display/src/UI.ts#L434)

___

### createProxyData

▸ **createProxyData**(): [`IUIInputData`](../interfaces/IUIInputData.md)

#### Returns

[`IUIInputData`](../interfaces/IUIInputData.md)

#### Implementation of

[IPath](../interfaces/IPath.md).[createProxyData](../interfaces/IPath.md#createproxydata)

#### Inherited from

[UI](UI.md).[createProxyData](UI.md#createproxydata)

#### Defined in

[src/ui/packages/display/src/UI.ts:438](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/display/src/UI.ts#L438)

___

### clearProxyData

▸ **clearProxyData**(): `void`

#### Returns

`void`

#### Implementation of

[IPath](../interfaces/IPath.md).[clearProxyData](../interfaces/IPath.md#clearproxydata)

#### Inherited from

[UI](UI.md).[clearProxyData](UI.md#clearproxydata)

#### Defined in

[src/ui/packages/display/src/UI.ts:439](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/display/src/UI.ts#L439)

___

### find

▸ **find**(`_condition`, `_options?`): [`IUI`](../interfaces/IUI.md)[]

#### Parameters

| Name         | Type                                                                                                                                   |
| :----------- | :------------------------------------------------------------------------------------------------------------------------------------- |
| `_condition` | `string` \\| `number` \\| [`IFindCondition`](../interfaces/IFindCondition.md) \\| [`IFindUIMethod`](../interfaces/IFindUIMethod.md) |
| `_options?`  | `any`                                                                                                                                  |

#### Returns

[`IUI`](../interfaces/IUI.md)[]

#### Implementation of

[IPath](../interfaces/IPath.md).[find](../interfaces/IPath.md#find)

#### Inherited from

[UI](UI.md).[find](UI.md#find)

#### Defined in

[src/ui/packages/display/src/UI.ts:444](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/display/src/UI.ts#L444)

___

### findTag

▸ **findTag**(`tag`): [`IUI`](../interfaces/IUI.md)[]

#### Parameters

| Name  | Type                                                                         |
| :---- | :--------------------------------------------------------------------------- |
| `tag` | `string` \\| `string`[] |

#### Returns

[`IUI`](../interfaces/IUI.md)[]

#### Implementation of

[IPath](../interfaces/IPath.md).[findTag](../interfaces/IPath.md#findtag)

#### Inherited from

[UI](UI.md).[findTag](UI.md#findtag)

#### Defined in

[src/ui/packages/display/src/UI.ts:446](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/display/src/UI.ts#L446)

___

### findOne

▸ **findOne**(`_condition`, `_options?`): [`IUI`](../interfaces/IUI.md)

#### Parameters

| Name         | Type                                                                                                                                   |
| :----------- | :------------------------------------------------------------------------------------------------------------------------------------- |
| `_condition` | `string` \\| `number` \\| [`IFindCondition`](../interfaces/IFindCondition.md) \\| [`IFindUIMethod`](../interfaces/IFindUIMethod.md) |
| `_options?`  | `any`                                                                                                                                  |

#### Returns

[`IUI`](../interfaces/IUI.md)

#### Implementation of

[IPath](../interfaces/IPath.md).[findOne](../interfaces/IPath.md#findone)

#### Inherited from

[UI](UI.md).[findOne](UI.md#findone)

#### Defined in

[src/ui/packages/display/src/UI.ts:448](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/display/src/UI.ts#L448)

___

### findId

▸ **findId**(`id`): [`IUI`](../interfaces/IUI.md)

#### Parameters

| Name | Type                   |
| :--- | :--------------------- |
| `id` | `string` \\| `number` |

#### Returns

[`IUI`](../interfaces/IUI.md)

#### Implementation of

[IPath](../interfaces/IPath.md).[findId](../interfaces/IPath.md#findid)

#### Inherited from

[UI](UI.md).[findId](UI.md#findid)

#### Defined in

[src/ui/packages/display/src/UI.ts:450](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/display/src/UI.ts#L450)

___

### getPath

▸ **getPath**(`curve?`, `pathForRender?`): [`IPathCommandData`](../modules.md#ipathcommanddata)

#### Parameters

| Name             | Type      |
| :--------------- | :-------- |
| `curve?`         | `boolean` |
| `pathForRender?` | `boolean` |

#### Returns

[`IPathCommandData`](../modules.md#ipathcommanddata)

#### Implementation of

[IPath](../interfaces/IPath.md).[getPath](../interfaces/IPath.md#getpath)

#### Inherited from

[UI](UI.md).[getPath](UI.md#getpath)

#### Defined in

[src/ui/packages/display/src/UI.ts:455](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/display/src/UI.ts#L455)

___

### getPathString

▸ **getPathString**(`curve?`, `pathForRender?`, `floatLength?`): `string`

#### Parameters

| Name             | Type      |
| :--------------- | :-------- |
| `curve?`         | `boolean` |
| `pathForRender?` | `boolean` |
| `floatLength?`   | `number`  |

#### Returns

`string`

#### Implementation of

[IPath](../interfaces/IPath.md).[getPathString](../interfaces/IPath.md#getpathstring)

#### Inherited from

[UI](UI.md).[getPathString](UI.md#getpathstring)

#### Defined in

[src/ui/packages/display/src/UI.ts:462](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/display/src/UI.ts#L462)

___

### asPath

▸ **asPath**(`curve?`, `pathForRender?`): `void`

#### Parameters

| Name             | Type      |
| :--------------- | :-------- |
| `curve?`         | `boolean` |
| `pathForRender?` | `boolean` |

#### Returns

`void`

#### Implementation of

[IPath](../interfaces/IPath.md).[asPath](../interfaces/IPath.md#aspath)

#### Inherited from

[UI](UI.md).[asPath](UI.md#aspath)

#### Defined in

[src/ui/packages/display/src/UI.ts:466](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/display/src/UI.ts#L466)

___

### load

▸ **load**(): `void`

#### Returns

`void`

#### Implementation of

[IPath](../interfaces/IPath.md).[load](../interfaces/IPath.md#load)

#### Inherited from

[UI](UI.md).[load](UI.md#load)

#### Defined in

[src/ui/packages/display/src/UI.ts:470](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/display/src/UI.ts#L470)

___

### \_\_onUpdateSize

▸ **__onUpdateSize**(): `void`

#### Returns

`void`

#### Implementation of

[IPath](../interfaces/IPath.md).[__onUpdateSize](../interfaces/IPath.md#__onupdatesize)

#### Inherited from

[UI](UI.md).[__onUpdateSize](UI.md#__onupdatesize)

#### Defined in

[src/ui/packages/display/src/UI.ts:474](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/display/src/UI.ts#L474)

___

### \_\_updateRenderPath

▸ **__updateRenderPath**(`updateCache?`): `void`

#### Parameters

| Name           | Type      |
| :------------- | :-------- |
| `updateCache?` | `boolean` |

#### Returns

`void`

#### Implementation of

[IPath](../interfaces/IPath.md).[__updateRenderPath](../interfaces/IPath.md#__updaterenderpath)

#### Inherited from

[UI](UI.md).[__updateRenderPath](UI.md#__updaterenderpath)

#### Defined in

[src/ui/packages/display/src/UI.ts:481](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/display/src/UI.ts#L481)

___

### \_\_drawRenderPath

▸ **__drawRenderPath**(`canvas`): `void`

#### Parameters

| Name     | Type                                              |
| :------- | :------------------------------------------------ |
| `canvas` | [`ILeaferCanvas`](../interfaces/ILeaferCanvas.md) |

#### Returns

`void`

#### Implementation of

[IPath](../interfaces/IPath.md).[__drawRenderPath](../interfaces/IPath.md#__drawrenderpath)

#### Inherited from

[UI](UI.md).[__drawRenderPath](UI.md#__drawrenderpath)

#### Defined in

[src/ui/packages/display/src/UI.ts:489](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/display/src/UI.ts#L489)

___

### \_\_drawPath

▸ **__drawPath**(`canvas`): `void`

#### Parameters

| Name     | Type                                              |
| :------- | :------------------------------------------------ |
| `canvas` | [`ILeaferCanvas`](../interfaces/ILeaferCanvas.md) |

#### Returns

`void`

#### Implementation of

[IPath](../interfaces/IPath.md).[__drawPath](../interfaces/IPath.md#__drawpath)

#### Inherited from

[UI](UI.md).[__drawPath](UI.md#__drawpath)

#### Defined in

[src/ui/packages/display/src/UI.ts:496](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/display/src/UI.ts#L496)

___

### \_\_drawPathByData

▸ **__drawPathByData**(`drawer`, `data`, `ignoreCornerRadius?`): `void`

#### Parameters

| Name                  | Type                                                 |
| :-------------------- | :--------------------------------------------------- |
| `drawer`              | [`IPathDrawer`](../interfaces/IPathDrawer.md)        |
| `data`                | [`IPathCommandData`](../modules.md#ipathcommanddata) |
| `ignoreCornerRadius?` | `boolean`                                            |

#### Returns

`void`

#### Implementation of

[IPath](../interfaces/IPath.md).[__drawPathByData](../interfaces/IPath.md#__drawpathbydata)

#### Inherited from

[UI](UI.md).[__drawPathByData](UI.md#__drawpathbydata)

#### Defined in

[src/ui/packages/display/src/UI.ts:501](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/display/src/UI.ts#L501)

___

### \_\_drawPathByBox

▸ **__drawPathByBox**(`drawer`, `ignoreCornerRadius?`): `void`

#### Parameters

| Name                  | Type                                          |
| :-------------------- | :-------------------------------------------- |
| `drawer`              | [`IPathDrawer`](../interfaces/IPathDrawer.md) |
| `ignoreCornerRadius?` | `boolean`                                     |

#### Returns

`void`

#### Implementation of

[IPath](../interfaces/IPath.md).[__drawPathByBox](../interfaces/IPath.md#__drawpathbybox)

#### Inherited from

[UI](UI.md).[__drawPathByBox](UI.md#__drawpathbybox)

#### Defined in

[src/ui/packages/display/src/UI.ts:505](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/display/src/UI.ts#L505)

___

### drawImagePlaceholder

▸ **drawImagePlaceholder**(`_paint`, `canvas`, `renderOptions`): `void`

#### Parameters

| Name            | Type                                                |
| :-------------- | :-------------------------------------------------- |
| `_paint`        | [`ILeafPaint`](../interfaces/ILeafPaint.md)         |
| `canvas`        | [`ILeaferCanvas`](../interfaces/ILeaferCanvas.md)   |
| `renderOptions` | [`IRenderOptions`](../interfaces/IRenderOptions.md) |

#### Returns

`void`

#### Implementation of

[IPath](../interfaces/IPath.md).[drawImagePlaceholder](../interfaces/IPath.md#drawimageplaceholder)

#### Inherited from

[UI](UI.md).[drawImagePlaceholder](UI.md#drawimageplaceholder)

#### Defined in

[src/ui/packages/display/src/UI.ts:514](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/display/src/UI.ts#L514)

___

### animate

▸ **animate**(`keyframe?`, `_options?`, `_type?`, `_isTemp?`): [`IAnimate`](../interfaces/IAnimate.md)

#### Parameters

| Name        | Type                                                                                                                                                                                                                                                                                                |
| :---------- | :-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `keyframe?` | [`IAnimation`](../modules.md#ianimation) \\| [`IUIInputData`](../interfaces/IUIInputData.md) \\| [`IKeyframe`](../modules.md#ikeyframe)[] \\| [`IAnimation`](../modules.md#ianimation)[] |
| `_options?` | [`ITransition`](../modules.md#itransition)                                                                                                                                                                                                                                                          |
| `_type?`    | [`IAnimateType`](../modules.md#ianimatetype)                                                                                                                                                                                                                                                        |
| `_isTemp?`  | `boolean`                                                                                                                                                                                                                                                                                           |

#### Returns

[`IAnimate`](../interfaces/IAnimate.md)

#### Implementation of

[IPath](../interfaces/IPath.md).[animate](../interfaces/IPath.md#animate)

#### Inherited from

[UI](UI.md).[animate](UI.md#animate)

#### Defined in

[src/ui/packages/display/src/UI.ts:520](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/display/src/UI.ts#L520)

___

### killAnimate

▸ **killAnimate**(`_type?`, `_nextStyle?`): `void`

#### Parameters

| Name          | Type                                            |
| :------------ | :---------------------------------------------- |
| `_type?`      | [`IAnimateType`](../modules.md#ianimatetype)    |
| `_nextStyle?` | [`IUIInputData`](../interfaces/IUIInputData.md) |

#### Returns

`void`

#### Implementation of

[IPath](../interfaces/IPath.md).[killAnimate](../interfaces/IPath.md#killanimate)

#### Inherited from

[UI](UI.md).[killAnimate](UI.md#killanimate)

#### Defined in

[src/ui/packages/display/src/UI.ts:525](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/display/src/UI.ts#L525)

___

### export

▸ **export**(`_filename`, `_options?`): `Promise`\<[`IExportResult`](../interfaces/IExportResult.md)\>

#### Parameters

| Name        | Type                                                                             |
| :---------- | :------------------------------------------------------------------------------- |
| `_filename` | `string`                                                                         |
| `_options?` | `number` \\| `boolean` \\| [`IExportOptions`](../interfaces/IExportOptions.md) |

#### Returns

`Promise`\<[`IExportResult`](../interfaces/IExportResult.md)\>

#### Implementation of

[IPath](../interfaces/IPath.md).[export](../interfaces/IPath.md#export)

#### Inherited from

[UI](UI.md).[export](UI.md#export)

#### Defined in

[src/ui/packages/display/src/UI.ts:531](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/display/src/UI.ts#L531)

___

### syncExport

▸ **syncExport**(`_filename`, `_options?`): [`IExportResult`](../interfaces/IExportResult.md)

#### Parameters

| Name        | Type                                                                             |
| :---------- | :------------------------------------------------------------------------------- |
| `_filename` | `string`                                                                         |
| `_options?` | `number` \\| `boolean` \\| [`IExportOptions`](../interfaces/IExportOptions.md) |

#### Returns

[`IExportResult`](../interfaces/IExportResult.md)

#### Implementation of

[IPath](../interfaces/IPath.md).[syncExport](../interfaces/IPath.md#syncexport)

#### Inherited from

[UI](UI.md).[syncExport](UI.md#syncexport)

#### Defined in

[src/ui/packages/display/src/UI.ts:535](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/display/src/UI.ts#L535)

___

### clone

▸ **clone**(`data?`): `this`

#### Parameters

| Name    | Type                                            |
| :------ | :---------------------------------------------- |
| `data?` | [`IUIInputData`](../interfaces/IUIInputData.md) |

#### Returns

`this`

#### Implementation of

[IPath](../interfaces/IPath.md).[clone](../interfaces/IPath.md#clone)

#### Inherited from

[UI](UI.md).[clone](UI.md#clone)

#### Defined in

[src/ui/packages/display/src/UI.ts:539](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/display/src/UI.ts#L539)

___

### one

▸ **one**\<`T`\>(`this`, `data`, `x?`, `y?`, `width?`, `height?`): `T`

#### Type parameters

| Name | Type                                                                                                |
| :--- | :-------------------------------------------------------------------------------------------------- |
| `T`  | extends [`UI`](UI.md)\<[`IUIInputData`](../interfaces/IUIInputData.md)\> |

#### Parameters

| Name      | Type                                                                                                                                                               |
| :-------- | :----------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `this`    | (...`args`: `any`[]) => `T` |
| `data`    | [`IUIInputData`](../interfaces/IUIInputData.md)                                                                                                                    |
| `x?`      | `number`                                                                                                                                                           |
| `y?`      | `number`                                                                                                                                                           |
| `width?`  | `number`                                                                                                                                                           |
| `height?` | `number`                                                                                                                                                           |

#### Returns

`T`

#### Inherited from

[UI](UI.md).[one](UI.md#one)

#### Defined in

[src/ui/packages/display/src/UI.ts:546](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/display/src/UI.ts#L546)

___

### registerUI

▸ **registerUI**(): `void`

#### Returns

`void`

#### Inherited from

[UI](UI.md).[registerUI](UI.md#registerui)

#### Defined in

[src/ui/packages/display/src/UI.ts:550](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/display/src/UI.ts#L550)

___

### registerData

▸ **registerData**(`data`): `void`

#### Parameters

| Name   | Type                                  |
| :----- | :------------------------------------ |
| `data` | [`IUIData`](../interfaces/IUIData.md) |

#### Returns

`void`

#### Inherited from

[UI](UI.md).[registerData](UI.md#registerdata)

#### Defined in

[src/ui/packages/display/src/UI.ts:554](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/display/src/UI.ts#L554)

___

### setEditConfig

▸ **setEditConfig**(`_config`): `void`

#### Parameters

| Name      | Type                                                                                                                     |
| :-------- | :----------------------------------------------------------------------------------------------------------------------- |
| `_config` | [`IEditorConfig`](../interfaces/IEditorConfig.md) \\| [`IEditorConfigFunction`](../interfaces/IEditorConfigFunction.md) |

#### Returns

`void`

#### Inherited from

[UI](UI.md).[setEditConfig](UI.md#seteditconfig)

#### Defined in

[src/ui/packages/display/src/UI.ts:561](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/display/src/UI.ts#L561)

___

### setEditOuter

▸ **setEditOuter**(`_toolName`): `void`

#### Parameters

| Name        | Type                                                                    |
| :---------- | :---------------------------------------------------------------------- |
| `_toolName` | `string` \\| [`IEditToolFunction`](../interfaces/IEditToolFunction.md) |

#### Returns

`void`

#### Inherited from

[UI](UI.md).[setEditOuter](UI.md#seteditouter)

#### Defined in

[src/ui/packages/display/src/UI.ts:563](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/display/src/UI.ts#L563)

___

### setEditInner

▸ **setEditInner**(`_editorName`): `void`

#### Parameters

| Name          | Type                                                                    |
| :------------ | :---------------------------------------------------------------------- |
| `_editorName` | `string` \\| [`IEditToolFunction`](../interfaces/IEditToolFunction.md) |

#### Returns

`void`

#### Inherited from

[UI](UI.md).[setEditInner](UI.md#seteditinner)

#### Defined in

[src/ui/packages/display/src/UI.ts:565](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/display/src/UI.ts#L565)

___

### destroy

▸ **destroy**(): `void`

#### Returns

`void`

#### Implementation of

[IPath](../interfaces/IPath.md).[destroy](../interfaces/IPath.md#destroy)

#### Inherited from

[UI](UI.md).[destroy](UI.md#destroy)

#### Defined in

[src/ui/packages/display/src/UI.ts:568](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/display/src/UI.ts#L568)
