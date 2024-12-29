# PathData

### IPathString

字符串路径数据。

支持 SVG + Canvas 的绘图命令。

```ts
const data = 'M 0 0 L 100 100 L 0 100 Z'
```

### IPathCommandData

数字路径数据, 使用高性能、纯数字的一维数组。

只支持 Canvas 绘图命令，可通过 [PathCreator](/reference/path/PathCreator.md) 快速创建。

```ts
const data = [1, 0, 0, 2, 100, 100, 2, 0, 100, 11] // M 0 0 L 100 100 L 0 100 Z
```

### IPathCommandObject

M | L | C | Q | Z 绘图命令的对象，可读性高，方便修改数据，性能一般。

```ts
export type IPathCommandObject =
  | MoveToCommandObject
  | LineToCommandObject
  | BezierCurveToCommandObject
  | QuadraticCurveToCommandObject
  | ClosePathCommandObject // M | L | C | Q | Z   canvas可以绘制的命令

// 路径命令对象
export interface MoveToCommandObject {
  name: 'M' //  moveTo
  x: number
  y: number
}
export interface LineToCommandObject {
  name: 'L' // lineTo
  x: number
  y: number
}

export interface BezierCurveToCommandObject {
  name: 'C' // bezierCurveTo
  x1: number
  y1: number
  x2: number
  y2: number
  x: number
  y: number
}

export interface QuadraticCurveToCommandObject {
  name: 'Q' // quadraticCurveTo
  x1: number
  y1: number
  x: number
  y: number
}

export interface ClosePathCommandObject {
  name: 'Z' // closePath
}
```

## 绘图命令

### SVG 命令

| 命令 | 命令编码 | 参数                                                      | 数据长度 | comment                                     |
| ---- | -------- | --------------------------------------------------------- | -------- | ------------------------------------------- |
| M    | 1        | x, y                                                      | 3        | moveTo                                      |
| m    | 10       | x, y                                                      | 3        | moveTo 相对坐标                             |
| L    | 2        | x, y                                                      | 3        | lineTo                                      |
| l    | 20       | x, y                                                      | 3        | lineTo 相对坐标                             |
| H    | 3        | x                                                         | 2        | lineToX                                     |
| h    | 30       | x                                                         | 2        | lineToX 相对坐标                            |
| V    | 4        | y                                                         | 2        | lineToY                                     |
| v    | 40       | y                                                         | 2        | lineToY 相对坐标                            |
| C    | 5        | x1, y1, x2, y2, x, y                                      | 7        | bezierCurveTo 三次贝赛尔曲线                |
| c    | 50       | x1, y1, x2, y2, x, y                                      | 7        | bezierCurveTo 相对坐标                      |
| S    | 6        | x2, y2, x, y                                              | 5        | smoothBezierCurveTo 平滑的三次贝赛尔曲线    |
| s    | 60       | x2, y2, x, y                                              | 5        | smoothBezierCurveTo 相对坐标                |
| Q    | 7        | x1, y1, x, y                                              | 5        | quadraticCurveTo 二次贝赛尔曲线             |
| q    | 70       | x1, y1, x, y                                              | 5        | quadraticCurveTo 相对坐标                   |
| T    | 8        | x, y                                                      | 3        | smoothQuadraticCurveTo 平滑的二次贝赛尔曲线 |
| t    | 80       | x, y                                                      | 3        | smoothQuadraticCurveTo 相对坐标             |
| A    | 9        | rx, ry, x-axis-rotation, large-arc-flag, sweep-flag, x, y | 8        | ellipticalArc 弧线                          |
| a    | 90       | rx, ry, x-axis-rotation, large-arc-flag, sweep-flag, x, y | 8        | ellipticalArc 相对坐标                      |
| Z    | 11       |                                                           | 1        | closePath                                   |
| z    | 11       |                                                           | 1        | closePath                                   |
| R    | 12       | x, y                                                      | 3        | catmullRom 平滑曲线 (暂不支持)              |

### canvas 命令

| 命令   | 命令编码 | 参数                                                                    | 数据长度 | comment                         |
| ------ | -------- | ----------------------------------------------------------------------- | -------- | ------------------------------- |
| M      | 1        | x, y                                                                    | 3        | moveTo                          |
| L      | 2        | x, y                                                                    | 3        | lineTo                          |
| C      | 5        | x1, y1, x2, y2, x, y                                                    | 7        | bezierCurveTo 三次贝赛尔曲线    |
| Q      | 7        | x1, y1, x, y                                                            | 5        | quadraticCurveTo 二次贝赛尔曲线 |
| Z      | 11       |                                                                         | 1        | closePath                       |
| &nbsp; |          |                                                                         |          |                                 |
| N      | 21       | x, y, width, height                                                     | 5        | rect                            |
| D      | 22       | x, y, width, height, radius1, radius2,radius3,radius4                   | 9        | roundRect                       |
| X      | 23       | x, y, width, height, radius                                             | 6        | roundRect simple                |
| G      | 24       | cx, cy, radiusX, radiusY, rotation, startAngle, endAngle, anticlockwise | 9        | ellipse                         |
| F      | 25       | cx, cy, radiusX, radiusY                                                | 5        | ellipse simple                  |
| O      | 26       | cx, cy, radius, startAngle, endAngle, anticlockwise                     | 7        | arc                             |
| P      | 27       | cx, cy, radius                                                          | 4        | arc simple                      |
| U      | 28       | x1, y1, x2, y2, radius                                                  | 6        | arcTo                           |
