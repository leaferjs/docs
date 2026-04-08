# Class: Eventer

## Hierarchy

- **`Eventer`**

  ↳ [`Animate`](Animate.md)

## Implements

- [`IEventer`](../interfaces/IEventer.md)

## Table of contents

### Constructors

- [constructor](Eventer.md#constructor)

### Properties

- [innerId](Eventer.md#innerid)
- [\_\_captureMap](Eventer.md#__capturemap)
- [\_\_bubbleMap](Eventer.md#__bubblemap)
- [\_\_hasLocalEvent](Eventer.md#__haslocalevent)
- [\_\_hasWorldEvent](Eventer.md#__hasworldevent)
- [syncEventer](Eventer.md#synceventer)

### Accessors

- [event](Eventer.md#event)

### Methods

- [on](Eventer.md#on)
- [off](Eventer.md#off)
- [on\_](Eventer.md#on_)
- [off\_](Eventer.md#off_)
- [once](Eventer.md#once)
- [emit](Eventer.md#emit)
- [emitEvent](Eventer.md#emitevent)
- [hasEvent](Eventer.md#hasevent)
- [destroy](Eventer.md#destroy)

## Constructors

### constructor

• **new Eventer**(): [`Eventer`](Eventer.md)

#### Returns

[`Eventer`](Eventer.md)

## Properties

### innerId

• `Readonly` **innerId**: `number`

#### Implementation of

[IEventer](../interfaces/IEventer.md).[innerId](../interfaces/IEventer.md#innerid)

#### Defined in

[src/leafer/packages/event/src/Eventer.ts:13](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/event/src/Eventer.ts#L13)

___

### \_\_captureMap

• `Optional` **\_\_captureMap**: [`IEventListenerMap`](../interfaces/IEventListenerMap.md)

#### Implementation of

[IEventer](../interfaces/IEventer.md).[__captureMap](../interfaces/IEventer.md#__capturemap)

#### Defined in

[src/leafer/packages/event/src/Eventer.ts:15](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/event/src/Eventer.ts#L15)

___

### \_\_bubbleMap

• `Optional` **\_\_bubbleMap**: [`IEventListenerMap`](../interfaces/IEventListenerMap.md)

#### Implementation of

[IEventer](../interfaces/IEventer.md).[__bubbleMap](../interfaces/IEventer.md#__bubblemap)

#### Defined in

[src/leafer/packages/event/src/Eventer.ts:17](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/event/src/Eventer.ts#L17)

___

### \_\_hasLocalEvent

• `Optional` **\_\_hasLocalEvent**: `boolean`

#### Implementation of

[IEventer](../interfaces/IEventer.md).[__hasLocalEvent](../interfaces/IEventer.md#__haslocalevent)

#### Defined in

[src/leafer/packages/event/src/Eventer.ts:19](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/event/src/Eventer.ts#L19)

___

### \_\_hasWorldEvent

• `Optional` **\_\_hasWorldEvent**: `boolean`

#### Implementation of

[IEventer](../interfaces/IEventer.md).[__hasWorldEvent](../interfaces/IEventer.md#__hasworldevent)

#### Defined in

[src/leafer/packages/event/src/Eventer.ts:20](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/event/src/Eventer.ts#L20)

___

### syncEventer

• `Optional` **syncEventer**: [`IEventer`](../interfaces/IEventer.md)

#### Implementation of

[IEventer](../interfaces/IEventer.md).[syncEventer](../interfaces/IEventer.md#synceventer)

#### Defined in

[src/leafer/packages/event/src/Eventer.ts:22](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/event/src/Eventer.ts#L22)

## Accessors

### event

• `set` **event**(`map`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `map` | [`IEventParamsMap`](../interfaces/IEventParamsMap.md) |

#### Returns

`void`

#### Implementation of

[IEventer](../interfaces/IEventer.md).[event](../interfaces/IEventer.md#event)

#### Defined in

[src/leafer/packages/event/src/Eventer.ts:24](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/event/src/Eventer.ts#L24)

## Methods

### on

▸ **on**(`type`, `listener?`, `options?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | `string` \| `string`[] \| [`IEventParamsMap`](../interfaces/IEventParamsMap.md) \| [`IEventParams`](../modules.md#ieventparams)[] |
| `listener?` | [`IFunction`](../interfaces/IFunction.md) |
| `options?` | [`IEventOption`](../modules.md#ieventoption) |

#### Returns

`void`

#### Implementation of

[IEventer](../interfaces/IEventer.md).[on](../interfaces/IEventer.md#on)

#### Defined in

[src/leafer/packages/event/src/Eventer.ts:27](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/event/src/Eventer.ts#L27)

___

### off

▸ **off**(`type?`, `listener?`, `options?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `type?` | `string` \| `string`[] |
| `listener?` | [`IFunction`](../interfaces/IFunction.md) |
| `options?` | [`IEventOption`](../modules.md#ieventoption) |

#### Returns

`void`

#### Implementation of

[IEventer](../interfaces/IEventer.md).[off](../interfaces/IEventer.md#off)

#### Defined in

[src/leafer/packages/event/src/Eventer.ts:67](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/event/src/Eventer.ts#L67)

___

### on\_

▸ **on_**(`type`, `listener?`, `bind?`, `options?`): [`IEventListenerId`](../interfaces/IEventListenerId.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | `string` \| `string`[] \| [`IEventParams`](../modules.md#ieventparams)[] |
| `listener?` | [`IFunction`](../interfaces/IFunction.md) |
| `bind?` | [`IObject`](../interfaces/IObject.md) |
| `options?` | [`IEventOption`](../modules.md#ieventoption) |

#### Returns

[`IEventListenerId`](../interfaces/IEventListenerId.md)

#### Implementation of

[IEventer](../interfaces/IEventer.md).[on_](../interfaces/IEventer.md#on_)

#### Defined in

[src/leafer/packages/event/src/Eventer.ts:111](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/event/src/Eventer.ts#L111)

___

### off\_

▸ **off_**(`id`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | [`IEventListenerId`](../interfaces/IEventListenerId.md) \| [`IEventListenerId`](../interfaces/IEventListenerId.md)[] |

#### Returns

`void`

#### Implementation of

[IEventer](../interfaces/IEventer.md).[off_](../interfaces/IEventer.md#off_)

#### Defined in

[src/leafer/packages/event/src/Eventer.ts:117](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/event/src/Eventer.ts#L117)

___

### once

▸ **once**(`type`, `listener?`, `captureOrBind?`, `capture?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | `string` \| `string`[] \| [`IEventParams`](../modules.md#ieventparams)[] |
| `listener?` | [`IFunction`](../interfaces/IFunction.md) |
| `captureOrBind?` | `boolean` \| [`IObject`](../interfaces/IObject.md) |
| `capture?` | `boolean` |

#### Returns

`void`

#### Implementation of

[IEventer](../interfaces/IEventer.md).[once](../interfaces/IEventer.md#once)

#### Defined in

[src/leafer/packages/event/src/Eventer.ts:129](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/event/src/Eventer.ts#L129)

___

### emit

▸ **emit**(`type`, `event?`, `capture?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | `string` |
| `event?` | [`IObject`](../interfaces/IObject.md) \| [`IEvent`](../interfaces/IEvent.md) |
| `capture?` | `boolean` |

#### Returns

`void`

#### Implementation of

[IEventer](../interfaces/IEventer.md).[emit](../interfaces/IEventer.md#emit)

#### Defined in

[src/leafer/packages/event/src/Eventer.ts:136](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/event/src/Eventer.ts#L136)

___

### emitEvent

▸ **emitEvent**(`event`, `capture?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | [`IEvent`](../interfaces/IEvent.md) |
| `capture?` | `boolean` |

#### Returns

`void`

#### Implementation of

[IEventer](../interfaces/IEventer.md).[emitEvent](../interfaces/IEventer.md#emitevent)

#### Defined in

[src/leafer/packages/event/src/Eventer.ts:158](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/event/src/Eventer.ts#L158)

___

### hasEvent

▸ **hasEvent**(`type`, `capture?`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | `string` |
| `capture?` | `boolean` |

#### Returns

`boolean`

#### Implementation of

[IEventer](../interfaces/IEventer.md).[hasEvent](../interfaces/IEventer.md#hasevent)

#### Defined in

[src/leafer/packages/event/src/Eventer.ts:163](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/event/src/Eventer.ts#L163)

___

### destroy

▸ **destroy**(): `void`

#### Returns

`void`

#### Implementation of

[IEventer](../interfaces/IEventer.md).[destroy](../interfaces/IEventer.md#destroy)

#### Defined in

[src/leafer/packages/event/src/Eventer.ts:171](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/event/src/Eventer.ts#L171)
