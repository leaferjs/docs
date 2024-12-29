# EditorEvent

编辑器的选中/取消事件，通过 `app.editor.on()` 监听。

## 事件属性

### editor: [`Editor`](/plugin/in/editor/Editor.md)

编辑器对象。

### value：[`UI`](/reference/display/UI.md) | [`UI`](/reference/display/UI.md)[]

选中 / hover 元素。

### oldValue：[`UI`](/reference/display/UI.md) | [`UI`](/reference/display/UI.md)[]

旧的选中 / hover 元素。

### list： [`UI`](/reference/display/UI.md)[]

选中 / hover 元素列表，没有时为空数组。

### oldList： [`UI`](/reference/display/UI.md)[]

旧的选中 / hover 元素列表，没有时为空数组。

## 事件名称

### EditorEvent.SELECT

选择元素事件。

选择和取消都会触发， 通过 [editor.target](/plugin/in/editor/Editor.md#target-ui-ui) 获取选中的元素。

`editor.select`

### EditorEvent.HOVER

hover 元素事件。

选择和取消都会触发， 通过 [editor.hoverTarget](/plugin/in/editor/Editor.md#hovertarget-ui) 获取选中的元素列表。

`editor.hover`

## 继承事件

### [Event](/reference/event/basic/Event.md)

<!--
## API

### [EditorEvent](/api/classes/EditorEvent.md) -->
