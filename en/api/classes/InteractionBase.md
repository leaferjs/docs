# Class: InteractionBase

## Hierarchy

- **`InteractionBase`**

  ↳ [`Interaction`](Interaction.md)

## Implements

- [`IInteraction`](../interfaces/IInteraction.md)

## Table of contents

### Constructors

- [constructor](InteractionBase.md#constructor)

### Properties

- [target](InteractionBase.md#target)
- [canvas](InteractionBase.md#canvas)
- [selector](InteractionBase.md#selector)
- [running](InteractionBase.md#running)
- [config](InteractionBase.md#config)
- [cursor](InteractionBase.md#cursor)
- [bottomList](InteractionBase.md#bottomlist)
- [shrinkCanvasBounds](InteractionBase.md#shrinkcanvasbounds)
- [downData](InteractionBase.md#downdata)
- [hoverData](InteractionBase.md#hoverdata)
- [focusData](InteractionBase.md#focusdata)
- [downTime](InteractionBase.md#downtime)
- [overPath](InteractionBase.md#overpath)
- [enterPath](InteractionBase.md#enterpath)
- [waitMenuTap](InteractionBase.md#waitmenutap)
- [waitRightTap](InteractionBase.md#waitrighttap)
- [waitTap](InteractionBase.md#waittap)
- [longPressTimer](InteractionBase.md#longpresstimer)
- [longPressed](InteractionBase.md#longpressed)
- [tapCount](InteractionBase.md#tapcount)
- [tapTimer](InteractionBase.md#taptimer)
- [dragger](InteractionBase.md#dragger)
- [transformer](InteractionBase.md#transformer)
- [\_\_eventIds](InteractionBase.md#__eventids)
- [defaultPath](InteractionBase.md#defaultpath)
- [downKeyMap](InteractionBase.md#downkeymap)

### Accessors

- [dragging](InteractionBase.md#dragging)
- [transforming](InteractionBase.md#transforming)
- [moveMode](InteractionBase.md#movemode)
- [canHover](InteractionBase.md#canhover)
- [isDragEmpty](InteractionBase.md#isdragempty)
- [isMobileDragEmpty](InteractionBase.md#ismobiledragempty)
- [isHoldMiddleKey](InteractionBase.md#isholdmiddlekey)
- [isHoldRightKey](InteractionBase.md#isholdrightkey)
- [isHoldSpaceKey](InteractionBase.md#isholdspacekey)
- [m](InteractionBase.md#m)
- [p](InteractionBase.md#p)
- [hitRadius](InteractionBase.md#hitradius)

### Methods

- [start](InteractionBase.md#start)
- [stop](InteractionBase.md#stop)
- [receive](InteractionBase.md#receive)
- [pointerDown](InteractionBase.md#pointerdown)
- [pointerMove](InteractionBase.md#pointermove)
- [pointerMoveReal](InteractionBase.md#pointermovereal)
- [pointerUp](InteractionBase.md#pointerup)
- [pointerCancel](InteractionBase.md#pointercancel)
- [menu](InteractionBase.md#menu)
- [menuTap](InteractionBase.md#menutap)
- [createTransformer](InteractionBase.md#createtransformer)
- [move](InteractionBase.md#move)
- [zoom](InteractionBase.md#zoom)
- [rotate](InteractionBase.md#rotate)
- [transformEnd](InteractionBase.md#transformend)
- [wheel](InteractionBase.md#wheel)
- [multiTouch](InteractionBase.md#multitouch)
- [keyDown](InteractionBase.md#keydown)
- [keyUp](InteractionBase.md#keyup)
- [pointerHover](InteractionBase.md#pointerhover)
- [pointerOverOrOut](InteractionBase.md#pointeroverorout)
- [pointerEnterOrLeave](InteractionBase.md#pointerenterorleave)
- [touchLeave](InteractionBase.md#touchleave)
- [tap](InteractionBase.md#tap)
- [findPath](InteractionBase.md#findpath)
- [isRootPath](InteractionBase.md#isrootpath)
- [isTreePath](InteractionBase.md#istreepath)
- [checkPath](InteractionBase.md#checkpath)
- [canMove](InteractionBase.md#canmove)
- [isDrag](InteractionBase.md#isdrag)
- [isPress](InteractionBase.md#ispress)
- [isHover](InteractionBase.md#ishover)
- [isFocus](InteractionBase.md#isfocus)
- [cancelHover](InteractionBase.md#cancelhover)
- [stopDragAnimate](InteractionBase.md#stopdraganimate)
- [replaceDownTarget](InteractionBase.md#replacedowntarget)
- [updateDownData](InteractionBase.md#updatedowndata)
- [updateHoverData](InteractionBase.md#updatehoverdata)
- [updateCursor](InteractionBase.md#updatecursor)
- [setCursor](InteractionBase.md#setcursor)
- [getLocal](InteractionBase.md#getlocal)
- [emitTap](InteractionBase.md#emittap)
- [emitDoubleTap](InteractionBase.md#emitdoubletap)
- [pointerWaitCancel](InteractionBase.md#pointerwaitcancel)
- [tapWait](InteractionBase.md#tapwait)
- [tapWaitCancel](InteractionBase.md#tapwaitcancel)
- [longPressWait](InteractionBase.md#longpresswait)
- [longTap](InteractionBase.md#longtap)
- [longPressWaitCancel](InteractionBase.md#longpresswaitcancel)
- [\_\_onResize](InteractionBase.md#__onresize)
- [\_\_listenEvents](InteractionBase.md#__listenevents)
- [\_\_removeListenEvents](InteractionBase.md#__removelistenevents)
- [emit](InteractionBase.md#emit)
- [destroy](InteractionBase.md#destroy)

## Constructors

### constructor

• **new InteractionBase**(`target`, `canvas`, `selector`, `userConfig?`): [`InteractionBase`](InteractionBase.md)

#### Parameters

| Name          | Type                                                        |
| :------------ | :---------------------------------------------------------- |
| `target`      | [`ILeaf`](../interfaces/ILeaf.md)                           |
| `canvas`      | [`IInteractionCanvas`](../interfaces/IInteractionCanvas.md) |
| `selector`    | [`ISelector`](../interfaces/ISelector.md)                   |
| `userConfig?` | [`IInteractionConfig`](../interfaces/IInteractionConfig.md) |

#### Returns

[`InteractionBase`](InteractionBase.md)

#### Defined in

[src/ui/packages/interaction/interaction/src/Interaction.ts:70](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/interaction/interaction/src/Interaction.ts#L70)

## Properties

### target

• **target**: [`ILeaf`](../interfaces/ILeaf.md)

#### Implementation of

[IInteraction](../interfaces/IInteraction.md).[target](../interfaces/IInteraction.md#target)

#### Defined in

[src/ui/packages/interaction/interaction/src/Interaction.ts:16](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/interaction/interaction/src/Interaction.ts#L16)

___

### canvas

• **canvas**: [`IInteractionCanvas`](../interfaces/IInteractionCanvas.md)

#### Implementation of

[IInteraction](../interfaces/IInteraction.md).[canvas](../interfaces/IInteraction.md#canvas)

#### Defined in

[src/ui/packages/interaction/interaction/src/Interaction.ts:17](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/interaction/interaction/src/Interaction.ts#L17)

___

### selector

• **selector**: [`ISelector`](../interfaces/ISelector.md)

#### Implementation of

[IInteraction](../interfaces/IInteraction.md).[selector](../interfaces/IInteraction.md#selector)

#### Defined in

[src/ui/packages/interaction/interaction/src/Interaction.ts:18](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/interaction/interaction/src/Interaction.ts#L18)

___

### running

• **running**: `boolean`

#### Implementation of

[IInteraction](../interfaces/IInteraction.md).[running](../interfaces/IInteraction.md#running)

#### Defined in

[src/ui/packages/interaction/interaction/src/Interaction.ts:20](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/interaction/interaction/src/Interaction.ts#L20)

___

### config

• **config**: [`IInteractionConfig`](../interfaces/IInteractionConfig.md)

#### Implementation of

[IInteraction](../interfaces/IInteraction.md).[config](../interfaces/IInteraction.md#config)

#### Defined in

[src/ui/packages/interaction/interaction/src/Interaction.ts:34](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/interaction/interaction/src/Interaction.ts#L34)

___

### cursor

• **cursor**: [`ICursorType`](../modules.md#icursortype) \| [`ICursorType`](../modules.md#icursortype)[]

#### Implementation of

[IInteraction](../interfaces/IInteraction.md).[cursor](../interfaces/IInteraction.md#cursor)

#### Defined in

[src/ui/packages/interaction/interaction/src/Interaction.ts:38](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/interaction/interaction/src/Interaction.ts#L38)

___

### bottomList

• `Optional` **bottomList**: [`IPickBottom`](../interfaces/IPickBottom.md)[]

#### Implementation of

[IInteraction](../interfaces/IInteraction.md).[bottomList](../interfaces/IInteraction.md#bottomlist)

#### Defined in

[src/ui/packages/interaction/interaction/src/Interaction.ts:41](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/interaction/interaction/src/Interaction.ts#L41)

___

### shrinkCanvasBounds

• **shrinkCanvasBounds**: [`IBounds`](../interfaces/IBounds.md)

#### Implementation of

[IInteraction](../interfaces/IInteraction.md).[shrinkCanvasBounds](../interfaces/IInteraction.md#shrinkcanvasbounds)

#### Defined in

[src/ui/packages/interaction/interaction/src/Interaction.ts:43](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/interaction/interaction/src/Interaction.ts#L43)

___

### downData

• **downData**: [`IPointerEvent`](../interfaces/IPointerEvent.md)

#### Implementation of

[IInteraction](../interfaces/IInteraction.md).[downData](../interfaces/IInteraction.md#downdata)

#### Defined in

[src/ui/packages/interaction/interaction/src/Interaction.ts:45](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/interaction/interaction/src/Interaction.ts#L45)

___

### hoverData

• **hoverData**: [`IPointerEvent`](../interfaces/IPointerEvent.md)

#### Implementation of

[IInteraction](../interfaces/IInteraction.md).[hoverData](../interfaces/IInteraction.md#hoverdata)

#### Defined in

[src/ui/packages/interaction/interaction/src/Interaction.ts:46](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/interaction/interaction/src/Interaction.ts#L46)

___

### focusData

• **focusData**: [`ILeaf`](../interfaces/ILeaf.md)

#### Implementation of

[IInteraction](../interfaces/IInteraction.md).[focusData](../interfaces/IInteraction.md#focusdata)

#### Defined in

[src/ui/packages/interaction/interaction/src/Interaction.ts:47](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/interaction/interaction/src/Interaction.ts#L47)

___

### downTime

• **downTime**: `number`

#### Implementation of

[IInteraction](../interfaces/IInteraction.md).[downTime](../interfaces/IInteraction.md#downtime)

#### Defined in

[src/ui/packages/interaction/interaction/src/Interaction.ts:49](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/interaction/interaction/src/Interaction.ts#L49)

___

### overPath

• `Protected` **overPath**: [`LeafList`](LeafList.md)

#### Defined in

[src/ui/packages/interaction/interaction/src/Interaction.ts:51](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/interaction/interaction/src/Interaction.ts#L51)

___

### enterPath

• `Protected` **enterPath**: [`LeafList`](LeafList.md)

#### Defined in

[src/ui/packages/interaction/interaction/src/Interaction.ts:52](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/interaction/interaction/src/Interaction.ts#L52)

___

### waitMenuTap

• `Protected` **waitMenuTap**: `boolean`

#### Defined in

[src/ui/packages/interaction/interaction/src/Interaction.ts:54](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/interaction/interaction/src/Interaction.ts#L54)

___

### waitRightTap

• `Protected` **waitRightTap**: `boolean`

#### Defined in

[src/ui/packages/interaction/interaction/src/Interaction.ts:55](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/interaction/interaction/src/Interaction.ts#L55)

___

### waitTap

• `Protected` **waitTap**: `boolean`

#### Defined in

[src/ui/packages/interaction/interaction/src/Interaction.ts:56](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/interaction/interaction/src/Interaction.ts#L56)

___

### longPressTimer

• `Protected` **longPressTimer**: `any`

#### Defined in

[src/ui/packages/interaction/interaction/src/Interaction.ts:57](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/interaction/interaction/src/Interaction.ts#L57)

___

### longPressed

• `Protected` **longPressed**: `boolean`

#### Defined in

[src/ui/packages/interaction/interaction/src/Interaction.ts:58](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/interaction/interaction/src/Interaction.ts#L58)

___

### tapCount

• `Protected` **tapCount**: `number` = `0`

#### Defined in

[src/ui/packages/interaction/interaction/src/Interaction.ts:59](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/interaction/interaction/src/Interaction.ts#L59)

___

### tapTimer

• `Protected` **tapTimer**: `any`

#### Defined in

[src/ui/packages/interaction/interaction/src/Interaction.ts:60](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/interaction/interaction/src/Interaction.ts#L60)

___

### dragger

• **dragger**: [`Dragger`](Dragger.md)

#### Defined in

[src/ui/packages/interaction/interaction/src/Interaction.ts:62](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/interaction/interaction/src/Interaction.ts#L62)

___

### transformer

• **transformer**: [`ITransformer`](../interfaces/ITransformer.md)

#### Defined in

[src/ui/packages/interaction/interaction/src/Interaction.ts:63](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/interaction/interaction/src/Interaction.ts#L63)

___

### \_\_eventIds

• `Protected` **\_\_eventIds**: [`IEventListenerId`](../interfaces/IEventListenerId.md)[]

#### Defined in

[src/ui/packages/interaction/interaction/src/Interaction.ts:65](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/interaction/interaction/src/Interaction.ts#L65)

___

### defaultPath

• `Protected` **defaultPath**: [`ILeafList`](../interfaces/ILeafList.md)

#### Defined in

[src/ui/packages/interaction/interaction/src/Interaction.ts:66](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/interaction/interaction/src/Interaction.ts#L66)

___

### downKeyMap

• `Protected` **downKeyMap**: [`IBooleanMap`](../interfaces/IBooleanMap.md) = `{}`

#### Defined in

[src/ui/packages/interaction/interaction/src/Interaction.ts:68](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/interaction/interaction/src/Interaction.ts#L68)

## Accessors

### dragging

• `get` **dragging**(): `boolean`

#### Returns

`boolean`

#### Implementation of

[IInteraction](../interfaces/IInteraction.md).[dragging](../interfaces/IInteraction.md#dragging)

#### Defined in

[src/ui/packages/interaction/interaction/src/Interaction.ts:22](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/interaction/interaction/src/Interaction.ts#L22)

___

### transforming

• `get` **transforming**(): `boolean`

#### Returns

`boolean`

#### Implementation of

[IInteraction](../interfaces/IInteraction.md).[transforming](../interfaces/IInteraction.md#transforming)

#### Defined in

[src/ui/packages/interaction/interaction/src/Interaction.ts:23](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/interaction/interaction/src/Interaction.ts#L23)

___

### moveMode

• `get` **moveMode**(): `boolean`

#### Returns

`boolean`

#### Implementation of

[IInteraction](../interfaces/IInteraction.md).[moveMode](../interfaces/IInteraction.md#movemode)

#### Defined in

[src/ui/packages/interaction/interaction/src/Interaction.ts:25](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/interaction/interaction/src/Interaction.ts#L25)

___

### canHover

• `get` **canHover**(): `boolean`

#### Returns

`boolean`

#### Implementation of

[IInteraction](../interfaces/IInteraction.md).[canHover](../interfaces/IInteraction.md#canhover)

#### Defined in

[src/ui/packages/interaction/interaction/src/Interaction.ts:26](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/interaction/interaction/src/Interaction.ts#L26)

___

### isDragEmpty

• `get` **isDragEmpty**(): `boolean`

#### Returns

`boolean`

#### Implementation of

[IInteraction](../interfaces/IInteraction.md).[isDragEmpty](../interfaces/IInteraction.md#isdragempty)

#### Defined in

[src/ui/packages/interaction/interaction/src/Interaction.ts:28](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/interaction/interaction/src/Interaction.ts#L28)

___

### isMobileDragEmpty

• `get` **isMobileDragEmpty**(): `boolean`

#### Returns

`boolean`

#### Implementation of

[IInteraction](../interfaces/IInteraction.md).[isMobileDragEmpty](../interfaces/IInteraction.md#ismobiledragempty)

#### Defined in

[src/ui/packages/interaction/interaction/src/Interaction.ts:29](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/interaction/interaction/src/Interaction.ts#L29)

___

### isHoldMiddleKey

• `get` **isHoldMiddleKey**(): `boolean`

#### Returns

`boolean`

#### Implementation of

[IInteraction](../interfaces/IInteraction.md).[isHoldMiddleKey](../interfaces/IInteraction.md#isholdmiddlekey)

#### Defined in

[src/ui/packages/interaction/interaction/src/Interaction.ts:30](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/interaction/interaction/src/Interaction.ts#L30)

___

### isHoldRightKey

• `get` **isHoldRightKey**(): `boolean`

#### Returns

`boolean`

#### Implementation of

[IInteraction](../interfaces/IInteraction.md).[isHoldRightKey](../interfaces/IInteraction.md#isholdrightkey)

#### Defined in

[src/ui/packages/interaction/interaction/src/Interaction.ts:31](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/interaction/interaction/src/Interaction.ts#L31)

___

### isHoldSpaceKey

• `get` **isHoldSpaceKey**(): `boolean`

#### Returns

`boolean`

#### Implementation of

[IInteraction](../interfaces/IInteraction.md).[isHoldSpaceKey](../interfaces/IInteraction.md#isholdspacekey)

#### Defined in

[src/ui/packages/interaction/interaction/src/Interaction.ts:32](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/interaction/interaction/src/Interaction.ts#L32)

___

### m

• `get` **m**(): [`IMoveConfig`](../interfaces/IMoveConfig.md)

#### Returns

[`IMoveConfig`](../interfaces/IMoveConfig.md)

#### Implementation of

[IInteraction](../interfaces/IInteraction.md).[m](../interfaces/IInteraction.md#m)

#### Defined in

[src/ui/packages/interaction/interaction/src/Interaction.ts:35](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/interaction/interaction/src/Interaction.ts#L35)

___

### p

• `get` **p**(): [`IPointerConfig`](../interfaces/IPointerConfig.md)

#### Returns

[`IPointerConfig`](../interfaces/IPointerConfig.md)

#### Implementation of

[IInteraction](../interfaces/IInteraction.md).[p](../interfaces/IInteraction.md#p)

#### Defined in

[src/ui/packages/interaction/interaction/src/Interaction.ts:36](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/interaction/interaction/src/Interaction.ts#L36)

___

### hitRadius

• `get` **hitRadius**(): `number`

#### Returns

`number`

#### Implementation of

[IInteraction](../interfaces/IInteraction.md).[hitRadius](../interfaces/IInteraction.md#hitradius)

#### Defined in

[src/ui/packages/interaction/interaction/src/Interaction.ts:39](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/interaction/interaction/src/Interaction.ts#L39)

## Methods

### start

▸ **start**(): `void`

#### Returns

`void`

#### Implementation of

[IInteraction](../interfaces/IInteraction.md).[start](../interfaces/IInteraction.md#start)

#### Defined in

[src/ui/packages/interaction/interaction/src/Interaction.ts:84](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/interaction/interaction/src/Interaction.ts#L84)

___

### stop

▸ **stop**(): `void`

#### Returns

`void`

#### Implementation of

[IInteraction](../interfaces/IInteraction.md).[stop](../interfaces/IInteraction.md#stop)

#### Defined in

[src/ui/packages/interaction/interaction/src/Interaction.ts:88](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/interaction/interaction/src/Interaction.ts#L88)

___

### receive

▸ **receive**(`_event`): `void`

#### Parameters

| Name     | Type  |
| :------- | :---- |
| `_event` | `any` |

#### Returns

`void`

#### Implementation of

[IInteraction](../interfaces/IInteraction.md).[receive](../interfaces/IInteraction.md#receive)

#### Defined in

[src/ui/packages/interaction/interaction/src/Interaction.ts:93](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/interaction/interaction/src/Interaction.ts#L93)

___

### pointerDown

▸ **pointerDown**(`data?`, `useDefaultPath?`): `void`

#### Parameters

| Name              | Type                                              |
| :---------------- | :------------------------------------------------ |
| `data?`           | [`IPointerEvent`](../interfaces/IPointerEvent.md) |
| `useDefaultPath?` | `boolean`                                         |

#### Returns

`void`

#### Implementation of

[IInteraction](../interfaces/IInteraction.md).[pointerDown](../interfaces/IInteraction.md#pointerdown)

#### Defined in

[src/ui/packages/interaction/interaction/src/Interaction.ts:96](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/interaction/interaction/src/Interaction.ts#L96)

___

### pointerMove

▸ **pointerMove**(`data?`): `void`

#### Parameters

| Name    | Type                                              |
| :------ | :------------------------------------------------ |
| `data?` | [`IPointerEvent`](../interfaces/IPointerEvent.md) |

#### Returns

`void`

#### Implementation of

[IInteraction](../interfaces/IInteraction.md).[pointerMove](../interfaces/IInteraction.md#pointermove)

#### Defined in

[src/ui/packages/interaction/interaction/src/Interaction.ts:123](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/interaction/interaction/src/Interaction.ts#L123)

___

### pointerMoveReal

▸ **pointerMoveReal**(`data`): `void`

#### Parameters

| Name   | Type                                              |
| :----- | :------------------------------------------------ |
| `data` | [`IPointerEvent`](../interfaces/IPointerEvent.md) |

#### Returns

`void`

#### Implementation of

[IInteraction](../interfaces/IInteraction.md).[pointerMoveReal](../interfaces/IInteraction.md#pointermovereal)

#### Defined in

[src/ui/packages/interaction/interaction/src/Interaction.ts:137](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/interaction/interaction/src/Interaction.ts#L137)

___

### pointerUp

▸ **pointerUp**(`data?`): `void`

#### Parameters

| Name    | Type                                              |
| :------ | :------------------------------------------------ |
| `data?` | [`IPointerEvent`](../interfaces/IPointerEvent.md) |

#### Returns

`void`

#### Implementation of

[IInteraction](../interfaces/IInteraction.md).[pointerUp](../interfaces/IInteraction.md#pointerup)

#### Defined in

[src/ui/packages/interaction/interaction/src/Interaction.ts:167](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/interaction/interaction/src/Interaction.ts#L167)

___

### pointerCancel

▸ **pointerCancel**(): `void`

#### Returns

`void`

#### Implementation of

[IInteraction](../interfaces/IInteraction.md).[pointerCancel](../interfaces/IInteraction.md#pointercancel)

#### Defined in

[src/ui/packages/interaction/interaction/src/Interaction.ts:198](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/interaction/interaction/src/Interaction.ts#L198)

___

### menu

▸ **menu**(`data`): `void`

#### Parameters

| Name   | Type                                              |
| :----- | :------------------------------------------------ |
| `data` | [`IPointerEvent`](../interfaces/IPointerEvent.md) |

#### Returns

`void`

#### Implementation of

[IInteraction](../interfaces/IInteraction.md).[menu](../interfaces/IInteraction.md#menu)

#### Defined in

[src/ui/packages/interaction/interaction/src/Interaction.ts:206](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/interaction/interaction/src/Interaction.ts#L206)

___

### menuTap

▸ **menuTap**(`data`): `void`

#### Parameters

| Name   | Type                                              |
| :----- | :------------------------------------------------ |
| `data` | [`IPointerEvent`](../interfaces/IPointerEvent.md) |

#### Returns

`void`

#### Implementation of

[IInteraction](../interfaces/IInteraction.md).[menuTap](../interfaces/IInteraction.md#menutap)

#### Defined in

[src/ui/packages/interaction/interaction/src/Interaction.ts:213](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/interaction/interaction/src/Interaction.ts#L213)

___

### createTransformer

▸ **createTransformer**(): `void`

#### Returns

`void`

#### Defined in

[src/ui/packages/interaction/interaction/src/Interaction.ts:222](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/interaction/interaction/src/Interaction.ts#L222)

___

### move

▸ **move**(`_data`): `void`

#### Parameters

| Name    | Type                                        |
| :------ | :------------------------------------------ |
| `_data` | [`IMoveEvent`](../interfaces/IMoveEvent.md) |

#### Returns

`void`

#### Implementation of

[IInteraction](../interfaces/IInteraction.md).[move](../interfaces/IInteraction.md#move)

#### Defined in

[src/ui/packages/interaction/interaction/src/Interaction.ts:224](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/interaction/interaction/src/Interaction.ts#L224)

___

### zoom

▸ **zoom**(`_data`): `void`

#### Parameters

| Name    | Type                                        |
| :------ | :------------------------------------------ |
| `_data` | [`IZoomEvent`](../interfaces/IZoomEvent.md) |

#### Returns

`void`

#### Implementation of

[IInteraction](../interfaces/IInteraction.md).[zoom](../interfaces/IInteraction.md#zoom)

#### Defined in

[src/ui/packages/interaction/interaction/src/Interaction.ts:226](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/interaction/interaction/src/Interaction.ts#L226)

___

### rotate

▸ **rotate**(`_data`): `void`

#### Parameters

| Name    | Type                                            |
| :------ | :---------------------------------------------- |
| `_data` | [`IRotateEvent`](../interfaces/IRotateEvent.md) |

#### Returns

`void`

#### Implementation of

[IInteraction](../interfaces/IInteraction.md).[rotate](../interfaces/IInteraction.md#rotate)

#### Defined in

[src/ui/packages/interaction/interaction/src/Interaction.ts:228](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/interaction/interaction/src/Interaction.ts#L228)

___

### transformEnd

▸ **transformEnd**(): `void`

#### Returns

`void`

#### Defined in

[src/ui/packages/interaction/interaction/src/Interaction.ts:230](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/interaction/interaction/src/Interaction.ts#L230)

___

### wheel

▸ **wheel**(`_data`): `void`

#### Parameters

| Name    | Type                                          |
| :------ | :-------------------------------------------- |
| `_data` | [`IWheelEvent`](../interfaces/IWheelEvent.md) |

#### Returns

`void`

#### Defined in

[src/ui/packages/interaction/interaction/src/Interaction.ts:232](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/interaction/interaction/src/Interaction.ts#L232)

___

### multiTouch

▸ **multiTouch**(`_data`, `_list`): `void`

#### Parameters

| Name    | Type                                                                                                      |
| :------ | :-------------------------------------------------------------------------------------------------------- |
| `_data` | [`IUIEvent`](../interfaces/IUIEvent.md)                                                                   |
| `_list` | [`IKeepTouchData`](../interfaces/IKeepTouchData.md)[] |

#### Returns

`void`

#### Implementation of

[IInteraction](../interfaces/IInteraction.md).[multiTouch](../interfaces/IInteraction.md#multitouch)

#### Defined in

[src/ui/packages/interaction/interaction/src/Interaction.ts:234](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/interaction/interaction/src/Interaction.ts#L234)

___

### keyDown

▸ **keyDown**(`data`): `void`

#### Parameters

| Name   | Type                                      |
| :----- | :---------------------------------------- |
| `data` | [`IKeyEvent`](../interfaces/IKeyEvent.md) |

#### Returns

`void`

#### Implementation of

[IInteraction](../interfaces/IInteraction.md).[keyDown](../interfaces/IInteraction.md#keydown)

#### Defined in

[src/ui/packages/interaction/interaction/src/Interaction.ts:240](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/interaction/interaction/src/Interaction.ts#L240)

___

### keyUp

▸ **keyUp**(`data`): `void`

#### Parameters

| Name   | Type                                      |
| :----- | :---------------------------------------- |
| `data` | [`IKeyEvent`](../interfaces/IKeyEvent.md) |

#### Returns

`void`

#### Implementation of

[IInteraction](../interfaces/IInteraction.md).[keyUp](../interfaces/IInteraction.md#keyup)

#### Defined in

[src/ui/packages/interaction/interaction/src/Interaction.ts:259](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/interaction/interaction/src/Interaction.ts#L259)

___

### pointerHover

▸ **pointerHover**(`data`): `void`

#### Parameters

| Name   | Type                                              |
| :----- | :------------------------------------------------ |
| `data` | [`IPointerEvent`](../interfaces/IPointerEvent.md) |

#### Returns

`void`

#### Defined in

[src/ui/packages/interaction/interaction/src/Interaction.ts:274](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/interaction/interaction/src/Interaction.ts#L274)

___

### pointerOverOrOut

▸ **pointerOverOrOut**(`data`): `void`

#### Parameters

| Name   | Type                                              |
| :----- | :------------------------------------------------ |
| `data` | [`IPointerEvent`](../interfaces/IPointerEvent.md) |

#### Returns

`void`

#### Defined in

[src/ui/packages/interaction/interaction/src/Interaction.ts:282](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/interaction/interaction/src/Interaction.ts#L282)

___

### pointerEnterOrLeave

▸ **pointerEnterOrLeave**(`data`): `void`

#### Parameters

| Name   | Type                                              |
| :----- | :------------------------------------------------ |
| `data` | [`IPointerEvent`](../interfaces/IPointerEvent.md) |

#### Returns

`void`

#### Defined in

[src/ui/packages/interaction/interaction/src/Interaction.ts:297](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/interaction/interaction/src/Interaction.ts#L297)

___

### touchLeave

▸ **touchLeave**(`data`): `void`

#### Parameters

| Name   | Type                                              |
| :----- | :------------------------------------------------ |
| `data` | [`IPointerEvent`](../interfaces/IPointerEvent.md) |

#### Returns

`void`

#### Defined in

[src/ui/packages/interaction/interaction/src/Interaction.ts:312](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/interaction/interaction/src/Interaction.ts#L312)

___

### tap

▸ **tap**(`data`): `void`

#### Parameters

| Name   | Type                                              |
| :----- | :------------------------------------------------ |
| `data` | [`IPointerEvent`](../interfaces/IPointerEvent.md) |

#### Returns

`void`

#### Defined in

[src/ui/packages/interaction/interaction/src/Interaction.ts:321](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/interaction/interaction/src/Interaction.ts#L321)

___

### findPath

▸ **findPath**(`data`, `options?`): [`ILeafList`](../interfaces/ILeafList.md)

#### Parameters

| Name       | Type                                              |
| :--------- | :------------------------------------------------ |
| `data`     | [`IPointerEvent`](../interfaces/IPointerEvent.md) |
| `options?` | [`IPickOptions`](../interfaces/IPickOptions.md)   |

#### Returns

[`ILeafList`](../interfaces/ILeafList.md)

#### Implementation of

[IInteraction](../interfaces/IInteraction.md).[findPath](../interfaces/IInteraction.md#findpath)

#### Defined in

[src/ui/packages/interaction/interaction/src/Interaction.ts:361](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/interaction/interaction/src/Interaction.ts#L361)

___

### isRootPath

▸ **isRootPath**(`data`): `boolean`

#### Parameters

| Name   | Type                                              |
| :----- | :------------------------------------------------ |
| `data` | [`IPointerEvent`](../interfaces/IPointerEvent.md) |

#### Returns

`boolean`

#### Implementation of

[IInteraction](../interfaces/IInteraction.md).[isRootPath](../interfaces/IInteraction.md#isrootpath)

#### Defined in

[src/ui/packages/interaction/interaction/src/Interaction.ts:371](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/interaction/interaction/src/Interaction.ts#L371)

___

### isTreePath

▸ **isTreePath**(`data`): `boolean`

#### Parameters

| Name   | Type                                              |
| :----- | :------------------------------------------------ |
| `data` | [`IPointerEvent`](../interfaces/IPointerEvent.md) |

#### Returns

`boolean`

#### Implementation of

[IInteraction](../interfaces/IInteraction.md).[isTreePath](../interfaces/IInteraction.md#istreepath)

#### Defined in

[src/ui/packages/interaction/interaction/src/Interaction.ts:375](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/interaction/interaction/src/Interaction.ts#L375)

___

### checkPath

▸ **checkPath**(`data`, `useDefaultPath?`): `void`

#### Parameters

| Name              | Type                                              |
| :---------------- | :------------------------------------------------ |
| `data`            | [`IPointerEvent`](../interfaces/IPointerEvent.md) |
| `useDefaultPath?` | `boolean`                                         |

#### Returns

`void`

#### Defined in

[src/ui/packages/interaction/interaction/src/Interaction.ts:381](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/interaction/interaction/src/Interaction.ts#L381)

___

### canMove

▸ **canMove**(`data`): `boolean`

#### Parameters

| Name   | Type                                              |
| :----- | :------------------------------------------------ |
| `data` | [`IPointerEvent`](../interfaces/IPointerEvent.md) |

#### Returns

`boolean`

#### Implementation of

[IInteraction](../interfaces/IInteraction.md).[canMove](../interfaces/IInteraction.md#canmove)

#### Defined in

[src/ui/packages/interaction/interaction/src/Interaction.ts:385](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/interaction/interaction/src/Interaction.ts#L385)

___

### isDrag

▸ **isDrag**(`leaf`): `boolean`

#### Parameters

| Name   | Type                              |
| :----- | :-------------------------------- |
| `leaf` | [`ILeaf`](../interfaces/ILeaf.md) |

#### Returns

`boolean`

#### Implementation of

[IInteraction](../interfaces/IInteraction.md).[isDrag](../interfaces/IInteraction.md#isdrag)

#### Defined in

[src/ui/packages/interaction/interaction/src/Interaction.ts:390](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/interaction/interaction/src/Interaction.ts#L390)

___

### isPress

▸ **isPress**(`leaf`): `boolean`

#### Parameters

| Name   | Type                              |
| :----- | :-------------------------------- |
| `leaf` | [`ILeaf`](../interfaces/ILeaf.md) |

#### Returns

`boolean`

#### Implementation of

[IInteraction](../interfaces/IInteraction.md).[isPress](../interfaces/IInteraction.md#ispress)

#### Defined in

[src/ui/packages/interaction/interaction/src/Interaction.ts:394](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/interaction/interaction/src/Interaction.ts#L394)

___

### isHover

▸ **isHover**(`leaf`): `boolean`

#### Parameters

| Name   | Type                              |
| :----- | :-------------------------------- |
| `leaf` | [`ILeaf`](../interfaces/ILeaf.md) |

#### Returns

`boolean`

#### Implementation of

[IInteraction](../interfaces/IInteraction.md).[isHover](../interfaces/IInteraction.md#ishover)

#### Defined in

[src/ui/packages/interaction/interaction/src/Interaction.ts:398](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/interaction/interaction/src/Interaction.ts#L398)

___

### isFocus

▸ **isFocus**(`leaf`): `boolean`

#### Parameters

| Name   | Type                              |
| :----- | :-------------------------------- |
| `leaf` | [`ILeaf`](../interfaces/ILeaf.md) |

#### Returns

`boolean`

#### Implementation of

[IInteraction](../interfaces/IInteraction.md).[isFocus](../interfaces/IInteraction.md#isfocus)

#### Defined in

[src/ui/packages/interaction/interaction/src/Interaction.ts:402](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/interaction/interaction/src/Interaction.ts#L402)

___

### cancelHover

▸ **cancelHover**(): `void`

#### Returns

`void`

#### Implementation of

[IInteraction](../interfaces/IInteraction.md).[cancelHover](../interfaces/IInteraction.md#cancelhover)

#### Defined in

[src/ui/packages/interaction/interaction/src/Interaction.ts:407](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/interaction/interaction/src/Interaction.ts#L407)

___

### stopDragAnimate

▸ **stopDragAnimate**(): `void`

#### Returns

`void`

#### Implementation of

[IInteraction](../interfaces/IInteraction.md).[stopDragAnimate](../interfaces/IInteraction.md#stopdraganimate)

#### Defined in

[src/ui/packages/interaction/interaction/src/Interaction.ts:415](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/interaction/interaction/src/Interaction.ts#L415)

___

### replaceDownTarget

▸ **replaceDownTarget**(`target`): `void`

#### Parameters

| Name     | Type                              |
| :------- | :-------------------------------- |
| `target` | [`ILeaf`](../interfaces/ILeaf.md) |

#### Returns

`void`

#### Implementation of

[IInteraction](../interfaces/IInteraction.md).[replaceDownTarget](../interfaces/IInteraction.md#replacedowntarget)

#### Defined in

[src/ui/packages/interaction/interaction/src/Interaction.ts:420](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/interaction/interaction/src/Interaction.ts#L420)

___

### updateDownData

▸ **updateDownData**(`data?`, `options?`, `merge?`): `void`

#### Parameters

| Name       | Type                                              |
| :--------- | :------------------------------------------------ |
| `data?`    | [`IPointerEvent`](../interfaces/IPointerEvent.md) |
| `options?` | [`IPickOptions`](../interfaces/IPickOptions.md)   |
| `merge?`   | `boolean`                                         |

#### Returns

`void`

#### Implementation of

[IInteraction](../interfaces/IInteraction.md).[updateDownData](../interfaces/IInteraction.md#updatedowndata)

#### Defined in

[src/ui/packages/interaction/interaction/src/Interaction.ts:429](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/interaction/interaction/src/Interaction.ts#L429)

___

### updateHoverData

▸ **updateHoverData**(`data?`): `void`

#### Parameters

| Name    | Type                                              |
| :------ | :------------------------------------------------ |
| `data?` | [`IPointerEvent`](../interfaces/IPointerEvent.md) |

#### Returns

`void`

#### Implementation of

[IInteraction](../interfaces/IInteraction.md).[updateHoverData](../interfaces/IInteraction.md#updatehoverdata)

#### Defined in

[src/ui/packages/interaction/interaction/src/Interaction.ts:438](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/interaction/interaction/src/Interaction.ts#L438)

___

### updateCursor

▸ **updateCursor**(`data?`): `void`

#### Parameters

| Name    | Type                                              |
| :------ | :------------------------------------------------ |
| `data?` | [`IPointerEvent`](../interfaces/IPointerEvent.md) |

#### Returns

`void`

#### Implementation of

[IInteraction](../interfaces/IInteraction.md).[updateCursor](../interfaces/IInteraction.md#updatecursor)

#### Defined in

[src/ui/packages/interaction/interaction/src/Interaction.ts:445](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/interaction/interaction/src/Interaction.ts#L445)

___

### setCursor

▸ **setCursor**(`cursor`): `void`

#### Parameters

| Name     | Type                                                                                                                                             |
| :------- | :----------------------------------------------------------------------------------------------------------------------------------------------- |
| `cursor` | [`ICursorType`](../modules.md#icursortype) \\| [`ICursorType`](../modules.md#icursortype)[] |

#### Returns

`void`

#### Implementation of

[IInteraction](../interfaces/IInteraction.md).[setCursor](../interfaces/IInteraction.md#setcursor)

#### Defined in

[src/ui/packages/interaction/interaction/src/Interaction.ts:471](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/interaction/interaction/src/Interaction.ts#L471)

___

### getLocal

▸ **getLocal**(`clientPoint`, `updateClient?`): [`IPointData`](../interfaces/IPointData.md)

#### Parameters

| Name            | Type                                                    |
| :-------------- | :------------------------------------------------------ |
| `clientPoint`   | [`IClientPointData`](../interfaces/IClientPointData.md) |
| `updateClient?` | `boolean`                                               |

#### Returns

[`IPointData`](../interfaces/IPointData.md)

#### Implementation of

[IInteraction](../interfaces/IInteraction.md).[getLocal](../interfaces/IInteraction.md#getlocal)

#### Defined in

[src/ui/packages/interaction/interaction/src/Interaction.ts:475](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/interaction/interaction/src/Interaction.ts#L475)

___

### emitTap

▸ **emitTap**(`data`): `void`

#### Parameters

| Name   | Type                                              |
| :----- | :------------------------------------------------ |
| `data` | [`IPointerEvent`](../interfaces/IPointerEvent.md) |

#### Returns

`void`

#### Defined in

[src/ui/packages/interaction/interaction/src/Interaction.ts:489](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/interaction/interaction/src/Interaction.ts#L489)

___

### emitDoubleTap

▸ **emitDoubleTap**(`data`): `void`

#### Parameters

| Name   | Type                                              |
| :----- | :------------------------------------------------ |
| `data` | [`IPointerEvent`](../interfaces/IPointerEvent.md) |

#### Returns

`void`

#### Defined in

[src/ui/packages/interaction/interaction/src/Interaction.ts:494](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/interaction/interaction/src/Interaction.ts#L494)

___

### pointerWaitCancel

▸ **pointerWaitCancel**(): `void`

#### Returns

`void`

#### Defined in

[src/ui/packages/interaction/interaction/src/Interaction.ts:499](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/interaction/interaction/src/Interaction.ts#L499)

___

### tapWait

▸ **tapWait**(): `void`

#### Returns

`void`

#### Defined in

[src/ui/packages/interaction/interaction/src/Interaction.ts:504](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/interaction/interaction/src/Interaction.ts#L504)

___

### tapWaitCancel

▸ **tapWaitCancel**(): `void`

#### Returns

`void`

#### Defined in

[src/ui/packages/interaction/interaction/src/Interaction.ts:509](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/interaction/interaction/src/Interaction.ts#L509)

___

### longPressWait

▸ **longPressWait**(`data`): `void`

#### Parameters

| Name   | Type                                              |
| :----- | :------------------------------------------------ |
| `data` | [`IPointerEvent`](../interfaces/IPointerEvent.md) |

#### Returns

`void`

#### Defined in

[src/ui/packages/interaction/interaction/src/Interaction.ts:517](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/interaction/interaction/src/Interaction.ts#L517)

___

### longTap

▸ **longTap**(`data`): `boolean`

#### Parameters

| Name   | Type                                              |
| :----- | :------------------------------------------------ |
| `data` | [`IPointerEvent`](../interfaces/IPointerEvent.md) |

#### Returns

`boolean`

#### Defined in

[src/ui/packages/interaction/interaction/src/Interaction.ts:525](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/interaction/interaction/src/Interaction.ts#L525)

___

### longPressWaitCancel

▸ **longPressWaitCancel**(): `void`

#### Returns

`void`

#### Defined in

[src/ui/packages/interaction/interaction/src/Interaction.ts:535](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/interaction/interaction/src/Interaction.ts#L535)

___

### \_\_onResize

▸ **__onResize**(): `void`

#### Returns

`void`

#### Defined in

[src/ui/packages/interaction/interaction/src/Interaction.ts:542](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/interaction/interaction/src/Interaction.ts#L542)

___

### \_\_listenEvents

▸ **__listenEvents**(): `void`

#### Returns

`void`

#### Defined in

[src/ui/packages/interaction/interaction/src/Interaction.ts:548](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/interaction/interaction/src/Interaction.ts#L548)

___

### \_\_removeListenEvents

▸ **__removeListenEvents**(): `void`

#### Returns

`void`

#### Defined in

[src/ui/packages/interaction/interaction/src/Interaction.ts:554](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/interaction/interaction/src/Interaction.ts#L554)

___

### emit

▸ **emit**(`type`, `data`, `path?`, `excludePath?`): `void`

#### Parameters

| Name           | Type                                      |
| :------------- | :---------------------------------------- |
| `type`         | `string`                                  |
| `data`         | [`IUIEvent`](../interfaces/IUIEvent.md)   |
| `path?`        | [`ILeafList`](../interfaces/ILeafList.md) |
| `excludePath?` | [`ILeafList`](../interfaces/ILeafList.md) |

#### Returns

`void`

#### Implementation of

[IInteraction](../interfaces/IInteraction.md).[emit](../interfaces/IInteraction.md#emit)

#### Defined in

[src/ui/packages/interaction/interaction/src/Interaction.ts:560](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/interaction/interaction/src/Interaction.ts#L560)

___

### destroy

▸ **destroy**(): `void`

#### Returns

`void`

#### Implementation of

[IInteraction](../interfaces/IInteraction.md).[destroy](../interfaces/IInteraction.md#destroy)

#### Defined in

[src/ui/packages/interaction/interaction/src/Interaction.ts:565](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/interaction/interaction/src/Interaction.ts#L565)
