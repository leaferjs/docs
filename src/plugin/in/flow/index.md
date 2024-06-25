<script setup>
import Case from '/component/Case.vue'
</script>

# 自动布局

自动布局（流动），类似 Flex 的自动布局，可以快速自动排版内容。

<case name="Flow" count=6 height=160 editor=false></case>

## beta 版 公测插件

目前该插件仅供公测用户体验使用、参与测试。

稳定后会开放给大众使用，可通过 [发电](/sponsor/charge.md) 获得 公测资格。

## 适用平台

支持所有平台。

## 安装插件

需要安装 flow 插件才能使用。

::: code-group

```sh[npm]
npm install @leafer-in/flow
```

```sh[pnpm]
pnpm add @leafer-in/flow
```

```sh[bun]
bun add @leafer-in/flow
```

:::

## 浏览器引入

通过全局变量 LeaferIN.flow 访问插件内部功能。
::: code-group

```html [flow.min]
<script src="https://unpkg.com/@leafer-in/flow@1.0.0-rc.28/dist/flow.min.js"></script>
<script>
  const { Flow } = LeaferIN.flow
</script>
```

```html [flow]
<script src="https://unpkg.com/@leafer-in/flow@1.0.0-rc.28/dist/flow.js"></script>
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
