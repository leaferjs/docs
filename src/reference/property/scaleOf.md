# scaleOf

围绕中心点缩放 (相乘模式) 元素，同时会修改元素的 x, y 坐标值。

## 关键方法

### scaleOf ( origin: [`IPointData`](../interface/math/Math#ipointdata), scaleX: `number`, scaleY?: `number`)

origin 为元素的 [inner](/guide/basic/coordinate.md) 坐标。

scaleX, scaleY 为放大/缩小的值，scaleY 不存在时等于 scaleX。

想缩放到指定 `scale` 可以用以下方式：

```ts
leaf.scaleOf({ x: 50, y: 50 }, scale / leaf.scaleX)
```
