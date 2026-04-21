<script setup>
import Case from '/component/Case.vue'
</script>

# Robot Element

The Robot element is similar to a game sprite. It integrates frame playback and preset actions, allowing you to quickly create game characters with walking and attack animations.

You can provide a list of images, or one or multiple sprite sheets containing animation actions. These actions will be automatically indexed, as shown below:

![Sprite sheet](/image/arrows-numbers.png)

<case name="Robot" editor=false></case>

Try holding and releasing different arrow keys～

::: tip Inheritance
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
<script src="https://unpkg.com/@leafer-in/robot@2.0.9/dist/robot.min.js"></script>
<script>
  const { Robot } = LeaferIN.robot
</script>
```

```html [robot]
<script src="https://unpkg.com/@leafer-in/robot@2.0.9/dist/robot.js"></script>
<script>
  const { Robot } = LeaferIN.robot
</script>
```

<!-- If unpkg is not accessible, you can replace it with https://cdn.jsdelivr.net/npm -->

:::

## Key Properties

### robot: [`IRobotKeyframe`](../../../api/interfaces/IRobotKeyframe.md) | [`IRobotKeyframe`](../../../api/interfaces/IRobotKeyframe.md)[]

The robot sprite frame sequence. Frames are loaded in order and indexed starting from 0.

You can provide a list of images, or one or multiple sprite sheets with different sizes. Frames can be extracted using `offset` and `size`.

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

## Example

<case name="Robot" editor=false></case>

### Interactive game arrow

<<< @/code/plugin/robot/index.ts
