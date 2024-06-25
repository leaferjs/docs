# zoom

控制视图的缩放。

## 关键方法

### zoom ( zoomType: `IZoomType`, padding?: [`IFourNumber`](/reference/interface/math/Math.md#ifournumber), fixedScale?: `boolean` ): [`IBoundsData`](/reference/interface/math/Math.md#iboundsdata)

`zoomType` 为缩放类型， 支持放大、缩小、fit、fit-width、fit-height 视图，聚焦元素、区域。

当 `zoomType` 为 fit、元素、区域时，可以传入 `padding` 进行四周留白。如果不想缩放画布，只进行位移，可以设置 `fixedScale` 为

函数返回一个缩放后的焦点区域（世界坐标系）。

```ts
type IZoomType =
  | 'in' // 放大 (从画布中心缩放)
  | 'out' // 缩小
  | 'fit' // 缩放到合适大小
  | 'fit-width' // 缩放到合适大小，以宽度为主
  | 'fit-height' // 缩放到合适大小，以高度为主
  | number // 指定缩放比例  (从画布中心缩放)
  | IUI // 聚焦到某一个元素
  | IUI[] // 聚焦到一组元素
  | IBoundsData // 聚焦到指定区域（page坐标系），当宽或高为0时，会自动按画布比例补全
```

## 归属

### [Leafer](/reference/display/Leafer.md)

## 示例

### 放大

<<< @/code/plugin/view/zoom/in.ts

### 缩小

<<< @/code/plugin/view/zoom/out.ts

### 缩放到合适大小

<<< @/code/plugin/view/zoom/fit.ts

### 聚焦到指定元素

<<< @/code/plugin/view/zoom/ui.ts

不缩放画布，只进行位移

<<< @/code/plugin/view/zoom/fixed.ts

### 聚焦到指定区域

<<< @/code/plugin/view/zoom/bounds.ts
