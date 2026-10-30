<script setup>
import Case from '/component/Case.vue'
</script>

# Film 元素

Film 动图元素 —— 在 Canvas 中实现动图渲染与播放控制。

::: tip 继承
Film &nbsp;>&nbsp; [Image](../../../reference/display/Image.md) &nbsp;>&nbsp; [Rect](../../../reference/display/Rect.md) &nbsp;>&nbsp; [UI](../../../reference/display/UI.md)
:::

## 更新日志

开源前的最后版本为 v1.0.1，[查看更新日志](./update.md)。

## 📦 安装插件（已开源）

需要安装 film 插件才能使用，[点此访问 Github 仓库](https://github.com/leaferjs/leafer-in/tree/main/packages/film)。

::: code-group

```sh [npm]
npm install @leafer-in/film
```

```sh [pnpm]
pnpm add @leafer-in/film
```

```sh [yarn]
yarn add @leafer-in/film
```

```sh [bun]
bun add @leafer-in/film
```

:::

或通过 script 标签引入，使用全局变量 LeaferIN.film 访问插件内部功能。

::: code-group

```html [film.min]
<script src="https://unpkg.com/@leafer-in/film@2.3.3/dist/film.min.js"></script>
<script>
  const { Film } = LeaferIN.film
</script>
```

```html [film]
<script src="https://unpkg.com/@leafer-in/film@2.3.3/dist/film.js"></script>
<script>
  const { Film } = LeaferIN.film
</script>
```

:::

## 关键属性

### width?: `number`

宽度，默认使用动图原始宽度。

### height?: `number`

高度， 默认使用动图原始高度。

### url: `string`

动图 url 地址，支持 Blob url、Data url(Base64)。

我们还提供了 [资源库](../../../reference/resource/Resource.md)，支持预加载动图。

::: tip 注意事项
Film 元素 设置 url 后，不支持同时设置 [fill](../../../reference/UI/fill.md) 属性（url 会覆盖 [fill](../../../reference/UI/fill.md) ），单独设置 [fill](../../../reference/UI/fill.md) 代替 url 是可以的。
:::

默认支持gif格式，其他格式部分浏览器支持，想全面支持，需要安装相应的格式解码插件。

```ts
type IFilmFileType =
  | 'gif'
  | 'webp'
  | 'png' // apng
  | 'avif'
```

## 辅助属性

带 [图案填充](../../../reference/UI/paint/image.md) 的元素自身也支持这些辅助属性（属性需要设置在元素上）。

### pixelRatio: `number`

动图的像素比， 默认为 1，（适配高清屏为 2，超高清屏为 3）。

自动宽高的动图，此属性才有效。

### lazy: `boolean`

动图是否懒加载，可以加快页面显示速度， 默认为 false。

### placeholderColor: `string`

动图占位符的背景颜色，当动图加载中(延迟 100ms)或加载失败时均会显示。

## 只读属性

### ready: `boolean`

动图是否已经加载完成。

<!-- ### image?: [`ILeaferImage`](/api/interfaces/ILeaferImage.md)

原始动图封装对象, 动图加载完成才存在。 -->

### decoder: `IFilmDecoder`

动画的解码实例，动图加载完成才存在。

```ts
interface IFilmDecoder {
  width: number
  height: number

  total: number // 总的帧数
  loop: number // 循环方式，0表示无限循环
  frames: IFilmFrame[] // 帧数据
}

interface IFilmFrame {
  image?: any // 不存在时使用合并图
  duration: number // 帧时长，毫秒
  decoding?: boolean // 正在解码中

  //在合并图中的位置
  x?: number
  y?: number
}
```

### playerOptions: `IFilmPlayerOptions`

实时播放参数，动图加载完成才存在。

```ts
interface IFilmPlayOptions {
  nowIndex?: number // 当前播放到的帧位置
  pauseIndex?: number // 播放到这一帧暂停
  loop?: number // 已经循环播放了多少次？
  speed?: number // 播放速度
  paused?: boolean // 是否暂停播放
}
```

## 关键方法

### play ( )

播放动图。

### pause ( )

暂停动图。

### togglePlay ( )

暂停或播放动图，自动切换。

### stop( )

停止播放动图，并恢复到起点状态。

### seekFrame ( frameIndex: `number` )

跳转到指定帧。

可以通过 [decoder.total](#decoder-ifilmdecoder) 获取总帧数。

## 辅助方法

### load ()

手动加载动图。

一般用于元素未添加到 Leafer 中时，手动加载动图，获取动图自然宽高。

## 资源库

我们还提供了 [资源库](../../../reference/resource/Resource.md)，可预加载动图。

引擎中的所有动图都会通过 资源库 有序并行加载，当动图不再使用时，会进入回收列表，到达阈值会自动销毁。

<<< @/code/plugin/film/resource.ts

## 动图事件

### [ImageEvent](../../../reference/event/basic/Image.md)

## 示例

### 创建Film

<<< @/code/plugin/film/index.ts

### 使用 fill 代替 url

[fill](../../../reference/UI/fill.md) 可支持多个填充。

<<< @/code/plugin/film/fill.ts

### 使用 Rect 代替 Film

<<< @/code/plugin/film/rect.ts

### 在 Polygon 中使用 Film

<<< @/code/plugin/film/polygon.ts

### 监听动图加载成功事件

<<< @/code/plugin/film/loaded.ts

### 监听动图加载失败事件

<<< @/code/plugin/film/error.ts
