<script setup>
import Case from '/component/Case.vue'
</script>

# Text 元素

绘制文本。与 HTML5 文本显示效果基本一致，支持多行文本。

<case name="Text" editor=false></case>

<br/>

::: tip 继承
Text &nbsp;>&nbsp; [UI](./UI.md)
:::

## 关键属性

### width?: `number`

文本框宽度，不设置或设为`undefined`时为自动宽度。

可通过 [isAutoWidth](/reference/UI/size.md#isautowidth-boolean) 属性判断是否为自动宽度。

### height?: `number`

文本框高度，不设置或设为`undefined`时为自动高度。

可通过 [isAutoHeight](/reference/UI/size.md#isautowidth-boolean) 属性判断是否为自动宽度。

### text: `string` | `number`

文本内容。

## 占位符属性

### placeholder: `string`

占位符文本，当文本为空字符串时显示。

### placeholderColor: `string`

占位符文本的颜色。

## 样式属性

### fontFamily: `string`

字体， 同 css，多个字体用逗号隔开。

### fontSize: `number`

文字大小。

### fontWeight: `IFontWeightNumer` | `IFontWeightString`

文字粗细。

```ts
type IFontWeightNumer = 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900

type IFontWeightString =
  | 'thin' // 100
  | 'extra-light' // 200
  | 'light' // 300
  | 'normal' // 400
  | 'medium' // 500
  | 'semi-bold' // 600
  | 'bold' // 700
  | 'extra-bold' // 800
  | 'black' // 900
```

### italic: `boolean`

文字是否倾斜。

### textCase: `ITextCase`

文字大小写格式。

```ts
type ITextCase =
  | 'title' // 单词首字母大写
  | 'upper' // 全部大写
  | 'lower' // 全部小写
  | 'none'
```

### textDecoration: `ITextDecoration`

文字下划线或删除线。

```ts
type ITextDecoration =
  | 'under' // 下划线
  | 'delete' // 删除线
  | 'under-delete' // 下划线 + 删除线
  | 'none'
  | ITextDecorationData

interface ITextDecorationData {
  type: ITextDecorationType // 装饰线类型 under / delete / under-delete
  color: IColor // 装饰线颜色
}

// 使用类型
text.textDecoration = 'under' // 下划线

// 使用对象
text.textDecoration = { type: 'under', color: 'red' } // 标红的下划线
```

### letterSpacing: `number` | `IUnitData`

字间距，可使用百分比类型， 默认为 0。

```ts
interface IUnitData {
  type: 'percent' ｜ 'px'
  value: number
}

text.letterSpacing = {
  type: 'percent',
  value: 0.5, // 50%
}
```

### lineHeight: `number` ｜ `IUnitData`

行间距，可使用百分比类型, 默认行高为 150%。

```ts
text.lineHeight = {
  type: 'percent',
  value: 1.5, // 150%
}
```

### textWrap: `ITextWrap`

文本换行规则， 默认为 normal。

```ts
type ITextWrap =
｜'normal'  // 在允许的换行点自动换行，不断开word
| 'none'  // 强制不换行
| 'break' // 可断开word换行，类似 CSS 的 break-all
```

### textOverflow: `IOverflow` ｜ `string`

如何显示超出固定宽高的文本, 可自定义省略文本。

```ts
type IOverflow = 'show' | 'hide'

// 自定义省略文本

text.textOverflow = '...'
```

## 段落属性

### paraIndent: `number`

段落首行缩进，单位为 px。

::: tip
在 HTML5 中编辑文本时需将`\n`替换为`<p>`标签，段落样式在`<p>`标签上进行设置。
:::

### paraSpacing: `number`

段落间距，单位为 px。

### textAlign: `ITextAlign`

文本对齐方式，可以设置 'both' 来强制两端对齐文本。

```ts
type ITextAlign =
  | 'left' // 左对齐
  | 'center' // 居中对齐
  | 'right' // 右对齐
  | 'justify' // 两端对齐段落
  | 'both' // 强制两端对齐文本，补充 justify 的不足
```

### verticalAlign: `IVerticalAlign`

文本垂直对齐。

```ts
type IVerticalAlign =
  | 'top' // 顶部对齐
  | 'middle' // 垂直居中对齐
  | 'bottom' // 底部对齐
```

### autoSizeAlign: `boolean`

当文本没有宽高且有对齐属性时，是否对齐起点坐标，默认为 true。

如希望文本位置从起点坐标开始，可设为 false。

### padding: `number` | `number`[]

文本内边距，可分别设置 4 个值。

```ts
padding: [20, 10, 20, 10] // [top, right, bottom, left]
padding: [20, 10, 20] // [top, (right-left), bottom]
padding: [20, 10] // [ (top-bottom), (right-left)]
padding: 20 // all
```

## 背景框

### boxStyle: [`IBackgroundBoxStyle`](/reference/display/Rect.md)

文字的背景框样式对象，支持 [Rect](/reference/display/Rect.md) 元素的大部分外观样式。

```ts
boxStyle: {
  fill: '#32cd79',
  stroke: 'black',
  cornerRadius: 6,
  shadow: {
    x: 10,
    y: -10,
    blur: 20,
    color: '#FF0000AA'
  }
}
```

## 编辑属性

### resizeFontSize: `boolean`

自动宽高的文本是否通过修改字体大小进行 resize, 默认为 false。

## 辅助属性

### renderSpread: `number`

强制扩大渲染边界数值，防止文本渲染边界测量不正确导致花屏, 默认为 0。

## 计算属性（只读）

### isOverflow: `boolean`

文本是否溢出了 [boxBounds](/reference/UI/bounds.md#boxbounds-iboundsdata)，文字布局完成后此属性才有值。

## 获取 content 包围盒

获取文字内容的实际宽高（包围盒）

```ts
const { x, y, width, height } = text.getBounds('content', 'inner')
```

<!--
## 继承元素

### [UI](./UI.md) -->

<!-- ## API

### [Text](/api/classes/Text.md) -->

## 示例

<case name="Text" index=6 editor=false></case>

### 创建文本

::: code-group
<<< @/code/display/Text/text.ts [Leafer]
<<< @/code/display/Text/app/text.ts [App]
:::

<case name="Text" index=7 editor=false></case>

### 创建带背景框的文本

::: code-group
<<< @/code/display/Text/boxStyle.ts [Leafer]
<<< @/code/display/Text/app/boxStyle.ts [App]
:::

<case name="Box" index=6 editor=false></case>

### 创建自适应背景的文本

背景框的另一种实现方式， [Box](./Box.md) 不设置宽高时，支持自适应内容。

::: code-group
<<< @/code/display/Box/text.ts [Leafer]
<<< @/code/display/Box/app/text.ts [App]
:::

### 占位符文本

文本为空字符串时显示占位符文本。

::: code-group
<<< @/code/display/Text/placeholder.ts [Leafer]
<<< @/code/display/Text/app/placeholder.ts [App]
:::

### 文本 count 动画

text 属性传入数字，可支持 count [动画](/guide/plugin/animate.md)，示例中的文本将从 0 到 100 动态变化。

<<< @/code/property/animation/count.ts

### 打字机动画

<<< @/code/property/animation/writer.ts

### 删除文字动画

<<< @/code/property/animation/delete.ts
