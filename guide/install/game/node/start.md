# @leafer-game/node

在服务端 node 环境中运行，可用于后台绘图、生成图片、自动化测试，能够 [模拟用户交互](/reference/event/simulation.md)。

基于 [@leafer-ui/node](/guide/install/ui/node/start.md)，集成了 [Robot](/plugin/in/robot/) 、[交互状态](/plugin/in/state/) 、 [动画](/plugin/in/animate/)、[运动路径](/plugin/in/motion-path/) 插件，适用于小游戏场景。

## 安装

::: code-group

```sh[npm]
npm install @leafer-game/node
```

```sh[pnpm]
pnpm add @leafer-game/node
```

```sh[yarn]
yarn add @leafer-game/node
```

```sh[bun]
bun add @leafer-game/node
```

:::

## skia &nbsp;｜&nbsp; [napi](./napi.md#skia-napi)

[skia-canvas](https://www.npmjs.com/package/skia-canvas) 用于在服务端环境中替代 Canvas 的功能， 底层基于 skia，需单独安装，安装编译时间会比较长，请耐心等待。

::: code-group

```sh[npm]
npm install skia-canvas
```

```sh[pnpm]
pnpm add skia-canvas
```

```sh[yarn]
yarn add skia-canvas
```

```sh[bun]
bun add skia-canvas
```

:::

## 使用

使用方式、全局变量和 [@leafer-ui/node](/guide/install/ui/node/start.md)一致, 只需改下包名，即可运行官网示例代码。
