# Interface: IEditTool

## Hierarchy

- [`IInnerEditor`](IInnerEditor.md)

  ↳ **`IEditTool`**

## Implemented by

- [`EditTool`](../classes/EditTool.md)

## Table of contents

### Properties

- [tag](IEditTool.md#tag)
- [mode](IEditTool.md#mode)
- [editTarget](IEditTool.md#edittarget)
- [config](IEditTool.md#config)
- [editConfig](IEditTool.md#editconfig)
- [editor](IEditTool.md#editor)
- [editBox](IEditTool.md#editbox)
- [view](IEditTool.md#view)
- [eventIds](IEditTool.md#eventids)

### Methods

- [onMove](IEditTool.md#onmove)
- [onScale](IEditTool.md#onscale)
- [onScaleWithDrag](IEditTool.md#onscalewithdrag)
- [onRotate](IEditTool.md#onrotate)
- [onSkew](IEditTool.md#onskew)
- [onCreate](IEditTool.md#oncreate)
- [create](IEditTool.md#create)
- [onLoad](IEditTool.md#onload)
- [load](IEditTool.md#load)
- [unload](IEditTool.md#unload)
- [onUpdate](IEditTool.md#onupdate)
- [update](IEditTool.md#update)
- [onDestroy](IEditTool.md#ondestroy)
- [destroy](IEditTool.md#destroy)

## Properties

### tag

• `Readonly` **tag**: `string`

#### Inherited from

[IInnerEditor](IInnerEditor.md).[tag](IInnerEditor.md#tag)

#### Defined in

[src/in/packages/interface/src/editor/IEditor.ts:37](https://github.com/leaferjs/leafer-in/blob/d97f6888a45310d40717e43f47796d4f7d0dce1d/packages/interface/src/editor/IEditor.ts#L37)

___

### mode

• `Readonly` **mode**: [`IInnerEditorMode`](../modules.md#iinnereditormode)

#### Inherited from

[IInnerEditor](IInnerEditor.md).[mode](IInnerEditor.md#mode)

#### Defined in

[src/in/packages/interface/src/editor/IEditor.ts:38](https://github.com/leaferjs/leafer-in/blob/d97f6888a45310d40717e43f47796d4f7d0dce1d/packages/interface/src/editor/IEditor.ts#L38)

___

### editTarget

• **editTarget**: [`IUI`](IUI.md)

#### Inherited from

[IInnerEditor](IInnerEditor.md).[editTarget](IInnerEditor.md#edittarget)

#### Defined in

[src/in/packages/interface/src/editor/IEditor.ts:39](https://github.com/leaferjs/leafer-in/blob/d97f6888a45310d40717e43f47796d4f7d0dce1d/packages/interface/src/editor/IEditor.ts#L39)

___

### config

• **config**: [`IObject`](IObject.md)

#### Inherited from

[IInnerEditor](IInnerEditor.md).[config](IInnerEditor.md#config)

#### Defined in

[src/in/packages/interface/src/editor/IEditor.ts:40](https://github.com/leaferjs/leafer-in/blob/d97f6888a45310d40717e43f47796d4f7d0dce1d/packages/interface/src/editor/IEditor.ts#L40)

___

### editConfig

• `Optional` **editConfig**: [`IEditorConfig`](IEditorConfig.md)

#### Inherited from

[IInnerEditor](IInnerEditor.md).[editConfig](IInnerEditor.md#editconfig)

#### Defined in

[src/in/packages/interface/src/editor/IEditor.ts:41](https://github.com/leaferjs/leafer-in/blob/d97f6888a45310d40717e43f47796d4f7d0dce1d/packages/interface/src/editor/IEditor.ts#L41)

___

### editor

• **editor**: [`IEditor`](IEditor.md)

#### Inherited from

[IInnerEditor](IInnerEditor.md).[editor](IInnerEditor.md#editor)

#### Defined in

[src/in/packages/interface/src/editor/IEditor.ts:43](https://github.com/leaferjs/leafer-in/blob/d97f6888a45310d40717e43f47796d4f7d0dce1d/packages/interface/src/editor/IEditor.ts#L43)

___

### editBox

• **editBox**: [`IEditBox`](IEditBox.md)

#### Inherited from

[IInnerEditor](IInnerEditor.md).[editBox](IInnerEditor.md#editbox)

#### Defined in

[src/in/packages/interface/src/editor/IEditor.ts:44](https://github.com/leaferjs/leafer-in/blob/d97f6888a45310d40717e43f47796d4f7d0dce1d/packages/interface/src/editor/IEditor.ts#L44)

___

### view

• **view**: [`IGroup`](IGroup.md)

#### Inherited from

[IInnerEditor](IInnerEditor.md).[view](IInnerEditor.md#view)

#### Defined in

[src/in/packages/interface/src/editor/IEditor.ts:45](https://github.com/leaferjs/leafer-in/blob/d97f6888a45310d40717e43f47796d4f7d0dce1d/packages/interface/src/editor/IEditor.ts#L45)

___

### eventIds

• **eventIds**: [`IEventListenerId`](IEventListenerId.md)[]

#### Inherited from

[IInnerEditor](IInnerEditor.md).[eventIds](IInnerEditor.md#eventids)

#### Defined in

[src/in/packages/interface/src/editor/IEditor.ts:47](https://github.com/leaferjs/leafer-in/blob/d97f6888a45310d40717e43f47796d4f7d0dce1d/packages/interface/src/editor/IEditor.ts#L47)

## Methods

### onMove

▸ **onMove**(`e`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `e` | [`IEditorMoveEvent`](IEditorMoveEvent.md) |

#### Returns

`void`

#### Defined in

[src/in/packages/interface/src/editor/IEditor.ts:29](https://github.com/leaferjs/leafer-in/blob/d97f6888a45310d40717e43f47796d4f7d0dce1d/packages/interface/src/editor/IEditor.ts#L29)

___

### onScale

▸ **onScale**(`e`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `e` | [`IEditorScaleEvent`](IEditorScaleEvent.md) |

#### Returns

`void`

#### Defined in

[src/in/packages/interface/src/editor/IEditor.ts:30](https://github.com/leaferjs/leafer-in/blob/d97f6888a45310d40717e43f47796d4f7d0dce1d/packages/interface/src/editor/IEditor.ts#L30)

___

### onScaleWithDrag

▸ **onScaleWithDrag**(`e`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `e` | [`IEditorScaleEvent`](IEditorScaleEvent.md) |

#### Returns

`void`

#### Defined in

[src/in/packages/interface/src/editor/IEditor.ts:31](https://github.com/leaferjs/leafer-in/blob/d97f6888a45310d40717e43f47796d4f7d0dce1d/packages/interface/src/editor/IEditor.ts#L31)

___

### onRotate

▸ **onRotate**(`e`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `e` | [`IEditorRotateEvent`](IEditorRotateEvent.md) |

#### Returns

`void`

#### Defined in

[src/in/packages/interface/src/editor/IEditor.ts:32](https://github.com/leaferjs/leafer-in/blob/d97f6888a45310d40717e43f47796d4f7d0dce1d/packages/interface/src/editor/IEditor.ts#L32)

___

### onSkew

▸ **onSkew**(`e`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `e` | [`IEditorSkewEvent`](IEditorSkewEvent.md) |

#### Returns

`void`

#### Defined in

[src/in/packages/interface/src/editor/IEditor.ts:33](https://github.com/leaferjs/leafer-in/blob/d97f6888a45310d40717e43f47796d4f7d0dce1d/packages/interface/src/editor/IEditor.ts#L33)

___

### onCreate

▸ **onCreate**(): `void`

#### Returns

`void`

#### Inherited from

[IInnerEditor](IInnerEditor.md).[onCreate](IInnerEditor.md#oncreate)

#### Defined in

[src/in/packages/interface/src/editor/IEditor.ts:49](https://github.com/leaferjs/leafer-in/blob/d97f6888a45310d40717e43f47796d4f7d0dce1d/packages/interface/src/editor/IEditor.ts#L49)

___

### create

▸ **create**(): `void`

#### Returns

`void`

#### Inherited from

[IInnerEditor](IInnerEditor.md).[create](IInnerEditor.md#create)

#### Defined in

[src/in/packages/interface/src/editor/IEditor.ts:50](https://github.com/leaferjs/leafer-in/blob/d97f6888a45310d40717e43f47796d4f7d0dce1d/packages/interface/src/editor/IEditor.ts#L50)

___

### onLoad

▸ **onLoad**(): `void`

#### Returns

`void`

#### Inherited from

[IInnerEditor](IInnerEditor.md).[onLoad](IInnerEditor.md#onload)

#### Defined in

[src/in/packages/interface/src/editor/IEditor.ts:53](https://github.com/leaferjs/leafer-in/blob/d97f6888a45310d40717e43f47796d4f7d0dce1d/packages/interface/src/editor/IEditor.ts#L53)

▸ **onLoad**(): `void`

#### Returns

`void`

#### Inherited from

[IInnerEditor](IInnerEditor.md).[onLoad](IInnerEditor.md#onload)

#### Defined in

[src/in/packages/interface/src/editor/IEditor.ts:56](https://github.com/leaferjs/leafer-in/blob/d97f6888a45310d40717e43f47796d4f7d0dce1d/packages/interface/src/editor/IEditor.ts#L56)

___

### load

▸ **load**(): `void`

#### Returns

`void`

#### Inherited from

[IInnerEditor](IInnerEditor.md).[load](IInnerEditor.md#load)

#### Defined in

[src/in/packages/interface/src/editor/IEditor.ts:54](https://github.com/leaferjs/leafer-in/blob/d97f6888a45310d40717e43f47796d4f7d0dce1d/packages/interface/src/editor/IEditor.ts#L54)

___

### unload

▸ **unload**(): `void`

#### Returns

`void`

#### Inherited from

[IInnerEditor](IInnerEditor.md).[unload](IInnerEditor.md#unload)

#### Defined in

[src/in/packages/interface/src/editor/IEditor.ts:57](https://github.com/leaferjs/leafer-in/blob/d97f6888a45310d40717e43f47796d4f7d0dce1d/packages/interface/src/editor/IEditor.ts#L57)

___

### onUpdate

▸ **onUpdate**(): `void`

#### Returns

`void`

#### Inherited from

[IInnerEditor](IInnerEditor.md).[onUpdate](IInnerEditor.md#onupdate)

#### Defined in

[src/in/packages/interface/src/editor/IEditor.ts:59](https://github.com/leaferjs/leafer-in/blob/d97f6888a45310d40717e43f47796d4f7d0dce1d/packages/interface/src/editor/IEditor.ts#L59)

___

### update

▸ **update**(): `void`

#### Returns

`void`

#### Inherited from

[IInnerEditor](IInnerEditor.md).[update](IInnerEditor.md#update)

#### Defined in

[src/in/packages/interface/src/editor/IEditor.ts:60](https://github.com/leaferjs/leafer-in/blob/d97f6888a45310d40717e43f47796d4f7d0dce1d/packages/interface/src/editor/IEditor.ts#L60)

___

### onDestroy

▸ **onDestroy**(): `void`

#### Returns

`void`

#### Inherited from

[IInnerEditor](IInnerEditor.md).[onDestroy](IInnerEditor.md#ondestroy)

#### Defined in

[src/in/packages/interface/src/editor/IEditor.ts:62](https://github.com/leaferjs/leafer-in/blob/d97f6888a45310d40717e43f47796d4f7d0dce1d/packages/interface/src/editor/IEditor.ts#L62)

___

### destroy

▸ **destroy**(): `void`

#### Returns

`void`

#### Inherited from

[IInnerEditor](IInnerEditor.md).[destroy](IInnerEditor.md#destroy)

#### Defined in

[src/in/packages/interface/src/editor/IEditor.ts:63](https://github.com/leaferjs/leafer-in/blob/d97f6888a45310d40717e43f47796d4f7d0dce1d/packages/interface/src/editor/IEditor.ts#L63)
