<script setup>
import Case from '/component/Case.vue'
</script>

# ImagePaint 对象

图案填充对象, 可设置给 [fill](/reference/UI/fill.md) 或 [stroke](/reference/UI/stroke.md) 属性，支持使用 svg 格式的图片。

<case name="ImageFill" editor=false></case>

> 平铺模式下超过 4096 x 2160 的 4k 图片会被优化显示。

## 关键属性

### type: `string`

填充类型为 `image`。

### url: `string`

图片 url 地址。

### mode?: `ImagePaintMode`

图案填充模式, 默认为 cover。

```ts
type ImagePaintMode =
  | 'normal' // 正常
  | 'cover' // 覆盖（相当于background-size: cover）
  | 'fit' // 适应 (相当于background-size: contain)
  | 'stretch' // 拉伸，会改变图片比例
  | 'clip' // 裁剪
  | 'repeat' // 平铺 (相当于background-repeat: repeat)
```

### format?: `'svg'  | 'jpg' | 'png' | 'webp'`

补充图片格式，目前主要用于通过 url 无法识别的 [svg](../../display/SVG.md) 图片。

### changeful?: `boolean`

是否频繁变化，默认为 false。

设为 true 后不再额外生成高性能 pattern，一般用于频繁变化 url 的游戏精灵、动图场景。

### sync?: `boolean`

是否同步更新图片的层级缓存， 默认为 false（可获得性能优化）。

开启同步后，缩放图片的过程中不会产生模糊效果，但会增加性能的开销，请合理使用。

## 基础属性

### blendMode?: [`BlendMode`](/reference/UI/blendMode.md)

混合模式，默认为 normal。

### visible?: `boolean`

是否可见，默认为 true。

### opacity?: `number`

