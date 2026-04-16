<script setup>
import Case from '/component/Case.vue'
</script>

# SolidPaint Object

Solid color fill object, can be assigned to the [fill](../fill.md) or [stroke](../stroke.md) property.

<case name="SolidFill"  editor=false></case>

## Key Properties

### type: `string`

The fill type is `solid`.

### color: [`Color`](../../interface/ui/Color.md)

Color.

## Basic Properties

### blendMode?: [`BlendMode`](../blendMode.md)

Blend mode, default is normal.

### visible?: `boolean`

Whether it is visible, default is true.

### opacity?: `number`

Opacity, default is 1. If color is not a [color object](../../interface/ui/Color.md#rgb), the [color plugin](/plugin/in/color/) must be installed to take effect.

## Sub-stroke Properties

### style?: [`IStrokeStyle`](../../../api/interfaces/IStrokeStyle.md)

When multiple strokes are set for an element, you can configure the sub-stroke style `style` to override the [main stroke style](../stroke.md#描边样式属性).

This can create effects such as dashed lines, or simulate inner, middle, and outer triple strokes. [Learn more](../stroke.md#子描边属性).

## 归属

### [UI Element](../../display/UI.md)

## Examples

<case name="SolidFill" index=0 editor=false></case>

:::code-group
<<< @/code/property/fill/solid/a.ts [Leafer]
<<< @/code/property/fill/solid/app/a.ts [App]
:::
