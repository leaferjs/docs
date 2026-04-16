# 局部渲染

The engine improves canvas redraw efficiency through partial rendering. When there are tens of thousands of elements on a page, only the changed regions are updated.

The changed regions are formed by combining the [render bounds (bounding box)](./bounds.md) of elements before and after changes.

<br/>

![part-render](/svg/part-render.svg)

<br/>

## 关闭局部渲染

When it is not possible to determine element bounds—such as for editing frames or background grid Leafer layers—you can disable partial rendering.

:::code-group
<<< @/code/app/config/app/partRender.ts [App]

<<< @/code/app/config/partRender.ts [Leafer]
:::

## Disable partial layout

When most elements in a scene are dynamic, you can disable partial layout to prevent performance loss caused by tracking too many element changes.

Example scene: [https://benchmark.leaferjs.com/leafer/?scene=dynamic](https://benchmark.leaferjs.com/leafer/?scene=dynamic)

:::code-group
<<< @/code/app/config/app/partLayout.ts [App]

<<< @/code/app/config/partLayout.ts [Leafer]
:::

## Next Step

Next, you will learn several important **lifecycle concepts**, which completes the basic introduction.

### [Lifecycle](../life/ui.md)

<br/>

### Usage in frontend frameworks

[Vue](../framework/vue/index.md)

[React](../framework/react/index.md)

### Usage in server-side rendering

[Nuxt.js](../framework/nuxt/index.md)

[VitePress](../framework/vitepress/index.md)

[Next.js](../framework/next/index.md)
