<script setup>
import Case from '/component/Case.vue'
</script>

# Transition

Transition — Easily create gradient color transition animations.

## Changelog

The final version before open-sourcing was v1.0.0. [View the changelog](./update.md).

## 📦 Install the Plugin (Open Source)

The `transition` plugin is required to use this feature. [Visit the GitHub repository](https://github.com/leaferjs/leafer-in/tree/main/packages/transition).

::: code-group

```sh [npm]

npm install @leafer-in/transition

```

```sh [pnpm]

pnpm add @leafer-in/transition

```

```sh [yarn]

yarn add @leafer-in/transition

```

```sh [bun]

bun add @leafer-in/transition

```

:::

Alternatively, you can include it using a `<script>` tag and access the plugin through the global variable `LeaferIN.transition`.

::: code-group

```html [transition.min]
<script src="https://unpkg.com/@leafer-in/transition@2.3.1/dist/transition.min.js"></script>

<script>
  const { Transition, TransitionData } = LeaferIN.transition
</script>
```

```html [transition]
<script src="https://unpkg.com/@leafer-in/transition@2.3.1/dist/transition.js"></script>

<script>
  const { Transition, TransitionData } = LeaferIN.transition
</script>
```

:::

## Examples

### Connector with Gradient Animation

<<< @/code/plugin/transition/index.ts

### Stroke with Gradient Animation

<<< @/code/plugin/transition/stroke.ts

### Gradient Color Transition on Hover

<<< @/code/plugin/transition/hover.ts
