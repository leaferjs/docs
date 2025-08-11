# 滤镜

目前只支持自定义滤镜，后续会有官方的标准滤镜。

## 安装插件

需要安装 filter 插件才能使用，[点此访问 Github 仓库](https://github.com/leaferjs/leafer-in/tree/main/packages/filter)。

::: code-group

```sh [npm]
npm install @leafer-in/filter
```

```sh [pnpm]
pnpm add @leafer-in/filter
```

```sh [yarn]
yarn add @leafer-in/filter
```

```sh [bun]
bun add @leafer-in/filter
```

:::

或通过 script 标签引入，使用全局变量 LeaferIN.filter 访问插件内部功能。

::: code-group

```html [filter.min]
<script src="https://unpkg.com/@leafer-in/filter@1.9.2/dist/filter.min.js"></script>
```

```html [filter]
<script src="https://unpkg.com/@leafer-in/filter@1.9.2/dist/filter.js"></script>
```

<!-- https://unpkg.com 无法访问时，可替换为 https://cdn.jsdelivr.net/npm -->

:::

## 自定义滤镜

<<< @/code/plugin/filter/blur.ts

## 待续

详细的自定义滤镜教程和说明文档正在完善...
