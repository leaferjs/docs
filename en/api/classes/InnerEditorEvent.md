# Class: InnerEditorEvent

## Hierarchy

- [`EditorEvent`](EditorEvent.md)

  ↳ **`InnerEditorEvent`**

## Implements

- [`IInnerEditorEvent`](../interfaces/IInnerEditorEvent.md)

## Table of contents

### Constructors

- [constructor](InnerEditorEvent.md#constructor)

### Properties

- [BEFORE\_SELECT](InnerEditorEvent.md#before_select)
- [SELECT](InnerEditorEvent.md#select)
- [AFTER\_SELECT](InnerEditorEvent.md#after_select)
- [BEFORE\_HOVER](InnerEditorEvent.md#before_hover)
- [HOVER](InnerEditorEvent.md#hover)
- [target](InnerEditorEvent.md#target)
- [editor](InnerEditorEvent.md#editor)
- [value](InnerEditorEvent.md#value)
- [oldValue](InnerEditorEvent.md#oldvalue)
- [worldOrigin](InnerEditorEvent.md#worldorigin)
- [origin](InnerEditorEvent.md#origin)
- [BEFORE\_OPEN](InnerEditorEvent.md#before_open)
- [OPEN](InnerEditorEvent.md#open)
- [BEFORE\_CLOSE](InnerEditorEvent.md#before_close)
- [CLOSE](InnerEditorEvent.md#close)
- [editTarget](InnerEditorEvent.md#edittarget)
- [innerEditor](InnerEditorEvent.md#innereditor)
- [type](InnerEditorEvent.md#type)
- [current](InnerEditorEvent.md#current)
- [bubbles](InnerEditorEvent.md#bubbles)
- [phase](InnerEditorEvent.md#phase)
- [isStopDefault](InnerEditorEvent.md#isstopdefault)
- [isStop](InnerEditorEvent.md#isstop)
- [isStopNow](InnerEditorEvent.md#isstopnow)

### Accessors

- [list](InnerEditorEvent.md#list)
- [oldList](InnerEditorEvent.md#oldlist)

### Methods

- [stopDefault](InnerEditorEvent.md#stopdefault)
- [stopNow](InnerEditorEvent.md#stopnow)
- [stop](InnerEditorEvent.md#stop)

## Constructors

### constructor

• **new InnerEditorEvent**(`type`, `data?`): [`InnerEditorEvent`](InnerEditorEvent.md)

#### Parameters

| Name    | Type                                                      |
| :------ | :-------------------------------------------------------- |
| `type`  | `string`                                                  |
| `data?` | [`IInnerEditorEvent`](../interfaces/IInnerEditorEvent.md) |

#### Returns

[`InnerEditorEvent`](InnerEditorEvent.md)

#### Overrides

[EditorEvent](EditorEvent.md).[constructor](EditorEvent.md#constructor)

#### Defined in

[src/in/packages/editor/src/event/InnerEditorEvent.ts:19](https://github.com/leaferjs/leafer-in/blob/d97f6888a45310d40717e43f47796d4f7d0dce1d/packages/editor/src/event/InnerEditorEvent.ts#L19)

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

[IInnerEditorEvent](../interfaces/IInnerEditorEvent.md).[target](../interfaces/IInnerEditorEvent.md#target)

#### Inherited from

[EditorEvent](EditorEvent.md).[target](EditorEvent.md#target)

#### Defined in

[src/in/packages/editor/src/event/EditorEvent.ts:20](https://github.com/leaferjs/leafer-in/blob/d97f6888a45310d40717e43f47796d4f7d0dce1d/packages/editor/src/event/EditorEvent.ts#L20)

___

### editor

• `Readonly` **editor**: [`IEditor`](../interfaces/IEditor.md)

#### Implementation of

[IInnerEditorEvent](../interfaces/IInnerEditorEvent.md).[editor](../interfaces/IInnerEditorEvent.md#editor)

#### Inherited from

[EditorEvent](EditorEvent.md).[editor](EditorEvent.md#editor)

#### Defined in

[src/in/packages/editor/src/event/EditorEvent.ts:21](https://github.com/leaferjs/leafer-in/blob/d97f6888a45310d40717e43f47796d4f7d0dce1d/packages/editor/src/event/EditorEvent.ts#L21)

___

### value

• `Readonly` **value**: [`IUI`](../interfaces/IUI.md) \| [`IUI`](../interfaces/IUI.md)[]

#### Implementation of

[IInnerEditorEvent](../interfaces/IInnerEditorEvent.md).[value](../interfaces/IInnerEditorEvent.md#value)

#### Inherited from

[EditorEvent](EditorEvent.md).[value](EditorEvent.md#value)

#### Defined in

[src/in/packages/editor/src/event/EditorEvent.ts:23](https://github.com/leaferjs/leafer-in/blob/d97f6888a45310d40717e43f47796d4f7d0dce1d/packages/editor/src/event/EditorEvent.ts#L23)

___

### oldValue

• `Readonly` **oldValue**: [`IUI`](../interfaces/IUI.md) \| [`IUI`](../interfaces/IUI.md)[]

#### Implementation of

[IInnerEditorEvent](../interfaces/IInnerEditorEvent.md).[oldValue](../interfaces/IInnerEditorEvent.md#oldvalue)

#### Inherited from

[EditorEvent](EditorEvent.md).[oldValue](EditorEvent.md#oldvalue)

#### Defined in

[src/in/packages/editor/src/event/EditorEvent.ts:24](https://github.com/leaferjs/leafer-in/blob/d97f6888a45310d40717e43f47796d4f7d0dce1d/packages/editor/src/event/EditorEvent.ts#L24)

___

### worldOrigin

• `Readonly` **worldOrigin**: [`IPointData`](../interfaces/IPointData.md)

#### Implementation of

[IInnerEditorEvent](../interfaces/IInnerEditorEvent.md).[worldOrigin](../interfaces/IInnerEditorEvent.md#worldorigin)

#### Inherited from

[EditorEvent](EditorEvent.md).[worldOrigin](EditorEvent.md#worldorigin)

#### Defined in

[src/in/packages/editor/src/event/EditorEvent.ts:29](https://github.com/leaferjs/leafer-in/blob/d97f6888a45310d40717e43f47796d4f7d0dce1d/packages/editor/src/event/EditorEvent.ts#L29)

___

### origin

• `Readonly` **origin**: [`IPointData`](../interfaces/IPointData.md)

#### Implementation of

[IInnerEditorEvent](../interfaces/IInnerEditorEvent.md).[origin](../interfaces/IInnerEditorEvent.md#origin)

#### Inherited from

[EditorEvent](EditorEvent.md).[origin](EditorEvent.md#origin)

#### Defined in

[src/in/packages/editor/src/event/EditorEvent.ts:30](https://github.com/leaferjs/leafer-in/blob/d97f6888a45310d40717e43f47796d4f7d0dce1d/packages/editor/src/event/EditorEvent.ts#L30)

___

### BEFORE\_OPEN

▪ `Static` **BEFORE\_OPEN**: `string` = `'innerEditor.before_open'`

#### Defined in

[src/in/packages/editor/src/event/InnerEditorEvent.ts:10](https://github.com/leaferjs/leafer-in/blob/d97f6888a45310d40717e43f47796d4f7d0dce1d/packages/editor/src/event/InnerEditorEvent.ts#L10)

___

### OPEN

▪ `Static` **OPEN**: `string` = `'innerEditor.open'`

#### Defined in

[src/in/packages/editor/src/event/InnerEditorEvent.ts:11](https://github.com/leaferjs/leafer-in/blob/d97f6888a45310d40717e43f47796d4f7d0dce1d/packages/editor/src/event/InnerEditorEvent.ts#L11)

___

### BEFORE\_CLOSE

▪ `Static` **BEFORE\_CLOSE**: `string` = `'innerEditor.before_close'`

#### Defined in

[src/in/packages/editor/src/event/InnerEditorEvent.ts:13](https://github.com/leaferjs/leafer-in/blob/d97f6888a45310d40717e43f47796d4f7d0dce1d/packages/editor/src/event/InnerEditorEvent.ts#L13)

___

### CLOSE

▪ `Static` **CLOSE**: `string` = `'innerEditor.close'`

#### Defined in

[src/in/packages/editor/src/event/InnerEditorEvent.ts:14](https://github.com/leaferjs/leafer-in/blob/d97f6888a45310d40717e43f47796d4f7d0dce1d/packages/editor/src/event/InnerEditorEvent.ts#L14)

___

### editTarget

• `Readonly` **editTarget**: [`IUI`](../interfaces/IUI.md)

#### Implementation of

[IInnerEditorEvent](../interfaces/IInnerEditorEvent.md).[editTarget](../interfaces/IInnerEditorEvent.md#edittarget)

#### Defined in

[src/in/packages/editor/src/event/InnerEditorEvent.ts:16](https://github.com/leaferjs/leafer-in/blob/d97f6888a45310d40717e43f47796d4f7d0dce1d/packages/editor/src/event/InnerEditorEvent.ts#L16)

___

### innerEditor

• `Readonly` **innerEditor**: [`IInnerEditor`](../interfaces/IInnerEditor.md)

#### Implementation of

[IInnerEditorEvent](../interfaces/IInnerEditorEvent.md).[innerEditor](../interfaces/IInnerEditorEvent.md#innereditor)

#### Defined in

[src/in/packages/editor/src/event/InnerEditorEvent.ts:17](https://github.com/leaferjs/leafer-in/blob/d97f6888a45310d40717e43f47796d4f7d0dce1d/packages/editor/src/event/InnerEditorEvent.ts#L17)

___

### type

• `Readonly` **type**: `string`

#### Implementation of

[IInnerEditorEvent](../interfaces/IInnerEditorEvent.md).[type](../interfaces/IInnerEditorEvent.md#type)

#### Inherited from

[EditorEvent](EditorEvent.md).[type](EditorEvent.md#type)

#### Defined in

[src/leafer/packages/event/src/Event.ts:9](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/event/src/Event.ts#L9)

___

### current

• `Readonly` **current**: [`IEventTarget`](../interfaces/IEventTarget.md)

#### Implementation of

[IInnerEditorEvent](../interfaces/IInnerEditorEvent.md).[current](../interfaces/IInnerEditorEvent.md#current)

#### Inherited from

[EditorEvent](EditorEvent.md).[current](EditorEvent.md#current)

#### Defined in

[src/leafer/packages/event/src/Event.ts:11](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/event/src/Event.ts#L11)

___

### bubbles

• `Readonly` **bubbles**: `boolean` = `false`

#### Implementation of

[IInnerEditorEvent](../interfaces/IInnerEditorEvent.md).[bubbles](../interfaces/IInnerEditorEvent.md#bubbles)

#### Inherited from

[EditorEvent](EditorEvent.md).[bubbles](EditorEvent.md#bubbles)

#### Defined in

[src/leafer/packages/event/src/Event.ts:13](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/event/src/Event.ts#L13)

___

### phase

• `Readonly` **phase**: `number`

#### Implementation of

[IInnerEditorEvent](../interfaces/IInnerEditorEvent.md).[phase](../interfaces/IInnerEditorEvent.md#phase)

#### Inherited from

[EditorEvent](EditorEvent.md).[phase](EditorEvent.md#phase)

#### Defined in

[src/leafer/packages/event/src/Event.ts:14](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/event/src/Event.ts#L14)

___

### isStopDefault

• **isStopDefault**: `boolean`

#### Implementation of

[IInnerEditorEvent](../interfaces/IInnerEditorEvent.md).[isStopDefault](../interfaces/IInnerEditorEvent.md#isstopdefault)

#### Inherited from

[EditorEvent](EditorEvent.md).[isStopDefault](EditorEvent.md#isstopdefault)

#### Defined in

[src/leafer/packages/event/src/Event.ts:16](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/event/src/Event.ts#L16)

___

### isStop

• **isStop**: `boolean`

#### Implementation of

[IInnerEditorEvent](../interfaces/IInnerEditorEvent.md).[isStop](../interfaces/IInnerEditorEvent.md#isstop)

#### Inherited from

[EditorEvent](EditorEvent.md).[isStop](EditorEvent.md#isstop)

#### Defined in

[src/leafer/packages/event/src/Event.ts:17](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/event/src/Event.ts#L17)

___

### isStopNow

• **isStopNow**: `boolean`

#### Implementation of

[IInnerEditorEvent](../interfaces/IInnerEditorEvent.md).[isStopNow](../interfaces/IInnerEditorEvent.md#isstopnow)

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

[IInnerEditorEvent](../interfaces/IInnerEditorEvent.md).[list](../interfaces/IInnerEditorEvent.md#list)

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

[IInnerEditorEvent](../interfaces/IInnerEditorEvent.md).[oldList](../interfaces/IInnerEditorEvent.md#oldlist)

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

[IInnerEditorEvent](../interfaces/IInnerEditorEvent.md).[stopDefault](../interfaces/IInnerEditorEvent.md#stopdefault)

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

[IInnerEditorEvent](../interfaces/IInnerEditorEvent.md).[stopNow](../interfaces/IInnerEditorEvent.md#stopnow)

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

[IInnerEditorEvent](../interfaces/IInnerEditorEvent.md).[stop](../interfaces/IInnerEditorEvent.md#stop)

#### Inherited from

[EditorEvent](EditorEvent.md).[stop](EditorEvent.md#stop)

#### Defined in

[src/leafer/packages/event/src/Event.ts:36](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/event/src/Event.ts#L36)
