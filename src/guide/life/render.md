# 渲染周期

从创建元素到完成渲染会经历数据变化、请求渲染、布局、渲染等一系列过程，从而形成一次完整的渲染生命周期。

<br/>

![生命周期](/svg/render_life.svg)

<br/>

## 示例

生命周期中的不同状态会通过 [ChildEvent](/reference/event/basic/Child)、 [PropertyEvent](/reference/event/basic/Property)、 [WatchEvent](/reference/event/basic/Watch)、 [LayoutEvent](/reference/event/basic/Layout)、 [RenderEvent](/reference/event/basic/Render)等事件进行通知，你也可以通过 Leafer 实例监听这些事件实现自己的产品逻辑。

### 监听渲染事件

<<< @/code/event/leafer/render.ts

## 恭喜 🎉

你已完成快速入门知识的学习，可以开始用 LeaferJS 来探索产品开发了～

<br/>
可继续阅读

🍉 第 2 本书： [参考手册](/reference/)，详解所有元素、属性方法、事件、类库的使用。

🍊 第 3 本书： [插件中心](/plugin/)，了解让你事半功倍的官方、社区插件。

## 在前端环境中使用

### [Vue](/guide/framework/vue/)

### [React](/guide/framework/react/)

## 在服务端渲染中使用

### [Nuxt.js](/guide/framework/nuxt/)

### [VitePress](/guide/framework/vitepress/)

### [Next.js](/guide/framework/next/)
