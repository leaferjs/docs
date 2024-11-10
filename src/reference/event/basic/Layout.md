# LayoutEvent

布局事件。

想了解事件的触发顺序，请查看 [渲染生命周期](/guide/life/render.md) 图示。

## 关键属性

### data: [`ILayoutBlockData`](/api/interfaces/ILayoutBlockData.md)[]

布局数据。

### times: `number`

布局次数（本轮布局中第几次布局）。

## 事件名称

### LayoutEvent.REQUEST

请求布局。

`layout.request`

### LayoutEvent.START

开始本轮布局。

`layout.start`

### LayoutEvent.BEFORE

单次布局前。

`layout.before`

### LayoutEvent.LAYOUT

单次布局，可进行多次。

`layout`

### LayoutEvent.AFTER

单次布局后。
`layout.after`

### LayoutEvent.AGAIN

准备再次布局。

`layout.again`

### LayoutEvent.END

结束本轮布局

`layout.end`

## 继承事件

### [Event](./Event.md)

<!--
## API

### [LayoutEvent](/api/classes/LayoutEvent.md) -->

## 示例

<<< @/code/event/leafer/layout.ts
