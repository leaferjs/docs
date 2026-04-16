# EditorEvent

Editor selection / deselection events, listened via `app.editor.on()`.

The editor can modify selection data through the [beforeSelect](../config/event.md#beforeselect-ieditorbeforeselect) hook in the configuration.

## Event Properties

### editor: [`Editor`](../index.md)

编辑器对象。

### value: [`UI`](../../../../reference/display/UI.md) | [`UI`](../../../../reference/display/UI.md)[]

Selected / hovered elements.

### oldValue: [`UI`](../../../../reference/display/UI.md) | [`UI`](../../../../reference/display/UI.md)[]

Previous selected / hovered elements.

### list: [`UI`](../../../../reference/display/UI.md)[]

Current selected / hovered element list. Empty array if none.

### oldList: [`UI`](../../../../reference/display/UI.md)[]

Previous selected / hovered element list. Empty array if none.

## Event Names

### EditorEvent.BEFORE_SELECT

Before-select event.

`editor.before_select`

### EditorEvent.SELECT

Select event.

Triggered on both select and deselect. Use [editor.target](../index.md#target-ui-ui) to get the selected elements.

`editor.select`

### EditorEvent.BEFORE_HOVER

before hover 元素事件。

`editor.before_hover`

### EditorEvent.HOVER

hover 元素事件。

Triggered on both hover and un-hover. Use [editor.hoverTarget](../index.md#hovertarget-ui) to get the hovered elements.

`editor.hover`

## Inherited Events

### [Event](../../../../reference/event/basic/Event.md)

<!--
## API

### [EditorEvent](../../../../api/classes/EditorEvent.md) -->

## Example

### Listen to selection events

:::code-group
<<< @/code/plugin/editor/event/select.ts
<<< @/code/plugin/editor/event/select.js
:::
