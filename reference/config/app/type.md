# 应用配置

### [基础](/reference/config/app/base.md) &nbsp; &nbsp; 视口类型 &nbsp; &nbsp; [画布](/reference/config/app/canvas.md) &nbsp; &nbsp; [点按](/reference/config/app/pointer.md) &nbsp; &nbsp; [多点](/reference/config/app/multiTouch.md) &nbsp; &nbsp; [触屏](/reference/config/app/touch.md) &nbsp; &nbsp; [滚轮](/reference/config/app/wheel.md) &nbsp; &nbsp; [平移视图](/reference/config/app/move.md) &nbsp; &nbsp; [缩放视图](/reference/config/app/zoom.md)

##

初始化视口类型，应用运行中不可再更改。

:::tip 注意事项
[App 结构](/guide/advanced/app.md) 下需设置在 [子层 Leafer](/reference/display/Leafer.md) 的 config 上，如 ground、tree、sky 层。
:::

## 关键属性

### type: `string`

视口类型，附带场景逻辑，默认为 block 场景类型。

目前有 block、viewport、custom、design、document， 后续会添加其他场景。

```ts
type ILeaferType =
  | 'block' // 块状融入场景
  ｜'viewport' // 基础视口场景
  | 'editor' // 图形编辑场景
  | 'design' // 设计场景
  | 'board' // 白板场景
  | 'document' // 文档场景
  | 'app' // 应用场景
  | 'website' // 网站场景
  | 'game' // 游戏场景
  | 'player' // 动画播放场景
  | 'chart' // 图表场景
  | 'custom' // 自定义
```

## block 场景类型

[Leafer](/reference/display/Leafer.md) 里面的元素可以像 HTML 的普通块状元素一样融入到浏览器页面中，响应交互事件。

移动端在元素 draggable / editable 属性为 `false`，及没有监听 DragEvent.DRAG 的空间上拖拽可直接滑动页面，了解 [touch 配置](/reference/config/app/touch.md#touchpreventdefault-boolean-auto)。

<<< @/code/app/config/type/block.ts

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
