<script setup>
import Case from '/component/Case.vue'
</script>

# BackgroundRunner

A background rendering plugin that keeps animations rendering continuously even after switching to another browser tab.

Supports disabling background rendering and setting the maximum rendering frame rate.

## Changelog

The final version before open-sourcing was v1.0.1. [View the changelog](./update.md).

## 📦 Install the Plugin (Open Source)

The `bg-runner` plugin is required to use this feature. [Visit the GitHub repository](https://github.com/leaferjs/leafer-in/tree/main/packages/bg-runner).

::: code-group

```sh [npm]

npm install @leafer-in/bg-runner

```

```sh [pnpm]

pnpm add @leafer-in/bg-runner

```

```sh [yarn]

yarn add @leafer-in/bg-runner

```

```sh [bun]

bun add @leafer-in/bg-runner

```

:::

Alternatively, you can include it using a `<script>` tag and access the plugin through the global variable `LeaferIN.bgRunner`.

::: code-group

```html [bg-runner.min]
<script src="https://unpkg.com/@leafer-in/bg-runner@2.3.3/dist/bg-runner.min.js"></script>

<script>
  const { BackgroundRunner } = LeaferIN.bgRunner
</script>
```

```html [bg-runner]
<script src="https://unpkg.com/@leafer-in/bg-runner@2.3.3/dist/bg-runner.js"></script>

<script>
  const { BackgroundRunner } = LeaferIN.bgRunner
</script>
```

:::

## Electron: Continue Running When Minimized

Make sure renderer backgrounding is disabled:

```ts
const { app, BrowserWindow } = require('electron')

app.commandLine.appendSwitch('disable-renderer-backgrounding')

app.commandLine.appendSwitch('disable-background-timer-throttling')

app.commandLine.appendSwitch('disable-backgrounding-occluded-windows')
```

Also disable Chromium's background throttling:

```ts
const { BrowserWindow } = require('electron')

const win = new BrowserWindow({
  width: 800,
  height: 600,
  webPreferences: {
    backgroundThrottling: false, // 🔥 Important
  },
})
```

## Examples

### Keep Rendering Animations After Switching to Another Browser Tab

<<< @/code/plugin/bg-runner/index.ts

### Control the Maximum Rendering Frame Rate

<<< @/code/plugin/bg-runner/fps.ts

### Disable Background Rendering

<<< @/code/plugin/bg-runner/disabled.ts
