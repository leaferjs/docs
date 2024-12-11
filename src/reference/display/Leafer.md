# Leafer

创建 Leafer，了解初始化 [应用配置](/reference/config/app/base.md)、[窗口交互](/guide/app/window.md)。

<br/>

![leafer](/svg/leafer.svg)

<br/>

## 版本号

当前的版本号，默认为 `1.1.0`。

```ts
import { version } from 'leafer-ui'

console.log(version)
```

## 关键属性

### app: `App ｜ Leafer`

App 实例, 如果不存在则是自身。

### isApp: `boolean`

是否为 App 实例， 默认为 false。

### width: `number`

获取/修改画布宽度。

### height: `number`

获取/修改画布高度。

### pixelRatio: `number`

获取/修改画布像素比， 默认使用当前设备像素比（普通屏为 1，高清屏为 2，超高清屏为 3）。

### fill: `string`

获取/修改画布背景颜色。

### hittable: `boolean`

获取/修改是否响应交互事件，默认为 true。

### hitChildren: `boolean`

子元素是否响应交互事件，默认为 true。

### config: [`ILeaferConfig`](/reference/config/app/base.md)

应用的配置对象，部分配置运行中可以修改，立即生效。

### canvas: [`ILeaferCanvas`](/api/interfaces/ILeaferCanvas.md)

可以适配不同平台的画布封装对象。

获取真实的画布对象:

<<< @/code/display/Leafer/canvas.ts

可结合 [RenderEvent.END](/reference/event/basic/Render) 事件 drawImage() 到另一张小 canvas 上，实现高性能的鸟瞰图。

## 视图属性（viewport）

### zoomLayer：[`Group`](./Group.md)

