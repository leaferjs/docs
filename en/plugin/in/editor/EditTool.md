# EditTool

Default edit tool.

It is generally used to edit the size and shape of elements. It is automatically loaded when an element is selected. See [Custom Edit Tool](./editOuter/register.md).

## Key Properties

### view: [`IGroup`](../../../reference/display/Group.md)

The view container of the edit tool.

### editConfig: [`IEditorConfig`](./config/base.md)

Temporary independent editor configuration for the edit tool (overrides the main editor config). It is only valid while the edit tool is open and will be restored after closing.

### eventIds?: `IEventListenerId`[]

Optional list of event listener IDs. Supports automatic cleanup. Events registered via [on\_()](../../../reference/UI/on.md#on-1) return an event ID and can bind `this`.

## Readonly Properties

### tag: `string`

Unique tag name of the edit tool.

### editor: [`Editor`](./index.md)

The editor instance. Available only after the tool is loaded.

### editBox: [`EditBox`](./EditBox.md)

The edit box instance. Available only after the tool is loaded.

## Key Methods

### Element operations

### onMove(event: [`EditorMoveEvent`](./event/EditorMoveEvent.md))

Execute element move.

### onScale(event: [`EditorScaleEvent`](./event/EditorScaleEvent.md))

Execute element scaling (resize).

### onRotate(event: [`EditorRotateEvent`](./event/EditorRotateEvent.md))

Execute element rotation.

### onSkew(event: [`EditorSkewEvent`](./event/EditorSkewEvent.md))

Execute element skewing.

### Lifecycle

### onCreate()

Called when the tool is created.

Automatically invoked when the edit tool instance is created.

### onLoad()

Called when the tool is loaded.

Triggered when the user selects an element and the edit tool is switched in.

### onUpdate()

Called when the tool updates.

Triggered when the user interacts with the view or elements.

### onUnload()

Called when the tool is unloaded.

Triggered when switching to another edit tool.

### onDestroy()

Called when the tool is destroyed.

## Customization

### [Custom Edit Tool](./editOuter/register.md)

## Inheritance

### [InnerEditor](./InnerEditor.md)

<!-- ## API

### [EditTool](../../../api/classes/EditTool.md) -->
