# EditorGroupEvent

编辑器的编组事件，通过 `app.editor.on()` 监听。

## 事件属性

### editTarget: [`Group`](/reference/display/Group.md)

当前操作的目标组。

## 事件名称

### EditorGroupEvent.BEFORE_GROUP

before 编组事件。

`editor.before_group`

### EditorGroupEvent.GROUP

编组事件。

`editor.group`

### EditorGroupEvent.BEFORE_UNGROUP

before 解组事件。

`editor.before_ungroup`

### EditorGroupEvent.UNGROUP

解组事件。

`editor.ungroup`

### EditorGroupEvent.BEFORE_OPEN

before 双击打开组事件。

`editor.before_open_group`

### EditorGroupEvent.OPEN

双击打开组事件。

`editor.open_group`

### EditorGroupEvent.BEFORE_CLOSE

before 关闭已打开的组事件。

`editor.before_close_group`

### EditorGroupEvent.CLOSE

关闭已打开的组事件。

`editor.close_group`

## 继承事件

### [Event](/reference/event/basic/Event.md)

<!-- ## API

### [EditorGroupEvent](/api/classes/EditorGroupEvent.md) -->

## 示例

### 元素编组事件

<<< @/code/plugin/editor/event/group.ts
