# Box Element

Adds Box capabilities to basic elements, allowing them to contain child elements.

## Install Plugin

You need to install the box plugin to use it. [Click here to visit the Github repository](https://github.com/leaferjs/leafer-in/tree/main/packages/box).

::: code-group

```sh [npm]
npm install @leafer-in/box
```

```sh [pnpm]
pnpm add @leafer-in/box
```

```sh [yarn]
yarn add @leafer-in/box
```

```sh [bun]
bun add @leafer-in/box
```

:::

Or include via script tag and access plugin features using the global variable `LeaferIN.box`.

::: code-group

```html [box.min]
<script src="https://unpkg.com/@leafer-in/box@2.0.8/dist/box.min.js"></script>
<script>
  const { ImageBox } = LeaferIN.box
</script>
```

```html [box]
<script src="https://unpkg.com/@leafer-in/box@2.0.8/dist/box.js"></script>
<script>
  const { ImageBox } = LeaferIN.box
</script>
```

<!-- https://unpkg.com can be replaced with https://cdn.jsdelivr.net/npm if inaccessible -->

:::

## Elements

### [ImageBox](./ImageBox.md)

### [EllipseBox](./EllipseBox.md)

### [PolygonBox](./PolygonBox.md)

### [StarBox](./StarBox.md)

### [PathBox](./PathBox.md)

## Examples

### Create ImageBox

::: code-group
<<< @/code/display/ImageBox/index.ts [Leafer]
<<< @/code/display/ImageBox/app/index.ts [App]
:::

### Create EllipseBox

::: code-group
<<< @/code/display/EllipseBox/index.ts [Leafer]
<<< @/code/display/EllipseBox/app/index.ts [App]
:::

### Create PolygonBox

::: code-group
<<< @/code/display/PolygonBox/index.ts [Leafer]
<<< @/code/display/PolygonBox/app/index.ts [App]
:::

### Create StarBox

::: code-group
<<< @/code/display/StarBox/index.ts [Leafer]
<<< @/code/display/StarBox/app/index.ts [App]
:::

### Create PathBox

::: code-group
<<< @/code/display/PathBox/index.ts [Leafer]
<<< @/code/display/PathBox/app/index.ts [App]
:::
