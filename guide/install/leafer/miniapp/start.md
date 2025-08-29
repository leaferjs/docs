# @leafer/miniapp

全量包，包含 [@leafer-ui/miniapp](/guide/install/ui/miniapp/start.md) 和 `@leafer-in/*` 所有插件包（[文本编辑](/plugin/in/text-editor/index.md)、[HTML](/plugin/in/html/index.md)插件除外）。

##

### [web 版](/guide/install/leafer/start.md) &nbsp; &nbsp; [worker 版](/guide/install/leafer/worker/start.md) &nbsp; &nbsp; [node 版](/guide/install/leafer/node/start.md) &nbsp; &nbsp; 小程序版

##

在小程序环境中运行，[了解小程序使用 npm 包的注意事项](https://developers.weixin.qq.com/miniprogram/dev/devtools/npm.html)。

## 安装

::: code-group

```sh [npm]
npm install @leafer/miniapp
```

```sh [pnpm]
pnpm add @leafer/miniapp
```

```sh [yarn]
yarn add @leafer/miniapp
```

```sh [bun]
bun add @leafer/miniapp
```

:::

## 更新

了解如何 [快速更新版本](/guide/update.md)。

## 下载 CDN 版本

你也可以将库文件直接下载到本地 import 引入，这种方式暂时使用不了额外的插件。

```sh

https://unpkg.com/@leafer/miniapp@1.9.5/dist/miniapp.module.js

https://unpkg.com/@leafer/miniapp@1.9.5/dist/miniapp.module.min.js


```

## 注意

1. 微信小程序自身加载 svg 图片有问题。

2. 阴影等正在适配兼容性。

3. 在 [web-view](https://developers.weixin.qq.com/miniprogram/dev/component/web-view.html) 组件中使用时，微信 JS-SDK 上传 PNG 图片会变成 JPG 格式，请使用 HTML5 原生的 input 框上传。

## 体验

创建一个交互引擎，能够横屏，可以拖拽矩形。

将小程序 miniprogram/pages/index 文件夹下的页面替换成如下内容：

::: code-group

```ts [index.ts]
import { Leafer, Rect } from '@leafer/miniapp'

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

## 使用

使用方式、全局变量和 [@leafer-ui/miniapp](/guide/install/ui/miniapp/start.md) 一致, 只需改下包名，即可运行官网示例代码。
