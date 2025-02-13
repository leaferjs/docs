<script setup>
import Case from '/component/Case.vue'
</script>

# HTML 插件

用于渲染 HTML 相关内容。

<case name="HTMLText" height=100></case>

## 适用平台

暂时只支持 web 版。

## 安装插件

需要安装 html 插件才能使用，[点此访问 Github 仓库](https://github.com/leaferjs/leafer-in/tree/main/packages/html)。

::: code-group

```sh [npm]
npm install @leafer-in/html
```

```sh [pnpm]
pnpm add @leafer-in/html
```

```sh [yarn]
yarn add @leafer-in/html
```

```sh [bun]
bun add @leafer-in/html
```

:::

### 通过 script 标签引入

通过全局变量 LeaferIN.html 访问插件内部功能。
::: code-group

```html [html.min]
<script src="https://unpkg.com/@leafer-in/html@1.4.0/dist/html.min.js"></script>
<script>
  const { HTMLText } = LeaferIN.html
</script>
```

```html [html]
<script src="https://unpkg.com/@leafer-in/html@1.4.0/dist/html.js"></script>
<script>
  const { HTMLText } = LeaferIN.html
</script>
```

https://unpkg.com 无法访问时，可替换为 https://cdn.jsdelivr.net/npm
:::

## 下一步

### [HTMLText 元素](./HTMLText.md)
