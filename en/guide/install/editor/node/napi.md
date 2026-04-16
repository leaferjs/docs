# @leafer-editor/node

Based on [@leafer-ui/node](../../ui/node/start.md), this package introduces plugins including [graphics editor](../../../../plugin/in/editor/index.md), [viewport](../../../../plugin/in/viewport/index.md), [view control](../../../../plugin/in/view/index.md), [scrollbar](../../../../plugin/in/scroll/index.md), [arrow](../../../../plugin/in/arrow/index.md), [element search](../../../../plugin/in/find/index.md), [export elements](../../../../plugin/in/export/index.md), and [scale-fixed plugin](../../../../plugin/in/scale-fixed/index.md), making it suitable for online graphics editing scenarios.

##

### [web version](../start.md)     [worker version](../worker/start.md)     node version     [mini program version](../miniapp/start.md)

##

Runs in a server-side Node environment. It can be used for backend rendering, image generation, and automated testing, and can [simulate user interactions](../../../../reference/event/simulation.md).

## Installation

Runs in a server-side environment.

::: code-group

```sh [npm]
npm install @leafer-editor/node
```

```sh [pnpm]
pnpm add @leafer-editor/node
```

```sh [yarn]
yarn add @leafer-editor/node
```

```sh [bun]
bun add @leafer-editor/node
```

:::

If you need interactive features, please use [leafer-ui](../../ui/node/napi.md).

## [skia](./start.md#skia-napi)  ｜  napi

[@napi-rs/canvas](https://www.npmjs.com/package/@napi-rs/canvas) is used in server environments to replace Canvas functionality. It is also based on Skia, but unlike skia-canvas, it is wrapped in Rust, offering high performance and zero system dependencies. It must be installed separately.

:::tip
[NAPI-RS](https://napi.rs) 是一个在 Rust 下编写高性能 Node.js 扩展的框架。
:::

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

## Update

Learn how to [quickly update versions](../../../update.md).

## Usage

The usage, global variables, and [@leafer-ui/node](../../ui/node/napi.md) are consistent. You only need to change the package name to run the official example code.
