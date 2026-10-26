# position

Position layout — positions an element relative to its parent using directional alignment or edge offsets.

Automatically updates the element's `x`, `y`, `width`, and `height` properties. The parent must be a [Box](../../../reference/display/Box.md) or [Frame](../../../reference/display/Frame.md) element with width and height properties.

## Install the Plugin

The position plugin must be installed to use this feature. [Visit the GitHub repository](https://github.com/leaferjs/leafer-in/tree/main/packages/position).

::: code-group

```sh [npm]
npm install @leafer-in/position
```

```sh [pnpm]
pnpm add @leafer-in/position
```

```sh [yarn]
yarn add @leafer-in/position
```

```sh [bun]
bun add @leafer-in/position
```

:::

Alternatively, include the plugin using a script tag and access its functionality through the global variable `LeaferIN.position`.

::: code-group

```html [position.min]
<script src="https://unpkg.com/@leafer-in/position@2.3.2/dist/position.min.js"></script>
```

```html [position]
<script src="https://unpkg.com/@leafer-in/position@2.3.2/dist/position.js"></script>
```

<!-- If https://unpkg.com is unavailable, you can replace it with https://cdn.jsdelivr.net/npm -->

:::

## Next Steps

### [position Property](../../../reference/UI/position.md#position-ialign-iinset)

## Examples

### Display at the Center of the Parent

<<< @/code/property/position/center.ts

### 20px from All Four Edges of the Parent

<<< @/code/property/position/four.ts

### 20px from the Left and Right Edges of the Parent

<<< @/code/property/position/width.ts

### 20px from the Right Edge of the Parent

<<< @/code/property/position/right.ts

### 20px from the Bottom Edge of the Parent

<<< @/code/property/position/bottom.ts

### 20% from the Bottom Edge of the Parent

<<< @/code/property/position/percent.ts
