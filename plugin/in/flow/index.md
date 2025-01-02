<script setup>
import Case from '/component/Case.vue'
</script>

# 自动布局

自动布局（流动），类似 Flex 的自动布局，可以快速自动排版内容。

<case name="Flow" count=6 height=160 editor=false></case>

## 适用平台

支持所有平台，自动布局的元素暂时不支持 [图形编辑](/plugin/in/editor/) 功能。

## 安装插件

需要安装 flow 插件才能使用。

::: code-group

```sh[npm]
npm install @leafer-in/flow
npm install @leafer-in/resize
```

```sh[pnpm]
pnpm add @leafer-in/flow
pnpm add @leafer-in/resize
```

```sh[yarn]
yarn add @leafer-in/flow
yarn add @leafer-in/resize
```

```sh[bun]
bun add @leafer-in/flow
bun add @leafer-in/resize
```

:::

### 通过 script 标签引入

通过全局变量 LeaferIN.flow 访问插件内部功能，[点此访问 Github 仓库](https://github.com/leaferjs/leafer-in/tree/main/packages/flow)。
::: code-group

```html [flow.min]
<script src="https://unpkg.com/@leafer-in/flow@1.2.2/dist/flow.min.js"></script>
<script src="https://unpkg.com/@leafer-in/resize@1.2.2/dist/resize.min.js"></script>
<script>
  const { Flow } = LeaferIN.flow
</script>
```

```html [flow]
<script src="https://unpkg.com/@leafer-in/flow@1.2.2/dist/flow.js"></script>
<script src="https://unpkg.com/@leafer-in/resize@1.2.2/dist/resize.js"></script>
<script>
  const { Flow } = LeaferIN.flow
</script>
```

https://unpkg.com 无法访问时，可替换为 https://cdn.jsdelivr.net/npm
:::

## 依赖插件

### [resize 插件](/plugin/in/resize/index.md)

## 开始体验

<case name="Flow" count=1 height=160 editor=false></case>

<<< @/code/plugin/flow/flow/x.ts

## 下一步

### [Flow 元素](./Flow.md)
