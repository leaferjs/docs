# leafer-draw

### [web 版](/guide/install/draw/start) &nbsp; &nbsp; [worker 版](/guide/install/draw/worker/start) &nbsp; &nbsp; node 版 &nbsp; &nbsp; [小程序版](/guide/install/draw/miniapp/start)

##

在服务端 node 环境中运行，可用于后台绘图、生成图片、自动化测试，能够 [模拟用户交互](/reference/event/simulation.md)。

相对 [@leafer-ui/node](/guide/install/ui/node/start.md)，减少了 [App](/reference/display/App.md) 、查找元素、事件交互等功能，适用于纯绘图场景。

## 安装

::: code-group

```sh [npm]
npm install @leafer-draw/node
```

```sh [pnpm]
pnpm add @leafer-draw/node
```

```sh [yarn]
yarn add @leafer-draw/node
```

```sh [bun]
bun add @leafer-draw/node
```

:::

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

## 使用

使用方式、全局变量和 [@leafer-ui/node](/guide/install/ui/node/napi.md)一致, 只需改下包名，即可运行官网示例代码。
