# @leafer-editor/worker

在 WebWorker 环境中运行。

基于 [@leafer-ui/worker](/guide/install/ui/worker/start.md)，集成了 [图形编辑器](/plugin/in/editor/)、[文本编辑](/plugin/in/text-editor/)、[视图控制](/plugin/in/view/) 、[滚动条](/plugin/in/view/)、[箭头](/plugin/in/arrow/)、[HTML](/plugin/in/html/) 插件，适用于在线图形编辑的场景。

## 安装

::: code-group

```sh[npm]
npm install @leafer-editor/worker
```

```sh[pnpm]
pnpm add @leafer-editor/worker
```

```sh[yarn]
yarn add @leafer-editor/worker
```

```sh[bun]
bun add @leafer-editor/worker
```

:::

## importScripts 引入

通过全局变量 LeaferUI 访问内部功能。

::: code-group

```js [worker.min.js]
importScripts(
  'https://unpkg.com/@leafer-editor/worker@1.0.1/dist/worker.min.js'
)
```

```js [worker.js]
importScripts('https://unpkg.com/@leafer-editor/worker@1.0.1/dist/worker.js')
```

:::

## 使用

使用方式、全局变量和 [@leafer-ui/worker](/guide/install/ui/worker/start.md)一致, 只需改下包名，即可运行官网示例代码。
