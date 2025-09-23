# @leafer/worker

全量包，包含 [@leafer-ui/worker](/guide/install/ui/worker/start.md) 和 `@leafer-in/*` 所有插件包。

##

### [web 版](/guide/install/leafer/start.md) &nbsp; &nbsp; worker 版 &nbsp; &nbsp; [node 版](/guide/install/leafer/node/start.md) &nbsp; &nbsp; [小程序版](/guide/install/leafer/miniapp/start.md)

##

在 Web Worker 后台多线程环境中运行，不能操作 DOM。

Web 版和 Worker 版可以在同一个项目中共存，按需搭配使用。

## 安装

::: code-group

```sh [npm]
npm install @leafer/worker
```

```sh [pnpm]
pnpm add @leafer/worker
```

```sh [yarn]
yarn add @leafer/worker
```

```sh [bun]
bun add @leafer/worker
```

:::

#### 或通过 importScripts 引入

通过全局变量 LeaferUI 访问内部功能。

::: code-group

```js [worker.min.js]
importScripts('https://unpkg.com/@leafer/worker@1.9.8/dist/worker.min.js')
```

```js [worker.js]
importScripts('https://unpkg.com/@leafer/worker@1.9.8/dist/worker.js')
```

:::

<!-- https://unpkg.com 无法访问时，可替换为 https://cdn.jsdelivr.net/npm -->

## 更新

了解如何 [快速更新版本](/guide/update.md)。

## 使用

使用方式、全局变量和 [@leafer-ui/worker](/guide/install/ui/worker/start.md)一致, 只需改下包名，即可运行官网示例代码。
