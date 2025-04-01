# @leafer-ui/worker

### [web 版](/guide/install/ui/start.md) &nbsp; &nbsp; worker 版 &nbsp; &nbsp; [node 版](/guide/install/ui/node/start.md) &nbsp; &nbsp; [小程序版](/guide/install/ui/miniapp/start.md)

##

在 WebWorker 环境中运行。

<!-- 如果你需要编辑图形，推荐更省心的 [leafer-editor](/guide/install/editor/worker/start.md)，已集成了图形编辑器相关插件。 -->

## 安装

::: code-group

```sh [npm]
npm install @leafer-ui/worker
```

```sh [pnpm]
pnpm add @leafer-ui/worker
```

```sh [yarn]
yarn add @leafer-ui/worker
```

```sh [bun]
bun add @leafer-ui/worker
```

:::

#### importScripts 引入

通过全局变量 LeaferUI 访问内部功能。

::: code-group

```js [worker.min.js]
importScripts('https://unpkg.com/@leafer-ui/worker@1.5.2/dist/worker.min.js')
```

```js [worker.js]
importScripts('https://unpkg.com/@leafer-ui/worker@1.5.2/dist/worker.js')
```

:::

<!-- https://unpkg.com 无法访问时，可替换为 https://cdn.jsdelivr.net/npm -->

## 体验

通过 Worker 创建一张包含矩形的画布，并在主线程生成图片显示。

::: code-group

<<< @/code/worker/index.js

<<< @/code/worker/worker.js

:::
