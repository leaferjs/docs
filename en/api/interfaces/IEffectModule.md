# Interface: IEffectModule

## Table of contents

### Methods

- [shadow](IEffectModule.md#shadow)
- [innerShadow](IEffectModule.md#innershadow)
- [blur](IEffectModule.md#blur)
- [backgroundBlur](IEffectModule.md#backgroundblur)
- [getShadowRenderSpread](IEffectModule.md#getshadowrenderspread)
- [getShadowTransform](IEffectModule.md#getshadowtransform)
- [isTransformShadow](IEffectModule.md#istransformshadow)
- [getInnerShadowSpread](IEffectModule.md#getinnershadowspread)

## Methods

### shadow

▸ **shadow**(`ui`, `current`, `shape`): `void`

#### Parameters

| Name      | Type                                |
| :-------- | :---------------------------------- |
| `ui`      | [`IUI`](IUI.md)                     |
| `current` | [`ILeaferCanvas`](ILeaferCanvas.md) |
| `shape`   | [`ICachedShape`](ICachedShape.md)   |

#### Returns

`void`

#### Defined in

[src/ui/packages/interface/src/module/IEffect.ts:9](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/interface/src/module/IEffect.ts#L9)

___

### innerShadow

▸ **innerShadow**(`ui`, `current`, `shape`): `void`

#### Parameters

| Name      | Type                                |
| :-------- | :---------------------------------- |
| `ui`      | [`IUI`](IUI.md)                     |
| `current` | [`ILeaferCanvas`](ILeaferCanvas.md) |
| `shape`   | [`ICachedShape`](ICachedShape.md)   |

#### Returns

`void`

#### Defined in

[src/ui/packages/interface/src/module/IEffect.ts:10](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/interface/src/module/IEffect.ts#L10)

___

### blur

▸ **blur**(`ui`, `current`, `origin`): `void`

#### Parameters

| Name      | Type                                |
| :-------- | :---------------------------------- |
| `ui`      | [`IUI`](IUI.md)                     |
| `current` | [`ILeaferCanvas`](ILeaferCanvas.md) |
| `origin`  | [`ILeaferCanvas`](ILeaferCanvas.md) |

#### Returns

`void`

#### Defined in

[src/ui/packages/interface/src/module/IEffect.ts:11](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/interface/src/module/IEffect.ts#L11)

___

### backgroundBlur

▸ **backgroundBlur**(`ui`, `current`, `shape`): `void`

#### Parameters

| Name      | Type                                |
| :-------- | :---------------------------------- |
| `ui`      | [`IUI`](IUI.md)                     |
| `current` | [`ILeaferCanvas`](ILeaferCanvas.md) |
| `shape`   | [`ICachedShape`](ICachedShape.md)   |

#### Returns

`void`

#### Defined in

[src/ui/packages/interface/src/module/IEffect.ts:12](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/interface/src/module/IEffect.ts#L12)

___

### getShadowRenderSpread

▸ **getShadowRenderSpread**(`ui`, `shadow`, `spreadSign?`): [`IFourNumber`](../modules.md#ifournumber)

#### Parameters

| Name          | Type                                                                                              |
| :------------ | :------------------------------------------------------------------------------------------------ |
| `ui`          | [`IUI`](IUI.md)                                                                                   |
| `shadow`      | [`ILeafShadowEffect`](ILeafShadowEffect.md)[] |
| `spreadSign?` | `-1` \\| `1`                                                                                     |

#### Returns

[`IFourNumber`](../modules.md#ifournumber)

#### Defined in

[src/ui/packages/interface/src/module/IEffect.ts:15](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/interface/src/module/IEffect.ts#L15)

___

### getShadowTransform

▸ **getShadowTransform**(`ui`, `canvas`, `shape`, `shadow`, `outBounds`, `otherScale`, `isInnerShaodw?`): [`IMatrixData`](IMatrixData.md)

#### Parameters

| Name             | Type                                        |
| :--------------- | :------------------------------------------ |
| `ui`             | [`IUI`](IUI.md)                             |
| `canvas`         | [`ILeaferCanvas`](ILeaferCanvas.md)         |
| `shape`          | [`ICachedShape`](ICachedShape.md)           |
| `shadow`         | [`ILeafShadowEffect`](ILeafShadowEffect.md) |
| `outBounds`      | [`IBoundsData`](IBoundsData.md)             |
| `otherScale`     | `number`                                    |
| `isInnerShaodw?` | `boolean`                                   |

#### Returns

[`IMatrixData`](IMatrixData.md)

#### Defined in

[src/ui/packages/interface/src/module/IEffect.ts:16](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/interface/src/module/IEffect.ts#L16)

___

### isTransformShadow

▸ **isTransformShadow**(`shadow`): `boolean`

#### Parameters

| Name     | Type                                        |
| :------- | :------------------------------------------ |
| `shadow` | [`ILeafShadowEffect`](ILeafShadowEffect.md) |

#### Returns

`boolean`

#### Defined in

[src/ui/packages/interface/src/module/IEffect.ts:17](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/interface/src/module/IEffect.ts#L17)

___

### getInnerShadowSpread

▸ **getInnerShadowSpread**(`ui`, `innerShadow`): [`IFourNumber`](../modules.md#ifournumber)

#### Parameters

| Name          | Type                                                                                              |
| :------------ | :------------------------------------------------------------------------------------------------ |
| `ui`          | [`IUI`](IUI.md)                                                                                   |
| `innerShadow` | [`ILeafShadowEffect`](ILeafShadowEffect.md)[] |

#### Returns

[`IFourNumber`](../modules.md#ifournumber)

#### Defined in

[src/ui/packages/interface/src/module/IEffect.ts:19](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/interface/src/module/IEffect.ts#L19)
