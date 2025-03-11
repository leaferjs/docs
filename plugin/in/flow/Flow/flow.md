<script setup>
import Case from '/component/Case.vue'
</script>

# 布局方向

<case name="Flow" count=2 height=160 editor=false></case>

<case name="Flow" index=2 count=2 height=160 editor=false></case>

## 关键属性

### flow: `boolean` | [`IFlowType`](/api/modules.md#iflowtype)

是否进行自动布局，可进一步指定布局的轴方向 x 或 y ，默认为 x 轴。

```ts
type IFlowType = 'x' | 'y' | 'x-reverse' | 'y-reverse' // 轴方向，reverse 表示反向
```

## 归属

### [Flow 元素](/plugin/in/flow/index.md)

## 示例

<case name="Flow" index=0 height=130 editor=false></case>

### 沿 X 轴自动布局

<<< @/code/plugin/flow/flow/x.ts

<case name="Flow" index=1 height=130  editor=false></case>

### 沿 X 轴反向自动布局

<<< @/code/plugin/flow/flow/x-reverse.ts

<case name="Flow" index=2 height=130  editor=false></case>

### 沿 Y 轴自动布局

<<< @/code/plugin/flow/flow/y.ts

<case name="Flow" index=3 height=130  editor=false></case>

### 沿 Y 轴反向自动布局

<<< @/code/plugin/flow/flow/y-reverse.ts
