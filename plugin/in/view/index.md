# 视图控制

控制视图的缩放，支持放大、缩小、fit、fit-width、fit-height 视图， 支持聚焦元素，聚焦区域。

## 安装插件

需要安装 view 插件才能使用，[点此访问 Github 仓库](https://github.com/leaferjs/leafer-in/tree/main/packages/view)。

::: code-group

```sh [npm]
npm install @leafer-in/view
```

```sh [pnpm]
pnpm add @leafer-in/view
```

```sh [yarn]
yarn add @leafer-in/view
```

```sh [bun]
bun add @leafer-in/view
```

:::

或通过 script 标签引入，使用全局变量 LeaferIN.view 访问插件内部功能。

::: code-group

```html [view.min]
<script src="https://unpkg.com/@leafer-in/view@1.9.0/dist/view.min.js"></script>
```

```html [view]
<script src="https://unpkg.com/@leafer-in/view@1.9.0/dist/view.js"></script>
```

<!-- https://unpkg.com 无法访问时，可替换为 https://cdn.jsdelivr.net/npm -->

:::

## 归属

### [Leafer](/reference/display/Leafer.md) 元素

## 关键方法

### zoom ( zoomType: [`IZoomType`](/api/modules.md#izoomtype), padding?: [`IFourNumber`](/reference/interface/math/Math.md#ifournumber), scroll?: `boolean` | `'x'` | `'y'` , transition?: [`ITranstion`](/reference/UI/transition.md#transition-itranstion)): [`IBoundsData`](/reference/interface/math/Math.md#iboundsdata)

`zoomType` 为缩放类型， 支持放大、缩小、fit、fit-width、fit-height 视图，聚焦元素、区域。

`padding` 参数表示四周留白边距（仅限于`zoomType` 为 fit、元素、区域时有效）

`scroll` 参数表示是否只进行平移，不缩放，可以设置仅平移 x 轴或 y 轴。

[`transition`](/reference/UI/transition.md#transition-itranstion) 参数表示是否进行 [动画](/guide/plugin/animate.md) 过渡。

函数返回一个缩放后的焦点区域（世界坐标系）。

```ts
type IZoomType =
  | 'in' // 放大 (从画布中心缩放)
  | 'out' // 缩小
  | 'fit' // 缩放到合适大小，并居中显示
  | 'fit-width' // 缩放到合适大小，以宽度为主
  | 'fit-height' // 缩放到合适大小，以高度为主
  | number // 指定缩放比例  (从画布中心缩放)
  | IUI // 聚焦到某一个元素
  | IUI[] // 聚焦到一组元素
  | IBoundsData // 聚焦到指定区域（page坐标系），当宽或高为0时，会自动按画布比例补全
```

```ts
// 缩放到合适大小，并居中显示
leafer.zoom('fit')

// 动画过渡
leafer.zoom('fit', 0, null, true)

leafer.zoom('fit', 0, null, 2) // 过渡 2 秒
```

## 示例

### 放大

<<< @/code/plugin/view/zoom/in.ts

### 缩小

<<< @/code/plugin/view/zoom/out.ts

### 指定缩放值

<<< @/code/plugin/view/zoom/scale.ts

### 缩放到合适大小

<<< @/code/plugin/view/zoom/fit.ts

### 让画布内容居中显示

<<< @/code/plugin/view/zoom/fit-center.ts

### 聚焦到指定元素

<<< @/code/plugin/view/zoom/ui.ts

不缩放画布，只进行位移

<<< @/code/plugin/view/zoom/fixed.ts

### 聚焦到指定区域

<<< @/code/plugin/view/zoom/bounds.ts
