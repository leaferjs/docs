<script setup>
import Case from '/component/Case.vue'
</script>

# 循环

## 关键属性

### loop: `boolean` | `number`

是否循环播放，可设置次数，默认为 false。

### loopDelay: `number`

进入下一次循环播放的延迟时间。

### swing?: `boolean` | `number`

是否摇摆循环播放，可设置次数（到达 to 的次数）， from -> to，to -> from -> to ... ，默认 false

## 归属

### [Animate 类](/plugin/in/animate/index.md)

## 示例

### 循环

::: code-group
<<< @/code/plugin/animate/options/loop/animation/ease.ts [animation]
<<< @/code/plugin/animate/options/loop/transition/ease.ts [transition]
<<< @/code/plugin/animate/options/loop/set/ease.ts [set]
<<< @/code/plugin/animate/options/loop/animate/ease.ts [animate]
<<< @/code/plugin/animate/options/loop/ease.ts [Animate]
:::

### 循环 2 次

::: code-group
<<< @/code/plugin/animate/options/loop/animation/count.ts [animation]
<<< @/code/plugin/animate/options/loop/transition/count.ts [transition]
<<< @/code/plugin/animate/options/loop/set/count.ts [set]
<<< @/code/plugin/animate/options/loop/animate/count.ts [animate]
<<< @/code/plugin/animate/options/loop/count.ts [Animate]
:::

### 循环间隔

::: code-group
<<< @/code/plugin/animate/options/loop/animation/delay.ts [animation]
<<< @/code/plugin/animate/options/loop/transition/delay.ts [transition]
<<< @/code/plugin/animate/options/loop/set/delay.ts [set]
<<< @/code/plugin/animate/options/loop/animate/delay.ts [animate]
<<< @/code/plugin/animate/options/loop/delay.ts [Animate]
:::

### 摇摆循环

::: code-group
<<< @/code/plugin/animate/options/loop/animation/swing.ts [animation]
<<< @/code/plugin/animate/options/loop/transition/swing.ts [transition]
<<< @/code/plugin/animate/options/loop/set/swing.ts [set]
<<< @/code/plugin/animate/options/loop/animate/swing.ts [animate]
<<< @/code/plugin/animate/options/loop/swing.ts [Animate]
:::
