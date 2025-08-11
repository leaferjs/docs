# @leafer-ui/miniapp

### [web 版](/guide/install/ui/start.md) &nbsp; &nbsp; [worker 版](/guide/install/ui/worker/start.md) &nbsp; &nbsp; [node 版](/guide/install/ui/node/start.md) &nbsp; &nbsp; 小程序版

##

在小程序环境中运行。

## 安装

::: code-group

```sh [npm]
npm install @leafer-ui/miniapp
```

```sh [pnpm]
pnpm add @leafer-ui/miniapp
```

```sh [yarn]
yarn add @leafer-ui/miniapp
```

```sh [bun]
bun add @leafer-ui/miniapp
```

:::

## 更新

了解如何 [快速更新版本](/guide/update.md)。

## 微信开发工具中使用 npm 包

[需先了解小程序使用 npm 包的注意事项](https://developers.weixin.qq.com/miniprogram/dev/devtools/npm.html)，并在微信开发工具中勾选将 JS 转换为 ES5。

目前发现多包依赖构建出的编译产物有一个 **导出 bug**，需要等待 npm 编译并运行完一次后，进行以下替换才能正常使用。

```sh
# 在 miniprogram_npm 文件夹中查找以下内容
 Object.defineProperty(exports, k, { enumerable: true, configurable: true, get: function() { return __TEMP__[k]; } });

# 替换为
var __TEMP2__ =__TEMP__; Object.defineProperty(exports, k, { enumerable: true, configurable: true, get: function() { return __TEMP2__[k]; } });

# 产生bug的原因： __TEMP__ 会被后面的包覆盖掉，导致 get 不到 __TEMP__[k] 的内容
```

## 下载 CDN 版本

你也可以将库文件直接下载到本地 import 引入，这种方式暂时使用不了额外的插件。

```sh

https://unpkg.com/@leafer-ui/miniapp@1.9.2/dist/miniapp.module.js

https://unpkg.com/@leafer-ui/miniapp@1.9.2/dist/miniapp.module.min.js
```

## 环境

微信小程序基础库 >= 3.6.0

其他平台等小程序也会陆续支持（先支持 canvas 2d 接口）

## 注意

1. 微信小程序自身加载 svg 图片有问题。

2. 阴影等正在适配兼容性。

3. 在 [web-view](https://developers.weixin.qq.com/miniprogram/dev/component/web-view.html) 组件中使用时，微信 JS-SDK 上传 PNG 图片会变成 JPG 格式，请使用 HTML5 原生的 input 框上传。

## 体验

创建一个交互引擎，能够横屏，可以拖拽矩形。

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

### App 结构 - 图形编辑器

由于 iOS 版不支持 drawImage 离屏画布，需把用到的画布提前在 wxml 文件中创建好， 并在 tree / sky 层中指定 canvas。

::: code-group

```ts [index.ts]
import { App, Rect } from '@leafer-ui/miniapp'
import '@leafer-in/editor' // 导入图形编辑器插件

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

### 生成海报

自动保存到相册。

```ts
leafer.export('album.png').then(() => {
  // 提示保存到相册成功逻辑
})
```

## 其他平台

### [在 uniapp 中使用](./uniapp.md)

### [在 taro 中使用](./taro.md)

使用前请在微信开发工具中勾选将 JS 转换为 ES5，否则会报错。

如出现 module 未定义报错，需手动安装以下 3 个核心依赖包：

```ts
@leafer/core
@leafer-ui/core
@leafer-ui/draw
```

## 扩展平台

目前仅提供全局变量的绑定来适配不同平台，可 [覆盖 Platform 代码](https://github.com/leaferjs/leafer/blob/main/packages/platform/miniapp/src/index.ts) 自定义适配。

```ts
import { useCanvas } from '@leafer-ui/miniapp'

useCanvas('canvas', wx) // 默认全局变量绑定微信小程序, 可绑定到其他平台， 内部常用的属性方法需同 wx 一致
```

## 体验产品案例

### 采用小程序 [web-view](https://developers.weixin.qq.com/miniprogram/dev/component/web-view.html) 组件实现的案例

![趣设计](https://leaferjs.com/image/case/qu.jpg)

![珠串设计](https://leaferjs.com/image/case/zhuzi.jpg)

### 采用 uniapp 实现的原生小程序案例

![转盘侠](https://leaferjs.com/image/case/dzp.jpg)

![创意表情](https://leaferjs.com/image/case/face.jpg)
