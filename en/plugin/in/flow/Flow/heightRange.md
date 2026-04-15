<script setup>
import Case from '/component/Case.vue'
</script>

# Height Constraint

## Key Properties

### heightRange: [`IRangeSize`](../../../../api/interfaces/IRangeSize.md)

Limits the height range affected by `autoHeight`.

```ts
interface IRangeSize {
  min?: number
  max?: number
}
```

## Belongs To

### [UI Element](../../../../reference/display/UI.md)

## Example

<<< @/code/plugin/flow/heightRange/height.ts
