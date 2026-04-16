# InnerEditorEvent

Internal editor events, listened via `app.editor.on()`.

## Event Properties

### editTarget: [`UI`](../../../../reference/display/UI.md)

The target element being edited.

### innerEditor: [`InnerEditor`](../InnerEditor.md)

The internal editor instance.

## Event Names

### InnerEditorEvent.BEFORE_OPEN

Before open internal editor event.

`innerEditor.before_open`

### InnerEditorEvent.OPEN

Open internal editor event.

`innerEditor.open`

### InnerEditorEvent.BEFORE_CLOSE

Before close internal editor event.

`innerEditor.before_close`

### InnerEditorEvent.CLOSE

Close internal editor event.

`innerEditor.close`

## Inherited Events

### [Event](../../../../reference/event/basic/Event.md)

<!-- ## API

### [InnerEditorEvent](../../../../api/classes/InnerEditorEvent.md) -->

## Example

### Open internal editor event

<<< @/code/plugin/editor/event/innerEditor.ts
