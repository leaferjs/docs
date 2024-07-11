<script setup>
import Case from '/component/Case.vue'
</script>

# shadow

绘制阴影。

<case name="Shadow" editor=false></case>

## 关键属性

### shadow: [`ShadowEffect`](../interface/ui/Effect.md#shadoweffect) | [`ShadowEffect`](../interface/ui/Effect.md#shadoweffect)[]

外阴影， 支持多个阴影叠加、boxShadow 效果。

```ts
interface ShadowEffect {
  x: number
  y: number
  blur: number
  spread?: number
  color: Color
  blendMode?: BlendMode
  visible?: boolean
  box?: boolean // 和 CSS3 中的 boxShadow 效果一致, 只显示图形外部的阴影
}
```

## 归属

### [UI](/reference/display/UI.md#滤镜-特效)

## 示例

<case name="Shadow" index=1 editor=false></case>

### 绘制阴影

<<< @/code/property/shadow/offset.ts

<case name="Shadow" index=0 editor=false></case>

### 绘制 boxShadow 阴影

<<< @/code/property/shadow/box.ts
