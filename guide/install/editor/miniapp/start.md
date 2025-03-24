# @leafer-editor/miniapp

在 [@leafer-ui/miniapp](/guide/install/ui/miniapp/start.md) 基础上，引入了 [图形编辑器](/plugin/in/editor/index.md)、[视口](/plugin/in/viewport/index.md)、[视图控制](/plugin/in/view/index.md) 、[滚动条](/plugin/in/scroll/index.md)、[箭头](/plugin/in/arrow/index.md)、[查找元素](/plugin/in/find/index.md)、[导出元素](/plugin/in/export/index.md) 插件，适用于在线图形编辑的场景。

##

### [web 版](/guide/install/editor/start.md) &nbsp; &nbsp; [worker 版](/guide/install/editor/worker/start.md) &nbsp; &nbsp; [node 版](/guide/install/editor/node/start.md) &nbsp; &nbsp; 小程序版

##

在小程序环境中运行，[了解小程序使用 npm 包的注意事项](https://developers.weixin.qq.com/miniprogram/dev/devtools/npm.html)。

## 安装

::: code-group

```sh [npm]
npm install @leafer-editor/miniapp
```

```sh [pnpm]
pnpm add @leafer-editor/miniapp
```

```sh [yarn]
yarn add @leafer-editor/miniapp
```

```sh [bun]
bun add @leafer-editor/miniapp
```

:::

## 下载 CDN 版本

你也可以将库文件直接下载到本地 import 引入，这种方式暂时使用不了额外的插件。

```sh

https://unpkg.com/@leafer-editor/miniapp@1.5.0/dist/miniapp.module.js

https://unpkg.com/@leafer-editor/miniapp@1.5.0/dist/miniapp.module.min.js


```

## 注意

1. 微信小程序自身加载 svg 图片有问题。

2. 阴影等正在适配兼容性。

3. 在 [web-view](https://developers.weixin.qq.com/miniprogram/dev/component/web-view.html) 组件中使用时，微信 JS-SDK 上传 PNG 图片会变成 JPG 格式，请使用 HTML5 原生的 input 框上传。

## 体验

创建一个交互应用，能够横屏，可以拖拽矩形。

将小程序 miniprogram/pages/index 文件夹下的页面替换成如下内容：

::: code-group

```ts [index.ts]
import { Leafer, Rect } from '@leafer-editor/miniapp'

Page({
  onReady() {
    // this 为当前小程序页面实例
    const leafer = new Leafer({ view: 'leafer', eventer: this })

    const rect = new Rect({
      x: 100,
      y: 100,
      width: 100,
      height: 100,
      fill: '#32cd79',
      draggable: true,
    })

    leafer.add(rect)
  },
  receiveEvent() {}, // 约定接收交互事件的方法名
})
```

```xml [index.wxml]
<canvas
    id="leafer"
    type="2d"
    catchtouchstart="receiveEvent"
    catchtouchmove="receiveEvent"
    catchtouchend="receiveEvent"
    catchtouchcancel="receiveEvent"
></canvas>
```

```css [index.wxss]
page {
  height: 100%;
}
#leafer {
  width: 100%;
  height: 100%;
}
```

```json [index.json]
{
  "navigationStyle": "custom",
  "pageOrientation": "auto"
}
```

:::

### App 结构 - 图形编辑器

由于 iOS 版不支持 drawImage 离屏画布，需把用到的画布提前在 wxml 文件中创建好， 并在 tree / sky 层中指定 canvas。

::: code-group

```ts [index.ts]
import { App, Rect } from '@leafer-editor/miniapp'

Page({
  onReady() {
    // this 为当前小程序页面实例
    const app = new App({
      view: 'leafer',
      mobile: true, // 优化手机端体验
      tree: { canvas: 'leafer-tree' }, // 需指定canvas
      sky: { canvas: 'leafer-sky' },
      editor: {}, // 会自动创建 editor实例
      eventer: this,
    })

    const rect = new Rect({
      x: 100,
      y: 100,
      width: 100,
      height: 100,
      fill: '#32cd79',
      editable: true,
    })

    app.tree.add(rect)
  },
  receiveEvent() {}, // 约定接收交互事件的方法名
})
```

```xml [index.wxml]
<view
    id="leafer"
    catchtouchstart="receiveEvent"
    catchtouchmove="receiveEvent"
    catchtouchend="receiveEvent"
    catchtouchcancel="receiveEvent"
>
<canvas id="leafer-tree"  type="2d"></canvas>
<canvas id="leafer-sky" type="2d"></canvas>
</view>
```

```css [index.wxss]
page {
  height: 100%;
}
#leafer {
  width: 100%;
  height: 100%;
}
#leafer-tree {
  position: absolute;
  width: 100%;
  height: 100%;
}
#leafer-sky {
  position: absolute;
  width: 100%;
  height: 100%;
}
```

```json [index.json]
{
  "navigationStyle": "custom",
  "pageOrientation": "auto"
}
```

:::

## 生成海报

创建一个矩形, 然后导出为图片（离屏画布模式可用）。

::: code-group

```ts [index.ts]
import { Leafer, Rect } from '@leafer-editor/miniapp'

Page({
  onReady() {
    // 自动创建一个 350*800 的离屏画布
    const leafer = new Leafer({ width: 350, height: 800 })

    const rect = new Rect({
      x: 100,
      y: 100,
      width: 100,
      height: 100,
      fill: '#32cd79',
    })

    leafer.add(rect)

    // 自动保存到相册
    leafer.export('album.png', { screenshot: true }).then(() => {
      // 提示保存到相册成功逻辑
    })
  },
})
```

:::

## 使用

使用方式、全局变量和 [@leafer-ui/miniapp](/guide/install/ui/miniapp/start.md) 一致, 只需改下包名，即可运行官网示例代码。
