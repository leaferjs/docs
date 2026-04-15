<script setup>
import Case from '/component/Case.vue'
</script>

# Seek

## Key Methods

### seek ( time: `number` | [`IPercentData`](../../../../api/interfaces/IPercentData.md), includeDelay?: `boolean` )

Jump to a specified time position. Supports setting an exact time (in seconds) or a percentage (relative to the total duration).

Setting the `includeDelay` parameter means the main `delay` time is included in the total duration when seeking.

## Belongs to

### [Animate Class](../index.md)

## Examples

### Seek using seconds

<<< @/code/plugin/animate/animate/seek/value.ts

### Seek using percentage

<<< @/code/plugin/animate/animate/seek/percent.ts
