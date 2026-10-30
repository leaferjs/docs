<script setup>
import Case from '/component/Case.vue'
</script>

# Image Filter

Image Filter —— 轻松实现高性能 GPU 图像调色与滤镜处理。

## 更新日志

开源前的最后版本为 v1.0.0，[查看更新日志](./update.md)。

## 📦 安装插件（已开源）

需要安装 image-filter 插件才能使用，[点此访问 Github 仓库](https://github.com/leaferjs/leafer-in/tree/main/packages/image-filter)。

::: code-group

```sh [npm]
npm install @leafer-in/image-filter
```

```sh [pnpm]
pnpm add @leafer-in/image-filter
```

```sh [yarn]
yarn add @leafer-in/image-filter
```

```sh [bun]
bun add @leafer-in/image-filter
```

:::

或通过 script 标签引入，使用全局变量 LeaferIN.imageFilter 访问插件内部功能。

::: code-group

```html [image-filter.min]
<script src="https://unpkg.com/@leafer-in/image-filter@2.3.3/dist/image-filter.min.js"></script>
<script>
  const { ImageFilter } = LeaferIN.imageFilter
</script>
```

```html [image-filter]
<script src="https://unpkg.com/@leafer-in/image-filter@2.3.3/dist/image-filter.js"></script>
<script>
  const { ImageFilter } = LeaferIN.imageFilter
</script>
```

:::

## 示例

### 添加图片滤镜

<<< @/code/plugin/image-filter/index.ts

### 自定义图片滤镜

<<< @/code/plugin/image-filter/register.ts
