# Class: PropertyEvent

## Hierarchy

- [`Event`](Event.md)

  ↳ **`PropertyEvent`**

## Implements

- [`IPropertyEvent`](../interfaces/IPropertyEvent.md)

## Table of contents

### Constructors

- [constructor](PropertyEvent.md#constructor)

### Properties

- [origin](PropertyEvent.md#origin)
- [type](PropertyEvent.md#type)
- [target](PropertyEvent.md#target)
- [current](PropertyEvent.md#current)
- [bubbles](PropertyEvent.md#bubbles)
- [phase](PropertyEvent.md#phase)
- [isStopDefault](PropertyEvent.md#isstopdefault)
- [isStop](PropertyEvent.md#isstop)
- [isStopNow](PropertyEvent.md#isstopnow)
- [CHANGE](PropertyEvent.md#change)
- [LEAFER\_CHANGE](PropertyEvent.md#leafer_change)
- [SCROLL](PropertyEvent.md#scroll)
- [attrName](PropertyEvent.md#attrname)
- [oldValue](PropertyEvent.md#oldvalue)
- [newValue](PropertyEvent.md#newvalue)

### Methods

- [stopDefault](PropertyEvent.md#stopdefault)
- [stopNow](PropertyEvent.md#stopnow)
- [stop](PropertyEvent.md#stop)

## Constructors

### constructor

• **new PropertyEvent**(`type`, `target`, `attrName`, `oldValue`, `newValue`): [`PropertyEvent`](PropertyEvent.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | `string` |
| `target` | [`IEventTarget`](../interfaces/IEventTarget.md) |
| `attrName` | `string` |
| `oldValue` | `unknown` |
| `newValue` | `unknown` |

#### Returns

[`PropertyEvent`](PropertyEvent.md)

#### Overrides

[Event](Event.md).[constructor](Event.md#constructor)

#### Defined in

[src/leafer/packages/event/src/PropertyEvent.ts:19](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/event/src/PropertyEvent.ts#L19)

## Properties

### origin

• `Readonly` **origin**: [`IObject`](../interfaces/IObject.md)

#### Implementation of

[IPropertyEvent](../interfaces/IPropertyEvent.md).[origin](../interfaces/IPropertyEvent.md#origin)

#### Inherited from

[Event](Event.md).[origin](Event.md#origin)

#### Defined in

[src/leafer/packages/event/src/Event.ts:7](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/event/src/Event.ts#L7)

___

### type

• `Readonly` **type**: `string`

#### Implementation of

[IPropertyEvent](../interfaces/IPropertyEvent.md).[type](../interfaces/IPropertyEvent.md#type)

#### Inherited from

[Event](Event.md).[type](Event.md#type)

#### Defined in

[src/leafer/packages/event/src/Event.ts:9](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/event/src/Event.ts#L9)

___

### target

• `Readonly` **target**: [`IEventTarget`](../interfaces/IEventTarget.md)

#### Implementation of

[IPropertyEvent](../interfaces/IPropertyEvent.md).[target](../interfaces/IPropertyEvent.md#target)

#### Inherited from

[Event](Event.md).[target](Event.md#target)

#### Defined in

[src/leafer/packages/event/src/Event.ts:10](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/event/src/Event.ts#L10)

___

### current

• `Readonly` **current**: [`IEventTarget`](../interfaces/IEventTarget.md)

#### Implementation of

[IPropertyEvent](../interfaces/IPropertyEvent.md).[current](../interfaces/IPropertyEvent.md#current)

#### Inherited from

[Event](Event.md).[current](Event.md#current)

#### Defined in

[src/leafer/packages/event/src/Event.ts:11](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/event/src/Event.ts#L11)

___

### bubbles

• `Readonly` **bubbles**: `boolean` = `false`

#### Implementation of

[IPropertyEvent](../interfaces/IPropertyEvent.md).[bubbles](../interfaces/IPropertyEvent.md#bubbles)

#### Inherited from

[Event](Event.md).[bubbles](Event.md#bubbles)

#### Defined in

[src/leafer/packages/event/src/Event.ts:13](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/event/src/Event.ts#L13)

___

### phase

• `Readonly` **phase**: `number`

#### Implementation of

[IPropertyEvent](../interfaces/IPropertyEvent.md).[phase](../interfaces/IPropertyEvent.md#phase)

#### Inherited from

[Event](Event.md).[phase](Event.md#phase)

#### Defined in

[src/leafer/packages/event/src/Event.ts:14](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/event/src/Event.ts#L14)

___

### isStopDefault

• **isStopDefault**: `boolean`

#### Implementation of

[IPropertyEvent](../interfaces/IPropertyEvent.md).[isStopDefault](../interfaces/IPropertyEvent.md#isstopdefault)

#### Inherited from

[Event](Event.md).[isStopDefault](Event.md#isstopdefault)

#### Defined in

[src/leafer/packages/event/src/Event.ts:16](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/event/src/Event.ts#L16)

___

### isStop

• **isStop**: `boolean`

#### Implementation of

[IPropertyEvent](../interfaces/IPropertyEvent.md).[isStop](../interfaces/IPropertyEvent.md#isstop)

#### Inherited from

[Event](Event.md).[isStop](Event.md#isstop)

#### Defined in

[src/leafer/packages/event/src/Event.ts:17](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/event/src/Event.ts#L17)

___

### isStopNow

• **isStopNow**: `boolean`

#### Implementation of

[IPropertyEvent](../interfaces/IPropertyEvent.md).[isStopNow](../interfaces/IPropertyEvent.md#isstopnow)

#### Inherited from

[Event](Event.md).[isStopNow](Event.md#isstopnow)

#### Defined in

[src/leafer/packages/event/src/Event.ts:18](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/event/src/Event.ts#L18)

___

### CHANGE

▪ `Static` **CHANGE**: `string` = `'property.change'`

#### Defined in

[src/leafer/packages/event/src/PropertyEvent.ts:10](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/event/src/PropertyEvent.ts#L10)

___

### LEAFER\_CHANGE

▪ `Static` **LEAFER\_CHANGE**: `string` = `'property.leafer_change'`

#### Defined in

[src/leafer/packages/event/src/PropertyEvent.ts:11](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/event/src/PropertyEvent.ts#L11)

___

### SCROLL

▪ `Static` **SCROLL**: `string` = `SCROLL`

#### Defined in

[src/leafer/packages/event/src/PropertyEvent.ts:13](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/event/src/PropertyEvent.ts#L13)

___

### attrName

• `Readonly` **attrName**: `string`

#### Implementation of

[IPropertyEvent](../interfaces/IPropertyEvent.md).[attrName](../interfaces/IPropertyEvent.md#attrname)

#### Defined in

[src/leafer/packages/event/src/PropertyEvent.ts:15](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/event/src/PropertyEvent.ts#L15)

___

### oldValue

• `Readonly` **oldValue**: `unknown`

#### Implementation of

[IPropertyEvent](../interfaces/IPropertyEvent.md).[oldValue](../interfaces/IPropertyEvent.md#oldvalue)

#### Defined in

[src/leafer/packages/event/src/PropertyEvent.ts:16](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/event/src/PropertyEvent.ts#L16)

___

### newValue

• `Readonly` **newValue**: `unknown`

#### Implementation of

[IPropertyEvent](../interfaces/IPropertyEvent.md).[newValue](../interfaces/IPropertyEvent.md#newvalue)

#### Defined in

[src/leafer/packages/event/src/PropertyEvent.ts:17](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/event/src/PropertyEvent.ts#L17)

## Methods

### stopDefault

▸ **stopDefault**(): `void`

#### Returns

`void`

#### Implementation of

[IPropertyEvent](../interfaces/IPropertyEvent.md).[stopDefault](../interfaces/IPropertyEvent.md#stopdefault)

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

[IPropertyEvent](../interfaces/IPropertyEvent.md).[stopNow](../interfaces/IPropertyEvent.md#stopnow)

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

[IPropertyEvent](../interfaces/IPropertyEvent.md).[stop](../interfaces/IPropertyEvent.md#stop)

#### Inherited from

[Event](Event.md).[stop](Event.md#stop)

#### Defined in

[src/leafer/packages/event/src/Event.ts:36](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/event/src/Event.ts#L36)
