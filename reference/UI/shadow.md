<script setup>
import Case from '/component/Case.vue'
</script>

# shadow

元素的外阴影。

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
  scaleFixed?: 'zoom-in' | false // 缩放时是否固定原有比例，zoom-in表示仅在放大时固定比例（缩小时仍跟随缩小）
  box?: boolean // 和 CSS3 中的 boxShadow 效果一致, 只显示图形外部的阴影
}
```

## 归属

### [UI 元素](/reference/display/UI.md)

## 示例

<case name="Shadow" index=1 editor=false></case>

### 绘制阴影

<<< @/code/property/shadow/offset.ts

<case name="Shadow" index=0 editor=false></case>

### 绘制 boxShadow 阴影

<<< @/code/property/shadow/box.ts

### 阴影不随画布放大

<<< @/code/plugin/editor/frame/transparent.ts
