# 创建 Leafer

[Leafer](/reference/display/Leafer.md) 实例是一个树状结构（提供了布局、渲染等管理功能），能够独立运行。作为根节点，可以往里面添加子元素，并且子元素可以通过 [Group](/reference/display/Group.md) / [Box](/reference/display/Box.md) 层层嵌套，组成一颗复杂的渲染树。

<br/>

![leafer](/svg/leafer.svg)

<br/>

## 创建固定宽高的 Leafer

默认自带[窗口交互](../app/window)功能。

view 参数支持 window 、div、canvas 标签对象，注意 view 为 id 字符串时不用加 # 号。

<<< @/code/basic/app/fixed.ts

## 创建自适应布局的 Leafer

当画布的父节点尺寸改变后会自动 resize， 了解[自适应布局](/reference/config/app/canvas.md#自适应布局)。

<<< @/code/basic/app/auto.ts

## 下一步

### [创建元素](/guide/basic/display)
