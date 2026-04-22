# box 元素

让基础元素支持 Box 能力，可往里面添加子元素。

## 安装插件

需要安装 box 插件才能使用，[点此访问 Github 仓库](https://github.com/leaferjs/leafer-in/tree/main/packages/box)。

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

或通过 script 标签引入，使用全局变量 LeaferIN.box 访问插件内部功能。

::: code-group

```html [box.min]
<script src="https://unpkg.com/@leafer-in/box@2.1.0/dist/box.min.js"></script>
<script>
  const { ImageBox } = LeaferIN.box
</script>
```

```html [box]
<script src="https://unpkg.com/@leafer-in/box@2.1.0/dist/box.js"></script>
<script>
  const { ImageBox } = LeaferIN.box
</script>
```

<!-- https://unpkg.com 无法访问时，可替换为 https://cdn.jsdelivr.net/npm -->

:::

## 元素

### [ImageBox](./ImageBox.md)

### [EllipseBox](./EllipseBox.md)

### [PolygonBox](./PolygonBox.md)

### [StarBox](./StarBox.md)

### [PathBox](./PathBox.md)

## 示例

### 创建 ImageBox

::: code-group
<<< @/code/display/ImageBox/index.ts [Leafer]
<<< @/code/display/ImageBox/app/index.ts [App]
:::

### 创建 EllipseBox

::: code-group
<<< @/code/display/EllipseBox/index.ts [Leafer]
<<< @/code/display/EllipseBox/app/index.ts [App]
:::

### 创建 PolygonBox

::: code-group
<<< @/code/display/PolygonBox/index.ts [Leafer]
<<< @/code/display/PolygonBox/app/index.ts [App]
:::

### 创建 StarBox

::: code-group
<<< @/code/display/StarBox/index.ts [Leafer]
<<< @/code/display/StarBox/app/index.ts [App]
:::

### 创建 PathBox

::: code-group
<<< @/code/display/PathBox/index.ts [Leafer]
<<< @/code/display/PathBox/app/index.ts [App]
:::
