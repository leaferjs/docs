<script setup>
import Case from '/component/Case.vue'
</script>

# 编辑器配置

### [基础](/plugin/in/editor/config/base.md) &nbsp; &nbsp; [事件](/plugin/in/editor/config/event.md) &nbsp; &nbsp; [样式](/plugin/in/editor/config/style.md) &nbsp; &nbsp; [按钮组](/plugin/in/editor/config/buttons.md) &nbsp; &nbsp; [光标](/plugin/in/editor/config/cursor.md) &nbsp; &nbsp; [选择](/plugin/in/editor/config/select.md) &nbsp; &nbsp; [控制](/plugin/in/editor/config/control.md) &nbsp; &nbsp; [启用](/plugin/in/editor/config/enable.md) &nbsp; &nbsp; 内部编辑器

##

内部编辑器配置，应用运行中可实时修改 [app.editor.config](/plugin/in/editor/index.md#config-ieditorconfig) 生效。

同时元素拥有 [独立的编辑配置](/reference/UI/editable.md#editconfig-ieditorconfig) 属性，可实时覆盖主配置。

## 关键属性

### textEditor： `object`

文本编辑器的自定义配置。

```ts
// 内部通过此方式访问
app.editor.mergeConfig.textEditor
```

### pathEditor： `object`

路径编辑器的自定义配置。

```ts
// 内部通过此方式访问
app.editor.mergeConfig.pathEditor
```

### ...Editor

可依次扩展自定义配置对象。

```ts
// 内部通过此方式访问
app.editor.mergeConfig.anyEditor
```
