# App

创建 App 应用（可选），了解初始化 [应用配置](/reference/config/app/base.md)、[视窗功能](/guide/app/window.md)。

负责组织多个 Leafer 实例 [分层](/guide/app/multilayer.md) 协同工作，提高渲染性能，同时继承 Leafer 的部分功能和事件。

<br/>

![app](/svg/app.svg)

<br/>

:::tip

此时 Leafer 相当于一个子 [Group](/reference/display/Group.md) 元素，交互事件可以在多个 Leafer 间穿透。

注意: App 不接收子元素的数据变化事件，请在对应的 Leafer 实例上监听。
:::

## 关键属性

### isApp: `boolean`

是否为 App 实例， 默认为 true 。

### children: `Leafer`[]

Leafer 实例的子对象。

## 统一结构

为了方便大家记忆和沟通，我们以现实世界的方式为常用的 Leafer 层进行拟物化命名。

当然你也可以手动创建，完全自定义结构，或在这个基础上增加 自定义层都可以。

### ground?: [`Leafer`](/reference/display/Leafer.md)

地面层 (背景层)，位于最底部的 Leafer 实例，一般用于渲染背景、网格内容（可选）。

### tree: [`Leafer`](/reference/display/Leafer.md)

树结构 (内容层)，位于中间的 Leafer 实例。

### sky: [`Leafer`](/reference/display/Leafer.md)

天空层 (变化层)，位于最顶部的 Leafer 实例，一般用来渲染频繁变化的动画、编辑器等。

::: code-group

<<< @/code/app/layer/auto.ts [自动创建]

<<< @/code/app/layer/app.ts [手动创建]

<<< @/code/app/layer/simple.ts [快速创建]

:::

## 预留属性

### editor: [`IEditor`](/plugin/in/editor/Editor.md)

图形编辑器实例，需安装 [图形编辑器](/plugin/in/editor/) 。

## 视口属性

### zoomLayer：[`Group`](./Group.md)

应用的缩放平移层（viewport 视口）， 默认使用 app.tree.zoomLayer 作为缩放平移层。

可以手动修改它的 x、y、scale、scaleX、scaleY 属性进行缩放平移视图。

通过 [视图插件](/plugin/in/view/index.md) / [滚动条插件](/plugin/in/scroll/index.md) 可以便捷控制视图，支持 fit 视图、聚集到指定元素。

## 关键方法

### add ( leafer: [`Leafer`](./Leafer.md))

添加一个 Leafer 实例。

### addLeafer ( config?:[`ILeaferConfig`](/api/interfaces/ILeaferConfig.md))

快速创建并添加一个 Leafer 实例。

### addAt ( child: [`Leafer`](./Leafer.md), index: `number`)

添加一个 Leafer 实例到在指定位置。

### addBefore ( child: [`Leafer`](./Leafer.md), before: [`Leafer`](./Leafer.md))

添加一个 Leafer 实例 在指定的 leafer 前面。

### addAfter ( child: [`Leafer`](./Leafer.md), after: [`Leafer`](./Leafer.md))

添加一个 Leafer 实例 在指定的 leafer 后面。

## 配置

### [应用配置](/reference/config/app/base.md)

## 视口

### [视窗功能](/guide/app/window.md)

<!--
## 示例

### 自动创建

创建 ground、tree、sky 层。

<<< @/code/app/layer/auto.ts

只创建 tree、sky 层。

<<< @/code/app/layer/sky.ts

### 原始创建

<<< @/code/app/layer/app.ts

### 快速创建

<<< @/code/app/layer/simple.ts -->

## 继承

### [Leafer](./Leafer.md)

## API

### [App](/api/classes/App.md)
