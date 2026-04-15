# Render Lifecycle

From element creation to completed rendering, a series of steps occur including data changes, render requests, layout, and rendering—forming a complete rendering lifecycle.

<br/>

![Lifecycle](/svg/render_life.svg)

<br/>

## Example

Different states in the lifecycle are notified through events such as [ChildEvent](../../reference/event/basic/Child.md), [PropertyEvent](../../reference/event/basic/Property.md), [WatchEvent](../../reference/event/basic/Watch.md), [LayoutEvent](../../reference/event/basic/Layout.md), and [RenderEvent](../../reference/event/basic/Render.md). You can also listen to these events via the Leafer engine to implement your own product logic.

### Listen to render events

<<< @/code/event/leafer/render.ts

## Congratulations 🎉

You have completed the quick start guide and can now begin exploring product development with LeaferJS.

<br/>
You may continue reading:

🍉 Learn how to use applications, engines, elements, properties & methods, events, and the core library.

🍊 Discover official and community plugins that can greatly improve productivity.

### Using in frontend frameworks

[Vue](../framework/vue/index.md)

[React](../framework/react/index.md)

### Using in server-side rendering

[Nuxt.js](../framework/nuxt/index.md)

[VitePress](../framework/vitepress/index.md)

[Next.js](../framework/next/index.md)
