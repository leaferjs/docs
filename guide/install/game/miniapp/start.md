# @leafer-game/miniapp

在 [@leafer-ui/miniapp](/guide/install/ui/miniapp/start.md) 基础上，引入了 [Robot](/plugin/in/robot/index.md) 、[交互状态](/plugin/in/state/index.md) 、 [动画](/plugin/in/animate/index.md)、[运动路径](/plugin/in/motion-path/index.md)、[查找元素](/plugin/in/find/index.md) 插件，适用于小游戏场景。

##

### [web 版](/guide/install/game/start.md) &nbsp; &nbsp; [worker 版](/guide/install/game/worker/start.md) &nbsp; &nbsp; [node 版](/guide/install/game/node/start.md) &nbsp; &nbsp; 小程序版

##

在小程序环境中运行，[了解小程序使用 npm 包的注意事项](https://developers.weixin.qq.com/miniprogram/dev/devtools/npm.html)。

## 安装

::: code-group

```sh [npm]
npm install @leafer-game/miniapp
```

```sh [pnpm]
pnpm add @leafer-game/miniapp
```

```sh [yarn]
yarn add @leafer-game/miniapp
```

```sh [bun]
bun add @leafer-game/miniapp
```

:::

## 更新

了解如何 [快速更新版本](/guide/update.md)。

## 下载 CDN 版本

你也可以将库文件直接下载到本地 import 引入，这种方式暂时使用不了额外的插件。

```sh

https://unpkg.com/@leafer-game/miniapp@1.6.1/dist/miniapp.module.js

https://unpkg.com/@leafer-game/miniapp@1.6.1/dist/miniapp.module.min.js


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
import { Leafer, Rect } from '@leafer-game/miniapp'

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
