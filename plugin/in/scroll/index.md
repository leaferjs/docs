# ScrollBar 元素

无限画布滚动条，按需显示横向、竖向滚动条，支持切换黑白主题或自定义样式。

::: tip 继承
ScrollBar &nbsp;>&nbsp; [Group](/reference/display/Group.md) &nbsp;>&nbsp; [UI](/reference/display/UI.md)
:::

## 安装插件

需要安装 scroll 插件才能使用，[点此访问 Github 仓库](https://github.com/leaferjs/leafer-in/tree/main/packages/scroll)。

::: code-group

```sh [npm]
npm install @leafer-in/scroll
```

```sh [pnpm]
pnpm add @leafer-in/scroll
```

```sh [yarn]
yarn add @leafer-in/scroll
```

```sh [bun]
bun add @leafer-in/scroll
```

:::

或通过 script 标签引入，使用全局变量 LeaferIN.scroll 访问插件内部功能。

::: code-group

```html [scroll.min]
<script src="https://unpkg.com/@leafer-in/scroll@2.0.0/dist/scroll.min.js"></script>
<script>
  const { ScrollBar } = LeaferIN.scroll
</script>
```

```html [scroll]
<script src="https://unpkg.com/@leafer-in/scroll@2.0.0/dist/scroll.js"></script>
<script>
  const { ScrollBar } = LeaferIN.scroll
</script>
```

<!-- https://unpkg.com 无法访问时，可替换为 https://cdn.jsdelivr.net/npm -->

:::

## 关键属性

### config: [`IScrollBarConfig`](/api/interfaces/IScrollBarConfig.md)

滚动条的配置，可作为 ScrollBar 实例化的第二个参数传入。

```ts
interface IScrollBarConfig {
  theme?: IScrollBarTheme // 主题样式
  padding?: IFourNumber // 画布四周的padding
  minSize?: number // 滚动条的最小尺寸, 默认为10
}

type IScrollBarTheme = 'light' | 'dark' | IBoxInputData
```

## 关键方法

### changeTheme ( theme: [`IScrollBarTheme`](/api/modules.md#iscrollbartheme) )

修改主题或自定义样式。

### update ( )

更新滚动条。

## 限制滚动范围

引擎配置 [config.move.scroll = 'limit' ](/reference/config/app/move.md#move-scroll-boolean-x-y-limit-x-limit-y-limit) 可限制在有内容的区域滚动

<!-- ## 继承元素

### [Group](/reference/display/Group.md) -->

<!-- ## API

### [ScrollBar](/api/classes/ScrollBar.md) -->

## 示例

### 默认主题

light 主题适用于浅色背景的画布。

<<< @/code/plugin/scroll/index.ts

### 暗黑主题

dark 主题适用于深色背景的画布。

<<< @/code/plugin/scroll/dark.ts

### 自定义样式

<<< @/code/plugin/scroll/style.ts

### 修改主题

<<< @/code/plugin/scroll/change.ts

### 画布 padding

padding 支持 [fourNumber](/reference/interface/math/Math.md#ifournumber)

<<< @/code/plugin/scroll/padding.ts
