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
<script src="https://unpkg.com/@leafer-in/flow@1.4.2/dist/flow.min.js"></script>
<script src="https://unpkg.com/@leafer-in/resize@1.4.2/dist/resize.min.js"></script>
<script>
  const { Flow } = LeaferIN.flow
</script>
```

```html [flow]
<script src="https://unpkg.com/@leafer-in/flow@1.4.2/dist/flow.js"></script>
<script src="https://unpkg.com/@leafer-in/resize@1.4.2/dist/resize.js"></script>
<script>
  const { Flow } = LeaferIN.flow
</script>
```

<!-- https://unpkg.com 无法访问时，可替换为 https://cdn.jsdelivr.net/npm -->

:::

## 关键属性

### flow: `boolean` | [`IFlowType`](/api/modules.md#iflowtype)

是否进行自动布局，可进一步指定布局的轴方向 x 或 y ，默认为 x 轴。

```ts
type IFlowType = 'x' | 'y' | 'x-reverse' | 'y-reverse' // 轴方向，reverse 表示反向
```

<case name="Flow" count=2 height=160 editor=false></case>

<case name="Flow" index=2 count=2 height=160 editor=false></case>

### flowWrap: [`IFlowWrap`](/api/modules.md#iflowwrap)

是否自动换行， 默认不换行。

```ts
type IFlowWrap = boolean | 'reverse' // reverse表示颠倒行顺序
```

<case name="FlowWrap" count=2 height=160 editor=false></case>

<case name="FlowWrap" index=2 count=2 height=160 editor=false></case>

### flowAlign: [`IFlowAlign`](/api/modules.md#iflowalign) | [`IFlowAxisAlign`](/api/interfaces/IFlowAxisAlign.md)

子元素对齐方式， 默认为 top-left。

```ts
type IFlowAlign =
  | 'top-left'
  | 'top'
  | 'top-right'
  | 'right'
  | 'bottom-right'
  | 'bottom'
  | 'bottom-left'
  | 'left'
  | 'center'
  | IBaseLineAlign

// 后续支持baseline
type IBaseLineAlign = 'baseline-left' | 'baseline-center' | 'baseline-right'
```

<case name="FlowAlign" count=3 height=160 editor=false></case>

<case name="FlowAlign" index=3 count=3 height=160 editor=false></case>

<case name="FlowAlign" index=6 count=3 height=160 editor=false></case>

可以进一步设置行内的轴对齐方式。

```ts
interface IFlowAxisAlign {
  content?: IFlowAlign
  x?: IAxisAlign // 行内 x 轴对齐，不设置时为 from
  y?: IAxisAlign // 行内 y 轴对齐，不设置时为 from
}

// from 表示对齐行内轴起点， to 表示对齐行内轴终点
type IAxisAlign = 'from' | 'center' | 'to'
```

行内 X 轴对齐
<case name="FlowYAlign" index=9 count=3 height=160 editor=false></case>

行内 Y 轴对齐
<case name="FlowAlign" index=9 count=3 height=160 editor=false></case>

<!-- Y 轴

<case name="FlowYAlign" count=3 height=160 editor=false></case>

<case name="FlowYAlign" index=3 count=3 height=160 editor=false></case>

<case name="FlowYAlign" index=6 count=3 height=160 editor=false></case> -->

### gap: [`IGap`](/api/modules.md#igap) | [`IPointGap`](/api/interfaces/IPointGap.md)

子元素之间的间距， 默认为 0。

```ts
// 设置 auto / fit 会均分剩余的空间，auto 最小值为 0，fit 允许为负数。
type IGap = number | 'auto' | 'fit'

interface IPointGap {
  x?: IGap // 单独设置 x 轴间距
  y?: IGap // 单独设置 y 轴间距
}
```

<case name="FlowGap"  count=3 height=160 editor=false></case>

<case name="FlowGap" index=3 count=2 height=160 editor=false></case>

## 辅助属性

### padding: [`IFourNumber`](/reference/interface/math/Math.md#ifournumber)

容器内间距, 默认为 0。

<case name="FlowPadding" count=2 height=160 editor=false></case>

### itemBox: `'box'` | `'stroke'`

采用子元素的哪个盒类型来布局, 默认 box。

<case name="FlowItemBox" count=2 height=160 editor=false></case>

<!-- ### zIndexReverse: `boolean`

是否反转子元素的 zIndex 顺序，从下往上排序。 -->

##

## Flow 内的子元素属性

### inFlow: `boolean`

是否加入自动布局, 默认会加入。

<case name="FlowIn" count=2 height=160 editor=false></case>

### autoWidth: `number`

自动宽度权重，分配剩余宽度给元素（忽略 width），类似 Flex 的 grow / shrink，默认为 0。

设为大于 0 的值会自动扩充宽度，一般设为 1，后面会支持百分比宽度。

<case name="FlowAutoSize" count=2 height=160 editor=false></case>

### autoHeight: `number`

自动高度权重，分配剩余高度给元素（忽略 height），类似 Flex 的 grow / shrink，默认为 0。

设为大于 0 的值会自动扩充高度，一般设为 1，后面会支持百分比高度。

<case name="FlowAutoSize" index=2 count=2 height=160 editor=false></case>

### widthRange: [`IRangeSize`](/api/interfaces/IRangeSize.md)

限制 autoWidth 影响的宽度范围。

```ts
interface IRangeSize {
  min?: number
  max?: number
}
```

### heightRange: [`IRangeSize`](/api/interfaces/IRangeSize.md)

限制 autoHeight 影响的高度范围。

```ts
interface IRangeSize {
  min?: number
  max?: number
}
```

### lockRatio: `boolean`

采用自动宽高时，是否锁定原始宽高比例，默认为 false。

<!-- ### resizeBox: IConstraint

resize 布局的约束条件

```ts
 {x: 'top', y: 'left' | 'resize' | 'scale' | 'center' | 'right'}
{left: 20, top: 20, right: 50, bottom: 30}
``` -->

<!-- ## 继承元素

### [Box](/reference/display/Box.md) -->

## 示例

<case name="Flow" count=1 height=130 editor=false></case>

### 默认布局

<<< @/code/plugin/flow/flow/x.ts

### 自动换行

<<< @/code/plugin/flow/flow.ts
