# @leafer-game/node

在 [@leafer-ui/node](/guide/install/ui/node/start.md) 基础上，引入了 [Robot](/plugin/in/robot/index.md) 、[交互状态](/plugin/in/state/index.md) 、 [动画](/plugin/in/animate/index.md)、[运动路径](/plugin/in/motion-path/index.md)、[查找元素](/plugin/in/find/index.md)、[导出元素](/plugin/in/export/index.md) 插件，适用于小游戏场景。

##

### [web 版](/guide/install/game/start.md) &nbsp; &nbsp; [worker 版](/guide/install/game/worker/start.md) &nbsp; &nbsp; node 版 &nbsp; &nbsp; [小程序版](/guide/install/game/miniapp/start.md)

##

在服务端 node 环境中运行，可用于后台绘图、生成图片、自动化测试，能够 [模拟用户交互](/reference/event/simulation.md)。

## 安装

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

## 更新

了解如何 [快速更新版本](/guide/update.md)。

## 使用

使用方式、全局变量和 [@leafer-ui/node](/guide/install/ui/node/start.md)一致, 只需改下包名，即可运行官网示例代码。
