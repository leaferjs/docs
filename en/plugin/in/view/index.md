# View Control

Controls viewport zooming. Supports zoom in, zoom out, fit, fit-width, fit-height, focusing on elements, and focusing on regions.

## Install Plugin

You need to install the view plugin to use it. [Visit Github repository](https://github.com/leaferjs/leafer-in/tree/main/packages/view).

::: code-group

```sh [npm]
npm install @leafer-in/view
```

```sh [pnpm]
pnpm add @leafer-in/view
```

```sh [yarn]
yarn add @leafer-in/view
```

```sh [bun]
bun add @leafer-in/view
```

:::

Or include via script tag and access plugin features through the global variable `LeaferIN.view`.

::: code-group

```html [view.min]
<script src="https://unpkg.com/@leafer-in/view@2.1.0/dist/view.min.js"></script>
```

```html [view]
<script src="https://unpkg.com/@leafer-in/view@2.1.0/dist/view.js"></script>
```

<!-- If unpkg is not accessible, you can replace it with https://cdn.jsdelivr.net/npm -->

:::

## Belongs To

### [Leafer](../../../reference/display/Leafer.md) Element

## Key Method

### zoom ( zoomType: [`IZoomType`](../../../api/modules.md#izoomtype), padding?: [`IFourNumber`](../../../reference/interface/math/Math.md#ifournumber), scroll?: `boolean` | `'x'` | `'y'`, transition?: [`ITranstion`](../../../reference/UI/transition.md#transition-itranstion)): [`IBoundsData`](../../../reference/interface/math/Math.md#iboundsdata)

`zoomType` defines the zoom behavior. Supports zoom in, zoom out, fit, fit-width, fit-height, focusing on elements or regions.

`padding` defines the margin around the viewport (only valid for `fit`, element, or region focus).

`scroll` indicates whether to only pan without scaling. You can restrict panning to x-axis or y-axis only.

`transition` enables animated transitions.

The function returns the focused bounds after zooming (in world coordinates).

```ts
type IZoomType =
  | 'in' // zoom in (from canvas center)
  | 'out' // zoom out
  | 'fit' // fit to screen and center
  | 'fit-width' // fit to width
  | 'fit-height' // fit to height
  | number // specific scale (from canvas center)
  | IUI // focus on a specific element
  | IUI[] // focus on multiple elements
  | IBoundsData // focus on a specific region (page coordinates)
```

```ts
// fit to screen and center
leafer.zoom('fit')

// animation transition
leafer.zoom('fit', 0, null, true)

leafer.zoom('fit', 0, null, 2) // transition duration: 2 seconds
```

## Examples

### Zoom in

<<< @/code/plugin/view/zoom/in.ts

### Zoom out

<<< @/code/plugin/view/zoom/out.ts

### Set zoom scale

<<< @/code/plugin/view/zoom/scale.ts

### Fit to screen

<<< @/code/plugin/view/zoom/fit.ts

### Center canvas content

<<< @/code/plugin/view/zoom/fit-center.ts

### Focus on element

<<< @/code/plugin/view/zoom/ui.ts

Pan only (no scaling)

<<< @/code/plugin/view/zoom/fixed.ts

### Focus on region

<<< @/code/plugin/view/zoom/bounds.ts
