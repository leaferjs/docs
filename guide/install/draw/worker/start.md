# @leafer-draw/worker

相对 [@leafer-ui/worker](/guide/install/ui/worker/start.md)，减少了 [App](/reference/display/App.md) 、事件交互等功能，适用于纯绘图场景。

##

### [web 版](/guide/install/draw/start.md) &nbsp; &nbsp; worker 版 &nbsp; &nbsp; [node 版](/guide/install/draw/node/start.md) &nbsp; &nbsp; [小程序版](/guide/install/draw/miniapp/start.md)

##

在 Web Worker 后台多线程环境中运行，不能操作 DOM。

Web 版和 Worker 版可以在同一个项目中共存，按需搭配使用。

## 安装

::: code-group

```sh [npm]
npm install @leafer-draw/worker
```

```sh [pnpm]
pnpm add @leafer-draw/worker
```

```sh [yarn]
yarn add @leafer-draw/worker
```

```sh [bun]
bun add @leafer-draw/worker
```

:::

#### 或通过 importScripts 引入

通过全局变量 LeaferUI 访问内部功能。

::: code-group

```js [worker.min.js]
importScripts('https://unpkg.com/@leafer-draw/worker@1.6.3/dist/worker.min.js')
```

```js [worker.js]
importScripts('https://unpkg.com/@leafer-draw/worker@1.6.3/dist/worker.js')
```

:::

<!-- https://unpkg.com 无法访问时，可替换为 https://cdn.jsdelivr.net/npm -->

## 更新

了解如何 [快速更新版本](/guide/update.md)。

## 使用

使用方式、全局变量和 [@leafer-ui/worker](/guide/install/ui/worker/start.md)一致, 只需改下包名，即可运行官网示例代码。
