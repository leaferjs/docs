# EditorMoveEvent

编辑器的移动事件，通过 `app.editor.on()` 监听。

编辑器可通过配置 [beforeMove](/plugin/in/editor/config/event.md#beforemove-ieditorbeforemove) 钩子改变移动数据。

## 事件属性

### moveX: `number`

X 轴移动距离（世界坐标）

### moveY: `number`

Y 轴移动距离（世界坐标）

## 事件名称

### EditorMoveEvent.BEFORE_MOVE

before 移动元素事件。

`editor.before_move`

### EditorMoveEvent.MOVE

移动元素事件。

`editor.move`

## 继承事件

### [Event](/reference/event/basic/Event.md)

<!-- ## API

### [EditorMoveEvent](/api/classes/EditorMoveEvent.md) -->

## 示例

### 移动元素事件

<<< @/code/plugin/editor/event/move.ts
