<script setup>
import Case from '/component/Case.vue'
</script>

# HTMLText 元素

HTML 富文本，用于渲染 HTML 相关内容。

<case name="HTMLText" height=100></case>

::: tip 继承
HTMLText &nbsp;>&nbsp; [Image](/reference/display/Image.md) &nbsp;>&nbsp; [Rect](/reference/display/Rect.md) &nbsp;>&nbsp; [UI](/reference/display/UI.md)
:::

<!-- # HTML 插件

用于渲染 HTML 相关内容。 -->

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

或通过 script 标签引入，使用全局变量 LeaferIN.html 访问插件内部功能。
::: code-group

```html [html.min]
<script src="https://unpkg.com/@leafer-in/html@1.7.0/dist/html.min.js"></script>
<script>
  const { HTMLText } = LeaferIN.html
</script>
```

```html [html]
<script src="https://unpkg.com/@leafer-in/html@1.7.0/dist/html.js"></script>
<script>
  const { HTMLText } = LeaferIN.html
</script>
```

<!-- https://unpkg.com 无法访问时，可替换为 https://cdn.jsdelivr.net/npm -->

:::

## 关键属性

### text：`string`

富文本内容。

后续会增加 fontSize 等文本基础属性，可以先通过富文本内嵌入样式进行设置。

## 原理

通过 SVG 嵌入 HTML 代码进行渲染。

LeaferJS 内部对 SVG 渲染做了很多优化，不会有太大的性能影响。

## 继承元素

### [Image](/reference/display/Image.md)

## 示例

<case name="HTMLText" height=100></case>

### 渲染富文本

<<< @/code/plugin/html/HTMLText/text.ts
