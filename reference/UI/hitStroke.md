<script setup>
import Case from '/component/Case.vue'
</script>

# hitStroke

进一步定义元素 [stroke](./stroke.md) 的可交互性。

## 关键属性

### hitStroke: `IHitType`

stroke 的交互类型，默认为 path。

设置 pixel 可以进行 PNG / SVG 图片的像素级检测，过滤掉透明像素。

```ts
type IHitType =
  | 'path' // 碰撞可见 stroke 的路径形状
  | 'pixel' // 碰撞可见 stroke 的像素点（排除 PNG/SVG 图片中的透明像素）
  | 'all' // 总是碰撞 stroke, 即使不可见
  | 'none' // 不碰撞 stroke
```

## 归属

### [UI 元素](/reference/display/UI.md)

## 示例

<case name="Hittable"  index=1  editor=false></case>

### 只有 stroke 能响应交互

拖动矩形试一试。

<<< @/code/property/hit/stroke-visible.ts
