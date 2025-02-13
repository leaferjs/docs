# @leafer-game/worker

### [web 版](/guide/install/game/start) &nbsp; &nbsp; worker 版 &nbsp; &nbsp; [node 版](/guide/install/game/node/start) &nbsp; &nbsp; [小程序版](/guide/install/game/miniapp/start)

##

在 WebWorker 环境中运行。

基于 [@leafer-ui/worker](/guide/install/ui/worker/start.md)，集成了 [Robot](/plugin/in/robot/) 、[交互状态](/plugin/in/state/) 、 [动画](/plugin/in/animate/)、[运动路径](/plugin/in/motion-path/)、[查找元素](/plugin/in/find/index.md) 插件，适用于小游戏场景。

## 安装

::: code-group

```sh [npm]
npm install @leafer-game/worker
```

```sh [pnpm]
pnpm add @leafer-game/worker
```

```sh [yarn]
yarn add @leafer-game/worker
```

```sh [bun]
bun add @leafer-game/worker
```

:::

## importScripts 引入

通过全局变量 LeaferUI 访问内部功能。

::: code-group

```js [worker.min.js]
importScripts('https://unpkg.com/@leafer-game/worker@1.4.0/dist/worker.min.js')
```

```js [worker.js]
importScripts('https://unpkg.com/@leafer-game/worker@1.4.0/dist/worker.js')
```

:::

https://unpkg.com 无法访问时，可替换为 https://cdn.jsdelivr.net/npm

## 使用

使用方式、全局变量和 [@leafer-ui/worker](/guide/install/ui/worker/start.md)一致, 只需改下包名，即可运行官网示例代码。
