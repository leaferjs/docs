<script setup>
import Case from '/component/Case.vue'
</script>

# 自动高度

<case name="FlowAutoSize" index=2 count=2 height=160 editor=false></case>

## 关键属性

### autoHeight: `number` | `IUnitData`

自动高度权重，分配剩余高度给此元素（忽略 height），类似 Flex 的 grow / shrink，默认为 0。

设为大于 0 的值会自动扩充高度，一般设为 1，已支持百分比高度。

```ts
interface IUnitData {
  type: 'percent' ｜ 'px'
  value: number
}

rect.autoHeight = {
  type: 'percent',
  value: 0.5, // 50%
}
```

## 归属

### [UI 元素](../../../../reference/display/UI.md)

## 示例

<case name="FlowAutoSize" index=2 height=130 editor=false></case>

### 自动高度

<<< @/code/plugin/flow/autoHeight/height.ts

<case name="FlowAutoSize" index=3 height=130 editor=false></case>

### 自动高度和高度

<<< @/code/plugin/flow/autoHeight/both.ts

### 自动高度为百分比单位

<<< @/code/plugin/flow/autoHeight/percent.ts
