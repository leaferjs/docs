# Class: InnerEditor

## Hierarchy

- **`InnerEditor`**

  ↳ [`EditTool`](EditTool.md)

  ↳ [`TextEditor`](TextEditor.md)

## Implements

- [`IInnerEditor`](../interfaces/IInnerEditor.md)

## Table of contents

### Constructors

- [constructor](InnerEditor.md#constructor)

### Properties

- [editTarget](InnerEditor.md#edittarget)
- [config](InnerEditor.md#config)
- [editConfig](InnerEditor.md#editconfig)
- [editor](InnerEditor.md#editor)
- [\_editBox](InnerEditor.md#_editbox)
- [view](InnerEditor.md#view)
- [eventIds](InnerEditor.md#eventids)

### Accessors

- [tag](InnerEditor.md#tag)
- [mode](InnerEditor.md#mode)
- [editBox](InnerEditor.md#editbox)

### Methods

- [registerInnerEditor](InnerEditor.md#registerinnereditor)
- [onCreate](InnerEditor.md#oncreate)
- [create](InnerEditor.md#create)
- [onLoad](InnerEditor.md#onload)
- [load](InnerEditor.md#load)
- [onUpdate](InnerEditor.md#onupdate)
- [update](InnerEditor.md#update)
- [onUnload](InnerEditor.md#onunload)
- [unload](InnerEditor.md#unload)
- [onDestroy](InnerEditor.md#ondestroy)
- [destroy](InnerEditor.md#destroy)

## Constructors

### constructor

• **new InnerEditor**(`editor`): [`InnerEditor`](InnerEditor.md)

#### Parameters

| Name     | Type                                  |
| :------- | :------------------------------------ |
| `editor` | [`IEditor`](../interfaces/IEditor.md) |

#### Returns

[`InnerEditor`](InnerEditor.md)

#### Defined in

[src/in/packages/editor/src/tool/InnerEditor.ts:35](https://github.com/leaferjs/leafer-in/blob/d97f6888a45310d40717e43f47796d4f7d0dce1d/packages/editor/src/tool/InnerEditor.ts#L35)

## Properties

### editTarget

• **editTarget**: [`IUI`](../interfaces/IUI.md)

#### Implementation of

[IInnerEditor](../interfaces/IInnerEditor.md).[editTarget](../interfaces/IInnerEditor.md#edittarget)

#### Defined in

[src/in/packages/editor/src/tool/InnerEditor.ts:18](https://github.com/leaferjs/leafer-in/blob/d97f6888a45310d40717e43f47796d4f7d0dce1d/packages/editor/src/tool/InnerEditor.ts#L18)

___

### config

• **config**: [`IObject`](../interfaces/IObject.md)

#### Implementation of

[IInnerEditor](../interfaces/IInnerEditor.md).[config](../interfaces/IInnerEditor.md#config)

#### Defined in

[src/in/packages/editor/src/tool/InnerEditor.ts:20](https://github.com/leaferjs/leafer-in/blob/d97f6888a45310d40717e43f47796d4f7d0dce1d/packages/editor/src/tool/InnerEditor.ts#L20)

___

### editConfig

• `Optional` **editConfig**: [`IEditorConfig`](../interfaces/IEditorConfig.md)

#### Implementation of

[IInnerEditor](../interfaces/IInnerEditor.md).[editConfig](../interfaces/IInnerEditor.md#editconfig)

#### Defined in

[src/in/packages/editor/src/tool/InnerEditor.ts:22](https://github.com/leaferjs/leafer-in/blob/d97f6888a45310d40717e43f47796d4f7d0dce1d/packages/editor/src/tool/InnerEditor.ts#L22)

___

### editor

• **editor**: [`IEditor`](../interfaces/IEditor.md)

#### Implementation of

[IInnerEditor](../interfaces/IInnerEditor.md).[editor](../interfaces/IInnerEditor.md#editor)

#### Defined in

[src/in/packages/editor/src/tool/InnerEditor.ts:24](https://github.com/leaferjs/leafer-in/blob/d97f6888a45310d40717e43f47796d4f7d0dce1d/packages/editor/src/tool/InnerEditor.ts#L24)

___

### \_editBox

• `Protected` **\_editBox**: [`IEditBox`](../interfaces/IEditBox.md)

#### Defined in

[src/in/packages/editor/src/tool/InnerEditor.ts:26](https://github.com/leaferjs/leafer-in/blob/d97f6888a45310d40717e43f47796d4f7d0dce1d/packages/editor/src/tool/InnerEditor.ts#L26)

___

### view

• **view**: [`IGroup`](../interfaces/IGroup.md)

#### Implementation of

[IInnerEditor](../interfaces/IInnerEditor.md).[view](../interfaces/IInnerEditor.md#view)

#### Defined in

[src/in/packages/editor/src/tool/InnerEditor.ts:30](https://github.com/leaferjs/leafer-in/blob/d97f6888a45310d40717e43f47796d4f7d0dce1d/packages/editor/src/tool/InnerEditor.ts#L30)

___

### eventIds

• **eventIds**: [`IEventListenerId`](../interfaces/IEventListenerId.md)[] = `[]`

#### Implementation of

[IInnerEditor](../interfaces/IInnerEditor.md).[eventIds](../interfaces/IInnerEditor.md#eventids)

#### Defined in

[src/in/packages/editor/src/tool/InnerEditor.ts:32](https://github.com/leaferjs/leafer-in/blob/d97f6888a45310d40717e43f47796d4f7d0dce1d/packages/editor/src/tool/InnerEditor.ts#L32)

## Accessors

### tag

• `get` **tag**(): `string`

#### Returns

`string`

#### Implementation of

[IInnerEditor](../interfaces/IInnerEditor.md).[tag](../interfaces/IInnerEditor.md#tag)

#### Defined in

[src/in/packages/editor/src/tool/InnerEditor.ts:14](https://github.com/leaferjs/leafer-in/blob/d97f6888a45310d40717e43f47796d4f7d0dce1d/packages/editor/src/tool/InnerEditor.ts#L14)

___

### mode

• `get` **mode**(): [`IInnerEditorMode`](../modules.md#iinnereditormode)

#### Returns

[`IInnerEditorMode`](../modules.md#iinnereditormode)

#### Implementation of

[IInnerEditor](../interfaces/IInnerEditor.md).[mode](../interfaces/IInnerEditor.md#mode)

#### Defined in

[src/in/packages/editor/src/tool/InnerEditor.ts:16](https://github.com/leaferjs/leafer-in/blob/d97f6888a45310d40717e43f47796d4f7d0dce1d/packages/editor/src/tool/InnerEditor.ts#L16)

___

### editBox

• `get` **editBox**(): [`IEditBox`](../interfaces/IEditBox.md)

#### Returns

[`IEditBox`](../interfaces/IEditBox.md)

#### Implementation of

[IInnerEditor](../interfaces/IInnerEditor.md).[editBox](../interfaces/IInnerEditor.md#editbox)

#### Defined in

[src/in/packages/editor/src/tool/InnerEditor.ts:27](https://github.com/leaferjs/leafer-in/blob/d97f6888a45310d40717e43f47796d4f7d0dce1d/packages/editor/src/tool/InnerEditor.ts#L27)

• `set` **editBox**(`value`): `void`

#### Parameters

| Name    | Type                                    |
| :------ | :-------------------------------------- |
| `value` | [`IEditBox`](../interfaces/IEditBox.md) |

#### Returns

`void`

#### Implementation of

[IInnerEditor](../interfaces/IInnerEditor.md).[editBox](../interfaces/IInnerEditor.md#editbox)

#### Defined in

[src/in/packages/editor/src/tool/InnerEditor.ts:28](https://github.com/leaferjs/leafer-in/blob/d97f6888a45310d40717e43f47796d4f7d0dce1d/packages/editor/src/tool/InnerEditor.ts#L28)

## Methods

### registerInnerEditor

▸ **registerInnerEditor**(): `void`

#### Returns

`void`

#### Defined in

[src/in/packages/editor/src/tool/InnerEditor.ts:9](https://github.com/leaferjs/leafer-in/blob/d97f6888a45310d40717e43f47796d4f7d0dce1d/packages/editor/src/tool/InnerEditor.ts#L9)

___

### onCreate

▸ **onCreate**(): `void`

#### Returns

`void`

#### Implementation of

[IInnerEditor](../interfaces/IInnerEditor.md).[onCreate](../interfaces/IInnerEditor.md#oncreate)

#### Defined in

[src/in/packages/editor/src/tool/InnerEditor.ts:41](https://github.com/leaferjs/leafer-in/blob/d97f6888a45310d40717e43f47796d4f7d0dce1d/packages/editor/src/tool/InnerEditor.ts#L41)

___

### create

▸ **create**(): `void`

#### Returns

`void`

#### Implementation of

[IInnerEditor](../interfaces/IInnerEditor.md).[create](../interfaces/IInnerEditor.md#create)

#### Defined in

[src/in/packages/editor/src/tool/InnerEditor.ts:42](https://github.com/leaferjs/leafer-in/blob/d97f6888a45310d40717e43f47796d4f7d0dce1d/packages/editor/src/tool/InnerEditor.ts#L42)

___

### onLoad

▸ **onLoad**(): `void`

#### Returns

`void`

#### Implementation of

[IInnerEditor](../interfaces/IInnerEditor.md).[onLoad](../interfaces/IInnerEditor.md#onload)

#### Defined in

[src/in/packages/editor/src/tool/InnerEditor.ts:50](https://github.com/leaferjs/leafer-in/blob/d97f6888a45310d40717e43f47796d4f7d0dce1d/packages/editor/src/tool/InnerEditor.ts#L50)

___

### load

▸ **load**(): `void`

#### Returns

`void`

#### Implementation of

[IInnerEditor](../interfaces/IInnerEditor.md).[load](../interfaces/IInnerEditor.md#load)

#### Defined in

[src/in/packages/editor/src/tool/InnerEditor.ts:51](https://github.com/leaferjs/leafer-in/blob/d97f6888a45310d40717e43f47796d4f7d0dce1d/packages/editor/src/tool/InnerEditor.ts#L51)

___

### onUpdate

▸ **onUpdate**(): `void`

#### Returns

`void`

#### Implementation of

[IInnerEditor](../interfaces/IInnerEditor.md).[onUpdate](../interfaces/IInnerEditor.md#onupdate)

#### Defined in

[src/in/packages/editor/src/tool/InnerEditor.ts:59](https://github.com/leaferjs/leafer-in/blob/d97f6888a45310d40717e43f47796d4f7d0dce1d/packages/editor/src/tool/InnerEditor.ts#L59)

___

### update

▸ **update**(): `void`

#### Returns

`void`

#### Implementation of

[IInnerEditor](../interfaces/IInnerEditor.md).[update](../interfaces/IInnerEditor.md#update)

#### Defined in

[src/in/packages/editor/src/tool/InnerEditor.ts:60](https://github.com/leaferjs/leafer-in/blob/d97f6888a45310d40717e43f47796d4f7d0dce1d/packages/editor/src/tool/InnerEditor.ts#L60)

___

### onUnload

▸ **onUnload**(): `void`

#### Returns

`void`

#### Defined in

[src/in/packages/editor/src/tool/InnerEditor.ts:62](https://github.com/leaferjs/leafer-in/blob/d97f6888a45310d40717e43f47796d4f7d0dce1d/packages/editor/src/tool/InnerEditor.ts#L62)

___

### unload

▸ **unload**(): `void`

#### Returns

`void`

#### Implementation of

[IInnerEditor](../interfaces/IInnerEditor.md).[unload](../interfaces/IInnerEditor.md#unload)

#### Defined in

[src/in/packages/editor/src/tool/InnerEditor.ts:63](https://github.com/leaferjs/leafer-in/blob/d97f6888a45310d40717e43f47796d4f7d0dce1d/packages/editor/src/tool/InnerEditor.ts#L63)

___

### onDestroy

▸ **onDestroy**(): `void`

#### Returns

`void`

#### Implementation of

[IInnerEditor](../interfaces/IInnerEditor.md).[onDestroy](../interfaces/IInnerEditor.md#ondestroy)

#### Defined in

[src/in/packages/editor/src/tool/InnerEditor.ts:71](https://github.com/leaferjs/leafer-in/blob/d97f6888a45310d40717e43f47796d4f7d0dce1d/packages/editor/src/tool/InnerEditor.ts#L71)

___

### destroy

▸ **destroy**(): `void`

#### Returns

`void`

#### Implementation of

[IInnerEditor](../interfaces/IInnerEditor.md).[destroy](../interfaces/IInnerEditor.md#destroy)

#### Defined in

[src/in/packages/editor/src/tool/InnerEditor.ts:72](https://github.com/leaferjs/leafer-in/blob/d97f6888a45310d40717e43f47796d4f7d0dce1d/packages/editor/src/tool/InnerEditor.ts#L72)
