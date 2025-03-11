<script setup>
import Case from '/component/Case.vue'
</script>

# fill

填充，类似于 HTML5 中的 background-color，或文字的 color。

<case name="Fill"  editor=false></case>

## 关键属性

### fill: `string` | [`Paint`](../interface/ui/Paint) ｜ [`Paint`](../interface/ui/Paint.md)[]

填充背景或文字。

支持 [纯色](/reference/UI/paint/solid.md)、 [线性渐变](/reference/UI/paint/linear.md)、[径向渐变](/reference/UI/paint/radial.md)、[角度渐变](/reference/UI/paint/angular.md)、[图案填充](/reference/UI/paint/image.md) 等类型， 支持多个填充同时叠加。

## 归属

### [UI 元素](/reference/display/UI.md)

## 示例

<case name="Fill" index=0  editor=false></case>

### 纯色填充

<<< @/code/property/fill/solid/a.ts

<case name="Fill" index=1 editor=false></case>

### 渐变填充

支持 [线性渐变](./paint/linear.md)、[径向渐变](./paint/radial.md)、[角度渐变](./paint/angular.md) 等类型。

<<< @/code/property/fill/linear/a.ts

<case name="Fill" index=5 editor=false></case>

### 图案填充

[图案填充](./paint/image.md) 支持 覆盖、适应、裁剪、平铺等模式。

<<< @/code/property/fill/image/cover.ts

<case name="Fill" index=4  editor=false></case>

### 多个填充叠加

填充的 opacity 暂时仅针对 [颜色对象](/reference/interface/ui/Color.md#rgb) 和图片有效。

<<< @/code/property/fill/mutil/a.ts
