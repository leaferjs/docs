<script setup>
import Case from '/component/Case.vue'
</script>

# leafer-ui

### web version    [worker version](./worker/start.md)    [node version](./node/start.md)    [mini-program version](./miniapp/start.md)

##

Runs in Web environments and is mobile-friendly.

It is built on top of the [cross-platform core package](./core/index.md).

## Installation

Make sure you have installed [Node.js](https://nodejs.org/zh-cn/).

When using plugins, it is recommended to also install the [cross-platform core package](./core/index.md) to avoid version mismatch issues.

::: code-group

```sh [npm]
npm install leafer-ui

# When using plugins, it is recommended to also install the cross-platform core package to avoid version mismatch issues
npm install leafer-ui @leafer-ui/core @leafer-ui/draw
```

```sh [pnpm]
pnpm add leafer-ui

# When using plugins, it is recommended to also install the cross-platform core package to avoid version mismatch issues
pnpm add leafer-ui @leafer-ui/core @leafer-ui/draw
```

```sh [yarn]
yarn add leafer-ui

# When using plugins, it is recommended to also install the cross-platform core package to avoid version mismatch issues
yarn add leafer-ui @leafer-ui/core @leafer-ui/draw
```

```sh [bun]
bun add leafer-ui

# When using plugins, it is recommended to also install the cross-platform core package to avoid version mismatch issues
bun add leafer-ui @leafer-ui/core @leafer-ui/draw
```

:::

We also provide a [Playground environment](../../runtime.md) and a [create-leafer CLI tool](../../../create/leafer.md) to help you quickly try the official examples.

#### Or use via script tag

You can also use LeaferUI by importing CDN files via script tags (can also be downloaded locally). [See example](#import-via-script-tag).

:::tip Note

[Image](../../../reference/display/Image.md) / [PointerEvent](../../../reference/event/ui/Pointer.md) / [DragEvent](../../../reference/event/ui/Drag.md) conflict with browser global variables, so aliases must be used.

:::

::: code-group

```html [web.min]
<script src="https://unpkg.com/leafer-ui@2.0.9/dist/web.min.js"></script>
<script>
  const { Leafer } = LeaferUI // global variable containing all leafer-ui features

  // Image, PointerEvent, and DragEvent conflict with browser globals, use aliases instead
  const { MyImage, MyPointerEvent, MyDragEvent } = LeaferUI

  // ...
</script>
```

```html [web]
<script src="https://unpkg.com/leafer-ui@2.0.9/dist/web.js"></script>
<script>
  const { Leafer } = LeaferUI // global variable containing all leafer-ui features

  // Image, PointerEvent, and DragEvent conflict with browser globals, use aliases instead
  const { MyImage, MyPointerEvent, MyDragEvent } = LeaferUI

  // ...
</script>
```

```html [module.min]
<script type="module">
  import { Leafer } from 'https://unpkg.com/leafer-ui@2.0.9/dist/web.module.min.js'
  // ...
</script>
```

```html [module]
<script type="module">
  import { Leafer } from 'https://unpkg.com/leafer-ui@2.0.9/dist/web.module.js'
  // ...
</script>
```

<!-- If unpkg is unavailable, you can switch to https://cdn.jsdelivr.net/npm -->

:::

## Updates

Learn how to [quickly update versions](../../update.md).

## Browser Support

Requires ES2015 support.

:::tip Browsers
Chrome >= 51

Firefox >= 53

Safari >= 10

Edge >= 79

Opera >= 36

IE is not supported
:::

## create-leafer CLI Tool

### Quickly create a [Vue + Leafer project](../../../create/leafer.md)

### Quickly integrate Leafer into your project

### Install and upgrade plugins in your project

## Playground Environment

### If you want to run official examples directly, use the [Playground environment](../../runtime.md).

## Getting Started

<case name="Rect" index=5 editor=false></case>

Create an interactive engine that fits the window size and allows dragging rectangles directly.

::: code-group

<<< @/code/start/create.ts [index.ts]

:::

### Import via script tag

::: code-group

<<< @/code/start/create.html [index.html]

:::

## Next Step

### [Performance Testing](../../performance.md)
