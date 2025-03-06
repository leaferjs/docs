<script setup>
import Case from '/component/Case.vue'
</script>

# 交互状态

使元素支持 [hover](/reference/UI/state/hover.md) 、 [press](/reference/UI/state/press.md) 、 [focus](/reference/UI/state/focus.md) 、 [selected](/reference/UI/state/selected.md) 、 [disabled](/reference/UI/state/disabled.md) 交互状态样式。

## 安装插件

需要安装 state 插件才能使用，[点此访问 Github 仓库](https://github.com/leaferjs/leafer-in/tree/main/packages/state)。

::: code-group

```sh [npm]
npm install @leafer-in/state
```

```sh [pnpm]
pnpm add @leafer-in/state
```

```sh [yarn]
yarn add @leafer-in/state
```

```sh [bun]
bun add @leafer-in/state
```

:::

或通过 script 标签引入，使用全局变量 LeaferIN.state 访问插件内部功能。

::: code-group

```html [state.min]
<script src="https://unpkg.com/@leafer-in/state@1.4.2/dist/state.min.js"></script>
```

```html [state]
<script src="https://unpkg.com/@leafer-in/state@1.4.2/dist/state.js"></script>
```

<!-- https://unpkg.com 无法访问时，可替换为 https://cdn.jsdelivr.net/npm -->

:::

## 体验

<case name="PressStyle" index=1 editor="false" ></case>

按钮交互效果

<<< @/code/property/state/buttonStyle.ts

## 下一步

### [hover 状态样式](/reference/UI/state/hover.md)

### [press 状态样式](/reference/UI/state/press.md)

### [focus 状态样式](/reference/UI/state/focus.md)

### [selected 状态样式](/reference/UI/state/selected.md)

### [disabled 状态样式](/reference/UI/state/disabled.md)
