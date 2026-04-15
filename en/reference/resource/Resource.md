# Resource

Resource library, external resource management (static class).

Used to manage and orderly load assets such as images, videos, sounds, etc.

## Key Properties

### task: `TaskProcessor`

Global parallel asynchronous resource loading tasks, automatically limits the maximum concurrency, [see example](#添加一个自定义异步任务).

### queue: `TaskProcessor`

Global sequential task queue (currently mainly used for pattern generation), prevents blocking main thread rendering, [see example](#添加一个队列任务).

## Key Methods

### loadImage ( key: `string`, format?: [`IExportFileType`](../../api/modules.md#iexportimagetype) ): Promise<[`ILeaferImage`](../../api/interfaces/ILeaferImage.md)>

Preload image resources. `key` is the image URL, and `format` is used to force the image type.

### setImage ( key: `string`, value: `string` | [`IObject`](../../api/interfaces/IObject.md) | [`ILeaferImage`](../../api/interfaces/ILeaferImage.md) | [`ILeaferCanvas`](../../api/interfaces/ILeaferCanvas.md), format?: [`IExportFileType`](../../api/modules.md#iexportimagetype) ): [`ILeaferImage`](../../api/interfaces/ILeaferImage.md)

Customize the `key` of image resources. It is recommended to use the leafer:// protocol + file extension for easy identification when exporting resources.

`value` supports base64, raw images, canvas, and wrapped cross-platform images and canvas.

`format` is used to force the image type.

### set ( key: `string`, value: `any` )

Set the resource `key`. Image types must be [`ILeaferImage`](../../api/interfaces/ILeaferImage.md).

### get ( key: `string` ): `any`

Get the resource object by `key`.

### remove ( key: `string` )

Remove the resource by `key`. Memory will be automatically released after removal.

### destroy ( )

Destroy all resources.

## 　Examples

### Wait for the image to load, then add it to the engine

<<< @/code/resource/image/load.ts

### Convert raw image object to URL

<<< @/code/resource/image/image.ts

### Convert raw canvas object to URL

<<< @/code/resource/image/canvas.ts

### Convert cross-platform LeaferCanvas object to URL

<<< @/code/resource/image/leafer-canvas.ts

### Add a custom asynchronous task

[export()](../UI/export.md) will wait for this task to complete before exporting the image.

<<< @/code/resource/task.ts

### Add a queue task

<<< @/code/resource/queue.ts