不透明度，默认为 1，暂时仅针对[颜色对象](/reference/interface/ui/Color.md#rgb)和图片有效。

### align: `IAlign`

背景图片对齐，类似 CSS 的 background-position 属性，clip 裁剪模式不支持此属性。

![方向图](/svg/deriction.svg)

```ts
// 方位
type IAlign =
  | 'top-left'
  | 'top'
  | 'top-right'
  | 'right'
  | 'bottom-right'
  | 'bottom'
  | 'bottom-left'
  | 'left'
  | 'center'
```

## cover 覆盖模式属性

### rotation?: `number`

旋转角度, 以 90 度递增旋转。

## fit 适应模式属性

### rotation?: `number`

旋转角度, 以 90 度递增旋转。

### padding?: [`IFourNumber`](/reference/interface/math/Math.md#ifournumber)

内边距，默认为 0。

### repeat?: `boolean`

是否重复背景。

## clip 裁剪模式属性

### clipSize?: `ISizeData`

裁剪框大小，会自动拉伸裁剪内容以适应元素宽高

```ts
interface ISizeData {
  width: number // 宽度
  height: number // 高度
}
```

### offset?: [`IPointData`](/reference/interface/math/Math.md#ipointdata)

偏移位置。

### size?: `number` ｜ [`IOptionSizeData`](/api/interfaces/IOptionSizeData.md)

图片尺寸， 自动换算出 scale。

```ts
// 单独设置宽或高，另一边可自适应原始比例，同时设置宽高会拉伸
interface IOptionSizeData {
  width?: number // 宽度，当单独设置宽度时，高度自适应原始比例
  height?: number // 高度，当单独设置高度时，宽度自适应原始比例
}
```

### scale?: `number` ｜ [`IPointData`](/reference/interface/math/Math.md#ipointdata)

缩放大小， 优先使用 size 换算出的 scale。

### rotation?: `number`

旋转角度。

## repeat 平铺模式属性

### offset?: [`IPointData`](/reference/interface/math/Math.md#ipointdata)

偏移位置。

### size?: `number` ｜ [`IOptionSizeData`](/api/interfaces/IOptionSizeData.md)

图片尺寸， 自动换算出 scale。

```ts
// 单独设置宽或高，另一边可自适应原始比例，同时设置宽高会拉伸
interface IOptionSizeData {
  width?: number // 宽度，当单独设置宽度时，高度自适应原始比例
  height?: number // 高度，当单独设置高度时，宽度自适应原始比例
}
```

### scale?: `number` ｜ [`IPointData`](/reference/interface/math/Math.md#ipointdata)

平铺图片的缩放比例，优先使用 size 换算出的 scale。

### scaleFixed?: `boolean` | `'zoom-in'`

固定平铺图片的全局缩放比例，不跟随画布缩放，默认为 false。

'zoom-in' 表示仅在放大时固定比例（缩小时仍跟随缩小）。

### rotation?: `number`

旋转角度, 以 90 度递增旋转。

设置 freeTransform 后可设置任意角度。

### freeTransform?: `boolean`

是否进行自由变换，将忽略 rotation 的特殊旋转逻辑，方便进行手动编辑

### gap?: [`IGap`](/api/modules.md#igap) | [`IPointGap`](/api/interfaces/IPointGap.md)

平铺图片之间的间距， 默认为 0。

```ts
// 设置 auto / fit 会均分剩余的空间，auto 最小值为 0，fit 允许为负数。
type IGap = number | 'auto' | 'fit'

interface IPointGap {
  x?: IGap // 单独设置 x 轴间距
  y?: IGap // 单独设置 y 轴间距
}
```

### interlace?: `number` | `IPercentData` | `IInterlace`

平铺图片交错排列。

```ts
interface IInterlace {
  type: 'x' | 'y'
  offset: number | IPercentData
}

interface IPercentData {
  type: 'percent'
  value: number
}

// 数字
interlace: 100 // 下一行 X 轴偏移 100px

// 百分比
interlace: { type: 'percent', value: 0.5}  // 下一行 x 轴偏移 图案大小的50%

// Y 轴交错
interlace: { // 下一列 Y 轴偏移 图案大小的 50%
  type: 'y'
  offset:  { type: 'percent', value: 0.5}
}
```

### repeat?: [`IRepeat`](/api/modules.md#irepeat)

重复背景的方式，可设置重复 x 或 y 轴， 默认同时重复两个轴。

并且支持单独设置 x 轴和 y 轴的平铺数量。

```ts
type IRepeat = boolean | 'x' | 'y' | IPointData

const repeat = { x: 10, y: 6 } // 设置 x、y 轴平铺图片的个数
```

## 子描边属性

### style?: [`IStrokeStyle`](/api/interfaces/IStrokeStyle.md)

当为元素设置多个描边时，可设置子描边样式 `style` ，用于覆盖 [主描边样式](/reference/UI/stroke.md#描边样式属性)。

可形成蚂蚁线、模拟内中外三层描边等各种效果，[了解具体设置](/reference/UI/stroke.md#子描边属性)。

## 图片缓存

图片缓存的全局配置，可根据需要动态调整。

<<< @/code/display/Image/setting.ts

## 图片跨域

图片跨域的全局配置，可根据需要动态调整。

设为 null 时可以渲染未经服务端允许的跨域图片， 但不支持导出画板内容（浏览器的限制）。

<<< @/code/display/Image/cross.ts

## 资源库

我们还提供了 [资源库](/reference/resource/Resource.md)，可预加载图片，原始图片对象、画布对象可转为 url

引擎中的所有图片都会通过 资源库 有序并行加载，当图片不再使用时，会进入回收列表，到达阈值会自动销毁。

## 图片事件

### [ImageEvent](/reference/event/basic/Image.md)

## 归属

### [UI 元素](/reference/display/UI.md)

## 示例

<case name="ImageFill" index=0 editor=false></case>

### cover 覆盖模式

<<< @/code/property/fill/image/cover.ts

<case name="ImageFill" index=1 editor=false></case>

### cover 覆盖模式旋转 90 度

<<< @/code/property/fill/image/cover90.ts

<case name="ImageFill" index=2 editor=false></case>

### fit 适应模式

<<< @/code/property/fill/image/fit.ts

<case name="ImageFill" index=3 editor=false></case>

### stretch 拉伸模式

<<< @/code/property/fill/image/stretch.ts

<case name="ImageFill" index=4 editor=false></case>

### clip 裁剪模式

<<< @/code/property/fill/image/clip.ts

<case name="ImageFill" index=5 editor=false></case>

### repeat 平铺模式

<<< @/code/property/fill/image/repeat.ts

<case name="ImageFill" index=6 editor=false></case>

### repeat 平铺模式旋转 90 度

<<< @/code/property/fill/image/repeat90.ts

### repeat 平铺模式不随画布缩放

<<< @/code/plugin/editor/frame/transparent.ts
