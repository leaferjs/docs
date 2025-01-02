<script setup>
import Case from '/component/Case.vue'
</script>

# 自动布局

类似 Flex 的自动布局，更简单、直观，可以快速自动排版内容。

::: tip 注意事项
需安装 [自动布局插件](/plugin/in/flow/) 才能使用。
:::

<br/>

方向

<case name="Flow" count=6 height=160 editor=false></case>

<br/>

换行

<case name="FlowWrap" count=2 height=160 editor=false></case>

<case name="FlowWrap" index=2 count=2 height=160 editor=false></case>

<br/>

对齐

<case name="FlowAlign" count=3 height=160 editor=false></case>

<case name="FlowAlign" index=3 count=3 height=160 editor=false></case>

<case name="FlowAlign" index=6 count=3 height=160 editor=false></case>

<br/>

行内对齐

<case name="FlowYAlign" index=9 count=3 height=160 editor=false></case>

<case name="FlowAlign" index=9 count=3 height=160 editor=false></case>

<br/>

间距

<case name="FlowGap"  count=3 height=160 editor=false></case>

<case name="FlowGap" index=3 count=2 height=160 editor=false></case>

<br/>

自动尺寸

<case name="FlowAutoSize" count=2 height=160 editor=false></case>

<case name="FlowAutoSize" index=2 count=2 height=160 editor=false></case>

<<< @/code/plugin/flow/flow/x.ts

## 下一步

### [图形编辑器](/guide/plugin/editor.md)
