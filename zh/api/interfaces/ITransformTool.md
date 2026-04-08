# Interface: ITransformTool

## Hierarchy

- **`ITransformTool`**

  ↳ [`IEditorBase`](IEditorBase.md)

## Implemented by

- [`TransformTool`](../classes/TransformTool.md)

## Table of contents

### Properties

- [editBox](ITransformTool.md#editbox)
- [editTool](ITransformTool.md#edittool)

### Methods

- [onMove](ITransformTool.md#onmove)
- [onScale](ITransformTool.md#onscale)
- [onRotate](ITransformTool.md#onrotate)
- [onSkew](ITransformTool.md#onskew)
- [move](ITransformTool.md#move)
- [scaleOf](ITransformTool.md#scaleof)
- [rotateOf](ITransformTool.md#rotateof)
- [skewOf](ITransformTool.md#skewof)

## Properties

### editBox

• **editBox**: [`IEditBoxBase`](IEditBoxBase.md)

#### Defined in

[src/ui/packages/interface/src/editor/IEditor.ts:85](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/interface/src/editor/IEditor.ts#L85)

___

### editTool

• `Optional` **editTool**: [`IObject`](IObject.md)

#### Defined in

[src/ui/packages/interface/src/editor/IEditor.ts:86](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/interface/src/editor/IEditor.ts#L86)

## Methods

### onMove

▸ **onMove**(`e`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `e` | [`IDragEvent`](IDragEvent.md) \| [`IMoveEvent`](IMoveEvent.md) |

#### Returns

`void`

#### Defined in

[src/ui/packages/interface/src/editor/IEditor.ts:88](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/interface/src/editor/IEditor.ts#L88)

___

### onScale

▸ **onScale**(`e`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `e` | [`IDragEvent`](IDragEvent.md) \| [`IZoomEvent`](IZoomEvent.md) |

#### Returns

`void`

#### Defined in

[src/ui/packages/interface/src/editor/IEditor.ts:89](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/interface/src/editor/IEditor.ts#L89)

___

### onRotate

▸ **onRotate**(`e`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `e` | [`IDragEvent`](IDragEvent.md) \| [`IRotateEvent`](IRotateEvent.md) |

#### Returns

`void`

#### Defined in

[src/ui/packages/interface/src/editor/IEditor.ts:90](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/interface/src/editor/IEditor.ts#L90)

___

### onSkew

▸ **onSkew**(`e`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `e` | [`IDragEvent`](IDragEvent.md) |

#### Returns

`void`

#### Defined in

[src/ui/packages/interface/src/editor/IEditor.ts:91](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/interface/src/editor/IEditor.ts#L91)

___

### move

▸ **move**(`x`, `y?`, `transition?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `x` | `number` \| [`IPointData`](IPointData.md) |
| `y?` | `number` |
| `transition?` | [`ITransition`](../modules.md#itransition) |

#### Returns

`void`

#### Defined in

[src/ui/packages/interface/src/editor/IEditor.ts:93](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/interface/src/editor/IEditor.ts#L93)

___

### scaleOf

▸ **scaleOf**(`origin`, `scaleX`, `scaleY?`, `resize?`, `transition?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `origin` | [`IPointData`](IPointData.md) \| [`IDirection`](../modules.md#idirection) |
| `scaleX` | `number` |
| `scaleY?` | [`ITransition`](../modules.md#itransition) |
| `resize?` | `boolean` |
| `transition?` | [`ITransition`](../modules.md#itransition) |

#### Returns

`void`

#### Defined in

[src/ui/packages/interface/src/editor/IEditor.ts:94](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/interface/src/editor/IEditor.ts#L94)

___

### rotateOf

▸ **rotateOf**(`origin`, `rotation`, `transition?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `origin` | [`IPointData`](IPointData.md) \| [`IDirection`](../modules.md#idirection) |
| `rotation` | `number` |
| `transition?` | [`ITransition`](../modules.md#itransition) |

#### Returns

`void`

#### Defined in

[src/ui/packages/interface/src/editor/IEditor.ts:95](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/interface/src/editor/IEditor.ts#L95)

___

### skewOf

▸ **skewOf**(`origin`, `skewX`, `skewY?`, `resize?`, `transition?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `origin` | [`IPointData`](IPointData.md) \| [`IDirection`](../modules.md#idirection) |
| `skewX` | `number` |
| `skewY?` | `number` |
| `resize?` | `boolean` |
| `transition?` | [`ITransition`](../modules.md#itransition) |

#### Returns

`void`

#### Defined in

[src/ui/packages/interface/src/editor/IEditor.ts:96](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/interface/src/editor/IEditor.ts#L96)
