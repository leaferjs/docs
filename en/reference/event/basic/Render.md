# RenderEvent

Render event.

To understand the event trigger order, please refer to the [render lifecycle](../../../guide/life/render.md) diagram.

::: tip Inheritance
RenderEvent  >  [Event](../basic/Event.md)
:::

## Key Properties

### renderBounds: [`IBounds`](../../../api/interfaces/IBounds.md)

Render region.

### renderOptions: [`IRenderOptions`](../../../api/interfaces/IRenderOptions.md)

Render options.

### times: `number`

Render count (the index of this render within the current render cycle).

## Event Names

### RenderEvent.REQUEST

Request render.

`render.request`

### RenderEvent.START

Start a new render cycle.

`render.start`

### RenderEvent.BEFORE

Before a single render pass.

`render.before`

### RenderEvent.RENDER

Single render pass (may occur multiple times).

`render`

### RenderEvent.AFTER

After a single render pass.

`render.after`

### RenderEvent.AGAIN

Prepare for another render pass.

`render.again`

### RenderEvent.END

End of the render cycle.

`render.end`

<!-- ### RenderEvent.NEXT

Render cycle completed, preparing for next frame. -->

## Request Render / Animation Frame

A cross-platform method similar to `window.requestAnimationFrame`, typically running at 60 FPS.

<<< @/code/platform/render.ts

## Inherited Events

### RenderEvent  >  [Event](../basic/Event.md)

<!-- ## API

### [RenderEvent](../../../api/classes/RenderEvent.md) -->

## Example

<<< @/code/event/leafer/render.ts
