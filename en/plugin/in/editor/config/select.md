<script setup>
import Case from '/component/Case.vue'
</script>

# Editor Configuration

### [Basic](./base.md)     [Events](./event.md)     [Styles](./style.md)     [Button Groups](./buttons.md)     [Cursor](./cursor.md)     Selection     [Control](./control.md)     [Enable](./enable.md)     [Internal Editor](./innerEditor.md)

##

Selection mode configuration. It is only effective when set during initialization or modified at runtime via [app.editor.config](../index.md#config-ieditorconfig).

At the same time, elements have an [independent editor configuration](../../../../reference/UI/editable.md#editconfig-ieditorconfig) property, which can override the main configuration in real time.

## Key Properties

### editBox: `boolean`

Whether to enable the edit box feature (used for editing elements). Enabled by default.

When disabled, the edit box will be hidden.

### selector: `boolean`

Whether to enable the selection selector. Enabled by default.

It allows selecting [editable](../../../../reference/UI/editable.md) elements through interaction and supports displaying hover states.

### select: `'press'` | `'tap'`

The trigger mode for selection. Default is press.

press means triggered on mouse down, tap means triggered on click.

### multipleSelect: `boolean`

Whether to enable multi-selection. Enabled by default.

### boxSelect: `boolean`

Whether to enable box selection. Enabled by default.

### continuousSelect: `boolean`

Whether a single click can continuously select multiple elements. Typically used for multi-selection on mobile devices. Disabled by default.

### preventEditInner: `boolean`

Whether to prevent opening the inner editor on double-click. Default is false.
