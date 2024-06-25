# getPathString

获取字符串路径（SVG 路径）。

## 关键属性

### getPathString ( curve?: `boolean`, pathForRender?: `boolean`): [`IPathString`](../interface/ui/PathData.md#ipathstring)

获取元素的字符串路径（Canvas [绘图命令](../interface/ui/PathData.md#canvas-命令)，包含非 SVG 绘图命令）。

`curve` 表示是否转换为 SVG 曲线路径（ M、L、C、Z），`pathForRender` 表示是否获取最终的渲染路径（含圆角属性）。

## 归属

### [UI](/reference/display/UI.md#获取路径)
