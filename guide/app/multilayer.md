<script setup>
import Case from '/component/Case.vue'
</script>

# 创建 App

这是一个可选的应用结构，主要用于 [图形编辑器](/guide/plugin/editor.md) 等需要分层渲染的场景。

[App](/reference/display/App.md) 负责承载多个 [Leafer](/reference/display/Leafer.md) 实例分层 协同工作，将不同更新频率的内容分开渲染，以提升性能。

<br/>

![app](/svg/app.svg)

## 统一结构

App 默认可以通过 [add()](/reference/display/App.md#add-leafer-leafer) 方法添加多个自定义层。为了方便大家记忆和沟通，我们以现实世界的方式为常用的 Leafer 层进行拟物化命名，并支持通过配置快速添加。

### ground?: [`Leafer`](/reference/display/Leafer.md)

地面层 (背景层)，位于最底部的 Leafer 实例，一般用于渲染背景、网格内容（可选）。

### tree: [`Leafer`](/reference/display/Leafer.md)

树结构 (主要内容层)，位于中间的 Leafer 实例，相当于 HTML 中的 body。

### sky: [`Leafer`](/reference/display/Leafer.md)

天空层 (变化层)，位于最顶部的 Leafer 实例，一般用来渲染 [图形编辑器](/plugin/in/editor/) 实例。

##

<case name="Editor" index=2 count=2 x=20></case>

我们以 [图形编辑器](/plugin/in/editor/) 的例子来展示 App 的实际用法：

::: code-group

<<< @/code/plugin/editor/frame/index.ts [editor]

<<< @/code/plugin/editor/frame/simple.ts [简化]

<<< @/code/plugin/editor/frame/origin.ts [实现原理]

:::

## 配置 App

### [基础](/reference/config/app/base.md) &nbsp; &nbsp; [视口类型](/reference/config/app/type.md) &nbsp; &nbsp; [画布](/reference/config/app/canvas.md) &nbsp; &nbsp; [点按](/reference/config/app/pointer.md) &nbsp; &nbsp; [多点](/reference/config/app/multiTouch.md) &nbsp; &nbsp;[触屏](/reference/config/app/touch.md) &nbsp; &nbsp; [滚轮](/reference/config/app/wheel.md) &nbsp; &nbsp; [平移视图](/reference/config/app/move.md) &nbsp; &nbsp; [缩放视图](/reference/config/app/zoom.md) &nbsp; &nbsp;

## 下一步

### [缩放平移视图](/guide/app/viewport)
