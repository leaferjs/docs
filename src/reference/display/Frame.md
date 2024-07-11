<script setup>
import Case from '/component/Case.vue'
</script>

# Frame

创建画板。默认白色背景、会裁剪掉超出宽高的内容，类似于 HTML5 中的一个页面。

<case name="Frame" editor=false></case>

## 关键属性

### width: `number`

宽度。

### height: `number`

高度。

### fill: `string` | [`Paint`](../interface/ui/Paint) ｜ [`Paint`](../interface/ui/Paint.md)[]

默认白色背景。

### overflow: `IOverflow`

如何显示超出宽高的内容，默认为 hide。

```ts
type IOverflow = 'show' | 'hide'
```

## 继承

### [Box](./Box.md)

## API

### [Frame](/api/classes/Frame.md)

## 示例

<case name="Frame" index=0 editor=false></case>

### 创建画板

<<< @/code/display/Frame/create.ts
