# 应用周期

从创建应用到结束，会经历创建元素、启动应用、首次布局、应用准备就绪、首次渲染、视图准备就绪、[多次渲染生命周期](render.md)、停止/重启、销毁等过程，从而形成一个应用的生命周期。

<br/>

![生命周期](/svg/app_life.svg)

<br/>

## 示例

生命周期中的不同状态会通过 [LeaferEvent](/reference/event/basic/Leafer.md)进行通知，你也可以通过 Leafer 实例监听这些事件实现自己的产品逻辑。

### 监听 ready 事件

<<< @/code/event/leafer/leafer.ts

## 下一步

### [渲染周期](/guide/life/render.md)
