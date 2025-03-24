# @leafer-draw/miniapp

相对 [@leafer-ui/miniapp](/guide/install/ui/miniapp/start.md)，减少了 [App](/reference/display/App.md) 、事件交互等功能，适用于纯绘图场景。

##

### [web 版](/guide/install/draw/start.md) &nbsp; &nbsp; [worker 版](/guide/install/draw/worker/start.md) &nbsp; &nbsp; [node 版](/guide/install/draw/node/start.md) &nbsp; &nbsp; 小程序版

##

在小程序环境中运行，[了解小程序使用 npm 包的注意事项](https://developers.weixin.qq.com/miniprogram/dev/devtools/npm.html)。

## 安装

::: code-group

```sh [npm]
npm install @leafer-draw/miniapp
```

```sh [pnpm]
pnpm add @leafer-draw/miniapp
```

```sh [yarn]
yarn add @leafer-draw/miniapp
```

```sh [bun]
bun add @leafer-draw/miniapp
```

:::

## 下载 CDN 版本

你也可以将库文件直接下载到本地 import 引入，这种方式暂时使用不了额外的插件。

```sh

https://unpkg.com/@leafer-draw/miniapp@1.5.0/dist/miniapp.module.js

https://unpkg.com/@leafer-draw/miniapp@1.5.0/dist/miniapp.module.min.js


```

## 注意

1. 微信小程序自身加载 svg 图片有问题。

2. 阴影等正在适配兼容性。

3. 在 [web-view](https://developers.weixin.qq.com/miniprogram/dev/component/web-view.html) 组件中使用时，微信 JS-SDK 上传 PNG 图片会变成 JPG 格式，请使用 HTML5 原生的 input 框上传。

## 生成海报

创建一个矩形, 然后导出为图片（离屏画布模式可用）。

::: code-group

```ts [index.ts]
import { Leafer, Rect } from '@leafer-draw/miniapp'

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
