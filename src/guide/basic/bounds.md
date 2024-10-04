# 包围盒（边界模型）

图中是基于元素 [box 坐标系](./coordinate#box) 由内到外形成的各种包围盒（边界）。

![盒子模型](/svg/bounds.svg)

## 边界类型

### content

**内容边界:** 填充内容的边界，不包含 padding，一般用于[Text](/reference/display/Text.md) 。

### box

**基准边界:** 包含 padding，以此为基准向内、向外延伸边界。

### stroke

**笔触边界:** 基准边界 + stroke，可响应交互事件的边界。

### margin

**外部边界:** 基准边界 + margin。

### render

**渲染边界:** 笔触边界 + 阴影等。

## 坐标系边界

### 内部坐标系边界

以元素自身为起点（0，0），由元素的宽高、路径形成的内部边界。

已提供了 [获取属性](/reference/property/bounds.md#boxbounds-iboundsdata) 与 [获取方法](/reference/property/bounds.md#关键方法)。

### 本地坐标系边界

以父元素为起点（0，0），将内部边界与 [localTransform](/reference/property/transform.md#localtransform-imatrixdata) 相乘而来，会受元素的 x、y、scaleX、scaleY、rotation 影响。

已提供了[获取方法](/reference/property/bounds.md#关键方法)。

### 世界坐标系边界

以画布左上角为起点（0，0），将内部边界与 [worldTransform](/reference/property/transform.md#worldtransform-imatrixdata) 相乘而来，会受元素及中间层级元素的 x、y、scaleX、scaleY、rotation 影响。

已提供了 [获取属性](/reference/property/bounds.md#boxbounds-iboundsdata) 与 [获取方法](/reference/property/bounds.md#关键方法)。

## 应用示例

### [bounds](/reference/property/bounds.md)

## 恭喜 🎉

你已完成快速入门知识的学习，可以开始用 LeaferJS 来探索产品开发了～

<br/>
可继续阅读

🍉 了解应用、元素、属性方法、事件、类库的使用。

🍊 了解让你事半功倍的官方、社区 [插件](/plugin/)。

## 在前端环境中使用

### [Vue](/guide/framework/vue/)

### [React](/guide/framework/react/)

## 在服务端渲染中使用

### [Nuxt.js](/guide/framework/nuxt/)

### [VitePress](/guide/framework/vitepress/)

### [Next.js](/guide/framework/next/)
