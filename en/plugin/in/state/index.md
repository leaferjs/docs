<script setup>
import Case from '/component/Case.vue'
</script>

# Interaction States

Enable elements to support interactive state styles such as [hover](../../../reference/UI/state/hover.md), [press](../../../reference/UI/state/press.md), [focus](../../../reference/UI/state/focus.md), [selected](../../../reference/UI/state/selected.md), and [disabled](../../../reference/UI/state/disabled.md).

## Install Plugin

You need to install the state plugin to use it. [Visit Github repository](https://github.com/leaferjs/leafer-in/tree/main/packages/state).

::: code-group

```sh [npm]
npm install @leafer-in/state
```

```sh [pnpm]
pnpm add @leafer-in/state
```

```sh [yarn]
yarn add @leafer-in/state
```

```sh [bun]
bun add @leafer-in/state
```

:::

Or include via script tag and access plugin features through the global variable `LeaferIN.state`.

::: code-group

```html [state.min]
<script src="https://unpkg.com/@leafer-in/state@2.0.8/dist/state.min.js"></script>
```

```html [state]
<script src="https://unpkg.com/@leafer-in/state@2.0.8/dist/state.js"></script>
```

<!-- https://unpkg.com 无法访问时，可替换为 https://cdn.jsdelivr.net/npm -->

:::

## 体验

<case name="PressStyle" index=1 editor="false" ></case>

Button interaction effect

<<< @/code/property/state/buttonStyle.ts

## Next Steps

### [Hover State Style](../../../reference/UI/state/hover.md)

### [Press State Style](../../../reference/UI/state/press.md)

### [Focus State Style](../../../reference/UI/state/focus.md)

### [Selected State Style](../../../reference/UI/state/selected.md)

### [Disabled State Style](../../../reference/UI/state/disabled.md)
