<script setup>
import Case from '/component/Case.vue'
</script>

# leafer-game

Based on [leafer-ui](../ui/start.md), this package introduces plugins including [Robot](../../../plugin/in/robot/index.md), [interaction state](../../../plugin/in/state/index.md), [animation](../../../plugin/in/animate/index.md), [motion path](../../../plugin/in/motion-path/index.md), and [element search](../../../plugin/in/find/index.md), making it suitable for game scenarios.

##

### web version     [worker version](./worker/start.md)     [node version](./node/start.md)     [mini program version](./miniapp/start.md)

##

Runs in a Web environment and is adapted for mobile devices.

## Installation

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

We also provide a [Playground environment](../../runtime.md) and a [create-leafer CLI tool](../../../create/leafer.md) to help you quickly try the official examples.

#### Or import via script tag

::: code-group

```html [web.min]
<script src="https://unpkg.com/leafer-game@2.0.8/dist/web.min.js"></script>
<script>
  const { Leafer, Robot, Animate } = LeaferUI
  // ...
</script>
```

```html [web]
<script src="https://unpkg.com/leafer-game@2.0.8/dist/web.js"></script>
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
  } from 'https://unpkg.com/leafer-game@2.0.8/dist/web.module.min.js'
  // ...
</script>
```

```html [module]
<script type="module">
  import {
    Leafer,
    Editor,
    Arrow,
  } from 'https://unpkg.com/leafer-game@2.0.8/dist/web.module.js'
  // ...
</script>
```

:::

## Update

Learn how to [quickly update versions](../../update.md).

## Usage

The usage, global variables, and [leafer-ui](../ui/start.md) are consistent. You only need to change the package name to run the official example code.

## create-leafer CLI tool

### Directly create a [Vue + Leafer project](../../../create/leafer.md)

### Quickly integrate Leafer into an existing project

### Install or upgrade plugins in your project

## Playground environment

If you want to run official examples directly, use the [Playground environment](../../runtime.md).

## Get started

<case name="Robot" editor=false></case>

Try the game example below—no need to install plugins separately.

Hold the arrow keys to move the arrow.

<<< @/code/plugin/robot/leafer-game.ts
