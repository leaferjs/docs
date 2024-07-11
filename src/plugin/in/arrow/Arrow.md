<script setup>
import Case from '/component/Case.vue'
</script>

# Arrow

箭头元素，丰富的箭头样式，并支持自定义。

<case name="Arrow" editor=false></case>

## 关键属性

### startArrow: `IArrowType`

起始箭头， 默认无。

[Line](/reference/display/Leaf.md) / [Path](/reference/display/Path.md) 等路径元素也支持此属性（需引入此插件包）。

### endArrow: `IArrowType`

结束箭头， 默认为 angle。

[Line](/reference/display/Leaf.md) / [Path](/reference/display/Path.md) 等路径元素也支持此属性（需引入此插件包）。

```ts
type IArrowType =
  | 'none'
  | 'angle' // 角度箭头（性能好）
  | 'angle-side' // 单边角度箭头
  | 'arrow' // 标准箭头
  | 'triangle' // 三角形箭头
  | 'triangle-flip' // 反向三角形箭头
  | 'circle' // 圆形箭头
  | 'circle-line' // 圆形箭头（线性）
  | 'square' // 方形箭头
  | 'square-line' // 方形箭头（线性）
  | 'diamond' // 菱形箭头
  | 'diamond-line' // 菱形箭头（线性）
  | 'mark' // 标注箭头
  | IPathDataArrow // 按照线宽为 1 自定义，箭头末端为（0，0），内部会自动处理缩放、旋转角度。

interface IPathDataArrow {
  connect?: IPathDataArrowOffset // 箭头与线条的连接点位置
  offset?: IPathDataArrowOffset // 箭头偏移距离，与末端对齐
  path: IPathCommandData // 只支持 M、L、C、Q、O 绘图命令
}

interface IPathDataArrowOffset {
  x?: number // 偏移距离（x轴）
  bevelJoin?: number // strokeJoin 为 bevel 时增加的偏移距离（x轴）
  roundJoin?: number // strokeJoin 为 round 时增加的偏移距离（x轴）
}
```

## points 模式

可通过 points 定义折线。

### points: `number`[]

通过坐标组 [ x1,y1, x2,y2, ...] 绘制折线。

### curve: `boolean` | `number`

是否转换为平滑路径，默认为 false。

可设置 0 ～ 1 控制曲率，默认为 0.5。

## 路径模式

### [path 优先模式](/reference/property/path.md)

## 圆角属性

### cornerRadius: `number`

圆角大小，使折线拐角处变的圆滑。

## 继承

### [Line](/reference/display/Line.md)

## API

### [Arrow](/api/classes/Arrow.md)

## 示例

<case name="Arrow" index=6 editor=false></case>

### 角度箭头

<<< @/code/plugin/arrow/angle.ts

<case name="Arrow" index=7 editor=false></case>

箭头变得更大一些

<<< @/code/plugin/arrow/angle/square.ts

<case name="Arrow" index=9 editor=false></case>

[strokeJoin](/reference/property/stroke.md#strokejoin-strokejoin) 变得平滑

<<< @/code/plugin/arrow/angle/round-cap.ts

<case name="Arrow" index=10 editor=false></case>

[strokeCap](/reference/property/stroke.md#strokecap-strokecap) 变得平滑

<<< @/code/plugin/arrow/angle/round-join.ts

<case name="Arrow" index=8 editor=false></case>

[strokeCap](/reference/property/stroke.md#strokecap-strokecap) / [strokeJoin](/reference/property/stroke.md#strokejoin-strokejoin) 都变得平滑

<<< @/code/plugin/arrow/angle/round.ts

<case name="Arrow" index=11 count=2 editor=false></case>

### 单边角度箭头

<<< @/code/plugin/arrow/angle-side.ts

<case name="Arrow" index=13 editor=false></case>

### 标准箭头

<<< @/code/plugin/arrow/arrow.ts

<case name="Arrow" index=23 editor=false></case>

[strokeCap](/reference/property/stroke.md#strokecap-strokecap) / [strokeJoin](/reference/property/stroke.md#strokejoin-strokejoin) 都变得平滑

<<< @/code/plugin/arrow/arrow-round.ts

<case name="Arrow" index=14 editor=false></case>

### 三角形箭头

<<< @/code/plugin/arrow/triangle.ts

<case name="Arrow" index=15 editor=false></case>

### 反向三角形箭头

<<< @/code/plugin/arrow/triangle-flip.ts

<case name="Arrow" index=16 editor=false></case>

### 圆形箭头

<<< @/code/plugin/arrow/circle.ts

<case name="Arrow" index=17 editor=false></case>

### 圆形箭头（线性）

<<< @/code/plugin/arrow/circle-line.ts

<case name="Arrow" index=18 editor=false></case>

### 方形箭头

<<< @/code/plugin/arrow/square.ts

<case name="Arrow" index=19 editor=false></case>

### 方形箭头（线性）

<<< @/code/plugin/arrow/square-line.ts

<case name="Arrow" index=20 editor=false></case>

### 菱形箭头

<<< @/code/plugin/arrow/diamond.ts

<case name="Arrow" index=21 editor=false></case>

### 菱形箭头（线性）

<<< @/code/plugin/arrow/diamond-line.ts

<case name="Arrow" index=22 editor=false></case>

### 标注箭头

<<< @/code/plugin/arrow/mark.ts
