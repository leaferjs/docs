# leafer-draw

在 WebWorker 环境中运行。

相对 [@leafer-ui/worker](/guide/install/ui/worker/start.md)，减少了 [App](/reference/display/App.md) 、查找元素、事件交互等功能，适用于纯绘图场景。

## 安装

::: code-group

```sh[npm]
npm install @leafer-draw/worker
```

```sh[pnpm]
pnpm add @leafer-draw/worker
```

```sh[yarn]
yarn add @leafer-draw/worker
```

```sh[bun]
bun add @leafer-draw/worker
```

:::

## importScripts 引入

通过全局变量 LeaferUI 访问内部功能。

::: code-group

```js [worker.min.js]
importScripts('https://unpkg.com/@leafer-draw/worker@1.0.9/dist/worker.min.js')
```

```js [worker.js]
importScripts('https://unpkg.com/@leafer-draw/worker@1.0.9/dist/worker.js')
```

:::

https://unpkg.com 无法访问时，可替换为 https://cdn.jsdelivr.net/npm

## 使用

使用方式、全局变量和 [@leafer-ui/worker](/guide/install/ui/worker/start.md)一致, 只需改下包名，即可运行官网示例代码。
