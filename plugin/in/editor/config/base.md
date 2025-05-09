<script setup>
import Case from '/component/Case.vue'
</script>

# 编辑器配置

### 基础 &nbsp; &nbsp; [事件](/plugin/in/editor/config/event.md) &nbsp; &nbsp; [样式](/plugin/in/editor/config/style.md) &nbsp; &nbsp; [按钮组](/plugin/in/editor/config/buttons.md) &nbsp; &nbsp; [光标](/plugin/in/editor/config/cursor.md) &nbsp; &nbsp; [选择](/plugin/in/editor/config/select.md) &nbsp; &nbsp; [控制](/plugin/in/editor/config/control.md) &nbsp; &nbsp; [启用](/plugin/in/editor/config/enable.md) &nbsp; &nbsp; [内部编辑器](/plugin/in/editor/config/innerEditor.md)

##

基础配置，引擎运行中可实时修改 [app.editor.config](/plugin/in/editor/index.md#config-ieditorconfig) 生效。

同时元素拥有 [独立的编辑配置](/reference/UI/editable.md#editconfig-ieditorconfig) 属性，可实时覆盖主配置。

## 关键属性

### editSize: `'size'` | `'scale'` | `'font-size'`

调整元素大小的方式，默认为 size。

size： 修改元素的 **宽高、路径** 达到调整大小的目的。

font-size： 修改文本的 **fontSize** 达到调整大小的目的。

scale： 修改元素的 **缩放属性** 达到调整大小的目的。

不同元素可 [单独设置 editSize ](/reference/UI/editable.md#editconfig-ieditorconfig) 。

### 隐藏

### hideOnMove: `boolean`

是否在移动元素时隐藏编辑框， 默认为否。

### hideOnSmall: `boolean` | `number`

是否在元素很小的时候隐藏编辑器控制点，默认为 true。

可以设置一个最小的 size, 默认最小的 size 为 10 (表示 10 x 10 的大小)。

## 示例

### 拖拽控制点修改字体大小，拖拽边框控制文本宽高

<<< @/code/plugin/editor/config/style/point/fontSize.ts

### 移动元素时隐藏编辑框

<<< @/code/plugin/editor/config/hide-move.ts
