# Class: RenderEvent

## Hierarchy

- [`Event`](Event.md)

  ↳ **`RenderEvent`**

## Implements

- [`IRenderEvent`](../interfaces/IRenderEvent.md)

## Table of contents

### Constructors

- [constructor](RenderEvent.md#constructor)

### Properties

- [origin](RenderEvent.md#origin)
- [type](RenderEvent.md#type)
- [target](RenderEvent.md#target)
- [current](RenderEvent.md#current)
- [bubbles](RenderEvent.md#bubbles)
- [phase](RenderEvent.md#phase)
- [isStopDefault](RenderEvent.md#isstopdefault)
- [isStop](RenderEvent.md#isstop)
- [isStopNow](RenderEvent.md#isstopnow)
- [REQUEST](RenderEvent.md#request)
- [CHILD\_START](RenderEvent.md#child_start)
- [CHILD\_END](RenderEvent.md#child_end)
- [START](RenderEvent.md#start)
- [BEFORE](RenderEvent.md#before)
- [RENDER](RenderEvent.md#render)
- [AFTER](RenderEvent.md#after)
- [AGAIN](RenderEvent.md#again)
- [END](RenderEvent.md#end)
- [NEXT](RenderEvent.md#next)
- [renderBounds](RenderEvent.md#renderbounds)
- [renderOptions](RenderEvent.md#renderoptions)
- [times](RenderEvent.md#times)

### Methods

- [stopDefault](RenderEvent.md#stopdefault)
- [stopNow](RenderEvent.md#stopnow)
- [stop](RenderEvent.md#stop)

## Constructors

### constructor

• **new RenderEvent**(`type`, `times?`, `bounds?`, `options?`): [`RenderEvent`](RenderEvent.md)

#### Parameters

| Name       | Type                                                |
| :--------- | :-------------------------------------------------- |
| `type`     | `string`                                            |
| `times?`   | `number`                                            |
| `bounds?`  | [`IBounds`](../interfaces/IBounds.md)               |
| `options?` | [`IRenderOptions`](../interfaces/IRenderOptions.md) |

#### Returns

[`RenderEvent`](RenderEvent.md)

#### Overrides

[Event](Event.md).[constructor](Event.md#constructor)

#### Defined in

[src/leafer/packages/event/src/RenderEvent.ts:29](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/event/src/RenderEvent.ts#L29)

## Properties

### origin

• `Readonly` **origin**: [`IObject`](../interfaces/IObject.md)

#### Inherited from

[Event](Event.md).[origin](Event.md#origin)

#### Defined in

[src/leafer/packages/event/src/Event.ts:7](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/event/src/Event.ts#L7)

___

### type

• `Readonly` **type**: `string`

#### Inherited from

[Event](Event.md).[type](Event.md#type)

#### Defined in

[src/leafer/packages/event/src/Event.ts:9](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/event/src/Event.ts#L9)

___

### target

• `Readonly` **target**: [`IEventTarget`](../interfaces/IEventTarget.md)

#### Inherited from

[Event](Event.md).[target](Event.md#target)

#### Defined in

[src/leafer/packages/event/src/Event.ts:10](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/event/src/Event.ts#L10)

___

### current

• `Readonly` **current**: [`IEventTarget`](../interfaces/IEventTarget.md)

#### Inherited from

[Event](Event.md).[current](Event.md#current)

#### Defined in

[src/leafer/packages/event/src/Event.ts:11](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/event/src/Event.ts#L11)

___

### bubbles

• `Readonly` **bubbles**: `boolean` = `false`

#### Inherited from

[Event](Event.md).[bubbles](Event.md#bubbles)

#### Defined in

[src/leafer/packages/event/src/Event.ts:13](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/event/src/Event.ts#L13)

___

### phase

• `Readonly` **phase**: `number`

#### Inherited from

[Event](Event.md).[phase](Event.md#phase)

#### Defined in

[src/leafer/packages/event/src/Event.ts:14](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/event/src/Event.ts#L14)

___

### isStopDefault

• **isStopDefault**: `boolean`

#### Inherited from

[Event](Event.md).[isStopDefault](Event.md#isstopdefault)

#### Defined in

[src/leafer/packages/event/src/Event.ts:16](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/event/src/Event.ts#L16)

___

### isStop

• **isStop**: `boolean`

#### Inherited from

[Event](Event.md).[isStop](Event.md#isstop)

#### Defined in

[src/leafer/packages/event/src/Event.ts:17](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/event/src/Event.ts#L17)

___

### isStopNow

• **isStopNow**: `boolean`

#### Inherited from

[Event](Event.md).[isStopNow](Event.md#isstopnow)

#### Defined in

[src/leafer/packages/event/src/Event.ts:18](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/event/src/Event.ts#L18)

___

### REQUEST

▪ `Static` **REQUEST**: `string` = `'render.request'`

#### Defined in

[src/leafer/packages/event/src/RenderEvent.ts:8](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/event/src/RenderEvent.ts#L8)

___

### CHILD\_START

▪ `Static` **CHILD\_START**: `string` = `'render.child_start'`

#### Defined in

[src/leafer/packages/event/src/RenderEvent.ts:10](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/event/src/RenderEvent.ts#L10)

___

### CHILD\_END

▪ `Static` **CHILD\_END**: `string` = `'render.child_end'`

#### Defined in

[src/leafer/packages/event/src/RenderEvent.ts:11](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/event/src/RenderEvent.ts#L11)

___

### START

▪ `Static` **START**: `string` = `'render.start'`

#### Defined in

[src/leafer/packages/event/src/RenderEvent.ts:13](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/event/src/RenderEvent.ts#L13)

___

### BEFORE

▪ `Static` **BEFORE**: `string` = `'render.before'`

#### Defined in

[src/leafer/packages/event/src/RenderEvent.ts:15](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/event/src/RenderEvent.ts#L15)

___

### RENDER

▪ `Static` **RENDER**: `string` = `'render'`

#### Defined in

[src/leafer/packages/event/src/RenderEvent.ts:16](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/event/src/RenderEvent.ts#L16)

___

### AFTER

▪ `Static` **AFTER**: `string` = `'render.after'`

#### Defined in

[src/leafer/packages/event/src/RenderEvent.ts:17](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/event/src/RenderEvent.ts#L17)

___

### AGAIN

▪ `Static` **AGAIN**: `string` = `'render.again'`

#### Defined in

[src/leafer/packages/event/src/RenderEvent.ts:19](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/event/src/RenderEvent.ts#L19)

___

### END

▪ `Static` **END**: `string` = `'render.end'`

#### Defined in

[src/leafer/packages/event/src/RenderEvent.ts:21](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/event/src/RenderEvent.ts#L21)

___

### NEXT

▪ `Static` **NEXT**: `string` = `'render.next'`

#### Defined in

[src/leafer/packages/event/src/RenderEvent.ts:23](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/event/src/RenderEvent.ts#L23)

___

### renderBounds

• `Readonly` **renderBounds**: [`IBounds`](../interfaces/IBounds.md)

#### Defined in

[src/leafer/packages/event/src/RenderEvent.ts:25](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/event/src/RenderEvent.ts#L25)

___

### renderOptions

• `Readonly` **renderOptions**: [`IRenderOptions`](../interfaces/IRenderOptions.md)

#### Defined in

[src/leafer/packages/event/src/RenderEvent.ts:26](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/event/src/RenderEvent.ts#L26)

___

### times

• `Readonly` **times**: `number`

#### Defined in

[src/leafer/packages/event/src/RenderEvent.ts:27](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/event/src/RenderEvent.ts#L27)

## Methods

### stopDefault

▸ **stopDefault**(): `void`

#### Returns

`void`

#### Inherited from

[Event](Event.md).[stopDefault](Event.md#stopdefault)

#### Defined in

[src/leafer/packages/event/src/Event.ts:25](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/event/src/Event.ts#L25)

___

### stopNow

▸ **stopNow**(): `void`

#### Returns

`void`

#### Inherited from

[Event](Event.md).[stopNow](Event.md#stopnow)

#### Defined in

[src/leafer/packages/event/src/Event.ts:30](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/event/src/Event.ts#L30)

___

### stop

▸ **stop**(): `void`

#### Returns

`void`

#### Inherited from

[Event](Event.md).[stop](Event.md#stop)

#### Defined in

[src/leafer/packages/event/src/Event.ts:36](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/event/src/Event.ts#L36)
