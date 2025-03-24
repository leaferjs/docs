# flip

镜像/翻转元素。

## 关键方法

### flip( axis：`'x'` | `'y'`, transition?: [`ITranstion`](/reference/UI/transition.md#transition-itranstion) )

在 [世界坐标系](/guide/advanced/coordinate.md#world-世界坐标系) 中， 按轴方向 镜像/翻转元素。

[`transition`](/reference/UI/transition.md#transition-itranstion) 参数表示是否进行 [动画](/guide/plugin/animate.md) 过渡。

```ts
// 按X轴镜像元素
rect.flip('x')

// 动画过渡
rect.flip('x', true)

rect.flip('x', 2) // 过渡 2 秒
```

## 归属

### [UI 元素](/reference/display/UI.md)

## 示例

### 按 X 轴镜像元素

<<< @/code/property/flip/flip.ts

### 按 X 轴镜像元素，有动画过渡

<<< @/code/property/flip/transition.ts
