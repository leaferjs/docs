<script setup>
import Case from '/component/Case.vue'
</script>

# TextEditor

Text editor. Double-click a [Text](../../../reference/display/Text.md) element to enter edit mode.

<case name="TextEditor" count=6 height=160></case>

:::tip Inheritance
TextEditor  >  [InnerEditor](../editor/InnerEditor.md)
:::

## Supported Platforms

Currently only supported on web (PC).

## Install Plugin

You need to install the text-editor plugin and the [graphic editor plugin](../editor/index.md) to use it. [Visit Github repository](https://github.com/leaferjs/leafer-in/tree/main/packages/text-editor).

::: code-group

```sh [npm]
npm install @leave-in/text-editor
```

```sh [pnpm]
pnpm add @leave-in/text-editor
```

```sh [yarn]
yarn add @leaver-in/text-editor
```

```sh [bun]
bun add @leaver-in/text-editor
```

:::

Or include via script tag and access plugin features through the global variable `LeaferIN.textEditor`.

::: code-group

```html [text-editor.min]
<script src="https://unpkg.com/@leafer-in/text-editor@2.0.8/dist/text-editor.min.js"></script>
<script>
  const { TextEditor } = LeaferIN.textEditor
</script>
```

```html [text-editor]
<script src="https://unpkg.com/@leafer-in/text-editor@2.0.8/dist/text-editor.js"></script>
<script>
  const { TextEditor } = LeaferIN.textEditor
</script>
```

<!-- https://unpkg.com 无法访问时，可替换为 https://cdn.jsdelivr.net/npm -->

:::

## Key Properties

### config: `ITextEditorConfig`

Text editor configuration.

After opening the text editor, you can access the instance via `app.editor.innerEditor`.

```ts
interface ITextEditorConfig {
  selectAll: boolean // whether to auto-select all text, default is true
}

// configure text editor
app.editor.getInnerEditor('TextEditor').config.selectAll = false
```

### editDom: `HTML DivElement`

Editable DOM element overlaid on the canvas (used as a temporary replacement for text).

Default CSS class name: `'leafer-text-editor'`.

## Inheritance

### TextEditor  >  [InnerEditor](../editor/InnerEditor.md)

## Examples

### Normal text

<case name="TextEditor" count=1 height=160></case>

### 倾斜加粗

<case name="TextEditor" index=1 count=1 height=160></case>

### Convert to lowercase

<case name="TextEditor" index=2 count=1 height=160></case>

### Multi-line text

<case name="TextEditor" index=3 count=1 height=160></case>

<<< @/code/plugin/text-editor/text.ts

### Change font

<case name="TextEditor" index=4 count=1 height=160></case>

### Letter spacing

<case name="TextEditor" index=5 count=1 height=160></case>

### Line height

<case name="TextEditor" index=6 count=1 height=160></case>

## 居中对齐

<case name="TextEditor" index=7 count=1 height=160></case>

### Clipped text

<case name="TextEditor" index=8 count=1 height=160></case>

### Convert to uppercase

<case name="TextEditor" index=9 count=1 height=160></case>
