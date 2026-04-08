# Interface: IEditorScaleEvent

## Hierarchy

- `IEditorTransformEvent`

  ↳ **`IEditorScaleEvent`**

## Implemented by

- [`EditorScaleEvent`](../classes/EditorScaleEvent.md)

## Table of contents

### Properties

- [target](IEditorScaleEvent.md#target)
- [editor](IEditorScaleEvent.md#editor)
- [value](IEditorScaleEvent.md#value)
- [oldValue](IEditorScaleEvent.md#oldvalue)
- [list](IEditorScaleEvent.md#list)
- [oldList](IEditorScaleEvent.md#oldlist)
- [worldOrigin](IEditorScaleEvent.md#worldorigin)
- [origin](IEditorScaleEvent.md#origin)
- [transform](IEditorScaleEvent.md#transform)
- [operateEvent](IEditorScaleEvent.md#operateevent)
- [isStart](IEditorScaleEvent.md#isstart)
- [isEnd](IEditorScaleEvent.md#isend)
- [scaleX](IEditorScaleEvent.md#scalex)
- [scaleY](IEditorScaleEvent.md#scaley)
- [direction](IEditorScaleEvent.md#direction)
- [lockRatio](IEditorScaleEvent.md#lockratio)
- [around](IEditorScaleEvent.md#around)
- [drag](IEditorScaleEvent.md#drag)
- [type](IEditorScaleEvent.md#type)
- [current](IEditorScaleEvent.md#current)
- [bubbles](IEditorScaleEvent.md#bubbles)
- [phase](IEditorScaleEvent.md#phase)
- [isStopDefault](IEditorScaleEvent.md#isstopdefault)
- [isStop](IEditorScaleEvent.md#isstop)
- [isStopNow](IEditorScaleEvent.md#isstopnow)

### Methods

- [stopDefault](IEditorScaleEvent.md#stopdefault)
- [stopNow](IEditorScaleEvent.md#stopnow)
- [stop](IEditorScaleEvent.md#stop)

## Properties

### target

• `Optional` `Readonly` **target**: [`IUI`](IUI.md)

#### Inherited from

IEditorTransformEvent.target

#### Defined in

[src/in/packages/interface/src/editor/IEditor.ts:69](https://github.com/leaferjs/leafer-in/blob/d97f6888a45310d40717e43f47796d4f7d0dce1d/packages/interface/src/editor/IEditor.ts#L69)

___

### editor

• `Optional` `Readonly` **editor**: [`IEditor`](IEditor.md)

#### Inherited from

IEditorTransformEvent.editor

#### Defined in

[src/in/packages/interface/src/editor/IEditor.ts:70](https://github.com/leaferjs/leafer-in/blob/d97f6888a45310d40717e43f47796d4f7d0dce1d/packages/interface/src/editor/IEditor.ts#L70)

___

### value

• `Optional` `Readonly` **value**: [`IUI`](IUI.md) \| [`IUI`](IUI.md)[]

#### Inherited from

IEditorTransformEvent.value

#### Defined in

[src/in/packages/interface/src/editor/IEditor.ts:72](https://github.com/leaferjs/leafer-in/blob/d97f6888a45310d40717e43f47796d4f7d0dce1d/packages/interface/src/editor/IEditor.ts#L72)

___

### oldValue

• `Optional` `Readonly` **oldValue**: [`IUI`](IUI.md) \| [`IUI`](IUI.md)[]

#### Inherited from

IEditorTransformEvent.oldValue

#### Defined in

[src/in/packages/interface/src/editor/IEditor.ts:73](https://github.com/leaferjs/leafer-in/blob/d97f6888a45310d40717e43f47796d4f7d0dce1d/packages/interface/src/editor/IEditor.ts#L73)

___

### list

• `Optional` `Readonly` **list**: [`IUI`](IUI.md)[]

#### Inherited from

IEditorTransformEvent.list

#### Defined in

[src/in/packages/interface/src/editor/IEditor.ts:74](https://github.com/leaferjs/leafer-in/blob/d97f6888a45310d40717e43f47796d4f7d0dce1d/packages/interface/src/editor/IEditor.ts#L74)

___

### oldList

• `Optional` `Readonly` **oldList**: [`IUI`](IUI.md)[]

#### Inherited from

IEditorTransformEvent.oldList

#### Defined in

[src/in/packages/interface/src/editor/IEditor.ts:75](https://github.com/leaferjs/leafer-in/blob/d97f6888a45310d40717e43f47796d4f7d0dce1d/packages/interface/src/editor/IEditor.ts#L75)

___

### worldOrigin

• `Optional` `Readonly` **worldOrigin**: [`IPointData`](IPointData.md)

#### Inherited from

IEditorTransformEvent.worldOrigin

#### Defined in

[src/in/packages/interface/src/editor/IEditor.ts:77](https://github.com/leaferjs/leafer-in/blob/d97f6888a45310d40717e43f47796d4f7d0dce1d/packages/interface/src/editor/IEditor.ts#L77)

___

### origin

• `Optional` `Readonly` **origin**: [`IPointData`](IPointData.md)

#### Inherited from

IEditorTransformEvent.origin

#### Defined in

[src/in/packages/interface/src/editor/IEditor.ts:78](https://github.com/leaferjs/leafer-in/blob/d97f6888a45310d40717e43f47796d4f7d0dce1d/packages/interface/src/editor/IEditor.ts#L78)

___

### transform

• `Optional` **transform**: [`IMatrixData`](IMatrixData.md)

#### Inherited from

IEditorTransformEvent.transform

#### Defined in

[src/in/packages/interface/src/editor/IEditor.ts:92](https://github.com/leaferjs/leafer-in/blob/d97f6888a45310d40717e43f47796d4f7d0dce1d/packages/interface/src/editor/IEditor.ts#L92)

___

### operateEvent

• `Optional` **operateEvent**: [`IDragEvent`](IDragEvent.md) \| [`IRotateEvent`](IRotateEvent.md) \| [`IZoomEvent`](IZoomEvent.md) \| [`IMoveEvent`](IMoveEvent.md)

#### Inherited from

IEditorTransformEvent.operateEvent

#### Defined in

[src/in/packages/interface/src/editor/IEditor.ts:94](https://github.com/leaferjs/leafer-in/blob/d97f6888a45310d40717e43f47796d4f7d0dce1d/packages/interface/src/editor/IEditor.ts#L94)

___

### isStart

• `Optional` **isStart**: `boolean`

#### Inherited from

IEditorTransformEvent.isStart

#### Defined in

[src/in/packages/interface/src/editor/IEditor.ts:95](https://github.com/leaferjs/leafer-in/blob/d97f6888a45310d40717e43f47796d4f7d0dce1d/packages/interface/src/editor/IEditor.ts#L95)

___

### isEnd

• `Optional` **isEnd**: `boolean`

#### Inherited from

IEditorTransformEvent.isEnd

#### Defined in

[src/in/packages/interface/src/editor/IEditor.ts:96](https://github.com/leaferjs/leafer-in/blob/d97f6888a45310d40717e43f47796d4f7d0dce1d/packages/interface/src/editor/IEditor.ts#L96)

___

### scaleX

• `Optional` `Readonly` **scaleX**: `number`

#### Defined in

[src/in/packages/interface/src/editor/IEditor.ts:106](https://github.com/leaferjs/leafer-in/blob/d97f6888a45310d40717e43f47796d4f7d0dce1d/packages/interface/src/editor/IEditor.ts#L106)

___

### scaleY

• `Optional` `Readonly` **scaleY**: `number`

#### Defined in

[src/in/packages/interface/src/editor/IEditor.ts:107](https://github.com/leaferjs/leafer-in/blob/d97f6888a45310d40717e43f47796d4f7d0dce1d/packages/interface/src/editor/IEditor.ts#L107)

___

### direction

• `Optional` `Readonly` **direction**: `number`

#### Defined in

[src/in/packages/interface/src/editor/IEditor.ts:109](https://github.com/leaferjs/leafer-in/blob/d97f6888a45310d40717e43f47796d4f7d0dce1d/packages/interface/src/editor/IEditor.ts#L109)

___

### lockRatio

• `Optional` `Readonly` **lockRatio**: `boolean` \| ``"corner"``

#### Defined in

[src/in/packages/interface/src/editor/IEditor.ts:110](https://github.com/leaferjs/leafer-in/blob/d97f6888a45310d40717e43f47796d4f7d0dce1d/packages/interface/src/editor/IEditor.ts#L110)

___

### around

• `Optional` `Readonly` **around**: [`IAround`](../modules.md#iaround)

#### Defined in

[src/in/packages/interface/src/editor/IEditor.ts:111](https://github.com/leaferjs/leafer-in/blob/d97f6888a45310d40717e43f47796d4f7d0dce1d/packages/interface/src/editor/IEditor.ts#L111)

___

### drag

• `Optional` **drag**: [`IDragEvent`](IDragEvent.md)

#### Defined in

[src/in/packages/interface/src/editor/IEditor.ts:113](https://github.com/leaferjs/leafer-in/blob/d97f6888a45310d40717e43f47796d4f7d0dce1d/packages/interface/src/editor/IEditor.ts#L113)

___

### type

• `Optional` **type**: `string`

#### Inherited from

IEditorTransformEvent.type

#### Defined in

[src/leafer/packages/interface/src/event/IEvent.ts:11](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/event/IEvent.ts#L11)

___

### current

• `Optional` **current**: [`IEventTarget`](IEventTarget.md)

#### Inherited from

IEditorTransformEvent.current

#### Defined in

[src/leafer/packages/interface/src/event/IEvent.ts:13](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/event/IEvent.ts#L13)

___

### bubbles

• `Optional` **bubbles**: `boolean`

#### Inherited from

IEditorTransformEvent.bubbles

#### Defined in

[src/leafer/packages/interface/src/event/IEvent.ts:15](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/event/IEvent.ts#L15)

___

### phase

• `Optional` **phase**: `number`

#### Inherited from

IEditorTransformEvent.phase

#### Defined in

[src/leafer/packages/interface/src/event/IEvent.ts:16](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/event/IEvent.ts#L16)

___

### isStopDefault

• `Optional` **isStopDefault**: `boolean`

#### Inherited from

IEditorTransformEvent.isStopDefault

#### Defined in

[src/leafer/packages/interface/src/event/IEvent.ts:18](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/event/IEvent.ts#L18)

___

### isStop

• `Optional` **isStop**: `boolean`

#### Inherited from

IEditorTransformEvent.isStop

#### Defined in

[src/leafer/packages/interface/src/event/IEvent.ts:19](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/event/IEvent.ts#L19)

___

### isStopNow

• `Optional` **isStopNow**: `boolean`

#### Inherited from

IEditorTransformEvent.isStopNow

#### Defined in

[src/leafer/packages/interface/src/event/IEvent.ts:20](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/event/IEvent.ts#L20)

## Methods

### stopDefault

▸ **stopDefault**(): `void`

#### Returns

`void`

#### Inherited from

IEditorTransformEvent.stopDefault

#### Defined in

[src/leafer/packages/interface/src/event/IEvent.ts:21](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/event/IEvent.ts#L21)

___

### stopNow

▸ **stopNow**(): `void`

#### Returns

`void`

#### Inherited from

IEditorTransformEvent.stopNow

#### Defined in

[src/leafer/packages/interface/src/event/IEvent.ts:22](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/event/IEvent.ts#L22)

___

### stop

▸ **stop**(): `void`

#### Returns

`void`

#### Inherited from

IEditorTransformEvent.stop

#### Defined in

[src/leafer/packages/interface/src/event/IEvent.ts:23](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/event/IEvent.ts#L23)
