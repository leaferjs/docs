<script setup>
import Case from '/component/Case.vue'
</script>

# 运动路径

运动路径功能，让元素沿着另一条路径运动，或进行自身描边。

## 安装插件

需要安装 motion-path 插件才能使用，[点此访问 Github 仓库](https://github.com/leaferjs/leafer-in/tree/main/packages/motion-path)。

::: code-group

```sh [npm]
npm install @leafer-in/motion-path
```

```sh [pnpm]
pnpm add @leafer-in/motion-path
```

```sh [yarn]
yarn add @leafer-in/motion-path
```

```sh [bun]
bun add @leafer-in/motion-path
```

:::

或通过 script 标签引入，使用全局变量 LeaferIN.motion-path 访问插件内部功能。

::: code-group

```html [motion-path.min]
<script src="https://unpkg.com/@leafer-in/motion-path@1.9.4/dist/motion-path.min.js"></script>
```

```html [motion-path]
<script src="https://unpkg.com/@leafer-in/motion-path@1.9.4/dist/motion-path.js"></script>
```

<!-- https://unpkg.com 无法访问时，可替换为 https://cdn.jsdelivr.net/npm -->

:::

## 体验

<case name="AnimateCar" editor=false ></case>

<<< @/code/plugin/animate/car.ts

## 下一步

### [motionPath](/reference/UI/motionPath.md)

### [motion](/reference/UI/motion.md)

### [getMotionTotal()](/reference/UI/getMotionTotal.md)

### [getMotionPoint()](/reference/UI/getMotionPoint.md)
