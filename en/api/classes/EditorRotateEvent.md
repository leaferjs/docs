# Class: EditorRotateEvent

## Hierarchy

- [`EditorEvent`](EditorEvent.md)

  ↳ **`EditorRotateEvent`**

## Implements

- [`IEditorRotateEvent`](../interfaces/IEditorRotateEvent.md)

## Table of contents

### Constructors

- [constructor](EditorRotateEvent.md#constructor)

### Properties

- [BEFORE\_SELECT](EditorRotateEvent.md#before_select)
- [SELECT](EditorRotateEvent.md#select)
- [AFTER\_SELECT](EditorRotateEvent.md#after_select)
- [BEFORE\_HOVER](EditorRotateEvent.md#before_hover)
- [HOVER](EditorRotateEvent.md#hover)
- [target](EditorRotateEvent.md#target)
- [editor](EditorRotateEvent.md#editor)
- [value](EditorRotateEvent.md#value)
- [oldValue](EditorRotateEvent.md#oldvalue)
- [worldOrigin](EditorRotateEvent.md#worldorigin)
- [origin](EditorRotateEvent.md#origin)
- [BEFORE\_ROTATE](EditorRotateEvent.md#before_rotate)
- [ROTATE](EditorRotateEvent.md#rotate)
- [rotation](EditorRotateEvent.md#rotation)
- [type](EditorRotateEvent.md#type)
- [current](EditorRotateEvent.md#current)
- [bubbles](EditorRotateEvent.md#bubbles)
- [phase](EditorRotateEvent.md#phase)
- [isStopDefault](EditorRotateEvent.md#isstopdefault)
- [isStop](EditorRotateEvent.md#isstop)
- [isStopNow](EditorRotateEvent.md#isstopnow)

### Accessors

- [list](EditorRotateEvent.md#list)
- [oldList](EditorRotateEvent.md#oldlist)

### Methods

- [stopDefault](EditorRotateEvent.md#stopdefault)
- [stopNow](EditorRotateEvent.md#stopnow)
- [stop](EditorRotateEvent.md#stop)

## Constructors

### constructor

• **new EditorRotateEvent**(`type`, `data?`): [`EditorRotateEvent`](EditorRotateEvent.md)

#### Parameters

| Name    | Type                                                        |
| :------ | :---------------------------------------------------------- |
| `type`  | `string`                                                    |
| `data?` | [`IEditorRotateEvent`](../interfaces/IEditorRotateEvent.md) |

#### Returns

[`EditorRotateEvent`](EditorRotateEvent.md)

#### Overrides

[EditorEvent](EditorEvent.md).[constructor](EditorEvent.md#constructor)

#### Defined in

[src/in/packages/editor/src/event/EditorRotateEvent.ts:14](https://github.com/leaferjs/leafer-in/blob/d97f6888a45310d40717e43f47796d4f7d0dce1d/packages/editor/src/event/EditorRotateEvent.ts#L14)

## Properties

### BEFORE\_SELECT

▪ `Static` **BEFORE\_SELECT**: `string` = `'editor.before_select'`

#### Inherited from

[EditorEvent](EditorEvent.md).[BEFORE_SELECT](EditorEvent.md#before_select)

#### Defined in

[src/in/packages/editor/src/event/EditorEvent.ts:13](https://github.com/leaferjs/leafer-in/blob/d97f6888a45310d40717e43f47796d4f7d0dce1d/packages/editor/src/event/EditorEvent.ts#L13)

___

### SELECT

▪ `Static` **SELECT**: `string` = `'editor.select'`

#### Inherited from

[EditorEvent](EditorEvent.md).[SELECT](EditorEvent.md#select)

#### Defined in

[src/in/packages/editor/src/event/EditorEvent.ts:14](https://github.com/leaferjs/leafer-in/blob/d97f6888a45310d40717e43f47796d4f7d0dce1d/packages/editor/src/event/EditorEvent.ts#L14)

___

### AFTER\_SELECT

▪ `Static` **AFTER\_SELECT**: `string` = `'editor.after_select'`

#### Inherited from

[EditorEvent](EditorEvent.md).[AFTER_SELECT](EditorEvent.md#after_select)

#### Defined in

[src/in/packages/editor/src/event/EditorEvent.ts:15](https://github.com/leaferjs/leafer-in/blob/d97f6888a45310d40717e43f47796d4f7d0dce1d/packages/editor/src/event/EditorEvent.ts#L15)

___

### BEFORE\_HOVER

▪ `Static` **BEFORE\_HOVER**: `string` = `'editor.before_hover'`

#### Inherited from

[EditorEvent](EditorEvent.md).[BEFORE_HOVER](EditorEvent.md#before_hover)

#### Defined in

[src/in/packages/editor/src/event/EditorEvent.ts:17](https://github.com/leaferjs/leafer-in/blob/d97f6888a45310d40717e43f47796d4f7d0dce1d/packages/editor/src/event/EditorEvent.ts#L17)

___

### HOVER

▪ `Static` **HOVER**: `string` = `'editor.hover'`

#### Inherited from

[EditorEvent](EditorEvent.md).[HOVER](EditorEvent.md#hover)

#### Defined in

[src/in/packages/editor/src/event/EditorEvent.ts:18](https://github.com/leaferjs/leafer-in/blob/d97f6888a45310d40717e43f47796d4f7d0dce1d/packages/editor/src/event/EditorEvent.ts#L18)

___

### target

• `Readonly` **target**: [`IUI`](../interfaces/IUI.md)

#### Implementation of

[IEditorRotateEvent](../interfaces/IEditorRotateEvent.md).[target](../interfaces/IEditorRotateEvent.md#target)

#### Inherited from

[EditorEvent](EditorEvent.md).[target](EditorEvent.md#target)

#### Defined in

[src/in/packages/editor/src/event/EditorEvent.ts:20](https://github.com/leaferjs/leafer-in/blob/d97f6888a45310d40717e43f47796d4f7d0dce1d/packages/editor/src/event/EditorEvent.ts#L20)

___

### editor

• `Readonly` **editor**: [`IEditor`](../interfaces/IEditor.md)

#### Implementation of

[IEditorRotateEvent](../interfaces/IEditorRotateEvent.md).[editor](../interfaces/IEditorRotateEvent.md#editor)

#### Inherited from

[EditorEvent](EditorEvent.md).[editor](EditorEvent.md#editor)

#### Defined in

[src/in/packages/editor/src/event/EditorEvent.ts:21](https://github.com/leaferjs/leafer-in/blob/d97f6888a45310d40717e43f47796d4f7d0dce1d/packages/editor/src/event/EditorEvent.ts#L21)

___

### value

• `Readonly` **value**: [`IUI`](../interfaces/IUI.md) \| [`IUI`](../interfaces/IUI.md)[]

#### Implementation of

[IEditorRotateEvent](../interfaces/IEditorRotateEvent.md).[value](../interfaces/IEditorRotateEvent.md#value)

#### Inherited from

[EditorEvent](EditorEvent.md).[value](EditorEvent.md#value)

#### Defined in

[src/in/packages/editor/src/event/EditorEvent.ts:23](https://github.com/leaferjs/leafer-in/blob/d97f6888a45310d40717e43f47796d4f7d0dce1d/packages/editor/src/event/EditorEvent.ts#L23)

___

### oldValue

• `Readonly` **oldValue**: [`IUI`](../interfaces/IUI.md) \| [`IUI`](../interfaces/IUI.md)[]

#### Implementation of

[IEditorRotateEvent](../interfaces/IEditorRotateEvent.md).[oldValue](../interfaces/IEditorRotateEvent.md#oldvalue)

#### Inherited from

[EditorEvent](EditorEvent.md).[oldValue](EditorEvent.md#oldvalue)

#### Defined in

[src/in/packages/editor/src/event/EditorEvent.ts:24](https://github.com/leaferjs/leafer-in/blob/d97f6888a45310d40717e43f47796d4f7d0dce1d/packages/editor/src/event/EditorEvent.ts#L24)

___

### worldOrigin

• `Readonly` **worldOrigin**: [`IPointData`](../interfaces/IPointData.md)

#### Implementation of

[IEditorRotateEvent](../interfaces/IEditorRotateEvent.md).[worldOrigin](../interfaces/IEditorRotateEvent.md#worldorigin)

#### Inherited from

[EditorEvent](EditorEvent.md).[worldOrigin](EditorEvent.md#worldorigin)

#### Defined in

[src/in/packages/editor/src/event/EditorEvent.ts:29](https://github.com/leaferjs/leafer-in/blob/d97f6888a45310d40717e43f47796d4f7d0dce1d/packages/editor/src/event/EditorEvent.ts#L29)

___

### origin

• `Readonly` **origin**: [`IPointData`](../interfaces/IPointData.md)

#### Implementation of

[IEditorRotateEvent](../interfaces/IEditorRotateEvent.md).[origin](../interfaces/IEditorRotateEvent.md#origin)

#### Inherited from

[EditorEvent](EditorEvent.md).[origin](EditorEvent.md#origin)

#### Defined in

[src/in/packages/editor/src/event/EditorEvent.ts:30](https://github.com/leaferjs/leafer-in/blob/d97f6888a45310d40717e43f47796d4f7d0dce1d/packages/editor/src/event/EditorEvent.ts#L30)

___

### BEFORE\_ROTATE

▪ `Static` **BEFORE\_ROTATE**: `string` = `'editor.before_rotate'`

#### Defined in

[src/in/packages/editor/src/event/EditorRotateEvent.ts:8](https://github.com/leaferjs/leafer-in/blob/d97f6888a45310d40717e43f47796d4f7d0dce1d/packages/editor/src/event/EditorRotateEvent.ts#L8)

___

### ROTATE

▪ `Static` **ROTATE**: `string` = `'editor.rotate'`

#### Defined in

[src/in/packages/editor/src/event/EditorRotateEvent.ts:9](https://github.com/leaferjs/leafer-in/blob/d97f6888a45310d40717e43f47796d4f7d0dce1d/packages/editor/src/event/EditorRotateEvent.ts#L9)

___

### rotation

• `Readonly` **rotation**: `number`

#### Implementation of

[IEditorRotateEvent](../interfaces/IEditorRotateEvent.md).[rotation](../interfaces/IEditorRotateEvent.md#rotation)

#### Defined in

[src/in/packages/editor/src/event/EditorRotateEvent.ts:12](https://github.com/leaferjs/leafer-in/blob/d97f6888a45310d40717e43f47796d4f7d0dce1d/packages/editor/src/event/EditorRotateEvent.ts#L12)

___

### type

• `Readonly` **type**: `string`

#### Implementation of

[IEditorRotateEvent](../interfaces/IEditorRotateEvent.md).[type](../interfaces/IEditorRotateEvent.md#type)

#### Inherited from

[EditorEvent](EditorEvent.md).[type](EditorEvent.md#type)

#### Defined in

[src/leafer/packages/event/src/Event.ts:9](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/event/src/Event.ts#L9)

___

### current

• `Readonly` **current**: [`IEventTarget`](../interfaces/IEventTarget.md)

#### Implementation of

[IEditorRotateEvent](../interfaces/IEditorRotateEvent.md).[current](../interfaces/IEditorRotateEvent.md#current)

#### Inherited from

[EditorEvent](EditorEvent.md).[current](EditorEvent.md#current)

#### Defined in

[src/leafer/packages/event/src/Event.ts:11](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/event/src/Event.ts#L11)

___

### bubbles

• `Readonly` **bubbles**: `boolean` = `false`

#### Implementation of

[IEditorRotateEvent](../interfaces/IEditorRotateEvent.md).[bubbles](../interfaces/IEditorRotateEvent.md#bubbles)

#### Inherited from

[EditorEvent](EditorEvent.md).[bubbles](EditorEvent.md#bubbles)

#### Defined in

[src/leafer/packages/event/src/Event.ts:13](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/event/src/Event.ts#L13)

___

### phase

• `Readonly` **phase**: `number`

#### Implementation of

[IEditorRotateEvent](../interfaces/IEditorRotateEvent.md).[phase](../interfaces/IEditorRotateEvent.md#phase)

#### Inherited from

[EditorEvent](EditorEvent.md).[phase](EditorEvent.md#phase)

#### Defined in

[src/leafer/packages/event/src/Event.ts:14](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/event/src/Event.ts#L14)

___

### isStopDefault

• **isStopDefault**: `boolean`

#### Implementation of

[IEditorRotateEvent](../interfaces/IEditorRotateEvent.md).[isStopDefault](../interfaces/IEditorRotateEvent.md#isstopdefault)

#### Inherited from

[EditorEvent](EditorEvent.md).[isStopDefault](EditorEvent.md#isstopdefault)

#### Defined in

[src/leafer/packages/event/src/Event.ts:16](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/event/src/Event.ts#L16)

___

### isStop

• **isStop**: `boolean`

#### Implementation of

[IEditorRotateEvent](../interfaces/IEditorRotateEvent.md).[isStop](../interfaces/IEditorRotateEvent.md#isstop)

#### Inherited from

[EditorEvent](EditorEvent.md).[isStop](EditorEvent.md#isstop)

#### Defined in

[src/leafer/packages/event/src/Event.ts:17](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/event/src/Event.ts#L17)

___

### isStopNow

• **isStopNow**: `boolean`

#### Implementation of

[IEditorRotateEvent](../interfaces/IEditorRotateEvent.md).[isStopNow](../interfaces/IEditorRotateEvent.md#isstopnow)

#### Inherited from

[EditorEvent](EditorEvent.md).[isStopNow](EditorEvent.md#isstopnow)

#### Defined in

[src/leafer/packages/event/src/Event.ts:18](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/event/src/Event.ts#L18)

## Accessors

### list

• `get` **list**(): [`IUI`](../interfaces/IUI.md)[]

#### Returns

[`IUI`](../interfaces/IUI.md)[]

#### Implementation of

[IEditorRotateEvent](../interfaces/IEditorRotateEvent.md).[list](../interfaces/IEditorRotateEvent.md#list)

#### Inherited from

EditorEvent.list

#### Defined in

[src/in/packages/editor/src/event/EditorEvent.ts:26](https://github.com/leaferjs/leafer-in/blob/d97f6888a45310d40717e43f47796d4f7d0dce1d/packages/editor/src/event/EditorEvent.ts#L26)

___

### oldList

• `get` **oldList**(): [`IUI`](../interfaces/IUI.md)[]

#### Returns

[`IUI`](../interfaces/IUI.md)[]

#### Implementation of

[IEditorRotateEvent](../interfaces/IEditorRotateEvent.md).[oldList](../interfaces/IEditorRotateEvent.md#oldlist)

#### Inherited from

EditorEvent.oldList

#### Defined in

[src/in/packages/editor/src/event/EditorEvent.ts:27](https://github.com/leaferjs/leafer-in/blob/d97f6888a45310d40717e43f47796d4f7d0dce1d/packages/editor/src/event/EditorEvent.ts#L27)

## Methods

### stopDefault

▸ **stopDefault**(): `void`

#### Returns

`void`

#### Implementation of

[IEditorRotateEvent](../interfaces/IEditorRotateEvent.md).[stopDefault](../interfaces/IEditorRotateEvent.md#stopdefault)

#### Inherited from

[EditorEvent](EditorEvent.md).[stopDefault](EditorEvent.md#stopdefault)

#### Defined in

[src/leafer/packages/event/src/Event.ts:25](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/event/src/Event.ts#L25)

___

### stopNow

▸ **stopNow**(): `void`

#### Returns

`void`

#### Implementation of

[IEditorRotateEvent](../interfaces/IEditorRotateEvent.md).[stopNow](../interfaces/IEditorRotateEvent.md#stopnow)

#### Inherited from

[EditorEvent](EditorEvent.md).[stopNow](EditorEvent.md#stopnow)

#### Defined in

[src/leafer/packages/event/src/Event.ts:30](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/event/src/Event.ts#L30)

___

### stop

▸ **stop**(): `void`

#### Returns

`void`

#### Implementation of

[IEditorRotateEvent](../interfaces/IEditorRotateEvent.md).[stop](../interfaces/IEditorRotateEvent.md#stop)

#### Inherited from

[EditorEvent](EditorEvent.md).[stop](EditorEvent.md#stop)

#### Defined in

[src/leafer/packages/event/src/Event.ts:36](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/event/src/Event.ts#L36)
