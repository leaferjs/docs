# Application & Engine Configuration

### Basic     [Viewport Type](./type.md)     [Canvas](./canvas.md)     [Pointer](./pointer.md)     [Multi-touch](./multiTouch.md)     [Touch](./touch.md)     [Wheel](./wheel.md)     [Pan View](./move.md)     [Zoom View](./zoom.md)

##

Basic configuration for initializing [App](../../display/App.md) and [Leafer](../../display/Leafer.md).

## Key Properties

### start: `boolean`

Whether to automatically start the engine. Default is `true`.

After starting, you can manually control rendering using [app.stop()](../../display/Leafer.md#start) and [app.start()](../../display/Leafer.md#start).

## Render & Layout Properties

When the engine is running, changes to [leafer.config](../../display/Leafer.md#config-ileaferconfig) take effect immediately.

### maxFPS: `number`

Sets the maximum rendering frame rate. By default, it matches the display refresh rate (usually 60 FPS, up to 120 FPS).

Lowering FPS can reduce performance cost. It is recommended to use values divisible by 60, such as 30, 20, or 15.

:::tip Note
In the [App structure](../../../guide/advanced/app.md), this must be set on the config of child Leafer layers such as `ground`, `tree`, and `sky`.
:::

### usePartRender: `boolean`

Whether to enable partial rendering. Default is `true`.

:::tip Note
In the [App structure](../../../guide/advanced/app.md), this must be set on the config of child Leafer layers such as `ground`, `tree`, and `sky`.
:::

### useCellRender: `boolean`

Whether to enable cell-based rendering. Default is `false`.

This can optimize scenarios with a large amount of repeated overlapping content. It is currently a reserved feature and requires future plugin support.

:::tip Note
In the [App structure](../../../guide/advanced/app.md), this must be set on the config of child Leafer layers such as `ground`, `tree`, and `sky`.
:::

### usePartLayout: `boolean`

Whether to enable partial layout. Default is `true`.

:::tip Note
In the [App structure](../../../guide/advanced/app.md), this must be set on the config of child Leafer layers such as `ground`, `tree`, and `sky`.
:::

## Interaction Properties

When the engine is running, changes to [app.config](../../display/Leafer.md#config-ileaferconfig) take effect immediately.

:::tip Note
In the [App structure](../../../guide/advanced/app.md), these can only be set on the config of the [App](../../display/App.md) instance.
:::

### mobile: `boolean`

Whether to optimize for mobile devices (e.g. disabling hover events). The editor can configure [gesture control elements](../../../plugin/in/editor/config/enable.md).

### cursor: `boolean`

Whether to enable cursor support. Default is `true`.

### keyEvent: `boolean`

Whether to enable keyboard events. Default is `true`.

## Pixel Alignment

### pointSnap: `boolean`

Align logical pixels: rounds coordinates during dragging to avoid fractional values.

Changes take effect immediately when modifying [app.config](../../display/Leafer.md#config-ileaferconfig).

### pixelSnap: `boolean`

Align physical pixels: prevents blurring caused by fractional coordinates for centered lines or images.

This does not modify element data. Instead, it rounds pixel values during rendering after applying `pixelRatio`. For 1px centered lines, rounding may cause a 0.5px offset.

To further improve image sharpness, you can also configure the [config.smooth](./canvas.md#smooth-boolean) property.

Changes take effect immediately when modifying [leafer.config / app.tree.config](../../display/Leafer.md#config-ileaferconfig).

## Examples

### Manual Start

When creating a large number of elements asynchronously, manually calling `start()` after creation can improve performance.

::: code-group
<<< @/code/app/config/start.ts [Leafer]

<<< @/code/app/config/app/start.ts [App]
:::

### Disable Partial Rendering

::: code-group
<<< @/code/app/config/partRender.ts [Leafer]

<<< @/code/app/config/app/partRender.ts [App]
:::
