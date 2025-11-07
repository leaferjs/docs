# 导出

导出内容。

::: tip 注意事项
需安装 [导出元素插件](/plugin/in/export/index.md) 才能使用，或直接安装 [leafer-editor](/guide/install/editor/start.md)、node 版（已集成导出元素插件）。
:::

## 关键方法

### export ( )

export( name: [`IExportFileType`](/api/modules.md#iexportimagetype) | `string`, options?: [`IExportOptions`](/api/interfaces/IExportOptions.md) | `number` | `boolean`): `Promise`<[`IExportResult`](/api/interfaces/IExportResult.md)>

异步导出方法，会等待视图内所有网络资源都加载完再进行导出图片。

支持导出单个元素、画面截图， 默认导出为 1 倍图（元素逻辑尺寸）。

name 为文件名时表示保存文件。

options 为数字时表示图片质量， 为布尔时表示二进制数据 。

:::tip 注意事项
[Leafer](/reference/display/Leafer.md) 引擎默认导出为内容（非画布），想导出画布需要增加 `screenshot` 截图参数。

<del>单独导出 [App](/reference/display/App.md) 实例，只能为画面截图。</del> <badge>v1.10.0 之后不再限制</badge>
:::

```ts
type IExportFileType = 'canvas' | 'json' | 'jpg' | 'png' | 'webp' ｜ 'bmp' // 后续会支持svg、pdf, bmp 格式需平台自身支持
```

```ts
interface IExportOptions {
  quality?: number // 设置 jpg / webp 的图片质量
  blob?: boolean // 导出二进制数据

  fill?: string // 设置一个默认背景填充色

  scale?: number | IPointData // 缩放比例，默认为1，可用于生成小尺寸的缩略图
  size?: number | IOptionSizeData // 导出宽高（单独设置宽或高，另一边可自适应原始比例，同时设置宽高会拉伸），自动换算出缩放比例 scale
  padding?: number | number[] // 设置内边距, 支持数字或数组 [top, right, bottom, left]

  pixelRatio?: number // 像素比，默认为1倍图，可导出适配高清屏的2倍图、3倍图...
  smooth?: boolean // 设置画布的平滑绘制属性，默认同当前leafer画布
  contextSettings?: ICanvasRenderingContext2DSettings // 原生画布的 context 设置, 默认同当前leafer画布

  clip?: IBoundsData // 相对元素的实际渲染包围盒进行裁剪，需指定裁剪区域，设置 size、scale 会影响元素的实际渲染包围盒， 设置 pixelRatio 不会影响

  slice?: boolean // 是否为切片元素，将导出切片bounds内的画布上所有内容
  trim?: boolean // 是否裁剪透明像素，默认false
  screenshot?: IBoundsData | boolean // 以当前视图比例导出截图，可指定一个截图区域

  json?: IJSONOptions // json导出选项

  relative?: ILocationType | IUI // 相对坐标系 或父元素 的缩放比例导出，默认Leafer为 inner, 其他元素为 local，可以单独设置: inner |  local | world
  onCanvas?: IExportOnCanvasFunction // onCanvas(canvas => { }) 用于叠加绘制自定义内容
}

interface IOptionSizeData {
  width?: number // 宽度，当单独设置宽度时，高度自适应原始比例
  height?: number // 高度，当单独设置高度时，宽度自适应原始比例
}

interface IJSONOptions {
  matrix?: boolean
}

interface IExportOnCanvasFunction {
  (canvas: ILeaferCanvas): void
}

interface ICanvasRenderingContext2DSettings {
  alpha?: boolean // 画布是否包含alpha通道， 默认为false
  colorSpace?: 'display-p3' | 'srgb' // 颜色空间， 默认为srgb
  desynchronized?: boolean // 低延时渲染，默认为false
  willReadFrequently?: boolean // 用于 getImageData() 加速， 默认为false
}
```

```ts
interface IExportResult {
  data: ILeaferCanvas | IBlob | string | boolean // data为无时表示导出失败

  error?: any // 导出失败时的内部报错信息

  width?: number // 图片宽度(实际像素)
  height?: number // 图片高度(实际像素)

  renderBounds?: IBoundsData // 相对父元素的导出bounds，可用于切图定位还原
  trimBounds?: IBoundsData // 裁剪透明像素后的bounds，相对导出bounds，可用于切图定位还原
}
```

### syncExport ( )

syncExport( name: [`IExportFileType`](/api/modules.md#iexportimagetype) | `string`, options?: [`IExportOptions`](/api/interfaces/IExportOptions.md) | `number`): [`IExportResult`](/api/interfaces/IExportResult.md)

同步导出方法，参数同 export() 方法一致, 仅支持图片已经加载成功的情况，不支持同步导出二进制数据。

## 归属

### [UI 元素](/reference/display/UI.md)

## 示例

### 导出元素为图片

<<< @/code/property/export/file.ts

### 导出高清图

<<< @/code/property/export/pixelRatio.ts

### 导出 Base64 编码数据

默认图片质量为 0.92。

<<< @/code/property/export/string.ts

手动设置图片质量。

<<< @/code/property/export/quality.ts

### 同步导出 Base64 编码数据

<<< @/code/property/syncExport/string.ts

### 导出二进制数据

<<< @/code/property/export/blob.ts

### 导出时绘制水印

<<< @/code/property/export/onCanvas.ts

### 导出为画布

<<< @/code/property/export/canvas.ts

### 裁剪元素后导出

相对元素渲染区域进行裁剪。

<<< @/code/property/export/clip.ts

### 导出整个画布

将当前引擎画布进行截图导出。

<<< @/code/property/export/screenshot.ts

### 添加一个自定义异步任务

导出图片时会等待此任务执行完再导出

<<< @/code/resource/task.ts
