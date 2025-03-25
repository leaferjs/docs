# Resource

资源库，外部资源管理（静态类）。

用于管理及有序并行加载图片、视频、声音等素材。

## 关键方法

### loadImage ( key: `string`, format?: [`IExportFileType`](/api/modules.md#iexportimagetype) ): Promise<[`ILeaferImage`](/api/interfaces/ILeaferImage.md)>

预加载图片资源，`key` 为图片的 url 地址，`format` 用于强制定义图片类型 。

### setImage ( key: `string`, value: `string` | [`IObject`](/api/interfaces/IObject.md) | [`ILeaferImage`](/api/interfaces/ILeaferImage.md) | [`ILeaferCanvas`](/api/interfaces/ILeaferCanvas.md), format?: [`IExportFileType`](/api/modules.md#iexportimagetype) ): [`ILeaferImage`](/api/interfaces/ILeaferImage.md)

自定义图片资源的 `key`，建议采用 leafer://协议 + 类型后缀名，方便识别导出资源。

`value` 支持 base64，原始图像、画布，以及封装的跨平台图像、画布。

`format` 用于强制定义图片类型。

### set ( key: `string`, value: `any` )

设置资源的 `key`, 图像类型必须为 [`ILeaferImage`](/api/interfaces/ILeaferImage.md)。

### get ( key: `string` ): `any`

通过 `key` 获取资源对象。

### remove ( key: `string` )

通过 `key` 移除资源，移除后会自动释放该资源的内存。

### destroy ( )

销毁所有资源。

## 　示例

### 等待图片加载完，再添加到应用中

<<< @/code/resource/image/load.ts

### 原始图片对象 转 url

<<< @/code/resource/image/image.ts

### 原始 canvas 对象转 url

<<< @/code/resource/image/canvas.ts

### 跨平台 LeaferCanvas 对象转 url

<<< @/code/resource/image/leafer-canvas.ts

### 添加一个自定义异步任务

[export()](/reference/UI/export.md) 导出图片时，会等待此任务执行完再导出.

<<< @/code/resource/task.ts
