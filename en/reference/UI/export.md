# export

Export content.

::: tip Note
You need to install the [export plugin](../../plugin/in/export/index.md) to use this feature, or use [leafer-editor](../../guide/install/editor/start.md) or the Node.js version (both already include the export plugin).
:::

## Key Methods

### export ( )

export( name: [`IExportFileType`](../../api/modules.md#iexportimagetype) | `string`, options?: [`IExportOptions`](../../api/interfaces/IExportOptions.md) | `number` | `boolean`): `Promise`<[`IExportResult`](../../api/interfaces/IExportResult.md)>

Asynchronous export method. It waits for all network resources in the view to finish loading before exporting the image.

Supports exporting a single element or a full screenshot. Default export scale is 1x (logical size).

If `name` is used as a filename, it will trigger file saving.

When `options` is a number, it represents image quality. When it is a boolean, it represents binary output.

::: tip Note
The [Leafer](../display/Leafer.md) engine exports content by default (not canvas content). To export the canvas, you need to enable the `screenshot` option.

<del>Exporting [App](../display/App.md) instances alone only supports full screen screenshots.</del>
:::

```ts
type IExportFileType = 'canvas' | 'json' | 'jpg' | 'png' | 'webp' ｜ 'bmp' // SVG and PDF will be supported later; BMP depends on platform support
```

```ts
interface IExportOptions {
  quality?: number // JPEG / WebP quality
  blob?: boolean // export binary data

  fill?: string // background fill color

  scale?: number | IPointData // export scale (default 1), useful for thumbnails
  size?: number | IOptionSizeData // output size (width/height), auto-scales if one dimension is missing
  padding?: number | number[] // padding [top, right, bottom, left]

  pixelRatio?: number // device pixel ratio, default 1
  smooth?: boolean // canvas smoothing
  contextSettings?: ICanvasRenderingContext2DSettings // native canvas context settings

  clip?: IBoundsDataWithOptionRotation // clip export area relative to render bounds

  slice?: boolean // export slice bounds content
  trim?: boolean // trim transparent pixels
  screenshot?: IBoundsData | boolean // export current viewport as screenshot

  json?: IJSONOptions // JSON export options

  relative?: ILocationType | IUI // coordinate system reference for scaling
  onCanvas?: IExportOnCanvasFunction // custom canvas drawing hook
}

interface IPointData {
  x: number
  y: number
}

interface IBoundsData {
  x: number
  y: number
  width: number
  height: number
}

interface IBoundsDataWithOptionRotation extends IBoundsData {
  rotation?: number
}

interface IOptionSizeData {
  width?: number
  height?: number
}

interface IJSONOptions {
  matrix?: boolean
}

interface IExportOnCanvasFunction {
  (canvas: ILeaferCanvas): void
}

interface ICanvasRenderingContext2DSettings {
  alpha?: boolean
  colorSpace?: 'display-p3' | 'srgb'
  desynchronized?: boolean
  willReadFrequently?: boolean
}
```

```ts
interface IExportResult {
  data: ILeaferCanvas | IBlob | string | boolean // null indicates export failure

  error?: any // internal error info

  width?: number // output image width (pixels)
  height?: number // output image height (pixels)

  renderBounds?: IBoundsData // export bounds relative to parent
  trimBounds?: IBoundsData // trimmed transparent bounds
}
```

### syncExport ( )

syncExport( name: [`IExportFileType`](../../api/modules.md#iexportimagetype) | `string`, options?: [`IExportOptions`](../../api/interfaces/IExportOptions.md) | `number`): [`IExportResult`](../../api/interfaces/IExportResult.md)

Synchronous export method. Same parameters as `export()`. Only works when images are already loaded. Does not support synchronous binary export.

## Belongs to

### [UI Elements](../display/UI.md)

## Examples

### Export element as image

::: code-group
<<< @/code/property/export/file.ts [Leafer]
<<< @/code/property/export/app/file.ts [App]
:::

### Export high-resolution image

::: code-group
<<< @/code/property/export/pixelRatio.ts [Leafer]
<<< @/code/property/export/app/pixelRatio.ts [App]
:::

### Export Base64 data

Default image quality is 0.92.

::: code-group
<<< @/code/property/export/string.ts [Leafer]
<<< @/code/property/export/app/string.ts [App]
:::

Manually set image quality.

::: code-group
<<< @/code/property/export/quality.ts [Leafer]
<<< @/code/property/export/app/quality.ts [App]
:::

### Sync export Base64 data

::: code-group
<<< @/code/property/syncExport/string.ts [Leafer]
<<< @/code/property/syncExport/app/string.ts [App]
:::

### Export binary data

::: code-group
<<< @/code/property/export/blob.ts [Leafer]
<<< @/code/property/export/app/blob.ts [App]
:::

### Add watermark during export

::: code-group
<<< @/code/property/export/onCanvas.ts [Leafer]
<<< @/code/property/export/app/onCanvas.ts [App]
:::

### Export as canvas

::: code-group
<<< @/code/property/export/canvas.ts [Leafer]
<<< @/code/property/export/app/canvas.ts [App]
:::

### Export with clipping

Clip relative to element render bounds.

::: code-group
<<< @/code/property/export/clip.ts [Leafer]
<<< @/code/property/export/app/clip.ts [App]
:::

### Export full canvas screenshot

Export current engine canvas as screenshot.

::: code-group
<<< @/code/property/export/screenshot.ts [Leafer]
<<< @/code/property/export/app/screenshot.ts [App]
:::

### Add custom async task

Export waits for this task to finish before rendering.

<<< @/code/resource/task.ts
