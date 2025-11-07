<script setup>
import Case from '/component/Case.vue'
</script>

# HTMLText 元素

HTML 富文本，用于渲染 HTML 相关内容。

<case name="HTMLText" height=100></case>

::: tip 继承
HTMLText &nbsp;>&nbsp; [Image](/reference/display/Image.md) &nbsp;>&nbsp; [Rect](/reference/display/Rect.md) &nbsp;>&nbsp; [UI](/reference/display/UI.md)
:::

<!-- # HTML 插件

用于渲染 HTML 相关内容。 -->

## 适用平台

暂时只支持 web 版。

## 安装插件

需要安装 html 插件才能使用，[点此访问 Github 仓库](https://github.com/leaferjs/leafer-in/tree/main/packages/html)。

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

或通过 script 标签引入，使用全局变量 LeaferIN.html 访问插件内部功能。
::: code-group

```html [html.min]
<script src="https://unpkg.com/@leafer-in/html@1.10.0/dist/html.min.js"></script>
<script>
  const { HTMLText } = LeaferIN.html
</script>
```

```html [html]
<script src="https://unpkg.com/@leafer-in/html@1.10.0/dist/html.js"></script>
<script>
  const { HTMLText } = LeaferIN.html
</script>
```

<!-- https://unpkg.com 无法访问时，可替换为 https://cdn.jsdelivr.net/npm -->

:::

## 关键属性

### text：`string`

富文本内容。

后续会增加 fontSize 等文本基础属性，可以先通过富文本内嵌入样式进行设置。

### 内部方法

### decodeText ( text: `string` ): `string`

解码 text 中的 HTML 实体字符（&nbsp 等;）为 Unicode，避免报错导致不显示文本。

原因：SVG 无法直接显示 HTML 实体字符，需解码为 Unicode，默认支持以下常用实体字符。

```ts
// 常用 HTML 实体字符转 SVG 能识别的 Unicode 字符
const unicodeEntities: Record<string, string> = {
  // 基础符号
  lt: '\u003C', // &lt; =>  <
  gt: '\u003E', // >
  amp: '\u0026', // &
  quot: '\u0022', // "
  apos: '\u0027', // '

  // 空格类
  nbsp: '\u00A0', // 不断行空格
  ensp: '\u2002', // 半方宽空格
  emsp: '\u2003', // 全方宽空格
  thinsp: '\u2009', // 窄空格

  // 线条/标点
  ndash: '\u2013', // –
  mdash: '\u2014', // —
  hellip: '\u2026', // …
  middot: '\u00B7', // ·
  bull: '\u2022', // •

  // 引号
  laquo: '\u00AB', // «
  raquo: '\u00BB', // »
  lsquo: '\u2018', // ‘
  rsquo: '\u2019', // ’
  ldquo: '\u201C', // “
  rdquo: '\u201D', // ”

  // 货币符号
  cent: '\u00A2', // ¢
  pound: '\u00A3', // £
  yen: '\u00A5', // ¥
  euro: '\u20AC', // €

  // 数学运算
  times: '\u00D7', // ×
  divide: '\u00F7', // ÷
  plusmn: '\u00B1', // ±
  minus: '\u2212', // −
  frac12: '\u00BD', // ½
  frac14: '\u00BC', // ¼
  frac34: '\u00BE', // ¾
  sup2: '\u00B2', // ²
  sup3: '\u00B3', // ³

  // 常见符号
  deg: '\u00B0', // °
  reg: '\u00AE', // ®
  copy: '\u00A9', // ©
  trade: '\u2122', // ™
  section: '\u00A7', // §
  para: '\u00B6', // ¶
  dagger: '\u2020', // †
  Dagger: '\u2021', // ‡

  // 箭头
  larr: '\u2190', // ←
  uarr: '\u2191', // ↑
  rarr: '\u2192', // →
  darr: '\u2193', // ↓
  harr: '\u2194', // ↔

  // 希腊字母（常见）
  alpha: '\u03B1', // α
  beta: '\u03B2', // β
  gamma: '\u03B3', // γ
  delta: '\u03B4', // δ
  pi: '\u03C0', // π
  sigma: '\u03C3', // σ
  omega: '\u03C9', // ω
  Omega: '\u03A9', // Ω

  // 其他常见
  micro: '\u00B5', // µ
  infinity: '\u221E', // ∞
  not: '\u00AC', // ¬
  equiv: '\u2261', // ≡
  le: '\u2264', // ≤
  ge: '\u2265', // ≥
}
```

如需支持全面的 HTML 实体字符，可以安装外部包 'entities'，重写一下 decodeText() 即可。

```ts
import { HTMLText } from '@leafer-in/html' // 导入 html 插件
import { decode } from 'entities' // 安装 html 实体字符解码插件

// 重写内部解码方法
HTMLText.prototype.decodeText = function (text: string): string {
  if (!text.includes('&')) return text
  return decode(text)
}
```

如只需再支持少量 HTML 实体字符，可以使用下面的 addUnicodeEntity() 静态方法。

## 静态方法

### addUnicodeEntity ( entity: `string` | `IObject`, unicode?: `string` )

手动添加 HTML 实体字符转换为 Unicode。

```ts
// 单个添加
HTMLText.addUnicodeEntity('copy', '\u00A9') // &copy; =>  ©

// 多个添加
HTMLText.addUnicodeEntity({
  deg: '\u00B0', // °
  reg: '\u00AE', // ®
  copy: '\u00A9', // ©
})
```

## 原理

通过 SVG 嵌入 HTML 代码进行渲染。

LeaferJS 内部对 SVG 渲染做了很多优化，不会有太大的性能影响。

## 继承元素

### [Image](/reference/display/Image.md)

## 示例

<case name="HTMLText" height=100></case>

### 渲染富文本

<<< @/code/plugin/html/HTMLText/text.ts
