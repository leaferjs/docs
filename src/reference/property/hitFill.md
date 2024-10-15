<script setup>
import Case from '/component/Case.vue'
</script>

# hitFill

进一步定义元素 [fill](./fill.md) 的可交互性。

## 关键属性

### hitFill: `IHitType`

fill 的交互类型，默认为 path。

设置 pixel 可以进行 PNG / SVG 图片的像素级检测，过滤掉透明像素。

```ts
type IHitType =
  | 'path' // 碰撞可见 fill 的路径形状
  | 'pixel' // 碰撞可见 fill 的像素点（排除 PNG/SVG 图片中的透明像素）
  | 'all' // 总是碰撞 fill, 即使不可见
  | 'none' // 不碰撞 fill
```

## 归属

### [UI](/reference/display/UI.md#交互-光标)

## 示例

<case name="Hittable" index=2  editor=false></case>

### 不可见的 fill 也能响应交互

拖动矩形试一试。

<<< @/code/property/hit/all.ts
