<script setup>
import Case from '/component/Case.vue'
</script>

# Flow 元素

自动布局（流动）元素，类似 Flex 的自动布局，可以快速自动排版内容，简单、直观。

<case name="Flow" count=6 height=160 editor=false></case>

::: tip 继承
Flow &nbsp;>&nbsp; [Box](/reference/display/Box.md) &nbsp;>&nbsp; [UI](/reference/display/UI.md)

<br/>

[Box](/reference/display/Box.md) / [Frame](/reference/display/Frame.md) 元素也支持自动布局属性（ 需引入此插件）。

暂时未适配 [图形编辑](/plugin/in/editor/index.md) 功能，自动布局的元素频繁变化时，对性能的消耗会比较大，后期会优化～
:::

## 安装插件

需要安装 flow 插件、[resize 插件](/plugin/in/resize/index.md) 才能使用，[点此访问 Github 仓库](https://github.com/leaferjs/leafer-in/tree/main/packages/flow)。

::: code-group

```sh [npm]
npm install @leafer-in/flow
npm install @leafer-in/resize
```

```sh [pnpm]
pnpm add @leafer-in/flow
pnpm add @leafer-in/resize
```

```sh [yarn]
yarn add @leafer-in/flow
yarn add @leafer-in/resize
```

```sh [bun]
bun add @leafer-in/flow
bun add @leafer-in/resize
```

:::

或通过 script 标签引入，使用全局变量 LeaferIN.flow 访问插件内部功能。

::: code-group

```html [flow.min]
<script src="https://unpkg.com/@leafer-in/flow@1.5.3/dist/flow.min.js"></script>
<script src="https://unpkg.com/@leafer-in/resize@1.5.3/dist/resize.min.js"></script>
<script>
  const { Flow } = LeaferIN.flow
</script>
```

```html [flow]
<script src="https://unpkg.com/@leafer-in/flow@1.5.3/dist/flow.js"></script>
<script src="https://unpkg.com/@leafer-in/resize@1.5.3/dist/resize.js"></script>
<script>
  const { Flow } = LeaferIN.flow
</script>
```

<!-- https://unpkg.com 无法访问时，可替换为 https://cdn.jsdelivr.net/npm -->

:::

## 关键属性

| 名称                                           | 描述                                                                          |
| ---------------------------------------------- | ----------------------------------------------------------------------------- |
| [flow](/plugin/in/flow/Flow/flow.md)           | 布局方向：是否进行自动布局，可进一步指定布局的轴方向 x 或 y ，默认为 x 轴     |
| [flowWrap](/plugin/in/flow/Flow/flowWrap.md)   | 自动换行：是否自动换行， 默认不换行                                           |
| [flowAlign](/plugin/in/flow/Flow/flowAlign.md) | 对齐：对齐子元素的方式， 默认为 top-left                                      |
| [gap](/plugin/in/flow/Flow/gap.md)             | 间距：子元素之间的间距， 默认为 0                                             |
| [padding](/plugin/in/flow/Flow/padding.md)     | 内边距：容器的内边距, 默认为 0                                                |
| [itemBox](/plugin/in/flow/Flow/itemBox.md)     | 盒类型：采用子元素的哪个 [盒类型](/guide/advanced/bounds.md) 来布局, 默认 box |

## Flow 内的子元素布局属性

| 名称                                               | 描述                                                                      |
| -------------------------------------------------- | ------------------------------------------------------------------------- |
| [inFlow](/plugin/in/flow/Flow/inFlow.md)           | 加入布局：元素是否加入自动布局, 默认会加入（父元素为自动布局的情况下）    |
| [autoWidth](/plugin/in/flow/Flow/autoWidth.md)     | 自动宽度：分配剩余宽度给此元素（忽略 width），类似 Flex 的 grow / shrink  |
| [autoHeight](/plugin/in/flow/Flow/autoHeight.md)   | 自动高度：分配剩余高度给此元素（忽略 height），类似 Flex 的 grow / shrink |
| [widthRange](/plugin/in/flow/Flow/widthRange.md)   | 限制宽度：限制 autoWidth 影响的宽度范围                                   |
| [heightRange](/plugin/in/flow/Flow/heightRange.md) | 限制高度：限制 autoHeight 影响的高度范围                                  |
| [lockRatio](/plugin/in/flow/Flow/lockRatio.md)     | 锁定比例：采用自动宽高时，是否锁定原始宽高比例                            |

<!-- ## 继承元素

### [Box](/reference/display/Box.md) -->

## 示例

<case name="Flow" count=1 height=130 editor=false></case>

### 自动布局

<<< @/code/plugin/flow/x.ts

<case name="FlowWrap" index=0 height=130 editor=false></case>

### 沿 X 轴自动换行

<<< @/code/plugin/flow/flowWrap/x.ts

<case name="FlowAlign" index=4 height=130 editor=false></case>

### 居中对齐

<<< @/code/plugin/flow/flowAlign/center.ts

<case name="FlowGap"  index=0 height=130 editor=false></case>

### 固定数值的间距

<<< @/code/plugin/flow/gap/gap.ts

<case name="FlowPadding" index=0 height=160 editor=false></case>

### 设置内边距

<<< @/code/plugin/flow/padding/padding.ts

<case name="FlowIn" index=1 height=160 editor=false></case>

### 元素不加入自动布局

<<< @/code/plugin/flow/inFlow/out.ts

<case name="FlowAutoSize" index=0 height=130 editor=false></case>

### 自动宽度

<<< @/code/plugin/flow/autoWidth/width.ts

<case name="FlowAutoSize" index=2 height=130 editor=false></case>

### 自动高度

<<< @/code/plugin/flow/autoHeight/height.ts

### 综合属性

<<< @/code/plugin/flow/flow.ts
