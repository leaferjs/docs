# getPathString

获取字符串路径（SVG 路径）。

## 关键属性

### getPathString ( curve?: `boolean`, pathForRender?: `boolean`, toFixed?: `number`): [`IPathString`](../interface/ui/PathData.md#ipathstring)

获取元素的字符串路径（Canvas [绘图命令](../interface/ui/PathData.md#canvas-命令)，包含非 SVG 绘图命令）。

`curve` 表示是否转换为 SVG 曲线路径（ M、L、C、Z），`pathForRender` 表示是否获取最终的渲染路径（含圆角属性）。

`toFixed` 用于设置保留的小数位长度。

## 归属

### [UI 元素](/reference/display/UI.md)

## 示例

### 获取元素的字符串路径

<<< @/code/property/getPathString/get.ts
