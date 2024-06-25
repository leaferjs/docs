# ImageEvent

图片事件。

## 关键属性

### image: [`ILeaferImage`](/api/interfaces/ILeaferImage.md)

原始图片封装对象。

### error: `string` | `object`

图片加载错误信息。

## 辅助属性

用于区分图形内使用多个图案填充的情况。

### attrName: `string`

图案填充的属性名: `fill` | `stroke`

### attrValue: [`ImagePaint`](/reference/property/paint/image.md)

图案填充的属性值。

## 事件名称

### ImageEvent.LOAD

图片开始加载。

`image.load`

### ImageEvent.LOADED

图片加载完成。

`image.loaded`

### ImageEvent.ERROR

图片加载失败。

`image.error`

## 继承

### [Event](./Event.md)

## API

### [ImageEvent](/api/classes/LeaferEvent.md)

## 示例

### 监听 Image 的图片加载

<<< @/code/event/image/image.ts

### 监听 fill 中的图片加载

<<< @/code/event/image/rect.ts

### 监听错误

<<< @/code/event/image/error.ts
