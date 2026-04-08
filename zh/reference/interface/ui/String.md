# String

字符串对象属性。

计划开发的功能。

## Percent

百分比， 如: 120%

## CornerRadiusString

矩形 [CornerRadius](../../display/Rect.md#cornerradius-number--number) 的字符串简写。

```scss
// 参数模版
topLeft topRight bottomRight bottomLeft

// 应用示例
corner-radius: 20 10 20 10; // topLeft topRight bottomRight bottomLeft
corner-radius: 20 10 20; // topLeft (topRight-bottomLeft) bottomRight
corner-radius: 20 10; // (topLeft-bottomRight) (topRight-bottomLeft)
```

## StrokeWidthString

矩形 StrokeWidth 的字符串简写

描边宽度

```scss
// 参数模版
top left bottom right

// 应用示例
stroke-width: 2 // all
stroke-width: 2 1 // (top bottom) (left right)
stroke-width: 2 1 1 // top (left right) bottom
stroke-width: 2 1 2 1 // top left bottom right
```

## DashPatternString

[DashPattern](/reference/UI/stroke.md#dashpattern-number) 的字符串简写

虚线图例

```scss
// 参数模版
pattern1 pattern2 ...

// 应用示例
dash-pattern: 10 10;
```

## PaintString

### [SolidPaintString](#solidpaintstring) | [GradientPaintString](#gradientpaintstring) | [ImagePaintString](#imagepaintstring)

[Paint](./Paint.md) 的字符串简写

```ts
type PaintString = SolidPaintString | GradientPaintString | ImagePaintString

// 使用字符串简写示例
const solidPaint = '#FF0000 darken'
const gradientPaint = 'linear(180deg, #FF0000, #FFFF00)'
const imagePaint = 'image(url, fit, 200%) lighten 80%'
const multiplePaint = 'image(url, fit, 200%) lighten, rgba(255,0,0,0.5)'
```

## SolidPaintString

[SolidPaint](/reference/UI/paint/solid.md) 的字符串简写

参数识别规则:

- color: 第一个参数
- blendMode: 混合模式字符串
- opacity: 带百分比的数字
- visible: hide 表示隐藏

```scss
// 参数模版
color blendMode? opacity? visible? // 逗号分隔多个颜色

// 应用示例
fill: #ff0000; // color
fill: #ff0000 darken; // color, blendMode
fill: #ff0000 100% hide, #ffff0080; // color, opacity, visible
```

## GradientPaintString

[GradientPaint](/reference/UI/paint/linear.md) 的字符串简写

参数识别规则:

- colorStop: 识别颜色开头的参数 (color) or (color position)
- from: 第 1 次两个数字连体 (x1 y1)
- to: 第 2 次两个数字连体 (x2 y2)
- stretch: 带百分比的单个数字
- rotation: 带 deg 的数字

```scss
// 参数模版
type(rotation?, strech?, colorStop...) blendMode? opacity? visible?
type(from, to, stretch?, colorStop...) ... // 逗号分隔多个填充

// 应用示例
fill: linear(#ff0000, #ffff00); // gradient(color...)
fill: linear(60deg, #ff0000, #ffff00); // gradient(rotation, color...)
fill: radial(0 0.5, 1 0.5, #ff0000 0.2, #ffff00 80%); // gradient(from, to, color...)
fill: radial(10deg, 20%, #ff0000, #ffff00); // gradient(rotation, stretch, color...)
```

## ImagePaintString

[ImagePaint](/reference/UI/paint/image.md) 的字符串简写

参数识别规则:

- offset: 2 个数字连体 (x y)
- scale: 带百分比的数字 (scale) or (scaleX scaleY)
- rotation: 带 deg 的数字

```scss
// 参数模版
image(url, mode, transform?) filter?(num) blendMode? opacity? visible?
image(url, mode, translate?, scale?, rotation?) ... // 逗号分隔多个填充
// translate?, scale?, rotation?顺序可以改变

// 应用示例
fill: image(t.png, fit); // image(url, mode)
fill: image(t.png, cover, 90deg); // image(url, mode, rotation)
fill: image(t.png, clip, 10 10); // image(url, mode, offset)
fill: image(t.png, clip, 5 6, 20%, 6deg); // offset, scale, rotation
fill: image(t.png, repeat, 200%) exposure(0.5) darken; // image() filter()... blendMode
```

## ShadowString

[ShadowEffect](./Effect.md#shadoweffect) 的字符串简写

参数识别规则:

- color: 颜色字符串
- blendMode: 混合模式字符串
- visible: hide 表示隐藏

```scss
// 参数模版
x y blur spread? color blendMode? visible?

// 应用示例
shadow: 2 4 10 rgba(0,0,0,0.2); // x y blur color
shadow: 2 4 10 20 rgba(0,0,0,0.2) darken; //  x y blur spread color blendMode
```
