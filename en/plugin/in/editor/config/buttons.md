<script setup>
import Case from '/component/Case.vue'
</script>

# Editor Configuration

### [Basic](./base.md)     [Events](./event.md)     [Style](./style.md)     Buttons     [Cursor](./cursor.md)     [Selection](./select.md)     [Control](./control.md)     [Enable](./enable.md)     [Inner Editor](./innerEditor.md)

##

Button group configuration. Can be updated in real time during runtime via [app.editor.config](../index.md#config-ieditorconfig).

Each element also has an [individual edit config](../../../../reference/UI/editable.md#editconfig-ieditorconfig) that can override the global configuration in real time.

## Key Properties

### buttonsDirection: `'top'` | `'right'` | `'bottom'` | `'left'`

Position of the button group. Default is `bottom`.

### buttonsFixed: `boolean`

Whether the button group keeps a fixed direction (not affected by element rotation).

### buttonsMargin: `number`

Outer margin between the button group and the editor frame. Default is `12`.

## Example

<case name="EditorConfig" index=10 x=20 height=180></case>

### Add bottom fixed buttons

Buttons remain fixed in direction even when the element is rotated or flipped.

<<< @/code/plugin/editor/buttons.ts
