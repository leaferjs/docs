<script setup>
import Case from '/component/Case.vue'
</script>

# HTMLText Element

HTML rich text element used to render HTML content.

<case name="HTMLText" height=100></case>

::: tip Inheritance
HTMLText  >  [Image](../../../reference/display/Image.md)  >  [Rect](../../../reference/display/Rect.md)  >  [UI](../../../reference/display/UI.md)
:::

## Supported Platforms

Currently only supported on web.

## Install Plugin

You need to install the html plugin to use it. [Visit Github repository](https://github.com/leaferjs/leafer-in/tree/main/packages/html).

::: code-group

```sh [npm]
npm install @leafer-in/html
```

```sh [pnpm]
pnpm add @leafer-in/html
```

```sh [yarn]
yarn add @leafer-in/html
```

```sh [bun]
bun add @leafer-in/html
```

:::

Or include via script tag and access plugin features through the global variable `LeaferIN.html`.

::: code-group

```html [html.min]
<script src="https://unpkg.com/@leafer-in/html@2.0.9/dist/html.min.js"></script>
<script>
  const { HTMLText } = LeaferIN.html
</script>
```

```html [html]
<script src="https://unpkg.com/@leafer-in/html@2.0.9/dist/html.js"></script>
<script>
  const { HTMLText } = LeaferIN.html
</script>
```

<!-- If unpkg is not accessible, you can replace it with https://cdn.jsdelivr.net/npm -->

:::

## Key Properties

### text: `string`

Rich text content.

Future versions will add basic text properties such as `fontSize`. For now, styles can be set via inline HTML styles.

### Internal Methods

### decodeText ( text: `string` ): `string`

Decodes HTML entity characters (such as `&nbsp;`) in `text` into Unicode to avoid rendering issues.

Reason: SVG cannot directly display HTML entity characters, so they must be decoded into Unicode. The following common entities are supported by default.

```ts
// Common HTML entity characters converted to SVG-recognizable Unicode characters
const unicodeEntities: Record<string, string> = {
  // Basic symbols
  lt: '\u003C', // &lt; =>  <
  gt: '\u003E', // >
  amp: '\u0026', // &
  quot: '\u0022', // "
  apos: '\u0027', // '

  // Spaces
  nbsp: '\u00A0', // non-breaking space
  ensp: '\u2002', // en space
  emsp: '\u2003', // em space
  thinsp: '\u2009', // thin space

  // Dashes / punctuation
  ndash: '\u2013', // –
  mdash: '\u2014', // —
  hellip: '\u2026', // …
  middot: '\u00B7', // ·
  bull: '\u2022', // •

  // Quotes
  laquo: '\u00AB', // «
  raquo: '\u00BB', // »
  lsquo: '\u2018', // ‘
  rsquo: '\u2019', // ’
  ldquo: '\u201C', // “
  rdquo: '\u201D', // ”

  // Currency
  cent: '\u00A2', // ¢
  pound: '\u00A3', // £
  yen: '\u00A5', // ¥
  euro: '\u20AC', // €

  // Math
  times: '\u00D7', // ×
  divide: '\u00F7', // ÷
  plusmn: '\u00B1', // ±
  minus: '\u2212', // −
  frac12: '\u00BD', // ½
  frac14: '\u00BC', // ¼
  frac34: '\u00BE', // ¾
  sup2: '\u00B2', // ²
  sup3: '\u00B3', // ³

  // Common symbols
  deg: '\u00B0', // °
  reg: '\u00AE', // ®
  copy: '\u00A9', // ©
  trade: '\u2122', // ™
  section: '\u00A7', // §
  para: '\u00B6', // ¶
  dagger: '\u2020', // †
  Dagger: '\u2021', // ‡

  // Arrows
  larr: '\u2190', // ←
  uarr: '\u2191', // ↑
  rarr: '\u2192', // →
  darr: '\u2193', // ↓
  harr: '\u2194', // ↔

  // Greek letters (common)
  alpha: '\u03B1', // α
  beta: '\u03B2', // β
  gamma: '\u03B3', // γ
  delta: '\u03B4', // δ
  pi: '\u03C0', // π
  sigma: '\u03C3', // σ
  omega: '\u03C9', // ω
  Omega: '\u03A9', // Ω

  // Others
  micro: '\u00B5', // µ
  infinity: '\u221E', // ∞
  not: '\u00AC', // ¬
  equiv: '\u2261', // ≡
  le: '\u2264', // ≤
  ge: '\u2265', // ≥
}
```

To support full HTML entity decoding, you can install an external package like `entities` and override `decodeText()`.

```ts
import { HTMLText } from '@leafer-in/html' // import html plugin
import { decode } from 'entities' // install html entity decoder

// override internal decode method
HTMLText.prototype.decodeText = function (text: string): string {
  if (!text.includes('&')) return text
  return decode(text)
}
```

If you only need support for a small set of HTML entities, you can use the static `addUnicodeEntity()` method below.

## Static Methods

### addUnicodeEntity ( entity: `string` | `IObject`, unicode?: `string` )

Manually add HTML entity to Unicode mappings.

```ts
// single entry
HTMLText.addUnicodeEntity('copy', '\u00A9') // &copy; => ©

// multiple entries
HTMLText.addUnicodeEntity({
  deg: '\u00B0', // °
  reg: '\u00AE', // ®
  copy: '\u00A9', // ©
})
```

## Principle

Renders HTML content by embedding it into SVG.

LeaferJS internally optimizes SVG rendering, so performance impact is minimal.

## Inheritance

### HTMLText  >  [Image](../../../reference/display/Image.md)  >  [Rect](../../../reference/display/Rect.md)  >  [UI](../../../reference/display/UI.md)

## Example

<case name="HTMLText" height=100></case>

### Render rich text

<<< @/code/plugin/html/HTMLText/text.ts
