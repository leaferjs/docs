<script setup>
import Case from '/component/Case.vue'
</script>

# Motion Text

Motion Text —— 轻松实现运动路径文本效果。

## 📆 更新日志

开源前的最后版本为 v1.0.0-beta.2，[查看更新日志](./update.md)。

## 📦 安装插件（已开源）

需要安装 motion-text 插件才能使用，[点此访问 Github 仓库](https://github.com/leaferjs/leafer-in/tree/main/packages/motion-text)。

::: code-group

```sh [npm]
npm install @leafer-in/motion-text
```

```sh [pnpm]
pnpm add @leafer-in/motion-text
```

```sh [yarn]
yarn add @leafer-in/motion-text
```

```sh [bun]
bun add @leafer-in/motion-text
```

:::

或通过 script 标签引入，使用全局变量 LeaferIN.motionText 访问插件内部功能。

::: code-group

```html [motion-text.min]
<script src="https://unpkg.com/@leafer-in/motion-text@2.3.0/dist/motion-text.min.js"></script>
<script>
  const {} = LeaferIN.motionText
</script>
```

```html [motion-text]
<script src="https://unpkg.com/@leafer-in/motion-text@2.3.0/dist/motion-text.js"></script>
<script>
  const {} = LeaferIN.motionText
</script>
```

:::

## 示例

### 运动文本

<<< @/code/plugin/motion-text/index.ts

### 环绕圆形

<<< @/code/plugin/motion-text/ellipse.ts
