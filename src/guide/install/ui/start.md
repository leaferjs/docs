<script setup>
import Case from '/component/Case.vue'
</script>

# leafer-ui

在 Web 环境中运行。

同时我们提供了一个 [体验环境](#安装体验环境)，方便大家体验官网示例、阅读源代码。

## 安装

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

## 浏览器引入

::: code-group

```html [web.min]
<script src="https://unpkg.com/leafer-ui@1.0.1/dist/web.min.js"></script>
<script>
  const { Leafer } = LeaferUI
  // ...
</script>
```

```html [web]
<script src="https://unpkg.com/leafer-ui@1.0.1/dist/web.js"></script>
<script>
  const { Leafer } = LeaferUI
  // ...
</script>
```

```html [module.min]
<script type="module">
  import { Leafer } from 'https://unpkg.com/leafer-ui@1.0.1/dist/web.module.min.js'
  // ...
</script>
```

```html [module]
<script type="module">
  import { Leafer } from 'https://unpkg.com/leafer-ui@1.0.1/dist/web.module.js'
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

## 体验环境

### 想直接运行官网示例代码，可以 [安装体验环境](/guide/runtime.md) 。

## 开始体验

<case name="Rect" index=5 editor=false></case>

创建一个交互应用，可以缩放平移视图、拖拽矩形。

::: code-group

<<< @/code/start/create.ts [index.ts]

<<< @/code/start/create.html [index.html]

:::

## 下一步

### [体验性能](/guide/performance)
