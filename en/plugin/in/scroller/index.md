<script setup>
import Case from '/component/Case.vue'
</script>

# Scroller Element

A scrollbar for [Box](../../../reference/display/Box.md) and [Frame](../../../reference/display/Frame.md) elements. Set the [overflow](../../../reference/display/Box.md#overflow-ioverflow) property to `'scroll'` to enable it.

::: tip Inheritance

Scroller  >  [Group](../../../reference/display/Group.md)

:::

## Changelog

The final version before open-sourcing was v1.0.1. [View the changelog](./update.md).

## 📦 Install the Plugin (Open Source)

The `scroller` plugin is required to use this feature. [Visit the GitHub repository](https://github.com/leaferjs/leafer-in/tree/main/packages/scroller).

::: code-group

```sh [npm] id="7z0t7c"

npm install @leafer-in/scroller

```

```sh [pnpm] id="m0s0x3"

pnpm add @leafer-in/scroller

```

```sh [yarn] id="k9s4u8"

yarn add @leafer-in/scroller

```

```sh [bun] id="y6qz2p"

bun add @leafer-in/scroller

```

:::

Alternatively, you can include it using a `<script>` tag and access the plugin through the global variable `LeaferIN.scroller`.

::: code-group

```html [scroller.min] id="u2n7q5"
<script src="https://unpkg.com/@leafer-in/scroller@2.3.3/dist/scroller.min.js"></script>

<script>
  const { Scroller } = LeaferIN.scroller
</script>
```

```html [scroller] id="v5m8kd"
<script src="https://unpkg.com/@leafer-in/scroller@2.3.3/dist/scroller.js"></script>

<script>
  const { Scroller } = LeaferIN.scroller
</script>
```

:::

## Examples

### Quick Start

<<< @/code/plugin/scroller/index.ts

### Dark Mode

<<< @/code/plugin/scroller/dark.ts

### Configure Colors and Cursor

<<< @/code/plugin/scroller/color.ts

### Scrollbar Without Rounded Corners

<<< @/code/plugin/scroller/rect.ts

### Keep Visible

<<< @/code/plugin/scroller/show.ts

### Allow Scrolling Only by Dragging the Scrollbar

<<< @/code/plugin/scroller/drag.ts

### Scale the Scrollbar with the View

<<< @/code/plugin/scroller/scaleFixed.ts

### Coexist with the View Scrollbar

<<< @/code/plugin/scroller/two.ts

### Prevent Default View Scrolling When Coexisting with the View Scrollbar

<<< @/code/plugin/scroller/stopDefault.ts
