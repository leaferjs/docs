<script setup>
import Case from '/component/Case.vue'
</script>

# Stroke Sides

轻松实现矩形四边独立控制。

## 更新日志

开源前的最后版本为 v1.0.0，[查看更新日志](./update.md)。

## 📦 安装插件（已开源）

需要安装 stroke-sides 插件才能使用，[点此访问 Github 仓库](https://github.com/leaferjs/leafer-in/tree/main/packages/stroke-sides)。

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

或通过 script 标签引入，使用全局变量 LeaferIN.strokeSides 访问插件内部功能。

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

## 边框属性

[Rect](../../../reference/display/Rect.md)、[Box](../../../reference/display/Box.md)、[Frame](../../../reference/display/Frame.md) 等元素均支持此属性。

### strokeWidth: [`IFourNumber`](../../../reference/interface/math/Math.md#ifournumber)

边框粗细，可以分别设置 4 个边框，默认为 0。

```ts
strokeWidth: [20, 10, 20, 10] // [top, right, bottom, left]
strokeWidth: [20, 10, 20] // [top, (right-left), bottom]
strokeWidth: [20, 10] // [ (top-bottom), (right-left)]
strokeWidth: 20 // all
```

## 示例

### 创建独立边框的 Rect 元素

<<< @/code/plugin/stroke-sides/index.ts
