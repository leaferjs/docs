<script setup>
import Case from '/component/Case.vue'
</script>

# 编辑器配置

### [基础](/plugin/in/editor/config/base.md) &nbsp; &nbsp; [事件](/plugin/in/editor/config/event.md) &nbsp; &nbsp; 样式 &nbsp; &nbsp; [按钮组](/plugin/in/editor/config/buttons.md) &nbsp; &nbsp; [光标](/plugin/in/editor/config/cursor.md) &nbsp; &nbsp; [选择](/plugin/in/editor/config/select.md) &nbsp; &nbsp; [控制](/plugin/in/editor/config/control.md) &nbsp; &nbsp; [启用](/plugin/in/editor/config/enable.md) &nbsp; &nbsp; [内部编辑器](/plugin/in/editor/config/innerEditor.md)

##

样式配置，应用运行中可实时修改 [app.editor.config](/plugin/in/editor/index.md#config-ieditorconfig) 生效。

同时元素拥有 [独立的编辑配置](/reference/UI/editable.md#editconfig-ieditorconfig) 属性，可实时覆盖主配置。

## 关键属性

### spread: `number`

编辑器框向外的扩展值，可扩大编辑框与实际元素之间的间隙，默认为 0。

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

并支持通过设置 [pointType](/plugin/in/editor/EditPoint.md#pointtype-ieditpointtype) 来自定义控制点功能类型。

```ts
point: { pointType: 'resize' }, // 默认 resize 按钮
```

```ts
point: [
  {
    // 支持 Box 元素的所有属性
    pointType: 'button', // 变为自定义按钮
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
  },
  { pointType: 'rotate' }, // 变为旋转按钮
  { pointType: 'resize-rotate' }, // 变为 resize + 旋转按钮
  { pointType: 'skew' }, // 变为倾斜按钮
]
```

### middlePoint: [`IBoxInputData`](/reference/display/Box.md)｜ [`IBoxInputData`](/reference/display/Box.md)[]

设置中间控制点样式（会继承基础样式），可单独设置 4 个点，为空时不显示， 默认为空。

并支持通过设置 [pointType](/plugin/in/editor/EditPoint.md#pointtype-ieditpointtype) 来自定义控制点功能类型。

### rect: [`IBoxInputData`](/reference/display/Box.md)

设置编辑框的样式（会继承基础样式）。

### area: [`IRectInputData`](/reference/display/Rect.md)

框选区域的样式（会继承基础样式）。

### 旋转按钮

### circle: [`IBoxInputData`](/reference/display/Box.md)

设置独立旋转控制点样式（会继承基础样式）， 为空时不显示， 默认为空。

并支持通过设置 [pointType](/plugin/in/editor/EditPoint.md#pointtype-ieditpointtype) 来自定义控制点功能类型。

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

### 光标移入

### hover: `boolean`

是否显示 hover 状态，默认显示。

### hoverStyle: [`IPathInputData`](/reference/display/Path.md)

hover 样式，目前只能定义笔触和填充样式（会继承基础样式）。

### selectedStyle: [`IPathInputData`](/reference/display/Path.md)

选中元素的样式（区分 hover 样式，多选元素时比较容易看出来），目前只能定义笔触和填充样式（会继承基础样式）。

### 遮罩层

### mask: `string` | `boolean`

是否添加全局半透明覆盖遮罩层，可设置颜色值，如 `rgba(0,0,0,0.8)`，默认为 false。

设为 true 或色彩值时，选中元素会突出显示，其他区域变暗，适用于裁剪、截图等场景。

另外元素设置 [dim](/reference/UI/dim.md) / [dimskip](/reference/UI/dim.md) 属性可实现类似的效果，效果更好，性能略差。

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

<case name="EditorConfig" index=11 x=20 height=160></case>

### 显示底部旋转控制点

默认会继承基础样式， 只需覆盖新的样式。

<<< @/code/plugin/editor/config/rotate-point.ts

### 自定义控制点功能类型

::: code-group
<<< @/code/plugin/editor/config/style/point/pointType.ts [point]
<<< @/code/plugin/editor/config/style/middlePoint/pointType.ts [middlePoint]
<<< @/code/plugin/editor/config/style/circle/pointType.ts [circle]
:::

### 拖拽控制点修改字体大小，拖拽边框控制文本宽高

<<< @/code/plugin/editor/config/style/point/fontSize.ts
