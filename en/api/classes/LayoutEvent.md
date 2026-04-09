# Class: LayoutEvent

## Hierarchy

- [`Event`](Event.md)

  ↳ **`LayoutEvent`**

## Implements

- [`ILayoutEvent`](../interfaces/ILayoutEvent.md)

## Table of contents

### Constructors

- [constructor](LayoutEvent.md#constructor)

### Properties

- [origin](LayoutEvent.md#origin)
- [type](LayoutEvent.md#type)
- [target](LayoutEvent.md#target)
- [current](LayoutEvent.md#current)
- [bubbles](LayoutEvent.md#bubbles)
- [phase](LayoutEvent.md#phase)
- [isStopDefault](LayoutEvent.md#isstopdefault)
- [isStop](LayoutEvent.md#isstop)
- [isStopNow](LayoutEvent.md#isstopnow)
- [REQUEST](LayoutEvent.md#request)
- [START](LayoutEvent.md#start)
- [BEFORE](LayoutEvent.md#before)
- [LAYOUT](LayoutEvent.md#layout)
- [AFTER](LayoutEvent.md#after)
- [AGAIN](LayoutEvent.md#again)
- [END](LayoutEvent.md#end)
- [data](LayoutEvent.md#data)
- [times](LayoutEvent.md#times)

### Methods

- [stopDefault](LayoutEvent.md#stopdefault)
- [stopNow](LayoutEvent.md#stopnow)
- [stop](LayoutEvent.md#stop)

## Constructors

### constructor

• **new LayoutEvent**(`type`, `data?`, `times?`): [`LayoutEvent`](LayoutEvent.md)

#### Parameters

| Name     | Type                                                                                                          |
| :------- | :------------------------------------------------------------------------------------------------------------ |
| `type`   | `string`                                                                                                      |
| `data?`  | [`ILayoutBlockData`](../interfaces/ILayoutBlockData.md)[] |
| `times?` | `number`                                                                                                      |

#### Returns

[`LayoutEvent`](LayoutEvent.md)

#### Overrides

[Event](Event.md).[constructor](Event.md#constructor)

#### Defined in

[src/leafer/packages/event/src/LayoutEvent.ts:23](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/event/src/LayoutEvent.ts#L23)

## Properties

### origin

• `Readonly` **origin**: [`IObject`](../interfaces/IObject.md)

#### Implementation of

[ILayoutEvent](../interfaces/ILayoutEvent.md).[origin](../interfaces/ILayoutEvent.md#origin)

#### Inherited from

[Event](Event.md).[origin](Event.md#origin)

#### Defined in

[src/leafer/packages/event/src/Event.ts:7](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/event/src/Event.ts#L7)

___

### type

• `Readonly` **type**: `string`

#### Implementation of

[ILayoutEvent](../interfaces/ILayoutEvent.md).[type](../interfaces/ILayoutEvent.md#type)

#### Inherited from

[Event](Event.md).[type](Event.md#type)

#### Defined in

[src/leafer/packages/event/src/Event.ts:9](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/event/src/Event.ts#L9)

___

### target

• `Readonly` **target**: [`IEventTarget`](../interfaces/IEventTarget.md)

#### Implementation of

[ILayoutEvent](../interfaces/ILayoutEvent.md).[target](../interfaces/ILayoutEvent.md#target)

#### Inherited from

[Event](Event.md).[target](Event.md#target)

#### Defined in

[src/leafer/packages/event/src/Event.ts:10](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/event/src/Event.ts#L10)

___

### current

• `Readonly` **current**: [`IEventTarget`](../interfaces/IEventTarget.md)

#### Implementation of

[ILayoutEvent](../interfaces/ILayoutEvent.md).[current](../interfaces/ILayoutEvent.md#current)

#### Inherited from

[Event](Event.md).[current](Event.md#current)

#### Defined in

[src/leafer/packages/event/src/Event.ts:11](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/event/src/Event.ts#L11)

___

### bubbles

• `Readonly` **bubbles**: `boolean` = `false`

#### Implementation of

[ILayoutEvent](../interfaces/ILayoutEvent.md).[bubbles](../interfaces/ILayoutEvent.md#bubbles)

#### Inherited from

[Event](Event.md).[bubbles](Event.md#bubbles)

#### Defined in

[src/leafer/packages/event/src/Event.ts:13](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/event/src/Event.ts#L13)

___

### phase

• `Readonly` **phase**: `number`

#### Implementation of

[ILayoutEvent](../interfaces/ILayoutEvent.md).[phase](../interfaces/ILayoutEvent.md#phase)

#### Inherited from

[Event](Event.md).[phase](Event.md#phase)

#### Defined in

[src/leafer/packages/event/src/Event.ts:14](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/event/src/Event.ts#L14)

___

### isStopDefault

• **isStopDefault**: `boolean`

#### Implementation of

[ILayoutEvent](../interfaces/ILayoutEvent.md).[isStopDefault](../interfaces/ILayoutEvent.md#isstopdefault)

#### Inherited from

[Event](Event.md).[isStopDefault](Event.md#isstopdefault)

#### Defined in

[src/leafer/packages/event/src/Event.ts:16](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/event/src/Event.ts#L16)

___

### isStop

• **isStop**: `boolean`

#### Implementation of

[ILayoutEvent](../interfaces/ILayoutEvent.md).[isStop](../interfaces/ILayoutEvent.md#isstop)

#### Inherited from

[Event](Event.md).[isStop](Event.md#isstop)

#### Defined in

[src/leafer/packages/event/src/Event.ts:17](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/event/src/Event.ts#L17)

___

### isStopNow

• **isStopNow**: `boolean`

#### Implementation of

[ILayoutEvent](../interfaces/ILayoutEvent.md).[isStopNow](../interfaces/ILayoutEvent.md#isstopnow)

#### Inherited from

[Event](Event.md).[isStopNow](Event.md#isstopnow)

#### Defined in

[src/leafer/packages/event/src/Event.ts:18](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/event/src/Event.ts#L18)

___

### REQUEST

▪ `Static` **REQUEST**: `string` = `'layout.request'`

#### Defined in

[src/leafer/packages/event/src/LayoutEvent.ts:8](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/event/src/LayoutEvent.ts#L8)

___

### START

▪ `Static` **START**: `string` = `'layout.start'`

#### Defined in

[src/leafer/packages/event/src/LayoutEvent.ts:10](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/event/src/LayoutEvent.ts#L10)

___

### BEFORE

▪ `Static` **BEFORE**: `string` = `'layout.before'`

#### Defined in

[src/leafer/packages/event/src/LayoutEvent.ts:12](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/event/src/LayoutEvent.ts#L12)

___

### LAYOUT

▪ `Static` **LAYOUT**: `string` = `'layout'`

#### Defined in

[src/leafer/packages/event/src/LayoutEvent.ts:13](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/event/src/LayoutEvent.ts#L13)

___

### AFTER

▪ `Static` **AFTER**: `string` = `'layout.after'`

#### Defined in

[src/leafer/packages/event/src/LayoutEvent.ts:14](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/event/src/LayoutEvent.ts#L14)

___

### AGAIN

▪ `Static` **AGAIN**: `string` = `'layout.again'`

#### Defined in

[src/leafer/packages/event/src/LayoutEvent.ts:16](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/event/src/LayoutEvent.ts#L16)

___

### END

▪ `Static` **END**: `string` = `'layout.end'`

#### Defined in

[src/leafer/packages/event/src/LayoutEvent.ts:18](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/event/src/LayoutEvent.ts#L18)

___

### data

• `Readonly` **data**: [`ILayoutBlockData`](../interfaces/ILayoutBlockData.md)[]

#### Implementation of

[ILayoutEvent](../interfaces/ILayoutEvent.md).[data](../interfaces/ILayoutEvent.md#data)

#### Defined in

[src/leafer/packages/event/src/LayoutEvent.ts:20](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/event/src/LayoutEvent.ts#L20)

___

### times

• `Readonly` **times**: `number`

#### Implementation of

[ILayoutEvent](../interfaces/ILayoutEvent.md).[times](../interfaces/ILayoutEvent.md#times)

#### Defined in

[src/leafer/packages/event/src/LayoutEvent.ts:21](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/event/src/LayoutEvent.ts#L21)

## Methods

### stopDefault

▸ **stopDefault**(): `void`

#### Returns

`void`

#### Implementation of

[ILayoutEvent](../interfaces/ILayoutEvent.md).[stopDefault](../interfaces/ILayoutEvent.md#stopdefault)

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

[ILayoutEvent](../interfaces/ILayoutEvent.md).[stopNow](../interfaces/ILayoutEvent.md#stopnow)

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

[ILayoutEvent](../interfaces/ILayoutEvent.md).[stop](../interfaces/ILayoutEvent.md#stop)

#### Inherited from

[Event](Event.md).[stop](Event.md#stop)

#### Defined in

[src/leafer/packages/event/src/Event.ts:36](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/event/src/Event.ts#L36)
