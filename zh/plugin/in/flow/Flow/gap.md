<script setup>
import Case from '/component/Case.vue'
</script>

# 间距

<case name="FlowGap"  count=3 height=160 editor=false></case>

<case name="FlowGap" index=3 count=2 height=160 editor=false></case>

## 关键属性

### gap: [`IGap`](/api/modules.md#igap) | [`IPointGap`](/api/interfaces/IPointGap.md)

子元素之间的间距， 默认为 0。

```ts
// 设置 auto / fit 会均分剩余的空间，auto 最小值为 0，fit 允许为负数。
type IGap = number | 'auto' | 'fit'

interface IPointGap {
  x?: IGap // 单独设置 x 轴间距
  y?: IGap // 单独设置 y 轴间距
}
```

## 归属

### [Flow 元素](/plugin/in/flow/index.md)

## 示例

<case name="FlowGap"  index=0 height=130 editor=false></case>

### 固定数值的间距

<<< @/code/plugin/flow/gap/gap.ts

<case name="FlowGap"  index=1 height=130 editor=false></case>

### 自动分配剩余空间为间距

<<< @/code/plugin/flow/gap/auto.ts

<case name="FlowGap"  index=2 height=130 editor=false></case>

### 自动分配剩余空间为间距（允许负值）

<<< @/code/plugin/flow/gap/fit.ts

<case name="FlowGap"  index=3 height=130 editor=false></case>

### 分别指定 X 轴和 Y 轴间距

<<< @/code/plugin/flow/gap/y/gap.ts

<case name="FlowGap"  index=4 height=130 editor=false></case>

### 自动分配 Y 轴剩余空间为间距

<<< @/code/plugin/flow/gap/y/auto.ts
