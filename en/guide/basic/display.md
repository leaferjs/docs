<script setup>
import Case from '/component/Case.vue'
</script>

# Creating Elements

<case name="Rect" index=7 editor=false></case>

## Standard Creation

Create a rectangle with a background color.

<<< @/code/basic/display/create.ts

## Simple Creation

<<< @/code/basic/display/simple.ts

## Using Tag

<<< @/code/basic/display/tag.ts

## Using JSON

Learn about JSON data [import and export](../../reference/UI/json.md).

<<< @/code/property/json/create.ts

## Getting Started with Graphic Elements

### [Rect Element](../../reference/display/Rect.md)

Draw rectangles and rounded rectangles.

<case name="Rect" editor=false></case>

<<< @/code/display/Rect/corners.ts

### [Ellipse Element](../../reference/display/Ellipse.md)

Draw circles, ring shapes, sector rings, sectors, arcs, and ellipses. If you want to draw from the center point, refer to [around](../../reference/UI/around.md).

<case name="Ellipse" editor=false></case>

<<< @/code/display/Ellipse/sectorRing.ts

### [Line Element](../../reference/display/Line.md)

Draw horizontal lines, diagonal lines, vertical lines, polylines, smooth curves, and trend lines.

<case name="Line" editor=false></case>

<<< @/code/display/Line/horizontal.ts

### [Polygon Element](../../reference/display/Polygon.md)

Draw triangles, diamonds, pentagons, regular polygons, freeform polygons, smooth polygons, and trend charts.

<case name="Polygon" editor=false></case>

<<< @/code/display/Polygon/corner.ts

### [Star Element](../../reference/display/Star.md)

Draw badges, star lights, five-pointed stars, and multi-pointed stars.

<case name="Star" editor=false></case>

<<< @/code/display/Star/corner.ts

### [Path Element](../../reference/display/Path.md)

Draw paths, allowing arbitrary shapes. Supports [SVG path strings](../../reference/interface/ui/PathData.md#ipathstring), [path command arrays](../../reference/interface/ui/PathData.md#ipathcommanddata), and [path object arrays](../../reference/interface/ui/PathData.md#ipathcommandobject).

You can use the [pen tool](../../reference/display/Path.md#pen-pathcreator) to quickly draw paths.

<case name="Path" editor=false></case>

<<< @/code/display/Path/cafe.ts

### [Pen Element](../../reference/display/Pen.md)

Like drawing by hand, quickly create different styled path combinations. Supports Canvas 2D path-drawing [API methods](../../reference/display/Pen.md#drawing-paths).

<case name="Pen" editor=false></case>

<<< @/code/display/Pen/color.ts

### [Image Element](../../reference/display/Image.md)

Image object supporting SVG format images. In addition, all shapes support displaying images via [pattern fill](../../reference/UI/paint/image.md).

<case name="ImageFill" editor=false></case>

<<< @/code/display/Image/stretch.ts

### [SVG Element](../../reference/display/SVG.md)

Both the [Image Element](../../reference/display/Image.md) and [pattern fill](../../reference/UI/paint/image.md) support loading SVG images directly.

SVG images use a special rendering logic that enables high-quality scaling.

<<< @/code/display/SVG/svg.ts

### [Canvas Element](../../reference/display/Canvas.md)

Canvas object that allows free drawing, pixel manipulation, or rendering other graphics directly onto the canvas.

<case name="Pen" editor=false></case>

<<< @/code/display/Canvas/context.ts

### [Text Element](../../reference/display/Text.md)

绘制文本。Draw text. Rendering is similar to HTML5 text display and supports multi-line text.

<case name="Text" editor=false></case>

<<< @/code/display/Text/text.ts

### [UI Element](../../reference/display/UI.md)

Base element (the base class of all elements).

### [Custom Element](../../reference/display/custom/base/register.md)

Create custom elements as needed.

## Understanding Group Elements

### [Group Element](../../reference/display/Group.md)

Used to combine multiple child elements. It has no fill or stroke styles itself, but supports properties such as x, y, scale, and rotation. Child elements are positioned relative to it, and nesting is supported.

<<< @/code/display/Group/create.ts

### [Box Element](../../reference/display/Box.md)

Supports both [Group](../../reference/display/Group.md) functionality and [Rect](../../reference/display/Rect.md) appearance styles. Similar to a DIV in HTML5, and supports unlimited nesting.

<case name="Box" editor=false></case>

<<< @/code/display/Box/create.ts

### [Frame Element](../../reference/display/Frame.md)

Inherits from [Box](../../reference/display/Box.md). It has a default white background and clips content that exceeds its width and height. Similar to a page in HTML5, commonly used as an artboard in design software.

<case name="Frame" editor=false></case>

<<< @/code/display/Frame/create.ts

## Next Step

### [Set Styles](./style.md)
