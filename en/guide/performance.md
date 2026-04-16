# Performance Experience

LeaferJS 可以让你拥有瞬间创建 100 万个图形的能力。经过更细颗粒的代码模块划分，在拥有高性能的同时，我们并没有牺牲掉代码的可维护性，预计将来还会有很大的性能提升空间。

## Creation Speed

Creating 1 million interactive rectangles takes only about 1.5 seconds for initial rendering.

Around 10× faster than similar engines.

## Memory Usage

Creating 1 million interactive rectangles consumes only about 350MB of memory.

比同类引擎节省 10 倍左右的内存。

## Example Code

Below is an example that creates 1 million rectangles. You can copy and use it directly. It is recommended to use Chrome and check the console output.建议使用 Chrome 浏览器，通过控制台查看打印信息。

::: code-group

<<< @/code/performance/million.ts

<<< @/code/performance/million.html

:::

## Next Step

### [Quick Start](./basic/leafer.md)
