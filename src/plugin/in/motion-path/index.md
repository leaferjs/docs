<script setup>
import Case from '/component/Case.vue'
</script>

# motion-path 插件

运动路径功能插件。

## 适用平台

支持所有平台。

## 安装插件

需要安装 motion-path 插件才能使用，[点此访问 Github 仓库](https://github.com/leaferjs/leafer-in/tree/main/packages/motion-path)。

::: code-group

```sh[npm]
npm install @leafer-in/motion-path
```

```sh[pnpm]
pnpm add @leafer-in/motion-path
```

```sh[yarn]
yarn add @leafer-in/motion-path
```

```sh[bun]
bun add @leafer-in/motion-path
```

:::

### 通过 script 标签引入

通过全局变量 LeaferIN.motion-path 访问插件内部功能。
::: code-group

```html [motion-path.min]
<script src="https://unpkg.com/@leafer-in/motion-path@1.2.1/dist/motion-path.min.js"></script>
```

```html [motion-path]
<script src="https://unpkg.com/@leafer-in/motion-path@1.2.1/dist/motion-path.js"></script>
```

https://unpkg.com 无法访问时，可替换为 https://cdn.jsdelivr.net/npm
:::

## 体验

<case name="AnimateCar" editor=false ></case>

<<< @/code/plugin/animate/car.ts
