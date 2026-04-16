<script setup>
import Case from '/component/Case.vue'
</script>

# Style

## Key Properties (Read-only)

### style: [`IUIInputData`](../../../../api/interfaces/IUIInputData.md)

Current animation state style.

### fromStyle: [`IUIInputData`](../../../../api/interfaces/IUIInputData.md)

from 帧状态的样式。

### toStyle: [`IUIInputData`](../../../../api/interfaces/IUIInputData.md)

to 帧状态的样式。

### endingStyle: [`IUIInputData`](../../../../api/interfaces/IUIInputData.md)

Ending state style.

### frames: [`IComputedKeyframe`](../../../../api/interfaces/IComputedKeyframe.md) []

Computed keyframe list used internally by the animation.

### keyframes: [`IKeyframe`](../../../../api/modules.md#ikeyframe)[]

Original animation keyframes list.

```ts
type IKeyframe = IUIInputData | IAnimateKeyframe

interface IAnimateKeyframe {
  style: IUIInputData // element style

  easing?: IAnimateEasing // easing function for this keyframe
  delay?: number // delay time for this keyframe
  duration?: number // fixed duration for this keyframe, overrides autoDuration

  swing?: number // swing count (times reaching to), from -> to, to -> from -> to ..., default 0
  loop?: number // loop count, default 0

  // remaining time allocation:
  // (total duration - sum of fixed durations) / total weight * current weight
  autoDelay?: number // weight for auto delay, default 0
  autoDuration?: number // weight for auto duration, default 1
}
```

## 归属

### [Animate Class](../index.md)

## Example

<<< @/code/plugin/animate/animate/style.ts
