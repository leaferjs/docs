# ScrollBar Element

Infinite canvas scrollbar. It shows horizontal and vertical scrollbars when needed, and supports switching between light/dark themes or custom styles.

::: tip Inheritance
ScrollBar  >  [Group](../../../reference/display/Group.md)  >  [UI](../../../reference/display/UI.md)
:::

## Install Plugin

You need to install the scroll plugin to use it. [Visit Github repository](https://github.com/leaferjs/leafer-in/tree/main/packages/scroll).

::: code-group

```sh [npm]
npm install @leafer-in/scroll
```

```sh [pnpm]
pnpm add @leafer-in/scroll
```

```sh [yarn]
yarn add @leafer-in/scroll
```

```sh [bun]
bun add @leafer-in/scroll
```

:::

Or include via script tag and access plugin features through the global variable `LeaferIN.scroll`.

::: code-group

```html [scroll.min]
<script src="https://unpkg.com/@leafer-in/scroll@2.1.0/dist/scroll.min.js"></script>
<script>
  const { ScrollBar } = LeaferIN.scroll
</script>
```

```html [scroll]
<script src="https://unpkg.com/@leafer-in/scroll@2.1.0/dist/scroll.js"></script>
<script>
  const { ScrollBar } = LeaferIN.scroll
</script>
```

<!-- If unpkg is not accessible, you can replace it with https://cdn.jsdelivr.net/npm -->

:::

## Key Properties

### config: [`IScrollBarConfig`](../../../api/interfaces/IScrollBarConfig.md)

Scrollbar configuration, which can be passed as the second parameter when creating a ScrollBar instance.

```ts
interface IScrollBarConfig {
  theme?: IScrollBarTheme // theme style
  padding?: IFourNumber // canvas padding on all four sides
  minSize?: number // minimum scrollbar size, default is 10
}

type IScrollBarTheme = 'light' | 'dark' | IBoxInputData
```

## Key Methods

### changeTheme ( theme: [`IScrollBarTheme`](../../../api/modules.md#iscrollbartheme) )

Change theme or apply custom styles.

### update ( )

Update the scrollbar.

## Scroll Range Limitation

Engine config [config.move.scroll = 'limit'](../../../reference/config/app/move.md#move-scroll-boolean-x-y-limit-x-limit-y-limit) can restrict scrolling to content areas.

## Inheritance

### ScrollBar  >  [Group](../../../reference/display/Group.md)  >  [UI](../../../reference/display/UI.md)

## Example

### Default theme

The `light` theme is suitable for light canvas backgrounds.

<<< @/code/plugin/scroll/index.ts

### Dark theme

The `dark` theme is suitable for dark canvas backgrounds.

<<< @/code/plugin/scroll/dark.ts

### Custom style

<<< @/code/plugin/scroll/style.ts

### Change theme

<<< @/code/plugin/scroll/change.ts

### Canvas padding

Padding supports [fourNumber](../../../reference/interface/math/Math.md#ifournumber)

<<< @/code/plugin/scroll/padding.ts
