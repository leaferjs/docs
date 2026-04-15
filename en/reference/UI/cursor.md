<script setup>
import Case from '/component/Case.vue'
</script>

# cursor

Set the cursor for an element. Hover over the shapes below to see the effect.

<case name="Cursor" editor=false></case>

## Key Properties

### cursor: [`ICursorType`](../../api/modules.md#icursortype) | [`ICursorType`](../../api/modules.md#icursortype)[]

The cursor style displayed when hovering over the element. Supports all [CSS cursor names](https://developer.mozilla.org/zh-CN/docs/Web/CSS/cursor).

You can also set an image object as the cursor, with optional offset.

```ts
type ICursorType =
  | IImageCursor
  | ''
  | 'auto'
  | 'default'
  | 'none'
  | 'context-menu'
  | 'help'
  | 'pointer'
  | 'progress'
  | 'wait'
  | 'cell'
  | 'crosshair'
  | 'text'
  | 'vertical-text'
  | 'alias'
  | 'copy'
  | 'move'
  | 'no-drop'
  | 'not-allowed'
  | 'grab'
  | 'grabbing'
  | 'e-resize'
  | 'n-resize'
  | 'ne-resize'
  | 'nw-resize'
  | 's-resize'
  | 'se-resize'
  | 'sw-resize'
  | 'w-resize'
  | 'ew-resize'
  | 'ns-resize'
  | 'nesw-resize'
  | 'nwse-resize'
  | 'col-resize'
  | 'row-resize'
  | 'all-scroll'
  | 'zoom -in'
  | 'zoom-out'

interface IImageCursor {
  url: string
  x?: number
  y?: number
}
```

## Custom Cursor

You can replace system cursor names or register custom cursor names via `Cursor.set()`.

<<< @/code/property/cursor/custom.ts

## Manual Update

Leafer supports manually forcing cursor updates via [updateCursor()](../display/Leafer.md#updatecursor-cursor-icursortype).

## Disable Cursor

You can disable cursor functionality at any time via [app.config.cursor](../config/app/base.md#cursor-boolean). After disabling, you can fully customize cursor behavior.

## Belongs to

### [UI Elements](../display/UI.md)

## Examples

<case name="Cursor" index=4 editor=false></case>

### Set cursor

::: code-group
<<< @/code/property/cursor/name.ts [Leafer]
<<< @/code/property/cursor/app/name.ts [App]
:::

<case name="Cursor" index=5 editor=false></case>

### Set image cursor

Supports png and svg images. Offset values `x` and `y` are optional.

::: code-group
<<< @/code/property/cursor/image.ts [Leafer]
<<< @/code/property/cursor/app/image.ts [App]
:::
