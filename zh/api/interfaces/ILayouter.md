# Interface: ILayouter

## Hierarchy

- [`IControl`](IControl.md)

  ↳ **`ILayouter`**

## Implemented by

- [`Layouter`](../classes/Layouter.md)

## Table of contents

### Properties

- [target](ILayouter.md#target)
- [layoutedBlocks](ILayouter.md#layoutedblocks)
- [extraBlock](ILayouter.md#extrablock)
- [totalTimes](ILayouter.md#totaltimes)
- [times](ILayouter.md#times)
- [disabled](ILayouter.md#disabled)
- [running](ILayouter.md#running)
- [layouting](ILayouter.md#layouting)
- [waitAgain](ILayouter.md#waitagain)
- [config](ILayouter.md#config)
- [\_\_updatedList](ILayouter.md#__updatedlist)

### Methods

- [start](ILayouter.md#start)
- [stop](ILayouter.md#stop)
- [destroy](ILayouter.md#destroy)
- [disable](ILayouter.md#disable)
- [layout](ILayouter.md#layout)
- [layoutAgain](ILayouter.md#layoutagain)
- [layoutOnce](ILayouter.md#layoutonce)
- [partLayout](ILayouter.md#partlayout)
- [fullLayout](ILayouter.md#fulllayout)
- [addExtra](ILayouter.md#addextra)
- [createBlock](ILayouter.md#createblock)
- [getBlocks](ILayouter.md#getblocks)
- [addBlocks](ILayouter.md#addblocks)

## Properties

### target

• **target**: [`ILeaf`](ILeaf.md)

#### Defined in

[src/leafer/packages/interface/src/layouter/ILayouter.ts:36](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/layouter/ILayouter.ts#L36)

___

### layoutedBlocks

• **layoutedBlocks**: [`ILayoutBlockData`](ILayoutBlockData.md)[]

#### Defined in

[src/leafer/packages/interface/src/layouter/ILayouter.ts:37](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/layouter/ILayouter.ts#L37)

___

### extraBlock

• **extraBlock**: [`ILayoutBlockData`](ILayoutBlockData.md)

#### Defined in

[src/leafer/packages/interface/src/layouter/ILayouter.ts:38](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/layouter/ILayouter.ts#L38)

___

### totalTimes

• **totalTimes**: `number`

#### Defined in

[src/leafer/packages/interface/src/layouter/ILayouter.ts:40](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/layouter/ILayouter.ts#L40)

___

### times

• **times**: `number`

#### Defined in

[src/leafer/packages/interface/src/layouter/ILayouter.ts:41](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/layouter/ILayouter.ts#L41)

___

### disabled

• **disabled**: `boolean`

#### Defined in

[src/leafer/packages/interface/src/layouter/ILayouter.ts:43](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/layouter/ILayouter.ts#L43)

___

### running

• **running**: `boolean`

#### Defined in

[src/leafer/packages/interface/src/layouter/ILayouter.ts:44](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/layouter/ILayouter.ts#L44)

___

### layouting

• **layouting**: `boolean`

#### Defined in

[src/leafer/packages/interface/src/layouter/ILayouter.ts:45](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/layouter/ILayouter.ts#L45)

___

### waitAgain

• **waitAgain**: `boolean`

#### Defined in

[src/leafer/packages/interface/src/layouter/ILayouter.ts:47](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/layouter/ILayouter.ts#L47)

___

### config

• **config**: [`ILayouterConfig`](ILayouterConfig.md)

#### Defined in

[src/leafer/packages/interface/src/layouter/ILayouter.ts:49](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/layouter/ILayouter.ts#L49)

___

### \_\_updatedList

• **\_\_updatedList**: [`ILeafList`](ILeafList.md)

#### Defined in

[src/leafer/packages/interface/src/layouter/ILayouter.ts:51](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/layouter/ILayouter.ts#L51)

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

### disable

▸ **disable**(): `void`

#### Returns

`void`

#### Defined in

[src/leafer/packages/interface/src/layouter/ILayouter.ts:53](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/layouter/ILayouter.ts#L53)

___

### layout

▸ **layout**(): `void`

#### Returns

`void`

#### Defined in

[src/leafer/packages/interface/src/layouter/ILayouter.ts:55](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/layouter/ILayouter.ts#L55)

___

### layoutAgain

▸ **layoutAgain**(): `void`

#### Returns

`void`

#### Defined in

[src/leafer/packages/interface/src/layouter/ILayouter.ts:56](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/layouter/ILayouter.ts#L56)

___

### layoutOnce

▸ **layoutOnce**(): `void`

#### Returns

`void`

#### Defined in

[src/leafer/packages/interface/src/layouter/ILayouter.ts:57](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/layouter/ILayouter.ts#L57)

___

### partLayout

▸ **partLayout**(): `void`

#### Returns

`void`

#### Defined in

[src/leafer/packages/interface/src/layouter/ILayouter.ts:58](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/layouter/ILayouter.ts#L58)

___

### fullLayout

▸ **fullLayout**(): `void`

#### Returns

`void`

#### Defined in

[src/leafer/packages/interface/src/layouter/ILayouter.ts:59](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/layouter/ILayouter.ts#L59)

___

### addExtra

▸ **addExtra**(`leaf`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `leaf` | [`ILeaf`](ILeaf.md) |

#### Returns

`void`

#### Defined in

[src/leafer/packages/interface/src/layouter/ILayouter.ts:61](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/layouter/ILayouter.ts#L61)

___

### createBlock

▸ **createBlock**(`data`): [`ILayoutBlockData`](ILayoutBlockData.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | [`ILeaf`](ILeaf.md)[] \| [`ILeafList`](ILeafList.md) |

#### Returns

[`ILayoutBlockData`](ILayoutBlockData.md)

#### Defined in

[src/leafer/packages/interface/src/layouter/ILayouter.ts:63](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/layouter/ILayouter.ts#L63)

___

### getBlocks

▸ **getBlocks**(`list`): [`ILayoutBlockData`](ILayoutBlockData.md)[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `list` | [`ILeafList`](ILeafList.md) |

#### Returns

[`ILayoutBlockData`](ILayoutBlockData.md)[]

#### Defined in

[src/leafer/packages/interface/src/layouter/ILayouter.ts:64](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/layouter/ILayouter.ts#L64)

___

### addBlocks

▸ **addBlocks**(`current`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `current` | [`ILayoutBlockData`](ILayoutBlockData.md)[] |

#### Returns

`void`

#### Defined in

[src/leafer/packages/interface/src/layouter/ILayouter.ts:65](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/layouter/ILayouter.ts#L65)
