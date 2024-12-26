<script setup>
import Case from '/component/Case.vue'
</script>

# App

创建 App（可选结构），了解初始化 [应用配置](/reference/config/app/base.md)、[视口交互](/guide/app/viewport.md)。

负责承载多个 [Leafer](/reference/display/Leafer.md) 实例分层 协同工作，以提升性能，同时继承 Leafer 的部分功能和事件。

<br/>

![app](/svg/app.svg)

<br/>

::: tip 继承
App &nbsp;>&nbsp; [Leafer](./Leafer.md) &nbsp;>&nbsp; [Group](./Group.md) &nbsp;>&nbsp; [UI](./UI.md)

<br/>

交互事件可以在多个子 Leafer 实例间按层级穿透，看上去就像是一个交互整体。

注意: App 不接收子元素的数据变化事件，请在对应的子 Leafer 实例上监听。

:::

## 关键属性

### isApp: `boolean`

是否为 App 实例， 默认为 true 。

### children: `Leafer`[]

Leafer 实例的子对象。

## 统一结构

App 默认可以通过 [add()](/reference/display/App.md#add-leafer-leafer) 方法添加多个自定义层。为了方便大家记忆和沟通，我们以现实世界的方式为常用的 Leafer 层进行拟物化命名，并支持通过配置快速添加。

### ground?: [`Leafer`](/reference/display/Leafer.md)

地面层 (背景层)，位于最底部的 Leafer 实例，一般用于渲染背景、网格内容（可选）。

### tree: [`Leafer`](/reference/display/Leafer.md)

树结构 (主要内容层)，位于中间的 Leafer 实例，相当于 HTML 中的 body。

### sky: [`Leafer`](/reference/display/Leafer.md)

天空层 (变化层)，位于最顶部的 Leafer 实例，一般用来渲染 [图形编辑器](/plugin/in/editor/) 实例。

## 预留属性

### editor: [`IEditor`](/plugin/in/editor/Editor.md)

图形编辑器实例，需安装 [图形编辑器](/plugin/in/editor/) 。

## 视口属性（viewport）

### zoomLayer：[`Group`](./Group.md)

缩放平移视图层， 默认使用 app.tree.zoomLayer 作为缩放平移层。

可以手动修改它的 [x](/reference/property/layout)、[y](/reference/property/layout)、[scale](/reference/property/layout#scale-number-ipointdata)、[scaleX](/reference/property/layout#scalex-number)、[scaleY](/reference/property/layout#scaley-number) 属性进行缩放平移视图。

另通过 [视图控制插件](/plugin/in/view/index.md) / [滚动条插件](/plugin/in/scroll/index.md) 可以便捷控制视图，支持居中显示内容、聚集到指定元素。

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

## 视图

### [缩放平移视图](/guide/app/viewport.md)

## 示例

<case name="Editor" index=2 count=2 x=20></case>

我们以 [图形编辑器](/plugin/in/editor/) 的例子来展示 App 的实际用法：

::: code-group

<<< @/code/plugin/editor/frame/index.ts [editor]

<<< @/code/plugin/editor/frame/simple.ts [简化]

<<< @/code/plugin/editor/frame/origin.ts [实现原理]

:::

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

<!-- ## 继承元素

### [Leafer](./Leafer.md) -->

<!-- ## API

### [App](/api/classes/App.md) -->
