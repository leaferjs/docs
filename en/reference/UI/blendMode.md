<script setup>
import Case from '/component/Case.vue'
</script>

# blendMode

Blend modes. Learn more about the [blending principle](https://developer.mozilla.org/zh-CN/docs/Web/API/CanvasRenderingContext2D/globalCompositeOperation) and [blend effects](https://developer.mozilla.org/en-US/docs/Web/CSS/mix-blend-mode).

<case name="BlendMode" index=1 count=6 editor=false></case>

## Key Properties

### blendMode: `BlendMode`

The element’s blend mode. Default is `pass-through`, which is the default and most performant mode.

```ts
type BlendMode =
  | 'pass-through' // pass-through, default, best performance
  | 'normal' // normal: rendered on a separate layer; heavy usage may impact performance. Usually used to isolate blending inside a Group to prevent affecting external elements
  | 'multiply' // multiply
  | 'darken' // darken
  | 'color-burn' // color burn
  | 'lighten' // lighten
  | 'color-dodge' // color dodge
  | 'screen' // screen
  | 'overlay' // overlay
  | 'hard-light' // hard light
  | 'soft-light' // soft light
  | 'difference' // difference
  | 'exclusion' // exclusion
  | 'hue' // hue
  | 'saturation' // saturation
  | 'color' // color
  | 'luminosity' // luminosity
  // other
  | 'source-over' // draw new content over existing canvas
  | 'source-in' // draw only where new shape and destination overlap; otherwise transparent
  | 'source-out' // draw only where new shape does NOT overlap existing content
  | 'source-atop' // draw only where it overlaps existing content
  | 'destination-over' // draw behind existing content
  | 'destination-in' // keep only overlapping parts of existing content and new shape
  | 'destination-out' // keep only non-overlapping parts of existing content
  | 'destination-atop' // keep overlapping parts; new shape is drawn behind existing content
  | 'xor' // overlap becomes transparent, otherwise normal drawing
  | 'copy' // show only the new shape
```

## Pass-through Mode

In pass-through mode, child blend modes (such as fill, stroke, and effects) can blend directly with underlying content.

Otherwise, child blend modes only affect the current element layer, and the element is then composited as a whole with underlying content.

## Belongs to

### [UI Elements](../display/UI.md)

## Examples

<case name="BlendMode" index=2 editor=false></case>

### multiply

Multiply mode multiplies the top pixel with the corresponding bottom pixel, resulting in a darker image.

::: code-group
<<< @/code/property/blendMode/multiply.ts [Leafer]
<<< @/code/property/blendMode/app/multiply.ts [App]
:::

<case name="BlendMode" index=3 editor=false></case>

### darken

Darken mode keeps the darker pixel of the two overlapping layers.

::: code-group
<<< @/code/property/blendMode/darken.ts [Leafer]
<<< @/code/property/blendMode/app/darken.ts [App]
:::

<case name="BlendMode" index=4 editor=false></case>

### color-burn

Color burn inverts the bottom layer, divides it by the top layer, then inverts the result.

::: code-group
<<< @/code/property/blendMode/color-burn.ts [Leafer]
<<< @/code/property/blendMode/app/color-burn.ts [App]
:::

<case name="BlendMode" index=5 editor=false></case>

### lighten

Lighten mode keeps the lighter pixel between overlapping layers.

::: code-group
<<< @/code/property/blendMode/lighten.ts [Leafer]
<<< @/code/property/blendMode/app/lighten.ts [App]
:::

<case name="BlendMode" index=6 editor=false></case>

### color-dodge

Color dodge divides the bottom layer by the inverted top layer.

::: code-group
<<< @/code/property/blendMode/color-dodge.ts [Leafer]
<<< @/code/property/blendMode/app/color-dodge.ts [App]
:::

<case name="BlendMode" index=7 editor=false></case>

### screen

Screen inverts, multiplies, then inverts again, resulting in a lighter image (opposite of multiply).

::: code-group
<<< @/code/property/blendMode/screen.ts [Leafer]
<<< @/code/property/blendMode/app/screen.ts [App]
:::

<case name="BlendMode" index=8 editor=false></case>

### overlay

Overlay combines multiply and screen. Dark areas become darker, light areas become lighter.

::: code-group
<<< @/code/property/blendMode/overlay.ts [Leafer]
<<< @/code/property/blendMode/app/overlay.ts [App]
:::

<case name="BlendMode" index=9 editor=false></case>

### hard-light

Hard light is similar to overlay (multiply + screen), but with layers swapped.

::: code-group
<<< @/code/property/blendMode/hard-light.ts [Leafer]
<<< @/code/property/blendMode/app/hard-light.ts [App]
:::

<case name="BlendMode" index=10 editor=false></case>

### soft-light

Soft light is a softer version of hard light. Pure black or white does not produce extreme results.

::: code-group
<<< @/code/property/blendMode/soft-light.ts [Leafer]
<<< @/code/property/blendMode/app/soft-light.ts [App]
:::

<case name="BlendMode" index=11 editor=false></case>

### difference

Difference subtracts one layer from another (or vice versa), always producing a positive result.

::: code-group
<<< @/code/property/blendMode/difference.ts [Leafer]
<<< @/code/property/blendMode/app/difference.ts [App]
:::

<case name="BlendMode" index=12 editor=false></case>

### exclusion

Exclusion is similar to difference, but with lower contrast.

::: code-group
<<< @/code/property/blendMode/exclusion.ts [Leafer]
<<< @/code/property/blendMode/app/exclusion.ts [App]
:::

<case name="BlendMode" index=13 editor=false></case>

### hue

Hue preserves the luminance and saturation of the bottom layer while adopting the hue of the top layer.

::: code-group
<<< @/code/property/blendMode/hue.ts [Leafer]
<<< @/code/property/blendMode/app/hue.ts [App]
:::

<case name="BlendMode" index=14 editor=false></case>

### saturation

Saturation preserves luminance and hue of the bottom layer while adopting the saturation of the top layer.

::: code-group
<<< @/code/property/blendMode/saturation.ts [Leafer]
<<< @/code/property/blendMode/app/saturation.ts [App]
:::

<case name="BlendMode" index=15 editor=false></case>

### color

Color preserves luminance of the bottom layer while adopting hue and saturation of the top layer.

::: code-group
<<< @/code/property/blendMode/color.ts [Leafer]
<<< @/code/property/blendMode/app/color.ts [App]
:::

<case name="BlendMode" index=16 editor=false></case>

### luminosity

Luminosity preserves hue and saturation of the bottom layer while adopting luminance of the top layer.

::: code-group
<<< @/code/property/blendMode/luminosity.ts [Leafer]
<<< @/code/property/blendMode/app/luminosity.ts [App]
:::

<case name="BlendMode" index=17 editor=false></case>

### source-over

Draw new content over existing canvas content.

::: code-group
<<< @/code/property/blendMode/source-over.ts [Leafer]
<<< @/code/property/blendMode/app/source-over.ts [App]
:::

<case name="BlendMode" index=18 editor=false></case>

### source-in

Draw only where the new shape and existing canvas overlap. Other areas are transparent.

::: code-group
<<< @/code/property/blendMode/source-in.ts [Leafer]
<<< @/code/property/blendMode/app/source-in.ts [App]
:::

<case name="BlendMode" index=19 editor=false></case>

### source-out

Draw only where the new shape does not overlap existing content.

::: code-group
<<< @/code/property/blendMode/source-out.ts [Leafer]
<<< @/code/property/blendMode/app/source-out.ts [App]
:::

<case name="BlendMode" index=20 editor=false></case>

### source-atop

Draw only where it overlaps existing content.

::: code-group
<<< @/code/property/blendMode/source-atop.ts [Leafer]
<<< @/code/property/blendMode/app/source-atop.ts [App]
:::

<case name="BlendMode" index=21 editor=false></case>

### destination-over

Draw new content behind existing canvas content.

::: code-group
<<< @/code/property/blendMode/destination-over.ts [Leafer]
<<< @/code/property/blendMode/app/destination-over.ts [App]
:::

<case name="BlendMode" index=22 editor=false></case>

### destination-in

Keep only the overlapping parts of existing content and the new shape; everything else is transparent.

::: code-group
<<< @/code/property/blendMode/destination-in.ts [Leafer]
<<< @/code/property/blendMode/app/destination-in.ts [App]
:::

<case name="BlendMode" index=23 editor=false></case>

### destination-out

Keep only the non-overlapping parts of existing content and the new shape.

::: code-group
<<< @/code/property/blendMode/destination-out.ts [Leafer]
<<< @/code/property/blendMode/app/destination-out.ts [App]
:::

<case name="BlendMode" index=24 editor=false></case>

### destination-atop

Keep only overlapping parts of existing content and the new shape. The new shape is drawn behind the existing content.

::: code-group
<<< @/code/property/blendMode/destination-atop.ts [Leafer]
<<< @/code/property/blendMode/app/destination-atop.ts [App]
:::

<case name="BlendMode" index=25 editor=false></case>

### xor

Shapes become transparent where they overlap, and render normally elsewhere.

::: code-group
<<< @/code/property/blendMode/xor.ts [Leafer]
<<< @/code/property/blendMode/app/xor.ts [App]
:::

<case name="BlendMode" index=26 editor=false></case>

### copy

Only display the new shape.

::: code-group
<<< @/code/property/blendMode/copy.ts [Leafer]
<<< @/code/property/blendMode/app/copy.ts [App]
:::
