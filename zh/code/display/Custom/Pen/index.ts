// #自定义元素 [继承 Pen]
import { registerUI, dataProcessor, Pen, PenData, boundsType } from '@leafer-ui/core' // 引入跨平台核心包
import { IPenInputData, IPenData, IPen } from '@leafer-ui/interface'


interface ICustomPen extends IPen {
    createShapes(): void
}

// 定义数据

export interface ICustomPenInputData extends IPenInputData {
    size?: number
}

export interface ICustomPenData extends IPenData {
    size?: number
}

export class CustomPenData extends PenData implements ICustomPenData {
    protected _size: number

    protected setSize(value: number): void {
        this._size = value;
        (this.__leaf as CustomPen).createShapes()
    }
}

// 定义类

@registerUI()
class CustomPen extends Pen implements ICustomPen {

    public get __tag() { return 'CustomPen' }

    @dataProcessor(CustomPenData)
    declare public __: ICustomPenData

    @boundsType(0)
    declare public size: number // 增加自定义属性， 注意必须加上 declare 关键词

    constructor(data: ICustomPenInputData) {
        super(data)
    }

    // 根据size创建组合图形
    public createShapes(): void {
        this.clear() // 清除之前创建的路径

        const { size } = this.__
        const center = size / 2

        this.setStyle({ fill: '#FF4B4B', windingRule: 'evenodd' })
        this.roundRect(0, 0, size, size, size / 3).arc(center, center, size / 4)

        this.setStyle({ x: center, y: center, fill: '#FEB027' })
        this.arc(0, 0, size / 5)
    }

}


// 使用自定义元素
import { Leafer } from 'leafer-ui'

const leafer = new Leafer({ view: window })
const customPen = new CustomPen({ size: 100, fill: 'blue', draggable: true })

leafer.add(customPen)

setTimeout(() => {
    customPen.size = 200 // 2秒后放大尺寸
}, 2000)