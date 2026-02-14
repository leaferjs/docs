# 快速更新

平台包、 [跨平台核心包](/guide/install/ui/core/index.md)、官方插件包的版本号为了方便大家记忆，均保持统一更新。

如出现旧版本缓存冲突导致的报错，需删除 **lock 文件** 及 **node_modules** 重装一下。

<!-- 还可通过 [命令行工具](/create/leafer.md#更新项目中的-leafer-依赖版本号) 更新。 -->

## 一键更新

进入项目根目录执行以下命令，会自动更新所有依赖包至允许的最新版本。

::: code-group

```sh [npm]
npm update
```

```sh [pnpm]
pnpm update
```

```sh [yarn]
yarn update
```

```sh [bun]
bun update
```

:::

或只更新 leafer 相关的所有包（建议做成一个 package.json 命令）.

::: code-group

```sh [npm]
npm update leafer-ui @leafer-in/editor ... # 插件包必须放在主包之后
```

```sh [pnpm]
pnpm update leafer-ui @leafer-in/editor ... # 插件包必须放在主包之后
```

```sh [yarn]
yarn update leafer-ui @leafer-in/editor ... # 插件包必须放在主包之后
```

```sh [bun]
bun update leafer-ui @leafer-in/editor ... # 插件包必须放在主包之后
```

:::
通过 script 标签引入的只需统一修改版本号至最新版本即可。

## 一劳永逸的办法

首次直接安装 [跨平台核心包](/guide/install/ui/core/index.md)，可以避免手动修改插件版本号，导致出现两个核心包版本的问题。

::: code-group

```sh [npm]
# 需使用插件时，推荐同时安装跨平台核心包，防止出现更新版本不同步问题
npm install leafer-ui @leafer-ui/core @leafer-ui/draw
```

```sh [pnpm]
# 需使用插件时，推荐同时安装跨平台核心包，防止出现更新版本不同步问题
pnpm add leafer-ui @leafer-ui/core @leafer-ui/draw
```

```sh [yarn]
# 需使用插件时，推荐同时安装跨平台核心包，防止出现更新版本不同步问题
yarn add leafer-ui @leafer-ui/core @leafer-ui/draw
```

```sh [bun]
# 需使用插件时，建议同时安装跨平台核心包，防止出现更新问题
bun add leafer-ui @leafer-ui/core @leafer-ui/draw
```

或直接安装一个 [leafer](/guide/install/leafer/start.md) 全量包, 通过 [import 子包](/guide/install/leafer/start.md#import-子包) 缩小打包体积。

:::

## 版本号

当前最新版本为： [v2.0.1](/update/index.md)

```ts
import { version } from 'leafer-ui'

console.log(version)
```
