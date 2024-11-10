# WatchEvent

观察事件。

想了解事件的触发顺序，请查看 [渲染生命周期](/guide/life/render.md) 图示。

## 事件名称

### WatchEvent.REQUEST

请求观察数据。

`watch.request`

### WatchEvent.DATA

发送观察数据。

`watch.data`

## 关键属性

### data: [`IWatchEventData`](/api/interfaces/IWatchEventData.md)

观察数据。

## 继承事件

### [Event](./Event.md)

<!--
## API

### [WatchEvent](/api/classes/WatchEvent.md) -->

## 示例

::: code-group
<<< @/code/event/leafer/watch.ts
<<< @/code/event/leafer/watch.js
:::
