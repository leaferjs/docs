<script setup>
import Case from '/component/Case.vue'
</script>

# Canvas Element

Canvas object. It allows free drawing, pixel manipulation, or directly rendering other graphics onto the Canvas.

<case name="Pen" editor=false></case>

<br/>

::: tip Inheritance
Canvas  >  [Rect](./Rect.md)  >  [UI](./UI.md)
:::

## Key Properties

### width: `number`

Canvas height.

### height: `number`

Canvas width.

### pixelRatio: `number`

Canvas resolution. Defaults to `1`.

### smooth: `boolean`

Whether image rendering is smooth. Defaults to `true`.

### safeResize: `boolean`

Whether to preserve previous content when resizing the canvas (may slightly reduce performance). Defaults to `false`.

### contextSettings: `ICanvasRenderingContext2DSettings`

Native canvas context settings. [Learn more](https://developer.mozilla.org/en-US/docs/Web/API/HTMLCanvasElement/getContext#contextattributes).

```ts
canvas.getContext('2d', settings)

interface ICanvasRenderingContext2DSettings {
  alpha?: boolean // whether canvas includes alpha channel, defaults to false
  colorSpace?: 'display-p3' | 'srgb' // color space, defaults to srgb
  desynchronized?: boolean // low-latency rendering, defaults to false
  willReadFrequently?: boolean // optimization for getImageData(), defaults to false
}
```

## Readonly Properties

### ready: `boolean`

Whether [canvas import](#json) has completed.

### canvas: [`ILeaferCanvas`](../../api/interfaces/ILeaferCanvas.md)

Cross-platform canvas wrapper object.

### context: [`ICanvasContext2D`](../../api/interfaces/ICanvasContext2D.md)

Cross-platform `2D` context object, consistent with HTML CanvasRenderingContext2D API.

## Key Methods

### draw ( )

draw(ui: [`UI`](./UI.md) | [`Group`](./Group.md), offset?: [`IPointData`](../../api/interfaces/IPointData.md), scale?: `number` | [`IPointData`](../../api/interfaces/IPointData.md), rotation?: `number`)

Draws graphical elements.

Uses the element’s [inner coordinate system](../../guide/advanced/coordinate.md#inner-内部坐标系) as the base. Currently only supports `2D` canvas.

### paint ( )

Renders the canvas.

Content drawn via `context` must call this method to be rendered.

## JSON

Export JSON: converts canvas data into a base64 URL attribute.

Import JSON: restores the canvas by asynchronously loading an image via the URL attribute. You can listen to [ImageEvent.LOADED](../event/basic/Image.md#imageevent-loaded).

## Inheritance

### Canvas  >  [Rect](./Rect.md)  >  [UI](./UI.md)

<!-- ## API

### [Canvas](../../api/classes/Canvas.md) -->

## Examples

### Using context drawing

::: code-group
<<< @/code/display/Canvas/context.ts [Leafer]
<<< @/code/display/Canvas/app/context.ts [App]
:::

<case name="Pen" index=2 editor=false></case>

### Using graphic elements drawing

::: code-group
<<< @/code/display/Canvas/draw.ts [Leafer]
<<< @/code/display/Canvas/app/draw.ts [App]
:::
