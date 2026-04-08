# 内部编辑

## 关键方法

### getInnerEditor ( name: `string` ): [`innerEditor`](/plugin/in/editor/Editor/display.md)

获取内部编辑器实例（单例），name 为内部编辑器的名称。

```ts
// 配置文本编辑器
app.editor.getInnerEditor('TextEditor').config.selectAll = false
```

### openInnerEditor( target?: [`UI`](/reference/display/UI.md), nameOrSelect?: `string`, select?: `boolean`)

打开元素的内部编辑器。

支持传入一个可选的 target 进行编辑。

nameOrSelect 参数可以指定内部编辑器的名称， select 表示是否同时选中 target。

```ts
app.editor.openInnerEditor(rect, true)
app.editor.openInnerEditor(rect, 'ClipEditor', true) // 指定内部编辑器名称
```

### closeInnerEditor()

关闭内部编辑器。

## 归属

### [Editor 元素](/plugin/in/editor/index.md#editor-元素)

## 示例

### 手动打开内部编辑器

进入文本编辑状态。

<<< @/code/plugin/editor/editor/innerEditor.ts
