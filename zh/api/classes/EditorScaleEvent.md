# Class: EditorScaleEvent

## Hierarchy

- [`EditorEvent`](EditorEvent.md)

  ↳ **`EditorScaleEvent`**

## Implements

- [`IEditorScaleEvent`](../interfaces/IEditorScaleEvent.md)

## Table of contents

### Constructors

- [constructor](EditorScaleEvent.md#constructor)

### Properties

- [BEFORE\_SELECT](EditorScaleEvent.md#before_select)
- [SELECT](EditorScaleEvent.md#select)
- [AFTER\_SELECT](EditorScaleEvent.md#after_select)
- [BEFORE\_HOVER](EditorScaleEvent.md#before_hover)
- [HOVER](EditorScaleEvent.md#hover)
- [target](EditorScaleEvent.md#target)
- [editor](EditorScaleEvent.md#editor)
- [value](EditorScaleEvent.md#value)
- [oldValue](EditorScaleEvent.md#oldvalue)
- [worldOrigin](EditorScaleEvent.md#worldorigin)
- [origin](EditorScaleEvent.md#origin)
- [BEFORE\_SCALE](EditorScaleEvent.md#before_scale)
- [SCALE](EditorScaleEvent.md#scale)
- [scaleX](EditorScaleEvent.md#scalex)
- [scaleY](EditorScaleEvent.md#scaley)
- [transform](EditorScaleEvent.md#transform)
- [drag](EditorScaleEvent.md#drag)
- [direction](EditorScaleEvent.md#direction)
- [lockRatio](EditorScaleEvent.md#lockratio)
- [around](EditorScaleEvent.md#around)
- [type](EditorScaleEvent.md#type)
- [current](EditorScaleEvent.md#current)
- [bubbles](EditorScaleEvent.md#bubbles)
- [phase](EditorScaleEvent.md#phase)
- [isStopDefault](EditorScaleEvent.md#isstopdefault)
- [isStop](EditorScaleEvent.md#isstop)
- [isStopNow](EditorScaleEvent.md#isstopnow)

### Accessors

- [list](EditorScaleEvent.md#list)
- [oldList](EditorScaleEvent.md#oldlist)

### Methods

- [stopDefault](EditorScaleEvent.md#stopdefault)
- [stopNow](EditorScaleEvent.md#stopnow)
- [stop](EditorScaleEvent.md#stop)

## Constructors

### constructor

• **new EditorScaleEvent**(`type`, `data?`): [`EditorScaleEvent`](EditorScaleEvent.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | `string` |
| `data?` | [`IEditorScaleEvent`](../interfaces/IEditorScaleEvent.md) |

#### Returns

[`EditorScaleEvent`](EditorScaleEvent.md)

#### Overrides

[EditorEvent](EditorEvent.md).[constructor](EditorEvent.md#constructor)

#### Defined in

[src/in/packages/editor/src/event/EditorScaleEvent.ts:25](https://github.com/leaferjs/leafer-in/blob/d97f6888a45310d40717e43f47796d4f7d0dce1d/packages/editor/src/event/EditorScaleEvent.ts#L25)

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

[IEditorScaleEvent](../interfaces/IEditorScaleEvent.md).[target](../interfaces/IEditorScaleEvent.md#target)

#### Inherited from

[EditorEvent](EditorEvent.md).[target](EditorEvent.md#target)

#### Defined in

[src/in/packages/editor/src/event/EditorEvent.ts:20](https://github.com/leaferjs/leafer-in/blob/d97f6888a45310d40717e43f47796d4f7d0dce1d/packages/editor/src/event/EditorEvent.ts#L20)

___

### editor

• `Readonly` **editor**: [`IEditor`](../interfaces/IEditor.md)

#### Implementation of

[IEditorScaleEvent](../interfaces/IEditorScaleEvent.md).[editor](../interfaces/IEditorScaleEvent.md#editor)

#### Inherited from

[EditorEvent](EditorEvent.md).[editor](EditorEvent.md#editor)

#### Defined in

[src/in/packages/editor/src/event/EditorEvent.ts:21](https://github.com/leaferjs/leafer-in/blob/d97f6888a45310d40717e43f47796d4f7d0dce1d/packages/editor/src/event/EditorEvent.ts#L21)

___

### value

• `Readonly` **value**: [`IUI`](../interfaces/IUI.md) \| [`IUI`](../interfaces/IUI.md)[]

#### Implementation of

[IEditorScaleEvent](../interfaces/IEditorScaleEvent.md).[value](../interfaces/IEditorScaleEvent.md#value)

#### Inherited from

[EditorEvent](EditorEvent.md).[value](EditorEvent.md#value)

#### Defined in

[src/in/packages/editor/src/event/EditorEvent.ts:23](https://github.com/leaferjs/leafer-in/blob/d97f6888a45310d40717e43f47796d4f7d0dce1d/packages/editor/src/event/EditorEvent.ts#L23)

___

### oldValue

• `Readonly` **oldValue**: [`IUI`](../interfaces/IUI.md) \| [`IUI`](../interfaces/IUI.md)[]

#### Implementation of

[IEditorScaleEvent](../interfaces/IEditorScaleEvent.md).[oldValue](../interfaces/IEditorScaleEvent.md#oldvalue)

#### Inherited from

[EditorEvent](EditorEvent.md).[oldValue](EditorEvent.md#oldvalue)

#### Defined in

[src/in/packages/editor/src/event/EditorEvent.ts:24](https://github.com/leaferjs/leafer-in/blob/d97f6888a45310d40717e43f47796d4f7d0dce1d/packages/editor/src/event/EditorEvent.ts#L24)

___

### worldOrigin

• `Readonly` **worldOrigin**: [`IPointData`](../interfaces/IPointData.md)

#### Implementation of

[IEditorScaleEvent](../interfaces/IEditorScaleEvent.md).[worldOrigin](../interfaces/IEditorScaleEvent.md#worldorigin)

#### Inherited from

[EditorEvent](EditorEvent.md).[worldOrigin](EditorEvent.md#worldorigin)

#### Defined in

[src/in/packages/editor/src/event/EditorEvent.ts:29](https://github.com/leaferjs/leafer-in/blob/d97f6888a45310d40717e43f47796d4f7d0dce1d/packages/editor/src/event/EditorEvent.ts#L29)

___

### origin

• `Readonly` **origin**: [`IPointData`](../interfaces/IPointData.md)

#### Implementation of

[IEditorScaleEvent](../interfaces/IEditorScaleEvent.md).[origin](../interfaces/IEditorScaleEvent.md#origin)

#### Inherited from

[EditorEvent](EditorEvent.md).[origin](EditorEvent.md#origin)

#### Defined in

[src/in/packages/editor/src/event/EditorEvent.ts:30](https://github.com/leaferjs/leafer-in/blob/d97f6888a45310d40717e43f47796d4f7d0dce1d/packages/editor/src/event/EditorEvent.ts#L30)

___

### BEFORE\_SCALE

▪ `Static` **BEFORE\_SCALE**: `string` = `'editor.before_scale'`

#### Defined in

[src/in/packages/editor/src/event/EditorScaleEvent.ts:11](https://github.com/leaferjs/leafer-in/blob/d97f6888a45310d40717e43f47796d4f7d0dce1d/packages/editor/src/event/EditorScaleEvent.ts#L11)

___

### SCALE

▪ `Static` **SCALE**: `string` = `'editor.scale'`

#### Defined in

[src/in/packages/editor/src/event/EditorScaleEvent.ts:12](https://github.com/leaferjs/leafer-in/blob/d97f6888a45310d40717e43f47796d4f7d0dce1d/packages/editor/src/event/EditorScaleEvent.ts#L12)

___

### scaleX

• `Readonly` **scaleX**: `number`

#### Implementation of

[IEditorScaleEvent](../interfaces/IEditorScaleEvent.md).[scaleX](../interfaces/IEditorScaleEvent.md#scalex)

#### Defined in

[src/in/packages/editor/src/event/EditorScaleEvent.ts:15](https://github.com/leaferjs/leafer-in/blob/d97f6888a45310d40717e43f47796d4f7d0dce1d/packages/editor/src/event/EditorScaleEvent.ts#L15)

___

### scaleY

• `Readonly` **scaleY**: `number`

#### Implementation of

[IEditorScaleEvent](../interfaces/IEditorScaleEvent.md).[scaleY](../interfaces/IEditorScaleEvent.md#scaley)

#### Defined in

[src/in/packages/editor/src/event/EditorScaleEvent.ts:16](https://github.com/leaferjs/leafer-in/blob/d97f6888a45310d40717e43f47796d4f7d0dce1d/packages/editor/src/event/EditorScaleEvent.ts#L16)

___

### transform

• `Optional` `Readonly` **transform**: [`IMatrixData`](../interfaces/IMatrixData.md)

#### Implementation of

[IEditorScaleEvent](../interfaces/IEditorScaleEvent.md).[transform](../interfaces/IEditorScaleEvent.md#transform)

#### Defined in

[src/in/packages/editor/src/event/EditorScaleEvent.ts:17](https://github.com/leaferjs/leafer-in/blob/d97f6888a45310d40717e43f47796d4f7d0dce1d/packages/editor/src/event/EditorScaleEvent.ts#L17)

___

### drag

• `Readonly` **drag**: [`IDragEvent`](../interfaces/IDragEvent.md)

#### Implementation of

[IEditorScaleEvent](../interfaces/IEditorScaleEvent.md).[drag](../interfaces/IEditorScaleEvent.md#drag)

#### Defined in

[src/in/packages/editor/src/event/EditorScaleEvent.ts:19](https://github.com/leaferjs/leafer-in/blob/d97f6888a45310d40717e43f47796d4f7d0dce1d/packages/editor/src/event/EditorScaleEvent.ts#L19)

___

### direction

• `Readonly` **direction**: [`Direction9`](../enums/Direction9.md)

#### Implementation of

[IEditorScaleEvent](../interfaces/IEditorScaleEvent.md).[direction](../interfaces/IEditorScaleEvent.md#direction)

#### Defined in

[src/in/packages/editor/src/event/EditorScaleEvent.ts:21](https://github.com/leaferjs/leafer-in/blob/d97f6888a45310d40717e43f47796d4f7d0dce1d/packages/editor/src/event/EditorScaleEvent.ts#L21)

___

### lockRatio

• `Readonly` **lockRatio**: `boolean`

#### Implementation of

[IEditorScaleEvent](../interfaces/IEditorScaleEvent.md).[lockRatio](../interfaces/IEditorScaleEvent.md#lockratio)

#### Defined in

[src/in/packages/editor/src/event/EditorScaleEvent.ts:22](https://github.com/leaferjs/leafer-in/blob/d97f6888a45310d40717e43f47796d4f7d0dce1d/packages/editor/src/event/EditorScaleEvent.ts#L22)

___

### around

• `Readonly` **around**: [`IAround`](../modules.md#iaround)

#### Implementation of

[IEditorScaleEvent](../interfaces/IEditorScaleEvent.md).[around](../interfaces/IEditorScaleEvent.md#around)

#### Defined in

[src/in/packages/editor/src/event/EditorScaleEvent.ts:23](https://github.com/leaferjs/leafer-in/blob/d97f6888a45310d40717e43f47796d4f7d0dce1d/packages/editor/src/event/EditorScaleEvent.ts#L23)

___

### type

• `Readonly` **type**: `string`

#### Implementation of

[IEditorScaleEvent](../interfaces/IEditorScaleEvent.md).[type](../interfaces/IEditorScaleEvent.md#type)

#### Inherited from

[EditorEvent](EditorEvent.md).[type](EditorEvent.md#type)

#### Defined in

[src/leafer/packages/event/src/Event.ts:9](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/event/src/Event.ts#L9)

___

### current

• `Readonly` **current**: [`IEventTarget`](../interfaces/IEventTarget.md)

#### Implementation of

[IEditorScaleEvent](../interfaces/IEditorScaleEvent.md).[current](../interfaces/IEditorScaleEvent.md#current)

#### Inherited from

[EditorEvent](EditorEvent.md).[current](EditorEvent.md#current)

#### Defined in

[src/leafer/packages/event/src/Event.ts:11](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/event/src/Event.ts#L11)

___

### bubbles

• `Readonly` **bubbles**: `boolean` = `false`

#### Implementation of

[IEditorScaleEvent](../interfaces/IEditorScaleEvent.md).[bubbles](../interfaces/IEditorScaleEvent.md#bubbles)

#### Inherited from

[EditorEvent](EditorEvent.md).[bubbles](EditorEvent.md#bubbles)

#### Defined in

[src/leafer/packages/event/src/Event.ts:13](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/event/src/Event.ts#L13)

___

### phase

• `Readonly` **phase**: `number`

#### Implementation of

[IEditorScaleEvent](../interfaces/IEditorScaleEvent.md).[phase](../interfaces/IEditorScaleEvent.md#phase)

#### Inherited from

[EditorEvent](EditorEvent.md).[phase](EditorEvent.md#phase)

#### Defined in

[src/leafer/packages/event/src/Event.ts:14](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/event/src/Event.ts#L14)

___

### isStopDefault

• **isStopDefault**: `boolean`

#### Implementation of

[IEditorScaleEvent](../interfaces/IEditorScaleEvent.md).[isStopDefault](../interfaces/IEditorScaleEvent.md#isstopdefault)

#### Inherited from

[EditorEvent](EditorEvent.md).[isStopDefault](EditorEvent.md#isstopdefault)

#### Defined in

[src/leafer/packages/event/src/Event.ts:16](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/event/src/Event.ts#L16)

___

### isStop

• **isStop**: `boolean`

#### Implementation of

[IEditorScaleEvent](../interfaces/IEditorScaleEvent.md).[isStop](../interfaces/IEditorScaleEvent.md#isstop)

#### Inherited from

[EditorEvent](EditorEvent.md).[isStop](EditorEvent.md#isstop)

#### Defined in

[src/leafer/packages/event/src/Event.ts:17](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/event/src/Event.ts#L17)

___

### isStopNow

• **isStopNow**: `boolean`

#### Implementation of

[IEditorScaleEvent](../interfaces/IEditorScaleEvent.md).[isStopNow](../interfaces/IEditorScaleEvent.md#isstopnow)

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

[IEditorScaleEvent](../interfaces/IEditorScaleEvent.md).[list](../interfaces/IEditorScaleEvent.md#list)

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

[IEditorScaleEvent](../interfaces/IEditorScaleEvent.md).[oldList](../interfaces/IEditorScaleEvent.md#oldlist)

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

[IEditorScaleEvent](../interfaces/IEditorScaleEvent.md).[stopDefault](../interfaces/IEditorScaleEvent.md#stopdefault)

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

[IEditorScaleEvent](../interfaces/IEditorScaleEvent.md).[stopNow](../interfaces/IEditorScaleEvent.md#stopnow)

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

[IEditorScaleEvent](../interfaces/IEditorScaleEvent.md).[stop](../interfaces/IEditorScaleEvent.md#stop)

#### Inherited from

[EditorEvent](EditorEvent.md).[stop](EditorEvent.md#stop)

#### Defined in

[src/leafer/packages/event/src/Event.ts:36](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/event/src/Event.ts#L36)
