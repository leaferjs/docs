<script setup>
import Case from '/component/Case.vue'
</script>

# rotateOf

围绕中心点旋转 (递增模式) 元素，同时会修改元素的 x, y 坐标值。

## 关键方法

### rotateOf ( origin: [`IPointData`](../interface/math/Math#ipointdata), rotation: `number`)

origin 为元素的 [inner](/guide/basic/coordinate.md) 坐标。

rotation 为增加的旋转值。

想旋转到指定 `rotation` 可以用以下方式：

```ts
leaf.rotateOf({ x: 50, y: 50 }, rotation - leaf.rotation)
```

## 示例

<case name="RectAnimate" index=0 editor=false></case>

### 旋转动画

<<< @/code/animate/simple.ts
