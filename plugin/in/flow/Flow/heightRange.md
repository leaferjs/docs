<script setup>
import Case from '/component/Case.vue'
</script>

# 限制高度

## 关键属性

### heightRange: [`IRangeSize`](/api/interfaces/IRangeSize.md)

限制 autoHeight 影响的高度范围。

```ts
interface IRangeSize {
  min?: number
  max?: number
}
```

## 归属

### [Flow 元素](/plugin/in/flow/index.md)

## 示例

<<< @/code/plugin/flow/heightRange/height.ts
