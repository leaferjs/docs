# Interface: IApp

## Hierarchy

- [`ILeafer`](ILeafer.md)

  ↳ **`IApp`**

## Implemented by

- [`App`](../classes/App.md)

## Table of contents

### Properties

- [mode](IApp.md#mode)
- [running](IApp.md#running)
- [created](IApp.md#created)
- [ready](IApp.md#ready)
- [viewReady](IApp.md#viewready)
- [imageReady](IApp.md#imageready)
- [viewCompleted](IApp.md#viewcompleted)
- [layoutLocked](IApp.md#layoutlocked)
- [transforming](IApp.md#transforming)
- [view](IApp.md#view)
- [canvas](IApp.md#canvas)
- [renderer](IApp.md#renderer)
- [watcher](IApp.md#watcher)
- [layouter](IApp.md#layouter)
- [selector](IApp.md#selector)
- [interaction](IApp.md#interaction)
- [canvasManager](IApp.md#canvasmanager)
- [hitCanvasManager](IApp.md#hitcanvasmanager)
- [autoLayout](IApp.md#autolayout)
- [lazyBounds](IApp.md#lazybounds)
- [config](IApp.md#config)
- [userConfig](IApp.md#userconfig)
- [cacheId](IApp.md#cacheid)
- [cacheInnerId](IApp.md#cacheinnerid)
- [innerIdMap](IApp.md#inneridmap)
- [idMap](IApp.md#idmap)
- [cursorPoint](IApp.md#cursorpoint)
- [clientBounds](IApp.md#clientbounds)
- [leafs](IApp.md#leafs)
- [isPullDown](IApp.md#ispulldown)
- [isReachDottom](IApp.md#isreachdottom)
- [\_\_eventIds](IApp.md#__eventids)
- [\_\_nextRenderWait](IApp.md#__nextrenderwait)
- [id](IApp.md#id)
- [name](IApp.md#name)
- [className](IApp.md#classname)
- [blendMode](IApp.md#blendmode)
- [opacity](IApp.md#opacity)
- [visible](IApp.md#visible)
- [selected](IApp.md#selected)
- [disabled](IApp.md#disabled)
- [locked](IApp.md#locked)
- [zIndex](IApp.md#zindex)
- [dim](IApp.md#dim)
- [dimskip](IApp.md#dimskip)
- [bright](IApp.md#bright)
- [mask](IApp.md#mask)
- [eraser](IApp.md#eraser)
- [filter](IApp.md#filter)
- [complex](IApp.md#complex)
- [x](IApp.md#x)
- [y](IApp.md#y)
- [width](IApp.md#width)
- [height](IApp.md#height)
- [scaleX](IApp.md#scalex)
- [scaleY](IApp.md#scaley)
- [scaleFixed](IApp.md#scalefixed)
- [rotation](IApp.md#rotation)
- [skewX](IApp.md#skewx)
- [skewY](IApp.md#skewy)
- [scale](IApp.md#scale)
- [offsetX](IApp.md#offsetx)
- [offsetY](IApp.md#offsety)
- [scrollX](IApp.md#scrollx)
- [scrollY](IApp.md#scrolly)
- [origin](IApp.md#origin)
- [around](IApp.md#around)
- [lazy](IApp.md#lazy)
- [pixelRatio](IApp.md#pixelratio)
- [renderSpread](IApp.md#renderspread)
- [path](IApp.md#path)
- [windingRule](IApp.md#windingrule)
- [closed](IApp.md#closed)
- [flow](IApp.md#flow)
- [padding](IApp.md#padding)
- [gap](IApp.md#gap)
- [flowAlign](IApp.md#flowalign)
- [flowWrap](IApp.md#flowwrap)
- [itemBox](IApp.md#itembox)
- [inFlow](IApp.md#inflow)
- [autoWidth](IApp.md#autowidth)
- [autoHeight](IApp.md#autoheight)
- [lockRatio](IApp.md#lockratio)
- [autoBox](IApp.md#autobox)
- [widthRange](IApp.md#widthrange)
- [heightRange](IApp.md#heightrange)
- [draggable](IApp.md#draggable)
- [dragBounds](IApp.md#dragbounds)
- [dragBoundsType](IApp.md#dragboundstype)
- [editable](IApp.md#editable)
- [hittable](IApp.md#hittable)
- [hitFill](IApp.md#hitfill)
- [hitStroke](IApp.md#hitstroke)
- [hitBox](IApp.md#hitbox)
- [hitChildren](IApp.md#hitchildren)
- [hitSelf](IApp.md#hitself)
- [hitRadius](IApp.md#hitradius)
- [button](IApp.md#button)
- [cursor](IApp.md#cursor)
- [motionPath](IApp.md#motionpath)
- [motionPrecision](IApp.md#motionprecision)
- [motion](IApp.md#motion)
- [motionRotation](IApp.md#motionrotation)
- [normalStyle](IApp.md#normalstyle)
- [event](IApp.md#event)
- [data](IApp.md#data)
- [tag](IApp.md#tag)
- [\_\_tag](IApp.md#__tag)
- [innerName](IApp.md#innername)
- [\_\_DataProcessor](IApp.md#__dataprocessor)
- [\_\_LayoutProcessor](IApp.md#__layoutprocessor)
- [leaferIsCreated](IApp.md#leaferiscreated)
- [leaferIsReady](IApp.md#leaferisready)
- [isLeafer](IApp.md#isleafer)
- [isBranch](IApp.md#isbranch)
- [isBranchLeaf](IApp.md#isbranchleaf)
- [isOutside](IApp.md#isoutside)
- [skipJSON](IApp.md#skipjson)
- [syncEventer](IApp.md#synceventer)
- [lockNormalStyle](IApp.md#locknormalstyle)
- [\_\_layout](IApp.md#__layout)
- [\_\_world](IApp.md#__world)
- [\_\_local](IApp.md#__local)
- [\_\_nowWorld](IApp.md#__nowworld)
- [\_\_cameraWorld](IApp.md#__cameraworld)
- [\_\_nowWorldShapeBounds](IApp.md#__nowworldshapebounds)
- [\_\_localMatrix](IApp.md#__localmatrix)
- [\_\_localBoxBounds](IApp.md#__localboxbounds)
- [\_\_worldOpacity](IApp.md#__worldopacity)
- [worldTransform](IApp.md#worldtransform)
- [localTransform](IApp.md#localtransform)
- [\_\_scrollWorld](IApp.md#__scrollworld)
- [scrollWorldTransform](IApp.md#scrollworldtransform)
- [boxBounds](IApp.md#boxbounds)
- [renderBounds](IApp.md#renderbounds)
- [worldBoxBounds](IApp.md#worldboxbounds)
- [worldStrokeBounds](IApp.md#worldstrokebounds)
- [worldRenderBounds](IApp.md#worldrenderbounds)
- [worldOpacity](IApp.md#worldopacity)
- [\_\_level](IApp.md#__level)
- [\_\_tempNumber](IApp.md#__tempnumber)
- [\_\_worldFlipped](IApp.md#__worldflipped)
- [\_\_hasAutoLayout](IApp.md#__hasautolayout)
- [\_\_hasMotionPath](IApp.md#__hasmotionpath)
- [\_\_hasComplex](IApp.md#__hascomplex)
- [\_\_hasMask](IApp.md#__hasmask)
- [\_\_hasEraser](IApp.md#__haseraser)
- [\_\_hitCanvas](IApp.md#__hitcanvas)
- [\_\_flowBounds](IApp.md#__flowbounds)
- [\_\_widthGrow](IApp.md#__widthgrow)
- [\_\_heightGrow](IApp.md#__heightgrow)
- [\_\_hasGrow](IApp.md#__hasgrow)
- [\_\_onlyHitMask](IApp.md#__onlyhitmask)
- [\_\_ignoreHitWorld](IApp.md#__ignorehitworld)
- [\_\_inLazyBounds](IApp.md#__inlazybounds)
- [pathInputed](IApp.md#pathinputed)
- [isAutoWidth](IApp.md#isautowidth)
- [isAutoHeight](IApp.md#isautoheight)
- [destroyed](IApp.md#destroyed)
- [topChildren](IApp.md#topchildren)
- [innerId](IApp.md#innerid)
- [\_\_captureMap](IApp.md#__capturemap)
- [\_\_bubbleMap](IApp.md#__bubblemap)
- [\_\_hasLocalEvent](IApp.md#__haslocalevent)
- [\_\_hasWorldEvent](IApp.md#__hasworldevent)
- [cornerRadius](IApp.md#cornerradius)
- [cornerSmoothing](IApp.md#cornersmoothing)
- [fill](IApp.md#fill)
- [stroke](IApp.md#stroke)
- [startArrow](IApp.md#startarrow)
- [endArrow](IApp.md#endarrow)
- [strokeAlign](IApp.md#strokealign)
- [strokeWidth](IApp.md#strokewidth)
- [strokeScaleFixed](IApp.md#strokescalefixed)
- [strokeCap](IApp.md#strokecap)
- [strokeJoin](IApp.md#strokejoin)
- [dashPattern](IApp.md#dashpattern)
- [dashOffset](IApp.md#dashoffset)
- [miterLimit](IApp.md#miterlimit)
- [shadow](IApp.md#shadow)
- [innerShadow](IApp.md#innershadow)
- [blur](IApp.md#blur)
- [backgroundBlur](IApp.md#backgroundblur)
- [grayscale](IApp.md#grayscale)
- [\_\_](IApp.md#__)
- [childlessJSON](IApp.md#childlessjson)
- [leafer](IApp.md#leafer)
- [isFrame](IApp.md#isframe)
- [isOverflow](IApp.md#isoverflow)
- [useFastShadow](IApp.md#usefastshadow)
- [proxyData](IApp.md#proxydata)
- [\_\_proxyData](IApp.md#__proxydata)
- [animation](IApp.md#animation)
- [animationOut](IApp.md#animationout)
- [startLinker](IApp.md#startlinker)
- [endLinker](IApp.md#endlinker)
- [\_\_box](IApp.md#__box)
- [\_\_animate](IApp.md#__animate)
- [pen](IApp.md#pen)
- [transition](IApp.md#transition)
- [transitionOut](IApp.md#transitionout)
- [states](IApp.md#states)
- [state](IApp.md#state)
- [hoverStyle](IApp.md#hoverstyle)
- [pressStyle](IApp.md#pressstyle)
- [focusStyle](IApp.md#focusstyle)
- [selectedStyle](IApp.md#selectedstyle)
- [disabledStyle](IApp.md#disabledstyle)
- [placeholderStyle](IApp.md#placeholderstyle)
- [placeholderColor](IApp.md#placeholdercolor)
- [placeholderDelay](IApp.md#placeholderdelay)
- [editConfig](IApp.md#editconfig)
- [editOuter](IApp.md#editouter)
- [editInner](IApp.md#editinner)
- [children](IApp.md#children)
- [realCanvas](IApp.md#realcanvas)
- [isApp](IApp.md#isapp)
- [app](IApp.md#app)
- [parentApp](IApp.md#parentapp)
- [parent](IApp.md#parent)
- [zoomLayer](IApp.md#zoomlayer)
- [editor](IApp.md#editor)
- [ground](IApp.md#ground)
- [tree](IApp.md#tree)
- [sky](IApp.md#sky)

### Methods

- [init](IApp.md#init)
- [start](IApp.md#start)
- [stop](IApp.md#stop)
- [unlockLayout](IApp.md#unlocklayout)
- [lockLayout](IApp.md#locklayout)
- [requestRender](IApp.md#requestrender)
- [updateCursor](IApp.md#updatecursor)
- [resize](IApp.md#resize)
- [waitReady](IApp.md#waitready)
- [waitViewReady](IApp.md#waitviewready)
- [waitViewCompleted](IApp.md#waitviewcompleted)
- [zoom](IApp.md#zoom)
- [getValidMove](IApp.md#getvalidmove)
- [getValidScale](IApp.md#getvalidscale)
- [getWorldPointByClient](IApp.md#getworldpointbyclient)
- [getPagePointByClient](IApp.md#getpagepointbyclient)
- [getClientPointByWorld](IApp.md#getclientpointbyworld)
- [updateClientBounds](IApp.md#updateclientbounds)
- [receiveEvent](IApp.md#receiveevent)
- [resetCustom](IApp.md#resetcustom)
- [waitParent](IApp.md#waitparent)
- [waitLeafer](IApp.md#waitleafer)
- [nextRender](IApp.md#nextrender)
- [removeNextRender](IApp.md#removenextrender)
- [\_\_bindLeafer](IApp.md#__bindleafer)
- [setAttr](IApp.md#setattr)
- [getAttr](IApp.md#getattr)
- [getComputedAttr](IApp.md#getcomputedattr)
- [toString](IApp.md#tostring)
- [toSVG](IApp.md#tosvg)
- [\_\_SVG](IApp.md#__svg)
- [toHTML](IApp.md#tohtml)
- [\_\_setAttr](IApp.md#__setattr)
- [\_\_getAttr](IApp.md#__getattr)
- [setProxyAttr](IApp.md#setproxyattr)
- [getProxyAttr](IApp.md#getproxyattr)
- [focus](IApp.md#focus)
- [updateState](IApp.md#updatestate)
- [updateLayout](IApp.md#updatelayout)
- [forceUpdate](IApp.md#forceupdate)
- [forceRender](IApp.md#forcerender)
- [\_\_extraUpdate](IApp.md#__extraupdate)
- [\_\_updateWorldMatrix](IApp.md#__updateworldmatrix)
- [\_\_updateLocalMatrix](IApp.md#__updatelocalmatrix)
- [\_\_updateWorldBounds](IApp.md#__updateworldbounds)
- [\_\_updateLocalBounds](IApp.md#__updatelocalbounds)
- [\_\_updateLocalBoxBounds](IApp.md#__updatelocalboxbounds)
- [\_\_updateLocalStrokeBounds](IApp.md#__updatelocalstrokebounds)
- [\_\_updateLocalRenderBounds](IApp.md#__updatelocalrenderbounds)
- [\_\_updateContentBounds](IApp.md#__updatecontentbounds)
- [\_\_updateBoxBounds](IApp.md#__updateboxbounds)
- [\_\_updateStrokeBounds](IApp.md#__updatestrokebounds)
- [\_\_updateRenderBounds](IApp.md#__updaterenderbounds)
- [\_\_updateAutoLayout](IApp.md#__updateautolayout)
- [\_\_updateFlowLayout](IApp.md#__updateflowlayout)
- [\_\_updateNaturalSize](IApp.md#__updatenaturalsize)
- [\_\_updateStrokeSpread](IApp.md#__updatestrokespread)
- [\_\_updateRenderSpread](IApp.md#__updaterenderspread)
- [\_\_onUpdateSize](IApp.md#__onupdatesize)
- [\_\_updateEraser](IApp.md#__updateeraser)
- [\_\_updateMask](IApp.md#__updatemask)
- [\_\_renderMask](IApp.md#__rendermask)
- [\_\_renderEraser](IApp.md#__rendereraser)
- [\_\_getNowWorld](IApp.md#__getnowworld)
- [getClampRenderScale](IApp.md#getclamprenderscale)
- [getRenderScaleData](IApp.md#getrenderscaledata)
- [getTransform](IApp.md#gettransform)
- [getBounds](IApp.md#getbounds)
- [getLayoutBounds](IApp.md#getlayoutbounds)
- [getLayoutPoints](IApp.md#getlayoutpoints)
- [getWorldBounds](IApp.md#getworldbounds)
- [worldToLocal](IApp.md#worldtolocal)
- [localToWorld](IApp.md#localtoworld)
- [worldToInner](IApp.md#worldtoinner)
- [innerToWorld](IApp.md#innertoworld)
- [getBoxPoint](IApp.md#getboxpoint)
- [getBoxPointByInner](IApp.md#getboxpointbyinner)
- [getInnerPoint](IApp.md#getinnerpoint)
- [getInnerPointByBox](IApp.md#getinnerpointbybox)
- [getInnerPointByLocal](IApp.md#getinnerpointbylocal)
- [getLocalPoint](IApp.md#getlocalpoint)
- [getLocalPointByInner](IApp.md#getlocalpointbyinner)
- [getPagePoint](IApp.md#getpagepoint)
- [getWorldPoint](IApp.md#getworldpoint)
- [getWorldPointByBox](IApp.md#getworldpointbybox)
- [getWorldPointByLocal](IApp.md#getworldpointbylocal)
- [getWorldPointByPage](IApp.md#getworldpointbypage)
- [setTransform](IApp.md#settransform)
- [transform](IApp.md#transform)
- [move](IApp.md#move)
- [moveInner](IApp.md#moveinner)
- [scaleOf](IApp.md#scaleof)
- [rotateOf](IApp.md#rotateof)
- [skewOf](IApp.md#skewof)
- [transformWorld](IApp.md#transformworld)
- [moveWorld](IApp.md#moveworld)
- [scaleOfWorld](IApp.md#scaleofworld)
- [rotateOfWorld](IApp.md#rotateofworld)
- [skewOfWorld](IApp.md#skewofworld)
- [flip](IApp.md#flip)
- [scaleResize](IApp.md#scaleresize)
- [\_\_scaleResize](IApp.md#__scaleresize)
- [resizeWidth](IApp.md#resizewidth)
- [resizeHeight](IApp.md#resizeheight)
- [hit](IApp.md#hit)
- [\_\_hitWorld](IApp.md#__hitworld)
- [\_\_hit](IApp.md#__hit)
- [\_\_hitFill](IApp.md#__hitfill)
- [\_\_hitStroke](IApp.md#__hitstroke)
- [\_\_hitPixel](IApp.md#__hitpixel)
- [\_\_drawHitPath](IApp.md#__drawhitpath)
- [\_\_updateHitCanvas](IApp.md#__updatehitcanvas)
- [\_\_render](IApp.md#__render)
- [\_\_drawFast](IApp.md#__drawfast)
- [\_\_draw](IApp.md#__draw)
- [\_\_clip](IApp.md#__clip)
- [\_\_renderShape](IApp.md#__rendershape)
- [\_\_drawShape](IApp.md#__drawshape)
- [\_\_updateWorldOpacity](IApp.md#__updateworldopacity)
- [\_\_updateChange](IApp.md#__updatechange)
- [\_\_drawPath](IApp.md#__drawpath)
- [\_\_drawRenderPath](IApp.md#__drawrenderpath)
- [\_\_updatePath](IApp.md#__updatepath)
- [\_\_updateRenderPath](IApp.md#__updaterenderpath)
- [getMotionPathData](IApp.md#getmotionpathdata)
- [getMotionPoint](IApp.md#getmotionpoint)
- [getMotionTotal](IApp.md#getmotiontotal)
- [\_\_updateMotionPath](IApp.md#__updatemotionpath)
- [\_\_runAnimation](IApp.md#__runanimation)
- [\_\_emitLifeEvent](IApp.md#__emitlifeevent)
- [\_\_updateSortChildren](IApp.md#__updatesortchildren)
- [dropTo](IApp.md#dropto)
- [\_\_realSetAttr](IApp.md#__realsetattr)
- [emitPropertyEvent](IApp.md#emitpropertyevent)
- [destroyEventer](IApp.md#destroyeventer)
- [on](IApp.md#on)
- [off](IApp.md#off)
- [on\_](IApp.md#on_)
- [off\_](IApp.md#off_)
- [once](IApp.md#once)
- [emit](IApp.md#emit)
- [emitEvent](IApp.md#emitevent)
- [hasEvent](IApp.md#hasevent)
- [pick](IApp.md#pick)
- [add](IApp.md#add)
- [addAt](IApp.md#addat)
- [addAfter](IApp.md#addafter)
- [addBefore](IApp.md#addbefore)
- [addMany](IApp.md#addmany)
- [remove](IApp.md#remove)
- [removeAll](IApp.md#removeall)
- [clear](IApp.md#clear)
- [reset](IApp.md#reset)
- [set](IApp.md#set)
- [toJSON](IApp.md#tojson)
- [get](IApp.md#get)
- [createProxyData](IApp.md#createproxydata)
- [clearProxyData](IApp.md#clearproxydata)
- [find](IApp.md#find)
- [findTag](IApp.md#findtag)
- [findOne](IApp.md#findone)
- [findId](IApp.md#findid)
- [getPath](IApp.md#getpath)
- [getPathString](IApp.md#getpathstring)
- [asPath](IApp.md#aspath)
- [load](IApp.md#load)
- [\_\_drawPathByData](IApp.md#__drawpathbydata)
- [\_\_drawPathByBox](IApp.md#__drawpathbybox)
- [\_\_drawAfterFill](IApp.md#__drawafterfill)
- [\_\_drawContent](IApp.md#__drawcontent)
- [drawImagePlaceholder](IApp.md#drawimageplaceholder)
- [animate](IApp.md#animate)
- [killAnimate](IApp.md#killanimate)
- [export](IApp.md#export)
- [syncExport](IApp.md#syncexport)
- [clone](IApp.md#clone)
- [forEach](IApp.md#foreach)
- [onInit](IApp.md#oninit)
- [initType](IApp.md#inittype)
- [destroy](IApp.md#destroy)

## Properties

### mode

• **mode**: [`ILeaferMode`](../modules.md#ileafermode)

#### Inherited from

[ILeafer](ILeafer.md).[mode](ILeafer.md#mode)

#### Defined in

[src/leafer/packages/interface/src/app/ILeafer.ts:38](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/app/ILeafer.ts#L38)

___

### running

• **running**: `boolean`

#### Inherited from

[ILeafer](ILeafer.md).[running](ILeafer.md#running)

#### Defined in

[src/leafer/packages/interface/src/app/ILeafer.ts:40](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/app/ILeafer.ts#L40)

___

### created

• **created**: `boolean`

#### Inherited from

[ILeafer](ILeafer.md).[created](ILeafer.md#created)

#### Defined in

[src/leafer/packages/interface/src/app/ILeafer.ts:41](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/app/ILeafer.ts#L41)

___

### ready

• **ready**: `boolean`

#### Inherited from

[ILeafer](ILeafer.md).[ready](ILeafer.md#ready)

#### Defined in

[src/leafer/packages/interface/src/app/ILeafer.ts:42](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/app/ILeafer.ts#L42)

___

### viewReady

• **viewReady**: `boolean`

#### Inherited from

[ILeafer](ILeafer.md).[viewReady](ILeafer.md#viewready)

#### Defined in

[src/leafer/packages/interface/src/app/ILeafer.ts:43](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/app/ILeafer.ts#L43)

___

### imageReady

• **imageReady**: `boolean`

#### Inherited from

[ILeafer](ILeafer.md).[imageReady](ILeafer.md#imageready)

#### Defined in

[src/leafer/packages/interface/src/app/ILeafer.ts:44](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/app/ILeafer.ts#L44)

___

### viewCompleted

• **viewCompleted**: `boolean`

#### Inherited from

[ILeafer](ILeafer.md).[viewCompleted](ILeafer.md#viewcompleted)

#### Defined in

[src/leafer/packages/interface/src/app/ILeafer.ts:45](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/app/ILeafer.ts#L45)

___

### layoutLocked

• **layoutLocked**: `boolean`

#### Inherited from

[ILeafer](ILeafer.md).[layoutLocked](ILeafer.md#layoutlocked)

#### Defined in

[src/leafer/packages/interface/src/app/ILeafer.ts:46](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/app/ILeafer.ts#L46)

___

### transforming

• **transforming**: `boolean`

#### Inherited from

[ILeafer](ILeafer.md).[transforming](ILeafer.md#transforming)

#### Defined in

[src/leafer/packages/interface/src/app/ILeafer.ts:48](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/app/ILeafer.ts#L48)

___

### view

• `Readonly` **view**: `unknown`

#### Inherited from

[ILeafer](ILeafer.md).[view](ILeafer.md#view)

#### Defined in

[src/leafer/packages/interface/src/app/ILeafer.ts:50](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/app/ILeafer.ts#L50)

___

### canvas

• **canvas**: [`ILeaferCanvas`](ILeaferCanvas.md)

#### Inherited from

[ILeafer](ILeafer.md).[canvas](ILeafer.md#canvas)

#### Defined in

[src/leafer/packages/interface/src/app/ILeafer.ts:52](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/app/ILeafer.ts#L52)

___

### renderer

• **renderer**: [`IRenderer`](IRenderer.md)

#### Inherited from

[ILeafer](ILeafer.md).[renderer](ILeafer.md#renderer)

#### Defined in

[src/leafer/packages/interface/src/app/ILeafer.ts:53](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/app/ILeafer.ts#L53)

___

### watcher

• **watcher**: [`IWatcher`](IWatcher.md)

#### Inherited from

[ILeafer](ILeafer.md).[watcher](ILeafer.md#watcher)

#### Defined in

[src/leafer/packages/interface/src/app/ILeafer.ts:55](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/app/ILeafer.ts#L55)

___

### layouter

• **layouter**: [`ILayouter`](ILayouter.md)

#### Inherited from

[ILeafer](ILeafer.md).[layouter](ILeafer.md#layouter)

#### Defined in

[src/leafer/packages/interface/src/app/ILeafer.ts:56](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/app/ILeafer.ts#L56)

___

### selector

• `Optional` **selector**: [`ISelector`](ISelector.md)

#### Inherited from

[ILeafer](ILeafer.md).[selector](ILeafer.md#selector)

#### Defined in

[src/leafer/packages/interface/src/app/ILeafer.ts:58](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/app/ILeafer.ts#L58)

___

### interaction

• `Optional` **interaction**: [`IInteraction`](IInteraction.md)

#### Inherited from

[ILeafer](ILeafer.md).[interaction](ILeafer.md#interaction)

#### Defined in

[src/leafer/packages/interface/src/app/ILeafer.ts:59](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/app/ILeafer.ts#L59)

___

### canvasManager

• **canvasManager**: [`ICanvasManager`](ICanvasManager.md)

#### Inherited from

[ILeafer](ILeafer.md).[canvasManager](ILeafer.md#canvasmanager)

#### Defined in

[src/leafer/packages/interface/src/app/ILeafer.ts:61](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/app/ILeafer.ts#L61)

___

### hitCanvasManager

• `Optional` **hitCanvasManager**: [`IHitCanvasManager`](IHitCanvasManager.md)

#### Inherited from

[ILeafer](ILeafer.md).[hitCanvasManager](ILeafer.md#hitcanvasmanager)

#### Defined in

[src/leafer/packages/interface/src/app/ILeafer.ts:62](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/app/ILeafer.ts#L62)

___

### autoLayout

• `Optional` **autoLayout**: [`IAutoBounds`](IAutoBounds.md)

#### Inherited from

[ILeafer](ILeafer.md).[autoLayout](ILeafer.md#autolayout)

#### Defined in

[src/leafer/packages/interface/src/app/ILeafer.ts:64](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/app/ILeafer.ts#L64)

___

### lazyBounds

• **lazyBounds**: [`IBounds`](IBounds.md)

#### Inherited from

[ILeafer](ILeafer.md).[lazyBounds](ILeafer.md#lazybounds)

#### Defined in

[src/leafer/packages/interface/src/app/ILeafer.ts:65](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/app/ILeafer.ts#L65)

___

### config

• **config**: [`ILeaferConfig`](ILeaferConfig.md)

#### Inherited from

[ILeafer](ILeafer.md).[config](ILeafer.md#config)

#### Defined in

[src/leafer/packages/interface/src/app/ILeafer.ts:67](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/app/ILeafer.ts#L67)

___

### userConfig

• `Optional` **userConfig**: [`ILeaferConfig`](ILeaferConfig.md)

#### Inherited from

[ILeafer](ILeafer.md).[userConfig](ILeafer.md#userconfig)

#### Defined in

[src/leafer/packages/interface/src/app/ILeafer.ts:68](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/app/ILeafer.ts#L68)

___

### cacheId

• `Optional` **cacheId**: `boolean`

#### Inherited from

[ILeafer](ILeafer.md).[cacheId](ILeafer.md#cacheid)

#### Defined in

[src/leafer/packages/interface/src/app/ILeafer.ts:71](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/app/ILeafer.ts#L71)

___

### cacheInnerId

• `Optional` **cacheInnerId**: `boolean`

#### Inherited from

[ILeafer](ILeafer.md).[cacheInnerId](ILeafer.md#cacheinnerid)

#### Defined in

[src/leafer/packages/interface/src/app/ILeafer.ts:72](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/app/ILeafer.ts#L72)

___

### innerIdMap

• `Optional` **innerIdMap**: [`ILeafMap`](ILeafMap.md)

#### Inherited from

[ILeafer](ILeafer.md).[innerIdMap](ILeafer.md#inneridmap)

#### Defined in

[src/leafer/packages/interface/src/app/ILeafer.ts:73](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/app/ILeafer.ts#L73)

___

### idMap

• `Optional` **idMap**: [`ILeafMap`](ILeafMap.md)

#### Inherited from

[ILeafer](ILeafer.md).[idMap](ILeafer.md#idmap)

#### Defined in

[src/leafer/packages/interface/src/app/ILeafer.ts:74](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/app/ILeafer.ts#L74)

___

### cursorPoint

• `Readonly` **cursorPoint**: [`IPointData`](IPointData.md)

#### Inherited from

[ILeafer](ILeafer.md).[cursorPoint](ILeafer.md#cursorpoint)

#### Defined in

[src/leafer/packages/interface/src/app/ILeafer.ts:76](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/app/ILeafer.ts#L76)

___

### clientBounds

• `Readonly` **clientBounds**: [`IBoundsData`](IBoundsData.md)

#### Inherited from

[ILeafer](ILeafer.md).[clientBounds](ILeafer.md#clientbounds)

#### Defined in

[src/leafer/packages/interface/src/app/ILeafer.ts:77](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/app/ILeafer.ts#L77)

___

### leafs

• **leafs**: `number`

#### Inherited from

[ILeafer](ILeafer.md).[leafs](ILeafer.md#leafs)

#### Defined in

[src/leafer/packages/interface/src/app/ILeafer.ts:78](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/app/ILeafer.ts#L78)

___

### isPullDown

• `Optional` **isPullDown**: `boolean`

#### Inherited from

[ILeafer](ILeafer.md).[isPullDown](ILeafer.md#ispulldown)

#### Defined in

[src/leafer/packages/interface/src/app/ILeafer.ts:80](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/app/ILeafer.ts#L80)

___

### isReachDottom

• `Optional` **isReachDottom**: `boolean`

#### Inherited from

[ILeafer](ILeafer.md).[isReachDottom](ILeafer.md#isreachdottom)

#### Defined in

[src/leafer/packages/interface/src/app/ILeafer.ts:81](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/app/ILeafer.ts#L81)

___

### \_\_eventIds

• **\_\_eventIds**: [`IEventListenerId`](IEventListenerId.md)[]

#### Inherited from

[ILeafer](ILeafer.md).[__eventIds](ILeafer.md#__eventids)

#### Defined in

[src/leafer/packages/interface/src/app/ILeafer.ts:83](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/app/ILeafer.ts#L83)

___

### \_\_nextRenderWait

• **\_\_nextRenderWait**: [`IFunction`](IFunction.md)[]

#### Inherited from

[ILeafer](ILeafer.md).[__nextRenderWait](ILeafer.md#__nextrenderwait)

#### Defined in

[src/leafer/packages/interface/src/app/ILeafer.ts:84](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/app/ILeafer.ts#L84)

___

### id

• `Optional` **id**: `string`

#### Inherited from

[ILeafer](ILeafer.md).[id](ILeafer.md#id)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:221](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/display/ILeaf.ts#L221)

___

### name

• `Optional` **name**: `string`

#### Inherited from

[ILeafer](ILeafer.md).[name](ILeafer.md#name)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:222](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/display/ILeaf.ts#L222)

___

### className

• `Optional` **className**: `string`

#### Inherited from

[ILeafer](ILeafer.md).[className](ILeafer.md#classname)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:223](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/display/ILeaf.ts#L223)

___

### blendMode

• `Optional` **blendMode**: [`IBlendMode`](../modules.md#iblendmode)

#### Inherited from

[ILeafer](ILeafer.md).[blendMode](ILeafer.md#blendmode)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:225](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/display/ILeaf.ts#L225)

___

### opacity

• `Optional` **opacity**: `number`

#### Inherited from

[ILeafer](ILeafer.md).[opacity](ILeafer.md#opacity)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:227](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/display/ILeaf.ts#L227)

___

### visible

• `Optional` **visible**: `boolean` \| `0`

#### Inherited from

[ILeafer](ILeafer.md).[visible](ILeafer.md#visible)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:228](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/display/ILeaf.ts#L228)

___

### selected

• `Optional` **selected**: `boolean`

#### Inherited from

[ILeafer](ILeafer.md).[selected](ILeafer.md#selected)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:229](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/display/ILeaf.ts#L229)

___

### disabled

• `Optional` **disabled**: `boolean`

#### Inherited from

[ILeafer](ILeafer.md).[disabled](ILeafer.md#disabled)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:230](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/display/ILeaf.ts#L230)

___

### locked

• `Optional` **locked**: `boolean`

#### Inherited from

[ILeafer](ILeafer.md).[locked](ILeafer.md#locked)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:231](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/display/ILeaf.ts#L231)

___

### zIndex

• `Optional` **zIndex**: `number`

#### Inherited from

[ILeafer](ILeafer.md).[zIndex](ILeafer.md#zindex)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:232](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/display/ILeaf.ts#L232)

___

### dim

• `Optional` **dim**: `number` \| `boolean`

#### Inherited from

[ILeafer](ILeafer.md).[dim](ILeafer.md#dim)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:234](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/display/ILeaf.ts#L234)

___

### dimskip

• `Optional` **dimskip**: `boolean`

#### Inherited from

[ILeafer](ILeafer.md).[dimskip](ILeafer.md#dimskip)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:235](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/display/ILeaf.ts#L235)

___

### bright

• `Optional` **bright**: `boolean`

#### Inherited from

[ILeafer](ILeafer.md).[bright](ILeafer.md#bright)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:236](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/display/ILeaf.ts#L236)

___

### mask

• `Optional` **mask**: `boolean` \| [`IMaskType`](../modules.md#imasktype)

#### Inherited from

[ILeafer](ILeafer.md).[mask](ILeafer.md#mask)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:238](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/display/ILeaf.ts#L238)

___

### eraser

• `Optional` **eraser**: `boolean` \| [`IEraserType`](../modules.md#ierasertype)

#### Inherited from

[ILeafer](ILeafer.md).[eraser](ILeafer.md#eraser)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:239](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/display/ILeaf.ts#L239)

___

### filter

• `Optional` **filter**: [`IFilter`](IFilter.md) \| [`IFilter`](IFilter.md)[]

#### Inherited from

[ILeafer](ILeafer.md).[filter](ILeafer.md#filter)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:240](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/display/ILeaf.ts#L240)

___

### complex

• `Optional` **complex**: `boolean`

#### Inherited from

[ILeafer](ILeafer.md).[complex](ILeafer.md#complex)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:241](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/display/ILeaf.ts#L241)

___

### x

• `Optional` **x**: `number`

#### Inherited from

[ILeafer](ILeafer.md).[x](ILeafer.md#x)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:244](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/display/ILeaf.ts#L244)

___

### y

• `Optional` **y**: `number`

#### Inherited from

[ILeafer](ILeafer.md).[y](ILeafer.md#y)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:245](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/display/ILeaf.ts#L245)

___

### width

• `Optional` **width**: `number`

#### Inherited from

[ILeafer](ILeafer.md).[width](ILeafer.md#width)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:246](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/display/ILeaf.ts#L246)

___

### height

• `Optional` **height**: `number`

#### Inherited from

[ILeafer](ILeafer.md).[height](ILeafer.md#height)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:247](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/display/ILeaf.ts#L247)

___

### scaleX

• `Optional` **scaleX**: `number`

#### Inherited from

[ILeafer](ILeafer.md).[scaleX](ILeafer.md#scalex)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:248](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/display/ILeaf.ts#L248)

___

### scaleY

• `Optional` **scaleY**: `number`

#### Inherited from

[ILeafer](ILeafer.md).[scaleY](ILeafer.md#scaley)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:249](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/display/ILeaf.ts#L249)

___

### scaleFixed

• `Optional` **scaleFixed**: [`IScaleFixed`](../modules.md#iscalefixed)

#### Inherited from

[ILeafer](ILeafer.md).[scaleFixed](ILeafer.md#scalefixed)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:250](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/display/ILeaf.ts#L250)

___

### rotation

• `Optional` **rotation**: `number`

#### Inherited from

[ILeafer](ILeafer.md).[rotation](ILeafer.md#rotation)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:251](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/display/ILeaf.ts#L251)

___

### skewX

• `Optional` **skewX**: `number`

#### Inherited from

[ILeafer](ILeafer.md).[skewX](ILeafer.md#skewx)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:252](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/display/ILeaf.ts#L252)

___

### skewY

• `Optional` **skewY**: `number`

#### Inherited from

[ILeafer](ILeafer.md).[skewY](ILeafer.md#skewy)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:253](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/display/ILeaf.ts#L253)

___

### scale

• `Optional` **scale**: `number` \| [`IPointData`](IPointData.md)

#### Inherited from

[ILeafer](ILeafer.md).[scale](ILeafer.md#scale)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:255](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/display/ILeaf.ts#L255)

___

### offsetX

• `Optional` **offsetX**: `number`

#### Inherited from

[ILeafer](ILeafer.md).[offsetX](ILeafer.md#offsetx)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:257](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/display/ILeaf.ts#L257)

___

### offsetY

• `Optional` **offsetY**: `number`

#### Inherited from

[ILeafer](ILeafer.md).[offsetY](ILeafer.md#offsety)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:258](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/display/ILeaf.ts#L258)

___

### scrollX

• `Optional` **scrollX**: `number`

#### Inherited from

[ILeafer](ILeafer.md).[scrollX](ILeafer.md#scrollx)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:259](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/display/ILeaf.ts#L259)

___

### scrollY

• `Optional` **scrollY**: `number`

#### Inherited from

[ILeafer](ILeafer.md).[scrollY](ILeafer.md#scrolly)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:260](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/display/ILeaf.ts#L260)

___

### origin

• `Optional` **origin**: [`IUnitPointData`](IUnitPointData.md) \| [`IDirection`](../modules.md#idirection)

#### Inherited from

[ILeafer](ILeafer.md).[origin](ILeafer.md#origin)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:262](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/display/ILeaf.ts#L262)

___

### around

• `Optional` **around**: [`IUnitPointData`](IUnitPointData.md) \| [`IDirection`](../modules.md#idirection)

#### Inherited from

[ILeafer](ILeafer.md).[around](ILeafer.md#around)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:263](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/display/ILeaf.ts#L263)

___

### lazy

• `Optional` **lazy**: `boolean`

#### Inherited from

[ILeafer](ILeafer.md).[lazy](ILeafer.md#lazy)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:265](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/display/ILeaf.ts#L265)

___

### pixelRatio

• `Optional` **pixelRatio**: `number`

#### Inherited from

[ILeafer](ILeafer.md).[pixelRatio](ILeafer.md#pixelratio)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:266](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/display/ILeaf.ts#L266)

___

### renderSpread

• `Optional` **renderSpread**: [`IFourNumber`](../modules.md#ifournumber)

#### Inherited from

[ILeafer](ILeafer.md).[renderSpread](ILeafer.md#renderspread)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:268](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/display/ILeaf.ts#L268)

___

### path

• `Optional` **path**: `string` \| [`IPathCommandData`](../modules.md#ipathcommanddata) \| [`IPathCommandNode`](../modules.md#ipathcommandnode)[] \| [`IPathCommandObject`](../modules.md#ipathcommandobject)[]

#### Inherited from

[ILeafer](ILeafer.md).[path](ILeafer.md#path)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:270](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/display/ILeaf.ts#L270)

___

### windingRule

• `Optional` **windingRule**: [`IWindingRule`](../modules.md#iwindingrule)

#### Inherited from

[ILeafer](ILeafer.md).[windingRule](ILeafer.md#windingrule)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:271](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/display/ILeaf.ts#L271)

___

### closed

• `Optional` **closed**: `boolean`

#### Inherited from

[ILeafer](ILeafer.md).[closed](ILeafer.md#closed)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:272](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/display/ILeaf.ts#L272)

___

### flow

• `Optional` **flow**: [`IFlowType`](../modules.md#iflowtype)

#### Inherited from

[ILeafer](ILeafer.md).[flow](ILeafer.md#flow)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:275](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/display/ILeaf.ts#L275)

___

### padding

• `Optional` **padding**: [`IFourNumber`](../modules.md#ifournumber)

#### Inherited from

[ILeafer](ILeafer.md).[padding](ILeafer.md#padding)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:276](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/display/ILeaf.ts#L276)

___

### gap

• `Optional` **gap**: [`IGap`](../modules.md#igap) \| [`IPointGap`](IPointGap.md)

#### Inherited from

[ILeafer](ILeafer.md).[gap](ILeafer.md#gap)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:277](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/display/ILeaf.ts#L277)

___

### flowAlign

• `Optional` **flowAlign**: [`IFlowAxisAlign`](IFlowAxisAlign.md) \| [`IFlowAlign`](../modules.md#iflowalign)

#### Inherited from

[ILeafer](ILeafer.md).[flowAlign](ILeafer.md#flowalign)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:278](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/display/ILeaf.ts#L278)

___

### flowWrap

• `Optional` **flowWrap**: [`IFlowWrap`](../modules.md#iflowwrap)

#### Inherited from

[ILeafer](ILeafer.md).[flowWrap](ILeafer.md#flowwrap)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:279](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/display/ILeaf.ts#L279)

___

### itemBox

• `Optional` **itemBox**: [`IFlowBoxType`](../modules.md#iflowboxtype)

#### Inherited from

[ILeafer](ILeafer.md).[itemBox](ILeafer.md#itembox)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:280](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/display/ILeaf.ts#L280)

___

### inFlow

• `Optional` **inFlow**: `boolean`

#### Inherited from

[ILeafer](ILeafer.md).[inFlow](ILeafer.md#inflow)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:282](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/display/ILeaf.ts#L282)

___

### autoWidth

• `Optional` **autoWidth**: [`IAutoSize`](../modules.md#iautosize)

#### Inherited from

[ILeafer](ILeafer.md).[autoWidth](ILeafer.md#autowidth)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:283](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/display/ILeaf.ts#L283)

___

### autoHeight

• `Optional` **autoHeight**: [`IAutoSize`](../modules.md#iautosize)

#### Inherited from

[ILeafer](ILeafer.md).[autoHeight](ILeafer.md#autoheight)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:284](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/display/ILeaf.ts#L284)

___

### lockRatio

• `Optional` **lockRatio**: `boolean`

#### Inherited from

[ILeafer](ILeafer.md).[lockRatio](ILeafer.md#lockratio)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:285](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/display/ILeaf.ts#L285)

___

### autoBox

• `Optional` **autoBox**: [`IAutoBoxData`](IAutoBoxData.md) \| [`IConstraint`](IConstraint.md)

#### Inherited from

[ILeafer](ILeafer.md).[autoBox](ILeafer.md#autobox)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:286](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/display/ILeaf.ts#L286)

___

### widthRange

• `Optional` **widthRange**: [`IRangeSize`](IRangeSize.md)

#### Inherited from

[ILeafer](ILeafer.md).[widthRange](ILeafer.md#widthrange)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:288](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/display/ILeaf.ts#L288)

___

### heightRange

• `Optional` **heightRange**: [`IRangeSize`](IRangeSize.md)

#### Inherited from

[ILeafer](ILeafer.md).[heightRange](ILeafer.md#heightrange)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:289](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/display/ILeaf.ts#L289)

___

### draggable

• `Optional` **draggable**: `boolean` \| [`IAxis`](../modules.md#iaxis)

#### Inherited from

[ILeafer](ILeafer.md).[draggable](ILeafer.md#draggable)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:292](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/display/ILeaf.ts#L292)

___

### dragBounds

• `Optional` **dragBounds**: `"parent"` \| [`IBoundsData`](IBoundsData.md)

#### Inherited from

[ILeafer](ILeafer.md).[dragBounds](ILeafer.md#dragbounds)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:293](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/display/ILeaf.ts#L293)

___

### dragBoundsType

• `Optional` **dragBoundsType**: [`IDragBoundsType`](../modules.md#idragboundstype)

#### Inherited from

[ILeafer](ILeafer.md).[dragBoundsType](ILeafer.md#dragboundstype)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:294](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/display/ILeaf.ts#L294)

___

### editable

• `Optional` **editable**: `boolean`

#### Inherited from

[ILeafer](ILeafer.md).[editable](ILeafer.md#editable)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:296](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/display/ILeaf.ts#L296)

___

### hittable

• `Optional` **hittable**: `boolean`

#### Inherited from

[ILeafer](ILeafer.md).[hittable](ILeafer.md#hittable)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:298](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/display/ILeaf.ts#L298)

___

### hitFill

• `Optional` **hitFill**: [`IHitType`](../modules.md#ihittype)

#### Inherited from

[ILeafer](ILeafer.md).[hitFill](ILeafer.md#hitfill)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:299](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/display/ILeaf.ts#L299)

___

### hitStroke

• `Optional` **hitStroke**: [`IHitType`](../modules.md#ihittype)

#### Inherited from

[ILeafer](ILeafer.md).[hitStroke](ILeafer.md#hitstroke)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:300](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/display/ILeaf.ts#L300)

___

### hitBox

• `Optional` **hitBox**: `boolean`

#### Inherited from

[ILeafer](ILeafer.md).[hitBox](ILeafer.md#hitbox)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:301](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/display/ILeaf.ts#L301)

___

### hitChildren

• `Optional` **hitChildren**: `boolean`

#### Inherited from

[ILeafer](ILeafer.md).[hitChildren](ILeafer.md#hitchildren)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:302](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/display/ILeaf.ts#L302)

___

### hitSelf

• `Optional` **hitSelf**: `boolean`

#### Inherited from

[ILeafer](ILeafer.md).[hitSelf](ILeafer.md#hitself)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:303](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/display/ILeaf.ts#L303)

___

### hitRadius

• `Optional` **hitRadius**: `number`

#### Inherited from

[ILeafer](ILeafer.md).[hitRadius](ILeafer.md#hitradius)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:304](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/display/ILeaf.ts#L304)

___

### button

• `Optional` **button**: `boolean`

#### Inherited from

[ILeafer](ILeafer.md).[button](ILeafer.md#button)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:306](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/display/ILeaf.ts#L306)

___

### cursor

• `Optional` **cursor**: [`ICursorType`](../modules.md#icursortype) \| [`ICursorType`](../modules.md#icursortype)[]

#### Inherited from

[ILeafer](ILeafer.md).[cursor](ILeafer.md#cursor)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:307](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/display/ILeaf.ts#L307)

___

### motionPath

• `Optional` **motionPath**: `boolean`

#### Inherited from

[ILeafer](ILeafer.md).[motionPath](ILeafer.md#motionpath)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:309](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/display/ILeaf.ts#L309)

___

### motionPrecision

• `Optional` **motionPrecision**: `number`

#### Inherited from

[ILeafer](ILeafer.md).[motionPrecision](ILeafer.md#motionprecision)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:310](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/display/ILeaf.ts#L310)

___

### motion

• `Optional` **motion**: `number` \| [`IUnitData`](IUnitData.md)

#### Inherited from

[ILeafer](ILeafer.md).[motion](ILeafer.md#motion)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:312](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/display/ILeaf.ts#L312)

___

### motionRotation

• `Optional` **motionRotation**: `number` \| `boolean`

#### Inherited from

[ILeafer](ILeafer.md).[motionRotation](ILeafer.md#motionrotation)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:313](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/display/ILeaf.ts#L313)

___

### normalStyle

• `Optional` **normalStyle**: [`IObject`](IObject.md)

#### Inherited from

[ILeafer](ILeafer.md).[normalStyle](ILeafer.md#normalstyle)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:315](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/display/ILeaf.ts#L315)

___

### event

• `Optional` **event**: [`IEventParamsMap`](IEventParamsMap.md)

#### Inherited from

[ILeafer](ILeafer.md).[event](ILeafer.md#event)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:317](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/display/ILeaf.ts#L317)

___

### data

• `Optional` **data**: [`IObject`](IObject.md)

#### Inherited from

[ILeafer](ILeafer.md).[data](ILeafer.md#data)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:320](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/display/ILeaf.ts#L320)

___

### tag

• **tag**: `string`

#### Inherited from

[ILeafer](ILeafer.md).[tag](ILeafer.md#tag)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:467](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/display/ILeaf.ts#L467)

___

### \_\_tag

• `Readonly` **\_\_tag**: `string`

#### Inherited from

[ILeafer](ILeafer.md).[__tag](ILeafer.md#__tag)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:468](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/display/ILeaf.ts#L468)

___

### innerName

• `Readonly` **innerName**: `string`

#### Inherited from

[ILeafer](ILeafer.md).[innerName](ILeafer.md#innername)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:469](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/display/ILeaf.ts#L469)

___

### \_\_DataProcessor

• `Readonly` **\_\_DataProcessor**: [`IObject`](IObject.md)

#### Inherited from

[ILeafer](ILeafer.md).[__DataProcessor](ILeafer.md#__dataprocessor)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:471](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/display/ILeaf.ts#L471)

___

### \_\_LayoutProcessor

• `Readonly` **\_\_LayoutProcessor**: [`IObject`](IObject.md)

#### Inherited from

[ILeafer](ILeafer.md).[__LayoutProcessor](ILeafer.md#__layoutprocessor)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:472](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/display/ILeaf.ts#L472)

___

### leaferIsCreated

• `Readonly` **leaferIsCreated**: `boolean`

#### Inherited from

[ILeafer](ILeafer.md).[leaferIsCreated](ILeafer.md#leaferiscreated)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:479](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/display/ILeaf.ts#L479)

___

### leaferIsReady

• `Readonly` **leaferIsReady**: `boolean`

#### Inherited from

[ILeafer](ILeafer.md).[leaferIsReady](ILeafer.md#leaferisready)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:480](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/display/ILeaf.ts#L480)

___

### isLeafer

• `Optional` `Readonly` **isLeafer**: `boolean`

#### Inherited from

[ILeafer](ILeafer.md).[isLeafer](ILeafer.md#isleafer)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:483](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/display/ILeaf.ts#L483)

___

### isBranch

• `Optional` `Readonly` **isBranch**: `boolean`

#### Inherited from

[ILeafer](ILeafer.md).[isBranch](ILeafer.md#isbranch)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:484](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/display/ILeaf.ts#L484)

___

### isBranchLeaf

• `Optional` `Readonly` **isBranchLeaf**: `boolean`

#### Inherited from

[ILeafer](ILeafer.md).[isBranchLeaf](ILeafer.md#isbranchleaf)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:485](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/display/ILeaf.ts#L485)

___

### isOutside

• `Optional` `Readonly` **isOutside**: `boolean`

#### Inherited from

[ILeafer](ILeafer.md).[isOutside](ILeafer.md#isoutside)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:486](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/display/ILeaf.ts#L486)

___

### skipJSON

• `Optional` **skipJSON**: `boolean`

#### Inherited from

[ILeafer](ILeafer.md).[skipJSON](ILeafer.md#skipjson)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:493](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/display/ILeaf.ts#L493)

___

### syncEventer

• `Optional` **syncEventer**: [`ILeaf`](ILeaf.md)

#### Inherited from

[ILeafer](ILeafer.md).[syncEventer](ILeafer.md#synceventer)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:494](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/display/ILeaf.ts#L494)

___

### lockNormalStyle

• `Optional` **lockNormalStyle**: `boolean`

#### Inherited from

[ILeafer](ILeafer.md).[lockNormalStyle](ILeafer.md#locknormalstyle)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:495](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/display/ILeaf.ts#L495)

___

### \_\_layout

• **\_\_layout**: [`ILeafLayout`](ILeafLayout.md)

#### Inherited from

[ILeafer](ILeafer.md).[__layout](ILeafer.md#__layout)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:497](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/display/ILeaf.ts#L497)

___

### \_\_world

• **\_\_world**: [`IMatrixWithBoundsScaleData`](IMatrixWithBoundsScaleData.md)

#### Inherited from

[ILeafer](ILeafer.md).[__world](ILeafer.md#__world)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:499](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/display/ILeaf.ts#L499)

___

### \_\_local

• `Optional` **\_\_local**: [`IMatrixWithBoundsData`](IMatrixWithBoundsData.md)

#### Inherited from

[ILeafer](ILeafer.md).[__local](ILeafer.md#__local)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:500](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/display/ILeaf.ts#L500)

___

### \_\_nowWorld

• `Optional` **\_\_nowWorld**: [`IMatrixWithBoundsScaleData`](IMatrixWithBoundsScaleData.md)

#### Inherited from

[ILeafer](ILeafer.md).[__nowWorld](ILeafer.md#__nowworld)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:502](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/display/ILeaf.ts#L502)

___

### \_\_cameraWorld

• `Optional` **\_\_cameraWorld**: [`IMatrixWithBoundsScaleData`](IMatrixWithBoundsScaleData.md)

#### Inherited from

[ILeafer](ILeafer.md).[__cameraWorld](ILeafer.md#__cameraworld)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:503](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/display/ILeaf.ts#L503)

___

### \_\_nowWorldShapeBounds

• `Optional` **\_\_nowWorldShapeBounds**: [`IBoundsData`](IBoundsData.md)

#### Inherited from

[ILeafer](ILeafer.md).[__nowWorldShapeBounds](ILeafer.md#__nowworldshapebounds)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:505](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/display/ILeaf.ts#L505)

___

### \_\_localMatrix

• `Readonly` **\_\_localMatrix**: [`IMatrixData`](IMatrixData.md)

#### Inherited from

[ILeafer](ILeafer.md).[__localMatrix](ILeafer.md#__localmatrix)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:507](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/display/ILeaf.ts#L507)

___

### \_\_localBoxBounds

• `Readonly` **\_\_localBoxBounds**: [`IBoundsData`](IBoundsData.md)

#### Inherited from

[ILeafer](ILeafer.md).[__localBoxBounds](ILeafer.md#__localboxbounds)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:508](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/display/ILeaf.ts#L508)

___

### \_\_worldOpacity

• **\_\_worldOpacity**: `number`

#### Inherited from

[ILeafer](ILeafer.md).[__worldOpacity](ILeafer.md#__worldopacity)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:510](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/display/ILeaf.ts#L510)

___

### worldTransform

• `Readonly` **worldTransform**: [`IMatrixWithScaleData`](IMatrixWithScaleData.md)

#### Inherited from

[ILeafer](ILeafer.md).[worldTransform](ILeafer.md#worldtransform)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:512](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/display/ILeaf.ts#L512)

___

### localTransform

• `Readonly` **localTransform**: [`IMatrixData`](IMatrixData.md)

#### Inherited from

[ILeafer](ILeafer.md).[localTransform](ILeafer.md#localtransform)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:513](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/display/ILeaf.ts#L513)

___

### \_\_scrollWorld

• `Optional` **\_\_scrollWorld**: [`IMatrixWithBoundsScaleData`](IMatrixWithBoundsScaleData.md)

#### Inherited from

[ILeafer](ILeafer.md).[__scrollWorld](ILeafer.md#__scrollworld)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:515](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/display/ILeaf.ts#L515)

___

### scrollWorldTransform

• `Readonly` **scrollWorldTransform**: [`IMatrixWithScaleData`](IMatrixWithScaleData.md)

#### Inherited from

[ILeafer](ILeafer.md).[scrollWorldTransform](ILeafer.md#scrollworldtransform)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:516](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/display/ILeaf.ts#L516)

___

### boxBounds

• `Readonly` **boxBounds**: [`IBoundsData`](IBoundsData.md)

#### Inherited from

[ILeafer](ILeafer.md).[boxBounds](ILeafer.md#boxbounds)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:518](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/display/ILeaf.ts#L518)

___

### renderBounds

• `Readonly` **renderBounds**: [`IBoundsData`](IBoundsData.md)

#### Inherited from

[ILeafer](ILeafer.md).[renderBounds](ILeafer.md#renderbounds)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:519](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/display/ILeaf.ts#L519)

___

### worldBoxBounds

• `Readonly` **worldBoxBounds**: [`IBoundsData`](IBoundsData.md)

#### Inherited from

[ILeafer](ILeafer.md).[worldBoxBounds](ILeafer.md#worldboxbounds)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:520](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/display/ILeaf.ts#L520)

___

### worldStrokeBounds

• `Readonly` **worldStrokeBounds**: [`IBoundsData`](IBoundsData.md)

#### Inherited from

[ILeafer](ILeafer.md).[worldStrokeBounds](ILeafer.md#worldstrokebounds)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:521](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/display/ILeaf.ts#L521)

___

### worldRenderBounds

• `Readonly` **worldRenderBounds**: [`IBoundsData`](IBoundsData.md)

#### Inherited from

[ILeafer](ILeafer.md).[worldRenderBounds](ILeafer.md#worldrenderbounds)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:522](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/display/ILeaf.ts#L522)

___

### worldOpacity

• `Readonly` **worldOpacity**: `number`

#### Inherited from

[ILeafer](ILeafer.md).[worldOpacity](ILeafer.md#worldopacity)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:524](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/display/ILeaf.ts#L524)

___

### \_\_level

• **\_\_level**: `number`

#### Inherited from

[ILeafer](ILeafer.md).[__level](ILeafer.md#__level)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:526](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/display/ILeaf.ts#L526)

___

### \_\_tempNumber

• `Optional` **\_\_tempNumber**: `number`

#### Inherited from

[ILeafer](ILeafer.md).[__tempNumber](ILeafer.md#__tempnumber)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:527](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/display/ILeaf.ts#L527)

___

### \_\_worldFlipped

• `Readonly` **\_\_worldFlipped**: `boolean`

#### Inherited from

[ILeafer](ILeafer.md).[__worldFlipped](ILeafer.md#__worldflipped)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:529](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/display/ILeaf.ts#L529)

___

### \_\_hasAutoLayout

• `Optional` **\_\_hasAutoLayout**: `boolean`

#### Inherited from

[ILeafer](ILeafer.md).[__hasAutoLayout](ILeafer.md#__hasautolayout)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:534](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/display/ILeaf.ts#L534)

___

### \_\_hasMotionPath

• `Optional` **\_\_hasMotionPath**: `boolean`

#### Inherited from

[ILeafer](ILeafer.md).[__hasMotionPath](ILeafer.md#__hasmotionpath)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:535](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/display/ILeaf.ts#L535)

___

### \_\_hasComplex

• `Optional` **\_\_hasComplex**: `boolean`

#### Inherited from

[ILeafer](ILeafer.md).[__hasComplex](ILeafer.md#__hascomplex)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:536](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/display/ILeaf.ts#L536)

___

### \_\_hasMask

• `Optional` **\_\_hasMask**: `boolean`

#### Inherited from

[ILeafer](ILeafer.md).[__hasMask](ILeafer.md#__hasmask)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:538](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/display/ILeaf.ts#L538)

___

### \_\_hasEraser

• `Optional` **\_\_hasEraser**: `boolean`

#### Inherited from

[ILeafer](ILeafer.md).[__hasEraser](ILeafer.md#__haseraser)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:539](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/display/ILeaf.ts#L539)

___

### \_\_hitCanvas

• `Optional` **\_\_hitCanvas**: [`IHitCanvas`](IHitCanvas.md)

#### Inherited from

[ILeafer](ILeafer.md).[__hitCanvas](ILeafer.md#__hitcanvas)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:540](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/display/ILeaf.ts#L540)

___

### \_\_flowBounds

• `Optional` **\_\_flowBounds**: [`IBoundsData`](IBoundsData.md)

#### Inherited from

[ILeafer](ILeafer.md).[__flowBounds](ILeafer.md#__flowbounds)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:542](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/display/ILeaf.ts#L542)

___

### \_\_widthGrow

• `Optional` **\_\_widthGrow**: `number`

#### Inherited from

[ILeafer](ILeafer.md).[__widthGrow](ILeafer.md#__widthgrow)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:543](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/display/ILeaf.ts#L543)

___

### \_\_heightGrow

• `Optional` **\_\_heightGrow**: `number`

#### Inherited from

[ILeafer](ILeafer.md).[__heightGrow](ILeafer.md#__heightgrow)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:544](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/display/ILeaf.ts#L544)

___

### \_\_hasGrow

• `Optional` **\_\_hasGrow**: `boolean`

#### Inherited from

[ILeafer](ILeafer.md).[__hasGrow](ILeafer.md#__hasgrow)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:545](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/display/ILeaf.ts#L545)

___

### \_\_onlyHitMask

• `Readonly` **\_\_onlyHitMask**: `boolean`

#### Inherited from

[ILeafer](ILeafer.md).[__onlyHitMask](ILeafer.md#__onlyhitmask)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:547](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/display/ILeaf.ts#L547)

___

### \_\_ignoreHitWorld

• `Readonly` **\_\_ignoreHitWorld**: `boolean`

#### Inherited from

[ILeafer](ILeafer.md).[__ignoreHitWorld](ILeafer.md#__ignorehitworld)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:548](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/display/ILeaf.ts#L548)

___

### \_\_inLazyBounds

• `Readonly` **\_\_inLazyBounds**: `boolean`

#### Inherited from

[ILeafer](ILeafer.md).[__inLazyBounds](ILeafer.md#__inlazybounds)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:549](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/display/ILeaf.ts#L549)

___

### pathInputed

• `Readonly` **pathInputed**: `boolean`

#### Inherited from

[ILeafer](ILeafer.md).[pathInputed](ILeafer.md#pathinputed)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:551](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/display/ILeaf.ts#L551)

___

### isAutoWidth

• `Optional` `Readonly` **isAutoWidth**: `boolean`

#### Inherited from

[ILeafer](ILeafer.md).[isAutoWidth](ILeafer.md#isautowidth)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:553](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/display/ILeaf.ts#L553)

___

### isAutoHeight

• `Optional` `Readonly` **isAutoHeight**: `boolean`

#### Inherited from

[ILeafer](ILeafer.md).[isAutoHeight](ILeafer.md#isautoheight)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:554](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/display/ILeaf.ts#L554)

___

### destroyed

• **destroyed**: `boolean`

#### Inherited from

[ILeafer](ILeafer.md).[destroyed](ILeafer.md#destroyed)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:556](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/display/ILeaf.ts#L556)

___

### topChildren

• `Optional` **topChildren**: [`ILeaf`](ILeaf.md)[]

#### Inherited from

[ILeafer](ILeafer.md).[topChildren](ILeafer.md#topchildren)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:733](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/display/ILeaf.ts#L733)

___

### innerId

• `Readonly` **innerId**: `number`

#### Inherited from

[ILeafer](ILeafer.md).[innerId](ILeafer.md#innerid)

#### Defined in

[src/leafer/packages/interface/src/event/IEventer.ts:41](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/event/IEventer.ts#L41)

___

### \_\_captureMap

• `Optional` **\_\_captureMap**: [`IEventListenerMap`](IEventListenerMap.md)

#### Inherited from

[ILeafer](ILeafer.md).[__captureMap](ILeafer.md#__capturemap)

#### Defined in

[src/leafer/packages/interface/src/event/IEventer.ts:42](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/event/IEventer.ts#L42)

___

### \_\_bubbleMap

• `Optional` **\_\_bubbleMap**: [`IEventListenerMap`](IEventListenerMap.md)

#### Inherited from

[ILeafer](ILeafer.md).[__bubbleMap](ILeafer.md#__bubblemap)

#### Defined in

[src/leafer/packages/interface/src/event/IEventer.ts:43](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/event/IEventer.ts#L43)

___

### \_\_hasLocalEvent

• `Optional` **\_\_hasLocalEvent**: `boolean`

#### Inherited from

[ILeafer](ILeafer.md).[__hasLocalEvent](ILeafer.md#__haslocalevent)

#### Defined in

[src/leafer/packages/interface/src/event/IEventer.ts:44](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/event/IEventer.ts#L44)

___

### \_\_hasWorldEvent

• `Optional` **\_\_hasWorldEvent**: `boolean`

#### Inherited from

[ILeafer](ILeafer.md).[__hasWorldEvent](ILeafer.md#__hasworldevent)

#### Defined in

[src/leafer/packages/interface/src/event/IEventer.ts:45](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/event/IEventer.ts#L45)

___

### cornerRadius

• `Optional` **cornerRadius**: `string` \| [`IFourNumber`](../modules.md#ifournumber)

#### Inherited from

[ILeafer](ILeafer.md).[cornerRadius](ILeafer.md#cornerradius)

#### Defined in

[src/ui/packages/interface/src/ICommonAttr.ts:9](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/interface/src/ICommonAttr.ts#L9)

___

### cornerSmoothing

• `Optional` **cornerSmoothing**: `number`

#### Inherited from

[ILeafer](ILeafer.md).[cornerSmoothing](ILeafer.md#cornersmoothing)

#### Defined in

[src/ui/packages/interface/src/ICommonAttr.ts:10](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/interface/src/ICommonAttr.ts#L10)

___

### fill

• `Optional` **fill**: [`IFill`](../modules.md#ifill)

#### Inherited from

[ILeafer](ILeafer.md).[fill](ILeafer.md#fill)

#### Defined in

[src/ui/packages/interface/src/ICommonAttr.ts:23](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/interface/src/ICommonAttr.ts#L23)

___

### stroke

• `Optional` **stroke**: [`IStroke`](../modules.md#istroke)

#### Inherited from

[ILeafer](ILeafer.md).[stroke](ILeafer.md#stroke)

#### Defined in

[src/ui/packages/interface/src/ICommonAttr.ts:40](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/interface/src/ICommonAttr.ts#L40)

___

### startArrow

• `Optional` **startArrow**: [`IArrowStyle`](../modules.md#iarrowstyle)

#### Inherited from

[ILeafer](ILeafer.md).[startArrow](ILeafer.md#startarrow)

#### Defined in

[src/ui/packages/interface/src/ICommonAttr.ts:42](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/interface/src/ICommonAttr.ts#L42)

___

### endArrow

• `Optional` **endArrow**: [`IArrowStyle`](../modules.md#iarrowstyle)

#### Inherited from

[ILeafer](ILeafer.md).[endArrow](ILeafer.md#endarrow)

#### Defined in

[src/ui/packages/interface/src/ICommonAttr.ts:43](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/interface/src/ICommonAttr.ts#L43)

___

### strokeAlign

• `Optional` **strokeAlign**: [`IStrokeAlign`](../modules.md#istrokealign)

#### Inherited from

[ILeafer](ILeafer.md).[strokeAlign](ILeafer.md#strokealign)

#### Defined in

[src/ui/packages/interface/src/ICommonAttr.ts:54](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/interface/src/ICommonAttr.ts#L54)

___

### strokeWidth

• `Optional` **strokeWidth**: `string` \| [`IFourNumber`](../modules.md#ifournumber)

#### Inherited from

[ILeafer](ILeafer.md).[strokeWidth](ILeafer.md#strokewidth)

#### Defined in

[src/ui/packages/interface/src/ICommonAttr.ts:55](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/interface/src/ICommonAttr.ts#L55)

___

### strokeScaleFixed

• `Optional` **strokeScaleFixed**: [`IScaleFixed`](../modules.md#iscalefixed)

#### Inherited from

[ILeafer](ILeafer.md).[strokeScaleFixed](ILeafer.md#strokescalefixed)

#### Defined in

[src/ui/packages/interface/src/ICommonAttr.ts:56](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/interface/src/ICommonAttr.ts#L56)

___

### strokeCap

• `Optional` **strokeCap**: [`IStrokeCap`](../modules.md#istrokecap)

#### Inherited from

[ILeafer](ILeafer.md).[strokeCap](ILeafer.md#strokecap)

#### Defined in

[src/ui/packages/interface/src/ICommonAttr.ts:57](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/interface/src/ICommonAttr.ts#L57)

___

### strokeJoin

• `Optional` **strokeJoin**: [`IStrokeJoin`](../modules.md#istrokejoin)

#### Inherited from

[ILeafer](ILeafer.md).[strokeJoin](ILeafer.md#strokejoin)

#### Defined in

[src/ui/packages/interface/src/ICommonAttr.ts:58](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/interface/src/ICommonAttr.ts#L58)

___

### dashPattern

• `Optional` **dashPattern**: `string` \| `number`[]

#### Inherited from

[ILeafer](ILeafer.md).[dashPattern](ILeafer.md#dashpattern)

#### Defined in

[src/ui/packages/interface/src/ICommonAttr.ts:59](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/interface/src/ICommonAttr.ts#L59)

___

### dashOffset

• `Optional` **dashOffset**: `number`

#### Inherited from

[ILeafer](ILeafer.md).[dashOffset](ILeafer.md#dashoffset)

#### Defined in

[src/ui/packages/interface/src/ICommonAttr.ts:60](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/interface/src/ICommonAttr.ts#L60)

___

### miterLimit

• `Optional` **miterLimit**: `number`

#### Inherited from

[ILeafer](ILeafer.md).[miterLimit](ILeafer.md#miterlimit)

#### Defined in

[src/ui/packages/interface/src/ICommonAttr.ts:61](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/interface/src/ICommonAttr.ts#L61)

___

### shadow

• `Optional` **shadow**: `string` \| [`IShadowEffect`](IShadowEffect.md) \| [`IShadowEffect`](IShadowEffect.md)[]

#### Inherited from

[ILeafer](ILeafer.md).[shadow](ILeafer.md#shadow)

#### Defined in

[src/ui/packages/interface/src/ICommonAttr.ts:150](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/interface/src/ICommonAttr.ts#L150)

___

### innerShadow

• `Optional` **innerShadow**: `string` \| [`IShadowEffect`](IShadowEffect.md) \| [`IShadowEffect`](IShadowEffect.md)[]

#### Inherited from

[ILeafer](ILeafer.md).[innerShadow](ILeafer.md#innershadow)

#### Defined in

[src/ui/packages/interface/src/ICommonAttr.ts:151](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/interface/src/ICommonAttr.ts#L151)

___

### blur

• `Optional` **blur**: `number` \| [`IBlurEffect`](IBlurEffect.md)

#### Inherited from

[ILeafer](ILeafer.md).[blur](ILeafer.md#blur)

#### Defined in

[src/ui/packages/interface/src/ICommonAttr.ts:152](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/interface/src/ICommonAttr.ts#L152)

___

### backgroundBlur

• `Optional` **backgroundBlur**: `number` \| [`IBlurEffect`](IBlurEffect.md)

#### Inherited from

[ILeafer](ILeafer.md).[backgroundBlur](ILeafer.md#backgroundblur)

#### Defined in

[src/ui/packages/interface/src/ICommonAttr.ts:153](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/interface/src/ICommonAttr.ts#L153)

___

### grayscale

• `Optional` **grayscale**: `number` \| [`IGrayscaleEffect`](IGrayscaleEffect.md)

#### Inherited from

[ILeafer](ILeafer.md).[grayscale](ILeafer.md#grayscale)

#### Defined in

[src/ui/packages/interface/src/ICommonAttr.ts:154](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/interface/src/ICommonAttr.ts#L154)

___

### \_\_

• **\_\_**: [`IGroupData`](IGroupData.md)

#### Inherited from

[ILeafer](ILeafer.md).[__](ILeafer.md#__)

#### Defined in

[src/ui/packages/interface/src/IUI.ts:466](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/interface/src/IUI.ts#L466)

___

### childlessJSON

• `Optional` **childlessJSON**: `boolean`

#### Inherited from

[ILeafer](ILeafer.md).[childlessJSON](ILeafer.md#childlessjson)

#### Defined in

[src/ui/packages/interface/src/IUI.ts:468](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/interface/src/IUI.ts#L468)

___

### leafer

• `Optional` **leafer**: [`ILeafer`](ILeafer.md)

#### Inherited from

[ILeafer](ILeafer.md).[leafer](ILeafer.md#leafer)

#### Defined in

[src/ui/packages/interface/src/IUI.ts:488](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/interface/src/IUI.ts#L488)

___

### isFrame

• `Optional` `Readonly` **isFrame**: `boolean`

#### Inherited from

[ILeafer](ILeafer.md).[isFrame](ILeafer.md#isframe)

#### Defined in

[src/ui/packages/interface/src/IUI.ts:491](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/interface/src/IUI.ts#L491)

___

### isOverflow

• `Optional` **isOverflow**: `boolean`

#### Inherited from

[ILeafer](ILeafer.md).[isOverflow](ILeafer.md#isoverflow)

#### Defined in

[src/ui/packages/interface/src/IUI.ts:492](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/interface/src/IUI.ts#L492)

___

### useFastShadow

• `Optional` **useFastShadow**: `boolean`

#### Inherited from

[ILeafer](ILeafer.md).[useFastShadow](ILeafer.md#usefastshadow)

#### Defined in

[src/ui/packages/interface/src/IUI.ts:493](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/interface/src/IUI.ts#L493)

___

### proxyData

• `Optional` **proxyData**: [`IUIInputData`](IUIInputData.md)

#### Inherited from

[ILeafer](ILeafer.md).[proxyData](ILeafer.md#proxydata)

#### Defined in

[src/ui/packages/interface/src/IUI.ts:495](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/interface/src/IUI.ts#L495)

___

### \_\_proxyData

• `Optional` **\_\_proxyData**: [`IUIInputData`](IUIInputData.md)

#### Inherited from

[ILeafer](ILeafer.md).[__proxyData](ILeafer.md#__proxydata)

#### Defined in

[src/ui/packages/interface/src/IUI.ts:496](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/interface/src/IUI.ts#L496)

___

### animation

• `Optional` **animation**: [`IAnimation`](../modules.md#ianimation) \| [`IAnimation`](../modules.md#ianimation)[]

#### Inherited from

[ILeafer](ILeafer.md).[animation](ILeafer.md#animation)

#### Defined in

[src/ui/packages/interface/src/IUI.ts:498](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/interface/src/IUI.ts#L498)

___

### animationOut

• `Optional` **animationOut**: [`IAnimation`](../modules.md#ianimation) \| [`IAnimation`](../modules.md#ianimation)[]

#### Inherited from

[ILeafer](ILeafer.md).[animationOut](ILeafer.md#animationout)

#### Defined in

[src/ui/packages/interface/src/IUI.ts:499](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/interface/src/IUI.ts#L499)

___

### startLinker

• `Optional` **startLinker**: [`ILinker`](ILinker.md)[]

#### Inherited from

[ILeafer](ILeafer.md).[startLinker](ILeafer.md#startlinker)

#### Defined in

[src/ui/packages/interface/src/IUI.ts:503](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/interface/src/IUI.ts#L503)

___

### endLinker

• `Optional` **endLinker**: [`ILinker`](ILinker.md)[]

#### Inherited from

[ILeafer](ILeafer.md).[endLinker](ILeafer.md#endlinker)

#### Defined in

[src/ui/packages/interface/src/IUI.ts:504](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/interface/src/IUI.ts#L504)

___

### \_\_box

• `Optional` **\_\_box**: [`IUI`](IUI.md)

#### Inherited from

[ILeafer](ILeafer.md).[__box](ILeafer.md#__box)

#### Defined in

[src/ui/packages/interface/src/IUI.ts:506](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/interface/src/IUI.ts#L506)

___

### \_\_animate

• `Optional` **\_\_animate**: [`IAnimate`](IAnimate.md)

#### Inherited from

[ILeafer](ILeafer.md).[__animate](ILeafer.md#__animate)

#### Defined in

[src/ui/packages/interface/src/IUI.ts:507](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/interface/src/IUI.ts#L507)

___

### pen

• `Readonly` **pen**: [`IPathCreator`](IPathCreator.md)

#### Inherited from

[ILeafer](ILeafer.md).[pen](ILeafer.md#pen)

#### Defined in

[src/ui/packages/interface/src/IUI.ts:509](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/interface/src/IUI.ts#L509)

___

### transition

• `Optional` **transition**: [`ITransition`](../modules.md#itransition)

#### Inherited from

[ILeafer](ILeafer.md).[transition](ILeafer.md#transition)

#### Defined in

[src/ui/packages/interface/src/IUI.ts:566](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/interface/src/IUI.ts#L566)

___

### transitionOut

• `Optional` **transitionOut**: [`ITransition`](../modules.md#itransition)

#### Inherited from

[ILeafer](ILeafer.md).[transitionOut](ILeafer.md#transitionout)

#### Defined in

[src/ui/packages/interface/src/IUI.ts:567](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/interface/src/IUI.ts#L567)

___

### states

• `Optional` **states**: [`IStates`](IStates.md)

#### Inherited from

[ILeafer](ILeafer.md).[states](ILeafer.md#states)

#### Defined in

[src/ui/packages/interface/src/IUI.ts:569](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/interface/src/IUI.ts#L569)

___

### state

• `Optional` **state**: `string`

#### Inherited from

[ILeafer](ILeafer.md).[state](ILeafer.md#state)

#### Defined in

[src/ui/packages/interface/src/IUI.ts:570](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/interface/src/IUI.ts#L570)

___

### hoverStyle

• `Optional` **hoverStyle**: [`IStateStyle`](IStateStyle.md)

#### Inherited from

[ILeafer](ILeafer.md).[hoverStyle](ILeafer.md#hoverstyle)

#### Defined in

[src/ui/packages/interface/src/IUI.ts:572](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/interface/src/IUI.ts#L572)

___

### pressStyle

• `Optional` **pressStyle**: [`IStateStyle`](IStateStyle.md)

#### Inherited from

[ILeafer](ILeafer.md).[pressStyle](ILeafer.md#pressstyle)

#### Defined in

[src/ui/packages/interface/src/IUI.ts:573](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/interface/src/IUI.ts#L573)

___

### focusStyle

• `Optional` **focusStyle**: [`IStateStyle`](IStateStyle.md)

#### Inherited from

[ILeafer](ILeafer.md).[focusStyle](ILeafer.md#focusstyle)

#### Defined in

[src/ui/packages/interface/src/IUI.ts:574](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/interface/src/IUI.ts#L574)

___

### selectedStyle

• `Optional` **selectedStyle**: [`IStateStyle`](IStateStyle.md)

#### Inherited from

[ILeafer](ILeafer.md).[selectedStyle](ILeafer.md#selectedstyle)

#### Defined in

[src/ui/packages/interface/src/IUI.ts:575](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/interface/src/IUI.ts#L575)

___

### disabledStyle

• `Optional` **disabledStyle**: [`IStateStyle`](IStateStyle.md)

#### Inherited from

[ILeafer](ILeafer.md).[disabledStyle](ILeafer.md#disabledstyle)

#### Defined in

[src/ui/packages/interface/src/IUI.ts:576](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/interface/src/IUI.ts#L576)

___

### placeholderStyle

• `Optional` **placeholderStyle**: [`IStateStyle`](IStateStyle.md)

#### Inherited from

[ILeafer](ILeafer.md).[placeholderStyle](ILeafer.md#placeholderstyle)

#### Defined in

[src/ui/packages/interface/src/IUI.ts:577](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/interface/src/IUI.ts#L577)

___

### placeholderColor

• `Optional` **placeholderColor**: `string`

#### Inherited from

[ILeafer](ILeafer.md).[placeholderColor](ILeafer.md#placeholdercolor)

#### Defined in

[src/ui/packages/interface/src/IUI.ts:578](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/interface/src/IUI.ts#L578)

___

### placeholderDelay

• `Optional` **placeholderDelay**: `number`

#### Inherited from

[ILeafer](ILeafer.md).[placeholderDelay](ILeafer.md#placeholderdelay)

#### Defined in

[src/ui/packages/interface/src/IUI.ts:579](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/interface/src/IUI.ts#L579)

___

### editConfig

• `Optional` **editConfig**: [`IEditorConfig`](IEditorConfig.md)

#### Inherited from

[ILeafer](ILeafer.md).[editConfig](ILeafer.md#editconfig)

#### Defined in

[src/ui/packages/interface/src/IUI.ts:581](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/interface/src/IUI.ts#L581)

___

### editOuter

• `Optional` **editOuter**: `string`

#### Inherited from

[ILeafer](ILeafer.md).[editOuter](ILeafer.md#editouter)

#### Defined in

[src/ui/packages/interface/src/IUI.ts:582](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/interface/src/IUI.ts#L582)

___

### editInner

• `Optional` **editInner**: `string`

#### Inherited from

[ILeafer](ILeafer.md).[editInner](ILeafer.md#editinner)

#### Defined in

[src/ui/packages/interface/src/IUI.ts:583](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/interface/src/IUI.ts#L583)

___

### children

• **children**: [`ILeafer`](ILeafer.md)[]

#### Overrides

[ILeafer](ILeafer.md).[children](ILeafer.md#children)

#### Defined in

[src/ui/packages/interface/src/app/IApp.ts:7](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/interface/src/app/IApp.ts#L7)

___

### realCanvas

• **realCanvas**: `boolean`

#### Defined in

[src/ui/packages/interface/src/app/IApp.ts:8](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/interface/src/app/IApp.ts#L8)

___

### isApp

• `Readonly` **isApp**: `boolean`

#### Inherited from

[ILeafer](ILeafer.md).[isApp](ILeafer.md#isapp)

#### Defined in

[src/ui/packages/interface/src/app/ILeafer.ts:7](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/interface/src/app/ILeafer.ts#L7)

___

### app

• `Readonly` **app**: [`ILeafer`](ILeafer.md)

#### Inherited from

[ILeafer](ILeafer.md).[app](ILeafer.md#app)

#### Defined in

[src/ui/packages/interface/src/app/ILeafer.ts:8](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/interface/src/app/ILeafer.ts#L8)

___

### parentApp

• `Optional` **parentApp**: [`IApp`](IApp.md)

#### Inherited from

[ILeafer](ILeafer.md).[parentApp](ILeafer.md#parentapp)

#### Defined in

[src/ui/packages/interface/src/app/ILeafer.ts:9](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/interface/src/app/ILeafer.ts#L9)

___

### parent

• `Optional` **parent**: [`IApp`](IApp.md)

#### Inherited from

[ILeafer](ILeafer.md).[parent](ILeafer.md#parent)

#### Defined in

[src/ui/packages/interface/src/app/ILeafer.ts:10](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/interface/src/app/ILeafer.ts#L10)

___

### zoomLayer

• **zoomLayer**: [`IGroup`](IGroup.md)

#### Inherited from

[ILeafer](ILeafer.md).[zoomLayer](ILeafer.md#zoomlayer)

#### Defined in

[src/ui/packages/interface/src/app/ILeafer.ts:11](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/interface/src/app/ILeafer.ts#L11)

___

### editor

• **editor**: [`IEditorBase`](IEditorBase.md)

#### Inherited from

[ILeafer](ILeafer.md).[editor](ILeafer.md#editor)

#### Defined in

[src/ui/packages/interface/src/app/ILeafer.ts:12](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/interface/src/app/ILeafer.ts#L12)

___

### ground

• `Optional` **ground**: [`ILeafer`](ILeafer.md)

#### Inherited from

[ILeafer](ILeafer.md).[ground](ILeafer.md#ground)

#### Defined in

[src/ui/packages/interface/src/app/ILeafer.ts:14](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/interface/src/app/ILeafer.ts#L14)

___

### tree

• `Optional` **tree**: [`ILeafer`](ILeafer.md)

#### Inherited from

[ILeafer](ILeafer.md).[tree](ILeafer.md#tree)

#### Defined in

[src/ui/packages/interface/src/app/ILeafer.ts:15](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/interface/src/app/ILeafer.ts#L15)

___

### sky

• `Optional` **sky**: [`ILeafer`](ILeafer.md)

#### Inherited from

[ILeafer](ILeafer.md).[sky](ILeafer.md#sky)

#### Defined in

[src/ui/packages/interface/src/app/ILeafer.ts:16](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/interface/src/app/ILeafer.ts#L16)

## Methods

### init

▸ **init**(`userConfig?`, `parentApp?`): `void`

#### Parameters

| Name          | Type                                |
| :------------ | :---------------------------------- |
| `userConfig?` | [`ILeaferConfig`](ILeaferConfig.md) |
| `parentApp?`  | [`IAppBase`](IAppBase.md)           |

#### Returns

`void`

#### Inherited from

[ILeafer](ILeafer.md).[init](ILeafer.md#init)

#### Defined in

[src/leafer/packages/interface/src/app/ILeafer.ts:86](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/app/ILeafer.ts#L86)

___

### start

▸ **start**(): `void`

#### Returns

`void`

#### Inherited from

[ILeafer](ILeafer.md).[start](ILeafer.md#start)

#### Defined in

[src/leafer/packages/interface/src/app/ILeafer.ts:88](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/app/ILeafer.ts#L88)

___

### stop

▸ **stop**(): `void`

#### Returns

`void`

#### Inherited from

[ILeafer](ILeafer.md).[stop](ILeafer.md#stop)

#### Defined in

[src/leafer/packages/interface/src/app/ILeafer.ts:89](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/app/ILeafer.ts#L89)

___

### unlockLayout

▸ **unlockLayout**(`updateLayout?`): `void`

#### Parameters

| Name            | Type      |
| :-------------- | :-------- |
| `updateLayout?` | `boolean` |

#### Returns

`void`

#### Inherited from

[ILeafer](ILeafer.md).[unlockLayout](ILeafer.md#unlocklayout)

#### Defined in

[src/leafer/packages/interface/src/app/ILeafer.ts:91](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/app/ILeafer.ts#L91)

___

### lockLayout

▸ **lockLayout**(`updateLayout?`): `void`

#### Parameters

| Name            | Type      |
| :-------------- | :-------- |
| `updateLayout?` | `boolean` |

#### Returns

`void`

#### Inherited from

[ILeafer](ILeafer.md).[lockLayout](ILeafer.md#locklayout)

#### Defined in

[src/leafer/packages/interface/src/app/ILeafer.ts:92](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/app/ILeafer.ts#L92)

___

### requestRender

▸ **requestRender**(`change`): `void`

#### Parameters

| Name     | Type      |
| :------- | :-------- |
| `change` | `boolean` |

#### Returns

`void`

#### Inherited from

[ILeafer](ILeafer.md).[requestRender](ILeafer.md#requestrender)

#### Defined in

[src/leafer/packages/interface/src/app/ILeafer.ts:94](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/app/ILeafer.ts#L94)

___

### updateCursor

▸ **updateCursor**(`cursor?`): `void`

#### Parameters

| Name      | Type                                       |
| :-------- | :----------------------------------------- |
| `cursor?` | [`ICursorType`](../modules.md#icursortype) |

#### Returns

`void`

#### Inherited from

[ILeafer](ILeafer.md).[updateCursor](ILeafer.md#updatecursor)

#### Defined in

[src/leafer/packages/interface/src/app/ILeafer.ts:96](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/app/ILeafer.ts#L96)

___

### resize

▸ **resize**(`size`): `void`

#### Parameters

| Name   | Type                                    |
| :----- | :-------------------------------------- |
| `size` | [`IScreenSizeData`](IScreenSizeData.md) |

#### Returns

`void`

#### Inherited from

[ILeafer](ILeafer.md).[resize](ILeafer.md#resize)

#### Defined in

[src/leafer/packages/interface/src/app/ILeafer.ts:97](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/app/ILeafer.ts#L97)

___

### waitReady

▸ **waitReady**(`item`, `bind?`): `void`

#### Parameters

| Name    | Type                        |
| :------ | :-------------------------- |
| `item`  | [`IFunction`](IFunction.md) |
| `bind?` | [`IObject`](IObject.md)     |

#### Returns

`void`

#### Inherited from

[ILeafer](ILeafer.md).[waitReady](ILeafer.md#waitready)

#### Defined in

[src/leafer/packages/interface/src/app/ILeafer.ts:99](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/app/ILeafer.ts#L99)

___

### waitViewReady

▸ **waitViewReady**(`item`, `bind?`): `void`

#### Parameters

| Name    | Type                        |
| :------ | :-------------------------- |
| `item`  | [`IFunction`](IFunction.md) |
| `bind?` | [`IObject`](IObject.md)     |

#### Returns

`void`

#### Inherited from

[ILeafer](ILeafer.md).[waitViewReady](ILeafer.md#waitviewready)

#### Defined in

[src/leafer/packages/interface/src/app/ILeafer.ts:100](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/app/ILeafer.ts#L100)

___

### waitViewCompleted

▸ **waitViewCompleted**(`item`, `bind?`): `void`

#### Parameters

| Name    | Type                        |
| :------ | :-------------------------- |
| `item`  | [`IFunction`](IFunction.md) |
| `bind?` | [`IObject`](IObject.md)     |

#### Returns

`void`

#### Inherited from

[ILeafer](ILeafer.md).[waitViewCompleted](ILeafer.md#waitviewcompleted)

#### Defined in

[src/leafer/packages/interface/src/app/ILeafer.ts:101](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/app/ILeafer.ts#L101)

___

### zoom

▸ **zoom**(`zoomType`, `optionsOrPadding?`, `scroll?`, `transition?`): [`IBoundsData`](IBoundsData.md)

#### Parameters

| Name                | Type                                                                              |
| :------------------ | :-------------------------------------------------------------------------------- |
| `zoomType`          | [`IZoomType`](../modules.md#izoomtype)                                            |
| `optionsOrPadding?` | [`IFourNumber`](../modules.md#ifournumber) \\| [`IZoomOptions`](IZoomOptions.md) |
| `scroll?`           | `boolean` \\| `"x"` \\| `"y"`                                                   |
| `transition?`       | [`ITransition`](../modules.md#itransition)                                        |

#### Returns

[`IBoundsData`](IBoundsData.md)

#### Inherited from

[ILeafer](ILeafer.md).[zoom](ILeafer.md#zoom)

#### Defined in

[src/leafer/packages/interface/src/app/ILeafer.ts:103](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/app/ILeafer.ts#L103)

___

### getValidMove

▸ **getValidMove**(`moveX`, `moveY`, `checkLimit?`): [`IPointData`](IPointData.md)

#### Parameters

| Name          | Type      |
| :------------ | :-------- |
| `moveX`       | `number`  |
| `moveY`       | `number`  |
| `checkLimit?` | `boolean` |

#### Returns

[`IPointData`](IPointData.md)

#### Inherited from

[ILeafer](ILeafer.md).[getValidMove](ILeafer.md#getvalidmove)

#### Defined in

[src/leafer/packages/interface/src/app/ILeafer.ts:104](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/app/ILeafer.ts#L104)

___

### getValidScale

▸ **getValidScale**(`changeScale`): `number`

#### Parameters

| Name          | Type     |
| :------------ | :------- |
| `changeScale` | `number` |

#### Returns

`number`

#### Inherited from

[ILeafer](ILeafer.md).[getValidScale](ILeafer.md#getvalidscale)

#### Defined in

[src/leafer/packages/interface/src/app/ILeafer.ts:105](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/app/ILeafer.ts#L105)

___

### getWorldPointByClient

▸ **getWorldPointByClient**(`clientPoint`, `updateClient?`): [`IPointData`](IPointData.md)

#### Parameters

| Name            | Type                                      |
| :-------------- | :---------------------------------------- |
| `clientPoint`   | [`IClientPointData`](IClientPointData.md) |
| `updateClient?` | `boolean`                                 |

#### Returns

[`IPointData`](IPointData.md)

#### Inherited from

[ILeafer](ILeafer.md).[getWorldPointByClient](ILeafer.md#getworldpointbyclient)

#### Defined in

[src/leafer/packages/interface/src/app/ILeafer.ts:107](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/app/ILeafer.ts#L107)

___

### getPagePointByClient

▸ **getPagePointByClient**(`clientPoint`, `updateClient?`): [`IPointData`](IPointData.md)

#### Parameters

| Name            | Type                                      |
| :-------------- | :---------------------------------------- |
| `clientPoint`   | [`IClientPointData`](IClientPointData.md) |
| `updateClient?` | `boolean`                                 |

#### Returns

[`IPointData`](IPointData.md)

#### Inherited from

[ILeafer](ILeafer.md).[getPagePointByClient](ILeafer.md#getpagepointbyclient)

#### Defined in

[src/leafer/packages/interface/src/app/ILeafer.ts:108](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/app/ILeafer.ts#L108)

___

### getClientPointByWorld

▸ **getClientPointByWorld**(`worldPoint`): [`IPointData`](IPointData.md)

#### Parameters

| Name         | Type                          |
| :----------- | :---------------------------- |
| `worldPoint` | [`IPointData`](IPointData.md) |

#### Returns

[`IPointData`](IPointData.md)

#### Inherited from

[ILeafer](ILeafer.md).[getClientPointByWorld](ILeafer.md#getclientpointbyworld)

#### Defined in

[src/leafer/packages/interface/src/app/ILeafer.ts:109](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/app/ILeafer.ts#L109)

___

### updateClientBounds

▸ **updateClientBounds**(): `void`

#### Returns

`void`

#### Inherited from

[ILeafer](ILeafer.md).[updateClientBounds](ILeafer.md#updateclientbounds)

#### Defined in

[src/leafer/packages/interface/src/app/ILeafer.ts:110](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/app/ILeafer.ts#L110)

___

### receiveEvent

▸ **receiveEvent**(`event`): `void`

#### Parameters

| Name    | Type  |
| :------ | :---- |
| `event` | `any` |

#### Returns

`void`

#### Inherited from

[ILeafer](ILeafer.md).[receiveEvent](ILeafer.md#receiveevent)

#### Defined in

[src/leafer/packages/interface/src/app/ILeafer.ts:112](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/app/ILeafer.ts#L112)

___

### resetCustom

▸ **resetCustom**(): `void`

#### Returns

`void`

#### Inherited from

[ILeafer](ILeafer.md).[resetCustom](ILeafer.md#resetcustom)

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

[ILeafer](ILeafer.md).[waitParent](ILeafer.md#waitparent)

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

[ILeafer](ILeafer.md).[waitLeafer](ILeafer.md#waitleafer)

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

[ILeafer](ILeafer.md).[nextRender](ILeafer.md#nextrender)

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

[ILeafer](ILeafer.md).[removeNextRender](ILeafer.md#removenextrender)

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

[ILeafer](ILeafer.md).[__bindLeafer](ILeafer.md#__bindleafer)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:566](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/display/ILeaf.ts#L566)

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

[ILeafer](ILeafer.md).[setAttr](ILeafer.md#setattr)

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

[ILeafer](ILeafer.md).[getAttr](ILeafer.md#getattr)

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

[ILeafer](ILeafer.md).[getComputedAttr](ILeafer.md#getcomputedattr)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:573](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/display/ILeaf.ts#L573)

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

[ILeafer](ILeafer.md).[toString](ILeafer.md#tostring)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:576](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/display/ILeaf.ts#L576)

___

### toSVG

▸ **toSVG**(): `string`

#### Returns

`string`

#### Inherited from

[ILeafer](ILeafer.md).[toSVG](ILeafer.md#tosvg)

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

[ILeafer](ILeafer.md).[__SVG](ILeafer.md#__svg)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:578](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/display/ILeaf.ts#L578)

___

### toHTML

▸ **toHTML**(): `string`

#### Returns

`string`

#### Inherited from

[ILeafer](ILeafer.md).[toHTML](ILeafer.md#tohtml)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:579](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/display/ILeaf.ts#L579)

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

[ILeafer](ILeafer.md).[__setAttr](ILeafer.md#__setattr)

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

[ILeafer](ILeafer.md).[__getAttr](ILeafer.md#__getattr)

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

[ILeafer](ILeafer.md).[setProxyAttr](ILeafer.md#setproxyattr)

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

[ILeafer](ILeafer.md).[getProxyAttr](ILeafer.md#getproxyattr)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:588](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/display/ILeaf.ts#L588)

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

[ILeafer](ILeafer.md).[focus](ILeafer.md#focus)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:596](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/display/ILeaf.ts#L596)

___

### updateState

▸ **updateState**(): `void`

#### Returns

`void`

#### Inherited from

[ILeafer](ILeafer.md).[updateState](ILeafer.md#updatestate)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:598](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/display/ILeaf.ts#L598)

___

### updateLayout

▸ **updateLayout**(): `void`

#### Returns

`void`

#### Inherited from

[ILeafer](ILeafer.md).[updateLayout](ILeafer.md#updatelayout)

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

[ILeafer](ILeafer.md).[forceUpdate](ILeafer.md#forceupdate)

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

[ILeafer](ILeafer.md).[forceRender](ILeafer.md#forcerender)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:601](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/display/ILeaf.ts#L601)

___

### \_\_extraUpdate

▸ **__extraUpdate**(): `void`

#### Returns

`void`

#### Inherited from

[ILeafer](ILeafer.md).[__extraUpdate](ILeafer.md#__extraupdate)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:603](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/display/ILeaf.ts#L603)

___

### \_\_updateWorldMatrix

▸ **__updateWorldMatrix**(): `void`

#### Returns

`void`

#### Inherited from

[ILeafer](ILeafer.md).[__updateWorldMatrix](ILeafer.md#__updateworldmatrix)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:606](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/display/ILeaf.ts#L606)

___

### \_\_updateLocalMatrix

▸ **__updateLocalMatrix**(): `void`

#### Returns

`void`

#### Inherited from

[ILeafer](ILeafer.md).[__updateLocalMatrix](ILeafer.md#__updatelocalmatrix)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:607](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/display/ILeaf.ts#L607)

___

### \_\_updateWorldBounds

▸ **__updateWorldBounds**(): `void`

#### Returns

`void`

#### Inherited from

[ILeafer](ILeafer.md).[__updateWorldBounds](ILeafer.md#__updateworldbounds)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:610](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/display/ILeaf.ts#L610)

___

### \_\_updateLocalBounds

▸ **__updateLocalBounds**(): `void`

#### Returns

`void`

#### Inherited from

[ILeafer](ILeafer.md).[__updateLocalBounds](ILeafer.md#__updatelocalbounds)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:611](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/display/ILeaf.ts#L611)

___

### \_\_updateLocalBoxBounds

▸ **__updateLocalBoxBounds**(): `void`

#### Returns

`void`

#### Inherited from

[ILeafer](ILeafer.md).[__updateLocalBoxBounds](ILeafer.md#__updatelocalboxbounds)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:613](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/display/ILeaf.ts#L613)

___

### \_\_updateLocalStrokeBounds

▸ **__updateLocalStrokeBounds**(): `void`

#### Returns

`void`

#### Inherited from

[ILeafer](ILeafer.md).[__updateLocalStrokeBounds](ILeafer.md#__updatelocalstrokebounds)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:614](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/display/ILeaf.ts#L614)

___

### \_\_updateLocalRenderBounds

▸ **__updateLocalRenderBounds**(): `void`

#### Returns

`void`

#### Inherited from

[ILeafer](ILeafer.md).[__updateLocalRenderBounds](ILeafer.md#__updatelocalrenderbounds)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:615](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/display/ILeaf.ts#L615)

___

### \_\_updateContentBounds

▸ **__updateContentBounds**(): `void`

#### Returns

`void`

#### Inherited from

[ILeafer](ILeafer.md).[__updateContentBounds](ILeafer.md#__updatecontentbounds)

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

[ILeafer](ILeafer.md).[__updateBoxBounds](ILeafer.md#__updateboxbounds)

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

[ILeafer](ILeafer.md).[__updateStrokeBounds](ILeafer.md#__updatestrokebounds)

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

[ILeafer](ILeafer.md).[__updateRenderBounds](ILeafer.md#__updaterenderbounds)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:620](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/display/ILeaf.ts#L620)

___

### \_\_updateAutoLayout

▸ **__updateAutoLayout**(): `void`

#### Returns

`void`

#### Inherited from

[ILeafer](ILeafer.md).[__updateAutoLayout](ILeafer.md#__updateautolayout)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:622](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/display/ILeaf.ts#L622)

___

### \_\_updateFlowLayout

▸ **__updateFlowLayout**(): `void`

#### Returns

`void`

#### Inherited from

[ILeafer](ILeafer.md).[__updateFlowLayout](ILeafer.md#__updateflowlayout)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:623](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/display/ILeaf.ts#L623)

___

### \_\_updateNaturalSize

▸ **__updateNaturalSize**(): `void`

#### Returns

`void`

#### Inherited from

[ILeafer](ILeafer.md).[__updateNaturalSize](ILeafer.md#__updatenaturalsize)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:624](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/display/ILeaf.ts#L624)

___

### \_\_updateStrokeSpread

▸ **__updateStrokeSpread**(): [`IFourNumber`](../modules.md#ifournumber)

#### Returns

[`IFourNumber`](../modules.md#ifournumber)

#### Inherited from

[ILeafer](ILeafer.md).[__updateStrokeSpread](ILeafer.md#__updatestrokespread)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:626](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/display/ILeaf.ts#L626)

___

### \_\_updateRenderSpread

▸ **__updateRenderSpread**(): [`IFourNumber`](../modules.md#ifournumber)

#### Returns

[`IFourNumber`](../modules.md#ifournumber)

#### Inherited from

[ILeafer](ILeafer.md).[__updateRenderSpread](ILeafer.md#__updaterenderspread)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:627](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/display/ILeaf.ts#L627)

___

### \_\_onUpdateSize

▸ **__onUpdateSize**(): `void`

#### Returns

`void`

#### Inherited from

[ILeafer](ILeafer.md).[__onUpdateSize](ILeafer.md#__onupdatesize)

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

[ILeafer](ILeafer.md).[__updateEraser](ILeafer.md#__updateeraser)

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

[ILeafer](ILeafer.md).[__updateMask](ILeafer.md#__updatemask)

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

[ILeafer](ILeafer.md).[__renderMask](ILeafer.md#__rendermask)

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

[ILeafer](ILeafer.md).[__renderEraser](ILeafer.md#__rendereraser)

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

[ILeafer](ILeafer.md).[__getNowWorld](ILeafer.md#__getnowworld)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:638](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/display/ILeaf.ts#L638)

___

### getClampRenderScale

▸ **getClampRenderScale**(): `number`

#### Returns

`number`

#### Inherited from

[ILeafer](ILeafer.md).[getClampRenderScale](ILeafer.md#getclamprenderscale)

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

[ILeafer](ILeafer.md).[getRenderScaleData](ILeafer.md#getrenderscaledata)

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

[ILeafer](ILeafer.md).[getTransform](ILeafer.md#gettransform)

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

[ILeafer](ILeafer.md).[getBounds](ILeafer.md#getbounds)

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

[ILeafer](ILeafer.md).[getLayoutBounds](ILeafer.md#getlayoutbounds)

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

[ILeafer](ILeafer.md).[getLayoutPoints](ILeafer.md#getlayoutpoints)

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

[ILeafer](ILeafer.md).[getWorldBounds](ILeafer.md#getworldbounds)

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

[ILeafer](ILeafer.md).[worldToLocal](ILeafer.md#worldtolocal)

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

[ILeafer](ILeafer.md).[localToWorld](ILeafer.md#localtoworld)

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

[ILeafer](ILeafer.md).[worldToInner](ILeafer.md#worldtoinner)

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

[ILeafer](ILeafer.md).[innerToWorld](ILeafer.md#innertoworld)

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

[ILeafer](ILeafer.md).[getBoxPoint](ILeafer.md#getboxpoint)

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

[ILeafer](ILeafer.md).[getBoxPointByInner](ILeafer.md#getboxpointbyinner)

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

[ILeafer](ILeafer.md).[getInnerPoint](ILeafer.md#getinnerpoint)

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

[ILeafer](ILeafer.md).[getInnerPointByBox](ILeafer.md#getinnerpointbybox)

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

[ILeafer](ILeafer.md).[getInnerPointByLocal](ILeafer.md#getinnerpointbylocal)

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

[ILeafer](ILeafer.md).[getLocalPoint](ILeafer.md#getlocalpoint)

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

[ILeafer](ILeafer.md).[getLocalPointByInner](ILeafer.md#getlocalpointbyinner)

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

[ILeafer](ILeafer.md).[getPagePoint](ILeafer.md#getpagepoint)

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

[ILeafer](ILeafer.md).[getWorldPoint](ILeafer.md#getworldpoint)

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

[ILeafer](ILeafer.md).[getWorldPointByBox](ILeafer.md#getworldpointbybox)

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

[ILeafer](ILeafer.md).[getWorldPointByLocal](ILeafer.md#getworldpointbylocal)

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

[ILeafer](ILeafer.md).[getWorldPointByPage](ILeafer.md#getworldpointbypage)

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

[ILeafer](ILeafer.md).[setTransform](ILeafer.md#settransform)

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

[ILeafer](ILeafer.md).[transform](ILeafer.md#transform)

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

[ILeafer](ILeafer.md).[move](ILeafer.md#move)

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

[ILeafer](ILeafer.md).[moveInner](ILeafer.md#moveinner)

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

[ILeafer](ILeafer.md).[scaleOf](ILeafer.md#scaleof)

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

[ILeafer](ILeafer.md).[rotateOf](ILeafer.md#rotateof)

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

[ILeafer](ILeafer.md).[skewOf](ILeafer.md#skewof)

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

[ILeafer](ILeafer.md).[transformWorld](ILeafer.md#transformworld)

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

[ILeafer](ILeafer.md).[moveWorld](ILeafer.md#moveworld)

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

[ILeafer](ILeafer.md).[scaleOfWorld](ILeafer.md#scaleofworld)

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

[ILeafer](ILeafer.md).[rotateOfWorld](ILeafer.md#rotateofworld)

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

[ILeafer](ILeafer.md).[skewOfWorld](ILeafer.md#skewofworld)

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

[ILeafer](ILeafer.md).[flip](ILeafer.md#flip)

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

[ILeafer](ILeafer.md).[scaleResize](ILeafer.md#scaleresize)

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

[ILeafer](ILeafer.md).[__scaleResize](ILeafer.md#__scaleresize)

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

[ILeafer](ILeafer.md).[resizeWidth](ILeafer.md#resizewidth)

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

[ILeafer](ILeafer.md).[resizeHeight](ILeafer.md#resizeheight)

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

[ILeafer](ILeafer.md).[hit](ILeafer.md#hit)

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

[ILeafer](ILeafer.md).[__hitWorld](ILeafer.md#__hitworld)

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

[ILeafer](ILeafer.md).[__hit](ILeafer.md#__hit)

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

[ILeafer](ILeafer.md).[__hitFill](ILeafer.md#__hitfill)

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

[ILeafer](ILeafer.md).[__hitStroke](ILeafer.md#__hitstroke)

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

[ILeafer](ILeafer.md).[__hitPixel](ILeafer.md#__hitpixel)

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

[ILeafer](ILeafer.md).[__drawHitPath](ILeafer.md#__drawhitpath)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:699](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/display/ILeaf.ts#L699)

___

### \_\_updateHitCanvas

▸ **__updateHitCanvas**(): `void`

#### Returns

`void`

#### Inherited from

[ILeafer](ILeafer.md).[__updateHitCanvas](ILeafer.md#__updatehitcanvas)

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

[ILeafer](ILeafer.md).[__render](ILeafer.md#__render)

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

[ILeafer](ILeafer.md).[__drawFast](ILeafer.md#__drawfast)

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

[ILeafer](ILeafer.md).[__draw](ILeafer.md#__draw)

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

[ILeafer](ILeafer.md).[__clip](ILeafer.md#__clip)

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

[ILeafer](ILeafer.md).[__renderShape](ILeafer.md#__rendershape)

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

[ILeafer](ILeafer.md).[__drawShape](ILeafer.md#__drawshape)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:709](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/display/ILeaf.ts#L709)

___

### \_\_updateWorldOpacity

▸ **__updateWorldOpacity**(): `void`

#### Returns

`void`

#### Inherited from

[ILeafer](ILeafer.md).[__updateWorldOpacity](ILeafer.md#__updateworldopacity)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:711](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/display/ILeaf.ts#L711)

___

### \_\_updateChange

▸ **__updateChange**(): `void`

#### Returns

`void`

#### Inherited from

[ILeafer](ILeafer.md).[__updateChange](ILeafer.md#__updatechange)

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

[ILeafer](ILeafer.md).[__drawPath](ILeafer.md#__drawpath)

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

[ILeafer](ILeafer.md).[__drawRenderPath](ILeafer.md#__drawrenderpath)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:716](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/display/ILeaf.ts#L716)

___

### \_\_updatePath

▸ **__updatePath**(): `void`

#### Returns

`void`

#### Inherited from

[ILeafer](ILeafer.md).[__updatePath](ILeafer.md#__updatepath)

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

[ILeafer](ILeafer.md).[__updateRenderPath](ILeafer.md#__updaterenderpath)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:718](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/display/ILeaf.ts#L718)

___

### getMotionPathData

▸ **getMotionPathData**(): [`IMotionPathData`](IMotionPathData.md)

#### Returns

[`IMotionPathData`](IMotionPathData.md)

#### Inherited from

[ILeafer](ILeafer.md).[getMotionPathData](ILeafer.md#getmotionpathdata)

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

[ILeafer](ILeafer.md).[getMotionPoint](ILeafer.md#getmotionpoint)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:722](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/display/ILeaf.ts#L722)

___

### getMotionTotal

▸ **getMotionTotal**(): `number`

#### Returns

`number`

#### Inherited from

[ILeafer](ILeafer.md).[getMotionTotal](ILeafer.md#getmotiontotal)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:723](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/display/ILeaf.ts#L723)

___

### \_\_updateMotionPath

▸ **__updateMotionPath**(): `void`

#### Returns

`void`

#### Inherited from

[ILeafer](ILeafer.md).[__updateMotionPath](ILeafer.md#__updatemotionpath)

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

[ILeafer](ILeafer.md).[__runAnimation](ILeafer.md#__runanimation)

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

[ILeafer](ILeafer.md).[__emitLifeEvent](ILeafer.md#__emitlifeevent)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:729](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/display/ILeaf.ts#L729)

___

### \_\_updateSortChildren

▸ **__updateSortChildren**(): `void`

#### Returns

`void`

#### Inherited from

[ILeafer](ILeafer.md).[__updateSortChildren](ILeafer.md#__updatesortchildren)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:735](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/display/ILeaf.ts#L735)

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

[ILeafer](ILeafer.md).[dropTo](ILeafer.md#dropto)

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

[ILeafer](ILeafer.md).[__realSetAttr](ILeafer.md#__realsetattr)

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

[ILeafer](ILeafer.md).[emitPropertyEvent](ILeafer.md#emitpropertyevent)

#### Defined in

[src/leafer/packages/interface/src/display/module/ILeafDataProxy.ts:10](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/display/module/ILeafDataProxy.ts#L10)

___

### destroyEventer

▸ **destroyEventer**(): `void`

#### Returns

`void`

#### Inherited from

[ILeafer](ILeafer.md).[destroyEventer](ILeafer.md#destroyeventer)

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

[ILeafer](ILeafer.md).[on](ILeafer.md#on)

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

[ILeafer](ILeafer.md).[off](ILeafer.md#off)

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

[ILeafer](ILeafer.md).[on_](ILeafer.md#on_)

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

[ILeafer](ILeafer.md).[off_](ILeafer.md#off_)

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

[ILeafer](ILeafer.md).[once](ILeafer.md#once)

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

[ILeafer](ILeafer.md).[emit](ILeafer.md#emit)

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

[ILeafer](ILeafer.md).[emitEvent](ILeafer.md#emitevent)

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

[ILeafer](ILeafer.md).[hasEvent](ILeafer.md#hasevent)

#### Defined in

[src/leafer/packages/interface/src/event/IEventer.ts:56](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/event/IEventer.ts#L56)

___

### pick

▸ **pick**(`hitPoint`, `options?`): [`IPickResult`](IPickResult.md)

#### Parameters

| Name       | Type                              |
| :--------- | :-------------------------------- |
| `hitPoint` | [`IPointData`](IPointData.md)     |
| `options?` | [`IPickOptions`](IPickOptions.md) |

#### Returns

[`IPickResult`](IPickResult.md)

#### Inherited from

[ILeafer](ILeafer.md).[pick](ILeafer.md#pick)

#### Defined in

[src/ui/packages/interface/src/IUI.ts:469](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/interface/src/IUI.ts#L469)

___

### add

▸ **add**(`child`, `index?`): `void`

#### Parameters

| Name     | Type                                                                                                                                                                                                                           |
| :------- | :----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `child`  | [`IUIInputData`](IUIInputData.md) \\| [`IUI`](IUI.md) \\| [`IUI`](IUI.md)[] \\| [`IUIInputData`](IUIInputData.md)[] |
| `index?` | `number`                                                                                                                                                                                                                       |

#### Returns

`void`

#### Inherited from

[ILeafer](ILeafer.md).[add](ILeafer.md#add)

#### Defined in

[src/ui/packages/interface/src/IUI.ts:470](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/interface/src/IUI.ts#L470)

___

### addAt

▸ **addAt**(`child`, `index`): `void`

#### Parameters

| Name    | Type                                                                                                                                                                                                                           |
| :------ | :----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `child` | [`IUIInputData`](IUIInputData.md) \\| [`IUI`](IUI.md) \\| [`IUI`](IUI.md)[] \\| [`IUIInputData`](IUIInputData.md)[] |
| `index` | `number`                                                                                                                                                                                                                       |

#### Returns

`void`

#### Inherited from

[ILeafer](ILeafer.md).[addAt](ILeafer.md#addat)

#### Defined in

[src/ui/packages/interface/src/IUI.ts:471](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/interface/src/IUI.ts#L471)

___

### addAfter

▸ **addAfter**(`child`, `after`): `void`

#### Parameters

| Name    | Type                                                                                                                                                                                                                           |
| :------ | :----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `child` | [`IUIInputData`](IUIInputData.md) \\| [`IUI`](IUI.md) \\| [`IUI`](IUI.md)[] \\| [`IUIInputData`](IUIInputData.md)[] |
| `after` | [`IUI`](IUI.md)                                                                                                                                                                                                                |

#### Returns

`void`

#### Inherited from

[ILeafer](ILeafer.md).[addAfter](ILeafer.md#addafter)

#### Defined in

[src/ui/packages/interface/src/IUI.ts:472](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/interface/src/IUI.ts#L472)

___

### addBefore

▸ **addBefore**(`child`, `before`): `void`

#### Parameters

| Name     | Type                                                                                                                                                                                                                           |
| :------- | :----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `child`  | [`IUIInputData`](IUIInputData.md) \\| [`IUI`](IUI.md) \\| [`IUI`](IUI.md)[] \\| [`IUIInputData`](IUIInputData.md)[] |
| `before` | [`IUI`](IUI.md)                                                                                                                                                                                                                |

#### Returns

`void`

#### Inherited from

[ILeafer](ILeafer.md).[addBefore](ILeafer.md#addbefore)

#### Defined in

[src/ui/packages/interface/src/IUI.ts:473](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/interface/src/IUI.ts#L473)

___

### addMany

▸ **addMany**(`...children`): `void`

#### Parameters

| Name          | Type                                                                                                                                                                   |
| :------------ | :--------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `...children` | [`ILeaf`](ILeaf.md)[] \\| [`IUIInputData`](IUIInputData.md)[] |

#### Returns

`void`

#### Inherited from

[ILeafer](ILeafer.md).[addMany](ILeafer.md#addmany)

#### Defined in

[src/ui/packages/interface/src/IUI.ts:474](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/interface/src/IUI.ts#L474)

___

### remove

▸ **remove**(`child?`): `void`

#### Parameters

| Name     | Type                                                                                                                            |
| :------- | :------------------------------------------------------------------------------------------------------------------------------ |
| `child?` | `string` \\| `number` \\| [`IFindCondition`](IFindCondition.md) \\| [`IUI`](IUI.md) \\| [`IFindUIMethod`](IFindUIMethod.md) |

#### Returns

`void`

#### Inherited from

[ILeafer](ILeafer.md).[remove](ILeafer.md#remove)

#### Defined in

[src/ui/packages/interface/src/IUI.ts:475](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/interface/src/IUI.ts#L475)

___

### removeAll

▸ **removeAll**(): `void`

#### Returns

`void`

#### Inherited from

[ILeafer](ILeafer.md).[removeAll](ILeafer.md#removeall)

#### Defined in

[src/ui/packages/interface/src/IUI.ts:476](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/interface/src/IUI.ts#L476)

___

### clear

▸ **clear**(): `void`

#### Returns

`void`

#### Inherited from

[ILeafer](ILeafer.md).[clear](ILeafer.md#clear)

#### Defined in

[src/ui/packages/interface/src/IUI.ts:477](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/interface/src/IUI.ts#L477)

___

### reset

▸ **reset**(`data?`): `void`

#### Parameters

| Name    | Type                              |
| :------ | :-------------------------------- |
| `data?` | [`IUIInputData`](IUIInputData.md) |

#### Returns

`void`

#### Inherited from

[ILeafer](ILeafer.md).[reset](ILeafer.md#reset)

#### Defined in

[src/ui/packages/interface/src/IUI.ts:511](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/interface/src/IUI.ts#L511)

___

### set

▸ **set**(`data`, `transition?`): `void`

#### Parameters

| Name          | Type                                                     |
| :------------ | :------------------------------------------------------- |
| `data`        | [`IUIInputData`](IUIInputData.md)                        |
| `transition?` | [`ITransition`](../modules.md#itransition) \\| `"temp"` |

#### Returns

`void`

#### Inherited from

[ILeafer](ILeafer.md).[set](ILeafer.md#set)

#### Defined in

[src/ui/packages/interface/src/IUI.ts:513](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/interface/src/IUI.ts#L513)

___

### toJSON

▸ **toJSON**(`options?`): [`IUIJSONData`](IUIJSONData.md)

#### Parameters

| Name       | Type                              |
| :--------- | :-------------------------------- |
| `options?` | [`IJSONOptions`](IJSONOptions.md) |

#### Returns

[`IUIJSONData`](IUIJSONData.md)

#### Inherited from

[ILeafer](ILeafer.md).[toJSON](ILeafer.md#tojson)

#### Defined in

[src/ui/packages/interface/src/IUI.ts:514](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/interface/src/IUI.ts#L514)

___

### get

▸ **get**\<`K`\>(`name`): [`IApp`](IApp.md)[`K`]

#### Type parameters

| Name | Type                            |
| :--- | :------------------------------ |
| `K`  | extends keyof [`IApp`](IApp.md) |

#### Parameters

| Name   | Type |
| :----- | :--- |
| `name` | `K`  |

#### Returns

[`IApp`](IApp.md)[`K`]

#### Inherited from

[ILeafer](ILeafer.md).[get](ILeafer.md#get)

#### Defined in

[src/ui/packages/interface/src/IUI.ts:516](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/interface/src/IUI.ts#L516)

▸ **get**\<`K`\>(`name?`): [`IUIInputData`](IUIInputData.md)

#### Type parameters

| Name | Type                            |
| :--- | :------------------------------ |
| `K`  | extends keyof [`IApp`](IApp.md) |

#### Parameters

| Name    | Type                                                                                             |
| :------ | :----------------------------------------------------------------------------------------------- |
| `name?` | [`IUIInputData`](IUIInputData.md) \\| `K`[] |

#### Returns

[`IUIInputData`](IUIInputData.md)

#### Inherited from

[ILeafer](ILeafer.md).[get](ILeafer.md#get)

#### Defined in

[src/ui/packages/interface/src/IUI.ts:517](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/interface/src/IUI.ts#L517)

___

### createProxyData

▸ **createProxyData**(): [`IUIInputData`](IUIInputData.md)

#### Returns

[`IUIInputData`](IUIInputData.md)

#### Inherited from

[ILeafer](ILeafer.md).[createProxyData](ILeafer.md#createproxydata)

#### Defined in

[src/ui/packages/interface/src/IUI.ts:519](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/interface/src/IUI.ts#L519)

___

### clearProxyData

▸ **clearProxyData**(): `void`

#### Returns

`void`

#### Inherited from

[ILeafer](ILeafer.md).[clearProxyData](ILeafer.md#clearproxydata)

#### Defined in

[src/ui/packages/interface/src/IUI.ts:520](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/interface/src/IUI.ts#L520)

___

### find

▸ **find**(`condition`, `options?`): [`IUI`](IUI.md)[]

#### Parameters

| Name        | Type                                                                                                       |
| :---------- | :--------------------------------------------------------------------------------------------------------- |
| `condition` | `string` \\| `number` \\| [`IFindCondition`](IFindCondition.md) \\| [`IFindUIMethod`](IFindUIMethod.md) |
| `options?`  | `any`                                                                                                      |

#### Returns

[`IUI`](IUI.md)[]

#### Inherited from

[ILeafer](ILeafer.md).[find](ILeafer.md#find)

#### Defined in

[src/ui/packages/interface/src/IUI.ts:522](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/interface/src/IUI.ts#L522)

___

### findTag

▸ **findTag**(`tag`): [`IUI`](IUI.md)[]

#### Parameters

| Name  | Type                                                                         |
| :---- | :--------------------------------------------------------------------------- |
| `tag` | `string` \\| `string`[] |

#### Returns

[`IUI`](IUI.md)[]

#### Inherited from

[ILeafer](ILeafer.md).[findTag](ILeafer.md#findtag)

#### Defined in

[src/ui/packages/interface/src/IUI.ts:523](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/interface/src/IUI.ts#L523)

___

### findOne

▸ **findOne**(`condition`, `options?`): [`IUI`](IUI.md)

#### Parameters

| Name        | Type                                                                                                       |
| :---------- | :--------------------------------------------------------------------------------------------------------- |
| `condition` | `string` \\| `number` \\| [`IFindCondition`](IFindCondition.md) \\| [`IFindUIMethod`](IFindUIMethod.md) |
| `options?`  | `any`                                                                                                      |

#### Returns

[`IUI`](IUI.md)

#### Inherited from

[ILeafer](ILeafer.md).[findOne](ILeafer.md#findone)

#### Defined in

[src/ui/packages/interface/src/IUI.ts:524](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/interface/src/IUI.ts#L524)

___

### findId

▸ **findId**(`id`): [`IUI`](IUI.md)

#### Parameters

| Name | Type                   |
| :--- | :--------------------- |
| `id` | `string` \\| `number` |

#### Returns

[`IUI`](IUI.md)

#### Inherited from

[ILeafer](ILeafer.md).[findId](ILeafer.md#findid)

#### Defined in

[src/ui/packages/interface/src/IUI.ts:525](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/interface/src/IUI.ts#L525)

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

#### Inherited from

[ILeafer](ILeafer.md).[getPath](ILeafer.md#getpath)

#### Defined in

[src/ui/packages/interface/src/IUI.ts:527](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/interface/src/IUI.ts#L527)

___

### getPathString

▸ **getPathString**(`curve?`, `pathForRender?`): `string`

#### Parameters

| Name             | Type      |
| :--------------- | :-------- |
| `curve?`         | `boolean` |
| `pathForRender?` | `boolean` |

#### Returns

`string`

#### Inherited from

[ILeafer](ILeafer.md).[getPathString](ILeafer.md#getpathstring)

#### Defined in

[src/ui/packages/interface/src/IUI.ts:528](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/interface/src/IUI.ts#L528)

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

#### Inherited from

[ILeafer](ILeafer.md).[asPath](ILeafer.md#aspath)

#### Defined in

[src/ui/packages/interface/src/IUI.ts:529](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/interface/src/IUI.ts#L529)

___

### load

▸ **load**(): `void`

#### Returns

`void`

#### Inherited from

[ILeafer](ILeafer.md).[load](ILeafer.md#load)

#### Defined in

[src/ui/packages/interface/src/IUI.ts:531](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/interface/src/IUI.ts#L531)

___

### \_\_drawPathByData

▸ **__drawPathByData**(`drawer`, `data`, `ignoreCornerRadius?`): `void`

#### Parameters

| Name                  | Type                                                 |
| :-------------------- | :--------------------------------------------------- |
| `drawer`              | [`IPathDrawer`](IPathDrawer.md)                      |
| `data`                | [`IPathCommandData`](../modules.md#ipathcommanddata) |
| `ignoreCornerRadius?` | `boolean`                                            |

#### Returns

`void`

#### Inherited from

[ILeafer](ILeafer.md).[__drawPathByData](ILeafer.md#__drawpathbydata)

#### Defined in

[src/ui/packages/interface/src/IUI.ts:533](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/interface/src/IUI.ts#L533)

___

### \_\_drawPathByBox

▸ **__drawPathByBox**(`drawer`, `ignoreCornerRadius?`): `void`

#### Parameters

| Name                  | Type                            |
| :-------------------- | :------------------------------ |
| `drawer`              | [`IPathDrawer`](IPathDrawer.md) |
| `ignoreCornerRadius?` | `boolean`                       |

#### Returns

`void`

#### Inherited from

[ILeafer](ILeafer.md).[__drawPathByBox](ILeafer.md#__drawpathbybox)

#### Defined in

[src/ui/packages/interface/src/IUI.ts:534](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/interface/src/IUI.ts#L534)

___

### \_\_drawAfterFill

▸ **__drawAfterFill**(`canvas`, `options`): `void`

#### Parameters

| Name      | Type                                  |
| :-------- | :------------------------------------ |
| `canvas`  | [`ILeaferCanvas`](ILeaferCanvas.md)   |
| `options` | [`IRenderOptions`](IRenderOptions.md) |

#### Returns

`void`

#### Inherited from

[ILeafer](ILeafer.md).[__drawAfterFill](ILeafer.md#__drawafterfill)

#### Defined in

[src/ui/packages/interface/src/IUI.ts:535](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/interface/src/IUI.ts#L535)

___

### \_\_drawContent

▸ **__drawContent**(`canvas`, `options`): `void`

#### Parameters

| Name      | Type                                  |
| :-------- | :------------------------------------ |
| `canvas`  | [`ILeaferCanvas`](ILeaferCanvas.md)   |
| `options` | [`IRenderOptions`](IRenderOptions.md) |

#### Returns

`void`

#### Inherited from

[ILeafer](ILeafer.md).[__drawContent](ILeafer.md#__drawcontent)

#### Defined in

[src/ui/packages/interface/src/IUI.ts:536](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/interface/src/IUI.ts#L536)

___

### drawImagePlaceholder

▸ **drawImagePlaceholder**(`image`, `canvas`, `renderOptions`): `void`

#### Parameters

| Name            | Type                                  |
| :-------------- | :------------------------------------ |
| `image`         | [`ILeafPaint`](ILeafPaint.md)         |
| `canvas`        | [`ILeaferCanvas`](ILeaferCanvas.md)   |
| `renderOptions` | [`IRenderOptions`](IRenderOptions.md) |

#### Returns

`void`

#### Inherited from

[ILeafer](ILeafer.md).[drawImagePlaceholder](ILeafer.md#drawimageplaceholder)

#### Defined in

[src/ui/packages/interface/src/IUI.ts:538](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/interface/src/IUI.ts#L538)

___

### animate

▸ **animate**(`keyframe?`, `options?`, `type?`, `isTemp?`): [`IAnimate`](IAnimate.md)

#### Parameters

| Name        | Type                                                                                                                                                                                                                                                                                  |
| :---------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `keyframe?` | [`IAnimation`](../modules.md#ianimation) \\| [`IUIInputData`](IUIInputData.md) \\| [`IKeyframe`](../modules.md#ikeyframe)[] \\| [`IAnimation`](../modules.md#ianimation)[] |
| `options?`  | [`ITransition`](../modules.md#itransition)                                                                                                                                                                                                                                            |
| `type?`     | [`IAnimateType`](../modules.md#ianimatetype)                                                                                                                                                                                                                                          |
| `isTemp?`   | `boolean`                                                                                                                                                                                                                                                                             |

#### Returns

[`IAnimate`](IAnimate.md)

#### Inherited from

[ILeafer](ILeafer.md).[animate](ILeafer.md#animate)

#### Defined in

[src/ui/packages/interface/src/IUI.ts:540](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/interface/src/IUI.ts#L540)

___

### killAnimate

▸ **killAnimate**(`type?`, `nextStyle?`): `void`

#### Parameters

| Name         | Type                                         |
| :----------- | :------------------------------------------- |
| `type?`      | [`IAnimateType`](../modules.md#ianimatetype) |
| `nextStyle?` | [`IUIInputData`](IUIInputData.md)            |

#### Returns

`void`

#### Inherited from

[ILeafer](ILeafer.md).[killAnimate](ILeafer.md#killanimate)

#### Defined in

[src/ui/packages/interface/src/IUI.ts:541](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/interface/src/IUI.ts#L541)

___

### export

▸ **export**(`filename`, `options?`): `Promise`\<[`IExportResult`](IExportResult.md)\>

#### Parameters

| Name       | Type                                                               |
| :--------- | :----------------------------------------------------------------- |
| `filename` | `string`                                                           |
| `options?` | `number` \\| `boolean` \\| [`IExportOptions`](IExportOptions.md) |

#### Returns

`Promise`\<[`IExportResult`](IExportResult.md)\>

#### Inherited from

[ILeafer](ILeafer.md).[export](ILeafer.md#export)

#### Defined in

[src/ui/packages/interface/src/IUI.ts:543](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/interface/src/IUI.ts#L543)

___

### syncExport

▸ **syncExport**(`filename`, `options?`): [`IExportResult`](IExportResult.md)

#### Parameters

| Name       | Type                                                               |
| :--------- | :----------------------------------------------------------------- |
| `filename` | `string`                                                           |
| `options?` | `number` \\| `boolean` \\| [`IExportOptions`](IExportOptions.md) |

#### Returns

[`IExportResult`](IExportResult.md)

#### Inherited from

[ILeafer](ILeafer.md).[syncExport](ILeafer.md#syncexport)

#### Defined in

[src/ui/packages/interface/src/IUI.ts:544](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/interface/src/IUI.ts#L544)

___

### clone

▸ **clone**(`data?`): [`IUI`](IUI.md)

#### Parameters

| Name    | Type                              |
| :------ | :-------------------------------- |
| `data?` | [`IUIInputData`](IUIInputData.md) |

#### Returns

[`IUI`](IUI.md)

#### Inherited from

[ILeafer](ILeafer.md).[clone](ILeafer.md#clone)

#### Defined in

[src/ui/packages/interface/src/IUI.ts:545](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/interface/src/IUI.ts#L545)

___

### forEach

▸ **forEach**(`fn`): `void`

#### Parameters

| Name | Type                                            |
| :--- | :---------------------------------------------- |
| `fn` | [`IAppForEachFunction`](IAppForEachFunction.md) |

#### Returns

`void`

#### Defined in

[src/ui/packages/interface/src/app/IApp.ts:9](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/interface/src/app/IApp.ts#L9)

___

### onInit

▸ **onInit**(): `void`

#### Returns

`void`

#### Inherited from

[ILeafer](ILeafer.md).[onInit](ILeafer.md#oninit)

#### Defined in

[src/ui/packages/interface/src/app/ILeafer.ts:18](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/interface/src/app/ILeafer.ts#L18)

___

### initType

▸ **initType**(`type`): `void`

#### Parameters

| Name   | Type                                       |
| :----- | :----------------------------------------- |
| `type` | [`ILeaferType`](../modules.md#ileafertype) |

#### Returns

`void`

#### Inherited from

[ILeafer](ILeafer.md).[initType](ILeafer.md#inittype)

#### Defined in

[src/ui/packages/interface/src/app/ILeafer.ts:19](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/interface/src/app/ILeafer.ts#L19)

___

### destroy

▸ **destroy**(`sync?`): `void`

#### Parameters

| Name    | Type      |
| :------ | :-------- |
| `sync?` | `boolean` |

#### Returns

`void`

#### Inherited from

[ILeafer](ILeafer.md).[destroy](ILeafer.md#destroy)

#### Defined in

[src/ui/packages/interface/src/app/ILeafer.ts:20](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/interface/src/app/ILeafer.ts#L20)
