<script setup>
import Case from '/component/Case.vue'
</script>

# Timing

## Key Properties (Read-only)

### duration: `number`

Total duration of the animation (excluding delay and loop time).

### time: `number`

Elapsed playback time (relative to duration, excluding delay and loop time).

### looped: `number`

Number of completed loops (count).

## Belongs to

### [Animate Class](../index.md)

## Example

<<< @/code/plugin/animate/animate/time.ts
