# Quick Update

Platform packages, [cross-platform core packages](./install/ui/core/index.md), and official plugin packages share synchronized versioning for easier memorization and consistency.

If version conflicts occur due to old cache, please delete the **lock file** and **node_modules**, then reinstall dependencies.

## One-Click Update

Run the following command in your project root to update all dependencies to the latest allowed versions.

::: code-group

```sh [npm]
npm update
```

```sh [pnpm]
pnpm update
```

```sh [yarn]
yarn update
```

```sh [bun]
bun update
```

:::

Or update only Leafer-related packages (recommended to wrap this in a `package.json` script):

::: code-group

```sh [npm]
npm update leafer-ui @leafer-in/editor ... # plugin packages must come after the main package
```

```sh [pnpm]
pnpm update leafer-ui @leafer-in/editor ... # plugin packages must come after the main package
```

```sh [yarn]
yarn update leafer-ui @leafer-in/editor ... # plugin packages must come after the main package
```

```sh [bun]
bun update leafer-ui @leafer-in/editor ... # plugin packages must come after the main package
```

:::

For packages imported via `<script>` tags, simply update the version number to the latest one.

## Recommended Long-Term Solution

When installing for the first time, use the [cross-platform core package](./install/ui/core/index.md) to avoid manual version mismatches between plugin packages.

::: code-group

```sh [npm]
# When using plugins, it is recommended to install core packages together to avoid version mismatch issues
npm install leafer-ui @leafer-ui/core @leafer-ui/draw
```

```sh [pnpm]
pnpm add leafer-ui @leafer-ui/core @leafer-ui/draw
```

```sh [yarn]
yarn add leafer-ui @leafer-ui/core @leafer-ui/draw
```

```sh [bun]
bun add leafer-ui @leafer-ui/core @leafer-ui/draw
```

You can also install the full [leafer](./install/leafer/start.md) package and use [sub-package imports](./install/leafer/start.md#import-sub-packages) to reduce bundle size.

:::

## Version

Latest version: [v2.0.9](../update/index.md)

```ts
import { version } from 'leafer-ui'

console.log(version)
```
