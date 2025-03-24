# EditBox

图形编辑器的编辑框容器。

相对元素的 boxBounds 为起点定位，设置了相对 [世界坐标](/guide/advanced/coordinate.md#world-世界坐标系) 的位置、旋转、镜像属性。

内部添加的控制点，只需相对 [boxBounds](/reference/UI/bounds.md#boxbounds-iboundsdata) 乘以 [world 缩放值](/reference/UI/transform.md#worldtransform-imatrixwithscaledata) **（必须转为正数）** 进行定位即可。

::: tip 继承
EditBox &nbsp;>&nbsp; [Group](/reference/display/Group.md) &nbsp;>&nbsp; [UI](/reference/display/UI.md)
:::

## 关键属性

### view：[`Group`](/reference/display/Group.md)

编辑框的默认视图，用于放置默认编辑工具的控制点和操作元素。

### rect：[`Box`](/reference/display/Box.md)

编辑框移动区域元素。

### circle：[`Box`](/reference/display/Box.md)

编辑框的独立旋转点元素。

### resizePoints：[`EditPoint`](/plugin/in/editor/EditPoint.md)[]

编辑框的 8 个 resize 控制点。

顺序为： [topLeft, top, topRight, right, bottomRight, bottom, bottomLeft, left]。

### rotatePoints：[`EditPoint`](/plugin/in/editor/EditPoint.md)[]

编辑框底部透明的 8 个 rotate 控制点。

顺序为： [topLeft, top, topRight, right, bottomRight, bottom, bottomLeft, left]。

### resizeLines：[`EditPoint`](/plugin/in/editor/EditPoint.md)[]

编辑框的 4 条 resize 控制线。

顺序为： [top, right, bottom, left]。

### enterPoint：[`EditPoint`](/plugin/in/editor/EditPoint.md)

当前正在使用的控制点（触发了 pointer.enter 事件）。

## 只读属性

### flippedX: `boolean`

X 轴是否存在镜像翻转（scaleX 为负数）。

### flippedY: `boolean`

Y 轴是否存在镜像翻转（scaleY 为负数）。

### flipped: `boolean`

是否存在镜像翻转（scaleX 或 scaleY 为负数）。

### flippedOne: `boolean`

是否只存在一个轴镜像翻转（scaleX 与 scaleY 只有一个为负数）。

## 关键方法

一般用于设置自定义控制点的样式。

### getPointStyle ( userStyle?: [`IBoxInputData`](/reference/display/Box.md) ): [`IBoxInputData`](/reference/display/Box.md)

获取基础控制点的样式，可传入一个自定义样式混合。

### getPointsStyle ( ): [`IBoxInputData`](/reference/display/Box.md)[]

获取控制点的样式，返回一个数组。

### getMiddlePointsStyle ( ): [`IBoxInputData`](/reference/display/Box.md)[]

获取中间控制点的样式， 返回一个数组。

<!-- ## 继承元素

### [Group](/reference/display/Group.md) -->

<!-- ## API

### [EditBox](/api/classes/EditBox.md) -->
