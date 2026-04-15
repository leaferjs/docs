# PathData

### IPathString

String path data.

Supports SVG + Canvas drawing commands.

```ts
const data = 'M 0 0 L 100 100 L 0 100 Z'
```

### IPathCommandData

Numeric path data, using a high-performance, pure numeric one-dimensional array.

Only supports Canvas drawing commands. Can be quickly created via [PathCreator](../../path/PathCreator.md).

```ts
const data = [1, 0, 0, 2, 100, 100, 2, 0, 100, 11] // M 0 0 L 100 100 L 0 100 Z
```

### IPathCommandObject

Object form of M | L | C | Q | Z drawing commands, highly readable and convenient for modifying data, with average performance.

```ts
export type IPathCommandObject =
  | MoveToCommandObject
  | LineToCommandObject
  | BezierCurveToCommandObject
  | QuadraticCurveToCommandObject
  | ClosePathCommandObject // M | L | C | Q | Z   commands drawable by canvas

// Path command objects
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

## Drawing Commands

### SVG Commands

| Command | Code | Parameters                                                | Data Length | comment                                     |
| ------- | ---- | --------------------------------------------------------- | ----------- | ------------------------------------------- |
| M       | 1    | x, y                                                      | 3           | moveTo                                      |
| m       | 10   | x, y                                                      | 3           | moveTo relative coordinates                 |
| L       | 2    | x, y                                                      | 3           | lineTo                                      |
| l       | 20   | x, y                                                      | 3           | lineTo relative coordinates                 |
| H       | 3    | x                                                         | 2           | lineToX                                     |
| h       | 30   | x                                                         | 2           | lineToX relative coordinates                |
| V       | 4    | y                                                         | 2           | lineToY                                     |
| v       | 40   | y                                                         | 2           | lineToY relative coordinates                |
| C       | 5    | x1, y1, x2, y2, x, y                                      | 7           | bezierCurveTo cubic Bézier curve            |
| c       | 50   | x1, y1, x2, y2, x, y                                      | 7           | bezierCurveTo relative coordinates          |
| S       | 6    | x2, y2, x, y                                              | 5           | smoothBezierCurveTo smooth cubic Bézier     |
| s       | 60   | x2, y2, x, y                                              | 5           | smoothBezierCurveTo relative coordinates    |
| Q       | 7    | x1, y1, x, y                                              | 5           | quadraticCurveTo quadratic Bézier curve     |
| q       | 70   | x1, y1, x, y                                              | 5           | quadraticCurveTo relative coordinates       |
| T       | 8    | x, y                                                      | 3           | smoothQuadraticCurveTo smooth quadratic     |
| t       | 80   | x, y                                                      | 3           | smoothQuadraticCurveTo relative coordinates |
| A       | 9    | rx, ry, x-axis-rotation, large-arc-flag, sweep-flag, x, y | 8           | ellipticalArc arc                           |
| a       | 90   | rx, ry, x-axis-rotation, large-arc-flag, sweep-flag, x, y | 8           | ellipticalArc relative coordinates          |
| Z       | 11   |                                                           | 1           | closePath                                   |
| z       | 11   |                                                           | 1           | closePath                                   |
| R       | 12   | x, y                                                      | 3           | catmullRom smooth curve (not supported yet) |

### canvas Commands

| Command | Code | Parameters                                                              | Data Length | comment                           |
| ------- | ---- | ----------------------------------------------------------------------- | ----------- | --------------------------------- |
| M       | 1    | x, y                                                                    | 3           | moveTo                            |
| L       | 2    | x, y                                                                    | 3           | lineTo                            |
| C       | 5    | x1, y1, x2, y2, x, y                                                    | 7           | bezierCurveTo cubic Bézier        |
| Q       | 7    | x1, y1, x, y                                                            | 5           | quadraticCurveTo quadratic Bézier |
| Z       | 11   |                                                                         | 1           | closePath                         |
|         |      |                                                                         |             |                                   |
| N       | 21   | x, y, width, height                                                     | 5           | rect                              |
| D       | 22   | x, y, width, height, radius1, radius2,radius3,radius4                   | 9           | roundRect                         |
| X       | 23   | x, y, width, height, radius                                             | 6           | roundRect simple                  |
| G       | 24   | cx, cy, radiusX, radiusY, rotation, startAngle, endAngle, anticlockwise | 9           | ellipse                           |
| F       | 25   | cx, cy, radiusX, radiusY                                                | 5           | ellipse simple                    |
| O       | 26   | cx, cy, radius, startAngle, endAngle, anticlockwise                     | 7           | arc                               |
| P       | 27   | cx, cy, radius                                                          | 4           | arc simple                        |
| U       | 28   | x1, y1, x2, y2, radius                                                  | 6           | arcTo                             |
