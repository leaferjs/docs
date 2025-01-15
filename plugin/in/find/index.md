# 查找元素插件

查找元素插件。

## 适用平台

支持所有平台。

## 安装插件

需要安装 find 插件才能使用，[点此访问 Github 仓库](https://github.com/leaferjs/leafer-in/tree/main/packages/find)。

::: code-group

```sh[npm]
npm install @leafer-in/find
```

```sh[pnpm]
pnpm add @leafer-in/find
```

```sh[yarn]
yarn add @leafer-in/find
```

```sh[bun]
bun add @leafer-in/find
```

:::

### 通过 script 标签引入

通过全局变量 LeaferIN.find 访问插件内部功能。
::: code-group

```html [find.min]
<script src="https://unpkg.com/@leafer-in/find@1.3.2/dist/find.min.js"></script>
```

```html [find]
<script src="https://unpkg.com/@leafer-in/find@1.3.2/dist/find.js"></script>
```

https://unpkg.com 无法访问时，可替换为 https://cdn.jsdelivr.net/npm
:::

## 下一步

### [find ()](/reference/property/find.md)

### [findOne ()](/reference/property/findOne.md)