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

https://unpkg.com/@leafer-ui/miniapp@1.0.1/dist/miniapp.module.js

https://unpkg.com/@leafer-ui/miniapp@1.0.1/dist/miniapp.module.min.js
```

## 环境

微信小程序基础库 >= 2.30.0

其他平台等小程序也会陆续支持（先支持 canvas 2d 接口）

## 注意

微信小程序自身加载 svg 图片有问题。

阴影、遮罩（iOS 端 path 类型可用）等正在适配兼容性。

::: warning 温馨提示
微信小程序 iOS 端 3.0.0 之后 view 中的 canvas drawImage 无法绘制离屏画布，已找到办法绕过此限制，但仍有部分高级功能用不了（后续会继续适配）。

等待小程序官方[修复 bug](https://developers.weixin.qq.com/community/develop/doc/000264fc838f08be4d6002d9166c00), 大家可以一起去催一催。复杂应用建议先采用小程序的 [web-view](https://developers.weixin.qq.com/miniprogram/dev/component/web-view.html) 方式开发。
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
      sky: { canvas: 'leafer-sky', type: 'draw' },
      editor: {}, // 会自动创建 editor实例、tree层、sky层
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

## 在其他平台中使用

### 扩展平台

目前仅提供全局变量的绑定来适配不同平台，后续会开放更多的平台接口用于自定义适配。

```ts
import { useCanvas } from '@leafer-ui/miniapp'

// useCanvas('wx', wx) 默认全局变量绑定微信小程序

useCanvas('uniapp', uni) // 全局变量绑定改为 uni， 内部常用的属性方法需同 wx 一致
```

### uniapp

需注意 eventer 的页面实例取值，具体情况可查看 [#47](https://github.com/leaferjs/ui/issues/47)

```ts
const pages = getCurrentPages()

leafer = new Leafer({
  view: 'leafer',
  eventer: pages[pages.length - 1], // 最后一个元素为当前页面实例
})
```

## 体验产品案例

采用小程序的 [web-view](https://developers.weixin.qq.com/miniprogram/dev/component/web-view.html) 组件实现。

![webview小程序产品案例](https://leaferjs.com/image/case/zhuzi.jpg)
