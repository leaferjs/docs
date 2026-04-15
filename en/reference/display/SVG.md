<script setup>
import Case from '/component/Case.vue'
</script>

# SVG Element

## Images

Both the [Image element](./Image.md) and [pattern fill](../UI/paint/image.md) support loading SVG images directly.

SVG images use a special rendering pipeline that enables high-quality scaling without loss of clarity.

If SVG format cannot be detected automatically from a URL, you can explicitly set `format: svg` in [pattern fill](../UI/paint/image.md).

To modify the color of an SVG image, you can load the SVG as a string and use variable-based templating.

## Paths

The [Path](./Path.md) element supports SVG path data.

## Format Conversion

A community plugin for converting SVG into native graphic elements is expected in the future.

## Examples

### Using URL

<<< @/code/display/SVG/svg-url.ts

### Using String

<<< @/code/display/SVG/svg.ts

Pattern Fill

<<< @/code/display/SVG/svg-rect.ts
