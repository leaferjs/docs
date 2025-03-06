<script setup>
import Case from '/component/Case.vue'
</script>

# clip

裁剪掉超出宽高的内容。

[Box](../display/Box.md) 和 [Frame](../display/Frame.md) 支持通过 overflow 实现裁剪内容的效果。

[Text](../display/Text.md) 支持通过 textOverflow 实现裁剪内容的效果。

另外通过 [图案填充](/reference/UI/paint/image.md#clip-裁剪模式属性) 的 clip 模式可以快速实现裁剪图片效果。

## 关键属性

### overflow: `IOverflow`

通过将 overflow 设为 `hide` 可以实现裁剪 Box 的效果。

```ts
type IOverflow = 'show' | 'hide'
```

### textOverflow: `IOverflow` ｜ `string`

通过将 overflow 设为 `hide` 可以隐藏超出固定宽高的 Text, 或自定义省略内容。

```ts
type IOverflow = 'show' | 'hide'

// 自定义省略内容

text.textOverflow = '...'
```

## 归属

### [UI](/reference/display/UI.md)

## 示例

<case name="Box" index=1 editor=false></case>

### 裁剪掉超出宽高的内容

<<< @/code/display/Box/overflow.ts

<case name="ImageFill" index=4 editor=false></case>

### 快速裁剪图片

<<< @/code/property/fill/image/clip.ts
