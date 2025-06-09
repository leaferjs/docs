<script setup>
import Case from '/component/Case.vue'
</script>

# leafer-game

在 [leafer-ui](/guide/install/ui/start.md) 基础上，引入了 [Robot](/plugin/in/robot/index.md) 、[交互状态](/plugin/in/state/index.md) 、 [动画](/plugin/in/animate/index.md)、[运动路径](/plugin/in/motion-path/index.md)、[查找元素](/plugin/in/find/index.md) 插件，适用于小游戏场景。

##

### web 版 &nbsp; &nbsp; [worker 版](/guide/install/game/worker/start.md) &nbsp; &nbsp; [node 版](/guide/install/game/node/start.md) &nbsp; &nbsp; [小程序版](/guide/install/game/miniapp/start.md)

##

在 Web 环境中运行，已适配移动端。

## 安装

::: code-group

```sh [npm]
npm install leafer-game
```

```sh [pnpm]
pnpm add leafer-game
```

```sh [yarn]
yarn add leafer-game
```

```sh [bun]
bun add leafer-game
```

:::

同时我们提供了 [Playground 环境](/guide/runtime.md) 和 [create-leafer 命令行工具](/create/leafer.md)，方便大家直接体验官网示例。

#### 或通过 script 标签引入

::: code-group

```html [web.min]
<script src="https://unpkg.com/leafer-game@1.7.0/dist/web.min.js"></script>
<script>
  const { Leafer, Robot, Animate } = LeaferUI
  // ...
</script>
```

```html [web]
<script src="https://unpkg.com/leafer-game@1.7.0/dist/web.js"></script>
<script>
  const { Leafer, Robot, Animate } = LeaferUI
  // ...
</script>
```

```html [module.min]
<script type="module">
  import {
    Leafer,
    Editor,
    Arrow,
  } from 'https://unpkg.com/leafer-game@1.7.0/dist/web.module.min.js'
  // ...
</script>
```

```html [module]
<script type="module">
  import {
    Leafer,
    Editor,
    Arrow,
  } from 'https://unpkg.com/leafer-game@1.7.0/dist/web.module.js'
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

## 开始体验

<case name="Robot" editor=false></case>

试试下面的游戏示例，不用再单独引入插件包。

按住方向键，移动箭头～

<<< @/code/plugin/robot/leafer-game.ts
