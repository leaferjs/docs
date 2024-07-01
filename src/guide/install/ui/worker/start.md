# @leafer-ui/worker

在 WebWorker 环境中运行。

<!-- 如果你需要编辑图形，推荐更省心的 [leafer-editor](/guide/install/editor/worker/start.md)，已集成了图形编辑器相关插件。 -->

## 安装

::: code-group

```sh[npm]
npm install @leafer-ui/worker
```

```sh[pnpm]
pnpm add @leafer-ui/worker
```

```sh[yarn]
yarn add @leafer-ui/worker
```

```sh[bun]
bun add @leafer-ui/worker
```

:::

## importScripts 引入

通过全局变量 LeaferUI 访问内部功能。

::: code-group

```js [worker.min.js]
importScripts('https://unpkg.com/@leafer-ui/worker@1.0.0/dist/worker.min.js')
```

```js [worker.js]
importScripts('https://unpkg.com/@leafer-ui/worker@1.0.0/dist/worker.js')
```

:::

## 体验

通过 Worker 创建一张包含矩形的画布，并在主线程生成图片显示。

::: code-group

<<< @/code/worker/index.js

<<< @/code/worker/worker.js

:::
