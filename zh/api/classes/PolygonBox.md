# Class: PolygonBox\<TInputData\>

## Type parameters

| Name | Type |
| :------ | :------ |
| `TInputData` | [`IPolygonBoxInputData`](../interfaces/IPolygonBoxInputData.md) |

## Hierarchy

- [`Box`](Box.md)\<`TInputData`\>

  ↳ **`PolygonBox`**

## Implements

- [`IPolygonBox`](../interfaces/IPolygonBox.md)

## Table of contents

### Constructors

- [constructor](PolygonBox.md#constructor)

### Properties

- [\_\_](PolygonBox.md#__)
- [sides](PolygonBox.md#sides)
- [points](PolygonBox.md#points)
- [curve](PolygonBox.md#curve)
- [innerId](PolygonBox.md#innerid)
- [skipJSON](PolygonBox.md#skipjson)
- [syncEventer](PolygonBox.md#synceventer)
- [lockNormalStyle](PolygonBox.md#locknormalstyle)
- [\_\_layout](PolygonBox.md#__layout)
- [\_\_world](PolygonBox.md#__world)
- [\_\_local](PolygonBox.md#__local)
- [\_\_nowWorld](PolygonBox.md#__nowworld)
- [\_\_cameraWorld](PolygonBox.md#__cameraworld)
- [\_\_worldOpacity](PolygonBox.md#__worldopacity)
- [\_\_scrollWorld](PolygonBox.md#__scrollworld)
- [\_\_level](PolygonBox.md#__level)
- [\_\_tempNumber](PolygonBox.md#__tempnumber)
- [\_\_hasAutoLayout](PolygonBox.md#__hasautolayout)
- [\_\_hasMask](PolygonBox.md#__hasmask)
- [\_\_hasEraser](PolygonBox.md#__haseraser)
- [\_\_hitCanvas](PolygonBox.md#__hitcanvas)
- [\_\_captureMap](PolygonBox.md#__capturemap)
- [\_\_bubbleMap](PolygonBox.md#__bubblemap)
- [\_\_hasLocalEvent](PolygonBox.md#__haslocalevent)
- [\_\_hasWorldEvent](PolygonBox.md#__hasworldevent)
- [destroyed](PolygonBox.md#destroyed)
- [width](PolygonBox.md#width)
- [height](PolygonBox.md#height)
- [resizeChildren](PolygonBox.md#resizechildren)
- [textBox](PolygonBox.md#textbox)
- [overflow](PolygonBox.md#overflow)
- [isOverflow](PolygonBox.md#isoverflow)
- [scrollConfig](PolygonBox.md#scrollconfig)
- [scroller](PolygonBox.md#scroller)
- [hasScroller](PolygonBox.md#hasscroller)
- [children](PolygonBox.md#children)
- [topChildren](PolygonBox.md#topchildren)
- [childlessJSON](PolygonBox.md#childlessjson)
- [proxyData](PolygonBox.md#proxydata)
- [\_\_proxyData](PolygonBox.md#__proxydata)
- [leafer](PolygonBox.md#leafer)
- [parent](PolygonBox.md#parent)
- [zoomLayer](PolygonBox.md#zoomlayer)
- [startLinker](PolygonBox.md#startlinker)
- [endLinker](PolygonBox.md#endlinker)
- [id](PolygonBox.md#id)
- [name](PolygonBox.md#name)
- [className](PolygonBox.md#classname)
- [blendMode](PolygonBox.md#blendmode)
- [opacity](PolygonBox.md#opacity)
- [visible](PolygonBox.md#visible)
- [locked](PolygonBox.md#locked)
- [dim](PolygonBox.md#dim)
- [dimskip](PolygonBox.md#dimskip)
- [bright](PolygonBox.md#bright)
- [zIndex](PolygonBox.md#zindex)
- [mask](PolygonBox.md#mask)
- [eraser](PolygonBox.md#eraser)
- [x](PolygonBox.md#x)
- [y](PolygonBox.md#y)
- [scaleX](PolygonBox.md#scalex)
- [scaleY](PolygonBox.md#scaley)
- [scaleFixed](PolygonBox.md#scalefixed)
- [rotation](PolygonBox.md#rotation)
- [skewX](PolygonBox.md#skewx)
- [skewY](PolygonBox.md#skewy)
- [offsetX](PolygonBox.md#offsetx)
- [offsetY](PolygonBox.md#offsety)
- [scrollX](PolygonBox.md#scrollx)
- [scrollY](PolygonBox.md#scrolly)
- [origin](PolygonBox.md#origin)
- [around](PolygonBox.md#around)
- [lazy](PolygonBox.md#lazy)
- [pixelRatio](PolygonBox.md#pixelratio)
- [renderSpread](PolygonBox.md#renderspread)
- [path](PolygonBox.md#path)
- [windingRule](PolygonBox.md#windingrule)
- [closed](PolygonBox.md#closed)
- [flow](PolygonBox.md#flow)
- [padding](PolygonBox.md#padding)
- [gap](PolygonBox.md#gap)
- [flowAlign](PolygonBox.md#flowalign)
- [flowWrap](PolygonBox.md#flowwrap)
- [itemBox](PolygonBox.md#itembox)
- [inFlow](PolygonBox.md#inflow)
- [autoWidth](PolygonBox.md#autowidth)
- [autoHeight](PolygonBox.md#autoheight)
- [lockRatio](PolygonBox.md#lockratio)
- [autoBox](PolygonBox.md#autobox)
- [widthRange](PolygonBox.md#widthrange)
- [heightRange](PolygonBox.md#heightrange)
- [draggable](PolygonBox.md#draggable)
- [dragBounds](PolygonBox.md#dragbounds)
- [dragBoundsType](PolygonBox.md#dragboundstype)
- [editable](PolygonBox.md#editable)
- [hittable](PolygonBox.md#hittable)
- [hitFill](PolygonBox.md#hitfill)
- [hitStroke](PolygonBox.md#hitstroke)
- [hitBox](PolygonBox.md#hitbox)
- [hitChildren](PolygonBox.md#hitchildren)
- [hitSelf](PolygonBox.md#hitself)
- [hitRadius](PolygonBox.md#hitradius)
- [cursor](PolygonBox.md#cursor)
- [fill](PolygonBox.md#fill)
- [stroke](PolygonBox.md#stroke)
- [strokeAlign](PolygonBox.md#strokealign)
- [strokeWidth](PolygonBox.md#strokewidth)
- [strokeScaleFixed](PolygonBox.md#strokescalefixed)
- [strokeCap](PolygonBox.md#strokecap)
- [strokeJoin](PolygonBox.md#strokejoin)
- [dashPattern](PolygonBox.md#dashpattern)
- [dashOffset](PolygonBox.md#dashoffset)
- [miterLimit](PolygonBox.md#miterlimit)
- [startArrow](PolygonBox.md#startarrow)
- [endArrow](PolygonBox.md#endarrow)
- [cornerRadius](PolygonBox.md#cornerradius)
- [cornerSmoothing](PolygonBox.md#cornersmoothing)
- [shadow](PolygonBox.md#shadow)
- [innerShadow](PolygonBox.md#innershadow)
- [blur](PolygonBox.md#blur)
- [backgroundBlur](PolygonBox.md#backgroundblur)
- [grayscale](PolygonBox.md#grayscale)
- [filter](PolygonBox.md#filter)
- [complex](PolygonBox.md#complex)
- [animation](PolygonBox.md#animation)
- [animationOut](PolygonBox.md#animationout)
- [transition](PolygonBox.md#transition)
- [transitionOut](PolygonBox.md#transitionout)
- [motionPath](PolygonBox.md#motionpath)
- [motionPrecision](PolygonBox.md#motionprecision)
- [motion](PolygonBox.md#motion)
- [motionRotation](PolygonBox.md#motionrotation)
- [states](PolygonBox.md#states)
- [state](PolygonBox.md#state)
- [selected](PolygonBox.md#selected)
- [disabled](PolygonBox.md#disabled)
- [normalStyle](PolygonBox.md#normalstyle)
- [hoverStyle](PolygonBox.md#hoverstyle)
- [pressStyle](PolygonBox.md#pressstyle)
- [focusStyle](PolygonBox.md#focusstyle)
- [selectedStyle](PolygonBox.md#selectedstyle)
- [disabledStyle](PolygonBox.md#disabledstyle)
- [placeholderStyle](PolygonBox.md#placeholderstyle)
- [placeholderColor](PolygonBox.md#placeholdercolor)
- [placeholderDelay](PolygonBox.md#placeholderdelay)
- [button](PolygonBox.md#button)
- [editConfig](PolygonBox.md#editconfig)
- [editOuter](PolygonBox.md#editouter)
- [editInner](PolygonBox.md#editinner)
- [data](PolygonBox.md#data)
- [useFastShadow](PolygonBox.md#usefastshadow)
- [\_\_box](PolygonBox.md#__box)
- [\_\_animate](PolygonBox.md#__animate)

### Accessors

- [\_\_tag](PolygonBox.md#__tag)
- [tag](PolygonBox.md#tag)
- [innerName](PolygonBox.md#innername)
- [\_\_DataProcessor](PolygonBox.md#__dataprocessor)
- [\_\_LayoutProcessor](PolygonBox.md#__layoutprocessor)
- [leaferIsCreated](PolygonBox.md#leaferiscreated)
- [leaferIsReady](PolygonBox.md#leaferisready)
- [isLeafer](PolygonBox.md#isleafer)
- [\_\_localMatrix](PolygonBox.md#__localmatrix)
- [\_\_localBoxBounds](PolygonBox.md#__localboxbounds)
- [worldTransform](PolygonBox.md#worldtransform)
- [localTransform](PolygonBox.md#localtransform)
- [scrollWorldTransform](PolygonBox.md#scrollworldtransform)
- [boxBounds](PolygonBox.md#boxbounds)
- [renderBounds](PolygonBox.md#renderbounds)
- [worldBoxBounds](PolygonBox.md#worldboxbounds)
- [worldStrokeBounds](PolygonBox.md#worldstrokebounds)
- [worldRenderBounds](PolygonBox.md#worldrenderbounds)
- [worldOpacity](PolygonBox.md#worldopacity)
- [\_\_worldFlipped](PolygonBox.md#__worldflipped)
- [\_\_onlyHitMask](PolygonBox.md#__onlyhitmask)
- [\_\_ignoreHitWorld](PolygonBox.md#__ignorehitworld)
- [\_\_inLazyBounds](PolygonBox.md#__inlazybounds)
- [pathInputed](PolygonBox.md#pathinputed)
- [event](PolygonBox.md#event)
- [isBranchLeaf](PolygonBox.md#isbranchleaf)
- [\_\_useSelfBox](PolygonBox.md#__useselfbox)
- [isBranch](PolygonBox.md#isbranch)
- [app](PolygonBox.md#app)
- [isFrame](PolygonBox.md#isframe)
- [strokeWidthFixed](PolygonBox.md#strokewidthfixed)
- [scale](PolygonBox.md#scale)
- [isAutoWidth](PolygonBox.md#isautowidth)
- [isAutoHeight](PolygonBox.md#isautoheight)
- [pen](PolygonBox.md#pen)

### Methods

- [\_\_updatePath](PolygonBox.md#__updatepath)
- [resetCustom](PolygonBox.md#resetcustom)
- [waitParent](PolygonBox.md#waitparent)
- [waitLeafer](PolygonBox.md#waitleafer)
- [nextRender](PolygonBox.md#nextrender)
- [removeNextRender](PolygonBox.md#removenextrender)
- [\_\_bindLeafer](PolygonBox.md#__bindleafer)
- [setAttr](PolygonBox.md#setattr)
- [getAttr](PolygonBox.md#getattr)
- [getComputedAttr](PolygonBox.md#getcomputedattr)
- [toString](PolygonBox.md#tostring)
- [toSVG](PolygonBox.md#tosvg)
- [\_\_SVG](PolygonBox.md#__svg)
- [toHTML](PolygonBox.md#tohtml)
- [\_\_setAttr](PolygonBox.md#__setattr)
- [\_\_getAttr](PolygonBox.md#__getattr)
- [setProxyAttr](PolygonBox.md#setproxyattr)
- [getProxyAttr](PolygonBox.md#getproxyattr)
- [focus](PolygonBox.md#focus)
- [updateState](PolygonBox.md#updatestate)
- [updateLayout](PolygonBox.md#updatelayout)
- [forceUpdate](PolygonBox.md#forceupdate)
- [forceRender](PolygonBox.md#forcerender)
- [\_\_extraUpdate](PolygonBox.md#__extraupdate)
- [\_\_updateWorldMatrix](PolygonBox.md#__updateworldmatrix)
- [\_\_updateLocalMatrix](PolygonBox.md#__updatelocalmatrix)
- [\_\_updateWorldBounds](PolygonBox.md#__updateworldbounds)
- [\_\_updateLocalBounds](PolygonBox.md#__updatelocalbounds)
- [\_\_updateLocalBoxBounds](PolygonBox.md#__updatelocalboxbounds)
- [\_\_updateLocalStrokeBounds](PolygonBox.md#__updatelocalstrokebounds)
- [\_\_updateLocalRenderBounds](PolygonBox.md#__updatelocalrenderbounds)
- [\_\_updateContentBounds](PolygonBox.md#__updatecontentbounds)
- [\_\_updateAutoLayout](PolygonBox.md#__updateautolayout)
- [\_\_updateFlowLayout](PolygonBox.md#__updateflowlayout)
- [\_\_updateNaturalSize](PolygonBox.md#__updatenaturalsize)
- [\_\_updateEraser](PolygonBox.md#__updateeraser)
- [\_\_renderEraser](PolygonBox.md#__rendereraser)
- [\_\_updateMask](PolygonBox.md#__updatemask)
- [\_\_renderMask](PolygonBox.md#__rendermask)
- [\_\_getNowWorld](PolygonBox.md#__getnowworld)
- [getClampRenderScale](PolygonBox.md#getclamprenderscale)
- [getRenderScaleData](PolygonBox.md#getrenderscaledata)
- [getTransform](PolygonBox.md#gettransform)
- [getBounds](PolygonBox.md#getbounds)
- [getLayoutBounds](PolygonBox.md#getlayoutbounds)
- [getLayoutPoints](PolygonBox.md#getlayoutpoints)
- [getWorldBounds](PolygonBox.md#getworldbounds)
- [worldToLocal](PolygonBox.md#worldtolocal)
- [localToWorld](PolygonBox.md#localtoworld)
- [worldToInner](PolygonBox.md#worldtoinner)
- [innerToWorld](PolygonBox.md#innertoworld)
- [getBoxPoint](PolygonBox.md#getboxpoint)
- [getBoxPointByInner](PolygonBox.md#getboxpointbyinner)
- [getInnerPoint](PolygonBox.md#getinnerpoint)
- [getInnerPointByBox](PolygonBox.md#getinnerpointbybox)
- [getInnerPointByLocal](PolygonBox.md#getinnerpointbylocal)
- [getLocalPoint](PolygonBox.md#getlocalpoint)
- [getLocalPointByInner](PolygonBox.md#getlocalpointbyinner)
- [getPagePoint](PolygonBox.md#getpagepoint)
- [getWorldPoint](PolygonBox.md#getworldpoint)
- [getWorldPointByBox](PolygonBox.md#getworldpointbybox)
- [getWorldPointByLocal](PolygonBox.md#getworldpointbylocal)
- [getWorldPointByPage](PolygonBox.md#getworldpointbypage)
- [setTransform](PolygonBox.md#settransform)
- [transform](PolygonBox.md#transform)
- [move](PolygonBox.md#move)
- [moveInner](PolygonBox.md#moveinner)
- [scaleOf](PolygonBox.md#scaleof)
- [rotateOf](PolygonBox.md#rotateof)
- [skewOf](PolygonBox.md#skewof)
- [transformWorld](PolygonBox.md#transformworld)
- [moveWorld](PolygonBox.md#moveworld)
- [scaleOfWorld](PolygonBox.md#scaleofworld)
- [rotateOfWorld](PolygonBox.md#rotateofworld)
- [skewOfWorld](PolygonBox.md#skewofworld)
- [flip](PolygonBox.md#flip)
- [scaleResize](PolygonBox.md#scaleresize)
- [\_\_scaleResize](PolygonBox.md#__scaleresize)
- [resizeWidth](PolygonBox.md#resizewidth)
- [resizeHeight](PolygonBox.md#resizeheight)
- [hit](PolygonBox.md#hit)
- [\_\_hitWorld](PolygonBox.md#__hitworld)
- [\_\_hit](PolygonBox.md#__hit)
- [\_\_hitFill](PolygonBox.md#__hitfill)
- [\_\_hitStroke](PolygonBox.md#__hitstroke)
- [\_\_hitPixel](PolygonBox.md#__hitpixel)
- [\_\_drawHitPath](PolygonBox.md#__drawhitpath)
- [\_\_updateHitCanvas](PolygonBox.md#__updatehitcanvas)
- [\_\_drawFast](PolygonBox.md#__drawfast)
- [\_\_draw](PolygonBox.md#__draw)
- [\_\_clip](PolygonBox.md#__clip)
- [\_\_renderShape](PolygonBox.md#__rendershape)
- [\_\_drawShape](PolygonBox.md#__drawshape)
- [\_\_updateWorldOpacity](PolygonBox.md#__updateworldopacity)
- [getMotionPathData](PolygonBox.md#getmotionpathdata)
- [getMotionPoint](PolygonBox.md#getmotionpoint)
- [getMotionTotal](PolygonBox.md#getmotiontotal)
- [\_\_updateMotionPath](PolygonBox.md#__updatemotionpath)
- [\_\_runAnimation](PolygonBox.md#__runanimation)
- [\_\_updateSortChildren](PolygonBox.md#__updatesortchildren)
- [dropTo](PolygonBox.md#dropto)
- [on](PolygonBox.md#on)
- [off](PolygonBox.md#off)
- [on\_](PolygonBox.md#on_)
- [off\_](PolygonBox.md#off_)
- [once](PolygonBox.md#once)
- [emit](PolygonBox.md#emit)
- [emitEvent](PolygonBox.md#emitevent)
- [hasEvent](PolygonBox.md#hasevent)
- [changeAttr](PolygonBox.md#changeattr)
- [addAttr](PolygonBox.md#addattr)
- [\_\_emitLifeEvent](PolygonBox.md#__emitlifeevent)
- [\_\_updateStrokeSpread](PolygonBox.md#__updatestrokespread)
- [\_\_updateRectRenderSpread](PolygonBox.md#__updaterectrenderspread)
- [\_\_updateRenderSpread](PolygonBox.md#__updaterenderspread)
- [\_\_updateRectBoxBounds](PolygonBox.md#__updaterectboxbounds)
- [\_\_updateBoxBounds](PolygonBox.md#__updateboxbounds)
- [\_\_updateStrokeBounds](PolygonBox.md#__updatestrokebounds)
- [\_\_updateRenderBounds](PolygonBox.md#__updaterenderbounds)
- [\_\_updateRectRenderBounds](PolygonBox.md#__updaterectrenderbounds)
- [\_\_checkScroll](PolygonBox.md#__checkscroll)
- [\_\_updateRectChange](PolygonBox.md#__updaterectchange)
- [\_\_updateChange](PolygonBox.md#__updatechange)
- [\_\_renderRect](PolygonBox.md#__renderrect)
- [\_\_renderGroup](PolygonBox.md#__rendergroup)
- [\_\_render](PolygonBox.md#__render)
- [\_\_drawContent](PolygonBox.md#__drawcontent)
- [reset](PolygonBox.md#reset)
- [\_\_setBranch](PolygonBox.md#__setbranch)
- [set](PolygonBox.md#set)
- [toJSON](PolygonBox.md#tojson)
- [pick](PolygonBox.md#pick)
- [addAt](PolygonBox.md#addat)
- [addAfter](PolygonBox.md#addafter)
- [addBefore](PolygonBox.md#addbefore)
- [add](PolygonBox.md#add)
- [addMany](PolygonBox.md#addmany)
- [remove](PolygonBox.md#remove)
- [removeAll](PolygonBox.md#removeall)
- [clear](PolygonBox.md#clear)
- [get](PolygonBox.md#get)
- [createProxyData](PolygonBox.md#createproxydata)
- [clearProxyData](PolygonBox.md#clearproxydata)
- [find](PolygonBox.md#find)
- [findTag](PolygonBox.md#findtag)
- [findOne](PolygonBox.md#findone)
- [findId](PolygonBox.md#findid)
- [getPath](PolygonBox.md#getpath)
- [getPathString](PolygonBox.md#getpathstring)
- [asPath](PolygonBox.md#aspath)
- [load](PolygonBox.md#load)
- [\_\_onUpdateSize](PolygonBox.md#__onupdatesize)
- [\_\_updateRenderPath](PolygonBox.md#__updaterenderpath)
- [\_\_drawRenderPath](PolygonBox.md#__drawrenderpath)
- [\_\_drawPath](PolygonBox.md#__drawpath)
- [\_\_drawPathByData](PolygonBox.md#__drawpathbydata)
- [\_\_drawPathByBox](PolygonBox.md#__drawpathbybox)
- [drawImagePlaceholder](PolygonBox.md#drawimageplaceholder)
- [animate](PolygonBox.md#animate)
- [killAnimate](PolygonBox.md#killanimate)
- [export](PolygonBox.md#export)
- [syncExport](PolygonBox.md#syncexport)
- [clone](PolygonBox.md#clone)
- [one](PolygonBox.md#one)
- [registerUI](PolygonBox.md#registerui)
- [registerData](PolygonBox.md#registerdata)
- [setEditConfig](PolygonBox.md#seteditconfig)
- [setEditOuter](PolygonBox.md#seteditouter)
- [setEditInner](PolygonBox.md#seteditinner)
- [destroy](PolygonBox.md#destroy)

## Constructors

### constructor

• **new PolygonBox**\<`TInputData`\>(`data?`): [`PolygonBox`](PolygonBox.md)\<`TInputData`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TInputData` | [`IPolygonBoxInputData`](../interfaces/IPolygonBoxInputData.md) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `TInputData` |

#### Returns

[`PolygonBox`](PolygonBox.md)\<`TInputData`\>

#### Inherited from

[Box](Box.md).[constructor](Box.md#constructor)

#### Defined in

[src/ui/packages/display/src/Box.ts:51](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/display/src/Box.ts#L51)

## Properties

### \_\_

• **\_\_**: [`IPolygonBoxData`](../interfaces/IPolygonBoxData.md)

#### Implementation of

[IPolygonBox](../interfaces/IPolygonBox.md).[__](../interfaces/IPolygonBox.md#__)

#### Overrides

[Box](Box.md).[__](Box.md#__)

#### Defined in

[src/in/packages/box/src/PolygonBox.ts:16](https://github.com/leaferjs/leafer-in/blob/d97f6888a45310d40717e43f47796d4f7d0dce1d/packages/box/src/PolygonBox.ts#L16)

___

### sides

• `Optional` **sides**: `number`

#### Implementation of

[IPolygonBox](../interfaces/IPolygonBox.md).[sides](../interfaces/IPolygonBox.md#sides)

#### Defined in

[src/in/packages/box/src/PolygonBox.ts:19](https://github.com/leaferjs/leafer-in/blob/d97f6888a45310d40717e43f47796d4f7d0dce1d/packages/box/src/PolygonBox.ts#L19)

___

### points

• `Optional` **points**: `number`[] \| [`IPointData`](../interfaces/IPointData.md)[]

#### Implementation of

[IPolygonBox](../interfaces/IPolygonBox.md).[points](../interfaces/IPolygonBox.md#points)

#### Defined in

[src/in/packages/box/src/PolygonBox.ts:22](https://github.com/leaferjs/leafer-in/blob/d97f6888a45310d40717e43f47796d4f7d0dce1d/packages/box/src/PolygonBox.ts#L22)

___

### curve

• `Optional` **curve**: `number` \| `boolean`

#### Implementation of

[IPolygonBox](../interfaces/IPolygonBox.md).[curve](../interfaces/IPolygonBox.md#curve)

#### Defined in

[src/in/packages/box/src/PolygonBox.ts:25](https://github.com/leaferjs/leafer-in/blob/d97f6888a45310d40717e43f47796d4f7d0dce1d/packages/box/src/PolygonBox.ts#L25)

___

### innerId

• `Readonly` **innerId**: `number`

#### Implementation of

[IPolygonBox](../interfaces/IPolygonBox.md).[innerId](../interfaces/IPolygonBox.md#innerid)

#### Inherited from

[Box](Box.md).[innerId](Box.md#innerid)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:33](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/display/src/Leaf.ts#L33)

___

### skipJSON

• `Optional` **skipJSON**: `boolean`

#### Implementation of

[IPolygonBox](../interfaces/IPolygonBox.md).[skipJSON](../interfaces/IPolygonBox.md#skipjson)

#### Inherited from

[Box](Box.md).[skipJSON](Box.md#skipjson)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:49](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/display/src/Leaf.ts#L49)

___

### syncEventer

• `Optional` **syncEventer**: [`ILeaf`](../interfaces/ILeaf.md)

#### Implementation of

[IPolygonBox](../interfaces/IPolygonBox.md).[syncEventer](../interfaces/IPolygonBox.md#synceventer)

#### Inherited from

[Box](Box.md).[syncEventer](Box.md#synceventer)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:50](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/display/src/Leaf.ts#L50)

___

### lockNormalStyle

• `Optional` **lockNormalStyle**: `boolean`

#### Implementation of

[IPolygonBox](../interfaces/IPolygonBox.md).[lockNormalStyle](../interfaces/IPolygonBox.md#locknormalstyle)

#### Inherited from

[Box](Box.md).[lockNormalStyle](Box.md#locknormalstyle)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:51](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/display/src/Leaf.ts#L51)

___

### \_\_layout

• **\_\_layout**: [`ILeafLayout`](../interfaces/ILeafLayout.md)

#### Implementation of

[IPolygonBox](../interfaces/IPolygonBox.md).[__layout](../interfaces/IPolygonBox.md#__layout)

#### Inherited from

[Box](Box.md).[__layout](Box.md#__layout)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:54](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/display/src/Leaf.ts#L54)

___

### \_\_world

• **\_\_world**: [`IMatrixWithBoundsScaleData`](../interfaces/IMatrixWithBoundsScaleData.md)

#### Implementation of

[IPolygonBox](../interfaces/IPolygonBox.md).[__world](../interfaces/IPolygonBox.md#__world)

#### Inherited from

[Box](Box.md).[__world](Box.md#__world)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:56](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/display/src/Leaf.ts#L56)

___

### \_\_local

• `Optional` **\_\_local**: [`IMatrixWithBoundsData`](../interfaces/IMatrixWithBoundsData.md)

#### Implementation of

[IPolygonBox](../interfaces/IPolygonBox.md).[__local](../interfaces/IPolygonBox.md#__local)

#### Inherited from

[Box](Box.md).[__local](Box.md#__local)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:57](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/display/src/Leaf.ts#L57)

___

### \_\_nowWorld

• `Optional` **\_\_nowWorld**: [`IMatrixWithBoundsScaleData`](../interfaces/IMatrixWithBoundsScaleData.md)

#### Implementation of

[IPolygonBox](../interfaces/IPolygonBox.md).[__nowWorld](../interfaces/IPolygonBox.md#__nowworld)

#### Inherited from

[Box](Box.md).[__nowWorld](Box.md#__nowworld)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:59](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/display/src/Leaf.ts#L59)

___

### \_\_cameraWorld

• `Optional` **\_\_cameraWorld**: [`IMatrixWithBoundsScaleData`](../interfaces/IMatrixWithBoundsScaleData.md)

#### Implementation of

[IPolygonBox](../interfaces/IPolygonBox.md).[__cameraWorld](../interfaces/IPolygonBox.md#__cameraworld)

#### Inherited from

[Box](Box.md).[__cameraWorld](Box.md#__cameraworld)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:60](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/display/src/Leaf.ts#L60)

___

### \_\_worldOpacity

• **\_\_worldOpacity**: `number`

#### Implementation of

[IPolygonBox](../interfaces/IPolygonBox.md).[__worldOpacity](../interfaces/IPolygonBox.md#__worldopacity)

#### Inherited from

[Box](Box.md).[__worldOpacity](Box.md#__worldopacity)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:65](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/display/src/Leaf.ts#L65)

___

### \_\_scrollWorld

• `Optional` **\_\_scrollWorld**: [`IMatrixWithBoundsScaleData`](../interfaces/IMatrixWithBoundsScaleData.md)

#### Implementation of

[IPolygonBox](../interfaces/IPolygonBox.md).[__scrollWorld](../interfaces/IPolygonBox.md#__scrollworld)

#### Inherited from

[Box](Box.md).[__scrollWorld](Box.md#__scrollworld)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:71](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/display/src/Leaf.ts#L71)

___

### \_\_level

• **\_\_level**: `number`

#### Implementation of

[IPolygonBox](../interfaces/IPolygonBox.md).[__level](../interfaces/IPolygonBox.md#__level)

#### Inherited from

[Box](Box.md).[__level](Box.md#__level)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:84](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/display/src/Leaf.ts#L84)

___

### \_\_tempNumber

• **\_\_tempNumber**: `number`

#### Implementation of

[IPolygonBox](../interfaces/IPolygonBox.md).[__tempNumber](../interfaces/IPolygonBox.md#__tempnumber)

#### Inherited from

[Box](Box.md).[__tempNumber](Box.md#__tempnumber)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:85](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/display/src/Leaf.ts#L85)

___

### \_\_hasAutoLayout

• `Optional` **\_\_hasAutoLayout**: `boolean`

#### Implementation of

[IPolygonBox](../interfaces/IPolygonBox.md).[__hasAutoLayout](../interfaces/IPolygonBox.md#__hasautolayout)

#### Inherited from

[Box](Box.md).[__hasAutoLayout](Box.md#__hasautolayout)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:89](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/display/src/Leaf.ts#L89)

___

### \_\_hasMask

• `Optional` **\_\_hasMask**: `boolean`

#### Implementation of

[IPolygonBox](../interfaces/IPolygonBox.md).[__hasMask](../interfaces/IPolygonBox.md#__hasmask)

#### Inherited from

[Box](Box.md).[__hasMask](Box.md#__hasmask)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:90](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/display/src/Leaf.ts#L90)

___

### \_\_hasEraser

• `Optional` **\_\_hasEraser**: `boolean`

#### Implementation of

[IPolygonBox](../interfaces/IPolygonBox.md).[__hasEraser](../interfaces/IPolygonBox.md#__haseraser)

#### Inherited from

[Box](Box.md).[__hasEraser](Box.md#__haseraser)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:91](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/display/src/Leaf.ts#L91)

___

### \_\_hitCanvas

• `Optional` **\_\_hitCanvas**: [`IHitCanvas`](../interfaces/IHitCanvas.md)

#### Implementation of

[IPolygonBox](../interfaces/IPolygonBox.md).[__hitCanvas](../interfaces/IPolygonBox.md#__hitcanvas)

#### Inherited from

[Box](Box.md).[__hitCanvas](Box.md#__hitcanvas)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:92](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/display/src/Leaf.ts#L92)

___

### \_\_captureMap

• `Optional` **\_\_captureMap**: [`IEventListenerMap`](../interfaces/IEventListenerMap.md)

#### Implementation of

[IPolygonBox](../interfaces/IPolygonBox.md).[__captureMap](../interfaces/IPolygonBox.md#__capturemap)

#### Inherited from

[Box](Box.md).[__captureMap](Box.md#__capturemap)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:103](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/display/src/Leaf.ts#L103)

___

### \_\_bubbleMap

• `Optional` **\_\_bubbleMap**: [`IEventListenerMap`](../interfaces/IEventListenerMap.md)

#### Implementation of

[IPolygonBox](../interfaces/IPolygonBox.md).[__bubbleMap](../interfaces/IPolygonBox.md#__bubblemap)

#### Inherited from

[Box](Box.md).[__bubbleMap](Box.md#__bubblemap)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:104](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/display/src/Leaf.ts#L104)

___

### \_\_hasLocalEvent

• `Optional` **\_\_hasLocalEvent**: `boolean`

#### Implementation of

[IPolygonBox](../interfaces/IPolygonBox.md).[__hasLocalEvent](../interfaces/IPolygonBox.md#__haslocalevent)

#### Inherited from

[Box](Box.md).[__hasLocalEvent](Box.md#__haslocalevent)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:106](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/display/src/Leaf.ts#L106)

___

### \_\_hasWorldEvent

• `Optional` **\_\_hasWorldEvent**: `boolean`

#### Implementation of

[IPolygonBox](../interfaces/IPolygonBox.md).[__hasWorldEvent](../interfaces/IPolygonBox.md#__hasworldevent)

#### Inherited from

[Box](Box.md).[__hasWorldEvent](Box.md#__hasworldevent)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:107](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/display/src/Leaf.ts#L107)

___

### destroyed

• **destroyed**: `boolean`

#### Implementation of

[IPolygonBox](../interfaces/IPolygonBox.md).[destroyed](../interfaces/IPolygonBox.md#destroyed)

#### Inherited from

[Box](Box.md).[destroyed](Box.md#destroyed)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:113](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/display/src/Leaf.ts#L113)

___

### width

• `Optional` **width**: `number`

#### Implementation of

[IPolygonBox](../interfaces/IPolygonBox.md).[width](../interfaces/IPolygonBox.md#width)

#### Inherited from

[Box](Box.md).[width](Box.md#width)

#### Defined in

[src/ui/packages/display/src/Box.ts:27](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/display/src/Box.ts#L27)

___

### height

• `Optional` **height**: `number`

#### Implementation of

[IPolygonBox](../interfaces/IPolygonBox.md).[height](../interfaces/IPolygonBox.md#height)

#### Inherited from

[Box](Box.md).[height](Box.md#height)

#### Defined in

[src/ui/packages/display/src/Box.ts:30](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/display/src/Box.ts#L30)

___

### resizeChildren

• `Optional` **resizeChildren**: `boolean`

#### Implementation of

[IPolygonBox](../interfaces/IPolygonBox.md).[resizeChildren](../interfaces/IPolygonBox.md#resizechildren)

#### Inherited from

[Box](Box.md).[resizeChildren](Box.md#resizechildren)

#### Defined in

[src/ui/packages/display/src/Box.ts:33](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/display/src/Box.ts#L33)

___

### textBox

• `Optional` **textBox**: `boolean`

#### Implementation of

[IPolygonBox](../interfaces/IPolygonBox.md).[textBox](../interfaces/IPolygonBox.md#textbox)

#### Inherited from

[Box](Box.md).[textBox](Box.md#textbox)

#### Defined in

[src/ui/packages/display/src/Box.ts:36](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/display/src/Box.ts#L36)

___

### overflow

• `Optional` **overflow**: [`IOverflow`](../modules.md#ioverflow)

#### Implementation of

[IPolygonBox](../interfaces/IPolygonBox.md).[overflow](../interfaces/IPolygonBox.md#overflow)

#### Inherited from

[Box](Box.md).[overflow](Box.md#overflow)

#### Defined in

[src/ui/packages/display/src/Box.ts:39](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/display/src/Box.ts#L39)

___

### isOverflow

• `Optional` **isOverflow**: `boolean`

#### Implementation of

[IPolygonBox](../interfaces/IPolygonBox.md).[isOverflow](../interfaces/IPolygonBox.md#isoverflow)

#### Inherited from

[Box](Box.md).[isOverflow](Box.md#isoverflow)

#### Defined in

[src/ui/packages/display/src/Box.ts:41](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/display/src/Box.ts#L41)

___

### scrollConfig

• `Optional` **scrollConfig**: [`IScrollConfig`](../interfaces/IScrollConfig.md)

#### Implementation of

[IPolygonBox](../interfaces/IPolygonBox.md).[scrollConfig](../interfaces/IPolygonBox.md#scrollconfig)

#### Inherited from

[Box](Box.md).[scrollConfig](Box.md#scrollconfig)

#### Defined in

[src/ui/packages/display/src/Box.ts:44](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/display/src/Box.ts#L44)

___

### scroller

• `Optional` **scroller**: [`IScroller`](../interfaces/IScroller.md)

#### Implementation of

[IPolygonBox](../interfaces/IPolygonBox.md).[scroller](../interfaces/IPolygonBox.md#scroller)

#### Inherited from

[Box](Box.md).[scroller](Box.md#scroller)

#### Defined in

[src/ui/packages/display/src/Box.ts:46](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/display/src/Box.ts#L46)

___

### hasScroller

• `Optional` **hasScroller**: `boolean`

#### Implementation of

[IPolygonBox](../interfaces/IPolygonBox.md).[hasScroller](../interfaces/IPolygonBox.md#hasscroller)

#### Inherited from

[Box](Box.md).[hasScroller](Box.md#hasscroller)

#### Defined in

[src/ui/packages/display/src/Box.ts:47](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/display/src/Box.ts#L47)

___

### children

• **children**: [`IUI`](../interfaces/IUI.md)[]

#### Implementation of

[IPolygonBox](../interfaces/IPolygonBox.md).[children](../interfaces/IPolygonBox.md#children)

#### Inherited from

[Box](Box.md).[children](Box.md#children)

#### Defined in

[src/ui/packages/display/src/Group.ts:28](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/display/src/Group.ts#L28)

___

### topChildren

• `Optional` **topChildren**: [`IUI`](../interfaces/IUI.md)[]

#### Implementation of

[IPolygonBox](../interfaces/IPolygonBox.md).[topChildren](../interfaces/IPolygonBox.md#topchildren)

#### Inherited from

[Box](Box.md).[topChildren](Box.md#topchildren)

#### Defined in

[src/ui/packages/display/src/Group.ts:30](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/display/src/Group.ts#L30)

___

### childlessJSON

• `Optional` **childlessJSON**: `boolean`

#### Implementation of

[IPolygonBox](../interfaces/IPolygonBox.md).[childlessJSON](../interfaces/IPolygonBox.md#childlessjson)

#### Inherited from

[Box](Box.md).[childlessJSON](Box.md#childlessjson)

#### Defined in

[src/ui/packages/display/src/Group.ts:32](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/display/src/Group.ts#L32)

___

### proxyData

• `Optional` **proxyData**: [`IUIInputData`](../interfaces/IUIInputData.md)

#### Implementation of

[IPolygonBox](../interfaces/IPolygonBox.md).[proxyData](../interfaces/IPolygonBox.md#proxydata)

#### Inherited from

[Box](Box.md).[proxyData](Box.md#proxydata)

#### Defined in

[src/ui/packages/display/src/UI.ts:21](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/display/src/UI.ts#L21)

___

### \_\_proxyData

• `Optional` **\_\_proxyData**: [`IUIInputData`](../interfaces/IUIInputData.md)

#### Implementation of

[IPolygonBox](../interfaces/IPolygonBox.md).[__proxyData](../interfaces/IPolygonBox.md#__proxydata)

#### Inherited from

[Box](Box.md).[__proxyData](Box.md#__proxydata)

#### Defined in

[src/ui/packages/display/src/UI.ts:22](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/display/src/UI.ts#L22)

___

### leafer

• `Optional` **leafer**: [`ILeafer`](../interfaces/ILeafer.md)

#### Implementation of

[IPolygonBox](../interfaces/IPolygonBox.md).[leafer](../interfaces/IPolygonBox.md#leafer)

#### Inherited from

[Box](Box.md).[leafer](Box.md#leafer)

#### Defined in

[src/ui/packages/display/src/UI.ts:26](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/display/src/UI.ts#L26)

___

### parent

• `Optional` **parent**: [`IGroup`](../interfaces/IGroup.md)

#### Implementation of

[IPolygonBox](../interfaces/IPolygonBox.md).[parent](../interfaces/IPolygonBox.md#parent)

#### Inherited from

[Box](Box.md).[parent](Box.md#parent)

#### Defined in

[src/ui/packages/display/src/UI.ts:27](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/display/src/UI.ts#L27)

___

### zoomLayer

• **zoomLayer**: [`IGroup`](../interfaces/IGroup.md)

#### Implementation of

[IPolygonBox](../interfaces/IPolygonBox.md).[zoomLayer](../interfaces/IPolygonBox.md#zoomlayer)

#### Inherited from

[Box](Box.md).[zoomLayer](Box.md#zoomlayer)

#### Defined in

[src/ui/packages/display/src/UI.ts:30](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/display/src/UI.ts#L30)

___

### startLinker

• `Optional` **startLinker**: [`ILinker`](../interfaces/ILinker.md)[]

#### Implementation of

[IPolygonBox](../interfaces/IPolygonBox.md).[startLinker](../interfaces/IPolygonBox.md#startlinker)

#### Inherited from

[Box](Box.md).[startLinker](Box.md#startlinker)

#### Defined in

[src/ui/packages/display/src/UI.ts:37](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/display/src/UI.ts#L37)

___

### endLinker

• `Optional` **endLinker**: [`ILinker`](../interfaces/ILinker.md)[]

#### Implementation of

[IPolygonBox](../interfaces/IPolygonBox.md).[endLinker](../interfaces/IPolygonBox.md#endlinker)

#### Inherited from

[Box](Box.md).[endLinker](Box.md#endlinker)

#### Defined in

[src/ui/packages/display/src/UI.ts:38](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/display/src/UI.ts#L38)

___

### id

• `Optional` **id**: `string`

#### Implementation of

[IPolygonBox](../interfaces/IPolygonBox.md).[id](../interfaces/IPolygonBox.md#id)

#### Inherited from

[Box](Box.md).[id](Box.md#id)

#### Defined in

[src/ui/packages/display/src/UI.ts:44](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/display/src/UI.ts#L44)

___

### name

• `Optional` **name**: `string`

#### Implementation of

[IPolygonBox](../interfaces/IPolygonBox.md).[name](../interfaces/IPolygonBox.md#name)

#### Inherited from

[Box](Box.md).[name](Box.md#name)

#### Defined in

[src/ui/packages/display/src/UI.ts:47](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/display/src/UI.ts#L47)

___

### className

• `Optional` **className**: `string`

#### Implementation of

[IPolygonBox](../interfaces/IPolygonBox.md).[className](../interfaces/IPolygonBox.md#classname)

#### Inherited from

[Box](Box.md).[className](Box.md#classname)

#### Defined in

[src/ui/packages/display/src/UI.ts:50](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/display/src/UI.ts#L50)

___

### blendMode

• `Optional` **blendMode**: [`IBlendMode`](../modules.md#iblendmode)

#### Implementation of

[IPolygonBox](../interfaces/IPolygonBox.md).[blendMode](../interfaces/IPolygonBox.md#blendmode)

#### Inherited from

[Box](Box.md).[blendMode](Box.md#blendmode)

#### Defined in

[src/ui/packages/display/src/UI.ts:55](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/display/src/UI.ts#L55)

___

### opacity

• `Optional` **opacity**: `number`

#### Implementation of

[IPolygonBox](../interfaces/IPolygonBox.md).[opacity](../interfaces/IPolygonBox.md#opacity)

#### Inherited from

[Box](Box.md).[opacity](Box.md#opacity)

#### Defined in

[src/ui/packages/display/src/UI.ts:58](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/display/src/UI.ts#L58)

___

### visible

• `Optional` **visible**: `boolean` \| ``0``

#### Implementation of

[IPolygonBox](../interfaces/IPolygonBox.md).[visible](../interfaces/IPolygonBox.md#visible)

#### Inherited from

[Box](Box.md).[visible](Box.md#visible)

#### Defined in

[src/ui/packages/display/src/UI.ts:61](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/display/src/UI.ts#L61)

___

### locked

• `Optional` **locked**: `boolean`

#### Implementation of

[IPolygonBox](../interfaces/IPolygonBox.md).[locked](../interfaces/IPolygonBox.md#locked)

#### Inherited from

[Box](Box.md).[locked](Box.md#locked)

#### Defined in

[src/ui/packages/display/src/UI.ts:65](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/display/src/UI.ts#L65)

___

### dim

• `Optional` **dim**: `number` \| `boolean`

#### Implementation of

[IPolygonBox](../interfaces/IPolygonBox.md).[dim](../interfaces/IPolygonBox.md#dim)

#### Inherited from

[Box](Box.md).[dim](Box.md#dim)

#### Defined in

[src/ui/packages/display/src/UI.ts:71](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/display/src/UI.ts#L71)

___

### dimskip

• `Optional` **dimskip**: `boolean`

#### Implementation of

[IPolygonBox](../interfaces/IPolygonBox.md).[dimskip](../interfaces/IPolygonBox.md#dimskip)

#### Inherited from

[Box](Box.md).[dimskip](Box.md#dimskip)

#### Defined in

[src/ui/packages/display/src/UI.ts:74](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/display/src/UI.ts#L74)

___

### bright

• `Optional` **bright**: `boolean`

#### Implementation of

[IPolygonBox](../interfaces/IPolygonBox.md).[bright](../interfaces/IPolygonBox.md#bright)

#### Inherited from

[Box](Box.md).[bright](Box.md#bright)

#### Defined in

[src/ui/packages/display/src/UI.ts:76](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/display/src/UI.ts#L76)

___

### zIndex

• `Optional` **zIndex**: `number`

#### Implementation of

[IPolygonBox](../interfaces/IPolygonBox.md).[zIndex](../interfaces/IPolygonBox.md#zindex)

#### Inherited from

[Box](Box.md).[zIndex](Box.md#zindex)

#### Defined in

[src/ui/packages/display/src/UI.ts:80](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/display/src/UI.ts#L80)

___

### mask

• `Optional` **mask**: `boolean` \| [`IMaskType`](../modules.md#imasktype)

#### Implementation of

[IPolygonBox](../interfaces/IPolygonBox.md).[mask](../interfaces/IPolygonBox.md#mask)

#### Inherited from

[Box](Box.md).[mask](Box.md#mask)

#### Defined in

[src/ui/packages/display/src/UI.ts:84](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/display/src/UI.ts#L84)

___

### eraser

• `Optional` **eraser**: `boolean` \| [`IEraserType`](../modules.md#ierasertype)

#### Implementation of

[IPolygonBox](../interfaces/IPolygonBox.md).[eraser](../interfaces/IPolygonBox.md#eraser)

#### Inherited from

[Box](Box.md).[eraser](Box.md#eraser)

#### Defined in

[src/ui/packages/display/src/UI.ts:87](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/display/src/UI.ts#L87)

___

### x

• `Optional` **x**: `number`

#### Implementation of

[IPolygonBox](../interfaces/IPolygonBox.md).[x](../interfaces/IPolygonBox.md#x)

#### Inherited from

[Box](Box.md).[x](Box.md#x)

#### Defined in

[src/ui/packages/display/src/UI.ts:92](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/display/src/UI.ts#L92)

___

### y

• `Optional` **y**: `number`

#### Implementation of

[IPolygonBox](../interfaces/IPolygonBox.md).[y](../interfaces/IPolygonBox.md#y)

#### Inherited from

[Box](Box.md).[y](Box.md#y)

#### Defined in

[src/ui/packages/display/src/UI.ts:95](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/display/src/UI.ts#L95)

___

### scaleX

• `Optional` **scaleX**: `number`

#### Implementation of

[IPolygonBox](../interfaces/IPolygonBox.md).[scaleX](../interfaces/IPolygonBox.md#scalex)

#### Inherited from

[Box](Box.md).[scaleX](Box.md#scalex)

#### Defined in

[src/ui/packages/display/src/UI.ts:106](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/display/src/UI.ts#L106)

___

### scaleY

• `Optional` **scaleY**: `number`

#### Implementation of

[IPolygonBox](../interfaces/IPolygonBox.md).[scaleY](../interfaces/IPolygonBox.md#scaley)

#### Inherited from

[Box](Box.md).[scaleY](Box.md#scaley)

#### Defined in

[src/ui/packages/display/src/UI.ts:109](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/display/src/UI.ts#L109)

___

### scaleFixed

• `Optional` **scaleFixed**: [`IScaleFixed`](../modules.md#iscalefixed)

#### Implementation of

[IPolygonBox](../interfaces/IPolygonBox.md).[scaleFixed](../interfaces/IPolygonBox.md#scalefixed)

#### Inherited from

[Box](Box.md).[scaleFixed](Box.md#scalefixed)

#### Defined in

[src/ui/packages/display/src/UI.ts:112](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/display/src/UI.ts#L112)

___

### rotation

• `Optional` **rotation**: `number`

#### Implementation of

[IPolygonBox](../interfaces/IPolygonBox.md).[rotation](../interfaces/IPolygonBox.md#rotation)

#### Inherited from

[Box](Box.md).[rotation](Box.md#rotation)

#### Defined in

[src/ui/packages/display/src/UI.ts:116](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/display/src/UI.ts#L116)

___

### skewX

• `Optional` **skewX**: `number`

#### Implementation of

[IPolygonBox](../interfaces/IPolygonBox.md).[skewX](../interfaces/IPolygonBox.md#skewx)

#### Inherited from

[Box](Box.md).[skewX](Box.md#skewx)

#### Defined in

[src/ui/packages/display/src/UI.ts:120](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/display/src/UI.ts#L120)

___

### skewY

• `Optional` **skewY**: `number`

#### Implementation of

[IPolygonBox](../interfaces/IPolygonBox.md).[skewY](../interfaces/IPolygonBox.md#skewy)

#### Inherited from

[Box](Box.md).[skewY](Box.md#skewy)

#### Defined in

[src/ui/packages/display/src/UI.ts:123](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/display/src/UI.ts#L123)

___

### offsetX

• `Optional` **offsetX**: `number`

#### Implementation of

[IPolygonBox](../interfaces/IPolygonBox.md).[offsetX](../interfaces/IPolygonBox.md#offsetx)

#### Inherited from

[Box](Box.md).[offsetX](Box.md#offsetx)

#### Defined in

[src/ui/packages/display/src/UI.ts:128](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/display/src/UI.ts#L128)

___

### offsetY

• `Optional` **offsetY**: `number`

#### Implementation of

[IPolygonBox](../interfaces/IPolygonBox.md).[offsetY](../interfaces/IPolygonBox.md#offsety)

#### Inherited from

[Box](Box.md).[offsetY](Box.md#offsety)

#### Defined in

[src/ui/packages/display/src/UI.ts:131](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/display/src/UI.ts#L131)

___

### scrollX

• `Optional` **scrollX**: `number`

#### Implementation of

[IPolygonBox](../interfaces/IPolygonBox.md).[scrollX](../interfaces/IPolygonBox.md#scrollx)

#### Inherited from

[Box](Box.md).[scrollX](Box.md#scrollx)

#### Defined in

[src/ui/packages/display/src/UI.ts:135](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/display/src/UI.ts#L135)

___

### scrollY

• `Optional` **scrollY**: `number`

#### Implementation of

[IPolygonBox](../interfaces/IPolygonBox.md).[scrollY](../interfaces/IPolygonBox.md#scrolly)

#### Inherited from

[Box](Box.md).[scrollY](Box.md#scrolly)

#### Defined in

[src/ui/packages/display/src/UI.ts:138](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/display/src/UI.ts#L138)

___

### origin

• `Optional` **origin**: [`IUnitPointData`](../interfaces/IUnitPointData.md) \| [`IDirection`](../modules.md#idirection)

#### Implementation of

[IPolygonBox](../interfaces/IPolygonBox.md).[origin](../interfaces/IPolygonBox.md#origin)

#### Inherited from

[Box](Box.md).[origin](Box.md#origin)

#### Defined in

[src/ui/packages/display/src/UI.ts:143](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/display/src/UI.ts#L143)

___

### around

• `Optional` **around**: [`IUnitPointData`](../interfaces/IUnitPointData.md) \| [`IDirection`](../modules.md#idirection)

#### Implementation of

[IPolygonBox](../interfaces/IPolygonBox.md).[around](../interfaces/IPolygonBox.md#around)

#### Inherited from

[Box](Box.md).[around](Box.md#around)

#### Defined in

[src/ui/packages/display/src/UI.ts:146](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/display/src/UI.ts#L146)

___

### lazy

• `Optional` **lazy**: `boolean`

#### Implementation of

[IPolygonBox](../interfaces/IPolygonBox.md).[lazy](../interfaces/IPolygonBox.md#lazy)

#### Inherited from

[Box](Box.md).[lazy](Box.md#lazy)

#### Defined in

[src/ui/packages/display/src/UI.ts:151](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/display/src/UI.ts#L151)

___

### pixelRatio

• `Optional` **pixelRatio**: `number`

#### Implementation of

[IPolygonBox](../interfaces/IPolygonBox.md).[pixelRatio](../interfaces/IPolygonBox.md#pixelratio)

#### Inherited from

[Box](Box.md).[pixelRatio](Box.md#pixelratio)

#### Defined in

[src/ui/packages/display/src/UI.ts:154](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/display/src/UI.ts#L154)

___

### renderSpread

• `Optional` **renderSpread**: [`IFourNumber`](../modules.md#ifournumber)

#### Implementation of

[IPolygonBox](../interfaces/IPolygonBox.md).[renderSpread](../interfaces/IPolygonBox.md#renderspread)

#### Inherited from

[Box](Box.md).[renderSpread](Box.md#renderspread)

#### Defined in

[src/ui/packages/display/src/UI.ts:158](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/display/src/UI.ts#L158)

___

### path

• `Optional` **path**: `string` \| [`IPathCommandData`](../modules.md#ipathcommanddata) \| [`IPathCommandNode`](../modules.md#ipathcommandnode)[] \| [`IPathCommandObject`](../modules.md#ipathcommandobject)[]

#### Implementation of

[IPolygonBox](../interfaces/IPolygonBox.md).[path](../interfaces/IPolygonBox.md#path)

#### Inherited from

[Box](Box.md).[path](Box.md#path)

#### Defined in

[src/ui/packages/display/src/UI.ts:163](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/display/src/UI.ts#L163)

___

### windingRule

• `Optional` **windingRule**: [`IWindingRule`](../modules.md#iwindingrule)

#### Implementation of

[IPolygonBox](../interfaces/IPolygonBox.md).[windingRule](../interfaces/IPolygonBox.md#windingrule)

#### Inherited from

[Box](Box.md).[windingRule](Box.md#windingrule)

#### Defined in

[src/ui/packages/display/src/UI.ts:166](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/display/src/UI.ts#L166)

___

### closed

• `Optional` **closed**: `boolean`

#### Implementation of

[IPolygonBox](../interfaces/IPolygonBox.md).[closed](../interfaces/IPolygonBox.md#closed)

#### Inherited from

[Box](Box.md).[closed](Box.md#closed)

#### Defined in

[src/ui/packages/display/src/UI.ts:169](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/display/src/UI.ts#L169)

___

### flow

• `Optional` **flow**: [`IFlowType`](../modules.md#iflowtype)

#### Implementation of

[IPolygonBox](../interfaces/IPolygonBox.md).[flow](../interfaces/IPolygonBox.md#flow)

#### Inherited from

[Box](Box.md).[flow](Box.md#flow)

#### Defined in

[src/ui/packages/display/src/UI.ts:173](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/display/src/UI.ts#L173)

___

### padding

• `Optional` **padding**: [`IFourNumber`](../modules.md#ifournumber)

#### Implementation of

[IPolygonBox](../interfaces/IPolygonBox.md).[padding](../interfaces/IPolygonBox.md#padding)

#### Inherited from

[Box](Box.md).[padding](Box.md#padding)

#### Defined in

[src/ui/packages/display/src/UI.ts:176](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/display/src/UI.ts#L176)

___

### gap

• `Optional` **gap**: [`IGap`](../modules.md#igap) \| [`IPointGap`](../interfaces/IPointGap.md)

#### Implementation of

[IPolygonBox](../interfaces/IPolygonBox.md).[gap](../interfaces/IPolygonBox.md#gap)

#### Inherited from

[Box](Box.md).[gap](Box.md#gap)

#### Defined in

[src/ui/packages/display/src/UI.ts:178](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/display/src/UI.ts#L178)

___

### flowAlign

• `Optional` **flowAlign**: [`IFlowAxisAlign`](../interfaces/IFlowAxisAlign.md) \| [`IFlowAlign`](../modules.md#iflowalign)

#### Implementation of

[IPolygonBox](../interfaces/IPolygonBox.md).[flowAlign](../interfaces/IPolygonBox.md#flowalign)

#### Inherited from

[Box](Box.md).[flowAlign](Box.md#flowalign)

#### Defined in

[src/ui/packages/display/src/UI.ts:180](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/display/src/UI.ts#L180)

___

### flowWrap

• `Optional` **flowWrap**: [`IFlowWrap`](../modules.md#iflowwrap)

#### Implementation of

[IPolygonBox](../interfaces/IPolygonBox.md).[flowWrap](../interfaces/IPolygonBox.md#flowwrap)

#### Inherited from

[Box](Box.md).[flowWrap](Box.md#flowwrap)

#### Defined in

[src/ui/packages/display/src/UI.ts:182](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/display/src/UI.ts#L182)

___

### itemBox

• `Optional` **itemBox**: [`IFlowBoxType`](../modules.md#iflowboxtype)

#### Implementation of

[IPolygonBox](../interfaces/IPolygonBox.md).[itemBox](../interfaces/IPolygonBox.md#itembox)

#### Inherited from

[Box](Box.md).[itemBox](Box.md#itembox)

#### Defined in

[src/ui/packages/display/src/UI.ts:185](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/display/src/UI.ts#L185)

___

### inFlow

• `Optional` **inFlow**: `boolean`

#### Implementation of

[IPolygonBox](../interfaces/IPolygonBox.md).[inFlow](../interfaces/IPolygonBox.md#inflow)

#### Inherited from

[Box](Box.md).[inFlow](Box.md#inflow)

#### Defined in

[src/ui/packages/display/src/UI.ts:187](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/display/src/UI.ts#L187)

___

### autoWidth

• `Optional` **autoWidth**: [`IAutoSize`](../modules.md#iautosize)

#### Implementation of

[IPolygonBox](../interfaces/IPolygonBox.md).[autoWidth](../interfaces/IPolygonBox.md#autowidth)

#### Inherited from

[Box](Box.md).[autoWidth](Box.md#autowidth)

#### Defined in

[src/ui/packages/display/src/UI.ts:190](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/display/src/UI.ts#L190)

___

### autoHeight

• `Optional` **autoHeight**: [`IAutoSize`](../modules.md#iautosize)

#### Implementation of

[IPolygonBox](../interfaces/IPolygonBox.md).[autoHeight](../interfaces/IPolygonBox.md#autoheight)

#### Inherited from

[Box](Box.md).[autoHeight](Box.md#autoheight)

#### Defined in

[src/ui/packages/display/src/UI.ts:192](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/display/src/UI.ts#L192)

___

### lockRatio

• `Optional` **lockRatio**: `boolean`

#### Implementation of

[IPolygonBox](../interfaces/IPolygonBox.md).[lockRatio](../interfaces/IPolygonBox.md#lockratio)

#### Inherited from

[Box](Box.md).[lockRatio](Box.md#lockratio)

#### Defined in

[src/ui/packages/display/src/UI.ts:195](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/display/src/UI.ts#L195)

___

### autoBox

• `Optional` **autoBox**: [`IAutoBoxData`](../interfaces/IAutoBoxData.md) \| [`IConstraint`](../interfaces/IConstraint.md)

#### Implementation of

[IPolygonBox](../interfaces/IPolygonBox.md).[autoBox](../interfaces/IPolygonBox.md#autobox)

#### Inherited from

[Box](Box.md).[autoBox](Box.md#autobox)

#### Defined in

[src/ui/packages/display/src/UI.ts:197](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/display/src/UI.ts#L197)

___

### widthRange

• `Optional` **widthRange**: [`IRangeSize`](../interfaces/IRangeSize.md)

#### Implementation of

[IPolygonBox](../interfaces/IPolygonBox.md).[widthRange](../interfaces/IPolygonBox.md#widthrange)

#### Inherited from

[Box](Box.md).[widthRange](Box.md#widthrange)

#### Defined in

[src/ui/packages/display/src/UI.ts:200](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/display/src/UI.ts#L200)

___

### heightRange

• `Optional` **heightRange**: [`IRangeSize`](../interfaces/IRangeSize.md)

#### Implementation of

[IPolygonBox](../interfaces/IPolygonBox.md).[heightRange](../interfaces/IPolygonBox.md#heightrange)

#### Inherited from

[Box](Box.md).[heightRange](Box.md#heightrange)

#### Defined in

[src/ui/packages/display/src/UI.ts:203](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/display/src/UI.ts#L203)

___

### draggable

• `Optional` **draggable**: `boolean` \| [`IAxis`](../modules.md#iaxis)

#### Implementation of

[IPolygonBox](../interfaces/IPolygonBox.md).[draggable](../interfaces/IPolygonBox.md#draggable)

#### Inherited from

[Box](Box.md).[draggable](Box.md#draggable)

#### Defined in

[src/ui/packages/display/src/UI.ts:208](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/display/src/UI.ts#L208)

___

### dragBounds

• `Optional` **dragBounds**: ``"parent"`` \| [`IBoundsData`](../interfaces/IBoundsData.md)

#### Implementation of

[IPolygonBox](../interfaces/IPolygonBox.md).[dragBounds](../interfaces/IPolygonBox.md#dragbounds)

#### Inherited from

[Box](Box.md).[dragBounds](Box.md#dragbounds)

#### Defined in

[src/ui/packages/display/src/UI.ts:211](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/display/src/UI.ts#L211)

___

### dragBoundsType

• `Optional` **dragBoundsType**: [`IDragBoundsType`](../modules.md#idragboundstype)

#### Implementation of

[IPolygonBox](../interfaces/IPolygonBox.md).[dragBoundsType](../interfaces/IPolygonBox.md#dragboundstype)

#### Inherited from

[Box](Box.md).[dragBoundsType](Box.md#dragboundstype)

#### Defined in

[src/ui/packages/display/src/UI.ts:214](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/display/src/UI.ts#L214)

___

### editable

• `Optional` **editable**: `boolean`

#### Implementation of

[IPolygonBox](../interfaces/IPolygonBox.md).[editable](../interfaces/IPolygonBox.md#editable)

#### Inherited from

[Box](Box.md).[editable](Box.md#editable)

#### Defined in

[src/ui/packages/display/src/UI.ts:218](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/display/src/UI.ts#L218)

___

### hittable

• `Optional` **hittable**: `boolean`

#### Implementation of

[IPolygonBox](../interfaces/IPolygonBox.md).[hittable](../interfaces/IPolygonBox.md#hittable)

#### Inherited from

[Box](Box.md).[hittable](Box.md#hittable)

#### Defined in

[src/ui/packages/display/src/UI.ts:223](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/display/src/UI.ts#L223)

___

### hitFill

• `Optional` **hitFill**: [`IHitType`](../modules.md#ihittype)

#### Implementation of

[IPolygonBox](../interfaces/IPolygonBox.md).[hitFill](../interfaces/IPolygonBox.md#hitfill)

#### Inherited from

[Box](Box.md).[hitFill](Box.md#hitfill)

#### Defined in

[src/ui/packages/display/src/UI.ts:226](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/display/src/UI.ts#L226)

___

### hitStroke

• `Optional` **hitStroke**: [`IHitType`](../modules.md#ihittype)

#### Implementation of

[IPolygonBox](../interfaces/IPolygonBox.md).[hitStroke](../interfaces/IPolygonBox.md#hitstroke)

#### Inherited from

[Box](Box.md).[hitStroke](Box.md#hitstroke)

#### Defined in

[src/ui/packages/display/src/UI.ts:229](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/display/src/UI.ts#L229)

___

### hitBox

• `Optional` **hitBox**: `boolean`

#### Implementation of

[IPolygonBox](../interfaces/IPolygonBox.md).[hitBox](../interfaces/IPolygonBox.md#hitbox)

#### Inherited from

[Box](Box.md).[hitBox](Box.md#hitbox)

#### Defined in

[src/ui/packages/display/src/UI.ts:232](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/display/src/UI.ts#L232)

___

### hitChildren

• `Optional` **hitChildren**: `boolean`

#### Implementation of

[IPolygonBox](../interfaces/IPolygonBox.md).[hitChildren](../interfaces/IPolygonBox.md#hitchildren)

#### Inherited from

[Box](Box.md).[hitChildren](Box.md#hitchildren)

#### Defined in

[src/ui/packages/display/src/UI.ts:235](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/display/src/UI.ts#L235)

___

### hitSelf

• `Optional` **hitSelf**: `boolean`

#### Implementation of

[IPolygonBox](../interfaces/IPolygonBox.md).[hitSelf](../interfaces/IPolygonBox.md#hitself)

#### Inherited from

[Box](Box.md).[hitSelf](Box.md#hitself)

#### Defined in

[src/ui/packages/display/src/UI.ts:238](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/display/src/UI.ts#L238)

___

### hitRadius

• `Optional` **hitRadius**: `number`

#### Implementation of

[IPolygonBox](../interfaces/IPolygonBox.md).[hitRadius](../interfaces/IPolygonBox.md#hitradius)

#### Inherited from

[Box](Box.md).[hitRadius](Box.md#hitradius)

#### Defined in

[src/ui/packages/display/src/UI.ts:241](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/display/src/UI.ts#L241)

___

### cursor

• `Optional` **cursor**: [`ICursorType`](../modules.md#icursortype) \| [`ICursorType`](../modules.md#icursortype)[]

#### Implementation of

[IPolygonBox](../interfaces/IPolygonBox.md).[cursor](../interfaces/IPolygonBox.md#cursor)

#### Inherited from

[Box](Box.md).[cursor](Box.md#cursor)

#### Defined in

[src/ui/packages/display/src/UI.ts:244](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/display/src/UI.ts#L244)

___

### fill

• `Optional` **fill**: [`IFill`](../modules.md#ifill)

#### Implementation of

[IPolygonBox](../interfaces/IPolygonBox.md).[fill](../interfaces/IPolygonBox.md#fill)

#### Inherited from

[Box](Box.md).[fill](Box.md#fill)

#### Defined in

[src/ui/packages/display/src/UI.ts:252](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/display/src/UI.ts#L252)

___

### stroke

• `Optional` **stroke**: [`IStroke`](../modules.md#istroke)

#### Implementation of

[IPolygonBox](../interfaces/IPolygonBox.md).[stroke](../interfaces/IPolygonBox.md#stroke)

#### Inherited from

[Box](Box.md).[stroke](Box.md#stroke)

#### Defined in

[src/ui/packages/display/src/UI.ts:257](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/display/src/UI.ts#L257)

___

### strokeAlign

• `Optional` **strokeAlign**: [`IStrokeAlign`](../modules.md#istrokealign)

#### Implementation of

[IPolygonBox](../interfaces/IPolygonBox.md).[strokeAlign](../interfaces/IPolygonBox.md#strokealign)

#### Inherited from

[Box](Box.md).[strokeAlign](Box.md#strokealign)

#### Defined in

[src/ui/packages/display/src/UI.ts:260](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/display/src/UI.ts#L260)

___

### strokeWidth

• `Optional` **strokeWidth**: `string` \| [`IFourNumber`](../modules.md#ifournumber)

#### Implementation of

[IPolygonBox](../interfaces/IPolygonBox.md).[strokeWidth](../interfaces/IPolygonBox.md#strokewidth)

#### Inherited from

[Box](Box.md).[strokeWidth](Box.md#strokewidth)

#### Defined in

[src/ui/packages/display/src/UI.ts:263](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/display/src/UI.ts#L263)

___

### strokeScaleFixed

• `Optional` **strokeScaleFixed**: [`IScaleFixed`](../modules.md#iscalefixed)

#### Implementation of

[IPolygonBox](../interfaces/IPolygonBox.md).[strokeScaleFixed](../interfaces/IPolygonBox.md#strokescalefixed)

#### Inherited from

[Box](Box.md).[strokeScaleFixed](Box.md#strokescalefixed)

#### Defined in

[src/ui/packages/display/src/UI.ts:266](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/display/src/UI.ts#L266)

___

### strokeCap

• `Optional` **strokeCap**: [`IStrokeCap`](../modules.md#istrokecap)

#### Implementation of

[IPolygonBox](../interfaces/IPolygonBox.md).[strokeCap](../interfaces/IPolygonBox.md#strokecap)

#### Inherited from

[Box](Box.md).[strokeCap](Box.md#strokecap)

#### Defined in

[src/ui/packages/display/src/UI.ts:273](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/display/src/UI.ts#L273)

___

### strokeJoin

• `Optional` **strokeJoin**: [`IStrokeJoin`](../modules.md#istrokejoin)

#### Implementation of

[IPolygonBox](../interfaces/IPolygonBox.md).[strokeJoin](../interfaces/IPolygonBox.md#strokejoin)

#### Inherited from

[Box](Box.md).[strokeJoin](Box.md#strokejoin)

#### Defined in

[src/ui/packages/display/src/UI.ts:276](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/display/src/UI.ts#L276)

___

### dashPattern

• `Optional` **dashPattern**: `string` \| `number`[]

#### Implementation of

[IPolygonBox](../interfaces/IPolygonBox.md).[dashPattern](../interfaces/IPolygonBox.md#dashpattern)

#### Inherited from

[Box](Box.md).[dashPattern](Box.md#dashpattern)

#### Defined in

[src/ui/packages/display/src/UI.ts:279](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/display/src/UI.ts#L279)

___

### dashOffset

• `Optional` **dashOffset**: `number`

#### Implementation of

[IPolygonBox](../interfaces/IPolygonBox.md).[dashOffset](../interfaces/IPolygonBox.md#dashoffset)

#### Inherited from

[Box](Box.md).[dashOffset](Box.md#dashoffset)

#### Defined in

[src/ui/packages/display/src/UI.ts:282](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/display/src/UI.ts#L282)

___

### miterLimit

• `Optional` **miterLimit**: `number`

#### Implementation of

[IPolygonBox](../interfaces/IPolygonBox.md).[miterLimit](../interfaces/IPolygonBox.md#miterlimit)

#### Inherited from

[Box](Box.md).[miterLimit](Box.md#miterlimit)

#### Defined in

[src/ui/packages/display/src/UI.ts:285](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/display/src/UI.ts#L285)

___

### startArrow

• `Optional` **startArrow**: [`IArrowStyle`](../modules.md#iarrowstyle)

#### Implementation of

[IPolygonBox](../interfaces/IPolygonBox.md).[startArrow](../interfaces/IPolygonBox.md#startarrow)

#### Inherited from

[Box](Box.md).[startArrow](Box.md#startarrow)

#### Defined in

[src/ui/packages/display/src/UI.ts:290](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/display/src/UI.ts#L290)

___

### endArrow

• `Optional` **endArrow**: [`IArrowStyle`](../modules.md#iarrowstyle)

#### Implementation of

[IPolygonBox](../interfaces/IPolygonBox.md).[endArrow](../interfaces/IPolygonBox.md#endarrow)

#### Inherited from

[Box](Box.md).[endArrow](Box.md#endarrow)

#### Defined in

[src/ui/packages/display/src/UI.ts:292](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/display/src/UI.ts#L292)

___

### cornerRadius

• `Optional` **cornerRadius**: `string` \| [`IFourNumber`](../modules.md#ifournumber)

#### Implementation of

[IPolygonBox](../interfaces/IPolygonBox.md).[cornerRadius](../interfaces/IPolygonBox.md#cornerradius)

#### Inherited from

[Box](Box.md).[cornerRadius](Box.md#cornerradius)

#### Defined in

[src/ui/packages/display/src/UI.ts:297](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/display/src/UI.ts#L297)

___

### cornerSmoothing

• `Optional` **cornerSmoothing**: `number`

#### Implementation of

[IPolygonBox](../interfaces/IPolygonBox.md).[cornerSmoothing](../interfaces/IPolygonBox.md#cornersmoothing)

#### Inherited from

[Box](Box.md).[cornerSmoothing](Box.md#cornersmoothing)

#### Defined in

[src/ui/packages/display/src/UI.ts:300](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/display/src/UI.ts#L300)

___

### shadow

• `Optional` **shadow**: `string` \| [`IShadowEffect`](../interfaces/IShadowEffect.md) \| [`IShadowEffect`](../interfaces/IShadowEffect.md)[]

#### Implementation of

[IPolygonBox](../interfaces/IPolygonBox.md).[shadow](../interfaces/IPolygonBox.md#shadow)

#### Inherited from

[Box](Box.md).[shadow](Box.md#shadow)

#### Defined in

[src/ui/packages/display/src/UI.ts:305](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/display/src/UI.ts#L305)

___

### innerShadow

• `Optional` **innerShadow**: `string` \| [`IShadowEffect`](../interfaces/IShadowEffect.md) \| [`IShadowEffect`](../interfaces/IShadowEffect.md)[]

#### Implementation of

[IPolygonBox](../interfaces/IPolygonBox.md).[innerShadow](../interfaces/IPolygonBox.md#innershadow)

#### Inherited from

[Box](Box.md).[innerShadow](Box.md#innershadow)

#### Defined in

[src/ui/packages/display/src/UI.ts:308](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/display/src/UI.ts#L308)

___

### blur

• `Optional` **blur**: `number` \| [`IBlurEffect`](../interfaces/IBlurEffect.md)

#### Implementation of

[IPolygonBox](../interfaces/IPolygonBox.md).[blur](../interfaces/IPolygonBox.md#blur)

#### Inherited from

[Box](Box.md).[blur](Box.md#blur)

#### Defined in

[src/ui/packages/display/src/UI.ts:311](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/display/src/UI.ts#L311)

___

### backgroundBlur

• `Optional` **backgroundBlur**: `number` \| [`IBlurEffect`](../interfaces/IBlurEffect.md)

#### Implementation of

[IPolygonBox](../interfaces/IPolygonBox.md).[backgroundBlur](../interfaces/IPolygonBox.md#backgroundblur)

#### Inherited from

[Box](Box.md).[backgroundBlur](Box.md#backgroundblur)

#### Defined in

[src/ui/packages/display/src/UI.ts:314](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/display/src/UI.ts#L314)

___

### grayscale

• `Optional` **grayscale**: `number` \| [`IGrayscaleEffect`](../interfaces/IGrayscaleEffect.md)

#### Implementation of

[IPolygonBox](../interfaces/IPolygonBox.md).[grayscale](../interfaces/IPolygonBox.md#grayscale)

#### Inherited from

[Box](Box.md).[grayscale](Box.md#grayscale)

#### Defined in

[src/ui/packages/display/src/UI.ts:317](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/display/src/UI.ts#L317)

___

### filter

• `Optional` **filter**: [`IFilter`](../interfaces/IFilter.md) \| [`IFilter`](../interfaces/IFilter.md)[]

#### Implementation of

[IPolygonBox](../interfaces/IPolygonBox.md).[filter](../interfaces/IPolygonBox.md#filter)

#### Inherited from

[Box](Box.md).[filter](Box.md#filter)

#### Defined in

[src/ui/packages/display/src/UI.ts:320](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/display/src/UI.ts#L320)

___

### complex

• `Optional` **complex**: `boolean`

#### Implementation of

[IPolygonBox](../interfaces/IPolygonBox.md).[complex](../interfaces/IPolygonBox.md#complex)

#### Inherited from

[Box](Box.md).[complex](Box.md#complex)

#### Defined in

[src/ui/packages/display/src/UI.ts:325](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/display/src/UI.ts#L325)

___

### animation

• `Optional` **animation**: [`IAnimation`](../modules.md#ianimation) \| [`IAnimation`](../modules.md#ianimation)[]

#### Implementation of

[IPolygonBox](../interfaces/IPolygonBox.md).[animation](../interfaces/IPolygonBox.md#animation)

#### Inherited from

[Box](Box.md).[animation](Box.md#animation)

#### Defined in

[src/ui/packages/display/src/UI.ts:330](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/display/src/UI.ts#L330)

___

### animationOut

• `Optional` **animationOut**: [`IAnimation`](../modules.md#ianimation) \| [`IAnimation`](../modules.md#ianimation)[]

#### Implementation of

[IPolygonBox](../interfaces/IPolygonBox.md).[animationOut](../interfaces/IPolygonBox.md#animationout)

#### Inherited from

[Box](Box.md).[animationOut](Box.md#animationout)

#### Defined in

[src/ui/packages/display/src/UI.ts:332](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/display/src/UI.ts#L332)

___

### transition

• `Optional` **transition**: [`ITransition`](../modules.md#itransition)

#### Implementation of

[IPolygonBox](../interfaces/IPolygonBox.md).[transition](../interfaces/IPolygonBox.md#transition)

#### Inherited from

[Box](Box.md).[transition](Box.md#transition)

#### Defined in

[src/ui/packages/display/src/UI.ts:335](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/display/src/UI.ts#L335)

___

### transitionOut

• `Optional` **transitionOut**: [`ITransition`](../modules.md#itransition)

#### Implementation of

[IPolygonBox](../interfaces/IPolygonBox.md).[transitionOut](../interfaces/IPolygonBox.md#transitionout)

#### Inherited from

[Box](Box.md).[transitionOut](Box.md#transitionout)

#### Defined in

[src/ui/packages/display/src/UI.ts:337](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/display/src/UI.ts#L337)

___

### motionPath

• `Optional` **motionPath**: `boolean`

#### Implementation of

[IPolygonBox](../interfaces/IPolygonBox.md).[motionPath](../interfaces/IPolygonBox.md#motionpath)

#### Inherited from

[Box](Box.md).[motionPath](Box.md#motionpath)

#### Defined in

[src/ui/packages/display/src/UI.ts:342](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/display/src/UI.ts#L342)

___

### motionPrecision

• `Optional` **motionPrecision**: `number`

#### Implementation of

[IPolygonBox](../interfaces/IPolygonBox.md).[motionPrecision](../interfaces/IPolygonBox.md#motionprecision)

#### Inherited from

[Box](Box.md).[motionPrecision](Box.md#motionprecision)

#### Defined in

[src/ui/packages/display/src/UI.ts:344](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/display/src/UI.ts#L344)

___

### motion

• `Optional` **motion**: `number` \| [`IUnitData`](../interfaces/IUnitData.md)

#### Implementation of

[IPolygonBox](../interfaces/IPolygonBox.md).[motion](../interfaces/IPolygonBox.md#motion)

#### Inherited from

[Box](Box.md).[motion](Box.md#motion)

#### Defined in

[src/ui/packages/display/src/UI.ts:347](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/display/src/UI.ts#L347)

___

### motionRotation

• `Optional` **motionRotation**: `number` \| `boolean`

#### Implementation of

[IPolygonBox](../interfaces/IPolygonBox.md).[motionRotation](../interfaces/IPolygonBox.md#motionrotation)

#### Inherited from

[Box](Box.md).[motionRotation](Box.md#motionrotation)

#### Defined in

[src/ui/packages/display/src/UI.ts:349](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/display/src/UI.ts#L349)

___

### states

• `Optional` **states**: [`IStates`](../interfaces/IStates.md)

#### Implementation of

[IPolygonBox](../interfaces/IPolygonBox.md).[states](../interfaces/IPolygonBox.md#states)

#### Inherited from

[Box](Box.md).[states](Box.md#states)

#### Defined in

[src/ui/packages/display/src/UI.ts:354](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/display/src/UI.ts#L354)

___

### state

• `Optional` **state**: `string`

#### Implementation of

[IPolygonBox](../interfaces/IPolygonBox.md).[state](../interfaces/IPolygonBox.md#state)

#### Inherited from

[Box](Box.md).[state](Box.md#state)

#### Defined in

[src/ui/packages/display/src/UI.ts:356](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/display/src/UI.ts#L356)

___

### selected

• `Optional` **selected**: `boolean`

#### Implementation of

[IPolygonBox](../interfaces/IPolygonBox.md).[selected](../interfaces/IPolygonBox.md#selected)

#### Inherited from

[Box](Box.md).[selected](Box.md#selected)

#### Defined in

[src/ui/packages/display/src/UI.ts:359](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/display/src/UI.ts#L359)

___

### disabled

• `Optional` **disabled**: `boolean`

#### Implementation of

[IPolygonBox](../interfaces/IPolygonBox.md).[disabled](../interfaces/IPolygonBox.md#disabled)

#### Inherited from

[Box](Box.md).[disabled](Box.md#disabled)

#### Defined in

[src/ui/packages/display/src/UI.ts:361](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/display/src/UI.ts#L361)

___

### normalStyle

• `Optional` **normalStyle**: [`IStateStyle`](../interfaces/IStateStyle.md)

#### Implementation of

[IPolygonBox](../interfaces/IPolygonBox.md).[normalStyle](../interfaces/IPolygonBox.md#normalstyle)

#### Inherited from

[Box](Box.md).[normalStyle](Box.md#normalstyle)

#### Defined in

[src/ui/packages/display/src/UI.ts:364](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/display/src/UI.ts#L364)

___

### hoverStyle

• `Optional` **hoverStyle**: [`IStateStyle`](../interfaces/IStateStyle.md)

#### Implementation of

[IPolygonBox](../interfaces/IPolygonBox.md).[hoverStyle](../interfaces/IPolygonBox.md#hoverstyle)

#### Inherited from

[Box](Box.md).[hoverStyle](Box.md#hoverstyle)

#### Defined in

[src/ui/packages/display/src/UI.ts:366](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/display/src/UI.ts#L366)

___

### pressStyle

• `Optional` **pressStyle**: [`IStateStyle`](../interfaces/IStateStyle.md)

#### Implementation of

[IPolygonBox](../interfaces/IPolygonBox.md).[pressStyle](../interfaces/IPolygonBox.md#pressstyle)

#### Inherited from

[Box](Box.md).[pressStyle](Box.md#pressstyle)

#### Defined in

[src/ui/packages/display/src/UI.ts:368](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/display/src/UI.ts#L368)

___

### focusStyle

• `Optional` **focusStyle**: [`IStateStyle`](../interfaces/IStateStyle.md)

#### Implementation of

[IPolygonBox](../interfaces/IPolygonBox.md).[focusStyle](../interfaces/IPolygonBox.md#focusstyle)

#### Inherited from

[Box](Box.md).[focusStyle](Box.md#focusstyle)

#### Defined in

[src/ui/packages/display/src/UI.ts:370](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/display/src/UI.ts#L370)

___

### selectedStyle

• `Optional` **selectedStyle**: [`IStateStyle`](../interfaces/IStateStyle.md)

#### Implementation of

[IPolygonBox](../interfaces/IPolygonBox.md).[selectedStyle](../interfaces/IPolygonBox.md#selectedstyle)

#### Inherited from

[Box](Box.md).[selectedStyle](Box.md#selectedstyle)

#### Defined in

[src/ui/packages/display/src/UI.ts:372](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/display/src/UI.ts#L372)

___

### disabledStyle

• `Optional` **disabledStyle**: [`IStateStyle`](../interfaces/IStateStyle.md)

#### Implementation of

[IPolygonBox](../interfaces/IPolygonBox.md).[disabledStyle](../interfaces/IPolygonBox.md#disabledstyle)

#### Inherited from

[Box](Box.md).[disabledStyle](Box.md#disabledstyle)

#### Defined in

[src/ui/packages/display/src/UI.ts:374](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/display/src/UI.ts#L374)

___

### placeholderStyle

• `Optional` **placeholderStyle**: [`IStateStyle`](../interfaces/IStateStyle.md)

#### Implementation of

[IPolygonBox](../interfaces/IPolygonBox.md).[placeholderStyle](../interfaces/IPolygonBox.md#placeholderstyle)

#### Inherited from

[Box](Box.md).[placeholderStyle](Box.md#placeholderstyle)

#### Defined in

[src/ui/packages/display/src/UI.ts:377](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/display/src/UI.ts#L377)

___

### placeholderColor

• `Optional` **placeholderColor**: `string`

#### Implementation of

[IPolygonBox](../interfaces/IPolygonBox.md).[placeholderColor](../interfaces/IPolygonBox.md#placeholdercolor)

#### Inherited from

[Box](Box.md).[placeholderColor](Box.md#placeholdercolor)

#### Defined in

[src/ui/packages/display/src/UI.ts:380](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/display/src/UI.ts#L380)

___

### placeholderDelay

• `Optional` **placeholderDelay**: `number`

#### Implementation of

[IPolygonBox](../interfaces/IPolygonBox.md).[placeholderDelay](../interfaces/IPolygonBox.md#placeholderdelay)

#### Inherited from

[Box](Box.md).[placeholderDelay](Box.md#placeholderdelay)

#### Defined in

[src/ui/packages/display/src/UI.ts:383](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/display/src/UI.ts#L383)

___

### button

• `Optional` **button**: `boolean`

#### Implementation of

[IPolygonBox](../interfaces/IPolygonBox.md).[button](../interfaces/IPolygonBox.md#button)

#### Inherited from

[Box](Box.md).[button](Box.md#button)

#### Defined in

[src/ui/packages/display/src/UI.ts:386](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/display/src/UI.ts#L386)

___

### editConfig

• **editConfig**: [`IEditorConfig`](../interfaces/IEditorConfig.md)

#### Implementation of

[IPolygonBox](../interfaces/IPolygonBox.md).[editConfig](../interfaces/IPolygonBox.md#editconfig)

#### Inherited from

[Box](Box.md).[editConfig](Box.md#editconfig)

#### Defined in

[src/ui/packages/display/src/UI.ts:391](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/display/src/UI.ts#L391)

___

### editOuter

• **editOuter**: `string`

#### Implementation of

[IPolygonBox](../interfaces/IPolygonBox.md).[editOuter](../interfaces/IPolygonBox.md#editouter)

#### Inherited from

[Box](Box.md).[editOuter](Box.md#editouter)

#### Defined in

[src/ui/packages/display/src/UI.ts:393](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/display/src/UI.ts#L393)

___

### editInner

• **editInner**: `string`

#### Implementation of

[IPolygonBox](../interfaces/IPolygonBox.md).[editInner](../interfaces/IPolygonBox.md#editinner)

#### Inherited from

[Box](Box.md).[editInner](Box.md#editinner)

#### Defined in

[src/ui/packages/display/src/UI.ts:395](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/display/src/UI.ts#L395)

___

### data

• **data**: [`IObject`](../interfaces/IObject.md)

#### Implementation of

[IPolygonBox](../interfaces/IPolygonBox.md).[data](../interfaces/IPolygonBox.md#data)

#### Inherited from

[Box](Box.md).[data](Box.md#data)

#### Defined in

[src/ui/packages/display/src/UI.ts:400](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/display/src/UI.ts#L400)

___

### useFastShadow

• `Optional` **useFastShadow**: `boolean`

#### Implementation of

[IPolygonBox](../interfaces/IPolygonBox.md).[useFastShadow](../interfaces/IPolygonBox.md#usefastshadow)

#### Inherited from

[Box](Box.md).[useFastShadow](Box.md#usefastshadow)

#### Defined in

[src/ui/packages/display/src/UI.ts:409](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/display/src/UI.ts#L409)

___

### \_\_box

• `Optional` **\_\_box**: [`IUI`](../interfaces/IUI.md)

#### Implementation of

[IPolygonBox](../interfaces/IPolygonBox.md).[__box](../interfaces/IPolygonBox.md#__box)

#### Inherited from

[Box](Box.md).[__box](Box.md#__box)

#### Defined in

[src/ui/packages/display/src/UI.ts:411](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/display/src/UI.ts#L411)

___

### \_\_animate

• `Optional` **\_\_animate**: [`IAnimate`](../interfaces/IAnimate.md) \| [`IAnimateList`](../interfaces/IAnimateList.md)

#### Implementation of

[IPolygonBox](../interfaces/IPolygonBox.md).[__animate](../interfaces/IPolygonBox.md#__animate)

#### Inherited from

[Box](Box.md).[__animate](Box.md#__animate)

#### Defined in

[src/ui/packages/display/src/UI.ts:412](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/display/src/UI.ts#L412)

## Accessors

### \_\_tag

• `get` **__tag**(): `string`

#### Returns

`string`

#### Implementation of

[IPolygonBox](../interfaces/IPolygonBox.md).[__tag](../interfaces/IPolygonBox.md#__tag)

#### Overrides

Box.\_\_tag

#### Defined in

[src/in/packages/box/src/PolygonBox.ts:13](https://github.com/leaferjs/leafer-in/blob/d97f6888a45310d40717e43f47796d4f7d0dce1d/packages/box/src/PolygonBox.ts#L13)

___

### tag

• `get` **tag**(): `string`

#### Returns

`string`

#### Implementation of

[IPolygonBox](../interfaces/IPolygonBox.md).[tag](../interfaces/IPolygonBox.md#tag)

#### Inherited from

Box.tag

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

[IPolygonBox](../interfaces/IPolygonBox.md).[tag](../interfaces/IPolygonBox.md#tag)

#### Inherited from

Box.tag

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:29](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/display/src/Leaf.ts#L29)

___

### innerName

• `get` **innerName**(): `string`

#### Returns

`string`

#### Implementation of

[IPolygonBox](../interfaces/IPolygonBox.md).[innerName](../interfaces/IPolygonBox.md#innername)

#### Inherited from

Box.innerName

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:34](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/display/src/Leaf.ts#L34)

___

### \_\_DataProcessor

• `get` **__DataProcessor**(): typeof [`LeafData`](LeafData.md)

#### Returns

typeof [`LeafData`](LeafData.md)

#### Implementation of

[IPolygonBox](../interfaces/IPolygonBox.md).[__DataProcessor](../interfaces/IPolygonBox.md#__dataprocessor)

#### Inherited from

Box.\_\_DataProcessor

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:36](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/display/src/Leaf.ts#L36)

___

### \_\_LayoutProcessor

• `get` **__LayoutProcessor**(): typeof [`LeafLayout`](LeafLayout.md)

#### Returns

typeof [`LeafLayout`](LeafLayout.md)

#### Implementation of

[IPolygonBox](../interfaces/IPolygonBox.md).[__LayoutProcessor](../interfaces/IPolygonBox.md#__layoutprocessor)

#### Inherited from

Box.\_\_LayoutProcessor

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:37](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/display/src/Leaf.ts#L37)

___

### leaferIsCreated

• `get` **leaferIsCreated**(): `boolean`

#### Returns

`boolean`

#### Implementation of

[IPolygonBox](../interfaces/IPolygonBox.md).[leaferIsCreated](../interfaces/IPolygonBox.md#leaferiscreated)

#### Inherited from

Box.leaferIsCreated

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:42](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/display/src/Leaf.ts#L42)

___

### leaferIsReady

• `get` **leaferIsReady**(): `boolean`

#### Returns

`boolean`

#### Implementation of

[IPolygonBox](../interfaces/IPolygonBox.md).[leaferIsReady](../interfaces/IPolygonBox.md#leaferisready)

#### Inherited from

Box.leaferIsReady

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:43](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/display/src/Leaf.ts#L43)

___

### isLeafer

• `get` **isLeafer**(): `boolean`

#### Returns

`boolean`

#### Implementation of

[IPolygonBox](../interfaces/IPolygonBox.md).[isLeafer](../interfaces/IPolygonBox.md#isleafer)

#### Inherited from

Box.isLeafer

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:45](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/display/src/Leaf.ts#L45)

___

### \_\_localMatrix

• `get` **__localMatrix**(): [`IMatrixData`](../interfaces/IMatrixData.md)

#### Returns

[`IMatrixData`](../interfaces/IMatrixData.md)

#### Implementation of

[IPolygonBox](../interfaces/IPolygonBox.md).[__localMatrix](../interfaces/IPolygonBox.md#__localmatrix)

#### Inherited from

Box.\_\_localMatrix

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:62](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/display/src/Leaf.ts#L62)

___

### \_\_localBoxBounds

• `get` **__localBoxBounds**(): [`IBoundsData`](../interfaces/IBoundsData.md)

#### Returns

[`IBoundsData`](../interfaces/IBoundsData.md)

#### Implementation of

[IPolygonBox](../interfaces/IPolygonBox.md).[__localBoxBounds](../interfaces/IPolygonBox.md#__localboxbounds)

#### Inherited from

Box.\_\_localBoxBounds

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:63](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/display/src/Leaf.ts#L63)

___

### worldTransform

• `get` **worldTransform**(): [`IMatrixWithScaleData`](../interfaces/IMatrixWithScaleData.md)

#### Returns

[`IMatrixWithScaleData`](../interfaces/IMatrixWithScaleData.md)

#### Implementation of

[IPolygonBox](../interfaces/IPolygonBox.md).[worldTransform](../interfaces/IPolygonBox.md#worldtransform)

#### Inherited from

Box.worldTransform

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:68](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/display/src/Leaf.ts#L68)

___

### localTransform

• `get` **localTransform**(): [`IMatrixData`](../interfaces/IMatrixData.md)

#### Returns

[`IMatrixData`](../interfaces/IMatrixData.md)

#### Implementation of

[IPolygonBox](../interfaces/IPolygonBox.md).[localTransform](../interfaces/IPolygonBox.md#localtransform)

#### Inherited from

Box.localTransform

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:69](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/display/src/Leaf.ts#L69)

___

### scrollWorldTransform

• `get` **scrollWorldTransform**(): [`IMatrixWithScaleData`](../interfaces/IMatrixWithScaleData.md)

#### Returns

[`IMatrixWithScaleData`](../interfaces/IMatrixWithScaleData.md)

#### Implementation of

[IPolygonBox](../interfaces/IPolygonBox.md).[scrollWorldTransform](../interfaces/IPolygonBox.md#scrollworldtransform)

#### Inherited from

Box.scrollWorldTransform

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:72](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/display/src/Leaf.ts#L72)

___

### boxBounds

• `get` **boxBounds**(): [`IBoundsData`](../interfaces/IBoundsData.md)

#### Returns

[`IBoundsData`](../interfaces/IBoundsData.md)

#### Implementation of

[IPolygonBox](../interfaces/IPolygonBox.md).[boxBounds](../interfaces/IPolygonBox.md#boxbounds)

#### Inherited from

Box.boxBounds

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:75](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/display/src/Leaf.ts#L75)

___

### renderBounds

• `get` **renderBounds**(): [`IBoundsData`](../interfaces/IBoundsData.md)

#### Returns

[`IBoundsData`](../interfaces/IBoundsData.md)

#### Implementation of

[IPolygonBox](../interfaces/IPolygonBox.md).[renderBounds](../interfaces/IPolygonBox.md#renderbounds)

#### Inherited from

Box.renderBounds

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:76](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/display/src/Leaf.ts#L76)

___

### worldBoxBounds

• `get` **worldBoxBounds**(): [`IBoundsData`](../interfaces/IBoundsData.md)

#### Returns

[`IBoundsData`](../interfaces/IBoundsData.md)

#### Implementation of

[IPolygonBox](../interfaces/IPolygonBox.md).[worldBoxBounds](../interfaces/IPolygonBox.md#worldboxbounds)

#### Inherited from

Box.worldBoxBounds

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:77](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/display/src/Leaf.ts#L77)

___

### worldStrokeBounds

• `get` **worldStrokeBounds**(): [`IBoundsData`](../interfaces/IBoundsData.md)

#### Returns

[`IBoundsData`](../interfaces/IBoundsData.md)

#### Implementation of

[IPolygonBox](../interfaces/IPolygonBox.md).[worldStrokeBounds](../interfaces/IPolygonBox.md#worldstrokebounds)

#### Inherited from

Box.worldStrokeBounds

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:78](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/display/src/Leaf.ts#L78)

___

### worldRenderBounds

• `get` **worldRenderBounds**(): [`IBoundsData`](../interfaces/IBoundsData.md)

#### Returns

[`IBoundsData`](../interfaces/IBoundsData.md)

#### Implementation of

[IPolygonBox](../interfaces/IPolygonBox.md).[worldRenderBounds](../interfaces/IPolygonBox.md#worldrenderbounds)

#### Inherited from

Box.worldRenderBounds

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:79](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/display/src/Leaf.ts#L79)

___

### worldOpacity

• `get` **worldOpacity**(): `number`

#### Returns

`number`

#### Implementation of

[IPolygonBox](../interfaces/IPolygonBox.md).[worldOpacity](../interfaces/IPolygonBox.md#worldopacity)

#### Inherited from

Box.worldOpacity

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:82](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/display/src/Leaf.ts#L82)

___

### \_\_worldFlipped

• `get` **__worldFlipped**(): `boolean`

#### Returns

`boolean`

#### Implementation of

[IPolygonBox](../interfaces/IPolygonBox.md).[__worldFlipped](../interfaces/IPolygonBox.md#__worldflipped)

#### Inherited from

Box.\_\_worldFlipped

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:87](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/display/src/Leaf.ts#L87)

___

### \_\_onlyHitMask

• `get` **__onlyHitMask**(): `boolean`

#### Returns

`boolean`

#### Implementation of

[IPolygonBox](../interfaces/IPolygonBox.md).[__onlyHitMask](../interfaces/IPolygonBox.md#__onlyhitmask)

#### Inherited from

Box.\_\_onlyHitMask

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:94](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/display/src/Leaf.ts#L94)

___

### \_\_ignoreHitWorld

• `get` **__ignoreHitWorld**(): `boolean`

#### Returns

`boolean`

#### Implementation of

[IPolygonBox](../interfaces/IPolygonBox.md).[__ignoreHitWorld](../interfaces/IPolygonBox.md#__ignorehitworld)

#### Inherited from

Box.\_\_ignoreHitWorld

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:95](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/display/src/Leaf.ts#L95)

___

### \_\_inLazyBounds

• `get` **__inLazyBounds**(): `boolean`

#### Returns

`boolean`

#### Implementation of

[IPolygonBox](../interfaces/IPolygonBox.md).[__inLazyBounds](../interfaces/IPolygonBox.md#__inlazybounds)

#### Inherited from

Box.\_\_inLazyBounds

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:96](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/display/src/Leaf.ts#L96)

___

### pathInputed

• `get` **pathInputed**(): `boolean`

#### Returns

`boolean`

#### Implementation of

[IPolygonBox](../interfaces/IPolygonBox.md).[pathInputed](../interfaces/IPolygonBox.md#pathinputed)

#### Inherited from

Box.pathInputed

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

[IPolygonBox](../interfaces/IPolygonBox.md).[event](../interfaces/IPolygonBox.md#event)

#### Inherited from

Box.event

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:101](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/display/src/Leaf.ts#L101)

___

### isBranchLeaf

• `get` **isBranchLeaf**(): `boolean`

#### Returns

`boolean`

#### Implementation of

[IPolygonBox](../interfaces/IPolygonBox.md).[isBranchLeaf](../interfaces/IPolygonBox.md#isbranchleaf)

#### Inherited from

Box.isBranchLeaf

#### Defined in

[src/ui/packages/display/src/Box.ts:20](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/display/src/Box.ts#L20)

___

### \_\_useSelfBox

• `get` **__useSelfBox**(): `boolean`

#### Returns

`boolean`

#### Inherited from

Box.\_\_useSelfBox

#### Defined in

[src/ui/packages/display/src/Box.ts:49](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/display/src/Box.ts#L49)

___

### isBranch

• `get` **isBranch**(): `boolean`

#### Returns

`boolean`

#### Implementation of

[IPolygonBox](../interfaces/IPolygonBox.md).[isBranch](../interfaces/IPolygonBox.md#isbranch)

#### Inherited from

Box.isBranch

#### Defined in

[src/ui/packages/display/src/Group.ts:16](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/display/src/Group.ts#L16)

___

### app

• `get` **app**(): [`ILeafer`](../interfaces/ILeafer.md)

#### Returns

[`ILeafer`](../interfaces/ILeafer.md)

#### Implementation of

[IPolygonBox](../interfaces/IPolygonBox.md).[app](../interfaces/IPolygonBox.md#app)

#### Inherited from

Box.app

#### Defined in

[src/ui/packages/display/src/UI.ts:24](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/display/src/UI.ts#L24)

___

### isFrame

• `get` **isFrame**(): `boolean`

#### Returns

`boolean`

#### Implementation of

[IPolygonBox](../interfaces/IPolygonBox.md).[isFrame](../interfaces/IPolygonBox.md#isframe)

#### Inherited from

Box.isFrame

#### Defined in

[src/ui/packages/display/src/UI.ts:32](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/display/src/UI.ts#L32)

___

### strokeWidthFixed

• `get` **strokeWidthFixed**(): [`IScaleFixed`](../modules.md#iscalefixed)

#### Returns

[`IScaleFixed`](../modules.md#iscalefixed)

#### Inherited from

Box.strokeWidthFixed

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

Box.strokeWidthFixed

#### Defined in

[src/ui/packages/display/src/UI.ts:269](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/display/src/UI.ts#L269)

___

### scale

• `get` **scale**(): `number` \| [`IPointData`](../interfaces/IPointData.md)

#### Returns

`number` \| [`IPointData`](../interfaces/IPointData.md)

#### Implementation of

[IPolygonBox](../interfaces/IPolygonBox.md).[scale](../interfaces/IPolygonBox.md#scale)

#### Inherited from

Box.scale

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

[IPolygonBox](../interfaces/IPolygonBox.md).[scale](../interfaces/IPolygonBox.md#scale)

#### Inherited from

Box.scale

#### Defined in

[src/ui/packages/display/src/UI.ts:403](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/display/src/UI.ts#L403)

___

### isAutoWidth

• `get` **isAutoWidth**(): `boolean`

#### Returns

`boolean`

#### Implementation of

[IPolygonBox](../interfaces/IPolygonBox.md).[isAutoWidth](../interfaces/IPolygonBox.md#isautowidth)

#### Inherited from

Box.isAutoWidth

#### Defined in

[src/ui/packages/display/src/UI.ts:406](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/display/src/UI.ts#L406)

___

### isAutoHeight

• `get` **isAutoHeight**(): `boolean`

#### Returns

`boolean`

#### Implementation of

[IPolygonBox](../interfaces/IPolygonBox.md).[isAutoHeight](../interfaces/IPolygonBox.md#isautoheight)

#### Inherited from

Box.isAutoHeight

#### Defined in

[src/ui/packages/display/src/UI.ts:407](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/display/src/UI.ts#L407)

___

### pen

• `get` **pen**(): [`IPathCreator`](../interfaces/IPathCreator.md)

#### Returns

[`IPathCreator`](../interfaces/IPathCreator.md)

#### Implementation of

[IPolygonBox](../interfaces/IPolygonBox.md).[pen](../interfaces/IPolygonBox.md#pen)

#### Inherited from

Box.pen

#### Defined in

[src/ui/packages/display/src/UI.ts:414](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/display/src/UI.ts#L414)

## Methods

### \_\_updatePath

▸ **__updatePath**(): `void`

#### Returns

`void`

#### Implementation of

[IPolygonBox](../interfaces/IPolygonBox.md).[__updatePath](../interfaces/IPolygonBox.md#__updatepath)

#### Overrides

[Box](Box.md).[__updatePath](Box.md#__updatepath)

#### Defined in

[src/in/packages/box/src/PolygonBox.ts:28](https://github.com/leaferjs/leafer-in/blob/d97f6888a45310d40717e43f47796d4f7d0dce1d/packages/box/src/PolygonBox.ts#L28)

___

### resetCustom

▸ **resetCustom**(): `void`

#### Returns

`void`

#### Implementation of

[IPolygonBox](../interfaces/IPolygonBox.md).[resetCustom](../interfaces/IPolygonBox.md#resetcustom)

#### Inherited from

[Box](Box.md).[resetCustom](Box.md#resetcustom)

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

[IPolygonBox](../interfaces/IPolygonBox.md).[waitParent](../interfaces/IPolygonBox.md#waitparent)

#### Inherited from

[Box](Box.md).[waitParent](Box.md#waitparent)

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

[IPolygonBox](../interfaces/IPolygonBox.md).[waitLeafer](../interfaces/IPolygonBox.md#waitleafer)

#### Inherited from

[Box](Box.md).[waitLeafer](Box.md#waitleafer)

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

[IPolygonBox](../interfaces/IPolygonBox.md).[nextRender](../interfaces/IPolygonBox.md#nextrender)

#### Inherited from

[Box](Box.md).[nextRender](Box.md#nextrender)

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

[IPolygonBox](../interfaces/IPolygonBox.md).[removeNextRender](../interfaces/IPolygonBox.md#removenextrender)

#### Inherited from

[Box](Box.md).[removeNextRender](Box.md#removenextrender)

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

[IPolygonBox](../interfaces/IPolygonBox.md).[__bindLeafer](../interfaces/IPolygonBox.md#__bindleafer)

#### Inherited from

[Box](Box.md).[__bindLeafer](Box.md#__bindleafer)

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

[IPolygonBox](../interfaces/IPolygonBox.md).[setAttr](../interfaces/IPolygonBox.md#setattr)

#### Inherited from

[Box](Box.md).[setAttr](Box.md#setattr)

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

[IPolygonBox](../interfaces/IPolygonBox.md).[getAttr](../interfaces/IPolygonBox.md#getattr)

#### Inherited from

[Box](Box.md).[getAttr](Box.md#getattr)

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

[IPolygonBox](../interfaces/IPolygonBox.md).[getComputedAttr](../interfaces/IPolygonBox.md#getcomputedattr)

#### Inherited from

[Box](Box.md).[getComputedAttr](Box.md#getcomputedattr)

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

[IPolygonBox](../interfaces/IPolygonBox.md).[toString](../interfaces/IPolygonBox.md#tostring)

#### Inherited from

[Box](Box.md).[toString](Box.md#tostring)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:208](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/display/src/Leaf.ts#L208)

___

### toSVG

▸ **toSVG**(): `string`

#### Returns

`string`

#### Implementation of

[IPolygonBox](../interfaces/IPolygonBox.md).[toSVG](../interfaces/IPolygonBox.md#tosvg)

#### Inherited from

[Box](Box.md).[toSVG](Box.md#tosvg)

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

[IPolygonBox](../interfaces/IPolygonBox.md).[__SVG](../interfaces/IPolygonBox.md#__svg)

#### Inherited from

[Box](Box.md).[__SVG](Box.md#__svg)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:214](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/display/src/Leaf.ts#L214)

___

### toHTML

▸ **toHTML**(): `string`

#### Returns

`string`

#### Implementation of

[IPolygonBox](../interfaces/IPolygonBox.md).[toHTML](../interfaces/IPolygonBox.md#tohtml)

#### Inherited from

[Box](Box.md).[toHTML](Box.md#tohtml)

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

[IPolygonBox](../interfaces/IPolygonBox.md).[__setAttr](../interfaces/IPolygonBox.md#__setattr)

#### Inherited from

[Box](Box.md).[__setAttr](Box.md#__setattr)

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

[IPolygonBox](../interfaces/IPolygonBox.md).[__getAttr](../interfaces/IPolygonBox.md#__getattr)

#### Inherited from

[Box](Box.md).[__getAttr](Box.md#__getattr)

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

[IPolygonBox](../interfaces/IPolygonBox.md).[setProxyAttr](../interfaces/IPolygonBox.md#setproxyattr)

#### Inherited from

[Box](Box.md).[setProxyAttr](Box.md#setproxyattr)

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

[IPolygonBox](../interfaces/IPolygonBox.md).[getProxyAttr](../interfaces/IPolygonBox.md#getproxyattr)

#### Inherited from

[Box](Box.md).[getProxyAttr](Box.md#getproxyattr)

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

[IPolygonBox](../interfaces/IPolygonBox.md).[focus](../interfaces/IPolygonBox.md#focus)

#### Inherited from

[Box](Box.md).[focus](Box.md#focus)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:246](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/display/src/Leaf.ts#L246)

___

### updateState

▸ **updateState**(): `void`

#### Returns

`void`

#### Implementation of

[IPolygonBox](../interfaces/IPolygonBox.md).[updateState](../interfaces/IPolygonBox.md#updatestate)

#### Inherited from

[Box](Box.md).[updateState](Box.md#updatestate)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:248](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/display/src/Leaf.ts#L248)

___

### updateLayout

▸ **updateLayout**(): `void`

#### Returns

`void`

#### Implementation of

[IPolygonBox](../interfaces/IPolygonBox.md).[updateLayout](../interfaces/IPolygonBox.md#updatelayout)

#### Inherited from

[Box](Box.md).[updateLayout](Box.md#updatelayout)

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

[IPolygonBox](../interfaces/IPolygonBox.md).[forceUpdate](../interfaces/IPolygonBox.md#forceupdate)

#### Inherited from

[Box](Box.md).[forceUpdate](Box.md#forceupdate)

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

[IPolygonBox](../interfaces/IPolygonBox.md).[forceRender](../interfaces/IPolygonBox.md#forcerender)

#### Inherited from

[Box](Box.md).[forceRender](Box.md#forcerender)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:265](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/display/src/Leaf.ts#L265)

___

### \_\_extraUpdate

▸ **__extraUpdate**(): `void`

#### Returns

`void`

#### Implementation of

[IPolygonBox](../interfaces/IPolygonBox.md).[__extraUpdate](../interfaces/IPolygonBox.md#__extraupdate)

#### Inherited from

[Box](Box.md).[__extraUpdate](Box.md#__extraupdate)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:269](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/display/src/Leaf.ts#L269)

___

### \_\_updateWorldMatrix

▸ **__updateWorldMatrix**(): `void`

#### Returns

`void`

#### Implementation of

[IPolygonBox](../interfaces/IPolygonBox.md).[__updateWorldMatrix](../interfaces/IPolygonBox.md#__updateworldmatrix)

#### Inherited from

[Box](Box.md).[__updateWorldMatrix](Box.md#__updateworldmatrix)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:275](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/display/src/Leaf.ts#L275)

___

### \_\_updateLocalMatrix

▸ **__updateLocalMatrix**(): `void`

#### Returns

`void`

#### Implementation of

[IPolygonBox](../interfaces/IPolygonBox.md).[__updateLocalMatrix](../interfaces/IPolygonBox.md#__updatelocalmatrix)

#### Inherited from

[Box](Box.md).[__updateLocalMatrix](Box.md#__updatelocalmatrix)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:277](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/display/src/Leaf.ts#L277)

___

### \_\_updateWorldBounds

▸ **__updateWorldBounds**(): `void`

#### Returns

`void`

#### Implementation of

[IPolygonBox](../interfaces/IPolygonBox.md).[__updateWorldBounds](../interfaces/IPolygonBox.md#__updateworldbounds)

#### Inherited from

[Box](Box.md).[__updateWorldBounds](Box.md#__updateworldbounds)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:283](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/display/src/Leaf.ts#L283)

___

### \_\_updateLocalBounds

▸ **__updateLocalBounds**(): `void`

#### Returns

`void`

#### Implementation of

[IPolygonBox](../interfaces/IPolygonBox.md).[__updateLocalBounds](../interfaces/IPolygonBox.md#__updatelocalbounds)

#### Inherited from

[Box](Box.md).[__updateLocalBounds](Box.md#__updatelocalbounds)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:285](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/display/src/Leaf.ts#L285)

___

### \_\_updateLocalBoxBounds

▸ **__updateLocalBoxBounds**(): `void`

#### Returns

`void`

#### Implementation of

[IPolygonBox](../interfaces/IPolygonBox.md).[__updateLocalBoxBounds](../interfaces/IPolygonBox.md#__updatelocalboxbounds)

#### Inherited from

[Box](Box.md).[__updateLocalBoxBounds](Box.md#__updatelocalboxbounds)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:288](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/display/src/Leaf.ts#L288)

___

### \_\_updateLocalStrokeBounds

▸ **__updateLocalStrokeBounds**(): `void`

#### Returns

`void`

#### Implementation of

[IPolygonBox](../interfaces/IPolygonBox.md).[__updateLocalStrokeBounds](../interfaces/IPolygonBox.md#__updatelocalstrokebounds)

#### Inherited from

[Box](Box.md).[__updateLocalStrokeBounds](Box.md#__updatelocalstrokebounds)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:290](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/display/src/Leaf.ts#L290)

___

### \_\_updateLocalRenderBounds

▸ **__updateLocalRenderBounds**(): `void`

#### Returns

`void`

#### Implementation of

[IPolygonBox](../interfaces/IPolygonBox.md).[__updateLocalRenderBounds](../interfaces/IPolygonBox.md#__updatelocalrenderbounds)

#### Inherited from

[Box](Box.md).[__updateLocalRenderBounds](Box.md#__updatelocalrenderbounds)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:292](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/display/src/Leaf.ts#L292)

___

### \_\_updateContentBounds

▸ **__updateContentBounds**(): `void`

#### Returns

`void`

#### Implementation of

[IPolygonBox](../interfaces/IPolygonBox.md).[__updateContentBounds](../interfaces/IPolygonBox.md#__updatecontentbounds)

#### Inherited from

[Box](Box.md).[__updateContentBounds](Box.md#__updatecontentbounds)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:298](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/display/src/Leaf.ts#L298)

___

### \_\_updateAutoLayout

▸ **__updateAutoLayout**(): `void`

#### Returns

`void`

#### Implementation of

[IPolygonBox](../interfaces/IPolygonBox.md).[__updateAutoLayout](../interfaces/IPolygonBox.md#__updateautolayout)

#### Inherited from

[Box](Box.md).[__updateAutoLayout](Box.md#__updateautolayout)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:305](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/display/src/Leaf.ts#L305)

___

### \_\_updateFlowLayout

▸ **__updateFlowLayout**(): `void`

#### Returns

`void`

#### Implementation of

[IPolygonBox](../interfaces/IPolygonBox.md).[__updateFlowLayout](../interfaces/IPolygonBox.md#__updateflowlayout)

#### Inherited from

[Box](Box.md).[__updateFlowLayout](Box.md#__updateflowlayout)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:307](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/display/src/Leaf.ts#L307)

___

### \_\_updateNaturalSize

▸ **__updateNaturalSize**(): `void`

#### Returns

`void`

#### Implementation of

[IPolygonBox](../interfaces/IPolygonBox.md).[__updateNaturalSize](../interfaces/IPolygonBox.md#__updatenaturalsize)

#### Inherited from

[Box](Box.md).[__updateNaturalSize](Box.md#__updatenaturalsize)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:309](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/display/src/Leaf.ts#L309)

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

[IPolygonBox](../interfaces/IPolygonBox.md).[__updateEraser](../interfaces/IPolygonBox.md#__updateeraser)

#### Inherited from

[Box](Box.md).[__updateEraser](Box.md#__updateeraser)

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

[IPolygonBox](../interfaces/IPolygonBox.md).[__renderEraser](../interfaces/IPolygonBox.md#__rendereraser)

#### Inherited from

[Box](Box.md).[__renderEraser](Box.md#__rendereraser)

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

[IPolygonBox](../interfaces/IPolygonBox.md).[__updateMask](../interfaces/IPolygonBox.md#__updatemask)

#### Inherited from

[Box](Box.md).[__updateMask](Box.md#__updatemask)

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

[IPolygonBox](../interfaces/IPolygonBox.md).[__renderMask](../interfaces/IPolygonBox.md#__rendermask)

#### Inherited from

[Box](Box.md).[__renderMask](Box.md#__rendermask)

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

[IPolygonBox](../interfaces/IPolygonBox.md).[__getNowWorld](../interfaces/IPolygonBox.md#__getnowworld)

#### Inherited from

[Box](Box.md).[__getNowWorld](Box.md#__getnowworld)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:347](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/display/src/Leaf.ts#L347)

___

### getClampRenderScale

▸ **getClampRenderScale**(): `number`

#### Returns

`number`

#### Implementation of

[IPolygonBox](../interfaces/IPolygonBox.md).[getClampRenderScale](../interfaces/IPolygonBox.md#getclamprenderscale)

#### Inherited from

[Box](Box.md).[getClampRenderScale](Box.md#getclamprenderscale)

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

[IPolygonBox](../interfaces/IPolygonBox.md).[getRenderScaleData](../interfaces/IPolygonBox.md#getrenderscaledata)

#### Inherited from

[Box](Box.md).[getRenderScaleData](Box.md#getrenderscaledata)

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

[IPolygonBox](../interfaces/IPolygonBox.md).[getTransform](../interfaces/IPolygonBox.md#gettransform)

#### Inherited from

[Box](Box.md).[getTransform](Box.md#gettransform)

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

[IPolygonBox](../interfaces/IPolygonBox.md).[getBounds](../interfaces/IPolygonBox.md#getbounds)

#### Inherited from

[Box](Box.md).[getBounds](Box.md#getbounds)

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

[IPolygonBox](../interfaces/IPolygonBox.md).[getLayoutBounds](../interfaces/IPolygonBox.md#getlayoutbounds)

#### Inherited from

[Box](Box.md).[getLayoutBounds](Box.md#getlayoutbounds)

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

[IPolygonBox](../interfaces/IPolygonBox.md).[getLayoutPoints](../interfaces/IPolygonBox.md#getlayoutpoints)

#### Inherited from

[Box](Box.md).[getLayoutPoints](Box.md#getlayoutpoints)

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

[IPolygonBox](../interfaces/IPolygonBox.md).[getWorldBounds](../interfaces/IPolygonBox.md#getworldbounds)

#### Inherited from

[Box](Box.md).[getWorldBounds](Box.md#getworldbounds)

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

[IPolygonBox](../interfaces/IPolygonBox.md).[worldToLocal](../interfaces/IPolygonBox.md#worldtolocal)

#### Inherited from

[Box](Box.md).[worldToLocal](Box.md#worldtolocal)

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

[IPolygonBox](../interfaces/IPolygonBox.md).[localToWorld](../interfaces/IPolygonBox.md#localtoworld)

#### Inherited from

[Box](Box.md).[localToWorld](Box.md#localtoworld)

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

[IPolygonBox](../interfaces/IPolygonBox.md).[worldToInner](../interfaces/IPolygonBox.md#worldtoinner)

#### Inherited from

[Box](Box.md).[worldToInner](Box.md#worldtoinner)

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

[IPolygonBox](../interfaces/IPolygonBox.md).[innerToWorld](../interfaces/IPolygonBox.md#innertoworld)

#### Inherited from

[Box](Box.md).[innerToWorld](Box.md#innertoworld)

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

[IPolygonBox](../interfaces/IPolygonBox.md).[getBoxPoint](../interfaces/IPolygonBox.md#getboxpoint)

#### Inherited from

[Box](Box.md).[getBoxPoint](Box.md#getboxpoint)

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

[IPolygonBox](../interfaces/IPolygonBox.md).[getBoxPointByInner](../interfaces/IPolygonBox.md#getboxpointbyinner)

#### Inherited from

[Box](Box.md).[getBoxPointByInner](Box.md#getboxpointbyinner)

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

[IPolygonBox](../interfaces/IPolygonBox.md).[getInnerPoint](../interfaces/IPolygonBox.md#getinnerpoint)

#### Inherited from

[Box](Box.md).[getInnerPoint](Box.md#getinnerpoint)

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

[IPolygonBox](../interfaces/IPolygonBox.md).[getInnerPointByBox](../interfaces/IPolygonBox.md#getinnerpointbybox)

#### Inherited from

[Box](Box.md).[getInnerPointByBox](Box.md#getinnerpointbybox)

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

[IPolygonBox](../interfaces/IPolygonBox.md).[getInnerPointByLocal](../interfaces/IPolygonBox.md#getinnerpointbylocal)

#### Inherited from

[Box](Box.md).[getInnerPointByLocal](Box.md#getinnerpointbylocal)

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

[IPolygonBox](../interfaces/IPolygonBox.md).[getLocalPoint](../interfaces/IPolygonBox.md#getlocalpoint)

#### Inherited from

[Box](Box.md).[getLocalPoint](Box.md#getlocalpoint)

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

[IPolygonBox](../interfaces/IPolygonBox.md).[getLocalPointByInner](../interfaces/IPolygonBox.md#getlocalpointbyinner)

#### Inherited from

[Box](Box.md).[getLocalPointByInner](Box.md#getlocalpointbyinner)

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

[IPolygonBox](../interfaces/IPolygonBox.md).[getPagePoint](../interfaces/IPolygonBox.md#getpagepoint)

#### Inherited from

[Box](Box.md).[getPagePoint](Box.md#getpagepoint)

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

[IPolygonBox](../interfaces/IPolygonBox.md).[getWorldPoint](../interfaces/IPolygonBox.md#getworldpoint)

#### Inherited from

[Box](Box.md).[getWorldPoint](Box.md#getworldpoint)

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

[IPolygonBox](../interfaces/IPolygonBox.md).[getWorldPointByBox](../interfaces/IPolygonBox.md#getworldpointbybox)

#### Inherited from

[Box](Box.md).[getWorldPointByBox](Box.md#getworldpointbybox)

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

[IPolygonBox](../interfaces/IPolygonBox.md).[getWorldPointByLocal](../interfaces/IPolygonBox.md#getworldpointbylocal)

#### Inherited from

[Box](Box.md).[getWorldPointByLocal](Box.md#getworldpointbylocal)

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

[IPolygonBox](../interfaces/IPolygonBox.md).[getWorldPointByPage](../interfaces/IPolygonBox.md#getworldpointbypage)

#### Inherited from

[Box](Box.md).[getWorldPointByPage](Box.md#getworldpointbypage)

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

[IPolygonBox](../interfaces/IPolygonBox.md).[setTransform](../interfaces/IPolygonBox.md#settransform)

#### Inherited from

[Box](Box.md).[setTransform](Box.md#settransform)

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

[IPolygonBox](../interfaces/IPolygonBox.md).[transform](../interfaces/IPolygonBox.md#transform)

#### Inherited from

[Box](Box.md).[transform](Box.md#transform)

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

[IPolygonBox](../interfaces/IPolygonBox.md).[move](../interfaces/IPolygonBox.md#move)

#### Inherited from

[Box](Box.md).[move](Box.md#move)

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

[IPolygonBox](../interfaces/IPolygonBox.md).[moveInner](../interfaces/IPolygonBox.md#moveinner)

#### Inherited from

[Box](Box.md).[moveInner](Box.md#moveinner)

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

[IPolygonBox](../interfaces/IPolygonBox.md).[scaleOf](../interfaces/IPolygonBox.md#scaleof)

#### Inherited from

[Box](Box.md).[scaleOf](Box.md#scaleof)

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

[IPolygonBox](../interfaces/IPolygonBox.md).[rotateOf](../interfaces/IPolygonBox.md#rotateof)

#### Inherited from

[Box](Box.md).[rotateOf](Box.md#rotateof)

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

[IPolygonBox](../interfaces/IPolygonBox.md).[skewOf](../interfaces/IPolygonBox.md#skewof)

#### Inherited from

[Box](Box.md).[skewOf](Box.md#skewof)

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

[IPolygonBox](../interfaces/IPolygonBox.md).[transformWorld](../interfaces/IPolygonBox.md#transformworld)

#### Inherited from

[Box](Box.md).[transformWorld](Box.md#transformworld)

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

[IPolygonBox](../interfaces/IPolygonBox.md).[moveWorld](../interfaces/IPolygonBox.md#moveworld)

#### Inherited from

[Box](Box.md).[moveWorld](Box.md#moveworld)

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

[IPolygonBox](../interfaces/IPolygonBox.md).[scaleOfWorld](../interfaces/IPolygonBox.md#scaleofworld)

#### Inherited from

[Box](Box.md).[scaleOfWorld](Box.md#scaleofworld)

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

[IPolygonBox](../interfaces/IPolygonBox.md).[rotateOfWorld](../interfaces/IPolygonBox.md#rotateofworld)

#### Inherited from

[Box](Box.md).[rotateOfWorld](Box.md#rotateofworld)

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

[IPolygonBox](../interfaces/IPolygonBox.md).[skewOfWorld](../interfaces/IPolygonBox.md#skewofworld)

#### Inherited from

[Box](Box.md).[skewOfWorld](Box.md#skewofworld)

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

[IPolygonBox](../interfaces/IPolygonBox.md).[flip](../interfaces/IPolygonBox.md#flip)

#### Inherited from

[Box](Box.md).[flip](Box.md#flip)

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

[IPolygonBox](../interfaces/IPolygonBox.md).[scaleResize](../interfaces/IPolygonBox.md#scaleresize)

#### Inherited from

[Box](Box.md).[scaleResize](Box.md#scaleresize)

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

[IPolygonBox](../interfaces/IPolygonBox.md).[__scaleResize](../interfaces/IPolygonBox.md#__scaleresize)

#### Inherited from

[Box](Box.md).[__scaleResize](Box.md#__scaleresize)

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

[IPolygonBox](../interfaces/IPolygonBox.md).[resizeWidth](../interfaces/IPolygonBox.md#resizewidth)

#### Inherited from

[Box](Box.md).[resizeWidth](Box.md#resizewidth)

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

[IPolygonBox](../interfaces/IPolygonBox.md).[resizeHeight](../interfaces/IPolygonBox.md#resizeheight)

#### Inherited from

[Box](Box.md).[resizeHeight](Box.md#resizeheight)

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

[IPolygonBox](../interfaces/IPolygonBox.md).[hit](../interfaces/IPolygonBox.md#hit)

#### Inherited from

[Box](Box.md).[hit](Box.md#hit)

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

[IPolygonBox](../interfaces/IPolygonBox.md).[__hitWorld](../interfaces/IPolygonBox.md#__hitworld)

#### Inherited from

[Box](Box.md).[__hitWorld](Box.md#__hitworld)

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

[IPolygonBox](../interfaces/IPolygonBox.md).[__hit](../interfaces/IPolygonBox.md#__hit)

#### Inherited from

[Box](Box.md).[__hit](Box.md#__hit)

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

[IPolygonBox](../interfaces/IPolygonBox.md).[__hitFill](../interfaces/IPolygonBox.md#__hitfill)

#### Inherited from

[Box](Box.md).[__hitFill](Box.md#__hitfill)

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

[IPolygonBox](../interfaces/IPolygonBox.md).[__hitStroke](../interfaces/IPolygonBox.md#__hitstroke)

#### Inherited from

[Box](Box.md).[__hitStroke](Box.md#__hitstroke)

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

[IPolygonBox](../interfaces/IPolygonBox.md).[__hitPixel](../interfaces/IPolygonBox.md#__hitpixel)

#### Inherited from

[Box](Box.md).[__hitPixel](Box.md#__hitpixel)

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

[IPolygonBox](../interfaces/IPolygonBox.md).[__drawHitPath](../interfaces/IPolygonBox.md#__drawhitpath)

#### Inherited from

[Box](Box.md).[__drawHitPath](Box.md#__drawhitpath)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:579](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/display/src/Leaf.ts#L579)

___

### \_\_updateHitCanvas

▸ **__updateHitCanvas**(): `void`

#### Returns

`void`

#### Implementation of

[IPolygonBox](../interfaces/IPolygonBox.md).[__updateHitCanvas](../interfaces/IPolygonBox.md#__updatehitcanvas)

#### Inherited from

[Box](Box.md).[__updateHitCanvas](Box.md#__updatehitcanvas)

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

[IPolygonBox](../interfaces/IPolygonBox.md).[__drawFast](../interfaces/IPolygonBox.md#__drawfast)

#### Inherited from

[Box](Box.md).[__drawFast](Box.md#__drawfast)

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

[IPolygonBox](../interfaces/IPolygonBox.md).[__draw](../interfaces/IPolygonBox.md#__draw)

#### Inherited from

[Box](Box.md).[__draw](Box.md#__draw)

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

[IPolygonBox](../interfaces/IPolygonBox.md).[__clip](../interfaces/IPolygonBox.md#__clip)

#### Inherited from

[Box](Box.md).[__clip](Box.md#__clip)

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

[IPolygonBox](../interfaces/IPolygonBox.md).[__renderShape](../interfaces/IPolygonBox.md#__rendershape)

#### Inherited from

[Box](Box.md).[__renderShape](Box.md#__rendershape)

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

[IPolygonBox](../interfaces/IPolygonBox.md).[__drawShape](../interfaces/IPolygonBox.md#__drawshape)

#### Inherited from

[Box](Box.md).[__drawShape](Box.md#__drawshape)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:599](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/display/src/Leaf.ts#L599)

___

### \_\_updateWorldOpacity

▸ **__updateWorldOpacity**(): `void`

#### Returns

`void`

#### Implementation of

[IPolygonBox](../interfaces/IPolygonBox.md).[__updateWorldOpacity](../interfaces/IPolygonBox.md#__updateworldopacity)

#### Inherited from

[Box](Box.md).[__updateWorldOpacity](Box.md#__updateworldopacity)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:602](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/display/src/Leaf.ts#L602)

___

### getMotionPathData

▸ **getMotionPathData**(): [`IMotionPathData`](../interfaces/IMotionPathData.md)

#### Returns

[`IMotionPathData`](../interfaces/IMotionPathData.md)

#### Implementation of

[IPolygonBox](../interfaces/IPolygonBox.md).[getMotionPathData](../interfaces/IPolygonBox.md#getmotionpathdata)

#### Inherited from

[Box](Box.md).[getMotionPathData](Box.md#getmotionpathdata)

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

[IPolygonBox](../interfaces/IPolygonBox.md).[getMotionPoint](../interfaces/IPolygonBox.md#getmotionpoint)

#### Inherited from

[Box](Box.md).[getMotionPoint](Box.md#getmotionpoint)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:628](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/display/src/Leaf.ts#L628)

___

### getMotionTotal

▸ **getMotionTotal**(): `number`

#### Returns

`number`

#### Implementation of

[IPolygonBox](../interfaces/IPolygonBox.md).[getMotionTotal](../interfaces/IPolygonBox.md#getmotiontotal)

#### Inherited from

[Box](Box.md).[getMotionTotal](Box.md#getmotiontotal)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:632](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/display/src/Leaf.ts#L632)

___

### \_\_updateMotionPath

▸ **__updateMotionPath**(): `void`

#### Returns

`void`

#### Implementation of

[IPolygonBox](../interfaces/IPolygonBox.md).[__updateMotionPath](../interfaces/IPolygonBox.md#__updatemotionpath)

#### Inherited from

[Box](Box.md).[__updateMotionPath](Box.md#__updatemotionpath)

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

[IPolygonBox](../interfaces/IPolygonBox.md).[__runAnimation](../interfaces/IPolygonBox.md#__runanimation)

#### Inherited from

[Box](Box.md).[__runAnimation](Box.md#__runanimation)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:642](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/display/src/Leaf.ts#L642)

___

### \_\_updateSortChildren

▸ **__updateSortChildren**(): `void`

#### Returns

`void`

#### Implementation of

[IPolygonBox](../interfaces/IPolygonBox.md).[__updateSortChildren](../interfaces/IPolygonBox.md#__updatesortchildren)

#### Inherited from

[Box](Box.md).[__updateSortChildren](Box.md#__updatesortchildren)

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

[IPolygonBox](../interfaces/IPolygonBox.md).[dropTo](../interfaces/IPolygonBox.md#dropto)

#### Inherited from

[Box](Box.md).[dropTo](Box.md#dropto)

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

[IPolygonBox](../interfaces/IPolygonBox.md).[on](../interfaces/IPolygonBox.md#on)

#### Inherited from

[Box](Box.md).[on](Box.md#on)

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

[IPolygonBox](../interfaces/IPolygonBox.md).[off](../interfaces/IPolygonBox.md#off)

#### Inherited from

[Box](Box.md).[off](Box.md#off)

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

[IPolygonBox](../interfaces/IPolygonBox.md).[on_](../interfaces/IPolygonBox.md#on_)

#### Inherited from

[Box](Box.md).[on_](Box.md#on_)

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

[IPolygonBox](../interfaces/IPolygonBox.md).[off_](../interfaces/IPolygonBox.md#off_)

#### Inherited from

[Box](Box.md).[off_](Box.md#off_)

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

[IPolygonBox](../interfaces/IPolygonBox.md).[once](../interfaces/IPolygonBox.md#once)

#### Inherited from

[Box](Box.md).[once](Box.md#once)

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

[IPolygonBox](../interfaces/IPolygonBox.md).[emit](../interfaces/IPolygonBox.md#emit)

#### Inherited from

[Box](Box.md).[emit](Box.md#emit)

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

[IPolygonBox](../interfaces/IPolygonBox.md).[emitEvent](../interfaces/IPolygonBox.md#emitevent)

#### Inherited from

[Box](Box.md).[emitEvent](Box.md#emitevent)

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

[IPolygonBox](../interfaces/IPolygonBox.md).[hasEvent](../interfaces/IPolygonBox.md#hasevent)

#### Inherited from

[Box](Box.md).[hasEvent](Box.md#hasevent)

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

[Box](Box.md).[changeAttr](Box.md#changeattr)

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

[Box](Box.md).[addAttr](Box.md#addattr)

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

[IPolygonBox](../interfaces/IPolygonBox.md).[__emitLifeEvent](../interfaces/IPolygonBox.md#__emitlifeevent)

#### Inherited from

[Box](Box.md).[__emitLifeEvent](Box.md#__emitlifeevent)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:692](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/display/src/Leaf.ts#L692)

___

### \_\_updateStrokeSpread

▸ **__updateStrokeSpread**(): [`IFourNumber`](../modules.md#ifournumber)

#### Returns

[`IFourNumber`](../modules.md#ifournumber)

#### Implementation of

[IPolygonBox](../interfaces/IPolygonBox.md).[__updateStrokeSpread](../interfaces/IPolygonBox.md#__updatestrokespread)

#### Inherited from

[Box](Box.md).[__updateStrokeSpread](Box.md#__updatestrokespread)

#### Defined in

[src/ui/packages/display/src/Box.ts:57](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/display/src/Box.ts#L57)

___

### \_\_updateRectRenderSpread

▸ **__updateRectRenderSpread**(): [`IFourNumber`](../modules.md#ifournumber)

#### Returns

[`IFourNumber`](../modules.md#ifournumber)

#### Inherited from

[Box](Box.md).[__updateRectRenderSpread](Box.md#__updaterectrenderspread)

#### Defined in

[src/ui/packages/display/src/Box.ts:60](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/display/src/Box.ts#L60)

___

### \_\_updateRenderSpread

▸ **__updateRenderSpread**(): [`IFourNumber`](../modules.md#ifournumber)

#### Returns

[`IFourNumber`](../modules.md#ifournumber)

#### Implementation of

[IPolygonBox](../interfaces/IPolygonBox.md).[__updateRenderSpread](../interfaces/IPolygonBox.md#__updaterenderspread)

#### Inherited from

[Box](Box.md).[__updateRenderSpread](Box.md#__updaterenderspread)

#### Defined in

[src/ui/packages/display/src/Box.ts:62](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/display/src/Box.ts#L62)

___

### \_\_updateRectBoxBounds

▸ **__updateRectBoxBounds**(): `void`

#### Returns

`void`

#### Inherited from

[Box](Box.md).[__updateRectBoxBounds](Box.md#__updaterectboxbounds)

#### Defined in

[src/ui/packages/display/src/Box.ts:66](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/display/src/Box.ts#L66)

___

### \_\_updateBoxBounds

▸ **__updateBoxBounds**(`_secondLayout?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `_secondLayout?` | `boolean` |

#### Returns

`void`

#### Implementation of

[IPolygonBox](../interfaces/IPolygonBox.md).[__updateBoxBounds](../interfaces/IPolygonBox.md#__updateboxbounds)

#### Inherited from

[Box](Box.md).[__updateBoxBounds](Box.md#__updateboxbounds)

#### Defined in

[src/ui/packages/display/src/Box.ts:70](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/display/src/Box.ts#L70)

___

### \_\_updateStrokeBounds

▸ **__updateStrokeBounds**(): `void`

#### Returns

`void`

#### Implementation of

[IPolygonBox](../interfaces/IPolygonBox.md).[__updateStrokeBounds](../interfaces/IPolygonBox.md#__updatestrokebounds)

#### Inherited from

[Box](Box.md).[__updateStrokeBounds](Box.md#__updatestrokebounds)

#### Defined in

[src/ui/packages/display/src/Box.ts:101](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/display/src/Box.ts#L101)

___

### \_\_updateRenderBounds

▸ **__updateRenderBounds**(): `void`

#### Returns

`void`

#### Implementation of

[IPolygonBox](../interfaces/IPolygonBox.md).[__updateRenderBounds](../interfaces/IPolygonBox.md#__updaterenderbounds)

#### Inherited from

[Box](Box.md).[__updateRenderBounds](Box.md#__updaterenderbounds)

#### Defined in

[src/ui/packages/display/src/Box.ts:103](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/display/src/Box.ts#L103)

___

### \_\_updateRectRenderBounds

▸ **__updateRectRenderBounds**(): `void`

#### Returns

`void`

#### Implementation of

[IPolygonBox](../interfaces/IPolygonBox.md).[__updateRectRenderBounds](../interfaces/IPolygonBox.md#__updaterectrenderbounds)

#### Inherited from

[Box](Box.md).[__updateRectRenderBounds](Box.md#__updaterectrenderbounds)

#### Defined in

[src/ui/packages/display/src/Box.ts:129](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/display/src/Box.ts#L129)

___

### \_\_checkScroll

▸ **__checkScroll**(`_isScrollMode`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `_isScrollMode` | `boolean` |

#### Returns

`void`

#### Implementation of

[IPolygonBox](../interfaces/IPolygonBox.md).[__checkScroll](../interfaces/IPolygonBox.md#__checkscroll)

#### Inherited from

[Box](Box.md).[__checkScroll](Box.md#__checkscroll)

#### Defined in

[src/ui/packages/display/src/Box.ts:133](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/display/src/Box.ts#L133)

___

### \_\_updateRectChange

▸ **__updateRectChange**(): `void`

#### Returns

`void`

#### Inherited from

[Box](Box.md).[__updateRectChange](Box.md#__updaterectchange)

#### Defined in

[src/ui/packages/display/src/Box.ts:137](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/display/src/Box.ts#L137)

___

### \_\_updateChange

▸ **__updateChange**(): `void`

#### Returns

`void`

#### Implementation of

[IPolygonBox](../interfaces/IPolygonBox.md).[__updateChange](../interfaces/IPolygonBox.md#__updatechange)

#### Inherited from

[Box](Box.md).[__updateChange](Box.md#__updatechange)

#### Defined in

[src/ui/packages/display/src/Box.ts:139](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/display/src/Box.ts#L139)

___

### \_\_renderRect

▸ **__renderRect**(`_canvas`, `_options`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `_canvas` | [`ILeaferCanvas`](../interfaces/ILeaferCanvas.md) |
| `_options` | [`IRenderOptions`](../interfaces/IRenderOptions.md) |

#### Returns

`void`

#### Inherited from

[Box](Box.md).[__renderRect](Box.md#__renderrect)

#### Defined in

[src/ui/packages/display/src/Box.ts:146](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/display/src/Box.ts#L146)

___

### \_\_renderGroup

▸ **__renderGroup**(`_canvas`, `_options`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `_canvas` | [`ILeaferCanvas`](../interfaces/ILeaferCanvas.md) |
| `_options` | [`IRenderOptions`](../interfaces/IRenderOptions.md) |

#### Returns

`void`

#### Implementation of

[IPolygonBox](../interfaces/IPolygonBox.md).[__renderGroup](../interfaces/IPolygonBox.md#__rendergroup)

#### Inherited from

[Box](Box.md).[__renderGroup](Box.md#__rendergroup)

#### Defined in

[src/ui/packages/display/src/Box.ts:149](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/display/src/Box.ts#L149)

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

[IPolygonBox](../interfaces/IPolygonBox.md).[__render](../interfaces/IPolygonBox.md#__render)

#### Inherited from

[Box](Box.md).[__render](Box.md#__render)

#### Defined in

[src/ui/packages/display/src/Box.ts:152](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/display/src/Box.ts#L152)

___

### \_\_drawContent

▸ **__drawContent**(`canvas`, `options`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `canvas` | [`ILeaferCanvas`](../interfaces/ILeaferCanvas.md) |
| `options` | [`IRenderOptions`](../interfaces/IRenderOptions.md) |

#### Returns

`void`

#### Implementation of

[IPolygonBox](../interfaces/IPolygonBox.md).[__drawContent](../interfaces/IPolygonBox.md#__drawcontent)

#### Inherited from

[Box](Box.md).[__drawContent](Box.md#__drawcontent)

#### Defined in

[src/ui/packages/display/src/Box.ts:163](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/display/src/Box.ts#L163)

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

[IPolygonBox](../interfaces/IPolygonBox.md).[reset](../interfaces/IPolygonBox.md#reset)

#### Inherited from

[Box](Box.md).[reset](Box.md#reset)

#### Defined in

[src/ui/packages/display/src/Group.ts:35](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/display/src/Group.ts#L35)

___

### \_\_setBranch

▸ **__setBranch**(): `void`

#### Returns

`void`

#### Inherited from

[Box](Box.md).[__setBranch](Box.md#__setbranch)

#### Defined in

[src/ui/packages/display/src/Group.ts:40](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/display/src/Group.ts#L40)

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

[IPolygonBox](../interfaces/IPolygonBox.md).[set](../interfaces/IPolygonBox.md#set)

#### Inherited from

[Box](Box.md).[set](Box.md#set)

#### Defined in

[src/ui/packages/display/src/Group.ts:47](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/display/src/Group.ts#L47)

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

[IPolygonBox](../interfaces/IPolygonBox.md).[toJSON](../interfaces/IPolygonBox.md#tojson)

#### Inherited from

[Box](Box.md).[toJSON](Box.md#tojson)

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

[IPolygonBox](../interfaces/IPolygonBox.md).[pick](../interfaces/IPolygonBox.md#pick)

#### Inherited from

[Box](Box.md).[pick](Box.md#pick)

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

[IPolygonBox](../interfaces/IPolygonBox.md).[addAt](../interfaces/IPolygonBox.md#addat)

#### Inherited from

[Box](Box.md).[addAt](Box.md#addat)

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

[IPolygonBox](../interfaces/IPolygonBox.md).[addAfter](../interfaces/IPolygonBox.md#addafter)

#### Inherited from

[Box](Box.md).[addAfter](Box.md#addafter)

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

[IPolygonBox](../interfaces/IPolygonBox.md).[addBefore](../interfaces/IPolygonBox.md#addbefore)

#### Inherited from

[Box](Box.md).[addBefore](Box.md#addbefore)

#### Defined in

[src/ui/packages/display/src/Group.ts:89](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/display/src/Group.ts#L89)

___

### add

▸ **add**(`_child`, `_index?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `_child` | [`IUIInputData`](../interfaces/IUIInputData.md) \| [`IUI`](../interfaces/IUI.md) \| [`IUI`](../interfaces/IUI.md)[] \| [`IUIInputData`](../interfaces/IUIInputData.md)[] |
| `_index?` | `number` |

#### Returns

`void`

#### Implementation of

[IPolygonBox](../interfaces/IPolygonBox.md).[add](../interfaces/IPolygonBox.md#add)

#### Inherited from

[Box](Box.md).[add](Box.md#add)

#### Defined in

[src/ui/packages/display/src/Group.ts:95](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/display/src/Group.ts#L95)

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

[IPolygonBox](../interfaces/IPolygonBox.md).[addMany](../interfaces/IPolygonBox.md#addmany)

#### Inherited from

[Box](Box.md).[addMany](Box.md#addmany)

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

[IPolygonBox](../interfaces/IPolygonBox.md).[remove](../interfaces/IPolygonBox.md#remove)

#### Inherited from

[Box](Box.md).[remove](Box.md#remove)

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

[IPolygonBox](../interfaces/IPolygonBox.md).[removeAll](../interfaces/IPolygonBox.md#removeall)

#### Inherited from

[Box](Box.md).[removeAll](Box.md#removeall)

#### Defined in

[src/ui/packages/display/src/Group.ts:101](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/display/src/Group.ts#L101)

___

### clear

▸ **clear**(): `void`

#### Returns

`void`

#### Implementation of

[IPolygonBox](../interfaces/IPolygonBox.md).[clear](../interfaces/IPolygonBox.md#clear)

#### Inherited from

[Box](Box.md).[clear](Box.md#clear)

#### Defined in

[src/ui/packages/display/src/Group.ts:103](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/display/src/Group.ts#L103)

___

### get

▸ **get**\<`K`\>(`name?`): [`IUIInputData`](../interfaces/IUIInputData.md) \| [`PolygonBox`](PolygonBox.md)\<`TInputData`\>[`K`]

#### Type parameters

| Name | Type |
| :------ | :------ |
| `K` | extends keyof [`PolygonBox`](PolygonBox.md)\<`TInputData`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `name?` | [`IUIInputData`](../interfaces/IUIInputData.md) \| `K` \| `K`[] |

#### Returns

[`IUIInputData`](../interfaces/IUIInputData.md) \| [`PolygonBox`](PolygonBox.md)\<`TInputData`\>[`K`]

#### Implementation of

[IPolygonBox](../interfaces/IPolygonBox.md).[get](../interfaces/IPolygonBox.md#get)

#### Inherited from

[Box](Box.md).[get](Box.md#get)

#### Defined in

[src/ui/packages/display/src/UI.ts:434](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/display/src/UI.ts#L434)

___

### createProxyData

▸ **createProxyData**(): [`IUIInputData`](../interfaces/IUIInputData.md)

#### Returns

[`IUIInputData`](../interfaces/IUIInputData.md)

#### Implementation of

[IPolygonBox](../interfaces/IPolygonBox.md).[createProxyData](../interfaces/IPolygonBox.md#createproxydata)

#### Inherited from

[Box](Box.md).[createProxyData](Box.md#createproxydata)

#### Defined in

[src/ui/packages/display/src/UI.ts:438](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/display/src/UI.ts#L438)

___

### clearProxyData

▸ **clearProxyData**(): `void`

#### Returns

`void`

#### Implementation of

[IPolygonBox](../interfaces/IPolygonBox.md).[clearProxyData](../interfaces/IPolygonBox.md#clearproxydata)

#### Inherited from

[Box](Box.md).[clearProxyData](Box.md#clearproxydata)

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

[IPolygonBox](../interfaces/IPolygonBox.md).[find](../interfaces/IPolygonBox.md#find)

#### Inherited from

[Box](Box.md).[find](Box.md#find)

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

[IPolygonBox](../interfaces/IPolygonBox.md).[findTag](../interfaces/IPolygonBox.md#findtag)

#### Inherited from

[Box](Box.md).[findTag](Box.md#findtag)

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

[IPolygonBox](../interfaces/IPolygonBox.md).[findOne](../interfaces/IPolygonBox.md#findone)

#### Inherited from

[Box](Box.md).[findOne](Box.md#findone)

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

[IPolygonBox](../interfaces/IPolygonBox.md).[findId](../interfaces/IPolygonBox.md#findid)

#### Inherited from

[Box](Box.md).[findId](Box.md#findid)

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

[IPolygonBox](../interfaces/IPolygonBox.md).[getPath](../interfaces/IPolygonBox.md#getpath)

#### Inherited from

[Box](Box.md).[getPath](Box.md#getpath)

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

[IPolygonBox](../interfaces/IPolygonBox.md).[getPathString](../interfaces/IPolygonBox.md#getpathstring)

#### Inherited from

[Box](Box.md).[getPathString](Box.md#getpathstring)

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

[IPolygonBox](../interfaces/IPolygonBox.md).[asPath](../interfaces/IPolygonBox.md#aspath)

#### Inherited from

[Box](Box.md).[asPath](Box.md#aspath)

#### Defined in

[src/ui/packages/display/src/UI.ts:466](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/display/src/UI.ts#L466)

___

### load

▸ **load**(): `void`

#### Returns

`void`

#### Implementation of

[IPolygonBox](../interfaces/IPolygonBox.md).[load](../interfaces/IPolygonBox.md#load)

#### Inherited from

[Box](Box.md).[load](Box.md#load)

#### Defined in

[src/ui/packages/display/src/UI.ts:470](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/display/src/UI.ts#L470)

___

### \_\_onUpdateSize

▸ **__onUpdateSize**(): `void`

#### Returns

`void`

#### Implementation of

[IPolygonBox](../interfaces/IPolygonBox.md).[__onUpdateSize](../interfaces/IPolygonBox.md#__onupdatesize)

#### Inherited from

[Box](Box.md).[__onUpdateSize](Box.md#__onupdatesize)

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

[IPolygonBox](../interfaces/IPolygonBox.md).[__updateRenderPath](../interfaces/IPolygonBox.md#__updaterenderpath)

#### Inherited from

[Box](Box.md).[__updateRenderPath](Box.md#__updaterenderpath)

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

[IPolygonBox](../interfaces/IPolygonBox.md).[__drawRenderPath](../interfaces/IPolygonBox.md#__drawrenderpath)

#### Inherited from

[Box](Box.md).[__drawRenderPath](Box.md#__drawrenderpath)

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

[IPolygonBox](../interfaces/IPolygonBox.md).[__drawPath](../interfaces/IPolygonBox.md#__drawpath)

#### Inherited from

[Box](Box.md).[__drawPath](Box.md#__drawpath)

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

[IPolygonBox](../interfaces/IPolygonBox.md).[__drawPathByData](../interfaces/IPolygonBox.md#__drawpathbydata)

#### Inherited from

[Box](Box.md).[__drawPathByData](Box.md#__drawpathbydata)

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

[IPolygonBox](../interfaces/IPolygonBox.md).[__drawPathByBox](../interfaces/IPolygonBox.md#__drawpathbybox)

#### Inherited from

[Box](Box.md).[__drawPathByBox](Box.md#__drawpathbybox)

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

[IPolygonBox](../interfaces/IPolygonBox.md).[drawImagePlaceholder](../interfaces/IPolygonBox.md#drawimageplaceholder)

#### Inherited from

[Box](Box.md).[drawImagePlaceholder](Box.md#drawimageplaceholder)

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

[IPolygonBox](../interfaces/IPolygonBox.md).[animate](../interfaces/IPolygonBox.md#animate)

#### Inherited from

[Box](Box.md).[animate](Box.md#animate)

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

[IPolygonBox](../interfaces/IPolygonBox.md).[killAnimate](../interfaces/IPolygonBox.md#killanimate)

#### Inherited from

[Box](Box.md).[killAnimate](Box.md#killanimate)

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

[IPolygonBox](../interfaces/IPolygonBox.md).[export](../interfaces/IPolygonBox.md#export)

#### Inherited from

[Box](Box.md).[export](Box.md#export)

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

[IPolygonBox](../interfaces/IPolygonBox.md).[syncExport](../interfaces/IPolygonBox.md#syncexport)

#### Inherited from

[Box](Box.md).[syncExport](Box.md#syncexport)

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

[IPolygonBox](../interfaces/IPolygonBox.md).[clone](../interfaces/IPolygonBox.md#clone)

#### Inherited from

[Box](Box.md).[clone](Box.md#clone)

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

[Box](Box.md).[one](Box.md#one)

#### Defined in

[src/ui/packages/display/src/UI.ts:546](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/display/src/UI.ts#L546)

___

### registerUI

▸ **registerUI**(): `void`

#### Returns

`void`

#### Inherited from

[Box](Box.md).[registerUI](Box.md#registerui)

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

[Box](Box.md).[registerData](Box.md#registerdata)

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

[Box](Box.md).[setEditConfig](Box.md#seteditconfig)

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

[Box](Box.md).[setEditOuter](Box.md#seteditouter)

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

[Box](Box.md).[setEditInner](Box.md#seteditinner)

#### Defined in

[src/ui/packages/display/src/UI.ts:565](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/display/src/UI.ts#L565)

___

### destroy

▸ **destroy**(): `void`

#### Returns

`void`

#### Implementation of

[IPolygonBox](../interfaces/IPolygonBox.md).[destroy](../interfaces/IPolygonBox.md#destroy)

#### Inherited from

[Box](Box.md).[destroy](Box.md#destroy)

#### Defined in

[src/ui/packages/display/src/UI.ts:568](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/display/src/UI.ts#L568)
