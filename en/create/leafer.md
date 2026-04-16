# create-leafer

**create-leafer** is a command-line tool designed to help you quickly create Leafer projects. Make sure you have [Node.js](https://nodejs.org/) installed.确保你安装了[Node.js](https://nodejs.org/)。

Thanks to LeaferJS community member [@214L](https://github.com/214L) for dedicating time to development and maintenance 👍👍👍. Feel free to give it a ⭐ on [GitHub Star](https://github.com/214L/create-leafer)

:::tip Note

Please install [Node.js](https://nodejs.org/) version 14 or above.

:::

Let’s begin your Leafer journey 🌱

## Usage

### Quickly create a `Vue` + `Leafer` template project

If you want to quickly start a Leafer project, simply run the following command. It will generate a project template with `Vue3` + `TypeScript` + `Leafer` in the current directory, which is perfect for quickly setting up a Leafer development environment.

```sh
npm create leafer@latest vue-template
```

### Integrate `Leafer` into an existing project

If you want to introduce Leafer into an existing project, you can use this command. It will guide you through an interactive process to add Leafer-related scene packages and official plugins.它会引导你通过交互方式添加 Leafer 相关的场景包和官方插件。

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

Please make sure to run this command in a project that contains a `package.json` file. It is recommended to first use build tools like `vite` or `webpack` to freely configure your project environment, and then use this command to easily integrate Leafer dependencies.建议先使用 `vite` 或 `webpack` 等构建工具来自由配置项目环境，然后再用这个命令轻松引入 Leafer 依赖。

### Add or remove Leafer dependencies in your project

If you need to modify Leafer dependencies in your project, you can use this command. It will guide you through an interactive process to add or remove dependencies.

```sh
npm create leafer@latest add
```

Please ensure your project already includes Leafer-related dependencies so the command can run properly.

### Update Leafer dependency versions in your project

To check and update Leafer dependency versions in your project, use this command:

```sh
npm create leafer@latest update
```

<div class="language-sh" style="background-color: #252525;"><pre><code>
    <span style="color:#5e9177;font-weight: 600;">Fetching Leafer version...</span>
    <span style="color:var(--vt-c-green);">✔</span> <span style="color:#888;font-weight: 600;">The following Leafer dependencies can be updated:</span>
    <span style="color:#89DDFF;">{
      "leafer-editor": "^2.0.8",
      "@leafer-in/animate": "^2.0.8"
    }</span>
    <span style="color:#888;font-weight: 600;">Do you want to update them? <span style="color:#888;">… <span style="color:#89DDFF;text-decoration:underline;">yes</span></span></span>
    <span style="color:var(--vt-c-green);">✔</span> <span style="color:#888;font-weight: 600;">Dependencies updated successfully! Please run <span style="color:#5e9177;font-weight: 600;">npm install</span> to install the latest versions.</span>
</code></pre></div>

Leafer 的平台包、核心包、官方插件包的版本号保持统一更新，逐一修改`package.json`中的版本号可能有遗漏的情况。The platform packages, core packages, and official plugin packages of Leafer are kept version-synchronized. Manually updating versions in `package.json` may lead to omissions. This command scans all Leafer-related dependencies in your project, fetches the latest Leafer version, and updates the versions in `package.json`.
完成后，别忘了运行包管理器的安装命令来安装更新的依赖。
如果遇到旧版本缓存冲突的错误，请删除锁定文件并重新安装。

### Quickly create a LeaferX plugin template

想要开发 LeaferX 插件？Want to develop a LeaferX plugin? This command generates a project template suitable for plugin and higher-level application development.

```sh
npm create leafer@latest plugin
```

For more details, see [Plugin Development](https://www.leaferjs.com/ui/plugin/dev.html).

## Global Installation

You can also install `create-leafer` globally so you can use it anytime.

> Although global installation provides shorter commands, we still recommend using `npm create leafer@latest` to always get the latest version of create-leafer automatically. If you choose global installation, please update it regularly to ensure you are using the latest features and stability improvements.如果你选择全局安装，请确保定期更新，以便使用最新的特性和更稳定的版本。

```sh
npm install -g create-leafer@latest
```

After global installation, you can use the `create-leafer` or `leafer` command to run features.

```bash
npx leafer vue-template
npx leafer init
npx leafer plugin
...
```

## 问题反馈与改进建议

If you encounter bugs or have suggestions during use, feel free to submit an issue at [GitHub Issues](https://github.com/214L/create-leafer/issues) or contact the author. Your feedback is very important to us!您的意见和 bug 反馈对我们非常重要！
