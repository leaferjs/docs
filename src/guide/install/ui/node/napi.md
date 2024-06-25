# @leafer-ui/node

在服务端 node 环境中运行，可用于后台绘图、生成图片、自动化测试，能够 [模拟用户交互](/reference/event/simulation.md)。

## 安装

::: code-group

```sh[npm]
npm install @leafer-ui/node
```

```sh[pnpm]
pnpm add @leafer-ui/node
```

```sh[yarn]
yarn add @leafer-ui/node
```

```sh[bun]
bun add @leafer-ui/node
```

:::

## [skia](./start.md#skia-napi) &nbsp;｜&nbsp; napi

[@napi-rs/canvas](https://www.npmjs.com/package/@napi-rs/canvas) 用于在服务端环境中替代 Canvas 的功能， 底层也是基于 skia，不同的是使用 Rust 语言封装，高性能、零系统依赖，需单独安装。

:::tip
[NAPI-RS](https://napi.rs) 是一个在 Rust 下编写高性能 Node.js 扩展的框架。
:::

::: code-group

```sh[npm]
npm install @napi-rs/canvas
```

```sh[pnpm]
pnpm add @napi-rs/canvas
```

```sh[yarn]
yarn add @napi-rs/canvas
```

```sh[bun]
bun add @napi-rs/canvas
```

:::

### 体验

创建入口文件，实现一个包含矩形的画布，并生成图片显示。

::: code-group

<<< @/code/nodejs/napi/index.js

<<< @/code/nodejs/napi/esm.js [index.mjs]

:::

运行以下命令，然后在浏览器访问 localhost:3000

::: code-group

```sh [js]
node index.js
```

```sh [mjs]
node index.mjs
```

:::

###   使用自定义字体

通过 [@napi-rs/canvas](https://www.npmjs.com/package/@napi-rs/canvas) 的 GlobalFonts.registerFromPath() 方法加载字体后，再设置 fontFamily 即可。

https://www.npmjs.com/package/@napi-rs/canvas#emoji-text

### 中文无法显示的问题

https://www.saoniuhuo.com/question/detail-2645095.html
