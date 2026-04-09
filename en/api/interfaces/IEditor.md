# Interface: IEditor

## Hierarchy

- [`IEditorBase`](IEditorBase.md)

  ↳ **`IEditor`**

## Implemented by

- [`Editor`](../classes/Editor.md)

## Table of contents

### Properties

- [simulateTarget](IEditor.md#simulatetarget)
- [selector](IEditor.md#selector)
- [editBox](IEditor.md#editbox)
- [editTool](IEditor.md#edittool)
- [innerEditor](IEditor.md#innereditor)
- [targetEventIds](IEditor.md#targeteventids)
- [id](IEditor.md#id)
- [name](IEditor.md#name)
- [className](IEditor.md#classname)
- [blendMode](IEditor.md#blendmode)
- [opacity](IEditor.md#opacity)
- [visible](IEditor.md#visible)
- [selected](IEditor.md#selected)
- [disabled](IEditor.md#disabled)
- [locked](IEditor.md#locked)
- [zIndex](IEditor.md#zindex)
- [dim](IEditor.md#dim)
- [dimskip](IEditor.md#dimskip)
- [bright](IEditor.md#bright)
- [mask](IEditor.md#mask)
- [eraser](IEditor.md#eraser)
- [filter](IEditor.md#filter)
- [complex](IEditor.md#complex)
- [x](IEditor.md#x)
- [y](IEditor.md#y)
- [width](IEditor.md#width)
- [height](IEditor.md#height)
- [scaleX](IEditor.md#scalex)
- [scaleY](IEditor.md#scaley)
- [scaleFixed](IEditor.md#scalefixed)
- [rotation](IEditor.md#rotation)
- [skewX](IEditor.md#skewx)
- [skewY](IEditor.md#skewy)
- [scale](IEditor.md#scale)
- [offsetX](IEditor.md#offsetx)
- [offsetY](IEditor.md#offsety)
- [scrollX](IEditor.md#scrollx)
- [scrollY](IEditor.md#scrolly)
- [origin](IEditor.md#origin)
- [around](IEditor.md#around)
- [lazy](IEditor.md#lazy)
- [pixelRatio](IEditor.md#pixelratio)
- [renderSpread](IEditor.md#renderspread)
- [path](IEditor.md#path)
- [windingRule](IEditor.md#windingrule)
- [closed](IEditor.md#closed)
- [flow](IEditor.md#flow)
- [padding](IEditor.md#padding)
- [gap](IEditor.md#gap)
- [flowAlign](IEditor.md#flowalign)
- [flowWrap](IEditor.md#flowwrap)
- [itemBox](IEditor.md#itembox)
- [inFlow](IEditor.md#inflow)
- [autoWidth](IEditor.md#autowidth)
- [autoHeight](IEditor.md#autoheight)
- [lockRatio](IEditor.md#lockratio)
- [autoBox](IEditor.md#autobox)
- [widthRange](IEditor.md#widthrange)
- [heightRange](IEditor.md#heightrange)
- [draggable](IEditor.md#draggable)
- [dragBounds](IEditor.md#dragbounds)
- [dragBoundsType](IEditor.md#dragboundstype)
- [editable](IEditor.md#editable)
- [hittable](IEditor.md#hittable)
- [hitFill](IEditor.md#hitfill)
- [hitStroke](IEditor.md#hitstroke)
- [hitBox](IEditor.md#hitbox)
- [hitChildren](IEditor.md#hitchildren)
- [hitSelf](IEditor.md#hitself)
- [hitRadius](IEditor.md#hitradius)
- [button](IEditor.md#button)
- [cursor](IEditor.md#cursor)
- [motionPath](IEditor.md#motionpath)
- [motionPrecision](IEditor.md#motionprecision)
- [motion](IEditor.md#motion)
- [motionRotation](IEditor.md#motionrotation)
- [normalStyle](IEditor.md#normalstyle)
- [event](IEditor.md#event)
- [data](IEditor.md#data)
- [tag](IEditor.md#tag)
- [\_\_tag](IEditor.md#__tag)
- [innerName](IEditor.md#innername)
- [\_\_DataProcessor](IEditor.md#__dataprocessor)
- [\_\_LayoutProcessor](IEditor.md#__layoutprocessor)
- [leaferIsCreated](IEditor.md#leaferiscreated)
- [leaferIsReady](IEditor.md#leaferisready)
- [isApp](IEditor.md#isapp)
- [isLeafer](IEditor.md#isleafer)
- [isBranch](IEditor.md#isbranch)
- [isBranchLeaf](IEditor.md#isbranchleaf)
- [isOutside](IEditor.md#isoutside)
- [skipJSON](IEditor.md#skipjson)
- [syncEventer](IEditor.md#synceventer)
- [lockNormalStyle](IEditor.md#locknormalstyle)
- [\_\_layout](IEditor.md#__layout)
- [\_\_world](IEditor.md#__world)
- [\_\_local](IEditor.md#__local)
- [\_\_nowWorld](IEditor.md#__nowworld)
- [\_\_cameraWorld](IEditor.md#__cameraworld)
- [\_\_nowWorldShapeBounds](IEditor.md#__nowworldshapebounds)
- [\_\_localMatrix](IEditor.md#__localmatrix)
- [\_\_localBoxBounds](IEditor.md#__localboxbounds)
- [\_\_worldOpacity](IEditor.md#__worldopacity)
- [worldTransform](IEditor.md#worldtransform)
- [localTransform](IEditor.md#localtransform)
- [\_\_scrollWorld](IEditor.md#__scrollworld)
- [scrollWorldTransform](IEditor.md#scrollworldtransform)
- [boxBounds](IEditor.md#boxbounds)
- [renderBounds](IEditor.md#renderbounds)
- [worldBoxBounds](IEditor.md#worldboxbounds)
- [worldStrokeBounds](IEditor.md#worldstrokebounds)
- [worldRenderBounds](IEditor.md#worldrenderbounds)
- [worldOpacity](IEditor.md#worldopacity)
- [\_\_level](IEditor.md#__level)
- [\_\_tempNumber](IEditor.md#__tempnumber)
- [\_\_worldFlipped](IEditor.md#__worldflipped)
- [\_\_hasAutoLayout](IEditor.md#__hasautolayout)
- [\_\_hasMotionPath](IEditor.md#__hasmotionpath)
- [\_\_hasComplex](IEditor.md#__hascomplex)
- [\_\_hasMask](IEditor.md#__hasmask)
- [\_\_hasEraser](IEditor.md#__haseraser)
- [\_\_hitCanvas](IEditor.md#__hitcanvas)
- [\_\_flowBounds](IEditor.md#__flowbounds)
- [\_\_widthGrow](IEditor.md#__widthgrow)
- [\_\_heightGrow](IEditor.md#__heightgrow)
- [\_\_hasGrow](IEditor.md#__hasgrow)
- [\_\_onlyHitMask](IEditor.md#__onlyhitmask)
- [\_\_ignoreHitWorld](IEditor.md#__ignorehitworld)
- [\_\_inLazyBounds](IEditor.md#__inlazybounds)
- [pathInputed](IEditor.md#pathinputed)
- [isAutoWidth](IEditor.md#isautowidth)
- [isAutoHeight](IEditor.md#isautoheight)
- [destroyed](IEditor.md#destroyed)
- [topChildren](IEditor.md#topchildren)
- [innerId](IEditor.md#innerid)
- [\_\_captureMap](IEditor.md#__capturemap)
- [\_\_bubbleMap](IEditor.md#__bubblemap)
- [\_\_hasLocalEvent](IEditor.md#__haslocalevent)
- [\_\_hasWorldEvent](IEditor.md#__hasworldevent)
- [dragHoverExclude](IEditor.md#draghoverexclude)
- [cornerRadius](IEditor.md#cornerradius)
- [cornerSmoothing](IEditor.md#cornersmoothing)
- [fill](IEditor.md#fill)
- [stroke](IEditor.md#stroke)
- [startArrow](IEditor.md#startarrow)
- [endArrow](IEditor.md#endarrow)
- [strokeAlign](IEditor.md#strokealign)
- [strokeWidth](IEditor.md#strokewidth)
- [strokeScaleFixed](IEditor.md#strokescalefixed)
- [strokeCap](IEditor.md#strokecap)
- [strokeJoin](IEditor.md#strokejoin)
- [dashPattern](IEditor.md#dashpattern)
- [dashOffset](IEditor.md#dashoffset)
- [miterLimit](IEditor.md#miterlimit)
- [shadow](IEditor.md#shadow)
- [innerShadow](IEditor.md#innershadow)
- [blur](IEditor.md#blur)
- [backgroundBlur](IEditor.md#backgroundblur)
- [grayscale](IEditor.md#grayscale)
- [\_\_](IEditor.md#__)
- [children](IEditor.md#children)
- [childlessJSON](IEditor.md#childlessjson)
- [app](IEditor.md#app)
- [leafer](IEditor.md#leafer)
- [parent](IEditor.md#parent)
- [zoomLayer](IEditor.md#zoomlayer)
- [isFrame](IEditor.md#isframe)
- [isOverflow](IEditor.md#isoverflow)
- [useFastShadow](IEditor.md#usefastshadow)
- [proxyData](IEditor.md#proxydata)
- [\_\_proxyData](IEditor.md#__proxydata)
- [animation](IEditor.md#animation)
- [animationOut](IEditor.md#animationout)
- [startLinker](IEditor.md#startlinker)
- [endLinker](IEditor.md#endlinker)
- [\_\_box](IEditor.md#__box)
- [\_\_animate](IEditor.md#__animate)
- [pen](IEditor.md#pen)
- [transition](IEditor.md#transition)
- [transitionOut](IEditor.md#transitionout)
- [states](IEditor.md#states)
- [state](IEditor.md#state)
- [hoverStyle](IEditor.md#hoverstyle)
- [pressStyle](IEditor.md#pressstyle)
- [focusStyle](IEditor.md#focusstyle)
- [selectedStyle](IEditor.md#selectedstyle)
- [disabledStyle](IEditor.md#disabledstyle)
- [placeholderStyle](IEditor.md#placeholderstyle)
- [placeholderColor](IEditor.md#placeholdercolor)
- [placeholderDelay](IEditor.md#placeholderdelay)
- [editConfig](IEditor.md#editconfig)
- [editOuter](IEditor.md#editouter)
- [editInner](IEditor.md#editinner)
- [config](IEditor.md#config)
- [mergeConfig](IEditor.md#mergeconfig)
- [mergedConfig](IEditor.md#mergedconfig)
- [target](IEditor.md#target)
- [hoverTarget](IEditor.md#hovertarget)
- [dimTarget](IEditor.md#dimtarget)
- [list](IEditor.md#list)
- [leafList](IEditor.md#leaflist)
- [openedGroupList](IEditor.md#openedgrouplist)
- [editing](IEditor.md#editing)
- [innerEditing](IEditor.md#innerediting)
- [groupOpening](IEditor.md#groupopening)
- [multiple](IEditor.md#multiple)
- [single](IEditor.md#single)
- [dragPoint](IEditor.md#dragpoint)
- [dragging](IEditor.md#dragging)
- [gesturing](IEditor.md#gesturing)
- [moving](IEditor.md#moving)
- [resizing](IEditor.md#resizing)
- [rotating](IEditor.md#rotating)
- [skewing](IEditor.md#skewing)
- [element](IEditor.md#element)
- [buttons](IEditor.md#buttons)
- [editMask](IEditor.md#editmask)
- [hasDimOthers](IEditor.md#hasdimothers)
- [targetLeafer](IEditor.md#targetleafer)

### Methods

- [getEditTool](IEditor.md#getedittool)
- [getInnerEditor](IEditor.md#getinnereditor)
- [checkOpenedGroups](IEditor.md#checkopenedgroups)
- [listenTargetEvents](IEditor.md#listentargetevents)
- [removeTargetEvents](IEditor.md#removetargetevents)
- [resetCustom](IEditor.md#resetcustom)
- [waitParent](IEditor.md#waitparent)
- [waitLeafer](IEditor.md#waitleafer)
- [nextRender](IEditor.md#nextrender)
- [removeNextRender](IEditor.md#removenextrender)
- [\_\_bindLeafer](IEditor.md#__bindleafer)
- [setAttr](IEditor.md#setattr)
- [getAttr](IEditor.md#getattr)
- [getComputedAttr](IEditor.md#getcomputedattr)
- [toString](IEditor.md#tostring)
- [toSVG](IEditor.md#tosvg)
- [\_\_SVG](IEditor.md#__svg)
- [toHTML](IEditor.md#tohtml)
- [\_\_setAttr](IEditor.md#__setattr)
- [\_\_getAttr](IEditor.md#__getattr)
- [setProxyAttr](IEditor.md#setproxyattr)
- [getProxyAttr](IEditor.md#getproxyattr)
- [focus](IEditor.md#focus)
- [updateState](IEditor.md#updatestate)
- [updateLayout](IEditor.md#updatelayout)
- [forceUpdate](IEditor.md#forceupdate)
- [forceRender](IEditor.md#forcerender)
- [\_\_extraUpdate](IEditor.md#__extraupdate)
- [\_\_updateWorldMatrix](IEditor.md#__updateworldmatrix)
- [\_\_updateLocalMatrix](IEditor.md#__updatelocalmatrix)
- [\_\_updateWorldBounds](IEditor.md#__updateworldbounds)
- [\_\_updateLocalBounds](IEditor.md#__updatelocalbounds)
- [\_\_updateLocalBoxBounds](IEditor.md#__updatelocalboxbounds)
- [\_\_updateLocalStrokeBounds](IEditor.md#__updatelocalstrokebounds)
- [\_\_updateLocalRenderBounds](IEditor.md#__updatelocalrenderbounds)
- [\_\_updateContentBounds](IEditor.md#__updatecontentbounds)
- [\_\_updateBoxBounds](IEditor.md#__updateboxbounds)
- [\_\_updateStrokeBounds](IEditor.md#__updatestrokebounds)
- [\_\_updateRenderBounds](IEditor.md#__updaterenderbounds)
- [\_\_updateAutoLayout](IEditor.md#__updateautolayout)
- [\_\_updateFlowLayout](IEditor.md#__updateflowlayout)
- [\_\_updateNaturalSize](IEditor.md#__updatenaturalsize)
- [\_\_updateStrokeSpread](IEditor.md#__updatestrokespread)
- [\_\_updateRenderSpread](IEditor.md#__updaterenderspread)
- [\_\_onUpdateSize](IEditor.md#__onupdatesize)
- [\_\_updateEraser](IEditor.md#__updateeraser)
- [\_\_updateMask](IEditor.md#__updatemask)
- [\_\_renderMask](IEditor.md#__rendermask)
- [\_\_renderEraser](IEditor.md#__rendereraser)
- [\_\_getNowWorld](IEditor.md#__getnowworld)
- [getClampRenderScale](IEditor.md#getclamprenderscale)
- [getRenderScaleData](IEditor.md#getrenderscaledata)
- [getTransform](IEditor.md#gettransform)
- [getBounds](IEditor.md#getbounds)
- [getLayoutBounds](IEditor.md#getlayoutbounds)
- [getLayoutPoints](IEditor.md#getlayoutpoints)
- [getWorldBounds](IEditor.md#getworldbounds)
- [worldToLocal](IEditor.md#worldtolocal)
- [localToWorld](IEditor.md#localtoworld)
- [worldToInner](IEditor.md#worldtoinner)
- [innerToWorld](IEditor.md#innertoworld)
- [getBoxPoint](IEditor.md#getboxpoint)
- [getBoxPointByInner](IEditor.md#getboxpointbyinner)
- [getInnerPoint](IEditor.md#getinnerpoint)
- [getInnerPointByBox](IEditor.md#getinnerpointbybox)
- [getInnerPointByLocal](IEditor.md#getinnerpointbylocal)
- [getLocalPoint](IEditor.md#getlocalpoint)
- [getLocalPointByInner](IEditor.md#getlocalpointbyinner)
- [getPagePoint](IEditor.md#getpagepoint)
- [getWorldPoint](IEditor.md#getworldpoint)
- [getWorldPointByBox](IEditor.md#getworldpointbybox)
- [getWorldPointByLocal](IEditor.md#getworldpointbylocal)
- [getWorldPointByPage](IEditor.md#getworldpointbypage)
- [setTransform](IEditor.md#settransform)
- [transform](IEditor.md#transform)
- [move](IEditor.md#move)
- [moveInner](IEditor.md#moveinner)
- [scaleOf](IEditor.md#scaleof)
- [rotateOf](IEditor.md#rotateof)
- [skewOf](IEditor.md#skewof)
- [transformWorld](IEditor.md#transformworld)
- [moveWorld](IEditor.md#moveworld)
- [scaleOfWorld](IEditor.md#scaleofworld)
- [rotateOfWorld](IEditor.md#rotateofworld)
- [skewOfWorld](IEditor.md#skewofworld)
- [flip](IEditor.md#flip)
- [scaleResize](IEditor.md#scaleresize)
- [\_\_scaleResize](IEditor.md#__scaleresize)
- [resizeWidth](IEditor.md#resizewidth)
- [resizeHeight](IEditor.md#resizeheight)
- [hit](IEditor.md#hit)
- [\_\_hitWorld](IEditor.md#__hitworld)
- [\_\_hit](IEditor.md#__hit)
- [\_\_hitFill](IEditor.md#__hitfill)
- [\_\_hitStroke](IEditor.md#__hitstroke)
- [\_\_hitPixel](IEditor.md#__hitpixel)
- [\_\_drawHitPath](IEditor.md#__drawhitpath)
- [\_\_updateHitCanvas](IEditor.md#__updatehitcanvas)
- [\_\_render](IEditor.md#__render)
- [\_\_drawFast](IEditor.md#__drawfast)
- [\_\_draw](IEditor.md#__draw)
- [\_\_clip](IEditor.md#__clip)
- [\_\_renderShape](IEditor.md#__rendershape)
- [\_\_drawShape](IEditor.md#__drawshape)
- [\_\_updateWorldOpacity](IEditor.md#__updateworldopacity)
- [\_\_updateChange](IEditor.md#__updatechange)
- [\_\_drawPath](IEditor.md#__drawpath)
- [\_\_drawRenderPath](IEditor.md#__drawrenderpath)
- [\_\_updatePath](IEditor.md#__updatepath)
- [\_\_updateRenderPath](IEditor.md#__updaterenderpath)
- [getMotionPathData](IEditor.md#getmotionpathdata)
- [getMotionPoint](IEditor.md#getmotionpoint)
- [getMotionTotal](IEditor.md#getmotiontotal)
- [\_\_updateMotionPath](IEditor.md#__updatemotionpath)
- [\_\_runAnimation](IEditor.md#__runanimation)
- [\_\_emitLifeEvent](IEditor.md#__emitlifeevent)
- [\_\_updateSortChildren](IEditor.md#__updatesortchildren)
- [dropTo](IEditor.md#dropto)
- [\_\_realSetAttr](IEditor.md#__realsetattr)
- [emitPropertyEvent](IEditor.md#emitpropertyevent)
- [destroyEventer](IEditor.md#destroyeventer)
- [on](IEditor.md#on)
- [off](IEditor.md#off)
- [on\_](IEditor.md#on_)
- [off\_](IEditor.md#off_)
- [once](IEditor.md#once)
- [emit](IEditor.md#emit)
- [emitEvent](IEditor.md#emitevent)
- [hasEvent](IEditor.md#hasevent)
- [destroy](IEditor.md#destroy)
- [pick](IEditor.md#pick)
- [add](IEditor.md#add)
- [addAt](IEditor.md#addat)
- [addAfter](IEditor.md#addafter)
- [addBefore](IEditor.md#addbefore)
- [addMany](IEditor.md#addmany)
- [remove](IEditor.md#remove)
- [removeAll](IEditor.md#removeall)
- [clear](IEditor.md#clear)
- [reset](IEditor.md#reset)
- [set](IEditor.md#set)
- [toJSON](IEditor.md#tojson)
- [get](IEditor.md#get)
- [createProxyData](IEditor.md#createproxydata)
- [clearProxyData](IEditor.md#clearproxydata)
- [find](IEditor.md#find)
- [findTag](IEditor.md#findtag)
- [findOne](IEditor.md#findone)
- [findId](IEditor.md#findid)
- [getPath](IEditor.md#getpath)
- [getPathString](IEditor.md#getpathstring)
- [asPath](IEditor.md#aspath)
- [load](IEditor.md#load)
- [\_\_drawPathByData](IEditor.md#__drawpathbydata)
- [\_\_drawPathByBox](IEditor.md#__drawpathbybox)
- [\_\_drawAfterFill](IEditor.md#__drawafterfill)
- [\_\_drawContent](IEditor.md#__drawcontent)
- [drawImagePlaceholder](IEditor.md#drawimageplaceholder)
- [animate](IEditor.md#animate)
- [killAnimate](IEditor.md#killanimate)
- [export](IEditor.md#export)
- [syncExport](IEditor.md#syncexport)
- [clone](IEditor.md#clone)
- [select](IEditor.md#select)
- [cancel](IEditor.md#cancel)
- [hasItem](IEditor.md#hasitem)
- [getItem](IEditor.md#getitem)
- [shiftItem](IEditor.md#shiftitem)
- [addItem](IEditor.md#additem)
- [removeItem](IEditor.md#removeitem)
- [setDimOthers](IEditor.md#setdimothers)
- [setBright](IEditor.md#setbright)
- [cancelDimOthers](IEditor.md#canceldimothers)
- [update](IEditor.md#update)
- [updateEditBox](IEditor.md#updateeditbox)
- [updateEditTool](IEditor.md#updateedittool)
- [unloadEditTool](IEditor.md#unloadedittool)
- [getEditSize](IEditor.md#geteditsize)
- [group](IEditor.md#group)
- [ungroup](IEditor.md#ungroup)
- [openGroup](IEditor.md#opengroup)
- [closeGroup](IEditor.md#closegroup)
- [openInnerEditor](IEditor.md#openinnereditor)
- [closeInnerEditor](IEditor.md#closeinnereditor)
- [lock](IEditor.md#lock)
- [unlock](IEditor.md#unlock)
- [toTop](IEditor.md#totop)
- [toBottom](IEditor.md#tobottom)
- [onMove](IEditor.md#onmove)
- [onScale](IEditor.md#onscale)
- [onRotate](IEditor.md#onrotate)
- [onSkew](IEditor.md#onskew)

## Properties

### simulateTarget

• **simulateTarget**: [`ISimulateElement`](ISimulateElement.md)

#### Defined in

[src/in/packages/interface/src/editor/IEditor.ts:9](https://github.com/leaferjs/leafer-in/blob/d97f6888a45310d40717e43f47796d4f7d0dce1d/packages/interface/src/editor/IEditor.ts#L9)

___

### selector

• **selector**: [`IEditSelect`](IEditSelect.md)

#### Overrides

[IEditorBase](IEditorBase.md).[selector](IEditorBase.md#selector)

#### Defined in

[src/in/packages/interface/src/editor/IEditor.ts:11](https://github.com/leaferjs/leafer-in/blob/d97f6888a45310d40717e43f47796d4f7d0dce1d/packages/interface/src/editor/IEditor.ts#L11)

___

### editBox

• **editBox**: [`IEditBox`](IEditBox.md)

#### Overrides

[IEditorBase](IEditorBase.md).[editBox](IEditorBase.md#editbox)

#### Defined in

[src/in/packages/interface/src/editor/IEditor.ts:12](https://github.com/leaferjs/leafer-in/blob/d97f6888a45310d40717e43f47796d4f7d0dce1d/packages/interface/src/editor/IEditor.ts#L12)

___

### editTool

• `Optional` **editTool**: [`IEditTool`](IEditTool.md)

#### Overrides

[IEditorBase](IEditorBase.md).[editTool](IEditorBase.md#edittool)

#### Defined in

[src/in/packages/interface/src/editor/IEditor.ts:13](https://github.com/leaferjs/leafer-in/blob/d97f6888a45310d40717e43f47796d4f7d0dce1d/packages/interface/src/editor/IEditor.ts#L13)

___

### innerEditor

• `Optional` **innerEditor**: [`IInnerEditor`](IInnerEditor.md)

#### Overrides

[IEditorBase](IEditorBase.md).[innerEditor](IEditorBase.md#innereditor)

#### Defined in

[src/in/packages/interface/src/editor/IEditor.ts:14](https://github.com/leaferjs/leafer-in/blob/d97f6888a45310d40717e43f47796d4f7d0dce1d/packages/interface/src/editor/IEditor.ts#L14)

___

### targetEventIds

• **targetEventIds**: [`IEventListenerId`](IEventListenerId.md)[]

#### Defined in

[src/in/packages/interface/src/editor/IEditor.ts:16](https://github.com/leaferjs/leafer-in/blob/d97f6888a45310d40717e43f47796d4f7d0dce1d/packages/interface/src/editor/IEditor.ts#L16)

___

### id

• `Optional` **id**: `string`

#### Inherited from

[IEditorBase](IEditorBase.md).[id](IEditorBase.md#id)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:221](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/display/ILeaf.ts#L221)

___

### name

• `Optional` **name**: `string`

#### Inherited from

[IEditorBase](IEditorBase.md).[name](IEditorBase.md#name)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:222](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/display/ILeaf.ts#L222)

___

### className

• `Optional` **className**: `string`

#### Inherited from

[IEditorBase](IEditorBase.md).[className](IEditorBase.md#classname)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:223](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/display/ILeaf.ts#L223)

___

### blendMode

• `Optional` **blendMode**: [`IBlendMode`](../modules.md#iblendmode)

#### Inherited from

[IEditorBase](IEditorBase.md).[blendMode](IEditorBase.md#blendmode)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:225](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/display/ILeaf.ts#L225)

___

### opacity

• `Optional` **opacity**: `number`

#### Inherited from

[IEditorBase](IEditorBase.md).[opacity](IEditorBase.md#opacity)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:227](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/display/ILeaf.ts#L227)

___

### visible

• `Optional` **visible**: `boolean` \| `0`

#### Inherited from

[IEditorBase](IEditorBase.md).[visible](IEditorBase.md#visible)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:228](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/display/ILeaf.ts#L228)

___

### selected

• `Optional` **selected**: `boolean`

#### Inherited from

[IEditorBase](IEditorBase.md).[selected](IEditorBase.md#selected)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:229](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/display/ILeaf.ts#L229)

___

### disabled

• `Optional` **disabled**: `boolean`

#### Inherited from

[IEditorBase](IEditorBase.md).[disabled](IEditorBase.md#disabled)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:230](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/display/ILeaf.ts#L230)

___

### locked

• `Optional` **locked**: `boolean`

#### Inherited from

[IEditorBase](IEditorBase.md).[locked](IEditorBase.md#locked)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:231](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/display/ILeaf.ts#L231)

___

### zIndex

• `Optional` **zIndex**: `number`

#### Inherited from

[IEditorBase](IEditorBase.md).[zIndex](IEditorBase.md#zindex)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:232](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/display/ILeaf.ts#L232)

___

### dim

• `Optional` **dim**: `number` \| `boolean`

#### Inherited from

[IEditorBase](IEditorBase.md).[dim](IEditorBase.md#dim)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:234](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/display/ILeaf.ts#L234)

___

### dimskip

• `Optional` **dimskip**: `boolean`

#### Inherited from

[IEditorBase](IEditorBase.md).[dimskip](IEditorBase.md#dimskip)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:235](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/display/ILeaf.ts#L235)

___

### bright

• `Optional` **bright**: `boolean`

#### Inherited from

[IEditorBase](IEditorBase.md).[bright](IEditorBase.md#bright)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:236](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/display/ILeaf.ts#L236)

___

### mask

• `Optional` **mask**: `boolean` \| [`IMaskType`](../modules.md#imasktype)

#### Inherited from

[IEditorBase](IEditorBase.md).[mask](IEditorBase.md#mask)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:238](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/display/ILeaf.ts#L238)

___

### eraser

• `Optional` **eraser**: `boolean` \| [`IEraserType`](../modules.md#ierasertype)

#### Inherited from

[IEditorBase](IEditorBase.md).[eraser](IEditorBase.md#eraser)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:239](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/display/ILeaf.ts#L239)

___

### filter

• `Optional` **filter**: [`IFilter`](IFilter.md) \| [`IFilter`](IFilter.md)[]

#### Inherited from

[IEditorBase](IEditorBase.md).[filter](IEditorBase.md#filter)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:240](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/display/ILeaf.ts#L240)

___

### complex

• `Optional` **complex**: `boolean`

#### Inherited from

[IEditorBase](IEditorBase.md).[complex](IEditorBase.md#complex)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:241](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/display/ILeaf.ts#L241)

___

### x

• `Optional` **x**: `number`

#### Inherited from

[IEditorBase](IEditorBase.md).[x](IEditorBase.md#x)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:244](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/display/ILeaf.ts#L244)

___

### y

• `Optional` **y**: `number`

#### Inherited from

[IEditorBase](IEditorBase.md).[y](IEditorBase.md#y)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:245](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/display/ILeaf.ts#L245)

___

### width

• `Optional` **width**: `number`

#### Inherited from

[IEditorBase](IEditorBase.md).[width](IEditorBase.md#width)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:246](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/display/ILeaf.ts#L246)

___

### height

• `Optional` **height**: `number`

#### Inherited from

[IEditorBase](IEditorBase.md).[height](IEditorBase.md#height)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:247](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/display/ILeaf.ts#L247)

___

### scaleX

• `Optional` **scaleX**: `number`

#### Inherited from

[IEditorBase](IEditorBase.md).[scaleX](IEditorBase.md#scalex)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:248](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/display/ILeaf.ts#L248)

___

### scaleY

• `Optional` **scaleY**: `number`

#### Inherited from

[IEditorBase](IEditorBase.md).[scaleY](IEditorBase.md#scaley)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:249](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/display/ILeaf.ts#L249)

___

### scaleFixed

• `Optional` **scaleFixed**: [`IScaleFixed`](../modules.md#iscalefixed)

#### Inherited from

[IEditorBase](IEditorBase.md).[scaleFixed](IEditorBase.md#scalefixed)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:250](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/display/ILeaf.ts#L250)

___

### rotation

• `Optional` **rotation**: `number`

#### Inherited from

[IEditorBase](IEditorBase.md).[rotation](IEditorBase.md#rotation)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:251](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/display/ILeaf.ts#L251)

___

### skewX

• `Optional` **skewX**: `number`

#### Inherited from

[IEditorBase](IEditorBase.md).[skewX](IEditorBase.md#skewx)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:252](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/display/ILeaf.ts#L252)

___

### skewY

• `Optional` **skewY**: `number`

#### Inherited from

[IEditorBase](IEditorBase.md).[skewY](IEditorBase.md#skewy)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:253](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/display/ILeaf.ts#L253)

___

### scale

• `Optional` **scale**: `number` \| [`IPointData`](IPointData.md)

#### Inherited from

[IEditorBase](IEditorBase.md).[scale](IEditorBase.md#scale)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:255](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/display/ILeaf.ts#L255)

___

### offsetX

• `Optional` **offsetX**: `number`

#### Inherited from

[IEditorBase](IEditorBase.md).[offsetX](IEditorBase.md#offsetx)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:257](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/display/ILeaf.ts#L257)

___

### offsetY

• `Optional` **offsetY**: `number`

#### Inherited from

[IEditorBase](IEditorBase.md).[offsetY](IEditorBase.md#offsety)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:258](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/display/ILeaf.ts#L258)

___

### scrollX

• `Optional` **scrollX**: `number`

#### Inherited from

[IEditorBase](IEditorBase.md).[scrollX](IEditorBase.md#scrollx)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:259](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/display/ILeaf.ts#L259)

___

### scrollY

• `Optional` **scrollY**: `number`

#### Inherited from

[IEditorBase](IEditorBase.md).[scrollY](IEditorBase.md#scrolly)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:260](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/display/ILeaf.ts#L260)

___

### origin

• `Optional` **origin**: [`IUnitPointData`](IUnitPointData.md) \| [`IDirection`](../modules.md#idirection)

#### Inherited from

[IEditorBase](IEditorBase.md).[origin](IEditorBase.md#origin)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:262](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/display/ILeaf.ts#L262)

___

### around

• `Optional` **around**: [`IUnitPointData`](IUnitPointData.md) \| [`IDirection`](../modules.md#idirection)

#### Inherited from

[IEditorBase](IEditorBase.md).[around](IEditorBase.md#around)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:263](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/display/ILeaf.ts#L263)

___

### lazy

• `Optional` **lazy**: `boolean`

#### Inherited from

[IEditorBase](IEditorBase.md).[lazy](IEditorBase.md#lazy)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:265](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/display/ILeaf.ts#L265)

___

### pixelRatio

• `Optional` **pixelRatio**: `number`

#### Inherited from

[IEditorBase](IEditorBase.md).[pixelRatio](IEditorBase.md#pixelratio)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:266](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/display/ILeaf.ts#L266)

___

### renderSpread

• `Optional` **renderSpread**: [`IFourNumber`](../modules.md#ifournumber)

#### Inherited from

[IEditorBase](IEditorBase.md).[renderSpread](IEditorBase.md#renderspread)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:268](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/display/ILeaf.ts#L268)

___

### path

• `Optional` **path**: `string` \| [`IPathCommandData`](../modules.md#ipathcommanddata) \| [`IPathCommandNode`](../modules.md#ipathcommandnode)[] \| [`IPathCommandObject`](../modules.md#ipathcommandobject)[]

#### Inherited from

[IEditorBase](IEditorBase.md).[path](IEditorBase.md#path)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:270](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/display/ILeaf.ts#L270)

___

### windingRule

• `Optional` **windingRule**: [`IWindingRule`](../modules.md#iwindingrule)

#### Inherited from

[IEditorBase](IEditorBase.md).[windingRule](IEditorBase.md#windingrule)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:271](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/display/ILeaf.ts#L271)

___

### closed

• `Optional` **closed**: `boolean`

#### Inherited from

[IEditorBase](IEditorBase.md).[closed](IEditorBase.md#closed)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:272](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/display/ILeaf.ts#L272)

___

### flow

• `Optional` **flow**: [`IFlowType`](../modules.md#iflowtype)

#### Inherited from

[IEditorBase](IEditorBase.md).[flow](IEditorBase.md#flow)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:275](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/display/ILeaf.ts#L275)

___

### padding

• `Optional` **padding**: [`IFourNumber`](../modules.md#ifournumber)

#### Inherited from

[IEditorBase](IEditorBase.md).[padding](IEditorBase.md#padding)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:276](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/display/ILeaf.ts#L276)

___

### gap

• `Optional` **gap**: [`IGap`](../modules.md#igap) \| [`IPointGap`](IPointGap.md)

#### Inherited from

[IEditorBase](IEditorBase.md).[gap](IEditorBase.md#gap)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:277](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/display/ILeaf.ts#L277)

___

### flowAlign

• `Optional` **flowAlign**: [`IFlowAxisAlign`](IFlowAxisAlign.md) \| [`IFlowAlign`](../modules.md#iflowalign)

#### Inherited from

[IEditorBase](IEditorBase.md).[flowAlign](IEditorBase.md#flowalign)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:278](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/display/ILeaf.ts#L278)

___

### flowWrap

• `Optional` **flowWrap**: [`IFlowWrap`](../modules.md#iflowwrap)

#### Inherited from

[IEditorBase](IEditorBase.md).[flowWrap](IEditorBase.md#flowwrap)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:279](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/display/ILeaf.ts#L279)

___

### itemBox

• `Optional` **itemBox**: [`IFlowBoxType`](../modules.md#iflowboxtype)

#### Inherited from

[IEditorBase](IEditorBase.md).[itemBox](IEditorBase.md#itembox)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:280](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/display/ILeaf.ts#L280)

___

### inFlow

• `Optional` **inFlow**: `boolean`

#### Inherited from

[IEditorBase](IEditorBase.md).[inFlow](IEditorBase.md#inflow)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:282](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/display/ILeaf.ts#L282)

___

### autoWidth

• `Optional` **autoWidth**: [`IAutoSize`](../modules.md#iautosize)

#### Inherited from

[IEditorBase](IEditorBase.md).[autoWidth](IEditorBase.md#autowidth)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:283](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/display/ILeaf.ts#L283)

___

### autoHeight

• `Optional` **autoHeight**: [`IAutoSize`](../modules.md#iautosize)

#### Inherited from

[IEditorBase](IEditorBase.md).[autoHeight](IEditorBase.md#autoheight)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:284](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/display/ILeaf.ts#L284)

___

### lockRatio

• `Optional` **lockRatio**: `boolean`

#### Inherited from

[IEditorBase](IEditorBase.md).[lockRatio](IEditorBase.md#lockratio)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:285](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/display/ILeaf.ts#L285)

___

### autoBox

• `Optional` **autoBox**: [`IAutoBoxData`](IAutoBoxData.md) \| [`IConstraint`](IConstraint.md)

#### Inherited from

[IEditorBase](IEditorBase.md).[autoBox](IEditorBase.md#autobox)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:286](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/display/ILeaf.ts#L286)

___

### widthRange

• `Optional` **widthRange**: [`IRangeSize`](IRangeSize.md)

#### Inherited from

[IEditorBase](IEditorBase.md).[widthRange](IEditorBase.md#widthrange)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:288](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/display/ILeaf.ts#L288)

___

### heightRange

• `Optional` **heightRange**: [`IRangeSize`](IRangeSize.md)

#### Inherited from

[IEditorBase](IEditorBase.md).[heightRange](IEditorBase.md#heightrange)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:289](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/display/ILeaf.ts#L289)

___

### draggable

• `Optional` **draggable**: `boolean` \| [`IAxis`](../modules.md#iaxis)

#### Inherited from

[IEditorBase](IEditorBase.md).[draggable](IEditorBase.md#draggable)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:292](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/display/ILeaf.ts#L292)

___

### dragBounds

• `Optional` **dragBounds**: `"parent"` \| [`IBoundsData`](IBoundsData.md)

#### Inherited from

[IEditorBase](IEditorBase.md).[dragBounds](IEditorBase.md#dragbounds)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:293](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/display/ILeaf.ts#L293)

___

### dragBoundsType

• `Optional` **dragBoundsType**: [`IDragBoundsType`](../modules.md#idragboundstype)

#### Inherited from

[IEditorBase](IEditorBase.md).[dragBoundsType](IEditorBase.md#dragboundstype)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:294](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/display/ILeaf.ts#L294)

___

### editable

• `Optional` **editable**: `boolean`

#### Inherited from

[IEditorBase](IEditorBase.md).[editable](IEditorBase.md#editable)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:296](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/display/ILeaf.ts#L296)

___

### hittable

• `Optional` **hittable**: `boolean`

#### Inherited from

[IEditorBase](IEditorBase.md).[hittable](IEditorBase.md#hittable)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:298](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/display/ILeaf.ts#L298)

___

### hitFill

• `Optional` **hitFill**: [`IHitType`](../modules.md#ihittype)

#### Inherited from

[IEditorBase](IEditorBase.md).[hitFill](IEditorBase.md#hitfill)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:299](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/display/ILeaf.ts#L299)

___

### hitStroke

• `Optional` **hitStroke**: [`IHitType`](../modules.md#ihittype)

#### Inherited from

[IEditorBase](IEditorBase.md).[hitStroke](IEditorBase.md#hitstroke)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:300](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/display/ILeaf.ts#L300)

___

### hitBox

• `Optional` **hitBox**: `boolean`

#### Inherited from

[IEditorBase](IEditorBase.md).[hitBox](IEditorBase.md#hitbox)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:301](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/display/ILeaf.ts#L301)

___

### hitChildren

• `Optional` **hitChildren**: `boolean`

#### Inherited from

[IEditorBase](IEditorBase.md).[hitChildren](IEditorBase.md#hitchildren)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:302](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/display/ILeaf.ts#L302)

___

### hitSelf

• `Optional` **hitSelf**: `boolean`

#### Inherited from

[IEditorBase](IEditorBase.md).[hitSelf](IEditorBase.md#hitself)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:303](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/display/ILeaf.ts#L303)

___

### hitRadius

• `Optional` **hitRadius**: `number`

#### Inherited from

[IEditorBase](IEditorBase.md).[hitRadius](IEditorBase.md#hitradius)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:304](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/display/ILeaf.ts#L304)

___

### button

• `Optional` **button**: `boolean`

#### Inherited from

[IEditorBase](IEditorBase.md).[button](IEditorBase.md#button)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:306](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/display/ILeaf.ts#L306)

___

### cursor

• `Optional` **cursor**: [`ICursorType`](../modules.md#icursortype) \| [`ICursorType`](../modules.md#icursortype)[]

#### Inherited from

[IEditorBase](IEditorBase.md).[cursor](IEditorBase.md#cursor)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:307](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/display/ILeaf.ts#L307)

___

### motionPath

• `Optional` **motionPath**: `boolean`

#### Inherited from

[IEditorBase](IEditorBase.md).[motionPath](IEditorBase.md#motionpath)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:309](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/display/ILeaf.ts#L309)

___

### motionPrecision

• `Optional` **motionPrecision**: `number`

#### Inherited from

[IEditorBase](IEditorBase.md).[motionPrecision](IEditorBase.md#motionprecision)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:310](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/display/ILeaf.ts#L310)

___

### motion

• `Optional` **motion**: `number` \| [`IUnitData`](IUnitData.md)

#### Inherited from

[IEditorBase](IEditorBase.md).[motion](IEditorBase.md#motion)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:312](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/display/ILeaf.ts#L312)

___

### motionRotation

• `Optional` **motionRotation**: `number` \| `boolean`

#### Inherited from

[IEditorBase](IEditorBase.md).[motionRotation](IEditorBase.md#motionrotation)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:313](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/display/ILeaf.ts#L313)

___

### normalStyle

• `Optional` **normalStyle**: [`IObject`](IObject.md)

#### Inherited from

[IEditorBase](IEditorBase.md).[normalStyle](IEditorBase.md#normalstyle)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:315](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/display/ILeaf.ts#L315)

___

### event

• `Optional` **event**: [`IEventParamsMap`](IEventParamsMap.md)

#### Inherited from

[IEditorBase](IEditorBase.md).[event](IEditorBase.md#event)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:317](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/display/ILeaf.ts#L317)

___

### data

• `Optional` **data**: [`IObject`](IObject.md)

#### Inherited from

[IEditorBase](IEditorBase.md).[data](IEditorBase.md#data)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:320](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/display/ILeaf.ts#L320)

___

### tag

• **tag**: `string`

#### Inherited from

[IEditorBase](IEditorBase.md).[tag](IEditorBase.md#tag)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:467](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/display/ILeaf.ts#L467)

___

### \_\_tag

• `Readonly` **\_\_tag**: `string`

#### Inherited from

[IEditorBase](IEditorBase.md).[__tag](IEditorBase.md#__tag)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:468](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/display/ILeaf.ts#L468)

___

### innerName

• `Readonly` **innerName**: `string`

#### Inherited from

[IEditorBase](IEditorBase.md).[innerName](IEditorBase.md#innername)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:469](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/display/ILeaf.ts#L469)

___

### \_\_DataProcessor

• `Readonly` **\_\_DataProcessor**: [`IObject`](IObject.md)

#### Inherited from

[IEditorBase](IEditorBase.md).[__DataProcessor](IEditorBase.md#__dataprocessor)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:471](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/display/ILeaf.ts#L471)

___

### \_\_LayoutProcessor

• `Readonly` **\_\_LayoutProcessor**: [`IObject`](IObject.md)

#### Inherited from

[IEditorBase](IEditorBase.md).[__LayoutProcessor](IEditorBase.md#__layoutprocessor)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:472](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/display/ILeaf.ts#L472)

___

### leaferIsCreated

• `Readonly` **leaferIsCreated**: `boolean`

#### Inherited from

[IEditorBase](IEditorBase.md).[leaferIsCreated](IEditorBase.md#leaferiscreated)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:479](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/display/ILeaf.ts#L479)

___

### leaferIsReady

• `Readonly` **leaferIsReady**: `boolean`

#### Inherited from

[IEditorBase](IEditorBase.md).[leaferIsReady](IEditorBase.md#leaferisready)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:480](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/display/ILeaf.ts#L480)

___

### isApp

• `Optional` `Readonly` **isApp**: `boolean`

#### Inherited from

[IEditorBase](IEditorBase.md).[isApp](IEditorBase.md#isapp)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:482](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/display/ILeaf.ts#L482)

___

### isLeafer

• `Optional` `Readonly` **isLeafer**: `boolean`

#### Inherited from

[IEditorBase](IEditorBase.md).[isLeafer](IEditorBase.md#isleafer)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:483](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/display/ILeaf.ts#L483)

___

### isBranch

• `Optional` `Readonly` **isBranch**: `boolean`

#### Inherited from

[IEditorBase](IEditorBase.md).[isBranch](IEditorBase.md#isbranch)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:484](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/display/ILeaf.ts#L484)

___

### isBranchLeaf

• `Optional` `Readonly` **isBranchLeaf**: `boolean`

#### Inherited from

[IEditorBase](IEditorBase.md).[isBranchLeaf](IEditorBase.md#isbranchleaf)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:485](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/display/ILeaf.ts#L485)

___

### isOutside

• `Optional` `Readonly` **isOutside**: `boolean`

#### Inherited from

[IEditorBase](IEditorBase.md).[isOutside](IEditorBase.md#isoutside)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:486](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/display/ILeaf.ts#L486)

___

### skipJSON

• `Optional` **skipJSON**: `boolean`

#### Inherited from

[IEditorBase](IEditorBase.md).[skipJSON](IEditorBase.md#skipjson)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:493](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/display/ILeaf.ts#L493)

___

### syncEventer

• `Optional` **syncEventer**: [`ILeaf`](ILeaf.md)

#### Inherited from

[IEditorBase](IEditorBase.md).[syncEventer](IEditorBase.md#synceventer)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:494](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/display/ILeaf.ts#L494)

___

### lockNormalStyle

• `Optional` **lockNormalStyle**: `boolean`

#### Inherited from

[IEditorBase](IEditorBase.md).[lockNormalStyle](IEditorBase.md#locknormalstyle)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:495](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/display/ILeaf.ts#L495)

___

### \_\_layout

• **\_\_layout**: [`ILeafLayout`](ILeafLayout.md)

#### Inherited from

[IEditorBase](IEditorBase.md).[__layout](IEditorBase.md#__layout)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:497](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/display/ILeaf.ts#L497)

___

### \_\_world

• **\_\_world**: [`IMatrixWithBoundsScaleData`](IMatrixWithBoundsScaleData.md)

#### Inherited from

[IEditorBase](IEditorBase.md).[__world](IEditorBase.md#__world)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:499](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/display/ILeaf.ts#L499)

___

### \_\_local

• `Optional` **\_\_local**: [`IMatrixWithBoundsData`](IMatrixWithBoundsData.md)

#### Inherited from

[IEditorBase](IEditorBase.md).[__local](IEditorBase.md#__local)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:500](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/display/ILeaf.ts#L500)

___

### \_\_nowWorld

• `Optional` **\_\_nowWorld**: [`IMatrixWithBoundsScaleData`](IMatrixWithBoundsScaleData.md)

#### Inherited from

[IEditorBase](IEditorBase.md).[__nowWorld](IEditorBase.md#__nowworld)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:502](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/display/ILeaf.ts#L502)

___

### \_\_cameraWorld

• `Optional` **\_\_cameraWorld**: [`IMatrixWithBoundsScaleData`](IMatrixWithBoundsScaleData.md)

#### Inherited from

[IEditorBase](IEditorBase.md).[__cameraWorld](IEditorBase.md#__cameraworld)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:503](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/display/ILeaf.ts#L503)

___

### \_\_nowWorldShapeBounds

• `Optional` **\_\_nowWorldShapeBounds**: [`IBoundsData`](IBoundsData.md)

#### Inherited from

[IEditorBase](IEditorBase.md).[__nowWorldShapeBounds](IEditorBase.md#__nowworldshapebounds)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:505](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/display/ILeaf.ts#L505)

___

### \_\_localMatrix

• `Readonly` **\_\_localMatrix**: [`IMatrixData`](IMatrixData.md)

#### Inherited from

[IEditorBase](IEditorBase.md).[__localMatrix](IEditorBase.md#__localmatrix)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:507](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/display/ILeaf.ts#L507)

___

### \_\_localBoxBounds

• `Readonly` **\_\_localBoxBounds**: [`IBoundsData`](IBoundsData.md)

#### Inherited from

[IEditorBase](IEditorBase.md).[__localBoxBounds](IEditorBase.md#__localboxbounds)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:508](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/display/ILeaf.ts#L508)

___

### \_\_worldOpacity

• **\_\_worldOpacity**: `number`

#### Inherited from

[IEditorBase](IEditorBase.md).[__worldOpacity](IEditorBase.md#__worldopacity)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:510](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/display/ILeaf.ts#L510)

___

### worldTransform

• `Readonly` **worldTransform**: [`IMatrixWithScaleData`](IMatrixWithScaleData.md)

#### Inherited from

[IEditorBase](IEditorBase.md).[worldTransform](IEditorBase.md#worldtransform)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:512](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/display/ILeaf.ts#L512)

___

### localTransform

• `Readonly` **localTransform**: [`IMatrixData`](IMatrixData.md)

#### Inherited from

[IEditorBase](IEditorBase.md).[localTransform](IEditorBase.md#localtransform)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:513](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/display/ILeaf.ts#L513)

___

### \_\_scrollWorld

• `Optional` **\_\_scrollWorld**: [`IMatrixWithBoundsScaleData`](IMatrixWithBoundsScaleData.md)

#### Inherited from

[IEditorBase](IEditorBase.md).[__scrollWorld](IEditorBase.md#__scrollworld)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:515](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/display/ILeaf.ts#L515)

___

### scrollWorldTransform

• `Readonly` **scrollWorldTransform**: [`IMatrixWithScaleData`](IMatrixWithScaleData.md)

#### Inherited from

[IEditorBase](IEditorBase.md).[scrollWorldTransform](IEditorBase.md#scrollworldtransform)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:516](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/display/ILeaf.ts#L516)

___

### boxBounds

• `Readonly` **boxBounds**: [`IBoundsData`](IBoundsData.md)

#### Inherited from

[IEditorBase](IEditorBase.md).[boxBounds](IEditorBase.md#boxbounds)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:518](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/display/ILeaf.ts#L518)

___

### renderBounds

• `Readonly` **renderBounds**: [`IBoundsData`](IBoundsData.md)

#### Inherited from

[IEditorBase](IEditorBase.md).[renderBounds](IEditorBase.md#renderbounds)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:519](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/display/ILeaf.ts#L519)

___

### worldBoxBounds

• `Readonly` **worldBoxBounds**: [`IBoundsData`](IBoundsData.md)

#### Inherited from

[IEditorBase](IEditorBase.md).[worldBoxBounds](IEditorBase.md#worldboxbounds)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:520](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/display/ILeaf.ts#L520)

___

### worldStrokeBounds

• `Readonly` **worldStrokeBounds**: [`IBoundsData`](IBoundsData.md)

#### Inherited from

[IEditorBase](IEditorBase.md).[worldStrokeBounds](IEditorBase.md#worldstrokebounds)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:521](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/display/ILeaf.ts#L521)

___

### worldRenderBounds

• `Readonly` **worldRenderBounds**: [`IBoundsData`](IBoundsData.md)

#### Inherited from

[IEditorBase](IEditorBase.md).[worldRenderBounds](IEditorBase.md#worldrenderbounds)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:522](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/display/ILeaf.ts#L522)

___

### worldOpacity

• `Readonly` **worldOpacity**: `number`

#### Inherited from

[IEditorBase](IEditorBase.md).[worldOpacity](IEditorBase.md#worldopacity)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:524](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/display/ILeaf.ts#L524)

___

### \_\_level

• **\_\_level**: `number`

#### Inherited from

[IEditorBase](IEditorBase.md).[__level](IEditorBase.md#__level)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:526](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/display/ILeaf.ts#L526)

___

### \_\_tempNumber

• `Optional` **\_\_tempNumber**: `number`

#### Inherited from

[IEditorBase](IEditorBase.md).[__tempNumber](IEditorBase.md#__tempnumber)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:527](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/display/ILeaf.ts#L527)

___

### \_\_worldFlipped

• `Readonly` **\_\_worldFlipped**: `boolean`

#### Inherited from

[IEditorBase](IEditorBase.md).[__worldFlipped](IEditorBase.md#__worldflipped)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:529](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/display/ILeaf.ts#L529)

___

### \_\_hasAutoLayout

• `Optional` **\_\_hasAutoLayout**: `boolean`

#### Inherited from

[IEditorBase](IEditorBase.md).[__hasAutoLayout](IEditorBase.md#__hasautolayout)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:534](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/display/ILeaf.ts#L534)

___

### \_\_hasMotionPath

• `Optional` **\_\_hasMotionPath**: `boolean`

#### Inherited from

[IEditorBase](IEditorBase.md).[__hasMotionPath](IEditorBase.md#__hasmotionpath)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:535](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/display/ILeaf.ts#L535)

___

### \_\_hasComplex

• `Optional` **\_\_hasComplex**: `boolean`

#### Inherited from

[IEditorBase](IEditorBase.md).[__hasComplex](IEditorBase.md#__hascomplex)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:536](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/display/ILeaf.ts#L536)

___

### \_\_hasMask

• `Optional` **\_\_hasMask**: `boolean`

#### Inherited from

[IEditorBase](IEditorBase.md).[__hasMask](IEditorBase.md#__hasmask)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:538](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/display/ILeaf.ts#L538)

___

### \_\_hasEraser

• `Optional` **\_\_hasEraser**: `boolean`

#### Inherited from

[IEditorBase](IEditorBase.md).[__hasEraser](IEditorBase.md#__haseraser)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:539](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/display/ILeaf.ts#L539)

___

### \_\_hitCanvas

• `Optional` **\_\_hitCanvas**: [`IHitCanvas`](IHitCanvas.md)

#### Inherited from

[IEditorBase](IEditorBase.md).[__hitCanvas](IEditorBase.md#__hitcanvas)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:540](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/display/ILeaf.ts#L540)

___

### \_\_flowBounds

• `Optional` **\_\_flowBounds**: [`IBoundsData`](IBoundsData.md)

#### Inherited from

[IEditorBase](IEditorBase.md).[__flowBounds](IEditorBase.md#__flowbounds)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:542](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/display/ILeaf.ts#L542)

___

### \_\_widthGrow

• `Optional` **\_\_widthGrow**: `number`

#### Inherited from

[IEditorBase](IEditorBase.md).[__widthGrow](IEditorBase.md#__widthgrow)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:543](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/display/ILeaf.ts#L543)

___

### \_\_heightGrow

• `Optional` **\_\_heightGrow**: `number`

#### Inherited from

[IEditorBase](IEditorBase.md).[__heightGrow](IEditorBase.md#__heightgrow)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:544](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/display/ILeaf.ts#L544)

___

### \_\_hasGrow

• `Optional` **\_\_hasGrow**: `boolean`

#### Inherited from

[IEditorBase](IEditorBase.md).[__hasGrow](IEditorBase.md#__hasgrow)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:545](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/display/ILeaf.ts#L545)

___

### \_\_onlyHitMask

• `Readonly` **\_\_onlyHitMask**: `boolean`

#### Inherited from

[IEditorBase](IEditorBase.md).[__onlyHitMask](IEditorBase.md#__onlyhitmask)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:547](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/display/ILeaf.ts#L547)

___

### \_\_ignoreHitWorld

• `Readonly` **\_\_ignoreHitWorld**: `boolean`

#### Inherited from

[IEditorBase](IEditorBase.md).[__ignoreHitWorld](IEditorBase.md#__ignorehitworld)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:548](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/display/ILeaf.ts#L548)

___

### \_\_inLazyBounds

• `Readonly` **\_\_inLazyBounds**: `boolean`

#### Inherited from

[IEditorBase](IEditorBase.md).[__inLazyBounds](IEditorBase.md#__inlazybounds)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:549](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/display/ILeaf.ts#L549)

___

### pathInputed

• `Readonly` **pathInputed**: `boolean`

#### Inherited from

[IEditorBase](IEditorBase.md).[pathInputed](IEditorBase.md#pathinputed)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:551](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/display/ILeaf.ts#L551)

___

### isAutoWidth

• `Optional` `Readonly` **isAutoWidth**: `boolean`

#### Inherited from

[IEditorBase](IEditorBase.md).[isAutoWidth](IEditorBase.md#isautowidth)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:553](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/display/ILeaf.ts#L553)

___

### isAutoHeight

• `Optional` `Readonly` **isAutoHeight**: `boolean`

#### Inherited from

[IEditorBase](IEditorBase.md).[isAutoHeight](IEditorBase.md#isautoheight)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:554](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/display/ILeaf.ts#L554)

___

### destroyed

• **destroyed**: `boolean`

#### Inherited from

[IEditorBase](IEditorBase.md).[destroyed](IEditorBase.md#destroyed)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:556](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/display/ILeaf.ts#L556)

___

### topChildren

• `Optional` **topChildren**: [`ILeaf`](ILeaf.md)[]

#### Inherited from

[IEditorBase](IEditorBase.md).[topChildren](IEditorBase.md#topchildren)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:733](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/display/ILeaf.ts#L733)

___

### innerId

• `Readonly` **innerId**: `number`

#### Inherited from

[IEditorBase](IEditorBase.md).[innerId](IEditorBase.md#innerid)

#### Defined in

[src/leafer/packages/interface/src/event/IEventer.ts:41](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/event/IEventer.ts#L41)

___

### \_\_captureMap

• `Optional` **\_\_captureMap**: [`IEventListenerMap`](IEventListenerMap.md)

#### Inherited from

[IEditorBase](IEditorBase.md).[__captureMap](IEditorBase.md#__capturemap)

#### Defined in

[src/leafer/packages/interface/src/event/IEventer.ts:42](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/event/IEventer.ts#L42)

___

### \_\_bubbleMap

• `Optional` **\_\_bubbleMap**: [`IEventListenerMap`](IEventListenerMap.md)

#### Inherited from

[IEditorBase](IEditorBase.md).[__bubbleMap](IEditorBase.md#__bubblemap)

#### Defined in

[src/leafer/packages/interface/src/event/IEventer.ts:43](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/event/IEventer.ts#L43)

___

### \_\_hasLocalEvent

• `Optional` **\_\_hasLocalEvent**: `boolean`

#### Inherited from

[IEditorBase](IEditorBase.md).[__hasLocalEvent](IEditorBase.md#__haslocalevent)

#### Defined in

[src/leafer/packages/interface/src/event/IEventer.ts:44](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/event/IEventer.ts#L44)

___

### \_\_hasWorldEvent

• `Optional` **\_\_hasWorldEvent**: `boolean`

#### Inherited from

[IEditorBase](IEditorBase.md).[__hasWorldEvent](IEditorBase.md#__hasworldevent)

#### Defined in

[src/leafer/packages/interface/src/event/IEventer.ts:45](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/event/IEventer.ts#L45)

___

### dragHoverExclude

• **dragHoverExclude**: [`ILeaf`](ILeaf.md)[]

#### Inherited from

[IEditorBase](IEditorBase.md).[dragHoverExclude](IEditorBase.md#draghoverexclude)

#### Defined in

[src/leafer/packages/interface/src/selector/ISelector.ts:46](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/selector/ISelector.ts#L46)

___

### cornerRadius

• `Optional` **cornerRadius**: `string` \| [`IFourNumber`](../modules.md#ifournumber)

#### Inherited from

[IEditorBase](IEditorBase.md).[cornerRadius](IEditorBase.md#cornerradius)

#### Defined in

[src/ui/packages/interface/src/ICommonAttr.ts:9](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/interface/src/ICommonAttr.ts#L9)

___

### cornerSmoothing

• `Optional` **cornerSmoothing**: `number`

#### Inherited from

[IEditorBase](IEditorBase.md).[cornerSmoothing](IEditorBase.md#cornersmoothing)

#### Defined in

[src/ui/packages/interface/src/ICommonAttr.ts:10](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/interface/src/ICommonAttr.ts#L10)

___

### fill

• `Optional` **fill**: [`IFill`](../modules.md#ifill)

#### Inherited from

[IEditorBase](IEditorBase.md).[fill](IEditorBase.md#fill)

#### Defined in

[src/ui/packages/interface/src/ICommonAttr.ts:23](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/interface/src/ICommonAttr.ts#L23)

___

### stroke

• `Optional` **stroke**: [`IStroke`](../modules.md#istroke)

#### Inherited from

[IEditorBase](IEditorBase.md).[stroke](IEditorBase.md#stroke)

#### Defined in

[src/ui/packages/interface/src/ICommonAttr.ts:40](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/interface/src/ICommonAttr.ts#L40)

___

### startArrow

• `Optional` **startArrow**: [`IArrowStyle`](../modules.md#iarrowstyle)

#### Inherited from

[IEditorBase](IEditorBase.md).[startArrow](IEditorBase.md#startarrow)

#### Defined in

[src/ui/packages/interface/src/ICommonAttr.ts:42](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/interface/src/ICommonAttr.ts#L42)

___

### endArrow

• `Optional` **endArrow**: [`IArrowStyle`](../modules.md#iarrowstyle)

#### Inherited from

[IEditorBase](IEditorBase.md).[endArrow](IEditorBase.md#endarrow)

#### Defined in

[src/ui/packages/interface/src/ICommonAttr.ts:43](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/interface/src/ICommonAttr.ts#L43)

___

### strokeAlign

• `Optional` **strokeAlign**: [`IStrokeAlign`](../modules.md#istrokealign)

#### Inherited from

[IEditorBase](IEditorBase.md).[strokeAlign](IEditorBase.md#strokealign)

#### Defined in

[src/ui/packages/interface/src/ICommonAttr.ts:54](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/interface/src/ICommonAttr.ts#L54)

___

### strokeWidth

• `Optional` **strokeWidth**: `string` \| [`IFourNumber`](../modules.md#ifournumber)

#### Inherited from

[IEditorBase](IEditorBase.md).[strokeWidth](IEditorBase.md#strokewidth)

#### Defined in

[src/ui/packages/interface/src/ICommonAttr.ts:55](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/interface/src/ICommonAttr.ts#L55)

___

### strokeScaleFixed

• `Optional` **strokeScaleFixed**: [`IScaleFixed`](../modules.md#iscalefixed)

#### Inherited from

[IEditorBase](IEditorBase.md).[strokeScaleFixed](IEditorBase.md#strokescalefixed)

#### Defined in

[src/ui/packages/interface/src/ICommonAttr.ts:56](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/interface/src/ICommonAttr.ts#L56)

___

### strokeCap

• `Optional` **strokeCap**: [`IStrokeCap`](../modules.md#istrokecap)

#### Inherited from

[IEditorBase](IEditorBase.md).[strokeCap](IEditorBase.md#strokecap)

#### Defined in

[src/ui/packages/interface/src/ICommonAttr.ts:57](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/interface/src/ICommonAttr.ts#L57)

___

### strokeJoin

• `Optional` **strokeJoin**: [`IStrokeJoin`](../modules.md#istrokejoin)

#### Inherited from

[IEditorBase](IEditorBase.md).[strokeJoin](IEditorBase.md#strokejoin)

#### Defined in

[src/ui/packages/interface/src/ICommonAttr.ts:58](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/interface/src/ICommonAttr.ts#L58)

___

### dashPattern

• `Optional` **dashPattern**: `string` \| `number`[]

#### Inherited from

[IEditorBase](IEditorBase.md).[dashPattern](IEditorBase.md#dashpattern)

#### Defined in

[src/ui/packages/interface/src/ICommonAttr.ts:59](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/interface/src/ICommonAttr.ts#L59)

___

### dashOffset

• `Optional` **dashOffset**: `number`

#### Inherited from

[IEditorBase](IEditorBase.md).[dashOffset](IEditorBase.md#dashoffset)

#### Defined in

[src/ui/packages/interface/src/ICommonAttr.ts:60](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/interface/src/ICommonAttr.ts#L60)

___

### miterLimit

• `Optional` **miterLimit**: `number`

#### Inherited from

[IEditorBase](IEditorBase.md).[miterLimit](IEditorBase.md#miterlimit)

#### Defined in

[src/ui/packages/interface/src/ICommonAttr.ts:61](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/interface/src/ICommonAttr.ts#L61)

___

### shadow

• `Optional` **shadow**: `string` \| [`IShadowEffect`](IShadowEffect.md) \| [`IShadowEffect`](IShadowEffect.md)[]

#### Inherited from

[IEditorBase](IEditorBase.md).[shadow](IEditorBase.md#shadow)

#### Defined in

[src/ui/packages/interface/src/ICommonAttr.ts:150](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/interface/src/ICommonAttr.ts#L150)

___

### innerShadow

• `Optional` **innerShadow**: `string` \| [`IShadowEffect`](IShadowEffect.md) \| [`IShadowEffect`](IShadowEffect.md)[]

#### Inherited from

[IEditorBase](IEditorBase.md).[innerShadow](IEditorBase.md#innershadow)

#### Defined in

[src/ui/packages/interface/src/ICommonAttr.ts:151](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/interface/src/ICommonAttr.ts#L151)

___

### blur

• `Optional` **blur**: `number` \| [`IBlurEffect`](IBlurEffect.md)

#### Inherited from

[IEditorBase](IEditorBase.md).[blur](IEditorBase.md#blur)

#### Defined in

[src/ui/packages/interface/src/ICommonAttr.ts:152](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/interface/src/ICommonAttr.ts#L152)

___

### backgroundBlur

• `Optional` **backgroundBlur**: `number` \| [`IBlurEffect`](IBlurEffect.md)

#### Inherited from

[IEditorBase](IEditorBase.md).[backgroundBlur](IEditorBase.md#backgroundblur)

#### Defined in

[src/ui/packages/interface/src/ICommonAttr.ts:153](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/interface/src/ICommonAttr.ts#L153)

___

### grayscale

• `Optional` **grayscale**: `number` \| [`IGrayscaleEffect`](IGrayscaleEffect.md)

#### Inherited from

[IEditorBase](IEditorBase.md).[grayscale](IEditorBase.md#grayscale)

#### Defined in

[src/ui/packages/interface/src/ICommonAttr.ts:154](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/interface/src/ICommonAttr.ts#L154)

___

### \_\_

• **\_\_**: [`IGroupData`](IGroupData.md)

#### Inherited from

[IEditorBase](IEditorBase.md).[__](IEditorBase.md#__)

#### Defined in

[src/ui/packages/interface/src/IUI.ts:466](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/interface/src/IUI.ts#L466)

___

### children

• **children**: [`IUI`](IUI.md)[]

#### Inherited from

[IEditorBase](IEditorBase.md).[children](IEditorBase.md#children)

#### Defined in

[src/ui/packages/interface/src/IUI.ts:467](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/interface/src/IUI.ts#L467)

___

### childlessJSON

• `Optional` **childlessJSON**: `boolean`

#### Inherited from

[IEditorBase](IEditorBase.md).[childlessJSON](IEditorBase.md#childlessjson)

#### Defined in

[src/ui/packages/interface/src/IUI.ts:468](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/interface/src/IUI.ts#L468)

___

### app

• `Readonly` **app**: [`ILeafer`](ILeafer.md)

#### Inherited from

[IEditorBase](IEditorBase.md).[app](IEditorBase.md#app)

#### Defined in

[src/ui/packages/interface/src/IUI.ts:487](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/interface/src/IUI.ts#L487)

___

### leafer

• `Optional` **leafer**: [`ILeafer`](ILeafer.md)

#### Inherited from

[IEditorBase](IEditorBase.md).[leafer](IEditorBase.md#leafer)

#### Defined in

[src/ui/packages/interface/src/IUI.ts:488](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/interface/src/IUI.ts#L488)

___

### parent

• `Optional` **parent**: [`IGroup`](IGroup.md)

#### Inherited from

[IEditorBase](IEditorBase.md).[parent](IEditorBase.md#parent)

#### Defined in

[src/ui/packages/interface/src/IUI.ts:489](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/interface/src/IUI.ts#L489)

___

### zoomLayer

• `Optional` **zoomLayer**: [`IGroup`](IGroup.md)

#### Inherited from

[IEditorBase](IEditorBase.md).[zoomLayer](IEditorBase.md#zoomlayer)

#### Defined in

[src/ui/packages/interface/src/IUI.ts:490](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/interface/src/IUI.ts#L490)

___

### isFrame

• `Optional` `Readonly` **isFrame**: `boolean`

#### Inherited from

[IEditorBase](IEditorBase.md).[isFrame](IEditorBase.md#isframe)

#### Defined in

[src/ui/packages/interface/src/IUI.ts:491](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/interface/src/IUI.ts#L491)

___

### isOverflow

• `Optional` **isOverflow**: `boolean`

#### Inherited from

[IEditorBase](IEditorBase.md).[isOverflow](IEditorBase.md#isoverflow)

#### Defined in

[src/ui/packages/interface/src/IUI.ts:492](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/interface/src/IUI.ts#L492)

___

### useFastShadow

• `Optional` **useFastShadow**: `boolean`

#### Inherited from

[IEditorBase](IEditorBase.md).[useFastShadow](IEditorBase.md#usefastshadow)

#### Defined in

[src/ui/packages/interface/src/IUI.ts:493](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/interface/src/IUI.ts#L493)

___

### proxyData

• `Optional` **proxyData**: [`IUIInputData`](IUIInputData.md)

#### Inherited from

[IEditorBase](IEditorBase.md).[proxyData](IEditorBase.md#proxydata)

#### Defined in

[src/ui/packages/interface/src/IUI.ts:495](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/interface/src/IUI.ts#L495)

___

### \_\_proxyData

• `Optional` **\_\_proxyData**: [`IUIInputData`](IUIInputData.md)

#### Inherited from

[IEditorBase](IEditorBase.md).[__proxyData](IEditorBase.md#__proxydata)

#### Defined in

[src/ui/packages/interface/src/IUI.ts:496](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/interface/src/IUI.ts#L496)

___

### animation

• `Optional` **animation**: [`IAnimation`](../modules.md#ianimation) \| [`IAnimation`](../modules.md#ianimation)[]

#### Inherited from

[IEditorBase](IEditorBase.md).[animation](IEditorBase.md#animation)

#### Defined in

[src/ui/packages/interface/src/IUI.ts:498](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/interface/src/IUI.ts#L498)

___

### animationOut

• `Optional` **animationOut**: [`IAnimation`](../modules.md#ianimation) \| [`IAnimation`](../modules.md#ianimation)[]

#### Inherited from

[IEditorBase](IEditorBase.md).[animationOut](IEditorBase.md#animationout)

#### Defined in

[src/ui/packages/interface/src/IUI.ts:499](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/interface/src/IUI.ts#L499)

___

### startLinker

• `Optional` **startLinker**: [`ILinker`](ILinker.md)[]

#### Inherited from

[IEditorBase](IEditorBase.md).[startLinker](IEditorBase.md#startlinker)

#### Defined in

[src/ui/packages/interface/src/IUI.ts:503](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/interface/src/IUI.ts#L503)

___

### endLinker

• `Optional` **endLinker**: [`ILinker`](ILinker.md)[]

#### Inherited from

[IEditorBase](IEditorBase.md).[endLinker](IEditorBase.md#endlinker)

#### Defined in

[src/ui/packages/interface/src/IUI.ts:504](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/interface/src/IUI.ts#L504)

___

### \_\_box

• `Optional` **\_\_box**: [`IUI`](IUI.md)

#### Inherited from

[IEditorBase](IEditorBase.md).[__box](IEditorBase.md#__box)

#### Defined in

[src/ui/packages/interface/src/IUI.ts:506](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/interface/src/IUI.ts#L506)

___

### \_\_animate

• `Optional` **\_\_animate**: [`IAnimate`](IAnimate.md)

#### Inherited from

[IEditorBase](IEditorBase.md).[__animate](IEditorBase.md#__animate)

#### Defined in

[src/ui/packages/interface/src/IUI.ts:507](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/interface/src/IUI.ts#L507)

___

### pen

• `Readonly` **pen**: [`IPathCreator`](IPathCreator.md)

#### Inherited from

[IEditorBase](IEditorBase.md).[pen](IEditorBase.md#pen)

#### Defined in

[src/ui/packages/interface/src/IUI.ts:509](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/interface/src/IUI.ts#L509)

___

### transition

• `Optional` **transition**: [`ITransition`](../modules.md#itransition)

#### Inherited from

[IEditorBase](IEditorBase.md).[transition](IEditorBase.md#transition)

#### Defined in

[src/ui/packages/interface/src/IUI.ts:566](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/interface/src/IUI.ts#L566)

___

### transitionOut

• `Optional` **transitionOut**: [`ITransition`](../modules.md#itransition)

#### Inherited from

[IEditorBase](IEditorBase.md).[transitionOut](IEditorBase.md#transitionout)

#### Defined in

[src/ui/packages/interface/src/IUI.ts:567](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/interface/src/IUI.ts#L567)

___

### states

• `Optional` **states**: [`IStates`](IStates.md)

#### Inherited from

[IEditorBase](IEditorBase.md).[states](IEditorBase.md#states)

#### Defined in

[src/ui/packages/interface/src/IUI.ts:569](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/interface/src/IUI.ts#L569)

___

### state

• `Optional` **state**: `string`

#### Inherited from

[IEditorBase](IEditorBase.md).[state](IEditorBase.md#state)

#### Defined in

[src/ui/packages/interface/src/IUI.ts:570](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/interface/src/IUI.ts#L570)

___

### hoverStyle

• `Optional` **hoverStyle**: [`IStateStyle`](IStateStyle.md)

#### Inherited from

[IEditorBase](IEditorBase.md).[hoverStyle](IEditorBase.md#hoverstyle)

#### Defined in

[src/ui/packages/interface/src/IUI.ts:572](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/interface/src/IUI.ts#L572)

___

### pressStyle

• `Optional` **pressStyle**: [`IStateStyle`](IStateStyle.md)

#### Inherited from

[IEditorBase](IEditorBase.md).[pressStyle](IEditorBase.md#pressstyle)

#### Defined in

[src/ui/packages/interface/src/IUI.ts:573](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/interface/src/IUI.ts#L573)

___

### focusStyle

• `Optional` **focusStyle**: [`IStateStyle`](IStateStyle.md)

#### Inherited from

[IEditorBase](IEditorBase.md).[focusStyle](IEditorBase.md#focusstyle)

#### Defined in

[src/ui/packages/interface/src/IUI.ts:574](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/interface/src/IUI.ts#L574)

___

### selectedStyle

• `Optional` **selectedStyle**: [`IStateStyle`](IStateStyle.md)

#### Inherited from

[IEditorBase](IEditorBase.md).[selectedStyle](IEditorBase.md#selectedstyle)

#### Defined in

[src/ui/packages/interface/src/IUI.ts:575](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/interface/src/IUI.ts#L575)

___

### disabledStyle

• `Optional` **disabledStyle**: [`IStateStyle`](IStateStyle.md)

#### Inherited from

[IEditorBase](IEditorBase.md).[disabledStyle](IEditorBase.md#disabledstyle)

#### Defined in

[src/ui/packages/interface/src/IUI.ts:576](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/interface/src/IUI.ts#L576)

___

### placeholderStyle

• `Optional` **placeholderStyle**: [`IStateStyle`](IStateStyle.md)

#### Inherited from

[IEditorBase](IEditorBase.md).[placeholderStyle](IEditorBase.md#placeholderstyle)

#### Defined in

[src/ui/packages/interface/src/IUI.ts:577](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/interface/src/IUI.ts#L577)

___

### placeholderColor

• `Optional` **placeholderColor**: `string`

#### Inherited from

[IEditorBase](IEditorBase.md).[placeholderColor](IEditorBase.md#placeholdercolor)

#### Defined in

[src/ui/packages/interface/src/IUI.ts:578](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/interface/src/IUI.ts#L578)

___

### placeholderDelay

• `Optional` **placeholderDelay**: `number`

#### Inherited from

[IEditorBase](IEditorBase.md).[placeholderDelay](IEditorBase.md#placeholderdelay)

#### Defined in

[src/ui/packages/interface/src/IUI.ts:579](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/interface/src/IUI.ts#L579)

___

### editConfig

• `Optional` **editConfig**: [`IEditorConfig`](IEditorConfig.md)

#### Inherited from

[IEditorBase](IEditorBase.md).[editConfig](IEditorBase.md#editconfig)

#### Defined in

[src/ui/packages/interface/src/IUI.ts:581](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/interface/src/IUI.ts#L581)

___

### editOuter

• `Optional` **editOuter**: `string`

#### Inherited from

[IEditorBase](IEditorBase.md).[editOuter](IEditorBase.md#editouter)

#### Defined in

[src/ui/packages/interface/src/IUI.ts:582](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/interface/src/IUI.ts#L582)

___

### editInner

• `Optional` **editInner**: `string`

#### Inherited from

[IEditorBase](IEditorBase.md).[editInner](IEditorBase.md#editinner)

#### Defined in

[src/ui/packages/interface/src/IUI.ts:583](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/interface/src/IUI.ts#L583)

___

### config

• **config**: [`IEditorConfig`](IEditorConfig.md)

#### Inherited from

[IEditorBase](IEditorBase.md).[config](IEditorBase.md#config)

#### Defined in

[src/ui/packages/interface/src/editor/IEditor.ts:4](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/interface/src/editor/IEditor.ts#L4)

___

### mergeConfig

• `Readonly` **mergeConfig**: [`IEditorConfig`](IEditorConfig.md)

#### Inherited from

[IEditorBase](IEditorBase.md).[mergeConfig](IEditorBase.md#mergeconfig)

#### Defined in

[src/ui/packages/interface/src/editor/IEditor.ts:5](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/interface/src/editor/IEditor.ts#L5)

___

### mergedConfig

• `Readonly` **mergedConfig**: [`IEditorConfig`](IEditorConfig.md)

#### Inherited from

[IEditorBase](IEditorBase.md).[mergedConfig](IEditorBase.md#mergedconfig)

#### Defined in

[src/ui/packages/interface/src/editor/IEditor.ts:6](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/interface/src/editor/IEditor.ts#L6)

___

### target

• `Optional` **target**: [`IUI`](IUI.md) \| [`IUI`](IUI.md)[]

#### Inherited from

[IEditorBase](IEditorBase.md).[target](IEditorBase.md#target)

#### Defined in

[src/ui/packages/interface/src/editor/IEditor.ts:8](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/interface/src/editor/IEditor.ts#L8)

___

### hoverTarget

• `Optional` **hoverTarget**: [`IUI`](IUI.md)

#### Inherited from

[IEditorBase](IEditorBase.md).[hoverTarget](IEditorBase.md#hovertarget)

#### Defined in

[src/ui/packages/interface/src/editor/IEditor.ts:9](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/interface/src/editor/IEditor.ts#L9)

___

### dimTarget

• `Optional` **dimTarget**: [`IGroup`](IGroup.md) \| [`IGroup`](IGroup.md)[]

#### Inherited from

[IEditorBase](IEditorBase.md).[dimTarget](IEditorBase.md#dimtarget)

#### Defined in

[src/ui/packages/interface/src/editor/IEditor.ts:10](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/interface/src/editor/IEditor.ts#L10)

___

### list

• `Readonly` **list**: [`IUI`](IUI.md)[]

#### Inherited from

[IEditorBase](IEditorBase.md).[list](IEditorBase.md#list)

#### Defined in

[src/ui/packages/interface/src/editor/IEditor.ts:12](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/interface/src/editor/IEditor.ts#L12)

___

### leafList

• **leafList**: [`ILeafList`](ILeafList.md)

#### Inherited from

[IEditorBase](IEditorBase.md).[leafList](IEditorBase.md#leaflist)

#### Defined in

[src/ui/packages/interface/src/editor/IEditor.ts:13](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/interface/src/editor/IEditor.ts#L13)

___

### openedGroupList

• **openedGroupList**: [`ILeafList`](ILeafList.md)

#### Inherited from

[IEditorBase](IEditorBase.md).[openedGroupList](IEditorBase.md#openedgrouplist)

#### Defined in

[src/ui/packages/interface/src/editor/IEditor.ts:14](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/interface/src/editor/IEditor.ts#L14)

___

### editing

• `Readonly` **editing**: `boolean`

#### Inherited from

[IEditorBase](IEditorBase.md).[editing](IEditorBase.md#editing)

#### Defined in

[src/ui/packages/interface/src/editor/IEditor.ts:16](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/interface/src/editor/IEditor.ts#L16)

___

### innerEditing

• **innerEditing**: `boolean`

#### Inherited from

[IEditorBase](IEditorBase.md).[innerEditing](IEditorBase.md#innerediting)

#### Defined in

[src/ui/packages/interface/src/editor/IEditor.ts:17](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/interface/src/editor/IEditor.ts#L17)

___

### groupOpening

• `Readonly` **groupOpening**: `boolean`

#### Inherited from

[IEditorBase](IEditorBase.md).[groupOpening](IEditorBase.md#groupopening)

#### Defined in

[src/ui/packages/interface/src/editor/IEditor.ts:18](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/interface/src/editor/IEditor.ts#L18)

___

### multiple

• `Readonly` **multiple**: `boolean`

#### Inherited from

[IEditorBase](IEditorBase.md).[multiple](IEditorBase.md#multiple)

#### Defined in

[src/ui/packages/interface/src/editor/IEditor.ts:20](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/interface/src/editor/IEditor.ts#L20)

___

### single

• `Readonly` **single**: `boolean`

#### Inherited from

[IEditorBase](IEditorBase.md).[single](IEditorBase.md#single)

#### Defined in

[src/ui/packages/interface/src/editor/IEditor.ts:21](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/interface/src/editor/IEditor.ts#L21)

___

### dragPoint

• `Readonly` **dragPoint**: [`IEditPoint`](IEditPoint.md)

#### Inherited from

[IEditorBase](IEditorBase.md).[dragPoint](IEditorBase.md#dragpoint)

#### Defined in

[src/ui/packages/interface/src/editor/IEditor.ts:23](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/interface/src/editor/IEditor.ts#L23)

___

### dragging

• `Readonly` **dragging**: `boolean`

#### Inherited from

[IEditorBase](IEditorBase.md).[dragging](IEditorBase.md#dragging)

#### Defined in

[src/ui/packages/interface/src/editor/IEditor.ts:25](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/interface/src/editor/IEditor.ts#L25)

___

### gesturing

• `Readonly` **gesturing**: `boolean`

#### Inherited from

[IEditorBase](IEditorBase.md).[gesturing](IEditorBase.md#gesturing)

#### Defined in

[src/ui/packages/interface/src/editor/IEditor.ts:26](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/interface/src/editor/IEditor.ts#L26)

___

### moving

• `Readonly` **moving**: `boolean`

#### Inherited from

[IEditorBase](IEditorBase.md).[moving](IEditorBase.md#moving)

#### Defined in

[src/ui/packages/interface/src/editor/IEditor.ts:28](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/interface/src/editor/IEditor.ts#L28)

___

### resizing

• `Readonly` **resizing**: `boolean`

#### Inherited from

[IEditorBase](IEditorBase.md).[resizing](IEditorBase.md#resizing)

#### Defined in

[src/ui/packages/interface/src/editor/IEditor.ts:29](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/interface/src/editor/IEditor.ts#L29)

___

### rotating

• `Readonly` **rotating**: `boolean`

#### Inherited from

[IEditorBase](IEditorBase.md).[rotating](IEditorBase.md#rotating)

#### Defined in

[src/ui/packages/interface/src/editor/IEditor.ts:30](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/interface/src/editor/IEditor.ts#L30)

___

### skewing

• `Readonly` **skewing**: `boolean`

#### Inherited from

[IEditorBase](IEditorBase.md).[skewing](IEditorBase.md#skewing)

#### Defined in

[src/ui/packages/interface/src/editor/IEditor.ts:31](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/interface/src/editor/IEditor.ts#L31)

___

### element

• `Optional` **element**: [`IUI`](IUI.md)

#### Inherited from

[IEditorBase](IEditorBase.md).[element](IEditorBase.md#element)

#### Defined in

[src/ui/packages/interface/src/editor/IEditor.ts:33](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/interface/src/editor/IEditor.ts#L33)

___

### buttons

• **buttons**: [`IGroup`](IGroup.md)

#### Inherited from

[IEditorBase](IEditorBase.md).[buttons](IEditorBase.md#buttons)

#### Defined in

[src/ui/packages/interface/src/editor/IEditor.ts:34](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/interface/src/editor/IEditor.ts#L34)

___

### editMask

• **editMask**: [`IUI`](IUI.md)

#### Inherited from

[IEditorBase](IEditorBase.md).[editMask](IEditorBase.md#editmask)

#### Defined in

[src/ui/packages/interface/src/editor/IEditor.ts:40](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/interface/src/editor/IEditor.ts#L40)

___

### hasDimOthers

• `Optional` **hasDimOthers**: `boolean`

#### Inherited from

[IEditorBase](IEditorBase.md).[hasDimOthers](IEditorBase.md#hasdimothers)

#### Defined in

[src/ui/packages/interface/src/editor/IEditor.ts:42](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/interface/src/editor/IEditor.ts#L42)

___

### targetLeafer

• `Readonly` **targetLeafer**: [`ILeafer`](ILeafer.md)

#### Inherited from

[IEditorBase](IEditorBase.md).[targetLeafer](IEditorBase.md#targetleafer)

#### Defined in

[src/ui/packages/interface/src/editor/IEditor.ts:44](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/interface/src/editor/IEditor.ts#L44)

## Methods

### getEditTool

▸ **getEditTool**(`name`): [`IEditTool`](IEditTool.md)

#### Parameters

| Name   | Type     |
| :----- | :------- |
| `name` | `string` |

#### Returns

[`IEditTool`](IEditTool.md)

#### Overrides

[IEditorBase](IEditorBase.md).[getEditTool](IEditorBase.md#getedittool)

#### Defined in

[src/in/packages/interface/src/editor/IEditor.ts:18](https://github.com/leaferjs/leafer-in/blob/d97f6888a45310d40717e43f47796d4f7d0dce1d/packages/interface/src/editor/IEditor.ts#L18)

___

### getInnerEditor

▸ **getInnerEditor**(`name`): [`IInnerEditor`](IInnerEditor.md)

#### Parameters

| Name   | Type     |
| :----- | :------- |
| `name` | `string` |

#### Returns

[`IInnerEditor`](IInnerEditor.md)

#### Overrides

[IEditorBase](IEditorBase.md).[getInnerEditor](IEditorBase.md#getinnereditor)

#### Defined in

[src/in/packages/interface/src/editor/IEditor.ts:19](https://github.com/leaferjs/leafer-in/blob/d97f6888a45310d40717e43f47796d4f7d0dce1d/packages/interface/src/editor/IEditor.ts#L19)

___

### checkOpenedGroups

▸ **checkOpenedGroups**(): `void`

#### Returns

`void`

#### Defined in

[src/in/packages/interface/src/editor/IEditor.ts:21](https://github.com/leaferjs/leafer-in/blob/d97f6888a45310d40717e43f47796d4f7d0dce1d/packages/interface/src/editor/IEditor.ts#L21)

___

### listenTargetEvents

▸ **listenTargetEvents**(): `void`

#### Returns

`void`

#### Defined in

[src/in/packages/interface/src/editor/IEditor.ts:23](https://github.com/leaferjs/leafer-in/blob/d97f6888a45310d40717e43f47796d4f7d0dce1d/packages/interface/src/editor/IEditor.ts#L23)

___

### removeTargetEvents

▸ **removeTargetEvents**(): `void`

#### Returns

`void`

#### Defined in

[src/in/packages/interface/src/editor/IEditor.ts:24](https://github.com/leaferjs/leafer-in/blob/d97f6888a45310d40717e43f47796d4f7d0dce1d/packages/interface/src/editor/IEditor.ts#L24)

___

### resetCustom

▸ **resetCustom**(): `void`

#### Returns

`void`

#### Inherited from

[IEditorBase](IEditorBase.md).[resetCustom](IEditorBase.md#resetcustom)

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

[IEditorBase](IEditorBase.md).[waitParent](IEditorBase.md#waitparent)

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

[IEditorBase](IEditorBase.md).[waitLeafer](IEditorBase.md#waitleafer)

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

[IEditorBase](IEditorBase.md).[nextRender](IEditorBase.md#nextrender)

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

[IEditorBase](IEditorBase.md).[removeNextRender](IEditorBase.md#removenextrender)

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

[IEditorBase](IEditorBase.md).[__bindLeafer](IEditorBase.md#__bindleafer)

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

[IEditorBase](IEditorBase.md).[setAttr](IEditorBase.md#setattr)

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

[IEditorBase](IEditorBase.md).[getAttr](IEditorBase.md#getattr)

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

[IEditorBase](IEditorBase.md).[getComputedAttr](IEditorBase.md#getcomputedattr)

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

[IEditorBase](IEditorBase.md).[toString](IEditorBase.md#tostring)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:576](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/display/ILeaf.ts#L576)

___

### toSVG

▸ **toSVG**(): `string`

#### Returns

`string`

#### Inherited from

[IEditorBase](IEditorBase.md).[toSVG](IEditorBase.md#tosvg)

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

[IEditorBase](IEditorBase.md).[__SVG](IEditorBase.md#__svg)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:578](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/display/ILeaf.ts#L578)

___

### toHTML

▸ **toHTML**(): `string`

#### Returns

`string`

#### Inherited from

[IEditorBase](IEditorBase.md).[toHTML](IEditorBase.md#tohtml)

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

[IEditorBase](IEditorBase.md).[__setAttr](IEditorBase.md#__setattr)

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

[IEditorBase](IEditorBase.md).[__getAttr](IEditorBase.md#__getattr)

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

[IEditorBase](IEditorBase.md).[setProxyAttr](IEditorBase.md#setproxyattr)

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

[IEditorBase](IEditorBase.md).[getProxyAttr](IEditorBase.md#getproxyattr)

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

[IEditorBase](IEditorBase.md).[focus](IEditorBase.md#focus)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:596](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/display/ILeaf.ts#L596)

___

### updateState

▸ **updateState**(): `void`

#### Returns

`void`

#### Inherited from

[IEditorBase](IEditorBase.md).[updateState](IEditorBase.md#updatestate)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:598](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/display/ILeaf.ts#L598)

___

### updateLayout

▸ **updateLayout**(): `void`

#### Returns

`void`

#### Inherited from

[IEditorBase](IEditorBase.md).[updateLayout](IEditorBase.md#updatelayout)

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

[IEditorBase](IEditorBase.md).[forceUpdate](IEditorBase.md#forceupdate)

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

[IEditorBase](IEditorBase.md).[forceRender](IEditorBase.md#forcerender)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:601](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/display/ILeaf.ts#L601)

___

### \_\_extraUpdate

▸ **__extraUpdate**(): `void`

#### Returns

`void`

#### Inherited from

[IEditorBase](IEditorBase.md).[__extraUpdate](IEditorBase.md#__extraupdate)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:603](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/display/ILeaf.ts#L603)

___

### \_\_updateWorldMatrix

▸ **__updateWorldMatrix**(): `void`

#### Returns

`void`

#### Inherited from

[IEditorBase](IEditorBase.md).[__updateWorldMatrix](IEditorBase.md#__updateworldmatrix)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:606](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/display/ILeaf.ts#L606)

___

### \_\_updateLocalMatrix

▸ **__updateLocalMatrix**(): `void`

#### Returns

`void`

#### Inherited from

[IEditorBase](IEditorBase.md).[__updateLocalMatrix](IEditorBase.md#__updatelocalmatrix)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:607](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/display/ILeaf.ts#L607)

___

### \_\_updateWorldBounds

▸ **__updateWorldBounds**(): `void`

#### Returns

`void`

#### Inherited from

[IEditorBase](IEditorBase.md).[__updateWorldBounds](IEditorBase.md#__updateworldbounds)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:610](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/display/ILeaf.ts#L610)

___

### \_\_updateLocalBounds

▸ **__updateLocalBounds**(): `void`

#### Returns

`void`

#### Inherited from

[IEditorBase](IEditorBase.md).[__updateLocalBounds](IEditorBase.md#__updatelocalbounds)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:611](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/display/ILeaf.ts#L611)

___

### \_\_updateLocalBoxBounds

▸ **__updateLocalBoxBounds**(): `void`

#### Returns

`void`

#### Inherited from

[IEditorBase](IEditorBase.md).[__updateLocalBoxBounds](IEditorBase.md#__updatelocalboxbounds)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:613](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/display/ILeaf.ts#L613)

___

### \_\_updateLocalStrokeBounds

▸ **__updateLocalStrokeBounds**(): `void`

#### Returns

`void`

#### Inherited from

[IEditorBase](IEditorBase.md).[__updateLocalStrokeBounds](IEditorBase.md#__updatelocalstrokebounds)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:614](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/display/ILeaf.ts#L614)

___

### \_\_updateLocalRenderBounds

▸ **__updateLocalRenderBounds**(): `void`

#### Returns

`void`

#### Inherited from

[IEditorBase](IEditorBase.md).[__updateLocalRenderBounds](IEditorBase.md#__updatelocalrenderbounds)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:615](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/display/ILeaf.ts#L615)

___

### \_\_updateContentBounds

▸ **__updateContentBounds**(): `void`

#### Returns

`void`

#### Inherited from

[IEditorBase](IEditorBase.md).[__updateContentBounds](IEditorBase.md#__updatecontentbounds)

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

[IEditorBase](IEditorBase.md).[__updateBoxBounds](IEditorBase.md#__updateboxbounds)

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

[IEditorBase](IEditorBase.md).[__updateStrokeBounds](IEditorBase.md#__updatestrokebounds)

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

[IEditorBase](IEditorBase.md).[__updateRenderBounds](IEditorBase.md#__updaterenderbounds)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:620](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/display/ILeaf.ts#L620)

___

### \_\_updateAutoLayout

▸ **__updateAutoLayout**(): `void`

#### Returns

`void`

#### Inherited from

[IEditorBase](IEditorBase.md).[__updateAutoLayout](IEditorBase.md#__updateautolayout)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:622](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/display/ILeaf.ts#L622)

___

### \_\_updateFlowLayout

▸ **__updateFlowLayout**(): `void`

#### Returns

`void`

#### Inherited from

[IEditorBase](IEditorBase.md).[__updateFlowLayout](IEditorBase.md#__updateflowlayout)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:623](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/display/ILeaf.ts#L623)

___

### \_\_updateNaturalSize

▸ **__updateNaturalSize**(): `void`

#### Returns

`void`

#### Inherited from

[IEditorBase](IEditorBase.md).[__updateNaturalSize](IEditorBase.md#__updatenaturalsize)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:624](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/display/ILeaf.ts#L624)

___

### \_\_updateStrokeSpread

▸ **__updateStrokeSpread**(): [`IFourNumber`](../modules.md#ifournumber)

#### Returns

[`IFourNumber`](../modules.md#ifournumber)

#### Inherited from

[IEditorBase](IEditorBase.md).[__updateStrokeSpread](IEditorBase.md#__updatestrokespread)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:626](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/display/ILeaf.ts#L626)

___

### \_\_updateRenderSpread

▸ **__updateRenderSpread**(): [`IFourNumber`](../modules.md#ifournumber)

#### Returns

[`IFourNumber`](../modules.md#ifournumber)

#### Inherited from

[IEditorBase](IEditorBase.md).[__updateRenderSpread](IEditorBase.md#__updaterenderspread)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:627](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/display/ILeaf.ts#L627)

___

### \_\_onUpdateSize

▸ **__onUpdateSize**(): `void`

#### Returns

`void`

#### Inherited from

[IEditorBase](IEditorBase.md).[__onUpdateSize](IEditorBase.md#__onupdatesize)

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

[IEditorBase](IEditorBase.md).[__updateEraser](IEditorBase.md#__updateeraser)

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

[IEditorBase](IEditorBase.md).[__updateMask](IEditorBase.md#__updatemask)

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

[IEditorBase](IEditorBase.md).[__renderMask](IEditorBase.md#__rendermask)

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

[IEditorBase](IEditorBase.md).[__renderEraser](IEditorBase.md#__rendereraser)

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

[IEditorBase](IEditorBase.md).[__getNowWorld](IEditorBase.md#__getnowworld)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:638](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/display/ILeaf.ts#L638)

___

### getClampRenderScale

▸ **getClampRenderScale**(): `number`

#### Returns

`number`

#### Inherited from

[IEditorBase](IEditorBase.md).[getClampRenderScale](IEditorBase.md#getclamprenderscale)

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

[IEditorBase](IEditorBase.md).[getRenderScaleData](IEditorBase.md#getrenderscaledata)

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

[IEditorBase](IEditorBase.md).[getTransform](IEditorBase.md#gettransform)

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

[IEditorBase](IEditorBase.md).[getBounds](IEditorBase.md#getbounds)

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

[IEditorBase](IEditorBase.md).[getLayoutBounds](IEditorBase.md#getlayoutbounds)

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

[IEditorBase](IEditorBase.md).[getLayoutPoints](IEditorBase.md#getlayoutpoints)

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

[IEditorBase](IEditorBase.md).[getWorldBounds](IEditorBase.md#getworldbounds)

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

[IEditorBase](IEditorBase.md).[worldToLocal](IEditorBase.md#worldtolocal)

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

[IEditorBase](IEditorBase.md).[localToWorld](IEditorBase.md#localtoworld)

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

[IEditorBase](IEditorBase.md).[worldToInner](IEditorBase.md#worldtoinner)

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

[IEditorBase](IEditorBase.md).[innerToWorld](IEditorBase.md#innertoworld)

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

[IEditorBase](IEditorBase.md).[getBoxPoint](IEditorBase.md#getboxpoint)

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

[IEditorBase](IEditorBase.md).[getBoxPointByInner](IEditorBase.md#getboxpointbyinner)

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

[IEditorBase](IEditorBase.md).[getInnerPoint](IEditorBase.md#getinnerpoint)

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

[IEditorBase](IEditorBase.md).[getInnerPointByBox](IEditorBase.md#getinnerpointbybox)

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

[IEditorBase](IEditorBase.md).[getInnerPointByLocal](IEditorBase.md#getinnerpointbylocal)

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

[IEditorBase](IEditorBase.md).[getLocalPoint](IEditorBase.md#getlocalpoint)

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

[IEditorBase](IEditorBase.md).[getLocalPointByInner](IEditorBase.md#getlocalpointbyinner)

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

[IEditorBase](IEditorBase.md).[getPagePoint](IEditorBase.md#getpagepoint)

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

[IEditorBase](IEditorBase.md).[getWorldPoint](IEditorBase.md#getworldpoint)

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

[IEditorBase](IEditorBase.md).[getWorldPointByBox](IEditorBase.md#getworldpointbybox)

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

[IEditorBase](IEditorBase.md).[getWorldPointByLocal](IEditorBase.md#getworldpointbylocal)

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

[IEditorBase](IEditorBase.md).[getWorldPointByPage](IEditorBase.md#getworldpointbypage)

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

[IEditorBase](IEditorBase.md).[setTransform](IEditorBase.md#settransform)

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

[IEditorBase](IEditorBase.md).[transform](IEditorBase.md#transform)

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

[IEditorBase](IEditorBase.md).[move](IEditorBase.md#move)

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

[IEditorBase](IEditorBase.md).[moveInner](IEditorBase.md#moveinner)

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

[IEditorBase](IEditorBase.md).[scaleOf](IEditorBase.md#scaleof)

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

[IEditorBase](IEditorBase.md).[rotateOf](IEditorBase.md#rotateof)

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

[IEditorBase](IEditorBase.md).[skewOf](IEditorBase.md#skewof)

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

[IEditorBase](IEditorBase.md).[transformWorld](IEditorBase.md#transformworld)

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

[IEditorBase](IEditorBase.md).[moveWorld](IEditorBase.md#moveworld)

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

[IEditorBase](IEditorBase.md).[scaleOfWorld](IEditorBase.md#scaleofworld)

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

[IEditorBase](IEditorBase.md).[rotateOfWorld](IEditorBase.md#rotateofworld)

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

[IEditorBase](IEditorBase.md).[skewOfWorld](IEditorBase.md#skewofworld)

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

[IEditorBase](IEditorBase.md).[flip](IEditorBase.md#flip)

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

[IEditorBase](IEditorBase.md).[scaleResize](IEditorBase.md#scaleresize)

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

[IEditorBase](IEditorBase.md).[__scaleResize](IEditorBase.md#__scaleresize)

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

[IEditorBase](IEditorBase.md).[resizeWidth](IEditorBase.md#resizewidth)

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

[IEditorBase](IEditorBase.md).[resizeHeight](IEditorBase.md#resizeheight)

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

[IEditorBase](IEditorBase.md).[hit](IEditorBase.md#hit)

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

[IEditorBase](IEditorBase.md).[__hitWorld](IEditorBase.md#__hitworld)

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

[IEditorBase](IEditorBase.md).[__hit](IEditorBase.md#__hit)

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

[IEditorBase](IEditorBase.md).[__hitFill](IEditorBase.md#__hitfill)

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

[IEditorBase](IEditorBase.md).[__hitStroke](IEditorBase.md#__hitstroke)

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

[IEditorBase](IEditorBase.md).[__hitPixel](IEditorBase.md#__hitpixel)

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

[IEditorBase](IEditorBase.md).[__drawHitPath](IEditorBase.md#__drawhitpath)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:699](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/display/ILeaf.ts#L699)

___

### \_\_updateHitCanvas

▸ **__updateHitCanvas**(): `void`

#### Returns

`void`

#### Inherited from

[IEditorBase](IEditorBase.md).[__updateHitCanvas](IEditorBase.md#__updatehitcanvas)

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

[IEditorBase](IEditorBase.md).[__render](IEditorBase.md#__render)

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

[IEditorBase](IEditorBase.md).[__drawFast](IEditorBase.md#__drawfast)

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

[IEditorBase](IEditorBase.md).[__draw](IEditorBase.md#__draw)

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

[IEditorBase](IEditorBase.md).[__clip](IEditorBase.md#__clip)

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

[IEditorBase](IEditorBase.md).[__renderShape](IEditorBase.md#__rendershape)

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

[IEditorBase](IEditorBase.md).[__drawShape](IEditorBase.md#__drawshape)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:709](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/display/ILeaf.ts#L709)

___

### \_\_updateWorldOpacity

▸ **__updateWorldOpacity**(): `void`

#### Returns

`void`

#### Inherited from

[IEditorBase](IEditorBase.md).[__updateWorldOpacity](IEditorBase.md#__updateworldopacity)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:711](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/display/ILeaf.ts#L711)

___

### \_\_updateChange

▸ **__updateChange**(): `void`

#### Returns

`void`

#### Inherited from

[IEditorBase](IEditorBase.md).[__updateChange](IEditorBase.md#__updatechange)

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

[IEditorBase](IEditorBase.md).[__drawPath](IEditorBase.md#__drawpath)

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

[IEditorBase](IEditorBase.md).[__drawRenderPath](IEditorBase.md#__drawrenderpath)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:716](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/display/ILeaf.ts#L716)

___

### \_\_updatePath

▸ **__updatePath**(): `void`

#### Returns

`void`

#### Inherited from

[IEditorBase](IEditorBase.md).[__updatePath](IEditorBase.md#__updatepath)

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

[IEditorBase](IEditorBase.md).[__updateRenderPath](IEditorBase.md#__updaterenderpath)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:718](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/display/ILeaf.ts#L718)

___

### getMotionPathData

▸ **getMotionPathData**(): [`IMotionPathData`](IMotionPathData.md)

#### Returns

[`IMotionPathData`](IMotionPathData.md)

#### Inherited from

[IEditorBase](IEditorBase.md).[getMotionPathData](IEditorBase.md#getmotionpathdata)

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

[IEditorBase](IEditorBase.md).[getMotionPoint](IEditorBase.md#getmotionpoint)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:722](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/display/ILeaf.ts#L722)

___

### getMotionTotal

▸ **getMotionTotal**(): `number`

#### Returns

`number`

#### Inherited from

[IEditorBase](IEditorBase.md).[getMotionTotal](IEditorBase.md#getmotiontotal)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:723](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/display/ILeaf.ts#L723)

___

### \_\_updateMotionPath

▸ **__updateMotionPath**(): `void`

#### Returns

`void`

#### Inherited from

[IEditorBase](IEditorBase.md).[__updateMotionPath](IEditorBase.md#__updatemotionpath)

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

[IEditorBase](IEditorBase.md).[__runAnimation](IEditorBase.md#__runanimation)

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

[IEditorBase](IEditorBase.md).[__emitLifeEvent](IEditorBase.md#__emitlifeevent)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:729](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/display/ILeaf.ts#L729)

___

### \_\_updateSortChildren

▸ **__updateSortChildren**(): `void`

#### Returns

`void`

#### Inherited from

[IEditorBase](IEditorBase.md).[__updateSortChildren](IEditorBase.md#__updatesortchildren)

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

[IEditorBase](IEditorBase.md).[dropTo](IEditorBase.md#dropto)

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

[IEditorBase](IEditorBase.md).[__realSetAttr](IEditorBase.md#__realsetattr)

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

[IEditorBase](IEditorBase.md).[emitPropertyEvent](IEditorBase.md#emitpropertyevent)

#### Defined in

[src/leafer/packages/interface/src/display/module/ILeafDataProxy.ts:10](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/display/module/ILeafDataProxy.ts#L10)

___

### destroyEventer

▸ **destroyEventer**(): `void`

#### Returns

`void`

#### Inherited from

[IEditorBase](IEditorBase.md).[destroyEventer](IEditorBase.md#destroyeventer)

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

[IEditorBase](IEditorBase.md).[on](IEditorBase.md#on)

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

[IEditorBase](IEditorBase.md).[off](IEditorBase.md#off)

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

[IEditorBase](IEditorBase.md).[on_](IEditorBase.md#on_)

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

[IEditorBase](IEditorBase.md).[off_](IEditorBase.md#off_)

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

[IEditorBase](IEditorBase.md).[once](IEditorBase.md#once)

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

[IEditorBase](IEditorBase.md).[emit](IEditorBase.md#emit)

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

[IEditorBase](IEditorBase.md).[emitEvent](IEditorBase.md#emitevent)

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

[IEditorBase](IEditorBase.md).[hasEvent](IEditorBase.md#hasevent)

#### Defined in

[src/leafer/packages/interface/src/event/IEventer.ts:56](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/event/IEventer.ts#L56)

___

### destroy

▸ **destroy**(): `void`

#### Returns

`void`

#### Inherited from

[IEditorBase](IEditorBase.md).[destroy](IEditorBase.md#destroy)

#### Defined in

[src/leafer/packages/interface/src/event/IEventer.ts:58](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/event/IEventer.ts#L58)

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

[IEditorBase](IEditorBase.md).[pick](IEditorBase.md#pick)

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

[IEditorBase](IEditorBase.md).[add](IEditorBase.md#add)

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

[IEditorBase](IEditorBase.md).[addAt](IEditorBase.md#addat)

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

[IEditorBase](IEditorBase.md).[addAfter](IEditorBase.md#addafter)

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

[IEditorBase](IEditorBase.md).[addBefore](IEditorBase.md#addbefore)

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

[IEditorBase](IEditorBase.md).[addMany](IEditorBase.md#addmany)

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

[IEditorBase](IEditorBase.md).[remove](IEditorBase.md#remove)

#### Defined in

[src/ui/packages/interface/src/IUI.ts:475](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/interface/src/IUI.ts#L475)

___

### removeAll

▸ **removeAll**(): `void`

#### Returns

`void`

#### Inherited from

[IEditorBase](IEditorBase.md).[removeAll](IEditorBase.md#removeall)

#### Defined in

[src/ui/packages/interface/src/IUI.ts:476](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/interface/src/IUI.ts#L476)

___

### clear

▸ **clear**(): `void`

#### Returns

`void`

#### Inherited from

[IEditorBase](IEditorBase.md).[clear](IEditorBase.md#clear)

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

[IEditorBase](IEditorBase.md).[reset](IEditorBase.md#reset)

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

[IEditorBase](IEditorBase.md).[set](IEditorBase.md#set)

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

[IEditorBase](IEditorBase.md).[toJSON](IEditorBase.md#tojson)

#### Defined in

[src/ui/packages/interface/src/IUI.ts:514](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/interface/src/IUI.ts#L514)

___

### get

▸ **get**\<`K`\>(`name`): [`IEditor`](IEditor.md)[`K`]

#### Type parameters

| Name | Type                                  |
| :--- | :------------------------------------ |
| `K`  | extends keyof [`IEditor`](IEditor.md) |

#### Parameters

| Name   | Type |
| :----- | :--- |
| `name` | `K`  |

#### Returns

[`IEditor`](IEditor.md)[`K`]

#### Inherited from

[IEditorBase](IEditorBase.md).[get](IEditorBase.md#get)

#### Defined in

[src/ui/packages/interface/src/IUI.ts:516](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/interface/src/IUI.ts#L516)

▸ **get**\<`K`\>(`name?`): [`IUIInputData`](IUIInputData.md)

#### Type parameters

| Name | Type                                  |
| :--- | :------------------------------------ |
| `K`  | extends keyof [`IEditor`](IEditor.md) |

#### Parameters

| Name    | Type                                                                                             |
| :------ | :----------------------------------------------------------------------------------------------- |
| `name?` | [`IUIInputData`](IUIInputData.md) \\| `K`[] |

#### Returns

[`IUIInputData`](IUIInputData.md)

#### Inherited from

[IEditorBase](IEditorBase.md).[get](IEditorBase.md#get)

#### Defined in

[src/ui/packages/interface/src/IUI.ts:517](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/interface/src/IUI.ts#L517)

___

### createProxyData

▸ **createProxyData**(): [`IUIInputData`](IUIInputData.md)

#### Returns

[`IUIInputData`](IUIInputData.md)

#### Inherited from

[IEditorBase](IEditorBase.md).[createProxyData](IEditorBase.md#createproxydata)

#### Defined in

[src/ui/packages/interface/src/IUI.ts:519](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/interface/src/IUI.ts#L519)

___

### clearProxyData

▸ **clearProxyData**(): `void`

#### Returns

`void`

#### Inherited from

[IEditorBase](IEditorBase.md).[clearProxyData](IEditorBase.md#clearproxydata)

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

[IEditorBase](IEditorBase.md).[find](IEditorBase.md#find)

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

[IEditorBase](IEditorBase.md).[findTag](IEditorBase.md#findtag)

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

[IEditorBase](IEditorBase.md).[findOne](IEditorBase.md#findone)

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

[IEditorBase](IEditorBase.md).[findId](IEditorBase.md#findid)

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

[IEditorBase](IEditorBase.md).[getPath](IEditorBase.md#getpath)

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

[IEditorBase](IEditorBase.md).[getPathString](IEditorBase.md#getpathstring)

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

[IEditorBase](IEditorBase.md).[asPath](IEditorBase.md#aspath)

#### Defined in

[src/ui/packages/interface/src/IUI.ts:529](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/interface/src/IUI.ts#L529)

___

### load

▸ **load**(): `void`

#### Returns

`void`

#### Inherited from

[IEditorBase](IEditorBase.md).[load](IEditorBase.md#load)

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

[IEditorBase](IEditorBase.md).[__drawPathByData](IEditorBase.md#__drawpathbydata)

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

[IEditorBase](IEditorBase.md).[__drawPathByBox](IEditorBase.md#__drawpathbybox)

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

[IEditorBase](IEditorBase.md).[__drawAfterFill](IEditorBase.md#__drawafterfill)

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

[IEditorBase](IEditorBase.md).[__drawContent](IEditorBase.md#__drawcontent)

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

[IEditorBase](IEditorBase.md).[drawImagePlaceholder](IEditorBase.md#drawimageplaceholder)

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

[IEditorBase](IEditorBase.md).[animate](IEditorBase.md#animate)

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

[IEditorBase](IEditorBase.md).[killAnimate](IEditorBase.md#killanimate)

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

[IEditorBase](IEditorBase.md).[export](IEditorBase.md#export)

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

[IEditorBase](IEditorBase.md).[syncExport](IEditorBase.md#syncexport)

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

[IEditorBase](IEditorBase.md).[clone](IEditorBase.md#clone)

#### Defined in

[src/ui/packages/interface/src/IUI.ts:545](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/interface/src/IUI.ts#L545)

___

### select

▸ **select**(`target`): `void`

#### Parameters

| Name     | Type                                                                                       |
| :------- | :----------------------------------------------------------------------------------------- |
| `target` | [`IUI`](IUI.md) \\| [`IUI`](IUI.md)[] |

#### Returns

`void`

#### Inherited from

[IEditorBase](IEditorBase.md).[select](IEditorBase.md#select)

#### Defined in

[src/ui/packages/interface/src/editor/IEditor.ts:46](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/interface/src/editor/IEditor.ts#L46)

___

### cancel

▸ **cancel**(): `void`

#### Returns

`void`

#### Inherited from

[IEditorBase](IEditorBase.md).[cancel](IEditorBase.md#cancel)

#### Defined in

[src/ui/packages/interface/src/editor/IEditor.ts:47](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/interface/src/editor/IEditor.ts#L47)

___

### hasItem

▸ **hasItem**(`item`): `boolean`

#### Parameters

| Name   | Type            |
| :----- | :-------------- |
| `item` | [`IUI`](IUI.md) |

#### Returns

`boolean`

#### Inherited from

[IEditorBase](IEditorBase.md).[hasItem](IEditorBase.md#hasitem)

#### Defined in

[src/ui/packages/interface/src/editor/IEditor.ts:49](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/interface/src/editor/IEditor.ts#L49)

___

### getItem

▸ **getItem**(`index?`): [`IUI`](IUI.md)

#### Parameters

| Name     | Type     |
| :------- | :------- |
| `index?` | `number` |

#### Returns

[`IUI`](IUI.md)

#### Inherited from

[IEditorBase](IEditorBase.md).[getItem](IEditorBase.md#getitem)

#### Defined in

[src/ui/packages/interface/src/editor/IEditor.ts:50](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/interface/src/editor/IEditor.ts#L50)

___

### shiftItem

▸ **shiftItem**(`item`): `void`

#### Parameters

| Name   | Type            |
| :----- | :-------------- |
| `item` | [`IUI`](IUI.md) |

#### Returns

`void`

#### Inherited from

[IEditorBase](IEditorBase.md).[shiftItem](IEditorBase.md#shiftitem)

#### Defined in

[src/ui/packages/interface/src/editor/IEditor.ts:51](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/interface/src/editor/IEditor.ts#L51)

___

### addItem

▸ **addItem**(`item`): `void`

#### Parameters

| Name   | Type            |
| :----- | :-------------- |
| `item` | [`IUI`](IUI.md) |

#### Returns

`void`

#### Inherited from

[IEditorBase](IEditorBase.md).[addItem](IEditorBase.md#additem)

#### Defined in

[src/ui/packages/interface/src/editor/IEditor.ts:52](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/interface/src/editor/IEditor.ts#L52)

___

### removeItem

▸ **removeItem**(`item`): `void`

#### Parameters

| Name   | Type            |
| :----- | :-------------- |
| `item` | [`IUI`](IUI.md) |

#### Returns

`void`

#### Inherited from

[IEditorBase](IEditorBase.md).[removeItem](IEditorBase.md#removeitem)

#### Defined in

[src/ui/packages/interface/src/editor/IEditor.ts:53](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/interface/src/editor/IEditor.ts#L53)

___

### setDimOthers

▸ **setDimOthers**(`value`): `void`

#### Parameters

| Name    | Type                    |
| :------ | :---------------------- |
| `value` | `number` \\| `boolean` |

#### Returns

`void`

#### Inherited from

[IEditorBase](IEditorBase.md).[setDimOthers](IEditorBase.md#setdimothers)

#### Defined in

[src/ui/packages/interface/src/editor/IEditor.ts:55](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/interface/src/editor/IEditor.ts#L55)

___

### setBright

▸ **setBright**(`value`): `void`

#### Parameters

| Name    | Type      |
| :------ | :-------- |
| `value` | `boolean` |

#### Returns

`void`

#### Inherited from

[IEditorBase](IEditorBase.md).[setBright](IEditorBase.md#setbright)

#### Defined in

[src/ui/packages/interface/src/editor/IEditor.ts:56](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/interface/src/editor/IEditor.ts#L56)

___

### cancelDimOthers

▸ **cancelDimOthers**(): `void`

#### Returns

`void`

#### Inherited from

[IEditorBase](IEditorBase.md).[cancelDimOthers](IEditorBase.md#canceldimothers)

#### Defined in

[src/ui/packages/interface/src/editor/IEditor.ts:57](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/interface/src/editor/IEditor.ts#L57)

___

### update

▸ **update**(): `void`

#### Returns

`void`

#### Inherited from

[IEditorBase](IEditorBase.md).[update](IEditorBase.md#update)

#### Defined in

[src/ui/packages/interface/src/editor/IEditor.ts:59](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/interface/src/editor/IEditor.ts#L59)

___

### updateEditBox

▸ **updateEditBox**(): `void`

#### Returns

`void`

#### Inherited from

[IEditorBase](IEditorBase.md).[updateEditBox](IEditorBase.md#updateeditbox)

#### Defined in

[src/ui/packages/interface/src/editor/IEditor.ts:60](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/interface/src/editor/IEditor.ts#L60)

___

### updateEditTool

▸ **updateEditTool**(): `void`

#### Returns

`void`

#### Inherited from

[IEditorBase](IEditorBase.md).[updateEditTool](IEditorBase.md#updateedittool)

#### Defined in

[src/ui/packages/interface/src/editor/IEditor.ts:63](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/interface/src/editor/IEditor.ts#L63)

___

### unloadEditTool

▸ **unloadEditTool**(): `void`

#### Returns

`void`

#### Inherited from

[IEditorBase](IEditorBase.md).[unloadEditTool](IEditorBase.md#unloadedittool)

#### Defined in

[src/ui/packages/interface/src/editor/IEditor.ts:64](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/interface/src/editor/IEditor.ts#L64)

___

### getEditSize

▸ **getEditSize**(`ui`): [`IEditSize`](../modules.md#ieditsize)

#### Parameters

| Name | Type                |
| :--- | :------------------ |
| `ui` | [`ILeaf`](ILeaf.md) |

#### Returns

[`IEditSize`](../modules.md#ieditsize)

#### Inherited from

[IEditorBase](IEditorBase.md).[getEditSize](IEditorBase.md#geteditsize)

#### Defined in

[src/ui/packages/interface/src/editor/IEditor.ts:66](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/interface/src/editor/IEditor.ts#L66)

___

### group

▸ **group**(`group?`): [`IGroup`](IGroup.md)

#### Parameters

| Name     | Type                                                               |
| :------- | :----------------------------------------------------------------- |
| `group?` | [`IGroupInputData`](IGroupInputData.md) \\| [`IGroup`](IGroup.md) |

#### Returns

[`IGroup`](IGroup.md)

#### Inherited from

[IEditorBase](IEditorBase.md).[group](IEditorBase.md#group)

#### Defined in

[src/ui/packages/interface/src/editor/IEditor.ts:68](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/interface/src/editor/IEditor.ts#L68)

___

### ungroup

▸ **ungroup**(): [`IUI`](IUI.md)[]

#### Returns

[`IUI`](IUI.md)[]

#### Inherited from

[IEditorBase](IEditorBase.md).[ungroup](IEditorBase.md#ungroup)

#### Defined in

[src/ui/packages/interface/src/editor/IEditor.ts:69](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/interface/src/editor/IEditor.ts#L69)

___

### openGroup

▸ **openGroup**(`group`): `void`

#### Parameters

| Name    | Type                  |
| :------ | :-------------------- |
| `group` | [`IGroup`](IGroup.md) |

#### Returns

`void`

#### Inherited from

[IEditorBase](IEditorBase.md).[openGroup](IEditorBase.md#opengroup)

#### Defined in

[src/ui/packages/interface/src/editor/IEditor.ts:70](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/interface/src/editor/IEditor.ts#L70)

___

### closeGroup

▸ **closeGroup**(`group`): `void`

#### Parameters

| Name    | Type                  |
| :------ | :-------------------- |
| `group` | [`IGroup`](IGroup.md) |

#### Returns

`void`

#### Inherited from

[IEditorBase](IEditorBase.md).[closeGroup](IEditorBase.md#closegroup)

#### Defined in

[src/ui/packages/interface/src/editor/IEditor.ts:71](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/interface/src/editor/IEditor.ts#L71)

___

### openInnerEditor

▸ **openInnerEditor**(`target?`, `nameOrSelect?`, `select?`): `void`

#### Parameters

| Name            | Type                    |
| :-------------- | :---------------------- |
| `target?`       | [`IUI`](IUI.md)         |
| `nameOrSelect?` | `string` \\| `boolean` |
| `select?`       | `boolean`               |

#### Returns

`void`

#### Inherited from

[IEditorBase](IEditorBase.md).[openInnerEditor](IEditorBase.md#openinnereditor)

#### Defined in

[src/ui/packages/interface/src/editor/IEditor.ts:74](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/interface/src/editor/IEditor.ts#L74)

___

### closeInnerEditor

▸ **closeInnerEditor**(`onlyInnerEditor?`): `void`

#### Parameters

| Name               | Type      |
| :----------------- | :-------- |
| `onlyInnerEditor?` | `boolean` |

#### Returns

`void`

#### Inherited from

[IEditorBase](IEditorBase.md).[closeInnerEditor](IEditorBase.md#closeinnereditor)

#### Defined in

[src/ui/packages/interface/src/editor/IEditor.ts:75](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/interface/src/editor/IEditor.ts#L75)

___

### lock

▸ **lock**(): `void`

#### Returns

`void`

#### Inherited from

[IEditorBase](IEditorBase.md).[lock](IEditorBase.md#lock)

#### Defined in

[src/ui/packages/interface/src/editor/IEditor.ts:77](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/interface/src/editor/IEditor.ts#L77)

___

### unlock

▸ **unlock**(): `void`

#### Returns

`void`

#### Inherited from

[IEditorBase](IEditorBase.md).[unlock](IEditorBase.md#unlock)

#### Defined in

[src/ui/packages/interface/src/editor/IEditor.ts:78](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/interface/src/editor/IEditor.ts#L78)

___

### toTop

▸ **toTop**(): `void`

#### Returns

`void`

#### Inherited from

[IEditorBase](IEditorBase.md).[toTop](IEditorBase.md#totop)

#### Defined in

[src/ui/packages/interface/src/editor/IEditor.ts:80](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/interface/src/editor/IEditor.ts#L80)

___

### toBottom

▸ **toBottom**(): `void`

#### Returns

`void`

#### Inherited from

[IEditorBase](IEditorBase.md).[toBottom](IEditorBase.md#tobottom)

#### Defined in

[src/ui/packages/interface/src/editor/IEditor.ts:81](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/interface/src/editor/IEditor.ts#L81)

___

### onMove

▸ **onMove**(`e`): `void`

#### Parameters

| Name | Type                                                             |
| :--- | :--------------------------------------------------------------- |
| `e`  | [`IDragEvent`](IDragEvent.md) \\| [`IMoveEvent`](IMoveEvent.md) |

#### Returns

`void`

#### Inherited from

[IEditorBase](IEditorBase.md).[onMove](IEditorBase.md#onmove)

#### Defined in

[src/ui/packages/interface/src/editor/IEditor.ts:88](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/interface/src/editor/IEditor.ts#L88)

___

### onScale

▸ **onScale**(`e`): `void`

#### Parameters

| Name | Type                                                             |
| :--- | :--------------------------------------------------------------- |
| `e`  | [`IDragEvent`](IDragEvent.md) \\| [`IZoomEvent`](IZoomEvent.md) |

#### Returns

`void`

#### Inherited from

[IEditorBase](IEditorBase.md).[onScale](IEditorBase.md#onscale)

#### Defined in

[src/ui/packages/interface/src/editor/IEditor.ts:89](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/interface/src/editor/IEditor.ts#L89)

___

### onRotate

▸ **onRotate**(`e`): `void`

#### Parameters

| Name | Type                                                                 |
| :--- | :------------------------------------------------------------------- |
| `e`  | [`IDragEvent`](IDragEvent.md) \\| [`IRotateEvent`](IRotateEvent.md) |

#### Returns

`void`

#### Inherited from

[IEditorBase](IEditorBase.md).[onRotate](IEditorBase.md#onrotate)

#### Defined in

[src/ui/packages/interface/src/editor/IEditor.ts:90](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/interface/src/editor/IEditor.ts#L90)

___

### onSkew

▸ **onSkew**(`e`): `void`

#### Parameters

| Name | Type                          |
| :--- | :---------------------------- |
| `e`  | [`IDragEvent`](IDragEvent.md) |

#### Returns

`void`

#### Inherited from

[IEditorBase](IEditorBase.md).[onSkew](IEditorBase.md#onskew)

#### Defined in

[src/ui/packages/interface/src/editor/IEditor.ts:91](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/interface/src/editor/IEditor.ts#L91)
