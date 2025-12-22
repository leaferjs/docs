# leafer-draw

相对 [leafer-ui](/guide/install/ui/start.md)，减少了 [App](/reference/display/App.md) 、事件交互等功能，适用于纯绘图场景（50KB min+gzip）。

##

### web 版 &nbsp; &nbsp; [worker 版](/guide/install/draw/worker/start.md) &nbsp; &nbsp; [node 版](/guide/install/draw/node/start.md) &nbsp; &nbsp; [小程序版](/guide/install/draw/miniapp/start.md)

##

在 Web 环境中运行，已适配移动端。

## 安装

::: code-group

```sh [npm]
npm install leafer-draw
```

```sh [pnpm]
pnpm add leafer-draw
```

```sh [yarn]
yarn add leafer-draw
```

```sh [bun]
bun add leafer-draw
```

:::
同时我们提供了 [Playground 环境](/guide/runtime.md) 和 [create-leafer 命令行工具](/create/leafer.md)，方便大家直接体验官网示例。

#### 或通过 script 标签引入

::: code-group

```html [web.min]
<script src="https://unpkg.com/leafer-draw@1.12.1/dist/web.min.js"></script>
<script>
  const { Leafer } = LeaferUI
  // ...
</script>
```

```html [web]
<script src="https://unpkg.com/leafer-draw@1.12.1/dist/web.js"></script>
<script>
  const { Leafer } = LeaferUI
  // ...
</script>
```

```html [module.min]
<script type="module">
  import { Leafer } from 'https://unpkg.com/leafer-draw@1.12.1/dist/web.module.min.js'
  // ...
</script>
```

```html [module]
<script type="module">
  import { Leafer } from 'https://unpkg.com/leafer-draw@1.12.1/dist/web.module.js'
  // ...
</script>
```

<!-- https://unpkg.com 无法访问时，可替换为 https://cdn.jsdelivr.net/npm -->

:::

## 更新

了解如何 [快速更新版本](/guide/update.md)。

## 使用

使用方式、全局变量和 [leafer-ui](/guide/install/ui/start.md) 一致, 只需改下包名，即可运行官网示例代码。

## create-leafer 命令行工具

### 直接创建 [Vue + Leafer 项目](/create/leafer.md)

### 在项目中 [快速集成 Leafer](/create/leafer.md)

### 在项目中 [安装、升级插件](/create/leafer.md)

## Playground 环境

### 想直接运行官网示例代码，可以使用 [Playground 环境](/guide/runtime.md) 。
