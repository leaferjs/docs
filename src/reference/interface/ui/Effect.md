# Effect

## ShadowEffect

阴影特效（内阴影、外阴影）。

### x: number

x 轴方向的阴影偏移量。

### y: number

y 轴方向的阴影偏移量

### blur: number

阴影的模糊半径。

### spread?: number

扩展或收缩阴影的距离。

### color: [Color](./Color.md)

阴影颜色。

### blendMode?: [BlendMode](./BlendMode.md)

混合模式。

### visible?: boolean

是否可见， 默认为 true。

### box?: boolean

是否为 boxShadow （只显示图形外部的阴影）, 默认为 false。

```ts
interface ShadowEffect {
  x: number
  y: number
  blur: number
  spread?: number
  color: Color
  blendMode?: BlendMode
  visible?: boolean
  box?: boolean // 和 CSS3 中的 boxShadow 效果一致, 只显示图形外部的阴影
}
```

## BlurEffect

模糊特效（图层模糊、背景模糊）。

### blur: number

模糊半径。

### visible?: boolean

是否可见。

```ts
interface BlurEffect {
  blur: number
  visible?: boolean
}
```
