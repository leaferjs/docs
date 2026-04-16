# leafer-draw

Compared to [leafer-ui](../ui/start.md), this package reduces features such as [App](../../../reference/display/App.md) and event interactions, making it suitable for pure drawing scenarios (58KB min+gzip).

##

### web version     [worker version](./worker/start.md)     [node version](./node/start.md)     [mini program version](./miniapp/start.md)

##

Runs in a Web environment and is adapted for mobile devices.

## Installation

::: code-group

```sh [npm]
npm install leafer-draw
```

```sh [pnpm]
pnpm add leafer-draw
```

```sh [yarn]
yarn add leafer-draw
```

```sh [bun]
bun add leafer-draw
```

:::
We also provide a [Playground environment](../../runtime.md) and a [create-leafer CLI tool](../../../create/leafer.md) to help you quickly try the official examples.

#### Or import via script tag

::: code-group

```html [web.min]
<script src="https://unpkg.com/leafer-draw@2.0.8/dist/web.min.js"></script>
<script>
  const { Leafer } = LeaferUI
  // ...
</script>
```

```html [web]
<script src="https://unpkg.com/leafer-draw@2.0.8/dist/web.js"></script>
<script>
  const { Leafer } = LeaferUI
  // ...
</script>
```

```html [module.min]
<script type="module">
  import { Leafer } from 'https://unpkg.com/leafer-draw@2.0.8/dist/web.module.min.js'
  // ...
</script>
```

```html [module]
<script type="module">
  import { Leafer } from 'https://unpkg.com/leafer-draw@2.0.8/dist/web.module.js'
  // ...
</script>
```

<!-- https://unpkg.com 无法访问时，可替换为 https://cdn.jsdelivr.net/npm -->

:::

## Update

Learn how to [quickly update versions](../../update.md).

## Usage

The usage, global variables, and [leafer-ui](../ui/start.md) are consistent. You only need to change the package name to run the official example code.

## create-leafer CLI tool

### Directly create a [Vue + Leafer project](../../../create/leafer.md)

### Quickly integrate Leafer into an existing project

### 在项目中 [安装、升级插件](../../../create/leafer.md)

## Playground environment

### If you want to run official example code directly, you can use the [Playground environment](../../runtime.md).
