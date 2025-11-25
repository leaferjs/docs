# 视口

通过滚轮/触摸板滑动或捏合可 [缩放平移视图](/guide/advanced/viewport.md)，类似浏览器、设计软件的视口交互功能。

## 安装插件

需要安装 视口插件才能使用，[点此访问 Github 仓库](https://github.com/leaferjs/leafer-in/tree/main/packages/viewport)。

::: code-group

```sh [npm]
npm install @leafer-in/viewport
```

```sh [pnpm]
pnpm add @leafer-in/viewport
```

```sh [yarn]
yarn add @leafer-in/viewport
```

```sh [bun]
bun add @leafer-in/viewport
```

:::

或通过 script 标签引入，使用全局变量 LeaferIN.viewport 访问插件内部功能。

::: code-group

```html [viewport.min]
<script src="https://unpkg.com/@leafer-in/viewport@1.11.0/dist/viewport.min.js"></script>
```

```html [viewport]
<script src="https://unpkg.com/@leafer-in/viewport@1.11.0/dist/viewport.js"></script>
```

<!-- https://unpkg.com 无法访问时，可替换为 https://cdn.jsdelivr.net/npm -->

:::

## 下一步

### [缩放平移视图](/guide/advanced/viewport.md)
