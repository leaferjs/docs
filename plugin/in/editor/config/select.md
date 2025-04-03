<script setup>
import Case from '/component/Case.vue'
</script>

# 编辑器配置

### [基础](/plugin/in/editor/config/base.md) &nbsp; &nbsp; [事件](/plugin/in/editor/config/event.md) &nbsp; &nbsp; [样式](/plugin/in/editor/config/style.md) &nbsp; &nbsp; [按钮组](/plugin/in/editor/config/buttons.md) &nbsp; &nbsp; [光标](/plugin/in/editor/config/cursor.md) &nbsp; &nbsp; 选择 &nbsp; &nbsp; [控制](/plugin/in/editor/config/control.md) &nbsp; &nbsp; [启用](/plugin/in/editor/config/enable.md) &nbsp; &nbsp; [内部编辑器](/plugin/in/editor/config/innerEditor.md)

##

选择方式配置，仅在初始化配置或应用运行中修改 [app.editor.config](/plugin/in/editor/index.md#config-ieditorconfig) 有效。

同时元素拥有 [独立的编辑配置](/reference/UI/editable.md#editconfig-ieditorconfig) 属性，可实时覆盖主配置。

## 关键属性

### editBox: `boolean`

是否启用编辑框功能（用于编辑元素），默认启用。

禁用后将隐藏编辑框。

### selector: `boolean`

是否启用编辑选择器， 默认启用。

可以通过交互来选取 [editable](/reference/UI/editable.md) 元素， 并支持显示 hover 状态。

### select: `'press'` | `'tap'`

点选的触发方式，默认为 press。

press 为鼠标按下触发， tap 为单击触发。

### multipleSelect: `boolean`

是否启用多选功能，默认启用。

### boxSelect: `boolean`

是否启用框选功能， 默认启用。

### continuousSelect: `boolean`

单击是否可以连续多选元素，一般用于手机端多选元素，默认关闭。
