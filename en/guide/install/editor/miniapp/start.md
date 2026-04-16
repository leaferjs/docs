# @leafer-editor/miniapp

Based on [@leafer-ui/miniapp](../../ui/miniapp/start.md), this package introduces plugins including [graphics editor](../../../../plugin/in/editor/index.md), [viewport](../../../../plugin/in/viewport/index.md), [view control](../../../../plugin/in/view/index.md), [scrollbar](../../../../plugin/in/scroll/index.md), [arrow](../../../../plugin/in/arrow/index.md), [element search](../../../../plugin/in/find/index.md), [export elements](../../../../plugin/in/export/index.md), and [scale-fixed plugin](../../../../plugin/in/scale-fixed/index.md), making it suitable for online graphics editing scenarios.

##

### [web version](../start.md)     [worker version](../worker/start.md)     [node version](../node/start.md)     mini program version

##

Runs in a mini program environment.
[Learn about npm usage considerations in mini programs](https://developers.weixin.qq.com/miniprogram/dev/devtools/npm.html).

## Installation

::: code-group

```sh [npm]
npm install @leafer-editor/miniapp
```

```sh [pnpm]
pnpm add @leafer-editor/miniapp
```

```sh [yarn]
yarn add @leafer-editor/miniapp
```

```sh [bun]
bun add @leafer-editor/miniapp
```

:::

## Update

Learn how to [quickly update versions](../../../update.md).

## Download CDN version

You can also download the library file locally and import it directly. This method currently cannot use additional plugins.

```sh
https://unpkg.com/@leafer-editor/miniapp@2.0.8/dist/miniapp.module.js

https://unpkg.com/@leafer-editor/miniapp@2.0.8/dist/miniapp.module.min.js
```

## Notes

1. WeChat Mini Program has issues loading SVG images。

2. Shadows and some features are still being adapted for compatibility。

3. When used in the [web-view](https://developers.weixin.qq.com/miniprogram/dev/component/web-view.html) component, WeChat JS-SDK uploads PNG images as JPG format. Please use native HTML5 input for uploading。

## 体验

Create an interactive engine that supports landscape mode and allows dragging rectangles。

Replace the page under `miniprogram/pages/index` with the following content：

::: code-group

```ts [index.ts]
import { Leafer, Rect } from '@leafer-editor/miniapp'

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

### App Structure - Graphics Editor

Since the iOS version does not support drawImage with offscreen canvas, the required canvases need to be created in advance in the wxml file, and assigned in the tree / sky layers。

::: code-group

```ts [index.ts]
import { App, Rect } from '@leafer-editor/miniapp'

Page({
  onReady() {
    // this refers to the current mini program page instance
    const app = new App({
      view: 'leafer',
      mobile: true, // optimize mobile experience
      tree: { canvas: 'leafer-tree' }, // canvas must be specified
      sky: { canvas: 'leafer-sky' },
      editor: {}, // editor instance will be created automatically
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
  receiveEvent() {}, // predefined method for receiving interaction events
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

## Generate Poster

Create a rectangle, then export it as an image (offscreen canvas mode is supported)。

::: code-group

```ts [index.ts]
import { Leafer, Rect } from '@leafer-editor/miniapp'

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
