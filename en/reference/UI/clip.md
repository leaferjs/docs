<script setup>
import Case from '/component/Case.vue'
</script>

# clip

Clip content that exceeds width and height.

[Box](../display/Box.md) and [Frame](../display/Frame.md) support clipping via `overflow`.

[Text](../display/Text.md) supports clipping via `textOverflow`.

In addition, you can quickly clip images using the `clip` mode in [image fill](./paint/image.md#clip-裁剪模式属性).

## Key Properties

### overflow: `IOverflow`

Set `overflow` to `hide` to clip the content of a Box.

```ts
type IOverflow = 'show' | 'hide'
```

### textOverflow: `IOverflow` ｜ `string`

Set `overflow` to `hide` to hide Text content that exceeds fixed width and height, or customize the ellipsis content.

```ts
type IOverflow = 'show' | 'hide'

// Custom ellipsis content

text.textOverflow = '...'
```

## 归属

### [UI Elements](../display/UI.md)

## Examples

<case name="Box" index=1 editor=false></case>

### Clip content exceeding width and height

:::code-group
<<< @/code/display/Box/overflow.ts [Leafer]
<<< @/code/display/Box/app/overflow.ts [App]
:::

<case name="ImageFill" index=4 editor=false></case>

### Quickly clip images

:::code-group
<<< @/code/property/fill/image/clip.ts [Leafer]
<<< @/code/property/fill/image/app/clip.ts [App]
:::
