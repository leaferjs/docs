# @leafer-editor/worker

在 [@leafer-ui/worker](/guide/install/ui/worker/start.md) 基础上，引入了 [图形编辑器](/plugin/in/editor/index.md)、[文本编辑](/plugin/in/text-editor/index.md)、[视口](/plugin/in/viewport/index.md)、[视图控制](/plugin/in/view/index.md) 、[滚动条](/plugin/in/scroll/index.md)、[箭头](/plugin/in/arrow/index.md)、[HTML](/plugin/in/html/index.md)、[查找元素](/plugin/in/find/index.md)、[导出元素](/plugin/in/export/index.md) 插件，适用于在线图形编辑的场景。

##

### [web 版](/guide/install/editor/start.md) &nbsp; &nbsp; worker 版 &nbsp; &nbsp; [node 版](/guide/install/editor/node/start.md) &nbsp; &nbsp; [小程序版](/guide/install/editor/miniapp/start.md)

##

在 Web Worker 后台多线程环境中运行，不能操作 DOM。

Web 版和 Worker 版可以在同一个项目中共存，按需搭配使用。

## 安装

::: code-group

```sh [npm]
npm install @leafer-editor/worker
```

```sh [pnpm]
pnpm add @leafer-editor/worker
```

```sh [yarn]
yarn add @leafer-editor/worker
```

```sh [bun]
bun add @leafer-editor/worker
```

:::

#### 或通过 importScripts 引入

通过全局变量 LeaferUI 访问内部功能。

::: code-group

```js [worker.min.js]
importScripts(
  'https://unpkg.com/@leafer-editor/worker@1.9.10/dist/worker.min.js'
)
```

```js [worker.js]
importScripts('https://unpkg.com/@leafer-editor/worker@1.9.10/dist/worker.js')
```

:::

<!-- https://unpkg.com 无法访问时，可替换为 https://cdn.jsdelivr.net/npm -->

## 更新

了解如何 [快速更新版本](/guide/update.md)。

## 使用

使用方式、全局变量和 [@leafer-ui/worker](/guide/install/ui/worker/start.md)一致, 只需改下包名，即可运行官网示例代码。
