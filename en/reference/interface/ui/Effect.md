# Effect

## ShadowEffect

Shadow effect (inner shadow, outer shadow).

### x: number

Shadow offset in the x-axis direction.

### y: number

Shadow offset in the y-axis direction.

### blur: number

Blur radius of the shadow.

### spread?: number

Distance to expand or shrink the shadow.

### color: [Color](./Color.md)

Shadow color.

### blendMode?: [BlendMode](./BlendMode.md)

Blend mode.

### visible?: boolean

Whether visible, default is true.

### scaleFixed?: `'zoom-in'` | `false`

Whether to keep the original shadow scale when zooming the canvas. `'zoom-in'` means it stays fixed only when zooming in (it still scales when zooming out).

### box?: boolean

Whether it is a boxShadow (only shows outer shadow), default is false.

```ts
interface ShadowEffect {
  x: number
  y: number
  blur: number
  spread?: number
  color: Color
  blendMode?: BlendMode
  visible?: boolean
  box?: boolean // Same as CSS3 boxShadow effect, only shows outer shadow
}
```

## BlurEffect

Blur effect (layer blur, background blur).

### blur: number

Blur radius.

### visible?: boolean

Whether visible.

```ts
interface BlurEffect {
  blur: number
  visible?: boolean
}
```
