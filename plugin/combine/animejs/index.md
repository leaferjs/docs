<script setup>
import Case from '/component/Case.vue'
</script>

# Anime.js

[Anime.js](https://animejs.com/) 是一个轻量级的 JavaScript 动画库，具有简单而强大的 API，支持纯 JavaScript 对象动画， 因此可以与 LeaferJS 结合使用。

<case name="AnimeFrames"></case>

## 适用平台

暂时只支持 web 版， 后续会有自带的跨平台动画库。

## 安装插件

需要安装 [Anime.js](https://animejs.com/) 才能使用。

::: code-group

```sh[npm]
npm install animejs
```

```sh[pnpm]
pnpm add animejs
```

```sh[yarn]
yarn add animejs
```

```sh[bun]
bun add animejs
```

Typescript 用户需要安装下对应的 类型库。
:::

::: code-group

```sh[npm]
npm install -D @types/animejs
```

```sh[pnpm]
pnpm add -D @types/animejs
```

```sh[yarn]
yarn add -D @types/animejs
```

```sh[bun]
bun add -D @types/animejs
```

:::

## 文档

### [Anime.js 官方文档](https://animejs.com/documentation/)

## 示例

<case name="Anime"></case>

### 点击矩形，产生线性动画

更多 [动画类型演示](https://animejs.com/documentation/#linearEasing) 。

<<< @/code/plugin/anime/rect.ts

<case name="AnimeColor"></case>

### 颜色动画

通过把颜色分解成 R、G、B 可以实现颜色渐变的动画。

<<< @/code/plugin/anime/color.ts

<case name="AnimeFrames"></case>

### 关键帧动画

更多 [关键帧动画演示](https://animejs.com/documentation/#animationKeyframes) 。

<<< @/code/plugin/anime/keyframes.ts
