# InnerEditor

Internal editor.

It is generally used to edit internal details such as text and paths, and is opened via double-clicking elements. See [custom inner editor](./editInner/register.md).

## Key Properties

### editTarget: [`UI`](../../../reference/display/UI.md)

The target element currently being edited.

### view: [`IGroup`](../../../reference/display/Group.md)

The view container of the inner editor.

### editConfig: [`IEditorConfig`](./config/base.md)

Temporary independent configuration for the inner editor (overrides the main editor config). It is only valid while the inner editor is open and will be restored after closing.

### eventIds?: `IEventListenerId[]`

List of event listener IDs (optional), supports automatic cleanup. Listeners registered via [on\_()](../../../reference/UI/on.md#on-1) can return an event ID and bind `this`.

## Read-only Properties

### tag: `string`

The unique tag name of the inner editor.

### editor: [`Editor`](./index.md)

The main editor instance.

### editBox: [`EditBox`](./EditBox.md)

The edit box instance.

## Key Methods

### Lifecycle

### onCreate()

执行创建。

This method is automatically invoked when the inner editor is instantiated.

### onLoad()

执行载入。

When the user selects an element, the editor switches tools and this method is automatically called to load the inner editor.

### onUpdate()

Called when updating.

当用户操作视图、元素时，会自动调用此方法更新。

### onUnload()

执行卸载。

This method is automatically invoked when switching to another editor tool.

### onDestroy()

执行销毁。

## Customization

### [Custom Inner Editor](./editInner/register.md)

<!-- ## API

### [InnerEditor](../../../api/classes/InnerEditor.md) -->
