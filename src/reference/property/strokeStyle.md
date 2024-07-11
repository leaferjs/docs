<script setup>
import Case from '/component/Case.vue'
</script>

# stroke

描边颜色。

<case name="Stroke" editor=false></case>

## 描边样式属性

### strokeAlign?: StrokeAlign

描边的对齐方式。

```ts
type StrokeAlign = 'inside' | 'outside' | 'center' // 居中 ｜ 内部 ｜ 外部
```

### strokeWidth?: number

描边的宽度。

### strokeCap?: StrokeCap

描边的端点形状。

```ts
type StrokeCap =
  | 'none' // 无
  | 'round' // 圆形
  | 'square' // 方形
  | 'arrow-lines' // 线性箭头
  | 'arrow-equilateral' // 面形箭头
```

### strokeJoin?: StrokeJoin

描边的拐角处理。

```ts
type StrokeJoin = 'bevel' | 'round' | 'miter' // 平角 ｜ 圆角 ｜ strokeMiterLimit
```

### dashPattern?: number[]

虚线描边的间隙数值。

```ts
rect.dashPattern = [20, 10]
rect.dashPattern = '20 10' // DashPatternString
```

### miterLimit?: number

描边的拐角角度，默认为 10。

如果拐角角度超过 miterLimit 的值，边角会以 strokeJoin 的 "bevel" 类型来显示。
