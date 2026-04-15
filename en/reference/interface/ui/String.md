# String

String object properties.

Planned features.

## Percent

Percentage, e.g.: 120%

## CornerRadiusString

String shorthand for rectangle [CornerRadius](../../display/Rect.md#cornerradius-number--number).

```scss
// Parameter template
topLeft topRight bottomRight bottomLeft

// Usage examples
corner-radius: 20 10 20 10; // topLeft topRight bottomRight bottomLeft
corner-radius: 20 10 20; // topLeft (topRight-bottomLeft) bottomRight
corner-radius: 20 10; // (topLeft-bottomRight) (topRight-bottomLeft)
```

## StrokeWidthString

String shorthand for rectangle StrokeWidth

Stroke width

```scss
// Parameter template
top left bottom right

// Usage examples
stroke-width: 2 // all
stroke-width: 2 1 // (top bottom) (left right)
stroke-width: 2 1 1 // top (left right) bottom
stroke-width: 2 1 2 1 // top left bottom right
```

## DashPatternString

String shorthand for [DashPattern](../../UI/stroke.md#dashpattern-number)

Dash pattern

```scss
// Parameter template
pattern1 pattern2 ...

// Usage examples
dash-pattern: 10 10;
```

## PaintString

### [SolidPaintString](#solidpaintstring) | [GradientPaintString](#gradientpaintstring) | [ImagePaintString](#imagepaintstring)

String shorthand for [Paint](./Paint.md)

```ts
type PaintString = SolidPaintString | GradientPaintString | ImagePaintString

// String shorthand usage examples
const solidPaint = '#FF0000 darken'
const gradientPaint = 'linear(180deg, #FF0000, #FFFF00)'
const imagePaint = 'image(url, fit, 200%) lighten 80%'
const multiplePaint = 'image(url, fit, 200%) lighten, rgba(255,0,0,0.5)'
```

## SolidPaintString

String shorthand for [SolidPaint](../../UI/paint/solid.md)

Parameter parsing rules:

- color: first parameter
- blendMode: blend mode string
- opacity: number with percentage
- visible: hide means hidden

```scss
// Parameter template
color blendMode? opacity? visible? // comma-separated for multiple colors

// Usage examples
fill: #ff0000; // color
fill: #ff0000 darken; // color, blendMode
fill: #ff0000 100% hide, #ffff0080; // color, opacity, visible
```

## GradientPaintString

String shorthand for [GradientPaint](../../UI/paint/linear.md)

Parameter parsing rules:

- colorStop: parameters starting with color (color) or (color position)
- from: first pair of numbers (x1 y1)
- to: second pair of numbers (x2 y2)
- stretch: single number with percentage
- rotation: number with deg

```scss
// Parameter template
type(rotation?, strech?, colorStop...) blendMode? opacity? visible?
type(from, to, stretch?, colorStop...) ... // comma-separated for multiple fills

// Usage examples
fill: linear(#ff0000, #ffff00); // gradient(color...)
fill: linear(60deg, #ff0000, #ffff00); // gradient(rotation, color...)
fill: radial(0 0.5, 1 0.5, #ff0000 0.2, #ffff00 80%); // gradient(from, to, color...)
fill: radial(10deg, 20%, #ff0000, #ffff00); // gradient(rotation, stretch, color...)
```

## ImagePaintString

String shorthand for [ImagePaint](../../UI/paint/image.md)

Parameter parsing rules:

- offset: pair of numbers (x y)
- scale: number with percentage (scale) or (scaleX scaleY)
- rotation: number with deg

```scss
// Parameter template
image(url, mode, transform?) filter?(num) blendMode? opacity? visible?
image(url, mode, translate?, scale?, rotation?) ... // comma-separated for multiple fills
// translate?, scale?, rotation? order can be changed

// Usage examples
fill: image(t.png, fit); // image(url, mode)
fill: image(t.png, cover, 90deg); // image(url, mode, rotation)
fill: image(t.png, clip, 10 10); // image(url, mode, offset)
fill: image(t.png, clip, 5 6, 20%, 6deg); // offset, scale, rotation
fill: image(t.png, repeat, 200%) exposure(0.5) darken; // image() filter()... blendMode
```

## ShadowString

String shorthand for [ShadowEffect](./Effect.md#shadoweffect)

Parameter parsing rules:

- color: color string
- blendMode: blend mode string
- visible: hide means hidden

```scss
// Parameter template
x y blur spread? color blendMode? visible?

// Usage examples
shadow: 2 4 10 rgba(0,0,0,0.2); // x y blur color
shadow: 2 4 10 20 rgba(0,0,0,0.2) darken; //  x y blur spread color blendMode
```
