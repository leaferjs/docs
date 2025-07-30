# 缩放平移视图

通过滚轮/触摸板滑动或捏合可缩放平移视图，类似浏览器、设计软件的视口交互功能。

引擎默认为 [block 场景类型](/reference/config/app/type.md#block-场景类型)， 可通过配置 [leafer.config.type](/reference/config/app/type.md) 快速更改视口类型，自动添加相应场景的交互逻辑。

::: tip 注意事项
需安装 [视口插件](/plugin/in/viewport/index.md) 才能使用， 或直接安装 [leafer-editor](/guide/install/editor/start.md)（已集成此插件）。

:::

![window](/svg/window.svg)

另通过 [视图控制插件](/plugin/in/view/index.md) / [滚动条插件](/plugin/in/scroll/index.md) 可以便捷控制视图，支持居中显示内容、聚集到指定元素。

## 手动缩放平移视图

通过修改 [Leafer 视口属性](/reference/display/Leafer.md#视口属性-viewport) / [App 视口属性](/reference/display/App.md#视口属性-viewport) 的 [x](/reference/UI/layout.md)、[y](/reference/UI/layout.md)、[scale](/reference/UI/layout.md#scale-number-ipointdata)、[scaleX](/reference/UI/layout.md#scalex-number)、[scaleY](/reference/UI/layout.md#scaley-number) 可缩放平移视图。

## viewport 视口类型

通过滚轮/触摸板滑动或捏合可缩放平移视图，会阻止默认 [原生右键菜单](/reference/config/app/pointer.md#pointer-preventdefaultmenu-boolean)。

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

## 移动端手势控制元素

[图形编辑器](/plugin/in/editor/index.md) 可以配置 [moblie 模式](/reference/config/app/base.md#mobile-boolean) 及 [手势控制元素](/plugin/in/editor/config/enable.md)。

也可以自己监听 [视口交互事件](#视口交互事件) 实现手势控制元素（需 [阻止事件冒泡](/reference/event/basic/Event.md#stop)）。

## 监听视口变化

引擎可以通过 [PropertyEvent](/reference/event/basic/Property.md) 事件监听 [Leafer 视口属性](/reference/display/Leafer.md#视口属性-viewport) / [App 视口属性](/reference/display/App.md#视口属性-viewport) 的 [x](/reference/UI/layout.md)、[y](/reference/UI/layout.md)、[scaleX](/reference/UI/layout.md#scalex-number)、[scaleY](/reference/UI/layout.md#scaley-number) 变化来同步相关逻辑。

Leafer 实例作为 [缩放平移层](/reference/display/Leafer.md#视口属性-viewport) 时，可直接监听自身 [视图变化事件](/reference/event/basic/Leafer.md#视图事件)。

## 更多示例

### [鼠标滚动直接缩放视图](/reference/config/app/wheel.md#鼠标滚动直接缩放视图)

### [控制缩放范围](/reference/config/app/zoom.md#控制视图缩放范围)

### [单独指定缩放层](/reference/display/Leafer.md#单独指定缩放层)

### [监听 Leafer 缩放变化事件](/reference/event/basic/Leafer.md#监听-leafer-缩放变化事件)

## 视口交互事件

### [MoveEvent](/reference/event/ui/Move.md) &nbsp; &nbsp; [ZoomEvent](/reference/event/ui/Zoom.md) &nbsp; &nbsp; [RotateEvent](/reference/event/ui/Rotate.md)

## 下一步

### [转换坐标](/guide/advanced/coordinate.md)
