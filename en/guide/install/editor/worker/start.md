# @leafer-editor/worker

Based on [@leafer-ui/worker](../../ui/worker/start.md), this package introduces plugins including [graphics editor](../../../../plugin/in/editor/index.md), [text editor](../../../../plugin/in/text-editor/index.md), [viewport](../../../../plugin/in/viewport/index.md), [view control](../../../../plugin/in/view/index.md), [scrollbar](../../../../plugin/in/scroll/index.md), [arrow](../../../../plugin/in/arrow/index.md), [HTML](../../../../plugin/in/html/index.md), [element search](../../../../plugin/in/find/index.md), [export elements](../../../../plugin/in/export/index.md), and [scale-fixed plugin](../../../../plugin/in/scale-fixed/index.md), making it suitable for online graphics editing scenarios.

##

### [web version](../start.md)     worker version     [node version](../node/start.md)     [mini program version](../miniapp/start.md)

##

Runs in a Web Worker multithreaded background environment and cannot operate the DOM.

The web version and worker version can coexist in the same project and be used together as needed.

## Installation

::: code-group

```sh [npm]
npm install @leafer-editor/worker
```

```sh [pnpm]
pnpm add @leafer-editor/worker
```

```sh [yarn]
yarn add @leafer-editor/worker
```

```sh [bun]
bun add @leafer-editor/worker
```

:::

#### Or import via importScripts

Access internal features through the global variable LeaferUI.

::: code-group

```js [worker.min.js]
importScripts(
  'https://unpkg.com/@leafer-editor/worker@2.1.0/dist/worker.min.js',
)
```

```js [worker.js]
importScripts('https://unpkg.com/@leafer-editor/worker@2.1.0/dist/worker.js')
```

:::

<!-- https://unpkg.com cannot be accessed, can be replaced with https://cdn.jsdelivr.net/npm -->

## Update

Learn how to [quickly update versions](../../../update.md).

## Usage

The usage, global variables, and [@leafer-ui/worker](../../ui/worker/start.md) are consistent. You only need to change the package name to run the official example code.
