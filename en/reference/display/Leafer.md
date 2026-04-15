# Leafer

Create a Leafer engine. Learn about initialization [engine configuration](../config/app/base.md) and [viewport interaction](../../guide/advanced/viewport.md).

<br/>

![leafer](/svg/leafer.svg)

<br/>

::: tip Inheritance
Leafer  >  [Group](./Group.md)  >  [UI](./UI.md)
:::

## Key Properties

### app: `App | Leafer`

App instance. If it does not exist, it is itself.

### isApp: `boolean`

Whether it is an App instance. Defaults to `false`.

### width: `number`

Get/set canvas width.

If set to an empty value, it will use automatic layout (using the actual canvas parent div or other container as the layout container).

### height: `number`

Get/set canvas height.

If set to an empty value, it will use automatic layout (using the actual canvas parent div or other container as the layout container).

### pixelRatio: `number`

Get/set canvas pixel ratio. Defaults to the device pixel ratio (1 for normal screens, 2 for high-DPI screens, 3 for ultra-high-DPI screens).

### fill: `string`

Get/set canvas background color.

### hittable: `boolean`

Whether it responds to interaction events. Defaults to `true`.

### hitChildren: `boolean`

Whether child elements respond to interaction events. Defaults to `true`.

### config: [`ILeaferConfig`](../config/app/base.md)

Engine configuration object. Some configuration options can be modified at runtime and take effect immediately.

### canvas: [`ILeaferCanvas`](../../api/interfaces/ILeaferCanvas.md)

Cross-platform canvas wrapper object.

Get the real canvas object:

<<< @/code/display/Leafer/canvas.ts

You can combine it with the [RenderEvent.END](../event/basic/Render.md) event to drawImage() onto another small canvas for high-performance overview rendering.

## Viewport Properties (viewport)

### zoomLayer: [`Group`](./Group.md)

