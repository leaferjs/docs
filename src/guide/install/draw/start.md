# leafer-draw

在 Web 环境中运行。

相对 [leafer-ui](/guide/install/ui/start.md)，减少了 [App](/reference/display/App.md) 、查找元素、事件交互等功能，适用于纯绘图场景。

## 安装

::: code-group

```sh[npm]
npm install leafer-draw
```

```sh[pnpm]
pnpm add leafer-draw
```

```sh[yarn]
yarn add leafer-draw
```

```sh[bun]
bun add leafer-draw
```

:::

## 浏览器引入

::: code-group

```html [web.min]
<script src="https://unpkg.com/leafer-draw@1.0.1/dist/web.min.js"></script>
<script>
  const { Leafer } = LeaferUI
  // ...
</script>
```

```html [web]
<script src="https://unpkg.com/leafer-draw@1.0.1/dist/web.js"></script>
<script>
  const { Leafer } = LeaferUI
  // ...
</script>
```

```html [module.min]
<script type="module">
  import { Leafer } from 'https://unpkg.com/leafer-draw@1.0.1/dist/web.module.min.js'
  // ...
</script>
```

```html [module]
<script type="module">
  import { Leafer } from 'https://unpkg.com/leafer-draw@1.0.1/dist/web.module.js'
  // ...
</script>
```

https://unpkg.com 无法访问时，可替换为 https://cdn.jsdelivr.net/npm
:::

## 使用

使用方式、全局变量和 [leafer-ui](/guide/install/ui/start.md) 一致, 只需改下包名，即可运行官网示例代码。
