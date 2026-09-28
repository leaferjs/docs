<script setup>
import Case from '/component/Case.vue'
</script>

# Motion Text

Motion Text — Easily create text that follows a motion path.

## 📆 Changelog

The final version before open-sourcing was v1.0.0-beta.2. [View the changelog](./update.md).

## 📦 Install the Plugin (Open Source)

The `motion-text` plugin is required to use this feature. [Visit the GitHub repository](https://github.com/leaferjs/leafer-in/tree/main/packages/motion-text).

::: code-group

```sh [npm]

npm install @leafer-in/motion-text

```

```sh [pnpm]

pnpm add @leafer-in/motion-text

```

```sh [yarn]

yarn add @leafer-in/motion-text

```

```sh [bun]

bun add @leafer-in/motion-text

```

:::

Alternatively, you can include it using a `<script>` tag and access the plugin through the global variable `LeaferIN.motionText`.

::: code-group

```html [motion-text.min]
<script src="https://unpkg.com/@leafer-in/motion-text@2.3.0/dist/motion-text.min.js"></script>

<script>
  const {} = LeaferIN.motionText
</script>
```

```html [motion-text]
<script src="https://unpkg.com/@leafer-in/motion-text@2.3.0/dist/motion-text.js"></script>

<script>
  const {} = LeaferIN.motionText
</script>
```

:::

## Examples

### Motion Text

<<< @/code/plugin/motion-text/index.ts

### Text Around a Circle

<<< @/code/plugin/motion-text/ellipse.ts
