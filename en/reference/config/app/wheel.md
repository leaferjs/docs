# Application and Engine Configuration

### [Basics](./base.md)     [Viewport Type](./type.md)     [Canvas](./canvas.md)     [Pointer](./pointer.md)     [Multi-touch](./multiTouch.md)     [Touch](./touch.md)     Wheel     [Panning View](./move.md)     [Zoom View](./zoom.md)

##

Wheel interaction related configuration. Changes made during engine runtime will take effect immediately via [app.config.wheel](../../display/Leafer.md#config-ileaferconfig).

:::tip Note
Under the [App structure](../../../guide/advanced/app.md), settings can only be configured on the [App](../../display/App.md) config.
:::

## Key Properties

### wheel.disabled: `boolean`

Whether to disable wheel events. Default is false.

### wheel.zoomMode: `boolean` ｜ `'mouse'`

Whether to enable zooming the view directly via mouse wheel. Default is false.

:::tip 'mouse'
To support both mouse and touchpad input, some devices may not be accurately detected. Setting this to `'mouse'` enables precise zoom behavior (requires confirmation that the user is using a mouse, not a touchpad).
:::

### wheel.zoomSpeed: `number`

缩放的速度， 用于自定义适配不同浏览器的速度。

Range: 0 to 1.

### wheel.moveSpeed: `number`

滚动的速度， 用于自定义适配不同浏览器的速度。

Range: 0 to 1.

### wheel.rotateSpeed: `number`

旋转的速度， 用于自定义适配不同浏览器的速度。

Range: 0 to 1.

### wheel.posDeltaSpeed: `number`

Positive delta scroll speed. Can be set to a negative value to reverse scrolling.

### wheel.negDeltaSpeed: `number`

Negative delta scroll speed. Can be set to a negative value to reverse scrolling.

### wheel.preventDefault: `boolean`

Whether to prevent the browser’s default page scroll behavior. Default is false.

### wheel.delta: [`IPointData`](../../interface/math/Math.md#ipointdata)

Base delta calibration used for speed tuning across different systems and browsers.

When `moveSpeed` and `zoomSpeed` do not produce expected results, adjust this value for optimal behavior.

Default values:

```ts
  // base speed (affects zoomSpeed), can be tuned per system/browser
  delta: {
    x: 80 / 4, // horizontal wheel delta per tick
    y: 8.0 // vertical wheel delta per tick
  },
```

## Example

### Zoom view directly with mouse wheel

In zoom priority mode, the mouse wheel directly controls zoom. Press the middle mouse button to pan the view.

:::code-group
<<< @/code/app/viewport/app/zoom-mode.ts [App]

<<< @/code/app/viewport/zoom-mode.ts [Leafer]
:::
