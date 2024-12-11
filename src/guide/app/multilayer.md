# 创建 App

这是一个可选的应用结构，主要用于 [图形编辑器](/guide/plugin/editor.md) 等需要分层渲染的场景。

[App](/reference/display/App.md) 负责承载多个 [Leafer](/reference/display/Leafer.md) 实例分层 协同工作，将不同更新频率的内容分开渲染，以提升性能。

<br/>

![app](/svg/app.svg)

## 统一结构

为了方便大家记忆和沟通，我们以现实世界的方式为常用的 Leafer 层进行拟物化命名。

### ground?: [`Leafer`](/reference/display/Leafer.md)

地面层 (背景层)，位于最底部的 Leafer 实例，一般用于渲染背景、网格内容（可选）。

### tree: [`Leafer`](/reference/display/Leafer.md)

树结构 (内容层)，位于中间的 Leafer 实例，相当于 HTML 中的 body。

### sky: [`Leafer`](/reference/display/Leafer.md)

天空层 (变化层)，位于最顶部的 Leafer 实例，一般用来渲染 [图形编辑器](/guide/plugin/editor.md) 实例。

::: code-group

<<< @/code/app/layer/app.ts [手动创建]

:::

::: code-group

<<< @/code/app/layer/simple.ts [快速创建]

:::

::: code-group

<<< @/code/app/layer/auto.ts [自动创建]

:::

::: code-group

<<< @/code/plugin/editor/full.ts [图形编辑器示例]

:::

还可以通过手动创建添加自定义层。

## 下一步

### [缩放平移视图](/guide/app/window)
