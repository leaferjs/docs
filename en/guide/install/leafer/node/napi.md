# @leafer/node

Full package, includes [@leafer-ui/node](../../ui/node/start.md) and all `@leafer-in/*` plugin packages (excluding [text editor](../../../../plugin/in/text-editor/index.md) and [HTML](../../../../plugin/in/html/index.md) plugins).

##

### [web version](../start.md)     [worker version](../worker/start.md)     node version     [mini program version](../miniapp/start.md)

##

Runs in a server-side Node environment. It can be used for backend rendering, image generation, and automated testing, and can [simulate user interactions](../../../../reference/event/simulation.md).

## Installation

Runs in a server-side environment.

::: code-group

```sh [npm]
npm install @leafer/node
```

```sh [pnpm]
pnpm add @leafer/node
```

```sh [yarn]
yarn add @leafer/node
```

```sh [bun]
bun add @leafer/node
```

:::

If you need interactive features, please use [leafer-ui](../../ui/node/napi.md).

## [skia](./start.md#skia-napi)  ｜  napi

[@napi-rs/canvas](https://www.npmjs.com/package/@napi-rs/canvas) is used in server environments to replace Canvas functionality. It is also based on Skia, but wrapped with Rust, offering high performance and zero system dependencies. It must be installed separately.

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
