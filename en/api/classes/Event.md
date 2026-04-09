# Class: Event

## Hierarchy

- **`Event`**

  ↳ [`ChildEvent`](ChildEvent.md)

  ↳ [`PropertyEvent`](PropertyEvent.md)

  ↳ [`ImageEvent`](ImageEvent.md)

  ↳ [`BoundsEvent`](BoundsEvent.md)

  ↳ [`ResizeEvent`](ResizeEvent.md)

  ↳ [`WatchEvent`](WatchEvent.md)

  ↳ [`LayoutEvent`](LayoutEvent.md)

  ↳ [`RenderEvent`](RenderEvent.md)

  ↳ [`LeaferEvent`](LeaferEvent.md)

  ↳ [`UIEvent`](UIEvent.md)

  ↳ [`EditorEvent`](EditorEvent.md)

## Implements

- [`IEvent`](../interfaces/IEvent.md)

## Table of contents

### Constructors

- [constructor](Event.md#constructor)

### Properties

- [origin](Event.md#origin)
- [type](Event.md#type)
- [target](Event.md#target)
- [current](Event.md#current)
- [bubbles](Event.md#bubbles)
- [phase](Event.md#phase)
- [isStopDefault](Event.md#isstopdefault)
- [isStop](Event.md#isstop)
- [isStopNow](Event.md#isstopnow)

### Methods

- [stopDefault](Event.md#stopdefault)
- [stopNow](Event.md#stopnow)
- [stop](Event.md#stop)

## Constructors

### constructor

• **new Event**(`type`, `target?`): [`Event`](Event.md)

#### Parameters

| Name      | Type                                            |
| :-------- | :---------------------------------------------- |
| `type`    | `string`                                        |
| `target?` | [`IEventTarget`](../interfaces/IEventTarget.md) |

#### Returns

[`Event`](Event.md)

#### Defined in

[src/leafer/packages/event/src/Event.ts:20](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/event/src/Event.ts#L20)

## Properties

### origin

• `Readonly` **origin**: [`IObject`](../interfaces/IObject.md)

#### Implementation of

[IEvent](../interfaces/IEvent.md).[origin](../interfaces/IEvent.md#origin)

#### Defined in

[src/leafer/packages/event/src/Event.ts:7](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/event/src/Event.ts#L7)

___

### type

• `Readonly` **type**: `string`

#### Implementation of

[IEvent](../interfaces/IEvent.md).[type](../interfaces/IEvent.md#type)

#### Defined in

[src/leafer/packages/event/src/Event.ts:9](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/event/src/Event.ts#L9)

___

### target

• `Readonly` **target**: [`IEventTarget`](../interfaces/IEventTarget.md)

#### Implementation of

[IEvent](../interfaces/IEvent.md).[target](../interfaces/IEvent.md#target)

#### Defined in

[src/leafer/packages/event/src/Event.ts:10](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/event/src/Event.ts#L10)

___

### current

• `Readonly` **current**: [`IEventTarget`](../interfaces/IEventTarget.md)

#### Implementation of

[IEvent](../interfaces/IEvent.md).[current](../interfaces/IEvent.md#current)

#### Defined in

[src/leafer/packages/event/src/Event.ts:11](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/event/src/Event.ts#L11)

___

### bubbles

• `Readonly` **bubbles**: `boolean` = `false`

#### Implementation of

[IEvent](../interfaces/IEvent.md).[bubbles](../interfaces/IEvent.md#bubbles)

#### Defined in

[src/leafer/packages/event/src/Event.ts:13](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/event/src/Event.ts#L13)

___

### phase

• `Readonly` **phase**: `number`

#### Implementation of

[IEvent](../interfaces/IEvent.md).[phase](../interfaces/IEvent.md#phase)

#### Defined in

[src/leafer/packages/event/src/Event.ts:14](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/event/src/Event.ts#L14)

___

### isStopDefault

• **isStopDefault**: `boolean`

#### Implementation of

[IEvent](../interfaces/IEvent.md).[isStopDefault](../interfaces/IEvent.md#isstopdefault)

#### Defined in

[src/leafer/packages/event/src/Event.ts:16](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/event/src/Event.ts#L16)

___

### isStop

• **isStop**: `boolean`

#### Implementation of

[IEvent](../interfaces/IEvent.md).[isStop](../interfaces/IEvent.md#isstop)

#### Defined in

[src/leafer/packages/event/src/Event.ts:17](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/event/src/Event.ts#L17)

___

### isStopNow

• **isStopNow**: `boolean`

#### Implementation of

[IEvent](../interfaces/IEvent.md).[isStopNow](../interfaces/IEvent.md#isstopnow)

#### Defined in

[src/leafer/packages/event/src/Event.ts:18](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/event/src/Event.ts#L18)

## Methods

### stopDefault

▸ **stopDefault**(): `void`

#### Returns

`void`

#### Implementation of

[IEvent](../interfaces/IEvent.md).[stopDefault](../interfaces/IEvent.md#stopdefault)

#### Defined in

[src/leafer/packages/event/src/Event.ts:25](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/event/src/Event.ts#L25)

___

### stopNow

▸ **stopNow**(): `void`

#### Returns

`void`

#### Implementation of

[IEvent](../interfaces/IEvent.md).[stopNow](../interfaces/IEvent.md#stopnow)

#### Defined in

[src/leafer/packages/event/src/Event.ts:30](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/event/src/Event.ts#L30)

___

### stop

▸ **stop**(): `void`

#### Returns

`void`

#### Implementation of

[IEvent](../interfaces/IEvent.md).[stop](../interfaces/IEvent.md#stop)

#### Defined in

[src/leafer/packages/event/src/Event.ts:36](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/event/src/Event.ts#L36)
