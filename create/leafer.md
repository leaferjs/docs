# create-leafer

**create-leafer**是一个命令行工具，旨在帮助你快速创建 Leafer 项目。确保你安装了[Node.js](https://nodejs.org/)。

感谢 LeaferJS 社区成员 [@214L](https://github.com/214L) 为此付出时间，提供开发、维护工作 👍👍👍，欢迎 [Star](https://github.com/214L/create-leafer) ⭐

:::tip 注意事项

请安装 14 版本以上的 [Node.js](https://nodejs.org/)

:::

让我们开始你的 Leafer 之旅 🌱

## 使用方法

### 快速创建 `Vue` + `Leafer` 模板项目

如果你想要快速开始一个 Leafer 项目，只需运行以下命令，它将在当前目录下生成一个包含 `Vue3` + `TypeScript` + `Leafer` 的项目模板，非常适合快速搭建 Leafer 体验环境。

```sh
npm create leafer@latest vue-template
```

### 在当前项目中引入 `Leafer`

如果你想在现有项目中引入 Leafer，可以使用这个命令。它会引导你通过交互方式添加 Leafer 相关的场景包和官方插件。

```sh
npm create leafer@latest init
```

<div class="language-sh" style="background-color: #252525;"><pre><code>
    <span style="color:#888;font-weight: 600;">✔</span> <span style="color:#888;font-weight: 600;">Please select the platform that your project will support. <span style="color:#888;">› <span style="color:#888;font-weight: 400;">web</span></span></span>
    <span style="color:#888;font-weight: 600;">✔</span> <span style="color:#888;font-weight: 600;">Choose a scene package to quickly start the project, or skip to make detailed selections. <span style="color:#888;font-weight: 400">› <span style="color:#888;">editor</span></span></span>
    <span style="color:#888;font-weight: 600;">✔</span> <span style="color:#888;font-weight: 600;">Choose the official feature plugins you want. <span style="color:#888;">› <span style="color:#888;font-weight: 400">interface, editor, html, scroll, arrow, view, state</span></span></span>
    <span style="color:#5e9177;font-weight: 600;">Fetching Leafer version...</span>
    <span style="color:#888;font-weight: 600;">Initialization complete. Now run:</span>
    <span style="color:#5e9177;font-weight: 600;">  npm install</span>
    <span style="color:#5e9177;font-weight: 600;">  npm run dev</span></code></pre></div>
    
请确保在有 `package.json` 文件的项目中运行此命令。建议先使用 `vite` 或 `webpack` 等构建工具来自由配置项目环境，然后再用这个命令轻松引入 Leafer 依赖。

### 添加或删除项目中的 Leafer 依赖

如果你需要修改项目中的 Leafer 依赖，可以使用这个命令来添加或删除依赖，它会以交互方式引导你。

```sh
npm create leafer@latest add
```

请确保你的项目已经包含 Leafer 相关的依赖，这样命令才能顺利运行。

### 更新项目中的 Leafer 依赖版本号

如果想检查并更新项目中 Leafer 依赖的版本号，使用这个命令：

```sh
npm create leafer@latest update
```

<div class="language-sh" style="background-color: #252525;"><pre><code>
    <span style="color:#5e9177;font-weight: 600;">Fetching Leafer version...</span>
    <span style="color:var(--vt-c-green);">✔</span> <span style="color:#888;font-weight: 600;">The following Leafer dependencies can be updated:</span>
    <span style="color:#89DDFF;">{
      "leafer-editor": "^1.9.12",
      "@leafer-in/animate": "^1.9.12"
    }</span>
    <span style="color:#888;font-weight: 600;">Do you want to update them? <span style="color:#888;">… <span style="color:#89DDFF;text-decoration:underline;">yes</span></span></span>
    <span style="color:var(--vt-c-green);">✔</span> <span style="color:#888;font-weight: 600;">Dependencies updated successfully! Please run <span style="color:#5e9177;font-weight: 600;">npm install</span> to install the latest versions.</span>
</code></pre></div>

Leafer 的平台包、核心包、官方插件包的版本号保持统一更新，逐一修改`package.json`中的版本号可能有遗漏的情况。这个命令会扫描你项目中所有的 Leafer 相关依赖，获取最新的 Leafer 版本，并更新 `package.json` 中的版本号。
完成后，别忘了运行包管理器的安装命令来安装更新的依赖。
如果遇到旧版本缓存冲突的错误，请删除锁定文件并重新安装。

### 快速创建 LeaferX 插件模板

想要开发 LeaferX 插件？这个命令会为你生成一个适合插件和上层应用开发的项目模板。

```sh
npm create leafer@latest plugin
```

想了解更多，详见 [插件开发](https://www.leaferjs.com/ui/plugin/dev.html)。

## 全局安装

你也可以选择全局安装 `create-leafer`，这样可以随时快捷的使用这个工具。

> 虽然全局安装的命令更简短，但我们更推荐使用 `npm create leafer@latest` 这种方式来自动使用最新版本的 create-leafer。如果你选择全局安装，请确保定期更新，以便使用最新的特性和更稳定的版本。

```sh
npm install -g create-leafer@latest
```

全局安装后，你可以使用 `create-leafer` 或 `leafer` 命令来运行各项功能。

```bash
npx leafer vue-template
npx leafer init
npx leafer plugin
...
```

## 问题反馈与改进建议

在使用过程中如果遇到 bug 或者有改进意见，欢迎通过[issue](https://github.com/214L/create-leafer/issues)或者联系作者进行反馈。您的意见和 bug 反馈对我们非常重要！
