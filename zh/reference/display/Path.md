<script setup>
import Case from '/component/Case.vue'
</script>

# Path 元素

绘制路径，可以画出任意形状的图形， 了解 [绘图命令](../interface/ui/PathData.md)。

<case name="Path" editor=false></case>

<br/>

::: tip 继承
Path &nbsp;>&nbsp; [UI](./UI.md)
:::

## 关键属性

### path: [`IPathString`](../interface/ui/PathData.md#ipathstring) ｜ [`IPathCommandData`](../interface/ui/PathData.md#ipathcommanddata) ｜ [`IPathCommandObject`](../interface/ui/PathData.md#ipathcommandobject)[]

路径数据，支持 [SVG 绘图字符串](../interface/ui/PathData.md#ipathstring) 、 [绘图数字数组](../interface/ui/PathData.md#ipathcommanddata)、[绘图对象数组](../interface/ui/PathData.md#ipathcommandobject)。

可通过 [pen 画笔](#pen-pathcreator) 快速绘制路径。

### windingRule: `WindingRule`

路径缠绕规则， 默认为非零缠绕 nonzero。

两条以上路径重合时的填充算法，可产生相加、相交、减去的效果。

```ts
type WindingRule: =  "nonzero" | "evenodd"
```

## 只读属性

### pen: [PathCreator](../path/PathCreator.md)

画笔，可以像 Canvas 2D API 一样快速 [绘制路径](../path/PathCreator.md)，并提供了一些新的方法。

画笔实际上修改的是元素 path 属性数据。

:::danger 注意事项

为了节省创建 pen 实例的数量，全局共享的是同一只画笔，访问 pen 属性时自动装载当前元素的 path，

所以 pen 要紧跟着元素，一次把内容绘制完成，如：rect.pen.moveTo(100,100).lineTo(200,200)。

:::

## 圆角属性

### cornerRadius: `number`

圆角大小，使路径拐角处变的圆滑。

::: tip 注意事项
曲线与折线、折线与曲线之间的圆角需安装 [corner 插件](../../plugin/in/corner/index.md) 才能使用。
:::

## box 元素

### [PathBox](../../plugin/in/box/PathBox.md)

<!-- ## 继承元素

### [UI](./UI.md) -->

<!-- ## API

### [Path](../../api/classes/Path.md) -->

## 示例

<case name="Path" index=5 editor=false></case>

### 创建路径

::: code-group
<<< @/code/display/Path/cafe.ts [Leafer]
<<< @/code/display/Path/app/cafe.ts [App]
:::

<case name="Pen" index=0 editor=false></case>

### 缠绕路径

底部圆角矩形与圆形相交，产生挖空效果。

::: code-group
<<< @/code/display/Path/group.ts [Leafer]
<<< @/code/display/Path/app/group.ts [App]
:::

<case name="Rect" index=6 editor=false></case>

### 使用画笔绘制

::: code-group
<<< @/code/property/path/Path/pen.ts [Leafer]
<<< @/code/property/path/Path/app/pen.ts [App]
:::

### 使用路径数据

::: code-group
<<< @/code/property/path/Path/path.ts [Leafer]
<<< @/code/property/path/Path/app/path.ts [App]
:::
