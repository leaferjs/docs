<script setup>
import Case from '/component/Case.vue'
</script>

# ImagePaint Object

Pattern fill object, can be assigned to the [fill](../fill.md) or [stroke](../stroke.md) property. Supports using images in svg format.

<case name="ImageFill" editor=false></case>

> In repeat mode, 4k images exceeding 4096 x 2160 will be optimized for display.

## Key Properties

### type: `string`

The fill type is `image`.

The fill type also supports `film` and `video`, which require installing corresponding extension plugins.

### url: `string`

Image URL, supports Blob URL and Data URL (Base64).

We also provide a [Resource](../../resource/Resource.md), which supports converting original image objects and canvas objects to URLs, and preloading images.

### mode?: `ImagePaintMode`

Pattern fill mode, default is cover.

```ts
type ImagePaintMode =
  | 'normal' // normal
  | 'cover' // cover (equivalent to background-size: cover)
  | 'fit' // fit (equivalent to background-size: contain)
  | 'stretch' // stretch, will change image ratio
  | 'clip' // clip
  | 'repeat' // repeat (equivalent to background-repeat: repeat)
```

### format?: `'svg'  | 'jpg' | 'png' | 'webp'`

Supplementary image format, currently mainly used for [svg](../../display/SVG.md) images that cannot be recognized from the URL.

### changeful?: `boolean`

Whether it changes frequently, default is false.

After setting to true, no additional high-performance pattern will be generated. Commonly used for frequently changing URLs such as game sprites or animated images.

### sync?: `boolean`

Whether to synchronously update the image layer cache, default is false (for performance optimization).

When enabled, scaling the image will not produce blur, but will increase performance cost. Use it appropriately.

## Basic Properties

### blendMode?: [`BlendMode`](../blendMode.md)

Blend mode, default is normal.

### visible?: `boolean`

Whether it is visible, default is true.

### opacity?: `number`

