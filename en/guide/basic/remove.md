<script setup>
import Case from '/component/Case.vue'
</script>

# Removing Elements

## Standard Removal

<<< @/code/basic/remove/remove.ts

## Conditional Removal

Same parameters as the [find()](../../reference/UI/find.md) method. It first performs `find()` internally and then removes all matched elements in batch.

::: tip Note
You need to install the [find element plugin](../../plugin/in/find/index.md) to use this feature, or install [leafer-game](../install/game/start.md) or [leafer-editor](../install/editor/start.md) (both already include the find element plugin).
:::

<<< @/code/basic/remove/remove-tag.ts

## Destroy Removal

<<< @/code/basic/remove/destroy.ts

## Clearing Elements

<<< @/code/basic/remove/clear.ts

## Destroy Engine

<<< @/code/basic/remove/destroy-leafer.ts

## Next Step

### [Export Elements](./export.md)
