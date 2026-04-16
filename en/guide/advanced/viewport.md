# Zoom and Pan View

Use mouse wheel / touchpad scrolling or pinch gestures to zoom and pan the view, similar to browser or design software viewport interactions.

The engine defaults to [block scene type](../../reference/config/app/type.md#block-场景类型), and you can quickly change the viewport type by configuring [leafer.config.type](../../reference/config/app/type.md), which will automatically add the corresponding scene interaction logic.

:::tip Notes
You need to install the [viewport plugin](../../plugin/in/viewport/index.md) to use it, or directly install [leafer-editor](../install/editor/start.md) (this plugin is already integrated).

:::

![window](/svg/window.svg)

You can also use the [view control plugin](../../plugin/in/view/index.md) / [scrollbar plugin](../../plugin/in/scroll/index.md) to conveniently control the view, supporting centering content and focusing on specific elements.

## Manually Zoom and Pan View

By modifying the [Leafer viewport properties](../../reference/display/Leafer.md#视口属性-viewport) / [App viewport properties](../../reference/display/App.md#视口属性-viewport) such as [x](../../reference/UI/layout.md), [y](../../reference/UI/layout.md), [scale](../../reference/UI/layout.md#scale-number-ipointdata), [scaleX](../../reference/UI/layout.md#scalex-number), [scaleY](../../reference/UI/layout.md#scaley-number), you can zoom and pan the view.

## viewport Types

Zooming and panning via mouse wheel / touchpad scroll or pinch gestures will prevent the default [native right-click menu](../../reference/config/app/pointer.md#pointer-preventdefaultmenu-boolean).

### Pan View Operations

1. Mobile / touchpad: two-finger drag.
2. Mouse: wheel scroll (vertical), Shift + wheel (horizontal).

For more configuration, see [app.config.move](../../reference/config/app/move.md), which provides rich options for different scenarios.

### Zoom View Operations

1. Mobile / touchpad: pinch gesture.
2. Mouse: Ctrl / Command + wheel.

For more configuration, see [app.config.zoom](../../reference/config/app/zoom.md) / [app.config.wheel](../../reference/config/app/wheel.md).

::: code-group

<<< @/code/app/config/type/app/viewport.ts [App]

<<< @/code/app/config/type/viewport.ts [Leafer]

<<< @/code/app/config/type/origin/viewport.ts [Implementation]
:::

## custom viewport Type

On top of [viewport mode](#viewport-视口类型), customize the zoom and pan handling logic.

:::code-group
<<< @/code/app/config/type/app/custom.ts [App]

<<< @/code/app/config/type/custom.ts [Leafer]

<<< @/code/app/config/type/origin/custom.ts [Implementation]
:::

## design viewport Type

On top of [viewport mode](#viewport-视口类型), adds support for holding middle mouse button / Space + drag to pan the view, and limits zoom range to 0.01 ~ 256, suitable for graphic editing and design applications.

:::code-group
<<< @/code/app/config/type/app/design.ts [App]

<<< @/code/app/config/type/design.ts [Leafer]

<<< @/code/app/config/type/origin/design.ts [Implementation]
:::

## document viewport Type

On top of [viewport mode](#viewport-视口类型), restricts scrolling within valid content areas and limits zoom range to 1 ~ ∞, suitable for document-based applications.

:::code-group
<<< @/code/app/config/type/app/document.ts [App]

<<< @/code/app/config/type/document.ts [Leafer]

<<< @/code/app/config/type/origin/document.ts [Implementation]
:::

## Mobile Gesture Control Elements

The [graphic editor](../../plugin/in/editor/index.md) can be configured with [mobile mode](../../reference/config/app/base.md#mobile-boolean) and [gesture control elements](../../plugin/in/editor/config/enable.md).

You can also listen to [viewport interaction events](#视口交互事件) yourself to implement gesture-controlled elements (requires [stopping event propagation](../../reference/event/basic/Event.md#stop)).

## Listen to Viewport Changes

The engine can listen to [PropertyEvent](../../reference/event/basic/Property.md) to detect changes in [Leafer viewport properties](../../reference/display/Leafer.md#视口属性-viewport) / [App viewport properties](../../reference/display/App.md#视口属性-viewport), such as [x](../../reference/UI/layout.md), [y](../../reference/UI/layout.md), [scaleX](../../reference/UI/layout.md#scalex-number), [scaleY](../../reference/UI/layout.md#scaley-number), to synchronize related logic.

When a Leafer instance is used as a [zoom-pan layer](../../reference/display/Leafer.md#视口属性-viewport), it can directly listen to its own [view change events](../../reference/event/basic/Leafer.md#视图事件).

## More Examples

### [Mouse wheel zoom directly](../../reference/config/app/wheel.md#鼠标滚动直接缩放视图)

### [Control zoom range](../../reference/config/app/zoom.md#控制视图缩放范围)

### [Specify zoom layer](../../reference/display/Leafer.md#单独指定缩放层)

### [Listen to Leafer zoom change events](../../reference/event/basic/Leafer.md#监听-leafer-缩放变化事件)

## Viewport Interaction Events

### [MoveEvent](../../reference/event/ui/Move.md)     [ZoomEvent](../../reference/event/ui/Zoom.md)     [RotateEvent](../../reference/event/ui/Rotate.md)

## Next Step

### [Coordinate Conversion](./coordinate.md)
