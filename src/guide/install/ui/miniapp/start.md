# @leafer-ui/miniapp

在小程序环境中运行，[了解小程序使用 npm 包的注意事项](https://developers.weixin.qq.com/miniprogram/dev/devtools/npm.html)。

## 安装

::: code-group

```sh[npm]
npm install @leafer-ui/miniapp
```

```sh[pnpm]
pnpm add @leafer-ui/miniapp
```

```sh[yarn]
yarn add @leafer-ui/miniapp
```

```sh[bun]
bun add @leafer-ui/miniapp
```

:::

## 下载

你也可以将库文件直接下载到本地 import 引入。

```sh

https://unpkg.com/@leafer-ui/miniapp@1.0.0/dist/miniapp.module.js

https://unpkg.com/@leafer-ui/miniapp@1.0.0/dist/miniapp.module.min.js
```

## 环境

微信小程序基础库 >= 2.30.0

其他平台等小程序也会陆续支持（先支持 canvas 2d 接口）

## 注意

微信小程序自身加载 svg 图片有问题。

阴影、遮罩等正在适配兼容性。

:::danger 重要警告
微信小程序 iOS 端 3.0.0 之后 view 中的 canvas drawImage 无法绘制离屏画布 导致白屏（leafer-draw 的纯离屏画布模式可用）。

等待小程序官方[修复 bug](https://developers.weixin.qq.com/community/develop/doc/000264fc838f08be4d6002d9166c00), 大家可以一起去催一催。建议先采用小程序的 [web-view](https://developers.weixin.qq.com/miniprogram/dev/component/web-view.html) 组件实现交互功能。
:::

## 体验

创建一个交互应用，能够横屏，可以缩放平移视图、拖拽矩形。

将小程序 miniprogram/pages/index 文件夹下的页面替换成如下内容：

::: code-group

```ts [index.ts]
import { Leafer, Rect } from '@leafer-ui/miniapp'

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

### 生成海报

自动保存到相册。

```ts
leafer.export('album.png').then(() => {
  // 提示保存到相册成功逻辑
})
```

## 体验产品案例

采用小程序的 [web-view](https://developers.weixin.qq.com/miniprogram/dev/component/web-view.html) 组件实现。

![webview小程序产品案例](https://leaferjs.com/image/case/zhuzi.jpg)
