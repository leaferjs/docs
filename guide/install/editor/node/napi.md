# @leafer-editor/node

### [web 版](/guide/install/editor/start) &nbsp; &nbsp; [worker 版](/guide/install/editor/worker/start) &nbsp; &nbsp; node 版 &nbsp; &nbsp; [小程序版](/guide/install/editor/miniapp/start)

##

在服务端 node 环境中运行，可用于后台绘图、生成图片、自动化测试，能够 [模拟用户交互](/reference/event/simulation.md)。

基于 [@leafer-ui/node](/guide/install/ui/node/start.md)，集成了 [图形编辑器](/plugin/in/editor/)、[视口](/plugin/in/viewport/)、[视图控制](/plugin/in/view/) 、[滚动条](/plugin/in/scroll/)、[箭头](/plugin/in/arrow/)、[查找元素](/plugin/in/find/index.md)、[导出元素](/plugin/in/export/index.md) 插件，适用于在线图形编辑的场景。

## 安装

在服务端环境中运行。

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

## 使用

使用方式、全局变量和 [@leafer-ui/node](/guide/install/ui/node/napi.md)一致, 只需改下包名，即可运行官网示例代码。
