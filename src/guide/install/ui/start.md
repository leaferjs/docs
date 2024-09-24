<script setup>
import Case from '/component/Case.vue'
</script>

# leafer-ui

在 Web 环境中运行。

## 安装

确保你已安装了 [Node.js](https://nodejs.org/zh-cn/)。

::: code-group

```sh[npm]
npm install leafer-ui
```

```sh[pnpm]
pnpm add leafer-ui
```

```sh[yarn]
yarn add leafer-ui
```

```sh[bun]
bun add leafer-ui
```

:::

同时我们提供了 [Playground 环境](/guide/runtime.md) ，方便大家直接体验官网示例、阅读源代码。

## 通过 script 标签引入

你还可以通过 script 标签引入 CDN 文件来使用 LeaferUI（可下载到本地），[查看示例](#引入-script-的方式)。

注意 [Image](/reference/display/Image.md) / [PointerEvent](/reference/event/ui/Pointer.md) / [DragEvent](/reference/event/ui/Drag.md) 会与浏览器的全局变量冲突，需使用别名。

::: code-group

```html [web.min]
<script src="https://unpkg.com/leafer-ui@1.0.3/dist/web.min.js"></script>
<script>
  const { Leafer } = LeaferUI // 全局变量，包含 leafer-ui 的所有功能

  // Image、PointerEvent、DragEvent 会与浏览器的全局变量冲突，请使用以下别名代替
  const { MyImage, MyPointerEvent, MyDragEvent } = LeaferUI

  // ...
</script>
```

```html [web]
<script src="https://unpkg.com/leafer-ui@1.0.3/dist/web.js"></script>
<script>
  const { Leafer } = LeaferUI // 全局变量，包含 leafer-ui的所有功能

  // Image、PointerEvent、DragEvent 会与浏览器的全局变量冲突，请使用以下别名代替
  const { MyImage, MyPointerEvent, MyDragEvent } = LeaferUI

  // ...
</script>
```

```html [module.min]
<script type="module">
  import { Leafer } from 'https://unpkg.com/leafer-ui@1.0.3/dist/web.module.min.js'
  // ...
</script>
```

```html [module]
<script type="module">
  import { Leafer } from 'https://unpkg.com/leafer-ui@1.0.3/dist/web.module.js'
  // ...
</script>
```

https://unpkg.com 无法访问时，可替换为 https://cdn.jsdelivr.net/npm
:::

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

## Playground 环境

### 想直接运行官网示例代码，可以使用 [Playground 环境](/guide/runtime.md) 。

## 开始体验

<case name="Rect" index=5 editor=false></case>

创建一个交互应用，可以缩放平移视图、拖拽矩形。

::: code-group

<<< @/code/start/create.ts [index.ts]

### 引入 script 的方式

:::

::: code-group

<<< @/code/start/create.html [index.html]

:::

## 下一步

### [体验性能](/guide/performance)
