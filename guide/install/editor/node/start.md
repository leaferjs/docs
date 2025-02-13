# @leafer-editor/node

### [web 版](/guide/install/editor/start) &nbsp; &nbsp; [worker 版](/guide/install/editor/worker/start) &nbsp; &nbsp; node 版 &nbsp; &nbsp; [小程序版](/guide/install/editor/miniapp/start)

##

在服务端 node 环境中运行，可用于后台绘图、生成图片、自动化测试，能够 [模拟用户交互](/reference/event/simulation.md)。

基于 [@leafer-ui/node](/guide/install/ui/node/start.md)，集成了 [图形编辑器](/plugin/in/editor/)、[视口](/plugin/in/viewport/)、[视图控制](/plugin/in/view/) 、[滚动条](/plugin/in/scroll/)、[箭头](/plugin/in/arrow/)、[查找元素](/plugin/in/find/index.md)、[导出元素](/plugin/in/export/index.md) 插件，适用于在线图形编辑的场景。

## 安装

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

## skia &nbsp;｜&nbsp; [napi](./napi.md#skia-napi)

[skia-canvas](https://www.npmjs.com/package/skia-canvas) 用于在服务端环境中替代 Canvas 的功能， 底层基于 skia，需单独安装，安装编译时间会比较长，请耐心等待。

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

## 使用

使用方式、全局变量和 [@leafer-ui/node](/guide/install/ui/node/start.md)一致, 只需改下包名，即可运行官网示例代码。
