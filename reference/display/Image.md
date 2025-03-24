<script setup>
import Case from '/component/Case.vue'
</script>

# Image 元素

图片对象，支持使用 svg 格式的图片，另外所有图形都支持通过 [图案填充](/reference/UI/paint/image.md) 来显示图片。

<case name="ImageFill" editor=false></case>

<br/>

::: tip 继承
Image &nbsp;>&nbsp; [Rect](./Rect.md) &nbsp;>&nbsp; [UI](./UI.md)

<br/>

注意：[script 标签引入](/guide/install/ui/start.md#通过-script-标签引入) 需用别名 **MyImage** 代替。
:::

## 关键属性

### width?: `number`

宽度，默认使用图片原始宽度。

### height?: `number`

高度， 默认使用图片原始高度。

### url: `string`

图片地址。

::: tip 注意事项
[Image](./Image.md) 暂时不支持设置 fill 属性（内部已使用），可使用 [Rect](./Rect.md) 元素代替。
:::

## 辅助属性

[图案填充](/reference/UI/paint/image.md) 的元素也支持这些辅助属性。

### pixelRatio: `number`

图片的像素比， 默认为 1，（适配高清屏为 2，超高清屏为 3）。

自动宽高的图片，此属性才有效。

### lazy: `boolean`

图片是否懒加载，可以加快页面显示速度， 默认为 false。

## 只读属性

### ready: `boolean`

图片是否已经加载完成。

### image?: [`ILeaferImage`](/api/interfaces/ILeaferImage.md)

原始图片封装对象, 图片加载完成才存在。

## 辅助方法

### load ()

手动加载图片。

一般用于元素未添加到 Leafer 中时，手动加载图片，获取图片自然宽高。

## 图片缓存

图片缓存的全局配置，可根据需要动态调整。

<<< @/code/display/Image/setting.ts

## 图片跨域

图片跨域的全局配置，可根据需要动态调整。

设为 null 时可以渲染未经服务端允许的跨域图片， 但不支持导出画板内容（浏览器的限制）。

<<< @/code/display/Image/cross.ts

### 使用 Rect 代替 Image

想为图片设置 fill 时，请用 Rect 代替，Rect 不设置宽高也会自适应图片，并支持多个填充。

::: code-group
<<< @/code/display/Image/rect.ts [Leafer]
<<< @/code/display/Image/app/rect.ts [App]
:::

## 资源库

我们还提供了 [资源库](/reference/resource/Resource.md)，可预加载图片，原始图片对象、画布对象可转为 url。

应用中的所有图片都会通过 资源库 有序并行加载，当图片不再使用时，会进入回收列表，到达阈值会自动销毁。

## 图片事件

### [ImageEvent](/reference/event/basic/Image.md)

<!-- ## 继承元素

### [Rect](./Rect.md) -->

<!-- ## API

### [Image](/api/classes/Image.md) -->

## 示例

<case name="ImageFill" index=0 editor=false></case>

### 使用默认宽高

::: code-group
<<< @/code/display/Image/stretch.ts [Leafer]
<<< @/code/display/Image/app/stretch.ts [App]
:::

### 固定宽度，自适应高度

::: code-group
<<< @/code/display/Image/width.ts [Leafer]
<<< @/code/display/Image/app/width.ts [App]
:::

### 固定高度，自适应宽度

::: code-group
<<< @/code/display/Image/height.ts
<<< @/code/display/Image/app/height.ts
:::

### 监听图片加载

::: code-group
<<< @/code/event/image/image.ts
<<< @/code/event/image/image.js
:::

### 监听错误

::: code-group
<<< @/code/event/image/error.ts
<<< @/code/event/image/error.js
:::
