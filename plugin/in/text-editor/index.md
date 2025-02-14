<script setup>
import Case from '/component/Case.vue'
</script>

# 文本编辑

双击文本进入编辑状态，需要先安装 [图形编辑器](/plugin/in/editor/index.md) 插件。

<case name="TextEditor"  count=6 height=160></case>

<!-- ## beta 版 公测插件 (本周会随新版本完全开放)

目前该插件仅供公测用户体验使用、参与测试。

稳定后会开放给大众使用，可通过 [发电](/sponsor/charge.md) 获得 公测资格。 -->

## 适用平台

目前仅 web 平台支持。

## 安装插件

需要安装 text-editor 插件才能使用。

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

### 通过 script 标签引入

通过全局变量 LeaferIN.textEditor 访问插件内部功能。
::: code-group

```html [text-editor.min]
<script src="https://unpkg.com/@leafer-in/text-editor@1.4.0/dist/text-editor.min.js"></script>
<script>
  const { TextEditor } = LeaferIN.textEditor
</script>
```

```html [text-editor]
<script src="https://unpkg.com/@leafer-in/text-editor@1.4.0/dist/text-editor.js"></script>
<script>
  const { TextEditor } = LeaferIN.textEditor
</script>
```

https://unpkg.com 无法访问时，可替换为 https://cdn.jsdelivr.net/npm
:::

## 依赖插件

### [图形编辑器 插件](/plugin/in/editor/index.md)

## 开始体验

<case name="TextEditor" index=3 count=1 height=160></case>

<<< @/code/plugin/text-editor/text.ts

## 下一步

### [TextEditor 工具](./TextEditor.md)
