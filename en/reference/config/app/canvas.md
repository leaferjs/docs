# Application & Engine Configuration

### [Basic](./base.md)     [Viewport Type](./type.md)     Canvas     [Pointer](./pointer.md)     [Multi-touch](./multiTouch.md)     [Touch](./touch.md)     [Wheel](./wheel.md)     [Pan View](./move.md)     [Zoom View](./zoom.md)

##

Configuration related to canvas creation during engine initialization.

:::tip Note
In the [App structure](../../../guide/advanced/app.md), these settings can only be applied to the config of the [App](../../display/App.md) instance.
:::

## Key Properties

### view: `object` | `string`

The view container where the engine is mounted.

Supports `window`, `div`, or `canvas` DOM elements. Note that when using an ID string, do not include the `#` symbol.

### shadowDOM: `boolean`

是否为 shaodwDOM，用于支持微前端环境。

### width: `number`

Canvas width.

### height: `number`

Canvas height.

### pixelRatio: `number`

Canvas pixel ratio. By default, it uses the device pixel ratio (1 for standard screens, 2 for HD, 3 for ultra-HD).

### fill: `string`

Background color.

### hittable: `boolean`

是否响应碰撞事件（交互事件）。

### smooth: `boolean`

Whether to render images and canvas elements smoothly. This may introduce slight blurring, but generally produces more natural visuals and avoids aliasing.

To prevent image blurring, you can also configure the [config.pixelSnap](./base.md#pixelsnap-boolean) property.

```ts
// To make smooth take effect in real time, you also need to update canvas smooth
leafer.canvas.smooth = true
// app.tree.canvas.smooth = true

leafer.forceRender() // Force a full canvas re-render if needed
```

### contextSettings: `ICanvasRenderingContext2DSettings`

Native canvas context settings. [Learn more](https://developer.mozilla.org/en-US/docs/Web/API/HTMLCanvasElement/getContext#contextattributes).

```ts
canvas.getContext('2d', settings)

interface ICanvasRenderingContext2DSettings {
  alpha?: boolean // whether canvas contains alpha channel, default false
  colorSpace?: 'display-p3' | 'srgb' // color space, default srgb
  desynchronized?: boolean // low-latency rendering, default false
  willReadFrequently?: boolean // optimize getImageData(), default false
}
```

## 自适应布局

When `width` or `height` is not specified, the canvas will automatically adapt its layout.

### top: `number`

Distance from the top, default is 0.

### left: `number`

Distance from the left, default is 0.

### right: `number`

Distance from the right, default is 0.

### bottom: `number`

Distance from the bottom, default is 0.

## Auto Growth

### grow: `boolean` | `'box'` | `'render'`

Whether the canvas automatically grows to fit content. Default is `false`.

This feature is not supported in the [App structure](../../../guide/advanced/app.md).

`true` or `'render'`: resize based on the render bounding box of content

`'box'`: resize based on the box bounding box of content

### growWidth: `boolean`

Controls whether width grows independently. Defaults to the same as `grow`.

### growHeight: `boolean`

Controls whether height grows independently. Defaults to the same as `grow`.

## Example

### Disable interaction events

:::code-group
<<< @/code/app/config/hittable.ts [Leafer]

<<< @/code/app/config/app/hittable.ts [App]
:::
