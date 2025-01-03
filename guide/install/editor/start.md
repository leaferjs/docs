<script setup>
import Case from '/component/Case.vue'
</script>

# leafer-editor

在 Web 环境中运行。

基于 [leafer-ui](/guide/install/ui/start.md)，集成了 [图形编辑器](/plugin/in/editor/)、[文本编辑](/plugin/in/text-editor/)、[视口](/plugin/in/viewport/)、[视图控制](/plugin/in/view/) 、[滚动条](/plugin/in/view/)、[箭头](/plugin/in/arrow/)、[HTML](/plugin/in/html/) 插件，适用于在线图形编辑的场景。

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

同时我们提供了 [Playground 环境](/guide/runtime.md) 和 [create-leafer 命令行工具](/create/leafer.md)，方便大家直接体验官网示例。

### 通过 script 标签引入

::: code-group

```html [web.min]
<script src="https://unpkg.com/leafer-editor@1.2.2/dist/web.min.js"></script>
<script>
  const { Leafer, Editor, Arrow } = LeaferUI
  // ...
</script>
```

```html [web]
<script src="https://unpkg.com/leafer-editor@1.2.2/dist/web.js"></script>
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
  } from 'https://unpkg.com/leafer-editor@1.2.2/dist/web.module.min.js'
  // ...
</script>
```

```html [module]
<script type="module">
  import {
    Leafer,
    Editor,
    Arrow,
  } from 'https://unpkg.com/leafer-editor@1.2.2/dist/web.module.js'
  // ...
</script>
```

https://unpkg.com 无法访问时，可替换为 https://cdn.jsdelivr.net/npm
:::

## 使用

使用方式、全局变量和 [leafer-ui](/guide/install/ui/start.md) 一致, 只需改下包名，即可运行官网示例代码。

## create-leafer 命令行工具

### 直接创建 [Vue + Leafer 项目](/create/leafer.md)

### 在项目中 [快速集成 Leafer](/create/leafer.md)

### 在项目中 [安装、升级插件](/create/leafer.md)

## Playground 环境

### 想直接运行官网示例代码，可以使用 [Playground 环境](/guide/runtime.md) 。

## 开始体验

<case name="Editor" index=2 count=2 x=20></case>

试试下面的图形编辑示例，不用再单独引入插件包。

<<< @/code/plugin/editor/leafer-editor.ts