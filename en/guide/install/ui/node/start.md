# @leafer-ui/node

### [web version](../start.md)    [worker version](../worker/start.md)    node version    [mini-program version](../miniapp/start.md)

##

Runs in a server-side Node.js environment. It can be used for background rendering, image generation, and automated testing, and supports [simulated user interaction](../../../../reference/event/simulation.md).

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

## skia  ｜  [napi](./napi.md#skia-napi)

[skia-canvas](https://www.npmjs.com/package/skia-canvas) is used in server environments as a replacement for Canvas functionality. It is based on Skia and must be installed separately. Compilation may take some time, please be patient.

::: code-group

```sh [npm]
npm install skia-canvas
```

```sh [pnpm]
pnpm add skia-canvas
```

```sh [yarn]
yarn add skia-canvas
```

```sh [bun]
bun add skia-canvas
```

:::

## Updates

Learn how to [quickly update versions](../../../update.md).

## Demo

Create an entry file that renders a canvas with a rectangle and outputs an image.

::: code-group

<<< @/code/nodejs/skia/index.js
<<< @/code/nodejs/skia/esm.js [index.mjs]
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

Load fonts via `FontLibrary.use()` from [skia-canvas](https://www.npmjs.com/package/skia-canvas), then set `fontFamily`.

[https://skia-canvas.org/api/font-library](https://skia-canvas.org/api/font-library)

```js
import { FontLibrary } from 'skia-canvas'

// with default family name
FontLibrary.use([
  'fonts/Oswald-Regular.ttf',
  'fonts/Oswald-SemiBold.ttf',
  'fonts/Oswald-Bold.ttf',
])

// with an alias
FontLibrary.use('Grizwald', [
  'fonts/Oswald-Regular.ttf',
  'fonts/Oswald-SemiBold.ttf',
  'fonts/Oswald-Bold.ttf',
])
```
