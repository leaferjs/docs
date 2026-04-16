<script setup>
import Case from '/component/Case.vue'
</script>

# Robot Element

The Robot element is similar to a game sprite. It integrates frame playback and preset actions, allowing you to quickly create game characters with walking and attack animations.

You can provide a list of images, or one or multiple sprite sheets containing animation actions. These actions will be automatically indexed, as shown below:

![Sprite sheet](/image/arrows-numbers.png)

<case name="Robot" editor=false></case>

Try holding and releasing different arrow keys～

:::tip Inheritance
Robot  >  [UI](../../../reference/display/UI.md)
:::

## Install Plugin

You need to install the robot plugin to use it. [Visit Github repository](https://github.com/leaferjs/leafer-in/tree/main/packages/robot).

::: code-group

```sh [npm]
npm install @leafer-in/robot
```

```sh [pnpm]
pnpm add @leafer-in/robot
```

```sh [yarn]
yarn add @leafer-in/robot
```

```sh [bun]
bun add @leafer-in/robot
```

:::

Or include via script tag and access plugin features through the global variable `LeaferIN.robot`.

::: code-group

```html [robot.min]
<script src="https://unpkg.com/@leafer-in/robot@2.0.8/dist/robot.min.js"></script>
<script>
  const { Robot } = LeaferIN.robot
</script>
```

```html [robot]
<script src="https://unpkg.com/@leafer-in/robot@2.0.8/dist/robot.js"></script>
<script>
  const { Robot } = LeaferIN.robot
</script>
```

<!-- https://unpkg.com 无法访问时，可替换为 https://cdn.jsdelivr.net/npm -->

:::

## Key Properties

### robot: [`IRobotKeyframe`](../../../api/interfaces/IRobotKeyframe.md) | [`IRobotKeyframe`](../../../api/interfaces/IRobotKeyframe.md)[]

机器人的图片序列帧，按顺序加载，从 0 开始对图片帧进行编号。

可以为图片列表，或一张、多张不同尺寸的雪碧图，可通过 offset 与 size 定位图片。

```ts
interface IRobotKeyframe {
  url: string // image source

  offset?: IPointData // starting position for slicing frames (left-to-right, top-to-bottom), default 0,0
  size?: number | ISizeData // size of each frame; not required for separate images
  total?: number // total frames in a sprite sheet (required if using sprite sheet)
}
```

### actions: [`IRobotActions`](../../../api/interfaces/IRobotActions.md)

Preset action list (a key-value object composed of frame indices).

If defined as an array of numbers, frames will loop automatically according to FPS.

```ts
interface IRobotActions {
  [name: string]: number | number[] | IRobotAnimation // frame indices (start from 0)
}

interface IRobotAnimation {
  keyframes: number[] // frame indices
  loop?: boolean | number
  FPS?: number
}
```

### action: `string`

Current action name of the element. It must match a key in `actions`. Default is empty.

### now: `number`

Current playing frame index.

### FPS: `number`

Frames per second. Default is 12, max is 60.

### loop: `boolean`

Whether the current action loops playback.

## Inheritance

### Robot  >  [UI](../../../reference/display/UI.md)

<!-- ## API

### [Robot](../../../api/classes/Robot.md) -->

## Example

<case name="Robot" editor=false></case>

### Interactive game arrow

<<< @/code/plugin/robot/index.ts

<!-- 箭头的雪碧图

![雪碧图](/image/arrows.png) -->
