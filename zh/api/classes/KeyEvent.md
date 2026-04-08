# Class: KeyEvent

## Hierarchy

- [`UIEvent`](UIEvent.md)

  ↳ **`KeyEvent`**

## Implements

- [`IKeyEvent`](../interfaces/IKeyEvent.md)

## Table of contents

### Constructors

- [constructor](KeyEvent.md#constructor)

### Properties

- [origin](KeyEvent.md#origin)
- [type](KeyEvent.md#type)
- [phase](KeyEvent.md#phase)
- [isStopDefault](KeyEvent.md#isstopdefault)
- [isStop](KeyEvent.md#isstop)
- [isStopNow](KeyEvent.md#isstopnow)
- [BEFORE\_DOWN](KeyEvent.md#before_down)
- [BEFORE\_UP](KeyEvent.md#before_up)
- [DOWN](KeyEvent.md#down)
- [HOLD](KeyEvent.md#hold)
- [UP](KeyEvent.md#up)
- [code](KeyEvent.md#code)
- [key](KeyEvent.md#key)
- [x](KeyEvent.md#x)
- [y](KeyEvent.md#y)
- [path](KeyEvent.md#path)
- [throughPath](KeyEvent.md#throughpath)
- [altKey](KeyEvent.md#altkey)
- [ctrlKey](KeyEvent.md#ctrlkey)
- [shiftKey](KeyEvent.md#shiftkey)
- [metaKey](KeyEvent.md#metakey)
- [buttons](KeyEvent.md#buttons)
- [target](KeyEvent.md#target)
- [current](KeyEvent.md#current)
- [bubbles](KeyEvent.md#bubbles)
- [time](KeyEvent.md#time)

### Accessors

- [spaceKey](KeyEvent.md#spacekey)
- [left](KeyEvent.md#left)
- [right](KeyEvent.md#right)
- [middle](KeyEvent.md#middle)

### Methods

- [stopDefault](KeyEvent.md#stopdefault)
- [stopNow](KeyEvent.md#stopnow)
- [stop](KeyEvent.md#stop)
- [isHoldKeys](KeyEvent.md#isholdkeys)
- [getBoxPoint](KeyEvent.md#getboxpoint)
- [getInnerPoint](KeyEvent.md#getinnerpoint)
- [getLocalPoint](KeyEvent.md#getlocalpoint)
- [getPagePoint](KeyEvent.md#getpagepoint)
- [getInner](KeyEvent.md#getinner)
- [getLocal](KeyEvent.md#getlocal)
- [getPage](KeyEvent.md#getpage)
- [changeName](KeyEvent.md#changename)

## Constructors

### constructor

• **new KeyEvent**(`params`): [`KeyEvent`](KeyEvent.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `params` | [`IUIEvent`](../interfaces/IUIEvent.md) |

#### Returns

[`KeyEvent`](KeyEvent.md)

#### Inherited from

[UIEvent](UIEvent.md).[constructor](UIEvent.md#constructor)

#### Defined in

[src/ui/packages/event/src/UIEvent.ts:33](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/event/src/UIEvent.ts#L33)

## Properties

### origin

• `Readonly` **origin**: [`IObject`](../interfaces/IObject.md)

#### Implementation of

[IKeyEvent](../interfaces/IKeyEvent.md).[origin](../interfaces/IKeyEvent.md#origin)

#### Inherited from

[UIEvent](UIEvent.md).[origin](UIEvent.md#origin)

#### Defined in

[src/leafer/packages/event/src/Event.ts:7](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/event/src/Event.ts#L7)

___

### type

• `Readonly` **type**: `string`

#### Implementation of

[IKeyEvent](../interfaces/IKeyEvent.md).[type](../interfaces/IKeyEvent.md#type)

#### Inherited from

[UIEvent](UIEvent.md).[type](UIEvent.md#type)

#### Defined in

[src/leafer/packages/event/src/Event.ts:9](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/event/src/Event.ts#L9)

___

### phase

• `Readonly` **phase**: `number`

#### Implementation of

[IKeyEvent](../interfaces/IKeyEvent.md).[phase](../interfaces/IKeyEvent.md#phase)

#### Inherited from

[UIEvent](UIEvent.md).[phase](UIEvent.md#phase)

#### Defined in

[src/leafer/packages/event/src/Event.ts:14](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/event/src/Event.ts#L14)

___

### isStopDefault

• **isStopDefault**: `boolean`

#### Implementation of

[IKeyEvent](../interfaces/IKeyEvent.md).[isStopDefault](../interfaces/IKeyEvent.md#isstopdefault)

#### Inherited from

[UIEvent](UIEvent.md).[isStopDefault](UIEvent.md#isstopdefault)

#### Defined in

[src/leafer/packages/event/src/Event.ts:16](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/event/src/Event.ts#L16)

___

### isStop

• **isStop**: `boolean`

#### Implementation of

[IKeyEvent](../interfaces/IKeyEvent.md).[isStop](../interfaces/IKeyEvent.md#isstop)

#### Inherited from

[UIEvent](UIEvent.md).[isStop](UIEvent.md#isstop)

#### Defined in

[src/leafer/packages/event/src/Event.ts:17](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/event/src/Event.ts#L17)

___

### isStopNow

• **isStopNow**: `boolean`

#### Implementation of

[IKeyEvent](../interfaces/IKeyEvent.md).[isStopNow](../interfaces/IKeyEvent.md#isstopnow)

#### Inherited from

[UIEvent](UIEvent.md).[isStopNow](UIEvent.md#isstopnow)

#### Defined in

[src/leafer/packages/event/src/Event.ts:18](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/event/src/Event.ts#L18)

___

### BEFORE\_DOWN

▪ `Static` **BEFORE\_DOWN**: `string` = `'key.before_down'`

#### Defined in

[src/ui/packages/event/src/KeyEvent.ts:10](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/event/src/KeyEvent.ts#L10)

___

### BEFORE\_UP

▪ `Static` **BEFORE\_UP**: `string` = `'key.before_up'`

#### Defined in

[src/ui/packages/event/src/KeyEvent.ts:11](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/event/src/KeyEvent.ts#L11)

___

### DOWN

▪ `Static` **DOWN**: `string` = `'key.down'`

#### Defined in

[src/ui/packages/event/src/KeyEvent.ts:13](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/event/src/KeyEvent.ts#L13)

___

### HOLD

▪ `Static` **HOLD**: `string` = `'key.hold'`

#### Defined in

[src/ui/packages/event/src/KeyEvent.ts:14](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/event/src/KeyEvent.ts#L14)

___

### UP

▪ `Static` **UP**: `string` = `'key.up'`

#### Defined in

[src/ui/packages/event/src/KeyEvent.ts:15](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/event/src/KeyEvent.ts#L15)

___

### code

• `Readonly` **code**: [`IKeyCodes`](../modules.md#ikeycodes)

#### Implementation of

[IKeyEvent](../interfaces/IKeyEvent.md).[code](../interfaces/IKeyEvent.md#code)

#### Defined in

[src/ui/packages/event/src/KeyEvent.ts:17](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/event/src/KeyEvent.ts#L17)

___

### key

• `Readonly` **key**: `string`

#### Implementation of

[IKeyEvent](../interfaces/IKeyEvent.md).[key](../interfaces/IKeyEvent.md#key)

#### Defined in

[src/ui/packages/event/src/KeyEvent.ts:18](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/event/src/KeyEvent.ts#L18)

___

### x

• `Readonly` **x**: `number`

#### Implementation of

[IKeyEvent](../interfaces/IKeyEvent.md).[x](../interfaces/IKeyEvent.md#x)

#### Inherited from

[UIEvent](UIEvent.md).[x](UIEvent.md#x)

#### Defined in

[src/ui/packages/event/src/UIEvent.ts:10](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/event/src/UIEvent.ts#L10)

___

### y

• `Readonly` **y**: `number`

#### Implementation of

[IKeyEvent](../interfaces/IKeyEvent.md).[y](../interfaces/IKeyEvent.md#y)

#### Inherited from

[UIEvent](UIEvent.md).[y](UIEvent.md#y)

#### Defined in

[src/ui/packages/event/src/UIEvent.ts:11](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/event/src/UIEvent.ts#L11)

___

### path

• `Readonly` **path**: [`ILeafList`](../interfaces/ILeafList.md)

#### Implementation of

[IKeyEvent](../interfaces/IKeyEvent.md).[path](../interfaces/IKeyEvent.md#path)

#### Inherited from

[UIEvent](UIEvent.md).[path](UIEvent.md#path)

#### Defined in

[src/ui/packages/event/src/UIEvent.ts:13](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/event/src/UIEvent.ts#L13)

___

### throughPath

• `Optional` `Readonly` **throughPath**: [`ILeafList`](../interfaces/ILeafList.md)

#### Implementation of

[IKeyEvent](../interfaces/IKeyEvent.md).[throughPath](../interfaces/IKeyEvent.md#throughpath)

#### Inherited from

[UIEvent](UIEvent.md).[throughPath](UIEvent.md#throughpath)

#### Defined in

[src/ui/packages/event/src/UIEvent.ts:14](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/event/src/UIEvent.ts#L14)

___

### altKey

• `Readonly` **altKey**: `boolean`

#### Implementation of

[IKeyEvent](../interfaces/IKeyEvent.md).[altKey](../interfaces/IKeyEvent.md#altkey)

#### Inherited from

[UIEvent](UIEvent.md).[altKey](UIEvent.md#altkey)

#### Defined in

[src/ui/packages/event/src/UIEvent.ts:16](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/event/src/UIEvent.ts#L16)

___

### ctrlKey

• `Readonly` **ctrlKey**: `boolean`

#### Implementation of

[IKeyEvent](../interfaces/IKeyEvent.md).[ctrlKey](../interfaces/IKeyEvent.md#ctrlkey)

#### Inherited from

[UIEvent](UIEvent.md).[ctrlKey](UIEvent.md#ctrlkey)

#### Defined in

[src/ui/packages/event/src/UIEvent.ts:17](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/event/src/UIEvent.ts#L17)

___

### shiftKey

• `Readonly` **shiftKey**: `boolean`

#### Implementation of

[IKeyEvent](../interfaces/IKeyEvent.md).[shiftKey](../interfaces/IKeyEvent.md#shiftkey)

#### Inherited from

[UIEvent](UIEvent.md).[shiftKey](UIEvent.md#shiftkey)

#### Defined in

[src/ui/packages/event/src/UIEvent.ts:18](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/event/src/UIEvent.ts#L18)

___

### metaKey

• `Readonly` **metaKey**: `boolean`

#### Implementation of

[IKeyEvent](../interfaces/IKeyEvent.md).[metaKey](../interfaces/IKeyEvent.md#metakey)

#### Inherited from

[UIEvent](UIEvent.md).[metaKey](UIEvent.md#metakey)

#### Defined in

[src/ui/packages/event/src/UIEvent.ts:19](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/event/src/UIEvent.ts#L19)

___

### buttons

• `Readonly` **buttons**: `number`

#### Implementation of

[IKeyEvent](../interfaces/IKeyEvent.md).[buttons](../interfaces/IKeyEvent.md#buttons)

#### Inherited from

[UIEvent](UIEvent.md).[buttons](UIEvent.md#buttons)

#### Defined in

[src/ui/packages/event/src/UIEvent.ts:25](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/event/src/UIEvent.ts#L25)

___

### target

• `Readonly` **target**: [`ILeaf`](../interfaces/ILeaf.md)

#### Implementation of

[IKeyEvent](../interfaces/IKeyEvent.md).[target](../interfaces/IKeyEvent.md#target)

#### Inherited from

[UIEvent](UIEvent.md).[target](UIEvent.md#target)

#### Defined in

[src/ui/packages/event/src/UIEvent.ts:27](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/event/src/UIEvent.ts#L27)

___

### current

• `Readonly` **current**: [`ILeaf`](../interfaces/ILeaf.md)

#### Implementation of

[IKeyEvent](../interfaces/IKeyEvent.md).[current](../interfaces/IKeyEvent.md#current)

#### Inherited from

[UIEvent](UIEvent.md).[current](UIEvent.md#current)

#### Defined in

[src/ui/packages/event/src/UIEvent.ts:28](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/event/src/UIEvent.ts#L28)

___

### bubbles

• `Readonly` **bubbles**: `boolean` = `true`

#### Implementation of

[IKeyEvent](../interfaces/IKeyEvent.md).[bubbles](../interfaces/IKeyEvent.md#bubbles)

#### Inherited from

[UIEvent](UIEvent.md).[bubbles](UIEvent.md#bubbles)

#### Defined in

[src/ui/packages/event/src/UIEvent.ts:29](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/event/src/UIEvent.ts#L29)

___

### time

• `Readonly` **time**: `number`

#### Implementation of

[IKeyEvent](../interfaces/IKeyEvent.md).[time](../interfaces/IKeyEvent.md#time)

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

[IKeyEvent](../interfaces/IKeyEvent.md).[spaceKey](../interfaces/IKeyEvent.md#spacekey)

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

[IKeyEvent](../interfaces/IKeyEvent.md).[left](../interfaces/IKeyEvent.md#left)

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

[IKeyEvent](../interfaces/IKeyEvent.md).[right](../interfaces/IKeyEvent.md#right)

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

[IKeyEvent](../interfaces/IKeyEvent.md).[middle](../interfaces/IKeyEvent.md#middle)

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

[IKeyEvent](../interfaces/IKeyEvent.md).[stopDefault](../interfaces/IKeyEvent.md#stopdefault)

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

[IKeyEvent](../interfaces/IKeyEvent.md).[stopNow](../interfaces/IKeyEvent.md#stopnow)

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

[IKeyEvent](../interfaces/IKeyEvent.md).[stop](../interfaces/IKeyEvent.md#stop)

#### Inherited from

[UIEvent](UIEvent.md).[stop](UIEvent.md#stop)

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

[IKeyEvent](../interfaces/IKeyEvent.md).[isHoldKeys](../interfaces/IKeyEvent.md#isholdkeys)

#### Inherited from

[UIEvent](UIEvent.md).[isHoldKeys](UIEvent.md#isholdkeys)

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

[IKeyEvent](../interfaces/IKeyEvent.md).[getBoxPoint](../interfaces/IKeyEvent.md#getboxpoint)

#### Inherited from

[UIEvent](UIEvent.md).[getBoxPoint](UIEvent.md#getboxpoint)

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

[IKeyEvent](../interfaces/IKeyEvent.md).[getInnerPoint](../interfaces/IKeyEvent.md#getinnerpoint)

#### Inherited from

[UIEvent](UIEvent.md).[getInnerPoint](UIEvent.md#getinnerpoint)

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

[IKeyEvent](../interfaces/IKeyEvent.md).[getLocalPoint](../interfaces/IKeyEvent.md#getlocalpoint)

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

[IKeyEvent](../interfaces/IKeyEvent.md).[getPagePoint](../interfaces/IKeyEvent.md#getpagepoint)

#### Inherited from

[UIEvent](UIEvent.md).[getPagePoint](UIEvent.md#getpagepoint)

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

[IKeyEvent](../interfaces/IKeyEvent.md).[getInner](../interfaces/IKeyEvent.md#getinner)

#### Inherited from

[UIEvent](UIEvent.md).[getInner](UIEvent.md#getinner)

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

[IKeyEvent](../interfaces/IKeyEvent.md).[getLocal](../interfaces/IKeyEvent.md#getlocal)

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

[IKeyEvent](../interfaces/IKeyEvent.md).[getPage](../interfaces/IKeyEvent.md#getpage)

#### Inherited from

[UIEvent](UIEvent.md).[getPage](UIEvent.md#getpage)

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

[UIEvent](UIEvent.md).[changeName](UIEvent.md#changename)

#### Defined in

[src/ui/packages/event/src/UIEvent.ts:65](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/event/src/UIEvent.ts#L65)
