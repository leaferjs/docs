# 使用内部编辑器

自定义内部编辑器的第 3 步是： **使用内部编辑器**。

同类元素一般使用同一种内部编辑器。

## 使用步骤

### 1. 设置内部编辑器

通过元素的 `setEditInner()` 静态方法设置内部编辑器的名称。

内部原理：自动修改元素属性 editInner 的 getter 方法， 支持传入一个函数。

### 2. 运行看看效果

选中并双击元素后，可以打开内部编辑器，包含一个控制点和一个完成按钮。

拖动这个控制点会打印控制台日志，缩放页面会跟随移动。

点击完成按钮会退出内部编辑器。

## 继承

### [InnerEditor](../InnerEditor.md)

## 示例

::: code-group

<<< @/code/plugin/editor/editInner/use/index.ts

<<< @/code/plugin/editor/editInner/use/index.js
:::

## 恭喜 🎉

你已完成自定义内部编辑器的基础学习，快去开发试试吧～

### [自定义编辑工具](/plugin/in/editor/editOuter/register.md)
