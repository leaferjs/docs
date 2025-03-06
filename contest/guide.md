<script setup>
import Case from '/component/Case.vue'
</script>

# LeaferJS ”画龙点睛“ 小游戏开发指南

##

**给你一条会飞的龙，看你能做出什么好玩的小游戏分享给我们 ◠‿◠**

**”画龙点睛“** 获奖作品： https://cloudstudio.net/columns/22379303211671552

可将你开发的作品分享到 [交流群](https://leaferjs.com/#contact) 或 [GitHub](https://github.com/leaferjs/leafer-ui/issues)，后续会展示在官网的 ”画龙点睛“ 板块～

## 简介

LeaferJS 是一款好用的 Canvas 渲染引擎，提供革新的体验。可用于高效绘图 、UI 交互（小游戏、互动应用、组态）、图形编辑。

📗 [图文并茂、由浅入深的了解 LeaferJS](/blog/2024-07-09.md)

## 一、准备代码运行环境

**Playground 环境：** https://www.leaferjs.com/ui/guide/runtime.html

可通过 **Cloud Studio** 模版创建一个 **LeaferJS 项目**，用于运行、练习后续的示例代码。

## 二、学习 LeaferJS 入门教程

**入门教程：** https://www.leaferjs.com/ui/guide/basic/leafer.html

跟随官网教程步骤（文档底部有下一步引导按钮）从浅到深的一步步学习。

建议将教程中的示例代码复制到 **LeaferJS 项目** 的 index.ts 文件中运行、调试效果。

## 三、如何开发一个【画龙点睛】的小游戏 （参考示例）

<case name="Dragon" editor=false height=500></case>

### 主要步骤

**视频讲解（约 10 分钟）：** https://www.bilibili.com/video/BV1VmyXYoE5d

1. 准备龙的飞行路径，可通过鼠标绘制或自动生成（需要自定义）。

::: code-group
<<< @/code/contest/dragon/step1.ts
:::

2. 绘制龙，包括龙头（无眼睛）、龙身、龙爪、龙尾，并放到飞行路径上。

绘制龙的所需物料：

::: code-group
<<< @/code/contest/dragon/dragon.ts
:::

3. 点睛的交互功能，点击龙头加上龙眼，然后龙就活过来，开始按运动路径循环飞行。

::: code-group
<<< @/code/contest/dragon/step3.ts
:::

### 增强功能

1. 可添加背景天空、云朵（支持编辑大小、进行动画），增强页面的氛围感。

2. 可通过点击不同的【色块按钮】进行换色（龙头、龙身、龙尾）。

3. 尽情发挥你的想象，创造出与众不同的游戏效果。

## 四、详细了解 LeaferJS

LeaferJS 提供了丰富的功能，可通过官网教程示例进一步学习。

官网教程主要分为六个主要部分：

1. 入门教程：基础、进阶、常用插件、构成，方便快速入门。

2. 元素组件：应用、组、图形、路径、图像、文字、自定义元素。

3. 元素样式与功能： 布局、外观、交互、动画、数据、高级功能。

4. 事件类型：交互、元素、平台事件。

5. 类库： 数学、列表。

6. 插件： 官网、社区插件。

为了聚焦主要知识，每篇文档只展示了关键属性方法，可通过点击 [继承](/reference/display/Rect.md#继承) 或 [归属](/reference/UI/fill.md#归属) 文档溯源。

## 重点关注功能

### 动画功能

可以通过文章了解 LeaferJS 能实现哪些动画、游戏效果。

📙 [全新动画、状态、过渡、游戏功能](/blog/2024-09-20.md)

功能入口： https://www.leaferjs.com/ui/guide/plugin/animate.html

### 图形编辑功能

功能入口：https://www.leaferjs.com/ui/plugin/in/editor/

## 快速参考

### 元素

[App](/reference/display/App.md) &nbsp; &nbsp; [Leafer](/reference/display/Leafer.md) &nbsp; &nbsp; [Frame](/reference/display/Frame.md) &nbsp; &nbsp;[Box](/reference/display/Box.md) &nbsp; &nbsp; [Group](/reference/display/Group.md) &nbsp; &nbsp; [UI](/reference/display/UI.md) &nbsp; &nbsp; [Custom](/reference/display/custom/base/register.md)

[Rect](/reference/display/Rect.md) &nbsp; &nbsp; [Ellipse](/reference/display/Ellipse.md) &nbsp; &nbsp; [Line](/reference/display/Line.md) &nbsp; &nbsp; [Polygon](/reference/display/Polygon.md) &nbsp; &nbsp; [Star](/reference/display/Star.md)

[Path](/reference/display/Path.md) &nbsp; &nbsp; [Pen](/reference/display/Pen.md) &nbsp; &nbsp; [Image](/reference/display/Image.md) &nbsp; &nbsp; [SVG](/reference/display/SVG.md) &nbsp; &nbsp; [Canvas](/reference/display/Canvas.md) &nbsp; &nbsp;[Text](/reference/display/Text.md)

### 事件

[PointerEvent](/reference/event/ui/Pointer.md) &nbsp; &nbsp; [DragEvent](/reference/event/ui/Drag.md) &nbsp; &nbsp; [DropEvent](/reference/event/ui/Drop.md) &nbsp; &nbsp; [SwipeEvent](/reference/event/ui/Swipe.md)

[MoveEvent](/reference/event/ui/Move.md) &nbsp; &nbsp; [ZoomEvent](/reference/event/ui/Zoom.md) &nbsp; &nbsp; [RotateEvent](/reference/event/ui/Rotate.md)

[LeaferEvent](/reference/event/basic/Leafer.md) &nbsp; &nbsp; [ResizeEvent](/reference/event/basic/Resize.md) &nbsp; &nbsp; [KeyEvent](/reference/event/ui/Key.md)

[RenderEvent](/reference/event/basic/Render.md) &nbsp; &nbsp; [LayoutEvent](/reference/event/basic/Layout.md)
