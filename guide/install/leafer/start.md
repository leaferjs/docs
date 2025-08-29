<script setup>
import Case from '/component/Case.vue'
</script>

# leafer

全量包（98KB min+gzip），包含 [leafer-ui](/guide/install/ui/start.md) 和 `@leafer-in/*` 所有插件包，方便管理、升级。

可通过 [import 子包](/guide/install/leafer/start.md#import-子包) 缩小打包体积，让官方示例代码可直接复制使用，需了解 [注意事项](#import-子包)！

##

### web 版 &nbsp; &nbsp; [worker 版](/guide/install/leafer/worker/start.md) &nbsp; &nbsp; [node 版](/guide/install/leafer/node/start.md) &nbsp; &nbsp; [小程序版](/guide/install/leafer/miniapp/start.md)

##

在 Web 环境中运行，已适配移动端。

## 安装

::: code-group

```sh [npm]
npm install leafer
```

```sh [pnpm]
pnpm add leafer
```

```sh [yarn]
yarn add leafer
```

```sh [bun]
bun add leafer
```

:::

同时我们提供了 [Playground 环境](/guide/runtime.md) 和 [create-leafer 命令行工具](/create/leafer.md)，方便大家直接体验官网示例。

#### 或通过 script 标签引入

::: code-group

```html [web.min]
<script src="https://unpkg.com/leafer@1.9.5/dist/web.min.js"></script>
<script>
  const { Leafer, Editor, Robot, Animate } = LeaferUI
  // ...
</script>
```

```html [web]
<script src="https://unpkg.com/leafer@1.9.5/dist/web.js"></script>
<script>
  const { Leafer, Editor, Robot, Animate } = LeaferUI
  // ...
</script>
```

```html [module.min]
<script type="module">
  import {
    Leafer,
    Editor,
    Arrow,
  } from 'https://unpkg.com/leafer@1.9.5/dist/web.module.min.js'
  // ...
</script>
```

```html [module]
<script type="module">
  import {
    Leafer,
    Editor,
    Arrow,
  } from 'https://unpkg.com/leafer@1.9.5/dist/web.module.js'
  // ...
</script>
```

<!-- https://unpkg.com 无法访问时，可替换为 https://cdn.jsdelivr.net/npm -->

:::

## 更新

了解如何 [快速更新版本](/guide/update.md)。

## 使用

使用方式、全局变量和 [leafer-ui](/guide/install/ui/start.md) 一致, 只需改下包名（不用引入插件），即可运行官网示例。

## import 子包

可通过 import 子包，只引入[leafer-ui](/guide/install/ui/start.md) 和需要的插件，避免打包进不用的插件，节省打包体积。

1. 通过 `npm`、`yarn` 命令安装，可在项目中 `import` 子包 [leafer-ui](/guide/install/ui/start.md) 和 `@leafer-in/*`。

2. 通过 `bun` 命令安装，暂不支持 `import` 子包。

3. 通过 `pnpm` 命令安装，需手动提升子包等级，才能被 `import`，需进行如下配置：

在项目中给 .npmrc 或 pnpm-workspace.yaml 文件增加如下配置提升子包（二选一）。

::: code-group

```sh [.npmrc]
public-hoist-pattern[]=leafer-ui
public-hoist-pattern[]=@leafer-in/*
```

```yaml [pnpm-workspace.yaml]
hoist-pattern:
  - leafer-ui
  - @leafer-in/*
```

:::

采用 import 子包方式后，不能再引入 `leafer` 包，否则缩小不了打包体积。

## Playground 环境

### 想直接运行官网示例代码，可以使用 [Playground 环境](/guide/runtime.md) 。

## 开始体验

<case name="Editor" index=2 count=2 x=20></case>

::: code-group

<<< @/code/plugin/editor/leafer.ts [leafer]

<<< @/code/plugin/editor/start.ts [import 子包]

:::
