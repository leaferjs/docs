<script setup>
import Case from '/component/Case.vue'
</script>

# 编辑器配置

### [基础](/plugin/in/editor/config/base.md) &nbsp; &nbsp; [事件](/plugin/in/editor/config/event.md) &nbsp; &nbsp; [样式](/plugin/in/editor/config/style.md) &nbsp; &nbsp; [按钮组](/plugin/in/editor/config/buttons.md) &nbsp; &nbsp; [光标](/plugin/in/editor/config/cursor.md) &nbsp; &nbsp; [选择](/plugin/in/editor/config/select.md) &nbsp; &nbsp; [控制](/plugin/in/editor/config/control.md) &nbsp; &nbsp; 启用 &nbsp; &nbsp; [内部编辑器](/plugin/in/editor/config/innerEditor.md)

##

启动功能配置，应用运行中可实时修改 [app.editor.config](/plugin/in/editor/index.md#config-ieditorconfig) 生效。

同时元素拥有 [独立的编辑配置](/reference/UI/editable.md#editconfig-ieditorconfig) 属性，可实时覆盖主配置。

## 关键属性

### moveable: `boolean` | `'move'`

是否启用移动， 默认启用。

设为 `move` 可支持手机端双指移动手势。

### resizeable: `boolean` | `'zoom'`

是否启用编辑大小， 默认启用。

设为 `zoom` 可支持手机端缩放手势。

### flipable: `boolean`

是否启用镜像/翻转元素功能， 默认启用

### rotateable: `boolean` | `'rotate'`

是否启用旋转， 默认启用。

设为 `rotate` 可支持手机端旋转手势。

### skewable: `boolean`

是否启用倾斜， 默认启用。

## 示例

<case name="EditorConfig" index=12 x=20></case>

### 禁用旋转

<<< @/code/plugin/editor/config/rotateable.ts

<case name="EditorConfig" index=13 x=20></case>

### 禁用缩放

<<< @/code/plugin/editor/config/resizeable.ts

### 移动端手势操作元素

<<< @/code/plugin/editor/config/gesture.ts
