# @leafer-ui/node

### [web 版](/guide/install/ui/start) &nbsp; &nbsp; [worker 版](/guide/install/ui/worker/start) &nbsp; &nbsp; node 版 &nbsp; &nbsp; [小程序版](/guide/install/ui/miniapp/start)

##

在服务端 node 环境中运行，可用于后台绘图、生成图片、自动化测试，能够 [模拟用户交互](/reference/event/simulation.md)。

## 安装

::: code-group

```sh[npm]
npm install @leafer-ui/node
```

```sh[pnpm]
pnpm add @leafer-ui/node
```

```sh[yarn]
yarn add @leafer-ui/node
```

```sh[bun]
bun add @leafer-ui/node
```

:::

## skia &nbsp;｜&nbsp; [napi](./napi.md#skia-napi)

[skia-canvas](https://www.npmjs.com/package/skia-canvas) 用于在服务端环境中替代 Canvas 的功能， 底层基于 skia，需单独安装，安装编译时间会比较长，请耐心等待。

::: code-group

```sh[npm]
npm install skia-canvas
```

```sh[pnpm]
pnpm add skia-canvas
```

```sh[yarn]
yarn add skia-canvas
```

```sh[bun]
bun add skia-canvas
```

:::

### 体验

创建入口文件，实现一个包含矩形的画布，并生成图片显示。

::: code-group

<<< @/code/nodejs/skia/index.js

<<< @/code/nodejs/skia/esm.js [index.mjs]

:::

运行以下命令，然后在浏览器访问 localhost:3000

::: code-group

```sh [js]
node index.js
```

```sh [mjs]
node index.mjs
```

:::

###   使用自定义字体

通过 [skia-canvas](https://www.npmjs.com/package/skia-canvas) 的 FontLibrary.use() 方法加载字体后，再设置 fontFamily 即可。

https://skia-canvas.org/api/font-library

```js
import { FontLibrary } from 'skia-canvas'

// with default family name
FontLibrary.use([
  'fonts/Oswald-Regular.ttf',
  'fonts/Oswald-SemiBold.ttf',
  'fonts/Oswald-Bold.ttf',
])

// with an alias
FontLibrary.use('Grizwald', [
  'fonts/Oswald-Regular.ttf',
  'fonts/Oswald-SemiBold.ttf',
  'fonts/Oswald-Bold.ttf',
])
```
