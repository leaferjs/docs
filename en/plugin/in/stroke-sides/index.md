<script setup>
import Case from '/component/Case.vue'
</script>

# Stroke Sides

Easily control each side of a rectangle independently.

## Changelog

The final version before open-sourcing was v1.0.0. [View the changelog](./update.md).

## 📦 Install the Plugin (Open Source)

The `stroke-sides` plugin is required to use this feature. [Visit the GitHub repository](https://github.com/leaferjs/leafer-in/tree/main/packages/stroke-sides).

::: code-group

```sh [npm]

npm install @leafer-in/stroke-sides

```

```sh [pnpm]

pnpm add @leafer-in/stroke-sides

```

```sh [yarn]

yarn add @leafer-in/stroke-sides

```

```sh [bun]

bun add @leafer-in/stroke-sides

```

:::

Alternatively, you can include it using a `<script>` tag and access the plugin through the global variable `LeaferIN.strokeSides`.

::: code-group

```html [stroke-sides.min]
<script src="https://unpkg.com/@leafer-in/stroke-sides@2.3.2/dist/stroke-sides.min.js"></script>

<script>
  const {} = LeaferIN.strokeSides
</script>
```

```html [stroke-sides]
<script src="https://unpkg.com/@leafer-in/stroke-sides@2.3.2/dist/stroke-sides.js"></script>

<script>
  const {} = LeaferIN.strokeSides
</script>
```

:::

## Stroke Properties

Elements such as [Rect](../../../reference/display/Rect.md), [Box](../../../reference/display/Box.md), and [Frame](../../../reference/display/Frame.md) support this property.

### strokeWidth: [`IFourNumber`](../../../reference/interface/math/Math.md#ifournumber)

Stroke width. Each of the four sides can be configured independently. The default value is `0`.

```ts
strokeWidth: [20, 10, 20, 10] // [top, right, bottom, left]
strokeWidth: [20, 10, 20] // [top, (right-left), bottom]
strokeWidth: [20, 10] // [(top-bottom), (right-left)]
strokeWidth: 20 // all
```

## Examples

### Create a Rect Element with Independent Strokes

<<< @/code/plugin/stroke-sides/index.ts
