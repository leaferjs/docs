<script setup>
import Case from '/component/Case.vue'
</script>

# Editor Element

The graphic editor is used for editing and manipulating graphics. It supports moving, scaling, rotating, and skewing elements, as well as multi-selection, box selection, grouping, entering groups via double-click, locking, and z-index control—aiming to match professional design tools. It supports custom [configuration](./config/base.md), [edit tools](./EditTool.md), and [inner editors](./InnerEditor.md).

<case name="Editor" select=0></case>

::: tip Inheritance
Editor  >  [Group](../../../reference/display/Group.md)  >  [UI](../../../reference/display/UI.md)

<br/>

It is usually created automatically by the application and can be accessed via [app.editor](../../../reference/display/App.md#editor-ieditor).

In future versions, more fine-grained property editors (such as corner radius, shapes, and paths) will be added. Currently, it cannot be mixed with [auto layout](../flow/index.md) elements.
:::

## Install Plugin

You need to install the editor plugin and the [resize plugin](../resize/index.md) to use it. [Visit GitHub repository](https://github.com/leaferjs/leafer-in/tree/main/packages/editor).

::: code-group

```sh [npm]
npm install @leafer-in/editor
npm install @leafer-in/resize
```

```sh [pnpm]
pnpm add @leafer-in/editor
pnpm add @leafer-in/resize
```

```sh [yarn]
yarn add @leafer-in/editor
yarn add @leafer-in/resize
```

```sh [bun]
bun add @leafer-in/editor
bun add @leafer-in/resize
```

:::

Or include via script tag and access plugin APIs through the global variable `LeaferIN.editor`.

::: code-group

```html [editor.min]
<script src="https://unpkg.com/@leafer-in/editor@2.0.9/dist/editor.min.js"></script>
<script src="https://unpkg.com/@leafer-in/resize@2.0.9/dist/resize.min.js"></script>
<script>
  const { Editor } = LeaferIN.editor
</script>
```

```html [editor]
<script src="https://unpkg.com/@leafer-in/editor@2.0.9/dist/editor.js"></script>
<script src="https://unpkg.com/@leafer-in/resize@2.0.9/dist/resize.js"></script>
<script>
  const { Editor } = LeaferIN.editor
</script>
```

<!-- https://unpkg.com can be replaced with https://cdn.jsdelivr.net/npm if unavailable -->

:::

## Key Properties

### target：[`UI`](../../../reference/display/UI.md) | [`UI`](../../../reference/display/UI.md)[]

Sets the elements to be edited. By default, editable elements are automatically selected via the [selection editor](./config/select.md#selector-boolean) (no need to set `draggable`).

### element: [`UI`](../../../reference/display/UI.md)

A unique representative of the selected element (read-only). You can directly use the layout and transform methods of the [element](#element-ui) to manipulate the edit box.

For single selection, it is the selected element. For multi-selection, it is a proxy element used to synchronize the layout of the edit box.

### config: [`IEditorConfig`](./config/base.md)

[Editor configuration](./config/base.md), passed during initialization via `editor: {}`.

It can be updated at runtime via [app.editor.config](./config/base.md). In special cases, call [updateEditTool()](./Editor/update.md) to apply changes immediately.

## Secondary Properties

### hoverTarget: [`UI`](../../../reference/display/UI.md)

Hover element, automatically selected via the [selection editor](./config/select.md#selector-boolean) by default.

### targetLeafer: [`Leafer`](../../../reference/display/Leafer.md)

The leafer layer instance containing the first target element (read-only).

### dimTarget: [`Group`](../../../reference/display/Group.md) | [`Group`](../../../reference/display/Group.md)[]

Defines the scope of elements affected by [dimOthers](./config/style.md#bright-boolean). Supports arrays. Defaults to `targetLeafer`.

### mergeConfig: [`IEditorConfig`](./config/base.md)

The actual merged editor configuration (read-only), combining [config](#config-ieditorconfig) and element-level [editConfig](../../../reference/UI/editable.md#editconfig-ieditorconfig). Access may have performance cost.

### mergedConfig: [`IEditorConfig`](./config/base.md)

Cached version of `mergeConfig`, safe for frequent access.

## More Properties

| Name            | Description                                                          |
| --------------- | -------------------------------------------------------------------- |
| visible         | Whether the editor is visible; when hidden, interaction is disabled  |
| hittable        | Whether the editor responds to interaction events                    |
| single          | Whether only one element is selected                                 |
| multiple        | Whether multiple elements are selected                               |
| editing         | Whether in editing state                                             |
| innerEditing    | Whether in inner editing state (double-click into text/path editing) |
| groupOpening    | Whether a group is opened for editing                                |
| dragging        | Whether the editor is being dragged                                  |
| gesturing       | Whether touch gestures are active                                    |
| moving          | Whether moving                                                       |
| resizing        | Whether resizing                                                     |
| rotating        | Whether rotating                                                     |
| skewing         | Whether skewing                                                      |
| list            | Selected element list (read-only)                                    |
| leafList        | High-performance selected list object                                |
| openedGroupList | Opened group list object                                             |
| buttons         | Button group at bottom of editor                                     |
| editBox         | Edit box container                                                   |
| editTool        | Current edit tool                                                    |
| innerEditor     | Current inner editor                                                 |
| selector        | Selection handler                                                    |

## Key Methods

| Name               | Description                        |
| ------------------ | ---------------------------------- |
| select()           | Select elements                    |
| cancel()           | Cancel selection                   |
| hasItem()          | Check if item is selected          |
| addItem()          | Add item to selection              |
| removeItem()       | Remove item from selection         |
| group()            | Group selected elements            |
| ungroup()          | Ungroup selected elements          |
| openGroup()        | Open group (simulate double click) |
| closeGroup()       | Close group                        |
| getInnerEditor()   | Get inner editor instance          |
| openInnerEditor()  | Open inner editor                  |
| closeInnerEditor() | Close inner editor                 |
| lock()             | Lock selected elements             |
| unlock()           | Unlock selected elements           |
| toTop()            | Bring to top within group          |
| toBottom()         | Send to bottom within group        |
| update()           | Update editor layout and style     |
| updateEditBox()    | Update edit box alignment          |
| getEditTool()      | Get edit tool instance             |
| updateEditTool()   | Update edit tool                   |
| move()             | Move elements (incremental)        |
| flip()             | Flip elements along axis           |
| scaleOf()          | Scale around origin                |
| rotateOf()         | Rotate around origin               |
| skewOf()           | Skew around origin                 |

## Editor Configuration

### [Base](./config/base.md)     [Event](./config/event.md)     [Style](./config/style.md)     [Buttons](./config/buttons.md)     [Cursor](./config/cursor.md)     [Select](./config/select.md)     [Control](./config/control.md)     [Enable](./config/enable.md)     [Inner Editor](./config/innerEditor.md)

### Resize behavior

The editor modifies element width/height and path coordinates by default, similar to professional design tools.

It also supports resizing via `fontSize` or scaling attributes. See [editSize](./config/base.md).

## Utilities

### [Shortcut Keys](./Editor/shortcut.md)

### [History](./Editor/history.md)

## Events

Editor operation events can be listened to via `app.editor.on()`.

It also supports hooks like `beforeMove`, `beforeScale`, and `beforeRotate`.

| Name              | Description           |
| ----------------- | --------------------- |
| EditorEvent       | Select / hover events |
| EditorMoveEvent   | Move events           |
| EditorScaleEvent  | Resize events         |
| EditorRotateEvent | Rotate events         |
| EditorSkewEvent   | Skew events           |
| EditorGroupEvent  | Group events          |
| InnerEditorEvent  | Inner editor events   |

## Edit Tools

Used for editing element size and shape. Automatically loaded when elements are selected.

### [EditTool](./EditTool.md)

### [LineEditTool](../../../api/classes/LineEditTool.md)

### [Custom Edit Tool](./editOuter/register.md)

## Inner Editors

Used for editing text, paths, and other internal details via double-click.

### [InnerEditor](./InnerEditor.md)

### [Custom Inner Editor](./editInner/register.md)

## Inheritance

### Editor  >  [Group](../../../reference/display/Group.md)  >  [UI](../../../reference/display/UI.md)

## Getting Started

<case name="Editor" index=2 count=2 x=20></case>

1. Click to select elements (supports multi-select and box select).

2. Drag control points or edges to resize elements.

3. Drag outside control points to rotate elements.

Hold `Ctrl` / `Command` to skew elements by dragging edges.

::: danger Note

The editor must be used inside an [App](../../../reference/display/App.md). By passing `editor` configuration, `app.editor` and layered structure (`app.tree`, `app.sky`) are automatically created, and the editor is mounted to the sky layer.

:::

::: code-group

<<< @/code/plugin/editor/start.ts [editor]

<<< @/code/plugin/editor/full.ts [implementation]

:::

## Examples

<case name="Editor" index=2 count=2 x=20></case>

### Click to select elements

Elements must have the [editable](../../../reference/UI/editable.md) property to be selectable. You can access the editor via `app.editor`.

<<< @/code/plugin/editor/editable.ts

### Rotation handle

<<< @/code/plugin/editor/config/rotate-point.ts

### Middle control points

<<< @/code/plugin/editor/config/middle.ts

### Fixed bottom buttons

<<< @/code/plugin/editor/buttons.ts

### Selection events

::: code-group
<<< @/code/plugin/editor/event/select.ts
<<< @/code/plugin/editor/event/select.js
:::

### Rotate manually

<<< @/code/plugin/editor/rotate.ts

### Create mode

::: code-group
<<< @/code/plugin/editor/create-mode.ts
<<< @/code/plugin/editor/create-mode.js
:::

### Transparent grid canvas

<<< @/code/plugin/editor/frame/transparent.ts

### Mobile gesture interactions

<<< @/code/plugin/editor/config/gesture.ts
