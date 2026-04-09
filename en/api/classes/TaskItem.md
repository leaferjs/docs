# Class: TaskItem

## Implements

- [`ITaskItem`](../interfaces/ITaskItem.md)

## Table of contents

### Constructors

- [constructor](TaskItem.md#constructor)

### Properties

- [id](TaskItem.md#id)
- [parent](TaskItem.md#parent)
- [parallel](TaskItem.md#parallel)
- [time](TaskItem.md#time)
- [isComplete](TaskItem.md#iscomplete)
- [isCancel](TaskItem.md#iscancel)
- [runing](TaskItem.md#runing)
- [canUse](TaskItem.md#canuse)
- [task](TaskItem.md#task)

### Methods

- [run](TaskItem.md#run)
- [complete](TaskItem.md#complete)
- [cancel](TaskItem.md#cancel)

## Constructors

### constructor

• **new TaskItem**(`task?`): [`TaskItem`](TaskItem.md)

#### Parameters

| Name    | Type                                      |
| :------ | :---------------------------------------- |
| `task?` | [`IFunction`](../interfaces/IFunction.md) |

#### Returns

[`TaskItem`](TaskItem.md)

#### Defined in

[src/leafer/packages/task/src/TaskItem.ts:26](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/task/src/TaskItem.ts#L26)

## Properties

### id

• `Readonly` **id**: `number`

#### Defined in

[src/leafer/packages/task/src/TaskItem.ts:11](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/task/src/TaskItem.ts#L11)

___

### parent

• **parent**: [`TaskProcessor`](TaskProcessor.md)

#### Implementation of

[ITaskItem](../interfaces/ITaskItem.md).[parent](../interfaces/ITaskItem.md#parent)

#### Defined in

[src/leafer/packages/task/src/TaskItem.ts:13](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/task/src/TaskItem.ts#L13)

___

### parallel

• **parallel**: `boolean` = `true`

#### Implementation of

[ITaskItem](../interfaces/ITaskItem.md).[parallel](../interfaces/ITaskItem.md#parallel)

#### Defined in

[src/leafer/packages/task/src/TaskItem.ts:15](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/task/src/TaskItem.ts#L15)

___

### time

• **time**: `number` = `1`

#### Implementation of

[ITaskItem](../interfaces/ITaskItem.md).[time](../interfaces/ITaskItem.md#time)

#### Defined in

[src/leafer/packages/task/src/TaskItem.ts:16](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/task/src/TaskItem.ts#L16)

___

### isComplete

• **isComplete**: `boolean`

#### Implementation of

[ITaskItem](../interfaces/ITaskItem.md).[isComplete](../interfaces/ITaskItem.md#iscomplete)

#### Defined in

[src/leafer/packages/task/src/TaskItem.ts:18](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/task/src/TaskItem.ts#L18)

___

### isCancel

• **isCancel**: `boolean`

#### Implementation of

[ITaskItem](../interfaces/ITaskItem.md).[isCancel](../interfaces/ITaskItem.md#iscancel)

#### Defined in

[src/leafer/packages/task/src/TaskItem.ts:19](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/task/src/TaskItem.ts#L19)

___

### runing

• **runing**: `boolean`

#### Defined in

[src/leafer/packages/task/src/TaskItem.ts:20](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/task/src/TaskItem.ts#L20)

___

### canUse

• `Optional` **canUse**: [`IFunction`](../interfaces/IFunction.md)

#### Implementation of

[ITaskItem](../interfaces/ITaskItem.md).[canUse](../interfaces/ITaskItem.md#canuse)

#### Defined in

[src/leafer/packages/task/src/TaskItem.ts:22](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/task/src/TaskItem.ts#L22)

___

### task

• **task**: [`IFunction`](../interfaces/IFunction.md)

#### Implementation of

[ITaskItem](../interfaces/ITaskItem.md).[task](../interfaces/ITaskItem.md#task)

#### Defined in

[src/leafer/packages/task/src/TaskItem.ts:24](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/task/src/TaskItem.ts#L24)

## Methods

### run

▸ **run**(): `Promise`\<`void`\>

#### Returns

`Promise`\<`void`\>

#### Implementation of

[ITaskItem](../interfaces/ITaskItem.md).[run](../interfaces/ITaskItem.md#run)

#### Defined in

[src/leafer/packages/task/src/TaskItem.ts:31](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/task/src/TaskItem.ts#L31)

___

### complete

▸ **complete**(): `void`

#### Returns

`void`

#### Implementation of

[ITaskItem](../interfaces/ITaskItem.md).[complete](../interfaces/ITaskItem.md#complete)

#### Defined in

[src/leafer/packages/task/src/TaskItem.ts:42](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/task/src/TaskItem.ts#L42)

___

### cancel

▸ **cancel**(): `void`

#### Returns

`void`

#### Implementation of

[ITaskItem](../interfaces/ITaskItem.md).[cancel](../interfaces/ITaskItem.md#cancel)

#### Defined in

[src/leafer/packages/task/src/TaskItem.ts:47](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/task/src/TaskItem.ts#L47)
