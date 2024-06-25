# 文本 ｜ Text

## 通用属性

### fontFamily?: string

字体

### fontSize?: number

文字大小

### fontWeight?: IFontWeight

文字粗细

```ts
type IFontWeight = IFontWeightNumerical | IFontWeightString

type IFontWeightNumerical = 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900

type IFontWeightString =
  | 'thin'
  | 'extra-light'
  | 'light'
  | 'normal'
  | 'medium'
  | 'semi-bold'
  | 'bold'
  | 'extra-bold'
  | 'black'
```

### italic?: boolean

是否倾斜。

### textCase?: ITextCase

文本大小写格式。

```ts
type ITextCase =
  | 'upper'
  | 'lower'
  | 'title'
  | 'original'
  | 'small-caps'
  | 'small-caps-forced'
```

### textDecoration?: ITextDecoration

文本下划线或删除线。

```ts
type ITextDecoration = 'none' | 'strikethrough' | 'underline'
```

### letterSpacing?: number | [IPercent](../interface/ui/String.md#percent)

字间距。

### lineHeight?: number ｜ [IPercent](../interface/ui/String.md#percent)

行间距。

### paragraphIndent?: number

段落缩进字符数。

### paragraphSpacing?: number

段落间距。

### textAlign?: ITextAlign

文本对齐， 当设置了文本 width 时才有效。

```ts
type ITextAlign = 'left' | 'center' | 'right' | 'justify'
```

### verticalAlign?: IVerticalAlign

文本垂直对齐，当设置了文本 height 时才有效。

```ts
type IVerticalAlign = 'top' | 'middle' | 'bottom'
```
