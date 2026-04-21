<script setup>
import Case from '/component/Case.vue'
</script>

# leafer-editor

Based on [leafer-ui](../ui/start.md), this package introduces plugins including [graphics editor](../../../plugin/in/editor/index.md), [text editor](../../../plugin/in/text-editor/index.md), [viewport](../../../plugin/in/viewport/index.md), [view control](../../../plugin/in/view/index.md), [scrollbar](../../../plugin/in/scroll/index.md), [arrow](../../../plugin/in/arrow/index.md), [HTML](../../../plugin/in/html/index.md), [element search](../../../plugin/in/find/index.md), [export elements](../../../plugin/in/export/index.md), and [scale-fixed plugin](../../../plugin/in/scale-fixed/index.md), making it suitable for online graphics editing scenarios.

##

### web version     [worker version](./worker/start.md)     [node version](./node/start.md)     [mini program version](./miniapp/start.md)

##

Runs in a Web environment and is adapted for mobile devices.

## Installation

::: code-group

```sh [npm]
npm install leafer-editor
```

```sh [pnpm]
pnpm add leafer-editor
```

```sh [yarn]
yarn add leafer-editor
```

```sh [bun]
bun add leafer-editor
```

:::

We also provide a [Playground environment](../../runtime.md) and a [create-leafer CLI tool](../../../create/leafer.md) to help you quickly try the official examples.

#### Or import via script tag

::: code-group

```html [web.min]
<script src="https://unpkg.com/leafer-editor@2.0.9/dist/web.min.js"></script>
<script>
  const { Leafer, Editor, Arrow } = LeaferUI
  // ...
</script>
```

```html [web]
<script src="https://unpkg.com/leafer-editor@2.0.9/dist/web.js"></script>
<script>
  const { Leafer, Editor, Arrow } = LeaferUI
  // ...
</script>
```

```html [module.min]
<script type="module">
  import {
    Leafer,
    Editor,
    Arrow,
  } from 'https://unpkg.com/leafer-editor@2.0.9/dist/web.module.min.js'
  // ...
</script>
```

```html [module]
<script type="module">
  import {
    Leafer,
    Editor,
    Arrow,
  } from 'https://unpkg.com/leafer-editor@2.0.9/dist/web.module.js'
  // ...
</script>
```

<!-- https://unpkg.com cannot be accessed, can be replaced with https://cdn.jsdelivr.net/npm -->

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

### If you want to run official example code directly, you can use the [Playground environment](../../runtime.md).

## Get started

<case name="Editor" index=2 count=2 x=20></case>

Try the graphics editing example below—no need to install plugins separately.

<<< @/code/plugin/editor/leafer-editor.ts
