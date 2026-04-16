# Playground Environment

We currently provide three types of Playground environments for you to choose from.

In addition, there is also a [create-leafer CLI tool](../create/leafer.md), which allows you to quickly create a Vue + Leafer project, and manage, upgrade, and develop plugins efficiently.

## Cloud Studio

Create your own online Playground environment, where you can run official website examples online, and save and share your projects.

:::tip
With Cloud Studio, you can also share code snippets, demo projects, and mini-games, and directly pull and run your GitHub repositories.
:::

### Steps

Step 1: Go to the [LeaferJS template page on Cloud Studio](https://cloudstudio.net/?templateId=10064).

Step 2: Log in via WeChat QR code, and create your own Playground environment based on the LeaferJS template.

![Usage](/image/playground/cloud-studio.png)

Step 3: Copy the example code from the official website into `index.ts`, click the run button, and view results in real time.

## 官网环境

An online Playground environment for quickly running and debugging official examples. It is lightweight and stateless, with no save/share features.

[https://www.leaferjs.com/playground/](https://www.leaferjs.com/playground/)

## Local Environment

A locally runnable Playground environment that requires cloning the GitHub repository and allows you to explore the LeaferJS source code.

### Installation

::: code-group

```sh [安装]
git clone https://github.com/leaferjs/LeaferJS.git --recurse-submodules

cd LeaferJS

npm install
npm run start
```

```sh [更新]
git pull --recurse-submodules
```

:::

This will create a local [LeaferJS](https://github.com/leaferjs/LeaferJS.git) project and automatically download sub-repositories including [leafer](https://github.com/leaferjs/leafer), [leafer-ui](https://github.com/leaferjs/leafer-ui), [leafer-in](https://github.com/leaferjs/leafer-in), [leafer-draw](https://github.com/leaferjs/leafer-draw), [leafer-game](./install/game/start.md), and [leafer-editor](https://github.com/leaferjs/leafer-editor) into the `src` directory.

After installation, you can access it in your browser at: `localhost:10101`

### Run Examples

Copy the official example code into `index.ts` to view results in real time.
