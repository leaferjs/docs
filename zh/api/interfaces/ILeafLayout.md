# Interface: ILeafLayout

## Implemented by

- [`LeafLayout`](../classes/LeafLayout.md)

## Table of contents

### Properties

- [leaf](ILeafLayout.md#leaf)
- [proxyZoom](ILeafLayout.md#proxyzoom)
- [contentBounds](ILeafLayout.md#contentbounds)
- [boxBounds](ILeafLayout.md#boxbounds)
- [strokeBounds](ILeafLayout.md#strokebounds)
- [renderBounds](ILeafLayout.md#renderbounds)
- [localContentBounds](ILeafLayout.md#localcontentbounds)
- [localStrokeBounds](ILeafLayout.md#localstrokebounds)
- [localRenderBounds](ILeafLayout.md#localrenderbounds)
- [localOuterBounds](ILeafLayout.md#localouterbounds)
- [worldContentBounds](ILeafLayout.md#worldcontentbounds)
- [worldBoxBounds](ILeafLayout.md#worldboxbounds)
- [worldStrokeBounds](ILeafLayout.md#worldstrokebounds)
- [childrenBoxBounds](ILeafLayout.md#childrenboxbounds)
- [childrenStrokeBounds](ILeafLayout.md#childrenstrokebounds)
- [childrenRenderBounds](ILeafLayout.md#childrenrenderbounds)
- [resized](ILeafLayout.md#resized)
- [waitAutoLayout](ILeafLayout.md#waitautolayout)
- [matrixChanged](ILeafLayout.md#matrixchanged)
- [scaleChanged](ILeafLayout.md#scalechanged)
- [rotationChanged](ILeafLayout.md#rotationchanged)
- [boundsChanged](ILeafLayout.md#boundschanged)
- [boxChanged](ILeafLayout.md#boxchanged)
- [strokeChanged](ILeafLayout.md#strokechanged)
- [renderChanged](ILeafLayout.md#renderchanged)
- [localBoxChanged](ILeafLayout.md#localboxchanged)
- [surfaceChanged](ILeafLayout.md#surfacechanged)
- [opacityChanged](ILeafLayout.md#opacitychanged)
- [hitCanvasChanged](ILeafLayout.md#hitcanvaschanged)
- [childrenSortChanged](ILeafLayout.md#childrensortchanged)
- [stateStyleChanged](ILeafLayout.md#statestylechanged)
- [linkerChanged](ILeafLayout.md#linkerchanged)
- [scrollConfigChanged](ILeafLayout.md#scrollconfigchanged)
- [editConfigChanged](ILeafLayout.md#editconfigchanged)
- [affectScaleOrRotation](ILeafLayout.md#affectscaleorrotation)
- [affectRotation](ILeafLayout.md#affectrotation)
- [affectChildrenSort](ILeafLayout.md#affectchildrensort)
- [strokeSpread](ILeafLayout.md#strokespread)
- [strokeBoxSpread](ILeafLayout.md#strokeboxspread)
- [renderSpread](ILeafLayout.md#renderspread)
- [renderShapeSpread](ILeafLayout.md#rendershapespread)
- [scaleFixed](ILeafLayout.md#scalefixed)
- [outerScale](ILeafLayout.md#outerscale)
- [a](ILeafLayout.md#a)
- [b](ILeafLayout.md#b)
- [c](ILeafLayout.md#c)
- [d](ILeafLayout.md#d)
- [e](ILeafLayout.md#e)
- [f](ILeafLayout.md#f)
- [x](ILeafLayout.md#x)
- [y](ILeafLayout.md#y)
- [width](ILeafLayout.md#width)
- [height](ILeafLayout.md#height)

### Methods

- [createLocal](ILeafLayout.md#createlocal)
- [update](ILeafLayout.md#update)
- [getTransform](ILeafLayout.md#gettransform)
- [getBounds](ILeafLayout.md#getbounds)
- [getLayoutBounds](ILeafLayout.md#getlayoutbounds)
- [getLayoutPoints](ILeafLayout.md#getlayoutpoints)
- [shrinkContent](ILeafLayout.md#shrinkcontent)
- [spreadStroke](ILeafLayout.md#spreadstroke)
- [spreadRender](ILeafLayout.md#spreadrender)
- [shrinkContentCancel](ILeafLayout.md#shrinkcontentcancel)
- [spreadStrokeCancel](ILeafLayout.md#spreadstrokecancel)
- [spreadRenderCancel](ILeafLayout.md#spreadrendercancel)
- [boxChange](ILeafLayout.md#boxchange)
- [localBoxChange](ILeafLayout.md#localboxchange)
- [strokeChange](ILeafLayout.md#strokechange)
- [renderChange](ILeafLayout.md#renderchange)
- [scaleChange](ILeafLayout.md#scalechange)
- [rotationChange](ILeafLayout.md#rotationchange)
- [matrixChange](ILeafLayout.md#matrixchange)
- [surfaceChange](ILeafLayout.md#surfacechange)
- [opacityChange](ILeafLayout.md#opacitychange)
- [childrenSortChange](ILeafLayout.md#childrensortchange)
- [destroy](ILeafLayout.md#destroy)

## Properties

### leaf

• **leaf**: [`ILeaf`](ILeaf.md)

#### Defined in

[src/leafer/packages/interface/src/layout/ILeafLayout.ts:10](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/layout/ILeafLayout.ts#L10)

___

### proxyZoom

• **proxyZoom**: `boolean`

#### Defined in

[src/leafer/packages/interface/src/layout/ILeafLayout.ts:12](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/layout/ILeafLayout.ts#L12)

___

### contentBounds

• **contentBounds**: [`IBoundsData`](IBoundsData.md)

#### Defined in

[src/leafer/packages/interface/src/layout/ILeafLayout.ts:16](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/layout/ILeafLayout.ts#L16)

___

### boxBounds

• **boxBounds**: [`IBoundsData`](IBoundsData.md)

#### Defined in

[src/leafer/packages/interface/src/layout/ILeafLayout.ts:17](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/layout/ILeafLayout.ts#L17)

___

### strokeBounds

• **strokeBounds**: [`IBoundsData`](IBoundsData.md)

#### Defined in

[src/leafer/packages/interface/src/layout/ILeafLayout.ts:18](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/layout/ILeafLayout.ts#L18)

___

### renderBounds

• **renderBounds**: [`IBoundsData`](IBoundsData.md)

#### Defined in

[src/leafer/packages/interface/src/layout/ILeafLayout.ts:19](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/layout/ILeafLayout.ts#L19)

___

### localContentBounds

• **localContentBounds**: [`IBoundsData`](IBoundsData.md)

#### Defined in

[src/leafer/packages/interface/src/layout/ILeafLayout.ts:23](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/layout/ILeafLayout.ts#L23)

___

### localStrokeBounds

• **localStrokeBounds**: [`IBoundsData`](IBoundsData.md)

#### Defined in

[src/leafer/packages/interface/src/layout/ILeafLayout.ts:25](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/layout/ILeafLayout.ts#L25)

___

### localRenderBounds

• **localRenderBounds**: [`IBoundsData`](IBoundsData.md)

#### Defined in

[src/leafer/packages/interface/src/layout/ILeafLayout.ts:26](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/layout/ILeafLayout.ts#L26)

___

### localOuterBounds

• `Optional` **localOuterBounds**: [`IBoundsData`](IBoundsData.md)

#### Defined in

[src/leafer/packages/interface/src/layout/ILeafLayout.ts:27](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/layout/ILeafLayout.ts#L27)

___

### worldContentBounds

• **worldContentBounds**: [`IBoundsData`](IBoundsData.md)

#### Defined in

[src/leafer/packages/interface/src/layout/ILeafLayout.ts:31](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/layout/ILeafLayout.ts#L31)

___

### worldBoxBounds

• **worldBoxBounds**: [`IBoundsData`](IBoundsData.md)

#### Defined in

[src/leafer/packages/interface/src/layout/ILeafLayout.ts:32](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/layout/ILeafLayout.ts#L32)

___

### worldStrokeBounds

• **worldStrokeBounds**: [`IBoundsData`](IBoundsData.md)

#### Defined in

[src/leafer/packages/interface/src/layout/ILeafLayout.ts:33](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/layout/ILeafLayout.ts#L33)

___

### childrenBoxBounds

• `Optional` **childrenBoxBounds**: [`IBoundsData`](IBoundsData.md)

#### Defined in

[src/leafer/packages/interface/src/layout/ILeafLayout.ts:38](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/layout/ILeafLayout.ts#L38)

___

### childrenStrokeBounds

• `Optional` **childrenStrokeBounds**: [`IBoundsData`](IBoundsData.md)

#### Defined in

[src/leafer/packages/interface/src/layout/ILeafLayout.ts:39](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/layout/ILeafLayout.ts#L39)

___

### childrenRenderBounds

• `Optional` **childrenRenderBounds**: [`IBoundsData`](IBoundsData.md)

#### Defined in

[src/leafer/packages/interface/src/layout/ILeafLayout.ts:40](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/layout/ILeafLayout.ts#L40)

___

### resized

• **resized**: ``"scale"`` \| ``"local"`` \| ``"inner"``

#### Defined in

[src/leafer/packages/interface/src/layout/ILeafLayout.ts:43](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/layout/ILeafLayout.ts#L43)

___

### waitAutoLayout

• **waitAutoLayout**: `boolean`

#### Defined in

[src/leafer/packages/interface/src/layout/ILeafLayout.ts:44](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/layout/ILeafLayout.ts#L44)

___

### matrixChanged

• **matrixChanged**: `boolean`

#### Defined in

[src/leafer/packages/interface/src/layout/ILeafLayout.ts:47](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/layout/ILeafLayout.ts#L47)

___

### scaleChanged

• **scaleChanged**: `boolean`

#### Defined in

[src/leafer/packages/interface/src/layout/ILeafLayout.ts:48](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/layout/ILeafLayout.ts#L48)

___

### rotationChanged

• **rotationChanged**: `boolean`

#### Defined in

[src/leafer/packages/interface/src/layout/ILeafLayout.ts:49](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/layout/ILeafLayout.ts#L49)

___

### boundsChanged

• **boundsChanged**: `boolean`

#### Defined in

[src/leafer/packages/interface/src/layout/ILeafLayout.ts:52](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/layout/ILeafLayout.ts#L52)

___

### boxChanged

• **boxChanged**: `boolean`

#### Defined in

[src/leafer/packages/interface/src/layout/ILeafLayout.ts:54](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/layout/ILeafLayout.ts#L54)

___

### strokeChanged

• **strokeChanged**: `boolean`

#### Defined in

[src/leafer/packages/interface/src/layout/ILeafLayout.ts:55](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/layout/ILeafLayout.ts#L55)

___

### renderChanged

• **renderChanged**: `boolean`

#### Defined in

[src/leafer/packages/interface/src/layout/ILeafLayout.ts:56](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/layout/ILeafLayout.ts#L56)

___

### localBoxChanged

• **localBoxChanged**: `boolean`

#### Defined in

[src/leafer/packages/interface/src/layout/ILeafLayout.ts:58](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/layout/ILeafLayout.ts#L58)

___

### surfaceChanged

• **surfaceChanged**: `boolean`

#### Defined in

[src/leafer/packages/interface/src/layout/ILeafLayout.ts:61](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/layout/ILeafLayout.ts#L61)

___

### opacityChanged

• **opacityChanged**: `boolean`

#### Defined in

[src/leafer/packages/interface/src/layout/ILeafLayout.ts:62](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/layout/ILeafLayout.ts#L62)

___

### hitCanvasChanged

• **hitCanvasChanged**: `boolean`

#### Defined in

[src/leafer/packages/interface/src/layout/ILeafLayout.ts:64](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/layout/ILeafLayout.ts#L64)

___

### childrenSortChanged

• `Optional` **childrenSortChanged**: `boolean`

#### Defined in

[src/leafer/packages/interface/src/layout/ILeafLayout.ts:66](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/layout/ILeafLayout.ts#L66)

___

### stateStyleChanged

• `Optional` **stateStyleChanged**: `boolean`

#### Defined in

[src/leafer/packages/interface/src/layout/ILeafLayout.ts:67](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/layout/ILeafLayout.ts#L67)

___

### linkerChanged

• `Optional` **linkerChanged**: `boolean`

#### Defined in

[src/leafer/packages/interface/src/layout/ILeafLayout.ts:68](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/layout/ILeafLayout.ts#L68)

___

### scrollConfigChanged

• `Optional` **scrollConfigChanged**: `boolean`

#### Defined in

[src/leafer/packages/interface/src/layout/ILeafLayout.ts:71](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/layout/ILeafLayout.ts#L71)

___

### editConfigChanged

• `Optional` **editConfigChanged**: `boolean`

#### Defined in

[src/leafer/packages/interface/src/layout/ILeafLayout.ts:72](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/layout/ILeafLayout.ts#L72)

___

### affectScaleOrRotation

• **affectScaleOrRotation**: `boolean`

#### Defined in

[src/leafer/packages/interface/src/layout/ILeafLayout.ts:75](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/layout/ILeafLayout.ts#L75)

___

### affectRotation

• **affectRotation**: `boolean`

#### Defined in

[src/leafer/packages/interface/src/layout/ILeafLayout.ts:76](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/layout/ILeafLayout.ts#L76)

___

### affectChildrenSort

• `Optional` **affectChildrenSort**: `boolean`

#### Defined in

[src/leafer/packages/interface/src/layout/ILeafLayout.ts:77](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/layout/ILeafLayout.ts#L77)

___

### strokeSpread

• **strokeSpread**: [`IFourNumber`](../modules.md#ifournumber)

#### Defined in

[src/leafer/packages/interface/src/layout/ILeafLayout.ts:79](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/layout/ILeafLayout.ts#L79)

___

### strokeBoxSpread

• **strokeBoxSpread**: `number`

#### Defined in

[src/leafer/packages/interface/src/layout/ILeafLayout.ts:80](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/layout/ILeafLayout.ts#L80)

___

### renderSpread

• **renderSpread**: [`IFourNumber`](../modules.md#ifournumber)

#### Defined in

[src/leafer/packages/interface/src/layout/ILeafLayout.ts:81](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/layout/ILeafLayout.ts#L81)

___

### renderShapeSpread

• **renderShapeSpread**: [`IFourNumber`](../modules.md#ifournumber)

#### Defined in

[src/leafer/packages/interface/src/layout/ILeafLayout.ts:82](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/layout/ILeafLayout.ts#L82)

___

### scaleFixed

• `Optional` **scaleFixed**: `number`

#### Defined in

[src/leafer/packages/interface/src/layout/ILeafLayout.ts:85](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/layout/ILeafLayout.ts#L85)

___

### outerScale

• `Optional` **outerScale**: `number`

#### Defined in

[src/leafer/packages/interface/src/layout/ILeafLayout.ts:86](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/layout/ILeafLayout.ts#L86)

___

### a

• **a**: `number`

#### Defined in

[src/leafer/packages/interface/src/layout/ILeafLayout.ts:89](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/layout/ILeafLayout.ts#L89)

___

### b

• **b**: `number`

#### Defined in

[src/leafer/packages/interface/src/layout/ILeafLayout.ts:90](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/layout/ILeafLayout.ts#L90)

___

### c

• **c**: `number`

#### Defined in

[src/leafer/packages/interface/src/layout/ILeafLayout.ts:91](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/layout/ILeafLayout.ts#L91)

___

### d

• **d**: `number`

#### Defined in

[src/leafer/packages/interface/src/layout/ILeafLayout.ts:92](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/layout/ILeafLayout.ts#L92)

___

### e

• **e**: `number`

#### Defined in

[src/leafer/packages/interface/src/layout/ILeafLayout.ts:93](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/layout/ILeafLayout.ts#L93)

___

### f

• **f**: `number`

#### Defined in

[src/leafer/packages/interface/src/layout/ILeafLayout.ts:94](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/layout/ILeafLayout.ts#L94)

___

### x

• **x**: `number`

#### Defined in

[src/leafer/packages/interface/src/layout/ILeafLayout.ts:95](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/layout/ILeafLayout.ts#L95)

___

### y

• **y**: `number`

#### Defined in

[src/leafer/packages/interface/src/layout/ILeafLayout.ts:96](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/layout/ILeafLayout.ts#L96)

___

### width

• **width**: `number`

#### Defined in

[src/leafer/packages/interface/src/layout/ILeafLayout.ts:97](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/layout/ILeafLayout.ts#L97)

___

### height

• **height**: `number`

#### Defined in

[src/leafer/packages/interface/src/layout/ILeafLayout.ts:98](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/layout/ILeafLayout.ts#L98)

## Methods

### createLocal

▸ **createLocal**(): `void`

#### Returns

`void`

#### Defined in

[src/leafer/packages/interface/src/layout/ILeafLayout.ts:100](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/layout/ILeafLayout.ts#L100)

___

### update

▸ **update**(): `void`

#### Returns

`void`

#### Defined in

[src/leafer/packages/interface/src/layout/ILeafLayout.ts:102](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/layout/ILeafLayout.ts#L102)

___

### getTransform

▸ **getTransform**(`relative?`): [`IMatrixData`](IMatrixData.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `relative?` | [`ILeaf`](ILeaf.md) \| [`ILocationType`](../modules.md#ilocationtype) |

#### Returns

[`IMatrixData`](IMatrixData.md)

#### Defined in

[src/leafer/packages/interface/src/layout/ILeafLayout.ts:104](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/layout/ILeafLayout.ts#L104)

___

### getBounds

▸ **getBounds**(`type?`, `relative?`): [`IBoundsData`](IBoundsData.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `type?` | [`IBoundsType`](../modules.md#iboundstype) |
| `relative?` | [`ILeaf`](ILeaf.md) \| [`ILocationType`](../modules.md#ilocationtype) |

#### Returns

[`IBoundsData`](IBoundsData.md)

#### Defined in

[src/leafer/packages/interface/src/layout/ILeafLayout.ts:105](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/layout/ILeafLayout.ts#L105)

___

### getLayoutBounds

▸ **getLayoutBounds**(`type?`, `relative?`, `unscale?`): [`ILayoutBoundsData`](ILayoutBoundsData.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `type?` | [`IBoundsType`](../modules.md#iboundstype) |
| `relative?` | [`ILeaf`](ILeaf.md) \| [`ILocationType`](../modules.md#ilocationtype) |
| `unscale?` | `boolean` |

#### Returns

[`ILayoutBoundsData`](ILayoutBoundsData.md)

#### Defined in

[src/leafer/packages/interface/src/layout/ILeafLayout.ts:106](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/layout/ILeafLayout.ts#L106)

___

### getLayoutPoints

▸ **getLayoutPoints**(`type?`, `relative?`): [`IPointData`](IPointData.md)[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `type?` | [`IBoundsType`](../modules.md#iboundstype) |
| `relative?` | [`ILeaf`](ILeaf.md) \| [`ILocationType`](../modules.md#ilocationtype) |

#### Returns

[`IPointData`](IPointData.md)[]

#### Defined in

[src/leafer/packages/interface/src/layout/ILeafLayout.ts:107](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/layout/ILeafLayout.ts#L107)

___

### shrinkContent

▸ **shrinkContent**(): `void`

#### Returns

`void`

#### Defined in

[src/leafer/packages/interface/src/layout/ILeafLayout.ts:110](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/layout/ILeafLayout.ts#L110)

___

### spreadStroke

▸ **spreadStroke**(): `void`

#### Returns

`void`

#### Defined in

[src/leafer/packages/interface/src/layout/ILeafLayout.ts:111](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/layout/ILeafLayout.ts#L111)

___

### spreadRender

▸ **spreadRender**(): `void`

#### Returns

`void`

#### Defined in

[src/leafer/packages/interface/src/layout/ILeafLayout.ts:112](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/layout/ILeafLayout.ts#L112)

___

### shrinkContentCancel

▸ **shrinkContentCancel**(): `void`

#### Returns

`void`

#### Defined in

[src/leafer/packages/interface/src/layout/ILeafLayout.ts:113](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/layout/ILeafLayout.ts#L113)

___

### spreadStrokeCancel

▸ **spreadStrokeCancel**(): `void`

#### Returns

`void`

#### Defined in

[src/leafer/packages/interface/src/layout/ILeafLayout.ts:114](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/layout/ILeafLayout.ts#L114)

___

### spreadRenderCancel

▸ **spreadRenderCancel**(): `void`

#### Returns

`void`

#### Defined in

[src/leafer/packages/interface/src/layout/ILeafLayout.ts:115](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/layout/ILeafLayout.ts#L115)

___

### boxChange

▸ **boxChange**(): `void`

#### Returns

`void`

#### Defined in

[src/leafer/packages/interface/src/layout/ILeafLayout.ts:118](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/layout/ILeafLayout.ts#L118)

___

### localBoxChange

▸ **localBoxChange**(): `void`

#### Returns

`void`

#### Defined in

[src/leafer/packages/interface/src/layout/ILeafLayout.ts:119](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/layout/ILeafLayout.ts#L119)

___

### strokeChange

▸ **strokeChange**(): `void`

#### Returns

`void`

#### Defined in

[src/leafer/packages/interface/src/layout/ILeafLayout.ts:120](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/layout/ILeafLayout.ts#L120)

___

### renderChange

▸ **renderChange**(): `void`

#### Returns

`void`

#### Defined in

[src/leafer/packages/interface/src/layout/ILeafLayout.ts:121](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/layout/ILeafLayout.ts#L121)

___

### scaleChange

▸ **scaleChange**(): `void`

#### Returns

`void`

#### Defined in

[src/leafer/packages/interface/src/layout/ILeafLayout.ts:124](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/layout/ILeafLayout.ts#L124)

___

### rotationChange

▸ **rotationChange**(): `void`

#### Returns

`void`

#### Defined in

[src/leafer/packages/interface/src/layout/ILeafLayout.ts:125](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/layout/ILeafLayout.ts#L125)

___

### matrixChange

▸ **matrixChange**(): `void`

#### Returns

`void`

#### Defined in

[src/leafer/packages/interface/src/layout/ILeafLayout.ts:126](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/layout/ILeafLayout.ts#L126)

___

### surfaceChange

▸ **surfaceChange**(): `void`

#### Returns

`void`

#### Defined in

[src/leafer/packages/interface/src/layout/ILeafLayout.ts:129](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/layout/ILeafLayout.ts#L129)

___

### opacityChange

▸ **opacityChange**(): `void`

#### Returns

`void`

#### Defined in

[src/leafer/packages/interface/src/layout/ILeafLayout.ts:130](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/layout/ILeafLayout.ts#L130)

___

### childrenSortChange

▸ **childrenSortChange**(): `void`

#### Returns

`void`

#### Defined in

[src/leafer/packages/interface/src/layout/ILeafLayout.ts:132](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/layout/ILeafLayout.ts#L132)

___

### destroy

▸ **destroy**(): `void`

#### Returns

`void`

#### Defined in

[src/leafer/packages/interface/src/layout/ILeafLayout.ts:134](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/layout/ILeafLayout.ts#L134)
