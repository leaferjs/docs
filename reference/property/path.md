<script setup>
import Case from '/component/Case.vue'
</script>

# path

路径优先模式，可用于修改 [Box](/reference/display/Box.md) 的形状、普通元素转路径。

设置 path 数据 或调用 [pen 画笔](#pen-pathcreator) 后可以将普通元素转为路径模式，优先渲染手动绘制的路径。

## 关键属性

### path: [`IPathString`](/reference/interface/ui/PathData#ipathstring) ｜ [`IPathCommandData`](/reference/interface/ui/PathData.md)

路径数据，支持 SVG 与 Cavnas [绘图命令](/reference/interface/ui/PathData.md)。

可通过 [pen 画笔](#pen-pathcreator) 快速绘制路径。

### windingRule: `WindingRule`

路径缠绕规则， 默认为非零缠绕 nonzero。

两条以上路径重合时的填充算法，可产生相加、相交、减去的效果。

```ts
type WindingRule: =  "nonzero" | "evenodd"
```

## 只读属性

### pathInputed: `boolean`

是否为路径模式。

将 `path` 设为 null 后，可还原为非路径模式。

### pen: [PathCreator](/reference/path/PathCreator.md)

画笔，可以像 canvas 一样快速绘制路径，并提供了一些新的方法。

画笔实际上修改的是元素 path 属性数据。

:::danger 注意事项

为了节省创建 pen 实例的数量，全局共享的是同一只画笔，访问 pen 属性时自动装载当前元素的 path，

所以 pen 要紧跟着元素，一次把内容绘制完成，如：rect.pen.moveTo(100,100).lineTo(200,200)。

:::

<!--@include: ../path/PathDrawer.md-->

## 归属

### [UI](/reference/display/UI.md)

## 示例

<case name="Rect" index=6 editor=false></case>

### 使用画笔绘制

<<< @/code/property/path/pen.ts

### 使用路径数据

<<< @/code/property/path/path.ts
