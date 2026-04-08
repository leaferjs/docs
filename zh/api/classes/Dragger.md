# Class: Dragger

## Table of contents

### Constructors

- [constructor](Dragger.md#constructor)

### Properties

- [interaction](Dragger.md#interaction)
- [moving](Dragger.md#moving)
- [dragging](Dragger.md#dragging)
- [dragData](Dragger.md#dragdata)
- [downData](Dragger.md#downdata)
- [dragDataList](Dragger.md#dragdatalist)
- [draggableList](Dragger.md#draggablelist)
- [realDraggableList](Dragger.md#realdraggablelist)
- [dragOverPath](Dragger.md#dragoverpath)
- [dragEnterPath](Dragger.md#dragenterpath)
- [dragStartPoints](Dragger.md#dragstartpoints)
- [autoMoveTimer](Dragger.md#automovetimer)
- [canAnimate](Dragger.md#cananimate)
- [canDragOut](Dragger.md#candragout)
- [animateWait](Dragger.md#animatewait)

### Methods

- [setDragData](Dragger.md#setdragdata)
- [getList](Dragger.md#getlist)
- [checkDrag](Dragger.md#checkdrag)
- [dragStart](Dragger.md#dragstart)
- [setDragStartPoints](Dragger.md#setdragstartpoints)
- [getDraggableList](Dragger.md#getdraggablelist)
- [drag](Dragger.md#drag)
- [dragReal](Dragger.md#dragreal)
- [dragOverOrOut](Dragger.md#dragoverorout)
- [dragEnterOrLeave](Dragger.md#dragenterorleave)
- [dragEnd](Dragger.md#dragend)
- [dragEndReal](Dragger.md#dragendreal)
- [swipe](Dragger.md#swipe)
- [drop](Dragger.md#drop)
- [dragReset](Dragger.md#dragreset)
- [checkDragEndAnimate](Dragger.md#checkdragendanimate)
- [animate](Dragger.md#animate)
- [stopAnimate](Dragger.md#stopanimate)
- [checkDragOut](Dragger.md#checkdragout)
- [autoMoveOnDragOut](Dragger.md#automoveondragout)
- [autoMoveCancel](Dragger.md#automovecancel)
- [destroy](Dragger.md#destroy)

## Constructors

### constructor

• **new Dragger**(`interaction`): [`Dragger`](Dragger.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `interaction` | [`InteractionBase`](InteractionBase.md) |

#### Returns

[`Dragger`](Dragger.md)

#### Defined in

[src/ui/packages/interaction/interaction/src/Dragger.ts:37](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/interaction/interaction/src/Dragger.ts#L37)

## Properties

### interaction

• **interaction**: [`InteractionBase`](InteractionBase.md)

#### Defined in

[src/ui/packages/interaction/interaction/src/Dragger.ts:15](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/interaction/interaction/src/Dragger.ts#L15)

___

### moving

• **moving**: `boolean`

#### Defined in

[src/ui/packages/interaction/interaction/src/Dragger.ts:17](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/interaction/interaction/src/Dragger.ts#L17)

___

### dragging

• **dragging**: `boolean`

#### Defined in

[src/ui/packages/interaction/interaction/src/Dragger.ts:18](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/interaction/interaction/src/Dragger.ts#L18)

___

### dragData

• **dragData**: [`IDragEvent`](../interfaces/IDragEvent.md)

#### Defined in

[src/ui/packages/interaction/interaction/src/Dragger.ts:20](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/interaction/interaction/src/Dragger.ts#L20)

___

### downData

• **downData**: [`IPointerEvent`](../interfaces/IPointerEvent.md)

#### Defined in

[src/ui/packages/interaction/interaction/src/Dragger.ts:21](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/interaction/interaction/src/Dragger.ts#L21)

___

### dragDataList

• **dragDataList**: [`IDragEvent`](../interfaces/IDragEvent.md)[] = `[]`

#### Defined in

[src/ui/packages/interaction/interaction/src/Dragger.ts:23](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/interaction/interaction/src/Dragger.ts#L23)

___

### draggableList

• **draggableList**: [`ILeafList`](../interfaces/ILeafList.md)

#### Defined in

[src/ui/packages/interaction/interaction/src/Dragger.ts:25](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/interaction/interaction/src/Dragger.ts#L25)

___

### realDraggableList

• **realDraggableList**: [`ILeafList`](../interfaces/ILeafList.md)

#### Defined in

[src/ui/packages/interaction/interaction/src/Dragger.ts:26](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/interaction/interaction/src/Dragger.ts#L26)

___

### dragOverPath

• `Protected` **dragOverPath**: [`ILeafList`](../interfaces/ILeafList.md)

#### Defined in

[src/ui/packages/interaction/interaction/src/Dragger.ts:27](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/interaction/interaction/src/Dragger.ts#L27)

___

### dragEnterPath

• `Protected` **dragEnterPath**: [`ILeafList`](../interfaces/ILeafList.md)

#### Defined in

[src/ui/packages/interaction/interaction/src/Dragger.ts:28](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/interaction/interaction/src/Dragger.ts#L28)

___

### dragStartPoints

• **dragStartPoints**: [`IPointDataMap`](../interfaces/IPointDataMap.md)

#### Defined in

[src/ui/packages/interaction/interaction/src/Dragger.ts:30](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/interaction/interaction/src/Dragger.ts#L30)

___

### autoMoveTimer

• **autoMoveTimer**: `any`

#### Defined in

[src/ui/packages/interaction/interaction/src/Dragger.ts:31](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/interaction/interaction/src/Dragger.ts#L31)

___

### canAnimate

• **canAnimate**: `boolean`

#### Defined in

[src/ui/packages/interaction/interaction/src/Dragger.ts:33](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/interaction/interaction/src/Dragger.ts#L33)

___

### canDragOut

• **canDragOut**: `boolean`

#### Defined in

[src/ui/packages/interaction/interaction/src/Dragger.ts:34](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/interaction/interaction/src/Dragger.ts#L34)

___

### animateWait

• **animateWait**: [`IFunction`](../interfaces/IFunction.md)

#### Defined in

[src/ui/packages/interaction/interaction/src/Dragger.ts:35](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/interaction/interaction/src/Dragger.ts#L35)

## Methods

### setDragData

▸ **setDragData**(`data`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | [`IPointerEvent`](../interfaces/IPointerEvent.md) |

#### Returns

`void`

#### Defined in

[src/ui/packages/interaction/interaction/src/Dragger.ts:41](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/interaction/interaction/src/Dragger.ts#L41)

___

### getList

▸ **getList**(`realDraggable?`, `hover?`): [`ILeafList`](../interfaces/ILeafList.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `realDraggable?` | `boolean` |
| `hover?` | `boolean` |

#### Returns

[`ILeafList`](../interfaces/ILeafList.md)

#### Defined in

[src/ui/packages/interaction/interaction/src/Dragger.ts:48](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/interaction/interaction/src/Dragger.ts#L48)

___

### checkDrag

▸ **checkDrag**(`data`, `canDrag`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | [`IPointerEvent`](../interfaces/IPointerEvent.md) |
| `canDrag` | `boolean` |

#### Returns

`void`

#### Defined in

[src/ui/packages/interaction/interaction/src/Dragger.ts:54](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/interaction/interaction/src/Dragger.ts#L54)

___

### dragStart

▸ **dragStart**(`data`, `canDrag`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | [`IPointerEvent`](../interfaces/IPointerEvent.md) |
| `canDrag` | `boolean` |

#### Returns

`void`

#### Defined in

[src/ui/packages/interaction/interaction/src/Dragger.ts:75](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/interaction/interaction/src/Dragger.ts#L75)

___

### setDragStartPoints

▸ **setDragStartPoints**(`list`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `list` | [`ILeaf`](../interfaces/ILeaf.md)[] \| [`ILeafList`](../interfaces/ILeafList.md) |

#### Returns

`void`

#### Defined in

[src/ui/packages/interaction/interaction/src/Dragger.ts:86](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/interaction/interaction/src/Dragger.ts#L86)

___

### getDraggableList

▸ **getDraggableList**(`path`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `path` | [`ILeafList`](../interfaces/ILeafList.md) |

#### Returns

`void`

#### Defined in

[src/ui/packages/interaction/interaction/src/Dragger.ts:91](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/interaction/interaction/src/Dragger.ts#L91)

___

### drag

▸ **drag**(`data`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | [`IPointerEvent`](../interfaces/IPointerEvent.md) |

#### Returns

`void`

#### Defined in

[src/ui/packages/interaction/interaction/src/Dragger.ts:102](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/interaction/interaction/src/Dragger.ts#L102)

___

### dragReal

▸ **dragReal**(`isDragEnd?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `isDragEnd?` | `boolean` |

#### Returns

`void`

#### Defined in

[src/ui/packages/interaction/interaction/src/Dragger.ts:124](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/interaction/interaction/src/Dragger.ts#L124)

___

### dragOverOrOut

▸ **dragOverOrOut**(`data`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | [`IPointerEvent`](../interfaces/IPointerEvent.md) |

#### Returns

`void`

#### Defined in

[src/ui/packages/interaction/interaction/src/Dragger.ts:141](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/interaction/interaction/src/Dragger.ts#L141)

___

### dragEnterOrLeave

▸ **dragEnterOrLeave**(`data`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | [`IPointerEvent`](../interfaces/IPointerEvent.md) |

#### Returns

`void`

#### Defined in

[src/ui/packages/interaction/interaction/src/Dragger.ts:155](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/interaction/interaction/src/Dragger.ts#L155)

___

### dragEnd

▸ **dragEnd**(`data`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | [`IPointerEvent`](../interfaces/IPointerEvent.md) |

#### Returns

`void`

#### Defined in

[src/ui/packages/interaction/interaction/src/Dragger.ts:165](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/interaction/interaction/src/Dragger.ts#L165)

___

### dragEndReal

▸ **dragEndReal**(`data?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IPointerEvent`](../interfaces/IPointerEvent.md) |

#### Returns

`void`

#### Defined in

[src/ui/packages/interaction/interaction/src/Dragger.ts:171](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/interaction/interaction/src/Dragger.ts#L171)

___

### swipe

▸ **swipe**(`data`, `downData`, `dragData`, `endDragData`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | [`IPointerEvent`](../interfaces/IPointerEvent.md) |
| `downData` | [`IPointerEvent`](../interfaces/IPointerEvent.md) |
| `dragData` | [`IDragEvent`](../interfaces/IDragEvent.md) |
| `endDragData` | [`IDragEvent`](../interfaces/IDragEvent.md) |

#### Returns

`void`

#### Defined in

[src/ui/packages/interaction/interaction/src/Dragger.ts:202](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/interaction/interaction/src/Dragger.ts#L202)

___

### drop

▸ **drop**(`data`, `dropList`, `dragEnterPath`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | [`IPointerEvent`](../interfaces/IPointerEvent.md) |
| `dropList` | [`ILeafList`](../interfaces/ILeafList.md) |
| `dragEnterPath` | [`ILeafList`](../interfaces/ILeafList.md) |

#### Returns

`void`

#### Defined in

[src/ui/packages/interaction/interaction/src/Dragger.ts:210](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/interaction/interaction/src/Dragger.ts#L210)

___

### dragReset

▸ **dragReset**(): `void`

#### Returns

`void`

#### Defined in

[src/ui/packages/interaction/interaction/src/Dragger.ts:217](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/interaction/interaction/src/Dragger.ts#L217)

___

### checkDragEndAnimate

▸ **checkDragEndAnimate**(`_data`, `_speed?`): `number` \| `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `_data` | [`IPointerEvent`](../interfaces/IPointerEvent.md) |
| `_speed?` | `number` |

#### Returns

`number` \| `boolean`

#### Defined in

[src/ui/packages/interaction/interaction/src/Dragger.ts:225](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/interaction/interaction/src/Dragger.ts#L225)

___

### animate

▸ **animate**(`_func?`, `_off?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `_func?` | [`IFunction`](../interfaces/IFunction.md) |
| `_off?` | ``"off"`` |

#### Returns

`void`

#### Defined in

[src/ui/packages/interaction/interaction/src/Dragger.ts:227](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/interaction/interaction/src/Dragger.ts#L227)

___

### stopAnimate

▸ **stopAnimate**(): `void`

#### Returns

`void`

#### Defined in

[src/ui/packages/interaction/interaction/src/Dragger.ts:229](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/interaction/interaction/src/Dragger.ts#L229)

___

### checkDragOut

▸ **checkDragOut**(`_data`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `_data` | [`IPointerEvent`](../interfaces/IPointerEvent.md) |

#### Returns

`void`

#### Defined in

[src/ui/packages/interaction/interaction/src/Dragger.ts:231](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/interaction/interaction/src/Dragger.ts#L231)

___

### autoMoveOnDragOut

▸ **autoMoveOnDragOut**(`_data`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `_data` | [`IPointerEvent`](../interfaces/IPointerEvent.md) |

#### Returns

`void`

#### Defined in

[src/ui/packages/interaction/interaction/src/Dragger.ts:233](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/interaction/interaction/src/Dragger.ts#L233)

___

### autoMoveCancel

▸ **autoMoveCancel**(): `void`

#### Returns

`void`

#### Defined in

[src/ui/packages/interaction/interaction/src/Dragger.ts:235](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/interaction/interaction/src/Dragger.ts#L235)

___

### destroy

▸ **destroy**(): `void`

#### Returns

`void`

#### Defined in

[src/ui/packages/interaction/interaction/src/Dragger.ts:239](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/interaction/interaction/src/Dragger.ts#L239)
