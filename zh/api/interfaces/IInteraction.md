# Interface: IInteraction

## Hierarchy

- [`IControl`](IControl.md)

  ↳ **`IInteraction`**

## Implemented by

- [`InteractionBase`](../classes/InteractionBase.md)

## Table of contents

### Properties

- [target](IInteraction.md#target)
- [canvas](IInteraction.md#canvas)
- [selector](IInteraction.md#selector)
- [running](IInteraction.md#running)
- [dragging](IInteraction.md#dragging)
- [transforming](IInteraction.md#transforming)
- [moveMode](IInteraction.md#movemode)
- [canHover](IInteraction.md#canhover)
- [isDragEmpty](IInteraction.md#isdragempty)
- [isMobileDragEmpty](IInteraction.md#ismobiledragempty)
- [isHoldMiddleKey](IInteraction.md#isholdmiddlekey)
- [isHoldRightKey](IInteraction.md#isholdrightkey)
- [isHoldSpaceKey](IInteraction.md#isholdspacekey)
- [config](IInteraction.md#config)
- [m](IInteraction.md#m)
- [p](IInteraction.md#p)
- [cursor](IInteraction.md#cursor)
- [hitRadius](IInteraction.md#hitradius)
- [bottomList](IInteraction.md#bottomlist)
- [shrinkCanvasBounds](IInteraction.md#shrinkcanvasbounds)
- [downData](IInteraction.md#downdata)
- [hoverData](IInteraction.md#hoverdata)
- [downTime](IInteraction.md#downtime)
- [focusData](IInteraction.md#focusdata)

### Methods

- [start](IInteraction.md#start)
- [stop](IInteraction.md#stop)
- [destroy](IInteraction.md#destroy)
- [receive](IInteraction.md#receive)
- [pointerDown](IInteraction.md#pointerdown)
- [pointerMove](IInteraction.md#pointermove)
- [pointerMoveReal](IInteraction.md#pointermovereal)
- [pointerUp](IInteraction.md#pointerup)
- [pointerCancel](IInteraction.md#pointercancel)
- [multiTouch](IInteraction.md#multitouch)
- [menu](IInteraction.md#menu)
- [menuTap](IInteraction.md#menutap)
- [move](IInteraction.md#move)
- [zoom](IInteraction.md#zoom)
- [rotate](IInteraction.md#rotate)
- [keyDown](IInteraction.md#keydown)
- [keyUp](IInteraction.md#keyup)
- [findPath](IInteraction.md#findpath)
- [isRootPath](IInteraction.md#isrootpath)
- [isTreePath](IInteraction.md#istreepath)
- [canMove](IInteraction.md#canmove)
- [isDrag](IInteraction.md#isdrag)
- [isPress](IInteraction.md#ispress)
- [isHover](IInteraction.md#ishover)
- [isFocus](IInteraction.md#isfocus)
- [cancelHover](IInteraction.md#cancelhover)
- [stopDragAnimate](IInteraction.md#stopdraganimate)
- [replaceDownTarget](IInteraction.md#replacedowntarget)
- [updateDownData](IInteraction.md#updatedowndata)
- [updateHoverData](IInteraction.md#updatehoverdata)
- [updateCursor](IInteraction.md#updatecursor)
- [setCursor](IInteraction.md#setcursor)
- [getLocal](IInteraction.md#getlocal)
- [emit](IInteraction.md#emit)

## Properties

### target

• **target**: [`ILeaf`](ILeaf.md)

#### Defined in

[src/leafer/packages/interface/src/interaction/IInteraction.ts:15](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/interaction/IInteraction.ts#L15)

___

### canvas

• **canvas**: [`IInteractionCanvas`](IInteractionCanvas.md)

#### Defined in

[src/leafer/packages/interface/src/interaction/IInteraction.ts:16](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/interaction/IInteraction.ts#L16)

___

### selector

• **selector**: [`ISelector`](ISelector.md)

#### Defined in

[src/leafer/packages/interface/src/interaction/IInteraction.ts:17](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/interaction/IInteraction.ts#L17)

___

### running

• **running**: `boolean`

#### Defined in

[src/leafer/packages/interface/src/interaction/IInteraction.ts:19](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/interaction/IInteraction.ts#L19)

___

### dragging

• `Readonly` **dragging**: `boolean`

#### Defined in

[src/leafer/packages/interface/src/interaction/IInteraction.ts:21](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/interaction/IInteraction.ts#L21)

___

### transforming

• `Readonly` **transforming**: `boolean`

#### Defined in

[src/leafer/packages/interface/src/interaction/IInteraction.ts:22](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/interaction/IInteraction.ts#L22)

___

### moveMode

• `Readonly` **moveMode**: `boolean`

#### Defined in

[src/leafer/packages/interface/src/interaction/IInteraction.ts:24](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/interaction/IInteraction.ts#L24)

___

### canHover

• `Readonly` **canHover**: `boolean`

#### Defined in

[src/leafer/packages/interface/src/interaction/IInteraction.ts:25](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/interaction/IInteraction.ts#L25)

___

### isDragEmpty

• `Readonly` **isDragEmpty**: `boolean`

#### Defined in

[src/leafer/packages/interface/src/interaction/IInteraction.ts:27](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/interaction/IInteraction.ts#L27)

___

### isMobileDragEmpty

• `Readonly` **isMobileDragEmpty**: `boolean`

#### Defined in

[src/leafer/packages/interface/src/interaction/IInteraction.ts:28](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/interaction/IInteraction.ts#L28)

___

### isHoldMiddleKey

• `Readonly` **isHoldMiddleKey**: `boolean`

#### Defined in

[src/leafer/packages/interface/src/interaction/IInteraction.ts:29](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/interaction/IInteraction.ts#L29)

___

### isHoldRightKey

• `Readonly` **isHoldRightKey**: `boolean`

#### Defined in

[src/leafer/packages/interface/src/interaction/IInteraction.ts:30](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/interaction/IInteraction.ts#L30)

___

### isHoldSpaceKey

• `Readonly` **isHoldSpaceKey**: `boolean`

#### Defined in

[src/leafer/packages/interface/src/interaction/IInteraction.ts:31](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/interaction/IInteraction.ts#L31)

___

### config

• **config**: [`IInteractionConfig`](IInteractionConfig.md)

#### Defined in

[src/leafer/packages/interface/src/interaction/IInteraction.ts:33](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/interaction/IInteraction.ts#L33)

___

### m

• `Readonly` **m**: [`IMoveConfig`](IMoveConfig.md)

#### Defined in

[src/leafer/packages/interface/src/interaction/IInteraction.ts:34](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/interaction/IInteraction.ts#L34)

___

### p

• `Readonly` **p**: [`IPointerConfig`](IPointerConfig.md)

#### Defined in

[src/leafer/packages/interface/src/interaction/IInteraction.ts:35](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/interaction/IInteraction.ts#L35)

___

### cursor

• **cursor**: [`ICursorType`](../modules.md#icursortype) \| [`ICursorType`](../modules.md#icursortype)[]

#### Defined in

[src/leafer/packages/interface/src/interaction/IInteraction.ts:37](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/interaction/IInteraction.ts#L37)

___

### hitRadius

• `Readonly` **hitRadius**: `number`

#### Defined in

[src/leafer/packages/interface/src/interaction/IInteraction.ts:38](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/interaction/IInteraction.ts#L38)

___

### bottomList

• `Optional` **bottomList**: [`IPickBottom`](IPickBottom.md)[]

#### Defined in

[src/leafer/packages/interface/src/interaction/IInteraction.ts:40](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/interaction/IInteraction.ts#L40)

___

### shrinkCanvasBounds

• **shrinkCanvasBounds**: [`IBounds`](IBounds.md)

#### Defined in

[src/leafer/packages/interface/src/interaction/IInteraction.ts:42](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/interaction/IInteraction.ts#L42)

___

### downData

• **downData**: [`IPointerEvent`](IPointerEvent.md)

#### Defined in

[src/leafer/packages/interface/src/interaction/IInteraction.ts:44](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/interaction/IInteraction.ts#L44)

___

### hoverData

• **hoverData**: [`IPointerEvent`](IPointerEvent.md)

#### Defined in

[src/leafer/packages/interface/src/interaction/IInteraction.ts:45](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/interaction/IInteraction.ts#L45)

___

### downTime

• **downTime**: `number`

#### Defined in

[src/leafer/packages/interface/src/interaction/IInteraction.ts:46](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/interaction/IInteraction.ts#L46)

___

### focusData

• **focusData**: [`ILeaf`](ILeaf.md)

#### Defined in

[src/leafer/packages/interface/src/interaction/IInteraction.ts:47](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/interaction/IInteraction.ts#L47)

## Methods

### start

▸ **start**(): `void`

#### Returns

`void`

#### Inherited from

[IControl](IControl.md).[start](IControl.md#start)

#### Defined in

[src/leafer/packages/interface/src/control/IControl.ts:2](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/control/IControl.ts#L2)

___

### stop

▸ **stop**(): `void`

#### Returns

`void`

#### Inherited from

[IControl](IControl.md).[stop](IControl.md#stop)

#### Defined in

[src/leafer/packages/interface/src/control/IControl.ts:3](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/control/IControl.ts#L3)

___

### destroy

▸ **destroy**(): `void`

#### Returns

`void`

#### Inherited from

[IControl](IControl.md).[destroy](IControl.md#destroy)

#### Defined in

[src/leafer/packages/interface/src/control/IControl.ts:4](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/control/IControl.ts#L4)

___

### receive

▸ **receive**(`event`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `any` |

#### Returns

`void`

#### Defined in

[src/leafer/packages/interface/src/interaction/IInteraction.ts:49](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/interaction/IInteraction.ts#L49)

___

### pointerDown

▸ **pointerDown**(`data?`, `defaultPath?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IPointerEvent`](IPointerEvent.md) |
| `defaultPath?` | `boolean` |

#### Returns

`void`

#### Defined in

[src/leafer/packages/interface/src/interaction/IInteraction.ts:51](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/interaction/IInteraction.ts#L51)

___

### pointerMove

▸ **pointerMove**(`data?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IPointerEvent`](IPointerEvent.md) |

#### Returns

`void`

#### Defined in

[src/leafer/packages/interface/src/interaction/IInteraction.ts:52](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/interaction/IInteraction.ts#L52)

___

### pointerMoveReal

▸ **pointerMoveReal**(`data`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | [`IPointerEvent`](IPointerEvent.md) |

#### Returns

`void`

#### Defined in

[src/leafer/packages/interface/src/interaction/IInteraction.ts:53](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/interaction/IInteraction.ts#L53)

___

### pointerUp

▸ **pointerUp**(`data?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IPointerEvent`](IPointerEvent.md) |

#### Returns

`void`

#### Defined in

[src/leafer/packages/interface/src/interaction/IInteraction.ts:54](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/interaction/IInteraction.ts#L54)

___

### pointerCancel

▸ **pointerCancel**(): `void`

#### Returns

`void`

#### Defined in

[src/leafer/packages/interface/src/interaction/IInteraction.ts:55](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/interaction/IInteraction.ts#L55)

___

### multiTouch

▸ **multiTouch**(`data`, `list`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | [`IUIEvent`](IUIEvent.md) |
| `list` | [`IKeepTouchData`](IKeepTouchData.md)[] |

#### Returns

`void`

#### Defined in

[src/leafer/packages/interface/src/interaction/IInteraction.ts:57](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/interaction/IInteraction.ts#L57)

___

### menu

▸ **menu**(`data`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | [`IPointerEvent`](IPointerEvent.md) |

#### Returns

`void`

#### Defined in

[src/leafer/packages/interface/src/interaction/IInteraction.ts:59](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/interaction/IInteraction.ts#L59)

___

### menuTap

▸ **menuTap**(`data`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | [`IPointerEvent`](IPointerEvent.md) |

#### Returns

`void`

#### Defined in

[src/leafer/packages/interface/src/interaction/IInteraction.ts:60](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/interaction/IInteraction.ts#L60)

___

### move

▸ **move**(`data`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | [`IMoveEvent`](IMoveEvent.md) |

#### Returns

`void`

#### Defined in

[src/leafer/packages/interface/src/interaction/IInteraction.ts:62](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/interaction/IInteraction.ts#L62)

___

### zoom

▸ **zoom**(`data`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | [`IZoomEvent`](IZoomEvent.md) |

#### Returns

`void`

#### Defined in

[src/leafer/packages/interface/src/interaction/IInteraction.ts:63](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/interaction/IInteraction.ts#L63)

___

### rotate

▸ **rotate**(`data`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | [`IRotateEvent`](IRotateEvent.md) |

#### Returns

`void`

#### Defined in

[src/leafer/packages/interface/src/interaction/IInteraction.ts:64](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/interaction/IInteraction.ts#L64)

___

### keyDown

▸ **keyDown**(`data`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | [`IKeyEvent`](IKeyEvent.md) |

#### Returns

`void`

#### Defined in

[src/leafer/packages/interface/src/interaction/IInteraction.ts:66](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/interaction/IInteraction.ts#L66)

___

### keyUp

▸ **keyUp**(`data`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | [`IKeyEvent`](IKeyEvent.md) |

#### Returns

`void`

#### Defined in

[src/leafer/packages/interface/src/interaction/IInteraction.ts:67](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/interaction/IInteraction.ts#L67)

___

### findPath

▸ **findPath**(`data`, `options?`): [`ILeafList`](ILeafList.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | [`IPointerEvent`](IPointerEvent.md) |
| `options?` | [`IPickOptions`](IPickOptions.md) |

#### Returns

[`ILeafList`](ILeafList.md)

#### Defined in

[src/leafer/packages/interface/src/interaction/IInteraction.ts:69](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/interaction/IInteraction.ts#L69)

___

### isRootPath

▸ **isRootPath**(`data`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | [`IPointerEvent`](IPointerEvent.md) |

#### Returns

`boolean`

#### Defined in

[src/leafer/packages/interface/src/interaction/IInteraction.ts:70](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/interaction/IInteraction.ts#L70)

___

### isTreePath

▸ **isTreePath**(`data`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | [`IPointerEvent`](IPointerEvent.md) |

#### Returns

`boolean`

#### Defined in

[src/leafer/packages/interface/src/interaction/IInteraction.ts:71](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/interaction/IInteraction.ts#L71)

___

### canMove

▸ **canMove**(`data`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | [`IPointerEvent`](IPointerEvent.md) |

#### Returns

`boolean`

#### Defined in

[src/leafer/packages/interface/src/interaction/IInteraction.ts:72](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/interaction/IInteraction.ts#L72)

___

### isDrag

▸ **isDrag**(`leaf`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `leaf` | [`ILeaf`](ILeaf.md) |

#### Returns

`boolean`

#### Defined in

[src/leafer/packages/interface/src/interaction/IInteraction.ts:74](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/interaction/IInteraction.ts#L74)

___

### isPress

▸ **isPress**(`leaf`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `leaf` | [`ILeaf`](ILeaf.md) |

#### Returns

`boolean`

#### Defined in

[src/leafer/packages/interface/src/interaction/IInteraction.ts:75](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/interaction/IInteraction.ts#L75)

___

### isHover

▸ **isHover**(`leaf`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `leaf` | [`ILeaf`](ILeaf.md) |

#### Returns

`boolean`

#### Defined in

[src/leafer/packages/interface/src/interaction/IInteraction.ts:76](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/interaction/IInteraction.ts#L76)

___

### isFocus

▸ **isFocus**(`leaf`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `leaf` | [`ILeaf`](ILeaf.md) |

#### Returns

`boolean`

#### Defined in

[src/leafer/packages/interface/src/interaction/IInteraction.ts:77](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/interaction/IInteraction.ts#L77)

___

### cancelHover

▸ **cancelHover**(): `void`

#### Returns

`void`

#### Defined in

[src/leafer/packages/interface/src/interaction/IInteraction.ts:79](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/interaction/IInteraction.ts#L79)

___

### stopDragAnimate

▸ **stopDragAnimate**(): `void`

#### Returns

`void`

#### Defined in

[src/leafer/packages/interface/src/interaction/IInteraction.ts:80](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/interaction/IInteraction.ts#L80)

___

### replaceDownTarget

▸ **replaceDownTarget**(`target`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `target` | [`ILeaf`](ILeaf.md) |

#### Returns

`void`

#### Defined in

[src/leafer/packages/interface/src/interaction/IInteraction.ts:82](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/interaction/IInteraction.ts#L82)

___

### updateDownData

▸ **updateDownData**(`data?`, `options?`, `merge?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IPointerEvent`](IPointerEvent.md) |
| `options?` | [`IPickOptions`](IPickOptions.md) |
| `merge?` | `boolean` |

#### Returns

`void`

#### Defined in

[src/leafer/packages/interface/src/interaction/IInteraction.ts:83](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/interaction/IInteraction.ts#L83)

___

### updateHoverData

▸ **updateHoverData**(`data`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | [`IPointerEvent`](IPointerEvent.md) |

#### Returns

`void`

#### Defined in

[src/leafer/packages/interface/src/interaction/IInteraction.ts:84](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/interaction/IInteraction.ts#L84)

___

### updateCursor

▸ **updateCursor**(`hoverData?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `hoverData?` | [`IPointerEvent`](IPointerEvent.md) |

#### Returns

`void`

#### Defined in

[src/leafer/packages/interface/src/interaction/IInteraction.ts:86](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/interaction/IInteraction.ts#L86)

___

### setCursor

▸ **setCursor**(`cursor`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `cursor` | [`ICursorType`](../modules.md#icursortype) \| [`ICursorType`](../modules.md#icursortype)[] |

#### Returns

`void`

#### Defined in

[src/leafer/packages/interface/src/interaction/IInteraction.ts:87](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/interaction/IInteraction.ts#L87)

___

### getLocal

▸ **getLocal**(`clientPoint`, `updateClient?`): [`IPointData`](IPointData.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `clientPoint` | [`IClientPointData`](IClientPointData.md) |
| `updateClient?` | `boolean` |

#### Returns

[`IPointData`](IPointData.md)

#### Defined in

[src/leafer/packages/interface/src/interaction/IInteraction.ts:89](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/interaction/IInteraction.ts#L89)

___

### emit

▸ **emit**(`type`, `data`, `path?`, `excludePath?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | `string` |
| `data` | [`IUIEvent`](IUIEvent.md) |
| `path?` | [`ILeafList`](ILeafList.md) |
| `excludePath?` | [`ILeafList`](ILeafList.md) |

#### Returns

`void`

#### Defined in

[src/leafer/packages/interface/src/interaction/IInteraction.ts:91](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/interaction/IInteraction.ts#L91)
