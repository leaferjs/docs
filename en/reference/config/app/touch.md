# Application and Engine Configuration

### [Basics](./base.md)     [Viewport Type](./type.md)     [Canvas](./canvas.md)     [Pointer](./pointer.md)     [Multi-touch](./multiTouch.md)     Touch     [Wheel](./wheel.md)     [Panning View](./move.md)     [Zoom View](./zoom.md)

##

Touch event related configuration. Changes made during engine runtime will take effect immediately via [app.config.touch](../../display/Leafer.md#config-ileaferconfig).

:::tip Note
Under the [App structure](../../../guide/advanced/app.md), settings can only be configured on the [App](../../display/App.md) config.
:::

## Key Properties

### touch.preventDefault: `boolean` | `'auto'`

Whether to prevent the default mobile touch scrolling behavior. Default is 'auto'.

When set to 'auto', elements with draggable/editable behavior or those listening to DragEvent.DRAG can still be dragged independently, while other areas will scroll the page.

When set to true, all dragging is disabled from triggering page scrolling. This is automatically used when enabling [viewport zoom and pan](../../../guide/advanced/viewport.md) features.

When set to false, all dragging will allow page scrolling.

## Example

### Prevent default mobile page scrolling behavior

::: code-group
<<< @/code/app/config/touch.ts [Leafer]

<<< @/code/app/config/app/touch.ts [App]
:::
