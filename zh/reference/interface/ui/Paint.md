# Paint

[`SolidPaint`](/reference/UI/paint/solid.md) | [`LinearGradient`](/reference/UI/paint/linear.md) | [`RadialGradient`](/reference/UI/paint/radial.md) | [`AngularGradient`](/reference/UI/paint/angular.md) | [`ImagePaint`](/reference/UI/paint/image.md)

填充对象，支持[纯色](/reference/UI/paint/solid.md)、 [线性渐变](/reference/UI/paint/linear.md)、[径向渐变](/reference/UI/paint/radial.md)、[角度渐变](/reference/UI/paint/angular.md)、[图案填充](/reference/UI/paint/image.md) 等类型，可用于填充、描边等。

```ts
type Paint =
  | SolidPaint
  | LinearGradient
  | RadialGradient
  | AngularGradient
  | ImagePaint
```
