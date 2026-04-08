<script setup>
import Case from '/component/Case.vue'
</script>

# 对齐

<case name="FlowAlign" count=3 height=160 editor=false></case>

<case name="FlowAlign" index=3 count=3 height=160 editor=false></case>

<case name="FlowAlign" index=6 count=3 height=160 editor=false></case>

## 关键属性

### flowAlign: [`IFlowAlign`](/api/modules.md#iflowalign) | [`IFlowAxisAlign`](/api/interfaces/IFlowAxisAlign.md)

对齐子元素的方式， 默认为 top-left。

```ts
type IFlowAlign =
  | 'top-left'
  | 'top'
  | 'top-right'
  | 'right'
  | 'bottom-right'
  | 'bottom'
  | 'bottom-left'
  | 'left'
  | 'center'
  | IBaseLineAlign

// 后续支持baseline
type IBaseLineAlign = 'baseline-left' | 'baseline-center' | 'baseline-right'
```

可以进一步设置行内的轴对齐方式。

```ts
interface IFlowAxisAlign {
  content?: IFlowAlign
  x?: IAxisAlign // 行内 x 轴对齐，不设置时为 from
  y?: IAxisAlign // 行内 y 轴对齐，不设置时为 from
}

// from 表示对齐行内轴起点， to 表示对齐行内轴终点
type IAxisAlign = 'from' | 'center' | 'to'
```

行内 Y 轴对齐

<case name="FlowAlign" index=9 count=3 height=160 editor=false></case>

行内 X 轴对齐

<case name="FlowYAlign" index=9 count=3 height=160 editor=false></case>

## 归属

### [Flow 元素](/plugin/in/flow/index.md)

## 示例

<case name="FlowAlign" index=0 height=130 editor=false></case>

### 左上角对齐

<<< @/code/plugin/flow/flowAlign/top-left.ts

<case name="FlowAlign" index=1 height=130 editor=false></case>

### 顶部居中对齐

<<< @/code/plugin/flow/flowAlign/top.ts

<case name="FlowAlign" index=2 height=130 editor=false></case>

### 右上角对齐

<<< @/code/plugin/flow/flowAlign/top-right.ts

<case name="FlowAlign" index=3 height=130 editor=false></case>

### 左对齐

<<< @/code/plugin/flow/flowAlign/left.ts

<case name="FlowAlign" index=4 height=130 editor=false></case>

### 居中对齐

<<< @/code/plugin/flow/flowAlign/center.ts

<case name="FlowAlign" index=5 height=130 editor=false></case>

### 右对齐

<<< @/code/plugin/flow/flowAlign/right.ts

<case name="FlowAlign" index=6 height=130 editor=false></case>

### 左下角对齐

<<< @/code/plugin/flow/flowAlign/bottom-left.ts

<case name="FlowAlign" index=7 height=130 editor=false></case>

### 底部居中对齐

<<< @/code/plugin/flow/flowAlign/bottom.ts

<case name="FlowAlign" index=8 height=130 editor=false></case>

### 右下角对齐

<<< @/code/plugin/flow/flowAlign/bottom-right.ts

<case name="FlowAlign" index=9 height=130 editor=false></case>

### 居中对齐，且行内顶部对齐

<<< @/code/plugin/flow/flowAlign/y/from.ts

<case name="FlowAlign" index=10 height=130 editor=false></case>

### 居中对齐，且行内居中对齐

<<< @/code/plugin/flow/flowAlign/y/center.ts

<case name="FlowAlign" index=11 height=130 editor=false></case>

### 居中对齐，且行内底部对齐

<<< @/code/plugin/flow/flowAlign/y/to.ts
