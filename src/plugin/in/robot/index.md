<script setup>
import Case from '/component/Case.vue'
</script>

# Robot 插件

Robot 元素类似于游戏中的精灵元素，集成了帧播放和动作预设功能，可以快速制作出具有行走和攻击动作的游戏角色。

你需要提供一张包含所有游戏动作的雪碧图，这些动作将会被自动编号，如下所示：

![雪碧图](/image/arrows-numbers.png)

## 适用平台

支持所有平台。

## 安装插件

需要安装 robot 插件才能使用，[点此访问 Github 仓库](https://github.com/leaferjs/leafer-in/tree/main/packages/robot)。

::: code-group

```sh[npm]
npm install @leafer-in/robot
```

```sh[pnpm]
pnpm add @leafer-in/robot
```

```sh[yarn]
yarn add @leafer-in/robot
```

```sh[bun]
bun add @leafer-in/robot
```

:::

### 通过 script 标签引入

通过全局变量 LeaferIN.robot 访问插件内部功能。
::: code-group

```html [robot.min]
<script src="https://unpkg.com/@leafer-in/robot@1.2.1/dist/robot.min.js"></script>
<script>
  const { Robot } = LeaferIN.robot
</script>
```

```html [robot]
<script src="https://unpkg.com/@leafer-in/robot@1.2.1/dist/robot.js"></script>
<script>
  const { Robot } = LeaferIN.robot
</script>
```

https://unpkg.com 无法访问时，可替换为 https://cdn.jsdelivr.net/npm
:::

## 体验

<case name="Robot" editor=false></case>

按住方向键，移动箭头试试～

<<< @/code/plugin/robot/index.ts

## 下一步

### [Robot 元素](./Robot.md)
