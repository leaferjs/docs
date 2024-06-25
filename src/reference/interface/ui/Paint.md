# Paint

[`SolidPaint`](/reference/property/paint/solid.md) | [`LinearGradient`](/reference/property/paint/linear.md) | [`RadialGradient`](/reference/property/paint/radial.md) | [`AngularGradient`](/reference/property/paint/angular.md) | [`ImagePaint`](/reference/property/paint/image.md)

填充对象，支持[纯色](/reference/property/paint/solid.md)、 [线性渐变](/reference/property/paint/linear.md)、[径向渐变](/reference/property/paint/radial.md)、[角度渐变](/reference/property/paint/angular.md)、[图案填充](/reference/property/paint/image.md) 等类型，可用于填充、描边等。

```ts
type Paint =
  | SolidPaint
  | LinearGradient
  | RadialGradient
  | AngularGradient
  | ImagePaint
```
