# Class: LeafLayout

## Implements

- [`ILeafLayout`](../interfaces/ILeafLayout.md)

## Table of contents

### Constructors

- [constructor](LeafLayout.md#constructor)

### Properties

- [leaf](LeafLayout.md#leaf)
- [proxyZoom](LeafLayout.md#proxyzoom)
- [boxBounds](LeafLayout.md#boxbounds)
- [\_contentBounds](LeafLayout.md#_contentbounds)
- [\_strokeBounds](LeafLayout.md#_strokebounds)
- [\_renderBounds](LeafLayout.md#_renderbounds)
- [\_localContentBounds](LeafLayout.md#_localcontentbounds)
- [\_localStrokeBounds](LeafLayout.md#_localstrokebounds)
- [\_localRenderBounds](LeafLayout.md#_localrenderbounds)
- [\_worldContentBounds](LeafLayout.md#_worldcontentbounds)
- [\_worldBoxBounds](LeafLayout.md#_worldboxbounds)
- [\_worldStrokeBounds](LeafLayout.md#_worldstrokebounds)
- [resized](LeafLayout.md#resized)
- [waitAutoLayout](LeafLayout.md#waitautolayout)
- [matrixChanged](LeafLayout.md#matrixchanged)
- [scaleChanged](LeafLayout.md#scalechanged)
- [rotationChanged](LeafLayout.md#rotationchanged)
- [boundsChanged](LeafLayout.md#boundschanged)
- [boxChanged](LeafLayout.md#boxchanged)
- [strokeChanged](LeafLayout.md#strokechanged)
- [renderChanged](LeafLayout.md#renderchanged)
- [localBoxChanged](LeafLayout.md#localboxchanged)
- [surfaceChanged](LeafLayout.md#surfacechanged)
- [opacityChanged](LeafLayout.md#opacitychanged)
- [hitCanvasChanged](LeafLayout.md#hitcanvaschanged)
- [childrenSortChanged](LeafLayout.md#childrensortchanged)
- [stateStyleChanged](LeafLayout.md#statestylechanged)
- [affectScaleOrRotation](LeafLayout.md#affectscaleorrotation)
- [affectRotation](LeafLayout.md#affectrotation)
- [affectChildrenSort](LeafLayout.md#affectchildrensort)
- [strokeSpread](LeafLayout.md#strokespread)
- [strokeBoxSpread](LeafLayout.md#strokeboxspread)
- [renderSpread](LeafLayout.md#renderspread)
- [renderShapeSpread](LeafLayout.md#rendershapespread)

### Accessors

- [contentBounds](LeafLayout.md#contentbounds)
- [strokeBounds](LeafLayout.md#strokebounds)
- [renderBounds](LeafLayout.md#renderbounds)
- [localContentBounds](LeafLayout.md#localcontentbounds)
- [localStrokeBounds](LeafLayout.md#localstrokebounds)
- [localRenderBounds](LeafLayout.md#localrenderbounds)
- [worldContentBounds](LeafLayout.md#worldcontentbounds)
- [worldBoxBounds](LeafLayout.md#worldboxbounds)
- [worldStrokeBounds](LeafLayout.md#worldstrokebounds)
- [a](LeafLayout.md#a)
- [b](LeafLayout.md#b)
- [c](LeafLayout.md#c)
- [d](LeafLayout.md#d)
- [e](LeafLayout.md#e)
- [f](LeafLayout.md#f)
- [x](LeafLayout.md#x)
- [y](LeafLayout.md#y)
- [width](LeafLayout.md#width)
- [height](LeafLayout.md#height)

### Methods

- [createLocal](LeafLayout.md#createlocal)
- [update](LeafLayout.md#update)
- [getTransform](LeafLayout.md#gettransform)
- [getBounds](LeafLayout.md#getbounds)
- [getInnerBounds](LeafLayout.md#getinnerbounds)
- [getLocalBounds](LeafLayout.md#getlocalbounds)
- [getWorldBounds](LeafLayout.md#getworldbounds)
- [getLayoutBounds](LeafLayout.md#getlayoutbounds)
- [getLayoutPoints](LeafLayout.md#getlayoutpoints)
- [shrinkContent](LeafLayout.md#shrinkcontent)
- [spreadStroke](LeafLayout.md#spreadstroke)
- [spreadRender](LeafLayout.md#spreadrender)
- [shrinkContentCancel](LeafLayout.md#shrinkcontentcancel)
- [spreadStrokeCancel](LeafLayout.md#spreadstrokecancel)
- [spreadRenderCancel](LeafLayout.md#spreadrendercancel)
- [boxChange](LeafLayout.md#boxchange)
- [localBoxChange](LeafLayout.md#localboxchange)
- [strokeChange](LeafLayout.md#strokechange)
- [renderChange](LeafLayout.md#renderchange)
- [scaleChange](LeafLayout.md#scalechange)
- [rotationChange](LeafLayout.md#rotationchange)
- [\_scaleOrRotationChange](LeafLayout.md#_scaleorrotationchange)
- [matrixChange](LeafLayout.md#matrixchange)
- [surfaceChange](LeafLayout.md#surfacechange)
- [opacityChange](LeafLayout.md#opacitychange)
- [childrenSortChange](LeafLayout.md#childrensortchange)
- [destroy](LeafLayout.md#destroy)

## Constructors

### constructor

• **new LeafLayout**(`leaf`): [`LeafLayout`](LeafLayout.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `leaf` | [`ILeaf`](../interfaces/ILeaf.md) |

#### Returns

[`LeafLayout`](LeafLayout.md)

#### Defined in

[src/leafer/packages/display-module/layout/src/LeafLayout.ts:105](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/display-module/layout/src/LeafLayout.ts#L105)

## Properties

### leaf

• **leaf**: [`ILeaf`](../interfaces/ILeaf.md)

#### Implementation of

[ILeafLayout](../interfaces/ILeafLayout.md).[leaf](../interfaces/ILeafLayout.md#leaf)

#### Defined in

[src/leafer/packages/display-module/layout/src/LeafLayout.ts:15](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/display-module/layout/src/LeafLayout.ts#L15)

___

### proxyZoom

• **proxyZoom**: `boolean`

#### Implementation of

[ILeafLayout](../interfaces/ILeafLayout.md).[proxyZoom](../interfaces/ILeafLayout.md#proxyzoom)

#### Defined in

[src/leafer/packages/display-module/layout/src/LeafLayout.ts:17](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/display-module/layout/src/LeafLayout.ts#L17)

___

### boxBounds

• **boxBounds**: [`IBoundsData`](../interfaces/IBoundsData.md)

#### Implementation of

[ILeafLayout](../interfaces/ILeafLayout.md).[boxBounds](../interfaces/ILeafLayout.md#boxbounds)

#### Defined in

[src/leafer/packages/display-module/layout/src/LeafLayout.ts:23](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/display-module/layout/src/LeafLayout.ts#L23)

___

### \_contentBounds

• **\_contentBounds**: [`IBoundsData`](../interfaces/IBoundsData.md)

#### Defined in

[src/leafer/packages/display-module/layout/src/LeafLayout.ts:28](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/display-module/layout/src/LeafLayout.ts#L28)

___

### \_strokeBounds

• **\_strokeBounds**: [`IBoundsData`](../interfaces/IBoundsData.md)

#### Defined in

[src/leafer/packages/display-module/layout/src/LeafLayout.ts:29](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/display-module/layout/src/LeafLayout.ts#L29)

___

### \_renderBounds

• **\_renderBounds**: [`IBoundsData`](../interfaces/IBoundsData.md)

#### Defined in

[src/leafer/packages/display-module/layout/src/LeafLayout.ts:30](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/display-module/layout/src/LeafLayout.ts#L30)

___

### \_localContentBounds

• `Protected` `Optional` **\_localContentBounds**: [`IBoundsData`](../interfaces/IBoundsData.md)

#### Defined in

[src/leafer/packages/display-module/layout/src/LeafLayout.ts:39](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/display-module/layout/src/LeafLayout.ts#L39)

___

### \_localStrokeBounds

• `Protected` `Optional` **\_localStrokeBounds**: [`IBoundsData`](../interfaces/IBoundsData.md)

#### Defined in

[src/leafer/packages/display-module/layout/src/LeafLayout.ts:40](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/display-module/layout/src/LeafLayout.ts#L40)

___

### \_localRenderBounds

• `Protected` `Optional` **\_localRenderBounds**: [`IBoundsData`](../interfaces/IBoundsData.md)

#### Defined in

[src/leafer/packages/display-module/layout/src/LeafLayout.ts:41](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/display-module/layout/src/LeafLayout.ts#L41)

___

### \_worldContentBounds

• `Protected` **\_worldContentBounds**: [`IBoundsData`](../interfaces/IBoundsData.md)

#### Defined in

[src/leafer/packages/display-module/layout/src/LeafLayout.ts:50](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/display-module/layout/src/LeafLayout.ts#L50)

___

### \_worldBoxBounds

• `Protected` **\_worldBoxBounds**: [`IBoundsData`](../interfaces/IBoundsData.md)

#### Defined in

[src/leafer/packages/display-module/layout/src/LeafLayout.ts:51](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/display-module/layout/src/LeafLayout.ts#L51)

___

### \_worldStrokeBounds

• `Protected` **\_worldStrokeBounds**: [`IBoundsData`](../interfaces/IBoundsData.md)

#### Defined in

[src/leafer/packages/display-module/layout/src/LeafLayout.ts:52](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/display-module/layout/src/LeafLayout.ts#L52)

___

### resized

• **resized**: ``"scale"`` \| ``"local"`` \| ``"inner"``

#### Implementation of

[ILeafLayout](../interfaces/ILeafLayout.md).[resized](../interfaces/ILeafLayout.md#resized)

#### Defined in

[src/leafer/packages/display-module/layout/src/LeafLayout.ts:56](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/display-module/layout/src/LeafLayout.ts#L56)

___

### waitAutoLayout

• **waitAutoLayout**: `boolean`

#### Implementation of

[ILeafLayout](../interfaces/ILeafLayout.md).[waitAutoLayout](../interfaces/ILeafLayout.md#waitautolayout)

#### Defined in

[src/leafer/packages/display-module/layout/src/LeafLayout.ts:57](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/display-module/layout/src/LeafLayout.ts#L57)

___

### matrixChanged

• **matrixChanged**: `boolean`

#### Implementation of

[ILeafLayout](../interfaces/ILeafLayout.md).[matrixChanged](../interfaces/ILeafLayout.md#matrixchanged)

#### Defined in

[src/leafer/packages/display-module/layout/src/LeafLayout.ts:60](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/display-module/layout/src/LeafLayout.ts#L60)

___

### scaleChanged

• **scaleChanged**: `boolean`

#### Implementation of

[ILeafLayout](../interfaces/ILeafLayout.md).[scaleChanged](../interfaces/ILeafLayout.md#scalechanged)

#### Defined in

[src/leafer/packages/display-module/layout/src/LeafLayout.ts:61](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/display-module/layout/src/LeafLayout.ts#L61)

___

### rotationChanged

• **rotationChanged**: `boolean`

#### Implementation of

[ILeafLayout](../interfaces/ILeafLayout.md).[rotationChanged](../interfaces/ILeafLayout.md#rotationchanged)

#### Defined in

[src/leafer/packages/display-module/layout/src/LeafLayout.ts:62](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/display-module/layout/src/LeafLayout.ts#L62)

___

### boundsChanged

• **boundsChanged**: `boolean`

#### Implementation of

[ILeafLayout](../interfaces/ILeafLayout.md).[boundsChanged](../interfaces/ILeafLayout.md#boundschanged)

#### Defined in

[src/leafer/packages/display-module/layout/src/LeafLayout.ts:65](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/display-module/layout/src/LeafLayout.ts#L65)

___

### boxChanged

• **boxChanged**: `boolean`

#### Implementation of

[ILeafLayout](../interfaces/ILeafLayout.md).[boxChanged](../interfaces/ILeafLayout.md#boxchanged)

#### Defined in

[src/leafer/packages/display-module/layout/src/LeafLayout.ts:67](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/display-module/layout/src/LeafLayout.ts#L67)

___

### strokeChanged

• **strokeChanged**: `boolean`

#### Implementation of

[ILeafLayout](../interfaces/ILeafLayout.md).[strokeChanged](../interfaces/ILeafLayout.md#strokechanged)

#### Defined in

[src/leafer/packages/display-module/layout/src/LeafLayout.ts:68](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/display-module/layout/src/LeafLayout.ts#L68)

___

### renderChanged

• **renderChanged**: `boolean`

#### Implementation of

[ILeafLayout](../interfaces/ILeafLayout.md).[renderChanged](../interfaces/ILeafLayout.md#renderchanged)

#### Defined in

[src/leafer/packages/display-module/layout/src/LeafLayout.ts:69](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/display-module/layout/src/LeafLayout.ts#L69)

___

### localBoxChanged

• **localBoxChanged**: `boolean`

#### Implementation of

[ILeafLayout](../interfaces/ILeafLayout.md).[localBoxChanged](../interfaces/ILeafLayout.md#localboxchanged)

#### Defined in

[src/leafer/packages/display-module/layout/src/LeafLayout.ts:71](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/display-module/layout/src/LeafLayout.ts#L71)

___

### surfaceChanged

• **surfaceChanged**: `boolean`

#### Implementation of

[ILeafLayout](../interfaces/ILeafLayout.md).[surfaceChanged](../interfaces/ILeafLayout.md#surfacechanged)

#### Defined in

[src/leafer/packages/display-module/layout/src/LeafLayout.ts:74](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/display-module/layout/src/LeafLayout.ts#L74)

___

### opacityChanged

• **opacityChanged**: `boolean`

#### Implementation of

[ILeafLayout](../interfaces/ILeafLayout.md).[opacityChanged](../interfaces/ILeafLayout.md#opacitychanged)

#### Defined in

[src/leafer/packages/display-module/layout/src/LeafLayout.ts:75](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/display-module/layout/src/LeafLayout.ts#L75)

___

### hitCanvasChanged

• **hitCanvasChanged**: `boolean`

#### Implementation of

[ILeafLayout](../interfaces/ILeafLayout.md).[hitCanvasChanged](../interfaces/ILeafLayout.md#hitcanvaschanged)

#### Defined in

[src/leafer/packages/display-module/layout/src/LeafLayout.ts:77](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/display-module/layout/src/LeafLayout.ts#L77)

___

### childrenSortChanged

• `Optional` **childrenSortChanged**: `boolean`

#### Implementation of

[ILeafLayout](../interfaces/ILeafLayout.md).[childrenSortChanged](../interfaces/ILeafLayout.md#childrensortchanged)

#### Defined in

[src/leafer/packages/display-module/layout/src/LeafLayout.ts:79](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/display-module/layout/src/LeafLayout.ts#L79)

___

### stateStyleChanged

• `Optional` **stateStyleChanged**: `boolean`

#### Implementation of

[ILeafLayout](../interfaces/ILeafLayout.md).[stateStyleChanged](../interfaces/ILeafLayout.md#statestylechanged)

#### Defined in

[src/leafer/packages/display-module/layout/src/LeafLayout.ts:80](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/display-module/layout/src/LeafLayout.ts#L80)

___

### affectScaleOrRotation

• **affectScaleOrRotation**: `boolean`

#### Implementation of

[ILeafLayout](../interfaces/ILeafLayout.md).[affectScaleOrRotation](../interfaces/ILeafLayout.md#affectscaleorrotation)

#### Defined in

[src/leafer/packages/display-module/layout/src/LeafLayout.ts:83](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/display-module/layout/src/LeafLayout.ts#L83)

___

### affectRotation

• **affectRotation**: `boolean`

#### Implementation of

[ILeafLayout](../interfaces/ILeafLayout.md).[affectRotation](../interfaces/ILeafLayout.md#affectrotation)

#### Defined in

[src/leafer/packages/display-module/layout/src/LeafLayout.ts:84](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/display-module/layout/src/LeafLayout.ts#L84)

___

### affectChildrenSort

• `Optional` **affectChildrenSort**: `boolean`

#### Implementation of

[ILeafLayout](../interfaces/ILeafLayout.md).[affectChildrenSort](../interfaces/ILeafLayout.md#affectchildrensort)

#### Defined in

[src/leafer/packages/display-module/layout/src/LeafLayout.ts:85](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/display-module/layout/src/LeafLayout.ts#L85)

___

### strokeSpread

• **strokeSpread**: `number`

#### Implementation of

[ILeafLayout](../interfaces/ILeafLayout.md).[strokeSpread](../interfaces/ILeafLayout.md#strokespread)

#### Defined in

[src/leafer/packages/display-module/layout/src/LeafLayout.ts:87](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/display-module/layout/src/LeafLayout.ts#L87)

___

### strokeBoxSpread

• **strokeBoxSpread**: `number`

#### Implementation of

[ILeafLayout](../interfaces/ILeafLayout.md).[strokeBoxSpread](../interfaces/ILeafLayout.md#strokeboxspread)

#### Defined in

[src/leafer/packages/display-module/layout/src/LeafLayout.ts:88](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/display-module/layout/src/LeafLayout.ts#L88)

___

### renderSpread

• **renderSpread**: `number`

#### Implementation of

[ILeafLayout](../interfaces/ILeafLayout.md).[renderSpread](../interfaces/ILeafLayout.md#renderspread)

#### Defined in

[src/leafer/packages/display-module/layout/src/LeafLayout.ts:89](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/display-module/layout/src/LeafLayout.ts#L89)

___

### renderShapeSpread

• **renderShapeSpread**: `number`

#### Implementation of

[ILeafLayout](../interfaces/ILeafLayout.md).[renderShapeSpread](../interfaces/ILeafLayout.md#rendershapespread)

#### Defined in

[src/leafer/packages/display-module/layout/src/LeafLayout.ts:90](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/display-module/layout/src/LeafLayout.ts#L90)

## Accessors

### contentBounds

• `get` **contentBounds**(): [`IBoundsData`](../interfaces/IBoundsData.md)

#### Returns

[`IBoundsData`](../interfaces/IBoundsData.md)

#### Implementation of

[ILeafLayout](../interfaces/ILeafLayout.md).[contentBounds](../interfaces/ILeafLayout.md#contentbounds)

#### Defined in

[src/leafer/packages/display-module/layout/src/LeafLayout.ts:21](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/display-module/layout/src/LeafLayout.ts#L21)

• `set` **contentBounds**(`bounds`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `bounds` | [`IBoundsData`](../interfaces/IBoundsData.md) |

#### Returns

`void`

#### Implementation of

[ILeafLayout](../interfaces/ILeafLayout.md).[contentBounds](../interfaces/ILeafLayout.md#contentbounds)

#### Defined in

[src/leafer/packages/display-module/layout/src/LeafLayout.ts:22](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/display-module/layout/src/LeafLayout.ts#L22)

___

### strokeBounds

• `get` **strokeBounds**(): [`IBoundsData`](../interfaces/IBoundsData.md)

#### Returns

[`IBoundsData`](../interfaces/IBoundsData.md)

#### Implementation of

[ILeafLayout](../interfaces/ILeafLayout.md).[strokeBounds](../interfaces/ILeafLayout.md#strokebounds)

#### Defined in

[src/leafer/packages/display-module/layout/src/LeafLayout.ts:24](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/display-module/layout/src/LeafLayout.ts#L24)

___

### renderBounds

• `get` **renderBounds**(): [`IBoundsData`](../interfaces/IBoundsData.md)

#### Returns

[`IBoundsData`](../interfaces/IBoundsData.md)

#### Implementation of

[ILeafLayout](../interfaces/ILeafLayout.md).[renderBounds](../interfaces/ILeafLayout.md#renderbounds)

#### Defined in

[src/leafer/packages/display-module/layout/src/LeafLayout.ts:25](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/display-module/layout/src/LeafLayout.ts#L25)

• `set` **renderBounds**(`bounds`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `bounds` | [`IBoundsData`](../interfaces/IBoundsData.md) |

#### Returns

`void`

#### Implementation of

[ILeafLayout](../interfaces/ILeafLayout.md).[renderBounds](../interfaces/ILeafLayout.md#renderbounds)

#### Defined in

[src/leafer/packages/display-module/layout/src/LeafLayout.ts:26](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/display-module/layout/src/LeafLayout.ts#L26)

___

### localContentBounds

• `get` **localContentBounds**(): [`IBoundsData`](../interfaces/IBoundsData.md)

#### Returns

[`IBoundsData`](../interfaces/IBoundsData.md)

#### Implementation of

[ILeafLayout](../interfaces/ILeafLayout.md).[localContentBounds](../interfaces/ILeafLayout.md#localcontentbounds)

#### Defined in

[src/leafer/packages/display-module/layout/src/LeafLayout.ts:34](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/display-module/layout/src/LeafLayout.ts#L34)

___

### localStrokeBounds

• `get` **localStrokeBounds**(): [`IBoundsData`](../interfaces/IBoundsData.md)

#### Returns

[`IBoundsData`](../interfaces/IBoundsData.md)

#### Implementation of

[ILeafLayout](../interfaces/ILeafLayout.md).[localStrokeBounds](../interfaces/ILeafLayout.md#localstrokebounds)

#### Defined in

[src/leafer/packages/display-module/layout/src/LeafLayout.ts:36](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/display-module/layout/src/LeafLayout.ts#L36)

___

### localRenderBounds

• `get` **localRenderBounds**(): [`IBoundsData`](../interfaces/IBoundsData.md)

#### Returns

[`IBoundsData`](../interfaces/IBoundsData.md)

#### Implementation of

[ILeafLayout](../interfaces/ILeafLayout.md).[localRenderBounds](../interfaces/ILeafLayout.md#localrenderbounds)

#### Defined in

[src/leafer/packages/display-module/layout/src/LeafLayout.ts:37](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/display-module/layout/src/LeafLayout.ts#L37)

___

### worldContentBounds

• `get` **worldContentBounds**(): [`IBoundsData`](../interfaces/IBoundsData.md)

#### Returns

[`IBoundsData`](../interfaces/IBoundsData.md)

#### Implementation of

[ILeafLayout](../interfaces/ILeafLayout.md).[worldContentBounds](../interfaces/ILeafLayout.md#worldcontentbounds)

#### Defined in

[src/leafer/packages/display-module/layout/src/LeafLayout.ts:45](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/display-module/layout/src/LeafLayout.ts#L45)

___

### worldBoxBounds

• `get` **worldBoxBounds**(): [`IBoundsData`](../interfaces/IBoundsData.md)

#### Returns

[`IBoundsData`](../interfaces/IBoundsData.md)

#### Implementation of

[ILeafLayout](../interfaces/ILeafLayout.md).[worldBoxBounds](../interfaces/ILeafLayout.md#worldboxbounds)

#### Defined in

[src/leafer/packages/display-module/layout/src/LeafLayout.ts:46](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/display-module/layout/src/LeafLayout.ts#L46)

___

### worldStrokeBounds

• `get` **worldStrokeBounds**(): [`IBoundsData`](../interfaces/IBoundsData.md)

#### Returns

[`IBoundsData`](../interfaces/IBoundsData.md)

#### Implementation of

[ILeafLayout](../interfaces/ILeafLayout.md).[worldStrokeBounds](../interfaces/ILeafLayout.md#worldstrokebounds)

#### Defined in

[src/leafer/packages/display-module/layout/src/LeafLayout.ts:47](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/display-module/layout/src/LeafLayout.ts#L47)

___

### a

• `get` **a**(): `number`

#### Returns

`number`

#### Implementation of

[ILeafLayout](../interfaces/ILeafLayout.md).[a](../interfaces/ILeafLayout.md#a)

#### Defined in

[src/leafer/packages/display-module/layout/src/LeafLayout.ts:93](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/display-module/layout/src/LeafLayout.ts#L93)

___

### b

• `get` **b**(): `number`

#### Returns

`number`

#### Implementation of

[ILeafLayout](../interfaces/ILeafLayout.md).[b](../interfaces/ILeafLayout.md#b)

#### Defined in

[src/leafer/packages/display-module/layout/src/LeafLayout.ts:94](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/display-module/layout/src/LeafLayout.ts#L94)

___

### c

• `get` **c**(): `number`

#### Returns

`number`

#### Implementation of

[ILeafLayout](../interfaces/ILeafLayout.md).[c](../interfaces/ILeafLayout.md#c)

#### Defined in

[src/leafer/packages/display-module/layout/src/LeafLayout.ts:95](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/display-module/layout/src/LeafLayout.ts#L95)

___

### d

• `get` **d**(): `number`

#### Returns

`number`

#### Implementation of

[ILeafLayout](../interfaces/ILeafLayout.md).[d](../interfaces/ILeafLayout.md#d)

#### Defined in

[src/leafer/packages/display-module/layout/src/LeafLayout.ts:96](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/display-module/layout/src/LeafLayout.ts#L96)

___

### e

• `get` **e**(): `number`

#### Returns

`number`

#### Implementation of

[ILeafLayout](../interfaces/ILeafLayout.md).[e](../interfaces/ILeafLayout.md#e)

#### Defined in

[src/leafer/packages/display-module/layout/src/LeafLayout.ts:97](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/display-module/layout/src/LeafLayout.ts#L97)

___

### f

• `get` **f**(): `number`

#### Returns

`number`

#### Implementation of

[ILeafLayout](../interfaces/ILeafLayout.md).[f](../interfaces/ILeafLayout.md#f)

#### Defined in

[src/leafer/packages/display-module/layout/src/LeafLayout.ts:98](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/display-module/layout/src/LeafLayout.ts#L98)

___

### x

• `get` **x**(): `number`

#### Returns

`number`

#### Implementation of

[ILeafLayout](../interfaces/ILeafLayout.md).[x](../interfaces/ILeafLayout.md#x)

#### Defined in

[src/leafer/packages/display-module/layout/src/LeafLayout.ts:99](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/display-module/layout/src/LeafLayout.ts#L99)

___

### y

• `get` **y**(): `number`

#### Returns

`number`

#### Implementation of

[ILeafLayout](../interfaces/ILeafLayout.md).[y](../interfaces/ILeafLayout.md#y)

#### Defined in

[src/leafer/packages/display-module/layout/src/LeafLayout.ts:100](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/display-module/layout/src/LeafLayout.ts#L100)

___

### width

• `get` **width**(): `number`

#### Returns

`number`

#### Implementation of

[ILeafLayout](../interfaces/ILeafLayout.md).[width](../interfaces/ILeafLayout.md#width)

#### Defined in

[src/leafer/packages/display-module/layout/src/LeafLayout.ts:101](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/display-module/layout/src/LeafLayout.ts#L101)

___

### height

• `get` **height**(): `number`

#### Returns

`number`

#### Implementation of

[ILeafLayout](../interfaces/ILeafLayout.md).[height](../interfaces/ILeafLayout.md#height)

#### Defined in

[src/leafer/packages/display-module/layout/src/LeafLayout.ts:102](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/display-module/layout/src/LeafLayout.ts#L102)

## Methods

### createLocal

▸ **createLocal**(): `void`

#### Returns

`void`

#### Implementation of

[ILeafLayout](../interfaces/ILeafLayout.md).[createLocal](../interfaces/ILeafLayout.md#createlocal)

#### Defined in

[src/leafer/packages/display-module/layout/src/LeafLayout.ts:115](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/display-module/layout/src/LeafLayout.ts#L115)

___

### update

▸ **update**(): `void`

#### Returns

`void`

#### Implementation of

[ILeafLayout](../interfaces/ILeafLayout.md).[update](../interfaces/ILeafLayout.md#update)

#### Defined in

[src/leafer/packages/display-module/layout/src/LeafLayout.ts:121](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/display-module/layout/src/LeafLayout.ts#L121)

___

### getTransform

▸ **getTransform**(`relative?`): [`IMatrixData`](../interfaces/IMatrixData.md)

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `relative` | [`ILeaf`](../interfaces/ILeaf.md) \| [`ILocationType`](../modules.md#ilocationtype) | `'world'` |

#### Returns

[`IMatrixData`](../interfaces/IMatrixData.md)

#### Implementation of

[ILeafLayout](../interfaces/ILeafLayout.md).[getTransform](../interfaces/ILeafLayout.md#gettransform)

#### Defined in

[src/leafer/packages/display-module/layout/src/LeafLayout.ts:138](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/display-module/layout/src/LeafLayout.ts#L138)

___

### getBounds

▸ **getBounds**(`type?`, `relative?`): [`IBoundsData`](../interfaces/IBoundsData.md)

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `type?` | [`IBoundsType`](../modules.md#iboundstype) | `undefined` |
| `relative` | [`ILeaf`](../interfaces/ILeaf.md) \| [`ILocationType`](../modules.md#ilocationtype) | `'world'` |

#### Returns

[`IBoundsData`](../interfaces/IBoundsData.md)

#### Implementation of

[ILeafLayout](../interfaces/ILeafLayout.md).[getBounds](../interfaces/ILeafLayout.md#getbounds)

#### Defined in

[src/leafer/packages/display-module/layout/src/LeafLayout.ts:155](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/display-module/layout/src/LeafLayout.ts#L155)

___

### getInnerBounds

▸ **getInnerBounds**(`type?`): [`IBoundsData`](../interfaces/IBoundsData.md)

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `type` | [`IBoundsType`](../modules.md#iboundstype) | `'box'` |

#### Returns

[`IBoundsData`](../interfaces/IBoundsData.md)

#### Defined in

[src/leafer/packages/display-module/layout/src/LeafLayout.ts:171](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/display-module/layout/src/LeafLayout.ts#L171)

___

### getLocalBounds

▸ **getLocalBounds**(`type?`): [`IBoundsData`](../interfaces/IBoundsData.md)

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `type` | [`IBoundsType`](../modules.md#iboundstype) | `'box'` |

#### Returns

[`IBoundsData`](../interfaces/IBoundsData.md)

#### Defined in

[src/leafer/packages/display-module/layout/src/LeafLayout.ts:184](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/display-module/layout/src/LeafLayout.ts#L184)

___

### getWorldBounds

▸ **getWorldBounds**(`type?`): [`IBoundsData`](../interfaces/IBoundsData.md)

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `type` | [`IBoundsType`](../modules.md#iboundstype) | `'box'` |

#### Returns

[`IBoundsData`](../interfaces/IBoundsData.md)

#### Defined in

[src/leafer/packages/display-module/layout/src/LeafLayout.ts:197](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/display-module/layout/src/LeafLayout.ts#L197)

___

### getLayoutBounds

▸ **getLayoutBounds**(`type?`, `relative?`, `unscale?`): [`ILayoutBoundsData`](../interfaces/ILayoutBoundsData.md)

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `type?` | [`IBoundsType`](../modules.md#iboundstype) | `undefined` |
| `relative` | [`ILeaf`](../interfaces/ILeaf.md) \| [`ILocationType`](../modules.md#ilocationtype) | `'world'` |
| `unscale?` | `boolean` | `undefined` |

#### Returns

[`ILayoutBoundsData`](../interfaces/ILayoutBoundsData.md)

#### Implementation of

[ILeafLayout](../interfaces/ILeafLayout.md).[getLayoutBounds](../interfaces/ILeafLayout.md#getlayoutbounds)

#### Defined in

[src/leafer/packages/display-module/layout/src/LeafLayout.ts:210](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/display-module/layout/src/LeafLayout.ts#L210)

___

### getLayoutPoints

▸ **getLayoutPoints**(`type?`, `relative?`): [`IPointData`](../interfaces/IPointData.md)[]

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `type?` | [`IBoundsType`](../modules.md#iboundstype) | `undefined` |
| `relative` | [`ILeaf`](../interfaces/ILeaf.md) \| [`ILocationType`](../modules.md#ilocationtype) | `'world'` |

#### Returns

[`IPointData`](../interfaces/IPointData.md)[]

#### Implementation of

[ILeafLayout](../interfaces/ILeafLayout.md).[getLayoutPoints](../interfaces/ILeafLayout.md#getlayoutpoints)

#### Defined in

[src/leafer/packages/display-module/layout/src/LeafLayout.ts:254](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/display-module/layout/src/LeafLayout.ts#L254)

___

### shrinkContent

▸ **shrinkContent**(): `void`

#### Returns

`void`

#### Implementation of

[ILeafLayout](../interfaces/ILeafLayout.md).[shrinkContent](../interfaces/ILeafLayout.md#shrinkcontent)

#### Defined in

[src/leafer/packages/display-module/layout/src/LeafLayout.ts:278](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/display-module/layout/src/LeafLayout.ts#L278)

___

### spreadStroke

▸ **spreadStroke**(): `void`

#### Returns

`void`

#### Implementation of

[ILeafLayout](../interfaces/ILeafLayout.md).[spreadStroke](../interfaces/ILeafLayout.md#spreadstroke)

#### Defined in

[src/leafer/packages/display-module/layout/src/LeafLayout.ts:283](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/display-module/layout/src/LeafLayout.ts#L283)

___

### spreadRender

▸ **spreadRender**(): `void`

#### Returns

`void`

#### Implementation of

[ILeafLayout](../interfaces/ILeafLayout.md).[spreadRender](../interfaces/ILeafLayout.md#spreadrender)

#### Defined in

[src/leafer/packages/display-module/layout/src/LeafLayout.ts:289](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/display-module/layout/src/LeafLayout.ts#L289)

___

### shrinkContentCancel

▸ **shrinkContentCancel**(): `void`

#### Returns

`void`

#### Implementation of

[ILeafLayout](../interfaces/ILeafLayout.md).[shrinkContentCancel](../interfaces/ILeafLayout.md#shrinkcontentcancel)

#### Defined in

[src/leafer/packages/display-module/layout/src/LeafLayout.ts:295](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/display-module/layout/src/LeafLayout.ts#L295)

___

### spreadStrokeCancel

▸ **spreadStrokeCancel**(): `void`

#### Returns

`void`

#### Implementation of

[ILeafLayout](../interfaces/ILeafLayout.md).[spreadStrokeCancel](../interfaces/ILeafLayout.md#spreadstrokecancel)

#### Defined in

[src/leafer/packages/display-module/layout/src/LeafLayout.ts:299](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/display-module/layout/src/LeafLayout.ts#L299)

___

### spreadRenderCancel

▸ **spreadRenderCancel**(): `void`

#### Returns

`void`

#### Implementation of

[ILeafLayout](../interfaces/ILeafLayout.md).[spreadRenderCancel](../interfaces/ILeafLayout.md#spreadrendercancel)

#### Defined in

[src/leafer/packages/display-module/layout/src/LeafLayout.ts:305](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/display-module/layout/src/LeafLayout.ts#L305)

___

### boxChange

▸ **boxChange**(): `void`

#### Returns

`void`

#### Implementation of

[ILeafLayout](../interfaces/ILeafLayout.md).[boxChange](../interfaces/ILeafLayout.md#boxchange)

#### Defined in

[src/leafer/packages/display-module/layout/src/LeafLayout.ts:313](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/display-module/layout/src/LeafLayout.ts#L313)

___

### localBoxChange

▸ **localBoxChange**(): `void`

#### Returns

`void`

#### Implementation of

[ILeafLayout](../interfaces/ILeafLayout.md).[localBoxChange](../interfaces/ILeafLayout.md#localboxchange)

#### Defined in

[src/leafer/packages/display-module/layout/src/LeafLayout.ts:319](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/display-module/layout/src/LeafLayout.ts#L319)

___

### strokeChange

▸ **strokeChange**(): `void`

#### Returns

`void`

#### Implementation of

[ILeafLayout](../interfaces/ILeafLayout.md).[strokeChange](../interfaces/ILeafLayout.md#strokechange)

#### Defined in

[src/leafer/packages/display-module/layout/src/LeafLayout.ts:324](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/display-module/layout/src/LeafLayout.ts#L324)

___

### renderChange

▸ **renderChange**(): `void`

#### Returns

`void`

#### Implementation of

[ILeafLayout](../interfaces/ILeafLayout.md).[renderChange](../interfaces/ILeafLayout.md#renderchange)

#### Defined in

[src/leafer/packages/display-module/layout/src/LeafLayout.ts:331](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/display-module/layout/src/LeafLayout.ts#L331)

___

### scaleChange

▸ **scaleChange**(): `void`

#### Returns

`void`

#### Implementation of

[ILeafLayout](../interfaces/ILeafLayout.md).[scaleChange](../interfaces/ILeafLayout.md#scalechange)

#### Defined in

[src/leafer/packages/display-module/layout/src/LeafLayout.ts:340](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/display-module/layout/src/LeafLayout.ts#L340)

___

### rotationChange

▸ **rotationChange**(): `void`

#### Returns

`void`

#### Implementation of

[ILeafLayout](../interfaces/ILeafLayout.md).[rotationChange](../interfaces/ILeafLayout.md#rotationchange)

#### Defined in

[src/leafer/packages/display-module/layout/src/LeafLayout.ts:345](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/display-module/layout/src/LeafLayout.ts#L345)

___

### \_scaleOrRotationChange

▸ **_scaleOrRotationChange**(): `void`

#### Returns

`void`

#### Defined in

[src/leafer/packages/display-module/layout/src/LeafLayout.ts:351](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/display-module/layout/src/LeafLayout.ts#L351)

___

### matrixChange

▸ **matrixChange**(): `void`

#### Returns

`void`

#### Implementation of

[ILeafLayout](../interfaces/ILeafLayout.md).[matrixChange](../interfaces/ILeafLayout.md#matrixchange)

#### Defined in

[src/leafer/packages/display-module/layout/src/LeafLayout.ts:357](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/display-module/layout/src/LeafLayout.ts#L357)

___

### surfaceChange

▸ **surfaceChange**(): `void`

#### Returns

`void`

#### Implementation of

[ILeafLayout](../interfaces/ILeafLayout.md).[surfaceChange](../interfaces/ILeafLayout.md#surfacechange)

#### Defined in

[src/leafer/packages/display-module/layout/src/LeafLayout.ts:365](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/display-module/layout/src/LeafLayout.ts#L365)

___

### opacityChange

▸ **opacityChange**(): `void`

#### Returns

`void`

#### Implementation of

[ILeafLayout](../interfaces/ILeafLayout.md).[opacityChange](../interfaces/ILeafLayout.md#opacitychange)

#### Defined in

[src/leafer/packages/display-module/layout/src/LeafLayout.ts:369](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/display-module/layout/src/LeafLayout.ts#L369)

___

### childrenSortChange

▸ **childrenSortChange**(): `void`

#### Returns

`void`

#### Implementation of

[ILeafLayout](../interfaces/ILeafLayout.md).[childrenSortChange](../interfaces/ILeafLayout.md#childrensortchange)

#### Defined in

[src/leafer/packages/display-module/layout/src/LeafLayout.ts:373](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/display-module/layout/src/LeafLayout.ts#L373)

___

### destroy

▸ **destroy**(): `void`

#### Returns

`void`

#### Implementation of

[ILeafLayout](../interfaces/ILeafLayout.md).[destroy](../interfaces/ILeafLayout.md#destroy)

#### Defined in

[src/leafer/packages/display-module/layout/src/LeafLayout.ts:380](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/display-module/layout/src/LeafLayout.ts#L380)
