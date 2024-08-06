# ZoomEvent

缩放事件，一般用于[视窗交互](/guide/app/window.md)中缩放视图。

1. 移动端: 双指捏合
2. 触摸板: 双指捏合
3. 鼠标: Ctrl / Command + 滚轮

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

## 继承

### [UIEvent](./UIEvent)

## API

### [ZoomEvent](/api/classes/ZoomEvent.md)

## 示例

::: code-group
<<< @/code/event-ui/zoom/simple.ts
<<< @/code/event-ui/zoom/simple.js
:::
