# @leafer-game/worker

Based on [@leafer-ui/worker](../../ui/worker/start.md), this package introduces plugins including [Robot](../../../../plugin/in/robot/index.md), [interaction state](../../../../plugin/in/state/index.md), [animation](../../../../plugin/in/animate/index.md), [motion path](../../../../plugin/in/motion-path/index.md), and [element search](../../../../plugin/in/find/index.md), making it suitable for game scenarios.

##

### [web version](../start.md)     worker version     [node version](../node/start.md)     [mini program version](../miniapp/start.md)

##

Runs in a Web Worker multithreaded background environment and cannot operate the DOM.

The web version and worker version can coexist in the same project and be used together as needed.

## Installation

::: code-group

```sh [npm]
npm install @leafer-game/worker
```

```sh [pnpm]
pnpm add @leafer-game/worker
```

```sh [yarn]
yarn add @leafer-game/worker
```

```sh [bun]
bun add @leafer-game/worker
```

:::

#### Or import via importScripts

Access internal features through the global variable LeaferUI.

::: code-group

```js [worker.min.js]
importScripts('https://unpkg.com/@leafer-game/worker@2.0.9/dist/worker.min.js')
```

```js [worker.js]
importScripts('https://unpkg.com/@leafer-game/worker@2.0.9/dist/worker.js')
```

:::

<!-- https://unpkg.com cannot be accessed, can be replaced with https://cdn.jsdelivr.net/npm -->

## Update

Learn how to [quickly update versions](../../../update.md).

## Usage

The usage, global variables, and [@leafer-ui/worker](../../ui/worker/start.md) are consistent. You only need to change the package name to run the official example code.
