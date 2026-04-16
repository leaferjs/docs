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

编辑器，载入后才有值。

### editBox: [`EditBox`](./EditBox.md)

编辑框，载入后才有值。

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

执行创建。

Automatically invoked when the edit tool instance is created.

### onLoad()

执行载入。

Triggered when the user selects an element and the edit tool is switched in.

### onUpdate()

执行更新。

当用户操作视图、元素时，会自动调用此方法更新。

### onUnload()

执行卸载。

Triggered when switching to another edit tool.

### onDestroy()

执行销毁。

## Customization

### [Custom Edit Tool](./editOuter/register.md)

## Inheritance

### [InnerEditor](./InnerEditor.md)

<!-- ## API

### [EditTool](../../../api/classes/EditTool.md) -->
