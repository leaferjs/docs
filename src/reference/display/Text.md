<script setup>
import Case from '/component/Case.vue'
</script>

# Text

绘制文本。与 HTML5 文本显示效果基本一致。

<case name="Text" editor=false></case>

## 关键属性

### width?: `number`

文本框宽度，不设置时为自动宽度。

### height?: `number`

文本框高度，不设置时为自动高度。

### text: `string`

文本内容。

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
  | 'none'
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

文本对齐方式。

```ts
type ITextAlign =
  | 'left' // 左对齐
  | 'center' // 居中对齐
  | 'right' // 右对齐
  | 'justify' // 两端对齐
```

### verticalAlign: `IVerticalAlign`

文本垂直对齐。

```ts
type IVerticalAlign =
  | 'top' // 顶部对齐
  | 'middle' // 垂直居中对齐
  | 'bottom' // 底部对齐
```

### padding: `number` | `number`[]

文本内边距，可分别设置 4 个值。

```ts
padding: [20, 10, 20, 10] // [top, right, bottom, left]
padding: [20, 10, 20] // [top, (right-left), bottom]
padding: [20, 10] // [ (top-bottom), (right-left)]
padding: 20 // all
```

## 继承

### [UI](./UI.md)

## API

### [Text](/api/classes/Text.md)

## 示例

### 创建文本

<<< @/code/display/Text/text.ts

<case name="Box" index=6 editor=false></case>

### 创建自适应背景的文本

[Box](./Box.md) 不设置宽高时，支持自适应内容。

<<< @/code/display/Box/text.ts
