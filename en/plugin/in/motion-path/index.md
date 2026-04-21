<script setup>
import Case from '/component/Case.vue'
</script>

# Motion Path

The motion path feature allows elements to move along another path, or to perform self-drawing (stroke animation).

## Install Plugin

You need to install the motion-path plugin to use it. [Visit Github repository](https://github.com/leaferjs/leafer-in/tree/main/packages/motion-path).

::: code-group

```sh [npm]
npm install @leafer-in/motion-path
```

```sh [pnpm]
pnpm add @leafer-in/motion-path
```

```sh [yarn]
yarn add @leafer-in/motion-path
```

```sh [bun]
bun add @leafer-in/motion-path
```

:::

Or include via script tag and access plugin features through the global variable `LeaferIN.motion-path`.

::: code-group

```html [motion-path.min]
<script src="https://unpkg.com/@leafer-in/motion-path@2.0.9/dist/motion-path.min.js"></script>
```

```html [motion-path]
<script src="https://unpkg.com/@leafer-in/motion-path@2.0.9/dist/motion-path.js"></script>
```

<!-- If unpkg is not accessible, you can replace it with https://cdn.jsdelivr.net/npm -->

:::

## Demo

<case name="AnimateCar" editor=false ></case>

<<< @/code/plugin/animate/car.ts

## Next Steps

### [motionPath](../../../reference/UI/motionPath.md)

### [motion](../../../reference/UI/motion.md)

### [getMotionTotal()](../../../reference/UI/getMotionTotal.md)

### [getMotionPoint()](../../../reference/UI/getMotionPoint.md)
