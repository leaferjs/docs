# @leafer/worker

Full package, includes [@leafer-ui/worker](../../ui/worker/start.md) and all `@leafer-in/*` plugin packages.

##

### [web version](../start.md)     worker version     [node version](../node/start.md)     [mini program version](../miniapp/start.md)

##

Runs in a Web Worker multithreaded background environment and cannot operate the DOM.

The web version and worker version can coexist in the same project and be used together as needed.

## Installation

::: code-group

```sh [npm]
npm install @leafer/worker
```

```sh [pnpm]
pnpm add @leafer/worker
```

```sh [yarn]
yarn add @leafer/worker
```

```sh [bun]
bun add @leafer/worker
```

:::

#### Or import via importScripts

Access internal features through the global variable LeaferUI.

::: code-group

```js [worker.min.js]
importScripts('https://unpkg.com/@leafer/worker@2.0.8/dist/worker.min.js')
```

```js [worker.js]
importScripts('https://unpkg.com/@leafer/worker@2.0.8/dist/worker.js')
```

:::

<!-- https://unpkg.com 无法访问时，可替换为 https://cdn.jsdelivr.net/npm -->

## Update

Learn how to [quickly update versions](../../../update.md).

## Usage

The usage, global variables, and [@leafer-ui/worker](../../ui/worker/start.md) are the same. You only need to change the package name to run the official example code.
