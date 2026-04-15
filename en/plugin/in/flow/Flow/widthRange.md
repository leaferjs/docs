<script setup>
import Case from '/component/Case.vue'
</script>

# Width Constraint

## Key Properties

### widthRange: [`IRangeSize`](../../../../api/interfaces/IRangeSize.md)

Limits the width range affected by `autoWidth`.

```ts
interface IRangeSize {
  min?: number
  max?: number
}
```

## Belongs To

### [UI Element](../../../../reference/display/UI.md)

## Example

<<< @/code/plugin/flow/widthRange/width.ts
