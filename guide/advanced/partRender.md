# 局部渲染

引擎通过局部渲染来提高画布重绘的效率，当页面中有数万个元素的时候，只更新变化的区域。

变化前和变化后的元素 [渲染边界（包围盒）](/guide/advanced/bounds.md) 组成了变化区域。

<br/>

![part-render](/svg/part-render.svg)

<br/>

## 关闭局部渲染

当无法判断元素包围盒，如编辑框、背景网格的 Leafer 层，这个时候可以关闭局部渲染。

::: code-group
<<< @/code/app/config/app/partRender.ts [App]

<<< @/code/app/config/partRender.ts [Leafer]
:::

## 下一步

接下来将带你了解几个重要的 **生命周期**，就算完成入门的学习了。

### [生命周期](/guide/life/ui.md)

<br/>

### 在前端环境中使用

[Vue](/guide/framework/vue/index.md)

[React](/guide/framework/react/index.md)

### 在服务端渲染中使用

[Nuxt.js](/guide/framework/nuxt/index.md)

[VitePress](/guide/framework/vitepress/index.md)

[Next.js](/guide/framework/next/index.md)
