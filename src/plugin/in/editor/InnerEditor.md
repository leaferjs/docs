# InnerEditor

内部编辑器。

一般用来编辑文本、路径等内部细节，通过双击元素打开，了解 [自定义内部编辑器](/plugin/in/editor/editInner/register.md)。

## 关键属性

### editTarget: [`UI`](/reference/display/UI.md)

当前编辑的目标元素。

### view: [`IGroup`](/reference/display/Group.md)

内部编辑器的视图容器。

### eventIds?: `IEventListenerId`[]

监听事件的 id 列表（可选），支持自动销毁，通过 [on\_()](/reference/property/on.md#on-1) 监听可返回 事件 id， 并可绑定 this。

## 只读属性

### tag： `string`

内部编辑器的唯一标签名。

### editor: [`Editor`](/plugin/in/editor/Editor.md)

编辑器。

### editBox: [`EditBox`](/plugin/in/editor/EditBox.md)

编辑框。

## 关键方法

### 生命周期

### onCreate()

执行创建。

实例化编辑工具时会自动调用此方法。

### onLoad()

执行载入。

当用户选择元素时，会切换编辑工具，自动调用此方法载入。

### onUpdate()

执行更新。

当用户操作视图、元素时，会自动调用此方法更新。

### onUnload()

执行卸载。

当用户切换到其他编辑工具时，会自动调用此方法卸载。

### onDestroy()

执行销毁。

## 自定义

### [自定义内部编辑器](/plugin/in/editor/editInner/register.md)

<!-- ## API

### [InnerEditor](/api/classes/InnerEditor.md) -->
