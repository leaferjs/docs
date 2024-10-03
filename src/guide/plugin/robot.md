<script setup>
import Case from '/component/Case.vue'
</script>

# Robot

Robot 元素类似于游戏中的精灵元素，集成了帧播放和动作预设功能，可以快速制作出具有行走和攻击动作的游戏角色。

::: tip 注意事项
需安装 [Robot 插件](/plugin/in/robot/) 才能使用。

:::

首先，你需要提供一张包含所有游戏动作的雪碧图，这些动作将会被自动编号，如下所示：

![雪碧图](/image/arrows-numbers.png)

<case name="Robot" editor=false></case>

按住方向键，移动箭头试试～

<<< @/code/plugin/robot/index.ts

## 恭喜 🎉

你已完成常用场景插件的学习，接下来将带你了解几个构成 Leafer 的重要知识，就算完成入门的学习了。

## 下一步

### [生命周期](/guide/life/ui.md)
