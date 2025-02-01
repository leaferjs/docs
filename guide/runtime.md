# Playground 环境

我们目前提供了三种 Playground 环境可供你选择。

另外还有 [create-leafer 命令行工具](/create/leafer.md)，可快速创建 Vue + Leafer 项目，管理、升级、开发插件。

## Cloud Studio

创建专属你自己的在线 playground 环境，可在线运行官网示例代码，能够保存分享。

::: tip
通过 Cloud Studio 还可分享你的代码片段、demo 案例、小游戏，可直接拉取你的 GitHub 代码运行。
:::

### 使用步骤

第一步：[前往 Cloud Studio 的 LeaferJS 模版页](https://cloudstudio.net/?templateId=10064)。

第二步：微信扫码登录，基于模版 LeaferJS 创建 属于你自己的 Playground 环境。

![使用](/image/playground/cloud-studio.png)

第三步：复制官网示例代码到 index.ts 中，点击运行按钮，可实时查看效果。

## 官网环境

可在线快速运行、调试官网示例代码的 Playground 环境，即用即走，没有保存分享功能。

https://www.leaferjs.com/playground/

## 本地环境

可在本地运行的 Playground 环境， 需拉取 GitHub 源码，并能阅读到 LeaferJS 的源码。

### 安装

::: code-group

```sh [安装]
git clone  https://github.com/leaferjs/LeaferJS.git --recurse-submodules

cd LeaferJS

npm install
npm run start

```

```sh [更新]
git pull --recurse-submodules
```

:::

将在本地创建一个 [LeaferJS](https://github.com/leaferjs/LeaferJS.git) 项目，并自动下载 [leafer](https://github.com/leaferjs/leafer)、[leafer-ui](https://github.com/leaferjs/leafer-ui)、[leafer-in](https://github.com/leaferjs/leafer-in)、[leafer-draw](https://github.com/leaferjs/leafer-draw)、 [leafer-game](/guide/install/game/start.md)、[leafer-editor](https://github.com/leaferjs/leafer-editor) 子仓库到 src 目录。

安装启动完成后，可在浏览器中访问：`localhost:10101`

### 运行示例

复制官网示例代码到 index.ts 中，可以实时查看运行效果。
