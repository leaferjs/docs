# @leafer-ui/worker

### [web version](../start.md)    worker version    [node version](../node/start.md)    [mini-program version](../miniapp/start.md)

##

Runs in a Web Worker multi-threaded background environment and cannot access the DOM.

The web version and worker version can coexist in the same project and be used on demand.

Built on top of the [cross-platform core package](../core/index.md).

## Installation

::: code-group

```sh [npm]
npm install @leafer-ui/worker
```

```sh [pnpm]
pnpm add @leafer-ui/worker
```

```sh [yarn]
yarn add @leafer-ui/worker
```

```sh [bun]
bun add @leafer-ui/worker
```

:::

#### Or import via importScripts

Access internal features through the global `LeaferUI` variable.

::: code-group

```js [worker.min.js]
importScripts('https://unpkg.com/@leafer-ui/worker@2.0.9/dist/worker.min.js')
```

```js [worker.js]
importScripts('https://unpkg.com/@leafer-ui/worker@2.0.9/dist/worker.js')
```

:::

<!-- If unpkg is unavailable, you can switch to https://cdn.jsdelivr.net/npm -->

## Updates

Learn how to [quickly update versions](../../../update.md).

## Demo

Create a canvas with a rectangle in a Worker, and generate an image in the main thread for display.

::: code-group

<<< @/code/worker/index.js
<<< @/code/worker/worker.js
:::
