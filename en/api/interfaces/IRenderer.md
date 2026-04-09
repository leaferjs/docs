# Interface: IRenderer

## Hierarchy

- [`IControl`](IControl.md)

  ↳ **`IRenderer`**

## Implemented by

- [`Renderer`](../classes/Renderer.md)

## Table of contents

### Properties

- [target](IRenderer.md#target)
- [canvas](IRenderer.md#canvas)
- [updateBlocks](IRenderer.md#updateblocks)
- [FPS](IRenderer.md#fps)
- [totalTimes](IRenderer.md#totaltimes)
- [times](IRenderer.md#times)
- [running](IRenderer.md#running)
- [rendering](IRenderer.md#rendering)
- [waitAgain](IRenderer.md#waitagain)
- [changed](IRenderer.md#changed)
- [ignore](IRenderer.md#ignore)
- [config](IRenderer.md#config)

### Methods

- [start](IRenderer.md#start)
- [stop](IRenderer.md#stop)
- [destroy](IRenderer.md#destroy)
- [update](IRenderer.md#update)
- [requestLayout](IRenderer.md#requestlayout)
- [checkRender](IRenderer.md#checkrender)
- [render](IRenderer.md#render)
- [renderAgain](IRenderer.md#renderagain)
- [renderOnce](IRenderer.md#renderonce)
- [partRender](IRenderer.md#partrender)
- [clipRender](IRenderer.md#cliprender)
- [fullRender](IRenderer.md#fullrender)
- [addBlock](IRenderer.md#addblock)
- [mergeBlocks](IRenderer.md#mergeblocks)

## Properties

### target

• **target**: [`ILeaf`](ILeaf.md)

#### Defined in

[src/leafer/packages/interface/src/renderer/IRenderer.ts:43](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/renderer/IRenderer.ts#L43)

___

### canvas

• **canvas**: [`ILeaferCanvas`](ILeaferCanvas.md)

#### Defined in

[src/leafer/packages/interface/src/renderer/IRenderer.ts:44](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/renderer/IRenderer.ts#L44)

___

### updateBlocks

• **updateBlocks**: [`IBounds`](IBounds.md)[]

#### Defined in

[src/leafer/packages/interface/src/renderer/IRenderer.ts:45](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/renderer/IRenderer.ts#L45)

___

### FPS

• **FPS**: `number`

#### Defined in

[src/leafer/packages/interface/src/renderer/IRenderer.ts:47](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/renderer/IRenderer.ts#L47)

___

### totalTimes

• **totalTimes**: `number`

#### Defined in

[src/leafer/packages/interface/src/renderer/IRenderer.ts:48](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/renderer/IRenderer.ts#L48)

___

### times

• **times**: `number`

#### Defined in

[src/leafer/packages/interface/src/renderer/IRenderer.ts:49](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/renderer/IRenderer.ts#L49)

___

### running

• **running**: `boolean`

#### Defined in

[src/leafer/packages/interface/src/renderer/IRenderer.ts:51](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/renderer/IRenderer.ts#L51)

___

### rendering

• **rendering**: `boolean`

#### Defined in

[src/leafer/packages/interface/src/renderer/IRenderer.ts:52](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/renderer/IRenderer.ts#L52)

___

### waitAgain

• **waitAgain**: `boolean`

#### Defined in

[src/leafer/packages/interface/src/renderer/IRenderer.ts:54](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/renderer/IRenderer.ts#L54)

___

### changed

• **changed**: `boolean`

#### Defined in

[src/leafer/packages/interface/src/renderer/IRenderer.ts:55](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/renderer/IRenderer.ts#L55)

___

### ignore

• **ignore**: `boolean`

#### Defined in

[src/leafer/packages/interface/src/renderer/IRenderer.ts:56](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/renderer/IRenderer.ts#L56)

___

### config

• **config**: [`IRendererConfig`](IRendererConfig.md)

#### Defined in

[src/leafer/packages/interface/src/renderer/IRenderer.ts:58](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/renderer/IRenderer.ts#L58)

## Methods

### start

▸ **start**(): `void`

#### Returns

`void`

#### Inherited from

[IControl](IControl.md).[start](IControl.md#start)

#### Defined in

[src/leafer/packages/interface/src/control/IControl.ts:2](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/control/IControl.ts#L2)

___

### stop

▸ **stop**(): `void`

#### Returns

`void`

#### Inherited from

[IControl](IControl.md).[stop](IControl.md#stop)

#### Defined in

[src/leafer/packages/interface/src/control/IControl.ts:3](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/control/IControl.ts#L3)

___

### destroy

▸ **destroy**(): `void`

#### Returns

`void`

#### Inherited from

[IControl](IControl.md).[destroy](IControl.md#destroy)

#### Defined in

[src/leafer/packages/interface/src/control/IControl.ts:4](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/control/IControl.ts#L4)

___

### update

▸ **update**(`change?`): `void`

#### Parameters

| Name      | Type      |
| :-------- | :-------- |
| `change?` | `boolean` |

#### Returns

`void`

#### Defined in

[src/leafer/packages/interface/src/renderer/IRenderer.ts:60](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/renderer/IRenderer.ts#L60)

___

### requestLayout

▸ **requestLayout**(): `void`

#### Returns

`void`

#### Defined in

[src/leafer/packages/interface/src/renderer/IRenderer.ts:62](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/renderer/IRenderer.ts#L62)

___

### checkRender

▸ **checkRender**(): `void`

#### Returns

`void`

#### Defined in

[src/leafer/packages/interface/src/renderer/IRenderer.ts:64](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/renderer/IRenderer.ts#L64)

___

### render

▸ **render**(`callback?`): `void`

#### Parameters

| Name        | Type                        |
| :---------- | :-------------------------- |
| `callback?` | [`IFunction`](IFunction.md) |

#### Returns

`void`

#### Defined in

[src/leafer/packages/interface/src/renderer/IRenderer.ts:65](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/renderer/IRenderer.ts#L65)

___

### renderAgain

▸ **renderAgain**(): `void`

#### Returns

`void`

#### Defined in

[src/leafer/packages/interface/src/renderer/IRenderer.ts:66](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/renderer/IRenderer.ts#L66)

___

### renderOnce

▸ **renderOnce**(`callback?`): `void`

#### Parameters

| Name        | Type                        |
| :---------- | :-------------------------- |
| `callback?` | [`IFunction`](IFunction.md) |

#### Returns

`void`

#### Defined in

[src/leafer/packages/interface/src/renderer/IRenderer.ts:67](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/renderer/IRenderer.ts#L67)

___

### partRender

▸ **partRender**(): `void`

#### Returns

`void`

#### Defined in

[src/leafer/packages/interface/src/renderer/IRenderer.ts:68](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/renderer/IRenderer.ts#L68)

___

### clipRender

▸ **clipRender**(`bounds`): `void`

#### Parameters

| Name     | Type                    |
| :------- | :---------------------- |
| `bounds` | [`IBounds`](IBounds.md) |

#### Returns

`void`

#### Defined in

[src/leafer/packages/interface/src/renderer/IRenderer.ts:69](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/renderer/IRenderer.ts#L69)

___

### fullRender

▸ **fullRender**(): `void`

#### Returns

`void`

#### Defined in

[src/leafer/packages/interface/src/renderer/IRenderer.ts:70](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/renderer/IRenderer.ts#L70)

___

### addBlock

▸ **addBlock**(`block`, `leafList?`): `void`

#### Parameters

| Name        | Type                        |
| :---------- | :-------------------------- |
| `block`     | [`IBounds`](IBounds.md)     |
| `leafList?` | [`ILeafList`](ILeafList.md) |

#### Returns

`void`

#### Defined in

[src/leafer/packages/interface/src/renderer/IRenderer.ts:72](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/renderer/IRenderer.ts#L72)

___

### mergeBlocks

▸ **mergeBlocks**(): `void`

#### Returns

`void`

#### Defined in

[src/leafer/packages/interface/src/renderer/IRenderer.ts:73](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/renderer/IRenderer.ts#L73)
