# Interface: ITaskProcessor

## Implemented by

- [`TaskProcessor`](../classes/TaskProcessor.md)

## Table of contents

### Properties

- [config](ITaskProcessor.md#config)
- [running](ITaskProcessor.md#running)
- [isComplete](ITaskProcessor.md#iscomplete)
- [percent](ITaskProcessor.md#percent)
- [total](ITaskProcessor.md#total)
- [index](ITaskProcessor.md#index)
- [finishedIndex](ITaskProcessor.md#finishedindex)
- [remain](ITaskProcessor.md#remain)

### Methods

- [start](ITaskProcessor.md#start)
- [pause](ITaskProcessor.md#pause)
- [resume](ITaskProcessor.md#resume)
- [skip](ITaskProcessor.md#skip)
- [stop](ITaskProcessor.md#stop)
- [add](ITaskProcessor.md#add)
- [destroy](ITaskProcessor.md#destroy)

## Properties

### config

• **config**: [`ITaskProcessorConfig`](ITaskProcessorConfig.md)

#### Defined in

[src/leafer/packages/interface/src/task/ITaskProcessor.ts:11](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/task/ITaskProcessor.ts#L11)

___

### running

• **running**: `boolean`

#### Defined in

[src/leafer/packages/interface/src/task/ITaskProcessor.ts:12](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/task/ITaskProcessor.ts#L12)

___

### isComplete

• **isComplete**: `boolean`

#### Defined in

[src/leafer/packages/interface/src/task/ITaskProcessor.ts:13](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/task/ITaskProcessor.ts#L13)

___

### percent

• **percent**: `number`

#### Defined in

[src/leafer/packages/interface/src/task/ITaskProcessor.ts:14](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/task/ITaskProcessor.ts#L14)

___

### total

• **total**: `number`

#### Defined in

[src/leafer/packages/interface/src/task/ITaskProcessor.ts:15](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/task/ITaskProcessor.ts#L15)

___

### index

• **index**: `number`

#### Defined in

[src/leafer/packages/interface/src/task/ITaskProcessor.ts:16](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/task/ITaskProcessor.ts#L16)

___

### finishedIndex

• **finishedIndex**: `number`

#### Defined in

[src/leafer/packages/interface/src/task/ITaskProcessor.ts:17](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/task/ITaskProcessor.ts#L17)

___

### remain

• **remain**: `number`

#### Defined in

[src/leafer/packages/interface/src/task/ITaskProcessor.ts:18](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/task/ITaskProcessor.ts#L18)

## Methods

### start

▸ **start**(): `void`

#### Returns

`void`

#### Defined in

[src/leafer/packages/interface/src/task/ITaskProcessor.ts:19](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/task/ITaskProcessor.ts#L19)

___

### pause

▸ **pause**(): `void`

#### Returns

`void`

#### Defined in

[src/leafer/packages/interface/src/task/ITaskProcessor.ts:20](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/task/ITaskProcessor.ts#L20)

___

### resume

▸ **resume**(): `void`

#### Returns

`void`

#### Defined in

[src/leafer/packages/interface/src/task/ITaskProcessor.ts:21](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/task/ITaskProcessor.ts#L21)

___

### skip

▸ **skip**(): `void`

#### Returns

`void`

#### Defined in

[src/leafer/packages/interface/src/task/ITaskProcessor.ts:22](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/task/ITaskProcessor.ts#L22)

___

### stop

▸ **stop**(): `void`

#### Returns

`void`

#### Defined in

[src/leafer/packages/interface/src/task/ITaskProcessor.ts:23](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/task/ITaskProcessor.ts#L23)

___

### add

▸ **add**(`taskCallback`, `options?`, `canUse?`): [`ITaskItem`](ITaskItem.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `taskCallback` | [`IFunction`](IFunction.md) |
| `options?` | `number` \| [`ITaskOptions`](ITaskOptions.md) |
| `canUse?` | [`IFunction`](IFunction.md) |

#### Returns

[`ITaskItem`](ITaskItem.md)

#### Defined in

[src/leafer/packages/interface/src/task/ITaskProcessor.ts:24](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/task/ITaskProcessor.ts#L24)

___

### destroy

▸ **destroy**(): `void`

#### Returns

`void`

#### Defined in

[src/leafer/packages/interface/src/task/ITaskProcessor.ts:25](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/task/ITaskProcessor.ts#L25)
