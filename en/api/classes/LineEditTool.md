# Class: LineEditTool

## Hierarchy

- [`EditTool`](EditTool.md)

  ↳ **`LineEditTool`**

## Table of contents

### Constructors

- [constructor](LineEditTool.md#constructor)

### Properties

- [editTarget](LineEditTool.md#edittarget)
- [config](LineEditTool.md#config)
- [editConfig](LineEditTool.md#editconfig)
- [editor](LineEditTool.md#editor)
- [\_editBox](LineEditTool.md#_editbox)
- [view](LineEditTool.md#view)
- [eventIds](LineEditTool.md#eventids)
- [scaleOfEvent](LineEditTool.md#scaleofevent)

### Accessors

- [mode](LineEditTool.md#mode)
- [editBox](LineEditTool.md#editbox)
- [tag](LineEditTool.md#tag)

### Methods

- [registerEditTool](LineEditTool.md#registeredittool)
- [onMove](LineEditTool.md#onmove)
- [onScale](LineEditTool.md#onscale)
- [onRotate](LineEditTool.md#onrotate)
- [load](LineEditTool.md#load)
- [update](LineEditTool.md#update)
- [unload](LineEditTool.md#unload)
- [registerInnerEditor](LineEditTool.md#registerinnereditor)
- [onCreate](LineEditTool.md#oncreate)
- [create](LineEditTool.md#create)
- [onLoad](LineEditTool.md#onload)
- [onUnload](LineEditTool.md#onunload)
- [onDestroy](LineEditTool.md#ondestroy)
- [destroy](LineEditTool.md#destroy)
- [onScaleWithDrag](LineEditTool.md#onscalewithdrag)
- [getInnerMove](LineEditTool.md#getinnermove)
- [getFromToByPath](LineEditTool.md#getfromtobypath)
- [getFromToByPoints](LineEditTool.md#getfromtobypoints)
- [dragPoint](LineEditTool.md#dragpoint)
- [onSkew](LineEditTool.md#onskew)
- [onUpdate](LineEditTool.md#onupdate)

## Constructors

### constructor

• **new LineEditTool**(`editor`): [`LineEditTool`](LineEditTool.md)

#### Parameters

| Name     | Type                                  |
| :------- | :------------------------------------ |
| `editor` | [`IEditor`](../interfaces/IEditor.md) |

#### Returns

[`LineEditTool`](LineEditTool.md)

#### Inherited from

[EditTool](EditTool.md).[constructor](EditTool.md#constructor)

#### Defined in

[src/in/packages/editor/src/tool/InnerEditor.ts:35](https://github.com/leaferjs/leafer-in/blob/d97f6888a45310d40717e43f47796d4f7d0dce1d/packages/editor/src/tool/InnerEditor.ts#L35)

## Properties

### editTarget

• **editTarget**: [`IUI`](../interfaces/IUI.md)

#### Inherited from

[EditTool](EditTool.md).[editTarget](EditTool.md#edittarget)

#### Defined in

[src/in/packages/editor/src/tool/InnerEditor.ts:18](https://github.com/leaferjs/leafer-in/blob/d97f6888a45310d40717e43f47796d4f7d0dce1d/packages/editor/src/tool/InnerEditor.ts#L18)

___

### config

• **config**: [`IObject`](../interfaces/IObject.md)

#### Inherited from

[EditTool](EditTool.md).[config](EditTool.md#config)

#### Defined in

[src/in/packages/editor/src/tool/InnerEditor.ts:20](https://github.com/leaferjs/leafer-in/blob/d97f6888a45310d40717e43f47796d4f7d0dce1d/packages/editor/src/tool/InnerEditor.ts#L20)

___

### editConfig

• `Optional` **editConfig**: [`IEditorConfig`](../interfaces/IEditorConfig.md)

#### Inherited from

[EditTool](EditTool.md).[editConfig](EditTool.md#editconfig)

#### Defined in

[src/in/packages/editor/src/tool/InnerEditor.ts:22](https://github.com/leaferjs/leafer-in/blob/d97f6888a45310d40717e43f47796d4f7d0dce1d/packages/editor/src/tool/InnerEditor.ts#L22)

___

### editor

• **editor**: [`IEditor`](../interfaces/IEditor.md)

#### Inherited from

[EditTool](EditTool.md).[editor](EditTool.md#editor)

#### Defined in

[src/in/packages/editor/src/tool/InnerEditor.ts:24](https://github.com/leaferjs/leafer-in/blob/d97f6888a45310d40717e43f47796d4f7d0dce1d/packages/editor/src/tool/InnerEditor.ts#L24)

___

### \_editBox

• `Protected` **\_editBox**: [`IEditBox`](../interfaces/IEditBox.md)

#### Inherited from

[EditTool](EditTool.md).[_editBox](EditTool.md#_editbox)

#### Defined in

[src/in/packages/editor/src/tool/InnerEditor.ts:26](https://github.com/leaferjs/leafer-in/blob/d97f6888a45310d40717e43f47796d4f7d0dce1d/packages/editor/src/tool/InnerEditor.ts#L26)

___

### view

• **view**: [`IGroup`](../interfaces/IGroup.md)

#### Inherited from

[EditTool](EditTool.md).[view](EditTool.md#view)

#### Defined in

[src/in/packages/editor/src/tool/InnerEditor.ts:30](https://github.com/leaferjs/leafer-in/blob/d97f6888a45310d40717e43f47796d4f7d0dce1d/packages/editor/src/tool/InnerEditor.ts#L30)

___

### eventIds

• **eventIds**: [`IEventListenerId`](../interfaces/IEventListenerId.md)[] = `[]`

#### Inherited from

[EditTool](EditTool.md).[eventIds](EditTool.md#eventids)

#### Defined in

[src/in/packages/editor/src/tool/InnerEditor.ts:32](https://github.com/leaferjs/leafer-in/blob/d97f6888a45310d40717e43f47796d4f7d0dce1d/packages/editor/src/tool/InnerEditor.ts#L32)

___

### scaleOfEvent

• **scaleOfEvent**: `boolean` = `true`

#### Defined in

[src/in/packages/editor/src/tool/LineEditTool.ts:17](https://github.com/leaferjs/leafer-in/blob/d97f6888a45310d40717e43f47796d4f7d0dce1d/packages/editor/src/tool/LineEditTool.ts#L17)

## Accessors

### mode

• `get` **mode**(): [`IInnerEditorMode`](../modules.md#iinnereditormode)

#### Returns

[`IInnerEditorMode`](../modules.md#iinnereditormode)

#### Inherited from

EditTool.mode

#### Defined in

[src/in/packages/editor/src/tool/InnerEditor.ts:16](https://github.com/leaferjs/leafer-in/blob/d97f6888a45310d40717e43f47796d4f7d0dce1d/packages/editor/src/tool/InnerEditor.ts#L16)

___

### editBox

• `get` **editBox**(): [`IEditBox`](../interfaces/IEditBox.md)

#### Returns

[`IEditBox`](../interfaces/IEditBox.md)

#### Inherited from

EditTool.editBox

#### Defined in

[src/in/packages/editor/src/tool/InnerEditor.ts:27](https://github.com/leaferjs/leafer-in/blob/d97f6888a45310d40717e43f47796d4f7d0dce1d/packages/editor/src/tool/InnerEditor.ts#L27)

• `set` **editBox**(`value`): `void`

#### Parameters

| Name    | Type                                    |
| :------ | :-------------------------------------- |
| `value` | [`IEditBox`](../interfaces/IEditBox.md) |

#### Returns

`void`

#### Inherited from

EditTool.editBox

#### Defined in

[src/in/packages/editor/src/tool/InnerEditor.ts:28](https://github.com/leaferjs/leafer-in/blob/d97f6888a45310d40717e43f47796d4f7d0dce1d/packages/editor/src/tool/InnerEditor.ts#L28)

___

### tag

• `get` **tag**(): `string`

#### Returns

`string`

#### Overrides

EditTool.tag

#### Defined in

[src/in/packages/editor/src/tool/LineEditTool.ts:15](https://github.com/leaferjs/leafer-in/blob/d97f6888a45310d40717e43f47796d4f7d0dce1d/packages/editor/src/tool/LineEditTool.ts#L15)

## Methods

### registerEditTool

▸ **registerEditTool**(): `void`

#### Returns

`void`

#### Inherited from

[EditTool](EditTool.md).[registerEditTool](EditTool.md#registeredittool)

#### Defined in

[src/in/packages/editor/src/tool/EditTool.ts:10](https://github.com/leaferjs/leafer-in/blob/d97f6888a45310d40717e43f47796d4f7d0dce1d/packages/editor/src/tool/EditTool.ts#L10)

___

### onMove

▸ **onMove**(`e`): `void`

#### Parameters

| Name | Type                                                    |
| :--- | :------------------------------------------------------ |
| `e`  | [`IEditorMoveEvent`](../interfaces/IEditorMoveEvent.md) |

#### Returns

`void`

#### Inherited from

[EditTool](EditTool.md).[onMove](EditTool.md#onmove)

#### Defined in

[src/in/packages/editor/src/tool/EditTool.ts:20](https://github.com/leaferjs/leafer-in/blob/d97f6888a45310d40717e43f47796d4f7d0dce1d/packages/editor/src/tool/EditTool.ts#L20)

___

### onScale

▸ **onScale**(`e`): `void`

#### Parameters

| Name | Type                                                      |
| :--- | :-------------------------------------------------------- |
| `e`  | [`IEditorScaleEvent`](../interfaces/IEditorScaleEvent.md) |

#### Returns

`void`

#### Inherited from

[EditTool](EditTool.md).[onScale](EditTool.md#onscale)

#### Defined in

[src/in/packages/editor/src/tool/EditTool.ts:28](https://github.com/leaferjs/leafer-in/blob/d97f6888a45310d40717e43f47796d4f7d0dce1d/packages/editor/src/tool/EditTool.ts#L28)

___

### onRotate

▸ **onRotate**(`e`): `void`

#### Parameters

| Name | Type                                                        |
| :--- | :---------------------------------------------------------- |
| `e`  | [`IEditorRotateEvent`](../interfaces/IEditorRotateEvent.md) |

#### Returns

`void`

#### Inherited from

[EditTool](EditTool.md).[onRotate](EditTool.md#onrotate)

#### Defined in

[src/in/packages/editor/src/tool/EditTool.ts:40](https://github.com/leaferjs/leafer-in/blob/d97f6888a45310d40717e43f47796d4f7d0dce1d/packages/editor/src/tool/EditTool.ts#L40)

___

### load

▸ **load**(): `void`

#### Returns

`void`

#### Inherited from

[EditTool](EditTool.md).[load](EditTool.md#load)

#### Defined in

[src/in/packages/editor/src/tool/EditTool.ts:66](https://github.com/leaferjs/leafer-in/blob/d97f6888a45310d40717e43f47796d4f7d0dce1d/packages/editor/src/tool/EditTool.ts#L66)

___

### update

▸ **update**(): `void`

#### Returns

`void`

#### Inherited from

[EditTool](EditTool.md).[update](EditTool.md#update)

#### Defined in

[src/in/packages/editor/src/tool/EditTool.ts:71](https://github.com/leaferjs/leafer-in/blob/d97f6888a45310d40717e43f47796d4f7d0dce1d/packages/editor/src/tool/EditTool.ts#L71)

___

### unload

▸ **unload**(): `void`

#### Returns

`void`

#### Inherited from

[EditTool](EditTool.md).[unload](EditTool.md#unload)

#### Defined in

[src/in/packages/editor/src/tool/EditTool.ts:76](https://github.com/leaferjs/leafer-in/blob/d97f6888a45310d40717e43f47796d4f7d0dce1d/packages/editor/src/tool/EditTool.ts#L76)

___

### registerInnerEditor

▸ **registerInnerEditor**(): `void`

#### Returns

`void`

#### Inherited from

[EditTool](EditTool.md).[registerInnerEditor](EditTool.md#registerinnereditor)

#### Defined in

[src/in/packages/editor/src/tool/InnerEditor.ts:9](https://github.com/leaferjs/leafer-in/blob/d97f6888a45310d40717e43f47796d4f7d0dce1d/packages/editor/src/tool/InnerEditor.ts#L9)

___

### onCreate

▸ **onCreate**(): `void`

#### Returns

`void`

#### Inherited from

[EditTool](EditTool.md).[onCreate](EditTool.md#oncreate)

#### Defined in

[src/in/packages/editor/src/tool/InnerEditor.ts:41](https://github.com/leaferjs/leafer-in/blob/d97f6888a45310d40717e43f47796d4f7d0dce1d/packages/editor/src/tool/InnerEditor.ts#L41)

___

### create

▸ **create**(): `void`

#### Returns

`void`

#### Inherited from

[EditTool](EditTool.md).[create](EditTool.md#create)

#### Defined in

[src/in/packages/editor/src/tool/InnerEditor.ts:42](https://github.com/leaferjs/leafer-in/blob/d97f6888a45310d40717e43f47796d4f7d0dce1d/packages/editor/src/tool/InnerEditor.ts#L42)

___

### onLoad

▸ **onLoad**(): `void`

#### Returns

`void`

#### Inherited from

[EditTool](EditTool.md).[onLoad](EditTool.md#onload)

#### Defined in

[src/in/packages/editor/src/tool/InnerEditor.ts:50](https://github.com/leaferjs/leafer-in/blob/d97f6888a45310d40717e43f47796d4f7d0dce1d/packages/editor/src/tool/InnerEditor.ts#L50)

___

### onUnload

▸ **onUnload**(): `void`

#### Returns

`void`

#### Inherited from

[EditTool](EditTool.md).[onUnload](EditTool.md#onunload)

#### Defined in

[src/in/packages/editor/src/tool/InnerEditor.ts:62](https://github.com/leaferjs/leafer-in/blob/d97f6888a45310d40717e43f47796d4f7d0dce1d/packages/editor/src/tool/InnerEditor.ts#L62)

___

### onDestroy

▸ **onDestroy**(): `void`

#### Returns

`void`

#### Inherited from

[EditTool](EditTool.md).[onDestroy](EditTool.md#ondestroy)

#### Defined in

[src/in/packages/editor/src/tool/InnerEditor.ts:71](https://github.com/leaferjs/leafer-in/blob/d97f6888a45310d40717e43f47796d4f7d0dce1d/packages/editor/src/tool/InnerEditor.ts#L71)

___

### destroy

▸ **destroy**(): `void`

#### Returns

`void`

#### Inherited from

[EditTool](EditTool.md).[destroy](EditTool.md#destroy)

#### Defined in

[src/in/packages/editor/src/tool/InnerEditor.ts:72](https://github.com/leaferjs/leafer-in/blob/d97f6888a45310d40717e43f47796d4f7d0dce1d/packages/editor/src/tool/InnerEditor.ts#L72)

___

### onScaleWithDrag

▸ **onScaleWithDrag**(`e`): `void`

#### Parameters

| Name | Type                                                      |
| :--- | :-------------------------------------------------------- |
| `e`  | [`IEditorScaleEvent`](../interfaces/IEditorScaleEvent.md) |

#### Returns

`void`

#### Defined in

[src/in/packages/editor/src/tool/LineEditTool.ts:19](https://github.com/leaferjs/leafer-in/blob/d97f6888a45310d40717e43f47796d4f7d0dce1d/packages/editor/src/tool/LineEditTool.ts#L19)

___

### getInnerMove

▸ **getInnerMove**(`ui`, `event`, `lockRatio`): [`IPointData`](../interfaces/IPointData.md)

#### Parameters

| Name        | Type                                        |
| :---------- | :------------------------------------------ |
| `ui`        | [`IUI`](../interfaces/IUI.md)               |
| `event`     | [`IDragEvent`](../interfaces/IDragEvent.md) |
| `lockRatio` | `boolean` \\| `"corner"`                   |

#### Returns

[`IPointData`](../interfaces/IPointData.md)

#### Defined in

[src/in/packages/editor/src/tool/LineEditTool.ts:66](https://github.com/leaferjs/leafer-in/blob/d97f6888a45310d40717e43f47796d4f7d0dce1d/packages/editor/src/tool/LineEditTool.ts#L66)

___

### getFromToByPath

▸ **getFromToByPath**(`path`): [`IFromToData`](../interfaces/IFromToData.md)

#### Parameters

| Name   | Type                                                 |
| :----- | :--------------------------------------------------- |
| `path` | [`IPathCommandData`](../modules.md#ipathcommanddata) |

#### Returns

[`IFromToData`](../interfaces/IFromToData.md)

#### Defined in

[src/in/packages/editor/src/tool/LineEditTool.ts:72](https://github.com/leaferjs/leafer-in/blob/d97f6888a45310d40717e43f47796d4f7d0dce1d/packages/editor/src/tool/LineEditTool.ts#L72)

___

### getFromToByPoints

▸ **getFromToByPoints**(`originPoints`): [`IFromToData`](../interfaces/IFromToData.md)

#### Parameters

| Name           | Type                                                                                                                                                                  |
| :------------- | :-------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `originPoints` | `number`[] \\| [`IPointData`](../interfaces/IPointData.md)[] |

#### Returns

[`IFromToData`](../interfaces/IFromToData.md)

#### Defined in

[src/in/packages/editor/src/tool/LineEditTool.ts:79](https://github.com/leaferjs/leafer-in/blob/d97f6888a45310d40717e43f47796d4f7d0dce1d/packages/editor/src/tool/LineEditTool.ts#L79)

___

### dragPoint

▸ **dragPoint**(`fromPoint`, `toPoint`, `isDragFrom`, `around`, `movePoint`): `void`

#### Parameters

| Name         | Type                                        |
| :----------- | :------------------------------------------ |
| `fromPoint`  | [`IPointData`](../interfaces/IPointData.md) |
| `toPoint`    | [`IPointData`](../interfaces/IPointData.md) |
| `isDragFrom` | `boolean`                                   |
| `around`     | [`IAround`](../modules.md#iaround)          |
| `movePoint`  | [`IPointData`](../interfaces/IPointData.md) |

#### Returns

`void`

#### Defined in

[src/in/packages/editor/src/tool/LineEditTool.ts:88](https://github.com/leaferjs/leafer-in/blob/d97f6888a45310d40717e43f47796d4f7d0dce1d/packages/editor/src/tool/LineEditTool.ts#L88)

___

### onSkew

▸ **onSkew**(`_e`): `void`

#### Parameters

| Name | Type                                                    |
| :--- | :------------------------------------------------------ |
| `_e` | [`IEditorSkewEvent`](../interfaces/IEditorSkewEvent.md) |

#### Returns

`void`

#### Overrides

[EditTool](EditTool.md).[onSkew](EditTool.md#onskew)

#### Defined in

[src/in/packages/editor/src/tool/LineEditTool.ts:99](https://github.com/leaferjs/leafer-in/blob/d97f6888a45310d40717e43f47796d4f7d0dce1d/packages/editor/src/tool/LineEditTool.ts#L99)

___

### onUpdate

▸ **onUpdate**(): `void`

#### Returns

`void`

#### Overrides

[EditTool](EditTool.md).[onUpdate](EditTool.md#onupdate)

#### Defined in

[src/in/packages/editor/src/tool/LineEditTool.ts:103](https://github.com/leaferjs/leafer-in/blob/d97f6888a45310d40717e43f47796d4f7d0dce1d/packages/editor/src/tool/LineEditTool.ts#L103)
