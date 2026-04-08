# Class: RotateEvent

## Hierarchy

- [`PointerEvent`](PointerEvent.md)

  ↳ **`RotateEvent`**

## Implements

- [`IRotateEvent`](../interfaces/IRotateEvent.md)

## Table of contents

### Constructors

- [constructor](RotateEvent.md#constructor)

### Properties

- [origin](RotateEvent.md#origin)
- [type](RotateEvent.md#type)
- [phase](RotateEvent.md#phase)
- [isStopDefault](RotateEvent.md#isstopdefault)
- [isStop](RotateEvent.md#isstop)
- [isStopNow](RotateEvent.md#isstopnow)
- [POINTER](RotateEvent.md#pointer)
- [BEFORE\_DOWN](RotateEvent.md#before_down)
- [BEFORE\_MOVE](RotateEvent.md#before_move)
- [BEFORE\_UP](RotateEvent.md#before_up)
- [DOWN](RotateEvent.md#down)
- [MOVE](RotateEvent.md#move)
- [UP](RotateEvent.md#up)
- [OVER](RotateEvent.md#over)
- [OUT](RotateEvent.md#out)
- [ENTER](RotateEvent.md#enter)
- [LEAVE](RotateEvent.md#leave)
- [TAP](RotateEvent.md#tap)
- [DOUBLE\_TAP](RotateEvent.md#double_tap)
- [CLICK](RotateEvent.md#click)
- [DOUBLE\_CLICK](RotateEvent.md#double_click)
- [LONG\_PRESS](RotateEvent.md#long_press)
- [LONG\_TAP](RotateEvent.md#long_tap)
- [MENU](RotateEvent.md#menu)
- [MENU\_TAP](RotateEvent.md#menu_tap)
- [width](RotateEvent.md#width)
- [height](RotateEvent.md#height)
- [pointerType](RotateEvent.md#pointertype)
- [moving](RotateEvent.md#moving)
- [dragging](RotateEvent.md#dragging)
- [multiTouch](RotateEvent.md#multitouch)
- [pressure](RotateEvent.md#pressure)
- [tangentialPressure](RotateEvent.md#tangentialpressure)
- [tiltX](RotateEvent.md#tiltx)
- [tiltY](RotateEvent.md#tilty)
- [twist](RotateEvent.md#twist)
- [BEFORE\_ROTATE](RotateEvent.md#before_rotate)
- [START](RotateEvent.md#start)
- [ROTATE](RotateEvent.md#rotate)
- [END](RotateEvent.md#end)
- [rotation](RotateEvent.md#rotation)
- [totalRotation](RotateEvent.md#totalrotation)
- [x](RotateEvent.md#x)
- [y](RotateEvent.md#y)
- [path](RotateEvent.md#path)
- [throughPath](RotateEvent.md#throughpath)
- [altKey](RotateEvent.md#altkey)
- [ctrlKey](RotateEvent.md#ctrlkey)
- [shiftKey](RotateEvent.md#shiftkey)
- [metaKey](RotateEvent.md#metakey)
- [buttons](RotateEvent.md#buttons)
- [target](RotateEvent.md#target)
- [current](RotateEvent.md#current)
- [bubbles](RotateEvent.md#bubbles)
- [time](RotateEvent.md#time)

### Accessors

- [spaceKey](RotateEvent.md#spacekey)
- [left](RotateEvent.md#left)
- [right](RotateEvent.md#right)
- [middle](RotateEvent.md#middle)

### Methods

- [stopDefault](RotateEvent.md#stopdefault)
- [stopNow](RotateEvent.md#stopnow)
- [stop](RotateEvent.md#stop)
- [isHoldKeys](RotateEvent.md#isholdkeys)
- [getBoxPoint](RotateEvent.md#getboxpoint)
- [getInnerPoint](RotateEvent.md#getinnerpoint)
- [getLocalPoint](RotateEvent.md#getlocalpoint)
- [getPagePoint](RotateEvent.md#getpagepoint)
- [getInner](RotateEvent.md#getinner)
- [getLocal](RotateEvent.md#getlocal)
- [getPage](RotateEvent.md#getpage)
- [changeName](RotateEvent.md#changename)

## Constructors

### constructor

• **new RotateEvent**(`params`): [`RotateEvent`](RotateEvent.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `params` | [`IUIEvent`](../interfaces/IUIEvent.md) |

#### Returns

[`RotateEvent`](RotateEvent.md)

#### Inherited from

[PointerEvent](PointerEvent.md).[constructor](PointerEvent.md#constructor)

#### Defined in

[src/ui/packages/event/src/UIEvent.ts:33](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/event/src/UIEvent.ts#L33)

## Properties

### origin

• `Readonly` **origin**: [`IObject`](../interfaces/IObject.md)

#### Implementation of

[IRotateEvent](../interfaces/IRotateEvent.md).[origin](../interfaces/IRotateEvent.md#origin)

#### Inherited from

[PointerEvent](PointerEvent.md).[origin](PointerEvent.md#origin)

#### Defined in

[src/leafer/packages/event/src/Event.ts:7](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/event/src/Event.ts#L7)

___

### type

• `Readonly` **type**: `string`

#### Implementation of

[IRotateEvent](../interfaces/IRotateEvent.md).[type](../interfaces/IRotateEvent.md#type)

#### Inherited from

[PointerEvent](PointerEvent.md).[type](PointerEvent.md#type)

#### Defined in

[src/leafer/packages/event/src/Event.ts:9](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/event/src/Event.ts#L9)

___

### phase

• `Readonly` **phase**: `number`

#### Implementation of

[IRotateEvent](../interfaces/IRotateEvent.md).[phase](../interfaces/IRotateEvent.md#phase)

#### Inherited from

[PointerEvent](PointerEvent.md).[phase](PointerEvent.md#phase)

#### Defined in

[src/leafer/packages/event/src/Event.ts:14](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/event/src/Event.ts#L14)

___

### isStopDefault

• **isStopDefault**: `boolean`

#### Implementation of

[IRotateEvent](../interfaces/IRotateEvent.md).[isStopDefault](../interfaces/IRotateEvent.md#isstopdefault)

#### Inherited from

[PointerEvent](PointerEvent.md).[isStopDefault](PointerEvent.md#isstopdefault)

#### Defined in

[src/leafer/packages/event/src/Event.ts:16](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/event/src/Event.ts#L16)

___

### isStop

• **isStop**: `boolean`

#### Implementation of

[IRotateEvent](../interfaces/IRotateEvent.md).[isStop](../interfaces/IRotateEvent.md#isstop)

#### Inherited from

[PointerEvent](PointerEvent.md).[isStop](PointerEvent.md#isstop)

#### Defined in

[src/leafer/packages/event/src/Event.ts:17](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/event/src/Event.ts#L17)

___

### isStopNow

• **isStopNow**: `boolean`

#### Implementation of

[IRotateEvent](../interfaces/IRotateEvent.md).[isStopNow](../interfaces/IRotateEvent.md#isstopnow)

#### Inherited from

[PointerEvent](PointerEvent.md).[isStopNow](PointerEvent.md#isstopnow)

#### Defined in

[src/leafer/packages/event/src/Event.ts:18](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/event/src/Event.ts#L18)

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

[IRotateEvent](../interfaces/IRotateEvent.md).[width](../interfaces/IRotateEvent.md#width)

#### Inherited from

[PointerEvent](PointerEvent.md).[width](PointerEvent.md#width)

#### Defined in

[src/ui/packages/event/src/PointerEvent.ts:38](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/event/src/PointerEvent.ts#L38)

___

### height

• `Readonly` **height**: `number`

#### Implementation of

[IRotateEvent](../interfaces/IRotateEvent.md).[height](../interfaces/IRotateEvent.md#height)

#### Inherited from

[PointerEvent](PointerEvent.md).[height](PointerEvent.md#height)

#### Defined in

[src/ui/packages/event/src/PointerEvent.ts:39](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/event/src/PointerEvent.ts#L39)

___

### pointerType

• `Readonly` **pointerType**: [`PointerType`](../modules.md#pointertype)

#### Implementation of

[IRotateEvent](../interfaces/IRotateEvent.md).[pointerType](../interfaces/IRotateEvent.md#pointertype)

#### Inherited from

[PointerEvent](PointerEvent.md).[pointerType](PointerEvent.md#pointertype)

#### Defined in

[src/ui/packages/event/src/PointerEvent.ts:40](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/event/src/PointerEvent.ts#L40)

___

### moving

• `Optional` `Readonly` **moving**: `boolean`

#### Implementation of

[IRotateEvent](../interfaces/IRotateEvent.md).[moving](../interfaces/IRotateEvent.md#moving)

#### Inherited from

[PointerEvent](PointerEvent.md).[moving](PointerEvent.md#moving)

#### Defined in

[src/ui/packages/event/src/PointerEvent.ts:41](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/event/src/PointerEvent.ts#L41)

___

### dragging

• `Optional` `Readonly` **dragging**: `boolean`

#### Implementation of

[IRotateEvent](../interfaces/IRotateEvent.md).[dragging](../interfaces/IRotateEvent.md#dragging)

#### Inherited from

[PointerEvent](PointerEvent.md).[dragging](PointerEvent.md#dragging)

#### Defined in

[src/ui/packages/event/src/PointerEvent.ts:42](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/event/src/PointerEvent.ts#L42)

___

### multiTouch

• `Optional` `Readonly` **multiTouch**: `boolean`

#### Implementation of

[IRotateEvent](../interfaces/IRotateEvent.md).[multiTouch](../interfaces/IRotateEvent.md#multitouch)

#### Inherited from

[PointerEvent](PointerEvent.md).[multiTouch](PointerEvent.md#multitouch)

#### Defined in

[src/ui/packages/event/src/PointerEvent.ts:43](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/event/src/PointerEvent.ts#L43)

___

### pressure

• `Readonly` **pressure**: `number`

#### Implementation of

[IRotateEvent](../interfaces/IRotateEvent.md).[pressure](../interfaces/IRotateEvent.md#pressure)

#### Inherited from

[PointerEvent](PointerEvent.md).[pressure](PointerEvent.md#pressure)

#### Defined in

[src/ui/packages/event/src/PointerEvent.ts:44](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/event/src/PointerEvent.ts#L44)

___

### tangentialPressure

• `Optional` `Readonly` **tangentialPressure**: `number`

#### Implementation of

[IRotateEvent](../interfaces/IRotateEvent.md).[tangentialPressure](../interfaces/IRotateEvent.md#tangentialpressure)

#### Inherited from

[PointerEvent](PointerEvent.md).[tangentialPressure](PointerEvent.md#tangentialpressure)

#### Defined in

[src/ui/packages/event/src/PointerEvent.ts:45](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/event/src/PointerEvent.ts#L45)

___

### tiltX

• `Optional` `Readonly` **tiltX**: `number`

#### Implementation of

[IRotateEvent](../interfaces/IRotateEvent.md).[tiltX](../interfaces/IRotateEvent.md#tiltx)

#### Inherited from

[PointerEvent](PointerEvent.md).[tiltX](PointerEvent.md#tiltx)

#### Defined in

[src/ui/packages/event/src/PointerEvent.ts:46](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/event/src/PointerEvent.ts#L46)

___

### tiltY

• `Optional` `Readonly` **tiltY**: `number`

#### Implementation of

[IRotateEvent](../interfaces/IRotateEvent.md).[tiltY](../interfaces/IRotateEvent.md#tilty)

#### Inherited from

[PointerEvent](PointerEvent.md).[tiltY](PointerEvent.md#tilty)

#### Defined in

[src/ui/packages/event/src/PointerEvent.ts:47](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/event/src/PointerEvent.ts#L47)

___

### twist

• `Optional` `Readonly` **twist**: `number`

#### Implementation of

[IRotateEvent](../interfaces/IRotateEvent.md).[twist](../interfaces/IRotateEvent.md#twist)

#### Inherited from

[PointerEvent](PointerEvent.md).[twist](PointerEvent.md#twist)

#### Defined in

[src/ui/packages/event/src/PointerEvent.ts:48](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/event/src/PointerEvent.ts#L48)

___

### BEFORE\_ROTATE

▪ `Static` **BEFORE\_ROTATE**: `string` = `'rotate.before_rotate'`

#### Defined in

[src/ui/packages/event/src/RotateEvent.ts:10](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/event/src/RotateEvent.ts#L10)

___

### START

▪ `Static` **START**: `string` = `'rotate.start'`

#### Defined in

[src/ui/packages/event/src/RotateEvent.ts:12](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/event/src/RotateEvent.ts#L12)

___

### ROTATE

▪ `Static` **ROTATE**: `string` = `'rotate'`

#### Defined in

[src/ui/packages/event/src/RotateEvent.ts:13](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/event/src/RotateEvent.ts#L13)

___

### END

▪ `Static` **END**: `string` = `'rotate.end'`

#### Defined in

[src/ui/packages/event/src/RotateEvent.ts:14](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/event/src/RotateEvent.ts#L14)

___

### rotation

• `Readonly` **rotation**: `number`

#### Implementation of

[IRotateEvent](../interfaces/IRotateEvent.md).[rotation](../interfaces/IRotateEvent.md#rotation)

#### Defined in

[src/ui/packages/event/src/RotateEvent.ts:16](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/event/src/RotateEvent.ts#L16)

___

### totalRotation

• `Readonly` **totalRotation**: `number`

#### Implementation of

[IRotateEvent](../interfaces/IRotateEvent.md).[totalRotation](../interfaces/IRotateEvent.md#totalrotation)

#### Defined in

[src/ui/packages/event/src/RotateEvent.ts:17](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/event/src/RotateEvent.ts#L17)

___

### x

• `Readonly` **x**: `number`

#### Implementation of

[IRotateEvent](../interfaces/IRotateEvent.md).[x](../interfaces/IRotateEvent.md#x)

#### Inherited from

[PointerEvent](PointerEvent.md).[x](PointerEvent.md#x)

#### Defined in

[src/ui/packages/event/src/UIEvent.ts:10](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/event/src/UIEvent.ts#L10)

___

### y

• `Readonly` **y**: `number`

#### Implementation of

[IRotateEvent](../interfaces/IRotateEvent.md).[y](../interfaces/IRotateEvent.md#y)

#### Inherited from

[PointerEvent](PointerEvent.md).[y](PointerEvent.md#y)

#### Defined in

[src/ui/packages/event/src/UIEvent.ts:11](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/event/src/UIEvent.ts#L11)

___

### path

• `Readonly` **path**: [`ILeafList`](../interfaces/ILeafList.md)

#### Implementation of

[IRotateEvent](../interfaces/IRotateEvent.md).[path](../interfaces/IRotateEvent.md#path)

#### Inherited from

[PointerEvent](PointerEvent.md).[path](PointerEvent.md#path)

#### Defined in

[src/ui/packages/event/src/UIEvent.ts:13](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/event/src/UIEvent.ts#L13)

___

### throughPath

• `Optional` `Readonly` **throughPath**: [`ILeafList`](../interfaces/ILeafList.md)

#### Implementation of

[IRotateEvent](../interfaces/IRotateEvent.md).[throughPath](../interfaces/IRotateEvent.md#throughpath)

#### Inherited from

[PointerEvent](PointerEvent.md).[throughPath](PointerEvent.md#throughpath)

#### Defined in

[src/ui/packages/event/src/UIEvent.ts:14](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/event/src/UIEvent.ts#L14)

___

### altKey

• `Readonly` **altKey**: `boolean`

#### Implementation of

[IRotateEvent](../interfaces/IRotateEvent.md).[altKey](../interfaces/IRotateEvent.md#altkey)

#### Inherited from

[PointerEvent](PointerEvent.md).[altKey](PointerEvent.md#altkey)

#### Defined in

[src/ui/packages/event/src/UIEvent.ts:16](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/event/src/UIEvent.ts#L16)

___

### ctrlKey

• `Readonly` **ctrlKey**: `boolean`

#### Implementation of

[IRotateEvent](../interfaces/IRotateEvent.md).[ctrlKey](../interfaces/IRotateEvent.md#ctrlkey)

#### Inherited from

[PointerEvent](PointerEvent.md).[ctrlKey](PointerEvent.md#ctrlkey)

#### Defined in

[src/ui/packages/event/src/UIEvent.ts:17](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/event/src/UIEvent.ts#L17)

___

### shiftKey

• `Readonly` **shiftKey**: `boolean`

#### Implementation of

[IRotateEvent](../interfaces/IRotateEvent.md).[shiftKey](../interfaces/IRotateEvent.md#shiftkey)

#### Inherited from

[PointerEvent](PointerEvent.md).[shiftKey](PointerEvent.md#shiftkey)

#### Defined in

[src/ui/packages/event/src/UIEvent.ts:18](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/event/src/UIEvent.ts#L18)

___

### metaKey

• `Readonly` **metaKey**: `boolean`

#### Implementation of

[IRotateEvent](../interfaces/IRotateEvent.md).[metaKey](../interfaces/IRotateEvent.md#metakey)

#### Inherited from

[PointerEvent](PointerEvent.md).[metaKey](PointerEvent.md#metakey)

#### Defined in

[src/ui/packages/event/src/UIEvent.ts:19](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/event/src/UIEvent.ts#L19)

___

### buttons

• `Readonly` **buttons**: `number`

#### Implementation of

[IRotateEvent](../interfaces/IRotateEvent.md).[buttons](../interfaces/IRotateEvent.md#buttons)

#### Inherited from

[PointerEvent](PointerEvent.md).[buttons](PointerEvent.md#buttons)

#### Defined in

[src/ui/packages/event/src/UIEvent.ts:25](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/event/src/UIEvent.ts#L25)

___

### target

• `Readonly` **target**: [`ILeaf`](../interfaces/ILeaf.md)

#### Implementation of

[IRotateEvent](../interfaces/IRotateEvent.md).[target](../interfaces/IRotateEvent.md#target)

#### Inherited from

[PointerEvent](PointerEvent.md).[target](PointerEvent.md#target)

#### Defined in

[src/ui/packages/event/src/UIEvent.ts:27](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/event/src/UIEvent.ts#L27)

___

### current

• `Readonly` **current**: [`ILeaf`](../interfaces/ILeaf.md)

#### Implementation of

[IRotateEvent](../interfaces/IRotateEvent.md).[current](../interfaces/IRotateEvent.md#current)

#### Inherited from

[PointerEvent](PointerEvent.md).[current](PointerEvent.md#current)

#### Defined in

[src/ui/packages/event/src/UIEvent.ts:28](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/event/src/UIEvent.ts#L28)

___

### bubbles

• `Readonly` **bubbles**: `boolean` = `true`

#### Implementation of

[IRotateEvent](../interfaces/IRotateEvent.md).[bubbles](../interfaces/IRotateEvent.md#bubbles)

#### Inherited from

[PointerEvent](PointerEvent.md).[bubbles](PointerEvent.md#bubbles)

#### Defined in

[src/ui/packages/event/src/UIEvent.ts:29](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/event/src/UIEvent.ts#L29)

___

### time

• `Readonly` **time**: `number`

#### Implementation of

[IRotateEvent](../interfaces/IRotateEvent.md).[time](../interfaces/IRotateEvent.md#time)

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

[IRotateEvent](../interfaces/IRotateEvent.md).[spaceKey](../interfaces/IRotateEvent.md#spacekey)

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

[IRotateEvent](../interfaces/IRotateEvent.md).[left](../interfaces/IRotateEvent.md#left)

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

[IRotateEvent](../interfaces/IRotateEvent.md).[right](../interfaces/IRotateEvent.md#right)

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

[IRotateEvent](../interfaces/IRotateEvent.md).[middle](../interfaces/IRotateEvent.md#middle)

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

[IRotateEvent](../interfaces/IRotateEvent.md).[stopDefault](../interfaces/IRotateEvent.md#stopdefault)

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

[IRotateEvent](../interfaces/IRotateEvent.md).[stopNow](../interfaces/IRotateEvent.md#stopnow)

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

[IRotateEvent](../interfaces/IRotateEvent.md).[stop](../interfaces/IRotateEvent.md#stop)

#### Inherited from

[PointerEvent](PointerEvent.md).[stop](PointerEvent.md#stop)

#### Defined in

[src/leafer/packages/event/src/Event.ts:36](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/event/src/Event.ts#L36)

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

[IRotateEvent](../interfaces/IRotateEvent.md).[isHoldKeys](../interfaces/IRotateEvent.md#isholdkeys)

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

[IRotateEvent](../interfaces/IRotateEvent.md).[getBoxPoint](../interfaces/IRotateEvent.md#getboxpoint)

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

[IRotateEvent](../interfaces/IRotateEvent.md).[getInnerPoint](../interfaces/IRotateEvent.md#getinnerpoint)

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

[IRotateEvent](../interfaces/IRotateEvent.md).[getLocalPoint](../interfaces/IRotateEvent.md#getlocalpoint)

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

[IRotateEvent](../interfaces/IRotateEvent.md).[getPagePoint](../interfaces/IRotateEvent.md#getpagepoint)

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

[IRotateEvent](../interfaces/IRotateEvent.md).[getInner](../interfaces/IRotateEvent.md#getinner)

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

[IRotateEvent](../interfaces/IRotateEvent.md).[getLocal](../interfaces/IRotateEvent.md#getlocal)

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

[IRotateEvent](../interfaces/IRotateEvent.md).[getPage](../interfaces/IRotateEvent.md#getpage)

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
