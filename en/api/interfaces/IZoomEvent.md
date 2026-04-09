# Interface: IZoomEvent

## Hierarchy

- [`IPointerEvent`](IPointerEvent.md)

  ↳ **`IZoomEvent`**

## Implemented by

- [`ZoomEvent`](../classes/ZoomEvent.md)

## Table of contents

### Properties

- [origin](IZoomEvent.md#origin)
- [type](IZoomEvent.md#type)
- [target](IZoomEvent.md#target)
- [current](IZoomEvent.md#current)
- [bubbles](IZoomEvent.md#bubbles)
- [phase](IZoomEvent.md#phase)
- [isStopDefault](IZoomEvent.md#isstopdefault)
- [isStop](IZoomEvent.md#isstop)
- [isStopNow](IZoomEvent.md#isstopnow)
- [x](IZoomEvent.md#x)
- [y](IZoomEvent.md#y)
- [altKey](IZoomEvent.md#altkey)
- [ctrlKey](IZoomEvent.md#ctrlkey)
- [shiftKey](IZoomEvent.md#shiftkey)
- [metaKey](IZoomEvent.md#metakey)
- [spaceKey](IZoomEvent.md#spacekey)
- [left](IZoomEvent.md#left)
- [right](IZoomEvent.md#right)
- [middle](IZoomEvent.md#middle)
- [buttons](IZoomEvent.md#buttons)
- [path](IZoomEvent.md#path)
- [throughPath](IZoomEvent.md#throughpath)
- [time](IZoomEvent.md#time)
- [width](IZoomEvent.md#width)
- [height](IZoomEvent.md#height)
- [pointerType](IZoomEvent.md#pointertype)
- [moving](IZoomEvent.md#moving)
- [dragging](IZoomEvent.md#dragging)
- [multiTouch](IZoomEvent.md#multitouch)
- [pressure](IZoomEvent.md#pressure)
- [tangentialPressure](IZoomEvent.md#tangentialpressure)
- [tiltX](IZoomEvent.md#tiltx)
- [tiltY](IZoomEvent.md#tilty)
- [twist](IZoomEvent.md#twist)
- [isCancel](IZoomEvent.md#iscancel)
- [scale](IZoomEvent.md#scale)
- [totalScale](IZoomEvent.md#totalscale)

### Methods

- [stopDefault](IZoomEvent.md#stopdefault)
- [stopNow](IZoomEvent.md#stopnow)
- [stop](IZoomEvent.md#stop)
- [isHoldKeys](IZoomEvent.md#isholdkeys)
- [getBoxPoint](IZoomEvent.md#getboxpoint)
- [getInnerPoint](IZoomEvent.md#getinnerpoint)
- [getLocalPoint](IZoomEvent.md#getlocalpoint)
- [getPagePoint](IZoomEvent.md#getpagepoint)
- [getInner](IZoomEvent.md#getinner)
- [getLocal](IZoomEvent.md#getlocal)
- [getPage](IZoomEvent.md#getpage)

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

### scale

• **scale**: `number`

#### Defined in

[src/leafer/packages/interface/src/event/IUIEvent.ts:90](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/event/IUIEvent.ts#L90)

___

### totalScale

• `Optional` **totalScale**: `number`

#### Defined in

[src/leafer/packages/interface/src/event/IUIEvent.ts:91](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/event/IUIEvent.ts#L91)

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

| Name            | Type                                                                                              |
| :-------------- | :------------------------------------------------------------------------------------------------ |
| `shortcutKeys?` | [`IShortcutKeysCheck`](IShortcutKeysCheck.md) \\| [`IShortcutKeys`](../modules.md#ishortcutkeys) |

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

| Name        | Type                |
| :---------- | :------------------ |
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

| Name        | Type                |
| :---------- | :------------------ |
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

| Name        | Type                |
| :---------- | :------------------ |
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

| Name        | Type                |
| :---------- | :------------------ |
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

| Name        | Type                |
| :---------- | :------------------ |
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
