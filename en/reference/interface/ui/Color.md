# Color

Color

```ts
type Color = StringColor | RGB | RGBA
```

### StringColor

```ts
type StringColor = string
// Supports various CSS color strings, such as: #FF0000, rgb(255, 0, 0), hsl, hsb
```

### RGB

r, g, b range from 0 to 255.

```ts
interface RGB {
  r: number
  g: number
  b: number
}
```

### RGBA

r, g, b range from 0 to 255, a ranges from 0 to 1.

```ts
interface RGBA {
  r: number
  g: number
  b: number
  a: number
}
```

### ColorStop

```ts
interface ColorStop {
  offset: number
  color: Color
}
```
