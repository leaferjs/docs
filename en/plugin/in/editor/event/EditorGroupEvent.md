# EditorGroupEvent

Editor grouping events, listened via `app.editor.on()`.

## Event Properties

### editTarget: [`Group`](../../../../reference/display/Group.md)

The target group currently being operated on.

## Event Names

### EditorGroupEvent.BEFORE_GROUP

Before group event.

`editor.before_group`

### EditorGroupEvent.GROUP

Group event.

`editor.group`

### EditorGroupEvent.BEFORE_UNGROUP

Before ungroup event.

`editor.before_ungroup`

### EditorGroupEvent.UNGROUP

Ungroup event.

`editor.ungroup`

### EditorGroupEvent.BEFORE_OPEN

Before double-click open group event.

`editor.before_open_group`

### EditorGroupEvent.OPEN

Double-click open group event.

`editor.open_group`

### EditorGroupEvent.BEFORE_CLOSE

Before closing an opened group event.

`editor.before_close_group`

### EditorGroupEvent.CLOSE

Close opened group event.

`editor.close_group`

## Inherited Events

### [Event](../../../../reference/event/basic/Event.md)

## Example

### Element grouping events

<<< @/code/plugin/editor/event/group.ts
