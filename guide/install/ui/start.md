<script setup>
import Case from '/component/Case.vue'
</script>

# leafer-ui

### web 版 &nbsp; &nbsp; [worker 版](/guide/install/ui/worker/start.md) &nbsp; &nbsp; [node 版](/guide/install/ui/node/start.md) &nbsp; &nbsp; [小程序版](/guide/install/ui/miniapp/start.md)

##

在 Web 环境中运行，已适配移动端。

## 安装

确保你已安装了 [Node.js](https://nodejs.org/zh-cn/)。

::: code-group

```sh [npm]
npm install leafer-ui
```

```sh [pnpm]
pnpm add leafer-ui
```

```sh [yarn]
yarn add leafer-ui
```

```sh [bun]
bun add leafer-ui
```

:::

同时我们提供了 [Playground 环境](/guide/runtime.md) 和 [create-leafer 命令行工具](/create/leafer.md)，方便大家直接体验官网示例。

#### 或通过 script 标签引入

你还可以通过 script 标签引入 CDN 文件来使用 LeaferUI（可下载到本地），[查看示例](#引入-script-的方式)。

:::tip 注意事项

[Image](/reference/display/Image.md) / [PointerEvent](/reference/event/ui/Pointer.md) / [DragEvent](/reference/event/ui/Drag.md) 会与浏览器的全局变量冲突，需使用以下别名。

:::

::: code-group

```html [web.min]
<script src="https://unpkg.com/leafer-ui@1.6.3/dist/web.min.js"></script>
<script>
  const { Leafer } = LeaferUI // 全局变量，包含 leafer-ui 的所有功能

  // Image、PointerEvent、DragEvent 会与浏览器的全局变量冲突，请使用以下别名代替
  const { MyImage, MyPointerEvent, MyDragEvent } = LeaferUI

  // ...
</script>
```

```html [web]
<script src="https://unpkg.com/leafer-ui@1.6.3/dist/web.js"></script>
<script>
  const { Leafer } = LeaferUI // 全局变量，包含 leafer-ui的所有功能

  // Image、PointerEvent、DragEvent 会与浏览器的全局变量冲突，请使用以下别名代替
  const { MyImage, MyPointerEvent, MyDragEvent } = LeaferUI

  // ...
</script>
```

```html [module.min]
<script type="module">
  import { Leafer } from 'https://unpkg.com/leafer-ui@1.6.3/dist/web.module.min.js'
  // ...
</script>
```

```html [module]
<script type="module">
  import { Leafer } from 'https://unpkg.com/leafer-ui@1.6.3/dist/web.module.js'
  // ...
</script>
```

<!-- https://unpkg.com 无法访问时，可替换为 https://cdn.jsdelivr.net/npm -->

:::

## 更新

了解如何 [快速更新版本](/guide/update.md)。

## 浏览器环境

需要支持 ES2015 语法。

:::tip 浏览器
Chrome &gt;= 51

Firefox &gt;= 53

Safari &gt;= 10

Edge &gt;= 79

Opera &gt;= 36

IE 不支持
:::

## create-leafer 命令行工具

### 直接创建 [Vue + Leafer 项目](/create/leafer.md)

### 在项目中 [快速集成 Leafer](/create/leafer.md)

### 在项目中 [安装、升级插件](/create/leafer.md)

## Playground 环境

### 想直接运行官网示例代码，可以使用 [Playground 环境](/guide/runtime.md) 。

## 开始体验

<case name="Rect" index=5 editor=false></case>

创建一个自适应窗口的交互引擎，可以直接拖拽矩形。

::: code-group

<<< @/code/start/create.ts [index.ts]

:::

### 引入 script 的方式

::: code-group

<<< @/code/start/create.html [index.html]

:::

## 下一步

### [体验性能](/guide/performance.md)
