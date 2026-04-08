<script setup>
import Case from '/component/Case.vue'
</script>

# 编辑器配置

### [基础](./base.md) &nbsp; &nbsp; [事件](./event.md) &nbsp; &nbsp; [样式](./style.md) &nbsp; &nbsp; [按钮组](./buttons.md) &nbsp; &nbsp; [光标](./cursor.md) &nbsp; &nbsp; [选择](./select.md) &nbsp; &nbsp; [控制](./control.md) &nbsp; &nbsp; [启用](./enable.md) &nbsp; &nbsp; 内部编辑器

##

内部编辑器配置，应用运行中可实时修改 [app.editor.config](../index.md#config-ieditorconfig) 生效。

同时元素拥有 [独立的编辑配置](../../../../reference/UI/editable.md#editconfig-ieditorconfig) 属性，可实时覆盖主配置。

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
