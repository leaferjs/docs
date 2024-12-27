<script setup>
import Case from '/component/Case.vue'
</script>

# HTMLText

HTML 富文本。

<case name="HTMLText" height=100></case>

::: tip 继承
HTMLText &nbsp;>&nbsp; [Image](/reference/display/Image.md) &nbsp;>&nbsp; [Rect](/reference/display/Rect.md) &nbsp;>&nbsp; [UI](/reference/display/UI.md)
:::

## 关键属性

### text：`string`

富文本内容。

后续会增加 fontSize 等文本基础属性，可以先通过富文本内嵌入样式进行设置。

## 原理

通过 SVG 嵌入 HTML 代码进行渲染。

LeaferJS 内部对 SVG 渲染做了很多优化，不会有太大的性能影响。

## 继承元素

### [Image](/reference/display/Image.md)

## 示例

<case name="HTMLText" height=100></case>

### 渲染富文本

<<< @/code/plugin/html/HTMLText/text.ts
