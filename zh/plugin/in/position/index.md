# position

position 布局，相对父级进行方位定位、四周边缘定位。

会自动修改元素的 x、y、width、height 信息，父级必须为有宽高属性的 [Box](../../../reference/display/Box.md)、[Frame](../../../reference/display/Frame.md) 元素。

## 安装插件

需要安装 position 插件才能使用，[点此访问 Github 仓库](https://github.com/leaferjs/leafer-in/tree/main/packages/position)。

::: code-group

```sh [npm]
npm install @leafer-in/position
```

```sh [pnpm]
pnpm add @leafer-in/position
```

```sh [yarn]
yarn add @leafer-in/position
```

```sh [bun]
bun add @leafer-in/position
```

:::

或通过 script 标签引入，使用全局变量 LeaferIN.position 访问插件内部功能。

::: code-group

```html [position.min]
<script src="https://unpkg.com/@leafer-in/position@2.3.2/dist/position.min.js"></script>
```

```html [position]
<script src="https://unpkg.com/@leafer-in/position@2.3.2/dist/position.js"></script>
```

<!-- https://unpkg.com 无法访问时，可替换为 https://cdn.jsdelivr.net/npm -->

:::

## 下一步

### [position 属性](../../../reference/UI/position.md#position-ialign-iinset)

## 示例

### 在父级的居中位置显示

<<< @/code/property/position/center.ts

### 距离父级四周各20px

<<< @/code/property/position/four.ts

### 距离父级左右各20px

<<< @/code/property/position/width.ts

### 距离父级右边20px

<<< @/code/property/position/right.ts

### 距离父级底部20px

<<< @/code/property/position/bottom.ts

### 距离父级底部 20%

<<< @/code/property/position/percent.ts
