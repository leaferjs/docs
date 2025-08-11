<script setup>
import Case from '/component/Case.vue'
</script>

# Box 元素

创建 Box。支持 [Group](/reference/display/Group.md) 的功能和 [Rect](/reference/display/Rect.md) 的外观样式， 类似于 HTML5 中的 DIV，可以不断嵌套 。

<case name="Box" editor=false></case>

<br/>

::: tip 继承
Box &nbsp;>&nbsp; [Group](./Group.md) 、[Rect](./Rect.md) &nbsp;>&nbsp; [UI](./UI.md)
:::

## 关键属性

### width: `number`

宽度，不设置或设为`undefined`时会自适应内容。

可通过 [isAutoWidth](/reference/UI/size.md#isautowidth-boolean) 属性判断是否为自动宽度。

### height: `number`

高度，不设置或设为`undefined`时会自适应内容。

可通过 [isAutoHeight](/reference/UI/size.md#isautowidth-boolean) 属性判断是否为自动宽度。

### overflow: `IOverflow`

如何显示超出宽高的内容，默认为 'show' 。

设置 'scroll' 类型时， 需安装 scroller 滚动条插件才能生效（即将上线）。

```ts
type IOverflow =
  | 'show' // 显示
  | 'hide' // 隐藏
  | 'scroll' // 显示滚动条
  | 'x-scroll' // 仅显示x轴滚动条
  | 'y-scroll' // 仅显示y轴滚动条
```

## 滚动属性

用于 Box / Frame 滚动内部元素，可实现滚动条效果。

### scrollX: `number`

内部元素在 x 轴上的滚动量。

### scrollY: `number`

内部元素在 y 轴上的滚动量。

## 编辑属性

### textBox: `boolean`

是否为文本框，默认为 false。

为文本框时，可在编辑器中双击 Box 元素直接编辑内部的 [editable](/reference/UI/editable.md) 子文本，适用于输入框、便利贴、脑图、流程图等编辑文本的场景。

### resizeChildren: `boolean`

子元素是否跟随 resize， 默认为 false。

## 计算属性（只读）

### isOverflow: `boolean`

子元素是否溢出了 [boxBounds](/reference/UI/bounds.md#boxbounds-iboundsdata)，Box 布局完成后此属性才有值。

### scrollWorldTransform: [`IMatrixWithScaleData`](/api/interfaces/IMatrixWithScaleData.md)

滚动区域相对于世界坐标的变换矩阵, 包含 scaleX、scaleY 属性。

不存在滚动时，会返回元素的 [worldTransform](/reference/UI/transform.md#worldtransform-imatrixwithscaledata) 变换矩阵。

## 路径模式

### [path 优先模式](/reference/UI/path.md)

<!--
## 继承元素

### [Group](./Group.md) + [Rect](./Rect.md) -->

<!-- ## API

### [Box](/api/classes/Box.md) -->

## 示例

<case name="Box" index=0 editor=false></case>

### 创建 Box

::: code-group
<<< @/code/display/Box/create.ts [Leafer]
<<< @/code/display/Box/app/create.ts [App]
:::

<case name="Box" index=1 editor=false></case>

### 隐藏超出宽高的内容

::: code-group
<<< @/code/display/Box/overflow.ts [Leafer]
<<< @/code/display/Box/app/overflow.ts [App]
:::

<case name="Box" index=6 editor=false></case>

### 创建自适应背景的文本

::: code-group
<<< @/code/display/Box/text.ts [Leafer]
<<< @/code/display/Box/app/text.ts [App]
:::
