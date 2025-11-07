# 更新

## 关键方法

### update ( )

手动更新编辑器的布局、样式等。

### updateEditBox ( )

手动更新编辑框，使其贴合元素，一般用于多选元素对齐后操作。

## 编辑工具

### getEditTool ( name: `string` ): [`EditTool`](/plugin/in/editor/Editor/display.md)

获取编辑工具实例（单例），name 为内部编辑器的名称。

```ts
// 获取直线编辑工具的配置
const config = app.editor.getEditTool('LineEditTool').config
```

### updateEditTool ( )

更新编辑工具，选择元素后自动调用此方法。

## 归属

### [Editor 元素](/plugin/in/editor/index.md#editor-元素)

## 示例

### 更新编辑器

使配置的中间控制点可以立即显示。

<<< @/code/plugin/editor/editor/update.ts
