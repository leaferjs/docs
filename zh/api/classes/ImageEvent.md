# Class: ImageEvent

## Hierarchy

- [`Event`](Event.md)

  ↳ **`ImageEvent`**

## Implements

- [`IImageEvent`](../interfaces/IImageEvent.md)

## Table of contents

### Constructors

- [constructor](ImageEvent.md#constructor)

### Properties

- [origin](ImageEvent.md#origin)
- [type](ImageEvent.md#type)
- [target](ImageEvent.md#target)
- [current](ImageEvent.md#current)
- [bubbles](ImageEvent.md#bubbles)
- [phase](ImageEvent.md#phase)
- [isStopDefault](ImageEvent.md#isstopdefault)
- [isStop](ImageEvent.md#isstop)
- [isStopNow](ImageEvent.md#isstopnow)
- [LOAD](ImageEvent.md#load)
- [LOADED](ImageEvent.md#loaded)
- [ERROR](ImageEvent.md#error)
- [image](ImageEvent.md#image)
- [error](ImageEvent.md#error-1)
- [attrName](ImageEvent.md#attrname)
- [attrValue](ImageEvent.md#attrvalue)

### Methods

- [stopDefault](ImageEvent.md#stopdefault)
- [stopNow](ImageEvent.md#stopnow)
- [stop](ImageEvent.md#stop)

## Constructors

### constructor

• **new ImageEvent**(`type`, `data`): [`ImageEvent`](ImageEvent.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | `string` |
| `data` | [`IImageEvent`](../interfaces/IImageEvent.md) |

#### Returns

[`ImageEvent`](ImageEvent.md)

#### Overrides

[Event](Event.md).[constructor](Event.md#constructor)

#### Defined in

[src/leafer/packages/event/src/ImageEvent.ts:17](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/event/src/ImageEvent.ts#L17)

## Properties

### origin

• `Readonly` **origin**: [`IObject`](../interfaces/IObject.md)

#### Implementation of

[IImageEvent](../interfaces/IImageEvent.md).[origin](../interfaces/IImageEvent.md#origin)

#### Inherited from

[Event](Event.md).[origin](Event.md#origin)

#### Defined in

[src/leafer/packages/event/src/Event.ts:7](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/event/src/Event.ts#L7)

___

### type

• `Readonly` **type**: `string`

#### Implementation of

[IImageEvent](../interfaces/IImageEvent.md).[type](../interfaces/IImageEvent.md#type)

#### Inherited from

[Event](Event.md).[type](Event.md#type)

#### Defined in

[src/leafer/packages/event/src/Event.ts:9](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/event/src/Event.ts#L9)

___

### target

• `Readonly` **target**: [`IEventTarget`](../interfaces/IEventTarget.md)

#### Implementation of

[IImageEvent](../interfaces/IImageEvent.md).[target](../interfaces/IImageEvent.md#target)

#### Inherited from

[Event](Event.md).[target](Event.md#target)

#### Defined in

[src/leafer/packages/event/src/Event.ts:10](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/event/src/Event.ts#L10)

___

### current

• `Readonly` **current**: [`IEventTarget`](../interfaces/IEventTarget.md)

#### Implementation of

[IImageEvent](../interfaces/IImageEvent.md).[current](../interfaces/IImageEvent.md#current)

#### Inherited from

[Event](Event.md).[current](Event.md#current)

#### Defined in

[src/leafer/packages/event/src/Event.ts:11](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/event/src/Event.ts#L11)

___

### bubbles

• `Readonly` **bubbles**: `boolean` = `false`

#### Implementation of

[IImageEvent](../interfaces/IImageEvent.md).[bubbles](../interfaces/IImageEvent.md#bubbles)

#### Inherited from

[Event](Event.md).[bubbles](Event.md#bubbles)

#### Defined in

[src/leafer/packages/event/src/Event.ts:13](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/event/src/Event.ts#L13)

___

### phase

• `Readonly` **phase**: `number`

#### Implementation of

[IImageEvent](../interfaces/IImageEvent.md).[phase](../interfaces/IImageEvent.md#phase)

#### Inherited from

[Event](Event.md).[phase](Event.md#phase)

#### Defined in

[src/leafer/packages/event/src/Event.ts:14](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/event/src/Event.ts#L14)

___

### isStopDefault

• **isStopDefault**: `boolean`

#### Implementation of

[IImageEvent](../interfaces/IImageEvent.md).[isStopDefault](../interfaces/IImageEvent.md#isstopdefault)

#### Inherited from

[Event](Event.md).[isStopDefault](Event.md#isstopdefault)

#### Defined in

[src/leafer/packages/event/src/Event.ts:16](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/event/src/Event.ts#L16)

___

### isStop

• **isStop**: `boolean`

#### Implementation of

[IImageEvent](../interfaces/IImageEvent.md).[isStop](../interfaces/IImageEvent.md#isstop)

#### Inherited from

[Event](Event.md).[isStop](Event.md#isstop)

#### Defined in

[src/leafer/packages/event/src/Event.ts:17](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/event/src/Event.ts#L17)

___

### isStopNow

• **isStopNow**: `boolean`

#### Implementation of

[IImageEvent](../interfaces/IImageEvent.md).[isStopNow](../interfaces/IImageEvent.md#isstopnow)

#### Inherited from

[Event](Event.md).[isStopNow](Event.md#isstopnow)

#### Defined in

[src/leafer/packages/event/src/Event.ts:18](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/event/src/Event.ts#L18)

___

### LOAD

▪ `Static` **LOAD**: `string` = `'image.load'`

#### Defined in

[src/leafer/packages/event/src/ImageEvent.ts:7](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/event/src/ImageEvent.ts#L7)

___

### LOADED

▪ `Static` **LOADED**: `string` = `'image.loaded'`

#### Defined in

[src/leafer/packages/event/src/ImageEvent.ts:8](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/event/src/ImageEvent.ts#L8)

___

### ERROR

▪ `Static` **ERROR**: `string` = `'image.error'`

#### Defined in

[src/leafer/packages/event/src/ImageEvent.ts:9](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/event/src/ImageEvent.ts#L9)

___

### image

• `Readonly` **image**: [`ILeaferImage`](../interfaces/ILeaferImage.md)

#### Implementation of

[IImageEvent](../interfaces/IImageEvent.md).[image](../interfaces/IImageEvent.md#image)

#### Defined in

[src/leafer/packages/event/src/ImageEvent.ts:11](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/event/src/ImageEvent.ts#L11)

___

### error

• `Readonly` **error**: `string` \| [`IObject`](../interfaces/IObject.md)

#### Implementation of

[IImageEvent](../interfaces/IImageEvent.md).[error](../interfaces/IImageEvent.md#error)

#### Defined in

[src/leafer/packages/event/src/ImageEvent.ts:12](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/event/src/ImageEvent.ts#L12)

___

### attrName

• `Readonly` **attrName**: `string`

#### Implementation of

[IImageEvent](../interfaces/IImageEvent.md).[attrName](../interfaces/IImageEvent.md#attrname)

#### Defined in

[src/leafer/packages/event/src/ImageEvent.ts:14](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/event/src/ImageEvent.ts#L14)

___

### attrValue

• `Readonly` **attrValue**: [`IObject`](../interfaces/IObject.md)

#### Implementation of

[IImageEvent](../interfaces/IImageEvent.md).[attrValue](../interfaces/IImageEvent.md#attrvalue)

#### Defined in

[src/leafer/packages/event/src/ImageEvent.ts:15](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/event/src/ImageEvent.ts#L15)

## Methods

### stopDefault

▸ **stopDefault**(): `void`

#### Returns

`void`

#### Implementation of

[IImageEvent](../interfaces/IImageEvent.md).[stopDefault](../interfaces/IImageEvent.md#stopdefault)

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

[IImageEvent](../interfaces/IImageEvent.md).[stopNow](../interfaces/IImageEvent.md#stopnow)

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

[IImageEvent](../interfaces/IImageEvent.md).[stop](../interfaces/IImageEvent.md#stop)

#### Inherited from

[Event](Event.md).[stop](Event.md#stop)

#### Defined in

[src/leafer/packages/event/src/Event.ts:36](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/event/src/Event.ts#L36)
