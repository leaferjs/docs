<script setup>
import Case from '/component/Case.vue'
</script>

# Editor Configuration

### [Basic](./base.md)     [Events](./event.md)     [Styles](./style.md)     [Button Groups](./buttons.md)     [Cursor](./cursor.md)     [Selection](./select.md)     [Control](./control.md)     [Enable](./enable.md)     Internal Editor

##

Internal editor configuration can be modified in real time during application runtime via [app.editor.config](../index.md#config-ieditorconfig).

At the same time, elements have an [independent editor configuration](../../../../reference/UI/editable.md#editconfig-ieditorconfig) property, which can override the main configuration in real time.

## Key Properties

### textEditor： `object`

Custom configuration for the text editor.

```ts
// Accessed internally via:
app.editor.mergeConfig.textEditor
```

### pathEditor： `object`

Custom configuration for the path editor.

```ts
// Accessed internally via:
app.editor.mergeConfig.pathEditor
```

### ...Editor

You can extend custom configuration objects as needed.

```ts
// Accessed internally via:
app.editor.mergeConfig.anyEditor
```
