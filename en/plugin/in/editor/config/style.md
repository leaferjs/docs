<script setup>
import Case from '/component/Case.vue'
</script>

# Editor Configuration

### [Basic](./base.md)     [Events](./event.md)     Styles     [Button Groups](./buttons.md)     [Cursor](./cursor.md)     [Selection](./select.md)     [Control](./control.md)     [Enable](./enable.md)     [Internal Editor](./innerEditor.md)

##

Style configuration. It can be modified in real time during application runtime via [app.editor.config](../index.md#config-ieditorconfig).

At the same time, elements have an [independent editor configuration](../../../../reference/UI/editable.md#editconfig-ieditorconfig) property, which can override the main configuration in real time.

## Key Properties

### spread: `number`

The outward expansion value of the editor frame. It increases the spacing between the edit box and the actual element. Default is 0.

### stroke: `string`

Sets the stroke color of control points and the edit box. Default is `#836DFF`.

### strokeWidth: `number`

Sets the stroke width of control points and the edit box.

### pointSize: `number`

Sets the size of control points.

### pointRadius: `number`

Sets the corner radius of control points.

### Precise Control Style

### point: [`IBoxInputData`](../../../../reference/display/Box.md) ｜ [`IBoxInputData`](../../../../reference/display/Box.md)[]

Defines the style of control points. You can set all 4 points individually.

It also supports defining control point functionality types via [pointType](../EditPoint.md#pointtype-ieditpointtype).

```ts
point: { pointType: 'resize' }, // default resize button
```

```ts
point: [
  {
    // supports all Box element properties
    pointType: 'button', // becomes a custom button
    event: {
      tap: function () {
        alert('button')
      },
    },
    fill: {
      // use image
      type: 'image',
      url: '/image/leafer.jpg',
    },
  },
  { pointType: 'rotate' }, // becomes rotate button
  { pointType: 'resize-rotate' }, // resize + rotate button
  { pointType: 'skew' }, // skew button
]
```

### middlePoint: [`IBoxInputData`](../../../../reference/display/Box.md)｜ [`IBoxInputData`](../../../../reference/display/Box.md)[]

Defines the style of middle control points (inherits base styles). You can set all 4 points individually. Empty means not displayed. Default is empty.

It also supports defining control point functionality types via [pointType](../EditPoint.md#pointtype-ieditpointtype).

### resizeLine: [`IBoxInputData`](../../../../reference/display/Box.md) ｜ [`IBoxInputData`](../../../../reference/display/Box.md)[]

Defines the style of hidden resize lines around the edit box. You can control line thickness by setting `height`. Default is 10px.

It also supports defining control point functionality types via [pointType](../EditPoint.md#pointtype-ieditpointtype).

```ts
resizeLine: [{ pointType: 'move' }, {}], // only allow horizontal resizing
```

### rect: [`IBoxInputData`](../../../../reference/display/Box.md)

Defines the style of the edit box (inherits base styles).

### rectThrough: `boolean`

Whether pointer events can pass through the rect area. Default is true.

If you do not want elements underneath the edit box to be selectable, set this to false.

### area: [`IRectInputData`](../../../../reference/display/Rect.md)

Style of the selection area (inherits base styles).

### Rotation Button

### circle: [`IBoxInputData`](../../../../reference/display/Box.md)

Defines the style of the independent rotation control point (inherits base styles). Empty means not displayed. Default is empty.

It also supports defining control point functionality types via [pointType](../EditPoint.md#pointtype-ieditpointtype).

```ts
circle: {
  pointType: 'button',
  cursor: 'pointer',
  event: {
    tap: function () {
      alert('button')
    },
  },
}, // becomes a custom button
```

### circleDirection: `'top'` | `'right'` | `'bottom'` | `'left'`

Position of the independent rotation control point. Default is bottom (if buttonsDirection is bottom, then top).

### circleMargin: `number`

Margin between the independent rotation control point and the edit box. Defaults to buttonsMargin.

### 光标移入

### hover: `boolean`

Whether to show hover state. Enabled by default.

### hoverStyle: [`IPathInputData`](../../../../reference/display/Path.md)

hover 样式，目前只能定义笔触、填充、简单阴影样式（会继承基础样式）。

### selectedStyle: [`IPathInputData`](../../../../reference/display/Path.md)

Style of selected elements (different from hover style; useful for multi-selection visibility). Currently only stroke, fill, and simple shadow styles are supported (inherits base styles).

### selectedPathType: `'path'` | `'render-path'`

Path type used when rendering selected element outlines. Default is 'render-path'.

When elements use rounded corners or curves, 'path' is the original path, while 'render-path' is the final rendered path after applying rounded corners and curves.

### Mask Layer

### mask: `string` | `boolean`

Whether to add a global semi-transparent overlay mask. You can set a color value such as `rgba(0,0,0,0.8)`. Default is false.

When set to true or a color value, the selected element is highlighted while other areas are darkened. Suitable for cropping, screenshots, etc.

### 突出显示

### bright: `boolean`

Highlights and renders the selected element on top. Default is false. [View example](#突出显示-置顶渲染元素).

Derived from the element [bright](../../../../reference/UI/bright.md) property.

### dimOthers: `boolean` | `number`

Dims other elements to emphasize the selected element by reducing opacity. Default is false. [View example](#突出显示并置顶渲染-淡化其他元素).

When set to true, opacity is automatically set to 0.2. You can also specify a numeric opacity value.

Derived from element [dim](../../../../reference/UI/dim.md) / [dimskip](../../../../reference/UI/dim.md) properties.

You can also use the editor [dimTarget](../index.md#dimtarget-group-group) property to define the scope of dimming (supports arrays).

## Examples

<case name="EditorConfig" index=4 x=20></case>

### Show all control points

<<< @/code/plugin/editor/config/mobile.ts

<case name="EditorConfig" index=2 x=20></case>

### Quick style modification

<<< @/code/plugin/editor/config/rect.ts

<case name="EditorConfig" index=9 x=20 height=170></case>

### Custom styles

Base styles are inherited by default; only override the new styles.

<<< @/code/plugin/editor/config/points.ts

<case name="EditorConfig" index=11 x=20 height=160></case>

### Show bottom rotation control point

Base styles are inherited by default; only override the new styles.

<<< @/code/plugin/editor/config/rotate-point.ts

### Custom control point types

:::code-group
<<< @/code/plugin/editor/config/style/point/pointType.ts [point]
<<< @/code/plugin/editor/config/style/middlePoint/pointType.ts [middlePoint]
<<< @/code/plugin/editor/config/style/circle/pointType.ts [circle]
:::

### Drag control points to change font size, drag border to change text width/height

<<< @/code/plugin/editor/config/style/point/fontSize.ts

### 突出显示，置顶渲染元素

<<< @/code/property/bright/app/bright.ts

### Highlight and bring to front, dim other elements

<<< @/code/property/bright/app/dim.ts

### Highlight main element, dim others

<<< @/code/property/dim/app/dim.ts