Opacity, default is 1. Currently only effective for [color objects](../../interface/ui/Color.md#rgb) and images.

### align: `IAlign`

Background image alignment, similar to CSS `background-position`. Not supported in clip mode.

![Direction Diagram](/svg/deriction.svg)

```ts
// Alignment
type IAlign =
  | 'top-left'
  | 'top'
  | 'top-right'
  | 'right'
  | 'bottom-right'
  | 'bottom'
  | 'bottom-left'
  | 'left'
  | 'center'
```

## cover Mode Properties

### rotation?: `number`

Rotation angle, rotates in increments of 90 degrees.

## fit Mode Properties

### rotation?: `number`

Rotation angle, rotates in increments of 90 degrees.

### padding?: [`IFourNumber`](../../interface/math/Math.md#ifournumber)

Padding, default is 0.

### repeat?: `boolean`

Whether to repeat the background.

## clip Mode Properties

### clipSize?: `ISizeData`

Clip frame size, the clipped content will be automatically stretched to fit the element's width and height.

```ts
interface ISizeData {
  width: number // width
  height: number // height
}
```

### offset?: [`IPointData`](../../interface/math/Math.md#ipointdata)

Offset position.

### size?: `number` ｜ [`IOptionSizeData`](../../../api/interfaces/IOptionSizeData.md)

Image size, automatically converted to scale.

```ts
// Set width or height individually, the other side adapts to the original ratio; setting both will stretch
interface IOptionSizeData {
  width?: number // width, when only width is set, height adapts to the original ratio
  height?: number // height, when only height is set, width adapts to the original ratio
}
```

### scale?: `number` ｜ [`IPointData`](../../interface/math/Math.md#ipointdata)

Scale size, priority is given to the scale calculated from size.

### rotation?: `number`

Rotation angle.

## repeat Mode Properties

### offset?: [`IPointData`](../../interface/math/Math.md#ipointdata)

Offset position.

### size?: `number` ｜ [`IOptionSizeData`](../../../api/interfaces/IOptionSizeData.md)

Image size, automatically converted to scale.

```ts
// Set width or height individually, the other side adapts to the original ratio; setting both will stretch
interface IOptionSizeData {
  width?: number // width, when only width is set, height adapts to the original ratio
  height?: number // height, when only height is set, width adapts to the original ratio
}
```

### scale?: `number` ｜ [`IPointData`](../../interface/math/Math.md#ipointdata)

平铺图片的缩放比例，优先使用 size 换算出的 scale。

### scaleFixed?: `boolean` | `'zoom-in'`

Fix the global scale ratio of repeated images, not affected by canvas scaling. Default is false.

'zoom-in' means fixed only when zooming in (still follows when zooming out).

### rotation?: `number`

Rotation angle, rotates in increments of 90 degrees.

After enabling freeTransform, any angle can be set.

### freeTransform?: `boolean`

Whether to use free transform. This ignores the special rotation logic and is convenient for manual editing.

### gap?: [`IGap`](../../../api/modules.md#igap) | [`IPointGap`](../../../api/interfaces/IPointGap.md)

Spacing between repeated images, default is 0.

```ts
// Setting auto / fit will evenly distribute the remaining space. auto minimum is 0, fit allows negative values.
type IGap = number | 'auto' | 'fit'

interface IPointGap {
  x?: IGap // set x-axis spacing individually
  y?: IGap // set y-axis spacing individually
}
```

### interlace?: `number` | `IPercentData` | `IInterlace`

平铺图片交错排列。

```ts
interface IInterlace {
  type: 'x' | 'y'
  offset: number | IPercentData
}

interface IPercentData {
  type: 'percent'
  value: number
}

// number
interlace: 100 // next row offset 100px on X axis

// percentage
interlace: { type: 'percent', value: 0.5}  // next row offset 50% of pattern size on X axis

// Y-axis interlace
interlace: { // next column offset 50% of pattern size on Y axis
  type: 'y'
  offset:  { type: 'percent', value: 0.5}
}
```

### repeat?: [`IRepeat`](../../../api/modules.md#irepeat)

Repeat mode, can set repetition on x or y axis, default repeats both axes.

Also supports setting the number of tiles on x and y axes individually.

```ts
type IRepeat = boolean | 'x' | 'y' | IPointData

const repeat = { x: 10, y: 6 } // set number of tiles on x and y axes
```

## Sub-stroke Properties

### style?: [`IStrokeStyle`](../../../api/interfaces/IStrokeStyle.md)

When multiple strokes are set for an element, you can configure the sub-stroke style `style` to override the [main stroke style](../stroke.md#描边样式属性).

This can create effects such as dashed lines, or simulate inner, middle, and outer triple strokes. [Learn more](../stroke.md#子描边属性).

## Image Cache

Global configuration for image caching, can be adjusted dynamically as needed.

<<< @/code/display/Image/setting.ts

## 图片跨域

图片跨域的全局配置，可根据需要动态调整。

When set to null, cross-origin images not allowed by the server can be rendered, but exporting the canvas content is not supported (browser limitation).

<<< @/code/display/Image/cross.ts

## Resource

We also provide a [Resource](../../resource/Resource.md), which can preload images. Original image objects and canvas objects can be converted to URLs.

All images in the engine are loaded in an orderly and parallel manner through the Resource. When images are no longer used, they enter a recycle list and will be automatically destroyed when the threshold is reached.

## Image Events

### [ImageEvent](../../event/basic/Image.md)

## 归属

### [UI Element](../../display/UI.md)

## Examples

<case name="ImageFill" index=0 editor=false></case>

### cover Mode

:::code-group
<<< @/code/property/fill/image/cover.ts [Leafer]
<<< @/code/property/fill/image/app/cover.ts [App]
:::

<case name="ImageFill" index=1 editor=false></case>

### cover Mode rotated 90 degrees

:::code-group
<<< @/code/property/fill/image/cover90.ts [Leafer]
<<< @/code/property/fill/image/app/cover90.ts [App]
:::

<case name="ImageFill" index=2 editor=false></case>

### fit Mode

:::code-group
<<< @/code/property/fill/image/fit.ts [Leafer]
<<< @/code/property/fill/image/app/fit.ts [App]
:::

<case name="ImageFill" index=3 editor=false></case>

### stretch Mode

:::code-group
<<< @/code/property/fill/image/stretch.ts [Leafer]
<<< @/code/property/fill/image/app/stretch.ts [App]
:::

<case name="ImageFill" index=4 editor=false></case>

### clip Mode

:::code-group
<<< @/code/property/fill/image/clip.ts [Leafer]
<<< @/code/property/fill/image/app/clip.ts [App]
:::

<case name="ImageFill" index=5 editor=false></case>

### repeat Mode

:::code-group
<<< @/code/property/fill/image/repeat.ts [Leafer]
<<< @/code/property/fill/image/app/repeat.ts [App]
:::

<case name="ImageFill" index=6 editor=false></case>

### repeat Mode rotated 90 degrees

:::code-group
<<< @/code/property/fill/image/repeat90.ts [Leafer]
<<< @/code/property/fill/image/app/repeat90.ts [App]
:::

### repeat Mode does not scale with canvas

<<< @/code/plugin/editor/frame/transparent.ts
