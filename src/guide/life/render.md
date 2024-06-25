# 渲染周期

从创建图形到完成渲染会经历数据变化、请求渲染、布局、渲染等一系列过程，从而形成一次完整的渲染生命周期。

<br/>

![生命周期](/svg/render_life.svg)

<br/>

## 示例

生命周期中的不同状态会通过 [ChildEvent](/reference/event/basic/Child)、 [PropertyEvent](/reference/event/basic/Property)、 [WatchEvent](/reference/event/basic/Watch)、 [LayoutEvent](/reference/event/basic/Layout)、 [RenderEvent](/reference/event/basic/Render)等事件进行通知，你也可以通过 Leafer 实例监听这些事件实现自己的产品逻辑。

### 监听渲染事件

<<< @/code/event/leafer/render.ts

## 下一步

### [应用周期](/guide/life/app)
