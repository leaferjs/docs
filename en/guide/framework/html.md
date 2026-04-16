<script setup>
import Case from '/component/Case.vue'
</script>

# Using in HTML

Quickly use LeaferJS by importing it via script tags.

:::tip Note

[Image](../../reference/display/Image.md) / [PointerEvent](../../reference/event/ui/Pointer.md) / [DragEvent](../../reference/event/ui/Drag.md) conflict with browser global variables, so you must use the aliases below.

:::

::: code-group

```html [web.min]
<script src="https://unpkg.com/leafer-ui@2.0.8/dist/web.min.js"></script>
<script>
  const { Leafer } = LeaferUI // global variable containing all leafer-ui features

  // Image, PointerEvent, and DragEvent conflict with browser globals, use aliases instead
  const { MyImage, MyPointerEvent, MyDragEvent } = LeaferUI

  // ...
</script>
```

```html [web]
<script src="https://unpkg.com/leafer-ui@2.0.8/dist/web.js"></script>
<script>
  const { Leafer } = LeaferUI // global variable containing all leafer-ui features

  // Image, PointerEvent, and DragEvent conflict with browser globals, use aliases instead
  const { MyImage, MyPointerEvent, MyDragEvent } = LeaferUI

  // ...
</script>
```

```html [module.min]
<script type="module">
  import { Leafer } from 'https://unpkg.com/leafer-ui@2.0.8/dist/web.module.min.js'
  // ...
</script>
```

```html [module]
<script type="module">
  import { Leafer } from 'https://unpkg.com/leafer-ui@2.0.8/dist/web.module.js'
  // ...
</script>
```

<!-- https://unpkg.com 无法访问时，可替换为 https://cdn.jsdelivr.net/npm -->

:::

## Example

::: code-group

<<< @/code/start/create.html [index.html]

:::
