# App 结构

针对在线图形编辑等复杂应用，我们提供了 App 结构， [App](/reference/display/App.md) 负责组织多个 [Leafer](/reference/display/Leafer.md) 实例分层 协同工作 (将不同更新频率的内容进行分层独立渲染)，以提高渲染性能。

<br/>

![app](/svg/app.svg)

## 统一结构

为了方便大家记忆和沟通，我们以现实世界的方式为常用的 Leafer 层进行拟物化命名。

### ground?: [`Leafer`](/reference/display/Leafer.md)

地面层 (背景层)，位于最底部的 Leafer 实例，一般用于渲染背景、网格内容（可选）。

### tree: [`Leafer`](/reference/display/Leafer.md)

树结构 (内容层)，位于中间的 Leafer 实例。

### sky: [`Leafer`](/reference/display/Leafer.md)

天空层 (变化层)，位于最顶部的 Leafer 实例，一般用来渲染频繁变化的动画、编辑器等。

::: code-group

<<< @/code/app/layer/app.ts [手动创建]

:::

::: code-group

<<< @/code/app/layer/simple.ts [快速创建]

:::

::: code-group

<<< @/code/app/layer/auto.ts [自动创建]

:::

可通过手动创建添加自定义层。

## 下一步

### [窗口交互](/guide/app/window)
