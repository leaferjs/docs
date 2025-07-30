<script setup>
import Case from '/component/Case.vue'
</script>

# innerShadow

元素的内阴影。

<case name="InnerShadow" editor=false></case>

## 关键属性

### innerShadow: [`ShadowEffect`](../interface/ui/Effect.md#shadoweffect) | [`ShadowEffect`](../interface/ui/Effect.md#shadoweffect)[]

内阴影， 支持多个内阴影叠加。

```ts
interface ShadowEffect {
  x: number
  y: number
  blur: number
  spread?: number
  color: Color
  blendMode?: BlendMode
  visible?: boolean
  scaleFixed?: 'zoom-in' ｜ false // 缩放时是否固定原有比例，zoom-in表示仅在放大时固定比例（缩小时仍跟随缩小）
}
```

## 归属

### [UI 元素](/reference/display/UI.md)

## 示例

<case name="InnerShadow" index=0 editor=false></case>

### 绘制内阴影

<<< @/code/property/innerShadow/blur.ts
