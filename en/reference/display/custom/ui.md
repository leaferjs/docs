# UI

## 最自由的自定义

```


```

## 示例

以定义星形为例:

```ts
import {
  UI,
  UIDataProcessor,
  PathDataHelper,
  dataProcessor,
  pathType,
} from 'leafer-ui'

import {
  IUI,
  IUIDataProcessor,
  IUIInputData,
  IPathCommandData,
} from 'leafer-ui-interface'

// 描述类
interface IStar extends IUI {
  points: number | string
  innerRadius: number
}

// 描述输入的数据格式
interface IStarInputData extends IUIInputData {
  points?: number | string
  innerRadius?: number
}

// 描述计算后的数据格式
interface IStarDataProcessor extends IUIDataProcessor {
  points?: number
  innerRadius?: number
}

// 数据处理容器， 默认会自动处理，可以重写set逻辑
class StarDataProcessor extends UIDataProcessor {
  private _points: number
  set points(value: number | string) {
    // do something...
    this._points = Number(value)
  }
}

// Star
export class Star extends UI implements IStart {
  @dataProcessor(StarDataProcessor)
  public __: IStartDataProcessor

  @pathType(5)
  public points: number | string

  @pathType(0.38)
  public innerRadius: number

  constructor(data?: IStartInputData) {
    super(data)
  }

  public __updatePathData() {
    const { width, height, points, innerRadius } = this.__
    const rx = width / 2,
      ry = height / 2,
      data: IPathCommandData = []

    this.__.path__ = { data }

    PathDataHelper.begin(data)
    PathDataHelper.moveTo(rx, 0)

    for (let i = 1; i < points * 2; i++) {
      PathDataHelper.lineTo(
        rx +
          (i % 2 === 0 ? rx : rx * innerRadius) *
            Math.sin((i * Math.PI) / points),
        ry -
          (i % 2 === 0 ? ry : ry * innerRadius) *
            Math.cos((i * Math.PI) / points)
      )
    }

    PathDataHelper.close()
  }
}
```
