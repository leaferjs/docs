# @leafer-game/miniapp

Based on [@leafer-ui/miniapp](../../ui/miniapp/start.md), this package introduces plugins including [Robot](../../../../plugin/in/robot/index.md), [interaction state](../../../../plugin/in/state/index.md), [animation](../../../../plugin/in/animate/index.md), [motion path](../../../../plugin/in/motion-path/index.md), and [element search](../../../../plugin/in/find/index.md), making it suitable for game scenarios.

##

### [web version](../start.md)     [worker version](../worker/start.md)     [node version](../node/start.md)     mini program version

##

Runs in a mini program environment.
[Learn about npm usage considerations in mini programs](https://developers.weixin.qq.com/miniprogram/dev/devtools/npm.html).

## Installation

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

## Update

Learn how to [quickly update versions](../../../update.md).

## Download CDN version

You can also download the library file locally and import it directly. This method currently cannot use additional plugins.

```sh
https://unpkg.com/@leafer-game/miniapp@2.1.0/dist/miniapp.module.js

https://unpkg.com/@leafer-game/miniapp@2.1.0/dist/miniapp.module.min.js
```

## Notes

1. WeChat Mini Program has issues loading SVG images.
2. Shadows and some features are still being adapted for compatibility.
3. When used in the [web-view](https://developers.weixin.qq.com/miniprogram/dev/component/web-view.html) component, WeChat JS-SDK uploads PNG images as JPG format. Please use native HTML5 input for uploading.

## Try it

Create an interactive engine that supports landscape mode and allows dragging rectangles.

Replace the page under `miniprogram/pages/index` with the following content:

::: code-group

```ts [index.ts]
import { Leafer, Rect } from '@leafer-game/miniapp'

Page({
  onReady() {
    // this refers to the current mini program page instance
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
  receiveEvent() {}, // predefined method for receiving interaction events
})
```

```xml [index.wxml]
<canvas

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

## Usage

The usage, global variables, and [@leafer-ui/miniapp](../../ui/miniapp/start.md) are consistent. You only need to change the package name to run the official example code.
