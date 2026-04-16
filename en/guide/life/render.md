# Render Lifecycle

从创建元素到完成渲染会经历数据变化、请求渲染、布局、渲染等一系列过程，从而形成一次完整的渲染生命周期。

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

🍊 了解让你事半功倍的官方、社区插件。

### Using in frontend frameworks

[Vue](../framework/vue/index.md)

[React](../framework/react/index.md)

### Using in server-side rendering

[Nuxt.js](../framework/nuxt/index.md)

[VitePress](../framework/vitepress/index.md)

[Next.js](../framework/next/index.md)
