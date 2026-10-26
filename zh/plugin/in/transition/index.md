<script setup>
import Case from '/component/Case.vue'
</script>

# Transition

Transition —— 轻松实现渐变颜色过渡动画。

## 更新日志

开源前的最后版本为 v1.0.0，[查看更新日志](./update.md)。

## 📦 安装插件（已开源）

需要安装 transition 插件才能使用，[点此访问 Github 仓库](https://github.com/leaferjs/leafer-in/tree/main/packages/transition)。

::: code-group

```sh [npm]
npm install @leafer-in/transition
```

```sh [pnpm]
pnpm add @leafer-in/transition
```

```sh [yarn]
yarn add @leafer-in/transition
```

```sh [bun]
bun add @leafer-in/transition
```

:::

或通过 script 标签引入，使用全局变量 LeaferIN.transition 访问插件内部功能。

::: code-group

```html [transition.min]
<script src="https://unpkg.com/@leafer-in/transition@2.3.2/dist/transition.min.js"></script>
<script>
  const { Transition, TransitionData } = LeaferIN.transition
</script>
```

```html [transition]
<script src="https://unpkg.com/@leafer-in/transition@2.3.2/dist/transition.js"></script>
<script>
  const { Transition, TransitionData } = LeaferIN.transition
</script>
```

:::

## 示例

### 带渐变动画的连线元素

<<< @/code/plugin/transition/index.ts

### 带渐变动画的边框

<<< @/code/plugin/transition/stroke.ts

### hover时渐变颜色过渡

<<< @/code/plugin/transition/hover.ts
