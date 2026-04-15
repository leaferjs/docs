# Internal Editor

## Key Methods

### getInnerEditor(name: `string`): [`innerEditor`](./display.md)

Get the internal editor instance (singleton). `name` is the name of the internal editor.

```ts
// Configure text editor
app.editor.getInnerEditor('TextEditor').config.selectAll = false
```

### openInnerEditor(target?: [`UI`](../../../../reference/display/UI.md), nameOrSelect?: `string`, select?: `boolean`)

Open the internal editor for an element.

An optional `target` can be passed for editing.

The `nameOrSelect` parameter can specify the name of the internal editor, and `select` indicates whether to select the target at the same time.

```ts
app.editor.openInnerEditor(rect, true)
app.editor.openInnerEditor(rect, 'ClipEditor', true) // specify internal editor name
```

### closeInnerEditor()

Close the internal editor.

## Belongs to

### [Editor Element](../index.md#editor-元素)

## Example

### Manually open internal editor

Enter text editing mode.

<<< @/code/plugin/editor/editor/innerEditor.ts
