# @leafer-ui/node

### [web version](../start.md)    [worker version](../worker/start.md)    node version    [mini-program version](../miniapp/start.md)

##

Runs in a Node.js server environment. It can be used for server-side rendering, image generation, and automated testing, and supports [simulated user interaction](../../../../reference/event/simulation.md).

Built on top of the [cross-platform core package](../core/index.md).

## Installation

::: code-group

```sh [npm]
npm install @leafer-ui/node
```

```sh [pnpm]
pnpm add @leafer-ui/node
```

```sh [yarn]
yarn add @leafer-ui/node
```

```sh [bun]
bun add @leafer-ui/node
```

:::

## [skia](./start.md#skia-napi)  ｜  napi

[@napi-rs/canvas](https://www.npmjs.com/package/@napi-rs/canvas) is used in server environments as a replacement for Canvas functionality. It is also based on Skia, but wrapped in Rust, offering high performance and zero system dependencies. It must be installed separately.

::: code-group

```sh [npm]
npm install @napi-rs/canvas
```

```sh [pnpm]
pnpm add @napi-rs/canvas
```

```sh [yarn]
yarn add @napi-rs/canvas
```

```sh [bun]
bun add @napi-rs/canvas
```

:::

## Updates

Learn how to [quickly update versions](../../../update.md).

## Demo

Create an entry file that renders a canvas with a rectangle and outputs an image.

::: code-group

<<< @/code/nodejs/napi/index.js
<<< @/code/nodejs/napi/esm.js [index.mjs]
:::

Run the following command, then open `localhost:3000` in your browser:

::: code-group

```sh [js]
node index.js
```

```sh [mjs]
node index.mjs
```

:::

## Using Custom Fonts

Load fonts via `GlobalFonts.registerFromPath()` from [@napi-rs/canvas](https://www.npmjs.com/package/@napi-rs/canvas), then set `fontFamily` accordingly.

[https://www.npmjs.com/package/@napi-rs/canvas#emoji-text](https://www.npmjs.com/package/@napi-rs/canvas#emoji-text)

```js
const { writeFileSync } = require('fs')
const { join } = require('path')

const { createCanvas, GlobalFonts } = require('@napi-rs/canvas')

GlobalFonts.registerFromPath(
  join(__dirname, '..', 'fonts', 'AppleColorEmoji@2x.ttf'),
  'Apple Emoji',
)
GlobalFonts.registerFromPath(
  join(__dirname, '..', '__test__', 'fonts', 'COLRv1.ttf'),
  'COLRv1',
)

console.info(GlobalFonts.families)

const canvas = createCanvas(760, 360)
const ctx = canvas.getContext('2d')

ctx.font = '50px Apple Emoji'
ctx.strokeText('😀😃😄😁😆😅😂🤣☺️😊😊😇', 50, 150)

ctx.font = '100px COLRv1'
ctx.fillText('abc', 50, 300)

const b = canvas.toBuffer('image/png')

writeFileSync(join(__dirname, 'draw-emoji.png'), b)
```

## Chinese text rendering issues

[https://www.saoniuhuo.com/question/detail-2645095.html](https://www.saoniuhuo.com/question/detail-2645095.html)
