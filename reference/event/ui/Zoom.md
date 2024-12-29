# ZoomEvent

缩放事件，一般用于 [视口交互](/guide/app/viewport.md) 中缩放 视图 或 元素。

1. 移动端/触摸板: 双指捏合。
2. 鼠标: Ctrl / Command + 滚轮。

::: tip 继承
ZoomEvent &nbsp;>&nbsp; [UIEvent](./UIEvent.md) &nbsp;>&nbsp; [Event](../basic/Event.md)

<br/>

需安装 [视口插件](/plugin/in/viewport/) 才能使用， 或直接安装 [leafer-editor](/guide/install/editor/start.md)（已集成此插件）。
:::

## 事件名称

### ZoomEvent.START

开始缩放事件

`zoom.start`

### ZoomEvent.ZOOM

缩放事件

`zoom`

### ZoomEvent.END

结束缩放事件

`zoom.end`

## 关键属性

### scale: number

此次缩放事件改变的 scale 大小

<!-- ## 继承事件

### [UIEvent](./UIEvent) -->

<!-- ## API

### [ZoomEvent](/api/classes/ZoomEvent.md) -->

## 示例

::: code-group
<<< @/code/event-ui/zoom/simple.ts
<<< @/code/event-ui/zoom/simple.js
:::
