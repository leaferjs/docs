# Interface: IEditorGroupEvent

## Hierarchy

- [`IEditorEvent`](IEditorEvent.md)

  ↳ **`IEditorGroupEvent`**

## Implemented by

- [`EditorGroupEvent`](../classes/EditorGroupEvent.md)

## Table of contents

### Properties

- [target](IEditorGroupEvent.md#target)
- [editor](IEditorGroupEvent.md#editor)
- [value](IEditorGroupEvent.md#value)
- [oldValue](IEditorGroupEvent.md#oldvalue)
- [list](IEditorGroupEvent.md#list)
- [oldList](IEditorGroupEvent.md#oldlist)
- [worldOrigin](IEditorGroupEvent.md#worldorigin)
- [origin](IEditorGroupEvent.md#origin)
- [editTarget](IEditorGroupEvent.md#edittarget)
- [type](IEditorGroupEvent.md#type)
- [current](IEditorGroupEvent.md#current)
- [bubbles](IEditorGroupEvent.md#bubbles)
- [phase](IEditorGroupEvent.md#phase)
- [isStopDefault](IEditorGroupEvent.md#isstopdefault)
- [isStop](IEditorGroupEvent.md#isstop)
- [isStopNow](IEditorGroupEvent.md#isstopnow)

### Methods

- [stopDefault](IEditorGroupEvent.md#stopdefault)
- [stopNow](IEditorGroupEvent.md#stopnow)
- [stop](IEditorGroupEvent.md#stop)

## Properties

### target

• `Optional` `Readonly` **target**: [`IUI`](IUI.md)

#### Inherited from

[IEditorEvent](IEditorEvent.md).[target](IEditorEvent.md#target)

#### Defined in

[src/in/packages/interface/src/editor/IEditor.ts:69](https://github.com/leaferjs/leafer-in/blob/d97f6888a45310d40717e43f47796d4f7d0dce1d/packages/interface/src/editor/IEditor.ts#L69)

___

### editor

• `Optional` `Readonly` **editor**: [`IEditor`](IEditor.md)

#### Inherited from

[IEditorEvent](IEditorEvent.md).[editor](IEditorEvent.md#editor)

#### Defined in

[src/in/packages/interface/src/editor/IEditor.ts:70](https://github.com/leaferjs/leafer-in/blob/d97f6888a45310d40717e43f47796d4f7d0dce1d/packages/interface/src/editor/IEditor.ts#L70)

___

### value

• `Optional` `Readonly` **value**: [`IUI`](IUI.md) \| [`IUI`](IUI.md)[]

#### Inherited from

[IEditorEvent](IEditorEvent.md).[value](IEditorEvent.md#value)

#### Defined in

[src/in/packages/interface/src/editor/IEditor.ts:72](https://github.com/leaferjs/leafer-in/blob/d97f6888a45310d40717e43f47796d4f7d0dce1d/packages/interface/src/editor/IEditor.ts#L72)

___

### oldValue

• `Optional` `Readonly` **oldValue**: [`IUI`](IUI.md) \| [`IUI`](IUI.md)[]

#### Inherited from

[IEditorEvent](IEditorEvent.md).[oldValue](IEditorEvent.md#oldvalue)

#### Defined in

[src/in/packages/interface/src/editor/IEditor.ts:73](https://github.com/leaferjs/leafer-in/blob/d97f6888a45310d40717e43f47796d4f7d0dce1d/packages/interface/src/editor/IEditor.ts#L73)

___

### list

• `Optional` `Readonly` **list**: [`IUI`](IUI.md)[]

#### Inherited from

[IEditorEvent](IEditorEvent.md).[list](IEditorEvent.md#list)

#### Defined in

[src/in/packages/interface/src/editor/IEditor.ts:74](https://github.com/leaferjs/leafer-in/blob/d97f6888a45310d40717e43f47796d4f7d0dce1d/packages/interface/src/editor/IEditor.ts#L74)

___

### oldList

• `Optional` `Readonly` **oldList**: [`IUI`](IUI.md)[]

#### Inherited from

[IEditorEvent](IEditorEvent.md).[oldList](IEditorEvent.md#oldlist)

#### Defined in

[src/in/packages/interface/src/editor/IEditor.ts:75](https://github.com/leaferjs/leafer-in/blob/d97f6888a45310d40717e43f47796d4f7d0dce1d/packages/interface/src/editor/IEditor.ts#L75)

___

### worldOrigin

• `Optional` `Readonly` **worldOrigin**: [`IPointData`](IPointData.md)

#### Inherited from

[IEditorEvent](IEditorEvent.md).[worldOrigin](IEditorEvent.md#worldorigin)

#### Defined in

[src/in/packages/interface/src/editor/IEditor.ts:77](https://github.com/leaferjs/leafer-in/blob/d97f6888a45310d40717e43f47796d4f7d0dce1d/packages/interface/src/editor/IEditor.ts#L77)

___

### origin

• `Optional` `Readonly` **origin**: [`IPointData`](IPointData.md)

#### Inherited from

[IEditorEvent](IEditorEvent.md).[origin](IEditorEvent.md#origin)

#### Defined in

[src/in/packages/interface/src/editor/IEditor.ts:78](https://github.com/leaferjs/leafer-in/blob/d97f6888a45310d40717e43f47796d4f7d0dce1d/packages/interface/src/editor/IEditor.ts#L78)

___

### editTarget

• **editTarget**: [`IGroup`](IGroup.md)

#### Defined in

[src/in/packages/interface/src/editor/IEditor.ts:87](https://github.com/leaferjs/leafer-in/blob/d97f6888a45310d40717e43f47796d4f7d0dce1d/packages/interface/src/editor/IEditor.ts#L87)

___

### type

• `Optional` **type**: `string`

#### Inherited from

[IEditorEvent](IEditorEvent.md).[type](IEditorEvent.md#type)

#### Defined in

[src/leafer/packages/interface/src/event/IEvent.ts:11](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/event/IEvent.ts#L11)

___

### current

• `Optional` **current**: [`IEventTarget`](IEventTarget.md)

#### Inherited from

[IEditorEvent](IEditorEvent.md).[current](IEditorEvent.md#current)

#### Defined in

[src/leafer/packages/interface/src/event/IEvent.ts:13](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/event/IEvent.ts#L13)

___

### bubbles

• `Optional` **bubbles**: `boolean`

#### Inherited from

[IEditorEvent](IEditorEvent.md).[bubbles](IEditorEvent.md#bubbles)

#### Defined in

[src/leafer/packages/interface/src/event/IEvent.ts:15](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/event/IEvent.ts#L15)

___

### phase

• `Optional` **phase**: `number`

#### Inherited from

[IEditorEvent](IEditorEvent.md).[phase](IEditorEvent.md#phase)

#### Defined in

[src/leafer/packages/interface/src/event/IEvent.ts:16](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/event/IEvent.ts#L16)

___

### isStopDefault

• `Optional` **isStopDefault**: `boolean`

#### Inherited from

[IEditorEvent](IEditorEvent.md).[isStopDefault](IEditorEvent.md#isstopdefault)

#### Defined in

[src/leafer/packages/interface/src/event/IEvent.ts:18](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/event/IEvent.ts#L18)

___

### isStop

• `Optional` **isStop**: `boolean`

#### Inherited from

[IEditorEvent](IEditorEvent.md).[isStop](IEditorEvent.md#isstop)

#### Defined in

[src/leafer/packages/interface/src/event/IEvent.ts:19](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/event/IEvent.ts#L19)

___

### isStopNow

• `Optional` **isStopNow**: `boolean`

#### Inherited from

[IEditorEvent](IEditorEvent.md).[isStopNow](IEditorEvent.md#isstopnow)

#### Defined in

[src/leafer/packages/interface/src/event/IEvent.ts:20](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/event/IEvent.ts#L20)

## Methods

### stopDefault

▸ **stopDefault**(): `void`

#### Returns

`void`

#### Inherited from

[IEditorEvent](IEditorEvent.md).[stopDefault](IEditorEvent.md#stopdefault)

#### Defined in

[src/leafer/packages/interface/src/event/IEvent.ts:21](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/event/IEvent.ts#L21)

___

### stopNow

▸ **stopNow**(): `void`

#### Returns

`void`

#### Inherited from

[IEditorEvent](IEditorEvent.md).[stopNow](IEditorEvent.md#stopnow)

#### Defined in

[src/leafer/packages/interface/src/event/IEvent.ts:22](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/event/IEvent.ts#L22)

___

### stop

▸ **stop**(): `void`

#### Returns

`void`

#### Inherited from

[IEditorEvent](IEditorEvent.md).[stop](IEditorEvent.md#stop)

#### Defined in

[src/leafer/packages/interface/src/event/IEvent.ts:23](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/event/IEvent.ts#L23)
