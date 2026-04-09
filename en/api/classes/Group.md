# Class: Group\<TInputData\>

## Type parameters

| Name         | Type                                                  |
| :----------- | :---------------------------------------------------- |
| `TInputData` | [`IGroupInputData`](../interfaces/IGroupInputData.md) |

## Hierarchy

- [`UI`](UI.md)\<`TInputData`\>

  ↳ **`Group`**

  ↳↳ [`Leafer`](Leafer.md)

  ↳↳ [`Box`](Box.md)

  ↳↳ [`Pen`](Pen.md)

  ↳↳ [`Editor`](Editor.md)

  ↳↳ [`EditBox`](EditBox.md)

  ↳↳ [`EditSelect`](EditSelect.md)

  ↳↳ [`SelectArea`](SelectArea.md)

  ↳↳ [`ScrollBar`](ScrollBar.md)

  ↳↳ [`Scroller`](Scroller.md)

## Implements

- [`IGroup`](../interfaces/IGroup.md)

## Table of contents

### Constructors

- [constructor](Group.md#constructor)

### Properties

- [innerId](Group.md#innerid)
- [skipJSON](Group.md#skipjson)
- [syncEventer](Group.md#synceventer)
- [lockNormalStyle](Group.md#locknormalstyle)
- [\_\_layout](Group.md#__layout)
- [\_\_world](Group.md#__world)
- [\_\_local](Group.md#__local)
- [\_\_nowWorld](Group.md#__nowworld)
- [\_\_cameraWorld](Group.md#__cameraworld)
- [\_\_worldOpacity](Group.md#__worldopacity)
- [\_\_scrollWorld](Group.md#__scrollworld)
- [\_\_level](Group.md#__level)
- [\_\_tempNumber](Group.md#__tempnumber)
- [\_\_hasAutoLayout](Group.md#__hasautolayout)
- [\_\_hasMask](Group.md#__hasmask)
- [\_\_hasEraser](Group.md#__haseraser)
- [\_\_hitCanvas](Group.md#__hitcanvas)
- [\_\_captureMap](Group.md#__capturemap)
- [\_\_bubbleMap](Group.md#__bubblemap)
- [\_\_hasLocalEvent](Group.md#__haslocalevent)
- [\_\_hasWorldEvent](Group.md#__hasworldevent)
- [destroyed](Group.md#destroyed)
- [\_\_](Group.md#__)
- [width](Group.md#width)
- [height](Group.md#height)
- [children](Group.md#children)
- [topChildren](Group.md#topchildren)
- [childlessJSON](Group.md#childlessjson)
- [proxyData](Group.md#proxydata)
- [\_\_proxyData](Group.md#__proxydata)
- [leafer](Group.md#leafer)
- [parent](Group.md#parent)
- [zoomLayer](Group.md#zoomlayer)
- [startLinker](Group.md#startlinker)
- [endLinker](Group.md#endlinker)
- [id](Group.md#id)
- [name](Group.md#name)
- [className](Group.md#classname)
- [blendMode](Group.md#blendmode)
- [opacity](Group.md#opacity)
- [visible](Group.md#visible)
- [locked](Group.md#locked)
- [dim](Group.md#dim)
- [dimskip](Group.md#dimskip)
- [bright](Group.md#bright)
- [zIndex](Group.md#zindex)
- [mask](Group.md#mask)
- [eraser](Group.md#eraser)
- [x](Group.md#x)
- [y](Group.md#y)
- [scaleX](Group.md#scalex)
- [scaleY](Group.md#scaley)
- [scaleFixed](Group.md#scalefixed)
- [rotation](Group.md#rotation)
- [skewX](Group.md#skewx)
- [skewY](Group.md#skewy)
- [offsetX](Group.md#offsetx)
- [offsetY](Group.md#offsety)
- [scrollX](Group.md#scrollx)
- [scrollY](Group.md#scrolly)
- [origin](Group.md#origin)
- [around](Group.md#around)
- [lazy](Group.md#lazy)
- [pixelRatio](Group.md#pixelratio)
- [renderSpread](Group.md#renderspread)
- [path](Group.md#path)
- [windingRule](Group.md#windingrule)
- [closed](Group.md#closed)
- [flow](Group.md#flow)
- [padding](Group.md#padding)
- [gap](Group.md#gap)
- [flowAlign](Group.md#flowalign)
- [flowWrap](Group.md#flowwrap)
- [itemBox](Group.md#itembox)
- [inFlow](Group.md#inflow)
- [autoWidth](Group.md#autowidth)
- [autoHeight](Group.md#autoheight)
- [lockRatio](Group.md#lockratio)
- [autoBox](Group.md#autobox)
- [widthRange](Group.md#widthrange)
- [heightRange](Group.md#heightrange)
- [draggable](Group.md#draggable)
- [dragBounds](Group.md#dragbounds)
- [dragBoundsType](Group.md#dragboundstype)
- [editable](Group.md#editable)
- [hittable](Group.md#hittable)
- [hitFill](Group.md#hitfill)
- [hitStroke](Group.md#hitstroke)
- [hitBox](Group.md#hitbox)
- [hitChildren](Group.md#hitchildren)
- [hitSelf](Group.md#hitself)
- [hitRadius](Group.md#hitradius)
- [cursor](Group.md#cursor)
- [fill](Group.md#fill)
- [stroke](Group.md#stroke)
- [strokeAlign](Group.md#strokealign)
- [strokeWidth](Group.md#strokewidth)
- [strokeScaleFixed](Group.md#strokescalefixed)
- [strokeCap](Group.md#strokecap)
- [strokeJoin](Group.md#strokejoin)
- [dashPattern](Group.md#dashpattern)
- [dashOffset](Group.md#dashoffset)
- [miterLimit](Group.md#miterlimit)
- [startArrow](Group.md#startarrow)
- [endArrow](Group.md#endarrow)
- [cornerRadius](Group.md#cornerradius)
- [cornerSmoothing](Group.md#cornersmoothing)
- [shadow](Group.md#shadow)
- [innerShadow](Group.md#innershadow)
- [blur](Group.md#blur)
- [backgroundBlur](Group.md#backgroundblur)
- [grayscale](Group.md#grayscale)
- [filter](Group.md#filter)
- [complex](Group.md#complex)
- [animation](Group.md#animation)
- [animationOut](Group.md#animationout)
- [transition](Group.md#transition)
- [transitionOut](Group.md#transitionout)
- [motionPath](Group.md#motionpath)
- [motionPrecision](Group.md#motionprecision)
- [motion](Group.md#motion)
- [motionRotation](Group.md#motionrotation)
- [states](Group.md#states)
- [state](Group.md#state)
- [selected](Group.md#selected)
- [disabled](Group.md#disabled)
- [normalStyle](Group.md#normalstyle)
- [hoverStyle](Group.md#hoverstyle)
- [pressStyle](Group.md#pressstyle)
- [focusStyle](Group.md#focusstyle)
- [selectedStyle](Group.md#selectedstyle)
- [disabledStyle](Group.md#disabledstyle)
- [placeholderStyle](Group.md#placeholderstyle)
- [placeholderColor](Group.md#placeholdercolor)
- [placeholderDelay](Group.md#placeholderdelay)
- [button](Group.md#button)
- [editConfig](Group.md#editconfig)
- [editOuter](Group.md#editouter)
- [editInner](Group.md#editinner)
- [data](Group.md#data)
- [useFastShadow](Group.md#usefastshadow)
- [\_\_box](Group.md#__box)
- [\_\_animate](Group.md#__animate)

### Accessors

- [tag](Group.md#tag)
- [innerName](Group.md#innername)
- [\_\_DataProcessor](Group.md#__dataprocessor)
- [\_\_LayoutProcessor](Group.md#__layoutprocessor)
- [leaferIsCreated](Group.md#leaferiscreated)
- [leaferIsReady](Group.md#leaferisready)
- [isLeafer](Group.md#isleafer)
- [isBranchLeaf](Group.md#isbranchleaf)
- [\_\_localMatrix](Group.md#__localmatrix)
- [\_\_localBoxBounds](Group.md#__localboxbounds)
- [worldTransform](Group.md#worldtransform)
- [localTransform](Group.md#localtransform)
- [scrollWorldTransform](Group.md#scrollworldtransform)
- [boxBounds](Group.md#boxbounds)
- [renderBounds](Group.md#renderbounds)
- [worldBoxBounds](Group.md#worldboxbounds)
- [worldStrokeBounds](Group.md#worldstrokebounds)
- [worldRenderBounds](Group.md#worldrenderbounds)
- [worldOpacity](Group.md#worldopacity)
- [\_\_worldFlipped](Group.md#__worldflipped)
- [\_\_onlyHitMask](Group.md#__onlyhitmask)
- [\_\_ignoreHitWorld](Group.md#__ignorehitworld)
- [\_\_inLazyBounds](Group.md#__inlazybounds)
- [pathInputed](Group.md#pathinputed)
- [event](Group.md#event)
- [\_\_tag](Group.md#__tag)
- [isBranch](Group.md#isbranch)
- [app](Group.md#app)
- [isFrame](Group.md#isframe)
- [strokeWidthFixed](Group.md#strokewidthfixed)
- [scale](Group.md#scale)
- [isAutoWidth](Group.md#isautowidth)
- [isAutoHeight](Group.md#isautoheight)
- [pen](Group.md#pen)

### Methods

- [resetCustom](Group.md#resetcustom)
- [waitParent](Group.md#waitparent)
- [waitLeafer](Group.md#waitleafer)
- [nextRender](Group.md#nextrender)
- [removeNextRender](Group.md#removenextrender)
- [\_\_bindLeafer](Group.md#__bindleafer)
- [setAttr](Group.md#setattr)
- [getAttr](Group.md#getattr)
- [getComputedAttr](Group.md#getcomputedattr)
- [toString](Group.md#tostring)
- [toSVG](Group.md#tosvg)
- [\_\_SVG](Group.md#__svg)
- [toHTML](Group.md#tohtml)
- [\_\_setAttr](Group.md#__setattr)
- [\_\_getAttr](Group.md#__getattr)
- [setProxyAttr](Group.md#setproxyattr)
- [getProxyAttr](Group.md#getproxyattr)
- [focus](Group.md#focus)
- [updateState](Group.md#updatestate)
- [updateLayout](Group.md#updatelayout)
- [forceUpdate](Group.md#forceupdate)
- [forceRender](Group.md#forcerender)
- [\_\_extraUpdate](Group.md#__extraupdate)
- [\_\_updateWorldMatrix](Group.md#__updateworldmatrix)
- [\_\_updateLocalMatrix](Group.md#__updatelocalmatrix)
- [\_\_updateWorldBounds](Group.md#__updateworldbounds)
- [\_\_updateLocalBounds](Group.md#__updatelocalbounds)
- [\_\_updateLocalBoxBounds](Group.md#__updatelocalboxbounds)
- [\_\_updateLocalStrokeBounds](Group.md#__updatelocalstrokebounds)
- [\_\_updateLocalRenderBounds](Group.md#__updatelocalrenderbounds)
- [\_\_updateBoxBounds](Group.md#__updateboxbounds)
- [\_\_updateContentBounds](Group.md#__updatecontentbounds)
- [\_\_updateStrokeBounds](Group.md#__updatestrokebounds)
- [\_\_updateRenderBounds](Group.md#__updaterenderbounds)
- [\_\_updateAutoLayout](Group.md#__updateautolayout)
- [\_\_updateFlowLayout](Group.md#__updateflowlayout)
- [\_\_updateNaturalSize](Group.md#__updatenaturalsize)
- [\_\_updateStrokeSpread](Group.md#__updatestrokespread)
- [\_\_updateRenderSpread](Group.md#__updaterenderspread)
- [\_\_updateEraser](Group.md#__updateeraser)
- [\_\_renderEraser](Group.md#__rendereraser)
- [\_\_updateMask](Group.md#__updatemask)
- [\_\_renderMask](Group.md#__rendermask)
- [\_\_getNowWorld](Group.md#__getnowworld)
- [getClampRenderScale](Group.md#getclamprenderscale)
- [getRenderScaleData](Group.md#getrenderscaledata)
- [getTransform](Group.md#gettransform)
- [getBounds](Group.md#getbounds)
- [getLayoutBounds](Group.md#getlayoutbounds)
- [getLayoutPoints](Group.md#getlayoutpoints)
- [getWorldBounds](Group.md#getworldbounds)
- [worldToLocal](Group.md#worldtolocal)
- [localToWorld](Group.md#localtoworld)
- [worldToInner](Group.md#worldtoinner)
- [innerToWorld](Group.md#innertoworld)
- [getBoxPoint](Group.md#getboxpoint)
- [getBoxPointByInner](Group.md#getboxpointbyinner)
- [getInnerPoint](Group.md#getinnerpoint)
- [getInnerPointByBox](Group.md#getinnerpointbybox)
- [getInnerPointByLocal](Group.md#getinnerpointbylocal)
- [getLocalPoint](Group.md#getlocalpoint)
- [getLocalPointByInner](Group.md#getlocalpointbyinner)
- [getPagePoint](Group.md#getpagepoint)
- [getWorldPoint](Group.md#getworldpoint)
- [getWorldPointByBox](Group.md#getworldpointbybox)
- [getWorldPointByLocal](Group.md#getworldpointbylocal)
- [getWorldPointByPage](Group.md#getworldpointbypage)
- [setTransform](Group.md#settransform)
- [transform](Group.md#transform)
- [move](Group.md#move)
- [moveInner](Group.md#moveinner)
- [scaleOf](Group.md#scaleof)
- [rotateOf](Group.md#rotateof)
- [skewOf](Group.md#skewof)
- [transformWorld](Group.md#transformworld)
- [moveWorld](Group.md#moveworld)
- [scaleOfWorld](Group.md#scaleofworld)
- [rotateOfWorld](Group.md#rotateofworld)
- [skewOfWorld](Group.md#skewofworld)
- [flip](Group.md#flip)
- [scaleResize](Group.md#scaleresize)
- [\_\_scaleResize](Group.md#__scaleresize)
- [resizeWidth](Group.md#resizewidth)
- [resizeHeight](Group.md#resizeheight)
- [hit](Group.md#hit)
- [\_\_hitWorld](Group.md#__hitworld)
- [\_\_hit](Group.md#__hit)
- [\_\_hitFill](Group.md#__hitfill)
- [\_\_hitStroke](Group.md#__hitstroke)
- [\_\_hitPixel](Group.md#__hitpixel)
- [\_\_drawHitPath](Group.md#__drawhitpath)
- [\_\_updateHitCanvas](Group.md#__updatehitcanvas)
- [\_\_render](Group.md#__render)
- [\_\_drawFast](Group.md#__drawfast)
- [\_\_draw](Group.md#__draw)
- [\_\_clip](Group.md#__clip)
- [\_\_renderShape](Group.md#__rendershape)
- [\_\_drawShape](Group.md#__drawshape)
- [\_\_updateWorldOpacity](Group.md#__updateworldopacity)
- [\_\_updateChange](Group.md#__updatechange)
- [\_\_updatePath](Group.md#__updatepath)
- [getMotionPathData](Group.md#getmotionpathdata)
- [getMotionPoint](Group.md#getmotionpoint)
- [getMotionTotal](Group.md#getmotiontotal)
- [\_\_updateMotionPath](Group.md#__updatemotionpath)
- [\_\_runAnimation](Group.md#__runanimation)
- [\_\_updateSortChildren](Group.md#__updatesortchildren)
- [dropTo](Group.md#dropto)
- [on](Group.md#on)
- [off](Group.md#off)
- [on\_](Group.md#on_)
- [off\_](Group.md#off_)
- [once](Group.md#once)
- [emit](Group.md#emit)
- [emitEvent](Group.md#emitevent)
- [hasEvent](Group.md#hasevent)
- [changeAttr](Group.md#changeattr)
- [addAttr](Group.md#addattr)
- [\_\_emitLifeEvent](Group.md#__emitlifeevent)
- [reset](Group.md#reset)
- [\_\_setBranch](Group.md#__setbranch)
- [set](Group.md#set)
- [toJSON](Group.md#tojson)
- [pick](Group.md#pick)
- [addAt](Group.md#addat)
- [addAfter](Group.md#addafter)
- [addBefore](Group.md#addbefore)
- [add](Group.md#add)
- [addMany](Group.md#addmany)
- [remove](Group.md#remove)
- [removeAll](Group.md#removeall)
- [clear](Group.md#clear)
- [get](Group.md#get)
- [createProxyData](Group.md#createproxydata)
- [clearProxyData](Group.md#clearproxydata)
- [find](Group.md#find)
- [findTag](Group.md#findtag)
- [findOne](Group.md#findone)
- [findId](Group.md#findid)
- [getPath](Group.md#getpath)
- [getPathString](Group.md#getpathstring)
- [asPath](Group.md#aspath)
- [load](Group.md#load)
- [\_\_onUpdateSize](Group.md#__onupdatesize)
- [\_\_updateRenderPath](Group.md#__updaterenderpath)
- [\_\_drawRenderPath](Group.md#__drawrenderpath)
- [\_\_drawPath](Group.md#__drawpath)
- [\_\_drawPathByData](Group.md#__drawpathbydata)
- [\_\_drawPathByBox](Group.md#__drawpathbybox)
- [drawImagePlaceholder](Group.md#drawimageplaceholder)
- [animate](Group.md#animate)
- [killAnimate](Group.md#killanimate)
- [export](Group.md#export)
- [syncExport](Group.md#syncexport)
- [clone](Group.md#clone)
- [one](Group.md#one)
- [registerUI](Group.md#registerui)
- [registerData](Group.md#registerdata)
- [setEditConfig](Group.md#seteditconfig)
- [setEditOuter](Group.md#seteditouter)
- [setEditInner](Group.md#seteditinner)
- [destroy](Group.md#destroy)

## Constructors

### constructor

• **new Group**\<`TInputData`\>(`data?`): [`Group`](Group.md)\<`TInputData`\>

#### Type parameters

| Name         | Type                                                  |
| :----------- | :---------------------------------------------------- |
| `TInputData` | [`IGroupInputData`](../interfaces/IGroupInputData.md) |

#### Parameters

| Name    | Type         |
| :------ | :----------- |
| `data?` | `TInputData` |

#### Returns

[`Group`](Group.md)\<`TInputData`\>

#### Inherited from

[UI](UI.md).[constructor](UI.md#constructor)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:116](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/display/src/Leaf.ts#L116)

## Properties

### innerId

• `Readonly` **innerId**: `number`

#### Implementation of

[IGroup](../interfaces/IGroup.md).[innerId](../interfaces/IGroup.md#innerid)

#### Inherited from

[UI](UI.md).[innerId](UI.md#innerid)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:33](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/display/src/Leaf.ts#L33)

___

### skipJSON

• `Optional` **skipJSON**: `boolean`

#### Implementation of

[IGroup](../interfaces/IGroup.md).[skipJSON](../interfaces/IGroup.md#skipjson)

#### Inherited from

[UI](UI.md).[skipJSON](UI.md#skipjson)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:49](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/display/src/Leaf.ts#L49)

___

### syncEventer

• `Optional` **syncEventer**: [`ILeaf`](../interfaces/ILeaf.md)

#### Implementation of

[IGroup](../interfaces/IGroup.md).[syncEventer](../interfaces/IGroup.md#synceventer)

#### Inherited from

[UI](UI.md).[syncEventer](UI.md#synceventer)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:50](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/display/src/Leaf.ts#L50)

___

### lockNormalStyle

• `Optional` **lockNormalStyle**: `boolean`

#### Implementation of

[IGroup](../interfaces/IGroup.md).[lockNormalStyle](../interfaces/IGroup.md#locknormalstyle)

#### Inherited from

[UI](UI.md).[lockNormalStyle](UI.md#locknormalstyle)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:51](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/display/src/Leaf.ts#L51)

___

### \_\_layout

• **\_\_layout**: [`ILeafLayout`](../interfaces/ILeafLayout.md)

#### Implementation of

[IGroup](../interfaces/IGroup.md).[__layout](../interfaces/IGroup.md#__layout)

#### Inherited from

[UI](UI.md).[__layout](UI.md#__layout)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:54](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/display/src/Leaf.ts#L54)

___

### \_\_world

• **\_\_world**: [`IMatrixWithBoundsScaleData`](../interfaces/IMatrixWithBoundsScaleData.md)

#### Implementation of

[IGroup](../interfaces/IGroup.md).[__world](../interfaces/IGroup.md#__world)

#### Inherited from

[UI](UI.md).[__world](UI.md#__world)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:56](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/display/src/Leaf.ts#L56)

___

### \_\_local

• `Optional` **\_\_local**: [`IMatrixWithBoundsData`](../interfaces/IMatrixWithBoundsData.md)

#### Implementation of

[IGroup](../interfaces/IGroup.md).[__local](../interfaces/IGroup.md#__local)

#### Inherited from

[UI](UI.md).[__local](UI.md#__local)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:57](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/display/src/Leaf.ts#L57)

___

### \_\_nowWorld

• `Optional` **\_\_nowWorld**: [`IMatrixWithBoundsScaleData`](../interfaces/IMatrixWithBoundsScaleData.md)

#### Implementation of

[IGroup](../interfaces/IGroup.md).[__nowWorld](../interfaces/IGroup.md#__nowworld)

#### Inherited from

[UI](UI.md).[__nowWorld](UI.md#__nowworld)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:59](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/display/src/Leaf.ts#L59)

___

### \_\_cameraWorld

• `Optional` **\_\_cameraWorld**: [`IMatrixWithBoundsScaleData`](../interfaces/IMatrixWithBoundsScaleData.md)

#### Implementation of

[IGroup](../interfaces/IGroup.md).[__cameraWorld](../interfaces/IGroup.md#__cameraworld)

#### Inherited from

[UI](UI.md).[__cameraWorld](UI.md#__cameraworld)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:60](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/display/src/Leaf.ts#L60)

___

### \_\_worldOpacity

• **\_\_worldOpacity**: `number`

#### Implementation of

[IGroup](../interfaces/IGroup.md).[__worldOpacity](../interfaces/IGroup.md#__worldopacity)

#### Inherited from

[UI](UI.md).[__worldOpacity](UI.md#__worldopacity)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:65](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/display/src/Leaf.ts#L65)

___

### \_\_scrollWorld

• `Optional` **\_\_scrollWorld**: [`IMatrixWithBoundsScaleData`](../interfaces/IMatrixWithBoundsScaleData.md)

#### Implementation of

[IGroup](../interfaces/IGroup.md).[__scrollWorld](../interfaces/IGroup.md#__scrollworld)

#### Inherited from

[UI](UI.md).[__scrollWorld](UI.md#__scrollworld)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:71](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/display/src/Leaf.ts#L71)

___

### \_\_level

• **\_\_level**: `number`

#### Implementation of

[IGroup](../interfaces/IGroup.md).[__level](../interfaces/IGroup.md#__level)

#### Inherited from

[UI](UI.md).[__level](UI.md#__level)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:84](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/display/src/Leaf.ts#L84)

___

### \_\_tempNumber

• **\_\_tempNumber**: `number`

#### Implementation of

[IGroup](../interfaces/IGroup.md).[__tempNumber](../interfaces/IGroup.md#__tempnumber)

#### Inherited from

[UI](UI.md).[__tempNumber](UI.md#__tempnumber)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:85](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/display/src/Leaf.ts#L85)

___

### \_\_hasAutoLayout

• `Optional` **\_\_hasAutoLayout**: `boolean`

#### Implementation of

[IGroup](../interfaces/IGroup.md).[__hasAutoLayout](../interfaces/IGroup.md#__hasautolayout)

#### Inherited from

[UI](UI.md).[__hasAutoLayout](UI.md#__hasautolayout)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:89](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/display/src/Leaf.ts#L89)

___

### \_\_hasMask

• `Optional` **\_\_hasMask**: `boolean`

#### Implementation of

[IGroup](../interfaces/IGroup.md).[__hasMask](../interfaces/IGroup.md#__hasmask)

#### Inherited from

[UI](UI.md).[__hasMask](UI.md#__hasmask)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:90](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/display/src/Leaf.ts#L90)

___

### \_\_hasEraser

• `Optional` **\_\_hasEraser**: `boolean`

#### Implementation of

[IGroup](../interfaces/IGroup.md).[__hasEraser](../interfaces/IGroup.md#__haseraser)

#### Inherited from

[UI](UI.md).[__hasEraser](UI.md#__haseraser)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:91](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/display/src/Leaf.ts#L91)

___

### \_\_hitCanvas

• `Optional` **\_\_hitCanvas**: [`IHitCanvas`](../interfaces/IHitCanvas.md)

#### Implementation of

[IGroup](../interfaces/IGroup.md).[__hitCanvas](../interfaces/IGroup.md#__hitcanvas)

#### Inherited from

[UI](UI.md).[__hitCanvas](UI.md#__hitcanvas)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:92](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/display/src/Leaf.ts#L92)

___

### \_\_captureMap

• `Optional` **\_\_captureMap**: [`IEventListenerMap`](../interfaces/IEventListenerMap.md)

#### Implementation of

[IGroup](../interfaces/IGroup.md).[__captureMap](../interfaces/IGroup.md#__capturemap)

#### Inherited from

[UI](UI.md).[__captureMap](UI.md#__capturemap)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:103](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/display/src/Leaf.ts#L103)

___

### \_\_bubbleMap

• `Optional` **\_\_bubbleMap**: [`IEventListenerMap`](../interfaces/IEventListenerMap.md)

#### Implementation of

[IGroup](../interfaces/IGroup.md).[__bubbleMap](../interfaces/IGroup.md#__bubblemap)

#### Inherited from

[UI](UI.md).[__bubbleMap](UI.md#__bubblemap)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:104](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/display/src/Leaf.ts#L104)

___

### \_\_hasLocalEvent

• `Optional` **\_\_hasLocalEvent**: `boolean`

#### Implementation of

[IGroup](../interfaces/IGroup.md).[__hasLocalEvent](../interfaces/IGroup.md#__haslocalevent)

#### Inherited from

[UI](UI.md).[__hasLocalEvent](UI.md#__haslocalevent)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:106](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/display/src/Leaf.ts#L106)

___

### \_\_hasWorldEvent

• `Optional` **\_\_hasWorldEvent**: `boolean`

#### Implementation of

[IGroup](../interfaces/IGroup.md).[__hasWorldEvent](../interfaces/IGroup.md#__hasworldevent)

#### Inherited from

[UI](UI.md).[__hasWorldEvent](UI.md#__hasworldevent)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:107](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/display/src/Leaf.ts#L107)

___

### destroyed

• **destroyed**: `boolean`

#### Implementation of

[IGroup](../interfaces/IGroup.md).[destroyed](../interfaces/IGroup.md#destroyed)

#### Inherited from

[UI](UI.md).[destroyed](UI.md#destroyed)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:113](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/display/src/Leaf.ts#L113)

___

### \_\_

• **\_\_**: [`IGroupData`](../interfaces/IGroupData.md)

#### Implementation of

[IGroup](../interfaces/IGroup.md).[__](../interfaces/IGroup.md#__)

#### Overrides

[UI](UI.md).[__](UI.md#__)

#### Defined in

[src/ui/packages/display/src/Group.ts:19](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/display/src/Group.ts#L19)

___

### width

• `Optional` **width**: `number`

#### Implementation of

[IGroup](../interfaces/IGroup.md).[width](../interfaces/IGroup.md#width)

#### Overrides

[UI](UI.md).[width](UI.md#width)

#### Defined in

[src/ui/packages/display/src/Group.ts:23](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/display/src/Group.ts#L23)

___

### height

• `Optional` **height**: `number`

#### Implementation of

[IGroup](../interfaces/IGroup.md).[height](../interfaces/IGroup.md#height)

#### Overrides

[UI](UI.md).[height](UI.md#height)

#### Defined in

[src/ui/packages/display/src/Group.ts:26](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/display/src/Group.ts#L26)

___

### children

• **children**: [`IUI`](../interfaces/IUI.md)[]

#### Implementation of

[IGroup](../interfaces/IGroup.md).[children](../interfaces/IGroup.md#children)

#### Overrides

[UI](UI.md).[children](UI.md#children)

#### Defined in

[src/ui/packages/display/src/Group.ts:28](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/display/src/Group.ts#L28)

___

### topChildren

• `Optional` **topChildren**: [`IUI`](../interfaces/IUI.md)[]

#### Implementation of

[IGroup](../interfaces/IGroup.md).[topChildren](../interfaces/IGroup.md#topchildren)

#### Overrides

[UI](UI.md).[topChildren](UI.md#topchildren)

#### Defined in

[src/ui/packages/display/src/Group.ts:30](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/display/src/Group.ts#L30)

___

### childlessJSON

• `Optional` **childlessJSON**: `boolean`

#### Implementation of

[IGroup](../interfaces/IGroup.md).[childlessJSON](../interfaces/IGroup.md#childlessjson)

#### Defined in

[src/ui/packages/display/src/Group.ts:32](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/display/src/Group.ts#L32)

___

### proxyData

• `Optional` **proxyData**: [`IUIInputData`](../interfaces/IUIInputData.md)

#### Implementation of

[IGroup](../interfaces/IGroup.md).[proxyData](../interfaces/IGroup.md#proxydata)

#### Inherited from

[UI](UI.md).[proxyData](UI.md#proxydata)

#### Defined in

[src/ui/packages/display/src/UI.ts:21](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/display/src/UI.ts#L21)

___

### \_\_proxyData

• `Optional` **\_\_proxyData**: [`IUIInputData`](../interfaces/IUIInputData.md)

#### Implementation of

[IGroup](../interfaces/IGroup.md).[__proxyData](../interfaces/IGroup.md#__proxydata)

#### Inherited from

[UI](UI.md).[__proxyData](UI.md#__proxydata)

#### Defined in

[src/ui/packages/display/src/UI.ts:22](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/display/src/UI.ts#L22)

___

### leafer

• `Optional` **leafer**: [`ILeafer`](../interfaces/ILeafer.md)

#### Implementation of

[IGroup](../interfaces/IGroup.md).[leafer](../interfaces/IGroup.md#leafer)

#### Inherited from

[UI](UI.md).[leafer](UI.md#leafer)

#### Defined in

[src/ui/packages/display/src/UI.ts:26](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/display/src/UI.ts#L26)

___

### parent

• `Optional` **parent**: [`IGroup`](../interfaces/IGroup.md)

#### Implementation of

[IGroup](../interfaces/IGroup.md).[parent](../interfaces/IGroup.md#parent)

#### Inherited from

[UI](UI.md).[parent](UI.md#parent)

#### Defined in

[src/ui/packages/display/src/UI.ts:27](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/display/src/UI.ts#L27)

___

### zoomLayer

• **zoomLayer**: [`IGroup`](../interfaces/IGroup.md)

#### Implementation of

[IGroup](../interfaces/IGroup.md).[zoomLayer](../interfaces/IGroup.md#zoomlayer)

#### Inherited from

[UI](UI.md).[zoomLayer](UI.md#zoomlayer)

#### Defined in

[src/ui/packages/display/src/UI.ts:30](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/display/src/UI.ts#L30)

___

### startLinker

• `Optional` **startLinker**: [`ILinker`](../interfaces/ILinker.md)[]

#### Implementation of

[IGroup](../interfaces/IGroup.md).[startLinker](../interfaces/IGroup.md#startlinker)

#### Inherited from

[UI](UI.md).[startLinker](UI.md#startlinker)

#### Defined in

[src/ui/packages/display/src/UI.ts:37](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/display/src/UI.ts#L37)

___

### endLinker

• `Optional` **endLinker**: [`ILinker`](../interfaces/ILinker.md)[]

#### Implementation of

[IGroup](../interfaces/IGroup.md).[endLinker](../interfaces/IGroup.md#endlinker)

#### Inherited from

[UI](UI.md).[endLinker](UI.md#endlinker)

#### Defined in

[src/ui/packages/display/src/UI.ts:38](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/display/src/UI.ts#L38)

___

### id

• `Optional` **id**: `string`

#### Implementation of

[IGroup](../interfaces/IGroup.md).[id](../interfaces/IGroup.md#id)

#### Inherited from

[UI](UI.md).[id](UI.md#id)

#### Defined in

[src/ui/packages/display/src/UI.ts:44](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/display/src/UI.ts#L44)

___

### name

• `Optional` **name**: `string`

#### Implementation of

[IGroup](../interfaces/IGroup.md).[name](../interfaces/IGroup.md#name)

#### Inherited from

[UI](UI.md).[name](UI.md#name)

#### Defined in

[src/ui/packages/display/src/UI.ts:47](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/display/src/UI.ts#L47)

___

### className

• `Optional` **className**: `string`

#### Implementation of

[IGroup](../interfaces/IGroup.md).[className](../interfaces/IGroup.md#classname)

#### Inherited from

[UI](UI.md).[className](UI.md#classname)

#### Defined in

[src/ui/packages/display/src/UI.ts:50](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/display/src/UI.ts#L50)

___

### blendMode

• `Optional` **blendMode**: [`IBlendMode`](../modules.md#iblendmode)

#### Implementation of

[IGroup](../interfaces/IGroup.md).[blendMode](../interfaces/IGroup.md#blendmode)

#### Inherited from

[UI](UI.md).[blendMode](UI.md#blendmode)

#### Defined in

[src/ui/packages/display/src/UI.ts:55](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/display/src/UI.ts#L55)

___

### opacity

• `Optional` **opacity**: `number`

#### Implementation of

[IGroup](../interfaces/IGroup.md).[opacity](../interfaces/IGroup.md#opacity)

#### Inherited from

[UI](UI.md).[opacity](UI.md#opacity)

#### Defined in

[src/ui/packages/display/src/UI.ts:58](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/display/src/UI.ts#L58)

___

### visible

• `Optional` **visible**: `boolean` \| `0`

#### Implementation of

[IGroup](../interfaces/IGroup.md).[visible](../interfaces/IGroup.md#visible)

#### Inherited from

[UI](UI.md).[visible](UI.md#visible)

#### Defined in

[src/ui/packages/display/src/UI.ts:61](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/display/src/UI.ts#L61)

___

### locked

• `Optional` **locked**: `boolean`

#### Implementation of

[IGroup](../interfaces/IGroup.md).[locked](../interfaces/IGroup.md#locked)

#### Inherited from

[UI](UI.md).[locked](UI.md#locked)

#### Defined in

[src/ui/packages/display/src/UI.ts:65](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/display/src/UI.ts#L65)

___

### dim

• `Optional` **dim**: `number` \| `boolean`

#### Implementation of

[IGroup](../interfaces/IGroup.md).[dim](../interfaces/IGroup.md#dim)

#### Inherited from

[UI](UI.md).[dim](UI.md#dim)

#### Defined in

[src/ui/packages/display/src/UI.ts:71](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/display/src/UI.ts#L71)

___

### dimskip

• `Optional` **dimskip**: `boolean`

#### Implementation of

[IGroup](../interfaces/IGroup.md).[dimskip](../interfaces/IGroup.md#dimskip)

#### Inherited from

[UI](UI.md).[dimskip](UI.md#dimskip)

#### Defined in

[src/ui/packages/display/src/UI.ts:74](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/display/src/UI.ts#L74)

___

### bright

• `Optional` **bright**: `boolean`

#### Implementation of

[IGroup](../interfaces/IGroup.md).[bright](../interfaces/IGroup.md#bright)

#### Inherited from

[UI](UI.md).[bright](UI.md#bright)

#### Defined in

[src/ui/packages/display/src/UI.ts:76](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/display/src/UI.ts#L76)

___

### zIndex

• `Optional` **zIndex**: `number`

#### Implementation of

[IGroup](../interfaces/IGroup.md).[zIndex](../interfaces/IGroup.md#zindex)

#### Inherited from

[UI](UI.md).[zIndex](UI.md#zindex)

#### Defined in

[src/ui/packages/display/src/UI.ts:80](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/display/src/UI.ts#L80)

___

### mask

• `Optional` **mask**: `boolean` \| [`IMaskType`](../modules.md#imasktype)

#### Implementation of

[IGroup](../interfaces/IGroup.md).[mask](../interfaces/IGroup.md#mask)

#### Inherited from

[UI](UI.md).[mask](UI.md#mask)

#### Defined in

[src/ui/packages/display/src/UI.ts:84](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/display/src/UI.ts#L84)

___

### eraser

• `Optional` **eraser**: `boolean` \| [`IEraserType`](../modules.md#ierasertype)

#### Implementation of

[IGroup](../interfaces/IGroup.md).[eraser](../interfaces/IGroup.md#eraser)

#### Inherited from

[UI](UI.md).[eraser](UI.md#eraser)

#### Defined in

[src/ui/packages/display/src/UI.ts:87](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/display/src/UI.ts#L87)

___

### x

• `Optional` **x**: `number`

#### Implementation of

[IGroup](../interfaces/IGroup.md).[x](../interfaces/IGroup.md#x)

#### Inherited from

[UI](UI.md).[x](UI.md#x)

#### Defined in

[src/ui/packages/display/src/UI.ts:92](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/display/src/UI.ts#L92)

___

### y

• `Optional` **y**: `number`

#### Implementation of

[IGroup](../interfaces/IGroup.md).[y](../interfaces/IGroup.md#y)

#### Inherited from

[UI](UI.md).[y](UI.md#y)

#### Defined in

[src/ui/packages/display/src/UI.ts:95](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/display/src/UI.ts#L95)

___

### scaleX

• `Optional` **scaleX**: `number`

#### Implementation of

[IGroup](../interfaces/IGroup.md).[scaleX](../interfaces/IGroup.md#scalex)

#### Inherited from

[UI](UI.md).[scaleX](UI.md#scalex)

#### Defined in

[src/ui/packages/display/src/UI.ts:106](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/display/src/UI.ts#L106)

___

### scaleY

• `Optional` **scaleY**: `number`

#### Implementation of

[IGroup](../interfaces/IGroup.md).[scaleY](../interfaces/IGroup.md#scaley)

#### Inherited from

[UI](UI.md).[scaleY](UI.md#scaley)

#### Defined in

[src/ui/packages/display/src/UI.ts:109](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/display/src/UI.ts#L109)

___

### scaleFixed

• `Optional` **scaleFixed**: [`IScaleFixed`](../modules.md#iscalefixed)

#### Implementation of

[IGroup](../interfaces/IGroup.md).[scaleFixed](../interfaces/IGroup.md#scalefixed)

#### Inherited from

[UI](UI.md).[scaleFixed](UI.md#scalefixed)

#### Defined in

[src/ui/packages/display/src/UI.ts:112](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/display/src/UI.ts#L112)

___

### rotation

• `Optional` **rotation**: `number`

#### Implementation of

[IGroup](../interfaces/IGroup.md).[rotation](../interfaces/IGroup.md#rotation)

#### Inherited from

[UI](UI.md).[rotation](UI.md#rotation)

#### Defined in

[src/ui/packages/display/src/UI.ts:116](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/display/src/UI.ts#L116)

___

### skewX

• `Optional` **skewX**: `number`

#### Implementation of

[IGroup](../interfaces/IGroup.md).[skewX](../interfaces/IGroup.md#skewx)

#### Inherited from

[UI](UI.md).[skewX](UI.md#skewx)

#### Defined in

[src/ui/packages/display/src/UI.ts:120](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/display/src/UI.ts#L120)

___

### skewY

• `Optional` **skewY**: `number`

#### Implementation of

[IGroup](../interfaces/IGroup.md).[skewY](../interfaces/IGroup.md#skewy)

#### Inherited from

[UI](UI.md).[skewY](UI.md#skewy)

#### Defined in

[src/ui/packages/display/src/UI.ts:123](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/display/src/UI.ts#L123)

___

### offsetX

• `Optional` **offsetX**: `number`

#### Implementation of

[IGroup](../interfaces/IGroup.md).[offsetX](../interfaces/IGroup.md#offsetx)

#### Inherited from

[UI](UI.md).[offsetX](UI.md#offsetx)

#### Defined in

[src/ui/packages/display/src/UI.ts:128](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/display/src/UI.ts#L128)

___

### offsetY

• `Optional` **offsetY**: `number`

#### Implementation of

[IGroup](../interfaces/IGroup.md).[offsetY](../interfaces/IGroup.md#offsety)

#### Inherited from

[UI](UI.md).[offsetY](UI.md#offsety)

#### Defined in

[src/ui/packages/display/src/UI.ts:131](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/display/src/UI.ts#L131)

___

### scrollX

• `Optional` **scrollX**: `number`

#### Implementation of

[IGroup](../interfaces/IGroup.md).[scrollX](../interfaces/IGroup.md#scrollx)

#### Inherited from

[UI](UI.md).[scrollX](UI.md#scrollx)

#### Defined in

[src/ui/packages/display/src/UI.ts:135](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/display/src/UI.ts#L135)

___

### scrollY

• `Optional` **scrollY**: `number`

#### Implementation of

[IGroup](../interfaces/IGroup.md).[scrollY](../interfaces/IGroup.md#scrolly)

#### Inherited from

[UI](UI.md).[scrollY](UI.md#scrolly)

#### Defined in

[src/ui/packages/display/src/UI.ts:138](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/display/src/UI.ts#L138)

___

### origin

• `Optional` **origin**: [`IUnitPointData`](../interfaces/IUnitPointData.md) \| [`IDirection`](../modules.md#idirection)

#### Implementation of

[IGroup](../interfaces/IGroup.md).[origin](../interfaces/IGroup.md#origin)

#### Inherited from

[UI](UI.md).[origin](UI.md#origin)

#### Defined in

[src/ui/packages/display/src/UI.ts:143](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/display/src/UI.ts#L143)

___

### around

• `Optional` **around**: [`IUnitPointData`](../interfaces/IUnitPointData.md) \| [`IDirection`](../modules.md#idirection)

#### Implementation of

[IGroup](../interfaces/IGroup.md).[around](../interfaces/IGroup.md#around)

#### Inherited from

[UI](UI.md).[around](UI.md#around)

#### Defined in

[src/ui/packages/display/src/UI.ts:146](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/display/src/UI.ts#L146)

___

### lazy

• `Optional` **lazy**: `boolean`

#### Implementation of

[IGroup](../interfaces/IGroup.md).[lazy](../interfaces/IGroup.md#lazy)

#### Inherited from

[UI](UI.md).[lazy](UI.md#lazy)

#### Defined in

[src/ui/packages/display/src/UI.ts:151](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/display/src/UI.ts#L151)

___

### pixelRatio

• `Optional` **pixelRatio**: `number`

#### Implementation of

[IGroup](../interfaces/IGroup.md).[pixelRatio](../interfaces/IGroup.md#pixelratio)

#### Inherited from

[UI](UI.md).[pixelRatio](UI.md#pixelratio)

#### Defined in

[src/ui/packages/display/src/UI.ts:154](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/display/src/UI.ts#L154)

___

### renderSpread

• `Optional` **renderSpread**: [`IFourNumber`](../modules.md#ifournumber)

#### Implementation of

[IGroup](../interfaces/IGroup.md).[renderSpread](../interfaces/IGroup.md#renderspread)

#### Inherited from

[UI](UI.md).[renderSpread](UI.md#renderspread)

#### Defined in

[src/ui/packages/display/src/UI.ts:158](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/display/src/UI.ts#L158)

___

### path

• `Optional` **path**: `string` \| [`IPathCommandData`](../modules.md#ipathcommanddata) \| [`IPathCommandNode`](../modules.md#ipathcommandnode)[] \| [`IPathCommandObject`](../modules.md#ipathcommandobject)[]

#### Implementation of

[IGroup](../interfaces/IGroup.md).[path](../interfaces/IGroup.md#path)

#### Inherited from

[UI](UI.md).[path](UI.md#path)

#### Defined in

[src/ui/packages/display/src/UI.ts:163](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/display/src/UI.ts#L163)

___

### windingRule

• `Optional` **windingRule**: [`IWindingRule`](../modules.md#iwindingrule)

#### Implementation of

[IGroup](../interfaces/IGroup.md).[windingRule](../interfaces/IGroup.md#windingrule)

#### Inherited from

[UI](UI.md).[windingRule](UI.md#windingrule)

#### Defined in

[src/ui/packages/display/src/UI.ts:166](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/display/src/UI.ts#L166)

___

### closed

• `Optional` **closed**: `boolean`

#### Implementation of

[IGroup](../interfaces/IGroup.md).[closed](../interfaces/IGroup.md#closed)

#### Inherited from

[UI](UI.md).[closed](UI.md#closed)

#### Defined in

[src/ui/packages/display/src/UI.ts:169](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/display/src/UI.ts#L169)

___

### flow

• `Optional` **flow**: [`IFlowType`](../modules.md#iflowtype)

#### Implementation of

[IGroup](../interfaces/IGroup.md).[flow](../interfaces/IGroup.md#flow)

#### Inherited from

[UI](UI.md).[flow](UI.md#flow)

#### Defined in

[src/ui/packages/display/src/UI.ts:173](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/display/src/UI.ts#L173)

___

### padding

• `Optional` **padding**: [`IFourNumber`](../modules.md#ifournumber)

#### Implementation of

[IGroup](../interfaces/IGroup.md).[padding](../interfaces/IGroup.md#padding)

#### Inherited from

[UI](UI.md).[padding](UI.md#padding)

#### Defined in

[src/ui/packages/display/src/UI.ts:176](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/display/src/UI.ts#L176)

___

### gap

• `Optional` **gap**: [`IGap`](../modules.md#igap) \| [`IPointGap`](../interfaces/IPointGap.md)

#### Implementation of

[IGroup](../interfaces/IGroup.md).[gap](../interfaces/IGroup.md#gap)

#### Inherited from

[UI](UI.md).[gap](UI.md#gap)

#### Defined in

[src/ui/packages/display/src/UI.ts:178](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/display/src/UI.ts#L178)

___

### flowAlign

• `Optional` **flowAlign**: [`IFlowAxisAlign`](../interfaces/IFlowAxisAlign.md) \| [`IFlowAlign`](../modules.md#iflowalign)

#### Implementation of

[IGroup](../interfaces/IGroup.md).[flowAlign](../interfaces/IGroup.md#flowalign)

#### Inherited from

[UI](UI.md).[flowAlign](UI.md#flowalign)

#### Defined in

[src/ui/packages/display/src/UI.ts:180](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/display/src/UI.ts#L180)

___

### flowWrap

• `Optional` **flowWrap**: [`IFlowWrap`](../modules.md#iflowwrap)

#### Implementation of

[IGroup](../interfaces/IGroup.md).[flowWrap](../interfaces/IGroup.md#flowwrap)

#### Inherited from

[UI](UI.md).[flowWrap](UI.md#flowwrap)

#### Defined in

[src/ui/packages/display/src/UI.ts:182](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/display/src/UI.ts#L182)

___

### itemBox

• `Optional` **itemBox**: [`IFlowBoxType`](../modules.md#iflowboxtype)

#### Implementation of

[IGroup](../interfaces/IGroup.md).[itemBox](../interfaces/IGroup.md#itembox)

#### Inherited from

[UI](UI.md).[itemBox](UI.md#itembox)

#### Defined in

[src/ui/packages/display/src/UI.ts:185](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/display/src/UI.ts#L185)

___

### inFlow

• `Optional` **inFlow**: `boolean`

#### Implementation of

[IGroup](../interfaces/IGroup.md).[inFlow](../interfaces/IGroup.md#inflow)

#### Inherited from

[UI](UI.md).[inFlow](UI.md#inflow)

#### Defined in

[src/ui/packages/display/src/UI.ts:187](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/display/src/UI.ts#L187)

___

### autoWidth

• `Optional` **autoWidth**: [`IAutoSize`](../modules.md#iautosize)

#### Implementation of

[IGroup](../interfaces/IGroup.md).[autoWidth](../interfaces/IGroup.md#autowidth)

#### Inherited from

[UI](UI.md).[autoWidth](UI.md#autowidth)

#### Defined in

[src/ui/packages/display/src/UI.ts:190](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/display/src/UI.ts#L190)

___

### autoHeight

• `Optional` **autoHeight**: [`IAutoSize`](../modules.md#iautosize)

#### Implementation of

[IGroup](../interfaces/IGroup.md).[autoHeight](../interfaces/IGroup.md#autoheight)

#### Inherited from

[UI](UI.md).[autoHeight](UI.md#autoheight)

#### Defined in

[src/ui/packages/display/src/UI.ts:192](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/display/src/UI.ts#L192)

___

### lockRatio

• `Optional` **lockRatio**: `boolean`

#### Implementation of

[IGroup](../interfaces/IGroup.md).[lockRatio](../interfaces/IGroup.md#lockratio)

#### Inherited from

[UI](UI.md).[lockRatio](UI.md#lockratio)

#### Defined in

[src/ui/packages/display/src/UI.ts:195](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/display/src/UI.ts#L195)

___

### autoBox

• `Optional` **autoBox**: [`IAutoBoxData`](../interfaces/IAutoBoxData.md) \| [`IConstraint`](../interfaces/IConstraint.md)

#### Implementation of

[IGroup](../interfaces/IGroup.md).[autoBox](../interfaces/IGroup.md#autobox)

#### Inherited from

[UI](UI.md).[autoBox](UI.md#autobox)

#### Defined in

[src/ui/packages/display/src/UI.ts:197](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/display/src/UI.ts#L197)

___

### widthRange

• `Optional` **widthRange**: [`IRangeSize`](../interfaces/IRangeSize.md)

#### Implementation of

[IGroup](../interfaces/IGroup.md).[widthRange](../interfaces/IGroup.md#widthrange)

#### Inherited from

[UI](UI.md).[widthRange](UI.md#widthrange)

#### Defined in

[src/ui/packages/display/src/UI.ts:200](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/display/src/UI.ts#L200)

___

### heightRange

• `Optional` **heightRange**: [`IRangeSize`](../interfaces/IRangeSize.md)

#### Implementation of

[IGroup](../interfaces/IGroup.md).[heightRange](../interfaces/IGroup.md#heightrange)

#### Inherited from

[UI](UI.md).[heightRange](UI.md#heightrange)

#### Defined in

[src/ui/packages/display/src/UI.ts:203](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/display/src/UI.ts#L203)

___

### draggable

• `Optional` **draggable**: `boolean` \| [`IAxis`](../modules.md#iaxis)

#### Implementation of

[IGroup](../interfaces/IGroup.md).[draggable](../interfaces/IGroup.md#draggable)

#### Inherited from

[UI](UI.md).[draggable](UI.md#draggable)

#### Defined in

[src/ui/packages/display/src/UI.ts:208](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/display/src/UI.ts#L208)

___

### dragBounds

• `Optional` **dragBounds**: `"parent"` \| [`IBoundsData`](../interfaces/IBoundsData.md)

#### Implementation of

[IGroup](../interfaces/IGroup.md).[dragBounds](../interfaces/IGroup.md#dragbounds)

#### Inherited from

[UI](UI.md).[dragBounds](UI.md#dragbounds)

#### Defined in

[src/ui/packages/display/src/UI.ts:211](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/display/src/UI.ts#L211)

___

### dragBoundsType

• `Optional` **dragBoundsType**: [`IDragBoundsType`](../modules.md#idragboundstype)

#### Implementation of

[IGroup](../interfaces/IGroup.md).[dragBoundsType](../interfaces/IGroup.md#dragboundstype)

#### Inherited from

[UI](UI.md).[dragBoundsType](UI.md#dragboundstype)

#### Defined in

[src/ui/packages/display/src/UI.ts:214](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/display/src/UI.ts#L214)

___

### editable

• `Optional` **editable**: `boolean`

#### Implementation of

[IGroup](../interfaces/IGroup.md).[editable](../interfaces/IGroup.md#editable)

#### Inherited from

[UI](UI.md).[editable](UI.md#editable)

#### Defined in

[src/ui/packages/display/src/UI.ts:218](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/display/src/UI.ts#L218)

___

### hittable

• `Optional` **hittable**: `boolean`

#### Implementation of

[IGroup](../interfaces/IGroup.md).[hittable](../interfaces/IGroup.md#hittable)

#### Inherited from

[UI](UI.md).[hittable](UI.md#hittable)

#### Defined in

[src/ui/packages/display/src/UI.ts:223](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/display/src/UI.ts#L223)

___

### hitFill

• `Optional` **hitFill**: [`IHitType`](../modules.md#ihittype)

#### Implementation of

[IGroup](../interfaces/IGroup.md).[hitFill](../interfaces/IGroup.md#hitfill)

#### Inherited from

[UI](UI.md).[hitFill](UI.md#hitfill)

#### Defined in

[src/ui/packages/display/src/UI.ts:226](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/display/src/UI.ts#L226)

___

### hitStroke

• `Optional` **hitStroke**: [`IHitType`](../modules.md#ihittype)

#### Implementation of

[IGroup](../interfaces/IGroup.md).[hitStroke](../interfaces/IGroup.md#hitstroke)

#### Inherited from

[UI](UI.md).[hitStroke](UI.md#hitstroke)

#### Defined in

[src/ui/packages/display/src/UI.ts:229](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/display/src/UI.ts#L229)

___

### hitBox

• `Optional` **hitBox**: `boolean`

#### Implementation of

[IGroup](../interfaces/IGroup.md).[hitBox](../interfaces/IGroup.md#hitbox)

#### Inherited from

[UI](UI.md).[hitBox](UI.md#hitbox)

#### Defined in

[src/ui/packages/display/src/UI.ts:232](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/display/src/UI.ts#L232)

___

### hitChildren

• `Optional` **hitChildren**: `boolean`

#### Implementation of

[IGroup](../interfaces/IGroup.md).[hitChildren](../interfaces/IGroup.md#hitchildren)

#### Inherited from

[UI](UI.md).[hitChildren](UI.md#hitchildren)

#### Defined in

[src/ui/packages/display/src/UI.ts:235](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/display/src/UI.ts#L235)

___

### hitSelf

• `Optional` **hitSelf**: `boolean`

#### Implementation of

[IGroup](../interfaces/IGroup.md).[hitSelf](../interfaces/IGroup.md#hitself)

#### Inherited from

[UI](UI.md).[hitSelf](UI.md#hitself)

#### Defined in

[src/ui/packages/display/src/UI.ts:238](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/display/src/UI.ts#L238)

___

### hitRadius

• `Optional` **hitRadius**: `number`

#### Implementation of

[IGroup](../interfaces/IGroup.md).[hitRadius](../interfaces/IGroup.md#hitradius)

#### Inherited from

[UI](UI.md).[hitRadius](UI.md#hitradius)

#### Defined in

[src/ui/packages/display/src/UI.ts:241](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/display/src/UI.ts#L241)

___

### cursor

• `Optional` **cursor**: [`ICursorType`](../modules.md#icursortype) \| [`ICursorType`](../modules.md#icursortype)[]

#### Implementation of

[IGroup](../interfaces/IGroup.md).[cursor](../interfaces/IGroup.md#cursor)

#### Inherited from

[UI](UI.md).[cursor](UI.md#cursor)

#### Defined in

[src/ui/packages/display/src/UI.ts:244](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/display/src/UI.ts#L244)

___

### fill

• `Optional` **fill**: [`IFill`](../modules.md#ifill)

#### Implementation of

[IGroup](../interfaces/IGroup.md).[fill](../interfaces/IGroup.md#fill)

#### Inherited from

[UI](UI.md).[fill](UI.md#fill)

#### Defined in

[src/ui/packages/display/src/UI.ts:252](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/display/src/UI.ts#L252)

___

### stroke

• `Optional` **stroke**: [`IStroke`](../modules.md#istroke)

#### Implementation of

[IGroup](../interfaces/IGroup.md).[stroke](../interfaces/IGroup.md#stroke)

#### Inherited from

[UI](UI.md).[stroke](UI.md#stroke)

#### Defined in

[src/ui/packages/display/src/UI.ts:257](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/display/src/UI.ts#L257)

___

### strokeAlign

• `Optional` **strokeAlign**: [`IStrokeAlign`](../modules.md#istrokealign)

#### Implementation of

[IGroup](../interfaces/IGroup.md).[strokeAlign](../interfaces/IGroup.md#strokealign)

#### Inherited from

[UI](UI.md).[strokeAlign](UI.md#strokealign)

#### Defined in

[src/ui/packages/display/src/UI.ts:260](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/display/src/UI.ts#L260)

___

### strokeWidth

• `Optional` **strokeWidth**: `string` \| [`IFourNumber`](../modules.md#ifournumber)

#### Implementation of

[IGroup](../interfaces/IGroup.md).[strokeWidth](../interfaces/IGroup.md#strokewidth)

#### Inherited from

[UI](UI.md).[strokeWidth](UI.md#strokewidth)

#### Defined in

[src/ui/packages/display/src/UI.ts:263](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/display/src/UI.ts#L263)

___

### strokeScaleFixed

• `Optional` **strokeScaleFixed**: [`IScaleFixed`](../modules.md#iscalefixed)

#### Implementation of

[IGroup](../interfaces/IGroup.md).[strokeScaleFixed](../interfaces/IGroup.md#strokescalefixed)

#### Inherited from

[UI](UI.md).[strokeScaleFixed](UI.md#strokescalefixed)

#### Defined in

[src/ui/packages/display/src/UI.ts:266](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/display/src/UI.ts#L266)

___

### strokeCap

• `Optional` **strokeCap**: [`IStrokeCap`](../modules.md#istrokecap)

#### Implementation of

[IGroup](../interfaces/IGroup.md).[strokeCap](../interfaces/IGroup.md#strokecap)

#### Inherited from

[UI](UI.md).[strokeCap](UI.md#strokecap)

#### Defined in

[src/ui/packages/display/src/UI.ts:273](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/display/src/UI.ts#L273)

___

### strokeJoin

• `Optional` **strokeJoin**: [`IStrokeJoin`](../modules.md#istrokejoin)

#### Implementation of

[IGroup](../interfaces/IGroup.md).[strokeJoin](../interfaces/IGroup.md#strokejoin)

#### Inherited from

[UI](UI.md).[strokeJoin](UI.md#strokejoin)

#### Defined in

[src/ui/packages/display/src/UI.ts:276](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/display/src/UI.ts#L276)

___

### dashPattern

• `Optional` **dashPattern**: `string` \| `number`[]

#### Implementation of

[IGroup](../interfaces/IGroup.md).[dashPattern](../interfaces/IGroup.md#dashpattern)

#### Inherited from

[UI](UI.md).[dashPattern](UI.md#dashpattern)

#### Defined in

[src/ui/packages/display/src/UI.ts:279](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/display/src/UI.ts#L279)

___

### dashOffset

• `Optional` **dashOffset**: `number`

#### Implementation of

[IGroup](../interfaces/IGroup.md).[dashOffset](../interfaces/IGroup.md#dashoffset)

#### Inherited from

[UI](UI.md).[dashOffset](UI.md#dashoffset)

#### Defined in

[src/ui/packages/display/src/UI.ts:282](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/display/src/UI.ts#L282)

___

### miterLimit

• `Optional` **miterLimit**: `number`

#### Implementation of

[IGroup](../interfaces/IGroup.md).[miterLimit](../interfaces/IGroup.md#miterlimit)

#### Inherited from

[UI](UI.md).[miterLimit](UI.md#miterlimit)

#### Defined in

[src/ui/packages/display/src/UI.ts:285](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/display/src/UI.ts#L285)

___

### startArrow

• `Optional` **startArrow**: [`IArrowStyle`](../modules.md#iarrowstyle)

#### Implementation of

[IGroup](../interfaces/IGroup.md).[startArrow](../interfaces/IGroup.md#startarrow)

#### Inherited from

[UI](UI.md).[startArrow](UI.md#startarrow)

#### Defined in

[src/ui/packages/display/src/UI.ts:290](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/display/src/UI.ts#L290)

___

### endArrow

• `Optional` **endArrow**: [`IArrowStyle`](../modules.md#iarrowstyle)

#### Implementation of

[IGroup](../interfaces/IGroup.md).[endArrow](../interfaces/IGroup.md#endarrow)

#### Inherited from

[UI](UI.md).[endArrow](UI.md#endarrow)

#### Defined in

[src/ui/packages/display/src/UI.ts:292](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/display/src/UI.ts#L292)

___

### cornerRadius

• `Optional` **cornerRadius**: `string` \| [`IFourNumber`](../modules.md#ifournumber)

#### Implementation of

[IGroup](../interfaces/IGroup.md).[cornerRadius](../interfaces/IGroup.md#cornerradius)

#### Inherited from

[UI](UI.md).[cornerRadius](UI.md#cornerradius)

#### Defined in

[src/ui/packages/display/src/UI.ts:297](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/display/src/UI.ts#L297)

___

### cornerSmoothing

• `Optional` **cornerSmoothing**: `number`

#### Implementation of

[IGroup](../interfaces/IGroup.md).[cornerSmoothing](../interfaces/IGroup.md#cornersmoothing)

#### Inherited from

[UI](UI.md).[cornerSmoothing](UI.md#cornersmoothing)

#### Defined in

[src/ui/packages/display/src/UI.ts:300](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/display/src/UI.ts#L300)

___

### shadow

• `Optional` **shadow**: `string` \| [`IShadowEffect`](../interfaces/IShadowEffect.md) \| [`IShadowEffect`](../interfaces/IShadowEffect.md)[]

#### Implementation of

[IGroup](../interfaces/IGroup.md).[shadow](../interfaces/IGroup.md#shadow)

#### Inherited from

[UI](UI.md).[shadow](UI.md#shadow)

#### Defined in

[src/ui/packages/display/src/UI.ts:305](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/display/src/UI.ts#L305)

___

### innerShadow

• `Optional` **innerShadow**: `string` \| [`IShadowEffect`](../interfaces/IShadowEffect.md) \| [`IShadowEffect`](../interfaces/IShadowEffect.md)[]

#### Implementation of

[IGroup](../interfaces/IGroup.md).[innerShadow](../interfaces/IGroup.md#innershadow)

#### Inherited from

[UI](UI.md).[innerShadow](UI.md#innershadow)

#### Defined in

[src/ui/packages/display/src/UI.ts:308](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/display/src/UI.ts#L308)

___

### blur

• `Optional` **blur**: `number` \| [`IBlurEffect`](../interfaces/IBlurEffect.md)

#### Implementation of

[IGroup](../interfaces/IGroup.md).[blur](../interfaces/IGroup.md#blur)

#### Inherited from

[UI](UI.md).[blur](UI.md#blur)

#### Defined in

[src/ui/packages/display/src/UI.ts:311](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/display/src/UI.ts#L311)

___

### backgroundBlur

• `Optional` **backgroundBlur**: `number` \| [`IBlurEffect`](../interfaces/IBlurEffect.md)

#### Implementation of

[IGroup](../interfaces/IGroup.md).[backgroundBlur](../interfaces/IGroup.md#backgroundblur)

#### Inherited from

[UI](UI.md).[backgroundBlur](UI.md#backgroundblur)

#### Defined in

[src/ui/packages/display/src/UI.ts:314](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/display/src/UI.ts#L314)

___

### grayscale

• `Optional` **grayscale**: `number` \| [`IGrayscaleEffect`](../interfaces/IGrayscaleEffect.md)

#### Implementation of

[IGroup](../interfaces/IGroup.md).[grayscale](../interfaces/IGroup.md#grayscale)

#### Inherited from

[UI](UI.md).[grayscale](UI.md#grayscale)

#### Defined in

[src/ui/packages/display/src/UI.ts:317](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/display/src/UI.ts#L317)

___

### filter

• `Optional` **filter**: [`IFilter`](../interfaces/IFilter.md) \| [`IFilter`](../interfaces/IFilter.md)[]

#### Implementation of

[IGroup](../interfaces/IGroup.md).[filter](../interfaces/IGroup.md#filter)

#### Inherited from

[UI](UI.md).[filter](UI.md#filter)

#### Defined in

[src/ui/packages/display/src/UI.ts:320](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/display/src/UI.ts#L320)

___

### complex

• `Optional` **complex**: `boolean`

#### Implementation of

[IGroup](../interfaces/IGroup.md).[complex](../interfaces/IGroup.md#complex)

#### Inherited from

[UI](UI.md).[complex](UI.md#complex)

#### Defined in

[src/ui/packages/display/src/UI.ts:325](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/display/src/UI.ts#L325)

___

### animation

• `Optional` **animation**: [`IAnimation`](../modules.md#ianimation) \| [`IAnimation`](../modules.md#ianimation)[]

#### Implementation of

[IGroup](../interfaces/IGroup.md).[animation](../interfaces/IGroup.md#animation)

#### Inherited from

[UI](UI.md).[animation](UI.md#animation)

#### Defined in

[src/ui/packages/display/src/UI.ts:330](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/display/src/UI.ts#L330)

___

### animationOut

• `Optional` **animationOut**: [`IAnimation`](../modules.md#ianimation) \| [`IAnimation`](../modules.md#ianimation)[]

#### Implementation of

[IGroup](../interfaces/IGroup.md).[animationOut](../interfaces/IGroup.md#animationout)

#### Inherited from

[UI](UI.md).[animationOut](UI.md#animationout)

#### Defined in

[src/ui/packages/display/src/UI.ts:332](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/display/src/UI.ts#L332)

___

### transition

• `Optional` **transition**: [`ITransition`](../modules.md#itransition)

#### Implementation of

[IGroup](../interfaces/IGroup.md).[transition](../interfaces/IGroup.md#transition)

#### Inherited from

[UI](UI.md).[transition](UI.md#transition)

#### Defined in

[src/ui/packages/display/src/UI.ts:335](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/display/src/UI.ts#L335)

___

### transitionOut

• `Optional` **transitionOut**: [`ITransition`](../modules.md#itransition)

#### Implementation of

[IGroup](../interfaces/IGroup.md).[transitionOut](../interfaces/IGroup.md#transitionout)

#### Inherited from

[UI](UI.md).[transitionOut](UI.md#transitionout)

#### Defined in

[src/ui/packages/display/src/UI.ts:337](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/display/src/UI.ts#L337)

___

### motionPath

• `Optional` **motionPath**: `boolean`

#### Implementation of

[IGroup](../interfaces/IGroup.md).[motionPath](../interfaces/IGroup.md#motionpath)

#### Inherited from

[UI](UI.md).[motionPath](UI.md#motionpath)

#### Defined in

[src/ui/packages/display/src/UI.ts:342](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/display/src/UI.ts#L342)

___

### motionPrecision

• `Optional` **motionPrecision**: `number`

#### Implementation of

[IGroup](../interfaces/IGroup.md).[motionPrecision](../interfaces/IGroup.md#motionprecision)

#### Inherited from

[UI](UI.md).[motionPrecision](UI.md#motionprecision)

#### Defined in

[src/ui/packages/display/src/UI.ts:344](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/display/src/UI.ts#L344)

___

### motion

• `Optional` **motion**: `number` \| [`IUnitData`](../interfaces/IUnitData.md)

#### Implementation of

[IGroup](../interfaces/IGroup.md).[motion](../interfaces/IGroup.md#motion)

#### Inherited from

[UI](UI.md).[motion](UI.md#motion)

#### Defined in

[src/ui/packages/display/src/UI.ts:347](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/display/src/UI.ts#L347)

___

### motionRotation

• `Optional` **motionRotation**: `number` \| `boolean`

#### Implementation of

[IGroup](../interfaces/IGroup.md).[motionRotation](../interfaces/IGroup.md#motionrotation)

#### Inherited from

[UI](UI.md).[motionRotation](UI.md#motionrotation)

#### Defined in

[src/ui/packages/display/src/UI.ts:349](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/display/src/UI.ts#L349)

___

### states

• `Optional` **states**: [`IStates`](../interfaces/IStates.md)

#### Implementation of

[IGroup](../interfaces/IGroup.md).[states](../interfaces/IGroup.md#states)

#### Inherited from

[UI](UI.md).[states](UI.md#states)

#### Defined in

[src/ui/packages/display/src/UI.ts:354](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/display/src/UI.ts#L354)

___

### state

• `Optional` **state**: `string`

#### Implementation of

[IGroup](../interfaces/IGroup.md).[state](../interfaces/IGroup.md#state)

#### Inherited from

[UI](UI.md).[state](UI.md#state)

#### Defined in

[src/ui/packages/display/src/UI.ts:356](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/display/src/UI.ts#L356)

___

### selected

• `Optional` **selected**: `boolean`

#### Implementation of

[IGroup](../interfaces/IGroup.md).[selected](../interfaces/IGroup.md#selected)

#### Inherited from

[UI](UI.md).[selected](UI.md#selected)

#### Defined in

[src/ui/packages/display/src/UI.ts:359](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/display/src/UI.ts#L359)

___

### disabled

• `Optional` **disabled**: `boolean`

#### Implementation of

[IGroup](../interfaces/IGroup.md).[disabled](../interfaces/IGroup.md#disabled)

#### Inherited from

[UI](UI.md).[disabled](UI.md#disabled)

#### Defined in

[src/ui/packages/display/src/UI.ts:361](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/display/src/UI.ts#L361)

___

### normalStyle

• `Optional` **normalStyle**: [`IStateStyle`](../interfaces/IStateStyle.md)

#### Implementation of

[IGroup](../interfaces/IGroup.md).[normalStyle](../interfaces/IGroup.md#normalstyle)

#### Inherited from

[UI](UI.md).[normalStyle](UI.md#normalstyle)

#### Defined in

[src/ui/packages/display/src/UI.ts:364](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/display/src/UI.ts#L364)

___

### hoverStyle

• `Optional` **hoverStyle**: [`IStateStyle`](../interfaces/IStateStyle.md)

#### Implementation of

[IGroup](../interfaces/IGroup.md).[hoverStyle](../interfaces/IGroup.md#hoverstyle)

#### Inherited from

[UI](UI.md).[hoverStyle](UI.md#hoverstyle)

#### Defined in

[src/ui/packages/display/src/UI.ts:366](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/display/src/UI.ts#L366)

___

### pressStyle

• `Optional` **pressStyle**: [`IStateStyle`](../interfaces/IStateStyle.md)

#### Implementation of

[IGroup](../interfaces/IGroup.md).[pressStyle](../interfaces/IGroup.md#pressstyle)

#### Inherited from

[UI](UI.md).[pressStyle](UI.md#pressstyle)

#### Defined in

[src/ui/packages/display/src/UI.ts:368](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/display/src/UI.ts#L368)

___

### focusStyle

• `Optional` **focusStyle**: [`IStateStyle`](../interfaces/IStateStyle.md)

#### Implementation of

[IGroup](../interfaces/IGroup.md).[focusStyle](../interfaces/IGroup.md#focusstyle)

#### Inherited from

[UI](UI.md).[focusStyle](UI.md#focusstyle)

#### Defined in

[src/ui/packages/display/src/UI.ts:370](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/display/src/UI.ts#L370)

___

### selectedStyle

• `Optional` **selectedStyle**: [`IStateStyle`](../interfaces/IStateStyle.md)

#### Implementation of

[IGroup](../interfaces/IGroup.md).[selectedStyle](../interfaces/IGroup.md#selectedstyle)

#### Inherited from

[UI](UI.md).[selectedStyle](UI.md#selectedstyle)

#### Defined in

[src/ui/packages/display/src/UI.ts:372](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/display/src/UI.ts#L372)

___

### disabledStyle

• `Optional` **disabledStyle**: [`IStateStyle`](../interfaces/IStateStyle.md)

#### Implementation of

[IGroup](../interfaces/IGroup.md).[disabledStyle](../interfaces/IGroup.md#disabledstyle)

#### Inherited from

[UI](UI.md).[disabledStyle](UI.md#disabledstyle)

#### Defined in

[src/ui/packages/display/src/UI.ts:374](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/display/src/UI.ts#L374)

___

### placeholderStyle

• `Optional` **placeholderStyle**: [`IStateStyle`](../interfaces/IStateStyle.md)

#### Implementation of

[IGroup](../interfaces/IGroup.md).[placeholderStyle](../interfaces/IGroup.md#placeholderstyle)

#### Inherited from

[UI](UI.md).[placeholderStyle](UI.md#placeholderstyle)

#### Defined in

[src/ui/packages/display/src/UI.ts:377](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/display/src/UI.ts#L377)

___

### placeholderColor

• `Optional` **placeholderColor**: `string`

#### Implementation of

[IGroup](../interfaces/IGroup.md).[placeholderColor](../interfaces/IGroup.md#placeholdercolor)

#### Inherited from

[UI](UI.md).[placeholderColor](UI.md#placeholdercolor)

#### Defined in

[src/ui/packages/display/src/UI.ts:380](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/display/src/UI.ts#L380)

___

### placeholderDelay

• `Optional` **placeholderDelay**: `number`

#### Implementation of

[IGroup](../interfaces/IGroup.md).[placeholderDelay](../interfaces/IGroup.md#placeholderdelay)

#### Inherited from

[UI](UI.md).[placeholderDelay](UI.md#placeholderdelay)

#### Defined in

[src/ui/packages/display/src/UI.ts:383](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/display/src/UI.ts#L383)

___

### button

• `Optional` **button**: `boolean`

#### Implementation of

[IGroup](../interfaces/IGroup.md).[button](../interfaces/IGroup.md#button)

#### Inherited from

[UI](UI.md).[button](UI.md#button)

#### Defined in

[src/ui/packages/display/src/UI.ts:386](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/display/src/UI.ts#L386)

___

### editConfig

• **editConfig**: [`IEditorConfig`](../interfaces/IEditorConfig.md)

#### Implementation of

[IGroup](../interfaces/IGroup.md).[editConfig](../interfaces/IGroup.md#editconfig)

#### Inherited from

[UI](UI.md).[editConfig](UI.md#editconfig)

#### Defined in

[src/ui/packages/display/src/UI.ts:391](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/display/src/UI.ts#L391)

___

### editOuter

• **editOuter**: `string`

#### Implementation of

[IGroup](../interfaces/IGroup.md).[editOuter](../interfaces/IGroup.md#editouter)

#### Inherited from

[UI](UI.md).[editOuter](UI.md#editouter)

#### Defined in

[src/ui/packages/display/src/UI.ts:393](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/display/src/UI.ts#L393)

___

### editInner

• **editInner**: `string`

#### Implementation of

[IGroup](../interfaces/IGroup.md).[editInner](../interfaces/IGroup.md#editinner)

#### Inherited from

[UI](UI.md).[editInner](UI.md#editinner)

#### Defined in

[src/ui/packages/display/src/UI.ts:395](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/display/src/UI.ts#L395)

___

### data

• **data**: [`IObject`](../interfaces/IObject.md)

#### Implementation of

[IGroup](../interfaces/IGroup.md).[data](../interfaces/IGroup.md#data)

#### Inherited from

[UI](UI.md).[data](UI.md#data)

#### Defined in

[src/ui/packages/display/src/UI.ts:400](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/display/src/UI.ts#L400)

___

### useFastShadow

• `Optional` **useFastShadow**: `boolean`

#### Implementation of

[IGroup](../interfaces/IGroup.md).[useFastShadow](../interfaces/IGroup.md#usefastshadow)

#### Inherited from

[UI](UI.md).[useFastShadow](UI.md#usefastshadow)

#### Defined in

[src/ui/packages/display/src/UI.ts:409](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/display/src/UI.ts#L409)

___

### \_\_box

• `Optional` **\_\_box**: [`IUI`](../interfaces/IUI.md)

#### Implementation of

[IGroup](../interfaces/IGroup.md).[__box](../interfaces/IGroup.md#__box)

#### Inherited from

[UI](UI.md).[__box](UI.md#__box)

#### Defined in

[src/ui/packages/display/src/UI.ts:411](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/display/src/UI.ts#L411)

___

### \_\_animate

• `Optional` **\_\_animate**: [`IAnimate`](../interfaces/IAnimate.md) \| [`IAnimateList`](../interfaces/IAnimateList.md)

#### Implementation of

[IGroup](../interfaces/IGroup.md).[__animate](../interfaces/IGroup.md#__animate)

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

[IGroup](../interfaces/IGroup.md).[tag](../interfaces/IGroup.md#tag)

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

[IGroup](../interfaces/IGroup.md).[tag](../interfaces/IGroup.md#tag)

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

[IGroup](../interfaces/IGroup.md).[innerName](../interfaces/IGroup.md#innername)

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

[IGroup](../interfaces/IGroup.md).[__DataProcessor](../interfaces/IGroup.md#__dataprocessor)

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

[IGroup](../interfaces/IGroup.md).[__LayoutProcessor](../interfaces/IGroup.md#__layoutprocessor)

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

[IGroup](../interfaces/IGroup.md).[leaferIsCreated](../interfaces/IGroup.md#leaferiscreated)

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

[IGroup](../interfaces/IGroup.md).[leaferIsReady](../interfaces/IGroup.md#leaferisready)

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

[IGroup](../interfaces/IGroup.md).[isLeafer](../interfaces/IGroup.md#isleafer)

#### Inherited from

UI.isLeafer

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:45](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/display/src/Leaf.ts#L45)

___

### isBranchLeaf

• `get` **isBranchLeaf**(): `boolean`

#### Returns

`boolean`

#### Implementation of

[IGroup](../interfaces/IGroup.md).[isBranchLeaf](../interfaces/IGroup.md#isbranchleaf)

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

[IGroup](../interfaces/IGroup.md).[__localMatrix](../interfaces/IGroup.md#__localmatrix)

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

[IGroup](../interfaces/IGroup.md).[__localBoxBounds](../interfaces/IGroup.md#__localboxbounds)

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

[IGroup](../interfaces/IGroup.md).[worldTransform](../interfaces/IGroup.md#worldtransform)

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

[IGroup](../interfaces/IGroup.md).[localTransform](../interfaces/IGroup.md#localtransform)

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

[IGroup](../interfaces/IGroup.md).[scrollWorldTransform](../interfaces/IGroup.md#scrollworldtransform)

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

[IGroup](../interfaces/IGroup.md).[boxBounds](../interfaces/IGroup.md#boxbounds)

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

[IGroup](../interfaces/IGroup.md).[renderBounds](../interfaces/IGroup.md#renderbounds)

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

[IGroup](../interfaces/IGroup.md).[worldBoxBounds](../interfaces/IGroup.md#worldboxbounds)

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

[IGroup](../interfaces/IGroup.md).[worldStrokeBounds](../interfaces/IGroup.md#worldstrokebounds)

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

[IGroup](../interfaces/IGroup.md).[worldRenderBounds](../interfaces/IGroup.md#worldrenderbounds)

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

[IGroup](../interfaces/IGroup.md).[worldOpacity](../interfaces/IGroup.md#worldopacity)

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

[IGroup](../interfaces/IGroup.md).[__worldFlipped](../interfaces/IGroup.md#__worldflipped)

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

[IGroup](../interfaces/IGroup.md).[__onlyHitMask](../interfaces/IGroup.md#__onlyhitmask)

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

[IGroup](../interfaces/IGroup.md).[__ignoreHitWorld](../interfaces/IGroup.md#__ignorehitworld)

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

[IGroup](../interfaces/IGroup.md).[__inLazyBounds](../interfaces/IGroup.md#__inlazybounds)

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

[IGroup](../interfaces/IGroup.md).[pathInputed](../interfaces/IGroup.md#pathinputed)

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

[IGroup](../interfaces/IGroup.md).[event](../interfaces/IGroup.md#event)

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

[IGroup](../interfaces/IGroup.md).[__tag](../interfaces/IGroup.md#__tag)

#### Overrides

UI.\_\_tag

#### Defined in

[src/ui/packages/display/src/Group.ts:14](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/display/src/Group.ts#L14)

___

### isBranch

• `get` **isBranch**(): `boolean`

#### Returns

`boolean`

#### Implementation of

[IGroup](../interfaces/IGroup.md).[isBranch](../interfaces/IGroup.md#isbranch)

#### Overrides

UI.isBranch

#### Defined in

[src/ui/packages/display/src/Group.ts:16](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/display/src/Group.ts#L16)

___

### app

• `get` **app**(): [`ILeafer`](../interfaces/ILeafer.md)

#### Returns

[`ILeafer`](../interfaces/ILeafer.md)

#### Implementation of

[IGroup](../interfaces/IGroup.md).[app](../interfaces/IGroup.md#app)

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

[IGroup](../interfaces/IGroup.md).[isFrame](../interfaces/IGroup.md#isframe)

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

[IGroup](../interfaces/IGroup.md).[scale](../interfaces/IGroup.md#scale)

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

[IGroup](../interfaces/IGroup.md).[scale](../interfaces/IGroup.md#scale)

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

[IGroup](../interfaces/IGroup.md).[isAutoWidth](../interfaces/IGroup.md#isautowidth)

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

[IGroup](../interfaces/IGroup.md).[isAutoHeight](../interfaces/IGroup.md#isautoheight)

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

[IGroup](../interfaces/IGroup.md).[pen](../interfaces/IGroup.md#pen)

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

[IGroup](../interfaces/IGroup.md).[resetCustom](../interfaces/IGroup.md#resetcustom)

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

[IGroup](../interfaces/IGroup.md).[waitParent](../interfaces/IGroup.md#waitparent)

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

[IGroup](../interfaces/IGroup.md).[waitLeafer](../interfaces/IGroup.md#waitleafer)

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

[IGroup](../interfaces/IGroup.md).[nextRender](../interfaces/IGroup.md#nextrender)

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

[IGroup](../interfaces/IGroup.md).[removeNextRender](../interfaces/IGroup.md#removenextrender)

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

[IGroup](../interfaces/IGroup.md).[__bindLeafer](../interfaces/IGroup.md#__bindleafer)

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

[IGroup](../interfaces/IGroup.md).[setAttr](../interfaces/IGroup.md#setattr)

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

[IGroup](../interfaces/IGroup.md).[getAttr](../interfaces/IGroup.md#getattr)

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

[IGroup](../interfaces/IGroup.md).[getComputedAttr](../interfaces/IGroup.md#getcomputedattr)

#### Inherited from

[UI](UI.md).[getComputedAttr](UI.md#getcomputedattr)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:201](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/display/src/Leaf.ts#L201)

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

[IGroup](../interfaces/IGroup.md).[toString](../interfaces/IGroup.md#tostring)

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

[IGroup](../interfaces/IGroup.md).[toSVG](../interfaces/IGroup.md#tosvg)

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

[IGroup](../interfaces/IGroup.md).[__SVG](../interfaces/IGroup.md#__svg)

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

[IGroup](../interfaces/IGroup.md).[toHTML](../interfaces/IGroup.md#tohtml)

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

[IGroup](../interfaces/IGroup.md).[__setAttr](../interfaces/IGroup.md#__setattr)

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

[IGroup](../interfaces/IGroup.md).[__getAttr](../interfaces/IGroup.md#__getattr)

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

[IGroup](../interfaces/IGroup.md).[setProxyAttr](../interfaces/IGroup.md#setproxyattr)

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

[IGroup](../interfaces/IGroup.md).[getProxyAttr](../interfaces/IGroup.md#getproxyattr)

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

[IGroup](../interfaces/IGroup.md).[focus](../interfaces/IGroup.md#focus)

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

[IGroup](../interfaces/IGroup.md).[updateState](../interfaces/IGroup.md#updatestate)

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

[IGroup](../interfaces/IGroup.md).[updateLayout](../interfaces/IGroup.md#updatelayout)

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

[IGroup](../interfaces/IGroup.md).[forceUpdate](../interfaces/IGroup.md#forceupdate)

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

[IGroup](../interfaces/IGroup.md).[forceRender](../interfaces/IGroup.md#forcerender)

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

[IGroup](../interfaces/IGroup.md).[__extraUpdate](../interfaces/IGroup.md#__extraupdate)

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

[IGroup](../interfaces/IGroup.md).[__updateWorldMatrix](../interfaces/IGroup.md#__updateworldmatrix)

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

[IGroup](../interfaces/IGroup.md).[__updateLocalMatrix](../interfaces/IGroup.md#__updatelocalmatrix)

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

[IGroup](../interfaces/IGroup.md).[__updateWorldBounds](../interfaces/IGroup.md#__updateworldbounds)

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

[IGroup](../interfaces/IGroup.md).[__updateLocalBounds](../interfaces/IGroup.md#__updatelocalbounds)

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

[IGroup](../interfaces/IGroup.md).[__updateLocalBoxBounds](../interfaces/IGroup.md#__updatelocalboxbounds)

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

[IGroup](../interfaces/IGroup.md).[__updateLocalStrokeBounds](../interfaces/IGroup.md#__updatelocalstrokebounds)

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

[IGroup](../interfaces/IGroup.md).[__updateLocalRenderBounds](../interfaces/IGroup.md#__updatelocalrenderbounds)

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

[IGroup](../interfaces/IGroup.md).[__updateBoxBounds](../interfaces/IGroup.md#__updateboxbounds)

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

[IGroup](../interfaces/IGroup.md).[__updateContentBounds](../interfaces/IGroup.md#__updatecontentbounds)

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

[IGroup](../interfaces/IGroup.md).[__updateStrokeBounds](../interfaces/IGroup.md#__updatestrokebounds)

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

[IGroup](../interfaces/IGroup.md).[__updateRenderBounds](../interfaces/IGroup.md#__updaterenderbounds)

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

[IGroup](../interfaces/IGroup.md).[__updateAutoLayout](../interfaces/IGroup.md#__updateautolayout)

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

[IGroup](../interfaces/IGroup.md).[__updateFlowLayout](../interfaces/IGroup.md#__updateflowlayout)

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

[IGroup](../interfaces/IGroup.md).[__updateNaturalSize](../interfaces/IGroup.md#__updatenaturalsize)

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

[IGroup](../interfaces/IGroup.md).[__updateStrokeSpread](../interfaces/IGroup.md#__updatestrokespread)

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

[IGroup](../interfaces/IGroup.md).[__updateRenderSpread](../interfaces/IGroup.md#__updaterenderspread)

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

[IGroup](../interfaces/IGroup.md).[__updateEraser](../interfaces/IGroup.md#__updateeraser)

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

[IGroup](../interfaces/IGroup.md).[__renderEraser](../interfaces/IGroup.md#__rendereraser)

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

[IGroup](../interfaces/IGroup.md).[__updateMask](../interfaces/IGroup.md#__updatemask)

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

[IGroup](../interfaces/IGroup.md).[__renderMask](../interfaces/IGroup.md#__rendermask)

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

[IGroup](../interfaces/IGroup.md).[__getNowWorld](../interfaces/IGroup.md#__getnowworld)

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

[IGroup](../interfaces/IGroup.md).[getClampRenderScale](../interfaces/IGroup.md#getclamprenderscale)

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

[IGroup](../interfaces/IGroup.md).[getRenderScaleData](../interfaces/IGroup.md#getrenderscaledata)

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

[IGroup](../interfaces/IGroup.md).[getTransform](../interfaces/IGroup.md#gettransform)

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

[IGroup](../interfaces/IGroup.md).[getBounds](../interfaces/IGroup.md#getbounds)

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

[IGroup](../interfaces/IGroup.md).[getLayoutBounds](../interfaces/IGroup.md#getlayoutbounds)

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

[IGroup](../interfaces/IGroup.md).[getLayoutPoints](../interfaces/IGroup.md#getlayoutpoints)

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

[IGroup](../interfaces/IGroup.md).[getWorldBounds](../interfaces/IGroup.md#getworldbounds)

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

[IGroup](../interfaces/IGroup.md).[worldToLocal](../interfaces/IGroup.md#worldtolocal)

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

[IGroup](../interfaces/IGroup.md).[localToWorld](../interfaces/IGroup.md#localtoworld)

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

[IGroup](../interfaces/IGroup.md).[worldToInner](../interfaces/IGroup.md#worldtoinner)

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

[IGroup](../interfaces/IGroup.md).[innerToWorld](../interfaces/IGroup.md#innertoworld)

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

[IGroup](../interfaces/IGroup.md).[getBoxPoint](../interfaces/IGroup.md#getboxpoint)

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

[IGroup](../interfaces/IGroup.md).[getBoxPointByInner](../interfaces/IGroup.md#getboxpointbyinner)

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

[IGroup](../interfaces/IGroup.md).[getInnerPoint](../interfaces/IGroup.md#getinnerpoint)

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

[IGroup](../interfaces/IGroup.md).[getInnerPointByBox](../interfaces/IGroup.md#getinnerpointbybox)

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

[IGroup](../interfaces/IGroup.md).[getInnerPointByLocal](../interfaces/IGroup.md#getinnerpointbylocal)

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

[IGroup](../interfaces/IGroup.md).[getLocalPoint](../interfaces/IGroup.md#getlocalpoint)

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

[IGroup](../interfaces/IGroup.md).[getLocalPointByInner](../interfaces/IGroup.md#getlocalpointbyinner)

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

[IGroup](../interfaces/IGroup.md).[getPagePoint](../interfaces/IGroup.md#getpagepoint)

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

[IGroup](../interfaces/IGroup.md).[getWorldPoint](../interfaces/IGroup.md#getworldpoint)

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

[IGroup](../interfaces/IGroup.md).[getWorldPointByBox](../interfaces/IGroup.md#getworldpointbybox)

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

[IGroup](../interfaces/IGroup.md).[getWorldPointByLocal](../interfaces/IGroup.md#getworldpointbylocal)

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

[IGroup](../interfaces/IGroup.md).[getWorldPointByPage](../interfaces/IGroup.md#getworldpointbypage)

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

[IGroup](../interfaces/IGroup.md).[setTransform](../interfaces/IGroup.md#settransform)

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

[IGroup](../interfaces/IGroup.md).[transform](../interfaces/IGroup.md#transform)

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

[IGroup](../interfaces/IGroup.md).[move](../interfaces/IGroup.md#move)

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

[IGroup](../interfaces/IGroup.md).[moveInner](../interfaces/IGroup.md#moveinner)

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

[IGroup](../interfaces/IGroup.md).[scaleOf](../interfaces/IGroup.md#scaleof)

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

[IGroup](../interfaces/IGroup.md).[rotateOf](../interfaces/IGroup.md#rotateof)

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

[IGroup](../interfaces/IGroup.md).[skewOf](../interfaces/IGroup.md#skewof)

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

[IGroup](../interfaces/IGroup.md).[transformWorld](../interfaces/IGroup.md#transformworld)

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

[IGroup](../interfaces/IGroup.md).[moveWorld](../interfaces/IGroup.md#moveworld)

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

[IGroup](../interfaces/IGroup.md).[scaleOfWorld](../interfaces/IGroup.md#scaleofworld)

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

[IGroup](../interfaces/IGroup.md).[rotateOfWorld](../interfaces/IGroup.md#rotateofworld)

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

[IGroup](../interfaces/IGroup.md).[skewOfWorld](../interfaces/IGroup.md#skewofworld)

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

[IGroup](../interfaces/IGroup.md).[flip](../interfaces/IGroup.md#flip)

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

[IGroup](../interfaces/IGroup.md).[scaleResize](../interfaces/IGroup.md#scaleresize)

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

[IGroup](../interfaces/IGroup.md).[__scaleResize](../interfaces/IGroup.md#__scaleresize)

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

[IGroup](../interfaces/IGroup.md).[resizeWidth](../interfaces/IGroup.md#resizewidth)

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

[IGroup](../interfaces/IGroup.md).[resizeHeight](../interfaces/IGroup.md#resizeheight)

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

[IGroup](../interfaces/IGroup.md).[hit](../interfaces/IGroup.md#hit)

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

[IGroup](../interfaces/IGroup.md).[__hitWorld](../interfaces/IGroup.md#__hitworld)

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

[IGroup](../interfaces/IGroup.md).[__hit](../interfaces/IGroup.md#__hit)

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

[IGroup](../interfaces/IGroup.md).[__hitFill](../interfaces/IGroup.md#__hitfill)

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

[IGroup](../interfaces/IGroup.md).[__hitStroke](../interfaces/IGroup.md#__hitstroke)

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

[IGroup](../interfaces/IGroup.md).[__hitPixel](../interfaces/IGroup.md#__hitpixel)

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

[IGroup](../interfaces/IGroup.md).[__drawHitPath](../interfaces/IGroup.md#__drawhitpath)

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

[IGroup](../interfaces/IGroup.md).[__updateHitCanvas](../interfaces/IGroup.md#__updatehitcanvas)

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

[IGroup](../interfaces/IGroup.md).[__render](../interfaces/IGroup.md#__render)

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

[IGroup](../interfaces/IGroup.md).[__drawFast](../interfaces/IGroup.md#__drawfast)

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

[IGroup](../interfaces/IGroup.md).[__draw](../interfaces/IGroup.md#__draw)

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

[IGroup](../interfaces/IGroup.md).[__clip](../interfaces/IGroup.md#__clip)

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

[IGroup](../interfaces/IGroup.md).[__renderShape](../interfaces/IGroup.md#__rendershape)

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

[IGroup](../interfaces/IGroup.md).[__drawShape](../interfaces/IGroup.md#__drawshape)

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

[IGroup](../interfaces/IGroup.md).[__updateWorldOpacity](../interfaces/IGroup.md#__updateworldopacity)

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

[IGroup](../interfaces/IGroup.md).[__updateChange](../interfaces/IGroup.md#__updatechange)

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

[IGroup](../interfaces/IGroup.md).[__updatePath](../interfaces/IGroup.md#__updatepath)

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

[IGroup](../interfaces/IGroup.md).[getMotionPathData](../interfaces/IGroup.md#getmotionpathdata)

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

[IGroup](../interfaces/IGroup.md).[getMotionPoint](../interfaces/IGroup.md#getmotionpoint)

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

[IGroup](../interfaces/IGroup.md).[getMotionTotal](../interfaces/IGroup.md#getmotiontotal)

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

[IGroup](../interfaces/IGroup.md).[__updateMotionPath](../interfaces/IGroup.md#__updatemotionpath)

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

[IGroup](../interfaces/IGroup.md).[__runAnimation](../interfaces/IGroup.md#__runanimation)

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

[IGroup](../interfaces/IGroup.md).[__updateSortChildren](../interfaces/IGroup.md#__updatesortchildren)

#### Inherited from

[UI](UI.md).[__updateSortChildren](UI.md#__updatesortchildren)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:647](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/display/src/Leaf.ts#L647)

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

[IGroup](../interfaces/IGroup.md).[dropTo](../interfaces/IGroup.md#dropto)

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

[IGroup](../interfaces/IGroup.md).[on](../interfaces/IGroup.md#on)

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

[IGroup](../interfaces/IGroup.md).[off](../interfaces/IGroup.md#off)

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

[IGroup](../interfaces/IGroup.md).[on_](../interfaces/IGroup.md#on_)

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

[IGroup](../interfaces/IGroup.md).[off_](../interfaces/IGroup.md#off_)

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

[IGroup](../interfaces/IGroup.md).[once](../interfaces/IGroup.md#once)

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

[IGroup](../interfaces/IGroup.md).[emit](../interfaces/IGroup.md#emit)

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

[IGroup](../interfaces/IGroup.md).[emitEvent](../interfaces/IGroup.md#emitevent)

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

[IGroup](../interfaces/IGroup.md).[hasEvent](../interfaces/IGroup.md#hasevent)

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

[IGroup](../interfaces/IGroup.md).[__emitLifeEvent](../interfaces/IGroup.md#__emitlifeevent)

#### Inherited from

[UI](UI.md).[__emitLifeEvent](UI.md#__emitlifeevent)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:692](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/display/src/Leaf.ts#L692)

___

### reset

▸ **reset**(`data?`): `void`

#### Parameters

| Name    | Type                                                  |
| :------ | :---------------------------------------------------- |
| `data?` | [`IGroupInputData`](../interfaces/IGroupInputData.md) |

#### Returns

`void`

#### Implementation of

[IGroup](../interfaces/IGroup.md).[reset](../interfaces/IGroup.md#reset)

#### Overrides

[UI](UI.md).[reset](UI.md#reset)

#### Defined in

[src/ui/packages/display/src/Group.ts:35](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/display/src/Group.ts#L35)

___

### \_\_setBranch

▸ **__setBranch**(): `void`

#### Returns

`void`

#### Defined in

[src/ui/packages/display/src/Group.ts:40](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/display/src/Group.ts#L40)

___

### set

▸ **set**(`data`, `transition?`): `void`

#### Parameters

| Name          | Type                                                     |
| :------------ | :------------------------------------------------------- |
| `data`        | [`IUIInputData`](../interfaces/IUIInputData.md)          |
| `transition?` | [`ITransition`](../modules.md#itransition) \\| `"temp"` |

#### Returns

`void`

#### Implementation of

[IGroup](../interfaces/IGroup.md).[set](../interfaces/IGroup.md#set)

#### Overrides

[UI](UI.md).[set](UI.md#set)

#### Defined in

[src/ui/packages/display/src/Group.ts:47](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/display/src/Group.ts#L47)

___

### toJSON

▸ **toJSON**(`options?`): [`IUIJSONData`](../interfaces/IUIJSONData.md)

#### Parameters

| Name       | Type                                            |
| :--------- | :---------------------------------------------- |
| `options?` | [`IJSONOptions`](../interfaces/IJSONOptions.md) |

#### Returns

[`IUIJSONData`](../interfaces/IUIJSONData.md)

#### Implementation of

[IGroup](../interfaces/IGroup.md).[toJSON](../interfaces/IGroup.md#tojson)

#### Overrides

[UI](UI.md).[toJSON](UI.md#tojson)

#### Defined in

[src/ui/packages/display/src/Group.ts:64](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/display/src/Group.ts#L64)

___

### pick

▸ **pick**(`_hitPoint`, `_options?`): [`IPickResult`](../interfaces/IPickResult.md)

#### Parameters

| Name        | Type                                            |
| :---------- | :---------------------------------------------- |
| `_hitPoint` | [`IPointData`](../interfaces/IPointData.md)     |
| `_options?` | [`IPickOptions`](../interfaces/IPickOptions.md) |

#### Returns

[`IPickResult`](../interfaces/IPickResult.md)

#### Implementation of

[IGroup](../interfaces/IGroup.md).[pick](../interfaces/IGroup.md#pick)

#### Defined in

[src/ui/packages/display/src/Group.ts:76](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/display/src/Group.ts#L76)

___

### addAt

▸ **addAt**(`child`, `index`): `void`

#### Parameters

| Name    | Type                                                                                                                                                                                                                                                                                   |
| :------ | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `child` | [`IUIInputData`](../interfaces/IUIInputData.md) \\| [`IUI`](../interfaces/IUI.md) \\| [`IUI`](../interfaces/IUI.md)[] \\| [`IUIInputData`](../interfaces/IUIInputData.md)[] |
| `index` | `number`                                                                                                                                                                                                                                                                               |

#### Returns

`void`

#### Implementation of

[IGroup](../interfaces/IGroup.md).[addAt](../interfaces/IGroup.md#addat)

#### Defined in

[src/ui/packages/display/src/Group.ts:81](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/display/src/Group.ts#L81)

___

### addAfter

▸ **addAfter**(`child`, `after`): `void`

#### Parameters

| Name    | Type                                                                                                                                                                                                                                                                                   |
| :------ | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `child` | [`IUIInputData`](../interfaces/IUIInputData.md) \\| [`IUI`](../interfaces/IUI.md) \\| [`IUI`](../interfaces/IUI.md)[] \\| [`IUIInputData`](../interfaces/IUIInputData.md)[] |
| `after` | [`IUI`](../interfaces/IUI.md)                                                                                                                                                                                                                                                          |

#### Returns

`void`

#### Implementation of

[IGroup](../interfaces/IGroup.md).[addAfter](../interfaces/IGroup.md#addafter)

#### Defined in

[src/ui/packages/display/src/Group.ts:85](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/display/src/Group.ts#L85)

___

### addBefore

▸ **addBefore**(`child`, `before`): `void`

#### Parameters

| Name     | Type                                                                                                                                                                                                                                                                                   |
| :------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `child`  | [`IUIInputData`](../interfaces/IUIInputData.md) \\| [`IUI`](../interfaces/IUI.md) \\| [`IUI`](../interfaces/IUI.md)[] \\| [`IUIInputData`](../interfaces/IUIInputData.md)[] |
| `before` | [`IUI`](../interfaces/IUI.md)                                                                                                                                                                                                                                                          |

#### Returns

`void`

#### Implementation of

[IGroup](../interfaces/IGroup.md).[addBefore](../interfaces/IGroup.md#addbefore)

#### Defined in

[src/ui/packages/display/src/Group.ts:89](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/display/src/Group.ts#L89)

___

### add

▸ **add**(`_child`, `_index?`): `void`

#### Parameters

| Name      | Type                                                                                                                                                                                                                                                                                   |
| :-------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `_child`  | [`IUIInputData`](../interfaces/IUIInputData.md) \\| [`IUI`](../interfaces/IUI.md) \\| [`IUI`](../interfaces/IUI.md)[] \\| [`IUIInputData`](../interfaces/IUIInputData.md)[] |
| `_index?` | `number`                                                                                                                                                                                                                                                                               |

#### Returns

`void`

#### Implementation of

[IGroup](../interfaces/IGroup.md).[add](../interfaces/IGroup.md#add)

#### Overrides

[UI](UI.md).[add](UI.md#add)

#### Defined in

[src/ui/packages/display/src/Group.ts:95](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/display/src/Group.ts#L95)

___

### addMany

▸ **addMany**(`..._children`): `void`

#### Parameters

| Name           | Type                                                                                                                                                                                           |
| :------------- | :--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `..._children` | [`IUI`](../interfaces/IUI.md)[] \\| [`IUIInputData`](../interfaces/IUIInputData.md)[] |

#### Returns

`void`

#### Implementation of

[IGroup](../interfaces/IGroup.md).[addMany](../interfaces/IGroup.md#addmany)

#### Defined in

[src/ui/packages/display/src/Group.ts:97](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/display/src/Group.ts#L97)

___

### remove

▸ **remove**(`_child?`, `_destroy?`): `void`

#### Parameters

| Name        | Type                                                                                                                                                                      |
| :---------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `_child?`   | `string` \\| `number` \\| [`IFindCondition`](../interfaces/IFindCondition.md) \\| [`IUI`](../interfaces/IUI.md) \\| [`IFindUIMethod`](../interfaces/IFindUIMethod.md) |
| `_destroy?` | `boolean`                                                                                                                                                                 |

#### Returns

`void`

#### Implementation of

[IGroup](../interfaces/IGroup.md).[remove](../interfaces/IGroup.md#remove)

#### Overrides

[UI](UI.md).[remove](UI.md#remove)

#### Defined in

[src/ui/packages/display/src/Group.ts:99](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/display/src/Group.ts#L99)

___

### removeAll

▸ **removeAll**(`_destroy?`): `void`

#### Parameters

| Name        | Type      |
| :---------- | :-------- |
| `_destroy?` | `boolean` |

#### Returns

`void`

#### Implementation of

[IGroup](../interfaces/IGroup.md).[removeAll](../interfaces/IGroup.md#removeall)

#### Defined in

[src/ui/packages/display/src/Group.ts:101](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/display/src/Group.ts#L101)

___

### clear

▸ **clear**(): `void`

#### Returns

`void`

#### Implementation of

[IGroup](../interfaces/IGroup.md).[clear](../interfaces/IGroup.md#clear)

#### Defined in

[src/ui/packages/display/src/Group.ts:103](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/display/src/Group.ts#L103)

___

### get

▸ **get**\<`K`\>(`name?`): [`IUIInputData`](../interfaces/IUIInputData.md) \| [`Group`](Group.md)\<`TInputData`\>[`K`]

#### Type parameters

| Name | Type                                                                         |
| :--- | :--------------------------------------------------------------------------- |
| `K`  | extends keyof [`Group`](Group.md)\<`TInputData`\> |

#### Parameters

| Name    | Type                                                                                                                    |
| :------ | :---------------------------------------------------------------------------------------------------------------------- |
| `name?` | [`IUIInputData`](../interfaces/IUIInputData.md) \\| `K` \\| `K`[] |

#### Returns

[`IUIInputData`](../interfaces/IUIInputData.md) \| [`Group`](Group.md)\<`TInputData`\>[`K`]

#### Implementation of

[IGroup](../interfaces/IGroup.md).[get](../interfaces/IGroup.md#get)

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

[IGroup](../interfaces/IGroup.md).[createProxyData](../interfaces/IGroup.md#createproxydata)

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

[IGroup](../interfaces/IGroup.md).[clearProxyData](../interfaces/IGroup.md#clearproxydata)

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

[IGroup](../interfaces/IGroup.md).[find](../interfaces/IGroup.md#find)

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

[IGroup](../interfaces/IGroup.md).[findTag](../interfaces/IGroup.md#findtag)

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

[IGroup](../interfaces/IGroup.md).[findOne](../interfaces/IGroup.md#findone)

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

[IGroup](../interfaces/IGroup.md).[findId](../interfaces/IGroup.md#findid)

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

[IGroup](../interfaces/IGroup.md).[getPath](../interfaces/IGroup.md#getpath)

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

[IGroup](../interfaces/IGroup.md).[getPathString](../interfaces/IGroup.md#getpathstring)

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

[IGroup](../interfaces/IGroup.md).[asPath](../interfaces/IGroup.md#aspath)

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

[IGroup](../interfaces/IGroup.md).[load](../interfaces/IGroup.md#load)

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

[IGroup](../interfaces/IGroup.md).[__onUpdateSize](../interfaces/IGroup.md#__onupdatesize)

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

[IGroup](../interfaces/IGroup.md).[__updateRenderPath](../interfaces/IGroup.md#__updaterenderpath)

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

[IGroup](../interfaces/IGroup.md).[__drawRenderPath](../interfaces/IGroup.md#__drawrenderpath)

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

[IGroup](../interfaces/IGroup.md).[__drawPath](../interfaces/IGroup.md#__drawpath)

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

[IGroup](../interfaces/IGroup.md).[__drawPathByData](../interfaces/IGroup.md#__drawpathbydata)

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

[IGroup](../interfaces/IGroup.md).[__drawPathByBox](../interfaces/IGroup.md#__drawpathbybox)

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

[IGroup](../interfaces/IGroup.md).[drawImagePlaceholder](../interfaces/IGroup.md#drawimageplaceholder)

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

[IGroup](../interfaces/IGroup.md).[animate](../interfaces/IGroup.md#animate)

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

[IGroup](../interfaces/IGroup.md).[killAnimate](../interfaces/IGroup.md#killanimate)

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

[IGroup](../interfaces/IGroup.md).[export](../interfaces/IGroup.md#export)

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

[IGroup](../interfaces/IGroup.md).[syncExport](../interfaces/IGroup.md#syncexport)

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

[IGroup](../interfaces/IGroup.md).[clone](../interfaces/IGroup.md#clone)

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

[IGroup](../interfaces/IGroup.md).[destroy](../interfaces/IGroup.md#destroy)

#### Inherited from

[UI](UI.md).[destroy](UI.md#destroy)

#### Defined in

[src/ui/packages/display/src/UI.ts:568](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/display/src/UI.ts#L568)
