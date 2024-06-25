# 局部渲染

应用通过局部渲染来提高重绘的效率。

当页面中有数以万计的图形的时候，只更新变化区域的图形。

## 图形边界

局部渲染计算变化的区域依赖于图形的边界， 因此必须确保图形是有边界的。

```ts
public __updateBoxBounds(): void {
  const { boxBounds } = this.__layout
  const { x, y, width, height } = this.__
  boxBounds.x = x
  boxBounds.y = y
  boxBounds.width = width
  boxBounds.height = height
}
```
