<script setup>
import Case from '/component/Case.vue'
</script>

# Rect 元素

绘制矩形、圆角矩形。

<case name="Rect" editor=false></case>

<br/>

::: tip 继承
Rect &nbsp;>&nbsp; [UI](./UI.md)
:::

## 关键属性

### width: `number`

宽度。

### height: `number`

高度。

## 圆角属性

### cornerRadius: `number` | `number`[]

圆角大小，可以分别设置 4 个圆角。

```ts
cornerRadius: [20, 10, 20, 10] // [topLeft, topRight, bottomRight, bottomLeft]
cornerRadius: [20, 10, 20] // [topLeft, (topRight-bottomLeft), bottomRight]
cornerRadius: [20, 10] // [ (topLeft-bottomRight), (topRight-bottomLeft)]
cornerRadius: 20 // all
```

<!-- ## 继承元素

### [UI](./UI.md) -->

<!-- ## API

### [Rect](/api/classes/Rect.md) -->

## 示例

<case name="Rect" index=0 editor=false></case>

### 绘制矩形

::: code-group
<<< @/code/display/Rect/rect.ts [Leafer]
<<< @/code/display/Rect/app/rect.ts [App]
:::

<case name="Rect" index=1 editor=false></case>

### 绘制圆角矩形

::: code-group
<<< @/code/display/Rect/corner.ts [Leafer]
<<< @/code/display/Rect/app/corner.ts [App]
:::

<case name="Rect" index=4 editor=false></case>

### 绘制不同圆角的矩形

::: code-group
<<< @/code/display/Rect/corners.ts [Leafer]
<<< @/code/display/Rect/app/corners.ts [App]
:::
