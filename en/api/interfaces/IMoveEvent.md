# Interface: IMoveEvent

## Hierarchy

- [`IDragEvent`](IDragEvent.md)

  ↳ **`IMoveEvent`**

## Implemented by

- [`MoveEvent`](../classes/MoveEvent.md)

## Table of contents

### Properties

- [origin](IMoveEvent.md#origin)
- [type](IMoveEvent.md#type)
- [target](IMoveEvent.md#target)
- [current](IMoveEvent.md#current)
- [bubbles](IMoveEvent.md#bubbles)
- [phase](IMoveEvent.md#phase)
- [isStopDefault](IMoveEvent.md#isstopdefault)
- [isStop](IMoveEvent.md#isstop)
- [isStopNow](IMoveEvent.md#isstopnow)
- [x](IMoveEvent.md#x)
- [y](IMoveEvent.md#y)
- [altKey](IMoveEvent.md#altkey)
- [ctrlKey](IMoveEvent.md#ctrlkey)
- [shiftKey](IMoveEvent.md#shiftkey)
- [metaKey](IMoveEvent.md#metakey)
- [spaceKey](IMoveEvent.md#spacekey)
- [left](IMoveEvent.md#left)
- [right](IMoveEvent.md#right)
- [middle](IMoveEvent.md#middle)
- [buttons](IMoveEvent.md#buttons)
- [path](IMoveEvent.md#path)
- [throughPath](IMoveEvent.md#throughpath)
- [time](IMoveEvent.md#time)
- [width](IMoveEvent.md#width)
- [height](IMoveEvent.md#height)
- [pointerType](IMoveEvent.md#pointertype)
- [moving](IMoveEvent.md#moving)
- [dragging](IMoveEvent.md#dragging)
- [multiTouch](IMoveEvent.md#multitouch)
- [pressure](IMoveEvent.md#pressure)
- [tangentialPressure](IMoveEvent.md#tangentialpressure)
- [tiltX](IMoveEvent.md#tiltx)
- [tiltY](IMoveEvent.md#tilty)
- [twist](IMoveEvent.md#twist)
- [isCancel](IMoveEvent.md#iscancel)
- [moveX](IMoveEvent.md#movex)
- [moveY](IMoveEvent.md#movey)
- [totalX](IMoveEvent.md#totalx)
- [totalY](IMoveEvent.md#totaly)
- [moveType](IMoveEvent.md#movetype)

### Methods

- [stopDefault](IMoveEvent.md#stopdefault)
- [stopNow](IMoveEvent.md#stopnow)
- [stop](IMoveEvent.md#stop)
- [isHoldKeys](IMoveEvent.md#isholdkeys)
- [getBoxPoint](IMoveEvent.md#getboxpoint)
- [getInnerPoint](IMoveEvent.md#getinnerpoint)
- [getLocalPoint](IMoveEvent.md#getlocalpoint)
- [getPagePoint](IMoveEvent.md#getpagepoint)
- [getInner](IMoveEvent.md#getinner)
- [getLocal](IMoveEvent.md#getlocal)
- [getPage](IMoveEvent.md#getpage)
- [getPageMove](IMoveEvent.md#getpagemove)
- [getInnerMove](IMoveEvent.md#getinnermove)
- [getLocalMove](IMoveEvent.md#getlocalmove)
- [getPageTotal](IMoveEvent.md#getpagetotal)
- [getInnerTotal](IMoveEvent.md#getinnertotal)
- [getLocalTotal](IMoveEvent.md#getlocaltotal)
- [getPageBounds](IMoveEvent.md#getpagebounds)

## Properties

### origin

• `Optional` **origin**: [`IObject`](IObject.md)

#### Inherited from

[IDragEvent](IDragEvent.md).[origin](IDragEvent.md#origin)

#### Defined in

[src/leafer/packages/interface/src/event/IEvent.ts:9](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/event/IEvent.ts#L9)

___

### type

• `Optional` **type**: `string`

#### Inherited from

[IDragEvent](IDragEvent.md).[type](IDragEvent.md#type)

#### Defined in

[src/leafer/packages/interface/src/event/IEvent.ts:11](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/event/IEvent.ts#L11)

___

### target

• `Optional` **target**: [`IEventTarget`](IEventTarget.md)

#### Inherited from

[IDragEvent](IDragEvent.md).[target](IDragEvent.md#target)

#### Defined in

[src/leafer/packages/interface/src/event/IEvent.ts:12](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/event/IEvent.ts#L12)

___

### current

• `Optional` **current**: [`IEventTarget`](IEventTarget.md)

#### Inherited from

[IDragEvent](IDragEvent.md).[current](IDragEvent.md#current)

#### Defined in

[src/leafer/packages/interface/src/event/IEvent.ts:13](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/event/IEvent.ts#L13)

___

### bubbles

• `Optional` **bubbles**: `boolean`

#### Inherited from

[IDragEvent](IDragEvent.md).[bubbles](IDragEvent.md#bubbles)

#### Defined in

[src/leafer/packages/interface/src/event/IEvent.ts:15](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/event/IEvent.ts#L15)

___

### phase

• `Optional` **phase**: `number`

#### Inherited from

[IDragEvent](IDragEvent.md).[phase](IDragEvent.md#phase)

#### Defined in

[src/leafer/packages/interface/src/event/IEvent.ts:16](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/event/IEvent.ts#L16)

___

### isStopDefault

• `Optional` **isStopDefault**: `boolean`

#### Inherited from

[IDragEvent](IDragEvent.md).[isStopDefault](IDragEvent.md#isstopdefault)

#### Defined in

[src/leafer/packages/interface/src/event/IEvent.ts:18](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/event/IEvent.ts#L18)

___

### isStop

• `Optional` **isStop**: `boolean`

#### Inherited from

[IDragEvent](IDragEvent.md).[isStop](IDragEvent.md#isstop)

#### Defined in

[src/leafer/packages/interface/src/event/IEvent.ts:19](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/event/IEvent.ts#L19)

___

### isStopNow

• `Optional` **isStopNow**: `boolean`

#### Inherited from

[IDragEvent](IDragEvent.md).[isStopNow](IDragEvent.md#isstopnow)

#### Defined in

[src/leafer/packages/interface/src/event/IEvent.ts:20](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/event/IEvent.ts#L20)

___

### x

• **x**: `number`

#### Inherited from

[IDragEvent](IDragEvent.md).[x](IDragEvent.md#x)

#### Defined in

[src/leafer/packages/interface/src/event/IUIEvent.ts:9](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/event/IUIEvent.ts#L9)

___

### y

• **y**: `number`

#### Inherited from

[IDragEvent](IDragEvent.md).[y](IDragEvent.md#y)

#### Defined in

[src/leafer/packages/interface/src/event/IUIEvent.ts:10](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/event/IUIEvent.ts#L10)

___

### altKey

• `Optional` **altKey**: `boolean`

#### Inherited from

[IDragEvent](IDragEvent.md).[altKey](IDragEvent.md#altkey)

#### Defined in

[src/leafer/packages/interface/src/event/IUIEvent.ts:12](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/event/IUIEvent.ts#L12)

___

### ctrlKey

• `Optional` **ctrlKey**: `boolean`

#### Inherited from

[IDragEvent](IDragEvent.md).[ctrlKey](IDragEvent.md#ctrlkey)

#### Defined in

[src/leafer/packages/interface/src/event/IUIEvent.ts:13](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/event/IUIEvent.ts#L13)

___

### shiftKey

• `Optional` **shiftKey**: `boolean`

#### Inherited from

[IDragEvent](IDragEvent.md).[shiftKey](IDragEvent.md#shiftkey)

#### Defined in

[src/leafer/packages/interface/src/event/IUIEvent.ts:14](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/event/IUIEvent.ts#L14)

___

### metaKey

• `Optional` **metaKey**: `boolean`

#### Inherited from

[IDragEvent](IDragEvent.md).[metaKey](IDragEvent.md#metakey)

#### Defined in

[src/leafer/packages/interface/src/event/IUIEvent.ts:15](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/event/IUIEvent.ts#L15)

___

### spaceKey

• `Optional` `Readonly` **spaceKey**: `boolean`

#### Inherited from

[IDragEvent](IDragEvent.md).[spaceKey](IDragEvent.md#spacekey)

#### Defined in

[src/leafer/packages/interface/src/event/IUIEvent.ts:16](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/event/IUIEvent.ts#L16)

___

### left

• `Optional` `Readonly` **left**: `boolean`

#### Inherited from

[IDragEvent](IDragEvent.md).[left](IDragEvent.md#left)

#### Defined in

[src/leafer/packages/interface/src/event/IUIEvent.ts:18](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/event/IUIEvent.ts#L18)

___

### right

• `Optional` `Readonly` **right**: `boolean`

#### Inherited from

[IDragEvent](IDragEvent.md).[right](IDragEvent.md#right)

#### Defined in

[src/leafer/packages/interface/src/event/IUIEvent.ts:19](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/event/IUIEvent.ts#L19)

___

### middle

• `Optional` `Readonly` **middle**: `boolean`

#### Inherited from

[IDragEvent](IDragEvent.md).[middle](IDragEvent.md#middle)

#### Defined in

[src/leafer/packages/interface/src/event/IUIEvent.ts:20](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/event/IUIEvent.ts#L20)

___

### buttons

• `Optional` **buttons**: `number`

#### Inherited from

[IDragEvent](IDragEvent.md).[buttons](IDragEvent.md#buttons)

#### Defined in

[src/leafer/packages/interface/src/event/IUIEvent.ts:21](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/event/IUIEvent.ts#L21)

___

### path

• `Optional` **path**: [`ILeafList`](ILeafList.md)

#### Inherited from

[IDragEvent](IDragEvent.md).[path](IDragEvent.md#path)

#### Defined in

[src/leafer/packages/interface/src/event/IUIEvent.ts:23](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/event/IUIEvent.ts#L23)

___

### throughPath

• `Optional` **throughPath**: [`ILeafList`](ILeafList.md)

#### Inherited from

[IDragEvent](IDragEvent.md).[throughPath](IDragEvent.md#throughpath)

#### Defined in

[src/leafer/packages/interface/src/event/IUIEvent.ts:24](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/event/IUIEvent.ts#L24)

___

### time

• `Optional` **time**: `number`

#### Inherited from

[IDragEvent](IDragEvent.md).[time](IDragEvent.md#time)

#### Defined in

[src/leafer/packages/interface/src/event/IUIEvent.ts:26](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/event/IUIEvent.ts#L26)

___

### width

• `Optional` **width**: `number`

#### Inherited from

[IDragEvent](IDragEvent.md).[width](IDragEvent.md#width)

#### Defined in

[src/leafer/packages/interface/src/event/IUIEvent.ts:43](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/event/IUIEvent.ts#L43)

___

### height

• `Optional` **height**: `number`

#### Inherited from

[IDragEvent](IDragEvent.md).[height](IDragEvent.md#height)

#### Defined in

[src/leafer/packages/interface/src/event/IUIEvent.ts:44](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/event/IUIEvent.ts#L44)

___

### pointerType

• `Optional` **pointerType**: [`PointerType`](../modules.md#pointertype)

#### Inherited from

[IDragEvent](IDragEvent.md).[pointerType](IDragEvent.md#pointertype)

#### Defined in

[src/leafer/packages/interface/src/event/IUIEvent.ts:45](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/event/IUIEvent.ts#L45)

___

### moving

• `Optional` **moving**: `boolean`

#### Inherited from

[IDragEvent](IDragEvent.md).[moving](IDragEvent.md#moving)

#### Defined in

[src/leafer/packages/interface/src/event/IUIEvent.ts:46](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/event/IUIEvent.ts#L46)

___

### dragging

• `Optional` **dragging**: `boolean`

#### Inherited from

[IDragEvent](IDragEvent.md).[dragging](IDragEvent.md#dragging)

#### Defined in

[src/leafer/packages/interface/src/event/IUIEvent.ts:47](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/event/IUIEvent.ts#L47)

___

### multiTouch

• `Optional` **multiTouch**: `boolean`

#### Inherited from

[IDragEvent](IDragEvent.md).[multiTouch](IDragEvent.md#multitouch)

#### Defined in

[src/leafer/packages/interface/src/event/IUIEvent.ts:48](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/event/IUIEvent.ts#L48)

___

### pressure

• `Optional` **pressure**: `number`

#### Inherited from

[IDragEvent](IDragEvent.md).[pressure](IDragEvent.md#pressure)

#### Defined in

[src/leafer/packages/interface/src/event/IUIEvent.ts:49](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/event/IUIEvent.ts#L49)

___

### tangentialPressure

• `Optional` **tangentialPressure**: `number`

#### Inherited from

[IDragEvent](IDragEvent.md).[tangentialPressure](IDragEvent.md#tangentialpressure)

#### Defined in

[src/leafer/packages/interface/src/event/IUIEvent.ts:50](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/event/IUIEvent.ts#L50)

___

### tiltX

• `Optional` **tiltX**: `number`

#### Inherited from

[IDragEvent](IDragEvent.md).[tiltX](IDragEvent.md#tiltx)

#### Defined in

[src/leafer/packages/interface/src/event/IUIEvent.ts:51](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/event/IUIEvent.ts#L51)

___

### tiltY

• `Optional` **tiltY**: `number`

#### Inherited from

[IDragEvent](IDragEvent.md).[tiltY](IDragEvent.md#tilty)

#### Defined in

[src/leafer/packages/interface/src/event/IUIEvent.ts:52](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/event/IUIEvent.ts#L52)

___

### twist

• `Optional` **twist**: `number`

#### Inherited from

[IDragEvent](IDragEvent.md).[twist](IDragEvent.md#twist)

#### Defined in

[src/leafer/packages/interface/src/event/IUIEvent.ts:53](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/event/IUIEvent.ts#L53)

___

### isCancel

• `Optional` **isCancel**: `boolean`

#### Inherited from

[IDragEvent](IDragEvent.md).[isCancel](IDragEvent.md#iscancel)

#### Defined in

[src/leafer/packages/interface/src/event/IUIEvent.ts:54](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/event/IUIEvent.ts#L54)

___

### moveX

• **moveX**: `number`

#### Inherited from

[IDragEvent](IDragEvent.md).[moveX](IDragEvent.md#movex)

#### Defined in

[src/leafer/packages/interface/src/event/IUIEvent.ts:63](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/event/IUIEvent.ts#L63)

___

### moveY

• **moveY**: `number`

#### Inherited from

[IDragEvent](IDragEvent.md).[moveY](IDragEvent.md#movey)

#### Defined in

[src/leafer/packages/interface/src/event/IUIEvent.ts:64](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/event/IUIEvent.ts#L64)

___

### totalX

• `Optional` **totalX**: `number`

#### Inherited from

[IDragEvent](IDragEvent.md).[totalX](IDragEvent.md#totalx)

#### Defined in

[src/leafer/packages/interface/src/event/IUIEvent.ts:65](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/event/IUIEvent.ts#L65)

___

### totalY

• `Optional` **totalY**: `number`

#### Inherited from

[IDragEvent](IDragEvent.md).[totalY](IDragEvent.md#totaly)

#### Defined in

[src/leafer/packages/interface/src/event/IUIEvent.ts:66](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/event/IUIEvent.ts#L66)

___

### moveType

• `Optional` **moveType**: `"move"` \| `"drag"`

#### Defined in

[src/leafer/packages/interface/src/event/IUIEvent.ts:95](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/event/IUIEvent.ts#L95)

## Methods

### stopDefault

▸ **stopDefault**(): `void`

#### Returns

`void`

#### Inherited from

[IDragEvent](IDragEvent.md).[stopDefault](IDragEvent.md#stopdefault)

#### Defined in

[src/leafer/packages/interface/src/event/IEvent.ts:21](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/event/IEvent.ts#L21)

___

### stopNow

▸ **stopNow**(): `void`

#### Returns

`void`

#### Inherited from

[IDragEvent](IDragEvent.md).[stopNow](IDragEvent.md#stopnow)

#### Defined in

[src/leafer/packages/interface/src/event/IEvent.ts:22](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/event/IEvent.ts#L22)

___

### stop

▸ **stop**(): `void`

#### Returns

`void`

#### Inherited from

[IDragEvent](IDragEvent.md).[stop](IDragEvent.md#stop)

#### Defined in

[src/leafer/packages/interface/src/event/IEvent.ts:23](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/event/IEvent.ts#L23)

___

### isHoldKeys

▸ **isHoldKeys**(`shortcutKeys?`): `boolean`

#### Parameters

| Name            | Type                                                                                              |
| :-------------- | :------------------------------------------------------------------------------------------------ |
| `shortcutKeys?` | [`IShortcutKeysCheck`](IShortcutKeysCheck.md) \\| [`IShortcutKeys`](../modules.md#ishortcutkeys) |

#### Returns

`boolean`

#### Inherited from

[IDragEvent](IDragEvent.md).[isHoldKeys](IDragEvent.md#isholdkeys)

#### Defined in

[src/leafer/packages/interface/src/event/IUIEvent.ts:28](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/event/IUIEvent.ts#L28)

___

### getBoxPoint

▸ **getBoxPoint**(`relative?`): [`IPointData`](IPointData.md)

#### Parameters

| Name        | Type                |
| :---------- | :------------------ |
| `relative?` | [`ILeaf`](ILeaf.md) |

#### Returns

[`IPointData`](IPointData.md)

#### Inherited from

[IDragEvent](IDragEvent.md).[getBoxPoint](IDragEvent.md#getboxpoint)

#### Defined in

[src/leafer/packages/interface/src/event/IUIEvent.ts:30](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/event/IUIEvent.ts#L30)

___

### getInnerPoint

▸ **getInnerPoint**(`relative?`): [`IPointData`](IPointData.md)

#### Parameters

| Name        | Type                |
| :---------- | :------------------ |
| `relative?` | [`ILeaf`](ILeaf.md) |

#### Returns

[`IPointData`](IPointData.md)

#### Inherited from

[IDragEvent](IDragEvent.md).[getInnerPoint](IDragEvent.md#getinnerpoint)

#### Defined in

[src/leafer/packages/interface/src/event/IUIEvent.ts:31](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/event/IUIEvent.ts#L31)

___

### getLocalPoint

▸ **getLocalPoint**(`relative?`): [`IPointData`](IPointData.md)

#### Parameters

| Name        | Type                |
| :---------- | :------------------ |
| `relative?` | [`ILeaf`](ILeaf.md) |

#### Returns

[`IPointData`](IPointData.md)

#### Inherited from

[IDragEvent](IDragEvent.md).[getLocalPoint](IDragEvent.md#getlocalpoint)

#### Defined in

[src/leafer/packages/interface/src/event/IUIEvent.ts:32](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/event/IUIEvent.ts#L32)

___

### getPagePoint

▸ **getPagePoint**(): [`IPointData`](IPointData.md)

#### Returns

[`IPointData`](IPointData.md)

#### Inherited from

[IDragEvent](IDragEvent.md).[getPagePoint](IDragEvent.md#getpagepoint)

#### Defined in

[src/leafer/packages/interface/src/event/IUIEvent.ts:33](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/event/IUIEvent.ts#L33)

___

### getInner

▸ **getInner**(`relative?`): [`IPointData`](IPointData.md)

#### Parameters

| Name        | Type                |
| :---------- | :------------------ |
| `relative?` | [`ILeaf`](ILeaf.md) |

#### Returns

[`IPointData`](IPointData.md)

#### Inherited from

[IDragEvent](IDragEvent.md).[getInner](IDragEvent.md#getinner)

#### Defined in

[src/leafer/packages/interface/src/event/IUIEvent.ts:36](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/event/IUIEvent.ts#L36)

___

### getLocal

▸ **getLocal**(`relative?`): [`IPointData`](IPointData.md)

#### Parameters

| Name        | Type                |
| :---------- | :------------------ |
| `relative?` | [`ILeaf`](ILeaf.md) |

#### Returns

[`IPointData`](IPointData.md)

#### Inherited from

[IDragEvent](IDragEvent.md).[getLocal](IDragEvent.md#getlocal)

#### Defined in

[src/leafer/packages/interface/src/event/IUIEvent.ts:37](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/event/IUIEvent.ts#L37)

___

### getPage

▸ **getPage**(): [`IPointData`](IPointData.md)

#### Returns

[`IPointData`](IPointData.md)

#### Inherited from

[IDragEvent](IDragEvent.md).[getPage](IDragEvent.md#getpage)

#### Defined in

[src/leafer/packages/interface/src/event/IUIEvent.ts:38](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/event/IUIEvent.ts#L38)

___

### getPageMove

▸ **getPageMove**(`total?`): [`IPointData`](IPointData.md)

#### Parameters

| Name     | Type      |
| :------- | :-------- |
| `total?` | `boolean` |

#### Returns

[`IPointData`](IPointData.md)

#### Inherited from

[IDragEvent](IDragEvent.md).[getPageMove](IDragEvent.md#getpagemove)

#### Defined in

[src/leafer/packages/interface/src/event/IUIEvent.ts:68](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/event/IUIEvent.ts#L68)

___

### getInnerMove

▸ **getInnerMove**(`relative?`): [`IPointData`](IPointData.md)

#### Parameters

| Name        | Type                |
| :---------- | :------------------ |
| `relative?` | [`ILeaf`](ILeaf.md) |

#### Returns

[`IPointData`](IPointData.md)

#### Inherited from

[IDragEvent](IDragEvent.md).[getInnerMove](IDragEvent.md#getinnermove)

#### Defined in

[src/leafer/packages/interface/src/event/IUIEvent.ts:69](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/event/IUIEvent.ts#L69)

___

### getLocalMove

▸ **getLocalMove**(`relative?`): [`IPointData`](IPointData.md)

#### Parameters

| Name        | Type                |
| :---------- | :------------------ |
| `relative?` | [`ILeaf`](ILeaf.md) |

#### Returns

[`IPointData`](IPointData.md)

#### Inherited from

[IDragEvent](IDragEvent.md).[getLocalMove](IDragEvent.md#getlocalmove)

#### Defined in

[src/leafer/packages/interface/src/event/IUIEvent.ts:70](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/event/IUIEvent.ts#L70)

___

### getPageTotal

▸ **getPageTotal**(): [`IPointData`](IPointData.md)

#### Returns

[`IPointData`](IPointData.md)

#### Inherited from

[IDragEvent](IDragEvent.md).[getPageTotal](IDragEvent.md#getpagetotal)

#### Defined in

[src/leafer/packages/interface/src/event/IUIEvent.ts:72](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/event/IUIEvent.ts#L72)

___

### getInnerTotal

▸ **getInnerTotal**(`relative?`): [`IPointData`](IPointData.md)

#### Parameters

| Name        | Type                |
| :---------- | :------------------ |
| `relative?` | [`ILeaf`](ILeaf.md) |

#### Returns

[`IPointData`](IPointData.md)

#### Inherited from

[IDragEvent](IDragEvent.md).[getInnerTotal](IDragEvent.md#getinnertotal)

#### Defined in

[src/leafer/packages/interface/src/event/IUIEvent.ts:73](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/event/IUIEvent.ts#L73)

___

### getLocalTotal

▸ **getLocalTotal**(`relative?`): [`IPointData`](IPointData.md)

#### Parameters

| Name        | Type                |
| :---------- | :------------------ |
| `relative?` | [`ILeaf`](ILeaf.md) |

#### Returns

[`IPointData`](IPointData.md)

#### Inherited from

[IDragEvent](IDragEvent.md).[getLocalTotal](IDragEvent.md#getlocaltotal)

#### Defined in

[src/leafer/packages/interface/src/event/IUIEvent.ts:74](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/event/IUIEvent.ts#L74)

___

### getPageBounds

▸ **getPageBounds**(): [`IBoundsData`](IBoundsData.md)

#### Returns

[`IBoundsData`](IBoundsData.md)

#### Inherited from

[IDragEvent](IDragEvent.md).[getPageBounds](IDragEvent.md#getpagebounds)

#### Defined in

[src/leafer/packages/interface/src/event/IUIEvent.ts:76](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/event/IUIEvent.ts#L76)
