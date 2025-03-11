# resize

调整元素/组元素的包围盒大小。

通过修改元素的宽高、路径、字体大小等实现 resize 包围盒宽高（不使用缩放值）。

需安装 [resize 插件](/plugin/in/resize/index.md)， [图形编辑器](/plugin/in/editor/index.md)、[自动布局](/plugin/in/flow/index.md) 会自动安装此插件。

## 关键方法

### resizeWidth ( width: `number`)

resize 元素/组元素的包围盒宽度。

若元素的 [lockRatio](/reference/UI/editable.md#lockratio-boolean) 为 true, 将同时等比例调整高度。

### resizeHeight ( height: `number`)

resize 元素/组元素的包围盒高度。

若元素的 [lockRatio](/reference/UI/editable.md#lockratio-boolean) 为 true, 将同时等比例调整宽度。

## 辅助方法

### scaleResize ( scaleX: `number`, scaleY = scaleX)

缩放操作转换为宽高值 <badge>增量操作</badge>。

[图形编辑器插件](/plugin/in/editor/index.md) 调整元素大小使用的是此方法。

## Box / Frame 元素

### resizeChildren: `boolean`

Box / Frame 的子元素是否跟随 resize， 默认为 false。

Group 会强制子元素跟随 resize，不用设置此参数。

## Text 元素

### resizeFontSize: `boolean`

自动宽高的文本是否通过修改字体大小进行 resize, 默认为 false。

## 辅助属性

### lockRatio: `boolean`

是否锁定元素的宽高比例，默认为 false。

## 其他 resize 方法

以下方法可以在最后传入一个参数 resize: `boolean` 实现缩放操作转宽高值。

### [setTransform ()](/reference/UI/transform.md#关键方法)

### [transform ()](/reference/UI/transform.md#关键方法)

### [scaleOf ()](/reference/UI/scale.md#关键方法)

### [skewOf ()](/reference/UI/skew.md#关键方法)

### [transformWorld ()](/reference/UI/transform.md#相对世界坐标系)

### [scaleOfWorld ()](/reference/UI/scale.md#关键方法)

### [skewOfWorld ()](/reference/UI/skew.md#关键方法)

### [dropTo ()](/reference/UI/dropTo.md)

将缩放转换为宽高操作。

## 归属

### [UI 元素](/reference/display/UI.md)

## 示例

### 调整 Group 大小，不使用 scale 属性

<<< @/code/property/resize/group.ts

### scaleOf 增加 resize 参数

<<< @/code/plugin/editor/resize/scale.ts
