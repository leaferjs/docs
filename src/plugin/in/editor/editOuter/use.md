# 使用编辑工具

自定义编辑工具的第 3 步是： **使用编辑工具**。

同类元素一般使用同一种编辑工具。

## 使用步骤

### 1. 设置编辑工具

通过元素的 `setEditOuter()` 静态方法设置编辑工具名称。

内部原理：会自动修改元素属性 editOuter 的 getter 方法， 支持传入一个函数。

### 2. 运行看看效果

选中元素后，编辑工具将增加一个新的控制点.

拖动这个控制点会打印控制台日志，缩放页面会跟随移动。

## 继承

### [EditTool](../EditTool.md)

## 示例

::: code-group

<<< @/code/plugin/editor/editOuter/use/index.ts

<<< @/code/plugin/editor/editOuter/use/index.js
:::

## 恭喜 🎉

你已完成自定义编辑工具的基础学习，快去开发试试吧～

### [自定义内部编辑器](/plugin/in/editor/editInner/register.md)
