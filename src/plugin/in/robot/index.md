<script setup>
import Case from '/component/Case.vue'
</script>

# Robot 插件

Robot 机器人，类似游戏中的精灵，可用于制作游戏动作、组态动画。

通过加载图片序列帧进行显示、播放，产生各种固定、动态动作。

![雪碧图](/image/arrows-numbers.png)

## 适用平台

支持所有平台。

## 安装插件

需要安装 robot 插件才能使用，[点此访问 Github 仓库](https://github.com/leaferjs/in/tree/main/packages/robot)。

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

## 通过 script 标签引入

通过全局变量 LeaferIN.robot 访问插件内部功能。
::: code-group

```html [robot.min]
<script src="https://unpkg.com/@leafer-in/robot@1.0.3/dist/robot.min.js"></script>
<script>
  const { Robot } = LeaferIN.robot
</script>
```

```html [robot]
<script src="https://unpkg.com/@leafer-in/robot@1.0.3/dist/robot.js"></script>
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
