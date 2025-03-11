<script setup>
import Case from '/component/Case.vue'
</script>

# blendMode

混合模式， 了解 [混合原理](https://developer.mozilla.org/zh-CN/docs/Web/API/CanvasRenderingContext2D/globalCompositeOperation) 与 [混合效果](https://developer.mozilla.org/en-US/docs/Web/CSS/mix-blend-mode)。

<case name="BlendMode" editor=false></case>

## 关键属性

### blendMode: `BlendMode`

元素的混合模式， 默认为 `pass-through` 穿透模式。

```ts
type BlendMode =
  | 'pass-through' // 穿透，性能最好
  | 'normal' // 正常，会单独绘制在一个层上，大量使用会有性能问题
  | 'multiply' // 正片叠底---
  | 'darken' // 变暗
  | 'color-burn' // 颜色加深
  | 'lighten' // 变亮---
  | 'color-dodge' // 颜色减淡
  | 'screen' // 滤色
  | 'overlay' // 叠加---
  | 'hard-light' // 强光
  | 'soft-light' // 柔光
  | 'difference' // 差集---
  | 'exclusion' // 排除
  | 'hue' // 色相 ---
  | 'saturation' // 饱和度
  | 'color' // 颜色
  | 'luminosity' // 明度
```

## 穿透模式

元素的子混合模式（如填充、描边、特效的混合模式）可以单独与下方内容混合。

否则子混合模式只对当前元素层起作用，之后元素作为整体与下方内容混合。

## 归属

### [UI 元素](/reference/display/UI.md)
