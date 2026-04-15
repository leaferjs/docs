<script setup>
import Case from '/component/Case.vue'
</script>

# Editor Configuration

### [Basic](./base.md)     [Events](./event.md)     [Style](./style.md)     [Buttons](./buttons.md)     [Cursor](./cursor.md)     [Selection](./select.md)     Control     [Enable](./enable.md)     [Inner Editor](./innerEditor.md)

##

Constraint configuration. Can be updated in real time during runtime via [app.editor.config](../index.md#config-ieditorconfig).

Each element also has an [individual edit config](../../../../reference/UI/editable.md#editconfig-ieditorconfig) that can override the global configuration in real time.

## Key Properties

### around: [`Around`](../../../../reference/UI/around.md)

Defines the pivot point for rotation, scaling, and skewing. Default is none.

Setting `'center'` means the center point `{x: 0.5, y: 0.5}`. Setting `{x:1, y:1}` means bottom-right corner, based on editor frame width/height ratio.

### rotateAround: [`Around`](../../../../reference/UI/around.md)

Specifies a separate pivot point for rotation. Has higher priority than `around`.

### lockRatio: `boolean | 'corner'`

Locks aspect ratio. Default is `false`.

Setting `'corner'` locks scaling ratio only at the four corners, while edge handles remain freely adjustable.

### rotateGap: `number`

Rotation snapping interval. When close to these intervals, rotation will snap gradually. Default is every `45°`.

### dragLimitAnimate: `boolean | number`

Whether constrained elements using [dragBounds](../../../../reference/UI/dragBounds.md) animate back to bounds on drag end. Default is `false` (real-time constraint).

You can set animation speed from `0.1 ~ 0.9`. `true` equals `0.3`.

This overrides Leafer's [pointer.dragLimitAnimate](../../../../reference/config/app/pointer.md#pointer-draglimitanimate-boolean-number) setting.

## Examples

<case name="EditorConfig" index=7 x=20></case>

### Scale from center point

<<< @/code/plugin/editor/config/around.ts

<case name="EditorConfig" index=8 x=20></case>

### Fixed aspect ratio scaling

<<< @/code/plugin/editor/config/lockRatio.ts
