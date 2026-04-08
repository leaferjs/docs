# Color

颜色

```ts
type Color = StringColor | RGB | RGBA
```

### StringColor

```ts
type StringColor = string
// 支持 css 的各类颜色字符串， 如: #FF00000 rgb(255, 0, 0) hsl, hsb
```

### RGB

r g b 取值范围为 0 ～ 255。

```ts
interface RGB {
  r: number
  g: number
  b: number
}
```

### RGBA

r g b 取值范围为 0 ～ 255， a 取值范围 0 ~ 1。

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
