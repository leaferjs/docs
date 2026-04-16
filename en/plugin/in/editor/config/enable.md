<script setup>
import Case from '/component/Case.vue'
</script>

# Editor Configuration

### [Basic](./base.md)     [Events](./event.md)     [Style](./style.md)     [Buttons](./buttons.md)     [Cursor](./cursor.md)     [Selection](./select.md)     [Control](./control.md)     Enable     [Inner Editor](./innerEditor.md)

##

Enable feature configuration. Can be updated in real time during runtime via [app.editor.config](../index.md#config-ieditorconfig).

Each element also has an [individual edit config](../../../../reference/UI/editable.md#editconfig-ieditorconfig) that can override the global configuration in real time.

## Key Properties

### moveable: `boolean | 'move'`

Whether moving is enabled. Default is enabled.

Set to `move` to enable dual-finger drag gestures on mobile devices.

### resizeable: `boolean | 'zoom'`

Whether resizing is enabled. Default is enabled.

Set to `zoom` to enable pinch-to-zoom gestures on mobile devices.

### flipable: `boolean`

Whether flip/mirror functionality is enabled. Default is enabled.

### rotateable: `boolean | 'rotate'`

Whether rotation is enabled. Default is enabled.

Set to `rotate` to enable rotation gestures on mobile devices.

### skewable: `boolean`

Whether skewing is enabled. Default is enabled.

## Examples

<case name="EditorConfig" index=12 x=20></case>

### Disable rotation

<<< @/code/plugin/editor/config/rotateable.ts

<case name="EditorConfig" index=13 x=20></case>

### Disable resizing

<<< @/code/plugin/editor/config/resizeable.ts

### Mobile gesture interaction

<<< @/code/plugin/editor/config/gesture.ts
