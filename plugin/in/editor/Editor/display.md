<script setup>
import Case from '/component/Case.vue'
</script>

# 显示元素

## 关键属性

### buttons: [`Group`](/reference/display/Group.md)

按钮组，用于放置自定义按钮，整体 [around](/reference/UI/around.md) 对齐， 位于编辑器底部，可以 [进行配置](/plugin/in/editor/config/buttons.md)。

### editBox: [`EditBox`](/plugin/in/editor/EditBox.md)

编辑框，负责编辑框的显示与交互。

### editTool: [`EditTool`](/plugin/in/editor/EditTool.md)

当前使用的编辑工具。

用来编辑元素的尺寸、外形，选中元素时会自动载入，可 [自定义编辑工具](/plugin/in/editor/editOuter/register.md)。

### innerEditor: [`InnerEditor`](/plugin/in/editor/InnerEditor.md)

当前使用的内部编辑器。

用来编辑文本、路径等内部细节，通过双击元素打开， 可 [自定义内部编辑器](/plugin/in/editor/editInner/register.md)

### selector: [`IEditSelect`](/api/interfaces/IEditSelect.md)

选择器，负责单选、多选、框选元素的交互，渲染元素选中、hover 线框。

## 归属

### [Editor 元素](/plugin/in/editor/index.md#editor-元素)

## 示例

<case name="EditorConfig" index=10 x=20 height=180></case>

### 添加底部固定按钮

元素旋转、翻转后仍保持固定方位，可以 [配置](/plugin/in/editor/config/buttons.md) 按钮组的方位。

<<< @/code/plugin/editor/buttons.ts
