# ImageEvent

Image event.

::: tip Inheritance
ImageEvent  >  [Event](../basic/Event.md)
:::

## Key Properties

### image: [`ILeaferImage`](../../../api/interfaces/ILeaferImage.md)

Original wrapped image object.

### error: `string` | `object`

Image loading error information.

## Auxiliary Properties

Used to distinguish cases where multiple image patterns are used within a single shape.

### attrName: `string`

Pattern fill attribute name: `fill` | `stroke`

### attrValue: [`ImagePaint`](../../UI/paint/image.md)

Pattern fill attribute value.

## Event Names

### ImageEvent.LOAD

Image starts loading.

`image.load`

### ImageEvent.LOADED

Image loading completed.

`image.loaded`

### ImageEvent.ERROR

Image loading failed.

`image.error`

## Inherited Events

### ImageEvent  >  [Event](../basic/Event.md)

<!-- ## API

### [ImageEvent](../../../api/classes/LeaferEvent.md) -->

## Example

### Listen to image loading on Image

::: code-group
<<< @/code/event/image/image.ts
<<< @/code/event/image/image.js
:::

### Listen to image loading in fill

::: code-group
<<< @/code/event/image/rect.ts
<<< @/code/event/image/rect.js
:::

### Listen to error

::: code-group
<<< @/code/event/image/error.ts
<<< @/code/event/image/error.js
:::
