# RenderEvent

渲染事件。

想了解事件的触发顺序，请查看 [渲染生命周期](/guide/life/render.md) 图示。

## 关键属性

### renderBounds: [`IBounds`](/api/interfaces/IBounds.md)

渲染区域。

### renderOptions: [`IRenderOptions`](/api/interfaces/IRenderOptions.md)

渲染选项。

### times: `number`

渲染次数（本轮渲染中第几次渲染）。

## 事件名称

### RenderEvent.REQUEST

请求渲染。

`render.request`

### RenderEvent.START

开始本轮渲染。

`render.start`

### RenderEvent.BEFORE

单次渲染前。

`render.beforee`

### RenderEvent.RENDER

单次渲染，可进行多次。

`render`

### RenderEvent.AFTER

单次渲染后。

`render.after`

### RenderEvent.AGAIN

准备再次渲染。

`render.again`

### RenderEvent.END

结束本轮渲染。

`render.end`

### RenderEvent.NEXT

本轮渲染已完成，预备下一次渲染，可以用于下一帧前的 [动画](/guide/animate/index.md) 计算。

## 继承

### [Event](./Event.md)

<!-- ## API

### [RenderEvent](/api/classes/RenderEvent.md) -->

## 示例

<<< @/code/event/leafer/render.ts
