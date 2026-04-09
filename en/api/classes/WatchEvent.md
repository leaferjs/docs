# Class: WatchEvent

## Hierarchy

- [`Event`](Event.md)

  ↳ **`WatchEvent`**

## Implements

- [`IWatchEvent`](../interfaces/IWatchEvent.md)

## Table of contents

### Constructors

- [constructor](WatchEvent.md#constructor)

### Properties

- [origin](WatchEvent.md#origin)
- [type](WatchEvent.md#type)
- [target](WatchEvent.md#target)
- [current](WatchEvent.md#current)
- [bubbles](WatchEvent.md#bubbles)
- [phase](WatchEvent.md#phase)
- [isStopDefault](WatchEvent.md#isstopdefault)
- [isStop](WatchEvent.md#isstop)
- [isStopNow](WatchEvent.md#isstopnow)
- [REQUEST](WatchEvent.md#request)
- [DATA](WatchEvent.md#data)
- [data](WatchEvent.md#data-1)

### Methods

- [stopDefault](WatchEvent.md#stopdefault)
- [stopNow](WatchEvent.md#stopnow)
- [stop](WatchEvent.md#stop)

## Constructors

### constructor

• **new WatchEvent**(`type`, `data?`): [`WatchEvent`](WatchEvent.md)

#### Parameters

| Name    | Type                                                  |
| :------ | :---------------------------------------------------- |
| `type`  | `string`                                              |
| `data?` | [`IWatchEventData`](../interfaces/IWatchEventData.md) |

#### Returns

[`WatchEvent`](WatchEvent.md)

#### Overrides

[Event](Event.md).[constructor](Event.md#constructor)

#### Defined in

[src/leafer/packages/event/src/WatchEvent.ts:13](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/event/src/WatchEvent.ts#L13)

## Properties

### origin

• `Readonly` **origin**: [`IObject`](../interfaces/IObject.md)

#### Implementation of

[IWatchEvent](../interfaces/IWatchEvent.md).[origin](../interfaces/IWatchEvent.md#origin)

#### Inherited from

[Event](Event.md).[origin](Event.md#origin)

#### Defined in

[src/leafer/packages/event/src/Event.ts:7](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/event/src/Event.ts#L7)

___

### type

• `Readonly` **type**: `string`

#### Implementation of

[IWatchEvent](../interfaces/IWatchEvent.md).[type](../interfaces/IWatchEvent.md#type)

#### Inherited from

[Event](Event.md).[type](Event.md#type)

#### Defined in

[src/leafer/packages/event/src/Event.ts:9](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/event/src/Event.ts#L9)

___

### target

• `Readonly` **target**: [`IEventTarget`](../interfaces/IEventTarget.md)

#### Implementation of

[IWatchEvent](../interfaces/IWatchEvent.md).[target](../interfaces/IWatchEvent.md#target)

#### Inherited from

[Event](Event.md).[target](Event.md#target)

#### Defined in

[src/leafer/packages/event/src/Event.ts:10](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/event/src/Event.ts#L10)

___

### current

• `Readonly` **current**: [`IEventTarget`](../interfaces/IEventTarget.md)

#### Implementation of

[IWatchEvent](../interfaces/IWatchEvent.md).[current](../interfaces/IWatchEvent.md#current)

#### Inherited from

[Event](Event.md).[current](Event.md#current)

#### Defined in

[src/leafer/packages/event/src/Event.ts:11](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/event/src/Event.ts#L11)

___

### bubbles

• `Readonly` **bubbles**: `boolean` = `false`

#### Implementation of

[IWatchEvent](../interfaces/IWatchEvent.md).[bubbles](../interfaces/IWatchEvent.md#bubbles)

#### Inherited from

[Event](Event.md).[bubbles](Event.md#bubbles)

#### Defined in

[src/leafer/packages/event/src/Event.ts:13](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/event/src/Event.ts#L13)

___

### phase

• `Readonly` **phase**: `number`

#### Implementation of

[IWatchEvent](../interfaces/IWatchEvent.md).[phase](../interfaces/IWatchEvent.md#phase)

#### Inherited from

[Event](Event.md).[phase](Event.md#phase)

#### Defined in

[src/leafer/packages/event/src/Event.ts:14](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/event/src/Event.ts#L14)

___

### isStopDefault

• **isStopDefault**: `boolean`

#### Implementation of

[IWatchEvent](../interfaces/IWatchEvent.md).[isStopDefault](../interfaces/IWatchEvent.md#isstopdefault)

#### Inherited from

[Event](Event.md).[isStopDefault](Event.md#isstopdefault)

#### Defined in

[src/leafer/packages/event/src/Event.ts:16](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/event/src/Event.ts#L16)

___

### isStop

• **isStop**: `boolean`

#### Implementation of

[IWatchEvent](../interfaces/IWatchEvent.md).[isStop](../interfaces/IWatchEvent.md#isstop)

#### Inherited from

[Event](Event.md).[isStop](Event.md#isstop)

#### Defined in

[src/leafer/packages/event/src/Event.ts:17](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/event/src/Event.ts#L17)

___

### isStopNow

• **isStopNow**: `boolean`

#### Implementation of

[IWatchEvent](../interfaces/IWatchEvent.md).[isStopNow](../interfaces/IWatchEvent.md#isstopnow)

#### Inherited from

[Event](Event.md).[isStopNow](Event.md#isstopnow)

#### Defined in

[src/leafer/packages/event/src/Event.ts:18](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/event/src/Event.ts#L18)

___

### REQUEST

▪ `Static` **REQUEST**: `string` = `'watch.request'`

#### Defined in

[src/leafer/packages/event/src/WatchEvent.ts:8](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/event/src/WatchEvent.ts#L8)

___

### DATA

▪ `Static` **DATA**: `string` = `'watch.data'`

#### Defined in

[src/leafer/packages/event/src/WatchEvent.ts:9](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/event/src/WatchEvent.ts#L9)

___

### data

• `Readonly` **data**: [`IWatchEventData`](../interfaces/IWatchEventData.md)

#### Implementation of

[IWatchEvent](../interfaces/IWatchEvent.md).[data](../interfaces/IWatchEvent.md#data)

#### Defined in

[src/leafer/packages/event/src/WatchEvent.ts:11](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/event/src/WatchEvent.ts#L11)

## Methods

### stopDefault

▸ **stopDefault**(): `void`

#### Returns

`void`

#### Implementation of

[IWatchEvent](../interfaces/IWatchEvent.md).[stopDefault](../interfaces/IWatchEvent.md#stopdefault)

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

[IWatchEvent](../interfaces/IWatchEvent.md).[stopNow](../interfaces/IWatchEvent.md#stopnow)

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

[IWatchEvent](../interfaces/IWatchEvent.md).[stop](../interfaces/IWatchEvent.md#stop)

#### Inherited from

[Event](Event.md).[stop](Event.md#stop)

#### Defined in

[src/leafer/packages/event/src/Event.ts:36](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/event/src/Event.ts#L36)
