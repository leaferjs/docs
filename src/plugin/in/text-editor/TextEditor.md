<script setup>
import Case from '/component/Case.vue'
</script>

# TextEditor

文本编辑，双击元素进入编辑状态。

::: tip 继承
TextEditor &nbsp;>&nbsp; [InnerEditor](/plugin/in/editor/InnerEditor.md)
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

## 多行文本

<case name="TextEditor" index=3 count=1 height=160></case>

## 改变字体

<case name="TextEditor" index=4 count=1 height=160></case>

## 字间距

<case name="TextEditor" index=5 count=1 height=160></case>

## 行高

<case name="TextEditor" index=6 count=1 height=160></case>

## 居中对齐

<case name="TextEditor" index=7 count=1 height=160></case>

## 裁剪文本

<case name="TextEditor" index=8 count=1 height=160></case>

## 转为大写

<case name="TextEditor" index=9 count=1 height=160></case>
