# Class: EditorMoveEvent

## Hierarchy

- [`EditorEvent`](EditorEvent.md)

  ↳ **`EditorMoveEvent`**

## Implements

- [`IEditorMoveEvent`](../interfaces/IEditorMoveEvent.md)

## Table of contents

### Constructors

- [constructor](EditorMoveEvent.md#constructor)

### Properties

- [BEFORE\_SELECT](EditorMoveEvent.md#before_select)
- [SELECT](EditorMoveEvent.md#select)
- [AFTER\_SELECT](EditorMoveEvent.md#after_select)
- [BEFORE\_HOVER](EditorMoveEvent.md#before_hover)
- [HOVER](EditorMoveEvent.md#hover)
- [target](EditorMoveEvent.md#target)
- [editor](EditorMoveEvent.md#editor)
- [value](EditorMoveEvent.md#value)
- [oldValue](EditorMoveEvent.md#oldvalue)
- [worldOrigin](EditorMoveEvent.md#worldorigin)
- [origin](EditorMoveEvent.md#origin)
- [BEFORE\_MOVE](EditorMoveEvent.md#before_move)
- [MOVE](EditorMoveEvent.md#move)
- [moveX](EditorMoveEvent.md#movex)
- [moveY](EditorMoveEvent.md#movey)
- [type](EditorMoveEvent.md#type)
- [current](EditorMoveEvent.md#current)
- [bubbles](EditorMoveEvent.md#bubbles)
- [phase](EditorMoveEvent.md#phase)
- [isStopDefault](EditorMoveEvent.md#isstopdefault)
- [isStop](EditorMoveEvent.md#isstop)
- [isStopNow](EditorMoveEvent.md#isstopnow)

### Accessors

- [list](EditorMoveEvent.md#list)
- [oldList](EditorMoveEvent.md#oldlist)

### Methods

- [stopDefault](EditorMoveEvent.md#stopdefault)
- [stopNow](EditorMoveEvent.md#stopnow)
- [stop](EditorMoveEvent.md#stop)

## Constructors

### constructor

• **new EditorMoveEvent**(`type`, `data?`): [`EditorMoveEvent`](EditorMoveEvent.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | `string` |
| `data?` | [`IEditorMoveEvent`](../interfaces/IEditorMoveEvent.md) |

#### Returns

[`EditorMoveEvent`](EditorMoveEvent.md)

#### Overrides

[EditorEvent](EditorEvent.md).[constructor](EditorEvent.md#constructor)

#### Defined in

[src/in/packages/editor/src/event/EditorMoveEvent.ts:14](https://github.com/leaferjs/leafer-in/blob/d97f6888a45310d40717e43f47796d4f7d0dce1d/packages/editor/src/event/EditorMoveEvent.ts#L14)

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

[IEditorMoveEvent](../interfaces/IEditorMoveEvent.md).[target](../interfaces/IEditorMoveEvent.md#target)

#### Inherited from

[EditorEvent](EditorEvent.md).[target](EditorEvent.md#target)

#### Defined in

[src/in/packages/editor/src/event/EditorEvent.ts:20](https://github.com/leaferjs/leafer-in/blob/d97f6888a45310d40717e43f47796d4f7d0dce1d/packages/editor/src/event/EditorEvent.ts#L20)

___

### editor

• `Readonly` **editor**: [`IEditor`](../interfaces/IEditor.md)

#### Implementation of

[IEditorMoveEvent](../interfaces/IEditorMoveEvent.md).[editor](../interfaces/IEditorMoveEvent.md#editor)

#### Inherited from

[EditorEvent](EditorEvent.md).[editor](EditorEvent.md#editor)

#### Defined in

[src/in/packages/editor/src/event/EditorEvent.ts:21](https://github.com/leaferjs/leafer-in/blob/d97f6888a45310d40717e43f47796d4f7d0dce1d/packages/editor/src/event/EditorEvent.ts#L21)

___

### value

• `Readonly` **value**: [`IUI`](../interfaces/IUI.md) \| [`IUI`](../interfaces/IUI.md)[]

#### Implementation of

[IEditorMoveEvent](../interfaces/IEditorMoveEvent.md).[value](../interfaces/IEditorMoveEvent.md#value)

#### Inherited from

[EditorEvent](EditorEvent.md).[value](EditorEvent.md#value)

#### Defined in

[src/in/packages/editor/src/event/EditorEvent.ts:23](https://github.com/leaferjs/leafer-in/blob/d97f6888a45310d40717e43f47796d4f7d0dce1d/packages/editor/src/event/EditorEvent.ts#L23)

___

### oldValue

• `Readonly` **oldValue**: [`IUI`](../interfaces/IUI.md) \| [`IUI`](../interfaces/IUI.md)[]

#### Implementation of

[IEditorMoveEvent](../interfaces/IEditorMoveEvent.md).[oldValue](../interfaces/IEditorMoveEvent.md#oldvalue)

#### Inherited from

[EditorEvent](EditorEvent.md).[oldValue](EditorEvent.md#oldvalue)

#### Defined in

[src/in/packages/editor/src/event/EditorEvent.ts:24](https://github.com/leaferjs/leafer-in/blob/d97f6888a45310d40717e43f47796d4f7d0dce1d/packages/editor/src/event/EditorEvent.ts#L24)

___

### worldOrigin

• `Readonly` **worldOrigin**: [`IPointData`](../interfaces/IPointData.md)

#### Implementation of

[IEditorMoveEvent](../interfaces/IEditorMoveEvent.md).[worldOrigin](../interfaces/IEditorMoveEvent.md#worldorigin)

#### Inherited from

[EditorEvent](EditorEvent.md).[worldOrigin](EditorEvent.md#worldorigin)

#### Defined in

[src/in/packages/editor/src/event/EditorEvent.ts:29](https://github.com/leaferjs/leafer-in/blob/d97f6888a45310d40717e43f47796d4f7d0dce1d/packages/editor/src/event/EditorEvent.ts#L29)

___

### origin

• `Readonly` **origin**: [`IPointData`](../interfaces/IPointData.md)

#### Implementation of

[IEditorMoveEvent](../interfaces/IEditorMoveEvent.md).[origin](../interfaces/IEditorMoveEvent.md#origin)

#### Inherited from

[EditorEvent](EditorEvent.md).[origin](EditorEvent.md#origin)

#### Defined in

[src/in/packages/editor/src/event/EditorEvent.ts:30](https://github.com/leaferjs/leafer-in/blob/d97f6888a45310d40717e43f47796d4f7d0dce1d/packages/editor/src/event/EditorEvent.ts#L30)

___

### BEFORE\_MOVE

▪ `Static` **BEFORE\_MOVE**: `string` = `'editor.before_move'`

#### Defined in

[src/in/packages/editor/src/event/EditorMoveEvent.ts:8](https://github.com/leaferjs/leafer-in/blob/d97f6888a45310d40717e43f47796d4f7d0dce1d/packages/editor/src/event/EditorMoveEvent.ts#L8)

___

### MOVE

▪ `Static` **MOVE**: `string` = `'editor.move'`

#### Defined in

[src/in/packages/editor/src/event/EditorMoveEvent.ts:9](https://github.com/leaferjs/leafer-in/blob/d97f6888a45310d40717e43f47796d4f7d0dce1d/packages/editor/src/event/EditorMoveEvent.ts#L9)

___

### moveX

• `Readonly` **moveX**: `number`

#### Implementation of

[IEditorMoveEvent](../interfaces/IEditorMoveEvent.md).[moveX](../interfaces/IEditorMoveEvent.md#movex)

#### Defined in

[src/in/packages/editor/src/event/EditorMoveEvent.ts:11](https://github.com/leaferjs/leafer-in/blob/d97f6888a45310d40717e43f47796d4f7d0dce1d/packages/editor/src/event/EditorMoveEvent.ts#L11)

___

### moveY

• `Readonly` **moveY**: `number`

#### Implementation of

[IEditorMoveEvent](../interfaces/IEditorMoveEvent.md).[moveY](../interfaces/IEditorMoveEvent.md#movey)

#### Defined in

[src/in/packages/editor/src/event/EditorMoveEvent.ts:12](https://github.com/leaferjs/leafer-in/blob/d97f6888a45310d40717e43f47796d4f7d0dce1d/packages/editor/src/event/EditorMoveEvent.ts#L12)

___

### type

• `Readonly` **type**: `string`

#### Implementation of

[IEditorMoveEvent](../interfaces/IEditorMoveEvent.md).[type](../interfaces/IEditorMoveEvent.md#type)

#### Inherited from

[EditorEvent](EditorEvent.md).[type](EditorEvent.md#type)

#### Defined in

[src/leafer/packages/event/src/Event.ts:9](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/event/src/Event.ts#L9)

___

### current

• `Readonly` **current**: [`IEventTarget`](../interfaces/IEventTarget.md)

#### Implementation of

[IEditorMoveEvent](../interfaces/IEditorMoveEvent.md).[current](../interfaces/IEditorMoveEvent.md#current)

#### Inherited from

[EditorEvent](EditorEvent.md).[current](EditorEvent.md#current)

#### Defined in

[src/leafer/packages/event/src/Event.ts:11](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/event/src/Event.ts#L11)

___

### bubbles

• `Readonly` **bubbles**: `boolean` = `false`

#### Implementation of

[IEditorMoveEvent](../interfaces/IEditorMoveEvent.md).[bubbles](../interfaces/IEditorMoveEvent.md#bubbles)

#### Inherited from

[EditorEvent](EditorEvent.md).[bubbles](EditorEvent.md#bubbles)

#### Defined in

[src/leafer/packages/event/src/Event.ts:13](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/event/src/Event.ts#L13)

___

### phase

• `Readonly` **phase**: `number`

#### Implementation of

[IEditorMoveEvent](../interfaces/IEditorMoveEvent.md).[phase](../interfaces/IEditorMoveEvent.md#phase)

#### Inherited from

[EditorEvent](EditorEvent.md).[phase](EditorEvent.md#phase)

#### Defined in

[src/leafer/packages/event/src/Event.ts:14](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/event/src/Event.ts#L14)

___

### isStopDefault

• **isStopDefault**: `boolean`

#### Implementation of

[IEditorMoveEvent](../interfaces/IEditorMoveEvent.md).[isStopDefault](../interfaces/IEditorMoveEvent.md#isstopdefault)

#### Inherited from

[EditorEvent](EditorEvent.md).[isStopDefault](EditorEvent.md#isstopdefault)

#### Defined in

[src/leafer/packages/event/src/Event.ts:16](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/event/src/Event.ts#L16)

___

### isStop

• **isStop**: `boolean`

#### Implementation of

[IEditorMoveEvent](../interfaces/IEditorMoveEvent.md).[isStop](../interfaces/IEditorMoveEvent.md#isstop)

#### Inherited from

[EditorEvent](EditorEvent.md).[isStop](EditorEvent.md#isstop)

#### Defined in

[src/leafer/packages/event/src/Event.ts:17](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/event/src/Event.ts#L17)

___

### isStopNow

• **isStopNow**: `boolean`

#### Implementation of

[IEditorMoveEvent](../interfaces/IEditorMoveEvent.md).[isStopNow](../interfaces/IEditorMoveEvent.md#isstopnow)

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

[IEditorMoveEvent](../interfaces/IEditorMoveEvent.md).[list](../interfaces/IEditorMoveEvent.md#list)

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

[IEditorMoveEvent](../interfaces/IEditorMoveEvent.md).[oldList](../interfaces/IEditorMoveEvent.md#oldlist)

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

[IEditorMoveEvent](../interfaces/IEditorMoveEvent.md).[stopDefault](../interfaces/IEditorMoveEvent.md#stopdefault)

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

[IEditorMoveEvent](../interfaces/IEditorMoveEvent.md).[stopNow](../interfaces/IEditorMoveEvent.md#stopnow)

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

[IEditorMoveEvent](../interfaces/IEditorMoveEvent.md).[stop](../interfaces/IEditorMoveEvent.md#stop)

#### Inherited from

[EditorEvent](EditorEvent.md).[stop](EditorEvent.md#stop)

#### Defined in

[src/leafer/packages/event/src/Event.ts:36](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/event/src/Event.ts#L36)
