# 视图控制 插件

控制视图的缩放，支持放大、缩小、fit、fit-width、fit-height 视图， 支持聚焦元素，聚焦区域。

## 适用平台

支持所有平台。

## 安装插件

需要安装 view 插件才能使用，[点此访问 Github 仓库](https://github.com/leaferjs/leafer-in/tree/main/packages/view)。

::: code-group

```sh[npm]
npm install @leafer-in/view
```

```sh[pnpm]
pnpm add @leafer-in/view
```

```sh[yarn]
yarn add @leafer-in/view
```

```sh[bun]
bun add @leafer-in/view
```

:::

## 通过 script 标签引入

通过全局变量 LeaferIN.view 访问插件内部功能。
::: code-group

```html [view.min]
<script src="https://unpkg.com/@leafer-in/view@1.0.7/dist/view.min.js"></script>
```

```html [view]
<script src="https://unpkg.com/@leafer-in/view@1.0.7/dist/view.js"></script>
```

https://unpkg.com 无法访问时，可替换为 https://cdn.jsdelivr.net/npm
:::

## 体验

缩放到合适大小

<<< @/code/plugin/view/zoom/fit.ts

## 下一步

### [zoom 操作](./zoom.md)
