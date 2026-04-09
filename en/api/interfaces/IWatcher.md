# Interface: IWatcher

## Hierarchy

- [`IControl`](IControl.md)

  ↳ **`IWatcher`**

## Implemented by

- [`Watcher`](../classes/Watcher.md)

## Table of contents

### Properties

- [target](IWatcher.md#target)
- [totalTimes](IWatcher.md#totaltimes)
- [disabled](IWatcher.md#disabled)
- [running](IWatcher.md#running)
- [changed](IWatcher.md#changed)
- [hasVisible](IWatcher.md#hasvisible)
- [hasAdd](IWatcher.md#hasadd)
- [hasRemove](IWatcher.md#hasremove)
- [childrenChanged](IWatcher.md#childrenchanged)
- [config](IWatcher.md#config)
- [updatedList](IWatcher.md#updatedlist)

### Methods

- [start](IWatcher.md#start)
- [stop](IWatcher.md#stop)
- [destroy](IWatcher.md#destroy)
- [disable](IWatcher.md#disable)
- [update](IWatcher.md#update)

## Properties

### target

• **target**: [`ILeaf`](ILeaf.md)

#### Defined in

[src/leafer/packages/interface/src/watcher/IWatcher.ts:15](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/watcher/IWatcher.ts#L15)

___

### totalTimes

• **totalTimes**: `number`

#### Defined in

[src/leafer/packages/interface/src/watcher/IWatcher.ts:17](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/watcher/IWatcher.ts#L17)

___

### disabled

• **disabled**: `boolean`

#### Defined in

[src/leafer/packages/interface/src/watcher/IWatcher.ts:19](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/watcher/IWatcher.ts#L19)

___

### running

• **running**: `boolean`

#### Defined in

[src/leafer/packages/interface/src/watcher/IWatcher.ts:20](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/watcher/IWatcher.ts#L20)

___

### changed

• **changed**: `boolean`

#### Defined in

[src/leafer/packages/interface/src/watcher/IWatcher.ts:21](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/watcher/IWatcher.ts#L21)

___

### hasVisible

• **hasVisible**: `boolean`

#### Defined in

[src/leafer/packages/interface/src/watcher/IWatcher.ts:23](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/watcher/IWatcher.ts#L23)

___

### hasAdd

• **hasAdd**: `boolean`

#### Defined in

[src/leafer/packages/interface/src/watcher/IWatcher.ts:24](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/watcher/IWatcher.ts#L24)

___

### hasRemove

• **hasRemove**: `boolean`

#### Defined in

[src/leafer/packages/interface/src/watcher/IWatcher.ts:25](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/watcher/IWatcher.ts#L25)

___

### childrenChanged

• `Readonly` **childrenChanged**: `boolean`

#### Defined in

[src/leafer/packages/interface/src/watcher/IWatcher.ts:26](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/watcher/IWatcher.ts#L26)

___

### config

• **config**: [`IWatcherConfig`](IWatcherConfig.md)

#### Defined in

[src/leafer/packages/interface/src/watcher/IWatcher.ts:28](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/watcher/IWatcher.ts#L28)

___

### updatedList

• **updatedList**: [`ILeafList`](ILeafList.md)

#### Defined in

[src/leafer/packages/interface/src/watcher/IWatcher.ts:30](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/watcher/IWatcher.ts#L30)

## Methods

### start

▸ **start**(): `void`

#### Returns

`void`

#### Inherited from

[IControl](IControl.md).[start](IControl.md#start)

#### Defined in

[src/leafer/packages/interface/src/control/IControl.ts:2](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/control/IControl.ts#L2)

___

### stop

▸ **stop**(): `void`

#### Returns

`void`

#### Inherited from

[IControl](IControl.md).[stop](IControl.md#stop)

#### Defined in

[src/leafer/packages/interface/src/control/IControl.ts:3](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/control/IControl.ts#L3)

___

### destroy

▸ **destroy**(): `void`

#### Returns

`void`

#### Inherited from

[IControl](IControl.md).[destroy](IControl.md#destroy)

#### Defined in

[src/leafer/packages/interface/src/control/IControl.ts:4](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/control/IControl.ts#L4)

___

### disable

▸ **disable**(): `void`

#### Returns

`void`

#### Defined in

[src/leafer/packages/interface/src/watcher/IWatcher.ts:32](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/watcher/IWatcher.ts#L32)

___

### update

▸ **update**(): `void`

#### Returns

`void`

#### Defined in

[src/leafer/packages/interface/src/watcher/IWatcher.ts:34](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/watcher/IWatcher.ts#L34)
