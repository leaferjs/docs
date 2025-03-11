<script setup>
import Case from '/component/Case.vue'
</script>

# 限制宽度

## 关键属性

### widthRange: [`IRangeSize`](/api/interfaces/IRangeSize.md)

限制 autoWidth 影响的宽度范围。

```ts
interface IRangeSize {
  min?: number
  max?: number
}
```

## 归属

### [UI 元素](/reference/display/UI.md)

## 示例

<<< @/code/plugin/flow/widthRange/width.ts