Zoom/pan layer. Defaults to the Leafer itself. You can [assign a custom zoom layer](./Leafer.md#independent-zoom-layer).

You can manually modify its [x](../UI/layout.md), [y](../UI/layout.md), [scale](../UI/layout.md#scale-number-ipointdata), [scaleX](../UI/layout.md#scalex-number), and [scaleY](../UI/layout.md#scaley-number) to control viewport transform. You can also listen to [viewport events](../event/basic/Leafer.md#view-events).

The [view control plugin](../../plugin/in/view/index.md) and [scrollbar plugin](../../plugin/in/scroll/index.md) can be used for convenient viewport control, including centering content or focusing on specific elements.

### Canvas translation (move)

### x: `number`

Canvas translation on the x-axis.

### y: `number`

Canvas translation on the y-axis.

### Canvas scaling (zoom)

### scaleX: `number`

Scale on the x-axis. Negative values indicate horizontal mirroring.

### scaleY: `number`

Scale on the y-axis. Negative values indicate vertical mirroring.

### Computed Property

### scale: `number | [IPointData](../interface/math/Math.md#ipointdata)`

Quickly set/get scaleX and scaleY.

```ts
app.tree.scale = 2 // scaleX = 2, scaleY = 2
console.log(app.tree.scale) // 2

app.tree.scale = { x: 1, y: 2 } // scaleX = 1, scaleY = 2
console.log(app.tree.scale) // {x:1, y:2}
```

## State Properties

### created: `boolean`

Whether the engine and all child elements have been created (initial creation completed).

### ready: `boolean`

Whether the engine is ready (initial layout completed).

### viewReady: `boolean`

Whether the view is ready (first render completed).

<<< @/code/display/Leafer/ready.ts

### viewCompleted: `boolean`

Whether the view has fully completed loading (all images in the canvas loaded and rendered). This value may change over time.

### running: `boolean`

Whether the engine is running.

## FPS: `number`

Real-time rendering frame rate. Defaults to the display refresh rate (usually 60 FPS, up to 120 FPS).

You can configure [maxFPS](../config/app/base.md#maxfps-number) to limit rendering FPS and save performance.

### layoutLocked: `boolean`

Whether layout is locked. Can be unlocked via [unlockLayout()](#locklayout).

### cursorPoint: [`IPointData`](../interface/math/Math#ipointdata)

Current cursor position in [world coordinates](../../guide/advanced/coordinate.md#world-coordinate-system).

### clientBounds: [`IBoundsData`](../interface/math/Math#iboundsdata)

Canvas position and size in browser client coordinates.

You can use [getWorldPointByClient()](./Leafer.md#getworldpointbyclient-clientpoint-iclientpointdata-update-boolean-ipointdata) to convert native browser event coordinates to engine coordinates.

## Auxiliary Properties

### zIndex: `number`

In App mode, controls stacking order within App. Defaults to `0`.

## Cache Properties

Requires the [find element plugin](../../plugin/in/find/index.md). In App mode, must be set on child Leafer instances.

### cacheId: `boolean`

Whether to cache element IDs globally at creation time to speed up [id lookup](../UI/find.md#by-id).

### cacheInnerId: `boolean`

Whether to cache innerId globally at creation time to speed up [innerId lookup](../UI/find.md#by-innerid).

When enabling `cacheInnerId`, `cacheId` must also be enabled.

## Static Properties

### list: [`Leafer`](./Leafer.md)[]

All currently created Leafer engine instances.

## Key Methods

### resize ( size: [`IScreenSizeData`](../../api/interfaces/IScreenSizeData.md) )

Resize the canvas.

### waitInit ( item: `function`, bind?: `object` )

Execute after engine initialization completes. If already initialized, executes immediately.

### waitReady ( item: `function`, bind?: `object` )

Execute after first layout completes.

### waitViewReady ( item: `function`, bind?: `object` )

Execute after first render completes.

### waitViewCompleted ( item: `function`, bind?: `object` )

Execute after all images in the canvas have finished loading and rendering.

### forceRender ( bounds?: [`IBoundsData`](../../api/interfaces/IBoundsData.md), sync?: `boolean` )

Force rendering (async). Optionally supports partial region rendering.

When `sync` is true, rendering is executed synchronously.

### updateCursor ( cursor?: [`ICursorType`](../../api/modules.md#icursortype) )

Update cursor style. Defaults to the hovered element’s cursor.

### start ( )

Start/restart the engine.

<<< @/code/app/config/start.ts

### stop ( )

Stop the engine (rendering and layout stop, but state is retained).

### clear ( )

Clear all child elements (remove + destroy).

### destroy ( sync?: `boolean` )

Destroy the engine. Defaults to async destruction.

## Helper Methods

### updateClientBounds ( )

Force update of [clientBounds](./Leafer.md#clientbounds-iboundsdata).

### getWorldPointByClient ( clientPoint: `IClientPointData`, update?: `boolean` ): [`IPointData`](../interface/math/Math#ipointdata)

Convert browser client coordinates to world coordinates.

### getPagePointByClient ( clientPoint: `IClientPointData`, update?: `boolean` ): [`IPointData`](../interface/math/Math#ipointdata)

Convert browser client coordinates to page coordinates.

```ts
interface IClientPointData {
  clientX: number
  clientY: number
}
```

## Layout Methods

### lockLayout ( )

Lock layout. Forces an update before locking, then suspends layout updates until unlocked.

### unlockLayout ( )

Unlock layout and apply pending updates.

```ts
leafer.lockLayout()

list.forEach((target) => {
  target.rotateOf(target.getInnerPoint(worldOrigin), rotation)
})

leafer.unlockLayout()
```

## Configuration

### [Engine configuration](../config/app/base.md)

## View

### [Viewport control](../../guide/advanced/viewport.md)

## Events

### [LeaferEvent](../event/basic/Leafer.md)

### [ChildEvent](../event/basic/Child.md)

### [PropertyEvent](../event/basic/Property.md)

### [WatchEvent](../event/basic/Watch.md)

### [LayoutEvent](../event/basic/Layout.md)

### [RenderEvent](../event/basic/Render.md)

### [KeyEvent](../event/ui/Key.md)

### [ResizeEvent](../event/basic/Resize.md)

## Inheritance

### Leafer  >  [Group](./Group.md)  >  [UI](./UI.md)

## Examples

### Create fixed size Leafer

::: code-group
<<< @/code/basic/leafer/fixed/window.ts [window]
<<< @/code/basic/leafer/fixed/div.ts [div]
<<< @/code/basic/leafer/fixed/canvas.ts [canvas]
<<< @/code/basic/leafer/fixed/id.ts [id]
:::

### Create auto layout Leafer

::: code-group
<<< @/code/basic/leafer/auto/full.ts [full]
<<< @/code/basic/leafer/auto/padding-left.ts [padding-left]
<<< @/code/basic/leafer/auto/padding.ts [padding]
:::

### Create auto-growing Leafer

::: code-group
<<< @/code/basic/leafer/grow/grow.ts [grow]
<<< @/code/basic/leafer/grow/grow-width.ts [grow-width]
<<< @/code/basic/leafer/grow/grow-height.ts [grow-height]
:::

### Independent zoom layer

::: code-group
<<< @/code/app/viewport/layer.ts [Leafer]
<<< @/code/app/viewport/app/layer.ts [App]
:::

### Listen to browser unload destroy

<<< @/code/app/unload.ts

### Listen to scale change events

<<< @/code/event/leafer/scale.ts
