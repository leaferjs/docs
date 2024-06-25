# 捕获/冒泡

一个交互事件触发时，目标元素的所有父节点都能接受到该事件，事件流会从根节点出发，开始进入捕获阶段，到达目标元素后完成捕获，之后从目标元素出发，开始进入冒泡阶段，到达根节点完成冒泡。

## 图示

![冒泡与捕获](/svg/bubble.svg)

## 监听捕获事件

<<< @/code/event/capture/on.ts

## 移除捕获事件

<<< @/code/event/capture/off.ts

## 事件流

<<< @/code/event/flow.ts

## 阻止事件流传递

阻止事件向父节点传递

### stop ( )

<<< @/code/event/stop.ts

## 立即阻止事件流传递

阻止事件向父节点及同级传递

### stopNow ( )

<<< @/code/event/stopNow.ts
