// #自定义元素 [使用 canvas.context 自定义图形]
import { UI, registerUI, dataProcessor, UIData } from '@leafer-ui/core' // 引入跨平台核心包
import { IUIInputData, ILeaferCanvas, IRadiusPointData, IUIData } from '@leafer-ui/interface'


// 定义数据

interface ICustomInputData extends IUIInputData { }
interface ICustomData extends IUIData { }

class CustomData extends UIData implements ICustomData {

}


// 定义类

@registerUI()
class Custom extends UI {

    public get __tag() { return 'Custom' }

    @dataProcessor(CustomData)
    declare public __: ICustomData

    constructor(data: ICustomInputData) {
        super(data)
        // ...
    }

    // 1. 如果通过width、height属性无法确定图形 bounds，需要重写此函数手动计算bounds
    __updateBoxBounds(): void {
        const box = this.__layout.boxBounds
        const { width, height } = this.__
        box.x = 0
        box.y = 0
        box.width = width
        box.height = height
    }

    // 2. 绘制碰撞路径
    __drawHitPath(hitCanvas: ILeaferCanvas): void {
        const { context } = hitCanvas
        const { x, y, width, height } = this.__layout.boxBounds
        context.beginPath()
        context.rect(x, y, width, height)
    }

    // 3. 碰撞检测(可选), 不重写此方法时，需要元素有fill或stroke值。
    __hit(inner: IRadiusPointData): boolean {
        const { context } = this.__hitCanvas
        if (context.isPointInPath(inner.x, inner.y)) return true

        // 碰撞半径
        const lineWidth = inner.radiusX * 2 // 可增加自定的线宽
        if (context.lineWidth !== lineWidth) {
            context.lineWidth = lineWidth
            context.stroke()
        }

        return context.isPointInStroke(inner.x, inner.y)
    }

    // 4. 绘制自定义内容
    __draw(canvas: ILeaferCanvas): void {
        const { context } = canvas
        const { width, height } = this.__

        canvas.setStrokeOptions(this.__)  // 绘制描边前，需要设置一下描边选项（可选）。

        context.fillStyle = 'blue'
        context.fillRect(0, 0, width / 2, height)

        context.strokeStyle = 'blue'
        context.strokeRect(width / 2, 0.5, width / 2, height - 1)
    }

}


// 使用自定义元素
import { Leafer } from 'leafer-ui'

const leafer = new Leafer({ view: window })

const custom = new Custom({ x: 100, y: 100, width: 200, height: 50, draggable: true })

leafer.add(custom)