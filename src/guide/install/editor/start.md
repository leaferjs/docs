<script setup>
import Case from '/component/Case.vue'
</script>

# leafer-editor

在 Web 环境中运行。

基于 [leafer-ui](/guide/install/ui/start.md)，集成了 [图形编辑器](/plugin/in/editor/)、[视图控制](/plugin/in/view/) 、[滚动条](/plugin/in/view/)、[箭头](/plugin/in/arrow/)、[HTML](/plugin/in/html/) 插件，适用于在线图形编辑的场景。

## 安装

::: code-group

```sh[npm]
npm install leafer-editor
```

```sh[pnpm]
pnpm add leafer-editor
```

```sh[yarn]
yarn add leafer-editor
```

```sh[bun]
bun add leafer-editor
```

:::

## 浏览器引入

::: code-group

```html [web.min]
<script src="https://unpkg.com/leafer-editor@1.0.0/dist/web.min.js"></script>
<script>
  const { Leafer, Editor, Arrow } = LeaferUI
  // ...
</script>
```

```html [web]
<script src="https://unpkg.com/leafer-editor@1.0.0/dist/web.js"></script>
<script>
  const { Leafer, Editor, Arrow } = LeaferUI
  // ...
</script>
```

```html [module.min]
<script type="module">
  import {
    Leafer,
    Editor,
    Arrow,
  } from 'https://unpkg.com/leafer-editor@1.0.0/dist/web.module.min.js'
  // ...
</script>
```

```html [module]
<script type="module">
  import {
    Leafer,
    Editor,
    Arrow,
  } from 'https://unpkg.com/leafer-editor@1.0.0/dist/web.module.js'
  // ...
</script>
```

https://unpkg.com 无法访问时，可替换为 https://cdn.jsdelivr.net/npm
:::

## 使用

使用方式、全局变量和 [leafer-ui](/guide/install/ui/start.md) 一致, 只需改下包名，即可运行官网示例代码。

## 开始体验

<case name="Editor" index=2 count=2 x=20></case>

试试下面的图形编辑示例，不用再单独引入插件包。

<<< @/code/plugin/editor/leafer-editor.ts
