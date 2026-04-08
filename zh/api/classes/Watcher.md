# Class: Watcher

## Implements

- [`IWatcher`](../interfaces/IWatcher.md)

## Table of contents

### Constructors

- [constructor](Watcher.md#constructor)

### Properties

- [target](Watcher.md#target)
- [totalTimes](Watcher.md#totaltimes)
- [disabled](Watcher.md#disabled)
- [running](Watcher.md#running)
- [changed](Watcher.md#changed)
- [hasVisible](Watcher.md#hasvisible)
- [hasAdd](Watcher.md#hasadd)
- [hasRemove](Watcher.md#hasremove)
- [config](Watcher.md#config)
- [\_\_eventIds](Watcher.md#__eventids)
- [\_\_updatedList](Watcher.md#__updatedlist)

### Accessors

- [childrenChanged](Watcher.md#childrenchanged)
- [updatedList](Watcher.md#updatedlist)

### Methods

- [start](Watcher.md#start)
- [stop](Watcher.md#stop)
- [disable](Watcher.md#disable)
- [update](Watcher.md#update)
- [\_\_onAttrChange](Watcher.md#__onattrchange)
- [\_\_onChildEvent](Watcher.md#__onchildevent)
- [\_\_pushChild](Watcher.md#__pushchild)
- [\_\_loopChildren](Watcher.md#__loopchildren)
- [\_\_onRquestData](Watcher.md#__onrquestdata)
- [\_\_listenEvents](Watcher.md#__listenevents)
- [\_\_removeListenEvents](Watcher.md#__removelistenevents)
- [destroy](Watcher.md#destroy)

## Constructors

### constructor

• **new Watcher**(`target`, `userConfig?`): [`Watcher`](Watcher.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `target` | [`ILeaf`](../interfaces/ILeaf.md) |
| `userConfig?` | [`IWatcherConfig`](../interfaces/IWatcherConfig.md) |

#### Returns

[`Watcher`](Watcher.md)

#### Defined in

[src/leafer/packages/partner/watcher/src/Watcher.ts:35](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/partner/watcher/src/Watcher.ts#L35)

## Properties

### target

• **target**: [`ILeaf`](../interfaces/ILeaf.md)

#### Implementation of

[IWatcher](../interfaces/IWatcher.md).[target](../interfaces/IWatcher.md#target)

#### Defined in

[src/leafer/packages/partner/watcher/src/Watcher.ts:7](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/partner/watcher/src/Watcher.ts#L7)

___

### totalTimes

• **totalTimes**: `number` = `0`

#### Implementation of

[IWatcher](../interfaces/IWatcher.md).[totalTimes](../interfaces/IWatcher.md#totaltimes)

#### Defined in

[src/leafer/packages/partner/watcher/src/Watcher.ts:9](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/partner/watcher/src/Watcher.ts#L9)

___

### disabled

• **disabled**: `boolean`

#### Implementation of

[IWatcher](../interfaces/IWatcher.md).[disabled](../interfaces/IWatcher.md#disabled)

#### Defined in

[src/leafer/packages/partner/watcher/src/Watcher.ts:11](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/partner/watcher/src/Watcher.ts#L11)

___

### running

• **running**: `boolean`

#### Implementation of

[IWatcher](../interfaces/IWatcher.md).[running](../interfaces/IWatcher.md#running)

#### Defined in

[src/leafer/packages/partner/watcher/src/Watcher.ts:12](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/partner/watcher/src/Watcher.ts#L12)

___

### changed

• **changed**: `boolean`

#### Implementation of

[IWatcher](../interfaces/IWatcher.md).[changed](../interfaces/IWatcher.md#changed)

#### Defined in

[src/leafer/packages/partner/watcher/src/Watcher.ts:13](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/partner/watcher/src/Watcher.ts#L13)

___

### hasVisible

• **hasVisible**: `boolean`

#### Implementation of

[IWatcher](../interfaces/IWatcher.md).[hasVisible](../interfaces/IWatcher.md#hasvisible)

#### Defined in

[src/leafer/packages/partner/watcher/src/Watcher.ts:15](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/partner/watcher/src/Watcher.ts#L15)

___

### hasAdd

• **hasAdd**: `boolean`

#### Implementation of

[IWatcher](../interfaces/IWatcher.md).[hasAdd](../interfaces/IWatcher.md#hasadd)

#### Defined in

[src/leafer/packages/partner/watcher/src/Watcher.ts:16](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/partner/watcher/src/Watcher.ts#L16)

___

### hasRemove

• **hasRemove**: `boolean`

#### Implementation of

[IWatcher](../interfaces/IWatcher.md).[hasRemove](../interfaces/IWatcher.md#hasremove)

#### Defined in

[src/leafer/packages/partner/watcher/src/Watcher.ts:17](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/partner/watcher/src/Watcher.ts#L17)

___

### config

• **config**: [`IWatcherConfig`](../interfaces/IWatcherConfig.md) = `{}`

#### Implementation of

[IWatcher](../interfaces/IWatcher.md).[config](../interfaces/IWatcher.md#config)

#### Defined in

[src/leafer/packages/partner/watcher/src/Watcher.ts:20](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/partner/watcher/src/Watcher.ts#L20)

___

### \_\_eventIds

• `Protected` **\_\_eventIds**: [`IEventListenerId`](../interfaces/IEventListenerId.md)[]

#### Defined in

[src/leafer/packages/partner/watcher/src/Watcher.ts:32](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/partner/watcher/src/Watcher.ts#L32)

___

### \_\_updatedList

• `Protected` **\_\_updatedList**: [`ILeafList`](../interfaces/ILeafList.md)

#### Defined in

[src/leafer/packages/partner/watcher/src/Watcher.ts:33](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/partner/watcher/src/Watcher.ts#L33)

## Accessors

### childrenChanged

• `get` **childrenChanged**(): `boolean`

#### Returns

`boolean`

#### Implementation of

[IWatcher](../interfaces/IWatcher.md).[childrenChanged](../interfaces/IWatcher.md#childrenchanged)

#### Defined in

[src/leafer/packages/partner/watcher/src/Watcher.ts:18](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/partner/watcher/src/Watcher.ts#L18)

___

### updatedList

• `get` **updatedList**(): [`ILeafList`](../interfaces/ILeafList.md)

#### Returns

[`ILeafList`](../interfaces/ILeafList.md)

#### Implementation of

[IWatcher](../interfaces/IWatcher.md).[updatedList](../interfaces/IWatcher.md#updatedlist)

#### Defined in

[src/leafer/packages/partner/watcher/src/Watcher.ts:22](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/partner/watcher/src/Watcher.ts#L22)

## Methods

### start

▸ **start**(): `void`

#### Returns

`void`

#### Implementation of

[IWatcher](../interfaces/IWatcher.md).[start](../interfaces/IWatcher.md#start)

#### Defined in

[src/leafer/packages/partner/watcher/src/Watcher.ts:41](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/partner/watcher/src/Watcher.ts#L41)

___

### stop

▸ **stop**(): `void`

#### Returns

`void`

#### Implementation of

[IWatcher](../interfaces/IWatcher.md).[stop](../interfaces/IWatcher.md#stop)

#### Defined in

[src/leafer/packages/partner/watcher/src/Watcher.ts:46](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/partner/watcher/src/Watcher.ts#L46)

___

### disable

▸ **disable**(): `void`

#### Returns

`void`

#### Implementation of

[IWatcher](../interfaces/IWatcher.md).[disable](../interfaces/IWatcher.md#disable)

#### Defined in

[src/leafer/packages/partner/watcher/src/Watcher.ts:50](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/partner/watcher/src/Watcher.ts#L50)

___

### update

▸ **update**(): `void`

#### Returns

`void`

#### Implementation of

[IWatcher](../interfaces/IWatcher.md).[update](../interfaces/IWatcher.md#update)

#### Defined in

[src/leafer/packages/partner/watcher/src/Watcher.ts:56](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/partner/watcher/src/Watcher.ts#L56)

___

### \_\_onAttrChange

▸ **__onAttrChange**(`event`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | [`PropertyEvent`](PropertyEvent.md) |

#### Returns

`void`

#### Defined in

[src/leafer/packages/partner/watcher/src/Watcher.ts:61](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/partner/watcher/src/Watcher.ts#L61)

___

### \_\_onChildEvent

▸ **__onChildEvent**(`event`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | [`ChildEvent`](ChildEvent.md) |

#### Returns

`void`

#### Defined in

[src/leafer/packages/partner/watcher/src/Watcher.ts:66](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/partner/watcher/src/Watcher.ts#L66)

___

### \_\_pushChild

▸ **__pushChild**(`child`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `child` | [`ILeaf`](../interfaces/ILeaf.md) |

#### Returns

`void`

#### Defined in

[src/leafer/packages/partner/watcher/src/Watcher.ts:79](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/partner/watcher/src/Watcher.ts#L79)

___

### \_\_loopChildren

▸ **__loopChildren**(`parent`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `parent` | [`ILeaf`](../interfaces/ILeaf.md) |

#### Returns

`void`

#### Defined in

[src/leafer/packages/partner/watcher/src/Watcher.ts:84](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/partner/watcher/src/Watcher.ts#L84)

___

### \_\_onRquestData

▸ **__onRquestData**(): `void`

#### Returns

`void`

#### Defined in

[src/leafer/packages/partner/watcher/src/Watcher.ts:89](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/partner/watcher/src/Watcher.ts#L89)

___

### \_\_listenEvents

▸ **__listenEvents**(): `void`

#### Returns

`void`

#### Defined in

[src/leafer/packages/partner/watcher/src/Watcher.ts:96](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/partner/watcher/src/Watcher.ts#L96)

___

### \_\_removeListenEvents

▸ **__removeListenEvents**(): `void`

#### Returns

`void`

#### Defined in

[src/leafer/packages/partner/watcher/src/Watcher.ts:106](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/partner/watcher/src/Watcher.ts#L106)

___

### destroy

▸ **destroy**(): `void`

#### Returns

`void`

#### Implementation of

[IWatcher](../interfaces/IWatcher.md).[destroy](../interfaces/IWatcher.md#destroy)

#### Defined in

[src/leafer/packages/partner/watcher/src/Watcher.ts:110](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/partner/watcher/src/Watcher.ts#L110)
