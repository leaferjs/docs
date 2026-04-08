# Class: DropEvent

## Hierarchy

- [`PointerEvent`](PointerEvent.md)

  ↳ **`DropEvent`**

## Implements

- [`IDropEvent`](../interfaces/IDropEvent.md)

## Table of contents

### Constructors

- [constructor](DropEvent.md#constructor)

### Properties

- [origin](DropEvent.md#origin)
- [type](DropEvent.md#type)
- [phase](DropEvent.md#phase)
- [isStopDefault](DropEvent.md#isstopdefault)
- [isStop](DropEvent.md#isstop)
- [isStopNow](DropEvent.md#isstopnow)
- [DROP](DropEvent.md#drop)
- [list](DropEvent.md#list)
- [data](DropEvent.md#data)
- [POINTER](DropEvent.md#pointer)
- [BEFORE\_DOWN](DropEvent.md#before_down)
- [BEFORE\_MOVE](DropEvent.md#before_move)
- [BEFORE\_UP](DropEvent.md#before_up)
- [DOWN](DropEvent.md#down)
- [MOVE](DropEvent.md#move)
- [UP](DropEvent.md#up)
- [OVER](DropEvent.md#over)
- [OUT](DropEvent.md#out)
- [ENTER](DropEvent.md#enter)
- [LEAVE](DropEvent.md#leave)
- [TAP](DropEvent.md#tap)
- [DOUBLE\_TAP](DropEvent.md#double_tap)
- [CLICK](DropEvent.md#click)
- [DOUBLE\_CLICK](DropEvent.md#double_click)
- [LONG\_PRESS](DropEvent.md#long_press)
- [LONG\_TAP](DropEvent.md#long_tap)
- [MENU](DropEvent.md#menu)
- [MENU\_TAP](DropEvent.md#menu_tap)
- [width](DropEvent.md#width)
- [height](DropEvent.md#height)
- [pointerType](DropEvent.md#pointertype)
- [moving](DropEvent.md#moving)
- [dragging](DropEvent.md#dragging)
- [multiTouch](DropEvent.md#multitouch)
- [pressure](DropEvent.md#pressure)
- [tangentialPressure](DropEvent.md#tangentialpressure)
- [tiltX](DropEvent.md#tiltx)
- [tiltY](DropEvent.md#tilty)
- [twist](DropEvent.md#twist)
- [x](DropEvent.md#x)
- [y](DropEvent.md#y)
- [path](DropEvent.md#path)
- [throughPath](DropEvent.md#throughpath)
- [altKey](DropEvent.md#altkey)
- [ctrlKey](DropEvent.md#ctrlkey)
- [shiftKey](DropEvent.md#shiftkey)
- [metaKey](DropEvent.md#metakey)
- [buttons](DropEvent.md#buttons)
- [target](DropEvent.md#target)
- [current](DropEvent.md#current)
- [bubbles](DropEvent.md#bubbles)
- [time](DropEvent.md#time)

### Accessors

- [spaceKey](DropEvent.md#spacekey)
- [left](DropEvent.md#left)
- [right](DropEvent.md#right)
- [middle](DropEvent.md#middle)

### Methods

- [stopDefault](DropEvent.md#stopdefault)
- [stopNow](DropEvent.md#stopnow)
- [stop](DropEvent.md#stop)
- [setList](DropEvent.md#setlist)
- [setData](DropEvent.md#setdata)
- [isHoldKeys](DropEvent.md#isholdkeys)
- [getBoxPoint](DropEvent.md#getboxpoint)
- [getInnerPoint](DropEvent.md#getinnerpoint)
- [getLocalPoint](DropEvent.md#getlocalpoint)
- [getPagePoint](DropEvent.md#getpagepoint)
- [getInner](DropEvent.md#getinner)
- [getLocal](DropEvent.md#getlocal)
- [getPage](DropEvent.md#getpage)
- [changeName](DropEvent.md#changename)

## Constructors

### constructor

• **new DropEvent**(`params`): [`DropEvent`](DropEvent.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `params` | [`IUIEvent`](../interfaces/IUIEvent.md) |

#### Returns

[`DropEvent`](DropEvent.md)

#### Inherited from

[PointerEvent](PointerEvent.md).[constructor](PointerEvent.md#constructor)

#### Defined in

[src/ui/packages/event/src/UIEvent.ts:33](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/event/src/UIEvent.ts#L33)

## Properties

### origin

• `Readonly` **origin**: [`IObject`](../interfaces/IObject.md)

#### Implementation of

[IDropEvent](../interfaces/IDropEvent.md).[origin](../interfaces/IDropEvent.md#origin)

#### Inherited from

[PointerEvent](PointerEvent.md).[origin](PointerEvent.md#origin)

#### Defined in

[src/leafer/packages/event/src/Event.ts:7](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/event/src/Event.ts#L7)

___

### type

• `Readonly` **type**: `string`

#### Implementation of

[IDropEvent](../interfaces/IDropEvent.md).[type](../interfaces/IDropEvent.md#type)

#### Inherited from

[PointerEvent](PointerEvent.md).[type](PointerEvent.md#type)

#### Defined in

[src/leafer/packages/event/src/Event.ts:9](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/event/src/Event.ts#L9)

___

### phase

• `Readonly` **phase**: `number`

#### Implementation of

[IDropEvent](../interfaces/IDropEvent.md).[phase](../interfaces/IDropEvent.md#phase)

#### Inherited from

[PointerEvent](PointerEvent.md).[phase](PointerEvent.md#phase)

#### Defined in

[src/leafer/packages/event/src/Event.ts:14](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/event/src/Event.ts#L14)

___

### isStopDefault

• **isStopDefault**: `boolean`

#### Implementation of

[IDropEvent](../interfaces/IDropEvent.md).[isStopDefault](../interfaces/IDropEvent.md#isstopdefault)

#### Inherited from

[PointerEvent](PointerEvent.md).[isStopDefault](PointerEvent.md#isstopdefault)

#### Defined in

[src/leafer/packages/event/src/Event.ts:16](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/event/src/Event.ts#L16)

___

### isStop

• **isStop**: `boolean`

#### Implementation of

[IDropEvent](../interfaces/IDropEvent.md).[isStop](../interfaces/IDropEvent.md#isstop)

#### Inherited from

[PointerEvent](PointerEvent.md).[isStop](PointerEvent.md#isstop)

#### Defined in

[src/leafer/packages/event/src/Event.ts:17](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/event/src/Event.ts#L17)

___

### isStopNow

• **isStopNow**: `boolean`

#### Implementation of

[IDropEvent](../interfaces/IDropEvent.md).[isStopNow](../interfaces/IDropEvent.md#isstopnow)

#### Inherited from

[PointerEvent](PointerEvent.md).[isStopNow](PointerEvent.md#isstopnow)

#### Defined in

[src/leafer/packages/event/src/Event.ts:18](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/event/src/Event.ts#L18)

___

### DROP

▪ `Static` **DROP**: `string` = `'drop'`

#### Defined in

[src/ui/packages/event/src/DropEvent.ts:11](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/event/src/DropEvent.ts#L11)

___

### list

• `Readonly` **list**: [`ILeafList`](../interfaces/ILeafList.md)

#### Implementation of

[IDropEvent](../interfaces/IDropEvent.md).[list](../interfaces/IDropEvent.md#list)

#### Defined in

[src/ui/packages/event/src/DropEvent.ts:13](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/event/src/DropEvent.ts#L13)

___

### data

• `Readonly` **data**: [`IObject`](../interfaces/IObject.md)

#### Implementation of

[IDropEvent](../interfaces/IDropEvent.md).[data](../interfaces/IDropEvent.md#data)

#### Defined in

[src/ui/packages/event/src/DropEvent.ts:14](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/event/src/DropEvent.ts#L14)

___

### POINTER

▪ `Static` **POINTER**: `string` = `'pointer'`

#### Inherited from

[PointerEvent](PointerEvent.md).[POINTER](PointerEvent.md#pointer)

#### Defined in

[src/ui/packages/event/src/PointerEvent.ts:10](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/event/src/PointerEvent.ts#L10)

___

### BEFORE\_DOWN

▪ `Static` **BEFORE\_DOWN**: `string` = `'pointer.before_down'`

#### Inherited from

[PointerEvent](PointerEvent.md).[BEFORE_DOWN](PointerEvent.md#before_down)

#### Defined in

[src/ui/packages/event/src/PointerEvent.ts:12](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/event/src/PointerEvent.ts#L12)

___

### BEFORE\_MOVE

▪ `Static` **BEFORE\_MOVE**: `string` = `'pointer.before_move'`

#### Inherited from

[PointerEvent](PointerEvent.md).[BEFORE_MOVE](PointerEvent.md#before_move)

#### Defined in

[src/ui/packages/event/src/PointerEvent.ts:13](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/event/src/PointerEvent.ts#L13)

___

### BEFORE\_UP

▪ `Static` **BEFORE\_UP**: `string` = `'pointer.before_up'`

#### Inherited from

[PointerEvent](PointerEvent.md).[BEFORE_UP](PointerEvent.md#before_up)

#### Defined in

[src/ui/packages/event/src/PointerEvent.ts:14](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/event/src/PointerEvent.ts#L14)

___

### DOWN

▪ `Static` **DOWN**: `string` = `'pointer.down'`

#### Inherited from

[PointerEvent](PointerEvent.md).[DOWN](PointerEvent.md#down)

#### Defined in

[src/ui/packages/event/src/PointerEvent.ts:16](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/event/src/PointerEvent.ts#L16)

___

### MOVE

▪ `Static` **MOVE**: `string` = `'pointer.move'`

#### Inherited from

[PointerEvent](PointerEvent.md).[MOVE](PointerEvent.md#move)

#### Defined in

[src/ui/packages/event/src/PointerEvent.ts:17](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/event/src/PointerEvent.ts#L17)

___

### UP

▪ `Static` **UP**: `string` = `'pointer.up'`

#### Inherited from

[PointerEvent](PointerEvent.md).[UP](PointerEvent.md#up)

#### Defined in

[src/ui/packages/event/src/PointerEvent.ts:18](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/event/src/PointerEvent.ts#L18)

___

### OVER

▪ `Static` **OVER**: `string` = `'pointer.over'`

#### Inherited from

[PointerEvent](PointerEvent.md).[OVER](PointerEvent.md#over)

#### Defined in

[src/ui/packages/event/src/PointerEvent.ts:20](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/event/src/PointerEvent.ts#L20)

___

### OUT

▪ `Static` **OUT**: `string` = `'pointer.out'`

#### Inherited from

[PointerEvent](PointerEvent.md).[OUT](PointerEvent.md#out)

#### Defined in

[src/ui/packages/event/src/PointerEvent.ts:21](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/event/src/PointerEvent.ts#L21)

___

### ENTER

▪ `Static` **ENTER**: `string` = `'pointer.enter'`

#### Inherited from

[PointerEvent](PointerEvent.md).[ENTER](PointerEvent.md#enter)

#### Defined in

[src/ui/packages/event/src/PointerEvent.ts:23](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/event/src/PointerEvent.ts#L23)

___

### LEAVE

▪ `Static` **LEAVE**: `string` = `'pointer.leave'`

#### Inherited from

[PointerEvent](PointerEvent.md).[LEAVE](PointerEvent.md#leave)

#### Defined in

[src/ui/packages/event/src/PointerEvent.ts:24](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/event/src/PointerEvent.ts#L24)

___

### TAP

▪ `Static` **TAP**: `string` = `'tap'`

#### Inherited from

[PointerEvent](PointerEvent.md).[TAP](PointerEvent.md#tap)

#### Defined in

[src/ui/packages/event/src/PointerEvent.ts:26](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/event/src/PointerEvent.ts#L26)

___

### DOUBLE\_TAP

▪ `Static` **DOUBLE\_TAP**: `string` = `'double_tap'`

#### Inherited from

[PointerEvent](PointerEvent.md).[DOUBLE_TAP](PointerEvent.md#double_tap)

#### Defined in

[src/ui/packages/event/src/PointerEvent.ts:27](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/event/src/PointerEvent.ts#L27)

___

### CLICK

▪ `Static` **CLICK**: `string` = `'click'`

#### Inherited from

[PointerEvent](PointerEvent.md).[CLICK](PointerEvent.md#click)

#### Defined in

[src/ui/packages/event/src/PointerEvent.ts:29](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/event/src/PointerEvent.ts#L29)

___

### DOUBLE\_CLICK

▪ `Static` **DOUBLE\_CLICK**: `string` = `'double_click'`

#### Inherited from

[PointerEvent](PointerEvent.md).[DOUBLE_CLICK](PointerEvent.md#double_click)

#### Defined in

[src/ui/packages/event/src/PointerEvent.ts:30](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/event/src/PointerEvent.ts#L30)

___

### LONG\_PRESS

▪ `Static` **LONG\_PRESS**: `string` = `'long_press'`

#### Inherited from

[PointerEvent](PointerEvent.md).[LONG_PRESS](PointerEvent.md#long_press)

#### Defined in

[src/ui/packages/event/src/PointerEvent.ts:32](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/event/src/PointerEvent.ts#L32)

___

### LONG\_TAP

▪ `Static` **LONG\_TAP**: `string` = `'long_tap'`

#### Inherited from

[PointerEvent](PointerEvent.md).[LONG_TAP](PointerEvent.md#long_tap)

#### Defined in

[src/ui/packages/event/src/PointerEvent.ts:33](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/event/src/PointerEvent.ts#L33)

___

### MENU

▪ `Static` **MENU**: `string` = `'pointer.menu'`

#### Inherited from

[PointerEvent](PointerEvent.md).[MENU](PointerEvent.md#menu)

#### Defined in

[src/ui/packages/event/src/PointerEvent.ts:35](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/event/src/PointerEvent.ts#L35)

___

### MENU\_TAP

▪ `Static` **MENU\_TAP**: `string` = `'pointer.menu_tap'`

#### Inherited from

[PointerEvent](PointerEvent.md).[MENU_TAP](PointerEvent.md#menu_tap)

#### Defined in

[src/ui/packages/event/src/PointerEvent.ts:36](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/event/src/PointerEvent.ts#L36)

___

### width

• `Readonly` **width**: `number`

#### Implementation of

[IDropEvent](../interfaces/IDropEvent.md).[width](../interfaces/IDropEvent.md#width)

#### Inherited from

[PointerEvent](PointerEvent.md).[width](PointerEvent.md#width)

#### Defined in

[src/ui/packages/event/src/PointerEvent.ts:38](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/event/src/PointerEvent.ts#L38)

___

### height

• `Readonly` **height**: `number`

#### Implementation of

[IDropEvent](../interfaces/IDropEvent.md).[height](../interfaces/IDropEvent.md#height)

#### Inherited from

[PointerEvent](PointerEvent.md).[height](PointerEvent.md#height)

#### Defined in

[src/ui/packages/event/src/PointerEvent.ts:39](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/event/src/PointerEvent.ts#L39)

___

### pointerType

• `Readonly` **pointerType**: [`PointerType`](../modules.md#pointertype)

#### Implementation of

[IDropEvent](../interfaces/IDropEvent.md).[pointerType](../interfaces/IDropEvent.md#pointertype)

#### Inherited from

[PointerEvent](PointerEvent.md).[pointerType](PointerEvent.md#pointertype)

#### Defined in

[src/ui/packages/event/src/PointerEvent.ts:40](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/event/src/PointerEvent.ts#L40)

___

### moving

• `Optional` `Readonly` **moving**: `boolean`

#### Implementation of

[IDropEvent](../interfaces/IDropEvent.md).[moving](../interfaces/IDropEvent.md#moving)

#### Inherited from

[PointerEvent](PointerEvent.md).[moving](PointerEvent.md#moving)

#### Defined in

[src/ui/packages/event/src/PointerEvent.ts:41](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/event/src/PointerEvent.ts#L41)

___

### dragging

• `Optional` `Readonly` **dragging**: `boolean`

#### Implementation of

[IDropEvent](../interfaces/IDropEvent.md).[dragging](../interfaces/IDropEvent.md#dragging)

#### Inherited from

[PointerEvent](PointerEvent.md).[dragging](PointerEvent.md#dragging)

#### Defined in

[src/ui/packages/event/src/PointerEvent.ts:42](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/event/src/PointerEvent.ts#L42)

___

### multiTouch

• `Optional` `Readonly` **multiTouch**: `boolean`

#### Implementation of

[IDropEvent](../interfaces/IDropEvent.md).[multiTouch](../interfaces/IDropEvent.md#multitouch)

#### Inherited from

[PointerEvent](PointerEvent.md).[multiTouch](PointerEvent.md#multitouch)

#### Defined in

[src/ui/packages/event/src/PointerEvent.ts:43](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/event/src/PointerEvent.ts#L43)

___

### pressure

• `Readonly` **pressure**: `number`

#### Implementation of

[IDropEvent](../interfaces/IDropEvent.md).[pressure](../interfaces/IDropEvent.md#pressure)

#### Inherited from

[PointerEvent](PointerEvent.md).[pressure](PointerEvent.md#pressure)

#### Defined in

[src/ui/packages/event/src/PointerEvent.ts:44](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/event/src/PointerEvent.ts#L44)

___

### tangentialPressure

• `Optional` `Readonly` **tangentialPressure**: `number`

#### Implementation of

[IDropEvent](../interfaces/IDropEvent.md).[tangentialPressure](../interfaces/IDropEvent.md#tangentialpressure)

#### Inherited from

[PointerEvent](PointerEvent.md).[tangentialPressure](PointerEvent.md#tangentialpressure)

#### Defined in

[src/ui/packages/event/src/PointerEvent.ts:45](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/event/src/PointerEvent.ts#L45)

___

### tiltX

• `Optional` `Readonly` **tiltX**: `number`

#### Implementation of

[IDropEvent](../interfaces/IDropEvent.md).[tiltX](../interfaces/IDropEvent.md#tiltx)

#### Inherited from

[PointerEvent](PointerEvent.md).[tiltX](PointerEvent.md#tiltx)

#### Defined in

[src/ui/packages/event/src/PointerEvent.ts:46](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/event/src/PointerEvent.ts#L46)

___

### tiltY

• `Optional` `Readonly` **tiltY**: `number`

#### Implementation of

[IDropEvent](../interfaces/IDropEvent.md).[tiltY](../interfaces/IDropEvent.md#tilty)

#### Inherited from

[PointerEvent](PointerEvent.md).[tiltY](PointerEvent.md#tilty)

#### Defined in

[src/ui/packages/event/src/PointerEvent.ts:47](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/event/src/PointerEvent.ts#L47)

___

### twist

• `Optional` `Readonly` **twist**: `number`

#### Implementation of

[IDropEvent](../interfaces/IDropEvent.md).[twist](../interfaces/IDropEvent.md#twist)

#### Inherited from

[PointerEvent](PointerEvent.md).[twist](PointerEvent.md#twist)

#### Defined in

[src/ui/packages/event/src/PointerEvent.ts:48](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/event/src/PointerEvent.ts#L48)

___

### x

• `Readonly` **x**: `number`

#### Implementation of

[IDropEvent](../interfaces/IDropEvent.md).[x](../interfaces/IDropEvent.md#x)

#### Inherited from

[PointerEvent](PointerEvent.md).[x](PointerEvent.md#x)

#### Defined in

[src/ui/packages/event/src/UIEvent.ts:10](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/event/src/UIEvent.ts#L10)

___

### y

• `Readonly` **y**: `number`

#### Implementation of

[IDropEvent](../interfaces/IDropEvent.md).[y](../interfaces/IDropEvent.md#y)

#### Inherited from

[PointerEvent](PointerEvent.md).[y](PointerEvent.md#y)

#### Defined in

[src/ui/packages/event/src/UIEvent.ts:11](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/event/src/UIEvent.ts#L11)

___

### path

• `Readonly` **path**: [`ILeafList`](../interfaces/ILeafList.md)

#### Implementation of

[IDropEvent](../interfaces/IDropEvent.md).[path](../interfaces/IDropEvent.md#path)

#### Inherited from

[PointerEvent](PointerEvent.md).[path](PointerEvent.md#path)

#### Defined in

[src/ui/packages/event/src/UIEvent.ts:13](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/event/src/UIEvent.ts#L13)

___

### throughPath

• `Optional` `Readonly` **throughPath**: [`ILeafList`](../interfaces/ILeafList.md)

#### Implementation of

[IDropEvent](../interfaces/IDropEvent.md).[throughPath](../interfaces/IDropEvent.md#throughpath)

#### Inherited from

[PointerEvent](PointerEvent.md).[throughPath](PointerEvent.md#throughpath)

#### Defined in

[src/ui/packages/event/src/UIEvent.ts:14](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/event/src/UIEvent.ts#L14)

___

### altKey

• `Readonly` **altKey**: `boolean`

#### Implementation of

[IDropEvent](../interfaces/IDropEvent.md).[altKey](../interfaces/IDropEvent.md#altkey)

#### Inherited from

[PointerEvent](PointerEvent.md).[altKey](PointerEvent.md#altkey)

#### Defined in

[src/ui/packages/event/src/UIEvent.ts:16](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/event/src/UIEvent.ts#L16)

___

### ctrlKey

• `Readonly` **ctrlKey**: `boolean`

#### Implementation of

[IDropEvent](../interfaces/IDropEvent.md).[ctrlKey](../interfaces/IDropEvent.md#ctrlkey)

#### Inherited from

[PointerEvent](PointerEvent.md).[ctrlKey](PointerEvent.md#ctrlkey)

#### Defined in

[src/ui/packages/event/src/UIEvent.ts:17](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/event/src/UIEvent.ts#L17)

___

### shiftKey

• `Readonly` **shiftKey**: `boolean`

#### Implementation of

[IDropEvent](../interfaces/IDropEvent.md).[shiftKey](../interfaces/IDropEvent.md#shiftkey)

#### Inherited from

[PointerEvent](PointerEvent.md).[shiftKey](PointerEvent.md#shiftkey)

#### Defined in

[src/ui/packages/event/src/UIEvent.ts:18](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/event/src/UIEvent.ts#L18)

___

### metaKey

• `Readonly` **metaKey**: `boolean`

#### Implementation of

[IDropEvent](../interfaces/IDropEvent.md).[metaKey](../interfaces/IDropEvent.md#metakey)

#### Inherited from

[PointerEvent](PointerEvent.md).[metaKey](PointerEvent.md#metakey)

#### Defined in

[src/ui/packages/event/src/UIEvent.ts:19](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/event/src/UIEvent.ts#L19)

___

### buttons

• `Readonly` **buttons**: `number`

#### Implementation of

[IDropEvent](../interfaces/IDropEvent.md).[buttons](../interfaces/IDropEvent.md#buttons)

#### Inherited from

[PointerEvent](PointerEvent.md).[buttons](PointerEvent.md#buttons)

#### Defined in

[src/ui/packages/event/src/UIEvent.ts:25](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/event/src/UIEvent.ts#L25)

___

### target

• `Readonly` **target**: [`ILeaf`](../interfaces/ILeaf.md)

#### Implementation of

[IDropEvent](../interfaces/IDropEvent.md).[target](../interfaces/IDropEvent.md#target)

#### Inherited from

[PointerEvent](PointerEvent.md).[target](PointerEvent.md#target)

#### Defined in

[src/ui/packages/event/src/UIEvent.ts:27](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/event/src/UIEvent.ts#L27)

___

### current

• `Readonly` **current**: [`ILeaf`](../interfaces/ILeaf.md)

#### Implementation of

[IDropEvent](../interfaces/IDropEvent.md).[current](../interfaces/IDropEvent.md#current)

#### Inherited from

[PointerEvent](PointerEvent.md).[current](PointerEvent.md#current)

#### Defined in

[src/ui/packages/event/src/UIEvent.ts:28](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/event/src/UIEvent.ts#L28)

___

### bubbles

• `Readonly` **bubbles**: `boolean` = `true`

#### Implementation of

[IDropEvent](../interfaces/IDropEvent.md).[bubbles](../interfaces/IDropEvent.md#bubbles)

#### Inherited from

[PointerEvent](PointerEvent.md).[bubbles](PointerEvent.md#bubbles)

#### Defined in

[src/ui/packages/event/src/UIEvent.ts:29](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/event/src/UIEvent.ts#L29)

___

### time

• `Readonly` **time**: `number`

#### Implementation of

[IDropEvent](../interfaces/IDropEvent.md).[time](../interfaces/IDropEvent.md#time)

#### Inherited from

[PointerEvent](PointerEvent.md).[time](PointerEvent.md#time)

#### Defined in

[src/ui/packages/event/src/UIEvent.ts:31](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/event/src/UIEvent.ts#L31)

## Accessors

### spaceKey

• `get` **spaceKey**(): `boolean`

#### Returns

`boolean`

#### Implementation of

[IDropEvent](../interfaces/IDropEvent.md).[spaceKey](../interfaces/IDropEvent.md#spacekey)

#### Inherited from

PointerEvent.spaceKey

#### Defined in

[src/ui/packages/event/src/UIEvent.ts:20](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/event/src/UIEvent.ts#L20)

___

### left

• `get` **left**(): `boolean`

#### Returns

`boolean`

#### Implementation of

[IDropEvent](../interfaces/IDropEvent.md).[left](../interfaces/IDropEvent.md#left)

#### Inherited from

PointerEvent.left

#### Defined in

[src/ui/packages/event/src/UIEvent.ts:22](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/event/src/UIEvent.ts#L22)

___

### right

• `get` **right**(): `boolean`

#### Returns

`boolean`

#### Implementation of

[IDropEvent](../interfaces/IDropEvent.md).[right](../interfaces/IDropEvent.md#right)

#### Inherited from

PointerEvent.right

#### Defined in

[src/ui/packages/event/src/UIEvent.ts:23](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/event/src/UIEvent.ts#L23)

___

### middle

• `get` **middle**(): `boolean`

#### Returns

`boolean`

#### Implementation of

[IDropEvent](../interfaces/IDropEvent.md).[middle](../interfaces/IDropEvent.md#middle)

#### Inherited from

PointerEvent.middle

#### Defined in

[src/ui/packages/event/src/UIEvent.ts:24](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/event/src/UIEvent.ts#L24)

## Methods

### stopDefault

▸ **stopDefault**(): `void`

#### Returns

`void`

#### Implementation of

[IDropEvent](../interfaces/IDropEvent.md).[stopDefault](../interfaces/IDropEvent.md#stopdefault)

#### Inherited from

[PointerEvent](PointerEvent.md).[stopDefault](PointerEvent.md#stopdefault)

#### Defined in

[src/leafer/packages/event/src/Event.ts:25](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/event/src/Event.ts#L25)

___

### stopNow

▸ **stopNow**(): `void`

#### Returns

`void`

#### Implementation of

[IDropEvent](../interfaces/IDropEvent.md).[stopNow](../interfaces/IDropEvent.md#stopnow)

#### Inherited from

[PointerEvent](PointerEvent.md).[stopNow](PointerEvent.md#stopnow)

#### Defined in

[src/leafer/packages/event/src/Event.ts:30](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/event/src/Event.ts#L30)

___

### stop

▸ **stop**(): `void`

#### Returns

`void`

#### Implementation of

[IDropEvent](../interfaces/IDropEvent.md).[stop](../interfaces/IDropEvent.md#stop)

#### Inherited from

[PointerEvent](PointerEvent.md).[stop](PointerEvent.md#stop)

#### Defined in

[src/leafer/packages/event/src/Event.ts:36](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/event/src/Event.ts#L36)

___

### setList

▸ **setList**(`data`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | [`ILeaf`](../interfaces/ILeaf.md) \| [`ILeaf`](../interfaces/ILeaf.md)[] \| [`ILeafList`](../interfaces/ILeafList.md) |

#### Returns

`void`

#### Defined in

[src/ui/packages/event/src/DropEvent.ts:16](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/event/src/DropEvent.ts#L16)

___

### setData

▸ **setData**(`data`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | [`IObject`](../interfaces/IObject.md) |

#### Returns

`void`

#### Defined in

[src/ui/packages/event/src/DropEvent.ts:20](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/event/src/DropEvent.ts#L20)

___

### isHoldKeys

▸ **isHoldKeys**(`shortcutKeys?`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `shortcutKeys?` | [`IShortcutKeysCheck`](../interfaces/IShortcutKeysCheck.md) \| [`IShortcutKeys`](../modules.md#ishortcutkeys) |

#### Returns

`boolean`

#### Implementation of

[IDropEvent](../interfaces/IDropEvent.md).[isHoldKeys](../interfaces/IDropEvent.md#isholdkeys)

#### Inherited from

[PointerEvent](PointerEvent.md).[isHoldKeys](PointerEvent.md#isholdkeys)

#### Defined in

[src/ui/packages/event/src/UIEvent.ts:39](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/event/src/UIEvent.ts#L39)

___

### getBoxPoint

▸ **getBoxPoint**(`relative?`): [`IPointData`](../interfaces/IPointData.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `relative?` | [`ILeaf`](../interfaces/ILeaf.md) |

#### Returns

[`IPointData`](../interfaces/IPointData.md)

#### Implementation of

[IDropEvent](../interfaces/IDropEvent.md).[getBoxPoint](../interfaces/IDropEvent.md#getboxpoint)

#### Inherited from

[PointerEvent](PointerEvent.md).[getBoxPoint](PointerEvent.md#getboxpoint)

#### Defined in

[src/ui/packages/event/src/UIEvent.ts:43](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/event/src/UIEvent.ts#L43)

___

### getInnerPoint

▸ **getInnerPoint**(`relative?`): [`IPointData`](../interfaces/IPointData.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `relative?` | [`ILeaf`](../interfaces/ILeaf.md) |

#### Returns

[`IPointData`](../interfaces/IPointData.md)

#### Implementation of

[IDropEvent](../interfaces/IDropEvent.md).[getInnerPoint](../interfaces/IDropEvent.md#getinnerpoint)

#### Inherited from

[PointerEvent](PointerEvent.md).[getInnerPoint](PointerEvent.md#getinnerpoint)

#### Defined in

[src/ui/packages/event/src/UIEvent.ts:47](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/event/src/UIEvent.ts#L47)

___

### getLocalPoint

▸ **getLocalPoint**(`relative?`): [`IPointData`](../interfaces/IPointData.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `relative?` | [`ILeaf`](../interfaces/ILeaf.md) |

#### Returns

[`IPointData`](../interfaces/IPointData.md)

#### Implementation of

[IDropEvent](../interfaces/IDropEvent.md).[getLocalPoint](../interfaces/IDropEvent.md#getlocalpoint)

#### Inherited from

[PointerEvent](PointerEvent.md).[getLocalPoint](PointerEvent.md#getlocalpoint)

#### Defined in

[src/ui/packages/event/src/UIEvent.ts:51](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/event/src/UIEvent.ts#L51)

___

### getPagePoint

▸ **getPagePoint**(): [`IPointData`](../interfaces/IPointData.md)

#### Returns

[`IPointData`](../interfaces/IPointData.md)

#### Implementation of

[IDropEvent](../interfaces/IDropEvent.md).[getPagePoint](../interfaces/IDropEvent.md#getpagepoint)

#### Inherited from

[PointerEvent](PointerEvent.md).[getPagePoint](PointerEvent.md#getpagepoint)

#### Defined in

[src/ui/packages/event/src/UIEvent.ts:55](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/event/src/UIEvent.ts#L55)

___

### getInner

▸ **getInner**(`relative?`): [`IPointData`](../interfaces/IPointData.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `relative?` | [`ILeaf`](../interfaces/ILeaf.md) |

#### Returns

[`IPointData`](../interfaces/IPointData.md)

#### Implementation of

[IDropEvent](../interfaces/IDropEvent.md).[getInner](../interfaces/IDropEvent.md#getinner)

#### Inherited from

[PointerEvent](PointerEvent.md).[getInner](PointerEvent.md#getinner)

#### Defined in

[src/ui/packages/event/src/UIEvent.ts:60](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/event/src/UIEvent.ts#L60)

___

### getLocal

▸ **getLocal**(`relative?`): [`IPointData`](../interfaces/IPointData.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `relative?` | [`ILeaf`](../interfaces/ILeaf.md) |

#### Returns

[`IPointData`](../interfaces/IPointData.md)

#### Implementation of

[IDropEvent](../interfaces/IDropEvent.md).[getLocal](../interfaces/IDropEvent.md#getlocal)

#### Inherited from

[PointerEvent](PointerEvent.md).[getLocal](PointerEvent.md#getlocal)

#### Defined in

[src/ui/packages/event/src/UIEvent.ts:61](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/event/src/UIEvent.ts#L61)

___

### getPage

▸ **getPage**(): [`IPointData`](../interfaces/IPointData.md)

#### Returns

[`IPointData`](../interfaces/IPointData.md)

#### Implementation of

[IDropEvent](../interfaces/IDropEvent.md).[getPage](../interfaces/IDropEvent.md#getpage)

#### Inherited from

[PointerEvent](PointerEvent.md).[getPage](PointerEvent.md#getpage)

#### Defined in

[src/ui/packages/event/src/UIEvent.ts:62](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/event/src/UIEvent.ts#L62)

___

### changeName

▸ **changeName**(`oldName`, `newName`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `oldName` | `string` |
| `newName` | `string` |

#### Returns

`void`

#### Inherited from

[PointerEvent](PointerEvent.md).[changeName](PointerEvent.md#changename)

#### Defined in

[src/ui/packages/event/src/UIEvent.ts:65](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/event/src/UIEvent.ts#L65)
