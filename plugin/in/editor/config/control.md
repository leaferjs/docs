<script setup>
import Case from '/component/Case.vue'
</script>

# 编辑器配置

### [基础](/plugin/in/editor/config/base.md) &nbsp; &nbsp; [事件](/plugin/in/editor/config/event.md) &nbsp; &nbsp; [样式](/plugin/in/editor/config/style.md) &nbsp; &nbsp; [按钮组](/plugin/in/editor/config/buttons.md) &nbsp; &nbsp; [光标](/plugin/in/editor/config/cursor.md) &nbsp; &nbsp; [选择](/plugin/in/editor/config/select.md) &nbsp; &nbsp; 控制 &nbsp; &nbsp; [启用](/plugin/in/editor/config/enable.md) &nbsp; &nbsp; [内部编辑器](/plugin/in/editor/config/innerEditor.md)

##

限制配置，应用运行中可实时修改 [app.editor.config](/plugin/in/editor/index.md#config-ieditorconfig) 生效。

同时元素拥有 [独立的编辑配置](/reference/UI/editable.md#editconfig-ieditorconfig) 属性，可实时覆盖主配置。

## 关键属性

### around: [`Around`](/reference/UI/around.md)

指定中心点旋转、缩放大小， 默认为无。

设置 'center' 表示正中心点 {x:0.5, y: 0.5}, 设置 {x:1, y:1} 表示右下角，相对编辑框宽高比例。

### lockRatio: `boolean` | `'corner'`

锁定宽高比例, 默认为 false。

设置 'corner' 表示只固定 4 个角的缩放比例，中间点可自由调整。

### rotateGap: `number`

旋转吸附间隔，当靠近间隔点时，慢慢旋转会被吸附到间隔点上，默认为每 45 度。

## 示例

<case name="EditorConfig" index=7 x=20></case>

### 按中心点缩放

<<< @/code/plugin/editor/config/around.ts

<case name="EditorConfig" index=8 x=20></case>

### 固定比例缩放

<<< @/code/plugin/editor/config/lockRatio.ts
