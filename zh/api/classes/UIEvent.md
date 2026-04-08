# Class: UIEvent

## Hierarchy

- [`Event`](Event.md)

  ↳ **`UIEvent`**

  ↳↳ [`PointerEvent`](PointerEvent.md)

  ↳↳ [`TouchEvent`](TouchEvent.md)

  ↳↳ [`KeyEvent`](KeyEvent.md)

## Implements

- [`IUIEvent`](../interfaces/IUIEvent.md)

## Table of contents

### Constructors

- [constructor](UIEvent.md#constructor)

### Properties

- [origin](UIEvent.md#origin)
- [type](UIEvent.md#type)
- [phase](UIEvent.md#phase)
- [isStopDefault](UIEvent.md#isstopdefault)
- [isStop](UIEvent.md#isstop)
- [isStopNow](UIEvent.md#isstopnow)
- [x](UIEvent.md#x)
- [y](UIEvent.md#y)
- [path](UIEvent.md#path)
- [throughPath](UIEvent.md#throughpath)
- [altKey](UIEvent.md#altkey)
- [ctrlKey](UIEvent.md#ctrlkey)
- [shiftKey](UIEvent.md#shiftkey)
- [metaKey](UIEvent.md#metakey)
- [buttons](UIEvent.md#buttons)
- [target](UIEvent.md#target)
- [current](UIEvent.md#current)
- [bubbles](UIEvent.md#bubbles)
- [time](UIEvent.md#time)

### Accessors

- [spaceKey](UIEvent.md#spacekey)
- [left](UIEvent.md#left)
- [right](UIEvent.md#right)
- [middle](UIEvent.md#middle)

### Methods

- [stopDefault](UIEvent.md#stopdefault)
- [stopNow](UIEvent.md#stopnow)
- [stop](UIEvent.md#stop)
- [isHoldKeys](UIEvent.md#isholdkeys)
- [getBoxPoint](UIEvent.md#getboxpoint)
- [getInnerPoint](UIEvent.md#getinnerpoint)
- [getLocalPoint](UIEvent.md#getlocalpoint)
- [getPagePoint](UIEvent.md#getpagepoint)
- [getInner](UIEvent.md#getinner)
- [getLocal](UIEvent.md#getlocal)
- [getPage](UIEvent.md#getpage)
- [changeName](UIEvent.md#changename)

## Constructors

### constructor

• **new UIEvent**(`params`): [`UIEvent`](UIEvent.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `params` | [`IUIEvent`](../interfaces/IUIEvent.md) |

#### Returns

[`UIEvent`](UIEvent.md)

#### Overrides

[Event](Event.md).[constructor](Event.md#constructor)

#### Defined in

[src/ui/packages/event/src/UIEvent.ts:33](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/event/src/UIEvent.ts#L33)

## Properties

### origin

• `Readonly` **origin**: [`IObject`](../interfaces/IObject.md)

#### Implementation of

[IUIEvent](../interfaces/IUIEvent.md).[origin](../interfaces/IUIEvent.md#origin)

#### Inherited from

[Event](Event.md).[origin](Event.md#origin)

#### Defined in

[src/leafer/packages/event/src/Event.ts:7](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/event/src/Event.ts#L7)

___

### type

• `Readonly` **type**: `string`

#### Implementation of

[IUIEvent](../interfaces/IUIEvent.md).[type](../interfaces/IUIEvent.md#type)

#### Inherited from

[Event](Event.md).[type](Event.md#type)

#### Defined in

[src/leafer/packages/event/src/Event.ts:9](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/event/src/Event.ts#L9)

___

### phase

• `Readonly` **phase**: `number`

#### Implementation of

[IUIEvent](../interfaces/IUIEvent.md).[phase](../interfaces/IUIEvent.md#phase)

#### Inherited from

[Event](Event.md).[phase](Event.md#phase)

#### Defined in

[src/leafer/packages/event/src/Event.ts:14](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/event/src/Event.ts#L14)

___

### isStopDefault

• **isStopDefault**: `boolean`

#### Implementation of

[IUIEvent](../interfaces/IUIEvent.md).[isStopDefault](../interfaces/IUIEvent.md#isstopdefault)

#### Inherited from

[Event](Event.md).[isStopDefault](Event.md#isstopdefault)

#### Defined in

[src/leafer/packages/event/src/Event.ts:16](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/event/src/Event.ts#L16)

___

### isStop

• **isStop**: `boolean`

#### Implementation of

[IUIEvent](../interfaces/IUIEvent.md).[isStop](../interfaces/IUIEvent.md#isstop)

#### Inherited from

[Event](Event.md).[isStop](Event.md#isstop)

#### Defined in

[src/leafer/packages/event/src/Event.ts:17](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/event/src/Event.ts#L17)

___

### isStopNow

• **isStopNow**: `boolean`

#### Implementation of

[IUIEvent](../interfaces/IUIEvent.md).[isStopNow](../interfaces/IUIEvent.md#isstopnow)

#### Inherited from

[Event](Event.md).[isStopNow](Event.md#isstopnow)

#### Defined in

[src/leafer/packages/event/src/Event.ts:18](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/event/src/Event.ts#L18)

___

### x

• `Readonly` **x**: `number`

#### Implementation of

[IUIEvent](../interfaces/IUIEvent.md).[x](../interfaces/IUIEvent.md#x)

#### Defined in

[src/ui/packages/event/src/UIEvent.ts:10](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/event/src/UIEvent.ts#L10)

___

### y

• `Readonly` **y**: `number`

#### Implementation of

[IUIEvent](../interfaces/IUIEvent.md).[y](../interfaces/IUIEvent.md#y)

#### Defined in

[src/ui/packages/event/src/UIEvent.ts:11](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/event/src/UIEvent.ts#L11)

___

### path

• `Readonly` **path**: [`ILeafList`](../interfaces/ILeafList.md)

#### Implementation of

[IUIEvent](../interfaces/IUIEvent.md).[path](../interfaces/IUIEvent.md#path)

#### Defined in

[src/ui/packages/event/src/UIEvent.ts:13](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/event/src/UIEvent.ts#L13)

___

### throughPath

• `Optional` `Readonly` **throughPath**: [`ILeafList`](../interfaces/ILeafList.md)

#### Implementation of

[IUIEvent](../interfaces/IUIEvent.md).[throughPath](../interfaces/IUIEvent.md#throughpath)

#### Defined in

[src/ui/packages/event/src/UIEvent.ts:14](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/event/src/UIEvent.ts#L14)

___

### altKey

• `Readonly` **altKey**: `boolean`

#### Implementation of

[IUIEvent](../interfaces/IUIEvent.md).[altKey](../interfaces/IUIEvent.md#altkey)

#### Defined in

[src/ui/packages/event/src/UIEvent.ts:16](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/event/src/UIEvent.ts#L16)

___

### ctrlKey

• `Readonly` **ctrlKey**: `boolean`

#### Implementation of

[IUIEvent](../interfaces/IUIEvent.md).[ctrlKey](../interfaces/IUIEvent.md#ctrlkey)

#### Defined in

[src/ui/packages/event/src/UIEvent.ts:17](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/event/src/UIEvent.ts#L17)

___

### shiftKey

• `Readonly` **shiftKey**: `boolean`

#### Implementation of

[IUIEvent](../interfaces/IUIEvent.md).[shiftKey](../interfaces/IUIEvent.md#shiftkey)

#### Defined in

[src/ui/packages/event/src/UIEvent.ts:18](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/event/src/UIEvent.ts#L18)

___

### metaKey

• `Readonly` **metaKey**: `boolean`

#### Implementation of

[IUIEvent](../interfaces/IUIEvent.md).[metaKey](../interfaces/IUIEvent.md#metakey)

#### Defined in

[src/ui/packages/event/src/UIEvent.ts:19](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/event/src/UIEvent.ts#L19)

___

### buttons

• `Readonly` **buttons**: `number`

#### Implementation of

[IUIEvent](../interfaces/IUIEvent.md).[buttons](../interfaces/IUIEvent.md#buttons)

#### Defined in

[src/ui/packages/event/src/UIEvent.ts:25](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/event/src/UIEvent.ts#L25)

___

### target

• `Readonly` **target**: [`ILeaf`](../interfaces/ILeaf.md)

#### Implementation of

[IUIEvent](../interfaces/IUIEvent.md).[target](../interfaces/IUIEvent.md#target)

#### Overrides

[Event](Event.md).[target](Event.md#target)

#### Defined in

[src/ui/packages/event/src/UIEvent.ts:27](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/event/src/UIEvent.ts#L27)

___

### current

• `Readonly` **current**: [`ILeaf`](../interfaces/ILeaf.md)

#### Implementation of

[IUIEvent](../interfaces/IUIEvent.md).[current](../interfaces/IUIEvent.md#current)

#### Overrides

[Event](Event.md).[current](Event.md#current)

#### Defined in

[src/ui/packages/event/src/UIEvent.ts:28](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/event/src/UIEvent.ts#L28)

___

### bubbles

• `Readonly` **bubbles**: `boolean` = `true`

#### Implementation of

[IUIEvent](../interfaces/IUIEvent.md).[bubbles](../interfaces/IUIEvent.md#bubbles)

#### Overrides

[Event](Event.md).[bubbles](Event.md#bubbles)

#### Defined in

[src/ui/packages/event/src/UIEvent.ts:29](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/event/src/UIEvent.ts#L29)

___

### time

• `Readonly` **time**: `number`

#### Implementation of

[IUIEvent](../interfaces/IUIEvent.md).[time](../interfaces/IUIEvent.md#time)

#### Defined in

[src/ui/packages/event/src/UIEvent.ts:31](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/event/src/UIEvent.ts#L31)

## Accessors

### spaceKey

• `get` **spaceKey**(): `boolean`

#### Returns

`boolean`

#### Implementation of

[IUIEvent](../interfaces/IUIEvent.md).[spaceKey](../interfaces/IUIEvent.md#spacekey)

#### Defined in

[src/ui/packages/event/src/UIEvent.ts:20](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/event/src/UIEvent.ts#L20)

___

### left

• `get` **left**(): `boolean`

#### Returns

`boolean`

#### Implementation of

[IUIEvent](../interfaces/IUIEvent.md).[left](../interfaces/IUIEvent.md#left)

#### Defined in

[src/ui/packages/event/src/UIEvent.ts:22](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/event/src/UIEvent.ts#L22)

___

### right

• `get` **right**(): `boolean`

#### Returns

`boolean`

#### Implementation of

[IUIEvent](../interfaces/IUIEvent.md).[right](../interfaces/IUIEvent.md#right)

#### Defined in

[src/ui/packages/event/src/UIEvent.ts:23](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/event/src/UIEvent.ts#L23)

___

### middle

• `get` **middle**(): `boolean`

#### Returns

`boolean`

#### Implementation of

[IUIEvent](../interfaces/IUIEvent.md).[middle](../interfaces/IUIEvent.md#middle)

#### Defined in

[src/ui/packages/event/src/UIEvent.ts:24](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/event/src/UIEvent.ts#L24)

## Methods

### stopDefault

▸ **stopDefault**(): `void`

#### Returns

`void`

#### Implementation of

[IUIEvent](../interfaces/IUIEvent.md).[stopDefault](../interfaces/IUIEvent.md#stopdefault)

#### Inherited from

[Event](Event.md).[stopDefault](Event.md#stopdefault)

#### Defined in

[src/leafer/packages/event/src/Event.ts:25](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/event/src/Event.ts#L25)

___

### stopNow

▸ **stopNow**(): `void`

#### Returns

`void`

#### Implementation of

[IUIEvent](../interfaces/IUIEvent.md).[stopNow](../interfaces/IUIEvent.md#stopnow)

#### Inherited from

[Event](Event.md).[stopNow](Event.md#stopnow)

#### Defined in

[src/leafer/packages/event/src/Event.ts:30](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/event/src/Event.ts#L30)

___

### stop

▸ **stop**(): `void`

#### Returns

`void`

#### Implementation of

[IUIEvent](../interfaces/IUIEvent.md).[stop](../interfaces/IUIEvent.md#stop)

#### Inherited from

[Event](Event.md).[stop](Event.md#stop)

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

[IUIEvent](../interfaces/IUIEvent.md).[isHoldKeys](../interfaces/IUIEvent.md#isholdkeys)

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

[IUIEvent](../interfaces/IUIEvent.md).[getBoxPoint](../interfaces/IUIEvent.md#getboxpoint)

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

[IUIEvent](../interfaces/IUIEvent.md).[getInnerPoint](../interfaces/IUIEvent.md#getinnerpoint)

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

[IUIEvent](../interfaces/IUIEvent.md).[getLocalPoint](../interfaces/IUIEvent.md#getlocalpoint)

#### Defined in

[src/ui/packages/event/src/UIEvent.ts:51](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/event/src/UIEvent.ts#L51)

___

### getPagePoint

▸ **getPagePoint**(): [`IPointData`](../interfaces/IPointData.md)

#### Returns

[`IPointData`](../interfaces/IPointData.md)

#### Implementation of

[IUIEvent](../interfaces/IUIEvent.md).[getPagePoint](../interfaces/IUIEvent.md#getpagepoint)

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

[IUIEvent](../interfaces/IUIEvent.md).[getInner](../interfaces/IUIEvent.md#getinner)

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

[IUIEvent](../interfaces/IUIEvent.md).[getLocal](../interfaces/IUIEvent.md#getlocal)

#### Defined in

[src/ui/packages/event/src/UIEvent.ts:61](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/event/src/UIEvent.ts#L61)

___

### getPage

▸ **getPage**(): [`IPointData`](../interfaces/IPointData.md)

#### Returns

[`IPointData`](../interfaces/IPointData.md)

#### Implementation of

[IUIEvent](../interfaces/IUIEvent.md).[getPage](../interfaces/IUIEvent.md#getpage)

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

#### Defined in

[src/ui/packages/event/src/UIEvent.ts:65](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/event/src/UIEvent.ts#L65)
