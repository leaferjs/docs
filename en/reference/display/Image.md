<script setup>
import Case from '/component/Case.vue'
</script>

# Image Element

Image object. It supports SVG images. In addition, all shapes also support displaying images via [pattern fill](../UI/paint/image.md).

<case name="ImageFill" editor=false></case>

<br/>

::: tip Inheritance
Image  >  [Rect](./Rect.md)  >  [UI](./UI.md)

<br/>

Note: When using [script tag import](../../guide/install/ui/start.md#via-script-tag), you must use the alias **MyImage** instead of Image.
:::

## Key Properties

### width?: `number`

Width. Defaults to the original image width.

### height?: `number`

Height. Defaults to the original image height.

### url: `string`

Image URL. Supports Blob URLs and Data URLs (Base64).

We also provide a [resource system](../resource/Resource.md) that supports converting raw image objects and canvas objects into URLs, as well as image preloading.

::: tip Note
After setting the url on [Image](./Image.md), you cannot set the [fill](../UI/fill.md) property at the same time (url will override [fill](../UI/fill.md)). However, using [fill](../UI/fill.md) alone instead of url is supported.
:::

## Auxiliary Properties

These properties are also supported by elements using [pattern fill](../UI/paint/image.md) (must be set on the element itself).

### pixelRatio: `number`

Image pixel ratio. Defaults to `1` (2 for retina screens, 3 for ultra-high-resolution screens).

Only effective when using auto width/height images.

### lazy: `boolean`

Whether the image is lazy-loaded. Defaults to `false`. Can improve initial page loading performance.

### placeholderColor: `string`

Placeholder background color. Shown while the image is loading (after a 100ms delay) or when loading fails.

## Readonly Properties

### ready: `boolean`

Whether the image has finished loading.

### image?: [`ILeaferImage`](../../api/interfaces/ILeaferImage.md)

Original image wrapper object. Available only after the image has loaded.

## Helper Methods

### load ()

Manually load the image.

Typically used when the element has not been added to Leafer yet, in order to manually load the image and obtain its natural width and height.

## Image Cache

Global configuration for image caching. Can be adjusted dynamically as needed.

<<< @/code/display/Image/setting.ts

## Image CORS

Global configuration for image cross-origin behavior. Can be adjusted dynamically as needed.

When set to `null`, cross-origin images that are not explicitly allowed by the server can be rendered, but exporting the canvas will not be supported (browser limitation).

<<< @/code/display/Image/cross.ts

## Resource System

We also provide a [resource system](../resource/Resource.md), which supports image preloading and converting raw image objects or canvas objects into URLs.

All images in the engine are loaded through the resource system in an ordered and parallel manner. When images are no longer used, they are moved to a recycle queue and automatically destroyed when a threshold is reached.

<<< @/code/resource/image/load.ts

## Image Events

### [ImageEvent](../event/basic/Image.md)

## Box Element

### [ImageBox](../../plugin/in/box/ImageBox.md)

## Inheritance

### Image  >  [Rect](./Rect.md)  >  [UI](./UI.md)

<!-- ## API

### [Image](../../api/classes/Image.md) -->

## Examples

<case name="ImageFill" index=0 editor=false></case>

### Use default width and height

::: code-group
<<< @/code/display/Image/stretch.ts [Leafer]
<<< @/code/display/Image/app/stretch.ts [App]
:::

### Use fill instead of url

Fill supports multiple fills.

::: code-group
<<< @/code/display/Image/fill.ts [Leafer]
<<< @/code/display/Image/app/fill.ts [App]
:::

### Use Rect instead of Image

If you want to apply fill styles to images, use Rect instead. Rect will also auto-fit image size without explicit width/height and supports multiple fills.

::: code-group
<<< @/code/display/Image/rect.ts [Leafer]
<<< @/code/display/Image/app/rect.ts [App]
:::

### Fixed width, auto height

::: code-group
<<< @/code/display/Image/width.ts [Leafer]
<<< @/code/display/Image/app/width.ts [App]
:::

### Fixed height, auto width

::: code-group
<<< @/code/display/Image/height.ts [Leafer]
<<< @/code/display/Image/app/height.ts [App]
:::

### Image placeholder

::: code-group
<<< @/code/display/Image/placeholder.ts [Leafer]
<<< @/code/display/Image/app/placeholder.ts [App]
:::

### Listen to image load

::: code-group
<<< @/code/event/image/image.ts
<<< @/code/event/image/image.js
:::

### Listen to error

::: code-group
<<< @/code/event/image/error.ts
<<< @/code/event/image/error.js
:::
