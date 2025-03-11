<script setup>
import Case from '/component/Case.vue'
</script>

# SolidPaint 对象

纯色填充对象, 可设置给 [fill](/reference/UI/fill.md) 或 [stroke](/reference/UI/stroke.md) 属性。

<case name="SolidFill"  editor=false></case>

## 关键属性

### type: `string`

填充类型为 `solid`。

### color: [`Color`](/reference/interface/ui/Color.md)

颜色。

## 基础属性

### blendMode?: [`BlendMode`](/reference/UI/blendMode.md)

混合模式，默认为 normal。

### visible?: `boolean`

是否可见，默认为 true。

### opacity?: `number`

不透明度，默认为 1，暂时仅针对 color 为 [颜色对象](/reference/interface/ui/Color.md#rgb) 有效。

## 归属

### [UI 元素](/reference/display/UI.md)

## 示例

<case name="SolidFill" index=0 editor=false></case>

<<< @/code/property/fill/solid/a.ts
