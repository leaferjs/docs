<script setup>
import Case from '/component/Case.vue'
</script>

# hittable

元素与光标碰撞的交互属性，可在 [应用配置](/reference/config/app/pointer.md) 中设置默认光标的碰撞半径。

## 关键属性

### hittable: `boolean`

是否响应交互事件，默认为 true。

若设为 false, 自身和子元素将不再响应交互事件。

### hitChildren: `boolean`

子元素是否响应交互事件，默认为 true。

### hitSelf: `boolean`

自身是否接收交互事件，子元素不受影响，默认为 true。

## 辅助属性

### hitFill: `IHitType`

fill 的交互类型，默认为 path。

```ts
type IHitType =
  | 'path' // 碰撞可见的fill 路径形状
  | 'pixel' // 碰撞可见的fill 像素点（排除 PNG/SVG 图片中的透明像素）
  | 'all' // 总是碰撞fill, 即使不可见
  | 'none' // 不碰撞fill
```

### hitStroke: `IHitType`

stroke 的交互类型，默认为 path。

```ts
type IHitType =
  | 'path' // 碰撞可见的 stroke 路径形状
  | 'pixel' // 碰撞可见的 stroke 像素点（排除 PNG/SVG 图片中的透明像素）
  | 'all' // 总是碰撞 stroke, 即使不可见
  | 'none' // 不碰撞 stroke
```

### hitBox: `boolean`

元素的 [boxBounds](/reference/property/bounds.md#boxbounds-iboundsdata) 区域是否总是响应交互事件（包含透明像素），默认为 false。

Group 不支持此属性。

### hitRadius: `number`

设置光标的碰撞半径，当光标距离元素在 hitRadius 范围内时，应用可以优先拾取到元素。

## 归属

### [UI](/reference/display/UI.md#交互-光标)

## 示例

<case name="Hittable"  index=1 editor=false  editor=false></case>

### 只有 stroke 能响应交互

拖动矩形试一试。

<<< @/code/property/hit/stroke-visible.ts

<case name="Hittable" index=2 editor=false editor=false></case>

### 不可见的 fill 也能响应交互

拖动矩形试一试。

<<< @/code/property/hit/all.ts
