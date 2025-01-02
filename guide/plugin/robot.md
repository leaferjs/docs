<script setup>
import Case from '/component/Case.vue'
</script>

# Robot 游戏元素

Robot 元素类似于游戏中的精灵元素，集成了帧播放和动作预设功能，可以快速制作出具有行走和攻击动作的游戏角色。

::: tip 注意事项
需安装 [Robot 插件](/plugin/in/robot/) 才能使用，或直接安装 [leafer-game](/guide/install/game/start.md)（已集成 Robot 插件）。

:::

首先，你需要提供一张包含所有游戏动作的雪碧图，这些动作将会被自动编号，如下所示：

![雪碧图](/image/arrows-numbers.png)

<case name="Robot" editor=false></case>

按住、抬起不同的方向键试试～

<<< @/code/plugin/robot/index.ts

## 下一步

### [自动布局](/guide/plugin/flow)
