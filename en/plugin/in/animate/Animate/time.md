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

已经循环播放了多少次（计数）。

## 归属

### [Animate Class](../index.md)

## Example

<<< @/code/plugin/animate/animate/time.ts
