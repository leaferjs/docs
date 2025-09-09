<script setup>
import Case from '/component/Case.vue'
</script>

# Frame 元素

创建画板。继承自 [Box](/reference/display/Box.md)，默认白色背景、会裁剪掉超出宽高的内容，类似于 HTML5 中的页面，一般用于设计软件中创建画板。

<case name="Frame" editor=false></case>

<br/>

::: tip 继承
Frame &nbsp;>&nbsp; [Box](./Box.md) &nbsp;>&nbsp; [Group](./Group.md) 、[Rect](./Rect.md) &nbsp;>&nbsp; [UI](./UI.md)
:::

## 关键属性

### width: `number`

宽度。

### height: `number`

高度。

### fill: `string` | [`Paint`](../interface/ui/Paint) ｜ [`Paint`](../interface/ui/Paint.md)[]

默认白色背景。

### overflow: `IOverflow`

如何显示超出宽高的内容，默认为 hide。

设置 'scroll' 类型时， 需安装 [Box 滚动条高级插件](https://www.pxgrow.com/plugin/view/?id=10003)。

```ts
type IOverflow =
  | 'show' // 显示
  | 'hide' // 隐藏
  | 'scroll' // 显示滚动条
  | 'x-scroll' // 仅显示x轴滚动条
  | 'y-scroll' // 仅显示y轴滚动条
```

## 编辑属性

### resizeChildren: `boolean`

子元素是否跟随 resize， 默认为 false。

## 计算属性（只读）

### isOverflow: `boolean`

子元素是否溢出了 [boxBounds](/reference/UI/bounds.md#boxbounds-iboundsdata)，Box 布局完成后此属性才有值。

### scrollWorldTransform: [`IMatrixWithScaleData`](/api/interfaces/IMatrixWithScaleData.md)

滚动区域相对于世界坐标的变换矩阵, 包含 scaleX、scaleY 属性。

不存在滚动时，会返回元素的 [worldTransform](/reference/UI/transform.md#worldtransform-imatrixwithscaledata) 变换矩阵。

<!-- ## 继承元素

### [Box](./Box.md) -->

<!-- ## API

### [Frame](/api/classes/Frame.md) -->

## 示例

<case name="Frame" index=0 editor=false></case>

### 创建画板

::: code-group
<<< @/code/display/Frame/create.ts [Leafer]
<<< @/code/display/Frame/app/create.ts [App]
:::
