<script setup>
import Case from '/component/Case.vue'
</script>

# leafer

Full bundle (98KB min+gzip), includes [leafer-ui](../ui/start.md) and all `@leafer-in/*` plugin packages, making management and upgrades easier.

You can reduce bundle size by using [importing sub-packages](./start.md#import-sub-packages), while still keeping official examples directly usable. Please also check the [notes](#import-sub-packages)!

##

### web version    [worker version](./worker/start.md)    [node version](./node/start.md)    [mini-program version](./miniapp/start.md)

##

Runs in Web environments and supports mobile devices.

## Installation

::: code-group

```sh [npm]
npm install leafer
```

```sh [pnpm]
pnpm add leafer
```

```sh [yarn]
yarn add leafer
```

```sh [bun]
bun add leafer
```

:::

We also provide a [Playground environment](../../runtime.md) and a [create-leafer CLI tool](../../../create/leafer.md) to help you quickly try the official examples.

#### Or use via script tag

::: code-group

```html [web.min]
<script src="https://unpkg.com/leafer@2.0.8/dist/web.min.js"></script>
<script>
  const { Leafer, Editor, Robot, Animate } = LeaferUI
  // ...
</script>
```

```html [web]
<script src="https://unpkg.com/leafer@2.0.8/dist/web.js"></script>
<script>
  const { Leafer, Editor, Robot, Animate } = LeaferUI
  // ...
</script>
```

```html [module.min]
<script type="module">
  import {
    Leafer,
    Editor,
    Arrow,
  } from 'https://unpkg.com/leafer@2.0.8/dist/web.module.min.js'
  // ...
</script>
```

```html [module]
<script type="module">
  import {
    Leafer,
    Editor,
    Arrow,
  } from 'https://unpkg.com/leafer@2.0.8/dist/web.module.js'
  // ...
</script>
```

<!-- https://unpkg.com 无法访问时，可替换为 https://cdn.jsdelivr.net/npm -->

:::

## Updates

Learn how to [quickly update versions](../../update.md).

## Usage

The usage, global API, and behavior are consistent with [leafer-ui](../ui/start.md). You only need to change the package name (no need to import plugins), and all official examples will work directly.

## Import sub-packages

You can import sub-packages to include only [leafer-ui](../ui/start.md) and required plugins, avoiding unnecessary bundle size.

1. When using `npm` or `yarn`, you can directly import sub-packages like [leafer-ui](../ui/start.md) and `@leafer-in/*`.

2. When using `bun`, sub-package importing is not supported yet.

3. When using `pnpm`, you must manually hoist sub-packages to make them importable.

Add one of the following configurations to `.npmrc` or `pnpm-workspace.yaml`:

::: code-group

```sh [.npmrc]
public-hoist-pattern[]=leafer-ui
public-hoist-pattern[]=@leafer-in/*
```

```yaml [pnpm-workspace.yaml]
hoist-pattern:
  - leafer-ui
  - @leafer-in/*
```

:::

When using import sub-packages, you must NOT import the `leafer` package, otherwise bundle size reduction will not work.

## Playground environment

### If you want to run official examples directly, use the [Playground environment](../../runtime.md).

## Getting started

<case name="Editor" index=2 count=2 x=20></case>

::: code-group

<<< @/code/plugin/editor/leafer.ts [leafer]
<<< @/code/plugin/editor/start.ts [import sub-packages]

<<< @/code/plugin/editor/start.ts [import 子包]

:::
