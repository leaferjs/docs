<script setup>
import Case from '/component/Case.vue'
</script>

# 创建元素

<case name="Rect" index=7 editor=false></case>

## 标准创建

创建一个有背景色的矩形。

<<< @/code/basic/display/create.ts

## 简洁创建

<<< @/code/basic/display/simple.ts

## 使用 tag

<<< @/code/basic/display/tag.ts

## 使用 JSON

了解 JSON 数据 [导入导出](/reference/property/json.md)。

<<< @/code/property/json/create.ts

## 了解图形元素

### [Rect 元素](/reference/display/Rect)

绘制矩形、圆角矩形。

<case name="Rect" editor=false></case>

<<< @/code/display/Rect/corners.ts

### [Ellipse 元素](/reference/display/Ellipse)

绘制圆、圆环、扇形圆环、扇形、弧线、椭圆，想从中心点绘制，可以了解 [around](/reference/property/around.md)。

<case name="Ellipse" editor=false></case>

<<< @/code/display/Ellipse/sectorRing.ts

### [Line 元素](/reference/display/Line)

绘制横线、斜线、竖线、折线、平滑曲线、趋势图。

<case name="Line" editor=false></case>

<<< @/code/display/Line/horizontal.ts

### [Polygon 元素](/reference/display/Polygon)

绘制三角形、菱形、五边形、正多边形、自由多边形、平滑多变形、趋势图。

<case name="Polygon" editor=false></case>

<<< @/code/display/Polygon/corner.ts

### [Star 元素](/reference/display/Star)

绘制车标、星光、五角星、多角星形。

<case name="Star" editor=false></case>

<<< @/code/display/Star/corner.ts

### [Path 元素](/reference/display/Path)

绘制路径，可以画出任意形状的图形，支持 [SVG 绘图字符串](/reference/interface/ui/PathData#ipathstring) 、 [绘图数字数组](/reference/interface/ui/PathData.md#ipathcommanddata)、[绘图对象数组](/reference/interface/ui/PathData.md#ipathcommandobject)。

可通过 [pen 画笔](/reference/display/Path#pen-pathcreator) 快速绘制路径。

<case name="Path" editor=false></case>

<<< @/code/display/Path/cafe.ts

### [Pen 元素](/reference/display/Pen)

像绘画一样，快速画出不同样式的路径组合，支持 Canvas 2D 绘制路径的 [API 方法](/reference/display/Pen.md#绘制路径)。

<case name="Pen" editor=false></case>

<<< @/code/display/Pen/color.ts

### [Image 元素](/reference/display/Image)

图片对象，支持使用 svg 格式的图片，另外所有图形都支持通过 [图案填充](/reference/property/paint/image.md) 来显示图片。

<case name="ImageFill" editor=false></case>

<<< @/code/display/Image/stretch.ts

### [SVG 元素](/reference/display/SVG)

[Image 元素](/reference/display/Image.md) 和 [图案填充](/reference/property/paint/image.md) 都支持直接加载 svg 格式的图片。

svg 图片采用了特殊的渲染逻辑，可以实现高清晰缩放.

<<< @/code/display/SVG/svg.ts

### [Canvas 元素](/reference/display/Canvas)

画布对象，可以自由绘制、操作像素，或将其他图形直接绘制到 Canvas 上。

<case name="Pen" editor=false></case>

<<< @/code/display/Canvas/context.ts

### [Text 元素](/reference/display/Text)

绘制文本。与 HTML5 文本显示效果基本一致。

<case name="Text" editor=false></case>

<<< @/code/display/Text/text.ts

### [UI 元素](/reference/display/UI)

基础元素（所有元素的基类）。

### [Custom 元素](/reference/display/custom/base/register.md)

根据需要自定义元素。

## 了解组元素

### [Group 元素](/reference/display/Group)

类似于 HTML5 中的 DIV，但自身没有填充/描边等外观样式，用于组合多个子元素，可设置 x、y、scale、rotation 等属性，子元素相对其进行定位，支持不断嵌套。

<<< @/code/display/Group/create.ts

### [Box 元素](/reference/display/Box)

支持 [Group](/reference/display/Group.md) 的功能和 [Rect](/reference/display/Rect.md) 的外观样式， 类似于 HTML5 中的 DIV，可以不断嵌套 。

<case name="Box" editor=false></case>

<<< @/code/display/Box/create.ts

### [Frame 元素](/reference/display/Frame)

继承自 [Box](/reference/display/Box.md)，默认白色背景、会裁剪掉超出宽高的内容，类似于 HTML5 中的页面，一般用于设计软件中创建画板。

<case name="Frame" editor=false></case>

<<< @/code/display/Frame/create.ts

## 下一步

### [设置样式](/guide/basic/style)
