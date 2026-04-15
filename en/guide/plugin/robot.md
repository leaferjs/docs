<script setup>
import Case from '/component/Case.vue'
</script>

# Robot Game Element

The Robot element is similar to a sprite in games. It integrates frame playback and predefined actions, allowing you to quickly create game characters with walking and attacking animations.

::: tip Note
You must install the [Robot plugin](../../plugin/in/robot/index.md) to use this feature, or install [leafer-game](../install/game/start.md), which already includes the Robot plugin.

:::

You can provide a list of images, or one or multiple sprite sheets containing animation states. These actions will be automatically indexed, as shown below:

![Sprite Sheet](/image/arrows-numbers.png)

<case name="Robot" editor=false></case>

Try holding and releasing different arrow keys.

<<< @/code/plugin/robot/index.ts

## Next Step

### [Auto Layout](./flow.md)
