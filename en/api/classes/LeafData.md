# Class: LeafData

## Hierarchy

- **`LeafData`**

  ↳ [`UIData`](UIData.md)

## Implements

- [`ILeafData`](../interfaces/ILeafData.md)

## Table of contents

### Constructors

- [constructor](LeafData.md#constructor)

### Properties

- [\_\_leaf](LeafData.md#__leaf)
- [\_\_input](LeafData.md#__input)
- [\_\_middle](LeafData.md#__middle)
- [\_\_single](LeafData.md#__single)
- [\_\_naturalWidth](LeafData.md#__naturalwidth)
- [\_\_naturalHeight](LeafData.md#__naturalheight)
- [\_\_pathForRender](LeafData.md#__pathforrender)
- [\_\_useStroke](LeafData.md#__usestroke)

### Accessors

- [\_\_useNaturalRatio](LeafData.md#__usenaturalratio)
- [\_\_isLinePath](LeafData.md#__islinepath)
- [\_\_usePathBox](LeafData.md#__usepathbox)
- [\_\_blendMode](LeafData.md#__blendmode)

### Methods

- [\_\_get](LeafData.md#__get)
- [\_\_getData](LeafData.md#__getdata)
- [\_\_setInput](LeafData.md#__setinput)
- [\_\_getInput](LeafData.md#__getinput)
- [\_\_removeInput](LeafData.md#__removeinput)
- [\_\_getInputData](LeafData.md#__getinputdata)
- [\_\_setMiddle](LeafData.md#__setmiddle)
- [\_\_getMiddle](LeafData.md#__getmiddle)
- [\_\_checkSingle](LeafData.md#__checksingle)
- [\_\_removeNaturalSize](LeafData.md#__removenaturalsize)
- [destroy](LeafData.md#destroy)

## Constructors

### constructor

• **new LeafData**(`leaf`): [`LeafData`](LeafData.md)

#### Parameters

| Name   | Type                              |
| :----- | :-------------------------------- |
| `leaf` | [`ILeaf`](../interfaces/ILeaf.md) |

#### Returns

[`LeafData`](LeafData.md)

#### Defined in

[src/leafer/packages/display-module/data/src/LeafData.ts:36](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/display-module/data/src/LeafData.ts#L36)

## Properties

### \_\_leaf

• **\_\_leaf**: [`ILeaf`](../interfaces/ILeaf.md)

#### Implementation of

[ILeafData](../interfaces/ILeafData.md).[__leaf](../interfaces/ILeafData.md#__leaf)

#### Defined in

[src/leafer/packages/display-module/data/src/LeafData.ts:7](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/display-module/data/src/LeafData.ts#L7)

___

### \_\_input

• **\_\_input**: [`IObject`](../interfaces/IObject.md)

#### Implementation of

[ILeafData](../interfaces/ILeafData.md).[__input](../interfaces/ILeafData.md#__input)

#### Defined in

[src/leafer/packages/display-module/data/src/LeafData.ts:8](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/display-module/data/src/LeafData.ts#L8)

___

### \_\_middle

• **\_\_middle**: [`IObject`](../interfaces/IObject.md)

#### Implementation of

[ILeafData](../interfaces/ILeafData.md).[__middle](../interfaces/ILeafData.md#__middle)

#### Defined in

[src/leafer/packages/display-module/data/src/LeafData.ts:9](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/display-module/data/src/LeafData.ts#L9)

___

### \_\_single

• **\_\_single**: `boolean`

#### Implementation of

[ILeafData](../interfaces/ILeafData.md).[__single](../interfaces/ILeafData.md#__single)

#### Defined in

[src/leafer/packages/display-module/data/src/LeafData.ts:11](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/display-module/data/src/LeafData.ts#L11)

___

### \_\_naturalWidth

• `Optional` **\_\_naturalWidth**: `number`

#### Implementation of

[ILeafData](../interfaces/ILeafData.md).[__naturalWidth](../interfaces/ILeafData.md#__naturalwidth)

#### Defined in

[src/leafer/packages/display-module/data/src/LeafData.ts:13](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/display-module/data/src/LeafData.ts#L13)

___

### \_\_naturalHeight

• `Optional` **\_\_naturalHeight**: `number`

#### Implementation of

[ILeafData](../interfaces/ILeafData.md).[__naturalHeight](../interfaces/ILeafData.md#__naturalheight)

#### Defined in

[src/leafer/packages/display-module/data/src/LeafData.ts:14](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/display-module/data/src/LeafData.ts#L14)

___

### \_\_pathForRender

• `Optional` **\_\_pathForRender**: [`IPathCommandData`](../modules.md#ipathcommanddata)

#### Implementation of

[ILeafData](../interfaces/ILeafData.md).[__pathForRender](../interfaces/ILeafData.md#__pathforrender)

#### Defined in

[src/leafer/packages/display-module/data/src/LeafData.ts:16](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/display-module/data/src/LeafData.ts#L16)

___

### \_\_useStroke

• `Optional` **\_\_useStroke**: `boolean`

#### Implementation of

[ILeafData](../interfaces/ILeafData.md).[__useStroke](../interfaces/ILeafData.md#__usestroke)

#### Defined in

[src/leafer/packages/display-module/data/src/LeafData.ts:18](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/display-module/data/src/LeafData.ts#L18)

## Accessors

### \_\_useNaturalRatio

• `get` **__useNaturalRatio**(): `boolean`

#### Returns

`boolean`

#### Implementation of

[ILeafData](../interfaces/ILeafData.md).[__useNaturalRatio](../interfaces/ILeafData.md#__usenaturalratio)

#### Defined in

[src/leafer/packages/display-module/data/src/LeafData.ts:19](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/display-module/data/src/LeafData.ts#L19)

___

### \_\_isLinePath

• `get` **__isLinePath**(): `boolean`

#### Returns

`boolean`

#### Implementation of

[ILeafData](../interfaces/ILeafData.md).[__isLinePath](../interfaces/ILeafData.md#__islinepath)

#### Defined in

[src/leafer/packages/display-module/data/src/LeafData.ts:21](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/display-module/data/src/LeafData.ts#L21)

___

### \_\_usePathBox

• `get` **__usePathBox**(): `boolean`

#### Returns

`boolean`

#### Implementation of

[ILeafData](../interfaces/ILeafData.md).[__usePathBox](../interfaces/ILeafData.md#__usepathbox)

#### Defined in

[src/leafer/packages/display-module/data/src/LeafData.ts:26](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/display-module/data/src/LeafData.ts#L26)

___

### \_\_blendMode

• `get` **__blendMode**(): `string`

#### Returns

`string`

#### Implementation of

[ILeafData](../interfaces/ILeafData.md).[__blendMode](../interfaces/ILeafData.md#__blendmode)

#### Defined in

[src/leafer/packages/display-module/data/src/LeafData.ts:30](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/display-module/data/src/LeafData.ts#L30)

## Methods

### \_\_get

▸ **__get**(`name`): `any`

#### Parameters

| Name   | Type     |
| :----- | :------- |
| `name` | `string` |

#### Returns

`any`

#### Implementation of

[ILeafData](../interfaces/ILeafData.md).[__get](../interfaces/ILeafData.md#__get)

#### Defined in

[src/leafer/packages/display-module/data/src/LeafData.ts:40](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/display-module/data/src/LeafData.ts#L40)

___

### \_\_getData

▸ **__getData**(): [`IObject`](../interfaces/IObject.md)

#### Returns

[`IObject`](../interfaces/IObject.md)

#### Implementation of

[ILeafData](../interfaces/ILeafData.md).[__getData](../interfaces/ILeafData.md#__getdata)

#### Defined in

[src/leafer/packages/display-module/data/src/LeafData.ts:48](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/display-module/data/src/LeafData.ts#L48)

___

### \_\_setInput

▸ **__setInput**(`name`, `value`): `void`

#### Parameters

| Name    | Type     |
| :------ | :------- |
| `name`  | `string` |
| `value` | `any`    |

#### Returns

`void`

#### Implementation of

[ILeafData](../interfaces/ILeafData.md).[__setInput](../interfaces/ILeafData.md#__setinput)

#### Defined in

[src/leafer/packages/display-module/data/src/LeafData.ts:60](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/display-module/data/src/LeafData.ts#L60)

___

### \_\_getInput

▸ **__getInput**(`name`): `any`

#### Parameters

| Name   | Type     |
| :----- | :------- |
| `name` | `string` |

#### Returns

`any`

#### Implementation of

[ILeafData](../interfaces/ILeafData.md).[__getInput](../interfaces/ILeafData.md#__getinput)

#### Defined in

[src/leafer/packages/display-module/data/src/LeafData.ts:65](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/display-module/data/src/LeafData.ts#L65)

___

### \_\_removeInput

▸ **__removeInput**(`name`): `void`

#### Parameters

| Name   | Type     |
| :----- | :------- |
| `name` | `string` |

#### Returns

`void`

#### Implementation of

[ILeafData](../interfaces/ILeafData.md).[__removeInput](../interfaces/ILeafData.md#__removeinput)

#### Defined in

[src/leafer/packages/display-module/data/src/LeafData.ts:76](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/display-module/data/src/LeafData.ts#L76)

___

### \_\_getInputData

▸ **__getInputData**(`names?`, `options?`): [`IObject`](../interfaces/IObject.md)

#### Parameters

| Name       | Type                                                                                                      |
| :--------- | :-------------------------------------------------------------------------------------------------------- |
| `names?`   | `string`[] \\| [`IObject`](../interfaces/IObject.md) |
| `options?` | [`IJSONOptions`](../interfaces/IJSONOptions.md)                                                           |

#### Returns

[`IObject`](../interfaces/IObject.md)

#### Implementation of

[ILeafData](../interfaces/ILeafData.md).[__getInputData](../interfaces/ILeafData.md#__getinputdata)

#### Defined in

[src/leafer/packages/display-module/data/src/LeafData.ts:80](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/display-module/data/src/LeafData.ts#L80)

___

### \_\_setMiddle

▸ **__setMiddle**(`name`, `value`): `void`

#### Parameters

| Name    | Type     |
| :------ | :------- |
| `name`  | `string` |
| `value` | `any`    |

#### Returns

`void`

#### Implementation of

[ILeafData](../interfaces/ILeafData.md).[__setMiddle](../interfaces/ILeafData.md#__setmiddle)

#### Defined in

[src/leafer/packages/display-module/data/src/LeafData.ts:120](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/display-module/data/src/LeafData.ts#L120)

___

### \_\_getMiddle

▸ **__getMiddle**(`name`): `any`

#### Parameters

| Name   | Type     |
| :----- | :------- |
| `name` | `string` |

#### Returns

`any`

#### Implementation of

[ILeafData](../interfaces/ILeafData.md).[__getMiddle](../interfaces/ILeafData.md#__getmiddle)

#### Defined in

[src/leafer/packages/display-module/data/src/LeafData.ts:125](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/display-module/data/src/LeafData.ts#L125)

___

### \_\_checkSingle

▸ **__checkSingle**(): `void`

#### Returns

`void`

#### Implementation of

[ILeafData](../interfaces/ILeafData.md).[__checkSingle](../interfaces/ILeafData.md#__checksingle)

#### Defined in

[src/leafer/packages/display-module/data/src/LeafData.ts:129](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/display-module/data/src/LeafData.ts#L129)

___

### \_\_removeNaturalSize

▸ **__removeNaturalSize**(): `void`

#### Returns

`void`

#### Implementation of

[ILeafData](../interfaces/ILeafData.md).[__removeNaturalSize](../interfaces/ILeafData.md#__removenaturalsize)

#### Defined in

[src/leafer/packages/display-module/data/src/LeafData.ts:143](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/display-module/data/src/LeafData.ts#L143)

___

### destroy

▸ **destroy**(): `void`

#### Returns

`void`

#### Implementation of

[ILeafData](../interfaces/ILeafData.md).[destroy](../interfaces/ILeafData.md#destroy)

#### Defined in

[src/leafer/packages/display-module/data/src/LeafData.ts:147](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/display-module/data/src/LeafData.ts#L147)
