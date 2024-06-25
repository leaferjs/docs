# ScrollBar

无限画布滚动条。

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

应用配置 [config.move.scroll = 'limit' ](/reference/config/app/move.md#move-scroll-boolean-limit) 可限制在有内容的区域滚动

## 继承

### [Group](/reference/display/Group.md)

## API

### [ScrollBar](/api/classes/ScrollBar.md)

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
