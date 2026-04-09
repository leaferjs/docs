// #自定义元素 [自定义线条]
import { UI, PathCommandDataHelper, affectStrokeBoundsType, PathBounds, Debug, registerUI, dataProcessor, UIData } from '@leafer-ui/core' // 引入跨平台核心包
import { IStrokeAlign, IUIInputData, IUIData } from '@leafer-ui/interface'


// 定义数据

interface ICustomInputData extends IUIInputData { }
interface ICustomData extends IUIData { }

class CustomData extends UIData implements ICustomData {

}


// 定义类

const { moveTo, lineTo, closePath } = PathCommandDataHelper

@registerUI()
class CustomLine extends UI {

    public get __tag() { return 'CustomLine' }

    @dataProcessor(CustomData)
    declare public __: ICustomData

    // 画非闭合的线条，需要修改 strokeAlign 默认值为 ‘center’（UI默认是内描边）
    @affectStrokeBoundsType('center')
    declare public strokeAlign: IStrokeAlign

    constructor(data: ICustomInputData) {
        super(data)
        // ...
    }

    // 1. 绘制自定义路径
    public __updatePath() {
        const { width, height } = this.__
        const path: number[] = this.__.path = [] // 相当于 beginPath
        moveTo(path, 0, 0)
        lineTo(path, width, height)
        closePath(path)
    }

    // 2. (可选）如果通过width、height属性无法确定图形 bounds，需要override此函数，从路径中获取 bounds
    public __updateBoxBounds(): void {
        PathBounds.toBounds(this.__.path, this.__layout.boxBounds)
    }

}


// 使用自定义元素
import { Leafer } from 'leafer-ui'

const leafer = new Leafer({ view: window })
const custom = new CustomLine({ x: 100, y: 100, width: 200, height: 200, stroke: 'black', draggable: true })
leafer.add(custom)

Debug.enable = true
Debug.showRepaint = true // 通过显示重绘区域，查看图形边界是否准确