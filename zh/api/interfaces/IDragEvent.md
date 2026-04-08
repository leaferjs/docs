# Interface: IDragEvent

## Hierarchy

- [`IPointerEvent`](IPointerEvent.md)

  ↳ **`IDragEvent`**

  ↳↳ [`ISwipeEvent`](ISwipeEvent.md)

  ↳↳ [`IMoveEvent`](IMoveEvent.md)

## Implemented by

- [`DragEvent`](../classes/DragEvent.md)

## Table of contents

### Properties

- [origin](IDragEvent.md#origin)
- [type](IDragEvent.md#type)
- [target](IDragEvent.md#target)
- [current](IDragEvent.md#current)
- [bubbles](IDragEvent.md#bubbles)
- [phase](IDragEvent.md#phase)
- [isStopDefault](IDragEvent.md#isstopdefault)
- [isStop](IDragEvent.md#isstop)
- [isStopNow](IDragEvent.md#isstopnow)
- [x](IDragEvent.md#x)
- [y](IDragEvent.md#y)
- [altKey](IDragEvent.md#altkey)
- [ctrlKey](IDragEvent.md#ctrlkey)
- [shiftKey](IDragEvent.md#shiftkey)
- [metaKey](IDragEvent.md#metakey)
- [spaceKey](IDragEvent.md#spacekey)
- [left](IDragEvent.md#left)
- [right](IDragEvent.md#right)
- [middle](IDragEvent.md#middle)
- [buttons](IDragEvent.md#buttons)
- [path](IDragEvent.md#path)
- [throughPath](IDragEvent.md#throughpath)
- [time](IDragEvent.md#time)
- [width](IDragEvent.md#width)
- [height](IDragEvent.md#height)
- [pointerType](IDragEvent.md#pointertype)
- [moving](IDragEvent.md#moving)
- [dragging](IDragEvent.md#dragging)
- [multiTouch](IDragEvent.md#multitouch)
- [pressure](IDragEvent.md#pressure)
- [tangentialPressure](IDragEvent.md#tangentialpressure)
- [tiltX](IDragEvent.md#tiltx)
- [tiltY](IDragEvent.md#tilty)
- [twist](IDragEvent.md#twist)
- [isCancel](IDragEvent.md#iscancel)
- [moveX](IDragEvent.md#movex)
- [moveY](IDragEvent.md#movey)
- [totalX](IDragEvent.md#totalx)
- [totalY](IDragEvent.md#totaly)

### Methods

- [stopDefault](IDragEvent.md#stopdefault)
- [stopNow](IDragEvent.md#stopnow)
- [stop](IDragEvent.md#stop)
- [isHoldKeys](IDragEvent.md#isholdkeys)
- [getBoxPoint](IDragEvent.md#getboxpoint)
- [getInnerPoint](IDragEvent.md#getinnerpoint)
- [getLocalPoint](IDragEvent.md#getlocalpoint)
- [getPagePoint](IDragEvent.md#getpagepoint)
- [getInner](IDragEvent.md#getinner)
- [getLocal](IDragEvent.md#getlocal)
- [getPage](IDragEvent.md#getpage)
- [getPageMove](IDragEvent.md#getpagemove)
- [getInnerMove](IDragEvent.md#getinnermove)
- [getLocalMove](IDragEvent.md#getlocalmove)
- [getPageTotal](IDragEvent.md#getpagetotal)
- [getInnerTotal](IDragEvent.md#getinnertotal)
- [getLocalTotal](IDragEvent.md#getlocaltotal)
- [getPageBounds](IDragEvent.md#getpagebounds)

## Properties

### origin

• `Optional` **origin**: [`IObject`](IObject.md)

#### Inherited from

[IPointerEvent](IPointerEvent.md).[origin](IPointerEvent.md#origin)

#### Defined in

[src/leafer/packages/interface/src/event/IEvent.ts:9](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/event/IEvent.ts#L9)

___

### type

• `Optional` **type**: `string`

#### Inherited from

[IPointerEvent](IPointerEvent.md).[type](IPointerEvent.md#type)

#### Defined in

[src/leafer/packages/interface/src/event/IEvent.ts:11](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/event/IEvent.ts#L11)

___

### target

• `Optional` **target**: [`IEventTarget`](IEventTarget.md)

#### Inherited from

[IPointerEvent](IPointerEvent.md).[target](IPointerEvent.md#target)

#### Defined in

[src/leafer/packages/interface/src/event/IEvent.ts:12](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/event/IEvent.ts#L12)

___

### current

• `Optional` **current**: [`IEventTarget`](IEventTarget.md)

#### Inherited from

[IPointerEvent](IPointerEvent.md).[current](IPointerEvent.md#current)

#### Defined in

[src/leafer/packages/interface/src/event/IEvent.ts:13](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/event/IEvent.ts#L13)

___

### bubbles

• `Optional` **bubbles**: `boolean`

#### Inherited from

[IPointerEvent](IPointerEvent.md).[bubbles](IPointerEvent.md#bubbles)

#### Defined in

[src/leafer/packages/interface/src/event/IEvent.ts:15](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/event/IEvent.ts#L15)

___

### phase

• `Optional` **phase**: `number`

#### Inherited from

[IPointerEvent](IPointerEvent.md).[phase](IPointerEvent.md#phase)

#### Defined in

[src/leafer/packages/interface/src/event/IEvent.ts:16](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/event/IEvent.ts#L16)

___

### isStopDefault

• `Optional` **isStopDefault**: `boolean`

#### Inherited from

[IPointerEvent](IPointerEvent.md).[isStopDefault](IPointerEvent.md#isstopdefault)

#### Defined in

[src/leafer/packages/interface/src/event/IEvent.ts:18](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/event/IEvent.ts#L18)

___

### isStop

• `Optional` **isStop**: `boolean`

#### Inherited from

[IPointerEvent](IPointerEvent.md).[isStop](IPointerEvent.md#isstop)

#### Defined in

[src/leafer/packages/interface/src/event/IEvent.ts:19](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/event/IEvent.ts#L19)

___

### isStopNow

• `Optional` **isStopNow**: `boolean`

#### Inherited from

[IPointerEvent](IPointerEvent.md).[isStopNow](IPointerEvent.md#isstopnow)

#### Defined in

[src/leafer/packages/interface/src/event/IEvent.ts:20](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/event/IEvent.ts#L20)

___

### x

• **x**: `number`

#### Inherited from

[IPointerEvent](IPointerEvent.md).[x](IPointerEvent.md#x)

#### Defined in

[src/leafer/packages/interface/src/event/IUIEvent.ts:9](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/event/IUIEvent.ts#L9)

___

### y

• **y**: `number`

#### Inherited from

[IPointerEvent](IPointerEvent.md).[y](IPointerEvent.md#y)

#### Defined in

[src/leafer/packages/interface/src/event/IUIEvent.ts:10](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/event/IUIEvent.ts#L10)

___

### altKey

• `Optional` **altKey**: `boolean`

#### Inherited from

[IPointerEvent](IPointerEvent.md).[altKey](IPointerEvent.md#altkey)

#### Defined in

[src/leafer/packages/interface/src/event/IUIEvent.ts:12](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/event/IUIEvent.ts#L12)

___

### ctrlKey

• `Optional` **ctrlKey**: `boolean`

#### Inherited from

[IPointerEvent](IPointerEvent.md).[ctrlKey](IPointerEvent.md#ctrlkey)

#### Defined in

[src/leafer/packages/interface/src/event/IUIEvent.ts:13](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/event/IUIEvent.ts#L13)

___

### shiftKey

• `Optional` **shiftKey**: `boolean`

#### Inherited from

[IPointerEvent](IPointerEvent.md).[shiftKey](IPointerEvent.md#shiftkey)

#### Defined in

[src/leafer/packages/interface/src/event/IUIEvent.ts:14](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/event/IUIEvent.ts#L14)

___

### metaKey

• `Optional` **metaKey**: `boolean`

#### Inherited from

[IPointerEvent](IPointerEvent.md).[metaKey](IPointerEvent.md#metakey)

#### Defined in

[src/leafer/packages/interface/src/event/IUIEvent.ts:15](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/event/IUIEvent.ts#L15)

___

### spaceKey

• `Optional` `Readonly` **spaceKey**: `boolean`

#### Inherited from

[IPointerEvent](IPointerEvent.md).[spaceKey](IPointerEvent.md#spacekey)

#### Defined in

[src/leafer/packages/interface/src/event/IUIEvent.ts:16](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/event/IUIEvent.ts#L16)

___

### left

• `Optional` `Readonly` **left**: `boolean`

#### Inherited from

[IPointerEvent](IPointerEvent.md).[left](IPointerEvent.md#left)

#### Defined in

[src/leafer/packages/interface/src/event/IUIEvent.ts:18](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/event/IUIEvent.ts#L18)

___

### right

• `Optional` `Readonly` **right**: `boolean`

#### Inherited from

[IPointerEvent](IPointerEvent.md).[right](IPointerEvent.md#right)

#### Defined in

[src/leafer/packages/interface/src/event/IUIEvent.ts:19](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/event/IUIEvent.ts#L19)

___

### middle

• `Optional` `Readonly` **middle**: `boolean`

#### Inherited from

[IPointerEvent](IPointerEvent.md).[middle](IPointerEvent.md#middle)

#### Defined in

[src/leafer/packages/interface/src/event/IUIEvent.ts:20](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/event/IUIEvent.ts#L20)

___

### buttons

• `Optional` **buttons**: `number`

#### Inherited from

[IPointerEvent](IPointerEvent.md).[buttons](IPointerEvent.md#buttons)

#### Defined in

[src/leafer/packages/interface/src/event/IUIEvent.ts:21](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/event/IUIEvent.ts#L21)

___

### path

• `Optional` **path**: [`ILeafList`](ILeafList.md)

#### Inherited from

[IPointerEvent](IPointerEvent.md).[path](IPointerEvent.md#path)

#### Defined in

[src/leafer/packages/interface/src/event/IUIEvent.ts:23](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/event/IUIEvent.ts#L23)

___

### throughPath

• `Optional` **throughPath**: [`ILeafList`](ILeafList.md)

#### Inherited from

[IPointerEvent](IPointerEvent.md).[throughPath](IPointerEvent.md#throughpath)

#### Defined in

[src/leafer/packages/interface/src/event/IUIEvent.ts:24](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/event/IUIEvent.ts#L24)

___

### time

• `Optional` **time**: `number`

#### Inherited from

[IPointerEvent](IPointerEvent.md).[time](IPointerEvent.md#time)

#### Defined in

[src/leafer/packages/interface/src/event/IUIEvent.ts:26](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/event/IUIEvent.ts#L26)

___

### width

• `Optional` **width**: `number`

#### Inherited from

[IPointerEvent](IPointerEvent.md).[width](IPointerEvent.md#width)

#### Defined in

[src/leafer/packages/interface/src/event/IUIEvent.ts:43](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/event/IUIEvent.ts#L43)

___

### height

• `Optional` **height**: `number`

#### Inherited from

[IPointerEvent](IPointerEvent.md).[height](IPointerEvent.md#height)

#### Defined in

[src/leafer/packages/interface/src/event/IUIEvent.ts:44](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/event/IUIEvent.ts#L44)

___

### pointerType

• `Optional` **pointerType**: [`PointerType`](../modules.md#pointertype)

#### Inherited from

[IPointerEvent](IPointerEvent.md).[pointerType](IPointerEvent.md#pointertype)

#### Defined in

[src/leafer/packages/interface/src/event/IUIEvent.ts:45](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/event/IUIEvent.ts#L45)

___

### moving

• `Optional` **moving**: `boolean`

#### Inherited from

[IPointerEvent](IPointerEvent.md).[moving](IPointerEvent.md#moving)

#### Defined in

[src/leafer/packages/interface/src/event/IUIEvent.ts:46](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/event/IUIEvent.ts#L46)

___

### dragging

• `Optional` **dragging**: `boolean`

#### Inherited from

[IPointerEvent](IPointerEvent.md).[dragging](IPointerEvent.md#dragging)

#### Defined in

[src/leafer/packages/interface/src/event/IUIEvent.ts:47](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/event/IUIEvent.ts#L47)

___

### multiTouch

• `Optional` **multiTouch**: `boolean`

#### Inherited from

[IPointerEvent](IPointerEvent.md).[multiTouch](IPointerEvent.md#multitouch)

#### Defined in

[src/leafer/packages/interface/src/event/IUIEvent.ts:48](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/event/IUIEvent.ts#L48)

___

### pressure

• `Optional` **pressure**: `number`

#### Inherited from

[IPointerEvent](IPointerEvent.md).[pressure](IPointerEvent.md#pressure)

#### Defined in

[src/leafer/packages/interface/src/event/IUIEvent.ts:49](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/event/IUIEvent.ts#L49)

___

### tangentialPressure

• `Optional` **tangentialPressure**: `number`

#### Inherited from

[IPointerEvent](IPointerEvent.md).[tangentialPressure](IPointerEvent.md#tangentialpressure)

#### Defined in

[src/leafer/packages/interface/src/event/IUIEvent.ts:50](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/event/IUIEvent.ts#L50)

___

### tiltX

• `Optional` **tiltX**: `number`

#### Inherited from

[IPointerEvent](IPointerEvent.md).[tiltX](IPointerEvent.md#tiltx)

#### Defined in

[src/leafer/packages/interface/src/event/IUIEvent.ts:51](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/event/IUIEvent.ts#L51)

___

### tiltY

• `Optional` **tiltY**: `number`

#### Inherited from

[IPointerEvent](IPointerEvent.md).[tiltY](IPointerEvent.md#tilty)

#### Defined in

[src/leafer/packages/interface/src/event/IUIEvent.ts:52](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/event/IUIEvent.ts#L52)

___

### twist

• `Optional` **twist**: `number`

#### Inherited from

[IPointerEvent](IPointerEvent.md).[twist](IPointerEvent.md#twist)

#### Defined in

[src/leafer/packages/interface/src/event/IUIEvent.ts:53](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/event/IUIEvent.ts#L53)

___

### isCancel

• `Optional` **isCancel**: `boolean`

#### Inherited from

[IPointerEvent](IPointerEvent.md).[isCancel](IPointerEvent.md#iscancel)

#### Defined in

[src/leafer/packages/interface/src/event/IUIEvent.ts:54](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/event/IUIEvent.ts#L54)

___

### moveX

• **moveX**: `number`

#### Defined in

[src/leafer/packages/interface/src/event/IUIEvent.ts:63](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/event/IUIEvent.ts#L63)

___

### moveY

• **moveY**: `number`

#### Defined in

[src/leafer/packages/interface/src/event/IUIEvent.ts:64](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/event/IUIEvent.ts#L64)

___

### totalX

• `Optional` **totalX**: `number`

#### Defined in

[src/leafer/packages/interface/src/event/IUIEvent.ts:65](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/event/IUIEvent.ts#L65)

___

### totalY

• `Optional` **totalY**: `number`

#### Defined in

[src/leafer/packages/interface/src/event/IUIEvent.ts:66](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/event/IUIEvent.ts#L66)

## Methods

### stopDefault

▸ **stopDefault**(): `void`

#### Returns

`void`

#### Inherited from

[IPointerEvent](IPointerEvent.md).[stopDefault](IPointerEvent.md#stopdefault)

#### Defined in

[src/leafer/packages/interface/src/event/IEvent.ts:21](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/event/IEvent.ts#L21)

___

### stopNow

▸ **stopNow**(): `void`

#### Returns

`void`

#### Inherited from

[IPointerEvent](IPointerEvent.md).[stopNow](IPointerEvent.md#stopnow)

#### Defined in

[src/leafer/packages/interface/src/event/IEvent.ts:22](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/event/IEvent.ts#L22)

___

### stop

▸ **stop**(): `void`

#### Returns

`void`

#### Inherited from

[IPointerEvent](IPointerEvent.md).[stop](IPointerEvent.md#stop)

#### Defined in

[src/leafer/packages/interface/src/event/IEvent.ts:23](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/event/IEvent.ts#L23)

___

### isHoldKeys

▸ **isHoldKeys**(`shortcutKeys?`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `shortcutKeys?` | [`IShortcutKeysCheck`](IShortcutKeysCheck.md) \| [`IShortcutKeys`](../modules.md#ishortcutkeys) |

#### Returns

`boolean`

#### Inherited from

[IPointerEvent](IPointerEvent.md).[isHoldKeys](IPointerEvent.md#isholdkeys)

#### Defined in

[src/leafer/packages/interface/src/event/IUIEvent.ts:28](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/event/IUIEvent.ts#L28)

___

### getBoxPoint

▸ **getBoxPoint**(`relative?`): [`IPointData`](IPointData.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `relative?` | [`ILeaf`](ILeaf.md) |

#### Returns

[`IPointData`](IPointData.md)

#### Inherited from

[IPointerEvent](IPointerEvent.md).[getBoxPoint](IPointerEvent.md#getboxpoint)

#### Defined in

[src/leafer/packages/interface/src/event/IUIEvent.ts:30](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/event/IUIEvent.ts#L30)

___

### getInnerPoint

▸ **getInnerPoint**(`relative?`): [`IPointData`](IPointData.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `relative?` | [`ILeaf`](ILeaf.md) |

#### Returns

[`IPointData`](IPointData.md)

#### Inherited from

[IPointerEvent](IPointerEvent.md).[getInnerPoint](IPointerEvent.md#getinnerpoint)

#### Defined in

[src/leafer/packages/interface/src/event/IUIEvent.ts:31](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/event/IUIEvent.ts#L31)

___

### getLocalPoint

▸ **getLocalPoint**(`relative?`): [`IPointData`](IPointData.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `relative?` | [`ILeaf`](ILeaf.md) |

#### Returns

[`IPointData`](IPointData.md)

#### Inherited from

[IPointerEvent](IPointerEvent.md).[getLocalPoint](IPointerEvent.md#getlocalpoint)

#### Defined in

[src/leafer/packages/interface/src/event/IUIEvent.ts:32](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/event/IUIEvent.ts#L32)

___

### getPagePoint

▸ **getPagePoint**(): [`IPointData`](IPointData.md)

#### Returns

[`IPointData`](IPointData.md)

#### Inherited from

[IPointerEvent](IPointerEvent.md).[getPagePoint](IPointerEvent.md#getpagepoint)

#### Defined in

[src/leafer/packages/interface/src/event/IUIEvent.ts:33](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/event/IUIEvent.ts#L33)

___

### getInner

▸ **getInner**(`relative?`): [`IPointData`](IPointData.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `relative?` | [`ILeaf`](ILeaf.md) |

#### Returns

[`IPointData`](IPointData.md)

#### Inherited from

[IPointerEvent](IPointerEvent.md).[getInner](IPointerEvent.md#getinner)

#### Defined in

[src/leafer/packages/interface/src/event/IUIEvent.ts:36](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/event/IUIEvent.ts#L36)

___

### getLocal

▸ **getLocal**(`relative?`): [`IPointData`](IPointData.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `relative?` | [`ILeaf`](ILeaf.md) |

#### Returns

[`IPointData`](IPointData.md)

#### Inherited from

[IPointerEvent](IPointerEvent.md).[getLocal](IPointerEvent.md#getlocal)

#### Defined in

[src/leafer/packages/interface/src/event/IUIEvent.ts:37](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/event/IUIEvent.ts#L37)

___

### getPage

▸ **getPage**(): [`IPointData`](IPointData.md)

#### Returns

[`IPointData`](IPointData.md)

#### Inherited from

[IPointerEvent](IPointerEvent.md).[getPage](IPointerEvent.md#getpage)

#### Defined in

[src/leafer/packages/interface/src/event/IUIEvent.ts:38](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/event/IUIEvent.ts#L38)

___

### getPageMove

▸ **getPageMove**(`total?`): [`IPointData`](IPointData.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `total?` | `boolean` |

#### Returns

[`IPointData`](IPointData.md)

#### Defined in

[src/leafer/packages/interface/src/event/IUIEvent.ts:68](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/event/IUIEvent.ts#L68)

___

### getInnerMove

▸ **getInnerMove**(`relative?`): [`IPointData`](IPointData.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `relative?` | [`ILeaf`](ILeaf.md) |

#### Returns

[`IPointData`](IPointData.md)

#### Defined in

[src/leafer/packages/interface/src/event/IUIEvent.ts:69](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/event/IUIEvent.ts#L69)

___

### getLocalMove

▸ **getLocalMove**(`relative?`): [`IPointData`](IPointData.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `relative?` | [`ILeaf`](ILeaf.md) |

#### Returns

[`IPointData`](IPointData.md)

#### Defined in

[src/leafer/packages/interface/src/event/IUIEvent.ts:70](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/event/IUIEvent.ts#L70)

___

### getPageTotal

▸ **getPageTotal**(): [`IPointData`](IPointData.md)

#### Returns

[`IPointData`](IPointData.md)

#### Defined in

[src/leafer/packages/interface/src/event/IUIEvent.ts:72](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/event/IUIEvent.ts#L72)

___

### getInnerTotal

▸ **getInnerTotal**(`relative?`): [`IPointData`](IPointData.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `relative?` | [`ILeaf`](ILeaf.md) |

#### Returns

[`IPointData`](IPointData.md)

#### Defined in

[src/leafer/packages/interface/src/event/IUIEvent.ts:73](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/event/IUIEvent.ts#L73)

___

### getLocalTotal

▸ **getLocalTotal**(`relative?`): [`IPointData`](IPointData.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `relative?` | [`ILeaf`](ILeaf.md) |

#### Returns

[`IPointData`](IPointData.md)

#### Defined in

[src/leafer/packages/interface/src/event/IUIEvent.ts:74](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/event/IUIEvent.ts#L74)

___

### getPageBounds

▸ **getPageBounds**(): [`IBoundsData`](IBoundsData.md)

#### Returns

[`IBoundsData`](IBoundsData.md)

#### Defined in

[src/leafer/packages/interface/src/event/IUIEvent.ts:76](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/event/IUIEvent.ts#L76)
