<script setup>
import Case from '/component/Case.vue'
</script>

# Scroller 元素

适用于 [Box](../../../reference/display/Box.md) / [Frame](../../../reference/display/Frame.md) 元素的滚动条，仅需设置 [overflow](../../../reference/display/Box.md#overflow-ioverflow) 属性为 'scroll' 即可启用。

::: tip 继承
Scroller &nbsp;>&nbsp; [Group](../../../reference/display/Group.md)
:::

## 更新日志

开源前的最后版本为 v1.0.1，[查看更新日志](./update.md)。

## 📦 安装插件（已开源）

需要安装 scroller 插件才能使用，[点此访问 Github 仓库](https://github.com/leaferjs/leafer-in/tree/main/packages/scroller)。

::: code-group

```sh [npm]
npm install @leafer-in/scroller
```

```sh [pnpm]
pnpm add @leafer-in/scroller
```

```sh [yarn]
yarn add @leafer-in/scroller
```

```sh [bun]
bun add @leafer-in/scroller
```

:::

或通过 script 标签引入，使用全局变量 LeaferIN.scroller 访问插件内部功能。

::: code-group

```html [scroller.min]
<script src="https://unpkg.com/@leafer-in/scroller@2.3.2/dist/scroller.min.js"></script>
<script>
  const { Scroller } = LeaferIN.scroller
</script>
```

```html [scroller]
<script src="https://unpkg.com/@leafer-in/scroller@2.3.2/dist/scroller.js"></script>
<script>
  const { Scroller } = LeaferIN.scroller
</script>
```

:::

## 示例

### 快速创建

<<< @/code/plugin/scroller/index.ts

### 夜晚模式

<<< @/code/plugin/scroller/dark.ts

### 配置颜色和光标

<<< @/code/plugin/scroller/color.ts

### 无圆角的滚动条

<<< @/code/plugin/scroller/rect.ts

### 保持显示

<<< @/code/plugin/scroller/show.ts

### 只允许拖拽滚动条进行滚动内容

<<< @/code/plugin/scroller/drag.ts

### 跟随视图放大滚动条

<<< @/code/plugin/scroller/scaleFixed.ts

### 与视图滚动条共存

<<< @/code/plugin/scroller/two.ts

### 与视图滚动条共存时，阻止默认视图滚动

<<< @/code/plugin/scroller/stopDefault.ts
