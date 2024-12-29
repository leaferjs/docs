# editable

元素编辑属性。

::: tip 注意事项
需安装 [图形编辑器插件](/plugin/in/editor/) 才能使用， 或直接安装 [leafer-editor](/guide/install/editor/start.md)（已集成了图形编辑器相关插件）。
:::

## 关键属性

### editable: `boolean`

是否允许编辑，默认为 false。

包含了 draggable 功能，不用重复设置。

### locked: `boolean`

是否锁定元素，默认为 false。

锁定后不能移动、编辑，框选不了。

### widthRange: `IRangeSize`

限制元素的宽度范围（目前只有编辑器单选元素时可以控制）。

```ts
interface IRangeSize {
  min?: number
  max?: number
}
```

### heightRange: `IRangeSize`

限制元素的高度范围（目前只有编辑器单选元素时可以控制）。

```ts
interface IRangeSize {
  min?: number
  max?: number
}
```

### lockRatio: `boolean`

是否锁定元素的宽高比例，默认为 false。

另可以通过编辑器进行 [全局设置](/plugin/in/editor/config.md#lockratio-boolean-corner)。

## resize

### [resize 元素 / 组元素](/reference/property/resize.md)

## 只读属性

### editConfig： [`IEditorConfig`](/plugin/in/editor/config.md)

元素的独立编辑配置，可通过以下方式设置：

<<< @/code/plugin/editor/editable/editConfig.ts

### editOuter: `string`

元素的外形编辑工具，一般用于调整尺寸、形状， 默认为 [`'EditTool'`](/plugin/in/editor/EditTool.md)。

Line 默认为 [`'LineEditTool'`](/api/classes/LineEditTool.md)，可自定义 [编辑工具](/plugin/in/editor/editOuter/register.md)，通过以下方式设置：

<<< @/code/plugin/editor/editable/editOuter.ts

### editInner: `string`

元素的内部细节编辑器，一般用于编辑路径、文本， 默认为 `'PathEditor'`。

Text 默认为: `'TextEditor'`，可自定义 [内部编辑器](/plugin/in/editor/editInner/register.md)，通过以下方式设置：

<<< @/code/plugin/editor/editable/editInner.ts

## 归属

### [UI](/reference/display/UI.md)

## 示例

### editable 元素才能被选中

<<< @/code/plugin/editor/editable.ts
