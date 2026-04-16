# Update

## Key Methods

### update()

Manually update the editor layout, styles, etc.

### updateEditBox()

Manually update the edit box to fit the element. This is typically used after aligning multiple selected elements.

## Edit Tools

### getEditTool(name: `string`): [`EditTool`](./display.md)

Get an edit tool instance (singleton). `name` is the name of the internal editor.

```ts
// Get configuration of the line edit tool
const config = app.editor.getEditTool('LineEditTool').config
```

### updateEditTool()

Update the edit tool. This method is automatically called after selecting elements.

## 归属

### [Editor Element](../index.md#editor-元素)

## Example

### Update editor

Make configured middle control points appear immediately.

<<< @/code/plugin/editor/editor/update.ts
