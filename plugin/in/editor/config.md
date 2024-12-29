<script setup>
import Case from '/component/Case.vue'
</script>

# 编辑器配置

编辑器的全局配置，另元素有 [单独的编辑配置](/reference/property/editable.md#editconfig-ieditorconfig) 属性。

## 关键属性

### editSize: `'size'` | `'scale'` | `'font-size'`

全局调整尺寸大小的方式，默认为 size。

size： 修改元素的 **宽高、路径** 达到调整大小的目的。

font-size： 修改文本的 **fontSize** 达到调整大小的目的。

scale： 修改元素的 **缩放属性** 达到调整大小的目的。

不同元素可 [单独设置 editSize ](/reference/property/editable.md#editconfig-ieditorconfig) 。

### 事件

### keyEvent: `boolean`

是否接收键盘事件（如方向键移动），默认为 true。

<!-- ### dualEvent: `boolean`

是否派发双重事件， 默认为 false。

开启后，首次点击元素时，元素可以接收 tap 等鼠标事件。 -->

### 快速修改样式

### stroke: `string`

设置控制点和编辑框的描边颜色，默认为 `#836DFF`。

### strokeWidth: `number`

设置控制点和编辑框的描边大小。

### pointSize: `number`

设置控制点的大小。

### pointRadius: `number`

设置控制点的圆角半径

### 精确控制样式

### point: [`IBoxInputData`](/reference/display/Box.md) ｜ [`IBoxInputData`](/reference/display/Box.md)[]

设置控制点样式，可单独设置 4 个点。

并支持通过设置 pointType = `'button'` ｜`'rotate'` 来自定义功能。

```ts
point: [
  {},
  {
    // 支持 Box 元素的所有属性
    pointType: 'button',
    event: {
      tap: function () {
        alert('button')
      },
    },
    fill: {
      // 使用图片
      type: 'image',
      url: '/image/leafer.jpg',
    },
  }, // 变为自定义按钮
  { pointType: 'rotate' }, // 变为旋转按钮
  {},
]
```

### middlePoint: [`IBoxInputData`](/reference/display/Box.md)｜ [`IBoxInputData`](/reference/display/Box.md)[]

设置中间控制点样式（会继承基础样式），可单独设置 4 个点，为空时不显示， 默认为空。

### rect: [`IBoxInputData`](/reference/display/Box.md)

设置编辑框的样式（会继承基础样式）。

### area: [`IRectInputData`](/reference/display/Rect.md)

框选区域的样式（会继承基础样式）。

### 按钮组

### buttonsDirection: `'top'` | `'right'` | `'bottom'` | `'left'`

按钮组的方位， 默认为 bottom。

### buttonsFixed: `boolean`

按钮组是否仍保持固定方向（不受元素旋转影响）。

### buttonsMargin: `number`,

按钮组到编辑框的外边距， 默认为 12。

### 旋转按钮

### circle: [`IBoxInputData`](/reference/display/Box.md)

设置独立旋转控制点样式（会继承基础样式）， 为空时不显示， 默认为空。

并支持通过设置 pointType = `'button'` 来自定义功能。

```ts
circle: {
  pointType: 'button',
  cursor: 'pointer',
  event: {
    tap: function () {
      alert('button')
    },
  },
}, // 变为自定义按钮
```

### circleDirection: `'top'` | `'right'` | `'bottom'` | `'left'`

独立旋转控制点的方位， 默认为 bottom（如果 buttonsDirection 为 bottom ，则为 top）。

### circleMargin: `number`,

独立旋转控制点到编辑框的外边距， 默认采用 buttonsMargin。

### 遮罩

### mask: `string` | `boolean`

设置遮罩的颜色值（适用于裁剪图片场景），`true` 表示颜色值 `rgba(0,0,0,0.8)`，默认为无。

### 隐藏

### hideOnMove: `boolean`

是否在移动元素时隐藏编辑框， 默认为否。

### hideOnSmall: `boolean` | `number`

是否在元素很小的时候隐藏编辑器控制点，默认为 true。

可以设置一个最小的 size, 默认最小的 size 为 10 (表示 10 x 10 的大小)。

### 光标

### moveCursor： [`ICursorType`](/reference/property/cursor.md)

设置移动光标。

### resizeCursor: [`IImageCursor`](/api/interfaces/IImageCursor.md)

设置 resize 光标，支持传入变量旋转角度。

![resize](/svg/resize.svg)

```ts
{
  url: `
<svg width="24" height="24" xmlns="http://www.w3.org/2000/svg">
  <g transform="rotate({{rotation}},12,12)">
    <path
      fill-rule="evenodd"
      d="M3 11.4L7.5 8.0V10.4H16.5V8.0L21 11.4L16.5 14.9V12.4H7.5V14.9L3 11.4Z"
      fill="black"
    />
  </g>
</svg>` // svg字符串, {{rotation}}为旋转变量
  x: 12 // x轴旋转中心点
  y: 12 // y轴旋转中心点
}
```

### rotateCursor: [`IImageCursor`](/api/interfaces/IImageCursor.md)

设置 rotate 光标，支持传入变量旋转角度。

![rotate](/svg/rotate.svg)

```ts
{
  url: `
<svg width="24" height="24" xmlns="http://www.w3.org/2000/svg">
  <g transform="rotate(135,12,12),rotate({{rotation}},12,12)">
    <path
      fill-rule="evenodd"
      d="M17 3L20.4 7.5H17.9C17.7 13.1 13.1 17.7 7.5 17.9V20.4L3 17L7.5 13.5V15.9C12.0 15.7 15.7 12.0 15.9 7.5H13.5L17 3Z"
      fill="black"
    />
  </g>
</svg>` // svg字符串， {{rotation}}为旋转变量
  x: 12 // x轴旋转中心点
  y: 12 // y轴旋转中心点
}
```

### skewCursor: [`IImageCursor`](/api/interfaces/IImageCursor.md)

设置 skew 光标，支持传入变量旋转角度。

![skew](/svg/skew.svg)

```ts
{
  url: `
<svg width="24" height="24" xmlns="http://www.w3.org/2000/svg">
  <g transform="rotate(90,12,12),rotate({{rotation}},12,12)">
    <path
      fill-rule="evenodd"
      d="M17 10.4L21 10.4L15.5 6V8.4H6V10.4H15.5H17ZM8.5 14.4H7L3 14.4L8.5 18.9V16.4H19V14.4H8.5Z"
      fill="black"
    />
  </g>
</svg>` // svg字符串，{{rotation}}为旋转变量
  x: 12 // x轴旋转中心点
  y: 12 // y轴旋转中心点
}
```

### 限制

### around: [`Around`](/reference/property/around.md)

指定中心点旋转、缩放大小， 默认为无。

设置 'center' 表示正中心点 {x:0.5, y: 0.5}, 设置 {x:1, y:1} 表示右下角，相对编辑框宽高比例。

### lockRatio: `boolean` | `'corner'`

锁定宽高比例, 默认为 false。

设置 'corner' 表示只固定 4 个角的缩放比例，中间点可自由调整。

### rotateGap: `number`

旋转吸附间隔，当靠近间隔点时，慢慢旋转会被吸附到间隔点上，默认为每 45 度。

### 选择器

### selector: `boolean`

是否启用编辑选择器， 默认启用。

可以通过交互来选取 [editable](/reference/property/editable.md) 元素， 并支持显示 hover 状态。

### hover: `boolean`

是否显示 hover 状态，默认显示。

### hoverStyle: [`IPathInputData`](/reference/display/Path.md)

hover 样式，目前只能定义笔触和填充样式（会继承基础样式）。

### select: `'press'` | `'tap'`

点选的触发方式，默认为 press。

press 为鼠标按下触发， tap 为单击触发。

### boxSelect: `boolean`

是否启用框选功能， 默认启用。

### continuousSelect: `boolean`

单击是否可以连续多选元素，一般用于手机端多选元素，默认关闭。

### 启用

### moveable: `boolean` | `'move'`

是否启用移动， 默认启用。

设为 `move` 可支持手机端双指移动手势。

### resizeable: `boolean` | `'zoom'`

是否启用编辑大小， 默认启用。

设为 `zoom` 可支持手机端缩放手势。

### flipable: `boolean`

是否启用镜像/翻转元素功能， 默认启用

### rotateable: `boolean` | `'rotate'`

是否启用旋转， 默认启用。

设为 `rotate` 可支持手机端旋转手势。

### skewable: `boolean`

是否启用倾斜， 默认启用。

## 内部编辑器属性

### textEditor： `object`

文本编辑器的自定义配置。

```ts
// 内部通过此方式访问
app.editor.mergeConfig.textEditor
```

### pathEditor： `object`

路径编辑器的自定义配置。

```ts
// 内部通过此方式访问
app.editor.mergeConfig.pathEditor
```

### ...Editor

可依次扩展自定义配置对象。

```ts
// 内部通过此方式访问
app.editor.mergeConfig.anyEditor
```

## 示例

<case name="EditorConfig" index=4 x=20></case>

### 显示所有控制点

<<< @/code/plugin/editor/config/mobile.ts

<case name="EditorConfig" index=2 x=20></case>

### 快速修改样式

<<< @/code/plugin/editor/config/rect.ts

<case name="EditorConfig" index=9 x=20 height=170></case>

### 自定义样式

默认会继承基础样式， 只需覆盖新的样式。

<<< @/code/plugin/editor/config/points.ts

<case name="EditorConfig" index=7 x=20></case>

### 按中心点缩放

<<< @/code/plugin/editor/config/around.ts

<case name="EditorConfig" index=8 x=20></case>

### 固定比例缩放

<<< @/code/plugin/editor/config/lockRatio.ts

<case name="EditorConfig" index=12 x=20></case>

### 禁用旋转

<<< @/code/plugin/editor/config/rotateable.ts

<case name="EditorConfig" index=13 x=20></case>

### 禁用缩放

<<< @/code/plugin/editor/config/resizeable.ts
