<script setup>
import Case from '/component/Case.vue'
</script>

# eraser

擦除功能，将 Group 内的某个元素指定为橡皮擦，可以实现复杂的擦除效果，支持 2 种擦除类型。

<case name="Eraser" editor=false></case>

## 关键属性

### eraser: `boolean` ｜ `IEraserType`

元素设为橡皮擦后，自身不渲染，所在 Group 内的下层元素会被它擦除。

默认橡皮擦类型为 `pixel`，可设为 `path` 提高性能。

```ts
type IEraserType =
  | 'path' // 路径eraser，高性能，使用路径裁剪后擦除
  | 'pixel' // 像素eraser，使用每个像素的透明度，可以制作出复杂的效果
```

## 橡皮擦边界

橡皮擦的边界不会计算进 Group 的边界，但可以触发交互事件，不受 Group 边界影响， 除非将 [hitChildren](./hit.md#hitchildren-boolean) 设为 `false`。

## 归属

### [UI 元素](/reference/display/UI.md)

## 示例

<case name="Eraser" index=0 editor=false></case>

### 将圆环设为橡皮擦

<<< @/code/property/eraser/ui.ts

<case name="Eraser" index=1 editor=false></case>

### 将半透明的圆环设为橡皮擦

<<< @/code/property/eraser/opacity.ts

<case name="Eraser" index=2 editor=false></case>

### 将圆形组设为橡皮擦

<<< @/code/property/eraser/group.ts

<case name="Eraser" index=5 editor=false></case>

### 将路径设为橡皮擦

<<< @/code/property/eraser/path.ts
