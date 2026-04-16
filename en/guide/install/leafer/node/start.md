# @leafer/node

Full package, includes [@leafer-ui/node](../../ui/node/start.md) and all `@leafer-in/*` plugin packages (excluding [text editor](../../../../plugin/in/text-editor/index.md) and [HTML](../../../../plugin/in/html/index.md) plugins).

##

### [web version](../start.md)     [worker version](../worker/start.md)     node version     [mini program version](../miniapp/start.md)

##

Runs in a server-side Node environment. It can be used for backend rendering, image generation, and automated testing, and can [simulate user interactions](../../../../reference/event/simulation.md).

## Installation

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

## skia  ｜  [napi](./napi.md#skia-napi)

[skia-canvas](https://www.npmjs.com/package/skia-canvas) is used in server environments to replace Canvas functionality. It is built on top of Skia. It must be installed separately, and compilation may take a long time. Please be patient.

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

## Update

Learn how to [quickly update versions](../../../update.md).

## Usage

The usage, global variables, and [@leafer-ui/node](../../ui/node/start.md) are consistent. You only need to change the package name to run the official example code.
