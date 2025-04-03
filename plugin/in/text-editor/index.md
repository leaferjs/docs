<script setup>
import Case from '/component/Case.vue'
</script>

# TextEditor 编辑器

文本编辑，双击 [Text](/reference/display/Text.md) 元素进入编辑状态。

<case name="TextEditor"  count=6 height=160></case>

::: tip 继承
TextEditor &nbsp;>&nbsp; [InnerEditor](/plugin/in/editor/InnerEditor.md)
:::

<!-- # 文本编辑

双击文本进入编辑状态，需要先安装 [图形编辑器](/plugin/in/editor/index.md) 插件。 -->

<!-- ## beta 版 公测插件 (本周会随新版本完全开放)

目前该插件仅供公测用户体验使用、参与测试。

稳定后会开放给大众使用，可通过 [发电](/sponsor/charge.md) 获得 公测资格。 -->

## 适用平台

目前仅 web 平台 PC 端支持。

## 安装插件

需要安装 text-editor 插件、[图形编辑器插件](/plugin/in/editor/index.md) 才能使用，[点此访问 Github 仓库](https://github.com/leaferjs/leafer-in/tree/main/packages/text-editor)。

::: code-group

```sh [npm]
npm install @leafer-in/text-editor
```

```sh [pnpm]
pnpm add @leafer-in/text-editor
```

```sh [yarn]
yarn add @leafer-in/text-editor
```

```sh [bun]
bun add @leafer-in/text-editor
```

:::

或通过 script 标签引入，使用全局变量 LeaferIN.textEditor 访问插件内部功能。

::: code-group

```html [text-editor.min]
<script src="https://unpkg.com/@leafer-in/text-editor@1.5.3/dist/text-editor.min.js"></script>
<script>
  const { TextEditor } = LeaferIN.textEditor
</script>
```

```html [text-editor]
<script src="https://unpkg.com/@leafer-in/text-editor@1.5.3/dist/text-editor.js"></script>
<script>
  const { TextEditor } = LeaferIN.textEditor
</script>
```

<!-- https://unpkg.com 无法访问时，可替换为 https://cdn.jsdelivr.net/npm -->

:::

## 关键属性

### config: `ITextEditorConfig`

文本编辑器配置。

可监听 [InnerEditorEvent.BEFORE_OPEN](/plugin/in/editor/event/InnerEditorEvent.md) 事件，提前配置 app.editor.innerEditor.config。

```ts
interface ITextEditorConfig {
  selectAll: boolean // 是否自动全选文本，默认为true
}
```

### editDom: `HTMLDivElement`

编辑文本框，覆盖在画布上的可编辑 dom 元素（用来临时代替文本）。

<!-- ## 继承

### [InnerEditor](/plugin/in/editor/InnerEditor.md) -->

## 示例

### 正常文本

<case name="TextEditor"  count=1 height=160></case>

### 倾斜加粗

<case name="TextEditor" index=1 count=1 height=160></case>

### 转为小写

<case name="TextEditor" index=2 count=1 height=160></case>

### 多行文本

<case name="TextEditor" index=3 count=1 height=160></case>

<<< @/code/plugin/text-editor/text.ts

### 改变字体

<case name="TextEditor" index=4 count=1 height=160></case>

### 字间距

<case name="TextEditor" index=5 count=1 height=160></case>

### 行高

<case name="TextEditor" index=6 count=1 height=160></case>

## 居中对齐

<case name="TextEditor" index=7 count=1 height=160></case>

### 裁剪文本

<case name="TextEditor" index=8 count=1 height=160></case>

### 转为大写

<case name="TextEditor" index=9 count=1 height=160></case>
