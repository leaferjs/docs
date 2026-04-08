# 开发插件

我们提供了一种非常自由的插件开发方式，并支持跨平台 - [访问 GitHub 插件中心](https://github.com/leaferjs/leafer-x)。

可以通过 [create-leafer 命令行工具](/create/leafer.md#快速创建-leaferx-插件模板) 快速创建插件。

##

只需引入 `@leafer-ui/core`（跨平台核心包）、`@leafer-ui/interface`（接口） 作为外部依赖（不打包到插件中，只引用）即可进行自由开发，导出插件能力。

```ts
import { Group } from '@leafer-ui/core'

export class Selector extends Group {}
```

## 插件命名规范

NPM 包名: leafer-x-插件名

全局 变量: LeaferX.插件名

以 selector 插件为例：

```sh
leafer-x-selector  # npm 包名：读作 leafer 乘以 selector （插件）

LeaferX.selector # 全局变量
```

## 快速上手

为了帮助大家快速上手， 我们已经准备好了插件开发模版，涵盖了运行、测试、打包的功能。

并提供了 [create-leafer 命令行工具](/create/leafer.md#快速创建-leaferx-插件模板)，用于快速创建插件，省去手动替换内容。

## 插件开发模版

[Typescript](https://ts.nodejs.cn/) + [Rollup.js](https://www.rollupjs.com/) + [Vite](https://cn.vitejs.dev/guide/) + [Vitest](https://cn.vitest.dev/guide/) [点此下载模版](https://github.com/leaferjs/leafer-x/archive/refs/heads/main.zip)

```sh
git clone https://github.com/leaferjs/leafer-x
```

注意保持和主版本一样的版本号， 后面会做成脚手架。

### 目录结构

```sh
main.ts # 开发插件时用的调试demo入口，可以引入 leafer-ui 进行开发调试插件
src # 插件代码主目录, 只能引入 @leafer-ui/core、@leafer-ui/interface

package.json  # 修改插件名、入口文件等信息，支持web与node环境
tsconfig.json # typescript 配置文件
rollup.config.js # 需修改导出的全局变量名，rollup 打包脚本配置文件

.gitignore # 提交git时忽略哪些文件和目录
.eslintrc.js # 代码语法检查配置
.prettierrc # 代码格式化配置

__tests__ # 单元测试目录

README.md # 插件介绍，修改为你自己的内容
LICENSE # 授权文件，修改为你自己的姓名

# 自动创建
dev # 开发目录，放置以 main.ts 作为入口的 demo 打包代码
dist # 打包目录，放置以 src/index.ts 作为入口的打包代码
types # 放置插件的 d.ts 类型描述文件
```

### 运行

:::danger 注意事项

建议用 npm 安装运行，用其他的包安装器可能会出现问题。

:::

```sh
npm run start # 开始运行项目
npm run build # 打包插件代码，同时会创建types
npm run test # 自动化测试
```

### 代码风格

使用 @typescript-eslint， 单引号优先、句尾无分号，可以给编辑器设置保存时自动格式化。

建议大家保持一致的代码风格，这样互相 review 代码，提 PR 比较方便。

## 使用插件

::: code-group

```ts [web]
import { Leafer, Rect } from 'leafer-ui'
import { Selector, SelectEvent } from 'leafer-x-selector' // 必需在leafer-ui之后导入

// 具体逻辑
const selector = new Selector()
```

```html
<script src="https://unpkg.com/leafer-ui"></script>
<script src="https://unpkg.com/leafer-x-selector"></script>
<script>
  const { Leafer, Rect } = LeaferUI
  const { Selector, SelectEvent } = LeaferX.selector

  // 具体逻辑
  const selector = new Selector()
</script>
```

```ts [node]
import { Leafer, Rect } from '@leafer-ui/node'
import { Selector, SelectEvent } from 'leafer-x-selector' // 必需在leafer-ui之后导入

// 具体逻辑
const selector = new Selector()
```

```ts [miniapp]
import { Leafer, Rect } from '@leafer-ui/miniapp'
import { Selector, SelectEvent } from 'leafer-x-selector' // 必需在leafer-ui之后导入

// 具体逻辑
const selector = new Selector()
```

:::

## 插件示例

### [图形编辑器插件](/plugin/in/editor/index.md)
