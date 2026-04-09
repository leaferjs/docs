# Class: MoveEvent

## Hierarchy

- [`DragEvent`](DragEvent.md)

  ↳ **`MoveEvent`**

## Implements

- [`IMoveEvent`](../interfaces/IMoveEvent.md)

## Table of contents

### Constructors

- [constructor](MoveEvent.md#constructor)

### Properties

- [origin](MoveEvent.md#origin)
- [type](MoveEvent.md#type)
- [phase](MoveEvent.md#phase)
- [isStopDefault](MoveEvent.md#isstopdefault)
- [isStop](MoveEvent.md#isstop)
- [isStopNow](MoveEvent.md#isstopnow)
- [BEFORE\_DRAG](MoveEvent.md#before_drag)
- [DRAG](MoveEvent.md#drag)
- [OVER](MoveEvent.md#over)
- [OUT](MoveEvent.md#out)
- [ENTER](MoveEvent.md#enter)
- [LEAVE](MoveEvent.md#leave)
- [moveX](MoveEvent.md#movex)
- [moveY](MoveEvent.md#movey)
- [totalX](MoveEvent.md#totalx)
- [totalY](MoveEvent.md#totaly)
- [list](MoveEvent.md#list)
- [data](MoveEvent.md#data)
- [BEFORE\_MOVE](MoveEvent.md#before_move)
- [START](MoveEvent.md#start)
- [MOVE](MoveEvent.md#move)
- [DRAG\_ANIMATE](MoveEvent.md#drag_animate)
- [END](MoveEvent.md#end)
- [PULL\_DOWN](MoveEvent.md#pull_down)
- [REACH\_BOTTOM](MoveEvent.md#reach_bottom)
- [moveType](MoveEvent.md#movetype)
- [POINTER](MoveEvent.md#pointer)
- [BEFORE\_DOWN](MoveEvent.md#before_down)
- [BEFORE\_UP](MoveEvent.md#before_up)
- [DOWN](MoveEvent.md#down)
- [UP](MoveEvent.md#up)
- [TAP](MoveEvent.md#tap)
- [DOUBLE\_TAP](MoveEvent.md#double_tap)
- [CLICK](MoveEvent.md#click)
- [DOUBLE\_CLICK](MoveEvent.md#double_click)
- [LONG\_PRESS](MoveEvent.md#long_press)
- [LONG\_TAP](MoveEvent.md#long_tap)
- [MENU](MoveEvent.md#menu)
- [MENU\_TAP](MoveEvent.md#menu_tap)
- [width](MoveEvent.md#width)
- [height](MoveEvent.md#height)
- [pointerType](MoveEvent.md#pointertype)
- [moving](MoveEvent.md#moving)
- [dragging](MoveEvent.md#dragging)
- [multiTouch](MoveEvent.md#multitouch)
- [pressure](MoveEvent.md#pressure)
- [tangentialPressure](MoveEvent.md#tangentialpressure)
- [tiltX](MoveEvent.md#tiltx)
- [tiltY](MoveEvent.md#tilty)
- [twist](MoveEvent.md#twist)
- [x](MoveEvent.md#x)
- [y](MoveEvent.md#y)
- [path](MoveEvent.md#path)
- [throughPath](MoveEvent.md#throughpath)
- [altKey](MoveEvent.md#altkey)
- [ctrlKey](MoveEvent.md#ctrlkey)
- [shiftKey](MoveEvent.md#shiftkey)
- [metaKey](MoveEvent.md#metakey)
- [buttons](MoveEvent.md#buttons)
- [target](MoveEvent.md#target)
- [current](MoveEvent.md#current)
- [bubbles](MoveEvent.md#bubbles)
- [time](MoveEvent.md#time)

### Accessors

- [spaceKey](MoveEvent.md#spacekey)
- [left](MoveEvent.md#left)
- [right](MoveEvent.md#right)
- [middle](MoveEvent.md#middle)

### Methods

- [stopDefault](MoveEvent.md#stopdefault)
- [stopNow](MoveEvent.md#stopnow)
- [stop](MoveEvent.md#stop)
- [setList](MoveEvent.md#setlist)
- [setData](MoveEvent.md#setdata)
- [getValidMove](MoveEvent.md#getvalidmove)
- [limitMove](MoveEvent.md#limitmove)
- [getPageMove](MoveEvent.md#getpagemove)
- [getInnerMove](MoveEvent.md#getinnermove)
- [getLocalMove](MoveEvent.md#getlocalmove)
- [getPageTotal](MoveEvent.md#getpagetotal)
- [getInnerTotal](MoveEvent.md#getinnertotal)
- [getLocalTotal](MoveEvent.md#getlocaltotal)
- [getPageBounds](MoveEvent.md#getpagebounds)
- [assignMove](MoveEvent.md#assignmove)
- [isHoldKeys](MoveEvent.md#isholdkeys)
- [getBoxPoint](MoveEvent.md#getboxpoint)
- [getInnerPoint](MoveEvent.md#getinnerpoint)
- [getLocalPoint](MoveEvent.md#getlocalpoint)
- [getPagePoint](MoveEvent.md#getpagepoint)
- [getInner](MoveEvent.md#getinner)
- [getLocal](MoveEvent.md#getlocal)
- [getPage](MoveEvent.md#getpage)
- [changeName](MoveEvent.md#changename)

## Constructors

### constructor

• **new MoveEvent**(`params`): [`MoveEvent`](MoveEvent.md)

#### Parameters

| Name     | Type                                    |
| :------- | :-------------------------------------- |
| `params` | [`IUIEvent`](../interfaces/IUIEvent.md) |

#### Returns

[`MoveEvent`](MoveEvent.md)

#### Inherited from

[DragEvent](DragEvent.md).[constructor](DragEvent.md#constructor)

#### Defined in

[src/ui/packages/event/src/UIEvent.ts:33](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/event/src/UIEvent.ts#L33)

## Properties

### origin

• `Readonly` **origin**: [`IObject`](../interfaces/IObject.md)

#### Implementation of

[IMoveEvent](../interfaces/IMoveEvent.md).[origin](../interfaces/IMoveEvent.md#origin)

#### Inherited from

[DragEvent](DragEvent.md).[origin](DragEvent.md#origin)

#### Defined in

[src/leafer/packages/event/src/Event.ts:7](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/event/src/Event.ts#L7)

___

### type

• `Readonly` **type**: `string`

#### Implementation of

[IMoveEvent](../interfaces/IMoveEvent.md).[type](../interfaces/IMoveEvent.md#type)

#### Inherited from

[DragEvent](DragEvent.md).[type](DragEvent.md#type)

#### Defined in

[src/leafer/packages/event/src/Event.ts:9](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/event/src/Event.ts#L9)

___

### phase

• `Readonly` **phase**: `number`

#### Implementation of

[IMoveEvent](../interfaces/IMoveEvent.md).[phase](../interfaces/IMoveEvent.md#phase)

#### Inherited from

[DragEvent](DragEvent.md).[phase](DragEvent.md#phase)

#### Defined in

[src/leafer/packages/event/src/Event.ts:14](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/event/src/Event.ts#L14)

___

### isStopDefault

• **isStopDefault**: `boolean`

#### Implementation of

[IMoveEvent](../interfaces/IMoveEvent.md).[isStopDefault](../interfaces/IMoveEvent.md#isstopdefault)

#### Inherited from

[DragEvent](DragEvent.md).[isStopDefault](DragEvent.md#isstopdefault)

#### Defined in

[src/leafer/packages/event/src/Event.ts:16](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/event/src/Event.ts#L16)

___

### isStop

• **isStop**: `boolean`

#### Implementation of

[IMoveEvent](../interfaces/IMoveEvent.md).[isStop](../interfaces/IMoveEvent.md#isstop)

#### Inherited from

[DragEvent](DragEvent.md).[isStop](DragEvent.md#isstop)

#### Defined in

[src/leafer/packages/event/src/Event.ts:17](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/event/src/Event.ts#L17)

___

### isStopNow

• **isStopNow**: `boolean`

#### Implementation of

[IMoveEvent](../interfaces/IMoveEvent.md).[isStopNow](../interfaces/IMoveEvent.md#isstopnow)

#### Inherited from

[DragEvent](DragEvent.md).[isStopNow](DragEvent.md#isstopnow)

#### Defined in

[src/leafer/packages/event/src/Event.ts:18](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/event/src/Event.ts#L18)

___

### BEFORE\_DRAG

▪ `Static` **BEFORE\_DRAG**: `string` = `'drag.before_drag'`

#### Inherited from

[DragEvent](DragEvent.md).[BEFORE_DRAG](DragEvent.md#before_drag)

#### Defined in

[src/ui/packages/event/src/DragEvent.ts:13](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/event/src/DragEvent.ts#L13)

___

### DRAG

▪ `Static` **DRAG**: `string` = `'drag'`

#### Inherited from

[DragEvent](DragEvent.md).[DRAG](DragEvent.md#drag)

#### Defined in

[src/ui/packages/event/src/DragEvent.ts:16](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/event/src/DragEvent.ts#L16)

___

### OVER

▪ `Static` **OVER**: `string` = `'drag.over'`

#### Inherited from

[DragEvent](DragEvent.md).[OVER](DragEvent.md#over)

#### Defined in

[src/ui/packages/event/src/DragEvent.ts:19](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/event/src/DragEvent.ts#L19)

___

### OUT

▪ `Static` **OUT**: `string` = `'drag.out'`

#### Inherited from

[DragEvent](DragEvent.md).[OUT](DragEvent.md#out)

#### Defined in

[src/ui/packages/event/src/DragEvent.ts:20](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/event/src/DragEvent.ts#L20)

___

### ENTER

▪ `Static` **ENTER**: `string` = `'drag.enter'`

#### Inherited from

[DragEvent](DragEvent.md).[ENTER](DragEvent.md#enter)

#### Defined in

[src/ui/packages/event/src/DragEvent.ts:22](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/event/src/DragEvent.ts#L22)

___

### LEAVE

▪ `Static` **LEAVE**: `string` = `'drag.leave'`

#### Inherited from

[DragEvent](DragEvent.md).[LEAVE](DragEvent.md#leave)

#### Defined in

[src/ui/packages/event/src/DragEvent.ts:23](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/event/src/DragEvent.ts#L23)

___

### moveX

• `Readonly` **moveX**: `number`

#### Implementation of

[IMoveEvent](../interfaces/IMoveEvent.md).[moveX](../interfaces/IMoveEvent.md#movex)

#### Inherited from

[DragEvent](DragEvent.md).[moveX](DragEvent.md#movex)

#### Defined in

[src/ui/packages/event/src/DragEvent.ts:25](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/event/src/DragEvent.ts#L25)

___

### moveY

• `Readonly` **moveY**: `number`

#### Implementation of

[IMoveEvent](../interfaces/IMoveEvent.md).[moveY](../interfaces/IMoveEvent.md#movey)

#### Inherited from

[DragEvent](DragEvent.md).[moveY](DragEvent.md#movey)

#### Defined in

[src/ui/packages/event/src/DragEvent.ts:26](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/event/src/DragEvent.ts#L26)

___

### totalX

• `Readonly` **totalX**: `number`

#### Implementation of

[IMoveEvent](../interfaces/IMoveEvent.md).[totalX](../interfaces/IMoveEvent.md#totalx)

#### Inherited from

[DragEvent](DragEvent.md).[totalX](DragEvent.md#totalx)

#### Defined in

[src/ui/packages/event/src/DragEvent.ts:27](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/event/src/DragEvent.ts#L27)

___

### totalY

• `Readonly` **totalY**: `number`

#### Implementation of

[IMoveEvent](../interfaces/IMoveEvent.md).[totalY](../interfaces/IMoveEvent.md#totaly)

#### Inherited from

[DragEvent](DragEvent.md).[totalY](DragEvent.md#totaly)

#### Defined in

[src/ui/packages/event/src/DragEvent.ts:28](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/event/src/DragEvent.ts#L28)

___

### list

▪ `Static` **list**: [`ILeafList`](../interfaces/ILeafList.md)

#### Inherited from

[DragEvent](DragEvent.md).[list](DragEvent.md#list)

#### Defined in

[src/ui/packages/event/src/DragEvent.ts:30](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/event/src/DragEvent.ts#L30)

___

### data

▪ `Static` **data**: [`IObject`](../interfaces/IObject.md)

#### Inherited from

[DragEvent](DragEvent.md).[data](DragEvent.md#data)

#### Defined in

[src/ui/packages/event/src/DragEvent.ts:31](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/event/src/DragEvent.ts#L31)

___

### BEFORE\_MOVE

▪ `Static` **BEFORE\_MOVE**: `string` = `'move.before_move'`

#### Overrides

[DragEvent](DragEvent.md).[BEFORE_MOVE](DragEvent.md#before_move)

#### Defined in

[src/ui/packages/event/src/MoveEvent.ts:9](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/event/src/MoveEvent.ts#L9)

___

### START

▪ `Static` **START**: `string` = `'move.start'`

#### Overrides

[DragEvent](DragEvent.md).[START](DragEvent.md#start)

#### Defined in

[src/ui/packages/event/src/MoveEvent.ts:11](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/event/src/MoveEvent.ts#L11)

___

### MOVE

▪ `Static` **MOVE**: `string` = `'move'`

#### Overrides

[DragEvent](DragEvent.md).[MOVE](DragEvent.md#move)

#### Defined in

[src/ui/packages/event/src/MoveEvent.ts:12](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/event/src/MoveEvent.ts#L12)

___

### DRAG\_ANIMATE

▪ `Static` **DRAG\_ANIMATE**: `string` = `'move.drag_animate'`

#### Defined in

[src/ui/packages/event/src/MoveEvent.ts:13](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/event/src/MoveEvent.ts#L13)

___

### END

▪ `Static` **END**: `string` = `'move.end'`

#### Overrides

[DragEvent](DragEvent.md).[END](DragEvent.md#end)

#### Defined in

[src/ui/packages/event/src/MoveEvent.ts:14](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/event/src/MoveEvent.ts#L14)

___

### PULL\_DOWN

▪ `Static` **PULL\_DOWN**: `string` = `'move.pull_down'`

#### Defined in

[src/ui/packages/event/src/MoveEvent.ts:16](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/event/src/MoveEvent.ts#L16)

___

### REACH\_BOTTOM

▪ `Static` **REACH\_BOTTOM**: `string` = `'move.reach_bottom'`

#### Defined in

[src/ui/packages/event/src/MoveEvent.ts:17](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/event/src/MoveEvent.ts#L17)

___

### moveType

• `Readonly` **moveType**: `"move"` \| `"drag"`

#### Implementation of

[IMoveEvent](../interfaces/IMoveEvent.md).[moveType](../interfaces/IMoveEvent.md#movetype)

#### Defined in

[src/ui/packages/event/src/MoveEvent.ts:19](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/event/src/MoveEvent.ts#L19)

___

### POINTER

▪ `Static` **POINTER**: `string` = `'pointer'`

#### Inherited from

[DragEvent](DragEvent.md).[POINTER](DragEvent.md#pointer)

#### Defined in

[src/ui/packages/event/src/PointerEvent.ts:10](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/event/src/PointerEvent.ts#L10)

___

### BEFORE\_DOWN

▪ `Static` **BEFORE\_DOWN**: `string` = `'pointer.before_down'`

#### Inherited from

[DragEvent](DragEvent.md).[BEFORE_DOWN](DragEvent.md#before_down)

#### Defined in

[src/ui/packages/event/src/PointerEvent.ts:12](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/event/src/PointerEvent.ts#L12)

___

### BEFORE\_UP

▪ `Static` **BEFORE\_UP**: `string` = `'pointer.before_up'`

#### Inherited from

[DragEvent](DragEvent.md).[BEFORE_UP](DragEvent.md#before_up)

#### Defined in

[src/ui/packages/event/src/PointerEvent.ts:14](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/event/src/PointerEvent.ts#L14)

___

### DOWN

▪ `Static` **DOWN**: `string` = `'pointer.down'`

#### Inherited from

[DragEvent](DragEvent.md).[DOWN](DragEvent.md#down)

#### Defined in

[src/ui/packages/event/src/PointerEvent.ts:16](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/event/src/PointerEvent.ts#L16)

___

### UP

▪ `Static` **UP**: `string` = `'pointer.up'`

#### Inherited from

[DragEvent](DragEvent.md).[UP](DragEvent.md#up)

#### Defined in

[src/ui/packages/event/src/PointerEvent.ts:18](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/event/src/PointerEvent.ts#L18)

___

### TAP

▪ `Static` **TAP**: `string` = `'tap'`

#### Inherited from

[DragEvent](DragEvent.md).[TAP](DragEvent.md#tap)

#### Defined in

[src/ui/packages/event/src/PointerEvent.ts:26](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/event/src/PointerEvent.ts#L26)

___

### DOUBLE\_TAP

▪ `Static` **DOUBLE\_TAP**: `string` = `'double_tap'`

#### Inherited from

[DragEvent](DragEvent.md).[DOUBLE_TAP](DragEvent.md#double_tap)

#### Defined in

[src/ui/packages/event/src/PointerEvent.ts:27](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/event/src/PointerEvent.ts#L27)

___

### CLICK

▪ `Static` **CLICK**: `string` = `'click'`

#### Inherited from

[DragEvent](DragEvent.md).[CLICK](DragEvent.md#click)

#### Defined in

[src/ui/packages/event/src/PointerEvent.ts:29](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/event/src/PointerEvent.ts#L29)

___

### DOUBLE\_CLICK

▪ `Static` **DOUBLE\_CLICK**: `string` = `'double_click'`

#### Inherited from

[DragEvent](DragEvent.md).[DOUBLE_CLICK](DragEvent.md#double_click)

#### Defined in

[src/ui/packages/event/src/PointerEvent.ts:30](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/event/src/PointerEvent.ts#L30)

___

### LONG\_PRESS

▪ `Static` **LONG\_PRESS**: `string` = `'long_press'`

#### Inherited from

[DragEvent](DragEvent.md).[LONG_PRESS](DragEvent.md#long_press)

#### Defined in

[src/ui/packages/event/src/PointerEvent.ts:32](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/event/src/PointerEvent.ts#L32)

___

### LONG\_TAP

▪ `Static` **LONG\_TAP**: `string` = `'long_tap'`

#### Inherited from

[DragEvent](DragEvent.md).[LONG_TAP](DragEvent.md#long_tap)

#### Defined in

[src/ui/packages/event/src/PointerEvent.ts:33](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/event/src/PointerEvent.ts#L33)

___

### MENU

▪ `Static` **MENU**: `string` = `'pointer.menu'`

#### Inherited from

[DragEvent](DragEvent.md).[MENU](DragEvent.md#menu)

#### Defined in

[src/ui/packages/event/src/PointerEvent.ts:35](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/event/src/PointerEvent.ts#L35)

___

### MENU\_TAP

▪ `Static` **MENU\_TAP**: `string` = `'pointer.menu_tap'`

#### Inherited from

[DragEvent](DragEvent.md).[MENU_TAP](DragEvent.md#menu_tap)

#### Defined in

[src/ui/packages/event/src/PointerEvent.ts:36](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/event/src/PointerEvent.ts#L36)

___

### width

• `Readonly` **width**: `number`

#### Implementation of

[IMoveEvent](../interfaces/IMoveEvent.md).[width](../interfaces/IMoveEvent.md#width)

#### Inherited from

[DragEvent](DragEvent.md).[width](DragEvent.md#width)

#### Defined in

[src/ui/packages/event/src/PointerEvent.ts:38](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/event/src/PointerEvent.ts#L38)

___

### height

• `Readonly` **height**: `number`

#### Implementation of

[IMoveEvent](../interfaces/IMoveEvent.md).[height](../interfaces/IMoveEvent.md#height)

#### Inherited from

[DragEvent](DragEvent.md).[height](DragEvent.md#height)

#### Defined in

[src/ui/packages/event/src/PointerEvent.ts:39](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/event/src/PointerEvent.ts#L39)

___

### pointerType

• `Readonly` **pointerType**: [`PointerType`](../modules.md#pointertype)

#### Implementation of

[IMoveEvent](../interfaces/IMoveEvent.md).[pointerType](../interfaces/IMoveEvent.md#pointertype)

#### Inherited from

[DragEvent](DragEvent.md).[pointerType](DragEvent.md#pointertype)

#### Defined in

[src/ui/packages/event/src/PointerEvent.ts:40](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/event/src/PointerEvent.ts#L40)

___

### moving

• `Optional` `Readonly` **moving**: `boolean`

#### Implementation of

[IMoveEvent](../interfaces/IMoveEvent.md).[moving](../interfaces/IMoveEvent.md#moving)

#### Inherited from

[DragEvent](DragEvent.md).[moving](DragEvent.md#moving)

#### Defined in

[src/ui/packages/event/src/PointerEvent.ts:41](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/event/src/PointerEvent.ts#L41)

___

### dragging

• `Optional` `Readonly` **dragging**: `boolean`

#### Implementation of

[IMoveEvent](../interfaces/IMoveEvent.md).[dragging](../interfaces/IMoveEvent.md#dragging)

#### Inherited from

[DragEvent](DragEvent.md).[dragging](DragEvent.md#dragging)

#### Defined in

[src/ui/packages/event/src/PointerEvent.ts:42](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/event/src/PointerEvent.ts#L42)

___

### multiTouch

• `Optional` `Readonly` **multiTouch**: `boolean`

#### Implementation of

[IMoveEvent](../interfaces/IMoveEvent.md).[multiTouch](../interfaces/IMoveEvent.md#multitouch)

#### Inherited from

[DragEvent](DragEvent.md).[multiTouch](DragEvent.md#multitouch)

#### Defined in

[src/ui/packages/event/src/PointerEvent.ts:43](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/event/src/PointerEvent.ts#L43)

___

### pressure

• `Readonly` **pressure**: `number`

#### Implementation of

[IMoveEvent](../interfaces/IMoveEvent.md).[pressure](../interfaces/IMoveEvent.md#pressure)

#### Inherited from

[DragEvent](DragEvent.md).[pressure](DragEvent.md#pressure)

#### Defined in

[src/ui/packages/event/src/PointerEvent.ts:44](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/event/src/PointerEvent.ts#L44)

___

### tangentialPressure

• `Optional` `Readonly` **tangentialPressure**: `number`

#### Implementation of

[IMoveEvent](../interfaces/IMoveEvent.md).[tangentialPressure](../interfaces/IMoveEvent.md#tangentialpressure)

#### Inherited from

[DragEvent](DragEvent.md).[tangentialPressure](DragEvent.md#tangentialpressure)

#### Defined in

[src/ui/packages/event/src/PointerEvent.ts:45](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/event/src/PointerEvent.ts#L45)

___

### tiltX

• `Optional` `Readonly` **tiltX**: `number`

#### Implementation of

[IMoveEvent](../interfaces/IMoveEvent.md).[tiltX](../interfaces/IMoveEvent.md#tiltx)

#### Inherited from

[DragEvent](DragEvent.md).[tiltX](DragEvent.md#tiltx)

#### Defined in

[src/ui/packages/event/src/PointerEvent.ts:46](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/event/src/PointerEvent.ts#L46)

___

### tiltY

• `Optional` `Readonly` **tiltY**: `number`

#### Implementation of

[IMoveEvent](../interfaces/IMoveEvent.md).[tiltY](../interfaces/IMoveEvent.md#tilty)

#### Inherited from

[DragEvent](DragEvent.md).[tiltY](DragEvent.md#tilty)

#### Defined in

[src/ui/packages/event/src/PointerEvent.ts:47](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/event/src/PointerEvent.ts#L47)

___

### twist

• `Optional` `Readonly` **twist**: `number`

#### Implementation of

[IMoveEvent](../interfaces/IMoveEvent.md).[twist](../interfaces/IMoveEvent.md#twist)

#### Inherited from

[DragEvent](DragEvent.md).[twist](DragEvent.md#twist)

#### Defined in

[src/ui/packages/event/src/PointerEvent.ts:48](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/event/src/PointerEvent.ts#L48)

___

### x

• `Readonly` **x**: `number`

#### Implementation of

[IMoveEvent](../interfaces/IMoveEvent.md).[x](../interfaces/IMoveEvent.md#x)

#### Inherited from

[DragEvent](DragEvent.md).[x](DragEvent.md#x)

#### Defined in

[src/ui/packages/event/src/UIEvent.ts:10](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/event/src/UIEvent.ts#L10)

___

### y

• `Readonly` **y**: `number`

#### Implementation of

[IMoveEvent](../interfaces/IMoveEvent.md).[y](../interfaces/IMoveEvent.md#y)

#### Inherited from

[DragEvent](DragEvent.md).[y](DragEvent.md#y)

#### Defined in

[src/ui/packages/event/src/UIEvent.ts:11](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/event/src/UIEvent.ts#L11)

___

### path

• `Readonly` **path**: [`ILeafList`](../interfaces/ILeafList.md)

#### Implementation of

[IMoveEvent](../interfaces/IMoveEvent.md).[path](../interfaces/IMoveEvent.md#path)

#### Inherited from

[DragEvent](DragEvent.md).[path](DragEvent.md#path)

#### Defined in

[src/ui/packages/event/src/UIEvent.ts:13](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/event/src/UIEvent.ts#L13)

___

### throughPath

• `Optional` `Readonly` **throughPath**: [`ILeafList`](../interfaces/ILeafList.md)

#### Implementation of

[IMoveEvent](../interfaces/IMoveEvent.md).[throughPath](../interfaces/IMoveEvent.md#throughpath)

#### Inherited from

[DragEvent](DragEvent.md).[throughPath](DragEvent.md#throughpath)

#### Defined in

[src/ui/packages/event/src/UIEvent.ts:14](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/event/src/UIEvent.ts#L14)

___

### altKey

• `Readonly` **altKey**: `boolean`

#### Implementation of

[IMoveEvent](../interfaces/IMoveEvent.md).[altKey](../interfaces/IMoveEvent.md#altkey)

#### Inherited from

[DragEvent](DragEvent.md).[altKey](DragEvent.md#altkey)

#### Defined in

[src/ui/packages/event/src/UIEvent.ts:16](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/event/src/UIEvent.ts#L16)

___

### ctrlKey

• `Readonly` **ctrlKey**: `boolean`

#### Implementation of

[IMoveEvent](../interfaces/IMoveEvent.md).[ctrlKey](../interfaces/IMoveEvent.md#ctrlkey)

#### Inherited from

[DragEvent](DragEvent.md).[ctrlKey](DragEvent.md#ctrlkey)

#### Defined in

[src/ui/packages/event/src/UIEvent.ts:17](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/event/src/UIEvent.ts#L17)

___

### shiftKey

• `Readonly` **shiftKey**: `boolean`

#### Implementation of

[IMoveEvent](../interfaces/IMoveEvent.md).[shiftKey](../interfaces/IMoveEvent.md#shiftkey)

#### Inherited from

[DragEvent](DragEvent.md).[shiftKey](DragEvent.md#shiftkey)

#### Defined in

[src/ui/packages/event/src/UIEvent.ts:18](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/event/src/UIEvent.ts#L18)

___

### metaKey

• `Readonly` **metaKey**: `boolean`

#### Implementation of

[IMoveEvent](../interfaces/IMoveEvent.md).[metaKey](../interfaces/IMoveEvent.md#metakey)

#### Inherited from

[DragEvent](DragEvent.md).[metaKey](DragEvent.md#metakey)

#### Defined in

[src/ui/packages/event/src/UIEvent.ts:19](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/event/src/UIEvent.ts#L19)

___

### buttons

• `Readonly` **buttons**: `number`

#### Implementation of

[IMoveEvent](../interfaces/IMoveEvent.md).[buttons](../interfaces/IMoveEvent.md#buttons)

#### Inherited from

[DragEvent](DragEvent.md).[buttons](DragEvent.md#buttons)

#### Defined in

[src/ui/packages/event/src/UIEvent.ts:25](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/event/src/UIEvent.ts#L25)

___

### target

• `Readonly` **target**: [`ILeaf`](../interfaces/ILeaf.md)

#### Implementation of

[IMoveEvent](../interfaces/IMoveEvent.md).[target](../interfaces/IMoveEvent.md#target)

#### Inherited from

[DragEvent](DragEvent.md).[target](DragEvent.md#target)

#### Defined in

[src/ui/packages/event/src/UIEvent.ts:27](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/event/src/UIEvent.ts#L27)

___

### current

• `Readonly` **current**: [`ILeaf`](../interfaces/ILeaf.md)

#### Implementation of

[IMoveEvent](../interfaces/IMoveEvent.md).[current](../interfaces/IMoveEvent.md#current)

#### Inherited from

[DragEvent](DragEvent.md).[current](DragEvent.md#current)

#### Defined in

[src/ui/packages/event/src/UIEvent.ts:28](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/event/src/UIEvent.ts#L28)

___

### bubbles

• `Readonly` **bubbles**: `boolean` = `true`

#### Implementation of

[IMoveEvent](../interfaces/IMoveEvent.md).[bubbles](../interfaces/IMoveEvent.md#bubbles)

#### Inherited from

[DragEvent](DragEvent.md).[bubbles](DragEvent.md#bubbles)

#### Defined in

[src/ui/packages/event/src/UIEvent.ts:29](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/event/src/UIEvent.ts#L29)

___

### time

• `Readonly` **time**: `number`

#### Implementation of

[IMoveEvent](../interfaces/IMoveEvent.md).[time](../interfaces/IMoveEvent.md#time)

#### Inherited from

[DragEvent](DragEvent.md).[time](DragEvent.md#time)

#### Defined in

[src/ui/packages/event/src/UIEvent.ts:31](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/event/src/UIEvent.ts#L31)

## Accessors

### spaceKey

• `get` **spaceKey**(): `boolean`

#### Returns

`boolean`

#### Implementation of

[IMoveEvent](../interfaces/IMoveEvent.md).[spaceKey](../interfaces/IMoveEvent.md#spacekey)

#### Inherited from

DragEvent.spaceKey

#### Defined in

[src/ui/packages/event/src/UIEvent.ts:20](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/event/src/UIEvent.ts#L20)

___

### left

• `get` **left**(): `boolean`

#### Returns

`boolean`

#### Implementation of

[IMoveEvent](../interfaces/IMoveEvent.md).[left](../interfaces/IMoveEvent.md#left)

#### Inherited from

DragEvent.left

#### Defined in

[src/ui/packages/event/src/UIEvent.ts:22](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/event/src/UIEvent.ts#L22)

___

### right

• `get` **right**(): `boolean`

#### Returns

`boolean`

#### Implementation of

[IMoveEvent](../interfaces/IMoveEvent.md).[right](../interfaces/IMoveEvent.md#right)

#### Inherited from

DragEvent.right

#### Defined in

[src/ui/packages/event/src/UIEvent.ts:23](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/event/src/UIEvent.ts#L23)

___

### middle

• `get` **middle**(): `boolean`

#### Returns

`boolean`

#### Implementation of

[IMoveEvent](../interfaces/IMoveEvent.md).[middle](../interfaces/IMoveEvent.md#middle)

#### Inherited from

DragEvent.middle

#### Defined in

[src/ui/packages/event/src/UIEvent.ts:24](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/event/src/UIEvent.ts#L24)

## Methods

### stopDefault

▸ **stopDefault**(): `void`

#### Returns

`void`

#### Implementation of

[IMoveEvent](../interfaces/IMoveEvent.md).[stopDefault](../interfaces/IMoveEvent.md#stopdefault)

#### Inherited from

[DragEvent](DragEvent.md).[stopDefault](DragEvent.md#stopdefault)

#### Defined in

[src/leafer/packages/event/src/Event.ts:25](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/event/src/Event.ts#L25)

___

### stopNow

▸ **stopNow**(): `void`

#### Returns

`void`

#### Implementation of

[IMoveEvent](../interfaces/IMoveEvent.md).[stopNow](../interfaces/IMoveEvent.md#stopnow)

#### Inherited from

[DragEvent](DragEvent.md).[stopNow](DragEvent.md#stopnow)

#### Defined in

[src/leafer/packages/event/src/Event.ts:30](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/event/src/Event.ts#L30)

___

### stop

▸ **stop**(): `void`

#### Returns

`void`

#### Implementation of

[IMoveEvent](../interfaces/IMoveEvent.md).[stop](../interfaces/IMoveEvent.md#stop)

#### Inherited from

[DragEvent](DragEvent.md).[stop](DragEvent.md#stop)

#### Defined in

[src/leafer/packages/event/src/Event.ts:36](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/event/src/Event.ts#L36)

___

### setList

▸ **setList**(`data`): `void`

#### Parameters

| Name   | Type                                                                                                                                                                          |
| :----- | :---------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `data` | [`ILeaf`](../interfaces/ILeaf.md) \\| [`ILeaf`](../interfaces/ILeaf.md)[] \\| [`ILeafList`](../interfaces/ILeafList.md) |

#### Returns

`void`

#### Inherited from

[DragEvent](DragEvent.md).[setList](DragEvent.md#setlist)

#### Defined in

[src/ui/packages/event/src/DragEvent.ts:33](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/event/src/DragEvent.ts#L33)

___

### setData

▸ **setData**(`data`): `void`

#### Parameters

| Name   | Type                                  |
| :----- | :------------------------------------ |
| `data` | [`IObject`](../interfaces/IObject.md) |

#### Returns

`void`

#### Inherited from

[DragEvent](DragEvent.md).[setData](DragEvent.md#setdata)

#### Defined in

[src/ui/packages/event/src/DragEvent.ts:37](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/event/src/DragEvent.ts#L37)

___

### getValidMove

▸ **getValidMove**(`leaf`, `localStart`, `worldTotal`, `checkLimit?`): [`IPointData`](../interfaces/IPointData.md)

#### Parameters

| Name         | Type                                        | Default value |
| :----------- | :------------------------------------------ | :------------ |
| `leaf`       | [`ILeaf`](../interfaces/ILeaf.md)           | `undefined`   |
| `localStart` | [`IPointData`](../interfaces/IPointData.md) | `undefined`   |
| `worldTotal` | [`IPointData`](../interfaces/IPointData.md) | `undefined`   |
| `checkLimit` | `boolean`                                   | `true`        |

#### Returns

[`IPointData`](../interfaces/IPointData.md)

#### Inherited from

[DragEvent](DragEvent.md).[getValidMove](DragEvent.md#getvalidmove)

#### Defined in

[src/ui/packages/event/src/DragEvent.ts:41](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/event/src/DragEvent.ts#L41)

___

### limitMove

▸ **limitMove**(`leaf`, `move`): `void`

#### Parameters

| Name   | Type                                        |
| :----- | :------------------------------------------ |
| `leaf` | [`ILeaf`](../interfaces/ILeaf.md)           |
| `move` | [`IPointData`](../interfaces/IPointData.md) |

#### Returns

`void`

#### Inherited from

[DragEvent](DragEvent.md).[limitMove](DragEvent.md#limitmove)

#### Defined in

[src/ui/packages/event/src/DragEvent.ts:49](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/event/src/DragEvent.ts#L49)

___

### getPageMove

▸ **getPageMove**(`total?`): [`IPointData`](../interfaces/IPointData.md)

#### Parameters

| Name     | Type      |
| :------- | :-------- |
| `total?` | `boolean` |

#### Returns

[`IPointData`](../interfaces/IPointData.md)

#### Implementation of

[IMoveEvent](../interfaces/IMoveEvent.md).[getPageMove](../interfaces/IMoveEvent.md#getpagemove)

#### Inherited from

[DragEvent](DragEvent.md).[getPageMove](DragEvent.md#getpagemove)

#### Defined in

[src/ui/packages/event/src/DragEvent.ts:53](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/event/src/DragEvent.ts#L53)

___

### getInnerMove

▸ **getInnerMove**(`relative?`, `total?`): [`IPointData`](../interfaces/IPointData.md)

#### Parameters

| Name        | Type                              |
| :---------- | :-------------------------------- |
| `relative?` | [`ILeaf`](../interfaces/ILeaf.md) |
| `total?`    | `boolean`                         |

#### Returns

[`IPointData`](../interfaces/IPointData.md)

#### Implementation of

[IMoveEvent](../interfaces/IMoveEvent.md).[getInnerMove](../interfaces/IMoveEvent.md#getinnermove)

#### Inherited from

[DragEvent](DragEvent.md).[getInnerMove](DragEvent.md#getinnermove)

#### Defined in

[src/ui/packages/event/src/DragEvent.ts:58](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/event/src/DragEvent.ts#L58)

___

### getLocalMove

▸ **getLocalMove**(`relative?`, `total?`): [`IPointData`](../interfaces/IPointData.md)

#### Parameters

| Name        | Type                              |
| :---------- | :-------------------------------- |
| `relative?` | [`ILeaf`](../interfaces/ILeaf.md) |
| `total?`    | `boolean`                         |

#### Returns

[`IPointData`](../interfaces/IPointData.md)

#### Implementation of

[IMoveEvent](../interfaces/IMoveEvent.md).[getLocalMove](../interfaces/IMoveEvent.md#getlocalmove)

#### Inherited from

[DragEvent](DragEvent.md).[getLocalMove](DragEvent.md#getlocalmove)

#### Defined in

[src/ui/packages/event/src/DragEvent.ts:64](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/event/src/DragEvent.ts#L64)

___

### getPageTotal

▸ **getPageTotal**(): [`IPointData`](../interfaces/IPointData.md)

#### Returns

[`IPointData`](../interfaces/IPointData.md)

#### Implementation of

[IMoveEvent](../interfaces/IMoveEvent.md).[getPageTotal](../interfaces/IMoveEvent.md#getpagetotal)

#### Inherited from

[DragEvent](DragEvent.md).[getPageTotal](DragEvent.md#getpagetotal)

#### Defined in

[src/ui/packages/event/src/DragEvent.ts:70](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/event/src/DragEvent.ts#L70)

___

### getInnerTotal

▸ **getInnerTotal**(`relative?`): [`IPointData`](../interfaces/IPointData.md)

#### Parameters

| Name        | Type                              |
| :---------- | :-------------------------------- |
| `relative?` | [`ILeaf`](../interfaces/ILeaf.md) |

#### Returns

[`IPointData`](../interfaces/IPointData.md)

#### Implementation of

[IMoveEvent](../interfaces/IMoveEvent.md).[getInnerTotal](../interfaces/IMoveEvent.md#getinnertotal)

#### Inherited from

[DragEvent](DragEvent.md).[getInnerTotal](DragEvent.md#getinnertotal)

#### Defined in

[src/ui/packages/event/src/DragEvent.ts:74](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/event/src/DragEvent.ts#L74)

___

### getLocalTotal

▸ **getLocalTotal**(`relative?`): [`IPointData`](../interfaces/IPointData.md)

#### Parameters

| Name        | Type                              |
| :---------- | :-------------------------------- |
| `relative?` | [`ILeaf`](../interfaces/ILeaf.md) |

#### Returns

[`IPointData`](../interfaces/IPointData.md)

#### Implementation of

[IMoveEvent](../interfaces/IMoveEvent.md).[getLocalTotal](../interfaces/IMoveEvent.md#getlocaltotal)

#### Inherited from

[DragEvent](DragEvent.md).[getLocalTotal](DragEvent.md#getlocaltotal)

#### Defined in

[src/ui/packages/event/src/DragEvent.ts:78](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/event/src/DragEvent.ts#L78)

___

### getPageBounds

▸ **getPageBounds**(): [`IBoundsData`](../interfaces/IBoundsData.md)

#### Returns

[`IBoundsData`](../interfaces/IBoundsData.md)

#### Implementation of

[IMoveEvent](../interfaces/IMoveEvent.md).[getPageBounds](../interfaces/IMoveEvent.md#getpagebounds)

#### Inherited from

[DragEvent](DragEvent.md).[getPageBounds](DragEvent.md#getpagebounds)

#### Defined in

[src/ui/packages/event/src/DragEvent.ts:82](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/event/src/DragEvent.ts#L82)

___

### assignMove

▸ **assignMove**(`total`): `void`

#### Parameters

| Name    | Type      |
| :------ | :-------- |
| `total` | `boolean` |

#### Returns

`void`

#### Inherited from

[DragEvent](DragEvent.md).[assignMove](DragEvent.md#assignmove)

#### Defined in

[src/ui/packages/event/src/DragEvent.ts:89](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/event/src/DragEvent.ts#L89)

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

[IMoveEvent](../interfaces/IMoveEvent.md).[isHoldKeys](../interfaces/IMoveEvent.md#isholdkeys)

#### Inherited from

[DragEvent](DragEvent.md).[isHoldKeys](DragEvent.md#isholdkeys)

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

[IMoveEvent](../interfaces/IMoveEvent.md).[getBoxPoint](../interfaces/IMoveEvent.md#getboxpoint)

#### Inherited from

[DragEvent](DragEvent.md).[getBoxPoint](DragEvent.md#getboxpoint)

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

[IMoveEvent](../interfaces/IMoveEvent.md).[getInnerPoint](../interfaces/IMoveEvent.md#getinnerpoint)

#### Inherited from

[DragEvent](DragEvent.md).[getInnerPoint](DragEvent.md#getinnerpoint)

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

[IMoveEvent](../interfaces/IMoveEvent.md).[getLocalPoint](../interfaces/IMoveEvent.md#getlocalpoint)

#### Inherited from

[DragEvent](DragEvent.md).[getLocalPoint](DragEvent.md#getlocalpoint)

#### Defined in

[src/ui/packages/event/src/UIEvent.ts:51](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/event/src/UIEvent.ts#L51)

___

### getPagePoint

▸ **getPagePoint**(): [`IPointData`](../interfaces/IPointData.md)

#### Returns

[`IPointData`](../interfaces/IPointData.md)

#### Implementation of

[IMoveEvent](../interfaces/IMoveEvent.md).[getPagePoint](../interfaces/IMoveEvent.md#getpagepoint)

#### Inherited from

[DragEvent](DragEvent.md).[getPagePoint](DragEvent.md#getpagepoint)

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

[IMoveEvent](../interfaces/IMoveEvent.md).[getInner](../interfaces/IMoveEvent.md#getinner)

#### Inherited from

[DragEvent](DragEvent.md).[getInner](DragEvent.md#getinner)

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

[IMoveEvent](../interfaces/IMoveEvent.md).[getLocal](../interfaces/IMoveEvent.md#getlocal)

#### Inherited from

[DragEvent](DragEvent.md).[getLocal](DragEvent.md#getlocal)

#### Defined in

[src/ui/packages/event/src/UIEvent.ts:61](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/event/src/UIEvent.ts#L61)

___

### getPage

▸ **getPage**(): [`IPointData`](../interfaces/IPointData.md)

#### Returns

[`IPointData`](../interfaces/IPointData.md)

#### Implementation of

[IMoveEvent](../interfaces/IMoveEvent.md).[getPage](../interfaces/IMoveEvent.md#getpage)

#### Inherited from

[DragEvent](DragEvent.md).[getPage](DragEvent.md#getpage)

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

[DragEvent](DragEvent.md).[changeName](DragEvent.md#changename)

#### Defined in

[src/ui/packages/event/src/UIEvent.ts:65](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/event/src/UIEvent.ts#L65)
