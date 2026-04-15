# @leafer-draw/miniapp

Compared to [@leafer-ui/miniapp](../../ui/miniapp/start.md), this package reduces features such as [App](../../../../reference/display/App.md) and event interactions, making it suitable for pure drawing scenarios.

##

### [web version](../start.md)     [worker version](../worker/start.md)     [node version](../node/start.md)     mini program version

##

Runs in a mini program environment.
[Learn about npm usage considerations in mini programs](https://developers.weixin.qq.com/miniprogram/dev/devtools/npm.html).

## Installation

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

## Update

Learn how to [quickly update versions](../../../update.md).

## Download CDN version

You can also download the library file locally and import it directly. This method currently cannot use additional plugins.

```sh
https://unpkg.com/@leafer-draw/miniapp@2.0.8/dist/miniapp.module.js

https://unpkg.com/@leafer-draw/miniapp@2.0.8/dist/miniapp.module.min.js
```

## Notes

1. WeChat Mini Program has issues loading SVG images。

2. Shadows and some features are still being adapted for compatibility。

3. When used in the [web-view](https://developers.weixin.qq.com/miniprogram/dev/component/web-view.html) component, WeChat JS-SDK uploads PNG images as JPG format. Please use native HTML5 input for uploading。

## Generate Poster

Create a rectangle, then export it as an image (offscreen canvas mode is supported)。

::: code-group

```ts [index.ts]
import { Leafer, Rect } from '@leafer-draw/miniapp'

Page({
  onReady() {
    // automatically create a 350*800 offscreen canvas
    const leafer = new Leafer({ width: 350, height: 800 })

    const rect = new Rect({
      x: 100,
      y: 100,
      width: 100,
      height: 100,
      fill: '#32cd79',
    })

    leafer.add(rect)

    // automatically save to album
    leafer.export('album.png', { screenshot: true }).then(() => {
      // logic to notify successful save to album
    })
  },
})
```

:::

## Usage

The usage, global variables, and [@leafer-ui/miniapp](../../ui/miniapp/start.md) are consistent. You only need to change the package name to run the official example code.
