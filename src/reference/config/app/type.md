# 窗口类型

初始化窗口类型，应用运行中不可再更改。

## 关键属性

### type: `string`

窗口类型，会附带场景逻辑，默认为 design， 自定义为 custom。

目前有 draw、block、design、document、custom， 后续会添加其他场景包（通过插件扩充场景）。

```ts
type ILeaferType =
  | 'draw' // 绘图场景
  | 'block' // 块状融入场景
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

## draw 类型

绘图场景： 不添加窗口功能。

<<< @/code/app/config/type/draw.ts

## block 类型

块状融入场景：不添加窗口功能，且像 HTML 的普通块状元素一样融入到浏览器页面中。

移动端在 draggable / editable 为 `false`，及没有监听 DragEvent.DRAG 的空间上拖拽可直接滑动页面。

<<< @/code/app/config/type/block.ts

## design 类型

设计场景： 可以无限滚动、缩放窗口。

<<< @/code/app/config/type/design.ts

## document 类型

文档场景： 限制在内容区域滚动，页面最小缩放值为 1。

<<< @/code/app/config/type/document.ts

## custom 类型

自定义场景： 不添加窗口，并可自定义窗口交互方式。

<<< @/code/app/config/type/custom.ts

可以通过监听 leafer 实例的 [ZoomEvent](/reference/event/ui/Zoom) 与 [MoveEvent](/reference/event/ui/Move) 事件进行视窗交互逻辑的自定义。

如需支持同时滚动画布外的页面请看 [app.config.wheel.preventDefault](/reference/config/app/wheel.md#wheel-preventdefault-boolean)。

<<< @/code/app/window/custom.ts
