# Interface: ILeafPaint

## Hierarchy

- [`IFilmPlayOptions`](IFilmPlayOptions.md)

  ↳ **`ILeafPaint`**

  ↳↳ [`ILeafStrokePaint`](ILeafStrokePaint.md)

## Table of contents

### Properties

- [nowIndex](ILeafPaint.md#nowindex)
- [pauseIndex](ILeafPaint.md#pauseindex)
- [loop](ILeafPaint.md#loop)
- [speed](ILeafPaint.md#speed)
- [autoplay](ILeafPaint.md#autoplay)
- [frameTime](ILeafPaint.md#frametime)
- [frameTimer](ILeafPaint.md#frametimer)
- [paused](ILeafPaint.md#paused)
- [type](ILeafPaint.md#type)
- [style](ILeafPaint.md#style)
- [strokeStyle](ILeafPaint.md#strokestyle)
- [transform](ILeafPaint.md#transform)
- [image](ILeafPaint.md#image)
- [level](ILeafPaint.md#level)
- [drawLevel](ILeafPaint.md#drawlevel)
- [loadId](ILeafPaint.md#loadid)
- [patternId](ILeafPaint.md#patternid)
- [patternTask](ILeafPaint.md#patterntask)
- [progressTimer](ILeafPaint.md#progresstimer)
- [complex](ILeafPaint.md#complex)
- [isTransparent](ILeafPaint.md#istransparent)
- [data](ILeafPaint.md#data)
- [originPaint](ILeafPaint.md#originpaint)
- [film](ILeafPaint.md#film)

## Properties

### nowIndex

• `Optional` **nowIndex**: `number`

#### Inherited from

[IFilmPlayOptions](IFilmPlayOptions.md).[nowIndex](IFilmPlayOptions.md#nowindex)

#### Defined in

[src/leafer/packages/interface/src/image/ILeaferFilm.ts:52](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/image/ILeaferFilm.ts#L52)

___

### pauseIndex

• `Optional` **pauseIndex**: `number`

#### Inherited from

[IFilmPlayOptions](IFilmPlayOptions.md).[pauseIndex](IFilmPlayOptions.md#pauseindex)

#### Defined in

[src/leafer/packages/interface/src/image/ILeaferFilm.ts:53](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/image/ILeaferFilm.ts#L53)

___

### loop

• `Optional` **loop**: `number`

#### Inherited from

[IFilmPlayOptions](IFilmPlayOptions.md).[loop](IFilmPlayOptions.md#loop)

#### Defined in

[src/leafer/packages/interface/src/image/ILeaferFilm.ts:54](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/image/ILeaferFilm.ts#L54)

___

### speed

• `Optional` **speed**: `number`

#### Inherited from

[IFilmPlayOptions](IFilmPlayOptions.md).[speed](IFilmPlayOptions.md#speed)

#### Defined in

[src/leafer/packages/interface/src/image/ILeaferFilm.ts:55](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/image/ILeaferFilm.ts#L55)

___

### autoplay

• `Optional` **autoplay**: `boolean`

#### Inherited from

[IFilmPlayOptions](IFilmPlayOptions.md).[autoplay](IFilmPlayOptions.md#autoplay)

#### Defined in

[src/leafer/packages/interface/src/image/ILeaferFilm.ts:56](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/image/ILeaferFilm.ts#L56)

___

### frameTime

• `Optional` **frameTime**: `number`

#### Inherited from

[IFilmPlayOptions](IFilmPlayOptions.md).[frameTime](IFilmPlayOptions.md#frametime)

#### Defined in

[src/leafer/packages/interface/src/image/ILeaferFilm.ts:60](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/image/ILeaferFilm.ts#L60)

___

### frameTimer

• `Optional` **frameTimer**: `any`

#### Inherited from

[IFilmPlayOptions](IFilmPlayOptions.md).[frameTimer](IFilmPlayOptions.md#frametimer)

#### Defined in

[src/leafer/packages/interface/src/image/ILeaferFilm.ts:61](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/image/ILeaferFilm.ts#L61)

___

### paused

• `Optional` **paused**: `boolean`

#### Inherited from

[IFilmPlayOptions](IFilmPlayOptions.md).[paused](IFilmPlayOptions.md#paused)

#### Defined in

[src/leafer/packages/interface/src/image/ILeaferFilm.ts:62](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/image/ILeaferFilm.ts#L62)

___

### type

• `Optional` **type**: [`IPaintType`](../modules.md#ipainttype)

#### Defined in

[src/ui/packages/interface/src/type/IComputedType.ts:11](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/interface/src/type/IComputedType.ts#L11)

___

### style

• `Optional` **style**: [`ILeafPaintColor`](../modules.md#ileafpaintcolor)

#### Defined in

[src/ui/packages/interface/src/type/IComputedType.ts:12](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/interface/src/type/IComputedType.ts#L12)

___

### strokeStyle

• `Optional` **strokeStyle**: [`IStrokeComputedStyle`](IStrokeComputedStyle.md)

#### Defined in

[src/ui/packages/interface/src/type/IComputedType.ts:13](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/interface/src/type/IComputedType.ts#L13)

___

### transform

• `Optional` **transform**: [`IMatrixData`](IMatrixData.md)

#### Defined in

[src/ui/packages/interface/src/type/IComputedType.ts:14](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/interface/src/type/IComputedType.ts#L14)

___

### image

• `Optional` **image**: [`ILeaferImage`](ILeaferImage.md)

#### Defined in

[src/ui/packages/interface/src/type/IComputedType.ts:15](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/interface/src/type/IComputedType.ts#L15)

___

### level

• `Optional` **level**: `number`

#### Defined in

[src/ui/packages/interface/src/type/IComputedType.ts:17](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/interface/src/type/IComputedType.ts#L17)

___

### drawLevel

• `Optional` **drawLevel**: `number`

#### Defined in

[src/ui/packages/interface/src/type/IComputedType.ts:18](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/interface/src/type/IComputedType.ts#L18)

___

### loadId

• `Optional` **loadId**: `number`

#### Defined in

[src/ui/packages/interface/src/type/IComputedType.ts:20](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/interface/src/type/IComputedType.ts#L20)

___

### patternId

• `Optional` **patternId**: `string` \| `number`

#### Defined in

[src/ui/packages/interface/src/type/IComputedType.ts:21](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/interface/src/type/IComputedType.ts#L21)

___

### patternTask

• `Optional` **patternTask**: [`ITaskItem`](ITaskItem.md)

#### Defined in

[src/ui/packages/interface/src/type/IComputedType.ts:22](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/interface/src/type/IComputedType.ts#L22)

___

### progressTimer

• `Optional` **progressTimer**: `any`

#### Defined in

[src/ui/packages/interface/src/type/IComputedType.ts:23](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/interface/src/type/IComputedType.ts#L23)

___

### complex

• `Optional` **complex**: `boolean` \| `2`

#### Defined in

[src/ui/packages/interface/src/type/IComputedType.ts:25](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/interface/src/type/IComputedType.ts#L25)

___

### isTransparent

• `Optional` **isTransparent**: `boolean`

#### Defined in

[src/ui/packages/interface/src/type/IComputedType.ts:27](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/interface/src/type/IComputedType.ts#L27)

___

### data

• `Optional` **data**: [`ILeafPaintPatternData`](ILeafPaintPatternData.md)

#### Defined in

[src/ui/packages/interface/src/type/IComputedType.ts:28](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/interface/src/type/IComputedType.ts#L28)

___

### originPaint

• `Optional` **originPaint**: [`IPaint`](../modules.md#ipaint)

#### Defined in

[src/ui/packages/interface/src/type/IComputedType.ts:29](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/interface/src/type/IComputedType.ts#L29)

___

### film

• `Optional` **film**: `boolean`

#### Defined in

[src/ui/packages/interface/src/type/IComputedType.ts:31](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/interface/src/type/IComputedType.ts#L31)
