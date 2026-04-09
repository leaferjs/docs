# Class: EditorGroupEvent

## Hierarchy

- [`EditorEvent`](EditorEvent.md)

  ↳ **`EditorGroupEvent`**

## Implements

- [`IEditorGroupEvent`](../interfaces/IEditorGroupEvent.md)

## Table of contents

### Constructors

- [constructor](EditorGroupEvent.md#constructor)

### Properties

- [BEFORE\_SELECT](EditorGroupEvent.md#before_select)
- [SELECT](EditorGroupEvent.md#select)
- [AFTER\_SELECT](EditorGroupEvent.md#after_select)
- [BEFORE\_HOVER](EditorGroupEvent.md#before_hover)
- [HOVER](EditorGroupEvent.md#hover)
- [target](EditorGroupEvent.md#target)
- [editor](EditorGroupEvent.md#editor)
- [value](EditorGroupEvent.md#value)
- [oldValue](EditorGroupEvent.md#oldvalue)
- [worldOrigin](EditorGroupEvent.md#worldorigin)
- [origin](EditorGroupEvent.md#origin)
- [BEFORE\_GROUP](EditorGroupEvent.md#before_group)
- [GROUP](EditorGroupEvent.md#group)
- [BEFORE\_UNGROUP](EditorGroupEvent.md#before_ungroup)
- [UNGROUP](EditorGroupEvent.md#ungroup)
- [BEFORE\_OPEN](EditorGroupEvent.md#before_open)
- [OPEN](EditorGroupEvent.md#open)
- [BEFORE\_CLOSE](EditorGroupEvent.md#before_close)
- [CLOSE](EditorGroupEvent.md#close)
- [editTarget](EditorGroupEvent.md#edittarget)
- [type](EditorGroupEvent.md#type)
- [current](EditorGroupEvent.md#current)
- [bubbles](EditorGroupEvent.md#bubbles)
- [phase](EditorGroupEvent.md#phase)
- [isStopDefault](EditorGroupEvent.md#isstopdefault)
- [isStop](EditorGroupEvent.md#isstop)
- [isStopNow](EditorGroupEvent.md#isstopnow)

### Accessors

- [list](EditorGroupEvent.md#list)
- [oldList](EditorGroupEvent.md#oldlist)

### Methods

- [stopDefault](EditorGroupEvent.md#stopdefault)
- [stopNow](EditorGroupEvent.md#stopnow)
- [stop](EditorGroupEvent.md#stop)

## Constructors

### constructor

• **new EditorGroupEvent**(`type`, `data?`): [`EditorGroupEvent`](EditorGroupEvent.md)

#### Parameters

| Name    | Type                                                      |
| :------ | :-------------------------------------------------------- |
| `type`  | `string`                                                  |
| `data?` | [`IEditorGroupEvent`](../interfaces/IEditorGroupEvent.md) |

#### Returns

[`EditorGroupEvent`](EditorGroupEvent.md)

#### Overrides

[EditorEvent](EditorEvent.md).[constructor](EditorEvent.md#constructor)

#### Defined in

[src/in/packages/editor/src/event/EditorGroupEvent.ts:25](https://github.com/leaferjs/leafer-in/blob/d97f6888a45310d40717e43f47796d4f7d0dce1d/packages/editor/src/event/EditorGroupEvent.ts#L25)

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

[IEditorGroupEvent](../interfaces/IEditorGroupEvent.md).[target](../interfaces/IEditorGroupEvent.md#target)

#### Inherited from

[EditorEvent](EditorEvent.md).[target](EditorEvent.md#target)

#### Defined in

[src/in/packages/editor/src/event/EditorEvent.ts:20](https://github.com/leaferjs/leafer-in/blob/d97f6888a45310d40717e43f47796d4f7d0dce1d/packages/editor/src/event/EditorEvent.ts#L20)

___

### editor

• `Readonly` **editor**: [`IEditor`](../interfaces/IEditor.md)

#### Implementation of

[IEditorGroupEvent](../interfaces/IEditorGroupEvent.md).[editor](../interfaces/IEditorGroupEvent.md#editor)

#### Inherited from

[EditorEvent](EditorEvent.md).[editor](EditorEvent.md#editor)

#### Defined in

[src/in/packages/editor/src/event/EditorEvent.ts:21](https://github.com/leaferjs/leafer-in/blob/d97f6888a45310d40717e43f47796d4f7d0dce1d/packages/editor/src/event/EditorEvent.ts#L21)

___

### value

• `Readonly` **value**: [`IUI`](../interfaces/IUI.md) \| [`IUI`](../interfaces/IUI.md)[]

#### Implementation of

[IEditorGroupEvent](../interfaces/IEditorGroupEvent.md).[value](../interfaces/IEditorGroupEvent.md#value)

#### Inherited from

[EditorEvent](EditorEvent.md).[value](EditorEvent.md#value)

#### Defined in

[src/in/packages/editor/src/event/EditorEvent.ts:23](https://github.com/leaferjs/leafer-in/blob/d97f6888a45310d40717e43f47796d4f7d0dce1d/packages/editor/src/event/EditorEvent.ts#L23)

___

### oldValue

• `Readonly` **oldValue**: [`IUI`](../interfaces/IUI.md) \| [`IUI`](../interfaces/IUI.md)[]

#### Implementation of

[IEditorGroupEvent](../interfaces/IEditorGroupEvent.md).[oldValue](../interfaces/IEditorGroupEvent.md#oldvalue)

#### Inherited from

[EditorEvent](EditorEvent.md).[oldValue](EditorEvent.md#oldvalue)

#### Defined in

[src/in/packages/editor/src/event/EditorEvent.ts:24](https://github.com/leaferjs/leafer-in/blob/d97f6888a45310d40717e43f47796d4f7d0dce1d/packages/editor/src/event/EditorEvent.ts#L24)

___

### worldOrigin

• `Readonly` **worldOrigin**: [`IPointData`](../interfaces/IPointData.md)

#### Implementation of

[IEditorGroupEvent](../interfaces/IEditorGroupEvent.md).[worldOrigin](../interfaces/IEditorGroupEvent.md#worldorigin)

#### Inherited from

[EditorEvent](EditorEvent.md).[worldOrigin](EditorEvent.md#worldorigin)

#### Defined in

[src/in/packages/editor/src/event/EditorEvent.ts:29](https://github.com/leaferjs/leafer-in/blob/d97f6888a45310d40717e43f47796d4f7d0dce1d/packages/editor/src/event/EditorEvent.ts#L29)

___

### origin

• `Readonly` **origin**: [`IPointData`](../interfaces/IPointData.md)

#### Implementation of

[IEditorGroupEvent](../interfaces/IEditorGroupEvent.md).[origin](../interfaces/IEditorGroupEvent.md#origin)

#### Inherited from

[EditorEvent](EditorEvent.md).[origin](EditorEvent.md#origin)

#### Defined in

[src/in/packages/editor/src/event/EditorEvent.ts:30](https://github.com/leaferjs/leafer-in/blob/d97f6888a45310d40717e43f47796d4f7d0dce1d/packages/editor/src/event/EditorEvent.ts#L30)

___

### BEFORE\_GROUP

▪ `Static` **BEFORE\_GROUP**: `string` = `'editor.before_group'`

#### Defined in

[src/in/packages/editor/src/event/EditorGroupEvent.ts:11](https://github.com/leaferjs/leafer-in/blob/d97f6888a45310d40717e43f47796d4f7d0dce1d/packages/editor/src/event/EditorGroupEvent.ts#L11)

___

### GROUP

▪ `Static` **GROUP**: `string` = `'editor.group'`

#### Defined in

[src/in/packages/editor/src/event/EditorGroupEvent.ts:12](https://github.com/leaferjs/leafer-in/blob/d97f6888a45310d40717e43f47796d4f7d0dce1d/packages/editor/src/event/EditorGroupEvent.ts#L12)

___

### BEFORE\_UNGROUP

▪ `Static` **BEFORE\_UNGROUP**: `string` = `'editor.before_ungroup'`

#### Defined in

[src/in/packages/editor/src/event/EditorGroupEvent.ts:14](https://github.com/leaferjs/leafer-in/blob/d97f6888a45310d40717e43f47796d4f7d0dce1d/packages/editor/src/event/EditorGroupEvent.ts#L14)

___

### UNGROUP

▪ `Static` **UNGROUP**: `string` = `'editor.ungroup'`

#### Defined in

[src/in/packages/editor/src/event/EditorGroupEvent.ts:15](https://github.com/leaferjs/leafer-in/blob/d97f6888a45310d40717e43f47796d4f7d0dce1d/packages/editor/src/event/EditorGroupEvent.ts#L15)

___

### BEFORE\_OPEN

▪ `Static` **BEFORE\_OPEN**: `string` = `'editor.before_open_group'`

#### Defined in

[src/in/packages/editor/src/event/EditorGroupEvent.ts:17](https://github.com/leaferjs/leafer-in/blob/d97f6888a45310d40717e43f47796d4f7d0dce1d/packages/editor/src/event/EditorGroupEvent.ts#L17)

___

### OPEN

▪ `Static` **OPEN**: `string` = `'editor.open_group'`

#### Defined in

[src/in/packages/editor/src/event/EditorGroupEvent.ts:18](https://github.com/leaferjs/leafer-in/blob/d97f6888a45310d40717e43f47796d4f7d0dce1d/packages/editor/src/event/EditorGroupEvent.ts#L18)

___

### BEFORE\_CLOSE

▪ `Static` **BEFORE\_CLOSE**: `string` = `'editor.before_close_group'`

#### Defined in

[src/in/packages/editor/src/event/EditorGroupEvent.ts:20](https://github.com/leaferjs/leafer-in/blob/d97f6888a45310d40717e43f47796d4f7d0dce1d/packages/editor/src/event/EditorGroupEvent.ts#L20)

___

### CLOSE

▪ `Static` **CLOSE**: `string` = `'editor.close_group'`

#### Defined in

[src/in/packages/editor/src/event/EditorGroupEvent.ts:21](https://github.com/leaferjs/leafer-in/blob/d97f6888a45310d40717e43f47796d4f7d0dce1d/packages/editor/src/event/EditorGroupEvent.ts#L21)

___

### editTarget

• `Readonly` **editTarget**: [`IGroup`](../interfaces/IGroup.md)

#### Implementation of

[IEditorGroupEvent](../interfaces/IEditorGroupEvent.md).[editTarget](../interfaces/IEditorGroupEvent.md#edittarget)

#### Defined in

[src/in/packages/editor/src/event/EditorGroupEvent.ts:23](https://github.com/leaferjs/leafer-in/blob/d97f6888a45310d40717e43f47796d4f7d0dce1d/packages/editor/src/event/EditorGroupEvent.ts#L23)

___

### type

• `Readonly` **type**: `string`

#### Implementation of

[IEditorGroupEvent](../interfaces/IEditorGroupEvent.md).[type](../interfaces/IEditorGroupEvent.md#type)

#### Inherited from

[EditorEvent](EditorEvent.md).[type](EditorEvent.md#type)

#### Defined in

[src/leafer/packages/event/src/Event.ts:9](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/event/src/Event.ts#L9)

___

### current

• `Readonly` **current**: [`IEventTarget`](../interfaces/IEventTarget.md)

#### Implementation of

[IEditorGroupEvent](../interfaces/IEditorGroupEvent.md).[current](../interfaces/IEditorGroupEvent.md#current)

#### Inherited from

[EditorEvent](EditorEvent.md).[current](EditorEvent.md#current)

#### Defined in

[src/leafer/packages/event/src/Event.ts:11](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/event/src/Event.ts#L11)

___

### bubbles

• `Readonly` **bubbles**: `boolean` = `false`

#### Implementation of

[IEditorGroupEvent](../interfaces/IEditorGroupEvent.md).[bubbles](../interfaces/IEditorGroupEvent.md#bubbles)

#### Inherited from

[EditorEvent](EditorEvent.md).[bubbles](EditorEvent.md#bubbles)

#### Defined in

[src/leafer/packages/event/src/Event.ts:13](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/event/src/Event.ts#L13)

___

### phase

• `Readonly` **phase**: `number`

#### Implementation of

[IEditorGroupEvent](../interfaces/IEditorGroupEvent.md).[phase](../interfaces/IEditorGroupEvent.md#phase)

#### Inherited from

[EditorEvent](EditorEvent.md).[phase](EditorEvent.md#phase)

#### Defined in

[src/leafer/packages/event/src/Event.ts:14](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/event/src/Event.ts#L14)

___

### isStopDefault

• **isStopDefault**: `boolean`

#### Implementation of

[IEditorGroupEvent](../interfaces/IEditorGroupEvent.md).[isStopDefault](../interfaces/IEditorGroupEvent.md#isstopdefault)

#### Inherited from

[EditorEvent](EditorEvent.md).[isStopDefault](EditorEvent.md#isstopdefault)

#### Defined in

[src/leafer/packages/event/src/Event.ts:16](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/event/src/Event.ts#L16)

___

### isStop

• **isStop**: `boolean`

#### Implementation of

[IEditorGroupEvent](../interfaces/IEditorGroupEvent.md).[isStop](../interfaces/IEditorGroupEvent.md#isstop)

#### Inherited from

[EditorEvent](EditorEvent.md).[isStop](EditorEvent.md#isstop)

#### Defined in

[src/leafer/packages/event/src/Event.ts:17](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/event/src/Event.ts#L17)

___

### isStopNow

• **isStopNow**: `boolean`

#### Implementation of

[IEditorGroupEvent](../interfaces/IEditorGroupEvent.md).[isStopNow](../interfaces/IEditorGroupEvent.md#isstopnow)

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

[IEditorGroupEvent](../interfaces/IEditorGroupEvent.md).[list](../interfaces/IEditorGroupEvent.md#list)

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

[IEditorGroupEvent](../interfaces/IEditorGroupEvent.md).[oldList](../interfaces/IEditorGroupEvent.md#oldlist)

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

[IEditorGroupEvent](../interfaces/IEditorGroupEvent.md).[stopDefault](../interfaces/IEditorGroupEvent.md#stopdefault)

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

[IEditorGroupEvent](../interfaces/IEditorGroupEvent.md).[stopNow](../interfaces/IEditorGroupEvent.md#stopnow)

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

[IEditorGroupEvent](../interfaces/IEditorGroupEvent.md).[stop](../interfaces/IEditorGroupEvent.md#stop)

#### Inherited from

[EditorEvent](EditorEvent.md).[stop](EditorEvent.md#stop)

#### Defined in

[src/leafer/packages/event/src/Event.ts:36](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/event/src/Event.ts#L36)
