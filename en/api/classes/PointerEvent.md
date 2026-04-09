# Class: PointerEvent

## Hierarchy

- [`UIEvent`](UIEvent.md)

  ↳ **`PointerEvent`**

  ↳↳ [`DragEvent`](DragEvent.md)

  ↳↳ [`DropEvent`](DropEvent.md)

  ↳↳ [`RotateEvent`](RotateEvent.md)

  ↳↳ [`ZoomEvent`](ZoomEvent.md)

## Implements

- [`IPointerEvent`](../interfaces/IPointerEvent.md)

## Table of contents

### Constructors

- [constructor](PointerEvent.md#constructor)

### Properties

- [origin](PointerEvent.md#origin)
- [type](PointerEvent.md#type)
- [phase](PointerEvent.md#phase)
- [isStopDefault](PointerEvent.md#isstopdefault)
- [isStop](PointerEvent.md#isstop)
- [isStopNow](PointerEvent.md#isstopnow)
- [POINTER](PointerEvent.md#pointer)
- [BEFORE\_DOWN](PointerEvent.md#before_down)
- [BEFORE\_MOVE](PointerEvent.md#before_move)
- [BEFORE\_UP](PointerEvent.md#before_up)
- [DOWN](PointerEvent.md#down)
- [MOVE](PointerEvent.md#move)
- [UP](PointerEvent.md#up)
- [OVER](PointerEvent.md#over)
- [OUT](PointerEvent.md#out)
- [ENTER](PointerEvent.md#enter)
- [LEAVE](PointerEvent.md#leave)
- [TAP](PointerEvent.md#tap)
- [DOUBLE\_TAP](PointerEvent.md#double_tap)
- [CLICK](PointerEvent.md#click)
- [DOUBLE\_CLICK](PointerEvent.md#double_click)
- [LONG\_PRESS](PointerEvent.md#long_press)
- [LONG\_TAP](PointerEvent.md#long_tap)
- [MENU](PointerEvent.md#menu)
- [MENU\_TAP](PointerEvent.md#menu_tap)
- [width](PointerEvent.md#width)
- [height](PointerEvent.md#height)
- [pointerType](PointerEvent.md#pointertype)
- [moving](PointerEvent.md#moving)
- [dragging](PointerEvent.md#dragging)
- [multiTouch](PointerEvent.md#multitouch)
- [pressure](PointerEvent.md#pressure)
- [tangentialPressure](PointerEvent.md#tangentialpressure)
- [tiltX](PointerEvent.md#tiltx)
- [tiltY](PointerEvent.md#tilty)
- [twist](PointerEvent.md#twist)
- [x](PointerEvent.md#x)
- [y](PointerEvent.md#y)
- [path](PointerEvent.md#path)
- [throughPath](PointerEvent.md#throughpath)
- [altKey](PointerEvent.md#altkey)
- [ctrlKey](PointerEvent.md#ctrlkey)
- [shiftKey](PointerEvent.md#shiftkey)
- [metaKey](PointerEvent.md#metakey)
- [buttons](PointerEvent.md#buttons)
- [target](PointerEvent.md#target)
- [current](PointerEvent.md#current)
- [bubbles](PointerEvent.md#bubbles)
- [time](PointerEvent.md#time)

### Accessors

- [spaceKey](PointerEvent.md#spacekey)
- [left](PointerEvent.md#left)
- [right](PointerEvent.md#right)
- [middle](PointerEvent.md#middle)

### Methods

- [stopDefault](PointerEvent.md#stopdefault)
- [stopNow](PointerEvent.md#stopnow)
- [stop](PointerEvent.md#stop)
- [isHoldKeys](PointerEvent.md#isholdkeys)
- [getBoxPoint](PointerEvent.md#getboxpoint)
- [getInnerPoint](PointerEvent.md#getinnerpoint)
- [getLocalPoint](PointerEvent.md#getlocalpoint)
- [getPagePoint](PointerEvent.md#getpagepoint)
- [getInner](PointerEvent.md#getinner)
- [getLocal](PointerEvent.md#getlocal)
- [getPage](PointerEvent.md#getpage)
- [changeName](PointerEvent.md#changename)

## Constructors

### constructor

• **new PointerEvent**(`params`): [`PointerEvent`](PointerEvent.md)

#### Parameters

| Name     | Type                                    |
| :------- | :-------------------------------------- |
| `params` | [`IUIEvent`](../interfaces/IUIEvent.md) |

#### Returns

[`PointerEvent`](PointerEvent.md)

#### Inherited from

[UIEvent](UIEvent.md).[constructor](UIEvent.md#constructor)

#### Defined in

[src/ui/packages/event/src/UIEvent.ts:33](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/event/src/UIEvent.ts#L33)

## Properties

### origin

• `Readonly` **origin**: [`IObject`](../interfaces/IObject.md)

#### Implementation of

[IPointerEvent](../interfaces/IPointerEvent.md).[origin](../interfaces/IPointerEvent.md#origin)

#### Inherited from

[UIEvent](UIEvent.md).[origin](UIEvent.md#origin)

#### Defined in

[src/leafer/packages/event/src/Event.ts:7](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/event/src/Event.ts#L7)

___

### type

• `Readonly` **type**: `string`

#### Implementation of

[IPointerEvent](../interfaces/IPointerEvent.md).[type](../interfaces/IPointerEvent.md#type)

#### Inherited from

[UIEvent](UIEvent.md).[type](UIEvent.md#type)

#### Defined in

[src/leafer/packages/event/src/Event.ts:9](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/event/src/Event.ts#L9)

___

### phase

• `Readonly` **phase**: `number`

#### Implementation of

[IPointerEvent](../interfaces/IPointerEvent.md).[phase](../interfaces/IPointerEvent.md#phase)

#### Inherited from

[UIEvent](UIEvent.md).[phase](UIEvent.md#phase)

#### Defined in

[src/leafer/packages/event/src/Event.ts:14](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/event/src/Event.ts#L14)

___

### isStopDefault

• **isStopDefault**: `boolean`

#### Implementation of

[IPointerEvent](../interfaces/IPointerEvent.md).[isStopDefault](../interfaces/IPointerEvent.md#isstopdefault)

#### Inherited from

[UIEvent](UIEvent.md).[isStopDefault](UIEvent.md#isstopdefault)

#### Defined in

[src/leafer/packages/event/src/Event.ts:16](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/event/src/Event.ts#L16)

___

### isStop

• **isStop**: `boolean`

#### Implementation of

[IPointerEvent](../interfaces/IPointerEvent.md).[isStop](../interfaces/IPointerEvent.md#isstop)

#### Inherited from

[UIEvent](UIEvent.md).[isStop](UIEvent.md#isstop)

#### Defined in

[src/leafer/packages/event/src/Event.ts:17](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/event/src/Event.ts#L17)

___

### isStopNow

• **isStopNow**: `boolean`

#### Implementation of

[IPointerEvent](../interfaces/IPointerEvent.md).[isStopNow](../interfaces/IPointerEvent.md#isstopnow)

#### Inherited from

[UIEvent](UIEvent.md).[isStopNow](UIEvent.md#isstopnow)

#### Defined in

[src/leafer/packages/event/src/Event.ts:18](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/event/src/Event.ts#L18)

___

### POINTER

▪ `Static` **POINTER**: `string` = `'pointer'`

#### Defined in

[src/ui/packages/event/src/PointerEvent.ts:10](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/event/src/PointerEvent.ts#L10)

___

### BEFORE\_DOWN

▪ `Static` **BEFORE\_DOWN**: `string` = `'pointer.before_down'`

#### Defined in

[src/ui/packages/event/src/PointerEvent.ts:12](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/event/src/PointerEvent.ts#L12)

___

### BEFORE\_MOVE

▪ `Static` **BEFORE\_MOVE**: `string` = `'pointer.before_move'`

#### Defined in

[src/ui/packages/event/src/PointerEvent.ts:13](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/event/src/PointerEvent.ts#L13)

___

### BEFORE\_UP

▪ `Static` **BEFORE\_UP**: `string` = `'pointer.before_up'`

#### Defined in

[src/ui/packages/event/src/PointerEvent.ts:14](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/event/src/PointerEvent.ts#L14)

___

### DOWN

▪ `Static` **DOWN**: `string` = `'pointer.down'`

#### Defined in

[src/ui/packages/event/src/PointerEvent.ts:16](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/event/src/PointerEvent.ts#L16)

___

### MOVE

▪ `Static` **MOVE**: `string` = `'pointer.move'`

#### Defined in

[src/ui/packages/event/src/PointerEvent.ts:17](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/event/src/PointerEvent.ts#L17)

___

### UP

▪ `Static` **UP**: `string` = `'pointer.up'`

#### Defined in

[src/ui/packages/event/src/PointerEvent.ts:18](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/event/src/PointerEvent.ts#L18)

___

### OVER

▪ `Static` **OVER**: `string` = `'pointer.over'`

#### Defined in

[src/ui/packages/event/src/PointerEvent.ts:20](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/event/src/PointerEvent.ts#L20)

___

### OUT

▪ `Static` **OUT**: `string` = `'pointer.out'`

#### Defined in

[src/ui/packages/event/src/PointerEvent.ts:21](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/event/src/PointerEvent.ts#L21)

___

### ENTER

▪ `Static` **ENTER**: `string` = `'pointer.enter'`

#### Defined in

[src/ui/packages/event/src/PointerEvent.ts:23](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/event/src/PointerEvent.ts#L23)

___

### LEAVE

▪ `Static` **LEAVE**: `string` = `'pointer.leave'`

#### Defined in

[src/ui/packages/event/src/PointerEvent.ts:24](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/event/src/PointerEvent.ts#L24)

___

### TAP

▪ `Static` **TAP**: `string` = `'tap'`

#### Defined in

[src/ui/packages/event/src/PointerEvent.ts:26](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/event/src/PointerEvent.ts#L26)

___

### DOUBLE\_TAP

▪ `Static` **DOUBLE\_TAP**: `string` = `'double_tap'`

#### Defined in

[src/ui/packages/event/src/PointerEvent.ts:27](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/event/src/PointerEvent.ts#L27)

___

### CLICK

▪ `Static` **CLICK**: `string` = `'click'`

#### Defined in

[src/ui/packages/event/src/PointerEvent.ts:29](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/event/src/PointerEvent.ts#L29)

___

### DOUBLE\_CLICK

▪ `Static` **DOUBLE\_CLICK**: `string` = `'double_click'`

#### Defined in

[src/ui/packages/event/src/PointerEvent.ts:30](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/event/src/PointerEvent.ts#L30)

___

### LONG\_PRESS

▪ `Static` **LONG\_PRESS**: `string` = `'long_press'`

#### Defined in

[src/ui/packages/event/src/PointerEvent.ts:32](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/event/src/PointerEvent.ts#L32)

___

### LONG\_TAP

▪ `Static` **LONG\_TAP**: `string` = `'long_tap'`

#### Defined in

[src/ui/packages/event/src/PointerEvent.ts:33](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/event/src/PointerEvent.ts#L33)

___

### MENU

▪ `Static` **MENU**: `string` = `'pointer.menu'`

#### Defined in

[src/ui/packages/event/src/PointerEvent.ts:35](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/event/src/PointerEvent.ts#L35)

___

### MENU\_TAP

▪ `Static` **MENU\_TAP**: `string` = `'pointer.menu_tap'`

#### Defined in

[src/ui/packages/event/src/PointerEvent.ts:36](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/event/src/PointerEvent.ts#L36)

___

### width

• `Readonly` **width**: `number`

#### Implementation of

[IPointerEvent](../interfaces/IPointerEvent.md).[width](../interfaces/IPointerEvent.md#width)

#### Defined in

[src/ui/packages/event/src/PointerEvent.ts:38](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/event/src/PointerEvent.ts#L38)

___

### height

• `Readonly` **height**: `number`

#### Implementation of

[IPointerEvent](../interfaces/IPointerEvent.md).[height](../interfaces/IPointerEvent.md#height)

#### Defined in

[src/ui/packages/event/src/PointerEvent.ts:39](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/event/src/PointerEvent.ts#L39)

___

### pointerType

• `Readonly` **pointerType**: [`PointerType`](../modules.md#pointertype)

#### Implementation of

[IPointerEvent](../interfaces/IPointerEvent.md).[pointerType](../interfaces/IPointerEvent.md#pointertype)

#### Defined in

[src/ui/packages/event/src/PointerEvent.ts:40](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/event/src/PointerEvent.ts#L40)

___

### moving

• `Optional` `Readonly` **moving**: `boolean`

#### Implementation of

[IPointerEvent](../interfaces/IPointerEvent.md).[moving](../interfaces/IPointerEvent.md#moving)

#### Defined in

[src/ui/packages/event/src/PointerEvent.ts:41](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/event/src/PointerEvent.ts#L41)

___

### dragging

• `Optional` `Readonly` **dragging**: `boolean`

#### Implementation of

[IPointerEvent](../interfaces/IPointerEvent.md).[dragging](../interfaces/IPointerEvent.md#dragging)

#### Defined in

[src/ui/packages/event/src/PointerEvent.ts:42](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/event/src/PointerEvent.ts#L42)

___

### multiTouch

• `Optional` `Readonly` **multiTouch**: `boolean`

#### Implementation of

[IPointerEvent](../interfaces/IPointerEvent.md).[multiTouch](../interfaces/IPointerEvent.md#multitouch)

#### Defined in

[src/ui/packages/event/src/PointerEvent.ts:43](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/event/src/PointerEvent.ts#L43)

___

### pressure

• `Readonly` **pressure**: `number`

#### Implementation of

[IPointerEvent](../interfaces/IPointerEvent.md).[pressure](../interfaces/IPointerEvent.md#pressure)

#### Defined in

[src/ui/packages/event/src/PointerEvent.ts:44](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/event/src/PointerEvent.ts#L44)

___

### tangentialPressure

• `Optional` `Readonly` **tangentialPressure**: `number`

#### Implementation of

[IPointerEvent](../interfaces/IPointerEvent.md).[tangentialPressure](../interfaces/IPointerEvent.md#tangentialpressure)

#### Defined in

[src/ui/packages/event/src/PointerEvent.ts:45](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/event/src/PointerEvent.ts#L45)

___

### tiltX

• `Optional` `Readonly` **tiltX**: `number`

#### Implementation of

[IPointerEvent](../interfaces/IPointerEvent.md).[tiltX](../interfaces/IPointerEvent.md#tiltx)

#### Defined in

[src/ui/packages/event/src/PointerEvent.ts:46](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/event/src/PointerEvent.ts#L46)

___

### tiltY

• `Optional` `Readonly` **tiltY**: `number`

#### Implementation of

[IPointerEvent](../interfaces/IPointerEvent.md).[tiltY](../interfaces/IPointerEvent.md#tilty)

#### Defined in

[src/ui/packages/event/src/PointerEvent.ts:47](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/event/src/PointerEvent.ts#L47)

___

### twist

• `Optional` `Readonly` **twist**: `number`

#### Implementation of

[IPointerEvent](../interfaces/IPointerEvent.md).[twist](../interfaces/IPointerEvent.md#twist)

#### Defined in

[src/ui/packages/event/src/PointerEvent.ts:48](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/event/src/PointerEvent.ts#L48)

___

### x

• `Readonly` **x**: `number`

#### Implementation of

[IPointerEvent](../interfaces/IPointerEvent.md).[x](../interfaces/IPointerEvent.md#x)

#### Inherited from

[UIEvent](UIEvent.md).[x](UIEvent.md#x)

#### Defined in

[src/ui/packages/event/src/UIEvent.ts:10](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/event/src/UIEvent.ts#L10)

___

### y

• `Readonly` **y**: `number`

#### Implementation of

[IPointerEvent](../interfaces/IPointerEvent.md).[y](../interfaces/IPointerEvent.md#y)

#### Inherited from

[UIEvent](UIEvent.md).[y](UIEvent.md#y)

#### Defined in

[src/ui/packages/event/src/UIEvent.ts:11](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/event/src/UIEvent.ts#L11)

___

### path

• `Readonly` **path**: [`ILeafList`](../interfaces/ILeafList.md)

#### Implementation of

[IPointerEvent](../interfaces/IPointerEvent.md).[path](../interfaces/IPointerEvent.md#path)

#### Inherited from

[UIEvent](UIEvent.md).[path](UIEvent.md#path)

#### Defined in

[src/ui/packages/event/src/UIEvent.ts:13](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/event/src/UIEvent.ts#L13)

___

### throughPath

• `Optional` `Readonly` **throughPath**: [`ILeafList`](../interfaces/ILeafList.md)

#### Implementation of

[IPointerEvent](../interfaces/IPointerEvent.md).[throughPath](../interfaces/IPointerEvent.md#throughpath)

#### Inherited from

[UIEvent](UIEvent.md).[throughPath](UIEvent.md#throughpath)

#### Defined in

[src/ui/packages/event/src/UIEvent.ts:14](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/event/src/UIEvent.ts#L14)

___

### altKey

• `Readonly` **altKey**: `boolean`

#### Implementation of

[IPointerEvent](../interfaces/IPointerEvent.md).[altKey](../interfaces/IPointerEvent.md#altkey)

#### Inherited from

[UIEvent](UIEvent.md).[altKey](UIEvent.md#altkey)

#### Defined in

[src/ui/packages/event/src/UIEvent.ts:16](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/event/src/UIEvent.ts#L16)

___

### ctrlKey

• `Readonly` **ctrlKey**: `boolean`

#### Implementation of

[IPointerEvent](../interfaces/IPointerEvent.md).[ctrlKey](../interfaces/IPointerEvent.md#ctrlkey)

#### Inherited from

[UIEvent](UIEvent.md).[ctrlKey](UIEvent.md#ctrlkey)

#### Defined in

[src/ui/packages/event/src/UIEvent.ts:17](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/event/src/UIEvent.ts#L17)

___

### shiftKey

• `Readonly` **shiftKey**: `boolean`

#### Implementation of

[IPointerEvent](../interfaces/IPointerEvent.md).[shiftKey](../interfaces/IPointerEvent.md#shiftkey)

#### Inherited from

[UIEvent](UIEvent.md).[shiftKey](UIEvent.md#shiftkey)

#### Defined in

[src/ui/packages/event/src/UIEvent.ts:18](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/event/src/UIEvent.ts#L18)

___

### metaKey

• `Readonly` **metaKey**: `boolean`

#### Implementation of

[IPointerEvent](../interfaces/IPointerEvent.md).[metaKey](../interfaces/IPointerEvent.md#metakey)

#### Inherited from

[UIEvent](UIEvent.md).[metaKey](UIEvent.md#metakey)

#### Defined in

[src/ui/packages/event/src/UIEvent.ts:19](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/event/src/UIEvent.ts#L19)

___

### buttons

• `Readonly` **buttons**: `number`

#### Implementation of

[IPointerEvent](../interfaces/IPointerEvent.md).[buttons](../interfaces/IPointerEvent.md#buttons)

#### Inherited from

[UIEvent](UIEvent.md).[buttons](UIEvent.md#buttons)

#### Defined in

[src/ui/packages/event/src/UIEvent.ts:25](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/event/src/UIEvent.ts#L25)

___

### target

• `Readonly` **target**: [`ILeaf`](../interfaces/ILeaf.md)

#### Implementation of

[IPointerEvent](../interfaces/IPointerEvent.md).[target](../interfaces/IPointerEvent.md#target)

#### Inherited from

[UIEvent](UIEvent.md).[target](UIEvent.md#target)

#### Defined in

[src/ui/packages/event/src/UIEvent.ts:27](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/event/src/UIEvent.ts#L27)

___

### current

• `Readonly` **current**: [`ILeaf`](../interfaces/ILeaf.md)

#### Implementation of

[IPointerEvent](../interfaces/IPointerEvent.md).[current](../interfaces/IPointerEvent.md#current)

#### Inherited from

[UIEvent](UIEvent.md).[current](UIEvent.md#current)

#### Defined in

[src/ui/packages/event/src/UIEvent.ts:28](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/event/src/UIEvent.ts#L28)

___

### bubbles

• `Readonly` **bubbles**: `boolean` = `true`

#### Implementation of

[IPointerEvent](../interfaces/IPointerEvent.md).[bubbles](../interfaces/IPointerEvent.md#bubbles)

#### Inherited from

[UIEvent](UIEvent.md).[bubbles](UIEvent.md#bubbles)

#### Defined in

[src/ui/packages/event/src/UIEvent.ts:29](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/event/src/UIEvent.ts#L29)

___

### time

• `Readonly` **time**: `number`

#### Implementation of

[IPointerEvent](../interfaces/IPointerEvent.md).[time](../interfaces/IPointerEvent.md#time)

#### Inherited from

[UIEvent](UIEvent.md).[time](UIEvent.md#time)

#### Defined in

[src/ui/packages/event/src/UIEvent.ts:31](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/event/src/UIEvent.ts#L31)

## Accessors

### spaceKey

• `get` **spaceKey**(): `boolean`

#### Returns

`boolean`

#### Implementation of

[IPointerEvent](../interfaces/IPointerEvent.md).[spaceKey](../interfaces/IPointerEvent.md#spacekey)

#### Inherited from

UIEvent.spaceKey

#### Defined in

[src/ui/packages/event/src/UIEvent.ts:20](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/event/src/UIEvent.ts#L20)

___

### left

• `get` **left**(): `boolean`

#### Returns

`boolean`

#### Implementation of

[IPointerEvent](../interfaces/IPointerEvent.md).[left](../interfaces/IPointerEvent.md#left)

#### Inherited from

UIEvent.left

#### Defined in

[src/ui/packages/event/src/UIEvent.ts:22](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/event/src/UIEvent.ts#L22)

___

### right

• `get` **right**(): `boolean`

#### Returns

`boolean`

#### Implementation of

[IPointerEvent](../interfaces/IPointerEvent.md).[right](../interfaces/IPointerEvent.md#right)

#### Inherited from

UIEvent.right

#### Defined in

[src/ui/packages/event/src/UIEvent.ts:23](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/event/src/UIEvent.ts#L23)

___

### middle

• `get` **middle**(): `boolean`

#### Returns

`boolean`

#### Implementation of

[IPointerEvent](../interfaces/IPointerEvent.md).[middle](../interfaces/IPointerEvent.md#middle)

#### Inherited from

UIEvent.middle

#### Defined in

[src/ui/packages/event/src/UIEvent.ts:24](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/event/src/UIEvent.ts#L24)

## Methods

### stopDefault

▸ **stopDefault**(): `void`

#### Returns

`void`

#### Implementation of

[IPointerEvent](../interfaces/IPointerEvent.md).[stopDefault](../interfaces/IPointerEvent.md#stopdefault)

#### Inherited from

[UIEvent](UIEvent.md).[stopDefault](UIEvent.md#stopdefault)

#### Defined in

[src/leafer/packages/event/src/Event.ts:25](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/event/src/Event.ts#L25)

___

### stopNow

▸ **stopNow**(): `void`

#### Returns

`void`

#### Implementation of

[IPointerEvent](../interfaces/IPointerEvent.md).[stopNow](../interfaces/IPointerEvent.md#stopnow)

#### Inherited from

[UIEvent](UIEvent.md).[stopNow](UIEvent.md#stopnow)

#### Defined in

[src/leafer/packages/event/src/Event.ts:30](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/event/src/Event.ts#L30)

___

### stop

▸ **stop**(): `void`

#### Returns

`void`

#### Implementation of

[IPointerEvent](../interfaces/IPointerEvent.md).[stop](../interfaces/IPointerEvent.md#stop)

#### Inherited from

[UIEvent](UIEvent.md).[stop](UIEvent.md#stop)

#### Defined in

[src/leafer/packages/event/src/Event.ts:36](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/event/src/Event.ts#L36)

___

### isHoldKeys

▸ **isHoldKeys**(`shortcutKeys?`): `boolean`

#### Parameters

| Name            | Type                                                                                                            |
| :-------------- | :-------------------------------------------------------------------------------------------------------------- |
| `shortcutKeys?` | [`IShortcutKeysCheck`](../interfaces/IShortcutKeysCheck.md) \\| [`IShortcutKeys`](../modules.md#ishortcutkeys) |

#### Returns

`boolean`

#### Implementation of

[IPointerEvent](../interfaces/IPointerEvent.md).[isHoldKeys](../interfaces/IPointerEvent.md#isholdkeys)

#### Inherited from

[UIEvent](UIEvent.md).[isHoldKeys](UIEvent.md#isholdkeys)

#### Defined in

[src/ui/packages/event/src/UIEvent.ts:39](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/event/src/UIEvent.ts#L39)

___

### getBoxPoint

▸ **getBoxPoint**(`relative?`): [`IPointData`](../interfaces/IPointData.md)

#### Parameters

| Name        | Type                              |
| :---------- | :-------------------------------- |
| `relative?` | [`ILeaf`](../interfaces/ILeaf.md) |

#### Returns

[`IPointData`](../interfaces/IPointData.md)

#### Implementation of

[IPointerEvent](../interfaces/IPointerEvent.md).[getBoxPoint](../interfaces/IPointerEvent.md#getboxpoint)

#### Inherited from

[UIEvent](UIEvent.md).[getBoxPoint](UIEvent.md#getboxpoint)

#### Defined in

[src/ui/packages/event/src/UIEvent.ts:43](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/event/src/UIEvent.ts#L43)

___

### getInnerPoint

▸ **getInnerPoint**(`relative?`): [`IPointData`](../interfaces/IPointData.md)

#### Parameters

| Name        | Type                              |
| :---------- | :-------------------------------- |
| `relative?` | [`ILeaf`](../interfaces/ILeaf.md) |

#### Returns

[`IPointData`](../interfaces/IPointData.md)

#### Implementation of

[IPointerEvent](../interfaces/IPointerEvent.md).[getInnerPoint](../interfaces/IPointerEvent.md#getinnerpoint)

#### Inherited from

[UIEvent](UIEvent.md).[getInnerPoint](UIEvent.md#getinnerpoint)

#### Defined in

[src/ui/packages/event/src/UIEvent.ts:47](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/event/src/UIEvent.ts#L47)

___

### getLocalPoint

▸ **getLocalPoint**(`relative?`): [`IPointData`](../interfaces/IPointData.md)

#### Parameters

| Name        | Type                              |
| :---------- | :-------------------------------- |
| `relative?` | [`ILeaf`](../interfaces/ILeaf.md) |

#### Returns

[`IPointData`](../interfaces/IPointData.md)

#### Implementation of

[IPointerEvent](../interfaces/IPointerEvent.md).[getLocalPoint](../interfaces/IPointerEvent.md#getlocalpoint)

#### Inherited from

[UIEvent](UIEvent.md).[getLocalPoint](UIEvent.md#getlocalpoint)

#### Defined in

[src/ui/packages/event/src/UIEvent.ts:51](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/event/src/UIEvent.ts#L51)

___

### getPagePoint

▸ **getPagePoint**(): [`IPointData`](../interfaces/IPointData.md)

#### Returns

[`IPointData`](../interfaces/IPointData.md)

#### Implementation of

[IPointerEvent](../interfaces/IPointerEvent.md).[getPagePoint](../interfaces/IPointerEvent.md#getpagepoint)

#### Inherited from

[UIEvent](UIEvent.md).[getPagePoint](UIEvent.md#getpagepoint)

#### Defined in

[src/ui/packages/event/src/UIEvent.ts:55](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/event/src/UIEvent.ts#L55)

___

### getInner

▸ **getInner**(`relative?`): [`IPointData`](../interfaces/IPointData.md)

#### Parameters

| Name        | Type                              |
| :---------- | :-------------------------------- |
| `relative?` | [`ILeaf`](../interfaces/ILeaf.md) |

#### Returns

[`IPointData`](../interfaces/IPointData.md)

#### Implementation of

[IPointerEvent](../interfaces/IPointerEvent.md).[getInner](../interfaces/IPointerEvent.md#getinner)

#### Inherited from

[UIEvent](UIEvent.md).[getInner](UIEvent.md#getinner)

#### Defined in

[src/ui/packages/event/src/UIEvent.ts:60](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/event/src/UIEvent.ts#L60)

___

### getLocal

▸ **getLocal**(`relative?`): [`IPointData`](../interfaces/IPointData.md)

#### Parameters

| Name        | Type                              |
| :---------- | :-------------------------------- |
| `relative?` | [`ILeaf`](../interfaces/ILeaf.md) |

#### Returns

[`IPointData`](../interfaces/IPointData.md)

#### Implementation of

[IPointerEvent](../interfaces/IPointerEvent.md).[getLocal](../interfaces/IPointerEvent.md#getlocal)

#### Inherited from

[UIEvent](UIEvent.md).[getLocal](UIEvent.md#getlocal)

#### Defined in

[src/ui/packages/event/src/UIEvent.ts:61](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/event/src/UIEvent.ts#L61)

___

### getPage

▸ **getPage**(): [`IPointData`](../interfaces/IPointData.md)

#### Returns

[`IPointData`](../interfaces/IPointData.md)

#### Implementation of

[IPointerEvent](../interfaces/IPointerEvent.md).[getPage](../interfaces/IPointerEvent.md#getpage)

#### Inherited from

[UIEvent](UIEvent.md).[getPage](UIEvent.md#getpage)

#### Defined in

[src/ui/packages/event/src/UIEvent.ts:62](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/event/src/UIEvent.ts#L62)

___

### changeName

▸ **changeName**(`oldName`, `newName`): `void`

#### Parameters

| Name      | Type     |
| :-------- | :------- |
| `oldName` | `string` |
| `newName` | `string` |

#### Returns

`void`

#### Inherited from

[UIEvent](UIEvent.md).[changeName](UIEvent.md#changename)

#### Defined in

[src/ui/packages/event/src/UIEvent.ts:65](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/event/src/UIEvent.ts#L65)
