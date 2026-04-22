# Filters

Currently only custom filters are supported. Official standard filters will be added in the future.

## Install Plugin

You need to install the filter plugin to use this feature. [Visit GitHub repository](https://github.com/leaferjs/leafer-in/tree/main/packages/filter).

::: code-group

```sh [npm]
npm install @leafer-in/filter
```

```sh [pnpm]
pnpm add @leafer-in/filter
```

```sh [yarn]
yarn add @leafer-in/filter
```

```sh [bun]
bun add @leafer-in/filter
```

:::

Or include via script tag and access plugin APIs through the global variable `LeaferIN.filter`.

::: code-group

```html [filter.min]
<script src="https://unpkg.com/@leafer-in/filter@2.1.0/dist/filter.min.js"></script>
```

```html [filter]
<script src="https://unpkg.com/@leafer-in/filter@2.1.0/dist/filter.js"></script>
```

<!-- https://unpkg.com can be replaced with https://cdn.jsdelivr.net/npm if unavailable -->

:::

## Custom Filter

<<< @/code/plugin/filter/blur.ts

## Coming Soon

A detailed guide and documentation for custom filters is under development...
