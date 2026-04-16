<script setup>
import Case from '/component/Case.vue'
</script>

# Editor Element

图形编辑器，用于编辑操作图形，可移动、缩放、旋转、倾斜，支持多选、框选、编组、 双击进组，锁定、层级，向专业级设计工具看齐。支持自定义 [配置](./config/base.md)、 [编辑工具](./EditTool.md)、 [内部编辑器](./InnerEditor.md)。

<case name="Editor" select=0></case>

:::tip Inheritance
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
<script src="https://unpkg.com/@leafer-in/editor@2.0.8/dist/editor.min.js"></script>
<script src="https://unpkg.com/@leafer-in/resize@2.0.8/dist/resize.min.js"></script>
<script>
  const { Editor } = LeaferIN.editor
</script>
```

```html [editor]
<script src="https://unpkg.com/@leafer-in/editor@2.0.8/dist/editor.js"></script>
<script src="https://unpkg.com/@leafer-in/resize@2.0.8/dist/resize.js"></script>
<script>
  const { Editor } = LeaferIN.editor
</script>
```

<!-- https://unpkg.com 无法访问时，可替换为 https://cdn.jsdelivr.net/npm -->

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

mergeConfig 的缓存，频繁访问不会有性能问题。

## More Properties

| Name                                                                                                                                                                                                                                                                                                                                                                                                                                                                    | Description                                                                                           |
| ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------- |
| 状态                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |                                                                                                       |
| visible                                                                                                                                                                                                                                                                                                                                                                                                                                                                 | Whether the editor is visible; when hidden, interaction is disabled                                   |
| toBottom()                                                                                                                                                                                                                                                                                                                                                                                                                                           | Whether the editor responds to interaction events                                                     |
| single                                                                                                                                                                                                                                                                                                                                                                                                                                                                  | Whether multiple elements are selected                                                                |
| multiple                                                                                                                                                                                                                                                                                                                                                                                                                                                                | Whether only one element is selected                                                                  |
| editing                                                                                                                                                                                                                                                                                                                                                                                                                                                                 | 是否处于编辑状态，选择元素后即进入编辑状态                                                                                 |
| Edit box container                                                                                                                                                                                                                                                                                                                                                                                                                                                      | Whether in inner editing state (double-click into text/path editing)               |
| groupOpening                                                                                                                                                                                                                                                                                                                                                                                                                                                            | 是否处于打开组状态，双击组可进入打开状态，方便选择组内元素                                                                         |
| getEditTool()                                                                                                                                                                                                                                                                                                                                                                                                                                        | 是否正在拖拽编辑器，包含拖拽控制点、边                                                                                   |
| Whether in editing state                                                                                                                                                                                                                                                                                                                                                                                                                                                | 是否正在通过移动端手势拖拽、缩放、旋转编辑器                                                                                |
| move()                                                                                                                                                                                                                                                                                                                                                                                                                                               | Whether moving                                                                                        |
| resizing                                                                                                                                                                                                                                                                                                                                                                                                                                                                | Whether a group is opened for editing                                                                 |
| rotating                                                                                                                                                                                                                                                                                                                                                                                                                                                                | Whether rotating                                                                                      |
| The graphic editor is used for editing and manipulating graphics. It supports moving, scaling, rotating, and skewing elements, as well as multi-selection, box selection, grouping, entering groups via double-click, locking, and z-index control—aiming to match professional design tools. It supports custom [configuration](./config/base.md), [edit tools](./EditTool.md), and [inner editors](./InnerEditor.md). | Whether the editor is being dragged                                                                   |
| leafList                                                                                                                                                                                                                                                                                                                                                                                                                                                                |                                                                                                       |
| list                                                                                                                                                                                                                                                                                                                                                                                                                                                                    | Selected element list (read-only)                                                  |
| Current inner editor                                                                                                                                                                                                                                                                                                                                                                                                                                                    | High-performance selected list object                                                                 |
| openedGroupList                                                                                                                                                                                                                                                                                                                                                                                                                                                         | Opened group list object                                                                              |
| Move elements (incremental)                                                                                                                                                                                                                                                                                                                                                                                                                          |                                                                                                       |
| buttons                                                                                                                                                                                                                                                                                                                                                                                                                                                                 | 按钮组，用于放置自定义按钮，整体 [around](../../../reference/UI/around.md) 对齐， 位于编辑器底部，可以 [进行配置](./config/buttons.md) |
| editBox                                                                                                                                                                                                                                                                                                                                                                                                                                                                 | 编辑框，负责编辑框的显示与交互，了解 [EditBox](./EditBox.md)、[EditPoint](./EditPoint.md) 类                              |
| Current edit tool                                                                                                                                                                                                                                                                                                                                                                                                                                                       | 当前使用的编辑工具，用来编辑元素的尺寸、外形，选中元素时会自动载入，可 [自定义编辑工具](./editOuter/register.md)                                |
| innerEditor                                                                                                                                                                                                                                                                                                                                                                                                                                                             | Used for editing text, paths, and other internal details via double-click.            |
| Select / hover events                                                                                                                                                                                                                                                                                                                                                                                                                                                   | 选择器，负责单选、多选、框选元素的交互，渲染元素选中、hover 线框                                                                   |

## Key Methods

| Name                                                  | Description                                                                                                                 |
| ----------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------- |
| select()                           |                                                                                                                             |
| selector                                              | Select elements                                                                                                             |
| Selection handler                                     | Cancel selection                                                                                                            |
| hasItem()                          | Check if item is selected                                                                                                   |
| addItem()                          | Add item to selection                                                                                                       |
| removeItem()                       | Remove item from selection                                                                                                  |
| ungroup()                          |                                                                                                                             |
| Button group at bottom of editor                      | Group selected elements                                                                                                     |
| group()                            | Ungroup selected elements                                                                                                   |
| openGroup()                        | Open group (simulate double click)                                                                       |
| closeGroup()                       | Close group                                                                                                                 |
| innerEditing                                          |                                                                                                                             |
| getInnerEditor()                   | Get inner editor instance                                                                                                   |
| openInnerEditor()                  | Open inner editor                                                                                                           |
| closeInnerEditor()                 | Close inner editor                                                                                                          |
| dragging                                              |                                                                                                                             |
| lock()                             | Lock selected elements                                                                                                      |
| unlock()                           | Unlock selected elements                                                                                                    |
| 层级                                                    |                                                                                                                             |
| [toTop()](./Editor/zIndex.md)      | Bring to top within group                                                                                                   |
| [toBottom()](./Editor/zIndex.md)   | 移动选中元素到最底层（所属 Group 中）                                                                                                      |
| update()                           |                                                                                                                             |
| Update edit box alignment                             | Update editor layout and style                                                                                              |
| updateEditBox()                    | 手动更新编辑框，使其贴合元素，一般用于多选元素对齐后操作。                                                                                               |
| editTool                                              |                                                                                                                             |
| updateEditTool()                   | Get edit tool instance                                                                                                      |
| Update edit tool                                      | 更新编辑工具，选择元素后自动调用此方法                                                                                                         |
| moving                                                |                                                                                                                             |
| [move()](./Editor/transform.md)    | 位移选中元素 <badge>增量操作</badge>                                                                                                  |
| flip()                             | 按轴方向（ [世界坐标系](../../../guide/advanced/coordinate.md#world-世界坐标系)） 镜像/翻转选中元素                                                 |
| [scaleOf()](./Editor/transform.md) | 围绕 [element](#element-ui) 元素的原点 origin（ [box 坐标](../../../guide/advanced/coordinate.md#box-坐标系) ）缩放选中元素 <badge>增量操作</badge> |
| rotateOf()                         | 围绕 [element](#element-ui) 元素的原点 origin（ [box 坐标](../../../guide/advanced/coordinate.md#box-坐标系) ）旋转选中元素 <badge>增量操作</badge> |
| skewOf()                           | 围绕 [element](#element-ui) 元素的原点 origin（ [box 坐标](../../../guide/advanced/coordinate.md#box-坐标系) ）倾斜选中元素 <badge>增量操作</badge> |

## Editor Configuration

### [Base](./config/base.md)     [Event](./config/event.md)     [Style](./config/style.md)     [Buttons](./config/buttons.md)     [Cursor](./config/cursor.md)     [Select](./config/select.md)     [Control](./config/control.md)     [Enable](./config/enable.md)     [Inner Editor](./config/innerEditor.md)

### Resize behavior

The editor modifies element width/height and path coordinates by default, similar to professional design tools.

It also supports resizing via `fontSize` or scaling attributes. See [editSize](./config/base.md).

## 辅助

### [Shortcut Keys](./Editor/shortcut.md)

### [History](./Editor/history.md)

## Events

Editor operation events can be listened to via `app.editor.on()`.

同时支持事件钩子 [beforeMove](./config/event.md#beforemove-ieditorbeforemove)、[beforeScale](./config/event.md#beforescale-ieditorbeforescale)、[beforeRotate](./config/event.md#beforerotate-ieditorbeforerotate) 等，可改变操作数据。

| Name              | Description         |
| ----------------- | ------------------- |
| EditorEvent       | 选中、取消元素事件           |
| EditorMoveEvent   | Move events         |
| EditorScaleEvent  | Resize events       |
| EditorRotateEvent | Rotate events       |
| EditorSkewEvent   | Skew events         |
| EditorGroupEvent  | Group events        |
| InnerEditorEvent  | Inner editor events |

## Edit Tools

Used for editing element size and shape. Automatically loaded when elements are selected.

Two editing tools are built, and editing tools can be expanded for different graphical elements.

### [EditTool](./EditTool.md)

### [LineEditTool](../../../api/classes/LineEditTool.md)

### [Custom Edit Tool](./editOuter/register.md)

## Inner Editors

Use to edit internal details such as text, path, etc. to open them by double-clicking on elements.

Extensible path editor, text editor.

### [InnerEditor](./InnerEditor.md)

### [Custom Inner Editor](./editInner/register.md)

## Inheritance

### Editor  >  [Group](../../../reference/display/Group.md)  >  [UI](../../../reference/display/UI.md)

<!-- ## API

### [Editor](../../../api/classes/Editor.md) -->

## Getting Started

<case name="Editor" index=2 count=2 x=20></case>

1. Click to select elements (supports multi-select and box select).

2. Drag control points or edges to resize elements.

3. Drag outside control points to rotate elements.

Hold `Ctrl` / `Command` to skew elements by dragging edges.

:::danger Note

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

<case name="EditorConfig" index=11 x=20 height=160></case>

### 显示底部旋转控制点

默认会继承基础样式，可以进一步 [配置](./config/style.md#旋转按钮) 旋转控制点的样式。

<<< @/code/plugin/editor/config/rotate-point.ts

<case name="EditorConfig" index=14 x=20></case>

### 显示中间控制点，并修改样式

默认会继承基础样式、旋转角度， 可以精确 [设置](./config/style.md#精确控制样式) 每个控制点的样式。

<<< @/code/plugin/editor/config/middle.ts

<case name="EditorConfig" index=10 x=20 height=180></case>

### Fixed bottom buttons

元素旋转、翻转后仍保持固定方位，可以 [配置](./config/buttons.md) 按钮组的方位。

<<< @/code/plugin/editor/buttons.ts

### Selection events

:::code-group
<<< @/code/plugin/editor/event/select.ts
<<< @/code/plugin/editor/event/select.js
:::

### Rotation handle

<<< @/code/plugin/editor/rotate.ts

### Create mode

:::code-group
<<< @/code/plugin/editor/create-mode.ts
<<< @/code/plugin/editor/create-mode.js
:::

### Transparent grid canvas

<<< @/code/plugin/editor/frame/transparent.ts

### Mobile gesture interactions

<<< @/code/plugin/editor/config/gesture.ts
