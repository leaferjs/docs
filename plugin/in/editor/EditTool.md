# EditTool

默认编辑工具。

一般用来编辑元素的尺寸、外形，选中元素时会自动载入，了解 [自定义编辑工具](/plugin/in/editor/editOuter/register.md)。

## 关键属性

### view: [`IGroup`](/reference/display/Group.md)

编辑工具的视图容器。

### eventIds?: `IEventListenerId`[]

监听事件的 id 列表（可选），支持自动销毁，通过 [on\_()](/reference/property/on.md#on-1) 监听可返回 事件 id， 并可绑定 this。

## 只读属性

### tag： `string`

编辑工具的唯一标签名。

### editor: [`Editor`](/plugin/in/editor/Editor.md)

编辑器，载入后才有值。

### editBox: [`EditBox`](/plugin/in/editor/EditBox.md)

编辑框，载入后才有值。

## 关键方法

### 操作元素

### onMove ( event: [`EditorMoveEvent`](./event/EditorMoveEvent.md) )

执行移动元素。

### onScale ( event: [`EditorScaleEvent`](./event/EditorScaleEvent.md) )

执行缩放（resize）元素。

### onRotate ( event: [`EditorRotateEvent`](./event/EditorRotateEvent.md) )

执行旋转元素。

### onSkew ( event: [`EditorSkewEvent`](./event/EditorSkewEvent.md) )

执行斜切元素

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

### [自定义编辑工具](/plugin/in/editor/editOuter/register.md)

## 继承

### [InnerEditor](./InnerEditor.md)

<!-- ## API

### [EditTool](/api/classes/EditTool.md) -->
