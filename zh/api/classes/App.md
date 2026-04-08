# Class: App

## Hierarchy

- [`Leafer`](Leafer.md)

  ↳ **`App`**

## Implements

- [`IApp`](../interfaces/IApp.md)

## Table of contents

### Constructors

- [constructor](App.md#constructor)

### Properties

- [innerId](App.md#innerid)
- [skipJSON](App.md#skipjson)
- [syncEventer](App.md#synceventer)
- [lockNormalStyle](App.md#locknormalstyle)
- [\_\_layout](App.md#__layout)
- [\_\_world](App.md#__world)
- [\_\_local](App.md#__local)
- [\_\_nowWorld](App.md#__nowworld)
- [\_\_cameraWorld](App.md#__cameraworld)
- [\_\_worldOpacity](App.md#__worldopacity)
- [\_\_scrollWorld](App.md#__scrollworld)
- [\_\_level](App.md#__level)
- [\_\_tempNumber](App.md#__tempnumber)
- [\_\_hasAutoLayout](App.md#__hasautolayout)
- [\_\_hasMask](App.md#__hasmask)
- [\_\_hasEraser](App.md#__haseraser)
- [\_\_hitCanvas](App.md#__hitcanvas)
- [\_\_captureMap](App.md#__capturemap)
- [\_\_bubbleMap](App.md#__bubblemap)
- [\_\_hasLocalEvent](App.md#__haslocalevent)
- [\_\_hasWorldEvent](App.md#__hasworldevent)
- [destroyed](App.md#destroyed)
- [children](App.md#children)
- [realCanvas](App.md#realcanvas)
- [ground](App.md#ground)
- [tree](App.md#tree)
- [sky](App.md#sky)
- [width](App.md#width)
- [height](App.md#height)
- [topChildren](App.md#topchildren)
- [childlessJSON](App.md#childlessjson)
- [list](App.md#list)
- [\_\_](App.md#__)
- [pixelRatio](App.md#pixelratio)
- [mode](App.md#mode)
- [parentApp](App.md#parentapp)
- [parent](App.md#parent)
- [running](App.md#running)
- [created](App.md#created)
- [ready](App.md#ready)
- [viewReady](App.md#viewready)
- [viewCompleted](App.md#viewcompleted)
- [transforming](App.md#transforming)
- [canvas](App.md#canvas)
- [renderer](App.md#renderer)
- [watcher](App.md#watcher)
- [layouter](App.md#layouter)
- [selector](App.md#selector)
- [interaction](App.md#interaction)
- [canvasManager](App.md#canvasmanager)
- [hitCanvasManager](App.md#hitcanvasmanager)
- [editor](App.md#editor)
- [userConfig](App.md#userconfig)
- [config](App.md#config)
- [cacheId](App.md#cacheid)
- [cacheInnerId](App.md#cacheinnerid)
- [autoLayout](App.md#autolayout)
- [lazyBounds](App.md#lazybounds)
- [leafs](App.md#leafs)
- [\_\_eventIds](App.md#__eventids)
- [\_\_startTimer](App.md#__starttimer)
- [\_\_controllers](App.md#__controllers)
- [\_\_initWait](App.md#__initwait)
- [\_\_readyWait](App.md#__readywait)
- [\_\_viewReadyWait](App.md#__viewreadywait)
- [\_\_viewCompletedWait](App.md#__viewcompletedwait)
- [\_\_nextRenderWait](App.md#__nextrenderwait)
- [proxyData](App.md#proxydata)
- [\_\_proxyData](App.md#__proxydata)
- [leafer](App.md#leafer)
- [zoomLayer](App.md#zoomlayer)
- [startLinker](App.md#startlinker)
- [endLinker](App.md#endlinker)
- [id](App.md#id)
- [name](App.md#name)
- [className](App.md#classname)
- [blendMode](App.md#blendmode)
- [opacity](App.md#opacity)
- [visible](App.md#visible)
- [locked](App.md#locked)
- [dim](App.md#dim)
- [dimskip](App.md#dimskip)
- [bright](App.md#bright)
- [zIndex](App.md#zindex)
- [mask](App.md#mask)
- [eraser](App.md#eraser)
- [x](App.md#x)
- [y](App.md#y)
- [scaleX](App.md#scalex)
- [scaleY](App.md#scaley)
- [scaleFixed](App.md#scalefixed)
- [rotation](App.md#rotation)
- [skewX](App.md#skewx)
- [skewY](App.md#skewy)
- [offsetX](App.md#offsetx)
- [offsetY](App.md#offsety)
- [scrollX](App.md#scrollx)
- [scrollY](App.md#scrolly)
- [origin](App.md#origin)
- [around](App.md#around)
- [lazy](App.md#lazy)
- [renderSpread](App.md#renderspread)
- [path](App.md#path)
- [windingRule](App.md#windingrule)
- [closed](App.md#closed)
- [flow](App.md#flow)
- [padding](App.md#padding)
- [gap](App.md#gap)
- [flowAlign](App.md#flowalign)
- [flowWrap](App.md#flowwrap)
- [itemBox](App.md#itembox)
- [inFlow](App.md#inflow)
- [autoWidth](App.md#autowidth)
- [autoHeight](App.md#autoheight)
- [lockRatio](App.md#lockratio)
- [autoBox](App.md#autobox)
- [widthRange](App.md#widthrange)
- [heightRange](App.md#heightrange)
- [draggable](App.md#draggable)
- [dragBounds](App.md#dragbounds)
- [dragBoundsType](App.md#dragboundstype)
- [editable](App.md#editable)
- [hittable](App.md#hittable)
- [hitFill](App.md#hitfill)
- [hitStroke](App.md#hitstroke)
- [hitBox](App.md#hitbox)
- [hitChildren](App.md#hitchildren)
- [hitSelf](App.md#hitself)
- [hitRadius](App.md#hitradius)
- [cursor](App.md#cursor)
- [fill](App.md#fill)
- [stroke](App.md#stroke)
- [strokeAlign](App.md#strokealign)
- [strokeWidth](App.md#strokewidth)
- [strokeScaleFixed](App.md#strokescalefixed)
- [strokeCap](App.md#strokecap)
- [strokeJoin](App.md#strokejoin)
- [dashPattern](App.md#dashpattern)
- [dashOffset](App.md#dashoffset)
- [miterLimit](App.md#miterlimit)
- [startArrow](App.md#startarrow)
- [endArrow](App.md#endarrow)
- [cornerRadius](App.md#cornerradius)
- [cornerSmoothing](App.md#cornersmoothing)
- [shadow](App.md#shadow)
- [innerShadow](App.md#innershadow)
- [blur](App.md#blur)
- [backgroundBlur](App.md#backgroundblur)
- [grayscale](App.md#grayscale)
- [filter](App.md#filter)
- [complex](App.md#complex)
- [animation](App.md#animation)
- [animationOut](App.md#animationout)
- [transition](App.md#transition)
- [transitionOut](App.md#transitionout)
- [motionPath](App.md#motionpath)
- [motionPrecision](App.md#motionprecision)
- [motion](App.md#motion)
- [motionRotation](App.md#motionrotation)
- [states](App.md#states)
- [state](App.md#state)
- [selected](App.md#selected)
- [disabled](App.md#disabled)
- [normalStyle](App.md#normalstyle)
- [hoverStyle](App.md#hoverstyle)
- [pressStyle](App.md#pressstyle)
- [focusStyle](App.md#focusstyle)
- [selectedStyle](App.md#selectedstyle)
- [disabledStyle](App.md#disabledstyle)
- [placeholderStyle](App.md#placeholderstyle)
- [placeholderColor](App.md#placeholdercolor)
- [placeholderDelay](App.md#placeholderdelay)
- [button](App.md#button)
- [editConfig](App.md#editconfig)
- [editOuter](App.md#editouter)
- [editInner](App.md#editinner)
- [data](App.md#data)
- [useFastShadow](App.md#usefastshadow)
- [\_\_box](App.md#__box)
- [\_\_animate](App.md#__animate)

### Accessors

- [tag](App.md#tag)
- [innerName](App.md#innername)
- [\_\_DataProcessor](App.md#__dataprocessor)
- [\_\_LayoutProcessor](App.md#__layoutprocessor)
- [leaferIsCreated](App.md#leaferiscreated)
- [leaferIsReady](App.md#leaferisready)
- [isBranchLeaf](App.md#isbranchleaf)
- [\_\_localMatrix](App.md#__localmatrix)
- [\_\_localBoxBounds](App.md#__localboxbounds)
- [worldTransform](App.md#worldtransform)
- [localTransform](App.md#localtransform)
- [scrollWorldTransform](App.md#scrollworldtransform)
- [boxBounds](App.md#boxbounds)
- [renderBounds](App.md#renderbounds)
- [worldBoxBounds](App.md#worldboxbounds)
- [worldStrokeBounds](App.md#worldstrokebounds)
- [worldRenderBounds](App.md#worldrenderbounds)
- [worldOpacity](App.md#worldopacity)
- [\_\_worldFlipped](App.md#__worldflipped)
- [\_\_onlyHitMask](App.md#__onlyhitmask)
- [\_\_ignoreHitWorld](App.md#__ignorehitworld)
- [\_\_inLazyBounds](App.md#__inlazybounds)
- [pathInputed](App.md#pathinputed)
- [event](App.md#event)
- [\_\_tag](App.md#__tag)
- [isApp](App.md#isapp)
- [isBranch](App.md#isbranch)
- [app](App.md#app)
- [isLeafer](App.md#isleafer)
- [imageReady](App.md#imageready)
- [layoutLocked](App.md#layoutlocked)
- [view](App.md#view)
- [FPS](App.md#fps)
- [cursorPoint](App.md#cursorpoint)
- [clientBounds](App.md#clientbounds)
- [isFrame](App.md#isframe)
- [strokeWidthFixed](App.md#strokewidthfixed)
- [scale](App.md#scale)
- [isAutoWidth](App.md#isautowidth)
- [isAutoHeight](App.md#isautoheight)
- [pen](App.md#pen)

### Methods

- [resetCustom](App.md#resetcustom)
- [waitParent](App.md#waitparent)
- [waitLeafer](App.md#waitleafer)
- [removeNextRender](App.md#removenextrender)
- [\_\_bindLeafer](App.md#__bindleafer)
- [setAttr](App.md#setattr)
- [getAttr](App.md#getattr)
- [getComputedAttr](App.md#getcomputedattr)
- [toString](App.md#tostring)
- [toSVG](App.md#tosvg)
- [\_\_SVG](App.md#__svg)
- [toHTML](App.md#tohtml)
- [setProxyAttr](App.md#setproxyattr)
- [getProxyAttr](App.md#getproxyattr)
- [focus](App.md#focus)
- [updateState](App.md#updatestate)
- [forceUpdate](App.md#forceupdate)
- [\_\_extraUpdate](App.md#__extraupdate)
- [\_\_updateWorldMatrix](App.md#__updateworldmatrix)
- [\_\_updateLocalMatrix](App.md#__updatelocalmatrix)
- [\_\_updateWorldBounds](App.md#__updateworldbounds)
- [\_\_updateLocalBoxBounds](App.md#__updatelocalboxbounds)
- [\_\_updateLocalStrokeBounds](App.md#__updatelocalstrokebounds)
- [\_\_updateLocalRenderBounds](App.md#__updatelocalrenderbounds)
- [\_\_updateBoxBounds](App.md#__updateboxbounds)
- [\_\_updateContentBounds](App.md#__updatecontentbounds)
- [\_\_updateStrokeBounds](App.md#__updatestrokebounds)
- [\_\_updateRenderBounds](App.md#__updaterenderbounds)
- [\_\_updateAutoLayout](App.md#__updateautolayout)
- [\_\_updateFlowLayout](App.md#__updateflowlayout)
- [\_\_updateNaturalSize](App.md#__updatenaturalsize)
- [\_\_updateStrokeSpread](App.md#__updatestrokespread)
- [\_\_updateRenderSpread](App.md#__updaterenderspread)
- [\_\_updateEraser](App.md#__updateeraser)
- [\_\_renderEraser](App.md#__rendereraser)
- [\_\_updateMask](App.md#__updatemask)
- [\_\_renderMask](App.md#__rendermask)
- [\_\_getNowWorld](App.md#__getnowworld)
- [getClampRenderScale](App.md#getclamprenderscale)
- [getRenderScaleData](App.md#getrenderscaledata)
- [getTransform](App.md#gettransform)
- [getBounds](App.md#getbounds)
- [getLayoutBounds](App.md#getlayoutbounds)
- [getLayoutPoints](App.md#getlayoutpoints)
- [getWorldBounds](App.md#getworldbounds)
- [worldToLocal](App.md#worldtolocal)
- [localToWorld](App.md#localtoworld)
- [worldToInner](App.md#worldtoinner)
- [innerToWorld](App.md#innertoworld)
- [getBoxPoint](App.md#getboxpoint)
- [getBoxPointByInner](App.md#getboxpointbyinner)
- [getInnerPoint](App.md#getinnerpoint)
- [getInnerPointByBox](App.md#getinnerpointbybox)
- [getInnerPointByLocal](App.md#getinnerpointbylocal)
- [getLocalPoint](App.md#getlocalpoint)
- [getLocalPointByInner](App.md#getlocalpointbyinner)
- [getPagePoint](App.md#getpagepoint)
- [getWorldPoint](App.md#getworldpoint)
- [getWorldPointByBox](App.md#getworldpointbybox)
- [getWorldPointByLocal](App.md#getworldpointbylocal)
- [getWorldPointByPage](App.md#getworldpointbypage)
- [setTransform](App.md#settransform)
- [transform](App.md#transform)
- [move](App.md#move)
- [moveInner](App.md#moveinner)
- [scaleOf](App.md#scaleof)
- [rotateOf](App.md#rotateof)
- [skewOf](App.md#skewof)
- [transformWorld](App.md#transformworld)
- [moveWorld](App.md#moveworld)
- [scaleOfWorld](App.md#scaleofworld)
- [rotateOfWorld](App.md#rotateofworld)
- [skewOfWorld](App.md#skewofworld)
- [flip](App.md#flip)
- [scaleResize](App.md#scaleresize)
- [\_\_scaleResize](App.md#__scaleresize)
- [resizeWidth](App.md#resizewidth)
- [resizeHeight](App.md#resizeheight)
- [hit](App.md#hit)
- [\_\_hitWorld](App.md#__hitworld)
- [\_\_hit](App.md#__hit)
- [\_\_hitFill](App.md#__hitfill)
- [\_\_hitStroke](App.md#__hitstroke)
- [\_\_hitPixel](App.md#__hitpixel)
- [\_\_drawHitPath](App.md#__drawhitpath)
- [\_\_updateHitCanvas](App.md#__updatehitcanvas)
- [\_\_drawFast](App.md#__drawfast)
- [\_\_draw](App.md#__draw)
- [\_\_clip](App.md#__clip)
- [\_\_renderShape](App.md#__rendershape)
- [\_\_drawShape](App.md#__drawshape)
- [\_\_updateWorldOpacity](App.md#__updateworldopacity)
- [\_\_updateChange](App.md#__updatechange)
- [\_\_updatePath](App.md#__updatepath)
- [getMotionPathData](App.md#getmotionpathdata)
- [getMotionPoint](App.md#getmotionpoint)
- [getMotionTotal](App.md#getmotiontotal)
- [\_\_updateMotionPath](App.md#__updatemotionpath)
- [\_\_runAnimation](App.md#__runanimation)
- [\_\_updateSortChildren](App.md#__updatesortchildren)
- [dropTo](App.md#dropto)
- [on](App.md#on)
- [off](App.md#off)
- [on\_](App.md#on_)
- [off\_](App.md#off_)
- [once](App.md#once)
- [emit](App.md#emit)
- [emitEvent](App.md#emitevent)
- [hasEvent](App.md#hasevent)
- [changeAttr](App.md#changeattr)
- [addAttr](App.md#addattr)
- [\_\_emitLifeEvent](App.md#__emitlifeevent)
- [init](App.md#init)
- [\_\_setApp](App.md#__setapp)
- [\_\_updateLocalBounds](App.md#__updatelocalbounds)
- [start](App.md#start)
- [stop](App.md#stop)
- [unlockLayout](App.md#unlocklayout)
- [lockLayout](App.md#locklayout)
- [forceRender](App.md#forcerender)
- [addLeafer](App.md#addleafer)
- [add](App.md#add)
- [forEach](App.md#foreach)
- [\_\_onCreated](App.md#__oncreated)
- [\_\_onReady](App.md#__onready)
- [\_\_onViewReady](App.md#__onviewready)
- [\_\_onChildRenderEnd](App.md#__onchildrenderend)
- [\_\_render](App.md#__render)
- [\_\_onResize](App.md#__onresize)
- [updateLayout](App.md#updatelayout)
- [\_\_getChildConfig](App.md#__getchildconfig)
- [\_\_listenChildEvents](App.md#__listenchildevents)
- [reset](App.md#reset)
- [\_\_setBranch](App.md#__setbranch)
- [toJSON](App.md#tojson)
- [pick](App.md#pick)
- [addAt](App.md#addat)
- [addAfter](App.md#addafter)
- [addBefore](App.md#addbefore)
- [addMany](App.md#addmany)
- [remove](App.md#remove)
- [removeAll](App.md#removeall)
- [clear](App.md#clear)
- [onInit](App.md#oninit)
- [initType](App.md#inittype)
- [set](App.md#set)
- [resize](App.md#resize)
- [requestRender](App.md#requestrender)
- [updateCursor](App.md#updatecursor)
- [updateLazyBounds](App.md#updatelazybounds)
- [\_\_doResize](App.md#__doresize)
- [\_\_bindApp](App.md#__bindapp)
- [\_\_setLeafer](App.md#__setleafer)
- [\_\_checkAutoLayout](App.md#__checkautolayout)
- [\_\_setAttr](App.md#__setattr)
- [\_\_getAttr](App.md#__getattr)
- [\_\_changeCanvasSize](App.md#__changecanvassize)
- [\_\_changeFill](App.md#__changefill)
- [\_\_onLayoutEnd](App.md#__onlayoutend)
- [\_\_onNextRender](App.md#__onnextrender)
- [\_\_checkViewCompleted](App.md#__checkviewcompleted)
- [\_\_onWatchData](App.md#__onwatchdata)
- [waitInit](App.md#waitinit)
- [waitReady](App.md#waitready)
- [waitViewReady](App.md#waitviewready)
- [waitViewCompleted](App.md#waitviewcompleted)
- [nextRender](App.md#nextrender)
- [zoom](App.md#zoom)
- [getValidMove](App.md#getvalidmove)
- [getValidScale](App.md#getvalidscale)
- [getWorldPointByClient](App.md#getworldpointbyclient)
- [getPagePointByClient](App.md#getpagepointbyclient)
- [getClientPointByWorld](App.md#getclientpointbyworld)
- [updateClientBounds](App.md#updateclientbounds)
- [receiveEvent](App.md#receiveevent)
- [emitLeafer](App.md#emitleafer)
- [\_\_listenEvents](App.md#__listenevents)
- [\_\_removeListenEvents](App.md#__removelistenevents)
- [destroy](App.md#destroy)
- [get](App.md#get)
- [createProxyData](App.md#createproxydata)
- [clearProxyData](App.md#clearproxydata)
- [find](App.md#find)
- [findTag](App.md#findtag)
- [findOne](App.md#findone)
- [findId](App.md#findid)
- [getPath](App.md#getpath)
- [getPathString](App.md#getpathstring)
- [asPath](App.md#aspath)
- [load](App.md#load)
- [\_\_onUpdateSize](App.md#__onupdatesize)
- [\_\_updateRenderPath](App.md#__updaterenderpath)
- [\_\_drawRenderPath](App.md#__drawrenderpath)
- [\_\_drawPath](App.md#__drawpath)
- [\_\_drawPathByData](App.md#__drawpathbydata)
- [\_\_drawPathByBox](App.md#__drawpathbybox)
- [drawImagePlaceholder](App.md#drawimageplaceholder)
- [animate](App.md#animate)
- [killAnimate](App.md#killanimate)
- [export](App.md#export)
- [syncExport](App.md#syncexport)
- [clone](App.md#clone)
- [one](App.md#one)
- [registerUI](App.md#registerui)
- [registerData](App.md#registerdata)
- [setEditConfig](App.md#seteditconfig)
- [setEditOuter](App.md#seteditouter)
- [setEditInner](App.md#seteditinner)

## Constructors

### constructor

• **new App**(`userConfig?`, `data?`): [`App`](App.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `userConfig?` | [`IAppConfig`](../interfaces/IAppConfig.md) |
| `data?` | [`IAppInputData`](../interfaces/IAppInputData.md) |

#### Returns

[`App`](App.md)

#### Overrides

[Leafer](Leafer.md).[constructor](Leafer.md#constructor)

#### Defined in

[src/ui/packages/app/src/App.ts:24](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/app/src/App.ts#L24)

## Properties

### innerId

• `Readonly` **innerId**: `number`

#### Implementation of

[IApp](../interfaces/IApp.md).[innerId](../interfaces/IApp.md#innerid)

#### Inherited from

[Leafer](Leafer.md).[innerId](Leafer.md#innerid)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:33](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/display/src/Leaf.ts#L33)

___

### skipJSON

• `Optional` **skipJSON**: `boolean`

#### Implementation of

[IApp](../interfaces/IApp.md).[skipJSON](../interfaces/IApp.md#skipjson)

#### Inherited from

[Leafer](Leafer.md).[skipJSON](Leafer.md#skipjson)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:49](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/display/src/Leaf.ts#L49)

___

### syncEventer

• `Optional` **syncEventer**: [`ILeaf`](../interfaces/ILeaf.md)

#### Implementation of

[IApp](../interfaces/IApp.md).[syncEventer](../interfaces/IApp.md#synceventer)

#### Inherited from

[Leafer](Leafer.md).[syncEventer](Leafer.md#synceventer)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:50](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/display/src/Leaf.ts#L50)

___

### lockNormalStyle

• `Optional` **lockNormalStyle**: `boolean`

#### Implementation of

[IApp](../interfaces/IApp.md).[lockNormalStyle](../interfaces/IApp.md#locknormalstyle)

#### Inherited from

[Leafer](Leafer.md).[lockNormalStyle](Leafer.md#locknormalstyle)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:51](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/display/src/Leaf.ts#L51)

___

### \_\_layout

• **\_\_layout**: [`ILeafLayout`](../interfaces/ILeafLayout.md)

#### Implementation of

[IApp](../interfaces/IApp.md).[__layout](../interfaces/IApp.md#__layout)

#### Inherited from

[Leafer](Leafer.md).[__layout](Leafer.md#__layout)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:54](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/display/src/Leaf.ts#L54)

___

### \_\_world

• **\_\_world**: [`IMatrixWithBoundsScaleData`](../interfaces/IMatrixWithBoundsScaleData.md)

#### Implementation of

[IApp](../interfaces/IApp.md).[__world](../interfaces/IApp.md#__world)

#### Inherited from

[Leafer](Leafer.md).[__world](Leafer.md#__world)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:56](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/display/src/Leaf.ts#L56)

___

### \_\_local

• `Optional` **\_\_local**: [`IMatrixWithBoundsData`](../interfaces/IMatrixWithBoundsData.md)

#### Implementation of

[IApp](../interfaces/IApp.md).[__local](../interfaces/IApp.md#__local)

#### Inherited from

[Leafer](Leafer.md).[__local](Leafer.md#__local)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:57](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/display/src/Leaf.ts#L57)

___

### \_\_nowWorld

• `Optional` **\_\_nowWorld**: [`IMatrixWithBoundsScaleData`](../interfaces/IMatrixWithBoundsScaleData.md)

#### Implementation of

[IApp](../interfaces/IApp.md).[__nowWorld](../interfaces/IApp.md#__nowworld)

#### Inherited from

[Leafer](Leafer.md).[__nowWorld](Leafer.md#__nowworld)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:59](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/display/src/Leaf.ts#L59)

___

### \_\_cameraWorld

• `Optional` **\_\_cameraWorld**: [`IMatrixWithBoundsScaleData`](../interfaces/IMatrixWithBoundsScaleData.md)

#### Implementation of

[IApp](../interfaces/IApp.md).[__cameraWorld](../interfaces/IApp.md#__cameraworld)

#### Inherited from

[Leafer](Leafer.md).[__cameraWorld](Leafer.md#__cameraworld)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:60](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/display/src/Leaf.ts#L60)

___

### \_\_worldOpacity

• **\_\_worldOpacity**: `number`

#### Implementation of

[IApp](../interfaces/IApp.md).[__worldOpacity](../interfaces/IApp.md#__worldopacity)

#### Inherited from

[Leafer](Leafer.md).[__worldOpacity](Leafer.md#__worldopacity)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:65](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/display/src/Leaf.ts#L65)

___

### \_\_scrollWorld

• `Optional` **\_\_scrollWorld**: [`IMatrixWithBoundsScaleData`](../interfaces/IMatrixWithBoundsScaleData.md)

#### Implementation of

[IApp](../interfaces/IApp.md).[__scrollWorld](../interfaces/IApp.md#__scrollworld)

#### Inherited from

[Leafer](Leafer.md).[__scrollWorld](Leafer.md#__scrollworld)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:71](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/display/src/Leaf.ts#L71)

___

### \_\_level

• **\_\_level**: `number`

#### Implementation of

[IApp](../interfaces/IApp.md).[__level](../interfaces/IApp.md#__level)

#### Inherited from

[Leafer](Leafer.md).[__level](Leafer.md#__level)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:84](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/display/src/Leaf.ts#L84)

___

### \_\_tempNumber

• **\_\_tempNumber**: `number`

#### Implementation of

[IApp](../interfaces/IApp.md).[__tempNumber](../interfaces/IApp.md#__tempnumber)

#### Inherited from

[Leafer](Leafer.md).[__tempNumber](Leafer.md#__tempnumber)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:85](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/display/src/Leaf.ts#L85)

___

### \_\_hasAutoLayout

• `Optional` **\_\_hasAutoLayout**: `boolean`

#### Implementation of

[IApp](../interfaces/IApp.md).[__hasAutoLayout](../interfaces/IApp.md#__hasautolayout)

#### Inherited from

[Leafer](Leafer.md).[__hasAutoLayout](Leafer.md#__hasautolayout)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:89](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/display/src/Leaf.ts#L89)

___

### \_\_hasMask

• `Optional` **\_\_hasMask**: `boolean`

#### Implementation of

[IApp](../interfaces/IApp.md).[__hasMask](../interfaces/IApp.md#__hasmask)

#### Inherited from

[Leafer](Leafer.md).[__hasMask](Leafer.md#__hasmask)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:90](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/display/src/Leaf.ts#L90)

___

### \_\_hasEraser

• `Optional` **\_\_hasEraser**: `boolean`

#### Implementation of

[IApp](../interfaces/IApp.md).[__hasEraser](../interfaces/IApp.md#__haseraser)

#### Inherited from

[Leafer](Leafer.md).[__hasEraser](Leafer.md#__haseraser)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:91](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/display/src/Leaf.ts#L91)

___

### \_\_hitCanvas

• `Optional` **\_\_hitCanvas**: [`IHitCanvas`](../interfaces/IHitCanvas.md)

#### Implementation of

[IApp](../interfaces/IApp.md).[__hitCanvas](../interfaces/IApp.md#__hitcanvas)

#### Inherited from

[Leafer](Leafer.md).[__hitCanvas](Leafer.md#__hitcanvas)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:92](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/display/src/Leaf.ts#L92)

___

### \_\_captureMap

• `Optional` **\_\_captureMap**: [`IEventListenerMap`](../interfaces/IEventListenerMap.md)

#### Implementation of

[IApp](../interfaces/IApp.md).[__captureMap](../interfaces/IApp.md#__capturemap)

#### Inherited from

[Leafer](Leafer.md).[__captureMap](Leafer.md#__capturemap)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:103](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/display/src/Leaf.ts#L103)

___

### \_\_bubbleMap

• `Optional` **\_\_bubbleMap**: [`IEventListenerMap`](../interfaces/IEventListenerMap.md)

#### Implementation of

[IApp](../interfaces/IApp.md).[__bubbleMap](../interfaces/IApp.md#__bubblemap)

#### Inherited from

[Leafer](Leafer.md).[__bubbleMap](Leafer.md#__bubblemap)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:104](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/display/src/Leaf.ts#L104)

___

### \_\_hasLocalEvent

• `Optional` **\_\_hasLocalEvent**: `boolean`

#### Implementation of

[IApp](../interfaces/IApp.md).[__hasLocalEvent](../interfaces/IApp.md#__haslocalevent)

#### Inherited from

[Leafer](Leafer.md).[__hasLocalEvent](Leafer.md#__haslocalevent)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:106](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/display/src/Leaf.ts#L106)

___

### \_\_hasWorldEvent

• `Optional` **\_\_hasWorldEvent**: `boolean`

#### Implementation of

[IApp](../interfaces/IApp.md).[__hasWorldEvent](../interfaces/IApp.md#__hasworldevent)

#### Inherited from

[Leafer](Leafer.md).[__hasWorldEvent](Leafer.md#__hasworldevent)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:107](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/display/src/Leaf.ts#L107)

___

### destroyed

• **destroyed**: `boolean`

#### Implementation of

[IApp](../interfaces/IApp.md).[destroyed](../interfaces/IApp.md#destroyed)

#### Inherited from

[Leafer](Leafer.md).[destroyed](Leafer.md#destroyed)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:113](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/display/src/Leaf.ts#L113)

___

### children

• **children**: [`ILeafer`](../interfaces/ILeafer.md)[]

#### Implementation of

[IApp](../interfaces/IApp.md).[children](../interfaces/IApp.md#children)

#### Overrides

[Leafer](Leafer.md).[children](Leafer.md#children)

#### Defined in

[src/ui/packages/app/src/App.ts:16](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/app/src/App.ts#L16)

___

### realCanvas

• **realCanvas**: `boolean`

#### Implementation of

[IApp](../interfaces/IApp.md).[realCanvas](../interfaces/IApp.md#realcanvas)

#### Defined in

[src/ui/packages/app/src/App.ts:18](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/app/src/App.ts#L18)

___

### ground

• **ground**: [`ILeafer`](../interfaces/ILeafer.md)

#### Implementation of

[IApp](../interfaces/IApp.md).[ground](../interfaces/IApp.md#ground)

#### Defined in

[src/ui/packages/app/src/App.ts:20](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/app/src/App.ts#L20)

___

### tree

• **tree**: [`ILeafer`](../interfaces/ILeafer.md)

#### Implementation of

[IApp](../interfaces/IApp.md).[tree](../interfaces/IApp.md#tree)

#### Defined in

[src/ui/packages/app/src/App.ts:21](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/app/src/App.ts#L21)

___

### sky

• **sky**: [`ILeafer`](../interfaces/ILeafer.md)

#### Implementation of

[IApp](../interfaces/IApp.md).[sky](../interfaces/IApp.md#sky)

#### Defined in

[src/ui/packages/app/src/App.ts:22](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/app/src/App.ts#L22)

___

### width

• `Optional` **width**: `number`

#### Implementation of

[IApp](../interfaces/IApp.md).[width](../interfaces/IApp.md#width)

#### Inherited from

[Leafer](Leafer.md).[width](Leafer.md#width)

#### Defined in

[src/ui/packages/display/src/Group.ts:23](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/display/src/Group.ts#L23)

___

### height

• `Optional` **height**: `number`

#### Implementation of

[IApp](../interfaces/IApp.md).[height](../interfaces/IApp.md#height)

#### Inherited from

[Leafer](Leafer.md).[height](Leafer.md#height)

#### Defined in

[src/ui/packages/display/src/Group.ts:26](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/display/src/Group.ts#L26)

___

### topChildren

• `Optional` **topChildren**: [`IUI`](../interfaces/IUI.md)[]

#### Implementation of

[IApp](../interfaces/IApp.md).[topChildren](../interfaces/IApp.md#topchildren)

#### Inherited from

[Leafer](Leafer.md).[topChildren](Leafer.md#topchildren)

#### Defined in

[src/ui/packages/display/src/Group.ts:30](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/display/src/Group.ts#L30)

___

### childlessJSON

• `Optional` **childlessJSON**: `boolean`

#### Implementation of

[IApp](../interfaces/IApp.md).[childlessJSON](../interfaces/IApp.md#childlessjson)

#### Inherited from

[Leafer](Leafer.md).[childlessJSON](Leafer.md#childlessjson)

#### Defined in

[src/ui/packages/display/src/Group.ts:32](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/display/src/Group.ts#L32)

___

### list

▪ `Static` **list**: [`LeafList`](LeafList.md)

#### Inherited from

[Leafer](Leafer.md).[list](Leafer.md#list)

#### Defined in

[src/ui/packages/display/src/Leafer.ts:15](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/display/src/Leafer.ts#L15)

___

### \_\_

• **\_\_**: [`ILeaferData`](../interfaces/ILeaferData.md)

#### Implementation of

[IApp](../interfaces/IApp.md).[__](../interfaces/IApp.md#__)

#### Inherited from

[Leafer](Leafer.md).[__](Leafer.md#__)

#### Defined in

[src/ui/packages/display/src/Leafer.ts:21](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/display/src/Leafer.ts#L21)

___

### pixelRatio

• `Optional` **pixelRatio**: `number`

#### Implementation of

[IApp](../interfaces/IApp.md).[pixelRatio](../interfaces/IApp.md#pixelratio)

#### Inherited from

[Leafer](Leafer.md).[pixelRatio](Leafer.md#pixelratio)

#### Defined in

[src/ui/packages/display/src/Leafer.ts:24](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/display/src/Leafer.ts#L24)

___

### mode

• **mode**: [`ILeaferMode`](../modules.md#ileafermode)

#### Implementation of

[IApp](../interfaces/IApp.md).[mode](../interfaces/IApp.md#mode)

#### Inherited from

[Leafer](Leafer.md).[mode](Leafer.md#mode)

#### Defined in

[src/ui/packages/display/src/Leafer.ts:27](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/display/src/Leafer.ts#L27)

___

### parentApp

• `Optional` **parentApp**: [`IApp`](../interfaces/IApp.md)

#### Implementation of

[IApp](../interfaces/IApp.md).[parentApp](../interfaces/IApp.md#parentapp)

#### Inherited from

[Leafer](Leafer.md).[parentApp](Leafer.md#parentapp)

#### Defined in

[src/ui/packages/display/src/Leafer.ts:34](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/display/src/Leafer.ts#L34)

___

### parent

• `Optional` **parent**: [`IApp`](../interfaces/IApp.md)

#### Implementation of

[IApp](../interfaces/IApp.md).[parent](../interfaces/IApp.md#parent)

#### Inherited from

[Leafer](Leafer.md).[parent](Leafer.md#parent)

#### Defined in

[src/ui/packages/display/src/Leafer.ts:35](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/display/src/Leafer.ts#L35)

___

### running

• **running**: `boolean`

#### Implementation of

[IApp](../interfaces/IApp.md).[running](../interfaces/IApp.md#running)

#### Inherited from

[Leafer](Leafer.md).[running](Leafer.md#running)

#### Defined in

[src/ui/packages/display/src/Leafer.ts:37](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/display/src/Leafer.ts#L37)

___

### created

• **created**: `boolean`

#### Implementation of

[IApp](../interfaces/IApp.md).[created](../interfaces/IApp.md#created)

#### Inherited from

[Leafer](Leafer.md).[created](Leafer.md#created)

#### Defined in

[src/ui/packages/display/src/Leafer.ts:38](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/display/src/Leafer.ts#L38)

___

### ready

• **ready**: `boolean`

#### Implementation of

[IApp](../interfaces/IApp.md).[ready](../interfaces/IApp.md#ready)

#### Inherited from

[Leafer](Leafer.md).[ready](Leafer.md#ready)

#### Defined in

[src/ui/packages/display/src/Leafer.ts:39](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/display/src/Leafer.ts#L39)

___

### viewReady

• **viewReady**: `boolean`

#### Implementation of

[IApp](../interfaces/IApp.md).[viewReady](../interfaces/IApp.md#viewready)

#### Inherited from

[Leafer](Leafer.md).[viewReady](Leafer.md#viewready)

#### Defined in

[src/ui/packages/display/src/Leafer.ts:40](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/display/src/Leafer.ts#L40)

___

### viewCompleted

• **viewCompleted**: `boolean`

#### Implementation of

[IApp](../interfaces/IApp.md).[viewCompleted](../interfaces/IApp.md#viewcompleted)

#### Inherited from

[Leafer](Leafer.md).[viewCompleted](Leafer.md#viewcompleted)

#### Defined in

[src/ui/packages/display/src/Leafer.ts:41](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/display/src/Leafer.ts#L41)

___

### transforming

• **transforming**: `boolean`

#### Implementation of

[IApp](../interfaces/IApp.md).[transforming](../interfaces/IApp.md#transforming)

#### Inherited from

[Leafer](Leafer.md).[transforming](Leafer.md#transforming)

#### Defined in

[src/ui/packages/display/src/Leafer.ts:45](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/display/src/Leafer.ts#L45)

___

### canvas

• **canvas**: [`ILeaferCanvas`](../interfaces/ILeaferCanvas.md)

#### Implementation of

[IApp](../interfaces/IApp.md).[canvas](../interfaces/IApp.md#canvas)

#### Inherited from

[Leafer](Leafer.md).[canvas](Leafer.md#canvas)

#### Defined in

[src/ui/packages/display/src/Leafer.ts:50](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/display/src/Leafer.ts#L50)

___

### renderer

• **renderer**: [`IRenderer`](../interfaces/IRenderer.md)

#### Implementation of

[IApp](../interfaces/IApp.md).[renderer](../interfaces/IApp.md#renderer)

#### Inherited from

[Leafer](Leafer.md).[renderer](Leafer.md#renderer)

#### Defined in

[src/ui/packages/display/src/Leafer.ts:51](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/display/src/Leafer.ts#L51)

___

### watcher

• **watcher**: [`IWatcher`](../interfaces/IWatcher.md)

#### Implementation of

[IApp](../interfaces/IApp.md).[watcher](../interfaces/IApp.md#watcher)

#### Inherited from

[Leafer](Leafer.md).[watcher](Leafer.md#watcher)

#### Defined in

[src/ui/packages/display/src/Leafer.ts:53](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/display/src/Leafer.ts#L53)

___

### layouter

• **layouter**: [`ILayouter`](../interfaces/ILayouter.md)

#### Implementation of

[IApp](../interfaces/IApp.md).[layouter](../interfaces/IApp.md#layouter)

#### Inherited from

[Leafer](Leafer.md).[layouter](Leafer.md#layouter)

#### Defined in

[src/ui/packages/display/src/Leafer.ts:54](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/display/src/Leafer.ts#L54)

___

### selector

• `Optional` **selector**: [`ISelector`](../interfaces/ISelector.md)

#### Implementation of

[IApp](../interfaces/IApp.md).[selector](../interfaces/IApp.md#selector)

#### Inherited from

[Leafer](Leafer.md).[selector](Leafer.md#selector)

#### Defined in

[src/ui/packages/display/src/Leafer.ts:56](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/display/src/Leafer.ts#L56)

___

### interaction

• `Optional` **interaction**: [`IInteraction`](../interfaces/IInteraction.md)

#### Implementation of

[IApp](../interfaces/IApp.md).[interaction](../interfaces/IApp.md#interaction)

#### Inherited from

[Leafer](Leafer.md).[interaction](Leafer.md#interaction)

#### Defined in

[src/ui/packages/display/src/Leafer.ts:57](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/display/src/Leafer.ts#L57)

___

### canvasManager

• **canvasManager**: [`ICanvasManager`](../interfaces/ICanvasManager.md)

#### Implementation of

[IApp](../interfaces/IApp.md).[canvasManager](../interfaces/IApp.md#canvasmanager)

#### Inherited from

[Leafer](Leafer.md).[canvasManager](Leafer.md#canvasmanager)

#### Defined in

[src/ui/packages/display/src/Leafer.ts:59](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/display/src/Leafer.ts#L59)

___

### hitCanvasManager

• `Optional` **hitCanvasManager**: [`IHitCanvasManager`](../interfaces/IHitCanvasManager.md)

#### Implementation of

[IApp](../interfaces/IApp.md).[hitCanvasManager](../interfaces/IApp.md#hitcanvasmanager)

#### Inherited from

[Leafer](Leafer.md).[hitCanvasManager](Leafer.md#hitcanvasmanager)

#### Defined in

[src/ui/packages/display/src/Leafer.ts:60](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/display/src/Leafer.ts#L60)

___

### editor

• **editor**: [`IEditorBase`](../interfaces/IEditorBase.md)

#### Implementation of

[IApp](../interfaces/IApp.md).[editor](../interfaces/IApp.md#editor)

#### Inherited from

[Leafer](Leafer.md).[editor](Leafer.md#editor)

#### Defined in

[src/ui/packages/display/src/Leafer.ts:63](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/display/src/Leafer.ts#L63)

___

### userConfig

• **userConfig**: [`ILeaferConfig`](../interfaces/ILeaferConfig.md)

#### Implementation of

[IApp](../interfaces/IApp.md).[userConfig](../interfaces/IApp.md#userconfig)

#### Inherited from

[Leafer](Leafer.md).[userConfig](Leafer.md#userconfig)

#### Defined in

[src/ui/packages/display/src/Leafer.ts:65](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/display/src/Leafer.ts#L65)

___

### config

• **config**: [`ILeaferConfig`](../interfaces/ILeaferConfig.md)

#### Implementation of

[IApp](../interfaces/IApp.md).[config](../interfaces/IApp.md#config)

#### Inherited from

[Leafer](Leafer.md).[config](Leafer.md#config)

#### Defined in

[src/ui/packages/display/src/Leafer.ts:66](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/display/src/Leafer.ts#L66)

___

### cacheId

• `Optional` **cacheId**: `boolean`

#### Implementation of

[IApp](../interfaces/IApp.md).[cacheId](../interfaces/IApp.md#cacheid)

#### Inherited from

[Leafer](Leafer.md).[cacheId](Leafer.md#cacheid)

#### Defined in

[src/ui/packages/display/src/Leafer.ts:76](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/display/src/Leafer.ts#L76)

___

### cacheInnerId

• `Optional` **cacheInnerId**: `boolean`

#### Implementation of

[IApp](../interfaces/IApp.md).[cacheInnerId](../interfaces/IApp.md#cacheinnerid)

#### Inherited from

[Leafer](Leafer.md).[cacheInnerId](Leafer.md#cacheinnerid)

#### Defined in

[src/ui/packages/display/src/Leafer.ts:77](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/display/src/Leafer.ts#L77)

___

### autoLayout

• `Optional` **autoLayout**: [`IAutoBounds`](../interfaces/IAutoBounds.md)

#### Implementation of

[IApp](../interfaces/IApp.md).[autoLayout](../interfaces/IApp.md#autolayout)

#### Inherited from

[Leafer](Leafer.md).[autoLayout](Leafer.md#autolayout)

#### Defined in

[src/ui/packages/display/src/Leafer.ts:79](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/display/src/Leafer.ts#L79)

___

### lazyBounds

• **lazyBounds**: [`IBounds`](../interfaces/IBounds.md)

#### Implementation of

[IApp](../interfaces/IApp.md).[lazyBounds](../interfaces/IApp.md#lazybounds)

#### Inherited from

[Leafer](Leafer.md).[lazyBounds](Leafer.md#lazybounds)

#### Defined in

[src/ui/packages/display/src/Leafer.ts:80](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/display/src/Leafer.ts#L80)

___

### leafs

• **leafs**: `number` = `0`

#### Implementation of

[IApp](../interfaces/IApp.md).[leafs](../interfaces/IApp.md#leafs)

#### Inherited from

[Leafer](Leafer.md).[leafs](Leafer.md#leafs)

#### Defined in

[src/ui/packages/display/src/Leafer.ts:85](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/display/src/Leafer.ts#L85)

___

### \_\_eventIds

• **\_\_eventIds**: [`IEventListenerId`](../interfaces/IEventListenerId.md)[] = `[]`

#### Implementation of

[IApp](../interfaces/IApp.md).[__eventIds](../interfaces/IApp.md#__eventids)

#### Inherited from

[Leafer](Leafer.md).[__eventIds](Leafer.md#__eventids)

#### Defined in

[src/ui/packages/display/src/Leafer.ts:87](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/display/src/Leafer.ts#L87)

___

### \_\_startTimer

• `Protected` **\_\_startTimer**: `any`

#### Inherited from

[Leafer](Leafer.md).[__startTimer](Leafer.md#__starttimer)

#### Defined in

[src/ui/packages/display/src/Leafer.ts:88](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/display/src/Leafer.ts#L88)

___

### \_\_controllers

• `Protected` **\_\_controllers**: [`IControl`](../interfaces/IControl.md)[] = `[]`

#### Inherited from

[Leafer](Leafer.md).[__controllers](Leafer.md#__controllers)

#### Defined in

[src/ui/packages/display/src/Leafer.ts:89](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/display/src/Leafer.ts#L89)

___

### \_\_initWait

• `Protected` **\_\_initWait**: [`IFunction`](../interfaces/IFunction.md)[]

#### Inherited from

[Leafer](Leafer.md).[__initWait](Leafer.md#__initwait)

#### Defined in

[src/ui/packages/display/src/Leafer.ts:91](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/display/src/Leafer.ts#L91)

___

### \_\_readyWait

• `Protected` **\_\_readyWait**: [`IFunction`](../interfaces/IFunction.md)[] = `[]`

#### Inherited from

[Leafer](Leafer.md).[__readyWait](Leafer.md#__readywait)

#### Defined in

[src/ui/packages/display/src/Leafer.ts:92](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/display/src/Leafer.ts#L92)

___

### \_\_viewReadyWait

• `Protected` **\_\_viewReadyWait**: [`IFunction`](../interfaces/IFunction.md)[] = `[]`

#### Inherited from

[Leafer](Leafer.md).[__viewReadyWait](Leafer.md#__viewreadywait)

#### Defined in

[src/ui/packages/display/src/Leafer.ts:93](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/display/src/Leafer.ts#L93)

___

### \_\_viewCompletedWait

• `Protected` **\_\_viewCompletedWait**: [`IFunction`](../interfaces/IFunction.md)[] = `[]`

#### Inherited from

[Leafer](Leafer.md).[__viewCompletedWait](Leafer.md#__viewcompletedwait)

#### Defined in

[src/ui/packages/display/src/Leafer.ts:94](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/display/src/Leafer.ts#L94)

___

### \_\_nextRenderWait

• **\_\_nextRenderWait**: [`IFunction`](../interfaces/IFunction.md)[] = `[]`

#### Implementation of

[IApp](../interfaces/IApp.md).[__nextRenderWait](../interfaces/IApp.md#__nextrenderwait)

#### Inherited from

[Leafer](Leafer.md).[__nextRenderWait](Leafer.md#__nextrenderwait)

#### Defined in

[src/ui/packages/display/src/Leafer.ts:95](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/display/src/Leafer.ts#L95)

___

### proxyData

• `Optional` **proxyData**: [`IUIInputData`](../interfaces/IUIInputData.md)

#### Implementation of

[IApp](../interfaces/IApp.md).[proxyData](../interfaces/IApp.md#proxydata)

#### Inherited from

[Leafer](Leafer.md).[proxyData](Leafer.md#proxydata)

#### Defined in

[src/ui/packages/display/src/UI.ts:21](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/display/src/UI.ts#L21)

___

### \_\_proxyData

• `Optional` **\_\_proxyData**: [`IUIInputData`](../interfaces/IUIInputData.md)

#### Implementation of

[IApp](../interfaces/IApp.md).[__proxyData](../interfaces/IApp.md#__proxydata)

#### Inherited from

[Leafer](Leafer.md).[__proxyData](Leafer.md#__proxydata)

#### Defined in

[src/ui/packages/display/src/UI.ts:22](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/display/src/UI.ts#L22)

___

### leafer

• `Optional` **leafer**: [`ILeafer`](../interfaces/ILeafer.md)

#### Implementation of

[IApp](../interfaces/IApp.md).[leafer](../interfaces/IApp.md#leafer)

#### Inherited from

[Leafer](Leafer.md).[leafer](Leafer.md#leafer)

#### Defined in

[src/ui/packages/display/src/UI.ts:26](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/display/src/UI.ts#L26)

___

### zoomLayer

• **zoomLayer**: [`IGroup`](../interfaces/IGroup.md)

#### Implementation of

[IApp](../interfaces/IApp.md).[zoomLayer](../interfaces/IApp.md#zoomlayer)

#### Inherited from

[Leafer](Leafer.md).[zoomLayer](Leafer.md#zoomlayer)

#### Defined in

[src/ui/packages/display/src/UI.ts:30](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/display/src/UI.ts#L30)

___

### startLinker

• `Optional` **startLinker**: [`ILinker`](../interfaces/ILinker.md)[]

#### Implementation of

[IApp](../interfaces/IApp.md).[startLinker](../interfaces/IApp.md#startlinker)

#### Inherited from

[Leafer](Leafer.md).[startLinker](Leafer.md#startlinker)

#### Defined in

[src/ui/packages/display/src/UI.ts:37](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/display/src/UI.ts#L37)

___

### endLinker

• `Optional` **endLinker**: [`ILinker`](../interfaces/ILinker.md)[]

#### Implementation of

[IApp](../interfaces/IApp.md).[endLinker](../interfaces/IApp.md#endlinker)

#### Inherited from

[Leafer](Leafer.md).[endLinker](Leafer.md#endlinker)

#### Defined in

[src/ui/packages/display/src/UI.ts:38](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/display/src/UI.ts#L38)

___

### id

• `Optional` **id**: `string`

#### Implementation of

[IApp](../interfaces/IApp.md).[id](../interfaces/IApp.md#id)

#### Inherited from

[Leafer](Leafer.md).[id](Leafer.md#id)

#### Defined in

[src/ui/packages/display/src/UI.ts:44](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/display/src/UI.ts#L44)

___

### name

• `Optional` **name**: `string`

#### Implementation of

[IApp](../interfaces/IApp.md).[name](../interfaces/IApp.md#name)

#### Inherited from

[Leafer](Leafer.md).[name](Leafer.md#name)

#### Defined in

[src/ui/packages/display/src/UI.ts:47](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/display/src/UI.ts#L47)

___

### className

• `Optional` **className**: `string`

#### Implementation of

[IApp](../interfaces/IApp.md).[className](../interfaces/IApp.md#classname)

#### Inherited from

[Leafer](Leafer.md).[className](Leafer.md#classname)

#### Defined in

[src/ui/packages/display/src/UI.ts:50](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/display/src/UI.ts#L50)

___

### blendMode

• `Optional` **blendMode**: [`IBlendMode`](../modules.md#iblendmode)

#### Implementation of

[IApp](../interfaces/IApp.md).[blendMode](../interfaces/IApp.md#blendmode)

#### Inherited from

[Leafer](Leafer.md).[blendMode](Leafer.md#blendmode)

#### Defined in

[src/ui/packages/display/src/UI.ts:55](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/display/src/UI.ts#L55)

___

### opacity

• `Optional` **opacity**: `number`

#### Implementation of

[IApp](../interfaces/IApp.md).[opacity](../interfaces/IApp.md#opacity)

#### Inherited from

[Leafer](Leafer.md).[opacity](Leafer.md#opacity)

#### Defined in

[src/ui/packages/display/src/UI.ts:58](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/display/src/UI.ts#L58)

___

### visible

• `Optional` **visible**: `boolean` \| ``0``

#### Implementation of

[IApp](../interfaces/IApp.md).[visible](../interfaces/IApp.md#visible)

#### Inherited from

[Leafer](Leafer.md).[visible](Leafer.md#visible)

#### Defined in

[src/ui/packages/display/src/UI.ts:61](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/display/src/UI.ts#L61)

___

### locked

• `Optional` **locked**: `boolean`

#### Implementation of

[IApp](../interfaces/IApp.md).[locked](../interfaces/IApp.md#locked)

#### Inherited from

[Leafer](Leafer.md).[locked](Leafer.md#locked)

#### Defined in

[src/ui/packages/display/src/UI.ts:65](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/display/src/UI.ts#L65)

___

### dim

• `Optional` **dim**: `number` \| `boolean`

#### Implementation of

[IApp](../interfaces/IApp.md).[dim](../interfaces/IApp.md#dim)

#### Inherited from

[Leafer](Leafer.md).[dim](Leafer.md#dim)

#### Defined in

[src/ui/packages/display/src/UI.ts:71](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/display/src/UI.ts#L71)

___

### dimskip

• `Optional` **dimskip**: `boolean`

#### Implementation of

[IApp](../interfaces/IApp.md).[dimskip](../interfaces/IApp.md#dimskip)

#### Inherited from

[Leafer](Leafer.md).[dimskip](Leafer.md#dimskip)

#### Defined in

[src/ui/packages/display/src/UI.ts:74](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/display/src/UI.ts#L74)

___

### bright

• `Optional` **bright**: `boolean`

#### Implementation of

[IApp](../interfaces/IApp.md).[bright](../interfaces/IApp.md#bright)

#### Inherited from

[Leafer](Leafer.md).[bright](Leafer.md#bright)

#### Defined in

[src/ui/packages/display/src/UI.ts:76](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/display/src/UI.ts#L76)

___

### zIndex

• `Optional` **zIndex**: `number`

#### Implementation of

[IApp](../interfaces/IApp.md).[zIndex](../interfaces/IApp.md#zindex)

#### Inherited from

[Leafer](Leafer.md).[zIndex](Leafer.md#zindex)

#### Defined in

[src/ui/packages/display/src/UI.ts:80](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/display/src/UI.ts#L80)

___

### mask

• `Optional` **mask**: `boolean` \| [`IMaskType`](../modules.md#imasktype)

#### Implementation of

[IApp](../interfaces/IApp.md).[mask](../interfaces/IApp.md#mask)

#### Inherited from

[Leafer](Leafer.md).[mask](Leafer.md#mask)

#### Defined in

[src/ui/packages/display/src/UI.ts:84](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/display/src/UI.ts#L84)

___

### eraser

• `Optional` **eraser**: `boolean` \| [`IEraserType`](../modules.md#ierasertype)

#### Implementation of

[IApp](../interfaces/IApp.md).[eraser](../interfaces/IApp.md#eraser)

#### Inherited from

[Leafer](Leafer.md).[eraser](Leafer.md#eraser)

#### Defined in

[src/ui/packages/display/src/UI.ts:87](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/display/src/UI.ts#L87)

___

### x

• `Optional` **x**: `number`

#### Implementation of

[IApp](../interfaces/IApp.md).[x](../interfaces/IApp.md#x)

#### Inherited from

[Leafer](Leafer.md).[x](Leafer.md#x)

#### Defined in

[src/ui/packages/display/src/UI.ts:92](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/display/src/UI.ts#L92)

___

### y

• `Optional` **y**: `number`

#### Implementation of

[IApp](../interfaces/IApp.md).[y](../interfaces/IApp.md#y)

#### Inherited from

[Leafer](Leafer.md).[y](Leafer.md#y)

#### Defined in

[src/ui/packages/display/src/UI.ts:95](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/display/src/UI.ts#L95)

___

### scaleX

• `Optional` **scaleX**: `number`

#### Implementation of

[IApp](../interfaces/IApp.md).[scaleX](../interfaces/IApp.md#scalex)

#### Inherited from

[Leafer](Leafer.md).[scaleX](Leafer.md#scalex)

#### Defined in

[src/ui/packages/display/src/UI.ts:106](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/display/src/UI.ts#L106)

___

### scaleY

• `Optional` **scaleY**: `number`

#### Implementation of

[IApp](../interfaces/IApp.md).[scaleY](../interfaces/IApp.md#scaley)

#### Inherited from

[Leafer](Leafer.md).[scaleY](Leafer.md#scaley)

#### Defined in

[src/ui/packages/display/src/UI.ts:109](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/display/src/UI.ts#L109)

___

### scaleFixed

• `Optional` **scaleFixed**: [`IScaleFixed`](../modules.md#iscalefixed)

#### Implementation of

[IApp](../interfaces/IApp.md).[scaleFixed](../interfaces/IApp.md#scalefixed)

#### Inherited from

[Leafer](Leafer.md).[scaleFixed](Leafer.md#scalefixed)

#### Defined in

[src/ui/packages/display/src/UI.ts:112](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/display/src/UI.ts#L112)

___

### rotation

• `Optional` **rotation**: `number`

#### Implementation of

[IApp](../interfaces/IApp.md).[rotation](../interfaces/IApp.md#rotation)

#### Inherited from

[Leafer](Leafer.md).[rotation](Leafer.md#rotation)

#### Defined in

[src/ui/packages/display/src/UI.ts:116](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/display/src/UI.ts#L116)

___

### skewX

• `Optional` **skewX**: `number`

#### Implementation of

[IApp](../interfaces/IApp.md).[skewX](../interfaces/IApp.md#skewx)

#### Inherited from

[Leafer](Leafer.md).[skewX](Leafer.md#skewx)

#### Defined in

[src/ui/packages/display/src/UI.ts:120](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/display/src/UI.ts#L120)

___

### skewY

• `Optional` **skewY**: `number`

#### Implementation of

[IApp](../interfaces/IApp.md).[skewY](../interfaces/IApp.md#skewy)

#### Inherited from

[Leafer](Leafer.md).[skewY](Leafer.md#skewy)

#### Defined in

[src/ui/packages/display/src/UI.ts:123](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/display/src/UI.ts#L123)

___

### offsetX

• `Optional` **offsetX**: `number`

#### Implementation of

[IApp](../interfaces/IApp.md).[offsetX](../interfaces/IApp.md#offsetx)

#### Inherited from

[Leafer](Leafer.md).[offsetX](Leafer.md#offsetx)

#### Defined in

[src/ui/packages/display/src/UI.ts:128](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/display/src/UI.ts#L128)

___

### offsetY

• `Optional` **offsetY**: `number`

#### Implementation of

[IApp](../interfaces/IApp.md).[offsetY](../interfaces/IApp.md#offsety)

#### Inherited from

[Leafer](Leafer.md).[offsetY](Leafer.md#offsety)

#### Defined in

[src/ui/packages/display/src/UI.ts:131](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/display/src/UI.ts#L131)

___

### scrollX

• `Optional` **scrollX**: `number`

#### Implementation of

[IApp](../interfaces/IApp.md).[scrollX](../interfaces/IApp.md#scrollx)

#### Inherited from

[Leafer](Leafer.md).[scrollX](Leafer.md#scrollx)

#### Defined in

[src/ui/packages/display/src/UI.ts:135](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/display/src/UI.ts#L135)

___

### scrollY

• `Optional` **scrollY**: `number`

#### Implementation of

[IApp](../interfaces/IApp.md).[scrollY](../interfaces/IApp.md#scrolly)

#### Inherited from

[Leafer](Leafer.md).[scrollY](Leafer.md#scrolly)

#### Defined in

[src/ui/packages/display/src/UI.ts:138](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/display/src/UI.ts#L138)

___

### origin

• `Optional` **origin**: [`IUnitPointData`](../interfaces/IUnitPointData.md) \| [`IDirection`](../modules.md#idirection)

#### Implementation of

[IApp](../interfaces/IApp.md).[origin](../interfaces/IApp.md#origin)

#### Inherited from

[Leafer](Leafer.md).[origin](Leafer.md#origin)

#### Defined in

[src/ui/packages/display/src/UI.ts:143](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/display/src/UI.ts#L143)

___

### around

• `Optional` **around**: [`IUnitPointData`](../interfaces/IUnitPointData.md) \| [`IDirection`](../modules.md#idirection)

#### Implementation of

[IApp](../interfaces/IApp.md).[around](../interfaces/IApp.md#around)

#### Inherited from

[Leafer](Leafer.md).[around](Leafer.md#around)

#### Defined in

[src/ui/packages/display/src/UI.ts:146](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/display/src/UI.ts#L146)

___

### lazy

• `Optional` **lazy**: `boolean`

#### Implementation of

[IApp](../interfaces/IApp.md).[lazy](../interfaces/IApp.md#lazy)

#### Inherited from

[Leafer](Leafer.md).[lazy](Leafer.md#lazy)

#### Defined in

[src/ui/packages/display/src/UI.ts:151](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/display/src/UI.ts#L151)

___

### renderSpread

• `Optional` **renderSpread**: [`IFourNumber`](../modules.md#ifournumber)

#### Implementation of

[IApp](../interfaces/IApp.md).[renderSpread](../interfaces/IApp.md#renderspread)

#### Inherited from

[Leafer](Leafer.md).[renderSpread](Leafer.md#renderspread)

#### Defined in

[src/ui/packages/display/src/UI.ts:158](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/display/src/UI.ts#L158)

___

### path

• `Optional` **path**: `string` \| [`IPathCommandData`](../modules.md#ipathcommanddata) \| [`IPathCommandNode`](../modules.md#ipathcommandnode)[] \| [`IPathCommandObject`](../modules.md#ipathcommandobject)[]

#### Implementation of

[IApp](../interfaces/IApp.md).[path](../interfaces/IApp.md#path)

#### Inherited from

[Leafer](Leafer.md).[path](Leafer.md#path)

#### Defined in

[src/ui/packages/display/src/UI.ts:163](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/display/src/UI.ts#L163)

___

### windingRule

• `Optional` **windingRule**: [`IWindingRule`](../modules.md#iwindingrule)

#### Implementation of

[IApp](../interfaces/IApp.md).[windingRule](../interfaces/IApp.md#windingrule)

#### Inherited from

[Leafer](Leafer.md).[windingRule](Leafer.md#windingrule)

#### Defined in

[src/ui/packages/display/src/UI.ts:166](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/display/src/UI.ts#L166)

___

### closed

• `Optional` **closed**: `boolean`

#### Implementation of

[IApp](../interfaces/IApp.md).[closed](../interfaces/IApp.md#closed)

#### Inherited from

[Leafer](Leafer.md).[closed](Leafer.md#closed)

#### Defined in

[src/ui/packages/display/src/UI.ts:169](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/display/src/UI.ts#L169)

___

### flow

• `Optional` **flow**: [`IFlowType`](../modules.md#iflowtype)

#### Implementation of

[IApp](../interfaces/IApp.md).[flow](../interfaces/IApp.md#flow)

#### Inherited from

[Leafer](Leafer.md).[flow](Leafer.md#flow)

#### Defined in

[src/ui/packages/display/src/UI.ts:173](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/display/src/UI.ts#L173)

___

### padding

• `Optional` **padding**: [`IFourNumber`](../modules.md#ifournumber)

#### Implementation of

[IApp](../interfaces/IApp.md).[padding](../interfaces/IApp.md#padding)

#### Inherited from

[Leafer](Leafer.md).[padding](Leafer.md#padding)

#### Defined in

[src/ui/packages/display/src/UI.ts:176](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/display/src/UI.ts#L176)

___

### gap

• `Optional` **gap**: [`IGap`](../modules.md#igap) \| [`IPointGap`](../interfaces/IPointGap.md)

#### Implementation of

[IApp](../interfaces/IApp.md).[gap](../interfaces/IApp.md#gap)

#### Inherited from

[Leafer](Leafer.md).[gap](Leafer.md#gap)

#### Defined in

[src/ui/packages/display/src/UI.ts:178](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/display/src/UI.ts#L178)

___

### flowAlign

• `Optional` **flowAlign**: [`IFlowAxisAlign`](../interfaces/IFlowAxisAlign.md) \| [`IFlowAlign`](../modules.md#iflowalign)

#### Implementation of

[IApp](../interfaces/IApp.md).[flowAlign](../interfaces/IApp.md#flowalign)

#### Inherited from

[Leafer](Leafer.md).[flowAlign](Leafer.md#flowalign)

#### Defined in

[src/ui/packages/display/src/UI.ts:180](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/display/src/UI.ts#L180)

___

### flowWrap

• `Optional` **flowWrap**: [`IFlowWrap`](../modules.md#iflowwrap)

#### Implementation of

[IApp](../interfaces/IApp.md).[flowWrap](../interfaces/IApp.md#flowwrap)

#### Inherited from

[Leafer](Leafer.md).[flowWrap](Leafer.md#flowwrap)

#### Defined in

[src/ui/packages/display/src/UI.ts:182](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/display/src/UI.ts#L182)

___

### itemBox

• `Optional` **itemBox**: [`IFlowBoxType`](../modules.md#iflowboxtype)

#### Implementation of

[IApp](../interfaces/IApp.md).[itemBox](../interfaces/IApp.md#itembox)

#### Inherited from

[Leafer](Leafer.md).[itemBox](Leafer.md#itembox)

#### Defined in

[src/ui/packages/display/src/UI.ts:185](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/display/src/UI.ts#L185)

___

### inFlow

• `Optional` **inFlow**: `boolean`

#### Implementation of

[IApp](../interfaces/IApp.md).[inFlow](../interfaces/IApp.md#inflow)

#### Inherited from

[Leafer](Leafer.md).[inFlow](Leafer.md#inflow)

#### Defined in

[src/ui/packages/display/src/UI.ts:187](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/display/src/UI.ts#L187)

___

### autoWidth

• `Optional` **autoWidth**: [`IAutoSize`](../modules.md#iautosize)

#### Implementation of

[IApp](../interfaces/IApp.md).[autoWidth](../interfaces/IApp.md#autowidth)

#### Inherited from

[Leafer](Leafer.md).[autoWidth](Leafer.md#autowidth)

#### Defined in

[src/ui/packages/display/src/UI.ts:190](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/display/src/UI.ts#L190)

___

### autoHeight

• `Optional` **autoHeight**: [`IAutoSize`](../modules.md#iautosize)

#### Implementation of

[IApp](../interfaces/IApp.md).[autoHeight](../interfaces/IApp.md#autoheight)

#### Inherited from

[Leafer](Leafer.md).[autoHeight](Leafer.md#autoheight)

#### Defined in

[src/ui/packages/display/src/UI.ts:192](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/display/src/UI.ts#L192)

___

### lockRatio

• `Optional` **lockRatio**: `boolean`

#### Implementation of

[IApp](../interfaces/IApp.md).[lockRatio](../interfaces/IApp.md#lockratio)

#### Inherited from

[Leafer](Leafer.md).[lockRatio](Leafer.md#lockratio)

#### Defined in

[src/ui/packages/display/src/UI.ts:195](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/display/src/UI.ts#L195)

___

### autoBox

• `Optional` **autoBox**: [`IAutoBoxData`](../interfaces/IAutoBoxData.md) \| [`IConstraint`](../interfaces/IConstraint.md)

#### Implementation of

[IApp](../interfaces/IApp.md).[autoBox](../interfaces/IApp.md#autobox)

#### Inherited from

[Leafer](Leafer.md).[autoBox](Leafer.md#autobox)

#### Defined in

[src/ui/packages/display/src/UI.ts:197](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/display/src/UI.ts#L197)

___

### widthRange

• `Optional` **widthRange**: [`IRangeSize`](../interfaces/IRangeSize.md)

#### Implementation of

[IApp](../interfaces/IApp.md).[widthRange](../interfaces/IApp.md#widthrange)

#### Inherited from

[Leafer](Leafer.md).[widthRange](Leafer.md#widthrange)

#### Defined in

[src/ui/packages/display/src/UI.ts:200](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/display/src/UI.ts#L200)

___

### heightRange

• `Optional` **heightRange**: [`IRangeSize`](../interfaces/IRangeSize.md)

#### Implementation of

[IApp](../interfaces/IApp.md).[heightRange](../interfaces/IApp.md#heightrange)

#### Inherited from

[Leafer](Leafer.md).[heightRange](Leafer.md#heightrange)

#### Defined in

[src/ui/packages/display/src/UI.ts:203](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/display/src/UI.ts#L203)

___

### draggable

• `Optional` **draggable**: `boolean` \| [`IAxis`](../modules.md#iaxis)

#### Implementation of

[IApp](../interfaces/IApp.md).[draggable](../interfaces/IApp.md#draggable)

#### Inherited from

[Leafer](Leafer.md).[draggable](Leafer.md#draggable)

#### Defined in

[src/ui/packages/display/src/UI.ts:208](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/display/src/UI.ts#L208)

___

### dragBounds

• `Optional` **dragBounds**: ``"parent"`` \| [`IBoundsData`](../interfaces/IBoundsData.md)

#### Implementation of

[IApp](../interfaces/IApp.md).[dragBounds](../interfaces/IApp.md#dragbounds)

#### Inherited from

[Leafer](Leafer.md).[dragBounds](Leafer.md#dragbounds)

#### Defined in

[src/ui/packages/display/src/UI.ts:211](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/display/src/UI.ts#L211)

___

### dragBoundsType

• `Optional` **dragBoundsType**: [`IDragBoundsType`](../modules.md#idragboundstype)

#### Implementation of

[IApp](../interfaces/IApp.md).[dragBoundsType](../interfaces/IApp.md#dragboundstype)

#### Inherited from

[Leafer](Leafer.md).[dragBoundsType](Leafer.md#dragboundstype)

#### Defined in

[src/ui/packages/display/src/UI.ts:214](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/display/src/UI.ts#L214)

___

### editable

• `Optional` **editable**: `boolean`

#### Implementation of

[IApp](../interfaces/IApp.md).[editable](../interfaces/IApp.md#editable)

#### Inherited from

[Leafer](Leafer.md).[editable](Leafer.md#editable)

#### Defined in

[src/ui/packages/display/src/UI.ts:218](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/display/src/UI.ts#L218)

___

### hittable

• `Optional` **hittable**: `boolean`

#### Implementation of

[IApp](../interfaces/IApp.md).[hittable](../interfaces/IApp.md#hittable)

#### Inherited from

[Leafer](Leafer.md).[hittable](Leafer.md#hittable)

#### Defined in

[src/ui/packages/display/src/UI.ts:223](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/display/src/UI.ts#L223)

___

### hitFill

• `Optional` **hitFill**: [`IHitType`](../modules.md#ihittype)

#### Implementation of

[IApp](../interfaces/IApp.md).[hitFill](../interfaces/IApp.md#hitfill)

#### Inherited from

[Leafer](Leafer.md).[hitFill](Leafer.md#hitfill)

#### Defined in

[src/ui/packages/display/src/UI.ts:226](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/display/src/UI.ts#L226)

___

### hitStroke

• `Optional` **hitStroke**: [`IHitType`](../modules.md#ihittype)

#### Implementation of

[IApp](../interfaces/IApp.md).[hitStroke](../interfaces/IApp.md#hitstroke)

#### Inherited from

[Leafer](Leafer.md).[hitStroke](Leafer.md#hitstroke)

#### Defined in

[src/ui/packages/display/src/UI.ts:229](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/display/src/UI.ts#L229)

___

### hitBox

• `Optional` **hitBox**: `boolean`

#### Implementation of

[IApp](../interfaces/IApp.md).[hitBox](../interfaces/IApp.md#hitbox)

#### Inherited from

[Leafer](Leafer.md).[hitBox](Leafer.md#hitbox)

#### Defined in

[src/ui/packages/display/src/UI.ts:232](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/display/src/UI.ts#L232)

___

### hitChildren

• `Optional` **hitChildren**: `boolean`

#### Implementation of

[IApp](../interfaces/IApp.md).[hitChildren](../interfaces/IApp.md#hitchildren)

#### Inherited from

[Leafer](Leafer.md).[hitChildren](Leafer.md#hitchildren)

#### Defined in

[src/ui/packages/display/src/UI.ts:235](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/display/src/UI.ts#L235)

___

### hitSelf

• `Optional` **hitSelf**: `boolean`

#### Implementation of

[IApp](../interfaces/IApp.md).[hitSelf](../interfaces/IApp.md#hitself)

#### Inherited from

[Leafer](Leafer.md).[hitSelf](Leafer.md#hitself)

#### Defined in

[src/ui/packages/display/src/UI.ts:238](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/display/src/UI.ts#L238)

___

### hitRadius

• `Optional` **hitRadius**: `number`

#### Implementation of

[IApp](../interfaces/IApp.md).[hitRadius](../interfaces/IApp.md#hitradius)

#### Inherited from

[Leafer](Leafer.md).[hitRadius](Leafer.md#hitradius)

#### Defined in

[src/ui/packages/display/src/UI.ts:241](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/display/src/UI.ts#L241)

___

### cursor

• `Optional` **cursor**: [`ICursorType`](../modules.md#icursortype) \| [`ICursorType`](../modules.md#icursortype)[]

#### Implementation of

[IApp](../interfaces/IApp.md).[cursor](../interfaces/IApp.md#cursor)

#### Inherited from

[Leafer](Leafer.md).[cursor](Leafer.md#cursor)

#### Defined in

[src/ui/packages/display/src/UI.ts:244](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/display/src/UI.ts#L244)

___

### fill

• `Optional` **fill**: [`IFill`](../modules.md#ifill)

#### Implementation of

[IApp](../interfaces/IApp.md).[fill](../interfaces/IApp.md#fill)

#### Inherited from

[Leafer](Leafer.md).[fill](Leafer.md#fill)

#### Defined in

[src/ui/packages/display/src/UI.ts:252](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/display/src/UI.ts#L252)

___

### stroke

• `Optional` **stroke**: [`IStroke`](../modules.md#istroke)

#### Implementation of

[IApp](../interfaces/IApp.md).[stroke](../interfaces/IApp.md#stroke)

#### Inherited from

[Leafer](Leafer.md).[stroke](Leafer.md#stroke)

#### Defined in

[src/ui/packages/display/src/UI.ts:257](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/display/src/UI.ts#L257)

___

### strokeAlign

• `Optional` **strokeAlign**: [`IStrokeAlign`](../modules.md#istrokealign)

#### Implementation of

[IApp](../interfaces/IApp.md).[strokeAlign](../interfaces/IApp.md#strokealign)

#### Inherited from

[Leafer](Leafer.md).[strokeAlign](Leafer.md#strokealign)

#### Defined in

[src/ui/packages/display/src/UI.ts:260](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/display/src/UI.ts#L260)

___

### strokeWidth

• `Optional` **strokeWidth**: `string` \| [`IFourNumber`](../modules.md#ifournumber)

#### Implementation of

[IApp](../interfaces/IApp.md).[strokeWidth](../interfaces/IApp.md#strokewidth)

#### Inherited from

[Leafer](Leafer.md).[strokeWidth](Leafer.md#strokewidth)

#### Defined in

[src/ui/packages/display/src/UI.ts:263](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/display/src/UI.ts#L263)

___

### strokeScaleFixed

• `Optional` **strokeScaleFixed**: [`IScaleFixed`](../modules.md#iscalefixed)

#### Implementation of

[IApp](../interfaces/IApp.md).[strokeScaleFixed](../interfaces/IApp.md#strokescalefixed)

#### Inherited from

[Leafer](Leafer.md).[strokeScaleFixed](Leafer.md#strokescalefixed)

#### Defined in

[src/ui/packages/display/src/UI.ts:266](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/display/src/UI.ts#L266)

___

### strokeCap

• `Optional` **strokeCap**: [`IStrokeCap`](../modules.md#istrokecap)

#### Implementation of

[IApp](../interfaces/IApp.md).[strokeCap](../interfaces/IApp.md#strokecap)

#### Inherited from

[Leafer](Leafer.md).[strokeCap](Leafer.md#strokecap)

#### Defined in

[src/ui/packages/display/src/UI.ts:273](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/display/src/UI.ts#L273)

___

### strokeJoin

• `Optional` **strokeJoin**: [`IStrokeJoin`](../modules.md#istrokejoin)

#### Implementation of

[IApp](../interfaces/IApp.md).[strokeJoin](../interfaces/IApp.md#strokejoin)

#### Inherited from

[Leafer](Leafer.md).[strokeJoin](Leafer.md#strokejoin)

#### Defined in

[src/ui/packages/display/src/UI.ts:276](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/display/src/UI.ts#L276)

___

### dashPattern

• `Optional` **dashPattern**: `string` \| `number`[]

#### Implementation of

[IApp](../interfaces/IApp.md).[dashPattern](../interfaces/IApp.md#dashpattern)

#### Inherited from

[Leafer](Leafer.md).[dashPattern](Leafer.md#dashpattern)

#### Defined in

[src/ui/packages/display/src/UI.ts:279](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/display/src/UI.ts#L279)

___

### dashOffset

• `Optional` **dashOffset**: `number`

#### Implementation of

[IApp](../interfaces/IApp.md).[dashOffset](../interfaces/IApp.md#dashoffset)

#### Inherited from

[Leafer](Leafer.md).[dashOffset](Leafer.md#dashoffset)

#### Defined in

[src/ui/packages/display/src/UI.ts:282](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/display/src/UI.ts#L282)

___

### miterLimit

• `Optional` **miterLimit**: `number`

#### Implementation of

[IApp](../interfaces/IApp.md).[miterLimit](../interfaces/IApp.md#miterlimit)

#### Inherited from

[Leafer](Leafer.md).[miterLimit](Leafer.md#miterlimit)

#### Defined in

[src/ui/packages/display/src/UI.ts:285](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/display/src/UI.ts#L285)

___

### startArrow

• `Optional` **startArrow**: [`IArrowStyle`](../modules.md#iarrowstyle)

#### Implementation of

[IApp](../interfaces/IApp.md).[startArrow](../interfaces/IApp.md#startarrow)

#### Inherited from

[Leafer](Leafer.md).[startArrow](Leafer.md#startarrow)

#### Defined in

[src/ui/packages/display/src/UI.ts:290](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/display/src/UI.ts#L290)

___

### endArrow

• `Optional` **endArrow**: [`IArrowStyle`](../modules.md#iarrowstyle)

#### Implementation of

[IApp](../interfaces/IApp.md).[endArrow](../interfaces/IApp.md#endarrow)

#### Inherited from

[Leafer](Leafer.md).[endArrow](Leafer.md#endarrow)

#### Defined in

[src/ui/packages/display/src/UI.ts:292](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/display/src/UI.ts#L292)

___

### cornerRadius

• `Optional` **cornerRadius**: `string` \| [`IFourNumber`](../modules.md#ifournumber)

#### Implementation of

[IApp](../interfaces/IApp.md).[cornerRadius](../interfaces/IApp.md#cornerradius)

#### Inherited from

[Leafer](Leafer.md).[cornerRadius](Leafer.md#cornerradius)

#### Defined in

[src/ui/packages/display/src/UI.ts:297](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/display/src/UI.ts#L297)

___

### cornerSmoothing

• `Optional` **cornerSmoothing**: `number`

#### Implementation of

[IApp](../interfaces/IApp.md).[cornerSmoothing](../interfaces/IApp.md#cornersmoothing)

#### Inherited from

[Leafer](Leafer.md).[cornerSmoothing](Leafer.md#cornersmoothing)

#### Defined in

[src/ui/packages/display/src/UI.ts:300](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/display/src/UI.ts#L300)

___

### shadow

• `Optional` **shadow**: `string` \| [`IShadowEffect`](../interfaces/IShadowEffect.md) \| [`IShadowEffect`](../interfaces/IShadowEffect.md)[]

#### Implementation of

[IApp](../interfaces/IApp.md).[shadow](../interfaces/IApp.md#shadow)

#### Inherited from

[Leafer](Leafer.md).[shadow](Leafer.md#shadow)

#### Defined in

[src/ui/packages/display/src/UI.ts:305](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/display/src/UI.ts#L305)

___

### innerShadow

• `Optional` **innerShadow**: `string` \| [`IShadowEffect`](../interfaces/IShadowEffect.md) \| [`IShadowEffect`](../interfaces/IShadowEffect.md)[]

#### Implementation of

[IApp](../interfaces/IApp.md).[innerShadow](../interfaces/IApp.md#innershadow)

#### Inherited from

[Leafer](Leafer.md).[innerShadow](Leafer.md#innershadow)

#### Defined in

[src/ui/packages/display/src/UI.ts:308](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/display/src/UI.ts#L308)

___

### blur

• `Optional` **blur**: `number` \| [`IBlurEffect`](../interfaces/IBlurEffect.md)

#### Implementation of

[IApp](../interfaces/IApp.md).[blur](../interfaces/IApp.md#blur)

#### Inherited from

[Leafer](Leafer.md).[blur](Leafer.md#blur)

#### Defined in

[src/ui/packages/display/src/UI.ts:311](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/display/src/UI.ts#L311)

___

### backgroundBlur

• `Optional` **backgroundBlur**: `number` \| [`IBlurEffect`](../interfaces/IBlurEffect.md)

#### Implementation of

[IApp](../interfaces/IApp.md).[backgroundBlur](../interfaces/IApp.md#backgroundblur)

#### Inherited from

[Leafer](Leafer.md).[backgroundBlur](Leafer.md#backgroundblur)

#### Defined in

[src/ui/packages/display/src/UI.ts:314](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/display/src/UI.ts#L314)

___

### grayscale

• `Optional` **grayscale**: `number` \| [`IGrayscaleEffect`](../interfaces/IGrayscaleEffect.md)

#### Implementation of

[IApp](../interfaces/IApp.md).[grayscale](../interfaces/IApp.md#grayscale)

#### Inherited from

[Leafer](Leafer.md).[grayscale](Leafer.md#grayscale)

#### Defined in

[src/ui/packages/display/src/UI.ts:317](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/display/src/UI.ts#L317)

___

### filter

• `Optional` **filter**: [`IFilter`](../interfaces/IFilter.md) \| [`IFilter`](../interfaces/IFilter.md)[]

#### Implementation of

[IApp](../interfaces/IApp.md).[filter](../interfaces/IApp.md#filter)

#### Inherited from

[Leafer](Leafer.md).[filter](Leafer.md#filter)

#### Defined in

[src/ui/packages/display/src/UI.ts:320](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/display/src/UI.ts#L320)

___

### complex

• `Optional` **complex**: `boolean`

#### Implementation of

[IApp](../interfaces/IApp.md).[complex](../interfaces/IApp.md#complex)

#### Inherited from

[Leafer](Leafer.md).[complex](Leafer.md#complex)

#### Defined in

[src/ui/packages/display/src/UI.ts:325](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/display/src/UI.ts#L325)

___

### animation

• `Optional` **animation**: [`IAnimation`](../modules.md#ianimation) \| [`IAnimation`](../modules.md#ianimation)[]

#### Implementation of

[IApp](../interfaces/IApp.md).[animation](../interfaces/IApp.md#animation)

#### Inherited from

[Leafer](Leafer.md).[animation](Leafer.md#animation)

#### Defined in

[src/ui/packages/display/src/UI.ts:330](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/display/src/UI.ts#L330)

___

### animationOut

• `Optional` **animationOut**: [`IAnimation`](../modules.md#ianimation) \| [`IAnimation`](../modules.md#ianimation)[]

#### Implementation of

[IApp](../interfaces/IApp.md).[animationOut](../interfaces/IApp.md#animationout)

#### Inherited from

[Leafer](Leafer.md).[animationOut](Leafer.md#animationout)

#### Defined in

[src/ui/packages/display/src/UI.ts:332](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/display/src/UI.ts#L332)

___

### transition

• `Optional` **transition**: [`ITransition`](../modules.md#itransition)

#### Implementation of

[IApp](../interfaces/IApp.md).[transition](../interfaces/IApp.md#transition)

#### Inherited from

[Leafer](Leafer.md).[transition](Leafer.md#transition)

#### Defined in

[src/ui/packages/display/src/UI.ts:335](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/display/src/UI.ts#L335)

___

### transitionOut

• `Optional` **transitionOut**: [`ITransition`](../modules.md#itransition)

#### Implementation of

[IApp](../interfaces/IApp.md).[transitionOut](../interfaces/IApp.md#transitionout)

#### Inherited from

[Leafer](Leafer.md).[transitionOut](Leafer.md#transitionout)

#### Defined in

[src/ui/packages/display/src/UI.ts:337](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/display/src/UI.ts#L337)

___

### motionPath

• `Optional` **motionPath**: `boolean`

#### Implementation of

[IApp](../interfaces/IApp.md).[motionPath](../interfaces/IApp.md#motionpath)

#### Inherited from

[Leafer](Leafer.md).[motionPath](Leafer.md#motionpath)

#### Defined in

[src/ui/packages/display/src/UI.ts:342](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/display/src/UI.ts#L342)

___

### motionPrecision

• `Optional` **motionPrecision**: `number`

#### Implementation of

[IApp](../interfaces/IApp.md).[motionPrecision](../interfaces/IApp.md#motionprecision)

#### Inherited from

[Leafer](Leafer.md).[motionPrecision](Leafer.md#motionprecision)

#### Defined in

[src/ui/packages/display/src/UI.ts:344](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/display/src/UI.ts#L344)

___

### motion

• `Optional` **motion**: `number` \| [`IUnitData`](../interfaces/IUnitData.md)

#### Implementation of

[IApp](../interfaces/IApp.md).[motion](../interfaces/IApp.md#motion)

#### Inherited from

[Leafer](Leafer.md).[motion](Leafer.md#motion)

#### Defined in

[src/ui/packages/display/src/UI.ts:347](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/display/src/UI.ts#L347)

___

### motionRotation

• `Optional` **motionRotation**: `number` \| `boolean`

#### Implementation of

[IApp](../interfaces/IApp.md).[motionRotation](../interfaces/IApp.md#motionrotation)

#### Inherited from

[Leafer](Leafer.md).[motionRotation](Leafer.md#motionrotation)

#### Defined in

[src/ui/packages/display/src/UI.ts:349](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/display/src/UI.ts#L349)

___

### states

• `Optional` **states**: [`IStates`](../interfaces/IStates.md)

#### Implementation of

[IApp](../interfaces/IApp.md).[states](../interfaces/IApp.md#states)

#### Inherited from

[Leafer](Leafer.md).[states](Leafer.md#states)

#### Defined in

[src/ui/packages/display/src/UI.ts:354](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/display/src/UI.ts#L354)

___

### state

• `Optional` **state**: `string`

#### Implementation of

[IApp](../interfaces/IApp.md).[state](../interfaces/IApp.md#state)

#### Inherited from

[Leafer](Leafer.md).[state](Leafer.md#state)

#### Defined in

[src/ui/packages/display/src/UI.ts:356](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/display/src/UI.ts#L356)

___

### selected

• `Optional` **selected**: `boolean`

#### Implementation of

[IApp](../interfaces/IApp.md).[selected](../interfaces/IApp.md#selected)

#### Inherited from

[Leafer](Leafer.md).[selected](Leafer.md#selected)

#### Defined in

[src/ui/packages/display/src/UI.ts:359](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/display/src/UI.ts#L359)

___

### disabled

• `Optional` **disabled**: `boolean`

#### Implementation of

[IApp](../interfaces/IApp.md).[disabled](../interfaces/IApp.md#disabled)

#### Inherited from

[Leafer](Leafer.md).[disabled](Leafer.md#disabled)

#### Defined in

[src/ui/packages/display/src/UI.ts:361](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/display/src/UI.ts#L361)

___

### normalStyle

• `Optional` **normalStyle**: [`IStateStyle`](../interfaces/IStateStyle.md)

#### Implementation of

[IApp](../interfaces/IApp.md).[normalStyle](../interfaces/IApp.md#normalstyle)

#### Inherited from

[Leafer](Leafer.md).[normalStyle](Leafer.md#normalstyle)

#### Defined in

[src/ui/packages/display/src/UI.ts:364](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/display/src/UI.ts#L364)

___

### hoverStyle

• `Optional` **hoverStyle**: [`IStateStyle`](../interfaces/IStateStyle.md)

#### Implementation of

[IApp](../interfaces/IApp.md).[hoverStyle](../interfaces/IApp.md#hoverstyle)

#### Inherited from

[Leafer](Leafer.md).[hoverStyle](Leafer.md#hoverstyle)

#### Defined in

[src/ui/packages/display/src/UI.ts:366](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/display/src/UI.ts#L366)

___

### pressStyle

• `Optional` **pressStyle**: [`IStateStyle`](../interfaces/IStateStyle.md)

#### Implementation of

[IApp](../interfaces/IApp.md).[pressStyle](../interfaces/IApp.md#pressstyle)

#### Inherited from

[Leafer](Leafer.md).[pressStyle](Leafer.md#pressstyle)

#### Defined in

[src/ui/packages/display/src/UI.ts:368](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/display/src/UI.ts#L368)

___

### focusStyle

• `Optional` **focusStyle**: [`IStateStyle`](../interfaces/IStateStyle.md)

#### Implementation of

[IApp](../interfaces/IApp.md).[focusStyle](../interfaces/IApp.md#focusstyle)

#### Inherited from

[Leafer](Leafer.md).[focusStyle](Leafer.md#focusstyle)

#### Defined in

[src/ui/packages/display/src/UI.ts:370](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/display/src/UI.ts#L370)

___

### selectedStyle

• `Optional` **selectedStyle**: [`IStateStyle`](../interfaces/IStateStyle.md)

#### Implementation of

[IApp](../interfaces/IApp.md).[selectedStyle](../interfaces/IApp.md#selectedstyle)

#### Inherited from

[Leafer](Leafer.md).[selectedStyle](Leafer.md#selectedstyle)

#### Defined in

[src/ui/packages/display/src/UI.ts:372](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/display/src/UI.ts#L372)

___

### disabledStyle

• `Optional` **disabledStyle**: [`IStateStyle`](../interfaces/IStateStyle.md)

#### Implementation of

[IApp](../interfaces/IApp.md).[disabledStyle](../interfaces/IApp.md#disabledstyle)

#### Inherited from

[Leafer](Leafer.md).[disabledStyle](Leafer.md#disabledstyle)

#### Defined in

[src/ui/packages/display/src/UI.ts:374](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/display/src/UI.ts#L374)

___

### placeholderStyle

• `Optional` **placeholderStyle**: [`IStateStyle`](../interfaces/IStateStyle.md)

#### Implementation of

[IApp](../interfaces/IApp.md).[placeholderStyle](../interfaces/IApp.md#placeholderstyle)

#### Inherited from

[Leafer](Leafer.md).[placeholderStyle](Leafer.md#placeholderstyle)

#### Defined in

[src/ui/packages/display/src/UI.ts:377](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/display/src/UI.ts#L377)

___

### placeholderColor

• `Optional` **placeholderColor**: `string`

#### Implementation of

[IApp](../interfaces/IApp.md).[placeholderColor](../interfaces/IApp.md#placeholdercolor)

#### Inherited from

[Leafer](Leafer.md).[placeholderColor](Leafer.md#placeholdercolor)

#### Defined in

[src/ui/packages/display/src/UI.ts:380](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/display/src/UI.ts#L380)

___

### placeholderDelay

• `Optional` **placeholderDelay**: `number`

#### Implementation of

[IApp](../interfaces/IApp.md).[placeholderDelay](../interfaces/IApp.md#placeholderdelay)

#### Inherited from

[Leafer](Leafer.md).[placeholderDelay](Leafer.md#placeholderdelay)

#### Defined in

[src/ui/packages/display/src/UI.ts:383](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/display/src/UI.ts#L383)

___

### button

• `Optional` **button**: `boolean`

#### Implementation of

[IApp](../interfaces/IApp.md).[button](../interfaces/IApp.md#button)

#### Inherited from

[Leafer](Leafer.md).[button](Leafer.md#button)

#### Defined in

[src/ui/packages/display/src/UI.ts:386](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/display/src/UI.ts#L386)

___

### editConfig

• **editConfig**: [`IEditorConfig`](../interfaces/IEditorConfig.md)

#### Implementation of

[IApp](../interfaces/IApp.md).[editConfig](../interfaces/IApp.md#editconfig)

#### Inherited from

[Leafer](Leafer.md).[editConfig](Leafer.md#editconfig)

#### Defined in

[src/ui/packages/display/src/UI.ts:391](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/display/src/UI.ts#L391)

___

### editOuter

• **editOuter**: `string`

#### Implementation of

[IApp](../interfaces/IApp.md).[editOuter](../interfaces/IApp.md#editouter)

#### Inherited from

[Leafer](Leafer.md).[editOuter](Leafer.md#editouter)

#### Defined in

[src/ui/packages/display/src/UI.ts:393](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/display/src/UI.ts#L393)

___

### editInner

• **editInner**: `string`

#### Implementation of

[IApp](../interfaces/IApp.md).[editInner](../interfaces/IApp.md#editinner)

#### Inherited from

[Leafer](Leafer.md).[editInner](Leafer.md#editinner)

#### Defined in

[src/ui/packages/display/src/UI.ts:395](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/display/src/UI.ts#L395)

___

### data

• **data**: [`IObject`](../interfaces/IObject.md)

#### Implementation of

[IApp](../interfaces/IApp.md).[data](../interfaces/IApp.md#data)

#### Inherited from

[Leafer](Leafer.md).[data](Leafer.md#data)

#### Defined in

[src/ui/packages/display/src/UI.ts:400](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/display/src/UI.ts#L400)

___

### useFastShadow

• `Optional` **useFastShadow**: `boolean`

#### Implementation of

[IApp](../interfaces/IApp.md).[useFastShadow](../interfaces/IApp.md#usefastshadow)

#### Inherited from

[Leafer](Leafer.md).[useFastShadow](Leafer.md#usefastshadow)

#### Defined in

[src/ui/packages/display/src/UI.ts:409](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/display/src/UI.ts#L409)

___

### \_\_box

• `Optional` **\_\_box**: [`IUI`](../interfaces/IUI.md)

#### Implementation of

[IApp](../interfaces/IApp.md).[__box](../interfaces/IApp.md#__box)

#### Inherited from

[Leafer](Leafer.md).[__box](Leafer.md#__box)

#### Defined in

[src/ui/packages/display/src/UI.ts:411](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/display/src/UI.ts#L411)

___

### \_\_animate

• `Optional` **\_\_animate**: [`IAnimate`](../interfaces/IAnimate.md) \| [`IAnimateList`](../interfaces/IAnimateList.md)

#### Implementation of

[IApp](../interfaces/IApp.md).[__animate](../interfaces/IApp.md#__animate)

#### Inherited from

[Leafer](Leafer.md).[__animate](Leafer.md#__animate)

#### Defined in

[src/ui/packages/display/src/UI.ts:412](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/display/src/UI.ts#L412)

## Accessors

### tag

• `get` **tag**(): `string`

#### Returns

`string`

#### Implementation of

[IApp](../interfaces/IApp.md).[tag](../interfaces/IApp.md#tag)

#### Inherited from

Leafer.tag

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

[IApp](../interfaces/IApp.md).[tag](../interfaces/IApp.md#tag)

#### Inherited from

Leafer.tag

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:29](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/display/src/Leaf.ts#L29)

___

### innerName

• `get` **innerName**(): `string`

#### Returns

`string`

#### Implementation of

[IApp](../interfaces/IApp.md).[innerName](../interfaces/IApp.md#innername)

#### Inherited from

Leafer.innerName

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:34](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/display/src/Leaf.ts#L34)

___

### \_\_DataProcessor

• `get` **__DataProcessor**(): typeof [`LeafData`](LeafData.md)

#### Returns

typeof [`LeafData`](LeafData.md)

#### Implementation of

[IApp](../interfaces/IApp.md).[__DataProcessor](../interfaces/IApp.md#__dataprocessor)

#### Inherited from

Leafer.\_\_DataProcessor

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:36](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/display/src/Leaf.ts#L36)

___

### \_\_LayoutProcessor

• `get` **__LayoutProcessor**(): typeof [`LeafLayout`](LeafLayout.md)

#### Returns

typeof [`LeafLayout`](LeafLayout.md)

#### Implementation of

[IApp](../interfaces/IApp.md).[__LayoutProcessor](../interfaces/IApp.md#__layoutprocessor)

#### Inherited from

Leafer.\_\_LayoutProcessor

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:37](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/display/src/Leaf.ts#L37)

___

### leaferIsCreated

• `get` **leaferIsCreated**(): `boolean`

#### Returns

`boolean`

#### Implementation of

[IApp](../interfaces/IApp.md).[leaferIsCreated](../interfaces/IApp.md#leaferiscreated)

#### Inherited from

Leafer.leaferIsCreated

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:42](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/display/src/Leaf.ts#L42)

___

### leaferIsReady

• `get` **leaferIsReady**(): `boolean`

#### Returns

`boolean`

#### Implementation of

[IApp](../interfaces/IApp.md).[leaferIsReady](../interfaces/IApp.md#leaferisready)

#### Inherited from

Leafer.leaferIsReady

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:43](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/display/src/Leaf.ts#L43)

___

### isBranchLeaf

• `get` **isBranchLeaf**(): `boolean`

#### Returns

`boolean`

#### Implementation of

[IApp](../interfaces/IApp.md).[isBranchLeaf](../interfaces/IApp.md#isbranchleaf)

#### Inherited from

Leafer.isBranchLeaf

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:47](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/display/src/Leaf.ts#L47)

___

### \_\_localMatrix

• `get` **__localMatrix**(): [`IMatrixData`](../interfaces/IMatrixData.md)

#### Returns

[`IMatrixData`](../interfaces/IMatrixData.md)

#### Implementation of

[IApp](../interfaces/IApp.md).[__localMatrix](../interfaces/IApp.md#__localmatrix)

#### Inherited from

Leafer.\_\_localMatrix

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:62](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/display/src/Leaf.ts#L62)

___

### \_\_localBoxBounds

• `get` **__localBoxBounds**(): [`IBoundsData`](../interfaces/IBoundsData.md)

#### Returns

[`IBoundsData`](../interfaces/IBoundsData.md)

#### Implementation of

[IApp](../interfaces/IApp.md).[__localBoxBounds](../interfaces/IApp.md#__localboxbounds)

#### Inherited from

Leafer.\_\_localBoxBounds

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:63](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/display/src/Leaf.ts#L63)

___

### worldTransform

• `get` **worldTransform**(): [`IMatrixWithScaleData`](../interfaces/IMatrixWithScaleData.md)

#### Returns

[`IMatrixWithScaleData`](../interfaces/IMatrixWithScaleData.md)

#### Implementation of

[IApp](../interfaces/IApp.md).[worldTransform](../interfaces/IApp.md#worldtransform)

#### Inherited from

Leafer.worldTransform

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:68](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/display/src/Leaf.ts#L68)

___

### localTransform

• `get` **localTransform**(): [`IMatrixData`](../interfaces/IMatrixData.md)

#### Returns

[`IMatrixData`](../interfaces/IMatrixData.md)

#### Implementation of

[IApp](../interfaces/IApp.md).[localTransform](../interfaces/IApp.md#localtransform)

#### Inherited from

Leafer.localTransform

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:69](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/display/src/Leaf.ts#L69)

___

### scrollWorldTransform

• `get` **scrollWorldTransform**(): [`IMatrixWithScaleData`](../interfaces/IMatrixWithScaleData.md)

#### Returns

[`IMatrixWithScaleData`](../interfaces/IMatrixWithScaleData.md)

#### Implementation of

[IApp](../interfaces/IApp.md).[scrollWorldTransform](../interfaces/IApp.md#scrollworldtransform)

#### Inherited from

Leafer.scrollWorldTransform

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:72](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/display/src/Leaf.ts#L72)

___

### boxBounds

• `get` **boxBounds**(): [`IBoundsData`](../interfaces/IBoundsData.md)

#### Returns

[`IBoundsData`](../interfaces/IBoundsData.md)

#### Implementation of

[IApp](../interfaces/IApp.md).[boxBounds](../interfaces/IApp.md#boxbounds)

#### Inherited from

Leafer.boxBounds

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:75](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/display/src/Leaf.ts#L75)

___

### renderBounds

• `get` **renderBounds**(): [`IBoundsData`](../interfaces/IBoundsData.md)

#### Returns

[`IBoundsData`](../interfaces/IBoundsData.md)

#### Implementation of

[IApp](../interfaces/IApp.md).[renderBounds](../interfaces/IApp.md#renderbounds)

#### Inherited from

Leafer.renderBounds

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:76](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/display/src/Leaf.ts#L76)

___

### worldBoxBounds

• `get` **worldBoxBounds**(): [`IBoundsData`](../interfaces/IBoundsData.md)

#### Returns

[`IBoundsData`](../interfaces/IBoundsData.md)

#### Implementation of

[IApp](../interfaces/IApp.md).[worldBoxBounds](../interfaces/IApp.md#worldboxbounds)

#### Inherited from

Leafer.worldBoxBounds

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:77](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/display/src/Leaf.ts#L77)

___

### worldStrokeBounds

• `get` **worldStrokeBounds**(): [`IBoundsData`](../interfaces/IBoundsData.md)

#### Returns

[`IBoundsData`](../interfaces/IBoundsData.md)

#### Implementation of

[IApp](../interfaces/IApp.md).[worldStrokeBounds](../interfaces/IApp.md#worldstrokebounds)

#### Inherited from

Leafer.worldStrokeBounds

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:78](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/display/src/Leaf.ts#L78)

___

### worldRenderBounds

• `get` **worldRenderBounds**(): [`IBoundsData`](../interfaces/IBoundsData.md)

#### Returns

[`IBoundsData`](../interfaces/IBoundsData.md)

#### Implementation of

[IApp](../interfaces/IApp.md).[worldRenderBounds](../interfaces/IApp.md#worldrenderbounds)

#### Inherited from

Leafer.worldRenderBounds

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:79](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/display/src/Leaf.ts#L79)

___

### worldOpacity

• `get` **worldOpacity**(): `number`

#### Returns

`number`

#### Implementation of

[IApp](../interfaces/IApp.md).[worldOpacity](../interfaces/IApp.md#worldopacity)

#### Inherited from

Leafer.worldOpacity

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:82](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/display/src/Leaf.ts#L82)

___

### \_\_worldFlipped

• `get` **__worldFlipped**(): `boolean`

#### Returns

`boolean`

#### Implementation of

[IApp](../interfaces/IApp.md).[__worldFlipped](../interfaces/IApp.md#__worldflipped)

#### Inherited from

Leafer.\_\_worldFlipped

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:87](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/display/src/Leaf.ts#L87)

___

### \_\_onlyHitMask

• `get` **__onlyHitMask**(): `boolean`

#### Returns

`boolean`

#### Implementation of

[IApp](../interfaces/IApp.md).[__onlyHitMask](../interfaces/IApp.md#__onlyhitmask)

#### Inherited from

Leafer.\_\_onlyHitMask

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:94](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/display/src/Leaf.ts#L94)

___

### \_\_ignoreHitWorld

• `get` **__ignoreHitWorld**(): `boolean`

#### Returns

`boolean`

#### Implementation of

[IApp](../interfaces/IApp.md).[__ignoreHitWorld](../interfaces/IApp.md#__ignorehitworld)

#### Inherited from

Leafer.\_\_ignoreHitWorld

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:95](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/display/src/Leaf.ts#L95)

___

### \_\_inLazyBounds

• `get` **__inLazyBounds**(): `boolean`

#### Returns

`boolean`

#### Implementation of

[IApp](../interfaces/IApp.md).[__inLazyBounds](../interfaces/IApp.md#__inlazybounds)

#### Inherited from

Leafer.\_\_inLazyBounds

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:96](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/display/src/Leaf.ts#L96)

___

### pathInputed

• `get` **pathInputed**(): `boolean`

#### Returns

`boolean`

#### Implementation of

[IApp](../interfaces/IApp.md).[pathInputed](../interfaces/IApp.md#pathinputed)

#### Inherited from

Leafer.pathInputed

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

[IApp](../interfaces/IApp.md).[event](../interfaces/IApp.md#event)

#### Inherited from

Leafer.event

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:101](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/display/src/Leaf.ts#L101)

___

### \_\_tag

• `get` **__tag**(): `string`

#### Returns

`string`

#### Implementation of

[IApp](../interfaces/IApp.md).[__tag](../interfaces/IApp.md#__tag)

#### Overrides

Leafer.\_\_tag

#### Defined in

[src/ui/packages/app/src/App.ts:12](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/app/src/App.ts#L12)

___

### isApp

• `get` **isApp**(): `boolean`

#### Returns

`boolean`

#### Implementation of

[IApp](../interfaces/IApp.md).[isApp](../interfaces/IApp.md#isapp)

#### Overrides

Leafer.isApp

#### Defined in

[src/ui/packages/app/src/App.ts:14](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/app/src/App.ts#L14)

___

### isBranch

• `get` **isBranch**(): `boolean`

#### Returns

`boolean`

#### Implementation of

[IApp](../interfaces/IApp.md).[isBranch](../interfaces/IApp.md#isbranch)

#### Inherited from

Leafer.isBranch

#### Defined in

[src/ui/packages/display/src/Group.ts:16](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/display/src/Group.ts#L16)

___

### app

• `get` **app**(): [`ILeafer`](../interfaces/ILeafer.md)

#### Returns

[`ILeafer`](../interfaces/ILeafer.md)

#### Implementation of

[IApp](../interfaces/IApp.md).[app](../interfaces/IApp.md#app)

#### Inherited from

Leafer.app

#### Defined in

[src/ui/packages/display/src/Leafer.ts:30](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/display/src/Leafer.ts#L30)

___

### isLeafer

• `get` **isLeafer**(): `boolean`

#### Returns

`boolean`

#### Implementation of

[IApp](../interfaces/IApp.md).[isLeafer](../interfaces/IApp.md#isleafer)

#### Inherited from

Leafer.isLeafer

#### Defined in

[src/ui/packages/display/src/Leafer.ts:32](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/display/src/Leafer.ts#L32)

___

### imageReady

• `get` **imageReady**(): `boolean`

#### Returns

`boolean`

#### Implementation of

[IApp](../interfaces/IApp.md).[imageReady](../interfaces/IApp.md#imageready)

#### Inherited from

Leafer.imageReady

#### Defined in

[src/ui/packages/display/src/Leafer.ts:42](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/display/src/Leafer.ts#L42)

___

### layoutLocked

• `get` **layoutLocked**(): `boolean`

#### Returns

`boolean`

#### Implementation of

[IApp](../interfaces/IApp.md).[layoutLocked](../interfaces/IApp.md#layoutlocked)

#### Inherited from

Leafer.layoutLocked

#### Defined in

[src/ui/packages/display/src/Leafer.ts:43](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/display/src/Leafer.ts#L43)

___

### view

• `get` **view**(): `unknown`

#### Returns

`unknown`

#### Implementation of

[IApp](../interfaces/IApp.md).[view](../interfaces/IApp.md#view)

#### Inherited from

Leafer.view

#### Defined in

[src/ui/packages/display/src/Leafer.ts:47](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/display/src/Leafer.ts#L47)

___

### FPS

• `get` **FPS**(): `number`

#### Returns

`number`

#### Inherited from

Leafer.FPS

#### Defined in

[src/ui/packages/display/src/Leafer.ts:82](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/display/src/Leafer.ts#L82)

___

### cursorPoint

• `get` **cursorPoint**(): [`IPointData`](../interfaces/IPointData.md)

#### Returns

[`IPointData`](../interfaces/IPointData.md)

#### Implementation of

[IApp](../interfaces/IApp.md).[cursorPoint](../interfaces/IApp.md#cursorpoint)

#### Inherited from

Leafer.cursorPoint

#### Defined in

[src/ui/packages/display/src/Leafer.ts:83](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/display/src/Leafer.ts#L83)

___

### clientBounds

• `get` **clientBounds**(): [`IBoundsData`](../interfaces/IBoundsData.md)

#### Returns

[`IBoundsData`](../interfaces/IBoundsData.md)

#### Implementation of

[IApp](../interfaces/IApp.md).[clientBounds](../interfaces/IApp.md#clientbounds)

#### Inherited from

Leafer.clientBounds

#### Defined in

[src/ui/packages/display/src/Leafer.ts:84](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/display/src/Leafer.ts#L84)

___

### isFrame

• `get` **isFrame**(): `boolean`

#### Returns

`boolean`

#### Implementation of

[IApp](../interfaces/IApp.md).[isFrame](../interfaces/IApp.md#isframe)

#### Inherited from

Leafer.isFrame

#### Defined in

[src/ui/packages/display/src/UI.ts:32](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/display/src/UI.ts#L32)

___

### strokeWidthFixed

• `get` **strokeWidthFixed**(): [`IScaleFixed`](../modules.md#iscalefixed)

#### Returns

[`IScaleFixed`](../modules.md#iscalefixed)

#### Inherited from

Leafer.strokeWidthFixed

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

Leafer.strokeWidthFixed

#### Defined in

[src/ui/packages/display/src/UI.ts:269](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/display/src/UI.ts#L269)

___

### scale

• `get` **scale**(): `number` \| [`IPointData`](../interfaces/IPointData.md)

#### Returns

`number` \| [`IPointData`](../interfaces/IPointData.md)

#### Implementation of

[IApp](../interfaces/IApp.md).[scale](../interfaces/IApp.md#scale)

#### Inherited from

Leafer.scale

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

[IApp](../interfaces/IApp.md).[scale](../interfaces/IApp.md#scale)

#### Inherited from

Leafer.scale

#### Defined in

[src/ui/packages/display/src/UI.ts:403](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/display/src/UI.ts#L403)

___

### isAutoWidth

• `get` **isAutoWidth**(): `boolean`

#### Returns

`boolean`

#### Implementation of

[IApp](../interfaces/IApp.md).[isAutoWidth](../interfaces/IApp.md#isautowidth)

#### Inherited from

Leafer.isAutoWidth

#### Defined in

[src/ui/packages/display/src/UI.ts:406](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/display/src/UI.ts#L406)

___

### isAutoHeight

• `get` **isAutoHeight**(): `boolean`

#### Returns

`boolean`

#### Implementation of

[IApp](../interfaces/IApp.md).[isAutoHeight](../interfaces/IApp.md#isautoheight)

#### Inherited from

Leafer.isAutoHeight

#### Defined in

[src/ui/packages/display/src/UI.ts:407](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/display/src/UI.ts#L407)

___

### pen

• `get` **pen**(): [`IPathCreator`](../interfaces/IPathCreator.md)

#### Returns

[`IPathCreator`](../interfaces/IPathCreator.md)

#### Implementation of

[IApp](../interfaces/IApp.md).[pen](../interfaces/IApp.md#pen)

#### Inherited from

Leafer.pen

#### Defined in

[src/ui/packages/display/src/UI.ts:414](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/display/src/UI.ts#L414)

## Methods

### resetCustom

▸ **resetCustom**(): `void`

#### Returns

`void`

#### Implementation of

[IApp](../interfaces/IApp.md).[resetCustom](../interfaces/IApp.md#resetcustom)

#### Inherited from

[Leafer](Leafer.md).[resetCustom](Leafer.md#resetcustom)

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

[IApp](../interfaces/IApp.md).[waitParent](../interfaces/IApp.md#waitparent)

#### Inherited from

[Leafer](Leafer.md).[waitParent](Leafer.md#waitparent)

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

[IApp](../interfaces/IApp.md).[waitLeafer](../interfaces/IApp.md#waitleafer)

#### Inherited from

[Leafer](Leafer.md).[waitLeafer](Leafer.md#waitleafer)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:154](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/display/src/Leaf.ts#L154)

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

[IApp](../interfaces/IApp.md).[removeNextRender](../interfaces/IApp.md#removenextrender)

#### Inherited from

[Leafer](Leafer.md).[removeNextRender](Leafer.md#removenextrender)

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

[IApp](../interfaces/IApp.md).[__bindLeafer](../interfaces/IApp.md#__bindleafer)

#### Inherited from

[Leafer](Leafer.md).[__bindLeafer](Leafer.md#__bindleafer)

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

[IApp](../interfaces/IApp.md).[setAttr](../interfaces/IApp.md#setattr)

#### Inherited from

[Leafer](Leafer.md).[setAttr](Leafer.md#setattr)

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

[IApp](../interfaces/IApp.md).[getAttr](../interfaces/IApp.md#getattr)

#### Inherited from

[Leafer](Leafer.md).[getAttr](Leafer.md#getattr)

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

[IApp](../interfaces/IApp.md).[getComputedAttr](../interfaces/IApp.md#getcomputedattr)

#### Inherited from

[Leafer](Leafer.md).[getComputedAttr](Leafer.md#getcomputedattr)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:201](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/display/src/Leaf.ts#L201)

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

[IApp](../interfaces/IApp.md).[toString](../interfaces/IApp.md#tostring)

#### Inherited from

[Leafer](Leafer.md).[toString](Leafer.md#tostring)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:208](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/display/src/Leaf.ts#L208)

___

### toSVG

▸ **toSVG**(): `string`

#### Returns

`string`

#### Implementation of

[IApp](../interfaces/IApp.md).[toSVG](../interfaces/IApp.md#tosvg)

#### Inherited from

[Leafer](Leafer.md).[toSVG](Leafer.md#tosvg)

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

[IApp](../interfaces/IApp.md).[__SVG](../interfaces/IApp.md#__svg)

#### Inherited from

[Leafer](Leafer.md).[__SVG](Leafer.md#__svg)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:214](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/display/src/Leaf.ts#L214)

___

### toHTML

▸ **toHTML**(): `string`

#### Returns

`string`

#### Implementation of

[IApp](../interfaces/IApp.md).[toHTML](../interfaces/IApp.md#tohtml)

#### Inherited from

[Leafer](Leafer.md).[toHTML](Leafer.md#tohtml)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:216](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/display/src/Leaf.ts#L216)

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

[IApp](../interfaces/IApp.md).[setProxyAttr](../interfaces/IApp.md#setproxyattr)

#### Inherited from

[Leafer](Leafer.md).[setProxyAttr](Leafer.md#setproxyattr)

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

[IApp](../interfaces/IApp.md).[getProxyAttr](../interfaces/IApp.md#getproxyattr)

#### Inherited from

[Leafer](Leafer.md).[getProxyAttr](Leafer.md#getproxyattr)

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

[IApp](../interfaces/IApp.md).[focus](../interfaces/IApp.md#focus)

#### Inherited from

[Leafer](Leafer.md).[focus](Leafer.md#focus)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:246](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/display/src/Leaf.ts#L246)

___

### updateState

▸ **updateState**(): `void`

#### Returns

`void`

#### Implementation of

[IApp](../interfaces/IApp.md).[updateState](../interfaces/IApp.md#updatestate)

#### Inherited from

[Leafer](Leafer.md).[updateState](Leafer.md#updatestate)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:248](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/display/src/Leaf.ts#L248)

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

[IApp](../interfaces/IApp.md).[forceUpdate](../interfaces/IApp.md#forceupdate)

#### Inherited from

[Leafer](Leafer.md).[forceUpdate](Leafer.md#forceupdate)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:257](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/display/src/Leaf.ts#L257)

___

### \_\_extraUpdate

▸ **__extraUpdate**(): `void`

#### Returns

`void`

#### Implementation of

[IApp](../interfaces/IApp.md).[__extraUpdate](../interfaces/IApp.md#__extraupdate)

#### Inherited from

[Leafer](Leafer.md).[__extraUpdate](Leafer.md#__extraupdate)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:269](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/display/src/Leaf.ts#L269)

___

### \_\_updateWorldMatrix

▸ **__updateWorldMatrix**(): `void`

#### Returns

`void`

#### Implementation of

[IApp](../interfaces/IApp.md).[__updateWorldMatrix](../interfaces/IApp.md#__updateworldmatrix)

#### Inherited from

[Leafer](Leafer.md).[__updateWorldMatrix](Leafer.md#__updateworldmatrix)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:275](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/display/src/Leaf.ts#L275)

___

### \_\_updateLocalMatrix

▸ **__updateLocalMatrix**(): `void`

#### Returns

`void`

#### Implementation of

[IApp](../interfaces/IApp.md).[__updateLocalMatrix](../interfaces/IApp.md#__updatelocalmatrix)

#### Inherited from

[Leafer](Leafer.md).[__updateLocalMatrix](Leafer.md#__updatelocalmatrix)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:277](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/display/src/Leaf.ts#L277)

___

### \_\_updateWorldBounds

▸ **__updateWorldBounds**(): `void`

#### Returns

`void`

#### Implementation of

[IApp](../interfaces/IApp.md).[__updateWorldBounds](../interfaces/IApp.md#__updateworldbounds)

#### Inherited from

[Leafer](Leafer.md).[__updateWorldBounds](Leafer.md#__updateworldbounds)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:283](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/display/src/Leaf.ts#L283)

___

### \_\_updateLocalBoxBounds

▸ **__updateLocalBoxBounds**(): `void`

#### Returns

`void`

#### Implementation of

[IApp](../interfaces/IApp.md).[__updateLocalBoxBounds](../interfaces/IApp.md#__updatelocalboxbounds)

#### Inherited from

[Leafer](Leafer.md).[__updateLocalBoxBounds](Leafer.md#__updatelocalboxbounds)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:288](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/display/src/Leaf.ts#L288)

___

### \_\_updateLocalStrokeBounds

▸ **__updateLocalStrokeBounds**(): `void`

#### Returns

`void`

#### Implementation of

[IApp](../interfaces/IApp.md).[__updateLocalStrokeBounds](../interfaces/IApp.md#__updatelocalstrokebounds)

#### Inherited from

[Leafer](Leafer.md).[__updateLocalStrokeBounds](Leafer.md#__updatelocalstrokebounds)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:290](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/display/src/Leaf.ts#L290)

___

### \_\_updateLocalRenderBounds

▸ **__updateLocalRenderBounds**(): `void`

#### Returns

`void`

#### Implementation of

[IApp](../interfaces/IApp.md).[__updateLocalRenderBounds](../interfaces/IApp.md#__updatelocalrenderbounds)

#### Inherited from

[Leafer](Leafer.md).[__updateLocalRenderBounds](Leafer.md#__updatelocalrenderbounds)

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

[IApp](../interfaces/IApp.md).[__updateBoxBounds](../interfaces/IApp.md#__updateboxbounds)

#### Inherited from

[Leafer](Leafer.md).[__updateBoxBounds](Leafer.md#__updateboxbounds)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:296](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/display/src/Leaf.ts#L296)

___

### \_\_updateContentBounds

▸ **__updateContentBounds**(): `void`

#### Returns

`void`

#### Implementation of

[IApp](../interfaces/IApp.md).[__updateContentBounds](../interfaces/IApp.md#__updatecontentbounds)

#### Inherited from

[Leafer](Leafer.md).[__updateContentBounds](Leafer.md#__updatecontentbounds)

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

[IApp](../interfaces/IApp.md).[__updateStrokeBounds](../interfaces/IApp.md#__updatestrokebounds)

#### Inherited from

[Leafer](Leafer.md).[__updateStrokeBounds](Leafer.md#__updatestrokebounds)

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

[IApp](../interfaces/IApp.md).[__updateRenderBounds](../interfaces/IApp.md#__updaterenderbounds)

#### Inherited from

[Leafer](Leafer.md).[__updateRenderBounds](Leafer.md#__updaterenderbounds)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:302](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/display/src/Leaf.ts#L302)

___

### \_\_updateAutoLayout

▸ **__updateAutoLayout**(): `void`

#### Returns

`void`

#### Implementation of

[IApp](../interfaces/IApp.md).[__updateAutoLayout](../interfaces/IApp.md#__updateautolayout)

#### Inherited from

[Leafer](Leafer.md).[__updateAutoLayout](Leafer.md#__updateautolayout)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:305](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/display/src/Leaf.ts#L305)

___

### \_\_updateFlowLayout

▸ **__updateFlowLayout**(): `void`

#### Returns

`void`

#### Implementation of

[IApp](../interfaces/IApp.md).[__updateFlowLayout](../interfaces/IApp.md#__updateflowlayout)

#### Inherited from

[Leafer](Leafer.md).[__updateFlowLayout](Leafer.md#__updateflowlayout)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:307](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/display/src/Leaf.ts#L307)

___

### \_\_updateNaturalSize

▸ **__updateNaturalSize**(): `void`

#### Returns

`void`

#### Implementation of

[IApp](../interfaces/IApp.md).[__updateNaturalSize](../interfaces/IApp.md#__updatenaturalsize)

#### Inherited from

[Leafer](Leafer.md).[__updateNaturalSize](Leafer.md#__updatenaturalsize)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:309](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/display/src/Leaf.ts#L309)

___

### \_\_updateStrokeSpread

▸ **__updateStrokeSpread**(): [`IFourNumber`](../modules.md#ifournumber)

#### Returns

[`IFourNumber`](../modules.md#ifournumber)

#### Implementation of

[IApp](../interfaces/IApp.md).[__updateStrokeSpread](../interfaces/IApp.md#__updatestrokespread)

#### Inherited from

[Leafer](Leafer.md).[__updateStrokeSpread](Leafer.md#__updatestrokespread)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:312](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/display/src/Leaf.ts#L312)

___

### \_\_updateRenderSpread

▸ **__updateRenderSpread**(): [`IFourNumber`](../modules.md#ifournumber)

#### Returns

[`IFourNumber`](../modules.md#ifournumber)

#### Implementation of

[IApp](../interfaces/IApp.md).[__updateRenderSpread](../interfaces/IApp.md#__updaterenderspread)

#### Inherited from

[Leafer](Leafer.md).[__updateRenderSpread](Leafer.md#__updaterenderspread)

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

[IApp](../interfaces/IApp.md).[__updateEraser](../interfaces/IApp.md#__updateeraser)

#### Inherited from

[Leafer](Leafer.md).[__updateEraser](Leafer.md#__updateeraser)

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

[IApp](../interfaces/IApp.md).[__renderEraser](../interfaces/IApp.md#__rendereraser)

#### Inherited from

[Leafer](Leafer.md).[__renderEraser](Leafer.md#__rendereraser)

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

[IApp](../interfaces/IApp.md).[__updateMask](../interfaces/IApp.md#__updatemask)

#### Inherited from

[Leafer](Leafer.md).[__updateMask](Leafer.md#__updatemask)

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

[IApp](../interfaces/IApp.md).[__renderMask](../interfaces/IApp.md#__rendermask)

#### Inherited from

[Leafer](Leafer.md).[__renderMask](Leafer.md#__rendermask)

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

[IApp](../interfaces/IApp.md).[__getNowWorld](../interfaces/IApp.md#__getnowworld)

#### Inherited from

[Leafer](Leafer.md).[__getNowWorld](Leafer.md#__getnowworld)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:347](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/display/src/Leaf.ts#L347)

___

### getClampRenderScale

▸ **getClampRenderScale**(): `number`

#### Returns

`number`

#### Implementation of

[IApp](../interfaces/IApp.md).[getClampRenderScale](../interfaces/IApp.md#getclamprenderscale)

#### Inherited from

[Leafer](Leafer.md).[getClampRenderScale](Leafer.md#getclamprenderscale)

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

[IApp](../interfaces/IApp.md).[getRenderScaleData](../interfaces/IApp.md#getrenderscaledata)

#### Inherited from

[Leafer](Leafer.md).[getRenderScaleData](Leafer.md#getrenderscaledata)

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

[IApp](../interfaces/IApp.md).[getTransform](../interfaces/IApp.md#gettransform)

#### Inherited from

[Leafer](Leafer.md).[getTransform](Leafer.md#gettransform)

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

[IApp](../interfaces/IApp.md).[getBounds](../interfaces/IApp.md#getbounds)

#### Inherited from

[Leafer](Leafer.md).[getBounds](Leafer.md#getbounds)

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

[IApp](../interfaces/IApp.md).[getLayoutBounds](../interfaces/IApp.md#getlayoutbounds)

#### Inherited from

[Leafer](Leafer.md).[getLayoutBounds](Leafer.md#getlayoutbounds)

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

[IApp](../interfaces/IApp.md).[getLayoutPoints](../interfaces/IApp.md#getlayoutpoints)

#### Inherited from

[Leafer](Leafer.md).[getLayoutPoints](Leafer.md#getlayoutpoints)

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

[IApp](../interfaces/IApp.md).[getWorldBounds](../interfaces/IApp.md#getworldbounds)

#### Inherited from

[Leafer](Leafer.md).[getWorldBounds](Leafer.md#getworldbounds)

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

[IApp](../interfaces/IApp.md).[worldToLocal](../interfaces/IApp.md#worldtolocal)

#### Inherited from

[Leafer](Leafer.md).[worldToLocal](Leafer.md#worldtolocal)

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

[IApp](../interfaces/IApp.md).[localToWorld](../interfaces/IApp.md#localtoworld)

#### Inherited from

[Leafer](Leafer.md).[localToWorld](Leafer.md#localtoworld)

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

[IApp](../interfaces/IApp.md).[worldToInner](../interfaces/IApp.md#worldtoinner)

#### Inherited from

[Leafer](Leafer.md).[worldToInner](Leafer.md#worldtoinner)

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

[IApp](../interfaces/IApp.md).[innerToWorld](../interfaces/IApp.md#innertoworld)

#### Inherited from

[Leafer](Leafer.md).[innerToWorld](Leafer.md#innertoworld)

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

[IApp](../interfaces/IApp.md).[getBoxPoint](../interfaces/IApp.md#getboxpoint)

#### Inherited from

[Leafer](Leafer.md).[getBoxPoint](Leafer.md#getboxpoint)

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

[IApp](../interfaces/IApp.md).[getBoxPointByInner](../interfaces/IApp.md#getboxpointbyinner)

#### Inherited from

[Leafer](Leafer.md).[getBoxPointByInner](Leafer.md#getboxpointbyinner)

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

[IApp](../interfaces/IApp.md).[getInnerPoint](../interfaces/IApp.md#getinnerpoint)

#### Inherited from

[Leafer](Leafer.md).[getInnerPoint](Leafer.md#getinnerpoint)

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

[IApp](../interfaces/IApp.md).[getInnerPointByBox](../interfaces/IApp.md#getinnerpointbybox)

#### Inherited from

[Leafer](Leafer.md).[getInnerPointByBox](Leafer.md#getinnerpointbybox)

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

[IApp](../interfaces/IApp.md).[getInnerPointByLocal](../interfaces/IApp.md#getinnerpointbylocal)

#### Inherited from

[Leafer](Leafer.md).[getInnerPointByLocal](Leafer.md#getinnerpointbylocal)

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

[IApp](../interfaces/IApp.md).[getLocalPoint](../interfaces/IApp.md#getlocalpoint)

#### Inherited from

[Leafer](Leafer.md).[getLocalPoint](Leafer.md#getlocalpoint)

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

[IApp](../interfaces/IApp.md).[getLocalPointByInner](../interfaces/IApp.md#getlocalpointbyinner)

#### Inherited from

[Leafer](Leafer.md).[getLocalPointByInner](Leafer.md#getlocalpointbyinner)

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

[IApp](../interfaces/IApp.md).[getPagePoint](../interfaces/IApp.md#getpagepoint)

#### Inherited from

[Leafer](Leafer.md).[getPagePoint](Leafer.md#getpagepoint)

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

[IApp](../interfaces/IApp.md).[getWorldPoint](../interfaces/IApp.md#getworldpoint)

#### Inherited from

[Leafer](Leafer.md).[getWorldPoint](Leafer.md#getworldpoint)

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

[IApp](../interfaces/IApp.md).[getWorldPointByBox](../interfaces/IApp.md#getworldpointbybox)

#### Inherited from

[Leafer](Leafer.md).[getWorldPointByBox](Leafer.md#getworldpointbybox)

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

[IApp](../interfaces/IApp.md).[getWorldPointByLocal](../interfaces/IApp.md#getworldpointbylocal)

#### Inherited from

[Leafer](Leafer.md).[getWorldPointByLocal](Leafer.md#getworldpointbylocal)

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

[IApp](../interfaces/IApp.md).[getWorldPointByPage](../interfaces/IApp.md#getworldpointbypage)

#### Inherited from

[Leafer](Leafer.md).[getWorldPointByPage](Leafer.md#getworldpointbypage)

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

[IApp](../interfaces/IApp.md).[setTransform](../interfaces/IApp.md#settransform)

#### Inherited from

[Leafer](Leafer.md).[setTransform](Leafer.md#settransform)

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

[IApp](../interfaces/IApp.md).[transform](../interfaces/IApp.md#transform)

#### Inherited from

[Leafer](Leafer.md).[transform](Leafer.md#transform)

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

[IApp](../interfaces/IApp.md).[move](../interfaces/IApp.md#move)

#### Inherited from

[Leafer](Leafer.md).[move](Leafer.md#move)

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

[IApp](../interfaces/IApp.md).[moveInner](../interfaces/IApp.md#moveinner)

#### Inherited from

[Leafer](Leafer.md).[moveInner](Leafer.md#moveinner)

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

[IApp](../interfaces/IApp.md).[scaleOf](../interfaces/IApp.md#scaleof)

#### Inherited from

[Leafer](Leafer.md).[scaleOf](Leafer.md#scaleof)

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

[IApp](../interfaces/IApp.md).[rotateOf](../interfaces/IApp.md#rotateof)

#### Inherited from

[Leafer](Leafer.md).[rotateOf](Leafer.md#rotateof)

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

[IApp](../interfaces/IApp.md).[skewOf](../interfaces/IApp.md#skewof)

#### Inherited from

[Leafer](Leafer.md).[skewOf](Leafer.md#skewof)

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

[IApp](../interfaces/IApp.md).[transformWorld](../interfaces/IApp.md#transformworld)

#### Inherited from

[Leafer](Leafer.md).[transformWorld](Leafer.md#transformworld)

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

[IApp](../interfaces/IApp.md).[moveWorld](../interfaces/IApp.md#moveworld)

#### Inherited from

[Leafer](Leafer.md).[moveWorld](Leafer.md#moveworld)

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

[IApp](../interfaces/IApp.md).[scaleOfWorld](../interfaces/IApp.md#scaleofworld)

#### Inherited from

[Leafer](Leafer.md).[scaleOfWorld](Leafer.md#scaleofworld)

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

[IApp](../interfaces/IApp.md).[rotateOfWorld](../interfaces/IApp.md#rotateofworld)

#### Inherited from

[Leafer](Leafer.md).[rotateOfWorld](Leafer.md#rotateofworld)

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

[IApp](../interfaces/IApp.md).[skewOfWorld](../interfaces/IApp.md#skewofworld)

#### Inherited from

[Leafer](Leafer.md).[skewOfWorld](Leafer.md#skewofworld)

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

[IApp](../interfaces/IApp.md).[flip](../interfaces/IApp.md#flip)

#### Inherited from

[Leafer](Leafer.md).[flip](Leafer.md#flip)

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

[IApp](../interfaces/IApp.md).[scaleResize](../interfaces/IApp.md#scaleresize)

#### Inherited from

[Leafer](Leafer.md).[scaleResize](Leafer.md#scaleresize)

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

[IApp](../interfaces/IApp.md).[__scaleResize](../interfaces/IApp.md#__scaleresize)

#### Inherited from

[Leafer](Leafer.md).[__scaleResize](Leafer.md#__scaleresize)

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

[IApp](../interfaces/IApp.md).[resizeWidth](../interfaces/IApp.md#resizewidth)

#### Inherited from

[Leafer](Leafer.md).[resizeWidth](Leafer.md#resizewidth)

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

[IApp](../interfaces/IApp.md).[resizeHeight](../interfaces/IApp.md#resizeheight)

#### Inherited from

[Leafer](Leafer.md).[resizeHeight](Leafer.md#resizeheight)

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

[IApp](../interfaces/IApp.md).[hit](../interfaces/IApp.md#hit)

#### Inherited from

[Leafer](Leafer.md).[hit](Leafer.md#hit)

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

[IApp](../interfaces/IApp.md).[__hitWorld](../interfaces/IApp.md#__hitworld)

#### Inherited from

[Leafer](Leafer.md).[__hitWorld](Leafer.md#__hitworld)

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

[IApp](../interfaces/IApp.md).[__hit](../interfaces/IApp.md#__hit)

#### Inherited from

[Leafer](Leafer.md).[__hit](Leafer.md#__hit)

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

[IApp](../interfaces/IApp.md).[__hitFill](../interfaces/IApp.md#__hitfill)

#### Inherited from

[Leafer](Leafer.md).[__hitFill](Leafer.md#__hitfill)

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

[IApp](../interfaces/IApp.md).[__hitStroke](../interfaces/IApp.md#__hitstroke)

#### Inherited from

[Leafer](Leafer.md).[__hitStroke](Leafer.md#__hitstroke)

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

[IApp](../interfaces/IApp.md).[__hitPixel](../interfaces/IApp.md#__hitpixel)

#### Inherited from

[Leafer](Leafer.md).[__hitPixel](Leafer.md#__hitpixel)

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

[IApp](../interfaces/IApp.md).[__drawHitPath](../interfaces/IApp.md#__drawhitpath)

#### Inherited from

[Leafer](Leafer.md).[__drawHitPath](Leafer.md#__drawhitpath)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:579](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/display/src/Leaf.ts#L579)

___

### \_\_updateHitCanvas

▸ **__updateHitCanvas**(): `void`

#### Returns

`void`

#### Implementation of

[IApp](../interfaces/IApp.md).[__updateHitCanvas](../interfaces/IApp.md#__updatehitcanvas)

#### Inherited from

[Leafer](Leafer.md).[__updateHitCanvas](Leafer.md#__updatehitcanvas)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:581](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/display/src/Leaf.ts#L581)

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

[IApp](../interfaces/IApp.md).[__drawFast](../interfaces/IApp.md#__drawfast)

#### Inherited from

[Leafer](Leafer.md).[__drawFast](Leafer.md#__drawfast)

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

[IApp](../interfaces/IApp.md).[__draw](../interfaces/IApp.md#__draw)

#### Inherited from

[Leafer](Leafer.md).[__draw](Leafer.md#__draw)

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

[IApp](../interfaces/IApp.md).[__clip](../interfaces/IApp.md#__clip)

#### Inherited from

[Leafer](Leafer.md).[__clip](Leafer.md#__clip)

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

[IApp](../interfaces/IApp.md).[__renderShape](../interfaces/IApp.md#__rendershape)

#### Inherited from

[Leafer](Leafer.md).[__renderShape](Leafer.md#__rendershape)

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

[IApp](../interfaces/IApp.md).[__drawShape](../interfaces/IApp.md#__drawshape)

#### Inherited from

[Leafer](Leafer.md).[__drawShape](Leafer.md#__drawshape)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:599](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/display/src/Leaf.ts#L599)

___

### \_\_updateWorldOpacity

▸ **__updateWorldOpacity**(): `void`

#### Returns

`void`

#### Implementation of

[IApp](../interfaces/IApp.md).[__updateWorldOpacity](../interfaces/IApp.md#__updateworldopacity)

#### Inherited from

[Leafer](Leafer.md).[__updateWorldOpacity](Leafer.md#__updateworldopacity)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:602](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/display/src/Leaf.ts#L602)

___

### \_\_updateChange

▸ **__updateChange**(): `void`

#### Returns

`void`

#### Implementation of

[IApp](../interfaces/IApp.md).[__updateChange](../interfaces/IApp.md#__updatechange)

#### Inherited from

[Leafer](Leafer.md).[__updateChange](Leafer.md#__updatechange)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:604](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/display/src/Leaf.ts#L604)

___

### \_\_updatePath

▸ **__updatePath**(): `void`

#### Returns

`void`

#### Implementation of

[IApp](../interfaces/IApp.md).[__updatePath](../interfaces/IApp.md#__updatepath)

#### Inherited from

[Leafer](Leafer.md).[__updatePath](Leafer.md#__updatepath)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:615](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/display/src/Leaf.ts#L615)

___

### getMotionPathData

▸ **getMotionPathData**(): [`IMotionPathData`](../interfaces/IMotionPathData.md)

#### Returns

[`IMotionPathData`](../interfaces/IMotionPathData.md)

#### Implementation of

[IApp](../interfaces/IApp.md).[getMotionPathData](../interfaces/IApp.md#getmotionpathdata)

#### Inherited from

[Leafer](Leafer.md).[getMotionPathData](Leafer.md#getmotionpathdata)

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

[IApp](../interfaces/IApp.md).[getMotionPoint](../interfaces/IApp.md#getmotionpoint)

#### Inherited from

[Leafer](Leafer.md).[getMotionPoint](Leafer.md#getmotionpoint)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:628](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/display/src/Leaf.ts#L628)

___

### getMotionTotal

▸ **getMotionTotal**(): `number`

#### Returns

`number`

#### Implementation of

[IApp](../interfaces/IApp.md).[getMotionTotal](../interfaces/IApp.md#getmotiontotal)

#### Inherited from

[Leafer](Leafer.md).[getMotionTotal](Leafer.md#getmotiontotal)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:632](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/display/src/Leaf.ts#L632)

___

### \_\_updateMotionPath

▸ **__updateMotionPath**(): `void`

#### Returns

`void`

#### Implementation of

[IApp](../interfaces/IApp.md).[__updateMotionPath](../interfaces/IApp.md#__updatemotionpath)

#### Inherited from

[Leafer](Leafer.md).[__updateMotionPath](Leafer.md#__updatemotionpath)

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

[IApp](../interfaces/IApp.md).[__runAnimation](../interfaces/IApp.md#__runanimation)

#### Inherited from

[Leafer](Leafer.md).[__runAnimation](Leafer.md#__runanimation)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:642](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/display/src/Leaf.ts#L642)

___

### \_\_updateSortChildren

▸ **__updateSortChildren**(): `void`

#### Returns

`void`

#### Implementation of

[IApp](../interfaces/IApp.md).[__updateSortChildren](../interfaces/IApp.md#__updatesortchildren)

#### Inherited from

[Leafer](Leafer.md).[__updateSortChildren](Leafer.md#__updatesortchildren)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:647](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/display/src/Leaf.ts#L647)

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

[IApp](../interfaces/IApp.md).[dropTo](../interfaces/IApp.md#dropto)

#### Inherited from

[Leafer](Leafer.md).[dropTo](Leafer.md#dropto)

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

[IApp](../interfaces/IApp.md).[on](../interfaces/IApp.md#on)

#### Inherited from

[Leafer](Leafer.md).[on](Leafer.md#on)

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

[IApp](../interfaces/IApp.md).[off](../interfaces/IApp.md#off)

#### Inherited from

[Leafer](Leafer.md).[off](Leafer.md#off)

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

[IApp](../interfaces/IApp.md).[on_](../interfaces/IApp.md#on_)

#### Inherited from

[Leafer](Leafer.md).[on_](Leafer.md#on_)

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

[IApp](../interfaces/IApp.md).[off_](../interfaces/IApp.md#off_)

#### Inherited from

[Leafer](Leafer.md).[off_](Leafer.md#off_)

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

[IApp](../interfaces/IApp.md).[once](../interfaces/IApp.md#once)

#### Inherited from

[Leafer](Leafer.md).[once](Leafer.md#once)

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

[IApp](../interfaces/IApp.md).[emit](../interfaces/IApp.md#emit)

#### Inherited from

[Leafer](Leafer.md).[emit](Leafer.md#emit)

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

[IApp](../interfaces/IApp.md).[emitEvent](../interfaces/IApp.md#emitevent)

#### Inherited from

[Leafer](Leafer.md).[emitEvent](Leafer.md#emitevent)

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

[IApp](../interfaces/IApp.md).[hasEvent](../interfaces/IApp.md#hasevent)

#### Inherited from

[Leafer](Leafer.md).[hasEvent](Leafer.md#hasevent)

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

[Leafer](Leafer.md).[changeAttr](Leafer.md#changeattr)

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

[Leafer](Leafer.md).[addAttr](Leafer.md#addattr)

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

[IApp](../interfaces/IApp.md).[__emitLifeEvent](../interfaces/IApp.md#__emitlifeevent)

#### Inherited from

[Leafer](Leafer.md).[__emitLifeEvent](Leafer.md#__emitlifeevent)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:692](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/display/src/Leaf.ts#L692)

___

### init

▸ **init**(`userConfig?`, `parentApp?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `userConfig?` | [`IAppConfig`](../interfaces/IAppConfig.md) |
| `parentApp?` | [`IApp`](../interfaces/IApp.md) |

#### Returns

`void`

#### Implementation of

[IApp](../interfaces/IApp.md).[init](../interfaces/IApp.md#init)

#### Overrides

[Leafer](Leafer.md).[init](Leafer.md#init)

#### Defined in

[src/ui/packages/app/src/App.ts:28](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/app/src/App.ts#L28)

___

### \_\_setApp

▸ **__setApp**(): `void`

#### Returns

`void`

#### Overrides

[Leafer](Leafer.md).[__setApp](Leafer.md#__setapp)

#### Defined in

[src/ui/packages/app/src/App.ts:39](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/app/src/App.ts#L39)

___

### \_\_updateLocalBounds

▸ **__updateLocalBounds**(): `void`

#### Returns

`void`

#### Implementation of

[IApp](../interfaces/IApp.md).[__updateLocalBounds](../interfaces/IApp.md#__updatelocalbounds)

#### Overrides

[Leafer](Leafer.md).[__updateLocalBounds](Leafer.md#__updatelocalbounds)

#### Defined in

[src/ui/packages/app/src/App.ts:50](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/app/src/App.ts#L50)

___

### start

▸ **start**(): `void`

#### Returns

`void`

#### Implementation of

[IApp](../interfaces/IApp.md).[start](../interfaces/IApp.md#start)

#### Overrides

[Leafer](Leafer.md).[start](Leafer.md#start)

#### Defined in

[src/ui/packages/app/src/App.ts:55](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/app/src/App.ts#L55)

___

### stop

▸ **stop**(): `void`

#### Returns

`void`

#### Implementation of

[IApp](../interfaces/IApp.md).[stop](../interfaces/IApp.md#stop)

#### Overrides

[Leafer](Leafer.md).[stop](Leafer.md#stop)

#### Defined in

[src/ui/packages/app/src/App.ts:60](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/app/src/App.ts#L60)

___

### unlockLayout

▸ **unlockLayout**(): `void`

#### Returns

`void`

#### Implementation of

[IApp](../interfaces/IApp.md).[unlockLayout](../interfaces/IApp.md#unlocklayout)

#### Overrides

[Leafer](Leafer.md).[unlockLayout](Leafer.md#unlocklayout)

#### Defined in

[src/ui/packages/app/src/App.ts:65](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/app/src/App.ts#L65)

___

### lockLayout

▸ **lockLayout**(): `void`

#### Returns

`void`

#### Implementation of

[IApp](../interfaces/IApp.md).[lockLayout](../interfaces/IApp.md#locklayout)

#### Overrides

[Leafer](Leafer.md).[lockLayout](Leafer.md#locklayout)

#### Defined in

[src/ui/packages/app/src/App.ts:70](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/app/src/App.ts#L70)

___

### forceRender

▸ **forceRender**(`bounds?`, `sync?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `bounds?` | [`IBoundsData`](../interfaces/IBoundsData.md) |
| `sync?` | `boolean` |

#### Returns

`void`

#### Implementation of

[IApp](../interfaces/IApp.md).[forceRender](../interfaces/IApp.md#forcerender)

#### Overrides

[Leafer](Leafer.md).[forceRender](Leafer.md#forcerender)

#### Defined in

[src/ui/packages/app/src/App.ts:75](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/app/src/App.ts#L75)

___

### addLeafer

▸ **addLeafer**(`merge?`): [`Leafer`](Leafer.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `merge?` | [`ILeaferConfig`](../interfaces/ILeaferConfig.md) |

#### Returns

[`Leafer`](Leafer.md)

#### Defined in

[src/ui/packages/app/src/App.ts:79](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/app/src/App.ts#L79)

___

### add

▸ **add**(`leafer`, `index?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `leafer` | [`ILeafer`](../interfaces/ILeafer.md) |
| `index?` | `number` |

#### Returns

`void`

#### Implementation of

[IApp](../interfaces/IApp.md).[add](../interfaces/IApp.md#add)

#### Overrides

[Leafer](Leafer.md).[add](Leafer.md#add)

#### Defined in

[src/ui/packages/app/src/App.ts:85](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/app/src/App.ts#L85)

___

### forEach

▸ **forEach**(`fn`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `fn` | [`IAppForEachFunction`](../interfaces/IAppForEachFunction.md) |

#### Returns

`void`

#### Implementation of

[IApp](../interfaces/IApp.md).[forEach](../interfaces/IApp.md#foreach)

#### Defined in

[src/ui/packages/app/src/App.ts:99](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/app/src/App.ts#L99)

___

### \_\_onCreated

▸ **__onCreated**(): `void`

#### Returns

`void`

#### Overrides

[Leafer](Leafer.md).[__onCreated](Leafer.md#__oncreated)

#### Defined in

[src/ui/packages/app/src/App.ts:103](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/app/src/App.ts#L103)

___

### \_\_onReady

▸ **__onReady**(): `void`

#### Returns

`void`

#### Overrides

[Leafer](Leafer.md).[__onReady](Leafer.md#__onready)

#### Defined in

[src/ui/packages/app/src/App.ts:107](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/app/src/App.ts#L107)

___

### \_\_onViewReady

▸ **__onViewReady**(): `void`

#### Returns

`void`

#### Overrides

[Leafer](Leafer.md).[__onViewReady](Leafer.md#__onviewready)

#### Defined in

[src/ui/packages/app/src/App.ts:111](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/app/src/App.ts#L111)

___

### \_\_onChildRenderEnd

▸ **__onChildRenderEnd**(`e`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `e` | [`RenderEvent`](RenderEvent.md) |

#### Returns

`void`

#### Defined in

[src/ui/packages/app/src/App.ts:115](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/app/src/App.ts#L115)

___

### \_\_render

▸ **__render**(`canvas`, `options`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `canvas` | [`ILeaferCanvas`](../interfaces/ILeaferCanvas.md) |
| `options` | [`IRenderOptions`](../interfaces/IRenderOptions.md) |

#### Returns

`void`

#### Implementation of

[IApp](../interfaces/IApp.md).[__render](../interfaces/IApp.md#__render)

#### Overrides

[Leafer](Leafer.md).[__render](Leafer.md#__render)

#### Defined in

[src/ui/packages/app/src/App.ts:120](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/app/src/App.ts#L120)

___

### \_\_onResize

▸ **__onResize**(`event`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | [`IResizeEvent`](../interfaces/IResizeEvent.md) |

#### Returns

`void`

#### Overrides

[Leafer](Leafer.md).[__onResize](Leafer.md#__onresize)

#### Defined in

[src/ui/packages/app/src/App.ts:124](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/app/src/App.ts#L124)

___

### updateLayout

▸ **updateLayout**(): `void`

#### Returns

`void`

#### Implementation of

[IApp](../interfaces/IApp.md).[updateLayout](../interfaces/IApp.md#updatelayout)

#### Overrides

[Leafer](Leafer.md).[updateLayout](Leafer.md#updatelayout)

#### Defined in

[src/ui/packages/app/src/App.ts:129](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/app/src/App.ts#L129)

___

### \_\_getChildConfig

▸ **__getChildConfig**(`userConfig?`): [`ILeaferConfig`](../interfaces/ILeaferConfig.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `userConfig?` | [`ILeaferConfig`](../interfaces/ILeaferConfig.md) |

#### Returns

[`ILeaferConfig`](../interfaces/ILeaferConfig.md)

#### Defined in

[src/ui/packages/app/src/App.ts:133](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/app/src/App.ts#L133)

___

### \_\_listenChildEvents

▸ **__listenChildEvents**(`leafer`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `leafer` | [`ILeaferBase`](../interfaces/ILeaferBase.md) |

#### Returns

`void`

#### Defined in

[src/ui/packages/app/src/App.ts:145](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/app/src/App.ts#L145)

___

### reset

▸ **reset**(`data?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IGroupInputData`](../interfaces/IGroupInputData.md) |

#### Returns

`void`

#### Implementation of

[IApp](../interfaces/IApp.md).[reset](../interfaces/IApp.md#reset)

#### Inherited from

[Leafer](Leafer.md).[reset](Leafer.md#reset)

#### Defined in

[src/ui/packages/display/src/Group.ts:35](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/display/src/Group.ts#L35)

___

### \_\_setBranch

▸ **__setBranch**(): `void`

#### Returns

`void`

#### Inherited from

[Leafer](Leafer.md).[__setBranch](Leafer.md#__setbranch)

#### Defined in

[src/ui/packages/display/src/Group.ts:40](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/display/src/Group.ts#L40)

___

### toJSON

▸ **toJSON**(`options?`): [`IUIJSONData`](../interfaces/IUIJSONData.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | [`IJSONOptions`](../interfaces/IJSONOptions.md) |

#### Returns

[`IUIJSONData`](../interfaces/IUIJSONData.md)

#### Implementation of

[IApp](../interfaces/IApp.md).[toJSON](../interfaces/IApp.md#tojson)

#### Inherited from

[Leafer](Leafer.md).[toJSON](Leafer.md#tojson)

#### Defined in

[src/ui/packages/display/src/Group.ts:64](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/display/src/Group.ts#L64)

___

### pick

▸ **pick**(`_hitPoint`, `_options?`): [`IPickResult`](../interfaces/IPickResult.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `_hitPoint` | [`IPointData`](../interfaces/IPointData.md) |
| `_options?` | [`IPickOptions`](../interfaces/IPickOptions.md) |

#### Returns

[`IPickResult`](../interfaces/IPickResult.md)

#### Implementation of

[IApp](../interfaces/IApp.md).[pick](../interfaces/IApp.md#pick)

#### Inherited from

[Leafer](Leafer.md).[pick](Leafer.md#pick)

#### Defined in

[src/ui/packages/display/src/Group.ts:76](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/display/src/Group.ts#L76)

___

### addAt

▸ **addAt**(`child`, `index`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `child` | [`IUIInputData`](../interfaces/IUIInputData.md) \| [`IUI`](../interfaces/IUI.md) \| [`IUI`](../interfaces/IUI.md)[] \| [`IUIInputData`](../interfaces/IUIInputData.md)[] |
| `index` | `number` |

#### Returns

`void`

#### Implementation of

[IApp](../interfaces/IApp.md).[addAt](../interfaces/IApp.md#addat)

#### Inherited from

[Leafer](Leafer.md).[addAt](Leafer.md#addat)

#### Defined in

[src/ui/packages/display/src/Group.ts:81](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/display/src/Group.ts#L81)

___

### addAfter

▸ **addAfter**(`child`, `after`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `child` | [`IUIInputData`](../interfaces/IUIInputData.md) \| [`IUI`](../interfaces/IUI.md) \| [`IUI`](../interfaces/IUI.md)[] \| [`IUIInputData`](../interfaces/IUIInputData.md)[] |
| `after` | [`IUI`](../interfaces/IUI.md) |

#### Returns

`void`

#### Implementation of

[IApp](../interfaces/IApp.md).[addAfter](../interfaces/IApp.md#addafter)

#### Inherited from

[Leafer](Leafer.md).[addAfter](Leafer.md#addafter)

#### Defined in

[src/ui/packages/display/src/Group.ts:85](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/display/src/Group.ts#L85)

___

### addBefore

▸ **addBefore**(`child`, `before`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `child` | [`IUIInputData`](../interfaces/IUIInputData.md) \| [`IUI`](../interfaces/IUI.md) \| [`IUI`](../interfaces/IUI.md)[] \| [`IUIInputData`](../interfaces/IUIInputData.md)[] |
| `before` | [`IUI`](../interfaces/IUI.md) |

#### Returns

`void`

#### Implementation of

[IApp](../interfaces/IApp.md).[addBefore](../interfaces/IApp.md#addbefore)

#### Inherited from

[Leafer](Leafer.md).[addBefore](Leafer.md#addbefore)

#### Defined in

[src/ui/packages/display/src/Group.ts:89](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/display/src/Group.ts#L89)

___

### addMany

▸ **addMany**(`..._children`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `..._children` | [`IUI`](../interfaces/IUI.md)[] \| [`IUIInputData`](../interfaces/IUIInputData.md)[] |

#### Returns

`void`

#### Implementation of

[IApp](../interfaces/IApp.md).[addMany](../interfaces/IApp.md#addmany)

#### Inherited from

[Leafer](Leafer.md).[addMany](Leafer.md#addmany)

#### Defined in

[src/ui/packages/display/src/Group.ts:97](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/display/src/Group.ts#L97)

___

### remove

▸ **remove**(`_child?`, `_destroy?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `_child?` | `string` \| `number` \| [`IFindCondition`](../interfaces/IFindCondition.md) \| [`IUI`](../interfaces/IUI.md) \| [`IFindUIMethod`](../interfaces/IFindUIMethod.md) |
| `_destroy?` | `boolean` |

#### Returns

`void`

#### Implementation of

[IApp](../interfaces/IApp.md).[remove](../interfaces/IApp.md#remove)

#### Inherited from

[Leafer](Leafer.md).[remove](Leafer.md#remove)

#### Defined in

[src/ui/packages/display/src/Group.ts:99](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/display/src/Group.ts#L99)

___

### removeAll

▸ **removeAll**(`_destroy?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `_destroy?` | `boolean` |

#### Returns

`void`

#### Implementation of

[IApp](../interfaces/IApp.md).[removeAll](../interfaces/IApp.md#removeall)

#### Inherited from

[Leafer](Leafer.md).[removeAll](Leafer.md#removeall)

#### Defined in

[src/ui/packages/display/src/Group.ts:101](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/display/src/Group.ts#L101)

___

### clear

▸ **clear**(): `void`

#### Returns

`void`

#### Implementation of

[IApp](../interfaces/IApp.md).[clear](../interfaces/IApp.md#clear)

#### Inherited from

[Leafer](Leafer.md).[clear](Leafer.md#clear)

#### Defined in

[src/ui/packages/display/src/Group.ts:103](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/display/src/Group.ts#L103)

___

### onInit

▸ **onInit**(): `void`

#### Returns

`void`

#### Implementation of

[IApp](../interfaces/IApp.md).[onInit](../interfaces/IApp.md#oninit)

#### Inherited from

[Leafer](Leafer.md).[onInit](Leafer.md#oninit)

#### Defined in

[src/ui/packages/display/src/Leafer.ts:164](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/display/src/Leafer.ts#L164)

___

### initType

▸ **initType**(`_type`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `_type` | [`ILeaferType`](../modules.md#ileafertype) |

#### Returns

`void`

#### Implementation of

[IApp](../interfaces/IApp.md).[initType](../interfaces/IApp.md#inittype)

#### Inherited from

[Leafer](Leafer.md).[initType](Leafer.md#inittype)

#### Defined in

[src/ui/packages/display/src/Leafer.ts:166](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/display/src/Leafer.ts#L166)

___

### set

▸ **set**(`data`, `transition?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | [`IUIInputData`](../interfaces/IUIInputData.md) |
| `transition?` | [`ITransition`](../modules.md#itransition) \| ``"temp"`` |

#### Returns

`void`

#### Implementation of

[IApp](../interfaces/IApp.md).[set](../interfaces/IApp.md#set)

#### Inherited from

[Leafer](Leafer.md).[set](Leafer.md#set)

#### Defined in

[src/ui/packages/display/src/Leafer.ts:168](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/display/src/Leafer.ts#L168)

___

### resize

▸ **resize**(`size`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `size` | [`IScreenSizeData`](../interfaces/IScreenSizeData.md) |

#### Returns

`void`

#### Implementation of

[IApp](../interfaces/IApp.md).[resize](../interfaces/IApp.md#resize)

#### Inherited from

[Leafer](Leafer.md).[resize](Leafer.md#resize)

#### Defined in

[src/ui/packages/display/src/Leafer.ts:201](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/display/src/Leafer.ts#L201)

___

### requestRender

▸ **requestRender**(`change?`): `void`

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `change` | `boolean` | `false` |

#### Returns

`void`

#### Implementation of

[IApp](../interfaces/IApp.md).[requestRender](../interfaces/IApp.md#requestrender)

#### Inherited from

[Leafer](Leafer.md).[requestRender](Leafer.md#requestrender)

#### Defined in

[src/ui/packages/display/src/Leafer.ts:214](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/display/src/Leafer.ts#L214)

___

### updateCursor

▸ **updateCursor**(`cursor?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `cursor?` | [`ICursorType`](../modules.md#icursortype) |

#### Returns

`void`

#### Implementation of

[IApp](../interfaces/IApp.md).[updateCursor](../interfaces/IApp.md#updatecursor)

#### Inherited from

[Leafer](Leafer.md).[updateCursor](Leafer.md#updatecursor)

#### Defined in

[src/ui/packages/display/src/Leafer.ts:218](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/display/src/Leafer.ts#L218)

___

### updateLazyBounds

▸ **updateLazyBounds**(): `void`

#### Returns

`void`

#### Inherited from

[Leafer](Leafer.md).[updateLazyBounds](Leafer.md#updatelazybounds)

#### Defined in

[src/ui/packages/display/src/Leafer.ts:223](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/display/src/Leafer.ts#L223)

___

### \_\_doResize

▸ **__doResize**(`size`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `size` | [`IScreenSizeData`](../interfaces/IScreenSizeData.md) |

#### Returns

`void`

#### Inherited from

[Leafer](Leafer.md).[__doResize](Leafer.md#__doresize)

#### Defined in

[src/ui/packages/display/src/Leafer.ts:227](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/display/src/Leafer.ts#L227)

___

### \_\_bindApp

▸ **__bindApp**(`app`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `app` | [`IApp`](../interfaces/IApp.md) |

#### Returns

`void`

#### Inherited from

[Leafer](Leafer.md).[__bindApp](Leafer.md#__bindapp)

#### Defined in

[src/ui/packages/display/src/Leafer.ts:244](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/display/src/Leafer.ts#L244)

___

### \_\_setLeafer

▸ **__setLeafer**(`leafer`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `leafer` | [`ILeafer`](../interfaces/ILeafer.md) |

#### Returns

`void`

#### Inherited from

[Leafer](Leafer.md).[__setLeafer](Leafer.md#__setleafer)

#### Defined in

[src/ui/packages/display/src/Leafer.ts:252](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/display/src/Leafer.ts#L252)

___

### \_\_checkAutoLayout

▸ **__checkAutoLayout**(): `void`

#### Returns

`void`

#### Inherited from

[Leafer](Leafer.md).[__checkAutoLayout](Leafer.md#__checkautolayout)

#### Defined in

[src/ui/packages/display/src/Leafer.ts:257](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/display/src/Leafer.ts#L257)

___

### \_\_setAttr

▸ **__setAttr**(`attrName`, `newValue`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `attrName` | `string` |
| `newValue` | [`IValue`](../modules.md#ivalue) |

#### Returns

`boolean`

#### Implementation of

[IApp](../interfaces/IApp.md).[__setAttr](../interfaces/IApp.md#__setattr)

#### Inherited from

[Leafer](Leafer.md).[__setAttr](Leafer.md#__setattr)

#### Defined in

[src/ui/packages/display/src/Leafer.ts:265](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/display/src/Leafer.ts#L265)

___

### \_\_getAttr

▸ **__getAttr**(`attrName`): [`IValue`](../modules.md#ivalue)

#### Parameters

| Name | Type |
| :------ | :------ |
| `attrName` | `string` |

#### Returns

[`IValue`](../modules.md#ivalue)

#### Implementation of

[IApp](../interfaces/IApp.md).[__getAttr](../interfaces/IApp.md#__getattr)

#### Inherited from

[Leafer](Leafer.md).[__getAttr](Leafer.md#__getattr)

#### Defined in

[src/ui/packages/display/src/Leafer.ts:282](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/display/src/Leafer.ts#L282)

___

### \_\_changeCanvasSize

▸ **__changeCanvasSize**(`attrName`, `newValue`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `attrName` | [`ICanvasSizeAttr`](../modules.md#icanvassizeattr) |
| `newValue` | `number` |

#### Returns

`void`

#### Inherited from

[Leafer](Leafer.md).[__changeCanvasSize](Leafer.md#__changecanvassize)

#### Defined in

[src/ui/packages/display/src/Leafer.ts:287](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/display/src/Leafer.ts#L287)

___

### \_\_changeFill

▸ **__changeFill**(`newValue`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `newValue` | `string` |

#### Returns

`void`

#### Inherited from

[Leafer](Leafer.md).[__changeFill](Leafer.md#__changefill)

#### Defined in

[src/ui/packages/display/src/Leafer.ts:295](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/display/src/Leafer.ts#L295)

___

### \_\_onLayoutEnd

▸ **__onLayoutEnd**(): `void`

#### Returns

`void`

#### Inherited from

[Leafer](Leafer.md).[__onLayoutEnd](Leafer.md#__onlayoutend)

#### Defined in

[src/ui/packages/display/src/Leafer.ts:320](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/display/src/Leafer.ts#L320)

___

### \_\_onNextRender

▸ **__onNextRender**(): `void`

#### Returns

`void`

#### Inherited from

[Leafer](Leafer.md).[__onNextRender](Leafer.md#__onnextrender)

#### Defined in

[src/ui/packages/display/src/Leafer.ts:333](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/display/src/Leafer.ts#L333)

___

### \_\_checkViewCompleted

▸ **__checkViewCompleted**(`emit?`): `void`

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `emit` | `boolean` | `true` |

#### Returns

`void`

#### Inherited from

[Leafer](Leafer.md).[__checkViewCompleted](Leafer.md#__checkviewcompleted)

#### Defined in

[src/ui/packages/display/src/Leafer.ts:346](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/display/src/Leafer.ts#L346)

___

### \_\_onWatchData

▸ **__onWatchData**(): `void`

#### Returns

`void`

#### Inherited from

[Leafer](Leafer.md).[__onWatchData](Leafer.md#__onwatchdata)

#### Defined in

[src/ui/packages/display/src/Leafer.ts:356](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/display/src/Leafer.ts#L356)

___

### waitInit

▸ **waitInit**(`item`, `bind?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `item` | [`IFunction`](../interfaces/IFunction.md) |
| `bind?` | [`IObject`](../interfaces/IObject.md) |

#### Returns

`void`

#### Inherited from

[Leafer](Leafer.md).[waitInit](Leafer.md#waitinit)

#### Defined in

[src/ui/packages/display/src/Leafer.ts:362](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/display/src/Leafer.ts#L362)

___

### waitReady

▸ **waitReady**(`item`, `bind?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `item` | [`IFunction`](../interfaces/IFunction.md) |
| `bind?` | [`IObject`](../interfaces/IObject.md) |

#### Returns

`void`

#### Implementation of

[IApp](../interfaces/IApp.md).[waitReady](../interfaces/IApp.md#waitready)

#### Inherited from

[Leafer](Leafer.md).[waitReady](Leafer.md#waitready)

#### Defined in

[src/ui/packages/display/src/Leafer.ts:368](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/display/src/Leafer.ts#L368)

___

### waitViewReady

▸ **waitViewReady**(`item`, `bind?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `item` | [`IFunction`](../interfaces/IFunction.md) |
| `bind?` | [`IObject`](../interfaces/IObject.md) |

#### Returns

`void`

#### Implementation of

[IApp](../interfaces/IApp.md).[waitViewReady](../interfaces/IApp.md#waitviewready)

#### Inherited from

[Leafer](Leafer.md).[waitViewReady](Leafer.md#waitviewready)

#### Defined in

[src/ui/packages/display/src/Leafer.ts:373](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/display/src/Leafer.ts#L373)

___

### waitViewCompleted

▸ **waitViewCompleted**(`item`, `bind?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `item` | [`IFunction`](../interfaces/IFunction.md) |
| `bind?` | [`IObject`](../interfaces/IObject.md) |

#### Returns

`void`

#### Implementation of

[IApp](../interfaces/IApp.md).[waitViewCompleted](../interfaces/IApp.md#waitviewcompleted)

#### Inherited from

[Leafer](Leafer.md).[waitViewCompleted](Leafer.md#waitviewcompleted)

#### Defined in

[src/ui/packages/display/src/Leafer.ts:378](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/display/src/Leafer.ts#L378)

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

[IApp](../interfaces/IApp.md).[nextRender](../interfaces/IApp.md#nextrender)

#### Inherited from

[Leafer](Leafer.md).[nextRender](Leafer.md#nextrender)

#### Defined in

[src/ui/packages/display/src/Leafer.ts:385](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/display/src/Leafer.ts#L385)

___

### zoom

▸ **zoom**(`_zoomType`, `_optionsOrPadding?`, `_scroll?`, `_transition?`): [`IBoundsData`](../interfaces/IBoundsData.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `_zoomType` | [`IZoomType`](../modules.md#izoomtype) |
| `_optionsOrPadding?` | [`IFourNumber`](../modules.md#ifournumber) \| [`IZoomOptions`](../interfaces/IZoomOptions.md) |
| `_scroll?` | `boolean` \| ``"x"`` \| ``"y"`` |
| `_transition?` | [`ITransition`](../modules.md#itransition) |

#### Returns

[`IBoundsData`](../interfaces/IBoundsData.md)

#### Implementation of

[IApp](../interfaces/IApp.md).[zoom](../interfaces/IApp.md#zoom)

#### Inherited from

[Leafer](Leafer.md).[zoom](Leafer.md#zoom)

#### Defined in

[src/ui/packages/display/src/Leafer.ts:397](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/display/src/Leafer.ts#L397)

___

### getValidMove

▸ **getValidMove**(`moveX`, `moveY`, `_checkLimit?`): [`IPointData`](../interfaces/IPointData.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `moveX` | `number` |
| `moveY` | `number` |
| `_checkLimit?` | `boolean` |

#### Returns

[`IPointData`](../interfaces/IPointData.md)

#### Implementation of

[IApp](../interfaces/IApp.md).[getValidMove](../interfaces/IApp.md#getvalidmove)

#### Inherited from

[Leafer](Leafer.md).[getValidMove](Leafer.md#getvalidmove)

#### Defined in

[src/ui/packages/display/src/Leafer.ts:403](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/display/src/Leafer.ts#L403)

___

### getValidScale

▸ **getValidScale**(`changeScale`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `changeScale` | `number` |

#### Returns

`number`

#### Implementation of

[IApp](../interfaces/IApp.md).[getValidScale](../interfaces/IApp.md#getvalidscale)

#### Inherited from

[Leafer](Leafer.md).[getValidScale](Leafer.md#getvalidscale)

#### Defined in

[src/ui/packages/display/src/Leafer.ts:404](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/display/src/Leafer.ts#L404)

___

### getWorldPointByClient

▸ **getWorldPointByClient**(`clientPoint`, `updateClient?`): [`IPointData`](../interfaces/IPointData.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `clientPoint` | [`IClientPointData`](../interfaces/IClientPointData.md) |
| `updateClient?` | `boolean` |

#### Returns

[`IPointData`](../interfaces/IPointData.md)

#### Implementation of

[IApp](../interfaces/IApp.md).[getWorldPointByClient](../interfaces/IApp.md#getworldpointbyclient)

#### Inherited from

[Leafer](Leafer.md).[getWorldPointByClient](Leafer.md#getworldpointbyclient)

#### Defined in

[src/ui/packages/display/src/Leafer.ts:407](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/display/src/Leafer.ts#L407)

___

### getPagePointByClient

▸ **getPagePointByClient**(`clientPoint`, `updateClient?`): [`IPointData`](../interfaces/IPointData.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `clientPoint` | [`IClientPointData`](../interfaces/IClientPointData.md) |
| `updateClient?` | `boolean` |

#### Returns

[`IPointData`](../interfaces/IPointData.md)

#### Implementation of

[IApp](../interfaces/IApp.md).[getPagePointByClient](../interfaces/IApp.md#getpagepointbyclient)

#### Inherited from

[Leafer](Leafer.md).[getPagePointByClient](Leafer.md#getpagepointbyclient)

#### Defined in

[src/ui/packages/display/src/Leafer.ts:411](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/display/src/Leafer.ts#L411)

___

### getClientPointByWorld

▸ **getClientPointByWorld**(`worldPoint`): [`IPointData`](../interfaces/IPointData.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `worldPoint` | [`IPointData`](../interfaces/IPointData.md) |

#### Returns

[`IPointData`](../interfaces/IPointData.md)

#### Implementation of

[IApp](../interfaces/IApp.md).[getClientPointByWorld](../interfaces/IApp.md#getclientpointbyworld)

#### Inherited from

[Leafer](Leafer.md).[getClientPointByWorld](Leafer.md#getclientpointbyworld)

#### Defined in

[src/ui/packages/display/src/Leafer.ts:415](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/display/src/Leafer.ts#L415)

___

### updateClientBounds

▸ **updateClientBounds**(): `void`

#### Returns

`void`

#### Implementation of

[IApp](../interfaces/IApp.md).[updateClientBounds](../interfaces/IApp.md#updateclientbounds)

#### Inherited from

[Leafer](Leafer.md).[updateClientBounds](Leafer.md#updateclientbounds)

#### Defined in

[src/ui/packages/display/src/Leafer.ts:420](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/display/src/Leafer.ts#L420)

___

### receiveEvent

▸ **receiveEvent**(`_event`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `_event` | `any` |

#### Returns

`void`

#### Implementation of

[IApp](../interfaces/IApp.md).[receiveEvent](../interfaces/IApp.md#receiveevent)

#### Inherited from

[Leafer](Leafer.md).[receiveEvent](Leafer.md#receiveevent)

#### Defined in

[src/ui/packages/display/src/Leafer.ts:425](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/display/src/Leafer.ts#L425)

___

### emitLeafer

▸ **emitLeafer**(`type`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | `string` |

#### Returns

`void`

#### Inherited from

[Leafer](Leafer.md).[emitLeafer](Leafer.md#emitleafer)

#### Defined in

[src/ui/packages/display/src/Leafer.ts:427](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/display/src/Leafer.ts#L427)

___

### \_\_listenEvents

▸ **__listenEvents**(): `void`

#### Returns

`void`

#### Inherited from

[Leafer](Leafer.md).[__listenEvents](Leafer.md#__listenevents)

#### Defined in

[src/ui/packages/display/src/Leafer.ts:431](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/display/src/Leafer.ts#L431)

___

### \_\_removeListenEvents

▸ **__removeListenEvents**(): `void`

#### Returns

`void`

#### Inherited from

[Leafer](Leafer.md).[__removeListenEvents](Leafer.md#__removelistenevents)

#### Defined in

[src/ui/packages/display/src/Leafer.ts:448](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/display/src/Leafer.ts#L448)

___

### destroy

▸ **destroy**(`sync?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `sync?` | `boolean` |

#### Returns

`void`

#### Implementation of

[IApp](../interfaces/IApp.md).[destroy](../interfaces/IApp.md#destroy)

#### Inherited from

[Leafer](Leafer.md).[destroy](Leafer.md#destroy)

#### Defined in

[src/ui/packages/display/src/Leafer.ts:452](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/display/src/Leafer.ts#L452)

___

### get

▸ **get**\<`K`\>(`name?`): [`IUIInputData`](../interfaces/IUIInputData.md) \| [`App`](App.md)[`K`]

#### Type parameters

| Name | Type |
| :------ | :------ |
| `K` | extends keyof [`App`](App.md) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `name?` | [`IUIInputData`](../interfaces/IUIInputData.md) \| `K` \| `K`[] |

#### Returns

[`IUIInputData`](../interfaces/IUIInputData.md) \| [`App`](App.md)[`K`]

#### Implementation of

[IApp](../interfaces/IApp.md).[get](../interfaces/IApp.md#get)

#### Inherited from

[Leafer](Leafer.md).[get](Leafer.md#get)

#### Defined in

[src/ui/packages/display/src/UI.ts:434](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/display/src/UI.ts#L434)

___

### createProxyData

▸ **createProxyData**(): [`IUIInputData`](../interfaces/IUIInputData.md)

#### Returns

[`IUIInputData`](../interfaces/IUIInputData.md)

#### Implementation of

[IApp](../interfaces/IApp.md).[createProxyData](../interfaces/IApp.md#createproxydata)

#### Inherited from

[Leafer](Leafer.md).[createProxyData](Leafer.md#createproxydata)

#### Defined in

[src/ui/packages/display/src/UI.ts:438](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/display/src/UI.ts#L438)

___

### clearProxyData

▸ **clearProxyData**(): `void`

#### Returns

`void`

#### Implementation of

[IApp](../interfaces/IApp.md).[clearProxyData](../interfaces/IApp.md#clearproxydata)

#### Inherited from

[Leafer](Leafer.md).[clearProxyData](Leafer.md#clearproxydata)

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

[IApp](../interfaces/IApp.md).[find](../interfaces/IApp.md#find)

#### Inherited from

[Leafer](Leafer.md).[find](Leafer.md#find)

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

[IApp](../interfaces/IApp.md).[findTag](../interfaces/IApp.md#findtag)

#### Inherited from

[Leafer](Leafer.md).[findTag](Leafer.md#findtag)

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

[IApp](../interfaces/IApp.md).[findOne](../interfaces/IApp.md#findone)

#### Inherited from

[Leafer](Leafer.md).[findOne](Leafer.md#findone)

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

[IApp](../interfaces/IApp.md).[findId](../interfaces/IApp.md#findid)

#### Inherited from

[Leafer](Leafer.md).[findId](Leafer.md#findid)

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

[IApp](../interfaces/IApp.md).[getPath](../interfaces/IApp.md#getpath)

#### Inherited from

[Leafer](Leafer.md).[getPath](Leafer.md#getpath)

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

[IApp](../interfaces/IApp.md).[getPathString](../interfaces/IApp.md#getpathstring)

#### Inherited from

[Leafer](Leafer.md).[getPathString](Leafer.md#getpathstring)

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

[IApp](../interfaces/IApp.md).[asPath](../interfaces/IApp.md#aspath)

#### Inherited from

[Leafer](Leafer.md).[asPath](Leafer.md#aspath)

#### Defined in

[src/ui/packages/display/src/UI.ts:466](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/display/src/UI.ts#L466)

___

### load

▸ **load**(): `void`

#### Returns

`void`

#### Implementation of

[IApp](../interfaces/IApp.md).[load](../interfaces/IApp.md#load)

#### Inherited from

[Leafer](Leafer.md).[load](Leafer.md#load)

#### Defined in

[src/ui/packages/display/src/UI.ts:470](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/display/src/UI.ts#L470)

___

### \_\_onUpdateSize

▸ **__onUpdateSize**(): `void`

#### Returns

`void`

#### Implementation of

[IApp](../interfaces/IApp.md).[__onUpdateSize](../interfaces/IApp.md#__onupdatesize)

#### Inherited from

[Leafer](Leafer.md).[__onUpdateSize](Leafer.md#__onupdatesize)

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

[IApp](../interfaces/IApp.md).[__updateRenderPath](../interfaces/IApp.md#__updaterenderpath)

#### Inherited from

[Leafer](Leafer.md).[__updateRenderPath](Leafer.md#__updaterenderpath)

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

[IApp](../interfaces/IApp.md).[__drawRenderPath](../interfaces/IApp.md#__drawrenderpath)

#### Inherited from

[Leafer](Leafer.md).[__drawRenderPath](Leafer.md#__drawrenderpath)

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

[IApp](../interfaces/IApp.md).[__drawPath](../interfaces/IApp.md#__drawpath)

#### Inherited from

[Leafer](Leafer.md).[__drawPath](Leafer.md#__drawpath)

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

[IApp](../interfaces/IApp.md).[__drawPathByData](../interfaces/IApp.md#__drawpathbydata)

#### Inherited from

[Leafer](Leafer.md).[__drawPathByData](Leafer.md#__drawpathbydata)

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

[IApp](../interfaces/IApp.md).[__drawPathByBox](../interfaces/IApp.md#__drawpathbybox)

#### Inherited from

[Leafer](Leafer.md).[__drawPathByBox](Leafer.md#__drawpathbybox)

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

[IApp](../interfaces/IApp.md).[drawImagePlaceholder](../interfaces/IApp.md#drawimageplaceholder)

#### Inherited from

[Leafer](Leafer.md).[drawImagePlaceholder](Leafer.md#drawimageplaceholder)

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

[IApp](../interfaces/IApp.md).[animate](../interfaces/IApp.md#animate)

#### Inherited from

[Leafer](Leafer.md).[animate](Leafer.md#animate)

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

[IApp](../interfaces/IApp.md).[killAnimate](../interfaces/IApp.md#killanimate)

#### Inherited from

[Leafer](Leafer.md).[killAnimate](Leafer.md#killanimate)

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

[IApp](../interfaces/IApp.md).[export](../interfaces/IApp.md#export)

#### Inherited from

[Leafer](Leafer.md).[export](Leafer.md#export)

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

[IApp](../interfaces/IApp.md).[syncExport](../interfaces/IApp.md#syncexport)

#### Inherited from

[Leafer](Leafer.md).[syncExport](Leafer.md#syncexport)

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

[IApp](../interfaces/IApp.md).[clone](../interfaces/IApp.md#clone)

#### Inherited from

[Leafer](Leafer.md).[clone](Leafer.md#clone)

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

[Leafer](Leafer.md).[one](Leafer.md#one)

#### Defined in

[src/ui/packages/display/src/UI.ts:546](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/display/src/UI.ts#L546)

___

### registerUI

▸ **registerUI**(): `void`

#### Returns

`void`

#### Inherited from

[Leafer](Leafer.md).[registerUI](Leafer.md#registerui)

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

[Leafer](Leafer.md).[registerData](Leafer.md#registerdata)

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

[Leafer](Leafer.md).[setEditConfig](Leafer.md#seteditconfig)

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

[Leafer](Leafer.md).[setEditOuter](Leafer.md#seteditouter)

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

[Leafer](Leafer.md).[setEditInner](Leafer.md#seteditinner)

#### Defined in

[src/ui/packages/display/src/UI.ts:565](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/display/src/UI.ts#L565)
