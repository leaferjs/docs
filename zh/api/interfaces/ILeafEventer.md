# Interface: ILeafEventer

## Hierarchy

- **`ILeafEventer`**

  ↳ [`IEventer`](IEventer.md)

## Table of contents

### Methods

- [on](ILeafEventer.md#on)
- [off](ILeafEventer.md#off)
- [on\_](ILeafEventer.md#on_)
- [off\_](ILeafEventer.md#off_)
- [once](ILeafEventer.md#once)
- [emit](ILeafEventer.md#emit)
- [emitEvent](ILeafEventer.md#emitevent)
- [hasEvent](ILeafEventer.md#hasevent)
- [destroyEventer](ILeafEventer.md#destroyeventer)

## Methods

### on

▸ **on**(`type`, `listener?`, `options?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | `string` \| `string`[] \| [`IEventParamsMap`](IEventParamsMap.md) |
| `listener?` | [`IFunction`](IFunction.md) |
| `options?` | `boolean` \| [`IEventListenerOptions`](IEventListenerOptions.md) |

#### Returns

`void`

#### Defined in

[src/leafer/packages/interface/src/display/module/ILeafEventer.ts:10](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/display/module/ILeafEventer.ts#L10)

___

### off

▸ **off**(`type?`, `listener?`, `options?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `type?` | `string` \| `string`[] |
| `listener?` | [`IFunction`](IFunction.md) |
| `options?` | `boolean` \| [`IEventListenerOptions`](IEventListenerOptions.md) |

#### Returns

`void`

#### Defined in

[src/leafer/packages/interface/src/display/module/ILeafEventer.ts:11](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/display/module/ILeafEventer.ts#L11)

___

### on\_

▸ **on_**(`type`, `listener`, `bind?`, `options?`): [`IEventListenerId`](IEventListenerId.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | `string` \| `string`[] |
| `listener` | [`IFunction`](IFunction.md) |
| `bind?` | [`IObject`](IObject.md) |
| `options?` | `boolean` \| [`IEventListenerOptions`](IEventListenerOptions.md) |

#### Returns

[`IEventListenerId`](IEventListenerId.md)

#### Defined in

[src/leafer/packages/interface/src/display/module/ILeafEventer.ts:12](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/display/module/ILeafEventer.ts#L12)

___

### off\_

▸ **off_**(`id`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | [`IEventListenerId`](IEventListenerId.md) \| [`IEventListenerId`](IEventListenerId.md)[] |

#### Returns

`void`

#### Defined in

[src/leafer/packages/interface/src/display/module/ILeafEventer.ts:13](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/display/module/ILeafEventer.ts#L13)

___

### once

▸ **once**(`type`, `listener`, `capture?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | `string` \| `string`[] |
| `listener` | [`IFunction`](IFunction.md) |
| `capture?` | `boolean` |

#### Returns

`void`

#### Defined in

[src/leafer/packages/interface/src/display/module/ILeafEventer.ts:14](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/display/module/ILeafEventer.ts#L14)

___

### emit

▸ **emit**(`type`, `event?`, `capture?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | `string` |
| `event?` | [`IObject`](IObject.md) \| [`IEvent`](IEvent.md) |
| `capture?` | `boolean` |

#### Returns

`void`

#### Defined in

[src/leafer/packages/interface/src/display/module/ILeafEventer.ts:15](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/display/module/ILeafEventer.ts#L15)

___

### emitEvent

▸ **emitEvent**(`event?`, `capture?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `event?` | [`IEvent`](IEvent.md) |
| `capture?` | `boolean` |

#### Returns

`void`

#### Defined in

[src/leafer/packages/interface/src/display/module/ILeafEventer.ts:16](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/display/module/ILeafEventer.ts#L16)

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

#### Defined in

[src/leafer/packages/interface/src/display/module/ILeafEventer.ts:17](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/display/module/ILeafEventer.ts#L17)

___

### destroyEventer

▸ **destroyEventer**(): `void`

#### Returns

`void`

#### Defined in

[src/leafer/packages/interface/src/display/module/ILeafEventer.ts:18](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/display/module/ILeafEventer.ts#L18)
