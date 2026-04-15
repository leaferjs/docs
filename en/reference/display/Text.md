<script setup>
import Case from '/component/Case.vue'
</script>

# Text Element

Render text. Rendering is similar to HTML5 text display and supports multi-line text.

<case name="Text" editor=false></case>

<br/>

::: tip Inheritance
Text &nbsp;>&nbsp; [UI](./UI.md)
:::

## Key Properties

### width?: `number`

Text box width. If not set or set to `undefined`, it uses auto width.

You can check whether it is auto width via [isAutoWidth](../UI/size.md#isautowidth-boolean).

### height?: `number`

Text box height. If not set or set to `undefined`, it uses auto height.

You can check whether it is auto height via [isAutoHeight](../UI/size.md#isautowidth-boolean).

### text: `string` | `number`

Text content.

## Placeholder Properties

### placeholder: `string`

Placeholder text shown when the text is empty.

### placeholderColor: `string`

Color of the placeholder text.

## Style Properties

### fontFamily: `string`

Font family, same as CSS. Multiple fonts can be separated by commas.

Note: Font names containing spaces must be wrapped in quotes internally or remove spaces. The first character of the font name cannot be a number.

### fontSize: `number`

Font size.

### fontWeight: `IFontWeightNumer` | `IFontWeightString`

Font weight.

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

Whether the text is italic.

### textCase: `ITextCase`

Text case format.

```ts
type ITextCase =
  | 'title' // capitalize first letter of each word
  | 'upper' // uppercase all letters
  | 'lower' // lowercase all letters
  | 'none'
```

### textDecoration: `ITextDecoration`

Underline or strikethrough.

```ts
type ITextDecoration =
  | 'under' // underline
  | 'delete' // strikethrough
  | 'under-delete' // underline + strikethrough
  | 'none'
  | ITextDecorationData

interface ITextDecorationData {
  type: ITextDecorationType // underline / delete / under-delete
  color: IColor // decoration color
  offset?: number // underline offset (has min/max constraints to avoid layout issues)
}

// Usage
text.textDecoration = 'under' // underline

text.textDecoration = { type: 'under', color: 'red' } // red underline

text.textDecoration = { type: 'under', color: 'red', offset: -2 }
```

### letterSpacing: `number` | `IUnitData`

Letter spacing. Supports percentage values. Default is 0.

```ts
interface IUnitData {
  type: 'percent' | 'px'
  value: number
}

text.letterSpacing = {
  type: 'percent',
  value: 0.5, // 50%
}
```

### lineHeight: `number` | `IUnitData`

Line height. Supports percentage values. Default line height is 150%.

```ts
text.lineHeight = {
  type: 'percent',
  value: 1.5, // 150%
}
```

### textWrap: `ITextWrap`

Text wrapping rule. Default is `normal`.

```ts
type ITextWrap =
  | 'normal' // wrap at allowed break points, do not break words
  | 'none' // no wrapping
  | 'break' // break words (like CSS break-all)
```

### textOverflow: `IOverflow` | `string`

How to handle text overflow within fixed width/height. Supports custom ellipsis text.

```ts
type IOverflow = 'show' | 'hide'

// custom ellipsis
text.textOverflow = '...'
```

## Paragraph Properties

### paraIndent: `number`

First-line indent in px.

::: tip
In HTML5 text editing mode, `\n` should be replaced with `<p>` tags. Paragraph styles are applied on `<p>` elements.
:::

### paraSpacing: `number`

Paragraph spacing in px.

### textAlign: `ITextAlign`

Text alignment. You can use `'both'` for full justification.

When no width/height is set, [autoSizeAlign](#autosizealign-boolean) affects default alignment behavior.

```ts
type ITextAlign =
  | 'left' // left align
  | 'center' // center align
  | 'right' // right align
  | 'justify' // justify text (last line not justified)
  | 'justify-letter' // justify by adjusting letter spacing
  | 'both' // force full justification for all lines
  | 'both-letter' // force justification using letter spacing
```

### verticalAlign: `IVerticalAlign`

Vertical alignment.

```ts
type IVerticalAlign =
  | 'top' // top align
  | 'middle' // vertical center
  | 'bottom' // bottom align
```

### autoSizeAlign: `boolean`

Whether to align origin point when width/height is not set. Default is true (design-tool behavior).

Set to false for HTML-like behavior (ignore alignment rules).

### padding: `number` | `number[]`

Inner padding of text.

```ts
padding: [20, 10, 20, 10] // [top, right, bottom, left]
padding: [20, 10, 20] // [top, (right-left), bottom]
padding: [20, 10] // [ (top-bottom), (right-left)]
padding: 20 // all sides
```

## Background Box

### boxStyle: [`IBackgroundBoxStyle`](./Rect.md)

Background style for text. Supports most visual properties of [Rect](./Rect.md).

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

## Editing Properties

### resizeFontSize: `boolean`

Whether auto-sized text resizes by changing font size. Default is false.

### textEditing: `boolean`

Whether text is currently in editing mode (read-only). Not included in JSON export.

## Helper Properties

### renderSpread: `number`

Expands rendering bounds to avoid clipping caused by text measurement inaccuracies. Default is 0.

## Computed Properties (Read-only)

### isOverflow: `boolean`

Whether the text overflows its bounds. Available after layout is completed.

## Get Content Bounds

Get actual bounding box of text content:

```ts
const { x, y, width, height } = text.getBounds('content', 'inner')
```

## Inheritance

### Text  >  [UI](./UI.md)

<!-- ## API

### [Text](../../api/classes/Text.md) -->

## Examples

<case name="Text" index=6 editor=false></case>

### Create Text

::: code-group
<<< @/code/display/Text/text.ts [Leafer]
<<< @/code/display/Text/app/text.ts [App]
:::

<case name="Text" index=7 editor=false></case>

### Text with Background Box

::: code-group
<<< @/code/display/Text/boxStyle.ts [Leafer]
<<< @/code/display/Text/app/boxStyle.ts [App]
:::

<case name="Box" index=6 editor=false></case>

### Auto-Sizing Background Text

Alternative implementation using [Box](./Box.md), which auto-sizes to content when width/height is not set.

::: code-group
<<< @/code/display/Box/text.ts [Leafer]
<<< @/code/display/Box/app/text.ts [App]
:::

### Placeholder Text

Show placeholder text when the text is empty.

::: code-group
<<< @/code/display/Text/placeholder.ts [Leafer]
<<< @/code/display/Text/app/placeholder.ts [App]
:::

### Count Animation

When `text` is a number, it supports count animation. The example animates from 0 to 100.

<<< @/code/property/animation/count.ts

### Typewriter Animation

<<< @/code/property/animation/writer.ts

### Delete Animation

<<< @/code/property/animation/delete.ts
