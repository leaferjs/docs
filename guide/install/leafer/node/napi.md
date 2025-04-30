# @leafer/node

全量包，包含 [@leafer-ui/node](/guide/install/ui/node/start.md) 和 `@leafer-in/*` 所有插件包（[文本编辑](/plugin/in/text-editor/index.md)、[HTML](/plugin/in/html/index.md)插件除外）。

##

### [web 版](/guide/install/leafer/start.md) &nbsp; &nbsp; [worker 版](/guide/install/leafer/worker/start.md) &nbsp; &nbsp; node 版 &nbsp; &nbsp; [小程序版](/guide/install/leafer/miniapp/start.md)

##

在服务端 node 环境中运行，可用于后台绘图、生成图片、自动化测试，能够 [模拟用户交互](/reference/event/simulation.md)。

## 安装

在服务端环境中运行。

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

如果你需要交互功能，请使用 [leafer-ui](/guide/install/ui/node/napi.md)。

## [skia](./start.md#skia-napi) &nbsp;｜&nbsp; napi

[@napi-rs/canvas](https://www.npmjs.com/package/@napi-rs/canvas) 用于在服务端环境中替代 Canvas 的功能， 底层也是基于 skia，不同的是使用 Rust 语言封装，高性能、零系统依赖，需单独安装。

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

## 更新

了解如何 [快速更新版本](/guide/update.md)。

## 使用

使用方式、全局变量和 [@leafer-ui/node](/guide/install/ui/node/napi.md)一致, 只需改下包名，即可运行官网示例代码。