缩放平移视图层， 默认为 Leafer 自身，可 [单独指定缩放层](/reference/display/Leafer.md#单独指定缩放层)。

可以手动修改它的 [x](/reference/property/layout)、[y](/reference/property/layout)、[scale](/reference/property/layout#scale-number-ipointdata)、[scaleX](/reference/property/layout#scalex-number)、[scaleY](/reference/property/layout#scaley-number) 属性进行缩放平移视图。

通过 [视图插件](/plugin/in/view/index.md) / [滚动条插件](/plugin/in/scroll/index.md) 可以便捷控制视图，支持 fit 视图、聚集到指定元素。

## 状态属性

### created: `boolean`

应用及子元素创建完成（完成首次创建）。

### ready: `boolean`

应用是否准备就绪（完成首次布局）。

### viewReady: `boolean`

应用视图是否准备就绪（完成首次渲染）。

<<< @/code/display/Leafer/ready.ts

### viewCompleted： `boolean`

应用视图加载完成（画布内的图片加载并渲染完成），会随时会变化。

### running: `boolean`

应用是否运行中。

## FPS：`number`

实时渲染帧率，默认为 60 帧。

### layoutLocked: `boolean`

布局是否锁定， 可通过 [unlockLayout()](#locklayout) 解锁。

### cursorPoint：[`IPointData`](../interface/math/Math#ipointdata)

当前光标的位置 - [世界坐标](/guide/basic/coordinate.md#world)。

### clientBounds：[`IBoundsData`](../interface/math/Math#iboundsdata)

当前应用在浏览器窗口中的位置（client 坐标）及宽高。

另可使用 [getWorldPointByClient()](/reference/display/Leafer.md#getworldpointbyclient-clientpoint-iclientpointdata-update-boolean-ipointdata) 方法转换浏览器原生事件坐标到应用中。

## 辅助属性

### zIndex: `number`

App 结构下，可以通过设置 zIndex 控制自身在 App 中的层叠顺序, 默认为 0。

## 静态属性

### list: [`Leafer`](./Leafer.md)[]

当前创建的所有 Leafer 实例。

## 关键方法

### resize ( size: [`IScreenSizeData`](/api/interfaces/IScreenSizeData.md))

重置画布大小。

### waitInit (item: `function`, bind?: `object` )

应用初始化（完成 init 各种管理器）后时执行 item 函数，可通过参数 `bind` 绑定 item 函数 的 this 对象。

已完成则立即执行。

### waitReady ( item: `function`, bind?: `object` )

应用准备就绪（完成首次布局）时执行 item 函数，可通过参数 `bind` 绑定 item 函数 的 this 对象。

已完成则立即执行。

### waitViewReady ( item: `function`, bind?: `object` )

应用视图准备就绪（完成首次渲染）时执行 item 函数，可通过参数 `bind` 绑定 item 函数 的 this 对象。

已完成则立即执行。

### waitViewCompleted ( item: `function`, bind?: `object` )

应用视图加载完成（画布内的图片加载并渲染完成）时执行 item 函数，可通过参数 `bind` 绑定 item 函数 的 this 对象。

已完成则立即执行。

### forceRender ( bounds?: [`IBoundsData`](/api/interfaces/IBoundsData.md) )

强制渲染，默认重渲染整个画布。

支持传入一个 bounds 进行局部重渲染, 可以打开 [显示重绘区域](/reference/debug/basic.md#showrepaint-boolean) 查看重绘情况。

### updateCursor ( cursor?: [`ICursorType`](/api/modules.md#icursortype) )

更新光标样式，默认更新当前 hover 元素的 cursor 样式 （注意按下鼠标后的光标样式会始终保持，直到抬起鼠标）。

可传入 cursor 样式直接设置，不过后续 hover 操作仍会被覆盖此样式，建议设置在元素上。

### start ( )

启动/重启应用。

<<< @/code/app/config/start.ts

### stop ( )

停止应用。

将停止渲染、布局，仍会收集元素变化数据待用，可通过 start() 重启。

### clear ( )

清空所有子元素（移除 + 销毁）。

### destroy ( sync?: `boolean` )

销毁应用，默认采用异步销毁，不会立即执行。

当 sync 参数为 true 时，表示同步销毁。

## 辅助方法

### updateClientBounds ( )

强制更新画布的 [clientBounds](/reference/display/Leafer.md#clientbounds-iboundsdata)（一般会自动更新），如 view 使用了 transform 属性移动需要调用此方法手动更新。

### getWorldPointByClient ( clientPoint: `IClientPointData`, update?: `boolean` ):[`IPointData`](../interface/math/Math#ipointdata)

获取在应用中的 [世界坐标](/guide/basic/coordinate.md#world)（传入一个浏览器窗口的 client 坐标 转换），update 表示是否强制更新画布的 [clientBounds](/reference/display/Leafer.md#clientbounds-iboundsdata)（一般会自动更新）。

### getPagePointByClient ( clientPoint: `IClientPointData`, update?: `boolean` ):[`IPointData`](../interface/math/Math#ipointdata)

获取在应用中的 [page 坐标](/guide/basic/coordinate.md#world)（传入一个浏览器窗口的 client 坐标 转换），update 表示是否强制更新画布的 [clientBounds](/reference/display/Leafer.md#clientbounds-iboundsdata)（一般会自动更新）。

可用于转换浏览器原生事件坐标（自带 clientX / clientY 坐标属性）到应用中。

```ts
interface IClientPointData {
  clientX: number
  clientY: number
}
```

## 布局方法

### lockLayout ( )

锁定布局, 锁定前会自动 [updateLayout()](/reference/property/layout.md#updatelayout) 一次。

锁定后，元素的数据变化会暂时收集，但不会更新布局，等待解锁后再进行更新。
::: tip
可通过 [layoutLocked](#layoutlocked-boolean) 检查是否锁定。
:::

### unlockLayout ( )

### 示例

通过锁定可以避免多次重复布局，列表越大，性能优化效果越明显。

```ts
leafer.lockLayout()

list.forEach((target) => {
  // 拦截多次布局： rotateOf会产生布局数据修改，getInnerPoint发现布局有变化，会再请求布局
  target.rotateOf(target.getInnerPoint(worldOrigin), rotation)
})

leafer.unlockLayout()
```

## 配置

### [应用配置](/reference/config/app/base.md)

## 视图

### [缩放平移视图](/guide/app/window.md)

## 监听事件

### [LeaferEvent](/reference/event/basic/Leafer.md)

### [ChildEvent](/reference/event/basic/Child)

### [PropertyEvent](/reference/event/basic/Property)

### [WatchEvent](/reference/event/basic/Watch)

### [LayoutEvent](/reference/event/basic/Layout)

### [RenderEvent](/reference/event/basic/Render)

### [KeyEvent](/reference/event/ui/Key)

### [ResizeEvent](/reference/event/basic/Resize)

## 继承元素

### [Group](./Group.md)

## 示例

### 单独指定缩放层

默认将 leafer 自身作为平移缩放层(viewport 视口)，可单独指定一个 [Group](/reference/display/Group.md) 作为平移缩放层。

<<< @/code/app/window/layer.ts

### 监听浏览器 unload 事件自动销毁

<<< @/code/app/unload.ts
