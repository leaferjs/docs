<script setup>
import Case from '/component/Case.vue'
</script>

# Robot

机器人元素，类似游戏中的精灵。

![雪碧图](/image/arrows-numbers.png)

<!-- <case name="Robot" editor=false></case>

按住方向键，移动箭头试试～ -->

## 关键属性

### robot: [`IRobotKeyframe`](/api/interfaces/IRobotKeyframe.md) | [`IRobotKeyframe`](/api/interfaces/IRobotKeyframe.md) []

机器人的图片序列帧，按顺序加载，从 0 开始对图片帧进行编号。

可以为一张、多张不同尺寸的雪碧图，或多张不同尺寸的独立图片，可通过 offset 与 size 定位图片。

```ts
interface IRobotKeyframe {
  url: string // 图片

  offset?: IPointData // 定位坐标，从此处开始从左往右、自上而下的读取多帧图片， 默认为 0,0
  size?: number | ISizeData // 每一帧的尺寸，非雪碧图的独立图片可不设置
  total?: number // 一张图上有多帧时，必须设置读取总数，否则会按1帧处理
}
```

### actions: [`IRobotActions`](/api/interfaces/IRobotActions.md)

预设动作列表， 一个键值对象（通过图片帧编号进行组合）。

动作为数组编号时，将按 FPS 帧率自动循环播放。

```ts
interface IRobotActions {
  [name: string]: number | number[] // 图片帧编号（默认从0开始）
}
```

### action: `string`

元素当前的动作， 动作名为 actions 的键名， 默认为空。

### now: `number`

当前播放的图片帧编号

### FPS: `number`

每秒播放的帧率，默认为 12， 最大 60。

### loop: `boolean`

是否循环播放动作中的图片帧。

## 继承

### [UI](/reference/display/UI.md)

## API

### [Robot](/api/classes/Robot.md)

## 示例

<case name="Robot" editor=false></case>

### 可交互的游戏箭头

<<< @/code/plugin/robot/index.ts

<!-- 箭头的雪碧图

![雪碧图](/image/arrows.png) -->
