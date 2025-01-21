# @leafer-game/miniapp

在小程序环境中运行，[了解小程序使用 npm 包的注意事项](https://developers.weixin.qq.com/miniprogram/dev/devtools/npm.html)。

基于 [@leafer-ui/miniapp](/guide/install/ui/miniapp/start.md)，集成了 [Robot](/plugin/in/robot/) 、[交互状态](/plugin/in/state/) 、 [动画](/plugin/in/animate/)、[运动路径](/plugin/in/motion-path/)、[查找元素](/plugin/in/find/index.md) 插件，适用于小游戏场景。

## 安装

::: code-group

```sh[npm]
npm install @leafer-game/miniapp
```

```sh[pnpm]
pnpm add @leafer-game/miniapp
```

```sh[yarn]
yarn add @leafer-game/miniapp
```

```sh[bun]
bun add @leafer-game/miniapp
```

:::

## 下载 CDN 版本

你也可以将库文件直接下载到本地 import 引入。

```sh

https://unpkg.com/@leafer-game/miniapp@1.3.3/dist/miniapp.module.js

https://unpkg.com/@leafer-game/miniapp@1.3.3/dist/miniapp.module.min.js


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
import { Leafer, Rect } from '@leafer-game/miniapp'

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
