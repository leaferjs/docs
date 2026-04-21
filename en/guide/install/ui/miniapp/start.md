# @leafer-ui/miniapp

### [web version](../start.md)    [worker version](../worker/start.md)    [node version](../node/start.md)    mini-program version

##

Runs in a mini-program environment.

Built on top of the [cross-platform core package](../core/index.md).

## Installation

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

## Updates

Learn how to [quickly update versions](../../../update.md).

## Using npm packages in WeChat DevTools

[Please first read the official notes on using npm in mini-programs](https://developers.weixin.qq.com/miniprogram/dev/devtools/npm.html), and enable “compile JS to ES5” in WeChat DevTools.

We found a **build export bug** when multiple packages are bundled. After the first npm build/run, you need to apply the following replacement inside `miniprogram_npm` for correct behavior:

```sh
# Search in miniprogram_npm for:
Object.defineProperty(exports, k, { enumerable: true, configurable: true, get: function() { return __TEMP__[k]; } });

# Replace with:
var __TEMP2__ = __TEMP__; Object.defineProperty(exports, k, { enumerable: true, configurable: true, get: function() { return __TEMP2__[k]; } });

# Reason: __TEMP__ gets overwritten by later packages, causing getters to fail.
```

## Download CDN build

You can also download the library and import it locally (this method currently does not support extra plugins).

```sh
https://unpkg.com/@leafer-ui/miniapp@2.0.9/dist/miniapp.module.js

https://unpkg.com/@leafer-ui/miniapp@2.0.9/dist/miniapp.module.min.js
```

## Environment

WeChat mini-program base library >= 3.6.0

Other mini-program platforms will be supported gradually (starting with Canvas 2D APIs).

## Notes

1. WeChat mini-program has issues loading SVG images.
2. Shadow effects and similar features are still being adapted.
3. When used inside a [web-view](https://developers.weixin.qq.com/miniprogram/dev/component/web-view.html), WeChat JS-SDK upload may convert PNG to JPG—use native HTML input upload instead.

## Demo

Create an interactive engine that supports landscape mode and draggable rectangles.

Replace your `miniprogram/pages/index` with the following:

::: code-group

```ts [index.ts]
import { Leafer, Rect } from '@leafer-ui/miniapp'

Page({
  onReady() {
    // `this` is the current page instance
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
  receiveEvent() {}, // event handler entry
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

## App structure – Graphic Editor

Due to iOS not supporting `drawImage` offscreen canvas, canvases must be created in advance in WXML and explicitly assigned in `tree / sky`.

::: code-group

```ts [index.ts]
import { App, Rect } from '@leafer-ui/miniapp'
import '@leafer-in/editor' // import editor plugin

Page({
  onReady() {
    const app = new App({
      view: 'leafer',
      mobile: true,
      tree: { canvas: 'leafer-tree' },
      sky: { canvas: 'leafer-sky' },
      editor: {},
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
  receiveEvent() {},
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
<canvas id="leafer-tree" type="2d"></canvas>
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

## Export poster

Save to album automatically.

```ts
leafer.export('album.png').then(() => {
  // success callback
})
```

## Other platforms

### [uniapp usage](./uniapp.md)

### [taro usage](./taro.md)

Before using, enable “compile JS to ES5” in WeChat DevTools, otherwise errors may occur.

If you see a “module not defined” error, manually install these core dependencies:

```ts
@leafer/core
@leafer-ui/core
@leafer-ui/draw
```

## Platform extension

Currently only global variable binding is provided for platform adaptation. You can override platform code if needed:

```ts
import { useCanvas } from '@leafer-ui/miniapp'

useCanvas('canvas', wx)
```

## Case studies

### Web-view based mini-program demos

![Qu Design](https://leaferjs.com/image/case/qu.jpg)

![Bead Design](https://leaferjs.com/image/case/zhuzi.jpg)

### Uniapp native mini-program demos

![Spinner](https://leaferjs.com/image/case/dzp.jpg)

![Emoji Creator](https://leaferjs.com/image/case/face.jpg)
