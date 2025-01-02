# 缩放平移视图

通过滚轮/触摸板滑动或捏合可缩放平移视图，类似浏览器、设计软件的视口交互功能。

::: tip 注意事项
需安装 [视口插件](/plugin/in/viewport/) 才能使用， 或直接安装 [leafer-editor](/guide/install/editor/start.md)（已集成此插件）。

:::

![window](/svg/window.svg)

另通过 [视图控制插件](/plugin/in/view/index.md) / [滚动条插件](/plugin/in/scroll/index.md) 可以便捷控制视图，支持居中显示内容、聚集到指定元素。

## viewport 视口类型

通过配置 [leafer.config.type](/reference/config/app/type.md) 可快速添加视口功能，viewport 会阻止 [默认右键菜单](/reference/config/app/pointer.md#pointer-preventdefaultmenu-boolean)。

### 平移视图操作

1. 移动端/触摸板: 双指滑动。
2. 鼠标: 滚轮（纵向滚动），Shift + 滚轮（横向滚动）。

更多配置请看 [app.config.move](/reference/config/app/move.md)， 提供了丰富的配置功能，涵盖各种场景。

### 缩放视图操作

1. 移动端/触摸板: 双指捏合。
2. 鼠标: Ctrl / Command + 滚轮。

更多配置请看 [app.config.zoom](/reference/config/app/zoom.md) / [app.config.wheel](/reference/config/app/wheel.md)。

::: code-group

<<< @/code/app/config/type/app/viewport.ts [App]

<<< @/code/app/config/type/viewport.ts [Leafer]

<<< @/code/app/config/type/origin/viewport.ts [实现原理]
:::

## custom 视口类型

在 [viewport 视口](#viewport-视口类型) 功能上，自定义缩放平移的处理逻辑。

::: code-group
<<< @/code/app/config/type/app/custom.ts [App]

<<< @/code/app/config/type/custom.ts [Leafer]

<<< @/code/app/config/type/origin/custom.ts [实现原理]
:::

## design 视口类型

在 [viewport 视口](#viewport-视口类型) 功能上，增加了按住鼠标中键 / 空格键 + 拖拽 平移视图的功能，并限制缩放范围为 0.01 ～ 256，适合图形编辑、设计类产品。

::: code-group
<<< @/code/app/config/type/app/design.ts [App]

<<< @/code/app/config/type/design.ts [Leafer]

<<< @/code/app/config/type/origin/design.ts [实现原理]
:::

## document 视口类型

在 [viewport 视口](#viewport-视口类型) 功能上，限制了在有效内容区域内滚动，并限制缩放范围为 1 ～ ∞，适合文档类产品。

::: code-group
<<< @/code/app/config/type/app/document.ts [App]

<<< @/code/app/config/type/document.ts [Leafer]

<<< @/code/app/config/type/origin/document.ts [实现原理]
:::

## 手动平移缩放视图

通过 [Leafer 视口属性](/reference/display/Leafer.md#视口属性-viewport) / [App 视口属性](/reference/display/App.md#视口属性-viewport) 可手动平移缩放视图。

## 移动端手势控制元素

[图形编辑器](/plugin/in/editor/) 可以配置 [moblie 模式](/reference/config/app/base.md#mobile-boolean) 及 [手势控制元素](/plugin/in/editor/config.md#moveable-boolean-move)。

也可以自己通过监听 [视口交互事件](#视口交互事件) 实现手势控制元素（需 [阻止事件冒泡](/reference/event/basic/Event.md#stop)）。

## 更多示例

### [鼠标滚动直接缩放视图](/reference/config/app/wheel.md#鼠标滚动直接缩放视图)

### [控制缩放范围](/reference/config/app/zoom.md#控制视图缩放范围)

### [单独指定缩放层](/reference/display/Leafer.md#单独指定缩放层)

## 视口交互事件

### [MoveEvent](/reference/event/ui/Move) &nbsp; &nbsp; [ZoomEvent](/reference/event/ui/Zoom) &nbsp; &nbsp; [RotateEvent](/reference/event/ui/Rotate)

## 下一步

### [转换坐标](/guide/advanced/coordinate.md)
