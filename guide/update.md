# 快速更新

平台包、核心包、官方插件包的版本号为了方便大家记忆，均保持统一更新。

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

通过 script 标签引入的只需统一修改版本号至最新版本即可。

:::

## 版本号

当前最新版本为： [v1.9.11](/update/index.md)

```ts
import { version } from 'leafer-ui'

console.log(version)
```
