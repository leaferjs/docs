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
