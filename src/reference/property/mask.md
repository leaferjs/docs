<script setup>
import Case from '/component/Case.vue'
</script>

# mask

遮罩功能，将 Group 内的某个元素指定为遮罩，可以实现复杂的裁剪效果。

<case name="Mask" editor=false></case>

## 关键属性

### mask: `boolean` | `IMaskType`

元素设为遮罩后，自身不渲染（clipping 类型除外），所在 Group 内的上层元素受此遮罩影响。

默认遮罩类型为 `pixel`，可设为 `path` 提高性能。

```ts
type IMaskType =
｜'path'  // 路径遮罩，高性能，使用路径裁剪，不显示自身
| 'pixel' // 像素遮罩，使用每个像素的透明度，可以制作出复杂的效果，不显示自身
| 'grayscale' // 灰度遮罩，性能较差，会将色彩转为灰度值，再转为透明度遮罩（黑色为透明，白色为不透明），不显示自身
| 'clipping' // 剪贴遮罩，和PS中的剪贴蒙版一样的效果，使用每个像素的透明度，并会显示自身
| 'clipping-path' // 剪贴路径遮罩，高性能，和 clipping 类似，不同的是使用路径裁剪

```

## 遮罩边界

默认会将遮罩的边界作为 Group 的边界， 此时所有子元素仍然可以触发交互事件，不受 Group 边界影响， 除非将 [hitChildren](./hit.md#hitchildren-boolean) 设为 `false`。

## 归属

### [UI](/reference/display/UI.md)

## 示例

<case name="Mask" index=0 editor=false></case>

### 将圆环设为遮罩

<<< @/code/property/mask/ui.ts

<case name="Mask" index=1 editor=false></case>

### 将半透明的圆环设为遮罩

<<< @/code/property/mask/opacity.ts

<case name="Mask" index=2 editor=false></case>

### 将圆形组设为遮罩

<<< @/code/property/mask/group.ts

<case name="Mask" index=5 editor=false></case>

### 将路径设为遮罩

<<< @/code/property/mask/path.ts

## 快速设置遮罩

<case name="Mask" index=0 editor=false></case>

通过自定义函数可以为 Group 快速设置 mask 元素，默认会将遮罩添加到 Group 内 最底部。

<<< @/code/property/mask/fast.ts
