# editable

Element editing properties.

:::tip Note
You need to install the [editor plugin](../../plugin/in/editor/index.md) to use this feature, or directly install [leafer-editor](../../guide/install/editor/start.md) (which already includes editor-related plugins).
:::

## Key Properties

### editable: `boolean`

Whether the element is editable. Default is `false`.

This includes draggable behavior, so you do not need to set `draggable` again.

### locked: `boolean`

Whether the element is locked. Default is `false`.

Locked elements cannot be moved, edited, or selected.

### widthRange: `IRangeSize`

Limits the width range of the element (currently only effective when selecting a single element in the editor).

The editor also supports the [beforeScale](../../plugin/in/editor/config/event.md#beforescale-ieditorbeforescale) event hook to constrain width.

```ts
interface IRangeSize {
  min?: number
  max?: number
}

rect.widthRange = { min: 10, max: 200 }
```

### heightRange: `IRangeSize`

Limits the height range of the element (currently only effective when selecting a single element in the editor).

The editor also supports the [beforeScale](../../plugin/in/editor/config/event.md#beforescale-ieditorbeforescale) event hook to constrain height.

```ts
interface IRangeSize {
  min?: number
  max?: number
}

rect.heightRange = { min: 10, max: 200 }
```

### lockRatio: `boolean`

Whether to lock the aspect ratio of the element. Default is `false`.

You can also configure this globally in the editor via [global settings](../../plugin/in/editor/config/control.md).

## Resize

### [resize element / group](./resize.md)

## Editor Configuration Properties

### editConfig: [`IEditorConfig`](../../plugin/in/editor/config/base.md)

元素的独立编辑配置，可通过以下方式设置：

<<< @/code/plugin/editor/editable/editConfig.ts

### editOuter: `string`

The outer shape editing tool, typically used for resizing and shape adjustment. Default is [`'EditTool'`](../../plugin/in/editor/EditTool.md).

For Line, the default is [`'LineEditTool'`](../../api/classes/LineEditTool.md). You can also customize [edit tools](../../plugin/in/editor/editOuter/register.md).

<<< @/code/plugin/editor/editable/editOuter.ts

### editInner: `string`

The inner detail editor, typically used for editing paths and text. Default is `'PathEditor'`.

For Text, the default is `'TextEditor'`. You can customize [inner editors](../../plugin/in/editor/editInner/register.md).

<<< @/code/plugin/editor/editable/editInner.ts

## 归属

### [UI Elements](../display/UI.md)

## Examples

### Only editable elements can be selected

<<< @/code/plugin/editor/editable.ts

### Editable elements with custom hover styles

<<< @/code/plugin/editor/editable/hover.ts
