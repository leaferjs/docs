# Interface: ICreator

## Table of contents

### Methods

- [image](ICreator.md#image)
- [film](ICreator.md#film)
- [video](ICreator.md#video)
- [canvas](ICreator.md#canvas)
- [hitCanvas](ICreator.md#hitcanvas)
- [hitCanvasManager](ICreator.md#hitcanvasmanager)
- [watcher](ICreator.md#watcher)
- [layouter](ICreator.md#layouter)
- [renderer](ICreator.md#renderer)
- [selector](ICreator.md#selector)
- [finder](ICreator.md#finder)
- [interaction](ICreator.md#interaction)
- [editor](ICreator.md#editor)

## Methods

### image

▸ **image**(`options?`): [`ILeaferImage`](ILeaferImage.md)

#### Parameters

| Name       | Type                                          |
| :--------- | :-------------------------------------------- |
| `options?` | [`ILeaferImageConfig`](ILeaferImageConfig.md) |

#### Returns

[`ILeaferImage`](ILeaferImage.md)

#### Defined in

[src/leafer/packages/interface/src/app/ILeafer.ts:146](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/app/ILeafer.ts#L146)

___

### film

▸ **film**(`options?`): [`ILeaferFilm`](ILeaferFilm.md)

#### Parameters

| Name       | Type                                        |
| :--------- | :------------------------------------------ |
| `options?` | [`ILeaferFilmConfig`](ILeaferFilmConfig.md) |

#### Returns

[`ILeaferFilm`](ILeaferFilm.md)

#### Defined in

[src/leafer/packages/interface/src/app/ILeafer.ts:147](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/app/ILeafer.ts#L147)

___

### video

▸ **video**(`options?`): [`ILeaferVideo`](ILeaferVideo.md)

#### Parameters

| Name       | Type                                          |
| :--------- | :-------------------------------------------- |
| `options?` | [`ILeaferVideoConfig`](ILeaferVideoConfig.md) |

#### Returns

[`ILeaferVideo`](ILeaferVideo.md)

#### Defined in

[src/leafer/packages/interface/src/app/ILeafer.ts:148](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/app/ILeafer.ts#L148)

___

### canvas

▸ **canvas**(`options?`, `manager?`): [`ILeaferCanvas`](ILeaferCanvas.md)

#### Parameters

| Name       | Type                                            |
| :--------- | :---------------------------------------------- |
| `options?` | [`ILeaferCanvasConfig`](ILeaferCanvasConfig.md) |
| `manager?` | [`ICanvasManager`](ICanvasManager.md)           |

#### Returns

[`ILeaferCanvas`](ILeaferCanvas.md)

#### Defined in

[src/leafer/packages/interface/src/app/ILeafer.ts:149](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/app/ILeafer.ts#L149)

___

### hitCanvas

▸ **hitCanvas**(`options?`, `manager?`): [`IHitCanvas`](IHitCanvas.md)

#### Parameters

| Name       | Type                                            |
| :--------- | :---------------------------------------------- |
| `options?` | [`ILeaferCanvasConfig`](ILeaferCanvasConfig.md) |
| `manager?` | [`ICanvasManager`](ICanvasManager.md)           |

#### Returns

[`IHitCanvas`](IHitCanvas.md)

#### Defined in

[src/leafer/packages/interface/src/app/ILeafer.ts:150](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/app/ILeafer.ts#L150)

___

### hitCanvasManager

▸ **hitCanvasManager**(): [`IHitCanvasManager`](IHitCanvasManager.md)

#### Returns

[`IHitCanvasManager`](IHitCanvasManager.md)

#### Defined in

[src/leafer/packages/interface/src/app/ILeafer.ts:151](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/app/ILeafer.ts#L151)

___

### watcher

▸ **watcher**(`target`, `options?`): [`IWatcher`](IWatcher.md)

#### Parameters

| Name       | Type                                  |
| :--------- | :------------------------------------ |
| `target`   | [`ILeaf`](ILeaf.md)                   |
| `options?` | [`IWatcherConfig`](IWatcherConfig.md) |

#### Returns

[`IWatcher`](IWatcher.md)

#### Defined in

[src/leafer/packages/interface/src/app/ILeafer.ts:153](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/app/ILeafer.ts#L153)

___

### layouter

▸ **layouter**(`target`, `options?`): [`ILayouter`](ILayouter.md)

#### Parameters

| Name       | Type                                    |
| :--------- | :-------------------------------------- |
| `target`   | [`ILeaf`](ILeaf.md)                     |
| `options?` | [`ILayouterConfig`](ILayouterConfig.md) |

#### Returns

[`ILayouter`](ILayouter.md)

#### Defined in

[src/leafer/packages/interface/src/app/ILeafer.ts:154](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/app/ILeafer.ts#L154)

___

### renderer

▸ **renderer**(`target`, `canvas`, `options?`): [`IRenderer`](IRenderer.md)

#### Parameters

| Name       | Type                                    |
| :--------- | :-------------------------------------- |
| `target`   | [`ILeaf`](ILeaf.md)                     |
| `canvas`   | [`ILeaferCanvas`](ILeaferCanvas.md)     |
| `options?` | [`IRendererConfig`](IRendererConfig.md) |

#### Returns

[`IRenderer`](IRenderer.md)

#### Defined in

[src/leafer/packages/interface/src/app/ILeafer.ts:155](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/app/ILeafer.ts#L155)

___

### selector

▸ **selector**(`target?`, `options?`): [`ISelector`](ISelector.md)

#### Parameters

| Name       | Type                                    |
| :--------- | :-------------------------------------- |
| `target?`  | [`ILeaf`](ILeaf.md)                     |
| `options?` | [`ISelectorConfig`](ISelectorConfig.md) |

#### Returns

[`ISelector`](ISelector.md)

#### Defined in

[src/leafer/packages/interface/src/app/ILeafer.ts:156](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/app/ILeafer.ts#L156)

___

### finder

▸ **finder**(`target?`, `options?`): [`IFinder`](IFinder.md)

#### Parameters

| Name       | Type                                    |
| :--------- | :-------------------------------------- |
| `target?`  | [`ILeaf`](ILeaf.md)                     |
| `options?` | [`ISelectorConfig`](ISelectorConfig.md) |

#### Returns

[`IFinder`](IFinder.md)

#### Defined in

[src/leafer/packages/interface/src/app/ILeafer.ts:157](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/app/ILeafer.ts#L157)

___

### interaction

▸ **interaction**(`target`, `canvas`, `selector`, `options?`): [`IInteraction`](IInteraction.md)

#### Parameters

| Name       | Type                                          |
| :--------- | :-------------------------------------------- |
| `target`   | [`ILeaf`](ILeaf.md)                           |
| `canvas`   | [`IInteractionCanvas`](IInteractionCanvas.md) |
| `selector` | [`ISelector`](ISelector.md)                   |
| `options?` | [`IInteractionConfig`](IInteractionConfig.md) |

#### Returns

[`IInteraction`](IInteraction.md)

#### Defined in

[src/leafer/packages/interface/src/app/ILeafer.ts:159](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/app/ILeafer.ts#L159)

___

### editor

▸ **editor**(`options?`, `app?`): [`ILeaf`](ILeaf.md)

#### Parameters

| Name       | Type                      |
| :--------- | :------------------------ |
| `options?` | [`IObject`](IObject.md)   |
| `app?`     | [`IAppBase`](IAppBase.md) |

#### Returns

[`ILeaf`](ILeaf.md)

#### Defined in

[src/leafer/packages/interface/src/app/ILeafer.ts:161](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/app/ILeafer.ts#L161)
