# @leafer-game/node

Based on [@leafer-ui/node](../../ui/node/start.md), this package introduces plugins including [Robot](../../../../plugin/in/robot/index.md), [interaction state](../../../../plugin/in/state/index.md), [animation](../../../../plugin/in/animate/index.md), [motion path](../../../../plugin/in/motion-path/index.md), [element search](../../../../plugin/in/find/index.md), and [export elements](../../../../plugin/in/export/index.md), making it suitable for game scenarios.

##

### [web version](../start.md)     [worker version](../worker/start.md)     node version     [mini program version](../miniapp/start.md)

##

Runs in a server-side Node environment. It can be used for backend rendering, image generation, and automated testing, and can [simulate user interactions](../../../../reference/event/simulation.md).

## Installation

::: code-group

```sh [npm]
npm install @leafer-game/node
```

```sh [pnpm]
pnpm add @leafer-game/node
```

```sh [yarn]
yarn add @leafer-game/node
```

```sh [bun]
bun add @leafer-game/node
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
