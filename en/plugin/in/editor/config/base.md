<script setup>
import Case from '/component/Case.vue'
</script>

# Editor Configuration

### Basic     [Events](./event.md)     [Style](./style.md)     [Buttons](./buttons.md)     [Cursor](./cursor.md)     [Selection](./select.md)     [Control](./control.md)     [Enable](./enable.md)     [Inner Editor](./innerEditor.md)

##

Basic configuration. The engine can update it in real time via [app.editor.config](../index.md#config-ieditorconfig).

Each element also has an [individual edit config](../../../../reference/UI/editable.md#editconfig-ieditorconfig) that can override the global configuration in real time.

## Key Properties

### editSize: `'size'` | `'scale'` | `'font-size'`

Method used to resize elements. Default is `size`.

- `size`: adjusts element **width/height or path** to resize
- `font-size`: adjusts text **fontSize** to resize
- `scale`: adjusts element **scale** to resize

Different elements can set [editSize independently](../../../../reference/UI/editable.md#editconfig-ieditorconfig).

## Visibility

### hideOnMove: `boolean`

Whether to hide the editor while moving elements. Default is `false`.

### hideOnSmall: `boolean | number`

Whether to hide editor controls when the element is too small. Default is `true`.

You can also set a minimum size threshold. Default minimum is `10` (meaning 10×10).

### hideResizeLines: `boolean`

Whether to hide resize control lines.

### hideRotatePoints: `boolean`

Whether to hide rotation control points.

## Pixel Alignment

### ignorePixelSnap: `boolean`

Ignore pixel snapping for selected elements to prevent jitter caused by [pixel alignment](../../../../reference/config/app/base.md#对齐像素).

Note: the sky layer must set [pixelSnap](../../../../reference/config/app/base.md#对齐像素) to `false`, otherwise the editor may still jitter.

## Examples

### Drag control points to change font size, drag border to resize text

<<< @/code/plugin/editor/config/style/point/fontSize.ts

### Hide editor while moving elements

<<< @/code/plugin/editor/config/hide-move.ts
