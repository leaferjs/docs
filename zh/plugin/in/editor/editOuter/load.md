# 自定义控制点

自定义编辑工具的第 2 步是： **自定义控制点**。

控制点一般用来控制元素的形状，如控制圆角矩形的四个角，多边形的边数。

## 自定义步骤

### 1. 创建控制点

在 `constructor()` 或 `onCreate()` 方法中创建自定义控制点（可选）。

实例化编辑工具时会自动调用此方法。

### 2. 载入控制点

在 `onLoad()` 方法中添加控制点到视图中。

当用户选择元素时，会切换编辑工具，自动调用此方法载入。

### 3. 更新控制点

在 `onUpdate()` 方法中更新控制点位置、状态。

当用户操作视图、元素时，会自动调用此方法更新。

### 4. 卸载控制点

在 `onUnload()` 方法中将控制点从视图中移除。

当用户切换到其他编辑工具时，会自动调用此方法卸载。

## 继承

### [EditTool](../EditTool.md)

## 示例

::: code-group

<<< @/code/plugin/editor/editOuter/load/index.ts

<<< @/code/plugin/editor/editOuter/load/index.js
:::

## 下一步

### [使用编辑工具](/plugin/in/editor/editOuter/use.md)
