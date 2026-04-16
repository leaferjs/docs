<script setup>
import Case from '/component/Case.vue'
</script>

# Display Elements

## Key Properties

### buttons: [`Group`](../../../../reference/display/Group.md)

Button group used to place custom buttons. It is aligned using overall [around](../../../../reference/UI/around.md) alignment and located at the bottom of the editor. It can be [configured](../config/buttons.md).

### editBox: [`EditBox`](../EditBox.md)

Edit box responsible for rendering and interaction of the selection frame.

### editTool: [`EditTool`](../EditTool.md)

The currently active editing tool.

Used to edit element size and shape. It is automatically loaded when an element is selected. You can [customize editing tools](../editOuter/register.md).

### innerEditor: [`InnerEditor`](../InnerEditor.md)

The currently active internal editor.

Used to edit internal details such as text and paths, opened by double-clicking an element. You can [customize internal editors](../editInner/register.md).

### selector: [`IEditSelect`](../../../../api/interfaces/IEditSelect.md)

选择器，负责单选、多选、框选元素的交互，渲染元素选中、hover 线框。

## 归属

### [Editor Element](../index.md#editor-元素)

## Example

<case name="EditorConfig" index=10 x=20 height=180></case>

### Add bottom fixed buttons

Even after rotating or flipping elements, the buttons remain in a fixed orientation. You can [configure](../config/buttons.md) the positioning of the button group.

<<< @/code/plugin/editor/buttons.ts
