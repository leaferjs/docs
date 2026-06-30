# EditTool

默认编辑工具。

一般用来编辑元素的尺寸、外形，选中元素时会自动载入，了解 [自定义编辑工具](./editOuter/register.md)。

## 关键属性

### view: [`IGroup`](../../../reference/display/Group.md)

编辑工具的视图容器。

### editConfig: [`IEditorConfig`](./config/base.md)

编辑工具的临时独立编辑配置（会覆盖主编辑配置），只在打开编辑工具期间有效，关闭后还原。

### eventIds?: `IEventListenerId`[]

监听事件的 id 列表（可选），支持自动销毁，通过 [on\_()](../../../reference/UI/on.md#on-1) 监听可返回 事件 id， 并可绑定 this。

## 只读属性

### tag： `string`

编辑工具的唯一标签名。

### editor: [`Editor`](./index.md)

编辑器，载入后才有值。

### editBox: [`EditBox`](./EditBox.md)

编辑框，载入后才有值。

### editTarget: [`UI`](../../../reference/display/UI.md)

当前正在编辑的元素，onLoad() 载入前自动设置，onUnload() 卸载后自动设为 `null`。

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

## 静态方法

### registerEditTool ( aliasName?: `string`, changeTag?: `boolean` )

为编辑工具重新注册一个别名。

`changeTag` 参数表示是否同时修改编辑工具的 tag 名称， 默认为 false。

## 自定义

### [自定义编辑工具](./editOuter/register.md)

## 继承

### [InnerEditor](./InnerEditor.md)

<!-- ## API

### [EditTool](../../../api/classes/EditTool.md) -->
