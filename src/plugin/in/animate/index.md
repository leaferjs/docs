<script setup>
import Case from '/component/Case.vue'
</script>

# animate 插件

丰富的动画功能，支持延时、循环和 seek，可制作过渡动画、摇摆动画、关键帧动画、路径动画、滚动动画。

<case name="AnimateFrames" editor=false></case>

## 适用平台

支持所有平台。

## 安装插件

需要安装 animate 插件才能使用，[点此访问 Github 仓库](https://github.com/leaferjs/leafer-in/tree/main/packages/animate)。

::: code-group

```sh[npm]
npm install @leafer-in/animate
```

```sh[pnpm]
pnpm add @leafer-in/animate
```

```sh[yarn]
yarn add @leafer-in/animate
```

```sh[bun]
bun add @leafer-in/animate
```

:::

## 通过 script 标签引入

通过全局变量 LeaferIN.animate 访问插件内部功能。
::: code-group

```html [animate.min]
<script src="https://unpkg.com/@leafer-in/animate@1.0.7/dist/animate.min.js"></script>
<script>
  const { Animate } = LeaferIN.animate
</script>
```

```html [animate]
<script src="https://unpkg.com/@leafer-in/animate@1.0.7/dist/animate.js"></script>
<script>
  const { Animate } = LeaferIN.animate
</script>
```

https://unpkg.com 无法访问时，可替换为 https://cdn.jsdelivr.net/npm
:::

## 体验

<case name="AnimateColor" editor=false></case>

<<< @/code/plugin/animate/color.ts

## 下一步

### [Animate 元素](./Animate.md)
