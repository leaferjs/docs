# 创建 Leafer 引擎

[Leafer](/reference/display/Leafer.md) 引擎是一个树状结构（提供了布局、渲染等管理功能），能够独立运行。作为根节点，可以往里面添加子元素，并且子元素可以通过 [Group](/reference/display/Group.md) / [Box](/reference/display/Box.md) 层层嵌套，组成一颗复杂的渲染树。

<br/>

![leafer](/svg/leafer.svg)

<br/>

## 创建固定宽高的 Leafer

view 参数支持 window 、div、canvas 标签对象，注意 view 为 id 字符串时不用加 # 号。

::: code-group
<<< @/code/basic/leafer/fixed/window.ts [window]
<<< @/code/basic/leafer/fixed/div.ts [div]
<<< @/code/basic/leafer/fixed/canvas.ts [canvas]
<<< @/code/basic/leafer/fixed/id.ts [id]
:::

## 创建自适应布局的 Leafer

当画布的父节点尺寸改变后会自动 resize， [了解详情](/reference/config/app/canvas.md#自适应布局)。

以实际 canvas 标签的父级 div 或其他标签，作为自动布局的容器。

::: code-group
<<< @/code/basic/leafer/auto/full.ts [full]
<<< @/code/basic/leafer/auto/padding-left.ts [padding-left]
<<< @/code/basic/leafer/auto/padding.ts [padding]
:::

## 创建自动生长的 Leafer

画布大小会生长，自动贴合实际内容，用于快速在 HTML 中嵌入 Leafer 元素，[了解详情](/reference/config/app/canvas.md#自动生长)。

注意 [App 结构](/guide/advanced/app.md) 暂不支持此功能。

::: code-group
<<< @/code/basic/leafer/grow/grow.ts [grow]
<<< @/code/basic/leafer/grow/grow-width.ts [grow-width]
<<< @/code/basic/leafer/grow/grow-height.ts [grow-height]
:::

## 详细了解

### [Leafer](/reference/display/Leafer.md)

## 配置 Leafer

### [基础](/reference/config/app/base.md) &nbsp; &nbsp; [视口类型](/reference/config/app/type.md) &nbsp; &nbsp; [画布](/reference/config/app/canvas.md) &nbsp; &nbsp; [点按](/reference/config/app/pointer.md) &nbsp; &nbsp;[触屏](/reference/config/app/touch.md) &nbsp; &nbsp; [滚轮](/reference/config/app/wheel.md)

## 下一步

### [创建元素](/guide/basic/display.md)
