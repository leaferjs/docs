# Interface: IUIEvent

## Hierarchy

- [`IEvent`](IEvent.md)

  ↳ **`IUIEvent`**

  ↳↳ [`IPointerEvent`](IPointerEvent.md)

  ↳↳ [`ITouchEvent`](ITouchEvent.md)

  ↳↳ [`IWheelEvent`](IWheelEvent.md)

  ↳↳ [`IKeyEvent`](IKeyEvent.md)

## Implemented by

- [`UIEvent`](../classes/UIEvent.md)

## Table of contents

### Properties

- [origin](IUIEvent.md#origin)
- [type](IUIEvent.md#type)
- [target](IUIEvent.md#target)
- [current](IUIEvent.md#current)
- [bubbles](IUIEvent.md#bubbles)
- [phase](IUIEvent.md#phase)
- [isStopDefault](IUIEvent.md#isstopdefault)
- [isStop](IUIEvent.md#isstop)
- [isStopNow](IUIEvent.md#isstopnow)
- [x](IUIEvent.md#x)
- [y](IUIEvent.md#y)
- [altKey](IUIEvent.md#altkey)
- [ctrlKey](IUIEvent.md#ctrlkey)
- [shiftKey](IUIEvent.md#shiftkey)
- [metaKey](IUIEvent.md#metakey)
- [spaceKey](IUIEvent.md#spacekey)
- [left](IUIEvent.md#left)
- [right](IUIEvent.md#right)
- [middle](IUIEvent.md#middle)
- [buttons](IUIEvent.md#buttons)
- [path](IUIEvent.md#path)
- [throughPath](IUIEvent.md#throughpath)
- [time](IUIEvent.md#time)

### Methods

- [stopDefault](IUIEvent.md#stopdefault)
- [stopNow](IUIEvent.md#stopnow)
- [stop](IUIEvent.md#stop)
- [isHoldKeys](IUIEvent.md#isholdkeys)
- [getBoxPoint](IUIEvent.md#getboxpoint)
- [getInnerPoint](IUIEvent.md#getinnerpoint)
- [getLocalPoint](IUIEvent.md#getlocalpoint)
- [getPagePoint](IUIEvent.md#getpagepoint)
- [getInner](IUIEvent.md#getinner)
- [getLocal](IUIEvent.md#getlocal)
- [getPage](IUIEvent.md#getpage)

## Properties

### origin

• `Optional` **origin**: [`IObject`](IObject.md)

#### Inherited from

[IEvent](IEvent.md).[origin](IEvent.md#origin)

#### Defined in

[src/leafer/packages/interface/src/event/IEvent.ts:9](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/event/IEvent.ts#L9)

___

### type

• `Optional` **type**: `string`

#### Inherited from

[IEvent](IEvent.md).[type](IEvent.md#type)

#### Defined in

[src/leafer/packages/interface/src/event/IEvent.ts:11](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/event/IEvent.ts#L11)

___

### target

• `Optional` **target**: [`IEventTarget`](IEventTarget.md)

#### Inherited from

[IEvent](IEvent.md).[target](IEvent.md#target)

#### Defined in

[src/leafer/packages/interface/src/event/IEvent.ts:12](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/event/IEvent.ts#L12)

___

### current

• `Optional` **current**: [`IEventTarget`](IEventTarget.md)

#### Inherited from

[IEvent](IEvent.md).[current](IEvent.md#current)

#### Defined in

[src/leafer/packages/interface/src/event/IEvent.ts:13](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/event/IEvent.ts#L13)

___

### bubbles

• `Optional` **bubbles**: `boolean`

#### Inherited from

[IEvent](IEvent.md).[bubbles](IEvent.md#bubbles)

#### Defined in

[src/leafer/packages/interface/src/event/IEvent.ts:15](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/event/IEvent.ts#L15)

___

### phase

• `Optional` **phase**: `number`

#### Inherited from

[IEvent](IEvent.md).[phase](IEvent.md#phase)

#### Defined in

[src/leafer/packages/interface/src/event/IEvent.ts:16](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/event/IEvent.ts#L16)

___

### isStopDefault

• `Optional` **isStopDefault**: `boolean`

#### Inherited from

[IEvent](IEvent.md).[isStopDefault](IEvent.md#isstopdefault)

#### Defined in

[src/leafer/packages/interface/src/event/IEvent.ts:18](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/event/IEvent.ts#L18)

___

### isStop

• `Optional` **isStop**: `boolean`

#### Inherited from

[IEvent](IEvent.md).[isStop](IEvent.md#isstop)

#### Defined in

[src/leafer/packages/interface/src/event/IEvent.ts:19](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/event/IEvent.ts#L19)

___

### isStopNow

• `Optional` **isStopNow**: `boolean`

#### Inherited from

[IEvent](IEvent.md).[isStopNow](IEvent.md#isstopnow)

#### Defined in

[src/leafer/packages/interface/src/event/IEvent.ts:20](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/event/IEvent.ts#L20)

___

### x

• **x**: `number`

#### Defined in

[src/leafer/packages/interface/src/event/IUIEvent.ts:9](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/event/IUIEvent.ts#L9)

___

### y

• **y**: `number`

#### Defined in

[src/leafer/packages/interface/src/event/IUIEvent.ts:10](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/event/IUIEvent.ts#L10)

___

### altKey

• `Optional` **altKey**: `boolean`

#### Defined in

[src/leafer/packages/interface/src/event/IUIEvent.ts:12](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/event/IUIEvent.ts#L12)

___

### ctrlKey

• `Optional` **ctrlKey**: `boolean`

#### Defined in

[src/leafer/packages/interface/src/event/IUIEvent.ts:13](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/event/IUIEvent.ts#L13)

___

### shiftKey

• `Optional` **shiftKey**: `boolean`

#### Defined in

[src/leafer/packages/interface/src/event/IUIEvent.ts:14](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/event/IUIEvent.ts#L14)

___

### metaKey

• `Optional` **metaKey**: `boolean`

#### Defined in

[src/leafer/packages/interface/src/event/IUIEvent.ts:15](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/event/IUIEvent.ts#L15)

___

### spaceKey

• `Optional` `Readonly` **spaceKey**: `boolean`

#### Defined in

[src/leafer/packages/interface/src/event/IUIEvent.ts:16](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/event/IUIEvent.ts#L16)

___

### left

• `Optional` `Readonly` **left**: `boolean`

#### Defined in

[src/leafer/packages/interface/src/event/IUIEvent.ts:18](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/event/IUIEvent.ts#L18)

___

### right

• `Optional` `Readonly` **right**: `boolean`

#### Defined in

[src/leafer/packages/interface/src/event/IUIEvent.ts:19](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/event/IUIEvent.ts#L19)

___

### middle

• `Optional` `Readonly` **middle**: `boolean`

#### Defined in

[src/leafer/packages/interface/src/event/IUIEvent.ts:20](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/event/IUIEvent.ts#L20)

___

### buttons

• `Optional` **buttons**: `number`

#### Defined in

[src/leafer/packages/interface/src/event/IUIEvent.ts:21](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/event/IUIEvent.ts#L21)

___

### path

• `Optional` **path**: [`ILeafList`](ILeafList.md)

#### Defined in

[src/leafer/packages/interface/src/event/IUIEvent.ts:23](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/event/IUIEvent.ts#L23)

___

### throughPath

• `Optional` **throughPath**: [`ILeafList`](ILeafList.md)

#### Defined in

[src/leafer/packages/interface/src/event/IUIEvent.ts:24](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/event/IUIEvent.ts#L24)

___

### time

• `Optional` **time**: `number`

#### Defined in

[src/leafer/packages/interface/src/event/IUIEvent.ts:26](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/event/IUIEvent.ts#L26)

## Methods

### stopDefault

▸ **stopDefault**(): `void`

#### Returns

`void`

#### Inherited from

[IEvent](IEvent.md).[stopDefault](IEvent.md#stopdefault)

#### Defined in

[src/leafer/packages/interface/src/event/IEvent.ts:21](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/event/IEvent.ts#L21)

___

### stopNow

▸ **stopNow**(): `void`

#### Returns

`void`

#### Inherited from

[IEvent](IEvent.md).[stopNow](IEvent.md#stopnow)

#### Defined in

[src/leafer/packages/interface/src/event/IEvent.ts:22](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/event/IEvent.ts#L22)

___

### stop

▸ **stop**(): `void`

#### Returns

`void`

#### Inherited from

[IEvent](IEvent.md).[stop](IEvent.md#stop)

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

#### Defined in

[src/leafer/packages/interface/src/event/IUIEvent.ts:32](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/event/IUIEvent.ts#L32)

___

### getPagePoint

▸ **getPagePoint**(): [`IPointData`](IPointData.md)

#### Returns

[`IPointData`](IPointData.md)

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

#### Defined in

[src/leafer/packages/interface/src/event/IUIEvent.ts:37](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/event/IUIEvent.ts#L37)

___

### getPage

▸ **getPage**(): [`IPointData`](IPointData.md)

#### Returns

[`IPointData`](IPointData.md)

#### Defined in

[src/leafer/packages/interface/src/event/IUIEvent.ts:38](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/event/IUIEvent.ts#L38)
