# Interface: IFilterModule

## Table of contents

### Properties

- [list](IFilterModule.md#list)

### Methods

- [register](IFilterModule.md#register)
- [apply](IFilterModule.md#apply)
- [getSpread](IFilterModule.md#getspread)

## Properties

### list

• **list**: `IFilterProcessorMap`

#### Defined in

[src/ui/packages/interface/src/module/IFilter.ts:8](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/interface/src/module/IFilter.ts#L8)

## Methods

### register

▸ **register**(`name`, `filterProcessor`): `void`

#### Parameters

| Name              | Type                                      |
| :---------------- | :---------------------------------------- |
| `name`            | `string`                                  |
| `filterProcessor` | [`IFilterProcessor`](IFilterProcessor.md) |

#### Returns

`void`

#### Defined in

[src/ui/packages/interface/src/module/IFilter.ts:9](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/interface/src/module/IFilter.ts#L9)

___

### apply

▸ **apply**(`filters`, `ui`, `bounds`, `currentCanvas`, `originCanvas`, `shape`): `void`

#### Parameters

| Name            | Type                                                                          |
| :-------------- | :---------------------------------------------------------------------------- |
| `filters`       | [`IFilter`](IFilter.md)[] |
| `ui`            | [`IUI`](IUI.md)                                                               |
| `bounds`        | [`IMatrixWithBoundsScaleData`](IMatrixWithBoundsScaleData.md)                 |
| `currentCanvas` | [`ILeaferCanvas`](ILeaferCanvas.md)                                           |
| `originCanvas`  | [`ILeaferCanvas`](ILeaferCanvas.md)                                           |
| `shape`         | [`ICachedShape`](ICachedShape.md)                                             |

#### Returns

`void`

#### Defined in

[src/ui/packages/interface/src/module/IFilter.ts:10](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/interface/src/module/IFilter.ts#L10)

___

### getSpread

▸ **getSpread**(`filters`): `number`

#### Parameters

| Name      | Type                                                                          |
| :-------- | :---------------------------------------------------------------------------- |
| `filters` | [`IFilter`](IFilter.md)[] |

#### Returns

`number`

#### Defined in

[src/ui/packages/interface/src/module/IFilter.ts:11](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/interface/src/module/IFilter.ts#L11)
