<script setup>
import Case from '/component/Case.vue'
</script>

# 在 HTML 中使用

通过引入 script 的方式来快速使用 LeaferJS。

:::tip 注意事项

[Image](/reference/display/Image.md) / [PointerEvent](/reference/event/ui/Pointer.md) / [DragEvent](/reference/event/ui/Drag.md) 会与浏览器的全局变量冲突，需使用以下别名。

:::

::: code-group

```html [web.min]
<script src="https://unpkg.com/leafer-ui@1.5.0/dist/web.min.js"></script>
<script>
  const { Leafer } = LeaferUI // 全局变量，包含 leafer-ui 的所有功能

  // Image、PointerEvent、DragEvent 会与浏览器的全局变量冲突，请使用以下别名代替
  const { MyImage, MyPointerEvent, MyDragEvent } = LeaferUI

  // ...
</script>
```

```html [web]
<script src="https://unpkg.com/leafer-ui@1.5.0/dist/web.js"></script>
<script>
  const { Leafer } = LeaferUI // 全局变量，包含 leafer-ui的所有功能

  // Image、PointerEvent、DragEvent 会与浏览器的全局变量冲突，请使用以下别名代替
  const { MyImage, MyPointerEvent, MyDragEvent } = LeaferUI

  // ...
</script>
```

```html [module.min]
<script type="module">
  import { Leafer } from 'https://unpkg.com/leafer-ui@1.5.0/dist/web.module.min.js'
  // ...
</script>
```

```html [module]
<script type="module">
  import { Leafer } from 'https://unpkg.com/leafer-ui@1.5.0/dist/web.module.js'
  // ...
</script>
```

<!-- https://unpkg.com 无法访问时，可替换为 https://cdn.jsdelivr.net/npm -->

:::

## 示例

::: code-group

<<< @/code/start/create.html [index.html]

:::
