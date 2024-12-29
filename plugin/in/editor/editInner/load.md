# 自定义控制点

自定义内部编辑器的第 2 步是： **自定义控制点**。

控制点一般用来调整路径节点，文本编辑器需要通过创建 DOM 代替控制点，可自由定义。

## 自定义步骤

### 1. 创建控制点

在 `constructor()` 或 `onCreate()` 方法中创建自定义控制点。

实例化内部编辑器时会自动调用此方法。

### 2. 载入控制点

在 `onLoad()` 方法中添加控制点到视图中。

当用户双击元素时，会打开内部编辑器，自动调用此方法载入。

### 3. 更新控制点

在 `onUpdate()` 方法中更新控制点位置、状态。

当用户操作视图、元素时，会自动调用此方法更新。

### 4. 卸载控制点

在 `onUnload()` 方法中将控制点从视图中移除。

当用户退出内部编辑器时，会自动调用此方法卸载。

路径编辑器一般通过点击完成按钮退出，文本编辑器一般点击页面其他位置自动退出。

## 继承

### [InnerEditor](../InnerEditor.md)

## 示例

::: code-group

<<< @/code/plugin/editor/editInner/load/index.ts

<<< @/code/plugin/editor/editInner/load/index.js
:::

## 下一步

### [使用内部编辑器](/plugin/in/editor/editInner/use.md)
