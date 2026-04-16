# Application and Engine Configuration

### [Basics](./base.md)     [Viewport Type](./type.md)     [Canvas](./canvas.md)     [Pointer](./pointer.md)     [Multi-touch](./multiTouch.md)     [Touch](./touch.md)     [Wheel](./wheel.md)     [Panning View](./move.md)     Zoom View

##

Zoom view related configuration. Changes made during engine runtime will take effect immediately via [app.config.zoom](../../display/Leafer.md#config-ileaferconfig).

:::tip Note
Under the [App structure](../../../guide/advanced/app.md), settings can only be configured on the [App](../../display/App.md) config.
:::

## Key Properties

### zoom.disabled: `boolean`

Whether to disable zooming the view. Default is false.

### zoom.min: `number`

Minimum zoom scale of the view. Default is 0.02.

### zoom.max: `number`

Maximum zoom scale of the view. Default is 256.

## Example

### Control zoom range of the view

:::code-group
<<< @/code/app/viewport/app/zoom-config.ts [App]

<<< @/code/app/viewport/zoom-config.ts [Leafer]
:::
