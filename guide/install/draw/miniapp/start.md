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

你也可以将库文件直接下载到本地 import 引入。

```sh

https://unpkg.com/@leafer-draw/miniapp@1.4.2/dist/miniapp.module.js

https://unpkg.com/@leafer-draw/miniapp@1.4.2/dist/miniapp.module.min.js


```

## 注意

微信小程序自身加载 svg 图片有问题。

阴影、遮罩等正在适配兼容性。

::: warning 温馨提示
微信小程序 iOS 端 3.0.0 之后 view 中的 canvas drawImage 无法绘制离屏画布，已找到办法绕过此限制，但仍有部分功能用不了（如图层混合模式，擦除，后续会继续适配）。

等待小程序官方[修复 bug](https://developers.weixin.qq.com/community/develop/doc/000264fc838f08be4d6002d9166c00), 大家可以一起去催一催。复杂应用建议先采用小程序的 [web-view](https://developers.weixin.qq.com/miniprogram/dev/component/web-view.html) 方式开发。
:::

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
